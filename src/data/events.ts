export interface Event {
  text: string;
  emphasis?: string;
  suffix?: string;
  link: {
    label: string;
    url: string;
  };
}

export const events: Event[] = [
  {
    text: "YC AI x Bio hackathon: ",
    suffix: 'Built Clinical Intelligence at a 12-hour hackathon (Tamarind Bio, BioRender): a tool that visualizes ligand binding affinities for a query protein using data from US patents and PubMed.',
    link: { label: "link", url: "https://events.ycombinator.com/bio-ai-hackathon" },
  },
  {
    text: "YC AI startup school: ",
    suffix: 'Two day conference featuring AI startups, top 2,500 CS handpicked students.',
    link: { label: "link", url: "https://events.ycombinator.com/ai-sus" },
  },
  {
    text: "TinyWare 25: ",
    emphasis: "Incessant",
    suffix: ' — 48h game jam entry on theme "On Repeat"',
    link: { label: "itch", url: "https://bmen.itch.io/incessant" },
  },
  {
    text: "TritonWare Spring 25: ",
    emphasis: "Mootsies",
    suffix: " — puzzle + story-driven game",
    link: { label: "itch", url: "https://bmen.itch.io/mootsies" },
  },
  {
    text: "DataHacks25 Project: Embedding Pok\u00e9mon OSTs into the Real World",
    link: {
      label: "code",
      url: "https://github.com/BenM2405/DataHacks25-Project",
    },
  },
  {
    text: "Convex & Non-Convex Optimization Algorithms Notebook",
    link: {
      label: "code",
      url: "https://github.com/teooi/optimization-algorithms",
    },
  },
  {
    text: "TritonWare Fall 24: ",
    emphasis: "Last Hours",
    suffix: " — visual novel mystery game jam",
    link: { label: "itch", url: "https://teooi.itch.io/last-hours" },
  },
];
