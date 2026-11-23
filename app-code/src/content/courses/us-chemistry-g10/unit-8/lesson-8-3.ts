import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "chem10-u8-lesson-8-3",
  code: "8-3",
  title: "Chemical Equilibrium",
  goal: "I CAN explain dynamic equilibrium and apply Le Chatelier's principle to predict shifts.",
  standards: [
    "HS-PS1-6",
    "SEP: Constructing Explanations",
    "CCC: Cause and Effect",
  ],
  vocabulary: [
    {
      term: "Dynamic equilibrium",
      definition: "Forward and reverse rates equal; concentrations constant.",
    },
    {
      term: "Equilibrium constant",
      definition: "Ratio of products to reactants at equilibrium (K).",
    },
    {
      term: "Le Chatelier's principle",
      definition: "System shifts to counteract applied stress.",
    },
    { term: "Forward reaction", definition: "Reactants → products." },
    { term: "Reverse reaction", definition: "Products → reactants." },
    {
      term: "Stress",
      definition: "Change in concentration, pressure, or temperature.",
    },
    { term: "Shift", definition: "Movement toward new equilibrium." },
  ],
  concepts: [
    {
      id: "chem10-u8-eq-basics",
      title: "Dynamic equilibrium",
      skill: "Explain equilibrium as equal forward/reverse rates.",
      lesson: {
        sections: [
          {
            heading: "What is equilibrium?",
            body: "**Dynamic equilibrium**: forward and reverse reactions occur at equal rates → concentrations stay constant (but reactions continue).\n\n- Not static — molecules still reacting.\n- Requires closed system.\n- Equilibrium position can favor reactants or products.",
          },
          {
            heading: "Equilibrium constant",
            body: "$$K = \frac{[products]^m}{[reactants]^n}$$\n\n- K > 1: products favored.\n- K < 1: reactants favored.\n- K = 1: equal amounts.",
          },
        ],
        keyFormulas: [
          {
            name: "Dynamic equilibrium",
            statement: "Forward rate = reverse rate",
          },
          { name: "K", statement: "$[products]/[reactants]$" },
          { name: "K interpretation", statement: ">1 products, <1 reactants" },
        ],
        workedExample: {
          problem: "At equilibrium, [A]=0.2, [B]=0.8 for A⇌B. Is K > or < 1?",
          solution: "K = 0.8/0.2 = 4 > 1 → products favored.",
        },
      },
      questions: [
        {
          id: "chem10-u8-eqbasics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens at chemical equilibrium?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reactions stop" },
              { id: "b", text: "Forward and reverse rates equal" },
              { id: "c", text: "Only products exist" },
              { id: "d", text: "Only reactants exist" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic equilibrium",
                statement: "Equal forward/reverse rates.",
              },
            ],
            steps: [
              {
                reasoning: "Reactions continue but net change = 0.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Forward and reverse rates equal",
            commonErrors: ["Thinking reactions stop."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-eqbasics-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For A ⇌ B, K = 10. Which is favored at equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "K interpretation",
                statement: "K>1 → products favored.",
              },
            ],
            steps: [
              { reasoning: "K = 10 > 1.", marks: 1, markCode: "M" },
              {
                reasoning: "Products favored at equilibrium.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "More B than A present.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Products favored (K>1).",
            commonErrors: ["Reversing interpretation."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u8-eqbasics-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why equilibrium is called 'dynamic'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic",
                statement: "Reactions continue at molecular level.",
              },
            ],
            steps: [
              {
                reasoning: "Forward and reverse reactions still occurring.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Individual molecules constantly reacting.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Net concentrations constant because rates equal.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Not static — active molecular processes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reactions continue; net change = 0.",
            commonErrors: ["Thinking nothing happens."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "chem10-u8-eqbasics-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃, at equilibrium [N₂]=0.5, [H₂]=1.5, [NH₃]=3.0 M.",
          parts: [
            { label: "a", prompt: "Write K expression.", marks: 2 },
            { label: "b", prompt: "Calculate K.", marks: 4 },
            {
              label: "c",
              prompt: "Is reaction favored forward or reverse?",
              marks: 2,
            },
            { label: "d", prompt: "What does K tell you?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "K expression",
                statement: "$K = [NH_3]^2/([N_2][H_2]^3)$",
              },
            ],
            steps: [
              {
                reasoning: "$K = [NH_3]^2 / ([N_2][H_2]^3)$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$K = 3.0^2 / (0.5 \\times 1.5^3) = 9/(0.5 \\times 3.375)$.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "$= 9/1.6875 = 5.33$.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: K ≈ 5.33.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "K>1 → forward (products) favored.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "K tells equilibrium position — products favored.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) K=[NH₃]²/([N₂][H₂]³) (b) 5.33 (c) forward (d) products favored.",
            commonErrors: ["Wrong exponent placement."],
            examinerNote: "2+4+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-le-chatelier",
      title: "Le Chatelier's principle",
      skill:
        "Predict how equilibrium shifts with concentration, pressure, and temperature changes.",
      lesson: {
        sections: [
          {
            heading: "Le Chatelier's principle",
            body: "If a system at equilibrium is stressed, it shifts to **counteract** the stress.\n\n- **Concentration**: add reactant → shift right; add product → shift left.\n- **Pressure**: increase → shift toward fewer gas moles; decrease → more gas moles.\n- **Temperature**: depends on endothermic/exothermic — acts like concentration change.",
          },
          {
            heading: "Temperature special case",
            body: "Temperature changes K itself (unlike concentration/pressure which only shift position).\n\n- Exothermic reaction: heat is product → increase T shifts left.\n- Endothermic: heat is reactant → increase T shifts right.",
          },
        ],
        keyFormulas: [
          { name: "Le Chatelier", statement: "Shift to counteract stress" },
          {
            name: "Concentration",
            statement: "Add reactant → right; add product → left",
          },
          { name: "Pressure", statement: "Shift toward fewer gas moles" },
          { name: "Temperature", statement: "Changes K; exothermic ↑T → left" },
        ],
        workedExample: {
          problem: "N₂ + 3H₂ ⇌ 2NH₃ + heat. What happens if T increases?",
          solution:
            "Exothermic → heat is product → increase T shifts left (toward reactants).",
        },
      },
      questions: [
        {
          id: "chem10-u8-lechat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Le Chatelier's principle state?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equilibrium stops" },
              { id: "b", text: "System shifts to counteract stress" },
              { id: "c", text: "Concentrations never change" },
              { id: "d", text: "K never changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Le Chatelier",
                statement: "Shift to counteract stress.",
              },
            ],
            steps: [
              {
                reasoning: "System responds to minimize stress effect.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** System shifts to counteract stress",
            commonErrors: ["Thinking equilibrium breaks."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-lechat-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For A + B ⇌ C, what happens if more A is added?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Le Chatelier",
                statement: "Add reactant → shift right.",
              },
            ],
            steps: [
              { reasoning: "Adding A increases [A].", marks: 1, markCode: "M" },
              {
                reasoning: "System shifts right to consume added A.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "More C produced; new equilibrium reached.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shifts right → more product.",
            commonErrors: ["Shifting left."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u8-lechat-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For 2SO₂ + O₂ ⇌ 2SO₃ (exothermic), predict effect of: (a) adding O₂, (b) increasing pressure, (c) increasing temperature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Le Chatelier",
                statement: "Each stress has specific effect.",
              },
            ],
            steps: [
              {
                reasoning: "Adding O₂ (reactant) → shift right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increase P → shift toward fewer gas moles (3→2) → right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Increase T (exothermic) → shift left (heat is product).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "(a) right (b) right (c) left.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) right (b) right (c) left.",
            commonErrors: ["Temperature treated like concentration."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u8-lechat-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "For N₂ + 3H₂ ⇌ 2NH₃ (ΔH < 0), a plant wants max NH₃ yield.",
          parts: [
            { label: "a", prompt: "Effect of increasing pressure?", marks: 3 },
            {
              label: "b",
              prompt: "Effect of increasing temperature?",
              marks: 3,
            },
            { label: "c", prompt: "Effect of adding catalyst?", marks: 2 },
            { label: "d", prompt: "Optimal conditions?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Le Chatelier",
                statement: "P↑→right, T↑→left (exothermic), catalyst no shift.",
              },
            ],
            steps: [
              {
                reasoning: "P↑ → shift toward fewer moles (4→2) → more NH₃.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "T↑ → shift left (exothermic) → less NH₃ but faster.",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Catalyst → faster both directions, no shift.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "High P, moderate T (compromise rate vs yield), catalyst.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) more NH₃ (b) less NH₃ (c) no shift (d) high P, moderate T.",
            commonErrors: ["Thinking catalyst shifts equilibrium."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "chem10-u8-equilibrium-apps",
      title: "Equilibrium applications",
      skill: "Apply equilibrium concepts to real systems.",
      lesson: {
        sections: [
          {
            heading: "Applications",
            body: "- **Haber process**: N₂ + H₂ → NH₃ (fertilizer).\n- **Contact process**: SO₂ → SO₃ → H₂SO₄.\n- **Buffers**: resist pH change.\n- **Blood buffering**: maintains pH ~7.4.",
          },
          {
            heading: "Equilibrium in nature",
            body: "- Ocean acidification: CO₂ + H₂O ⇌ H₂CO₃ → H⁺ + HCO₃⁻.\n- Hemoglobin binding O₂.\n- Photosynthesis/respiration balance.",
          },
        ],
        keyFormulas: [
          { name: "Haber", statement: "High P, moderate T, catalyst → NH₃" },
          { name: "Buffer", statement: "Resists pH change" },
          {
            name: "Ocean acidification",
            statement: "CO₂ dissolves → acidifies ocean",
          },
        ],
        workedExample: {
          problem: "Why does the Haber process use high pressure?",
          solution: "Shifts toward fewer gas moles (4→2) → more NH₃.",
        },
      },
      questions: [
        {
          id: "chem10-u8-eqapp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the Haber process used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making sulfuric acid" },
              { id: "b", text: "Making ammonia for fertilizer" },
              { id: "c", text: "Making steel" },
              { id: "d", text: "Making plastics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Haber process",
                statement: "N₂ + H₂ → NH₃ for fertilizer.",
              },
            ],
            steps: [
              {
                reasoning: "Haber = ammonia synthesis for fertilizer.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Making ammonia for fertilizer",
            commonErrors: ["Confusing with Contact process."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "chem10-u8-eqapp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a buffer solution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Buffer",
                statement: "Resists pH change.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Contains weak acid + conjugate base (or vice versa).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Neutralizes added acid or base.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Maintains stable pH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resists pH change via weak acid/conjugate base pair.",
            commonErrors: ["Not knowing components."],
            examinerNote: "M1, R1, A1.",
          },
        },
        {
          id: "chem10-u8-eqapp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does ocean acidification illustrate equilibrium?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ocean acidification",
                statement: "CO₂ dissolves → carbonic acid.",
              },
            ],
            steps: [
              {
                reasoning: "CO₂ + H₂O ⇌ H₂CO₃ (carbonic acid).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H₂CO₃ ⇌ H⁺ + HCO₃⁻ → more H⁺.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "More CO₂ → equilibrium shifts right → more acid.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Ocean pH drops → affects marine life.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "CO₂ dissolution shifts equilibrium → acidification.",
            commonErrors: ["Not linking to equilibrium."],
            examinerNote: "M2, R1, A1.",
          },
        },
        {
          id: "chem10-u8-eqapp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The Contact process: 2SO₂ + O₂ ⇌ 2SO₃ (exothermic) → H₂SO₄.",
          parts: [
            { label: "a", prompt: "Optimal temperature? Why?", marks: 3 },
            { label: "b", prompt: "Optimal pressure? Why?", marks: 2 },
            { label: "c", prompt: "Role of catalyst?", marks: 2 },
            { label: "d", prompt: "Why not use very high T?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Contact process",
                statement: "Balance rate vs yield.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Moderate T (~450°C): exothermic → high T shifts left (less yield) but needed for rate.",
                marks: 3,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "High P: shifts toward fewer moles (3→2) → more SO₃.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning:
                  "V₂O₅ catalyst: speeds reaction without shifting equilibrium.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Very high T → equilibrium shifts left → less product despite faster rate.",
                marks: 3,
                markCode: "R",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) moderate T (b) high P (c) V₂O₅ catalyst (d) shifts left.",
            commonErrors: ["Maximizing T for rate only."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
