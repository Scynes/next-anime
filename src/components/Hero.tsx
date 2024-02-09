import Image from 'next/image';

export default () => {
    return (
        <div className="min-h-screen relative flex flex-wrap flex-row gap-20">
            <div className='absolute h-full w-full z-0 blur-sm'>
                <Image src={ '/bg-hero.jpg' } fill alt={ 'hero anime image' } />
            </div>
            <div className='absolute h-full w-full bg-black opacity-80' />
            <div className='flex flex-col justify-center items-center flex-1 z-20 text-white p-6'>
                <div className='text-nowrap'>
                    <Image className='self-start mb-10' src={ '/logo.svg' } width={ 100 } height={ 100 } alt={ 'logo image' }/>
                    <h1 className='hero-text'>Explore The</h1>
                    <h1 className='hero-text'>Diverse Realms</h1>
                    <h1 className='hero-text'>of Anime Magic</h1>
                </div>
            </div>
            <div className='justify-center items-center flex-1 z-20 text-white p-6 hidden md:flex'>
                <div className='max-w-xl min-w-48 relative'>
                    <img src={ '/aside-hero.png' } />
                </div>
            </div>
        </div>
    );
}