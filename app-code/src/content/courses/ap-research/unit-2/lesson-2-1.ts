import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "apr-u2-lesson-2-1",
  code: "2-1",
  title: "Research Paper Structure",
  goal: "I CAN structure academic papers with proper IMRaD format and citations.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "IMRaD", definition: "Introduction, Methods, Results, Discussion — standard research paper structure." },
    { term: "Abstract", definition: "Concise summary of entire paper — ~250 words covering all sections." },
    { term: "Introduction", definition: "Context, literature review, research question, hypothesis." },
    { term: "Methods", definition: "Detailed procedures enabling replication — who, what, how." },
    { term: "Results", definition: "Presentation of findings — data, statistics, figures; no interpretation." },
    { term: "Discussion", definition: "Interpretation of results, implications, limitations, future research." },
  ],
  concepts: [
    {
      id: "apr-u2-paper-structure",
      title: "Structuring research papers",
      skill: "Apply IMRaD structure to organize academic research.",
      lesson: {
        sections: [
          {
            heading: "IMRaD structure",
            body: "Introduction (why research matters, what's known, gap, question) → Methods (how conducted) → Results (what found) → Discussion (what it means, implications, limitations).",
          },
          {
            heading: "Each section has distinct purpose — don't mix findings with interpretation (Results vs. Discussion); methods must enable replication.",
            body: undefined,
          },
        ],
        keyFormulas: [
          { name: "IMRaD", statement: "Introduction / Methods / Results / Discussion" },
          { name: "Section purposes", statement: "Context / Procedure / Findings / Interpretation" },
        ],
        workedExample: {
          problem: "Where does 'we hypothesized X' go?",
          solution: "Introduction — states research question and hypothesis after establishing context and gap; Methods describes how tested; Results shows what found; Discussion interprets.",
        },
      },
      questions: [
        {
          id: "apr-u2-paper-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "IMRaD stands for ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Ideas, Methods, Results, and Data"
                    },
                    {
                              "id": "b",
                              "text": "Introduction, Methods, Results, Discussion"
                    },
                    {
                              "id": "c",
                              "text": "Information, Materials, Research, and Details"
                    },
                    {
                              "id": "d",
                              "text": "Initial, Middle, Results, and Done"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "IMRaD",
                              "statement": "Standard paper structure acronym."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "IMRaD = Introduction, Methods, Results, Discussion — standard structure for empirical research papers.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Introduction-Meth­ods-Results-Discussion",
          "commonErrors": [
                    "Memorizing wrong expansion."
          ]
},
        },
        {
          id: "apr-u2-paper-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The Results section should contain ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "interpretation"
                    },
                    {
                              "id": "b",
                              "text": "data and findings without interpretation"
                    },
                    {
                              "id": "c",
                              "text": "literature review"
                    },
                    {
                              "id": "d",
                              "text": "methods"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "IMRaD sections",
                              "statement": "Results = findings only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Results section presents findings — data, statistics, figures — without interpretation; interpretation belongs in Discussion. Mixing them confuses readers.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Results = what found; Discussion = what it means.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Data/findings without interpretation",
          "commonErrors": [
                    "Including interpretation in Results."
          ]
},
        },
        {
          id: "apr-u2-paper-structure-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a 5,000-word paper has Methods=800, Results=1,200, Discussion=1,500, Introduction=1,000, Abstract=250, how many words unaccounted? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Words",
                              "answer": 250
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$5000 - 800 - 1200 - 1500 - 1000 - 250 = 250$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5000 - (800+1200+1500+1000+250) = 5000 - 4750 = 250$ unaccounted words.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $250$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "250",
          "commonErrors": [
                    "Arithmetic errors."
          ]
},
        },
        {
          id: "apr-u2-paper-structure-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the Methods section must enable replication. What details are essential?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Methods section",
                              "statement": "Replication requirement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Replication requires others to repeat study and get similar results — Methods must describe procedures in enough detail: sample (who), materials (what), procedure (how), analysis (statistics used).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Essential details: participant recruitment/selection criteria, materials/instruments used, step-by-step procedures, statistical analyses, ethical approvals — anything affecting results.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Without adequate methods, findings can't be verified or replicated — undermines credibility; 'we did a survey' is insufficient — need sample size, questions, analysis.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Methods must enable replication — detail is essential",
          "commonErrors": [
                    "Vague methods — 'we surveyed students' insufficient."
          ]
},
        },
        {
          id: "apr-u2-paper-structure-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze the relationship between Introduction and Discussion sections. How do they frame the research?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Introduction-Discussion link",
                              "statement": "Framing research arc."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Introduction frames research: establishes context, reviews literature, identifies gap, states question/hypothesis — sets up what will be investigated and why it matters.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Discussion closes the loop: interprets results in context of literature, explains whether hypothesis supported, discusses implications, acknowledges limitations, suggests future research — answers questions Introduction raised.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They should mirror each other — Introduction's claims should be addressed in Discussion; gaps identified should be filled (or explained why not); questions raised should be answered.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Introduction and Discussion form research arc — Introduction poses questions, Discussion answers them; misalignment between them signals flawed research design or execution.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Introduction poses questions; Discussion answers them — they must align",
          "commonErrors": [
                    "Treating them as separate — they form continuous arc."
          ]
},
        },
      ],
    },
  ],
};
