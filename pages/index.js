import Link from 'next/link';
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
import myData from '../myData';

export default () => {
    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={myData.ru} />
            <MyDelivery />
            <MyMenu />
            <MyPopupFeedback />
            <MyMap />
            <MyContacts />
            <MyPopupLike />
            <MyPopupWork />
        </>
    );
};
