/**
 * Code to build the website
 */

import './styles/index.scss';
import VIRIDITY_LOGO from './assets/viridity_logo_small.png';

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

  let logo = new Image();
  logo.src = VIRIDITY_LOGO;
  logo.id = 'logo';

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

  let link_list = [
    {
      name: 'marco',
      link: 'https://mikinty.github.io/btc-marco/',
      desc: 'crypto TA 📈'
    },
    {
      name: 'theta',
      link: 'https://viriditycapital.github.io/theta',
      desc: 'burn options premiums 🔥'
    },
    {
      name: 'rpt',
      link: 'https://viriditycapital.github.io/rpt',
      desc: 'weighted rice purity test'
    }
  ];

  // Build the links
  let table_output = '';

  for (let i = 0; i < link_list.length; i++) {
    table_output +=
    `
    <tr>
      <td>
        <a href="${link_list[i].link}">${link_list[i].name}</a>
      </td>
      <td>
        ${link_list[i].desc}
      </td>
    </tr>
    `;
  }

  links.innerHTML = 
  `
  <table>
    ${table_output}
  </table>
  `;

  main_page.appendChild(text_box);

  // We hide one of the flashing backgrounds
  if (Math.random() > 0.5) {
    text_box.innerHTML = 'SPY TO THE FLOOR';
    text_box.classList.add('red_flash');
  } else {
    text_box.innerHTML = 'SPY TO THE MOON';
    text_box.classList.add('green_flash');
  }
}

// Builds the website
build_site();