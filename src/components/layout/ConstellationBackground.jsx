import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const ConstellationBackground = forwardRef((props, ref) => {
    const mountRef = useRef(null);
    const cameraRef = useRef();

    useImperativeHandle(ref, () => ({
        camera: cameraRef.current,
    }));

    useEffect(() => {
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        cameraRef.current = camera;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        currentMount.appendChild(renderer.domElement);
        camera.position.set(0, 0, 20);
        const nodes = [];
        const nodePositions = [
            { x: 0, y: 0, z: 0, size: 1.5, color: 0x4a9eff }, { x: -8, y: 3, z: -2, size: 1, color: 0x00ff88 },
            { x: 8, y: -3, z: -2, size: 1, color: 0xff4a9e }, { x: -5, y: -5, z: 3, size: 0.8, color: 0xffaa00 },
            { x: 5, y: 5, z: 3, size: 0.8, color: 0xff00aa }, { x: -10, y: 0, z: -5, size: 0.6, color: 0x00aaff },
            { x: 10, y: 0, z: -5, size: 0.6, color: 0xaa00ff }, { x: 0, y: -8, z: 2, size: 0.7, color: 0x00ffaa },
            { x: 0, y: 8, z: 2, size: 0.7, color: 0xaaff00 }
        ];
        nodePositions.forEach(pos => {
            const geometry = new THREE.SphereGeometry(pos.size, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: pos.color, wireframe: true, opacity: 0.8, transparent: true });
            const node = new THREE.Mesh(geometry, material);
            node.position.set(pos.x, pos.y, pos.z);
            scene.add(node);
            nodes.push(node);
        });
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4a9eff, opacity: 0.3, transparent: true });
        const connections = [
            [0, 1], [0, 2], [0, 3], [0, 4], [0, 7], [0, 8], [1, 3], [1, 5], [2, 4], [2, 6], [3, 7], [4, 8], [5, 6]
        ];
        connections.forEach(([start, end]) => {
            const points = [nodes[start].position, nodes[end].position];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, lineMaterial);
            scene.add(line);
        });
        const starsGeometry = new THREE.BufferGeometry();
        const starsVertices = [];
        for (let i = 0; i < 5000; i++) {
            starsVertices.push((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
        const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.6 });
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);
        let animationFrameId;
        const animate = () => {
            nodes.forEach((node, i) => {
                node.rotation.x += 0.001 * (i + 1);
                node.rotation.y += 0.002 * (i + 1);
            });
            stars.rotation.y += 0.0001;
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        const handleResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (currentMount) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-[1]" />;
});

export default ConstellationBackground;