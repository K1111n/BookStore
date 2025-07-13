function renderBook() {
  let bookRef = document.getElementById("book-section");
  bookRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    bookRef.innerHTML += bookTemplate(i);
    renderHearts(i);
  }
  renderCommentSection();
}

function renderCommentSection() {
  let commentSection = document.getElementsByClassName("comment-section");
  for (let i = 0; i < books.length; i++) {
    let commentRef = commentSection[i];
    for (let j = 0; j < books[i].comments.length; j++) {
      commentRef.innerHTML += commentTemplate(i, j);
    }
  }
}

function renderHearts(i) {
  if (books[i].liked == true) {
    let greyHeart = document.getElementById(`not-liked${i}`);
    greyHeart.classList.add("d_none");
  } else {
    let redHeart = document.getElementById(`liked${i}`);
    redHeart.classList.add("d_none");
  }
}

function addComment(i) {
  let inputRef = document.getElementById(`input${i}`);
  let input = inputRef.value;
  if (input == "") {
    return;
  } else {
    let newComment = { name: "You", comment: input };
    books[i].comments.push(newComment);
    let commentSection = document.getElementsByClassName("comment-section");
    let commentRef = commentSection[i];
    commentRef.innerHTML += commentTemplate(i, books[i].comments.length - 1);
    inputRef.value = "";
  }
}

function toggleLiked(i) {
  let redHeart = document.getElementById(`liked${i}`);
  redHeart.classList.toggle("d_none");
  let greyHeart = document.getElementById(`not-liked${i}`);
  greyHeart.classList.toggle("d_none");
  books[i].likes += 1;
  books[i].liked = true;
  renderBook();
}

function toggleUnLiked(i) {
  let greyHeart = document.getElementById(`not-liked${i}`);
  greyHeart.classList.toggle("d_none");
  let redHeart = document.getElementById(`liked${i}`);
  redHeart.classList.toggle("d_none");
  books[i].likes -= 1;
  books[i].liked = false;
  renderBook();
}
