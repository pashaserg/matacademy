var scene = (function () {
    "use strict";

    var scene = new THREE.Scene();
    var renderer = window.WebGLRenderingContext ?
        new THREE.WebGLRenderer({
            alpha: true,
        }) : new THREE.CanvasRenderer();
    var camera, box, sphere, sphere_geometry, material, cloudMesh,
        light, geometry;
    var itemsToRotate = [];

    function initScene() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        // camera settings
        camera = new THREE.PerspectiveCamera(60,
            window.innerWidth / window.innerHeight, 0.1, 10000);
        camera.position.x = 0;
        camera.position.z = 1.1;
        scene.add(camera);

        // lights settings
        light = new THREE.PointLight(0xfffddd, 0.5, 0);
        light.position.set(1000, 2000, 1000);
        scene.add(light);

        // 
        geometry = new THREE.SphereGeometry(2, 100, 100);
        material = new THREE.MeshPhongMaterial();
        material.map = new THREE.TextureLoader().load('images/galaxy_starfield1.jpg');
        material.side = THREE.BackSide;
        var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        var createEarth = function () {
            var geometry = new THREE.SphereGeometry(0.50, 32, 32)
            var material = new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load('images/earth.jpg'),
                bumpMap: new THREE.TextureLoader().load('images/earthbump2k.jpg'),
                bumpScale: 0.02,
                specularMap: new THREE.TextureLoader().load('images/earthspec2k.jpg'),
                specular: new THREE.Color('grey'),
            })
            var mesh = new THREE.Mesh(geometry, material)
            return mesh
        }
        sphere = createEarth();

        var geometryCloud = new THREE.SphereGeometry(0.51, 32, 32)
        var materialCloud = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('earthcloudmaptrans.jpg'),
            side: THREE.DoubleSide,
            opacity: 0.8,
            transparent: true,
            depthWrite: false,
        })
        cloudMesh = new THREE.Mesh(geometryCloud, materialCloud);
        sphere.add(cloudMesh);
        scene.add(sphere);
        render();
    }

    function render() {
        sphere.rotation.y += 0.001;
        cloudMesh.y += 0.002;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    return {
        initScene: initScene
    }
})();