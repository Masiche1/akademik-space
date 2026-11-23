import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "el10-u6-lesson-6-3",
  code: "6-3",
  title: "Exam Technique for Comparison Questions",
  goal: "I CAN plan, structure and write high-level comparison answers under exam conditions.",
  standards: ["4EA1 Paper 2", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3", "4EA1 AO4"],
  
  vocabulary: [
    { term: "Comparison question", definition: "An exam question requiring analysis of similarities and differences between texts." },
    { term: "Integrated paragraph", definition: "A paragraph that discusses both texts together on one point." },
    { term: "Comparative connective", definition: "Linking words showing relationship: 'whereas', 'similarly', 'both', 'in contrast'." },
    { term: "PEE paragraph", definition: "Point, Evidence, Explanation — the basic analytical paragraph structure." },
    { term: "Time management", definition: "Allocating exam time across questions to complete all parts." },
    { term: "Self-check", definition: "Reviewing an answer for AO coverage, evidence and clarity before time ends." },
  ],
  concepts: [
    {
      id: "el10-u6-planning",
      title: "Planning a comparison answer",
      skill: "Plan integrated comparative paragraphs that cover language, structure and evaluation.",
      lesson: {
        sections: [
          {
            heading: "The integrated paragraph",
            body: "A strong comparison paragraph makes **one point** about **both texts** together: 'Whereas the critic uses measured judgement ('competent'), the blogger uses emphatic enthusiasm ('10/10').' This is integrated comparison — not Text A paragraph followed by Text B paragraph. Use 'whereas', 'similarly', 'both', 'in contrast' to weave them together.",
          },
          {
            heading: "What to compare",
            body: "Plan points across **language** (word choice, tone, imagery), **structure** (openings, organisation, endings) and **purpose/audience** (who each writer addresses and why). Aim for 3-4 integrated paragraphs for a 10-mark comparison. Each paragraph = one point + evidence from both texts + explanation of the difference/similarity.",
          },
          {
            heading: "Planning before writing",
            body: "Spend 3-5 minutes planning: identify 3-4 comparison points, note one quotation from each text per point, and decide your overall judgement. Planning prevents the common error of writing two separate analyses or running out of time.",
          },
        ],
        keyFormulas: [
          { name: "Integrated paragraph", statement: "One point about both texts, woven with 'whereas', 'similarly', 'both'." },
          { name: "Comparison points", statement: "Language, structure, purpose/audience — 3-4 integrated paragraphs." },
          { name: "Planning", statement: "3-5 minutes: points, quotations, judgement." },
        ],
        workedExample: {
          problem: "Plan a comparison of the two café reviews in three integrated paragraphs.",
          solution: "Paragraph 1 (language): critic's 'competent' vs blogger's '10/10' — measured vs enthusiastic. Paragraph 2 (structure): critic's balanced verdict vs blogger's personal pledge — judgement vs recommendation. Paragraph 3 (purpose/audience): critic informs skeptics; blogger recommends to enthusiasts. Each paragraph quotes both texts and explains the difference.",
        },
      },
      questions: [
        {
          id: "el10-u6-planning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an integrated comparison paragraph?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A paragraph about Text A followed by a paragraph about Text B"
                    },
                    {
                              "id": "b",
                              "text": "A paragraph that discusses both texts together on one point"
                    },
                    {
                              "id": "c",
                              "text": "A paragraph listing similarities only"
                    },
                    {
                              "id": "d",
                              "text": "A paragraph with no evidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Integrated comparison",
                              "statement": "Both texts discussed together on one point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Integration means weaving both texts into each point, not separating them.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** Both texts together on one point.",
          "commonErrors": [
                    "Choosing the separate-paragraphs option."
          ]
},
        },
        {
          id: "el10-u6-planning-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why 'Text A says X. Text B says Y.' is a weak comparison and how to improve it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Integrated comparison",
                              "statement": "Weak comparison separates; strong comparison relates."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Separating texts into two statements does not show the relationship between them.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Improve by weaving together: 'Whereas Text A says X, Text B says Y, showing...'",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Separate statements don't compare; weave both texts with 'whereas' and explain the difference.",
          "commonErrors": [
                    "Thinking side-by-side mention equals comparison."
          ]
},
        },
        {
          id: "el10-u6-planning-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three areas you should compare when writing a comparison answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Comparison coverage",
                              "statement": "Language, structure and purpose are core areas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Language: word choice, tone, imagery, register.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Structure: openings, paragraph organisation, endings.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Purpose/audience: who each writer addresses and why.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Language, structure and purpose/audience.",
          "commonErrors": [
                    "Comparing only content, not methods."
          ]
},
        },
        {
          id: "el10-u6-planning-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain the planning process for a 10-mark comparison question and why each step matters.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exam planning",
                              "statement": "Structured planning prevents common errors."
                    },
                    {
                              "kind": "technique",
                              "name": "Integrated paragraphs",
                              "statement": "Planning ensures both texts appear in each point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Identify 3-4 comparison points across language, structure and purpose — ensures coverage.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Note one quotation from each text per point — ensures evidence is ready.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Decide an overall judgement — prepares for the evaluative conclusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Planning prevents writing two separate analyses or running out of time.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "3-5 minutes of planning saves time and improves structure.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Plan 3-4 points, gather quotations, decide judgement — prevents separate analyses and time pressure.",
          "commonErrors": [
                    "Starting to write without planning."
          ]
},
        },
        {
          id: "el10-u6-planning-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student writes: 'The critic says the coffee is excellent. The blogger says it is the best.' Analyse why this is a weak comparison and rewrite it as an integrated paragraph.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Integrated comparison",
                              "statement": "Weak comparison separates; strong comparison relates and explains."
                    },
                    {
                              "kind": "skill",
                              "name": "Analysis",
                              "statement": "Comparison requires explaining the significance of differences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The student's version separates the texts and does not explain the difference.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "It misses the point: 'excellent' is measured judgement; 'the best' is emphatic enthusiasm.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Rewrite: 'Whereas the critic praises the coffee as 'excellent' — measured, expert judgement — the blogger exclaims it is 'the best coffee I have had', conveying personal enthusiasm rather than objective evaluation.'",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The rewrite uses 'whereas' to relate, quotes both, and explains the tonal difference.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "This integrated approach earns higher marks because it analyses the relationship.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Separate statements don't compare; weave with 'whereas', quote both, and explain the tonal difference.",
          "commonErrors": [
                    "Quoting both texts without explaining the relationship."
          ]
},
        },
        {
          id: "el10-u6-planning-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You are planning a comparison of the two café reviews. Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "List three comparison points you would plan.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Write one integrated comparative sentence about the reviews' tone.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain why integrated paragraphs score higher than separate analyses.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe how you would use the final two minutes to check your answer.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Integrated comparison",
                              "statement": "Weaving both texts into each point shows analytical skill."
                    },
                    {
                              "kind": "skill",
                              "name": "Exam technique",
                              "statement": "Planning and checking maximise marks."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Language: 'competent' vs '10/10' — measured vs enthusiastic.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Structure: balanced verdict vs personal pledge.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Purpose/audience: informs skeptics vs recommends to enthusiasts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "'Whereas the critic's tone is measured and evaluative, the blogger's is breathless and enthusiastic.'",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Uses 'whereas' to relate the two tones.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Quotes or references both texts with analysis.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Integrated paragraphs show the relationship between texts, which is what comparison assesses.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Separate analyses describe each text but miss the analytical skill of relating them.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Check both texts are referenced in each paragraph and comparative connectives are used.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Verify the conclusion judges effectiveness and that quotations are accurate.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Language, structure, purpose/audience. (b) Integrated sentence with 'whereas' and analysis. (c) Integration shows relationship. (d) Check both texts appear, connectives used, judgement supported.",
          "commonErrors": [
                    "Planning separate analyses.",
                    "Forgetting to check both texts are referenced."
          ]
},
        },
      ],
    },
    {
      id: "el10-u6-exam-technique",
      title: "Writing under timed conditions",
      skill: "Manage time, cover assessment objectives and self-check comparison answers in exams.",
      lesson: {
        sections: [
          {
            heading: "Time management",
            body: "For a 10-mark comparison, spend about **5 minutes planning** and **15-20 minutes writing**. Do not spend equal time on both texts — integrated paragraphs cover both simultaneously. If time runs short, ensure each paragraph still references both texts rather than completing only Text A thoroughly.",
          },
          {
            heading: "Covering the assessment objectives",
            body: "Strong answers cover **AO1** (understanding the texts), **AO2** (analysing methods), **AO3** (comparing) and **AO4** (evaluating). Ensure at least one paragraph analyses methods, one compares, and the conclusion evaluates. Missing AO3 (comparison) or AO4 (evaluation) caps the mark.",
          },
          {
            heading: "The final check",
            body: "In the last 2 minutes: (1) does every paragraph mention BOTH texts? (2) are comparative connectives used? (3) is there a clear judgement in the conclusion? (4) are quotations accurate? Fix any 'Text A / Text B' separations by adding 'whereas' links.",
          },
        ],
        keyFormulas: [
          { name: "Time split", statement: "5 min plan + 15-20 min write for a 10-mark comparison." },
          { name: "AO coverage", statement: "AO1 understanding, AO2 methods, AO3 comparison, AO4 evaluation." },
          { name: "Final check", statement: "Both texts in each paragraph, connectives, judgement, accurate quotes." },
        ],
        workedExample: {
          problem: "A student has 20 minutes left and has written two paragraphs only about Text A. What should they do?",
          solution: "Immediately stop expanding Text A and write integrated paragraphs: add Text B evidence to existing points using 'whereas', then write one new paragraph covering both texts on structure. Ensure the conclusion judges both. This recovers AO3 marks even if the answer is shorter.",
        },
      },
      questions: [
        {
          id: "el10-u6-exam-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How much time should you spend planning a 10-mark comparison question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1 minute"
                    },
                    {
                              "id": "b",
                              "text": "About 5 minutes"
                    },
                    {
                              "id": "c",
                              "text": "10 minutes"
                    },
                    {
                              "id": "d",
                              "text": "No planning needed"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Time management",
                              "statement": "Planning time prevents poor structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "5 minutes of planning ensures coverage and integrated structure.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "**(b)** About 5 minutes.",
          "commonErrors": [
                    "Skipping planning or spending too long on it."
          ]
},
        },
        {
          id: "el10-u6-exam-technique-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why integrated paragraphs are more time-efficient than separate analyses.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Integrated paragraphs",
                              "statement": "Both texts covered simultaneously."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "One integrated paragraph covers both texts at once, halving the writing needed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Separate analyses require double the paragraphs for the same coverage.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Integrated paragraphs cover both texts in one, saving time and improving marks.",
          "commonErrors": [
                    "Thinking separate analyses are clearer rather than slower."
          ]
},
        },
        {
          id: "el10-u6-exam-technique-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three things to check in the final two minutes of a comparison answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Self-check",
                              "statement": "Final checks catch structural and coverage errors."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Every paragraph references BOTH texts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Comparative connectives ('whereas', 'similarly') are used.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The conclusion contains a clear judgement/evaluation.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "finalAnswer": "Both texts referenced, connectives used, judgement present.",
          "commonErrors": [
                    "Checking spelling but not structural coverage."
          ]
},
        },
        {
          id: "el10-u6-exam-technique-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student's comparison answer analyses Text A thoroughly but barely mentions Text B. Explain the mark impact and how to fix it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "AO coverage",
                              "statement": "Missing comparison caps the mark."
                    },
                    {
                              "kind": "technique",
                              "name": "Integrated comparison",
                              "statement": "Both texts must appear in each point."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AO3 (comparison) is barely evidenced — the answer describes rather than compares.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "This caps the mark regardless of how well Text A is analysed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Fix: add Text B evidence to each existing paragraph using 'whereas'.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Write one new integrated paragraph covering both texts on structure or purpose.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Ensure the conclusion judges both texts, not just Text A.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "4-5",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Missing Text B caps AO3 marks; fix by adding 'whereas' links and one integrated paragraph on both texts.",
          "commonErrors": [
                    "Expanding Text A further instead of integrating Text B."
          ]
},
        },
        {
          id: "el10-u6-exam-technique-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how to ensure all assessment objectives (AO1-AO4) are covered in a comparison answer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "AO coverage",
                              "statement": "Each assessment objective needs evidence."
                    },
                    {
                              "kind": "technique",
                              "name": "Balanced coverage",
                              "statement": "Plan paragraphs to hit each AO."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "AO1 (understanding): show accurate knowledge of both texts' content.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "AO2 (methods): analyse language, structure and form in both texts.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "AO3 (comparison): use integrated paragraphs with 'whereas' throughout.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "AO4 (evaluation): conclude with a justified judgement on effectiveness.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "reasoning": "Plan one paragraph per AO area to ensure none is missed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The final check verifies each AO has clear evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "levels": [
                    {
                              "level": "Level 3",
                              "marks": "5-6",
                              "descriptor": "Perceptive, secure and well-developed answer with precise terminology and integrated evidence."
                    },
                    {
                              "level": "Level 2",
                              "marks": "3-4",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "level": "Level 1",
                              "marks": "1-2",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "Cover AO1 understanding, AO2 methods, AO3 comparison and AO4 evaluation; plan and check each.",
          "commonErrors": [
                    "Covering AO2 well but forgetting AO3 comparison or AO4 evaluation."
          ]
},
        },
        {
          id: "el10-u6-exam-technique-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You have 20 minutes to write a comparison of the two café reviews. Answer the questions that follow.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State how you would spend the 5-minute planning time.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe the structure of your answer (how many paragraphs, what each covers).",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Explain how you would ensure both texts are covered in every paragraph.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Describe your final two-minute check.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Exam technique",
                              "statement": "Planning, structure and checking maximise marks."
                    },
                    {
                              "kind": "technique",
                              "name": "Integrated comparison",
                              "statement": "Both texts in each point."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Identify 3-4 comparison points (language, structure, purpose).",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Note one quotation from each text per point.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "a",
                              "reasoning": "Decide an overall judgement for the conclusion.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "3-4 integrated paragraphs: language, structure, purpose/audience.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each paragraph: one point + both texts' evidence + explanation.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Conclusion: justified judgement on effectiveness.",
                              "marks": 1,
                              "markCode": "AO4"
                    },
                    {
                              "part": "c",
                              "reasoning": "Use 'whereas', 'similarly', 'both' to weave both texts into each point.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Check each paragraph has a quotation or reference from BOTH texts.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Verify both texts appear in every paragraph and connectives are used.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "d",
                              "reasoning": "Confirm conclusion judges effectiveness and quotations are accurate.",
                              "marks": 1,
                              "markCode": "AO4"
                    }
          ],
          "levels": [
                    {
                              "part": "a",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "a",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "b",
                              "level": "Level 2",
                              "marks": "1-3",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "b",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "c",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "c",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    },
                    {
                              "part": "d",
                              "level": "Level 2",
                              "marks": "1-2",
                              "descriptor": "Clear, relevant points with some development and supporting detail."
                    },
                    {
                              "part": "d",
                              "level": "Level 1",
                              "marks": "1-1",
                              "descriptor": "Simple or partial points; limited development or relevance."
                    }
          ],
          "finalAnswer": "(a) Plan points, quotations, judgement. (b) 3-4 integrated paragraphs + conclusion. (c) Use 'whereas' and check both texts appear. (d) Check coverage, connectives, judgement, quotes.",
          "commonErrors": [
                    "Planning separate analyses.",
                    "Not checking both texts appear in each paragraph."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "el10-u6-exam-technique-notes",
      title: "Comparison exam technique — notes",
      summary: "Plan 3-4 integrated points; use 'whereas' to weave both texts; cover AO1-AO4; check both texts appear in every paragraph.",
      sections: [
        { heading: "Key idea", body: "Integrated comparison — one point about both texts — scores higher than separate analyses." },
        { heading: "Planning", body: "5 minutes: 3-4 points, quotations from both texts, overall judgement." },
        { heading: "Checking", body: "Verify both texts in each paragraph, connectives used, conclusion judges, quotes accurate." },
      ],
    },
  ],
};
