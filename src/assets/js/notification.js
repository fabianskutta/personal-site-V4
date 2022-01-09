var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
document.getElementById('visits').innerHTML = n;

if (n == 10) {
    document.getElementById('notification').innerHTML = `
    <div class="notification-container">
    <h3 class="notification-title">10 visits</h3>
    <p class="notification-description">You're visiting my website for the 10th time. Wooooooow that's crazy!</p>
    <a id="notification-close" class="btn-small btn-primary">close</a>
    </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=3.00")
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
            <h3 class="notification-title">Welcome!</h3>
            <p class="notification-description">I don't use any kind of cookies, but your browser's local Storage to save some data. These remain locally on your device. But now take a look around. :)</p>
            <a id="notification-close" class="btn-small btn-primary">Ok</a>
            <a id="what-data" class="btn-small btn-secondary">What data is saved?</a>
            </div>`;
    const tl = gsap.timeline({defaults: {duration: 0.75}})
    document.getElementById('what-data').addEventListener('click', event => {
        document.getElementById('notification').innerHTML = `
        <div class="notification-container">
        <h3 class="notification-title">What data is saved?</h3>
        <p class="notification-description">I don't use any kind of cookies, but your browser's local Storage to save some data. These remain locally on your device. The following data is saved:
        </p>
        <div class="notification-data">
            <li>Your Visits: ${localStorage.getItem('on_load_counter')}</li>
            <li>Selected Theme: ${localStorage.getItem('theme')}</li>
        </div>
        <a id="notification-close" class="btn-small btn-primary">Ok</a>
        </div>
        </div>`;
        document.getElementById('notification-close').addEventListener('click', event => {
            tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
            setTimeout(function(){
                document.getElementById('notification').innerHTML = ``;
            }, 1000);
        })
    })
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=3.00")
    document.getElementById('notification-close').addEventListener('click', event => {
        tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('notification').innerHTML = ``;
        }, 1000);
    })
}

function lightmodenotification() {
    var l = localStorage.getItem('first_time_lightmode');
    if (l === null) {
        localStorage.setItem("first_time_lightmode", false);
        document.getElementById('notification').innerHTML = `
        <div class="notification-container">
        <h3 class="notification-title">Light Mode</h3>
        <p class="notification-description">You discovered the light side of my website. But only to try it out, right? :)</p>
        <a id="backtodark" class="btn-small btn-primary">Back to Dark Mode</a>
        <a id="notification-close" class="btn-small btn-secondary">close</a>
        </div>`;
        tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1}, "+=1.00")
        document.getElementById('notification-close').addEventListener('click', event => {
            tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
            setTimeout(function(){
                document.getElementById('notification').innerHTML = ``;
            }, 1000);
        })
        document.getElementById('backtodark').addEventListener('click', event => {
            darkmode();
            tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
                    setTimeout(function(){
                        document.getElementById('notification').innerHTML = ``;
                    }, 1000);
        })
    }
}