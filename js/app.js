import {links} from './bottomNav.js';

window.addEventListener('load', (e) => {
  if(typeof category !== 'undefined') {
    getBottomNav(category);
  }
  getFooter();
});

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

function getFooter() {
  let copyright = document.createElement('div');
  copyright.innerHTML = "Copyright &copy; 1998 - 2019, Irene Smith";

  // Get the footer
  let footer = document.getElementById('page_footer');
  footer.appendChild(copyright);

}
