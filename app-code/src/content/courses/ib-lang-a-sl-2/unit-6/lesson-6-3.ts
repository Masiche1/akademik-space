import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "langa-u6-lesson-6-3",
  code: "6-3",
  title: "Reflection and Independent Learning",
  goal: "I CAN reflect on my learning, identify areas for improvement, and plan independent study.",
  standards: ["Reflection", "Independent learning", "Metacognition"],
  vocabulary: [
    { term: "Reflection", definition: "Thinking about one's own learning — what worked, what didn't, what to do differently." },
    { term: "Metacognition", definition: "Awareness and regulation of one's own thinking and learning processes." },
    { term: "Independent learning", definition: "Self-directed study — setting goals, choosing resources, monitoring progress." },
    { term: "Learning journal", definition: "A record of reflections, questions and progress over time." },
    { term: "Feedback", definition: "Information about performance that guides improvement — from teachers, peers or self." },
    { term: "Goal setting", definition: "Defining specific, measurable, achievable objectives for learning." },
  ],
  concepts: [
    {
      id: "langa-u6-reflection",
      title: "Reflective practice",
      skill: "Reflect on learning experiences to identify strengths, weaknesses and next steps.",
      lesson: {
        sections: [
          {
            heading: "What reflection is",
            body: "**Reflection** is not navel-gazing — it is structured thinking about learning. Ask: what did I do well? What did I struggle with? Why? What will I do differently? Reflection converts experience into learning.",
          },
          {
            heading: "The reflection cycle",
            body: "**Experience → Reflection → Conceptualisation → Application**: do something, think about it, draw a principle, apply it next time. A commentary that went badly is not a failure — it is data for the next attempt.",
          },
          {
            heading: "Keeping a learning journal",
            body: "A **learning journal** records reflections over time: what I tried, what happened, what I learned, what I'll do next. Patterns emerge — you may discover you always rush introductions or always avoid evaluation. The journal makes the invisible visible.",
          },
        ],
        keyFormulas: [
          { name: "Reflection questions", statement: "What worked? What didn't? Why? What next?" },
          { name: "Reflection cycle", statement: "Experience → Reflection → Conceptualisation → Application" },
        ],
        workedExample: {
          problem: "Your essay got a low mark for 'lack of evaluation'. How do you reflect?",
          solution: "Identify the pattern: I described features but never judged them. Principle: every analytical point needs an evaluative 'so what'. Next time: add a mini-judgement to each paragraph and check for it in review.",
        },
      },
      questions: [
        {
          id: "langa-u6-rq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective reflection asks:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Do I like this subject?" },
              { id: "b", text: "What worked, what didn't, and what I'll do differently" },
              { id: "c", text: "What grade did I get?" },
              { id: "d", text: "Was the task easy or hard?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection", statement: "What worked, what didn't, what next." },
            ],
            steps: [
              { reasoning: "Effective reflection identifies patterns and next steps.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What worked, what didn't, what next",
          },
        },
        {
          id: "langa-u6-rq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between reflection and self-criticism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection vs self-criticism", statement: "Reflection is analytical and forward-looking; self-criticism is emotional and backward-looking." },
            ],
            steps: [
              { reasoning: "Self-criticism: 'I'm bad at essays' — emotional, global, unhelpful.", marks: 1, markCode: "M" },
              { reasoning: "Reflection: 'My paragraphs lacked evaluation because I ran out of time — next time I'll allocate 2 minutes per paragraph for judgement.' — specific, analytical, actionable.", marks: 1, markCode: "M" },
              { reasoning: "Reflection converts experience into a principle; self-criticism just makes you feel bad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection is specific, analytical and forward-looking; self-criticism is global, emotional and unhelpful.",
            commonErrors: ["Confusing reflection with self-flagellation."],
          },
        },
        {
          id: "langa-u6-rq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You received feedback: 'Good analysis but weak structure.' Write a reflective journal entry (3-4 sentences) identifying the pattern and next step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal reflection", statement: "Pattern + principle + next step." },
            ],
            steps: [
              { reasoning: "Pattern: my analysis is strong but paragraphs feel disconnected — I analyse each point separately without linking them.", marks: 1, markCode: "M" },
              { reasoning: "Principle: every paragraph needs a link back to the thesis — 'this suggests', 'building on this', 'more significantly'.",
              marks: 1, markCode: "M" },
              { reasoning: "Next step: in my next essay, I'll write the thesis first, then ensure each topic sentence explicitly connects to it.", marks: 1, markCode: "M" },
              { reasoning: "Journal entry example: 'Feedback says my analysis is good but structure is weak. Pattern: paragraphs feel separate. Principle: each point must serve the thesis. Next: write thesis first, link every topic sentence to it.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Entry identifies pattern (disconnected paragraphs), principle (link to thesis), next step (thesis-first planning).",
            commonErrors: ["Journal entry that just restates the feedback without identifying pattern or next step."],
          },
        },
        {
          id: "langa-u6-rq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a two-week independent learning plan for improving your comparative writing, including goals, methods and reflection points.",
          extract: {
            title: "Two Crossings (extract)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.",
          },
          parts: [
            { label: "a", prompt: "Set three specific, measurable goals.", marks: 2 },
            { label: "b", prompt: "Describe your practice method for each goal.", marks: 3 },
            { label: "c", prompt: "Plan your reflection points (when and what you'll review).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Independent learning plan", statement: "Goals + methods + reflection = self-directed improvement." },
            ],
            steps: [
              { part: "a", reasoning: "Goal 1: write one comparative essay per week on unseen paired texts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Goal 2: reduce feature-spotting by 50% — every device must have an effect-explanation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method for Goal 1: 50-minute timed essays, self-marked against criteria, one per week.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method for Goal 2: after each essay, count device-identifications without effects; set a target to halve them.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method for Goal 3: record one oral commentary per week, listen back, note one improvement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection point 1: after each essay — what worked, what didn't, one principle for next time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection point 2: end of week 1 — review journal for patterns (e.g. 'I always rush introductions').", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection point 3: end of week 2 — compare first and last essays; identify improvement; set next goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals: weekly essays, less feature-spotting, weekly commentary. Methods: timed practice, device-counting, recording. Reflection: after each task, weekly review, final comparison.",
            commonErrors: ["Goals that aren't measurable; no reflection points; no method for each goal."],
          },
        },
        {
          id: "langa-u6-rq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The reflection cycle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Try, fail, try again" },
              { id: "b", text: "Plan, do, test, repeat" },
              { id: "c", text: "Experience → reflection → conceptualisation → application" },
              { id: "d", text: "Read, highlight, summarise, forget" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection cycle", statement: "Experience → Reflection → Conceptualisation → Application." },
            ],
            steps: [
              { reasoning: "The cycle converts experience into a principle applied next time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Experience → reflection → conceptualisation → application",
          },
        },
        {
          id: "langa-u6-rq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A learning journal is valuable mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is required for the diploma" },
              { id: "b", text: "It replaces teacher feedback" },
              { id: "c", text: "Patterns and habits become visible over time" },
              { id: "d", text: "It stores your grades" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Learning journal", statement: "Recording reflections makes invisible patterns visible." },
            ],
            steps: [
              { reasoning: "Single events mislead; patterns across entries reveal real habits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Patterns and habits become visible over time",
          },
        },
        {
          id: "langa-u6-rq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Reflection differs from self-criticism because reflection is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kinder to yourself" },
              { id: "b", text: "Done only after failure" },
              { id: "c", text: "Written rather than spoken" },
              { id: "d", text: "Specific, analytical and forward-looking rather than global and emotional" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection vs self-criticism", statement: "Reflection analyses causes and plans actions; self-criticism just judges." },
            ],
            steps: [
              { reasoning: "'I'm bad at essays' is global and unhelpful; 'my intros lack a thesis because I rush planning' is specific and actionable.", marks: 1, markCode: "M" },
              { reasoning: "Reflection ends with a next step; self-criticism ends with a feeling.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Specific, analytical and forward-looking",
          },
        },
        {
          id: "langa-u6-rq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 'principle' drawn from reflection should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary of what happened" },
              { id: "b", text: "A new goal for next week" },
              { id: "c", text: "A one-off fix for a single task" },
              { id: "d", text: "A generalisable lesson applicable to future work" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Principle extraction", statement: "Conceptualisation turns a specific experience into a transferable rule." },
            ],
            steps: [
              { reasoning: "A principle like 'every paragraph needs a link to the thesis' applies beyond one essay.", marks: 1, markCode: "M" },
              { reasoning: "A one-off fix or summary does not transfer.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** A generalisable lesson applicable to future work",
          },
        },
        {
          id: "langa-u6-rq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'what next?' question in reflection requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — reflection ends at analysis" },
              { id: "b", text: "Another grade prediction" },
              { id: "c", text: "A concrete action for the next attempt" },
              { id: "d", text: "A list of excuses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Actionable reflection", statement: "Reflection must end in a next step." },
            ],
            steps: [
              { reasoning: "Insight without action changes nothing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A concrete action for the next attempt",
          },
        },
        {
          id: "langa-u6-rq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Effective reflection on a poor performance focuses on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The teacher's marking" },
              { id: "b", text: "Process causes and actionable next steps, not global self-judgement" },
              { id: "c", text: "Your general ability" },
              { id: "d", text: "Blaming the task" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Process-focused reflection", statement: "Analyse what you did, not who you are." },
            ],
            steps: [
              { reasoning: "Process analysis ('I ran out of time for evaluation') is fixable; ability judgements are not.", marks: 1, markCode: "M" },
              { reasoning: "Blame and self-flagellation produce no improvement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Process causes and actionable next steps",
          },
        },
        {
          id: "langa-u6-rq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Write four questions you would ask yourself after delivering an oral commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection questions", statement: "What worked? What didn't? Why? What next?" },
            ],
            steps: [
              { reasoning: "Q1: 'What worked well in that delivery?' — identifies strengths to repeat.", marks: 1, markCode: "M" },
              { reasoning: "Q2: 'What didn't work?' — names the specific failure point.", marks: 1, markCode: "M" },
              { reasoning: "Q3: 'Why did that happen?' — finds the cause, not just the symptom.", marks: 1, markCode: "M" },
              { reasoning: "Q4: 'What will I do differently next time?' — converts insight into action.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "What worked, what didn't, why, and what I'll do differently — the four core reflection questions.",
            commonErrors: ["Questions that only seek reassurance rather than diagnosis."],
          },
        },
        {
          id: "langa-u6-rq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Reflect on a recent piece of work: identify one recurring pattern and the principle it suggests.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pattern recognition", statement: "Specific evidence → generalisable principle." },
            ],
            steps: [
              { reasoning: "Name the pattern specifically — e.g., 'my introductions never state a clear thesis'.", marks: 1, markCode: "M" },
              { reasoning: "Locate evidence — e.g., 'the last three essays opened with summary, not argument'.", marks: 1, markCode: "M" },
              { reasoning: "State the principle — 'every essay must open with a debatable claim, not a summary'.", marks: 1, markCode: "M" },
              { reasoning: "State the next-step action — 'before writing, draft the thesis sentence first'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pattern (specific, evidenced) → principle (general rule) → next step (concrete action).",
            commonErrors: ["Vague patterns like 'I need to try harder'; no evidence; no next step."],
          },
        },
        {
          id: "langa-u6-rq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Complete this learning-journal entry structure.",
          parts: [
            { label: "a", prompt: "What happened (facts only).", marks: 2 },
            { label: "b", prompt: "Pattern identified.", marks: 2 },
            { label: "c", prompt: "Principle and next step.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Journal entry structure", statement: "Facts → pattern → principle → action." },
            ],
            steps: [
              { part: "a", reasoning: "Example: 'Delivered a 5-minute commentary on an unseen poem; spent 4 minutes on imagery, 30 seconds on structure; forgot the synthesis.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Example: 'I default to whichever feature is easiest to spot and neglect the rest — imbalance is my recurring pattern.'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Principle: 'allocate preparation time per framework area before speaking'. Next step: 'time each section in the next two commentaries and check the split'.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Facts → evidenced pattern → general principle → concrete next step.",
            commonErrors: ["Mixing facts with feelings; patterns without evidence; principles without actions."],
          },
        },
        {
          id: "langa-u6-rq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Your grades have plateaued for a month. Write a reflective analysis of possible causes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagnosing plateau", statement: "Evidence → repeated weakness → method gap → targeted fix." },
            ],
            steps: [
              { reasoning: "Gather evidence: compare your three most recent essays/commentaries side by side.", marks: 1, markCode: "M" },
              { reasoning: "Look for repeated weaknesses — e.g., feature-spotting, weak synthesis, rushed introductions.", marks: 1, markCode: "M" },
              { reasoning: "Consider method gaps — no feedback loop, no timed practice, no review of exemplars.", marks: 1, markCode: "M" },
              { reasoning: "Consider effort allocation — practising what you're already good at instead of the weak area.", marks: 1, markCode: "M" },
              { reasoning: "Formulate one principle targeting the weakest link.", marks: 1, markCode: "M" },
              { reasoning: "Define a measurable next step and a review date to check progress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare work, find the repeated weakness, fix the method gap, target the weak area with a measurable step.",
            commonErrors: ["Assuming effort alone will break the plateau; no evidence gathering; no review date."],
          },
        },
        {
          id: "langa-u6-rq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Reflect on your performance analysing the following paired extract.",
          extract: {
            title: "Two Crossings (extract)",
            author: "Written for Akademik Space",
            source: "Original paired poems",
            text: "POEM A: The river took the bridge\nand gave it back at dawn —\na different bridge, they say,\nthough the carpenters insist\nit is the same.\n\nPOEM B: The old road ended\nat the river's edge.\nWe built a ferry instead —\ntwo planks and a rope.",
          },
          parts: [
            { label: "a", prompt: "What did your commentary do well?", marks: 3 },
            { label: "b", prompt: "What pattern of weakness appears?", marks: 2 },
            { label: "c", prompt: "What principle and next step follow?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance reflection", statement: "Strengths → evidenced weakness → principle → action." },
            ],
            steps: [
              { part: "a", reasoning: "Example: 'I identified the contrast between restoration (A) and improvisation (B) and anchored both to structure.'", marks: 3, markCode: "M" },
              { part: "b", reasoning: "Example: 'I spent most of the time on Poem A and treated Poem B as an afterthought — my comparison was unbalanced.'", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Principle: 'in comparison, allocate explicit time to each text before synthesising'. Next step: 'in the next paired commentary, note a timestamp for each poem and check the split'.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "Honest strengths, evidenced weakness, general principle and a timed next step.",
            commonErrors: ["Only listing weaknesses; no evidence; no concrete next step."],
          },
        },
        {
          id: "langa-u6-rq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Reflection is only useful after failure.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection claims", statement: "Reflection calibrates both success and failure." },
            ],
            steps: [
              { reasoning: "Reflection after success identifies what to repeat — success without analysis cannot be reliably replicated.", marks: 1, markCode: "M" },
              { reasoning: "A strong performance may contain lucky elements (a good extract, a responsive audience) that won't recur.", marks: 1, markCode: "M" },
              { reasoning: "Reflection is ongoing calibration, not just error correction.", marks: 1, markCode: "M" },
              { reasoning: "It also builds metacognitive awareness — knowing why you succeed is as valuable as knowing why you fail.", marks: 1, markCode: "M" },
              { reasoning: "Limiting reflection to failure wastes half the data.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: reflection is useful after every experience — success and failure alike.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection calibrates success as well as failure — analysing why things went well is as valuable as fixing what didn't.",
            commonErrors: ["Agreeing that only problems need analysis; ignoring replication of success."],
          },
        },
      ],
    },
    {
      id: "langa-u6-independent",
      title: "Independent learning",
      skill: "Plan and execute self-directed study for continued improvement.",
      lesson: {
        sections: [
          {
            heading: "Self-directed study",
            body: "**Independent learning** means taking ownership of your improvement. Set goals, choose resources, monitor progress, adjust methods. The teacher provides direction; you provide the discipline.",
          },
          {
            heading: "Resources and methods",
            body: "Use past papers, exemplar essays, literary criticism, and peer feedback. Analyse **why** exemplar essays score well — their structure, evidence, evaluation. Imitate the **process**, not just the product.",
          },
          {
            heading: "Beyond the course",
            body: "Read widely — poetry, fiction, drama, journalism. Notice how different writers handle the same themes. Keep a reading journal: quotes that strike you, questions they raise, connections to course texts. Independent reading is the deepest form of independent learning.",
          },
        ],
        keyFormulas: [
          { name: "Independent learning cycle", statement: "Goal → Resource → Practice → Feedback → Adjust" },
          { name: "Reading journal", statement: "Quotes + questions + connections = ongoing literary education" },
        ],
        workedExample: {
          problem: "You want to improve your comparative writing but don't know where to start.",
          solution: "Find two exemplar comparative essays; analyse their structure (thesis, paragraph pairing, conclusion); write your own on the same texts; compare. The gap between exemplar and yours reveals what to work on.",
        },
      },
      questions: [
        {
          id: "langa-u6-iq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Independent learning' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading without writing" },
              { id: "b", text: "Self-directed study with goals, resources and self-monitoring" },
              { id: "c", text: "Studying alone without guidance" },
              { id: "d", text: "Avoiding the teacher" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Independent learning", statement: "Self-directed study with structure." },
            ],
            steps: [
              { reasoning: "Independent learning is self-directed but structured — goals, resources, monitoring.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Self-directed study with structure",
          },
        },
        {
          id: "langa-u6-iq2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'imitate the process, not just the product' is good advice for using exemplar essays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exemplar analysis", statement: "Understanding how exemplars work is more valuable than copying their content." },
            ],
            steps: [
              { reasoning: "Copying an exemplar's content doesn't teach you to write — it teaches you to copy.", marks: 1, markCode: "M" },
              { reasoning: "Analysing the exemplar's process — how it structures the argument, pairs evidence, evaluates — teaches transferable skills.", marks: 1, markCode: "M" },
              { reasoning: "You can then apply the process to new texts; the content is specific, the process is universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Process is transferable; content is not. Analysing how exemplars work teaches skills you can apply anywhere.",
            commonErrors: ["Memorising exemplar content instead of analysing its method."],
          },
        },
        {
          id: "langa-u6-iq3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a reading journal system for tracking your literary education over the school year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading journal", statement: "Quotes + questions + connections = ongoing education." },
            ],
            steps: [
              { reasoning: "Structure: one page per text — bibliographic details, three quotes that struck you, one question each raises, one connection to a course text.", marks: 1, markCode: "M" },
              { reasoning: "Frequency: at least one entry per week — consistency matters more than volume.", marks: 1, markCode: "M" },
              { reasoning: "Review: monthly, look back for patterns — recurring themes, favourite authors, developing tastes.", marks: 1, markCode: "M" },
              { reasoning: "Purpose: the journal makes reading active — you notice what moves you, question what puzzles you, connect what resonates.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weekly entries: quotes, questions, connections. Monthly review for patterns. Purpose: active, reflective reading.",
            commonErrors: ["Journal that only summarises plots; no review of entries."],
          },
        },
        {
          id: "langa-u6-iq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a personal development plan for the rest of the course, including goals, methods and reflection points.",
          extract: {
            title: "The Machine (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The machine does not sleep.\nIt does not dream.\nIt does not ask\nwhy it was built.\n\nIt only hums\nits one note\nand waits\nfor the next instruction.",
          },
          parts: [
            { label: "a", prompt: "Set three goals for the remaining course.", marks: 3 },
            { label: "b", prompt: "Describe your method for achieving each goal.", marks: 3 },
            { label: "c", prompt: "Plan your reflection and review points.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Development plan", statement: "Goals + methods + reflection = self-directed improvement." },
            ],
            steps: [
              { part: "a", reasoning: "Goal 1: achieve consistent distinction-level essays — thesis-led, integrated, evaluative.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Goal 2: deliver confident 5-minute oral commentaries on unseen extracts.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Goal 3: maintain a weekly reading journal to build independent literary knowledge.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Method for Goal 1: weekly timed comparative essays, self-marked, one exemplar analysed per week.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method for Goal 2: weekly unseen-extract practice — 10 min prep, 5 min delivery, record and review.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Method for Goal 3: maintain reading journal — one entry per week, monthly pattern review.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection point 1: after each essay/commentary — what worked, what didn't, one principle for next time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reflection points 2-3: monthly journal review for patterns, and end-of-course comparison of first and last work to identify growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals: distinction essays, confident commentary, reading habit. Methods: weekly practice, recording, journaling. Reflection: after each task, monthly review, final comparison.",
            commonErrors: ["Goals too vague; no methods; no reflection points."],
          },
        },
        {
          id: "langa-u6-iq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The independent learning cycle is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy, paste, submit" },
              { id: "b", text: "Read, highlight, summarise, forget" },
              { id: "c", text: "Try, fail, try again" },
              { id: "d", text: "Goal → resource → practice → feedback → adjust" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Independent learning cycle", statement: "Goal → Resource → Practice → Feedback → Adjust." },
            ],
            steps: [
              { reasoning: "Self-directed study loops goal-setting with monitored practice and adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Goal → resource → practice → feedback → adjust",
          },
        },
        {
          id: "langa-u6-iq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reading journal should primarily record:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quotes, questions and connections" },
              { id: "b", text: "Plot summaries" },
              { id: "c", text: "Only favourite books" },
              { id: "d", text: "Page counts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading journal", statement: "Quotes + questions + connections = active literary education." },
            ],
            steps: [
              { reasoning: "Summaries are passive; quotes, questions and connections make reading active.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Quotes, questions and connections",
          },
        },
        {
          id: "langa-u6-iq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Reading literary criticism independently helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is easier than reading literature" },
              { id: "b", text: "Gives you quotations to memorise" },
              { id: "c", text: "Replaces the need for coursework" },
              { id: "d", text: "Exposes you to analytical language and critical perspectives you can adapt" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Literary criticism", statement: "Critics model analytical vocabulary and interpretive methods." },
            ],
            steps: [
              { reasoning: "Criticism demonstrates how analysts frame arguments and use technical language.", marks: 1, markCode: "M" },
              { reasoning: "You adapt the method, not copy the content.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Exposes you to analytical language and critical perspectives",
          },
        },
        {
          id: "langa-u6-iq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Wide independent reading improves your own writing because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gives you plots to copy" },
              { id: "b", text: "Replaces practice essays" },
              { id: "c", text: "Is required for the final exam" },
              { id: "d", text: "Exposes you to varied techniques, voices and treatments of theme" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Wide reading", statement: "Exposure to varied technique becomes available repertoire." },
            ],
            steps: [
              { reasoning: "You cannot use techniques you have never seen — wide reading builds the repertoire.", marks: 1, markCode: "M" },
              { reasoning: "Comparing treatments of the same theme sharpens your own analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Exposes you to varied techniques, voices and treatments of theme",
          },
        },
        {
          id: "langa-u6-iq9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Self-monitoring in independent learning means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tracking progress against goals and adjusting methods" },
              { id: "b", text: "Waiting for teacher feedback" },
              { id: "c", text: "Studying without any plan" },
              { id: "d", text: "Checking grades only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-monitoring", statement: "Track progress against goals; adjust when methods stall." },
            ],
            steps: [
              { reasoning: "Grades are outcomes; monitoring tracks the process toward them.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tracking progress against goals and adjusting methods",
          },
        },
        {
          id: "langa-u6-iq10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Past papers are valuable for independent study because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reveal assessment criteria and mark-scheme expectations" },
              { id: "b", text: "Are easier than real tasks" },
              { id: "c", text: "Replace the need to read the texts" },
              { id: "d", text: "Guarantee exam success" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Past-paper use", statement: "Past papers externalise the criteria you are being marked against." },
            ],
            steps: [
              { reasoning: "Mark schemes show exactly what examiners reward.", marks: 1, markCode: "M" },
              { reasoning: "Self-marking against criteria builds independent judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Reveal assessment criteria and mark-scheme expectations",
          },
        },
        {
          id: "langa-u6-iq11",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "List three resources for independent literary study and explain how each develops a different skill.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Independent resources", statement: "Different resources train different skills." },
            ],
            steps: [
              { reasoning: "Past papers → criteria awareness: learn what examiners reward.", marks: 1, markCode: "M" },
              { reasoning: "Exemplar essays → process imitation: analyse structure, evidence pairing and evaluation.", marks: 1, markCode: "M" },
              { reasoning: "Literary criticism → analytical vocabulary: absorb how critics frame arguments.", marks: 1, markCode: "M" },
              { reasoning: "Wide reading → technique exposure: build a repertoire of voices and methods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Past papers (criteria), exemplars (process), criticism (vocabulary), wide reading (technique).",
            commonErrors: ["Listing resources without linking each to a skill."],
          },
        },
        {
          id: "langa-u6-iq12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Design a focused 30-minute independent study session.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Study session design", statement: "Goal → practice → assess → reflect." },
            ],
            steps: [
              { reasoning: "Minutes 0-5: set one specific goal — e.g., 'write a thesis-led comparative paragraph'.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 5-20: deliberate practice — a timed mini-task targeting that goal.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 20-25: self-assess against criteria or an exemplar.", marks: 1, markCode: "M" },
              { reasoning: "Minutes 25-30: journal the result — what worked, what didn't, next goal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 min goal, 15 min targeted practice, 5 min self-assessment, 5 min reflection.",
            commonErrors: ["Unstructured 'study' with no goal; no assessment; no reflection."],
          },
        },
        {
          id: "langa-u6-iq13",
          difficulty: "core",
          totalMarks: 6,
          stem: "Design your reading-journal system.",
          parts: [
            { label: "a", prompt: "What you will record per entry.", marks: 2 },
            { label: "b", prompt: "How often and when you will review entries.", marks: 2 },
            { label: "c", prompt: "How entries connect to your course work.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading journal system", statement: "Entry structure + review rhythm + course connections." },
            ],
            steps: [
              { part: "a", reasoning: "Per entry: bibliographic details, three striking quotes, one question each raises, one connection to a course text.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One entry per week minimum; monthly review for patterns — recurring themes, favourite techniques, developing tastes.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Tag connections explicitly — 'this image recalls the debt imagery in our poem' — so reading feeds coursework.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Quotes+questions+connections per entry, weekly entries, monthly pattern review, explicit course links.",
            commonErrors: ["Plot summaries instead of quotes/questions; no review schedule; no course connections."],
          },
        },
        {
          id: "langa-u6-iq14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a three-week independent learning plan for the holidays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Holiday learning plan", statement: "Goals + scheduled practice + feedback + reflection." },
            ],
            steps: [
              { reasoning: "Set two measurable goals — e.g., 'complete three timed comparative essays' and 'read one poetry collection'.", marks: 1, markCode: "M" },
              { reasoning: "Schedule fixed weekly blocks — consistency beats intensity.", marks: 1, markCode: "M" },
              { reasoning: "Choose resources per goal — past papers for essays, a reading journal for the collection.", marks: 1, markCode: "M" },
              { reasoning: "Build in feedback — self-mark against criteria; swap one essay with a peer if possible.", marks: 1, markCode: "M" },
              { reasoning: "Plan reflection points — end of each week: what worked, what didn't, adjust.", marks: 1, markCode: "M" },
              { reasoning: "Include rest and variety — sustainable plans survive contact with reality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Two measurable goals, scheduled blocks, matched resources, built-in feedback and weekly reflection.",
            commonErrors: ["Vague goals ('read more'); no schedule; no feedback or reflection."],
          },
        },
        {
          id: "langa-u6-iq15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use the following extract for an independent study task.",
          extract: {
            title: "The Machine (extract)",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The machine does not sleep.\nIt does not dream.\nIt does not ask\nwhy it was built.\n\nIt only hums\nits one note\nand waits\nfor the next instruction.",
          },
          parts: [
            { label: "a", prompt: "Formulate one question the extract raises about technology.", marks: 2 },
            { label: "b", prompt: "Find and briefly summarise one external resource (article, poem, essay) on the theme.", marks: 3 },
            { label: "c", prompt: "Explain how the resource changes or deepens your reading of the extract.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Independent inquiry", statement: "Question → external resource → revised reading." },
            ],
            steps: [
              { part: "a", reasoning: "Example: 'Does the poem suggest technology lacks the questioning instinct that makes us human — or is that precisely what makes it dangerous?'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Example resource: a poem or essay on AI and creativity — summarised in two or three sentences with a citation.", marks: 3, markCode: "M" },
              { part: "c", reasoning: "Example: the resource frames the machine's 'one note' as pure function; against it, the extract's question 'why it was built' becomes the human counter-argument — technology without telos.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "A genuine question, one documented external resource, and a specific account of how it reshapes the reading.",
            commonErrors: ["Questions with obvious answers; unsourced resources; no link back to the extract."],
          },
        },
        {
          id: "langa-u6-iq16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'Independent learning means studying without teachers.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating independence claims", statement: "Independent ≠ isolated — structure and feedback still matter." },
            ],
            steps: [
              { reasoning: "Independent learning is self-direction, not isolation — teachers still provide direction and feedback.", marks: 1, markCode: "M" },
              { reasoning: "Self-directed study requires structure — goals, resources, monitoring — that direction helps provide.", marks: 1, markCode: "M" },
              { reasoning: "The course model: teacher provides direction; the student provides the discipline.", marks: 1, markCode: "M" },
              { reasoning: "Feedback from teachers and peers is part of the independent cycle — 'adjust' needs information.", marks: 1, markCode: "M" },
              { reasoning: "Studying without any guidance risks practising errors confidently.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: independent learning means owning your study — not excluding your teachers.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Independent learning is self-directed but structured — it uses teacher direction and feedback rather than replacing them.",
            commonErrors: ["Confusing independence with isolation; ignoring the feedback loop."],
          },
        },
      ],
    },
  ],
};
