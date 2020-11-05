export default ({ stableData }) => {
    return (
        <>
            <div id="popup" className="popup">
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#arrowToTop" className="popup__close close-popup">
                            X
                        </a>
                        <div className="popup__title">{stableData.main.myPopupLike.firstTitle}</div>
                        <p className="popup__text">{stableData.main.myPopupLike.secondTitle}</p>
                        <form className="formReview">
                            <div className="form-inner">
                                <input type="text" name="name" required placeholder={stableData.main.myPopupLike.requiredDescription[0]} />
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    placeholder={stableData.main.myPopupLike.requiredDescription[1]}
                                />
                                <textarea
                                    name="feedback"
                                    required
                                    placeholder={stableData.main.myPopupLike.requiredDescription[2]}
                                    rows="3"
                                ></textarea>
                                <input type="submit" value={stableData.main.myPopupLike.button} />
                            </div>
                        </form>
                        <p className="popup__text">{stableData.main.myPopupLike.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
