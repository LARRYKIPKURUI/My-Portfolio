document.addEventListener("DOMContentLoaded", function () {
    // ScrollSpy and Offcanvas hide functionality
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                let offcanvas = document.getElementById('offcanvasDarkNavbar');
                let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                bsOffcanvas.hide();

                setTimeout(() => {
                    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 50;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        });
    });

    // Resume Download functionality
    const downloadBtn = document.getElementById("downloadResume");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior (to avoid previous bug)

            let link = document.createElement("a");
            link.style.display = "none"; // Hide the link element
            link.href = "/assets/resume.pdf"; // File path for the resume
            link.setAttribute("download", "Larry_Kipkurui_Resume.pdf"); // Suggested filename for download by default
            document.body.appendChild(link);

            link.click(); // Trigger the download

            document.body.removeChild(link); // Clean up
        });
    }

    document.getElementById("sendFeedback").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default behavior of <a> 
    
        let email = "someone@example.com";
        let subject = "Feedback";
        let body = "Your message here";
    
        // Encode URI components to handle spaces and special characters. and send as whole
        let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        window.location.href = mailtoLink; // Redirects to the default email app
    });
    
});
