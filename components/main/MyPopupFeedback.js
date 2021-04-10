export default ({ stableData }) => {
  return (
    <>
      <section className='about-us' id='about-us'>
        <div className='about-us__wrapper wrapper'>
          <div className='layout-2-column'>
            <div>
              <h2>— {stableData.main.myPopupFeedback.title[0]} —</h2>
              <div className='about-us__work about-us__items _anim-items'>
                <h3>{stableData.main.myPopupFeedback.firstDescription[0]}</h3>
                <span>{stableData.main.myPopupFeedback.secondDescription[0]}</span>
                <button href='#popup2' className='about-us__button popup-link'>
                  {stableData.main.myPopupFeedback.buttons[0]}
                </button>
              </div>
            </div>

            <div>
              <h2>— {stableData.main.myPopupFeedback.title[1]} —</h2>
              <div className='about-us__instagram about-us__items _anim-items'>
                <h3>{stableData.main.myPopupFeedback.firstDescription[1]}</h3>
                <span>{stableData.main.myPopupFeedback.secondDescription[1]}</span>
                <button href='#popup' className='about-us__button popup-link'>
                  {stableData.main.myPopupFeedback.buttons[1]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
