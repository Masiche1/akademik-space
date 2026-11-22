import type { Lesson } from "../../../types.ts";

export const lesson744: Lesson = {
  id: "ciealpsy-u4-lesson-4-4",
  code: "4-4",
  title: "Schizophrenia: Symptoms and Explanations",
  goal: "I CAN explain schizophrenia symptoms and biological/cognitive explanations.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: schizophrenia"],
  
  vocabulary: [
    { term: "Schizophrenia", definition: "Chronic mental disorder with distorted thinking." },
    { term: "Positive symptoms", definition: "Added experiences (hallucinations, delusions)." },
    { term: "Negative symptoms", definition: "Lost functions (avolition, alogia)." },
    { term: "Hallucinations", definition: "False sensory perceptions." },
    { term: "Delusions", definition: "Fixed false beliefs." },
    { term: "Dopamine hypothesis", definition: "Schizophrenia caused by dopamine imbalance." },
  ],
  concepts: [
    {
      id: "ciealpsy-u4-s4-schizo",
      title: "Schizophrenia",
      skill: "Explain schizophrenia symptoms and explanations.",
      lesson: {
        sections: [
          {
            heading: "Symptoms",
            body: "Positive: hallucinations (hearing voices), delusions (paranoia), disorganised speech/behaviour. Negative: avolition (lack of motivation), alogia (speech poverty), emotional flatness. Diagnosis: ICD/DSM criteria.",
          },
          {
            heading: "Biological explanations",
            body: "Genetic: heritability ~80%, concordance rates (MZ ~48%, DZ ~17%). Dopamine hypothesis: excess dopamine → positive symptoms; low dopamine → negative. Brain structure abnormalities.",
          },
          {
            heading: "Psychological explanations",
            body: "Family dysfunction (double bind), expressed emotion, social causation (urban stress), cognitive (attributional bias, theory of mind deficits).",
          },
        ],
        keyFormulas: [
          { name: "Positive", statement: "hallucinations, delusions" },
          { name: "Negative", statement: "avolition, flatness" },
          { name: "Dopamine", statement: "imbalance" },
        ],
        workedExample: {
          problem: "Explain schizophrenia using biological and psychological factors.",
          solution: "Biological: genetic vulnerability + dopamine dysfunction. Psychological: stress triggers in vulnerable individuals → symptoms.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u4-sch-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are positive symptoms of schizophrenia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Speech poverty"
                    },
                    {
                              "id": "b",
                              "text": "Emotional flatness"
                    },
                    {
                              "id": "c",
                              "text": "Hallucinations and delusions"
                    },
                    {
                              "id": "d",
                              "text": "Lack of motivation"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive symptoms",
                              "statement": "Added experiences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive = added: hallucinations, delusions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Hallucinations, delusions"
},
        },
        {
          id: "ciealpsy-u4-sch-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the dopamine hypothesis?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dopamine",
                              "statement": "Chemical explanation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Schizophrenia caused by dopamine imbalance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Excess → positive; low → negative symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Dopamine imbalance"
},
        },
        {
          id: "ciealpsy-u4-sch-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are negative symptoms of schizophrenia?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative",
                              "statement": "Lost functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Avolition (motivation loss), alogia (speech poverty).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Emotional flatness, social withdrawal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Harder to treat than positive symptoms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Avolition, flatness, withdrawal"
},
        },
        {
          id: "ciealpsy-u4-sch-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define schizophrenia, positive symptoms, negative symptoms, hallucinations, delusions, dopamine hypothesis. (b) What is schizophrenia? (c) What are positive symptoms? (d) What are negative symptoms? (e) What is dopamine hypothesis? (f) How is schizophrenia explained genetically? (g) How is it explained psychologically? (h) Evaluate biological vs psychological explanations.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Schizophrenia",
                              "statement": "Explanations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Chronic disorder.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Added experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Lost functions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Dopamine imbalance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Heritability ~80%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Stress, family, social factors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Diathesis-stress model best.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Schizophrenia analysis."
},
        },
        {
          id: "ciealpsy-u4-sch-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Negative symptoms of schizophrenia include:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Avolition, alogia and emotional flatness"
                    },
                    {
                              "id": "b",
                              "text": "Hallucinations and delusions"
                    },
                    {
                              "id": "c",
                              "text": "Elevated mood"
                    },
                    {
                              "id": "d",
                              "text": "Disorganised speech only"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative symptoms",
                              "statement": "Lost functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative symptoms are losses of normal function — avolition, alogia, emotional flatness and social withdrawal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Avolition, alogia and emotional flatness"
},
        },
        {
          id: "ciealpsy-u4-sch-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Schizophrenia has an estimated heritability of approximately what percentage?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 80, "tolerance": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Genetics",
                              "statement": "Heritability ~80%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Genetic factors account for roughly 80% of the variance in schizophrenia.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "80"
},
        },
        {
          id: "ciealpsy-u4-sch-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "The dopamine hypothesis proposes that schizophrenia is linked to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Low serotonin only"
                    },
                    {
                              "id": "b",
                              "text": "Excess acetylcholine"
                    },
                    {
                              "id": "c",
                              "text": "An imbalance of dopamine in the brain"
                    },
                    {
                              "id": "d",
                              "text": "The complete absence of neurotransmitters"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dopamine hypothesis",
                              "statement": "Dopamine imbalance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The dopamine hypothesis attributes schizophrenia to dysregulation of dopamine — excess linked to positive symptoms, low levels to negative symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Dopamine imbalance"
},
        },
        {
          id: "ciealpsy-u4-sch-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Monozygotic twins have approximately what percentage concordance rate for schizophrenia?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 48, "tolerance": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "MZ ~48%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If one monozygotic twin has schizophrenia, the other has about a 48% chance of also having it.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "48"
},
        },
        {
          id: "ciealpsy-u4-sch-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which finding best supports a genetic explanation of schizophrenia?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Higher concordance in monozygotic than in dizygotic twins"
                    },
                    {
                              "id": "b",
                              "text": "Symptoms appearing only in adulthood"
                    },
                    {
                              "id": "c",
                              "text": "No family link between cases"
                    },
                    {
                              "id": "d",
                              "text": "Identical rates in all cultures"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Genetic evidence",
                              "statement": "MZ > DZ concordance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Monozygotic twins share 100% of genes; their higher concordance (~48% vs ~17%) indicates genetic influence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Higher MZ than DZ concordance"
},
        },
        {
          id: "ciealpsy-u4-sch-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Dizygotic twins have approximately what percentage concordance rate for schizophrenia?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 17, "tolerance": 5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Twin studies",
                              "statement": "DZ ~17%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Dizygotic twins share about 50% of their genes, giving a lower concordance of roughly 17%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "17"
},
        },
        {
          id: "ciealpsy-u4-sch-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "According to the dopamine hypothesis, excess dopamine is most associated with:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Negative symptoms such as avolition"
                    },
                    {
                              "id": "b",
                              "text": "Social withdrawal"
                    },
                    {
                              "id": "c",
                              "text": "Positive symptoms such as hallucinations and delusions"
                    },
                    {
                              "id": "d",
                              "text": "Emotional flatness"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Dopamine hypothesis",
                              "statement": "Excess → positive symptoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The hypothesis links excess dopamine to positive symptoms (hallucinations, delusions) and low dopamine to negative symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Positive symptoms"
},
        },
        {
          id: "ciealpsy-u4-sch-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many categories of schizophrenia symptoms are described in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Symptoms",
                              "statement": "Positive and negative."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Schizophrenia symptoms are grouped into positive and negative categories.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u4-sch-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The diathesis-stress model suggests schizophrenia develops when:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Stress alone causes it in everyone"
                    },
                    {
                              "id": "b",
                              "text": "Dopamine alone determines it"
                    },
                    {
                              "id": "c",
                              "text": "A genetic vulnerability combines with environmental stress"
                    },
                    {
                              "id": "d",
                              "text": "Genes alone cause it in every case"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Diathesis-stress",
                              "statement": "Vulnerability + stress."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The diathesis-stress model proposes that genetic vulnerability (diathesis) must combine with environmental stressors to trigger the disorder.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Genetic vulnerability plus environmental stress"
},
        },
        {
          id: "ciealpsy-u4-sch-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between positive and negative symptoms of schizophrenia, giving two examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive/negative symptoms",
                              "statement": "Added vs lost."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive symptoms are added experiences, e.g. hallucinations and delusions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative symptoms are losses of normal function, e.g. avolition and emotional flatness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disorganised speech and behaviour are also positive symptoms; alogia and social withdrawal are negative symptoms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Positive = hallucinations/delusions; negative = avolition/flatness"
},
        },
        {
          id: "ciealpsy-u4-sch-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the genetic and neurochemical evidence for biological explanations of schizophrenia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Biological explanations",
                              "statement": "Genetics + dopamine."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Schizophrenia has a heritability of about 80%, and monozygotic twins show much higher concordance (~48%) than dizygotic twins (~17%).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The dopamine hypothesis links excess dopamine to positive symptoms and low dopamine to negative symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Brain structure abnormalities have also been found in people with schizophrenia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "However, biological evidence is correlational and deterministic, ignoring psychological and social triggers.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "High heritability, twin concordance, dopamine imbalance"
},
        },
        {
          id: "ciealpsy-u4-sch-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define schizophrenia, positive symptoms, negative symptoms, hallucinations, delusions and the dopamine hypothesis. (b) What is schizophrenia? (c) What are positive symptoms? (d) What are negative symptoms? (e) What is the dopamine hypothesis? (f) How is schizophrenia explained genetically? (g) How is it explained psychologically? (h) Evaluate biological versus psychological explanations of schizophrenia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Schizophrenia",
                              "statement": "Explanations and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Chronic mental disorder with distorted thinking and perception.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Added experiences such as hallucinations and delusions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Lost functions such as avolition and emotional flatness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Dopamine imbalance — excess linked to positive, low to negative symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Heritability ~80%; MZ concordance ~48% vs DZ ~17%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Family dysfunction/double bind, expressed emotion, social causation and cognitive biases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) The diathesis-stress model best integrates both — genetic vulnerability plus environmental stress triggers symptoms.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Schizophrenia symptoms and explanations analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u4-sch-notes",
      title: "Schizophrenia — notes",
      summary: "Positive=hallucinations/delusions; negative=motivation loss. Dopamine + genetic + stress.",
      sections: [
        { heading: "Key idea", body: "Diathesis-stress model: genetic vulnerability + environmental stress." },
        { heading: "Treatment", body: "Antipsychotics (dopamine), CBT, social support." },
      ],
    },
  ],
};
