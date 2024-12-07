// Scroll to the Explore section smoothly
function scrollToExplore() {
    document.getElementById("explore-section").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Three.js scene setup for background animation
const canvas = document.getElementById('three-canvas');
const scene = new THREE.Scene();

// Set up the camera for a 3D view
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some rotating spheres to the scene (to replace the cube)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(2, 0, 0);  // Set initial position of the sphere
scene.add(sphere);

// Add another sphere for more dynamic motion
const sphere2 = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial({ color: 0x0000ff }));
sphere2.position.set(-2, 0, 0);  // Set initial position of the second sphere
scene.add(sphere2);

// Add a background starfield effect
const stars = [];
for (let i = 0; i < 1000; i++) {
    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
    );
    scene.add(star);
    stars.push(star);
}

// Set camera position
camera.position.z = 5;

// Create an animate function to rotate the spheres and create a dynamic background
function animate() {
    requestAnimationFrame(animate);

    // Rotate the spheres for a dynamic 3D effect
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;

    // Animate the stars to create a parallax effect
    for (let i = 0; i < stars.length; i++) {
        stars[i].rotation.x += 0.001;
        stars[i].rotation.y += 0.001;
    }

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation
animate();

// Adjust the canvas size when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
