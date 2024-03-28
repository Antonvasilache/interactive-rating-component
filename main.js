const ratingBtn = document.querySelectorAll(".rating-number");
const submbitBtn = document.querySelector(".rating-submit");
const ratingWrapper = document.querySelector(".rating-wrapper");
const thankYouWrapper = document.querySelector(".thank-you-wrapper");
const thankYouSubheader = document.querySelector(".thank-you-subheader");

//looping through the rating buttons
ratingBtn.forEach((button) => {
  //removing the previously selected rating on a new click
  button.addEventListener("click", () => {
    ratingBtn.forEach((button) => {
      if (button.classList.contains("selected"))
        button.classList.remove("selected");
    });

    //saving the selected rating and converting it to a number
    const rating = Number(button.textContent);
    //adding a class that defines the selected state for the clicked button
    button.classList.add("selected");

    //Dynamically adding the selected rating to the thank you page
    thankYouSubheader.textContent = `You selected ${rating} out of 5`;

    //Switching between the rating page and the thank you page
    submbitBtn.addEventListener("click", () => {
      if (rating > 0) {
        ratingWrapper.classList.toggle("hidden");
        thankYouWrapper.classList.toggle("hidden");
      }
    });
  });
});
