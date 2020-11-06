import Link from 'next/link';

export default ({ stableData, setIsRu, isRu, nowCity, setNowCity }) => {
    return (
        <>
            <header className="menu-page-header">
                <div className="header__top">
                    <nav className="header__navigation">
                        <ul className="navigatin">
                            {stableData.main.menuNavigation.map((n) => (
                                <li className="navigatin__link">
                                    <a href={'/' + n.link}>{n.text}</a>
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
                                        <a href={'/' + n.link}>{n.text}</a>
                                    </li>
                                ))}
                            </ul>
                            <h4>{stableData.main.hamburger.region}</h4>
                            <ul className="hamburger__ul-regions">
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.minsk)}>{stableData.main.regions.minsk}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.brest)}>{stableData.main.regions.brest}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.gomel)}>{stableData.main.regions.gomel}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.mogilev)}>{stableData.main.regions.mogilev}</a>
                                    </Link>
                                </li>
                            </ul>

                            <h4>{stableData.main.hamburger.language}</h4>
                            <div>
                                <Link href="/policy">
                                    <a onClick={() => setIsRu(true)}>{stableData.main.lang[0]} |</a>
                                </Link>
                                <Link href="/policy">
                                    <a onClick={() => setIsRu(false)}>{stableData.main.lang[1]}</a>
                                </Link>
                            </div>
                        </div>
                    </span>
                    <span className="hamburger-region">
                        <span className="hamburger-region__line"></span>
                        <div className="region__humburger">
                            <h3 className="region-hamburger__title">{stableData.main.hamburger.region}</h3>
                            <ul>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.minsk)}>{stableData.main.regions.minsk}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.brest)}>{stableData.main.regions.brest}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.gomel)}>{stableData.main.regions.gomel}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/policy">
                                        <a onClick={() => setNowCity(stableData.main.regions.mogilev)}>{stableData.main.regions.mogilev}</a>
                                    </Link>
                                </li>
                            </ul>

                            <h4>{stableData.main.hamburger.language}</h4>
                            <div>
                                <Link href="/policy">
                                    <a onClick={() => setIsRu(true)}>{stableData.main.lang[0]} |</a>
                                </Link>

                                <Link href="/policy">
                                    <a onClick={() => setIsRu(false)}>{stableData.main.lang[1]}</a>
                                </Link>
                            </div>
                        </div>
                    </span>
                    <div className="header__region">
                        <div className="header__language">
                            <Link href="/policy">
                                <a className={isRu ? 'header__language_active' : ''} onClick={() => setIsRu(true)}>
                                    {stableData.main.lang[0]}
                                </a>
                            </Link>
                            |
                            <Link href="/policy">
                                <a className={!isRu ? 'header__language_active' : ''} onClick={() => setIsRu(false)}>
                                    {stableData.main.lang[1]}
                                </a>
                            </Link>
                        </div>
                        <div className="dropdown">
                            <div className="region__now">
                                <span className="ico ico_region"></span>
                                <div className="region__now_label">{nowCity}</div>
                            </div>
                            <div className="dropdown-content">
                                <Link href="/policy">
                                    <a onClick={() => setNowCity(stableData.main.regions.minsk)}>{stableData.main.regions.minsk}</a>
                                </Link>
                                <Link href="/policy">
                                    <a onClick={() => setNowCity(stableData.main.regions.brest)}>{stableData.main.regions.brest}</a>
                                </Link>
                                <Link href="/policy">
                                    <a onClick={() => setNowCity(stableData.main.regions.gomel)}>{stableData.main.regions.gomel}</a>
                                </Link>
                                <Link href="/policy">
                                    <a onClick={() => setNowCity(stableData.main.regions.mogilev)}>{stableData.main.regions.mogilev}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
