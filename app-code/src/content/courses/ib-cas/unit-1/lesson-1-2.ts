import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "cas-u1-lesson-1-2",
  code: "1-2",
  title: "Setting Personal Goals",
  goal: "I CAN set meaningful, achievable CAS goals and track progress toward them.",
  standards: ["CAS", "Goal Setting", "Personal Development"],
  vocabulary: [
    { term: "CAS goal", definition: "A specific, measurable objective for CAS engagement." },
    { term: "SMART goal", definition: "Specific, Measurable, Achievable, Relevant, Time-bound." },
    { term: "Learning outcome", definition: "A skill or insight gained through CAS participation." },
    { term: "Personal challenge", definition: "An activity outside your comfort zone that promotes growth." },
    { term: "Progress tracking", definition: "Recording and reviewing activity toward goals." },
    { term: "Reflection", definition: "Examining what was learned and how it affects you." },
  ],
  concepts: [
    {
      id: "cas-u1-goal-setting",
      title: "Setting effective CAS goals",
      skill: "Formulate SMART goals for CAS activities and track progress.",
      lesson: {
        sections: [
          {
            heading: "Why goals matter",
            body: "CAS goals give direction and purpose to your activities. Without goals, participation becomes tokenistic — you attend but don't grow. Goals should reflect genuine interests and challenge you to develop new skills or perspectives.",
          },
          {
            heading: "SMART criteria",
            body: "Good CAS goals are **Specific** (clear what you'll do), **Measurable** (how you'll know you achieved it), **Achievable** (within your means), **Relevant** (connected to CAS strands), and **Time-bound** (deadline or duration). Vague goals like 'do more sport' fail; 'play basketball twice weekly for one term' succeeds.",
          },
          {
            heading: "Tracking progress",
            body: "Record activities, reflect on challenges, and adjust goals as needed. Regular review keeps goals realistic and motivation high. Goals can evolve — initial goals may change as interests develop, but the process of goal-setting remains important.",
          },
        ],
        keyFormulas: [
          { name: "SMART", statement: "Specific + Measurable + Achievable + Relevant + Time-bound" },
          { name: "Goal test", statement: "Would you know when you have achieved this?" },
        ],
        workedExample: {
          problem: "Improve 'I want to volunteer more' as a CAS goal.",
          solution: "'Volunteer at the local food bank every Saturday for one term (8 sessions), tracking hours and reflecting on what I learn about community needs' — specific, measurable, achievable, relevant, time-bound.",
        },
      },
      questions: [
        {
          id: "cas-u1-l12c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "SMART goals are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specific, Measurable, Achievable, Relevant, Time-bound" },
              { id: "b", text: "Strategic, Motivational, Adaptive, Rewarding, Targeted" },
              { id: "c", text: "Simple, Meaningful, Ambitious, Realistic, Tough" },
              { id: "d", text: "Short-term, Manageable, Achievable, Regular, Tested" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART goals", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
            ],
            steps: [
              { reasoning: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Specific, Measurable, Achievable, Relevant, Time-bound",
            commonErrors: ["Confusing SMART acronym with other goal frameworks."],
          },
        },
        {
          id: "cas-u1-l12c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why vague CAS goals are ineffective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal specificity", statement: "Vague goals lack direction and cannot be measured or tracked." },
            ],
            steps: [
              { reasoning: "Vague goals ('do more sport') don't specify what, how much or when.", marks: 1, markCode: "M" },
              { reasoning: "They cannot be measured — you don't know when you've achieved them.", marks: 1, markCode: "M" },
              { reasoning: "Without measurement, progress cannot be tracked or motivation sustained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vague goals lack direction, cannot be measured, and prevent progress tracking.",
            commonErrors: ["Setting goals too broad to guide action."],
          },
        },
        {
          id: "cas-u1-l12c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that CAS goals should remain fixed throughout the programme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal flexibility", statement: "Goals should evolve as interests and circumstances change." },
            ],
            steps: [
              { reasoning: "For: fixed goals provide consistency and measurable targets.", marks: 1, markCode: "M" },
              { reasoning: "Against: interests change; rigid goals may become irrelevant or impossible.", marks: 1, markCode: "M" },
              { reasoning: "Adjusting goals based on experience shows reflection and growth.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: goals should be stable enough for commitment but flexible enough to evolve.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals should be committed to but adjustable as interests and circumstances change.",
            commonErrors: ["Treating goals as immutable or constantly changing them."],
          },
        },
        {
          id: "cas-u1-l12c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to set effective CAS goals.",
          parts: [
            { label: "a", prompt: "Explain the SMART criteria.", marks: 2 },
            { label: "b", prompt: "Describe why goal specificity matters.", marks: 3 },
            { label: "c", prompt: "Evaluate how to balance ambition and achievability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal setting", statement: "SMART goals are specific, measurable, achievable, relevant and time-bound." },
            ],
            steps: [
              { part: "a", reasoning: "SMART criteria explained.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Specific goals provide clear direction.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measurable goals enable progress tracking.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vague goals prevent accountability and motivation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Too ambitious goals lead to failure and demotivation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Too easy goals don't promote growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: challenge yourself but stay within realistic limits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) SMART criteria. (b) Specificity enables direction and tracking. (c) Balance challenge with realism.",
            commonErrors: ["Setting goals that are either too easy or impossibly hard."],
          },
        },
        {
          id: "cas-u1-l12c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a well-formulated SMART CAS goal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exercise sometimes when possible" },
              { id: "b", text: "Play basketball twice weekly for one term and record match statistics" },
              { id: "c", text: "Do more sport" },
              { id: "d", text: "Get fit eventually" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART goals", statement: "Specific, Measurable, Achievable, Relevant, Time-bound." },
            ],
            steps: [
              { reasoning: "Only option (b) specifies what, how much, how measured and a timeframe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Play basketball twice weekly for one term and record match statistics",
            commonErrors: ["Choosing vague goals that lack specificity and measurement."],
          },
        },
        {
          id: "cas-u1-l12c1q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A goal you cannot measure fails which SMART criterion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time-bound" },
              { id: "b", text: "Specific" },
              { id: "c", text: "Achievable" },
              { id: "d", text: "Measurable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "SMART criteria", statement: "Goals must be measurable so progress can be tracked." },
            ],
            steps: [
              { reasoning: "An unmeasurable goal fails the Measurable criterion directly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Measurable",
            commonErrors: ["Confusing measurability with specificity."],
          },
        },
        {
          id: "cas-u1-l12c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'I want to volunteer more' is a weak CAS goal mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is unachievable" },
              { id: "b", text: "Is too ambitious" },
              { id: "c", text: "Lacks specificity, measurability and a timeframe" },
              { id: "d", text: "Is irrelevant to CAS" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal specificity", statement: "Vague goals cannot be measured, tracked or achieved deliberately." },
            ],
            steps: [
              { reasoning: "'More' is undefined, unmeasurable and has no deadline.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lacks specificity, measurability and a timeframe",
            commonErrors: ["Treating vague intentions as valid goals."],
          },
        },
        {
          id: "cas-u1-l12c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which goal best balances achievable and relevant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Become an Olympic athlete within a month" },
              { id: "b", text: "Give up music entirely" },
              { id: "c", text: "Master every instrument in the world" },
              { id: "d", text: "Learn to play three songs on guitar by the end of term for a class concert" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ambition balance", statement: "Good goals challenge you while remaining achievable within constraints." },
            ],
            steps: [
              { reasoning: "Three songs by end of term is specific, achievable and relevant to creativity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learn to play three songs on guitar by the end of term",
            commonErrors: ["Choosing goals that are either impossible or trivial."],
          },
        },
        {
          id: "cas-u1-l12c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Setting 'improve at everything' as a CAS goal mainly fails because it is not:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specific, measurable or achievable" },
              { id: "b", text: "Relevant to CAS" },
              { id: "c", text: "Time-bound only" },
              { id: "d", text: "Ambitious enough" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal formulation", statement: "Overly broad goals cannot be specified, measured or achieved." },
            ],
            steps: [
              { reasoning: "'Everything' is too broad to specify, measure or achieve.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Specific, measurable or achievable",
            commonErrors: ["Mistaking ambition for effective goal formulation."],
          },
        },
        {
          id: "cas-u1-l12c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'time-bound' goal is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Has a deadline or defined duration" },
              { id: "b", text: "Takes a long time" },
              { id: "c", text: "Is scheduled at a convenient time" },
              { id: "d", text: "Is about managing time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Time-bound", statement: "A time-bound goal has a deadline or defined duration." },
            ],
            steps: [
              { reasoning: "Time-bound means it has a clear deadline or duration.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Has a deadline or defined duration",
            commonErrors: ["Confusing time-bound with time-consuming."],
          },
        },
        {
          id: "cas-u1-l12c1q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why CAS goals should connect to your genuine interests and challenges.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal relevance", statement: "Goals rooted in genuine interest sustain engagement and promote growth." },
            ],
            steps: [
              { reasoning: "Goals without genuine interest become tokenistic obligations.", marks: 1, markCode: "M" },
              { reasoning: "Genuine interest and challenge sustain motivation over time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore relevant goals drive meaningful commitment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals connected to genuine interests sustain engagement and produce real growth.",
            commonErrors: ["Setting goals based on what others expect rather than personal interest."],
          },
        },
        {
          id: "cas-u1-l12c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite 'I want to do more creativity' as a SMART goal and justify each element.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "SMART application", statement: "A SMART goal specifies what, how measured, feasibility, relevance and deadline." },
            ],
            steps: [
              { reasoning: "Specific: name the activity, e.g. 'learn three songs on guitar'.", marks: 1, markCode: "M" },
              { reasoning: "Measurable and time-bound: 'perform them at a class concert by end of term'.", marks: 1, markCode: "M" },
              { reasoning: "Achievable and relevant: within ability and connected to the creativity strand.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: the rewritten goal meets all five SMART criteria.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Learn three songs on guitar and perform them at a class concert by end of term' — specific, measurable, achievable, relevant, time-bound.",
            commonErrors: ["Adding detail without making the goal measurable."],
          },
        },
        {
          id: "cas-u1-l12c1q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that harder CAS goals are always better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ambition balance", statement: "Goals should challenge but remain achievable." },
            ],
            steps: [
              { reasoning: "Challenging goals promote growth and push students beyond comfort zones.", marks: 1, markCode: "M" },
              { reasoning: "Excessively hard goals cause failure and demotivation.", marks: 1, markCode: "M" },
              { reasoning: "The optimal goal stretches ability without guaranteeing failure.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: harder is not always better — challenge must be balanced with achievability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Harder goals are not always better — they must stretch but remain achievable.",
            commonErrors: ["Equating difficulty with quality."],
          },
        },
        {
          id: "cas-u1-l12c1q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how to formulate effective CAS goals.",
          parts: [
            { label: "a", prompt: "Explain the SMART criteria.", marks: 2 },
            { label: "b", prompt: "Describe how goals should connect to the three CAS strands.", marks: 2 },
            { label: "c", prompt: "Evaluate how to balance ambition with achievability.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal formulation", statement: "Effective goals are SMART, strand-relevant and realistically challenging." },
            ],
            steps: [
              { part: "a", reasoning: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five elements must be present for a well-formed goal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Goals should be set for creativity, activity and service strands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each strand goal should reflect genuine interest and challenge.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Too ambitious goals lead to failure; too easy goals lack growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: stretch within realistic limits — challenging but achievable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) SMART criteria. (b) Strand-relevant goals. (c) Challenge balanced with achievability.",
            commonErrors: ["Setting goals that are either trivial or impossible."],
          },
        },
        {
          id: "cas-u1-l12c1q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a time-bound element supports progress toward CAS goals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Time-bound goals", statement: "Deadlines create focus and enable progress review." },
            ],
            steps: [
              { reasoning: "A deadline creates urgency and prevents indefinite postponement.", marks: 1, markCode: "M" },
              { reasoning: "It enables review at defined points to check progress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore time-bound goals support measurable progress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Time-bound goals create urgency and enable progress review at defined points.",
            commonErrors: ["Leaving goals open-ended so progress cannot be assessed."],
          },
        },
        {
          id: "cas-u1-l12c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether CAS goals should focus on outcomes or on the process of engagement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Outcome vs process", statement: "CAS values both measurable outcomes and the learning gained through engagement." },
            ],
            steps: [
              { reasoning: "Outcome-focused goals give measurable targets and clear achievement.", marks: 1, markCode: "M" },
              { reasoning: "Process focus values learning, reflection and sustained engagement itself.", marks: 1, markCode: "M" },
              { reasoning: "CAS emphasises engagement and growth, not just final results.", marks: 1, markCode: "M" },
              { reasoning: "Outcomes can be adjusted if circumstances change.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: both matter, but the process of engagement is central to CAS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both outcomes and process matter — but sustained engagement and learning are central to CAS.",
            commonErrors: ["Treating CAS as purely outcome-driven like an exam."],
          },
        },
        {
          id: "cas-u1-l12c1q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to set and refine CAS goals over the programme.",
          parts: [
            { label: "a", prompt: "Describe how to apply SMART criteria to a CAS goal.", marks: 3 },
            { label: "b", prompt: "Explain why goals should reflect genuine interests and desired challenges.", marks: 2 },
            { label: "c", prompt: "Evaluate whether CAS goals should remain fixed or evolve.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal evolution", statement: "Goals should be SMART, interest-driven and adjustable over time." },
            ],
            steps: [
              { part: "a", reasoning: "Make the goal specific about activity, amount and method.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ensure it is measurable, achievable, relevant and has a deadline.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All five SMART elements applied correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Genuine interest sustains motivation for regular engagement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Desired challenge promotes growth beyond comfort zone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Fixed goals provide consistency and measurable targets.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But interests and circumstances change during the programme.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: goals should be committed to but evolve thoughtfully with reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Apply all SMART elements. (b) Interest and challenge sustain growth. (c) Goals evolve thoughtfully.",
            commonErrors: ["Setting goals once and never reviewing them."],
          },
        },
      ],
    },
    {
      id: "cas-u1-goal-tracking",
      title: "Tracking and reviewing goals",
      skill: "Monitor progress toward CAS goals and adjust them as needed.",
      lesson: {
        sections: [
          {
            heading: "Why track progress",
            body: "Tracking keeps goals alive and reveals patterns: which activities you enjoy, which challenge you, where you struggle. It also provides evidence for your portfolio and reflection — you can see how far you've come and what you've learned.",
          },
          {
            heading: "Methods of tracking",
            body: "Simple methods work: a journal, a spreadsheet, photos, your CAS portfolio platform. Record what you did, when, and what you learned. Regular review (weekly or monthly) helps you stay on track and adjust goals if needed.",
          },
          {
            heading: "Adjusting goals",
            body: "If a goal proves too difficult, break it into smaller steps or adjust the timeline. If it proves too easy, increase the challenge. Goals are tools for growth, not rigid contracts — flexibility within commitment is healthy.",
          },
        ],
        keyFormulas: [
          { name: "Tracking rule", statement: "Record what, when, and what you learned" },
          { name: "Adjustment", statement: "Too hard = break down; too easy = increase challenge" },
        ],
        workedExample: {
          problem: "Your goal was 'run a 10k' but you've been injured. What do you do?",
          solution: "Adjust the goal: switch to swimming or cycling for activity strand, or extend the timeline. Document the change and reason in your reflection — this shows adaptability, not failure.",
        },
      },
      questions: [
        {
          id: "cas-u1-l12c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Tracking CAS goals helps you:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Monitor progress and identify patterns" },
              { id: "b", text: "Skip planning" },
              { id: "c", text: "Only to prove participation" },
              { id: "d", text: "Avoid reflection" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Progress tracking", statement: "Tracking reveals patterns and enables goal adjustment." },
            ],
            steps: [
              { reasoning: "Tracking monitors progress and reveals patterns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Monitor progress and identify patterns",
            commonErrors: ["Viewing tracking as mere documentation rather than learning tool."],
          },
        },
        {
          id: "cas-u1-l12c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to adjust CAS goals when circumstances change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal adjustment", statement: "Goals should be flexible within commitment — adjust rather than abandon." },
            ],
            steps: [
              { reasoning: "If too difficult: break into smaller steps or extend timeline.", marks: 1, markCode: "M" },
              { reasoning: "If too easy: increase challenge or add new dimension.", marks: 1, markCode: "M" },
              { reasoning: "Document changes and reasons in reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adjust goals by breaking down, extending timelines, or increasing challenge — and document changes.",
            commonErrors: ["Abandoning goals entirely when they become difficult."],
          },
        },
        {
          id: "cas-u1-l12c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that CAS goals should never be changed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal commitment", statement: "Commitment matters, but rigid goals can become counterproductive." },
            ],
            steps: [
              { reasoning: "For: consistent goals show commitment and enable measurement.", marks: 1, markCode: "M" },
              { reasoning: "Against: circumstances change; impossible goals waste effort.", marks: 1, markCode: "M" },
              { reasoning: "Frequent changes suggest lack of commitment; never changing suggests rigidity.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: adjust thoughtfully with documented reasons, not impulsively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals should be committed to but adjustable with good reason — flexibility within commitment.",
            commonErrors: ["Either never adjusting or changing goals constantly."],
          },
        },
        {
          id: "cas-u1-l12c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to track and review CAS goals.",
          parts: [
            { label: "a", prompt: "Explain why tracking progress matters.", marks: 2 },
            { label: "b", prompt: "Describe two methods of tracking goals.", marks: 2 },
            { label: "c", prompt: "Evaluate how to adjust goals appropriately.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal tracking", statement: "Tracking enables progress monitoring and informed adjustment." },
            ],
            steps: [
              { part: "a", reasoning: "Tracking reveals patterns and enables adjustment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Provides evidence for portfolio and reflection.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Journal or diary: record activities and learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Portfolio platform or spreadsheet: track hours and evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Too hard: break into steps or extend timeline.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Too easy: increase challenge.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Changed interests: adjust goals to reflect new direction.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: adjust thoughtfully, document reasons in reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Monitoring and evidence. (b) Journal, portfolio. (c) Adjust thoughtfully with reasons.",
            commonErrors: ["Adjusting goals without documenting reasons."],
          },
        },
        {
          id: "cas-u1-l12c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The most practical simple method to track CAS activities is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Not tracking at all" },
              { id: "b", text: "Asking friends to remind you" },
              { id: "c", text: "Keeping a journal, spreadsheet or portfolio record" },
              { id: "d", text: "Relying on memory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracking methods", statement: "Simple records like journals or portfolios effectively track CAS progress." },
            ],
            steps: [
              { reasoning: "Written or digital records provide reliable evidence of engagement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Keeping a journal, spreadsheet or portfolio record",
            commonErrors: ["Relying on memory rather than systematic records."],
          },
        },
        {
          id: "cas-u1-l12c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A weekly review of your CAS goals mainly helps you to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify patterns and adjust plans" },
              { id: "b", text: "Skip planning" },
              { id: "c", text: "Avoid reflection" },
              { id: "d", text: "Prove attendance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Progress review", statement: "Regular review reveals patterns and enables informed adjustment." },
            ],
            steps: [
              { reasoning: "Weekly review identifies patterns and areas needing adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Identify patterns and adjust plans",
            commonErrors: ["Viewing review as administrative rather than diagnostic."],
          },
        },
        {
          id: "cas-u1-l12c2q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If a CAS goal proves too difficult, the best response is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add even more goals" },
              { id: "b", text: "Abandon CAS entirely" },
              { id: "c", text: "Pretend it was achieved" },
              { id: "d", text: "Break it into smaller steps or adjust the timeline" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal adjustment", statement: "Difficult goals should be broken down or extended, not abandoned." },
            ],
            steps: [
              { reasoning: "Breaking down or extending makes the goal achievable while preserving commitment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Break it into smaller steps or adjust the timeline",
            commonErrors: ["Abandoning goals entirely when they become difficult."],
          },
        },
        {
          id: "cas-u1-l12c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Recording 'what you learned' during each CAS activity primarily supports:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Social media posts" },
              { id: "b", text: "Exam revision" },
              { id: "c", text: "Reflection and evidence for your portfolio" },
              { id: "d", text: "Grade prediction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection evidence", statement: "Recording learning provides material for reflection and portfolio evidence." },
            ],
            steps: [
              { reasoning: "Recording learning feeds reflection and portfolio documentation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reflection and evidence for your portfolio",
            commonErrors: ["Recording only activities without learning outcomes."],
          },
        },
        {
          id: "cas-u1-l12c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Documenting the reasons for changing a CAS goal demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adaptability and reflective practice" },
              { id: "b", text: "Indecisiveness" },
              { id: "c", text: "Confusion" },
              { id: "d", text: "Lack of commitment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflective adjustment", statement: "Documented goal changes show reflective adaptability, not weakness." },
            ],
            steps: [
              { reasoning: "Explaining changes demonstrates reflection on circumstances and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adaptability and reflective practice",
            commonErrors: ["Hiding goal changes rather than documenting reasons."],
          },
        },
        {
          id: "cas-u1-l12c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is LEAST useful to record when tracking CAS progress?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When you did it" },
              { id: "b", text: "Unrelated personal worries" },
              { id: "c", text: "What activity you did" },
              { id: "d", text: "What you learned" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tracking content", statement: "Tracking should record activities, timing and learning — not unrelated matters." },
            ],
            steps: [
              { reasoning: "Unrelated worries do not inform CAS progress or reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Unrelated personal worries",
            commonErrors: ["Recording irrelevant information instead of activity and learning."],
          },
        },
        {
          id: "cas-u1-l12c2q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'record what, when, and what you learned' means in CAS tracking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tracking rule", statement: "Record the activity, its timing, and the learning gained." },
            ],
            steps: [
              { reasoning: "What: describe the activity and your role in it.", marks: 1, markCode: "M" },
              { reasoning: "When: note frequency and timing to show regular engagement.", marks: 1, markCode: "M" },
              { reasoning: "Learned: record insights and skills gained for reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Record the activity details, when it happened, and what you learned from it.",
            commonErrors: ["Recording activities without noting learning outcomes."],
          },
        },
        {
          id: "cas-u1-l12c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two methods of tracking CAS goals and the benefit of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tracking methods", statement: "Journals, spreadsheets and portfolios each offer different tracking benefits." },
            ],
            steps: [
              { reasoning: "Journal or diary: records activities, feelings and reflections over time.", marks: 1, markCode: "M" },
              { reasoning: "Portfolio platform or spreadsheet: tracks hours, evidence and strand coverage.", marks: 1, markCode: "M" },
              { reasoning: "Photos or artefacts: provide visual evidence of progress.", marks: 1, markCode: "M" },
              { reasoning: "All methods support regular review and informed adjustment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Journals capture reflection; portfolios track evidence and hours — both enable review.",
            commonErrors: ["Choosing a method that is not maintained regularly."],
          },
        },
        {
          id: "cas-u1-l12c2q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that tracking CAS goals is just bureaucracy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tracking purpose", statement: "Tracking is a learning tool for monitoring progress and enabling adjustment." },
            ],
            steps: [
              { reasoning: "Tracking can appear to be paperwork with no immediate benefit.", marks: 1, markCode: "M" },
              { reasoning: "But it reveals patterns, prevents neglect of strands and enables adjustment.", marks: 1, markCode: "M" },
              { reasoning: "Records also provide evidence for reflection and portfolio requirements.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: tracking is a learning tool, not mere bureaucracy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tracking is not bureaucracy — it enables progress monitoring, reflection and evidence.",
            commonErrors: ["Viewing tracking as compliance rather than learning."],
          },
        },
        {
          id: "cas-u1-l12c2q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how to respond when CAS goals need adjustment.",
          parts: [
            { label: "a", prompt: "Explain how to respond when a goal becomes too difficult.", marks: 2 },
            { label: "b", prompt: "Explain how to respond when a goal becomes too easy.", marks: 2 },
            { label: "c", prompt: "Evaluate why documenting changes matters.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Goal adjustment", statement: "Adjust goals thoughtfully — break down when hard, increase challenge when easy." },
            ],
            steps: [
              { part: "a", reasoning: "Break the goal into smaller steps or extend the timeline.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "This preserves commitment while making it achievable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Increase the challenge or add a new dimension to the goal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This maintains growth rather than coasting.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Documenting changes shows reflective reasoning, not impulsiveness.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: documented adjustments demonstrate adaptability valued in CAS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Break down or extend. (b) Increase challenge. (c) Document reasons to show reflection.",
            commonErrors: ["Adjusting goals without recording the reasons."],
          },
        },
        {
          id: "cas-u1-l12c2q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how tracking progress supports the reflection requirement in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reflection support", statement: "Tracking records provide concrete material for meaningful reflection." },
            ],
            steps: [
              { reasoning: "Records of activities and learning give reflection concrete material.", marks: 1, markCode: "M" },
              { reasoning: "Regular review prompts examination of experiences and growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore tracking enables deeper, evidence-based reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tracking provides the evidence and prompts needed for genuine reflection.",
            commonErrors: ["Reflecting vaguely without recorded evidence."],
          },
        },
        {
          id: "cas-u1-l12c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that CAS goals should be adjusted whenever they feel difficult.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commitment vs flexibility", statement: "Adjustment is healthy when reasoned, but constant change shows weak commitment." },
            ],
            steps: [
              { reasoning: "Occasional adjustment in response to genuine obstacles is healthy.", marks: 1, markCode: "M" },
              { reasoning: "But adjusting whenever difficulty arises suggests lack of commitment.", marks: 1, markCode: "M" },
              { reasoning: "Working through manageable difficulty builds resilience and growth.", marks: 1, markCode: "M" },
              { reasoning: "Distinguish temporary obstacles from goals that are fundamentally unachievable.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: adjust thoughtfully with reasons, not impulsively at every difficulty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Adjust goals for genuine reasons, not merely because they feel difficult.",
            commonErrors: ["Either never adjusting or adjusting at the first sign of difficulty."],
          },
        },
        {
          id: "cas-u1-l12c2q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how progress review should inform future CAS goals.",
          parts: [
            { label: "a", prompt: "Explain how progress reviews can reveal patterns in your CAS engagement.", marks: 3 },
            { label: "b", prompt: "Describe how tracking provides evidence for portfolio and reflection.", marks: 2 },
            { label: "c", prompt: "Evaluate how findings from reviews should inform future goals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Review-informed goals", statement: "Progress reviews reveal patterns that should shape future goal-setting." },
            ],
            steps: [
              { part: "a", reasoning: "Reviews show which strands are neglected or over-represented.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They reveal which activities you enjoy and which challenge you.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Patterns of struggle or ease become visible over time.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Records provide concrete evidence of hours and activities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Learning notes feed directly into reflection pieces.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Findings should trigger adjustments: more of what works, fix what does not.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Gaps identified should inform new strand-specific goals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: future goals should be evidence-based, not arbitrary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Reviews reveal patterns. (b) Records are evidence. (c) Future goals should be evidence-based.",
            commonErrors: ["Collecting records without using them to adjust goals."],
          },
        },
      ],
    },
  ],
};
