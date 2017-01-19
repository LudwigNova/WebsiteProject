//##############################################################
//Useful tutorial for doing all of this:
//https://aerotwist.com/tutorials/getting-started-with-three-js/
//##############################################################

var camera, controls, scene, renderer;

init();
render();

function init(){
  const WIDTH = 800;
  const HEIGHT = 600;

  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH/HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  const container = document.querySelector('#Container');

  //****
  //* Initializing the renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(WIDTH, HEIGHT);

  //****
  //* Adding the renderer element to the container
  container.appendChild(renderer.domElement);

  //****Initializing the scene
  //*
  scene = new THREE.Scene();

  //****
  //* Initializing the camera and adding it to the scene
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.z = 100;
  scene.add(camera);

  //****
  //* Setting up the camera controls
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.addEventListener( 'change', render );
  controls.enableZoom = false;

  //****
  //* Setting up the variables for the sphere
  const RADIUS = 100;
  const SEGMENTS = 30;
  const RINGS = 30;

  //****
  //* Initializing the material for the sphere
  const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF
    });

  //****
  //* Creating the sphere and adding it to the scene
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS), sphereMaterial);
  sphere.position.z = -400;
  scene.add(sphere);

  //**
  //*Creating and adding a point light to the scene
  const pointLight = new THREE.PointLight(0xFFFFFF);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);
}

//**
//*Frame update method
function render(){
  renderer.render( scene, camera );
}
