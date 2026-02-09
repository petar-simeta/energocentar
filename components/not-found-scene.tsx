"use client";

import { useRef, useEffect, useState, useCallback, useSyncExternalStore } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import helvetikerBoldFont from "three/examples/fonts/helvetiker_bold.typeface.json";

const ENERGY_GRADES = [
  { label: "A+", color: "var(--energy-a-plus)" },
  { label: "A", color: "var(--energy-a)" },
  { label: "B", color: "var(--energy-b)" },
  { label: "C", color: "var(--energy-c)" },
  { label: "D", color: "var(--energy-d)" },
  { label: "E", color: "var(--energy-e)" },
  { label: "F", color: "var(--energy-f)" },
  { label: "G", color: "var(--energy-g)" },
] as const;

const IDLE_SPEED = 0.003;
const IMPULSE = 0.07;
const DRAG_SENSITIVITY = 0.001;
const DECAY_RATE = 0.015;
const MAX_VELOCITY = 0.3;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function velocityToGradeIndex(velocity: number): number {
  const absV = Math.abs(velocity);
  if (absV > 0.15) return 0; // A+
  if (absV > 0.12) return 1; // A
  if (absV > 0.09) return 2; // B
  if (absV > 0.065) return 3; // C
  if (absV > 0.04) return 4; // D
  if (absV > 0.02) return 5; // E
  if (absV > 0.008) return 6; // F
  return 7; // G
}

export default function NotFoundScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(IDLE_SPEED);
  const isDraggingRef = useRef(false);
  const lastMouseXRef = useRef(0);
  const [activeGrade, setActiveGrade] = useState(7); // Start at G (idle)

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const handlePointerDown = useCallback((e: PointerEvent) => {
    isDraggingRef.current = true;
    lastMouseXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastMouseXRef.current;
    lastMouseXRef.current = e.clientX;
    velocityRef.current += delta * DRAG_SENSITIVITY;
  }, []);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleClick = useCallback(() => {
    // Only fire impulse if not dragging
    if (!isDraggingRef.current) {
      velocityRef.current += IMPULSE;
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Push camera back on narrow screens so text doesn't overflow
    const isMobile = container.clientWidth < 640;
    camera.position.z = isMobile ? 12 : 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(5, 5, 5);
    scene.add(directional);
    const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
    backLight.position.set(-3, -2, -5);
    scene.add(backLight);

    // Load font and create text
    const loader = new FontLoader();
    const font = loader.parse(helvetikerBoldFont);

    const geometry = new TextGeometry("404", {
      font,
      size: 2,
      depth: 0.6,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    // Center geometry
    geometry.computeBoundingBox();
    if (geometry.boundingBox) {
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);
    }

    const material = new THREE.MeshStandardMaterial({
      color: 0x2c652b,
      metalness: 0.15,
      roughness: 0.6,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Pointer events
    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("click", handleClick);

    // Update cursor style based on drag
    const cursorInterval = setInterval(() => {
      canvas.style.cursor = isDraggingRef.current ? "grabbing" : "grab";
    }, 50);

    // Animation loop
    let prevGrade = -1;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Clamp velocity
      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current)
      );

      // Decay velocity toward idle speed
      if (!isDraggingRef.current) {
        const diff = velocityRef.current - IDLE_SPEED;
        velocityRef.current -= diff * DECAY_RATE;
      }

      mesh.rotation.y += velocityRef.current;

      // Update grade only when it changes
      const grade = velocityToGradeIndex(velocityRef.current);
      if (grade !== prevGrade) {
        prevGrade = grade;
        setActiveGrade(grade);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize observer
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;
        camera.aspect = width / height;
        camera.position.z = width < 640 ? 12 : 8;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    observer.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(cursorInterval);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("click", handleClick);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, handlePointerDown, handlePointerMove, handlePointerUp, handleClick]);

  if (reducedMotion) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="font-display text-[8rem] font-bold leading-none text-green-400/80 sm:text-[12rem]">
          404
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full">
      {/* Energy scale overlay */}
      <div className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-start gap-0.5 sm:left-8">
        <span className="mb-2 text-[10px] font-medium tracking-wider text-green-300/70 uppercase sm:text-xs">
          Energetska klasa vrtnje
        </span>
        {ENERGY_GRADES.map((grade, i) => {
          const isActive = i === activeGrade;
          return (
            <div
              key={grade.label}
              className="flex items-center gap-1.5 transition-all duration-300 sm:gap-2"
            >
              <div
                className="rounded-sm transition-all duration-300"
                style={{
                  backgroundColor: grade.color,
                  width: isActive ? "2rem" : "0.75rem",
                  height: isActive ? "0.5rem" : "0.25rem",
                  opacity: isActive ? 1 : 0.35,
                }}
              />
              <span
                className="text-[10px] font-semibold transition-opacity duration-300 sm:text-xs"
                style={{
                  color: grade.color,
                  opacity: isActive ? 1 : 0.35,
                }}
              >
                {grade.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Three.js canvas container */}
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}

function subscribeReducedMotion(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}
