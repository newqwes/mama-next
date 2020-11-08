import { useRouter } from 'next/router';
import MyFooter from '../../components/footer/MyFooter';
import MetaH1Description from '../../components/menu/MetaH1Description';
import MyHead from '../../components/menu/MyHead';
import MyHeader from '../../components/menu/MyHeader';
import MyMenuContent from '../../components/menu/MyMenuContent';

const MyMenuPage = ({ isRu, setIsRu, stableData, nowCity, setNowCity }) => {
    let menuPageNumber = useRouter();
    let currentMenuPageNumber;
    if (menuPageNumber.query.id && menuPageNumber.query.id >= 0 && menuPageNumber.query.id <= 6) {
        currentMenuPageNumber = menuPageNumber.query.id;
    } else {
        currentMenuPageNumber = 0;
    }
    let menuData = stableData.menu[currentMenuPageNumber];

    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={stableData} setIsRu={setIsRu} isRu={isRu} nowCity={nowCity} setNowCity={setNowCity} />
            <MyMenuContent stableData={menuData} nowCity={nowCity} />
            <MyFooter stableData={stableData} />
        </>
    );
};
export default MyMenuPage;
