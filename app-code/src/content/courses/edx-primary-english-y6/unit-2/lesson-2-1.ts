import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "edpe6-u2-lesson-2-1",
  code: "2-1",
  title: "Evaluative Reading",
  goal: "I CAN evaluate texts critically for purpose, audience and effectiveness.",
  standards: ["Year 6 Reading"],
  vocabulary: [
    {
      term: "Evaluative reading",
      definition: "Judging how well a text achieves its purpose.",
    },
    {
      term: "Effectiveness",
      definition: "How well the text works for its audience.",
    },
    {
      term: "Critical analysis",
      definition: "Examining strengths and weaknesses.",
    },
    { term: "Purpose", definition: "What the writer intends to achieve." },
  ],
  concepts: [
    {
      id: "edpe6-u2-evaluation",
      title: "Evaluating text effectiveness",
      skill: "Judge how well texts achieve their purposes.",
      lesson: {
        sections: [
          {
            heading: "Questions to ask",
            body: "What's the purpose? Who's the audience? Does it achieve the purpose? What strengths make it effective? What weaknesses limit it? How do structure and language contribute?",
          },
          {
            heading: "Balanced judgement",
            body: "Good evaluation acknowledges both strengths and weaknesses. 'The persuasive techniques are effective, but the evidence is thin.' Avoid one-sided praise or criticism.",
          },
        ],
        keyFormulas: [
          { name: "Purpose", statement: "What writer intends" },
          { name: "Effectiveness", statement: "How well it works" },
          { name: "Balance", statement: "Strengths + weaknesses" },
        ],
        workedExample: {
          problem:
            "Is 'Buy now! Best prices! Limited time!' an effective advert?",
          solution:
            "Partly — urgency works, but no evidence or product details weakens it.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does evaluative reading require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading aloud" },
              { id: "b", text: "Summarising" },
              { id: "c", text: "Judging effectiveness" },
              { id: "d", text: "Copying" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluative reading",
                statement: "Judging effectiveness.",
              },
            ],
            steps: [
              { reasoning: "Evaluation = judgement.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Judging effectiveness",
            commonErrors: ["Wrong skill."],
          },
        },
        {
          id: "edpe6-u2-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's a weakness of 'Buy now! Best prices! Limited time!'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No evidence or details" },
              { id: "b", text: "Too formal" },
              { id: "c", text: "Too long" },
              { id: "d", text: "Boring" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Persuasive but lacks evidence.",
              },
            ],
            steps: [
              { reasoning: "Weakness identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: no evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** No evidence or details",
            commonErrors: ["Missing key weakness."],
          },
        },
        {
          id: "edpe6-u2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate: 'School uniforms should be banned because they're uncomfortable and old-fashioned.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Opinion with reasons; no evidence; emotive words.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose/claim identified.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Strengths noted.", marks: 1, markCode: "A" },
              { reasoning: "Weaknesses noted.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Opinion with reasons but no evidence; emotive language limits objectivity",
            commonErrors: ["One-sided or vague."],
          },
        },
        {
          id: "edpe6-u2-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate a story's ending: does it satisfy? 'And they all lived happily ever after.'",
          parts: [
            { label: "a", prompt: "Is it satisfying?", marks: 1 },
            { label: "b", prompt: "Why or why not?", marks: 1 },
            { label: "c", prompt: "What could improve it?", marks: 1 },
            { label: "d", prompt: "When might this ending work?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ending evaluation",
                statement:
                  "Convenient but clichéd; could add detail; works for fairy tales.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Satisfaction judged.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasons given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Improvement suggested.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Context identified.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Convenient but clichéd; lacks detail; add specifics; works for fairy tales",
            commonErrors: ["No evaluation or one-sided."],
          },
        },
      ],
    },
    {
      id: "edpe6-u2-structure",
      title: "Text structure and organisation",
      skill: "Analyse how text structure serves purpose and meaning.",
      lesson: {
        sections: [
          {
            heading: "Structural analysis",
            body: "How is the text organised? Chronological? Thematic? Problem-solution? Compare-contrast? Flashbacks? Each structure shapes how readers receive information and creates effects.",
          },
          {
            heading: "Purpose of structure",
            body: "Why this structure? Non-linear narratives create mystery; chronological builds suspense; circular structures show cyclical themes. Structure is a deliberate choice.",
          },
        ],
        keyFormulas: [
          { name: "Chronological", statement: "Time order" },
          { name: "Non-linear", statement: "Out of order — flashbacks" },
          { name: "Circular", statement: "Ends where it began" },
        ],
        workedExample: {
          problem: "Why might a mystery novel use flashbacks?",
          solution:
            "To reveal information gradually, creating suspense and deepening character.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is chronological order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alphabetical" },
              { id: "b", text: "Random order" },
              { id: "c", text: "Time order" },
              { id: "d", text: "Importance order" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronological",
                statement: "Time order.",
              },
            ],
            steps: [
              { reasoning: "Chronological = time.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Time order",
            commonErrors: ["Wrong structure."],
          },
        },
        {
          id: "edpe6-u2-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What effect does a circular structure create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Suspense" },
              { id: "b", text: "Confusion" },
              { id: "c", text: "Sense of completeness/cycle" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular structure",
                statement: "Creates sense of cycle/completion.",
              },
            ],
            steps: [
              { reasoning: "Effect identified.", marks: 1, markCode: "M" },
              { reasoning: "Answer: completeness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Sense of completeness/cycle",
            commonErrors: ["Wrong effect."],
          },
        },
        {
          id: "edpe6-u2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might a writer use flashbacks in a story?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Flashbacks",
                statement:
                  "Reveal info gradually; deepen character; create suspense.",
              },
            ],
            steps: [
              { reasoning: "Purpose identified.", marks: 1, markCode: "M" },
              { reasoning: "Effect explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reveal information gradually, deepen character, create suspense",
            commonErrors: ["No purpose or vague."],
          },
        },
        {
          id: "edpe6-u2-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare chronological vs non-linear narrative for a war story.",
          parts: [
            { label: "a", prompt: "How does each structure work?", marks: 1 },
            { label: "b", prompt: "What effect does each create?", marks: 1 },
            {
              label: "c",
              prompt: "Which is better for this genre? Why?",
              marks: 1,
            },
            { label: "d", prompt: "What does the choice reveal?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure comparison",
                statement:
                  "Chronological=linear; non-linear=fragmented; effects differ.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Both explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Effects identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Choice justified.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Purpose revealed.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Chronological=linear; non-linear=fragmented; effects; choice justified; reveals purpose",
            commonErrors: ["No comparison or weak reasoning."],
          },
        },
      ],
    },
  ],
};
