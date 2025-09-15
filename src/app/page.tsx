/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main>

      {/* About Section */}
      <section className="about-me">
        <img src="./images/about.png" alt="About" />
        <div className="text">
          <h1>Teo Imoto-Tar | 井本タール テオ</h1>

          <p>
            Hi! I’m an undergraduate student pursuing Computer Science and Mathematics at UC San Diego and a member of the{" "}
            <a 
              href="https://neuroelectronics.ucsd.edu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Kuzum Lab
            </a>. I am interested in software engineering
            and AI research, with a focus on computer vision, neuroscience, 
            and data analysis. I’ve worked on projects ranging from robotics and game jams to fMRI-to-image generation. Outside of research, 
            I make music and really like capybaras. {">:)"}
          </p>

          <div className="links-container mt-4">
            <a href="mailto:timototar@ucsd.edu" className="mr-4">timototar@ucsd.edu</a>
            <a href="https://github.com/teooi" className="mr-4">
              <img src="./images/github-logo.png" alt="GitHub" className="github-logo" />
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
          description="A cross-modal fMRI-to-image reconstruction model that generates images from brain activity using a diffusion-based generative pipeline."
          image="./images/braid8.png" 
          links={[
            { label: "code", url: "https://github.com/teooi/BRAID" },
            { label: "pdf", url: "https://drive.google.com/file/d/1j9X0CCV02v-jsGaxnceoX1eZoIzQR_OL/view?usp=sharing" }, 
            { label: "slides", url: "https://docs.google.com/presentation/d/1gK8oJHUyC_aO2nXObkM5E8THjC53bpPpzPhe3K_50CI/edit?usp=sharing" },
          ]}
        />

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
              — an anonymous, university-only compliments platform with over 24,000 users. Below is a demo of our approach.
            </>
          }
          image="./images/recommend_plot3.png"
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
            TritonWare Fall 24: <em>Last Hours</em> — visual novel mystery game jam
          </span>
          <a href="https://teooi.itch.io/last-hours" target="_blank">itch</a>
        </div>
      </section>
    </main>
  );
}
