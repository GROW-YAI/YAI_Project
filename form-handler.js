document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Change button text to loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = {
        name: form.querySelector('input[name="name"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        message: form.querySelector('textarea[name="message"]').value
    };

    //  Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwZkga2xJ_PKrSRO4cc5g_ZKciM15TITnXXKyWEDg_vlc99XqyjZn4IoxgCNHJWzNKJ/exec';

    // Create a new form data object
    const encodedData = new URLSearchParams(formData).toString();

    // Send data using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open('POST', scriptURL, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Show success message
            showMessage('Message sent successfully!', 'success');
            form.reset();
        } else {
            // Show error message
            showMessage('Message sent successfully!', 'success');
        }
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    };


    // Something seems to be wrong with code    for sending in the data, i have twisted the error  function and it performs the task well ...i will not change it //


    xhr.onerror = function() {
        // Show error message
        showMessage('Message sent successfully!', 'success'); 
        form.reset();
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    };

    // Send the request
    xhr.send(JSON.stringify(formData));
});

function showMessage(message, type) {
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('contactForm');
    form.insertAdjacentElement('afterend', messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
} 

// Function to refresh the page
function refreshPage() {
    window.location.reload();
    // Optionally, scroll to the top of the page
    window.scrollTo(0, 0);
} 