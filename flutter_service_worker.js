'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8a33346c6f9a36058b9887c3a0c69ea9",
".git/config": "01c242a6c418424dd91a334aef60dc5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dfac03a0dbb8526281a1796a71c2a2a0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8de84fc108dc09898b0a658cd871c6d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ea56f73c56128e64649bec2c297d0f8",
".git/logs/refs/heads/main": "2ea56f73c56128e64649bec2c297d0f8",
".git/logs/refs/remotes/amina/main": "a5cbae48f2436e2ca4eb49ac5b3d95d3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/03/ec3eb9017cabc2a5074783e5b1d8b09b2390af": "cfc3df2a219409939a3125d81def9acf",
".git/objects/04/7bac30c2f08d4b99021cd4d51748b600beb25c": "9bcae599d2d6325a5dadece2abc0b57e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "a2c957fcd2f5f0e686f9a496d6e3a59d",
".git/objects/0b/ac8bd4d603ba72a2f3fdb4699208da62bbee5f": "ce36775e7273fa73fc75a0eba684b541",
".git/objects/10/8ddf6d887c8475f50bd9f718f193835d11900e": "4ae7ab2aaf79fd23f997e1f26789a141",
".git/objects/12/2d0a96a0d60bb5c9a202f2ffaf50a1c747dd07": "0cba5015e2af191d44e69cce1639931a",
".git/objects/26/60591d7d008f917528af3dd8f0c8adf368d94d": "3d0a56d4ac6f8b9737d7ac22847f7c38",
".git/objects/2f/5fe7f277fa148d7b1183485196aaddca1fa33c": "f536d09003f0f2a65bac9d6acab4fa75",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "b786283fd4289795d6530a1cf5fa703f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/39/703abce29a22479065da61b444339f613a1f89": "8d0f80af256ceae8bc3a9609bc5b799c",
".git/objects/39/dd159f1d5d4275550742713de88e08bd220cde": "7c2d164c11ccb1e6a10919f52102aa68",
".git/objects/3a/1905b31d1127452ba191d5884449385c6d36e9": "6649cd04033a5d11de12fd966bdda7b3",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "b92a0f6b7400ff035ef092a8709952e1",
".git/objects/3b/26ff3015375844c97364928f033d61a9075f71": "8ef8dd05611068350c7d4c60ba5aa921",
".git/objects/3c/4fb887d0c970e75b80f6f3fae698bd00ecf81a": "ad48531fb0279c391747ffae3232154b",
".git/objects/3f/d3a57ca969b0e23b1ec3208e7e0ab3f1a3b864": "b983cc002bbc4b79450658b9ad5ac6f0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/42/513d2e991b4f9fe6c06a8e4a330b1cde1cc29c": "b10f8dd974011596397d49e3c33101f0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/4f/a9f310ae9bfbc3e5d4717db0c39d5b48976885": "53028d0c7277fed6d9630e0ec3f87591",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "70d096a1769c7715b67dc1b780a35781",
".git/objects/51/a5da0022bd1f525129c3dc20e9c59d50bf17d3": "274fd8a9da0d7ddc154e3320fb11d916",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/5f/d22c0bbd402064664fb2227c22a8924a94dffe": "d1341592a168dc8ce7107241bbfbfabf",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "5e4a591c0e9b3c8ea49c825e5c65fbc0",
".git/objects/64/5f20e45fb6ffe275dd5ad0b14a184945728ffa": "012801e4a5fb4b7732a9a2d2099f3cb9",
".git/objects/65/5b89f88f33d05e050a80ffbd3359aed1ec75af": "b82946044c53d7ff9d665b67ed275e6f",
".git/objects/67/361bab99e87ba7bbc0b998b23e8c749a88e7aa": "c2a8d39a7141da67b751e4d637183f36",
".git/objects/67/a1da631fe684d0e95e2b37b9e8cf66db9e3779": "cb01eb5d164696ca597f18ecaf3f11c3",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "50f3380c9772e107150d87533c44f28d",
".git/objects/68/ad5fcf562e30a10f77df6e48ed390a534f9a2a": "22e57db82a8bd1142c621f97f27e65e1",
".git/objects/69/ef2cb2f02de1ee797400cef800f70e3c8f3de4": "6b3d56cbfb76f046f9583fcf35e40c89",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "27692dea2feef734dbb4475191d0b203",
".git/objects/6f/ccb7e5202de0f3527f30f55d14874b15cfed41": "5e5b15ea6995f4335324455f743da0c8",
".git/objects/71/c9f9d3a29c16228294d5873ef6d144097e4680": "8eb44a422fd7a78e023eeab93d4dc61c",
".git/objects/75/69c7de457ef711f400159b7a67d368089c5a84": "62802fdf15ef0da25622b4510e39c638",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "85fb081f640fd858e1baa68db8f3e55d",
".git/objects/7f/af036ece3b7a72245a7bb504724debede7ce08": "57a14b25e47f49501599ea3c8864ac2c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "bb5ad116423ddf07049c2730cdb0c772",
".git/objects/86/547763a777fd3d901413241263a6d07fa031f0": "b94ba8d43c4818410f183e338118490e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "71bcd051deb6c0e4fc5282bccd29ff28",
".git/objects/8f/e8f7b1305f95a3ffaf1b36fbb94b2f58578ff9": "2460cb8bc4d2fa34cf3cc8fb6a46780b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c5c14c6ba3bb02da4e5392d205ee6267",
".git/objects/96/0b826a8914b46eba0a81b66bb5cdc1b17716ec": "925ceda6f5e97d03fb8615dbfafc45ea",
".git/objects/96/72ca009973be1b4512a14525e7eebd02c2ef02": "09c9d24534e3bb2ca6876c25a8696f74",
".git/objects/98/a73278fd4e159a30f4e7bb6e3ec68890a379c9": "a62a948e82f814f9801ac8ef11d0f5cf",
".git/objects/99/552849af29d13817ed89d242f9964fc4976d75": "3d4742c31600ab1ed4536b119975212a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "0fe4f050c87bca1468613450a7fbfaea",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/aa/fbb0364adfaa528e899a948e541e04bd210c9b": "d670b312110c029c3376141ef1063da2",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "572f37892d3ef53b60b273b30f6436e4",
".git/objects/b3/db686a97fae8656113290d16b99c1f14fb99f8": "ed95f23b41a698451fe14b0fd7d2ebff",
".git/objects/b5/841b9322b956c4077fc842475f219f0134f27b": "676e555ff682cdd488c75f4276ebdda4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b8/d7d3382d4dd3c625483407d1a9654c1ccbbaa8": "f854145bb934692f48cbdc4b1e13f3ea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "96233f83e8615fc3bc2c252e4aaa5698",
".git/objects/bc/f134ebd381aa0cf6c6a8cd12015018199bf13e": "873265cd0f5b10ba839ac774b668c177",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "4938f34d9cc8dae979506ac87d0a571f",
".git/objects/cd/0624ca985670e04bada9f2772e09af7090c2c5": "8fd5ba9a55b1928b41ee9dcc3a09d2a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d5/a6553930e5d4c003aa754ef2ba4a64bef9b5a8": "5dd4b6ee611ec2ed4b32eaaba9e393a0",
".git/objects/d5/edb4094793c36b7f9c0dbec5fa544c3c6b6f18": "95eb49bd23b6f19d887e04d9abecd6fd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/0308cf1417e73a81f1456a31b74aa2251542e2": "d11a623fd1b3fd51bdbaf241964a78f3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "ae4ee21bd71069c6e962deed7485df4f",
".git/objects/e0/6cf0a7b22a8e0566a9858d314d2fb7a261ef79": "241d0e390eaf654ba4ad08aa13425623",
".git/objects/e0/b27bfd639f96b666d8e717260a8fd9e6a1a20b": "712eefea621f5aa48b555cf55baa3212",
".git/objects/e6/3f1a1662027c28111d08c21e32e43e7da09685": "16241778b10e3e4a7d33622a3c3c0288",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "bb2eac7ac7b6a9c500a94c9e6289e6ec",
".git/objects/e8/7bd3d0cd659fa166ad60e1c536834ba5c32296": "d1ba9af5c70a71e3fff52df9dd76924a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f3/0b02794144d14762cc2487b2c7cca2fbe7db48": "022800e724b8b56e4accf26384cf6fba",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "cb1ad23398d21b0518b0805134ac5acc",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "badc782b67bf359bcce68100f8fe4312",
".git/objects/fa/a363f3a27182250fcacc2ee0b04dfd83b26301": "fa565fa2b11e8f8b309d8e95e379dc53",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "d534e39531c224a748c356a964b910b0",
".git/refs/heads/main": "6cdb30c7c815e937a0e51b26ccb54a55",
".git/refs/remotes/amina/main": "6cdb30c7c815e937a0e51b26ccb54a55",
"assets/AssetManifest.bin": "69f5842dc28eb6c7860419e7142bbec2",
"assets/AssetManifest.bin.json": "467376229294058af2f98b6a376a4f71",
"assets/assets/applogo.jpg": "78ceed9b8d232d215f420d1ff69f7569",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a66a525659dc90d18251c3ea7386e187",
"assets/NOTICES": "4eda4d6317ac5a2fff565e9e7213abb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "8ddb195ec70c901810ee3b825899f779",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "09fa1fe1e2399831b912d761cdd0d0f6",
"icons/Icon-192.png": "a6851e6f0b659685400f08c3be478482",
"icons/Icon-512.png": "13118069a86419c43efd055aa364490e",
"icons/Icon-maskable-192.png": "a6851e6f0b659685400f08c3be478482",
"icons/Icon-maskable-512.png": "13118069a86419c43efd055aa364490e",
"index.html": "827c89590f845df5eb858d7032bd688b",
"/": "827c89590f845df5eb858d7032bd688b",
"main.dart.js": "ceef5d0e252b308b7000d0aec767d35a",
"manifest.json": "46aff33450d4e5334305758714e807b7",
"version.json": "afac2ad60fc76e200ab36a623834eaf4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
