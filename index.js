/**
 * Code to build the website
 */

function build_site () {
  // Where we put the logo and title
  let main_page = document.createElement('div');
  let title_box = document.createElement('div');
  let links = document.createElement('div');
  let text_box = document.createElement('div');

  text_box.classList.add('text_box');

  document.body.appendChild(main_page);
  main_page.appendChild(title_box);

  main_page.classList.add('main_page');

  // Title
  let logo_link = document.createElement('a');
  logo_link.href = 'https://www.linkedin.com/company/66927992';
  let logo = document.createElement('img');
  logo.src = './assets/viridity_logo_small.png';
  const LOGO_SIZE = 140;
  logo.width = LOGO_SIZE;
  logo.height = LOGO_SIZE;

  let title_text = document.createElement('div');
  title_text.innerHTML = 'Viridity Capital, LLC';

  logo_link.appendChild(logo);
  title_box.appendChild(logo_link);
  title_box.appendChild(title_text);

  title_box.classList.add('title_box');

  let motto = document.createElement('div');
  motto.innerHTML = '#bearlivesmatter';
  motto.classList.add('motto');
  main_page.appendChild(motto);

  // Links
  main_page.appendChild(links);
  links.classList.add('links');
  links.innerHTML = 
  `
  <table>
  <tr>
  <td>
  <a href="https://viriditycapital.github.io/theta">theta</a>
  </td>
  <td>
  burn options premiums 🔥
  </td>
  </tr>
  <tr>
  <td>
  <a href="https://viriditycapital.github.io/rpt/">rpt</a>
  </td>
  <td>
  weighted rice purity test
  </td>
  </tr>
  </table>
  `;

  main_page.appendChild(text_box);

  // We hide one of the flashing backgrounds
  if (Math.random() > 0.5) {
    text_box.innerHTML = 'SPY TO <br> THE FLOOR';
    text_box.classList.add('red_flash');
  } else {
    text_box.innerHTML = 'SPY TO <br> THE MOON';
    text_box.classList.add('green_flash');
  }
}

// Builds the website
build_site();