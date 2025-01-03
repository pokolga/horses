/***********  MENU     *********************/
document.querySelector(".burger").addEventListener("click", mobileMenu);
document.querySelectorAll(".mobile-menu_item").forEach((elem) => elem.addEventListener("click", closeMobileMenu));

function mobileMenu(){
    if (!this.classList.contains("active-burger")){
        this.classList.add("active-burger");
        document.querySelector(".logo").classList.add("active-logo");
        document.querySelector(".handshake").classList.add("active-logo");
        document.querySelector(".burger-menu").classList.add("active-burger-menu");
        document.querySelector(".mobile-menu").style.visibility ="visible";

        document.querySelector(".burger-menu").style.height = getComputedStyle(document.querySelector("body")).height;
       
    }
    else {
        this.classList.remove("active-burger");
        document.querySelector(".logo").classList.remove("active-logo");
        document.querySelector(".handshake").classList.remove("active-logo");
      /*  document.querySelector(".header-location").classList.remove("active-logo");*/
        document.querySelector(".burger-menu").classList.remove("active-burger-menu");
        document.querySelector(".mobile-menu").style.visibility ="hidden";
        document.querySelector(".burger-menu").style.height = "0";
        
    }
}

function closeMobileMenu(){
  document.querySelector(".burger").classList.remove("active-burger");
  document.querySelector(".logo").classList.remove("active-logo");
  document.querySelector(".handshake").classList.remove("active-logo");
  document.querySelector(".header-location").classList.remove("active-logo");
  document.querySelector(".burger-menu").classList.remove("active-burger-menu");
  document.querySelector(".mobile-menu").style.visibility ="hidden";
}

/* куки: запоминаем на локальном, что мы уже предупреждали и повторно не выдаем сообщение */

if (document.querySelector(".cookie")) {

      /* показывать куки-окно только если в локал сторидж нет переменной*/
    document.addEventListener("DOMContentLoaded",function(){
      if (!localStorage.getItem('cookie'))  document.querySelector(".cookie").style.display = "flex";
    })
    /*клик по крестику или Согласен закрывает окно куки и вносит переменную в локал сторидж*/

    document.querySelector(".cookie-button>button").addEventListener("click",closeCookieBlock);
    document.querySelector(".cross").addEventListener("click",closeCookieBlockWithoutSave);
    document.querySelector(".cookie-button>button").addEventListener("touch",closeCookieBlock);
    document.querySelector(".cross").addEventListener("touch",closeCookieBlockWithoutSave);

    function closeCookieBlock(){
      document.querySelector(".cookie").style.display = "none";
      localStorage.setItem('cookie', "true");//однократное открытие куки-сообщения, открыть после проверки
    }
    function closeCookieBlockWithoutSave(){
      document.querySelector(".cookie").style.display = "none";
    }
}
/*открываем в модальном окне картинку*/
if (document.querySelector(".full-screen")){
  document.querySelectorAll(".full-screen").forEach((item) => {item.addEventListener("click", openPhotoInModalWindow)});
}


