const areas = [
  "Минск",
  "Бресткая",
  "Витебская",
  "Гомельская",
  "Гродненская",
  "Минская",
  "Могилевская"
]

const original = [
{
  view: {
    logo: 'logo-beehive.png',
    title: 'ГЛОБАЛВЕНДИНГ',
    short: 'Розничная торговля горячими напитками посредством торговых автоматов',
    description: '«Глобалвендинг» — крупнейшая организация. Успешно работает на рынке 5 лет, за это время превратилась в одну из ведущих компаний в сфере кофейного вендинга, прочно заняла свою нишу, выросла не только в г.Минске, но и расширилась в регионы.',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 5,
  region: "Столбцовский р-н"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 2,
  region: "г.Витебск"
},
{
  view: {
    logo: 'logo-dominos.jpg',
    title: 'Domino\'s Pizza',
    short: 'Сеть ресторанов',
    description: 'Domino\'s Pizza - крупнейшая сеть пиццерий в мире. Доставим к вам домой или в офис горячую и вкусную пиццу всего за 30 минут! Приходите за легендарной пиццей Пепперони, приготовим навыснос за 15 минут. Все акции на dominos.by',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 5,
  region: "Минский р-н"
},
{
  view: {
    logo: 'logo-dominos.jpg',
    title: 'Domino\'s Pizza',
    short: 'Сеть ресторанов',
    description: 'Domino\'s Pizza - крупнейшая сеть пиццерий в мире. Доставим к вам домой или в офис горячую и вкусную пиццу всего за 30 минут! Приходите за легендарной пиццей Пепперони, приготовим навыснос за 15 минут. Все акции на dominos.by',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 6,
  region: "Бобруйский район"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца1',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца2',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца2',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца2',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца2',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},
{
  view: {
    logo: 'logo-lisitca.png',
    title: 'Пицца Лисицца2',
    short: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно!',
    description: 'ПИЦЦА ЛИСИЦЦА, 45/60 минут или пицца бесплатно! Рассрочка действует только при оплате на сайте pzz.by онлайн',
    contacts: '',
    link: '404.html',
    element: null
  },
  area: 0,
  region: "г.Минск"
},


]

class MakeCard{
  constructor(obj){
    this.logo = obj.logo ?? "unknownLogo.png";
    this.title = obj.title;
    this.short = obj.short ?? '';
    this.description = obj.description ?? '';
    this.contacts = obj.contacts ?? '';
    this.link = obj.link ?? '404.html';
  }

  getElement(){
    const pathToLogos = './../assets/logos/';
    const viewImg = document.createElement("img");
    viewImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA6JJREFUeF7t3Ltuq0AQBuB1RUFhidK13/9JeASLzi6RXFBQ+YhEPnEcA3uZyz8wrpwEdmb/j2UlJ+HQtu2jaZpQVVXwl14C4ziGvu/Doeu6x/TmfD6H4/Go19GOK9/v93C5XMK0MA7X6/VR1/XXNxxF/qp4YkzZD8PwDXI6ncLrD3ylyMC8Z3673X5AphYcRQZiLus/II4iAzJ34X8EcRRelKW70CyIo/CgrG0JiyCOQouyhjFVWwVxFBqUGIxoEEcpQ4nFSAJxlDyUFIxkEEdJQ0nFyAJxlDiUHIxsEEdZRsnFKAJxlM8oJRjFII7yG6UUgwTEUb5RKDDIQCgbitsysY6iwiAF2SsKJQY5yN5QqDFYQPaCwoHBBrJ1FC4MVpCtonBisINsDYUbQwRkKygSGGIg1lGkMERBrKJIYoiDWEORxlABsYKigaEGgo6ihaEKgoqiiaEOgoaijQEBgoKCgAEDoo2CggEFooWChAEHIo2ChgEJIoWCiAELwo2CigENwoWCjAEPQo2CjmEChArFAoYZkFIUKximQHJRLGGYA0lFsYZhEiQWxSKGWZA1FKsYpkHmUCxjmAd5R5m+tv5Eo6j/U58mivx6roqpR+uPl3IQsCvNPMjrnuG3LOWr69MG7pu6EspS8JZRTN6yYgKPOUbpWlosaw4kJeiUY1FwTIHkBJxzjiaOGZCSYEvOlcYxAUIRKMUYEjjwIJRBUo7FhQMNwhEgx5iUOLAgnMFxjl2KAwkiEZhEjRwcOBDJoCRrxeJAgWgEpFFzCQcGRDMYzdrvOBAgCIEg9ADxK1yUINb+cCJ2Dyg9TnWFIGE8g9TuSQ1Ee+JLV7JmbyogmhOOvaVo9SgOojXRWIjX4zR6FQXRmGAOhCaKGIhFDI2NXgTEMoY0CjvIFjAkUVhBtoQhhcIGskUMCRQWkC1jcKOQg+wBgxOFFGRPGFwoZCB7xOBAIQHZMwY1SjGIY/x80EKRRREIRQOlnzWhnV+aSTZIaWG0ICn7KckmC6SkIOXEkcfKzSgZJLcQcnhcveVklQSSU4BrslbGTc0sGiR1YCuBSfSZkl0USMqAEhO0WCM2w1WQ2IEshiTdc0yWiyAxA0hPynq9tUxnQdZOtB6MZv9L2X4EcQx+rrmM/4A4Bj/G0geSv0AcQw5jDuU/SF3X5h/+JR8nTcXXhTAMQzh0Xffo+978w79o4tEZ5YnSNE04tG37mN5UVaXTjVf9SmAcxzAtjH/JJBYGzGx1iQAAAABJRU5ErkJggg==" ;
    viewImg.dataset.src = pathToLogos + this.logo;
    viewImg.alt = "logo-" + this.title;
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    cardImg.append(viewImg);
    
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = this.title;

    const cardShort = document.createElement("p");
    cardShort.classList.add("card-short");
    cardShort.textContent = this.short;

    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = this.description;

    const cardContacts = document.createElement("div");
    cardContacts.classList.add("card-contacts");
    cardContacts.textContent = this.contacts;

    const card = document.createElement("div");
    card.classList.add("card");
    card.append(cardImg);
    card.append(cardTitle);
    card.append(cardShort);
    card.append(cardDescription);
    card.append(cardContacts);

    this.element = card;

    return card;
  }
}

addEventListener("DOMContentLoaded", init);

function init(){
  document.querySelector(".partner-cards").prepend(createPartnerFilter(areas));
  document.querySelector(".partner-menu-item-active").click();
}

function makeListOfFriends(_ev, data = original) {

  if (data.length === 0) {
    document.querySelector('.slider').textContent = "По данному региону предложений нет";
    return;
  }
  data.sort(sortByAreaAndRegion);


  const slider = document.querySelector('.slider');
  slider.innerHTML = '';

  let oblast = data[0].area;
  //slider.append(addCategory(areas[oblast], "area"));

  let rajon = data[0].region;
  slider.append(addCategory(rajon, "region"));

  let currentAllCards = document.createElement('div');
  currentAllCards.classList.add('all-cards');
  slider.append(currentAllCards);

  for (const item of data) {
    // Если меняется область, добавляем новую категорию области
    if (item.area !== oblast) {
      oblast = item.area;
     // slider.append(addCategory(areas[oblast], "area"));
    }
    // Если меняется район, добавляем новую категорию района и создаём новый блок для карточек
    if (item.region !== rajon) {
      rajon = item.region;
      slider.append(addCategory(rajon, "region"));

      currentAllCards = document.createElement('div');
      currentAllCards.classList.add('all-cards');
      slider.append(currentAllCards);
    }

    const element = new MakeCard(item.view);
    currentAllCards.append(element.getElement());
  }
  replacePlaceholder();
}

function sortByAreaAndRegion(a, b) {
    if (a.area !== b.area) {
      return a.area - b.area;
    }
    return (a.region.toUpperCase() > b.region.toUpperCase()) ? 1 : -1;
}

function addCategory(text, style){
  const elem = document.createElement("div");
  elem.textContent = text;
  if (style === "area"){
    if (!text.includes("Минск")){
      elem.textContent = text + " ОБЛАСТЬ";
    }
  } else {
    if (text.includes("Минск")){
      elem.textContent = "";
      return elem;
    }
  }
  const currentClass =  (style === "area") ? "area-title" : "region-title";
  elem.classList.add(currentClass);
  return elem;
}

function replacePlaceholder(){
  const images = document.querySelectorAll('img[data-src]');
  
  images.forEach(img => {
    const realSrc = img.getAttribute('data-src');
    const tempImg = new Image();
    
    tempImg.onload = function() {
      img.src = realSrc;
    };
    
    tempImg.src = realSrc;
  });
}


function createPartnerFilter(areas) {
  const container = document.createElement('div');
  container.className = 'partner-filter';

  const label = document.createElement('label');
  label.textContent = '';
  container.appendChild(label);

  areas.forEach((area, index) => {

    const item = document.createElement('div');
    item.className = 'partner-menu-item';
 
    item.textContent = area;
    item.dataset.i = index;
    item.addEventListener("click", filterFriend);
      
    container.append(item);
    if (index === 0) {
      item.classList.add('partner-menu-item-active');
      item.insertAdjacentHTML('afterend','&nbsp;<label>ОБЛАСТИ:</label>&nbsp;');
    } 
  });

  return container;
}

// eslint-disable-next-line no-unused-vars
function filterFriend(_ev){
  
  document.querySelector(".partner-menu-item-active").classList.remove("partner-menu-item-active");
  this.classList.add("partner-menu-item-active");

  let data = original;
  const numberOfArea = Number(this.dataset.i);
  //if (numberOfArea > 0) {
    data = original.filter((elem) => elem.area === numberOfArea)
  //}
  
  makeListOfFriends(null, data);

}
