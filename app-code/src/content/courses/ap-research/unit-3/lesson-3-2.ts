import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apr-u3-lesson-3-2",
  code: "3-2",
  title: "Oral Defense",
  goal: "I CAN present and defend research effectively under questioning.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Oral defense", definition: "Formal presentation defending research to committee — demonstrates mastery." },
    { term: "Research question", definition: "Central inquiry guiding entire project — must be clearly stated." },
    { term: "Methodology justification", definition: "Explaining why methods chosen — demonstrates design understanding." },
    { term: "Limitations", definition: "Acknowledging study constraints — intellectual honesty." },
    { term: "Implications", definition: "Significance of findings — 'so what?' answer." },
    { term: "Anticipating questions", definition: "Preparing for committee challenges — research weaknesses." },
  ],
  concepts: [
    {
      id: "apr-u3-oral-defense",
      title: "Defending research",
      skill: "Present research and handle questioning effectively.",
      lesson: {
        sections: [
          {
            heading: "Defense structure",
            body: "State research question → Methods → Key findings → Implications → Limitations → Thank committee; be prepared for questions on every aspect.",
          },
          {
            heading: "Handling questions",
            body: "Listen fully, clarify if needed, answer honestly (including 'I don't know but would investigate X'), connect back to research question, stay composed.",
          },
        ],
        keyFormulas: [
          { name: "Defense structure", statement: "Question → Methods → Findings → Implications → Limitations" },
          { name: "Question handling", statement: "Listen → Clarify → Answer honestly → Connect to research" },
        ],
        workedExample: {
          problem: "Committee asks 'Why didn't you use larger sample?'",
          solution: "Acknowledge limitation honestly: 'You're right — larger sample would strengthen findings. I was constrained by [time/resources], but this is a limitation I acknowledge and suggest for future research.'",
        },
      },
      questions: [
        {
          id: "apr-u3-oral-defense-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Acknowledging limitations in defense demonstrates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "weakness"
                    },
                    {
                              "id": "b",
                              "text": "intellectual honesty and research maturity"
                    },
                    {
                              "id": "c",
                              "text": "lack of confidence"
                    },
                    {
                              "id": "d",
                              "text": "failure"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Oral defense",
                              "statement": "Honesty strengthens credibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Acknowledging limitations demonstrates intellectual honesty — no research is perfect; recognizing constraints shows maturity and builds credibility with committee.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Intellectual honesty",
          "commonErrors": [
                    "Thinking limitations undermine — they demonstrate maturity."
          ]
},
        },
        {
          id: "apr-u3-oral-defense-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "When asked a question you don't know, best response is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "make up answer"
                    },
                    {
                              "id": "b",
                              "text": "acknowledge and explain what you would investigate"
                    },
                    {
                              "id": "c",
                              "text": "change subject"
                    },
                    {
                              "id": "d",
                              "text": "say 'I don't know' and stop"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Question handling",
                              "statement": "Honest acknowledgment + path forward."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Best response: acknowledge honestly ('I don't know but would investigate X') — demonstrates integrity and intellectual curiosity; making up answers destroys credibility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "'I don't know but would investigate X' shows research thinking even in uncertainty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Acknowledge + path forward",
          "commonErrors": [
                    "Making up answers — destroys credibility."
          ]
},
        },
        {
          id: "apr-u3-oral-defense-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If defense is 15 minutes and you spend 3 on intro, 8 on findings, 2 on implications, how many minutes for Q&A? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Minutes",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$15 - 3 - 8 - 2 = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$15 - 3 - 8 - 2 = 2$ minutes for Q&A.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Arithmetic errors."
          ]
},
        },
        {
          id: "apr-u3-oral-defense-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to structure an effective oral defense presentation. What elements are essential?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Oral defense",
                              "statement": "Structure + content."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Essential elements: research question (what you investigated), methods (how), key findings (what you found), implications (why it matters), limitations (honest constraints) — tells complete research story.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Structure: introduction (context + question) → methods (brief) → findings (main results) → discussion (interpretation + implications) → limitations (honest acknowledgment) → conclusion (return to question).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Time management: allocate time proportionally — more on findings/implications than methods; leave buffer for questions; practice timing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Essential: question, methods, findings, implications, limitations",
          "commonErrors": [
                    "Missing key elements — incomplete story."
          ]
},
        },
        {
          id: "apr-u3-oral-defense-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how committee questioning reveals research quality. What do effective answers demonstrate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Defense as assessment",
                              "statement": "Questions test mastery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Committee questions probe depth — 'Why this method?' tests design understanding; 'What are limitations?' tests honesty; 'What would you do differently?' tests reflection — each reveals mastery level.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Effective answers demonstrate: understanding (not just reciting), honesty (acknowledging limits), critical thinking (reflecting on alternatives), confidence (composure under pressure) — mastery beyond memorization.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Poor answers: defensive, dismissive, or fabricated — reveal gaps; good answers turn questions into opportunities to demonstrate depth — 'that's an excellent point I hadn't considered, which suggests future research on X.'",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: defense assesses whether researcher truly understands work — effective answers demonstrate mastery, honesty, and intellectual engagement; preparation and composure are essential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Defense tests mastery — effective answers show understanding not memorization",
          "commonErrors": [
                    "Treating as formality — it's substantive assessment."
          ]
},
        },
      ],
    },
  ],
};
