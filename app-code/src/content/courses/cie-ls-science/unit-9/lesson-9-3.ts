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
              { id: "a", text: "Mechanism/reason" },
              { id: "b", text: "Just facts" },
              { id: "c", text: "Opinion" },
              { id: "d", text: "List only" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "Thermometer" },
              { id: "b", text: "Balance" },
              { id: "c", text: "Ruler" },
              { id: "d", text: "Beaker" },
            ],
            correctChoiceId: "a",
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
              { id: "c", text: "Avoid exams" },
              { id: "d", text: "Skip practicals" },
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
