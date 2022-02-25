var a1 = localStorage.getItem('achievement-1');
if (a1 === null) {
    localStorage.setItem("achievement-1", false)
}

var a2 = localStorage.getItem('achievement-2');
if (a2 === null) {
    localStorage.setItem("achievement-2", false)
}

var a3 = localStorage.getItem('achievement-3');
if (a3 === null) {
    localStorage.setItem("achievement-3", false)
}



var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);

if (n == 10) {
    localStorage.setItem("achievement-2", true);
    document.getElementById('notification').innerHTML = `
    <div class="notification-container">
    <h3 class="notification-title">10 visits</h3>
    <p class="notification-description">You're visiting my website for the 10th time. Wooooooow that's crazy!</p>
    <a onclick="achievements()" id="achievements-btn" class="btn-small btn-primary">View achievements</a>
    <a id="notification-close" class="btn-small btn-secondary">close</a>
    </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=2.00")
    document.getElementById('notification-close').addEventListener('click', event => {
        tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('notification').innerHTML = ``;
        }, 1000);
    })
}

if (n == 1) {
    localStorage.setItem("theme", "dark");
    document.getElementById('notification').innerHTML = `
    <div class="notification-container">
            <h3 class="notification-title">Welcome! It's not about cookies.</h3>
            <p class="notification-description">There are various achievements that you can get on my website. Have fun searching! :)</p>
            <a onclick="achievements()" id="achievements-btn" class="btn-small btn-primary">View achievements</a>
            <a id="notification-close" class="btn-small btn-secondary">close</a>
            </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=2.00")
    document.getElementById('notification-close').addEventListener('click', event => {
        tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('notification').innerHTML = ``;
        }, 1000);
    })
}

function lightmodenotification() {
    var l = localStorage.getItem('achievement-1');
    if (l == "false") {
        localStorage.setItem("achievement-1", true);
        document.getElementById('notification').innerHTML = `
        <div class="notification-container">
        <h3 class="notification-title">Light Mode</h3>
        <p class="notification-description">You discovered the light side of my website. But only to try it out, right? :)</p>
        <a onclick="achievements()" id="achievements-btn" class="btn-small btn-primary">View achievements</a>
        <a id="notification-close" class="btn-small btn-secondary">close</a>
        </div>`;
        tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=1.00")
        document.getElementById('notification-close').addEventListener('click', event => {
            tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
            setTimeout(function(){
                document.getElementById('notification').innerHTML = ``;
            }, 1000);
        })
    }
}

document.getElementById("rocket-btn").onclick = function() {
    var b = localStorage.getItem('achievement-3');
    if (b == "false") {
        localStorage.setItem("achievement-3", true);
        document.getElementById('notification').innerHTML = `
        <div class="notification-container">
        <h3 class="notification-title">Rocket launched!</h3>
        <p class="notification-description">You launched the rocket to get back to the top.</p>
        <a onclick="achievements()" id="achievements-btn" class="btn-small btn-primary">View achievements</a>
        <a id="notification-close" class="btn-small btn-secondary">close</a>
        </div>`;
        tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=1.00")
        document.getElementById('notification-close').addEventListener('click', event => {
            tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
            setTimeout(function(){
                document.getElementById('notification').innerHTML = ``;
            }, 1000);
        })
    }
}