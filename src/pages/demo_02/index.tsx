import React, { useEffect, useRef } from 'react';
// 导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import styles from './index.less';

export default function IndexPage() {
  const demoRef = useRef<any>();
  const demoRef2 = useRef<any>();

  const renderDemo1 = () => {
    const domElem = demoRef.current;
    // 1.创建场景
    const scene = new THREE.Scene();
    // 2.创建相机-透视相机（近大远小）
    const camera = new THREE.PerspectiveCamera(
      45, //  视角(同样的距离，越大视野越大，看的东西越多)
      domElem.clientWidth / domElem.clientHeight, //相机的宽高比
      0.1, // 近平面：相机最近能看到的物体
      1000, // 远平面：相机最远能看到的物体
    );
    // 3.创建渲染器-渲染到画布上
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上
    // 4.创建几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //创建材质
    const cube = new THREE.Mesh(geometry, material); //创建网格
    scene.add(cube); // 将网格添加到场景中
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 5;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 6.渲染
    // renderer.render(scene, camera)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 0.2;
    camera.position.y = 0.2;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数
    controls.autoRoate = true; //设置自动旋转
    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      // 渲染
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  };

  const renderDemo2 = () => {
    const domElem = demoRef2.current;
    // 1.创建场景
    const scene = new THREE.Scene();
    // 2.创建相机-透视相机（近大远小）
    const camera = new THREE.PerspectiveCamera(
      45, //  视角(同样的距离，越大视野越大，看的东西越多)
      domElem.clientWidth / domElem.clientHeight, //相机的宽高比
      0.1, // 近平面：相机最近能看到的物体
      1000, // 远平面：相机最远能看到的物体
    );
    // 3.创建渲染器-渲染到画布上
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上
    // 4.创建几何体
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //创建材质
    const parentMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); //创建材质
    const parentCube = new THREE.Mesh(geometry, parentMaterial);
    const cube = new THREE.Mesh(geometry, material); //创建网格
    parentCube.add(cube);
    parentCube.position.set(-1, 0, 0);
    cube.position.set(3, 0, 0);
    scene.add(parentCube); // 将网格添加到场景中
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 5;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 6.渲染
    // renderer.render(scene, camera)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 0.2;
    camera.position.y = 0.2;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数
    controls.autoRoate = true; //设置自动旋转
    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      // 渲染
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  };

  useEffect(() => {
    renderDemo1();
    renderDemo2();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Threejs</h1>
      <h3>简介：Threejs简介</h3>
      <div className={styles.list}>
        <div className={styles.module}>
          <h4>demo1：创建Threejs基本步骤</h4>
          <div className={styles.demo} ref={demoRef}></div>
        </div>

        <div className={styles.module}>
          <h4>demo2：相对位置</h4>
          <div className={styles.demo} ref={demoRef2}></div>
        </div>
      </div>
    </div>
  );
}
