import type { Lesson } from "../../../types.ts";

export const lesson1022: Lesson = {
  id: "cils-u10-lesson-10-2",
  code: "10-2",
  title: "Stage 8 Checkpoint — Chemistry and Physics",
  goal: "I CAN apply materials, energy, forces and electricity skills at Stage 8 checkpoint standard.",
  standards: ["0893 Checkpoint Stage 8: chemistry and physics"],
  stage: 8,
  vocabulary: [
    { term: "Element", definition: "Substance made of one type of atom." },
    {
      term: "Mixture",
      definition: "Two or more substances physically combined.",
    },
    { term: "Force", definition: "Push or pull measured in newtons." },
    { term: "Circuit", definition: "Complete path for electric current." },
    { term: "Energy", definition: "Capacity to do work — measured in joules." },
  ],
  concepts: [
    {
      id: "cils-u10-s8-chem",
      title: "Stage 8 chemistry checkpoint",
      skill: "Classify substances and describe reactions.",
      lesson: {
        sections: [
          {
            heading: "Materials",
            body: "Elements = one atom type; compounds = chemically joined elements; mixtures = physically combined (can be separated). Reactions: combustion needs fuel + oxygen → CO₂ + water + energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Combustion",
            statement: "$fuel + O_2 \\to CO_2 + H_2O + energy$",
          },
          {
            name: "Separation",
            statement:
              "Mixtures separated by filtration, evaporation, distillation",
          },
        ],
        workedExample: {
          problem:
            "Salt dissolved in water — element, compound or mixture? How separated?",
          solution:
            "Mixture (salt + water not chemically joined). Evaporate water to recover salt.",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-c-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a mixture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Substances physically combined, separable" },
              { id: "b", text: "One type of atom only" },
              { id: "c", text: "Chemically joined elements" },
              { id: "d", text: "Pure substance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mixture",
                statement: "Physical combination, separable.",
              },
            ],
            steps: [
              {
                reasoning: "Mixture = physically combined, can be separated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Physically combined, separable",
          },
        },
        {
          id: "cils-u10-s8-c-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the products of complete combustion of a hydrocarbon fuel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Combustion",
                statement: "Fuel + O₂ → CO₂ + H₂O + energy.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon dioxide and water (+ energy).",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Oxygen is required as reactant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CO₂ + H₂O + energy",
          },
        },
        {
          id: "cils-u10-s8-c-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How would you separate a mixture of sand and salt?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separation",
                statement: "Dissolve soluble part, filter, evaporate.",
              },
            ],
            steps: [
              {
                reasoning: "Dissolve salt in water — sand stays undissolved.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Filter to remove sand.", marks: 1, markCode: "M" },
              {
                reasoning: "Evaporate water to recover salt.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dissolve → filter → evaporate.",
          },
        },
        {
          id: "cils-u10-s8-c-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why incomplete combustion is dangerous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combustion",
                statement: "Limited O₂ → CO instead of CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Limited oxygen → incomplete combustion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Produces carbon monoxide (CO) — toxic gas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CO binds to haemoglobin → reduces oxygen transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Can be fatal in enclosed spaces.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Limited O₂ → toxic CO → reduces blood oxygen → dangerous/fatal.",
          },
        },
      ],
    },
    {
      id: "cils-u10-s8-phys",
      title: "Stage 8 physics checkpoint",
      skill: "Apply forces, energy and electricity concepts.",
      lesson: {
        sections: [
          {
            heading: "Forces and energy",
            body: "Forces change motion (push/pull, newtons); energy transfers: kinetic (moving), potential (height), thermal, sound, light. Circuits need a complete loop; current flows from + to − conventionally.",
          },
        ],
        keyFormulas: [
          {
            name: "Energy types",
            statement: "KE $= \\frac12 mv^2$; GPE $= mgh$",
          },
          {
            name: "Circuit",
            statement: "Complete loop + power source = current flows",
          },
        ],
        workedExample: {
          problem:
            "A torch bulb doesn't light. Name two possible circuit problems.",
          solution:
            "Broken connection (incomplete circuit) or flat battery (no power source).",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-p-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is needed for electric current to flow?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complete circuit with a power source" },
              { id: "b", text: "Just a wire" },
              { id: "c", text: "A magnet" },
              { id: "d", text: "Light" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Circuit",
                statement: "Complete loop + source required.",
              },
            ],
            steps: [
              {
                reasoning: "Current needs complete path and power source.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Complete circuit + power source",
          },
        },
        {
          id: "cils-u10-s8-p-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two forms of energy and give an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Energy forms",
                statement:
                  "Kinetic, potential, thermal, sound, light, electrical.",
              },
            ],
            steps: [
              {
                reasoning: "Any two correct forms with examples.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Two valid pairs.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. kinetic (moving car), gravitational PE (book on shelf).",
          },
        },
        {
          id: "cils-u10-s8-p-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A ball rolls down a slope and up the other side. Describe the energy changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy transfer",
                statement: "GPE → KE → GPE.",
              },
            ],
            steps: [
              {
                reasoning: "At top: maximum GPE, zero KE.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rolling down: GPE → KE (speed increases).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Up other side: KE → GPE (slows, stops lower if friction).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "GPE→KE descending; KE→GPE ascending; total decreases with friction.",
          },
        },
        {
          id: "cils-u10-s8-p-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a metal spoon feels hotter than a wooden spoon in hot soup, even though both are the same temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conduction",
                statement: "Metals conduct heat faster.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both at soup temperature — difference is heat transfer rate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Metal conducts heat to your hand quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wood is a poor conductor — heat transfers slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Delocalised electrons in metal carry heat energy.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Metal conducts heat faster to your hand; wood insulates — same temperature, different heat transfer rate.",
          },
        },
      ],
    },
    {
      id: "cils-u10-s8-mx",
      title: "Stage 8 mixed checkpoint",
      skill: "Apply chemistry and physics knowledge together.",
      lesson: {
        sections: [
          {
            heading: "Mixed practice",
            body: "Checkpoint questions combine materials science, forces and motion, electricity and waves. Show formula substitutions and units.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$v = \\frac{s}{t}$" },
          { name: "Ohm's law", statement: "$V = IR$" },
        ],
        workedExample: {
          problem: "A car travels $150\\ m$ in $30\\ s$. Find its speed.",
          solution: "$v = \\frac{150}{30} = 5\\ m\\,s^{-1}$.",
        },
      },
      questions: [
        {
          id: "cils-u10-s8-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which state of matter has a fixed shape and a fixed volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid" },
              { id: "b", text: "Liquid" },
              { id: "c", text: "Gas" },
              { id: "d", text: "Plasma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "States of matter",
                statement:
                  "Solids have fixed shape and volume; liquids fixed volume only; gases neither.",
              },
            ],
            steps: [
              {
                reasoning: "Only solids keep both shape and volume fixed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Solid",
          },
        },
        {
          id: "cils-u10-s8-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist travels $150\\ m$ in $30\\ s$. Calculate her speed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Speed", statement: "$v = \\frac{s}{t}$." },
            ],
            steps: [
              { reasoning: "$v = \\frac{150}{30}$.", marks: 1, markCode: "M" },
              { reasoning: "$v = 5\\ m\\,s^{-1}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\ m\\,s^{-1}$",
          },
        },
        {
          id: "cils-u10-s8-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Balance the equation: $H_2 + O_2 \\rightarrow H_2O$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of mass",
                statement:
                  "Atoms are conserved — same number of each element on both sides.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hydrogen: 2 atoms on left, so coefficient 2 on $H_2O$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Oxygen: 2 atoms on left, so coefficient 1 on $O_2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$2H_2 + O_2 \\rightarrow 2H_2O$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2H_2 + O_2 \\rightarrow 2H_2O$",
          },
        },
        {
          id: "cils-u10-s8-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two $6\\ \\Omega$ resistors are connected in series to a $12\\ V$ battery. Find the total resistance and the current in the circuit.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Series circuit",
                statement: "Resistances add in series; $V = IR$.",
              },
            ],
            steps: [
              {
                reasoning: "Total resistance $R = 6 + 6 = 12\\ \\Omega$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange $I = \\frac{V}{R} = \\frac{12}{12}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$I = 1\\ A$.", marks: 1, markCode: "M" },
              {
                reasoning: "$R = 12\\ \\Omega$, $I = 1\\ A$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12\\ \\Omega$; $1\\ A$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u10-stage8-chem-phys-notes",
      title: "Stage 8 chemistry and physics — revision notes",
      summary: "Mixtures vs compounds, combustion, circuits, energy transfers.",
      sections: [
        {
          heading: "Chemistry",
          body: "Element/compound/mixture distinctions; combustion → CO₂ + H₂O; separation techniques; CO is toxic.",
        },
        {
          heading: "Physics",
          body: "Circuits need complete loop; energy forms transfer (GPE↔KE); metals conduct heat better than wood.",
        },
      ],
    },
  ],
};
