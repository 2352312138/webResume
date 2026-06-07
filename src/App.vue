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
const marketLogPrefix = "[project-market]";

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
let sceneShowcaseAutoTimer;
let sceneShowcaseAutoActive = false;

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

function getMarketDeviceInfo() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 0;

  return {
    ua,
    platform,
    maxTouchPoints,
    isIos:
      /iPad|iPhone|iPod/i.test(ua) ||
      (platform === "MacIntel" && maxTouchPoints > 1),
    isHarmony: /HarmonyOS|OpenHarmony|ArkWeb|HMOS/i.test(ua),
    isHuaweiDevice: /Huawei|HUAWEI|HONOR/i.test(ua),
    isAndroid: /Android/i.test(ua),
  };
}

function resolveProjectMarket(project) {
  const markets = project.markets ?? [];
  const device = getMarketDeviceInfo();

  if (!markets.length) return undefined;
  if (device.isIos) return markets.find((app) => app.type === "ios") ?? markets[0];
  if (device.isAndroid) return markets.find((app) => app.type === "android") ?? markets.find((app) => app.type === "harmony") ?? markets[0];
  if (device.isHarmony) return markets.find((app) => app.type === "harmony") ?? markets.find((app) => app.type === "android") ?? markets[0];
  return markets[0];
}

