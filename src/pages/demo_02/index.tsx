import React, { useEffect, useRef } from 'react';
// 导入控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 导入GUI调试器
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
// hdr加载器
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
// 导入gltf加载器  建模软件建好模型，将模型导入到场景里来(.gltf json格式)(.gtb 二进制) 可存放场景、网格、相机、纹理、材质、贴图、骨架、灯光、各种动画
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// 导入tween
import * as TWEEN from 'three/examples/jsm/libs/tween.module.js';

import * as THREE from 'three';
import styles from './index.less';

export default function IndexPage() {
  const demoRef = useRef<any>();
  const demoRef2 = useRef<any>();
  const demoRef3 = useRef<any>();
  const demoRef4 = useRef<any>();
  const demoRef5 = useRef<any>();
  const demoRef6 = useRef<any>();
  const demoRef7 = useRef<any>();
  const demoRef8 = useRef<any>();

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
    });
    const material2 = new THREE.MeshBasicMaterial({
      color: 0x0000ff, //创建材质
    });
    // 设置2个顶点组，形成2个材质
    geometry.addGroup(0, 3, 0); //表示：以索引编号为索引，从0开始取3个，以第一个材质来画三角面
    geometry.addGroup(3, 3, 1);
    const cube = new THREE.Mesh(geometry, [material, material2]); //创建网格
    scene.add(cube); // 将网格添加到场景中

    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 5;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)

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

    // 每个面设置材质
    const geometryBox = new THREE.BoxGeometry(1, 1, 1);
    const material_0 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material_1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const material_2 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const material_3 = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const material_4 = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const material_5 = new THREE.MeshBasicMaterial({ color: 0xffff33 });
    const cubeBox = new THREE.Mesh(geometryBox, [
      material_0,
      material_1,
      material_2,
      material_3,
      material_4,
      material_5,
    ]);
    scene.add(cubeBox);
    cubeBox.position.set(1, 1, 1);
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
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(domElem.clientWidth, domElem.clientHeight); //渲染的屏幕大小
    domElem.appendChild(renderer.domElement); //将生成的画布(cavas)添加到元素上

    // 4.创建几何体
    // 创建纹理加载器
    const textureLoader = new THREE.TextureLoader();
    // 加载纹理图
    const texture = textureLoader.load(
      'https://img2.baidu.com/it/u=69792244,3201192185&fm=253&fmt=auto&app=138&f=JPEG?w=513&h=500',
    );
    const planeGeometry = new THREE.PlaneGeometry(1, 1);
    //创建材质
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: texture, //使用图片作为纹理
      transparent: true, //允许透明
      side: THREE.DoubleSide,
    });
    const cube = new THREE.Mesh(planeGeometry, planeMaterial); //创建网格
    scene.add(cube); // 将网格添加到场景中

    //rgbeLoader 加载hdr贴图
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./assets/imgs/house_bg.hdr', (envMap) => {
      //设置球形贴图
      envMap.mapping = THREE.EquirectangularReflectionMapping; //球面全景映射
      // 设置环境贴图
      scene.background = envMap;
      scene.environment = envMap;
      // 设置plane的环境贴图
      planeMaterial.envMap = envMap;
    });

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
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  };

  const renderDemo6 = () => {
    const domElem = demoRef6.current;
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
    const geometry = new THREE.BoxGeometry(1, 1, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //创建材质
    const cube = new THREE.Mesh(geometry, material); //创建网格
    // scene.add(cube); // 将网格添加到场景中
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 5;
    camera.lookAt(0, 0, 0); //相机看向哪里，默认是圆点(0,0,0)

    // 7.添加世界坐标辅助器
    const axesHelper = new THREE.AxesHelper(5);
    camera.position.x = 0.2;
    camera.position.y = 0.2;
    scene.add(axesHelper);

    // 8.添加控制器轨道
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; //设置带阻尼的惯性
    controls.dampingFactor = 0.01; //设置阻尼系数

    // cube.rotation.x += 1;
    // cube.rotation.y += 1;

    // 创建场景fog
    // scene.fog = new THREE.Fog(0x999999, 0.1, 50);//线性雾，表示距离相机0.1米开始过渡到50米线性展示雾颜色，50米开外完全雾覆盖
    // // 创建场景指数fog
    // scene.fog = new THREE.FogExp2(0x999999, 0.5); //表示雾的密度，值越大雾越强

    // 动画渲染
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // 实例化加载器gltf
    const gltfLoader = new GLTFLoader();
    // 加载模型  如果glb模型被压缩过  用DRACOLoader加载器
    gltfLoader.load('./assets/model/Duck.glb', (gltf) => {
      // 模型里的相机一般不显示
      // 模型加载如果是黑的（标准物理材质），需要加环境贴图（需要灯光材质）
      scene.add(gltf.scene);
    });

    //rgbeLoader 加载hdr贴图
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('./assets/imgs/house_bg.hdr', (envMap) => {
      //设置球形贴图
      envMap.mapping = THREE.EquirectangularReflectionMapping; //球面全景映射
      // 设置环境贴图
      scene.background = envMap;
      scene.environment = envMap;
    });
  };

  const renderDemo7 = () => {
    const domElem = demoRef7.current;
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
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
      }),
    );
    sphere1.position.x = -4;
    scene.add(sphere1);

    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xff00ff,
      }),
    );
    sphere2.position.x = 4;
    scene.add(sphere2);

    // 创建射线
    const raycaster = new THREE.Raycaster();
    // 创建鼠标二维向量：保存鼠标点击到画布什么位置上 存储范围x轴[-1,1] y轴[-1,1]
    const mouse = new THREE.Vector2();
    // 监听窗口点击事件
    domElem.addEventListener('click', (event) => {
      mouse.x = (event.offsetX / domElem.offsetWidth) * 2 - 1;
      mouse.y = -(event.offsetY / domElem.offsetHeight) * 2 + 1;

      console.log(scene.children, 'scene.children');
      // 通过摄像机和鼠标位置更新射线：设置从相机发出根据坐标mouse
      raycaster.setFromCamera(mouse, camera);
      // 计算物体和射线的焦点 是否碰到物体
      // const intersects = raycaster.intersectObjects(scene.children)  // 表示场景里的所有物体
      const intersects = raycaster.intersectObjects([sphere1, sphere2]); // 表示只会在指定的物体中选择，返回的distance是相机碰到物体的距离，如果重合则由近及远
      if (intersects.length > 0) {
        if (intersects[0].object._isSelect) {
          intersects[0].object.material.color.set(
            intersects[0].object._originColor,
          );
          intersects[0].object._isSelect = false;
        } else {
          intersects[0].object._isSelect = true; //添加自定义属性（临时存的数据）
          intersects[0].object._originColor =
            intersects[0].object.material.color.getHex(); //添加自定义属性（临时存的数据） getHex:返回颜色的十六进制值
          intersects[0].object.material.color.set(0xff0000);
        }
      }
      console.log(intersects, 'intersects');
    });
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 25;
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

  const renderDemo8 = () => {
    const domElem = demoRef8.current;
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
    // 4.创建几何体,补间动画 让物体移动动画起来
    const cube = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
      }),
    );
    cube.position.x = -4;
    const tween = new TWEEN.Tween(cube.position); //将物体的位置传递进来
    // 告诉物体要动画到的地方,需要的时间
    tween.to({ x: 4 }, 2000).onUpdate(() => {
      // console.log(cube.position.x)  //每次更新的回调
    });
    // 设置循环往复动画
    // tween.yoyo(true);
    // 设置延迟多久执行1次动画
    // tween.delay(3000)
    // 表示可以更新无数次，默认1次
    tween.repeat(Infinity);
    // 设置缓动函数(有几十种)
    tween.easing(TWEEN.Easing.Quadratic.InOut);
    //启动补间动画
    // tween.start()

    // 创建第二个补间动画，串联起来
    const tween2 = new TWEEN.Tween(cube.position);
    tween2.to({ y: -4 }, 3000);
    tween.chain(tween2);
    //启动补间动画
    tween.start();

    setTimeout(() => {
      tween.stop();
    }, 10000);

    scene.add(cube); // 将网格添加到场景中
    // 5.设置相机位置 (x:水平方向，y：垂直方向，z：正对着我们)
    camera.position.z = 25;
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

      // 更新tween  需要一帧一帧的更新
      TWEEN.update();
    }
    animate();
  };

  useEffect(() => {
    renderDemo1();
    renderDemo2();
    renderDemo3();
    renderDemo4();
    renderDemo5();
    renderDemo6();
    renderDemo7();
    renderDemo8();
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
          <h4>demo4：创建几何体和索引点和材质</h4>
          <div className={styles.demo} ref={demoRef4}></div>
        </div>

        <div className={styles.module}>
          <h4>demo5：纹理和贴图hdr等</h4>
          <div className={styles.demo} ref={demoRef5}></div>
        </div>

        <div className={styles.module}>
          <h4>demo6：雾和gltf模型</h4>
          <div className={styles.demo} ref={demoRef6}></div>
        </div>

        <div className={styles.module}>
          <h4>demo7：光线投射：可以选中物体</h4>
          <div className={styles.demo} ref={demoRef7}></div>
        </div>

        <div className={styles.module}>
          <h4>demo8：补间动画tween</h4>
          <div className={styles.demo} ref={demoRef8}></div>
        </div>
      </div>
    </div>
  );
}
