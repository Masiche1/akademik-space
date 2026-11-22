import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edialbio-u3-lesson-3-3",
  code: "3-3",
  title: "Disease and Immunity",
  goal: "I CAN describe pathogens, transmission, immune responses and vaccination.",
  standards: ["IB3 Biodiversity, evolution and disease", "Disease and immunity"],
  vocabulary: [
    { term: "Pathogen", definition: "Disease-causing organism (bacterium, virus, fungus, protoctist)." },
    { term: "Antigen", definition: "Molecule on pathogen surface triggering immune response." },
    { term: "Antibody", definition: "Protein produced by B lymphocytes that binds specific antigens." },
    { term: "Vaccination", definition: "Introducing weakened/dead pathogen to stimulate immunity." },
  ],
  concepts: [
    {
      id: "edialbio-u3-pathogens",
      title: "Pathogens and transmission",
      skill: "Describe types of pathogens, disease transmission and body defences.",
      lesson: {
        sections: [
          {
            heading: "Pathogen types",
            body: "Bacteria: single-celled prokaryotes (TB, cholera, typhoid) — reproduce rapidly, release toxins. Viruses: non-living particles needing host cells (influenza, HIV, measles) — hijack cell machinery. Fungi: yeasts/moulds (athlete's foot, thrush). Protoctists: single-celled eukaryotes (malaria — Plasmodium).",
          },
          {
            heading: "Transmission",
            body: "Droplet (coughing/sneezing — influenza), faecal-oral (cholera, typhoid — contaminated food/water), vector-borne (malaria — mosquito), contact (athlete's foot), blood-borne (HIV). Breaking transmission chain prevents spread.",
          },
          {
            heading: "Body defences",
            body: "Barriers: skin, mucous membranes, stomach acid, lysozyme in tears. Non-specific: phagocytes engulf pathogens; inflammation. Specific: immune system — lymphocytes, antibodies, memory cells.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is malaria different from bacterial diseases in transmission?",
          solution: "Malaria is vector-borne — Plasmodium transmitted by Anopheles mosquito bites, not person-to-person directly.",
        },
      },
      questions: [
        {
          id: "edialbio-path-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a viral disease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tuberculosis" },
              { id: "b", text: "Influenza" },
              { id: "c", text: "Cholera" },
              { id: "d", text: "Malaria" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Virus", statement: "Non-living, needs host cell." }],
            steps: [{ reasoning: "Influenza caused by virus.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Influenza",
          },
        },
        {
          id: "edialbio-path-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways diseases can be transmitted.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Transmission", statement: "Droplet, faecal-oral, vector, contact." }],
            steps: [
              { reasoning: "Droplet: coughs/sneezes spread pathogens in air (influenza).", marks: 1, markCode: "A" },
              { reasoning: "Faecal-oral: contaminated food/water (cholera, typhoid).", marks: 1, markCode: "A" },
              { reasoning: "Vector-borne: mosquito transmits malaria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two valid transmission routes",
            commonErrors: ["Saying all diseases spread same way."],
          },
        },
        {
          id: "edialbio-path-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why viruses are difficult to treat with antibiotics.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Virus vs antibiotic", statement: "Antibiotics target bacterial processes." }],
            steps: [
              { reasoning: "Antibiotics target bacterial structures/processes (cell wall, ribosomes).", marks: 1, markCode: "M" },
              { reasoning: "Viruses lack cells — no cell wall, own ribosomes, metabolism.", marks: 1, markCode: "M" },
              { reasoning: "Viruses replicate inside host cells using host machinery.", marks: 1, markCode: "A" },
              { reasoning: "Antibiotics have nothing to attack → ineffective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Viruses lack bacterial targets → antibiotics ineffective",
            commonErrors: ["Saying viruses are bacteria."],
          },
        },
        {
          id: "edialbio-path-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Describe the body's defence against pathogens.",
          parts: [
            { label: "a", prompt: "Non-specific barriers.", marks: 3 },
            { label: "b", prompt: "Non-specific cellular defences.", marks: 3 },
            { label: "c", prompt: "Specific immune response.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "method", name: "Immune defence", statement: "Barriers → phagocytes → lymphocytes." }],
            steps: [
              { part: "a", reasoning: "Skin barrier, mucous membranes trap pathogens.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Stomach acid kills ingested pathogens.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Lysozyme in tears/saliva breaks cell walls.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Phagocytes engulf and digest pathogens.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inflammation increases blood flow, brings phagocytes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fever raises temperature inhibiting pathogens.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lymphocytes recognise antigens on pathogens.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "B cells produce antibodies specific to antigen.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Antibodies bind pathogens → phagocytosis/complement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Memory cells enable faster secondary response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Barriers → phagocytes → antibodies → memory",
            commonErrors: ["Skipping specific immunity."],
          },
        },
      ],
    },
    {
      id: "edialbio-u3-immunity",
      title: "Vaccination and herd immunity",
      skill: "Explain active/passive immunity, vaccination mechanism and herd immunity.",
      lesson: {
        sections: [
          {
            heading: "Active immunity",
            body: "Body produces own antibodies after infection or vaccination. Natural active: survive infection → memory cells. Artificial active: vaccine (weakened/dead pathogen or antigen) → immune response without disease. Long-lasting immunity.",
          },
          {
            heading: "Passive immunity",
            body: "Receive ready-made antibodies — no immune response needed. Natural passive: antibodies from mother across placenta/breast milk (temporary). Artificial passive: antibody injection (antivenom, rabies treatment). Short-term only — no memory cells.",
          },
          {
            heading: "Herd immunity and vaccination",
            body: "When enough people immune, disease can't spread → protects vulnerable individuals who can't be vaccinated. Vaccines: attenuated (weakened live), inactivated (dead), subunit/toxoid. Eradication example: smallpox eliminated 1980.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Compare natural active and artificial passive immunity.",
          solution: "Natural active: body makes antibodies after infection — long-lasting. Artificial passive: receives antibodies — immediate but temporary, no memory.",
        },
      },
      questions: [
        {
          id: "edialbio-imm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gives the longest-lasting immunity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Active immunity" },
              { id: "b", text: "Breast milk antibodies" },
              { id: "c", text: "Antivenom injection" },
              { id: "d", text: "Passive immunity" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Active immunity", statement: "Own antibodies + memory cells." }],
            steps: [{ reasoning: "Memory cells → faster/stronger secondary response.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Active immunity",
          },
        },
        {
          id: "edialbio-imm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish active and passive immunity.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "comparison", name: "Active vs passive", statement: "Own antibodies vs received." }],
            steps: [
              { reasoning: "Active: body produces own antibodies; passive: receives ready-made.", marks: 1, markCode: "M" },
              { reasoning: "Active: slower onset, long-lasting; passive: immediate, temporary.", marks: 1, markCode: "A" },
              { reasoning: "Active: memory cells; passive: none.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active=own+memory; passive=received+temporary",
            commonErrors: ["Saying passive is permanent."],
          },
        },
        {
          id: "edialbio-imm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how vaccination provides immunity without causing disease.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Vaccination", statement: "Weakened antigen → immune response." }],
            steps: [
              { reasoning: "Vaccine contains weakened/dead pathogen or antigen fragments.", marks: 1, markCode: "M" },
              { reasoning: "Immune system recognises antigen → produces antibodies + memory cells.", marks: 1, markCode: "M" },
              { reasoning: "Pathogen too weak to cause disease.", marks: 1, markCode: "A" },
              { reasoning: "On real infection, memory cells mount faster stronger response.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak antigen → immune response → memory without disease",
            commonErrors: ["Saying vaccine causes disease."],
          },
        },
        {
          id: "edialbio-imm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Discuss herd immunity and its importance in vaccination programmes.",
          parts: [
            { label: "a", prompt: "Define herd immunity.", marks: 3 },
            { label: "b", prompt: "How it protects vulnerable individuals.", marks: 4 },
            { label: "c", prompt: "Limitations and risks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Herd immunity", statement: "Enough immune → disease can't spread." }],
            steps: [
              { part: "a", reasoning: "When sufficient % of population immune, disease can't spread.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Threshold depends on disease contagiousness (R₀).", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Protects those who can't be vaccinated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Immunocompromised, infants, allergic individuals can't vaccinate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "If surrounded by immune people, pathogen can't reach them.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Breaks transmission chain.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Community protection.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Requires high vaccination coverage (~95% for measles).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vaccine hesitancy can drop below threshold → outbreaks.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "New variants may evade immunity.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Enough immune → protects vulnerable; needs high coverage",
            commonErrors: ["Saying herd immunity protects the unvaccinated directly."],
          },
        },
      ],
    },
  ],
};
