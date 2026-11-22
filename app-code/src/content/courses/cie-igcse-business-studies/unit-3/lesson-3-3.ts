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
              { id: "a", text: "The height of the office building" },
              { id: "b", text: "The number of departments" },
              {
                id: "c",
                text: "The number of subordinates one manager supervises",
              },
              { id: "d", text: "The salary range of managers" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cieibs-u3-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a tall organisational structure, the span of control is typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Non-existent" },
              { id: "b", text: "Narrow" },
              { id: "c", text: "The same as flat structures" },
              { id: "d", text: "Very wide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tall structure",
                statement: "Many layers, narrow spans of control.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tall hierarchies have many management layers, so each manager supervises fewer people.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Narrow",
          },
        },
        {
          id: "cieibs-u3-org-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In autocratic leadership, decisions are made:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By the leader alone" },
              { id: "b", text: "By employees rotating" },
              { id: "c", text: "By committee vote" },
              { id: "d", text: "By external consultants" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Autocratic leadership",
                statement: "Leader makes all decisions alone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Autocratic = centralised decision-making by the leader.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "By the leader alone",
          },
        },
        {
          id: "cieibs-u3-org-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A department has 45 staff. The manager wants an average span of control of 9. (a) Calculate how many managers are needed. (b) If only 3 managers are currently employed, calculate the shortfall.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5, unit: "managers" },
              { label: "b", answer: 2, unit: "managers" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Span of control",
                statement: "Managers needed = staff / desired span.",
              },
            ],
            steps: [
              {
                reasoning: "Managers needed = 45 / 9 = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shortfall = 5 - 3 = 2 managers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 5 managers, b) shortfall of 2",
          },
        },
        {
          id: "cieibs-u3-org-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between formal and informal communication.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Formal vs informal",
                statement: "Official channels vs unofficial channels.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal communication follows official channels — reports, meetings, memos.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Informal communication is unofficial — gossip, chats; fast but can distort information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Formal = official channels; informal = unofficial",
          },
        },
        {
          id: "cieibs-u3-org-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In democratic leadership, the leader:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Follows only company rules" },
              { id: "b", text: "Consults the team before deciding" },
              { id: "c", text: "Leaves all decisions to staff" },
              { id: "d", text: "Makes all decisions alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Democratic leadership",
                statement: "Leader consults the team before deciding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Democratic = participative decision-making with consultation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Consults the team before deciding",
          },
        },
        {
          id: "cieibs-u3-org-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A team meeting costs 10 staff x $30/hour x 2 hours. (a) Calculate the cost of one meeting. (b) Calculate the monthly cost if 4 meetings are held.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 600, unit: "$" },
              { label: "b", answer: 2400, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Meeting cost",
                statement:
                  "Cost = staff x rate x hours; monthly = per meeting x meetings.",
              },
            ],
            steps: [
              {
                reasoning: "One meeting = 10 x 30 x 2 = $600.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Monthly = 600 x 4 = $2,400.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) $600, b) $2,400",
          },
        },
        {
          id: "cieibs-u3-org-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare tall and flat organisational structures, giving one advantage of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Tall vs flat",
                statement: "Many layers/narrow span vs few layers/wide span.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tall: clear chain of command and specialist management layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Tall disadvantage: slow communication through layers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Flat: faster decisions and communication; but managers carry heavier workloads.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tall = clear authority but slow; flat = fast but heavy manager load",
          },
        },
        {
          id: "cieibs-u3-org-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main risk of informal communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Information can be distorted as it spreads" },
              { id: "b", text: "It is always accurate" },
              { id: "c", text: "It is too slow" },
              { id: "d", text: "It only happens in writing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Informal communication",
                statement:
                  "Unofficial channels — fast but can distort information.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rumours and chats spread quickly but lose accuracy.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Information can be distorted",
          },
        },
        {
          id: "cieibs-u3-org-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A company has 6 departments with 8 staff each. (a) Calculate total staff. (b) If each department instead has 10 staff, calculate the new total staff.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 48, unit: "staff" },
              { label: "b", answer: 60, unit: "staff" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Headcount",
                statement: "Total staff = departments x staff per department.",
              },
            ],
            steps: [
              {
                reasoning: "Current total = 6 x 8 = 48 staff.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New total = 6 x 10 = 60 staff.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 48, b) 60 staff",
          },
        },
        {
          id: "cieibs-u3-org-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A company facing a sudden crisis must choose between autocratic and democratic leadership. Evaluate which style is more appropriate and justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Leadership evaluation",
                statement: "Match style to situation — speed vs commitment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Autocratic gives fast decisions — valuable in a crisis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But may demotivate staff and miss good ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Democratic builds commitment but is slower — risky in emergencies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Justified recommendation, e.g. autocratic initially then consultative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Autocratic for speed in crisis, democratic for commitment — justified judgement",
          },
        },
        {
          id: "cieibs-u3-org-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'chain of command' refer to?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The hierarchy of authority from top to bottom",
              },
              { id: "b", text: "The order in which products are made" },
              { id: "c", text: "The sequence of hiring" },
              { id: "d", text: "The supply chain of suppliers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chain of command",
                statement: "Hierarchy of authority — who reports to whom.",
              },
            ],
            steps: [
              {
                reasoning: "Authority flows down through defined levels.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Hierarchy of authority",
          },
        },
        {
          id: "cieibs-u3-org-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define hierarchy, span of control, formal communication, informal communication, autocratic leadership, democratic leadership. (b) What is span of control? (c) What is formal communication? Give one example. (d) What is autocratic leadership? (e) A department has 40 staff and target span of 8 — calculate managers needed. (f) Explain one advantage of flat structures. (g) Explain one disadvantage of informal communication. (h) Evaluate which leadership style suits a creative design team.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure and leadership",
                statement: "Definitions, calculation, evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Number of subordinates per manager.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Official channels; e.g. memos, meetings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Leader decides alone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Managers = 40 / 8 = 5.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Faster communication and decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Rumours can distort information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Democratic suits creative teams — autonomy and input valued.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structure, communication, leadership evaluation.",
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
