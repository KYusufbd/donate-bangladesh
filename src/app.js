// Function to get input amount
function inputAmount(id) {
    return document.getElementById(id).value;
};

// Input Amounts
const donationForNoaKhali = inputAmount('donation-for-noakhali');
const donationForFeni = inputAmount('donation-for-feni');
const aidForInjured = inputAmount('aid-for-injured');

// Buttons
const donateNoakhali = document.getElementById('donate-noakhali');
const donateFeni = document.getElementById('donate-feni');
const donateInjured = document.getElementById('donate-injured');

const historyPageButton = document.getElementById('history-page');
const donationPageButton = document.getElementById('donation-page');

// Sections
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');

// Total donated
const donatedNoakhali = parseFloat(document.getElementById('donated-noakhali').innerText);
const donatedFeni = parseFloat(document.getElementById('donated-feni').innerText);
const donatedForInjured = parseFloat(document.getElementById('donated-for-injured').innerText);

// Donate Now function
function donateNow(donationField, totalDonated) {
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);

    // Log to console for testing purpose.
        // console.log(currentBalance.toFixed(2)); // Ok!
        // console.log(donationForNoaKhali, donationForFeni, aidForInjured); // Worked well!!
        // console.log(donateNoakhali, donateFeni, donateInjured); // Worked fine.
        // console.log(donatedNoakhali, donatedFeni, donatedForInjured); // Worked fine.
};

// Page routing function - Working well
function sectionToggle(sectFrom, sectTo) {
    sectFrom.classList.replace('flex', 'hidden');
    sectTo.classList.replace('hidden', 'flex');
};

// Connection between functions and buttons

// History page button
historyPageButton.addEventListener("click", function () {
    sectionToggle(donationSection, historySection);
    historyPageButton.classList.remove('btn-outline');
    donationPageButton.classList.add('btn-outline');
});

// Donation page button
donationPageButton.addEventListener("click", function() {
    sectionToggle(historySection, donationSection);
    donationPageButton.classList.remove('btn-outline');
    historyPageButton.classList.add('btn-outline');
});


