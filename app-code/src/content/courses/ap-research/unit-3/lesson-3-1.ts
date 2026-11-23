import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apr-u3-lesson-3-1",
  code: "3-1",
  title: "Data Analysis",
  goal: "I CAN analyze research data and draw appropriate conclusions.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Descriptive statistics", definition: "Summarize data — mean, median, mode, standard deviation." },
    { term: "Inferential statistics", definition: "Draw conclusions about population from sample — t-tests, chi-square, ANOVA." },
    { term: "Significance", definition: "Statistical significance = unlikely due to chance (p < 0.05 typically)." },
    { term: "Effect size", definition: "Magnitude of difference — more meaningful than significance alone." },
    { term: "Correlation vs. causation", definition: "Correlation shows relationship; causation requires experimental design." },
    { term: "Data visualization", definition: "Charts/graphs communicate patterns — must be accurate and clear." },
  ],
  concepts: [
    {
      id: "apr-u3-data-analysis",
      title: "Analyzing research data",
      skill: "Analyze data appropriately and draw valid conclusions.",
      lesson: {
        sections: [
          {
            heading: "Statistical analysis",
            body: "Descriptive stats summarize (mean, median); inferential stats test hypotheses (significance); effect size shows practical importance; visualizations reveal patterns.",
          },
          {
            heading: "Interpretation cautions",
            body: "Correlation ≠ causation; statistical significance ≠ practical significance; sample size affects power; outliers can distort.",
          },
        ],
        keyFormulas: [
          { name: "Descriptive stats", statement: "Mean / Median / Mode / Standard deviation" },
          { name: "Inferential stats", statement: "T-tests / Chi-square / ANOVA — test hypotheses" },
          { name: "Significance", statement: "$p < 0.05$ typically; effect size = practical importance" },
        ],
        workedExample: {
          problem: "Interpret 'treatment group scored 85±5, control 75±8, p=0.03'",
          solution: "Treatment scored 10 points higher; p=0.03 means 3% chance difference is random — statistically significant; but need effect size to assess practical importance.",
        },
      },
      questions: [
        {
          id: "apr-u3-data-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Correlation differs from causation because correlation ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "proves cause"
                    },
                    {
                              "id": "b",
                              "text": "shows relationship but not cause"
                    },
                    {
                              "id": "c",
                              "text": "is always positive"
                    },
                    {
                              "id": "d",
                              "text": "is statistical"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation vs. causation",
                              "statement": "Relationship ≠ cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlation shows variables move together — but doesn't prove one causes other; ice cream sales correlate with drowning (both increase in summer) but don't cause each other.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Relationship not cause",
          "commonErrors": [
                    "Confusing correlation with causation."
          ]
},
        },
        {
          id: "apr-u3-data-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Statistical significance (p < 0.05) means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "result is important"
                    },
                    {
                              "id": "b",
                              "text": "result unlikely due to chance"
                    },
                    {
                              "id": "c",
                              "text": "effect is large"
                    },
                    {
                              "id": "d",
                              "text": "study is perfect"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Statistical significance",
                              "statement": "Unlikely due to chance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "p < 0.05 means <5% probability result occurred by chance — statistically significant; but doesn't indicate practical importance (effect size does).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Large samples can make tiny effects 'significant' — check effect size too.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Unlikely due to chance",
          "commonErrors": [
                    "Confusing significance with importance."
          ]
},
        },
        {
          id: "apr-u3-data-analysis-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If treatment mean=85, control mean=75, what is the difference? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Difference",
                              "answer": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$85 - 75 = 10$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$85 - 75 = 10$ point difference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $10$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "10",
          "commonErrors": [
                    "Arithmetic error."
          ]
},
        },
        {
          id: "apr-u3-data-analysis-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why correlation does not imply causation. Provide an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Correlation vs. causation",
                              "statement": "Relationship ≠ cause."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlation shows variables change together — but doesn't establish direction or mechanism; third variables may cause both.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Example: ice cream sales correlate with drowning deaths — both increase in summer; ice cream doesn't cause drowning; temperature causes both. Similarly, social media use correlates with anxiety but causation unclear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Establishing causation requires experimental design (random assignment, control) or strong theoretical mechanism — correlation alone insufficient.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Correlation shows association; causation needs experiments",
          "commonErrors": [
                    "Assuming correlation proves cause — confounding variables exist."
          ]
},
        },
        {
          id: "apr-u3-data-analysis-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how researchers should interpret 'statistically significant but small effect size' results. Is it meaningful?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Significance vs. effect size",
                              "statement": "Statistical vs. practical importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Statistically significant means unlikely due to chance — but with large samples, tiny effects become 'significant'; p-value says nothing about magnitude.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Effect size measures practical importance — 'treatment improved scores by 0.1 points' is significant but meaningless; 'improved by 15 points' matters regardless of significance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Meaningful interpretation requires both: statistical significance (real effect) + effect size (important effect); report both — 'statistically significant but negligible practical effect' is honest.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: statistical significance alone insufficient — must consider effect size and practical context; researchers should report both and interpret appropriately.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Significance + effect size needed; tiny effects can be 'significant' but meaningless",
          "commonErrors": [
                    "Equating significance with importance — effect size matters."
          ]
},
        },
      ],
    },
  ],
};
