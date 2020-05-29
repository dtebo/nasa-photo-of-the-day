import React from "react";
import "./App.css";

import Header from './Components/Header/Header';
import PhotoContainer from './Components/PhotoPage/PhotoContainer';

// import * as THREE from "three";

function App() {
  // let scene, camera;

  // function init(){
  //   scene = new THREE.Scene();
  //   camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1, 1000);
  //   camera.position.z = 1;
  //   camera.position.x = 1.16;
  //   camera.position.y = -0.12;

  //   let ambient = new THREE.AmbientLight(0x555555);
  //   scene.add(ambient);

  //   let renderer = new THREE.WebGLRenderer();
  //   render.setSize(window.innerWidth, window.innerHeight);
  //   scene.fog = new THREE.FogExp2(0x03544e, 0.001);
  //   render.setClearColor(scene.fog.color);

  //   document.body.appendChild(renderer.domElement);

  //   render(renderer);
  // }

  // function render(renderer){
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(render);
  // }

  document.body.style.boxSizing = 'border-box';

  return (
    <div className="App">
      <Header />
      <PhotoContainer />
    </div>
  );
}

export default App;
