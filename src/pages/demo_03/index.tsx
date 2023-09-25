import React, { useEffect, useRef } from 'react';
// 导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 导入GUI调试器
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import * as THREE from 'three';
import gsap from 'gsap';
import styles from './index.less';

export default function IndexPage() {
  const demoRef = useRef<any>();
  const demoRef2 = useRef<any>();
  const demoRef3 = useRef<any>();
  const demoRef4 = useRef<any>();
  const demoRef5 = useRef<any>();
  const demoRef6 = useRef<any>();
  const demoRef7 = useRef<any>();
  const indexRef = useRef<number>(0);

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
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 10;
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

    // 灯光
    // AmbientLight：环境光，不能用来投射阴影，因为它没有方向
    // DirectionalLight：平行光，可以投射阴影，沿特定方向发射的光，表现是光线都是平行的，常用来模拟太阳光的效果
    // PointLight: 点光源，可以投射阴影，从一个点向各个方向发射的光源，例子：模拟一个灯泡发出的光
    // SpotLight：聚光灯，可投射阴影，光线从一个点沿一个方向射出，随着光线的照射的变远，光线圆锥的尺寸也逐渐增大。例子：手电筒
    // RectAreaLight:平面光光源，不支持阴影，从一个矩形平面上均匀地发射光线，这种光源可以用来模拟像明亮的窗户或者条状灯光光源

    // 材质
    // MeshBasicMaterial:基础网格材质，该材质不受光照的影响，一个以简单着色（平面或线框）方式来绘制几何体的材质，就是设置什么颜色就是什么颜色
    // MeshStandardMaterial:标准网格材质，基于物理的标准材质（PBR），和光照息息相关，可以产生阴影，能够正确地应对所有光照场景，该材质提供了比MeshLambertMaterial或MeshPhongMaterial更精确的逼真的结果，代价是计算成本更高
    // MeshLambertMaterial:Lambert网格材质，非光泽表面的材质，没有镜面高光（用于模拟木材、石材，粗糙类的）
    // MeshPhongMaterial:Phong网格材质，用于具有镜面高光的光泽表面的材质（例如涂漆木材）
    // MeshPhysicalMaterial:物理网格材质，MeshStandardMaterial的扩展，提供了更高级的基于物理的渲染属性，更逼真

    // 目标：灯光与阴影
    // 灯光阴影
    // 1、材质要满足能够对光照有反应
    // 2、设置渲染器开启阴影的计算 renderer.shadowMap.enabled = true
    // 3、设置光照投射阴影 directionLight.castShadow = true
    // 4、设置物体投射阴影 sphere.castShadow = true
    // 5、设置物体接收阴影 plane.receiveShadow = true

    // 创建球
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial(),
    );
    // 球投射阴影
    sphere.castShadow = true;
    scene.add(sphere);

    // 创建平面
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial(),
    );
    plane.position.set(0, -1, 0);
    plane.rotation.x = -Math.PI / 2;
    // 接收阴影
    plane.receiveShadow = true;
    scene.add(plane);

    // 灯光 环境光
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    // 直线光源
    const directionLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionLight.position.set(10, 10, 10);
    directionLight.castShadow = true;
    // 设置阴影贴图模糊度
    directionLight.shadow.radius = 20;
    // 设置阴影贴图的分辨率
    directionLight.shadow.mapSize.set(4096, 4096);
    scene.add(directionLight);

    renderer.shadowMap.enabled = true;
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
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 10;
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

    // 灯光
    // AmbientLight：环境光，不能用来投射阴影，因为它没有方向
    // DirectionalLight：平行光，可以投射阴影，沿特定方向发射的光，表现是光线都是平行的，常用来模拟太阳光的效果
    // PointLight: 点光源，可以投射阴影，从一个点向各个方向发射的光源，例子：模拟一个灯泡发出的光
    // SpotLight：聚光灯，可投射阴影，光线从一个点沿一个方向射出，随着光线的照射的变远，光线圆锥的尺寸也逐渐增大。例子：手电筒
    // RectAreaLight:平面光光源，不支持阴影，从一个矩形平面上均匀地发射光线，这种光源可以用来模拟像明亮的窗户或者条状灯光光源

    // 材质
    // MeshBasicMaterial:基础网格材质，该材质不受光照的影响，一个以简单着色（平面或线框）方式来绘制几何体的材质，就是设置什么颜色就是什么颜色
    // MeshStandardMaterial:标准网格材质，基于物理的标准材质（PBR），和光照息息相关，可以产生阴影，能够正确地应对所有光照场景，该材质提供了比MeshLambertMaterial或MeshPhongMaterial更精确的逼真的结果，代价是计算成本更高
    // MeshLambertMaterial:Lambert网格材质，非光泽表面的材质，没有镜面高光（用于模拟木材、石材，粗糙类的）
    // MeshPhongMaterial:Phong网格材质，用于具有镜面高光的光泽表面的材质（例如涂漆木材）
    // MeshPhysicalMaterial:物理网格材质，MeshStandardMaterial的扩展，提供了更高级的基于物理的渲染属性，更逼真

    // 目标：灯光与阴影
    // 灯光阴影
    // 1、材质要满足能够对光照有反应
    // 2、设置渲染器开启阴影的计算 renderer.shadowMap.enabled = true
    // 3、设置光照投射阴影 directionLight.castShadow = true
    // 4、设置物体投射阴影 sphere.castShadow = true
    // 5、设置物体接收阴影 plane.receiveShadow = true

    // 创建球
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshStandardMaterial(),
    );
    // 球投射阴影
    sphere.castShadow = true;
    scene.add(sphere);

    // 创建平面
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial(),
    );
    plane.position.set(0, -1, 0);
    plane.rotation.x = -Math.PI / 2;
    // 接收阴影
    plane.receiveShadow = true;
    scene.add(plane);

    // 灯光 环境光
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    // 直线光源
    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.castShadow = true;
    const smallBall = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    );
    // pointLight.position.set(2, 2, 2)
    smallBall.position.set(2, 2, 2);
    // 光照强度
    // pointLight.intensity = 2
    // 设置阴影贴图模糊度
    pointLight.shadow.radius = 20;
    // 设置阴影贴图的分辨率
    pointLight.shadow.mapSize.set(512, 512);
    // 小球添加点光源，小球是点光源的父级元素
    smallBall.add(pointLight);
    // 将发光的小球添加到场景（光源）
    scene.add(smallBall);

    renderer.shadowMap.enabled = true;

    const gui = new GUI();
    gui.add(pointLight.position, 'x').min(-5).max(5).step(0.1);
    // 光照的距离
    gui.add(pointLight, 'distance').min(0).max(10).step(0.1);
    // 设置时钟-让小球光源旋转
    const clock = new THREE.Clock();

    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      let time = clock.getElapsedTime();
      smallBall.position.x = Math.sin(time) * 3;
      smallBall.position.z = Math.cos(time) * 3;
      smallBall.position.y = 2 + Math.sin(time);
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
    const renderer = new THREE.WebGLRenderer({
      // 设置抗锯齿
      antialias: true,
    });
    // 正确的光照材质，按照物理的光照的模型来渲染
    renderer.physicallyCorrectLights = true;
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 10;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 6.渲染
    // renderer.render(scene, camera)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 2;
    camera.position.y = 1;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数

    // demo代码内容
    // 1.创建点光源组
    const pointLightGroup = new THREE.Group();
    let radius = 3; //转动半径
    let pointLightArr: any = [];
    for (let i = 0; i < 3; i++) {
      // 2.创建球体当灯泡
      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        // 发射强度:越大颜色越强烈
        emissiveIntensity: 10,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        radius * Math.cos((i * 2 * Math.PI) / 3),
        Math.cos((i * 2 * Math.PI) / 3),
        radius * Math.sin((i * 2 * Math.PI) / 3),
      );
      const pointLight = new THREE.PointLight(0xffffff, 1);
      sphere.add(pointLight);
      // 3.将球光源添加到光源组
      pointLightGroup.add(sphere);
      pointLightArr.push(sphere);
    }
    scene.add(pointLightGroup);

    // 4.使用补间函数，从0到2pi，使灯泡旋转
    let options = {
      angle: 0,
    };
    gsap.to(options, {
      angle: Math.PI * 2,
      // 周期为10s，10s转一圈
      duration: 10,
      // 一直重复
      repeat: -1,
      // 线性旋转
      ease: 'linear',
      onUpdate: () => {
        // 5.让整个光源组旋转
        pointLightGroup.rotation.y = options.angle;
        // 6.让三个球跳动起来
        pointLightArr.forEach((item, index) => {
          item.position.set(
            radius * Math.cos((index * 2 * Math.PI) / 3),
            Math.cos((index * 2 * Math.PI) / 3 + options.angle * 5),
            radius * Math.sin((index * 2 * Math.PI) / 3 + options.angle),
          );
        });
      },
    });

    // demo代码内容

    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
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
    const renderer = new THREE.WebGLRenderer({
      // 设置抗锯齿
      antialias: true,
    });
    // 正确的光照材质，按照物理的光照的模型来渲染
    renderer.physicallyCorrectLights = true;
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 20;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 6.渲染
    // renderer.render(scene, camera)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 2;
    camera.position.y = 1;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数

    // demo代码内容
    // 1.创建点光源组
    const pointLightGroup = new THREE.Group();
    let radius = 3; //转动半径
    let pointLightArr: any = [];
    for (let i = 0; i < 3; i++) {
      // 2.创建球体当灯泡
      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        // 发射强度:越大颜色越强烈
        emissiveIntensity: 10,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        radius * Math.cos((i * 2 * Math.PI) / 3),
        Math.cos((i * 2 * Math.PI) / 3),
        radius * Math.sin((i * 2 * Math.PI) / 3),
      );
      const pointLight = new THREE.PointLight(0xffffff, 1);
      sphere.add(pointLight);
      // 3.将球光源添加到光源组
      pointLightGroup.add(sphere);
      pointLightArr.push(sphere);
    }
    scene.add(pointLightGroup);

    // 4.使用补间函数，从0到2pi，使灯泡旋转
    let options = {
      angle: 0,
    };
    gsap.to(options, {
      angle: Math.PI * 2,
      // 周期为10s，10s转一圈
      duration: 10,
      // 一直重复
      repeat: -1,
      // 线性旋转
      ease: 'linear',
      onUpdate: () => {
        // 5.让整个光源组旋转
        pointLightGroup.rotation.y = options.angle;
        // 6.让三个球跳动起来
        pointLightArr.forEach((item, index) => {
          item.position.set(
            radius * Math.cos((index * 2 * Math.PI) / 3),
            Math.cos((index * 2 * Math.PI) / 3 + options.angle * 5),
            radius * Math.sin((index * 2 * Math.PI) / 3 + options.angle),
          );
        });
      },
    });

    // demo代码内容

    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    //demo4代码内容
    // 使用补间动画移动相机
    let timeLine1 = gsap.timeline();
    let timeLine2 = gsap.timeline();

    // 定义相机移动函数
    function tranlateCamera(position, target) {
      timeLine1.to(camera.position, {
        x: position.x,
        y: position.y,
        z: position.z,
        duration: 1,
        ease: 'power2.inOut',
      });

      timeLine2.to(controls.target, {
        x: target.x,
        y: target.y,
        z: target.z,
        duration: 1,
        ease: 'power2.inOut',
      });
    }

    const scenes = [
      {
        text: '圣诞快乐1',
        callback: () => {
          // 执行函数切换位置
          tranlateCamera(
            new THREE.Vector3(1, 1, 20),
            new THREE.Vector3(1, 3, 20),
          );
          console.log(1);
        },
      },
      {
        text: '圣诞快乐2',
        callback: () => {
          // 执行函数切换位置
          tranlateCamera(
            new THREE.Vector3(2, 2, 20),
            new THREE.Vector3(2, 4, 20),
          );
          console.log(2);
        },
      },
      {
        text: '圣诞快乐3',
        callback: () => {
          // 执行函数切换位置
          tranlateCamera(
            new THREE.Vector3(3, 3, 20),
            new THREE.Vector3(2, 5, 20),
          );
          console.log(3);
        },
      },
    ];
    // 防抖 滑轮滑动太快
    let isAnimate = false;

    // 监听鼠标滚轮事件
    domElem.addEventListener(
      'wheel',
      (e) => {
        if (isAnimate) return;
        isAnimate = true;
        if (e.deltaY > 0) {
          indexRef.current++;
          if (indexRef.current > scenes.length - 1) {
            indexRef.current = 0;
          }
          scenes[indexRef.current].callback();

          setTimeout(() => {
            isAnimate = false;
          }, 1000);
        }
      },
      false,
    );
    //demo4代码内容
  };

  const renderDemo5 = () => {
    const domElem = demoRef5.current;
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
    const renderer = new THREE.WebGLRenderer({
      // 设置抗锯齿
      antialias: true,
    });
    // 正确的光照材质，按照物理的光照的模型来渲染
    renderer.physicallyCorrectLights = true;
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 20;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 6.渲染
    // renderer.render(scene, camera)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 2;
    camera.position.y = 1;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数

    // demo5代码内容
    // 1.实例化创建漫天星星-创建100个
    let starsInstance = new THREE.InstancedMesh(
      new THREE.SphereGeometry(0.1, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 10,
      }),
      100,
    );
    // 2.星星随机到天上
    let starsArr = [];
    let endArr = [];
    for (let i = 0; i < 100; i++) {
      let x = Math.random() * 100 - 50;
      let y = Math.random() * 100 - 50;
      let z = Math.random() * 100 - 50;
      starsArr.push(new THREE.Vector3(x, y, z)); //xyz范围在[-50,50]

      // 3.矩阵：位移、缩放、旋转都可以用一个矩阵解决
      let matrix = new THREE.Matrix4();
      matrix.setPosition(x, y, z);
      starsInstance.setMatrixAt(i, matrix);
    }
    scene.add(starsInstance);

    // 4.创建爱心路径-贝塞尔曲线
    let heartShape = new THREE.Shape();
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

    let center = new THREE.Vector3(0, 0, 0);
    //5.根据爱心路径获取点
    for (let i = 0; i < 100; i++) {
      // 获取一个点
      let point = heartShape.getPoint(i / 100);
      // 爱心太大
      // endArr.push(new THREE.Vector3(point.x, point.y, point.z))
      // 缩小爱心
      endArr.push(
        new THREE.Vector3(
          0.1 * point.x + center.x,
          0.1 * point.y + center.y,
          center.z,
        ),
      );
    }

    // 6.创建爱心动画
    function makeHeart() {
      let params = {
        time: 0,
      };
      gsap.to(params, {
        time: 1,
        duration: 1,
        onUpdate: () => {
          for (let i = 0; i < 100; i++) {
            let x = starsArr[i].x + (endArr[i].x - starsArr[i].x) * params.time;
            let y = starsArr[i].y + (endArr[i].y - starsArr[i].y) * params.time;
            let z = starsArr[i].z + (endArr[i].z - starsArr[i].z) * params.time;
            let matrix = new THREE.Matrix4();
            matrix.setPosition(x, y, z);
            starsInstance.setMatrixAt(i, matrix);
          }
          starsInstance.instanceMatrix.needsUpdate = true;
        },
      });
    }
    setTimeout(() => {
      makeHeart();
    }, 2000);
    // demo5代码内容

    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  };

  const renderDemo6 = () => {
    const domElem = demoRef6.current;
    // 1.创建场景
    const scene = new THREE.Scene();
    // 2.创建相机
    const camera = new THREE.PerspectiveCamera(
      45,
      domElem.clientWidth / domElem.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(1, 8, 10);
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 3.创建渲染器
    const renderder = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderder.setSize(domElem.offsetWidth, domElem.offsetHeight);

    // 4.将渲染结果添加到dom上
    domElem.appendChild(renderder.domElement);

    // 初始化渲染器，渲染背景
    renderder.setClearColor('#ccc');
    scene.background = new THREE.Color('#ccc');
    scene.environment = new THREE.Color('#ccc');

    const controls = new OrbitControls(camera, renderder.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 5.添加网格地面
    const gridHelper = new THREE.GridHelper(10, 10);
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // const wheels = []
    // let carBody
    // // 创建材质
    // const bodyMaterial = new THREE.MeshPhysicalMaterial({
    //   color: 0xff0000,
    //   // 设置金属度
    //   metalness: 1,
    //   // 粗糙度
    //   roughness: 0.5,
    //   // 清晰
    //   clearcoat: 1,
    //   // 设置清晰光滑比较透亮，设置粗糙为0
    //   clearcoatRoughness: 0
    // })

    // // 6.加载宝马模型,因为是物理材质黑色的需要添加灯光
    // Loader.load('./model/bmw.glb', (gltf) => {
    //   const bmw = gltf.scene;
    //   // 遍历模型子元素
    //   bmw.traverse((child) => {
    //     if (child.isMesh) {
    //       // 如果是物体输入名称
    //       console.log(child.name)
    //     }
    //     if (child.isMesh && child.name.includes('轮毂')) {
    //       wheels.push(child)
    //     }
    //     // 判断是否是车身
    //     if (child.isMesh && child.name.includes('Mesh002')) {
    //       carBody = child
    //       // 给车身
    //       carBody.material = bodyMaterial
    //     }
    //     // .....
    //     scene.add(bmw)
    //   })
    // })

    // // 7.加载多个方向的灯光DirectionalLight或环境光或hdr

    // // 8.调用切换
    // const selectColor = (color)=>{
    //   bodyMaterial.color.set(color)
    //   wheelsMaterial.color.set(color)
    //   //...
    // }

    const render = () => {
      controls.update();
      renderder.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();
  };

  const renderDemo7 = () => {
    const domElem = demoRef7.current;
    // 1.创建场景
    const scene = new THREE.Scene();
    // 2.创建相机
    const camera = new THREE.PerspectiveCamera(
      45,
      domElem.clientWidth / domElem.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(1, 8, 10);
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)
    // 3.创建渲染器
    const renderder = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderder.setSize(domElem.offsetWidth, domElem.offsetHeight);

    // 4.将渲染结果添加到dom上
    domElem.appendChild(renderder.domElement);

    // 初始化渲染器，渲染背景
    // renderder.setClearColor('#ccc');
    // scene.background = new THREE.Color('#ccc')
    // scene.environment = new THREE.Color('#ccc')

    const controls = new OrbitControls(camera, renderder.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    //demo15内容
    //1.视频纹理
    let video = document.createElement('video');
    video.src = './assets/imgs/movie.mp4';
    video.loop = true;
    // 只有静音了才能自动播放
    video.muted = true;
    video.play();
    const videoTexture = new THREE.VideoTexture(video);

    // 2.创建平面拥有视频纹理
    const videoPlane = new THREE.PlaneGeometry(16, 9); //比例根据视频比例来
    const videoMaterial = new THREE.MeshBasicMaterial({
      map: videoTexture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const videoMesh = new THREE.Mesh(videoPlane, videoMaterial);
    // 设置视频面的位置
    videoMesh.position.set(0, 0.2, 0);
    // 设置视频面的旋转角度
    videoMesh.rotation.set(-Math.PI / 2, 0, 0);
    // 将视频面添加到场景中
    scene.add(videoMesh);

    //3. 添加光阵
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    scene.add(light1);
    //demo15内容

    const render = () => {
      controls.update();
      renderder.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();
  };

  useEffect(() => {
    renderDemo1();
    renderDemo2();
    renderDemo3();
    renderDemo4();
    renderDemo5();
    renderDemo6();
    renderDemo7();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Threejs</h1>
      <h3>简介：Threejs简介</h3>
      <div className={styles.list}>
        <div className={styles.module}>
          <h4>demo9：灯光与阴影</h4>
          <div className={styles.demo} ref={demoRef}></div>
        </div>

        <div className={styles.module}>
          <h4>demo10：点光源</h4>
          <div className={styles.demo} ref={demoRef2}></div>
        </div>

        <div className={styles.module}>
          <h4>demo11：水平三个方向萤火虫运动效果</h4>
          <div className={styles.demo} ref={demoRef3}></div>
        </div>

        <div className={styles.module}>
          <h4>demo12：切换位置和场景</h4>
          <div className={styles.demo} ref={demoRef4}></div>
        </div>

        <div className={styles.module}>
          <h4>demo13：漫天星星生成爱心</h4>
          <div className={styles.demo} ref={demoRef5}></div>
        </div>

        <div className={styles.module}>
          <h4>demo14：宝马汽车展示</h4>
          <div className={styles.demo} ref={demoRef6}></div>
        </div>

        <div className={styles.module}>
          <h4>demo15：酷炫形球形机器人</h4>
          <div className={styles.demo} ref={demoRef7}></div>
        </div>
      </div>
    </div>
  );
}
