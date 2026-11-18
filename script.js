/* =========================
   STUDIO. - JAVASCRIPT
========================= */

// Select all navigation links
const navigationLinks = document.querySelectorAll('.navigation a');

// Smooth navigation and active link feedback
navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigationLinks.forEach(item => {
            item.classList.remove('active');
        });

        link.classList.add('active');
    });
});

// Booking button interaction
const bookingButtons = document.querySelectorAll(
    '.header-button, .hero .primary-button'
);

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Visitor is interested in booking!');
    });
});

// Welcome message in the browser console
console.log('STUDIO. website loaded successfully!');


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.querySelector('#booking-form');

if (bookingForm) {

    const dateInput = document.querySelector('#date');
    const message = document.querySelector('#booking-message');

    // Prevent selecting dates in the past
    const today = new Date();
    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split('T')[0];

    dateInput.min = localToday;

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const formData = new FormData(bookingForm);

        const booking = {
            service: formData.get('service'),
            date: formData.get('date'),
            time: formData.get('time'),
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        message.textContent =
            `Tack ${booking.name}! Din bokningsförfrågan för ${booking.service} den ${booking.date} kl. ${booking.time} har registrerats i demonstrationsläget.`;

        bookingForm.reset();

    });

}
