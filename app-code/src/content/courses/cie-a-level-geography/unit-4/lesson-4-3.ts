import type { Lesson } from "../../../types.ts";

export const lesson543: Lesson = {
  id: "ciealgeo-u4-lesson-4-3",
  code: "4-3",
  title: "Geographical Enquiry and Essay Skills",
  goal: "I CAN structure geographical enquiries and write extended responses.",
  standards: ["Cambridge A Level Geography 9696", "Paper 3: enquiry"],
  
  vocabulary: [
    { term: "Geographical enquiry", definition: "Investigation of geographical question." },
    { term: "Hypothesis", definition: "Testable prediction." },
    { term: "Case study", definition: "Detailed examination of example." },
    { term: "Synthesis", definition: "Combining multiple perspectives." },
    { term: "Evaluation", definition: "Judging quality of analysis." },
    { term: "Significance", definition: "Historical/geographical importance." },
  ],
  concepts: [
    {
      id: "ciealgeo-u4-s3-enq",
      title: "Geographical enquiry",
      skill: "Conduct enquiries and write essays.",
      lesson: {
        sections: [
          {
            heading: "Enquiry process",
            body: "Question → hypothesis → data collection → analysis → conclusion → evaluation. Geographic questions often spatial: 'How does X vary with Y?'",
          },
          {
            heading: "Essay structure",
            body: "Introduction: context + argument. Body: points with evidence. Conclusion: answer question. PEEL: Point, Evidence, Explanation, Link.",
          },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→data→conclusion" },
          { name: "PEEL", statement: "essay structure" },
        ],
        workedExample: {
          problem: "Write enquiry plan for 'How does house price vary with distance from city centre?'",
          solution: "Hypothesis: prices decrease with distance. Data: house prices at locations + distances. Analysis: scatter graph, correlation. Conclusion: relationship strength/direction.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u4-enq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a geographical enquiry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Investigation of geographical question"
                    },
                    {
                              "id": "b",
                              "text": "A type of map"
                    },
                    {
                              "id": "c",
                              "text": "A data table"
                    },
                    {
                              "id": "d",
                              "text": "A statistical test"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enquiry",
                              "statement": "Investigation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enquiry = geographical investigation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Geographical investigation"
},
        },
        {
          id: "ciealgeo-u4-enq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is PEEL structure?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "PEEL",
                              "statement": "Essay structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Point, Evidence, Explanation, Link.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used for essay paragraphs.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Point, Evidence, Explanation, Link"
},
        },
        {
          id: "ciealgeo-u4-enq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you structure a geographical enquiry?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Enquiry",
                              "statement": "Process."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Question → hypothesis → data → analysis → conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Geographic questions often spatial.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evaluation essential.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question→data→conclusion"
},
        },
        {
          id: "ciealgeo-u4-enq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define enquiry, hypothesis, case study, synthesis, evaluation, significance. (b) What is enquiry? (c) What is hypothesis? (d) What is PEEL? (e) How structure enquiry? (f) What is case study? (g) What is synthesis? (h) Write enquiry plan for 'How does house price vary with distance from centre?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enquiry",
                              "statement": "Skills."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Investigation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Testable prediction.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) PEEL structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Question→data→conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Detailed example.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Combining perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid enquiry plan.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Geographical enquiry skills."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u4-enq-notes",
      title: "Enquiry — notes",
      summary: "Enquiry=question→hypothesis→data→conclusion. PEEL structure for essays.",
      sections: [
        { heading: "Key idea", body: "Geographical enquiry tests spatial relationships and patterns." },
        { heading: "Essays", body: "PEEL structure ensures clear argument with evidence." },
      ],
    },
  ],
};
