import Link from 'next/link';
import { useState } from 'react';
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
    const [isRu, setIsRu] = useState(true);
    const data = isRu ? myData.ru : myData.by;
    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={data} setIsRu={setIsRu} />
            <MyDelivery stableData={data} />
            <MyMenu stableData={data} />
            <MyPopupFeedback stableData={data} />
            <MyMap stableData={data} />
            <MyContacts stableData={data} />
            <MyPopupLike stableData={data} />
            <MyPopupWork stableData={data} />
        </>
    );
};
