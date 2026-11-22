import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edpe3-u2-lesson-2-1",
  code: "2-1",
  title: "Author's Purpose and Text Types",
  goal: "I CAN identify why a text was written and what type it is.",
  standards: ["Year 3 Reading"],
  vocabulary: [
    {
      term: "Purpose",
      definition:
        "Why the author wrote the text: to inform, entertain, persuade.",
    },
    { term: "Fiction", definition: "Made-up stories for entertainment." },
    { term: "Non-fiction", definition: "Real information texts." },
    {
      term: "Persuasive text",
      definition: "Tries to convince you of something.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u2-purpose",
      title: "Why was it written?",
      skill: "Identify a text's purpose: inform, entertain or persuade.",
      lesson: {
        sections: [
          {
            heading: "Three purposes",
            body: "**To entertain**: stories, poems — made up, fun. **To inform**: fact books, instructions — real information. **To persuade**: adverts, letters — tries to convince you: 'Buy this! It's the best!'",
          },
          {
            heading: "Spotting the purpose",
            body: "Look at the features: stories have characters and plots; fact books have facts and labels; persuasive texts use words like 'must', 'best', 'amazing' and exclamation marks.",
          },
        ],
        keyFormulas: [
          { name: "Entertain", statement: "Stories, poems — made up" },
          { name: "Inform", statement: "Fact books — real info" },
          { name: "Persuade", statement: "Adverts — convince you" },
        ],
        workedExample: {
          problem:
            "Is 'Why You Should Read Every Day' persuasive or informative?",
          solution: "Persuasive — it tries to convince you to read.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-pu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of a storybook?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain" },
              { id: "b", text: "To inform" },
              { id: "c", text: "To instruct" },
              { id: "d", text: "To persuade" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Purpose",
                statement: "Stories entertain.",
              },
            ],
            steps: [
              {
                reasoning: "Made-up stories = entertainment.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** To entertain",
            commonErrors: ["Choosing inform — stories aren't factual."],
          },
        },
        {
          id: "edpe3-u2-pu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text says 'This is the BEST chocolate bar ever! Buy it now!' What is its purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To entertain" },
              { id: "b", text: "To inform" },
              { id: "c", text: "To instruct" },
              { id: "d", text: "To persuade" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose",
                statement: "Adverts persuade.",
              },
            ],
            steps: [
              { reasoning: "Selling language.", marks: 1, markCode: "M" },
              { reasoning: "Answer: persuade.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** To persuade",
            commonErrors: ["Missing persuasive language."],
          },
        },
        {
          id: "edpe3-u2-pu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give an example of a text that informs and one that persuades.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose",
                statement: "e.g. fact book vs advert.",
              },
            ],
            steps: [
              {
                reasoning: "Informing text identified.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Persuasive text identified.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Both correct types.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'All About Dinosaurs' / 'Buy this bike!'",
            commonErrors: ["Wrong text types."],
          },
        },
        {
          id: "edpe3-u2-pu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe says 'Add 200g flour. Mix well. Bake for 20 minutes.' What type and purpose is this?",
          parts: [
            { label: "a", prompt: "Text type?", marks: 1 },
            { label: "b", prompt: "Purpose?", marks: 1 },
            { label: "c", prompt: "Two features that show this.", marks: 1 },
            { label: "d", prompt: "Why is it not a story?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text purpose",
                statement:
                  "Instructions/inform; commands and steps; numbered steps, no characters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Instructions/information text.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "To inform/instruct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Command verbs, measurements.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "No story elements.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Instructions; inform; commands/steps; no characters/plot",
            commonErrors: ["Calling it fiction."],
          },
        },
      ],
    },
    {
      id: "edpe3-u2-texttypes",
      title: "Text types and structure",
      skill: "Recognise features of different text types.",
      lesson: {
        sections: [
          {
            heading: "Story features",
            body: "Stories have: characters, setting, problem, solution. Beginning sets scene, middle builds problem, end resolves. Look for 'once upon a time', speech marks, past tense.",
          },
          {
            heading: "Non-fiction features",
            body: "Fact books have: facts, labels, diagrams, headings, contents page. Instructions have: numbered steps, command verbs ('add', 'mix', 'cut'), bullet points. Letters have: greeting, body, sign-off.",
          },
        ],
        keyFormulas: [
          { name: "Story", statement: "Characters, plot, setting, problem" },
          { name: "Non-fiction", statement: "Facts, headings, labels, steps" },
          { name: "Instructions", statement: "Numbered steps, commands" },
        ],
        workedExample: {
          problem: "A text has 'Dear Sam,' ... 'Love, Mum'. What type is it?",
          solution: "A letter — greeting and sign-off.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-tt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature shows a text is a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A contents page" },
              { id: "b", text: "Characters and a plot" },
              { id: "c", text: "Numbered steps" },
              { id: "d", text: "Bullet points" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story features",
                statement: "Characters and plot.",
              },
            ],
            steps: [
              {
                reasoning: "Stories have narrative elements.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Characters and a plot",
            commonErrors: ["Choosing non-fiction feature."],
          },
        },
        {
          id: "edpe3-u2-tt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text has '1. Boil water 2. Add pasta 3. Cook for 10 mins'. What type is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Instructions" },
              { id: "b", text: "Poem" },
              { id: "c", text: "Story" },
              { id: "d", text: "Letter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Instructions",
                statement: "Numbered steps = recipe/instructions.",
              },
            ],
            steps: [
              { reasoning: "Step-by-step format.", marks: 1, markCode: "M" },
              { reasoning: "Answer: instructions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Instructions",
            commonErrors: ["Calling it a story."],
          },
        },
        {
          id: "edpe3-u2-tt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three features of a letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Letter features",
                statement: "Greeting, body, sign-off.",
              },
            ],
            steps: [
              { reasoning: "Greeting identified.", marks: 1, markCode: "A" },
              { reasoning: "Body and sign-off.", marks: 1, markCode: "A" },
              { reasoning: "Three features given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Dear X', body, 'Love/Yours'",
            commonErrors: ["Wrong features."],
          },
        },
        {
          id: "edpe3-u2-tt-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a story and a fact book about the same animal (e.g. dogs).",
          parts: [
            {
              label: "a",
              prompt: "What features would the story have?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "What features would the fact book have?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Which is more likely to have dialogue?",
              marks: 1,
            },
            { label: "d", prompt: "Which teaches you real facts?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text comparison",
                statement:
                  "Story: characters/dialogue; fact book: facts/labels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Characters, plot, dialogue.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Facts, labels, headings.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Story — characters talk.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Fact book — real information.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Story: characters/dialogue; fact book: facts/labels; story; fact book",
            commonErrors: ["Confusing features."],
          },
        },
      ],
    },
  ],
};
