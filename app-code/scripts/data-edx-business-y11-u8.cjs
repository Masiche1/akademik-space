module.exports = [
  {
    file: "lesson-8-1.ts", exportName: "lesson81",
    lesson: {
      id: "ebz11-u8-lesson-8-1", code: "8-1",
      title: "Performance Management and Communication",
      goal: "I CAN explain performance appraisals, feedback and how communication works within organisations.",
      standards: ["Edexcel IGCSE Business 4BS0 — People in Business: performance and communication"],
      vocabulary: [
        { term: "Performance appraisal", definition: "Formal review of an employee's work against objectives, usually once or twice a year." },
        { term: "Objectives", definition: "Specific, measurable targets set for an employee or team to achieve." },
        { term: "Feedback", definition: "Information given to an employee about how well they are performing." },
        { term: "Formal communication", definition: "Planned, official channels such as reports, meetings and emails from management." },
        { term: "Informal communication", definition: "Unofficial communication such as the grapevine and casual conversation." },
        { term: "Grapevine", definition: "Informal network through which rumours and unofficial news spread." },
        { term: "Downward communication", definition: "Messages flowing from managers to employees, e.g. instructions and policies." },
        { term: "Upward communication", definition: "Messages flowing from employees to managers, e.g. suggestions and complaints." },
      ],
      concepts: [
        {
          id: "ebz11-u8-performance", title: "Performance Appraisal and Feedback",
          skill: "Explain how appraisals, objectives and feedback improve employee performance.",
          sections: [
            { heading: "The appraisal process", body: "Performance management links individual work to business goals. Managers set **objectives** (ideally specific and measurable), employees work towards them, and at review time performance is **appraised** against those objectives. The appraisal may use self-assessment, manager observation, customer feedback or output data. The outcome identifies training needs, informs pay decisions and sets objectives for the next period." },
            { heading: "Methods and benefits", body: "Common methods: **self-appraisal** (employee reviews own work — promotes reflection but may be biased), **360-degree appraisal** (feedback from managers, peers, subordinates and customers — balanced but time-consuming), **rating/scales** (grading against criteria), and **critical incidents** (recording notable good or bad performance). **Feedback** should be specific, timely and two-way — praise what works, agree actions for improvement. Benefits: motivated staff, identified training gaps, fairer pay decisions, clearer expectations." },
          ],
          keyFormulas: [
            { name: "Appraisal cycle", statement: "set objectives → work → review → feedback → new objectives" },
          ],
          workedExample: {
            problem: "A sales employee has an objective to increase sales by 10%. At appraisal, sales rose 14% but customer complaints doubled. How should the manager handle the appraisal?",
            solution: "Recognise the target was exceeded (positive feedback on sales), but raise the complaint issue — agree an action plan such as product training or review of sales practices. Link both to next period's objectives so quantity gains do not come at the cost of service quality.",
          },
          questions: [
            {
              id: "ebz11-u8-performance-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a performance appraisal?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A job interview for new staff" },
                { id: "b", text: "A formal review of an employee's work against objectives" },
                { id: "c", text: "A method of paying wages" },
                { id: "d", text: "A disciplinary hearing" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Performance appraisal", statement: "Formal review against objectives." }],
                steps: [{ reasoning: "Appraisal = formal review of work vs objectives.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Formal review against objectives",
              },
            },
            {
              id: "ebz11-u8-performance-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name two methods of performance appraisal and give one advantage of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Appraisal methods", statement: "Self, 360-degree, rating scales, critical incidents." }],
                steps: [
                  { reasoning: "Self-appraisal — employee reviews own work; advantage: promotes reflection/ownership.", marks: 1, markCode: "AO1" },
                  { reasoning: "360-degree appraisal — feedback from manager, peers, subordinates, customers; advantage: balanced view.", marks: 1, markCode: "AO1" },
                  { reasoning: "Alternative: rating scales — simple and consistent; critical incidents — focused on real events.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Two methods each with a correct advantage.",
                commonErrors: ["Methods without advantages.", "Invented methods not in syllabus."],
              },
            },
            {
              id: "ebz11-u8-performance-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why setting clear objectives is important in performance management.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Objective setting", statement: "Clear targets direct effort and enable measurement." }],
                steps: [
                  { reasoning: "Objectives tell employees what is expected — focuses effort on priorities.", marks: 1, markCode: "AO2" },
                  { reasoning: "Measurable objectives make appraisal fair — performance can be judged objectively.", marks: 1, markCode: "AO2" },
                  { reasoning: "They link individual work to business goals — everyone knows how they contribute.", marks: 1, markCode: "AO2" },
                  { reasoning: "Without objectives, feedback is vague and improvement cannot be tracked.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Objectives focus effort, enable fair measurement and link work to business goals.",
                commonErrors: ["Only saying 'motivation' without mechanism."],
              },
            },
            {
              id: "ebz11-u8-performance-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A manager gives an employee only negative feedback at appraisal, citing failures but never acknowledging good work.",
              parts: [
                { label: "a", prompt: "Explain one effect this may have on the employee's motivation.", marks: 2 },
                { label: "b", prompt: "Describe how the manager could give more effective feedback.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Effective feedback", statement: "Balanced, specific, two-way feedback motivates improvement." }],
                steps: [
                  { reasoning: "(a) One-sided criticism can demotivate — employee feels unappreciated and may disengage.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Acknowledge strengths as well as weaknesses — balanced feedback.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Be specific — cite examples of what went well and what needs improvement.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Agree actions for improvement and set new objectives together (two-way).", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) demotivation/disengagement. (b) balance, specificity, agreed actions.",
                commonErrors: ["Saying all criticism is bad.", "No concrete improvement actions."],
              },
            },
            {
              id: "ebz11-u8-performance-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A company wants to introduce formal performance appraisals for the first time.",
              parts: [
                { label: "a", prompt: "Explain two benefits appraisals could bring to the company.", marks: 3 },
                { label: "b", prompt: "Explain one possible problem the company might face when introducing appraisals.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Introducing appraisals", statement: "Benefits: clarity, development; problems: time, bias, resistance." }],
                steps: [
                  { reasoning: "(a) Benefit: clear objectives and feedback improve individual and team performance.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit: identifies training needs and supports fair pay/promotion decisions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Benefit: links staff goals to company strategy.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Problem: appraisals are time-consuming for managers and staff.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Problem: risk of bias or inconsistency if managers are untrained; staff may see it as threatening.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) clarity/performance, training needs, fair decisions. (b) time cost, bias, staff resistance.",
                commonErrors: ["Benefits without company-level relevance.", "Problems that are not appraisal-specific."],
              },
            },
            {
              id: "ebz11-u8-performance-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A retail firm reviews how it manages staff performance.",
              parts: [
                { label: "a", prompt: "Define performance appraisal.", marks: 2 },
                { label: "b", prompt: "Describe two methods of appraising performance.", marks: 3 },
                { label: "c", prompt: "Explain two benefits of regular appraisals for the business.", marks: 3 },
                { label: "d", prompt: "Explain one way the firm could make appraisals more effective.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Performance management", statement: "Appraisal cycle: objectives → review → feedback → development." }],
                steps: [
                  { reasoning: "(a) Formal review of an employee's work against set objectives.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Method 1: self-appraisal — employee assesses own performance.", marks: 1, markCode: "AO1", part: "b" },
                  { reasoning: "(b) Method 2: 360-degree — input from manager, peers, customers; or rating scales/critical incidents.", marks: 2, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Benefit: identifies training needs and improves performance through feedback.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Benefit: supports fair pay and promotion decisions; links staff to business goals.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. train managers to give balanced, specific feedback; set SMART objectives; follow up on agreed actions.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) formal review vs objectives; (b) two methods; (c) two benefits; (d) improve feedback/objectives/follow-up.",
                commonErrors: ["Methods confused with appraisal definition.", "Benefits that are generic HR points."],
              },
            },
          ],
        },
        {
          id: "ebz11-u8-communication", title: "Communication in Organisations",
          skill: "Describe communication channels, directions and barriers in business.",
          sections: [
            { heading: "Channels and directions", body: "**Downward** communication flows from managers to staff — instructions, policies, targets. **Upward** flows from staff to managers — suggestions, complaints, feedback; often weak because staff fear criticism. **Horizontal/lateral** flows between colleagues at the same level — coordination and problem-solving. Channels include **verbal** (meetings, phone — fast, allows questions) and **written** (emails, memos, reports — recordable, reaches many, but slower and no instant feedback)." },
            { heading: "Formal, informal and barriers", body: "**Formal** channels are official and planned; **informal** channels (the **grapevine**) spread rumours quickly — they can be useful for morale but dangerous if they spread inaccurate or damaging information. **Barriers** to communication: poor listening, jargon, information overload, filtering (messages altered as they pass up/down levels), physical distance, and status differences that discourage upward communication. Overcoming barriers: choose the right channel, keep messages clear and simple, encourage feedback and two-way communication." },
          ],
          keyFormulas: [
            { name: "Directions", statement: "downward (orders), upward (feedback), lateral (coordination)" },
            { name: "Grapevine", statement: "informal channel — fast but unreliable" },
          ],
          workedExample: {
            problem: "A manager emails a complex policy change to all staff. Some staff misunderstand it and the grapevine spreads a wrong version. Why did this happen and what should the manager do?",
            solution: "The written channel was one-way with no chance to ask questions, and jargon/complexity acted as a barrier; the grapevine filled the information gap with rumour. The manager should use a meeting or follow-up session for Q&A, simplify the message and confirm understanding.",
          },
          questions: [
            {
              id: "ebz11-u8-communication-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is the grapevine?",
              response: { type: "mcq", choices: [
                { id: "a", text: "An official company newsletter" },
                { id: "b", text: "The informal network through which rumours spread" },
                { id: "c", text: "A type of email system" },
                { id: "d", text: "A formal complaints procedure" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Grapevine", statement: "Informal communication network." }],
                steps: [{ reasoning: "Grapevine = informal rumours channel.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Informal network for rumours",
              },
            },
            {
              id: "ebz11-u8-communication-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Distinguish between downward and upward communication, giving an example of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Communication directions", statement: "Downward = managers to staff; upward = staff to managers." }],
                steps: [
                  { reasoning: "Downward: instructions, policies, targets from managers to employees — e.g. a memo about new rules.", marks: 1, markCode: "AO1" },
                  { reasoning: "Upward: suggestions, complaints, feedback from employees to managers — e.g. a suggestion box entry.", marks: 1, markCode: "AO1" },
                  { reasoning: "Clear contrast of direction and purpose for each.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Downward=orders/instructions; upward=feedback/suggestions — each with example.",
                commonErrors: ["Examples without direction explained."],
              },
            },
            {
              id: "ebz11-u8-communication-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two barriers to effective communication in a large organisation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Communication barriers", statement: "Filtering, overload, jargon, status differences block messages." }],
                steps: [
                  { reasoning: "Barrier 1: filtering — messages are altered or summarised as they pass through management levels.", marks: 2, markCode: "AO2" },
                  { reasoning: "Barrier 2: information overload — too many messages so important ones are missed.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Any two valid barriers explained: filtering, overload, jargon, distance, status.",
                commonErrors: ["Listing without explaining the effect.", "Channels confused with barriers."],
              },
            },
            {
              id: "ebz11-u8-communication-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A company relies only on email for all internal communication.",
              parts: [
                { label: "a", prompt: "Give two disadvantages of relying only on written communication like email.", marks: 3 },
                { label: "b", prompt: "Suggest one situation where verbal communication would be better.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Channel choice", statement: "Written = recordable but no instant feedback; verbal = fast, interactive." }],
                steps: [
                  { reasoning: "(a) Disadvantage: no immediate feedback — misunderstandings go unnoticed.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Disadvantage: tone can be misread; complex or sensitive issues are poorly handled in writing.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Verbal better for: briefing meetings, handling complaints or complex change where questions can be asked.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) no feedback, tone misread. (b) meetings/complex or sensitive topics.",
                commonErrors: ["Saying email is always best/worst.", "No concrete situation for (b)."],
              },
            },
            {
              id: "ebz11-u8-communication-q5", difficulty: "challenge", totalMarks: 6,
              stem: "After a reorganisation, staff hear rumours through the grapevine before official announcements.",
              parts: [
                { label: "a", prompt: "Explain two risks of relying on the grapevine for important news.", marks: 3 },
                { label: "b", prompt: "Explain two ways management could reduce the grapevine's role.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Grapevine risks", statement: "Rumours are fast but inaccurate; timely official comms reduce them." }],
                steps: [
                  { reasoning: "(a) Risk 1: information is often distorted or exaggerated as it passes along.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Risk 2: rumours create anxiety, rumours about jobs can damage morale and productivity.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Way 1: communicate openly and quickly through formal channels before rumours fill the gap.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Way 2: encourage upward communication and hold Q&A sessions so staff get facts directly.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) distortion, anxiety/morale damage. (b) fast official comms, open two-way channels.",
                commonErrors: ["Treating grapevine as purely bad.", "Solutions that ignore information gaps."],
              },
            },
            {
              id: "ebz11-u8-communication-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A growing company finds messages are not reaching frontline staff and upward feedback is rare.",
              parts: [
                { label: "a", prompt: "Name the three directions of organisational communication.", marks: 2 },
                { label: "b", prompt: "Explain why upward communication is often weak.", marks: 3 },
                { label: "c", prompt: "Explain two barriers that may be causing the company's communication problems.", marks: 3 },
                { label: "d", prompt: "Suggest two improvements the company could make.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Communication diagnosis", statement: "Directions, barriers and channel choice determine communication effectiveness." }],
                steps: [
                  { reasoning: "(a) Downward, upward and lateral/horizontal.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Staff fear criticism or blame, so they withhold bad news or suggestions.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Hierarchical distance and status differences make managers seem unapproachable.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) No clear formal channel encourages feedback — messages have nowhere to go.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Barrier: information overload or too many levels — filtering distorts messages.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Barrier: inappropriate channel — complex instructions sent only by email with no Q&A.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Improvement: introduce suggestion schemes/meetings to open upward channels.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Improvement: simplify messages, use appropriate channels, confirm understanding.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) down/up/lateral; (b) fear, distance, no channel; (c) two barriers; (d) two improvements.",
                commonErrors: ["Conflating formal and informal channels.", "Improvements not linked to diagnosed problems."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u8-performance-notes", title: "Performance and communication — revision notes",
      summary: "Appraisals review work against objectives; feedback should be balanced and specific. Communication flows downward, upward, laterally; barriers include filtering, overload and status. Grapevine spreads rumours fast but unreliably.",
      sections: [
        { heading: "Appraisal cycle", body: "Set objectives → work → review → feedback → new objectives." },
        { heading: "Communication", body: "Match channel to message; encourage upward feedback; manage the grapevine with fast, open official comms." },
        { heading: "Barriers", body: "Filtering, overload, jargon, distance, status differences — overcome with clarity and two-way channels." },
      ],
    },
  },
  {
    file: "lesson-8-2.ts", exportName: "lesson82",
    lesson: {
      id: "ebz11-u8-lesson-8-2", code: "8-2",
      title: "Employee Participation and Empowerment",
      goal: "I CAN explain how employee participation, teams and empowerment improve performance.",
      standards: ["Edexcel IGCSE Business 4BS0 — People in Business: participation and teams"],
      vocabulary: [
        { term: "Employee participation", definition: "Involving employees in decision-making that affects their work." },
        { term: "Works council", definition: "Body of elected employee representatives who discuss issues with management." },
        { term: "Suggestion scheme", definition: "System for employees to submit ideas for improving the business." },
        { term: "Quality circle", definition: "Small group of employees who meet regularly to solve work-related problems." },
        { term: "Empowerment", definition: "Giving employees authority and responsibility to make decisions." },
        { term: "Self-managed team", definition: "Team that plans, organises and controls its own work with little supervision." },
        { term: "Delayering", definition: "Removing layers of management to flatten the organisation structure." },
      ],
      concepts: [
        {
          id: "ebz11-u8-participation", title: "Employee Participation Schemes",
          skill: "Describe participation methods and evaluate their benefits and drawbacks.",
          sections: [
            { heading: "Forms of participation", body: "**Works councils** — elected employee representatives meet management on issues like pay, conditions and redundancy. **Suggestion schemes** — employees submit ideas; successful ones may be rewarded. **Quality circles** — small groups meet regularly to identify and solve workplace problems. **Team briefings** — managers update staff on performance and plans. **Profit-sharing** — employees receive a share of profits, linking their interests to the firm's success." },
            { heading: "Benefits and drawbacks", body: "**Benefits**: employees feel valued → higher motivation and commitment; management gains ideas and information from the shop floor; faster problem-solving; better industrial relations and less conflict. **Drawbacks**: schemes can be time-consuming; management may see them as a threat to authority; employees may become cynical if suggestions are ignored; in some industries works councils are legally required, adding cost. Participation works best when management genuinely acts on employee input." },
          ],
          keyFormulas: [
            { name: "Participation spectrum", statement: "information → consultation → shared decision-making" },
          ],
          workedExample: {
            problem: "A factory introduces quality circles. Output rises and staff report feeling more involved. Explain one benefit and one risk for management.",
            solution: "Benefit: employees closest to problems generate practical solutions — improved quality and motivation. Risk: if management ignores circle recommendations, staff lose trust and participation declines; also meetings take time away from production.",
          },
          questions: [
            {
              id: "ebz11-u8-participation-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is a suggestion scheme?",
              response: { type: "mcq", choices: [
                { id: "a", text: "A system for employees to submit ideas for improving the business" },
                { id: "b", text: "A method of paying bonuses" },
                { id: "c", text: "A disciplinary procedure" },
                { id: "d", text: "A type of job rotation" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Suggestion scheme", statement: "Employees submit improvement ideas." }],
                steps: [{ reasoning: "Suggestion scheme = employee ideas channel.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** System for employee improvement ideas",
              },
            },
            {
              id: "ebz11-u8-participation-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name three forms of employee participation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Participation forms", statement: "Works councils, suggestion schemes, quality circles, team briefings, profit-sharing." }],
                steps: [
                  { reasoning: "Works councils — elected reps discuss issues with management.", marks: 1, markCode: "AO1" },
                  { reasoning: "Suggestion schemes and quality circles — ideas and problem-solving groups.", marks: 1, markCode: "AO1" },
                  { reasoning: "Team briefings or profit-sharing — information sharing or shared rewards.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: works councils, suggestion schemes, quality circles, briefings, profit-sharing.",
                commonErrors: ["Listing only one or repeating."],
              },
            },
            {
              id: "ebz11-u8-participation-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two benefits to a business of involving employees in decision-making.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Participation benefits", statement: "Motivation, better decisions, improved industrial relations." }],
                steps: [
                  { reasoning: "Benefit 1: employees feel valued → higher motivation, commitment and productivity.", marks: 2, markCode: "AO2" },
                  { reasoning: "Benefit 2: management gains practical ideas and information from people doing the work.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Motivation/commitment and better ideas/information — or better industrial relations.",
                commonErrors: ["Benefits that only help employees, not the business."],
              },
            },
            {
              id: "ebz11-u8-participation-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A company introduces a suggestion scheme but managers never respond to employees' ideas.",
              parts: [
                { label: "a", prompt: "Explain the likely effect on employee motivation.", marks: 2 },
                { label: "b", prompt: "Explain how the company could make the scheme more effective.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Participation credibility", statement: "Ignored input breeds cynicism; acted-on input builds trust." }],
                steps: [
                  { reasoning: "(a) Employees will see the scheme as tokenism — motivation falls and fewer suggestions are made.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Respond to every suggestion — accept, reject with reasons, or defer with a timeline.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Implement good ideas and reward contributors.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Communicate results so staff see their input matters.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) cynicism, falling motivation. (b) respond, implement, reward, communicate.",
                commonErrors: ["Suggesting scrapping participation entirely.", "No mechanism for response."],
              },
            },
            {
              id: "ebz11-u8-participation-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A factory is considering introducing quality circles.",
              parts: [
                { label: "a", prompt: "Explain what a quality circle is.", marks: 2 },
                { label: "b", prompt: "Explain two benefits the factory might gain.", marks: 2 },
                { label: "c", prompt: "Explain one drawback for the factory.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Quality circles", statement: "Employee problem-solving groups — benefits and time costs." }],
                steps: [
                  { reasoning: "(a) Small group of employees meeting regularly to identify and solve work problems.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: employees closest to problems generate practical solutions — better quality/efficiency.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: involvement raises motivation and morale.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Drawback: meetings take employees away from production — time cost; or management may resist losing control.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) employee problem-solving groups. (b) practical solutions + motivation. (c) time cost/resistance.",
                commonErrors: ["Confusing quality circles with works councils.", "Drawback unrelated to the scheme."],
              },
            },
            {
              id: "ebz11-u8-participation-q6", difficulty: "challenge", totalMarks: 10,
              stem: "An engineering firm wants to improve employee involvement.",
              parts: [
                { label: "a", prompt: "Define employee participation.", marks: 2 },
                { label: "b", prompt: "Describe three methods of participation the firm could use.", marks: 3 },
                { label: "c", prompt: "Explain two benefits participation could bring.", marks: 3 },
                { label: "d", prompt: "Explain one condition needed for participation to succeed.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Participation evaluation", statement: "Methods exist; success requires genuine management commitment." }],
                steps: [
                  { reasoning: "(a) Involving employees in decisions that affect their work.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Methods: works councils, suggestion schemes, quality circles, team briefings, profit-sharing.", marks: 3, markCode: "AO1", part: "b" },
                  { reasoning: "(c) Benefit: higher motivation, commitment and productivity.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Benefit: better ideas/information from staff; improved industrial relations.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Condition: management must genuinely act on employee input and communicate results.", marks: 2, markCode: "AO3", part: "d" },
                ],
                finalAnswer: "(a) involve staff in decisions; (b) three methods; (c) two benefits; (d) genuine commitment.",
                commonErrors: ["Methods without description.", "Condition that is not about management action."],
              },
            },
          ],
        },
        {
          id: "ebz11-u8-empowerment", title: "Empowerment and Teamworking",
          skill: "Explain how delegation, teams and empowerment affect motivation and performance.",
          sections: [
            { heading: "Empowerment and delegation", body: "**Empowerment** gives employees authority to make decisions about their own work — it satisfies the need for responsibility and achievement. **Delegation** is the practical tool: a manager passes a task plus the authority and resources to complete it. Effective delegation includes clear instructions, authority to act, and accountability for results. **Delayering** removes middle-management layers, shortening chains of command — it speeds decisions and empowers staff but can overload senior managers and reduce supervision." },
            { heading: "Teamworking", body: "**Self-managed teams** plan, organise and control their own work with little supervision — members share tasks and hold each other accountable. Teams suit complex, interdependent work and can raise motivation (peer recognition, variety, shared goals). Drawbacks: some employees dislike group dependence; teams can be slow to decide; individual contribution may be hard to measure; conflict within teams needs managing. Team-based pay (group bonuses) can align effort but may cause free-riding if contributions are unequal." },
          ],
          keyFormulas: [
            { name: "Delegation", statement: "task + authority + resources + accountability" },
            { name: "Delayering", statement: "fewer management layers → faster decisions, more empowerment" },
          ],
          workedExample: {
            problem: "A supervisor delegates 'improve stock rotation in your area' to a team leader, but gives no budget authority and criticises every decision. Has delegation worked?",
            solution: "No — authority was not genuinely transferred. The team leader has responsibility without power, so decisions will be slow and blame-shifting likely. Effective delegation requires authority, resources and trust alongside accountability.",
          },
          questions: [
            {
              id: "ebz11-u8-empowerment-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What does empowerment mean in the workplace?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Giving employees more authority to make decisions about their work" },
                { id: "b", text: "Paying employees higher wages" },
                { id: "c", text: "Reducing the number of employees" },
                { id: "d", text: "Working longer hours" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Empowerment", statement: "Authority to decide about one's own work." }],
                steps: [{ reasoning: "Empowerment = giving decision-making authority to employees.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(a)** Giving decision authority to employees",
              },
            },
            {
              id: "ebz11-u8-empowerment-q2", difficulty: "foundation", totalMarks: 3,
              stem: "What four elements should effective delegation include?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Delegation elements", statement: "Task, authority, resources, accountability." }],
                steps: [
                  { reasoning: "Clear task/objective to be completed.", marks: 1, markCode: "AO1" },
                  { reasoning: "Authority to make decisions needed to complete it.", marks: 1, markCode: "AO1" },
                  { reasoning: "Resources (time, budget, people) to do the job.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Task, authority, resources (and accountability).",
                commonErrors: ["Listing only 'giving work to others'."],
              },
            },
            {
              id: "ebz11-u8-empowerment-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two ways empowerment can improve employee motivation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Empowerment and motivation", statement: "Responsibility and achievement satisfy higher-level needs." }],
                steps: [
                  { reasoning: "Employees gain responsibility and a sense of achievement — higher-level needs are met.", marks: 2, markCode: "AO2" },
                  { reasoning: "Being trusted increases job satisfaction and commitment to the business.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Responsibility/achievement and trust → higher motivation and commitment.",
                commonErrors: ["Saying empowerment always motivates — some staff dislike it."],
              },
            },
            {
              id: "ebz11-u8-empowerment-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A manager delegates a task but keeps approving every minor decision the employee makes.",
              parts: [
                { label: "a", prompt: "Explain why this is ineffective delegation.", marks: 2 },
                { label: "b", prompt: "Explain what the manager should do differently.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Delegation failure", statement: "Responsibility without authority creates frustration." }],
                steps: [
                  { reasoning: "(a) Employee has responsibility but not real authority — every decision still needs approval, so nothing is truly delegated.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Define the objective and boundaries, then let the employee decide within them.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Give resources and trust; review outcomes rather than every step.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) responsibility without authority. (b) clear boundaries, trust, review outcomes.",
                commonErrors: ["Blaming the employee.", "No mention of authority/boundaries."],
              },
            },
            {
              id: "ebz11-u8-empowerment-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A company is thinking of introducing self-managed teams in its production department.",
              parts: [
                { label: "a", prompt: "Explain what a self-managed team is.", marks: 2 },
                { label: "b", prompt: "Give two potential benefits.", marks: 2 },
                { label: "c", prompt: "Give two potential problems.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Self-managed teams", statement: "Teams control own work — autonomy vs coordination costs." }],
                steps: [
                  { reasoning: "(a) Team that plans, organises and controls its own work with little supervision.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: motivation and commitment from autonomy and shared responsibility.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: faster problem-solving and flexibility — team adapts without waiting for orders.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Problem: some employees dislike group dependence or free-riding by weak members.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Problem: slower decisions or conflict within teams; individual contribution hard to measure.", marks: 1, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) autonomous teams. (b) motivation, flexibility. (c) free-riding, conflict/slow decisions.",
                commonErrors: ["Benefits listed as problems.", "No production-department relevance."],
              },
            },
            {
              id: "ebz11-u8-empowerment-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A hierarchical company wants to empower employees and speed up decision-making.",
              parts: [
                { label: "a", prompt: "Define empowerment and delayering.", marks: 3 },
                { label: "b", prompt: "Explain two benefits of delayering for this company.", marks: 3 },
                { label: "c", prompt: "Explain one risk of delayering.", marks: 2 },
                { label: "d", prompt: "Suggest one way the company could empower staff without delayering.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Structure and empowerment", statement: "Delayering flattens structure; delegation empowers within it." }],
                steps: [
                  { reasoning: "(a) Empowerment = giving employees authority over their work; delayering = removing management layers.", marks: 3, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Benefit: shorter chains of command — faster decisions and communication.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Benefit: lower admin costs and empowered staff closer to decisions.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Risk: senior managers lose control/span of control widens; less supervision of staff.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(d) e.g. delegate decision authority to team leaders within existing structure.", marks: 2, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definitions; (b) faster decisions, lower costs; (c) wider span/less control; (d) delegation.",
                commonErrors: ["Delayering confused with delegation.", "Risk unrelated to structure."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u8-participation-notes", title: "Participation and empowerment — revision notes",
      summary: "Participation schemes (works councils, suggestion schemes, quality circles) involve staff in decisions — motivation up, but ignored input breeds cynicism. Empowerment = authority over work; delegation needs task + authority + resources + accountability. Self-managed teams give autonomy but risk free-riding and conflict.",
      sections: [
        { heading: "Key idea", body: "Participation and empowerment raise motivation only when management genuinely acts on employee input." },
        { heading: "Delegation", body: "Task + authority + resources + accountability — responsibility without authority fails." },
        { heading: "Teams", body: "Self-managed teams suit interdependent work; watch for free-riding and slow decisions." },
      ],
    },
  },
  {
    file: "lesson-8-3.ts", exportName: "lesson83",
    lesson: {
      id: "ebz11-u8-lesson-8-3", code: "8-3",
      title: "Managing Change and Organisational Culture",
      goal: "I CAN explain why organisations change, how resistance arises and how to manage change effectively.",
      standards: ["Edexcel IGCSE Business 4BS0 — People in Business: change and culture"],
      vocabulary: [
        { term: "Organisational change", definition: "Any significant alteration to a business's structure, processes, culture or strategy." },
        { term: "Planned change", definition: "Change introduced deliberately by management, e.g. new technology or restructuring." },
        { term: "Reactive change", definition: "Change forced by external events, e.g. a competitor's new product or new regulation." },
        { term: "Resistance to change", definition: "Opposition from employees or stakeholders when change threatens their interests or habits." },
        { term: "Organisational culture", definition: "The shared values, beliefs and behaviours that characterise how a business operates." },
        { term: "Change agent", definition: "Person or group responsible for planning and implementing change." },
        { term: "Stakeholders", definition: "Groups affected by the business: employees, customers, shareholders, suppliers, community." },
      ],
      concepts: [
        {
          id: "ebz11-u8-change", title: "Why and How Organisations Change",
          skill: "Explain sources of change, causes of resistance and steps to manage change.",
          sections: [
            { heading: "Sources of change", body: "**External pressures**: new competitors, changing customer tastes, new technology, government regulation, economic conditions. **Internal pressures**: growth requiring new systems, poor performance needing correction, new leadership with different priorities, mergers creating a combined culture. **Planned change** is deliberate (e.g. introducing lean production); **reactive change** is forced (e.g. responding to a rival's price cut). Change can be incremental (small steps) or transformational (major restructuring)." },
            { heading: "Resistance and management", body: "Employees resist change for understandable reasons: fear of job losses, reduced status or skill obsolescence; dislike of uncertainty; attachment to routine; lack of trust in management; poor communication about why change is needed. **Managing change**: explain the reasons clearly and early; consult and involve staff; provide training for new skills; give support during transition; use **change champions** — respected employees who advocate the change; implement in stages so problems surface early; celebrate early wins to build momentum." },
          ],
          keyFormulas: [
            { name: "Change process", statement: "unfreeze → change → refreeze (Lewin)" },
          ],
          workedExample: {
            problem: "A retailer replaces its till system with self-service checkouts. Staff fear job losses and customers complain. Outline how management should manage this change.",
            solution: "Explain early why the change is needed (faster service, competitiveness). Consult staff on deployment, retrain them for customer-service roles rather than just till work, pilot in one store first, address job fears honestly, and gather customer feedback to fix early problems before full rollout.",
          },
          questions: [
            {
              id: "ebz11-u8-change-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is reactive change?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Change planned years in advance" },
                { id: "b", text: "Change forced by external events such as new regulations or competitors" },
                { id: "c", text: "Change that never happens" },
                { id: "d", text: "A type of staff training" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Reactive change", statement: "Change forced by external events." }],
                steps: [{ reasoning: "Reactive change responds to external pressures rather than being planned.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Change forced by external events",
              },
            },
            {
              id: "ebz11-u8-change-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Give two external reasons why a business might need to change.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "External drivers of change", statement: "Competitors, technology, regulation, customer tastes, economy." }],
                steps: [
                  { reasoning: "New competitor or rival product forcing the business to respond.", marks: 1, markCode: "AO1" },
                  { reasoning: "New technology making existing processes obsolete.", marks: 1, markCode: "AO1" },
                  { reasoning: "Government regulation or changing customer tastes/economic conditions.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any two valid external drivers.",
                commonErrors: ["Internal reasons listed (growth, new manager)."],
              },
            },
            {
              id: "ebz11-u8-change-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two reasons why employees might resist organisational change.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Resistance to change", statement: "Fear, uncertainty, loss of status/routine, distrust." }],
                steps: [
                  { reasoning: "Reason 1: fear of job losses, reduced status or having to learn new skills.", marks: 2, markCode: "AO2" },
                  { reasoning: "Reason 2: uncertainty — people prefer the known routine; or distrust of management's motives.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Fear of losses/status and uncertainty/distrust — or attachment to routine.",
                commonErrors: ["Reasons that are benefits of change."],
              },
            },
            {
              id: "ebz11-u8-change-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A company announces a major restructuring with no prior consultation, and staff immediately start resisting.",
              parts: [
                { label: "a", prompt: "Explain two reasons for the resistance.", marks: 3 },
                { label: "b", prompt: "Suggest one way management could have reduced the resistance.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Change resistance", statement: "Surprise + no consultation → fear and opposition." }],
                steps: [
                  { reasoning: "(a) Reason: announcement without consultation created fear and uncertainty about jobs.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Reason: staff had no chance to understand or influence the change — feels imposed.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Method: consult employees early, explain reasons clearly, involve them in planning.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) fear/uncertainty, no consultation. (b) early consultation and clear explanation.",
                commonErrors: ["Blaming employees for resisting.", "Part (b) repeats the problem instead of offering a solution."],
              },
            },
            {
              id: "ebz11-u8-change-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A business wants to introduce new software across all departments.",
              parts: [
                { label: "a", prompt: "Describe three steps the business could take to manage this change effectively.", marks: 4 },
                { label: "b", prompt: "Explain one benefit of introducing the change gradually rather than all at once.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Managing change", statement: "Communicate, train, involve, phase." }],
                steps: [
                  { reasoning: "(a) Step: explain why the change is needed and what it means for staff.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Step: provide training so employees can use the new software confidently.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Step: involve staff in planning/pilot — gather feedback and use change champions.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Step: offer support during transition — helpdesk, supervision, address concerns.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Phased rollout lets problems be found and fixed early before full commitment.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) three valid steps; (b) early problem detection/less disruption.",
                commonErrors: ["Steps that ignore employees.", "Part (b) says gradual is always better without a reason."],
              },
            },
            {
              id: "ebz11-u8-change-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A long-established family business must modernise to survive against larger competitors.",
              parts: [
                { label: "a", prompt: "Give two external pressures forcing this change.", marks: 2 },
                { label: "b", prompt: "Explain two reasons long-serving staff might resist modernisation.", marks: 3 },
                { label: "c", prompt: "Explain three steps management could take to manage the change.", marks: 5 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Modernisation change", statement: "External pressure forces change; resistance managed through communication, training and involvement." }],
                steps: [
                  { reasoning: "(a) Pressure 1: larger competitors with better technology/cost advantages.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Pressure 2: changing customer expectations or new technology/regulation.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Reason: fear of job losses or skills becoming obsolete after years of service.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Reason: attachment to established routines and 'how we have always done it'.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Step: communicate the competitive threat clearly — explain why change is essential.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Step: retrain staff and offer support to build confidence in new ways.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Step: involve employees in planning, use change champions, phase implementation.", marks: 2, markCode: "AO2", part: "c" },
                ],
                finalAnswer: "(a) competition/technology; (b) job fears, routine attachment; (c) communicate, train, involve/phase.",
                commonErrors: ["Internal pressures listed for (a).", "Resistance reasons that are actually benefits."],
              },
            },
          ],
        },
        {
          id: "ebz11-u8-culture", title: "Organisational Culture",
          skill: "Explain how culture forms, affects behaviour and can be changed.",
          sections: [
            { heading: "What culture is", body: "**Organisational culture** is the shared set of values, beliefs, attitudes and behaviours that define 'how we do things here'. It is shaped by founders' values, leadership style, recruitment (hiring people who fit), rewards (what gets celebrated) and stories and rituals. A strong culture can give staff identity and guide decisions without formal rules — e.g. a culture of innovation encourages risk-taking; a blame culture discourages reporting mistakes." },
            { heading: "Culture and change", body: "Culture affects how people respond to change: cultures that value stability resist change more; cultures of learning adapt faster. Changing culture is slow — it requires consistent signals: leaders modelling new behaviours, changing recruitment and promotion criteria, revising reward systems to reinforce desired behaviours, and communicating the new values repeatedly. Attempts to change culture through slogans alone fail; employees watch what is rewarded and punished, not what is said. After mergers, clashing cultures are a major source of conflict — management must decide which values to keep." },
          ],
          keyFormulas: [
            { name: "Culture drivers", statement: "leadership, recruitment, rewards, rituals, stories" },
          ],
          workedExample: {
            problem: "A company wants a culture of 'customer focus' but managers are promoted mainly for hitting sales targets regardless of complaints. What does this reveal?",
            solution: "The reward system contradicts the stated value — promotions reward sales only, so staff learn that targets matter more than customers. To change culture, promotion criteria and rewards must genuinely reflect customer focus, and leaders must model it.",
          },
          questions: [
            {
              id: "ebz11-u8-culture-q1", difficulty: "foundation", totalMarks: 2,
              stem: "What is organisational culture?",
              response: { type: "mcq", choices: [
                { id: "a", text: "The company's annual report" },
                { id: "b", text: "The shared values, beliefs and behaviours that characterise a business" },
                { id: "c", text: "The office layout" },
                { id: "d", text: "A list of company rules" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Organisational culture", statement: "Shared values, beliefs and behaviours." }],
                steps: [{ reasoning: "Culture = shared values/beliefs/behaviours of the organisation.", marks: 2, markCode: "AO1" }],
                finalAnswer: "**(b)** Shared values, beliefs and behaviours",
              },
            },
            {
              id: "ebz11-u8-culture-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name three factors that shape an organisation's culture.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Culture drivers", statement: "Leadership, recruitment, rewards, rituals, founders." }],
                steps: [
                  { reasoning: "Leadership — founders'/managers' values and behaviour set the tone.", marks: 1, markCode: "AO1" },
                  { reasoning: "Recruitment — hiring people who fit reinforces the culture.", marks: 1, markCode: "AO1" },
                  { reasoning: "Rewards and rituals — what is celebrated/punished shapes behaviour.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "Any three: leadership, recruitment, rewards, rituals/stories, founder influence.",
                commonErrors: ["Listing culture outcomes rather than drivers."],
              },
            },
            {
              id: "ebz11-u8-culture-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how organisational culture can affect employee behaviour.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Culture and behaviour", statement: "Culture sets informal rules guiding daily behaviour." }],
                steps: [
                  { reasoning: "Culture provides shared expectations — employees know 'how things are done here'.", marks: 1, markCode: "AO2" },
                  { reasoning: "Example: innovation culture encourages trying new ideas; blame culture discourages reporting mistakes.", marks: 1, markCode: "AO2" },
                  { reasoning: "Culture guides decisions when no formal rule exists — faster, more consistent behaviour.", marks: 1, markCode: "AO2" },
                  { reasoning: "A strong positive culture improves motivation and performance; a poor one undermines rules.", marks: 1, markCode: "AO3" },
                ],
                finalAnswer: "Culture sets expectations and guides behaviour — can motivate or demoralise.",
                commonErrors: ["Conflating culture with formal policies."],
              },
            },
            {
              id: "ebz11-u8-culture-q4", difficulty: "challenge", totalMarks: 5,
              stem: "A company's stated culture is 'open and innovative', but employees who suggest new ideas are criticised and managers rarely listen.",
              parts: [
                { label: "a", prompt: "Explain the gap between stated and actual culture.", marks: 2 },
                { label: "b", prompt: "Explain two actions management could take to make culture match the stated values.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Culture gap", statement: "Culture is what is rewarded, not what is said." }],
                steps: [
                  { reasoning: "(a) Slogans say 'innovative' but behaviour (criticising ideas, not listening) signals the real culture.", marks: 2, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Action: managers must model the behaviour — listen to and reward suggestions.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Action: change rewards/promotion criteria so innovation is genuinely valued.", marks: 1, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) words vs rewarded behaviour. (b) model it, reward it, align incentives.",
                commonErrors: ["Saying just repeat the slogan.", "Actions not linked to culture mechanisms."],
              },
            },
            {
              id: "ebz11-u8-culture-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Two companies merge. One has a fast, risk-taking culture; the other is cautious and rule-bound.",
              parts: [
                { label: "a", prompt: "Explain why the merger may create cultural conflict.", marks: 3 },
                { label: "b", prompt: "Suggest two ways management could begin to integrate the cultures.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Mergers and culture", statement: "Clashing values cause conflict; integration needs deliberate signals." }],
                steps: [
                  { reasoning: "(a) Staff from each firm have different expectations of acceptable behaviour — decisions, risk, pace.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Each group sees its own culture as normal — the other's methods seem wrong or threatening.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(a) Fear of losing status/ways of working breeds resistance and 'us vs them' attitudes.", marks: 1, markCode: "AO2", part: "a" },
                  { reasoning: "(b) Way 1: define and communicate shared values explicitly — what the combined culture will be.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Way 2: align leadership behaviour, rewards and promotion to the chosen culture; blend teams.", marks: 2, markCode: "AO2", part: "b" },
                ],
                finalAnswer: "(a) clashing values/expectations → conflict. (b) define shared values, align rewards/leadership.",
                commonErrors: ["Treating culture clash as only a communication problem."],
              },
            },
            {
              id: "ebz11-u8-culture-q6", difficulty: "challenge", totalMarks: 10,
              stem: "A business discovers its culture discourages staff from reporting safety problems.",
              parts: [
                { label: "a", prompt: "Define organisational culture.", marks: 2 },
                { label: "b", prompt: "Explain how this culture could have developed.", marks: 3 },
                { label: "c", prompt: "Explain two dangers of this culture for the business.", marks: 3 },
                { label: "d", prompt: "Suggest two steps to change the culture.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Culture change", statement: "Culture forms through leadership, rewards and habits; changes through consistent signals." }],
                steps: [
                  { reasoning: "(a) Shared values, beliefs and behaviours that characterise the organisation.", marks: 2, markCode: "AO1", part: "a" },
                  { reasoning: "(b) Possibly managers punished or ignored reporters in the past; or blame culture where mistakes are punished.", marks: 2, markCode: "AO2", part: "b" },
                  { reasoning: "(b) Rewards focus only on output, so staff learn raising problems is 'not their job'.", marks: 1, markCode: "AO2", part: "b" },
                  { reasoning: "(c) Danger 1: safety hazards go unreported — accidents, legal liability, reputational damage.", marks: 2, markCode: "AO2", part: "c" },
                  { reasoning: "(c) Danger 2: staff disengage — problems hidden until they become crises.", marks: 1, markCode: "AO2", part: "c" },
                  { reasoning: "(d) Step: leaders visibly reward reporting and never punish the messenger.", marks: 1, markCode: "AO2", part: "d" },
                  { reasoning: "(d) Step: introduce simple reporting channels and communicate that safety comes first.", marks: 1, markCode: "AO2", part: "d" },
                ],
                finalAnswer: "(a) definition; (b) blame/punishment history; (c) accidents + disengagement; (d) reward reporting, open channels.",
                commonErrors: ["Confusing culture with rules.", "Steps that punish reporters further."],
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebz11-u8-change-notes", title: "Change and culture — revision notes",
      summary: "Change comes from external pressure or internal needs; resistance comes from fear, uncertainty and routine. Manage via communication, training, involvement and phasing. Culture = shared values/behaviours, shaped by leadership, recruitment and rewards — what is rewarded is the real culture.",
      sections: [
        { heading: "Key idea", body: "Resistance is normal — manage it with early communication and involvement, not by imposing change." },
        { heading: "Culture", body: "Culture is revealed by rewards and punishments, not slogans. Change it by aligning incentives and leadership behaviour." },
        { heading: "Mergers", body: "Clashing cultures are a top merger risk — define shared values and align rewards early." },
      ],
    },
  },
];
