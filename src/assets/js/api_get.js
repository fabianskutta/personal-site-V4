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