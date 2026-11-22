import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edpm2-u2-lesson-2-2",
  code: "2-2",
  title: "Fractions: Halves, Quarters and Thirds",
  goal: "I CAN find halves, quarters and thirds of shapes and amounts up to 20.",
  standards: ["Year 2 Fractions"],
  vocabulary: [
    {
      term: "Fraction",
      definition: "A part of a whole, like a half, quarter or third.",
    },
    { term: "Half", definition: "One of two equal parts." },
    { term: "Quarter", definition: "One of four equal parts." },
    { term: "Third", definition: "One of three equal parts." },
    {
      term: "Equal parts",
      definition:
        "Parts that are exactly the same size — fractions need equal parts.",
    },
    {
      term: "Denominator",
      definition:
        "The bottom number of a fraction — how many equal parts the whole is split into.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u2-fractions",
      title: "Halves, quarters and thirds",
      skill: "Find halves, quarters and thirds of shapes and amounts.",
      lesson: {
        sections: [
          {
            heading: "Halves, quarters and thirds of shapes",
            body: "Split a shape into **equal parts**: 2 parts = halves, 4 parts = quarters, 3 parts = thirds. Shade 1 part for 1/2, 1/4 or 1/3; shade 2 parts for 2/4 (which is the same as a half) or 2/3. The bottom number (denominator) counts the equal parts.",
          },
          {
            heading: "Fractions of amounts",
            body: "To find a fraction of an amount, share into equal groups. Half of 18 = 9 (18 ÷ 2). Quarter of 20 = 5 (20 ÷ 4). Third of 12 = 4 (12 ÷ 3). Use division: fraction of n = n ÷ denominator.",
          },
          {
            heading: "Equivalent fractions",
            body: "2/4 is the same as 1/2 — both mean half. 2/6 is the same as 1/3. When you split each part in half, the fraction doubles the denominator and numerator. Recognising equivalents helps compare fractions.",
          },
        ],
        keyFormulas: [
          {
            name: "Fraction of amount",
            statement: "fraction of n = n ÷ denominator",
          },
          {
            name: "Equivalent",
            statement: "1/2 = 2/4 = 3/6 (same amount, more parts)",
          },
        ],
        workedExample: {
          problem: "Find a third of 15.",
          solution: "15 ÷ 3 = 5. A third of 15 is 5. Check: 5 + 5 + 5 = 15.",
        },
      },
      questions: [
        {
          id: "edpm2-u2-frac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A shape is split into 3 equal parts and 1 part is shaded. What fraction is shaded?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A half" },
              { id: "b", text: "A third" },
              { id: "c", text: "Two thirds" },
              { id: "d", text: "A quarter" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Third",
                statement: "1 of 3 equal parts = a third.",
              },
            ],
            steps: [
              {
                reasoning: "3 equal parts, 1 shaded → 1/3.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** A third",
            commonErrors: ["Answering quarter — miscounting parts."],
          },
        },
        {
          id: "edpm2-u2-frac-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a quarter of 16?",
          response: {
            type: "numeric",
            parts: [{ label: "Quarter of 16", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction of amount",
                statement: "16 ÷ 4 = 4.",
              },
            ],
            steps: [
              {
                reasoning: "Share 16 into 4 equal groups.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "16 ÷ 4 = 4.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: 4 + 4 + 4 + 4 = 16.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 8 — halving instead of quartering."],
          },
        },
        {
          id: "edpm2-u2-frac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are 24 children in a class. A third of them walk to school. How many walk?",
          response: {
            type: "numeric",
            parts: [{ label: "Children walking", answer: 8, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction in context",
                statement: "24 ÷ 3 = 8.",
              },
            ],
            steps: [
              { reasoning: "A third = divide by 3.", marks: 1, markCode: "M" },
              { reasoning: "24 ÷ 3 = 8.", marks: 1, markCode: "M" },
              { reasoning: "Check: 8 × 3 = 24.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 8 children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "8 children",
            commonErrors: ["Answering 12 — halving instead of thirding."],
          },
        },
        {
          id: "edpm2-u2-frac-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pizza is cut into 8 equal slices.",
          parts: [
            {
              label: "a",
              prompt: "How many slices make a half? A quarter? A third?",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "If you eat 3 slices, what fraction of the pizza is left?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Two friends share the remaining slices equally. How many slices does each get?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fractions of a whole",
                statement:
                  "8 slices: half=4, quarter=2; thirds don't divide 8 equally.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Half of 8 = 4 slices.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning: "Quarter of 8 = 2 slices.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "A third of 8 is not a whole number — can't be done equally.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "8 − 3 = 5 slices left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "5 of 8 equal parts = five eighths.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Fraction named correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "5 slices shared between 2.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "2 each with 1 left over.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answers: 2 slices each, 1 left.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Remainder recognised.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4, 2, not possible; five eighths; 2 each + 1 left",
            commonErrors: [
              "Forcing a third of 8 — recognising it doesn't work.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm2-u2-fractions-real",
      title: "Fractions in real life",
      skill:
        "Use fractions to solve real-life sharing and comparison problems.",
      lesson: {
        sections: [
          {
            heading: "Sharing equally",
            body: "'Share a pizza between 4' means quarters — each gets 1/4. 'Half the cake for mum, half for dad' means splitting into 2 equal parts. Fractions describe equal shares.",
          },
          {
            heading: "Comparing fractions",
            body: "A half is bigger than a quarter (1/2 > 1/4) because fewer parts means each part is bigger. A third is bigger than a quarter. Same numerator: 3/4 > 1/4. More parts shaded of the same total = bigger fraction.",
          },
          {
            heading: "Fractions of amounts in context",
            body: "'Half the class wore red' — find half of the class size. 'A quarter of the 20 apples were eaten' — 20 ÷ 4 = 5 eaten, 15 left. Always link the fraction to the whole amount first.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparing",
            statement: "Fewer equal parts = bigger each part: 1/2 > 1/4 > 1/8",
          },
          {
            name: "Context",
            statement: "Identify the whole, then find the fraction of it",
          },
        ],
        workedExample: {
          problem: "Half of 18 children are boys. How many are girls?",
          solution:
            "18 ÷ 2 = 9 boys. Girls = 18 − 9 = 9. (Half and half are equal.)",
        },
      },
      questions: [
        {
          id: "edpm2-u2-fr2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is bigger: a half or a quarter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A half" },
              { id: "b", text: "It depends" },
              { id: "c", text: "A quarter" },
              { id: "d", text: "They are the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing fractions",
                statement: "Half = 2/4, bigger than 1/4.",
              },
            ],
            steps: [
              {
                reasoning: "Half of a cake is bigger than a quarter.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A half",
            commonErrors: ["Thinking more parts = bigger fraction."],
          },
        },
        {
          id: "edpm2-u2-fr2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class of 20 children shares 20 stickers equally. Each child gets half. How many stickers does each child get?",
          response: {
            type: "numeric",
            parts: [{ label: "Stickers each", answer: 10, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Half in context",
                statement: "Half of 20 = 10.",
              },
            ],
            steps: [
              {
                reasoning: "Half of 20 = 20 ÷ 2 = 10.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Check: 10 + 10 = 20.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10 stickers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10",
            commonErrors: ["Answering 20 — not halving."],
          },
        },
        {
          id: "edpm2-u2-fr2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 16 grapes. A quarter of them are eaten. How many grapes are left?",
          response: {
            type: "numeric",
            parts: [{ label: "Grapes left", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fraction left",
                statement: "Quarter of 16 = 4 eaten; 16 − 4 = 12 left.",
              },
            ],
            steps: [
              {
                reasoning: "Quarter of 16 = 16 ÷ 4 = 4 eaten.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Left = 16 − 4 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Check: 4 + 12 = 16.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 12 grapes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 grapes",
            commonErrors: ["Answering 4 — giving eaten not left."],
          },
        },
        {
          id: "edpm2-u2-fr2-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A cake is cut into 12 equal slices. 5 slices are eaten at breakfast.",
          parts: [
            {
              label: "a",
              prompt: "What fraction of the cake was eaten?",
              marks: 3,
            },
            { label: "b", prompt: "What fraction is left?", marks: 3 },
            {
              label: "c",
              prompt:
                "If the same number of slices are eaten at lunch, what fraction of the whole cake is eaten in total?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fractions of a whole",
                statement: "Denominator stays 12; count slices.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "5 of 12 slices = 5/12.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Fraction named correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Denominator is total slices.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "12 − 5 = 7 slices left.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "7 of 12 = 7/12.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Check: 5/12 + 7/12 = 12/12 = whole.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "5 more eaten → 10 of 12 total.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "10/12 eaten.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Equivalent to 5/6.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "5/12; 7/12; 10/12 (= 5/6)",
            commonErrors: ["Changing the denominator when slices are eaten."],
          },
        },
      ],
    },
  ],
};
