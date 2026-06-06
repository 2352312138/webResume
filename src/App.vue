<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

import atomicService from "./assets/awards/atomic-service.png";
import hddShare from "./assets/awards/hdd-share.png";
import hdcStage from "./assets/awards/hdc-stage.png";
import ecoPartner from "./assets/awards/ecological-innovation.png";
import harmonyInnovation2025 from "./assets/awards/harmonyos-innovation-2025.jpg";

gsap.registerPlugin(ScrollTrigger);

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function lockIntroScroll() {
  document.documentElement.classList.add("intro-scroll-lock");
}

function unlockIntroScroll() {
  document.documentElement.classList.remove("intro-scroll-lock");
}

const stats = [
  ["7年", "鸿蒙/Android开发经验"],
  ["7款+", "鸿蒙/Android原生应用落地"],
  ["双端", "手机 / 手表双平台开发"],
  ["HDC", "主题演讲案例露出"],
];

const skills = [
  "HarmonyOS",
  "ArkTS",
  "Stage模型",
  "Android",
  "Java",
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "BLE蓝牙",
  "NFC",
  "OCR",
  "ASR",
  "AI智能化",
  "物理引擎",
  "多端自适应",
  "性能优化",
];

const highlights = [
  {
    title: "跨端客户端主程经验",
    text: "完整经历鸿蒙从早期适配到原生爆发的全周期，主导药管家、朋克养生等多款 HarmonyOS / Android 应用从 0 到 1 落地。",
  },
  {
    title: "华为生态官方认可",
    text: "药管家元服务上榜华为应用市场年度原子化服务，连续参与 HDD 分享，并入选 2025 HDC 鸿蒙合伙人梦想街区展出。",
  },
  {
    title: "硬件与 AI 结合能力",
    text: "具备无人机工程师背景，熟悉 BLE、传感器与硬件调试，并能将 ASR、AI 智能化、物理引擎等能力落到具体业务场景。",
  },
  {
    title: "稳定交付与效率工具化",
    text: "曾连续获得优秀绩效、甲方表扬信及优秀员工表彰，日常深度使用 AI 辅助拆解需求、Review 代码和定位复杂问题。",
  },
];

const projects = [
  {
    name: "药管家",
    tag: "多端吃药提醒健康助手",
    desc: "覆盖 Android 手机/手表、HarmonyOS 手机/手表的健康提醒产品，包含提醒、服务卡片、NFC、支付、PUSH、OCR 等完整能力。",
    stack: ["ArkTS", "Java", "Kotlin", "Compose", "NFC", "OCR", "PUSH"],
    impact: "华为年度原子化服务 / HDC 主题演讲案例 / 2025 梦想街区展出",
    markets: [
      { label: "鸿蒙", type: "harmony", id: "C5765880207854663789" },
      { label: "安卓", type: "android", id: "com.yxl.medicinemanager" },
      { label: "iOS", type: "ios", id: "6451383362" },
    ],
  },
  {
    name: "朋克养生",
    tag: "游戏化健康管理工具",
    desc: "结合物理引擎、多端自适应、ASR 与 AI 智能化能力，构建更具互动感的健康管理体验。",
    stack: ["ArkTS", "物理引擎", "ASR", "AI", "多端自适应"],
    impact: "2025 华为鸿蒙创新赛三等奖",
    markets: [
      { label: "鸿蒙", type: "harmony", id: "C6917577606806054483" },
    ],
  },
  {
    name: "小象 upup",
    tag: "多端 CRM 工具",
    desc: "面向人际关系管理场景，支持 Android / HarmonyOS 多端，涉及名片识别、地图、服务卡片和日历等业务模块。",
    stack: ["ArkTS", "Java", "支付", "地图", "名片识别"],
    impact: "多端业务闭环与移动生产力场景落地",
    markets: [
      { label: "鸿蒙", type: "harmony", id: "C5765880207854661793" },
      { label: "安卓", type: "android", id: "com.yxl.topsales" },
      { label: "iOS", type: "ios", id: "6446807219" },
    ],
  },
  {
    name: "食参谋",
    tag: "AI 饮食决策系统",
    desc: "围绕饮食决策进行 AI 场景化探索，结合元素转场和多端自适应能力提升交互连续性。",
    stack: ["ArkTS", "AI智能化", "元素转场", "自适应"],
    impact: "AI 辅助决策产品实践",
  },
  {
    name: "饭饭魔法",
    tag: "儿童吃饭辅助应用",
    desc: "针对儿童吃饭难场景设计的辅助应用，通过语音播报、音频反馈和 AI 智能化能力增强吃饭过程的引导与互动。",
    stack: ["Java", "TTS", "Audio", "AI智能化", "元素转场"],
    impact: "儿童饮食行为辅助场景落地",
    markets: [
      { label: "安卓", type: "android", id: "com.gflow.foodmagic" },
    ],
  },
  {
    name: "选择易",
    tag: "转盘与易经决策工具",
    desc: "结合转盘交互、音频反馈和 AI 智能化能力，构建轻量决策工具，并通过元素转场提升选择过程的仪式感和反馈感。",
    stack: ["ArkTS", "Audio", "AI智能化", "元素转场"],
    impact: "趣味决策与传统文化场景产品实践",
    markets: [
      { label: "鸿蒙", type: "harmony", id: "C5765880207855935661" },
    ],
  },
  {
    name: "墨晗AI笔记",
    tag: "AI 笔记与分析洞察",
    desc: "面向笔记整理、内容分析和洞察提炼的 AI 工具，使用 Flutter 实现跨端体验，并结合 AI 智能化能力提升信息处理效率。",
    stack: ["Flutter", "AI智能化"],
    impact: "AI 内容分析与效率工具实践",
  },
  {
    name: "系统图库 / 深圳卫健委 / 搜电充电宝",
    tag: "企业级鸿蒙项目",
    desc: "参与图库页面架构与功能实现、政务健康导航、充电宝服务卡片、H5-APP 通信、坐标转换与导航拉起等项目。",
    stack: ["HarmonyOS", "BLE", "服务卡片", "地图", "架构设计"],
    impact: "中软国际期间获得优秀绩效和客户认可",
  },
  {
    name: "神速农业 APP",
    tag: "无人机业务移动端",
    desc: "从无人机工程师转向 Android 开发，负责交互、保险业务购买、后端数据同步、应用维护与性能优化。",
    stack: ["Android", "Java", "硬件调试", "数据同步"],
    impact: "硬件交付经验与应用开发能力融合",
  },
];

