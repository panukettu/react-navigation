# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.3.0 (2020-03-27)


### Bug Fixes

* actually expose gestureVelocityImpact in the public API ([16079d1](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/16079d10506eb4bfa8abdce8449932676db7c4da))
* add accessibilityLabel prop to back button ([bf76075](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/bf76075e0fbf51961e81e9337ef194e43cc6b986)), closes [#6895](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6895)
* add accessibilityRole=header to header title ([0ead266](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/0ead2662ec10078b5e238f53f4607a8c712c20a4))
* add fallbacks for non-web modules ([b4bbf9b](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b4bbf9b0c35b45ce3b05d4672e827d2c71ad948c)), closes [#95](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/95) [#96](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/96)
* add horizontal margin to centered title ([2ef5ad4](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/2ef5ad4cc2af450e71874f57c769e6c515853168))
* add licenses ([0c159db](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))
* add missing React import ([ece6e38](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/ece6e3899e6e69f26a4e5d55cf4d8c4a5c826010))
* add pointerEvents=box-none to overlay View ([#7871](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7871)) ([e097df8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/e097df880adab984aae29f847003d2548cfbdce5))
* allow making params optional. fixes [#80](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/80) ([a9d4813](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a9d4813b472f040381b8e2e3e04562b2427f6f02))
* bunch of fixes regarding reliability of callbacks ([4878d18](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/4878d18abff2a2ff3cba702a5e3c81ed694a1fa6))
* change default screen change animation on web ([37d26ca](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/37d26ca994f13dd78db234309b78122a52d4550c))
* change interpolated style when idle to avoid messing up reanimated ([3ad2e6e](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/3ad2e6ebcf1da2d54a81aae11f90a37850ffd7a8))
* change order of attaching nodes in card exec ([167d58c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/167d58ce2779845eb13d5f269490f22ab8e3cf72))
* change POP behaviour to remove elements from index only ([7a3d652](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/7a3d652e847e173964a06cc9d859129ca0317861)), closes [#256](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/256)
* change single param to props object in onTransition callba… ([#171](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/171)) ([53f8ba9](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/53f8ba97dfe56b404fe9c6f630e8979af2072bf9))
* check if left button is truthy to add a left offset ([8645e36](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/8645e361f13eb694b3c9028bfbfd231ecb8b9298))
* check if we can go baack before dispatching pop ([6c9447a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6c9447a38c74ca029fc9def8aca0a2d2cca9639c))
* clamp interpolated styles ([67798af](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/67798af869dcbbf323629fc7e7cc9062d1e12c29))
* compare with correct height when floating header height updates ([a9e584c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a9e584c3b765ae1e166a3a82b3fa0a40e8e2172a))
* conditions in gesture direction ([225e760](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/225e760a546821b8bccc142aa8eccda49e64fc83))
* correctly update layout on onLayout events ([eaf8847](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/eaf88478cc392fb9ff0b69c7539595920db8e010))
* debounce back button by default in stack header ([c7dd3a5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c7dd3a58b18d7a267d94009d459944c251ea74c1))
* defer running the animation to next frame ([c7a79a6](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c7a79a62fa4c4e5c61af8b7d8e647deefde9636f))
* disable pointerEvents on header when not focused ([87d445b](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/87d445b4e4468cf6c17787f47dd875ab8a95598a))
* disable react-native-screens on iOS ([fb9dbf9](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/fb9dbf9820af051f1561ac14c5f729e116336f4c))
* disable screens when mode is modal on older expo versions ([94d7b28](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/94d7b28c0b2ce0d56c99b224610f305be6451626))
* disable style interpolation for card when animation is disabled ([c110570](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c110570d4c89a38336f19403e6f2d0870868620e))
* dismiss keyboard on page change ([2c31d17](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/2c31d1705c4e5827b19b9cc7f3e5b05207c3238a))
* dispatch pop early when screen is closed with gesture ([#336](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/336)) ([3d937d1](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/3d937d1e6571cd613e830d64f7b2e7426076d371)), closes [#267](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/267)
* don't add header animation if mode is not float ([5470aea](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/5470aeaca2f82c0cc320f773ed0cd1672a1e338a))
* don't enable overlay on iOS by default ([27f0ec4](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/27f0ec42347d109254a95de0651842d7dd4c179a))
* don't enable screens for modal stacks ([fdf8b1a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/fdf8b1a048a405d5eb35fbd52afab54566b7c907))
* don't fade incoming background when fading header ([#127](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/127)) ([c6d0c19](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c6d0c19b498687e13a7c60e3227869b66e75d2e1))
* don't fire onOpen when screen is unmounting ([#137](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/137)) ([f22abb7](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f22abb726c2cc611d33b77b5b29f5f5b17dea47d)), closes [#136](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/136)
* don't ignore descriptors change ([9d9fe31](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9d9fe31f0221242763fe22dafd7bc2cf014c592e))
* don't ignore headerLeft if specified. fixes [#164](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/164) ([c9b2c4d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c9b2c4d686951faff453203d88ef95c8e98bf32d))
* don't keep unfocused header backgrounds visible ([031c4d2](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/031c4d23788b87f274be75a472a5958d2c08a4fe))
* don't recompute if routes didn't change ([615b523](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/615b523d261057d6337f56c1ea80d7b271f4a468))
* don't remove route if animation isn't finished when dragging ([#100](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/100)) ([6af8400](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6af84004217068af0be09f97c814e395a80c9901))
* don't set a header height when a custom header is specified ([1b82e25](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/1b82e25bb4f590df1bd178d98bfb3f74c1c4ebe2))
* don't use native driver on web ([0a982ee](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/0a982ee6984b24c0ba053a30223e255f3835e050))
* don't use react-native-screens on web ([b1a65fc](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b1a65fc73e8603ae2c06ef101a74df31e80bb9b2)), closes [#7485](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7485)
* enhance border radius in modals on new iPhones ([#6945](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6945)) ([80a3370](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/80a337024abc53537ff4a63916cea38bb4f374bf))
* expose the header height even if not floating ([12d9083](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/12d90833eb36e9e7f229384ec8a05823b0a564d1))
* fix android header title font weight ([#7720](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7720)) ([0dcaea3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/0dcaea32428484cdc9b4d56f7bf38f9f1bdf1dee))
* fix back button not working in header ([73424b8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/73424b8072988fb9b0c423f1b26f1ff81c8a2ad3))
* fix back gesture cancellation ([#7700](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7700)) ([469d054](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/469d0542c7341dc524a597d70216ba743602a51e)), closes [#6782](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6782)
* fix blank page if stack was inside display: none before ([49f6fed](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/49f6fed6d3da878e02a9fe9115c05bcf84e332bf))
* fix border radius of modal presentation ([1cf7dc5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/1cf7dc5f476bc72d55e8d417fc90832d5268543f))
* fix broken shadows on card ([da8da3d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/da8da3d6567d07a95b26d7f29076aa6f3af35be0))
* fix closing stack using inverted gesture. ([#7824](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7824)) ([f24d3a3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f24d3a3461ee8a566c25ce7d13f31035b4be2691))
* fix gestures not working in stack ([8c1acc3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/8c1acc33c6bb403641a5a096d9cf612548de92fe))
* fix header buttons not clickable on Android. fixes [#108](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/108) ([da944cc](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/da944ccef9ea3f02c683b52fb27ee0d9bc1062e3))
* fix header rendered behind card. closes [#108](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/108) ([2f66556](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/2f66556b1018c3eba273ccb6eb0aec331427d29a))
* fix header tint color not applied ([879b0ea](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/879b0ead57d97f2fa61731c6c0c4fb215c5c549b))
* fix incorrect type ([731cf7d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/731cf7d5b1b755be4ed2a4147c638aa00b8a635f))
* fix passing insets to interpolator ([6f5f4b7](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6f5f4b7d3501003784a8f64d33ef4decb1a2f3e6))
* fix path to typescript definitions ([f182315](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f18231541b3ea7efd31ef7550011b4684f3dfa43))
* fix peer deps and add git urls ([6b4fc74](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6b4fc7459278a3ae2a50fda1f5ba4691bc2b807b))
* fix shadow position for inverted animations ([5fe140e](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/5fe140e61b9d6038490b1975b99331613933eb39))
* fix stack nested in tab always getting reset ([dead4e8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/dead4e826a91915dc5902c7faf83a58efec845d8))
* fix swipe gestures requiring a lot of velocity to dismiss ([61f16d3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/61f16d3f25cbbcc00d699dd09c5f4abde9b17d5a))
* fix swipe not dismissing card in RTL ([043924c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/043924ca4843b6f02626532cbf4aafc7cad9fab1)), closes [#7841](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7841)
* fix transparent header on Android ([a67b494](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a67b49477eb500c81fedcd73bbd8102901a95170))
* fix types for stack config ([bba0feb](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/bba0feb691d23b4943b4186733c78eba9a055fe0))
* fix typescript issues ([c52a8c4](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c52a8c46a8906812651e5259a850207fc448590e))
* fix typo preventing the screen from being cleaned up ([354da7d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/354da7dbfcf2a6dccce1d6a740b9b5fb56c1fa61))
* fix vertical gesture ([a7c4a4d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a7c4a4d7cda7f94974e83de60e005296160a4e93))
* handle header translation for horizontal-inverted ([321fa65](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/321fa653add8366b7f24fb9de9a950064421dfc1))
* handle RTL properly ([29de72a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/29de72ad36c57582fb30f4353365179d6cbf8c8b))
* handling vertical gesture in RTL ([#122](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/122)) ([a27ade8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a27ade8881e6d3134a9b9e2fea7b97290e60e582))
* hard code header height for animation ([8f40a98](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/8f40a980862a182a9e86dbb1e4764a39d824cd70)), closes [#6818](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6818)
* hide background for unfocused header in fade ([3164527](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/316452702ee6f01953d67662240585a1a4b04d3a))
* hide overflow in wipe preset ([3f7a54d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/3f7a54d3b75c1316daeae2354d964b05cf68f9d0))
* ignore back button press if screen isn't focused. closes [#7673](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7673) ([296c836](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/296c836064447e055a88e43cfbbf5f9de93838f0))
* improve gesture performance ([59803f5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/59803f54d64f85c8e46c1ebc70613a70a812f53a))
* increase epsilon in CardContainer.tsx ([9be904d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9be904d9c4c74c23a7d1d60d81f4366c601f5082))
* increase hitSlop of back button on Android ([c7da1e4](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c7da1e41454cd7dea99c97fd351e701f6419eae7))
* initialize height and width to zero if undefined ([3df65e2](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/3df65e28197db3bb8371059146546d57661c5ba3)), closes [#6789](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6789)
* interaction manager in stack ([#237](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/237)) ([6b9b999](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6b9b999c5b60a67ed683b84484928700d4260585))
* interpolation in iOS modal presentation ([b32cda2](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b32cda2446a9419c3563719ed7b1d5a6d0b1c545))
* keep screens for replace when animation is enabled ([7f963a7](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/7f963a74bb4d4b04134e917fe47e38e4d982afed))
* keep the routes we are closing or replacing ([bc3586a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/bc3586ae3e3e98b312b387174c278a551b1152bb))
* keyboard manager in stack for fast swipe ([07bfc86](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/07bfc8632795bda70cbf0e11cf9249f34c3532a0))
* link proper descriptor for StackView ([469ec31](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/469ec31cc571c02d5831b118dab2bf247d7f1832))
* make clearKeyboardTimeout private ([876c318](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/876c3183e1e316937bb911343e9b1e630014637a))
* make modal presentation mode fullscreen on landscape ([#124](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/124)) ([e789846](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/e7898466925d7c7ab18a0850c35a2fb10b636a88))
* make sure components update when descriptor changes ([6792be3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6792be3555aa27dac546394b8d69168987e67a9f))
* make sure header is visibile to accessibility tools on iOS ([240ce01](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/240ce01822febac2c1aa324c01e43fdc88a235a0))
* make sure left button isn't bigger than screen width / 2 ([ebc4865](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/ebc4865c5bc3da332f2f4568dde0ab67a7617058))
* make sure paths aren't aliased when building definitions ([65a5dac](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/65a5dac2bf887f4ba081ab15bd4c9870bb15697f)), closes [#265](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/265)
* make the header appear static when sibling of headerless screen ([55c3085](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/55c308543d500bf5a66114f20f21cb3d7a1cf0ab))
* make UNVERSIONED insufficient expo version ([a6f5867](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a6f58677dce9c8446de7879014490c9ab76eceb9))
* mark descriptors as optional properties ([006a4ea](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/006a4ea47e9b37731b3c5699ac799495df8356a4))
* memoize interpolated style to avoid extra work ([d8b88bd](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d8b88bd83f57f2626d5b66bb157fd8e21a937c28))
* minor tweaks for web and fix example ([67fd69a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/67fd69adf6c8b157bfb866661aab0d6e44375df7))
* only dismiss previously focused input on page change. closes [#6918](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6918) ([b1fe730](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b1fe73097f3ad58d3ba4a8a9b875276d1d8d220c))
* only render last 3 headers in stack ([32ffaac](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/32ffaac647fa711edf188a7929b762f5beb1df15))
* pass correct previous scene to header with headerMode: screen ([16c64e7](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/16c64e729896a157b2b5bb96d6e3eead827626a0))
* position inactivscreensws offscreen by default ([38520a9](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/38520a97ff90af0a2f89f95676487a54104068d3))
* properly handle floating header height ([06f628b](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/06f628bf9f24b481093b207d66dce55ab2534c39))
* properly normalize velocity ([f2e3c2b](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f2e3c2b0c51911d07101d30fe8b3925507453744))
* properly set animated node on gestureEnabled change ([6a8242c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6a8242c31ab031b17cd43247eadccfb449d82e0c))
* properly set pointerEvents on the views ([0589275](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/0589275f53ff08befb9b4691f84932e9e3bad7bd))
* provide initial values for safe area to prevent blank screen ([#238](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/238)) ([77b7570](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/77b757091c0451e20bca01138629669c7da544a8))
* provide navigation prop in header ([30e510d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/30e510d123e2fd494103efe47d322689c55937fd))
* provide route context to header and bottom tabs ([b6e7e08](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b6e7e08b9a05be6c04ed21e938b9580876239116))
* reduce card gesture velocity impact ([#161](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/161)) ([81b1bdf](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/81b1bdfb1e3566bc8b6f43cde274fba4bc8d6027))
* remove clamping in extrapolation of progress of stack animation ([d3f5c55](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d3f5c55dbfbbff604c3289a40f3eccd91a60ee2e))
* remove unnecessary paddingHorizontal on stack header ([74ee216](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/74ee216ed4baf6a7ed2af678ceedd7674657431c))
* respect custom safearea insets when calculating header height ([2750cad](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/2750cad272def2e701ba2823a6e5693cee61eff0)), closes [#190](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/190)
* screens integration on Android ([#294](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/294)) ([9bfb295](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9bfb29562020c61b4d5c9bee278bcb1c7bdb8b67))
* set correct pointer events when active prop changes ([1bbd6ac](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/1bbd6ac422340921d115eab7f089358a4d903b77))
* slide the header up to hide it for vertical animation ([43d2c45](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/43d2c456beb58a8a57104ac308559cbd62998a52))
* stack with gesture enabled ([55ec815](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/55ec8152479694b261f3e78b12eb799393a553c2))
* support specifying header background color in headerStyle ([98d29da](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/98d29dafbf899f0f684ea732c887ad4ec4c52060))
* tweak android q animations ([f57a91c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f57a91c4174bb38c8f2581ca9eecbe2d2b83b25b))
* tweak the easing for android ([78c4f25](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/78c4f25c5e24c25b131fedf6d81306e4a4f105ad))
* tweak transition spec to prevent jumping effect ([9f3b70f](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9f3b70f74ab2bcb15de1efb0590bc96bd267706e))
* update screens for native stack ([5411816](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/54118161885738a6d20b062c7e6679f3bace8424))
* use .native for masked view instead of .web ([abdf9d1](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/abdf9d12b5c3fbde6414b50e3b6e082b67899772))
* use a fade animation for header in all presets ([fe82276](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/fe82276b1f0d1a991744e642dcfa9034fb767caf))
* use a separate shadow view for the cards ([d2397d5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d2397d5a2a4484887b78c15da9e5d7df434ca971))
* use a shadow instead of a border for header on iOS ([6e9d05b](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6e9d05b6cf2913694da495175aadb4b4fbb55b04)), closes [#97](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/97)
* use addListener only when available ([f746ece](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f746ece61b8d2c4088e5d1dc3acbf00b089ad3e2))
* use gesture direction when using next screen's animation ([572beae](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/572beae41b326f3ef80bc2b790badf123e0071bc))
* use header height from style if specified ([442b95d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/442b95d9e451ee1cca44bb49a54e2a50078e8843))
* use MaskedView from @react-native-community/masked-view ([7772ac5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/7772ac55eb42edd804939907a9342ec8c29267de))
* use memo for card container ([65ce20e](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/65ce20ecbc1e5f2dba9f1004cb29de03a6e5504a))
* use native driver for gestures ([9356598](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/935659899f1d4084c601fbefea4a935f9b6ce087))
* use next screen's animation when not focused. fixes [#87](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/87) ([b4a7681](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b4a76814c66df8aea0cdc82662d3bf6f783176f6))
* use opacity in headerStyle ([9dce71c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9dce71c22386fb6932b787a2b11ee9cb223d1467))
* use pure component for stack items ([aeec520](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/aeec52051697764dde2db6c646724a55164b2003))
* use the correct velocity value in closing animation ([#7836](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7836)) ([adbfedc](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/adbfedcd58d4e3d358c6c9691710bb8e4e0d8afb))
* vertical gesture in stack ([4ee19bc](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/4ee19bcdb9386f2ae14fa56014a9f51301189b8e))
* web with internal interpolation listener ([edf96d8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/edf96d839fea3a9919e4133bd476df303d7a2b00))
* when header mode is screen, disable animations by default ([4e2afa0](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/4e2afa0799847514957ed27a5e95a14e75f3b051))
* whitelist supported styles instead of blacklist ([1fb33c8](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/1fb33c891aec29733da268932f1be32a130fd218))
* workaround SafereaProvider causing jumping ([c17ad18](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c17ad18b20cb05c577e1235a58ccc1c856fee086)), closes [#174](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/174)
* wrap navigators in gesture handler root ([41a5e1a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/41a5e1a385aa5180abc3992a4c67077c37b998b9))


### Features

* add `animationTypeForReplace` option ([#297](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/297)) ([6262f72](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6262f7298bff843571fb4b1a677d3beabe29833e))
* add a canGoBack prop to header back button ([7c86cfa](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/7c86cfa88fb987c73fddb470cb24e48db039f3bd))
* add a headerTitleAlign option to center or left align title ([6a0ca90](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6a0ca9087351d7a827572d7e1129731272fe1852))
* add ability add listeners with listeners prop ([1624108](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/162410843c4f175ae107756de1c3af04d1d47aa7)), closes [#6756](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/6756)
* add an option to change use a custom card overlay ([#7809](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/7809)) ([70029d6](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/70029d6c130f0f47de94b6a6c4cbee6afa12b405))
* add an option to override safe area insets ([300791a](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/300791ab49ac449e0788d0709863c1a932bd1871))
* add approximate android Q transition ([196cce0](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/196cce0803548493e402b04a6deeec9748f9a3b8))
* add cardX options in navigationOptions ([30002a1](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/30002a11da0c63d957d5f6669a9d018095b77033))
* add comments ([c2eb482](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c2eb482367d6201cedc7b16f3966ccccb85d27f1))
* add custom theme support ([#211](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/211)) ([00fc616](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/00fc616de0572bade8aa85052cdc8290360b1d7f))
* add gestureVelocityImpact as a prop for stack ([#123](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/123)) ([8294efc](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/8294efc8f41ddd0680602f7041f51f7046758812))
* add headerBackgroundStyle option ([2ea0912](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/2ea09126c9ef718f12904b263a9da656d82100ce))
* add headerBackTitleVisible option to navigation options ([27c4861](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/27c4861c009da64d1b2d4d68c27440b3d8e38600))
* add headerStatusBarHeight option to stack ([b201fd2](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b201fd20716a2f03cb9373c72281f5d396a9356d))
* add headerTransparent option ([d973817](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d9738178832c3d31063e83f94e6c14768720be93))
* add hook to scroll to top on tab press ([9e1104c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9e1104c31ff4b63099d38f4f2b5b7e33d8e82ce7))
* add iOS modal presentation style ([838732d](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/838732dcfa5c1a22763a72767cda68047febe65b))
* add memoization of spring for stack ([7990cf2](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/7990cf2575ab8cce4bb722f5a4d159dc05a1e6bd))
* add on transition end callback ([#153](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/153)) ([51b1069](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/51b1069d51df4b638eda435da65d580a1dbcb233))
* allow specifying style interpolators in navigationOptions ([#155](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/155)) ([282cfe5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/282cfe538bbc2fb5ec2a872228c510318fcb19fb))
* consider both velocity and position while calculating the next position ([#146](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/146)) ([b8237de](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/b8237dec1b1cc619d8a1c0194a6aa457e684a719))
* disable gesture logic when no gesture stack ([38336b0](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/38336b02902c1e9722314735c8b105112feef841))
* drop header: null in favor of more explitit headerShown option ([ba6b6ae](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/ba6b6ae025de2d586229fa8b09b9dd5732af94bd))
* emit appear and dismiss events for native stack ([f1df4a0](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f1df4a080877b3642e748a41a5ffc2da8c449a8c))
* export some more type aliases ([8b78d61](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/8b78d617c05cddef7161ab5519008543adc1bd46))
* export TransitionSpecs ([708dde0](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/708dde0e47c9e54030093772481f5d32781b5eec))
* export underlying views used to build navigators ([#191](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/191)) ([d618ab3](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d618ab382ecc5eccbcd5faa89e76f9ed2d75f405))
* expose animation related values in context ([6cddb52](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/6cddb5238c0b1e37238c85c76e2ecb1f81517c19))
* expose header height in context ([133b59c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/133b59cd175ddc899dff3b56bf3a0514c0c91ae6))
* implement various navigators ([f0b80ce](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f0b80ce0f64fb77c1c2ff8130ee353b749559828))
* inform whether screen is opening/closing in onTransition callbacks ([#169](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/169)) ([c0c17e9](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/c0c17e9affecbaa90401fa0971cce8c4f471aca3))
* initial version of native stack ([#102](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/102)) ([ba3f718](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/ba3f718ab3868ddd5754b22945a867fdf7e93b7f))
* integrate `InterationManager` in stack ([9563a27](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9563a27284b9be7c84380ad44c8c2cd9defcee8e))
* let the navigator specify if default can be prevented ([da67e13](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/da67e134d2157201360427d3c10da24f24cae7aa))
* support transform style for header ([#158](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/158)) ([a93a81e](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a93a81e5d3574b517f636104feea685f04b280f7))
* **stack:** use Animated.Text for header title ([#105](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/105)) ([f398136](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/f39813626ae638e480834871fed72a8650f10f5c))
* **stack:** use Animated.View for header background ([#106](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/106)) ([089390c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/089390ce878954a66e1efe4cdd41756bf9a904ac))
* integrate react-native-screens ([#145](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/145)) ([a8460e5](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/a8460e5a9c14515a71e9c352205e1b48d80a1c10))
* make example run as bare react-native project as well ([#85](https://github.com/panukettu/react-navigation/tree/master/packages/stack/issues/85)) ([d16c20c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/d16c20cd390000cd960ad753001386142eb9e281))
* make listeners reliable ([73b8d22](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/73b8d220ada1212361df9e532f8c6eda62162708))
* new implementation with reanimated ([9b176e9](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/9b176e9dc8304f4c3007b3a0d3f6e621c399965f))
* optimizations in stack ([3f853d4](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/3f853d458f79a6abe30425a773d368ebf4d37680))
* support a function for headerTitle ([95055c1](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/95055c1658e5a7cdb645050d329d7acc84882d11))
* useForeground if possible in stack header backButton ([aa6313c](https://github.com/panukettu/react-navigation/tree/master/packages/stack/commit/aa6313c0e93d8ef031782c1da59f8b0098bfedfe))





## [5.2.7](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.6...@react-navigation/stack@5.2.7) (2020-03-26)


### Bug Fixes

* add pointerEvents=box-none to overlay View ([#7871](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7871)) ([e097df8](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/e097df880adab984aae29f847003d2548cfbdce5))





## [5.2.6](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.5...@react-navigation/stack@5.2.6) (2020-03-23)

**Note:** Version bump only for package @react-navigation/stack





## [5.2.5](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.4...@react-navigation/stack@5.2.5) (2020-03-23)


### Bug Fixes

* fix swipe gestures requiring a lot of velocity to dismiss ([61f16d3](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/61f16d3f25cbbcc00d699dd09c5f4abde9b17d5a))





## [5.2.4](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.3...@react-navigation/stack@5.2.4) (2020-03-22)


### Bug Fixes

* fix swipe not dismissing card in RTL ([043924c](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/043924ca4843b6f02626532cbf4aafc7cad9fab1)), closes [#7841](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7841)





## [5.2.3](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.2...@react-navigation/stack@5.2.3) (2020-03-19)


### Bug Fixes

* use the correct velocity value in closing animation ([#7836](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7836)) ([adbfedc](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/adbfedcd58d4e3d358c6c9691710bb8e4e0d8afb))





## [5.2.2](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.1...@react-navigation/stack@5.2.2) (2020-03-19)


### Bug Fixes

* don't use react-native-screens on web ([b1a65fc](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/b1a65fc73e8603ae2c06ef101a74df31e80bb9b2)), closes [#7485](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7485)
* fix blank page if stack was inside display: none before ([49f6fed](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/49f6fed6d3da878e02a9fe9115c05bcf84e332bf))
* fix closing stack using inverted gesture. ([#7824](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7824)) ([f24d3a3](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/f24d3a3461ee8a566c25ce7d13f31035b4be2691))
* initialize height and width to zero if undefined ([3df65e2](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/3df65e28197db3bb8371059146546d57661c5ba3)), closes [#6789](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6789)
* only dismiss previously focused input on page change. closes [#6918](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6918) ([b1fe730](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/b1fe73097f3ad58d3ba4a8a9b875276d1d8d220c))





## [5.2.1](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.2.0...@react-navigation/stack@5.2.1) (2020-03-17)

**Note:** Version bump only for package @react-navigation/stack





# [5.2.0](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.1.1...@react-navigation/stack@5.2.0) (2020-03-16)


### Bug Fixes

* fix android header title font weight ([#7720](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7720)) ([0dcaea3](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/0dcaea32428484cdc9b4d56f7bf38f9f1bdf1dee))
* fix back gesture cancellation ([#7700](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7700)) ([469d054](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/469d0542c7341dc524a597d70216ba743602a51e)), closes [#6782](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6782)


### Features

* add an option to change use a custom card overlay ([#7809](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7809)) ([70029d6](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/70029d6c130f0f47de94b6a6c4cbee6afa12b405))





## [5.1.1](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.1.0...@react-navigation/stack@5.1.1) (2020-03-03)


### Bug Fixes

* ignore back button press if screen isn't focused. closes [#7673](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/7673) ([296c836](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/296c836064447e055a88e43cfbbf5f9de93838f0))





# [5.1.0](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.9...@react-navigation/stack@5.1.0) (2020-02-26)


### Features

* add ability add listeners with listeners prop ([1624108](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/162410843c4f175ae107756de1c3af04d1d47aa7)), closes [#6756](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6756)





## [5.0.9](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.8...@react-navigation/stack@5.0.9) (2020-02-24)


### Bug Fixes

* enhance border radius in modals on new iPhones ([#6945](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6945)) ([80a3370](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/80a337024abc53537ff4a63916cea38bb4f374bf))





## [5.0.8](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.7...@react-navigation/stack@5.0.8) (2020-02-21)


### Bug Fixes

* fix transparent header on Android ([a67b494](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/a67b49477eb500c81fedcd73bbd8102901a95170))





## [5.0.7](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.6...@react-navigation/stack@5.0.7) (2020-02-21)


### Bug Fixes

* debounce back button by default in stack header ([c7dd3a5](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/c7dd3a58b18d7a267d94009d459944c251ea74c1))
* make sure header is visibile to accessibility tools on iOS ([240ce01](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/240ce01822febac2c1aa324c01e43fdc88a235a0))





## [5.0.6](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.5...@react-navigation/stack@5.0.6) (2020-02-19)


### Bug Fixes

* add accessibilityLabel prop to back button ([bf76075](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/bf76075e0fbf51961e81e9337ef194e43cc6b986)), closes [#6895](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6895)





## [5.0.5](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.4...@react-navigation/stack@5.0.5) (2020-02-14)

**Note:** Version bump only for package @react-navigation/stack





## [5.0.4](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.3...@react-navigation/stack@5.0.4) (2020-02-14)


### Bug Fixes

* hard code header height for animation ([8f40a98](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/8f40a980862a182a9e86dbb1e4764a39d824cd70)), closes [#6818](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/issues/6818)





## [5.0.3](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.2...@react-navigation/stack@5.0.3) (2020-02-12)


### Bug Fixes

* check if we can go baack before dispatching pop ([6c9447a](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/6c9447a38c74ca029fc9def8aca0a2d2cca9639c))





## [5.0.2](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.1...@react-navigation/stack@5.0.2) (2020-02-11)


### Bug Fixes

* provide route context to header and bottom tabs ([b6e7e08](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/commit/b6e7e08b9a05be6c04ed21e938b9580876239116))





## [5.0.1](https://github.com/react-navigation/react-navigation/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.71...@react-navigation/stack@5.0.1) (2020-02-10)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.71](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.70...@react-navigation/stack@5.0.0-alpha.71) (2020-02-05)


### Bug Fixes

* use addListener only when available ([f746ece](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/f746ece61b8d2c4088e5d1dc3acbf00b089ad3e2))





# [5.0.0-alpha.70](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.69...@react-navigation/stack@5.0.0-alpha.70) (2020-02-04)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.69](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.68...@react-navigation/stack@5.0.0-alpha.69) (2020-02-04)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.68](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.67...@react-navigation/stack@5.0.0-alpha.68) (2020-02-03)


### Bug Fixes

* use .native for masked view instead of .web ([abdf9d1](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/abdf9d12b5c3fbde6414b50e3b6e082b67899772))





# [5.0.0-alpha.67](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.66...@react-navigation/stack@5.0.0-alpha.67) (2020-02-03)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.66](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.63...@react-navigation/stack@5.0.0-alpha.66) (2020-02-02)


### Bug Fixes

* add accessibilityRole=header to header title ([0ead266](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/0ead2662ec10078b5e238f53f4607a8c712c20a4))
* add licenses ([0c159db](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))
* disable screens when mode is modal on older expo versions ([94d7b28](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/94d7b28c0b2ce0d56c99b224610f305be6451626))
* dispatch pop early when screen is closed with gesture ([#336](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/336)) ([3d937d1](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/3d937d1e6571cd613e830d64f7b2e7426076d371)), closes [#267](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/267)
* fix shadow position for inverted animations ([5fe140e](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/5fe140e61b9d6038490b1975b99331613933eb39))
* increase epsilon in CardContainer.tsx ([9be904d](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/9be904d9c4c74c23a7d1d60d81f4366c601f5082))
* make UNVERSIONED insufficient expo version ([a6f5867](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/a6f58677dce9c8446de7879014490c9ab76eceb9))
* screens integration on Android ([#294](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/294)) ([9bfb295](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/9bfb29562020c61b4d5c9bee278bcb1c7bdb8b67))
* update screens for native stack ([5411816](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/54118161885738a6d20b062c7e6679f3bace8424))
* web with internal interpolation listener ([edf96d8](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/edf96d839fea3a9919e4133bd476df303d7a2b00))
* wrap navigators in gesture handler root ([41a5e1a](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/41a5e1a385aa5180abc3992a4c67077c37b998b9))


### Features

* add `animationTypeForReplace` option ([#297](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/297)) ([6262f72](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/6262f7298bff843571fb4b1a677d3beabe29833e))





# [5.0.0-alpha.64](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.63...@react-navigation/stack@5.0.0-alpha.64) (2020-02-02)


### Bug Fixes

* add accessibilityRole=header to header title ([0ead266](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/0ead2662ec10078b5e238f53f4607a8c712c20a4))
* add licenses ([0c159db](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/0c159db4c9bc85e83b5cfe6819ab2562669a4d8f))
* disable screens when mode is modal on older expo versions ([94d7b28](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/94d7b28c0b2ce0d56c99b224610f305be6451626))
* fix shadow position for inverted animations ([5fe140e](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/5fe140e61b9d6038490b1975b99331613933eb39))
* increase epsilon in CardContainer.tsx ([9be904d](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/9be904d9c4c74c23a7d1d60d81f4366c601f5082))
* make UNVERSIONED insufficient expo version ([a6f5867](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/a6f58677dce9c8446de7879014490c9ab76eceb9))
* screens integration on Android ([#294](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/294)) ([9bfb295](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/9bfb29562020c61b4d5c9bee278bcb1c7bdb8b67))
* update screens for native stack ([5411816](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/54118161885738a6d20b062c7e6679f3bace8424))
* web with internal interpolation listener ([edf96d8](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/edf96d839fea3a9919e4133bd476df303d7a2b00))


### Features

* add `animationTypeForReplace` option ([#297](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/297)) ([6262f72](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/6262f7298bff843571fb4b1a677d3beabe29833e))





# [5.0.0-alpha.63](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.62...@react-navigation/stack@5.0.0-alpha.63) (2020-01-24)


### Bug Fixes

* pass correct previous scene to header with headerMode: screen ([16c64e7](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/16c64e729896a157b2b5bb96d6e3eead827626a0))





# [5.0.0-alpha.62](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.61...@react-navigation/stack@5.0.0-alpha.62) (2020-01-23)


### Bug Fixes

* don't use native driver on web ([0a982ee](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/0a982ee6984b24c0ba053a30223e255f3835e050))
* handle header translation for horizontal-inverted ([321fa65](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/321fa653add8366b7f24fb9de9a950064421dfc1))
* position inactivscreensws offscreen by default ([38520a9](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/38520a97ff90af0a2f89f95676487a54104068d3))
* slide the header up to hide it for vertical animation ([43d2c45](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/43d2c456beb58a8a57104ac308559cbd62998a52))
* use a fade animation for header in all presets ([fe82276](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/fe82276b1f0d1a991744e642dcfa9034fb767caf))


### Features

* emit appear and dismiss events for native stack ([f1df4a0](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/f1df4a080877b3642e748a41a5ffc2da8c449a8c))
* let the navigator specify if default can be prevented ([da67e13](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/da67e134d2157201360427d3c10da24f24cae7aa))





# [5.0.0-alpha.61](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.60...@react-navigation/stack@5.0.0-alpha.61) (2020-01-14)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.60](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.59...@react-navigation/stack@5.0.0-alpha.60) (2020-01-13)


### Bug Fixes

* make sure paths aren't aliased when building definitions ([65a5dac](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/65a5dac2bf887f4ba081ab15bd4c9870bb15697f)), closes [#265](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/265)





# [5.0.0-alpha.59](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.58...@react-navigation/stack@5.0.0-alpha.59) (2020-01-13)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.58](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.56...@react-navigation/stack@5.0.0-alpha.58) (2020-01-09)


### Bug Fixes

* change default screen change animation on web ([37d26ca](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/37d26ca994f13dd78db234309b78122a52d4550c))
* change POP behaviour to remove elements from index only ([7a3d652](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/7a3d652e847e173964a06cc9d859129ca0317861)), closes [#256](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/256)
* clamp interpolated styles ([67798af](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/67798af869dcbbf323629fc7e7cc9062d1e12c29))
* don't add header animation if mode is not float ([5470aea](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/5470aeaca2f82c0cc320f773ed0cd1672a1e338a))
* only render last 3 headers in stack ([32ffaac](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/32ffaac647fa711edf188a7929b762f5beb1df15))





# [5.0.0-alpha.57](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/compare/@react-navigation/stack@5.0.0-alpha.56...@react-navigation/stack@5.0.0-alpha.57) (2020-01-09)


### Bug Fixes

* change POP behaviour to remove elements from index only ([7a3d652](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/7a3d652e847e173964a06cc9d859129ca0317861)), closes [#256](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/issues/256)
* clamp interpolated styles ([67798af](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/67798af869dcbbf323629fc7e7cc9062d1e12c29))
* only render last 3 headers in stack ([32ffaac](https://github.com/react-navigation/navigation-ex/tree/master/packages/stack/commit/32ffaac647fa711edf188a7929b762f5beb1df15))





# [5.0.0-alpha.56](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.55...@react-navigation/stack@5.0.0-alpha.56) (2020-01-07)


### Bug Fixes

* remove clamping in extrapolation of progress of stack animation ([d3f5c55](https://github.com/react-navigation/navigation-ex/commit/d3f5c55dbfbbff604c3289a40f3eccd91a60ee2e))





# [5.0.0-alpha.55](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.54...@react-navigation/stack@5.0.0-alpha.55) (2020-01-06)


### Bug Fixes

* memoize interpolated style to avoid extra work ([d8b88bd](https://github.com/react-navigation/navigation-ex/commit/d8b88bd83f57f2626d5b66bb157fd8e21a937c28))





# [5.0.0-alpha.54](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.53...@react-navigation/stack@5.0.0-alpha.54) (2020-01-05)


### Bug Fixes

* expose the header height even if not floating ([12d9083](https://github.com/react-navigation/navigation-ex/commit/12d90833eb36e9e7f229384ec8a05823b0a564d1))
* use memo for card container ([65ce20e](https://github.com/react-navigation/navigation-ex/commit/65ce20ecbc1e5f2dba9f1004cb29de03a6e5504a))





# [5.0.0-alpha.53](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.52...@react-navigation/stack@5.0.0-alpha.53) (2020-01-05)


### Bug Fixes

* compare with correct height when floating header height updates ([a9e584c](https://github.com/react-navigation/navigation-ex/commit/a9e584c3b765ae1e166a3a82b3fa0a40e8e2172a))


### Features

* expose header height in context ([133b59c](https://github.com/react-navigation/navigation-ex/commit/133b59cd175ddc899dff3b56bf3a0514c0c91ae6))





# [5.0.0-alpha.52](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.51...@react-navigation/stack@5.0.0-alpha.52) (2020-01-05)


### Features

* add headerStatusBarHeight option to stack ([b201fd2](https://github.com/react-navigation/navigation-ex/commit/b201fd20716a2f03cb9373c72281f5d396a9356d))





# [5.0.0-alpha.51](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.50...@react-navigation/stack@5.0.0-alpha.51) (2020-01-05)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.50](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.49...@react-navigation/stack@5.0.0-alpha.50) (2020-01-03)


### Bug Fixes

* keep screens for replace when animation is enabled ([7f963a7](https://github.com/react-navigation/navigation-ex/commit/7f963a74bb4d4b04134e917fe47e38e4d982afed))
* use gesture direction when using next screen's animation ([572beae](https://github.com/react-navigation/navigation-ex/commit/572beae41b326f3ef80bc2b790badf123e0071bc))





# [5.0.0-alpha.49](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.48...@react-navigation/stack@5.0.0-alpha.49) (2020-01-03)


### Bug Fixes

* dismiss keyboard on page change ([2c31d17](https://github.com/react-navigation/navigation-ex/commit/2c31d1705c4e5827b19b9cc7f3e5b05207c3238a))
* interaction manager in stack ([#237](https://github.com/react-navigation/navigation-ex/issues/237)) ([6b9b999](https://github.com/react-navigation/navigation-ex/commit/6b9b999c5b60a67ed683b84484928700d4260585))
* provide initial values for safe area to prevent blank screen ([#238](https://github.com/react-navigation/navigation-ex/issues/238)) ([77b7570](https://github.com/react-navigation/navigation-ex/commit/77b757091c0451e20bca01138629669c7da544a8))





# [5.0.0-alpha.48](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.47...@react-navigation/stack@5.0.0-alpha.48) (2020-01-01)


### Bug Fixes

* improve gesture performance ([59803f5](https://github.com/react-navigation/navigation-ex/commit/59803f54d64f85c8e46c1ebc70613a70a812f53a))
* use native driver for gestures ([9356598](https://github.com/react-navigation/navigation-ex/commit/935659899f1d4084c601fbefea4a935f9b6ce087))





# [5.0.0-alpha.47](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.46...@react-navigation/stack@5.0.0-alpha.47) (2020-01-01)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.46](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.45...@react-navigation/stack@5.0.0-alpha.46) (2019-12-19)


### Bug Fixes

* fix typescript issues ([c52a8c4](https://github.com/react-navigation/navigation-ex/commit/c52a8c46a8906812651e5259a850207fc448590e))





# [5.0.0-alpha.45](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.44...@react-navigation/stack@5.0.0-alpha.45) (2019-12-16)


### Bug Fixes

* disable style interpolation for card when animation is disabled ([c110570](https://github.com/react-navigation/navigation-ex/commit/c110570d4c89a38336f19403e6f2d0870868620e))





# [5.0.0-alpha.44](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.43...@react-navigation/stack@5.0.0-alpha.44) (2019-12-14)


### Features

* add custom theme support ([#211](https://github.com/react-navigation/navigation-ex/issues/211)) ([00fc616](https://github.com/react-navigation/navigation-ex/commit/00fc616de0572bade8aa85052cdc8290360b1d7f))





# [5.0.0-alpha.43](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.42...@react-navigation/stack@5.0.0-alpha.43) (2019-12-11)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.42](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.41...@react-navigation/stack@5.0.0-alpha.42) (2019-12-10)


### Features

* expose animation related values in context ([6cddb52](https://github.com/react-navigation/navigation-ex/commit/6cddb5238c0b1e37238c85c76e2ecb1f81517c19))





# [5.0.0-alpha.41](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.40...@react-navigation/stack@5.0.0-alpha.41) (2019-12-10)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.40](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.39...@react-navigation/stack@5.0.0-alpha.40) (2019-12-07)


### Features

* export underlying views used to build navigators ([#191](https://github.com/react-navigation/navigation-ex/issues/191)) ([d618ab3](https://github.com/react-navigation/navigation-ex/commit/d618ab382ecc5eccbcd5faa89e76f9ed2d75f405))





# [5.0.0-alpha.39](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.38...@react-navigation/stack@5.0.0-alpha.39) (2019-12-03)


### Bug Fixes

* correctly update layout on onLayout events ([eaf8847](https://github.com/react-navigation/navigation-ex/commit/eaf88478cc392fb9ff0b69c7539595920db8e010))
* disable pointerEvents on header when not focused ([87d445b](https://github.com/react-navigation/navigation-ex/commit/87d445b4e4468cf6c17787f47dd875ab8a95598a))





# [5.0.0-alpha.38](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.37...@react-navigation/stack@5.0.0-alpha.38) (2019-11-29)


### Bug Fixes

* respect custom safearea insets when calculating header height ([2750cad](https://github.com/react-navigation/navigation-ex/commit/2750cad272def2e701ba2823a6e5693cee61eff0)), closes [#190](https://github.com/react-navigation/navigation-ex/issues/190)





# [5.0.0-alpha.37](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.36...@react-navigation/stack@5.0.0-alpha.37) (2019-11-17)


### Bug Fixes

* workaround SafereaProvider causing jumping ([c17ad18](https://github.com/react-navigation/navigation-ex/commit/c17ad18b20cb05c577e1235a58ccc1c856fee086)), closes [#174](https://github.com/react-navigation/navigation-ex/issues/174)





# [5.0.0-alpha.36](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.35...@react-navigation/stack@5.0.0-alpha.36) (2019-11-10)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.35](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.34...@react-navigation/stack@5.0.0-alpha.35) (2019-11-08)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.34](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.33...@react-navigation/stack@5.0.0-alpha.34) (2019-11-04)


### Features

* support transform style for header ([#158](https://github.com/react-navigation/navigation-ex/issues/158)) ([a93a81e](https://github.com/react-navigation/navigation-ex/commit/a93a81e))





# [5.0.0-alpha.33](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.32...@react-navigation/stack@5.0.0-alpha.33) (2019-11-02)


### Bug Fixes

* add horizontal margin to centered title ([2ef5ad4](https://github.com/react-navigation/navigation-ex/commit/2ef5ad4))
* remove unnecessary paddingHorizontal on stack header ([74ee216](https://github.com/react-navigation/navigation-ex/commit/74ee216))





# [5.0.0-alpha.32](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.31...@react-navigation/stack@5.0.0-alpha.32) (2019-11-02)


### Bug Fixes

* minor tweaks for web and fix example ([67fd69a](https://github.com/react-navigation/navigation-ex/commit/67fd69a))





# [5.0.0-alpha.31](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.30...@react-navigation/stack@5.0.0-alpha.31) (2019-10-30)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.30](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.29...@react-navigation/stack@5.0.0-alpha.30) (2019-10-29)


### Bug Fixes

* keyboard manager in stack for fast swipe ([07bfc86](https://github.com/react-navigation/navigation-ex/commit/07bfc86))
* make clearKeyboardTimeout private ([876c318](https://github.com/react-navigation/navigation-ex/commit/876c318))





# [5.0.0-alpha.29](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.28...@react-navigation/stack@5.0.0-alpha.29) (2019-10-22)


### Bug Fixes

* conditions in gesture direction ([225e760](https://github.com/react-navigation/navigation-ex/commit/225e760))





# [5.0.0-alpha.28](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.27...@react-navigation/stack@5.0.0-alpha.28) (2019-10-22)


### Bug Fixes

* don't fire onOpen when screen is unmounting ([#137](https://github.com/react-navigation/navigation-ex/issues/137)) ([f22abb7](https://github.com/react-navigation/navigation-ex/commit/f22abb7)), closes [#136](https://github.com/react-navigation/navigation-ex/issues/136)
* don't keep unfocused header backgrounds visible ([031c4d2](https://github.com/react-navigation/navigation-ex/commit/031c4d2))





# [5.0.0-alpha.27](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.26...@react-navigation/stack@5.0.0-alpha.27) (2019-10-18)


### Features

* add an option to override safe area insets ([300791a](https://github.com/react-navigation/navigation-ex/commit/300791a))





# [5.0.0-alpha.26](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.25...@react-navigation/stack@5.0.0-alpha.26) (2019-10-17)


### Bug Fixes

* don't fade incoming background when fading header ([#127](https://github.com/react-navigation/navigation-ex/issues/127)) ([c6d0c19](https://github.com/react-navigation/navigation-ex/commit/c6d0c19))
* fix incorrect type ([731cf7d](https://github.com/react-navigation/navigation-ex/commit/731cf7d))
* use header height from style if specified ([442b95d](https://github.com/react-navigation/navigation-ex/commit/442b95d))





# [5.0.0-alpha.25](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.24...@react-navigation/stack@5.0.0-alpha.25) (2019-10-15)


### Bug Fixes

* don't ignore descriptors change ([9d9fe31](https://github.com/react-navigation/navigation-ex/commit/9d9fe31))
* increase hitSlop of back button on Android ([c7da1e4](https://github.com/react-navigation/navigation-ex/commit/c7da1e4))
* interpolation in iOS modal presentation ([b32cda2](https://github.com/react-navigation/navigation-ex/commit/b32cda2))
* make modal presentation mode fullscreen on landscape ([#124](https://github.com/react-navigation/navigation-ex/issues/124)) ([e789846](https://github.com/react-navigation/navigation-ex/commit/e789846))


### Features

* add a headerTitleAlign option to center or left align title ([6a0ca90](https://github.com/react-navigation/navigation-ex/commit/6a0ca90))
* export TransitionSpecs ([708dde0](https://github.com/react-navigation/navigation-ex/commit/708dde0))
* initial version of native stack ([#102](https://github.com/react-navigation/navigation-ex/issues/102)) ([ba3f718](https://github.com/react-navigation/navigation-ex/commit/ba3f718))





# [5.0.0-alpha.24](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.23...@react-navigation/stack@5.0.0-alpha.24) (2019-10-06)


### Bug Fixes

* actually expose gestureVelocityImpact in the public API ([16079d1](https://github.com/react-navigation/navigation-ex/commit/16079d1))
* don't recompute if routes didn't change ([615b523](https://github.com/react-navigation/navigation-ex/commit/615b523))
* handling vertical gesture in RTL ([#122](https://github.com/react-navigation/navigation-ex/issues/122)) ([a27ade8](https://github.com/react-navigation/navigation-ex/commit/a27ade8))
* use next screen's animation when not focused. fixes [#87](https://github.com/react-navigation/navigation-ex/issues/87) ([b4a7681](https://github.com/react-navigation/navigation-ex/commit/b4a7681))


### Features

* add gestureVelocityImpact as a prop for stack ([#123](https://github.com/react-navigation/navigation-ex/issues/123)) ([8294efc](https://github.com/react-navigation/navigation-ex/commit/8294efc))
* drop header: null in favor of more explitit headerShown option ([ba6b6ae](https://github.com/react-navigation/navigation-ex/commit/ba6b6ae))





# [5.0.0-alpha.23](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.22...@react-navigation/stack@5.0.0-alpha.23) (2019-10-03)


### Bug Fixes

* fix passing insets to interpolator ([6f5f4b7](https://github.com/react-navigation/navigation-ex/commit/6f5f4b7))
* fix vertical gesture ([a7c4a4d](https://github.com/react-navigation/navigation-ex/commit/a7c4a4d))





# [5.0.0-alpha.22](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.21...@react-navigation/stack@5.0.0-alpha.22) (2019-10-03)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.21](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.20...@react-navigation/stack@5.0.0-alpha.21) (2019-10-03)


### Bug Fixes

* add missing React import ([ece6e38](https://github.com/react-navigation/navigation-ex/commit/ece6e38))
* fix header buttons not clickable on Android. fixes [#108](https://github.com/react-navigation/navigation-ex/issues/108) ([da944cc](https://github.com/react-navigation/navigation-ex/commit/da944cc))
* keep the routes we are closing or replacing ([bc3586a](https://github.com/react-navigation/navigation-ex/commit/bc3586a))





# [5.0.0-alpha.20](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.19...@react-navigation/stack@5.0.0-alpha.20) (2019-09-27)


### Features

* export some more type aliases ([8b78d61](https://github.com/react-navigation/navigation-ex/commit/8b78d61))





# [5.0.0-alpha.19](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.18...@react-navigation/stack@5.0.0-alpha.19) (2019-09-23)


### Bug Fixes

* vertical gesture in stack ([4ee19bc](https://github.com/react-navigation/navigation-ex/commit/4ee19bc))





# [5.0.0-alpha.18](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.17...@react-navigation/stack@5.0.0-alpha.18) (2019-09-23)


### Bug Fixes

* fix header rendered behind card. closes [#108](https://github.com/react-navigation/navigation-ex/issues/108) ([2f66556](https://github.com/react-navigation/navigation-ex/commit/2f66556))


### Features

* **stack:** use Animated.Text for header title ([#105](https://github.com/react-navigation/navigation-ex/issues/105)) ([f398136](https://github.com/react-navigation/navigation-ex/commit/f398136))
* **stack:** use Animated.View for header background ([#106](https://github.com/react-navigation/navigation-ex/issues/106)) ([089390c](https://github.com/react-navigation/navigation-ex/commit/089390c))





# [5.0.0-alpha.17](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.16...@react-navigation/stack@5.0.0-alpha.17) (2019-09-17)


### Bug Fixes

* add fallbacks for non-web modules ([b4bbf9b](https://github.com/react-navigation/navigation-ex/commit/b4bbf9b)), closes [#95](https://github.com/react-navigation/navigation-ex/issues/95) [#96](https://github.com/react-navigation/navigation-ex/issues/96)
* provide navigation prop in header ([30e510d](https://github.com/react-navigation/navigation-ex/commit/30e510d))





# [5.0.0-alpha.16](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.15...@react-navigation/stack@5.0.0-alpha.16) (2019-09-16)


### Bug Fixes

* don't remove route if animation isn't finished when dragging ([#100](https://github.com/react-navigation/navigation-ex/issues/100)) ([6af8400](https://github.com/react-navigation/navigation-ex/commit/6af8400))
* tweak android q animations ([f57a91c](https://github.com/react-navigation/navigation-ex/commit/f57a91c))


### Features

* integrate `InterationManager` in stack ([9563a27](https://github.com/react-navigation/navigation-ex/commit/9563a27))
* make example run as bare react-native project as well ([#85](https://github.com/react-navigation/navigation-ex/issues/85)) ([d16c20c](https://github.com/react-navigation/navigation-ex/commit/d16c20c))





# [5.0.0-alpha.15](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.14...@react-navigation/stack@5.0.0-alpha.15) (2019-09-04)


### Features

* add approximate android Q transition ([196cce0](https://github.com/react-navigation/navigation-ex/commit/196cce0))





# [5.0.0-alpha.14](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.13...@react-navigation/stack@5.0.0-alpha.14) (2019-09-03)


### Bug Fixes

* change order of attaching nodes in card exec ([167d58c](https://github.com/react-navigation/navigation-ex/commit/167d58c))





# [5.0.0-alpha.13](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.12...@react-navigation/stack@5.0.0-alpha.13) (2019-09-01)


### Features

* useForeground if possible in stack header backButton ([aa6313c](https://github.com/react-navigation/navigation-ex/commit/aa6313c))





# [5.0.0-alpha.12](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.11...@react-navigation/stack@5.0.0-alpha.12) (2019-09-01)


### Bug Fixes

* defer running the animation to next frame ([c7a79a6](https://github.com/react-navigation/navigation-ex/commit/c7a79a6))
* stack with gesture enabled ([55ec815](https://github.com/react-navigation/navigation-ex/commit/55ec815))





# [5.0.0-alpha.11](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.10...@react-navigation/stack@5.0.0-alpha.11) (2019-09-01)


### Features

* optimizations in stack ([3f853d4](https://github.com/react-navigation/navigation-ex/commit/3f853d4))





# [5.0.0-alpha.10](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.9...@react-navigation/stack@5.0.0-alpha.10) (2019-08-31)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.9](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.8...@react-navigation/stack@5.0.0-alpha.9) (2019-08-30)


### Bug Fixes

* change interpolated style when idle to avoid messing up reanimated ([3ad2e6e](https://github.com/react-navigation/navigation-ex/commit/3ad2e6e))
* properly set animated node on gestureEnabled change ([6a8242c](https://github.com/react-navigation/navigation-ex/commit/6a8242c))





# [5.0.0-alpha.8](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.7...@react-navigation/stack@5.0.0-alpha.8) (2019-08-29)


### Bug Fixes

* allow making params optional. fixes [#80](https://github.com/react-navigation/navigation-ex/issues/80) ([a9d4813](https://github.com/react-navigation/navigation-ex/commit/a9d4813))
* fix gestures not working in stack ([8c1acc3](https://github.com/react-navigation/navigation-ex/commit/8c1acc3))





# [5.0.0-alpha.7](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.6...@react-navigation/stack@5.0.0-alpha.7) (2019-08-28)


### Bug Fixes

* fix stack nested in tab always getting reset ([dead4e8](https://github.com/react-navigation/navigation-ex/commit/dead4e8))





# [5.0.0-alpha.6](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.5...@react-navigation/stack@5.0.0-alpha.6) (2019-08-28)


### Features

* disable gesture logic when no gesture stack ([38336b0](https://github.com/react-navigation/navigation-ex/commit/38336b0))





# [5.0.0-alpha.5](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.4...@react-navigation/stack@5.0.0-alpha.5) (2019-08-27)


### Bug Fixes

* link proper descriptor for StackView ([469ec31](https://github.com/react-navigation/navigation-ex/commit/469ec31))
* set correct pointer events when active prop changes ([1bbd6ac](https://github.com/react-navigation/navigation-ex/commit/1bbd6ac))


### Features

* add hook to scroll to top on tab press ([9e1104c](https://github.com/react-navigation/navigation-ex/commit/9e1104c))
* add memoization of spring for stack ([7990cf2](https://github.com/react-navigation/navigation-ex/commit/7990cf2))





# [5.0.0-alpha.4](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.3...@react-navigation/stack@5.0.0-alpha.4) (2019-08-22)


### Bug Fixes

* fix path to typescript definitions ([f182315](https://github.com/react-navigation/navigation-ex/commit/f182315))





# [5.0.0-alpha.3](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.2...@react-navigation/stack@5.0.0-alpha.3) (2019-08-22)

**Note:** Version bump only for package @react-navigation/stack





# [5.0.0-alpha.2](https://github.com/react-navigation/navigation-ex/compare/@react-navigation/stack@5.0.0-alpha.1...@react-navigation/stack@5.0.0-alpha.2) (2019-08-21)


### Bug Fixes

* check if left button is truthy to add a left offset ([8645e36](https://github.com/react-navigation/navigation-ex/commit/8645e36))





# 5.0.0-alpha.1 (2019-08-21)


### Bug Fixes

* bunch of fixes regarding reliability of callbacks ([4878d18](https://github.com/react-navigation/navigation-ex/commit/4878d18))
* change single param to props object in onTransition callba… ([#171](https://github.com/react-navigation/navigation-ex/issues/171)) ([53f8ba9](https://github.com/react-navigation/navigation-ex/commit/53f8ba9))
* disable react-native-screens on iOS ([fb9dbf9](https://github.com/react-navigation/navigation-ex/commit/fb9dbf9))
* don't enable overlay on iOS by default ([27f0ec4](https://github.com/react-navigation/navigation-ex/commit/27f0ec4))
* don't enable screens for modal stacks ([fdf8b1a](https://github.com/react-navigation/navigation-ex/commit/fdf8b1a))
* don't ignore headerLeft if specified. fixes [#164](https://github.com/react-navigation/navigation-ex/issues/164) ([c9b2c4d](https://github.com/react-navigation/navigation-ex/commit/c9b2c4d))
* don't set a header height when a custom header is specified ([1b82e25](https://github.com/react-navigation/navigation-ex/commit/1b82e25))
* fix back button not working in header ([73424b8](https://github.com/react-navigation/navigation-ex/commit/73424b8))
* fix border radius of modal presentation ([1cf7dc5](https://github.com/react-navigation/navigation-ex/commit/1cf7dc5))
* fix broken shadows on card ([da8da3d](https://github.com/react-navigation/navigation-ex/commit/da8da3d))
* fix header tint color not applied ([879b0ea](https://github.com/react-navigation/navigation-ex/commit/879b0ea))
* fix peer deps and add git urls ([6b4fc74](https://github.com/react-navigation/navigation-ex/commit/6b4fc74))
* fix types for stack config ([bba0feb](https://github.com/react-navigation/navigation-ex/commit/bba0feb))
* fix typo preventing the screen from being cleaned up ([354da7d](https://github.com/react-navigation/navigation-ex/commit/354da7d))
* handle RTL properly ([29de72a](https://github.com/react-navigation/navigation-ex/commit/29de72a))
* hide background for unfocused header in fade ([3164527](https://github.com/react-navigation/navigation-ex/commit/3164527))
* hide overflow in wipe preset ([3f7a54d](https://github.com/react-navigation/navigation-ex/commit/3f7a54d))
* make sure components update when descriptor changes ([6792be3](https://github.com/react-navigation/navigation-ex/commit/6792be3))
* make sure left button isn't bigger than screen width / 2 ([ebc4865](https://github.com/react-navigation/navigation-ex/commit/ebc4865))
* make the header appear static when sibling of headerless screen ([55c3085](https://github.com/react-navigation/navigation-ex/commit/55c3085))
* mark descriptors as optional properties ([006a4ea](https://github.com/react-navigation/navigation-ex/commit/006a4ea))
* properly handle floating header height ([06f628b](https://github.com/react-navigation/navigation-ex/commit/06f628b))
* properly normalize velocity ([f2e3c2b](https://github.com/react-navigation/navigation-ex/commit/f2e3c2b))
* properly set pointerEvents on the views ([0589275](https://github.com/react-navigation/navigation-ex/commit/0589275))
* reduce card gesture velocity impact ([#161](https://github.com/react-navigation/navigation-ex/issues/161)) ([81b1bdf](https://github.com/react-navigation/navigation-ex/commit/81b1bdf))
* support specifying header background color in headerStyle ([98d29da](https://github.com/react-navigation/navigation-ex/commit/98d29da))
* tweak the easing for android ([78c4f25](https://github.com/react-navigation/navigation-ex/commit/78c4f25))
* tweak transition spec to prevent jumping effect ([9f3b70f](https://github.com/react-navigation/navigation-ex/commit/9f3b70f))
* use a separate shadow view for the cards ([d2397d5](https://github.com/react-navigation/navigation-ex/commit/d2397d5))
* use a shadow instead of a border for header on iOS ([6e9d05b](https://github.com/react-navigation/navigation-ex/commit/6e9d05b)), closes [#97](https://github.com/react-navigation/navigation-ex/issues/97)
* use MaskedView from @react-native-community/masked-view ([7772ac5](https://github.com/react-navigation/navigation-ex/commit/7772ac5))
* use opacity in headerStyle ([9dce71c](https://github.com/react-navigation/navigation-ex/commit/9dce71c))
* use pure component for stack items ([aeec520](https://github.com/react-navigation/navigation-ex/commit/aeec520))
* when header mode is screen, disable animations by default ([4e2afa0](https://github.com/react-navigation/navigation-ex/commit/4e2afa0))
* whitelist supported styles instead of blacklist ([1fb33c8](https://github.com/react-navigation/navigation-ex/commit/1fb33c8))


### Features

* add a canGoBack prop to header back button ([7c86cfa](https://github.com/react-navigation/navigation-ex/commit/7c86cfa))
* add cardX options in navigationOptions ([30002a1](https://github.com/react-navigation/navigation-ex/commit/30002a1))
* add comments ([c2eb482](https://github.com/react-navigation/navigation-ex/commit/c2eb482))
* add headerBackgroundStyle option ([2ea0912](https://github.com/react-navigation/navigation-ex/commit/2ea0912))
* add headerBackTitleVisible option to navigation options ([27c4861](https://github.com/react-navigation/navigation-ex/commit/27c4861))
* add headerTransparent option ([d973817](https://github.com/react-navigation/navigation-ex/commit/d973817))
* add iOS modal presentation style ([838732d](https://github.com/react-navigation/navigation-ex/commit/838732d))
* add on transition end callback ([#153](https://github.com/react-navigation/navigation-ex/issues/153)) ([51b1069](https://github.com/react-navigation/navigation-ex/commit/51b1069))
* allow specifying style interpolators in navigationOptions ([#155](https://github.com/react-navigation/navigation-ex/issues/155)) ([282cfe5](https://github.com/react-navigation/navigation-ex/commit/282cfe5))
* consider both velocity and position while calculating the next position ([#146](https://github.com/react-navigation/navigation-ex/issues/146)) ([b8237de](https://github.com/react-navigation/navigation-ex/commit/b8237de))
* implement various navigators ([f0b80ce](https://github.com/react-navigation/navigation-ex/commit/f0b80ce))
* inform whether screen is opening/closing in onTransition callbacks ([#169](https://github.com/react-navigation/navigation-ex/issues/169)) ([c0c17e9](https://github.com/react-navigation/navigation-ex/commit/c0c17e9))
* integrate react-native-screens ([#145](https://github.com/react-navigation/navigation-ex/issues/145)) ([a8460e5](https://github.com/react-navigation/navigation-ex/commit/a8460e5))
* make listeners reliable ([73b8d22](https://github.com/react-navigation/navigation-ex/commit/73b8d22))
* new implementation with reanimated ([9b176e9](https://github.com/react-navigation/navigation-ex/commit/9b176e9))
* support a function for headerTitle ([95055c1](https://github.com/react-navigation/navigation-ex/commit/95055c1))
