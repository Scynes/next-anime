import Anime from '@/types/Anime';
import Image from 'next/image';

interface Properties {
    anime: Anime,
    index: number
}

export default async ({ anime }: Properties) => {

    const cover = anime.attributes.posterImage?.large || null;

    return (
        <div className='flex flex-col min-w-40 w-full min-h-80 gap-12'>
            <div className="relative h-96 rounded-xl overflow-hidden">
                { cover != null ? <Image fill objectFit='cover' src={ cover } alt='anime cover image' /> : <h1>Empty</h1> }
            </div>
            <div className="flex justify-between">
                <h1>{ anime.attributes.canonicalTitle }</h1>
            </div>
        </div>
    );
}