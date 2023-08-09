// GSAP: Default settings.
gsap.defaults({ease: "easeinout"});

// GSAP: Scroll pinned effect.
ScrollTrigger.create({
	trigger: ".scroll",
	start: "top top",
	end: "bottom bottom",
	pin: ".scroll-right",
    markers: false,
});

// GSAP: Clipping-mask parallax effect.
const tl = gsap.timeline();

tl.from(".scroll-right-parallax-ii", { bottom: "-100%" });
tl.from(".scroll-right-parallax-iii", { bottom: "-100%" });
tl.from(".scroll-right-parallax-iv", { bottom: "-100%" });

ScrollTrigger.create({
	animation: tl,
	trigger: ".scroll",
	start: "top top",
	end: "bottom bottom",
	scrub: true,
	snap: 1/3,
});

// Lenis: Smooth scrolling effects.
const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
};
requestAnimationFrame(raf);