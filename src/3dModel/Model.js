import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cherry.geometry}
        material={materials["01___Default"]}
        position={[0.05, 0.12, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.KeyLP.geometry}
        material={materials["07___Default"]}
        position={[0.05, 0.12, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.pohjaLP.geometry}
        material={materials["08___Default"]}
        position={[0.05, 0.12, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Line001.geometry}
        material={materials["02___Default"]}
        position={[0.05, 0.12, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.USBLP.geometry}
        material={materials["09___Default"]}
        position={[0.05, 0.12, -0.17]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model.glb");