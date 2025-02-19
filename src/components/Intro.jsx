export const Intro = () => {
    return (
        <div id="intro" className="relative flex flex-col justify-center items-center h-screen text-center text-white">
            <div className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75 contrast-125 grayscale-25 outline-4 outline-[var(--darkgray)] [background-image:url('/Intro/coolsunset.jpg')]"></div>
            <h2 className="m-6 text-7xl font-bold text-white drop-shadow-[7px_3px_2px_var(--black)]">Wilhen Alberto Hui Mei</h2>
            <h2 className="m-4 text-5xl italic font-bold text-[var(--orange)] drop-shadow-[7px_3px_2px_var(--black)]">ML / Software Engineer</h2>
        </div>
    );
};
