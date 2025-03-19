document.addEventListener('DOMContentLoaded', function() {
  let blackGradient = document.querySelector('.black-gradient');
  let aside = document.querySelector('aside');
  let aside_icon = this.documentElement.querySelector('#aside_icon');

  aside_icon.addEventListener('click', function() {
    aside.style.display = 'flex';
    blackGradient.style.display = 'block';
  });

  function addEventListeners() {
    let asideIcon = document.querySelector('.main_side_icon');
    if (asideIcon && !asideIcon.hasAttribute('data-listener')) {
      asideIcon.setAttribute('data-listener', 'true'); // Prevent multiple listeners
      asideIcon.addEventListener('click', function() {
        aside.style.display = 'flex';
        blackGradient.style.display = 'block';
      });
    }
  }

  // Initial check
  addEventListeners();
  // Observe DOM changes to detect new elements
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(mutation => {
      addEventListeners();
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Handle click on black gradient
  if (blackGradient) {
    blackGradient.addEventListener('click', function() {
      aside.style.display = 'none';
      blackGradient.style.display = 'none';
    });
  }
});
