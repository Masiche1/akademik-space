import type { Lesson } from "../../../types.ts";

export const lesson35: Lesson = {
  id: "apelit-u3-lesson-3-5",
  code: "3-5",
  title: "Revision and Final Preparation",
  goal: "I CAN revise effectively and prepare for the AP Literature exam.",
  standards: ["AP Lit 21.x"],
  vocabulary: [
    { term: "Revision", definition: "Improving structure, evidence, and clarity." },
    { term: "Thesis check", definition: "Verifying the central claim is clear and arguable." },
    { term: "Evidence audit", definition: "Ensuring every paragraph has integrated support." },
    { term: "Structural review", definition: "Checking organization and flow." },
    { term: "Final prep", definition: "Last-minute strategies for exam day." },
    { term: "Common pitfalls", definition: "Errors that cost points across essays." },
  ],
  concepts: [
    {
      id: "apelit-u3-revision",
      title: "Revision and preparation",
      skill: "Revise essays effectively and prepare strategically.",
      lesson: {
        sections: [
          {
            heading: "Revision priorities",
            body: "Revise in this order: **thesis** (is it clear and arguable?), **structure** (does each paragraph advance the argument?), **evidence** (is every claim supported?), **language** (precise, controlled prose?). Don't waste revision time on word choice before structural problems are fixed.",
          },
          {
            heading: "Final preparation",
            body: "In the days before the exam: practice timed essays (the skill is speed + quality), review your strongest texts (know them deeply), and prepare mentally — exam anxiety affects performance as much as preparation. On exam day: read carefully, plan briefly, write efficiently, revise.",
          },
        ],
        keyFormulas: [
          { name: "Revision order", statement: "Thesis → structure → evidence → language" },
          { name: "Prep strategy", statement: "Timed practice + deep text knowledge + mental readiness" },
        ],
        workedExample: {
          problem: "You have 8 minutes to revise a completed essay. What's your checklist?",
          solution: "1. Thesis: clear, arguable, at end of intro? 2. Each paragraph: advances argument, has quote + analysis? 3. Conclusion: synthesizes, doesn't repeat? 4. Any plot summary to cut? 5. Citations formatted? Fix structural issues first, then polish.",
        },
      },
      questions: [
        {
          id: "apelit-u3-revision-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The correct order for revision is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "word choice first, then structure"
                    },
                    {
                              "id": "b",
                              "text": "thesis → structure → evidence → language"
                    },
                    {
                              "id": "c",
                              "text": "conclusion first"
                    },
                    {
                              "id": "d",
                              "text": "grammar first"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Revision priority",
                              "statement": "Structure before polish."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fix big problems first — unclear thesis, weak structure, unsupported claims — then polish language; perfecting sentences in a broken argument wastes time.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Structure before polish",
          "commonErrors": [
                    "Polishing before fixing structure."
          ]
},
        },
        {
          id: "apelit-u3-revision-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "The most valuable exam preparation is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "memorizing quotes"
                    },
                    {
                              "id": "b",
                              "text": "timed practice essays with your strongest texts"
                    },
                    {
                              "id": "c",
                              "text": "reading new books"
                    },
                    {
                              "id": "d",
                              "text": "cramming vocabulary"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Preparation strategy",
                              "statement": "Practice the actual skill."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Timed practice on texts you know builds the real skill — speed, structure, evidence selection under pressure; new reading doesn't prepare you for the exam format.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Timed practice",
          "commonErrors": [
                    "Preparing by adding content rather than practicing format."
          ]
},
        },
        {
          id: "apelit-u3-revision-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'structural revision' matters more than 'language revision' in the time available.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Revision priority",
                              "statement": "Fix structure first."
                    },
                    {
                              "kind": "skill",
                              "name": "Strategic revision",
                              "statement": "Big problems first."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Structural problems — unclear thesis, paragraphs that don't advance the argument, unsupported claims — cost more points than awkward phrasing; a beautifully worded essay with a broken argument scores poorly.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Language issues are surface-level and often forgiveable; structural issues are fundamental — revision should address fundamentals first.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Test: if you could only fix ONE thing, fix the thesis/structure — that's where most points live.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Fix structure before polish",
          "commonErrors": [
                    "Spending revision time on minor wording."
          ]
},
        },
        {
          id: "apelit-u3-revision-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student plans to 'read three new novels the week before the exam.' Evaluate this plan.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Preparation evaluation",
                              "statement": "What actually helps."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "New reading doesn't prepare for timed analysis — you won't know those texts deeply enough to write about them; preparation requires DEPTH on texts you know, not breadth of new ones.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Better: timed practice essays on your strongest texts — this builds the actual skills (speed, structure, evidence) the exam tests; reviewing key texts deeply also helps.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The exam rewards analysis of texts you can handle — preparation should maximize your depth on known material, not gamble on unfamiliar texts.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Depth on known texts + timed practice > new reading",
          "commonErrors": [
                    "Confusing more reading with better preparation."
          ]
},
        },
      ],
    },
  ],
};
