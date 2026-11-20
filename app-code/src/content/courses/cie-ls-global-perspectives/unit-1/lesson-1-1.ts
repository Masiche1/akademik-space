import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "cilgp-u1-lesson-1-1",
  code: "1-1",
  title: "Researching Global Issues",
  goal: "I CAN formulate research questions on global issues and gather reliable information.",
  standards: ["Cambridge Lower Secondary Global Perspectives 1129 strand: Research", "Cambridge Global Perspectives skills: research"],
  
  vocabulary: [
    { term: "Global issue", definition: "A problem affecting people across countries." },
    { term: "Research question", definition: "A focused question guiding investigation." },
    { term: "Primary source", definition: "Original data/document created first-hand." },
    { term: "Secondary source", definition: "Information about primary sources." },
    { term: "Bias", definition: "Slanted presentation favouring one view." },
    { term: "Corroboration", definition: "Checking claims against multiple sources." },
  ],
  concepts: [
    {
      id: "cilgp-u1-s1-res",
      title: "Research skills for global issues",
      skill: "Formulate questions and gather reliable evidence at lower secondary level.",
      lesson: {
        sections: [
          {
            heading: "Choosing a question",
            body: "Good research questions are specific and arguable: 'How does climate change affect food production in South Asia?' not 'Is climate change bad?' Frame questions that can be investigated with evidence.",
          },
          {
            heading: "Reliable sources",
            body: "Use reputable organisations (UN, NGOs, peer-reviewed studies), cross-check claims across sources, and note publication dates. Social media posts are leads, not evidence.",
          },
        ],
        keyFormulas: [
          { name: "Research question", statement: "specific + arguable + investigable" },
          { name: "Corroborate", statement: "verify across 2+ sources" },
        ],
        workedExample: {
          problem: "Turn 'poverty is bad' into a researchable question.",
          solution: "'What are the main causes of urban poverty in one developing country, and which solutions have shown evidence of success?'",
        },
      },
      questions: [
        {
          id: "cilgp-u1-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a good research question?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Specific, arguable, investigable"
                    },
                    {
                              "id": "b",
                              "text": "Short and simple"
                    },
                    {
                              "id": "c",
                              "text": "Has a yes/no answer"
                    },
                    {
                              "id": "d",
                              "text": "Is famous"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Research question",
                              "statement": "Focused investigable query."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Good questions are specific, arguable, answerable with evidence.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Specific + arguable + investigable"
},
        },
        {
          id: "cilgp-u1-rs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a primary and secondary source? Give an example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Source types",
                              "statement": "Original vs about."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = original (survey data, treaty); secondary = about it (news report).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples given.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Original vs commentary"
},
        },
        {
          id: "cilgp-u1-rs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should you corroborate a claim before using it? What does 'corroboration' mean?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Corroboration",
                              "statement": "Multi-source verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Single sources may be wrong or biased.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Corroboration = confirm across independent sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strengthens reliability of evidence.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Verify across sources for reliability"
},
        },
        {
          id: "cilgp-u1-rs-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define global issue, research question, primary source, secondary source, bias, corroboration. (b) Improve this question: 'Is plastic bad?' (c) Give 3 reliable source types for climate research. (d) What is bias in a source? (e) Why check publication dates? (f) Why are social media posts weak evidence? (g) Design a research plan for 'water scarcity in one region'. (h) Evaluate this source: anonymous blog post claiming 'vaccines cause autism'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research",
                              "statement": "Questions, sources, reliability."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Improved specific question.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Three valid source types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Slanted favouring one view.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Old data may be outdated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Unverified, often opinion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid research plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Unreliable — debunked claim, no sources.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Research methodology and source evaluation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u1-rs-notes",
      title: "Research — notes",
      summary: "Specific arguable questions; primary vs secondary sources; corroborate claims across sources.",
      sections: [
        { heading: "Key idea", body: "Good research starts with a focused, answerable question." },
        { heading: "Sources", body: "Trust reputable organisations; verify across multiple sources." },
      ],
    },
  ],
};
