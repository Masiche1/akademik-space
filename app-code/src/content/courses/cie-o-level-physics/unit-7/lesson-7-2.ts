import type { Lesson } from "../../../types.ts";

export const lessonp72: Lesson = {
  id: "olphys-u7-lesson-7-2",
  code: "7-2",
  title: "Radioactivity and Nuclear Energy",
  goal: "I CAN describe radioactive decay, half-life and nuclear energy.",
  standards: ["5054 7.2"],
  vocabulary: [
    { term: "Radioactivity", definition: "Spontaneous emission of radiation from unstable nuclei." },
    { term: "Alpha (α)", definition: "Helium nucleus — 2 protons+2 neutrons, +2 charge, low penetration." },
    { term: "Beta (β)", definition: "Fast electron, -1 charge, medium penetration." },
    { term: "Gamma (γ)", definition: "EM wave, no charge, highest penetration." },
    { term: "Half-life", definition: "Time for half the radioactive nuclei to decay." },
    { term: "Nuclear fission", definition: "Heavy nucleus splits → energy + neutrons." },
    { term: "Nuclear fusion", definition: "Light nuclei join → energy (Sun)." },
    { term: "Isotope", definition: "Same element, different neutron number." },
  ],
  concepts: [
    {
      id: "olphys-u7-radioactive-decay",
      title: "Radioactive decay and half-life",
      skill: "Describe decay types and calculate half-life.",
      lesson: {
        sections: [
          {
            heading: "Decay types",
            body: "- **Alpha**: loses 2p+2n → new element, heavy, stopped by paper\n- **Beta**: neutron→proton+electron, medium penetration\n- **Gamma**: EM radiation only, needs thick lead/concrete",
          },
          {
            heading: "Half-life",
            body: "Time for half the unstable nuclei to decay.\n\n- Constant for each isotope (e.g., C-14: 5700 years)\n- After each half-life: activity halves\n- Cannot predict individual decay — only probability",
          },
          {
            heading: "Uses and hazards",
            body: "Uses: carbon dating, medical tracers, smoke detectors, sterilisation.\n\nHazards: ionising radiation damages cells → cancer. Protection: time, distance, shielding.",
          },
        ],
        keyFormulas: [
          { name: "Half-life", statement: "$N = N_0 \\times \\left(\\dfrac{1}{2}\\right)^{t/T}\\\\ \\text{or}\\ \\text{activity halves per } T$" },
        ],
        workedExample: {
          problem: "Sample has 800 Bq activity, half-life 5 days. Activity after 15 days?",
          solution: "15/5 = 3 half-lives → 800 → 400 → 200 → 100 Bq.",
        },
      },
      questions: [
        {
          id: "olphys-u7-radioactive-decay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which radiation is most penetrating?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Alpha" }, { id: "b", text: "Beta" }, { id: "c", text: "Gamma" }, { id: "d", text: "All same" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "property", name: "Radiation", statement: "Gamma most penetrating." }],
            steps: [{ reasoning: "Recall.", working: "\\gamma \\text{ most}", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Gamma",
            commonErrors: ["Alpha least penetrating."],
          },
        },
        {
          id: "olphys-u7-radioactive-decay-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define half-life.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Half-life", statement: "Time for half nuclei to decay." }],
            steps: [
              { reasoning: "State definition.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Time taken for half of the radioactive nuclei in a sample to decay (activity halves).",
            commonErrors: ["Saying 'half the sample disappears'."],
          },
        },
        {
          id: "olphys-u7-radioactive-decay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An isotope has half-life 10 hours. Starting activity 1600 Bq, find activity after 30 hours.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Half-life", statement: "Halves each half-life." }],
            steps: [
              { reasoning: "30/10 = 3 half-lives.", marks: 1, markCode: "M" },
              { reasoning: "1600→800→400→200.", marks: 1, markCode: "M" },
              { reasoning: "= 200 Bq.", marks: 1, markCode: "A" },
              { reasoning: "Unit Bq.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "200 Bq",
            commonErrors: ["Wrong number of half-lives."],
          },
        },
        {
          id: "olphys-u7-radioactive-decay-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe radioactive decay and half-life.",
          parts: [
            { label: "a", prompt: "Three decay types.", marks: 3 },
            { label: "b", prompt: "Half-life definition.", marks: 3 },
            { label: "c", prompt: "Two uses of radioactivity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Radioactivity", statement: "α/β/γ; half-life; uses." }],
            steps: [
              { part: "a", reasoning: "Alpha/beta/gamma described.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Penetration order.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Time for half decay.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Activity halves.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any two uses.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct applications.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) αβγ (b) half decay time (c) dating/tracers",
            commonErrors: ["In (a) wrong order."],
          },
        },
      ],
    },
    {
      id: "olphys-u7-nuclear-energy",
      title: "Nuclear fission and fusion",
      skill: "Compare fission and fusion and their energy release.",
      lesson: {
        sections: [
          {
            heading: "Fission",
            body: "Heavy nucleus (U-235) splits into lighter nuclei + neutrons + energy.\n\n- Chain reaction: neutrons cause more fissions\n- Used in nuclear power stations\n- Produces radioactive waste",
          },
          {
            heading: "Fusion",
            body: "Light nuclei join to form heavier + energy.\n\n- Powers the Sun and stars\n- Needs extreme temperature/pressure\n- No long-lived radioactive waste",
          },
          {
            heading: "Energy comparison",
            body: "Both release energy because mass converts to energy (E=mc²).\n\nFission: controlled in reactors; Fusion: research stage (ITER).",
          },
        ],
        keyFormulas: [
          { name: "Mass-energy", statement: "$E = mc^2$" },
        ],
        workedExample: {
          problem: "Which releases more energy per nucleon: fission or fusion?",
          solution: "Both release energy; fusion releases more per nucleon but harder to achieve.",
        },
      },
      questions: [
        {
          id: "olphys-u7-nuclear-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is nuclear fission?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Nuclei join" }, { id: "b", text: "Heavy nucleus splits" }, { id: "c", text: "Electron moves" }, { id: "d", text: "Atom ionises" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fission", statement: "Heavy nucleus splits." }],
            steps: [{ reasoning: "Recall.", working: "\\text{split}", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Heavy nucleus splits",
            commonErrors: ["Confusing with fusion."],
          },
        },
        {
          id: "olphys-u7-nuclear-energy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Where does nuclear fusion occur naturally?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "property", name: "Fusion", statement: "Sun/stars." }],
            steps: [
              { reasoning: "Sun/stars.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In the Sun and other stars.",
            commonErrors: ["Saying nuclear reactors."],
          },
        },
        {
          id: "olphys-u7-nuclear-energy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the chain reaction in nuclear fission.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fission", statement: "Neutrons trigger more fissions." }],
            steps: [
              { reasoning: "Neutron hits U-235.", marks: 1, markCode: "M" },
              { reasoning: "Fission releases more neutrons.", marks: 1, markCode: "M" },
              { reasoning: "Chain continues.", marks: 1, markCode: "M" },
              { reasoning: "Energy released.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A neutron causes U-235 to fission, releasing energy and more neutrons — these trigger further fissions in a chain reaction.",
            commonErrors: ["Not mentioning neutron multiplication."],
          },
        },
        {
          id: "olphys-u7-nuclear-energy-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Compare nuclear fission and fusion.",
          parts: [
            { label: "a", prompt: "Process description.", marks: 3 },
            { label: "b", prompt: "Where each occurs.", marks: 3 },
            { label: "c", prompt: "Advantages/disadvantages.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Fission/Fusion", statement: "Split vs join; reactor vs Sun." }],
            steps: [
              { part: "a", reasoning: "Fission: split heavy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Fusion: join light.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fission: reactors.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Fusion: Sun.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Waste vs clean.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conditions needed.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) split vs join (b) reactor vs Sun (c) waste vs clean",
            commonErrors: ["Swapping processes."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olphys-u7-nuclear-notes",
      title: "Radioactivity and nuclear energy — revision notes",
      summary: "α/β/γ, half-life, fission, fusion.",
      sections: [
        {
          heading: "Key facts",
          body: "α stopped by paper, β by aluminium, γ needs lead. Half-life halves activity. Fission=split (reactors); fusion=join (Sun).",
        },
        {
          heading: "Exam technique",
          body: "- Penetration: α<β<γ.\n- Half-life: activity halves each T.\n- Chain reaction needs neutrons.",
        },
      ],
    },
  ],
};
