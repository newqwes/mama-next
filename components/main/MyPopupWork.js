export default ({ stableData }) => {
  return (
    <>
      <div id='popup2' className='popup'>
        <div className='popup__body'>
          <div className='popup__content'>
            <a href='#arrowToTop' className='popup__close close-popup'>
              X
            </a>
            <div className='popup__title'>{stableData.main.myPopupWork.firstTitle}</div>
            <p className='popup__text'>{stableData.main.myPopupWork.secondTitle}</p>
            <form className='formJob'>
              <div className='form-inner'>
                <input
                  type='text'
                  name='name'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[0]}
                />
                <input
                  type='text'
                  name='citizenship'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[1]}
                />
                <input
                  type='number'
                  name='age'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[2]}
                />
                <input
                  type='text'
                  name='address'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[3]}
                />
                <input
                  type='tel'
                  name='phone'
                  id='phone__worker'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[4]}
                />
                <input
                  type='text'
                  name='position'
                  required
                  placeholder={stableData.main.myPopupWork.requiredDescription[5]}
                />
                <textarea
                  name='comment'
                  placeholder={stableData.main.myPopupWork.requiredDescription[6]}
                  rows='3'></textarea>
                <input type='submit' value={stableData.main.myPopupWork.button} />
              </div>
            </form>
            <p className='popup__text'>{stableData.main.myPopupWork.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
