import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "stats-u3-lesson-3-2",
  code: "3-2",
  title: "Simulations",
  goal: "I CAN design and interpret simulations for probability problems.",
  standards: ["S-MD.A.1", "S-MD.A.2", "S-MD.A.3", "S-MD.A.4", "S-MD.B.5"],
  vocabulary: [
    { term: "Simulation", definition: "Model of real process." },
    { term: "Trial", definition: "One run." },
    { term: "Random", definition: "Unpredictable outcome." },
    { term: "Replicate", definition: "Repeat trial." },
    { term: "Estimate", definition: "Approximate value." },
  ],
  concepts: [
    {
      id: "stats-u3-simulations",
      title: "Simulations",
      skill: "Design and interpret probability simulations.",
      lesson: {
        sections: [
          {
            heading: "What is a simulation?",
            body: "A simulation models a real process using random trials. Example: to estimate probability of getting exactly 3 heads in 5 flips, simulate many sets of 5 flips and count how often 3 heads occur.",
          },
          {
            heading: "Why simulate?",
            body: "When theoretical calculation is hard (complex scenarios, many variables), simulation gives estimates. More trials = better estimate. Simulations also test whether theoretical models match real behavior.",
          },
        ],
        keyFormulas: [
          { name: "Simulation", statement: "Model process." },
          { name: "Trial", statement: "One run." },
          { name: "Trials", statement: "More = better estimate." },
        ],
        workedExample: {
          problem: "Estimate P(exactly 2 heads in 3 flips) by simulation reasoning.",
          solution: "Possible outcomes of 3 flips: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT. Exactly 2 heads: HHT, HTH, THH = 3 of 8 = 0.375.",
        },
      },
      questions: [
        {
          id: "stats-u3-simulations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A simulation uses ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "real experiments only"
                    },
                    {
                              "id": "b",
                              "text": "random trials to model a process"
                    },
                    {
                              "id": "c",
                              "text": "guesses"
                    },
                    {
                              "id": "d",
                              "text": "deterministic steps"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Simulation",
                              "statement": "Random trials model process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A simulation uses random trials to model a real process and estimate probabilities.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** random trials to model a process",
          "commonErrors": [
                    "Thinking it's just guessing."
          ]
},
        },
        {
          id: "stats-u3-simulations-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "More simulation trials generally ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "worse estimate"
                    },
                    {
                              "id": "b",
                              "text": "better estimate"
                    },
                    {
                              "id": "c",
                              "text": "no effect"
                    },
                    {
                              "id": "d",
                              "text": "slower only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Trials",
                              "statement": "More = more accurate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "More trials give a more accurate estimate of the true probability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** better estimate",
          "commonErrors": [
                    "Reversing the relationship."
          ]
},
        },
        {
          id: "stats-u3-simulations-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 200 simulation trials, an event occurred 45 times. What is the estimated probability?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Probability",
                              "answer": 0.225
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Estimate",
                              "statement": "$45/200 = 0.225$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$45/200 = 0.225$.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$0.225$",
          "commonErrors": [
                    "Saying 45 or 200."
          ]
},
        },
        {
          id: "stats-u3-simulations-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a simulation might be preferred over exact calculation for a complex probability problem.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Simulation",
                              "statement": "Estimate when exact is hard."
                    },
                    {
                              "kind": "technique",
                              "name": "Example",
                              "statement": "Complex scenario."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When a problem involves many variables or complex conditions (e.g., probability of at least one shared birthday in a group), exact calculation is difficult. Simulation with many trials gives a good estimate quickly.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains when simulation is useful.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Exact calc too complex → simulate for estimate.**",
          "commonErrors": [
                    "Saying simulation is always exact."
          ]
},
        },
      ],
    },
  ],
};
