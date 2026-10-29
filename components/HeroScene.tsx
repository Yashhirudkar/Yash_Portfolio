"use client";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

/* ─── Mouse reactive pointer light ─────────────────────────── */
function MouseLight() {
  const light = useRef<THREE.PointLight>(null!);
  const { viewport } = useThree();
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * viewport.width;
      const y = -(e.clientY / window.innerHeight - 0.5) * viewport.height;
      if (light.current) { light.current.position.x = x * 1.4; light.current.position.y = y * 1.4; }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [viewport]);
  return <pointLight ref={light} color="#5B8CFF" intensity={4} distance={12} />;
}

/* ─── GPU particle field ─────────────────────────────────────── */
function ParticleField() {
  const mesh = useRef<THREE.Points>(null!);
  const COUNT = 2200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const palette = [
      new THREE.Color("#5B8CFF"),
      new THREE.Color("#7C3AED"),
      new THREE.Color("#06B6D4"),
      new THREE.Color("#a78bfa"),
    ];
    for (let i = 0; i < COUNT; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.04;
    mesh.current.rotation.x = Math.sin(t * 0.02) * 0.15;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors sizeAttenuation transparent opacity={0.75} />
    </points>
  );
}

/* ─── Floating orb rings ─────────────────────────────────────── */
function OrbRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    mesh.current.rotation.z = clock.elapsedTime * speed;
  });
  return (
    <mesh ref={mesh} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

/* ─── Central energy orb ─────────────────────────────────────── */
function EnergyOrb() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    outerRef.current.rotation.y = t * 0.3;
    outerRef.current.rotation.z = t * 0.15;
    innerRef.current.rotation.y = -t * 0.5;
    const s = 1 + Math.sin(t * 1.8) * 0.04;
    innerRef.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Outer distort shell */}
        <mesh ref={outerRef}>
          <Sphere args={[1.22, 96, 96]}>
            <MeshDistortMaterial
              color="#1a1a3e"
              emissive="#5B8CFF"
              emissiveIntensity={0.45}
              distort={0.38}
              speed={2.8}
              roughness={0}
              metalness={0.9}
              transparent
              opacity={0.65}
            />
          </Sphere>
        </mesh>
        {/* Inner glowing core */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.82, 64, 64]} />
          <meshStandardMaterial
            color="#0a0a2e"
            emissive="#7C3AED"
            emissiveIntensity={1.2}
            roughness={0.1}
            metalness={0.95}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Orbital rings */}
        <OrbRing radius={1.7} speed={0.6} tilt={Math.PI / 4} color="#5B8CFF" />
        <OrbRing radius={2.0} speed={-0.45} tilt={Math.PI / 2.5} color="#7C3AED" />
        <OrbRing radius={2.3} speed={0.3} tilt={Math.PI / 1.8} color="#06B6D4" />
      </group>
    </Float>
  );
}

/* ─── Floating debris shards ─────────────────────────────────── */
function Shard({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const speed = useMemo(() => 0.3 + Math.random() * 0.5, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.rotation.x = t * speed;
    ref.current.rotation.y = t * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(t * 0.6 + offset) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.08 + Math.random() * 0.07]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} roughness={0} metalness={1} />
    </mesh>
  );
}

const SHARDS: Array<{ pos: [number, number, number]; color: string }> = [
  { pos: [3, 1.5, -1], color: "#5B8CFF" }, { pos: [-3.2, -0.5, -0.5], color: "#7C3AED" },
  { pos: [2, -2, 0.5], color: "#06B6D4" }, { pos: [-2.5, 2, -1], color: "#a78bfa" },
  { pos: [3.5, -1.5, 0], color: "#5B8CFF" }, { pos: [-1.8, -2.5, 0.8], color: "#06B6D4" },
];

/* ─── Scene root ─────────────────────────────────────────────── */
export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.08} />
      <pointLight color="#06B6D4" intensity={3} position={[4, 3, 2]} />
      <pointLight color="#7C3AED" intensity={2.5} position={[-4, -2, 1]} />
      <MouseLight />
      <Stars radius={60} depth={60} count={900} factor={2.5} saturation={0.6} fade speed={0.6} />
      <EnergyOrb />
      <ParticleField />
      {SHARDS.map((s, i) => <Shard key={i} position={s.pos} color={s.color} />)}
    </Canvas>
  );
}

