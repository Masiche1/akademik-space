import type { Lesson } from "../../../types.ts";

export const lesson15: Lesson = {
  id: "cipg-u1-lesson-1-5",
  code: "1-5",
  title: "Stage 2 — Deciding and Explaining Why",
  goal: "I CAN make simple choices and explain reasons for my decisions.",
  standards: ["Cambridge Primary Global Perspectives 0838 Stage 2: evaluation", "Cambridge Primary Global Perspectives 0838 strand: Evaluation"],
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
      skill: "Choose between options and justify with reasons at Stage 2 level.",
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
          solution: "I choose the apple because it is healthier and gives me energy for playing.",
        },
      },
      questions: [
        {
          id: "cipg-u1-dd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does it mean to decide?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Make a choice between options"
                    },
                    {
                              "id": "b",
                              "text": "Avoid choosing"
                    },
                    {
                              "id": "c",
                              "text": "Copy others"
                    },
                    {
                              "id": "d",
                              "text": "Change your mind constantly"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Decide",
                              "statement": "Choose an option."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Deciding = selecting from available choices.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Make a choice"
},
        },
        {
          id: "cipg-u1-dd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose between 'read a book' and 'watch TV' for free time. State your choice and one reason.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Deciding",
                              "statement": "Choice + reason."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Clear choice made.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Valid reason with 'because'.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. book because it improves reading"
},
        },
        {
          id: "cipg-u1-dd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a reason? Rewrite 'I like dogs' as a sentence with a reason for liking them.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Reasons",
                              "statement": "Why explanations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Reason = explanation of why.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. 'I like dogs because they are friendly and play with me.'",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Reason starts with because.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Why-explanation; 'because' sentence"
},
        },
        {
          id: "cipg-u1-dd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define decide, reason, option, best. (b) Decide: cake or fruit for a party — give reason. (c) Why is 'because' useful? (d) What makes a good reason? (e) Give two reasons for wearing a helmet. (f) How do you choose between two toys? (g) What if your friend disagrees with your choice? (h) Design a decision-making chart for choosing a pet.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Decision making",
                              "statement": "Choices, reasons, justification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All four definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Valid choice + reason.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Signals explanation follows.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Clear, relevant, true explanation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Two safety reasons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Compare features, decide, explain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Listen, explain your reasons, maybe compromise.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid decision chart.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Decision-making, reasons, justification."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipg-u1-dd-notes",
      title: "Decisions — notes",
      summary: "Decide = choose best option. Always explain with 'because' + clear reason.",
      sections: [
        { heading: "Key idea", body: "Good decisions consider options then give reasons." },
        { heading: "Reasons", body: "Start with 'because'; make it specific and true." },
      ],
    },
  ],
};
