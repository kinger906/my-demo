import React, { useEffect, useRef } from 'react';
// 导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 导入GUI调试器
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

import * as THREE from 'three';
import styles from './index.less';

export default function IndexPage() {
  const demoRef = useRef<any>();
  const demoRef2 = useRef<any>();
  const demoRef3 = useRef<any>();
  const demoRef4 = useRef<any>();

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
    cube.scale.set(2, 2, 2);
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
      parentCube.rotation.x += 0.01;
      parentCube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  };

  const renderDemo3 = () => {
    const domElem = demoRef3.current;
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
    //设置元素材质为线框模式
    material.wireframe = true;
    cube.scale.set(0.5, 0.5, 0.5);
    cube.position.x = 1;
    // 绕着x轴旋转45度
    cube.rotation.x = Math.PI / 4;
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
    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      // 渲染
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      // 重置渲染器宽高比
      renderer.setSize(domElem.clientWidth, domElem.clientHeight);
      // 重置相机宽高比
      camera.aspect = domElem.clientWidth / domElem.clientHeight;
      // 更新相机投影矩阵
      camera.updateProjectionMatrix();
    });

    const btn = document.createElement('div');
    btn.innerHTML = '全屏';
    domElem.appendChild(btn);
    btn.onclick = () => {
      renderer.domElement.requestFullscreen();
    };

    // 自定义事件
    const eventObj = {
      fullScreen: () => {
        renderer.domElement.requestFullscreen();
      },
      myTest: () => {
        alert('win');
      },
    };
    const gui = new GUI();
    gui.add(eventObj, 'fullScreen').name('全屏');
    gui.add(eventObj, 'myTest').name('测试');
    const folder = gui.addFolder('立方体组');
    folder.add(cube.position, 'x', -5, 5).name('立方体x轴位置'); //控制最小和最大
    folder
      .add(cube.position, 'x')
      .min(-5)
      .max(5)
      .step(1)
      .name('立方体x轴控制方式2')
      .onChange((val) => {
        console.log('拖动变化', val);
      })
      .onFinishChange((val) => {
        console.log('拖动完成后触发：', val);
      }); //限制步伐

    gui.add(material, 'wireframe').name('元素的材质线框模式');

    const colorParams = {
      cubeColor: '#ff0000',
    };
    gui
      .addColor(colorParams, 'cubeColor')
      .name('立方体颜色')
      .onChange((value) => {
        cube.material.color.set(value);
      });
  };

  const renderDemo4 = () => {
    const domElem = demoRef4.current;
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
    // 4.创建自定义几何体
    const geometry = new THREE.BufferGeometry();
    // 使用索引绘制
    const vertices = new Float32Array([
      //4个索引点
      -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0,
    ]);
    // 创建顶点属性
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    // 创建索引
    const indices = new Uint16Array([0, 1, 2, 2, 3, 0]); //标识实际6个点，对应的索引编号，有些编号可以复用
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    console.log(geometry);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00, //创建材质
      // side: THREE.DoubleSide  //是否双面（正反两面都渲染）
    });
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
    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  };

  useEffect(() => {
    renderDemo1();
    renderDemo2();
    renderDemo3();
    renderDemo4();
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
          <h4>demo2：相对位置和缩放</h4>
          <div className={styles.demo} ref={demoRef2}></div>
        </div>

        <div className={styles.module}>
          <h4>demo3：旋转和全屏自适应和调试神器</h4>
          <div className={styles.demo} ref={demoRef3}></div>
        </div>

        <div className={styles.module}>
          <h4>demo4：创建几何体和索引点</h4>
          <div className={styles.demo} ref={demoRef4}></div>
        </div>
      </div>
    </div>
  );
}
