var scene = (function(){
    "use strict";
    var scene = new THREE.Scene();
    var renderer = window.WebGLRenderingContext ?
        new THREE.WebGLRenderer({alpha:true, }) : new THREE.CanvasRenderer();
    var camera, box;
    var sphere;
    var itemsToRotate = [];
    var sphere_geometry;
    var material;
    var cloudMesh1;
    var cloudMesh2;
    function initScene(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(   60,
            window.innerWidth/ window.innerHeight, 0.1, 10000);
        camera.position.x = 0;
        camera.position.z = 1.1;
        //camera.position.z = 100;

        scene.add(camera);

        {
            var controls = new THREE.TrackballControls( camera );
            controls.target.z = 150;

            // var ambientLight = new THREE.AmbientLight( 0x000000 );
            // scene.add( ambientLight );

            var lights = [];
            lights[ 0 ] = new THREE.PointLight( 0xfffddd, 0.5, 0 );

            lights[ 0 ].position.set( 1000, 2000, 1000 );

            scene.add( lights[ 0 ] );

            // var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.475 );
            // directionalLight.position.set( 200, 300, 100 );
            // scene.add( directionalLight );


            // var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1.25 );
            // hemiLight.color.setHSL( 0.01, 0.1, 0.1 );
            // hemiLight.groundColor.setHSL( 0.1, 0.1, 0.1 );
            // hemiLight.position.y = 300;
            // scene.add( hemiLight );
        }

        {
            var geometry  = new THREE.SphereGeometry(2, 100, 100);
            var material  = new THREE.MeshPhongMaterial();
            material.map   = new THREE.TextureLoader().load('images/galaxy_starfield1.jpg');
            material.side  = THREE.BackSide;
            var mesh  = new THREE.Mesh(geometry, material);
            scene.add(mesh);
        }

        var createEarth	= function(){
            var geometry	= new THREE.SphereGeometry(0.50, 32, 32)
            var material	= new THREE.MeshPhongMaterial({
                map		    : new THREE.TextureLoader().load('images/earth.jpg'),
                bumpMap		: new THREE.TextureLoader().load('images/earthbump2k.jpg'),
                bumpScale	: 0.02,
                specularMap	: new THREE.TextureLoader().load('images/earthspec2k.jpg'),
                specular	: new THREE.Color('grey'),
            })
            var mesh	= new THREE.Mesh(geometry, material)
            return mesh
        }
        sphere = createEarth();
        {
            var geometryC   = new THREE.SphereGeometry(0.51, 32, 32)
            var materialC  = new THREE.MeshPhongMaterial({
                map     : new THREE.TextureLoader().load('images/earthcloudmap.jpg'),
                side        : THREE.DoubleSide,
                opacity     : 0.8,
                transparent : true,
                depthWrite  : false,
            })
            cloudMesh1 = new THREE.Mesh(geometryC, materialC);
            //sphere.add(cloudMesh1);
        }

        {
            var geometryCC   = new THREE.SphereGeometry(0.51, 32, 32)
            var materialCC  = new THREE.MeshPhongMaterial({
                map     : new THREE.TextureLoader().load('earthcloudmaptrans.jpg'),
                side        : THREE.DoubleSide,
                opacity     : 0.8,
                transparent : true,
                depthWrite  : false,
            })
            cloudMesh2 = new THREE.Mesh(geometryCC, materialCC);
            sphere.add(cloudMesh2);
        }
            scene.add(sphere);


            render();



    }
    function render(){
        //sphere.rotation.x += 0.001;
        sphere.rotation.y +=0.001;
        //cloudMesh1.y +=0.002;
        cloudMesh2.y +=0.002;



        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    return {
        initScene: initScene
    }
})();