// components/ThreeBackground.js
import * as THREE from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export function initThreeBackground(container) {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Add subtle geometry or light
  const geometry = new THREE.SphereGeometry(1.5, 64, 64);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, opacity: 0.4, transparent: true });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(container.clientWidth, container.clientHeight),
    1.5, 0.4, 0.85
  );
  bloom.threshold = 0.2;
  bloom.strength = 1.2;
  bloom.radius = 0.5;
  composer.addPass(bloom);

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.002;
    composer.render();
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    composer.setSize(container.clientWidth, container.clientHeight);
  });
}
