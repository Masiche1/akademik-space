import type { Lesson } from "../../../types.ts";

export const lesson611: Lesson = {
  id: "cial-b-u6-lesson-6-1",
  code: "6-1",
  title: "Excretion and osmoregulation",
  goal: "I CAN describe kidney structure and explain how water balance is regulated.",
  standards: ["9700 Unit 11: excretion and homeostasis"],
  vocabulary: [
    {
      term: "Excretion",
      definition: "Removal of metabolic waste products from the body.",
    },
    {
      term: "Osmoregulation",
      definition: "Control of water and salt concentration in body fluids.",
    },
    {
      term: "Nephron",
      definition: "Functional unit of the kidney filtering blood.",
    },
    {
      term: "ADH",
      definition:
        "Antidiuretic hormone controlling water reabsorption in kidney.",
    },
    {
      term: "Ultrafiltration",
      definition:
        "Pressure-driven filtration of blood in the Bowman's capsule.",
    },
    {
      term: "Urea",
      definition:
        "Nitrogenous waste product of protein metabolism, excreted in urine.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u6-kidney",
      title: "Kidney structure and ultrafiltration",
      skill: "Describe nephron structure and the ultrafiltration process.",
      lesson: {
        sections: [
          {
            heading: "Kidney overview",
            body: "Kidneys filter blood, remove urea and excess water/salts, produce urine. Each kidney contains ~1 million nephrons. Blood enters via renal artery, leaves via renal vein; urine drains to ureter→bladder.",
          },
          {
            heading: "Nephron structure",
            body: "Bowman's capsule surrounds glomerulus (capillary knot). Proximal convoluted tubule → loop of Henle → distal convoluted tubule → collecting duct. Blood supply: afferent arteriole in, efferent arteriole out.",
          },
          {
            heading: "Ultrafiltration",
            body: "High pressure in glomerulus forces small molecules (water, glucose, urea, ions) through filter into Bowman's capsule. Large molecules (proteins, blood cells) stay in blood. Filtrate then processed along tubule.",
          },
        ],
        keyFormulas: [
          {
            name: "Kidney",
            statement:
              "Glomerulus filters→Bowman's capsule; tubule reabsorbs; collecting duct→urine.",
          },
        ],
        workedExample: {
          problem: "Why is ultrafiltration not selective?",
          solution:
            "It's pressure-driven — all small molecules pass regardless of need; selectivity comes later in tubule.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-kd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the functional unit of the kidney?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nephron" },
              { id: "b", text: "Neuron" },
              { id: "c", text: "Alveolus" },
              { id: "d", text: "Villus" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nephron",
                statement: "Functional unit of kidney.",
              },
            ],
            steps: [
              { reasoning: "Nephron = kidney unit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Nephron",
            commonErrors: ["Confusing with neuron."],
          },
        },
        {
          id: "cial-b-u6-kd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What happens during ultrafiltration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ultrafiltration",
                statement:
                  "High pressure forces small molecules through filter.",
              },
            ],
            steps: [
              {
                reasoning: "High pressure in glomerulus.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small molecules pass; large stay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Pressure-driven filtration of small molecules.",
            commonErrors: ["Calling it selective."],
          },
        },
        {
          id: "cial-b-u6-kd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the structure of a nephron and its blood supply.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nephron",
                statement:
                  "Bowman's capsule→PCT→loop→DCT→collecting duct; afferent/efferent arterioles.",
              },
            ],
            steps: [
              {
                reasoning: "Bowman's capsule around glomerulus.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Tubule regions named.", marks: 1, markCode: "M" },
              {
                reasoning: "Afferent/efferent arterioles.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capsule→tubule→duct; afferent in, efferent out.",
            commonErrors: ["Missing blood supply detail."],
          },
        },
        {
          id: "cial-b-u6-kd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Kidney and ultrafiltration.",
          parts: [
            { label: "a", prompt: "Nephron = ?", marks: 1 },
            { label: "b", prompt: "What is ultrafiltration?", marks: 2 },
            {
              label: "c",
              prompt: "Nephron structure and blood supply?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Why is ultrafiltration non-selective?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kidney",
                statement: "Nephron+ultrafiltration+structure+selectivity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Functional unit.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Pressure filtration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Small molecules pass.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Bowman's capsule.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tubule regions.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Arterioles.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Pressure-driven.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "All small molecules pass.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Selectivity later.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) nephron (b) pressure filtration (c) capsule+tubule+arterioles (d) non-selective",
          },
        },
      ],
    },
    {
      id: "cial-b-u6-adh",
      title: "ADH and water balance",
      skill: "Explain how ADH regulates water reabsorption in the kidney.",
      lesson: {
        sections: [
          {
            heading: "Osmoregulation",
            body: "Body fluids must stay at ~300 mOsm/kg. Dehydration → blood osmotic pressure rises → hypothalamus detects → pituitary releases ADH → kidney reabsorbs more water → concentrated urine, less water loss.",
          },
          {
            heading: "ADH mechanism",
            body: "ADH makes collecting duct walls more permeable to water → more water reabsorbed back into blood → less urine, more concentrated. Low ADH → dilute urine, more water loss.",
          },
          {
            heading: "Negative feedback",
            body: "Water balance restored → osmotic pressure drops → ADH secretion stops → kidney reabsorbs less water. Classic negative feedback maintaining homeostasis.",
          },
        ],
        keyFormulas: [
          {
            name: "ADH",
            statement:
              "Dehydration→ADH→more water reabsorption→concentrated urine.",
          },
        ],
        workedExample: {
          problem: "What happens to urine after drinking lots of water?",
          solution:
            "Blood diluted → ADH drops → less water reabsorption → large volume of dilute urine.",
        },
      },
      questions: [
        {
          id: "cial-b-u6-ad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ADH stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antidiuretic hormone" },
              { id: "b", text: "Aldosterone hormone" },
              { id: "c", text: "Antidiuretic enzyme" },
              { id: "d", text: "Anti-diabetic hormone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH",
                statement:
                  "Antidiuretic hormone — controls water reabsorption.",
              },
            ],
            steps: [
              {
                reasoning: "ADH = antidiuretic hormone.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Antidiuretic hormone",
            commonErrors: ["Thinking it's an enzyme."],
          },
        },
        {
          id: "cial-b-u6-ad-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does ADH affect urine production?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH action",
                statement:
                  "More ADH→more water reabsorption→less concentrated urine.",
              },
            ],
            steps: [
              {
                reasoning: "ADH increases water reabsorption.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Results in concentrated urine.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High ADH→concentrated urine; low→dilute.",
            commonErrors: ["Reversing the effect."],
          },
        },
        {
          id: "cial-b-u6-ad-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the negative feedback loop for water balance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative feedback",
                statement:
                  "Osmotic pressure→ADH→water reabsorption→balance restored→ADH stops.",
              },
            ],
            steps: [
              {
                reasoning: "Osmotic pressure detected.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "ADH released/adjusted.", marks: 1, markCode: "M" },
              { reasoning: "Water balance restored.", marks: 1, markCode: "M" },
              { reasoning: "Feedback stops ADH.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Osmotic pressure→ADH→reabsorption→balance→stop.",
            commonErrors: ["Missing the feedback element."],
          },
        },
        {
          id: "cial-b-u6-ad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "ADH and osmoregulation.",
          parts: [
            { label: "a", prompt: "ADH = ?", marks: 1 },
            { label: "b", prompt: "How does ADH affect urine?", marks: 2 },
            { label: "c", prompt: "Negative feedback loop?", marks: 3 },
            {
              label: "d",
              prompt: "What happens after drinking water?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ADH",
                statement: "Hormone+urine effect+feedback+response.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Antidiuretic hormone.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "More reabsorption→concentrated.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Less→dilute.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Osmotic pressure detected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "ADH→reabsorption.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Restored→stops.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Blood diluted.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "ADH drops.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Dilute urine produced.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) antidiuretic (b) reabsorption→concentrated (c) feedback loop (d) dilute urine",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u6-excretion-notes",
      title: "Excretion and osmoregulation — revision notes",
      summary: "Kidney structure, ultrafiltration and ADH regulation.",
      sections: [
        {
          heading: "Kidney",
          body: "Nephron: Bowman's capsule→PCT→loop of Henle→DCT→collecting duct. Ultrafiltration: high pressure filters small molecules; large stay.",
        },
        {
          heading: "ADH",
          body: "Dehydration→osmotic pressure↑→ADH→more water reabsorption→concentrated urine. Negative feedback restores balance.",
        },
        {
          heading: "Exam checklist",
          body: "Can you trace nephron? Explain ultrafiltration? Describe ADH feedback? Predict urine concentration?",
        },
      ],
    },
  ],
};
