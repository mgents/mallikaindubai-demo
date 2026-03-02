'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  speed?: number
}

export default function ParticleField({ count = 500, speed = 0.3 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const goldColor = new THREE.Color('#D4A853')
    const tealColor = new THREE.Color('#0EA5E9')

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10

      const color = Math.random() > 0.5 ? goldColor : tealColor
      col[i * 3] = color.r
      col[i * 3 + 1] = color.g
      col[i * 3 + 2] = color.b
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    return geo
  }, [count])

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      depthWrite: false,
    })
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime() * speed

    const posArray = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      posArray[i3 + 1] += Math.sin(time + i * 0.1) * 0.001
      posArray[i3] += Math.cos(time + i * 0.05) * 0.0005
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = time * 0.02
  })

  return <points ref={meshRef} geometry={geometry} material={material} />
}
