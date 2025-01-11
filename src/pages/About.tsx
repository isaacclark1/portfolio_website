const About: React.FC = () => {
  return (
    <main className="flex flex-col max-w-4xl mx-auto md:mt-32 mt-16">
      <h2 className="sm:text-6xl text-5xl lg:text-7xl sm:text-left text-center animate-slideInFromTop">
        About
      </h2>
      <p className="mt-10 text-center sm:text-left animate-slideInFromLeft">
        My name is Isaac Clark, an aspiring software engineer from Haywards
        Heath, West Sussex, England. I am a first-class honours graduate in{" "}
        <a
          href="https://www.open.ac.uk/courses/computing-it/degrees/bsc-computing-it-software-q62-soft"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Computing and IT (Software)
        </a>{" "}
        from the Open University.
      </p>

      <p className="mt-5 animate-slideInFromRight text-center sm:text-left">
        Throughout my academic and personal studies, I have developed strong
        technical skills and a passion for software development, particularly in
        building efficient and scalable applications. My technical toolkit
        includes knowledge of programming languages such as JavaScript,
        TypeScript, Python and Java, as well as a deep understanding of software
        engineering principles and web technologies.
      </p>

      <p className="animate-slideInFromLeft mt-5 text-center sm:text-left">
        In addition to my technical skills, I bring strong problem-solving
        skills, the ability to work effectively in a team, and a high level of
        self motivation.
      </p>

      <p className="animate-slideInFromRight mt-5 text-center sm:text-left">
        I am now looking to apply my software development skills in a
        professional setting, with a keen interest in opportunities within web
        development.{" "}
        <a
          href="mailto:isaac2001clark@gmail.com?subject=Hi Isaac, I want to hire you!"
          className="hover:text-green-600"
        >
          <strong>If you are hiring, let's chat! 💬😀</strong>
        </a>
      </p>

      <div className="animate-slideInFromLeft ">
        <p className="animate-slideInFromLeft mt-5 mb-2">Key skills:</p>

        <ul className="list-square ml-10 space-y-2">
          <li>JavaScript, TypeScript, Python, Java.</li>
          <li>
            Knowledge of software engineering principles and object-oriented
            programming.
          </li>
          <li>
            Web Frameworks/Libraries: React.js, Next.js, TailwindCSS,
            Express.js.
          </li>
          <li>Knowledge of SQL and Document databases.</li>
          <li>
            Strong problem-solving, time-management, and organisational skills.
          </li>
          <li>Capable of working independently.</li>
          <li>
            Comfortable working in high-pressure environments and delivering
            results.
          </li>
          <li>Effective communication and collaboration skills.</li>
        </ul>
      </div>
    </main>
  );
};

export default About;
