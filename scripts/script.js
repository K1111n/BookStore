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
