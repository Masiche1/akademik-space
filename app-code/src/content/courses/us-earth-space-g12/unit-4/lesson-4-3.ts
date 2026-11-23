import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "ess12-u4-lesson-4-3",
  code: "4-3",
  title: "Climate Science and Modeling",
  goal: "I CAN explain how climate models work and evaluate climate evidence.",
  standards: ["HS-ESS2-4", "HS-ESS2-5", "HS-ESS2-6"],
  vocabulary: [
    { term: "Climate model", definition: "Computer simulation of climate." },
    { term: "Greenhouse gas", definition: "Heat-trapping gas." },
    { term: "Radiative forcing", definition: "Energy imbalance driver." },
    { term: "Climate sensitivity", definition: "Warming per CO2 doubling." },
    { term: "Projection", definition: "Future climate estimate." },
  ],
  concepts: [
    {
      id: "ess12-u4-climate-modeling",
      title: "Climate science and modeling",
      skill: "Explain climate models and evidence.",
      lesson: {
        sections: [
          {
            heading: "How models work",
            body: "Climate models are computer simulations incorporating physics, chemistry and biology — solar input, greenhouse gases, ocean circulation, ice dynamics. They reproduce past climate and project future under different emissions scenarios.",
          },
          {
            heading: "Evidence and confidence",
            body: "Multiple independent lines of evidence agree: temperature records, ice cores, satellite data, ocean heat content. Model projections consistently show warming with rising CO2 — high scientific confidence in human-caused climate change.",
          },
        ],
        keyFormulas: [
          { name: "Model", statement: "Physics simulation." },
          { name: "GHG", statement: "Heat-trapping." },
          { name: "Forcing", statement: "Energy imbalance." },
        ],
        workedExample: {
          problem: "Why do scientists trust climate models?",
          solution: "They successfully reproduce past climate changes and multiple independent evidence sources confirm their projections.",
        },
      },
      questions: [
        {
          id: "ess12-u4-climate-modeling-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A climate model is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a weather forecast"
                    },
                    {
                              "id": "b",
                              "text": "a computer simulation of climate"
                    },
                    {
                              "id": "c",
                              "text": "a physical globe"
                    },
                    {
                              "id": "d",
                              "text": "a guess"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Climate model",
                              "statement": "Computer simulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Climate models are computer simulations incorporating physical processes to project climate.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** a computer simulation of climate",
          "commonErrors": [
                    "Confusing with weather forecasts."
          ]
},
        },
        {
          id: "ess12-u4-climate-modeling-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is evidence for human-caused climate change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "single hot day"
                    },
                    {
                              "id": "b",
                              "text": "decades of warming trend + rising CO2"
                    },
                    {
                              "id": "c",
                              "text": "cold winter"
                    },
                    {
                              "id": "d",
                              "text": "one storm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence",
                              "statement": "Long-term trend + mechanism."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Decades of temperature records showing warming, combined with measured CO2 increases and known physics, provide strong evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** decades of warming trend + rising CO2",
          "commonErrors": [
                    "Using weather events as evidence."
          ]
},
        },
        {
          id: "ess12-u4-climate-modeling-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Climate models use 4 evidence types mentioned: temperature, ice cores, satellite, ocean heat. How many?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Types",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count evidence types."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 types.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counting only one."
          ]
},
        },
        {
          id: "ess12-u4-climate-modeling-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why climate models give different future projections and what that uncertainty means for decision-making.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Scenario",
                              "statement": "Different emission pathways."
                    },
                    {
                              "kind": "skill",
                              "name": "Uncertainty",
                              "statement": "Range of possible futures."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Models project different futures based on emissions scenarios — high vs low CO2 pathways give different warming. Uncertainty is in magnitude, not direction: all scenarios show warming. Decision-makers use the range to plan for multiple possibilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Explains scenario dependence and uncertainty nature.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Different emissions → different futures; warming certain, magnitude varies.**",
          "commonErrors": [
                    "Saying models disagree on warming itself."
          ]
},
        },
      ],
    },
  ],
};
