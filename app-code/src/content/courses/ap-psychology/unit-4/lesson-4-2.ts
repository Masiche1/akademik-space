import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "appsych-u4-lesson-4-2",
  code: "4-2",
  title: "Mood and Personality Disorders",
  goal: "I CAN explain depression, bipolar, and personality disorders.",
  standards: ["Unit 15"],
  vocabulary: [
    { term: "Major depressive disorder", definition: "Persistent sadness, loss of interest, sleep/appetite changes lasting 2+ weeks." },
    { term: "Bipolar disorder", definition: "Alternating depressive and manic episodes — extreme mood swings." },
    { term: "Mania", definition: "Elevated mood, decreased need for sleep, grandiosity, risky behavior — bipolar's high phase." },
    { term: "Antisocial personality disorder", definition: "Disregard for others' rights, lack of empathy, manipulative behavior." },
    { term: "Borderline personality disorder", definition: "Unstable relationships, self-image, emotions; fear of abandonment." },
    { term: "Dialectical behavior therapy", definition: "DBT — skills training for emotion regulation, distress tolerance, interpersonal effectiveness." },
  ],
  concepts: [
    {
      id: "appsych-u4-mood-personality-disorders",
      title: "Mood and personality disorders",
      skill: "Identify symptoms and treatments of mood/personality disorders.",
      lesson: {
        sections: [
          {
            heading: "Mood disorders",
            body: "Depression (persistent sadness, anhedonia) and bipolar (mania + depression) — both involve neurotransmitter dysregulation; treatable with medication and therapy.",
          },
          {
            heading: "Personality disorders",
            body: "ASPD (disregard for others), BPD (emotional instability, fear of abandonment) — long-standing patterns; DBT effective for BPD.",
          },
        ],
        keyFormulas: [
          { name: "Mood disorders", statement: "Depression / Bipolar (mania + depression)" },
          { name: "Personality disorders", statement: "ASPD / BPD / Narcissistic / Avoidant / OCPD" },
        ],
        workedExample: {
          problem: "How do depression and bipolar differ?",
          solution: "Depression: persistent low mood without mania. Bipolar: alternating depressive episodes AND manic episodes (elevated mood, decreased sleep, grandiosity) — requires mood stabilizers not just antidepressants.",
        },
      },
      questions: [
        {
          id: "appsych-u4-mood-personality-disorders-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bipolar disorder differs from depression because it includes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only sadness"
                    },
                    {
                              "id": "b",
                              "text": "manic episodes alternating with depression"
                    },
                    {
                              "id": "c",
                              "text": "only anxiety"
                    },
                    {
                              "id": "d",
                              "text": "only anger"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Bipolar vs. depression",
                              "statement": "Mania distinguishes bipolar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bipolar disorder includes manic episodes (elevated mood, decreased sleep, grandiosity, risky behavior) alternating with depressive episodes — depression alone lacks mania.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Manic episodes",
          "commonErrors": [
                    "Thinking bipolar is just severe depression."
          ]
},
        },
        {
          id: "appsych-u4-mood-personality-disorders-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Antisocial personality disorder is characterized by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "excessive anxiety"
                    },
                    {
                              "id": "b",
                              "text": "disregard for others' rights and lack of empathy"
                    },
                    {
                              "id": "c",
                              "text": "emotional instability"
                    },
                    {
                              "id": "d",
                              "text": "fear of abandonment"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "ASPD",
                              "statement": "Disregard for others + no empathy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "ASPD involves persistent disregard for others' rights, lack of empathy, manipulative/deceitful behavior, and no remorse — distinct from anxiety or mood disorders.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's not 'anti-social' as in shy — it means against society.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Disregard for others' rights",
          "commonErrors": [
                    "Confusing with shyness or social anxiety."
          ]
},
        },
        {
          id: "appsych-u4-mood-personality-disorders-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "DBT (Dialectical Behavior Therapy) was originally developed for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "depression"
                    },
                    {
                              "id": "b",
                              "text": "borderline personality disorder"
                    },
                    {
                              "id": "c",
                              "text": "schizophrenia"
                    },
                    {
                              "id": "d",
                              "text": "anxiety disorders"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "DBT",
                              "statement": "Developed for BPD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "DBT was developed by Marsha Linehan specifically for borderline personality disorder — teaching emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's now used for other disorders too.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Borderline personality disorder",
          "commonErrors": [
                    "Thinking it's for depression — it was designed for BPD."
          ]
},
        },
        {
          id: "appsych-u4-mood-personality-disorders-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the symptoms of major depressive disorder and bipolar disorder. Why is accurate diagnosis critical?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Mood disorders",
                              "statement": "Depression vs. bipolar distinction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depression: persistent sadness, anhedonia (loss of pleasure), sleep/appetite changes, fatigue, hopelessness lasting 2+ weeks — no manic episodes.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Bipolar: depressive episodes PLUS manic episodes — elevated/irritable mood, decreased need for sleep, grandiosity, racing thoughts, risky behavior; may have hypomania (milder mania).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Critical: antidepressants alone can trigger mania in bipolar patients — misdiagnosis has serious treatment consequences; mood stabilizers needed for bipolar.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Depression lacks mania; bipolar includes it — diagnosis affects treatment",
          "commonErrors": [
                    "Conflating them — treatment differs significantly."
          ]
},
        },
        {
          id: "appsych-u4-mood-personality-disorders-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that personality disorders are 'untreatable.' What evidence challenges this?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Personality disorder treatability",
                              "statement": "Pessimism vs. evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pessimistic view: personality disorders involve deep-seated patterns formed early; historically considered untreatable; high dropout rates and poor prognosis.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Evidence against: DBT shows significant improvement for BPD; schema therapy effective for multiple PDs; some patients remit over time; medications help symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nuance: 'treatable' means manageable not cured — symptoms can improve substantially with therapy; prognosis varies by disorder (ASPD harder than BPD).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: personality disorders are treatable — not easily, not always, but meaningfully — the 'untreatable' label is outdated.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Personality disorders are treatable with appropriate therapy",
          "commonErrors": [
                    "Accepting 'untreatable' myth — evidence shows improvement is possible."
          ]
},
        },
      ],
    },
  ],
};
