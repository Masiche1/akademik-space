import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypms5-u1-lesson-1-2",
  code: "1-2",
  title: "Inequalities and Absolute Value",
  goal: "I CAN solve compound and absolute value inequalities, represent solutions on number lines, and apply inequalities to real problems.",
  standards: [
    "MYP Maths: Number",
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Compound inequality", definition: "Two inequalities joined by 'and' or 'or', e.g. $2<x\\le7$ or $x<1$ or $x>5$." },
    { term: "Absolute value inequality", definition: "An inequality containing $|x|$, solved by considering the definition of modulus." },
    { term: "Solution set", definition: "All values satisfying an inequality; represented on a number line." },
    { term: "Critical values", definition: "The boundary values where the inequality changes from true to false." },
  ],
  concepts: [
    {
      id: "mypms5-u1-ineq",
      title: "Compound and absolute value inequalities",
      skill: "Solve compound and absolute value inequalities and find integer solutions.",
      lesson: {
        sections: [
          {
            heading: "Compound inequalities",
            body: "A compound inequality like $-3\\le2x-1<7$ means $x$ satisfies **both** parts. Solve each part separately, then combine. For 'or' inequalities like $x<-2$ or $x>4$, the solution is the union of both ranges.",
          },
          {
            heading: "Absolute value inequalities",
            body: "$|x-a|<b$ means $a-b<x<a+b$ (inside the bounds). $|x-a|>b$ means $x<a-b$ or $x>a+b$ (outside). For $|2x-3|\\le5$: $-5\\le2x-3\\le5$, so $-2\\le2x\\le8$, giving $-1\\le x\\le4$.",
          },
          {
            heading: "Integer solutions",
            body: "After solving, list all integer values in the range. For $-1\\le x\\le4$: $x\\in\\{-1,0,1,2,3,4\\}$ — 6 integers. Check boundary inclusion carefully.",
          },
        ],
        keyFormulas: [
          { name: "Absolute <", statement: "$|x-a|<b \\Rightarrow a-b<x<a+b$" },
          { name: "Absolute >", statement: "$|x-a|>b \\Rightarrow x<a-b$ or $x>a+b$" },
          { name: "Integer solutions", statement: "List all whole numbers in the range" },
        ],
        workedExample: {
          problem: "Solve $|x+3|>4$ and list integer solutions.",
          solution: "$x+3<-4$ or $x+3>4$ → $x<-7$ or $x>1$. Integers: $x\\le-8$ or $x\\ge2$.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-ineq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x-2\\ge7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ge5$" },
              { id: "b", text: "$x\\le-3$" },
              { id: "c", text: "$x\\le3$" },
              { id: "d", text: "$x\\ge3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Isolate variable; no sign reversal for positive division." },
            ],
            steps: [
              { reasoning: "$3x\\ge9$, so $x\\ge3$.", working: "x\\ge3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $x\\ge3$",
            commonErrors: ["Reversing the sign unnecessarily."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u1-ineq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-4<2x+1\\le9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-1.5<x\\le4$" },
              { id: "b", text: "$-2.5<x<4$" },
              { id: "c", text: "$-5<x\\le8$" },
              { id: "d", text: "$-2.5<x\\le4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Compound", statement: "Subtract 1, divide by 2; keep inequality directions." },
            ],
            steps: [
              { reasoning: "$-5<2x\\le8 \\Rightarrow -2.5<x\\le4$.", working: "-2.5<x\\le4", marks: 1, markCode: "M" },
              { reasoning: "Left strict, right inclusive — preserved from original.", working: "-2.5<x\\le4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-2.5<x\\le4$",
            commonErrors: ["Reversing signs or changing strictness."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-ineq-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|2x-5|<3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1<x<4$" },
              { id: "b", text: "$-1<x<4$" },
              { id: "c", text: "$1\\le x\\le4$" },
              { id: "d", text: "$x<-1$ or $x>4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value", statement: "$|2x-5|<3 \\Rightarrow -3<2x-5<3 \\Rightarrow 2<2x<8 \\Rightarrow 1<x<4$." },
            ],
            steps: [
              { reasoning: "$-3<2x-5<3$.", working: "-3<2x-5<3", marks: 1, markCode: "M" },
              { reasoning: "Add 5: $2<2x<8$; divide by 2: $1<x<4$.", working: "1<x<4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "1<x<4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1<x<4$",
            commonErrors: ["Reversing to the $>$ case."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-ineq-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A school trip costs 45 per student plus 300 for the coach. The budget is 900.",
          parts: [
            { label: "a", prompt: "Write an inequality for the number of students $n$ that can go.", marks: 2 },
            { label: "b", prompt: "Solve the inequality to find the maximum number of students.", marks: 2 },
            { label: "c", prompt: "If each student pays 60, write an inequality for the minimum payment per student to break even.", marks: 2 },
            { label: "d", prompt: "Find the minimum number of students needed to break even at 60 each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Translate constraints into inequalities." },
            ],
            steps: [
              { part: "a", reasoning: "Cost $=45n+300\\le900$.", working: "45n+300\\le900", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inequality.", working: "45n+300\\le900", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$45n\\le600 \\Rightarrow n\\le13.33$; max 13 students.", working: "n\\le13", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round down to whole students.", working: "13", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Revenue $=60n\\ge45n+300$ → $15n\\ge300$ → $n\\ge20$ for break-even at this payment.", working: "60n\\ge45n+300", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify: $15n\\ge300$.", working: "15n\\ge300", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$n\\ge20$; check: $60(20)=1200\\ge45(20)+300=1200$. ✓", working: "n=20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the minimum.", working: "20\\text{ students}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $45n+300\\le900$ (b) 13 students (c) $15n\\ge300$ (d) 20 students",
            commonErrors: ["Rounding 13.33 up to 14 instead of down."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u1-ineq-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $5x+2>17$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>19$" },
              { id: "b", text: "$x<3$" },
              { id: "c", text: "$x>3$" },
              { id: "d", text: "$x>\\frac{15}{5}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Solving inequalities", statement: "Subtract 2 and divide by 5; direction is unchanged." }],
            steps: [{ reasoning: "$5x>15 \\Rightarrow x>3$.", working: "x>3", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** $x>3$",
          },
        },
        {
          id: "mypms5-u1-ineq-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the greatest integer $x$ satisfying $3x-4\\le11$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Integer solution", statement: "Solve then take the largest whole number in range." }],
            steps: [{ reasoning: "$3x\\le15 \\Rightarrow x\\le5$; greatest integer is 5.", working: "5", marks: 1, markCode: "B" }],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u1-ineq-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $-2\\le3x+1<7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-1\\le x<2$" },
              { id: "b", text: "$-3\\le x<6$" },
              { id: "c", text: "$-1\\le x\\le2$" },
              { id: "d", text: "$-1<x\\le2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Compound inequality", statement: "Subtract 1 then divide by 3, preserving strictness." }],
            steps: [
              { reasoning: "$-3\\le3x<6 \\Rightarrow -1\\le x<2$.", working: "-1\\le x<2", marks: 1, markCode: "M" },
              { reasoning: "Check boundary inclusion from the original inequality.", working: "-1\\le x<2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-1\\le x<2$",
          },
        },
        {
          id: "mypms5-u1-ineq-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the largest integer $x$ for which $|x-4|<3$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Absolute value", statement: "$|x-4|<3 \\Rightarrow -3<x-4<3 \\Rightarrow 1<x<7$." }],
            steps: [
              { reasoning: "Solve the compound inequality: $1<x<7$.", working: "1<x<7", marks: 1, markCode: "M" },
              { reasoning: "Largest integer below 7 is 6.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "mypms5-u1-ineq-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many integers satisfy $-2<x\\le4$?",
          response: { type: "numeric", parts: [{ label: "count", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Integer solutions", statement: "Include the right endpoint but not the left." }],
            steps: [
              { reasoning: "Integers are $-1,0,1,2,3,4$.", working: "-1,0,1,2,3,4", marks: 1, markCode: "M" },
              { reasoning: "Count them: 6.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "mypms5-u1-ineq-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|2x+1|\\ge5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-3$ or $x>2$" },
              { id: "b", text: "$x\\le-3$ or $x\\ge2$" },
              { id: "c", text: "$-3\\le x\\le2$" },
              { id: "d", text: "$x\\le-2$ or $x\\ge3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Absolute value", statement: "$|2x+1|\\ge5$ gives $2x+1\\le-5$ or $2x+1\\ge5$." }],
            steps: [
              { reasoning: "Split into $2x+1\\le-5$ and $2x+1\\ge5$.", working: "2x+1\\le-5\\text{ or }2x+1\\ge5", marks: 1, markCode: "M" },
              { reasoning: "Solve: $x\\le-3$ or $x\\ge2$.", working: "x\\le-3\\text{ or }x\\ge2", marks: 1, markCode: "M" },
              { reasoning: "State the solution set.", working: "x\\le-3\\text{ or }x\\ge2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le-3$ or $x\\ge2$",
          },
        },
        {
          id: "mypms5-u1-ineq-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the largest integer $x$ satisfying $|3x-6|\\le9$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 5 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Absolute value", statement: "$|3x-6|\\le9 \\Rightarrow -9\\le3x-6\\le9$." }],
            steps: [
              { reasoning: "Add 6: $-3\\le3x\\le15$.", working: "-3\\le3x\\le15", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3: $-1\\le x\\le5$.", working: "-1\\le x\\le5", marks: 1, markCode: "M" },
              { reasoning: "Largest integer is 5.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
          },
        },
        {
          id: "mypms5-u1-ineq-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Use inequalities in context.",
          parts: [
            { label: "a", prompt: "Solve $7-2x>1$ and write the solution.", marks: 2 },
            { label: "b", prompt: "Solve $|x+2|<5$ and list all integer solutions.", marks: 2 },
            { label: "c", prompt: "State how many integers satisfy $-3<x<3$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Inequalities", statement: "Reverse the inequality when multiplying or dividing by a negative." }],
            steps: [
              { part: "a", reasoning: "$-2x>-6 \\Rightarrow x<3$.", working: "x<3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the solution.", working: "x<3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$-5<x+2<5 \\Rightarrow -7<x<3$; integers $-6,-5,-4,-3,-2,-1,0,1,2$.", working: "-7<x<3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "List the integer solutions.", working: "-6,-5,-4,-3,-2,-1,0,1,2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integers are $-2,-1,0,1,2$: five integers.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x<3$ (b) $-7<x<3$, integers $-6$ to $2$ (c) 5",
          },
        },
        {
          id: "mypms5-u1-ineq-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the greatest integer $x$ for which $4-2x>10$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: -4 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Reverse inequality", statement: "Dividing by $-2$ reverses the sign: $x<-3$." }],
            steps: [{ reasoning: "$-2x>6 \\Rightarrow x<-3$; greatest integer is $-4$.", working: "-4", marks: 1, markCode: "B" }],
            finalAnswer: "$-4$",
          },
        },
        {
          id: "mypms5-u1-ineq-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|x+2|>6$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-8$ or $x>4$" },
              { id: "b", text: "$x<-4$ or $x>8$" },
              { id: "c", text: "$x\\le-8$ or $x\\ge4$" },
              { id: "d", text: "$-8<x<4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Absolute value", statement: "$|x+2|>6$ gives $x+2<-6$ or $x+2>6$." }],
            steps: [
              { reasoning: "Solve the two branches: $x<-8$ or $x>4$.", working: "x<-8\\text{ or }x>4", marks: 1, markCode: "M" },
              { reasoning: "State the solution set.", working: "x<-8\\text{ or }x>4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<-8$ or $x>4$",
          },
        },
        {
          id: "mypms5-u1-ineq-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the largest integer $x$ satisfying $2(3x-1)\\le5x+4$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Linear inequality", statement: "Expand, collect terms, then solve." }],
            steps: [
              { reasoning: "$6x-2\\le5x+4 \\Rightarrow x\\le6$.", working: "x\\le6", marks: 1, markCode: "M" },
              { reasoning: "Largest integer is 6.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "mypms5-u1-ineq-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Model constraints with inequalities.",
          parts: [
            { label: "a", prompt: "A rectangle has length $x+3$ and width $x$; its perimeter is at most 30. Write an inequality for $x$.", marks: 2 },
            { label: "b", prompt: "Solve the inequality.", marks: 2 },
            { label: "c", prompt: "State the greatest integer value of $x$ and check it satisfies the perimeter condition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Modelling", statement: "Translate a real constraint into an inequality." }],
            steps: [
              { part: "a", reasoning: "Perimeter $=2[(x+3)+x]=4x+6\\le30$.", working: "4x+6\\le30", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the inequality.", working: "4x+6\\le30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$4x\\le24 \\Rightarrow x\\le6$.", working: "x\\le6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution.", working: "x\\le6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greatest integer $x=6$; perimeter $=4(6)+6=30$, which is allowed.", working: "x=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Confirm boundary is included.", working: "30\\le30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4x+6\\le30$ (b) $x\\le6$ (c) $x=6$",
          },
        },
      ],
    },
    {
      id: "mypms5-u1-proportion",
      title: "Proportion and Rates Extended",
      skill: "Solve complex proportion problems, work with compound measures, and apply unit conversions in real contexts.",
      lesson: {
        sections: [
          {
            heading: "Direct and inverse proportion",
            body: "Direct: $y=kx$ — both increase together. Inverse: $y=\\frac{k}{x}$ — one increases as other decreases. Combined problems may involve both: e.g. cost depends on quantity and price.",
          },
          {
            heading: "Compound measures",
            body: "Speed $=\\frac{\\text{distance}}{\\text{time}}$; density $=\\frac{\\text{mass}}{\\text{volume}}$; pressure $=\\frac{\\text{force}}{\\text{area}}$; power $=\\frac{\\text{energy}}{\\text{time}}$. Convert units carefully: km/h to m/s requires $\\times\\frac{1000}{3600}$.",
          },
          {
            heading: "Best-buy and unit rates",
            body: "Compare prices using **unit rates**: cost per kg, cost per litre, cost per item. Always convert to the same unit before comparing. Watch for multi-buy offers (e.g. '3 for 2') that change the effective unit rate.",
          },
        ],
        keyFormulas: [
          { name: "Speed conversion", statement: "km/h $\\times\\frac{1000}{3600}=$ m/s" },
          { name: "Density", statement: "$\\rho=\\frac{m}{V}$" },
          { name: "Unit rate", statement: "Total cost ÷ quantity" },
        ],
        workedExample: {
          problem: "A car travels 180 km in 2.5 hours. Find its average speed in m/s.",
          solution: "Speed = $\\frac{180}{2.5}=72$ km/h; convert: $72\\times\\frac{1000}{3600}=20$ m/s.",
        },
      },
      questions: [
        {
          id: "mypms5-u1-prop-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 90 km/h to m/s.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "32.4 m/s" },
              { id: "b", text: "324 m/s" },
              { id: "c", text: "90 m/s" },
              { id: "d", text: "25 m/s" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conversion", statement: "km/h $\\times\\frac{1000}{3600}=$ m/s; $90\\times\\frac{5}{18}=25$." },
            ],
            steps: [
              { reasoning: "$90\\times\\frac{1000}{3600}=90\\times\\frac{5}{18}=25$ m/s.", working: "25\\text{ m/s}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 25 m/s",
            commonErrors: ["Multiplying by 1000 without dividing by 3600."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u1-prop-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A block of metal has mass 540 g and volume 200 cm³. Find its density.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "74000 g/cm³" },
              { id: "b", text: "2.7 g/cm³" },
              { id: "c", text: "270 g/cm³" },
              { id: "d", text: "0.37 g/cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho=\\frac{m}{V}=\\frac{540}{200}=2.7$ g/cm³." },
            ],
            steps: [
              { reasoning: "$\\rho=\\frac{540}{200}=2.7$ g/cm³.", working: "2.7", marks: 1, markCode: "M" },
              { reasoning: "State the density.", working: "2.7\\text{ g/cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.7$ g/cm³",
            commonErrors: ["Dividing volume by mass."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u1-prop-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car uses 9 litres per 100 km. Fuel costs 1.40 per litre. Find the cost per km and the cost of a 450 km journey.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.126 per km; 56.70" },
              { id: "b", text: "0.09 per km; 40.50" },
              { id: "c", text: "0.126 per km; 5.67" },
              { id: "d", text: "1.26 per km; 567" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unit rate", statement: "Fuel per km = $\\frac{9}{100}=0.09$ litre; cost per km = $0.09\\times1.40=0.126$." },
            ],
            steps: [
              { reasoning: "Cost per km = $0.09\\times1.40=0.126$.", working: "0.126\\text{ per km}", marks: 1, markCode: "M" },
              { reasoning: "For 450 km: $0.126\\times450=56.70$.", working: "56.70", marks: 1, markCode: "M" },
              { reasoning: "State both.", working: "0.126\\text{ and }56.70", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.126$ per km; $56.70$",
            commonErrors: ["Using litres instead of cost per km."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u1-prop-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A worker's pay is proportional to hours worked at 14 per hour, plus a daily bonus of 20.",
          parts: [
            { label: "a", prompt: "Write the pay function $P(h)$.", marks: 1 },
            { label: "b", prompt: "Find the pay for 7.5 hours.", marks: 2 },
            { label: "c", prompt: "If the worker earns 160 in a day, find the hours worked.", marks: 2 },
            { label: "d", prompt: "The company introduces overtime at 1.5× rate after 8 hours. Write the new pay function for $h>8$ and find pay for 10 hours.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Modelling", statement: "Linear pay with fixed bonus; overtime changes rate." },
            ],
            steps: [
              { part: "a", reasoning: "$P(h)=14h+20$.", working: "P(h)=14h+20", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(7.5)=14(7.5)+20=105+20=125$.", working: "125", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the pay.", working: "125", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$14h+20=160 \\Rightarrow 14h=140 \\Rightarrow h=10$ hours.", working: "h=10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the hours.", working: "10\\text{ hours}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For $h>8$: pay $=14(8)+20+21(h-8)=112+20+21h-168=21h-36$.", working: "P(h)=21h-36", marks: 1, markCode: "M" },
              { part: "d", reasoning: "For 10 hours: $21(10)-36=174$.", working: "174", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the pay.", working: "174", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P(h)=14h+20$ (b) 125 (c) 10 hours (d) $P(h)=21h-36$ for $h>8$; 174",
            commonErrors: ["In (d), applying overtime rate to all hours instead of just overtime hours."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypms5-u1-prop-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Convert 54 km/h to m/s.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "19.44 m/s" },
              { id: "b", text: "54 m/s" },
              { id: "c", text: "15 m/s" },
              { id: "d", text: "19440 m/s" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed conversion", statement: "km/h $\\times\\frac{1000}{3600}=$ m/s; $54\\times\\frac5{18}=15$." }],
            steps: [{ reasoning: "$54\\times\\frac{1000}{3600}=15$ m/s.", working: "15", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 15 m/s",
          },
        },
        {
          id: "mypms5-u1-prop-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A block has mass 800 g and volume 400 cm³. Find its density in g/cm³.",
          response: { type: "numeric", parts: [{ label: "density", answer: 2, unit: "g/cm³" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "$\\rho=\\frac{m}{V}=\\frac{800}{400}=2$." }],
            steps: [{ reasoning: "Divide mass by volume.", working: "2", marks: 1, markCode: "B" }],
            finalAnswer: "$2$ g/cm³",
          },
        },
        {
          id: "mypms5-u1-prop-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "If $y$ is directly proportional to $x$ and $y=5x$, find $y$ when $x=7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "35" },
              { id: "c", text: "0.7" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Direct proportion", statement: "$y=kx$; substitute $x=7$." }],
            steps: [
              { reasoning: "$y=5\\times7=35$.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$",
          },
        },
        {
          id: "mypms5-u1-prop-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Six apples cost 4.50. Find the cost of 8 apples at the same unit rate.",
          response: { type: "numeric", parts: [{ label: "cost", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Unit rate", statement: "Cost per apple $=\\frac{4.50}{6}=0.75$." }],
            steps: [
              { reasoning: "Unit rate: $0.75$ per apple.", working: "0.75", marks: 1, markCode: "M" },
              { reasoning: "For 8 apples: $8\\times0.75=6$.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$",
          },
        },
        {
          id: "mypms5-u1-prop-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Convert 18 km/h to m/s.",
          response: { type: "numeric", parts: [{ label: "speed", answer: 5, unit: "m/s" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed conversion", statement: "$18\\times\\frac{1000}{3600}=18\\times\\frac5{18}=5$." }],
            steps: [
              { reasoning: "Use the conversion factor $\\frac5{18}$.", working: "18\\times\\frac5{18}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $5$ m/s.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s",
          },
        },
        {
          id: "mypms5-u1-prop-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Four workers complete a job in 6 days. Assuming the work rate is inversely proportional, how many days will 8 workers take?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 days" },
              { id: "b", text: "6 days" },
              { id: "c", text: "2 days" },
              { id: "d", text: "12 days" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Inverse proportion", statement: "$w\\times d$ is constant: $4\\times6=8\\times d$." }],
            steps: [
              { reasoning: "Set $4(6)=8d$.", working: "24=8d", marks: 1, markCode: "M" },
              { reasoning: "Solve: $d=3$ days.", working: "d=3", marks: 1, markCode: "M" },
              { reasoning: "State the time.", working: "3\\text{ days}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 3 days",
          },
        },
        {
          id: "mypms5-u1-prop-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A car uses 7 litres per 100 km and fuel costs 1.50 per litre. Find the fuel cost for a 300 km journey.",
          response: { type: "numeric", parts: [{ label: "cost", answer: 31.5 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Unit rate", statement: "Litres for 300 km $=7\\times3=21$; cost $=21\\times1.5$." }],
            steps: [
              { reasoning: "Fuel needed: $21$ litres.", working: "21", marks: 1, markCode: "M" },
              { reasoning: "Cost: $21\\times1.5=31.5$.", working: "31.5", marks: 1, markCode: "M" },
              { reasoning: "State the cost.", working: "31.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$31.5$",
          },
        },
        {
          id: "mypms5-u1-prop-q12",
          difficulty: "core",
          totalMarks: 5,
          stem: "Compare deals using unit rates.",
          parts: [
            { label: "a", prompt: "Deal A: 500 g for 3.20. Deal B: 750 g for 4.80. Find the cost per 100 g for each.", marks: 2 },
            { label: "b", prompt: "State which deal is better value.", marks: 1 },
            { label: "c", prompt: "Find the cost of 1.2 kg using the better deal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Unit rate", statement: "Compare cost per same mass before deciding." }],
            steps: [
              { part: "a", reasoning: "A: $\\frac{3.20}{5}=0.64$ per 100 g; B: $\\frac{4.80}{7.5}=0.64$ per 100 g.", working: "0.64\\text{ and }0.64", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both unit rates.", working: "0.64", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The unit rates are equal, so neither is better value.", working: "equal", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Using either deal: $12\\times0.64=7.68$.", working: "7.68", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the cost.", working: "7.68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) both 0.64 per 100 g (b) equal value (c) 7.68",
          },
        },
        {
          id: "mypms5-u1-prop-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A material has density 3.2 g/cm³. Find the mass of 250 cm³.",
          response: { type: "numeric", parts: [{ label: "mass", answer: 800, unit: "g" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Density", statement: "$m=\\rho V=3.2\\times250=800$." }],
            steps: [{ reasoning: "Multiply density by volume.", working: "800", marks: 1, markCode: "B" }],
            finalAnswer: "$800$ g",
          },
        },
        {
          id: "mypms5-u1-prop-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A force of 600 N acts on an area of 2 m². Find the pressure in N/m².",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "298 N/m²" },
              { id: "b", text: "1200 N/m²" },
              { id: "c", text: "300 N/m²" },
              { id: "d", text: "0.0033 N/m²" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Pressure", statement: "$P=\\frac{F}{A}=\\frac{600}{2}=300$." }],
            steps: [
              { reasoning: "Divide force by area.", working: "300", marks: 1, markCode: "M" },
              { reasoning: "State the pressure.", working: "300\\text{ N/m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$300$ N/m²",
          },
        },
        {
          id: "mypms5-u1-prop-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car travels 150 km in 2.5 hours. Find its average speed in km/h.",
          response: { type: "numeric", parts: [{ label: "speed", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Speed", statement: "$\\text{speed}=\\frac{\\text{distance}}{\\text{time}}=\\frac{150}{2.5}=60$." }],
            steps: [
              { reasoning: "Divide distance by time.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "State the speed.", working: "60\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ km/h",
          },
        },
        {
          id: "mypms5-u1-prop-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Rates appear in real contexts.",
          parts: [
            { label: "a", prompt: "A pump fills 240 litres in 8 minutes. Find the rate in litres per minute and in litres per hour.", marks: 2 },
            { label: "b", prompt: "How long will it take to fill 900 litres?", marks: 2 },
            { label: "c", prompt: "Two pumps run together: pump A at 30 L/min and pump B at 45 L/min. Find the time to fill 900 litres.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Rates", statement: "Use consistent units and combine rates when working together." }],
            steps: [
              { part: "a", reasoning: "Rate $=\\frac{240}{8}=30$ L/min; per hour $=30\\times60=1800$ L/h.", working: "30\\text{ and }1800", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both rates.", working: "30,1800", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Time $=\\frac{900}{30}=30$ minutes.", working: "30\\text{ min}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the time.", working: "30", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Combined rate $=30+45=75$ L/min; time $=\\frac{900}{75}=12$ minutes.", working: "12\\text{ min}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 30 L/min, 1800 L/h (b) 30 minutes (c) 12 minutes",
          },
        },
      ],
    },
  ],
};
