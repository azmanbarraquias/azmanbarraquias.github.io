'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0dd70c35cc37e5592c3ab7c76e186034",
"assets/AssetManifest.bin.json": "94372ce6cfccdb52dd7cf41905b4e24f",
"assets/AssetManifest.json": "11b4a615117ff0a3d1a774645f32ca7f",
"assets/assets/CatImageDev.png": "cb8e8e6e9943b07fa332d92886f7e8f7",
"assets/assets/flutter_icon_finder.png": "0d3935b8b35b663b867e4f0b9ff10b2a",
"assets/assets/heytalk.png": "6f2141f1a486b19fec7a8793dcbe72c7",
"assets/assets/images/Gemini_Generated_Image_8zdska8zdska8zds.jpg": "93f02e6494aad8dcdd3af1a55ead2096",
"assets/assets/images/Gemini_Generated_Image_9dpo2f9dpo2f9dpo.jpg": "3ee27845bd21a4329e1e2de1c2d43092",
"assets/assets/images/Gemini_Generated_Image_h36tdph36tdph36t.jpg": "9e38b747b8793b0f89cb08b927f9caa8",
"assets/assets/images/Gemini_Generated_Image_nnrt6onnrt6onnrt.jpg": "90e15fadd474971756420e2dda60089e",
"assets/assets/images/Gemini_Generated_Image_xqelm5xqelm5xqel.jpg": "6188adab47f007c46079966b1c000c78",
"assets/assets/images/heytalk.png": "e606c70a29a890a21d5a1dbecc93b67c",
"assets/assets/images/luckyhey.png": "ae921745fee6dd629e10591045ecfcae",
"assets/assets/images/pyramid_escape.png": "a31eb1868514d42aceec08263935b656",
"assets/assets/luckyhey.png": "0ad699f7e9cdd1a9f146fbea51171e8c",
"assets/assets/pyramid_escape.png": "01f1cf57650fd74a4ec657b5af3b9942",
"assets/assets/svg/androidstudio-original.svg": "263988c61542ba3dd4efbb1859b65168",
"assets/assets/svg/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/assets/svg/css3-original.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/svg/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svg/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svg/git-original.svg": "fef8e95112e6ab6f2169430ee510db5e",
"assets/assets/svg/github-original.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/svg/godot-original.svg": "7f662044b29f162df1ef99f635e05085",
"assets/assets/svg/html5-original.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/svg/java-original-wordmark.svg": "3d7acae578d5d5d609a0b150d5df7724",
"assets/assets/svg/java-original.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/svg/javascript-original.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svg/kotlin-original.svg": "1bca1392e1d1843c52eb7587edddea69",
"assets/assets/svg/swift-original.svg": "714948ba4cf994b64135be84ced494e2",
"assets/assets/svg/unity-original.svg": "421a4e5697e7fb9120b1bd8fab8895f4",
"assets/assets/svg/visualstudio-original.svg": "ac82b423f2dbbb431e5189e31f1666f3",
"assets/assets/svg/vscode-original.svg": "25cb5a121aaab90a0bc21f43a979cd48",
"assets/assets/svg/xcode-original.svg": "5cbeb9a2687fb69e68a5ae45fa367d5e",
"assets/assets/turo_agham.png": "fe4b92b3af8e9ff2e2e8aaef1cc06ab8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f34ace52ea74c95e26949fab4870ac22",
"assets/NOTICES": "6c1feaf9cdb65501d77ffc684f703174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"custom.js": "292fa1b58687e9f6c8bc8da88ff8f759",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f9bfd0b6f2ab58217becfe9b97f694e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cdb6975ed968e93001df0fa421b9490",
"/": "8cdb6975ed968e93001df0fa421b9490",
"main.dart.js": "f14f3a3ba3fa2bf3f7c86f0c2917f83c",
"manifest.json": "808b6c1bfb964525d56d5788a462f544",
"version.json": "85d08c2132e88626a6e998760cbf8fdf"};
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
