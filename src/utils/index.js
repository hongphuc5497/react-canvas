import * as THREE from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

export const init = () => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas")
  })
  renderer.setSize(width, height);
  renderer.setClearColor(new THREE.Color("rgb(51, 51, 51)"));

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 10000);
  camera.position.set(0, 0, +1000);

  const sphere = new THREE.SphereGeometry(300, 30, 30);
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color("rgb(0, 159, 140)"),
    wireframe: true
  });

  const mesh = new THREE.Mesh(sphere, material);
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  function render(){
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
}