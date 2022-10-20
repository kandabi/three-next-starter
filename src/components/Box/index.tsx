import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import orangeTexture from '../../assets/orangeTexture.png';

const Box = () => {
   const mesh = useRef<Mesh>(null!);
   const colorMap = useLoader(TextureLoader, orangeTexture.src);

   useFrame((state, delta) => {
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y -= 0.005;
   });

   return (
      <mesh ref={mesh}>
         <meshStandardMaterial map={colorMap} />
         <boxGeometry args={[2, 2, 2]} />
      </mesh>
   );
};

export default Box;
