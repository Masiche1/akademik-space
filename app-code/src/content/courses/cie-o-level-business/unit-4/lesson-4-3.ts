import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olbus-u4-lesson-4-3",
  code: "4-3",
  title: "Communication and Teamwork",
  goal: "I CAN explain communication methods and the importance of teamwork.",
  standards: ["7100 4.3"],
  vocabulary: [
    { term: "Communication", definition: "Exchange of information between people." },
    { term: "Formal communication", definition: "Communication through official channels (reports, meetings)." },
    { term: "Informal communication", definition: "Casual communication (chat, grapevine)." },
    { term: "Grapevine", definition: "Informal network of rumours and news." },
    { term: "Teamwork", definition: "People working together towards shared goals." },
    { term: "Conflict", definition: "Disagreement between individuals or groups." },
  ],
  concepts: [
    {
      id: "olbus-u4-communication",
      title: "Communication in business",
      skill: "Compare formal and informal communication and their uses.",
      lesson: {
        sections: [
          { heading: "Formal communication", body: "Official channels: reports, emails, meetings, notices. Clear, documented, but can be slow and bureaucratic." },
          { heading: "Informal communication", body: "Grapevine, casual chat, social media. Fast and builds relationships but can spread rumours and inaccuracies." },
          { heading: "Barriers", body: "Language differences, noise, poor listening, information overload, cultural differences can all block effective communication." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Management announces a restructure via official email and notice board. Which type?",
          solution: "Formal communication — official channels for important announcements.",
        },
      },
      questions: [
        {
          id: "olbus-u4-comm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Formal communication includes…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Casual chat" },
            { id: "b", text: "Gossip" },
            { id: "c", text: "Rumours" },
            { id: "d", text: "Reports and official meetings" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Formal communication", statement: "Official channels." }], steps: [{ reasoning: "Official methods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two barriers to communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Communication barriers", statement: "Obstacles." }], steps: [
            { reasoning: "Language, noise, poor listening, overload, culture — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: language, noise, poor listening, overload, cultural differences." },
        },
        {
          id: "olbus-u4-comm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why informal communication (grapevine) can be problematic.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Grapevine", statement: "Risks of informal." }], steps: [
            { reasoning: "Rumours spread quickly and inaccurately.", marks: 1, markCode: "AO2" },
            { reasoning: "Can cause anxiety and conflict.", marks: 1, markCode: "AO2" },
            { reasoning: "Uncontrolled and unverified.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Grapevine spreads unverified rumours quickly, causing anxiety and conflict." },
        },
        {
          id: "olbus-u4-comm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Communication review.",
          parts: [
            { label: "a", prompt: "Formal vs informal communication?", marks: 2 },
            { label: "b", prompt: "Name two formal methods.", marks: 2 },
            { label: "c", prompt: "Name two barriers.", marks: 2 },
            { label: "d", prompt: "How can businesses reduce communication barriers?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Communication", statement: "Types, barriers, solutions." },
          ], steps: [
            { part: "a", reasoning: "Formal=official; informal=casual/grapevine.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Reports, meetings, emails, notices — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Two barriers.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear messages, training, feedback, multiple channels.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Practical solutions.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formal/informal (b) 2 methods (c) 2 barriers (d) clarity+feedback" },
        },
        {
          id: "olbus-u4-comm-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The 'grapevine' refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Scheduled staff meetings" },
            { id: "b", text: "The company's email system" },
            { id: "c", text: "Official company reports" },
            { id: "d", text: "An informal network of rumours and news" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Grapevine", statement: "Informal network." }], steps: [{ reasoning: "Grapevine = informal rumour/news network.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q6", difficulty: "core", totalMarks: 1,
          stem: "Which of the following is a formal communication method?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Casual chat at lunch" },
            { id: "b", text: "Office gossip" },
            { id: "c", text: "Rumours" },
            { id: "d", text: "A written report to management" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Formal communication", statement: "Official channels." }], steps: [{ reasoning: "Reports follow official channels = formal.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q7", difficulty: "foundation", totalMarks: 1,
          stem: "An advantage of informal communication is that it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is fast and builds relationships" },
            { id: "b", text: "Is always accurate" },
            { id: "c", text: "Never spreads errors" },
            { id: "d", text: "Is officially recorded" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Informal communication", statement: "Speed and rapport." }], steps: [{ reasoning: "Informal comms are fast and build relationships.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q8", difficulty: "core", totalMarks: 2,
          stem: "A company sends 250 emails and 80% are opened within a day. How many emails are opened?",
          response: { type: "numeric", parts: [{ label: "a", answer: 200, unit: "emails" }] },
          markscheme: { principles: [{ kind: "principle", name: "Open rate", statement: "% of sent." }], steps: [
            { part: "a", reasoning: "80% × 250 = 200.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "200 emails opened.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 200 emails" },
        },
        {
          id: "olbus-u4-comm-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Out of 400 messages sent, 30 are lost or misunderstood. (a) How many messages fail to communicate correctly? (b) What percentage are communicated successfully?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 30, unit: "messages" },
            { label: "b", answer: 92.5, unit: "%" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Communication success", statement: "Failures and %." }], steps: [
            { part: "a", reasoning: "30 messages lost/misunderstood.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "(400 - 30) ÷ 400 × 100 = 92.5%.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "92.5% success rate.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30 messages; **(b)** 92.5%" },
        },
        {
          id: "olbus-u4-comm-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of formal communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Formal communication", statement: "Advantages." }], steps: [
            { reasoning: "Clear and documented — creates a record.", marks: 1, markCode: "AO2" },
            { reasoning: "Official channels ensure the right people receive it.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Formal comms are clear, documented and reach the right people." },
        },
        {
          id: "olbus-u4-comm-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a business can reduce the negative effects of the grapevine.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Grapevine", statement: "Managing informal comms." }], steps: [
            { reasoning: "Share accurate information quickly through official channels.", marks: 1, markCode: "AO2" },
            { reasoning: "Encourage open communication so staff don't rely on rumours.", marks: 1, markCode: "AO2" },
            { reasoning: "Address concerns directly to stop speculation.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Fast, accurate official communication and open dialogue reduce rumour damage." },
        },
        {
          id: "olbus-u4-comm-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is a barrier to effective communication?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Information overload" },
            { id: "b", text: "Giving feedback" },
            { id: "c", text: "Clear writing" },
            { id: "d", text: "Active listening" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Communication barriers", statement: "Obstacles." }], steps: [{ reasoning: "Information overload blocks communication.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Information overload" },
        },
        {
          id: "olbus-u4-comm-q13", difficulty: "core", totalMarks: 2,
          stem: "Two departments each send 20 reports to head office. How many reports are sent in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "reports" }] },
          markscheme: { principles: [{ kind: "principle", name: "Total reports", statement: "Departments × reports." }], steps: [
            { part: "a", reasoning: "20 × 2 = 40.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "40 reports.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40 reports" },
        },
        {
          id: "olbus-u4-comm-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Informal communication can be problematic because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is always slow" },
            { id: "b", text: "It is always formal" },
            { id: "c", text: "It is always documented" },
            { id: "d", text: "Rumours may spread inaccurately and quickly" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Grapevine", statement: "Risks of informal." }], steps: [{ reasoning: "Rumours spread fast and inaccurately.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-comm-q15", difficulty: "core", totalMarks: 2,
          stem: "A communication training session improves message clarity from 70% to 90%. Out of 200 messages, how many additional messages are now understood correctly?",
          response: { type: "numeric", parts: [{ label: "a", answer: 40, unit: "messages" }] },
          markscheme: { principles: [{ kind: "principle", name: "Improvement", statement: "% change × total." }], steps: [
            { part: "a", reasoning: "(90% - 70%) × 200 = 20% × 200 = 40.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "40 additional messages.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 40 messages" },
        },
        {
          id: "olbus-u4-comm-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Communication extended review.",
          parts: [
            { label: "a", prompt: "Distinguish formal from informal communication.", marks: 2 },
            { label: "b", prompt: "Name two formal communication methods.", marks: 2 },
            { label: "c", prompt: "Name two barriers to communication.", marks: 2 },
            { label: "d", prompt: "How can a business reduce communication barriers?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Communication", statement: "Types, barriers, solutions." },
          ], steps: [
            { part: "a", reasoning: "Formal=official; informal=casual/grapevine.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Clear distinction.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Reports, meetings, emails, notices — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Two barriers.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear messages, training, feedback, multiple channels.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Practical solutions.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formal/informal (b) 2 methods (c) 2 barriers (d) clarity+feedback" },
        },
      ],
    },
    {
      id: "olbus-u4-teamwork",
      title: "Teamwork and Conflict",
      skill: "Explain the benefits of teamwork and how to manage conflict.",
      lesson: {
        sections: [
          { heading: "Benefits of teamwork", body: "Shared ideas, division of labour, mutual support, higher morale, better problem-solving. Teams achieve more than individuals." },
          { heading: "Building teams", body: "Clear goals, defined roles, good communication, trust, appropriate leadership style, recognition of contributions." },
          { heading: "Managing conflict", body: "Conflict is normal — address early, listen to both sides, find common ground, involve mediator if needed, focus on issues not personalities." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Two team members disagree on project approach. How should a manager respond?",
          solution: "Listen to both, identify common goals, facilitate discussion, and agree on a solution together.",
        },
      },
      questions: [
        {
          id: "olbus-u4-tw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Teamwork benefits include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower quality" },
            { id: "b", text: "No need for management" },
            { id: "c", text: "Shared ideas and higher morale" },
            { id: "d", text: "Less work for everyone" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Teamwork", statement: "Collaboration benefits." }], steps: [{ reasoning: "Shared effort/ideas.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two ways to build effective teams.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Team building", statement: "Methods." }], steps: [
            { reasoning: "Clear goals, defined roles, communication, trust — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: clear goals, roles, communication, trust, recognition." },
        },
        {
          id: "olbus-u4-tw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how conflict can be managed in a team.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conflict management", statement: "Resolution." }], steps: [
            { reasoning: "Address early before escalation.", marks: 1, markCode: "AO2" },
            { reasoning: "Listen to both sides, focus on issues.", marks: 1, markCode: "AO2" },
            { reasoning: "Find common ground / compromise.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Address early, listen, focus on issues, find compromise." },
        },
        {
          id: "olbus-u4-tw-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Teamwork review.",
          parts: [
            { label: "a", prompt: "Two benefits of teamwork?", marks: 2 },
            { label: "b", prompt: "Two ways to build teams?", marks: 2 },
            { label: "c", prompt: "Is conflict always bad?", marks: 2 },
            { label: "d", prompt: "Three conflict resolution steps?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Teamwork", statement: "Benefits, building, conflict." },
          ], steps: [
            { part: "a", reasoning: "Shared ideas; morale/support.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clear goals; roles/trust/communication.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "No — can spark innovation if managed.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Nuance shown.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Listen, address early, compromise/mediation.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second step.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Third step.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 benefits (b) 2 methods (c) managed=constructive (d) 3 steps" },
        },
        {
          id: "olbus-u4-tw-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Conflict in a team is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always destructive" },
            { id: "b", text: "Only about money" },
            { id: "c", text: "Impossible to manage" },
            { id: "d", text: "A disagreement between individuals or groups" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Conflict", statement: "Disagreement." }], steps: [{ reasoning: "Conflict = disagreement between people/groups.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q6", difficulty: "core", totalMarks: 1,
          stem: "An effective way to manage conflict in a team is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Disband the team" },
            { id: "b", text: "Ignore the problem" },
            { id: "c", text: "Blame one person" },
            { id: "d", text: "Listen to both sides and focus on issues" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Conflict management", statement: "Resolution." }], steps: [{ reasoning: "Listening and focusing on issues resolves conflict.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q7", difficulty: "foundation", totalMarks: 1,
          stem: "A benefit of teamwork is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "No need for communication" },
            { id: "b", text: "Shared ideas and division of labour" },
            { id: "c", text: "Less accountability" },
            { id: "d", text: "Lower morale" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Teamwork", statement: "Collaboration benefits." }], steps: [{ reasoning: "Teamwork shares ideas and divides labour.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q8", difficulty: "core", totalMarks: 2,
          stem: "A team of 8 members completes 64 tasks in a week. How many tasks does each member complete on average?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "tasks" }] },
          markscheme: { principles: [{ kind: "principle", name: "Average workload", statement: "Total / members." }], steps: [
            { part: "a", reasoning: "64 ÷ 8 = 8.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "8 tasks each.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 8 tasks" },
        },
        {
          id: "olbus-u4-tw-q9", difficulty: "challenge", totalMarks: 3,
          stem: "Team A completes 6 projects in 12 days; Team B completes 9 projects in 15 days. (a) What is Team A's daily output? (b) What is Team B's daily output?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 0.5, unit: "projects" },
            { label: "b", answer: 0.6, unit: "projects" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Team productivity", statement: "Projects / days." }], steps: [
            { part: "a", reasoning: "6 ÷ 12 = 0.5.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "9 ÷ 15 = 0.6.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Team B = 0.6 per day.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 0.5; **(b)** 0.6" },
        },
        {
          id: "olbus-u4-tw-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain why clearly defined roles help teams work effectively.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Team roles", statement: "Clarity." }], steps: [
            { reasoning: "Everyone knows their responsibilities.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces duplication and gaps in work.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Clear roles prevent overlap and ensure all work is covered." },
        },
        {
          id: "olbus-u4-tw-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how conflict can sometimes benefit a team.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Conflict", statement: "Constructive potential." }], steps: [
            { reasoning: "Disagreements can surface different ideas.", marks: 1, markCode: "AO2" },
            { reasoning: "Can lead to better problem-solving and innovation.", marks: 1, markCode: "AO2" },
            { reasoning: "If managed well, improves decision quality.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Managed conflict can spark better ideas and stronger decisions." },
        },
        {
          id: "olbus-u4-tw-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which of the following is NOT a benefit of teamwork?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Division of labour" },
            { id: "b", text: "Shared ideas" },
            { id: "c", text: "Reduced need for communication" },
            { id: "d", text: "Higher morale" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Teamwork", statement: "Benefits." }], steps: [{ reasoning: "Teamwork needs MORE communication, not less.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Reduced need for communication" },
        },
        {
          id: "olbus-u4-tw-q13", difficulty: "core", totalMarks: 2,
          stem: "A project requires 120 hours of work and 6 team members share it equally. How many hours does each member work?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Workload share", statement: "Total / members." }], steps: [
            { part: "a", reasoning: "120 ÷ 6 = 20.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "20 hours each.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 20 hours" },
        },
        {
          id: "olbus-u4-tw-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Building an effective team requires…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Secret goals" },
            { id: "b", text: "Competition between members only" },
            { id: "c", text: "Clear goals, roles and trust" },
            { id: "d", text: "No leadership" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Team building", statement: "Foundations." }], steps: [{ reasoning: "Teams need goals, roles and trust.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-tw-q15", difficulty: "core", totalMarks: 2,
          stem: "A workplace mediator resolves 4 team conflicts and each resolution requires 2 hours of meetings. How many total mediation hours are needed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 8, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Mediation time", statement: "Conflicts × hours." }], steps: [
            { part: "a", reasoning: "4 × 2 = 8.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "8 hours total.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 8 hours" },
        },
        {
          id: "olbus-u4-tw-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Teamwork extended review.",
          parts: [
            { label: "a", prompt: "Give two benefits of teamwork.", marks: 2 },
            { label: "b", prompt: "Name two ways to build effective teams.", marks: 2 },
            { label: "c", prompt: "Is conflict always bad for a team? Explain.", marks: 2 },
            { label: "d", prompt: "Give three steps for resolving conflict in a team.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Teamwork", statement: "Benefits, building, conflict." },
          ], steps: [
            { part: "a", reasoning: "Shared ideas; morale/support.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Two benefits.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Clear goals; roles/trust/communication.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two methods.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "No — can spark innovation if managed.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Nuance shown.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Listen, address early, compromise/mediation.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Second step.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Third step.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 2 benefits (b) 2 methods (c) managed=constructive (d) 3 steps" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u4-4-3-notes", title: "Communication and teamwork — notes", summary: "Formal/informal communication, barriers and team building.",
      sections: [
        { heading: "Communication", body: "Formal = official channels; informal = grapevine (fast but risky). Barriers: language, noise, overload." },
        { heading: "Teamwork", body: "Clear goals, roles, trust; manage conflict by listening and compromising." },
      ] },
  ],
};
