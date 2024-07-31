import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

function TabletViewer({
  className,
  positionX = 0,
  positionY = 0,
  cameraPosition = 5,
  rotationSpeed = 0.01,
  size = 1,
  animDuration = 1,
}) {
  const tabletRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 opacity
    tabletRef.current.appendChild(renderer.domElement);
    const loader = new GLTFLoader();

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Create and add the mesh
    const geometry = new THREE.OctahedronGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0x0088ff });
    const hedron = new THREE.Mesh(geometry, material);
    scene.add(hedron);

    camera.position.z = cameraPosition;
    hedron.position.x = positionX;
    hedron.position.y = positionY;
    hedron.scale.set(size, size, size);
    const direction = positionX < 0 ? 1 : -1;
    const handleScroll = () => {
      const scrollAmount = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rotationAmount = (scrollAmount / maxScroll) * Math.PI * 2;

      gsap.to(hedron.rotation, { x: rotationAmount, y: rotationAmount, duration: animDuration });
      gsap.to(hedron.position, { x: positionX + (direction * rotationAmount) / 2, duration: animDuration });
      const scaleAmount = (scrollAmount / maxScroll) * 2 + size;
      gsap.to(hedron.scale, { x: scaleAmount, y: scaleAmount, z: scaleAmount, duration: animDuration });
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      requestAnimationFrame(animate);

      hedron.rotation.x += rotationSpeed;
      hedron.rotation.y += rotationSpeed;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      // Cleanup
      renderer.dispose();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className={className} ref={tabletRef} />;
}

export default TabletViewer;
