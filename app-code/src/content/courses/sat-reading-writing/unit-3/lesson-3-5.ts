import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "satrw-u3-lesson-3-5",
  code: "3-5",
  title: "Editing and Improving Sentences",
  goal: "I CAN revise sentences for clarity, concision, and correctness.",
  standards: ["SAT RW 8.x"],
  vocabulary: [
    { term: "Concision", definition: "Saying it in fewer words without losing meaning." },
    { term: "Clarity", definition: "Unambiguous expression." },
    { term: "Redundancy", definition: "Unnecessary repetition or wordiness." },
    { term: "Dangling element", definition: "Modifier attached to wrong noun." },
    { term: "Comma splice", definition: "Two independent clauses joined by comma only." },
    { term: "Improvement strategy", definition: "Identify issue type, then fix precisely." },
  ],
  concepts: [
    {
      id: "satrw-u3-editing",
      title: "Editing and improving",
      skill: "Revise sentences for clarity, concision, and grammatical correctness.",
      lesson: {
        sections: [
          {
            heading: "Common sentence errors",
            body: "**Comma splice**: 'I ran, I was tired' — two complete sentences joined by comma only; fix with period, semicolon, or conjunction. **Redundancy**: 'advance planning' (planning is always advance), 'past history' (history is past) — cut the redundant word. **Dangling modifier**: 'Walking to school, the rain started' — fix who/what is doing the action.",
          },
          {
            heading: "Improvement priorities",
            body: "SAT editing questions test whether you can identify the BEST revision — not just a correct one but the most concise, clear, and precise. 'In my opinion, I think' is redundant (opinion = think); 'due to the fact that' → 'because'. The best answer is usually the most concise without losing meaning.",
          },
        ],
        keyFormulas: [
          { name: "Comma splice fix", statement: "Period / semicolon / conjunction" },
          { name: "Concision", statement: "Cut redundant words; keep meaning" },
        ],
        workedExample: {
          problem: "Improve: 'In my opinion, I think the plan is good due to the fact that it saves money.'",
          solution: "'I think the plan is good because it saves money' — 'in my opinion' + 'I think' is redundant; 'due to the fact that' → 'because'. Most concise without losing meaning.",
        },
      },
      questions: [
        {
          id: "satrw-u3-editing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A comma splice is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "too many commas"
                    },
                    {
                              "id": "b",
                              "text": "two independent clauses joined by comma only"
                    },
                    {
                              "id": "c",
                              "text": "a missing comma"
                    },
                    {
                              "id": "d",
                              "text": "a long sentence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Comma splice",
                              "statement": "Comma joining two sentences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Comma splice = two complete sentences joined by just a comma — needs period, semicolon, or conjunction.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Comma joining sentences",
          "commonErrors": [
                    "Thinking it's just a punctuation preference."
          ]
},
        },
        {
          id: "satrw-u3-editing-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The most concise fix for 'due to the fact that' is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "owing to the fact that"
                    },
                    {
                              "id": "b",
                              "text": "because"
                    },
                    {
                              "id": "c",
                              "text": "since the fact that"
                    },
                    {
                              "id": "d",
                              "text": "for the reason that"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Concision",
                              "statement": "Shortest equivalent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Because' is the most concise equivalent — 'due to the fact that' is wordy padding.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "because",
          "commonErrors": [
                    "Choosing equally wordy alternatives."
          ]
},
        },
        {
          id: "satrw-u3-editing-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Is 'I ran, I was tired' grammatically correct? Answer 1 for yes, 0 for no.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Correct?",
                              "answer": 0
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Comma splice",
                              "statement": "Two sentences, one comma."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two independent clauses ('I ran', 'I was tired') joined by comma only = comma splice → incorrect → 0.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "0",
          "commonErrors": [
                    "Thinking comma is enough between clauses."
          ]
},
        },
        {
          id: "satrw-u3-editing-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'the most concise revision' is usually the correct answer on SAT editing questions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Concision principle",
                              "statement": "Less is more."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "SAT rewards concision — wordy phrases ('due to the fact that', 'in my opinion I think') are flagged as needing revision; the best answer removes redundancy while preserving meaning.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "BUT concision ≠ telegraphic — 'good' isn't always better than 'effective'; the best revision is concise AND precise, not just short.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Strategy: eliminate answers that are wordier than needed, then check the remaining for precision — don't sacrifice clarity for brevity.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Concise + precise beats wordy or telegraphic",
          "commonErrors": [
                    "Choosing shortest without checking precision."
          ]
},
        },
        {
          id: "satrw-u3-editing-q5",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Improve this sentence and explain each change: 'Being very tired, the long and difficult exam was finally finished by me.'",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Multi-issue revision",
                              "statement": "Fix dangling + passive + wordy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Issues: dangling modifier ('being tired' describes exam, not me), passive voice ('was finished by me'), wordiness ('long and difficult', 'finally').",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Fix: 'Being very tired, I finally finished the long, difficult exam' — modifier attaches to 'I', active voice, tighter wording.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The best revision fixes ALL issues, not just one — SAT tests whether you catch every problem in a sentence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Fix modifier + activate + tighten — address all issues",
          "commonErrors": [
                    "Fixing one issue while leaving others."
          ]
},
        },
      ],
    },
  ],
};
