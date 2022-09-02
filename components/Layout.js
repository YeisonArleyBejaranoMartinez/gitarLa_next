
import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children, pagina}) => {
  return (
    <>
        <Head>
            <title>GuitarLA-{pagina}</title>
            <meta name="description" content="sitio web de venta de guitaras." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        {children}
        <Footer></Footer>
    </>
  )
}

export default Layout