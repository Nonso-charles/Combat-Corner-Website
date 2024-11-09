  // Add "complete" class when inputs are filled
  document.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', function() {
          if (this.value.trim() !== '') {
              this.classList.add('complete');
          } else {
              this.classList.remove('complete');
          }
      });
  });

  // Slide-in effect when form scrolls into view
  window.addEventListener('scroll', () => {
      const formContainer = document.querySelector('.form-container');
      const formPosition = formContainer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (formPosition < screenPosition) {
          formContainer.classList.add('appear');
      }
  });