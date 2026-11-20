import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "edpe6-u3-lesson-3-1",
  code: "3-1",
  title: "Formal and Persuasive Writing",
  goal: "I CAN write sophisticated formal and persuasive texts.",
  standards: ["Year 6 Writing"],
  vocabulary: [
    {
      term: "Formal register",
      definition: "Polished, impersonal language for formal contexts.",
    },
    {
      term: "Thesis",
      definition: "The main argument or position in persuasive writing.",
    },
    {
      term: "Evidence-based argument",
      definition: "Persuasion supported by facts and examples.",
    },
    {
      term: "Structure",
      definition: "How ideas are organised: intro → points → conclusion.",
    },
  ],
  concepts: [
    {
      id: "edpe6-u3-formal",
      title: "Formal writing",
      skill: "Write polished formal letters, reports and articles.",
      lesson: {
        sections: [
          {
            heading: "Formal features",
            body: "Formal writing: precise vocabulary, complex sentences, objective tone, logical structure. Avoid contractions, slang, first person unless required. Use connectives to link ideas.",
          },
          {
            heading: "Article/report writing",
            body: "Headlines hook readers. Introduction gives context. Body presents information logically with subheadings. Conclusion summarises or calls to action. Objective tone.",
          },
        ],
        keyFormulas: [
          { name: "Formal tone", statement: "Objective, precise, polished" },
          { name: "Structure", statement: "Intro → body → conclusion" },
          { name: "Connectives", statement: "Link ideas smoothly" },
        ],
        workedExample: {
          problem: "Write a formal opening for an article about school meals.",
          solution:
            "'School meals play a crucial role in children's health and academic performance, yet concerns about quality persist.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What characterises formal writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Slang and contractions" },
              { id: "b", text: "Precise, objective language" },
              { id: "c", text: "Short sentences only" },
              { id: "d", text: "Emotional appeals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "Precise and objective.",
              },
            ],
            steps: [
              {
                reasoning: "Formal = precise/objective.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Precise, objective language",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "edpe6-u3-fm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The thing is..." },
              { id: "b", text: "In conclusion, the evidence suggests..." },
              { id: "c", text: "Basically, it's..." },
              { id: "d", text: "Like, whatever..." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "Formal connectives and phrasing.",
              },
            ],
            steps: [
              { reasoning: "Identify formal.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: evidence suggests.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** In conclusion, the evidence suggests...",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "edpe6-u3-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a formal opening sentence for a report on school recycling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal opening",
                statement: "Objective, precise, contextual.",
              },
            ],
            steps: [
              { reasoning: "Formal tone.", marks: 1, markCode: "A" },
              { reasoning: "Purpose clear.", marks: 1, markCode: "A" },
              { reasoning: "Effective opening.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'This report examines the effectiveness of recycling initiatives at our school over the past academic year.'",
            commonErrors: ["Informal or vague."],
          },
        },
        {
          id: "edpe6-u3-fm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a formal letter opening requesting information from a local authority about cycle lanes.",
          parts: [
            { label: "a", prompt: "Formal greeting and address", marks: 1 },
            { label: "b", prompt: "Purpose stated clearly", marks: 1 },
            { label: "c", prompt: "Specific request made", marks: 1 },
            { label: "d", prompt: "Polite closing", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal letter",
                statement: "All elements, formal register.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greeting/address.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Purpose clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Request specific.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Polite closing.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Dear Sir or Madam, I am writing to request information regarding proposed cycle lane developments on Main Street... I would appreciate any available documentation. Yours faithfully, [Name]'",
            commonErrors: ["Informal or incomplete."],
          },
        },
      ],
    },
    {
      id: "edpe6-u3-persuasive",
      title: "Advanced persuasive writing",
      skill:
        "Write sophisticated persuasive texts with evidence and rhetorical skill.",
      lesson: {
        sections: [
          {
            heading: "Persuasive structure",
            body: "Hook → thesis (clear position) → supporting arguments with evidence → counterargument addressed → conclusion with call to action. Each paragraph develops one point.",
          },
          {
            heading: "Rhetorical sophistication",
            body: "Use: rhetorical questions, rule of three, emotive language, repetition, statistics/facts, expert quotes, personal anecdotes. Vary techniques for maximum impact.",
          },
        ],
        keyFormulas: [
          { name: "Thesis", statement: "Clear position" },
          { name: "Evidence", statement: "Facts/examples supporting" },
          { name: "Counterargument", statement: "Address opposition" },
        ],
        workedExample: {
          problem: "Write a persuasive thesis for banning homework.",
          solution:
            "'Homework should be abolished because it causes unnecessary stress without improving academic outcomes.'",
        },
      },
      questions: [
        {
          id: "edpe6-u3-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question" },
              { id: "b", text: "The main argument/position" },
              { id: "c", text: "An example" },
              { id: "d", text: "A conclusion" },
            ],
            correctChoiceId: "b",
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
              { reasoning: "Thesis = main argument.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The main argument/position",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u3-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why address counterarguments in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It confuses readers" },
              { id: "b", text: "It strengthens credibility" },
              { id: "c", text: "It's required" },
              { id: "d", text: "It weakens argument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Counterargument",
                statement: "Shows balance, builds trust.",
              },
            ],
            steps: [
              { reasoning: "Purpose understood.", marks: 1, markCode: "M" },
              { reasoning: "Answer: credibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It strengthens credibility",
            commonErrors: ["Wrong reason."],
          },
        },
        {
          id: "edpe6-u3-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a persuasive thesis for introducing school uniforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thesis",
                statement: "Clear position + brief reason.",
              },
            ],
            steps: [
              { reasoning: "Position stated.", marks: 1, markCode: "A" },
              { reasoning: "Reason given.", marks: 1, markCode: "A" },
              { reasoning: "Persuasive tone.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'School uniforms should be introduced because they promote equality and reduce bullying.'",
            commonErrors: ["No position or weak reason."],
          },
        },
        {
          id: "edpe6-u3-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a persuasive paragraph (5-6 sentences) arguing for more school sports, using at least two rhetorical techniques.",
          parts: [
            { label: "a", prompt: "Clear thesis", marks: 1 },
            {
              label: "b",
              prompt: "Supporting argument with evidence",
              marks: 1,
            },
            { label: "c", prompt: "Rhetorical technique(s) used", marks: 1 },
            { label: "d", prompt: "Persuasive tone throughout", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Persuasive paragraph",
                statement: "All elements present.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Thesis clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Techniques identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Tone persuasive.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Our school desperately needs more sports time. Did you know students who exercise regularly achieve higher grades? Sports build teamwork, discipline and confidence — skills that last a lifetime. Every child deserves the chance to shine on the field. Let's give them that chance.'",
            commonErrors: ["Missing elements or weak techniques."],
          },
        },
      ],
    },
  ],
};
