var x = window.matchMedia("(max-width: 900px)")

function copy2Clipboard(text) {
    ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
}

if (x.matches) {
    var btn = "Open the Discord App";
    var link = "https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3FattemptId%3Dd2c36e44-44b2-4a9f-bb80-f023a246ffdb&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Dein%20Ort%2C%20um%20mit%20deinen%20Communitys%20und%20Freunden%20zu%20reden.&efr=1";
} else {
    var btn = "Open Discord in your Browser";
    var link = "https://discordapp.com/users/628637707366694932";
}

document.getElementById('discord').addEventListener('click', event => {
    document.getElementById('notification').innerHTML = `
    <div class="notification-container">
    <h3 class="notification-title">Discord</h3>
    <p class="notification-description">My Discord username has been copied to your clipboard</p>
    <a href="${link}" target="_blank" class="btn-small btn-primary">${btn}</a>
    <a id="notification-close" class="btn-small btn-secondary">close</a>
    </div>`;
    tl.fromTo('.notification-container', {y: 50, opacity:0}, {y: 0, opacity:1})
    copy2Clipboard("F Λ B I Λ N#7177");
    document.getElementById('notification-close').addEventListener('click', event => {
        tl.fromTo('.notification-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('notification').innerHTML = ``;
        }, 2000);
    })
})