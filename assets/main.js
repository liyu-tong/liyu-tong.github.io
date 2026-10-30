/* 个人主页交互：滚动阴影、区块入场动画、导航高亮 */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  // 滚动进场
  var targets = document.querySelectorAll(
    ".hero-text, .hero-photo, .about-grid > *, .proj, .skill, .contact"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }

  // 滚动状态：顶部阴影 + 当前区块高亮
  function onScroll() {
    nav.classList.toggle("on", window.scrollY > 12);

    var pos = window.scrollY + 120;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) { current = sec.id; }
    });
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 平滑滚动（兼容不支持 scroll-behavior 的浏览器）
  links.forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var el = document.querySelector(a.getAttribute("href"));
      if (!el) { return; }
      ev.preventDefault();
      window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    });
  });

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
})();
