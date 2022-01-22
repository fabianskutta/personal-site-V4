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