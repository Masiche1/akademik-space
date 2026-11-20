import type { Lesson } from "../../../types.ts";

export const lesson221b: Lesson = {
  id: "cial-b-u2-lesson-2-1",
  code: "2-1",
  title: "Carbohydrates and lipids",
  goal: "I CAN describe the structure and functions of carbohydrates and lipids.",
  standards: ["9700 Unit 2: biological molecules"],
  vocabulary: [
    {
      term: "Monosaccharide",
      definition: "Simple sugar: glucose, fructose, galactose — C₆H₁₂O₆.",
    },
    {
      term: "Disaccharide",
      definition:
        "Two monosaccharides joined by glycosidic bond, e.g. sucrose, lactose.",
    },
    {
      term: "Polysaccharide",
      definition: "Long chain of monosaccharides: starch, glycogen, cellulose.",
    },
    {
      term: "Glycosidic bond",
      definition:
        "Covalent bond joining monosaccharides; formed by condensation.",
    },
    {
      term: "Triglyceride",
      definition:
        "Lipid: glycerol + three fatty acids; energy store and insulation.",
    },
    {
      term: "Phospholipid",
      definition: "Lipid with phosphate head — membrane component.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u2-carbohydrates",
      title: "Carbohydrates",
      skill:
        "Describe monosaccharides, disaccharides and polysaccharides and their roles.",
      lesson: {
        sections: [
          {
            heading: "Monosaccharides and disaccharides",
            body: "Monosaccharides (glucose, fructose) are single sugars. Disaccharides form by condensation: sucrose = glucose + fructose; lactose = glucose + galactose; maltose = glucose + glucose. Hydrolysis breaks them back down.",
          },
          {
            heading: "Polysaccharides",
            body: "Starch (plants): amylose (unbranched helix) + amylopectin (branched) — glucose store. Glycogen (animals): highly branched glucose store. Cellulose (plants): β-glucose chains forming straight fibres — structural, indigestible.",
          },
          {
            heading: "Structure determines function",
            body: "α-glucose → starch/glycogen (helical, branched — storage). β-glucose → cellulose (linear H-bonded fibres — strength). Branching = more ends = faster hydrolysis for energy release.",
          },
        ],
        keyFormulas: [
          {
            name: "Carbohydrates",
            statement: "Condensation→glycosidic bonds; α→storage, β→structure.",
          },
        ],
        workedExample: {
          problem: "Why is glycogen more branched than amylose?",
          solution:
            "Animals need rapid glucose release — more branch ends = more sites for simultaneous hydrolysis.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-cb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What bond joins monosaccharides to form disaccharides?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycosidic bond" },
              { id: "b", text: "Peptide bond" },
              { id: "c", text: "Hydrogen bond" },
              { id: "d", text: "Ionic bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycosidic bond",
                statement:
                  "Covalent bond joining sugars; formed in condensation.",
              },
            ],
            steps: [
              {
                reasoning: "Glycosidic = sugar-sugar bond.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Glycosidic bond",
            commonErrors: ["Confusing with peptide (protein) bonds."],
          },
        },
        {
          id: "cial-b-u2-cb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are the monomers of starch and cellulose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polysaccharides",
                statement:
                  "Both are glucose polymers; α vs β isomer determines function.",
              },
            ],
            steps: [
              {
                reasoning: "Both are glucose polymers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "α vs β isomer difference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Glucose — α-glucose for starch, β-glucose for cellulose.",
            commonErrors: [
              "Saying different monomers — same glucose, different isomer.",
            ],
          },
        },
        {
          id: "cial-b-u2-cb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why cellulose is indigestible to humans but provides structural strength in plants.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cellulose",
                statement:
                  "β-glucose chains, straight fibres, H-bonded — structural, no human enzyme breaks β-linkages.",
              },
            ],
            steps: [
              {
                reasoning: "β-glucose forms straight chains.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H-bonds between chains = strong fibres.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Humans lack cellulase for β-linkages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Structure→function clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "β-glucose chains form H-bonded fibres; humans lack enzyme to digest them.",
            commonErrors: ["Confusing starch and cellulose structure."],
          },
        },
        {
          id: "cial-b-u2-cb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Carbohydrates.",
          parts: [
            { label: "a", prompt: "What joins monosaccharides?", marks: 1 },
            { label: "b", prompt: "Starch vs cellulose monomers?", marks: 2 },
            { label: "c", prompt: "Why is glycogen branched?", marks: 3 },
            {
              label: "d",
              prompt: "Explain condensation vs hydrolysis.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Carbohydrates",
                statement: "Glycosidic+glucose isomers+branching+condensation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Glycosidic bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both glucose; α vs β.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Isomer determines function.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "More ends = more hydrolysis sites.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Rapid glucose release needed.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Condensation joins (water out).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Hydrolysis breaks (water in).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Both explained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) glycosidic (b) α vs β glucose (c) rapid release (d) condensation vs hydrolysis",
          },
        },
      ],
    },
    {
      id: "cial-b-u2-lipids",
      title: "Lipids",
      skill: "Describe triglycerides and phospholipids and their functions.",
      lesson: {
        sections: [
          {
            heading: "Triglycerides",
            body: "Glycerol + three fatty acids joined by ester bonds (condensation). Saturated (no C=C) = solid at room temp; unsaturated (C=C) = liquid. Functions: energy store (9 kcal/g vs 4 for carbs), insulation, protection of organs.",
          },
          {
            heading: "Phospholipids",
            body: "Glycerol + two fatty acids + phosphate group. Hydrophilic phosphate head, hydrophobic fatty acid tails — amphipathic. Form bilayers in water: basis of cell membranes (fluid mosaic model).",
          },
          {
            heading: "Lipid test",
            body: "Emulsion test: shake with ethanol, add water — cloudy white emulsion = lipid present. Lipids don't dissolve in water (non-polar) but dissolve in ethanol (polar).",
          },
        ],
        keyFormulas: [
          {
            name: "Lipids",
            statement:
              "Triglyceride=3 FA+glycerol; phospholipid=amphipathic membrane component.",
          },
        ],
        workedExample: {
          problem: "Why are phospholipids ideal for membranes?",
          solution:
            "Amphipathic — hydrophilic heads face water, hydrophobic tails face inward — self-assembling bilayer barrier.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-lp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the components of a triglyceride?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glycerol + three fatty acids" },
              { id: "b", text: "Glucose + fatty acid" },
              { id: "c", text: "Amino acids + glycerol" },
              { id: "d", text: "Phosphate + fatty acids" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Triglyceride",
                statement: "Glycerol + three fatty acids via ester bonds.",
              },
            ],
            steps: [
              {
                reasoning: "Triglyceride = glycerol + 3 FA.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Glycerol + three fatty acids",
            commonErrors: ["Confusing with phospholipid (has phosphate)."],
          },
        },
        {
          id: "cial-b-u2-lp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are unsaturated fats liquid at room temperature while saturated fats are solid?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Saturated vs unsaturated",
                statement:
                  "C=C kinks prevent packing → liquid; straight chains pack → solid.",
              },
            ],
            steps: [
              {
                reasoning: "C=C kinks prevent tight packing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Packed straight chains = solid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Kinks from C=C prevent packing — unsaturated stays liquid.",
            commonErrors: [
              "Saying temperature causes it — it's molecular packing.",
            ],
          },
        },
        {
          id: "cial-b-u2-lp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why phospholipids form bilayers in water.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phospholipid",
                statement:
                  "Amphipathic — hydrophilic head, hydrophobic tails → bilayer in water.",
              },
            ],
            steps: [
              {
                reasoning: "Hydrophilic heads face water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hydrophobic tails face each other inside.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Energy-minimising arrangement = bilayer.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amphipathic nature → self-assembling bilayer.",
            commonErrors: ["Describing only one side of the molecule."],
          },
        },
        {
          id: "cial-b-u2-lp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Lipids.",
          parts: [
            { label: "a", prompt: "Triglyceride components?", marks: 1 },
            {
              label: "b",
              prompt: "Saturated vs unsaturated at room temp?",
              marks: 2,
            },
            { label: "c", prompt: "Why phospholipid bilayer?", marks: 3 },
            { label: "d", prompt: "Describe the emulsion test.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lipids",
                statement: "Components+saturation+bilayer+test.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Glycerol + 3 fatty acids.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Unsaturated=liquid, saturated=solid.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "C=C kinks prevent packing.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Heads face water.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tails face inward.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Amphipathic → bilayer.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Shake with ethanol.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Add water → cloudy emulsion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Positive result described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) glycerol+3FA (b) liquid vs solid (c) amphipathic (d) ethanol+water→cloudy",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u2-molecules-notes",
      title: "Biological molecules — revision notes",
      summary: "Carbohydrates, lipids and their structures and functions.",
      sections: [
        {
          heading: "Carbohydrates",
          body: "Monosaccharides → disaccharides (glycosidic bond) → polysaccharides. α-glucose = storage (starch, glycogen); β-glucose = structure (cellulose). Condensation forms bonds; hydrolysis breaks them.",
        },
        {
          heading: "Lipids",
          body: "Triglycerides = glycerol + 3 fatty acids — energy store, insulation. Phospholipids = amphipathic — membrane bilayer. Saturated=solid, unsaturated=liquid. Emulsion test for lipids.",
        },
        {
          heading: "Exam checklist",
          body: "Can you draw glycosidic/ester bonds? Explain α vs β glucose? Describe emulsion test? Explain membrane bilayer formation?",
        },
      ],
    },
  ],
};
