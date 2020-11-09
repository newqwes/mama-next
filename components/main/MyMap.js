export default ({ stableData }) => {
    return (
        <>
            <section className="map" id="mapTo">
                <div className="map__wrapper wrapper">
                    <div className="map__title">
                        <h2>
                            <span className="map__title_at-425">— {stableData.main.myMap.title.at425} —</span>
                            <span className="map__title_before-425">
                                — {stableData.main.myMap.title.before425[0]} <br />
                                {stableData.main.myMap.title.before425[1]} —
                            </span>
                        </h2>
                    </div>
                    <div className="feedback__layout">
                        <div className="feedback__contacts _anim-items">
                            <div className="feedback__city-left">
                                <div className="contacts__city-title">{stableData.main.myMap.city[0]}</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.minsk[0][0]}</h4>
                                        <p>
                                            {stableData.main.myMap.minsk[0][1]} <br />
                                            {stableData.main.myMap.minsk[0][2]}
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.minsk[1][0]}</h4>
                                        <p>
                                            {stableData.main.myMap.minsk[1][1]}
                                            <br />
                                            {stableData.main.myMap.minsk[1][2]}
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.minsk[2][0]}</h4>
                                        <p>
                                            {stableData.main.myMap.minsk[2][1]}
                                            <br />
                                            {stableData.main.myMap.minsk[2][2]}
                                        </p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.minsk[3][0]}</h4>
                                        <p>{stableData.main.myMap.minsk[3][1]}</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                            </div>
                            <div className="feedback__city-right">
                                <div className="contacts__city-title">{stableData.main.myMap.city[1]}</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.brest[0][0]}</h4>
                                        <p>{stableData.main.myMap.brest[0][1]}</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__city-title">{stableData.main.myMap.city[2]}</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.gomel[0][0]}</h4>
                                        <p>{stableData.main.myMap.gomel[0][1]}</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                                <div className="contacts__city-title">{stableData.main.myMap.city[3]}</div>
                                <div className="contacts__item">
                                    <div>
                                        <h4>{stableData.main.myMap.mogilev[0][0]}</h4>
                                        <p>{stableData.main.myMap.mogilev[0][1]}</p>
                                    </div>
                                    <span className="ico ico_place"></span>
                                </div>
                            </div>
                        </div>
                        <div id="map" className="map__yandex _anim-items"></div>
                    </div>
                </div>
            </section>
        </>
    );
};
