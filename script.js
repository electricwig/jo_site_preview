document.addEventListener('DOMContentLoaded', function () {
    console.log("JavaScript is running!");

    // Select all the navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetSection = document.querySelector(targetId); // Find the target section by its ID

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
