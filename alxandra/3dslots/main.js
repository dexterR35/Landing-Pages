// Global variables for the 3D scene, camera, renderer, lever, and wheels
let scene, camera, renderer, lever, wheels = [];
let raycaster = new THREE.Raycaster(); // Raycaster for detecting mouse clicks on 3D objects
let mouse = new THREE.Vector2(); // Vector to store normalized mouse coordinates
let isAnimating = false; // check if animation is currently running
let controls; // Orbit controls for camera
let orbitEnabled = false; // check if orbit controls are enabled
const maxCount = 3; // Maximum spins
let clickCount = maxCount; // Counter for remaining interactions
let initialCameraPosition, initialCameraQuaternion;
// Configuration variables for animation durations and rotations
const config = {
    leverDuration: 400, // 0.4 seconds for lever animation
    wheelDuration: 1200, // 1.6 seconds for wheel rotation
    leverReturnDuration: 300, // 0.3 seconds for lever return animation
    delayBetweenWheels: 150, // 0.25 seconds delay for each wheel
    totalWheelRotation: 4 * Math.PI // 2 * Math.PI (720deg) for wheel rotation
};

let targetIndexes = generateRandomTargetIndexes(); // Initialize target indexes

function init() {
    // Create the 3D scene
    scene = new THREE.Scene();
    // Set up the camera with perspective projection
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(-10, -10, 30); // Start with the camera far away
    // Store the initial camera position and orientation
    initialCameraPosition = camera.position.clone();
    initialCameraQuaternion = camera.quaternion.clone();
    
    // Set up the renderer with antialiasing
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
    renderer.setClearColor(0xffffff, 1); // Set background color to white
    document.body.appendChild(renderer.domElement); // Add renderer to the DOM

    // Add a directional light to the scene
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(0, 0.4, 1).normalize();
    scene.add(light);

    // Load the GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load('./roata-new_color.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model); // Add the loaded model to the scene
        for (let i = 1; i <= 5; i++) {
            // Get the wheel objects by their names and add them to the wheels array
            const wheel = gltf.scene.getObjectByName(`roata${i}`);
            if (wheel) {
                wheels.push(wheel);
                // Set a random initial rotation for each wheel
                wheel.rotation.x = getRandomCenteredRotation();
            }
        }
        lever = gltf.scene.getObjectByName('lever');

        if (!lever) {
            console.error('Lever object not found in the GLTF model.');
        }
    }, undefined, function (error) {
        console.error('An error occurred while loading the GLTF model', error);
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Add event listeners for the buttons, initially disabled
    document.getElementById('toggleButton').addEventListener('click', toggleOrbitControls);
    document.getElementById('rotateButton').addEventListener('click', onRotateButtonClick);
    disableInteractions(); // Disable all interactions initially

    updateCountDisplay(); // Initialize the count display
    showStartButton(); // Show the start button when the scene initializes
}

function showStartButton() {
    // Create the start button element
    const startButton = document.createElement('button');
    startButton.id = 'startButton';
    startButton.innerText = 'Start Game';
    document.body.appendChild(startButton);
    // Add click event listener to the start button
    startButton.addEventListener('click', function() {
        document.body.removeChild(startButton); // Remove the button after clicking
        moveToDefaultCameraPosition(); // Move the camera to the default position
        enableInteractions(); // Enable all interactions after the game starts
    });
}

function moveToDefaultCameraPosition() {
    const start = performance.now(); // Get the start time
    const initialPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z }; // Store the initial position
    const targetPosition = { x: 0, y: 0, z: 5 }; // Target camera position
    
    function animateCamera(time) {
        const elapsed = time - start; // Calculate elapsed time
        const progress = Math.min(elapsed / 1000, 1); // Progress for 1 second animation
        camera.position.x = initialPosition.x + (targetPosition.x - initialPosition.x) * easeInOutQuad(progress); // Animate the x position
        camera.position.y = initialPosition.y + (targetPosition.y - initialPosition.y) * easeInOutQuad(progress); // Animate the y position
        camera.position.z = initialPosition.z + (targetPosition.z - initialPosition.z) * easeInOutQuad(progress); // Animate the z position

        if (progress < 1) {
            requestAnimationFrame(animateCamera); // Continue the animation
        }
    }

    requestAnimationFrame(animateCamera); // Start the camera animation
}

