const total=document.getElementById('total');
const count=document.getElementById('count');
const SelectMovie=document.getElementById('movie');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const container=document.querySelector(".container");

populateUI();

let price=parseInt(SelectMovie.value);

const SavedMoviedata=(Movieindex,MoviePrice) => {
  localStorage.setItem('movieindex',Movieindex);
  localStorage.setItem('moviePrice',MoviePrice);
  
}
const updateStatus=() => {
  const SelectedSeat=document.querySelectorAll('.row .seat.selected');

  const SelectedSeatIndex=[...SelectedSeat].map(seat =>[...seats].indexOf(seat));

  localStorage.setItem('selectedSeatindex',JSON.stringify(SelectedSeatIndex));
  const SelectedSeatCount=SelectedSeat.length;
  count.textContent=SelectedSeatCount;
  total.textContent=count.textContent*price;

}
function populateUI()
{
  const SelectedSeats=JSON.parse(localStorage.getItem('selectedSeatindex'));

  if(SelectedSeats!==null && SelectedSeats.length>0)
  {
    seats.forEach((seat,index)=> {
      
      if(SelectedSeats.indexOf(index)>-1)
      {
       seat.classList.add('selected'); 
      }
    })
  }

  const Mindex=localStorage.getItem('movieindex');
  if(Mindex!==null)
  {
    SelectMovie.selectedIndex=Mindex;
  }

}

SelectMovie.addEventListener('change',(event) => {
  price=event.target.value;
  SavedMoviedata(event.target.selectedIndex,event.target.value);
  updateStatus();
})

container.addEventListener('click',(event) => {
  
  if(event.target.classList.contains('seat') 
      && !event.target.classList.contains('occupied'))
  {
    event.target.classList.toggle('selected');

    updateStatus();
    
  }
});
updateStatus();