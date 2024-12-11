function handleYes() {
    // Redirect to page2.html when the "Yes" button is clicked
    document.body.innerHTML = `
        <div id="page2">
            <h1>I know you since so long now and I know that you love watching sunsets.</h1>
            <p>So, can we see the sunset of 12th December 2024, that is Thursday, together?</p>
            <button onclick="goToPage3()">Yes</button>
            <button onclick="showPopup()">No</button>
        </div>

        <div id="popup" class="hidden">
            <p>Oops! Please try again. 😊</p>
            <button onclick="hidePopup()">Okay</button>
        </div>
    `;
}

function handleNo() {
    // Show the "No" popup
    document.getElementById('popup').classList.remove('hidden');
}

function showPopup() {
    // Show a retry popup if "No" is clicked
    document.getElementById('popup').classList.remove('hidden');
}

function hidePopup() {
    // Hide the popup
    document.getElementById('popup').classList.add('hidden');
}

function goToPage3() {
    // Redirect to the thank-you page
    document.body.innerHTML = `
        <div id="page3">
            <h1>Thank you!</h1>
            <p>Looking forward to the best sunset of my life, knowing you’ll be beside me. 😊</p>
            <p>Contact me: Instagram - yash.bajaj.167 | Snapchat - yash_bajaj123 | Mobile: +91 8689855440</p>
        </div>
    `;
}
