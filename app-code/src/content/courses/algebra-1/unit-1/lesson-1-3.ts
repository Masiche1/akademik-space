import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "alg1-u1-lesson-1-3",
  code: "1-3",
  title: "Solving Inequalities",
  goal: "I CAN solve and graph linear, compound, and absolute value inequalities, and solve absolute value equations.",
  standards: ["HSA-REI.B.3", "HSA-CED.A.1"],
  vocabulary: [
    { term: "Inequality", definition: "A comparison of two expressions using $<$, $>$, $\\le$, or $\\ge$." },
    { term: "Solution set", definition: "The set of all values that make an equation or inequality true." },
    { term: "Compound inequality", definition: "A statement combining two inequalities with **and** or **or**." },
    { term: "Intersection", definition: "Values that satisfy both conditions in an **and** compound inequality." },
    { term: "Union", definition: "Values that satisfy at least one condition in an **or** compound inequality." },
    { term: "Absolute value", definition: "The distance of a number from zero, so $|u|$ is nonnegative." },
  ],
  concepts: [
    {
      id: "alg1-u1-1-3-linear-compound",
      title: "Linear and compound inequalities",
      skill: "Solve multi-step inequalities and compound inequalities, reversing the comparison when multiplying or dividing by a negative number.",
      lesson: {
        sections: [
          {
            heading: "Solve as you would an equation—with one important exception",
            body: "Use inverse operations to isolate the variable, applying each operation to every part of a compound inequality when appropriate. The critical rule is that **multiplying or dividing both sides by a negative number reverses the inequality sign**. For example, $-2x<8$ becomes $x>-4$. Adding or subtracting the same number does not reverse the sign.",
          },
          {
            heading: "And versus or",
            body: "An **and** statement requires both inequalities to be true, so its solution is their overlap. A chain such as $-2<3x+1\\le10$ is solved by performing the same operation on all three parts. An **or** statement requires either inequality to be true, so combine the two solution sets. Graphically, an endpoint is included for $\\le$ or $\\ge$ and excluded for $<$ or $>$.",
          },
        ],
        keyFormulas: [
          { name: "Negative multiplication or division", statement: "$a<b$ and $c<0 \\implies ac>bc$" },
          { name: "Compound inequality", statement: "$a<x\\le b$ means both $a<x$ and $x\\le b$ are true." },
        ],
        workedExample: {
          problem: "Solve $-2\\le 3x+1<10$.",
          solution: "Subtract 1 from all three parts: $-3\\le3x<9$. Divide all parts by positive 3, so the signs stay the same: $-1\\le x<3$. The solution set is $[-1,3)$.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-3-linear-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $-4x+3\\le15$. Which solution is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\ge3$" },
            { id: "b", text: "$x\\le3$" },
            { id: "c", text: "$x\\ge-3$" },
            { id: "d", text: "$x\\le-3$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "law", name: "Inequality reversal", statement: "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign." },
              { kind: "property", name: "Properties of inequalities", statement: "Adding or subtracting the same value from both sides preserves the inequality direction." },
            ],
            steps: [
              { reasoning: "Subtract 3 from both sides.", working: "-4x\\le12", marks: 1, markCode: "M" },
              { reasoning: "Divide by $-4$ and reverse the sign.", working: "x\\ge-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x\\ge-3$",
            commonErrors: ["Dividing by $-4$ without reversing the inequality sign."],
          },
        },
        {
          id: "alg1-u1-1-3-linear-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve the compound inequality $-5<2x+1\\le9$. Give the interval of solutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Compound inequality operations", statement: "Adding or subtracting the same number from all parts of a compound inequality preserves both comparisons." },
              { kind: "property", name: "Positive division", statement: "Dividing each part by a positive number preserves inequality directions." },
            ],
            steps: [
              { reasoning: "Subtract 1 from each part.", working: "-6<2x\\le8", marks: 1, markCode: "M" },
              { reasoning: "Divide every part by positive 2; neither sign changes.", working: "-3<x\\le4", marks: 1, markCode: "A" },
              { reasoning: "Write the interval with an open lower endpoint and a closed upper endpoint.", working: "(-3,4]", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-3<x\\le4$, or $(-3,4]$.",
            commonErrors: ["Changing only one inequality while applying an operation to the whole chain.", "Using a square bracket at $-3$, which is not included."],
          },
        },
        {
          id: "alg1-u1-1-3-linear-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $3x-2<7$ **or** $2x+1\\ge9$. State the solution set in interval notation and explain why the two intervals are joined rather than intersected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Or compound inequality", statement: "An **or** statement is true when at least one component inequality is true; its solution set is the union." },
              { kind: "property", name: "Properties of inequalities", statement: "Adding or subtracting the same value preserves direction; dividing by a positive value preserves direction." },
            ],
            steps: [
              { reasoning: "Solve the first inequality by adding 2, then dividing by 3.", working: "3x-2<7 \\implies 3x<9 \\implies x<3", marks: 1, markCode: "M" },
              { reasoning: "Solve the second inequality by subtracting 1, then dividing by 2.", working: "2x+1\\ge9 \\implies 2x\\ge8 \\implies x\\ge4", marks: 1, markCode: "M" },
              { reasoning: "Use a parenthesis for the excluded endpoint 3 and a bracket for the included endpoint 4.", working: "(-\\infty,3) \\cup [4,\\infty)", marks: 1, markCode: "A" },
              { reasoning: "Because the condition uses **or**, satisfying either inequality is enough; therefore take the union, not the overlap.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(-\\infty,3)\\cup[4,\\infty)$",
            commonErrors: ["Intersecting the two sets because of the word 'or'.", "Including 3 even though the first inequality is strict."],
            examinerNote: "A complete explanation distinguishes union for **or** from intersection for **and**.",
          },
        },
        {
          id: "alg1-u1-1-3-linear-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A ride service charges a fare of $F=4+2.5m$ dollars for a trip of $m$ miles. A rider has a prepaid credit of $\\$50$.",
          parts: [
            { label: "a", prompt: "The rider wants a fare of at least $\\$14$ and at most $\\$29$. Solve the compound inequality $14\\le 4+2.5m\\le 29$ for $m$.", marks: 2 },
            { label: "b", prompt: "After a trip, the rider's remaining credit must be at least $\\$6$. Write and solve an inequality in $m$ for $50-(4+2.5m)\\ge 6$.", marks: 3 },
            { label: "c", prompt: "Find the values of $m$ that satisfy both the conditions in (a) and in (b). Write your answer in interval notation.", marks: 2 },
            { label: "d", prompt: "A surge fee applies when the fare is under $\\$9$ **or** over $\\$34$. Find the trip lengths that incur a surge fee, and explain why the answer is a union.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Compound inequality operations", statement: "Adding, subtracting, or dividing every part of a compound inequality by a positive number preserves the inequality directions." },
              { kind: "law", name: "Inequality reversal", statement: "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign." },
              { kind: "definition", name: "And / or", statement: "An **and** statement has the intersection of the solution sets; an **or** statement has their union." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract 4 from all three parts.", working: "10\\le 2.5m\\le 25", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide all parts by positive 2.5; the directions stay the same.", working: "4\\le m\\le 10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Simplify the left side.", working: "50-4-2.5m\\ge 6 \\implies 46-2.5m\\ge 6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtract 46, then divide by $-2.5$ and reverse the inequality sign.", working: "-2.5m\\ge -40 \\implies m\\le 16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the result: trips up to 16 miles leave at least $\\$6$ of credit.", working: "m\\le 16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Both conditions must hold (**and**), so take the overlap of $4\\le m\\le 10$ and $m\\le 16$.", working: "[4,10]\\cap(-\\infty,16]", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Every value from 4 to 10 is below 16.", working: "[4,10]", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write the two cases and solve the first: $4+2.5m<9$.", working: "2.5m<5 \\implies m<2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve the second: $4+2.5m>34$.", working: "2.5m>30 \\implies m>12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A surge fee applies if either condition is true, so the solution set is the union; no trip can satisfy both at once.", working: "(-\\infty,2)\\cup(12,\\infty)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4\\le m\\le10$; (b) $m\\le16$; (c) $[4,10]$; (d) $m<2$ or $m>12$, i.e. $(0,2)\\cup(12,\\infty)$ for real trip lengths.",
            commonErrors: ["Not reversing the inequality sign when dividing by $-2.5$.", "Reporting $m\\ge16$ in (b).", "Intersecting the two surge conditions, which gives an empty set."],
            examinerNote: "In (d) accept $(-\\infty,2)\\cup(12,\\infty)$ or the version restricted to $m>0$.",
          },
        },
      ],
    },
    {
      id: "alg1-u1-1-3-absolute-value",
      title: "Absolute value equations and inequalities",
      skill: "Solve absolute value equations and inequalities by interpreting absolute value as distance from zero.",
      lesson: {
        sections: [
          {
            heading: "Absolute value equations represent two distances",
            body: "For $|u|=a$ with $a>0$, the expression $u$ is $a$ units from zero in either direction, so $u=a$ **or** $u=-a$. Solve both resulting equations. If $a=0$, then $u=0$; if $a<0$, there is no solution because absolute value cannot be negative.",
          },
          {
            heading: "Less than is between; greater than is outside",
            body: "For $a>0$, $|u|<a$ means $u$ is within distance $a$ of zero: $-a<u<a$ (an **and** condition). By contrast, $|u|>a$ means $u$ is more than $a$ units from zero: $u<-a$ **or** $u>a$. The same patterns apply to $\\le$ and $\\ge$, with endpoints included. After forming the compound statement, solve it like any other inequality.",
          },
        ],
        keyFormulas: [
          { name: "Absolute value equation", statement: "$|u|=a$ with $a>0 \\iff u=a$ or $u=-a$" },
          { name: "Absolute value less-than inequality", statement: "$|u|<a$ with $a>0 \\iff -a<u<a$" },
          { name: "Absolute value greater-than inequality", statement: "$|u|>a$ with $a>0 \\iff u<-a$ or $u>a$" },
        ],
        workedExample: {
          problem: "Solve $|2x-1|=7$.",
          solution: "Set the expression inside the absolute value equal to both 7 and $-7$: $2x-1=7$ or $2x-1=-7$. The first gives $2x=8$, so $x=4$. The second gives $2x=-6$, so $x=-3$. Both solutions are 7 units from zero in the expression $2x-1$.",
        },
      },
      questions: [
        {
          id: "alg1-u1-1-3-absolute-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $|x-2|=5$. Which pair gives all solutions?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x=7$ only" },
            { id: "b", text: "$x=-3$ only" },
            { id: "c", text: "$x=7$ or $x=-3$" },
            { id: "d", text: "$x=3$ or $x=-7$" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value as distance", statement: "$|u|=a$ for $a>0$ means $u=a$ or $u=-a$." },
              { kind: "property", name: "Properties of equality", statement: "Adding the same value to both sides preserves equality." },
            ],
            steps: [
              { reasoning: "Create both equations corresponding to the two distances.", working: "x-2=5 \\quad\\text{or}\\quad x-2=-5", marks: 1, markCode: "M" },
              { reasoning: "Add 2 to each equation to obtain both solutions.", working: "x=7 \\quad\\text{or}\\quad x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $x=7$ or $x=-3$",
            commonErrors: ["Using only the positive case and missing the second solution."],
          },
        },
        {
          id: "alg1-u1-1-3-absolute-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $|x+1|<4$. State the solution as a compound inequality and in interval notation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Absolute value less-than rule", statement: "$|u|<a$ for $a>0$ is equivalent to $-a<u<a$." },
              { kind: "property", name: "Inequality operations", statement: "Subtracting the same number from all parts of a compound inequality preserves the comparisons." },
            ],
            steps: [
              { reasoning: "Translate the absolute value inequality into a between statement.", working: "-4<x+1<4", marks: 1, markCode: "M" },
              { reasoning: "Subtract 1 from all three parts.", working: "-5<x<3", marks: 1, markCode: "A" },
              { reasoning: "Both endpoints are excluded because the original inequality is strict.", working: "(-5,3)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-5<x<3$, or $(-5,3)$.",
            commonErrors: ["Splitting a less-than absolute value inequality into two outside intervals.", "Including an endpoint in a strict inequality."],
          },
        },
        {
          id: "alg1-u1-1-3-absolute-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $|2x+1|\\ge5$. Give the answer in interval notation and explain why the solution uses **or**.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Absolute value greater-than rule", statement: "$|u|\\ge a$ for $a>0$ is equivalent to $u\\le-a$ or $u\\ge a$." },
              { kind: "property", name: "Negative division", statement: "Dividing both sides of an inequality by a negative number reverses the inequality sign." },
            ],
            steps: [
              { reasoning: "Rewrite the absolute value comparison as two outside cases.", working: "2x+1\\le-5 \\quad\\text{or}\\quad 2x+1\\ge5", marks: 1, markCode: "M" },
              { reasoning: "Solve the left case by subtracting 1 and dividing by positive 2.", working: "2x\\le-6 \\implies x\\le-3", marks: 1, markCode: "A" },
              { reasoning: "Solve the right case using the same operations.", working: "2x\\ge4 \\implies x\\ge2", marks: 1, markCode: "A" },
              { reasoning: "The expression must be at least 5 units from zero in either direction, so join the rays with a union.", working: "(-\\infty,-3]\\cup[2,\\infty)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$(-\\infty,-3]\\cup[2,\\infty)$",
            commonErrors: ["Using an **and** condition for a greater-than absolute value inequality.", "Using open endpoints even though $\\ge$ includes equality."],
            examinerNote: "Both rays and their closed endpoints must be present for full credit.",
          },
        },
        {
          id: "alg1-u1-1-3-absolute-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A factory makes bolts with a target diameter of $12.5$ mm. A bolt passes inspection when its diameter $d$ (in mm) differs from the target by at most $0.15$ mm, that is, $|d-12.5|\\le 0.15$.",
          parts: [
            { label: "a", prompt: "Solve the inequality to find the range of accepted diameters.", marks: 2 },
            { label: "b", prompt: "Write the diameters that are rejected as an absolute value inequality and solve it.", marks: 2 },
            { label: "c", prompt: "A sample bolt's diameter differs from the target by exactly $0.1$ mm. Solve $|d-12.5|=0.1$ to find its possible diameters.", marks: 3 },
            { label: "d", prompt: "A new inspector tests $|2d-25|\\le 0.2$ instead. Solve this inequality and state how the new accepted tolerance compares with the original $0.15$ mm.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Absolute value less-than rule", statement: "$|u|\\le a$ for $a>0$ is equivalent to $-a\\le u\\le a$." },
              { kind: "theorem", name: "Absolute value greater-than rule", statement: "$|u|>a$ for $a>0$ is equivalent to $u<-a$ or $u>a$." },
              { kind: "definition", name: "Absolute value as distance", statement: "$|d-c|$ is the distance of $d$ from $c$; $|d-c|=k$ gives $d=c\\pm k$." },
            ],
            steps: [
              { part: "a", reasoning: "Rewrite as a between statement.", working: "-0.15\\le d-12.5\\le 0.15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add 12.5 to all three parts.", working: "12.35\\le d\\le 12.65", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rejected means the distance from 12.5 exceeds 0.15; split into two outside cases.", working: "|d-12.5|>0.15 \\implies d-12.5<-0.15 \\text{ or } d-12.5>0.15", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add 12.5 in each case.", working: "d<12.35 \\text{ or } d>12.65", marks: 1, markCode: "A" },
              { part: "c", reasoning: "An absolute value equation gives two cases: the bolt is 0.1 mm above or below the target.", working: "d-12.5=0.1 \\quad\\text{or}\\quad d-12.5=-0.1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve the first case.", working: "d=12.6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Solve the second case.", working: "d=12.4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Rewrite as a between statement and add 25 to all parts.", working: "-0.2\\le 2d-25\\le 0.2 \\implies 24.8\\le 2d\\le 25.2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide all parts by positive 2.", working: "12.4\\le d\\le 12.6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "This is $|d-12.5|\\le 0.1$, since $|2d-25|=2|d-12.5|$. The new tolerance is $0.1$ mm, stricter than $0.15$ mm.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $12.35\\le d\\le12.65$; (b) $d<12.35$ or $d>12.65$; (c) $d=12.4$ or $d=12.6$; (d) $12.4\\le d\\le12.6$, a tolerance of $0.1$ mm, which is stricter.",
            commonErrors: ["Giving only one solution to the absolute value equation in (c).", "Using **and** instead of **or** for the rejected values in (b).", "Forgetting to divide by 2 in (d), giving $24.8\\le d\\le 25.2$."],
          },
        },
      ],
    },
  ],
};
