import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cipg-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 3 — Presenting Your Findings",
  goal: "I CAN present research findings clearly using words and visuals.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 3: communication",
    "Cambridge Primary Global Perspectives 0838 strand: Communication",
  ],
  stage: 3,
  vocabulary: [
    {
      term: "Present",
      definition: "To show and explain your findings to an audience.",
    },
    {
      term: "Visual",
      definition: "A picture, chart or diagram that helps explain.",
    },
    {
      term: "Structure",
      definition: "An organised way of presenting — beginning, middle, end.",
    },
    {
      term: "Audience",
      definition: "The people listening to your presentation.",
    },
    { term: "Key point", definition: "The most important thing to say." },
    { term: "Summary", definition: "A short version of the main points." },
  ],
  concepts: [
    {
      id: "cipg-u1-s3-present",
      title: "Presenting findings",
      skill: "Organise and deliver a clear presentation at Stage 3 level.",
      lesson: {
        sections: [
          {
            heading: "Structuring a presentation",
            body: "Good presentations have structure: introduction (what you researched), main points (your findings), conclusion (what you learned). Keep it organised so the audience can follow.",
          },
          {
            heading: "Using visuals",
            body: "Pictures, charts and diagrams help audiences understand. Choose visuals that match your points — a chart for data, a diagram for processes. Practise speaking clearly and looking at your audience.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "intro → main points → conclusion" },
          {
            name: "Visual",
            statement: "picture/chart that supports your point",
          },
        ],
        workedExample: {
          problem:
            "You researched recycling. Plan a 3-part presentation structure.",
          solution:
            "Intro: why recycling matters. Main: types of recycling + how it works (with chart). Conclusion: what we can do.",
        },
      },
      questions: [
        {
          id: "cipg-u1-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Showing and explaining findings to an audience",
              },
              {
                id: "b",
                text: "A book",
              },
              {
                id: "c",
                text: "A computer program",
              },
              {
                id: "d",
                text: "A type of game",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Present",
                statement: "Show findings to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Presentation = organised sharing to listeners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Show findings to audience",
          },
        },
        {
          id: "cipg-u1-pr-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three parts of a good presentation structure.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structure",
                statement: "Intro, main, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction, main points, conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "In correct order.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Intro → main → conclusion",
          },
        },
        {
          id: "cipg-u1-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why use visuals in a presentation? Give an example of a visual for a topic about water.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visuals",
                statement: "Support understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Visuals make points clearer/easier to remember.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. water cycle diagram or chart of usage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Matches visual to content.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Clarity; e.g. cycle diagram",
          },
        },
        {
          id: "cipg-u1-pr-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define present, visual, structure, audience, key point, summary. (b) Plan a presentation structure for 'Our local environment'. (c) Why organise before presenting? (d) What makes a good visual? (e) How do you engage your audience? (f) What if you forget something? (g) How is a summary different from main points? (h) Rehearse: describe your delivery plan.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presenting",
                statement: "Structure, visuals, delivery.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid 3-part structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Audience follows; you stay organised.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Clear, relevant, simple.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Eye contact, questions, enthusiasm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Pause, continue, don't apologise excessively.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Summary=short version; main=details.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid delivery plan.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Presentation structure, visuals, delivery.",
          },
        },
        {
          id: "cipg-u1-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order for a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Conclusion, main points, introduction",
              },
              {
                id: "b",
                text: "Any order is fine",
              },
              {
                id: "c",
                text: "Main points, introduction, conclusion",
              },
              {
                id: "d",
                text: "Introduction, main points, conclusion",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structure",
                statement: "Intro, main, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Presentations follow intro → main → conclusion.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Introduction, main points, conclusion",
          },
        },
        {
          id: "cipg-u1-pr-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two ways that visuals help an audience understand a presentation.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Visuals",
                statement: "Support understanding.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. pictures/charts make ideas clearer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. visuals help the audience remember points.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Clarity and memory aid",
          },
        },
        {
          id: "cipg-u1-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the 'key point' of a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The longest sentence",
              },
              {
                id: "b",
                text: "A picture on a slide",
              },
              {
                id: "c",
                text: "The most important thing to say",
              },
              {
                id: "d",
                text: "The first word you say",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key point",
                statement: "Most important message.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Key point = the main message the audience should remember.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "The most important thing to say",
          },
        },
        {
          id: "cipg-u1-pr-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write an introduction sentence for a presentation about 'Our school garden'.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introductions",
                statement: "Tell audience what you researched.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence states topic clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. 'Today I will tell you about our school garden.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Welcomes/informs the audience appropriately.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'Today I will tell you about our school garden.'",
          },
        },
        {
          id: "cipg-u1-pr-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which visual best supports a presentation point about how much water a family uses each week?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A bar chart showing litres used each day",
              },
              {
                id: "b",
                text: "A long paragraph of text",
              },
              {
                id: "c",
                text: "A blank page",
              },
              {
                id: "d",
                text: "A photo of a pet cat",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Choosing visuals",
                statement: "Match visual to content.",
              },
            ],
            steps: [
              {
                reasoning: "A chart best shows amounts of water used.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A bar chart showing litres used each day",
          },
        },
        {
          id: "cipg-u1-pr-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "You are presenting research on recycling. Write: (a) one main point, (b) one visual you could use, (c) a conclusion sentence, (d) one thing you will say to the audience at the end.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presenting findings",
                statement: "Points, visuals, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Valid recycling main point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Suitable visual, e.g. recycling bins chart.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid conclusion sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) e.g. 'Thank you for listening' / question to audience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Main point, visual, conclusion, closing words.",
          },
        },
        {
          id: "cipg-u1-pr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do while giving a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Shout as fast as possible",
              },
              {
                id: "b",
                text: "Face the wall",
              },
              {
                id: "c",
                text: "Read from a book",
              },
              {
                id: "d",
                text: "Look at the audience and speak clearly",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Delivery",
                statement: "Eye contact, clear voice.",
              },
            ],
            steps: [
              {
                reasoning: "Good delivery = eye contact and clear speaking.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Look at the audience and speak clearly",
          },
        },
        {
          id: "cipg-u1-pr-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why practising before a presentation helps. Then give two tips for good delivery.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Preparation",
                statement: "Practice builds confidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Practising helps you remember order and speak smoothly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tip 1, e.g. speak slowly and clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tip 2, e.g. look at the audience / use visuals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tips are practical delivery advice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Practice helps; e.g. slow clear speech + eye contact",
          },
        },
        {
          id: "cipg-u1-pr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A classmate's presentation jumps randomly between topics with no order. What is the main problem?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "There is no clear structure",
              },
              {
                id: "b",
                text: "They used too many pictures",
              },
              {
                id: "c",
                text: "They researched the topic",
              },
              {
                id: "d",
                text: "They spoke too loudly",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure",
                statement: "Order helps audience follow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without intro/main/conclusion the audience cannot follow.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "There is no clear structure",
          },
        },
        {
          id: "cipg-u1-pr-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a complete 3-part presentation on 'Ways to save water'. Write the introduction, two main points and the conclusion.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Presentation planning",
                statement: "Intro, main points, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Introduction states topic and purpose.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Main point 1, e.g. turn off taps / shorter showers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Main point 2, e.g. fix leaks / water plants wisely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conclusion sums up and states what we can do.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Whole plan is coherent and on-topic.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Intro + 2 main points + conclusion on saving water.",
          },
        },
        {
          id: "cipg-u1-pr-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a summary in a presentation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of visual",
              },
              {
                id: "b",
                text: "The longest part of the talk",
              },
              {
                id: "c",
                text: "A short version of the main points",
              },
              {
                id: "d",
                text: "The questions from the audience",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Summary",
                statement: "Short version of main points.",
              },
            ],
            steps: [
              {
                reasoning: "Summary = brief recap of the key ideas.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "A short version of the main points",
          },
        },
        {
          id: "cipg-u1-pr-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A classmate says 'A good presentation needs lots of words on each slide.' Do you agree or disagree? Give two reasons for your answer.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Presentation quality",
                statement: "Clarity over clutter.",
              },
            ],
            steps: [
              {
                reasoning: "Clear position (usually disagree).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason 1, e.g. too many words confuse the audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reason 2, e.g. audience cannot read and listen at once.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasons are explained and linked to audience understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasoned, justified judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Disagree; too many words confuse listeners.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-pr-notes",
      title: "Presenting — notes",
      summary:
        "Structure: intro → main → conclusion. Use clear visuals; engage audience; practise delivery.",
      sections: [
        {
          heading: "Key idea",
          body: "Organisation makes findings easy to understand.",
        },
        { heading: "Visuals", body: "Match images/charts to your points." },
      ],
    },
  ],
};
