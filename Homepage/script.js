function searchBooks() {
    const query = document.getElementById('search').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement search functionality here
    } else {
        alert('Please enter a search term.');
    }
}
    const queryForm = document.getElementById('queryForm');
    const queryFormElement = document.getElementById('queryFormElement');

    function openForm() {
        queryForm.style.display = 'block'; // Show the form
    }

    queryFormElement.onsubmit = function(event) {
        event.preventDefault(); // Prevent page refresh
        // Here, you can handle the form submission (e.g., send data to the server)

        alert('Your query has been submitted!'); // Placeholder for actual submission
        closeForm(); // Close the form after submission
    };

    function closeForm() {
        queryForm.style.display = 'none'; // Hide the form
    }
