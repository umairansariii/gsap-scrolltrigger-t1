ScrollTrigger.create({
	trigger: ".scroll",
	start: "top top",
	end: "bottom bottom",
	pin: ".scroll-right-pinned",
    markers: true,
})

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
};

requestAnimationFrame(raf);