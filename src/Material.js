import { vec3, vec4 } from '../lib/gl-matrix-module.js';

// Material of a Node
// GLTFNodes have material in this location: nodes[i].mesh.primitives[j].material
// non GLTF nodes have material inside node.material
export class Material {

    constructor(options = {}, envmap = {}) {
        // gltf specific -----------------------------------------------
        this.baseColorTexture = options.baseColorTexture || null;
        this.baseColorTexCoord = options.baseColorTexCoord || 0;
        this.baseColorFactor = options.baseColorFactor ? vec4.clone(options.baseColorFactor) : vec4.fromValues(1, 1, 1, 1);

        this.metallicRoughnessTexture = options.metallicRoughnessTexture || null;
        this.metallicRoughnessTexCoord = options.metallicRoughnessTexCoord || 0;
        this.metallicFactor = options.metallicFactor !== undefined ? options.metallicFactor : 1;
        this.roughnessFactor = options.roughnessFactor !== undefined ? options.roughnessFactor : 1;

        this.normalTexture = options.normalTexture || null;
        this.normalTexCoord = options.normalTexCoord || 0;
        this.normalFactor = options.normalFactor !== undefined ? options.normalFactor : 1;

        this.occlusionTexture = options.occlusionTexture || null;
        this.occlusionTexCoord = options.occlusionTexCoord || 0;
        this.occlusionFactor = options.occlusionFactor !== undefined ? options.occlusionFactor : 1;

        this.emissiveTexture = options.emissiveTexture || null;
        this.emissiveTexCoord = options.emissiveTexCoord || 0;
        this.emissiveFactor = options.emissiveFactor ? vec3.clone(options.emissiveFactor) : vec3.fromValues(0, 0, 0);

        this.alphaMode = options.alphaMode || 'OPAQUE';
        this.alphaCutoff = options.alphaCutoff !== undefined ? options.alphaCutoff : 0.5;
        this.doubleSided = options.doubleSided || false;
        // not gltf specific ------------------------------------------
        this.texture = null;
        this.envmap = envmap;

        this.diffuse = 1;
        this.specular = 1;
        this.shininess = 50;

        this.effect = 0.5;
        this.reflectance = 1;
        this.transmittance = 0;
        this.ior = 0.95;

    }

}
