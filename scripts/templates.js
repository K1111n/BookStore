function bookTemplate(i) {
  return /*html*/ `  
  
<div class="book-section">
    <div>
        <h2>${books[i].name}</h2>
        <div class="book-img">
            <img src="book-favicon.png">
        </div>
        <div class="price-likes">
            <div>
                <p style="color:red">${books[i].price} $</p>
            </div>
            <div class="likes">
                <p>${books[i].likes} Likes</p> <p style="color:grey; cursor:pointer" id="not-liked${i}" onclick="toggleLiked(${i})">&#10084</p><p style="color:red; cursor:pointer" id="liked${i}" onclick="toggleUnLiked(${i})">&#10084</p>
            </div>
        </div>
        <br>
        <div class="table">
            <p>Author: ${books[i].author}</p> <br>
            <p>Erscheinungsjahr: ${books[i].publishedYear}</p> <br>
            <p>Genre: ${books[i].genre}</p> <br>
        </div>    
            <h3>Kommentare:</h3><br>
    </div>
        <div class="comment-section">
        </div>
    <br>
    
        <div class="input-line">
            <input type="text" placeholder="Schreibe dein Kommentar" class="input" id="input${i}"/>
            <img src="paper-plane.png" class="small-img" alt="absenden" onclick="addComment(${i})">
        </div>
</div>
   `;
}

function commentTemplate(i, j) {
  return /*html*/ `
    <p>${books[i].comments[j].name}: ${books[i].comments[j].comment}</p><br>
    `;
}
