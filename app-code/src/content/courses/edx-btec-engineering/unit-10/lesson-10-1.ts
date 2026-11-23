import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "edxbteceng-u10-lesson-10-1",
  code: "10-1",
  title: "Reliability Metrics and Life Data",
  goal: "I CAN calculate reliability metrics and interpret basic failure data.",
  standards: ["Pearson BTEC Level 3 National Engineering — maintenance and reliability", "Reliability engineering: failure metrics, availability and life data"],
  
  vocabulary: [
    { term: "Failure", definition: "The inability of a component or system to perform its required function." },
    { term: "MTBF", definition: "Mean time between failures; average operating time per failure for a repairable item." },
    { term: "MTTR", definition: "Mean time to repair; average time to restore a failed item to operation." },
    { term: "Availability", definition: "The proportion of time a system is able to perform its required function." },
    { term: "Failure rate", definition: "The probability of failure per unit time, often expressed per hour." },
    { term: "Bathtub curve", definition: "Failure-rate pattern with early failures, a stable useful-life period and wear-out failures." },
  ],
  concepts: [
    {
      id: "edxbteceng-u10-10-1-met",
      title: "Reliability and availability metrics",
      skill: "Calculate MTBF, MTTR, failure rate and availability.",
      lesson: {
        sections: [
          {
            heading: "Failure metrics",
            body: "Reliability is often measured by how often failures occur and how quickly they are repaired. MTBF is total operating time divided by the number of failures for a repairable system. MTTR is total repair time divided by the number of repairs. A longer MTBF indicates higher reliability; a shorter MTTR indicates faster recovery. These metrics must be defined carefully: MTBF applies to repairable systems, while mean time to failure (MTTF) is often used for non-repairable items.",
          },
          {
            heading: "Availability",
            body: "Availability combines reliability and maintainability. For a simple steady-state model, availability = MTBF / (MTBF + MTTR). If MTBF is 500 h and MTTR is 20 h, availability = 500 / 520 = 0.9615, or about 96.2 percent. Downtime reduces availability, so improving repair time can be as valuable as reducing failures. Failure rate is approximately the reciprocal of MTBF for an exponential distribution: lambda = 1 / MTBF.",
          },
        ],
        keyFormulas: [
          { name: "MTBF", statement: "MTBF = total operating time / number of failures" },
          { name: "MTTR", statement: "MTTR = total repair time / number of repairs" },
          { name: "Availability", statement: "A = MTBF / (MTBF + MTTR)" },
        ],
        workedExample: {
          problem: "A pump fleet records 8 failures in 4000 operating hours. Total downtime is 160 hours. Find MTBF, MTTR and availability.",
          solution: "MTBF = 4000 / 8 = 500 h. MTTR = 160 / 8 = 20 h. Availability = 500 / (500 + 20) = 0.9615, about 96.2 percent.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-met-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does MTBF measure?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Average operating time between failures"
                    },
                    {
                              "id": "b",
                              "text": "Average time spent repairing"
                    },
                    {
                              "id": "c",
                              "text": "Total production output"
                    },
                    {
                              "id": "d",
                              "text": "Maximum load capacity"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MTBF",
                              "statement": "Mean time between failures for a repairable system."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MTBF is operating time per failure.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Operating time between failures"
},
        },
        {
          id: "edxbteceng-u10-met-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ten machines run for a total of 1000 hours and experience 4 failures. Calculate MTBF.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "MTBF",
                              "answer": 250,
                              "unit": "h"
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "MTBF",
                              "statement": "MTBF = operating time / failures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MTBF = 1000 / 4.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MTBF = 250 h.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "250 h"
},
        },
        {
          id: "edxbteceng-u10-met-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between MTBF and MTTR.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "MTBF versus MTTR",
                              "statement": "MTBF measures failure interval; MTTR measures repair duration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MTBF is the average time between failures while running.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "MTTR is the average time needed to repair and return to service.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Availability improves when MTBF rises or MTTR falls.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "MTBF = time between failures; MTTR = repair time."
},
        },
        {
          id: "edxbteceng-u10-met-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A conveyor has MTBF = 400 h and MTTR = 25 h.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate availability as a decimal.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Express availability as a percentage.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Availability",
                              "statement": "A = MTBF / (MTBF + MTTR)."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A = 400 / (400 + 25) = 400 / 425.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "A = 0.9412.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Percentage = 94.1 percent.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.9412, about 94.1 percent"
},
        },
        {
          id: "edxbteceng-u10-met-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A machine operates for 2000 h and has 5 failures. Repairs take a total of 60 h.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate MTBF.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Calculate MTTR.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Calculate the failure rate per operating hour.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Reliability metrics",
                              "statement": "MTBF = time/failures; failure rate = failures/time."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "MTBF = 2000 / 5 = 400 h.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "MTTR = 60 / 5 = 12 h.",
                              "marks": 2,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Failure rate = 5 / 2000 = 0.0025 per hour.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "MTBF 400 h; MTTR 12 h; failure rate 0.0025/h."
},
        },
        {
          id: "edxbteceng-u10-met-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A plant records pump failures and downtime for one month.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the data needed to calculate MTBF.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "State the data needed to calculate MTTR.",
                    "marks": 1
          },
          {
                    "label": "c",
                    "prompt": "Explain why operating time should exclude repair downtime.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how availability affects production output.",
                    "marks": 2
          },
          {
                    "label": "e",
                    "prompt": "Suggest one action that could improve availability without changing design.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reliability data",
                              "statement": "Track operating time, failure count and repair duration."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Total operating time and number of failures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Total downtime and number of repairs.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "MTBF measures time at risk of failure; repair time is not operating exposure.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Lower availability reduces hours available for production and increases backlog.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "e",
                              "reasoning": "Improve spares, training, preventive maintenance or faster diagnosis to reduce MTTR.",
                              "marks": 3,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Need operating time, failures and repair time; availability drives output; reduce downtime or failures."
},
        },
      ],
    },
    {
      id: "edxbteceng-u10-10-1-life",
      title: "Failure patterns and life data",
      skill: "Interpret bathtub curves and simple reliability functions.",
      lesson: {
        sections: [
          {
            heading: "Bathtub curve",
            body: "The bathtub curve describes how failure rate changes over a product's life. Early failures, or infant mortality, occur soon after start-up because of manufacturing defects or installation errors. The useful-life period has a roughly constant random failure rate. Wear-out failures increase as components age, degrade or approach end of life. Maintenance can reduce early failures through burn-in and inspection, and delay wear-out through lubrication, replacement or redesign.",
          },
          {
            heading: "Reliability functions",
            body: "For an exponential distribution, the reliability at time t is R(t) = e^(-t/MTBF), assuming constant failure rate. If t equals MTBF, reliability is about 0.37, meaning only 37 percent are expected to survive to the mean time. For series components, system reliability is the product of component reliabilities. For parallel redundant components, system reliability is higher because all parallel paths must fail. Life data should be analysed only when the failure definition and operating conditions are consistent.",
          },
        ],
        keyFormulas: [
          { name: "Exponential reliability", statement: "R(t) = e^(-t/MTBF)" },
          { name: "Series reliability", statement: "Rsystem = R1 x R2 x ..." },
          { name: "Parallel reliability", statement: "Rsystem = 1 - (1 - R1)(1 - R2) for two paths" },
        ],
        workedExample: {
          problem: "A component has MTBF = 1000 h. Find the probability it survives 500 h under an exponential model.",
          solution: "R(500) = e^(-500/1000) = e^(-0.5) = 0.6065. About 60.7 percent are expected to survive to 500 h.",
        },
      },
      questions: [
        {
          id: "edxbteceng-u10-life-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which region of the bathtub curve represents early failures?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Infant mortality"
                    },
                    {
                              "id": "b",
                              "text": "Useful life"
                    },
                    {
                              "id": "c",
                              "text": "Wear-out"
                    },
                    {
                              "id": "d",
                              "text": "Design life"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Infant mortality",
                              "statement": "Early failures soon after start-up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Early failures are called infant mortality.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Infant mortality"
},
        },
        {
          id: "edxbteceng-u10-life-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A component has MTBF = 1000 h. Using R(t) = e^(-t/MTBF), calculate reliability at t = 500 h to 3 significant figures.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "R",
                              "answer": 0.607,
                              "tolerance": 0.001
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Exponential reliability",
                              "statement": "R(t) = e^(-t/MTBF)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Exponent = -500/1000 = -0.5.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "R = e^(-0.5).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "R = 0.6065, about 0.607.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.607"
},
        },
        {
          id: "edxbteceng-u10-life-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what a Weibull shape parameter beta greater than 1 suggests about failures.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Weibull beta",
                              "statement": "Beta describes how failure rate changes with time."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beta > 1 indicates an increasing failure rate with age.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This often corresponds to wear-out failures.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Maintenance can target wear mechanisms before failures rise.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Increasing failure rate, likely wear-out."
},
        },
        {
          id: "edxbteceng-u10-life-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A pump shows three failure patterns over its life.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name the three regions of the bathtub curve.",
                    "marks": 1
          },
          {
                    "label": "b",
                    "prompt": "Describe the failure rate in the useful-life region.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one maintenance action for the wear-out region.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bathtub regions",
                              "statement": "Early failures, useful life and wear-out have different rates."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Infant mortality, useful life, wear-out.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Failure rate is approximately constant and often treated as random.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Preventive replacement, lubrication, overhaul or redesign before wear-out.",
                              "marks": 2,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Infant mortality, useful life, wear-out; constant rate in useful life."
},
        },
        {
          id: "edxbteceng-u10-life-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Two sensors have reliabilities 0.90 and 0.80 at 1000 h. One system uses them in series; another uses them in parallel.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Calculate series system reliability.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Calculate parallel system reliability.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "formula",
                              "name": "Series and parallel reliability",
                              "statement": "Series multiplies reliabilities; parallel uses redundancy."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Series R = 0.90 x 0.80 = 0.72.",
                              "marks": 3,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Parallel R = 1 - (1 - 0.90)(1 - 0.80) = 1 - 0.10 x 0.20 = 0.98.",
                              "marks": 3,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Series 0.72; parallel 0.98."
},
        },
        {
          id: "edxbteceng-u10-life-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A manufacturer wants to analyse failures of a new gearbox over six months.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State the failure definition that should be recorded.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "List three data fields needed for life analysis.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why operating conditions must be recorded.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain how the bathtub curve could guide maintenance.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Life data collection",
                              "statement": "Define failure consistently and record time, cause and conditions."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Failure = inability to transmit power within specified performance limits.",
                              "marks": 2,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Operating hours, failure time, failure mode/cause and repair action.",
                              "marks": 3,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Different loads or environments change failure mechanisms and life.",
                              "marks": 2,
                              "markCode": "R"
                    },
                    {
                              "part": "d",
                              "reasoning": "Early failures suggest burn-in; wear-out suggests scheduled replacement or redesign.",
                              "marks": 2,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Record consistent failure definition, hours, cause and conditions; use curve to target maintenance."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "edxbteceng-u10-met-notes",
      title: "Reliability metrics and life data — notes",
      summary: "MTBF and MTTR drive availability; the bathtub curve links failure timing to maintenance strategy.",
      sections: [
        { heading: "Metrics", body: "MTBF = operating time per failure; MTTR = repair time per failure; availability = MTBF/(MTBF+MTTR)." },
        { heading: "Life data", body: "Early failures, constant useful life and wear-out require different responses." },
        { heading: "Reliability functions", body: "Exponential reliability falls as e^(-t/MTBF); series systems multiply reliability while redundancy improves it." },
      ],
    },
  ],
};
