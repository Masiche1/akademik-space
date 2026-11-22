import type { Lesson } from "../../../types.ts";

export const lesson614: Lesson = {
  id: "ciealhis-u1-lesson-1-4",
  code: "1-4",
  title: "Cold War: End of the Cold War",
  goal: "I CAN explain causes and consequences of Cold War's end.",
  standards: ["Cambridge A Level History 9489", "Paper 1: Cold War end"],
  
  vocabulary: [
    { term: "Glasnost", definition: "Soviet policy of openness." },
    { term: "Perestroika", definition: "Soviet policy of restructuring." },
    { term: "Reunification", definition: "East/West Germany joining." },
    { term: "Soviet collapse", definition: "USSR dissolution 1991." },
    { term: "Berlin Wall", definition: "Symbol of Cold War division." },
    { term: "Eastern bloc", definition: "Soviet-aligned countries." },
  ],
  concepts: [
    {
      id: "ciealhis-u1-s4-end",
      title: "End of Cold War",
      skill: "Analyse Cold War collapse causes.",
      lesson: {
        sections: [
          {
            heading: "Gorbachev reforms",
            body: "1985: Gorbachev leader. Glasnost (openness) and perestroika (restructuring) aimed to reform but unleashed uncontrollable forces.",
          },
          {
            heading: "Collapse",
            body: "1989: Berlin Wall fell, Eastern European revolutions. 1991: USSR dissolved. Causes: economic stagnation, military burden, nationalism, reform failures.",
          },
        ],
        keyFormulas: [
          { name: "Glasnost", statement: "openness" },
          { name: "Perestroika", statement: "restructuring" },
          { name: "1991", statement: "USSR dissolved" },
        ],
        workedExample: {
          problem: "Why did the Soviet Union collapse in 1991?",
          solution: "Economic stagnation + military spending + nationalism + failed reforms → system collapse.",
        },
      },
      questions: [
        {
          id: "ciealhis-u1-end-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was glasnost?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An economic plan"
                    },
                    {
                              "id": "b",
                              "text": "Soviet policy of openness"
                    },
                    {
                              "id": "c",
                              "text": "A military strategy"
                    },
                    {
                              "id": "d",
                              "text": "A peace treaty"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Glasnost",
                              "statement": "Openness policy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Glasnost = Soviet openness.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Openness policy"
},
        },
        {
          id: "ciealhis-u1-end-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was perestroika?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Perestroika",
                              "statement": "Restructuring."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet policy of restructuring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Aimed to reform economic/political system.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Restructuring policy"
},
        },
        {
          id: "ciealhis-u1-end-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the Cold War end?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Cold War end",
                              "statement": "Collapse causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Soviet economic stagnation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Military spending burden.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Nationalism + reform failures.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Economic + military + nationalism"
},
        },
        {
          id: "ciealhis-u1-end-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define glasnost, perestroika, reunification, Soviet collapse, Berlin Wall, Eastern bloc. (b) What was glasnost? (c) What was perestroika? (d) When did Berlin Wall fall? (e) When did USSR dissolve? (f) What caused Soviet collapse? (g) What was significance of 1989? (h) Evaluate whether Gorbachev intended to end Cold War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cold War end",
                              "statement": "Causes, consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Openness.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Restructuring.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1989.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1991.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Economic, military, nationalism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Symbolised Cold War end.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reforms unintended consequences.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "End of Cold War."
},
        },
        {
          id: "ciealhis-u1-end-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the main aim of perestroika?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To expand the Soviet nuclear arsenal" },
              { id: "b", text: "To restore Stalin-era central planning" },
              { id: "c", text: "To restructure and modernise the Soviet economy and system" },
              { id: "d", text: "To create a permanent alliance with NATO" }
            ],
            correctChoiceId: "c"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perestroika", statement: "Restructuring." }
            ],
            steps: [
              { reasoning: "Perestroika sought systemic economic and political reform.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To restructure and modernise the Soviet economy and system"
          }
        },
        {
          id: "ciealhis-u1-end-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Gorbachev become leader of the Soviet Union?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1985 }]
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Gorbachev", statement: "Leader from 1985." }
            ],
            steps: [
              { reasoning: "Gorbachev became General Secretary in 1985.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1985"
          }
        },
        {
          id: "ciealhis-u1-end-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When did the Berlin Wall fall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 August 1961" },
              { id: "b", text: "25 December 1991" },
              { id: "c", text: "17 September 1939" },
              { id: "d", text: "9 November 1989" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Wall", statement: "Fell in 1989." }
            ],
            steps: [
              { reasoning: "The wall opened on 9 November 1989.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** 9 November 1989"
          }
        },
        {
          id: "ciealhis-u1-end-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Soviet Union formally dissolved?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1991 }]
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Soviet collapse", statement: "1991 dissolution." }
            ],
            steps: [
              { reasoning: "The USSR ceased to exist in December 1991.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1991"
          }
        },
        {
          id: "ciealhis-u1-end-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how glasnost and perestroika contributed to the collapse of the Soviet Union.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gorbachev reforms", statement: "Unintended consequences." }
            ],
            steps: [
              { reasoning: "Glasnost exposed economic failure and regime abuses to public criticism.", marks: 1, markCode: "M" },
              { reasoning: "Perestroika weakened central control without replacing it with a stable system.", marks: 1, markCode: "M" },
              { reasoning: "Nationalist and reform movements gained momentum faster than the state could manage.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Reforms released forces they could not control"
          }
        },
        {
          id: "ciealhis-u1-end-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which factor most directly weakened the Soviet economy before 1991?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The complete collapse of Soviet agriculture in 1989" },
              { id: "b", text: "Long-term economic stagnation and the burden of military spending" },
              { id: "c", text: "The immediate loss of all Soviet oil exports" },
              { id: "d", text: "The absence of any political reform before Gorbachev" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soviet collapse", statement: "Economic causes." }
            ],
            steps: [
              { reasoning: "Stagnation and defence costs undermined the Soviet system.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Long-term economic stagnation and the burden of military spending"
          }
        },
        {
          id: "ciealhis-u1-end-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many years passed between the fall of the Berlin Wall and the dissolution of the USSR?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }]
          },
          markscheme: {
            principles: [
              { kind: "context", name: "1989 to 1991", statement: "Two years." }
            ],
            steps: [
              { reasoning: "$1991 - 1989 = 2$.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "2"
          }
        },
        {
          id: "ciealhis-u1-end-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare the immediate consequences of the Berlin Wall's fall with the longer-term consequences of the USSR's dissolution.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Immediate and long-term change", statement: "1989 and 1991." }
            ],
            steps: [
              { reasoning: "The wall's fall symbolised the end of division and triggered rapid political change.", marks: 1, markCode: "M" },
              { reasoning: "USSR dissolution created successor states and reshaped international power for decades.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "1989 opened change; 1991 transformed the world order"
          }
        },
        {
          id: "ciealhis-u1-end-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What did membership of the Eastern bloc primarily mean for Soviet satellites?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete economic independence" },
              { id: "b", text: "Membership of NATO" },
              { id: "c", text: "Neutrality between East and West" },
              { id: "d", text: "Political and military alignment with the Soviet Union" }
            ],
            correctChoiceId: "d"
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Eastern bloc", statement: "Soviet-aligned states." }
            ],
            steps: [
              { reasoning: "Soviet satellites depended on Moscow for security and ideology.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** Political and military alignment with the Soviet Union"
          }
        },
        {
          id: "ciealhis-u1-end-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain how nationalism contributed to the Soviet Union's collapse.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nationalism", statement: "Separatist pressure." }
            ],
            steps: [
              { reasoning: "Glasnost allowed republics to express demands for independence.", marks: 1, markCode: "M" },
              { reasoning: "Baltic, Caucasian and other nationalist movements weakened central authority.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "Nationalist movements undermined central control"
          }
        },
        {
          id: "ciealhis-u1-end-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which judgement best describes Gorbachev's original intention for glasnost and perestroika?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To restore the Cold War arms race" },
              { id: "b", text: "To renew and strengthen the Soviet system" },
              { id: "c", text: "To dissolve the Soviet Union immediately" },
              { id: "d", text: "To join NATO as a full member" }
            ],
            correctChoiceId: "b"
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Gorbachev's intentions", statement: "Reform, not collapse." }
            ],
            steps: [
              { reasoning: "The reforms aimed to revitalise socialism rather than end it.", marks: 1, markCode: "M" }
            ],
            finalAnswer: "**(a)** To renew and strengthen the Soviet system"
          }
        },
        {
          id: "ciealhis-u1-end-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate whether the end of the Cold War was mainly caused by Soviet weakness or Western pressure.",
          response: {
            type: "open"
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Balanced judgement." }
            ],
            steps: [
              { reasoning: "Soviet economic and political weaknesses made the system unsustainable.", marks: 1, markCode: "M" },
              { reasoning: "Western containment, arms pressure and diplomatic engagement constrained Moscow.", marks: 1, markCode: "M" },
              { reasoning: "A strong answer weighs internal decline against external pressure.", marks: 1, markCode: "A" }
            ],
            finalAnswer: "Internal decline and external pressure combined"
          }
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u1-end-notes",
      title: "Cold War end — notes",
      summary: "Gorbachev reforms→uncontrolled change→1989 wall falls→1991 USSR dissolves.",
      sections: [
        { heading: "Key idea", body: "Reform attempts unleashed forces that destroyed Soviet system." },
        { heading: "Consequences", body: "End of bipolar world, US unipolarity, new conflicts." },
      ],
    },
  ],
};
