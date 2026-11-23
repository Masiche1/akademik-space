import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "chem10-u6-lesson-6-2",
  code: "6-2",
  title: "Nuclear Chemistry and Radioactivity",
  goal: "I CAN describe nuclear structure, write nuclear equations, and calculate half-life.",
  standards: [
    "HS-PS1-8",
    "SEP: Using Mathematics and Computational Thinking",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Nuclide",
      definition: "A specific nucleus with defined protons and neutrons.",
    },
    { term: "Alpha decay", definition: "Emission of helium-4 nucleus (⁴₂He)." },
    { term: "Beta decay", definition: "Neutron → proton + electron (β⁻)." },
    { term: "Gamma decay", definition: "Emission of high-energy photon." },
    {
      term: "Half-life",
      definition: "Time for half the radioactive nuclei to decay.",
    },
    {
      term: "Fission",
      definition: "Splitting of heavy nucleus into lighter nuclei.",
    },
    {
      term: "Fusion",
      definition: "Combining light nuclei into heavier nucleus.",
    },
    {
      term: "Binding energy",
      definition: "Energy released when nucleus forms.",
    },
  ],
  concepts: [
    {
      id: "chem10-u6-nuclear-decay",
      title: "Nuclear decay types",
      skill:
        "Write and balance nuclear equations for alpha, beta, and gamma decay.",
      lesson: {
        sections: [
          {
            heading: "Alpha decay",
            body: "Heavy nuclei emit **alpha particles** (⁴₂He):\n$$^{A}_{Z}X \rightarrow ^{A-4}_{Z-2}Y + ^{4}_{2}\alpha$$\n\n- Mass number decreases by 4, atomic number by 2.\n- Example: ²³⁸U → ²³⁴Th + α.",
          },
          {
            heading: "Beta decay",
            body: "Neutron converts to proton + electron:\n$$^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + ^{0}_{-1}\beta$$\n\n- Mass number unchanged, atomic number +1.\n- Example: ¹⁴C → ¹⁴N + β⁻.",
          },
          {
            heading: "Gamma decay",
            body: "High-energy photon emitted; no change in mass or atomic number.\n$$^{A}_{Z}X^* \rightarrow ^{A}_{Z}X + \gamma$$\n\nOften accompanies alpha or beta decay.",
          },
        ],
        keyFormulas: [
          { name: "Alpha", statement: "A−4, Z−2" },
          { name: "Beta", statement: "A same, Z+1" },
          { name: "Gamma", statement: "No change in A or Z" },
        ],
        workedExample: {
          problem: "Write the alpha decay of ²³⁸U.",
          solution: "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.",
        },
      },
      questions: [
        {
          id: "chem10-u6-decay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is emitted in alpha decay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron" },
              { id: "b", text: "Helium nucleus" },
              { id: "c", text: "Photon" },
              { id: "d", text: "Neutron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alpha particle",
                statement: "⁴₂He nucleus.",
              },
            ],
            steps: [
              {
                reasoning: "Alpha = helium-4 nucleus.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Helium nucleus",
            commonErrors: ["Confusing with beta (electron)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-decay-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the beta decay equation for ¹⁴C (Z=6).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Beta decay",
                statement: "$^{A}_{Z}X \\rightarrow ^{A}_{Z+1}Y + \\beta^-$",
              },
            ],
            steps: [
              {
                reasoning: "A stays 14, Z increases to 7 (nitrogen).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "14C → 14N + β⁻ (+ antineutrino).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct symbols for parent, daughter, beta.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "¹⁴₆C → ¹⁴₇N + ⁰₋₁β.",
            commonErrors: ["Changing mass number."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u6-decay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete the decay series: ²³⁸U → α → ? → β → ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay rules",
                statement: "α: −4,−2; β: same A, +1 Z",
              },
            ],
            steps: [
              { reasoning: "²³⁸U → α → ²³⁴₉₀Th.", marks: 1, markCode: "M" },
              { reasoning: "Th → β → ²³⁴₉₁Pa.", marks: 1, markCode: "M" },
              {
                reasoning: "Correct identification of intermediate products.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Series shows Z and A conservation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "²³⁸U → ²³⁴Th → ²³⁴Pa.",
            commonErrors: ["Wrong mass/atomic numbers."],
            examinerNote: "M3, R1.",
          },
        },
        {
          id: "chem10-u6-decay-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A radioactive isotope decays by alpha emission.",
          parts: [
            {
              label: "a",
              prompt: "Parent: ²²⁶Ra (Z=88). Daughter after alpha?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "If daughter undergoes beta decay, what's the product?",
              marks: 3,
            },
            { label: "c", prompt: "Write the combined equation.", marks: 2 },
            {
              label: "d",
              prompt: "Which is more penetrating: alpha or beta? Why?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Alpha", statement: "A−4, Z−2" },
              { kind: "formula", name: "Beta", statement: "A same, Z+1" },
            ],
            steps: [
              {
                reasoning: "²²⁶Ra → ²²²₈₆Rn + α.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "²²²Rn → β → ²²²₈₇Fr.",
                marks: 3,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "²²⁶₈₈Ra → ²²²₈₆Rn + α; ²²²₈₆Rn → ²²²₈₇Fr + β.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Beta more penetrating — smaller, faster particle.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) ²²²Rn (b) ²²²Fr (c) equations (d) Beta more penetrating.",
            commonErrors: ["Wrong daughter elements."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-half-life",
      title: "Half-life calculations",
      skill: "Calculate remaining radioactive material after n half-lives.",
      lesson: {
        sections: [
          {
            heading: "Half-life concept",
            body: "**Half-life (t½)**: time for half the nuclei to decay.\n\n$$N = N_0 \left(\frac{1}{2}\right)^{t/t_{1/2}}$$\n\nOr use fraction remaining: $N/N_0 = (1/2)^n$ where $n = t/t_{1/2}$.",
          },
          {
            heading: "Applications",
            body: "- Carbon-14 dating (t½ = 5730 yr).\n- Medical isotopes (e.g., Tc-99m).\n- Nuclear waste management.",
          },
        ],
        keyFormulas: [
          { name: "Half-life", statement: "$N = N_0 (1/2)^{t/t_{1/2}}$" },
          {
            name: "Fraction remaining",
            statement: "$(1/2)^n$ after n half-lives",
          },
        ],
        workedExample: {
          problem: "100 g of Tc-99m (t½ = 6 hr). How much remains after 18 hr?",
          solution: "n = 18/6 = 3 half-lives. $100 \\times (1/2)^3 = 12.5$ g.",
        },
      },
      questions: [
        {
          id: "chem10-u6-halflife-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is half-life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time for all nuclei to decay" },
              { id: "b", text: "Time for half the nuclei to decay" },
              { id: "c", text: "Time for nucleus to split" },
              { id: "d", text: "Rate of decay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Half-life",
                statement: "Time for half to decay.",
              },
            ],
            steps: [
              {
                reasoning: "Half-life = 50% decay time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Time for half the nuclei to decay",
            commonErrors: ["Thinking it's total decay time."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-halflife-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sample has 80 g of radioactive isotope (t½ = 5 days). How much remains after 15 days?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$N = N_0(1/2)^n$",
              },
            ],
            steps: [
              {
                reasoning: "n = 15/5 = 3 half-lives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$80 \\times (1/2)^3 = 80 \\times 1/8$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 10 g.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10 g.",
            commonErrors: ["Wrong number of half-lives."],
            examinerNote: "M1, M1, A1.",
          },
        },
        {
          id: "chem10-u6-halflife-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "C-14 dating: a bone has 25% of original C-14 (t½ = 5730 yr). How old is it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$25\\% = (1/2)^2$ → 2 half-lives",
              },
            ],
            steps: [
              { reasoning: "25% = 1/4 = (1/2)².", marks: 1, markCode: "M" },
              { reasoning: "n = 2 half-lives.", marks: 1, markCode: "M" },
              {
                reasoning: "Age = 2 × 5730 = 11,460 yr.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "~11,500 years old.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "~11,460 years.",
            commonErrors: ["Using wrong fraction."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "chem10-u6-halflife-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A hospital uses I-131 (t½ = 8 days) for thyroid treatment.",
          parts: [
            {
              label: "a",
              prompt: "If 200 mg injected, how much after 24 days?",
              marks: 3,
            },
            {
              label: "b",
              prompt: "How long until only 25 mg remains?",
              marks: 4,
            },
            { label: "c", prompt: "Why is I-131 used medically?", marks: 2 },
            { label: "d", prompt: "What limits its use?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Half-life",
                statement: "$N = N_0(1/2)^n$",
              },
            ],
            steps: [
              {
                reasoning: "n = 24/8 = 3; $200 \\times (1/2)^3 = 25$ mg.",
                marks: 3,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "25/200 = 1/8 = (1/2)³ → n=3.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Time = 3 × 8 = 24 days.",
                marks: 2,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Thyroid concentrates iodine; beta radiation kills cells locally.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Radiation exposure to patient/others limits dose.",
                marks: 1,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 25 mg (b) 24 days (c) thyroid targeting + beta (d) radiation risk.",
            commonErrors: ["Wrong half-life count."],
            examinerNote: "3+4+2+1 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-nuclear-applications",
      title: "Nuclear reactions and applications",
      skill:
        "Distinguish fission and fusion and describe nuclear applications.",
      lesson: {
        sections: [
          {
            heading: "Fission vs fusion",
            body: "- **Fission**: heavy nucleus splits → energy + neutrons. Used in reactors/bombs.\n- **Fusion**: light nuclei combine → energy. Powers stars; requires extreme conditions.",
          },
          {
            heading: "Applications",
            body: "- **Nuclear power**: controlled fission → electricity.\n- **Medical**: radioisotopes for imaging/treatment.\n- **Radiocarbon dating**: C-14 for archaeology.\n- **Nuclear medicine**: PET scans, tracers.",
          },
        ],
        keyFormulas: [
          { name: "Fission", statement: "Heavy → light + energy" },
          { name: "Fusion", statement: "Light → heavy + energy" },
          {
            name: "Binding energy",
            statement: "Higher binding energy per nucleon = more stable",
          },
        ],
        workedExample: {
          problem: "Why does fusion require high temperature?",
          solution:
            "Nuclei must overcome electrostatic repulsion → need high kinetic energy.",
        },
      },
      questions: [
        {
          id: "chem10-u6-nucapp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What powers nuclear reactors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fusion" },
              { id: "b", text: "Fission" },
              { id: "c", text: "Chemical reaction" },
              { id: "d", text: "Decay only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Nuclear reactors",
                statement: "Controlled fission.",
              },
            ],
            steps: [
              {
                reasoning: "Reactors use controlled fission of U-235.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Fission",
            commonErrors: ["Confusing with fusion (stars)."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-nucapp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between fission and fusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Fission",
                statement: "Heavy nucleus splits.",
              },
              {
                kind: "property",
                name: "Fusion",
                statement: "Light nuclei combine.",
              },
            ],
            steps: [
              {
                reasoning: "Fission: heavy → lighter + neutrons + energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Fusion: light → heavier + energy.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Fission used in reactors; fusion powers stars.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fission = split heavy; fusion = combine light.",
            commonErrors: ["Reversing definitions."],
            examinerNote: "B2, A1.",
          },
        },
        {
          id: "chem10-u6-nucapp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is nuclear waste dangerous?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Radioactivity",
                statement: "Ionizing radiation damages cells.",
              },
              {
                kind: "principle",
                name: "Half-life",
                statement: "Long half-life = long-lasting hazard.",
              },
            ],
            steps: [
              {
                reasoning: "Contains unstable isotopes emitting radiation.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Ionizing radiation damages DNA/cells.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Long half-lives (thousands of years) → persistent hazard.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Requires secure long-term storage.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Radioactive + long-lived + damaging → requires isolation.",
            commonErrors: ["Not mentioning long half-life."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u6-nucapp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Evaluate nuclear power vs fossil fuels.",
          parts: [
            { label: "a", prompt: "Energy source comparison?", marks: 2 },
            { label: "b", prompt: "Emissions comparison?", marks: 2 },
            { label: "c", prompt: "Waste comparison?", marks: 3 },
            { label: "d", prompt: "Safety comparison?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy",
                statement: "Nuclear = high density, low fuel mass.",
              },
              {
                kind: "property",
                name: "Emissions",
                statement: "Nuclear = no CO₂; fossil = CO₂.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nuclear: tiny fuel mass, high energy density; fossil: large fuel mass.",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Nuclear: no CO₂ during operation; fossil: major CO₂ source.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "Nuclear: radioactive waste (long-lived); fossil: ash, CO₂, pollutants.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Nuclear: meltdown risk, radiation; fossil: mining, air pollution, climate.",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) Nuclear high density (b) Nuclear no CO₂ (c) Nuclear radioactive vs ash/CO₂ (d) Different risks.",
            commonErrors: ["One-sided comparison."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
