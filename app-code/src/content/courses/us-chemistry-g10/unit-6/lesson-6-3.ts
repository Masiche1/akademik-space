import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "chem10-u6-lesson-6-3",
  code: "6-3",
  title: "Periodic Table Organization",
  goal: "I CAN describe the structure of the periodic table, identify chemical families, and predict properties based on position.",
  standards: ["HS-PS1-1", "CCC: Patterns", "CCC: Systems and System Models"],
  vocabulary: [
    {
      term: "Group",
      definition: "Vertical column; elements share valence electrons.",
    },
    {
      term: "Period",
      definition: "Horizontal row; elements share electron shells.",
    },
    { term: "Alkali metals", definition: "Group 1 — highly reactive metals." },
    { term: "Alkaline earth metals", definition: "Group 2 — reactive metals." },
    { term: "Halogens", definition: "Group 17 — reactive nonmetals." },
    { term: "Noble gases", definition: "Group 18 — inert gases." },
    {
      term: "Metalloids",
      definition: "Elements with properties between metals and nonmetals.",
    },
    {
      term: "Transition metals",
      definition: "Groups 3-12 — d-block elements.",
    },
  ],
  concepts: [
    {
      id: "chem10-u6-table-structure",
      title: "Table structure",
      skill: "Describe periods, groups, and blocks of the periodic table.",
      lesson: {
        sections: [
          {
            heading: "Periods and groups",
            body: "- **Periods** (rows): 7 total; period number = number of electron shells.\n- **Groups** (columns): 18 total; group number relates to valence electrons (for main group).\n\n**Blocks**: s-block (groups 1-2), p-block (13-18), d-block (3-12), f-block (lanthanides/actinides).",
          },
          {
            heading: "Metal, nonmetal, metalloid",
            body: "- **Metals**: left and center; shiny, conductive, malleable.\n- **Nonmetals**: right side; dull, insulating, brittle.\n- **Metalloids**: diagonal line (B, Si, Ge, As, Sb, Te) — intermediate properties.",
          },
        ],
        keyFormulas: [
          { name: "Period", statement: "Row = number of electron shells" },
          { name: "Group", statement: "Column = valence electrons" },
          {
            name: "Blocks",
            statement: "s, p, d, f based on outermost subshell",
          },
        ],
        workedExample: {
          problem: "Which element is in period 3, group 2?",
          solution: "Magnesium (Mg) — period 3, group 2.",
        },
      },
      questions: [
        {
          id: "chem10-u6-table-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the period number tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of valence electrons" },
              { id: "b", text: "Number of electron shells" },
              { id: "c", text: "Atomic mass" },
              { id: "d", text: "Group number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Period",
                statement: "Row = number of shells.",
              },
            ],
            steps: [
              {
                reasoning: "Period number = electron shells occupied.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Number of electron shells",
            commonErrors: ["Confusing period with group."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-table-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Identify the element at period 4, group 1 and explain its properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Alkali metals",
                statement: "Group 1, highly reactive.",
              },
            ],
            steps: [
              { reasoning: "Potassium (K).", marks: 1, markCode: "M" },
              {
                reasoning: "Group 1 = alkali metal = highly reactive.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "One valence electron → easily lost → forms +1 ions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "K; alkali metal, reactive, forms K⁺.",
            commonErrors: ["Wrong element."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u6-table-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are elements in the same group similar chemically?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Valence electrons",
                statement: "Same group = same valence count.",
              },
              {
                kind: "principle",
                name: "Chemical behavior",
                statement: "Valence electrons determine bonding.",
              },
            ],
            steps: [
              {
                reasoning: "Same group → same number of valence electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Valence electrons determine bonding behavior.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Similar valence → similar reactions (e.g., all alkali metals react with water).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Inner electrons don't affect chemistry much.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same valence electrons → similar chemical behavior.",
            commonErrors: ["Not linking to valence."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u6-table-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Compare Na (group 1) and Cl (group 17), both period 3.",
          parts: [
            { label: "a", prompt: "Metal or nonmetal?", marks: 2 },
            { label: "b", prompt: "Valence electrons?", marks: 2 },
            { label: "c", prompt: "Reactivity?", marks: 3 },
            {
              label: "d",
              prompt: "What compound forms between them?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Groups",
                statement: "Group 1 metals, Group 17 halogens.",
              },
            ],
            steps: [
              {
                reasoning: "Na = metal; Cl = nonmetal (halogen).",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning: "Na = 1 valence; Cl = 7 valence.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Both very reactive — Na loses e⁻, Cl gains e⁻.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "NaCl — ionic compound.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
              {
                reasoning: "Na⁺ and Cl⁻ ions.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) metal/nonmetal (b) 1/7 (c) both reactive (d) NaCl.",
            commonErrors: ["Not recognizing ionic bond."],
            examinerNote: "2+2+3+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-families",
      title: "Chemical families",
      skill: "Describe properties of major element families.",
      lesson: {
        sections: [
          {
            heading: "Alkali and alkaline earth metals",
            body: "- **Group 1 (alkali)**: Li, Na, K, Rb, Cs — soft, reactive, +1 ions.\n- **Group 2 (alkaline earth)**: Be, Mg, Ca, Sr, Ba — less reactive, +2 ions.",
          },
          {
            heading: "Halogens and noble gases",
            body: "- **Group 17 (halogens)**: F, Cl, Br, I — reactive nonmetals, −1 ions.\n- **Group 18 (noble gases)**: He, Ne, Ar, Kr, Xe — inert, full valence shell.",
          },
          {
            heading: "Transition metals",
            body: "- Groups 3-12; variable oxidation states.\n- Form colored compounds, catalysts.\n- Examples: Fe, Cu, Ag, Au.",
          },
        ],
        keyFormulas: [
          {
            name: "Alkali metals",
            statement: "Group 1, +1 ions, very reactive",
          },
          {
            name: "Halogens",
            statement: "Group 17, −1 ions, reactive nonmetals",
          },
          { name: "Noble gases", statement: "Group 18, inert" },
          {
            name: "Transition metals",
            statement: "Groups 3-12, variable oxidation states",
          },
        ],
        workedExample: {
          problem: "Why are noble gases inert?",
          solution:
            "Full valence shell (octet) → no tendency to gain/lose electrons.",
        },
      },
      questions: [
        {
          id: "chem10-u6-families-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group contains the halogens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group 1" },
              { id: "b", text: "Group 2" },
              { id: "c", text: "Group 17" },
              { id: "d", text: "Group 18" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Halogens", statement: "Group 17." },
            ],
            steps: [
              { reasoning: "Halogens = group 17.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Group 17",
            commonErrors: ["Confusing with noble gases."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "chem10-u6-families-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are noble gases unreactive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Octet rule",
                statement: "Full valence shell = stable.",
              },
            ],
            steps: [
              {
                reasoning: "Noble gases have complete valence shell (octet).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "No tendency to gain or lose electrons.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Stable configuration → unreactive.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Full valence shell → stable → unreactive.",
            commonErrors: ["Not mentioning octet."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u6-families-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare alkali metals and alkaline earth metals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Group 1 vs 2",
                statement: "1 valence vs 2 valence electrons.",
              },
            ],
            steps: [
              {
                reasoning: "Alkali: 1 valence e⁻ → +1 ions, very reactive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alkaline earth: 2 valence e⁻ → +2 ions, less reactive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alkali more reactive — easier to lose 1 electron.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Example: Na vs Mg reactivity with water.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Alkali = +1, more reactive; alkaline earth = +2, less reactive.",
            commonErrors: ["Not comparing reactivity."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u6-families-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Transition metals have unique properties.",
          parts: [
            { label: "a", prompt: "Where are they located?", marks: 2 },
            {
              label: "b",
              prompt: "Variable oxidation states — why?",
              marks: 3,
            },
            { label: "c", prompt: "Why are they colored?", marks: 2 },
            { label: "d", prompt: "Name two uses.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Transition metals",
                statement: "Groups 3-12, d-block.",
              },
            ],
            steps: [
              {
                reasoning: "Groups 3-12 (d-block).",
                marks: 2,
                markCode: "B",
                part: "a",
              },
              {
                reasoning:
                  "d electrons close in energy → multiple oxidation states.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "d-d electron transitions absorb visible light → color.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Uses: structural materials (Fe, Ti), catalysts (Pt, Ni), electrical (Cu).",
                marks: 3,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) Groups 3-12 (b) d electrons close (c) d-d transitions (d) structural/catalyst/electrical.",
            commonErrors: ["Not explaining color."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u6-metalloids",
      title: "Metalloids and periodicity",
      skill: "Identify metalloids and explain periodic property changes.",
      lesson: {
        sections: [
          {
            heading: "Metalloids",
            body: "Elements along the metal-nonmetal diagonal: **B, Si, Ge, As, Sb, Te**.\n\n- Intermediate properties: semiconductors (Si, Ge).\n- Used in electronics, solar cells.\n- Boron: metalloid but behaves differently.",
          },
          {
            heading: "Periodicity",
            body: "Properties repeat periodically because electron configurations repeat.\n\n- Across period: metal → metalloid → nonmetal.\n- Down group: similar properties, increasing size/reactivity (for metals).",
          },
        ],
        keyFormulas: [
          {
            name: "Metalloids",
            statement: "B, Si, Ge, As, Sb, Te — diagonal line",
          },
          { name: "Semiconductor", statement: "Si, Ge — partial conductivity" },
          {
            name: "Periodicity",
            statement: "Properties repeat with electron configuration",
          },
        ],
        workedExample: {
          problem: "Why is silicon a semiconductor?",
          solution:
            "Metalloid — partial electron mobility → conducts under conditions.",
        },
      },
      questions: [
        {
          id: "chem10-u6-metalloids-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which element is a metalloid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sodium" },
              { id: "b", text: "Silicon" },
              { id: "c", text: "Sulfur" },
              { id: "d", text: "Silver" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Metalloids",
                statement: "Si is metalloid.",
              },
            ],
            steps: [
              {
                reasoning: "Si = metalloid (semiconductor).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Silicon",
            commonErrors: ["Choosing metal or nonmetal."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u6-metalloids-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are metalloids important in technology?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Semiconductors",
                statement: "Si, Ge used in electronics.",
              },
            ],
            steps: [
              {
                reasoning: "Metalloids (Si, Ge) are semiconductors.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Conductivity controllable by doping/temperature.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Essential for transistors, solar cells, computers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Semiconductor properties → electronics industry.",
            commonErrors: ["Not mentioning semiconductors."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "chem10-u6-metalloids-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain periodicity using sodium and potassium as examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Periodic trends",
                statement: "Same group = similar properties.",
              },
            ],
            steps: [
              {
                reasoning: "Na and K both group 1 → 1 valence electron.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both react violently with water → similar chemistry.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "K more reactive — larger, easier to lose electron.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Demonstrates periodicity: similar properties, trend down group.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Same group → similar chemistry; K more reactive down group.",
            commonErrors: ["Not noting trend down group."],
            examinerNote: "M1, R2, A1.",
          },
        },
        {
          id: "chem10-u6-metalloids-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Classify elements across period 3: Na, Mg, Al, Si, P, S, Cl, Ar.",
          parts: [
            {
              label: "a",
              prompt: "Classify each as metal, metalloid, or nonmetal.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Which is most reactive metal? Nonmetal?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What trend in metallic character across period?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Periodic trend",
                statement: "Metallic character decreases across period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Na, Mg, Al = metals; Si = metalloid; P, S, Cl, Ar = nonmetals.",
                marks: 4,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "Na most reactive metal (leftmost); Cl most reactive nonmetal (rightmost, before Ar).",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Metallic character decreases left → right.",
                marks: 3,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) metals Si nonmetals (b) Na/Cl (c) decreases across.",
            commonErrors: ["Including Ar as reactive nonmetal."],
            examinerNote: "4+3+3 = 10.",
          },
        },
      ],
    },
  ],
};
