// @ts-check

import * as React from 'react';

/**
 * @typedef {object} State
 * @prop {number} index
 * @prop {({ key: string } & (State | {}))[]} routes
 * @prop {boolean} [isTransitioning]
 *
 * @typedef {object} ParentPayload
 * @prop {string} type
 * @prop {object} action
 * @prop {State} state
 * @prop {State | undefined} lastState
 * @prop {string} [context]
 *
 * @typedef {object} Payload
 * @prop {string} type
 * @prop {object} action
 * @prop {State | {key: string}} state
 * @prop {State | {key: string}|undefined} lastState
 * @prop {string} [context]
 *
 * @typedef {object} Props
 * @prop {object} navigation
 * @prop {Function | undefined} navigation.addListener
 * @prop {Function | undefined} navigation.removeListener
 * @prop {() => boolean} navigation.isFocused
 * @prop {() => object | undefined} navigation.dangerouslyGetParent
 * @prop {State} navigation.state
 * @prop {(target: string, type: string, data: any) => void} onEvent
 *
 * @extends {React.Component<Props>}
 */
export default class NavigationEventManager extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;

    navigation.addListener?.('willFocus', this._handleWillFocus);
    navigation.addListener?.('willBlur', this._handleWillBlur);
  }

  componentWillUnmount() {
    const { navigation } = this.props;

    navigation.removeListener?.('willFocus', this._handleWillBlur);
    navigation.removeListener?.('willBlur', this._handleWillBlur);
  }

  /**
   * @param {ParentPayload} payload
   */
  _handleAction = ({ state, lastState, action, type, context }) => {
    const { onEvent } = this.props;

    const previous = lastState?.routes[lastState.index];
    const current = state.routes[state.index];

    const payload = {
      context: `${current.key}:${action.type}_${context || 'Root'}`,
      state: current,
      lastState: previous,
      action,
      type,
    };

    if (previous?.key !== current.key) {
      this._handleFocusedKey(current.key, payload);
    }

    if (
      lastState?.isTransitioning !== state.isTransitioning &&
      state.isTransitioning === false
    ) {
      if (previous) {
        onEvent(previous.key, 'didBlur', payload);
      }

      onEvent(current.key, 'didFocus', payload);
    }

    onEvent(current.key, 'action', payload);
  };

  /**
   * @param {ParentPayload} payload
   */
  _handleWillFocus = ({ lastState, action, context, type }) => {
    const { navigation } = this.props;
    const route = navigation.state.routes[navigation.state.index];

    this._lastFocusedKey = route.key;
    this._emitFocus(route.key, {
      context: `${route.key}:${action.type}_${context || 'Root'}`,
      state: route,
      lastState: lastState?.routes.find((r) => r.key === route.key),
      action,
      type,
    });
  };

  /**
   * @param {ParentPayload} payload
   */
  _handleWillBlur = ({ lastState, action, context, type }) => {
    const { navigation } = this.props;
    const route = navigation.state.routes[navigation.state.index];

    this._lastFocusedKey = undefined;
    this._emitBlur(route.key, {
      context: `${route.key}:${action.type}_${context || 'Root'}`,
      state: route,
      lastState: lastState?.routes.find((r) => r.key === route.key),
      action,
      type,
    });
  };

  /**
   * @param {string} key
   * @param {Payload} payload
   */
  _handleFocusedKey = (key, payload) => {
    const { navigation } = this.props;

    const lastFocusedKey = this._lastFocusedKey;

    this._lastFocusedKey = key;

    // We wouldn't have `lastFocusedKey` on initial mount
    // Fire focus event for the current route on mount if there's no parent navigator
    if (lastFocusedKey === undefined && !navigation.dangerouslyGetParent()) {
      this._emitFocus(key, payload);
    }

    // We should only dispatch events when the focused key changed and navigator is focused
    // When navigator is not focused, screens inside shouldn't receive focused status either
    if (lastFocusedKey === key || !navigation.isFocused()) {
      return;
    }

    if (lastFocusedKey === undefined) {
      // Only fire events after initial mount
      return;
    }

    this._emitFocus(key, payload);
    this._emitBlur(lastFocusedKey, payload);
  };

  /**
   * @param {string} target
   * @param {Payload} payload
   */
  _emitFocus = (target, payload) => {
    const { navigation, onEvent } = this.props;

    onEvent(target, 'willFocus', payload);

    if (typeof navigation.state.isTransitioning !== 'boolean') {
      onEvent(target, 'didFocus', payload);
    }
  };

  /**
   * @param {string} target
   * @param {Payload} payload
   */
  _emitBlur = (target, payload) => {
    const { navigation, onEvent } = this.props;

    onEvent(target, 'willBlur', payload);

    if (typeof navigation.state.isTransitioning !== 'boolean') {
      onEvent(target, 'didBlur', payload);
    }
  };

  /**
   * @type {string | undefined}
   */
  _lastFocusedKey;

  render() {
    return null;
  }
}