const awards = [
  {
    image: harmonyInnovation2025,
    title: "2025 HarmonyOS创新赛三等奖",
    text: "在2025华为鸿蒙创新赛近万支参赛队伍中，从众多头部大厂应用中突围获三等奖。",
  },
   {
    image: hdcStage,
    title: "HDC 大会主题演讲案例",
    text: "药管家作为大会演讲案例，华为常务董事余承东介绍了药管家",
  },
  {
    image: atomicService,
    title: "2022华为应用市场年度应用榜",
    text: "药管家因其实用功能，深受用户喜爱，上榜华为应用市场2022“年度原子化服务”",
  },
  {
    image: hddShare,
    title: "华为开发者日 HDD 现场分享",
    text: "受邀在 HDD 活动中分享健康卡片和药管家商业闭环实践。",
  },
 
  {
    image: ecoPartner,
    title: "鸿蒙生态创新合作伙伴",
    text: "药管家与酷狗音乐、支付宝等应用同屏展示，获得生态创新合作伙伴奖项。",
  },
];

const sceneHost = ref(null);
const awardsSceneHost = ref(null);
const introActive = ref(true);
const showWechatToast = ref(false);
const clickParticles = ref([]);
const heroCardPressed = ref(false);
const heroCardStyle = ref({
  "--hero-rotate-x": "0deg",
  "--hero-rotate-y": "0deg",
  "--hero-shine-x": "78%",
  "--hero-shine-y": "18%",
  "--hero-press": "0",
  "--hero-lift": "0px",
});
const wechatId = "wry2352312138";

const timeline = [
  {
    period: "2022.12 - 至今",
    company: "元向量智能科技有限公司",
    role: "客户端开发工程师",
    text: "主导多款 HarmonyOS / Android 产品从 0 到 1，实现药管家、朋克养生、小象 upup、食参谋等项目落地。",
  },
  {
    period: "2020.11 - 2022.12",
    company: "深圳中软国际科技服务有限公司",
    role: "鸿蒙开发工程师",
    text: "参与深圳卫健委、搜电充电宝、天安云谷寻车导航、YOUNG 音乐、系统图库等鸿蒙项目开发与技术支持。",
  },
  {
    period: "2019.1 - 2020.11",
    company: "无人机行业经历",
    role: "无人机工程师 / Android 转型",
    text: "负责无人机组装、硬件调试、测试流程和 APP 功能开发，逐步转向 Android 客户端开发。",
  },
];

let ctx;
let mm;
let sceneApi;
let awardsSceneApi;
let wechatTimer;
let clickParticleId = 0;

