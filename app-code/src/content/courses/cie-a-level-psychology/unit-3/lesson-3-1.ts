import type { Lesson } from "../../../types.ts";

export const lesson731: Lesson = {
  id: "ciealpsy-u3-lesson-3-1",
  code: "3-1",
  title: "Treatment: CBT and Drug Therapy",
  goal: "I CAN explain CBT and drug therapy for psychological disorders.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 2: treatments"],
  
  vocabulary: [
    { term: "CBT", definition: "Cognitive behavioural therapy — combines thoughts and behaviour." },
    { term: "Cognitive restructuring", definition: "Challenging and replacing negative thoughts." },
    { term: "SSRI", definition: "Selective serotonin reuptake inhibitor." },
    { term: "Placebo effect", definition: "Improvement due to belief, not treatment." },
    { term: "Ethical issues", definition: "Consent, deception, harm." },
    { term: "Symptom vs cause", definition: "Treating symptoms vs underlying causes." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s1-treat",
      title: "Treatments",
      skill: "Explain CBT and drug therapy.",
      lesson: {
        sections: [
          {
            heading: "CBT",
            body: "Combines cognitive (change thoughts) + behavioural (change actions). Used for depression, anxiety, OCD. Short-term, structured. Evidence-based, effective. Requires motivation, insight.",
          },
          {
            heading: "Drug therapy",
            body: "Antidepressants (SSRIs increase serotonin), anxiolytics (reduce anxiety), antipsychotics (schizophrenia). Quick symptom relief. Side effects, dependence, placebo effects.",
          },
          {
            heading: "Evaluation",
            body: "CBT: addresses causes, long-lasting, but requires effort. Drugs: fast, accessible, but symptoms return without drugs, side effects.",
          },
        ],
        keyFormulas: [
          { name: "CBT", statement: "thoughts + behaviour" },
          { name: "SSRI", statement: "serotonin" },
          { name: "Placebo", statement: "belief effect" },
        ],
        workedExample: {
          problem: "Compare CBT vs drug therapy for depression.",
          solution: "CBT: addresses cognitive causes, longer-lasting, requires effort. Drugs: faster, easier, but relapse risk, side effects.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-trt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is CBT?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of drug"
                    },
                    {
                              "id": "b",
                              "text": "A brain scan"
                    },
                    {
                              "id": "c",
                              "text": "A memory technique"
                    },
                    {
                              "id": "d",
                              "text": "Cognitive behavioural therapy"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Thoughts + behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT = cognitive + behavioural therapy.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cognitive behavioural therapy"
},
        },
        {
          id: "ciealpsy-u3-trt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are SSRIs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SSRI",
                              "statement": "Antidepressant."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Selective serotonin reuptake inhibitors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increase serotonin availability.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Serotonin reuptake inhibitors"
},
        },
        {
          id: "ciealpsy-u3-trt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the placebo effect?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Placebo",
                              "statement": "Belief effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Improvement due to belief, not treatment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Complicates treatment evaluation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Need double-blind studies to control.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Belief effect"
},
        },
        {
          id: "ciealpsy-u3-trt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CBT, cognitive restructuring, SSRI, placebo effect, ethical issues, symptom vs cause. (b) What is CBT? (c) What are SSRIs? (d) What is placebo effect? (e) How does CBT work? (f) How do drugs work? (g) Compare CBT vs drugs. (h) Evaluate drug therapy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Treatment",
                              "statement": "CBT/drugs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Thoughts + behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Serotonin drugs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Belief effect.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Change thoughts + actions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Chemical balance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) CBT addresses causes; drugs symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Fast but side effects, relapse.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Treatment comparison."
},
        },
        {
          id: "ciealpsy-u3-trt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "CBT combines which two approaches to treatment?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Biological and psychodynamic"
                    },
                    {
                              "id": "b",
                              "text": "Cognitive and behavioural"
                    },
                    {
                              "id": "c",
                              "text": "Humanistic and behavioural"
                    },
                    {
                              "id": "d",
                              "text": "Cognitive and biological"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Cognitive + behavioural."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT combines changing thoughts (cognitive) with changing actions (behavioural).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Cognitive and behavioural"
},
        },
        {
          id: "ciealpsy-u3-trt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of drug therapy are listed for psychological disorders?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Drug therapy",
                              "statement": "Antidepressants, anxiolytics, antipsychotics."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson lists antidepressants, anxiolytics and antipsychotics.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-trt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "SSRIs treat depression primarily by:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Increasing the availability of serotonin"
                    },
                    {
                              "id": "b",
                              "text": "Replacing lost serotonin completely"
                    },
                    {
                              "id": "c",
                              "text": "Causing a placebo effect only"
                    },
                    {
                              "id": "d",
                              "text": "Blocking dopamine receptors"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "SSRI",
                              "statement": "Serotonin reuptake inhibitor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SSRIs block the reuptake of serotonin, increasing its availability at synapses.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Increasing serotonin availability"
},
        },
        {
          id: "ciealpsy-u3-trt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many components does CBT target for change?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CBT",
                              "statement": "Thoughts + behaviour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT targets both thoughts (cognitive) and actions (behavioural).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u3-trt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Cognitive restructuring in CBT involves:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Prescribing medication"
                    },
                    {
                              "id": "b",
                              "text": "Challenging and replacing negative or irrational thoughts"
                    },
                    {
                              "id": "c",
                              "text": "Free association"
                    },
                    {
                              "id": "d",
                              "text": "Systematic desensitisation alone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cognitive restructuring",
                              "statement": "Challenging negative thoughts."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cognitive restructuring identifies and disputes distorted negative thinking, replacing it with more realistic thoughts.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Challenging and replacing negative thoughts"
},
        },
        {
          id: "ciealpsy-u3-trt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "For how many disorders is CBT stated to be used in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "CBT",
                              "statement": "Depression, anxiety, OCD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT is used for depression, anxiety and OCD.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-trt-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is the placebo effect a problem when evaluating drug therapy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It prevents patients from giving consent"
                    },
                    {
                              "id": "b",
                              "text": "It increases the severity of side effects"
                    },
                    {
                              "id": "c",
                              "text": "Improvement may be due to belief in the treatment rather than the drug itself"
                    },
                    {
                              "id": "d",
                              "text": "It only occurs in CBT"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Placebo effect",
                              "statement": "Belief effect."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If patients improve simply because they believe they are being treated, it becomes hard to tell whether the drug itself caused the improvement.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Belief in treatment may cause improvement"
},
        },
        {
          id: "ciealpsy-u3-trt-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many drawbacks of drug therapy are identified in the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Drug therapy",
                              "statement": "Side effects, dependence, placebo."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson identifies side effects, dependence and placebo effects as drawbacks of drug therapy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u3-trt-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is a strength of CBT compared with drug therapy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It acts instantly"
                    },
                    {
                              "id": "b",
                              "text": "It requires no effort from the patient"
                    },
                    {
                              "id": "c",
                              "text": "It has no side effects"
                    },
                    {
                              "id": "d",
                              "text": "It addresses underlying causes and can produce longer-lasting change"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "CBT strength",
                              "statement": "Addresses causes, longer-lasting."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT targets the thoughts and behaviours maintaining the disorder, giving longer-lasting benefits than symptom relief from drugs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Addresses causes with longer-lasting change"
},
        },
        {
          id: "ciealpsy-u3-trt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how CBT might be used to treat depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "CBT",
                              "statement": "Thoughts + behaviour change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The therapist helps the client identify negative automatic thoughts, such as those in Beck's negative triad.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Cognitive restructuring challenges these thoughts and replaces them with more realistic ones.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Behavioural techniques, such as scheduling enjoyable activities, help break the cycle of withdrawal and low mood.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Identify, challenge and replace negative thoughts; change behaviour"
},
        },
        {
          id: "ciealpsy-u3-trt-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare CBT and drug therapy as treatments for depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "CBT vs drugs",
                              "statement": "Causes vs symptoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CBT changes thoughts and behaviours, addressing the underlying causes of depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Drug therapy, such as SSRIs, increases serotonin and provides quicker symptom relief.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "CBT is longer-lasting but requires motivation and insight from the patient.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Drugs carry risks of side effects, dependence and relapse when medication stops.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CBT addresses causes; drugs give fast symptom relief"
},
        },
        {
          id: "ciealpsy-u3-trt-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define CBT, cognitive restructuring, SSRI, placebo effect, ethical issues and symptom vs cause. (b) What is CBT? (c) What are SSRIs? (d) What is the placebo effect? (e) How does CBT work? (f) How do antidepressant drugs work? (g) Compare CBT and drug therapy. (h) Evaluate drug therapy, considering ethical issues.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Treatment",
                              "statement": "CBT/drugs evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Cognitive behavioural therapy — thoughts plus behaviour.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Selective serotonin reuptake inhibitors.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Improvement due to belief rather than treatment.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Identifies and challenges negative thoughts while changing behaviours.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Increases serotonin availability at synapses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) CBT addresses causes and lasts longer; drugs act faster but treat symptoms with side effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Fast and accessible but raises issues of consent, dependence, side effects and the need for double-blind trials.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "CBT and drug therapy analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-trt-notes",
      title: "Treatments — notes",
      summary: "CBT addresses causes; drugs treat symptoms. Both have strengths/limits.",
      sections: [
        { heading: "Key idea", body: "Different approaches target different aspects of disorders." },
        { heading: "Evaluation", body: "CBT evidence-based but effortful; drugs fast but side effects." },
      ],
    },
  ],
};
