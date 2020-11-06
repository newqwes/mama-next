import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    {/* <!-- Мета теги -->
                    <!-- <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"> -->
                    <!-- <meta property="og:url" content="https://mama-doma.by">
                    <meta property="og:title" content="КАФЕ НА ФУДКОРТАХ МАМА ДОМА">
                    <meta property="og:description" content="Если Мама Дома - значит еда будет вкусной и полезной!">
                    <meta property="og:type" content="website"> -->
                    <!-- <meta property="og:image" content="/dist//img/meta_img.jpg">
                    <link rel="canonical" href="http://mama-doma.by">
                    <meta property="fb:app_id" content="257953674358265">
                    <meta name="format-detection" content="telephone=no"> -->
                    <!-- <meta httpEquiv="x-dns-prefetch-control" content="on"> -->
                    <!-- _________________________ -->

                    <!-- Подключаем иконку --> */}
                    <link type="image/x-icon" rel="shortcut icon" href="/img/favicon/favicon.ico" />
                    <link type="image/x-icon" rel="shortcut icon" href="/img/favicon/favicon.ico" />
                    <link type="image/png" sizes="16x16" rel="icon" href="/img/favicon/favicon-16x16.png" />
                    <link type="image/png" sizes="32x32" rel="icon" href="/img/favicon/favicon-32x32.png" />
                    <link type="image/png" sizes="96x96" rel="icon" href="/img/favicon/favicon-96x96.png" />
                    <link type="image/png" sizes="120x120" rel="icon" href="/img/favicon/favicon-120x120.png" />
                    <link type="image/png" sizes="192x192" rel="icon" href="/img/favicon/android-icon-192x192.png" />
                    <link sizes="57x57" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-57x57.png" />
                    <link sizes="60x60" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-60x60.png" />
                    <link sizes="72x72" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-72x72.png" />
                    <link sizes="76x76" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-76x76.png" />
                    <link sizes="114x114" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-114x114.png" />
                    <link sizes="120x120" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-120x120.png" />
                    <link sizes="144x144" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-144x144.png" />
                    <link sizes="152x152" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-152x152.png" />
                    <link sizes="180x180" rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-180x180.png" />
                    <meta name="msapplication-TileColor" content="#2b5797" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="stylesheet" href="/font/stylesheet.css" />
                </Head>
                <body>
                    <Main />

                    <NextScript />
                    <script src="/js/lib/jquery-3.5.1.min.js"></script>
                    <script src="/js/humburger.js"></script>
                    <script src="/js/animationScroll.js"></script>
                    <script src="/js/yandexMap.js"></script>
                    <script src="/js/ancors.js"></script>
                    <script src="/js/popup.js"></script>
                    <script src="/js/lib/inputmask.min.js"></script>
                    <script src="/js/mask.js"></script>
                    <script src="/js/lib/sweetalert.min.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
