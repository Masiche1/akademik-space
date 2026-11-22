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
                              "text": "An attachment style"
                    },
                    {
                              "id": "c",
                              "text": "A type of experiment"
                    },
                    {
                              "id": "d",
                              "text": "A memory theory"
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
        {
          id: "ciealpsy-u4-nat-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Identical (monozygotic) twins share what percentage of their genes?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 100 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "Identical twins share all genes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identical twins develop from one fertilised egg, so they share 100% of their genes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "100"
},
        },
        {
          id: "ciealpsy-u4-nat-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'nurture' in the nature-nurture debate?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Genetic inheritance from parents"
                    },
                    {
                              "id": "b",
                              "text": "Environmental and experiential influences on behaviour"
                    },
                    {
                              "id": "c",
                              "text": "Brain chemistry and hormones"
                    },
                    {
                              "id": "d",
                              "text": "Instinctive, unlearned behaviour"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nurture",
                              "statement": "Environment, learning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nurture refers to environmental and experiential influences on behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Environmental and experiential influences on behaviour"
},
        },
        {
          id: "ciealpsy-u4-nat-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is genetic transmission?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "The passing of genes from parents to offspring"
                    },
                    {
                              "id": "b",
                              "text": "A type of twin study"
                    },
                    {
                              "id": "c",
                              "text": "The influence of peers on behaviour"
                    },
                    {
                              "id": "d",
                              "text": "Learning behaviour through conditioning"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Genetic transmission",
                              "statement": "Inheritance of traits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genetic transmission is the inheritance of traits through genes passed from parents to offspring.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** The passing of genes from parents to offspring"
},
        },
        {
          id: "ciealpsy-u4-nat-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do adoption studies inform the nature-nurture debate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Adoption studies",
                              "statement": "Nature vs nurture evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Adopted children share environment with adoptive parents but genes with biological parents.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "If adopted children resemble biological parents more, this supports nature/genetic influence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Resemblance to adoptive parents or shared environment effects supports nurture.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Comparing biological vs adoptive parent resemblance"
},
        },
        {
          id: "ciealpsy-u4-nat-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain interactionism and give an example of how nature and nurture interact in behaviour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Interactionism",
                              "statement": "Nature and nurture work together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Interactionism states that nature and nurture work together to influence behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Genes may provide a predisposition (e.g. for depression) that environment triggers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: genetic vulnerability plus stressful life events leads to depression.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Most psychologists accept interactionism rather than nature or nurture alone.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Both together — genes + environment interact"
},
        },
        {
          id: "ciealpsy-u4-nat-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fraternal (dizygotic) twins share approximately what percentage of their genes?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 50 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "Fraternal twins share ~50% genes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fraternal twins develop from two separate fertilised eggs and share about 50% of their genes, like ordinary siblings.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "50"
},
        },
        {
          id: "ciealpsy-u4-nat-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which finding would provide the strongest evidence for the influence of nature on a trait?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Children resemble their adoptive parents"
                    },
                    {
                              "id": "b",
                              "text": "Identical twins raised apart are more similar than fraternal twins raised apart"
                    },
                    {
                              "id": "c",
                              "text": "People in the same culture behave similarly"
                    },
                    {
                              "id": "d",
                              "text": "Behaviour changes after conditioning"
                    }
          ],
          "correctChoiceId": "b"
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
                              "reasoning": "Identical twins share 100% of genes; greater similarity than fraternal twins despite different environments indicates genetic (nature) influence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** Identical twins raised apart are more similar than fraternal twins raised apart"
},
        },
        {
          id: "ciealpsy-u4-nat-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define nature and nurture. (b) Explain how twin studies provide evidence in the nature-nurture debate. (c) Explain how adoption studies provide evidence. (d) Evaluate the claim that nurture alone can explain human behaviour.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Nature-nurture",
                              "statement": "Debate evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Nature = genes/biology; nurture = environment/learning.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Identical twins share 100% genes; greater similarity than fraternal twins suggests genetic influence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Adopted children resembling biological parents supports nature; resemblance to adoptive family supports nurture.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Nurture alone cannot explain all behaviour — genetic and biological factors clearly contribute; interactionism is more convincing.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Nature vs nurture debate analysis."
},
        },
        {
          id: "ciealpsy-u4-nat-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain why most psychologists now accept interactionism rather than arguing for nature or nurture alone.",
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
                              "reasoning": "Twin and adoption studies show both genetic and environmental influences on behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Genes and environment interact — neither alone can fully explain behaviour.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Evidence shows both influences"
},
        },
        {
          id: "ciealpsy-u4-nat-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A study finds that adopted children show more similarity to their biological parents than to their adoptive parents for intelligence. This finding best supports:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Hard determinism"
                    },
                    {
                              "id": "b",
                              "text": "Reciprocal determinism"
                    },
                    {
                              "id": "c",
                              "text": "The influence of nurture alone"
                    },
                    {
                              "id": "d",
                              "text": "The influence of nature (genetic transmission)"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Adoption studies",
                              "statement": "Biological resemblance = nature."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Resemblance to biological parents despite being raised by adoptive parents indicates genetic (nature) influence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(a)** The influence of nature (genetic transmission)"
},
        },
        {
          id: "ciealpsy-u4-nat-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately what percentage of genes do ordinary siblings (and fraternal twins) share on average?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 50 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "Siblings share ~50% genes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ordinary siblings and fraternal twins share about 50% of their genes on average.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "50"
},
        },
        {
          id: "ciealpsy-u4-nat-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define nature, nurture, genetic transmission, twin study, adoption study, interactionism. (b) What is nature-nurture? (c) What is interactionism? (d) What are twin studies? (e) What are adoption studies? (f) How does nature explain behaviour? (g) How does nurture explain behaviour? (h) Using depression as an example, explain how nature and nurture interact.",
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
                              "markCode": "M",
                              "part": "e"
                    },
                    {
                              "reasoning": "(f) Genes, biology.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "f"
                    },
                    {
                              "reasoning": "(g) Environment, learning.",
                              "marks": 1,
                              "markCode": "M",
                              "part": "g"
                    },
                    {
                              "reasoning": "(h) Biological vulnerability (e.g. serotonin) plus environmental stress triggers depression — interactionism.",
                              "marks": 1,
                              "markCode": "A",
                              "part": "h"
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
