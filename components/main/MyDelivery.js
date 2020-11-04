export default () => {
    return (
        <>
            <section className="feedback" id="feedback">
                <a href="#header" className="arrow-to-top" id="arrowToTop">
                    <span className="ico ico_arrow"></span>
                </a>
                <div className="wrapper feedback__wrapper">
                    <h2>— Доставка —</h2>
                    <div className="feedback__layout-delivery layout-2-column">
                        <div className="feedback__to-menu">
                            <a
                                href="https://www.menu.by/search/quick.html?term=мама+дома+"
                                rel="nofollow noopener"
                                target="_blank"
                                className="feedback__links link__to-menu _anim-items"
                            ></a>
                        </div>
                        <div className="feedback__to-menu">
                            <a
                                href="https://www.delivio.by"
                                rel="nofollow noopener"
                                target="_blank"
                                className="feedback__links link__to-delivio _anim-items"
                            ></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
