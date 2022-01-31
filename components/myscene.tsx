import * as React from 'react'
import { Canvas } from "@react-three/fiber";

const Myscene = () => {

  return (
    <div id="canvas-container">
      <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="purple" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Myscene;
