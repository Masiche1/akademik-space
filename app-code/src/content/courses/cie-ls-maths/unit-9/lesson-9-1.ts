import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "cilm-u9-lesson-9-1",
  code: "9-1",
  title: "Multi-step problem solving",
  goal: "I CAN break complex problems into steps and combine multiple maths skills.",
  standards: ["0862 Problem solving"],
  vocabulary: [
    { term: "Multi-step problem", definition: "A question requiring several calculations linked together." },
    { term: "Strategy", definition: "A planned approach: identify what's needed, choose methods, execute, check." },
    { term: "Estimation", definition: "Rough calculation to check if an answer is sensible." },
    { term: "Working", definition: "Show each step — marks are awarded for method, not just answers." },
    { term: "Units check", definition: "Verify answer has correct units for the question asked." },
    { term: "Reverse check", definition: "Work backwards from answer to verify it satisfies the problem." },
  ],
  concepts: [
    {
      id: "cilm-u9-multistep",
      title: "Problem-solving strategy",
      skill: "Decompose problems, select appropriate techniques, and verify answers.",
      lesson: {
        sections: [
          {
            heading: "The four steps",
            body: "1. **Understand**: What is being asked? What information is given?\n2. **Plan**: Which techniques apply? What order?\n3. **Execute**: Calculate carefully, show working.\n4. **Check**: Estimate — is the answer reasonable? Correct units?",
          },
          {
            heading: "Common traps",
            body: "- Mixing units (cm with m)\n- Answering wrong question (found area, asked perimeter)\n- Rounding too early\n- Forgetting to convert back at the end",
          },
          {
            heading: "Estimation",
            body: "Round numbers first: $\\frac{487}{23} \\approx \\frac{500}{25} = 20$. If your exact answer is near the estimate, it's probably right.",
          },
        ],
        keyFormulas: [
          { name: "Problem strategy", statement: "Understand → Plan → Execute → Check." },
        ],
        workedExample: {
          problem: "A rectangular garden $12$ m × $8$ m has a $1$ m path around it. Find the area of the path.",
          solution: "Outer: $14 \\times 10 = 140$ m². Inner: $12 \\times 8 = 96$ m². Path: $140-96=44$ m².",
        },
      },
      questions: [
        {
          id: "cilm-u9-ms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST step in solving any maths problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write the answer down" },
              { id: "b", text: "Understand what's being asked" },
              { id: "c", text: "Draw a diagram" },
              { id: "d", text: "Start calculating immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Strategy", statement: "Understanding precedes calculation." },
            ],
            steps: [
              { reasoning: "Read and understand before calculating.", working: "\\text{understand}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Understand what's being asked",
            commonErrors: ["Rushing to calculate without understanding the question."],
          },
        },
        {
          id: "cilm-u9-ms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Estimate $\\frac{397 \\times 8}{19}$ before calculating exactly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Estimation", statement: "$\\frac{400 \\times 8}{20} = \\frac{3200}{20} = 160$." },
            ],
            steps: [
              { reasoning: "Round: $397\\approx400$, $19\\approx20$ → estimate $160$.", working: "\\approx160", marks: 1, markCode: "M" },
              { reasoning: "Estimate $\\approx160$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 160$",
            commonErrors: ["No rounding — estimation requires approximating."],
          },
        },
        {
          id: "cilm-u9-ms-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells pencils at $\\pounds0.40$ each. You have $\\pounds5$. How many pencils can you buy and how much change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-step", statement: "$5 \\div 0.4 = 12.5$ → 12 pencils; change $= 5 - 4.80 = \\pounds0.20$." },
            ],
            steps: [
              { reasoning: "$5 \\div 0.4 = 12.5$ — can't buy half pencil → 12.", working: "12", marks: 1, markCode: "M" },
              { reasoning: "Cost: $12 \\times 0.4 = \\pounds4.80$.", working: "4.80", marks: 1, markCode: "M" },
              { reasoning: "Change: $5 - 4.80 = \\pounds0.20$.", working: "0.20", marks: 1, markCode: "M" },
              { reasoning: "12 pencils, $\\pounds0.20$ change.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ pencils, change $\\pounds0.20$",
            commonErrors: ["Buying 12.5 pencils — must round down to whole items."],
          },
        },
        {
          id: "cilm-u9-ms-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A farmer has $240$ m of fencing for a rectangular field.",
          parts: [
            { label: "a", prompt: "If length is twice the width, find width and length.", marks: 4 },
            { label: "b", prompt: "Find the area of the field.", marks: 2 },
            { label: "c", prompt: "Estimate the area before calculating to check.", marks: 1 },
            { label: "d", prompt: "Verify your answer satisfies the fencing constraint.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multi-step algebra", statement: "Perimeter equation → solve → area → verify." },
            ],
            steps: [
              { part: "a", reasoning: "$2(l+w)=240$ → $l+w=120$; $l=2w$ → $3w=120$ → $w=40$, $l=80$.", working: "w=40,l=80", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Width found.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Length found.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$A = 80 \\times 40 = 3200$ m².", working: "3200\\text{ m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Estimate: $80\\times40 \\approx 80\\times40=3200$ — reasonable.", working: "\\approx3200", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check: $2(80+40)=240$ ✓.", working: "240", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verification correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $w=40$ m, $l=80$ m (b) $3200$ m² (c) $\\approx3200$ (d) $2(80+40)=240$ ✓",
            levels: [
              { level: "Level 3", marks: "3-4", descriptor: "Dimensions correct.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Estimate given.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Verified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (a) using $l+w=240$ instead of $2(l+w)=240$."],
          },
        },
        {
          id: "cilm-u9-ms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best first estimate for $\\frac{812}{39}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{800}{30}\approx27$" },
              { id: "b", text: "$\\frac{800}{40}=20$" },
              { id: "c", text: "$800-39=761$" },
              { id: "d", text: "$812+39=851$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Estimation", statement: "Round compatible numbers to simplify division." },
            ],
            steps: [
              { reasoning: "Rounding $812\approx800$ and $39\approx40$ gives a useful estimate.", working: "\\frac{800}{40}=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{800}{40}=20$",
            commonErrors: ["Using subtraction or addition instead of division."],
          },
        },
        {
          id: "cilm-u9-ms-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Maya buys 6 notebooks at $\\$2.75$ each with $\\$20$. Work out her change.",
          response: { type: "numeric", parts: [{ label: "Change", answer: 3.5, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Multi-step money", statement: "Total cost = unit price × quantity; change = paid − cost." },
            ],
            steps: [
              { reasoning: "Cost is $6 \\times 2.75 = 16.50$.", working: "16.50", marks: 1, markCode: "M" },
              { reasoning: "Change is $20 - 16.50 = 3.50$.", working: "3.50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$3.50$",
            commonErrors: ["Multiplying $2.75$ by $20$ instead of finding the cost first."],
          },
        },
        {
          id: "cilm-u9-ms-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangular patio is $4$ m by $250$ cm. Find its area in square metres.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 10, unit: "m^2" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Area of rectangle", statement: "$A=lw$ after converting units." },
            ],
            steps: [
              { reasoning: "Convert $250$ cm to $2.5$ m, then $A=4\\times2.5$.", working: "4\\times2.5=10", marks: 1, markCode: "M" },
              { reasoning: "The area is $10$ m².", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ m²",
            commonErrors: ["Using $250$ directly and obtaining $1000$ m² without conversion."],
          },
        },
        {
          id: "cilm-u9-ms-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A question asks for a length in centimetres, but your calculation used metres. What is the safest first action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Divide the metre answer by $100$" },
              { id: "b", text: "Leave the answer unchanged" },
              { id: "c", text: "Multiply the metre answer by $100$" },
              { id: "d", text: "Add $100$ to the metre answer" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Unit conversion", statement: "$1$ m $=100$ cm." },
            ],
            steps: [
              { reasoning: "Metres to centimetres requires multiplying by $100$.", working: "\\times100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Multiply by $100$",
            commonErrors: ["Confusing length conversion with area conversion."],
          },
        },
        {
          id: "cilm-u9-ms-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which check best confirms that a calculated average is sensible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rewrite it as a fraction" },
              { id: "b", text: "Multiply it by the number of values" },
              { id: "c", text: "Check whether it is the largest value" },
              { id: "d", text: "Compare it with an estimate from rounded values" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reasonableness", statement: "An estimate detects errors that exact recalculation may miss." },
            ],
            steps: [
              { reasoning: "Estimation checks whether the exact answer is plausible.", working: "\\text{estimate check}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Compare with an estimate",
            commonErrors: ["Checking only the final digit or units."],
          },
        },
        {
          id: "cilm-u9-ms-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A delivery van travels $180$ km in $3$ hours, then $120$ km in $2$ hours. Find the average speed for the whole journey.",
          response: { type: "numeric", parts: [{ label: "Average speed", answer: 60, unit: "km/h" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average speed", statement: "$v=\\frac{\\text{total distance}}{\\text{total time}}$." },
            ],
            steps: [
              { reasoning: "Total distance is $180+120=300$ km.", working: "300", marks: 1, markCode: "M" },
              { reasoning: "Total time is $3+2=5$ hours.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Average speed is $300\\div5=60$ km/h.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$60$ km/h",
            commonErrors: ["Averaging the two speeds as $\\frac{60+60}{2}$ without checking total time."],
          },
        },
        {
          id: "cilm-u9-ms-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if a question says 'show your working'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underline the question" },
              { id: "b", text: "Skip the question" },
              { id: "c", text: "Give only the final answer" },
              { id: "d", text: "Write every calculation step clearly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Show working", statement: "Method marks are awarded for correct steps." },
            ],
            steps: [
              { reasoning: "Clear steps can earn method marks even if the final answer is wrong.", working: "\\text{show steps}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Write every calculation step",
            commonErrors: ["Thinking only the answer earns marks."],
          },
        },
        {
          id: "cilm-u9-ms-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle has length $9$ cm and width $4$ cm. Find its perimeter and area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Rectangle measures", statement: "Perimeter $=2(l+w)$; area $=lw$." },
            ],
            steps: [
              { reasoning: "Perimeter $=2(9+4)=26$ cm; area $=9\\times4=36$ cm².", working: "P=26,\\ A=36", marks: 1, markCode: "M" },
              { reasoning: "Both values are correct with units.", working: "26\\text{ cm},36\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$26$ cm; $36$ cm²",
            commonErrors: ["Using the area formula for perimeter or forgetting to double the perimeter."],
          },
        },
        {
          id: "cilm-u9-ms-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cinema has $240$ seats. On Saturday $75\\%$ of the seats are occupied. Of the empty seats, $\\frac{1}{4}$ are reserved for staff. Find the number of public empty seats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage and fraction", statement: "Find empty seats first, then take the required fraction." },
            ],
            steps: [
              { reasoning: "Occupied seats are $0.75\\times240=180$, so $60$ seats are empty.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Staff seats are $\\frac{1}{4}\\times60=15$.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Public empty seats are $60-15=45$.", working: "45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$ seats",
            commonErrors: ["Finding $\\frac{1}{4}$ of all seats instead of of the empty seats."],
          },
        },
        {
          id: "cilm-u9-ms-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which answer is unreasonable for the mass of a bicycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$450$ kg" },
              { id: "b", text: "$18$ kg" },
              { id: "c", text: "$22$ kg" },
              { id: "d", text: "$12$ kg" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Reasonableness", statement: "Real-world estimates reveal unit or calculation errors." },
            ],
            steps: [
              { reasoning: "A bicycle is usually well below $100$ kg, so $450$ kg is unreasonable.", working: "450\\text{ kg}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $450$ kg",
            commonErrors: ["Ignoring the real-world context of the answer."],
          },
        },
        {
          id: "cilm-u9-ms-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A school orders $35$ exercise books at $\\$4.20$ each and $24$ pens at $\\$1.80$ each. Delivery costs $\\$12$. The order is reduced by $10\\%$ before delivery is added. Find the final bill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Multi-step finance", statement: "Calculate goods total, apply discount, then add fixed delivery." },
            ],
            steps: [
              { reasoning: "Books cost $35\\times4.20=147$ and pens cost $24\\times1.80=43.20$, so goods total $190.20$.", working: "190.20", marks: 1, markCode: "M" },
              { reasoning: "After $10\\%$ reduction the goods cost $190.20\\times0.90=171.18$.", working: "171.18", marks: 1, markCode: "M" },
              { reasoning: "Adding delivery gives $171.18+12=183.18$.", working: "183.18", marks: 1, markCode: "M" },
              { reasoning: "The final bill is $\\$183.18$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$183.18$",
            commonErrors: ["Applying the $10\\%$ discount to the delivery charge as well."],
          },
        },
        {
          id: "cilm-u9-ms-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sequence of actions best follows the problem-solving strategy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check, execute, plan, understand" },
              { id: "b", text: "Calculate, guess, write answer, stop" },
              { id: "c", text: "Understand, plan, execute, check" },
              { id: "d", text: "Draw, answer, forget units" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Problem strategy", statement: "Understanding and planning come before calculation and checking." },
            ],
            steps: [
              { reasoning: "The reliable order is understand, plan, execute, check.", working: "\\text{U-P-E-C}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Understand, plan, execute, check",
            commonErrors: ["Starting calculations before identifying what is required."],
          },
        },
      ],
    },
    {
      id: "cilm-u9-exam",
      title: "Exam technique",
      skill: "Apply exam strategies: reading questions, managing time, checking work.",
      lesson: {
        sections: [
          {
            heading: "Reading questions",
            body: "Underline what's asked. Note units required. Check if answer should be exact or rounded. 'Show working' means method marks available.",
          },
          {
            heading: "Time management",
            body: "Don't spend too long on one question — mark it and return. Easy marks first. Check clock regularly.",
          },
          {
            heading: "Checking work",
            body: "Substitute answers back. Verify units. Check reasonableness — a person's height of $250$ m is wrong. Review all answers if time permits.",
          },
        ],
        keyFormulas: [
          { name: "Exam checklist", statement: "Read → Plan → Calculate → Check units → Verify." },
        ],
        workedExample: {
          problem: "Question asks for area in m² but you calculated in cm². What do you do?",
          solution: "Convert: $1$ m² $= 10{,}000$ cm². Or recalculate in metres directly.",
        },
      },
      questions: [
        {
          id: "cilm-u9-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You have 60 minutes for 20 questions. Roughly how long per question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "30 minutes" },
              { id: "b", text: "1 minute" },
              { id: "c", text: "3 minutes" },
              { id: "d", text: "10 minutes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "$60 \\div 20 = 3$ minutes per question." },
            ],
            steps: [
              { reasoning: "$60/20=3$ minutes average.", working: "3\\text{ min}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 3 minutes",
            commonErrors: ["Not budgeting time — leads to unfinished papers."],
          },
        },
        {
          id: "cilm-u9-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you show working even when you can do it mentally?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Method marks", statement: "Working earns marks even if final answer wrong; also allows checking." },
            ],
            steps: [
              { reasoning: "Method marks awarded for correct process.", working: "\\text{method marks}", marks: 1, markCode: "M" },
              { reasoning: "Working also helps catch errors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Method marks + error checking",
            commonErrors: ["Thinking only answers earn marks."],
          },
        },
        {
          id: "cilm-u9-exam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your calculated answer for a person's mass is $4500$ kg. What does this tell you and what should you do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reasonableness", statement: "$4500$ kg is unreasonable — likely unit error or calculation mistake." },
            ],
            steps: [
              { reasoning: "$4500$ kg is impossibly heavy for a person.", working: "\\text{unreasonable}", marks: 1, markCode: "M" },
              { reasoning: "Check units — maybe grams vs kg confusion.", working: "\\text{check units}", marks: 1, markCode: "M" },
              { reasoning: "Recheck calculation.", marks: 1, markCode: "M" },
              { reasoning: "Estimation check catches errors.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unreasonable — check units and recalculate",
            commonErrors: ["Accepting obviously wrong answers without checking."],
          },
        },
        {
          id: "cilm-u9-exam-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Exam strategy scenario: you're stuck on question 12 of 20 with 15 minutes left.",
          parts: [
            { label: "a", prompt: "What should you do immediately?", marks: 2 },
            { label: "b", prompt: "If you skip it, where should you go next?", marks: 2 },
            { label: "c", prompt: "Why is skipping sometimes better than staying stuck?", marks: 2 },
            { label: "d", prompt: "Describe your final checking strategy.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam strategy", statement: "Mark and move on; secure easy marks; return if time; final check." },
            ],
            steps: [
              { part: "a", reasoning: "Mark it, move to next question — don't waste time.", working: "\\text{move on}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strategy correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Go to unanswered/easier questions — secure marks.", working: "\\text{easier Qs}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct prioritisation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Stuck questions may stay stuck; easier questions guarantee marks.", working: "\\text{guaranteed marks}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reasoning sound.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check answers against question requirements; verify units; review calculations; ensure all answered.", working: "\\text{final check}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Systematic approach.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comprehensive strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mark and move on (b) easier/unanswered questions (c) guaranteed marks elsewhere (d) verify units, review, complete all",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Thorough.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Staying stuck wastes time — always move on."],
          },
        },
        {
          id: "cilm-u9-exam-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before calculating, what is the most useful thing to do with a question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start with the largest number" },
              { id: "b", text: "Identify exactly what is asked and the required units" },
              { id: "c", text: "Guess the likely answer" },
              { id: "d", text: "Write down every formula you know" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Question reading", statement: "The asked quantity and units determine the method and final answer." },
            ],
            steps: [
              { reasoning: "Identifying the target and units prevents method and unit errors.", working: "\\text{read first}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Identify what is asked and required units",
            commonErrors: ["Answering a nearby quantity instead of the one requested."],
          },
        },
        {
          id: "cilm-u9-exam-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You have $90$ minutes for a paper with $30$ questions. What is the average time per question?",
          response: { type: "numeric", parts: [{ label: "Minutes", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time management", statement: "Average time = total time ÷ number of questions." },
            ],
            steps: [
              { reasoning: "$90 \\div 30 = 3$ minutes.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ minutes",
          },
        },
        {
          id: "cilm-u9-exam-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A candidate calculates an area as $2500$ cm² but the question asks for m². Convert the answer correctly.",
          response: { type: "numeric", parts: [{ label: "Area", answer: 0.25, unit: "m^2" }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Area conversion", statement: "$1\\text{ m}^2=10\\,000\\text{ cm}^2$." },
            ],
            steps: [
              { reasoning: "Divide by $10\\,000$ to convert cm² to m².", working: "\\frac{2500}{10000}", marks: 1, markCode: "M" },
              { reasoning: "The answer is $0.25$ m².", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$ m²",
            commonErrors: ["Dividing by $100$ instead of $10\\,000$ for area."],
          },
        },
        {
          id: "cilm-u9-exam-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why are method marks important in an exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They reward correct working even if the final answer is wrong" },
              { id: "b", text: "They are only for calculators" },
              { id: "c", text: "They make questions shorter" },
              { id: "d", text: "They replace accuracy marks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Method marks", statement: "Correct process can earn marks independently of the answer." },
            ],
            steps: [
              { reasoning: "Showing valid steps protects marks when arithmetic slips occur.", working: "\\text{method marks}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** They reward correct working",
            commonErrors: ["Omitting working and losing recoverable marks."],
          },
        },
        {
          id: "cilm-u9-exam-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A question is worth $6$ marks. You estimate it needs $18$ minutes. You have $90$ minutes left and $10$ questions remaining. Is your estimate reasonable? Explain with a calculation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time budgeting", statement: "Compare required time with average available time." },
            ],
            steps: [
              { reasoning: "Average available time is $90 \\div 10 = 9$ minutes per question.", working: "9", marks: 1, markCode: "M" },
              { reasoning: "The estimate of $18$ minutes is too high unless marks or difficulty justify it; plan to move on if stuck.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Not reasonable as a general average: $18>9$ minutes",
            commonErrors: ["Ignoring remaining question count when judging time."],
          },
        },
        {
          id: "cilm-u9-exam-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a reliable final-check routine for the last five minutes of a maths exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Final checking", statement: "Check completeness, units, calculations and reasonableness." },
            ],
            steps: [
              { reasoning: "Confirm every question has an answer and attempted working.", working: "\\text{complete}", marks: 1, markCode: "M" },
              { reasoning: "Check units and re-evaluate one or two calculations.", working: "\\text{units/calcs}", marks: 1, markCode: "M" },
              { reasoning: "Look for obvious reasonableness errors, such as impossible measurements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check completeness, units/calculations, and reasonableness",
            commonErrors: ["Only rereading questions without verifying answers."],
          },
        },
        {
          id: "cilm-u9-exam-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A question asks for the area 'in square centimetres'. Which response is correctly focused?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$84$" },
              { id: "b", text: "$84$ cm²" },
              { id: "c", text: "$84$ m²" },
              { id: "d", text: "$84$ cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Units", statement: "Area must be reported in square units." },
            ],
            steps: [
              { reasoning: "Area in square centimetres needs the unit cm².", working: "\\text{cm}^2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $84$ cm²",
            commonErrors: ["Giving a length unit or omitting units."],
          },
        },
        {
          id: "cilm-u9-exam-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You answer $18$ of $20$ questions correctly. One answered question is worth $3$ marks, one unanswered question is worth $2$ marks, and every other question is worth $1$ mark. Calculate your total mark.",
          response: { type: "numeric", parts: [{ label: "Total mark", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mark allocation", statement: "Separate multi-mark questions from single-mark questions." },
            ],
            steps: [
              { reasoning: "The $18$ correct answers consist of one $3$-mark question and $17$ single-mark questions.", working: "3+17", marks: 1, markCode: "M" },
              { reasoning: "Earned marks are $3+17=20$.", working: "20", marks: 1, markCode: "A" },
              { reasoning: "The $2$-mark unanswered question and remaining $1$-mark unanswered question earn nothing.", working: "0", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$20$ marks",
            commonErrors: ["Assuming all 20 questions are worth one mark."],
          },
        },
        {
          id: "cilm-u9-exam-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student finds perimeter $26$ cm and area $36$ cm² for a $9$ cm by $4$ cm rectangle. Which value is correct?",
          response: { type: "numeric", parts: [{ label: "Correct value", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Rectangle measures", statement: "Perimeter $=2(l+w)$; area $=lw$." },
            ],
            steps: [
              { reasoning: "Perimeter is $2(9+4)=26$ cm, but area is $9\\times4=36$ cm².", working: "A=36", marks: 1, markCode: "M" },
              { reasoning: "The requested correct area value is $36$.", working: "36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36$ cm²",
            commonErrors: ["Confusing perimeter with area."],
          },
        },
        {
          id: "cilm-u9-exam-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "With ten minutes left, what is the best priority?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change all answers randomly" },
              { id: "b", text: "Answer every question, then check" },
              { id: "c", text: "Redo only the hardest question" },
              { id: "d", text: "Stop working immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Unanswered questions cannot earn marks." },
            ],
            steps: [
              { reasoning: "First secure marks by completing all answers, then check if time remains.", working: "\\text{complete then check}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Answer every question, then check",
            commonErrors: ["Leaving questions blank while revising."],
          },
        },
        {
          id: "cilm-u9-exam-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A $10$-mark question asks for three linked calculations. Outline how you would allocate marks and structure your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structured answers", statement: "Separate steps help examiners award method and accuracy marks." },
            ],
            steps: [
              { reasoning: "State what each part requires and plan the order of calculations.", working: "\\text{plan}", marks: 1, markCode: "M" },
              { reasoning: "Label or number the three linked calculations so each earns its own method mark.", working: "\\text{label steps}", marks: 1, markCode: "M" },
              { reasoning: "Show substitutions and intermediate results rather than only final values.", working: "\\text{working}", marks: 1, markCode: "M" },
              { reasoning: "Finish with a clear final answer and units where appropriate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plan, label each calculation, show substitutions, and give a clear final answer",
            commonErrors: ["Writing disconnected numbers without linking the steps."],
          },
        },
        {
          id: "cilm-u9-exam-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which estimate is closest to $\\frac{19 \\times 21}{9}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$40$" },
              { id: "d", text: "$80$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Estimation", statement: "Round factors before evaluating." },
            ],
            steps: [
              { reasoning: "$\\frac{20\\times20}{10}=40$.", working: "40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $40$",
          },
        },
      ],
    },
    {
      id: "cilm-u9-review",
      title: "Course review and mixed problems",
      skill: "Apply all Lower Secondary maths skills to mixed problems.",
      lesson: {
        sections: [
          {
            heading: "Key skills recap",
            body: "- Number: operations, fractions, percentages\n- Algebra: expressions, equations, sequences, graphs\n- Geometry: angles, shapes, area, volume, transformations\n- Statistics: averages, charts, probability\n- Problem solving: strategy, estimation, checking",
          },
          {
            heading: "Mixed problem approach",
            body: "Identify which skills each part needs. Don't panic — most problems combine familiar techniques.",
          },
        ],
        keyFormulas: [
          { name: "Course coverage", statement: "0862 covers number, algebra, geometry, measure, statistics." },
        ],
        workedExample: {
          problem: "A rectangle has perimeter $36$ cm and length $10$ cm. Find width, area, and the percentage of a $10 \\times 10$ square it covers.",
          solution: "$2(10+w)=36$ → $w=8$; $A=80$ cm²; percentage $=\\frac{80}{100}\\times100=80\\%$.",
        },
      },
      questions: [
        {
          id: "cilm-u9-rev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which topic covers mean, median and mode?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geometry" },
              { id: "b", text: "Statistics" },
              { id: "c", text: "Algebra" },
              { id: "d", text: "Number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Statistics", statement: "Averages are statistics topics." },
            ],
            steps: [
              { reasoning: "Mean/median/mode = statistics.", working: "statistics", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Statistics",
            commonErrors: ["Confusing with algebra — averages are data analysis."],
          },
        },
        {
          id: "cilm-u9-rev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $3x - 7 = 14$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linear equation", statement: "$3x=21$ → $x=7$." },
            ],
            steps: [
              { reasoning: "$3x = 14+7 = 21$; $x = 7$.", working: "x=7", marks: 1, markCode: "M" },
              { reasoning: "$x=7$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 7$",
            commonErrors: ["$3x = 14-7$ — move $-7$ by adding."],
          },
        },
        {
          id: "cilm-u9-rev-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A circle has circumference $44$ cm (using $\\pi \\approx \\frac{22}{7}$). Find its radius and area.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Circle calculations", statement: "$C=2\\pi r$ → $r=7$; $A=\\pi r^2=154$ cm²." },
            ],
            steps: [
              { reasoning: "$44 = 2 \\times \\frac{22}{7} \\times r$ → $r = 7$ cm.", working: "r=7", marks: 1, markCode: "M" },
              { reasoning: "$A = \\frac{22}{7} \\times 49 = 154$ cm².", working: "154\\text{ cm}^2", marks: 1, markCode: "M" },
              { reasoning: "Both correct.", marks: 1, markCode: "M" },
              { reasoning: "Accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$r = 7$ cm; $A = 154$ cm²",
            commonErrors: ["Using diameter as radius — $C=\\pi d$ gives $d=14$, so $r=7$."],
          },
        },
        {
          id: "cilm-u9-rev-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school trip costs $\\pounds18$ per student plus $\\pounds45$ coach hire. 30 students attend.",
          parts: [
            { label: "a", prompt: "Find total cost.", marks: 2 },
            { label: "b", prompt: "Find cost per student including coach share.", marks: 2 },
            { label: "c", prompt: "If cost rises $10\\%$, find new total.", marks: 2 },
            { label: "d", prompt: "What percentage saving if 5 students don't go?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed problems", statement: "Cost = per-person × n + fixed; percentages; per-capita calculations." },
            ],
            steps: [
              { part: "a", reasoning: "$18 \\times 30 + 45 = 540 + 45 = \\pounds585$.", working: "585", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac{585}{30} = \\pounds19.50$.", working: "19.50", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$585 \\times 1.10 = \\pounds643.50$.", working: "643.50", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "25 students: $18 \\times 25 + 45 = 495$; saving $= 585-495 = 90$; $\\frac{90}{585} \\times 100 \\approx 15.4\\%$.", working: "15.4%", marks: 1, markCode: "M" },
              { part: "d", reasoning: "New cost correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Percentage correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds585$ (b) $\\pounds19.50$ (c) $\\pounds643.50$ (d) $\\approx15.4\\%$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Percentage correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) forgetting coach hire stays fixed — only per-student cost changes."],
          },
        },
        {
          id: "cilm-u9-rev-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of $5x + 3 = 23$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=4$" },
              { id: "b", text: "$x=2$" },
              { id: "c", text: "$x=5$" },
              { id: "d", text: "$x=6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Linear equation", statement: "Subtract then divide by the coefficient." },
            ],
            steps: [
              { reasoning: "$5x=20$, so $x=4$.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
          },
        },
        {
          id: "cilm-u9-rev-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find $18\\%$ of $250$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage", statement: "Multiply by the percentage as a decimal." },
            ],
            steps: [
              { reasoning: "Convert $18\\%$ to $0.18$ and multiply by $250$.", working: "0.18\\times250", marks: 1, markCode: "M" },
              { reasoning: "The result is $45$.", working: "45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$",
          },
        },
        {
          id: "cilm-u9-rev-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Angles around a point add up to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$90^{\\circ}$" },
              { id: "b", text: "$360^{\\circ}$" },
              { id: "c", text: "$270^{\\circ}$" },
              { id: "d", text: "$180^{\\circ}$" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Angles at a point", statement: "A full turn is $360^{\\circ}$." },
            ],
            steps: [
              { reasoning: "Angles around a point complete a full turn.", working: "360", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $360^{\\circ}$",
          },
        },
        {
          id: "cilm-u9-rev-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The nth term of a sequence is $a_n=4n-1$. Find the 7th term.",
          response: { type: "numeric", parts: [{ label: "Term", answer: 27 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Substitution", statement: "Replace $n$ with the required position." },
            ],
            steps: [
              { reasoning: "Substitute $n=7$: $4(7)-1=27$.", working: "27", marks: 1, markCode: "M" },
              { reasoning: "The 7th term is $27$.", working: "27", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$27$",
          },
        },
        {
          id: "cilm-u9-rev-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "For the data $3, 7, 8, 12, 15$, what is the median?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7$" },
              { id: "b", text: "$45$" },
              { id: "c", text: "$9$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Median", statement: "Middle value of ordered data." },
            ],
            steps: [
              { reasoning: "The middle value is $8$.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8$",
          },
        },
        {
          id: "cilm-u9-rev-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "$\\pounds96$ is shared in the ratio $3:5$. What is the larger share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds60$" },
              { id: "b", text: "$\\pounds48$" },
              { id: "c", text: "$\\pounds72$" },
              { id: "d", text: "$\\pounds36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ratio sharing", statement: "One part is $96\\div8=12$; larger share is $5\\times12$." },
            ],
            steps: [
              { reasoning: "Total parts are $8$, so $5$ parts equal $60$.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\pounds60$",
          },
        },
        {
          id: "cilm-u9-rev-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the calculation $20 - 4 \\times 3$, which operation is done first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Addition" },
              { id: "b", text: "Multiplication" },
              { id: "c", text: "Subtraction" },
              { id: "d", text: "Division" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "BIDMAS", statement: "Multiplication precedes subtraction." },
            ],
            steps: [
              { reasoning: "$4\\times3=12$ is evaluated before subtracting.", working: "4\\times3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Multiplication",
          },
        },
        {
          id: "cilm-u9-rev-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A rectangular banner measures $2.4$ m by $90$ cm. Its border costs $\\pounds5$ per metre of perimeter. Find the border cost.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unit conversion", statement: "Convert all lengths before perimeter calculation." },
            ],
            steps: [
              { reasoning: "Convert $90$ cm to $0.9$ m.", working: "0.9", marks: 1, markCode: "M" },
              { reasoning: "Perimeter is $2(2.4+0.9)=6.6$ m.", working: "6.6", marks: 1, markCode: "M" },
              { reasoning: "Cost is $6.6\\times5=33$.", working: "33", marks: 1, markCode: "M" },
              { reasoning: "The border costs $\\pounds33$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds33$",
            commonErrors: ["Using $90$ m or forgetting perimeter doubles the sum."],
          },
        },
        {
          id: "cilm-u9-rev-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $\\pi\\approx\\frac{22}{7}$, find the radius of a circle with circumference $44$ cm.",
          response: { type: "numeric", parts: [{ label: "Radius", answer: 7, unit: "cm" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Circumference", statement: "$C=2\\pi r$." },
            ],
            steps: [
              { reasoning: "$44=2\\times\\frac{22}{7}\\times r$ gives $r=7$.", working: "r=7", marks: 1, markCode: "M" },
              { reasoning: "The radius is $7$ cm.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ cm",
          },
        },
        {
          id: "cilm-u9-rev-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which option is the better buy: $\\pounds3$ for $6$ apples or $\\pounds4.50$ for $10$ apples?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The first pack" },
              { id: "b", text: "Cannot tell" },
              { id: "c", text: "They are equal" },
              { id: "d", text: "The second pack" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unit price", statement: "Compare cost per apple." },
            ],
            steps: [
              { reasoning: "Unit prices are $0.50$ and $0.45$; the second is cheaper.", working: "0.45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The second pack",
          },
        },
        {
          id: "cilm-u9-rev-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A mobile phone plan costs $\\pounds12$ per month plus $\\pounds0.10$ per megabyte. A customer uses $250$ megabytes in a month and receives a $15\\%$ discount on the total bill. Find the amount paid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixed problem", statement: "Fixed cost + variable cost − percentage discount." },
            ],
            steps: [
              { reasoning: "Data cost is $250\\times0.10=25$.", working: "25", marks: 1, markCode: "M" },
              { reasoning: "Total before discount is $12+25=37$.", working: "37", marks: 1, markCode: "M" },
              { reasoning: "Discount is $0.15\\times37=5.55$.", working: "5.55", marks: 1, markCode: "M" },
              { reasoning: "Amount paid is $37-5.55=31.45$.", working: "31.45", marks: 1, markCode: "M" },
              { reasoning: "$\\pounds31.45$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds31.45$",
            commonErrors: ["Discounting only the fixed charge or only the data charge."],
          },
        },
        {
          id: "cilm-u9-rev-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $4(x-2)=3x+5$ and check your answer.",
          response: { type: "numeric", parts: [{ label: "x", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Equation", statement: "Expand, collect like terms and verify by substitution." },
            ],
            steps: [
              { reasoning: "Expand: $4x-8=3x+5$.", working: "4x-8=3x+5", marks: 1, markCode: "M" },
              { reasoning: "$x=13$; check $4(13-2)=44$ and $3(13)+5=44$.", working: "x=13", marks: 1, markCode: "M" },
              { reasoning: "The solution is $x=13$.", working: "13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=13$",
            commonErrors: ["Forgetting to expand the bracket correctly."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u9-problem-solving-notes",
      title: "Problem solving and review — revision notes",
      summary: "Multi-step strategy, exam technique, mixed problems.",
      sections: [
        {
          heading: "Strategy",
          body: "Understand → Plan → Execute → Check. Estimate first. Watch units. Show working for method marks.",
        },
        {
          heading: "Exam",
          body: "Time per question $=$ total $\\div$ questions. Skip and return. Check reasonableness. Verify all answers answered.",
        },
      ],
    },
  ],
};
