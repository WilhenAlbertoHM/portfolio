export const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto my-8 p-8 md:w-3xl sm:w-lg w-98 md:h-98 text-[var(--lightgray)] rounded-4xl border-[var(--orange)] border-1 [background:var(--blacktotransparent)]">
        <div className="flex justify-center items-center md:mr-8">
          <img
            src="About/me.jpg"
            alt="Me"
            className="w-52 h-52 md:w-54 md:h-54 rounded-full object-cover p-4"
          />
        </div>
        <div className="flex-2 flex flex-col p-4 text-center md:text-left">
          <h2 className="text-[var(--orange)] text-5xl font-bold mb-4 flex items-center justify-center md:justify-start">
            About Me
            <img
              className="h-16 w-auto ml-2"
              src="About/waving-hand.svg"
              alt="Waving Hand"
            />
          </h2>
          <p className="text-base md:text-lg mb-4 leading-relaxed text-wrap text-left">
            Hola! I’m Wilhen Alberto Hui Mei, and I have over 2 years of
            experience building web apps, data pipelines, and AI workflows. I
            use spoken and programming languages to create a positive impact
            around us.
          </p>
        </div>
      </div>
    </div>
  );
};
