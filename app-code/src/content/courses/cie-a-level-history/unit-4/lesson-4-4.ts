import type { Lesson } from "../../../types.ts";

export const lesson644: Lesson = {
  id: "ciealhis-u4-lesson-4-4",
  code: "4-4",
  title: "Historical Enquiry and Synthesis",
  goal: "I CAN conduct historical enquiries and synthesise multiple perspectives.",
  standards: ["Cambridge A Level History 9489", "Paper 3: enquiry"],
  
  vocabulary: [
    { term: "Historical enquiry", definition: "Investigation of historical question." },
    { term: "Synthesis", definition: "Combining multiple perspectives." },
    { term: "Evaluation", definition: "Judging quality of arguments." },
    { term: "Context", definition: "Historical background." },
    { term: "Nuance", definition: "Subtle complexity." },
    { term: "Counterfactual", definition: "What might have happened." },
  ],
  concepts: [
    {
      id: "ciealhis-u4-s4-enq",
      title: "Historical enquiry",
      skill: "Conduct enquiries and synthesise perspectives.",
      lesson: {
        sections: [
          {
            heading: "Enquiry process",
            body: "Formulate question → gather evidence → analyse → construct argument → evaluate. Consider multiple interpretations.",
          },
          {
            heading: "Synthesis",
            body: "Combine different perspectives to create nuanced understanding. Acknowledge complexity, contradictions, unintended consequences.",
          },
        ],
        keyFormulas: [
          { name: "Enquiry", statement: "question→evidence→argument" },
          { name: "Synthesis", statement: "multiple perspectives" },
        ],
        workedExample: {
          problem: "Enquiry: 'Was the Cold War inevitable?' Synthesize perspectives.",
          solution: "Structural factors (ideology, power vacuum) made likely. But contingency (leadership decisions, accidents) could have prevented. Complex, not deterministic.",
        },
      },
      questions: [
        {
          id: "ciealhis-u4-enq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical enquiry?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Investigation of historical question"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A map"
                    },
                    {
                              "id": "d",
                              "text": "A statistical method"
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
                              "reasoning": "Enquiry = historical investigation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Historical investigation"
},
        },
        {
          id: "ciealhis-u4-enq-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is synthesis in historical writing?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Synthesis",
                              "statement": "Combining."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Combining multiple perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates nuanced understanding.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multiple perspectives"
},
        },
        {
          id: "ciealhis-u4-enq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you conduct a historical enquiry?",
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
                              "reasoning": "Question → evidence → argument → evaluation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consider multiple interpretations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Acknowledge complexity.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Question→evidence→argument"
},
        },
        {
          id: "ciealhis-u4-enq-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define enquiry, synthesis, evaluation, context, nuance, counterfactual. (b) What is enquiry? (c) What is synthesis? (d) How conduct enquiry? (e) What is counterfactual? (f) What is nuance? (g) How synthesize perspectives? (h) Conduct enquiry: 'Was the Cold War inevitable?'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enquiry",
                              "statement": "Synthesis."
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
                              "reasoning": "(c) Combining perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Question→evidence→argument.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) What might have happened.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Subtle complexity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Balance multiple viewpoints.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid enquiry with synthesis.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Historical enquiry synthesis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u4-enq-notes",
      title: "Enquiry — notes",
      summary: "Enquiry=question→evidence→argument. Synthesis combines perspectives.",
      sections: [
        { heading: "Key idea", body: "Good historical enquiries balance evidence, analysis, evaluation." },
        { heading: "Nuance", body: "Avoid simplistic answers — acknowledge complexity." },
      ],
    },
  ],
};
