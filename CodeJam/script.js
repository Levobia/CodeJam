// ELEMANLARIN TANIMLANMASI

// kapsayıcı elemanlar
const clickedTitles = document.querySelectorAll('#gallery .container .search-titles .titles .item');
const searchtitles = document.querySelectorAll('#gallery .container .search-titles .titles .item img')
const clickedDiv = document.querySelectorAll("#gallery .container .clicked-gallery .items .item");
const clicked = document.querySelectorAll("#users .container .header .users div img"); 

// butonlar
const titlesnext = document.querySelector('#gallery .container .search-titles .titles .next-btn');
const titlesprev = document.querySelector('#gallery .container .search-titles .titles .prev-btn');
const nextbtn = document.querySelector('#gallery .container .clicked-gallery .items .next-btn');
const prevbtn = document.querySelector('#gallery .container .clicked-gallery .items .prev-btn');
// messagebox
const message = document.getElementById('messagebox')
const msginput = document.querySelector('#messagebox .container .input input');
// modal
const modal = document.getElementById("myModal");


// başlıca sayı tanımları
let n = 0
let nmbr = 0


// BEĞENİ FONKSİYONU
function liked(event){
    let like = event.target.children[0];
    if(like == undefined){
      let a = event.target;
      a.classList.toggle('liked')
    }
    else{
      like.classList.toggle('liked')
    }
} 

// İNPUT KISMI
// seçim
let heroİnput = document.querySelector('#hero .container .input input')
// inputa event verme
heroİnput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // gelen elemanı küçültüp boşlukları silme
    let inputValue = heroİnput.value.toLowerCase().split(' ').join('')
    // birden fazla olasılığı kullanma
    switch (inputValue){
      case "dağlar":
        document.getElementById('0').children[0].click()
        break;
      
      case "deniz":
        document.getElementById('1').children[0].click()
        break;

      case "rastgele":
        document.getElementById('2').children[0].click()
        break;

      case "köpek":
        document.getElementById('3').children[0].click()
        break;
      
      case "bitkiler":
        document.getElementById('4').children[0].click()
        break;

      case "vesikalık":
        document.getElementById('5').children[0].click()
        break;

      case "doğa":
        document.getElementById('6').children[0].click()
        break;

      case "hayvanlar":
        document.getElementById('7').children[0].click()
        break;

      case "ağaçlar":
        document.getElementById('8').children[0].click()
        break;
    }
    event.preventDefault();
    // value sıfırlama
    heroİnput.value = ''
  }
});


// USERS ELEMANLARINA ULAŞMA

// elemanlara yapılacaklar
let clickFn = e =>{
  // class ekleme
  clicked.forEach((img) => {
    img.addEventListener("click", () => {
      // hazırda letsa kaldırıp yenisi ekleme
      clicked.forEach((e) => e.classList.remove("selected-user"));
      img.classList.add("selected-user");
    });
  });;
  // resim adını alma
  let clickedPng = e.path[0].src.slice(29,38);
  console.log(clickedPng)
  // css deki roota bu ismi verme
  document.documentElement.style.setProperty('--selected-user', `url('images/${clickedPng}')`);
  // tıklanılan elemanın adını alma
  let name = e.path[1].outerText;
  // adı her 'title' id li elemana aktarma
  for(let titles of document.querySelectorAll('#title')){
    titles.innerHTML = `${name}`
  }
  document.querySelector('#selectedTitle').innerHTML = `${name} ' ın Galerisi`;
  // divde gizli olan p elementini alıp detailbox içindeki text ile değişme
  let detailtext = e.path[1].children[2].innerHTML;
  document.querySelector('#users .container .user-details .detail-box .detail-hero p').innerHTML = detailtext;
}
// her bir elemana event verme
for (let i = 0; i < clicked.length; i++) {
  clicked[i].addEventListener("mousedown", clickFn)
}

// ÖNCEKİ SONRAKİ BUTON KISMI

// clicked galerydeki önceki sonraki buton kısmı
function next(){
  clickedDiv[clickedDiv.length -1].style.display='flex'// gösterme
  clickedDiv[n].style.display='none'// silme 
  n = n+1  // elemanlara ulaşmak için
  nextbtn.style.display='none' 
  prevbtn.style.display='flex' 
}
function prev(){
  clickedDiv[clickedDiv.length -1].style.display='none'
  clickedDiv[0].style.display='flex'
  prevbtn.style.display='none'
  nextbtn.style.display='flex'
  n=0
}
// searchtitles kısmındaki önceki sonraki buton kısmı
function nextTitles(){
  clickedTitles[nmbr+7].style.display='flex'
  clickedTitles[nmbr].style.display='none'
  nmbr = nmbr+1
  if(clickedTitles[clickedTitles.length -1].style.display == 'flex'){ // koşula bağlama
    titlesnext.style.display='none'
  }
  titlesprev.style.display='flex'
}
function prevTitles(){
  clickedTitles[nmbr-1].style.display='flex'
  nmbr = nmbr-1
  clickedTitles[nmbr+7].style.display='none'
  if(clickedTitles[0].style.display == 'flex'){
    titlesprev.style.display='none'
  }
  titlesnext.style.display='flex'
}

// MODAL KISMI

// modalı açma
function openModal() {
  modal.style.display = "block";
}
// modal kapama
function closeModal() {
  modal.style.display = "none";
}
// slide index arttırma
let slideIndex = 1;
showSlides(slideIndex);
// buton kontrol
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// resim kontrol
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// üsttekileri aktardığımız fonskiyon
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // koşullar
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // tüm elemanları gizleme
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // istenilen elemanı gösterme
  slides[slideIndex-1].style.display = "block";
}

// GALERİ KISMI

let openGallery = e =>{
  // açılış
  let myİtem = document.getElementsByClassName("myİtem");
  document.getElementById('openTitles').style.display='flex';
  // her elemanı gizleme
  for (i = 0; i < myİtem.length; i++) {
    myİtem[i].style.display = "none";
  }
  // id sini index'e atama
  let index = e.path[1].id
  // istenilen elemanın açılması
  document.querySelector('#openTitles .container').children[index].style.display='flex'
}
// her elemana event verme
for (let i = 0; i < searchtitles.length; i++) {
  searchtitles[i].addEventListener("click", openGallery)
}
// galeri kapanış
function closeGallery(){
  document.getElementById('openTitles').style.display='none';
}

// MESAJ KISMI

// mesage açma
function openMessage(){
  message.style.display='block';
}
// mesage kapama
function closeMessage(){
  message.style.display='none';
}
// mesajı gönderme 
function sendMessage(){
  let newmsg = document.createElement('li');
  newmsg.innerHTML=`${msginput.value}`
  document.querySelector('#messagebox .container .body ul').appendChild(newmsg);
  msginput.value=''
}
// enter eventi
msginput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});