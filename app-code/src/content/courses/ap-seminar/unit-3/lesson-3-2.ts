import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "apsm-u3-lesson-3-2",
  code: "3-2",
  title: "Collaboration and Presentation",
  goal: "I CAN collaborate effectively on research and present findings clearly.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Collaborative research", definition: "Team-based inquiry requiring coordination, division of labor, and shared accountability." },
    { term: "Division of labor", definition: "Assigning tasks based on strengths/interests — efficient teamwork." },
    { term: "Consensus building", definition: "Reaching agreement through discussion — essential for group decisions." },
    { term: "Presentation", definition: "Communicating research clearly to audience — structure, visuals, delivery." },
    { term: "Q&A", definition: "Responding to questions — demonstrates mastery and handles challenges." },
    { term: "Team contract", definition: "Agreement on roles, deadlines, expectations — prevents conflicts." },
  ],
  concepts: [
    {
      id: "apsm-u3-collaboration-presentation",
      title: "Working together",
      skill: "Collaborate effectively and present research clearly.",
      lesson: {
        sections: [
          {
            heading: "Collaboration essentials",
            body: "Clear roles, regular communication, shared deadlines; team contracts prevent conflicts; consensus requires compromise.",
          },
          {
            heading: "Presentation skills",
            body: "Structure (intro → findings → implications), visuals support (not replace) content, practice delivery, prepare for Q&A.",
          },
        ],
        keyFormulas: [
          { name: "Team success", statement: "Clear roles + communication + shared accountability" },
          { name: "Presentation structure", statement: "Context → Findings → Implications → Q&A" },
        ],
        workedExample: {
          problem: "Design team contract for research project",
          solution: "Define roles (researcher, writer, presenter), deadlines for drafts, communication method, decision-making process, conflict resolution — prevents 'I thought YOU were doing that.'",
        },
      },
      questions: [
        {
          id: "apsm-u3-collaboration-presentation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A team contract helps groups by ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "avoiding all conflict"
                    },
                    {
                              "id": "b",
                              "text": "establishing clear roles, deadlines, and expectations"
                    },
                    {
                              "id": "c",
                              "text": "eliminating work"
                    },
                    {
                              "id": "d",
                              "text": "making work optional"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Team contract",
                              "statement": "Agreement on roles and expectations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Team contracts establish clear roles, deadlines, communication methods, and expectations — preventing misunderstandings about who does what.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Clear roles + expectations",
          "commonErrors": [
                    "Thinking it eliminates work — it organizes it."
          ]
},
        },
        {
          id: "apsm-u3-collaboration-presentation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Effective research presentation should ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "read slides verbatim"
                    },
                    {
                              "id": "b",
                              "text": "structure findings clearly and engage audience"
                    },
                    {
                              "id": "c",
                              "text": "avoid visuals"
                    },
                    {
                              "id": "d",
                              "text": "rush through content"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Presentation",
                              "statement": "Structure + engagement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Effective presentations structure findings (context → evidence → implications), use visuals to support not replace, engage audience, and handle Q&A confidently — not reading slides.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Practice and preparation are essential.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Clear structure + engagement",
          "commonErrors": [
                    "Confusing presentation with reading."
          ]
},
        },
        {
          id: "apsm-u3-collaboration-presentation-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 20-minute presentation allocates 4 min intro, 10 min findings, 4 min implications. How many minutes remain for Q&A? Enter the number.",
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
                              "statement": "$20 - 4 - 10 - 4 = 2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$20 - 4 - 10 - 4 = 2$ minutes for Q&A.",
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
                    "Forgetting to subtract one allocation."
          ]
},
        },
        {
          id: "apsm-u3-collaboration-presentation-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how division of labor improves collaborative research while maintaining quality. What are the risks?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Collaboration",
                              "statement": "Specialization vs. coordination."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division of labor lets team members specialize — researcher finds sources, writer drafts, editor checks — efficient use of strengths; parallel work saves time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Risks: uneven contribution ('free riders'), coordination failures (mismatched assumptions), quality inconsistency (different standards); requires clear communication and shared standards.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Mitigation: regular check-ins, shared documents, peer review within team, clear quality standards — ensures division improves rather than fragments work.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Division improves efficiency but requires coordination",
          "commonErrors": [
                    "Assuming division automatically works — needs management."
          ]
},
        },
        {
          id: "apsm-u3-collaboration-presentation-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze what makes Q&A sessions valuable for both presenters and audiences. How should presenters handle difficult questions?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Q&A value",
                              "statement": "Testing and learning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "For presenters: Q&A tests mastery — reveals gaps, challenges assumptions; demonstrates confidence and expertise; feedback improves future work.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "For audiences: Q&A surfaces unanswered questions, alternative perspectives; provides clarification; engages critically with material.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Handling difficult questions: acknowledge uncertainty honestly ('I don't know but would investigate X'); distinguish between clarifying questions and challenges; stay composed; use 'great question' technique to buy thinking time.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Q&A is essential academic practice — tests understanding, engages audiences, improves work; difficult questions are opportunities to demonstrate intellectual honesty.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Q&A tests mastery and engages audiences — difficult questions are opportunities",
          "commonErrors": [
                    "Dreading difficult questions — they're learning opportunities."
          ]
},
        },
      ],
    },
  ],
};
