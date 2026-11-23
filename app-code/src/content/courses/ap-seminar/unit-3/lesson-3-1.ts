import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "apsm-u3-lesson-3-1",
  code: "3-1",
  title: "Academic Writing",
  goal: "I CAN write clear, well-structured academic prose with proper citation.",
  standards: ["Unit 3"],
  vocabulary: [
    { term: "Academic register", definition: "Formal tone, precise language, evidence-based claims — distinct from casual writing." },
    { term: "Thesis statement", definition: "Clear, arguable claim guiding essay — usually in introduction." },
    { term: "Topic sentence", definition: "Sentence stating paragraph's main idea — often first sentence." },
    { term: "Citation", definition: "Attributing sources — APA, MLA, Chicago formats." },
    { term: "Plagiarism", definition: "Using others' work without attribution — serious academic violation." },
    { term: "Revision", definition: "Iterative improvement process — drafting, feedback, editing." },
  ],
  concepts: [
    {
      id: "apsm-u3-academic-writing",
      title: "Academic writing essentials",
      skill: "Write clear, well-cited academic prose.",
      lesson: {
        sections: [
          {
            heading: "Writing structure",
            body: "Introduction (context + thesis) → Body (evidence paragraphs) → Conclusion (synthesis + implications); topic sentences guide readers; transitions connect ideas.",
          },
          {
            heading: "Citation practices",
            body: "Proper citation prevents plagiarism and enables verification; different disciplines use different formats (APA for social sciences, MLA for humanities, Chicago for history).",
          },
        ],
        keyFormulas: [
          { name: "Essay structure", statement: "Intro + thesis → Body paragraphs → Conclusion" },
          { name: "Citation formats", statement: "APA / MLA / Chicago — discipline-specific" },
        ],
        workedExample: {
          problem: "Revise casual to academic: 'Social media is bad and everyone knows it'",
          solution: "Academic: 'Research indicates social media usage correlates with increased anxiety among adolescents, though effects vary by platform and usage patterns.' — precise, hedged, evidence-based.",
        },
      },
      questions: [
        {
          id: "apsm-u3-academic-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Academic register differs from casual writing by being ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "more emotional"
                    },
                    {
                              "id": "b",
                              "text": "formal, precise, and evidence-based"
                    },
                    {
                              "id": "c",
                              "text": "more casual"
                    },
                    {
                              "id": "d",
                              "text": "shorter"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Academic register",
                              "statement": "Formal evidence-based tone."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Academic register uses formal tone, precise language, evidence-based claims, and logical structure — distinct from casual/emotional writing.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Formal + precise + evidence-based",
          "commonErrors": [
                    "Thinking informal is acceptable — academic requires formality."
          ]
},
        },
        {
          id: "apsm-u3-academic-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Proper citation is essential because it ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "makes essay longer"
                    },
                    {
                              "id": "b",
                              "text": "prevents plagiarism and enables verification"
                    },
                    {
                              "id": "c",
                              "text": "is required by law"
                    },
                    {
                              "id": "d",
                              "text": "impresses teachers"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Citation",
                              "statement": "Attribution + verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Proper citation prevents plagiarism (using others' work without credit) and enables readers to verify sources — both ethical and practical requirements for academic work.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Different disciplines use different formats (APA, MLA, Chicago).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Prevents plagiarism + enables verification",
          "commonErrors": [
                    "Thinking citation is optional formality."
          ]
},
        },
        {
          id: "apsm-u3-academic-writing-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If an essay needs 5 body paragraphs and each takes 200 words, plus 300-word intro/conclusion, total words? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Words",
                              "answer": 1300
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Calculate",
                              "statement": "$5 \\times 200 + 300 = 1300$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$5 \\times 200 + 300 = 1000 + 300 = 1300$ words.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $1300$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "1300",
          "commonErrors": [
                    "Forgetting intro/conclusion or miscalculating."
          ]
},
        },
        {
          id: "apsm-u3-academic-writing-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the function of a thesis statement and topic sentences in academic writing. How do they guide readers?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Writing structure",
                              "statement": "Thesis + topic sentences guide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis statement: clear arguable claim stated in introduction — tells readers what essay argues and why it matters; anchors entire essay.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Topic sentences: first sentence of each paragraph stating its main idea — tell readers what paragraph covers; create logical flow; allow skimming for structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Together they create roadmap — thesis gives destination, topic sentences give directions; readers can follow argument without getting lost.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Thesis = destination; topic sentences = directions",
          "commonErrors": [
                    "Thinking they're decorative — they structure argument."
          ]
},
        },
        {
          id: "apsm-u3-academic-writing-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why academic writing requires revision rather than perfect first drafts. What does revision accomplish that editing cannot?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Revision vs. editing",
                              "statement": "Substantive improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "First drafts capture ideas but lack polish — revision transforms rough ideas into coherent argument; editing fixes surface errors (grammar, punctuation) without changing substance.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Revision accomplishes: clearer argument, better evidence integration, stronger organization, addressed gaps; requires rethinking, not just correcting — 'what am I really arguing?'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Feedback enables revision — peers/teachers identify weaknesses; multiple drafts allow testing ideas; revision is iterative discovery, not just correction.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: academic writing is recursive — good writing requires revision cycles; first drafts are exploration, revisions are refinement; editing is final polish after substance is solid.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Revision transforms substance; editing polishes surface",
          "commonErrors": [
                    "Confusing revision with proofreading — different processes."
          ]
},
        },
      ],
    },
  ],
};
