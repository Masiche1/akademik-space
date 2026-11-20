import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "theatre-u6-lesson-6-3",
  code: "6-3",
  title: "Portfolio Development and Assessment Preparation",
  goal: "I CAN prepare a portfolio that meets DP theatre assessment requirements and demonstrates sustained theatrical development.",
  standards: [
    "Portfolio",
    "Assessment",
  ],
  vocabulary: [
    { term: "Portfolio", definition: "A curated collection of work documenting theatrical development." },
    { term: "Assessment", definition: "The evaluation of theatrical work against DP criteria." },
    { term: "Performance evidence", definition: "Recordings, logs and documentation of performances given." },
    { term: "Process documentation", definition: "Records of rehearsals, analysis and development." },
    { term: "Reflective commentary", definition: "Written account of theatrical growth and learning." },
    { term: "Professional presentation", definition: "Organised, labelled, accessible portfolio materials." },
  ],
  concepts: [
    {
      id: "theatre-u6-portfolio-assessment",
      title: "Portfolio for assessment",
      skill: "Prepare a theatre portfolio that meets DP assessment requirements and demonstrates sustained development.",
      lesson: {
        sections: [
          {
            heading: "Assessment components",
            body: "The DP theatre SL course assesses through: the **performance** (solo and ensemble work), the **collaborative project** (devised or scripted production), and the **reflective portfolio** (documentation of process and growth). The portfolio supports all components by evidencing sustained practice.",
          },
          {
            heading: "Portfolio requirements",
            body: "Include: performance recordings at different stages; script analysis and directorial notes; design contributions; written reflections; photographs of productions; a performance log; and a repertoire list. Ensure material is recent, represents current ability, and shows development.",
          },
          {
            heading: "Final preparation",
            body: "Review against criteria: Does the portfolio show range? Does it demonstrate growth? Is everything clearly labelled and organised? Are there gaps that need addressing? Seek feedback before submission. The portfolio is your professional theatrical identity — curate it accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Assessment components", statement: "Performance + collaborative project + reflective portfolio" },
          { name: "Portfolio checklist", statement: "Range + growth + documentation + organisation + reflection" },
        ],
        workedExample: {
          problem: "A student has strong recent performances but no early recordings or written analysis. What should they add?",
          solution: "Include any available early recordings to show growth; add script analyses and directorial notes from past productions; add reflective entries linking practice to improvement; ensure the performance log documents all productions. The portfolio needs to show the journey.",
        },
      },
      questions: [
        {
          id: "theatre-u6-portfolio-assessment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The DP theatre SL assessment includes which components?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a final performance exam" },
              { id: "b", text: "Performance, collaborative project and reflective portfolio" },
              { id: "c", text: "Only theatre history" },
              { id: "d", text: "A written essay only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Performance, collaborative project and reflective portfolio." },
            ],
            steps: [
              { reasoning: "SL assessment comprises performance, collaborative project and reflective portfolio.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Performance, collaborative project and reflective portfolio",
            commonErrors: [
              "Assuming assessment is only performance or only written.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements a complete theatre portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Recordings, performance log, written analysis and reflections." },
            ],
            steps: [
              { reasoning: "Performance recordings showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "Performance log documenting productions and roles.", marks: 1, markCode: "M" },
              { reasoning: "Written analyses and reflective entries documenting learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, performance log and written reflections complete the portfolio.",
            commonErrors: [
              "Submitting only performances without analysis or documentation.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the portfolio should show development rather than only best work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth documentation", statement: "Development evidence demonstrates learning and sustained practice." },
            ],
            steps: [
              { reasoning: "Best work alone shows talent; development shows learning.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of growth and critical engagement over raw ability.", marks: 1, markCode: "M" },
              { reasoning: "The journey demonstrates more than the destination.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: portfolio should evidence process, not just product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Development evidence demonstrates learning and sustained practice.",
            commonErrors: [
              "Showing only polished final work without growth context.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's theatre portfolio for assessment readiness.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest final improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes recordings, shows some growth, has written elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. missing early work, poor organisation, no reflections — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with assessment effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding growth evidence, improving organisation, adding reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete final improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate portfolio by range, growth, documentation, organisation and reflection.",
            commonErrors: [
              "Assessing portfolio only by performance quality, not documentation.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The reflective portfolio supports DP theatre assessment primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing the performance component" },
              { id: "b", text: "Evidencing sustained practice and growth across the course" },
              { id: "c", text: "Counting as the only mark" },
              { id: "d", text: "Listing stage equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "The portfolio supports all components by evidencing sustained practice." },
            ],
            steps: [
              { reasoning: "The portfolio evidences sustained practice and growth across the course.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Evidencing sustained practice and growth across the course",
            commonErrors: [
              "Assuming the portfolio replaces performance assessment.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of the following is NOT a typical component of a theatre portfolio?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performance recordings" },
              { id: "b", text: "A performance log" },
              { id: "c", text: "A stage lighting manual" },
              { id: "d", text: "Written reflections" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Recordings, performance log, analyses, design work and reflections." },
            ],
            steps: [
              { reasoning: "Equipment manuals are not theatrical work evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A stage lighting manual",
            commonErrors: [
              "Confusing equipment documentation with theatrical portfolio material.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Portfolio material should be selected to be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As old as possible" },
              { id: "b", text: "Recent, representative of current ability and showing development" },
              { id: "c", text: "Unlabelled" },
              { id: "d", text: "From only one production" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio requirements", statement: "Material should be recent, represent current ability and show development." },
            ],
            steps: [
              { reasoning: "Current, representative, development-showing material is required.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Recent, representative of current ability and showing development",
            commonErrors: [
              "Submitting outdated work that does not represent current ability.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A performance log contributes to a portfolio by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Documenting all productions and roles over time" },
              { id: "b", text: "Replacing written reflections" },
              { id: "c", text: "Listing ticket prices" },
              { id: "d", text: "Photographing the set" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance log", statement: "A record of productions, roles and experiences gained." },
            ],
            steps: [
              { reasoning: "The log documents productions and roles across time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Documenting all productions and roles over time",
            commonErrors: [
              "Confusing the log's documentary role with performance recordings.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Assessors particularly value evidence of development because it demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raw talent only" },
              { id: "b", text: "Learning, sustained engagement and critical reflection" },
              { id: "c", text: "Fame" },
              { id: "d", text: "Equipment quality" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth documentation", statement: "Development evidence demonstrates learning and sustained practice." },
            ],
            steps: [
              { reasoning: "Development evidence shows learning and engagement over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learning, sustained engagement and critical reflection",
            commonErrors: [
              "Assuming polished final work alone proves ability.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Before submitting a portfolio, a student should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Submit it immediately" },
              { id: "b", text: "Review it against assessment criteria and seek feedback" },
              { id: "c", text: "Delete all written work" },
              { id: "d", text: "Include only videos" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Final preparation", statement: "Review against criteria, check for gaps, and seek feedback before submission." },
            ],
            steps: [
              { reasoning: "Final review against criteria and feedback catch gaps before submission.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Review it against assessment criteria and seek feedback",
            commonErrors: [
              "Submitting without checking criteria or gaps.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name the three components of DP theatre SL assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Performance, collaborative project and reflective portfolio." },
            ],
            steps: [
              { reasoning: "The performance component (solo and ensemble work).", marks: 1, markCode: "M" },
              { reasoning: "The collaborative project (devised or scripted production).", marks: 1, markCode: "M" },
              { reasoning: "The reflective portfolio documenting process and growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Performance, collaborative project and reflective portfolio.",
            commonErrors: [
              "Omitting the portfolio or the collaborative project.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "List four elements a complete theatre portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio requirements", statement: "Recordings, analyses, design work, reflections, log and repertoire list." },
            ],
            steps: [
              { reasoning: "Performance recordings at different stages.", marks: 1, markCode: "M" },
              { reasoning: "Script analysis and directorial notes.", marks: 1, markCode: "M" },
              { reasoning: "Design contributions and photographs of productions.", marks: 1, markCode: "R" },
              { reasoning: "Written reflections, a performance log and a repertoire list.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, analyses, design work, reflections, log and repertoire list.",
            commonErrors: [
              "Including only performances without process documentation.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why portfolio material should be recent and show development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio requirements", statement: "Material should be recent, representative of current ability and show development." },
            ],
            steps: [
              { reasoning: "Recent material represents current ability, not outdated skill.", marks: 1, markCode: "M" },
              { reasoning: "Development evidence shows learning across the course.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value the journey of improvement over isolated peaks.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: recency plus development evidence makes the portfolio credible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recent work shows current ability; development evidence shows learning.",
            commonErrors: [
              "Submitting old work that no longer represents ability.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the portfolio supports the performance and collaborative project components of assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "The portfolio supports all components by evidencing sustained practice." },
            ],
            steps: [
              { reasoning: "Recordings and process notes evidence rehearsal and preparation for performances.", marks: 1, markCode: "M" },
              { reasoning: "Analyses and design work evidence the thinking behind collaborative production.", marks: 1, markCode: "M" },
              { reasoning: "The portfolio shows sustained engagement that single assessments cannot capture.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the portfolio contextualises and corroborates the other components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The portfolio evidences the process behind performance and collaborative work.",
            commonErrors: [
              "Treating the portfolio as unrelated to the other assessment components.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student reviews their portfolio against a checklist one week before submission.",
          parts: [
            { label: "a", prompt: "Check for range — what should the student verify?", marks: 2 },
            { label: "b", prompt: "Check for growth evidence — what should the student verify?", marks: 2 },
            { label: "c", prompt: "Check organisation and labelling — what should the student verify?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio checklist", statement: "Range + growth + documentation + organisation + reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Verify coverage across productions, roles and skill areas.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Range gaps are identified and addressed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Verify early-versus-recent comparisons and development notes exist.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Growth evidence is present and labelled.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verify every item has date, production, role labels and logical order.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Organisation is professional and gaps are noted for feedback.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Check range, growth evidence, and clear organisation and labels.",
            commonErrors: [
              "Checking only that files exist, not that criteria are met.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-assessment-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this portfolio for assessment readiness: it contains only three recent performance videos and nothing else.",
          parts: [
            { label: "a", prompt: "Identify one strength.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect on assessment.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, documentation, organisation and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: recent performances show current ability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The strength is correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: no growth evidence and no process documentation or reflection.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its assessment effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding earlier recordings, a performance log and written reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recent performances alone cannot evidence sustained development.",
            commonErrors: [
              "Assessing the portfolio only by performance quality.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u6-portfolio-curation",
      title: "Curation and presentation",
      skill: "Curate and present portfolio materials professionally to demonstrate theatrical development clearly.",
      lesson: {
        sections: [
          {
            heading: "Selection and organisation",
            body: "Select work that shows range and growth: not just best performances but representative development. Organise logically — chronologically to show growth, or by category (performance, analysis, production). Label everything clearly: dates, productions, roles. A portfolio is a professional document — presentation matters.",
          },
          {
            heading: "Digital and physical formats",
            body: "Digital portfolios allow video, audio and interactive elements — use them. Physical portfolios need professional presentation: clear labels, good printing, logical order. Consider both: digital for accessibility, physical for assessment. Backup everything — portfolios represent months of work.",
          },
          {
            heading: "Final review",
            body: "Before submission, review against criteria: Does the portfolio show range? Does it demonstrate growth? Is everything clearly labelled? Are there gaps? Seek feedback from teachers and peers. The portfolio is your professional theatrical identity — curate it accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Portfolio organisation", statement: "Chronological or categorical + clear labels + written context" },
          { name: "Presentation", statement: "Professional formatting signals serious theatrical practice" },
        ],
        workedExample: {
          problem: "A student has 30 performance recordings and must select for a portfolio. How should they choose?",
          solution: "Select ~10-15 recordings showing: technical growth (early vs late), range (different roles/productions), and best current work. Include one or two 'failures' with reflection if they show learning. Organise chronologically or by production. Label each with date, title, role.",
        },
      },
      questions: [
        {
          id: "theatre-u6-portfolio-curation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When curating a theatre portfolio, the most important criterion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Including every performance" },
              { id: "b", text: "Showing range and growth in theatrical development" },
              { id: "c", text: "Using professional cameras" },
              { id: "d", text: "Including only famous plays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Selection should demonstrate range and growth, not completeness." },
            ],
            steps: [
              { reasoning: "Portfolio selection should show range and growth, not include everything.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Showing range and growth in theatrical development",
            commonErrors: [
              "Including everything rather than curating selectively.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three ways to organise a theatre portfolio effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio organisation", statement: "Chronological, categorical and annotated organisation." },
            ],
            steps: [
              { reasoning: "Chronological — show growth over time.", marks: 1, markCode: "M" },
              { reasoning: "Categorical — group by performance, analysis, production.", marks: 1, markCode: "M" },
              { reasoning: "Annotated — label each item with date, context and brief reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chronological, categorical and annotated organisation are effective.",
            commonErrors: [
              "Disorganised portfolio with no clear structure.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why written reflections strengthen a theatre portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Written reflection", statement: "Written analysis shows thinking and learning that recordings alone cannot." },
            ],
            steps: [
              { reasoning: "Recordings show what happened; reflections show what was learned.", marks: 1, markCode: "M" },
              { reasoning: "Written analysis demonstrates critical thinking about performance.", marks: 1, markCode: "M" },
              { reasoning: "Reflections connect evidence to growth — they make development explicit.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: written components transform a collection into a narrative of learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Written reflections show learning and critical thinking beyond recordings.",
            commonErrors: [
              "Relying only on recordings without analytical context.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's portfolio organisation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating organisation", statement: "Assess selection, structure, labelling and written components." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes range, some organisation, has written elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. disorganised, poor labels, missing growth evidence — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests reorganising chronologically, improving labels, adding reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate organisation by selection, structure, labelling and written components.",
            commonErrors: [
              "Judging organisation only by quantity of materials.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Curation of a portfolio means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Including every piece of work" },
              { id: "b", text: "Selecting representative material that shows range and growth" },
              { id: "c", text: "Buying new equipment" },
              { id: "d", text: "Removing all written work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Selection should demonstrate range and growth, not completeness." },
            ],
            steps: [
              { reasoning: "Curation means selecting representative material showing range and growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Selecting representative material that shows range and growth",
            commonErrors: [
              "Confusing curation with completeness.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Organising a portfolio chronologically is useful because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hides early work" },
              { id: "b", text: "Makes growth over time visible" },
              { id: "c", text: "Is required by law" },
              { id: "d", text: "Reduces file size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio organisation", statement: "Chronological organisation shows growth over time." },
            ],
            steps: [
              { reasoning: "Chronological order makes development visible to the reader.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Makes growth over time visible",
            commonErrors: [
              "Organising randomly so growth cannot be seen.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Every item in a portfolio should be clearly labelled with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the student's name" },
              { id: "b", text: "Date, production or context, and role where relevant" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "The camera model" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Professional presentation", statement: "Label everything clearly: dates, productions, roles." },
            ],
            steps: [
              { reasoning: "Date, production/context and role labels make items traceable and comparable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Date, production or context, and role where relevant",
            commonErrors: [
              "Leaving items unlabelled so context is lost.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A digital portfolio has the advantage of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Being impossible to back up" },
              { id: "b", text: "Incorporating video, audio and interactive elements" },
              { id: "c", text: "Requiring no organisation" },
              { id: "d", text: "Excluding performances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Digital and physical formats", statement: "Digital portfolios allow video, audio and interactive elements." },
            ],
            steps: [
              { reasoning: "Digital formats support video, audio and interactive content.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Incorporating video, audio and interactive elements",
            commonErrors: [
              "Assuming digital means no organisation is needed.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Including one weaker performance with a written reflection can strengthen a portfolio because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lowers the overall mark" },
              { id: "b", text: "Demonstrates honest learning from experience" },
              { id: "c", text: "Is required by law" },
              { id: "d", text: "Saves space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio selection", statement: "Representative development — not just best work — is valued." },
            ],
            steps: [
              { reasoning: "A weaker performance plus reflection evidences learning and honesty.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demonstrates honest learning from experience",
            commonErrors: [
              "Believing only flawless work belongs in a portfolio.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Professional presentation of a physical portfolio matters because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Has no effect" },
              { id: "b", text: "Signals serious, organised theatrical practice" },
              { id: "c", text: "Is only decoration" },
              { id: "d", text: "Is optional" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Presentation", statement: "Professional formatting signals serious theatrical practice." },
            ],
            steps: [
              { reasoning: "Presentation communicates the student's professionalism and organisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Signals serious, organised theatrical practice",
            commonErrors: [
              "Treating presentation as irrelevant to assessment.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe two effective ways to organise a theatre portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio organisation", statement: "Chronological, categorical and annotated organisation." },
            ],
            steps: [
              { reasoning: "Chronological organisation shows growth over time.", marks: 1, markCode: "M" },
              { reasoning: "Categorical organisation groups material by type — performance, analysis, production.", marks: 1, markCode: "M" },
              { reasoning: "Annotated organisation adds labels and brief context to each item.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chronological, categorical and annotated organisation are effective.",
            commonErrors: [
              "Organising randomly with no clear structure.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the criteria for selecting which recordings to include in a portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio selection", statement: "Select for growth, range and current ability." },
            ],
            steps: [
              { reasoning: "Select recordings showing technical growth — early versus late work.", marks: 1, markCode: "M" },
              { reasoning: "Select recordings showing range — different roles and productions.", marks: 1, markCode: "M" },
              { reasoning: "Include the best current work to represent present ability.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a curated subset beats a complete dump of material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select for growth, range and current ability.",
            commonErrors: [
              "Selecting by quantity rather than by narrative value.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how portfolio items should be labelled and annotated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Professional presentation", statement: "Label everything clearly: dates, productions, roles." },
            ],
            steps: [
              { reasoning: "Each item carries a date and production or context.", marks: 1, markCode: "M" },
              { reasoning: "The student's role is noted where relevant.", marks: 1, markCode: "M" },
              { reasoning: "A brief annotation states what the item shows — skill, growth, design contribution.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clear labels and annotations make the portfolio professional and navigable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Date, production, role and a brief note on what each item demonstrates.",
            commonErrors: [
              "Labelling items with names only, without context.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the advantages and limitations of digital versus physical portfolios.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Digital and physical formats", statement: "Digital allows video and interactive elements; physical requires professional presentation." },
            ],
            steps: [
              { reasoning: "Digital portfolios can include video, audio and interactive elements and are easy to share.", marks: 1, markCode: "M" },
              { reasoning: "Digital requires reliable backups and compatible formats.", marks: 1, markCode: "M" },
              { reasoning: "Physical portfolios need professional printing, labels and logical order.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: many students maintain both — digital for accessibility, physical for assessment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Digital offers rich media and sharing; physical offers tangible presentation — often both are used.",
            commonErrors: [
              "Choosing a format without considering assessment requirements.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student has 30 performance recordings and must select material for a portfolio.",
          parts: [
            { label: "a", prompt: "State selection criteria for choosing recordings.", marks: 2 },
            { label: "b", prompt: "Propose an organisation plan for the selected items.", marks: 2 },
            { label: "c", prompt: "Explain how the selected items should be labelled.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Selection for growth and range; organisation and labelling for clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Criteria: technical growth, range of roles, and best current work.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Criteria are specific and justified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A plan: select roughly 10-15 recordings organised chronologically or by production.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The plan is logical and complete.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each recording is labelled with date, production, role and brief context.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Labelling enables comparison and professional presentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select ~10-15 for growth and range; organise chronologically; label fully.",
            commonErrors: [
              "Including all 30 recordings without curation.",
            ],
          },
        },
        {
          id: "theatre-u6-portfolio-curation-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this curation plan: 'I will put my newest performances first and label them properly.'",
          parts: [
            { label: "a", prompt: "Identify one strength.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating organisation", statement: "Assess selection, structure, labelling and written components." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: proper labelling shows professional presentation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The strength is correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: newest-first hides growth and selection criteria are unstated.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its portfolio effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests chronological ordering and selecting for range and growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Labelling helps, but ordering and selection must evidence growth.",
            commonErrors: [
              "Judging curation only by labelling quality.",
            ],
          },
        },
      ],
    },
  ],
};
