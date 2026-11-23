import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "edxbtechsc-u6-lesson-6-2",
  code: "6-2",
  title: "Common Mental Health Conditions",
  goal: "I CAN describe the symptoms, causes and care needs of anxiety, depression, psychosis and eating disorders.",
  standards: ["BTEC L3 National Health and Social Care — Unit 6: Mental Health and Wellbeing"],
  
  vocabulary: [
    { term: "Anxiety disorder", definition: "Excessive, persistent worry and fear that interferes with daily functioning; includes generalised anxiety, panic disorder, phobias." },
    { term: "Depression", definition: "Persistent low mood, loss of interest/pleasure (anhedonia) and other symptoms lasting at least two weeks." },
    { term: "Anhedonia", definition: "Loss of interest or pleasure in activities that were previously enjoyable." },
    { term: "Psychosis", definition: "Loss of contact with reality involving hallucinations, delusions or disordered thinking; seen in schizophrenia and bipolar disorder." },
    { term: "Hallucination", definition: "Perceiving something (e.g. hearing voices) that is not present." },
    { term: "Delusion", definition: "Fixed false belief not shared by others and resistant to reasoning, e.g. believing one is being watched." },
  ],
  concepts: [
    {
      id: "edxbtechsc-u6-l2-mood",
      title: "Anxiety and depression",
      skill: "Describe the symptoms, risk factors and care approaches for common mood and anxiety disorders.",
      lesson: {
        sections: [
          {
            heading: "Anxiety disorders",
            body: "**Anxiety** is a normal emotion; an **anxiety disorder** involves excessive, persistent worry disproportionate to the situation. Types: **generalised anxiety disorder** (constant worrying), **panic disorder** (recurrent panic attacks — sudden intense fear with palpitations, breathlessness, dizziness), **phobias** (irrational fear of specific things), **OCD** (intrusive thoughts + compulsive rituals), **PTSD** (after trauma).\n\nSymptoms: restlessness, fatigue, irritability, muscle tension, sleep disturbance, concentration problems. Physical effects via adrenaline: raised heart rate, sweating, nausea.",
          },
          {
            heading: "Depression",
            body: "**Depression** = persistent low mood or **anhedonia** plus other symptoms for ≥2 weeks. Symptoms: low mood most of the day, loss of interest, changes in sleep/appetite, fatigue, poor concentration, feelings of worthlessness or guilt, possible suicidal thoughts.\n\nRisk factors: genetics, life events (loss, unemployment), chronic illness, isolation, substance use, hormonal changes. Care: talking therapies (CBT, counselling), medication (antidepressants) for moderate-severe cases, lifestyle support, crisis plans. **Always take suicidal ideation seriously** — follow local safeguarding and crisis procedures.",
          },
        ],
        keyFormulas: [
          { name: "Depression criteria", statement: "low mood/anhedonia + symptoms for ≥2 weeks" },
          { name: "Anxiety types", statement: "generalised, panic, phobias, OCD, PTSD" },
          { name: "Panic attack", statement: "sudden intense fear: palpitations, breathlessness, dizziness" },
        ],
        workedExample: {
          problem: "A client says they feel 'constantly worried, can't sleep and have lost interest in hobbies'. Which condition is most likely and what are two key care steps?",
          solution: "Symptoms suggest a common mental health problem — possibly anxiety and/or depression. Care steps: listen non-judgementally and assess impact (sleep, eating, functioning, suicidal thoughts); signpost to GP for assessment; support with relaxation, routine and social connection; follow safeguarding procedures if risk is identified.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-mood-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the two core symptoms required for a diagnosis of depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depression criteria",
                              "statement": "Low mood or anhedonia + symptoms ≥2 weeks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Persistent low mood.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Loss of interest/pleasure (anhedonia) — either can be core.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Persistent low mood and/or anhedonia, with other symptoms for at least two weeks."
},
        },
        {
          id: "edxbtechsc-u6-mood-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List four symptoms of anxiety.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anxiety symptoms",
                              "statement": "Worry, restlessness, tension, sleep and concentration problems."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Any four, e.g. excessive worry, restlessness, muscle tension, poor sleep.",
                              "marks": 3,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Any four valid anxiety symptoms."
},
        },
        {
          id: "edxbtechsc-u6-mood-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between normal anxiety and an anxiety disorder.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Anxiety vs disorder",
                              "statement": "Disorder = excessive, persistent, impairing worry."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Normal anxiety is proportional to threat and temporary.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disorder involves excessive, persistent worry out of proportion to situation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Disorder interferes with daily functioning.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Anxiety disorder = disproportionate, persistent worry that impairs daily life."
},
        },
        {
          id: "edxbtechsc-u6-mood-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a panic attack and explain why a person experiencing one may believe they are having a heart attack.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Panic attack",
                              "statement": "Sudden intense fear with physical symptoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Panic attack described: sudden intense fear, palpitations, breathlessness, dizziness, chest pain.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Adrenaline causes real physical symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symptoms mimic cardiac events → fear of heart attack.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Panic attacks cause real physical symptoms (palpitations, chest pain) that mimic heart problems."
},
        },
        {
          id: "edxbtechsc-u6-mood-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how depression affects daily functioning and describe three care approaches for a client with moderate depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Depression impact",
                              "statement": "Affects mood, energy, sleep, concentration, motivation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effects: low mood, fatigue, poor concentration, withdrawn behaviour, disrupted sleep/appetite.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Approach 1, e.g. talking therapy (CBT/counselling).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Approach 2, e.g. medication for moderate-severe cases.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Approach 3, e.g. lifestyle support, routine, social connection, crisis planning.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Depression impairs energy/mood/function; treat with therapy, medication and lifestyle support."
},
        },
        {
          id: "edxbtechsc-u6-mood-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) what anxiety disorders include;\n(b) four symptoms of anxiety;\n(c) the core features of depression;\n(d) four symptoms of depression;\n(e) two differences between anxiety and depression;\n(f) three ways depression affects daily life;\n(g) how care workers should respond if a client mentions suicidal thoughts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mood disorders",
                              "statement": "Anxiety and depression share and differ in features."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Types: GAD, panic, phobias, OCD, PTSD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Four anxiety symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Core features: low mood/anhedonia ≥2 weeks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Four depression symptoms, e.g. fatigue, sleep change, worthlessness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two differences, e.g. anxiety = worry/fear; depression = low mood/loss of pleasure.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "(f) Three daily-life effects, e.g. withdrawal, poor concentration, disrupted routines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Take seriously, stay with client, follow crisis/safeguarding procedures, contact GP/crisis team.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete comparison of anxiety and depression plus crisis response."
},
        },
      ],
    },
    {
      id: "edxbtechsc-u6-l2-severe",
      title: "Psychosis, bipolar disorder and eating disorders",
      skill: "Describe the features and care needs of severe mental health conditions.",
      lesson: {
        sections: [
          {
            heading: "Psychosis and schizophrenia",
            body: "**Psychosis** = loss of contact with reality. **Positive symptoms** (added experiences): **hallucinations** (hearing voices, seeing things) and **delusions** (fixed false beliefs). **Negative symptoms** (loss of normal function): apathy, social withdrawal, flattened emotion, poor motivation, disorganised speech/behaviour.\n\n**Schizophrenia** is the most common psychotic disorder — often emerges in late teens/early twenties. Causes: genetic vulnerability + stress/trauma/substance use. Treatment: antipsychotic medication, psychological therapy, social support and recovery programmes.",
          },
          {
            heading: "Bipolar disorder and eating disorders",
            body: "**Bipolar disorder** involves extreme mood swings between **mania** (elevated/irritable mood, overconfidence, little sleep, risky behaviour, sometimes psychosis) and **depression**. Managed with mood stabilisers, therapy and routine.\n\n**Eating disorders**: **anorexia nervosa** (severe restriction, fear of weight gain, distorted body image, low weight) and **bulimia nervosa** (binge eating followed by purging). Both involve intense fear of weight gain and disturbed body image. Care: specialist eating-disorder services, medical monitoring, psychological therapy, family involvement.",
          },
        ],
        keyFormulas: [
          { name: "Psychosis symptoms", statement: "positive = hallucinations/delusions; negative = apathy/withdrawal" },
          { name: "Bipolar", statement: "mania ↔ depression mood swings" },
          { name: "Eating disorders", statement: "anorexia = restriction; bulimia = binge + purge" },
        ],
        workedExample: {
          problem: "A client reports hearing voices that comment on their actions and believes neighbours are spying on them. Identify the symptoms and suggest the appropriate response.",
          solution: "Hearing voices = auditory hallucination; believing neighbours spy = persecutory delusion — both positive symptoms of psychosis. Respond calmly, do not argue with the delusion, ensure safety, contact GP/crisis team for assessment, and follow local mental health procedures. Document and involve the multidisciplinary team.",
        },
      },
      questions: [
        {
          id: "edxbtechsc-u6-sev-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define psychosis and name its two main symptom categories.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Psychosis",
                              "statement": "Loss of contact with reality; positive and negative symptoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Psychosis = loss of contact with reality.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Positive and negative symptom categories named.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Loss of contact with reality; positive (hallucinations/delusions) and negative (withdrawal/apathy) symptoms."
},
        },
        {
          id: "edxbtechsc-u6-sev-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between a hallucination and a delusion.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hallucination vs delusion",
                              "statement": "Hallucination = false perception; delusion = false belief."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hallucination: perceiving something not present, e.g. hearing voices.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Delusion: fixed false belief, e.g. being watched or having special powers.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Both are positive symptoms of psychosis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hallucination = false perception; delusion = fixed false belief."
},
        },
        {
          id: "edxbtechsc-u6-sev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'positive' and 'negative' symptoms of schizophrenia.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Schizophrenia symptoms",
                              "statement": "Positive = added experiences; negative = losses of function."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Positive: hallucinations, delusions, disorganised speech — added experiences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Negative: apathy, social withdrawal, flattened emotion, poor motivation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both types occur; negative often persist longer.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Positive = hallucinations/delusions; negative = apathy/withdrawal/loss of function."
},
        },
        {
          id: "edxbtechsc-u6-sev-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the mood pattern in bipolar disorder and explain how it differs from unipolar depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bipolar disorder",
                              "statement": "Alternating mania and depression."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bipolar = episodes of mania and depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mania: elevated/irritable mood, overconfidence, little sleep, risky behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Depression episodes resemble unipolar depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Difference: unipolar = depression only; bipolar = mania + depression.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Bipolar swings between mania and depression; unipolar is depression only."
},
        },
        {
          id: "edxbtechsc-u6-sev-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare anorexia nervosa and bulimia nervosa in terms of eating behaviour, body image and physical health risks.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Anorexia vs bulimia",
                              "statement": "Both involve fear of weight gain; differ in behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anorexia: severe restriction → very low weight.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bulimia: binge eating then purging (vomiting/laxatives).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both: distorted body image, fear of weight gain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Physical risks: anorexia = starvation, organ damage; bulimia = tooth erosion, electrolyte imbalance.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both need specialist services and psychological support.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Anorexia restricts to low weight; bulimia binges and purges — both driven by body-image fear."
},
        },
        {
          id: "edxbtechsc-u6-sev-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write an extended answer covering:\n(a) what psychosis is;\n(b) two positive and two negative symptoms of schizophrenia;\n(c) how hallucinations and delusions differ;\n(d) the role of antipsychotic medication;\n(e) the mood pattern in bipolar disorder;\n(f) the difference between anorexia and bulimia;\n(g) how a care worker should respond to a client experiencing psychosis.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Severe mental illness",
                              "statement": "Psychosis, bipolar and eating disorders need specialist care."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) Psychosis = loss of contact with reality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Two positive + two negative symptoms.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Hallucination = false perception; delusion = false belief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Antipsychotics reduce hallucinations/delusions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Bipolar = mania ↔ depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Anorexia restrict vs bulimia binge-purge.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Calm, non-confrontational, safety, GP/crisis team, document, MDT.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Complete overview of severe mental illness and appropriate care response."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbtechsc-u6-conditions-notes",
      title: "Common mental health conditions — notes",
      summary: "Anxiety and depression are common; psychosis, bipolar and eating disorders are severe and need specialist care. Always take suicidal ideation seriously.",
      sections: [
        { heading: "Key idea", body: "Common ≠ trivial; severe ≠ untreatable — all respond to appropriate care." },
        { heading: "Crisis", body: "Suicidal thoughts, psychosis and eating disorders require prompt, structured responses." },
      ],
    },
  ],
};
