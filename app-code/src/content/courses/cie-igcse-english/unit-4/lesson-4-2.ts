import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "ciege-u4-lesson-4-2",
  code: "4-2",
  title: "Discursive Writing",
  goal: "I CAN write a balanced discursive essay exploring viewpoints.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: discursive"],
  vocabulary: [
    { term: "Discursive", definition: "Exploring a topic from multiple viewpoints." },
    { term: "For and against", definition: "Presenting both sides of an argument." },
    { term: "Balanced", definition: "Giving fair weight to different views." },
    { term: "Concession", definition: "Acknowledging the opposing side." },
    { term: "Evaluation", definition: "Weighing up arguments to reach a judgement." },
  ],
  concepts: [
    {
      id: "ciege-u4-s2-balance",
      title: "Presenting both sides",
      skill: "Structure a discursive essay fairly at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Discursive vs argumentative",
            body: "Argumentative essays argue one side strongly. Discursive essays explore multiple viewpoints, often ending with a balanced conclusion or personal judgement.",
          },
          {
            heading: "Structure",
            body: "Introduction: introduce the debate. Body: present 'for' arguments, then 'against', or interweave viewpoints. Conclusion: evaluate and reach a balanced position.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Plan a discursive essay on 'Should homework be given?'.",
          solution: "Intro: homework debate. For: reinforces learning. Against: stress, less free time. Conclusion: balanced view — some homework useful if appropriate.",
        },
      },
      questions: [
        {
          id: "ciege-u4-s2-ba-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is discursive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Arguing one side" }, { id: "b", text: "Exploring multiple viewpoints" }, { id: "c", text: "Telling a story" }, { id: "d", text: "Describing a place" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Discursive", statement: "Multiple viewpoints." }],
            steps: [
              { reasoning: "Discursive explores different viewpoints fairly.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Multiple viewpoints",
          },
        },
        {
          id: "ciege-u4-s2-ba-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence presenting the 'for' side of 'Should schools have uniforms?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Presenting viewpoint", statement: "One side clearly." }],
            steps: [
              { reasoning: "The sentence gives a pro-uniform argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It could be developed with evidence.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One pro-uniform sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence presenting the 'against' side of the same topic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Opposing viewpoint", statement: "Balanced presentation." }],
            steps: [
              { reasoning: "The sentence gives an anti-uniform argument.", marks: 1, markCode: "AO2" },
              { reasoning: "It differs from the 'for' side.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One anti-uniform sentence",
          },
        },
        {
          id: "ciege-u4-s2-ba-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a balanced conclusion for a discursive essay on school uniforms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Balanced conclusion", statement: "Weighs both sides." }],
            steps: [
              { reasoning: "The conclusion acknowledges both sides.", marks: 1, markCode: "AO2" },
              { reasoning: "It reaches a reasoned judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not simply repeat arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Balanced conclusion",
          },
        },
      ],
    },
    {
      id: "ciege-u4-s2-evaluate",
      title: "Evaluating arguments",
      skill: "Weigh up viewpoints and reach a judgement.",
      lesson: {
        sections: [
          {
            heading: "Evaluation",
            body: "Evaluating means judging which arguments are strongest. Consider: Are the reasons logical? Is the evidence convincing? Does the conclusion follow?",
          },
          {
            heading: "Balanced judgement",
            body: "A good discursive conclusion doesn't just pick a side — it explains why, weighing the strengths of each viewpoint. 'While uniforms promote equality, they may restrict individuality; however, the benefits of unity seem greater.'",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Evaluate: 'Uniforms save money' vs 'Uniforms restrict self-expression'.",
          solution: "The cost argument is practical; the self-expression argument is about rights. A balanced view might say uniforms could be optional but smart.",
        },
      },
      questions: [
        {
          id: "ciege-u4-s2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'evaluate' mean in discursive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "List arguments" }, { id: "b", text: "Weigh up viewpoints to reach a judgement" }, { id: "c", text: "Summarise" }, { id: "d", text: "Describe" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Weighing arguments." }],
            steps: [
              { reasoning: "Evaluation means judging which view is stronger.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Weighing viewpoints",
          },
        },
        {
          id: "ciege-u4-s2-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence evaluating whether homework helps learning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Judgement with reasons." }],
            steps: [
              { reasoning: "The sentence gives a judgement.", marks: 1, markCode: "AO2" },
              { reasoning: "It gives a reason for the judgement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One evaluative sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence that concedes a point to the opposing side.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Concession", statement: "Acknowledge opposing view." }],
            steps: [
              { reasoning: "The sentence acknowledges an opposing viewpoint.", marks: 1, markCode: "AO2" },
              { reasoning: "It could use 'although', 'while', 'it is true that'.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One concession sentence",
          },
        },
        {
          id: "ciege-u4-s2-ev-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences that could form the conclusion of a discursive essay on 'Should phones be allowed in school?'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Discursive conclusion", statement: "Balanced judgement." }],
            steps: [
              { reasoning: "Both sentences weigh the arguments.", marks: 1, markCode: "AO2" },
              { reasoning: "A balanced position is reached.", marks: 1, markCode: "AO2" },
              { reasoning: "Connectives link the evaluation.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two-sentence conclusion",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u4-s2-disc-notes",
      title: "Discursive writing — revision notes",
      summary: "Multiple viewpoints, balance, evaluation.",
      sections: [
        { heading: "Balance", body: "Present both sides fairly. Use concessions ('although...') to acknowledge opposing views." },
        { heading: "Evaluation", body: "Weigh arguments by logic and evidence. Reach a reasoned judgement, not just a summary." },
      ],
    },
  ],
};
