import Link from 'next/link';

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
                            <Link href="/menu/0">
                                <a className="menu__links menu__to-0 _anim-items">{stableData.main.menu.links[0]}</a>
                            </Link>
                        </div>

                        <div className="menu__item">
                            <Link href="/menu/1">
                                <a className="menu__links menu__to-2 _anim-items">{stableData.main.menu.links[1]}</a>
                            </Link>
                        </div>
                        <div className="menu__item">
                            <Link href="/menu/2">
                                <a className="menu__links menu__to-3 _anim-items">{stableData.main.menu.links[2]}</a>
                            </Link>
                        </div>
                        <div className="menu__item">
                            <Link href="/menu/3">
                                <a className="menu__links menu__to-4 _anim-items">{stableData.main.menu.links[3]}</a>
                            </Link>
                        </div>
                        <div className="menu__item">
                            <Link href="/menu/4">
                                <a className="menu__links _long-desc menu__to-6 _anim-items">{stableData.main.menu.links[4]}</a>
                            </Link>
                        </div>
                        <div className="menu__item">
                            <Link href="/menu/5">
                                <a className="menu__links menu__to-7 _anim-items">{stableData.main.menu.links[5]}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
