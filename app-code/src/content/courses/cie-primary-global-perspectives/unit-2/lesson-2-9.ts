import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipg-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 5 — Persuasive Communication on Issues",
  goal: "I CAN build a persuasive case for action on a global issue using evidence and reasoning.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 5: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
  stage: 5,
  vocabulary: [
    { term: "Persuasive", definition: "Trying to convince others of your view." },
    { term: "Thesis", definition: "Your main argument or position." },
    { term: "Supporting point", definition: "A reason that backs your thesis." },
    { term: "Counter-argument", definition: "The opposing view you must address." },
    { term: "Rebuttal", definition: "Your response to a counter-argument." },
    { term: "Call to action", definition: "What you want the audience to do." },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-persuade",
      title: "Persuasive communication",
      skill: "Structure a persuasive argument with evidence and rebuttal at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Structure of persuasion",
            body: "Strong persuasion: state your thesis clearly, support with evidence-backed reasons, address counter-arguments honestly, then end with a call to action. 'We should ban single-use plastics because...'",
          },
          {
            heading: "Handling opposition",
            body: "Address the other side: 'Some say it's too expensive, but reusable alternatives cost less long-term.' Acknowledging counter-arguments makes your case stronger, not weaker.",
          },
        ],
        keyFormulas: [
          { name: "Persuasive structure", statement: "thesis → reasons → rebuttal → CTA" },
          { name: "Rebuttal", statement: "answer to opposing view" },
        ],
        workedExample: {
          problem: "Build a persuasive case: 'Schools should have meat-free Mondays'.",
          solution: "Thesis: healthier planet and bodies. Reasons: reduce emissions, teach nutrition. Rebuttal: 'But kids need protein' → plant proteins exist. CTA: try it for a month.",
        },
      },
      questions: [
        {
          id: "cipg-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis in persuasion?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Your main argument or position"
                    },
                    {
                              "id": "b",
                              "text": "A type of essay"
                    },
                    {
                              "id": "c",
                              "text": "A school subject"
                    },
                    {
                              "id": "d",
                              "text": "A computer program"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Thesis",
                              "statement": "Main argument."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis = central claim you argue for.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Main argument"
},
        },
        {
          id: "cipg-u2-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four parts of a persuasive structure.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Persuasive structure",
                              "statement": "Thesis, reasons, rebuttal, CTA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Thesis + supporting reasons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Rebuttal + call to action.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "thesis→reasons→rebuttal→CTA"
},
        },
        {
          id: "cipg-u2-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why address counter-arguments in persuasion? Give an example.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Rebuttal",
                              "statement": "Strengthening through opposition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Shows you've considered other views — stronger case.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Example: 'Some say X, but...' with response.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Preempts objections.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Strengthens argument; example given"
},
        },
        {
          id: "cipg-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define persuasive, thesis, supporting point, counter-argument, rebuttal, call to action. (b) Write a thesis for 'school uniforms'. (c) Give two supporting points with evidence. (d) Give one counter-argument. (e) Write a rebuttal. (f) Write a call to action. (g) Why is evidence important? (h) Deliver your persuasive outline.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Persuasion",
                              "statement": "Thesis, evidence, rebuttal, CTA."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Clear thesis statement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Two evidence-backed points.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Valid opposing view.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Valid rebuttal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Specific achievable CTA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Evidence makes claims credible.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Complete persuasive outline.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Persuasive structure: thesis, evidence, rebuttal, CTA."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-pe-notes",
      title: "Persuasion — notes",
      summary: "Thesis → evidence-backed reasons → rebut counter-arguments → call to action.",
      sections: [
        { heading: "Key idea", body: "Address opposition to strengthen your case." },
        { heading: "Structure", body: "Clear position + proof + response to critics + ask." },
      ],
    },
  ],
};
