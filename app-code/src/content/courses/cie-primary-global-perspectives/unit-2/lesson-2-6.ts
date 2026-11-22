import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cipg-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 4 — Communicating Findings to an Audience",
  goal: "I CAN communicate research findings clearly to different audiences using appropriate formats.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 4: communication",
    "Cambridge Primary Global Perspectives 0838 strand: Communication",
  ],
  stage: 4,
  vocabulary: [
    { term: "Audience", definition: "The people you are communicating to." },
    {
      term: "Format",
      definition: "How you present — speech, poster, video, report.",
    },
    {
      term: "Tailor",
      definition: "Adapt your message for a specific audience.",
    },
    {
      term: "Call to action",
      definition: "A request for the audience to do something.",
    },
    {
      term: "Persuasive",
      definition: "Trying to convince others of your view.",
    },
    {
      term: "Message",
      definition: "The main thing you want people to know/do.",
    },
  ],
  concepts: [
    {
      id: "cipg-u2-s4-comm",
      title: "Communicating to audiences",
      skill:
        "Adapt message and format for different audiences at Stage 4 level.",
      lesson: {
        sections: [
          {
            heading: "Know your audience",
            body: "How you communicate depends on who's listening. A poster for younger children uses simple words and pictures; a report for teachers uses facts and structure. Tailor your message, language and format to your audience.",
          },
          {
            heading: "Clear messaging",
            body: "Have one main message — what do you want people to know or do? Support it with evidence. End with a call to action if you want them to act: 'Please bring a reusable bottle to school.'",
          },
        ],
        keyFormulas: [
          { name: "Tailor", statement: "adapt message/format to audience" },
          {
            name: "Call to action",
            statement: "request audience to do something",
          },
        ],
        workedExample: {
          problem:
            "You researched plastic pollution. How would you communicate to Year 1 students vs Year 6?",
          solution:
            "Year 1: simple story + picture poster, 'don't litter'. Year 6: data chart + persuasive argument + action request.",
        },
      },
      questions: [
        {
          id: "cipg-u2-cm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'tailor your message' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adapt it for your specific audience",
              },
              {
                id: "b",
                text: "Speak louder",
              },
              {
                id: "c",
                text: "Write longer",
              },
              {
                id: "d",
                text: "Make clothes",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tailor",
                statement: "Adapt to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Tailoring = matching message to listeners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Adapt for audience",
          },
        },
        {
          id: "cipg-u2-cm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two formats for communicating findings and one audience each suits.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Formats",
                statement: "Poster, speech, video, report.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. poster for young children.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. report for teachers/parents.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. poster+kids, report+adults",
          },
        },
        {
          id: "cipg-u2-cm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a call to action? Write one for a presentation about saving energy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Call to action",
                statement: "Audience request.",
              },
            ],
            steps: [
              {
                reasoning: "CTA = asking audience to do something.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Valid example: 'Turn off lights when leaving rooms.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Specific and achievable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience request; e.g. turn off lights",
          },
        },
        {
          id: "cipg-u2-cm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define audience, format, tailor, call to action, persuasive, message. (b) How does message change for children vs adults? (c) Choose a format for 'endangered animals' for your class. (d) Write a call to action. (e) Why one main message? (f) What evidence supports your message? (g) How is persuasive different from informative? (h) Design a poster outline for your issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Communication",
                statement: "Audience, format, message.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Simpler words vs detailed data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid format choice + reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Specific achievable CTA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Focus prevents confusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Facts/statistics supporting claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Persuasive=convince; informative=teach facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid poster structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience-tailored communication, formats, CTAs.",
          },
        },
        {
          id: "cipg-u2-cm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'audience'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The people you are communicating to",
              },
              {
                id: "b",
                text: "A type of homework",
              },
              {
                id: "c",
                text: "A poster size",
              },
              {
                id: "d",
                text: "The stage you stand on",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Audience",
                statement: "People you communicate to.",
              },
            ],
            steps: [
              {
                reasoning: "The audience is whoever receives your message.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "People you communicate to",
          },
        },
        {
          id: "cipg-u2-cm-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A project presents findings using 3 formats: a speech, a poster and a video for 3 different audiences. (a) How many formats are used? (b) How many audiences are targeted?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 3,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Communication",
                statement: "Formats and audiences.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 formats: speech, poster, video.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 audiences.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "3 formats; 3 audiences",
          },
        },
        {
          id: "cipg-u2-cm-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which format suits younger children best?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A technical spreadsheet",
              },
              {
                id: "b",
                text: "A footnote-heavy essay",
              },
              {
                id: "c",
                text: "A long written report",
              },
              {
                id: "d",
                text: "A simple poster with big pictures and few words",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Formats",
                statement: "Match format to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Young children understand simple visual formats.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Simple picture poster",
          },
        },
        {
          id: "cipg-u2-cm-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "You give the same presentation to two classes: 25 pupils in one class and 30 pupils in the other. (a) How many pupils hear the presentation in total? (b) How many more pupils are in the bigger class?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 55,
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
                name: "Audiences",
                statement: "Counting audience sizes.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 25 + 30 = 55 pupils.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 30 - 25 = 5 more pupils.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "55; 5",
          },
        },
        {
          id: "cipg-u2-cm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'call to action'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A request for the audience to do something",
              },
              {
                id: "b",
                text: "A type of evidence",
              },
              {
                id: "c",
                text: "The end of the school day",
              },
              {
                id: "d",
                text: "The title of your presentation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Call to action",
                statement: "Audience request.",
              },
            ],
            steps: [
              {
                reasoning: "A CTA asks the audience to act.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Request for audience to act",
          },
        },
        {
          id: "cipg-u2-cm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your message has 1 main point supported by 4 facts. (a) How many main points are there? (b) How many supporting facts are there? (c) How many pieces of message content are there in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1,
              },
              {
                label: "b",
                answer: 4,
              },
              {
                label: "c",
                answer: 5,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Messaging",
                statement: "One message plus evidence.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 1 main point.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 supporting facts.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 1 + 4 = 5 pieces of content.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "1, 4, 5",
          },
        },
        {
          id: "cipg-u2-cm-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a presentation have one main message?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It keeps the communication clear and focused",
              },
              {
                id: "b",
                text: "It makes the presentation shorter only",
              },
              {
                id: "c",
                text: "It stops the audience asking questions",
              },
              {
                id: "d",
                text: "It lets you avoid evidence",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Clear messaging",
                statement: "Focus prevents confusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One main message is easier for audiences to understand.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Clear and focused",
          },
        },
        {
          id: "cipg-u2-cm-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A campaign reaches two audiences: 12 children and 8 adults. (a) How many children are in the audience? (b) How many adults are in the audience? (c) How many people are reached in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 12,
              },
              {
                label: "b",
                answer: 8,
              },
              {
                label: "c",
                answer: 20,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audiences",
                statement: "Counting audience reach.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 12 children.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 8 adults.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 12 + 8 = 20 people.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "12, 8, 20",
          },
        },
        {
          id: "cipg-u2-cm-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the aim of persuasive communication?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To avoid giving any message",
              },
              {
                id: "b",
                text: "To list facts without an opinion",
              },
              {
                id: "c",
                text: "To confuse the audience",
              },
              {
                id: "d",
                text: "To convince the audience of your view",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive",
                statement: "Convincing others.",
              },
            ],
            steps: [
              {
                reasoning: "Persuasion aims to win the audience over.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Convince the audience",
          },
        },
        {
          id: "cipg-u2-cm-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A campaign has 3 messages for 3 audiences: children, parents and teachers. Each audience gets 2 formats. (a) How many messages are there? (b) How many audiences are there? (c) How many message-audience pairs are there? (d) How many format-uses are there in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 3,
              },
              {
                label: "b",
                answer: 3,
              },
              {
                label: "c",
                answer: 3,
              },
              {
                label: "d",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Communication",
                statement: "Matching messages, audiences, formats.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 messages.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 audiences.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 3 message-audience pairs.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) 3 audiences x 2 formats = 6 format-uses.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "3, 3, 3, 6",
          },
        },
        {
          id: "cipg-u2-cm-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does 'tailoring your message' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Adapting your language and format to whoever is listening",
              },
              {
                id: "b",
                text: "Speaking as loudly as possible",
              },
              {
                id: "c",
                text: "Making your clothes fit better",
              },
              {
                id: "d",
                text: "Writing the longest possible answer",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tailor",
                statement: "Adapt to audience.",
              },
            ],
            steps: [
              {
                reasoning: "Tailoring matches message to the listeners.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Adapt to the audience",
          },
        },
        {
          id: "cipg-u2-cm-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define audience, format, tailor, call to action, persuasive, message. (b) How should your message change for children versus adults? (c) Choose a format for presenting 'endangered animals' to your class and justify it. (d) Write a call to action for your topic. (e) Why is one main message important? (f) What evidence supports your message? (g) How is persuasive communication different from informative communication? (h) Design a poster outline for a global issue.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Communication",
                statement: "Audience, format, message.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Simpler words and pictures for children; detailed data for adults.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Valid format choice with reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Specific, achievable CTA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Focus prevents confusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Facts and statistics supporting the claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Persuasive convinces; informative teaches facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Valid poster structure: title, message, evidence, CTA.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience-tailored communication, formats, CTAs.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-cm-notes",
      title: "Communicating — notes",
      summary:
        "Tailor message to audience. One main message + evidence + call to action.",
      sections: [
        {
          heading: "Key idea",
          body: "Different audiences need different formats and language.",
        },
        { heading: "CTA", body: "End with what you want people to do." },
      ],
    },
  ],
};
