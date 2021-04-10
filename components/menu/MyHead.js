import Head from 'next/head';
const MyHead = () => {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности</title>

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <link
          rel='stylesheet prefetch'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <script
          src='https://api-maps.yandex.ru/2.1/?apikey=b0ef4691-ef56-4fa7-88fb-d774eb4837e1&lang=ru_RU'
          type='text/javascript'></script>
      </Head>
    </>
  );
};
export default MyHead;
