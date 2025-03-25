import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "Projects/faithful.jpg",
    title: "Faithful AI",
    description:
      "A Christian chatbot powered by Llama 3.1 designed to help users learn more about the Bible and grow in their faith. \
        It responds in English, Spanish, French, and German in a passionate and energetic tone.",
    techStack: ["Python", "LangChain", "Streamlit"],
    github: "https://github.com/WilhenAlbertoHM/FaithfulAI",
  },
  {
    id: 2,
    image:
      "https://github.com/user-attachments/assets/f589397a-1c46-415a-bc17-459e111623a0",
    title: "VideoAskRAG",
    description:
      "A RAG application powered by Llama 3.2 that can answer questions about a YouTube video. \
        The system receives a link, creates a transcription, and uses it as context before answering the user.",
    techStack: ["Python", "LangChain", "Streamlit", "Pinecone"],
    github: "https://github.com/WilhenAlbertoHM/VideoAskRAG",
  },
  {
    id: 3,
    image: "Projects/sloanresearch.jpg",
    title: "Sentiment Analysis w/ Gaze",
    description:
      "RNN and CNN models using a large dataset of 6,000 videos to predict personality traits, \
        from facial expressions based on the OCEAN personality test.",
    techStack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    github: "https://github.com/WilhenAlbertoHM/Sentiment-Analysis-With-Gaze/",
  },
  {
    id: 4,
    image: "Projects/deep-learning-projects.jpg",
    title: "Deep Learning Projects",
    description:
      "A collection of deep learning projects made with TensorFlow. \
        Projects include a CNN model predicting pneumonia, COVID-19, or no illness from X-ray images, \
        a classification model predicting heart failure patient survival based on medical records, \
        a regression model predicting life expectancy by country based on various socio-economic factors, and many more.",
    techStack: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    github: "https://github.com/WilhenAlbertoHM/Deep-Learning-Projects/",
  },
  {
    id: 5,
    image: "Projects/labormigration.jpg",
    title: "Latino Labor Migration",
    description:
      "A data visualization of the Latino labor migration in Massachusetts from 1990 to 2022, \
        with the purpose of learning more about the role Latinos have played in shaping the state's diverse identity.",
    techStack: ["JavaScript", "Vega-Lite", "GSAP", "Plotly"],
    github: "https://github.com/WilhenAlbertoHM/Labor-Migration-Vis/",
  },
  {
    id: 6,
    image: "Projects/cs460.jpg",
    title: "Graphics Projects",
    description:
      "A collection of graphics projects made in CS460. \
        Projects include creating 3D scenes using cubes and torus knots, loading 3D-printed models to render in WebGL, and many more.",
    techStack: [
      "JavaScript",
      "WebGL",
      "D3.js",
      "Three.js",
      "XTK.js",
      "Blender",
    ],
    github: "https://github.com/WilhenAlbertoHM/cs460student/",
  },
];

const techIcons = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TensorFlow:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "scikit-learn":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  Keras:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "D3.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
  "Three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  WebGL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg",
  Blender:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  "Vega-Lite":
    "https://raw.githubusercontent.com/vega/logos/af32bc29f0c09c8de826aaafb037935fb69e960a/assets/Project.svg",
  GSAP: "Projects/gsap.svg",
  "XTK.js": "https://avatars.githubusercontent.com/u/1134662?s=48&v=4",
  Plotly:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg",
  LangChain: "TechStack/Backend/langchain.svg",
  Streamlit: "https://streamlit.io/images/brand/streamlit-mark-color.png",
  Pinecone: "TechStack/DatabasesNCloud/pinecone.svg",
};

export const Project = () => {
  return (
    <section id="project" className="max-w-[90rem] mx-auto">
      <h1 className="flex items-center justify-center text-4xl font-bold text-center text-[var(--orange)] mb-12">
        Projects
        <img
          src="https://www.svgrepo.com/show/262132/light-bulb.svg"
          alt="Light Bulb"
          className="h-12 w-auto ml-3"
        />
      </h1>

      <article className="mx-2 grid gap-y-12 gap-x-24 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 place-items-center">
        {projects.map(
          ({ id, image, title, description, techStack, github }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: id * 0.05 }}
              className="flex flex-col items-center"
            >
              <div
                key={id}
                className="flex flex-col text-[var(--lightgray)] p-12 rounded-3xl shadow-xl w-[25rem] md:w-[30rem] h-[50rem] md:h-[53rem] hover:scale-102 transition-transform duration-300 cursor-pointer border-1 border-[var(--orange)]"
                style={{ background: "var(--blacktotransparent)" }}
                onClick={() => window.open(github, "_blank")}
              >
                <div
                  className="w-full h-[18rem] bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>

                <div className="flex flex-1 flex-col justify-between mt-10">
                  <div>
                    <h2 className="text-3xl font-semibold text-[var(--orange)] mb-6 text-balance">
                      {title}
                    </h2>
                    <p className="text-sm md:text-base text-[var(--lightgray)] mb-4 text-balance">
                      {description}
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-2">
                      {techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="flex items-center justify-center bg-gray-900 text-orange-400 p-2 w-full rounded-lg text-sm text-center gap-2"
                        >
                          {techIcons[tech] && (
                            <img
                              src={techIcons[tech]}
                              alt={tech}
                              className="w-6 h-auto"
                            />
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={github}
                      target="_blank"
                      className="text-[var(--orange)] text-xl flex items-center justify-center mt-12"
                    >
                      <img
                        src="Social/github.svg"
                        alt="GitHub Icon"
                        className="w-10"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </article>

      <footer className="text-right text-lg text-[var(--lightgray)] mt-8 mx-4">
        More projects can be found{" "}
        <a
          href="https://github.com/WilhenAlbertoHM?tab=repositories"
          className="text-[var(--orange)] font-bold underline underline-offset-4"
        >
          here
        </a>
      </footer>
    </section>
  );
};
