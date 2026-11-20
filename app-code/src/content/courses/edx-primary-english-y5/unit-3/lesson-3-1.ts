import type { Lesson } from "../../../types.ts";

export const lesson121: Lesson = {
  id: "edpe5-u3-lesson-3-1",
  code: "3-1",
  title: "Formal and Transactional Writing",
  goal: "I CAN write formal letters, reports and transactional texts.",
  standards: ["Year 5 Writing"],
  vocabulary: [
    {
      term: "Formal register",
      definition: "Polite, impersonal language for formal contexts.",
    },
    {
      term: "Transactional text",
      definition: "Writing with a practical purpose: letter, email, report.",
    },
    { term: "Tone", definition: "The attitude conveyed by writing." },
    { term: "Audience", definition: "Who the writing is intended for." },
  ],
  concepts: [
    {
      id: "edpe5-u3-formal",
      title: "Formal writing skills",
      skill:
        "Write formal letters and reports with appropriate register and structure.",
      lesson: {
        sections: [
          {
            heading: "Formal letter structure",
            body: "Sender's address → date → recipient's address → formal greeting ('Dear Sir/Madam') → purpose → body → polite closing ('Yours faithfully/sincerely') → signature. Use formal language throughout.",
          },
          {
            heading: "Reports",
            body: "Title → introduction (purpose) → method (what you did) → findings (results) → conclusion (what it means). Present facts clearly with headings and data.",
          },
        ],
        keyFormulas: [
          {
            name: "Formal letter",
            statement: "Addresses → greeting → purpose → closing",
          },
          {
            name: "Report",
            statement: "Title → intro → method → findings → conclusion",
          },
          { name: "Tone", statement: "Match register to audience" },
        ],
        workedExample: {
          problem: "Write a formal opening requesting information.",
          solution:
            "'Dear Sir or Madam, I am writing to request information regarding...'",
        },
      },
      questions: [
        {
          id: "edpe5-u3-fm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct order of a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greeting → address → body" },
              { id: "b", text: "Address → date → greeting → body" },
              { id: "c", text: "Body → greeting → address" },
              { id: "d", text: "Signature → body → greeting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal letter structure",
                statement: "Address → date → greeting → body.",
              },
            ],
            steps: [{ reasoning: "Order correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Address → date → greeting → body",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe5-u3-fm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is formal language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I wanna know stuff" },
              { id: "b", text: "Please send me the info" },
              { id: "c", text: "I would appreciate receiving the information" },
              { id: "d", text: "Gimme details ASAP" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal register",
                statement: "Polite, complete sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Identify formal phrasing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: appreciate receiving.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** I would appreciate receiving the information",
            commonErrors: ["Choosing informal."],
          },
        },
        {
          id: "edpe5-u3-fm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a formal letter opening requesting a school trip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal opening",
                statement: "Greeting → purpose → request.",
              },
            ],
            steps: [
              { reasoning: "Formal greeting.", marks: 1, markCode: "A" },
              { reasoning: "Purpose stated.", marks: 1, markCode: "A" },
              { reasoning: "Request made politely.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Dear Headteacher, I am writing to request permission for our class to visit the Science Museum next term.'",
            commonErrors: ["Informal tone or missing parts."],
          },
        },
        {
          id: "edpe5-u3-fm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a formal letter closing to a local council requesting a safer crossing.",
          parts: [
            { label: "a", prompt: "Formal greeting", marks: 1 },
            { label: "b", prompt: "Explain problem", marks: 1 },
            { label: "c", prompt: "Make request", marks: 1 },
            { label: "d", prompt: "Formal closing", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Formal letter",
                statement: "All elements present, formal tone.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Greeting used.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Problem explained.",
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
                reasoning: "Closing appropriate.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Dear Sir or Madam, Many children cross the road near the school... I would be grateful if you could... Yours faithfully, [Name]'",
            commonErrors: ["Informal or incomplete."],
          },
        },
      ],
    },
    {
      id: "edpe5-u3-reports",
      title: "Report writing",
      skill:
        "Write structured reports with introduction, method, findings and conclusion.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "**Title** (what it's about) → **Introduction** (purpose, background) → **Method** (what you did) → **Findings** (results, data) → **Conclusion** (what it means, recommendations).",
          },
          {
            heading: "Presenting data",
            body: "Use tables, charts, figures. Be precise: 'The experiment showed a 20% increase' not 'It went up a lot'. Objective tone — no opinions in reports.",
          },
        ],
        keyFormulas: [
          { name: "Method", statement: "What you did" },
          { name: "Findings", statement: "What you found" },
          { name: "Conclusion", statement: "What it means" },
        ],
        workedExample: {
          problem:
            "Write a report title and introduction for a plant growth experiment.",
          solution:
            "Title: 'Plant Growth Experiment'. Intro: 'This report investigates whether plants grow faster in sunlight or shade.'",
        },
      },
      questions: [
        {
          id: "edpe5-u3-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes after the introduction in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion" },
              { id: "b", text: "Method" },
              { id: "c", text: "Findings" },
              { id: "d", text: "Title" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Report structure",
                statement: "Intro → method → findings → conclusion.",
              },
            ],
            steps: [
              { reasoning: "Method follows intro.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Method",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpe5-u3-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should the 'method' section describe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The results" },
              { id: "b", text: "What you did" },
              { id: "c", text: "Your opinion" },
              { id: "d", text: "The conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Method", statement: "What you did." },
            ],
            steps: [
              { reasoning: "Method = process.", marks: 1, markCode: "M" },
              { reasoning: "Answer: what you did.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What you did",
            commonErrors: ["Confusing with findings."],
          },
        },
        {
          id: "edpe5-u3-rp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a report title and one-sentence introduction for a survey of favourite school subjects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Report elements",
                statement: "Title + purpose in intro.",
              },
            ],
            steps: [
              { reasoning: "Title given.", marks: 1, markCode: "A" },
              { reasoning: "Purpose stated.", marks: 1, markCode: "A" },
              { reasoning: "Objective tone.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'Title: School Subject Survey. Introduction: This report investigates which subjects students prefer.'",
            commonErrors: ["Missing elements or informal."],
          },
        },
        {
          id: "edpe5-u3-rp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a findings section for a report showing: 60% prefer maths, 25% prefer English, 15% prefer science.",
          parts: [
            { label: "a", prompt: "Present data clearly", marks: 1 },
            { label: "b", prompt: "Use objective language", marks: 1 },
            { label: "c", prompt: "Note key finding", marks: 1 },
            { label: "d", prompt: "2-3 sentences", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Findings section",
                statement: "Data presented objectively.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Data shown.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Objective tone.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Key finding noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Length appropriate.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "e.g. 'Maths was the most popular subject at 60%, followed by English at 25% and science at 15%.'",
            commonErrors: ["Vague or biased."],
          },
        },
      ],
    },
  ],
};
