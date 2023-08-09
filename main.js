// GSAP: Scroll pinned effect.
ScrollTrigger.create({
	trigger: ".scroll",
	start: "top top",
	end: "bottom bottom",
	pin: ".scroll-right",
    markers: false,
});

// GSAP: Clipping-mask parallax effect.
const tl = gsap.timeline({defaults: {ease: "easeinout"}});

tl.from(".scroll-right-parallax-ii", {bottom: "-100%"});
tl.from(".scroll-right-parallax-iii", {bottom: "-100%"});
tl.from(".scroll-right-parallax-iv", {bottom: "-100%"});

ScrollTrigger.create({
	animation: tl,
	trigger: ".scroll",
	start: "top top",
	end: "bottom bottom",
	scrub: true,
	snap: 1/3,
});

// GSAP: Floating elements on scrolling effect.
const elm = gsap.timeline();

elm.to(".hero-element-i", {rotation: 30, bottom: 600});
elm.to(".hero-element-ii", {rotation: 90, top: 600},"<");

ScrollTrigger.create({
	animation: elm,
	trigger: ".hero",
	start: "10px top",
	end: "bottom 200px",
	scrub: 10,
	markers: false,
});

// Lenis: Smooth scrolling effects.
const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
};
requestAnimationFrame(raf);