async function copyWechatAndOpenApp() {
  window.clearTimeout(wechatTimer);

  try {
    await navigator.clipboard.writeText(wechatId);
  } catch {
    const field = document.createElement("textarea");
    field.value = wechatId;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-1000px";
    document.body.appendChild(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  }

  showWechatToast.value = true;
  wechatTimer = window.setTimeout(() => {
    showWechatToast.value = false;
    window.location.href = "weixin://";
  }, 1200);
}

function getMarketUrl(app) {
  const targets = {
    harmony: `store://appgallery.huawei.com/app/detail?id=${app.id}`,
    android: `market://details?id=${app.id}`,
    ios: `itms-apps://itunes.apple.com/app/id${app.id}`,
  };

  return targets[app.type];
}

function resolveProjectMarket(project) {
  const markets = project.markets ?? [];
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 0;
  const isIos =
    /iPad|iPhone|iPod/i.test(ua) ||
    (platform === "MacIntel" && maxTouchPoints > 1);
  const isHuaweiOrHarmony = /HarmonyOS|OpenHarmony|ArkWeb|Huawei|HUAWEI|HONOR/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (!markets.length) return undefined;
  if (isIos) return markets.find((app) => app.type === "ios") ?? markets[0];
  if (isHuaweiOrHarmony) return markets.find((app) => app.type === "harmony") ?? markets.find((app) => app.type === "android") ?? markets[0];
  if (isAndroid) return markets.find((app) => app.type === "android") ?? markets.find((app) => app.type === "harmony") ?? markets[0];
  return markets[0];
}

function openProjectMarket(project) {
  const app = resolveProjectMarket(project);
  const url = app ? getMarketUrl(app) : undefined;

  if (!url) return;
  window.location.href = url;
}

function spawnClickParticles(event) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || event.target?.closest?.(".awards-webgl-stage")) return;

  const colors = ["#48d8ff", "#8e5cff", "#66ffd7", "#ff5c93", "#ffb84d"];
  const nextParticles = Array.from({ length: 8 }, (_, index) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 74 + Math.random() * 86;

    return {
      id: clickParticleId++,
      x: event.clientX,
      y: event.clientY,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      size: 5 + Math.random() * 7,
      color: colors[(index + Math.floor(Math.random() * colors.length)) % colors.length],
    };
  });

  clickParticles.value = [...clickParticles.value.slice(-24), ...nextParticles];
  window.setTimeout(() => {
    const ids = new Set(nextParticles.map((particle) => particle.id));
    clickParticles.value = clickParticles.value.filter((particle) => !ids.has(particle.id));
  }, 1400);
}

function resetHeroCardTilt() {
  heroCardPressed.value = false;
  document.documentElement.classList.remove("hero-card-lock");
  heroCardStyle.value = {
    "--hero-rotate-x": "0deg",
    "--hero-rotate-y": "0deg",
    "--hero-shine-x": "78%",
    "--hero-shine-y": "18%",
    "--hero-press": "0",
    "--hero-lift": "0px",
  };
}

function updateHeroCardTilt(event, pressed = true) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / Math.max(bounds.width, 1);
  const y = (event.clientY - bounds.top) / Math.max(bounds.height, 1);
  const offsetX = THREE.MathUtils.clamp(x - 0.5, -0.5, 0.5);
  const offsetY = THREE.MathUtils.clamp(y - 0.5, -0.5, 0.5);

  heroCardPressed.value = pressed;
  heroCardStyle.value = {
    "--hero-rotate-x": `${(-offsetY * 16).toFixed(2)}deg`,
    "--hero-rotate-y": `${(offsetX * 19).toFixed(2)}deg`,
    "--hero-shine-x": `${(x * 100).toFixed(1)}%`,
    "--hero-shine-y": `${(y * 100).toFixed(1)}%`,
    "--hero-press": pressed ? "1" : "0",
    "--hero-lift": pressed ? "18px" : "0px",
  };
}

function pressHeroCard(event) {
  if (event.cancelable) event.preventDefault();
  document.documentElement.classList.add("hero-card-lock");
  event.currentTarget.setPointerCapture?.(event.pointerId);
  updateHeroCardTilt(event, true);
}

function moveHeroCard(event) {
  if (!heroCardPressed.value) return;
  if (event.cancelable) event.preventDefault();
  updateHeroCardTilt(event, true);
}

function releaseHeroCard(event) {
  event.currentTarget.releasePointerCapture?.(event.pointerId);
  resetHeroCardTilt();
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = [...text];
  let line = "";
  let lineCount = 0;

  for (const word of words) {
    const testLine = `${line}${word}`;

    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, y);
      line = word;
      y += lineHeight;
      lineCount += 1;

      if (lineCount >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }

  if (line && lineCount < maxLines) {
    context.fillText(line, x, y);
  }
}

function traceCanvasRoundRect(context, x, y, width, height, radius) {
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
}

function createRoundedCardShape(width, height, radius) {
  const shape = new THREE.Shape();
  const left = -width / 2;
  const right = width / 2;
  const top = height / 2;
  const bottom = -height / 2;

  shape.moveTo(left + radius, bottom);
  shape.lineTo(right - radius, bottom);
  shape.quadraticCurveTo(right, bottom, right, bottom + radius);
  shape.lineTo(right, top - radius);
  shape.quadraticCurveTo(right, top, right - radius, top);
  shape.lineTo(left + radius, top);
  shape.quadraticCurveTo(left, top, left, top - radius);
  shape.lineTo(left, bottom + radius);
  shape.quadraticCurveTo(left, bottom, left + radius, bottom);

  return shape;
}

function mapCardUvs(geometry, width, height) {
  const position = geometry.attributes.position;
  const uvs = [];

  for (let index = 0; index < position.count; index += 1) {
    uvs.push(position.getX(index) / width + 0.5, position.getY(index) / height + 0.5);
  }

  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
}

