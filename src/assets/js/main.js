//CSS
import './../scss/main.scss';

//JS
var modal = document.getElementById("popup");
var span = document.getElementsByClassName("close")[0];


function achievements() {
  document.getElementById("popup").style.display = "block";
  var m1 = localStorage.getItem('achievement-1');
  var m2 = localStorage.getItem('achievement-2');
  var m3 = localStorage.getItem('achievement-3');
  var c = localStorage.getItem('on_load_counter');
  if (m1 == "true") {
      document.getElementById('achievement-1').innerHTML = `
      <div class="popup-item-container owned">
      <svg xmlns="http://www.w3.org/2000/svg" class="popup-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                        </svg>
                        <p>Lightmode</p>
                        </div>`;
    }
    if (m2 == "true") {
      document.getElementById('achievement-2').innerHTML = `
      <div class="popup-item-container owned">
      <svg xmlns="http://www.w3.org/2000/svg" class="popup-icon" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 128c-81.9 0-145.7 48.8-224 128 67.4 67.7 124 128 224 128 99.9 0 173.4-76.4 224-126.6C428.2 198.6 354.8 128 256 128zm0 219.3c-49.4 0-89.6-41-89.6-91.3 0-50.4 40.2-91.3 89.6-91.3s89.6 41 89.6 91.3c0 50.4-40.2 91.3-89.6 91.3z"/><path d="M256 224c0-7.9 2.9-15.1 7.6-20.7-2.5-.4-5-.6-7.6-.6-28.8 0-52.3 23.9-52.3 53.3s23.5 53.3 52.3 53.3 52.3-23.9 52.3-53.3c0-2.3-.2-4.6-.4-6.9-5.5 4.3-12.3 6.9-19.8 6.9-17.8 0-32.1-14.3-32.1-32z"/>
      </svg>
                        <p>10 Visits</p>
                        </div>`;
    }
    if (m3 == "true") {
      document.getElementById('achievement-3').innerHTML = `
      <div class="popup-item-container owned">
      <svg xmlns="http://www.w3.org/2000/svg" class="popup-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.566 17.842c-.945 2.462-3.678 4.012-6.563 4.161.139-2.772 1.684-5.608 4.209-6.563l.51.521c-1.534 1.523-2.061 2.765-2.144 3.461.704-.085 2.006-.608 3.483-2.096l.505.516zm-1.136-11.342c-1.778-.01-4.062.911-5.766 2.614-.65.649-1.222 1.408-1.664 2.258 1.538-1.163 3.228-1.485 5.147-.408.566-1.494 1.32-3.014 2.283-4.464zm5.204 17.5c.852-.44 1.61-1.013 2.261-1.664 1.708-1.706 2.622-4.001 2.604-5.782-1.575 1.03-3.125 1.772-4.466 2.296 1.077 1.92.764 3.614-.399 5.15zm11.312-23.956c-.428-.03-.848-.044-1.261-.044-9.338 0-14.465 7.426-16.101 13.009l4.428 4.428c5.78-1.855 12.988-6.777 12.988-15.993v-.059c-.002-.437-.019-.884-.054-1.341zm-5.946 7.956c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
      </svg>
                        <p>Rocket launched!</p>
                        </div>`;
    }
    if (m1 == "true" && m2 == "true" && m3 == "true") {
      document.getElementById('g').innerHTML = `You already know my website very well! You have found all achievements.`;
    }
    if (m1 == "true" && m2 == "false" && m3 == "true") {
      document.getElementById('g').innerHTML = `In order to get the latest achievement, you may need to visit my website more often. Your Visits: ${c}`;
    }
    }

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Animations

const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.hero-container', {y: 50, opacity:0}, {y: 0, opacity:1})

