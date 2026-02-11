import KyAMarket from '../../assets/kya-market.png';
import SmallLink from '../../assets/small-link.png'

const projects = [
      {
            id: 1,
            src: KyAMarket,
            alt: "Imagen_proyecto_kya_market-eccomerce.jpg",
            title: "K&A Market",
            description: "E-commerce fullstack desarrollado con pasarela de pago real",
            icons: ['typescript', 'nextjs', 'tailwind', 'prisma', 'mongodb'],
            hrefWeb: "https://kya-market.vercel.app/",
            hrefGit: "https://github.com/Rob-Dev007/KyAMarket"
      },
    {
            id: 2,
            src: SmallLink,
            alt: "Imagen_small_link_app.jpg",
            title: "Small-link",
            description: "App web para acortar enlaces",
            icons: ['mongodb', 'react', 'node', 'tailwind'],
            hrefWeb: "https://small-link-app.vercel.app/",
            hrefGit: "https://github.com/Rob-Dev007/app-small-link"
      }
        
]

export default projects;