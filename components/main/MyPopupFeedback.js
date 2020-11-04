export default () => {
    return (
        <>
            <section className="about-us" id="about-us">
                <div className="about-us__wrapper wrapper">
                    <div className="layout-2-column">
                        <div>
                            <h2>— Работа —</h2>
                            <div className="about-us__work about-us__items _anim-items">
                                <h3>У нас приятно работать!</h3>
                                <span>Станьте частью нашей команды</span>
                                <button href="#popup2" className="about-us__button popup-link">
                                    Оставить заявку
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2>— Отзывы —</h2>
                            <div className="about-us__instagram about-us__items _anim-items">
                                <h3>Оставьте отзыв</h3>
                                <span>И мы станем еще лучше</span>
                                <button href="#popup" className="about-us__button popup-link">
                                    Оставить отзыв
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
