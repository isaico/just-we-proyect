
new Glide('.glide',{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: "0",
    gap:50,
    animationDuration: 800,
    breakpoints: {

        1024: {
          perView: 2
        },
        768: {
          perView: 1
        },
        480: {
          perView: 1
        },
        375: {
          perView: 1
        }
    }
}).mount()

