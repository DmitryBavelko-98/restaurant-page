export default function renderPage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const main = document.createElement('main');
    main.innerHTML = `
        <section class="page">
            <div class="page__content">
                <div class="page__info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sed quae eum quas fuga pariatur adipisci provident ratione minima odio ipsum optio, dicta totam in cum delectus sint! Eveniet, vel.</p>
                </div>
                <img class="page__image" src="../src/page-1.webp" alt="">
            </div>
        </section>
    `;
    main.classList.add('main');
    
    content.appendChild(main);
}