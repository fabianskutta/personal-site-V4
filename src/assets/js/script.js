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

document.head = document.head || document.getElementsByTagName('head')[0];

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
    document.title = 'Fabian • fabian.lol'; 
  }
})