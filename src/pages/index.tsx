import styles from '../styles/Home.module.scss';
import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import Header from 'components/Header';
import Box from 'components/Box';
import Background from 'components/Background';

const Home: NextPage = () => {
   return (
      <div className={styles.home}>
         <Header />
         <div className={styles.canvas}>
            <Canvas>
               <ambientLight />
               <pointLight position={[10, 10, 10]} />
               <Box />
               <Background />
            </Canvas>
         </div>
      </div>
   );
};

export default Home;