function createAwardTexture(award) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1180;
  const context = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);

  function paint(image) {
    context.clearRect(0, 0, 1024, 1180);
    context.save();
    context.beginPath();
    traceCanvasRoundRect(context, 0, 0, 1024, 1180, 92);
    context.clip();

    const gradient = context.createLinearGradient(0, 0, 1024, 1180);
    gradient.addColorStop(0, "#111827");
    gradient.addColorStop(0.46, "#05070d");
    gradient.addColorStop(1, "#10151f");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1024, 1180);

    if (image) {
      context.globalAlpha = 0.9;
      context.drawImage(image, 0, 0, 1024, 760);
      context.globalAlpha = 1;
    }

    context.fillStyle = "rgba(0, 0, 0, 0.76)";
    context.fillRect(0, 740, 1024, 440);
    context.fillStyle = "rgba(72, 216, 255, 0.22)";
    context.fillRect(0, 740, 1024, 2);

    context.fillStyle = "#ffffff";
    context.font = "700 52px Microsoft YaHei, PingFang SC, sans-serif";
    wrapCanvasText(context, award.title, 56, 838, 900, 62, 2);

    context.fillStyle = "rgba(225, 235, 255, 0.86)";
    context.font = "400 38px Microsoft YaHei, PingFang SC, sans-serif";
    wrapCanvasText(context, award.text, 56, 930, 900, 52, 4);
    context.restore();
    texture.needsUpdate = true;
  }

  paint();

  const image = new Image();
  image.onload = () => paint(image);
  image.src = award.image;

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 2;
  return texture;
}

