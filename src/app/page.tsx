/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main>

      {/* About Section */}
      <section className="about-me">
        <img src="/images/about.png" alt="About" />
        <div className="text">
          <h1>Teo Imoto-Tar | 井本タール テオ</h1>

          <p>
            Hi! I’m an undergraduate student pursuing Computer Science and Mathematics at{" "}
            <a
              href="https://ucsd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              UC San Diego
            </a>{" "}
            and I work as a research assistant at{" "}
            <a
              href="https://neuroelectronics.ucsd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Kuzum Lab
            </a>{" "}
            in the{" "}
            <a
              href="https://jacobsschool.ucsd.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Jacobs School of Engineering
            </a>.
            <br /> <br /> 
            I am interested in software engineering and AI research, with a focus on computer vision and computational neuroscience. I’ve worked on projects ranging from robotics and game jams to
            fMRI-to-image generation. Outside of research, I make music and really like capybaras. {">:)"}
          </p>

          <div className="links-container mt-4">
            <a href="mailto:timototar@ucsd.edu" className="mr-4">timototar@ucsd.edu</a>
            <a href="https://github.com/teooi" className="mr-4">
              <img src="/images/github-logo.png" alt="GitHub" className="github-logo" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1oa957KSkcGjFXfWi7Er9jHnOLo-MQpPl/view" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="projects-title">Projects</h2>

        {/* BRAID Project */}
        <ProjectCard  
          title="BRAID: Brain Representation to Artificial Image via Diffusion"
          description= {
            <>
              A cross-modal fMRI-to-image reconstruction model that generates images from brain activity using a diffusion-based generative pipeline.
              <br /> <br />
              <i>San Diego Undergraduate Tech Conference (SDUTC), 2025.</i>
            </>
          }
          image="/images/braid2.png" 
          links={[
            { label: "code", url: "https://github.com/teooi/BRAID" },
            { label: "pdf", url: "https://drive.google.com/file/d/1j9X0CCV02v-jsGaxnceoX1eZoIzQR_OL/view?usp=sharing" }, 
            // { label: "slides", url: "https://docs.google.com/presentation/d/1gK8oJHUyC_aO2nXObkM5E8THjC53bpPpzPhe3K_50CI/edit?usp=sharing" },
            { label: "poster", url: "https://drive.google.com/file/d/1LunN7wZgO2sPuYu5FroYYU1PimrU-QlF/view?usp=sharing" },
          ]}
        />

        {/* Capyvision Project */}
        {/* <ProjectCard    
          title="CapyVision: Detecting Images from Generative Models"
          description="Fine-tuned EfficientNet model capable of detecting images from generative models. Currently, work in progress."
          image="/images/shh machine learning.png" 
          links={[
            { label: "website", url: "https://capyvision-web.vercel.app/" },
          ]}
        /> */}

        {/* User Recommendation Project */}
        <ProjectCard
          title="User Recommendation with BERT and FAISS"
          description={
            <>
              User and compliment recommendation system for{" "}
              <a
                href="https://www.murmurmatch.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Murmur Platforms Inc.
              </a>{" "}
              - an anonymous, university-only compliments platform with over 30,000 users. Below is a demo of our approach.
            </>
          }
          image="/images/recommend_plot4.png"
          links={[
            { label: "code", url: "https://colab.research.google.com/drive/1u8YWpkzm4wPidnpswnSAYh4k8OkJRjZP?usp=sharing" },
          ]}
        />
      </section>

      {/* Events Section */}
      <section className="events">
        <h2 className="events-title">Events</h2>

        <div className="event">
          <span className="event-text">
            TinyWare 25: <em>Incessant</em> — 48h game jam entry on theme "On Repeat"
          </span>
          <a href="https://bmen.itch.io/incessant" target="_blank">itch</a>
        </div>

        <div className="event">
          <span className="event-text">
            TritonWare Spring 25: <em>Moosties</em> — puzzle + story-driven game
          </span>
          <a href="https://bmen.itch.io/mootsies" target="_blank">itch</a>
        </div>
        
        <div className="event">
          <span className="event-text">
            DataHacks25 Project: Embedding Pokémon OSTs into the Real World
          </span>
          <a href="https://github.com/BenM2405/DataHacks25-Project" target="_blank">code</a>
        </div>

        <div className="event">
          <span className="event-text">
            Convex & Non-Convex Optimization Algorithms Notebook
          </span>
          <a href="https://github.com/teooi/optimization-algorithms" target="_blank">code</a>
        </div>

        <div className="event">
          <span className="event-text">
            TritonWare Fall 24: <em>Last Hours</em> — visual novel mystery game jam
          </span>
          <a href="https://teooi.itch.io/last-hours" target="_blank">itch</a>
        </div>
      </section>
    </main>
  );
}
