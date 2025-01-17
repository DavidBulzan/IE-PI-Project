const ratingContainer = document.getElementById("rating");
let currentRating = 0;

//dreate star element
for (let i = 1; i <= 5; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.dataset.index = i;
  star.innerText = "★";
  ratingContainer.appendChild(star);
}

// handle hover effect
function handleHover(rating) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("hovered"); 
    } else {
      star.classList.remove("hovered");
    }
  });
}

// set the star rating
function setRating(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("selected"); // Highlight stars up to the selected one
    } else {
      star.classList.remove("selected");
    }
  });
  enableSubmitButton(); 
}


function enableSubmitButton() {
  const submitButton = document.getElementById("submitReview");
  submitButton.disabled = currentRating === 0; 
}

//parse the star index
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    //get rating
    const rating = parseInt(star.dataset.index); 
    //set rating
    setRating(rating); 
  });

//star actions
  star.addEventListener("mouseover", () => {
    const rating = parseInt(star.dataset.index); 
    handleHover(rating); 
  });

  star.addEventListener("mouseleave", () => {
    handleHover(currentRating); 
  });
});

const reviewForm = document.querySelector(".review-form");

//show message
function showThanksMessage() {
  var message = document.getElementById("snackbar");
  message.className = "show";
  setTimeout(function () {
    message.className = message.className.replace("show", "");
  }, 3000);
}

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showThanksMessage();

  //reset form
  reviewForm.reset();
  setRating(0);
  handleHover(currentRating);
  console.log(currentRating);
});
