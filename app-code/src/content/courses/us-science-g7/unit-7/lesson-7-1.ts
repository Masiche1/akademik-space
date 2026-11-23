import type { Lesson } from "../../../types.ts";

export const lesson71: Lesson = {
  id: "s7-u7-lesson-7-1",
  code: "7-1",
  title: "Atomic Structure and Elements",
  goal: "I CAN describe the structure of atoms, distinguish between elements compounds and mixtures, and use the periodic table to identify element properties.",
  standards: [
    "MS-PS1-1",
    "MS-PS1-2",
    "SEP: Developing and Using Models",
    "SEP: Analyzing and Interpreting Data",
  ],
  vocabulary: [
    {
      term: "Atom",
      definition:
        "The smallest unit of an element that retains its properties.",
    },
    {
      term: "Proton",
      definition: "A positively charged particle in the nucleus of an atom.",
    },
    {
      term: "Neutron",
      definition: "A neutral particle in the nucleus of an atom.",
    },
    {
      term: "Electron",
      definition: "A negatively charged particle that orbits the nucleus.",
    },
    {
      term: "Element",
      definition: "A pure substance made of only one type of atom.",
    },
    {
      term: "Compound",
      definition:
        "A substance made of two or more elements chemically combined.",
    },
    {
      term: "Mixture",
      definition:
        "A combination of substances that are physically mixed but not chemically combined.",
    },
  ],
  concepts: [
    {
      id: "s7-u7-atom-structure",
      title: "Atomic structure",
      skill:
        "Describe the parts of an atom and how they determine element properties.",
      lesson: {
        sections: [
          {
            heading: "Parts of an atom",
            body: "An **atom** consists of:\n\n- **Nucleus**: contains protons (positive) and neutrons (neutral).\n- **Electrons**: negatively charged particles orbiting the nucleus in energy levels (shells).\n\nProtons determine the element's identity; electrons determine chemical behavior. The number of protons equals the number of electrons in a neutral atom.",
          },
          {
            heading: "Atomic number and mass",
            body: "- **Atomic number**: number of protons; unique to each element.\n- **Mass number**: total protons + neutrons.\n- **Isotopes**: atoms of the same element with different numbers of neutrons (e.g., carbon-12 vs carbon-14).",
          },
        ],
        keyFormulas: [
          {
            name: "Atomic number",
            statement: "Number of protons; defines the element.",
          },
          { name: "Mass number", statement: "Protons + neutrons." },
          { name: "Neutral atom", statement: "Protons = electrons." },
        ],
        workedExample: {
          problem:
            "An atom has 6 protons, 6 neutrons and 6 electrons. What element is it?",
          solution:
            "Carbon — atomic number 6 means 6 protons, which defines carbon.",
        },
      },
      questions: [
        {
          id: "s7-u7-atom-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which particle has a positive charge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron" },
              { id: "b", text: "Neutron" },
              { id: "c", text: "Proton" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proton",
                statement: "Positively charged particle in nucleus.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Protons are positively charged; electrons are negative, neutrons neutral.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Proton.",
            commonErrors: ["Choosing (a): electrons are negative."],
          },
        },
        {
          id: "s7-u7-atom-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between atomic number and mass number.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic number",
                statement: "Number of protons; defines element.",
              },
              {
                kind: "definition",
                name: "Mass number",
                statement: "Protons + neutrons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atomic number = number of protons, unique to each element.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Mass number = protons + neutrons, varies with isotopes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Atomic number determines identity; mass number determines isotope.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Atomic number = protons (identity); mass number = protons + neutrons (isotope).",
            commonErrors: ["Confusing the two numbers."],
          },
        },
        {
          id: "s7-u7-atom-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An atom has 8 protons, 8 neutrons and 8 electrons. Another atom has 8 protons, 9 neutrons and 8 electrons. How are they related?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isotope",
                statement: "Same element, different neutrons.",
              },
            ],
            steps: [
              {
                reasoning: "Both have 8 protons — same element (oxygen).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Different neutron counts (8 vs 9) make them isotopes.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Both have 8 electrons, so same chemical properties.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "They differ in mass number: 16 vs 17.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "They are isotopes of oxygen — same protons/electrons, different neutrons.",
            commonErrors: ["Saying they are different elements."],
          },
        },
        {
          id: "s7-u7-atom-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Draw and label the structure of a carbon-12 atom.",
          parts: [
            {
              label: "a",
              prompt: "State the number of protons, neutrons and electrons.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Draw the atom showing nucleus and electron shells.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "What is the atomic number and mass number?",
              marks: 2,
            },
            { label: "d", prompt: "How would carbon-14 differ?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbon-12",
                statement: "6 protons, 6 neutrons, 6 electrons.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "6 protons, 6 neutrons, 6 electrons.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Nucleus with 6p+6n; 2 electrons in first shell, 4 in second.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Atomic number = 6; mass number = 12.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Carbon-14 has 8 neutrons instead of 6; same protons/electrons.",
                marks: 2,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) 6p,6n,6e (b) Nucleus + shells (c) Z=6, A=12 (d) 14 has 8 neutrons.",
            commonErrors: ["Drawing wrong number of electrons."],
          },
        },
      ],
    },
    {
      id: "s7-u7-elements-compounds",
      title: "Elements, compounds and mixtures",
      skill:
        "Distinguish between elements, compounds and mixtures and give examples of each.",
      lesson: {
        sections: [
          {
            heading: "Elements",
            body: "An **element** is a pure substance made of only one type of atom. Examples: oxygen (O2), gold (Au), carbon (C). Elements cannot be broken down into simpler substances by chemical means. There are 118 known elements.",
          },
          {
            heading: "Compounds",
            body: "A **compound** is a substance made of two or more elements chemically combined in fixed proportions. Examples: water (H2O), carbon dioxide (CO2), table salt (NaCl). Compounds have properties different from their component elements and can only be separated by chemical reactions.",
          },
          {
            heading: "Mixtures",
            body: "A **mixture** is a combination of substances that are physically mixed but not chemically combined. Examples: air (N2, O2, CO2), salt water, granite. Mixtures can be separated by physical means (filtration, evaporation, distillation) and their components retain their properties.",
          },
        ],
        keyFormulas: [
          {
            name: "Element",
            statement: "One type of atom; cannot be broken down chemically.",
          },
          {
            name: "Compound",
            statement: "Elements chemically combined in fixed ratios.",
          },
          {
            name: "Mixture",
            statement:
              "Substances physically mixed; separable by physical means.",
          },
        ],
        workedExample: {
          problem: "Classify: air, water, oxygen gas.",
          solution:
            "Air = mixture (gases physically mixed). Water = compound (H2O). Oxygen = element (O2).",
        },
      },
      questions: [
        {
          id: "s7-u7-ec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an element?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Salt" },
              { id: "c", text: "Oxygen" },
              { id: "d", text: "Air" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Element",
                statement: "Pure substance of one type of atom.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Oxygen (O2) is an element; water and salt are compounds; air is a mixture.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Oxygen.",
            commonErrors: ["Choosing (a): water is a compound."],
          },
        },
        {
          id: "s7-u7-ec-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a compound and a mixture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compound",
                statement: "Elements chemically combined in fixed ratios.",
              },
              {
                kind: "definition",
                name: "Mixture",
                statement: "Substances physically mixed; separable physically.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compound: elements chemically bonded, fixed proportions, new properties.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Mixture: substances physically mixed, variable proportions, retain properties.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Compounds need chemical separation; mixtures need only physical separation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Compound = chemical combination, fixed ratio, new properties. Mixture = physical mixing, separable physically.",
            commonErrors: ["Saying mixtures have fixed proportions."],
          },
        },
        {
          id: "s7-u7-ec-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Classify each as element, compound or mixture: (a) gold, (b) carbon dioxide, (c) seawater, (d) glucose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classification",
                statement:
                  "Element = one atom type; compound = chemical combination; mixture = physical mixture.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Gold = element (Au).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(b) Carbon dioxide = compound (CO2).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(c) Seawater = mixture (water + dissolved salts).",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "(d) Glucose = compound (C6H12O6).",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "(a) Element (b) Compound (c) Mixture (d) Compound.",
            commonErrors: ["Classifying seawater as a compound."],
          },
        },
        {
          id: "s7-u7-ec-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student has three samples: A (pure copper wire), B (table salt dissolved in water), C (a mixture of iron filings and sand).",
          parts: [
            { label: "a", prompt: "Classify each sample.", marks: 3 },
            {
              label: "b",
              prompt: "How could you separate B into its components?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How could you separate C into its components?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Why can't A be separated by physical means?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Separation methods",
                statement:
                  "Physical means for mixtures; chemical for compounds.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A = element, B = mixture (salt water), C = mixture (iron + sand).",
                marks: 3,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Evaporate water to recover salt, or distillation.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Use a magnet to separate iron filings from sand.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Copper is a pure element; cannot be separated physically.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) A element, B mixture, C mixture (b) Evaporation/distillation (c) Magnet (d) Pure element.",
            commonErrors: ["Saying salt water is a compound."],
          },
        },
      ],
    },
    {
      id: "s7-u7-periodic-table",
      title: "The periodic table",
      skill:
        "Use the periodic table to identify elements, their symbols, and patterns in properties.",
      lesson: {
        sections: [
          {
            heading: "Organization of the periodic table",
            body: "The **periodic table** arranges elements by atomic number (protons). Each element has a unique **symbol** (e.g., H for hydrogen, O for oxygen, Fe for iron).\n\n- **Groups** (columns): elements with similar chemical properties.\n- **Periods** (rows): elements with the same number of electron shells.\n- **Metals**: left and center of table; **Nonmetals**: right side; **Metalloids**: along the diagonal.",
          },
          {
            heading: "Reading the table",
            body: "Each element's box shows:\n\n- Atomic number (protons)\n- Chemical symbol\n- Name\n- Atomic mass\n\nExample: Oxygen has atomic number 8, symbol O, mass ~16.",
          },
        ],
        keyFormulas: [
          {
            name: "Periodic table",
            statement:
              "Elements arranged by atomic number; similar properties in groups.",
          },
          {
            name: "Chemical symbol",
            statement: "Abbreviation for element (H, O, Fe, Au).",
          },
          {
            name: "Groups vs periods",
            statement:
              "Groups = columns (similar properties); periods = rows (electron shells).",
          },
        ],
        workedExample: {
          problem: "Find the element with atomic number 6.",
          solution: "Carbon (C) — atomic number 6 means 6 protons.",
        },
      },
      questions: [
        {
          id: "s7-u7-pt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the atomic number tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Number of neutrons" },
              { id: "b", text: "Number of protons" },
              { id: "c", text: "Atomic mass" },
              { id: "d", text: "Number of electrons in outer shell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atomic number",
                statement: "Number of protons; defines element.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Atomic number = number of protons, which identifies the element.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Number of protons.",
            commonErrors: ["Confusing with mass number."],
          },
        },
        {
          id: "s7-u7-pt-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the chemical symbol for gold?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Go" },
              { id: "b", text: "Gd" },
              { id: "c", text: "Au" },
              { id: "d", text: "Ag" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chemical symbol",
                statement: "Abbreviation for element.",
              },
            ],
            steps: [
              {
                reasoning: "Gold's symbol is Au (from Latin 'aurum').",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Au.",
            commonErrors: ["Choosing (a): Go is not a valid symbol."],
          },
        },
        {
          id: "s7-u7-pt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Elements in the same group of the periodic table have similar properties. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Periodic trends",
                statement:
                  "Same group = same number of valence electrons = similar properties.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elements in a group have the same number of outer (valence) electrons.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Valence electrons determine chemical behavior.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Therefore, elements in the same group react similarly.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Example: alkali metals (Group 1) all react vigorously with water.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Same valence electrons → similar chemical properties within groups.",
            commonErrors: [
              "Saying same atomic number gives similar properties.",
            ],
          },
        },
        {
          id: "s7-u7-pt-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Using the periodic table, answer the following about element X with atomic number 12.",
          parts: [
            {
              label: "a",
              prompt: "Name the element and give its symbol.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How many protons and electrons does it have?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Is it a metal, nonmetal or metalloid?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Which group and period is it in?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Periodic table",
                statement: "Atomic number 12 = magnesium (Mg).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Magnesium, symbol Mg.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "12 protons, 12 electrons (neutral atom).",
                marks: 2,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Metal — magnesium is an alkaline earth metal.",
                marks: 2,
                markCode: "B",
              },
              {
                part: "d",
                reasoning: "Group 2, Period 3.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Magnesium, Mg (b) 12p, 12e (c) Metal (d) Group 2, Period 3.",
            commonErrors: ["Confusing atomic number with group number."],
          },
        },
      ],
    },
  ],
};
