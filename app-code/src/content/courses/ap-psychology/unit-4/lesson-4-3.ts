import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "appsych-u4-lesson-4-3",
  code: "4-3",
  title: "Schizophrenia and Treatment",
  goal: "I CAN explain psychotic symptoms and treatment approaches.",
  standards: ["Unit 15"],
  vocabulary: [
    { term: "Schizophrenia", definition: "Severe disorder involving psychosis — delusions, hallucinations, disorganized thinking, negative symptoms." },
    { term: "Delusions", definition: "Fixed false beliefs (persecutory, grandiose) despite evidence." },
    { term: "Hallucinations", definition: "Perceiving things not present — auditory (voices) most common." },
    { term: "Positive symptoms", definition: "Added experiences — hallucinations, delusions, disorganized speech/behavior." },
    { term: "Negative symptoms", definition: "Lost functions — flat affect, avolition, alogia, anhedonia." },
    { term: "Antipsychotics", definition: "Medications reducing psychotic symptoms — dopamine antagonists (typical/atypical)." },
  ],
  concepts: [
    {
      id: "appsych-u4-schizophrenia-treatment",
      title: "Psychosis and treatment",
      skill: "Identify schizophrenia symptoms and treatment modalities.",
      lesson: {
        sections: [
          {
            heading: "Schizophrenia",
            body: "Positive symptoms (hallucinations, delusions, disorganization) and negative symptoms (flat affect, avolition) — dopamine dysregulation implicated; onset typically late adolescence/early adulthood.",
          },
          {
            heading: "Treatment",
            body: "Antipsychotics (dopamine blockers) manage positive symptoms; psychosocial rehabilitation (social skills, vocational) helps negative symptoms; CBT for psychosis emerging.",
          },
        ],
        keyFormulas: [
          { name: "Schizophrenia symptoms", statement: "Positive (hallucinations/delusions) + Negative (flat affect/avolition)" },
          { name: "Treatments", statement: "Antipsychotics + psychosocial rehabilitation + CBT" },
        ],
        workedExample: {
          problem: "Why do antipsychotics work for positive but not negative symptoms?",
          solution: "Antipsychotics block dopamine D2 receptors — reducing hallucinations/delusions (positive symptoms linked to dopamine excess). Negative symptoms involve different neurobiology (prefrontal hypoactivity) — less responsive to dopamine blockade.",
        },
      },
      questions: [
        {
          id: "appsych-u4-schizophrenia-treatment-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Positive symptoms of schizophrenia include ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "flat affect"
                    },
                    {
                              "id": "b",
                              "text": "hallucinations and delusions"
                    },
                    {
                              "id": "c",
                              "text": "avolition"
                    },
                    {
                              "id": "d",
                              "text": "social withdrawal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Positive symptoms",
                              "statement": "Added psychotic experiences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive symptoms are added experiences — hallucinations, delusions, disorganized speech/behavior — 'positive' means presence of abnormal experiences.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Hallucinations/delusions",
          "commonErrors": [
                    "Confusing with negative symptoms (lost functions)."
          ]
},
        },
        {
          id: "appsych-u4-schizophrenia-treatment-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Antipsychotic medications primarily work by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "increasing serotonin"
                    },
                    {
                              "id": "b",
                              "text": "blocking dopamine D2 receptors"
                    },
                    {
                              "id": "c",
                              "text": "enhancing GABA"
                    },
                    {
                              "id": "d",
                              "text": "blocking norepinephrine"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Antipsychotics",
                              "statement": "Dopamine antagonists."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Antipsychotics block dopamine D2 receptors — reducing positive symptoms (hallucinations, delusions) linked to dopamine dysregulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They're more effective for positive than negative symptoms.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Blocking dopamine D2",
          "commonErrors": [
                    "Confusing with SSRIs (serotonin)."
          ]
},
        },
        {
          id: "appsych-u4-schizophrenia-treatment-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Schizophrenia typically emerges between ages 18-25. If onset is at 22, is this within the typical range? Enter 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "In range?",
                              "answer": 1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Range check",
                              "statement": "$18 \\le 22 \\le 25$ — yes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Onset at 22 falls within the typical 18-25 range for schizophrenia emergence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1$ (yes).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1",
          "commonErrors": [
                    "Thinking onset is childhood — it's typically late adolescence/early adulthood."
          ]
},
        },
        {
          id: "appsych-u4-schizophrenia-treatment-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish positive and negative symptoms of schizophrenia, and explain why treatment differs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Schizophrenia symptoms",
                              "statement": "Added vs. lost functions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive symptoms: hallucinations (hearing voices), delusions (false beliefs), disorganized speech/behavior — 'added' abnormal experiences linked to dopamine excess.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Negative symptoms: flat affect (emotional blunting), avolition (loss of motivation), alogia (poverty of speech), anhedonia (no pleasure) — 'lost' normal functions linked to prefrontal hypoactivity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Treatment: antipsychotics (dopamine blockers) help positive symptoms; negative symptoms need psychosocial rehabilitation and may respond less to medication.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Positive = added symptoms (dopamine); Negative = lost functions (prefrontal)",
          "commonErrors": [
                    "Conflating positive/negative — they have different mechanisms and treatments."
          ]
},
        },
        {
          id: "appsych-u4-schizophrenia-treatment-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the deinstitutionalization movement. Did it improve or harm people with mental illness?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Deinstitutionalization",
                              "statement": "Closing psychiatric hospitals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Intent: close overcrowded, inhumane psychiatric hospitals; shift to community-based treatment — theoretically better care and lower cost.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Consequences: insufficient community resources; many released patients became homeless, incarcerated, or unable to manage illness; 'transinstitutionalization' to jails.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: studies show mixed results — some improved with adequate community support; others deteriorated without it; the policy failed due to inadequate funding, not concept.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Verdict: deinstitutionalization was well-intentioned but failed in implementation — community alternatives were never adequately funded; its legacy is mixed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Deinstitutionalization failed due to inadequate community funding",
          "commonErrors": [
                    "Simple success/failure — it was conceptually sound but poorly implemented."
          ]
},
        },
      ],
    },
  ],
};
