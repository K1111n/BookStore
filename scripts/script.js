function renderBook() {
  let bookRef = document.getElementById("book-section");
  bookRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books.comments.length; j++) {
      bookRef.innerHTML += bookTemplate(i, j);
    }
  }
}
