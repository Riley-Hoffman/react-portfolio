function updateParallax(force = 0) {
  let classes = ["scroll-to-triggered"];
  classes.forEach((cls) => {
    var elements = document.getElementsByClassName(cls);
    if (elements.length) {
      Object.keys(elements).forEach((key) => {
        var rect = elements[key].getBoundingClientRect();
        if (force || rect.top < (elements[key].dataset.distance ?? 800))
          elements[key].dataset.active = "true";
        if (
          elements[key].dataset.repeat &&
          rect.top > (elements[key].dataset.distance ?? 800)
        )
          elements[key].dataset.active = "false";
      });
    }
  });

  classes = ["🪶", "parallax", "parallax800"];
  classes.forEach((cls) => {
    var elements = document.getElementsByClassName(cls);
    if (elements.length) {
      Object.keys(elements).forEach((key) => {
        if (window.innerWidth > 800 || cls !== "parallax800") {
          var scrollDistance = document.documentElement.scrollTop;
          var scale = elements[key].dataset.speed ?? "1.5";
          var translateDistance = (parseFloat(scale) - 1) * 50;

          var rect = elements[key].parentNode.getBoundingClientRect();
          var staticTop = rect.top + scrollDistance;

          var factor = rect.height / translateDistance;
          var travel = (scrollDistance - staticTop) / factor - 50;

          elements[key].dataset.transx = elements[key].dataset.transx ?? "50";
          elements[key].dataset.transy = travel;
        }
      });
    }
  });
}

setTimeout(() => {
  updateParallax();
}, 100);

window.onscroll = () => updateParallax();