function initAwardsScene() {
  const host = awardsSceneHost.value;

  if (!host) return undefined;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  const group = new THREE.Group();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const state = {
    rotationX: -0.08,
    rotationY: 0.28,
    dragging: false,
    pausedUntil: 0,
  };
  const drag = {
    active: false,
    mode: "pending",
    startX: 0,
    startY: 0,
    startRotationX: 0,
    startRotationY: 0,
    moved: false,
  };
  const panels = [];
  const disposables = [];

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.appendChild(renderer.domElement);
  scene.add(group);
  scene.add(new THREE.AmbientLight(0xb7d6ff, 0.68));

  const rimLight = new THREE.DirectionalLight(0x6de7ff, 1.15);
  rimLight.position.set(-3.5, 3.2, 5.5);
  scene.add(rimLight);

  const warmLight = new THREE.DirectionalLight(0xff8cc6, 0.42);
  warmLight.position.set(4, -2, 3);
  scene.add(warmLight);

  camera.position.set(0, 0.12, 6.8);

  const count = awards.length;
  const radius = 2.2;
  const panelWidth = 2.46;
  const panelHeight = 2.8;
  const panelDepth = 0.075;
  const panelRadius = 0.22;

  awards.forEach((award, index) => {
    const angle = (index / count) * Math.PI * 2;
    const shape = createRoundedCardShape(panelWidth, panelHeight, panelRadius);
    const bodyGeometry = new THREE.ExtrudeGeometry(shape, {
      depth: panelDepth,
      bevelEnabled: false,
      curveSegments: 18,
    });
    bodyGeometry.translate(0, 0, -panelDepth / 2);
    const frontGeometry = new THREE.ShapeGeometry(shape, 18);
    const backGeometry = new THREE.ShapeGeometry(shape, 18);
    mapCardUvs(frontGeometry, panelWidth, panelHeight);
    const texture = createAwardTexture(award);
    const frontMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.92,
    });
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x101826,
      emissive: 0x07131b,
      emissiveIntensity: 0.34,
      metalness: 0.42,
      roughness: 0.38,
      transparent: true,
      opacity: 0.82,
    });
    const backMaterial = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      emissive: 0x14091d,
      emissiveIntensity: 0.22,
      metalness: 0.22,
      roughness: 0.62,
      transparent: true,
      opacity: 0.76,
    });
    const panel = new THREE.Group();
    const body = new THREE.Mesh(bodyGeometry, sideMaterial);
    const front = new THREE.Mesh(frontGeometry, frontMaterial);
    const back = new THREE.Mesh(backGeometry, backMaterial);
    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(bodyGeometry),
      new THREE.LineBasicMaterial({
        color: 0x9aefff,
        transparent: true,
        opacity: 0.34,
      }),
    );

    front.position.z = panelDepth / 2 + 0.002;
    back.position.z = -panelDepth / 2 - 0.002;
    back.rotation.y = Math.PI;

    panel.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
    panel.rotation.y = angle;
    panel.userData = {
      angle,
      index,
      frontMaterial,
      sideMaterial,
      backMaterial,
      edgeMaterial: edge.material,
    };
    body.userData.panelRoot = panel;
    front.userData.panelRoot = panel;
    back.userData.panelRoot = panel;
    edge.userData.panelRoot = panel;
    panel.add(body, front, back, edge);
    group.add(panel);
    panels.push(panel);
    disposables.push(
      bodyGeometry,
      frontGeometry,
      backGeometry,
      texture,
      frontMaterial,
      sideMaterial,
      backMaterial,
      edge.geometry,
      edge.material,
    );
  });

  function resize() {
    const bounds = host.getBoundingClientRect();
    renderer.setSize(bounds.width, bounds.height, false);
    camera.aspect = bounds.width / Math.max(bounds.height, 1);
    camera.position.z = bounds.width < 700 ? 7.8 : 6.8;
    camera.updateProjectionMatrix();
  }

  function updatePointer(event) {
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
  }

  function focusPanel(panel) {
    const targetY = -panel.userData.angle;
    const turns = Math.round((state.rotationY - targetY) / (Math.PI * 2));

    state.pausedUntil = performance.now() + 2000;
    gsap.to(state, {
      rotationX: -0.08,
      rotationY: targetY + turns * Math.PI * 2,
      duration: 0.8,
      ease: "power3.out",
    });
  }

  function onPointerDown(event) {
    drag.active = true;
    drag.mode = "pending";
    drag.startX = event.clientX;
    drag.startY = event.clientY;
    drag.startRotationX = state.rotationX;
    drag.startRotationY = state.rotationY;
    drag.moved = false;
    state.dragging = true;
    state.pausedUntil = 0;
  }

  function onPointerMove(event) {
    if (!drag.active) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const distance = Math.hypot(dx, dy);

    if (drag.mode === "pending" && distance > 7) {
      drag.mode = Math.abs(dx) > Math.abs(dy) * 1.15 ? "horizontal" : "vertical";
    }

    if (drag.mode !== "horizontal") return;
    if (event.cancelable) event.preventDefault();

    drag.moved = distance > 8;
    state.rotationY = drag.startRotationY + dx * 0.006;
    state.rotationX = THREE.MathUtils.clamp(drag.startRotationX - dy * 0.002, -0.18, 0.18);
  }

  function onPointerUp(event) {
    if (!drag.active) return;

    if (!drag.moved && drag.mode !== "vertical") {
      updatePointer(event);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(panels, true)[0];

      if (hit) focusPanel(hit.object.userData.panelRoot ?? hit.object);
    }

    drag.active = false;
    state.dragging = false;
  }

  let frameId = 0;
  let lastTime = 0;

  function render(time = 0) {
    const delta = Math.min(time - lastTime, 34) || 16;
    lastTime = time;

    if (!state.dragging && time >= state.pausedUntil && !reducedMotion) {
      state.rotationY += delta * 0.00028;
    }

    group.rotation.x += (state.rotationX - group.rotation.x) * 0.14;
    group.rotation.y += (state.rotationY - group.rotation.y) * 0.14;

    panels.forEach((panel) => {
      const facing = Math.max(0.48, Math.cos(panel.userData.angle + group.rotation.y) * 0.35 + 0.65);
      panel.userData.frontMaterial.opacity = facing;
      panel.userData.sideMaterial.opacity = 0.46 + facing * 0.34;
      panel.userData.backMaterial.opacity = 0.36 + facing * 0.2;
      panel.userData.edgeMaterial.opacity = 0.16 + facing * 0.3;
    });

    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(render);
  }

  resize();
  render();

  window.addEventListener("resize", resize);
  renderer.domElement.addEventListener("pointerdown", onPointerDown);
  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("pointerup", onPointerUp);
  renderer.domElement.addEventListener("pointerleave", onPointerUp);

  return {
    cleanup() {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointerleave", onPointerUp);
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

function initScene() {
  const host = sceneHost.value;

  if (!host) {
    return undefined;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(54, 1, 0.1, 120);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
  });
  const pointer = new THREE.Vector2(0, 0);
  const colors = [0x8e5cff, 0x48d8ff, 0xb7ff68, 0xffb84d, 0xff5c93, 0x66ffd7];
  const state = {
    color: new THREE.Color(colors[0]),
    targetColor: new THREE.Color(colors[0]),
    project: 0,
    baseCameraZ: 10,
  };
  const intro = {
    core: reducedMotion ? 0 : 1,
    scale: reducedMotion ? 1 : 7.6,
    spin: 0,
    tunnelPull: reducedMotion ? 0 : -15.5,
  };
  const scrollState = {
    current: 0,
    target: 0,
  };

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  camera.position.set(0, 0.4, 10);

  const group = new THREE.Group();
  scene.add(group);

  const tunnel = new THREE.Group();
  const tunnelParts = [];
  scene.add(tunnel);

  const tunnelMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.13,
  });

  for (let index = 0; index < 9; index += 1) {
    const ringGeometry = new THREE.TorusGeometry(2.2 + index * 0.34, 0.012, 6, 96);
    const ring = new THREE.Mesh(ringGeometry, tunnelMaterial);
    ring.position.z = -index * 1.2;
    ring.rotation.z = index * 0.22;
    tunnel.add(ring);
    tunnelParts.push({ geometry: ringGeometry, ring });
  }

  const knotGeometry = new THREE.TorusKnotGeometry(1.7, 0.46, 220, 18, 2, 5);
  const knotMaterial = new THREE.MeshBasicMaterial({
    color: state.color,
    wireframe: true,
    transparent: true,
    opacity: 0.92,
  });
  const knot = new THREE.Mesh(knotGeometry, knotMaterial);
  knot.rotation.set(0.7, 0.18, -0.36);
  group.add(knot);

  const shellGeometry = new THREE.IcosahedronGeometry(4.1, 2);
  const shellMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    transparent: true,
    opacity: 0.16,
  });
  const shell = new THREE.Mesh(shellGeometry, shellMaterial);
  group.add(shell);

  const particleCount = window.innerWidth < 700 ? 700 : 1300;
  const positions = new Float32Array(particleCount * 3);
  const phase = new Float32Array(particleCount);

  for (let index = 0; index < particleCount; index += 1) {
    const radius = 4 + Math.random() * 9;
    const angle = Math.random() * Math.PI * 2;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 7;
    positions[index * 3 + 2] = Math.sin(angle) * radius - Math.random() * 10;
    phase[index] = Math.random() * Math.PI * 2;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const particleMaterial = new THREE.PointsMaterial({
    color: state.color,
    size: 0.052,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.22,
  });
  const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-5.8, -2.8, -2),
    new THREE.Vector3(5.8, 2.8, -4),
  ]);
  const slash = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(slash);

  function resize() {
    const { width, height } = host.getBoundingClientRect();
    const isMobile = width < 700;

    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    state.baseCameraZ = isMobile ? 14.6 : 10.2;
    camera.position.z = state.baseCameraZ;
    group.scale.setScalar(isMobile ? 0.84 : 1.18);
    particles.scale.setScalar(isMobile ? 0.88 : 1.08);
    tunnel.scale.setScalar(isMobile ? 0.76 : 1);
    camera.updateProjectionMatrix();
  }

  function updateScroll() {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    const progress = THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
    const colorIndex = Math.min(colors.length - 1, Math.floor(progress * colors.length));

    scrollState.target = progress;
    state.targetColor.setHex(colors[colorIndex]);
  }

  function onPointerMove(event) {
    const bounds = host.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
  }

  let frameId = 0;
  const clock = new THREE.Clock();

  function render() {
    const elapsed = clock.getElapsedTime();
    const speed = reducedMotion ? 0.08 : 1;
    const scrollProgress = scrollState.current + (scrollState.target - scrollState.current) * 0.075;
    const isMobile = window.innerWidth < 700;
    const baseScale = isMobile ? 0.84 : 1.18;
    const baseParticleScale = isMobile ? 0.88 : 1.08;
    const baseTunnelScale = isMobile ? 0.76 : 1;
    const globalCameraZ = state.baseCameraZ - scrollProgress * 1.55;
    const coreCameraZ = isMobile ? 0.54 : 0.42;
    const targetCameraZ = THREE.MathUtils.lerp(globalCameraZ, coreCameraZ, intro.core);
    scrollState.current = scrollProgress;

    state.color.lerp(state.targetColor, 0.045);
    knotMaterial.color.copy(state.color);
    particleMaterial.color.copy(state.color);
    tunnelMaterial.color.copy(state.color).lerp(new THREE.Color(0xffffff), 0.42);
    tunnelMaterial.opacity = 0.13 + intro.core * 0.22;
    shellMaterial.opacity = 0.16 + intro.core * 0.2;
    particleMaterial.opacity = 0.82 + intro.core * 0.18;
    particleMaterial.size = 0.052 + intro.core * 0.085;

    group.rotation.y += 0.0018 * speed + state.project * 0.00018 + scrollProgress * 0.0012 + intro.core * 0.0022;
    group.rotation.x += 0.0007 * speed + scrollProgress * 0.00042 + intro.core * 0.0012;
    group.position.y = THREE.MathUtils.lerp(group.position.y, -scrollProgress * 1.1 - intro.core * 0.08, 0.032);
    group.position.x = THREE.MathUtils.lerp(group.position.x, Math.sin(scrollProgress * Math.PI * 2) * 0.42, 0.032);
    shell.rotation.y -= 0.0007 * speed + scrollProgress * 0.00072;
    tunnel.rotation.z = elapsed * 0.01 * speed + scrollProgress * Math.PI * 0.58;
    tunnel.position.z = -scrollProgress * 4.2;
    tunnel.position.y = scrollProgress * 0.64;
    slash.rotation.z = Math.sin(elapsed * 0.22 + scrollProgress * 2.2) * 0.14;

    knot.rotation.x += 0.0018 * speed + scrollProgress * 0.0011;
    knot.rotation.z += 0.0009 * speed + scrollProgress * 0.001;
    knot.scale.setScalar(1 + Math.sin(scrollProgress * Math.PI) * 0.08);

    const positionAttribute = particleGeometry.attributes.position;
    for (let index = 0; index < particleCount; index += 1) {
      positionAttribute.array[index * 3 + 1] +=
        Math.sin(elapsed * 0.55 + phase[index] + scrollProgress * 9) *
        0.00034 *
        speed *
        (1 + scrollProgress * 0.9);
      positionAttribute.array[index * 3 + 2] +=
        Math.cos(elapsed * 0.22 + phase[index]) * 0.00022 * speed * scrollProgress;
    }
    positionAttribute.needsUpdate = true;

    camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.035;
    camera.position.y += (0.4 + pointer.y * 0.55 - camera.position.y) * 0.035;
    group.scale.setScalar(baseScale * intro.scale);
    particles.scale.setScalar(baseParticleScale * (0.9 + intro.scale * 0.18 + intro.core * 1.15));
    tunnel.scale.setScalar(baseTunnelScale * (1 + intro.core * 3.2));
    group.rotation.z = intro.spin;
    tunnel.position.z += intro.tunnelPull;
    camera.fov += (THREE.MathUtils.lerp(54, isMobile ? 104 : 96, intro.core) - camera.fov) * 0.1;
    camera.updateProjectionMatrix();
    camera.position.z += (targetCameraZ - camera.position.z) * 0.055;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    frameId = window.requestAnimationFrame(render);
  }

  resize();
  updateScroll();
  render();

  window.addEventListener("resize", resize);
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("mousemove", onPointerMove);

  const cleanup = () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
    window.removeEventListener("scroll", updateScroll);
    window.removeEventListener("mousemove", onPointerMove);
    tunnelParts.forEach(({ geometry }) => geometry.dispose());
    tunnelMaterial.dispose();
    knotGeometry.dispose();
    knotMaterial.dispose();
    shellGeometry.dispose();
    shellMaterial.dispose();
    particleGeometry.dispose();
    particleMaterial.dispose();
    lineGeometry.dispose();
    lineMaterial.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };

  return { cleanup, intro };
}

