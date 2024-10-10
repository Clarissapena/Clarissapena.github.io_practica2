function changeBackgroundImage() {
    var hero = document.querySelector('.hero');
    if (hero.style.backgroundImage.includes('mick-haupt-eXaryhdPD8g-unsplash')) {
        hero.style.backgroundImage = "url('https://i.etsystatic.com/25175322/r/il/b2ffa1/3918397368/il_1140xN.3918397368_8p99.jpg')";
    } else {
        hero.style.backgroundImage = "url('https://keepthemspinning.com/cdn/shop/articles/mick-haupt-eXaryhdPD8g-unsplash-scaled.jpg?v=1697556978&width=1500')";
    }
}
