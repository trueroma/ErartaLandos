const init = () => {
    const map = new ymaps.Map('map', {
        center: [59.932119, 30.251335],
        zoom: 17,
        controls: ['zoomControl'],
        behaviors: ['drag'],
    });

    const placemark = new ymaps.Placemark([59.932119, 30.251335], {
        hintContent: 'Эрарта',
        balloonContent: [
            'Всё ещё Эрарта'
        ].join('')
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'js/locate1.png',
        iconImageSize: [46, 58],
    });

    map.geoObjects.add(placemark);
};
ymaps.ready(init);