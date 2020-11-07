import Link from 'next/link';

const MyFooter = () => {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer__wrapper wrapper">
                    <div className="footer__layouts">
                        <div className="footer__layouts-item_0 footer__layouts-item_space">
                            <a href="index.html" className="logo">
                                <img src="/img/footerLogo.png" alt="мама дома" />
                            </a>
                        </div>

                        <div className="footer__layouts-item_3">
                            <div className="footer__social-links">
                                <ul className="social__menu">
                                    <li>
                                        <a href="https://www.facebook.com/mamadoma.official/?eid=ARC1fLCfcMp_iXWRBmOtnfe9J88hnlFDN9BnpAXp2Jzcr2z88Ue7uUQWIZT_J7qgMOVUuZln8QQ8IFYY&timeline_context_item_type=intro_card_work&timeline_context_item_source=100008035755019&fref=tag">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://vk.com/mamadomaofficial">
                                            <i className="fa fa-vk"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/mamadoma_official/?hl=ru">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://ok.ru/mamadomaofficial">
                                            <i className="fa fa-odnoklassniki"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__layouts-item_2">
                            <div className="footer__contacts">
                                <div className="footer__policy">
                                    <Link href="/policy">
                                        <a>Политика конфиденциальности</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default MyFooter;
