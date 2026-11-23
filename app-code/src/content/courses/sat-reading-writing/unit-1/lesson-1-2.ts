import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "satrw-u1-lesson-1-2",
  code: "1-2",
  title: "Command of Evidence",
  goal: "I CAN identify which details best support a claim.",
  standards: ["SAT RW 1.x"],
  vocabulary: [
    { term: "Evidence", definition: "Details that support a claim." },
    { term: "Relevant evidence", definition: "Details that actually support the specific claim." },
    { term: "Quotation", definition: "Exact text from the passage." },
    { term: "Paraphrase", definition: "Restating evidence in your own words." },
    { term: "Support vs illustration", definition: "Evidence proves; illustration just shows." },
    { term: "Strongest support", definition: "Most directly proves the claim." },
  ],
  concepts: [
    {
      id: "satrw-u1-evidence",
      title: "Command of evidence",
      skill: "Identify the strongest evidence supporting a given claim.",
      lesson: {
        sections: [
          {
            heading: "Evidence quality",
            body: "Not all details support equally — **strong** evidence directly proves the claim; **weak** evidence is related but doesn't prove it; **irrelevant** evidence is on-topic but doesn't support THIS claim. SAT questions give a claim and ask which quotation best supports it — you must match evidence to claim precisely.",
          },
          {
            heading: "Evidence types",
            body: "Quantitative (statistics, data) supports claims about scale or frequency; anecdotal (examples, cases) supports claims about possibility or illustration; causal (mechanism explanations) supports claims about why. Match the evidence TYPE to the claim TYPE.",
          },
        ],
        keyFormulas: [
          { name: "Evidence match", statement: "Claim type → matching evidence type" },
          { name: "Strongest test", statement: "Does this detail PROVE the claim, or just relate to it?" },
        ],
        workedExample: {
          problem: "Claim: 'The policy reduced costs.' Which supports it: (a) 'The policy was popular' or (b) 'Costs fell 30% after implementation'?",
          solution: "(b) — the 30% cost reduction directly proves the claim; popularity is related but doesn't demonstrate cost reduction.",
        },
      },
      questions: [
        {
          id: "satrw-u1-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The strongest evidence for a claim is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the longest quotation"
                    },
                    {
                              "id": "b",
                              "text": "the detail that most directly proves it"
                    },
                    {
                              "id": "c",
                              "text": "the most emotional example"
                    },
                    {
                              "id": "d",
                              "text": "the first detail mentioned"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence strength",
                              "statement": "Direct proof beats relatedness."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strong evidence directly demonstrates the claim — related or emotional details are weaker support.",
                              "marks": 1,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "Direct proof",
          "commonErrors": [
                    "Choosing by length or emotion."
          ]
},
        },
        {
          id: "satrw-u1-evidence-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "For claim 'the treatment is effective,' which evidence is strongest?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "patients liked it"
                    },
                    {
                              "id": "b",
                              "text": "symptoms improved in 80% of trial participants"
                    },
                    {
                              "id": "c",
                              "text": "it's expensive"
                    },
                    {
                              "id": "d",
                              "text": "doctors recommend it"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Evidence matching",
                              "statement": "Quantitative > anecdotal for efficacy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The 80% improvement rate directly demonstrates effectiveness — quantitative evidence proves efficacy claims better than opinions or preferences.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "80% improvement data",
          "commonErrors": [
                    "Choosing popularity or authority over data."
          ]
},
        },
        {
          id: "satrw-u1-evidence-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'related' evidence can fail to 'support' a claim, with an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Support vs relatedness",
                              "statement": "Proving vs mentioning."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Related evidence shares the topic but doesn't prove the specific claim — 'the policy was debated' relates to a policy claim but doesn't support 'the policy reduced costs'; it shows the policy existed, not that it worked.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Example: claim 'exercise improves mood'; evidence 'many people exercise' shows popularity, not effectiveness — doesn't prove the mood claim.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The test: does removing this evidence weaken the argument? If not, it's not really supporting.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Related ≠ supporting — must prove the specific claim",
          "commonErrors": [
                    "Accepting topical relevance as proof."
          ]
},
        },
        {
          id: "satrw-u1-evidence-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A passage has a statistic and an anecdote. For which type of claim is each stronger?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Evidence types",
                              "statement": "Data vs example serve different claims."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Statistics best support QUANTITATIVE claims — 'X% of cases', 'average improvement' — where scale or frequency matters; anecdotes best support QUALITATIVE claims — 'this approach can work', 'one person's experience' — where illustration matters.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Match: statistic for 'how much/many', anecdote for 'whether/how it's possible' — using anecdote for a statistical claim or vice versa weakens support.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "SAT questions test this matching — read the claim's type before evaluating evidence.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Statistics→quantitative claims; anecdotes→qualitative claims",
          "commonErrors": [
                    "Using any evidence for any claim."
          ]
},
        },
      ],
    },
  ],
};
