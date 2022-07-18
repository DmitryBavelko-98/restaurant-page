export default function renderContact() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const main = document.createElement('main');
    main.innerHTML = `
        <section class="page">
            <div class="page__content">
                <div class="page__info">
                    <p>Contact us!</p>
                    <p>+012 345 6789</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.607502584195!2d23.156929026953115!3d53.135191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc1ba78e3b53%3A0x98b4921a4e1fc863!2saleja%20J%C3%B3zefa%20Pi%C5%82sudskiego%2034%2C%2015-446%20Bia%C5%82ystok%2C%20Polska!5e0!3m2!1spl!2sby!4v1658147702726!5m2!1spl!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    `;
    main.classList.add('main');
    
    content.appendChild(main);
}