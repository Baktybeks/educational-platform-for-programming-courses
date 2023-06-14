let numPeople = document.querySelector('.num');
let btnPiople = document.querySelector('.button-child');
let count = 0;


btnPiople.addEventListener('click', function(e) {
    // e.preventDefault();
    count++;
    numPeople.textContent = count;
});