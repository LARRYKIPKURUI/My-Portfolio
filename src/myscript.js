document.addEventListener("DOMContentLoaded", function () {
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
});
