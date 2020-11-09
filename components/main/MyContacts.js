export default ({ stableData }) => {
    return (
        <>
            <section className="contacts" id="contacts">
                <div className="contacts__wrapper wrapper">
                    <div className="contacts__title">
                        <h2>— {stableData.main.myContacts.title} —</h2>
                    </div>
                    <div className="contacts__layouts">
                        <div className="contacts__layouts-item_1">
                            <div className="contacts__place-ico">
                                <div>
                                    <h4>
                                        <span className="ico ico_placecontacts"></span>
                                        {stableData.main.myContacts.contacts[0][0]}
                                    </h4>
                                    <p>
                                        {stableData.main.myContacts.contacts[0][1]} <br />
                                        {stableData.main.myContacts.contacts[0][2]} <br />
                                        {stableData.main.myContacts.contacts[0][3]} <br />
                                        {stableData.main.myContacts.contacts[0][4]} <br />
                                        {stableData.main.myContacts.contacts[0][5]}
                                    </p>
                                </div>
                            </div>
                            <div className="contacts__place-ico">
                                <div className="contacts__place-ico_time">
                                    <h4>
                                        <span className="ico ico_clock"></span> {stableData.main.myContacts.contacts[1][0]} <br />
                                    </h4>
                                    <p>{stableData.main.myContacts.contacts[1][1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__layouts-item_2">
                            <div className="contacts__contacts">
                                <h4>{stableData.main.myContacts.contacts[2][0]}</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href={`mailto:${stableData.main.myContacts.mail[0]}`}>
                                        <span className="ico ico_mail"></span>
                                        {stableData.main.myContacts.mail[0]}
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href={`tel:${stableData.main.myContacts.phone.links[0]}`}>
                                        <span className="ico ico_phone"></span>
                                        {stableData.main.myContacts.phone.titles[0]}
                                    </a>
                                </div>
                                <h4>{stableData.main.myContacts.contacts[2][1]}</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:hr@mama-doma.by">
                                        <span className="ico ico_mail"></span>
                                        {stableData.main.myContacts.mail[1]}
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href={`tel:${stableData.main.myContacts.phone.links[1]}`}>
                                        <span className="ico ico_phone"></span>
                                        {stableData.main.myContacts.phone.titles[1]}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__layouts-item_3">
                            <div className="contacts__contacts">
                                <h4>{stableData.main.myContacts.contacts[2][2]}</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:buh@mama-doma.by">
                                        <span className="ico ico_mail"></span>
                                        {stableData.main.myContacts.mail[2]}
                                    </a>
                                </div>
                                <div className="contacts__phone contacts__items">
                                    <a href={`tel:${stableData.main.myContacts.phone.links[2]}`}>
                                        <span className="ico ico_phone"></span>‎{stableData.main.myContacts.phone.titles[2]}
                                    </a>
                                </div>
                                <h4>{stableData.main.myContacts.contacts[2][3]}</h4>
                                <div className="contacts__mail contacts__items">
                                    <a href="mailto:food@mama-doma.by">
                                        <span className="ico ico_mail"></span>
                                        {stableData.main.myContacts.mail[3]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
