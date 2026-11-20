import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "theatre-u6-lesson-6-2",
  code: "6-2",
  title: "Reflective Practice",
  goal: "I CAN reflect critically on my own theatrical development, challenges and learning for assessment.",
  standards: [
    "Reflection",
    "Portfolio",
  ],
  vocabulary: [
    { term: "Reflective practice", definition: "Critical examination of one's own performance and development." },
    { term: "Performance log", definition: "A record of performances given and experiences gained." },
    { term: "Self-assessment", definition: "Honest evaluation of one's own abilities and progress." },
    { term: "Challenge", definition: "A difficulty or obstacle encountered in performance." },
    { term: "Breakthrough", definition: "A moment of significant progress or insight." },
    { term: "Growth", definition: "Development in skill, confidence and artistic understanding." },
  ],
  concepts: [
    {
      id: "theatre-u6-reflective-practice",
      title: "Reflective practice",
      skill: "Use structured reflection to identify growth, challenges and learning in theatrical development.",
      lesson: {
        sections: [
          {
            heading: "What reflection is",
            body: "Reflection is not self-criticism or praise — it is honest analysis of performance and process. Effective reflection asks: what was I trying to achieve? What worked? What didn't? Why? What will I do differently? Reflection happens during rehearsals (notes on what worked) and after performances (written reviews, discussions).",
          },
          {
            heading: "Structuring reflection",
            body: "Use prompts: describe the performance objectively first; then analyse what succeeded and failed — technically and artistically; then connect to intention — did the performance do what you meant? Finally, set one specific, actionable goal for next time. Vague resolutions ('be better') fail; specific ones ('project voice to back row') work.",
          },
          {
            heading: "Reflection and growth",
            body: "Regular reflection accelerates development: it converts mistakes into information. Comparing early and recent performances reveals progress invisible day-to-day. Actors who reflect consistently develop faster because they learn from each performance rather than repeating errors.",
          },
        ],
        keyFormulas: [
          { name: "Reflection prompts", statement: "What did I intend? What worked? What didn't? Why? What next?" },
          { name: "Specific goal", statement: "One actionable improvement for the next performance" },
        ],
        workedExample: {
          problem: "An actor writes: 'The performance was bad.' Turn this into structured reflection.",
          solution: "Objective: voice projection was unclear in the second act; blocking felt uncertain during transitions. Analysis: I didn't rehearse the transitions enough; I focused on lines rather than movement. Intention: I wanted to show the character's anxiety but achieved confusion. Next: rehearse transitions specifically and practice projecting to the back row.",
        },
      },
      questions: [
        {
          id: "theatre-u6-reflective-practice-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective theatrical reflection primarily involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Praising your best performances" },
              { id: "b", text: "Analysing performance and process to identify improvement" },
              { id: "c", text: "Comparing yourself to famous actors" },
              { id: "d", text: "Listing lines memorised" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reflection", statement: "Critical analysis of performance and process to guide improvement." },
            ],
            steps: [
              { reasoning: "Reflection analyses what worked, what didn't and why, to improve future performance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Analysing performance and process to identify improvement",
            commonErrors: [
              "Confusing reflection with self-criticism or praise.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three prompts an actor could use for structured reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection prompts", statement: "Intention, outcome, analysis and next steps." },
            ],
            steps: [
              { reasoning: "What was I trying to achieve, and did the performance accomplish it?", marks: 1, markCode: "M" },
              { reasoning: "What specifically worked and what didn't, technically and artistically?", marks: 1, markCode: "M" },
              { reasoning: "What is one specific thing I will do differently next time?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intention, analysis of outcomes and a specific next step structure reflection.",
            commonErrors: [
              "Reflecting vaguely without specific prompts or outcomes.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why specific goals are more useful than vague resolutions in theatrical reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Specific goals", statement: "Concrete actions can be executed; vague intentions cannot be measured." },
            ],
            steps: [
              { reasoning: "Vague goals like 'be a better actor' cannot be acted on or verified.", marks: 1, markCode: "M" },
              { reasoning: "Specific goals like 'rehearse transitions specifically' are executable and checkable.", marks: 1, markCode: "M" },
              { reasoning: "Specificity allows the next performance to test whether the improvement worked.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: reflection should end in an actionable experiment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific goals are executable and verifiable; vague ones are not.",
            commonErrors: [
              "Setting resolutions that cannot be measured or acted upon.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a piece of reflection on a performance.",
          parts: [
            { label: "a", prompt: "Identify what the reflection does well.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the reflection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Good reflection is specific, honest and ends in action." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies a strength, e.g. it attempts honesty or names a problem.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two weaknesses, e.g. vague language, no specific next step, self-blame without analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with reflective practice.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific evidence, balanced analysis and an actionable goal.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate reflection by specificity, honesty, analysis and actionable next steps.",
            commonErrors: [
              "Judging reflection on tone rather than analytical content.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reflective practice in theatre is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Praising your best performances" },
              { id: "b", text: "Honest analysis of performance and process to guide improvement" },
              { id: "c", text: "Comparing yourself to famous actors" },
              { id: "d", text: "Memorising lines faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflective practice", statement: "Critical examination of one's own performance and development." },
            ],
            steps: [
              { reasoning: "Reflection is honest analysis of performance and process aimed at improvement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Honest analysis of performance and process to guide improvement",
            commonErrors: [
              "Confusing reflection with praise or self-criticism.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reflection is most useful when it happens:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only after the final performance" },
              { id: "b", text: "During rehearsals and after performances" },
              { id: "c", text: "Never" },
              { id: "d", text: "Only in written examinations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Timing of reflection", statement: "Reflection happens during rehearsals and after performances." },
            ],
            steps: [
              { reasoning: "Reflection occurs continuously — rehearsal notes and post-performance review.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** During rehearsals and after performances",
            commonErrors: [
              "Treating reflection as a one-off event after the run.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The resolution 'be a better actor' is ineffective because it is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Too specific" },
              { id: "b", text: "Not actionable or measurable" },
              { id: "c", text: "Too honest" },
              { id: "d", text: "Written in the past tense" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specific goal", statement: "One actionable improvement; vague intentions cannot be executed or verified." },
            ],
            steps: [
              { reasoning: "'Be a better actor' cannot be acted on or checked for success.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Not actionable or measurable",
            commonErrors: [
              "Setting vague resolutions that cannot be tested.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Comparing early and recent performances helps an actor reflect because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proves they are famous" },
              { id: "b", text: "Reveals progress that is invisible day to day" },
              { id: "c", text: "Replaces rehearsal" },
              { id: "d", text: "Measures ticket sales" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evidence", statement: "Early vs recent comparisons reveal development invisible day-to-day." },
            ],
            steps: [
              { reasoning: "Long-range comparison makes gradual growth visible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals progress that is invisible day to day",
            commonErrors: [
              "Missing growth because only recent work is examined.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Reflection 'converts mistakes into information' because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deletes the mistakes from memory" },
              { id: "b", text: "Turns errors into analysable data for future improvement" },
              { id: "c", text: "Hides weaknesses from others" },
              { id: "d", text: "Avoids further rehearsal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection and growth", statement: "Reflection converts mistakes into information so actors learn rather than repeat errors." },
            ],
            steps: [
              { reasoning: "Analysed mistakes become information that guides future work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Turns errors into analysable data for future improvement",
            commonErrors: [
              "Treating mistakes as failures to be hidden rather than analysed.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest piece of theatrical reflection ends with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A general feeling of pride" },
              { id: "b", text: "One specific, actionable goal for the next performance" },
              { id: "c", text: "A list of other actors' faults" },
              { id: "d", text: "A summary of the plot" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Specific goal", statement: "Reflection should end in an actionable experiment for next time." },
            ],
            steps: [
              { reasoning: "A specific actionable goal makes reflection forward-looking and testable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** One specific, actionable goal for the next performance",
            commonErrors: [
              "Ending reflection with emotion rather than action.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define reflective practice in your own words and state its main purpose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflective practice", statement: "Critical examination of one's own performance and development." },
            ],
            steps: [
              { reasoning: "A valid definition: honest analysis of one's own performance and process.", marks: 1, markCode: "M" },
              { reasoning: "It is neither self-criticism nor praise but balanced analysis.", marks: 1, markCode: "M" },
              { reasoning: "Purpose: to identify improvement and guide future development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection is honest analysis of performance and process that guides improvement.",
            commonErrors: [
              "Defining reflection as self-criticism or self-praise.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the stages of a structured reflection after a performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection prompts", statement: "Objective description, analysis of outcomes, connection to intention, and next steps." },
            ],
            steps: [
              { reasoning: "Describe the performance objectively first — what happened technically and artistically.", marks: 1, markCode: "M" },
              { reasoning: "Analyse what succeeded and what failed.", marks: 1, markCode: "M" },
              { reasoning: "Connect outcomes to intention — did the performance do what you meant?", marks: 1, markCode: "R" },
              { reasoning: "Set one specific, actionable goal for next time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe, analyse, connect to intention, set a specific goal.",
            commonErrors: [
              "Skipping the objective description stage and going straight to judgement.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why reflection should be honest analysis rather than self-criticism or praise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Honest analysis", statement: "Reflection asks what worked, what didn't and why — not emotional judgement." },
            ],
            steps: [
              { reasoning: "Self-criticism and praise are emotional reactions, not analysis.", marks: 1, markCode: "M" },
              { reasoning: "Neither identifies what specifically worked or failed.", marks: 1, markCode: "M" },
              { reasoning: "Honest analysis asks 'what worked? what didn't? why?' which guides improvement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: balanced analysis converts experience into learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Honest analysis identifies causes of success and failure; emotion does not.",
            commonErrors: [
              "Confusing harsh self-judgement with useful reflection.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how regular reflection can accelerate theatrical development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection and growth", statement: "Regular reflection converts each performance into information for the next." },
            ],
            steps: [
              { reasoning: "Reflection after each performance extracts lessons while they are fresh.", marks: 1, markCode: "M" },
              { reasoning: "Specific goals tested in the next performance close the learning loop.", marks: 1, markCode: "M" },
              { reasoning: "Actors who reflect learn from each performance rather than repeating errors.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: consistent reflection compounds improvement over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Regular reflection turns every performance into information, compounding growth.",
            commonErrors: [
              "Reflecting only once, at the end of a production.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "Evaluate this reflection on a performance: 'I messed up the monologue. I'm terrible at acting. I should just quit.'",
          parts: [
            { label: "a", prompt: "Identify one thing the reflection does well.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain why they matter.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the reflection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating reflection", statement: "Good reflection is specific, honest and ends in action." },
            ],
            steps: [
              { part: "a", reasoning: "It identifies a specific moment — the monologue — as problematic.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The specific identification is correctly recognised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: global self-attack ('terrible') and no analysis or next step.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained: they prevent learning and action.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests analysing what went wrong in the monologue and setting a specific goal.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The reflection names a moment but replaces analysis with self-attack.",
            commonErrors: [
              "Judging reflection by emotional tone rather than analytical content.",
            ],
          },
        },
        {
          id: "theatre-u6-reflective-practice-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Turn the statement 'The performance was bad' into structured reflection.",
          parts: [
            { label: "a", prompt: "Give an objective description of what happened.", marks: 2 },
            { label: "b", prompt: "Analyse what succeeded, what failed and whether intention was achieved.", marks: 2 },
            { label: "c", prompt: "Set one specific, actionable goal for next time.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reflection prompts", statement: "Objective description, analysis of outcomes, intention, and specific next step." },
            ],
            steps: [
              { part: "a", reasoning: "A factual account of technical and artistic events replaces 'bad'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Description is objective rather than evaluative.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Analysis identifies what worked, what failed and the gap between intention and outcome.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The intention-outcome connection is made explicitly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A single specific goal is set, e.g. rehearsing transitions or projecting to the back row.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The goal is actionable and verifiable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Objective description + analysis + specific goal = structured reflection.",
            commonErrors: [
              "Replacing 'bad' with a different vague judgement.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u6-growth-documentation",
      title: "Documenting theatrical growth",
      skill: "Document theatrical development through performance logs, recordings and portfolio materials.",
      lesson: {
        sections: [
          {
            heading: "Performance documentation",
            body: "Record performances: video for visual elements (movement, stage presence), audio for vocal quality. Label recordings with date, production, role. Keep a performance log: productions, roles, directors, experiences. This documentation provides evidence of growth and range.",
          },
          {
            heading: "Portfolio materials",
            body: "A theatre portfolio includes: performance recordings; script analysis and directorial notes; design contributions; written reflections; photographs of productions; and a performance CV. Select work that shows range and growth — not just best performances but representative development.",
          },
          {
            heading: "Reflective documentation",
            body: "Written reflections connect evidence to growth: 'In September I could project to the front row; by March I could reach the back.' 'My first character was one-dimensional; now I layer motivations.' These written analyses transform a collection of performances into a narrative of learning.",
          },
        ],
        keyFormulas: [
          { name: "Documentation types", statement: "Recordings + performance log + portfolio + reflections" },
          { name: "Growth evidence", statement: "Early vs recent comparisons demonstrate development" },
        ],
        workedExample: {
          problem: "A student has recordings from September and June of the same role. How should they use them in a portfolio?",
          solution: "Include both with labels showing dates and production. Add a reflective note comparing them: what improved technically, artistically, in stage presence? The comparison demonstrates growth — the portfolio's most convincing evidence.",
        },
      },
      questions: [
        {
          id: "theatre-u6-growth-documentation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A theatre portfolio should primarily document:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the best performances" },
              { id: "b", text: "Theatrical growth across performance, analysis and production" },
              { id: "c", text: "Drama theory knowledge" },
              { id: "d", text: "Stage equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theatre portfolio", statement: "Curated evidence of theatrical development across multiple domains." },
            ],
            steps: [
              { reasoning: "A theatre portfolio documents growth across performance, analysis and production.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Theatrical growth across performance, analysis and production",
            commonErrors: [
              "Showing only polished final performances without growth evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of evidence a theatre portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evidence", statement: "Recordings, performance log, portfolio materials and reflections." },
            ],
            steps: [
              { reasoning: "Performance recordings showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "Performance log documenting productions and roles.", marks: 1, markCode: "M" },
              { reasoning: "Written reflections and script analysis showing development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, performance log and reflections evidence theatrical growth.",
            commonErrors: [
              "Including only one type of evidence without range.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why comparing early and recent performances is powerful portfolio evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evidence", statement: "Direct comparison makes development visible and undeniable." },
            ],
            steps: [
              { reasoning: "Comparisons make growth concrete — viewers can see improvement directly.", marks: 1, markCode: "M" },
              { reasoning: "They demonstrate sustained practice and learning over time.", marks: 1, markCode: "M" },
              { reasoning: "Paired with reflection, they show not just improvement but understanding of it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: growth evidence is more convincing than claims of improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Early-recent comparisons provide direct evidence of theatrical growth.",
            commonErrors: [
              "Showing only final performances without development context.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's theatre portfolio.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating portfolio", statement: "Assess range, growth evidence, documentation quality and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes recordings, shows some growth, has written elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. only recent work, no reflections, poor organisation — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding early recordings, reflective entries, better organisation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate portfolio by range, growth evidence, documentation and reflection.",
            commonErrors: [
              "Judging portfolio only by performance quality, not documentation.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A theatre performance log should record:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only ticket sales" },
              { id: "b", text: "Productions, roles, directors and experiences" },
              { id: "c", text: "The weather on show nights" },
              { id: "d", text: "Other students' grades" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Performance log", statement: "A record of performances given and experiences gained." },
            ],
            steps: [
              { reasoning: "A performance log records productions, roles, directors and experiences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Productions, roles, directors and experiences",
            commonErrors: [
              "Keeping only highlights rather than a complete record.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Video recordings are most useful in a theatre portfolio for documenting:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Costume budgets" },
              { id: "b", text: "Movement, gesture and stage presence" },
              { id: "c", text: "The audience's ticket stubs" },
              { id: "d", text: "Script font choices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance documentation", statement: "Video captures visual elements; audio captures vocal quality." },
            ],
            steps: [
              { reasoning: "Video best documents visual performance — movement and stage presence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Movement, gesture and stage presence",
            commonErrors: [
              "Using video for elements better captured in writing.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A theatre portfolio should include work that demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the single best performance" },
              { id: "b", text: "Range and growth across different productions and roles" },
              { id: "c", text: "Only theory essays" },
              { id: "d", text: "Equipment manuals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio selection", statement: "Select work that shows range and growth, not just best performances." },
            ],
            steps: [
              { reasoning: "Portfolios should show range and growth across productions and roles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Range and growth across different productions and roles",
            commonErrors: [
              "Showing only polished final work without development context.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Written reflections strengthen a portfolio because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace performances entirely" },
              { id: "b", text: "Show the thinking and learning behind the work" },
              { id: "c", text: "Increase the running time" },
              { id: "d", text: "Are easier to film" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Written reflection", statement: "Written analysis shows thinking and learning that recordings alone cannot." },
            ],
            steps: [
              { reasoning: "Reflections document the learning behind performances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Show the thinking and learning behind the work",
            commonErrors: [
              "Relying only on recordings without analytical context.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Recordings should be labelled with date, production and role because this:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is required by law" },
              { id: "b", text: "Allows growth to be tracked and work to be contextualised" },
              { id: "c", text: "Makes files larger" },
              { id: "d", text: "Hides poor performances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance documentation", statement: "Label recordings with date, production and role to track progress." },
            ],
            steps: [
              { reasoning: "Labels enable chronological comparison and contextual understanding.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Allows growth to be tracked and work to be contextualised",
            commonErrors: [
              "Keeping unlabelled files that cannot be ordered or compared.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The most convincing single piece of growth evidence in a portfolio is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A photograph of the stage" },
              { id: "b", text: "A direct comparison of early and recent performances of similar material" },
              { id: "c", text: "A list of awards" },
              { id: "d", text: "The newest costume" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evidence", statement: "Direct comparison makes development visible and undeniable." },
            ],
            steps: [
              { reasoning: "Early-recent comparison of similar material shows improvement directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A direct comparison of early and recent performances of similar material",
            commonErrors: [
              "Claiming growth without comparable evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three types of evidence a theatre portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evidence", statement: "Recordings, performance log, portfolio materials and reflections." },
            ],
            steps: [
              { reasoning: "Performance recordings showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "A performance log documenting productions and roles.", marks: 1, markCode: "M" },
              { reasoning: "Written reflections, script analysis or design contributions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, performance log and written reflections/analysis.",
            commonErrors: [
              "Including only one type of evidence.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what a well-kept performance log should contain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance log", statement: "A complete record of productions, roles and experiences." },
            ],
            steps: [
              { reasoning: "Each entry records the production title and date.", marks: 1, markCode: "M" },
              { reasoning: "It records the student's role and the director or company.", marks: 1, markCode: "M" },
              { reasoning: "It notes key experiences — challenges, breakthroughs, skills gained.", marks: 1, markCode: "R" },
              { reasoning: "Entries are kept consistently so the log evidences sustained practice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title, date, role, director and reflective notes for every production.",
            commonErrors: [
              "Recording only final performances, not the full history.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a student should select material for a theatre portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio selection", statement: "Select work that shows range and growth, not just best performances." },
            ],
            steps: [
              { reasoning: "Choose work showing technical growth — early versus late material.", marks: 1, markCode: "M" },
              { reasoning: "Choose work showing range — different roles, productions and skills.", marks: 1, markCode: "M" },
              { reasoning: "Include representative development rather than only polished finals.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a curated selection is stronger than a complete dump of material.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select for growth, range and representativeness.",
            commonErrors: [
              "Including everything rather than curating selectively.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how written reflections transform a collection of performances into a narrative of learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Written reflection", statement: "Reflections connect evidence to growth and make development explicit." },
            ],
            steps: [
              { reasoning: "Recordings show what happened; reflections show what was learned.", marks: 1, markCode: "M" },
              { reasoning: "Written analysis demonstrates critical thinking about performance.", marks: 1, markCode: "M" },
              { reasoning: "Comparative reflections — 'in September I could..., by March I could...' — make growth explicit.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: written components turn a collection into a story of development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflections make growth explicit, turning evidence into a learning narrative.",
            commonErrors: [
              "Presenting performances without analytical context.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q15",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student must organise a portfolio containing recordings, script analyses, design work and reflections.",
          parts: [
            { label: "a", prompt: "Propose an effective organisation structure.", marks: 2 },
            { label: "b", prompt: "Explain how items should be labelled.", marks: 2 },
            { label: "c", prompt: "Justify including early, weaker material.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio organisation", statement: "Chronological or categorical structure with clear labels and context." },
            ],
            steps: [
              { part: "a", reasoning: "A chronological or categorical structure is proposed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The structure is logical and consistent.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Items are labelled with date, production, role and brief context.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Labelling enables tracking and comparison.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Early weaker material demonstrates growth when compared with recent work.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justification links early material to development evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Organise logically, label everything, and include early work as growth evidence.",
            commonErrors: [
              "Organising by quantity rather than by narrative of growth.",
            ],
          },
        },
        {
          id: "theatre-u6-growth-documentation-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate this portfolio plan: 'I will include my three best performances from this term.'",
          parts: [
            { label: "a", prompt: "Identify one strength.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating portfolio", statement: "Assess range, growth evidence, documentation and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: selecting best performances shows current ability.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The strength is correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses: no growth evidence and no range across productions or roles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on the portfolio.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding early recordings and non-performance materials like analyses and reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Two concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Best-work-only portfolios show talent but not development.",
            commonErrors: [
              "Judging a portfolio only by performance quality.",
            ],
          },
        },
      ],
    },
  ],
};
