export default ({ stableData }) => {
    return (
        <>
            <header className="header" id="header">
                <div className="header__intro">
                    <video
                        className="header__intro-video"
                        src="/video/720.mp4"
                        poster="/img/bg_no_youtube.jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </div>
                <div className="wrapper__header">
                    <div className="header__top">
                        <nav className="header__navigation">
                            <ul className="navigatin">
                                {stableData.main.menuNavigation.map((n) => (
                                    <li className="navigatin__link" key={n}>
                                        <a href={n.link}>{n.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <span className="hamburger">
                            <span className="hamburger__line"></span>
                            <div className="region__humburger">
                                <h3>{stableData.main.hamburger.title}</h3>
                                <ul>
                                    {stableData.main.menuNavigation.map((n) => (
                                        <li key={n}>
                                            <a href={n.link}>{n.text}</a>
                                        </li>
                                    ))}
                                </ul>
                                <h4>Выбор региона</h4>
                                <ul className="hamburger__ul-regions">
                                    <li>
                                        <a href="#">Минск</a>
                                    </li>
                                    <li>
                                        <a href="brest.html">Брест</a>
                                    </li>
                                    <li>
                                        <a href="gomel.html">Гомель</a>
                                    </li>
                                    <li>
                                        <a href="mogilev.html">Могилев</a>
                                    </li>
                                </ul>

                                <h4>Выбор языка</h4>
                                <div>
                                    <a href="#">рус |</a>
                                    <a href="be/index.html"> бел</a>
                                </div>
                            </div>
                        </span>
                        <span className="hamburger-region">
                            <span className="hamburger-region__line"></span>
                            <div className="region__humburger">
                                <h3 className="region-hamburger__title">Выбор региона</h3>
                                <ul>
                                    <li>
                                        <a href="#">Минск</a>
                                    </li>
                                    <li>
                                        <a href="brest.html">Брест</a>
                                    </li>
                                    <li>
                                        <a href="gomel.html">Гомель</a>
                                    </li>
                                    <li>
                                        <a href="mogilev.html">Могилев</a>
                                    </li>
                                </ul>

                                <h4>Выбор языка</h4>
                                <div>
                                    <a href="#">рус |</a>
                                    <a href="be/index.html"> бел</a>
                                </div>
                            </div>
                        </span>
                        <div className="header__region">
                            <div className="dropdown">
                                <div className="region__now">
                                    <span className="ico ico_region"></span>
                                    <div className="region__now_label">Минск</div>
                                </div>
                                <div className="dropdown-content">
                                    <a href="index.html">Минск</a>
                                    <a href="brest.html">Брест</a>
                                    <a href="gomel.html">Гомель</a>
                                    <a href="mogilev.html">Могилев</a>
                                </div>
                            </div>
                            <div className="header__language">
                                <a href="#" className="header__language_active">
                                    РУС
                                </a>{' '}
                                |<a href="be/index.html">БЕЛ</a>
                            </div>
                        </div>
                    </div>

                    <div className="promo__title">
                        <p className="promo__title-year _anim-items _anim-no-hide">Работаем с 2015 года</p>
                        <span className="promo__title-span _anim-items _anim-no-hide"></span>
                        <p className="promo__title-description _anim-items _anim-no-hide">— Домашняя кухня в быстром формате —</p>
                    </div>
                </div>
            </header>
        </>
    );
};
