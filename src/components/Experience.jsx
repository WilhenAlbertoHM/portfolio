export const Experience = () => {
    const experiences = [
        {
            id: 1,
            logo: "Experience/ids.jpg",
            title: "Research ML Fellow",
            company: "IDS Fellowship @ UMB",
            duration: "June 2023 - May 2024",
            description: "Reduced mean-squared error by 30% in predicting personality traits from facial expressions using RNN and CNN models on 6,000 videos, enhancing VR character realism. \
            Presented findings to 500+ attendees at MassURC and CSM’s Annual Showcase, earning Best Poster Design. Co-authored a paper submitted to ACM SIGGRAPH MIG 2024."
        },
        {
            id: 2,
            logo: "Experience/moma.png",
            title: "ML/Software Engineer Intern",
            company: "MOMA Therapeutics",
            duration: "June 2024 - August 2024",
            description: "Built an LLM vs. neural network classifier for predicting half-life and IC50 from SMILES strings. \
            Achieved 70% accuracy in predicting cysteine ligandability, advancing covalent drug discovery. \
            Enabled scientists to refine chatbot prompts through a Retool-based UI, improving research workflows."
        },
    ];

    return (
        <section id="work" className="px-8 mx-auto max-w-4xl">
            <h1 className="flex items-center justify-center font-bold text-center text-[var(--orange)] text-2xl md:text-3xl lg:text-4xl mb-12">
                Work Experience
                <img 
                    src="Experience/monitor.svg" 
                    alt="Monitor Icon" 
                    className="h-12 md:h-10 lg:h-12 w-auto ml-4"
                />
            </h1>
            <div className="px-12 grid gap-12 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-400 rounded-full"></div>
                
                { experiences.map(({ id, title, company, duration, description }) => (
                    <article 
                        key={ id } 
                        className="p-12 rounded-3xl shadow-2xl bg-[var(--black)] relative ml-8 border-1 border-[var(--orange)] [background:var(--blacktotransparent)]"
                    >
                        <div className="absolute left-[-2.95rem] top-1/6 w-4 h-4 bg-[var(--orange)] rounded-full -ml-10"></div>
                        
                        <header className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[var(--lightgray)]">{ title }</h2>
                                <h3 className="text-base md:text-lg lg:text-xl text-[var(--orange)] italic mt-2">{ company }</h3>
                                <h3 className="text-xs md:text-sm lg:text-md text-gray-400 italic">{ duration }</h3>
                            </div>
                        </header>

                        <div>
                            <p className="text-sm md:text-base text-[var(--lightgray)]">{ description }</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};