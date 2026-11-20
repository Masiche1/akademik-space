import type { Lesson } from "../../../types.ts";

export const lesson721: Lesson = {
  id: "ciealpsy-u2-lesson-2-1",
  code: "2-1",
  title: "Approaches: Biological and Behaviourist",
  goal: "I CAN compare biological and behaviourist approaches to psychology.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
  
  vocabulary: [
    { term: "Biological approach", definition: "Psychology as product of brain, genes, neurotransmitters." },
    { term: "Behaviourist approach", definition: "Psychology as learned behaviour through conditioning." },
    { term: "Classical conditioning", definition: "Learning by association (Pavlov)." },
    { term: "Operant conditioning", definition: "Learning by consequences (Skinner)." },
    { term: "Neurotransmitter", definition: "Chemical messenger in brain." },
    { term: "Genotype", definition: "Genetic makeup." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s1-approach",
      title: "Biological & behaviourist",
      skill: "Compare major psychological approaches.",
      lesson: {
        sections: [
          {
            heading: "Biological approach",
            body: "Behaviour explained by biology: genes, brain structure, neurotransmitters. Uses brain scans, twin studies, case studies. Reductionist, deterministic. Treatments: drugs, surgery.",
          },
          {
            heading: "Behaviourist approach",
            body: "Behaviour learned through conditioning. Classical: association (Pavlov's dogs). Operant: reinforcement/punishment (Skinner's box). Behaviour therapy. Deterministic, reductionist.",
          },
          {
            heading: "Comparison",
            body: "Both reductionist and deterministic. Biological explains internal processes; behaviourist explains observable behaviour only. Both ignore cognition/feelings.",
          },
        ],
        keyFormulas: [
          { name: "Biological", statement: "genes, brain, chemistry" },
          { name: "Behaviourist", statement: "conditioning" },
          { name: "Both", statement: "deterministic, reductionist" },
        ],
        workedExample: {
          problem: "Explain depression from biological vs behaviourist perspective.",
          solution: "Biological: serotonin imbalance. Behaviourist: learned helplessness through negative reinforcement patterns.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-appro-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the biological approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Psychology as product of brain, genes, chemistry"
                    },
                    {
                              "id": "b",
                              "text": "Behaviour learned by conditioning"
                    },
                    {
                              "id": "c",
                              "text": "Focus on thoughts"
                    },
                    {
                              "id": "d",
                              "text": "Focus on free will"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Biological",
                              "statement": "Brain/genes/chemistry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological = biology explains behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Brain/genes/chemistry"
},
        },
        {
          id: "ciealpsy-u2-appro-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is operant conditioning?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Operant",
                              "statement": "Consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Learning by consequences (Skinner).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reinforcement increases, punishment decreases behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Learning by consequences"
},
        },
        {
          id: "ciealpsy-u2-appro-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare biological and behaviourist approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Bio vs Behaviourist",
                              "statement": "Nature vs nurture."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Biological: internal processes (genes, brain).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Behaviourist: external learning (conditioning).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both reductionist, deterministic.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Internal vs external explanation"
},
        },
        {
          id: "ciealpsy-u2-appro-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define biological approach, behaviourist approach, classical conditioning, operant conditioning, neurotransmitter, genotype. (b) What is biological? (c) What is behaviourist? (d) What is classical conditioning? (e) What is operant conditioning? (f) What methods does biological use? (g) What are strengths/weaknesses of each? (h) Compare how each explains depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Approaches",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Brain/genes/chemistry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Conditioning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Association learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Consequence learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Scans, twins, cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Both reductionist/deterministic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Serotonin vs learned helplessness.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Approach comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-appro-notes",
      title: "Bio & behaviourist — notes",
      summary: "Biological=internal processes; behaviourist=learned conditioning. Both reductionist.",
      sections: [
        { heading: "Key idea", body: "Two contrasting explanations: nature (biology) vs nurture (learning)." },
        { heading: "Shared limits", body: "Both ignore cognition, free will, subjective experience." },
      ],
    },
  ],
};
