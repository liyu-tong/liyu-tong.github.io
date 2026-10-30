/* 个人主页交互：滚动进场、导航高亮与阴影、锚点平滑滚动 */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var anchors = links.filter(function (a) {
    return a.getAttribute("href").charAt(0) === "#";
  });
  var sections = anchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  // ---------- 滚动进场（同组元素错开出现）----------
  var targets = document.querySelectorAll(
    ".intro-text, .intro-photo, .about-grid > *, .skill-panel, .cta-inner, .contact, .proj, .next-band"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var siblings = Array.prototype.slice.call(e.target.parentNode.children);
        var idx = siblings.indexOf(e.target);
        e.target.style.transitionDelay = Math.min(idx, 4) * 90 + "ms";
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }

  // ---------- 滚动状态 ----------
  function onScroll() {
    if (nav) { nav.classList.toggle("on", window.scrollY > 12); }

    var pos = window.scrollY + 140;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) { current = sec.id; }
    });
    anchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- 锚点平滑滚动 ----------
  anchors.forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var el = document.querySelector(a.getAttribute("href"));
      if (!el) { return; }
      ev.preventDefault();
      window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
    });
  });

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
