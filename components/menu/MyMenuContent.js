// Для возможности лучшего перевода перенести бы всё в файл data
const MyMenuContent = ({ stableData, nowCity }) => {
  let isMinsk = nowCity === 'Минск';
  return (
    <>
      <section className='menu-page-items'>
        <div className='wrapper menu-page-items__wrapper'>
          <div className='menu-page__title'>
            <h2>— {stableData.title} —</h2>
          </div>
          <div className='menu-page__layout'>
            {stableData.items.map(n => {
              return (
                <div className='menu__item menu-page__links _anim-items bgcacent'>
                  <span className={`menu-page__image menu-page__image_${n.image}`}></span>
                  <div className='menu-page__circle-price'>
                    {isMinsk ? n.price.minsk[0] : n.price.other[0]}
                    <sup>{isMinsk ? n.price.minsk[1] : n.price.other[1]}</sup>
                  </div>
                  <h4>{n.name}</h4>
                  <p className='menu-page__kalories'>{n.gramm}</p>
                  <p className='menu-page__kalories'>{n.calorie}</p>
                  <p className='menu-page__kalories'>{n.bju}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default MyMenuContent;
