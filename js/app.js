import {links} from './bottomNav.js';

window.addEventListener('load', (e) => {
  if(typeof category !== 'undefined') {
    getBottomNav(category);
  }
  getFooter();
});

// This function creates a list of links at the
// bottom of the individual tutorial pages. The
// links are at the bottom of the main element
// and list the other tutorials by category.
function getBottomNav(category) {
  let uiList = document.getElementById('link-list');
  let catLinks = links.find((item) => { return item['category'] === category; });
  console.log(catLinks)

  for (let link in catLinks.linkList) {
    let item = document.createElement('li');
    let ref = document.createElement('a');

    ref.href = catLinks.linkList[link].url;
    ref.innerText = catLinks.linkList[link].title;

    item.appendChild(ref);
    uiList.appendChild(item);
  }
}

// Creates the page footer, the dark gray area at
// the bottom of the page.
function getFooter() {
  let contact = document.createElement('div');
  contact.innerHTML = 'Questions? Comments? <a href="contact.html">Contact me</a>';

  let copyright = document.createElement('div');
  copyright.innerHTML = "Copyright &copy; 1998 - 2019, Irene Smith";

  // Get the footer
  let footer = document.getElementById('page_footer');
  footer.appendChild(contact);
  footer.appendChild(copyright);
}
