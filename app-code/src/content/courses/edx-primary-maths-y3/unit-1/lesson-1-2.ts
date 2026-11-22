import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "edpm3-u1-lesson-1-2",
  code: "1-2",
  title: "Addition to 1000",
  goal: "I CAN add three-digit numbers using partitioning and mental strategies.",
  standards: ["Year 3 Addition and subtraction"],
  vocabulary: [
    { term: "Add", definition: "Combine amounts to find a total." },
    {
      term: "Partition",
      definition: "Split numbers into hundreds, tens and ones to add.",
    },
    {
      term: "Compensation",
      definition:
        "Adjust a number to make addition easier, e.g. add 9 as +10 −1.",
    },
    {
      term: "Near 100",
      definition:
        "Numbers close to 100 that can use the next hundred as a step.",
    },
    { term: "Total", definition: "The whole amount after adding." },
  ],
  concepts: [
    {
      id: "edpm3-u1-addition",
      title: "Adding three-digit numbers",
      skill:
        "Add numbers to 1000 using partitioning into hundreds, tens and ones.",
      lesson: {
        sections: [
          {
            heading: "Partition method",
            body: "Split both numbers into hundreds, tens and ones. Add hundreds to hundreds, tens to tens, ones to ones, then combine. 356 + 243 = (300 + 200) + (50 + 40) + (6 + 3) = 500 + 90 + 9 = 599.",
          },
          {
            heading: "Compensation method",
            body: "Adjust numbers to make addition easier. For 398 + 45: 398 is nearly 400, so 400 + 45 = 445, then subtract the 2 you added: 445 − 2 = 443. Or add 45 as 40 + 5: 398 + 40 = 438, 438 + 5 = 443.",
          },
          {
            heading: "Adding near 1000",
            body: "For totals near 1000, use 1000 as a stepping stone: 956 + 78 = 956 + 44 = 1000, then 1000 + 34 = 1034. Or partition: 900 + 70 = 970, 56 + 8 = 64, 970 + 64 = 1034. Both methods check each other.",
          },
        ],
        keyFormulas: [
          { name: "Partition add", statement: "(H+H) + (T+T) + (O+O)" },
          {
            name: "Compensation",
            statement: "Round to easy number, adjust the difference",
          },
        ],
        workedExample: {
          problem: "Work out 467 + 285.",
          solution:
            "467 = 400 + 60 + 7; 285 = 200 + 80 + 5. Hundreds: 600. Tens: 140. Ones: 12. Total: 600 + 140 + 12 = 752.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-add-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 234 + 145.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "279" },
              { id: "b", text: "389" },
              { id: "c", text: "399" },
              { id: "d", text: "379" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition add",
                statement: "200+100=300, 30+40=70, 4+5=9 → 379.",
              },
            ],
            steps: [{ reasoning: "234 + 145 = 379.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 379",
            commonErrors: ["Adding digits column by column without carrying."],
          },
        },
        {
          id: "edpm3-u1-add-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 356 + 278.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 634, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Partition add",
                statement: "300+200=500, 50+70=120, 6+8=14 → 634.",
              },
            ],
            steps: [
              {
                reasoning: "Hundreds: 300 + 200 = 500.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tens: 50 + 70 = 120; ones: 6 + 8 = 14.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "500 + 120 + 14 = 634.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "634",
            commonErrors: ["Writing 544 — forgetting to carry the extra ten."],
          },
        },
        {
          id: "edpm3-u1-add-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 495 + 307 using compensation.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 802, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Compensation",
                statement: "495 + 5 = 500, 500 + 307 = 807, minus 5 = 802.",
              },
            ],
            steps: [
              {
                reasoning: "Add 5 to 495 to make 500.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "500 + 307 = 807.", marks: 1, markCode: "M" },
              {
                reasoning: "Subtract the 5: 807 − 5 = 802.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Answer: 802.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "802",
            commonErrors: [
              "Answering 812 — forgetting to subtract the compensation.",
            ],
          },
        },
        {
          id: "edpm3-u1-add-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A charity raised £456 on Saturday and £389 on Sunday.",
          parts: [
            { label: "a", prompt: "How much was raised altogether?", marks: 4 },
            {
              label: "b",
              prompt: "If they need £900, how much more do they need?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Estimate the total by rounding to the nearest hundred first.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Addition problems",
                statement:
                  "Add totals; subtract for 'how much more'; estimate by rounding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "456 + 389: 400 + 300 = 700, 56 + 89 = 145.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "700 + 145 = 845.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: £845.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "900 − 845 = 55.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "845 + 55 = 900. Check passes.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: £55 more.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "456 ≈ 500, 389 ≈ 400.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Estimate: 500 + 400 = 900.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Exact £845 is close to £900 estimate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "£845; £55 more; estimate £900 (actual £845)",
            commonErrors: ["Estimating far off — rounding incorrectly."],
          },
        },
      ],
    },
    {
      id: "edpm3-u1-add-more",
      title: "Adding across 1000",
      skill: "Add numbers where the total exceeds 1000.",
      lesson: {
        sections: [
          {
            heading: "Totals over 1000",
            body: "When hundreds add past 900, you cross into four digits. 650 + 400 = 1050. 780 + 350 = 1130. The thousands digit appears — 1050 is one thousand, fifty.",
          },
          {
            heading: "Adding three numbers",
            body: "Add three numbers by adding two first, then the third. Look for pairs that make 100 or 1000: 250 + 750 = 1000, then 1000 + 180 = 1180. Grouping easy pairs first makes mental maths quicker.",
          },
          {
            heading: "Checking with subtraction",
            body: "Check additions by subtracting: if 467 + 285 = 752, then 752 − 285 should = 467. Or estimate first: 467 ≈ 500, 285 ≈ 300, total ≈ 800. Your exact answer should be a bit less than 800.",
          },
        ],
        keyFormulas: [
          { name: "Over 1000", statement: "900 + 200 = 1100 (four digits)" },
          {
            name: "Grouping",
            statement: "Add pairs that make 100 or 1000 first",
          },
        ],
        workedExample: {
          problem: "Work out 640 + 380.",
          solution: "640 + 360 = 1000, then 1000 + 20 = 1020.",
        },
      },
      questions: [
        {
          id: "edpm3-u1-am-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out 550 + 450.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1100" },
              { id: "b", text: "1010" },
              { id: "c", text: "1000" },
              { id: "d", text: "900" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bonds to 1000",
                statement: "550 + 450 = 1000.",
              },
            ],
            steps: [
              {
                reasoning: "550 + 450 makes exactly 1000.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** 1000",
            commonErrors: ["Answering 100 — dropping a zero."],
          },
        },
        {
          id: "edpm3-u1-am-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Work out 725 + 389.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 1114, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Over 1000",
                statement: "700+300=1000, 25+89=114 → 1114.",
              },
            ],
            steps: [
              {
                reasoning: "Hundreds: 700 + 300 = 1000.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tens+ones: 25 + 89 = 114.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "1000 + 114 = 1114.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1114",
            commonErrors: ["Answering 1014 — forgetting the extra hundred."],
          },
        },
        {
          id: "edpm3-u1-am-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Work out 340 + 280 + 160 by grouping friendly numbers first.",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 780, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Grouping",
                statement: "340 + 160 = 500, 500 + 280 = 780.",
              },
            ],
            steps: [
              {
                reasoning: "Group 340 + 160 = 500 (makes 500).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "500 + 280 = 780.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 780.", marks: 1, markCode: "A" },
              { reasoning: "Grouping shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "780",
            commonErrors: [
              "Adding in order without grouping — still correct but slower.",
            ],
          },
        },
        {
          id: "edpm3-u1-am-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A school orders 450 exercise books, 320 pencils and 180 rulers.",
          parts: [
            {
              label: "a",
              prompt: "How many items are ordered altogether?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "If 500 items are delivered on Monday, how many remain?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Estimate the total by rounding each number to the nearest 100.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Multi-step addition",
                statement:
                  "Add all items; subtract delivered; estimate by rounding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "450 + 320 = 770; 770 + 180 = 950.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Or 450 + 180 = 630, 630 + 320 = 950.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Answer: 950 items.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Method clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "950 − 500 = 450 remain.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 450 items.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Round: 450 → 500 (or 400), 320 → 300, 180 → 200.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Estimate: 500 + 300 + 200 = 1000 (or 900).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Exact 950 is close to the estimate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "950; 450; estimate 900-1000 (actual 950)",
            commonErrors: ["Rounding 450 inconsistently."],
          },
        },
      ],
    },
  ],
};