function getRandomCenteredRotation() {
    const randomInt = Math.floor(Math.random() * 8);
    return randomInt * (Math.PI / 4);
}

function generateRandomTargetIndexes() {
    // Generate random target indexes for each wheel
    const indexes = [];
    for (let i = 0; i < 5; i++) {
        indexes.push(Math.floor(Math.random() * 8)); // Random number between 0 and 7
    }
    return indexes;
}

function animateWheels() {
    // Animate the wheels sequentially with delays
    const start = performance.now(); // Get the start time
    function animate(time) {
        const elapsed = time - start; // Calculate elapsed time
        wheels.forEach((wheel, index) => {
            if (wheel && elapsed >= config.delayBetweenWheels * index) {
                // Animate each wheel after a delay
                const wheelElapsed = elapsed - config.delayBetweenWheels * index; // Time since wheel animation started
                const wheelProgress = Math.min(wheelElapsed / config.wheelDuration, 1); // Calculate progress (0 to 1)
                const initialRotation = wheel.rotation.x; // Get current rotation
                const targetRotation = (targetIndexes[index] * (Math.PI / 4)) + (wheelProgress * config.totalWheelRotation);
                wheel.rotation.x = initialRotation + (targetRotation - initialRotation); // Apply easing and rotation
            }
        });

        if (elapsed < config.delayBetweenWheels * wheels.length + config.wheelDuration) {
            requestAnimationFrame(animate); // Continue animation
        } else {
            console.log('Wheel animation completed');
            returnLeverToInitial(); // Start lever return animation
        }
    }

    requestAnimationFrame(animate); // Start wheel animation
}

function handleAction() {
    // Decrease the click counter, update the display, and start the animations
    decrementCounter();
    if (clickCount > 0) {
        targetIndexes = generateRandomTargetIndexes();
        console.log(targetIndexes, "targetIndexesRandom");
    } else {
        targetIndexes = [0, 0, 0, 0, 0]; // Winning index on the last click
        console.log(targetIndexes, "targetIndexes");
    }
    animateLeverAndWheels();
    if (clickCount <= 0) {
        // If no clicks remain, disable interactions and alert after the animation
        disableInteractions();
    }
}

