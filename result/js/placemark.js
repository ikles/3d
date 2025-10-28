jQuery(document).ready(function( $ ) {

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            center: [59.874801, 30.329909],        
            controls: ['zoomControl'],
            zoom: 16            
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [59.874747, 30.332667]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'islands#darkGreenIcon',

                balloonContent: 'Меня можно перемещать'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),



        
        /*myPlacemark1 = new ymaps.Placemark([59.874747, 30.332667], {
            
            iconContent: '',
            balloonContent: 'Тверская улица, 9',
            hintContent: 'Тверская улица, 9'
        }, {
            
            preset: 'twirl#buildingsIcon'
        });*/





        myPlacemark2 = new ymaps.Placemark([59.874747, 30.332667], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn"></div>'            
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-1.svg',
            // Размеры метки.
            iconImageSize: [80, 85],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -79],        
            iconContentOffset: [11, 9] // позиция подписи
        });

       /* myPlacemark3 = new ymaps.Placemark([52.718857, 41.449453], {
            // Свойства.
            hintContent: '',
            iconContentLayout: '<div class="icn"></div>',
            iconContent: '<div class="icn">Детский сад</div>'            
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'img/geo-map.svg',
            // Размеры метки.
            iconImageSize: [50, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42],        
            iconContentOffset: [11, 9] // позиция подписи
        });
*/

        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small"
            }
        });



    // Добавляем все метки на карту.
    myMap.controls.add(zoomControl);
    myMap.geoObjects
    .add(myPlacemark2);
}

}); //ready