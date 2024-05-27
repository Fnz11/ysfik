import * as THREE from "three";

const material = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color("#ffff").convertSRGBToLinear(),
  emissive: new THREE.Color("#1e1e78").convertSRGBToLinear(),
  roughness: 0.1,
  metalness: 0.4,
  reflectivity: 0,
  clearcoat: 1,
  clearcoatRoughness: 1,
});

const View = () => {
  return (
    <>
      <group>
        <mesh position={[0, 0, 0]}  material={material}>
          <torusGeometry   args={[5, 2, 10]} />
        </mesh>
      </group>
    </>
  );
};

export default View;
