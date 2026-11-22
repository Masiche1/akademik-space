import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cas-u3-lesson-3-3",
  code: "3-3",
  title: "CAS Assessment and Completion",
  goal: "I CAN understand CAS assessment requirements and ensure completion of all elements.",
  standards: ["CAS", "Assessment", "Completion"],
  vocabulary: [
    { term: "CAS completion", definition: "Meeting all requirements: hours, strands, reflection, project." },
    { term: "CAS hours", definition: "Minimum hours required per strand — check current IB requirements." },
    { term: "CAS project", definition: "A sustained initiative combining all three strands." },
    { term: "Supervisor review", definition: "Final review of portfolio and interview before completion." },
    { term: "Learning outcomes", definition: "Skills and insights gained, documented in reflections." },
    { term: "DP core", definition: "CAS, TOK and EE — required components of the IB Diploma." },
  ],
  concepts: [
    {
      id: "cas-u3-completion",
      title: "CAS completion requirements",
      skill: "Understand and meet all CAS completion requirements.",
      lesson: {
        sections: [
          {
            heading: "What CAS requires",
            body: "CAS completion requires: regular engagement in all three strands (creativity, activity, service); a CAS project combining all strands; documented evidence; and meaningful reflection. There are minimum hour requirements per strand — check current IB guidelines as these may change.",
          },
          {
            heading: "The CAS project",
            body: "Every student must complete at least one CAS project — a sustained initiative over several months combining creativity, activity and service. Projects can be individual or collaborative. They demonstrate deeper engagement than regular activities and are essential for completion.",
          },
          {
            heading: "Supervisor review",
            body: "Before completion, your supervisor reviews your portfolio and conducts an interview. They assess whether you have genuinely engaged, reflected meaningfully, and met requirements. The review is not just administrative — it evaluates your CAS journey.",
          },
        ],
        keyFormulas: [
          { name: "Completion checklist", statement: "Strand hours + project + evidence + reflection + supervisor review" },
          { name: "Project requirement", statement: "At least one sustained multi-strand project" },
        ],
        workedExample: {
          problem: "Check if a student has completed CAS.",
          solution: "Verify: sufficient hours in each strand, at least one CAS project completed, portfolio with evidence and reflections, supervisor sign-off. Missing any element means incomplete.",
        },
      },
      questions: [
        {
          id: "cas-u3-l33c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS completion requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing formal" },
              { id: "b", text: "Only activity hours" },
              { id: "c", text: "All three strands, a project and reflection" },
              { id: "d", text: "Only a portfolio" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS completion", statement: "Requires all strands, project, evidence and reflection." },
            ],
            steps: [
              { reasoning: "CAS requires all three strands, project and reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** All three strands, a project and reflection",
            commonErrors: ["Thinking one strand is sufficient for completion."],
          },
        },
        {
          id: "cas-u3-l33c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of the CAS project in completion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS project", statement: "Project demonstrates sustained multi-strand engagement." },
            ],
            steps: [
              { reasoning: "Project combines all three strands over months.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrates initiative and deeper engagement.", marks: 1, markCode: "M" },
              { reasoning: "It is essential for CAS completion — cannot be skipped.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The CAS project is essential — it demonstrates sustained engagement across all strands.",
            commonErrors: ["Thinking regular activities alone satisfy CAS requirements."],
          },
        },
        {
          id: "cas-u3-l33c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the importance of the supervisor review in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor review", statement: "Review assesses genuine engagement and learning." },
            ],
            steps: [
              { reasoning: "For: review verifies genuine engagement and meaningful reflection.", marks: 1, markCode: "M" },
              { reasoning: "For: it is part of formal assessment — cannot be bypassed.", marks: 1, markCode: "M" },
              { reasoning: "Against: students may see it as bureaucratic.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: review is essential for verifying CAS completion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Supervisor review is essential — it verifies genuine engagement and is part of assessment.",
            commonErrors: ["Treating review as a formality rather than assessment."],
          },
        },
        {
          id: "cas-u3-l33c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine CAS completion requirements.",
          parts: [
            { label: "a", prompt: "List what CAS completion requires.", marks: 2 },
            { label: "b", prompt: "Explain the CAS project requirement.", marks: 3 },
            { label: "c", prompt: "Evaluate how to ensure completion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS completion", statement: "Requires all strands, project, evidence, reflection and review." },
            ],
            steps: [
              { part: "a", reasoning: "All strands, project, evidence, reflection, review.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Project combines all three strands over months.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Demonstrates initiative and sustained engagement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Essential — cannot be skipped.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Track hours and requirements regularly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Start project early enough to complete it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: regular tracking prevents last-minute problems.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) All requirements listed. (b) Essential multi-strand project. (c) Regular tracking ensures completion.",
            commonErrors: ["Leaving CAS until the final term."],
          },
        },
        {
          id: "cas-u3-l33c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The CAS project must combine which strands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creativity and service only" },
              { id: "b", text: "Only service" },
              { id: "c", text: "All three strands" },
              { id: "d", text: "Only activity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS project", statement: "The project combines creativity, activity and service." },
            ],
            steps: [
              { reasoning: "The project combines all three strands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** All three strands",
            commonErrors: ["Thinking the project can cover only one strand."],
          },
        },
        {
          id: "cas-u3-l33c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Before completion, the supervisor conducts:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written exam" },
              { id: "b", text: "Nothing — completion is automatic" },
              { id: "c", text: "A portfolio review and interview" },
              { id: "d", text: "A peer vote" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Supervisor review", statement: "Supervisor reviews portfolio and conducts an interview." },
            ],
            steps: [
              { reasoning: "Review includes portfolio assessment and interview.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A portfolio review and interview",
            commonErrors: ["Thinking completion is automatic."],
          },
        },
        {
          id: "cas-u3-l33c1q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "CAS hour requirements:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Do not exist" },
              { id: "b", text: "Apply only to activity" },
              { id: "c", text: "Are the same for every strand and never change" },
              { id: "d", text: "Should be checked against current IB guidelines" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS hours", statement: "Minimum hours per strand — check current IB requirements as they may change." },
            ],
            steps: [
              { reasoning: "Requirements may change; verify current guidelines.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Should be checked against current IB guidelines",
            commonErrors: ["Assuming old hour requirements still apply."],
          },
        },
        {
          id: "cas-u3-l33c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A CAS project can be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual or collaborative" },
              { id: "b", text: "Only individual" },
              { id: "c", text: "Only group" },
              { id: "d", text: "Completed in one afternoon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS project", statement: "Projects can be individual or collaborative." },
            ],
            steps: [
              { reasoning: "Projects may be individual or collaborative.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Individual or collaborative",
            commonErrors: ["Thinking projects must be solo."],
          },
        },
        {
          id: "cas-u3-l33c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which element is NOT required for CAS completion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meaningful reflection" },
              { id: "b", text: "A written examination" },
              { id: "c", text: "A CAS project" },
              { id: "d", text: "Engagement in all three strands" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS completion", statement: "Requires strands, project, evidence and reflection — no exam." },
            ],
            steps: [
              { reasoning: "CAS has no written examination.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A written examination",
            commonErrors: ["Assuming CAS is exam-assessed like other components."],
          },
        },
        {
          id: "cas-u3-l33c1q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student completes all strand hours but no project. Their CAS status is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete" },
              { id: "b", text: "Complete if reflections are good" },
              { id: "c", text: "Exempt" },
              { id: "d", text: "Incomplete — the project is essential" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS project requirement", statement: "At least one project is essential for completion." },
            ],
            steps: [
              { reasoning: "Missing the project means incomplete CAS.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Incomplete — the project is essential",
            commonErrors: ["Thinking strand hours alone satisfy CAS."],
          },
        },
        {
          id: "cas-u3-l33c1q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The supervisor review evaluates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer opinions" },
              { id: "b", text: "Genuine engagement, reflection and requirement coverage" },
              { id: "c", text: "Only the number of hours logged" },
              { id: "d", text: "Only the CAS project" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor review", statement: "Review assesses genuine engagement, reflection and requirements." },
            ],
            steps: [
              { reasoning: "Review covers engagement, reflection and coverage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Genuine engagement, reflection and requirement coverage",
            commonErrors: ["Reducing review to hour-counting."],
          },
        },
        {
          id: "cas-u3-l33c1q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the key elements required for CAS completion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS completion", statement: "Checklist of required elements." },
            ],
            steps: [
              { reasoning: "Regular engagement in all three strands meeting hour requirements.", marks: 1, markCode: "M" },
              { reasoning: "At least one CAS project completed.", marks: 1, markCode: "M" },
              { reasoning: "Documented evidence, meaningful reflection and supervisor sign-off.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Strand hours, project, evidence, reflection and supervisor review.",
            commonErrors: ["Omitting the project or reflection from the checklist."],
          },
        },
        {
          id: "cas-u3-l33c1q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the CAS project is considered essential for completion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS project", statement: "Project demonstrates sustained multi-strand engagement." },
            ],
            steps: [
              { reasoning: "It combines all three strands over several months.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrates initiative beyond routine activities.", marks: 1, markCode: "M" },
              { reasoning: "It is a formal requirement — cannot be skipped.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The project proves sustained multi-strand engagement and is mandatory.",
            commonErrors: ["Treating the project as optional extra."],
          },
        },
        {
          id: "cas-u3-l33c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe what a supervisor looks for during the CAS review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor review", statement: "Review evaluates genuine engagement and learning." },
            ],
            steps: [
              { reasoning: "Whether all strands and the project are adequately covered.", marks: 1, markCode: "M" },
              { reasoning: "Quality of reflections — genuine learning vs box-ticking.", marks: 1, markCode: "M" },
              { reasoning: "Evidence that activities actually occurred.", marks: 1, markCode: "M" },
              { reasoning: "Overall judgement of the student's CAS journey.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coverage, reflection quality, evidence authenticity and overall engagement.",
            commonErrors: ["Thinking the review only checks paperwork."],
          },
        },
        {
          id: "cas-u3-l33c1q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how a student can ensure they meet all CAS completion requirements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "CAS completion", statement: "Track requirements regularly to avoid last-minute problems." },
            ],
            steps: [
              { reasoning: "Track hours per strand against current IB requirements.", marks: 1, markCode: "M" },
              { reasoning: "Start the CAS project early enough to complete it.", marks: 1, markCode: "M" },
              { reasoning: "Maintain portfolio evidence and reflections continuously.", marks: 1, markCode: "M" },
              { reasoning: "Review progress with the supervisor periodically.", marks: 1, markCode: "R" },
              { reasoning: "Leave buffer time before the deadline for gaps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Track hours, start the project early, maintain evidence and review progress regularly.",
            commonErrors: ["Leaving CAS until the final term."],
          },
        },
        {
          id: "cas-u3-l33c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the importance of the supervisor review in CAS completion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supervisor review", statement: "Review verifies genuine engagement and is part of assessment." },
            ],
            steps: [
              { reasoning: "For: it verifies genuine engagement and meaningful reflection.", marks: 1, markCode: "M" },
              { reasoning: "For: it is part of formal assessment, not a formality.", marks: 1, markCode: "M" },
              { reasoning: "Against: students may see it as bureaucratic.", marks: 1, markCode: "R" },
              { reasoning: "But the review is where learning is judged holistically.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: the review is essential for verifying completion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Supervisor review is essential — it assesses genuine engagement holistically.",
            commonErrors: ["Treating the review as an administrative formality."],
          },
        },
        {
          id: "cas-u3-l33c1q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student asks whether they can complete CAS by doing only the minimum hours. Evaluate this strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS purpose", statement: "CAS values genuine engagement and learning, not minimal compliance." },
            ],
            steps: [
              { reasoning: "Minimum hours may technically meet requirements.", marks: 1, markCode: "M" },
              { reasoning: "But token engagement produces shallow reflections.", marks: 1, markCode: "M" },
              { reasoning: "Supervisors assess genuine engagement, not just hours.", marks: 1, markCode: "M" },
              { reasoning: "The project still requires sustained multi-strand commitment.", marks: 1, markCode: "R" },
              { reasoning: "Minimal strategies risk a poor review outcome.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: aim for genuine engagement, not minimum compliance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Minimum hours may satisfy requirements on paper but risk poor assessment — genuine engagement is valued.",
            commonErrors: ["Confusing meeting requirements with genuine engagement."],
          },
        },
        {
          id: "cas-u3-l33c1q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare the CAS project with regular strand activities.",
          parts: [
            { label: "a", prompt: "Describe what regular strand activities involve.", marks: 2 },
            { label: "b", prompt: "Describe what the CAS project requires.", marks: 2 },
            { label: "c", prompt: "Evaluate why both are needed for completion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS structure", statement: "Regular activities plus one sustained multi-strand project." },
            ],
            steps: [
              { part: "a", reasoning: "Ongoing activities within each strand meeting hour requirements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Breadth of engagement across creativity, activity, service.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "One sustained initiative over months combining all strands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Demonstrates initiative and deeper engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Activities show breadth; project shows depth.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: both are required — neither substitutes for the other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ongoing strand activities. (b) One multi-strand project. (c) Breadth plus depth — both required.",
            commonErrors: ["Thinking the project replaces strand activities."],
          },
        },
        {
          id: "cas-u3-l33c1q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine CAS completion requirements and how to verify them.",
          parts: [
            { label: "a", prompt: "List the completion requirements.", marks: 2 },
            { label: "b", prompt: "Explain how to track progress against them.", marks: 2 },
            { label: "c", prompt: "Evaluate the role of the final supervisor review.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS completion", statement: "Checklist plus supervisor verification." },
            ],
            steps: [
              { part: "a", reasoning: "All strands, project, evidence, reflection, review.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Track hours and portfolio entries regularly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Check project progress and reflection quality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Review verifies genuine engagement holistically.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is part of formal assessment, not a formality.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: completion is confirmed only after successful review.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) All requirements. (b) Regular tracking. (c) Review confirms completion.",
            commonErrors: ["Assuming completion is automatic once hours are logged."],
          },
        },
        {
          id: "cas-u3-l33c1q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine CAS completion requirements.",
          parts: [
            { label: "a", prompt: "List what CAS completion requires.", marks: 2 },
            { label: "b", prompt: "Explain the CAS project requirement.", marks: 3 },
            { label: "c", prompt: "Evaluate how to ensure completion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS completion", statement: "Requires all strands, project, evidence, reflection and review." },
            ],
            steps: [
              { part: "a", reasoning: "All strands, project, evidence, reflection, review.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Project combines all three strands over months.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Demonstrates initiative and sustained engagement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Essential — cannot be skipped.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Track hours and requirements regularly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Start project early enough to complete it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: regular tracking prevents last-minute problems.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) All requirements listed. (b) Essential multi-strand project. (c) Regular tracking ensures completion.",
            commonErrors: ["Leaving CAS until the final term."],
          },
        },
      ],
    },
    {
      id: "cas-u3-assessment",
      title: "CAS assessment and the learning journey",
      skill: "Understand how CAS is assessed and reflect on the overall learning journey.",
      lesson: {
        sections: [
          {
            heading: "How CAS is assessed",
            body: "CAS is assessed holistically: supervisors evaluate your engagement, reflection and learning across the programme. There is no exam — assessment is based on your portfolio, reflections and supervisor observations. The goal is genuine development, not just completion.",
          },
          {
            heading: "The learning journey",
            body: "CAS is designed to develop you as a whole person: creativity fosters imagination, activity fosters health, service fosters empathy. The real assessment is whether you have grown — new skills, new perspectives, new relationships. Your portfolio should tell this story.",
          },
          {
            heading: "Beyond completion",
            body: "CAS does not end at graduation — the habits and skills developed continue. The programme aims to create lifelong learners who value balanced development. Reflect on what CAS has meant to you personally, not just what you have completed.",
          },
        ],
        keyFormulas: [
          { name: "Assessment basis", statement: "Holistic: engagement + reflection + learning, not exam" },
          { name: "CAS goal", statement: "Develop whole person — creativity, health, empathy" },
        ],
        workedExample: {
          problem: "How is CAS different from other DP core components?",
          solution: "CAS is assessed holistically through portfolio and supervisor review, not exams like TOK essay or EE. It values the process and learning journey, not just final products. The emphasis is on personal development.",
        },
      },
      questions: [
        {
          id: "cas-u3-l33c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS is assessed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peer voting" },
              { id: "b", text: "Portfolio review and supervisor assessment" },
              { id: "c", text: "Only attendance" },
              { id: "d", text: "Written exams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS assessment", statement: "Assessed holistically through portfolio and supervisor review." },
            ],
            steps: [
              { reasoning: "CAS assessed via portfolio and supervisor, not exams.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Portfolio review and supervisor assessment",
            commonErrors: ["Thinking CAS is assessed like other exam components."],
          },
        },
        {
          id: "cas-u3-l33c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what CAS aims to develop in students.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS purpose", statement: "Develops creativity, physical health and community engagement." },
            ],
            steps: [
              { reasoning: "Creativity develops imagination and original thinking.", marks: 1, markCode: "M" },
              { reasoning: "Activity develops physical health and wellbeing.", marks: 1, markCode: "M" },
              { reasoning: "Service develops empathy, community connection and social responsibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS develops imagination, physical health and community engagement.",
            commonErrors: ["Thinking CAS is only about completing hours."],
          },
        },
        {
          id: "cas-u3-l33c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that CAS assessment is less rigorous than other DP components.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "Holistic assessment values genuine engagement over exam performance." },
            ],
            steps: [
              { reasoning: "For 'less rigorous': no exam, supervisor-based assessment.", marks: 1, markCode: "M" },
              { reasoning: "Against: holistic assessment evaluates real engagement over months.", marks: 1, markCode: "M" },
              { reasoning: "Different doesn't mean easier — sustained commitment is required.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: CAS assesses differently, not less rigorously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS assesses differently, not less rigorously — sustained genuine engagement is required.",
            commonErrors: ["Assuming no exam means no assessment."],
          },
        },
        {
          id: "cas-u3-l33c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine CAS assessment and its purpose.",
          parts: [
            { label: "a", prompt: "Explain how CAS is assessed.", marks: 2 },
            { label: "b", prompt: "Describe what CAS aims to develop.", marks: 3 },
            { label: "c", prompt: "Evaluate the value of CAS beyond completion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "Holistic assessment of genuine engagement and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Portfolio review and supervisor assessment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No exam — evaluates engagement and reflection.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Creativity: imagination and expression.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Activity: physical health and wellbeing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Service: empathy and community engagement.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CAS develops lifelong habits and skills.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It values personal growth over credentials.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: CAS's value extends beyond the programme itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Portfolio + supervisor review. (b) Imagination, health, empathy. (c) Lifelong development.",
            commonErrors: ["Viewing CAS as merely a requirement to complete."],
          },
        },
        {
          id: "cas-u3-l33c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS is assessed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is not assessed at all" },
              { id: "b", text: "Holistically through portfolio and supervisor review" },
              { id: "c", text: "By written examination" },
              { id: "d", text: "By peer voting only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS assessment", statement: "Assessed holistically via portfolio and supervisor review." },
            ],
            steps: [
              { reasoning: "CAS is assessed holistically, not by exam.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Holistically through portfolio and supervisor review",
            commonErrors: ["Assuming CAS is assessed like other exam components."],
          },
        },
        {
          id: "cas-u3-l33c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'activity' strand of CAS primarily develops:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Academic grades" },
              { id: "b", text: "Physical health and wellbeing" },
              { id: "c", text: "Imagination" },
              { id: "d", text: "Community empathy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS strands", statement: "Activity develops physical health; creativity imagination; service empathy." },
            ],
            steps: [
              { reasoning: "Activity strand develops physical health.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Physical health and wellbeing",
            commonErrors: ["Confusing the aims of the three strands."],
          },
        },
        {
          id: "cas-u3-l33c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'service' strand of CAS primarily develops:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Empathy and community engagement" },
              { id: "b", text: "Physical fitness" },
              { id: "c", text: "Artistic skill" },
              { id: "d", text: "Exam technique" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS strands", statement: "Service develops empathy, community connection and social responsibility." },
            ],
            steps: [
              { reasoning: "Service develops empathy and community engagement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Empathy and community engagement",
            commonErrors: ["Confusing service with activity aims."],
          },
        },
        {
          id: "cas-u3-l33c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'creativity' strand of CAS primarily develops:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Community service hours" },
              { id: "b", text: "Research skills" },
              { id: "c", text: "Physical endurance" },
              { id: "d", text: "Imagination and original thinking" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS strands", statement: "Creativity develops imagination and original thinking." },
            ],
            steps: [
              { reasoning: "Creativity develops imagination and expression.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Imagination and original thinking",
            commonErrors: ["Confusing creativity with service aims."],
          },
        },
        {
          id: "cas-u3-l33c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "CAS differs from the TOK essay and EE because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is assessed by written examination" },
              { id: "b", text: "Is optional" },
              { id: "c", text: "Has no supervisor involvement" },
              { id: "d", text: "Values the learning process over final products" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "CAS values process and learning journey, not just products." },
            ],
            steps: [
              { reasoning: "CAS assesses engagement and growth, not just output.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Values the learning process over final products",
            commonErrors: ["Treating CAS like other assessed components."],
          },
        },
        {
          id: "cas-u3-l33c2q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The 'real assessment' in CAS is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Portfolio length" },
              { id: "b", text: "The number of certificates collected" },
              { id: "c", text: "Whether the student has genuinely grown" },
              { id: "d", text: "Hours logged per strand" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS goal", statement: "The real assessment is whether the student has grown." },
            ],
            steps: [
              { reasoning: "Growth — new skills, perspectives, relationships — is the true measure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Whether the student has genuinely grown",
            commonErrors: ["Measuring CAS by quantity rather than growth."],
          },
        },
        {
          id: "cas-u3-l33c2q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "CAS habits and skills are designed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Continue as lifelong learning habits" },
              { id: "b", text: "End at graduation" },
              { id: "c", text: "Replace academic study" },
              { id: "d", text: "Apply only to school" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Beyond completion", statement: "CAS aims to create lifelong learners with lasting habits." },
            ],
            steps: [
              { reasoning: "CAS develops habits that continue beyond the programme.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Continue as lifelong learning habits",
            commonErrors: ["Viewing CAS as ending at graduation."],
          },
        },
        {
          id: "cas-u3-l33c2q12",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain how CAS is assessed differently from other DP core components.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "CAS assessment", statement: "Holistic portfolio and supervisor assessment, no exam." },
            ],
            steps: [
              { reasoning: "No written exam — assessed through portfolio and review.", marks: 1, markCode: "M" },
              { reasoning: "Evaluates sustained engagement over months, not a single product.", marks: 1, markCode: "M" },
              { reasoning: "Values process and personal growth over final output.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS uses holistic portfolio review — valuing process and growth, not exams.",
            commonErrors: ["Expecting CAS to have an exam like other components."],
          },
        },
        {
          id: "cas-u3-l33c2q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe what CAS aims to develop in students as whole persons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS purpose", statement: "Develops creativity, physical health and community engagement." },
            ],
            steps: [
              { reasoning: "Creativity fosters imagination and original thinking.", marks: 1, markCode: "M" },
              { reasoning: "Activity fosters physical health and wellbeing.", marks: 1, markCode: "M" },
              { reasoning: "Service fosters empathy and social responsibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Imagination, physical health and community engagement.",
            commonErrors: ["Thinking CAS only develops practical skills."],
          },
        },
        {
          id: "cas-u3-l33c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the CAS portfolio should 'tell the story' of the student's journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio story", statement: "Portfolio shows growth, balance and genuine engagement over time." },
            ],
            steps: [
              { reasoning: "A story shows progression from start to finish.", marks: 1, markCode: "M" },
              { reasoning: "It reveals growth in skills and perspectives.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrates balance across all strands.", marks: 1, markCode: "M" },
              { reasoning: "It convinces supervisors of genuine engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The portfolio narrative demonstrates growth, balance and genuine engagement.",
            commonErrors: ["Presenting a flat list of activities without progression."],
          },
        },
        {
          id: "cas-u3-l33c2q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Evaluate the value of CAS beyond simply completing requirements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS purpose", statement: "CAS develops whole-person growth and lifelong habits." },
            ],
            steps: [
              { reasoning: "Beyond completion: develops creativity, health and empathy.", marks: 1, markCode: "M" },
              { reasoning: "Builds relationships and community connections.", marks: 1, markCode: "M" },
              { reasoning: "Creates habits of balanced development.", marks: 1, markCode: "R" },
              { reasoning: "Values personal growth over credentials.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: CAS's real value is lifelong development, not just the certificate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS's value extends beyond completion — it develops lifelong habits and whole-person growth.",
            commonErrors: ["Viewing CAS as merely a requirement to complete."],
          },
        },
        {
          id: "cas-u3-l33c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that CAS assessment is less rigorous than other DP components.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "Holistic assessment values genuine engagement over exam performance." },
            ],
            steps: [
              { reasoning: "For 'less rigorous': no exam, supervisor-based assessment.", marks: 1, markCode: "M" },
              { reasoning: "Against: holistic assessment evaluates real engagement over months.", marks: 1, markCode: "M" },
              { reasoning: "Different doesn't mean easier — sustained commitment is required.", marks: 1, markCode: "R" },
              { reasoning: "Supervisors can detect tokenism that exams cannot.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: CAS assesses differently, not less rigorously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS assesses differently, not less rigorously — sustained genuine engagement is required.",
            commonErrors: ["Assuming no exam means no assessment."],
          },
        },
        {
          id: "cas-u3-l33c2q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "How does the CAS learning journey differ from a checklist of completed activities?",
          parts: [
            { label: "a", prompt: "Describe what a checklist approach looks like.", marks: 2 },
            { label: "b", prompt: "Describe what a learning journey approach looks like.", marks: 2 },
            { label: "c", prompt: "Evaluate which better serves CAS's purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS purpose", statement: "CAS aims at genuine development, not box-ticking." },
            ],
            steps: [
              { part: "a", reasoning: "Checklist: counting hours and activities without reflection.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Focuses on completion metrics only.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Journey: growth in skills, perspectives and relationships over time.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Emphasises learning and development.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Checklist satisfies requirements but misses the point.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judgement: the learning journey is what CAS is designed to produce.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Hour-counting without reflection. (b) Growth over time. (c) Journey approach serves CAS's purpose.",
            commonErrors: ["Reducing CAS to a compliance exercise."],
          },
        },
        {
          id: "cas-u3-l33c2q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the role of reflection in CAS assessment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "Reflection is the primary evidence of learning." },
            ],
            steps: [
              { reasoning: "For: reflection is the main evidence of genuine learning.", marks: 1, markCode: "M" },
              { reasoning: "For: supervisors assess reflection quality during review.", marks: 1, markCode: "M" },
              { reasoning: "Against: reflections can be written superficially.", marks: 1, markCode: "R" },
              { reasoning: "But authentic reflections reveal genuine engagement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: reflection quality is central to CAS assessment.", marks: 1, markCode: "A" },
              { reasoning: "It distinguishes learning from mere participation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection is central to CAS assessment — it is the primary evidence of learning.",
            commonErrors: ["Writing reflections as an afterthought."],
          },
        },
        {
          id: "cas-u3-l33c2q19",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Examine CAS assessment and its purpose.",
          parts: [
            { label: "a", prompt: "Explain how CAS is assessed.", marks: 2 },
            { label: "b", prompt: "Describe what CAS aims to develop.", marks: 2 },
            { label: "c", prompt: "Evaluate the value of CAS beyond completion.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS assessment", statement: "Holistic assessment of genuine engagement and learning." },
            ],
            steps: [
              { part: "a", reasoning: "Portfolio review and supervisor assessment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "No exam — evaluates engagement and reflection.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Creativity: imagination; activity: health; service: empathy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Whole-person balanced development.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "CAS develops lifelong habits and skills.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It values personal growth over credentials.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: CAS's value extends beyond the programme itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Portfolio + supervisor review. (b) Imagination, health, empathy. (c) Lifelong development.",
            commonErrors: ["Viewing CAS as merely a requirement to complete."],
          },
        },
        {
          id: "cas-u3-l33c2q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the holistic nature of CAS assessment.",
          parts: [
            { label: "a", prompt: "Explain what 'holistic assessment' means in CAS.", marks: 2 },
            { label: "b", prompt: "Describe the evidence supervisors consider.", marks: 3 },
            { label: "c", prompt: "Evaluate how holistic assessment differs from exam-based assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Holistic assessment", statement: "CAS evaluates the whole learning journey, not isolated products." },
            ],
            steps: [
              { part: "a", reasoning: "Evaluates engagement, reflection and growth across the whole programme.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Considers the entire CAS journey, not single events.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Portfolio evidence of all strands and the project.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Quality of reflections showing learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Supervisor observations during the interview.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exams test recall; holistic assessment judges sustained development.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It cannot be gamed by memorisation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: holistic assessment better captures genuine growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Whole-journey evaluation. (b) Evidence, reflections, observations. (c) Captures genuine growth better than exams.",
            commonErrors: ["Expecting CAS assessment to resemble exam marking."],
          },
        },
      ],
    },
  ],
};
