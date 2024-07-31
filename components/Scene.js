import { useEffect, useRef } from "react";
import * as THREE from "three";

function Scene({ className, rotationX = 0.01, rotationY = 0.01 }) {
  const sceneRef = useRef();
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += rotationX;
      cube.rotation.y += rotationY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      renderer.dispose();
    };
  }, []);

  return <div ref={sceneRef} className={className} />;
}

export default Scene;
