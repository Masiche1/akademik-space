import type { Lesson } from "../../../types.ts";

export const lesson154: Lesson = {
  id: "ciealc-u4-lesson-4-4",
  code: "4-4",
  title: "Ethical and Legal Issues in Computing",
  goal: "I CAN discuss ethical dilemmas, legal frameworks and social impacts of computing.",
  standards: ["Cambridge A Level Computer Science 9618: ethics", "9618: social impact"],
  
  vocabulary: [
    { term: "Ethics", definition: "Principles of right and wrong behaviour." },
    { term: "Copyright", definition: "Legal protection for creative works." },
    { term: "Data protection", definition: "Laws governing personal data handling." },
    { term: "GDPR", definition: "EU regulation on data protection." },
    { term: "Plagiarism", definition: "Using others' work without attribution." },
    { term: "Digital divide", definition: "Gap between those with/without technology access." },
  ],
  concepts: [
    {
      id: "ciealc-u4-s4-eth",
      title: "Ethics and legal issues",
      skill: "Analyse ethical dilemmas and legal frameworks.",
      lesson: {
        sections: [
          {
            heading: "Ethical issues",
            body: "Privacy vs security. Intellectual property rights. Algorithmic bias. Automation and jobs. AI ethics. Surveillance vs safety.",
          },
          {
            heading: "Legal frameworks",
            body: "Copyright protects creative works. Data protection laws (GDPR) govern personal data. Computer misuse laws criminalise hacking. Licensing agreements define software use rights.",
          },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "right/wrong principles" },
          { name: "Copyright", statement: "protects creative works" },
          { name: "GDPR", statement: "data protection regulation" },
        ],
        workedExample: {
          problem: "Discuss the ethical implications of facial recognition technology.",
          solution: "Pros: security, convenience. Cons: privacy invasion, bias, surveillance concerns. Need balance: regulations, consent, transparency.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is copyright?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Legal protection for creative works"
                    },
                    {
                              "id": "b",
                              "text": "A type of software"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Copyright",
                              "statement": "Creative work protection."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Copyright protects original creative works.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Creative work protection"
},
        },
        {
          id: "ciealc-u4-et-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the digital divide?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Digital divide",
                              "statement": "Technology access gap."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gap between those with/without technology access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Creates inequality in opportunities.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Technology access gap"
},
        },
        {
          id: "ciealc-u4-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is GDPR and what does it require?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GDPR",
                              "statement": "Data protection regulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GDPR = EU data protection regulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Requires consent, transparency, data minimisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Gives individuals rights over their data.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "EU data protection regulation"
},
        },
        {
          id: "ciealc-u4-et-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ethics, copyright, data protection, GDPR, plagiarism, digital divide, algorithmic bias. (b) What is copyright? (c) What is GDPR? (d) What is plagiarism? (e) What is algorithmic bias? (f) Give an ethical dilemma in computing. (g) What is the digital divide? (h) Discuss whether AI should be regulated.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Ethics",
                              "statement": "Ethical dilemmas, legal frameworks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All seven definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Creative work protection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) EU data protection regulation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Using others' work without attribution.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Unfair algorithm outcomes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid ethical dilemma.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Technology access gap.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced AI regulation argument.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Ethical and legal issues in computing."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-et-notes",
      title: "Ethics — notes",
      summary: "Ethics=right/wrong principles; copyright=creative protection; GDPR=data protection; digital divide=access gap.",
      sections: [
        { heading: "Key idea", body: "Computing raises ethical dilemmas — privacy, bias, jobs, AI." },
        { heading: "Legal", body: "Copyright, data protection, computer misuse laws govern computing." },
      ],
    },
  ],
};