function openProjectMarket(project) {
  const device = getMarketDeviceInfo();
  const app = resolveProjectMarket(project);
  const url = app ? getMarketUrl(app) : undefined;
  const payload = {
    project: project.name,
    device,
    markets: project.markets ?? [],
    selectedMarket: app,
    url,
  };

  console.info(marketLogPrefix, payload);
  window.sessionStorage?.setItem?.("projectMarket:lastOpen", JSON.stringify(payload));

  if (!url) {
    console.warn(marketLogPrefix, "No market url resolved.", {
      project: project.name,
      markets: project.markets ?? [],
    });
    return;
  }

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

function stopSceneShowcaseAuto() {
  sceneShowcaseAutoActive = false;
  window.clearTimeout(sceneShowcaseAutoTimer);
}

function scheduleSceneShowcaseAuto() {
  window.clearTimeout(sceneShowcaseAutoTimer);
  sceneShowcaseAutoTimer = window.setTimeout(() => {
    if (!sceneShowcaseAutoActive) return;
    sceneApi?.randomize?.();
    scheduleSceneShowcaseAuto();
  }, 3000 + Math.random() * 2000);
}

function startSceneShowcaseAuto() {
  if (sceneShowcaseAutoActive) return;
  sceneShowcaseAutoActive = true;
  sceneApi?.randomize?.();
  scheduleSceneShowcaseAuto();
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
  const colors = [0x55d8ff, 0x7c5cff, 0x39f5d6, 0x2f7dff, 0xff5cab, 0x55d8ff];
  const state = {
    color: new THREE.Color(colors[0]),
    targetColor: new THREE.Color(colors[0]),
    project: 0,
    baseCameraZ: 10,
  };
  const intro = {
    core: reducedMotion ? 0 : 1,
    scale: reducedMotion ? 1 : 13.5,
    spin: 0,
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

  const particleCount = 30000;
  const positions = new Float32Array(particleCount * 3);
  const origins = new Float32Array(particleCount * 3);
  const drift = new Float32Array(particleCount * 3);
  const phase = new Float32Array(particleCount);
  const curveTargets = [];
  const shapeCount = 7;
  const tau = Math.PI * 2;
  const golden = 0.618033988749895;
  function shuffleIndexes(length) {
    const indexes = Array.from({ length }, (_, index) => index);

    for (let index = indexes.length - 1; index > 0; index -= 1) {
      const next = Math.floor(Math.random() * (index + 1));
      [indexes[index], indexes[next]] = [indexes[next], indexes[index]];
    }

    if (indexes.every((value, index) => value === index)) {
      indexes.push(indexes.shift());
    }

    return indexes;
  }

  const curveOrder = shuffleIndexes(shapeCount);
  const colorOrder = shuffleIndexes(colors.length);
  const transitionSeeds = Array.from({ length: shapeCount }, () => Math.random() * tau);
  const manualStartTargets = new Float32Array(particleCount * 3);
  let manualWarp = 0;
  let manualMorph = 0;
  let manualUseSnapshot = false;
  let manualFrom = curveOrder[0];
  let manualTo = curveOrder[1] ?? curveOrder[0];
  let manualSequenceIndex = 0;
  let manualColor = new THREE.Color(colors[0]);

  function smoothstep(value) {
    return value * value * (3 - 2 * value);
  }

  function setPoint(buffer, index, x, y, z) {
    buffer[index * 3] = x;
    buffer[index * 3 + 1] = y;
    buffer[index * 3 + 2] = z;
  }

  function buildKochPoints(iterations) {
    let points = [
      new THREE.Vector2(-2.4, -1.25),
      new THREE.Vector2(2.4, -1.25),
      new THREE.Vector2(0, 2.1),
      new THREE.Vector2(-2.4, -1.25),
    ];

    for (let depth = 0; depth < iterations; depth += 1) {
      const next = [];

      for (let index = 0; index < points.length - 1; index += 1) {
        const a = points[index];
        const b = points[index + 1];
        const one = a.clone().lerp(b, 1 / 3);
        const two = a.clone().lerp(b, 2 / 3);
        const peak = two.clone().sub(one).rotateAround(new THREE.Vector2(0, 0), -Math.PI / 3).add(one);

        next.push(a, one, peak, two);
      }

      next.push(points[points.length - 1]);
      points = next;
    }

    return points;
  }

  function samplePolyline(points, progress) {
    const wrapped = progress - Math.floor(progress);
    const scaled = wrapped * (points.length - 1);
    const index = Math.min(points.length - 2, Math.floor(scaled));
    const local = scaled - index;
    return points[index].clone().lerp(points[index + 1], local);
  }

  const kochPoints = buildKochPoints(4);

  function createCurveTargets() {
    for (let curve = 0; curve < shapeCount; curve += 1) {
      curveTargets.push(new Float32Array(particleCount * 3));
    }

    for (let index = 0; index < particleCount; index += 1) {
      const u = (index * golden + Math.random() * 0.0009) % 1;
      const lane = ((index % 233) / 233 - 0.5);
      const layer = ((index % 89) / 89 - 0.5);
      const t = u * tau;
      const dust = (Math.random() - 0.5) * 0.18;

      const koch = samplePolyline(kochPoints, u * 5.4 + layer * 0.08);
      setPoint(curveTargets[0], index, koch.x * 1.12 + lane * 0.24, koch.y * 1.12 + layer * 0.24, Math.sin(u * tau * 8) * 0.75 + lane * 2.1);

      const heartX = 16 * Math.pow(Math.sin(t), 3);
      const heartY = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      setPoint(curveTargets[1], index, heartX * 0.18 + lane * 0.42, heartY * 0.18 - 0.42 + layer * 0.34, Math.sin(t * 5 + lane) * 1.15);

      const butterflyT = u * tau * 5.2;
      const butterflyR = Math.exp(Math.sin(butterflyT)) - 2 * Math.cos(4 * butterflyT) + Math.pow(Math.sin((2 * butterflyT - Math.PI) / 24), 5);
      setPoint(curveTargets[2], index, Math.sin(butterflyT) * butterflyR * 0.78 + lane * 0.32, Math.cos(butterflyT) * butterflyR * 0.78 + layer * 0.32, Math.sin(butterflyT * 0.72) * 2.2);

      const spiralT = u * tau * 7.6;
      const spiralR = 0.13 * spiralT;
      setPoint(curveTargets[3], index, Math.cos(spiralT) * spiralR + lane * 0.25, Math.sin(spiralT) * spiralR + layer * 0.25, (u - 0.5) * 7.2 + Math.sin(spiralT) * 0.35);

      const galaxyArm = index % 5;
      const galaxyT = u * tau * 6.2 + galaxyArm * (tau / 5);
      const galaxyR = 0.18 + Math.pow(u, 0.5) * 4.85;
      const galaxyTwist = galaxyT + galaxyR * 1.72;
      const armWidth = (Math.random() - 0.5) * (0.12 + u * 0.34);
      setPoint(curveTargets[4], index, Math.cos(galaxyTwist + armWidth) * galaxyR + lane * 0.18, Math.sin(galaxyTwist + armWidth) * galaxyR * 0.58 + layer * 0.18, Math.sin(galaxyT * 1.55 + galaxyArm) * 0.55 + layer * 0.72);

      const lemT = u * tau * 2;
      const lemDen = 1 + Math.pow(Math.sin(lemT), 2);
      setPoint(curveTargets[5], index, (3.8 * Math.cos(lemT)) / lemDen + lane * 0.28, (3.8 * Math.sin(lemT) * Math.cos(lemT)) / lemDen + layer * 0.28, Math.cos(lemT * 2) * 1.25);

      const roseT = u * tau * 4;
      const roseR = 3.7 * Math.cos(5 * roseT);
      setPoint(curveTargets[6], index, Math.cos(roseT) * roseR + lane * 0.3, Math.sin(roseT) * roseR + layer * 0.3, Math.sin(roseT * 3) * 1.45 + dust);

      origins[index * 3] = (Math.random() - 0.5) * 18;
      origins[index * 3 + 1] = (Math.random() - 0.5) * 12;
      origins[index * 3 + 2] = -16 - Math.random() * 18;
      positions[index * 3] = origins[index * 3];
      positions[index * 3 + 1] = origins[index * 3 + 1];
      positions[index * 3 + 2] = origins[index * 3 + 2];
      drift[index * 3] = (Math.random() - 0.5) * 0.22;
      drift[index * 3 + 1] = (Math.random() - 0.5) * 0.22;
      drift[index * 3 + 2] = (Math.random() - 0.5) * 0.42;
      phase[index] = Math.random() * tau;
    }
  }

  createCurveTargets();

  function randomizeCurves() {
    const currentProgress = scrollState.current * (shapeCount - 1);
    const currentIndex = Math.min(shapeCount - 1, Math.floor(currentProgress));
    manualFrom = manualMorph > 0.001 ? manualTo : curveOrder[currentIndex];
    manualSequenceIndex = manualSequenceIndex === manualFrom ? (manualSequenceIndex + 1) % shapeCount : manualSequenceIndex;
    manualTo = manualSequenceIndex;
    manualSequenceIndex = (manualSequenceIndex + 1) % shapeCount;

    manualUseSnapshot = manualMorph <= 0.001;
    if (manualUseSnapshot) {
      manualStartTargets.set(particleGeometry.attributes.position.array);
    }

    transitionSeeds.forEach((_, index) => {
      transitionSeeds[index] = Math.random() * tau;
    });

    manualMorph = 1;
    manualColor.setHex(colors[Math.floor(Math.random() * colors.length)]);
    manualWarp = 0.28;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const particleMaterial = new THREE.PointsMaterial({
    color: state.color,
    size: 0.025,
    transparent: true,
    opacity: 0.94,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeometry, particleMaterial);
  group.add(particles);

  const glowMaterial = new THREE.PointsMaterial({
    color: 0x4ec7ff,
    size: 0.092,
    transparent: true,
    opacity: 0.24,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const glowParticles = new THREE.Points(particleGeometry, glowMaterial);
  group.add(glowParticles);

  function resize() {
    const { width, height } = host.getBoundingClientRect();
    const isMobile = width < 700;

    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    state.baseCameraZ = isMobile ? 11.2 : 8.4;
    camera.position.z = state.baseCameraZ;
    group.scale.setScalar(isMobile ? 0.92 : 1.26);
    camera.updateProjectionMatrix();
  }

  function updateScroll() {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    const progress = THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
    const colorIndex = Math.min(colors.length - 1, Math.floor(progress * colors.length));
    const scrollDelta = Math.abs(progress - scrollState.target);

    const atShowcase = progress > 0.965;

    if (scrollDelta > 0.0015 && !atShowcase) {
      manualMorph = 0;
      manualWarp = 0;
      stopSceneShowcaseAuto();
    }

    if (atShowcase) {
      startSceneShowcaseAuto();
    } else {
      stopSceneShowcaseAuto();
    }

    scrollState.target = progress;
    state.targetColor.setHex(colors[colorOrder[colorIndex]]);
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
    const baseScale = isMobile ? 0.92 : 1.26;
    const globalCameraZ = state.baseCameraZ - scrollProgress * 1.55;
    const coreCameraZ = isMobile ? 3.8 : 3.05;
    const targetCameraZ = THREE.MathUtils.lerp(globalCameraZ, coreCameraZ, intro.core);
    const shapeProgress = scrollProgress * (shapeCount - 1);
    const fromCurve = Math.min(shapeCount - 1, Math.floor(shapeProgress));
    const toCurve = Math.min(shapeCount - 1, fromCurve + 1);
    const curveMix = smoothstep(shapeProgress - fromCurve);
    const manualEase = smoothstep(manualMorph);
    const fromTarget = manualMorph > 0.001 ? (manualUseSnapshot ? manualStartTargets : curveTargets[manualFrom]) : curveTargets[curveOrder[fromCurve]];
    const toTarget = manualMorph > 0.001 ? curveTargets[manualTo] : curveTargets[curveOrder[toCurve]];
    const activeMix = manualMorph > 0.001 ? 1 - manualEase : curveMix;
    const transitionSeed = transitionSeeds[fromCurve];
    scrollState.current = scrollProgress;

    state.color.lerp(state.targetColor, 0.045);
    state.color.lerp(manualColor, manualEase * 0.05);
    glowMaterial.color.copy(state.color);
    particleMaterial.color.copy(state.color);
    glowMaterial.opacity = 0.18 + intro.core * 0.14;
    particleMaterial.opacity = 0.78 + intro.core * 0.1;
    particleMaterial.size = 0.016 + intro.core * 0.022;
    glowMaterial.size = 0.052 + intro.core * 0.045;

    group.rotation.y = pointer.x * 0.18 + Math.sin(elapsed * 0.16 + scrollProgress * tau) * 0.22;
    group.rotation.x = pointer.y * 0.12 + Math.sin(elapsed * 0.12 + scrollProgress * tau * 0.7) * 0.12;
    group.rotation.z = intro.spin + elapsed * 0.018 * speed + scrollProgress * Math.PI * 0.74;
    group.position.y = THREE.MathUtils.lerp(group.position.y, -scrollProgress * 0.78 - intro.core * 0.04, 0.032);
    group.position.x = THREE.MathUtils.lerp(group.position.x, Math.sin(scrollProgress * Math.PI * 2) * 0.42, 0.032);

    const positionAttribute = particleGeometry.attributes.position;
    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      const targetX = fromTarget[offset] + (toTarget[offset] - fromTarget[offset]) * activeMix;
      const targetY = fromTarget[offset + 1] + (toTarget[offset + 1] - fromTarget[offset + 1]) * activeMix;
      const targetZ = fromTarget[offset + 2] + (toTarget[offset + 2] - fromTarget[offset + 2]) * activeMix;
      const localPhase = phase[index];
      const radius = Math.sqrt(targetX * targetX + targetY * targetY) + 0.001;
      const vortex = elapsed * 0.38 * speed + scrollProgress * tau * 2.8 + localPhase * 0.16;
      const transitionNoise = Math.sin(localPhase + transitionSeed + curveMix * tau) * Math.sin(curveMix * Math.PI);
      const clarity = manualMorph > 0.001 ? 1 - manualEase : 0;
      const chaos = 0.13 + Math.sin(elapsed * 0.4 + localPhase) * 0.045 + transitionNoise * 0.1 * (1 - clarity);
      const wake = intro.core * 1.08 + manualWarp * 0.18;

      positionAttribute.array[offset] =
        targetX +
        Math.cos(vortex + radius * 0.8) * chaos +
        drift[offset] * (1.4 + scrollProgress) +
        origins[offset] * wake;
      positionAttribute.array[offset + 1] =
        targetY +
        Math.sin(vortex - radius * 0.55) * chaos +
        drift[offset + 1] * (1.4 + scrollProgress) +
        origins[offset + 1] * wake;
      positionAttribute.array[offset + 2] =
        targetZ +
        Math.sin(vortex * 0.7 + radius) * 0.42 +
        drift[offset + 2] * (1.2 + scrollProgress * 1.4) +
        origins[offset + 2] * wake;
    }
    positionAttribute.needsUpdate = true;
    manualWarp += (0 - manualWarp) * 0.026;
    manualMorph += (0 - manualMorph) * 0.011;
    if (manualUseSnapshot && manualMorph < 0.34) {
      manualUseSnapshot = false;
      manualFrom = manualTo;
    }

    camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.035;
    camera.position.y += (0.4 + pointer.y * 0.55 - camera.position.y) * 0.035;
    group.scale.setScalar(baseScale * intro.scale);
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
    glowMaterial.dispose();
    particleGeometry.dispose();
    particleMaterial.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };

  return { cleanup, intro, randomize: randomizeCurves };
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
              scale: conditions.isMobile ? 0.9 : 0.96,
              spin: Math.PI * 2.6,
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
  stopSceneShowcaseAuto();
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
    <section class="scene-showcase" aria-label="3D 粒子背景展示"></section>
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
