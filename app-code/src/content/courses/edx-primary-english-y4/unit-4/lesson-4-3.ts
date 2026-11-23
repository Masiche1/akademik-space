import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edpe4-u4-lesson-4-3",
  code: "4-3",
  title: "Non-fiction and Balanced Arguments",
  goal: "I CAN write non-fiction reports and balanced arguments.",
  standards: ["Year 4 Writing"],
  vocabulary: [
    {
      term: "Report",
      definition: "Factual non-fiction organised by subheadings.",
    },
    {
      term: "Argument",
      definition: "A reasoned case for or against something.",
    },
    {
      term: "Connective",
      definition: "Linking words: however, therefore, furthermore.",
    },
    {
      term: "Counter-argument",
      definition: "The opposing view you acknowledge.",
    },
  ],
  concepts: [
    {
      id: "edpe4-u4-report",
      title: "Writing reports",
      skill: "Structure non-fiction reports with headings and facts.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "A report has: a title, introduction (what it's about), subheadings for each topic, factual paragraphs under each, and a conclusion. Reports use formal language, facts not opinions, and present tense. Organise information logically.",
          },
          {
            heading: "Research and notes",
            body: "Before writing, gather facts from reliable sources. Make notes under each subheading. Paraphrase in your own words — don't copy sentences. Check facts are accurate and cite where information came from if needed.",
          },
        ],
        keyFormulas: [
          {
            name: "Report",
            statement: "Title + intro + subheadings + facts + conclusion",
          },
        ],
        workedExample: {
          problem: "Plan a report on 'The Amazon Rainforest'.",
          solution:
            "Subheadings: location, climate, animals, plants, threats, conservation.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-rep-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What tense do reports usually use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Past" },
              { id: "b", text: "Present" },
              { id: "c", text: "Future" },
              { id: "d", text: "Any" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Report tense",
                statement: "Present tense.",
              },
            ],
            steps: [
              {
                reasoning: "Facts are stated in present tense.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Present",
            commonErrors: ["Wrong tense."],
          },
        },
        {
          id: "edpe4-u4-rep-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What should a report contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only opinions" },
              { id: "b", text: "Facts organised by subheadings" },
              { id: "c", text: "A story" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Report content",
                statement: "Facts + subheadings.",
              },
            ],
            steps: [
              {
                reasoning: "Reports = factual, organised information.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Facts with subheadings",
            commonErrors: ["Confusing with narrative."],
          },
        },
        {
          id: "edpe4-u4-rep-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a subheading and two factual sentences for a report on 'School Uniforms'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Report writing",
                statement: "Subheading + facts.",
              },
            ],
            steps: [
              {
                reasoning: "Subheading: 'Benefits of Uniforms'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two factual sentences about uniforms.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Facts not opinions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Subheading + 2 factual sentences",
            commonErrors: ["Opinions instead of facts."],
          },
        },
        {
          id: "edpe4-u4-rep-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the introduction to a report on 'Life in Ancient Egypt'. Include a topic sentence and two facts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Report writing",
                statement: "Intro + facts.",
              },
            ],
            steps: [
              {
                reasoning: "Introduces topic clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two accurate facts about Egypt.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Formal, factual tone.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Report introduction on Egypt",
            commonErrors: ["No facts or informal tone."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-argument",
      title: "Balanced Arguments",
      skill: "Write arguments considering both sides.",
      lesson: {
        sections: [
          {
            heading: "Structure of an argument",
            body: "A balanced argument has: introduction (the issue), for points (reasons supporting), against points (reasons opposing), counter-arguments (responding to opposition), and conclusion (your view). Use connectives: 'however', 'on the other hand', 'therefore'.",
          },
          {
            heading: "Using connectives",
            body: "Connectives link ideas: 'furthermore' (adding), 'however' (contrasting), 'therefore' (concluding), 'for example' (evidence), 'in addition' (adding more). They make arguments flow logically and show the relationship between points.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument",
            statement: "Intro + for + against + counter + conclusion",
          },
        ],
        workedExample: {
          problem:
            "Write a balanced argument about 'Should homework be banned?'",
          solution:
            "For: more family time, less stress. Against: reinforces learning, prepares for exams. Conclusion: homework useful if reasonable.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-ar-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'balanced argument' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only one side" },
              { id: "b", text: "Considering both sides fairly" },
              { id: "c", text: "A very long argument" },
              { id: "d", text: "An argument about balance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Balanced argument",
                statement: "Both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Balanced = fair consideration of both views.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Both sides fairly",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "edpe4-u4-ar-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which connective shows contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "However" },
              { id: "c", text: "Therefore" },
              { id: "d", text: "For example" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connectives",
                statement: "However = contrast.",
              },
            ],
            steps: [
              {
                reasoning: "'However' signals opposition.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** However",
            commonErrors: ["Wrong connective."],
          },
        },
        {
          id: "edpe4-u4-ar-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write one 'for' and one 'against' point about having school uniforms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced argument",
                statement: "Both sides.",
              },
            ],
            steps: [
              {
                reasoning: "For: reduces bullying, saves money.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: limits self-expression, uncomfortable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear points on both sides.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "For + against points",
            commonErrors: ["Only one side."],
          },
        },
        {
          id: "edpe4-u4-ar-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a conclusion for an argument about school uniforms that considers both sides.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument conclusion",
                statement: "Weighs both sides.",
              },
            ],
            steps: [
              {
                reasoning: "Acknowledges benefits of uniforms.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Acknowledges drawbacks.", marks: 1, markCode: "M" },
              {
                reasoning: "States balanced view with reasoning.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Balanced conclusion",
            commonErrors: ["One-sided conclusion."],
          },
        },
      ],
    },
    {
      id: "edpe4-u4-grammar",
      title: "Advanced Grammar and Punctuation",
      skill: "Use complex sentences, clauses and punctuation accurately.",
      lesson: {
        sections: [
          {
            heading: "Complex sentences",
            body: "Complex sentences have a main clause and a subordinate clause: 'Although it rained, we went out.' Subordinating conjunctions: although, because, when, if, while, since, unless. Commas separate clauses: 'When the bell rang, everyone left.'",
          },
          {
            heading: "Punctuation mastery",
            body: "Apostrophes: possession ('the dog's bone') and contraction ('don't'). Colons introduce lists or explanations. Semicolons join related sentences. Dashes add extra information. Brackets add asides. Use these to vary sentence structure and show control.",
          },
        ],
        keyFormulas: [
          {
            name: "Complex sentence",
            statement: "Main clause + subordinate clause",
          },
        ],
        workedExample: {
          problem: "Add a subordinate clause: 'We went to the park.'",
          solution: "Although it was cold, we went to the park.",
        },
      },
      questions: [
        {
          id: "edpe4-u4-gr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a subordinate clause?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complete sentence" },
              { id: "b", text: "A clause that cannot stand alone" },
              { id: "c", text: "A question" },
              { id: "d", text: "A list" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subordinate clause",
                statement: "Depends on main clause.",
              },
            ],
            steps: [
              {
                reasoning: "Subordinate clause needs main clause.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cannot stand alone",
            commonErrors: ["Confusing with main clause."],
          },
        },
        {
          id: "edpe4-u4-gr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which conjunction introduces a reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Although" },
              { id: "b", text: "Because" },
              { id: "c", text: "While" },
              { id: "d", text: "Unless" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subordinating conjunctions",
                statement: "Because = reason.",
              },
            ],
            steps: [
              {
                reasoning: "'Because' shows cause/reason.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Because",
            commonErrors: ["Wrong conjunction."],
          },
        },
        {
          id: "edpe4-u4-gr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Combine into a complex sentence: 'It was raining. We stayed inside.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Complex sentences",
                statement: "Subordinating conjunction.",
              },
            ],
            steps: [
              {
                reasoning: "Uses 'because', 'although', or 'while'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Correct punctuation: comma or no comma as appropriate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "'Because it was raining, we stayed inside.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Because it was raining, we stayed inside.",
            commonErrors: ["Comma splice or wrong conjunction."],
          },
        },
        {
          id: "edpe4-u4-gr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Punctuate correctly: 'the childrens toys were lost their ball their bike and their kite'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Punctuation",
                statement: "Apostrophe + commas + full stop.",
              },
            ],
            steps: [
              {
                reasoning: "'childrens' → 'children's'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Commas in list: ball, bike and kite.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Capital + full stop: 'The children's toys were lost: their ball, their bike and their kite.'",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The children's toys were lost: their ball, their bike and their kite.",
            commonErrors: ["Missing apostrophe or commas."],
          },
        },
      ],
    },
  ],
};
