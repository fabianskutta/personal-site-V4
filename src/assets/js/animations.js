const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.hero-container', {y: 50, opacity:0}, {y: 0, opacity:1})

tl.fromTo('.socialmedia', {y: 30, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.icon-scroll', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.bar', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.nav', {x: -50, opacity:0}, {x: 0, opacity:1}, "-=0.60")