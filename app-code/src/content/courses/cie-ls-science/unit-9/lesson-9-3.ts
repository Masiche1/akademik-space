import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cils-u9-lesson-9-3",
  code: "9-3",
  title: "Final review and exam techniques",
  goal: "I CAN apply all science knowledge to exam questions and practical assessment.",
  standards: ["0893 Science: final review"],
  vocabulary: [
    { term: "Markscheme", definition: "Guide showing how marks are awarded." },
    { term: "Evaluation", definition: "Critical assessment of method/results." },
    { term: "Reliability", definition: "Consistency of results on repeat." },
    { term: "Validity", definition: "Whether test measures what intended." },
    { term: "Uncertainty", definition: "Range of possible values for measurement." },
    { term: "Anomaly", definition: "Result that doesn't fit pattern — possible error." },
  ],
  concepts: [
    {
      id: "cils-u9-exam",
      title: "Exam technique",
      skill: "Apply exam strategies, interpret markschemes and manage time.",
      lesson: {
        sections: [
          {
            heading: "Reading questions",
            body: "Identify command words: describe, explain, calculate, evaluate, compare. Each needs different approach.",
          },
          {
            heading: "Markscheme awareness",
            body: "Marks allocated for specific points — include all required elements. 'Explain' needs mechanism, not just description.",
          },
          {
            heading: "Time management",
            body: "Answer all questions, spend time proportional to marks, review at end. Don't leave blanks.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Command words, markscheme points, time management." },
        ],
        workedExample: {
          problem: "'Explain' vs 'describe' difference?",
          solution: "Describe = state facts; explain = mechanism/reason why.",
        },
      },
      questions: [
        {
          id: "cils-u9-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'explain' require in exam answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinion" },
              { id: "b", text: "Just facts" },
              { id: "c", text: "Mechanism/reason" },
              { id: "d", text: "List only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Explain", statement: "Requires mechanism/reasoning." },
            ],
            steps: [
              { reasoning: "Explain = how/why, not just what.", working: "mechanism", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Mechanism/reason",
            commonErrors: ["Choosing (b) — that's describe."],
          },
        },
        {
          id: "cils-u9-exam-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three command words in science exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Command words", statement: "Describe, explain, calculate, evaluate, compare, state." },
            ],
            steps: [
              { reasoning: "Any three valid.", working: "words", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe, explain, calculate, evaluate, compare (any three).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cils-u9-exam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to answer 'evaluate' questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluate", statement: "Assess strengths/weaknesses, reliability, validity, improvements." },
            ],
            steps: [
              { reasoning: "Assess strengths and weaknesses of method/results.", working: "assessment", marks: 1, markCode: "M" },
              { reasoning: "Consider reliability (repeatable?) and validity (tests intended?).", working: "reliability/validity", marks: 1, markCode: "M" },
              { reasoning: "Suggest improvements — better controls, equipment, more repeats.", working: "improvements", marks: 1, markCode: "M" },
              { reasoning: "Evaluation balanced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Assess strengths/weaknesses, reliability, validity, improvements.",
            commonErrors: ["Just describing — need critical assessment."],
          },
        },
        {
          id: "cils-u9-exam-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Plan exam strategy.",
          parts: [
            { label: "a", prompt: "How to start the exam?", marks: 2 },
            { label: "b", prompt: "How to handle difficult questions?", marks: 2 },
            { label: "c", prompt: "How to use markschemes?", marks: 2 },
            { label: "d", prompt: "What to check at end?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam strategy", statement: "Read, plan, answer, review — systematic approach." },
            ],
            steps: [
              { part: "a", reasoning: "Read all questions, note marks, plan time allocation.", working: "start", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mark difficult ones, move on, return later.", working: "difficult", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Include all required points; explain needs mechanism not just facts.", working: "markscheme", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check units, complete all questions, review calculations, ensure explanations have mechanisms.", working: "check", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Thorough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) read/plan (b) mark/return (c) include points/mechanism (d) units/all questions/review",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple checks.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "d" },
            ],
            commonErrors: ["No time management — runs out."],
          },
        },
        {
          id: "cils-u9-exam-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the command word 'calculate' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An opinion" },
              { id: "b", text: "Only a definition" },
              { id: "c", text: "A numerical answer with working shown" },
              { id: "d", text: "A long written explanation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Command words", statement: "Calculate = numerical answer with working." },
            ],
            steps: [
              { reasoning: "Calculate needs a number and shown working.", working: "number+working", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A numerical answer with working shown",
            commonErrors: ["Giving only the answer — working earns marks."],
          },
        },
        {
          id: "cils-u9-exam-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A train travels $60$ m in $12$ s. Calculate its speed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$speed = \\frac{distance}{time}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{60}{12}$.", working: "60/12", marks: 1, markCode: "M" },
              { reasoning: "Correct speed with unit.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s",
            commonErrors: ["Inverting the formula."],
          },
        },
        {
          id: "cils-u9-exam-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how to allocate time during a science exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Time management", statement: "Spend time proportional to marks; answer easy questions first." },
            ],
            steps: [
              { reasoning: "Note marks per question and budget time accordingly.", working: "marks", marks: 1, markCode: "M" },
              { reasoning: "Answer easier questions first, mark difficult ones, review at end.", working: "order", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Budget time by marks; easy first; mark and return to hard questions; review at end.",
            commonErrors: ["Spending equal time on every question regardless of marks."],
          },
        },
        {
          id: "cils-u9-exam-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the command word 'compare' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both similarities and differences" },
              { id: "b", text: "Only differences" },
              { id: "c", text: "A definition" },
              { id: "d", text: "Only similarities" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Compare", statement: "Requires both similarities and differences." },
            ],
            steps: [
              { reasoning: "Compare = similarities AND differences.", working: "both", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Both similarities and differences",
            commonErrors: ["Listing only differences or only similarities."],
          },
        },
        {
          id: "cils-u9-exam-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A $4$ kg object experiences a force of $10$ N. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's second law", statement: "$F = ma$, so $a = F/m$." },
            ],
            steps: [
              { reasoning: "Use $a = \\frac{10}{4}$.", working: "10/4", marks: 1, markCode: "M" },
              { reasoning: "Correct acceleration with unit.", working: "2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5$ m/s²",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "cils-u9-exam-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "You must answer: 'Evaluate the method used in this photosynthesis experiment.' Describe your approach.",
          parts: [
            { label: "a", prompt: "Identify what 'evaluate' demands.", marks: 2 },
            { label: "b", prompt: "List the strengths of a good method.", marks: 2 },
            { label: "c", prompt: "List weaknesses or sources of error.", marks: 2 },
            { label: "d", prompt: "Describe how to conclude with improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluate", statement: "Critical judgement: strengths, weaknesses, reliability, validity, improvements." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluate = judge quality — not just describe.", working: "command", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Requirement clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "e.g. controlled variables, repeats, appropriate measurements.", working: "strengths", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Valid points.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "e.g. single trials, uncontrolled temperature, measurement uncertainty.", working: "weaknesses", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Valid weaknesses.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Conclude with judgement and suggest specific improvements.", working: "improvements", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Balanced conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) judge quality (b) strengths (c) weaknesses/errors (d) judgement + improvements",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Balanced.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Just describing the method — evaluation needs judgement."],
          },
        },
        {
          id: "cils-u9-exam-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What does the command word 'state' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An evaluation" },
              { id: "b", text: "A calculation" },
              { id: "c", text: "A detailed explanation" },
              { id: "d", text: "A brief factual answer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Command words", statement: "State = brief factual answer, no explanation needed." },
            ],
            steps: [
              { reasoning: "State = short factual response.", working: "brief", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A brief factual answer",
            commonErrors: ["Over-answering — extra detail is unnecessary but not penalised."],
          },
        },
        {
          id: "cils-u9-exam-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cube has a mass of $100$ g and a volume of $50$ cm³. Calculate its density.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "g/cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = \\frac{m}{V}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{100}{50}$.", working: "100/50", marks: 1, markCode: "M" },
              { reasoning: "Correct density with unit.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ g/cm³",
            commonErrors: ["Dividing volume by mass."],
          },
        },
        {
          id: "cils-u9-exam-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how to check your answers before submitting the exam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Review", statement: "Check units, completeness, calculations and explanations." },
            ],
            steps: [
              { reasoning: "Verify units on all calculations and answers in required form.", working: "units", marks: 1, markCode: "M" },
              { reasoning: "Ensure all questions attempted; review workings and explanations for missing points.", working: "complete", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check units, completeness, calculations and that explanations contain mechanisms.",
            commonErrors: ["Only checking spelling — technical checks matter more."],
          },
        },
        {
          id: "cils-u9-exam-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is it unwise to leave exam questions completely blank?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Examiners ignore blanks" },
              { id: "b", text: "A blank guarantees zero marks — a partial attempt may earn marks" },
              { id: "c", text: "It saves time for other students" },
              { id: "d", text: "Blank answers always get full marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Attempting", statement: "Partial answers can earn method and reasoning marks." },
            ],
            steps: [
              { reasoning: "Any attempt may score marks; blank scores zero.", working: "attempt", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A blank guarantees zero marks — a partial attempt may earn marks",
            commonErrors: ["Leaving blanks for 'difficult' questions — attempt anyway."],
          },
        },
        {
          id: "cils-u9-exam-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An object accelerates from $10$ m/s to $30$ m/s in $4$ s. Calculate its acceleration.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "m/s²" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Acceleration", statement: "$a = \\frac{v - u}{t}$." },
            ],
            steps: [
              { reasoning: "Use $a = \\frac{30 - 10}{4}$.", working: "(30-10)/4", marks: 1, markCode: "M" },
              { reasoning: "Correct acceleration with unit.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s²",
            commonErrors: ["Using $30 + 10$ or forgetting units."],
          },
        },
        {
          id: "cils-u9-exam-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Review exam technique for science.",
          parts: [
            { label: "a", prompt: "Explain how to interpret command words.", marks: 3 },
            { label: "b", prompt: "Describe how markschemes allocate marks.", marks: 2 },
            { label: "c", prompt: "Explain effective time management.", marks: 2 },
            { label: "d", prompt: "Describe a final-check routine.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam technique", statement: "Command words→mark points→time→review." },
            ],
            steps: [
              { part: "a", reasoning: "Describe=state facts; explain=mechanism; calculate=number+working; evaluate=judgement; compare=similarities+differences.", working: "commands", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiple words correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Marks for specific points — include all required elements for full marks.", working: "marks", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Budget by marks, easy first, mark difficult, review at end.", working: "time", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check units, completeness, calculations, mechanisms in explanations.", working: "check", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Thorough.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) command words (b) mark points (c) budget/easy-first (d) units/complete/review",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Commands correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Ignoring command words — answering 'describe' when 'explain' is asked."],
          },
        },
      ],
    },
    {
      id: "cils-u9-practical",
      title: "Practical assessment preparation",
      skill: "Prepare for practical exams and coursework assessment.",
      lesson: {
        sections: [
          {
            heading: "Practical skills",
            body: "Apparatus use, safety, measurements, recording, analysis. Know how to use: microscope, balance, thermometer, measuring cylinder.",
          },
          {
            heading: "Common experiments",
            body: "Photosynthesis (light/CO₂/temp), enzymes (temp/pH), electricity (V/I/R), forces (mass/acceleration), reactions (temperature/pH).",
          },
          {
            heading: "Assessment criteria",
            body: "Planning, implementation, analysis, evaluation. Show method, controls, data quality, conclusions.",
          },
        ],
        keyFormulas: [
          { name: "Practical", statement: "Planning→implementation→analysis→evaluation; apparatus skills; common experiments." },
        ],
        workedExample: {
          problem: "How to prepare for practical exam?",
          solution: "Know apparatus, practice experiments, understand variables, practise data analysis.",
        },
      },
      questions: [
        {
          id: "cils-u9-prac-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What apparatus measures temperature?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balance" },
              { id: "b", text: "Thermometer" },
              { id: "c", text: "Beaker" },
              { id: "d", text: "Ruler" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Thermometer", statement: "Measures temperature." },
            ],
            steps: [
              { reasoning: "Thermometer = temperature.", working: "thermometer", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Thermometer",
            commonErrors: ["Choosing (b) — balance measures mass."],
          },
        },
        {
          id: "cils-u9-prac-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two safety precautions in practicals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Safety", statement: "Goggles, gloves, heat protection, no eating/drinking." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "safety", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goggles, gloves, heat protection, no eating/drinking (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cils-u9-prac-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to measure accurately.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Measurement", statement: "Use appropriate apparatus, repeat readings, estimate uncertainty." },
            ],
            steps: [
              { reasoning: "Use correct apparatus for quantity.", working: "apparatus", marks: 1, markCode: "M" },
              { reasoning: "Repeat readings, average, estimate uncertainty.", working: "repeat", marks: 1, markCode: "M" },
              { reasoning: "Read at eye level, record units.", working: "technique", marks: 1, markCode: "M" },
              { reasoning: "Accurate measurement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Correct apparatus, repeat readings, estimate uncertainty, record units.",
            commonErrors: ["Single reading — need repeats for accuracy."],
          },
        },
        {
          id: "cils-u9-prac-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for practical assessment.",
          parts: [
            { label: "a", prompt: "Name key apparatus.", marks: 2 },
            { label: "b", prompt: "Describe common experiments.", marks: 3 },
            { label: "c", prompt: "Explain assessment criteria.", marks: 2 },
            { label: "d", prompt: "How to practise effectively?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practical prep", statement: "Apparatus, experiments, assessment criteria, practice." },
            ],
            steps: [
              { part: "a", reasoning: "Microscope, balance, thermometer, measuring cylinder, ruler.", working: "apparatus", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three+ correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Photosynthesis, enzymes, electricity, forces, reactions.", working: "experiments", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Planning, implementation, analysis, evaluation.", working: "criteria", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Practice experiments, review methods, time yourself.", working: "practice", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) apparatus (b) common experiments (c) planning→evaluation (d) practice/time",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Apparatus correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Multiple experiments.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "One-two.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Only theory — practical skills needed too."],
          },
        },
        {
          id: "cils-u9-prac-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which apparatus is used to measure the volume of a liquid accurately?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Balance" },
              { id: "b", text: "Measuring cylinder" },
              { id: "c", text: "Thermometer" },
              { id: "d", text: "Stopwatch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Measuring cylinder", statement: "Measures liquid volume in cm³/dm³." },
            ],
            steps: [
              { reasoning: "Measuring cylinder measures volume.", working: "cylinder", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Measuring cylinder",
            commonErrors: ["Choosing balance — that measures mass."],
          },
        },
        {
          id: "cils-u9-prac-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mass readings are $12.4$, $12.6$ and $12.5$ g. Calculate the mean mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 12.5, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum $\\div$ count." },
            ],
            steps: [
              { reasoning: "Sum $= 37.5$; divide by 3.", working: "37.5/3", marks: 1, markCode: "M" },
              { reasoning: "Correct mean with unit.", working: "12.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12.5$ g",
            commonErrors: ["Rounding too early or miscounting readings."],
          },
        },
        {
          id: "cils-u9-prac-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "List two safety precautions when heating substances in a practical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Safety", statement: "Goggles, heat-resistant mat, never leave heating unattended, point away from people." },
            ],
            steps: [
              { reasoning: "Any two valid precautions.", working: "safety", marks: 1, markCode: "M" },
              { reasoning: "Two correct precautions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wear goggles; use heat-resistant mat; never leave unattended; point tubes away (any two).",
            commonErrors: ["Only one precaution or vague 'be careful'."],
          },
        },
        {
          id: "cils-u9-prac-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "When reading the volume of liquid in a measuring cylinder, where should you read the meniscus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the side of the cylinder" },
              { id: "b", text: "At the top of the curve, from above" },
              { id: "c", text: "At the bottom of the curve, at eye level" },
              { id: "d", text: "Anywhere on the scale" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Meniscus", statement: "Read bottom of the curve at eye level to avoid parallax error." },
            ],
            steps: [
              { reasoning: "Bottom of meniscus at eye level.", working: "eye level", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** At the bottom of the curve, at eye level",
            commonErrors: ["Reading from above or below — causes parallax error."],
          },
        },
        {
          id: "cils-u9-prac-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student records masses of $20.5$ g and $20.7$ g for a sample. Calculate the mean mass.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20.6, unit: "g" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Mean", statement: "Mean = sum $\\div$ count." },
            ],
            steps: [
              { reasoning: "Sum $= 41.2$; divide by 2.", working: "41.2/2", marks: 1, markCode: "M" },
              { reasoning: "Correct mean with unit.", working: "20.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20.6$ g",
            commonErrors: ["Forgetting to divide by 2."],
          },
        },
        {
          id: "cils-u9-prac-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Plan a practical to test how temperature affects enzyme activity.",
          parts: [
            { label: "a", prompt: "Identify the variables.", marks: 2 },
            { label: "b", prompt: "Describe the apparatus and method.", marks: 2 },
            { label: "c", prompt: "Explain how to ensure a fair test.", marks: 2 },
            { label: "d", prompt: "Describe the safety precautions needed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practical planning", statement: "Variables→apparatus→fair test→safety." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: temperature; dependent: reaction rate (e.g. time for colour change); controlled: enzyme concentration, substrate, pH.", working: "variables", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Water baths at different temperatures, same enzyme/substrate volumes, timing reaction.", working: "method", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method clear.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Only temperature changes; all else identical; repeats for reliability.", working: "fair", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Goggles, care with hot water, no eating/drinking, clean spills.", working: "safety", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Appropriate precautions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) temp→rate (b) water baths+timing (c) one variable+repeats (d) goggles/hot water care",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clear.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["Changing multiple variables — unfair test."],
          },
        },
        {
          id: "cils-u9-prac-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is a water bath used instead of a direct flame when testing enzyme activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It allows accurate, controlled temperature" },
              { id: "b", text: "It is cheaper" },
              { id: "c", text: "It heats more quickly" },
              { id: "d", text: "It prevents all reactions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Temperature control", statement: "Water bath gives stable, accurate temperature — needed for valid enzyme tests." },
            ],
            steps: [
              { reasoning: "Water bath = controlled stable temperature.", working: "controlled", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It allows accurate, controlled temperature",
            commonErrors: ["Choosing (a) — control matters more than speed."],
          },
        },
        {
          id: "cils-u9-prac-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a photosynthesis experiment, $30$ oxygen bubbles are counted in $60$ seconds. Calculate the rate in bubbles per second.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5, unit: "bubbles/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$rate = \\frac{quantity}{time}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{30}{60}$.", working: "30/60", marks: 1, markCode: "M" },
              { reasoning: "Correct rate with unit.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$ bubbles/s",
            commonErrors: ["Multiplying instead of dividing, or wrong time unit."],
          },
        },
        {
          id: "cils-u9-prac-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how to handle anomalous results in an experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anomalies", statement: "Identify, check for error, repeat if needed; exclude only with justification." },
            ],
            steps: [
              { reasoning: "Spot results that don't fit the pattern and investigate possible causes.", working: "identify", marks: 1, markCode: "M" },
              { reasoning: "Repeat measurement; exclude anomaly only if a clear error is found — note it in evaluation.", working: "handle", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify anomalies, investigate cause, repeat if needed; exclude only with justification.",
            commonErrors: ["Silently deleting anomalies — must be justified and reported."],
          },
        },
        {
          id: "cils-u9-prac-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the best practice for recording data during a practical?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy data from another group" },
              { id: "b", text: "Only record the best results" },
              { id: "c", text: "Write results from memory at the end" },
              { id: "d", text: "Record immediately in a table with units" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording", statement: "Record immediately in organised tables with units and repeats." },
            ],
            steps: [
              { reasoning: "Immediate recording in tables with units is best practice.", working: "record", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Record immediately in a table with units",
            commonErrors: ["Delaying recording — leads to errors and lost data."],
          },
        },
        {
          id: "cils-u9-prac-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A length is measured as $20$ cm with an uncertainty of $\pm 0.5$ cm. Calculate the percentage uncertainty.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "method", name: "Percentage uncertainty", statement: "$\\frac{uncertainty}{reading} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{0.5}{20} \\times 100$.", working: "0.5/20 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct percentage.", working: "2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5\\%$",
            commonErrors: ["Using $\\pm 1$ cm or dividing incorrectly."],
          },
        },
        {
          id: "cils-u9-prac-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Prepare for the practical assessment.",
          parts: [
            { label: "a", prompt: "Name essential apparatus and its use.", marks: 3 },
            { label: "b", prompt: "Describe common practical experiments.", marks: 2 },
            { label: "c", prompt: "Explain the assessment criteria.", marks: 2 },
            { label: "d", prompt: "Describe an effective practice strategy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Practical prep", statement: "Apparatus→experiments→criteria→practice." },
            ],
            steps: [
              { part: "a", reasoning: "Microscope (cells), balance (mass), thermometer (temp), measuring cylinder (volume), ruler (length).", working: "apparatus", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiple correct.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Uses stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Photosynthesis, enzyme activity, V-I-R circuits, density, rates of reaction.", working: "experiments", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Planning, implementation, analysis, evaluation — show method, controls, data quality.", working: "criteria", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Practise experiments, review methods, time yourself, analyse past data.", working: "practice", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) apparatus+uses (b) common experiments (c) planning→evaluation (d) practice+timing",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Apparatus correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Only revising theory — hands-on skills are assessed too."],
          },
        },
      ],
    },
    {
      id: "cils-u9-final",
      title: "Final synthesis and confidence",
      skill: "Combine all science knowledge with confidence for assessment.",
      lesson: {
        sections: [
          {
            heading: "Complete syllabus coverage",
            body: "Working scientifically → cells → plants → human body → materials → energy → forces → electricity → Earth → ecosystems → integrated → exam skills. All Cambridge 0893 topics covered.",
          },
          {
            heading: "Key connections",
            body: "Energy flows through all systems. Matter cycles. Feedback regulates. Systems thinking unifies. Science is interconnected.",
          },
          {
            heading: "Exam readiness",
            body: "Know equations, understand concepts, practise explanations, manage time. Confidence comes from preparation.",
          },
        ],
        keyFormulas: [
          { name: "Final", statement: "Complete coverage + connections + preparation = exam success." },
        ],
        workedExample: {
          problem: "How to approach any science question?",
          solution: "Identify topic → recall concept → apply knowledge → explain mechanism → check units.",
        },
      },
      questions: [
        {
          id: "cils-u9-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main goal of this science course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understand science concepts and apply them" },
              { id: "b", text: "Memorise facts only" },
              { id: "c", text: "Skip practicals" },
              { id: "d", text: "Avoid exams" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Course goal", statement: "Understand + apply science." },
            ],
            steps: [
              { reasoning: "Understand concepts, apply to problems.", working: "understand+apply", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Understand science concepts and apply them",
            commonErrors: ["Choosing (b) — understanding > memorisation."],
          },
        },
        {
          id: "cils-u9-fin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name three key science themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Themes", statement: "Matter, energy, life — interconnected." },
            ],
            steps: [
              { reasoning: "Any three valid themes.", working: "themes", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Matter, energy, life; systems thinking; scientific method.",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cils-u9-fin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how to approach any science exam question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Approach", statement: "Identify topic → recall → apply → explain → check." },
            ],
            steps: [
              { reasoning: "Identify topic/command word.", working: "identify", marks: 1, markCode: "M" },
              { reasoning: "Recall relevant concepts/equations.", working: "recall", marks: 1, markCode: "M" },
              { reasoning: "Apply knowledge correctly, explain mechanism.", working: "apply", marks: 1, markCode: "M" },
              { reasoning: "Check units, completeness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify → recall → apply → explain → check.",
            commonErrors: ["Jumping to answer — need systematic approach."],
          },
        },
        {
          id: "cils-u9-fin-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Final exam preparation.",
          parts: [
            { label: "a", prompt: "Review key topics.", marks: 2 },
            { label: "b", prompt: "List key equations.", marks: 3 },
            { label: "c", prompt: "Describe exam strategy.", marks: 2 },
            { label: "d", prompt: "How to stay confident?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Final prep", statement: "Topics+equations+strategy+confidence." },
            ],
            steps: [
              { part: "a", reasoning: "All topics covered: foundations, bio, phys, chem, earth, integrated.", working: "topics", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "speed=d/t, a=(v-u)/t, F=ma, W=mg, p=F/A, V=IR, P=VI, E=Pt, pH.", working: "equations", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Six+ correct.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comprehensive.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read/plan/answer/review; easy first; show working.", working: "strategy", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Preparation builds confidence; practise, review, believe in understanding.", working: "confidence", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) all topics (b) key equations (c) read/plan/answer/review (d) preparation+practice",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Topics covered.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Six+ equations.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Cramming — need understanding, not memorisation."],
          },
        },
        {
          id: "cils-u9-fin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most reliable way to build confidence for a science exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoiding revision" },
              { id: "b", text: "Last-minute memorisation" },
              { id: "c", text: "Consistent preparation and practice" },
              { id: "d", text: "Guessing all answers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Confidence", statement: "Confidence comes from preparation and practice." },
            ],
            steps: [
              { reasoning: "Preparation and practice build genuine confidence.", working: "practice", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Consistent preparation and practice",
            commonErrors: ["Choosing (b) — cramming creates anxiety, not confidence."],
          },
        },
        {
          id: "cils-u9-fin-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A device uses energy at $5$ W for $20$ s. Calculate the total energy used.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, unit: "J" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Energy", statement: "$E = Pt$ (energy = power $\\times$ time)." },
            ],
            steps: [
              { reasoning: "Use $E = Pt = 5 \\times 20$.", working: "5 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Correct energy with unit.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$ J",
            commonErrors: ["Dividing power by time instead of multiplying."],
          },
        },
        {
          id: "cils-u9-fin-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Summarise how all the science topics in this course connect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synthesis", statement: "Matter, energy and life interact across all topics." },
            ],
            steps: [
              { reasoning: "Cells→organisms→ecosystems form a biological hierarchy.", working: "biology", marks: 1, markCode: "M" },
              { reasoning: "Energy flows through photosynthesis, food chains, body systems and heat loss.", working: "energy", marks: 1, markCode: "M" },
              { reasoning: "Matter cycles and reactions link chemistry; forces/electricity/waves are physics foundations.", working: "matter", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Biology hierarchy + energy flow + matter cycles + physical laws — all interconnected.",
            commonErrors: ["Listing topics without showing connections."],
          },
        },
        {
          id: "cils-u9-fin-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which equation gives density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\rho = mV$" },
              { id: "b", text: "$\\rho = \\frac{V}{m}$" },
              { id: "c", text: "$\\rho = \\frac{m}{V}$" },
              { id: "d", text: "$\\rho = \\frac{m}{A}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Density", statement: "$\\rho = \\frac{mass}{volume}$." },
            ],
            steps: [
              { reasoning: "Density = mass $\\div$ volume.", working: "m/V", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\rho = \\frac{m}{V}$",
            commonErrors: ["Inverting the formula."],
          },
        },
        {
          id: "cils-u9-fin-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An object moves $30$ m in $6$ s. Calculate its speed.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5, unit: "m/s" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$speed = \\frac{distance}{time}$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{30}{6}$.", working: "30/6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ m/s",
            commonErrors: ["Reversing distance and time."],
          },
        },
        {
          id: "cils-u9-fin-q10",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Describe your final exam preparation routine.",
          parts: [
            { label: "a", prompt: "How will you review the syllabus?", marks: 2 },
            { label: "b", prompt: "How will you practise exam questions?", marks: 2 },
            { label: "c", prompt: "How will you prepare the night before?", marks: 2 },
            { label: "d", prompt: "How will you approach exam day?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Preparation", statement: "Coverage→practice→rest→execution." },
            ],
            steps: [
              { part: "a", reasoning: "Review all topics, prioritise weak areas, use markschemes.", working: "review", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Valid approach.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Timed past papers, all question types, explain/evaluate practice.", working: "practice", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effective.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Light review, organise equipment, sleep early — avoid cramming.", working: "night", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Sound advice.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Arrive early, read questions, answer easy first, manage time, review at end.", working: "day", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Complete routine.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) topic review (b) timed practice (c) light review+sleep (d) read/easy-first/review",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Valid.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Effective.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Sound.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Poor.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Complete.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Cramming the night before — reduces performance."],
          },
        },
        {
          id: "cils-u9-fin-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is understanding concepts better than memorising facts for science exams?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understanding requires less effort" },
              { id: "b", text: "Understanding lets you apply knowledge to new questions" },
              { id: "c", text: "Memorisation is banned" },
              { id: "d", text: "Facts are never tested" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Understanding", statement: "Conceptual understanding enables application to unfamiliar contexts." },
            ],
            steps: [
              { reasoning: "Application questions require understanding, not recall.", working: "apply", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Understanding lets you apply knowledge to new questions",
            commonErrors: ["Thinking exams only test recall — many require application."],
          },
        },
        {
          id: "cils-u9-fin-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A circuit has a voltage of $12$ V and a resistance of $4$ Ω. Calculate the current.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "A" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Ohm's law", statement: "$V = IR$, so $I = V/R$." },
            ],
            steps: [
              { reasoning: "Use $I = \\frac{12}{4}$.", working: "12/4", marks: 1, markCode: "M" },
              { reasoning: "Correct current.", working: "3", marks: 1, markCode: "M" },
              { reasoning: "Correct unit.", working: "A", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ A",
            commonErrors: ["Multiplying V by R instead of dividing."],
          },
        },
        {
          id: "cils-u9-fin-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe positive habits to adopt on exam day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exam day", statement: "Sleep well, eat properly, arrive early, stay calm." },
            ],
            steps: [
              { reasoning: "Any two valid habits: sleep, breakfast, arrive early, read instructions.", working: "habits", marks: 1, markCode: "M" },
              { reasoning: "Two correct habits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sleep well, eat breakfast, arrive early, read questions carefully (any two).",
            commonErrors: ["Only one habit or irrelevant advice."],
          },
        },
        {
          id: "cils-u9-fin-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You are unsure between two MCQ answers. What is the best approach?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pick randomly without reading" },
              { id: "b", text: "Eliminate clearly wrong options, then choose the best-supported answer" },
              { id: "c", text: "Always pick the longest answer" },
              { id: "d", text: "Leave it blank" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "MCQ strategy", statement: "Elimination improves odds; choose based on evidence." },
            ],
            steps: [
              { reasoning: "Eliminate wrong options, choose best-supported remaining answer.", working: "eliminate", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Eliminate clearly wrong options, then choose the best-supported answer",
            commonErrors: ["Guessing blindly — elimination is more reliable."],
          },
        },
        {
          id: "cils-u9-fin-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A motor uses $150$ J of energy and produces $45$ J of useful output. Calculate its efficiency.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$efficiency = \\frac{useful}{total} \\times 100\\%$." },
            ],
            steps: [
              { reasoning: "Use $\\frac{45}{150} \\times 100$.", working: "45/150 \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Correct efficiency.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$",
            commonErrors: ["Inverting the ratio or omitting $\\times 100$."],
          },
        },
        {
          id: "cils-u9-fin-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Final synthesis: demonstrate complete science readiness.",
          parts: [
            { label: "a", prompt: "List the main topic areas covered.", marks: 3 },
            { label: "b", prompt: "Name the essential equations.", marks: 2 },
            { label: "c", prompt: "Describe the ideal exam strategy.", marks: 2 },
            { label: "d", prompt: "Explain how confidence supports performance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Final synthesis", statement: "Topics+equations+strategy+confidence = readiness." },
            ],
            steps: [
              { part: "a", reasoning: "Foundations, biology, physics, chemistry, earth science, ecosystems, integrated problems, exam skills.", working: "topics", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Comprehensive.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All areas.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$speed = d/t$, $a = (v-u)/t$, $F = ma$, $W = mg$, $p = F/A$, $\\rho = m/V$, $V = IR$, $P = VI$, $E = Pt$.", working: "equations", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Five+ correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Read/plan/answer easy first/show working/check units/review.", working: "strategy", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Confidence reduces anxiety, improves recall and allows clear thinking under pressure.", working: "confidence", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoned.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) all topics (b) key equations (c) read→easy→review (d) reduces anxiety",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All topics.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Equations.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reasoned.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Under-preparation — confidence requires genuine mastery."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u9-final-notes",
      title: "Final review — revision notes",
      summary: "Complete syllabus recap, exam techniques, confidence building.",
      sections: [
        {
          heading: "Course complete",
          body: "All Cambridge 0893 topics covered: foundations, biology, physics, chemistry, earth, ecosystems, integrated, exam skills.",
        },
        {
          heading: "Success formula",
          body: "Understand concepts + practise explanations + manage time + confidence through preparation.",
        },
      ],
    },
  ],
};
