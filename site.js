// Emberstones Games: mobile menu and the home hero's rising embers.
(function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var box = document.querySelector(".embers");
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (box && !calm) {
    for (var i = 0; i < 18; i++) {
      var e = document.createElement("i");
      var size = 3 + Math.round(Math.random() * 2) * 2;
      e.style.left = (Math.random() * 100).toFixed(1) + "%";
      e.style.width = e.style.height = size + "px";
      e.style.animationDuration = (6 + Math.random() * 7).toFixed(1) + "s";
      e.style.animationDelay = (-Math.random() * 12).toFixed(1) + "s";
      box.appendChild(e);
    }
  }
})();
