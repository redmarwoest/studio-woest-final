import * as THREE from "three";

import fragmentShader from "../shaders/fragment.glsl";
import vertexShader from "../shaders/vertex.glsl";

import Sizes from "./utils/sizes";

const colors = [
  ["#000000", "#6C6C6C", "#222222", "#444444", "#666666"],
  ["#000000", "#6C6C6C", "#222222", "#444444", "#666666"],
  ["#000000", "#6C6C6C", "#222222", "#444444", "#666666"],
  ["#000000", "#6C6C6C", "#222222", "#444444", "#666666"],
];

let ind = Math.floor(Math.random() * colors.length);

ind = 1;

let pallete: THREE.Color[] = colors[ind].map((color) => new THREE.Color(color));

class WebGL {
  canvas: any;
  scene: any;
  camera: any;
  sizes: Sizes;
  renderer: any;
  planeGeometry: any;
  planeMesh: any;
  planeMaterial: any;
  time: any;

  setup(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas;

    this.sizes = new Sizes();

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 0.4);
    this.scene.add(this.camera);
    this.time = 0;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 1));

    this.setGeometry();
    this.render();
    this.setResize();
  }

  setGeometry() {
    this.planeGeometry = new THREE.PlaneGeometry(4, 4, 600, 600);
    this.planeMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      fragmentShader: fragmentShader,
      vertexShader: vertexShader,
    });

    this.planeMesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    this.planeMaterial.uniforms = {
      time: { value: 0 },
      uColor: { value: pallete },
    };
    this.scene.add(this.planeMesh);
  }

  render() {
    this.time += 0.0001;
    this.planeMaterial.uniforms.time.value = this.time;

    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  setResize() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update = () => {
    this.camera.onUpdate();
    this.renderer.onUpdate();
  };
}

export default new WebGL();
