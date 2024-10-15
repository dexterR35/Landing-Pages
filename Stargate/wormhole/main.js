var SimpleWormHole = function () {
    var vars = {
        path: "./",
        textures: {
            wormhole: false,
            cubeMap: [
                'neb_px.jpg',
                'neb_nx.jpg',
                'neb_py.jpg',
                'neb_ny.jpg',
                'neb_pz.jpg',
                'neb_nz.jpg'
            ]
        },
        three: {
            renderer: false,
            scene: false,
            camera: false,
        },
        dom: {
            container: false,
            overlay: false,
        },
        tunnelSpline: false,
        tunnelGeom: false,
        tunnelMaterial: false,
        tunnelMesh: false,
        zSpeed: 0.0010,
        tubePos: 0,
        rx: 0,
        lookAhead: 10,
        t: 0,
        started: false,
        loaded: false
    };

    function construtor() {
        console.log("SimpleWormHole.construtor()");

        vars.dom.overlay = document.getElementById("wormhole-overlay");

        var loader = new THREE.TextureLoader();
        loader.crossOrigin = "Anonymous";
        loader.load(
            "./images/space01.jpg",
            function (texture) {
                vars.textures.wormhole = texture;
                setupThreeJS();
            }
        );
    }

    function setupThreeJS() {
        console.log("SimpleWormHole.setupThreeJS()");


        vars.three.renderer = new THREE.WebGLRenderer({ alpha: false });
        vars.three.renderer.setClearColor(0x000000, 0);
        vars.three.renderer.setSize(window.innerWidth, window.innerHeight);
        vars.dom.container = document.getElementById("wormhole");
        vars.dom.container.append(vars.three.renderer.domElement);

        // Creating the scene
        vars.three.scene = new THREE.Scene();
        // Setting up the camera
        vars.three.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);

        // Creating the tunnel and adding it to the scene
        vars.tunnelGeom = buildTunnelGeometry(20, 512, 10, 80);

 
        vars.tunnelMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 1,
            side: THREE.DoubleSide,
            wireframe: false,
            map: vars.textures.wormhole
        });

        vars.tunnelMesh = new THREE.Mesh(vars.tunnelGeom, vars.tunnelMaterial);
        vars.three.scene.add(vars.tunnelMesh);

        setupCubeMap();
        resizeHandler();
        vars.loaded = true;

        if (vars.started) {
            startIntroAnim();
        }
    }

    function setupCubeMap(){
        // console.log("Wormhole.setupCubeMap()");

        var urls = [
            vars.path + './images/neb_px.jpg',
            vars.path + './images/neb_nx.jpg',
            vars.path + './images/neb_py.jpg',
            vars.path + './images/neb_ny.jpg',
            vars.path + './images/neb_pz.jpg',
            vars.path + './images/neb_nz.jpg'
        ];

        vars.three.scene.background = new THREE.CubeTextureLoader().load(urls);
   
    
    }

    function buildTunnelGeometry(points, segments, radius, radiusSegments) {
        var splinePoints = [];
        var previousPoint = new THREE.Vector3(0, 0, 0);
        for (var i = 0; i < points; i++) {
            //settings for shape and movement 
            // change values for straight line or curves in warmhole  +500 more straight
            var rX = previousPoint.x + 5 + Math.round(Math.random() * 500);  
            var rY = previousPoint.y + 5 + Math.round(Math.random() * 500);
            var rZ = previousPoint.z + 5 + Math.round(Math.random() * 500);

            previousPoint.x = rX;
            previousPoint.y = rY;
            previousPoint.z = rZ;

            splinePoints.push(new THREE.Vector3(rX, rY, rZ));
        }
        vars.tunnelSpline = new THREE.CatmullRomCurve3(splinePoints); 
        return new THREE.TubeGeometry(vars.tunnelSpline, segments, radius, radiusSegments, false);
    }

    function render() {
        vars.t += 0.01;
    
        var end = 1 - (vars.zSpeed * vars.lookAhead);
    
        // Check if the camera has reached the end of the tunnel
        if (vars.tubePos >= end) {
            console.log("Wormhole limit reached!");
            fadeOutWormhole(); // Trigger the fade-out effect
            return;
        }
    
        // Get current and next positions along the spline
        var pos1 = vars.tunnelSpline.getPointAt(vars.tubePos);
        var pos2 = vars.tunnelSpline.getPointAt(vars.tubePos + (vars.zSpeed * vars.lookAhead));
        vars.three.camera.position.set(pos1.x, pos1.y, pos1.z);
        vars.three.camera.lookAt(pos2);
    
        vars.rx = Math.sin(vars.t) * 25;
        vars.three.camera.rotation.z = (vars.rx * Math.PI) / 180;
        vars.tubePos += vars.zSpeed;
    
        requestAnimationFrame(render);
        vars.three.renderer.render(vars.three.scene, vars.three.camera);
    }

    function resizeHandler() {
        vars.three.renderer.setSize(window.innerWidth, window.innerHeight);
        vars.three.camera.aspect = window.innerWidth / window.innerHeight;
        vars.three.camera.updateProjectionMatrix();
    }

    function startIntroAnim() {
        render();
        vars.dom.overlay.style.display = "block";
        vars.dom.container.style.display = "block";
        vars.dom.overlay.style.opacity = 1;
        vars.dom.container.style.opacity = 1;
    }

    construtor();

    this.start = function () {
        console.log("Wormhole.start()");
        vars.started = true;
        if (vars.loaded) {
            startIntroAnim();
        }
    };
};

var wormhole = new SimpleWormHole();
wormhole.start();
