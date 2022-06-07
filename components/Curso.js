

const Curso = ({curso}) => {
    const {titulo, contenido, imagen} = curso;
    return (
        <section>
            <div className="contenedor">
                <div>
                    <h2>{titulo}</h2>
                    <p>{contenido}</p>
                    <a href="#">Mas información</a>
                </div>
            </div>
            {/* ESTILIZADO RARO...*/}
            
            <style jsx>
                {`
                    section {
                        padding:10rem 0;
                        margin-top: 10rem;
                        background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.url});
                        background-size: cover;
                        background-position: 50%;
                    }
                `}
            </style>

        </section>
    )
}

export default Curso