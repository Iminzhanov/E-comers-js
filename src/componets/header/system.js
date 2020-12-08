const System = () => {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    ul.className = 'system__list'
 
   ul.innerHTML = `
   <li class="system__item"><a href=""><img src="./src/images/user__icon.svg" alt=""/></a></li>
   <li class="system__item"><a href=""><img src="./src/images/cart__icon.svg" alt=""/>
      <span class="system__count">4</span>
   </a></li>
   `;

    div.append(ul);

    return div.outerHTML;
};

export default System();
