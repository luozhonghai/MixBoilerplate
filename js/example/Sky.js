import {DirectionalLight} from "three";
import SkyVertexShader from "./sky_vertex.glsl";
import SkyFragmentShader from "./sky_fragment.glsl";
import {BackSide, Color, Group, Mesh, Object3D, ShaderMaterial, SphereBufferGeometry} from "three";
import * as THREE from "three";


class Sky extends Group {

  constructor(autoUpdate, dayTime, sunDistance, time ) {
    super();
    /**
     * Sun color in hex RGB.
     *
     * @property sunColor
     * @type {number}
     * @default 0xFFFFAA
     */
    this.sunColor = 0xFFFFAA;

    /**
     * Sun color intensity.
     *
     * @property intensity
     * @type {number}
     */
    this.intensity = 0.3;

    // Uniforms
    var uniforms =
      {
        topColor: {type: "c", value: new Color(0.0, 0.46, 1.0)},
        bottomColor: {type: "c", value: new Color(1.0, 1.0, 1.0)},
        offset:	{type: "f", value: 20},
        exponent: {type: "f", value: 0.2}
      };

    var geometry = new SphereBufferGeometry(1500, 16, 16);
    var material = new ShaderMaterial({
      vertexShader: SkyVertexShader,
      fragmentShader: SkyFragmentShader,
      uniforms: uniforms,
      side: BackSide
    });

    const materialtemp = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    materialtemp.side =BackSide;
    this.sky = new Mesh(geometry, material);
    this.sky.matrixAutoUpdate = false;
    this.add(this.sky);

    /**
     * Directional light to simulate sun light and cast shadows.
     *
     * @property sun
     * @type {DirectionalLight}
     */
    this.sun = new DirectionalLight(this.sunColor, this.intensity);
    this.sun.castShadow = true;
    this.sun.locked = true;
    this.add(this.sun);
  }

  initialize() {
    this.updateSky();
    Object3D.prototype.initialize.call(this);
  }

  /**
   * Update sky color and sun position.
   *
   * If autoUpdate set to true is automatically called by the update method.
   *
   * @method updateSky
   */
  updateSky() {

  }
}


export {Sky};

