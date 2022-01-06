var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.getElementById('visits').innerHTML = n;

if (n == 10) {
    document.getElementById('achievement').innerHTML = `
    <div class="achievement-container">
    <div id="achievement-close">
        <svg class="achievement-icon" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
    </div>
    <h3 class="achievement-title">10 visits</h3>
    <p class="achievement-description">You're visiting this website for the 10th time.</p>
    </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    tl.fromTo('.achievement-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=5.00")
    document.getElementById('achievement-close').addEventListener('click', event => {
        tl.fromTo('.achievement-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('achievement').innerHTML = ``;
        }, 2000);
    })
}

if (n == 1) {
    document.getElementById('achievement').innerHTML = `
    <div class="achievement-container">
    <div id="achievement-close">
        <svg class="achievement-icon" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
    </div>
    <h3 class="achievement-title">Welcome!</h3>
    <p class="achievement-description">You're visiting this website for the 1st time.</p>
    </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    tl.fromTo('.achievement-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=5.00")
    document.getElementById('achievement-close').addEventListener('click', event => {
        tl.fromTo('.achievement-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('achievement').innerHTML = ``;
        }, 2000);
    })
}

function lightmodeachievement() {
    var l = localStorage.getItem('first_time_lightmode');
    if (l === null) {
        localStorage.setItem("first_time_lightmode", false);
        document.getElementById('achievement').innerHTML = `
        <div class="achievement-container">
        <div id="achievement-close">
            <svg class="achievement-icon" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
        </div>
        <h3 class="achievement-title">Light Mode</h3>
        <p class="achievement-description">You discovered the light side of this website.</p>
        </div>`;
        tl.fromTo('.achievement-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=1.00")
        document.getElementById('achievement-close').addEventListener('click', event => {
            tl.fromTo('.achievement-container', { opacity:1}, { opacity:0, duration: 0.25})
            setTimeout(function(){
                document.getElementById('achievement').innerHTML = ``;
            }, 2000);
        })
    }
}