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