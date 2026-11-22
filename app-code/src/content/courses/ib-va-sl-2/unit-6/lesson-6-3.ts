import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "va-u6-lesson-6-3",
  code: "6-3",
  title: "Reflective Commentary on Artistic Growth",
  goal: "I CAN write a reflective commentary documenting artistic development, challenges and learning for the DP assessment.",
  standards: [
    "Reflection",
    "Portfolio",
  ],
  vocabulary: [
    { term: "Reflective commentary", definition: "A written account of artistic development, process and learning for assessment." },
    { term: "Artistic development", definition: "The growth in skill, concept and confidence over time." },
    { term: "Challenge", definition: "A difficulty or obstacle encountered in the artistic process." },
    { term: "Breakthrough", definition: "A moment of significant progress or insight in artistic development." },
    { term: "Process documentation", definition: "Records — sketches, photos, notes — that evidence development over time." },
    { term: "Self-assessment", definition: "Honest evaluation of one's own work, progress and learning." },
  ],
  concepts: [
    {
      id: "va-u6-reflection-writing",
      title: "Writing reflective commentary",
      skill: "Write a reflective commentary that documents growth, analyses challenges and demonstrates learning.",
      lesson: {
        sections: [
          {
            heading: "Purpose of reflection",
            body: "The reflective commentary is not a diary — it is structured evidence of learning. It should show: what you set out to do, how your practice evolved, what challenges you faced, how you overcame them, and what you learned. Assessors look for evidence of critical thinking about your own development.",
          },
          {
            heading: "Documenting growth",
            body: "Use specific evidence: 'In September I could only draw contours; by March I was using value and composition confidently.' Compare early and recent work explicitly. Reference sketchbook pages, failed experiments and breakthroughs — the process matters as much as the product. Vague claims ('I improved a lot') fail; specific evidence succeeds.",
          },
          {
            heading: "Analysing challenges",
            body: "Don't hide failures — analyse them. 'My first mixed media piece failed because I didn't unify the palette; I learned to limit colours before combining materials.' Challenges demonstrate learning when analysed honestly. The best reflections show struggle, not just success.",
          },
        ],
        keyFormulas: [
          { name: "Reflection structure", statement: "Intention → process → challenges → breakthroughs → learning" },
          { name: "Evidence rule", statement: "Specific comparisons and examples, not vague claims" },
        ],
        workedExample: {
          problem: "A student writes: 'I got better at painting over the year.' Strengthen this reflection.",
          solution: "'In Unit 1 I painted thin, even washes; by Unit 3 I was layering glazes for depth. My first portrait failed because I didn't check proportions — I learned to measure before committing. In my final piece, the figure has convincing volume because I built value structure before colour.'",
        },
      },
      questions: [
        {
          id: "va-u6-reflection-writing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reflective commentary should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describe the school art room" },
              { id: "b", text: "List all artworks made" },
              { id: "c", text: "Praise the artist's talent" },
              { id: "d", text: "Document and analyse artistic growth and learning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflective commentary", statement: "Structured evidence of artistic development and learning." },
            ],
            steps: [
              { reasoning: "Reflective commentary documents and analyses artistic growth and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Document and analyse artistic growth and learning",
            commonErrors: [
              "Writing a diary or list rather than analytical reflection.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements a strong reflective commentary should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection elements", statement: "Growth evidence, challenge analysis and learning outcomes." },
            ],
            steps: [
              { reasoning: "Specific evidence of growth — comparisons between early and recent work.", marks: 1, markCode: "M" },
              { reasoning: "Honest analysis of challenges and how they were addressed.", marks: 1, markCode: "M" },
              { reasoning: "Clear statement of what was learned and future goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth evidence, challenge analysis and learning outcomes structure reflection.",
            commonErrors: [
              "Making vague claims without specific evidence.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why analysing failures is more valuable than only documenting successes in reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning from failure", statement: "Analysed failures demonstrate critical thinking and genuine learning." },
            ],
            steps: [
              { reasoning: "Successes show what works; failures show what was learned.", marks: 1, markCode: "M" },
              { reasoning: "Analysing why something failed develops critical self-awareness.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of learning from mistakes over polished narratives.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: honest struggle demonstrates growth better than success alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Analysed failures demonstrate learning and critical self-awareness.",
            commonErrors: [
              "Hiding failures or presenting only successes.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's reflective commentary.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Assess evidence specificity, challenge analysis and learning outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. specific examples, honest tone, references to process.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. vague claims, no challenge analysis, missing future goals — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reflection effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific comparisons, analysing a challenge, stating future goals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate reflection by evidence specificity, challenge analysis and learning outcomes.",
            commonErrors: [
              "Judging reflection by length or tone rather than analytical content.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A reflective commentary is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of all artworks made" },
              { id: "b", text: "A diary of daily events" },
              { id: "c", text: "Structured evidence of artistic development and learning" },
              { id: "d", text: "A biography of the artist" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflective commentary", statement: "Structured evidence of artistic development, process and learning." },
            ],
            steps: [
              { reasoning: "It documents and analyses growth, challenges and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Structured evidence of artistic development and learning",
            commonErrors: [
              "Writing a diary or inventory instead of analysis.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain why vague claims like 'I improved a lot' are weak in a reflective commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence rule", statement: "Specific comparisons and examples, not vague claims." },
            ],
            steps: [
              { reasoning: "Vague claims provide no evidence that growth occurred.", marks: 1, markCode: "M" },
              { reasoning: "Assessors cannot verify improvement without specific examples.", marks: 1, markCode: "M" },
              { reasoning: "Specific comparisons between early and recent work prove development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague claims fail; specific evidence of change is required.",
            commonErrors: [
              "Assuming self-assessment needs no supporting detail.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the strongest piece of reflection evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I like painting.'" },
              { id: "b", text: "'Art is really fun.'" },
              { id: "c", text: "'I worked very hard this year.'" },
              { id: "d", text: "'My March portrait shows accurate proportions, unlike my September attempt.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection evidence", statement: "Specific comparisons between works prove growth." },
            ],
            steps: [
              { reasoning: "Choice (b) cites a specific skill and compares two dated works.", marks: 1, markCode: "M" },
              { reasoning: "The other options are general feelings without evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 'My March portrait shows accurate proportions, unlike my September attempt.'",
            commonErrors: [
              "Confusing enthusiasm with evidence of development.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student should document artistic growth in a reflective commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Documenting growth", statement: "Compare early and recent work with specific evidence." },
            ],
            steps: [
              { reasoning: "Compare early and recent work explicitly, naming skills gained.", marks: 1, markCode: "M" },
              { reasoning: "Reference sketchbook pages, failed experiments and breakthroughs.", marks: 1, markCode: "M" },
              { reasoning: "Name specific concepts and techniques, not general impressions.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: process evidence makes growth verifiable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Explicit comparison of early vs recent work, supported by process records.",
            commonErrors: [
              "Describing only final pieces without process context.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analysing a challenge in a reflective commentary should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blaming the materials only" },
              { id: "b", text: "Skipping it entirely" },
              { id: "c", text: "What went wrong and what was learned from it" },
              { id: "d", text: "Hiding it to look more successful" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Challenge analysis", statement: "Honest analysis of failure demonstrates learning." },
            ],
            steps: [
              { reasoning: "Challenges must be analysed: cause, response and learning.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) captures the analysis requirement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** What went wrong and what was learned from it",
            commonErrors: [
              "Presenting only successes to appear more competent.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student writes only about successful pieces in their reflection. Explain what is missing and how to improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Honest reflection", statement: "Analysed struggle demonstrates learning better than success alone." },
            ],
            steps: [
              { reasoning: "There is no analysis of challenges or problem-solving.", marks: 1, markCode: "M" },
              { reasoning: "Growth appears unearned because obstacles are invisible.", marks: 1, markCode: "M" },
              { reasoning: "Assessors cannot see how the student responds to difficulty.", marks: 1, markCode: "M" },
              { reasoning: "Add an honest analysis of a specific failure and the response to it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: state what the challenge taught and how practice changed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add analysed challenges; success-only reflection lacks evidence of learning.",
            commonErrors: [
              "Believing polished narratives score higher than honest analysis.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The strongest reflective commentaries show:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technical jargon throughout" },
              { id: "b", text: "Only polished successes" },
              { id: "c", text: "Struggle, honest analysis and clear learning" },
              { id: "d", text: "Length without reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality of reflection", statement: "Struggle analysed honestly evidences genuine development." },
            ],
            steps: [
              { reasoning: "Strong reflections show obstacles and how they were overcome.", marks: 1, markCode: "M" },
              { reasoning: "Jargon and length do not substitute for insight.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Honesty about difficulty is itself evidence of critical thinking.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Struggle, honest analysis and clear learning",
            commonErrors: [
              "Equating a long commentary with a strong one.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain the difference between describing a process and reflecting on it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection vs description", statement: "Description reports what happened; reflection evaluates what it meant." },
            ],
            steps: [
              { reasoning: "Describing reports events: 'I sketched, then painted.'", marks: 1, markCode: "M" },
              { reasoning: "Reflecting evaluates: 'The sketches failed because proportions were unchecked, so I learned to measure first.'", marks: 1, markCode: "M" },
              { reasoning: "Reflection requires judgement about cause, effect and learning.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value reflection because it evidences critical self-awareness.", marks: 1, markCode: "R" },
              { reasoning: "Process description alone is a record, not analysis.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: combine records with evaluation for genuine reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description records events; reflection evaluates causes, effects and learning.",
            commonErrors: [
              "Listing process steps without evaluating them.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which structure best organises a reflective commentary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intention → process → challenges → breakthroughs → learning" },
              { id: "b", text: "Only grades achieved" },
              { id: "c", text: "Only the final artwork" },
              { id: "d", text: "Random order of thoughts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection structure", statement: "Intention, process, challenges, breakthroughs and learning form a coherent arc." },
            ],
            steps: [
              { reasoning: "The stated structure traces development logically from aim to learning.", marks: 1, markCode: "M" },
              { reasoning: "Random or partial structures cannot evidence growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "The arc mirrors how artists actually develop.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Intention → process → challenges → breakthroughs → learning",
            commonErrors: [
              "Organising reflection chronologically without analytical framing.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate this reflective statement: 'I really enjoyed this project and made some good paintings.'",
          parts: [
            { label: "a", prompt: "Identify two weaknesses.", marks: 2 },
            { label: "b", prompt: "Explain the effect on assessment evidence.", marks: 2 },
            { label: "c", prompt: "Rewrite it as a reflective statement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Assess specificity, challenge analysis and learning outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses: no specific evidence; no challenge or learning analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effect: provides no verifiable evidence of development.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect on assessment explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite includes specific comparison, challenge and learning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete reflective rewrite provided.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite is specific and evaluative, not just positive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replace enjoyment claims with specific evidence of growth and learning.",
            commonErrors: [
              "Equating positive tone with reflective quality.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Process documentation in a reflective commentary primarily provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proof of attendance" },
              { id: "b", text: "A grading curve" },
              { id: "c", text: "Evidence of thinking, experimentation and development" },
              { id: "d", text: "Marketing material" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Process evidence", statement: "Sketchbooks and photos evidence thinking and development." },
            ],
            steps: [
              { reasoning: "Process records show experimentation, decisions and growth over time.", marks: 1, markCode: "M" },
              { reasoning: "They let assessors verify claims made in the commentary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Documentation without reflection is incomplete; reflection without documentation is unverifiable.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Evidence of thinking, experimentation and development",
            commonErrors: [
              "Treating process documentation as optional decoration.",
            ],
          },
        },
        {
          id: "va-u6-reflection-writing-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a plan for a reflective commentary covering one artwork or project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Commentary planning", statement: "Plan intention, process, challenge, breakthrough, comparison and learning." },
            ],
            steps: [
              { reasoning: "State the original intention for the project.", marks: 1, markCode: "M" },
              { reasoning: "Document the main process stages with evidence.", marks: 1, markCode: "M" },
              { reasoning: "Analyse one challenge honestly: cause and response.", marks: 1, markCode: "M" },
              { reasoning: "Identify a breakthrough or key insight.", marks: 1, markCode: "M" },
              { reasoning: "Compare early and late stages of the work to show change.", marks: 1, markCode: "M" },
              { reasoning: "State what was learned and a future goal.", marks: 1, markCode: "R" },
              { reasoning: "Ensure every claim is supported by specific evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the plan follows the intention-to-learning arc.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intention → process → challenge → breakthrough → comparison → learning, all evidenced.",
            commonErrors: [
              "Planning only what to describe, not what to evaluate.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u6-portfolio-assessment",
      title: "Portfolio for assessment",
      skill: "Prepare a portfolio that meets DP visual arts assessment requirements and demonstrates sustained practice.",
      lesson: {
        sections: [
          {
            heading: "Assessment components",
            body: "The DP visual arts SL course assesses through: the **comparative study** (an essay comparing two artworks), the **exhibition** (a curated show of practical work), and the **reflective portfolio** (documentation of process and growth). The portfolio supports all three by evidencing sustained practice and development.",
          },
          {
            heading: "Portfolio requirements",
            body: "Include: a selection of finished works showing range and quality; sketchbook pages documenting process; photographic documentation of three-dimensional or temporary work; an artist statement explaining practice; and the reflective commentary. Ensure work is recent, represents current ability, and shows development over time.",
          },
          {
            heading: "Final preparation",
            body: "Review against criteria: Does the portfolio show range? Does it demonstrate growth? Is the work presented professionally? Are there gaps or weaknesses that need addressing? Seek feedback from teachers and peers before submission. The portfolio is your professional identity as an artist — curate it accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Assessment components", statement: "Comparative study + exhibition + reflective portfolio" },
          { name: "Portfolio checklist", statement: "Range + growth + process + documentation + statement" },
        ],
        workedExample: {
          problem: "A student has strong finished paintings but no sketchbook documentation. What should they add before submission?",
          solution: "Include 5–10 sketchbook spreads showing development of ideas, experiments and refinements for the exhibited works; add process photos for any 3D pieces; write a brief artist statement; ensure the reflective commentary references specific sketchbook evidence.",
        },
      },
      questions: [
        {
          id: "va-u6-portfolio-assessment-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The DP visual arts SL assessment includes which components?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written test on art history" },
              { id: "b", text: "Only a final exam" },
              { id: "c", text: "Only studio work" },
              { id: "d", text: "Comparative study, exhibition and reflective portfolio" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Comparative study, exhibition and reflective portfolio form the assessment." },
            ],
            steps: [
              { reasoning: "SL assessment comprises comparative study, exhibition and reflective portfolio.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Comparative study, exhibition and reflective portfolio",
            commonErrors: [
              "Assuming assessment is only practical or only written.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements a complete visual arts portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Finished works, process documentation, artist statement and reflective commentary." },
            ],
            steps: [
              { reasoning: "Selection of finished works showing range and quality.", marks: 1, markCode: "M" },
              { reasoning: "Process documentation — sketchbook pages, photographs of development.", marks: 1, markCode: "M" },
              { reasoning: "Artist statement and reflective commentary on growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Finished works, process documentation and written components complete the portfolio.",
            commonErrors: [
              "Submitting only finished pieces without process or documentation.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why process documentation strengthens a portfolio beyond finished works alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Process evidence", statement: "Sketchbooks and photos show thinking, experimentation and development." },
            ],
            steps: [
              { reasoning: "Finished works show product; process shows how the artist thinks and develops ideas.", marks: 1, markCode: "M" },
              { reasoning: "Documentation demonstrates sustained practice and critical engagement.", marks: 1, markCode: "M" },
              { reasoning: "Assessors can evaluate growth and decision-making only through process evidence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: process documentation is evidence of practice, not just product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Process documentation evidences thinking and development that finished works cannot show.",
            commonErrors: [
              "Assuming only polished finished pieces demonstrate ability.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's portfolio for DP assessment readiness.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest final improvements before submission.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, process evidence and presentation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. strong finished works, some process documentation, recent pieces.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. missing sketchbook evidence, inconsistent presentation, weak artist statement — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with assessment effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding process documentation, improving statement, ensuring consistent presentation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete final improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate portfolio by range, growth, process evidence and presentation.",
            commonErrors: [
              "Assessing portfolio only by the quality of finished pieces.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which element is essential in a DP visual arts portfolio?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Process documentation such as sketchbook pages" },
              { id: "b", text: "Only finished paintings" },
              { id: "c", text: "A curriculum vitae" },
              { id: "d", text: "Only photographs of work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio contents", statement: "Process documentation evidences practice and development." },
            ],
            steps: [
              { reasoning: "Sketchbooks and process records are required evidence of practice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Process documentation such as sketchbook pages",
            commonErrors: [
              "Assuming finished pieces alone satisfy portfolio requirements.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three things a visual arts portfolio should demonstrate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio criteria", statement: "Range, quality and growth are core criteria." },
            ],
            steps: [
              { reasoning: "Range: work across different media, approaches or ideas.", marks: 1, markCode: "M" },
              { reasoning: "Quality: work at the student's current best level.", marks: 1, markCode: "M" },
              { reasoning: "Growth: evidence of development over the course.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Range, quality and growth over time.",
            commonErrors: [
              "Listing materials used rather than qualities demonstrated.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Photographic documentation in a portfolio is especially important for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it is optional" },
              { id: "b", text: "Sketchbook pages only" },
              { id: "c", text: "All types of work equally" },
              { id: "d", text: "Three-dimensional or temporary work that cannot be shown directly" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Documentation", statement: "3D and temporary work must be photographed to be assessed." },
            ],
            steps: [
              { reasoning: "Sculpture, installation and performance cannot be submitted directly.", marks: 1, markCode: "M" },
              { reasoning: "Photographs are the standard means of preserving and presenting such work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Three-dimensional or temporary work that cannot be shown directly",
            commonErrors: [
              "Forgetting to document work that cannot be physically submitted.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q8",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the portfolio should include work from different stages of the course.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Development evidence", statement: "Work across time evidences sustained practice and growth." },
            ],
            steps: [
              { reasoning: "Early and recent work together demonstrate development over time.", marks: 1, markCode: "M" },
              { reasoning: "A range of stages shows experimentation with different approaches.", marks: 1, markCode: "M" },
              { reasoning: "It supports the growth claims made in the reflective commentary.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: staged work proves practice was sustained, not last-minute.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Work across stages evidences sustained practice and verifiable growth.",
            commonErrors: [
              "Submitting only the most recent pieces without earlier evidence.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "An artist statement in the portfolio should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explain the artist's practice, intentions and development" },
              { id: "b", text: "List every material used" },
              { id: "c", text: "Repeat the critical essay" },
              { id: "d", text: "Praise the school's art department" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Artist statement", statement: "The statement frames the practice and intentions behind the work." },
            ],
            steps: [
              { reasoning: "An artist statement articulates practice, intentions and development.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) matches this function.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Explain the artist's practice, intentions and development",
            commonErrors: [
              "Writing a materials list or biography instead of a statement of practice.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q10",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student submits only their three best pieces. Explain two problems with this and how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Portfolios need range, process evidence and representative work." },
            ],
            steps: [
              { reasoning: "Problem: no range — only three similar finished pieces.", marks: 1, markCode: "M" },
              { reasoning: "Problem: no process documentation or growth evidence.", marks: 1, markCode: "M" },
              { reasoning: "Assessors cannot evaluate practice, experimentation or development.", marks: 1, markCode: "M" },
              { reasoning: "Fix: add sketchbook spreads and process records for the exhibited works.", marks: 1, markCode: "R" },
              { reasoning: "Fix: include earlier and varied work showing range and current ability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add range, process documentation and development evidence — not just best pieces.",
            commonErrors: [
              "Assuming only the strongest pieces demonstrate ability.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The portfolio functions primarily as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The artist's professional identity and evidence of sustained practice" },
              { id: "b", text: "A diary of the school year" },
              { id: "c", text: "A storage container for artwork" },
              { id: "d", text: "A grade sheet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio purpose", statement: "The portfolio presents the artist's practice and development professionally." },
            ],
            steps: [
              { reasoning: "The portfolio represents the artist's professional identity.", marks: 1, markCode: "M" },
              { reasoning: "It evidences sustained practice across the course.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "It is curated evidence, not a container or record of grades.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** The artist's professional identity and evidence of sustained practice",
            commonErrors: [
              "Treating the portfolio as an archive rather than a curated presentation.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q12",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how the comparative study, the exhibition and the reflective portfolio interrelate in DP assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Assessment components", statement: "Written, practical and reflective components form one assessment." },
            ],
            steps: [
              { reasoning: "The comparative study analyses artworks theoretically through the critical essay.", marks: 1, markCode: "M" },
              { reasoning: "The exhibition presents curated practical work.", marks: 1, markCode: "M" },
              { reasoning: "The portfolio evidences process and growth supporting both.", marks: 1, markCode: "M" },
              { reasoning: "The reflective commentary ties development together across components.", marks: 1, markCode: "R" },
              { reasoning: "Together they show ability, practice and critical understanding.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: consistent evidence across all three strengthens the assessment profile.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Essay = analysis; exhibition = practical work; portfolio = process evidence; reflection unifies them.",
            commonErrors: [
              "Treating the three components as unrelated requirements.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Before submission, a student should review the portfolio against criteria of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Colour only" },
              { id: "b", text: "Size only" },
              { id: "c", text: "Range, growth, process evidence and presentation" },
              { id: "d", text: "The teacher's personal preference only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio review", statement: "Check range, growth, documentation and presentation before submitting." },
            ],
            steps: [
              { reasoning: "Review should cover all assessment-relevant criteria.", marks: 1, markCode: "M" },
              { reasoning: "Choice (b) lists the key review dimensions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Single-dimension checks miss gaps in evidence.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(c)** Range, growth, process evidence and presentation",
            commonErrors: [
              "Reviewing only the visual quality of finished pieces.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate this portfolio: strong paintings, but no sketchbook pages, no artist statement, and only work from the final month.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest final improvements before submission.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evaluation", statement: "Assess range, growth, process evidence, written components and presentation." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: strong finished paintings show current ability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: no process evidence; no statement; no development over time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects: growth and practice cannot be verified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add sketchbook documentation and process records.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Write an artist statement and include earlier work.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ensure consistent professional presentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strong product but missing process evidence, statement and development.",
            commonErrors: [
              "Judging the portfolio only by finished-piece quality.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Seeking peer and teacher feedback before submission helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is legally required" },
              { id: "b", text: "Replaces the need for reflection" },
              { id: "c", text: "Guarantees higher marks" },
              { id: "d", text: "Reveals gaps and presentation issues early" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Feedback", statement: "External review exposes weaknesses the creator cannot see." },
            ],
            steps: [
              { reasoning: "Fresh eyes identify gaps, errors and unclear presentation.", marks: 1, markCode: "M" },
              { reasoning: "It allows fixes before the deadline.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
              { reasoning: "Feedback improves quality but does not guarantee marks.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(d)** Reveals gaps and presentation issues early",
            commonErrors: [
              "Assuming feedback guarantees outcomes rather than improving them.",
            ],
          },
        },
        {
          id: "va-u6-portfolio-assessment-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a final checklist for portfolio submission.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Submission checklist", statement: "Verify range, recency, documentation, written components and presentation." },
            ],
            steps: [
              { reasoning: "Include a range of media, approaches or ideas.", marks: 1, markCode: "M" },
              { reasoning: "Ensure recent work represents current ability.", marks: 1, markCode: "M" },
              { reasoning: "Include sketchbook and process documentation.", marks: 1, markCode: "M" },
              { reasoning: "Write and include the artist statement.", marks: 1, markCode: "M" },
              { reasoning: "Check the reflective commentary references specific evidence.", marks: 1, markCode: "M" },
              { reasoning: "Ensure consistent, professional presentation throughout.", marks: 1, markCode: "R" },
              { reasoning: "Build in time for teacher and peer feedback before the deadline.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the checklist converts requirements into verifiable checks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Range + recency + process + statement + evidenced reflection + presentation + feedback.",
            commonErrors: [
              "Checking only artwork quality and forgetting written components.",
            ],
          },
        },
      ],
    },
  ],
};
