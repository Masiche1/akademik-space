import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipg-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Deciding and Explaining Why",
  goal: "I CAN make simple choices and explain reasons for my decisions.",
  standards: [
    "Cambridge Primary Global Perspectives 0838 Stage 2: evaluation",
    "Cambridge Primary Global Perspectives 0838 strand: Evaluation",
  ],
  stage: 2,
  vocabulary: [
    { term: "Decide", definition: "To make a choice between options." },
    { term: "Reason", definition: "Why you chose something." },
    { term: "Because", definition: "A word that gives a reason." },
    { term: "Best", definition: "The most suitable choice." },
    { term: "Option", definition: "One of the choices available." },
    { term: "Explain", definition: "To make your thinking clear." },
  ],
  concepts: [
    {
      id: "cipg-u1-s2-decide",
      title: "Making and explaining decisions",
      skill:
        "Choose between options and justify with reasons at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Making choices",
            body: "Deciding means picking the best option from choices. Think about what matters — is it safe? fun? helpful? cheap? Look at the reasons for each option before choosing.",
          },
          {
            heading: "Explaining why",
            body: "Always be ready to explain your choice: 'I chose the red one because it matches my bag.' Reasons start with 'because' and give a clear why. Good reasons help others understand your thinking.",
          },
        ],
        keyFormulas: [
          { name: "Decide", statement: "choose the best option" },
          { name: "Reason", statement: "explain why with 'because'" },
        ],
        workedExample: {
          problem: "Choose a snack: apple or crisps. Decide and give a reason.",
          solution:
            "I choose the apple because it is healthier and gives me energy for playing.",
        },
      },
      questions: [
        {
          id: "cipg-u1-dd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to decide?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Avoid choosing",
              },
              {
                id: "b",
                text: "Make a choice between options",
              },
              {
                id: "c",
                text: "Change your mind constantly",
              },
              {
                id: "d",
                text: "Copy others",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Decide",
                statement: "Choose an option.",
              },
            ],
            steps: [
              {
                reasoning: "Deciding = selecting from available choices.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Make a choice",
          },
        },
        {
          id: "cipg-u1-dd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose between 'read a book' and 'watch TV' for free time. State your choice and one reason.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Deciding",
                statement: "Choice + reason.",
              },
            ],
            steps: [
              {
                reasoning: "Clear choice made.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Valid reason with 'because'.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "e.g. book because it improves reading",
          },
        },
        {
          id: "cipg-u1-dd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a reason? Rewrite 'I like dogs' as a sentence with a reason for liking them.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reasons",
                statement: "Why explanations.",
              },
            ],
            steps: [
              {
                reasoning: "Reason = explanation of why.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. 'I like dogs because they are friendly and play with me.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reason starts with because.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Why-explanation; 'because' sentence",
          },
        },
        {
          id: "cipg-u1-dd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decide, reason, option, best. (b) Decide: cake or fruit for a party — give reason. (c) Why is 'because' useful? (d) What makes a good reason? (e) Give two reasons for wearing a helmet. (f) How do you choose between two toys? (g) What if your friend disagrees with your choice? (h) Design a decision-making chart for choosing a pet.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Decision making",
                statement: "Choices, reasons, justification.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Valid choice + reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Signals explanation follows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Clear, relevant, true explanation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Two safety reasons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Compare features, decide, explain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Listen, explain your reasons, maybe compromise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid decision chart.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decision-making, reasons, justification.",
          },
        },
        {
          id: "cipg-u1-dd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'option'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of food",
              },
              {
                id: "b",
                text: "A rule you must follow",
              },
              {
                id: "c",
                text: "The final choice you make",
              },
              {
                id: "d",
                text: "One of the choices available",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Option",
                statement: "Available choice.",
              },
            ],
            steps: [
              {
                reasoning: "An option is one of the choices you can pick from.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "One available choice",
          },
        },
        {
          id: "cipg-u1-dd-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sam had 3 snack options and chose 1. His friend had 5 options and chose 2. (a) How many of Sam's options did he NOT choose? (b) How many of his friend's options did the friend NOT choose?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 2,
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
                name: "Options",
                statement: "Counting unchosen options.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 3 - 1 = 2 options not chosen.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 - 2 = 3 options not chosen.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "2 and 3",
          },
        },
        {
          id: "cipg-u1-dd-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence gives a reason for a decision?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Blue is a colour",
              },
              {
                id: "b",
                text: "I chose the blue hat",
              },
              {
                id: "c",
                text: "I chose the blue hat because it matches my coat",
              },
              {
                id: "d",
                text: "Hats are worn on heads",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reasons",
                statement: "Explain why with 'because'.",
              },
            ],
            steps: [
              {
                reasoning: "Only option a explains why with a reason.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Choice plus 'because' reason",
          },
        },
        {
          id: "cipg-u1-dd-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "There are 4 options for the class lunch. A student must give 2 reasons for their choice. If 3 students each write 2 reasons, how many reasons will there be in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 4,
              },
              {
                label: "b",
                answer: 6,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reasons",
                statement: "Counting reasons given.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4 lunch options stated.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 students x 2 reasons = 6 reasons.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
            ],
            finalAnswer: "4 options; 6 reasons",
          },
        },
        {
          id: "cipg-u1-dd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best reason for choosing to walk to school?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Walking is the only option",
              },
              {
                id: "b",
                text: "Cars are boring",
              },
              {
                id: "c",
                text: "I have no shoes",
              },
              {
                id: "d",
                text: "It is healthy and helps the environment",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Good reasons",
                statement: "Clear, relevant, true reasons.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A good reason explains a real benefit of the choice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Healthy and environmentally friendly",
          },
        },
        {
          id: "cipg-u1-dd-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "For a project, 5 students each gave 1 reason for their choice. The teacher then asked each student to give 1 more reason. (a) How many reasons were given at first? (b) How many reasons were given after the extra one? (c) How many extra reasons were added?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
              {
                label: "b",
                answer: 10,
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
                name: "Reasons",
                statement: "Counting reasons before and after.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 5 students x 1 reason = 5.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 5 students x 2 reasons = 10.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 10 - 5 = 5 extra reasons.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "5, then 10, 5 added",
          },
        },
        {
          id: "cipg-u1-dd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which makes a reason 'good'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It rhymes with the choice",
              },
              {
                id: "b",
                text: "It is what everyone else thinks",
              },
              {
                id: "c",
                text: "It is very long",
              },
              {
                id: "d",
                text: "It is clear, true and relevant to the choice",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Good reason",
                statement: "Clear, true, relevant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A good reason clearly explains why the choice is best.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Clear, true, relevant",
          },
        },
        {
          id: "cipg-u1-dd-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Team A listed 6 pros and 4 cons for option X. Team B listed 3 pros and 5 cons. (a) How many pros did both teams list together? (b) How many cons did both teams list together? (c) How many points did both teams list in total?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 9,
              },
              {
                label: "b",
                answer: 9,
              },
              {
                label: "c",
                answer: 18,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decision making",
                statement: "Weighing pros and cons.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 6 + 3 = 9 pros.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 4 + 5 = 9 cons.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 9 + 9 = 18 points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer: "9 pros, 9 cons, 18 points",
          },
        },
        {
          id: "cipg-u1-dd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Your friend makes the same choice as you but gives no reason. What should you do?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Choose a different option for them",
              },
              {
                id: "b",
                text: "Forget that reasons matter",
              },
              {
                id: "c",
                text: "Ask them to explain their reason with 'because'",
              },
              {
                id: "d",
                text: "Copy their choice",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Explaining decisions",
                statement: "Always give a reason.",
              },
            ],
            steps: [
              {
                reasoning: "Encourage your friend to justify their choice.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Ask for their reason",
          },
        },
        {
          id: "cipg-u1-dd-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A decision chart has 3 options, each scored out of 5 points. (a) What is the maximum score for one option? (b) What is the maximum total score across all 3 options? (c) If option 1 scored 4 and option 2 scored 3, how many points did they score together? (d) If option 3 scored 5, what is the highest possible total for all options?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 5,
              },
              {
                label: "b",
                answer: 15,
              },
              {
                label: "c",
                answer: 7,
              },
              {
                label: "d",
                answer: 15,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decision charts",
                statement: "Scoring options.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Each option max is 5.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "(b) 3 options x 5 = 15.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "(c) 4 + 3 = 7 points.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "(d) All three at 5 = 15.",
                marks: 1,
                markCode: "M",
                part: "d",
              },
            ],
            finalAnswer: "5, 15, 7, 15",
          },
        },
        {
          id: "cipg-u1-dd-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it important to explain your decision?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It helps others understand your thinking and respond fairly",
              },
              {
                id: "b",
                text: "It is a school rule only",
              },
              {
                id: "c",
                text: "It makes you sound clever",
              },
              {
                id: "d",
                text: "It stops you ever changing your mind",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Justifying",
                statement: "Reasons make thinking clear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Explaining shares your reasoning and invites fair response.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Makes your thinking clear",
          },
        },
        {
          id: "cipg-u1-dd-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define decide, option, reason, best. (b) Choose between two free-time activities and give a reason starting with 'because'. (c) What makes a reason 'good'? (d) What should you do if two options both have good reasons? (e) How could a decision chart help you choose? (f) What should you do if your choice disappoints a friend? (g) Give two reasons for saving water at home. (h) Design a simple decision-making chart for choosing a birthday treat.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Decision making",
                statement: "Choices, reasons, justification.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All four definitions correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Clear choice with 'because' reason.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Clear, true, relevant explanation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Weigh the reasons and pick the one that matters most.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(e) Scores or lists options to compare them fairly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(f) Listen, explain your reasons, maybe compromise.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(g) Two valid reasons: less waste, lower bills, helps environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Valid decision chart with options and criteria.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Decision-making with reasons and justification.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-dd-notes",
      title: "Decisions — notes",
      summary:
        "Decide = choose best option. Always explain with 'because' + clear reason.",
      sections: [
        {
          heading: "Key idea",
          body: "Good decisions consider options then give reasons.",
        },
        {
          heading: "Reasons",
          body: "Start with 'because'; make it specific and true.",
        },
      ],
    },
  ],
};