function openPhotoInModalWindow() {
  if (!this.classList.contains("full-screen")) return;

  if (innerWidth <= 500) return; // не имеет смысла показ отдельного фото на узких маленьких экранах
  const overflow = document.createElement("div");
  const modalContainer = document.createElement("div");
  const div = document.createElement("div");

  overflow.classList.add("overflow");
  modalContainer.classList.add("modal-container");
  overflow.innerHTML = `<button class='closePhoto'><span class='modal-cross'></span></button>`;
  overflow.insertAdjacentElement("beforeend", modalContainer);
  modalContainer.insertAdjacentElement("beforeend", div);
  div.classList.add("fullPhoto");
  
  if(this.src) {
    div.style.backgroundImage = `url(${this.src})`;
  } else {
    div.style.backgroundImage = getComputedStyle(this).backgroundImage;
  } 
  //подпись
  let modalName = null;
  if(this.parentNode.nodeName.toUpperCase() === "FIGURE"){
      if (this.parentNode.querySelector("figcaption")){
        modalName = document.createElement("div");
        modalName.classList.add("modal-name");
        modalName.textContent = `${this.parentNode.querySelector("figcaption").textContent}`;
      }
      modalContainer.insertAdjacentElement("beforeend", modalName);
  }


  //расчет окна слайдера
  let photoHeight = innerHeight - ((modalName)?20:40);
  let photoWidth = photoHeight * 16 / 9;
  if (photoWidth > (innerWidth - 40)) {
      photoWidth = innerWidth - 40;
      photoHeight = photoWidth * 9 / 16; //aspectRatio
  }
  if (modalName){
    modalName.style.width = photoWidth +"px";
  } 
  //для эффекта появления фото
  div.style.width = photoWidth + "px";
  div.style.height = photoHeight + "px";
  div.style.opacity = "0.3";
  modalContainer.style.top = `${(innerHeight - photoHeight) / 2 - 15}px`;
 

  document.querySelector('body').append(overflow);
  setTimeout(function () {
     
      document.querySelector(".fullPhoto").style.opacity = "1";
  }, 0);//*/

  document.querySelector('.closePhoto').addEventListener("click", function (ev) {
      this.parentElement.remove();
      document.body.style.overflow = "auto";
      ev.stopPropagation();
  })
  overflow.addEventListener("click", function () {
      this.remove();
      document.body.style.overflow = "auto";
  })
  div.addEventListener("click", function (ev) {
      ev.stopPropagation();
  })
  //запрет на скроллинг
  document.querySelector(".overflow").onmouseover = function () {
      document.body.style.overflow = "hidden";
      };
}

/*аккордеон*/

if (document.querySelector(".accordeon")){
  document.querySelectorAll(".accordeon-title").forEach((item) => {item.addEventListener("click", clickForAccordeonTitles)})
 /*начальное заполнение*/
  document.querySelector(".accordeon-output").innerHTML = document.querySelector(".accordeon-active").nextElementSibling.innerHTML;
  document.querySelectorAll(".accordeon-output a").forEach((item) => {item.addEventListener("click", clickForAccordeonLink)});
  document.querySelectorAll(".accordeon-text a").forEach((item) => {item.addEventListener("click", clickForAccordeonLink)});
}

function clickForAccordeonTitles(){
  document.querySelectorAll(".accordeon-title").forEach((item) => {item.classList.remove("accordeon-active")});
  this.classList.add("accordeon-active");
  document.querySelector(".accordeon-output").innerHTML = this.nextElementSibling.innerHTML;
  document.querySelectorAll(".accordeon-output a").forEach((item) => {item.addEventListener("click", clickForAccordeonLink)});
  document.querySelectorAll(".accordeon-text a").forEach((item) => {item.addEventListener("click", clickForAccordeonLink)});
}

function clickForAccordeonLink(ev){
  ev.preventDefault();
  alert(`Переходим на ${this.textContent}`);
  //closeLanguageMenu();
}

/* меню языков*/
/* для выплывающего модального окна*/
/*document.querySelector(".header-location").addEventListener("click",openLanguageMenu);
document.querySelector(".languages .cross").addEventListener("click",closeLanguageMenu);
document.querySelector(".accordeon-text a").addEventListener("click",closeLanguageMenu);*/

function openLanguageMenu(ev){
  const langBlock = document.querySelector(".languages");
  let topPosition = document.querySelector(".header-location").getBoundingClientRect();
  document.querySelector(".languages").style.top = "0px";
  document.querySelector(".languages").style.right = "0px";
  document.querySelector(".languages").style.opacity = "1";
}

function closeLanguageMenu(){
  document.querySelector(".languages").style.top = "-1000px";
  document.querySelector(".languages").style.opacity = "0";
}