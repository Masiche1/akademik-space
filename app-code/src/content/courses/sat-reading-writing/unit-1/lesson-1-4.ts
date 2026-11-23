import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "satrw-u1-lesson-1-4",
  code: "1-4",
  title: "Quantitative Information in Passages",
  goal: "I CAN interpret data, graphs, and statistics within passages.",
  standards: ["SAT RW 2.x"],
  vocabulary: [
    { term: "Quantitative evidence", definition: "Data, statistics, graphs supporting claims." },
    { term: "Trend", definition: "Direction of change over time." },
    { term: "Correlation", definition: "Two variables moving together — not necessarily causation." },
    { term: "Percentage vs percentage points", definition: "Relative vs absolute change." },
    { term: "Graph reading", definition: "Axes, scale, units, time period." },
    { term: "Causal claim", definition: "One thing causes another — stronger than correlation." },
  ],
  concepts: [
    {
      id: "satrw-u1-quantitative",
      title: "Quantitative information",
      skill: "Interpret data and statistics embedded in passages.",
      lesson: {
        sections: [
          {
            heading: "Correlation vs causation",
            body: "Two variables moving together (correlation) does NOT prove one causes the other — ice cream sales and drowning both rise in summer (confounding variable: heat). SAT questions test whether you can distinguish 'X and Y are related' from 'X causes Y' — the latter needs more evidence.",
          },
          {
            heading: "Reading data carefully",
            body: "Check units (%, dollars, years), scale (does the y-axis start at 0?), and time period. 'Increased 50%' from 2 to 3 is different from 20 to 30 — percentage change depends on baseline. Watch for percentage vs percentage POINTS: 'rose from 40% to 50%' is +10 points but +25% relative.",
          },
        ],
        keyFormulas: [
          { name: "Correlation ≠ causation", statement: "Together ≠ one causes other" },
          { name: "Percentage points", statement: "40%→50% = +10 points, +25% relative" },
        ],
        workedExample: {
          problem: "Graph shows ice cream sales and shark attacks both peak in July. Does ice cream cause shark attacks?",
          solution: "No — both correlate with summer (the confounding variable); more people swim AND eat ice cream in hot weather. Correlation without controlling for the third variable doesn't establish causation.",
        },
      },
      questions: [
        {
          id: "satrw-u1-quantitative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Correlation means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "one thing causes another"
                    },
                    {
                              "id": "b",
                              "text": "two variables move together"
                    },
                    {
                              "id": "c",
                              "text": "data is wrong"
                    },
                    {
                              "id": "d",
                              "text": "a trend is decreasing"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Correlation",
                              "statement": "Co-movement, not causation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Correlation = variables move together; causation requires showing one produces the other — different claims.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Move together",
          "commonErrors": [
                    "Confusing correlation with causation."
          ]
},
        },
        {
          id: "satrw-u1-quantitative-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Rates rose from 20% to 30%' represents ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "10% increase"
                    },
                    {
                              "id": "b",
                              "text": "10 percentage points, 50% relative increase"
                    },
                    {
                              "id": "c",
                              "text": "30% increase"
                    },
                    {
                              "id": "d",
                              "text": "20% increase"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Percentage points",
                              "statement": "Absolute vs relative change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "20%→30% = +10 percentage points; relative increase = (30-20)/20 = 50% — different measures.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "+10 points, +50% relative",
          "commonErrors": [
                    "Confusing percentage points with percent change."
          ]
},
        },
        {
          id: "satrw-u1-quantitative-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'X and Y are correlated' doesn't prove 'X causes Y,' using the summer example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Confounding variable",
                              "statement": "Third factor explains both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ice cream sales and shark attacks both peak in summer — but summer heat causes BOTH (more swimming → more attacks; more heat → more ice cream); the correlation is spurious, driven by the confounding variable.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "To prove causation, you must rule out confounders — show X changes Y even when other factors are controlled; correlation alone can't do that.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT tests this: passages showing correlation are often followed by questions asking what additional evidence would support causation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Confounding variable (summer) explains both — correlation ≠ causation",
          "commonErrors": [
                    "Assuming correlation proves causation."
          ]
},
        },
        {
          id: "satrw-u1-quantitative-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A passage claims 'cities with more libraries have higher graduation rates, proving libraries improve education.' Evaluate the reasoning.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Critical evaluation",
                              "statement": "Spot the causal leap."
                    },
                    {
                              "kind": "context",
                              "name": "Confounding",
                              "statement": "Wealthier cities have both."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The reasoning commits the correlation-causation fallacy — wealthy cities fund both libraries AND schools, so the correlation may reflect wealth, not library effect; 'proving' overstates the evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Better claim: 'library access is associated with graduation rates' — association, not proof of causation; the passage's causal language exceeds its evidence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This is a classic SAT trap — passages make plausible-sounding causal claims from correlational data; identifying the leap is the skill.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Correlation doesn't prove causation — wealth confounds",
          "commonErrors": [
                    "Accepting plausible causal claims at face value."
          ]
},
        },
      ],
    },
  ],
};
