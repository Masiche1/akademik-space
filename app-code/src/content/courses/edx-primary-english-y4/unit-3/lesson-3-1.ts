import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "edpe4-u3-lesson-3-1",
  code: "3-1",
  title: "Formal and Persuasive Writing",
  goal: "I CAN write formal letters, reports and persuasive pieces.",
  standards: ["Year 4 Writing"],
  vocabulary: [
    {
      term: "Formal register",
      definition: "Polite, impersonal language for formal writing.",
    },
    {
      term: "Persuasive writing",
      definition: "Writing that tries to convince the reader.",
    },
    {
      term: "Fact/opinion",
      definition: "Verifiable statement vs personal view.",
    },
    { term: "Audience", definition: "Who the writing is for." },
  ],
  concepts: [
    {
      id: "edpe4-u3-formal",
      title: "Formal writing",
      skill: "Write formal letters and reports with appropriate register.",
      lesson: {
        sections: [
          {
            heading: "Formal features",
            body: "Formal writing uses: polite openings ('Dear Sir/Madam'), formal language ('I am writing to', not 'Hi'), facts not slang, and clear structure. Letters need address, date, greeting, body, closing.",
          },
          {
            heading: "Reports",
            body: "Reports present facts clearly: title, introduction, sections with headings, facts and figures, conclusion. No opinions — just information.",
          },
        ],
        keyFormulas: [
          { name: "Formal", statement: "Polite, factual, structured" },
          {
            name: "Report",
            statement: "Title → intro → sections → conclusion",
          },
          { name: "Audience", statement: "Match register to reader" },
        ],
        workedExample: {
          problem: "Turn informal 'Hey, send me the info fast!' into formal.",
          solution:
            "'I am writing to request the information at your earliest convenience.'",
        },
      },
      questions: [
        {
          id: "edpe4-u3-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a formal opening for a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hey there!" },
              { id: "b", text: "Dear Sir or Madam," },
              { id: "c", text: "Yo!" },
              { id: "d", text: "Hi mate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "Polite formal greeting.",
              },
            ],
            steps: [
              { reasoning: "Choose formal option.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Dear Sir or Madam",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "edpe4-u3-fm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is formal language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "gonna" },
              { id: "b", text: "want to" },
              { id: "c", text: "I would like to request" },
              { id: "d", text: "stuff" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "'I would like to request' is formal.",
              },
            ],
            steps: [
              {
                reasoning: "Identify formal phrasing.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: request phrase.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** I would like to request",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "edpe4-u3-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the formal version of: 'Send me the report now!'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "Polite request form.",
              },
            ],
            steps: [
              {
                reasoning: "Formal greeting/request used.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Meaning preserved.", marks: 1, markCode: "A" },
              { reasoning: "Appropriate tone.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'I would be grateful if you could send me the report at your earliest convenience.'",
            commonErrors: ["Still too informal."],
          },
        },
        {
          id: "edpe4-u3-fm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a three-sentence formal letter opening to the headteacher requesting a library visit.",
          parts: [
            { label: "a", prompt: "Formal greeting", marks: 1 },
            { label: "b", prompt: "Purpose of letter", marks: 1 },
            { label: "c", prompt: "Request", marks: 1 },
            { label: "d", prompt: "Formal tone throughout", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal letter",
                statement: "Greeting → purpose → request → formal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Formal greeting.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Purpose stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Request made.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Tone appropriate.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Dear Headteacher, I am writing to request permission for our class to visit the local library next week. I would be grateful for your approval.'",
            commonErrors: ["Informal tone."],
          },
        },
      ],
    },
    {
      id: "edpe4-u3-persuasive",
      title: "Persuasive writing",
      skill:
        "Write persuasive texts using facts, opinions and rhetorical devices.",
      lesson: {
        sections: [
          {
            heading: "Persuasion techniques",
            body: "Persuasive writing uses: **opinion words** ('amazing', 'should'), **facts** to support, **questions** ('Don't you think...?'), **repetition** for emphasis, and a **call to action** ('Buy now!').",
          },
          {
            heading: "Structure",
            body: "Hook → reasons → evidence → conclusion with call to action. Address the reader directly. Make them feel the point.",
          },
        ],
        keyFormulas: [
          { name: "Hook", statement: "Grab attention first" },
          { name: "Reasons", statement: "Why reader should agree" },
          { name: "Call to action", statement: "Tell reader what to do" },
        ],
        workedExample: {
          problem: "Persuade someone to try your favourite food.",
          solution:
            "Hook: 'Imagine the tastiest pizza!' Reasons: fresh ingredients, melted cheese. CTA: 'Try it today!'",
        },
      },
      questions: [
        {
          id: "edpe4-u3-ps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing that entertains" },
              { id: "b", text: "Writing that convinces" },
              { id: "c", text: "Writing that informs" },
              { id: "d", text: "Writing that describes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive",
                statement: "Convinces reader.",
              },
            ],
            steps: [
              {
                reasoning: "Persuasion = convincing.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Writing that convinces",
            commonErrors: ["Confusing with other purposes."],
          },
        },
        {
          id: "edpe4-u3-ps-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is a call to action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pizza is nice" },
              { id: "b", text: "Try it today!" },
              { id: "c", text: "Pizzas exist" },
              { id: "d", text: "Some like it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CTA",
                statement: "Tells reader what to do.",
              },
            ],
            steps: [
              { reasoning: "Identify directive.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 'Try it today!'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Try it today!",
            commonErrors: ["Choosing statement not action."],
          },
        },
        {
          id: "edpe4-u3-ps-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a two-sentence persuasive opening about school lunches.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Persuasive hook",
                statement: "Attention-grabbing + opinion.",
              },
            ],
            steps: [
              { reasoning: "Hook created.", marks: 1, markCode: "A" },
              { reasoning: "Opinion included.", marks: 1, markCode: "A" },
              { reasoning: "Persuasive tone.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'School lunches should be free for everyone! Fresh food helps us learn better.'",
            commonErrors: ["Not persuasive."],
          },
        },
        {
          id: "edpe4-u3-ps-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a three-sentence persuasion to get your school to start a gardening club.",
          parts: [
            { label: "a", prompt: "Hook", marks: 1 },
            { label: "b", prompt: "Reason 1", marks: 1 },
            { label: "c", prompt: "Reason 2 or evidence", marks: 1 },
            { label: "d", prompt: "Call to action", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Persuasive structure",
                statement: "Hook → reasons → CTA.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Attention hook.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reason given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Second reason/evidence.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "Clear CTA.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "e.g. 'Imagine fresh vegetables from our own garden! Gardening teaches patience and science. It would make our school greener. Join the gardening club today!'",
            commonErrors: ["No CTA or weak reasons."],
          },
        },
      ],
    },
  ],
};
