import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edxph-u4-lesson-4-3",
  code: "4-3",
  title: "History Summary",
  goal: "I CAN summarise key historical concepts and events.",
  standards: ["Y5-Y6 History", "Synthesis"],
  vocabulary: [
    { term: "Chronology", definition: "The order of events in time." },
    {
      term: "Civilisation",
      definition: "A complex society with cities, government and culture.",
    },
    {
      term: "Empire",
      definition: "A group of territories ruled by one power.",
    },
    {
      term: "Revolution",
      definition: "A sudden, dramatic change in society or government.",
    },
  ],
  concepts: [
    {
      id: "edxph-u4-keydates",
      title: "Key Dates in History",
      skill: "Recall key dates and events across history.",
      lesson: {
        sections: [
          {
            heading: "Ancient to medieval",
            body: "Key dates: ~3400 BC writing invented; 3100 BC Egypt unified; 776 BC first Olympics; 753 BC Rome founded; 44 BC Caesar assassinated; AD 43 Romans invade Britain; 410 Romans leave; 597 Christianity reaches England; 1066 Battle of Hastings.",
          },
          {
            heading: "Modern era",
            body: "Key dates: 1215 Magna Carta; 1348 Black Death; 1485 Tudors begin; 1588 Spanish Armada defeated; ~1760 Industrial Revolution begins; 1776 American independence; 1914-18 WWI; 1939-45 WWII; 1945 UN founded; 1969 moon landing; 1989 Berlin Wall falls.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Put in order: 1066, 1215, 1348.",
          solution: "1066 → 1215 → 1348.",
        },
      },
      questions: [
        {
          id: "edxph-u4-dates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was the Battle of Hastings?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1215" },
              { id: "b", text: "1066" },
              { id: "c", text: "1348" },
              { id: "d", text: "1588" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key dates",
                statement: "Hastings = 1066.",
              },
            ],
            steps: [{ reasoning: "1066 = Hastings.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 1066",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "edxph-u4-dates-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When did World War II end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1918" },
              { id: "b", text: "1945" },
              { id: "c", text: "1939" },
              { id: "d", text: "1969" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Key dates",
                statement: "WWII ends 1945.",
              },
            ],
            steps: [{ reasoning: "1945 = end.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 1945",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "edxph-u4-dates-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Order these events: Industrial Revolution (~1760), Roman invasion (AD 43), Black Death (1348).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Chronology", statement: "Order events." },
            ],
            steps: [
              { reasoning: "AD 43 first.", marks: 1, markCode: "M" },
              { reasoning: "1348 second.", marks: 1, markCode: "M" },
              { reasoning: "~1760 last.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "AD 43→1348→~1760",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edxph-u4-dates-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Create a timeline of five key events in British history from Roman times to today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Timeline creation",
                statement: "Ordered key events.",
              },
            ],
            steps: [
              {
                reasoning: "Five events spanning Roman to modern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct chronological order.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Accurate dates.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "e.g. 43→1066→1348→1588→1945",
            commonErrors: ["Wrong order or dates."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-themes",
      title: "Historical Themes",
      skill: "Identify themes that run through history.",
      lesson: {
        sections: [
          {
            heading: "Power and conflict",
            body: "History is full of struggles for power: kings vs barons, nations vs empires, rulers vs people. Wars, invasions, revolutions — from Hastings to WWII — shaped who controls land and people. Understanding power explains why events happened.",
          },
          {
            heading: "Change and continuity",
            body: "Some things change dramatically (transport, technology, communication); others stay the same (human needs, love, fear, ambition). History studies both — what is different now vs the past, and what has always been true about being human.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Give one theme of history and an example.",
          solution: "Power — e.g. struggles for the English throne.",
        },
      },
      questions: [
        {
          id: "edxph-u4-thm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a historical theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of source" },
              { id: "b", text: "A recurring pattern or idea across history" },
              { id: "c", text: "A battle" },
              { id: "d", text: "A date" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historical theme",
                statement: "Recurring pattern.",
              },
            ],
            steps: [{ reasoning: "Theme = pattern.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Recurring pattern",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u4-thm-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a theme of history?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather" },
              { id: "b", text: "Struggles for power" },
              { id: "c", text: "Fashion" },
              { id: "d", text: "Sports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Historical themes",
                statement: "Power, change, conflict.",
              },
            ],
            steps: [{ reasoning: "Power = theme.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Power struggles",
            commonErrors: ["Not historical theme."],
          },
        },
        {
          id: "edxph-u4-thm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give one example of change and one of continuity in history.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change vs continuity",
                statement: "Both occur.",
              },
            ],
            steps: [
              {
                reasoning: "Change example — e.g. technology/inventions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Continuity example — e.g. human needs/beliefs.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. tech vs human needs",
            commonErrors: ["Two of same."],
          },
        },
        {
          id: "edxph-u4-thm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does studying historical themes help us understand the present?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Themes and present",
                statement: "Patterns repeat.",
              },
            ],
            steps: [
              {
                reasoning: "Themes show patterns — power struggles, change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Understanding past helps predict/interpret present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Example — understanding conflict helps peace-building.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Patterns+prediction+example",
            commonErrors: ["No real link."],
          },
        },
      ],
    },
    {
      id: "edxph-u4-synthesis",
      title: "History Synthesis",
      skill: "Combine all history skills in a final enquiry.",
      lesson: {
        sections: [
          {
            heading: "Putting it together",
            body: "History combines: chronology (ordering events), sources (finding evidence), enquiry (asking questions), evaluation (judging claims), and understanding themes (patterns). A good historian uses all these skills together — not just memorising dates but understanding why events happened and what they mean.",
          },
          {
            heading: "History as a skill",
            body: "History teaches critical thinking — evaluating evidence, questioning claims, understanding different perspectives. These skills apply beyond history: to current events, media literacy, and decision-making. History is not just about the past — it's about understanding how we know what we know.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What skills does studying history develop?",
          solution:
            "Critical thinking, source evaluation, chronology, enquiry.",
        },
      },
      questions: [
        {
          id: "edxph-u4-syn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does studying history develop?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only memory" },
              { id: "b", text: "Critical thinking and enquiry skills" },
              { id: "c", text: "Sports skills" },
              { id: "d", text: "Cooking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "History skills",
                statement: "Critical thinking.",
              },
            ],
            steps: [
              {
                reasoning: "History = critical skills.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Critical skills",
            commonErrors: ["Wrong skills."],
          },
        },
        {
          id: "edxph-u4-syn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is chronology?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of source" },
              { id: "b", text: "The order of events in time" },
              { id: "c", text: "A map skill" },
              { id: "d", text: "A war" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Chronology",
                statement: "Order of events.",
              },
            ],
            steps: [
              { reasoning: "Chronology = order.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Order of events",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edxph-u4-syn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name three skills a historian uses and explain each briefly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Historical skills",
                statement: "Chronology, sources, enquiry.",
              },
            ],
            steps: [
              { reasoning: "Skill 1 + explanation.", marks: 1, markCode: "M" },
              { reasoning: "Skill 2 + explanation.", marks: 1, markCode: "M" },
              { reasoning: "Skill 3 + explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. chronology+sources+enquiry",
            commonErrors: ["No explanations."],
          },
        },
        {
          id: "edxph-u4-syn-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is history more than just memorising dates? Explain with examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "History beyond dates",
                statement: "Understanding causes and meanings.",
              },
            ],
            steps: [
              {
                reasoning: "History studies causes — why events happened.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "History studies effects — how events changed things.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "History teaches critical thinking about evidence and perspectives.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Causes+effects+critical thinking",
            commonErrors: ["Dates-only view."],
          },
        },
      ],
    },
  ],
};
