import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cas-u2-lesson-2-2",
  code: "2-2",
  title: "Documenting Participation and Evidence",
  goal: "I CAN document CAS participation effectively and gather evidence for the portfolio.",
  standards: ["CAS", "Documentation", "Portfolio"],
  vocabulary: [
    { term: "Evidence", definition: "Proof of CAS participation — photos, logs, certificates, reflections." },
    { term: "Participation log", definition: "A record of activities with dates, duration and descriptions." },
    { term: "Portfolio", definition: "The collection of evidence and reflections demonstrating CAS engagement." },
    { term: "Artifact", definition: "A physical or digital item evidencing an activity — e.g. certificate, photo, programme." },
    { term: "Verification", definition: "Confirmation by a supervisor or organiser that you participated." },
    { term: "Reflection", definition: "Written analysis of what was learned from an activity." },
  ],
  concepts: [
    {
      id: "cas-u2-documentation",
      title: "Documenting participation",
      skill: "Keep accurate records of CAS activities and collect supporting evidence.",
      lesson: {
        sections: [
          {
            heading: "What to document",
            body: "For every CAS activity record: date, duration, what you did, which strand it belongs to, and what you learned. Photos, certificates, attendance records, programmes — all serve as evidence. Consistent documentation throughout is far easier than reconstructing at the end.",
          },
          {
            heading: "Types of evidence",
            body: "**Direct evidence**: photos, videos, certificates, signed logs. **Indirect evidence**: reflections describing the activity, testimonials from organisers. **Process evidence**: project plans, drafts, evaluations. Different strands may need different evidence types.",
          },
          {
            heading: "Verification",
            body: "Some activities require verification by an adult supervisor or organiser — especially service activities. Check requirements in advance. Signed logs or emails confirming participation are standard. Do not rely on memory alone — documented evidence is what counts.",
          },
        ],
        keyFormulas: [
          { name: "Documentation rule", statement: "Date + duration + activity + strand + learning = complete record" },
          { name: "Evidence types", statement: "Direct (photos), indirect (reflections), process (plans)" },
        ],
        workedExample: {
          problem: "You volunteered at an animal shelter for a term. How to document?",
          solution: "Keep a log: dates, hours, tasks performed. Collect photos (with permission), any certificates, and write brief reflections after each session. Get a supervisor's signature or email confirming your participation at the end.",
        },
      },
      questions: [
        {
          id: "cas-u2-l22c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "CAS evidence should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only personal opinions" },
              { id: "b", text: "Records, photos and reflections" },
              { id: "c", text: "Nothing — it's all verbal" },
              { id: "d", text: "Only certificates" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS evidence", statement: "Documentation includes records, photos, certificates and reflections." },
            ],
            steps: [
              { reasoning: "Evidence includes records, photos and reflections.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Records, photos and reflections",
            commonErrors: ["Relying on memory alone without documentation."],
          },
        },
        {
          id: "cas-u2-l22c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what should be recorded for each CAS activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Activity documentation", statement: "Record date, duration, activity, strand and learning." },
            ],
            steps: [
              { reasoning: "Record when and how long the activity took place.", marks: 1, markCode: "M" },
              { reasoning: "Describe what you did and which strand it belongs to.", marks: 1, markCode: "M" },
              { reasoning: "Note what you learned or gained from the experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Record date, duration, activity description, strand and learning outcomes.",
            commonErrors: ["Recording only participation without reflection on learning."],
          },
        },
        {
          id: "cas-u2-l22c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that documentation is just busywork.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation value", statement: "Documentation is evidence for assessment and aids reflection." },
            ],
            steps: [
              { reasoning: "Against 'busywork': documentation provides verifiable evidence of participation.", marks: 1, markCode: "M" },
              { reasoning: "For caution: documentation alone without reflection is insufficient.", marks: 1, markCode: "M" },
              { reasoning: "Records also enable meaningful reflection on progress and learning.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: documentation is essential evidence, not mere paperwork.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Documentation is essential evidence for assessment and reflection, not busywork.",
            commonErrors: ["Treating documentation as optional or purely administrative."],
          },
        },
        {
          id: "cas-u2-l22c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to document CAS participation effectively.",
          parts: [
            { label: "a", prompt: "List what should be recorded for each activity.", marks: 2 },
            { label: "b", prompt: "Describe three types of evidence.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of verification in documentation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation", statement: "Complete records with verifiable evidence are required." },
            ],
            steps: [
              { part: "a", reasoning: "Date, duration, activity, strand, learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direct: photos, certificates, logs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Indirect: reflections, testimonials.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Process: plans, drafts, evaluations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verification confirms participation by supervisor/organiser.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Especially required for service activities.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: verification adds credibility to documentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Date, duration, activity, strand, learning. (b) Direct, indirect, process. (c) Verification adds credibility.",
            commonErrors: ["Failing to get verification for service activities."],
          },
        },
        {
          id: "cas-u2-l22c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A participation log should record:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only moods" },
              { id: "b", text: "Dates, duration, activity and strand" },
              { id: "c", text: "Only photos" },
              { id: "d", text: "Nothing written" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Participation log", statement: "A record of activities with dates, duration and descriptions." },
            ],
            steps: [
              { reasoning: "A log records dates, duration, activity and strand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dates, duration, activity and strand",
            commonErrors: ["Recording only feelings without factual details."],
          },
        },
        {
          id: "cas-u2-l22c1q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Direct evidence includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflections" },
              { id: "b", text: "Photos and certificates" },
              { id: "c", text: "Project plans" },
              { id: "d", text: "Personal opinions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Direct evidence", statement: "Photos, videos, certificates, signed logs." },
            ],
            steps: [
              { reasoning: "Photos and certificates are direct proof of participation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Photos and certificates",
            commonErrors: ["Confusing reflections (indirect) with direct evidence."],
          },
        },
        {
          id: "cas-u2-l22c1q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Indirect evidence includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photographs" },
              { id: "b", text: "Reflections and testimonials" },
              { id: "c", text: "Signed logs" },
              { id: "d", text: "Programmes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Indirect evidence", statement: "Reflections describing the activity and testimonials from organisers." },
            ],
            steps: [
              { reasoning: "Reflections and testimonials are indirect evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reflections and testimonials",
            commonErrors: ["Confusing direct artifacts with indirect descriptions."],
          },
        },
        {
          id: "cas-u2-l22c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Process evidence refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Final certificates only" },
              { id: "b", text: "Plans, drafts and evaluations" },
              { id: "c", text: "Attendance sheets" },
              { id: "d", text: "Verbal claims" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Process evidence", statement: "Project plans, drafts, evaluations." },
            ],
            steps: [
              { reasoning: "Process evidence shows the development: plans, drafts, evaluations.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Plans, drafts and evaluations",
            commonErrors: ["Confusing process evidence with final outcomes."],
          },
        },
        {
          id: "cas-u2-l22c1q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Verification is especially important for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creativity only" },
              { id: "b", text: "Service activities" },
              { id: "c", text: "Activity only" },
              { id: "d", text: "No strand" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Verification", statement: "Service activities especially require supervisor confirmation." },
            ],
            steps: [
              { reasoning: "Service activities especially require verification by an organiser.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Service activities",
            commonErrors: ["Assuming verification is never required."],
          },
        },
        {
          id: "cas-u2-l22c1q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is memory alone insufficient for CAS documentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always accurate" },
              { id: "b", text: "Records may be forgotten or disputed" },
              { id: "c", text: "It counts for more marks" },
              { id: "d", text: "It is faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation", statement: "Documented evidence is what counts, not memory." },
            ],
            steps: [
              { reasoning: "Memory fades and details may be disputed.", marks: 1, markCode: "M" },
              { reasoning: "Written records provide verifiable evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Records may be forgotten or disputed",
            commonErrors: ["Relying on memory instead of written records."],
          },
        },
        {
          id: "cas-u2-l22c1q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A project plan or draft evaluation is best classified as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct evidence" },
              { id: "b", text: "Process evidence" },
              { id: "c", text: "Indirect evidence" },
              { id: "d", text: "No evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Process evidence", statement: "Plans, drafts and evaluations show the development process." },
            ],
            steps: [
              { reasoning: "Plans and drafts show the process of development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Process evidence",
            commonErrors: ["Misclassifying planning documents as direct evidence."],
          },
        },
        {
          id: "cas-u2-l22c1q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "List five items that should appear in a complete CAS record.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Activity documentation", statement: "Record date, duration, activity, strand and learning." },
            ],
            steps: [
              { reasoning: "Date and duration of the activity.", marks: 1, markCode: "M" },
              { reasoning: "Description of what was done and which strand it belongs to.", marks: 1, markCode: "M" },
              { reasoning: "What was learned or gained, plus supporting evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Date, duration, activity, strand, learning, plus supporting evidence.",
            commonErrors: ["Recording participation without noting learning."],
          },
        },
        {
          id: "cas-u2-l22c1q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain the difference between direct, indirect and process evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evidence types", statement: "Direct (photos, certificates), indirect (reflections), process (plans, drafts)." },
            ],
            steps: [
              { reasoning: "Direct evidence proves participation: photos, certificates, logs.", marks: 1, markCode: "M" },
              { reasoning: "Indirect evidence describes it: reflections, testimonials.", marks: 1, markCode: "M" },
              { reasoning: "Process evidence shows development: plans, drafts, evaluations.", marks: 1, markCode: "M" },
              { reasoning: "Together they give a complete picture of engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Direct proves participation, indirect describes it, process shows development.",
            commonErrors: ["Using only one type of evidence for all activities."],
          },
        },
        {
          id: "cas-u2-l22c1q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether detailed documentation improves CAS outcomes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation value", statement: "Documentation provides evidence and supports reflection." },
            ],
            steps: [
              { reasoning: "For: detailed records provide verifiable evidence for assessment.", marks: 1, markCode: "M" },
              { reasoning: "For: records enable meaningful reflection on progress.", marks: 1, markCode: "M" },
              { reasoning: "Against: documentation without reflection adds little learning value.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: detailed documentation improves outcomes when paired with reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Detailed documentation improves outcomes when combined with genuine reflection.",
            commonErrors: ["Documenting without reflecting on the experience."],
          },
        },
        {
          id: "cas-u2-l22c1q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to document CAS participation effectively.",
          parts: [
            { label: "a", prompt: "Describe what to record for each activity.", marks: 2 },
            { label: "b", prompt: "Give one example of each type of evidence.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of verification in documentation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Documentation", statement: "Complete records with verifiable evidence are required." },
            ],
            steps: [
              { part: "a", reasoning: "Date, duration, activity, strand, learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All elements listed.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direct: photo or certificate.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Indirect: reflection or testimonial.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Process: project plan or draft.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Verification confirms participation by a supervisor.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is especially important for service activities.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: verification adds credibility to documentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Date, duration, activity, strand, learning. (b) Direct, indirect, process examples. (c) Verification adds credibility.",
            commonErrors: ["Failing to obtain verification for service activities."],
          },
        },
        {
          id: "cas-u2-l22c1q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student volunteers weekly at a library. Outline a documentation routine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Activity documentation", statement: "Record each session and collect supporting evidence." },
            ],
            steps: [
              { reasoning: "Log each session: date, hours, tasks performed.", marks: 1, markCode: "M" },
              { reasoning: "Collect artifacts such as photos, certificates or signed logs.", marks: 1, markCode: "M" },
              { reasoning: "Write brief reflections and obtain supervisor verification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Log each session, collect artifacts, reflect and verify.",
            commonErrors: ["Only recording attendance without evidence or reflection."],
          },
        },
        {
          id: "cas-u2-l22c1q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Build a complete documentation system for CAS engagement.",
          parts: [
            { label: "a", prompt: "Define what CAS evidence is.", marks: 2 },
            { label: "b", prompt: "Explain two types of evidence.", marks: 2 },
            { label: "c", prompt: "Describe when verification is required.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "CAS evidence", statement: "Proof of participation: records, photos, certificates, reflections." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence is proof of participation and learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It includes records, photos, certificates and reflections.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Direct evidence: photos, certificates, signed logs.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Indirect evidence: reflections, testimonials.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Verification is needed when an adult confirms participation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It is especially required for service activities.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Signed logs or emails serve as verification.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Proof of participation and learning. (b) Direct and indirect evidence. (c) Supervisor confirmation, especially service.",
            commonErrors: ["Assuming all activities need the same evidence type."],
          },
        },
      ],
    },
    {
      id: "cas-u2-evidence-collection",
      title: "Collecting portfolio evidence",
      skill: "Gather and organise evidence systematically for the CAS portfolio.",
      lesson: {
        sections: [
          {
            heading: "Systematic collection",
            body: "Create a dedicated folder or digital space for CAS evidence. Organise by strand or by date. Collect artifacts as they happen — certificates, photos, programmes, signed logs. Regular collection prevents last-minute scrambling and ensures nothing is lost.",
          },
          {
            heading: "Quality over quantity",
            body: "The portfolio does not need to be exhaustive — it needs to be representative. Choose evidence that best demonstrates your engagement: a few strong photos and reflections beat dozens of generic snapshots. Quality of evidence reflects quality of engagement.",
          },
          {
            heading: "Linking evidence to reflection",
            body: "Evidence alone is not enough — it needs context. Each artifact should be accompanied by reflection explaining what you did and learned. The portfolio shows not just that you participated, but that you grew from it.",
          },
        ],
        keyFormulas: [
          { name: "Collection rule", statement: "Collect as you go; organise by strand or date" },
          { name: "Quality principle", statement: "Representative strong evidence beats exhaustive weak evidence" },
        ],
        workedExample: {
          problem: "You have 50 photos from a service event. Which to include?",
          solution: "Choose 3-5 photos that best show what you did and learned — action shots, teamwork moments, before/after if applicable. Add a reflection explaining the experience. Quality over quantity.",
        },
      },
      questions: [
        {
          id: "cas-u2-l22c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The CAS portfolio should contain:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Every photo ever taken" },
              { id: "b", text: "Representative evidence with reflection" },
              { id: "c", text: "Only certificates" },
              { id: "d", text: "Nothing — it's all oral" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Representative evidence with reflection demonstrates engagement." },
            ],
            steps: [
              { reasoning: "Portfolio needs representative evidence plus reflection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Representative evidence with reflection",
            commonErrors: ["Including everything rather than curating quality evidence."],
          },
        },
        {
          id: "cas-u2-l22c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why evidence needs to be accompanied by reflection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence + reflection", statement: "Reflection explains what the evidence means — participation alone is insufficient." },
            ],
            steps: [
              { reasoning: "Evidence proves participation; reflection proves learning.", marks: 1, markCode: "M" },
              { reasoning: "Reflection connects the activity to skills and insights gained.", marks: 1, markCode: "M" },
              { reasoning: "Without reflection, evidence is just documentation, not learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reflection explains the learning from evidence — participation without reflection is incomplete.",
            commonErrors: ["Collecting evidence without reflecting on what was learned."],
          },
        },
        {
          id: "cas-u2-l22c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that more evidence always means a better portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence quality", statement: "Quality and representativeness matter more than quantity." },
            ],
            steps: [
              { reasoning: "For: more evidence shows thoroughness.", marks: 1, markCode: "M" },
              { reasoning: "Against: excessive weak evidence dilutes quality and wastes effort.", marks: 1, markCode: "M" },
              { reasoning: "A curated portfolio demonstrates better judgement than an exhaustive one.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: representative strong evidence beats quantity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quality and representativeness matter more than quantity — curate your evidence.",
            commonErrors: ["Including everything rather than selecting meaningful evidence."],
          },
        },
        {
          id: "cas-u2-l22c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to build an effective CAS portfolio.",
          parts: [
            { label: "a", prompt: "Explain what a CAS portfolio contains.", marks: 2 },
            { label: "b", prompt: "Describe how to collect evidence systematically.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of reflection in the portfolio.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio building", statement: "Portfolio = curated evidence + reflection demonstrating engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence of activities plus reflections on learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Organised to show engagement across all strands.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Collect as you go — don't reconstruct later.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Organise by strand or date in dedicated space.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Choose representative quality evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection explains what evidence means.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It demonstrates learning, not just participation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: portfolio without reflection is incomplete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence + reflection across strands. (b) Collect as you go, curate quality. (c) Reflection proves learning.",
            commonErrors: ["Building portfolio only at the end under time pressure."],
          },
        },
        {
          id: "cas-u2-l22c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The best way to organise CAS evidence is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pile everything together" },
              { id: "b", text: "Organise by strand or date in a dedicated space" },
              { id: "c", text: "Keep it all in memory" },
              { id: "d", text: "Throw away old items" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collection rule", statement: "Collect as you go; organise by strand or date." },
            ],
            steps: [
              { reasoning: "A dedicated space organised by strand or date keeps evidence accessible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Organise by strand or date in a dedicated space",
            commonErrors: ["Leaving evidence scattered and disorganised."],
          },
        },
        {
          id: "cas-u2-l22c2q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "A curated portfolio is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contains every item ever collected" },
              { id: "b", text: "Selects representative strong evidence" },
              { id: "c", text: "Has no reflection" },
              { id: "d", text: "Is built in one night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality principle", statement: "Representative strong evidence beats exhaustive weak evidence." },
            ],
            steps: [
              { reasoning: "Curation means selecting representative strong evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Selects representative strong evidence",
            commonErrors: ["Including everything rather than curating quality."],
          },
        },
        {
          id: "cas-u2-l22c2q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Collecting evidence as activities happen prevents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reflection" },
              { id: "b", text: "Last-minute scrambling and lost records" },
              { id: "c", text: "Verification" },
              { id: "d", text: "Strand balance" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Collection rule", statement: "Collect as you go to avoid reconstructing later." },
            ],
            steps: [
              { reasoning: "Regular collection prevents last-minute scrambling and lost records.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Last-minute scrambling and lost records",
            commonErrors: ["Delaying collection until the end."],
          },
        },
        {
          id: "cas-u2-l22c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Each artifact in the portfolio should be accompanied by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A grade" },
              { id: "b", text: "Reflection explaining what was learned" },
              { id: "c", text: "A signature only" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence + reflection", statement: "Evidence needs context from reflection." },
            ],
            steps: [
              { reasoning: "Reflection explains the learning from each artifact.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reflection explaining what was learned",
            commonErrors: ["Collecting artifacts without contextual reflection."],
          },
        },
        {
          id: "cas-u2-l22c2q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Quality over quantity in a CAS portfolio means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Include everything" },
              { id: "b", text: "A few strong items beat many weak ones" },
              { id: "c", text: "Only certificates count" },
              { id: "d", text: "More is always better" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality principle", statement: "A few strong items beat many weak ones." },
            ],
            steps: [
              { reasoning: "Quality means representative strong evidence over volume.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A few strong items beat many weak ones",
            commonErrors: ["Equating quantity of evidence with quality."],
          },
        },
        {
          id: "cas-u2-l22c2q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why should evidence be linked to reflection in the portfolio?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is optional" },
              { id: "b", text: "It shows learning, not just participation" },
              { id: "c", text: "It replaces evidence" },
              { id: "d", text: "It is only for projects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence + reflection", statement: "Reflection demonstrates learning, not just participation." },
            ],
            steps: [
              { reasoning: "Evidence alone shows participation; reflection shows learning.", marks: 1, markCode: "M" },
              { reasoning: "Together they demonstrate growth from the experience.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It shows learning, not just participation",
            commonErrors: ["Submitting evidence without explanatory reflection."],
          },
        },
        {
          id: "cas-u2-l22c2q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is an example of process evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A signed attendance log" },
              { id: "b", text: "A project plan or draft evaluation" },
              { id: "c", text: "A photograph" },
              { id: "d", text: "A testimonial" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Process evidence", statement: "Plans, drafts and evaluations show development." },
            ],
            steps: [
              { reasoning: "Plans and evaluations are process evidence showing development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A project plan or draft evaluation",
            commonErrors: ["Confusing process evidence with direct artifacts."],
          },
        },
        {
          id: "cas-u2-l22c2q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe a systematic routine for collecting CAS evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence collection", statement: "Collect as you go in a dedicated organised space." },
            ],
            steps: [
              { reasoning: "Create a dedicated folder or digital space for evidence.", marks: 1, markCode: "M" },
              { reasoning: "Collect artifacts as activities happen, not later.", marks: 1, markCode: "M" },
              { reasoning: "Organise regularly by strand or date and curate quality items.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dedicated space, collect as you go, organise by strand or date.",
            commonErrors: ["Collecting everything at the end under pressure."],
          },
        },
        {
          id: "cas-u2-l22c2q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why representative evidence is better than exhaustive evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quality principle", statement: "Representative strong evidence beats exhaustive weak evidence." },
            ],
            steps: [
              { reasoning: "Curation shows judgement in selecting meaningful items.", marks: 1, markCode: "M" },
              { reasoning: "Strong items demonstrate engagement more effectively than volume.", marks: 1, markCode: "M" },
              { reasoning: "Quality of evidence reflects quality of engagement.", marks: 1, markCode: "A" },
              { reasoning: "Excessive weak evidence dilutes the portfolio's impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Representative strong evidence shows judgement and engagement better than exhaustive weak evidence.",
            commonErrors: ["Including everything rather than selecting meaningful items."],
          },
        },
        {
          id: "cas-u2-l22c2q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the portfolio should include every activity attended.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio quality", statement: "Portfolios need representative evidence, not exhaustive lists." },
            ],
            steps: [
              { reasoning: "For: completeness shows thoroughness of participation.", marks: 1, markCode: "M" },
              { reasoning: "Against: exhaustive inclusion dilutes quality and wastes effort.", marks: 1, markCode: "M" },
              { reasoning: "A curated portfolio demonstrates better judgement.", marks: 1, markCode: "R" },
              { reasoning: "Judgement: representative evidence is preferred over exhaustive lists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Portfolios should be curated — representative strong evidence beats listing everything.",
            commonErrors: ["Confusing completeness with quality."],
          },
        },
        {
          id: "cas-u2-l22c2q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to build an effective CAS portfolio.",
          parts: [
            { label: "a", prompt: "Explain what the CAS portfolio contains.", marks: 2 },
            { label: "b", prompt: "Describe how to select evidence for inclusion.", marks: 3 },
            { label: "c", prompt: "Evaluate the role of reflection in the portfolio.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio building", statement: "Portfolio = curated evidence + reflection demonstrating engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence of activities across all strands.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accompanied by reflections on learning.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Choose items that best demonstrate engagement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Prefer strong, meaningful artifacts over generic ones.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ensure coverage across strands and time.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Reflection explains what the evidence means.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "It demonstrates learning, not just participation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: portfolio without reflection is incomplete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evidence + reflection across strands. (b) Select strong representative items. (c) Reflection proves learning.",
            commonErrors: ["Including weak evidence to appear exhaustive."],
          },
        },
        {
          id: "cas-u2-l22c2q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "You have 30 photos from a beach clean-up. How do you choose what to include?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence curation", statement: "Choose representative quality evidence." },
            ],
            steps: [
              { reasoning: "Select 3-5 photos showing action, teamwork or impact.", marks: 1, markCode: "M" },
              { reasoning: "Add a reflection explaining what you did and learned.", marks: 1, markCode: "M" },
              { reasoning: "Quality over quantity — strong items beat exhaustive lists.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select a few meaningful photos and add reflection — quality over quantity.",
            commonErrors: ["Including all 30 photos without curation."],
          },
        },
        {
          id: "cas-u2-l22c2q17",
          difficulty: "core",
          totalMarks: 7,
          stem: "Develop a portfolio strategy for CAS engagement.",
          parts: [
            { label: "a", prompt: "Define portfolio evidence.", marks: 2 },
            { label: "b", prompt: "Describe two organisation methods.", marks: 2 },
            { label: "c", prompt: "Explain how to link evidence to reflection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Portfolio", statement: "Collection of evidence and reflections demonstrating engagement." },
            ],
            steps: [
              { part: "a", reasoning: "Evidence is proof of participation and learning.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It includes records, photos, certificates and reflections.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Organise by strand or by date.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Use a dedicated folder or digital space.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Attach a reflection to each artifact.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain what you did and what you learned.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This shows growth, not just participation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Proof of engagement. (b) By strand or date in dedicated space. (c) Attach reflections to artifacts.",
            commonErrors: ["Submitting artifacts without explanatory reflection."],
          },
        },
      ],
    },
  ],
};
