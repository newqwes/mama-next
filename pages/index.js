import MyFooter from '../components/footer/MyFooter';
import MetaH1Description from '../components/main/MetaH1Description';
import MyContacts from '../components/main/MyContacts';
import MyDelivery from '../components/main/MyDelivery';
import MyHead from '../components/main/MyHead';
import MyHeader from '../components/main/MyHeader';
import MyMap from '../components/main/MyMap';
import MyMenu from '../components/main/MyMenu';
import MyPopupFeedback from '../components/main/MyPopupFeedback';
import MyPopupLike from '../components/main/MyPopupLike';
import MyPopupWork from '../components/main/MyPopupWork';

export default ({ isRu, setIsRu, stableData, nowCity, setNowCity }) => {
    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={stableData} setIsRu={setIsRu} isRu={isRu} nowCity={nowCity} setNowCity={setNowCity} />
            <MyDelivery stableData={stableData} />
            <MyMenu stableData={stableData} />
            <MyPopupFeedback stableData={stableData} />
            <MyMap stableData={stableData} />
            <MyContacts stableData={stableData} />
            <MyPopupLike stableData={stableData} />
            <MyPopupWork stableData={stableData} />
            <MyFooter stableData={stableData} />
        </>
    );
};
