const likeBtn = document.querySelector("#likeBtn");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");

  if (likeBtn.classList.contains("liked")) {
    likeBtn.textContent = "♥ Liked";
  } else {
    likeBtn.textContent = "♡ Like";
  }
});