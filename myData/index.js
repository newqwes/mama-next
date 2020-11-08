const data = {
    ru: {
        main: {
            name: 'Главная страница на русском',
            menuNavigation: [
                { text: 'Доставка', link: '#feedback' },
                { text: 'Меню', link: '#menu' },
                { text: 'Работа', link: '#about-us' },
                { text: 'Отзывы', link: '#about-us' },
                { text: 'Рестораны на фудкортах', link: '#mapTo' },
                { text: 'Контакты', link: '#contacts' },
            ],
            hamburger: { title: 'Главная', language: 'Выбор языка', region: 'Выбор региона' },
            regions: { minsk: 'Минск', brest: 'Брест', gomel: 'Гомель', mogilev: 'Могилев' },
            lang: ['рус', 'бел'],
            headerDescription: ['Работаем с 2015 года', 'Домашняя кухня в быстром формате'],
            delivery: 'Доставка',
            menu: {
                title: 'Меню',
                links: ['Горячие блюда', 'Супы и салаты', 'Драники', 'Сытные блины', 'Сладкие блины и сырники', 'Напитки'],
            },
            myPopupFeedback: {
                title: ['Работа', 'Отзывы'],
                firstDescription: ['У нас приятно работать!', 'Оставьте отзыв'],
                secondDescription: ['Станьте частью нашей команды', 'И мы станем еще лучше'],
                buttons: ['Оставить заявку', 'Оставить отзыв'],
            },
            myMap: {
                title: {
                    at425: 'Рестораны на фудкортах',
                    before425: ['Рестораны', 'на фудкортах'],
                },
                city: ['Минск', 'Брест', 'Гомель', 'Могилев'],
                minsk: [
                    ['ТЦ “МОМО”, фудкорт 2 этаж', 'просп. Партизанский, 150а,', 'станция метро Могилевская'],
                    ['ТРЦ “Dana Mall”, фудкорт 3 этаж', 'ул. Мстиславца, 11,', 'станция метро Восток'],
                    ['ТРЦ “Galileo”, фудкорт 3 этаж', 'ул. Бобруйская, 6,', 'станция метро площадь Ленина'],
                    ['ТРЦ “Palazzo”, фудкорт 3 этаж', 'ул. Тимирязева, 74А'],
                ],
                brest: [['“ЦУМ”, 3 этаж', 'просп. Машерова, 17']],
                gomel: [['ТРЦ “Секрет”, 1 этаж', 'ул. Гагарина, 65']],
                mogilev: [['ТЦ “Парк Сити”, фудкорт 1 этаж', 'Минское шоссе, 31']],
            },
            myContacts: {
                title: 'Контакты',
                contacts: [
                    [
                        'Центральный офис',
                        'ООО "ФэмилиФуд"',
                        'пр. Независимости, 185, офис 8,',
                        'г.Минск, Республика Беларусь, 220125',
                        '(вход со стороны ул.Острошицкая, <br />в торце здания на вывеску "Promofilm")',
                    ],
                    ['Время работы офиса:', 'с 9:30 до 18:00 (пн.-пт.)'],
                    ['Для предложений и поставщиков:', 'HR-отдел:', 'Бухгалтерия:', 'Шеф-повар:'],
                ],
                mail: ['director@mama-doma.by', 'hr@mama-doma.by', 'buh@mama-doma.by', 'food@mama-doma.by'],
                phone: {
                    titles: ['+ ‎375 (44) 793 31 41', '+ ‎375 (29) 371 31 41', '+375 (29) 349 31 41'],
                    links: ['+375447933141', '+375293713141', '+375293493141'],
                },
            },
            myPopupLike: {
                firstTitle: 'Оставьте свой отзыв',
                secondTitle: 'Заполните поля и оставьте отзыв о нас',
                description: 'Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности',
                button: 'Отправить',
                requiredDescription: ['Ваше имя', 'Ваш телефон', 'Напишите свой отзыв...'],
            },
            myPopupWork: {
                firstTitle: 'Работай у нас',
                secondTitle: 'Заполните поля и наш менеджер свяжется с вами!',
                description: 'Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности',
                button: 'Отправить',
                requiredDescription: [
                    'Ваше имя',
                    'Гражданство',
                    'Ваш возраст',
                    'Адрес проживания',
                    'Ваш телефон',
                    'Желаемая должность',
                    'Напишите свой комментарий...',
                ],
            },
        },
        menu: [
            {
                title: 'Горячие блюда',
                items: [
                    {
                        name: 'Гречка по-купечески',
                        image: '0',
                        price: { minsk: [6, 60], other: [6, 20] },
                        gramm: '300 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Котлета и картофельное пюре',
                        image: '1',
                        price: { minsk: [7, 20], other: [7, 20] },
                        gramm: '400 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Картофель по-деревенски',
                        image: '2',
                        price: { minsk: [7, 20], other: [7, 20] },
                        gramm: '150 г.',
                        calorie: '104 ккал.',
                        bju: '1.8 белки, 4.4 жиры, 13.9 углеводы.',
                    },
                    {
                        name: 'Картофель «Фри»',
                        image: '3',
                        price: { minsk: [3, 45], other: [3, 45] },
                        gramm: '150 г.',
                        calorie: '104 ккал.',
                        bju: '15 белки, 43 жиры, 31 углеводы.',
                    },
                    {
                        name: 'Картофельные «Смайлы»',
                        image: '4',
                        price: { minsk: [3, 85], other: [3, 85] },
                        gramm: '150 г.',
                        calorie: '104 ккал.',
                        bju: '15 белки, 43 жиры, 31 углеводы.',
                    },
                ],
            },
            {
                title: 'СУПЫ И САЛАТЫ',
                items: [
                    {
                        name: 'Сырный крем-суп с беконом',
                        image: 'sup-01',
                        price: { minsk: [5, 50], other: [5, 20] },
                        gramm: '400 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Борщ',
                        image: 'sup-02',
                        price: { minsk: [3, 90], other: [3, 50] },
                        gramm: '400 г.',
                        calorie: '127 ккал.',
                        bju: '1.5 белки, 2.7 жиры, 4.0 углеводы.',
                    },
                    {
                        name: 'Грибной с картофелем',
                        image: 'sup-03',
                        price: { minsk: [3, 90], other: [3, 50] },
                        gramm: '400 г.',
                        calorie: '27 ккал.',
                        bju: '0.9 белки, 1.5 жиры, 2.5 углеводы.',
                    },
                    {
                        name: 'Салат «Легкий»',
                        image: 'salat-01',
                        price: { minsk: [3, 95], other: [3, 45] },
                        gramm: '170 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы.',
                    },
                    {
                        name: 'Салат «Мамин Цезарь»',
                        image: 'salat-02',
                        price: { minsk: [4, 95], other: [4, 85] },
                        gramm: '150 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы.',
                    },
                ],
            },

            {
                title: 'ДРАНИКИ',
                items: [
                    {
                        name: 'Драники с мачанкой',
                        image: 'draniki-01',
                        price: { minsk: [6, 60], other: [6, 60] },
                        gramm: '215 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Драники с беконом и яйцом',
                        image: 'draniki-02',
                        price: { minsk: [7, 90], other: [7, 90] },
                        gramm: '200 г.',
                        calorie: '125 ккал.',
                        bju: '6.7 белки, 7.2 жиры, 7.9 углеводы.',
                    },
                    {
                        name: 'Драники с семгой и творожным сыром',
                        image: 'draniki-03',
                        price: { minsk: [9, 90], other: [9, 90] },
                        gramm: '170 г.',
                        calorie: '149 ккал.',
                        bju: '5.7 белки, 8.4 жиры, 12.2 углеводы.',
                    },
                    {
                        name: 'Драники со сметаной 2 шт.',
                        image: 'draniki-04',
                        price: { minsk: [3, 95], other: [3, 95] },
                        gramm: '140 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы.',
                    },
                    {
                        name: 'Драники со сметаной 3 шт.',
                        image: 'draniki-04',
                        price: { minsk: [5, 45], other: [5, 45] },
                        gramm: '190 г.',
                        calorie: '127 ккал.',
                        bju: '1.9 белки, 7.5 жиры, 12.5 углеводы.',
                    },
                    {
                        name: 'Драники с колбасками',
                        image: 'draniki-06',
                        price: { minsk: [7, 6], other: [7, 60] },
                        gramm: '250 г.',
                        calorie: '63 ккал.',
                        bju: '1.2 белки, 2.9 жиры, 7.6 углеводы.',
                    },
                ],
            },

            {
                title: 'СЫТНЫЕ БЛИНЫ',
                items: [
                    {
                        name: '«Мамин Цезарь»',
                        image: 'bliny-01',
                        price: { minsk: [6, 20], other: [6, 20] },
                        gramm: '250 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Двойной «Мамин Цезарь»',
                        image: 'bliny-02',
                        price: { minsk: [7, 95], other: [7, 95] },
                        gramm: '300 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'С картошкой, беконом и яйцом',
                        image: 'bliny-03',
                        price: { minsk: [6, 90], other: [6, 90] },
                        gramm: '240 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'С курочкой и плавленым сыром',
                        image: 'bliny-04',
                        price: { minsk: [5, 40], other: [5, 40] },
                        gramm: '200 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: '«Лазанья»',
                        image: 'bliny-05',
                        price: { minsk: [7, 15], other: [7, 15] },
                        gramm: '250 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: '«Карбонара»',
                        image: 'bliny-06',
                        price: { minsk: [5, 95], other: [5, 95] },
                        gramm: '220 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Ветчина, грибы, сыр',
                        image: 'bliny-07',
                        price: { minsk: [5, 60], other: [5, 60] },
                        gramm: '240 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: '«Норвежец»',
                        image: 'bliny-08',
                        price: { minsk: [9, 90], other: [9, 90] },
                        gramm: '200 г.',
                        calorie: '180 ккал.',
                        bju: '7.8 белки, 8.2 жиры, 18 углеводы',
                    },
                    {
                        name: 'С картошкой, грибами и сыром',
                        image: 'bliny-09',
                        price: { minsk: [4, 95], other: [4, 95] },
                        gramm: '210 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'С ветчиной и сыром',
                        image: 'bliny-10',
                        price: { minsk: [4, 60], other: [4, 60] },
                        gramm: '190 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Двойной с ветчиной и сыром',
                        image: 'bliny-11',
                        price: { minsk: [6, 30], other: [6, 30] },
                        gramm: '270 г.',
                        calorie: 'ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                ],
            },

            {
                title: 'СЛАДКИЕ БЛИНЫ И СЫРНИКИ',
                items: [
                    {
                        name: 'Сырники 3 шт.',
                        image: 'syrnik-01',
                        price: { minsk: [5, 50], other: [5, 50] },
                        gramm: '210 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Блин с "Nutella"',
                        image: 'syrnik-02',
                        price: { minsk: [5, 50], other: [5, 50] },
                        gramm: '160 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Блин со сгущенкой',
                        image: 'syrnik-03',
                        price: { minsk: [3, 30], other: [3, 30] },
                        gramm: '160 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Блин с творогом',
                        image: 'syrnik-04',
                        price: { minsk: [3, 90], other: [3, 90] },
                        gramm: '200 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Блин с ягодным соусом и творожным сыром',
                        image: 'syrnik-02',
                        price: { minsk: [4, 60], other: [4, 60] },
                        gramm: '200 г.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                ],
            },

            {
                title: 'НАПИТКИ',
                items: [
                    {
                        name: 'Американо',
                        image: 'napitki-01',
                        price: { minsk: [3, 25], other: [3, 25] },
                        gramm: '200 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Американо',
                        image: 'napitki-01',
                        price: { minsk: [3, 50], other: [3, 50] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Латте',
                        image: 'napitki-late',
                        price: { minsk: [3, 95], other: [3, 95] },
                        gramm: '200 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Латте',
                        image: 'napitki-late',
                        price: { minsk: [4, 20], other: [4, 20] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Капучино',
                        image: 'napitki-capu',
                        price: { minsk: [3, 95], other: [3, 95] },
                        gramm: '200 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Капучино',
                        image: 'napitki-capu',
                        price: { minsk: [4, 20], other: [4, 20] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Эспрессо',
                        image: 'napitki-expre',
                        price: { minsk: [2, 50], other: [2, 50] },
                        gramm: '60 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Флэт уайт',
                        image: 'napitki-flet',
                        price: { minsk: [4, 50], other: [4, 50] },
                        gramm: '200 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Чай (зелёный, чёрный, травяной)',
                        image: 'napitki-02',
                        price: { minsk: [2, 40], other: [2, 40] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Ягодный чай <br/> (клюква, облепиха, имбирь)',
                        image: 'napitki-03',
                        price: { minsk: [3, 50], other: [3, 50] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Молочный коктейль',
                        image: 'napitki-04',
                        price: { minsk: [3, 90], other: [3, 90] },
                        gramm: '300 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Пиво «Лидское» темное / светлое',
                        image: 'napitki-06',
                        price: { minsk: [3, 50], other: [3, 50] },
                        gramm: '0.5 л.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: '7UP / MIRINDA / PEPSI',
                        image: 'napitki-07',
                        price: { minsk: [2, 50], other: [2, 50] },
                        gramm: '0ю5 л.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Сок в ассортименте',
                        image: 'napitki-08',
                        price: { minsk: [2, 20], other: [2, 20] },
                        gramm: '200 мл.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Квас «Лидский» (темный)',
                        image: 'napitki-09',
                        price: { minsk: [2, 50], other: [2, 50] },
                        gramm: '0.5 л.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                    {
                        name: 'Вода «AURA» (с газом / без)',
                        image: 'napitki-10',
                        price: { minsk: [2, 30], other: [2, 30] },
                        gramm: '0.5 л.',
                        calorie: '000 ккал.',
                        bju: 'белки, жиры, углеводы',
                    },
                ],
            },
        ],
    },
    by: {
        main: {
            name: 'Галоўная старонка на рускай',
            menuNavigation: [
                { text: 'Дастаўка', link: '#feedback' },
                { text: 'Меню', link: '#menu' },
                { text: 'Праца', link: '#about-us' },
                { text: 'Водгукі', link: '#about-us' },
                { text: 'Рэстараны на фудкорт', link: '#mapTo' },
                { text: 'Кантакты', link: '#contacts' },
            ],
            hamburger: { title: 'Галоўная', language: 'Выбар мовы', region: 'Выбар рэгіёну' },
            regions: { minsk: 'Мінск', brest: 'Брэст', gomel: 'Гомель', mogilev: 'Магілёў' },
            lang: ['рус', 'бел'],
            headerDescription: ['Працуем з 2015 года', 'Хатняя кухня ў хуткім фармаце'],
            delivery: 'Дастаўка',
            menu: {
                title: 'Меню',
                links: ['Гарачыя стравы', 'Супы і салаты', 'Дранікі', 'Сытны бліны', 'Салодкія бліны і сырнікі', 'Напоі'],
            },
            myPopupFeedback: {
                title: ['Праца', 'Водгукі'],
                firstDescription: ['У нас прыемна працаваць!', 'Пакіньце водгук'],
                secondDescription: ['Станьце часткай нашай каманды', 'І мы станем яшчэ лепш'],
                buttons: ['Пакінуць заяўку', 'Пакінуць водгук'],
            },
            myMap: {
                title: {
                    at425: 'Рэстараны на фудкорт',
                    before425: ['Рэстараны', 'на фудкортах'],
                },
                city: ['Мінск', 'Брэст', 'Гомель', 'Магілёў'],
                minsk: [
                    ['ГЦ "Момо", фудкорт 2 паверх', 'прасп. Партызанскі, 150а,', 'станцыя метро Магілёўская'],
                    ['ТРЦ "Dana Mall", фудкорт 3 паверх', 'вул. Мсціслаўца, 11,', 'станцыя метро Усход'],
                    ['ТРЦ "Galileo", фудкорт 3 паверх', 'вул. Бабруйская, 6,', 'станцыя метро плошчу Леніна'],
                    ['ТРЦ "Palazzo", фудкорт 3 паверх', 'вул. Ціміразева, 74А'],
                ],
                brest: [['"ЦУМ", 3 паверх', 'пр. Машэрава, 17']],
                gomel: [['ТРЦ "Сакрэт", 1 паверх', 'вул. Гагарына, 65']],
                mogilev: [['Гандлёвы цэнтр "Парк Сіці", фудкорт, 1 паверх', 'Мінскае шашы, 31']],
            },
            myContacts: {
                title: 'кантакты',
                contacts: [
                    [
                        'цэнтральны офіс',
                        'ТАА "ФэмилиФуд"',
                        'пр. Незалежнасці, 185, офіс 8,',
                        'г.Мінск, Рэспубліка Беларусь, 220125',
                        '(Уваход з боку ул.Острошицкая, <br /> ў тарцы будынка на шыльду "Promofilm")',
                    ],
                    ['Час працы офіса:', 'з 9:30 да 18:00 (пн.-пт.)'],
                    ['Для прапаноў і пастаўшчыкоў:', 'HR-аддзел:', 'Бухгалтарскі ўлік:', 'Шэф повар:'],
                ],
                mail: ['director@mama-doma.by', 'hr@mama-doma.by', 'buh@mama-doma.by', 'food@mama-doma.by'],
                phone: {
                    titles: ['+ ‎375 (44) 793 31 41', '+ ‎375 (29) 371 31 41', '+375 (29) 349 31 41'],
                    links: ['+375447933141', '+375293713141', '+375293493141'],
                },
            },
            myPopupLike: {
                firstTitle: 'Пакіньце свой водгук',
                secondTitle: 'Заполните поля и оставьте отзыв о нас',
                description: 'Націскаючы на ​​кнопку, вы згаджаецеся з палітыкай прыватнасці',
                button: 'Адправіць',
                requiredDescription: ['Ваша імя', 'Ваш тэлефон', 'Напішыце свой водгук ...'],
            },
            myPopupWork: {
                firstTitle: 'Працуй у нас',
                secondTitle: 'Запоўніце палі і наш менеджэр звяжацца з вамі!',
                description: 'Націскаючы на ​​кнопку, вы згаджаецеся з палітыкай прыватнасці',
                button: 'Адправіць',
                requiredDescription: [
                    'Ваша імя',
                    'Грамадзянства',
                    'Ваш узрост',
                    'Адрас пражывання',
                    'Ваш тэлефон',
                    'Жаданая пасаду',
                    'Напішыце свой каментар ...',
                ],
            },
        },
        menu: {},
    },
};
export default data;