onMounted(() => {
  lockIntroScroll();
  window.addEventListener("click", spawnClickParticles, { passive: true });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.classList.remove("app-booting");
  });

  sceneApi = initScene();
  awardsSceneApi = initAwardsScene();

  ctx = gsap.context(() => {
    mm = gsap.matchMedia();

    mm.add(
      {
        all: "(min-width: 0px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isDesktop: "(min-width: 900px)",
        isMobile: "(max-width: 680px)",
      },
      ({ conditions }) => {
        const duration = conditions.reduceMotion ? 0 : 0.9;

        gsap.defaults({ ease: "power3.out", duration });

        if (conditions.reduceMotion) {
          introActive.value = false;
          unlockIntroScroll();
          gsap.set([".nav", ".hero-copy", ".hero-copy > *", ".stat-card", ".intro-vignette"], {
            autoAlpha: 1,
            clearProps: "filter",
          });
          gsap.set(".intro-vignette", { autoAlpha: 0, pointerEvents: "none" });
        } else {
          introActive.value = true;
          lockIntroScroll();
          gsap.set(".nav", { autoAlpha: 0, y: -16 });
          gsap.set(".hero-copy", { autoAlpha: 0, filter: "blur(14px)" });
          gsap.set([".hero-copy > *", ".stat-card"], { autoAlpha: 0 });
          gsap.set(".intro-vignette", { autoAlpha: 1 });

          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .to(sceneApi?.intro ?? {}, {
              core: 0,
              scale: 1,
              spin: Math.PI * 2.05,
              tunnelPull: 0,
              duration: conditions.isMobile ? 3.35 : 3.6,
            })
            .call(() => {
              introActive.value = false;
              unlockIntroScroll();
            })
            .to(
              ".intro-vignette",
              {
                autoAlpha: 0,
                duration: 0.82,
                pointerEvents: "none",
              },
              "-=0.36",
            )
            .to(".nav", { autoAlpha: 1, y: 0, duration: 0.56 }, "-=0.35")
            .to(
              ".hero-copy",
              {
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 0.62,
              },
              "-=0.28",
            )
            .fromTo(
              ".hero-copy > *",
              { autoAlpha: 0, y: conditions.isMobile ? 18 : 30, filter: "blur(10px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: 0.075,
                duration: 0.72,
              },
              "-=0.22",
            )
            .fromTo(
              ".stat-card",
              { autoAlpha: 0, y: 18, scale: 0.985 },
              { autoAlpha: 1, y: 0, scale: 1, stagger: 0.045, duration: 0.54 },
              "-=0.28",
            );
        }

        gsap.utils.toArray(".reveal").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: conditions.isMobile ? 22 : 42,
            duration: conditions.reduceMotion ? 0 : conditions.isMobile ? 0.55 : 0.8,
            scrollTrigger: {
              trigger: el,
              start: conditions.isMobile ? "top 90%" : "top 82%",
              toggleActions: "play none none none",
            },
          });
        });

        gsap.utils.toArray(".project-card").forEach((el, index) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: conditions.isMobile ? 20 : 36,
            scale: conditions.isMobile ? 0.995 : 0.98,
            delay: conditions.reduceMotion ? 0 : conditions.isMobile ? 0 : index * 0.03,
            scrollTrigger: {
              trigger: el,
              start: conditions.isMobile ? "top 92%" : "top 88%",
              toggleActions: "play none none none",
            },
          });
        });
      },
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());
  });
});

