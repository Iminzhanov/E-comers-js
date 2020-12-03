import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
import Icon from './icon.js';

const Header = () => {
    const tagHeader = document.createElement('header');
    tagHeader.innerHTML = ` 
      <div class="container">
        <div class="header__top">
          ${Contact}
          ${Nav}
        </div>
        <div class=header__middle>
        ${Logo}
        ${Icon}
        </div>
        <div class=header__bottom></div>
      </div>
    `;
    document.body.appendChild(tagHeader);
    return tagHeader
};
Header();