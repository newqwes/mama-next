import MyFooter from '../components/footer/MyFooter';
import MetaH1Description from '../components/policy/MetaH1Description';
import MyHead from '../components/policy/MyHead';
import MyHeader from '../components/policy/MyHeader';
import MyPolicyText from '../components/policy/MyPolicyText';

export default ({ isRu, setIsRu, stableData, nowCity, setNowCity }) => {
    return (
        <>
            <MyHead />
            <MetaH1Description />
            <MyHeader stableData={stableData} setIsRu={setIsRu} isRu={isRu} nowCity={nowCity} setNowCity={setNowCity} />
            <MyPolicyText />
            <MyFooter stableData={stableData} />
        </>
    );
};
