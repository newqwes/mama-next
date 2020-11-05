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
                                    <li className="navigatin__link">
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
                                        <li>
                                            <a href={n.link}>{n.text}</a>
                                        </li>
                                    ))}
                                </ul>
                                <h4>{stableData.main.hamburger.region}</h4>
                                <ul className="hamburger__ul-regions">
                                    <li>
                                        <a href="#">{stableData.main.regions.minsk}</a>
                                    </li>
                                    <li>
                                        <a href="brest.html">{stableData.main.regions.brest}</a>
                                    </li>
                                    <li>
                                        <a href="gomel.html">{stableData.main.regions.gomel}</a>
                                    </li>
                                    <li>
                                        <a href="mogilev.html">{stableData.main.regions.mogilev}</a>
                                    </li>
                                </ul>

                                <h4>{stableData.main.hamburger.language}</h4>
                                <div>
                                    <a href="#">{stableData.main.lang[0]} |</a>
                                    <a href="be/index.html"> {stableData.main.lang[1]}</a>
                                </div>
                            </div>
                        </span>
                        <span className="hamburger-region">
                            <span className="hamburger-region__line"></span>
                            <div className="region__humburger">
                                <h3 className="region-hamburger__title">{stableData.main.hamburger.region}</h3>
                                <ul>
                                    <li>
                                        <a href="#">{stableData.main.regions.minsk}</a>
                                    </li>
                                    <li>
                                        <a href="brest.html">{stableData.main.regions.brest}</a>
                                    </li>
                                    <li>
                                        <a href="gomel.html">{stableData.main.regions.gomel}</a>
                                    </li>
                                    <li>
                                        <a href="mogilev.html">{stableData.main.regions.mogilev}</a>
                                    </li>
                                </ul>

                                <h4>{stableData.main.hamburger.language}</h4>
                                <div>
                                    <a href="#">{stableData.main.lang[0]} |</a>
                                    <a href="be/index.html"> {stableData.main.lang[1]}</a>
                                </div>
                            </div>
                        </span>
                        <div className="header__region">
                            <div className="dropdown">
                                <div className="region__now">
                                    <span className="ico ico_region"></span>
                                    <div className="region__now_label">{stableData.main.regions.minsk}</div>
                                </div>
                                <div className="dropdown-content">
                                    <a href="index.html">{stableData.main.regions.minsk}</a>
                                    <a href="brest.html">{stableData.main.regions.brest}</a>
                                    <a href="gomel.html">{stableData.main.regions.gomel}</a>
                                    <a href="mogilev.html">{stableData.main.regions.mogilev}</a>
                                </div>
                            </div>
                            <div className="header__language">
                                <a href="#" className="header__language_active">
                                    {stableData.main.lang[0]}
                                </a>
                                |<a href="be/index.html">{stableData.main.lang[1]}</a>
                            </div>
                        </div>
                    </div>

                    <div className="promo__title">
                        <p className="promo__title-year _anim-items _anim-no-hide">{stableData.main.headerDescription[0]}</p>
                        <span className="promo__title-span _anim-items _anim-no-hide"></span>
                        <p className="promo__title-description _anim-items _anim-no-hide">— {stableData.main.headerDescription[1]} —</p>
                    </div>
                </div>
            </header>
        </>
    );
};
