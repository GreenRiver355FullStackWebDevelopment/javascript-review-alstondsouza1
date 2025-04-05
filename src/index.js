//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

const form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();

  const username = document.querySelector('username').value;
  const image = document.querySelector('image').value;
  const star = document.querySelector('star').value;
  const review = document.querySelector('review').value;

  const newReview = {
    username: username,
    image: image,
    star: star,
    review: review,
  };

  // adds new review to the reviews array
  reviews.push(newReview); 

  // render the new review
  renderReview(newReview);

  // clears inputs of the form
  form.reset();
}

form.addEventListener('submit', handleSubmit);

//Your Code Below Here////

function renderReview(review) {

  // create section review
  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review_container'); 

  // image element
  const img = document.createElement('img'); 
  img.src = review.image; 
  reviewDiv.appendChild(image);

  const details = document.createElement('div');

  // username detials
  const userParagraph = document.createElement('p');
  userParagraph.textContent = review.username;
  details.appendChild(userParagraph);

  // star rating details
  const starRating = document.createElement('p');
  starRating.textContent = `${review.star} stars`; 
  details.appendChild(starRating);

  // review details
  const textParagraph = document.createElement('p');
  textParagraph.textContent = review.review; 
  details.appendChild(textParagraph);

  // appending the details to the reviewDiv
  reviewDiv.appendChild(details);

  // review section append
  document.querySelector('.reviews').appendChild(reviewDiv);
}

reviews.forEach(renderReview);
