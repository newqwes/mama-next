export default () => {
    return (
        <>
            <section className="menu" id="menu">
                <div className="menu__wrapper wrapper">
                    <div className="menu__title">
                        <h2>— Меню —</h2>
                    </div>
                    <div className="menu__layout layout-3-column">
                        <div className="menu__item">
                            <a className="menu__links menu__to-0 _anim-items" href="hotDish.html">
                                Горячие блюда
                            </a>
                        </div>

                        <div className="menu__item">
                            <a className="menu__links menu__to-2 _anim-items" href="sup_salat.html">
                                Супы и салаты
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-3 _anim-items" href="draniki.html">
                                Драники
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-4 _anim-items" href="bliny.html">
                                Сытные блины
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links _long-desc menu__to-6 _anim-items" href="bliny_syrniki.html">
                                Сладкие блины и сырники
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-7 _anim-items" href="napitki.html">
                                Напитки
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
