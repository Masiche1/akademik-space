import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "cas-u2-lesson-2-3",
  code: "2-3",
  title: "Collaboration and Initiative",
  goal: "I CAN collaborate effectively in CAS and demonstrate initiative in projects and activities.",
  standards: ["CAS", "Collaboration", "Initiative"],
  vocabulary: [
    { term: "Collaboration", definition: "Working together with others toward shared CAS goals." },
    { term: "Initiative", definition: "Taking the lead in proposing or organising CAS activities." },
    { term: "Leadership", definition: "Guiding and motivating others in a CAS context." },
    { term: "Teamwork", definition: "Coordinating efforts with others to achieve shared outcomes." },
    { term: "Community", definition: "The group or network of people a CAS activity serves." },
    { term: "Self-directed learning", definition: "Taking responsibility for your own CAS development." },
  ],
  concepts: [
    {
      id: "cas-u2-collaboration",
      title: "Collaborating in CAS",
      skill: "Work effectively with others in CAS activities and projects.",
      lesson: {
        sections: [
          {
            heading: "Why collaboration matters",
            body: "CAS explicitly values collaboration — service especially requires working with others. Collaboration develops communication, empathy and teamwork skills. Most meaningful CAS activities involve others: teams, volunteers, community members.",
          },
          {
            heading: "Collaborative skills",
            body: "Effective collaboration requires: clear communication of goals; listening to others' ideas; sharing tasks fairly; resolving conflicts constructively; and celebrating shared success. These are transferable skills valued beyond CAS.",
          },
          {
            heading: "Collaborating in service",
            body: "Service is inherently collaborative — you work with the community you serve. This means listening to needs rather than imposing solutions, working alongside rather than 'helping' from above, and respecting the dignity of those you serve.",
          },
        ],
        keyFormulas: [
          { name: "Collaboration skills", statement: "Communication + listening + fair task-sharing + conflict resolution" },
          { name: "Service principle", statement: "Work alongside, not above — respect community dignity" },
        ],
        workedExample: {
          problem: "Your service team disagrees on how to organise an event. What do you do?",
          solution: "Facilitate discussion: listen to all perspectives, identify shared goals, propose compromises. Document decisions and assign tasks clearly. Conflict resolved constructively strengthens both the project and your collaboration skills.",
        },
      },
      questions: [
        {
          id: "cas-u2-l23c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS collaboration means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competing with others" },
              { id: "b", text: "Working together toward shared goals" },
              { id: "c", text: "Working alone efficiently" },
              { id: "d", text: "Delegating all work" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collaboration", statement: "Working together with others toward shared CAS goals." },
            ],
            steps: [
              { reasoning: "Collaboration is working together toward shared goals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Working together toward shared goals",
            commonErrors: ["Confusing collaboration with individual achievement."],
          },
        },
        {
          id: "cas-u2-l23c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three skills needed for effective CAS collaboration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collaborative skills", statement: "Communication, listening and conflict resolution enable teamwork." },
            ],
            steps: [
              { reasoning: "Communication: clear expression of goals and progress.", marks: 1, markCode: "M" },
              { reasoning: "Listening: hearing others' ideas and perspectives.", marks: 1, markCode: "M" },
              { reasoning: "Conflict resolution: addressing disagreements constructively.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Communication, listening and conflict resolution enable effective collaboration.",
            commonErrors: ["Focusing only on task completion without interpersonal skills."],
          },
        },
        {
          id: "cas-u2-l23c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that service should be done independently, not collaboratively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative service", statement: "Service is inherently collaborative — working with the community served." },
            ],
            steps: [
              { reasoning: "Against: service benefits from collective effort and community involvement.", marks: 1, markCode: "M" },
              { reasoning: "For limited truth: some service can be individual (e.g. personal fundraising).", marks: 1, markCode: "M" },
              { reasoning: "But genuine service involves working with, not just for, others.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: collaboration is central to meaningful service.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Service is fundamentally collaborative — working with communities is more meaningful than solo efforts.",
            commonErrors: ["Thinking service can be entirely individualistic."],
          },
        },
        {
          id: "cas-u2-l23c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of collaboration in CAS.",
          parts: [
            { label: "a", prompt: "Explain why CAS values collaboration.", marks: 2 },
            { label: "b", prompt: "Describe three collaborative skills.", marks: 3 },
            { label: "c", prompt: "Evaluate how collaboration enhances service.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS collaboration", statement: "Collaboration develops interpersonal skills and enables meaningful service." },
            ],
            steps: [
              { part: "a", reasoning: "Collaboration develops communication, empathy and teamwork.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Most meaningful CAS activities involve others.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Communication: clear goals and progress.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Listening: hearing others' perspectives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conflict resolution: constructive disagreement handling.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Service requires working with the community served.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collaboration ensures activities meet actual community needs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: collaborative service is more meaningful and sustainable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Develops interpersonal skills. (b) Communication, listening, conflict resolution. (c) Enhances service meaning.",
            commonErrors: ["Treating CAS as purely individual achievement."],
          },
        },
        {
          id: "cas-u2-l23c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Effective collaboration requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working alone" },
              { id: "b", text: "Communication and fair task-sharing" },
              { id: "c", text: "Competing with teammates" },
              { id: "d", text: "Avoiding all conflict" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collaboration", statement: "Working together toward shared goals with communication and fairness." },
            ],
            steps: [
              { reasoning: "Collaboration needs communication and fair task-sharing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Communication and fair task-sharing",
            commonErrors: ["Thinking collaboration means avoiding all disagreement."],
          },
        },
        {
          id: "cas-u2-l23c1q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "In service, 'work alongside' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working with the community, not imposing solutions" },
              { id: "b", text: "Observing only" },
              { id: "c", text: "Giving orders" },
              { id: "d", text: "Directing from above" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Service principle", statement: "Work alongside, not above — respect community dignity." },
            ],
            steps: [
              { reasoning: "Service means working with the community, not imposing solutions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Working with the community, not imposing solutions",
            commonErrors: ["Treating service as helping from a position of superiority."],
          },
        },
        {
          id: "cas-u2-l23c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Resolving conflicts constructively involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leaving the team" },
              { id: "b", text: "Ignoring disagreements" },
              { id: "c", text: "Listening and finding compromises" },
              { id: "d", text: "Blaming others" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conflict resolution", statement: "Address disagreements constructively through listening and compromise." },
            ],
            steps: [
              { reasoning: "Constructive resolution uses listening and compromise.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Listening and finding compromises",
            commonErrors: ["Avoiding or escalating conflicts instead of resolving them."],
          },
        },
        {
          id: "cas-u2-l23c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sharing tasks fairly in a CAS team means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying others' roles" },
              { id: "b", text: "Avoiding all tasks" },
              { id: "c", text: "One person does everything" },
              { id: "d", text: "Distributing work according to abilities and availability" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Fair task-sharing", statement: "Distribute work according to abilities and availability." },
            ],
            steps: [
              { reasoning: "Fair sharing matches tasks to abilities and availability.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Distributing work according to abilities and availability",
            commonErrors: ["Letting one member carry all the work."],
          },
        },
        {
          id: "cas-u2-l23c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Listening to others' ideas in CAS collaboration helps because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Builds trust and improves outcomes" },
              { id: "b", text: "Slows the project" },
              { id: "c", text: "Avoids communication" },
              { id: "d", text: "Is unnecessary" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative skills", statement: "Listening builds trust and improves outcomes." },
            ],
            steps: [
              { reasoning: "Listening builds trust and improves project outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Builds trust and improves outcomes",
            commonErrors: ["Dominating discussions without hearing others."],
          },
        },
        {
          id: "cas-u2-l23c1q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does service require special attention to collaboration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It involves working with the community served, respecting their dignity" },
              { id: "b", text: "It does not" },
              { id: "c", text: "Only creativity needs teamwork" },
              { id: "d", text: "It is always solo" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Service principle", statement: "Service involves working with the community, respecting dignity." },
            ],
            steps: [
              { reasoning: "Service inherently involves the community served.", marks: 1, markCode: "M" },
              { reasoning: "Working alongside respects their dignity and needs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It involves working with the community served, respecting their dignity",
            commonErrors: ["Treating service as a solo activity imposed on others."],
          },
        },
        {
          id: "cas-u2-l23c1q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three collaborative skills and briefly explain each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collaborative skills", statement: "Communication, listening, fair task-sharing, conflict resolution." },
            ],
            steps: [
              { reasoning: "Communication: clear expression of goals and progress.", marks: 1, markCode: "M" },
              { reasoning: "Listening: hearing others' ideas and perspectives.", marks: 1, markCode: "M" },
              { reasoning: "Conflict resolution or fair task-sharing enables teamwork.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Communication, listening and conflict resolution enable effective collaboration.",
            commonErrors: ["Listing skills without explaining their purpose."],
          },
        },
        {
          id: "cas-u2-l23c1q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why collaboration is central to the service strand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collaborative service", statement: "Service involves working with the community served." },
            ],
            steps: [
              { reasoning: "Service is inherently collaborative — it involves others.", marks: 1, markCode: "M" },
              { reasoning: "Working alongside respects community dignity and needs.", marks: 1, markCode: "M" },
              { reasoning: "Collaboration ensures activities meet actual community needs.", marks: 1, markCode: "A" },
              { reasoning: "It leads to more sustainable, meaningful impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Service requires working with communities — collaboration ensures needs are met respectfully.",
            commonErrors: ["Thinking service can be done entirely alone."],
          },
        },
        {
          id: "cas-u2-l23c1q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that teamwork always slows down CAS projects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Teamwork trade-off", statement: "Teamwork adds coordination time but improves outcomes." },
            ],
            steps: [
              { reasoning: "For: coordinating people does take extra time and effort.", marks: 1, markCode: "M" },
              { reasoning: "Against: teams achieve more than individuals and share workloads.", marks: 1, markCode: "M" },
              { reasoning: "Collaboration develops skills that benefit the project long-term.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: teamwork is slower initially but yields better outcomes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Teamwork adds coordination time but produces better outcomes and develops skills.",
            commonErrors: ["Ignoring the benefits of shared workload and skills."],
          },
        },
        {
          id: "cas-u2-l23c1q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of collaboration in CAS.",
          parts: [
            { label: "a", prompt: "Explain why CAS values collaboration.", marks: 2 },
            { label: "b", prompt: "Describe how to share tasks fairly.", marks: 3 },
            { label: "c", prompt: "Evaluate how collaboration enhances service.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS collaboration", statement: "Collaboration develops interpersonal skills and enables meaningful service." },
            ],
            steps: [
              { part: "a", reasoning: "Collaboration develops communication, empathy and teamwork.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Most meaningful CAS activities involve others.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Identify tasks and match to members' abilities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assign clear responsibilities with deadlines.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ensure fair distribution and accountability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Service requires working with the community served.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Collaboration ensures activities meet actual needs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: collaborative service is more meaningful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Develops interpersonal skills. (b) Fair task-sharing with deadlines. (c) Enhances service meaning.",
            commonErrors: ["Assigning tasks without considering fairness."],
          },
        },
        {
          id: "cas-u2-l23c1q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Your CAS team disagrees on the event format. Outline a constructive approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conflict resolution", statement: "Listen, identify shared goals, propose compromises." },
            ],
            steps: [
              { reasoning: "Listen to all perspectives without judgement.", marks: 1, markCode: "M" },
              { reasoning: "Identify shared goals and propose compromises.", marks: 1, markCode: "M" },
              { reasoning: "Document the decision and assign clear tasks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Listen, find shared goals, compromise, document decisions.",
            commonErrors: ["Imposing a solution without hearing all views."],
          },
        },
        {
          id: "cas-u2-l23c1q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether leading a CAS team demonstrates more than participating in one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Leadership vs participation", statement: "Both are valuable; quality of engagement matters most." },
            ],
            steps: [
              { reasoning: "For: leading demonstrates initiative, organisation and responsibility.", marks: 1, markCode: "M" },
              { reasoning: "Against: deep participation can be equally meaningful.", marks: 1, markCode: "M" },
              { reasoning: "Not everyone can or should lead — skills differ.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: both demonstrate valuable engagement; quality matters most.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leading shows initiative but meaningful participation is equally valid — quality matters most.",
            commonErrors: ["Devaluing participation in favour of leadership."],
          },
        },
        {
          id: "cas-u2-l23c1q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Plan effective collaboration for a CAS project.",
          parts: [
            { label: "a", prompt: "Define collaboration in the CAS context.", marks: 2 },
            { label: "b", prompt: "Give two skills for effective teamwork.", marks: 2 },
            { label: "c", prompt: "Explain respectful service collaboration.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collaboration", statement: "Working together with others toward shared CAS goals." },
            ],
            steps: [
              { part: "a", reasoning: "Collaboration is working together toward shared goals.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It involves communication, fairness and shared success.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Communication: clear goals and progress updates.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Listening or conflict resolution for disagreements.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Work alongside the community, not above them.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Listen to needs rather than imposing solutions.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Respect the dignity of those served.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Working together toward shared goals. (b) Communication, listening/conflict resolution. (c) Work alongside, respect dignity.",
            commonErrors: ["Treating service as helping from a position of superiority."],
          },
        },
      ],
    },
    {
      id: "cas-u2-initiative",
      title: "Taking initiative",
      skill: "Demonstrate initiative by proposing and leading CAS activities or projects.",
      lesson: {
        sections: [
          {
            heading: "What initiative means",
            body: "Initiative is going beyond what is required: proposing new activities, organising events, identifying community needs, leading projects. CAS rewards students who take ownership of their engagement rather than just participating passively.",
          },
          {
            heading: "Initiative in practice",
            body: "Examples: starting a new club, organising a fundraiser, identifying a community need and addressing it, mentoring younger students, creating an original project. Initiative shows self-direction and leadership — qualities valued in CAS assessment.",
          },
          {
            heading: "Initiative vs participation",
            body: "Participation means joining existing activities; initiative means creating them. Both are valid CAS, but initiative demonstrates higher-level engagement. You do not need to lead everything — but proposing and seeing through at least one self-directed project strengthens your CAS profile.",
          },
        ],
        keyFormulas: [
          { name: "Initiative definition", statement: "Proposing and leading activities beyond required participation" },
          { name: "Initiative examples", statement: "New club, fundraiser, community project, mentoring" },
        ],
        workedExample: {
          problem: "You notice litter in your neighbourhood. How to show initiative?",
          solution: "Organise a community clean-up: recruit volunteers, arrange equipment, publicise the event, document participation. This shows initiative in service strand and creates lasting community benefit.",
        },
      },
      questions: [
        {
          id: "cas-u2-l23c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Initiative in CAS means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proposing and leading activities" },
              { id: "b", text: "Following instructions" },
              { id: "c", text: "Only participating" },
              { id: "d", text: "Waiting to be asked" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Initiative", statement: "Proposing and leading activities beyond required participation." },
            ],
            steps: [
              { reasoning: "Initiative is proposing and leading, not just participating.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Proposing and leading activities",
            commonErrors: ["Confusing initiative with mere participation."],
          },
        },
        {
          id: "cas-u2-l23c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between initiative and participation in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative vs participation", statement: "Initiative creates activities; participation joins them." },
            ],
            steps: [
              { reasoning: "Participation: joining existing activities organised by others.", marks: 1, markCode: "M" },
              { reasoning: "Initiative: proposing, organising and leading new activities.", marks: 1, markCode: "M" },
              { reasoning: "Both are valid but initiative demonstrates higher-level engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Participation joins existing activities; initiative creates and leads new ones — both valid, initiative shows more.",
            commonErrors: ["Thinking only leadership counts as valuable CAS."],
          },
        },
        {
          id: "cas-u2-l23c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that initiative is always better than participation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative value", statement: "Initiative demonstrates leadership but participation is also valid." },
            ],
            steps: [
              { reasoning: "For: initiative shows self-direction and leadership skills.", marks: 1, markCode: "M" },
              { reasoning: "Against: participation can be deeply meaningful; not everyone can lead.", marks: 1, markCode: "M" },
              { reasoning: "Quality of engagement matters more than role.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: initiative is valuable but not superior — both count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initiative shows leadership but meaningful participation is equally valid — quality of engagement matters most.",
            commonErrors: ["Devaluing participation in favour of leadership."],
          },
        },
        {
          id: "cas-u2-l23c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of initiative in CAS.",
          parts: [
            { label: "a", prompt: "Define initiative in CAS context.", marks: 2 },
            { label: "b", prompt: "Give three examples of initiative.", marks: 3 },
            { label: "c", prompt: "Evaluate how initiative contributes to CAS assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS initiative", statement: "Initiative demonstrates self-direction and leadership." },
            ],
            steps: [
              { part: "a", reasoning: "Proposing and leading activities beyond participation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shows ownership of CAS engagement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Starting a new club or activity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Organising a fundraiser or community event.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mentoring younger students or creating a project.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Initiative demonstrates higher-level engagement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It shows self-direction valued in assessment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: initiative strengthens CAS but is not mandatory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Proposing and leading. (b) Club, fundraiser, mentoring. (c) Shows higher-level engagement.",
            commonErrors: ["Thinking initiative is the only valuable form of engagement."],
          },
        },
        {
          id: "cas-u2-l23c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Initiative in CAS means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proposing and leading activities" },
              { id: "b", text: "Only attending" },
              { id: "c", text: "Waiting for instructions" },
              { id: "d", text: "Copying others" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Initiative", statement: "Proposing and leading activities beyond required participation." },
            ],
            steps: [
              { reasoning: "Initiative means proposing and leading activities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Proposing and leading activities",
            commonErrors: ["Confusing initiative with passive participation."],
          },
        },
        {
          id: "cas-u2-l23c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which option best shows initiative in CAS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Starting a new recycling project" },
              { id: "b", text: "Attending a lecture" },
              { id: "c", text: "Joining an existing club" },
              { id: "d", text: "Watching others volunteer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative", statement: "Initiative means creating and leading new activities." },
            ],
            steps: [
              { reasoning: "Starting a new project shows initiative beyond joining existing activities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Starting a new recycling project",
            commonErrors: ["Confusing participation with initiative."],
          },
        },
        {
          id: "cas-u2-l23c2q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Participation differs from initiative because participation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires leadership" },
              { id: "b", text: "Joins activities organised by others" },
              { id: "c", text: "Creates activities" },
              { id: "d", text: "Is always better" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative vs participation", statement: "Initiative creates activities; participation joins them." },
            ],
            steps: [
              { reasoning: "Participation joins activities organised by others.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Joins activities organised by others",
            commonErrors: ["Thinking participation and initiative are identical."],
          },
        },
        {
          id: "cas-u2-l23c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mentoring younger students is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Initiative and service engagement" },
              { id: "b", text: "No strand" },
              { id: "c", text: "Service only" },
              { id: "d", text: "Passive participation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative examples", statement: "Mentoring younger students shows initiative." },
            ],
            steps: [
              { reasoning: "Mentoring shows initiative and serves the community.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Initiative and service engagement",
            commonErrors: ["Limiting initiative to formal leadership roles."],
          },
        },
        {
          id: "cas-u2-l23c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Self-directed learning in CAS refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Following a fixed syllabus" },
              { id: "b", text: "Copying peers" },
              { id: "c", text: "Taking responsibility for your own engagement and growth" },
              { id: "d", text: "Avoiding reflection" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Self-directed learning", statement: "Taking responsibility for your own CAS development." },
            ],
            steps: [
              { reasoning: "Self-direction means owning your engagement and growth.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Taking responsibility for your own engagement and growth",
            commonErrors: ["Waiting for others to direct CAS engagement."],
          },
        },
        {
          id: "cas-u2-l23c2q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does CAS reward initiative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only participation counts" },
              { id: "b", text: "It shows ownership, leadership and self-direction" },
              { id: "c", text: "It does not" },
              { id: "d", text: "It reduces workload" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative value", statement: "Initiative demonstrates higher-level engagement valued in assessment." },
            ],
            steps: [
              { reasoning: "Initiative shows ownership and self-direction.", marks: 1, markCode: "M" },
              { reasoning: "It demonstrates leadership valued in CAS assessment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It shows ownership, leadership and self-direction",
            commonErrors: ["Thinking only passive participation is valued."],
          },
        },
        {
          id: "cas-u2-l23c2q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three examples of initiative in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Initiative examples", statement: "New club, fundraiser, community project, mentoring." },
            ],
            steps: [
              { reasoning: "Starting a new club or activity.", marks: 1, markCode: "M" },
              { reasoning: "Organising a fundraiser or community event.", marks: 1, markCode: "M" },
              { reasoning: "Mentoring younger students or creating an original project.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New club, fundraiser, community project, mentoring.",
            commonErrors: ["Listing only participation examples."],
          },
        },
        {
          id: "cas-u2-l23c2q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between initiative and participation in CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative vs participation", statement: "Initiative creates activities; participation joins them." },
            ],
            steps: [
              { reasoning: "Participation: joining existing activities organised by others.", marks: 1, markCode: "M" },
              { reasoning: "Initiative: proposing, organising and leading new activities.", marks: 1, markCode: "M" },
              { reasoning: "Both are valid but initiative demonstrates higher-level engagement.", marks: 1, markCode: "A" },
              { reasoning: "Quality of engagement matters more than role.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Participation joins existing activities; initiative creates and leads new ones — both valid.",
            commonErrors: ["Thinking only leadership counts as valuable CAS."],
          },
        },
        {
          id: "cas-u2-l23c2q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that you must lead a project to have good CAS.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative value", statement: "Initiative strengthens CAS but is not mandatory." },
            ],
            steps: [
              { reasoning: "For: leading demonstrates self-direction and leadership.", marks: 1, markCode: "M" },
              { reasoning: "Against: meaningful participation is equally valid CAS.", marks: 1, markCode: "M" },
              { reasoning: "Quality of engagement matters more than role.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: initiative strengthens but does not guarantee good CAS.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initiative strengthens CAS but is not required — meaningful engagement matters most.",
            commonErrors: ["Believing leadership is the only path to good CAS."],
          },
        },
        {
          id: "cas-u2-l23c2q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the role of initiative in CAS.",
          parts: [
            { label: "a", prompt: "Define initiative in the CAS context.", marks: 2 },
            { label: "b", prompt: "Describe two ways to show initiative.", marks: 3 },
            { label: "c", prompt: "Evaluate initiative's role in CAS assessment.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "CAS initiative", statement: "Initiative demonstrates self-direction and leadership." },
            ],
            steps: [
              { part: "a", reasoning: "Proposing and leading activities beyond participation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shows ownership of CAS engagement.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Start a new club or activity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Organise a fundraiser or community event.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mentor younger students or create a project.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Initiative demonstrates higher-level engagement.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It shows self-direction valued in assessment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: initiative strengthens but is not mandatory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Proposing and leading. (b) Club, fundraiser, mentoring. (c) Higher-level engagement, not mandatory.",
            commonErrors: ["Thinking initiative is the only valuable engagement."],
          },
        },
        {
          id: "cas-u2-l23c2q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "You notice litter accumulating in your street. Outline an initiative response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Initiative", statement: "Identify a need and organise a response." },
            ],
            steps: [
              { reasoning: "Organise a community clean-up and recruit volunteers.", marks: 1, markCode: "M" },
              { reasoning: "Arrange equipment and publicise the event.", marks: 1, markCode: "M" },
              { reasoning: "Document participation — this shows service initiative.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Organise a clean-up, recruit volunteers, document participation.",
            commonErrors: ["Waiting for others to address the problem."],
          },
        },
        {
          id: "cas-u2-l23c2q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether initiative is realistic for every student.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Initiative accessibility", statement: "Initiative can take many forms, not just leadership." },
            ],
            steps: [
              { reasoning: "For: everyone can propose small initiatives within their means.", marks: 1, markCode: "M" },
              { reasoning: "Against: some students face time, confidence or resource constraints.", marks: 1, markCode: "M" },
              { reasoning: "Initiative can be modest — proposing an idea counts too.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: initiative is accessible in varied forms but not mandatory.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Initiative takes many forms and is accessible to most, but is not mandatory.",
            commonErrors: ["Thinking initiative requires major leadership roles."],
          },
        },
        {
          id: "cas-u2-l23c2q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Develop an initiative-driven CAS engagement.",
          parts: [
            { label: "a", prompt: "Define initiative in CAS.", marks: 2 },
            { label: "b", prompt: "Contrast initiative with participation.", marks: 2 },
            { label: "c", prompt: "Explain how initiative strengthens a CAS profile.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Initiative", statement: "Proposing and leading activities beyond required participation." },
            ],
            steps: [
              { part: "a", reasoning: "Initiative means proposing and leading activities.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It goes beyond required participation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Participation joins existing activities.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Initiative creates and leads new ones.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Initiative shows self-direction and ownership.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It demonstrates leadership valued in assessment.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It strengthens the CAS profile overall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Proposing and leading beyond participation. (b) Creates vs joins. (c) Self-direction and leadership.",
            commonErrors: ["Confusing initiative with mere attendance."],
          },
        },
      ],
    },
  ],
};
