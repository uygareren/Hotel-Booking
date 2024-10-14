document.addEventListener('DOMContentLoaded', function() {
    // Initialize Check-in date picker
    flatpickr("#datepicker1", {
        dateFormat: "m/d/Y",  // Format: month/day/year
    });

    // Initialize Check-out date picker
    flatpickr("#datepicker2", {
        dateFormat: "m/d/Y",  // Format: month/day/year
    });
});