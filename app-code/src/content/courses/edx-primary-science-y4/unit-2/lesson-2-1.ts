import type { Lesson } from "../../../types.ts";

export const lesson211: Lesson = {
  id: "edps4-u2-lesson-2-1",
  code: "2-1",
  title: "The Digestive System",
  goal: "I CAN describe digestion and absorption in detail.",
  standards: ["Year 4 Science: Digestion"],
  vocabulary: [
    {
      term: "Oesophagus",
      definition: "Muscular tube carrying food to stomach.",
    },
    { term: "Stomach acid", definition: "Kills bacteria and helps digestion." },
    {
      term: "Villi",
      definition: "Finger-like projections absorbing nutrients.",
    },
    {
      term: "Peristalsis",
      definition: "Muscle contractions moving food along.",
    },
  ],
  concepts: [
    {
      id: "edps4-u2-digest",
      title: "Digestion process",
      skill: "Describe each stage of digestion from mouth to anus.",
      lesson: {
        sections: [
          {
            heading: "The journey",
            body: "**Mouth**: teeth chew, saliva begins starch breakdown. **Oesophagus**: peristalsis pushes food down. **Stomach**: acid + churning breaks food into chyme. **Small intestine**: bile + enzymes finish digestion; villi absorb nutrients. **Large intestine**: water absorbed; waste formed. **Rectum/anus**: waste exits.",
          },
          {
            heading: "Key chemicals",
            body: "**Saliva** (amylase) breaks starch. **Stomach acid** (HCl) kills bacteria, activates pepsin. **Bile** (from liver) emulsifies fats. **Pancreatic enzymes** finish digestion.",
          },
        ],
        keyFormulas: [
          {
            name: "Digestion path",
            statement:
              "Mouth→oesophagus→stomach→small intestine→large intestine",
          },
          { name: "Peristalsis", statement: "Muscle contractions" },
          { name: "Villi", statement: "Absorption surface" },
        ],
        workedExample: {
          problem: "What does bile do?",
          solution:
            "Emulsifies fats — breaks them into smaller droplets for enzyme action.",
        },
      },
      questions: [
        {
          id: "edps4-u2-dg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is peristalsis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Chewing food" },
              { id: "b", text: "Muscle contractions moving food along" },
              { id: "c", text: "Making saliva" },
              { id: "d", text: "Absorbing nutrients" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Peristalsis",
                statement: "Muscle contractions.",
              },
            ],
            steps: [
              {
                reasoning: "Peristalsis = contractions.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Muscle contractions moving food along",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edps4-u2-dg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does stomach acid do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stores food" },
              { id: "b", text: "Kills bacteria and helps digestion" },
              { id: "c", text: "Absorbs nutrients" },
              { id: "d", text: "Makes bile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stomach acid",
                statement: "Kills bacteria + aids digestion.",
              },
            ],
            steps: [
              { reasoning: "Identify function.", marks: 1, markCode: "M" },
              { reasoning: "Answer: kills bacteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Kills bacteria and helps digestion",
            commonErrors: ["Wrong function."],
          },
        },
        {
          id: "edps4-u2-dg-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Put in order: large intestine, mouth, small intestine, stomach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digestion order",
                statement: "Mouth→stomach→small intestine→large intestine.",
              },
            ],
            steps: [
              { reasoning: "Start correct.", marks: 1, markCode: "A" },
              { reasoning: "Middle correct.", marks: 1, markCode: "A" },
              { reasoning: "End correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mouth → stomach → small intestine → large intestine",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edps4-u2-dg-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of bile in digestion.",
          parts: [
            { label: "a", prompt: "Where bile comes from", marks: 1 },
            { label: "b", prompt: "What bile does", marks: 1 },
            { label: "c", prompt: "Why needed", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bile",
                statement: "Emulsifies fats for enzyme action.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Liver identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Emulsifies explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Need explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Bile from liver emulsifies fats into small droplets, increasing surface area for lipase enzymes to digest them",
            commonErrors: ["No emulsification link."],
          },
        },
      ],
    },
    {
      id: "edps4-u2-absorb",
      title: "Absorption and the circulatory system",
      skill: "Explain how nutrients enter the blood and are transported.",
      lesson: {
        sections: [
          {
            heading: "Absorption",
            body: "Villi in the small intestine absorb digested nutrients into blood capillaries. Each villus has a lacteal (absorbs fats) and blood capillaries (absorb sugars/amino acids). Blood carries nutrients to all body cells.",
          },
          {
            heading: "Circulation",
            body: "Heart pumps blood through **arteries** (away) and **veins** (back). Blood picks up oxygen in lungs, drops nutrients in cells, collects waste for removal. **Capillaries** connect arteries and veins — where exchange happens.",
          },
        ],
        keyFormulas: [
          { name: "Villi", statement: "Absorb nutrients" },
          { name: "Arteries", statement: "Blood away from heart" },
          { name: "Veins", statement: "Blood to heart" },
        ],
        workedExample: {
          problem: "Why are villi shaped like fingers?",
          solution: "Huge surface area for maximum nutrient absorption.",
        },
      },
      questions: [
        {
          id: "edps4-u2-ab-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What absorbs nutrients in the small intestine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bile" },
              { id: "b", text: "Teeth" },
              { id: "c", text: "Stomach acid" },
              { id: "d", text: "Villi" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Villi",
                statement: "Absorb nutrients.",
              },
            ],
            steps: [{ reasoning: "Villi absorb.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Villi",
            commonErrors: ["Wrong structure."],
          },
        },
        {
          id: "edps4-u2-ab-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which vessels carry blood away from the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capillaries" },
              { id: "b", text: "Arteries" },
              { id: "c", text: "Veins" },
              { id: "d", text: "Villi" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arteries",
                statement: "Away from heart.",
              },
            ],
            steps: [
              { reasoning: "Recall direction.", marks: 1, markCode: "M" },
              { reasoning: "Answer: arteries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arteries",
            commonErrors: ["Wrong vessel."],
          },
        },
        {
          id: "edps4-u2-ab-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how nutrients get from food to body cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nutrient transport",
                statement: "Digested→absorbed→blood→cells.",
              },
            ],
            steps: [
              { reasoning: "Digestion described.", marks: 1, markCode: "A" },
              { reasoning: "Absorption described.", marks: 1, markCode: "A" },
              { reasoning: "Transport described.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Food is digested → nutrients absorbed by villi → enter blood → carried to all cells",
            commonErrors: ["Incomplete journey."],
          },
        },
        {
          id: "edps4-u2-ab-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does the heart need to pump blood continuously?",
          parts: [
            { label: "a", prompt: "Transport role", marks: 1 },
            { label: "b", prompt: "Oxygen delivery", marks: 1 },
            { label: "c", prompt: "Waste removal", marks: 1 },
            { label: "d", prompt: "Full explanation", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circulation",
                statement: "Delivers O₂/nutrients; removes waste.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Transport explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Oxygen explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Waste explained.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Coherent.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Blood delivers oxygen and nutrients to cells and removes waste — the heart pumps it continuously to keep this going",
            commonErrors: ["Single function only."],
          },
        },
      ],
    },
  ],
};
