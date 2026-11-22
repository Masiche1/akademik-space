import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "esc10-u1-lesson-1-2",
  code: "1-2",
  title: "Biological Molecules",
  goal: "I CAN describe the structure and functions of carbohydrates, proteins and lipids, and test for them.",
  standards: ["Edexcel IGCSE Combined Science 4SC0 — Biology"],
  vocabulary: [
    {
      term: "Carbohydrate",
      definition:
        "Organic compound of carbon, hydrogen, oxygen — sugars and starches; energy source.",
    },
    {
      term: "Protein",
      definition:
        "Polymer of amino acids — enzymes, antibodies, structural materials.",
    },
    {
      term: "Lipid",
      definition: "Fats and oils — energy store, insulation, cell membranes.",
    },
    {
      term: "Enzyme",
      definition:
        "Protein catalyst speeding up reactions without being consumed.",
    },
  ],
  concepts: [
    {
      id: "esc10-u1-molecules",
      title: "Biological Molecules and Tests",
      skill:
        "Identify the three food groups, their functions and standard food tests.",
      lesson: {
        sections: [
          {
            heading: "The three food groups",
            body: "**Carbohydrates**: sugars (glucose, fructose) and polysaccharides (starch in plants, glycogen in animals) — rapid energy, storage. **Proteins**: chains of amino acids — enzymes, antibodies, muscle, haemoglobin; growth and repair. **Lipids**: fats and oils — long-term energy store, insulation, cell membranes; made of fatty acids + glycerol.\n\n**Water** is also essential — solvent for reactions, transport medium, temperature regulation. A balanced diet supplies all groups plus vitamins/minerals/fibre.",
          },
          {
            heading: "Food tests",
            body: "**Benedict's test** (reducing sugars): blue → brick-red precipitate on heating with alkali. **Iodine test** (starch): brown → blue-black. **Biuret test** (protein): blue → lilac/violet. **Ethanol emulsion test** (lipid): cloudy white emulsion.\n\nAlways run a control (known positive/negative) — colour changes can be ambiguous without comparison.",
          },
        ],
        keyFormulas: [
          {
            name: "Food tests",
            statement:
              "Benedict's=sugar, iodine=starch, Biuret=protein, ethanol=lipid.",
          },
          {
            name: "Macromolecules",
            statement:
              "Carbs=C/H/O energy; proteins=amino acids; lipids=fats/oils.",
          },
        ],
        workedExample: {
          problem:
            "A food sample turns blue-black with iodine. What does it contain?",
          solution:
            "Starch — iodine test positive; starch is a carbohydrate polysaccharide.",
        },
      },
      questions: [
        {
          id: "esc10-u1-molecules-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which reagent tests for starch?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Benedict's solution" },
              { id: "b", text: "Ethanol" },
              { id: "c", text: "Biuret reagent" },
              { id: "d", text: "Iodine solution" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Food tests",
                statement: "Iodine turns blue-black with starch.",
              },
            ],
            steps: [
              { reasoning: "Iodine = starch test.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Iodine solution",
            commonErrors: ["Confusing with Benedict's."],
          },
        },
        {
          id: "esc10-u1-molecules-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the Biuret test for protein and its positive result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Biuret test",
                statement: "Blue reagent → lilac/violet with protein.",
              },
            ],
            steps: [
              {
                reasoning: "Biuret reagent added to sample.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Positive = lilac/violet colour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Negative = stays blue.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Add Biuret reagent — protein turns solution lilac/violet.",
            commonErrors: ["Wrong colour.", "No reagent named."],
          },
        },
        {
          id: "esc10-u1-molecules-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are lipids a more efficient long-term energy store than carbohydrates?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Energy density",
                statement:
                  "Lipids yield ~twice the energy per gram of carbohydrates.",
              },
            ],
            steps: [
              {
                reasoning: "Lipids ~39 kJ/g vs carbs ~17 kJ/g.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "More energy per unit mass.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stored as insoluble droplets — no osmotic effect.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Coherent explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Lipids release ~2× energy per gram and store insolubly — efficient long-term reserves.",
            commonErrors: ["Only 'fats are bad' view.", "No energy density."],
          },
        },
        {
          id: "esc10-u1-molecules-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Three food samples tested:",
          parts: [
            {
              label: "a",
              prompt:
                "Sample A: blue → brick-red with Benedict's on heating. Identify the food group.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Sample B: brown → blue-black with iodine. Identify.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Sample C: cloudy white emulsion with ethanol. Identify and name the test.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Food test interpretation",
                statement: "Each test has a characteristic colour change.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Reducing sugar — Benedict's positive.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Starch — iodine positive.",
                marks: 2,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(c) Lipid/fat.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
              {
                reasoning: "(c) Ethanol emulsion test named.",
                marks: 2,
                markCode: "AO1",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) reducing sugar (b) starch (c) lipid — ethanol emulsion test",
            commonErrors: ["Tests mismatched.", "Groups not named."],
          },
        },
      ],
    },
    {
      id: "esc10-u1-enzymes",
      title: "Enzymes",
      skill:
        "Explain enzyme action, factors affecting rate and enzyme specificity.",
      lesson: {
        sections: [
          {
            heading: "Enzyme action",
            body: "Enzymes are **protein catalysts** — speed reactions without being consumed. Mechanism: substrate fits **active site** (lock-and-key or induced fit) → enzyme-substrate complex → products released, enzyme unchanged.\n\n**Specificity**: each enzyme acts on one substrate type — amylase breaks starch, protease breaks proteins, lipase breaks lipids. Denaturation: extreme pH/temperature changes active site shape permanently — enzyme loses function.",
          },
          {
            heading: "Factors affecting rate",
            body: "**Temperature**: rate increases to optimum (~37-40°C human enzymes) then drops sharply — denaturation. **pH**: each enzyme has optimum pH (pepsin ~2 stomach, trypsin ~8 intestine). **Substrate concentration**: rate rises until enzyme saturation — then plateaus.\n\nEnzymes are essential for life — digestion (amylase, protease, lipase), respiration, DNA replication. Without them, reactions would be too slow at body temperature.",
          },
        ],
        keyFormulas: [
          {
            name: "Enzyme mechanism",
            statement:
              "Substrate + active site → complex → products; enzyme unchanged.",
          },
          {
            name: "Rate factors",
            statement:
              "Temperature, pH, substrate concentration — optimum then decline.",
          },
        ],
        workedExample: {
          problem:
            "Why does amylase work in the mouth but denature in the stomach?",
          solution:
            "Stomach pH ~2 is far below amylase's optimum (~7) — acid denatures the protein.",
        },
      },
      questions: [
        {
          id: "esc10-u1-enzymes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A lipid" },
              { id: "b", text: "A carbohydrate" },
              { id: "c", text: "A protein catalyst" },
              { id: "d", text: "A type of cell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement:
                  "Protein catalyst speeding reactions without being consumed.",
              },
            ],
            steps: [
              {
                reasoning: "Enzyme = protein catalyst.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** A protein catalyst",
            commonErrors: ["Not a nutrient view."],
          },
        },
        {
          id: "esc10-u1-enzymes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why increasing substrate concentration eventually stops increasing the reaction rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme saturation",
                statement:
                  "All active sites occupied — rate limited by enzyme availability.",
              },
            ],
            steps: [
              {
                reasoning: "More substrate → more collisions initially.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "At high concentration, all active sites busy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Rate plateaus — enzyme-limited.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Once all enzyme active sites are occupied, extra substrate can't speed the reaction — saturation.",
            commonErrors: [
              "Linear increase assumed.",
              "No saturation concept.",
            ],
          },
        },
        {
          id: "esc10-u1-enzymes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is denaturation and why is it permanent?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denaturation",
                statement:
                  "Permanent loss of 3D shape/function from extreme pH or temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Defined: shape change at extremes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Active site shape destroyed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Substrate can't bind — function lost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Permanent = can't refold.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Denaturation = permanent active-site shape change at extreme pH/temperature — substrate can no longer bind.",
            commonErrors: [
              "Temporary inhibition view.",
              "No active-site link.",
            ],
          },
        },
        {
          id: "esc10-u1-enzymes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Amylase digests starch in the mouth (pH ~7) but not in the stomach (pH ~2).",
          parts: [
            {
              label: "a",
              prompt: "Explain why amylase works in the mouth.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what happens to amylase in the stomach.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Suggest why digestion continues in the intestine despite this.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "pH and enzymes",
                statement: "Enzymes have optimum pH; deviation denatures them.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Mouth pH ~7 near amylase optimum.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(a) Active site intact — substrate binds.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Starch digested to maltose.",
                marks: 1,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning: "(b) Stomach pH ~2 far below optimum.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning: "(b) Acid denatures amylase — active site changes.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Intestinal enzymes (trypsin etc.) have alkaline optimum.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) pH ~7 optimal (b) pH 2 denatures (c) intestinal enzymes suit alkaline pH",
            commonErrors: [
              "Same enzyme throughout assumed.",
              "Denaturation not permanent view.",
            ],
          },
        },
      ],
    },
  ],
};
