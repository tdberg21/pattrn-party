$('.header-hamburger-button').click(() => { 
  if ($('.display-toggle').css('display') === 'none') {
    $('.display-toggle').css('display', 'inline');
  } else {
    $('.display-toggle').css('display', 'none');
  }
});
