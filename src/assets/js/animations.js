const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.hero-container', {y: 50, opacity:0}, {y: 0, opacity:1})

tl.fromTo('.fa-discord', {x: 50, opacity:0, rotation: -45}, {x: 0, opacity:1, rotation: 0}, "-=0.40")
tl.fromTo('.fa-github', {x: 50, opacity:0, rotation: -45}, {x: 0, opacity:1, rotation: 0}, "-=0.40")
tl.fromTo('.fa-dribbble', {x: 50, opacity:0, rotation: -45}, {x: 0, opacity:1, rotation: 0}, "-=0.40")
tl.fromTo('.fa-envelope', {x: 50, opacity:0, rotation: -45}, {x: 0, opacity:1, rotation: 0}, "-=0.40")

tl.fromTo('.icon-scroll', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.bar', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")