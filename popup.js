function removeAdds() {
  setInterval(function () {
    const defined = v => v !== null && v !== undefined;
    const ad = [...document.querySelectorAll(".ad-showing")][0];
    if (defined(ad)) {
      const video = document.querySelector("video");
      if (defined(video)) {
        video.currentTime = video.duration;
      }
    }
    var skip = document.getElementsByClassName(
      "ytp-ad-text ytp-ad-skip-button-text"
    );
    if (skip != undefined && skip.length > 0) {
      skip[0].click();
    }
  }, 500);
  return function () {
    clearTimeout(timeout);
  };
}

removeAdds();
