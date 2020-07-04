$(document).ready(function() {
  let count = 0;

  $('.app__button').on('click', function() {
    const windowPromo = $('.wrapper');

    windowPromo.css('display', 'block');
  });

  $('.app__carousel-close').on('click', function() {
    const windowPromo = $('.wrapper');

    windowPromo.css('display', 'none');
  });

  $('.app__button-next').on('click', function() {
    const prevButton = $('.app__button-prev');
    const currentBlock = $('.active');
    const nextBlock = currentBlock.next();
    const currentDot = $('.active-dot');
    const nextDot = currentDot.next();
    const nextButton = $('.app__button-next');

    prevButton.css('display', 'block');
    count++;

    if (count === 2) {
      nextButton.css('display', 'none');
    }

    if (nextBlock.length) {
      currentBlock.removeClass('active');
      nextBlock.addClass('active');
      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');
    }
  });

  $('.app__button-prev').on('click', function() {
    const nextButton = $('.app__button-next');
    const currentBlock = $('.active');
    const prevBlock = currentBlock.prev();
    const currentDot = $('.active-dot');
    const prevDot = currentDot.prev();
    const prevButton = $('.app__button-prev');

    nextButton.css('display', 'block');
    count--;

    if (count === 0) {
      prevButton.css('display', 'none');
    }

    if (prevBlock.length) {
      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
      currentBlock.removeClass('active');
      prevBlock.addClass('active');
    }
  });
});
