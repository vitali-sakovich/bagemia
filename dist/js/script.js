$(document).ready(function () {
  $('.slider-main__track').slick({
    dots: true,
    speed: 500,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    adaptiveHeight: true,
    prevArrow: $('.slider-arrow__prev_main'),
    nextArrow: $('.slider-arrow__next_main'),
    appendDots: $('.slider-dots_main'),
  });
  (() => {
    const sliderProduct = document.querySelectorAll('.slider-product');
    sliderProduct.forEach(function (slider) {
      const track = slider.querySelector('.slider-product__track');
      const arrowPrev = slider.querySelector('.slider-arrow__prev_product');
      const arrowNext = slider.querySelector('.slider-arrow__next_product');
      const sliderDots = slider.querySelector('.slider-dots_product');
      $(track).slick({
        dots: true,
        speed: 500,
        arrows: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        prevArrow: $(arrowPrev),
        nextArrow: $(arrowNext),
        appendDots: $(sliderDots),
        responsive: [
          {
            breakpoint: 2200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            },
          },
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          ,
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          ,
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          ,
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          ,
          {
            breakpoint: 370,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  })();

  $('.slider-product-detail__track').slick({
    dots: true,
    speed: 300,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    prevArrow: $('.slider-arrow__prev_detail'),
    nextArrow: $('.slider-arrow__next_detail'),
    appendDots: $('.slider-dots_detail'),
  });

  $('.select-sort').niceSelect();

  // стилизация скролла
  $(document).ready(function scrollNice() {
    $('.scroll').niceScroll({
      cursorcolor: '#d8d8d8',
      cursorwidth: '5px',
      cursorborder: false,
      cursorborderradius: false,
      autohidemode: false,
    });
  });
  (() => {
    const btn = document.querySelector('.all-profile__btn');
    if (!btn) return;
    const btnText = btn.querySelector('span');
    const profile = document.querySelectorAll('.profile_col');
    btn.addEventListener('click', function () {
      if (btnText.textContent.trim() == 'Раскрыть все') {
        for (let i = 2; i < profile.length; i++) {
          profile[i].style.display = 'flex';
          btnText.textContent = 'Скрыть';
        }
      } else {
        for (let i = 2; i < profile.length; i++) {
          profile[i].style.display = 'none';
          btnText.textContent = 'Раскрыть все';
        }
      }
    });
  })();
  // счетчик товаров
  (function () {
    function addHandlers(count) {
      const minus = count.querySelector('.counter__minus');
      let number = count.querySelector('.counter__number');
      const plus = count.querySelector('.counter__plus');

      plus.addEventListener('click', function () {
        number.value++;
      });
      minus.addEventListener('click', function () {
        number.value--;
      });
    }
    var counts = document.querySelectorAll('.counter');
    counts.forEach(addHandlers);
  })();

  $('.counter__number').on('input', function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[A-Za-zА-Яа-яЁё]/, '')
    );
  });

  // маска телефона
  jQuery(function ($) {
    $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
    $('.phone_validate').mask('+7 (~99) 999-99-99');
    $.mask.definitions['~'] = '[1,2,3,4,5,6,9]';
    $('.date_validate').mask('99.99.9999', { placeholder: 'дд.мм.гггг' });
  });

  // input phone
  $(document).on('keypress', function (evt) {
    if (evt.isDefaultPrevented()) {
      // Assume that's because of maskedInput
      // See https://github.com/guillaumepotier/Parsley.js/issues/1076
      $(evt.target).trigger('input');
    }
  });

  // автовысота textarea
  (function () {
    document.querySelectorAll('textarea').forEach((el) => {
      el.style.height = el.setAttribute(
        'style',
        'height: ' + el.scrollHeight + 'px'
      );
      el.classList.add('auto');
      el.addEventListener('input', (e) => {
        el.style.height = 'auto';
        el.style.height = el.scrollHeight + 'px';
      });
    });
  })();

  // очистка форм
  (function () {
    // очистка инпута
    function clearInput(clearInput) {
      const input = clearInput.querySelector('.input');
      const clearBtn = clearInput.querySelector('.clear-input');

      if (!clearBtn) {
        return;
      }

      clearBtn.addEventListener('click', function (e) {
        input.value = '';
      });
    }
    const label = document.querySelectorAll('.label');
    label.forEach(clearInput);

    // очистка Textarea
    function clearTextarea(clearTextarea) {
      const textarea = clearTextarea.querySelector('.textarea');
      const clearBtn = clearTextarea.querySelector('.clear-input');
      if (!clearBtn) {
        return;
      }
      clearBtn.addEventListener('click', function (e) {
        textarea.value = '';
      });
    }
    const labelTextarea = document.querySelectorAll('.label-textarea');
    labelTextarea.forEach(clearTextarea);
  })();

  //   placeholder

  $('.input, .textarea').on('focusin', function () {
    $(this).addClass('is-active');
  });
  $('.input, .textarea').on('focusout', function () {
    if (!$(this).val()) {
      $(this).removeClass('is-active');
    }
  });
  // пароль скрыть, показать
  function password() {
    const label = document.querySelectorAll('.label-password');
    label.forEach(function (labelItem) {
      const passwordControl = labelItem.querySelector('.password-control');
      const inputPassword = labelItem.querySelector('.js-password');
      $(passwordControl).on('click', passwordControl, function () {
        if ($(inputPassword).attr('type') == 'password') {
          $(passwordControl).addClass('view');
          $(inputPassword).attr('type', 'text');
        } else {
          $(passwordControl).removeClass('view');
          $(inputPassword).attr('type', 'password');
        }
        return false;
      });
    });
  }
  password();

  // табы
  $('.tabs__btn').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
      .closest('div.tabs')
      .find('div.tab-content')
      .removeClass('active')
      .eq($(this).index())
      .addClass('active');
  });
});

