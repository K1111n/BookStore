function renderBook() {
  for (let i = 0; i < books.length; i++) {
    let bookRef = document.getElementById("book-section");
    bookRef.innerHTML += bookTemplate(i);
  }
  let commentSection = document.getElementsByClassName("comment-section");
  for (let i = 0; i < books.length; i++) {
    let commentRef = commentSection[i];
    for (let j = 0; j < books[i].comments.length; j++) {
      commentRef.innerHTML += commentTemplate(i, j);
    }
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
  document.getElementsByClassId(`liked${i}`).toggle.d_none;
}

function toggleUnLiked(i) {
  document.getElementsByClassId(`not-liked${i}`).toggle.d_none;
}
