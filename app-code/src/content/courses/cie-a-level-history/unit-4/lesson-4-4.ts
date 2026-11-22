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
                              "text": "A map"
                    },
                    {
                              "id": "b",
                              "text": "A type of source"
                    },
                    {
                              "id": "c",
                              "text": "A statistical method"
                    },
                    {
                              "id": "d",
                              "text": "Investigation of historical question"
                    }
          ],
          "correctChoiceId": "d"
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
        {
          id: "ciealhis-u4-enq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step in conducting a historical enquiry is to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Write the conclusion"
                    },
                    {
                              "id": "b",
                              "text": "Choose an essay title at random"
                    },
                    {
                              "id": "c",
                              "text": "Publish the findings"
                    },
                    {
                              "id": "d",
                              "text": "Formulate a research question"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enquiry",
                              "statement": "Question first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Enquiry begins by formulating the question.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Formulate a research question"
},
        },
        {
          id: "ciealhis-u4-enq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The enquiry process — question, gather evidence, analyse, construct argument, evaluate — has how many stages?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Enquiry",
                              "statement": "Five stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Question, evidence, analysis, argument, evaluation — five stages.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealhis-u4-enq-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Synthesis in historical writing means:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeating a single viewpoint throughout"
                    },
                    {
                              "id": "b",
                              "text": "Listing facts without analysis"
                    },
                    {
                              "id": "c",
                              "text": "Shortening the essay"
                    },
                    {
                              "id": "d",
                              "text": "Combining multiple perspectives into a nuanced understanding"
                    }
          ],
          "correctChoiceId": "d"
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
                              "reasoning": "Synthesis combines perspectives into a nuanced argument.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Combining multiple perspectives"
},
        },
        {
          id: "ciealhis-u4-enq-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Nuance' in a historical argument refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Acknowledging subtle complexity and avoiding simplistic answers"
                    },
                    {
                              "id": "b",
                              "text": "Writing shorter paragraphs"
                    },
                    {
                              "id": "c",
                              "text": "Adding more facts"
                    },
                    {
                              "id": "d",
                              "text": "Using longer words"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nuance",
                              "statement": "Subtle complexity."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nuance acknowledges complexity rather than giving simplistic answers.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Subtle complexity"
},
        },
        {
          id: "ciealhis-u4-enq-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A historian gathers 4 primary sources and 3 secondary sources for an enquiry. How many sources does she have in total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 7
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sources",
                              "statement": "Gather evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 + 3 = 7 sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "ciealhis-u4-enq-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'counterfactual' question asks:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Who won the conflict"
                    },
                    {
                              "id": "b",
                              "text": "What definitely happened"
                    },
                    {
                              "id": "c",
                              "text": "What might have happened if events had been different"
                    },
                    {
                              "id": "d",
                              "text": "When events occurred"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Counterfactual",
                              "statement": "What might have happened."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counterfactuals explore alternative outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Alternative outcomes"
},
        },
        {
          id: "ciealhis-u4-enq-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The worked example on the Cold War weighs structural factors against contingency. How many broad categories of explanation does it identify?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Enquiry",
                              "statement": "Structural vs contingent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Structural factors and contingency — two categories.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealhis-u4-enq-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Context' in historical writing refers to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A statistical table"
                    },
                    {
                              "id": "b",
                              "text": "The historical background to events"
                    },
                    {
                              "id": "c",
                              "text": "The essay conclusion"
                    },
                    {
                              "id": "d",
                              "text": "A quotation from a source"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Context",
                              "statement": "Historical background."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Context is the background framing events.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Historical background"
},
        },
        {
          id: "ciealhis-u4-enq-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the strengths and limitations of writing about an event from only a single perspective.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Synthesis",
                              "statement": "Single perspective."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: clear, coherent, deep focus on one viewpoint.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitation: misses alternative interpretations and unintended consequences.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Limitation: risks bias and incomplete understanding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conclusion: synthesis of perspectives produces more nuanced judgement.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Coherent but incomplete; synthesis improves judgement"
},
        },
        {
          id: "ciealhis-u4-enq-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement best represents a balanced evaluative judgement in a history essay?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Repeating the strongest argument"
                    },
                    {
                              "id": "b",
                              "text": "Weighing competing interpretations against evidence before reaching a conclusion"
                    },
                    {
                              "id": "c",
                              "text": "Listing all facts without judgement"
                    },
                    {
                              "id": "d",
                              "text": "Choosing the simplest explanation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Balanced judgement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Evaluation weighs interpretations against evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** Weighing interpretations"
},
        },
        {
          id: "ciealhis-u4-enq-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An enquiry weighs 2 interpretations, each supported by 3 sources. How many sources support interpretations in total?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Sources",
                              "statement": "Count evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "2 interpretations x 3 sources = 6 sources.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "ciealhis-u4-enq-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that 'a rigorous historical enquiry can produce objective truth about the past.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Enquiry",
                              "statement": "Objectivity debate."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For: evidence-based enquiry, corroboration and evaluation approach objectivity.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Against: sources are biased, selection is inevitable, interpretation is unavoidable.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Evidence: historians disagree despite shared methods (e.g. WWI causes).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Weighs both perspectives.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "reasoning": "Judgement: enquiry produces well-supported interpretations, not absolute truth.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Enquiry approaches but cannot fully achieve objectivity"
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
