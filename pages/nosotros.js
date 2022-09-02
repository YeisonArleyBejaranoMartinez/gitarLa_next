
import React from 'react'
import Layout from '../components/Layout'
import Image  from 'next/Image'
import styles from '../styles/nosotros.module.css'


const Nosotros = () => {
  return (
    <div>
        <Layout
        pagina="Nosotros"
        >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout='responsive' src="/img/nosotros.jpg" alt="Imagen sobre nosotros." width={600} height={450}/>
          
            <div>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
          </div>
        </main>
           
        </Layout>
        
    </div>
  )
}

export default Nosotros