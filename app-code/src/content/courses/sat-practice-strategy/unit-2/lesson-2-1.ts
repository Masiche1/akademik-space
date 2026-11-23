import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "satp-u2-lesson-2-1",
  code: "2-1",
  title: "Reading & Writing Section Strategy",
  goal: "I CAN apply effective tactics for the SAT Reading & Writing section.",
  standards: ["SAT S 3.x"],
  vocabulary: [
    { term: "Passage-first", definition: "Read the passage before the question." },
    { term: "Question-first", definition: "Read question before passage for targeting." },
    { term: "Evidence location", definition: "Finding the exact text supporting answers." },
    { term: "Elimination", definition: "Removing wrong answers systematically." },
    { term: "Time per question", definition: "Appropriate pacing for RW questions." },
    { term: "Common traps", definition: "Plausible-sounding but unsupported answers." },
  ],
  concepts: [
    {
      id: "satp-u2-rw-strategy",
      title: "RW section strategy",
      skill: "Apply effective tactics for Reading & Writing questions.",
      lesson: {
        sections: [
          {
            heading: "Passage-first vs question-first",
            body: "**Passage-first** (read passage, then question) works for comprehension questions — you understand context before being asked. **Question-first** (read question, then scan passage) works for specific-detail questions — you know what to look for. Most RW questions benefit from reading the passage first for context.",
          },
          {
            heading: "Evidence-based answering",
            body: "Every correct answer must be TEXTUALLY SUPPORTED — SAT questions ask 'which quotation best supports...' or 'the author implies...' — the answer is IN the passage, not inferred beyond it. For inference questions, choose the MOST supported option, not the most interesting.",
          },
        ],
        keyFormulas: [
          { name: "Evidence rule", statement: "Answer must be in the text — find the quote" },
          { name: "Pacing", statement: "~70 seconds per RW question" },
        ],
        workedExample: {
          problem: "RW question asks 'what does the author imply about X?' with 4 plausible options.",
          solution: "Read the passage section about X — find the specific language implying the answer; choose the option MOST directly supported by text, not the most dramatic interpretation.",
        },
      },
      questions: [
        {
          id: "satp-u2-rw-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For SAT RW questions, the correct answer is always ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the most interesting"
                    },
                    {
                              "id": "b",
                              "text": "supported by the passage text"
                    },
                    {
                              "id": "c",
                              "text": "the longest option"
                    },
                    {
                              "id": "d",
                              "text": "your opinion"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Textual support",
                              "statement": "Answer is in the text."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RW answers must be textually supported — find the evidence in the passage; opinion and outside knowledge don't count.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Textually supported",
          "commonErrors": [
                    "Choosing based on personal judgment."
          ]
},
        },
        {
          id: "satp-u2-rw-strategy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For inference questions, choose the option that is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "most dramatic"
                    },
                    {
                              "id": "b",
                              "text": "most directly supported by the text"
                    },
                    {
                              "id": "c",
                              "text": "most sophisticated"
                    },
                    {
                              "id": "d",
                              "text": "most general"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Inference selection",
                              "statement": "Support over interest."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Inference answers are the MOST textually supported — plausible-sounding but unsupported options are the trap.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Most supported",
          "commonErrors": [
                    "Choosing the most interesting interpretation."
          ]
},
        },
        {
          id: "satp-u2-rw-strategy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A RW module has 27 questions in 32 minutes. How many questions should you aim to complete per 10-minute checkpoint?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Questions",
                              "answer": 8
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Pace calculation",
                              "statement": "27 questions / ~3 checkpoints."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "~10 minutes per checkpoint; at ~71 sec/question, about 8-9 questions per 10 minutes. Aim for 8+ by each checkpoint.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer: 8.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "8",
          "commonErrors": [
                    "Not converting time properly."
          ]
},
        },
        {
          id: "satp-u2-rw-strategy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why 'the most interesting answer' is usually WRONG on SAT inference questions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Plausible distractors",
                              "statement": "Interesting ≠ supported."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SAT distractors are designed to be plausible — interesting interpretations that aren't directly supported; the correct answer is conservative, saying only what the text implies.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Interesting answers often require inference BEYOND the text — 'she's probably lonely' might be reasonable but if the text doesn't support loneliness specifically, it's wrong.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Strategy: for each option, ask 'where does the text say/imply this?' — no textual anchor = wrong answer.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Interesting distractors lack textual support",
          "commonErrors": [
                    "Choosing based on intrigue rather than evidence."
          ]
},
        },
      ],
    },
  ],
};
