import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cas-u1-lesson-1-3",
  code: "1-3",
  title: "Balancing the Three Strands",
  goal: "I CAN plan CAS engagement that achieves balance across creativity, activity and service.",
  standards: ["CAS", "Balance", "Planning"],
  vocabulary: [
    { term: "Balance", definition: "Regular engagement across all three CAS strands rather than focusing on only one." },
    { term: "CAS project", definition: "A sustained initiative combining creativity, activity and service over months." },
    { term: "Strand coverage", definition: "Ensuring each strand receives adequate regular engagement." },
    { term: "Integration", definition: "Combining strands within single activities or projects." },
    { term: "Time management", definition: "Allocating sufficient time to each strand alongside academic work." },
    { term: "Sustainability", definition: "Choosing activities you can maintain long-term." },
  ],
  concepts: [
    {
      id: "cas-u1-balance",
      title: "Achieving balance across strands",
      skill: "Plan CAS engagement that distributes time and effort across all three strands.",
      lesson: {
        sections: [
          {
            heading: "Why balance matters",
            body: "CAS requires regular engagement in all three strands — creativity, activity AND service. Focusing on only one strand fails the programme. Balance ensures holistic development: creativity develops imagination, activity develops health, service develops empathy and community connection.",
          },
          {
            heading: "Planning for balance",
            body: "Audit your current activities: which strands are strong, which are weak? Allocate time deliberately — e.g., weekly sport (activity), monthly creative project (creativity), ongoing volunteering (service). Use a calendar or planner to ensure no strand is neglected.",
          },
          {
            heading: "The CAS project",
            body: "A CAS project integrates all three strands over several months. Examples: organising a community sports day (activity planning = creativity, event = activity, community benefit = service); creating an art exhibition for charity (creativity + service). Projects demonstrate sophisticated understanding of CAS.",
          },
        ],
        keyFormulas: [
          { name: "Balance test", statement: "Are you engaging regularly in ALL three strands?" },
          { name: "Project integration", statement: "One project can combine all three strands over months" },
        ],
        workedExample: {
          problem: "You play sport weekly but do nothing else. How to balance?",
          solution: "Add a creative activity (e.g. learn an instrument or join drama) and a service commitment (e.g. weekly volunteering). Plan a CAS project combining all three: e.g. coach a children's sports team (activity + service) and design their kit (creativity).",
        },
      },
      questions: [
        {
          id: "cas-u1-l13c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS balance requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only activity" },
              { id: "b", text: "Regular engagement in all three strands" },
              { id: "c", text: "Only service" },
              { id: "d", text: "As much as possible of one strand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS balance", statement: "Regular engagement in all three strands is required." },
            ],
            steps: [
              { reasoning: "Balance means engaging in all three strands regularly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Regular engagement in all three strands",
            commonErrors: ["Thinking one strand is sufficient."],
          },
        },
        {
          id: "cas-u1-l13c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a CAS project can integrate all three strands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS project", statement: "A sustained initiative can combine creativity, activity and service." },
            ],
            steps: [
              { reasoning: "Creativity: designing, planning or creating something original.", marks: 1, markCode: "M" },
              { reasoning: "Activity: physical exertion involved in the project.", marks: 1, markCode: "M" },
              { reasoning: "Service: the project benefits others or the community.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A CAS project combines creative planning, physical activity and community benefit over months.",
            commonErrors: ["Thinking strands must be completely separate."],
          },
        },
        {
          id: "cas-u1-l13c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that balance means equal time in each strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance definition", statement: "Balance means regular engagement in all strands, not necessarily equal time." },
            ],
            steps: [
              { reasoning: "For equal time: fairness suggests each strand deserves equal attention.", marks: 1, markCode: "M" },
              { reasoning: "Against: strands have different rhythms — sport is weekly, projects are term-long.", marks: 1, markCode: "M" },
              { reasoning: "Balance means adequate regular engagement, not identical hours.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: balance is about coverage and commitment, not strict equality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance means adequate regular engagement in each strand, not necessarily equal time.",
            commonErrors: ["Confusing balance with identical time allocation."],
          },
        },
        {
          id: "cas-u1-l13c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to achieve balance across CAS strands.",
          parts: [
            { label: "a", prompt: "Explain why balance is required in CAS.", marks: 2 },
            { label: "b", prompt: "Describe two strategies for achieving balance.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of CAS projects in achieving balance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand balance", statement: "All three strands require regular engagement for holistic development." },
            ],
            steps: [
              { part: "a", reasoning: "Balance ensures development across creativity, health and community.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Focusing on one strand fails the programme.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Audit current activities to identify gaps.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Allocate time deliberately — weekly, monthly, ongoing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use planner to ensure no strand is neglected.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Projects integrate all three strands efficiently.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "They demonstrate sophisticated understanding of CAS.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: projects complement but don't replace regular strand engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Holistic development required. (b) Audit and allocate time. (c) Projects integrate but don't replace.",
            commonErrors: ["Neglecting one strand entirely."],
          },
        },
        {
          id: "cas-u1-l13c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A student only plays competitive sport. Which strands are still missing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activity" },
              { id: "b", text: "Creativity and service" },
              { id: "c", text: "Service only" },
              { id: "d", text: "None" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand coverage", statement: "All three strands require regular engagement." },
            ],
            steps: [
              { reasoning: "Sport covers activity only; creativity and service are unaddressed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creativity and service",
            commonErrors: ["Assuming one strand is sufficient."],
          },
        },
        {
          id: "cas-u1-l13c1q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A CAS project is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A one-off event" },
              { id: "b", text: "A sustained initiative combining all three strands over several months" },
              { id: "c", text: "Weekly sport practice" },
              { id: "d", text: "A written essay" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS project", statement: "A long-term initiative combining creativity, activity and service." },
            ],
            steps: [
              { reasoning: "A CAS project is sustained over months and integrates all three strands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A sustained initiative combining all three strands over several months",
            commonErrors: ["Confusing a one-off event with a sustained CAS project."],
          },
        },
        {
          id: "cas-u1-l13c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which weekly plan best achieves CAS balance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sport only" },
              { id: "b", text: "Weekly sport, a monthly creative project and ongoing volunteering" },
              { id: "c", text: "Volunteering only" },
              { id: "d", text: "Art classes only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balanced plan", statement: "Balance requires regular engagement across all three strands." },
            ],
            steps: [
              { reasoning: "Only option (b) covers activity, creativity and service regularly.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weekly sport, monthly creative project and ongoing volunteering",
            commonErrors: ["Choosing a single-strand plan."],
          },
        },
        {
          id: "cas-u1-l13c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Organising an art exhibition to raise money for charity primarily demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Activity only" },
              { id: "b", text: "Integration of creativity and service" },
              { id: "c", text: "Creativity only" },
              { id: "d", text: "No CAS strands" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Strand integration", statement: "Creative work benefiting others combines creativity and service." },
            ],
            steps: [
              { reasoning: "Curating art is creative; fundraising for charity is service.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Integration of creativity and service",
            commonErrors: ["Classifying integrated activities under only one strand."],
          },
        },
        {
          id: "cas-u1-l13c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A single activity spanning two strands cannot replace dedicated engagement in all strands because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is against IB rules" },
              { id: "b", text: "Each strand requires regular engagement of its own" },
              { id: "c", text: "Overlapping activities are not allowed" },
              { id: "d", text: "Time is unlimited anyway" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dedicated engagement", statement: "Every strand requires its own regular engagement regardless of overlap." },
            ],
            steps: [
              { reasoning: "CAS requires regular engagement in each strand, not just convenient overlap.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Each strand requires regular engagement of its own",
            commonErrors: ["Assuming strand overlap eliminates coverage requirements."],
          },
        },
        {
          id: "cas-u1-l13c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Regular engagement across all three CAS strands is called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Specialisation" },
              { id: "b", text: "Balance" },
              { id: "c", text: "Tokenism" },
              { id: "d", text: "Overlap" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Balance", statement: "Regular engagement across all three strands rather than focusing on one." },
            ],
            steps: [
              { reasoning: "Balance is the term for regular engagement across all strands.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Balance",
            commonErrors: ["Confusing balance with overlap or specialisation."],
          },
        },
        {
          id: "cas-u1-l13c1q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how balance across strands supports holistic development.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Holistic development", statement: "Each strand develops complementary attributes for well-rounded growth." },
            ],
            steps: [
              { reasoning: "Creativity develops imagination; activity develops health; service develops empathy.", marks: 1, markCode: "M" },
              { reasoning: "Each strand contributes a distinct dimension of personal development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore balanced engagement produces holistic growth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance ensures development of imagination, health and empathy together.",
            commonErrors: ["Seeing strands as interchangeable rather than complementary."],
          },
        },
        {
          id: "cas-u1-l13c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Design a balanced CAS plan for a student with a busy timetable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable balance", statement: "Balanced plans must fit alongside academic commitments." },
            ],
            steps: [
              { reasoning: "Choose one sustainable weekly activity-strand commitment, e.g. club sport.", marks: 1, markCode: "M" },
              { reasoning: "Add a regular creative commitment, e.g. weekly practice or a term project.", marks: 1, markCode: "M" },
              { reasoning: "Include ongoing service, e.g. monthly volunteering at a fixed time.", marks: 1, markCode: "M" },
              { reasoning: "Judgement: the plan must be realistic enough to maintain long-term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Weekly sustainable sport, regular creative project and fixed-time volunteering — realistic and balanced.",
            commonErrors: ["Overcommitting to ambitious plans that cannot be maintained."],
          },
        },
        {
          id: "cas-u1-l13c1q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether a single CAS project can satisfy the balance requirement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Project vs strands", statement: "Projects integrate strands but do not replace regular strand engagement." },
            ],
            steps: [
              { reasoning: "A CAS project can integrate all three strands efficiently over months.", marks: 1, markCode: "M" },
              { reasoning: "But it is time-limited and cannot provide ongoing regular engagement.", marks: 1, markCode: "M" },
              { reasoning: "Regular strand-specific activities build habits and deeper development.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: a project complements but does not substitute for balanced strand engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A CAS project integrates strands but cannot replace regular engagement in each strand.",
            commonErrors: ["Treating one project as complete CAS coverage."],
          },
        },
        {
          id: "cas-u1-l13c1q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how to achieve balance across CAS strands.",
          parts: [
            { label: "a", prompt: "Explain how to audit your current strand coverage.", marks: 2 },
            { label: "b", prompt: "Describe how to allocate time deliberately across strands.", marks: 2 },
            { label: "c", prompt: "Evaluate the role of integration in achieving balance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Achieving balance", statement: "Audit coverage, allocate time deliberately, and integrate where possible." },
            ],
            steps: [
              { part: "a", reasoning: "List current activities and identify which strand each serves.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reveal neglected strands needing new commitments.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Schedule regular slots: weekly activity, periodic creativity, ongoing service.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Deliberate allocation prevents any strand from being crowded out.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Integrating strands in single activities improves efficiency.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: integration helps but dedicated engagement per strand is still required.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Audit coverage to find gaps. (b) Allocate deliberate regular time. (c) Integrate where possible.",
            commonErrors: ["Allocating time by habit rather than by strand needs."],
          },
        },
        {
          id: "cas-u1-l13c1q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'adequate regular engagement' differs from 'equal time' in each strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Balance definition", statement: "Balance means adequate coverage, not identical hours per strand." },
            ],
            steps: [
              { reasoning: "Strands have different natural rhythms — sport is weekly, projects are term-long.", marks: 1, markCode: "M" },
              { reasoning: "What matters is that each strand receives regular meaningful engagement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore balance is about coverage and commitment, not equal hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance requires adequate regular engagement per strand, not identical time allocations.",
            commonErrors: ["Confusing balance with equal time in each strand."],
          },
        },
        {
          id: "cas-u1-l13c1q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that CAS balance is about variety of activities rather than commitment to each strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commitment over variety", statement: "Regular commitment to each strand matters more than collecting varied activities." },
            ],
            steps: [
              { reasoning: "Variety across strands does help ensure coverage.", marks: 1, markCode: "M" },
              { reasoning: "But varied activities without commitment become token participation.", marks: 1, markCode: "M" },
              { reasoning: "Sustained commitment builds skills, relationships and deeper learning.", marks: 1, markCode: "M" },
              { reasoning: "CAS values regular engagement over sporadic variety.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: commitment to each strand is the essence of balance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Balance is about committed regular engagement in each strand, not mere variety.",
            commonErrors: ["Confusing variety of activities with genuine strand engagement."],
          },
        },
        {
          id: "cas-u1-l13c1q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to maintain balance across CAS strands over time.",
          parts: [
            { label: "a", prompt: "Explain why CAS requires engagement in all three strands.", marks: 3 },
            { label: "b", prompt: "Describe two strategies for achieving balance.", marks: 2 },
            { label: "c", prompt: "Evaluate how CAS projects contribute to — but do not replace — strand balance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustained balance", statement: "Balance requires ongoing regular engagement across all strands." },
            ],
            steps: [
              { part: "a", reasoning: "Each strand develops different attributes: imagination, health, empathy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Focusing on one strand fails the holistic development CAS aims for.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Therefore all three strands require regular engagement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy: audit current activities to find neglected strands.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy: schedule deliberate regular time for each strand.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Projects integrate all three strands efficiently over months.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But they are time-limited and cannot provide ongoing regular engagement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: projects complement strand balance but do not substitute for it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) All strands needed for holistic development. (b) Audit and allocate. (c) Projects complement, not replace.",
            commonErrors: ["Relying on a single project for all strand coverage."],
          },
        },
      ],
    },
    {
      id: "cas-u1-planning",
      title: "Planning CAS engagement",
      skill: "Create a realistic plan for CAS activities across all three strands.",
      lesson: {
        sections: [
          {
            heading: "The planning process",
            body: "Start by auditing: what are you already doing? What interests you? What challenges do you want? Then allocate time: e.g., weekly sport (activity), monthly creative project (creativity), ongoing volunteering (service). Build in flexibility for academic pressures.",
          },
          {
            heading: "Realistic planning",
            body: "CAS must fit alongside academic work. Choose activities you can sustain — weekly commitments are better than ambitious plans you cannot maintain. Build in rest and flexibility; CAS is about sustained engagement, not burnout.",
          },
          {
            heading: "Long-term planning",
            body: "Think beyond the current term: what CAS project could you undertake over months? What skill could you develop? What community need could you address? Long-term planning makes CAS meaningful rather than tokenistic.",
          },
        ],
        keyFormulas: [
          { name: "Planning steps", statement: "Audit → interests → time allocation → flexibility" },
          { name: "Sustainability", statement: "Choose activities you can maintain long-term" },
        ],
        workedExample: {
          problem: "Plan CAS for a student with heavy academic workload.",
          solution: "Choose sustainable activities: weekly club sport (activity), one creative project per term (creativity), monthly volunteering (service). Build flexibility — activities that can be paused during exam periods without losing all progress.",
        },
      },
      questions: [
        {
          id: "cas-u1-l13c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first step in planning CAS engagement is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sign up for activities" },
              { id: "b", text: "Audit current activities and interests" },
              { id: "c", text: "Write reflections" },
              { id: "d", text: "Collect evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning process", statement: "Start with audit of current activities and interests." },
            ],
            steps: [
              { reasoning: "Planning starts with auditing what you already do and enjoy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Audit current activities and interests",
            commonErrors: ["Signing up before assessing needs and interests."],
          },
        },
        {
          id: "cas-u1-l13c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why sustainability matters in CAS planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable engagement", statement: "CAS requires sustained participation — activities must be maintainable." },
            ],
            steps: [
              { reasoning: "CAS is a long-term programme requiring regular engagement.", marks: 1, markCode: "M" },
              { reasoning: "Unsustainable plans lead to burnout and abandonment.", marks: 1, markCode: "M" },
              { reasoning: "Choosing maintainable activities ensures consistent progress.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sustainability ensures regular long-term engagement rather than burnout and abandonment.",
            commonErrors: ["Overcommitting to activities that cannot be maintained."],
          },
        },
        {
          id: "cas-u1-l13c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that CAS planning should be rigid and detailed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flexible planning", statement: "Planning should provide direction while allowing for adaptation." },
            ],
            steps: [
              { reasoning: "For: detailed planning ensures all strands are covered.", marks: 1, markCode: "M" },
              { reasoning: "Against: rigid plans break under academic pressure or changing interests.", marks: 1, markCode: "M" },
              { reasoning: "Effective planning balances structure with flexibility.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: plan deliberately but build in room for adjustment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Planning should be structured but flexible — rigid plans fail under changing circumstances.",
            commonErrors: ["Creating plans so rigid they cannot adapt."],
          },
        },
        {
          id: "cas-u1-l13c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to plan CAS engagement effectively.",
          parts: [
            { label: "a", prompt: "Describe the planning process.", marks: 2 },
            { label: "b", prompt: "Explain why sustainability matters.", marks: 3 },
            { label: "c", prompt: "Evaluate how to balance structure and flexibility.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS planning", statement: "Plan deliberately but sustainably and flexibly." },
            ],
            steps: [
              { part: "a", reasoning: "Audit → interests → time allocation → flexibility.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All steps described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CAS requires long-term regular engagement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Unsustainable plans lead to abandonment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sustainable activities ensure consistent progress.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Structure ensures all strands are covered.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Flexibility allows adaptation to changing circumstances.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: balance deliberate planning with adaptability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Audit, allocate, flexible. (b) Sustainability ensures consistency. (c) Structure + flexibility.",
            commonErrors: ["Planning without considering academic workload."],
          },
        },
        {
          id: "cas-u1-l13c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the most sustainable CAS commitment for a busy student?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Daily three-hour volunteering" },
              { id: "b", text: "Weekly club sport plus one project per term" },
              { id: "c", text: "A single one-off event" },
              { id: "d", text: "Five simultaneous activities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability", statement: "Sustainable commitments are moderate, regular and maintainable." },
            ],
            steps: [
              { reasoning: "Moderate regular commitments can be maintained alongside studies.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weekly club sport plus one project per term",
            commonErrors: ["Overcommitting to unsustainable schedules."],
          },
        },
        {
          id: "cas-u1-l13c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Building flexibility into a CAS plan mainly helps you to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid all planning" },
              { id: "b", text: "Adapt to academic pressure without abandoning engagement" },
              { id: "c", text: "Change strands every day" },
              { id: "d", text: "Skip reflections" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Flexible planning", statement: "Flexibility allows adaptation to changing circumstances without losing engagement." },
            ],
            steps: [
              { reasoning: "Flexible plans can be paused or adjusted during demanding periods.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adapt to academic pressure without abandoning engagement",
            commonErrors: ["Creating plans so rigid they collapse under pressure."],
          },
        },
        {
          id: "cas-u1-l13c2q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Effective long-term CAS planning should consider:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only this week's timetable" },
              { id: "b", text: "Skill development, community needs and possible projects" },
              { id: "c", text: "Nothing beyond upcoming exams" },
              { id: "d", text: "Only paid opportunities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Long-term planning", statement: "Long-term planning considers skill growth, community needs and projects." },
            ],
            steps: [
              { reasoning: "Long-term planning looks beyond immediate weeks to skills, needs and projects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Skill development, community needs and possible projects",
            commonErrors: ["Planning only for the immediate term."],
          },
        },
        {
          id: "cas-u1-l13c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student with a heavy academic workload should choose CAS activities that are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As demanding as possible" },
              { id: "b", text: "Sustainable and can be paused and resumed" },
              { id: "c", text: "Unrelated to school" },
              { id: "d", text: "Chosen impulsively" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Realistic planning", statement: "Choose maintainable activities that can flex with academic demands." },
            ],
            steps: [
              { reasoning: "Pausable sustainable activities survive busy periods.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sustainable and can be paused and resumed",
            commonErrors: ["Choosing activities that cannot survive exam periods."],
          },
        },
        {
          id: "cas-u1-l13c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Overcommitting in CAS planning is a failure because it leads to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Better results" },
              { id: "b", text: "Burnout and eventual abandonment" },
              { id: "c", text: "More strands covered" },
              { id: "d", text: "Deeper reflection" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainability", statement: "Overcommitment causes burnout, which ends sustained engagement." },
            ],
            steps: [
              { reasoning: "Unsustainable commitments collapse under pressure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Burnout and eventual abandonment",
            commonErrors: ["Mistaking overcommitment for dedication."],
          },
        },
        {
          id: "cas-u1-l13c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "When allocating time for CAS, the best approach is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fill every spare hour" },
              { id: "b", text: "Schedule deliberate regular slots across all three strands" },
              { id: "c", text: "Only plan for holidays" },
              { id: "d", text: "Leave it to chance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Time allocation", statement: "Deliberate regular scheduling ensures coverage of all strands." },
            ],
            steps: [
              { reasoning: "Deliberate slots guarantee regular engagement in each strand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Schedule deliberate regular slots across all three strands",
            commonErrors: ["Leaving CAS time allocation to chance."],
          },
        },
        {
          id: "cas-u1-l13c2q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the CAS planning sequence: audit, interests, allocation, flexibility.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Planning process", statement: "Plan through audit, interest alignment, time allocation and flexibility." },
            ],
            steps: [
              { reasoning: "Audit: review what you already do and where gaps are.", marks: 1, markCode: "M" },
              { reasoning: "Interests: align choices with genuine interests and challenges.", marks: 1, markCode: "M" },
              { reasoning: "Allocate deliberate time per strand and build in flexibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Audit current activities, align with interests, allocate time per strand, and build in flexibility.",
            commonErrors: ["Skipping the audit and signing up randomly."],
          },
        },
        {
          id: "cas-u1-l13c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how to plan CAS engagement around examination periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exam-period planning", statement: "Plans should flex around academic peaks without losing all engagement." },
            ],
            steps: [
              { reasoning: "Reduce frequency or intensity of CAS commitments during exams.", marks: 1, markCode: "M" },
              { reasoning: "Choose activities that can be paused and resumed without losing progress.", marks: 1, markCode: "M" },
              { reasoning: "Maintain minimal contact — e.g. short sessions — to preserve the habit.", marks: 1, markCode: "M" },
              { reasoning: "Plan the return to normal schedule once exams end.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reduce frequency, keep minimal contact, choose pausable activities, and plan a return to normal.",
            commonErrors: ["Abandoning CAS completely during exam periods."],
          },
        },
        {
          id: "cas-u1-l13c2q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that highly detailed CAS timetables always improve planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure vs flexibility", statement: "Detailed plans provide structure but must allow adaptation." },
            ],
            steps: [
              { reasoning: "Detail ensures all strands are covered and commitments are clear.", marks: 1, markCode: "M" },
              { reasoning: "But overly rigid timetables break under academic pressure or changing interests.", marks: 1, markCode: "M" },
              { reasoning: "Effective planning balances structure with room to adapt.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: detailed planning helps only when it includes flexibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detailed timetables help only if they allow flexibility — rigidity undermines planning.",
            commonErrors: ["Mistaking detail for effectiveness."],
          },
        },
        {
          id: "cas-u1-l13c2q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Examine how to make CAS planning sustainable and realistic.",
          parts: [
            { label: "a", prompt: "Explain why sustainability is central to CAS planning.", marks: 2 },
            { label: "b", prompt: "Describe how to make CAS plans realistic alongside academics.", marks: 2 },
            { label: "c", prompt: "Evaluate the balance between structure and flexibility in plans.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sustainable planning", statement: "CAS is a long-term programme — plans must be maintainable and adaptable." },
            ],
            steps: [
              { part: "a", reasoning: "CAS requires sustained engagement over the whole programme.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Unsustainable plans lead to burnout and abandonment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choose moderate commitments that fit around academic workload.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Build in pausable activities and exam-period adjustments.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Structure ensures strand coverage; flexibility allows adaptation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: plans need both deliberate structure and adaptability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sustainability prevents burnout. (b) Moderate pausable commitments. (c) Structure plus flexibility.",
            commonErrors: ["Planning for ideal conditions rather than real ones."],
          },
        },
        {
          id: "cas-u1-l13c2q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how long-term CAS planning makes engagement meaningful rather than tokenistic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Meaningful engagement", statement: "Long-term planning enables depth, skill development and community impact." },
            ],
            steps: [
              { reasoning: "Multi-month projects allow depth impossible in one-off events.", marks: 1, markCode: "M" },
              { reasoning: "They enable skill development and genuine community contribution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore long-term planning produces meaningful rather than tokenistic engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Long-term planning enables depth, skill growth and real community impact.",
            commonErrors: ["Treating CAS as a series of disconnected events."],
          },
        },
        {
          id: "cas-u1-l13c2q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the view that CAS planning should be completely separate from academic planning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Integrated planning", statement: "CAS competes for the same time as academics — plans must be coordinated." },
            ],
            steps: [
              { reasoning: "CAS and academics draw on the same limited time and energy.", marks: 1, markCode: "M" },
              { reasoning: "Planning them together prevents conflicts and overload.", marks: 1, markCode: "M" },
              { reasoning: "Academic pressure directly affects what CAS commitments are feasible.", marks: 1, markCode: "M" },
              { reasoning: "Some CAS activities even complement academic skills.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: CAS and academic planning should be coordinated, not separate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CAS and academic planning should be coordinated — they compete for the same resources.",
            commonErrors: ["Planning CAS in isolation from academic demands."],
          },
        },
        {
          id: "cas-u1-l13c2q17",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to create and maintain an effective CAS plan.",
          parts: [
            { label: "a", prompt: "Describe an effective CAS planning process.", marks: 3 },
            { label: "b", prompt: "Explain why sustainable choices matter more than ambitious ones.", marks: 2 },
            { label: "c", prompt: "Evaluate how to balance deliberate structure with adaptability.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Effective planning", statement: "Plan deliberately, sustainably and flexibly for long-term engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Audit current activities and interests first.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Allocate deliberate regular time across all three strands.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Build in flexibility and review points.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sustainable commitments survive busy periods and last the programme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ambitious unsustainable plans end in abandonment — the opposite of CAS.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Structure ensures all strands are covered and commitments are clear.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But plans must adapt to academic pressure and changing interests.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: deliberate structure with built-in adaptability is most effective.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Audit, allocate, build flexibility. (b) Sustainability beats ambition. (c) Structure plus adaptability.",
            commonErrors: ["Creating plans that are either too rigid or too vague."],
          },
        },
      ],
    },
  ],
};
