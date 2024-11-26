var suitsRoomsSwiper = new Swiper(".suitsRoomsSwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Render bullet for each slide
      return `<span class="${className}">${index + 1}</span>`;
    },
    type: "custom",
    renderCustom: function (swiper, current, total) {
      // Bullets first, fractional pagination second
      return `
      <div class="swiper-pagination-bullets">
        ${Array(total)
          .fill("")
          .map(
            (_, i) =>
              `<span class="swiper-pagination-bullet ${
                i + 1 === current ? "swiper-pagination-bullet-active" : ""
              }" data-index="${i}"></span>`
          )
          .join("")}
      </div>
      <div class="swiper-pagination-fraction">${current} / ${total}</div>
    `;
    },
  },
  breakpoints: {
    // When the viewport width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When the viewport width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var bannerSwiper = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Render bullet for each slide
      return `<span class="${className}">${index + 1}</span>`;
    },
    type: "custom",
    renderCustom: function (swiper, current, total) {
      // Bullets first, fractional pagination second
      return `
      <div class="swiper-pagination-bullets">
        ${Array(total)
          .fill("")
          .map(
            (_, i) =>
              `<span class="swiper-pagination-bullet ${
                i + 1 === current ? "swiper-pagination-bullet-active" : ""
              }" data-index="${i}"></span>`
          )
          .join("")}
      </div>
      <div class="swiper-pagination-fraction">${current} / ${total}</div>
    `;
    },
  },
  breakpoints: {
    // When the viewport width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When the viewport width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

var gallerySwiper = new Swiper(".gallerySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    renderBullet: function (index, className) {
      // Render bullet for each slide
      return `<span class="${className}">${index + 1}</span>`;
    },
    type: "custom",
    renderCustom: function (swiper, current, total) {
      // Bullets first, fractional pagination second
      return `
        <div class="swiper-pagination-bullets">
          ${Array(total)
            .fill("")
            .map(
              (_, i) =>
                `<span class="swiper-pagination-bullet ${
                  i + 1 === current ? "swiper-pagination-bullet-active" : ""
                }" data-index="${i}"></span>`
            )
            .join("")}
        </div>
        <div class="swiper-pagination-fraction">${current} / ${total}</div>
      `;
    },
  },
  breakpoints: {
    // When the viewport width is >= 320px
    320: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    // When the viewport width is >= 768px
    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});