tl.fromTo('.socialmedia', {y: 30, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.icon-scroll', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.bar', {y: 50, opacity:0}, {y: 0, opacity:1}, "-=0.30")

tl.fromTo('.nav', {x: -50, opacity:0}, {x: 0, opacity:1}, "-=0.60")

// API GET

axios.get('https://raw.githubusercontent.com/fabianskutta/personal-site/main/package.json')
    .then(res => {
    let data = res.data;
    document.getElementById('version').innerHTML = data.version;
    });

axios.get('https://api.github.com/repos/fabianskutta/personal-site/commits?per_page=1')
    .then(res => {
    let data = res.data[0];
    document.getElementById('commit').innerHTML = data.sha.substr(0, 7);
    document.getElementById('commit-link').href = data.html_url;
    });

axios.get('https://api.fabian.lol/?about')
    .then(res => {
    let data = res.data;
    document.getElementById('about-text').innerHTML = data.about;
    });

axios.get('https://api.github.com/users/fabianskutta/repos?sort=updated&type=sources&per_page=4')
    .then(res => {
    let data = res.data;
    data.forEach((repo, i) => {
      if (!repo.fork) {
        let desc = repo.description;
        document.getElementById('repos').innerHTML += `<div class="git-item">
        <a href="${repo.html_url}" target="_blank">
            <div class="git-item-container">
                <h3 class="git-title">${repo.name}</h3>
                <p class="git-description">${desc}</p>
                <div class="git-lang">
                    <i class="fas fa-circle" style="color:${getLanguageColor(repo.language).color}"></i> ${repo.language}
                </div>
                <div class="git-stars">
                    ${repo.stargazers_count} <i class="fas fa-star" style="color:#ffd43b"></i>
                </div>
            </div>
        </a>
    </div>`;
  }
});
});

function updateStatus() {
  axios.get('https://api.lanyard.rest/v1/users/628637707366694932')
    .then(res => {
      let data = res.data.data;
      if (data.listening_to_spotify) {
        let artist = data.spotify.artist.replace(";",",");
        document.getElementById('spotify').innerHTML = `<i class="fab fa-spotify" style="color:#1DB954"></i> <a class="noAStyle" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}">${data.spotify.song} by <i>${artist}</i></a>`;
      } else {
        document.getElementById('spotify').innerHTML = ``;
      }
      if (data.discord_status === "online") {
        document.getElementById('status-icon').setAttribute('style', 'color:' + '#43B581' + ';');
        document.getElementById('status').innerHTML = "Online";
      }
      if (data.discord_status === "idle") {
        document.getElementById('status-icon').setAttribute('style', 'color:' + '#F5A519' + ';');
        document.getElementById('status').innerHTML = "Idle";
      }
      if (data.discord_status === "dnd") {
        document.getElementById('status-icon').setAttribute('style', 'color:' + '#E84144' + ';');
        document.getElementById('status').innerHTML = "Do not disturb";
      }
      if (data.discord_status === "offline") {
        document.getElementById('status-icon').setAttribute('style', 'color:' + '#747F8D' + ';');
        document.getElementById('status').innerHTML = "Offline";
        document.getElementById('status-icon').classList.remove("fa-mobile");
        document.getElementById('status-icon').classList.add("fa-circle");
      }
      if (data.active_on_discord_mobile && !data.active_on_discord_desktop) {
        document.getElementById('status-icon').classList.remove("fa-circle");
        document.getElementById('status-icon').classList.add("fa-mobile");
      } else if (data.active_on_discord_desktop) {
        document.getElementById('status-icon').classList.remove("fa-mobile");
        document.getElementById('status-icon').classList.add("fa-circle");
      }
    });
}

axios.get('https://api.dribbble.com/v2/user/shots?access_token=b28d431276202a7211d092c641170c274d840ed6877eef6ae357d06563953edc&per_page=4')
    .then(res => {
    let data = res.data;
    data.forEach((data, i) => {
        document.getElementById('shots').innerHTML += `
        <a href="${data.html_url}" target="_blank">
        <div class="dribbble-item">
            <div class="dribbble-item-container">
                <h3 class="dribbble-title">${data.title}</h3>
                <img src="${data.images.hidpi}" alt="">
        </div>
        </a>`;
});
});

updateStatus()
setInterval(updateStatus, 15000);

// Discord

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

// Lang Color

function getLanguageColor(language) {
    language = languages.find(item => item.name === language);
    if (language) {
        return language;
    } else {
        return {
            color: "#333"
        }
    }
}


var languages = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "SCSS",
        color: "#c6538c",
    },

    {
        name: "JavaScript",
        color: "#f1e05a",
    },
    {
        name: "PHP",
        color: "#4F5D95",
    }
]

