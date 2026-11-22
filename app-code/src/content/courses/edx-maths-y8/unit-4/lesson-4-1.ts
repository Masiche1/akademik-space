import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edm8-u4-lesson-4-1",
  code: "4-1",
  title: "Averages and Charts",
  goal: "I CAN work out the mean, median, mode and range, and draw and interpret bar charts, pie charts and stem-and-leaf diagrams.",
  standards: ["Y8 Statistics and Probability"],
  vocabulary: [
    { term: "Mean", definition: "The total of all the values divided by the number of values." },
    { term: "Median", definition: "The middle value when the data is written in order of size (the mean of the two middle values if there is an even number of values)." },
    { term: "Mode", definition: "The most common value, or the value with the highest frequency." },
    { term: "Range", definition: "The largest value minus the smallest value; a measure of spread." },
    { term: "Frequency", definition: "The number of times a particular value occurs." },
    { term: "Pie chart", definition: "A circular chart where each sector angle is proportional to the frequency of a category." },
    { term: "Stem-and-leaf diagram", definition: "A diagram that shows ordered data using the leading digits as stems and the final digits as leaves, with a key." },
  ],
  concepts: [
    {
      id: "edm8-u4-averages",
      title: "Mean, median, mode and range",
      skill: "Calculate averages and the range from lists of data and from frequency tables.",
      lesson: {
        sections: [
          {
            heading: "The three averages",
            body: "The **mean** is the total divided by the number of values. The **median** is the middle value once the data is in order; with an even number of values, find the mean of the two middle values. The **mode** is the most common value. The **range** $=$ largest $-$ smallest and measures how spread out the data is.",
          },
          {
            heading: "Frequency tables",
            body: "In a frequency table, the total number of values is the sum of the frequencies $f$. To find the mean, add a column for $f\\times x$, then divide the total of $f\\times x$ by the total frequency. The mode is the value with the highest frequency, not the highest frequency itself.",
          },
          {
            heading: "Working backwards",
            body: "If you know the mean, you know the total: total $=$ mean $\\times$ number of values. This lets you find a missing value. For example, if five numbers have mean $8$, their total is $40$.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\text{mean}=\\dfrac{\\text{total of values}}{\\text{number of values}}$" },
          { name: "Mean from a table", statement: "$\\text{mean}=\\dfrac{\\sum fx}{\\sum f}$" },
        ],
        workedExample: {
          problem: "Find the median of $4, 9, 2, 7, 8, 5$.",
          solution: "In order: $2, 4, 5, 7, 8, 9$. There are $6$ values, so the median is the mean of the 3rd and 4th: $(5+7)\\div2=6$.",
        },
      },
      questions: [
        {
          id: "edm8-u4-averages-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Here are five numbers: $3, 7, 2, 9, 5$. Work out the median.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$5.2$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Median", statement: "The middle value when the data is in order." }],
            steps: [{ reasoning: "Write in order: $2, 3, 5, 7, 9$. The middle value is the 3rd.", working: "2,\\,3,\\,\\mathbf{5},\\,7,\\,9", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Choosing the middle of the unordered list ($2$).", "Giving the mean $5.2$.", "Giving the range $7$."],
          },
        },
        {
          id: "edm8-u4-averages-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A teacher recorded the number of books $20$ pupils read in a month.\n\n- $1$ book: frequency $3$\n- $2$ books: frequency $5$\n- $3$ books: frequency $8$\n- $4$ books: frequency $4$\n\nWork out the mean number of books.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 2.65, tolerance: 0.01 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Mean from a frequency table", statement: "$\\text{mean}=\\sum fx\\div\\sum f$" }],
            steps: [
              { reasoning: "Multiply each value by its frequency.", working: "3\\times1=3,\\; 5\\times2=10,\\; 8\\times3=24,\\; 4\\times4=16", marks: 1, markCode: "M" },
              { reasoning: "Total these and divide by the total frequency of $20$.", working: "(3+10+24+16)\\div20=53\\div20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.65$ books",
            commonErrors: ["Dividing $53$ by $4$ (the number of rows).", "Adding the values $1+2+3+4$ and dividing by $4$."],
          },
        },
        {
          id: "edm8-u4-averages-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The mean of five numbers is $8$. A sixth number is added and the mean of the six numbers is $9$. Work out the sixth number.",
          response: { type: "numeric", parts: [{ label: "Sixth number", answer: 14 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Total from the mean", statement: "Total $=$ mean $\\times$ number of values." }],
            steps: [
              { reasoning: "Total of the first five numbers.", working: "5\\times8=40", marks: 1, markCode: "M" },
              { reasoning: "Total of all six numbers.", working: "6\\times9=54", marks: 1, markCode: "M" },
              { reasoning: "The sixth number is the difference.", working: "54-40", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Adding the means: $8+9=17$.", "Using $9-8=1$."],
          },
        },
        {
          id: "edm8-u4-averages-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ten students took a spelling test. Their scores were:\n\n$$12,\\; 7,\\; 15,\\; 9,\\; 12,\\; 4,\\; 8,\\; 12,\\; 10,\\; 7$$",
          parts: [
            { label: "a", prompt: "Write down the mode and work out the range.", marks: 2 },
            { label: "b", prompt: "Work out the median.", marks: 2 },
            { label: "c", prompt: "Work out the mean.", marks: 2 },
            { label: "d", prompt: "An eleventh student takes the test. The mean score of all eleven students is $10$. Work out the eleventh student's score.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Averages", statement: "Mode is the most common value; median is the middle value in order; mean is the total divided by the number of values." },
              { kind: "principle", name: "Total from the mean", statement: "Total $=$ mean $\\times$ number of values." },
            ],
            steps: [
              { part: "a", reasoning: "$12$ appears three times, more than any other value.", working: "\\text{mode}=12", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Largest minus smallest.", working: "15-4=11", marks: 1, markCode: "B" },
              { part: "b", reasoning: "In order: $4, 7, 7, 8, 9, 10, 12, 12, 12, 15$. With $10$ values the median is the mean of the 5th and 6th.", working: "(9+10)\\div2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "9.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total of the scores is $96$; divide by $10$.", working: "96\\div10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "9.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Total score for eleven students.", working: "11\\times10=110", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract the total of the first ten.", working: "110-96", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mode $12$, range $11$ (b) $9.5$ (c) $9.6$ (d) $14$",
            commonErrors: ["Not ordering the data before finding the median.", "Giving the median as the 5th value, $9$."],
          },
        },
      ],
    },
    {
      id: "edm8-u4-charts",
      title: "Bar charts, pie charts and stem-and-leaf diagrams",
      skill: "Draw and interpret bar charts, pie charts and stem-and-leaf diagrams.",
      lesson: {
        sections: [
          {
            heading: "Bar charts",
            body: "In a bar chart the height of each bar shows the frequency. Bars have equal widths and gaps between them for categories. Always give the chart a title, label both axes and use an even scale.",
          },
          {
            heading: "Pie charts",
            body: "A pie chart shows proportions of a whole. The angle for a category is $\\dfrac{\\text{frequency}}{\\text{total}}\\times360^\\circ$. To find a frequency from an angle, use $\\dfrac{\\text{angle}}{360}\\times\\text{total}$. The angles always add up to $360^\\circ$. A pie chart shows proportions, not the actual numbers, unless the total is given.",
          },
          {
            heading: "Stem-and-leaf diagrams",
            body: "A stem-and-leaf diagram keeps all the original data. Put the leaves in order, smallest first, and include a key such as $2\\mid3$ means $23$. The median is the middle leaf and the range is the largest value minus the smallest.",
          },
        ],
        keyFormulas: [
          { name: "Pie chart angle", statement: "$\\text{angle}=\\dfrac{\\text{frequency}}{\\text{total}}\\times360^\\circ$" },
        ],
        workedExample: {
          problem: "In a survey of $30$ people, $8$ chose tea. Work out the pie chart angle for tea.",
          solution: "$\\dfrac{8}{30}\\times360=96^\\circ$.",
        },
      },
      questions: [
        {
          id: "edm8-u4-charts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a survey of $72$ pupils, $18$ chose football as their favourite sport. Work out the angle of the football sector on a pie chart.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$18^\\circ$" },
              { id: "b", text: "$180^\\circ$" },
              { id: "c", text: "$72^\\circ$" },
              { id: "d", text: "$90^\\circ$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Pie chart angle", statement: "angle $=\\frac{f}{\\text{total}}\\times360^\\circ$" }],
            steps: [{ reasoning: "Divide $18$ by $72$ and multiply by $360$.", working: "\\tfrac{18}{72}\\times360=90", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $90^\\circ$",
            commonErrors: ["Using the frequency as the angle.", "Using $360\\div18$."],
          },
        },
        {
          id: "edm8-u4-charts-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pie chart shows the favourite drinks of some people. The sector for tea has angle $135^\\circ$ and represents $15$ people. Work out the total number of people in the survey.",
          response: { type: "numeric", parts: [{ label: "Total people", answer: 40 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Pie chart proportion", statement: "The angles of all the sectors add up to $360^\\circ$, so each person has the same angle." }],
            steps: [
              { reasoning: "Find the angle for one person.", working: "135\\div15=9^\\circ", marks: 1, markCode: "M" },
              { reasoning: "Divide the full circle by this angle.", working: "360\\div9", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ people",
            commonErrors: ["Calculating $135\\div15$ and stopping at $9$.", "Dividing $360$ by $15$."],
          },
        },
        {
          id: "edm8-u4-charts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The stem-and-leaf diagram shows the ages of $12$ people at a club.\n\n- $1\\mid 2\\; 5\\; 8$\n- $2\\mid 0\\; 3\\; 3\\; 7\\; 9$\n- $3\\mid 1\\; 4\\; 6$\n- $4\\mid 2$\n\nKey: $2\\mid3$ means $23$ years.\n\nWork out (i) the median age and (ii) the range of the ages.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) Median", answer: 25, unit: "years" },
              { label: "(ii) Range", answer: 30, unit: "years" },
            ],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Median and range", statement: "Median is the middle value; range is the largest minus the smallest." }],
            steps: [
              { reasoning: "With $12$ values the median is the mean of the 6th and 7th values: $23$ and $27$.", working: "(23+27)\\div2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25", marks: 1, markCode: "A" },
              { reasoning: "Largest minus smallest: $42-12$.", working: "42-12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) $25$ years (ii) $30$ years",
            commonErrors: ["Ignoring the key and reading $2\\mid3$ as $2.3$.", "Taking the median as the middle row."],
          },
        },
        {
          id: "edm8-u4-charts-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Class 8A has $60$ students. They chose their favourite sport: football $24$, netball $15$, swimming $12$, tennis $9$. Their results are to be shown on a pie chart.",
          parts: [
            { label: "a", prompt: "Work out the angle for football.", marks: 2 },
            { label: "b", prompt: "Work out the angle for tennis.", marks: 2 },
            { label: "c", prompt: "Class 8B has $45$ students. In a pie chart for 8B, the netball sector has angle $120^\\circ$. Work out the number of students in 8B who chose netball.", marks: 2 },
            { label: "d", prompt: "Sam says 'The netball sector is bigger in 8B, so more students chose netball in 8B.' Is Sam correct? Give a reason for your answer.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Pie chart angle", statement: "angle $=\\frac{f}{\\text{total}}\\times360^\\circ$" },
              { kind: "principle", name: "Comparing pie charts", statement: "A pie chart shows proportion; compare actual numbers using each total." },
            ],
            steps: [
              { part: "a", reasoning: "Fraction of $360^\\circ$.", working: "\\tfrac{24}{60}\\times360", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "144^\\circ", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Fraction of $360^\\circ$.", working: "\\tfrac{9}{60}\\times360", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "54^\\circ", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the angle as a fraction of the total.", working: "\\tfrac{120}{360}\\times45", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In 8A netball has $15$ students and in 8B it also has $15$ students.", working: "15=15", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The class sizes are different ($60$ and $45$), so the same number is a bigger proportion of the smaller class.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: Sam is not correct; the numbers are equal.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $144^\\circ$ (b) $54^\\circ$ (c) $15$ students (d) Sam is wrong: both classes have $15$ netball students; the sector is bigger because 8B is a smaller class",
            commonErrors: ["Comparing angles without considering the totals.", "Dividing $360$ by $60$ and forgetting to multiply by the frequency."],
          },
        },
      ],
    },
  ],
};
