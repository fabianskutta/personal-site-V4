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