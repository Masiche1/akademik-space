import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "va-u3-lesson-3-3",
  code: "3-3",
  title: "Reflective Practice and Portfolio Development",
  goal: "I CAN reflect critically on my own artistic development and manage a portfolio that documents growth.",
  standards: ["Reflection", "Studio Practice"],
  vocabulary: [
    { term: "Reflection", definition: "Critical examination of one's own work and process to identify strengths, weaknesses and growth." },
    { term: "Portfolio", definition: "A curated collection of artworks or documentation representing an artist's development and achievement." },
    { term: "Artist statement", definition: "A written text explaining an artist's practice, intentions and context for viewers." },
    { term: "Documentation", definition: "Photographs, notes or records that preserve process and context for works that are temporary or performative." },
    { term: "Growth mindset", definition: "The belief that ability develops through effort and feedback rather than fixed talent." },
    { term: "Critique", definition: "A structured process of presenting work and receiving feedback from peers or teachers." },
  ],
  concepts: [
    {
      id: "va-u3-reflective-practice",
      title: "Reflective practice",
      skill: "Use structured reflection to identify what worked, what didn't and how to improve future work.",
      lesson: {
        sections: [
          { heading: "What reflection is", body: "Reflection is not self-criticism or praise — it is honest analysis of process and product. Effective reflection asks: what was I trying to do? What worked? What didn't? Why? What will I do differently? Reflection happens during work (sketchbook notes) and after (written reviews, critiques)." },
          { heading: "Structuring reflection", body: "Use prompts: describe the work objectively first; then analyse what succeeded and failed technically and conceptually; then connect to intention — did the work do what I meant? Finally, set one specific, actionable goal for next time. Vague resolutions ('be better') fail; specific ones ('use value study before colour') work." },
          { heading: "Reflection and growth", body: "Regular reflection accelerates development: it converts mistakes into information. Comparing early and recent work reveals progress invisible day-to-day. Artists who reflect consistently develop faster because they learn from each piece rather than repeating errors." },
        ],
        keyFormulas: [
          { name: "Reflection prompts", statement: "What did I intend? What worked? What didn't? Why? What next?" },
          { name: "Specific goal", statement: "One actionable improvement for the next work" },
        ],
        workedExample: {
          problem: "A student finishes a painting and writes: 'It didn't turn out well.' Turn this into structured reflection.",
          solution: "Objective: the painting has muddy middle values and a static composition. Analysis: I skipped the value sketch and placed the focal point at dead centre. Intention: I wanted drama but achieved flatness. Next: do a value study first and use rule-of-thirds placement.",
        },
      },
      questions: [
        {
          id: "va-u3-reflective-practice-q1", difficulty: "foundation", totalMarks: 2,
          stem: "Effective artistic reflection primarily involves:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Praising your best work" },
            { id: "b", text: "Comparing yourself to famous artists" },
            { id: "c", text: "Listing materials used" },
            { id: "d", text: "Analysing process and product to identify improvement" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflection", statement: "Critical analysis of process and product to guide improvement." }],
            steps: [
              { reasoning: "Reflection analyses what worked, what didn't and why, to improve future work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Analysing process and product to identify improvement",
            commonErrors: ["Confusing reflection with self-criticism or praise."],
          },
        },
        {
          id: "va-u3-reflective-practice-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe three prompts a student could use for structured reflection on a finished artwork.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection prompts", statement: "Intention, outcome, analysis and next steps structure reflection." }],
            steps: [
              { reasoning: "What was I trying to achieve, and did the work accomplish it?", marks: 1, markCode: "M" },
              { reasoning: "What specifically worked and what didn't, technically and conceptually?", marks: 1, markCode: "M" },
              { reasoning: "What is one specific thing I will do differently next time?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intention, analysis of outcomes and a specific next step structure reflection.",
            commonErrors: ["Reflecting vaguely without specific prompts or outcomes."],
          },
        },
        {
          id: "va-u3-reflective-practice-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why specific goals are more useful than vague resolutions in artistic reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Specific goals", statement: "Concrete actions can be executed; vague intentions cannot be measured." }],
            steps: [
              { reasoning: "Vague goals like 'improve my drawing' cannot be acted on or verified.", marks: 1, markCode: "M" },
              { reasoning: "Specific goals like 'do a value study before colour' are executable and checkable.", marks: 1, markCode: "M" },
              { reasoning: "Specificity allows the next work to test whether the improvement worked.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reflection should end in an actionable experiment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific goals are executable and verifiable; vague ones are not.",
            commonErrors: ["Setting resolutions that cannot be measured or acted upon."],
          },
        },
        {
          id: "va-u3-reflective-practice-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate a piece of reflection on a student's artwork.",
          parts: [
            { label: "a", prompt: "Identify what the reflection does well.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the reflection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating reflection", statement: "Good reflection is specific, honest and ends in action." }],
            steps: [
              { part: "a", reasoning: "Identifies a strength, e.g. it attempts honesty or names a problem.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses, e.g. vague language, no specific next step, self-blame without analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reference to reflective practice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific evidence, balanced analysis and an actionable goal.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate reflection by specificity, honesty, analysis and actionable next steps.",
            commonErrors: ["Judging reflection on tone rather than analytical content."],
          },
        },
        {
          id: "va-u3-reflective-practice-q5", difficulty: "foundation", totalMarks: 2,
          stem: "A reflection that asks 'what will I do differently next time?' is focused on:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Improving future work" },
            { id: "b", text: "Comparing fame" },
            { id: "c", text: "Praising finished work" },
            { id: "d", text: "Listing materials used" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Reflection purpose", statement: "Reflection converts analysis into improved future practice." }],
            steps: [
              { reasoning: "Asking what to do differently targets future improvement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Improving future work",
            commonErrors: ["Confusing reflection with retrospective praise."],
          },
        },
        {
          id: "va-u3-reflective-practice-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Explain what answering 'what worked?' means in structured reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection prompts", statement: "Identify successes technically and conceptually, grounded in the actual work." }],
            steps: [
              { reasoning: "Identify technical or conceptual successes in the work.", marks: 1, markCode: "M" },
              { reasoning: "Ground them in specific evidence from the piece.", marks: 1, markCode: "M" },
              { reasoning: "Link them to whether the work achieved its intention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'What worked?' means identifying specific successes and linking them to intention.",
            commonErrors: ["Listing vague positives without evidence."],
          },
        },
        {
          id: "va-u3-reflective-practice-q7", difficulty: "core", totalMarks: 2,
          stem: "The most effective artistic goal in reflection is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"Be a better artist\"" },
            { id: "b", text: "\"Try harder\"" },
            { id: "c", text: "\"Complete a value study before starting the colour layer\"" },
            { id: "d", text: "\"Make it prettier\"" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Specific goals", statement: "Concrete actions can be executed and verified; vague intentions cannot." }],
            steps: [
              { reasoning: "Only choice (b) is specific, executable and checkable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** \"Complete a value study before starting the colour layer\"",
            commonErrors: ["Choosing vague resolutions that cannot be acted on."],
          },
        },
        {
          id: "va-u3-reflective-practice-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain how comparing early and recent work supports artistic reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Growth visibility", statement: "Comparison across time makes development visible that daily work hides." }],
            steps: [
              { reasoning: "Day-to-day work hides progress; comparison across months reveals it.", marks: 1, markCode: "M" },
              { reasoning: "It shows which approaches, techniques or ideas have improved.", marks: 1, markCode: "M" },
              { reasoning: "This evidence informs realistic goals for future work.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparison converts vague effort into visible growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Comparing early and recent work reveals progress and directs future goals.",
            commonErrors: ["Comparing works without drawing conclusions for practice."],
          },
        },
        {
          id: "va-u3-reflective-practice-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Recording reflection notes during the making process is valuable because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "It captures decisions and problems while they are fresh" },
            { id: "b", text: "It is quicker to produce" },
            { id: "c", text: "It is decorative" },
            { id: "d", text: "It replaces finished work" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "In-process reflection", statement: "Notes during making preserve reasoning that fades after completion." }],
            steps: [
              { reasoning: "In-process notes capture live decisions and problems before memory fades.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It captures decisions and problems while they are fresh",
            commonErrors: ["Believing reflection can only happen after completion."],
          },
        },
        {
          id: "va-u3-reflective-practice-q10", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate a student's reflection on a print they have just finished.",
          parts: [
            { label: "a", prompt: "The student writes: 'The ink didn't cover properly and the composition is boring. I hate printmaking. I will try again next week.' Identify what this reflection does well.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Rewrite it as structured reflection ending in a specific goal.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating reflection", statement: "Good reflection is specific, honest, analytical and ends in action." }],
            steps: [
              { part: "a", reasoning: "Strength identified, e.g. it honestly names problems (ink coverage, composition).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses: self-blame without analysis, vague resolution 'try again'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained: no cause analysis, no actionable step.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite adds objective description, cause analysis and specific goal, e.g. 'test ink coverage on a proof before final pull'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete, structured improvement produced.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Honest problem-naming. (b) No analysis, vague resolution. (c) Structured rewrite with specific goal.",
            commonErrors: ["Judging reflection on emotional tone rather than analytical content."],
          },
        },
        {
          id: "va-u3-reflective-practice-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A 'growth mindset' in artistic practice means believing that:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Skill develops through effort, practice and feedback" },
            { id: "b", text: "Talent is fixed at birth" },
            { id: "c", text: "Mistakes prove you cannot draw" },
            { id: "d", text: "Only geniuses make art" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Growth mindset", statement: "Ability develops through effort and feedback rather than fixed talent." }],
            steps: [
              { reasoning: "Growth mindset treats skill as developable through effort and feedback.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Skill develops through effort, practice and feedback",
            commonErrors: ["Confusing growth mindset with fixed-talent beliefs."],
          },
        },
        {
          id: "va-u3-reflective-practice-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Give an example of a specific, actionable goal for your next artwork and explain why it is effective.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Specific goals", statement: "Concrete, checkable actions drive improvement; vague ones do not." }],
            steps: [
              { reasoning: "Goal stated specifically, e.g. 'thumbnail three compositions before committing'.", marks: 1, markCode: "M" },
              { reasoning: "Explains what will be done differently next time.", marks: 1, markCode: "M" },
              { reasoning: "Explains verifiability — the next work can test whether it worked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any specific executable goal with an explanation of how it can be checked.",
            commonErrors: ["Giving vague goals like 'improve my art'."],
          },
        },
        {
          id: "va-u3-reflective-practice-q13", difficulty: "core", totalMarks: 2,
          stem: "Which reflection statement is most analytical?",
          response: { type: "mcq", choices: [
            { id: "a", text: "\"It was bad\"" },
            { id: "b", text: "\"The muddy middle values flattened the focal area because I skipped the value study\"" },
            { id: "c", text: "\"Not my best work\"" },
            { id: "d", text: "\"I hate it\"" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Analytical reflection", statement: "Identify the problem, its cause and its effect on the work." }],
            steps: [
              { reasoning: "Only choice (b) names a specific problem, its cause and its effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"The muddy middle values flattened the focal area because I skipped the value study\"",
            commonErrors: ["Mistaking emotional reaction for analysis."],
          },
        },
        {
          id: "va-u3-reflective-practice-q14", difficulty: "core", totalMarks: 4,
          stem: "Turn a student's complaint into structured reflection with a next step.",
          parts: [
            { label: "a", prompt: "A student paints a landscape and reports: 'The sky looks flat and the trees have no depth.' Analyse why these may have failed.", marks: 2 },
            { label: "b", prompt: "State one specific, actionable next step.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Structured reflection", statement: "Analyse causes, then set one specific goal." }],
            steps: [
              { part: "a", reasoning: "Possible causes identified, e.g. no value structure in sky, no overlapping planes for trees.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cause linked to the observed flatness and lack of depth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specific step stated, e.g. 'do a value study of sky and tree masses before painting'.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Step is executable and addresses the diagnosed cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Diagnose causes of flatness. (b) One specific preparatory step.",
            commonErrors: ["Listing problems without analysing causes or setting a step."],
          },
        },
        {
          id: "va-u3-reflective-practice-q15", difficulty: "challenge", totalMarks: 2,
          stem: "Reflection is said to 'convert mistakes into information' because:",
          response: { type: "mcq", choices: [
            { id: "a", text: "It hides them from view" },
            { id: "b", text: "It deletes the mistakes" },
            { id: "c", text: "Analysing why something failed guides different future choices" },
            { id: "d", text: "Teachers require it" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "principle", name: "Mistakes as information", statement: "Analysed failures become data for better future decisions." }],
            steps: [
              { reasoning: "Understanding why a mistake happened enables different choices next time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Analysing why something failed guides different future choices",
            commonErrors: ["Treating mistakes as verdicts rather than information."],
          },
        },
        {
          id: "va-u3-reflective-practice-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Reflect on a failed printmaking attempt.",
          parts: [
            { label: "a", prompt: "A student carves a linocut; the carved lines fill with ink and the print is a blur. State the likely intention and whether it was achieved.", marks: 1 },
            { label: "b", prompt: "Identify what didn't work and why.", marks: 2 },
            { label: "c", prompt: "Give one specific goal for the next print.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection prompts", statement: "Intention, outcome, analysis and next step structure reflection." }],
            steps: [
              { part: "a", reasoning: "Likely intention: a clear printed image; not achieved — the print is a blur.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "What failed: ink filled carved lines — identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Why: insufficient cleaning of carved areas or wrong ink amount — cause analysed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Specific goal stated, e.g. 'clean carved grooves thoroughly and do a test print before the edition'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Goal is executable and addresses the diagnosed problem.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Intention vs outcome. (b) Cause analysed. (c) Specific next goal.",
            commonErrors: ["Stopping at 'it failed' without analysing cause."],
          },
        },
      ],
    },
    {
      id: "va-u3-portfolio-development",
      title: "Portfolio curation",
      skill: "Curate a portfolio that documents artistic growth and supports assessment.",
      lesson: {
        sections: [
          { heading: "What a portfolio is", body: "A portfolio is a curated selection, not an archive. It should show range (different media, approaches), growth (early vs recent work), and depth (resolved pieces, not just sketches). For DP visual arts, the portfolio supports the comparative study and exhibition — it is evidence of sustained practice." },
          { heading: "Curation decisions", body: "Select work that represents your best current level and your development. Include sketchbook pages showing process, not just finished pieces — process demonstrates thinking. Remove work that no longer represents your ability; a portfolio is only as strong as its weakest piece." },
          { heading: "Documentation and statements", body: "Photograph work professionally in consistent lighting; note materials, scale and date. Write an artist statement explaining your practice — themes, influences, intentions. Good documentation lets work be assessed on merit even when it cannot be shown in person." },
        ],
        keyFormulas: [
          { name: "Portfolio principles", statement: "Range + growth + depth + documentation = strong portfolio" },
          { name: "Curation rule", statement: "Remove work that no longer represents your ability" },
        ],
        workedExample: {
          problem: "A student's portfolio has 40 pieces including many early weak drawings and no sketchbook pages. How should it be improved?",
          solution: "Reduce to the strongest ~15–20 pieces showing range and growth; include 3–5 sketchbook spreads documenting process; remove early work that no longer represents current ability but keep one or two to show development; ensure consistent photography and add an artist statement.",
        },
      },
      questions: [
        {
          id: "va-u3-portfolio-development-q1", difficulty: "foundation", totalMarks: 2,
          stem: "A strong artist portfolio should primarily show:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Copies of famous artworks" },
            { id: "b", text: "Range, growth and resolved pieces that represent current ability" },
            { id: "c", text: "Only the most expensive materials used" },
            { id: "d", text: "Every work ever made" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Portfolio curation", statement: "Curated selection showing range, growth and best work." }],
            steps: [
              { reasoning: "A portfolio is curated to show range, growth and current ability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Range, growth and resolved pieces that represent current ability",
            commonErrors: ["Confusing archive with curated portfolio."],
          },
        },
        {
          id: "va-u3-portfolio-development-q2", difficulty: "core", totalMarks: 3,
          stem: "Describe three elements a strong artist portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Portfolio elements", statement: "Range, growth documentation, process evidence and professional presentation." }],
            steps: [
              { reasoning: "A selection showing range across media, subjects and approaches.", marks: 1, markCode: "M" },
              { reasoning: "Evidence of growth — early vs recent work or sketchbook process.", marks: 1, markCode: "M" },
              { reasoning: "Professional documentation: consistent photos, labels, artist statement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Range, growth evidence and professional documentation define a strong portfolio.",
            commonErrors: ["Including everything rather than curating selectively."],
          },
        },
        {
          id: "va-u3-portfolio-development-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why sketchbook pages are valuable in an artist portfolio even though they are not finished works.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process evidence", statement: "Sketchbooks demonstrate thinking, experimentation and development — evidence of practice." }],
            steps: [
              { reasoning: "Sketchbooks show process: experiments, failures, development of ideas.", marks: 1, markCode: "M" },
              { reasoning: "They demonstrate that finished works emerged from sustained exploration.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of practice and critical thinking, not just products.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: process documentation strengthens the portfolio's evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sketchbooks evidence process and thinking, which finished works alone cannot show.",
            commonErrors: ["Assuming only polished finished pieces belong in a portfolio."],
          },
        },
        {
          id: "va-u3-portfolio-development-q4", difficulty: "challenge", totalMarks: 6,
          stem: "Evaluate how a student should curate their portfolio for assessment.",
          parts: [
            { label: "a", prompt: "Identify two criteria for selecting portfolio pieces.", marks: 2 },
            { label: "b", prompt: "Explain why removing weaker work can strengthen a portfolio.", marks: 2 },
            { label: "c", prompt: "Assess the role of documentation in portfolio quality.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Portfolio assessment", statement: "Selection, curation and documentation determine portfolio effectiveness." }],
            steps: [
              { part: "a", reasoning: "Representative of best current ability; shows range and growth — any two valid criteria.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two selection criteria correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaker pieces lower the overall impression; a portfolio is judged by its weakest visible work.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explains the curation logic of removal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Good photography, labels and artist statement allow fair assessment of work that cannot be shown directly.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned assessment of documentation's role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Best ability + range/growth. (b) Weakest piece sets the tone. (c) Documentation enables fair assessment.",
            commonErrors: ["Submitting an archive rather than a curated selection."],
          },
        },
        {
          id: "va-u3-portfolio-development-q5", difficulty: "foundation", totalMarks: 2,
          stem: "A portfolio differs from an archive because it is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Free of photographs" },
            { id: "b", text: "A complete record of all work ever made" },
            { id: "c", text: "A curated selection representing ability and growth" },
            { id: "d", text: "Randomly ordered" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Portfolio", statement: "A curated selection representing development and current ability." }],
            steps: [
              { reasoning: "A portfolio is selected and organised to represent ability and growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A curated selection representing ability and growth",
            commonErrors: ["Confusing an archive with a curated portfolio."],
          },
        },
        {
          id: "va-u3-portfolio-development-q6", difficulty: "foundation", totalMarks: 3,
          stem: "Name three pieces of information good portfolio documentation should record for each work.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Documentation", statement: "Labels record materials, scale, date and context for fair assessment." }],
            steps: [
              { reasoning: "Materials and medium used in the work.", marks: 1, markCode: "M" },
              { reasoning: "Scale and date of the work.", marks: 1, markCode: "M" },
              { reasoning: "Context or process notes, or a consistent photograph of the work.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Materials, scale/date and context notes or consistent photography.",
            commonErrors: ["Photographing works without any labels or context."],
          },
        },
        {
          id: "va-u3-portfolio-development-q7", difficulty: "core", totalMarks: 2,
          stem: "Sketchbook pages strengthen a portfolio because they show:",
          response: { type: "mcq", choices: [
            { id: "a", text: "The artist's signature" },
            { id: "b", text: "Finished polish only" },
            { id: "c", text: "Expensive materials" },
            { id: "d", text: "Process, experimentation and development of ideas" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process evidence", statement: "Sketchbooks demonstrate thinking and sustained practice." }],
            steps: [
              { reasoning: "Sketchbook pages evidence process and idea development that finished work cannot show.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Process, experimentation and development of ideas",
            commonErrors: ["Believing only polished finished pieces belong in a portfolio."],
          },
        },
        {
          id: "va-u3-portfolio-development-q8", difficulty: "core", totalMarks: 4,
          stem: "Explain why a portfolio is only as strong as its weakest included piece.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Curation logic", statement: "Assessors judge the overall impression, which weak pieces lower." }],
            steps: [
              { reasoning: "A portfolio is judged as a whole, not piece by piece.", marks: 1, markCode: "M" },
              { reasoning: "Weak pieces lower the overall standard viewers attribute to the artist.", marks: 1, markCode: "M" },
              { reasoning: "Assessors compare works within the selection, so gaps stand out.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: curation protects overall quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weak pieces lower the whole portfolio's impression, so they should be removed or improved.",
            commonErrors: ["Including weak work out of sentiment or completeness."],
          },
        },
        {
          id: "va-u3-portfolio-development-q9", difficulty: "challenge", totalMarks: 2,
          stem: "Consistent, professional photography in a portfolio matters because it:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only makes it look tidy" },
            { id: "b", text: "Is required by law" },
            { id: "c", text: "Allows fair, accurate assessment of the work" },
            { id: "d", text: "Hides flaws" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Documentation quality", statement: "Consistent photography enables fair assessment of work not seen in person." }],
            steps: [
              { reasoning: "Consistent lighting and framing let works be compared and judged fairly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Allows fair, accurate assessment of the work",
            commonErrors: ["Thinking photography is merely cosmetic."],
          },
        },
        {
          id: "va-u3-portfolio-development-q10", difficulty: "challenge", totalMarks: 6,
          stem: "Improve a described portfolio for assessment.",
          extract: {
            title: "Described portfolio",
            author: "Written for Akademik Space",
            source: "Portfolio curation exercise",
            text: "A student's portfolio has 40 pieces: early weak drawings, recent strong paintings, no sketchbook pages, and photographs taken in mixed lighting and angles.",
          },
          parts: [
            { label: "a", prompt: "State two criteria for selecting portfolio pieces.", marks: 2 },
            { label: "b", prompt: "Explain what should be removed and what should be added.", marks: 2 },
            { label: "c", prompt: "Identify two documentation improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Portfolio curation", statement: "Selection, process evidence and documentation determine portfolio quality." }],
            steps: [
              { part: "a", reasoning: "Criteria: represents best current ability; shows range and growth — any two valid.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two selection criteria correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Remove most early weak pieces (keep one or two for growth); add sketchbook pages showing process.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Removal and addition justified by curation logic.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two documentation fixes, e.g. consistent lighting/angles and labels with materials, scale, date.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Improvements are concrete and assessment-relevant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ability + range/growth criteria. (b) Cut weak early work, add process pages. (c) Consistent photos and labels.",
            commonErrors: ["Keeping everything rather than curating selectively."],
          },
        },
        {
          id: "va-u3-portfolio-development-q11", difficulty: "foundation", totalMarks: 2,
          stem: "An artist statement should primarily explain:",
          response: { type: "mcq", choices: [
            { id: "a", text: "School grades" },
            { id: "b", text: "The prices of the work" },
            { id: "c", text: "The artist's practice, themes, intentions and context" },
            { id: "d", text: "Only the list of materials used" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Artist statement", statement: "A written text explaining practice, intentions and context for viewers." }],
            steps: [
              { reasoning: "An artist statement explains themes, influences, intentions and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The artist's practice, themes, intentions and context",
            commonErrors: ["Writing a materials list instead of a statement."],
          },
        },
        {
          id: "va-u3-portfolio-development-q12", difficulty: "foundation", totalMarks: 3,
          stem: "Describe what 'showing growth' in a portfolio might look like.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Showing growth", statement: "Early and recent work placed together make development visible." }],
            steps: [
              { reasoning: "Early and recent pieces placed side by side reveal change.", marks: 1, markCode: "M" },
              { reasoning: "Visible development in skill, technique or ideas can be seen.", marks: 1, markCode: "M" },
              { reasoning: "The selection still represents the best current level, not just the journey.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Growth is shown by pairing early and recent work that displays developing skill and ideas.",
            commonErrors: ["Showing only recent work and losing the growth narrative."],
          },
        },
        {
          id: "va-u3-portfolio-development-q13", difficulty: "core", totalMarks: 2,
          stem: "Including process pages alongside finished work is valuable because it:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Evidences thinking and sustained practice" },
            { id: "b", text: "Means finished work alone is sufficient" },
            { id: "c", text: "Is faster to produce" },
            { id: "d", text: "Pads the portfolio" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "principle", name: "Process evidence", statement: "Process documentation demonstrates thinking and practice." }],
            steps: [
              { reasoning: "Process pages show experimentation and development that finished pieces cannot.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Evidences thinking and sustained practice",
            commonErrors: ["Seeing process pages as filler rather than evidence."],
          },
        },
        {
          id: "va-u3-portfolio-development-q14", difficulty: "core", totalMarks: 4,
          stem: "Evaluate two curation decisions in a student's portfolio.",
          parts: [
            { label: "a", prompt: "A student includes every piece they made this year, including early weak work. Assess this decision.", marks: 2 },
            { label: "b", prompt: "The same student removes all sketchbook pages to save space. Assess this decision.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Curation judgement", statement: "Portfolios balance completeness against quality and process evidence." }],
            steps: [
              { part: "a", reasoning: "Including all work weakens the portfolio because weak pieces lower the whole impression.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assessment: curation should select best work while keeping one or two early pieces for growth.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Removing sketchbook pages removes process evidence that demonstrates thinking and practice.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assessment: keep selected process pages; space should be managed by cutting weak finished work instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Too much weak work included. (b) Process evidence wrongly removed.",
            commonErrors: ["Valuing completeness over curation quality."],
          },
        },
        {
          id: "va-u3-portfolio-development-q15", difficulty: "challenge", totalMarks: 2,
          stem: "The best balance of early and recent work in a portfolio is:",
          response: { type: "mcq", choices: [
            { id: "a", text: "Random selection" },
            { id: "b", text: "Only recent strongest pieces" },
            { id: "c", text: "Only early work" },
            { id: "d", text: "Mostly best current work with a few early pieces showing development" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "principle", name: "Portfolio balance", statement: "Show best current ability plus enough history to evidence growth." }],
            steps: [
              { reasoning: "Best current work carries the portfolio; a few early pieces show development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Mostly best current work with a few early pieces showing development",
            commonErrors: ["Dropping all early work and losing the growth narrative."],
          },
        },
        {
          id: "va-u3-portfolio-development-q16", difficulty: "challenge", totalMarks: 5,
          stem: "Plan a portfolio presentation for a DP visual arts exhibition.",
          parts: [
            { label: "a", prompt: "How should the portfolio show range across media or approaches?", marks: 1 },
            { label: "b", prompt: "How should it evidence growth and development?", marks: 2 },
            { label: "c", prompt: "What should the documentation and artist statement include?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Portfolio assessment", statement: "Range, growth evidence and professional documentation determine effectiveness." }],
            steps: [
              { part: "a", reasoning: "Range shown by selecting pieces across different media, subjects or approaches.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Growth evidenced by including a few early pieces alongside recent strong work.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sketchbook/process pages further evidence development and practice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Documentation: consistent photos, labels with materials/scale/date.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Artist statement explains practice, themes, intentions and context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Range across media. (b) Early + recent + process pages. (c) Consistent photos, labels, artist statement.",
            commonErrors: ["Presenting an archive rather than a curated, documented selection."],
          },
        },
      ],
    },
  ],
};
