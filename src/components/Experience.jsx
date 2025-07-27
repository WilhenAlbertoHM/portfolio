import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      logo: "Experience/upwork.png",
      title: "AI Software Engineer - Freelance",
      company: "Upwork",
      duration: "May 2025 - Present",
      description:
        "Developed OCR pipelines using GPT-4.1 that reduced document parsing errors by 90% for logistics operations. Built interactive Retool dashboards with geospatial visualizations and migrated 10M+ land records to Supabase with real-time data synchronization.",
      techStack: ["Python", "JavaScript", "Retool", "Supabase", "PostgreSQL"],
    },
    {
      id: 2,
      logo: "Experience/moma.png",
      title: "ML/Software Engineer Intern",
      company: "MOMA Therapeutics",
      duration: "June 2024 - August 2024",
      description:
        "Built a classification system to compare LLMs vs. neural networks for predicting half-life and IC50 from SMILES strings. \
            Achieved 70% accuracy in predicting cysteine ligandability using a GNN, advancing covalent drug discovery. \
            Enabled scientists to refine chatbot prompts through a Retool-based UI, improving research workflows.",
      techStack: [
        "Python",
        "PyTorch",
        "PostgreSQL",
        "AWS S3",
        "AWS Bedrock",
        "AWS EC2",
      ],
    },
    {
      id: 3,
      logo: "Experience/ids.jpg",
      title: "Research ML Fellow",
      company: "IDS Fellowship @ UMB",
      duration: "June 2023 - May 2024",
      description:
        "Reduced mean-squared error by 30% in predicting personality traits from facial expressions using RNN and CNN models on 6,000 videos, enhancing VR character realism. \
            Presented findings to 500+ attendees at MassURC and CSM’s Annual Showcase, earning Best Poster Design. Co-authored a paper submitted to ACM SIGGRAPH MIG 2024.",
      techStack: ["Python", "Keras", "scikit-learn"],
    },
  ];

  const techIcons = {
    Python: "TechStack/Backend/python.svg",
    JavaScript: "TechStack/Frontend/javascript.svg",
    PyTorch: "TechStack/Backend/pytorch.svg",
    Keras: "TechStack/Backend/keras.svg",
    Retool:
      "https://raw.githubusercontent.com/2fasvg/2fasvg.github.io/master/assets/img/logo/retool.com/retool.com.svg",
    Supabase: "TechStack/DatabasesNCloud/supabase.svg",
    "scikit-learn": "TechStack/Backend/scikitlearn.svg",
    PostgreSQL: "TechStack/DatabasesNCloud/postgresql.svg",
    "AWS S3": "TechStack/DatabasesNCloud/s3.svg",
    "AWS Bedrock": "TechStack/DatabasesNCloud/bedrock.svg",
    "AWS EC2": "TechStack/DatabasesNCloud/ec2.svg",
  };

  return (
    <section id="work" className="mx-auto max-w-4xl">
      <h1 className="flex items-center justify-center font-bold text-center text-[var(--orange)] text-2xl md:text-3xl lg:text-4xl mb-12">
        Work Experience
        <img
          src="Experience/monitor.svg"
          alt="Monitor Icon"
          className="h-12 md:h-10 lg:h-12 mx-4"
        />
      </h1>
      <div className="px-12 grid gap-12 relative">
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-gray-400 rounded-full"></div>

        {experiences.map(
          ({ id, title, company, duration, description, techStack }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="p-10 md:p-12 rounded-3xl shadow-2xl bg-[var(--black)] relative border-1 border-[var(--orange)] [background:var(--blacktotransparent)]"
            >
              <div className="hidden md:block absolute left-[-1rem] top-1/6 w-4 h-4 bg-[var(--orange)] rounded-full -ml-10"></div>

              <header className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[var(--white)]">
                    {title}
                  </h2>
                  <h3 className="text-base md:text-lg lg:text-xl text-[var(--orange)] italic mt-2">
                    {company}
                  </h3>
                  <h3 className="text-xs md:text-sm lg:text-md text-gray-400 italic">
                    {duration}
                  </h3>
                </div>
              </header>

              <div className="flex">
                <div className="flex-grow pr-2 md:pr-6">
                  <div className="text-sm md:text-base text-[var(--lightgray)]">
                    {description}
                  </div>
                </div>

                <div className="border-l border-gray-400 pl-6 flex flex-col gap-2">
                  {techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <img
                        src={techIcons[tech]}
                        alt={`${tech} logo`}
                        className="w-6 h-6"
                      />
                      <span className="text-xs text-[var(--lightgray)]">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
