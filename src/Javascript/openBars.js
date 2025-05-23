// Global scroll spy setup once
let scrollSpyInitialized = false;

function openBars() {
  const nav = document.getElementById('navList');
  const navLinks = nav.querySelectorAll('a');

  // Toggle nav display
  if (nav.classList.contains('flex')) {
    nav.classList.remove('flex');
    nav.classList.add('hidden');
    document.removeEventListener('click', outsideClickListener);
  } else {
    nav.classList.remove('hidden');
    nav.classList.add('flex');

    // Add outside click listener with slight delay
    setTimeout(() => {
      document.addEventListener('click', outsideClickListener);
    }, 10);

    // Smooth scroll on nav link click
    navLinks.forEach(link => {
      link.onclick = function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60, // offset for sticky headers if any
            behavior: 'smooth'
          });
          nav.classList.remove('flex');
          nav.classList.add('hidden');
          document.removeEventListener('click', outsideClickListener);
        }
      };
    });

    // Scroll spy — only set up once
    if (!scrollSpyInitialized) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              navLinks.forEach(link => {
                link.classList.toggle(
                  'text-teal-600',
                  link.getAttribute('href').slice(1) === entry.target.id
                );
              });
            }
          });
        },
        { threshold: 0.6 }
      );

      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) observer.observe(section);
      });

      scrollSpyInitialized = true;
    }
  }

  // Click outside closes nav
  function outsideClickListener(e) {
    const isClickInside = nav.contains(e.target) || e.target.closest('button');
    if (!isClickInside) {
      nav.classList.remove('flex');
      nav.classList.add('hidden');
      document.removeEventListener('click', outsideClickListener);
    }
  }
}
