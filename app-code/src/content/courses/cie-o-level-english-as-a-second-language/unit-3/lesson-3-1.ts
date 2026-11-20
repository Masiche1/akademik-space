import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "oles-u3-lesson-3-1",
  code: "3-1",
  title: "Formal letters and emails",
  goal: "I CAN write formal letters and emails with correct layout and tone.",
  standards: ["1120 Writing: directed writing"],
  vocabulary: [
    { term: "Formal register", definition: "Polite, impersonal language used for official or professional writing." },
    { term: "Salutation", definition: "The greeting at the start, e.g. 'Dear Sir or Madam'." },
    { term: "Subject line", definition: "A short line in an email stating its purpose." },
    { term: "Layout", definition: "The arrangement of address, date, greeting, body and closing." },
    { term: "Purpose", definition: "The reason for writing — request, complaint, application, information." },
  ],
  concepts: [
    {
      id: "oles-u3-layout",
      title: "Letter and email layout",
      skill: "Use the correct structure for formal correspondence.",
      lesson: {
        sections: [
          { heading: "Letter layout", body: "A formal letter has: your address (top right), date, recipient's address (left), salutation ('Dear Sir or Madam' if name unknown), body paragraphs, closing ('Yours faithfully' if unnamed, 'Yours sincerely' if named), your full name. Paragraphs are indented or blocked, never both." },
          { heading: "Email layout", body: "An email needs: a clear subject line, an appropriate greeting, short paragraphs, a polite request or statement, and a formal closing with your name. Emails are less formal than letters but still professional — no slang, no emoji in formal contexts." },
        ],
        keyFormulas: [
          { name: "Closing rule", statement: "Unknown name → Yours faithfully; known name → Yours sincerely." },
        ],
        workedExample: {
          problem: "You write to 'The Manager, City Library' without a name. Which salutation and closing?",
          solution: "Salutation: 'Dear Sir or Madam'. Closing: 'Yours faithfully' — because you do not know the recipient's name.",
        },
      },
      questions: [
        {
          id: "oles-u3-ly-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which closing matches 'Dear Sir or Madam'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Yours faithfully" },
            { id: "b", text: "Yours sincerely" },
            { id: "c", text: "Best wishes" },
            { id: "d", text: "Love" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Closing rule", statement: "Unnamed recipient → faithfully." }], steps: [{ reasoning: "No name known → 'Yours faithfully'.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Yours faithfully" },
        },
        {
          id: "oles-u3-ly-q2", difficulty: "core", totalMarks: 2,
          stem: "List the parts of a formal letter in order.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Letter layout", statement: "Address, date, recipient, salutation, body, closing, name." }], steps: [
            { reasoning: "Sender's address and date, recipient's address, salutation, body, closing, name.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct order given.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Your address → date → their address → salutation → body → closing → your name." },
        },
        {
          id: "oles-u3-ly-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why the subject line matters in a formal email.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Subject line", statement: "States purpose before reading." }], steps: [
            { reasoning: "The subject line tells the reader the purpose at a glance.", marks: 1, markCode: "AO2" },
            { reasoning: "It helps the email be filed and prioritised correctly.", marks: 1, markCode: "AO2" },
            { reasoning: "A vague subject can get the email ignored or misrouted.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It states the purpose immediately and helps the email be handled correctly." },
        },
        {
          id: "oles-u3-ly-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Formal correspondence review.",
          parts: [
            { label: "a", prompt: "Name the parts of a formal letter.", marks: 3 },
            { label: "b", prompt: "When do you use 'Yours faithfully'?", marks: 2 },
            { label: "c", prompt: "What does an email subject line do?", marks: 2 },
            { label: "d", prompt: "How is email register different from a letter?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Correspondence", statement: "Correct layout and matching closing." }], steps: [
            { part: "a", reasoning: "Addresses, date, salutation, body, closing, name.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "At least five correct parts.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Complete and ordered.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "When the recipient's name is unknown ('Dear Sir or Madam').", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct condition.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "States the email's purpose before the body is read.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct function.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Slightly less formal but still professional; no slang or emoji.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct contrast.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) letter parts (b) unknown name (c) states purpose (d) less formal, still professional",
            levels: [
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
    {
      id: "oles-u3-tone",
      title: "Tone and register",
      skill: "Choose language that suits the reader and purpose.",
      lesson: {
        sections: [
          { heading: "Register scale", body: "Formal: 'I am writing to request...' Informal: 'Hi, just wondering if...' Most exam directed writing needs formal or semi-formal register. Match your language to the reader — a letter to a headteacher is formal; an email to a friend is informal." },
          { heading: "Polite request language", body: "Use 'I would be grateful if', 'Could you please', 'I would like to', 'Thank you for your consideration'. Avoid demanding language like 'You must' or 'Send me'. Positive, courteous phrasing always scores better." },
        ],
        keyFormulas: [
          { name: "Register", statement: "Formal reader → formal language; match tone to audience and purpose." },
        ],
        workedExample: {
          problem: "Rewrite informally: 'I am writing to complain about the noise.'",
          solution: "Formal version is fine. Informal would be: 'I'm writing because the noise has been really bad lately.' Register follows the reader.",
        },
      },
      questions: [
        {
          id: "oles-u3-tr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A letter of complaint to a company should use…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Formal, polite language" },
            { id: "b", text: "Slang and abbreviations" },
            { id: "c", text: "Shouting for emphasis" },
            { id: "d", text: "No greeting at all" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Register", statement: "Match language to reader." }], steps: [{ reasoning: "Complaints to companies need formal polite register.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Formal, polite language" },
        },
        {
          id: "oles-u3-tr-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two polite phrases for making a request in a formal letter.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Polite requests", statement: "'Could you please', 'I would be grateful'." }], steps: [
            { reasoning: "Any two: 'Could you please...', 'I would be grateful if...', 'I would like to request...'.", marks: 1, markCode: "AO2" },
            { reasoning: "Both are polite and formal.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'Could you please...' and 'I would be grateful if...'" },
        },
        {
          id: "oles-u3-tr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to choose the right register for a piece of directed writing.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Register choice", statement: "Reader + purpose decide tone." }], steps: [
            { reasoning: "Identify who will read it — official, teacher, friend.", marks: 1, markCode: "AO2" },
            { reasoning: "Identify the purpose — request, complaint, thanks, application.", marks: 1, markCode: "AO2" },
            { reasoning: "Choose formal, semi-formal or informal language to match.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reader + purpose → formal/semi-formal/informal register." },
        },
        {
          id: "oles-u3-tr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Tone and register review.",
          parts: [
            { label: "a", prompt: "What is register?", marks: 2 },
            { label: "b", prompt: "Name two formal request phrases.", marks: 2 },
            { label: "c", prompt: "How does purpose affect tone?", marks: 2 },
            { label: "d", prompt: "Why is polite phrasing important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Register", statement: "Match tone to reader and purpose; stay polite." }], steps: [
            { part: "a", reasoning: "Register = the level of formality of language.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Any two polite formal phrases.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "A complaint needs firmness, a request needs courtesy — purpose shapes tone.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Polite phrasing persuades and respects the reader; demands create resistance.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains effect.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Connects to marks.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) formality level (b) two phrases (c) purpose shapes tone (d) persuades reader",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u3-3-1-notes", title: "Formal letters — notes", summary: "Layout, closings and polite register.",
      sections: [
        { heading: "Layout", body: "Addresses, date, salutation, body, closing, name. 'Yours faithfully' for unknown names; 'Yours sincerely' for named recipients." },
        { heading: "Register", body: "Match tone to reader and purpose. Use 'Could you please' and 'I would be grateful' — never demands." },
      ] },
  ],
};
