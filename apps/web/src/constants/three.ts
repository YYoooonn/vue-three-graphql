import * as THREE from 'three';

const SAMPLE_LINE_GEOMETRY = new THREE.BufferGeometry().setFromPoints( [
    new THREE.Vector3( - 1, 0, -1 ),
    new THREE.Vector3( 1, 0, -1 ),
    new THREE.Vector3( 1, 0, 1 ),
    new THREE.Vector3( - 1, 0, 1 ),
    new THREE.Vector3( - 1, 0, -1 )
] );
const SAMPLE_LINE_MATERIAL = new THREE.LineBasicMaterial( { color: 0x000000 } );
export const SAMPLE_LINE = new THREE.Line( SAMPLE_LINE_GEOMETRY, SAMPLE_LINE_MATERIAL );