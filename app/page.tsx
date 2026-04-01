export default function Home() {
  const projects = [
    {
      title: "Sentiment Analysis (SA) with NLP",
      description:
        "NLP model for sentiment classification in text using Python and PyTorch.",
      tech: ["Python", "PyTorch", "NLP"],
      link: "https://github.com/victoriaguilllen/NER-Sentiment-Alerts",
      paper: "/ner_sa_paper.pdf",
      image: "/ner_sa_img.png"
    },
    {
      title: "Warehouse Robot — Deep Reinforcement Learning",
      description:
        "A reinforcement learning project where an agent learns to navigate a simulated warehouse to pick up objects and, optionally, deliver them to a designated area. Two agent families are implemented: SARSA(0) with tile coding and Deep Q-Network (DQN) with PyTorch.",
      tech: ["Python", "PyTorch", "Gymnasium", "NumPy", "Matplotlib", "Optuna"],
      link: "https://github.com/victoriaguilllen/Reinforcement-Learning",
      paper: null,
      image:  "/rl_img.png",
    },
    {
      title: "CreditRiskAnalysis",
      description:
        "A fully analysis of the FICO dataset witten in python showing the performance of diferent classification models. Emphasis is also placed on the differences between supervised and unsupervised learning.",
      tech: ["scikit-learn", "pandas", "Machine Learning"],
      link: "https://github.com/victoriaguilllen/CreditRiskAnalysis",
      paper: "/ml_paper.pdf",
      image:  "/ml_img.png"
    },
    {
      title: "Vision Tic-Tac-Toe",
      description:"Tic-Tac-Toe game controlled by computer vision — players draw moves in the air  using a red object detected by the camera. Features single-player (vs AI) and  multiplayer modes, with camera calibration and a bag-of-words model for gesture recognition.",
      tech: ["Python", "OpenCV", "scikit-learn", "Computer Vision", "Bag of Words"],
      link: "https://github.com/victoriaguilllen/TicTacToe",
      paper: "/cv_paper.pdf",
      video:  "/cv_vid.mp4"
    },
    {
      title: "TaxiDriver-UnityGame ",
      description:
      "Taxi Driver is a 3D simulation game developed in Unity (C#) where the player takes on the role of a taxi driver navigating a city, picking up passengers, and managing time, money, and vehicle conditions — all while avoiding obstacles and police penalties.",
      tech: ["Unity", "C#", "NavMesh", "BFS", "State Machines", "OOP"],
      link: "https://github.com/victoriaguilllen/TaxiDriver-UnityGame",
      paper: "/TaxiDriver_repoprt.pdf",
      video:  "/para_vid.mov"
    },
    {
      title: "SearchingForCoronelKurtz",
      description:
        "A complete AI-based game inspired by “Buscando al Coronel Kurtz”, developed using logical and Bayesian reasoning agents. This project implements multiple intelligent agents (logical, Bayesian, and search-based) capable of exploring, inferring, and making decisions in a dynamic environment represented as a grid world.",
      tech: ["Python", "BFS", "Bayesian Reasoning", "Logic Inference"],
      link: "https://github.com/victoriaguilllen/BuscandoAlCoronelKurtz",
      paper: "/fia_paper.pdf",
      image:  "/fia_img.png"
    },
    {
      title: "2DPixelInterpolation",
      description:
        "Numerical Methods project on 2D interpolation for image scaling and resampling. Implements Bilinear, Bicubic, and Nearest-Neighbor methods, Voronoi diagrams, and comparative experiments on images and analytic functions (MATLAB).",
      tech: ["MATLAB"],
      link: "https://github.com/victoriaguilllen/2D-Pixel-Interpolation",
      paper: "/metodos_paper.pdf",
      image:  "/metodos_img.png"
    },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "scikit-learn",
    "pandas",
    "NLP",
    "AWS",
    "SQL",
    "Git",
    "Jupyter",
    "Power BI",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-violet-50 text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <nav className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-violet-600">
              Victoria Guillén de la Torre
            </p>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-violet-600">
              About
            </a>
            <a href="#projects" className="hover:text-violet-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-violet-600">
              Skills
            </a>
            <a href="#contact" className="hover:text-violet-600">
              Contact
            </a>
          </div>
        </nav>

        <section className="grid items-center gap-10 md:grid-cols-2">
          <div>


            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Victoria Guillén de la Torre
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I’m a Mathematical Engineering and Artificial Intelligence student at
              ICAI (Universidad Pontificia Comillas), graduating in June 2026.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://github.com/victoriaguilllen"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-violet-300 hover:text-violet-600"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/victoriaguillendelatorre"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-pink-300 hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
            <div className="absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-violet-200/60 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-pink-300" />
                <div className="h-3 w-3 rounded-full bg-violet-300" />
                <div className="h-3 w-3 rounded-full bg-sky-300" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-pink-50 p-4">
                  <p className="text-sm text-slate-500">Current focus</p>
                  <p className="mt-1 font-semibold">AI · Machine Learning · Data Science · Quantitative Finance · Software Development</p>
                </div>
                <div className="rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm text-slate-500">Looking for</p>
                  <p className="mt-1 font-semibold">Internships and exciting technical challenges</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-4">
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="mt-1 font-semibold">Madrid, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24">
          <div className="max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              About
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I'm a Mathematical Engineering and Artificial Intelligence student at
              ICAI (Universidad Pontificia Comillas), graduating in June 2026.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I'm currently on exchange at Chung-Ang University in South Korea. During
              this year I'm expanding my interests beyond AI projects and beginning to
              explore the world of finance, both through coursework and personal study.
              I also recently enrolled in a Law degree at UNED.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I am also working on my Bachelor's thesis in collaboration with the Barcelona
              Supercomputing Center (BSC), exploring diffusion-based generative models for
              3D pose estimation and shape assembly, with a focus on Rectified Point Flow
              applied to point clouds.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              After graduating, I will continue my studies with the Master's in Advanced
              Artificial Intelligence at ICAI Comillas.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Outside of academics, I enjoy tennis, padel, and running.
            </p>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold">Things I’ve built</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 rounded-2xl bg-gradient-to-br from-pink-100 via-violet-100 to-sky-100 p-6">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-xl shadow h-40 object-contain mx-auto"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow h-40 object-contain mx-auto"
                    />
                  )}
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-violet-600 transition group-hover:translate-x-1"
                >
                  View on GitHub →
                </a>

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    className="ml-4 inline-block text-sm font-medium text-pink-600"
                  >
                    Read paper →
                  </a>
                )}

              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold">Tech I work with</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 pb-8">
          <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold">Let’s connect</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I’m always happy to connect about AI, internships, projects, or new
              opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:vguillentorre@gmail.com"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900"
              >
                Email me
              </a>
              <a
                href="https://github.com/victoriaguilllen"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/victoriaguillendelatorre"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}    },
    {
      title: "TaxiDriver-UnityGame ",
      description:
      "Taxi Driver is a 3D simulation game developed in Unity (C#) where the player takes on the role of a taxi driver navigating a city, picking up passengers, and managing time, money, and vehicle conditions — all while avoiding obstacles and police penalties.",
      tech: ["Unity", "C#", "NavMesh", "BFS", "State Machines", "OOP"],
      link: "https://github.com/victoriaguilllen/TaxiDriver-UnityGame",
      paper: "/TaxiDriver_repoprt.pdf",
      video:  "/para_vid.mov"
    },
    {
      title: "SearchingForCoronelKurtz",
      description:
        "A complete AI-based game inspired by “Buscando al Coronel Kurtz”, developed using logical and Bayesian reasoning agents. This project implements multiple intelligent agents (logical, Bayesian, and search-based) capable of exploring, inferring, and making decisions in a dynamic environment represented as a grid world.",
      tech: ["Python", "BFS", "Bayesian Reasoning", "Logic Inference"],
      link: "https://github.com/victoriaguilllen/BuscandoAlCoronelKurtz",
      paper: "/fia_paper.pdf",
      image:  "/fia_img.png"
    },
    {
      title: "2DPixelInterpolation",
      description:
        "Numerical Methods project on 2D interpolation for image scaling and resampling. Implements Bilinear, Bicubic, and Nearest-Neighbor methods, Voronoi diagrams, and comparative experiments on images and analytic functions (MATLAB).",
      tech: ["MATLAB"],
      link: "https://github.com/victoriaguilllen/2D-Pixel-Interpolation",
      paper: "/metodos_paper.pdf",
      image:  "/metodos_img.png"
    },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "scikit-learn",
    "pandas",
    "NLP",
    "AWS",
    "SQL",
    "Git",
    "Jupyter",
    "Power BI",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-violet-50 text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <nav className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-violet-600">
              Victoria Guillén de la Torre
            </p>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-violet-600">
              About
            </a>
            <a href="#projects" className="hover:text-violet-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-violet-600">
              Skills
            </a>
            <a href="#contact" className="hover:text-violet-600">
              Contact
            </a>
          </div>
        </nav>

        <section className="grid items-center gap-10 md:grid-cols-2">
          <div>


            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Victoria Guillén de la Torre
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I’m a Mathematical Engineering and Artificial Intelligence student at
              ICAI (Universidad Pontificia Comillas), graduating in June 2026.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://github.com/victoriaguilllen"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-violet-300 hover:text-violet-600"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/victoriaguillendelatorre"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium shadow-sm transition hover:border-pink-300 hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
            <div className="absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-violet-200/60 blur-2xl" />
            <div className="relative rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-pink-300" />
                <div className="h-3 w-3 rounded-full bg-violet-300" />
                <div className="h-3 w-3 rounded-full bg-sky-300" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-pink-50 p-4">
                  <p className="text-sm text-slate-500">Current focus</p>
                  <p className="mt-1 font-semibold">AI · Machine Learning · Data Science · Quantitative Finance · Software Development</p>
                </div>
                <div className="rounded-2xl bg-violet-50 p-4">
                  <p className="text-sm text-slate-500">Looking for</p>
                  <p className="mt-1 font-semibold">Internships and exciting technical challenges</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-4">
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="mt-1 font-semibold">Madrid, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24">
          <div className="max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              About
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I'm a Mathematical Engineering and Artificial Intelligence student at
              ICAI (Universidad Pontificia Comillas), graduating in June 2026.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I'm currently on exchange at Chung-Ang University in South Korea. During
              this year I'm expanding my interests beyond AI projects and beginning to
              explore the world of finance, both through coursework and personal study.
              I also recently enrolled in a Law degree at UNED.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I am also working on my Bachelor's thesis in collaboration with the Barcelona
              Supercomputing Center (BSC), exploring diffusion-based generative models for
              3D pose estimation and shape assembly, with a focus on Rectified Point Flow
              applied to point clouds.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              After graduating, I will continue my studies with the Master's in Advanced
              Artificial Intelligence at ICAI Comillas.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Outside of academics, I enjoy tennis, padel, and running.
            </p>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold">Things I’ve built</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 rounded-2xl bg-gradient-to-br from-pink-100 via-violet-100 to-sky-100 p-6">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-xl shadow h-40 object-contain mx-auto"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow h-40 object-contain mx-auto"
                    />
                  )}
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-medium text-violet-600 transition group-hover:translate-x-1"
                >
                  View on GitHub →
                </a>

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    className="ml-4 inline-block text-sm font-medium text-pink-600"
                  >
                    Read paper →
                  </a>
                )}

              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold">Tech I work with</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 pb-8">
          <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold">Let’s connect</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I’m always happy to connect about AI, internships, projects, or new
              opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:vguillentorre@gmail.com"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900"
              >
                Email me
              </a>
              <a
                href="https://github.com/victoriaguilllen"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/victoriaguillendelatorre"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-600 px-5 py-3 text-sm font-medium text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
