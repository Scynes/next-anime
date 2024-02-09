import AnimeCard from '@/components/AnimeCard';
import Anime from '@/types/Anime';

export default async () => {

    const fetchAnime = await fetch('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0', { cache: 'force-cache' });

    const data = await fetchAnime.json();

    return (
        <section className={ 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10' }>
            { data.data.map(( anime: Anime, index: number ) => (
                <AnimeCard key={ index } index={ index } anime={ anime } />
            )) }
        </section>
    );
}