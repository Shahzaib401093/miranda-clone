const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
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