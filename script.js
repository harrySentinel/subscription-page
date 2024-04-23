const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');


function showPopup() {
  setTimeout(() => {
    popupContainer.style.display = 'flex';
  }, 5000); 
}


closeBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

window.onload = showPopup;
