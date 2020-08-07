/**
 * Code to build the website
 */

import './styles/main.scss';
import VIRIDITY_LOGO from './assets/viridity_logo_small.png';
import TWITTER_LOGO from './assets/twitter_logo.png';
import MAIL_LOGO from './assets/mail.png';
import GITHUB_LOGO from './assets/github.png';
import LINKEDIN_LOGO from './assets/linkedin.png';
import * as CONSTANTS from './CONSTANTS.js';

import _ from 'lodash';

function build_site () {
  /*** TOOLBAR ***/
  let toolbar = document.createElement('div');
  toolbar.classList.add('toolbar');
  document.body.appendChild(toolbar);

  let viridity_small = document.createElement('div');
  let logo_small = new Image();
  logo_small.src = VIRIDITY_LOGO;
  logo_small.classList.add('logo_small');
  let title_small = document.createElement('div');
  title_small.classList.add('title_small');
  title_small.innerHTML = 'Viridity Capital';
  viridity_small.appendChild(logo_small);
  viridity_small.appendChild(title_small);
  viridity_small.classList.add('logo_small_wrapper');

  let toolbar_links_wrapper = document.createElement('div');
  toolbar_links_wrapper.classList.add('toolbar_links_wrapper');
  let TOOLBAR_LINKS = [
    {
      title: 'Design',
      link: 'https://www.etsy.com/shop/viriditydesigns'
    },
    {
      title: 'Insights',
      link: 'https://viriditycapital.github.io/insights/'
    }
  ];

  for (let i = 0; i < TOOLBAR_LINKS.length; i++) {
    let curr_link = document.createElement('a');
    curr_link.classList.add('toolbar_link');
    let curr_link_text = document.createElement('div');
    curr_link.href = TOOLBAR_LINKS[i].link;
    curr_link_text.innerHTML = TOOLBAR_LINKS[i].title;

    curr_link.appendChild(curr_link_text);
    toolbar_links_wrapper.appendChild(curr_link);
  }

  toolbar.appendChild(viridity_small);
  toolbar.appendChild(toolbar_links_wrapper);

  /*** MAIN PAGE ***/
  let main_page = document.createElement('div');
  let title_box = document.createElement('div');
  let links = document.createElement('div');
  main_page.appendChild(title_box);

  main_page.classList.add('main_page');
  main_page.classList.add('page');

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
  motto.innerHTML = 'free trading tools and education for all';
  motto.classList.add('motto');
  main_page.appendChild(motto);

  document.body.appendChild(main_page);

  /** PROJECTS **/
  let page_projects = document.createElement('div');
  page_projects.classList.add('page');
  page_projects.classList.add('page_projects');

  let title_projects = document.createElement('div');
  title_projects.innerHTML = 'Projects';
  title_projects.classList.add('title_box');
  title_projects.classList.add('projects_title');

  page_projects.appendChild(title_projects);

  // Links
  page_projects.appendChild(links);
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
        <a class="project_link" href="${link_list[i].link}">${link_list[i].name}</a>
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

  document.body.appendChild(page_projects);

  /*** PORTFOLIO ***/
  let page_portfolio = document.createElement('div');
  document.body.appendChild(page_portfolio);

  page_portfolio.classList.add('page');

  let title_portfolio = document.createElement('div');
  title_portfolio.innerHTML = 'Portfolio';
  title_portfolio.classList.add('title_box');
  title_portfolio.classList.add('portfolio_title');

  let body_portfolio = document.createElement('div');

  body_portfolio.classList.add('body_portfolio');

  for (const [key, value] of Object.entries(CONSTANTS.PORTFOLIO_STONKS)) {
    let curr_div = document.createElement('div');
    curr_div.classList.add('list_stonks_wrapper');
    let curr_title = document.createElement('div');
    curr_title.classList.add('portfolio_subtitle');
    let curr_list = document.createElement('div');
    let curr_list_stonks = '';
    curr_list.classList.add('list_stonks');

    for (let i = 0 ; i < value.length; i++) {
      curr_list_stonks += 
      `
      <div class="list_ticker">
      <a href="https://finance.yahoo.com/quote/${value[i].ticker}">
      ${value[i].ticker}
      </a>
      <div>
      `;
    }

    curr_title.innerHTML = `<u>${key}</u>`;
    curr_list.innerHTML = 
    `
    ${curr_list_stonks}
    `;
    curr_div.appendChild(curr_title);
    curr_div.appendChild(curr_list);

    body_portfolio.appendChild(curr_div);
  }

  page_portfolio.appendChild(title_portfolio);
  page_portfolio.appendChild(body_portfolio);

  /** CONTACT **/
  let page_contact = document.createElement('div');
  page_contact.classList.add('page');
  page_contact.classList.add('page_contact');
  document.body.appendChild(page_contact);

  let contact_links = document.createElement('div');
  contact_links.classList.add('contact_links');

  let LINKS = [
    {
      logo: LINKEDIN_LOGO,
      link: 'https://www.linkedin.com/company/66927992'
    },
    {
      logo: GITHUB_LOGO,
      link: 'https://github.com/viriditycapital'
    },
    {
      logo: TWITTER_LOGO,
      link: 'https://twitter.com/viriditycapital'
    },
    {
      logo: MAIL_LOGO,
      link: 'mailto:viridity.capital@gmail.com'
    }
  ];

  for (let i = 0; i < LINKS.length; i++) {
    let curr_image = new Image();
    curr_image.classList.add('link_logo');
    curr_image.src = LINKS[i].logo;

    let curr_link = document.createElement('a');
    curr_link.href = LINKS[i].link;
    curr_link.target = '_blank';
    curr_link.appendChild(curr_image);

    contact_links.appendChild(curr_link);
  }

  page_contact.appendChild(contact_links);

  // Scrolling behavior between pages
  // Set of pages, in order
  let PAGES = [
    main_page,
    page_projects,
    page_portfolio,
    page_contact
  ];

  // Keep track of scrolling
  var curr_page_idx = 0;
  const NUM_PAGES = PAGES.length;

  // Detect touch on mobile, taken from
  // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);

  var xDown = null;                                                        
  var yDown = null;

  function getTouches(evt) {
    return evt.touches;
  }                                                     

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
  }

  function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
      return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
      if ( xDiff > 0 ) {
        /* left swipe */ 
      } else {
        /* right swipe */
      }                       
    } else {
      if ( yDiff > 0 ) {
        /* up swipe */ 
        curr_page_idx = Math.min(NUM_PAGES - 1, curr_page_idx + 1);
      } else { 
        /* down swipe */
        curr_page_idx = Math.max(0, curr_page_idx - 1);
      }                                                                 

      window.scrollTo(0, PAGES[curr_page_idx].offsetTop);
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
  }

  // A filter, debounce for trackpad scrolling.
  // TODO: slight bug if the user continues to scroll aggressively, but small use case
  const scroll_handler = _.debounce((e) => {
    let deltaY = e.wheelDeltaY;

    if (deltaY > 100) {
      // Scroll up
      curr_page_idx = Math.max(0, curr_page_idx - 1);
    } else if (deltaY < -100) {
      // Scroll down
      curr_page_idx = Math.min(NUM_PAGES - 1, curr_page_idx + 1);
    }

    window.scrollTo(0, PAGES[curr_page_idx].offsetTop);
  }, 300, {leading:true, trailing: false});

  const scroll_handler_wrapper = (e) => {
    if (Math.abs(e.wheelDeltaY) > 100) {
      scroll_handler(e);
    }
  };

  window.addEventListener('mousewheel', scroll_handler_wrapper);
  window.addEventListener('wheel', scroll_handler_wrapper);

  // Key press support for scrolling
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 38) {
      // Scroll up
      curr_page_idx = Math.max(0, curr_page_idx - 1);
    } else if (e.keyCode === 40) {
      // Scroll down
      curr_page_idx = Math.min(NUM_PAGES - 1, curr_page_idx + 1);
    }

    window.scrollTo(0, PAGES[curr_page_idx].offsetTop);
  });
}


// Builds the website
build_site();