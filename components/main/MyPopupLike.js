export default () => {
    return (
        <>
            <div id="popup" className="popup">
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#arrowToTop" className="popup__close close-popup">
                            X
                        </a>
                        <div className="popup__title">Оставьте свой отзыв</div>
                        <p className="popup__text">Заполните поля и оставьте отзыв о нас</p>
                        <form className="formReview">
                            <div className="form-inner">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Ваше имя"
                                    onInvalid="this.setCustomValidity('Забыли имя')"
                                    onInput="setCustomValidity('')"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    placeholder="Ваш телефон"
                                    onInvalid="this.setCustomValidity('Забыли телефон')"
                                    onInput="setCustomValidity('')"
                                />
                                <textarea
                                    name="feedback"
                                    required
                                    placeholder="Напишите свой отзыв..."
                                    rows="3"
                                    onInvalid="this.setCustomValidity('Забыли отзыв')"
                                    onInput="setCustomValidity('')"
                                ></textarea>
                                <input type="submit" value="Отправить" />
                            </div>
                        </form>
                        <p className="popup__text">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                    </div>
                </div>
            </div>
        </>
    );
};
