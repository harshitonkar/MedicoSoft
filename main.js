// Scroll fade-in observer
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
      }
    });
  }, { threshold: 0.08 });
  fadeEls.forEach(el => observer.observe(el));

  // Animate stats on enter
  const statNums = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(n => statsObserver.observe(n));