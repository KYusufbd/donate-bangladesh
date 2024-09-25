// Input Amounts

const donationForNoaKhali = document.getElementById('donation-for-noakhali');
const donationForFeni = document.getElementById('donation-for-feni');
const aidForInjured = document.getElementById('aid-for-injured');

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
const donatedNoakhali = document.getElementById('donated-noakhali');
const donatedFeni = document.getElementById('donated-feni');
const donatedForInjured = document.getElementById('donated-for-injured');

// Donate Now function
function donateNow(input, totalDonated) {
    const balanceDisplay = document.getElementById('current-balance');
    const balanceAmount = parseFloat(document.getElementById('current-balance').innerText);
    const inputAmount = input.value;
    
    if (!typeof(inputAmount) == "number" || inputAmount < 1) {
        alert('Please input a valid number!');
    }

    else if (inputAmount > balanceAmount) {
        alert('You don\'t have sufficient balance!');
    }

    else {
        const currentBalance = balanceAmount - inputAmount;
        balanceDisplay.innerText = `${currentBalance.toFixed(2)} BDT`;

        const donatedAmount = parseFloat(totalDonated.innerText);
        const newAmount = (parseFloat(donatedAmount) + parseFloat(inputAmount));
        totalDonated.innerText = `${newAmount.toFixed(2)} BDT`;
        input.value = '';
    }
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

// Donate for Noakhali button
donateNoakhali.addEventListener('click', function(event) {
    event.preventDefault();
    donateNow(donationForNoaKhali, donatedNoakhali);
});

// Donate for Feni button
donateFeni.addEventListener('click', function(event) {
    event.preventDefault();
    donateNow(donationForFeni, donatedFeni);
});

// Donate for injured in quota movement button
donateInjured.addEventListener('click', function(event) {
    event.preventDefault();
    donateNow(aidForInjured, donatedForInjured);
});


// To start Tailwind CLI build process: 
// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch