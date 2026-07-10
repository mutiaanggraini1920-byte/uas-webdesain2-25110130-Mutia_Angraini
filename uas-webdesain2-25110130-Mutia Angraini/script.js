// ===========================================
// NAVBAR BERUBAH SAAT SCROLL
// ===========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#050505";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.boxShadow = "none";

    }

});

// ===========================================
// SCROLL TO TOP
// ===========================================

const scrollBtn = document.createElement("button");

scrollBtn.id = "scrollTop";

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================================
// PENCARIAN PRODUK
// ===========================================

const search = document.getElementById("searchProduk");

if(search){

search.addEventListener("keyup", function(){

let keyword = search.value.toLowerCase();

let produk = document.querySelectorAll(".produk-item");

produk.forEach(function(item){

let nama = item.innerText.toLowerCase();

if(nama.indexOf(keyword) > -1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

}

// ===========================================
// TOMBOL BELI SEKARANG
// ===========================================

const tombolBeli = document.querySelectorAll(".btn-pink");

tombolBeli.forEach(function(btn){

if(btn.innerHTML.includes("Beli")){

btn.addEventListener("click",function(){

window.open(

"https://wa.me/6281234567890?text=Halo%20Amora%20Panam,%20saya%20ingin%20memesan%20produk.",

"_blank"

);

});

}

});

// ===========================================
// FORM KONTAK
// ===========================================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let nama = form.querySelector('input[type="text"]').value;
let email = form.querySelector('input[type="email"]').value;
let pesan = form.querySelector("textarea").value;

if(nama==="" || email==="" || pesan===""){

alert("Silakan lengkapi semua data terlebih dahulu.");

return;

}

alert("Terima kasih, pesan Anda berhasil dikirim.");

form.reset();

});

}

// ===========================================
// EFEK CARD PRODUK
// ===========================================

const cards = document.querySelectorAll(".product-card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0px)";

});

});

// ===========================================
// ANIMASI SAAT HALAMAN DIMUAT
// ===========================================

window.onload = function(){

document.body.style.opacity = "0";

setTimeout(function(){

document.body.style.transition = "1s";

document.body.style.opacity = "1";

},200);

};

// ===========================================
// JAM DIGITAL
// ===========================================

function updateJam(){

const sekarang = new Date();

let jam = sekarang.getHours();
let menit = sekarang.getMinutes();
let detik = sekarang.getSeconds();

jam = jam < 10 ? "0"+jam : jam;
menit = menit < 10 ? "0"+menit : menit;
detik = detik < 10 ? "0"+detik : detik;

const clock = document.getElementById("jam");

if(clock){

clock.innerHTML = jam + ":" + menit + ":" + detik;

}

}

setInterval(updateJam,1000);

// ===========================================
// UCAPAN SELAMAT DATANG
// ===========================================

console.log("Selamat Datang di Website Amora Panam");

// ===========================================
// AKHIR SCRIPT
// ===========================================

// ==========================================
// KEMBALI KE HALAMAN UTAMA SAAT REFRESH
// ==========================================

window.addEventListener("load", function () {

    const navigationType = performance.getEntriesByType("navigation")[0];

    if (
        navigationType &&
        navigationType.type === "reload" &&
        !window.location.pathname.endsWith("index.html")
    ) {
        window.location.href = "index.html";
    }

});