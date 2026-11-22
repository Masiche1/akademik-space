import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mla4-u2-lesson-2-3",
  code: "2-3",
  title: "Intercultural Communication and Audience Awareness",
  goal: "I CAN adapt language for different audiences and cultural contexts while staying clear, polite and respectful.",
  standards: [
    "MYP Language Acquisition",
    "Intercultural understanding",
    "Criterion D: Writing",
    "Criterion C: Speaking",
  ],
  vocabulary: [
    { term: "Audience", definition: "The person or people who will read or hear your message." },
    { term: "Register", definition: "The level of formality in language, such as formal or informal." },
    { term: "Culture", definition: "The shared customs, values and ways of communicating of a group." },
    { term: "Politeness", definition: "Language that shows respect to the listener or reader." },
    { term: "Adaptation", definition: "Changing language to suit a different audience or context." },
  ],
  concepts: [
    {
      id: "mla4-u2-audience-awareness",
      title: "Audience awareness",
      skill: "Choose formal or informal language depending on who will receive the message.",
      lesson: {
        sections: [
          {
            heading: "Formal vs informal",
            body: "Use **formal** language with teachers, officials or people you do not know well: 'Dear Ms Lee', 'I would appreciate your assistance'. Use **informal** language with friends: 'Hi Sam', 'Can you send me...'. The relationship decides the register.",
          },
          {
            heading: "Clear purpose",
            body: "Whatever the audience, the message must have a clear purpose. State it early: 'I am writing to ask...', 'I want to invite you to...'. Avoid long introductions that hide the main point.",
          },
          {
            heading: "Respectful tone",
            body: "Be polite without being vague. 'Could you please...?' is better than 'Send me...'. Avoid slang, jokes or idioms with people who may not understand them. If unsure, choose simple, respectful language.",
          },
        ],
        keyFormulas: [
          { name: "Register choice", statement: "Teacher/official = formal; friend = informal" },
          { name: "Purpose phrases", statement: "I am writing to / I would like to / Could you please" },
        ],
        workedExample: {
          problem: "Rewrite 'Hey, send me the file!' for a teacher.",
          solution: "'Dear Mr Ali, could you please send me the file when you have time? Thank you. Yours sincerely, ...'",
        },
      },
      questions: [
        {
          id: "mla4-u2-audience-awareness-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which message is most formal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'File. Now.'" },
              { id: "b", text: "'Dear Ms Khan, I would be grateful if you could send the file.'" },
              { id: "c", text: "'Yo, need that file ASAP.'" },
              { id: "d", text: "'Hey! Send the file lol.'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Register", statement: "Formal messages use polite salutation and clear request." }],
            steps: [{ reasoning: "Criterion D: Writing — option b is formal and polite.", working: "formal", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** 'Dear Ms Khan, I would be grateful if you could send the file.'",
            commonErrors: ["Choosing casual but clear language."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message A (to friend): 'Hey! Are we still on for the trip? Let me know!'\n\nMessage B (to principal): 'Dear Mr Hassan, I am writing to confirm our class trip scheduled for next Friday.'",
          },
          stem: "Explain how the messages differ and why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Audience adaptation", statement: "Register changes with relationship and purpose." }],
            steps: [
              { reasoning: "Criterion D: Writing — A is informal: 'Hey', exclamation, casual question.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — B is formal: 'Dear Mr Hassan', clear purpose.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — difference is justified by audience.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "A is informal for a friend; B is formal for a principal because the audience differs.",
            commonErrors: ["Describing difference without audience reason."],
            examinerNote: "Must link register to audience.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Message Revision",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Original: 'Dude, the project is messed up. Fix your part or we're doomed lol.'\n\nAudience: teacher coordinating the project.",
          },
          stem: "Rewrite the message for the teacher and explain your changes.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Register transformation", statement: "Replace slang and blame with polite, precise language." }],
            steps: [
              { reasoning: "Criterion D: Writing — removes slang ('dude', 'lol') and exaggeration ('doomed').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces blame ('fix your part') with polite request.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — states issue and request clearly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explanation identifies register changes.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Formal version: 'Dear Ms ..., I am concerned about the project timeline. Could you please review your section when possible?'",
            commonErrors: ["Keeping casual tone or vague blame."],
            examinerNote: "Must show audience-appropriate language.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Adaptation Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write the same message to two audiences: (A) a close friend; (B) a teacher. Message: invite them to a weekend study group for the maths test.",
          },
          stem: "Write both versions and explain differences.",
          parts: [
            { label: "a", prompt: "Write the message to the friend.", marks: 1 },
            { label: "b", prompt: "Write the message to the teacher.", marks: 2 },
            { label: "c", prompt: "Explain two register differences.", marks: 2 },
            { label: "d", prompt: "Explain why the teacher version is polite but clear.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Audience-specific writing", statement: "Same purpose, different register." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — friend version is informal and friendly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — teacher version uses formal greeting.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — teacher version states purpose politely.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains greeting/register difference.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains tone/politeness difference.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — polite request is clear.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — no slang or blame.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — closing is courteous.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) informal friend message (b) formal teacher message (c) register differences (d) polite clarity.",
            commonErrors: ["Using identical language for both audiences."],
            examinerNote: "Both versions must invite to the study group.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which message is most informal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Dear Mr Ahmed, I would appreciate your reply.'" },
              { id: "b", text: "'I am writing to inform you...'" },
              { id: "c", text: "'Hey! Are we still meeting tomorrow?'" },
              { id: "d", text: "'To whom it may concern...'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Informal language suits friends." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hey' + casual question = informal.", working: "informal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** 'Hey! Are we still meeting tomorrow?'",
            commonErrors: ["Choosing messages that sound polite but casual."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who should receive the most formal language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A teacher or official" },
              { id: "b", text: "A classmate you know well" },
              { id: "c", text: "A younger sibling" },
              { id: "d", text: "A close friend" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Register choice", statement: "Formal register for authority figures." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — teachers/officials need formal language.", working: "formal", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** A teacher or official",
            commonErrors: ["Choosing familiar audiences."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to friend: 'Yo! Want to hang out Saturday?'\nMessage to principal: 'Dear Mr Khan, I am writing to request permission for the event.'",
          },
          stem: "Identify which message is formal and which is informal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register identification", statement: "Match register to audience." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — principal message is formal ('Dear Mr Khan', 'I am writing').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — friend message is informal ('Yo', 'hang out').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Principal = formal; friend = informal.",
            commonErrors: ["Reversing the registers."],
            examinerNote: "Both identifications needed.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to teacher: 'Hey Ms Lee, send me the file ASAP lol.'",
          },
          stem: "How many informal features does this message contain? (slang, abbreviation, casual greeting)",
          response: {
            type: "numeric",
            parts: [
              { label: "features", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register analysis", statement: "Count informal markers." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hey' (casual greeting), 'ASAP' (abbreviation), 'lol' (slang) = 3 features.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**3**",
            commonErrors: ["Missing one informal marker."],
            examinerNote: "D1 for 3.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to head teacher: 'Dude, the project is messed up. Fix it or we're doomed lol.'",
          },
          stem: "Which change is most important for audience awareness?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replacing slang and blame with polite, clear language" },
              { id: "b", text: "Using bigger words" },
              { id: "c", text: "Adding more jokes" },
              { id: "d", text: "Making the message longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adaptation", statement: "Match tone and language to the audience." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — slang ('dude', 'lol') and blame must go for a teacher.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — polite request replaces 'fix it or we're doomed'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** Replacing slang and blame with polite, clear language",
            commonErrors: ["Thinking length or bigger words fix register."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Original: 'Send me the notes ASAP!'\n\nAudience: a classmate who missed class yesterday.",
          },
          stem: "Rewrite the message appropriately for this audience and explain your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience-appropriate writing", statement: "Friends can receive semi-informal but still clear messages." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — message is polite but not overly formal (friend audience).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — keeps urgency but removes pressure ('ASAP' → 'when you can').", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains the audience-based choice.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Hey, could you send me the notes when you get a chance? Thanks!' — friendly but polite.",
            commonErrors: ["Using full formal letter format for a friend."],
            examinerNote: "Register must match audience.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to teacher: 'I want to tell you about the trip. It was great. We saw many things. Can we go again?'",
          },
          stem: "Improve this message for a teacher audience: state purpose clearly and use formal register.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal revision", statement: "Clear purpose + formal register." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds formal greeting and purpose phrase ('I am writing to tell you...').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces vague 'many things' with specifics.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — request is polite ('Could we please...').", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Dear Ms ..., I am writing to tell you about our trip. It was wonderful — we visited the museum and the park. Could we please go again next term?'",
            commonErrors: ["Keeping vague content or casual tone."],
            examinerNote: "All three improvements needed.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most polite way to make a request?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I need that file now.'" },
              { id: "b", text: "'File. Now.'" },
              { id: "c", text: "'Could you please send me the file?'" },
              { id: "d", text: "'Give me the file.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "'Could you please...' is polite and clear." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Could you please...' is the most polite request.", working: "polite", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** 'Could you please send me the file?'",
            commonErrors: ["Choosing direct commands."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to unknown official: 'To whom it may concern, I am writing regarding the library hours. I would appreciate your assistance.'",
          },
          stem: "Why is this message appropriate for an unknown official?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids stating any purpose" },
              { id: "b", text: "It is very casual" },
              { id: "c", text: "It uses slang" },
              { id: "d", text: "It is formal, respectful and states a clear purpose" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience appropriateness", statement: "Unknown officials need formal, purposeful language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — formal greeting + clear purpose + polite request.", working: "formal", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — no slang or assumptions about the reader.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** It is formal, respectful and states a clear purpose",
            commonErrors: ["Thinking casual is fine for officials."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "You need to tell your teacher you missed the bus and will arrive ten minutes late. Write the message.",
          },
          stem: "Write the message and explain your register choices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context-appropriate writing", statement: "Teacher needs polite but concise message." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — formal greeting ('Dear Ms...').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — states reason (missed bus) and arrival time clearly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — apologises politely and offers to catch up.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains register choices appropriately.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Polite message: greeting, reason, ETA, apology, offer to catch up.",
            commonErrors: ["Too casual or missing the apology."],
            examinerNote: "Must balance politeness and clarity.",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Message to grandmother: 'Dear Grandma, I hope you are well. I am writing to tell you about my school trip.'",
          },
          stem: "Is this register appropriate for a grandmother?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is perfect for a teacher" },
              { id: "b", text: "No — it uses slang" },
              { id: "c", text: "No — it is too formal" },
              { id: "d", text: "Yes — warm and respectful, though slightly formal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register nuance", statement: "Family can receive warm, polite but not stiff language." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — warm + respectful fits grandmother; slightly formal but acceptable.", working: "appropriate", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Yes — warm and respectful, though slightly formal",
            commonErrors: ["Thinking formal is always wrong for family."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-audience-awareness-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Adaptation Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Write a message inviting someone to a birthday party. You will send one version to a close friend and one to your teacher.",
          },
          stem: "Write both versions.",
          parts: [
            { label: "a", prompt: "Write the message to the friend.", marks: 1 },
            { label: "b", prompt: "Write the message to the teacher.", marks: 2 },
            { label: "c", prompt: "Explain two register differences.", marks: 2 },
            { label: "d", prompt: "Explain why the teacher version is appropriate.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Audience adaptation", statement: "Same message, different register." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — friend version is informal and warm.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — teacher version uses formal greeting.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — teacher version states purpose politely.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains greeting/tone difference.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains language/formality difference.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — explains why teacher version fits audience.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) informal (b) formal (c) differences (d) appropriateness.",
            commonErrors: ["Identical messages for both."],
            examinerNote: "Both versions must convey the invitation.",
          },
        },
      ],
    },
    {
      id: "mla4-u2-intercultural-communication",
      title: "Communication across cultures",
      skill: "Recognise cultural differences in communication and adapt messages to avoid misunderstanding.",
      lesson: {
        sections: [
          {
            heading: "Cultural differences",
            body: "People from different cultures may have different ideas about politeness, directness and personal space. A direct request may be normal in one culture but seem rude in another. When unsure, choose simple, polite language and ask if something is unclear.",
          },
          {
            heading: "Avoiding misunderstanding",
            body: "Idioms, jokes and slang often do not translate well. Prefer clear literal language: 'I would appreciate your reply by Friday' is safer than 'Hit me back soon'. If you use humour, keep it gentle and explain the context.",
          },
          {
            heading: "Respectful curiosity",
            body: "Show interest without stereotyping. Do not assume everyone from a culture thinks the same. Ask questions respectfully: 'In your experience, how is this usually done?' or 'Please let me know if my message is unclear.'",
          },
        ],
        keyFormulas: [
          { name: "Safe language", statement: "Simple + polite + literal + check for clarity" },
          { name: "Respectful questions", statement: "In your experience / Please let me know if unclear" },
        ],
        workedExample: {
          problem: "Rewrite 'Break a leg!' for a formal email to a partner school.",
          solution: "'We wish you every success with your presentation.'",
        },
      },
      questions: [
        {
          id: "mla4-u2-intercultural-communication-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should you avoid idioms in cross-cultural messages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They may not be understood literally or culturally" },
              { id: "b", text: "They are too formal" },
              { id: "c", text: "They make messages too long" },
              { id: "d", text: "They are always grammatically wrong" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Intercultural communication", statement: "Idioms may cause misunderstanding across cultures." }],
            steps: [{ reasoning: "Criterion C: Speaking — idioms may not translate or be understood.", working: "idiom", marks: 1, markCode: "C" }],
            finalAnswer: "**(a)** They may not be understood literally or culturally",
            commonErrors: ["Thinking idioms are only informal."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Message Excerpt",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Student A: 'I would appreciate your reply by Friday, as we need to finalise the project.'\nStudent B: 'Hey, get back to me soon, no pressure lol.'",
          },
          stem: "Which message is safer for a partner school and why?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Intercultural safety", statement: "Literal, polite language reduces misunderstanding." }],
            steps: [
              { reasoning: "Criterion D: Writing — Student A is polite, clear and gives deadline.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Student B uses slang ('lol') and vague urgency.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — A is safer across cultures.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Student A's message is safer: polite, precise and culturally neutral.",
            commonErrors: ["Choosing B because it seems friendly."],
            examinerNote: "Must explain why A is safer.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Scenario",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You need to tell a partner school that your class cannot attend on the proposed date because of a school holiday. You want to reschedule politely.",
          },
          stem: "Write the message and explain how you avoid sounding rude.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sensitive communication", statement: "Explain reason, express regret and offer alternative." }],
            steps: [
              { reasoning: "Criterion D: Writing — states reason clearly: school holiday.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — expresses regret or apology appropriately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — proposes alternative date or asks availability.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — tone is respectful, not dismissive.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Message explains holiday, apologises, offers rescheduling and remains polite.",
            commonErrors: ["Giving no reason or sounding entitled."],
            examinerNote: "Must balance honesty with courtesy.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Cultural Adaptation Task",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Write an email to a partner school inviting them to a cultural exchange video call. You do not know their preferred level of formality.",
          },
          stem: "Write the email and explain intercultural choices.",
          parts: [
            { label: "a", prompt: "Write the salutation and opening.", marks: 1 },
            { label: "b", prompt: "Write the invitation and request for reply.", marks: 2 },
            { label: "c", prompt: "Write the closing.", marks: 2 },
            { label: "d", prompt: "Explain two intercultural choices.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Intercultural email writing", statement: "Respectful, clear and adaptable." }],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — respectful salutation and clear purpose.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — invitation is polite and specific.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — request for reply is clear and courteous.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — closing is warm but formal.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — closing avoids slang or pressure.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — explains choice 1: formal but not stiff.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion C: Speaking — explains choice 2: flexibility or clarity.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — explanation is accurate and respectful.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) respectful opening (b) polite invitation (c) courteous close (d) intercultural explanations.",
            commonErrors: ["Assuming one culture's norms apply everywhere."],
            examinerNote: "Email should be adaptable, clear and respectful.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why is it safer to avoid idioms in cross-cultural messages?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They may not be understood literally or culturally" },
              { id: "b", text: "They make messages too short" },
              { id: "c", text: "They are grammatically incorrect" },
              { id: "d", text: "They are always rude" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intercultural communication", statement: "Idioms may not translate across cultures." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — idioms rely on shared cultural knowledge.", working: "idiom", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(a)** They may not be understood literally or culturally",
            commonErrors: ["Thinking idioms are only informal."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which message is safest for a partner school in another country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'I would appreciate your reply by Friday.'" },
              { id: "b", text: "'Break a leg with the presentation!'" },
              { id: "c", text: "'What's up? Need answers fast.'" },
              { id: "d", text: "'Hit me back soon lol'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Safe language", statement: "Literal, polite language reduces misunderstanding." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — option b is literal, polite, clear.", working: "safe", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** 'I would appreciate your reply by Friday.'",
            commonErrors: ["Choosing friendly but idiomatic options."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q7",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Two Messages",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message A: 'I would appreciate your reply by Friday, as we need to finalise the project.'\nMessage B: 'Yo, get back to me soon, no pressure lol.'",
          },
          stem: "Which message is safer across cultures and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural safety", statement: "Literal + polite = safer." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — Message A is polite, clear, gives deadline.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — Message B uses slang ('lol', 'yo') and vague urgency.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Message A — polite, precise, culturally neutral.",
            commonErrors: ["Choosing B because it seems friendly."],
            examinerNote: "Both messages compared.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You write to a partner school: 'We wish you every success with your presentation.'",
          },
          stem: "What does this sentence replace? (the original was 'Break a leg!')",
          response: {
            type: "numeric",
            parts: [
              { label: "replaced", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Idiom replacement", statement: "Replace idioms with literal equivalents." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — one idiom ('Break a leg!') replaced by literal wish.", working: "1", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**1** idiom replaced.",
            commonErrors: ["Not recognising the original idiom."],
            examinerNote: "D1 for 1.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Message to partner school: 'In your experience, how is this usually done? Please let me know if my message is unclear.'",
          },
          stem: "Why are these phrases effective for intercultural communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are very formal" },
              { id: "b", text: "They avoid any questions" },
              { id: "c", text: "They show respect and invite clarification" },
              { id: "d", text: "They use complex vocabulary" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Respectful questions", statement: "Inviting experience and checking clarity prevents misunderstanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'In your experience' respects their culture; 'let me know if unclear' invites clarification.", working: "respect + clarify", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — language is simple and polite.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** They show respect and invite clarification",
            commonErrors: ["Thinking complexity = effectiveness."],
            examinerNote: "C2 for (a).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q10",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Scenario",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "A partner school asks you to send files 'ASAP'. You cannot finish until Thursday. Write a reply that declines politely.",
          },
          stem: "Write the reply and explain how you avoid sounding rude.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensitive communication", statement: "Decline politely while giving reason and alternative." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — states inability clearly but politely.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — gives alternative date (Thursday).", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains polite strategy (reason + alternative).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Thank you for your patience. I will send the files by Thursday as I need a little more time to check them.'",
            commonErrors: ["Ignoring the request or sounding dismissive."],
            examinerNote: "Must balance honesty with courtesy.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Scenario",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You want to invite a partner school to a video call. You do not know their preferred level of formality.",
          },
          stem: "Write an opening that is respectful but adaptable, and explain your choice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Adaptable communication", statement: "Polite but not overly stiff when unsure." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — uses respectful greeting ('Dear colleagues' or 'Dear...').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — states purpose clearly without assuming familiarity.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains adaptable, neutral register choice.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Dear colleagues, I am writing to invite your school to a video call...' — formal but friendly.",
            commonErrors: ["Assuming casual or overly formal without reason."],
            examinerNote: "Must balance respect and adaptability.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the best way to handle humour in a cross-cultural message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use sarcasm" },
              { id: "b", text: "Use it gently and explain the context if needed" },
              { id: "c", text: "Avoid it entirely" },
              { id: "d", text: "Use lots of jokes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Humour across cultures", statement: "Gentle humour + context avoids misunderstanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — gentle humour with context is safest.", working: "gentle", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Use it gently and explain the context if needed",
            commonErrors: ["Thinking all humour must be avoided or can be used freely."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You need to tell a partner school your class cannot attend on the proposed date because of a school holiday.",
          },
          stem: "What are the two most important elements of a polite reply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blame the other school and demand a new date" },
              { id: "b", text: "Explain the reason and offer an alternative" },
              { id: "c", text: "Apologise but give no reason" },
              { id: "d", text: "Ignore the message completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sensitive communication", statement: "Reason + alternative = polite and clear." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — reason (holiday) explains; alternative shows flexibility.", working: "reason+alternative", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — avoids blame or silence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Explain the reason and offer an alternative",
            commonErrors: ["Choosing blame or silence."],
            examinerNote: "D2 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q14",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Scenario",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You receive a message from a partner school that seems rude or unclear. You are not sure if it was intended that way.",
          },
          stem: "Write a reply that asks for clarification respectfully without assuming bad intent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clarification across cultures", statement: "Ask politely; assume good intent." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — polite phrasing ('Could you clarify...').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — states possible misunderstanding without accusation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — tone assumes good intent.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — language is clear and simple.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Thank you for your message. Could you please clarify what you meant by...? I want to make sure I understand correctly.'",
            commonErrors: ["Assuming the other person was rude."],
            examinerNote: "Must be respectful, not accusatory.",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Message Draft",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "You write: 'Please let me know if my message is unclear.'",
          },
          stem: "What intercultural purpose does this sentence serve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It proves the writer is fluent" },
              { id: "b", text: "It invites the reader to flag misunderstanding early" },
              { id: "c", text: "It ends the conversation" },
              { id: "d", text: "It shows the writer is uncertain" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Clarity check", statement: "Inviting clarification prevents misunderstanding." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — phrase invites reader to correct misunderstanding.", working: "clarify", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It invites the reader to flag misunderstanding early",
            commonErrors: ["Reading it as weakness."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla4-u2-intercultural-communication-q16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Cultural Exchange Task",
            author: "Written for Akademik Space",
            source: "Intercultural writing practice",
            text: "Write an email to a partner school about a joint project. You want to be clear, polite and culturally respectful.",
          },
          stem: "Write the email.",
          parts: [
            { label: "a", prompt: "Write the salutation and opening.", marks: 1 },
            { label: "b", prompt: "Explain the project proposal clearly.", marks: 2 },
            { label: "c", prompt: "Make a polite request for their response.", marks: 1 },
            { label: "d", prompt: "Write the closing and explain two intercultural choices.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural email", statement: "Respectful, clear, adaptable." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — respectful greeting + purpose.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — proposal explained clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — no idioms or assumptions.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — polite, specific request for reply.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — courteous closing.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion C: Speaking — two intercultural choices explained.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) greeting (b) proposal (c) request (d) closing + explanations.",
            commonErrors: ["Using idioms or assuming familiarity."],
            examinerNote: "Email should be clear, polite, culturally neutral.",
          },
        },
      ],
    },
  ],
};
