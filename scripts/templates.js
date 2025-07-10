function bookTemplate(i, j) {
  return `
<div class="book-section">
    <h2>${books[i].name}</h2>
    <img>
    <p>${books[i].price} </p><br><p>${books[i].likes} Likes</p><img class="liked"><img class="not_liked"><br>
        <div class="table">
         <p>Author: ${books[i].author}</p> <br>
         <p>Erscheinungsjahr: ${books[i].publishedYear}</p> <br>
         <p>Genre: ${books[i].genre}</p> <br>
        </div>
    <br>
            <h3>Kommentare</h3><br>
    <p>${books[i].comments[j].name}:</p><p>${books[i].comments[j].comment}</p>
</div>
   `;
}
