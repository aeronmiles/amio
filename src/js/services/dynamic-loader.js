// DynamicLoader.cs - jsinterop

var assets = [];

function loadGLTF(url, resolve, reject) {

    function _loadGLTF() {
        window.GLTFLoader.load(
            url,
            // loaded
            (gltf) => { assets[url] = gltf; resolve(url); },
            // progress
            (xhr) => { console.log((xhr.loaded / xhr.total * 100) + '% loaded'); },
            // error
            (e) => { console.log('An error happened'); reject(e); }
        );
    }

    // lazy load three
    if (window.THREE != null) {
        _loadGLTF();
    }
    else {
        load(window.location.origin + '/js/three.js')
            .then(() => { _loadGLTF() });
    }
}

/**
 *
 *
 * @param {string} url
 * @returns {Promise}
 */
function load(url) {
    if (assets[url] && assets[url] != 'error') {
        console.warn(url + ' : already loaded');
        return new Promise(function (resolve, reject) {
            resolve(url);
        }).then((result) => { return result; });
    }

    return new Promise(function (resolve, reject) {
        var asset;
        switch (url.split('.').pop()) {
            case 'js':
                asset = document.createElement('script');
                break;
            case 'jpg' || 'png' || 'gif':
                asset = document.createElement('img');
                asset.style = 'display: none';
                break;
            case 'gltf':
                loadGLTF(url, resolve, reject);
                return;
        }
        asset.src = url;

        asset.onload = function () {
            console.log(url + ' loaded ok');
            resolve(url);
            assets[url] = true;
        };

        // if it fails, return reject
        asset.onerror = function () {
            assets[url] = 'error';
            console.log(url + ' load failed');
            reject(url);
        }

        document['body'].appendChild(asset);
    }).catch((e) => { console.log(e); });
}

var DynamicLoader = (function () {
    return {
        assets: assets,
        load: load,
    };
})();

export { DynamicLoader }