import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name="description" content="Sitio Web de 
            venta de guitarras"/>
           {/*  <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="" rel="stylesheet"></link> */}
        </Head>

        <Header
          guitarra={guitarra}
        />

        {children}

        <Footer/>

    </div>    
  )
}

export default Layout