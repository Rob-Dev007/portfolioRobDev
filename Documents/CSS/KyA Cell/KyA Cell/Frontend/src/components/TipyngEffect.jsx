import { useTypewriter , Cursor } from 'react-simple-typewriter'

const TypingEffect = ( ) => {
    const [text] = useTypewriter({
      words: ['Accesorios para teléfonos moviles', 'Accesorios para computadoras', 'Servicio técnico para celulares'],
      loop: 0,
      typeSpeed: 70,
      deleteSpeed: 50,
      delaySpeed: 1000,
    });

    return(
        <h1>
            { text }
            <Cursor />
        </h1>
    )
};
export default TypingEffect;