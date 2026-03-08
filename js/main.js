let cart = JSON.parse(localStorage.getItem("cart")) || [];
let loggedInUser = localStorage.getItem("loggedInUser") || null;

document.addEventListener("DOMContentLoaded", function(){
    updateCartCount();
    if(loggedInUser){ showUserInfo(loggedInUser); }

    document.getElementById("search-input").addEventListener("input", searchProduct);
    document.getElementById("category-select").addEventListener("change", searchProduct);

    attachCommentForms();
    loadAllComments();

    // Overlay tıklanınca kapat
    document.getElementById("overlay").addEventListener("click", function(){
        closeAuth();
        document.getElementById("cart-panel").classList.remove("active");
    });
});

// Ürün arama ve filtreleme
function searchProduct(){
    let keyword = document.getElementById("search-input").value.toLowerCase();
    let category = document.getElementById("category-select").value;
    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        let title = card.querySelector("h3").innerText.toLowerCase();
        let info = card.querySelector(".info").innerText.toLowerCase();
        let cardCategory = card.getAttribute("data-category");

        if((title.includes(keyword) || info.includes(keyword)) &&
           (category==="all" || category===cardCategory)){
            card.style.display="block";
        } else {
            card.style.display="none";
        }
    });
}

// Sepet işlemleri
function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCart();
}
function closeCart(){
    document.getElementById("cart-panel").classList.remove("active");
}

function sellItem(name){
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCart();
}

function clearCart(){
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCart();
}

function updateCartCount(){
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart(){
    document.getElementById("cart-panel").classList.toggle("active");
    showCart();
}

function showCart(){
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index)=>{
        let div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `${item.name} - ${item.price} TL 
            <button onclick="removeFromCart(${index})">Sil</button>`;
        cartItems.appendChild(div);
        total += item.price;
    });

    document.getElementById("total-price").innerText = "Toplam: " + total + " TL";
}

function removeFromCart(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showCart();
}

// Kullanıcı giriş/kayıt
function showLogin(){
    document.getElementById("auth-panel").classList.remove("hidden");
    document.getElementById("register-panel").classList.add("hidden");
    document.getElementById("overlay").classList.remove("hidden");
}

function showRegister(){
    document.getElementById("register-panel").classList.remove("hidden");
    document.getElementById("auth-panel").classList.add("hidden");
    document.getElementById("overlay").classList.remove("hidden");
}

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password){
        loggedInUser = username;
        localStorage.setItem("loggedInUser", username);
        showUserInfo(username);
        closeAuth();
    }
}

function register(){
    let username = document.getElementById("new-username").value;
    let email = document.getElementById("new-email").value;
    let password = document.getElementById("new-password").value;
    let repeat = document.getElementById("repeat-password").value;

    if(username && email && password && password===repeat){
        alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
        showLogin();
    }
}

function showUserInfo(username){
    let userInfo = document.getElementById("user-info");
    userInfo.innerHTML = `Hoş geldin, ${username} 🌸 
        <span class="logout-btn" onclick="logout()">Çıkış Yap</span>`;
}

function logout(){
    loggedInUser = null;
    localStorage.removeItem("loggedInUser");
    document.getElementById("user-info").innerHTML = `
        <span id="login-btn" onclick="showLogin()">Giriş Yap</span> | 
        <span id="register-btn" onclick="showRegister()">Kayıt Ol</span>`;
}

function closeAuth(){
    document.getElementById("auth-panel").classList.add("hidden");
    document.getElementById("register-panel").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
}

// Yorumlar + yıldızlı değerlendirme
function attachCommentForms(){
    let cards = document.querySelectorAll(".card");
    cards.forEach(card=>{
        let productName = card.querySelector("h3").innerText;
        let commentSection = document.createElement("div");
        commentSection.classList.add("product-comments");
        commentSection.innerHTML = `
            <form class="product-comment-form">
                <input type="text" placeholder="Adınız" required>
                <textarea placeholder="Yorumunuzu yazın..." required></textarea>
                <div class="stars">
                    <span data-value="1">☆</span>
                    <span data-value="2">☆</span>
                    <span data-value="3">☆</span>
                    <span data-value="4">☆</span>
                    <span data-value="5">☆</span>
                </div>
                <button type="submit">Gönder</button>
            </form>
            <div class="product-comment-list"></div>
        `;
        card.appendChild(commentSection);

        let form = commentSection.querySelector(".product-comment-form");
        let stars = form.querySelectorAll(".stars span");
        let selectedRating = 0;

        stars.forEach(star=>{
            star.addEventListener("click", function(){
                selectedRating = parseInt(this.getAttribute("data-value"));
                stars.forEach(s=>{
                    if(parseInt(s.getAttribute("data-value")) <= selectedRating){
                        s.textContent = "★";
                        s.style.color = "gold";
                    } else {
                        s.textContent = "☆";
                        s.style.color = "black";
                    }
                });
            });
        });

        form.addEventListener("submit", function(e){
            e.preventDefault();
            let username = form.querySelector("input").value;
            let text = form.querySelector("textarea").value;
            if(username && text && selectedRating>0){
                saveComment(productName, username, text, selectedRating);
                displayComment(commentSection.querySelector(".product-comment-list"), username, text, selectedRating);
                form.reset();
                stars.forEach(s=>{s.textContent="☆"; s.style.color="black";});
                selectedRating=0;
            } else {
                alert("Lütfen yorum ve yıldız seçimini tamamlayın.");
            }
        });
    });
}

function saveComment(productName, username, text, rating){
    let comments = JSON.parse(localStorage.getItem("productComments")) || {};
    if(!comments[productName]) comments[productName] = [];
    comments[productName].push({username,text,rating});
    localStorage.setItem("productComments", JSON.stringify(comments));
}

function loadAllComments(){
    let comments = JSON.parse(localStorage.getItem("productComments")) || {};
    let cards = document.querySelectorAll(".card");
    cards.forEach(card=>{
        let productName = card.querySelector("h3").innerText;
        let list = card.querySelector(".product-comment-list");
        if(comments[productName]){
            comments[productName].forEach(c=>{
                displayComment(list, c.username, c.text, c.rating);
            });
        }
    });
}

function displayComment(list, username, text, rating){
    let newComment = document.createElement("div");
    newComment.classList.add("comment-item");
    let stars = "★".repeat(rating) + "☆".repeat(5-rating);
    newComment.innerHTML = `<strong>${username}</strong> (${stars})<p>${text}</p>`;
    list.appendChild(newComment);
}

