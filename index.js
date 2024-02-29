function executeChromeScripts(arg1) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: changeVideoSpeed,
      args: [arg1]
    });
  });
}

function changeVideoSpeed(speed) {
  Array.from(document.getElementsByTagName('video')).forEach(video => {
    video.playbackRate = parseFloat(speed);
  });
}

document.querySelectorAll('.btn-speed-option').forEach(button => {
  button.addEventListener('click', function() { executeChromeScripts(button.id) });
});

let buttons = document.querySelectorAll('.btn-speed-option');

for (let i = 0; i < 10; i++) {
  document.addEventListener('keyup', function(event) {
    if (event.key == i.toString() && i > -1 && i < 10) {
      buttons[i+2].click();
    }
  });
}

/*
0  0.25
1  0.50
2  0.75
3  1.00
4  1.25
5  1.50
6  1.75
7  2.00
8  2.25
9  2.50
10 2.75
11 3.00
*/