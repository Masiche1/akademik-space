import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "cile-u7-lesson-7-2",
  code: "7-2",
  title: "Transactional writing: purpose, audience and adaptation",
  goal: "I CAN adapt transactional writing to different audiences and purposes while maintaining clarity and appropriateness.",
  standards: ["0861 Writing: audience adaptation"],
  vocabulary: [
    { term: "Adaptation", definition: "Changing language, tone and structure to suit a different audience or purpose." },
    { term: "Purpose", definition: "What the writing aims to achieve — inform, request, complain, thank." },
    { term: "Tone", definition: "The attitude conveyed — polite, urgent, grateful, firm." },
    { term: "Clarity", definition: "Writing that is easy to understand — precise, organised, unambiguous." },
    { term: "Conciseness", definition: "Saying what is needed without unnecessary words." },
    { term: "Audience profile", definition: "What the reader knows, cares about and expects." },
  ],
  concepts: [
    {
      id: "cile-u7-purpose-audience",
      title: "Purpose and audience in transactional writing",
      skill: "Adapt transactional writing to different audiences by adjusting register, tone and content.",
      lesson: {
        sections: [
          {
            heading: "Purpose shapes content",
            body: "- **Request**: what you want, why, by when.\n- **Complaint**: what happened, why it matters, what you want done.\n- **Information**: facts, organised clearly.\n- **Thank you**: specific appreciation, warm but appropriate.",
          },
          {
            heading: "Audience shapes language",
            body: "- **Authority figure**: formal, respectful, evidence-based.\n- **Peer/colleague**: semi-formal, direct, collaborative.\n- **Friend/family**: informal, warm, personal.\n\nSame message, different packaging.",
          },
          {
            heading: "Clarity and conciseness",
            body: "- **Clarity**: precise words, logical order, no ambiguity.\n- **Conciseness**: every word earns its place — cut filler, redundancy, unnecessary apology.\n- **Readability**: short sentences, active voice, one idea per paragraph.",
          },
        ],
        keyFormulas: [
          { name: "Adaptation formula", statement: "Purpose determines content; audience determines register and tone; clarity and conciseness serve both." },
        ],
        workedExample: {
          problem: "Same complaint (broken window) to a friend vs head teacher — what changes?",
          solution: "Friend: 'Dude, I broke a window at school — help me figure out what to do!' — informal, seeks advice. Head teacher: 'I am writing to report damage to the library window, which occurred on Tuesday. I apologise for the damage and would appreciate guidance on repair.' — formal, accountable, seeks instruction.",
        },
      },
      questions: [
        {
          id: "cile-u7-adapt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tone is most appropriate for a complaint letter to a company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Overly apologetic" },
              { id: "b", text: "Aggressive and threatening" },
              { id: "c", text: "Sarcastic" },
              { id: "d", text: "Polite, firm and factual" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone", statement: "Complaints need firm but respectful tone — aggression undermines credibility." },
            ],
            steps: [
              { reasoning: "Firm + factual achieves the goal without alienating.", working: "\\text{firm/factual}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Polite, firm and factual",
            commonErrors: ["Choosing (a) — aggression weakens the complaint's effectiveness."],
          },
        },
        {
          id: "cile-u7-adapt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is conciseness important in transactional writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conciseness", statement: "Every unnecessary word wastes the reader's time and dilutes the message." },
            ],
            steps: [
              { reasoning: "Busy readers skim — conciseness respects their time.", working: "\\text{respect time}", marks: 1, markCode: "AO2" },
              { reasoning: "Filler words dilute the core message and weaken impact.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Conciseness respects the reader's time and keeps the message focused — unnecessary words dilute impact and risk losing the reader's attention.",
            commonErrors: ["Saying 'it looks professional' — the primary function is clarity and respect for the reader."],
          },
        },
        {
          id: "cile-u7-adapt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite this rambling email opening concisely: 'Hi, I hope you are well. I was wondering if maybe it would be possible for you to perhaps consider extending the deadline for the assignment, because I have been having a really difficult time with it and it would really help me a lot if you could.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conciseness", statement: "Remove hedging ('maybe', 'perhaps', 'really') and state the request directly." },
            ],
            steps: [
              { reasoning: "Problem: excessive hedging — 'maybe', 'perhaps', 'really' weaken the request.", working: "\\text{hedging}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: state purpose directly — 'I am writing to request an extension for the assignment.'", working: "\\text{direct}", marks: 1, markCode: "AO2" },
              { reasoning: "Add brief reason — 'I have found the topic challenging.'", working: "\\text{reason}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: clear, confident, respectful.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Dear Ms Khan, I am writing to request an extension for the Science assignment. I have found the topic challenging and would appreciate additional time. Thank you for your consideration.' — direct, concise, respectful.",
            commonErrors: ["Keeping hedging words ('perhaps', 'maybe') — they undermine confidence."],
          },
        },
        {
          id: "cile-u7-adapt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You need to communicate the same information (e.g. a change in school schedule) to three audiences: students, parents, and staff.",
          parts: [
            { label: "a", prompt: "Describe how the message would differ for students.", marks: 2 },
            { label: "b", prompt: "Describe how it would differ for parents.", marks: 2 },
            { label: "c", prompt: "Describe how it would differ for staff.", marks: 2 },
            { label: "d", prompt: "Explain why the same information needs different versions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Audience adaptation", statement: "Same content, different register, tone and emphasis per audience." },
            ],
            steps: [
              { part: "a", reasoning: "Students: informal-ish, practical details, what it means for them.", working: "\\text{practical}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Appropriate register.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Parents: formal, reassuring, logistics (times, transport).", working: "\\text{reassuring/logistics}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Appropriate register.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Staff: professional, detailed, implications for work.", working: "\\text{professional}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Appropriate register.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Different audiences need different details and tones.", working: "\\text{different needs}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Language must match expectations and concerns.", working: "\\text{match}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Conclusion: audience determines adaptation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) students: practical, informal-ish, what it means for them (b) parents: formal, reassuring, logistics (c) staff: professional, detailed, work implications (d) audiences have different concerns and expectations — adaptation is essential",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate student version.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong register.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate parent version.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong register.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Appropriate staff version.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong register.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Adaptation convincingly explained.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'because they are different' without explaining what specifically changes and why."],
          },
        },
        {
          id: "cile-u7-adapt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tone is most effective for a complaint to a company?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dismissive" },
              { id: "b", text: "Overly emotional" },
              { id: "c", text: "Hostile and insulting" },
              { id: "d", text: "Calm, firm and factual" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Complaint tone", statement: "Complaints need firmness and evidence, not aggression." }],
            steps: [{ reasoning: "A calm factual tone makes the complaint credible and easier to resolve.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Calm, firm and factual",
            commonErrors: ["Choosing aggression — it weakens the complaint."],
          },
        },
        {
          id: "cile-u7-adapt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does the same information need different wording for different audiences?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience", statement: "Readers have different knowledge, expectations and concerns." }],
            steps: [{ reasoning: "Audience determines register, detail and emphasis so the message is understood and accepted.", marks: 1, markCode: "AO2" }],
            finalAnswer: "Different audiences know different things and expect different tones, so wording must be adapted for clarity and appropriateness.",
            commonErrors: ["Saying only 'because people are different'."],
          },
        },
        {
          id: "cile-u7-adapt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should a complaint letter include to be effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long personal history" },
              { id: "b", text: "No clear request" },
              { id: "c", text: "Only a strong emotion" },
              { id: "d", text: "What happened, why it matters and what you want done" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Complaint purpose", statement: "A complaint must state the problem, impact and requested action." }],
            steps: [{ reasoning: "The reader needs facts and a clear resolution request.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** What happened, why it matters and what you want done",
            commonErrors: ["Focusing on emotion rather than the required action."],
          },
        },
        {
          id: "cile-u7-adapt-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite concisely: 'I was just wondering if it might be possible for you to maybe send me the notes when you get a chance.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Conciseness", statement: "Remove hedging and state the request directly." }],
            steps: [
              { reasoning: "Delete filler such as 'just wondering' and 'when you get a chance'.", marks: 1, markCode: "AO2" },
              { reasoning: "State the request: 'Please send me the notes.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Please send me the notes.' or 'Could you please send me the notes?'",
            commonErrors: ["Keeping 'maybe' or 'when you get a chance'."],
          },
        },
        {
          id: "cile-u7-adapt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which best describes an 'audience profile'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of paragraphs" },
              { id: "b", text: "The writer's favourite topic" },
              { id: "c", text: "What the reader knows, cares about and expects" },
              { id: "d", text: "The length of the text" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Audience profile", statement: "Understanding reader knowledge, concerns and expectations guides adaptation." }],
            steps: [{ reasoning: "Audience profile helps choose register, content and emphasis.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** What the reader knows, cares about and expects",
            commonErrors: ["Confusing audience with topic."],
          },
        },
        {
          id: "cile-u7-adapt-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how a school closure announcement would differ for students and parents.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience adaptation", statement: "Same event, different needs: students need practical details; parents need reassurance and logistics." }],
            steps: [
              { reasoning: "Students: direct, practical language about times and what to do.", marks: 1, markCode: "AO2" },
              { reasoning: "Students: less explanation, more immediate instructions.", marks: 1, markCode: "AO3" },
              { reasoning: "Parents: formal, reassuring tone with transport, safety and contact details.", marks: 1, markCode: "AO2" },
              { reasoning: "Parents: fuller context and reassurance about arrangements.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Students need a direct practical message with times and actions; parents need a formal reassuring message with logistics, safety and contact information.",
            commonErrors: ["Changing only the greeting while keeping the same content and tone."],
          },
        },
        {
          id: "cile-u7-adapt-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is clearest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something went wrong with the equipment." },
              { id: "b", text: "The projector stopped working during the lesson." },
              { id: "c", text: "It was really quite difficult." },
              { id: "d", text: "The thing that happened was kind of bad." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Clarity", statement: "Precise words and complete information make meaning unambiguous." }],
            steps: [{ reasoning: "(c) names exactly what happened and when.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The projector stopped working during the lesson.",
            commonErrors: ["Choosing vague or incomplete wording."],
          },
        },
        {
          id: "cile-u7-adapt-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Identify the hedging in 'I was just wondering if maybe you could possibly help' and revise it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hedging", statement: "Excessive qualifiers weaken confidence and clarity." }],
            steps: [
              { reasoning: "Identify hedges: 'just', 'maybe', 'possibly'.", marks: 1, markCode: "AO2" },
              { reasoning: "Explain that they make the request seem uncertain.", marks: 1, markCode: "AO2" },
              { reasoning: "Revise to 'Could you help me?' or 'Please help me.'", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Hedges: 'just', 'maybe', 'possibly'. Revision: 'Could you help me?' — direct and confident.",
            commonErrors: ["Removing only one hedge while leaving the request weak."],
          },
        },
        {
          id: "cile-u7-adapt-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What changes most when adapting the same message to a different audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing changes" },
              { id: "b", text: "Register, tone and emphasis change while facts remain accurate" },
              { id: "c", text: "Only spelling changes" },
              { id: "d", text: "The core facts always change completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Adaptation", statement: "Audience changes presentation, not the underlying facts." }],
            steps: [{ reasoning: "Facts stay accurate; language, tone and emphasis are adjusted.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Register, tone and emphasis change while facts remain accurate",
            commonErrors: ["Thinking adaptation means changing the facts."],
          },
        },
        {
          id: "cile-u7-adapt-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write the opening of the same complaint for two audiences: a shop manager and a friend.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dual audience", statement: "Formal complaint needs facts and request; friend needs personal context." }],
            steps: [
              { reasoning: "Shop manager: formal greeting and purpose-first complaint.", marks: 1, markCode: "AO2" },
              { reasoning: "Shop manager: factual description and clear request.", marks: 1, markCode: "AO2" },
              { reasoning: "Friend: casual tone with personal detail and emotional context.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Manager: 'Dear Sir/Madam, I am writing to report a faulty product...' Friend: 'Guess what — the headphones I bought stopped working...'",
            commonErrors: ["Using identical wording for both audiences."],
          },
        },
        {
          id: "cile-u7-adapt-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is usually filler that can be removed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "request" },
              { id: "b", text: "deadline" },
              { id: "c", text: "basically" },
              { id: "d", text: "because" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Filler", statement: "Words like 'basically' often add no meaning." }],
            steps: [{ reasoning: "'Basically' usually restates or weakens the message and can be cut.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** basically",
            commonErrors: ["Removing a word that carries necessary meaning."],
          },
        },
        {
          id: "cile-u7-adapt-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Plan how to communicate a timetable change to students, parents and staff.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multi-audience plan", statement: "Identify audience needs, then choose register, detail and channel." }],
            steps: [
              { reasoning: "Students: concise practical details and classroom implications.", marks: 1, markCode: "AO2" },
              { reasoning: "Parents: formal reassurance about times, transport and safety.", marks: 1, markCode: "AO2" },
              { reasoning: "Staff: professional instructions about duties and coverage.", marks: 1, markCode: "AO2" },
              { reasoning: "Choose appropriate channels and sign-offs for each group.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Adapt content and tone for each audience: students get practical updates, parents get formal logistics, staff get professional instructions; use suitable channels for each.",
            commonErrors: ["Sending one identical message to all groups."],
          },
        },
      ],
    },
    {
      id: "cile-u7-transactional-skills",
      title: "Transaction-specific conventions",
      skill: "Apply conventions for invitations, thank-you notes, applications and other transactional texts.",
      lesson: {
        sections: [
          {
            heading: "Invitation conventions",
            body: "- **Formal**: 'You are invited to...' with date, time, venue, RSVP.\n- **Informal**: relaxed, personal — 'Come to my birthday!'\n- Always include: what, when, where, how to respond.",
          },
          {
            heading: "Thank-you notes",
            body: "- **Specific**: thank for the specific thing, not generic 'thanks'.\n- **Warm**: genuine appreciation without excessive effusiveness.\n- **Brief**: a few sentences — not an essay.",
          },
          {
            heading: "Applications",
            body: "- **Cover letter**: purpose, qualifications, why you fit, call to action.\n- **CV**: clear sections — education, experience, skills.\n- **Form**: answer questions directly and completely.",
          },
        ],
        keyFormulas: [
          { name: "Transaction conventions", statement: "Each transactional text type has specific conventions — invitations need details, applications need evidence, thank-yous need specificity." },
        ],
        workedExample: {
          problem: "Weak thank-you: 'Thanks for the gift.' Strong version?",
          solution: "'Thank you for the astronomy book — I have already read two chapters and the star charts are wonderful. It was very thoughtful.' — specific, warm, brief.",
        },
      },
      questions: [
        {
          id: "cile-u7-trans-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What must every invitation include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the date" },
              { id: "b", text: "A long description of the host" },
              { id: "c", text: "What, when, where and how to respond" },
              { id: "d", text: "The cost only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitation", statement: "What/when/where/RSVP are essential." },
            ],
            steps: [
              { reasoning: "Invitations need complete event details.", working: "\\text{what/when/where}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** What, when, where and how to respond",
            commonErrors: ["Choosing (a) — incomplete information."],
          },
        },
        {
          id: "cile-u7-trans-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a thank-you note be specific rather than generic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specificity", statement: "Specific thanks show genuine appreciation and attention." },
            ],
            steps: [
              { reasoning: "Generic 'thanks' could apply to anyone — it shows little thought.", working: "\\text{generic}", marks: 1, markCode: "AO2" },
              { reasoning: "Specific thanks proves you noticed and valued the particular gift/action.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Specific thanks demonstrate genuine appreciation and attention — a generic 'thanks' could apply to anyone and shows the giver their gift wasn't really noticed.",
            commonErrors: ["Saying 'it is more polite' — the function is demonstrating genuine appreciation."],
          },
        },
        {
          id: "cile-u7-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes a cover letter that lists their entire life story. Rewrite the approach for effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cover letter focus", statement: "Cover letters should highlight relevant qualifications concisely, not list everything." },
            ],
            steps: [
              { reasoning: "Problem: life story is unfocused — employers need relevance, not biography.", working: "\\text{unfocused}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: select 2-3 most relevant qualifications/experiences.", working: "\\text{select}", marks: 1, markCode: "AO2" },
              { reasoning: "Link each to the job requirements.", working: "\\text{link}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: concise, targeted, persuasive.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Select only the qualifications and experiences most relevant to the job, link each to the role's requirements, and keep it to one page — employers need evidence of fit, not a biography.",
            commonErrors: ["Just shortening without selecting relevant content."],
          },
        },
        {
          id: "cile-u7-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are writing a thank-you note to someone who helped you significantly.",
          parts: [
            { label: "a", prompt: "Identify what you are thanking them for specifically.", marks: 2 },
            { label: "b", prompt: "Write an opening expressing genuine appreciation.", marks: 2 },
            { label: "c", prompt: "Explain the impact their help had on you.", marks: 3 },
            { label: "d", prompt: "Close with warmth and a forward-looking statement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Thank-you conventions", statement: "Specific, warm, impact-focused, appropriately brief." },
            ],
            steps: [
              { part: "a", reasoning: "Specific action/gift identified.", working: "\\text{specific}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Accurate and clear.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Genuine, warm appreciation.", working: "\\text{warm}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Not excessive or generic.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Impact explained specifically.", working: "\\text{impact}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Connection to personal growth/achievement.", working: "\\text{growth}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Sincere and meaningful.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Warm closing.", working: "\\text{warm}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Forward-looking or reciprocal gesture.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) specific reason (b) genuine opening (c) impact explained (d) warm forward-looking close",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Specific reason identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Warm opening.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Cold.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Impact convincingly explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Warm close.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Abrupt.", part: "d" },
            ],
            commonErrors: ["In (c) generic impact ('you helped me a lot') — must be specific."],
          },
        },
        {
          id: "cile-u7-trans-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the primary purpose of a CV or resume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To list every job you have ever had" },
              { id: "b", text: "To present your education, experience and skills clearly" },
              { id: "c", text: "To tell your life story in detail" },
              { id: "d", text: "To entertain the reader" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "CV conventions", statement: "A CV presents relevant education, experience and skills in clear sections." },
            ],
            steps: [
              { reasoning: "Employers scan CVs for relevant evidence quickly.", working: "\\text{relevant evidence}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** To present your education, experience and skills clearly",
            commonErrors: ["Choosing (a) — a CV is not a biography."],
          },
        },
        {
          id: "cile-u7-trans-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should a form application be answered directly and completely?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Form conventions", statement: "Forms are screened quickly; incomplete or vague answers may be rejected." },
            ],
            steps: [
              { reasoning: "Forms are often used for shortlisting — incomplete answers are easily spotted.", working: "\\text{shortlist}", marks: 1, markCode: "AO2" },
              { reasoning: "Direct complete answers provide the evidence the screener needs.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Forms are often screened quickly for shortlisting, so direct, complete answers give the screener the evidence they need and avoid automatic rejection.",
            commonErrors: ["Saying 'to show you can write well' — the function is providing required information clearly."],
          },
        },
        {
          id: "cile-u7-trans-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best ending for a formal invitation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'RSVP by 10 May to confirm attendance'" },
              { id: "b", text: "'Hope you can make it lol'" },
              { id: "c", text: "'It will be fun trust me'" },
              { id: "d", text: "'Tell me if you want to come or not'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "RSVP", statement: "Formal invitations end with a clear request for response by a deadline." },
            ],
            steps: [
              { reasoning: "RSVP gives the host the information and deadline needed to plan.", working: "\\text{RSVP}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 'RSVP by 10 May to confirm attendance'",
            commonErrors: ["Choosing informal phrasing unsuitable for a formal invitation."],
          },
        },
        {
          id: "cile-u7-trans-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite this weak thank-you: 'Thanks for the thing you gave me.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specificity", statement: "Name the specific gift or action and its impact." },
            ],
            steps: [
              { reasoning: "Problem: 'the thing' is vague — the gift is not identified.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: name the gift and add a brief impact — 'Thank you for the scarf; it kept me warm all winter.'", working: "\\text{specific+impact}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Thank you for the scarf you gave me — it has kept me warm all winter and I really appreciate the thought.'",
            commonErrors: ["Adding length but keeping vague wording."],
          },
        },
        {
          id: "cile-u7-trans-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a cover letter contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only your hobbies" },
              { id: "b", text: "Complaints about previous jobs" },
              { id: "c", text: "Your full life story" },
              { id: "d", text: "Purpose, relevant qualifications, why you fit, and a call to action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Cover letter", statement: "Purpose, evidence of fit, and call to action are essential." },
            ],
            steps: [
              { reasoning: "Employers need relevance, evidence and a reason to respond.", working: "\\text{relevance+evidence}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Purpose, relevant qualifications, why you fit, and a call to action",
            commonErrors: ["Choosing (a) — cover letters are focused, not autobiographical."],
          },
        },
        {
          id: "cile-u7-trans-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare a formal and informal invitation for the same event (a birthday party).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Register contrast", statement: "Formal invitations use 'You are invited' and structured details; informal use relaxed personal language." },
            ],
            steps: [
              { reasoning: "Formal: 'You are invited to a birthday celebration...' with date, time, venue, RSVP.", working: "\\text{formal}", marks: 1, markCode: "AO2" },
              { reasoning: "Informal: 'Come to my birthday!' with casual details and warm tone.", working: "\\text{informal}", marks: 1, markCode: "AO2" },
              { reasoning: "Both include what/when/where — the difference is register and formality.", working: "\\text{same details}", marks: 1, markCode: "AO2" },
              { reasoning: "Formal RSVP vs informal 'let me know' — response request adapts too.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal: structured, 'You are invited', full details, formal RSVP. Informal: relaxed, personal, same essential details but casual phrasing and 'let me know if you can make it'.",
            commonErrors: ["Changing only the greeting while keeping formal phrasing throughout."],
          },
        },
        {
          id: "cile-u7-trans-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a weak opening for a thank-you note?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Thank you for the concert tickets — I loved the performance.'" },
              { id: "b", text: "'I really appreciated your help moving house on Saturday.'" },
              { id: "c", text: "'Thanks for the thing.'" },
              { id: "d", text: "'Thank you for lending me your notes before the exam.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specificity", statement: "Thank-you notes must name the specific gift or action." },
            ],
            steps: [
              { reasoning: "'The thing' identifies nothing — the thanks cannot be genuine or specific.", working: "\\text{unspecific}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** 'Thanks for the thing.'",
            commonErrors: ["Choosing a specific opening — the task asks for the weak one."],
          },
        },
        {
          id: "cile-u7-trans-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do applications require evidence of qualifications linked to the role?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Evidence linking", statement: "Employers select candidates who can prove fit for the specific role." },
            ],
            steps: [
              { reasoning: "Evidence proves you have the required skills or experience.", working: "\\text{proof}", marks: 1, markCode: "AO2" },
              { reasoning: "Linking it to the role shows you understand what the job needs.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Employers need proof of relevant ability; linking qualifications to role requirements shows you understand the job and can do it.",
            commonErrors: ["Saying 'to make it longer' — the function is demonstrating fit."],
          },
        },
        {
          id: "cile-u7-trans-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write the key sections of a cover letter for a part-time job at a bookshop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cover letter structure", statement: "Purpose, relevant evidence, motivation, call to action — concise and targeted." },
            ],
            steps: [
              { reasoning: "Opening states the position applied for and purpose.", working: "\\text{purpose}", marks: 1, markCode: "AO2" },
              { reasoning: "Relevant experience/skills selected and linked to bookshop needs (e.g. reading, customer service).", working: "\\text{link}", marks: 1, markCode: "AO2" },
              { reasoning: "Motivation: genuine interest in books/retail.", working: "\\text{motivation}", marks: 1, markCode: "AO2" },
              { reasoning: "Call to action: request for interview or further contact.", working: "\\text{CTA}", marks: 1, markCode: "AO2" },
              { reasoning: "Tone formal and concise — one page.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Dear..., I am writing to apply for the part-time position at your bookshop. I have [relevant experience] which developed [skill], making me well suited to serving customers and maintaining the shop. I am passionate about books because... I would welcome the opportunity to discuss how I can contribute. Yours faithfully...",
            commonErrors: ["Including irrelevant life history instead of job-linked evidence."],
          },
        },
        {
          id: "cile-u7-trans-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'RSVP' stand for and why is it used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The host's address" },
              { id: "b", text: "Reply if you can attend — it lets the host plan" },
              { id: "c", text: "A type of gift" },
              { id: "d", text: "A formal apology" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "RSVP", statement: "Répondez s'il vous plaît — request for response so host can plan." },
            ],
            steps: [
              { reasoning: "Guest numbers and catering depend on confirmed attendance.", working: "\\text{planning}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Reply if you can attend — it lets the host plan",
            commonErrors: ["Thinking RSVP is decorative rather than functional."],
          },
        },
        {
          id: "cile-u7-trans-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Identify two weaknesses in this invitation: 'Party at mine sometime next month. Bring stuff.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Invitation completeness", statement: "Invitations need specific date, time, venue and clear instructions." },
            ],
            steps: [
              { reasoning: "Weakness 1: 'sometime next month' — no exact date or time.", working: "\\text{no date}", marks: 1, markCode: "AO2" },
              { reasoning: "Weakness 2: 'at mine' and 'bring stuff' — vague venue and unclear expectations.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Revise with specific details and RSVP.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "No exact date/time and vague venue/instructions. Revision: 'You're invited to my birthday party on Saturday 14 June, 7pm, at 12 Park Road. Please bring a gift or card. RSVP by 1 June.'",
            commonErrors: ["Identifying only one weakness or rewriting without fixing it."],
          },
        },
        {
          id: "cile-u7-trans-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student must apply for a school exchange programme. Plan the application package.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application package", statement: "Cover letter, CV and form answers must all present relevant evidence consistently." },
            ],
            steps: [
              { reasoning: "Cover letter: purpose, relevant skills (languages, adaptability), motivation, call to action.", working: "\\text{cover}", marks: 1, markCode: "AO2" },
              { reasoning: "CV: clear sections — education, languages, relevant activities.", working: "\\text{CV}", marks: 1, markCode: "AO2" },
              { reasoning: "Form: answer each question directly and completely.", working: "\\text{form}", marks: 1, markCode: "AO2" },
              { reasoning: "Consistency: same facts and evidence across all documents.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Cover letter states purpose and links relevant skills (language, independence) to the programme; CV lists education and languages clearly; form answers are direct and complete; all documents present consistent evidence.",
            commonErrors: ["Treating each document as separate with inconsistent information."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u7-transactional-skills-notes",
      title: "Transactional writing skills — revision notes",
      summary: "Audience adaptation, clarity, and conventions for invitations, thank-yous and applications.",
      sections: [
        {
          heading: "Adaptation",
          body: "Purpose determines content; audience determines register and tone. Same message, different packaging for different readers.",
        },
        {
          heading: "Clarity and conciseness",
          body: "Precise words, logical order, no hedging, every word earns its place. Busy readers skim — get to the point.",
        },
        {
          heading: "Conventions",
          body: "Invitations: what/when/where/RSVP. Thank-yous: specific, warm, brief. Applications: relevant qualifications linked to job requirements.",
        },
      ],
    },
  ],
};