// открытие модалок
function openModal(modal) {
  modal.style.display = 'block';
  formTab();
  document.body.classList.add('hidden');
  modal.classList.add('open');
  $('.scroll').getNiceScroll().show().resize();
}
const modals = document.querySelectorAll('.modal');
// закрытие модалок
function modal(modal) {
  const overlay = modal.querySelector('.overlay');
  const closeModal = modal.querySelectorAll('.close-modal');
  const input = modal.querySelectorAll('input');

  closeModal.forEach(function (closeModalItem) {
    closeModalItem.addEventListener('click', modalHidden);
  });

  overlay.addEventListener('click', modalHidden);

  function modalHidden() {
    modal.classList.remove('open');
    document.body.classList.remove('hidden');
    input.forEach((item) => {
      item.value = '';
    });
    if (modal.classList.contains('modal-search')) {
      const inputSearch = document.querySelector('.input-search');
      inputSearch.value = '';
      inputSearch.classList.remove('is-active');
    }
    $('.scroll').getNiceScroll().show().resize();
    window.setTimeout(function () {
      modal.style.display = 'none';
    }, 300);
  }
}
modals.forEach(modal);

// Закратие модалок на Esc
(() => {
  document.addEventListener('keydown', ESCclose);
  function ESCclose(evt) {
    if (evt.keyCode == 27) {
      //window.close();
      const modalEsc = document.querySelectorAll('.modal');
      modalEsc.forEach(function (modalEscIttem) {
        const input = modalEscIttem.querySelectorAll('input');
        modalEscIttem.classList.remove('open');
        document.body.classList.remove('hidden');
        input.forEach((item) => {
          item.value = '';
        });
        if (modalEscIttem.classList.contains('modal-search')) {
          const inputSearch = document.querySelector('.input-search');
          inputSearch.value = '';
          inputSearch.classList.remove('is-active');
          inputSearch.blur();
        }
        $('.scroll').getNiceScroll().show().resize();
        window.setTimeout(function () {
          modalEscIttem.style.display = 'none';
        }, 300);
      });
    }
  }
})();

