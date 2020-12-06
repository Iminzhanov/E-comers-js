const searchBar = () => {
    const div = document.createElement('div');
    div.className = 'header__search-bar search-bar'
    div.innerHTML = `
    <ul class="search-bar__list">
        <h3 class="search-bar__title">
            All categories
            <img src="./src/images/arrow__middle.svg" alt=""/>
        </h3>
        <li class="search-bar__item"><a class="search-bar__link" href="#">random.text</a></li>
        <li class="search-bar__item"><a class="search-bar__link" href="#">random.text</a></li>
        <li class="search-bar__item"><a class="search-bar__link" href="#">random.text</a></li>
    </ul>  
    <label>
       <input class="search-bar__input" type="text" placeholder="Search Products, categories ..." />
    </label>  
    <button><img src="./src/images/lupa.svg"</button>
    `;
    return div.outerHTML;
};
export default searchBar();