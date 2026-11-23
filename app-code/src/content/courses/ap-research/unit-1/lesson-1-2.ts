import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apr-u1-lesson-1-2",
  code: "1-2",
  title: "Methodology Selection",
  goal: "I CAN select appropriate research methods for specific questions.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Survey", definition: "Questionnaire-based data collection — efficient for large samples but limited depth." },
    { term: "Experiment", definition: "Controlled manipulation to test causation — strongest for causal claims." },
    { term: "Case study", definition: "In-depth analysis of specific instance — rich detail but limited generalizability." },
    { term: "Archival research", definition: "Analysis of existing documents/data — non-invasive but limited control." },
    { term: "Ethnography", definition: "Immersive observation of culture/group — deep understanding but time-intensive." },
    { term: "Meta-analysis", definition: "Statistical combination of multiple studies — powerful but dependent on included studies." },
  ],
  concepts: [
    {
      id: "apr-u1-methodology-selection",
      title: "Choosing methods",
      skill: "Match research methods to questions appropriately.",
      lesson: {
        sections: [
          {
            heading: "Method selection",
            body: "Question type determines method — causal questions need experiments; descriptive need surveys; explanatory need interviews/ethnography; historical need archival research.",
          },
          {
            heading: "Trade-offs",
            body: "Every method has strengths/limitations — experiments establish causation but artificial; surveys reach many but shallow; case studies deep but not generalizable.",
          },
        ],
        keyFormulas: [
          { name: "Question → Method", statement: "Causal → Experiment; Descriptive → Survey; Exploratory → Interview/Ethnography; Historical → Archival" },
          { name: "Method trade-offs", statement: "Control vs. realism; breadth vs. depth; generalizability vs. specificity" },
        ],
        workedExample: {
          problem: "Choose method for 'Does meditation reduce anxiety?'",
          solution: "Experimental: randomize participants to meditation vs. control, measure anxiety before/after — establishes causation though artificial setting limits real-world generalizability.",
        },
      },
      questions: [
        {
          id: "apr-u1-methodology-selection-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Experiments are best for answering questions about ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "descriptions"
                    },
                    {
                              "id": "b",
                              "text": "causation"
                    },
                    {
                              "id": "c",
                              "text": "history"
                    },
                    {
                              "id": "d",
                              "text": "culture"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Method selection",
                              "statement": "Experiments test causation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Experiments manipulate variables to test causation — strongest method for 'does X cause Y?' though artificial conditions may limit generalizability.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Causation",
          "commonErrors": [
                    "Thinking experiments are for description — they test causes."
          ]
},
        },
        {
          id: "apr-u1-methodology-selection-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Case studies are limited because they ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "are too cheap"
                    },
                    {
                              "id": "b",
                              "text": "have limited generalizability to broader populations"
                    },
                    {
                              "id": "c",
                              "text": "can't use interviews"
                    },
                    {
                              "id": "d",
                              "text": "require too many subjects"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Method trade-offs",
                              "statement": "Depth vs. generalizability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Case studies provide rich detail but limited generalizability — findings from one case may not apply broadly; they're exploratory rather than confirmatory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They excel at depth, generating hypotheses for further research.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Limited generalizability",
          "commonErrors": [
                    "Thinking they're useless — they generate hypotheses."
          ]
},
        },
        {
          id: "apr-u1-methodology-selection-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a survey reaches 500 people but only 300 respond, what is the response rate percentage? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Percent",
                              "answer": 60
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Divide",
                              "statement": "$300/500 \\times 100 = 60\\%$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$300/500 = 0.6 = 60\\%$ response rate.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $60$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "60",
          "commonErrors": [
                    "Using wrong numerator/denominator."
          ]
},
        },
        {
          id: "apr-u1-methodology-selection-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare surveys and experiments for research on 'social media and depression.' Which is better and why?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Method comparison",
                              "statement": "Breadth vs. causation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Survey: can reach thousands, measure usage patterns and depression symptoms, establish correlation; but can't establish causation — does social media cause depression or do depressed people use more?",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Experiment: can test causation by manipulating social media use (e.g., digital detox study); but artificial, ethical concerns limiting duration/intensity, may not reflect real-world patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Best: mixed methods — survey establishes correlation at scale, experiment tests causation in controlled setting; each compensates for other's limitations.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Survey = correlation at scale; Experiment = causation but artificial",
          "commonErrors": [
                    "Choosing one without considering trade-offs."
          ]
},
        },
        {
          id: "apr-u1-methodology-selection-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how method selection shapes research findings. Can the same question yield different answers with different methods?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Method shapes findings",
                              "statement": "Lens determines view."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Method determines what can be discovered — surveys reveal patterns but not mechanisms; experiments reveal causation but artificial; ethnography reveals meaning but not prevalence.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Same question, different methods: 'Is remote work productive?' Survey might show +15% productivity; experiment might show no difference; ethnography might reveal satisfaction differences — each 'true' within its method's limits.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This isn't relativism — methods have different validity for different questions; researchers must choose appropriate method and acknowledge limitations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: method selection fundamentally shapes findings — no single method answers all questions; methodological awareness is essential for interpreting results.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Method shapes findings — no method answers all questions",
          "commonErrors": [
                    "Assuming methods are interchangeable — they reveal different aspects."
          ]
},
        },
      ],
    },
  ],
};
