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
    var description = "click to open the Discord App";
    var link = "https://discordapp.page.link/?link=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Fdiscord-chat-for-games%2Fid985746746%3FattemptId%3Dd2c36e44-44b2-4a9f-bb80-f023a246ffdb&utm_source=download&apn=com.discord&isi=985746746&ibi=com.hammerandchisel.discord&sd=Dein%20Ort%2C%20um%20mit%20deinen%20Communitys%20und%20Freunden%20zu%20reden.&efr=1";
} else {
    var description = "click to open Discord in your Browser";
    var link = "https://discordapp.com/users/628637707366694932";
}

document.getElementById('discord').addEventListener('click', event => {
    document.getElementById('achievement').innerHTML = `
    <div class="achievement-container">
    <div id="achievement-close">
        <svg class="achievement-icon" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
    </div>
    <a id="link" href="${link}" target="_blank">
    <h3 class="achievement-title">Discord</h3>
    <p class="achievement-description">My Discord username has been copied to your clipboard ➜ ${description}</p>
    </a>
    </div>`;
    tl.fromTo('.achievement-container', {y: 50, opacity:0}, {y: 0, opacity:1})
    copy2Clipboard("F Λ B I Λ N#7177");
    document.getElementById('achievement-close').addEventListener('click', event => {
        tl.fromTo('.achievement-container', { opacity:1}, { opacity:0, duration: 0.25})
        setTimeout(function(){
            document.getElementById('achievement').innerHTML = ``;
        }, 2000);
    })
})