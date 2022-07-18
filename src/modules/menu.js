export default function renderMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const main = document.createElement('main');
    main.innerHTML = `
        <section class="page">
            <div class="page__content">
                <div class="page__info">
                    <p>Our menu is the best!</p>
                </div>
                <img class="page__image" src="../src/page-1.webp" alt="">
            </div>
        </section>
    `;
    main.classList.add('main');
    
    content.appendChild(main);
}