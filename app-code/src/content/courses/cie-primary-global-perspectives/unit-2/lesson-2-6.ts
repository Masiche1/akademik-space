import type { Lesson } from "../../../types.ts";

export const lesson26: Lesson = {
  id: "cipg-u2-lesson-2-6",
  code: "2-6",
  title: "Stage 4 — Communicating Findings to an Audience",
  goal: "I CAN communicate research findings clearly to different audiences using appropriate formats.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 4: communication", "Cambridge Primary Global Perspectives 0838 strand: Communication"],
  stage: 4,
  vocabulary: [
    { term: "Audience", definition: "The people you are communicating to." },
    { term: "Format", definition: "How you present — speech, poster, video, report." },
    { term: "Tailor", definition: "Adapt your message for a specific audience." },
    { term: "Call to action", definition: "A request for the audience to do something." },
    { term: "Persuasive", definition: "Trying to convince others of your view." },
    { term: "Message", definition: "The main thing you want people to know/do." },
  ],
  concepts: [
    {
      id: "cipg-u2-s4-comm",
      title: "Communicating to audiences",
      skill: "Adapt message and format for different audiences at Stage 4 level.",
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
          { name: "Call to action", statement: "request audience to do something" },
        ],
        workedExample: {
          problem: "You researched plastic pollution. How would you communicate to Year 1 students vs Year 6?",
          solution: "Year 1: simple story + picture poster, 'don't litter'. Year 6: data chart + persuasive argument + action request.",
        },
      },
      questions: [
        {
          id: "cipg-u2-cm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'tailor your message' mean?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Adapt it for your specific audience"
                    },
                    {
                              "id": "b",
                              "text": "Make clothes"
                    },
                    {
                              "id": "c",
                              "text": "Write longer"
                    },
                    {
                              "id": "d",
                              "text": "Speak louder"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tailor",
                              "statement": "Adapt to audience."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Tailoring = matching message to listeners.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Adapt for audience"
},
        },
        {
          id: "cipg-u2-cm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two formats for communicating findings and one audience each suits.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Formats",
                              "statement": "Poster, speech, video, report."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. poster for young children.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. report for teachers/parents.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. poster+kids, report+adults"
},
        },
        {
          id: "cipg-u2-cm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a call to action? Write one for a presentation about saving energy.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Call to action",
                              "statement": "Audience request."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CTA = asking audience to do something.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid example: 'Turn off lights when leaving rooms.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Specific and achievable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Audience request; e.g. turn off lights"
},
        },
        {
          id: "cipg-u2-cm-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define audience, format, tailor, call to action, persuasive, message. (b) How does message change for children vs adults? (c) Choose a format for 'endangered animals' for your class. (d) Write a call to action. (e) Why one main message? (f) What evidence supports your message? (g) How is persuasive different from informative? (h) Design a poster outline for your issue.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Communication",
                              "statement": "Audience, format, message."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Simpler words vs detailed data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Valid format choice + reason.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Specific achievable CTA.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Focus prevents confusion.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Facts/statistics supporting claim.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Persuasive=convince; informative=teach facts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid poster structure.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Audience-tailored communication, formats, CTAs."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u2-cm-notes",
      title: "Communicating — notes",
      summary: "Tailor message to audience. One main message + evidence + call to action.",
      sections: [
        { heading: "Key idea", body: "Different audiences need different formats and language." },
        { heading: "CTA", body: "End with what you want people to do." },
      ],
    },
  ],
};
