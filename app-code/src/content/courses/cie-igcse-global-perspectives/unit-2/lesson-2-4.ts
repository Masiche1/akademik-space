import type { Lesson } from "../../../types.ts";

export const lesson114: Lesson = {
  id: "ciegp-u2-lesson-2-4",
  code: "2-4",
  title: "Persuasive Communication",
  goal: "I CAN communicate complex findings persuasively to different audiences.",
  standards: ["Cambridge IGCSE Global Perspectives 0457: persuasive communication", "0457: presentation"],
  
  vocabulary: [
    { term: "Persuasion", definition: "Convincing others of your position." },
    { term: "Rhetorical device", definition: "Technique for persuasive effect — ethos, pathos, logos." },
    { term: "Evidence-based argument", definition: "Claims supported by data/facts." },
    { term: "Call to action", definition: "Request for audience to do something." },
    { term: "Narrative", definition: "Story structure making points memorable." },
    { term: "Visual aid", definition: "Chart/image supporting spoken points." },
  ],
  concepts: [
    {
      id: "ciegp-u2-s4-persuade",
      title: "Persuasive communication",
      skill: "Present findings persuasively at IGCSE GP level.",
      lesson: {
        sections: [
          {
            heading: "Persuasive structure",
            body: "Hook attention → establish credibility → present evidence → address counter-arguments → call to action. Use ethos (credibility), pathos (emotion), logos (logic) appropriately.",
          },
          {
            heading: "Audience adaptation",
            body: "Policymakers need data and feasibility; public needs stories and emotion; peers need relevance. Same findings, different framing. Visual aids make data memorable.",
          },
        ],
        keyFormulas: [
          { name: "Ethos/pathos/logos", statement: "credibility/emotion/logic" },
          { name: "Structure", statement: "hook→evidence→counter→CTA" },
        ],
        workedExample: {
          problem: "Persuade your school to adopt a recycling programme — structure your pitch.",
          solution: "Hook: 'We throw away X kg weekly.' Evidence: costs, environmental data. Counter: 'it's inconvenient' → solutions. CTA: 'vote for it Friday.'",
        },
      },
      questions: [
        {
          id: "ciegp-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a call to action?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Request for audience to do something"
                    },
                    {
                              "id": "b",
                              "text": "A type of chart"
                    },
                    {
                              "id": "c",
                              "text": "A voting system"
                    },
                    {
                              "id": "d",
                              "text": "A research method"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Call to action",
                              "statement": "Requested response."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CTA tells audience what to do next.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Request for action"
},
        },
        {
          id: "ciegp-u2-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are ethos, pathos and logos? Give one example of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rhetorical appeals",
                              "statement": "Credibility/emotion/logic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ethos=credibility, pathos=emotion, logos=logic.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Examples for each.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Credibility/emotion/logic + examples"
},
        },
        {
          id: "ciegp-u2-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why should you address counter-arguments in a persuasive presentation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Counter-arguments",
                              "statement": "Strengthens persuasion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows you've considered opposing views.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakens audience objections.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Builds credibility.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Strengthens credibility and position"
},
        },
        {
          id: "ciegp-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define persuasion, rhetorical device, evidence-based argument, call to action, narrative, visual aid. (b) What is persuasive structure? (c) Explain ethos/pathos/logos with examples. (d) How do you adapt to audiences? (e) Why use visual aids? (f) What makes a strong opening hook? (g) Give an example of a persuasive statistic. (h) Write a 3-minute pitch outline for 'schools should teach financial literacy'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasion",
                              "statement": "Structure, appeals, audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Hook→evidence→counter→CTA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Credibility/emotion/logic explained.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Language/depth/examples adapted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Make data memorable/clear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Surprising fact/question/story.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) e.g. '70% can't budget' (if sourced).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid pitch outline.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Persuasive communication techniques."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciegp-u2-pe-notes",
      title: "Persuasion — notes",
      summary: "Hook→evidence→counter→CTA; use ethos/pathos/logos; adapt to audience.",
      sections: [
        { heading: "Key idea", body: "Persuasion combines logic, emotion and credibility." },
        { heading: "Audience", body: "Same data, different framing for different listeners." },
      ],
    },
  ],
};
