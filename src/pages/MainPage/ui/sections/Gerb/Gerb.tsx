// import { Canvas, useFrame } from '@react-three/fiber';
// import { Suspense, useRef } from 'react';
// import { useGLTF, Center, OrbitControls } from '@react-three/drei';
// import { Group } from 'three';

// const MyModel = () => {
//    const gltf = useGLTF('/gerb.glb');
//    const ref = useRef<Group>(null);

//    // Авто-поворот
//    useFrame(({ clock }) => {
//       const t = clock.getElapsedTime();
//       if (ref.current) {
//          ref.current.rotation.x = Math.sin(t * 0.5) * 0.1; // Медленно и плавно
//          ref.current.rotation.y = Math.sin(t * 0.3) * 0.1; // Незначительно по Y
//       }
//    });

//    return (
//       <Center>
//          <primitive object={gltf.scene} ref={ref} />
//       </Center>
//    );
// };

// export const Gerb = () => {
//    return (
//       <div className='absolute top-0 right-0 w-[800px] h-[800px]'>
//          <Canvas camera={{ position: [0, 0, 35], fov: 45 }} style={{ width: '100%', height: '800px', flexGrow: 1 }}>
//             <ambientLight intensity={0.8} />
//             <directionalLight position={[5, 5, 5]} intensity={1} />
//             <Suspense fallback={null}>
//                <MyModel />
//                <OrbitControls />
//             </Suspense>
//          </Canvas>
//       </div>
//    );
// };
