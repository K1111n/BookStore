function renderBook() {
  let bookRef = document.getElementById("book-section");
  bookRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    get_ToLocalStorage_Likes_Hearts_Comments(i);
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
    save_ToLocalStorage_Likes_Hearts_Comments(i);
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
  save_ToLocalStorage_Likes_Hearts_Comments(i);
  renderBook();
}

function toggleUnLiked(i) {
  let greyHeart = document.getElementById(`not-liked${i}`);
  greyHeart.classList.toggle("d_none");
  let redHeart = document.getElementById(`liked${i}`);
  redHeart.classList.toggle("d_none");
  books[i].likes -= 1;
  books[i].liked = false;
  save_ToLocalStorage_Likes_Hearts_Comments(i);
  renderBook();
}

function save_ToLocalStorage_Likes_Hearts_Comments(i) {
  localStorage.setItem(
    `books[${i}].comments`,
    JSON.stringify(books[i].comments)
  );
  localStorage.setItem(`books[${i}].likes`, JSON.stringify(books[i].likes));
  localStorage.setItem(`books[${i}].liked`, JSON.stringify(books[i].liked));
}

function get_ToLocalStorage_Likes_Hearts_Comments(i) {
  let commentsStorage = localStorage.getItem(`books[${i}].comments`);
  if (commentsStorage) {
    books[i].comments = JSON.parse(commentsStorage);
  }
  let likesStorage = localStorage.getItem(`books[${i}].likes`);
  if (likesStorage) {
    books[i].likes = JSON.parse(likesStorage);
  }
  let likedStorage = localStorage.getItem(`books[${i}].liked`);
  if (likedStorage) {
    books[i].liked = JSON.parse(likedStorage);
  }
}
