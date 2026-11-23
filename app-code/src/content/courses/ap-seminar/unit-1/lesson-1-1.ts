import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apsm-u1-lesson-1-1",
  code: "1-1",
  title: "Research Question Formation",
  goal: "I CAN develop focused, arguable research questions and refine them through inquiry.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Research question", definition: "Focused, arguable inquiry guiding academic investigation — not merely factual." },
    { term: "Thesis question", definition: "Question that demands an arguable answer — 'Why/How' rather than 'What/When.'" },
    { term: "Inquiry", definition: "Systematic process of exploring, questioning, and investigating a topic." },
    { term: "Scope", definition: "Boundaries of a research question — too broad unanswerable, too narrow trivial." },
    { term: "Preliminary research", definition: "Initial investigation to assess feasibility and available evidence before committing." },
    { term: "Iterative process", definition: "Research involves refining questions as new evidence emerges — not linear." },
  ],
  concepts: [
    {
      id: "apsm-u1-research-questions",
      title: "From topic to question",
      skill: "Develop and refine research questions.",
      lesson: {
        sections: [
          {
            heading: "Question quality",
            body: "Good questions are focused, arguable, and researchable — 'How did industrialization affect urban class structures?' vs. 'What is industrialization?' (factual, not arguable).",
          },
          {
            heading: "Refinement",
            body: "Start broad ('education'), narrow to specific ('How did Title IX affect female participation in STEM?'), test feasibility through preliminary research.",
          },
        ],
        keyFormulas: [
          { name: "Question types", statement: "Factual (what/when) vs. Analytical (why/how) vs. Evaluative (should)" },
          { name: "Refinement", statement: "Broad topic → specific question → feasibility check → focused thesis" },
        ],
        workedExample: {
          problem: "Refine 'social media' into a research question",
          solution: "Broad: 'social media' → Narrow: 'How has TikTok affected adolescent attention spans compared to Instagram?' → Focused, arguable, researchable with specific comparison.",
        },
      },
      questions: [
        {
          id: "apsm-u1-research-questions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong research question should be ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "broad and general"
                    },
                    {
                              "id": "b",
                              "text": "focused, arguable, and researchable"
                    },
                    {
                              "id": "c",
                              "text": "factual and simple"
                    },
                    {
                              "id": "d",
                              "text": "answered by a quick Google search"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research question",
                              "statement": "Focused + arguable + researchable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A strong research question is focused (specific topic), arguable (demanding analysis not just facts), and researchable (evidence exists to answer it).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Focused + arguable + researchable",
          "commonErrors": [
                    "Confusing with factual questions."
          ]
},
        },
        {
          id: "apsm-u1-research-questions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a stronger research question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "What is climate change?"
                    },
                    {
                              "id": "b",
                              "text": "How effective are carbon taxes in reducing emissions compared to cap-and-trade systems?"
                    },
                    {
                              "id": "c",
                              "text": "Tell me about pollution"
                    },
                    {
                              "id": "d",
                              "text": "Is the environment important?"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Question evaluation",
                              "statement": "Arguable + comparative + specific."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Option B is specific (carbon taxes vs. cap-and-trade), comparative, arguable (effectiveness can be debated), and researchable — strong academic inquiry.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Others are factual, vague, or not researchable.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Specific comparative arguable question",
          "commonErrors": [
                    "Choosing broad/factual over analytical."
          ]
},
        },
        {
          id: "apsm-u1-research-questions-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a research project takes 8 weeks total and preliminary research should take 25% of time, how many weeks? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Weeks",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Percentage",
                              "statement": "$8 \\times 0.25 = 2$ weeks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$8 \\times 0.25 = 2$ weeks for preliminary research.",
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
                    "Using wrong percentage or total."
          ]
},
        },
        {
          id: "apsm-u1-research-questions-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between a factual question and an analytical research question. Which is better for academic inquiry?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Question types",
                              "statement": "Factual vs. analytical."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Factual question: seeks specific information — 'What year did X happen?' 'Who wrote Y?' — answerable with a single fact; doesn't require analysis or argument.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Analytical question: seeks explanation/evaluation — 'Why did X happen?' 'How effective is Y?' 'Should Z be implemented?' — demands evidence, analysis, and arguable conclusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Analytical is better for academic inquiry because it requires critical thinking, evidence evaluation, and argumentation — the skills AP Seminar develops.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Analytical questions drive academic inquiry; factual don't",
          "commonErrors": [
                    "Treating factual as research questions — they lack analytical depth."
          ]
},
        },
        {
          id: "apsm-u1-research-questions-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how iterative research question refinement improves academic inquiry. Why isn't the first question usually the final one?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Iterative inquiry",
                              "statement": "Questions evolve with evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Initial questions are often too broad or based on assumptions — 'How does social media affect teenagers?' is too vague to research effectively.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Preliminary research reveals available evidence, gaps, and complexity — forcing refinement: 'How has TikTok specifically affected sleep quality in adolescents aged 13-17 compared to other platforms?'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Iteration continues — new evidence may reveal the question is wrong, too narrow, or needs reframing; flexibility is essential to good research.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: research questions are hypotheses to be tested — initial versions are starting points, not endpoints; iteration produces better, more focused inquiry.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Iteration refines questions — initial versions are starting points",
          "commonErrors": [
                    "Assuming first question is final — refinement is essential."
          ]
},
        },
      ],
    },
  ],
};
