$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 15,
        loop: true,
        mouseDrag: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        navText: ["<svg height='30px' width='30px' version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
        "\t viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" +
        "<g>\n" +
        "\t<path d=\"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n" +
        "\t\tc-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n" +
        "\t\t\"/>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "</svg>\n","<svg height='30px' width='30px' version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
        "\t viewBox=\"0 0 477.175 477.175\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" +
        "<g>\n" +
        "\t<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n" +
        "\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "<g>\n" +
        "</g>\n" +
        "</svg>\n"],
    });
});
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.top-menu').classList.toggle('show')
    document.querySelector('body').classList.toggle('lock')
})

document.querySelectorAll('.top-menu a').forEach((igor) => {
    igor.addEventListener('click', () => {
        document.querySelector('.top-menu').classList.remove('show')
    })
})
