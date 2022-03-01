function copy2Clipboard(text) {
    ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
}

document.getElementById('discord').addEventListener('click', event => {
    document.getElementById('notification').innerHTML = `
    <div class="notification-container">
    <h3 class="notification-title">Discord</h3>
    <p class="notification-description">My Discord username has been copied to your clipboard. (Fahrbahn#7177)</p>
    <a href="https://discordapp.com/users/628637707366694932" target="_blank" class="btn-small btn-primary">Open Discord</a>
    <a id="notification-close" class="btn-small btn-secondary">close</a>
    </div>`;
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1})
    copy2Clipboard("Fahrbahn#7177");
    document.getElementById('notification-close').addEventListener('click', event => {
        tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('notification').innerHTML = ``;
        }, 2000);
    })
})