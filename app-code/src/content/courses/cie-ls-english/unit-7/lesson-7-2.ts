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
              { id: "a", text: "Aggressive and threatening" },
              { id: "b", text: "Polite, firm and factual" },
              { id: "c", text: "Sarcastic" },
              { id: "d", text: "Overly apologetic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone", statement: "Complaints need firm but respectful tone — aggression undermines credibility." },
            ],
            steps: [
              { reasoning: "Firm + factual achieves the goal without alienating.", working: "\\text{firm/factual}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Polite, firm and factual",
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
              { id: "b", text: "What, when, where and how to respond" },
              { id: "c", text: "A long description of the host" },
              { id: "d", text: "The cost only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitation", statement: "What/when/where/RSVP are essential." },
            ],
            steps: [
              { reasoning: "Invitations need complete event details.", working: "\\text{what/when/where}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** What, when, where and how to respond",
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