// фокусировка табом
function formTab() {
  const formModal = document.querySelectorAll('.modal form');
  formModal.forEach(function (formModalItem) {
    let lastElem = formModalItem.querySelector('.last-elem');
    let firstElem = formModalItem.querySelector('.first-elem');

    if (!lastElem || !firstElem) {
      return;
    }

    lastElem.onkeydown = function (e) {
      if (e.key == 'Tab' && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function (e) {
      if (e.key == 'Tab' && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };
    firstElem.focus();
  });
}

// global click events
const globalClickHandlers = {
  'js-open-modal': (node) =>
    openModal(document.querySelector(node.dataset.openModal)),
};
document.addEventListener('click', function (e) {
  var foundNodes = [];
  var checkRecursive = (target) => {
    if (target === document || target == undefined) {
      return false;
    }
    var cl = target.classList;

    if (cl === undefined) {
      return false;
    }
    var contains = false;
    for (var c of Object.keys(globalClickHandlers)) {
      if (cl.contains(c)) {
        contains = true;
        break;
      }
    }
    if (contains) {
      foundNodes.push(target);
    }

    return checkRecursive(target.parentElement);
  };
  checkRecursive(e.target);

  var handlers = Object.entries(globalClickHandlers);
  foundNodes.map((node) => {
    handlers.map(([className, callback]) => {
      if (node.classList.contains(className)) {
        callback(node);
      }
    });
  });
});

$(document).ready(() => {
  [...document.querySelectorAll('input')]
    .filter((i) => i.value.trim().length > 0)
    .map((i) => i.classList.add('is-active'));
});

// just an end of a file

(() => {
  document.addEventListener('click', function (event) {
    let item = event.target.closest('.js-close-modal');
    if (!item) return;
    if (!document.contains(item)) return;

    const modal = document.querySelector(item.dataset.closeModal);
    modal.classList.remove('open');
    window.setTimeout(function () {
      modal.style.display = 'none';
    }, 300);
  });
})();

(() => {
  const jsTriggers = document.querySelectorAll('.js-tab-trigger');
  const catalogSubcategories = document.querySelector('.catalog-subcategories');
  jsTriggers.forEach(function (trigger) {
    function checkWidth() {
      if (window.innerWidth > 1100) {
        trigger.addEventListener('mouseover', clickTrigger);
      } else {
        trigger.addEventListener('click', clickTrigger);
      }
    }
    checkWidth();
    window.addEventListener(
      'resize',
      (event) => {
        checkWidth();
      },
      false
    );
    function clickTrigger() {
      const id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        );
      const activeTrigger = document.querySelector('.js-tab-trigger.active');
      const activeContent = document.querySelector('.js-tab-content.active');

      if (activeTrigger) {
        activeTrigger.classList.remove('active');
      }
      trigger.classList.add('active');

      if (activeContent) {
        activeContent.classList.remove('active');
      }
      content.classList.add('active');
      catalogSubcategories.classList.add('active');
      $('.scroll').getNiceScroll().show().resize();
    }
  });
})();
(() => {
  const jsTriggers = document.querySelectorAll('.js-tab-trigger');
  const content = document.querySelectorAll('.js-tab-content');
  const catalogSubcategories = document.querySelector('.catalog-subcategories');
  const close = document.querySelector('.catalog-block__close .close-modal');
  const catalogClose = document.querySelectorAll(
    '.catalog-subcategories__box-close'
  );
  close.addEventListener('click', function () {
    deleteClass();
  });
  catalogClose.forEach(function (e) {
    e.addEventListener('click', function () {
      deleteClass();
    });
  });
  function deleteClass() {
    triggersClass();
    contentClass();
    catalogSubcategories.classList.remove('active');
  }
  function triggersClass() {
    jsTriggers.forEach(function (trigger) {
      trigger.classList.remove('active');
    });
  }
  function contentClass() {
    content.forEach(function (contentItem) {
      contentItem.classList.remove('active');
    });
  }
})();

(() => {
  const collections = document.querySelectorAll('.collections-filter__box');
  if (!collections) return;
  collections.forEach(function (e) {
    const btn = e.querySelector('.collections-filter__show-btn');
    const item = e.querySelectorAll('.collections-filter__param');
    btn.addEventListener('click', function () {
      if (btn.textContent.trim() == 'Показать все') {
        for (let i = 6; i < item.length; i++) {
          item[i].style.display = 'block';
          btn.textContent = 'Свернуть';
          e.classList.add('active');
        }
      } else {
        for (let i = 6; i < item.length; i++) {
          item[i].style.display = 'none';
          btn.textContent = 'Показать все';
          e.classList.remove('active');
        }
      }
    });
  });
})();

(() => {
  const btn = document.querySelector('.js-open-requisites');
  if (!btn) return;
  const requisite = document.querySelectorAll('.requisite');
  btn.addEventListener('click', function () {
    if (btn.textContent.trim() == 'Показать реквизиты') {
      for (let i = 2; i < requisite.length; i++) {
        requisite[i].style.display = 'flex';
        btn.textContent = 'Свернуть реквизиты';
      }
    } else {
      for (let i = 2; i < requisite.length; i++) {
        requisite[i].style.display = 'none';
        btn.textContent = 'Показать реквизиты';
      }
    }
  });
})();

(() => {
  const cardAccount = document.querySelectorAll('.personal-card_p50 .card_row');
  cardAccount.forEach(function (item) {
    const textChange = item.querySelector('.card_text');
    const btn = item.querySelector('.change-data__btn');
    const label = item.querySelector('label');
    const input = item.querySelector('input');
    btn.addEventListener('click', function () {
      label.style.display = 'block';
      input.value = textChange.textContent;
      input.focus();
    });
    document.addEventListener('click', (e) => {
      const withinBoundaries = e.composedPath().includes(item);
      if (!withinBoundaries) {
        label.style.display = 'none';
        input.value = textChange.textContent;
      }
    });
  });
})();

(() => {
  const label = document.querySelectorAll('.js-input-autocomplete');
  label.forEach(function (labelItem) {
    const input = labelItem.querySelector('.form__input');
    const array = labelItem.querySelectorAll('.js_get_item');
    input.addEventListener('input', () => {
      if (array.length != 0) {
        array[0].focus();
        console.log(array);
      }
    });
    if (array.length != 0) {
      let i = 0;
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 40 && i != array.length - 1) {
          i++;
          array[i].focus();
          console.log(i);
        }
        if (e.keyCode == 38 && i != 0) {
          i--;
          array[i].focus();
          console.log(i);
        }
      });
    }
  });
})();
