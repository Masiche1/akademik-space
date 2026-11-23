import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "apsm-u1-lesson-1-2",
  code: "1-2",
  title: "Information Literacy",
  goal: "I CAN evaluate source credibility and identify bias in information.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Primary source", definition: "Firsthand evidence — original documents, data, interviews, experiments." },
    { term: "Secondary source", definition: "Analysis/interpretation of primary sources — textbooks, articles, reviews." },
    { term: "Tertiary source", definition: "Indexes, encyclopedias, almanacs — organizing other sources." },
    { term: "Peer review", definition: "Expert evaluation before publication — quality control for academic sources." },
    { term: "Bias", definition: "Systematic favoring of particular perspective — can be intentional or unconscious." },
    { term: "CRAAP test", definition: "Currency, Relevance, Authority, Accuracy, Purpose — source evaluation framework." },
  ],
  concepts: [
    {
      id: "apsm-u1-information-literacy",
      title: "Evaluating sources",
      skill: "Apply source evaluation criteria to assess credibility.",
      lesson: {
        sections: [
          {
            heading: "Source types",
            body: "Primary (original evidence), secondary (analysis), tertiary (indexes); peer-reviewed sources generally most credible for academic work.",
          },
          {
            heading: "Evaluation criteria",
            body: "CRAAP: Currency (when published?), Relevance (fits topic?), Authority (author credentials?), Accuracy (evidence-based?), Purpose (inform vs. persuade?).",
          },
        ],
        keyFormulas: [
          { name: "CRAAP test", statement: "Currency / Relevance / Authority / Accuracy / Purpose" },
          { name: "Source hierarchy", statement: "Primary > Secondary > Tertiary for evidence; peer review adds credibility" },
        ],
        workedExample: {
          problem: "Evaluate a Wikipedia article for a research project",
          solution: "Wikipedia is tertiary, user-edited (authority questionable), generally accurate for basic facts but not for cutting-edge analysis; useful for orientation but cite underlying sources, not Wikipedia itself.",
        },
      },
      questions: [
        {
          id: "apsm-u1-information-literacy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A primary source is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a textbook summary"
                    },
                    {
                              "id": "b",
                              "text": "firsthand evidence like original documents or data"
                    },
                    {
                              "id": "c",
                              "text": "an encyclopedia entry"
                    },
                    {
                              "id": "d",
                              "text": "a news article about research"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary source",
                              "statement": "Firsthand original evidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary sources are firsthand evidence — original documents, data, interviews, experiments; they provide direct access to events/phenomena.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Firsthand original evidence",
          "commonErrors": [
                    "Confusing with secondary (analysis)."
          ]
},
        },
        {
          id: "apsm-u1-information-literacy-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The CRAAP test evaluates sources on ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "only accuracy"
                    },
                    {
                              "id": "b",
                              "text": "Currency, Relevance, Authority, Accuracy, Purpose"
                    },
                    {
                              "id": "c",
                              "text": "only popularity"
                    },
                    {
                              "id": "d",
                              "text": "only length"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CRAAP test",
                              "statement": "Five-criteria evaluation framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CRAAP evaluates: Currency (when?), Relevance (fits topic?), Authority (credentials?), Accuracy (evidence-based?), Purpose (inform vs. persuade?) — comprehensive credibility check.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's a framework, not a perfect test — judgment still required.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Five criteria: Currency to Purpose",
          "commonErrors": [
                    "Memorizing partial list."
          ]
},
        },
        {
          id: "apsm-u1-information-literacy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a source was published in 2019 and it's now 2024, how many years old is it? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Years",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Subtract",
                              "statement": "$2024 - 2019 = 5$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$2024 - 2019 = 5$ years old — may be dated for fast-changing topics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $5$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "5",
          "commonErrors": [
                    "Date arithmetic errors."
          ]
},
        },
        {
          id: "apsm-u1-information-literacy-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why peer-reviewed sources are generally more credible than popular media for academic research.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Peer review",
                              "statement": "Expert quality control."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Peer review requires expert evaluation before publication — methodology checked, claims verified, errors caught; this filters out weak/unsubstantiated research.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Popular media prioritizes accessibility/entertainment over rigor — may oversimplify, sensationalize, or lack evidence; fine for context but not for supporting claims.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Academic sources also provide citations for verification — traceability that popular media lacks.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Peer review adds expert validation; popular media lacks rigor",
          "commonErrors": [
                    "Assuming all sources equal — academic has quality control."
          ]
},
        },
        {
          id: "apsm-u1-information-literacy-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how bias affects information and how researchers should detect it. Can 'neutral' sources exist?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Bias in information",
                              "statement": "Unavoidable but manageable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Bias shapes what sources emphasize, omit, or frame — political bias in news, corporate bias in industry reports, cultural bias in textbooks; rarely intentional deception but systematic perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Detection: examine author's affiliations, funding sources, language choices, what's included/excluded; compare multiple sources; look for corroboration across perspectives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "'Neutral' sources: truly neutral impossible — every source has perspective; but some are more balanced (reputable encyclopedias, peer-reviewed meta-analyses aggregating multiple studies).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: bias is inevitable but manageable — researchers should triangulate sources, acknowledge their own biases, and seek diverse perspectives rather than expecting neutrality.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Bias inevitable; detect via triangulation and source analysis",
          "commonErrors": [
                    "Expecting neutral sources — impossible; aim for balanced multi-perspective research."
          ]
},
        },
      ],
    },
  ],
};
