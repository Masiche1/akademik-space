import type { Lesson } from "../../../types.ts";

export const lesson102: Lesson = {
  id: "ciegp-u1-lesson-1-2",
  code: "1-2",
  title: "Research Methods and Sources",
  goal: "I CAN gather reliable information using appropriate research methods and sources.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: research methods", "0457: sources"],
  
  vocabulary: [
    { term: "Primary source", definition: "Original data/document created first-hand." },
    { term: "Secondary source", definition: "Information about primary sources." },
    { term: "Reliability", definition: "Trustworthiness of a source." },
    { term: "Validity", definition: "Whether source measures what it claims." },
    { term: "Bias", definition: "Slanted presentation favouring one view." },
    { term: "Corroboration", definition: "Cross-checking claims across sources." },
  ],
  concepts: [
    {
      id: "ciegp-u1-s2-methods",
      title: "Research methods and sources",
      skill: "Gather reliable evidence at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Source types",
            body: "Primary sources: original data (surveys, interviews, official statistics, documents). Secondary sources: analysis/commentary (news, books, reports). Both needed — primary for raw data, secondary for context.",
          },
          {
            heading: "Evaluating reliability",
            body: "Check: author credentials, publication date, purpose, bias, corroboration across sources. Reputable organisations (UN, NGOs, peer-reviewed journals) more reliable than anonymous blogs or social media.",
          },
        ],
        keyFormulas: [
          { name: "Primary", statement: "original data" },
          { name: "Secondary", statement: "analysis/commentary" },
          { name: "Corroborate", statement: "verify across sources" },
        ],
        workedExample: {
          problem: "Evaluate this source for a climate research project: 'A blog post claiming vaccines cause autism'.",
          solution: "Unreliable: anonymous author, no evidence, debunked claim, biased purpose. Use peer-reviewed medical journals instead.",
        },
      },
      questions: [
        {
          id: "ciegp-u1-mr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Original data created first-hand"
                    },
                    {
                              "id": "b",
                              "text": "A news article"
                    },
                    {
                              "id": "c",
                              "text": "A book about history"
                    },
                    {
                              "id": "d",
                              "text": "A Wikipedia page"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Primary source",
                              "statement": "Original data."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Primary = original first-hand data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Original first-hand data"
},
        },
        {
          id: "ciegp-u1-mr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is corroboration and why is it important?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Corroboration",
                              "statement": "Multi-source verification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Corroboration = confirm across independent sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Increases reliability; single sources may be wrong.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Multi-source verification"
},
        },
        {
          id: "ciegp-u1-mr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three criteria for evaluating source reliability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Reliability",
                              "statement": "Source evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Author credentials/expertise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Publication date/relevance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Purpose/bias/corroboration.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Credentials, date, bias, corroboration"
},
        },
        {
          id: "ciegp-u1-mr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define primary source, secondary source, reliability, validity, bias, corroboration. (b) When use primary vs secondary? (c) What is bias? (d) Why check publication dates? (e) Why are social media posts weak evidence? (f) List 3 reputable source types for global issues. (g) How do you corroborate a claim? (h) Evaluate: 'UN report on refugee statistics' as a source.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Research methods",
                              "statement": "Sources, reliability, corroboration."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Primary=raw data; secondary=context.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Slanted favouring one view.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Old data may be outdated.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Unverified, often opinion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Three valid source types.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Cross-check across independent sources.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Reliable — UN authority, official data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Research methods and source evaluation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u1-mr-notes",
      title: "Research methods — notes",
      summary: "Primary=original data, secondary=analysis. Evaluate credentials, dates, bias; corroborate claims.",
      sections: [
        { heading: "Key idea", body: "Reliable research uses verified, corroborated sources." },
        { heading: "Bias", body: "Check purpose — who benefits from this information?" },
      ],
    },
  ],
};
