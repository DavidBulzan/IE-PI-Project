const ratingContainer = document.getElementById("rating");
let currentRating = 0;

for (let i = 1; i <= 5; i++) {
  const star = document.createElement("span");
  star.classList.add("star");
  star.dataset.index = i;
  star.innerText = "★";
  ratingContainer.appendChild(star);
}

// Function to handle hover effect
function handleHover(rating) {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("hovered"); // Add hovered effect up to the hovered star
    } else {
      star.classList.remove("hovered");
    }
  });
}

// Function to set the rating (on click)
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
  enableSubmitButton(); // Enable the submit button when rating is set
}

// Function to enable or disable the submit button
function enableSubmitButton() {
  const submitButton = document.getElementById("submitReview");
  submitButton.disabled = currentRating === 0; // Disable if no rating is selected
}

// Add event listeners to each star
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.dataset.index); // Get the rating from the clicked star
    setRating(rating); // Set the selected rating
  });

  // Event listener for hover effects
  star.addEventListener("mouseover", () => {
    const rating = parseInt(star.dataset.index); // Get the rating of the hovered star
    //console.log(star.dataset.index);
    handleHover(rating); // Show hover effect
  });

  star.addEventListener("mouseleave", () => {
    handleHover(currentRating); // Reset hover effect but keep the selected stars
  });
});

const reviewForm = document.querySelector(".review-form");

// Function to show the thank you message
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
  reviewForm.reset();
  setRating(0);
  handleHover(currentRating);
  console.log(currentRating);
});
