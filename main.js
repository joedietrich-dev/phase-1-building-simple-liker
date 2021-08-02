// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function handleHeartClick(e) {
  mimicServerCall("http://mimicServer.example.com", {})
    .then(() => {
      e.target.classList.toggle('activated-heart');
      e.target.innerText = e.target.innerText === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
    })
    .catch((err) => {
      const errorModal = document.querySelector("#modal");
      const modalMessage = document.querySelector('#modal-message');
      errorModal.classList.remove('hidden');
      modalMessage.innerText = err;
      setTimeout(() => errorModal.classList.add('hidden'), 3000);
    })
}

const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', handleHeartClick)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
