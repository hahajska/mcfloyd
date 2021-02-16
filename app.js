$(function () {
  $(".navbarek").hide().fadeIn(2000);
});

gsap.to(".firstImage", {
  y: 800,
  duration: 100,
  scrollTrigger: {
    trigger: ".nadpis-2",
    start: "bottom 73.5%",
    end: "bottom 65%",
    scrub: 2,
    markers: false,
    toggleActions: "play none reverse none",
  },
});

let changeColor = gsap.timeline({
  scrollTrigger: {
    trigger: ".firstImage",
    start: "bottom 50%",
    end: "bottom 40%",
    scrub: 2,
    markers: false,
    toggleActions: "play none reverse none",
  },
});

changeColor.to(".zkouska", { backgroundColor: "#fff", duration: 1 });
changeColor.to(".navbarek", { backgroundColor: "#15171a", duration: 2 });
changeColor.to(".toWhite", { color: "#fff", duration: 2 });

//Fade in text

gsap.set(".fade1", {
  opacity: 0,
});
gsap.set(".fade2", {
  opacity: 0,
});
gsap.set(".fadeText", {
  opacity: 0,
});
gsap.set(".fade3", {
  opacity: 0,
});
gsap.set(".fade4", {
  opacity: 0,
});
gsap.set(".fadeText2", {
  opacity: 0,
});
gsap.set(".video-con", {
  opacity: 0,
});
gsap.set(".btn", {
  opacity: 0,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".fade1",
    start: "bottom 50%",
    end: "bottom 40%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl.to(".fade1", { opacity: 1, duration: 0.5 });
tl.to(".fade2", { opacity: 1, duration: 1 });
tl.to(".fadeText", { opacity: 1, duration: 1.5 });
tl.to(".video-con", { opacity: 0.85, duration: 3 });
tl.to(".fade3", { opacity: 1, duration: 3.5 });
tl.to(".fade4", { opacity: 1, duration: 4 });
tl.to(".fadeText2", { opacity: 1, duration: 4.5 });
tl.to(".btn", { opacity: 1, duration: 5 });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".nadpisTribute",
    start: "bottom 60%",
    end: "bottom 50%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});
tl2.to(".rip", { opacity: 0, duration: 5 });

gsap.set(".tribuNadpis", {
  opacity: 0,
});

gsap.set(".tribuText", {
  opacity: 0,
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".nadpisTribute",
    start: "bottom 50%",
    end: "bottom 40%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});
tl3.to(".tribuNadpis", { opacity: 1, duration: 3 });
tl3.to(".tribuText", { opacity: 1, duration: 3 });

gsap.set(".firstLine", {
  opacity: 0,
});
gsap.set(".secondLine", {
  opacity: 0,
});
gsap.set(".thirdLine", {
  opacity: 0,
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".start-a",
    start: "bottom 90%",
    end: "bottom 85%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl5.to(".i1", { opacity: 1, duration: 0.5 });
tl5.to(".i2", { opacity: 1, duration: 0.5 });
tl5.to(".i3", { opacity: 1, duration: 0.5 });
tl5.to(".i4", { opacity: 1, duration: 0.5 });

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".start-c",
    start: "bottom 99%",
    end: "bottom 95%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl6.to(".i1", { opacity: 0, duration: 1 });
tl6.to(".i2", { opacity: 0, duration: 1 });
tl6.to(".i3", { opacity: 0, duration: 1 });
tl6.to(".i4", { opacity: 0, duration: 1 });

const tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".start-b",
    start: "bottom 90%",
    end: "bottom 85%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl7.to(".i5", { opacity: 1, duration: 0.5 });
tl7.to(".i6", { opacity: 1, duration: 0.5 });
tl7.to(".i7", { opacity: 1, duration: 0.5 });
tl7.to(".i8", { opacity: 1, duration: 0.5 });

const tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".secondLine",
    start: "bottom 30%",
    end: "bottom 25%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl8.to(".i5", { opacity: 0, duration: 0.5 });
tl8.to(".i6", { opacity: 0, duration: 0.5 });
tl8.to(".i7", { opacity: 0, duration: 0.5 });
tl8.to(".i8", { opacity: 0, duration: 0.5 });

const tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".start-c",
    start: "bottom 90%",
    end: "bottom 85%",
    scrub: 1,
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

tl9.to(".i9", { opacity: 1, duration: 0.5 });
tl9.to(".i10", { opacity: 1, duration: 0.5 });
tl9.to(".i11", { opacity: 1, duration: 0.5 });
tl9.to(".i12", { opacity: 1, duration: 0.5 });
var scroller = {
  target: document.querySelector("#scroll"),
  ease: 0.02, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};
