/**
 * Code to build the website
 */

function build_site () {
  let green_flash = document.createElement('div');
  let red_flash   = document.createElement('div');
  let text_box    = document.createElement('div');

  green_flash.classList.add('green_flash');
  red_flash.classList.add('red_flash');
  text_box.classList.add('text_box');

  // document.body.appendChild(green_flash);
  // document.body.appendChild(red_flash);
  document.body.appendChild(text_box);

  // We hide one of the flashing backgrounds
  if (Math.random() > 0.5) {
    text_box.innerHTML = 'SPY TO THE FLOOR';
    document.body.classList.add('red_flash');
  } else {
    text_box.innerHTML = 'SPY TO THE MOON';
    document.body.classList.add('green_flash');
  }
}

// Builds the website
build_site();