// Notification

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

// Scripts

function functionforscroll (id){
    var reqId = "#"+id;
    window.scrollTo(0, $(reqId).offset().top-120);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

// change title when another tab is opened (inspired by https://bitpunk.de/)
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    var randomElement = get_random(['😭 I miss you...','👌 Reingeguckt', '(4) Matches 🔥'])
    var newtitle = `${randomElement} • fabian.lol`;
    document.title = newtitle;
  } else {
    document.title = 'Fabian Skutta • fabian.lol'; 
  }
})

console.info("Hey! Cool that you want to take a closer look at my website. You can find the source code here: https://short.fabian.lol/lb1")

// Scroll

// https://codepen.io/BraisC/pen/mxVwVm

// Cache selectors
var topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()-500,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active-link")
     .end().filter("[href='#"+id+"']").parent().addClass("active-link");
});

// Theme

var randomcolor = get_random(['theme1','theme2', 'theme3', 'theme4']);
var color = randomcolor;
document.getElementsByTagName( 'html' )[0].classList.add(randomcolor);

var theme = localStorage.getItem("theme");
if (theme == "light") {
    lightmode();
} else {
    darkmode();
}

document.getElementById('theme').addEventListener('click', event => {
    if (document.getElementsByTagName( 'html' )[0].classList.contains('lightmode')) {
        darkmode();
    } else {
        lightmode();
        lightmodenotification();
    }
})

function lightmode () {
    document.getElementsByTagName( 'html' )[0].classList.add("lightmode")
        document.getElementById('theme').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="mode-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
    </svg>`;
    localStorage.setItem("theme", "light");
    favicon();
    }

    function darkmode () {
    document.getElementsByTagName( 'html' )[0].classList.remove("lightmode")
        document.getElementById('theme').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="mode-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>`;
    localStorage.setItem("theme", "dark");
    favicon();
}

document.getElementById('color').addEventListener('click', event => {
    theme = localStorage.getItem("theme");
    if (document.getElementsByTagName( 'html' )[0].classList.contains('theme1')) {
        document.getElementsByTagName( 'html' )[0].classList.remove("theme1");
        document.getElementsByTagName( 'html' )[0].classList.add("theme2");
        color = "theme2";
        favicon();
    } else {
        if (document.getElementsByTagName( 'html' )[0].classList.contains('theme2')) {
            document.getElementsByTagName( 'html' )[0].classList.remove("theme2");
            document.getElementsByTagName( 'html' )[0].classList.add("theme3");
            color = "theme3";
            favicon();
        } else {
            if (document.getElementsByTagName( 'html' )[0].classList.contains('theme3')) {
                document.getElementsByTagName( 'html' )[0].classList.remove("theme3");
                document.getElementsByTagName( 'html' )[0].classList.add("theme4");
                color = "theme4";
                favicon();
            } else {
                if (document.getElementsByTagName( 'html' )[0].classList.contains('theme4')) {
                    document.getElementsByTagName( 'html' )[0].classList.remove("theme4");
                    document.getElementsByTagName( 'html' )[0].classList.add("theme1");
                    color = "theme1";
                    favicon();
                }
            }
        }
    }
})

function favicon() {
    theme = localStorage.getItem("theme");
    if (theme == "light") {
        changeFavicon(`https://cdn.fabian.lol/logos/favicon-${color}-light.png`);
    } else {
        changeFavicon(`https://cdn.fabian.lol/logos/favicon-${color}.png`);
    }
}