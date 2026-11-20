import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "cile-u7-lesson-7-3",
  code: "7-3",
  title: "Transactional writing: drafting and proofreading",
  goal: "I CAN draft, revise and proofread transactional texts for clarity, accuracy and appropriateness.",
  standards: ["0861 Writing: drafting and editing"],
  vocabulary: [
    { term: "Draft", definition: "A first version of a text, before revision." },
    { term: "Revision", definition: "Improving content, structure and clarity — the 'big picture' edits." },
    { term: "Proofreading", definition: "Checking for errors — spelling, punctuation, grammar — the 'detail' pass." },
    { term: "Tone check", definition: "Ensuring the register matches the audience and purpose." },
    { term: "Redundancy", definition: "Unnecessary repetition or wordiness that weakens clarity." },
    { term: "Register slip", definition: "Accidentally using informal language in a formal text (or vice versa)." },
  ],
  concepts: [
    {
      id: "cile-u7-drafting-revising",
      title: "Drafting and revising",
      skill: "Write a first draft, then revise for content, structure, clarity and audience appropriateness.",
      lesson: {
        sections: [
          {
            heading: "The writing process",
            body: "1. **Plan**: purpose, audience, key points.\n2. **Draft**: get it down — don't worry about perfection.\n3. **Revise**: improve content, structure, clarity, tone.\n4. **Proofread**: check spelling, punctuation, grammar.\n5. **Final check**: read aloud — does it sound right?",
          },
          {
            heading: "Revision checklist",
            body: "- Does it achieve the purpose?\n- Is the audience addressed appropriately?\n- Is the structure logical?\n- Is every sentence clear?\n- Is the tone consistent?\n- Are there any redundant words?",
          },
          {
            heading: "Common revision fixes",
            body: "- Cut filler: 'I just wanted to say that...' → delete.\n- Replace weak verbs: 'is' → 'demonstrates', 'provides'.\n- Combine choppy sentences: 'It is hot. It is sunny.' → 'It is hot and sunny.'\n- Check register: no slang in formal texts.",
          },
        ],
        keyFormulas: [
          { name: "Writing process", statement: "Plan → draft → revise (content/structure/clarity) → proofread (errors) → final check." },
        ],
        workedExample: {
          problem: "Draft: 'I am writing to you because I want to tell you that the trip is on Friday.' Revise.",
          solution: "'I am writing to confirm that the trip is on Friday.' — removes filler ('because I want to tell you that') and strengthens the verb ('confirm').",
        },
      },
      questions: [
        {
          id: "cile-u7-draft-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between revision and proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the same" },
              { id: "b", text: "Revision improves content and structure; proofreading checks for errors" },
              { id: "c", text: "Proofreading comes first" },
              { id: "d", text: "Revision is only for spelling" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revision vs proofreading", statement: "Revision = big-picture improvements; proofreading = error-checking." },
            ],
            steps: [
              { reasoning: "Revision addresses content/structure/clarity; proofreading addresses mechanics.", working: "\\text{content vs mechanics}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Revision improves content and structure; proofreading checks for errors",
            commonErrors: ["Choosing (a) — they are distinct stages."],
          },
        },
        {
          id: "cile-u7-draft-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is it important not to worry about perfection in the first draft?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Drafting", statement: "Perfectionism blocks writing — drafts exist to be improved." },
            ],
            steps: [
              { reasoning: "Trying to perfect while drafting prevents ideas from flowing.", working: "\\text{flow}", marks: 1, markCode: "AO2" },
              { reasoning: "The draft is a starting point — revision comes later.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Perfectionism during drafting blocks the flow of ideas — the draft is meant to be rough so that revision can improve it systematically.",
            commonErrors: ["Saying 'it is lazy' — drafting first is efficient, not lazy."],
          },
        },
        {
          id: "cile-u7-draft-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's draft reads: 'I am writing to you because I want to tell you that the computer in the library is broken and it has been broken for a really long time and nobody has fixed it yet.' Revise for conciseness and clarity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Conciseness", statement: "Remove filler and redundancy; state the point directly." },
            ],
            steps: [
              { reasoning: "Problem: 'because I want to tell you that' is filler.", working: "\\text{filler}", marks: 1, markCode: "AO2" },
              { reasoning: "Problem: 'really long time' is vague — specify.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Fix: 'I am writing to report that the library computer has been out of service for three weeks.'", working: "\\text{concise}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: clear, specific, professional.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'I am writing to report that the library computer has been out of service for three weeks. I would appreciate assistance in resolving this issue.' — filler removed, time specified, request clear.",
            commonErrors: ["Keeping 'really' or 'a long time' — vague intensifiers weaken precision."],
          },
        },
        {
          id: "cile-u7-draft-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You have written a draft of a transactional text (letter, email or report).",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in the draft.", marks: 2 },
            { label: "b", prompt: "Rewrite one weak sentence to improve it.", marks: 3 },
            { label: "c", prompt: "Explain what revision technique you used.", marks: 2 },
            { label: "d", prompt: "List two things you would check in proofreading.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revision and proofreading", statement: "Identify weaknesses → fix them → verify mechanics." },
            ],
            steps: [
              { part: "a", reasoning: "Two valid weaknesses identified (clarity, tone, structure, redundancy).", working: "\\text{weaknesses}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Weaknesses accurately described.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Rewrite improves clarity/conciseness/tone.", working: "\\text{rewrite}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Rewrite is noticeably better.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Rewrite is correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Revision technique identified accurately.", working: "\\text{technique}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Explanation is clear.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Two proofreading checks listed (spelling, punctuation, grammar, register).", working: "\\text{checks}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Checks are relevant.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) two weaknesses (b) improved rewrite (c) technique explained (d) two proofreading checks",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two valid weaknesses.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Noticeably improved rewrite.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Technique explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Two relevant checks.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (d) listing revision tasks (like 'improve clarity') rather than proofreading checks (spelling, punctuation)."],
          },
        },
      ],
    },
    {
      id: "cile-u7-common-errors",
      title: "Common transactional errors",
      skill: "Identify and correct common errors in transactional writing — register slips, vague requests, missing conventions.",
      lesson: {
        sections: [
          {
            heading: "Frequent mistakes",
            body: "- **Register slip**: 'Hey' in a formal letter; 'Yours faithfully' to a friend.\n- **Vague request**: 'do something about it' — must be specific.\n- **Missing conventions**: no subject line, wrong sign-off, no date.\n- **Excessive apology**: 'Sorry sorry sorry' — one apology suffices.\n- **Buried purpose**: request appears at the end — move it up.",
          },
          {
            heading: "Register slip examples",
            body: "- Formal → informal error: 'I am writing to inform you that your application has been received' → 'Just letting you know your app came through!'\n- Informal → formal error: 'Yo, what's up?' → 'Dear Ms Khan, I hope this email finds you well.'",
          },
          {
            heading: "Final check routine",
            body: "1. Read aloud — does it sound right?\n2. Check register — right tone for audience?\n3. Check conventions — all required elements present?\n4. Check clarity — would a stranger understand?",
          },
        ],
        keyFormulas: [
          { name: "Error checklist", statement: "Register + conventions + clarity + purpose = error-free transactional text." },
        ],
        workedExample: {
          problem: "Email with errors: 'Hey Ms Khan, sorry to bother you but could you maybe extend the deadline? Thanks!' — identify issues.",
          solution: "Issues: 'Hey' (informal), excessive apology, hedging ('maybe'), vague deadline request. Fix: 'Dear Ms Khan, I am writing to request an extension on the assignment deadline. I would appreciate your consideration. Kind regards, [Name]'",
        },
      },
      questions: [
        {
          id: "cile-u7-errors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'register slip'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spelling mistake" },
              { id: "b", text: "Using the wrong level of formality for the audience" },
              { id: "c", text: "A punctuation error" },
              { id: "d", text: "A factual error" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Register slip", statement: "Informal language in formal text or vice versa." },
            ],
            steps: [
              { reasoning: "Register slip = formality mismatch.", working: "\\text{formality}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Using the wrong level of formality for the audience",
            commonErrors: ["Choosing (a) — register is about tone, not spelling."],
          },
        },
        {
          id: "cile-u7-errors-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'do something about it' an ineffective request?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specificity", statement: "Vague requests cannot be acted on — the reader does not know what is wanted." },
            ],
            steps: [
              { reasoning: "Vague requests give no actionable information.", working: "\\text{not actionable}", marks: 1, markCode: "AO2" },
              { reasoning: "Specific requests tell the reader exactly what to do.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Do something about it' is vague — the reader does not know what action is expected. Effective requests specify what, when and how.",
            commonErrors: ["Saying 'it is rude' — the problem is clarity, not politeness."],
          },
        },
        {
          id: "cile-u7-errors-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Identify three errors in this email and suggest corrections: 'hey, the thing is broken again. can u fix it? thx'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error identification", statement: "Register, clarity and conventions must all be correct." },
            ],
            steps: [
              { reasoning: "Error 1: 'hey', 'u', 'thx' — informal abbreviations for formal context.", working: "\\text{abbreviations}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 2: 'the thing' is vague — specify what is broken.", working: "\\text{vague}", marks: 1, markCode: "AO2" },
              { reasoning: "Error 3: 'fix it' is an unclear request — specify what action.", working: "\\text{unclear}", marks: 1, markCode: "AO2" },
              { reasoning: "Corrections provided.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Errors: informal abbreviations ('hey', 'u', 'thx'), vague reference ('the thing'), unclear request ('fix it'). Correct: 'Dear Ms Khan, I am writing to report that the library computer is not functioning. I would appreciate assistance in resolving this. Kind regards, [Name]'",
            commonErrors: ["Missing one error — check register, clarity AND conventions."],
          },
        },
        {
          id: "cile-u7-errors-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are proofreading a transactional text for errors.",
          parts: [
            { label: "a", prompt: "Identify a register error.", marks: 2 },
            { label: "b", prompt: "Identify a clarity error.", marks: 2 },
            { label: "c", prompt: "Identify a convention error (missing element).", marks: 2 },
            { label: "d", prompt: "Suggest corrections for all three.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading", statement: "Register, clarity and conventions are the three main error categories." },
            ],
            steps: [
              { part: "a", reasoning: "Register error identified (informal in formal or vice versa).", working: "\\text{register}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Specific example given.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Clarity error identified (vague, ambiguous).", working: "\\text{clarity}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Specific example given.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Convention error identified (missing subject, sign-off, date).", working: "\\text{convention}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Specific example given.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Corrections provided for all three.", working: "\\text{corrections}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Corrections are accurate.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Corrections maintain meaning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) register error + example (b) clarity error + example (c) convention error + example (d) accurate corrections",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Register error identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Clarity error identified.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Convention error identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "All corrections accurate.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Identifying the same error type three times — need register, clarity AND convention."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u7-drafting-errors-notes",
      title: "Drafting and proofreading — revision notes",
      summary: "Writing process, revision techniques, common errors and final checks.",
      sections: [
        {
          heading: "Writing process",
          body: "Plan → draft (don't perfect) → revise (content/structure/clarity) → proofread (errors) → final check (read aloud).",
        },
        {
          heading: "Common errors",
          body: "Register slips, vague requests, missing conventions, excessive apology, buried purpose. Check all three: register, clarity, conventions.",
        },
        {
          heading: "Final check",
          body: "Read aloud — does it sound right? Check register, conventions, clarity. Would a stranger understand?",
        },
      ],
    },
  ],
};
