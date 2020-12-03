const Nav = () => {
    const tagNav = document.createElement('nav');
    tagNav.className = 'nav__menu'
    tagNav.innerHTML = 
    `
    <ul>
    <li class=""><a href="#">Blog</a></li>
    <li class=""><a href="#">About Us</a></li>
    <li class=""><a href="#">Careers</a></li>
    </ul>
    `;
    return tagNav.outerHTML;
};

export default Nav();

