'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

function RealisticEarth() {
  const groupRef = useRef<THREE.Group>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation (0.5 RPM as per plan)
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
    if (atmosphereRef.current && atmosphereRef.current.material instanceof THREE.MeshBasicMaterial) {
      // Atmosphere pulses gently
      const pulse = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.02 + 0.15
      atmosphereRef.current.material.opacity = pulse
    }
  })

  // Create a realistic Earth-like material
  const earthMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#1e40af', // Deep ocean blue
      roughness: 0.9,
      metalness: 0.1,
      emissive: '#0a1929',
      emissiveIntensity: 0.2,
    })
  }, [])

  // Atmospheric glow material
  const atmosphereMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: '#4A90E2',
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    })
  }, [])

  // City markers with enhanced glow
  const cities = [
    { name: 'Dubai', position: [0.8, 0.7, 1.1] as [number, number, number], color: '#D4A853', size: 0.05 },
    { name: 'Singapore', position: [1.35, 0.05, 0.65] as [number, number, number], color: '#0EA5E9', size: 0.04 },
    { name: 'London', position: [-0.1, 1.15, 0.95] as [number, number, number], color: '#E8C97A', size: 0.04 },
    { name: 'Frankfurt', position: [0.15, 1.12, 0.92] as [number, number, number], color: '#FFFFFF', size: 0.04 },
  ]

  return (
    <group ref={groupRef}>
      {/* Main Earth sphere */}
      <Sphere args={[1.5, 64, 64]}>
        <primitive object={earthMaterial} attach="material" />
      </Sphere>

      {/* Add some "continents" as lighter patches (simplified) */}
      {/* We'll use point lights positioned to create a more realistic Earth appearance */}
      <pointLight position={[2, 0, 0]} intensity={0.3} color="#7cb342" distance={3} />
      <pointLight position={[-2, 0, 0]} intensity={0.2} color="#558b2f" distance={3} />
      <pointLight position={[0, 2, 0]} intensity={0.15} color="#9ccc65" distance={3} />

      {/* Atmospheric glow layer */}
      <Sphere ref={atmosphereRef} args={[1.58, 64, 64]}>
        <primitive object={atmosphereMaterial} attach="material" />
      </Sphere>

      {/* City markers with pulsing glow */}
      {cities.map((city) => (
        <group key={city.name} position={city.position}>
          {/* Main marker sphere */}
          <mesh>
            <sphereGeometry args={[city.size, 16, 16]} />
            <meshBasicMaterial color={city.color} />
          </mesh>
          {/* Glow ring */}
          <mesh>
            <sphereGeometry args={[city.size * 1.5, 16, 16]} />
            <meshBasicMaterial color={city.color} transparent opacity={0.3} />
          </mesh>
          {/* Point light for glow effect */}
          <pointLight position={[0, 0, 0]} color={city.color} intensity={0.5} distance={0.3} />
        </group>
      ))}

      {/* Ambient lighting for Earth */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
    </group>
  )
}

export default function GlobeViz() {
  return <RealisticEarth />
}
