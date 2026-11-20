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
              { id: "a", text: "Understand what's being asked" },
              { id: "b", text: "Start calculating immediately" },
              { id: "c", text: "Write the answer down" },
              { id: "d", text: "Draw a diagram" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "3 minutes" },
              { id: "b", text: "10 minutes" },
              { id: "c", text: "30 minutes" },
              { id: "d", text: "1 minute" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Statistics" },
              { id: "b", text: "Algebra" },
              { id: "c", text: "Geometry" },
              { id: "d", text: "Number" },
            ],
            correctChoiceId: "a",
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
