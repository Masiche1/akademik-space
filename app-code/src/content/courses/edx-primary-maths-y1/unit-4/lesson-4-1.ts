import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm1-u4-lesson-4-1",
  code: "4-1",
  title: "Patterns and Sequences",
  goal: "I CAN continue simple patterns and spot number sequences.",
  standards: ["Year 1 Patterns and sequences"],
  vocabulary: [
    { term: "Pattern", definition: "A repeating arrangement or rule." },
    { term: "Sequence", definition: "A list of numbers or objects in order." },
    { term: "Rule", definition: "What makes a pattern continue the same way." },
    { term: "Next", definition: "The one that comes after in a sequence." },
  ],
  concepts: [
    {
      id: "edpm1-u4-patterns",
      title: "Recognising and Continuing Patterns",
      skill: "Spot the rule in a pattern and continue it.",
      lesson: {
        sections: [
          {
            heading: "What is a pattern?",
            body: "A pattern repeats in a rule — like red, blue, red, blue. Number patterns work the same way: 2, 4, 6, 8, ? The rule is 'add 2 each time', so the next number is 10. Patterns can be shapes, colours, sounds, or numbers.",
          },
          {
            heading: "Finding the rule",
            body: "To find the rule, ask: what happens from one number to the next? Is it adding the same number? Subtracting? Doubling? In 5, 10, 15, 20 the rule is 'add 5'. In 2, 4, 8, 16 the rule is 'double each time'. Once you know the rule, you can continue the pattern.",
          },
        ],
        keyFormulas: [
          {
            name: "Pattern rule",
            statement: "What happens each step: add, subtract, double",
          },
        ],
        workedExample: {
          problem: "Continue: 3, 6, 9, 12, ?",
          solution: "Rule = add 3. Next = 15.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-pat-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes next: red, blue, red, blue, ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Blue" },
              { id: "c", text: "Green" },
              { id: "d", text: "Yellow" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Patterns", statement: "ABAB repeats." },
            ],
            steps: [
              {
                reasoning: "Pattern ABAB → next A = red.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Red",
            commonErrors: ["Wrong colour."],
          },
        },
        {
          id: "edpm1-u4-pat-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the rule in 4, 8, 12, 16?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add 2" },
              { id: "b", text: "Add 4" },
              { id: "c", text: "Double" },
              { id: "d", text: "Add 8" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Number patterns",
                statement: "Find the step.",
              },
            ],
            steps: [
              { reasoning: "4→8→12→16 adds 4.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** Add 4",
            commonErrors: ["Wrong step."],
          },
        },
        {
          id: "edpm1-u4-pat-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Continue the pattern: 5, 10, 15, 20, ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequences",
                statement: "Apply the rule.",
              },
            ],
            steps: [
              { reasoning: "Rule = add 5.", marks: 1, markCode: "M" },
              { reasoning: "20 + 5 = 25.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 25.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25",
            commonErrors: ["Wrong step."],
          },
        },
        {
          id: "edpm1-u4-pat-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Make your own number pattern with the rule 'add 3' starting at 4. Write the first five numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pattern creation",
                statement: "Create + apply rule.",
              },
            ],
            steps: [
              { reasoning: "Start at 4.", marks: 1, markCode: "M" },
              {
                reasoning: "Add 3 each time: 4, 7, 10, 13, 16.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Five correct numbers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4, 7, 10, 13, 16",
            commonErrors: ["Wrong numbers."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-solve",
      title: "Number Puzzles",
      skill: "Solve simple missing-number and puzzle problems.",
      lesson: {
        sections: [
          {
            heading: "Missing numbers",
            body: "Number puzzles ask you to find a missing number. In 5 + ? = 9, the missing number is 4 — because 5 + 4 = 9. In ? + 3 = 8, the answer is 5. You can check by adding the numbers back. Missing numbers can be in any position — start, middle or end.",
          },
          {
            heading: "Puzzle types",
            body: "Puzzles include: missing number problems (3 + ? = 7), number bonds (pairs that make a total), fact families (3, 4, 7: 3+4=7, 4+3=7, 7-3=4, 7-4=3), and shape puzzles where numbers are missing from a table or diagram.",
          },
        ],
        keyFormulas: [
          {
            name: "Missing number",
            statement: "Check by adding/subtracting back",
          },
        ],
        workedExample: {
          problem: "Find the missing number: ? + 6 = 11",
          solution: "11 - 6 = 5. Check: 5 + 6 = 11.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-puz-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the missing number: 3 + ? = 7",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "6" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Missing numbers",
                statement: "7 - 3 = 4.",
              },
            ],
            steps: [{ reasoning: "3 + 4 = 7.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 4",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edpm1-u4-puz-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the missing number: ? + 6 = 11",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "7" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Missing numbers",
                statement: "11 - 6 = 5.",
              },
            ],
            steps: [{ reasoning: "11 - 6 = 5.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 5",
            commonErrors: ["Wrong subtraction."],
          },
        },
        {
          id: "edpm1-u4-puz-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the fact family: 2, 5, 7. Write all four number sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fact families",
                statement: "2+5=7, 5+2=7, 7-2=5, 7-5=2.",
              },
            ],
            steps: [
              {
                reasoning: "2 + 5 = 7 and 5 + 2 = 7.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "7 - 2 = 5 and 7 - 5 = 2.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All four correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2+5=7, 5+2=7, 7-2=5, 7-5=2",
            commonErrors: ["Missing sentences."],
          },
        },
        {
          id: "edpm1-u4-puz-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom has some stickers. He gets 4 more and now has 9. How many did he start with? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Word problems",
                statement: "Start + 4 = 9, so 9 - 4.",
              },
            ],
            steps: [
              { reasoning: "Start + 4 = 9.", marks: 1, markCode: "M" },
              { reasoning: "9 - 4 = 5.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5 stickers.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "5 stickers",
            commonErrors: ["Added instead of subtracted."],
          },
        },
      ],
    },
    {
      id: "edpm1-u4-logic",
      title: "Odd and Even Numbers",
      skill: "Identify odd and even numbers and pair objects.",
      lesson: {
        sections: [
          {
            heading: "Odd and even",
            body: "Even numbers can be shared equally into pairs — 2, 4, 6, 8. Odd numbers always have one left over — 1, 3, 5, 7. Even numbers end in 0, 2, 4, 6 or 8. Odd numbers end in 1, 3, 5, 7 or 9.",
          },
          {
            heading: "Pairing objects",
            body: "To check if a number is odd or even, try to pair objects. 7 counters: 3 pairs with 1 left over = odd. 8 counters: 4 pairs, nothing left = even. Doubling gives even numbers — 2, 4, 6, 8, 10 are all even.",
          },
        ],
        keyFormulas: [
          { name: "Even numbers", statement: "0,2,4,6,8,10... pairs exactly" },
          { name: "Odd numbers", statement: "1,3,5,7,9... one left over" },
        ],
        workedExample: {
          problem: "Is 15 odd or even?",
          solution: "Odd — ends in 5 and can't be paired exactly.",
        },
      },
      questions: [
        {
          id: "edpm1-u4-oe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is 8 odd or even?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Odd" },
              { id: "b", text: "Even" },
              { id: "c", text: "Both" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Odd/even", statement: "8 is even." },
            ],
            steps: [
              { reasoning: "8 pairs exactly = even.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Even",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm1-u4-oe-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which number is odd?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12" },
              { id: "b", text: "14" },
              { id: "c", text: "15" },
              { id: "d", text: "20" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Odd numbers",
                statement: "15 is odd.",
              },
            ],
            steps: [
              { reasoning: "15 can't pair exactly.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(c)** 15",
            commonErrors: ["Wrong number."],
          },
        },
        {
          id: "edpm1-u4-oe-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these numbers into odd and even: 3, 8, 11, 16, 20, 25.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Odd/even sorting",
                statement: "Check each number.",
              },
            ],
            steps: [
              { reasoning: "Odd: 3, 11, 25.", marks: 1, markCode: "M" },
              { reasoning: "Even: 8, 16, 20.", marks: 1, markCode: "M" },
              { reasoning: "All correctly sorted.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Odd: 3,11,25; Even: 8,16,20",
            commonErrors: ["Wrong sorting."],
          },
        },
        {
          id: "edpm1-u4-oe-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why all the doubles (2, 4, 6, 8, 10...) are even numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Doubles and even",
                statement: "Doubles pair exactly.",
              },
            ],
            steps: [
              {
                reasoning: "A double is two of the same number.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two of each can always be paired.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So doubles are always even.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Doubles always pair = even",
            commonErrors: ["No reasoning."],
          },
        },
      ],
    },
  ],
};