onUnmounted(() => {
  unlockIntroScroll();
  document.documentElement.classList.remove("hero-card-lock");
  window.removeEventListener("click", spawnClickParticles);
  window.clearTimeout(wechatTimer);
  sceneApi?.cleanup?.();
  awardsSceneApi?.cleanup?.();
  mm?.revert();
  ctx?.revert();
});
</script>

<template>
  <header class="nav">
    <a class="brand" href="#top" aria-label="返回顶部">
      <span>RY</span>
      <strong>王如洋</strong>
    </a>
    <nav aria-label="页面导航">
      <a href="#projects">项目</a>
      <a href="#awards">荣誉</a>
      <a href="#experience">经历</a>
      <a href="#contact">联系</a>
    </nav>
  </header>

  <main id="top" :class="{ 'intro-active': introActive }">
    <div ref="sceneHost" class="webgl-stage" aria-hidden="true"></div>
    <div class="intro-vignette" aria-hidden="true"></div>
    <section class="hero section">
      <div
        class="hero-copy"
        :class="{ 'is-pressed': heroCardPressed }"
        :style="heroCardStyle"
        @pointerdown="pressHeroCard"
        @pointermove="moveHeroCard"
        @pointerup="releaseHeroCard"
        @pointercancel="releaseHeroCard"
        @pointerleave="releaseHeroCard"
      >
        <h2>王如洋</h2>
        <p class="role">深圳 · 鸿蒙开发工程师 · 7年工作经验</p>
        <p class="lead">
          专注 HarmonyOS 与 Android 多端应用落地，主导药管家、朋克养生等项目从 0 到 1。具备硬件模块、BLE、AI 场景化和多端自适应经验。
        </p>
      </div>

    </section>

    <section class="stats section" aria-label="关键数据">
      <article v-for="[value, label] in stats" :key="label" class="stat-card">
        <strong style="font-size: 1.5rem;">{{ value }}</strong>
        <span>{{ label }}</span>
      </article>
    </section>

    <section class="section split reveal">
      <div>
        <h2>个人优势</h2>
      </div>
      <div class="highlight-grid">
        <article v-for="item in highlights" :key="item.title" class="highlight-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section skill-section reveal">
      <div class="section-head">
        <h2>技术栈</h2>
      </div>
      <div class="skills">
        <span v-for="skill in skills" :key="skill">{{ skill }}</span>
      </div>
    </section>

    <section id="projects" class="section projects">
      <div class="section-head reveal">
        <h2>我的项目</h2>
      </div>
      <div class="project-grid">
        <article
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          :class="{ 'can-open': project.markets?.length }"
          :role="project.markets?.length ? 'button' : undefined"
          :tabindex="project.markets?.length ? 0 : undefined"
          :aria-label="project.markets?.length ? `${project.name}，打开对应应用市场` : undefined"
          @click="openProjectMarket(project)"
          @keydown.enter.prevent="openProjectMarket(project)"
          @keydown.space.prevent="openProjectMarket(project)"
        >
          <div class="project-top">
            <h3>{{ project.name }}</h3>
            <span>{{ project.tag }}</span>
          </div>
          <p>{{ project.desc }}</p>
          <div class="stack-list">
            <small v-for="tech in project.stack" :key="tech">{{ tech }}</small>
          </div>
          <strong>{{ project.impact }}</strong>
        </article>
      </div>
    </section>

    <section id="awards" class="section awards-panel">
      <div class="section-head reveal">
        <h2>奖项荣誉</h2>
      </div>
      <div
        ref="awardsSceneHost"
        class="awards-webgl-stage reveal"
        aria-label="可拖动旋转的奖项 3D 展示"
        role="img"
      >
      </div>
    </section>

    <section id="experience" class="section reveal">
      <div class="section-head">
        <h2>工作经历</h2>
      </div>
      <div class="timeline">
        <article v-for="item in timeline" :key="item.company" class="timeline-item">
          <div>
            <h3>{{ item.company }}</h3>
            <strong>{{ item.role }}</strong>
            <time>{{ item.period }}</time>
            <p>{{ item.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section education">
      <div>
        <h3>河南应用技术职业学院</h3>
      </div>
      <p>大专 · 无人机应用技术 · 2016 - 2019。主修机械设计基础、无人机系统原理、C语言、数字电路、模拟电路。</p>
    </section>

    <section id="contact" class="section contact">
      <h3>专注鸿蒙与移动端产品落地，欢迎进一步沟通</h3>
      <div class="contact-row">
        <button type="button" @click="copyWechatAndOpenApp">微信：{{ wechatId }}</button>
        <span>目标岗位：鸿蒙开发工程师</span>
      </div>
    </section>
    <div class="copy-toast" :class="{ 'is-visible': showWechatToast }" role="status" aria-live="polite">
      已复制微信号
    </div>
    <div class="click-particle-layer" aria-hidden="true">
      <span
        v-for="particle in clickParticles"
        :key="particle.id"
        class="click-particle"
        :style="{
          '--x': `${particle.x}px`,
          '--y': `${particle.y}px`,
          '--dx': `${particle.dx}px`,
          '--dy': `${particle.dy}px`,
          '--size': `${particle.size}px`,
          '--color': particle.color,
        }"
      ></span>
    </div>
  </main>
</template>
