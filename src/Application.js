import { Renderer } from './Renderer.js';

// Abstraction of aplication (Airborne.js extends Aplication class)
export class Application {
    
    constructor(canvas, glOptions) {
        this._update = this._update.bind(this); // bind this to this in _update()
        this.canvas = canvas;
        this._initGL(glOptions);
    }

    async init() {
        this.time = performance.now();
        this.prevTime = this.time;
        this.renderer = new Renderer(this.gl);

        await this.start(); // init/start game before game loop starts
        requestAnimationFrame(this._update); // start game loop
    }
    // webgl initialization
    _initGL(glOptions) {
        this.gl = null;
        try {
            this.gl = this.canvas.getContext('webgl2', glOptions);
        } catch (error) {}
        if (!this.gl) throw Error('Cannot create WebGL 2.0 context');
    }
    // game loop
    _update() {
        this.time = performance.now(); // get current time in millisecondes (with fractions)
        const dt = (this.time - this.prevTime) * 0.001; // change of time between updates in seconde
        this.prevTime = this.time;
        this._resize();
        this.update(dt);
        this.render();
        requestAnimationFrame(this._update);
    }
    // resize if canvas width/height has changed
    _resize() {
        const canvas = this.canvas;
        const gl = this.gl;

        const pixelRatio = window.devicePixelRatio;
        const width = pixelRatio * canvas.clientWidth;
        const height = pixelRatio * canvas.clientHeight;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;

            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            // (update projection matrix)
            this.resize();
        }
    }

    // initialization code (including event handler binding)
    start() {}
    // update code (input, animations, AI ...)
    update(dt) {}
    // render code (gl API calls)
    render() {}
    // resize code (e.g. update projection matrix)
    resize() {}
}