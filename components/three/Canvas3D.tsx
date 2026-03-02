'use client'

import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'

interface Canvas3DProps {
  children: ReactNode
  className?: string
}

export default function Canvas3D({ children, className = '' }: Canvas3DProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}
