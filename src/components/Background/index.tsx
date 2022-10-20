import { Vector3 } from 'three';
const vertexShader = /*glsl*/ `
   varying vec2 vUv;

   void main() {
     gl_Position =
         projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
     vUv = uv;
   }
`;

const fragmentShader = /*glsl*/ `
   varying vec2 vUv;

   void main() {
     gl_FragColor = vec4(0.8 * vUv.xy, 1.0, 0.75);
   }
`;

const Background = () => {
   return (
      <mesh position={new Vector3(0, 0, -5)}>
         <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
         <planeGeometry args={[32, 18, 1, 1]} />
      </mesh>
   );
};

export default Background;
