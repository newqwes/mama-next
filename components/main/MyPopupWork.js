export default () => {
    return (
        <>
            <div id="popup2" className="popup">
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#arrowToTop" className="popup__close close-popup">
                            X
                        </a>
                        <div className="popup__title">Работай у нас</div>
                        <p className="popup__text">Заполните поля и наш менеджер свяжется с вами!</p>
                        <form className="formJob">
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
                                    type="text"
                                    name="citizenship"
                                    required
                                    placeholder="Гражданство"
                                    onInvalid="this.setCustomValidity('Забыли заполнить')"
                                    onInput="setCustomValidity('')"
                                />
                                <input
                                    type="number"
                                    name="age"
                                    required
                                    placeholder="Ваш возраст"
                                    onInvalid="this.setCustomValidity('Забыли указать возраст')"
                                    onInput="setCustomValidity('')"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    required
                                    placeholder="Адрес проживания"
                                    onInvalid="this.setCustomValidity('Забыли указать адрес')"
                                    onInput="setCustomValidity('')"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone__worker"
                                    required
                                    placeholder="Ваш телефон"
                                    onInvalid="this.setCustomValidity('Забыли телефон')"
                                    onInput="setCustomValidity('')"
                                />
                                <input
                                    type="text"
                                    name="position"
                                    required
                                    placeholder="Желаемая должность"
                                    onInvalid="this.setCustomValidity('Забыли должность')"
                                    onInput="setCustomValidity('')"
                                />
                                <textarea name="comment" placeholder="Напишите свой комментарий..." rows="3"></textarea>
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
