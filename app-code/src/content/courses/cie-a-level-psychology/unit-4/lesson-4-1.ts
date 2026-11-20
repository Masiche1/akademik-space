import type { Lesson } from "../../../types.ts";

export const lesson741: Lesson = {
  id: "ciealpsy-u4-lesson-4-1",
  code: "4-1",
  title: "Issues and Debates: Nature vs Nurture",
  goal: "I CAN explain the nature-nurture debate and its application.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: issues & debates"],
  
  vocabulary: [
    { term: "Nature", definition: "Biological/genetic influences." },
    { term: "Nurture", definition: "Environmental/experiential influences." },
    { term: "Genetic transmission", definition: "Inheritance of traits." },
    { term: "Twin study", definition: "Research using identical/fraternal twins." },
    { term: "Adoption study", definition: "Research comparing adopted children." },
    { term: "Interactionism", definition: "Nature and nurture work together." },
  ],
  concepts: [
    {
      id: "ciealpsy-u4-s1-naturen",
      title: "Nature vs nurture",
      skill: "Explain the nature-nurture debate.",
      lesson: {
        sections: [
          {
            heading: "The debate",
            body: "Nature: behaviour from genes, biology. Nurture: behaviour from environment, learning. Most psychologists accept interactionism — both influence behaviour.",
          },
          {
            heading: "Evidence",
            body: "Twin studies: identical twins more similar than fraternal → genetic influence. Adoption studies: adopted children resemble biological parents → nature. But environment also matters → nurture.",
          },
          {
            heading: "Application",
            body: "Depression: biological (serotonin) vs cognitive (environment). Intelligence: genetic vs environmental. Most traits show both influences.",
          },
        ],
        keyFormulas: [
          { name: "Nature", statement: "genes, biology" },
          { name: "Nurture", statement: "environment, learning" },
          { name: "Interactionism", statement: "both together" },
        ],
        workedExample: {
          problem: "Is intelligence nature or nurture?",
          solution: "Both — genetic potential (nature) + environmental stimulation (nurture). Interaction determines outcome.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u4-nat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the nature-nurture debate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Whether behaviour comes from genes or environment"
                    },
                    {
                              "id": "b",
                              "text": "A type of experiment"
                    },
                    {
                              "id": "c",
                              "text": "A memory theory"
                    },
                    {
                              "id": "d",
                              "text": "An attachment style"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nature-nurture",
                              "statement": "Genes vs environment."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nature-nurture = genes vs environment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Genes vs environment"
},
        },
        {
          id: "ciealpsy-u4-nat-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is interactionism?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interactionism",
                              "statement": "Both together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nature and nurture work together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Most psychologists accept this view.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Nature + nurture together"
},
        },
        {
          id: "ciealpsy-u4-nat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do twin studies inform the nature-nurture debate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "Genetic evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identical twins share 100% genes, fraternal 50%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If identical more similar → genetic influence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "But shared environment also matters.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Genetic similarity comparison"
},
        },
        {
          id: "ciealpsy-u4-nat-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define nature, nurture, genetic transmission, twin study, adoption study, interactionism. (b) What is nature-nurture? (c) What is interactionism? (d) What are twin studies? (e) What are adoption studies? (f) How does nature explain behaviour? (g) How does nurture explain behaviour? (h) Evaluate whether nature or nurture is more important.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Nature-nurture",
                              "statement": "Debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Genes vs environment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Both together.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Identical vs fraternal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Biological vs adoptive parents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Genes, biology.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Environment, learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Both contribute — interactionism.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nature-nurture analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u4-nat-notes",
      title: "Nature vs nurture — notes",
      summary: "Genes vs environment. Most accept interactionism — both matter.",
      sections: [
        { heading: "Key idea", body: "Nature and nurture interact — neither alone explains behaviour." },
        { heading: "Evidence", body: "Twin/adoption studies show both influences." },
      ],
    },
  ],
};
