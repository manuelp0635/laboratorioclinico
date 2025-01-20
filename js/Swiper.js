const swiper = new Swiper('.video-carousel', {
    slidePerView: 1,
    spaceBetween: 10,
    on: {
        slideChange: () => {
            // Pausa todos los videos al cambiar de slide
            videos.forEach((video) => video.pause());
        }
    }
});