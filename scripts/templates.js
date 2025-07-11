function bookTemplate(i) {
  return `
  <div class="book-section">
    <div>
        <h2>${books[i].name}</h2>
        <div class="book-img"><img></div>
        <div class="price-likes"><p>${books[i].price} </p><br><p>${books[i].likes} Likes</p><img class="liked"><img class="not-liked"><br></div>
        <div class="table">
            <p>Author: ${books[i].author}</p> <br>
            <p>Erscheinungsjahr: ${books[i].publishedYear}</p> <br>
            <p>Genre: ${books[i].genre}</p> <br>
        </div>    
            <h3>Kommentare</h3><br>
    </div>
    <div class="comment-section">
    </div>
    <br>
    
    <div class="input-line"><input type="text" placeholder="Schreibe dein Kommentar"></input><img src="paper-plane.png" alt="absenden" onclick="submit()"></div>
</div>
   `;
}

function commentTemplate(i, j) {
  return `
    <p>${books[i].comments[j].name}:</p><p>${books[i].comments[j].comment}</p><br>
    `;
}
