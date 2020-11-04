export default () => {
    return (
        <>
            <section className="map" id="mapTo">
                <div className="map__wrapper wrapper">
                    <div className="map__title">
                        <h2>
                            <span className="map__title_at-425">— Рестораны на фудкортах —</span>
                            <span className="map__title_before-425">
                                — Рестораны <br />
                                на фудкортах —
                            </span>
                        </h2>
                    </div>
                    <div className="feedback__layout">
                        <div className="feedback__contacts _anim-items">
                            <div className="feedback__city-left">
                                <div className="contacts__city-title">Минск</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТЦ “МОМО”, фудкорт 2 этаж</h4>
                                        <p>
                                            просп. Партизанский, 150а, <br />
                                            станция метро Могилевская
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТРЦ “Dana Mall”, фудкорт 3 этаж</h4>
                                        <p>
                                            ул. Мстиславца, 11,
                                            <br />
                                            станция метро Восток
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТРЦ “Galileo”, фудкорт 3 этаж</h4>
                                        <p>
                                            ул. Бобруйская, 6,
                                            <br />
                                            станция метро площадь Ленина
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТРЦ “Palazzo”, фудкорт 3 этаж</h4>
                                        <p>ул. Тимирязева, 74А</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                            </div>
                            <div className="feedback__city-right">
                                <div className="contacts__city-title">Брест</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>“ЦУМ”, 3 этаж</h4>
                                        <p>просп. Машерова, 17</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__city-title">Гомель</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТРЦ “Секрет”, 1 этаж</h4>
                                        <p>ул. Гагарина, 65</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__city-title">Могилев</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>ТЦ “Парк Сити”, фудкорт 1 этаж</h4>
                                        <p>Минское шоссе, 31</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                            </div>
                        </div>
                        <div id="map" className="map__yandex _anim-items"></div>
                    </div>
                </div>
            </section>
        </>
    );
};
