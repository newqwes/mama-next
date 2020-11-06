import { useState } from 'react';
import '../styles/style.scss';
import myData from '../myData';

function MyApp({ Component, pageProps }) {
    const [isRu, setIsRu] = useState(true);
    const stableData = isRu ? myData.ru : myData.by;
    const [nowCity, setNowCity] = useState(stableData.main.regions.minsk);

    return <Component {...pageProps} stableData={stableData} isRu={isRu} setIsRu={setIsRu} nowCity={nowCity} setNowCity={setNowCity} />;
}

export default MyApp;
