import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "satrw-u2-lesson-2-3",
  code: "2-3",
  title: "How Authors Build Arguments",
  goal: "I CAN analyze rhetorical techniques in informational and argumentative texts.",
  standards: ["SAT RW 6.x"],
  vocabulary: [
    { term: "Rhetorical technique", definition: "Device used to persuade or inform." },
    { term: "Evidence type", definition: "Data, example, authority, analogy." },
    { term: "Logical appeal", definition: "Reasoning and evidence (logos)." },
    { term: "Emotional appeal", definition: "Feeling-based persuasion (pathos)." },
    { term: "Ethical appeal", definition: "Credibility-based persuasion (ethos)." },
    { term: "Counterargument", definition: "Acknowledging opposing views." },
  ],
  concepts: [
    {
      id: "satrw-u2-author-technique",
      title: "Author techniques",
      skill: "Identify and analyze rhetorical strategies in texts.",
      lesson: {
        sections: [
          {
            heading: "The three appeals",
            body: "**Logos** (logic — evidence, reasoning), **pathos** (emotion — stories, vivid language), **ethos** (credibility — expertise, character). Effective arguments blend all three; SAT questions ask which appeal a passage primarily uses or how techniques function — identify the strategy before analyzing its effect.",
          },
          {
            heading: "Counterargument handling",
            body: "Strong arguments acknowledge opposition — 'critics argue X, but...' Concession (granting a point) builds credibility; refutation (showing why the opposition fails) strengthens the claim. Recognizing these moves shows sophisticated reading.",
          },
        ],
        keyFormulas: [
          { name: "Appeals", statement: "logos=logic; pathos=emotion; ethos=credibility" },
          { name: "Counterargument", statement: "Concede → distinguish → rebut" },
        ],
        workedExample: {
          problem: "A passage cites a study, tells a patient's story, and notes the author's medical credentials. Which appeals?",
          solution: "Study = logos (evidence); patient story = pathos (emotion); credentials = ethos (credibility) — all three appeals working together for maximum persuasion.",
        },
      },
      questions: [
        {
          id: "satrw-u2-author-technique-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Logos refers to ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "emotional appeal"
                    },
                    {
                              "id": "b",
                              "text": "logical appeal — reasoning and evidence"
                    },
                    {
                              "id": "c",
                              "text": "credibility appeal"
                    },
                    {
                              "id": "d",
                              "text": "humor"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Logos",
                              "statement": "Logic-based appeal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Logos = logical appeal — reasoning, evidence, data; pathos = emotion; ethos = credibility.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Logic",
          "commonErrors": [
                    "Confusing the three appeals."
          ]
},
        },
        {
          id: "satrw-u2-author-technique-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Acknowledging then rebutting an opposing view is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "a weakness"
                    },
                    {
                              "id": "b",
                              "text": "a counterargument strategy that strengthens credibility"
                    },
                    {
                              "id": "c",
                              "text": "changing the topic"
                    },
                    {
                              "id": "d",
                              "text": "avoiding the issue"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Counterargument",
                              "statement": "Concede + rebut."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Addressing opposition shows confidence and fairness — conceding a point then rebutting strengthens the argument's credibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Strengthens credibility",
          "commonErrors": [
                    "Thinking acknowledging opposition weakens you."
          ]
},
        },
        {
          id: "satrw-u2-author-technique-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a passage might use all three appeals simultaneously, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Appeal blending",
                              "statement": "Multiple strategies at once."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A medical advocacy passage: cites study results (logos), describes a patient's suffering (pathos), and notes the author's MD (ethos) — each appeal targets a different persuasive pathway.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The blend is deliberate — logic convinces the mind, emotion moves the heart, credibility earns trust; together they're more persuasive than any alone.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT questions ask which appeal is PRIMARY or how a specific technique functions — identifying the dominant strategy matters.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Logos+pathos+ethos target different pathways",
          "commonErrors": [
                    "Identifying only one appeal in a blended argument."
          ]
},
        },
        {
          id: "satrw-u2-author-technique-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might an author choose emotional appeal (pathos) over logical appeal (logos) for a policy argument?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Strategic choice",
                              "statement": "When emotion beats logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pathos is chosen when logic alone won't move the audience — moral/emotional issues (poverty, injustice) resonate more through stories and vivid language than statistics; emotion bypasses rational resistance.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Risk: pathos can manipulate — an argument relying solely on emotion without evidence is weaker; the best persuasive texts balance appeals.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Author choice reflects audience — an emotionally-engaged audience responds to pathos; a skeptical analytical audience needs logos.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Pathos for moral/emotional issues; balance with logos for credibility",
          "commonErrors": [
                    "Thinking one appeal is always best."
          ]
},
        },
      ],
    },
  ],
};
