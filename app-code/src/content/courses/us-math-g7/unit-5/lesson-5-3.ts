import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "m7-u5-lesson-5-3",
  code: "5-3",
  title: "Absolute Value and Number Line Reasoning",
  goal: "I CAN use absolute value to reason about distance and magnitude, and apply it to real-world problems involving position and change.",
  standards: ["7.NS.A.1", "7.NS.A.2"],
  vocabulary: [
    {
      term: "Absolute value",
      definition:
        "The distance from zero on the number line, written $|x|$. It is always nonnegative: $|{-5}| = 5$ and $|5| = 5$.",
    },
    {
      term: "Magnitude",
      definition: "The size or absolute value of a number, ignoring its sign.",
    },
    {
      term: "Distance",
      definition:
        "The absolute value of the difference between two numbers: $d = |a - b|$.",
    },
    {
      term: "Opposite",
      definition:
        "The number on the other side of zero at the same distance: the opposite of $-3$ is $3$.",
    },
    {
      term: "Symmetric",
      definition:
        "Two numbers are symmetric about zero when they have the same absolute value but opposite signs.",
    },
    {
      term: "Minimum/maximum",
      definition:
        "The smallest or largest value in a set; useful for comparing changes or positions.",
    },
  ],
  concepts: [
    {
      id: "m7-u5-absolute-value",
      title: "Absolute value as distance",
      skill: "Use absolute value to find distances and compare magnitudes.",
      lesson: {
        sections: [
          {
            heading: "Definition and meaning",
            body: "The **absolute value** of a number is its distance from zero on the number line. $|{-7}| = 7$ because $-7$ is $7$ units from zero. $|0| = 0$. Absolute value is always nonnegative — it measures magnitude, not direction. On the number line, $|a|$ is the distance from $a$ to $0$.",
          },
          {
            heading: "Distance between two points",
            body: "The distance between two numbers $a$ and $b$ is $|a - b|$. For example, the distance between $-3$ and $5$ is $|-3 - 5| = |-8| = 8$. Note that $|a - b| = |b - a|$ — distance is symmetric. On a number line, count the units between the two points.",
          },
          {
            heading: "Comparing magnitudes",
            body: "To compare which of two changes is larger, compare absolute values. A change of $-12$ and a change of $+9$: $|-12| = 12 > |9| = 9$, so the $-12$ change is larger in magnitude. The negative sign indicates direction, not size.",
          },
        ],
        keyFormulas: [
          {
            name: "Absolute value",
            statement: "$|a| = \\text{distance from } a \\text{ to } 0$",
          },
          { name: "Distance between points", statement: "$d = |a - b|$" },
          { name: "Symmetry", statement: "$|a - b| = |b - a|$" },
        ],
        workedExample: {
          problem: "Find the distance between $-8$ and $3$ on the number line.",
          solution:
            "$d = |-8 - 3| = |-11| = 11$ units. Alternatively, count from $-8$ to $0$ ($8$ units) plus from $0$ to $3$ ($3$ units) = $11$ units.",
        },
      },
      questions: [
        {
          id: "m7-u5-absolute-value-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $|{-9}| + |4|$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-5$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$13$" },
              { id: "d", text: "$-13$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Absolute value",
                statement:
                  "$|a|$ is the distance from $a$ to $0$, always nonnegative.",
              },
            ],
            steps: [
              {
                reasoning: "$|{-9}| = 9$ and $|4| = 4$; their sum is $13$.",
                working: "|{-9}| + |4| = 9 + 4 = 13",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $13$",
            commonErrors: [
              "Computing $-9 + 4 = -5$ without absolute values.",
              "Making the result negative.",
            ],
          },
        },
        {
          id: "m7-u5-absolute-value-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the distance between $-12$ and $7$ on the number line?",
          response: {
            type: "numeric",
            parts: [{ label: "Distance", answer: 19 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between points",
                statement: "$d = |a - b|$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the absolute value of the difference.",
                working: "|-12 - 7| = |-19| = 19",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Verify by counting: $12$ units from $-12$ to $0$, plus $7$ units from $0$ to $7$.",
                working: "12 + 7 = 19",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$19$ units",
            commonErrors: [
              "Computing $|-12 - 7| = |-5| = 5$ by subtracting incorrectly.",
              "Computing $7 - (-12) = 19$ correctly but reporting $-19$.",
            ],
          },
        },
        {
          id: "m7-u5-absolute-value-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a cold morning, the temperature is $-5^\\circ$C. By afternoon it rises to $8^\\circ$C. What is the absolute value of the temperature change?",
          response: {
            type: "numeric",
            parts: [{ label: "Absolute change ($^\\circ$C)", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Absolute value in context",
                statement:
                  "The change is $8 - (-5) = 13$; its absolute value is $13$.",
              },
            ],
            steps: [
              {
                reasoning: "Find the change: $8 - (-5) = 8 + 5 = 13$.",
                working: "8 - (-5) = 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the absolute value of the change.",
                working: "|13| = 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "13^\\circ\\text{C}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$13^\\circ\\text{C}$ (the temperature rose by $13$ degrees)",
            commonErrors: [
              "Computing $|-5 - 8| = |-13| = 13$ correctly but not recognizing this is the same.",
              "Reporting $-13$ as the change without absolute value.",
            ],
          },
        },
        {
          id: "m7-u5-absolute-value-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "Evaluate $|{-8} - (-3)|$.", marks: 2 },
            { label: "b", prompt: "Evaluate $|6| - |{-10}|$.", marks: 2 },
            {
              label: "c",
              prompt:
                "The elevations of two hikers are $-15$ meters and $22$ meters. How far apart are they?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Which is larger in magnitude: a change of $-18$ or a change of $+14$? By how much?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 5 },
              { label: "(b)", answer: -4 },
              { label: "(c) Distance apart (m)", answer: 37 },
              { label: "(d) Difference in magnitude", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Distance between points",
                statement: "$d = |a - b|$",
              },
              {
                kind: "definition",
                name: "Absolute value",
                statement: "$|a|$ measures magnitude, ignoring sign.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Compute the difference inside the absolute value.",
                working: "|-8 - (-3)| = |-8 + 3| = |-5|",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Take the absolute value.",
                working: "|-5| = 5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evaluate each absolute value separately.",
                working: "|6| - |{-10}| = 6 - 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Compute the difference.",
                working: "6 - 10 = -4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Distance = absolute value of the difference in elevations.",
                working: "|-15 - 22| = |-37|",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "|-37| = 37",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Compare magnitudes: $|-18| = 18$ and $|14| = 14$; $18 > 14$.",
                working: "18 - 14 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State which is larger and by how much.",
                working: "|-18| - |14| = 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $5$ (b) $-4$ (c) $37$ meters (d) $-18$ is larger by $4$",
            commonErrors: [
              "In (b), computing $|6 - (-10)| = 16$ instead of $|6| - |{-10}|$.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u5-number-line",
      title: "Number line reasoning with rational numbers",
      skill:
        "Use the number line to order, compare and compute with rational numbers.",
      lesson: {
        sections: [
          {
            heading: "Ordering rational numbers",
            body: "On the number line, numbers increase from left to right. Negative numbers are to the left of zero, positive to the right. To compare two rational numbers, convert to the same form (all decimals or all fractions) and locate them. $-0.5 > -1$ because $-0.5$ is closer to zero. $\\frac{3}{4} = 0.75 > \\frac{2}{3} \\approx 0.67$.",
          },
          {
            heading: "Inequalities and the number line",
            body: "Inequality symbols: $<$ (less than), $>$ (greater than), $\\leq$ (less than or equal), $\\geq$ (greater than or equal). On the number line, $x < 3$ means all numbers to the left of $3$; $x \\geq -2$ means all numbers to the right of $-2$ including $-2$ itself.",
          },
          {
            heading: "Movement on the number line",
            body: "Adding a positive number moves right; adding a negative moves left. Subtracting moves in the opposite direction. $5 + (-3) = 2$: start at $5$, move $3$ left. $-4 - (-2) = -2$: start at $-4$, move $2$ right (subtracting a negative adds).",
          },
        ],
        keyFormulas: [
          {
            name: "Ordering",
            statement: "Numbers increase left to right on the number line",
          },
          {
            name: "Inequality symbols",
            statement:
              "$<$ less than; $>$ greater than; $\\leq$ at most; $\\geq$ at least",
          },
          { name: "Movement", statement: "Positive = right; negative = left" },
        ],
        workedExample: {
          problem:
            "Order from least to greatest: $-1.5$, $\\frac{1}{2}$, $-\\frac{3}{4}$, $0$.",
          solution:
            "Convert to decimals: $-1.5$, $0.5$, $-0.75$, $0$. Ordered: $-1.5 < -0.75 < 0 < 0.5$, so $-1.5 < -\\frac{3}{4} < 0 < \\frac{1}{2}$.",
        },
      },
      questions: [
        {
          id: "m7-u5-number-line-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which number is greatest: $-2.5$, $-\\frac{1}{2}$, $0$, or $-0.75$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2.5$" },
              { id: "b", text: "$-\\frac{1}{2}$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$-0.75$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Number line ordering",
                statement:
                  "Numbers increase left to right; $0$ is greater than all negative numbers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$0$ is greater than every negative number on the number line.",
                working: "0 > -0.5 > -0.75 > -2.5",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $0$",
            commonErrors: [
              "Thinking $-2.5$ is greatest because it has the largest absolute value.",
            ],
          },
        },
        {
          id: "m7-u5-number-line-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Order from least to greatest: $\\frac{3}{4}$, $-1$, $\\frac{1}{2}$, $-\\frac{1}{4}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Order (least to greatest)", answer: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing fractions",
                statement:
                  "Convert to decimals or common denominators to compare.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert to decimals: $\\frac{3}{4} = 0.75$, $-1$, $\\frac{1}{2} = 0.5$, $-\\frac{1}{4} = -0.25$.",
                working: "-1 < -0.25 < 0.5 < 0.75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Translate back to fractions.",
                working: "-1 < -\\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1 < -\\frac{1}{4} < \\frac{1}{2} < \\frac{3}{4}$",
            commonErrors: [
              "Comparing numerators only: $\\frac{1}{2} < \\frac{1}{4}$.",
            ],
          },
        },
        {
          id: "m7-u5-number-line-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which inequality is true: $-\\frac{3}{4} < -0.5$ or $-\\frac{3}{4} > -0.5$? Explain your reasoning using the number line.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing on number line",
                statement: "Numbers closer to zero are greater.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $\\frac{3}{4}$ to $0.75$, so $-\\frac{3}{4} = -0.75$.",
                working: "-\\frac{3}{4} = -0.75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "On the number line, $-0.75$ is to the left of $-0.5$, so $-0.75 < -0.5$.",
                working: "-0.75 < -0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore $-\\frac{3}{4} < -0.5$ is true.",
                working: "-\\frac{3}{4} < -0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$-\\frac{3}{4} < -0.5$ is true, because $-0.75$ is further from zero than $-0.5$.",
            commonErrors: [
              "Thinking $\\frac{3}{4} > \\frac{1}{2}$ means $-\\frac{3}{4} > -\\frac{1}{2}$.",
            ],
          },
        },
        {
          id: "m7-u5-number-line-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "Order from least to greatest: $-2$, $\\frac{5}{4}$, $-\\frac{1}{2}$, $0.75$, $-1$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which is greater: $-\\frac{2}{3}$ or $-0.7$?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A diver descends from $0$ to $-18$ meters, then ascends to $-6$ meters. How far did the diver move on the number line during the ascent?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Solve the inequality: $x > -2.5$ and $x < 1$. Give two values of $x$ that satisfy it.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Order (least to greatest)", answer: 0 },
              { label: "(b) Greater value", answer: -0.6667 },
              { label: "(c) Distance moved (m)", answer: 12 },
              { label: "(d) Example x value", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Number line ordering",
                statement: "Convert to decimals for comparison.",
              },
              {
                kind: "skill",
                name: "Inequalities",
                statement: "$x > -2.5$ and $x < 1$ means $-2.5 < x < 1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert $\\frac{5}{4}$ to $1.25$ and order all values.",
                working: "-2 < -1 < -0.5 < 0.75 < 1.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Translate back to fractions.",
                working: "-2 < -1 < -\\frac{1}{2} < 0.75 < \\frac{5}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Convert $\\frac{2}{3}$ to $0.67$; compare $-0.67$ and $-0.7$.",
                working: "-0.67 > -0.7",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State which is greater.",
                working: "-\\frac{2}{3} > -0.7",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Ascending from $-18$ to $-6$ is movement of $|-6 - (-18)| = |12| = 12$.",
                working: "|-6 - (-18)| = 12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the distance.",
                working: "12\\text{ meters}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "The inequality means $-2.5 < x < 1$; any value strictly between works.",
                working: "x = 0\\text{ or }x = -1\\text{ or }x = 0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Give two valid values.",
                working: "0 \\text{ and } -1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-2 < -1 < -\\frac{1}{2} < 0.75 < \\frac{5}{4}$ (b) $-\\frac{2}{3}$ (c) $12$ meters (d) e.g., $x = 0$ and $x = -1$",
            commonErrors: [
              "In (b), thinking $-0.7$ is greater because it has more decimal places.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u5-absolute-contexts",
      title: "Absolute value in real-world problems",
      skill:
        "Apply absolute value to solve problems involving distance, error, and magnitude of change.",
      lesson: {
        sections: [
          {
            heading: "Distance and displacement",
            body: "Distance is always positive — it is the absolute value of displacement. A hiker who walks $5$ miles east then $3$ miles west has a displacement of $+2$ miles but a total distance of $8$ miles. Absolute value helps distinguish magnitude from direction.",
          },
          {
            heading: "Error and tolerance",
            body: "Measurement error is the absolute value of the difference between measured and actual values. If a scale reads $2.3$ kg when the actual mass is $2.0$ kg, the error is $|2.3 - 2.0| = 0.3$ kg. Tolerance is the maximum acceptable error — values within the tolerance range are acceptable.",
          },
          {
            heading: "Comparing changes",
            body: "When comparing two changes, use absolute value to compare magnitudes regardless of direction. A stock that drops $\\$5$ and another that rises $\\$3$ have changes of $-5$ and $+3$; the first has a larger magnitude ($|-5| = 5 > |3| = 3$).",
          },
        ],
        keyFormulas: [
          {
            name: "Distance",
            statement: "$d = |\\text{final} - \\text{initial}|$",
          },
          {
            name: "Error",
            statement: "$e = |\\text{measured} - \\text{actual}|$",
          },
          {
            name: "Magnitude comparison",
            statement: "Compare $|a|$ and $|b|$ to compare sizes",
          },
        ],
        workedExample: {
          problem:
            "A thermometer reads $-4^\\circ$C at 6 a.m. and $9^\\circ$C at noon. What is the absolute value of the temperature change?",
          solution:
            "Change = $9 - (-4) = 13^\\circ$C; absolute value = $|13| = 13^\\circ$C.",
        },
      },
      questions: [
        {
          id: "m7-u5-absolute-contexts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hiker walks $4$ miles east, then $7$ miles west. What is the total distance walked?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$ miles" },
              { id: "b", text: "$11$ miles" },
              { id: "c", text: "$-3$ miles" },
              { id: "d", text: "$28$ miles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distance vs displacement",
                statement:
                  "Distance is total movement regardless of direction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Total distance = $4 + 7 = 11$ miles (directions don't matter for distance).",
                working: "4 + 7 = 11",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $11$ miles",
            commonErrors: [
              "Computing displacement $4 - 7 = -3$ instead of distance.",
            ],
          },
        },
        {
          id: "m7-u5-absolute-contexts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scale reads $12.5$ kg when the actual mass is $12.0$ kg. What is the absolute error in the measurement?",
          response: {
            type: "numeric",
            parts: [{ label: "Absolute error (kg)", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Absolute error",
                statement: "$e = |\\text{measured} - \\text{actual}|$",
              },
            ],
            steps: [
              {
                reasoning: "Compute the difference: $12.5 - 12.0 = 0.5$.",
                working: "12.5 - 12.0 = 0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Take the absolute value.",
                working: "|0.5| = 0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.5$ kg",
            commonErrors: ["Reporting $-0.5$ if the order is reversed."],
          },
        },
        {
          id: "m7-u5-absolute-contexts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two stocks change price: Stock A changes by $-\\$8$ and Stock B changes by $+\\$5$. Which stock has the larger absolute change, and by how much?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference in absolute change ($)", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Magnitude comparison",
                statement: "Compare absolute values to compare sizes.",
              },
            ],
            steps: [
              {
                reasoning: "Compute absolute values: $|-8| = 8$ and $|5| = 5$.",
                working: "8 \\text{ and } 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compare: $8 > 5$, so Stock A has the larger change.",
                working: "8 - 5 = 3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the difference.",
                working: "3\\text{ dollars}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stock A, by $\\$3$",
            commonErrors: [
              "Comparing $-8$ and $5$ directly without absolute values.",
            ],
          },
        },
        {
          id: "m7-u5-absolute-contexts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A delivery truck drives $12$ miles north, then $9$ miles south, then $4$ miles north. What is the total distance driven?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A thermometer reads $-7^\\circ$C at 6 a.m. and $3^\\circ$C at noon. What is the absolute value of the temperature change?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A manufacturing process produces parts with a target length of $25.0$ cm. A part measures $24.6$ cm. What is the absolute error?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Two elevators start on different floors. Elevator A is at floor $-3$ and Elevator B is at floor $7$. How many floors apart are they?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total distance (miles)", answer: 25 },
              { label: "(b) Absolute change ($^\\circ$C)", answer: 10 },
              { label: "(c) Absolute error (cm)", answer: 0.4 },
              { label: "(d) Floors apart", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Distance",
                statement: "Total distance ignores direction.",
              },
              {
                kind: "formula",
                name: "Absolute error",
                statement: "$e = |\\text{measured} - \\text{actual}|$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Total distance = $12 + 9 + 4$ regardless of direction.",
                working: "12 + 9 + 4 = 25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the result.",
                working: "25\\text{ miles}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Change = $3 - (-7) = 10$; absolute value is $10$.",
                working: "|3 - (-7)| = 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "10^\\circ\\text{C}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Error = $|24.6 - 25.0| = |-0.4|$.",
                working: "|24.6 - 25.0| = 0.4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the result.",
                working: "0.4\\text{ cm}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Distance = $|{-3} - 7| = |-10| = 10$ floors.",
                working: "|-3 - 7| = 10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the result.",
                working: "10\\text{ floors}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $25$ miles (b) $10^\\circ\\text{C}$ (c) $0.4$ cm (d) $10$ floors",
          },
        },
      ],
    },
  ],
};
