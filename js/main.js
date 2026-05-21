(function () {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const joinForm = document.getElementById("joinForm");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const counters = document.querySelectorAll(".stat-num[data-to]");
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.to, 10);
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObs.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );
  counters.forEach((c) => counterObs.observe(c));

  if (joinForm) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = joinForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = "Жіберілді! ✓";
      btn.disabled = true;
      joinForm.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
      }, 3000);
    });
  }

  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(24px)";
    heroContent.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    requestAnimationFrame(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    });
  }
})();
