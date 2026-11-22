import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cas-u2-lesson-2-1",
  code: "2-1",
  title: "Planning Activities and Projects",
  goal: "I CAN plan individual activities and longer CAS projects effectively.",
  standards: ["CAS", "Planning", "Projects"],
  vocabulary: [
    { term: "CAS activity", definition: "A single event or regular participation in one strand." },
    { term: "CAS project", definition: "A sustained initiative over several months combining all three strands." },
    { term: "Project plan", definition: "A document outlining goals, timeline, resources and roles for a project." },
    { term: "Stakeholder", definition: "People affected by or involved in the project." },
    { term: "Milestone", definition: "A key checkpoint or deadline in project progress." },
    { term: "Evaluation", definition: "Assessing whether the project achieved its goals." },
  ],
  concepts: [
    {
      id: "cas-u2-planning-basics",
      title: "Planning individual activities",
      skill: "Plan and execute individual CAS activities effectively.",
      lesson: {
        sections: [
          {
            heading: "Activity planning",
            body: "For individual activities: choose something you can sustain; check it fits a strand; plan regular participation; record what you do. Simple planning prevents last-minute scrambles and ensures consistent engagement.",
          },
          {
            heading: "Regular vs one-off",
            body: "Regular activities (weekly sport, monthly volunteering) build habits and deeper learning. One-off events (a single concert, one clean-up) are less valuable but can still count if meaningful. Aim for regularity — sustained engagement is what CAS rewards.",
          },
          {
            heading: "Documentation during activities",
            body: "Even for simple activities, keep records: dates, what you did, what you learned. Photos, attendance records, or brief notes serve as evidence. This documentation feeds into your portfolio and reflection later.",
          },
        ],
        keyFormulas: [
          { name: "Activity plan", statement: "Choose strand → schedule regular → record participation" },
          { name: "Regularity rule", statement: "Sustained engagement beats one-off events" },
        ],
        workedExample: {
          problem: "Plan a weekly activity strand engagement.",
          solution: "Choose activity strand: join school football team, training Tuesdays/Thursdays. Record attendance and reflections weekly. Set goal: improve fitness and teamwork skills over one term.",
        },
      },
      questions: [
        {
          id: "cas-u2-l21c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Regular CAS activities are preferred over one-off events because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They build habits and deeper learning" },
              { id: "b", text: "They require less reflection" },
              { id: "c", text: "They count for more marks automatically" },
              { id: "d", text: "They are easier to organise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular engagement", statement: "Regular activities build habits and enable deeper learning." },
            ],
            steps: [
              { reasoning: "Regular participation builds habits and learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They build habits and deeper learning",
            commonErrors: ["Thinking one-off events are equivalent to regular engagement."],
          },
        },
        {
          id: "cas-u2-l21c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the steps for planning an individual CAS activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Activity planning", statement: "Choose strand, schedule regular participation, record progress." },
            ],
            steps: [
              { reasoning: "Choose activity that fits a strand and interests you.", marks: 1, markCode: "M" },
              { reasoning: "Schedule regular participation — weekly or monthly.", marks: 1, markCode: "M" },
              { reasoning: "Record participation and learning for portfolio.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Choose strand-appropriate activity, schedule regularly, record participation.",
            commonErrors: ["Choosing activities without considering strand fit or sustainability."],
          },
        },
        {
          id: "cas-u2-l21c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that one-off events are as valuable as regular activities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular vs one-off", statement: "Regular activities enable sustained learning; one-offs are less valuable." },
            ],
            steps: [
              { reasoning: "For: one-off events can be meaningful if well-chosen.", marks: 1, markCode: "M" },
              { reasoning: "Against: one-offs lack sustained engagement and habit formation.", marks: 1, markCode: "M" },
              { reasoning: "Regular activities allow skill development and deeper reflection.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: regular engagement is more valuable, though meaningful one-offs still count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Regular activities are more valuable for sustained learning, though meaningful one-offs still contribute.",
            commonErrors: ["Equating quantity of events with quality of engagement."],
          },
        },
        {
          id: "cas-u2-l21c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to plan individual CAS activities.",
          parts: [
            { label: "a", prompt: "Describe the steps for planning an activity.", marks: 2 },
            { label: "b", prompt: "Explain why regular participation matters.", marks: 3 },
            { label: "c", prompt: "Evaluate how to choose sustainable activities.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity planning", statement: "Plan strand-appropriate, regular, sustainable activities." },
            ],
            steps: [
              { part: "a", reasoning: "Choose strand → schedule → record.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All steps described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Regular participation builds habits and skills.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Enables deeper reflection and learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shows sustained commitment valued by CAS.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consider time, interest and academic workload.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Choose activities you can maintain long-term.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: sustainability ensures consistent engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Choose, schedule, record. (b) Habits, skills, reflection. (c) Sustainability essential.",
            commonErrors: ["Choosing activities without considering long-term sustainability."],
          },
        },
        {
          id: "cas-u2-l21c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the best first step when planning an individual CAS activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choose a strand-appropriate activity you can sustain" },
              { id: "b", text: "Invite as many friends as possible" },
              { id: "c", text: "Buy any equipment needed" },
              { id: "d", text: "Skip planning and start immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity planning", statement: "Choose a sustainable, strand-appropriate activity first." },
            ],
            steps: [
              { reasoning: "Planning starts with choosing a sustainable strand-appropriate activity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Choose a strand-appropriate activity you can sustain",
            commonErrors: ["Starting an activity without checking strand fit or sustainability."],
          },
        },
        {
          id: "cas-u2-l21c1q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student attends weekly chess club and monthly beach clean-ups. This pattern best demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regular engagement across strands" },
              { id: "b", text: "One-off participation" },
              { id: "c", text: "No strand fit" },
              { id: "d", text: "Competition with others" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regularity", statement: "Regular participation builds habits and deeper learning." },
            ],
            steps: [
              { reasoning: "Weekly and monthly attendance shows sustained, regular engagement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regular engagement across strands",
            commonErrors: ["Confusing occasional attendance with regular participation."],
          },
        },
        {
          id: "cas-u2-l21c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Keeping records during CAS activities is useful because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provides evidence for the portfolio later" },
              { id: "b", text: "Is only required once a year" },
              { id: "c", text: "Eliminates the need for planning" },
              { id: "d", text: "Replaces reflection entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation", statement: "Records during activities feed the portfolio and reflection." },
            ],
            steps: [
              { reasoning: "Records provide evidence for the portfolio later.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Provides evidence for the portfolio later",
            commonErrors: ["Thinking records replace the need for reflection."],
          },
        },
        {
          id: "cas-u2-l21c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Regular CAS participation is valued because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removes the need for reflection" },
              { id: "b", text: "Builds habits and enables deeper learning" },
              { id: "c", text: "Shortens the CAS requirement" },
              { id: "d", text: "Automatically earns extra marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regularity rule", statement: "Sustained engagement beats one-off events." },
            ],
            steps: [
              { reasoning: "Regular participation builds habits and deeper learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Builds habits and enables deeper learning",
            commonErrors: ["Thinking regularity automatically earns marks without engagement."],
          },
        },
        {
          id: "cas-u2-l21c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which option is most sustainable as a regular CAS activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One poster design" },
              { id: "b", text: "A single charity concert" },
              { id: "c", text: "An annual exam" },
              { id: "d", text: "Weekly swimming lessons" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability", statement: "Choose activities you can maintain alongside studies." },
            ],
            steps: [
              { reasoning: "Weekly lessons can be sustained regularly; the others are one-off events.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weekly swimming lessons",
            commonErrors: ["Choosing exciting one-off events over maintainable regular activities."],
          },
        },
        {
          id: "cas-u2-l21c1q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might a well-chosen one-off event still count toward CAS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only for teachers" },
              { id: "b", text: "It never counts toward CAS" },
              { id: "c", text: "Only if it is paid work" },
              { id: "d", text: "If it is meaningful and well documented" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regular vs one-off", statement: "Regular engagement is preferred, but meaningful one-offs still count." },
            ],
            steps: [
              { reasoning: "One-off events are less valuable but can still count if meaningful.", marks: 1, markCode: "M" },
              { reasoning: "Documentation makes the participation verifiable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** If it is meaningful and well documented",
            commonErrors: ["Believing one-off events never count at all."],
          },
        },
        {
          id: "cas-u2-l21c1q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best describes a sustainable CAS activity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something requiring no commitment" },
              { id: "b", text: "One expensive event" },
              { id: "c", text: "Regular participation you can maintain alongside studies" },
              { id: "d", text: "An activity chosen only to impress others" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability", statement: "Sustainable activities fit alongside academic workload." },
            ],
            steps: [
              { reasoning: "Sustainable activities can be maintained alongside studies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regular participation you can maintain alongside studies",
            commonErrors: ["Choosing activities that overload the timetable."],
          },
        },
        {
          id: "cas-u2-l21c1q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways a student can keep an individual CAS activity sustainable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sustainable planning", statement: "Match activity to interest, timetable and available time." },
            ],
            steps: [
              { reasoning: "Choose an activity that matches interest and fits the timetable.", marks: 1, markCode: "M" },
              { reasoning: "Set a realistic regular schedule and modest goals.", marks: 1, markCode: "M" },
              { reasoning: "This produces consistent engagement over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Match activity to interest and timetable; set a realistic regular schedule.",
            commonErrors: ["Committing to activities that cannot be maintained long-term."],
          },
        },
        {
          id: "cas-u2-l21c1q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why documenting activities as they happen is better than reconstructing records later.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation timing", statement: "Consistent documentation is easier and more accurate than reconstructing later." },
            ],
            steps: [
              { reasoning: "Memory fades, so records made later are less accurate.", marks: 1, markCode: "M" },
              { reasoning: "Recording while fresh captures details of what was done and learned.", marks: 1, markCode: "M" },
              { reasoning: "It provides reliable evidence for the portfolio.", marks: 1, markCode: "A" },
              { reasoning: "It shows consistent engagement over time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Documenting as you go is more accurate, provides evidence, and shows consistent engagement.",
            commonErrors: ["Relying on memory and reconstructing records at the end."],
          },
        },
        {
          id: "cas-u2-l21c1q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that any regular activity is equally valuable in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality of engagement", statement: "Regularity is necessary but depth of learning varies." },
            ],
            steps: [
              { reasoning: "Regularity is necessary for sustained engagement.", marks: 1, markCode: "M" },
              { reasoning: "Depth of engagement and learning differs between activities.", marks: 1, markCode: "M" },
              { reasoning: "Quality of reflection matters as much as attendance.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: regularity alone does not guarantee equal value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Regularity is necessary but not sufficient — depth of engagement and reflection determine value.",
            commonErrors: ["Assuming attendance alone equals meaningful engagement."],
          },
        },
        {
          id: "cas-u2-l21c1q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to plan and sustain individual CAS activities.",
          parts: [
            { label: "a", prompt: "Outline the steps of a simple activity plan.", marks: 2 },
            { label: "b", prompt: "Explain why regular participation is preferred to one-off events.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of documentation in sustaining engagement.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity planning", statement: "Plan sustainable regular activities and document them." },
            ],
            steps: [
              { part: "a", reasoning: "Choose strand-appropriate activity and schedule regular participation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Record participation and learning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Regular participation builds habits and skills.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It enables deeper reflection and sustained learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "CAS values sustained engagement over one-off events.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Documentation provides evidence of consistent engagement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It supports later reflection and portfolio building.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: documentation sustains accountability and learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Choose, schedule, record. (b) Habits, skills, sustained learning. (c) Evidence and accountability.",
            commonErrors: ["Planning activities without a documentation routine."],
          },
        },
        {
          id: "cas-u2-l21c1q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether attending a termly sports tournament counts as regular engagement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regularity", statement: "Regular engagement requires frequent, sustained participation." },
            ],
            steps: [
              { reasoning: "Termly attendance is infrequent and does not build habits.", marks: 1, markCode: "M" },
              { reasoning: "It lacks the consistency CAS values.", marks: 1, markCode: "M" },
              { reasoning: "It could supplement, but not replace, regular training or play.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: termly attendance alone is not regular engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Termly attendance is too infrequent to count as regular engagement, though it can supplement it.",
            commonErrors: ["Counting occasional events as regular participation."],
          },
        },
        {
          id: "cas-u2-l21c1q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Plan a term of individual CAS activity engagement.",
          parts: [
            { label: "a", prompt: "Choose an activity and justify its strand fit.", marks: 2 },
            { label: "b", prompt: "Explain how you will schedule regular participation.", marks: 2 },
            { label: "c", prompt: "Describe the records you will keep.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Activity planning", statement: "Choose, schedule and record a regular CAS activity." },
            ],
            steps: [
              { part: "a", reasoning: "Name an activity and identify its strand.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Justify why it is sustainable and interesting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set fixed weekly or monthly times.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Align sessions with timetable and goals.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Record dates, duration and what was done.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Note strand and what was learned.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collect supporting artifacts like photos or logs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Strand-appropriate sustainable activity. (b) Fixed regular schedule. (c) Dates, duration, learning, artifacts.",
            commonErrors: ["Choosing activities without a record-keeping plan."],
          },
        },
      ],
    },
    {
      id: "cas-u2-project-planning",
      title: "Planning CAS projects",
      skill: "Plan a sustained CAS project that combines all three strands.",
      lesson: {
        sections: [
          {
            heading: "What makes a CAS project",
            body: "A CAS project runs for several months and combines creativity, activity and service. It requires planning: goals, timeline, resources, roles, and evaluation. Projects demonstrate deeper engagement than individual activities — they show initiative and project management skills.",
          },
          {
            heading: "Project planning steps",
            body: "1) Identify a need or interest. 2) Define clear goals for each strand. 3) Create a timeline with milestones. 4) Identify resources and stakeholders. 5) Assign roles if working with others. 6) Plan evaluation at the end.",
          },
          {
            heading: "Project examples",
            body: "Organising a community sports day (activity planning = creativity, event = activity, community benefit = service); creating an art exhibition for charity (creativity + service); coaching a youth team while designing their programme (activity + creativity + service).",
          },
        ],
        keyFormulas: [
          { name: "Project elements", statement: "Goals + timeline + resources + roles + evaluation" },
          { name: "Project test", statement: "Does it combine all three strands over months?" },
        ],
        workedExample: {
          problem: "Plan a CAS project: community garden.",
          solution: "Creativity: design garden layout and artwork. Activity: physical work planting and maintaining. Service: benefit to community/neighbours. Timeline: one term. Resources: school grounds, tools, volunteers. Evaluation: harvest yield, community feedback.",
        },
      },
      questions: [
        {
          id: "cas-u2-l21c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A CAS project should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combine all three strands over months" },
              { id: "b", text: "Last one afternoon" },
              { id: "c", text: "Involve only one person" },
              { id: "d", text: "Require no planning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS project", statement: "A sustained initiative over months combining all three strands." },
            ],
            steps: [
              { reasoning: "Projects combine all three strands over months.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Combine all three strands over months",
            commonErrors: ["Confusing single activities with sustained projects."],
          },
        },
        {
          id: "cas-u2-l21c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the key elements of project planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Project planning", statement: "Goals, timeline, resources, roles and evaluation are essential." },
            ],
            steps: [
              { reasoning: "Define clear goals for each strand.", marks: 1, markCode: "M" },
              { reasoning: "Create timeline with milestones and identify resources.", marks: 1, markCode: "M" },
              { reasoning: "Assign roles and plan evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Project planning requires goals, timeline, resources, roles and evaluation.",
            commonErrors: ["Starting projects without clear goals or timeline."],
          },
        },
        {
          id: "cas-u2-l21c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that CAS projects are better than individual activities.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project vs activity", statement: "Projects demonstrate deeper engagement but require more commitment." },
            ],
            steps: [
              { reasoning: "For: projects show initiative, planning and sustained commitment.", marks: 1, markCode: "M" },
              { reasoning: "Against: projects require more time and may be harder to sustain.", marks: 1, markCode: "M" },
              { reasoning: "Both have value — projects complement regular activities.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: projects demonstrate higher-level engagement but should not replace regular activities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Projects show deeper engagement but require more commitment; they complement rather than replace activities.",
            commonErrors: ["Thinking projects alone satisfy CAS requirements."],
          },
        },
        {
          id: "cas-u2-l21c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to plan a CAS project.",
          parts: [
            { label: "a", prompt: "Define what makes a CAS project.", marks: 2 },
            { label: "b", prompt: "Describe three planning elements.", marks: 3 },
            { label: "c", prompt: "Evaluate the challenges of project management.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project planning", statement: "Projects combine strands over months with clear planning." },
            ],
            steps: [
              { part: "a", reasoning: "Sustained initiative combining all three strands.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Runs over several months.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Goals: clear objectives for each strand.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Timeline: milestones and deadlines.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Resources/roles: who does what, what's needed.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Projects require sustained commitment over months.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Coordination with others adds complexity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: challenging but demonstrates higher-level skills.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sustained, all strands, months. (b) Goals, timeline, resources. (c) Commitment and coordination challenges.",
            commonErrors: ["Underestimating the time and coordination projects require."],
          },
        },
        {
          id: "cas-u2-l21c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is NOT an element of project planning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evaluation" },
              { id: "b", text: "Timeline" },
              { id: "c", text: "Goals" },
              { id: "d", text: "Random chance" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Project plan", statement: "Project planning covers goals, timeline, resources, roles and evaluation." },
            ],
            steps: [
              { reasoning: "Goals, timeline and evaluation are planning elements; chance is not.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Random chance",
            commonErrors: ["Confusing luck with planning."],
          },
        },
        {
          id: "cas-u2-l21c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A CAS project typically runs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Several months" },
              { id: "b", text: "One hour" },
              { id: "c", text: "One afternoon" },
              { id: "d", text: "One class period" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS project", statement: "A sustained initiative over several months." },
            ],
            steps: [
              { reasoning: "Projects are sustained over several months.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Several months",
            commonErrors: ["Confusing short events with sustained projects."],
          },
        },
        {
          id: "cas-u2-l21c2q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Project milestones are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equipment lists" },
              { id: "b", text: "Team members" },
              { id: "c", text: "Key checkpoints in progress" },
              { id: "d", text: "Final grades" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Milestone", statement: "A key checkpoint or deadline in project progress." },
            ],
            steps: [
              { reasoning: "Milestones are checkpoints or deadlines in progress.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Key checkpoints in progress",
            commonErrors: ["Confusing milestones with team members or resources."],
          },
        },
        {
          id: "cas-u2-l21c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which option best combines all three CAS strands?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single gym session" },
              { id: "b", text: "Designing posters for a charity run you organise" },
              { id: "c", text: "A solo puzzle once" },
              { id: "d", text: "Watching a film" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project test", statement: "A project combines creativity, activity and service over months." },
            ],
            steps: [
              { reasoning: "Poster design is creativity, organising the run is activity, charity benefit is service.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Designing posters for a charity run you organise",
            commonErrors: ["Choosing activities that only fit one strand."],
          },
        },
        {
          id: "cas-u2-l21c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Stakeholders in a CAS project are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only equipment suppliers" },
              { id: "b", text: "Only teachers" },
              { id: "c", text: "Only students" },
              { id: "d", text: "People affected by or involved in the project" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stakeholder", statement: "People affected by or involved in the project." },
            ],
            steps: [
              { reasoning: "Stakeholders include anyone affected by or involved in the project.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** People affected by or involved in the project",
            commonErrors: ["Thinking only team members count as stakeholders."],
          },
        },
        {
          id: "cas-u2-l21c2q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why plan evaluation at the end of a CAS project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is optional paperwork" },
              { id: "b", text: "It is required only for service" },
              { id: "c", text: "It assesses whether the goals were achieved" },
              { id: "d", text: "It replaces the need for reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation", statement: "Assessing whether the project achieved its goals." },
            ],
            steps: [
              { reasoning: "Evaluation assesses whether goals were achieved.", marks: 1, markCode: "M" },
              { reasoning: "It is planned in advance as part of the project.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It assesses whether the goals were achieved",
            commonErrors: ["Treating evaluation as optional or separate from planning."],
          },
        },
        {
          id: "cas-u2-l21c2q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which statement best describes a CAS project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A one-off fundraiser" },
              { id: "b", text: "A sustained initiative over months combining all three strands" },
              { id: "c", text: "A weekly club meeting" },
              { id: "d", text: "A single afternoon event" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS project", statement: "A sustained initiative over months combining all three strands." },
            ],
            steps: [
              { reasoning: "Projects run over months and combine all three strands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A sustained initiative over months combining all three strands",
            commonErrors: ["Confusing individual activities with sustained projects."],
          },
        },
        {
          id: "cas-u2-l21c2q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "List the main steps of project planning in order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Project planning", statement: "Identify need, define goals, timeline, resources, roles, evaluation." },
            ],
            steps: [
              { reasoning: "Identify a need or interest and define goals for each strand.", marks: 1, markCode: "M" },
              { reasoning: "Create a timeline with milestones and identify resources and roles.", marks: 1, markCode: "M" },
              { reasoning: "Plan evaluation at the end.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Identify need, define goals, timeline, resources, roles, evaluation.",
            commonErrors: ["Skipping evaluation or starting without clear goals."],
          },
        },
        {
          id: "cas-u2-l21c2q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between a CAS activity and a CAS project.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Activity vs project", statement: "Activities are single-strand engagements; projects combine all strands over months." },
            ],
            steps: [
              { reasoning: "An activity is a single event or regular participation in one strand.", marks: 1, markCode: "M" },
              { reasoning: "A project runs over months and combines all three strands.", marks: 1, markCode: "M" },
              { reasoning: "Projects demonstrate deeper initiative and project management.", marks: 1, markCode: "A" },
              { reasoning: "Both are valid but serve different purposes in CAS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Activities are single-strand engagements; projects combine all strands over months with deeper commitment.",
            commonErrors: ["Treating a single event as equivalent to a project."],
          },
        },
        {
          id: "cas-u2-l21c2q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that bigger projects are always better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project scale", statement: "Scale matters less than meaningful engagement and sustainability." },
            ],
            steps: [
              { reasoning: "For: larger projects can show greater initiative and impact.", marks: 1, markCode: "M" },
              { reasoning: "Against: size does not equal quality or learning.", marks: 1, markCode: "M" },
              { reasoning: "Sustainable, well-planned smaller projects can be equally valuable.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: meaningful engagement matters more than scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scale alone does not determine value — meaningful, sustainable projects matter most.",
            commonErrors: ["Equating project size with quality of engagement."],
          },
        },
        {
          id: "cas-u2-l21c2q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to plan a CAS project effectively.",
          parts: [
            { label: "a", prompt: "Define the test for whether an initiative is a CAS project.", marks: 2 },
            { label: "b", prompt: "Describe how to assign roles within a project team.", marks: 3 },
            { label: "c", prompt: "Evaluate the challenges of sustaining a project over months.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project planning", statement: "Projects combine all strands over months with clear planning." },
            ],
            steps: [
              { part: "a", reasoning: "It must run over several months.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "And combine creativity, activity and service.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identify tasks and match them to members' skills.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assign clear responsibilities and deadlines.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ensure fair distribution and accountability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sustained commitment over months is demanding.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Coordination and motivation can flag over time.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: challenging but demonstrates higher-level skills.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Months + all three strands. (b) Skill-matched roles with deadlines. (c) Sustained commitment is demanding.",
            commonErrors: ["Assigning roles without clear deadlines or accountability."],
          },
        },
        {
          id: "cas-u2-l21c2q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Outline a project plan for organising a charity sports day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Project planning", statement: "Define goals, timeline, resources, roles and evaluation." },
            ],
            steps: [
              { reasoning: "Define goals for each strand: creativity (design), activity (sport), service (charity).", marks: 1, markCode: "M" },
              { reasoning: "Create a timeline with milestones and identify resources and roles.", marks: 1, markCode: "M" },
              { reasoning: "Plan evaluation via participation and funds raised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Goals per strand, timeline, resources, roles, and evaluation plan.",
            commonErrors: ["Planning an event without considering all three strands."],
          },
        },
        {
          id: "cas-u2-l21c2q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Develop a CAS project from idea to evaluation.",
          parts: [
            { label: "a", prompt: "Identify a need or interest and describe the project idea.", marks: 2 },
            { label: "b", prompt: "Define goals for each of the three strands.", marks: 2 },
            { label: "c", prompt: "Plan milestones and the final evaluation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Project planning", statement: "Need, goals, timeline, resources, roles, evaluation." },
            ],
            steps: [
              { part: "a", reasoning: "Identify a genuine need or interest.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe a feasible project idea addressing it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set a creativity goal, an activity goal and a service goal.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Goals are clear and measurable.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set milestone deadlines across the project.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Plan how success will be evaluated.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation checks goals were achieved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Need-based idea. (b) Goals per strand. (c) Milestones and evaluation.",
            commonErrors: ["Defining goals that only cover one strand."],
          },
        },
      ],
    },
  ],
};
