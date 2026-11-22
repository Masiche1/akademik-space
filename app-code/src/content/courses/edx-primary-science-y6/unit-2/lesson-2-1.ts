import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "edps6-u2-lesson-2-1",
  code: "2-1",
  title: "Nutrition and Digestion",
  goal: "I CAN describe nutrition, digestion and nutrient needs.",
  standards: ["Year 6 Science: Nutrition"],
  vocabulary: [
    {
      term: "Macronutrient",
      definition: "Needed in large amounts — carbs, protein, fat.",
    },
    {
      term: "Micronutrient",
      definition: "Vitamins and minerals — small amounts.",
    },
    { term: "Enzyme", definition: "Protein speeding up chemical reactions." },
    { term: "Absorption", definition: "Nutrients entering blood." },
  ],
  concepts: [
    {
      id: "edps6-u2-nutrition",
      title: "Nutrients and balanced diet",
      skill: "Describe nutrient roles and plan balanced meals.",
      lesson: {
        sections: [
          {
            heading: "Macronutrients",
            body: "**Carbohydrates** (energy — glucose, starch), **proteins** (growth/repair — amino acids), **fats** (energy store, insulation, cell membranes). **Fibre** aids digestion; **water** essential for all processes.",
          },
          {
            heading: "Micronutrients",
            body: "**Vitamin C** (immune, skin — citrus), **vitamin D** (bones — sunlight/dairy), **calcium** (bones/teeth — dairy), **iron** (blood — meat/leafy greens), **iodine** (thyroid — fish), **folate** (cell division — leafy greens).",
          },
        ],
        keyFormulas: [
          { name: "Carbohydrate", statement: "Energy" },
          { name: "Protein", statement: "Growth/repair" },
          { name: "Vitamin C", statement: "Immunity" },
        ],
        workedExample: {
          problem: "Why do we need iron?",
          solution: "For haemoglobin in red blood cells to carry oxygen.",
        },
      },
      questions: [
        {
          id: "edps6-u2-nu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nutrient is needed for growth and repair?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbohydrate" },
              { id: "b", text: "Fat" },
              { id: "c", text: "Vitamin C" },
              { id: "d", text: "Protein" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Protein",
                statement: "Growth/repair.",
              },
            ],
            steps: [{ reasoning: "Protein role.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Protein",
            commonErrors: ["Wrong nutrient."],
          },
        },
        {
          id: "edps6-u2-nu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does vitamin C do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Makes energy" },
              { id: "b", text: "Carries oxygen" },
              { id: "c", text: "Supports immune system and skin" },
              { id: "d", text: "Builds bones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vitamin C",
                statement: "Immune/skin.",
              },
            ],
            steps: [
              { reasoning: "Recall role.", marks: 1, markCode: "M" },
              { reasoning: "Answer: immune/skin.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Supports immune system and skin",
            commonErrors: ["Wrong role."],
          },
        },
        {
          id: "edps6-u2-nu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why do we need a balanced diet?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balanced diet",
                statement: "All nutrients in right amounts.",
              },
            ],
            steps: [
              { reasoning: "Variety explained.", marks: 1, markCode: "A" },
              { reasoning: "Consequence explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Different nutrients have different roles; imbalance causes deficiency or excess leading to health problems",
            commonErrors: ["Vague."],
          },
        },
        {
          id: "edps6-u2-nu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A child eats only sweets and fizzy drinks. Predict and explain health effects.",
          parts: [
            { label: "a", prompt: "Short-term", marks: 1 },
            { label: "b", prompt: "Long-term", marks: 1 },
            { label: "c", prompt: "Nutrient deficiencies", marks: 1 },
            { label: "d", prompt: "Full prediction", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poor diet",
                statement:
                  "Excess sugar + missing nutrients = health problems.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Short-term.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Long-term.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Deficiencies.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Tooth decay, energy crashes; long-term obesity, diabetes, malnutrition from missing protein/vitamins",
            commonErrors: ["No nutrient link."],
          },
        },
      ],
    },
    {
      id: "edps6-u2-digest",
      title: "Digestion in Detail",
      skill: "Describe enzymes, digestion and absorption processes.",
      lesson: {
        sections: [
          {
            heading: "Enzymes",
            body: "**Enzymes** are proteins that speed up digestion. **Amylase** (saliva/pancreas) breaks starch→sugars. **Protease** (stomach/pancreas) breaks protein→amino acids. **Lipase** (pancreas) breaks fat→fatty acids+glycerol.",
          },
          {
            heading: "Absorption",
            body: "**Villi** in small intestine absorb digested food into blood. Sugars/amino acids → blood capillaries; fatty acids → lacteals (lymph). Large intestine absorbs water; gut bacteria produce vitamins K and B12.",
          },
        ],
        keyFormulas: [
          { name: "Amylase", statement: "Starch→sugar" },
          { name: "Protease", statement: "Protein→amino acids" },
          { name: "Lipase", statement: "Fat→fatty acids" },
        ],
        workedExample: {
          problem: "What does protease do?",
          solution: "Breaks protein into amino acids for absorption.",
        },
      },
      questions: [
        {
          id: "edps6-u2-dg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does amylase break down?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starch" },
              { id: "b", text: "Fat" },
              { id: "c", text: "Vitamins" },
              { id: "d", text: "Protein" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Amylase",
                statement: "Starch→sugar.",
              },
            ],
            steps: [{ reasoning: "Amylase target.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Starch",
            commonErrors: ["Wrong substrate."],
          },
        },
        {
          id: "edps6-u2-dg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A hormone" },
              { id: "b", text: "A vitamin" },
              { id: "c", text: "A protein that speeds up reactions" },
              { id: "d", text: "A type of food" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement: "Speeds reactions.",
              },
            ],
            steps: [
              { reasoning: "Recall definition.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: protein catalyst.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A protein that speeds up reactions",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps6-u2-dg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Match each enzyme to its substrate: amylase, protease, lipase.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Enzymes",
                statement: "Starch/protein/fat.",
              },
            ],
            steps: [
              { reasoning: "Amylase correct.", marks: 1, markCode: "A" },
              { reasoning: "Protease correct.", marks: 1, markCode: "A" },
              { reasoning: "Lipase correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Amylase→starch; protease→protein; lipase→fat",
            commonErrors: ["Mismatched."],
          },
        },
        {
          id: "edps6-u2-dg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how digested food gets from intestine to body cells.",
          parts: [
            { label: "a", prompt: "Digestion", marks: 1 },
            { label: "b", prompt: "Absorption", marks: 1 },
            { label: "c", prompt: "Transport", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nutrient journey",
                statement: "Digested→absorbed→blood→cells.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Digestion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Absorption.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Transport.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Enzymes digest food → nutrients absorbed by villi → enter blood → carried to all body cells",
            commonErrors: ["Incomplete journey."],
          },
        },
      ],
    },
  ],
};
