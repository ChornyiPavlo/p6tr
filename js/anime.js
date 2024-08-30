    var contact = document.getElementById('contactForm');
    if (contact) {
        contact.addEventListener('submit', function (event) {
            event.preventDefault();

            var telephone = document.querySelector('input[name="telephone"]').value;
            var email = document.querySelector('input[name="email"]').value;
            var isValid = true;

            document.getElementById('telephoneError').style.display = 'none';
            document.getElementById('emailError').style.display = 'none';

            var phoneRegex = /^\+?[0-9\s\-()]+$/;
            if (!telephone || !phoneRegex.test(telephone)) {
                document.getElementById('telephoneError').style.display = 'block';
                isValid = false;
            }
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                var successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 5000);
                this.reset();
            }
        });
    }