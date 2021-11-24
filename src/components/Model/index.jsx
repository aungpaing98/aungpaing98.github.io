import * as THREE from "three";
import styled from "styled-components"
import { useState, useRef, useEffect } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Canvas, useFrame, extend, useThree } from "react-three-fiber";


const StyledModel = styled.section`
    height:300px;
    width: 90%;

    margin-top: 0;
`


const Controls = () => {
  extend({ OrbitControls });
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

const SpaceModel = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load("./scene.gltf", setModel);
  }, []);
  return model ? <primitive object={model.scene} /> : null;
};

export default function Model() {
  return (
    <StyledModel>
      <Canvas
        camera={{position:[0, 200, 300]}}
        colorManagement
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight />
        <spotLight position={[0, 2, 5]} penumbra={1} />
        <Controls />
        <SpaceModel />
      </Canvas>
    </StyledModel>
  );
}
