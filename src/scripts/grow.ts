// Signature motion: the scale bars grow once when their list enters the viewport.
// Without scripts or with reduced motion the bars are simply full length (CSS gates on .js and .grow-ready).
const lists = document.querySelectorAll<HTMLElement>("[data-grow]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-grown");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.2 });
  lists.forEach((el) => {
    el.classList.add("grow-ready");
    io.observe(el);
  });
}
