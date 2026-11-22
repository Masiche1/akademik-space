import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "edpe5-u2-lesson-2-2",
  code: "2-2",
  title: "Non-Fiction Analysis and Evaluation",
  goal: "I CAN evaluate non-fiction texts for reliability, bias and purpose.",
  standards: ["Year 5 Reading"],
  vocabulary: [
    { term: "Bias", definition: "Unfair preference for one view." },
    { term: "Reliability", definition: "Whether information can be trusted." },
    {
      term: "Persuasive techniques",
      definition: "Methods used to convince readers.",
    },
    { term: "Objective", definition: "Factual, unbiased reporting." },
  ],
  concepts: [
    {
      id: "edpe5-u2-bias",
      title: "Bias and objectivity",
      skill: "Identify bias and evaluate reliability in non-fiction.",
      lesson: {
        sections: [
          {
            heading: "Spotting bias",
            body: "Biased texts use loaded language: 'The foolish decision' vs 'The questionable decision'. They present one side only, ignore counterarguments, or use emotive words ('tragic', 'wonderful').",
          },
          {
            heading: "Evaluating reliability",
            body: "Ask: who wrote it? What's their purpose? Are there sources? Is it balanced? Reliable texts cite evidence, acknowledge different views, and separate fact from opinion.",
          },
        ],
        keyFormulas: [
          { name: "Bias", statement: "One-sided or loaded" },
          { name: "Objective", statement: "Balanced, factual" },
          { name: "Reliability", statement: "Trustworthy, sourced" },
        ],
        workedExample: {
          problem: "Is 'Everyone knows school uniforms are terrible!' biased?",
          solution:
            "Yes — 'everyone knows' is a generalisation; 'terrible' is emotive; no evidence given.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is bias in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being formal" },
              { id: "b", text: "Being unfairly one-sided" },
              { id: "c", text: "Being detailed" },
              { id: "d", text: "Being short" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Unfair preference.",
              },
            ],
            steps: [
              { reasoning: "Bias = one-sided.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Being unfairly one-sided",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe5-u2-bias-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which phrase is biased?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The policy affected 500 people" },
              { id: "b", text: "The stupid policy was forced on us" },
              { id: "c", text: "The policy was debated" },
              { id: "d", text: "The policy was implemented" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Loaded language",
                statement: "'stupid', 'forced' = biased.",
              },
            ],
            steps: [
              { reasoning: "Identify loaded words.", marks: 1, markCode: "M" },
              { reasoning: "Answer: stupid/forced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** stupid/forced",
            commonErrors: ["Missing loaded language."],
          },
        },
        {
          id: "edpe5-u2-bias-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two signs that a text might be biased.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bias signs",
                statement: "Emotive language, one-sided, no sources.",
              },
            ],
            steps: [
              { reasoning: "Sign 1 given.", marks: 1, markCode: "A" },
              { reasoning: "Sign 2 given.", marks: 1, markCode: "A" },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. emotive words; only one side presented; no evidence",
            commonErrors: ["Vague or invalid signs."],
          },
        },
        {
          id: "edpe5-u2-bias-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this biased sentence objectively: 'The horrible new law will destroy our community!'",
          parts: [
            { label: "a", prompt: "Remove emotive word", marks: 1 },
            { label: "b", prompt: "Remove absolute claim", marks: 1 },
            { label: "c", prompt: "Make it factual", marks: 1 },
            { label: "d", prompt: "Write objective version", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Objectivity",
                statement: "Remove 'horrible', 'destroy'; state facts.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Emotive word removed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Absolute removed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Factual statement.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Objective version.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "e.g. 'The new law may affect community services.'",
            commonErrors: ["Still biased or vague."],
          },
        },
      ],
    },
    {
      id: "edpe5-u2-evaluate",
      title: "Evaluating texts and arguments",
      skill: "Evaluate arguments and texts for strength and validity.",
      lesson: {
        sections: [
          {
            heading: "Strong vs weak arguments",
            body: "Strong arguments: clear claim, supporting evidence, logical reasoning, addresses counterarguments. Weak: unsupported claims, emotional appeals only, logical fallacies.",
          },
          {
            heading: "Text evaluation",
            body: "Consider: purpose, audience, structure, language, evidence. Is the text effective for its purpose? Does it achieve what it sets out to do?",
          },
        ],
        keyFormulas: [
          { name: "Claim", statement: "What the writer argues" },
          { name: "Evidence", statement: "Support for claim" },
          { name: "Evaluation", statement: "How well it works" },
        ],
        workedExample: {
          problem: "Is 'Homework helps because I said so' a strong argument?",
          solution: "No — no evidence, just assertion.",
        },
      },
      questions: [
        {
          id: "edpe5-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an argument strong?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Emotional language" },
              { id: "b", text: "Being loud" },
              { id: "c", text: "Being long" },
              { id: "d", text: "Evidence and logic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong argument",
                statement: "Evidence + logic.",
              },
            ],
            steps: [{ reasoning: "Evidence needed.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Evidence and logic",
            commonErrors: ["Emotional appeal only."],
          },
        },
        {
          id: "edpe5-u2-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a weak argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Studies show X improves Y by 20%" },
              { id: "b", text: "You should do X because it's obviously best" },
              { id: "c", text: "Evidence A and B support X" },
              { id: "d", text: "X works because of mechanism Z" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weak argument",
                statement: "'obviously' = no evidence.",
              },
            ],
            steps: [
              { reasoning: "No evidence given.", marks: 1, markCode: "M" },
              { reasoning: "Answer: obviously best.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** obviously best",
            commonErrors: ["Missing lack of evidence."],
          },
        },
        {
          id: "edpe5-u2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a logical fallacy? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fallacy",
                statement:
                  "Flawed reasoning; e.g. 'Everyone does it so it must be right'.",
              },
            ],
            steps: [
              { reasoning: "Definition given.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
              { reasoning: "Example valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flawed reasoning; e.g. bandwagon appeal",
            commonErrors: ["Vague or wrong example."],
          },
        },
        {
          id: "edpe5-u2-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate this argument: 'We should ban homework because I hate it and my friend does too.'",
          parts: [
            { label: "a", prompt: "What's the claim?", marks: 1 },
            { label: "b", prompt: "What evidence is given?", marks: 1 },
            { label: "c", prompt: "What logical problems exist?", marks: 1 },
            { label: "d", prompt: "How could it be improved?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Argument evaluation",
                statement:
                  "Claim: ban homework; evidence: personal feelings only; weak.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Claim identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Only feelings cited.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Logical flaws noted.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Improvement suggested.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Ban homework; personal feelings only; weak logic; add evidence/studies",
            commonErrors: ["Not evaluating properly."],
          },
        },
      ],
    },
  ],
};
