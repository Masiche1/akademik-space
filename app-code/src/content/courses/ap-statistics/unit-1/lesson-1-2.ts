import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apst-u1-lesson-1-2",
  code: "1-2",
  title: "Comparing Distributions",
  goal: "I CAN compare groups and interpret associations between variables.",
  standards: ["STAT-2"],
  vocabulary: [
    { term: "Back-to-back stem plot", definition: "Displays two distributions sharing a central axis for direct comparison." },
    { term: "Side-by-side boxplot", definition: "Compares medians, spreads, and outliers across groups at a glance." },
    { term: "Association", definition: "A relationship between two quantitative variables, seen in scatterplots." },
    { term: "Positive association", definition: "Both variables increase together." },
    { term: "Lurking variable", definition: "An unmeasured variable that may explain an observed association." },
  ],
  concepts: [
    {
      id: "apst-u1-comparing-groups",
      title: "Comparing groups",
      skill: "Compare distributions and reason about association vs causation.",
      lesson: {
        sections: [
          {
            heading: "Comparative displays",
            body: "Back-to-back stem plots and side-by-side boxplots put two groups on the same scale so you compare shape, center, and spread directly. Compare medians for skewed data, means for roughly symmetric data.",
          },
          {
            heading: "Association and causation",
            body: "Scatterplots reveal association — positive, negative, or none. But **association does not imply causation**: a lurking variable (like ice cream sales and drowning both rising in summer) can drive the relationship. Only well-designed experiments support causal claims.",
          },
        ],
        keyFormulas: [
          { name: "IQR comparison", statement: "Compare spread via IQR, not range, when outliers present" },
          { name: "Causation rule", statement: "Association $\\ne$ causation without a controlled experiment" },
        ],
        workedExample: {
          problem: "Group A median $= 20$, IQR $= 5$; Group B median $= 28$, IQR $= 12$. Compare.",
          solution: "Group B has a higher typical value (median $28 > 20$) but is more variable (IQR $12 > 5$). Center and spread tell different stories.",
        },
      },
      questions: [
        {
          id: "apst-u1-comparing-groups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A scatterplot shows points rising from lower-left to upper-right. The association is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "negative"
                    },
                    {
                              "id": "b",
                              "text": "positive"
                    },
                    {
                              "id": "c",
                              "text": "none"
                    },
                    {
                              "id": "d",
                              "text": "causal"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Association direction",
                              "statement": "Both variables increase together."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Upward trend = positive association.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Positive",
          "commonErrors": [
                    "Saying 'causal' — association alone never proves causation."
          ]
},
        },
        {
          id: "apst-u1-comparing-groups-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ice cream sales and drowning deaths are positively associated. The best explanation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ice cream causes drowning"
                    },
                    {
                              "id": "b",
                              "text": "A lurking variable — hot weather"
                    },
                    {
                              "id": "c",
                              "text": "No relationship exists"
                    },
                    {
                              "id": "d",
                              "text": "Random chance only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Lurking variable",
                              "statement": "A third variable drives both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hot weather increases both ice cream sales and swimming (hence drowning) — classic lurking variable.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b) Lurking variable",
          "commonErrors": [
                    "Claiming causation from observational association."
          ]
},
        },
        {
          id: "apst-u1-comparing-groups-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Group A: median $15$, IQR $4$. Group B: median $15$, IQR $9$. Which group is more variable? Answer 1 for A, 2 for B.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Group",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "IQR as spread",
                              "statement": "Larger IQR = more spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IQR $9 > 4$, so Group B is more variable despite equal medians.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: Group B.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Group B",
          "commonErrors": [
                    "Comparing medians instead of IQRs for variability."
          ]
},
        },
        {
          id: "apst-u1-comparing-groups-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two classes take the same test. Class A: mean $78$, SD $4$. Class B: mean $80$, SD $10$. Compare the distributions and explain which class had more consistent scores.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "SD as consistency",
                              "statement": "Smaller SD = more consistent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Class B has a slightly higher mean ($80 > 78$) but much larger spread.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Class A's SD of $4$ vs B's $10$ means A's scores cluster tightly — more consistent.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Higher average does not mean more consistent; spread matters separately.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "B higher mean; A more consistent",
          "commonErrors": [
                    "Equating higher mean with better overall performance."
          ]
},
        },
      ],
    },
  ],
};
