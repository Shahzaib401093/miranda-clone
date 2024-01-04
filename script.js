const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
var tl = gsap.timeline();
tl.to("main", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
  overFlow:"Hidden"
});
tl.to("main", {
  y: "-70vh",
  duration: 1.5,
  delay: 1,
});
tl.to("main", {
  y: 0,
  rotate: -360,
  scale: 1,
  duration: 1,
});
