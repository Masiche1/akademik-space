import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "edpe3-u2-lesson-2-2",
  code: "2-2",
  title: "Inference and Deduction",
  goal: "I CAN make inferences and deductions from text clues.",
  standards: ["Year 3 Reading"],
  vocabulary: [
    {
      term: "Inference",
      definition: "Working out unstated meaning from clues.",
    },
    {
      term: "Deduction",
      definition: "Using logic and evidence to reach a conclusion.",
    },
    {
      term: "Character motivation",
      definition: "Why a character does something.",
    },
    {
      term: "Author's choice",
      definition: "Words selected deliberately for effect.",
    },
  ],
  concepts: [
    {
      id: "edpe3-u2-inference",
      title: "Deeper inference",
      skill: "Infer character feelings and motivations from evidence.",
      lesson: {
        sections: [
          {
            heading: "Reading between lines",
            body: "Authors don't say everything. 'She clenched her fists and looked away' — infer she's angry without saying 'angry'. Look for actions and body language that reveal feelings.",
          },
          {
            heading: "Motivation",
            body: "Ask WHY characters act: 'Tom gave his lunch to a homeless man' — why? Maybe he's kind. Motives are inferred from actions + context.",
          },
        ],
        keyFormulas: [
          { name: "Inference", statement: "Clues → unstated meaning" },
          {
            name: "Motivation",
            statement: "Why they act — inferred from evidence",
          },
        ],
        workedExample: {
          problem:
            "Text: 'She smiled and hugged her friend.' How does she feel?",
          solution: "Happy — smiling and hugging show happiness.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'The boy stamped his foot and shouted.' How does he feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Happy" },
              { id: "b", text: "Angry" },
              { id: "c", text: "Sleepy" },
              { id: "d", text: "Scared" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Stamping + shouting = angry.",
              },
            ],
            steps: [
              { reasoning: "Use action clues.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Angry",
            commonErrors: ["Not using body language clues."],
          },
        },
        {
          id: "edpe3-u2-in-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'He checked his watch three times.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He loves watches" },
              { id: "b", text: "He's worried about time" },
              { id: "c", text: "He's bored" },
              { id: "d", text: "He lost his watch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Repeated checking = anxious about time.",
              },
            ],
            steps: [
              {
                reasoning: "Infer from repeated action.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: worried about time.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** He's worried about time",
            commonErrors: ["Literal interpretation only."],
          },
        },
        {
          id: "edpe3-u2-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'She shared her sandwich with the new girl who had forgotten hers.' Why did she share?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation inference",
                statement: "She's kind/helpful.",
              },
            ],
            steps: [
              { reasoning: "Identify kind action.", marks: 1, markCode: "M" },
              {
                reasoning: "Infer motivation: kindness.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Supported by context.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "She's kind — she helped someone in need.",
            commonErrors: ["No inference — just restating text."],
          },
        },
        {
          id: "edpe3-u2-in-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'The old house stood at the end of the lane. Its windows were broken and the garden was overgrown.'",
          parts: [
            {
              label: "a",
              prompt: "What can you infer about the house?",
              marks: 2,
            },
            { label: "b", prompt: "What evidence supports this?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement:
                  "Abandoned/neglected; broken windows, overgrown garden.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Inference: abandoned or neglected.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Reasonable conclusion.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Broken windows quoted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Overgrown garden quoted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Abandoned; 'broken windows', 'overgrown garden'",
            commonErrors: ["No evidence quoted."],
          },
        },
      ],
    },
    {
      id: "edpe3-u2-deduction",
      title: "Deductive reasoning",
      skill: "Use logic to draw conclusions from given information.",
      lesson: {
        sections: [
          {
            heading: "What is deduction?",
            body: "Deduction uses clues + logic to reach a definite answer. 'All birds have feathers. A robin is a bird. Therefore robins have feathers.' Unlike inference, deduction is certain.",
          },
          {
            heading: "Reading clues carefully",
            body: "Gather all information first. Eliminate impossible options. Use what you know. 'The red car isn't the fastest because it came last.' Deduction narrows possibilities.",
          },
        ],
        keyFormulas: [
          { name: "Deduction", statement: "Clues + logic = certain answer" },
          { name: "Process", statement: "Gather info → eliminate → conclude" },
        ],
        workedExample: {
          problem:
            "Three children: Amy is taller than Ben. Ben is taller than Cat. Who is shortest?",
          solution: "Cat — Ben taller than Cat, Amy taller than Ben.",
        },
      },
      questions: [
        {
          id: "edpe3-u2-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "All dogs have four legs. Rex is a dog. How many legs does Rex have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "4" },
              { id: "c", text: "6" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deduction",
                statement: "Dog → 4 legs.",
              },
            ],
            steps: [
              {
                reasoning: "Apply rule to specific case.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Not applying general rule."],
          },
        },
        {
          id: "edpe3-u2-de-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Three boxes: red, blue, green. Red is not the biggest. Blue is bigger than red. Which is biggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Green" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deduction",
                statement: "Green must be biggest.",
              },
            ],
            steps: [
              {
                reasoning: "Red not biggest; blue > red.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Green eliminated others → biggest.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Green",
            commonErrors: ["Choosing blue without eliminating green."],
          },
        },
        {
          id: "edpe3-u2-de-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Four friends line up: Sam is first, Jo is last, Kim is between Sam and Jo, Lee is between Kim and Jo. Write the order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deduction",
                statement: "Sam, Kim, Lee, Jo.",
              },
            ],
            steps: [
              { reasoning: "First and last fixed.", marks: 1, markCode: "M" },
              { reasoning: "Kim between Sam and Jo.", marks: 1, markCode: "A" },
              {
                reasoning: "Lee between Kim and Jo → order.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sam, Kim, Lee, Jo",
            commonErrors: ["Wrong middle order."],
          },
        },
        {
          id: "edpe3-u2-de-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three suspects: A, B, C. Only one broke the window. A was at school all day. C has no shoes (it rained). B's footprints are in the mud. Who broke it?",
          parts: [
            { label: "a", prompt: "Eliminate A and explain why.", marks: 1 },
            { label: "b", prompt: "Eliminate C and explain why.", marks: 1 },
            { label: "c", prompt: "Who is left?", marks: 1 },
            { label: "d", prompt: "What evidence points to them?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Deduction",
                statement: "B; footprints in mud.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A at school = alibi.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "C has no shoes = couldn't leave prints? Actually C couldn't be outside.",
                marks: 1,
                markCode: "A",
              },
              { part: "c", reasoning: "B remains.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Mud footprints match.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "B; footprints in mud",
            commonErrors: ["Not eliminating systematically."],
          },
        },
      ],
    },
  ],
};
