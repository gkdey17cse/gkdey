// Function to toggle nav visibility
function openBars() {
  const nav = document.getElementById('navList');

  // Toggle display manually (as per your style)
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    document.removeEventListener('click', outsideClickListener);
  } else {
    nav.style.display = 'flex';

    // Add listener to close nav on outside click
    setTimeout(() => {
      document.addEventListener('click', outsideClickListener);
    }, 10); // Delay to avoid immediate self-closing
  }

  // Function to detect outside click
  function outsideClickListener(e) {
    const isClickInside = nav.contains(e.target) || e.target.closest('button');
    if (!isClickInside) {
      nav.style.display = 'none';
      document.removeEventListener('click', outsideClickListener);
    }
  }
}
