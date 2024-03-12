//Скрипты для главной страницы
if (document.querySelector('.home-page')) {
  const bannerSlider = new Swiper('.banner__slider', {
    spaceBetween: 20,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-banner",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-banner",
      prevEl: ".swiper-button-prev-banner",
    },
  });

  const reviewsSlider = new Swiper('.reviews__inner', {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".reviews-button-next",
          prevEl: ".reviews-button-prev",
        },
      },
    },
  });

  const soundEquipmentSlider = new Swiper('.sound-equipment__inner', {
    spaceBetween: 18,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".sound-equipment-button-next",
      prevEl: ".sound-equipment-button-prev",
    },
  });

  const recommendSlider = new Swiper('.recommend__inner', {
    spaceBetween: 20,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".recommend-button-next",
      prevEl: ".recommend-button-prev",
    },
  });
  
  let isOpenText = false;

  document.querySelector('.organization__btn').onclick = () => {
    let text =  document.querySelector('.organization__inner');
    if (isOpenText) {
      text.style.height = '270px';
      isOpenText = false;
    }
    else {
      text.style.height = text.scrollHeight + 'px';
      isOpenText = true;
    }
  };
}

//Страница товара
else if (document.querySelector('.product-details-page')) {

  const productSmallSlider = new Swiper(".product-details__small-slider", {
    spaceBetween: 18,
    slidesPerView: 3,
    watchSlidesProgress: true,
  });

  const productBigSlider = new Swiper(".product-details__big-slider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".product-slider-right",
      prevEl: ".product-slider-left",
    },
    thumbs: {
      swiper: productSmallSlider,
    },
  });

  const podborkaSlider = new Swiper('.podborka__slider-inner', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".podborka-slider-next",
      prevEl: ".podborka-slider-prev",
    },
  });

  const podborkaSlider1 = new Swiper('.podborka__slider-inner1', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".podborka1-slider-next",
      prevEl: ".podborka1-slider-prev",
    },
  });

  const podborkaSlider2 = new Swiper('.podborka__slider-inner2', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".podborka2-slider-next",
      prevEl: ".podborka2-slider-prev",
    },
  });
  
  const podborkaSlider3 = new Swiper('.podborka__slider-inner3', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".podborka3-slider-next",
      prevEl: ".podborka3-slider-prev",
    },
  });

  const podborkaSlider4 = new Swiper('.podborka__slider-inner4', {
    spaceBetween: 24,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".podborka4-slider-next",
      prevEl: ".podborka4-slider-prev",
    },
  });

  const productTabs = document.querySelectorAll('.sizes-mobil__tab-btn');
  const productTabsContents = document.querySelectorAll('.sizes-mobil__tabs-text');

  productTabs.forEach(tab => {
    tab.onclick = (event) => {
      productTabs.forEach(el => {
        el.classList.remove('tab-active');
      });
      event.target.classList.add('tab-active');

      productTabsContents.forEach(el => {
        el.classList.remove('tab-content-active');
      });

      const id = event.target.id;

      document.querySelector(`[data-tab="${id}"]`).classList.add('tab-content-active');
    };
  });

}

//Странца корзины
else if (document.querySelector('.cart-page')) {
  const cartRecommendSlider = new Swiper('.cart-item__recommend', {
    slidesPerView: "auto",
    spaceBetween: 24,
    freeMode: true,
  });

  const offersSlider = new Swiper('.offers__slider', {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
      nextEl: ".offers-btn-right",
      prevEl: ".offers-btn-left",
    },
  });

  //Функционал открытия слайдера в элементах корзины
  document.querySelector('.cart').addEventListener('click', (event => {
    if (event.target.closest('.cart-item__show-recommend')) {
      event.target.classList.toggle('cart-item__show-recommend--active');
      const parent = event.target.closest('.cart-item__container');
      const cartItemRecommend = parent.querySelector('.cart-item__recommend');
      if (cartItemRecommend.classList.contains('cart-item__recommend--open')) {
        cartItemRecommend.style.height = '0px';
        cartItemRecommend.style.marginBottom = '0';
      }
      else {
        cartItemRecommend.style.height = '211px';
        cartItemRecommend.style.marginBottom = '24px';
      }
      cartItemRecommend.classList.toggle('cart-item__recommend--open');
    }
  }));


  
  let isCheked = false;

  //Функция которая выбирает все элементы корзины
  const selectAllCartItem = (event) => {
    if (isCheked) {
      document.querySelectorAll('.cart-item__input').forEach(el => {
        el.checked = false;
        isCheked = false;
      });
    }
    else {
      document.querySelectorAll('.cart-item__input').forEach(el => {
        el.checked = true;
        isCheked = true;
      });
    }
  };

  //Вешаю функцию выше на инпут 'выбрать все'
  document.querySelector('.cart__head-input').onchange = selectAllCartItem;

  //Функция которая удаляет все выбранные элементы в корзине
  const removeAllCartItems = (event) => {
    //Нахожу все чекбоксы привязанные к элементу в корзине
    const cartItemCheckboxes = document.querySelectorAll('.cart-item__input');
    //Пробегаюсь, и если нахожу выбранный инпут, удаляю рожителя (то есть сам элемент корзины) 
    cartItemCheckboxes.forEach(input => {
      if (input.checked) {
        input.closest('.cart-item__container').remove();
      }
    });
    //Обнволяю состояние чекбокса
    document.querySelector('.cart__head-input').checked = false;
  };

  document.querySelector('.cart__delete-all').onclick = removeAllCartItems;

}

