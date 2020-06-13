// loadScript: returns a promise that completes when the script loads
global.DynamicLoader = (function () {
    var loaded = [];

    function loadGLTF(url) {

    }

    function loadAsset(url, type) {
        // check list - if already loaded we can ignore
        if (loaded[url]) {
            console.log(url + " already loaded");
            // return 'empty' promise
            return new Promise(function (resolve, reject) {
                resolve();
            }).then((result) => { return result; });
        }

        return new Promise(function (resolve, reject) {
            // create JS library script element
            var asset;
            switch (type) {
                case "js":
                    asset = document.createElement("script");
                    break;
                case "img":
                    asset = document.createElement("img");
                    asset.style = "display: none"
                    break;
                case "gltf":
                    loadGLTF(url);
            }
            asset.src = url;

            // if the script returns okay, return resolve
            asset.onload = function () {
                console.log(url + " loaded ok");
                resolve(url);
                // flag as loading/loaded
                loaded[url] = true;
            };

            // if it fails, return reject
            asset.onerror = function () {
                console.log(url + " load failed");
                reject(url);
            }

            // scripts will load at end of body
            document["body"].appendChild(asset);
        }).then((result) => { return result; })
            .catch((error) => { return "error"; });
    }
    return { loaded: loaded, loadAsset: loadAsset };
})();