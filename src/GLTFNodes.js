// GLTG nodes/objects are wrapped in this class (note that gltf format can have multiple objects/nodes)
export class GLTFNodes {

    constructor(options = {}) {
        this.nodes = [...(options.nodes || [])];
    }

    // addNode(node) {
    //     this.nodes.push(node);
    // }

    // traverse(before, after) {
    //     for (const node of this.nodes) {
    //         this.traverseNode(node, before, after);
    //     }
    // }

    // traverseNode(node, before, after) {
    //     if (before) {
    //         before(node);
    //     }
    //     for (const child of node.children) {
    //         this.traverseNode(child, before, after);
    //     }
    //     if (after) {
    //         after(node);
    //     }
    // }
}
