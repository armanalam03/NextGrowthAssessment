const cardSection = document.querySelector('.main-section');
const loading = document.querySelector('.loading');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadCard();
    }
  })
}, {
  threshold: 0.8
});
observer.observe(loading);

const loadCard = async() => {
  await fetch('https://fakestoreapi.com/products?limit=15&offset=10')
    .then((res) => res.json())
    .then((data) => {
      data.map((item) => {
        const sectionCard = document.createElement('div');
        sectionCard.classList.add('section-card');
        sectionCard.innerHTML = `
          <section class="image-container">
            <img src="${item.image}" srcset="${item.image} 70w" class="product-img" alt="${item.title}">
          </section>
          <section class="details">
            <span class="title">${item.title}</span>
            <span class="price">$${item.price}</span>
          </section>
        `;
        cardSection.appendChild(sectionCard);
      });
    });
}
