const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');//selects all the elements which has class name 'seat'
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;//the datatype of value is string by adding + sign it becomes a number

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');//all the selected seats are stored in the node

  const selectedSeatsCount = selectedSeats.length;//to the no. of the elements in the node

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie select event
movieSelect.addEventListener('change', e =>{
  ticketPrice = +e.target.value;
  updateSelectedCount();
});
//Seat click event
container.addEventListener('click', e =>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){//e.target gives the element when it was clicked
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }

});