function onWindowResize() {
    // Adjust the camera aspect ratio and renderer size when the window is resized
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseClick(event) {
    // Handle mouse clicks to interact with the lever
    event.preventDefault(); // Prevent default browser behavior
    if (clickCount <= 0 || isAnimating) return; // Do nothing if click count is zero or animation is running

    // Convert mouse coordinates to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera); // Update the raycaster with camera and mouse position
    const intersects = raycaster.intersectObjects(scene.children, true); // Get objects intersected by the ray

    if (intersects.length > 0 && intersects[0].object.name === 'lever') {
        // If the lever is clicked, handle the action
        console.log('Lever clicked');
        handleAction();
    }
}

function onRotateButtonClick(event) {
    // Handle clicks on the rotate button to trigger the animation
    if (clickCount <= 0 || isAnimating) return; // Do nothing if click count is zero or animation is running
    console.log('spin button clicked');
    document.getElementById('rotateButton').disabled = true; // Disable button during animation
    handleAction();
}

function decrementCounter() {
    // Decrease the click counter and update the display
    clickCount -= 1;
    console.log('Click count:', clickCount);
    updateCountDisplay();
}

function updateCountDisplay() {
    // Update the displayed count of remaining clicks
    document.getElementById('countDisplay').innerText = `Click Remaining: ${clickCount}/${maxCount} (max-unlimited)`;
}

function animateLeverAndWheels() {
    // Animate the lever and then the wheels
    isAnimating = true; // Set animation flag to true
    const start = performance.now(); // Get the start time
    const leverInitialRotation = lever.rotation.x; // Store initial lever rotation
    const leverTargetRotation = leverInitialRotation + Math.PI / 6; // Calculate target rotation

    function animateLever(time) {
        // Animate the lever's rotation
        const elapsed = time - start; // Calculate elapsed time
        const leverProgress = Math.min(elapsed / config.leverDuration, 1); // Calculate progress (0 to 1)
        lever.rotation.x = leverInitialRotation + (leverTargetRotation - leverInitialRotation) * easeInOutQuad(leverProgress); // Apply easing

        if (leverProgress < 1) {
            requestAnimationFrame(animateLever); // Continue animation
        } else {
            lever.rotation.x = leverTargetRotation; // Ensure final position is exact
            console.log('Lever animation Start');
            animateWheels(); // Start wheel animation
        }
    }

    requestAnimationFrame(animateLever); // Start lever animation
}

function returnLeverToInitial() {
    // Return the lever to its initial position after the wheel animations
    const start = performance.now(); // Get the start time
    const leverInitialRotation = lever.rotation.x; // Store current lever rotation
    const leverTargetRotation = leverInitialRotation - Math.PI / 6; // Calculate target rotation

    function animateReturn(time) {
        const returnElapsed = time - start; // Calculate elapsed time
        const returnProgress = Math.min(returnElapsed / config.leverReturnDuration, 1); // Calculate progress (0 to 1)
        lever.rotation.x = leverInitialRotation - (leverInitialRotation - leverTargetRotation) * easeInOutQuad(returnProgress); // Apply easing

        if (returnProgress < 1) {
            requestAnimationFrame(animateReturn); // Continue animation
        } else {
            lever.rotation.x = leverTargetRotation; // Ensure final position is exact
            console.log('Lever return animation completed');
            isAnimating = false; // Reset animation flag
            if (clickCount > 0) enableButton(); // Enable the button after lever animation if count is not zero
            else showWinningMessage();
        }
    }

    requestAnimationFrame(animateReturn); // Start lever return animation
}

function disableButton() {
    // Disable the rotate button
    document.getElementById('rotateButton').disabled = true;
}

function enableButton() {
    // Enable the rotate button
    document.getElementById('rotateButton').disabled = false;
}

function easeInOutQuad(t) {
    // Easing function for smooth animations
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animate() {
    // Main animation loop to update the scene and renderer
    requestAnimationFrame(animate); // Request the next frame
    if (controls) controls.update(); // Update controls if they are enabled
    renderer.render(scene, camera); // Render the scene
}

// Function to switch to orbit controls
function toggleOrbitControls() {
    if (orbitEnabled) {
        // Disable orbit controls
        controls.dispose();
        controls = null;
        document.getElementById('toggleButton').innerText = 'Enable Orbit Controls';
        console.log('Orbit controls disabled');
    } else {
        // Enable orbit controls
        // Reset camera to its initial position and orientation before enabling controls
        camera.position.copy(initialCameraPosition);
        camera.quaternion.copy(initialCameraQuaternion);
        
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Enable damping for smooth control
        controls.dampingFactor = 0.25; // Set damping factor
        controls.screenSpacePanning = false; // Disable screen space panning
        controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation
        document.getElementById('toggleButton').innerText = 'Disable Orbit Controls';

        // Log the camera's position after enabling orbit controls
        console.log('Orbit controls enabled');
        console.log('Camera Position:', camera.position);
    }
    orbitEnabled = !orbitEnabled; // Toggle orbit controls flag
}

function disableInteractions() {
    // Disable all interactions until the game is started
    document.getElementById('rotateButton').disabled = true; // Disable rotate button
    document.removeEventListener('click', onDocumentMouseClick, false); // Remove mouse click listener if any
    if (controls) controls.dispose(); // Dispose orbit controls if enabled
}

function enableInteractions() {
    // Enable all interactions when the game is started
    document.getElementById('rotateButton').disabled = false; // Enable rotate button
    document.addEventListener('click', onDocumentMouseClick, false); // Add mouse click listener for lever
}

function showWinningMessage() {
    // Create a div element to show the winning message
    const messageDiv = document.createElement('div');
    messageDiv.id = 'winningMessage';
    messageDiv.innerHTML = `
        <div id="winningMessage" style="
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #fff;
            border: 2px solid #000;
            border-radius: 10px;
            font-size: 24px;
            text-align: center;">
            Congrats, you won 250 Runde gratuite!
        </div>
    `;
    document.body.appendChild(messageDiv);
}

console.log("start");
init(); // Initialize the scene
animate(); // Start the animation loop
console.log("end");
