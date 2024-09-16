// NAVBAR SCRIPT
document.addEventListener("DOMContentLoaded", function () {
	const navbarToggler = document.querySelector(".navbar-toggler");
	const navLinks = document.querySelectorAll(".nav-link");
	const navbar = document.querySelector(".navbar");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const targetId = this.getAttribute("href");
			const targetSection = document.querySelector(targetId);
			const offsetPosition = targetSection.offsetTop - navbar.offsetHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});

			if (window.getComputedStyle(navbarToggler).display !== "none") {
				navbarToggler.click();
			}
		});
	});
});

const contactNumberInput = document.getElementById("contact-number");
const randomContactNumber = Math.floor(Math.random() * 9999) + 1; 
contactNumberInput.value = randomContactNumber;

// EMAILJS SCRIPT
(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init({
		publicKey: "bMOpUWBSnYE6ynS4K",
	});
})();

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const feedbackElement = document.getElementById("form-feedback");

       
        feedbackElement.innerHTML = '';
        feedbackElement.classList.remove('success', 'error');

        emailjs.sendForm("contact_service", "contact_form", this).then(
            () => {                
                feedbackElement.innerHTML = 'SUCCESS &#10004;'; 
                feedbackElement.classList.add('success');

                this.reset();
            },
            (error) => {                
                feedbackElement.innerHTML = 'FAILED &#10008;'; 
                feedbackElement.classList.add('error');
            }
        );
    });
};