//Страница каталога
else if (document.querySelector('.catalog-page')) {
  $(".sidebar-item__input-range").ionRangeSlider();

  //Выпадашки на странице каталога
  const catalogDropHeads = document.querySelectorAll('.sidebar-item__head');

  catalogDropHeads.forEach(el => {
    el.onclick = (event) => {
      const parent = event.target.closest('.sidebar-item');
      parent.classList.toggle('sidebar-drop-open');

      const drop = parent.querySelector('.sidebar-item__list');

      if (parent.classList.contains('sidebar-drop-open')) {
        drop.style.height = (drop.scrollHeight + 30) + 'px';
        drop.style.paddingBottom = '30px';
      }
      else {
        drop.style.height = '0px';
        drop.style.paddingBottom = '0px';
      }
    };
  });

  // document.querySelector('.sidebar-item__list-btns').onclick = (event) => {
  //   if (event.target.classList.contains('sidebar-item__list-btn')) {
  //     event.target.classList.toggle('sidebar-item__list-btn--active');
  //   }
  // };

  document.querySelectorAll('.catalog__filters-link').forEach(el => {
    el.onclick = (event) => {
      event.target.classList.toggle('catalog__filters-link--active');
    }
  });

  //Выпадающий список сортировки
  const selectHead = document.querySelector('.catalog__select-head');

  selectHead.onclick = (event) => {
    const parent = event.target.closest('.catalog__select-box');
    const list = parent.querySelector('.catalog__select-list');
    parent.classList.toggle('select-open');
    if (parent.classList.contains('select-open')) {
      list.style.display = 'block';
    }
    else {
      list.style.display = 'none';
    }
  };

  document.querySelector('.catalog__select-list').addEventListener("click", (event) => {
    if (event.target.classList.contains('catalog__select-list-item')) {
      const parent = event.target.closest('.catalog__select-box');
      parent.querySelector('span').innerHTML = event.target.innerHTML;
      parent.classList.remove('select-open');
      parent.querySelector('.catalog__select-list').style.display = 'none';
    }
  });

  const filterBtn = document.querySelector('.catalog__filter-btn--open');

  filterBtn.onclick = () => {
    document.querySelector('.catalog__sidebar-container').style.opacity = '1';
    document.querySelector('.catalog__sidebar-container').style.visibility = 'visible';
    document.querySelector('.catalog__sidebar').style.transform = 'translateY(0%)';
  };

  const filterBtnClose = document.querySelector('.filter-close-btn');

  filterBtnClose.onclick = () => {
    document.querySelector('.catalog__sidebar-container').style.opacity = '0';
    document.querySelector('.catalog__sidebar-container').style.visibility = 'hidden';
    document.querySelector('.catalog__sidebar').style.transform = 'translateY(100%)';
  };

  document.querySelector('.catalog__sidebar-container').onclick = (event) => {
    if (event.target.classList.contains('catalog__sidebar-container')) {
      document.querySelector('.catalog__sidebar-container').style.opacity = '0';
      document.querySelector('.catalog__sidebar-container').style.visibility = 'hidden';
      document.querySelector('.catalog__sidebar').style.transform = 'translateY(100%)';
    }
  };

  
  const subDropHeads = document.querySelectorAll('.sidebar-item__list-link');

  subDropHeads.forEach(el =>{
    el.onclick = (event) => {
      const parent = event.target.closest('.sidebar-item__list-item');
      parent.classList.toggle('sidebar-item__list-link--active');
      if (parent.classList.contains('sidebar-item__list-link--active')) {
        const ul = parent.querySelector('ul');
        ul.style.height = ul.scrollHeight + 'px';
      }
      else {
        const ul = parent.querySelector('ul');
        ul.style.height = '0';
      }
    };
  });
};




