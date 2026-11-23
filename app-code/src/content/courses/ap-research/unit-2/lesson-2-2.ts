import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "apr-u2-lesson-2-2",
  code: "2-2",
  title: "Citation and Academic Integrity",
  goal: "I CAN cite sources properly and avoid plagiarism through ethical scholarship.",
  standards: ["Unit 2"],
  vocabulary: [
    { term: "Plagiarism", definition: "Presenting others' work as your own — academic misconduct." },
    { term: "Paraphrasing", definition: "Restating ideas in your own words — still requires citation." },
    { term: "Direct quotation", definition: "Using exact words — requires quotation marks + citation." },
    { term: "Citation format", definition: "APA, MLA, Chicago — discipline-specific conventions." },
    { term: "Academic integrity", definition: "Honest scholarship — proper attribution, original work." },
    { term: "Self-plagiarism", definition: "Reusing own previous work without acknowledgment — still misconduct." },
  ],
  concepts: [
    {
      id: "apr-u2-citation-ethics",
      title: "Ethical scholarship",
      skill: "Cite sources properly and maintain academic integrity.",
      lesson: {
        sections: [
          {
            heading: "Plagiarism types",
            body: "Direct copying, paraphrasing without citation, patchwriting (changing few words), self-plagiarism — all academic misconduct with serious consequences.",
          },
          {
            heading: "Citation practice",
            body: "Every borrowed idea needs citation — facts may not need, but interpretations, data, specific claims do; quotation marks for exact words; paraphrase in own words + citation.",
          },
        ],
        keyFormulas: [
          { name: "Citation rule", statement: "Borrowed idea → cite; exact words → quote + cite; own words → paraphrase + cite" },
          { name: "Plagiarism types", statement: "Direct / Paraphrase / Patchwrite / Self-plagiarism" },
        ],
        workedExample: {
          problem: "When is citation needed?",
          solution: "Citation needed for: specific claims, data, interpretations, direct quotes; NOT needed for: common knowledge ('water boils at 100°C'), your own analysis, general background — but when in doubt, cite.",
        },
      },
      questions: [
        {
          id: "apr-u2-citation-ethics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paraphrasing requires citation because ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "paraphrasing is copying"
                    },
                    {
                              "id": "b",
                              "text": "it still uses others' ideas even in different words"
                    },
                    {
                              "id": "c",
                              "text": "it's illegal"
                    },
                    {
                              "id": "d",
                              "text": "teachers require it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Paraphrasing",
                              "statement": "Own words, others' ideas."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Paraphrasing restates others' ideas in your words — still requires citation because the IDEA is borrowed even if words are yours; citation attributes the idea.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Ideas borrowed even in own words",
          "commonErrors": [
                    "Thinking paraphrase avoids plagiarism — it doesn't."
          ]
},
        },
        {
          id: "apr-u2-citation-ethics-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which requires citation?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Water boils at 100°C"
                    },
                    {
                              "id": "b",
                              "text": "Smith (2020) found X increased Y by 15%"
                    },
                    {
                              "id": "c",
                              "text": "The experiment was conducted on Tuesday"
                    },
                    {
                              "id": "d",
                              "text": "I think this is interesting"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Citation judgment",
                              "statement": "Specific claims need citation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Smith (2020) found X increased Y by 15%' is a specific empirical claim requiring citation; common knowledge, own observations, and personal opinions don't need citation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "When in doubt, cite — better over-cite than under-cite.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Specific empirical claim",
          "commonErrors": [
                    "Over or under-citing."
          ]
},
        },
        {
          id: "apr-u2-citation-ethics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If a 5,000-word paper has 50 citations and average citation is 50 words, total cited words? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Words",
                              "answer": 2500
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Multiply",
                              "statement": "$50 \\times 50 = 2500$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$50 \\times 50 = 2500$ words in citations.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2500$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2500",
          "commonErrors": [
                    "Arithmetic errors."
          ]
},
        },
        {
          id: "apr-u2-citation-ethics-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between quotation and paraphrasing. When is each appropriate?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Quotation vs. paraphrase",
                              "statement": "Exact vs. own words."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Quotation: exact words in quotation marks + citation — appropriate when exact phrasing matters (key definitions, powerful statements, precise claims you can't improve).",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Paraphrasing: restating ideas in your own words + citation — appropriate when idea matters more than phrasing; shows understanding; integrates smoothly; overuse of quotes suggests lazy scholarship.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both require citation — the difference is words (quote) vs. ideas (paraphrase); neither is plagiarism if properly attributed.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Quote = exact words; Paraphrase = own words; both cite",
          "commonErrors": [
                    "Thinking paraphrase avoids citation — it doesn't."
          ]
},
        },
        {
          id: "apr-u2-citation-ethics-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why academic integrity violations have serious consequences. What does plagiarism reveal about research process?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Academic integrity",
                              "statement": "Trust and scholarship."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plagiarism violates fundamental academic norm — presenting others' work as yours undermines trust in all scholarship; degrees certify authorship and integrity.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Reveals research process failure — plagiarism often results from poor time management, inadequate research skills, or intentional dishonesty; it bypasses learning process.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Consequences: failing grades, expulsion, revoked degrees, damaged reputation — universities take integrity seriously because degrees certify authorship.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: academic integrity is foundational — plagiarism isn't just rule violation but undermines the scholarly enterprise's credibility; proper citation is respect for intellectual labor.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Plagiarism undermines trust and bypasses learning",
          "commonErrors": [
                    "Viewing as minor infraction — it violates scholarship's foundation."
          ]
},
        },
      ],
    },
  ],
};
