import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieibs-u3-lesson-3-3",
  code: "3-3",
  title: "Organisational Structure, Communication and Leadership",
  goal: "I CAN describe organisational structures, communication methods and leadership styles.",
  standards: [
    "Cambridge IGCSE Business Studies 0450",
    "Human resources: structure, communication, leadership",
  ],
  vocabulary: [
    {
      term: "Hierarchy",
      definition: "Levels of authority from top to bottom.",
    },
    {
      term: "Span of control",
      definition: "Number of subordinates one manager supervises.",
    },
    {
      term: "Formal communication",
      definition: "Official channels — reports, meetings, memos.",
    },
    {
      term: "Informal communication",
      definition: "Unofficial channels — gossip, chats.",
    },
    {
      term: "Autocratic leadership",
      definition: "Leader makes all decisions alone.",
    },
    {
      term: "Democratic leadership",
      definition: "Leader consults the team before deciding.",
    },
  ],
  concepts: [
    {
      id: "cieibs-u3-s3-org",
      title: "Structure, communication and leadership",
      skill:
        "Describe structures, communication flows and leadership styles with evaluation.",
      lesson: {
        sections: [
          {
            heading: "Structure and communication",
            body: "Tall hierarchies have many layers and narrow spans of control — clear authority but slow communication. Flat structures have fewer layers and wider spans — faster decisions but heavier manager workloads. Formal communication follows official channels; informal communication spreads quickly but can distort information.",
          },
          {
            heading: "Leadership",
            body: "Autocratic leaders decide alone — fast but demotivating. Democratic leaders consult — slower but higher commitment. Laissez-faire leaders give freedom — suits skilled teams but can lack direction. The best style depends on the situation and the team.",
          },
        ],
        keyFormulas: [
          {
            name: "Tall vs flat",
            statement:
              "tall = many layers, narrow span; flat = few layers, wide span",
          },
          {
            name: "Leadership",
            statement:
              "autocratic = decide; democratic = consult; laissez-faire = delegate",
          },
        ],
        workedExample: {
          problem:
            "A 20-person startup needs quick decisions. Tall or flat structure?",
          solution:
            "Flat — few layers mean faster communication and decisions for a small team.",
        },
      },
      questions: [
        {
          id: "cieibs-u3-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'span of control' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The salary range of managers" },
              {
                id: "b",
                text: "The number of subordinates one manager supervises",
              },
              { id: "c", text: "The height of the office building" },
              { id: "d", text: "The number of departments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Span of control",
                statement: "Subordinates per manager.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Span of control counts direct subordinates per manager.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The number of subordinates one manager supervises",
          },
        },
        {
          id: "cieibs-u3-org-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one advantage of formal communication and one disadvantage of informal communication in a business.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Communication channels",
                statement: "Official vs unofficial flows.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal: accurate, documented, follows chain of command.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal: spreads fast but can distort or leak confidential information.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Formal is accurate/documented; informal risks distortion and leaks",
          },
        },
        {
          id: "cieibs-u3-org-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare autocratic and democratic leadership, giving one situation where each would be appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Leadership styles",
                statement: "Style fits situation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Autocratic: leader decides alone — fast, suits crises or unskilled teams needing clear direction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Democratic: leader consults — slower but builds commitment, suits skilled teams.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Comparison shows style should match situation and team.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Autocratic = fast decisions in crises; democratic = commitment in skilled teams",
          },
        },
        {
          id: "cieibs-u3-org-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A growing company of 80 staff has a tall hierarchy with 6 management layers. Evaluate whether it should flatten its structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure evaluation",
                statement: "Weigh communication speed vs control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "6 layers slows communication and decision-making — messages pass through too many people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flattening widens spans of control — managers handle more staff but decisions speed up.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Risk: less direct supervision; some managers may become overloaded.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: flattening likely helps at this size, but keep enough layers for control of a growing firm.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Flattening speeds communication but risks overload — worth doing with careful span design",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieibs-u3-org-notes",
      title: "Structure and leadership — revision notes",
      summary:
        "Tall vs flat hierarchies, formal/informal communication, leadership styles.",
      sections: [
        {
          heading: "Key skills",
          body: "Link structure to communication speed; evaluate leadership by situation and team skill.",
        },
        {
          heading: "Exam tips",
          body: "Never say one style is 'best' — examiners want situational justification.",
        },
      ],
    },
  ],
};
