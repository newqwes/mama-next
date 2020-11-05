export default ({ stableData }) => {
    return (
        <>
            <section className="menu" id="menu">
                <div className="menu__wrapper wrapper">
                    <div className="menu__title">
                        <h2>— {stableData.main.menu.title} —</h2>
                    </div>
                    <div className="menu__layout layout-3-column">
                        <div className="menu__item">
                            <a className="menu__links menu__to-0 _anim-items" href="hotDish.html">
                                {stableData.main.menu.links[0]}
                            </a>
                        </div>

                        <div className="menu__item">
                            <a className="menu__links menu__to-2 _anim-items" href="sup_salat.html">
                                {stableData.main.menu.links[1]}
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-3 _anim-items" href="draniki.html">
                                {stableData.main.menu.links[2]}
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-4 _anim-items" href="bliny.html">
                                {stableData.main.menu.links[3]}
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links _long-desc menu__to-6 _anim-items" href="bliny_syrniki.html">
                                {stableData.main.menu.links[4]}
                            </a>
                        </div>
                        <div className="menu__item">
                            <a className="menu__links menu__to-7 _anim-items" href="napitki.html">
                                {stableData.main.menu.links[5]}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
