export default () => {
    return (
        <>
            <section className="contacts" id="contacts">
                <div className="contacts__wrapper wrapper">
                    <div className="contacts__title">
                        <h2>— Контакты —</h2>
                    </div>
                    <div className="contacts__layouts">
                        <div className="contacts__layouts-item_1">
                            <div className="contacts__place-ico">
                                <div>
                                    <h4>
                                        <span className="ico ico_placecontacts"></span>Центральный офис
                                    </h4>
                                    <p>
                                        ООО "ФэмилиФуд" <br />
                                        пр. Независимости, 185, офис 8, <br />
                                        г.Минск, Республика Беларусь, 220125 <br />
                                        <em>
                                            (вход со стороны ул.Острошицкая, <br />в торце здания на вывеску "Promofilm")
                                        </em>
                                    </p>
                                </div>
                            </div>
                            <div className="contacts__place-ico">
                                <div className="contacts__place-ico_time">
                                    <h4>
                                        <span className="ico ico_clock"></span> Время работы офиса: <br />с 9:30 до 18:00 (пн.-пт.)
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__layouts-item_2">
                            <div className="contacts__contacts">
                                <h4>Для предложений и поставщиков:</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:director@mama-doma.by">
                                        <span className="ico ico_mail"></span>director@mama-doma.by
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href="tel:+375447933141">
                                        <span className="ico ico_phone"></span>+ ‎375 (44) 793 31 41
                                    </a>
                                </div>
                                <h4>HR-отдел:</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:hr@mama-doma.by">
                                        <span className="ico ico_mail"></span>hr@mama-doma.by
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href="tel:+375293713141">
                                        <span className="ico ico_phone"></span>+ ‎375 (29) 371 31 41
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__layouts-item_3">
                            <div className="contacts__contacts">
                                <h4>Бухгалтерия:</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:buh@mama-doma.by">
                                        <span className="ico ico_mail"></span>buh@mama-doma.by
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href="tel:+375293493141">
                                        <span className="ico ico_phone"></span>‎+375 (29) 349 31 41
                                    </a>
                                </div>
                                <h4>Шеф-повар:</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:food@mama-doma.by">
                                        <span className="ico ico_mail"></span>food@mama-doma.by
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
