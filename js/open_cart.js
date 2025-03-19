document.addEventListener('DOMContentLoaded', function() {
    let cartIcon = document.querySelector('.cart_icon');
    let cart = document.querySelector('.cart-popup'); // Add the missing dot (.)
    let closeIcon = document.querySelector('.close-btn'); // Select the close button correctly
    let cart_icon = this.documentElement.querySelector('#cart_icon');

    cart_icon.addEventListener('click', function() {
        cart.style.display = 'flex';
    });

    if (cart && cartIcon && closeIcon) {
        cartIcon.addEventListener('click', function() {
            cart.style.display = 'flex';
        });

        closeIcon.addEventListener('click', function() {
            cart.style.display = 'none'; // Hide cart when close button is clicked
        });
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

});
