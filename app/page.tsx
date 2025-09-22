import { Metadata } from 'next';
import { HomeContent } from "./components/HomeContent";

export const metadata: Metadata = {
  title: 'Anime Fóbicos - Home',
  description: 'Anime Fóbicos es tu fuente de noticias y artículos sobre el fascinante mundo del anime y la cultura japonesa. Desde análisis de las series más icónicas hasta recomendaciones de los estrenos más esperados, te mantenemos al tanto de las últimas novedades en el universo del anime. Conoce las tradiciones japonesas que inspiran tus historias favoritas y sumérgete en el corazón de la animación nipona. ¡Explora Anime Fóbicos y mantente conectado con lo mejor del anime y Japón!',
  keywords: ['FóbicosANIME','Fóbicos Anime', 'ANIME', 'ANIME ESPAÑOL', 'Fóbicosanime', 'peliculas', 'Peliculas anime','PELICULAS ANIME','Noticias de anime','Artículos sobre anime','Cultura japonesa','Mundo nipón','Animación japonesa'],
  icons: {
    icon: '/image/LogoVeoanime.png'
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://animefobicos.com/',
    siteName: 'Anime Fóbicos - Home',
    title: 'Anime Fóbicos - Home',
    description: 'Anime Fóbicos es tu fuente de noticias y artículos sobre el fascinante mundo del anime y la cultura japonesa. Desde análisis de las series más icónicas hasta recomendaciones de los estrenos más esperados, te mantenemos al tanto de las últimas novedades en el universo del anime. Conoce las tradiciones japonesas que inspiran tus historias favoritas y sumérgete en el corazón de la animación nipona. ¡Explora Anime Fóbicos y mantente conectado con lo mejor del anime y Japón!',
    images: [
      {
        url: 'https://animefobicos.com/image/LogoVeoanime.png',
        width: 1200,
        height: 630,
        alt: 'Anime Fóbicos',
      },
    ],
  },
};

export default function Home() {
  return (
    <HomeContent />
  )
}