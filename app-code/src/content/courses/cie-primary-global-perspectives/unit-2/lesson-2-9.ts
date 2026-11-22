import type { Lesson } from "../../../types.ts";

export const lesson29: Lesson = {
  id: "cipg-u2-lesson-2-9",
  code: "2-9",
  title: "Stage 5 — Persuasive Communication on Issues",
  goal: "I CAN build a persuasive case for action on a global issue using evidence and reasoning.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 5: communication",
    "Cambridge Primary Global Perspectives 0838 strand: Communication",
  ],
  stage: 5,
  vocabulary: [
    {
      term: "Persuasive",
      definition: "Trying to convince others of your view.",
    },
    { term: "Thesis", definition: "Your main argument or position." },
    {
      term: "Supporting point",
      definition: "A reason that backs your thesis.",
    },
    {
      term: "Counter-argument",
      definition: "The opposing view you must address.",
    },
    { term: "Rebuttal", definition: "Your response to a counter-argument." },
    { term: "Call to action", definition: "What you want the audience to do." },
  ],
  concepts: [
    {
      id: "cipg-u2-s5-persuade",
      title: "Persuasive communication",
      skill:
        "Structure a persuasive argument with evidence and rebuttal at Stage 5 level.",
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
          {
            name: "Persuasive structure",
            statement: "thesis → reasons → rebuttal → CTA",
          },
          { name: "Rebuttal", statement: "answer to opposing view" },
        ],
        workedExample: {
          problem:
            "Build a persuasive case: 'Schools should have meat-free Mondays'.",
          solution:
            "Thesis: healthier planet and bodies. Reasons: reduce emissions, teach nutrition. Rebuttal: 'But kids need protein' → plant proteins exist. CTA: try it for a month.",
        },
      },
      questions: [
        {
          id: "cipg-u2-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis in persuasion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A school subject",
              },
              {
                id: "b",
                text: "A computer program",
              },
              {
                id: "c",
                text: "Your main argument or position",
              },
              {
                id: "d",
                text: "A type of essay",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "Main argument.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = central claim you argue for.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Main argument",
          },
        },
        {
          id: "cipg-u2-pe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the four parts of a persuasive structure.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive structure",
                statement: "Thesis, reasons, rebuttal, CTA.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis + supporting reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rebuttal + call to action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "thesis→reasons→rebuttal→CTA",
          },
        },
        {
          id: "cipg-u2-pe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why address counter-arguments in persuasion? Give an example.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rebuttal",
                statement: "Strengthening through opposition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Shows you've considered other views — stronger case.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: 'Some say X, but...' with response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Preempts objections.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Strengthens argument; example given",
          },
        },
        {
          id: "cipg-u2-pe-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define persuasive, thesis, supporting point, counter-argument, rebuttal, call to action. (b) Write a thesis for 'school uniforms'. (c) Give two supporting points with evidence. (d) Give one counter-argument. (e) Write a rebuttal. (f) Write a call to action. (g) Why is evidence important? (h) Deliver your persuasive outline.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasion",
                statement: "Thesis, evidence, rebuttal, CTA.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Clear thesis statement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Two evidence-backed points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid opposing view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid rebuttal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Specific achievable CTA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Evidence makes claims credible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Complete persuasive outline.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Persuasive structure: thesis, evidence, rebuttal, CTA.",
          },
        },
        {
          id: "cipg-u2-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'counter-argument'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The audience's applause",
              },
              {
                id: "b",
                text: "A type of evidence",
              },
              {
                id: "c",
                text: "The opposing view you must address",
              },
              {
                id: "d",
                text: "Your main argument",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counter-argument",
                statement: "Opposing view.",
              },
            ],
            steps: [
              {
                reasoning: "A counter-argument is the other side's view.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "The opposing view",
          },
        },
        {
          id: "cipg-u2-pe-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A persuasive speech has 1 thesis, 3 supporting points and 1 rebuttal. (a) How many supporting points are there? (b) How many argument parts are named in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasion",
                statement: "Counting argument parts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 supporting points.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 1 + 3 + 1 = 5 parts.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3; 5",
          },
        },
        {
          id: "cipg-u2-pe-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'rebuttal'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of evidence chart",
              },
              {
                id: "b",
                text: "Your opening greeting",
              },
              {
                id: "c",
                text: "Your response to a counter-argument",
              },
              {
                id: "d",
                text: "The opposing view itself",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rebuttal",
                statement: "Answer to opposing view.",
              },
            ],
            steps: [
              {
                reasoning: "A rebuttal answers the counter-argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Response to counter-argument",
          },
        },
        {
          id: "cipg-u2-pe-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "During a debate, 2 counter-arguments were raised against a speaker's thesis and the speaker gave 2 rebuttals. (a) How many counter-arguments were raised? (b) How many rebuttals were given?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
              },
              {
                label: "b",
                answer: 2,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rebuttal",
                statement: "Countering opposition.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 2 counter-arguments.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 rebuttals.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "2; 2",
          },
        },
        {
          id: "cipg-u2-pe-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct order of a persuasive structure?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Thesis, reasons, rebuttal, call to action",
              },
              {
                id: "b",
                text: "Reasons, call to action, thesis, rebuttal",
              },
              {
                id: "c",
                text: "Rebuttal, thesis, reasons, call to action",
              },
              {
                id: "d",
                text: "Call to action, thesis, reasons, rebuttal",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive structure",
                statement: "Thesis → reasons → rebuttal → CTA.",
              },
            ],
            steps: [
              {
                reasoning:
                  "State the claim, support it, answer opposition, then ask for action.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Thesis → reasons → rebuttal → CTA",
          },
        },
        {
          id: "cipg-u2-pe-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A persuasive case contains: a thesis, 3 supporting points, 1 rebuttal and 1 call to action. (a) How many supporting points are there? (b) How many rebuttals are there? (c) How many parts does the case have in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 1,
              },
              {
                label: "c",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasion",
                statement: "Counting argument parts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 supporting points.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 1 rebuttal.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 1 + 3 + 1 + 1 = 6 parts.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "3, 1, 6",
          },
        },
        {
          id: "cipg-u2-pe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is evidence important in persuasion?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It makes your claims credible and convincing",
              },
              {
                id: "b",
                text: "It replaces the need for a thesis",
              },
              {
                id: "c",
                text: "It makes the speech longer only",
              },
              {
                id: "d",
                text: "It confuses the audience",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence",
                statement: "Proof supports claims.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence backs up reasons and convinces listeners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Makes claims credible",
          },
        },
        {
          id: "cipg-u2-pe-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Three speakers each gave 2 supporting points for their thesis. (a) How many supporting points were given in total? (b) How many points did each speaker give? (c) If one speaker adds 1 more point, how many points will there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 6,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 7,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasion",
                statement: "Counting supporting points.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 speakers x 2 = 6 points.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 points each.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 6 + 1 = 7 points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "6, 2, 7",
          },
        },
        {
          id: "cipg-u2-pe-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What makes a rebuttal 'strong'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It ignores the opposing view",
              },
              {
                id: "b",
                text: "It repeats your thesis loudly",
              },
              {
                id: "c",
                text: "It answers the opposing view with clear reasons",
              },
              {
                id: "d",
                text: "It changes the subject",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rebuttal",
                statement: "Answer opposition with reasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A strong rebuttal directly answers the counter-argument.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Answers opposition with reasons",
          },
        },
        {
          id: "cipg-u2-pe-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A persuasive plan includes: 1 thesis, 4 supporting points, 2 counter-arguments addressed and 1 call to action. (a) How many supporting points are planned? (b) How many counter-arguments are addressed? (c) How many calls to action are there? (d) How many named parts does the plan have in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 2,
              },
              {
                label: "c",
                answer: 1,
              },
              {
                label: "d",
                answer: 8,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasion",
                statement: "Planning argument parts.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 supporting points.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 2 counter-arguments.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 1 call to action.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 1 + 4 + 2 + 1 = 8 named parts.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "4, 2, 1, 8",
          },
        },
        {
          id: "cipg-u2-pe-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does acknowledging counter-arguments affect your persuasive case?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It confuses the audience",
              },
              {
                id: "b",
                text: "It makes the case stronger by showing you considered other views",
              },
              {
                id: "c",
                text: "It means you have no thesis",
              },
              {
                id: "d",
                text: "It makes the case weaker always",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rebuttal",
                statement: "Opposition strengthens the case.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addressing opposition shows thoroughness and builds trust.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Strengthens the case",
          },
        },
        {
          id: "cipg-u2-pe-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define persuasive, thesis, supporting point, counter-argument, rebuttal, call to action. (b) Write a thesis for 'school uniforms'. (c) Give two supporting points with evidence. (d) Give one counter-argument. (e) Write a rebuttal to it. (f) Write a call to action. (g) Why is evidence important in persuasion? (h) Deliver your complete persuasive outline.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasion",
                statement: "Thesis, evidence, rebuttal, CTA.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Clear thesis statement on uniforms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Two evidence-backed supporting points.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Valid opposing view.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Valid rebuttal answering the counter-argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Specific, achievable CTA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Evidence makes claims credible and convincing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Complete persuasive outline with all parts.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Persuasive structure: thesis, evidence, rebuttal, CTA.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-pe-notes",
      title: "Persuasion — notes",
      summary:
        "Thesis → evidence-backed reasons → rebut counter-arguments → call to action.",
      sections: [
        {
          heading: "Key idea",
          body: "Address opposition to strengthen your case.",
        },
        {
          heading: "Structure",
          body: "Clear position + proof + response to critics + ask.",
        },
      ],
    },
  ],
};
