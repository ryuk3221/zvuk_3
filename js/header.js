//Получаю иконку search в хэдэре (поиск)
const searchOpenBtn = document.querySelector(".search-icon");
//Получаю HTML элемент поиска, который будет выдвигаться
const inputBox = document.querySelector('.header-bot__input-box');
//Получаю меню навигации которое будет скрываться соответственно
const headerBotList = document.querySelector('.header-bot__list');
//Получаю иконку закрытия поиска
const inputCloser = document.querySelector('.input-closer');

searchOpenBtn.onclick = (event) => {
  inputBox.classList.add('header-bot__input-box--open');
  headerBotList.classList.add('header-bot__list--hide');
};

inputCloser.onclick = (event) => {
  inputBox.classList.remove('header-bot__input-box--open');
  headerBotList.classList.remove('header-bot__list--hide');
  document.querySelector('.input-search').value = '';
};








//Скрипты связанные с мобильной/планшетной версией сайта
if (window.innerWidth <= 991) {

  //Фунционал раскрытия поля для поиска при мобильной и планшетной версии 
  let isInputBoxOpen = false;
  //Мобильная кнопка поиска
  const searchIcon = document.querySelector('.header-bot__search-btn--mobile');
  //Мобильное поле поиска
  const inputBox = document.querySelector('.header__inputbox-mobile');
  //Ф-ия отображающая/скрывающая поле поиска
  const inputBoxShow = () => {
    if (isInputBoxOpen) {
      inputBox.style.height = '0px';
      inputBox.style.paddingTop = '0';
      inputBox.style.paddingBottom = '0';
      isInputBoxOpen = false;
    }
    else {
      inputBox.style.height = (inputBox.scrollHeight) + "px";
      inputBox.style.paddingTop = '35px';
      inputBox.style.paddingBottom = '26px';
      isInputBoxOpen = true;
      //При нажатии на кнопку поиска с крываю меню
      drawer.classList.remove('header-drawer--open');
      drawerContent.style.height = '0';
      drawerContent.style.paddingBottom = "0";
      burgerBtn.innerHTML = iconBurger;
      isDrawerOpen = false;
    }
  };
  searchIcon.onclick = inputBoxShow;



  
  let isDrawerOpen = false;
  //Получаю кнопку (бургер)
  const burgerBtn = document.querySelector('.header-bot__burger');
  //Получаю родительскиый элемент drawer
  const drawer = document.querySelector('.header-drawer');
  //
  const drawerContent = document.querySelector('.header-drawer__content');
  //Иконка крестик
  const burgerIconClose = `
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L12.5 12M12.5 12L18.5 18M12.5 12L18.5 6M12.5 12L6.5 18" stroke="#131214" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
  `;
  //Иконка меню (бургер)
  let iconBurger = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16 11.6667H4M12 5H4M20 18.3333H4" stroke="#131214" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;



  //Ф-ия отображающая/скрывающая меню
  const drawerShow = () => {
    if (isDrawerOpen) {
      drawer.classList.toggle('header-drawer--open');
      drawerContent.style.height = '0';
      drawerContent.style.paddingBottom = "0";
      burgerBtn.innerHTML = iconBurger;
      isDrawerOpen = false;
    }
    else  {
      drawer.classList.toggle('header-drawer--open');
      drawerContent.style.height = drawerContent.scrollHeight + 'px';
      drawerContent.style.paddingBottom = "16px";
      burgerBtn.innerHTML = burgerIconClose;
      isDrawerOpen = true;
      //
      inputBox.style.height = '0px';
      inputBox.style.paddingTop = '0';
      inputBox.style.paddingBottom = '0';
      isInputBoxOpen = false;
    }
  };
  burgerBtn.onclick = drawerShow;

  drawer.onclick = (event) => {
    if (event.target.classList.contains('header-drawer')) {
      drawerShow();
    }
  };



  //Функционал выдвижных категорий/подпунктов меню
  const subDrawerBtns = document.querySelectorAll('.header__linksbox-link');
  
  const subDrawerShow = (event) => {
    const id = event.target.id;
    document.querySelector(`[data-subdrawer="${id}"]`).classList.toggle('header-subdrawer--open');
  };

  subDrawerBtns.forEach(btn => {
    btn.onclick = subDrawerShow;
  });


  //Ф-ия закрывающая выдвижное меню категегорий
  const subDrawerHide = (event) => {
    document.querySelectorAll('.header-subdrawer').forEach(subdrawer => {
      subdrawer.classList.remove('header-subdrawer--open');
    });
  };
 
  const subdrawerCloseBtns = document.querySelectorAll('.header-subdrawer__back');

  subdrawerCloseBtns.forEach(btn => {
    btn.onclick = subDrawerHide;
  });





  //Функционал свайпа, закрытия подменю
  let x1 = null;
  let y1 = null;

  const handleTouchStart = (event) => {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  };

  const handleToucMove = (event) => {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let deltaX = x1 - x2;
    let deltaY = y1 - y2;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        subDrawerHide();
      }
    }

    x1 = null;
    y1 = null;
  
  };


  document.querySelectorAll('.header-subdrawer').forEach(canvas => {
    canvas.addEventListener('touchstart', handleTouchStart, false);
    canvas.addEventListener('touchmove', handleToucMove, false);
  }); 
}




//Скрипты связанные с липким хэдэром

if (window.innerWidth > 991) {
  window.addEventListener('scroll', (event) => {
    if (window.pageYOffset > 70) {
      document.querySelector('.header-bot').classList.add('header-bot--sticky');
      document.body.style.paddingTop = '72px';
      document.querySelectorAll('.header-bot__dropdown').forEach(el => {
        el.style.top = '60px';
      });
    }
    else {
      document.querySelector('.header-bot').classList.remove('header-bot--sticky');
      document.body.style.paddingTop = '0';
      document.querySelectorAll('.header-bot__dropdown').forEach(el => {
        el.style.top = '127px';
      });
    }
  });
}