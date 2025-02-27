export const TechStack = () => {
    const techStacks = [
        {
            title: "Backend",
            items: [
                { name: "Python", icon: "TechStack/Backend/python.svg" },
                { name: "scikit-learn", icon: "TechStack/Backend/scikitlearn.svg" },
                { name: "TensorFlow", icon: "TechStack/Backend/tensorflow.svg" },
                { name: "Keras", icon: "TechStack/Backend/keras.svg" },
                { name: "PyTorch", icon: "TechStack/Backend/pytorch.svg" },
                { name: "LangChain", icon: "TechStack/Backend/langchain.svg" },
                { name: "Ollama", icon: "TechStack/Backend/ollama.svg" },
                { name: "Java", icon: "TechStack/Backend/java.svg" },
                { name: "Dask", icon: "TechStack/Backend/dask.svg" }
            ]
        },
        {
            title: "Frontend",
            items: [
                { name: "JavaScript", icon: "TechStack/Frontend/javascript.svg" },
                { name: "HTML", icon: "TechStack/Frontend/html.svg" },
                { name: "CSS", icon: "TechStack/Frontend/css.svg" },
                { name: "React", icon: "TechStack/Frontend/react.svg" },
                { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" }
            ]
        },
        {
            title: "Infrastructure",
            items: [
                { name: "PostgreSQL", icon: "TechStack/DatabasesNCloud/postgresql.svg" },
                { name: "SQLite", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" },
                { name: "MongoDB", icon: "TechStack/DatabasesNCloud/mongodb.svg" },
                { name: "Pinecone", icon: "TechStack/DatabasesNCloud/pinecone.svg" },
                { name: "AWS EC2", icon: "TechStack/DatabasesNCloud/ec2.svg" },
                { name: "AWS Bedrock", icon: "TechStack/DatabasesNCloud/bedrock.svg" },
                { name: "AWS S3", icon: "TechStack/DatabasesNCloud/s3.svg" },
                { name: "Supabase", icon: "TechStack/DatabasesNCloud/supabase.svg" }
            ]
        },
        {
            title: "Tools",
            items: [
                { name: "Git", icon: "TechStack/Tools/git.svg" },
                { name: "GitHub", icon: "TechStack/Tools/github.svg" },
                { name: "VS Code", icon: "TechStack/Tools/vscode.svg" },
                { name: "Docker", icon: "TechStack/Tools/docker.svg" },
                { name: "Jupyter", icon: "TechStack/Tools/jupyter.svg" },
                { name: "Ubuntu", icon: "TechStack/Tools/ubuntu.svg" }
            ]
        }
    ];

    return (
        <section className="mx-auto max-w-7xl">
            <h1 className="flex items-center justify-center gap-2 text-4xl font-bold text-center text-[var(--orange)] mb-12">
                Technologies <img className="w-12 h-12 ml-2 animate-pulse" src="https://www.svgrepo.com/show/336126/terminal.svg" alt="terminal icon" />
            </h1>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                { techStacks.map((stack, index) => (
                    <div key={ index } className="text-white p-8 rounded-xl shadow-xl border-1 border-[var(--orange)] [background:var(--blacktotransparent)]">
                        <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--white)]">{ stack.title }</h2>
                        <div className="grid grid-cols-3 gap-6">
                            { stack.items.map((item, idx) => (
                                <div key={ idx } className="flex flex-col items-center">
                                    <img src={ item.icon } alt={ item.name } className="w-12 h-12 mb-2" />
                                    <span className="text-md text-center text-[var(--lightgray)]">{ item.name }</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};
