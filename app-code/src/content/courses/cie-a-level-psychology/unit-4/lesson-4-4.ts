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
                              "text": "Hallucinations and delusions"
                    },
                    {
                              "id": "b",
                              "text": "Lack of motivation"
                    },
                    {
                              "id": "c",
                              "text": "Emotional flatness"
                    },
                    {
                              "id": "d",
                              "text": "Speech poverty"
                    }
          ],
          "correctChoiceId": "a"
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
