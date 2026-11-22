import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cipub-u3-lesson-3-3",
  code: "3-3",
  title: "Enzymes and metabolism",
  goal: "I CAN explain enzyme action, factors affecting enzymes, and metabolic pathways.",
  standards: [
    "Cambridge Pre-U Biology 9769",
    "Paper 1: Enzymes and metabolism",
  ],
  vocabulary: [
    {
      term: "Enzyme",
      definition: "Biological catalyst — protein that speeds up reactions.",
    },
    {
      term: "Active site",
      definition: "Region of enzyme where substrate binds.",
    },
    {
      term: "Substrate",
      definition: "Molecule that binds to enzyme active site.",
    },
    {
      term: "Lock and key model",
      definition: "Enzyme-substrate fit like key in lock.",
    },
    {
      term: "Induced fit model",
      definition: "Enzyme changes shape to fit substrate.",
    },
    {
      term: "Denaturation",
      definition: "Enzyme loses shape/function due to extreme conditions.",
    },
    {
      term: "Metabolism",
      definition: "All chemical reactions in living organisms.",
    },
    {
      term: "Catabolism",
      definition: "Breaking down molecules — releases energy.",
    },
    {
      term: "Anabolism",
      definition: "Building up molecules — requires energy.",
    },
    {
      term: "Activation energy",
      definition: "Energy needed to start a chemical reaction.",
    },
    {
      term: "Competitive inhibitor",
      definition: "Molecule competing for active site.",
    },
    {
      term: "Non-competitive inhibitor",
      definition: "Binds elsewhere, changes enzyme shape.",
    },
  ],
  concepts: [
    {
      id: "cipub-u3-enzyme",
      title: "Enzyme action and factors",
      skill:
        "Explain enzyme structure, catalytic mechanism, and factors affecting activity.",
      lesson: {
        sections: [
          {
            heading: "Enzyme structure and action",
            body: "**Enzymes** are protein catalysts — speed up reactions without being consumed. **Active site**: specific shape complementary to substrate. **Lock and key**: rigid fit model. **Induced fit**: enzyme adjusts shape to substrate — more accurate model. **Catalysis**: enzyme lowers activation energy — reaction proceeds faster.",
          },
          {
            heading: "Factors affecting enzyme activity",
            body: "**Temperature**: increases activity up to optimum, then denatures. **pH**: optimum pH for each enzyme — extremes denature. **Substrate concentration**: increases rate until saturation (Vmax). **Enzyme concentration**: more enzyme = faster rate. **Inhibitors**: competitive (compete for active site) and non-competitive (bind elsewhere).",
          },
          {
            heading: "Denaturation and significance",
            body: "**Denaturation**: loss of 3D shape — active site destroyed — enzyme permanently inactive. Caused by extreme temperature/pH. **Significance**: enzymes enable metabolism at body temperature — digestion, respiration, synthesis. Enzyme specificity ensures precise control of reactions.",
          },
        ],
        keyFormulas: [
          {
            name: "Enzyme function",
            statement: "Protein catalyst — lowers activation energy",
          },
          {
            name: "Lock and key",
            statement: "Rigid complementary fit",
          },
          {
            name: "Induced fit",
            statement: "Enzyme adjusts to substrate",
          },
          {
            name: "Denaturation",
            statement: "Loss of 3D shape — permanent",
          },
        ],
        workedExample: {
          problem:
            "Why does enzyme activity increase then decrease with temperature?",
          solution:
            "Increases: more kinetic energy, more collisions. Decreases: denaturation at high temp destroys active site.",
        },
      },
      questions: [
        {
          id: "cipub-u3-enz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An enzyme is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A protein catalyst" },
              { id: "b", text: "A nucleic acid" },
              { id: "c", text: "A lipid" },
              { id: "d", text: "A carbohydrate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement: "Protein catalyst.",
              },
            ],
            steps: [
              {
                reasoning: "Enzyme = protein catalyst.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Protein catalyst.",
          },
        },
        {
          id: "cipub-u3-enz-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The active site is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Product" },
              { id: "b", text: "Enzyme backbone" },
              { id: "c", text: "Region where substrate binds" },
              { id: "d", text: "Whole enzyme" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active site",
                statement: "Substrate binding region.",
              },
            ],
            steps: [
              {
                reasoning: "Active site = binding region.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Substrate binding region.",
          },
        },
        {
          id: "cipub-u3-enz-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The lock and key model suggests:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Flexible fit" },
              { id: "b", text: "Rigid complementary fit" },
              { id: "c", text: "No specificity" },
              { id: "d", text: "Random binding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lock and key",
                statement: "Rigid complementary fit.",
              },
            ],
            steps: [
              { reasoning: "Lock/key = rigid fit.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Rigid complementary fit.",
          },
        },
        {
          id: "cipub-u3-enz-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The induced fit model suggests:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No change" },
              { id: "b", text: "Rigid fit" },
              { id: "c", text: "Random binding" },
              { id: "d", text: "Enzyme changes shape to fit substrate" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Induced fit",
                statement: "Shape changes to fit.",
              },
            ],
            steps: [
              {
                reasoning: "Induced fit = shape change.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shape changes to fit.",
          },
        },
        {
          id: "cipub-u3-enz-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Denaturation is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Loss of enzyme 3D shape" },
              { id: "b", text: "Substrate binding" },
              { id: "c", text: "Enzyme activation" },
              { id: "d", text: "Product formation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denaturation",
                statement: "Loss of 3D shape.",
              },
            ],
            steps: [
              {
                reasoning: "Denaturation = shape loss.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Loss of 3D shape.",
          },
        },
        {
          id: "cipub-u3-enz-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Enzymes lower:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pH" },
              { id: "b", text: "Activation energy" },
              { id: "c", text: "Pressure" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme function",
                statement: "Lowers activation energy.",
              },
            ],
            steps: [
              { reasoning: "Enzyme = lowers Ea.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Activation energy.",
          },
        },
        {
          id: "cipub-u3-enz-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Catabolism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building molecules" },
              { id: "b", text: "Breaking down molecules — releases energy" },
              { id: "c", text: "No energy change" },
              { id: "d", text: "Enzyme action" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catabolism",
                statement: "Breakdown — energy release.",
              },
            ],
            steps: [
              { reasoning: "Catabolism = breakdown.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Breakdown — energy release.",
          },
        },
        {
          id: "cipub-u3-enz-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anabolism is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Building up molecules — requires energy" },
              { id: "b", text: "No energy" },
              { id: "c", text: "Enzyme action" },
              { id: "d", text: "Breaking down" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anabolism",
                statement: "Build-up — needs energy.",
              },
            ],
            steps: [
              { reasoning: "Anabolism = build-up.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Build-up — needs energy.",
          },
        },
        {
          id: "cipub-u3-enz-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Metabolism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All chemical reactions in organism" },
              { id: "b", text: "Only photosynthesis" },
              { id: "c", text: "Only digestion" },
              { id: "d", text: "Only respiration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metabolism",
                statement: "All chemical reactions.",
              },
            ],
            steps: [
              {
                reasoning: "Metabolism = all reactions.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) All chemical reactions.",
          },
        },
        {
          id: "cipub-u3-enz-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A competitive inhibitor:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activates enzyme" },
              { id: "b", text: "Denatures enzyme" },
              { id: "c", text: "Binds elsewhere" },
              { id: "d", text: "Competes for active site" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Competitive inhibitor",
                statement: "Competes for active site.",
              },
            ],
            steps: [
              {
                reasoning: "Competitive = active site.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Competes for active site.",
          },
        },
        {
          id: "cipub-u3-enz-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A non-competitive inhibitor:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activates" },
              { id: "b", text: "Denatures" },
              { id: "c", text: "Binds elsewhere, changes enzyme shape" },
              { id: "d", text: "Competes for active site" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Non-competitive inhibitor",
                statement: "Binds elsewhere, changes shape.",
              },
            ],
            steps: [
              {
                reasoning: "Non-competitive = elsewhere.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Binds elsewhere, changes shape.",
          },
        },
        {
          id: "cipub-u3-enz-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Enzyme activity increases with temperature up to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boiling" },
              { id: "b", text: "Zero" },
              { id: "c", text: "Maximum temperature" },
              { id: "d", text: "Optimum temperature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature effect",
                statement: "Increases to optimum.",
              },
            ],
            steps: [
              { reasoning: "Increases to optimum.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Optimum temperature.",
          },
        },
        {
          id: "cipub-u3-enz-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Beyond optimum temperature, enzyme activity:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stays constant" },
              { id: "b", text: "Continues increasing" },
              { id: "c", text: "Becomes zero instantly" },
              { id: "d", text: "Decreases due to denaturation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Denaturation",
                statement: "High temp destroys shape.",
              },
            ],
            steps: [
              {
                reasoning: "Beyond optimum = denaturation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Decreases due to denaturation.",
          },
        },
        {
          id: "cipub-u3-enz-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Each enzyme has an optimum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pressure" },
              { id: "b", text: "Temperature only" },
              { id: "c", text: "Volume" },
              { id: "d", text: "pH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "pH optimum",
                statement: "Each enzyme has optimum pH.",
              },
            ],
            steps: [
              { reasoning: "Optimum pH exists.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) pH.",
          },
        },
        {
          id: "cipub-u3-enz-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "At low substrate concentration, enzyme activity is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unlimited" },
              { id: "b", text: "Limited by substrate availability" },
              { id: "c", text: "Maximum" },
              { id: "d", text: "Zero" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substrate effect",
                statement: "Low substrate = limited.",
              },
            ],
            steps: [
              {
                reasoning: "Low substrate = limited.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Limited by substrate.",
          },
        },
        {
          id: "cipub-u3-enz-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "At high substrate concentration, enzyme activity reaches:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Zero" },
              { id: "b", text: "Maximum rate (Vmax) — saturation" },
              { id: "c", text: "Minimum" },
              { id: "d", text: "Keeps increasing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saturation",
                statement: "Vmax at saturation.",
              },
            ],
            steps: [
              { reasoning: "High substrate = Vmax.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Vmax — saturation.",
          },
        },
        {
          id: "cipub-u3-enz-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Increasing enzyme concentration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Denatures" },
              { id: "b", text: "Increases reaction rate" },
              { id: "c", text: "Decreases rate" },
              { id: "d", text: "No effect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme concentration",
                statement: "More enzyme = faster.",
              },
            ],
            steps: [
              { reasoning: "More enzyme = faster.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Increases rate.",
          },
        },
        {
          id: "cipub-u3-enz-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Enzymes are specific because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are random" },
              { id: "b", text: "They are universal" },
              { id: "c", text: "Active site shape matches specific substrate" },
              { id: "d", text: "They bind everything" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme specificity",
                statement: "Shape matches substrate.",
              },
            ],
            steps: [
              {
                reasoning: "Specificity = shape match.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shape matches substrate.",
          },
        },
        {
          id: "cipub-u3-enz-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Enzymes are not consumed because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are regenerated after reaction" },
              { id: "b", text: "They are destroyed" },
              { id: "c", text: "They don't react" },
              { id: "d", text: "They are used up" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme regeneration",
                statement: "Enzyme unchanged after reaction.",
              },
            ],
            steps: [
              { reasoning: "Enzyme regenerated.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Regenerated after reaction.",
          },
        },
        {
          id: "cipub-u3-enz-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between competitive and non-competitive inhibitors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inhibitor types",
                statement: "Active site vs elsewhere.",
              },
            ],
            steps: [
              {
                reasoning: "Competitive: competes for active site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-competitive: binds elsewhere, changes shape.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Competitive = active site; non-competitive = elsewhere.",
          },
        },
        {
          id: "cipub-u3-enz-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two factors affecting enzyme activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme factors",
                statement: "Temperature, pH, substrate.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature and pH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substrate and enzyme concentration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Temperature, pH, substrate, enzyme concentration.",
          },
        },
        {
          id: "cipub-u3-enz-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why enzymes are temperature-sensitive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Temperature sensitivity",
                statement: "Denaturation at extremes.",
              },
            ],
            steps: [
              {
                reasoning: "Enzymes are proteins — heat affects structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "High temp denatures — destroys active site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Low temp reduces kinetic energy — slower reactions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Proteins denature at extremes — optimum needed.",
          },
        },
        {
          id: "cipub-u3-enz-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A reaction has low rate at low temperature. Explain why heating initially increases rate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Temperature effect",
                statement: "Kinetic energy increases.",
              },
            ],
            steps: [
              {
                reasoning: "Higher temp = more kinetic energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More enzyme-substrate collisions per second.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More collisions = more successful reactions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rate increases until denaturation occurs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Kinetic energy → more collisions → faster rate.",
          },
        },
        {
          id: "cipub-u3-enz-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pepsin works best in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral conditions" },
              { id: "b", text: "Alkaline conditions" },
              { id: "c", text: "Acidic conditions (stomach)" },
              { id: "d", text: "Any pH" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pepsin optimum",
                statement: "Acidic pH.",
              },
            ],
            steps: [{ reasoning: "Pepsin = acidic.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Acidic conditions.",
          },
        },
        {
          id: "cipub-u3-enz-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is Vmax?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vmax",
                statement: "Maximum reaction rate.",
              },
            ],
            steps: [
              {
                reasoning: "Maximum rate when enzyme saturated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Occurs at high substrate concentration.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Maximum rate at saturation.",
          },
        },
        {
          id: "cipub-u3-enz-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the lock and key model of enzyme action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Lock and key",
                statement: "Rigid complementary fit.",
              },
            ],
            steps: [
              {
                reasoning: "Enzyme active site has specific shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substrate fits like key in lock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains enzyme specificity — only specific substrates fit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Rigid complementary fit — explains specificity.",
          },
        },
        {
          id: "cipub-u3-enz-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Trypsin works best in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkaline conditions (small intestine)" },
              { id: "b", text: "Neutral" },
              { id: "c", text: "Any pH" },
              { id: "d", text: "Acidic conditions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trypsin optimum",
                statement: "Alkaline pH.",
              },
            ],
            steps: [
              { reasoning: "Trypsin = alkaline.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Alkaline conditions.",
          },
        },
        {
          id: "cipub-u3-enz-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is enzyme specificity important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzyme specificity importance",
                statement: "Precise control of reactions.",
              },
            ],
            steps: [
              {
                reasoning: "Ensures only specific reactions occur.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents unwanted reactions — maintains order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Precise control — prevents unwanted reactions.",
          },
        },
        {
          id: "cipub-u3-enz-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A competitive inhibitor reduces enzyme activity. Explain how increasing substrate can overcome this.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Competitive inhibition",
                statement: "More substrate outcompetes inhibitor.",
              },
            ],
            steps: [
              {
                reasoning: "Competitive inhibitor competes for active site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Increasing substrate increases competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substrate outcompetes inhibitor at high concentration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Vmax unchanged — only Km increased.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "More substrate outcompetes inhibitor — Vmax unchanged.",
          },
        },
        {
          id: "cipub-u3-enz-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a metabolic pathway?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Metabolic pathway",
                statement: "Series of enzyme-catalysed reactions.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence of reactions linked by enzymes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Product of one reaction is substrate for next.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Enzyme-linked reaction sequence.",
          },
        },
      ],
    },
    {
      id: "cipub-u3-metab",
      title: "Metabolism: respiration and photosynthesis",
      skill:
        "Explain aerobic respiration, anaerobic respiration and photosynthesis.",
      lesson: {
        sections: [
          {
            heading: "Aerobic respiration",
            body: "**Aerobic respiration**: glucose + oxygen → carbon dioxide + water + ATP. **Stages**: glycolysis (cytoplasm) → link reaction → Krebs cycle (mitochondria) → oxidative phosphorylation (electron transport chain). Produces ~36-38 ATP per glucose. Requires oxygen — efficient energy release.",
          },
          {
            heading: "Anaerobic respiration",
            body: "**Anaerobic respiration**: without oxygen. **Lactic acid fermentation** (animals): glucose → lactic acid + 2 ATP. **Alcoholic fermentation** (yeast/plants): glucose → ethanol + CO2 + 2 ATP. Much less efficient than aerobic but allows survival without oxygen.",
          },
          {
            heading: "Photosynthesis",
            body: "**Photosynthesis**: 6CO2 + 6H2O + light → C6H12O6 + 6O2. **Light-dependent reactions** (thylakoid): water splitting produces O2, ATP, NADPH. **Calvin cycle** (stroma): CO2 fixed into glucose using ATP and NADPH. Occurs in chloroplasts — captures solar energy.",
          },
        ],
        keyFormulas: [
          {
            name: "Aerobic respiration",
            statement: "C6H12O6 + 6O2 → 6CO2 + 6H2O + ATP",
          },
          {
            name: "Anaerobic (lactic acid)",
            statement: "Glucose → lactic acid + 2 ATP",
          },
          {
            name: "Photosynthesis",
            statement: "6CO2 + 6H2O + light → glucose + 6O2",
          },
          {
            name: "ATP yield",
            statement: "Aerobic ~36-38 ATP; anaerobic ~2 ATP",
          },
        ],
        workedExample: {
          problem: "Why is aerobic respiration more efficient than anaerobic?",
          solution:
            "Complete oxidation of glucose releases much more energy — ~36-38 ATP vs ~2 ATP.",
        },
      },
      questions: [
        {
          id: "cipub-u3-met-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Aerobic respiration requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No oxygen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "CO2 only" },
              { id: "d", text: "Light" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aerobic",
                statement: "Requires oxygen.",
              },
            ],
            steps: [
              { reasoning: "Aerobic = with oxygen.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Oxygen.",
          },
        },
        {
          id: "cipub-u3-met-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Anaerobic respiration occurs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "With oxygen" },
              { id: "b", text: "Always" },
              { id: "c", text: "With light" },
              { id: "d", text: "Without oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaerobic",
                statement: "Without oxygen.",
              },
            ],
            steps: [
              { reasoning: "Anaerobic = no oxygen.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Without oxygen.",
          },
        },
        {
          id: "cipub-u3-met-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only glucose" },
              { id: "b", text: "CO2 and water" },
              { id: "c", text: "Only oxygen" },
              { id: "d", text: "Glucose and oxygen" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis products",
                statement: "Glucose + O2.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis → glucose + O2.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Glucose and oxygen.",
          },
        },
        {
          id: "cipub-u3-met-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "ATP stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adenosine triphosphate" },
              { id: "b", text: "Adenine triphosphate" },
              { id: "c", text: "Adenosine diphosphate" },
              { id: "d", text: "ATP only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ATP",
                statement: "Adenosine triphosphate.",
              },
            ],
            steps: [
              {
                reasoning: "ATP = adenosine triphosphate.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Adenosine triphosphate.",
          },
        },
        {
          id: "cipub-u3-met-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Glycolysis occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondria" },
              { id: "b", text: "Cytoplasm" },
              { id: "c", text: "Nucleus" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Glycolysis location",
                statement: "Cytoplasm.",
              },
            ],
            steps: [
              { reasoning: "Glycolysis = cytoplasm.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Cytoplasm.",
          },
        },
        {
          id: "cipub-u3-met-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Krebs cycle occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Cytoplasm" },
              { id: "c", text: "Chloroplast" },
              { id: "d", text: "Mitochondria" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Krebs location",
                statement: "Mitochondria.",
              },
            ],
            steps: [
              { reasoning: "Krebs = mitochondria.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Mitochondria.",
          },
        },
        {
          id: "cipub-u3-met-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Lactic acid fermentation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36 ATP" },
              { id: "b", text: "Only water" },
              { id: "c", text: "Lactic acid + 2 ATP" },
              { id: "d", text: "Ethanol + CO2" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Lactic acid fermentation",
                statement: "Lactic acid + 2 ATP.",
              },
            ],
            steps: [
              { reasoning: "Lactic acid = animals.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Lactic acid + 2 ATP.",
          },
        },
        {
          id: "cipub-u3-met-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Alcoholic fermentation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "36 ATP" },
              { id: "b", text: "Ethanol + CO2 + 2 ATP" },
              { id: "c", text: "Only water" },
              { id: "d", text: "Lactic acid" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alcoholic fermentation",
                statement: "Ethanol + CO2 + 2 ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Alcoholic = yeast/plants.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ethanol + CO2 + 2 ATP.",
          },
        },
        {
          id: "cipub-u3-met-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Photosynthesis occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mitochondria" },
              { id: "b", text: "Nucleus" },
              { id: "c", text: "Chloroplasts" },
              { id: "d", text: "Ribosome" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis location",
                statement: "Chloroplasts.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis = chloroplasts.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Chloroplasts.",
          },
        },
        {
          id: "cipub-u3-met-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Aerobic respiration produces approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2 ATP" },
              { id: "b", text: "0 ATP" },
              { id: "c", text: "36-38 ATP per glucose" },
              { id: "d", text: "100 ATP" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ATP yield",
                statement: "~36-38 ATP aerobic.",
              },
            ],
            steps: [
              { reasoning: "Aerobic = ~36-38 ATP.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 36-38 ATP.",
          },
        },
        {
          id: "cipub-u3-met-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Anaerobic respiration produces approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "100 ATP" },
              { id: "b", text: "0 ATP" },
              { id: "c", text: "36 ATP" },
              { id: "d", text: "2 ATP per glucose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaerobic ATP",
                statement: "~2 ATP.",
              },
            ],
            steps: [
              { reasoning: "Anaerobic = ~2 ATP.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 2 ATP.",
          },
        },
        {
          id: "cipub-u3-met-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "The link reaction produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lactic acid" },
              { id: "b", text: "Acetyl-CoA" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Ethanol" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Link reaction",
                statement: "Produces Acetyl-CoA.",
              },
            ],
            steps: [
              { reasoning: "Link = Acetyl-CoA.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Acetyl-CoA.",
          },
        },
        {
          id: "cipub-u3-met-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The electron transport chain is part of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Oxidative phosphorylation" },
              { id: "c", text: "Krebs cycle" },
              { id: "d", text: "Glycolysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ETC",
                statement: "Oxidative phosphorylation.",
              },
            ],
            steps: [
              {
                reasoning: "ETC = oxidative phosphorylation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Oxidative phosphorylation.",
          },
        },
        {
          id: "cipub-u3-met-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Light-dependent reactions occur in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleus" },
              { id: "b", text: "Cytoplasm" },
              { id: "c", text: "Stroma" },
              { id: "d", text: "Thylakoid membranes" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Light reactions",
                statement: "Thylakoid membranes.",
              },
            ],
            steps: [
              { reasoning: "Light = thylakoid.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Thylakoid membranes.",
          },
        },
        {
          id: "cipub-u3-met-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Calvin cycle occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cytoplasm" },
              { id: "b", text: "Stroma" },
              { id: "c", text: "Thylakoid" },
              { id: "d", text: "Nucleus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Calvin cycle",
                statement: "Stroma.",
              },
            ],
            steps: [{ reasoning: "Calvin = stroma.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Stroma.",
          },
        },
        {
          id: "cipub-u3-met-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Photosynthesis requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Light, CO2, water" },
              { id: "b", text: "Oxygen only" },
              { id: "c", text: "ATP only" },
              { id: "d", text: "Glucose only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis requirements",
                statement: "Light, CO2, water.",
              },
            ],
            steps: [
              {
                reasoning: "Needs light + CO2 + water.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Light, CO2, water.",
          },
        },
        {
          id: "cipub-u3-met-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "The oxygen released in photosynthesis comes from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CO2" },
              { id: "b", text: "Splitting of water" },
              { id: "c", text: "Glucose" },
              { id: "d", text: "Chlorophyll" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Oxygen source",
                statement: "Water splitting.",
              },
            ],
            steps: [{ reasoning: "O2 from water.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Splitting of water.",
          },
        },
        {
          id: "cipub-u3-met-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "Chlorophyll absorbs mainly:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All light equally" },
              { id: "b", text: "UV light" },
              { id: "c", text: "Red and blue light" },
              { id: "d", text: "Green light" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chlorophyll absorption",
                statement: "Red and blue.",
              },
            ],
            steps: [
              { reasoning: "Chlorophyll = red/blue.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Red and blue light.",
          },
        },
        {
          id: "cipub-u3-met-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Aerobic respiration is more efficient than anaerobic because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses less glucose" },
              { id: "b", text: "Complete oxidation releases more energy" },
              { id: "c", text: "It needs no oxygen" },
              { id: "d", text: "It is faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Efficiency",
                statement: "Complete oxidation = more ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Complete oxidation = more energy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Complete oxidation.",
          },
        },
        {
          id: "cipub-u3-met-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between aerobic and anaerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aerobic vs anaerobic",
                statement: "Oxygen vs no oxygen.",
              },
            ],
            steps: [
              {
                reasoning: "Aerobic: with oxygen, ~36-38 ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Anaerobic: without oxygen, ~2 ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Aerobic = oxygen + more ATP; anaerobic = no oxygen + less ATP.",
          },
        },
        {
          id: "cipub-u3-met-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two products of aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aerobic products",
                statement: "CO2 + water + ATP.",
              },
            ],
            steps: [
              {
                reasoning: "Carbon dioxide and water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "ATP (energy).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CO2, water, ATP.",
          },
        },
        {
          id: "cipub-u3-met-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the stages of aerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aerobic stages",
                statement: "Glycolysis, link, Krebs, ETC.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Glycolysis in cytoplasm — glucose → pyruvate + 2 ATP.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link reaction + Krebs cycle in mitochondria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Electron transport chain produces most ATP.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Glycolysis → link → Krebs → ETC.",
          },
        },
        {
          id: "cipub-u3-met-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sprinter experiences muscle fatigue. Explain the role of anaerobic respiration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Anaerobic in exercise",
                statement: "Oxygen debt, lactic acid.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intense exercise demands more ATP than oxygen supplies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Anaerobic respiration provides quick ATP (~2 per glucose).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Lactic acid accumulates — causes fatigue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After exercise, oxygen repays debt — lactic acid converted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Quick ATP → lactic acid → fatigue → oxygen debt repaid.",
          },
        },
        {
          id: "cipub-u3-met-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "NADH and FADH2 are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enzymes" },
              { id: "b", text: "Products only" },
              { id: "c", text: "Electron carriers" },
              { id: "d", text: "Substrates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NADH/FADH2",
                statement: "Electron carriers.",
              },
            ],
            steps: [
              { reasoning: "NADH/FADH2 = carriers.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Electron carriers.",
          },
        },
        {
          id: "cipub-u3-met-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the role of NADH in respiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "NADH role",
                statement: "Carries electrons to ETC.",
              },
            ],
            steps: [
              {
                reasoning: "Carries electrons from glycolysis/Krebs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Donates electrons to electron transport chain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carries electrons to ETC.",
          },
        },
        {
          id: "cipub-u3-met-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how photosynthesis and respiration are linked.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Photo-respiration link",
                statement: "Products of one = reactants of other.",
              },
            ],
            steps: [
              {
                reasoning: "Photosynthesis produces glucose + O2.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Respiration uses glucose + O2 → CO2 + water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "CO2 + water from respiration used in photosynthesis.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Products of one = reactants of other — cyclic.",
          },
        },
        {
          id: "cipub-u3-met-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Calvin cycle fixes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Water" },
              { id: "c", text: "CO2 into glucose" },
              { id: "d", text: "ATP only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Calvin cycle",
                statement: "Fixes CO2.",
              },
            ],
            steps: [
              { reasoning: "Calvin fixes CO2.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) CO2 into glucose.",
          },
        },
        {
          id: "cipub-u3-met-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is ATP called 'energy currency'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ATP currency",
                statement: "Universal energy carrier.",
              },
            ],
            steps: [
              {
                reasoning: "ATP stores and transfers energy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Used by all cells for all energy-requiring processes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Universal energy carrier.",
          },
        },
        {
          id: "cipub-u3-met-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why anaerobic respiration is less efficient than aerobic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Efficiency comparison",
                statement: "Incomplete oxidation.",
              },
            ],
            steps: [
              {
                reasoning: "Anaerobic only partially oxidises glucose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only glycolysis occurs — no Krebs/ETC.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "~2 ATP vs ~36-38 ATP from aerobic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Energy remains in lactic acid/ethanol — not released.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Partial oxidation → ~2 ATP vs ~36-38 ATP.",
          },
        },
        {
          id: "cipub-u3-met-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens to pyruvate in aerobic respiration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pyruvate fate",
                statement: "→ Acetyl-CoA via link reaction.",
              },
            ],
            steps: [
              {
                reasoning: "Pyruvate converted to Acetyl-CoA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Acetyl-CoA enters Krebs cycle.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "→ Acetyl-CoA → Krebs cycle.",
          },
        },
      ],
    },
  ],
};
