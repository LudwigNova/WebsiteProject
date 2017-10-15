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
  const FAR = 100000;

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
  camera.position.x = 70000;
  camera.position.y = 40000;
  camera.position.z = 70000;
  scene.add(camera);

  //****
  //* Setting up the camera controls
  controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.addEventListener( 'change', render );
  controls.enableZoom = true;
  controls.target.set( 50000, 20000, 50000 );

  //****
  //* Setting up the variables for the sphere
  const RADIUS = 100;
  const SEGMENTS = 1;
  const RINGS = 1;

  //****
  //* Initializing the material for the sphere
  const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xFFFFFF
    });

  var light = new THREE.AmbientLight(0xFFFFFF);
    scene.add(light);

  for(var i=0;i<15000;i++){
    const spheres = new THREE.Mesh(new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS), sphereMaterial);
    spheres.position.x = data[i].x*300;
    spheres.position.y = data[i].y*300;
    spheres.position.z = data[i].z*300;
    scene.add(spheres);
  }

  document.getElementById("loader").remove();
  document.getElementById("loadingText").remove();

}

//**
//*Frame update method
function render(){
  renderer.render( scene, camera );
}
