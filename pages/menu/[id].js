import { useRouter } from 'next/router';
import MyFooter from '../../components/footer/MyFooter';
import MetaH1Description from '../../components/menu/MetaH1Description';
import MyHead from '../../components/menu/MyHead';
import MyHeader from '../../components/menu/MyHeader';
import MyMenuContent from '../../components/menu/MyMenuContent';

const MyMenuPage = ({ isRu, setIsRu, stableData, nowCity, setNowCity }) => {
    const menuPageNumber = useRouter().query.id;
    if (menuPageNumber > stableData.menu.length || menuPageNumber < 0) {
        menuPageNumber = 0;
    }
    let menuData = stableData.menu[menuPageNumber];
    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={stableData} setIsRu={setIsRu} isRu={isRu} nowCity={nowCity} setNowCity={setNowCity} />
            <h1>{menuPageNumber}</h1>
            <MyMenuContent stableData={menuData} isRu={isRu} nowCity={nowCity} />
            <MyFooter stableData={stableData} />
        </>
    );
};
export default MyMenuPage;
