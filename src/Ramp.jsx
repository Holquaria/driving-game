import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Ramp() {
    const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/ramp.glb');

    const geometry = result.scene.children[0].geometry;

    const vertices = geometry.attributes.position.array
    const indeces = geometry.index.array

    const [ref] = useTrimesh(
        () => ({
            args: [vertices, indeces],
            mass: 0,
            type: 'Static'
        }),
        useRef(null)
    )
}