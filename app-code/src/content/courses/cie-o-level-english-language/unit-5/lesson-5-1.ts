import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cie-ol-el-lesson-5-1",
  code: "5-1",
  title: "Formal letter writing",
  goal: "I CAN write formal letters for different purposes.",
  standards: ["1123 Writing: formal letters"],
  vocabulary: [
    { term: "Formal letter", definition: "Official correspondence with standard format." },
    { term: "Salutation", definition: "Greeting — 'Dear Sir/Madam' or 'Dear Mr Smith'." },
    { term: "Valediction", definition: "Closing — 'Yours faithfully' or 'Yours sincerely'." },
    { term: "Subject line", definition: "Brief summary of letter purpose." },
    { term: "Enclosure", definition: "Additional documents attached." },
    { term: "Postscript", definition: "Additional note after signature — 'P.S.'" },
  ],
  concepts: [
    {
      id: "cie-ol-el-formal-letter",
      title: "Formal letter format",
      skill: "Write formal letters with correct format and register.",
      lesson: {
        sections: [
          {
            heading: "Format",
            body: "Sender's address → date → recipient's address → salutation → subject line → body → valediction → signature → name. Optional: enclosure, postscript.",
          },
          {
            heading: "Salutations and valedictions",
            body: "'Dear Sir/Madam' → 'Yours faithfully' (unknown name); 'Dear Mr Smith' → 'Yours sincerely' (known name).",
          },
          {
            heading: "Body structure",
            body: "Opening (purpose) → main points → closing (request/next steps). Formal, polite, clear.",
          },
        ],
        keyFormulas: [
          { name: "Formal letter", statement: "Address→date→recipient→salutation→subject→body→valediction→signature→name." },
        ],
        workedExample: {
          problem: "Write a formal complaint letter.",
          solution: "Sender's address, date, company address, 'Dear Sir/Madam', subject 'Complaint about...', problem details, request remedy, 'Yours faithfully'.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-fl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What comes first in a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sender's address" },
              { id: "b", text: "Body" },
              { id: "c", text: "Salutation" },
              { id: "d", text: "Recipient's address" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "Sender's address first." },
            ],
            steps: [
              { reasoning: "Sender's address first.", working: "address", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sender's address",
            commonErrors: ["Starting with recipient — wrong order."],
          },
        },
        {
          id: "cie-ol-el-fl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two formal letter elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Elements", statement: "Salutation, valediction, subject line, signature." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "elements", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Salutation, valediction, subject line, signature (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-fl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "When to use 'Yours faithfully' vs 'Yours sincerely'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Valediction", statement: "'Yours faithfully'=unknown name; 'Yours sincerely'=known name." },
            ],
            steps: [
              { reasoning: "'Yours faithfully' with 'Dear Sir/Madam' — unknown recipient.", working: "faithfully", marks: 1, markCode: "AO2" },
              { reasoning: "'Yours sincerely' with 'Dear Mr Smith' — known recipient.", working: "sincerely", marks: 1, markCode: "AO2" },
              { reasoning: "Match valediction to salutation.", working: "match", marks: 1, markCode: "AO2" },
              { reasoning: "Rule clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Yours faithfully'=unknown name; 'Yours sincerely'=known name.",
            commonErrors: ["Mismatching — check salutation."],
          },
        },
        {
          id: "cie-ol-el-fl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate formal letters.",
          parts: [
            { label: "a", prompt: "Describe letter format.", marks: 3 },
            { label: "b", prompt: "When 'Yours faithfully'?", marks: 2 },
            { label: "c", prompt: "When 'Yours sincerely'?", marks: 2 },
            { label: "d", prompt: "How to structure body?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal letters", statement: "Format, valedictions, body structure." },
            ],
            steps: [
              { part: "a", reasoning: "Sender's address→date→recipient→salutation→subject→body→valediction→signature→name.", working: "format", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Unknown recipient name — 'Dear Sir/Madam'.", working: "faithfully", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Known recipient name — 'Dear Mr Smith'.", working: "sincerely", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Opening (purpose)→main points→closing (request/next steps).", working: "body", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) format (b) unknown name (c) known name (d) purpose→points→request",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Complete format.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Mismatched salutation/valediction."],
          },
        },
        {
          id: "cie-ol-el-fl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a formal letter, which element comes immediately after the salutation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Valediction" },
              { id: "b", text: "Subject line" },
              { id: "c", text: "Signature" },
              { id: "d", text: "Postscript" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "Subject line follows the salutation." },
            ],
            steps: [
              { reasoning: "Subject line follows salutation.", working: "subject", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Subject line",
            commonErrors: ["Choosing (b) — the valediction closes the letter."],
          },
        },
        {
          id: "cie-ol-el-fl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A letter addressed to 'Dear Mr Khan' should end with which valediction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yours sincerely" },
              { id: "b", text: "Yours faithfully" },
              { id: "c", text: "Best wishes" },
              { id: "d", text: "Kind regards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Valediction", statement: "'Yours sincerely' pairs with a known name." },
            ],
            steps: [
              { reasoning: "Known name 'Mr Khan' requires 'Yours sincerely'.", working: "sincerely", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Yours sincerely",
            commonErrors: ["Choosing (a) — 'Yours faithfully' pairs with 'Dear Sir/Madam'."],
          },
        },
        {
          id: "cie-ol-el-fl-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why do formal letters include a subject line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To fill empty space on the page" },
              { id: "b", text: "To summarise the purpose of the letter briefly" },
              { id: "c", text: "To replace the salutation" },
              { id: "d", text: "To list the enclosure contents" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "Brief summary of letter purpose." },
            ],
            steps: [
              { reasoning: "Subject line summarises purpose.", working: "purpose", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** To summarise the purpose of the letter briefly",
            commonErrors: ["Thinking it is decorative — it must state purpose."],
          },
        },
        {
          id: "cie-ol-el-fl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Where is the sender's name placed in a formal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the very top before the sender's address" },
              { id: "b", text: "On the same line as the date" },
              { id: "c", text: "Inside the subject line" },
              { id: "d", text: "Below the valediction under the signature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "Signature then printed name at the end." },
            ],
            steps: [
              { reasoning: "Name appears under signature after valediction.", working: "signature", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Below the valediction under the signature",
            commonErrors: ["Placing it at the top — name goes at the end."],
          },
        },
        {
          id: "cie-ol-el-fl-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does an 'Encl.' note at the end of a formal letter indicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The letter was sent by recorded delivery" },
              { id: "b", text: "The recipient should reply urgently" },
              { id: "c", text: "Additional documents are attached" },
              { id: "d", text: "The letter is a copy, not the original" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enclosure", statement: "Additional documents attached to the letter." },
            ],
            steps: [
              { reasoning: "Enclosure = attached documents.", working: "enclosure", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Additional documents are attached",
            commonErrors: ["Confusing with postscript — P.S. adds a note, Encl. adds documents."],
          },
        },
        {
          id: "cie-ol-el-fl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A directed writing task allows 100-150 words. A student writes 175 words. How many words must be cut to reach the maximum?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Answers must stay within the stated maximum." },
            ],
            steps: [
              { reasoning: "175 - 150 = 25 words over the limit.", working: "175 - 150 = 25", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "25",
            commonErrors: ["Subtracting from the minimum instead of the maximum."],
          },
        },
        {
          id: "cie-ol-el-fl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A formal letter task requires at least 60 words. A draft contains 45 words. How many more words are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Minimum word counts must also be met." },
            ],
            steps: [
              { reasoning: "60 - 45 = 15 words short of the minimum.", working: "60 - 45 = 15", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "15",
            commonErrors: ["Adding instead of subtracting — 45 + 60 is wrong."],
          },
        },
        {
          id: "cie-ol-el-fl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A formal letter format checklist lists 9 elements. A student forgets the sender's address and the signature. How many required elements are still present?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Format", statement: "Nine standard elements must all appear." },
            ],
            steps: [
              { reasoning: "9 - 2 = 7 elements remain.", working: "9 - 2 = 7", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "7",
            commonErrors: ["Counting the omissions as present."],
          },
        },
        {
          id: "cie-ol-el-fl-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A letter may be between 120 and 180 words. A draft is 200 words long, and the student must add a 15-word subject line. How many words must the body lose so the total stays within the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Total length including additions must not exceed the maximum." },
            ],
            steps: [
              { reasoning: "Adding the subject line gives 200 + 15 = 215 words.", working: "200 + 15 = 215", marks: 1, markCode: "AO3" },
              { reasoning: "215 exceeds the 180-word maximum by 35 words.", working: "215 - 180 = 35", marks: 2, markCode: "AO3" },
              { reasoning: "The body must lose 35 words.", working: "35", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "35",
            commonErrors: ["Forgetting to count the new subject line toward the total."],
          },
        },
        {
          id: "cie-ol-el-fl-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when to use 'Yours faithfully' and when to use 'Yours sincerely' in a formal letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Valedictions", statement: "Match closing to whether the recipient's name is known." },
            ],
            steps: [
              { reasoning: "'Yours faithfully' is used with 'Dear Sir/Madam' when the name is unknown.", working: "faithfully", marks: 1, markCode: "AO2" },
              { reasoning: "'Yours sincerely' is used with 'Dear Mr/Ms [name]' when the name is known.", working: "sincerely", marks: 1, markCode: "AO2" },
              { reasoning: "The choice must match the salutation used.", working: "match", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "'Yours faithfully' = unknown name; 'Yours sincerely' = known name.",
            commonErrors: ["Mixing the pairings — they must match the salutation."],
          },
        },
        {
          id: "cie-ol-el-fl-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the recommended order of elements in a formal letter, from first to last.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Format", statement: "Sender's address, date, recipient, salutation, subject, body, valediction, signature, name." },
            ],
            steps: [
              { reasoning: "Opening block: sender's address, date, recipient's address.", working: "opening", marks: 1, markCode: "AO2" },
              { reasoning: "Salutation then subject line.", working: "salutation", marks: 1, markCode: "AO2" },
              { reasoning: "Body paragraphs, then valediction, signature and printed name.", working: "closing", marks: 1, markCode: "AO2" },
              { reasoning: "Order stated correctly and completely.", working: "order", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Address→date→recipient→salutation→subject→body→valediction→signature→name.",
            commonErrors: ["Putting the recipient's address before the sender's."],
          },
        },
        {
          id: "cie-ol-el-fl-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts about formal letter conventions.",
          parts: [
            { label: "a", prompt: "Give the correct salutation when the recipient's name is unknown.", marks: 2 },
            { label: "b", prompt: "State the valediction that matches your answer to (a).", marks: 1 },
            { label: "c", prompt: "Name two optional elements that may appear after the signature.", marks: 2 },
            { label: "d", prompt: "Explain why a subject line is useful in a formal letter.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formal letter", statement: "Salutation/valediction pairing, optional elements, subject line purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Use 'Dear Sir' or 'Dear Madam' / 'Dear Sir or Madam'.", working: "dear", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct and complete salutation.", working: "salutation", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "'Yours faithfully' matches unknown name.", working: "faithfully", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Enclosure note ('Encl.') and postscript ('P.S.') are valid.", working: "encl", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Second valid optional element.", working: "ps", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Subject line briefly states the purpose of the letter.", working: "purpose", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "It helps the recipient identify content quickly.", working: "identify", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Explanation clear and accurate.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) Dear Sir/Madam (b) Yours faithfully (c) Encl., P.S. (d) states purpose briefly",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong salutation.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong valediction.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Two valid elements.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None/few.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear purpose explanation.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Pairing 'Yours sincerely' with 'Dear Sir/Madam'."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-u5-letter-types",
      title: "Letter types and purposes",
      skill: "Write letters for different purposes — complaints, applications, requests.",
      lesson: {
        sections: [
          {
            heading: "Complaint letter",
            body: "State problem clearly → provide details → request remedy → polite but firm. Formal register.",
          },
          {
            heading: "Application letter",
            body: "Introduce self → state position → highlight qualifications → request opportunity → formal register.",
          },
          {
            heading: "Request letter",
            body: "State request clearly → provide reasons → specify what you need → polite closing.",
          },
        ],
        keyFormulas: [
          { name: "Letter types", statement: "Complaint: problem→details→remedy. Application: self→position→qualifications→request." },
        ],
        workedExample: {
          problem: "Write a letter requesting information about a course.",
          solution: "Formal register, state request clearly, provide reasons, specify information needed, polite closing.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-lt2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a complaint letter include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only date" },
              { id: "b", text: "Only signature" },
              { id: "c", text: "Problem, details, remedy" },
              { id: "d", text: "Only greeting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint", statement: "Problem→details→remedy request." },
            ],
            steps: [
              { reasoning: "Problem, details, remedy.", working: "elements", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Problem, details, remedy",
            commonErrors: ["Missing remedy — key element."],
          },
        },
        {
          id: "cie-ol-el-lt2-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two letter types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Types", statement: "Complaint, application, request, invitation, thank-you." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Complaint, application, request, invitation, thank-you (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-lt2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of an application letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application", statement: "Introduce→position→qualifications→request opportunity." },
            ],
            steps: [
              { reasoning: "Introduce self and purpose.", working: "introduce", marks: 1, markCode: "AO2" },
              { reasoning: "State position and highlight qualifications/experience.", working: "qualifications", marks: 1, markCode: "AO2" },
              { reasoning: "Request opportunity — formal closing.", working: "request", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduce→position→qualifications→request opportunity.",
            commonErrors: ["Missing qualifications — key selling point."],
          },
        },
        {
          id: "cie-ol-el-lt2-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate letter types.",
          parts: [
            { label: "a", prompt: "Name three letter types.", marks: 2 },
            { label: "b", prompt: "Describe complaint letter.", marks: 3 },
            { label: "c", prompt: "Describe application letter.", marks: 2 },
            { label: "d", prompt: "Describe request letter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Complaint, application, request." },
            ],
            steps: [
              { part: "a", reasoning: "Complaint, application, request, invitation, thank-you.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Three+ valid.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Problem→details→remedy→polite but firm.", working: "complaint", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Introduce→position→qualifications→request.", working: "application", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Request→reasons→specify→polite closing.", working: "request", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) types (b) complaint structure (c) application structure (d) request structure",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Three+ types.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["Complaint too aggressive — must stay polite."],
          },
        },
        {
          id: "cie-ol-el-lt2-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student wants to complain about a faulty product. Which letter type should they write?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Application letter" },
              { id: "b", text: "Thank-you letter" },
              { id: "c", text: "Complaint letter" },
              { id: "d", text: "Invitation letter" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Complaint letters state a problem and request a remedy." },
            ],
            steps: [
              { reasoning: "Faulty product = complaint.", working: "complaint", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Complaint letter",
            commonErrors: ["Choosing application — that is for jobs or courses."],
          },
        },
        {
          id: "cie-ol-el-lt2-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which element is essential in an application letter but less central in a simple request letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A greeting" },
              { id: "b", text: "Highlighting qualifications and experience" },
              { id: "c", text: "A signature" },
              { id: "d", text: "A date" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Application letter", statement: "Must highlight qualifications to persuade the reader." },
            ],
            steps: [
              { reasoning: "Applications must sell the applicant's qualifications.", working: "qualifications", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** Highlighting qualifications and experience",
            commonErrors: ["Choosing (b)/(c)/(d) — all letters need those."],
          },
        },
        {
          id: "cie-ol-el-lt2-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A complaint letter says 'This is the worst service I have ever received!' What is the main problem with this tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses too many facts" },
              { id: "b", text: "It is too formal" },
              { id: "c", text: "It is too aggressive and may weaken the request" },
              { id: "d", text: "It is too short" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone", statement: "Complaints should be polite but firm." },
            ],
            steps: [
              { reasoning: "Aggressive tone undermines a formal complaint.", working: "tone", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** It is too aggressive and may weaken the request",
            commonErrors: ["Thinking stronger language always persuades."],
          },
        },
        {
          id: "cie-ol-el-lt2-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a request letter, what should the writer specify clearly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unrelated personal details" },
              { id: "b", text: "Exactly what they need and why" },
              { id: "c", text: "Only the greeting" },
              { id: "d", text: "Their entire life history" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Request letter", statement: "State request clearly, give reasons, specify what is needed." },
            ],
            steps: [
              { reasoning: "Request + reasons + specifics needed.", working: "request", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Exactly what they need and why",
            commonErrors: ["Vague requests — must specify clearly."],
          },
        },
        {
          id: "cie-ol-el-lt2-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which letter type would be used to invite a guest to an event?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complaint letter" },
              { id: "b", text: "Application letter" },
              { id: "c", text: "Report letter" },
              { id: "d", text: "Invitation letter" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter types", statement: "Invitation letters invite guests to events." },
            ],
            steps: [
              { reasoning: "Event invitation = invitation letter.", working: "invitation", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Invitation letter",
            commonErrors: ["Confusing with request — an invitation offers, not asks for."],
          },
        },
        {
          id: "cie-ol-el-lt2-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A complaint letter task requires 120-160 words. A student writes 185 words. How many words must be cut?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 25 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Stay within the stated maximum." },
            ],
            steps: [
              { reasoning: "185 - 160 = 25 words over.", working: "185 - 160 = 25", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "25",
            commonErrors: ["Using 120 instead of 160 as the maximum."],
          },
        },
        {
          id: "cie-ol-el-lt2-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An application letter must be at least 150 words. A draft is 110 words. How many more words are required?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Minimum word counts must be met." },
            ],
            steps: [
              { reasoning: "150 - 110 = 40 words short.", working: "150 - 110 = 40", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "40",
            commonErrors: ["Adding the figures instead of finding the difference."],
          },
        },
        {
          id: "cie-ol-el-lt2-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A task says a complaint letter needs a problem statement, details, and a remedy request — 3 sections. A student includes the problem and details but no remedy. What fraction of the required sections are missing, expressed as a number of sections?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complaint structure", statement: "Problem, details and remedy request are all required." },
            ],
            steps: [
              { reasoning: "Three sections required; remedy request is missing.", working: "3 - 2 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "One section is missing.", working: "1", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting the problem statement as missing when it is present."],
          },
        },
        {
          id: "cie-ol-el-lt2-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An invitation letter may be 80-120 words. A draft is 95 words, but the student must add the recipient's name (2 words) and an enclosure note (3 words). How many words can the body still grow by without exceeding the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Additions count toward the total word count." },
            ],
            steps: [
              { reasoning: "95 + 2 + 3 = 100 words after additions.", working: "95 + 2 + 3 = 100", marks: 1, markCode: "AO3" },
              { reasoning: "120 - 100 = 20 words of headroom remain.", working: "120 - 100 = 20", marks: 2, markCode: "AO3" },
              { reasoning: "Body may grow by 20 words.", working: "20", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "20",
            commonErrors: ["Ignoring the added words when calculating headroom."],
          },
        },
        {
          id: "cie-ol-el-lt2-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Outline the typical structure of a complaint letter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Complaint letter", statement: "Problem, details, remedy request, polite but firm." },
            ],
            steps: [
              { reasoning: "State the problem clearly in the opening.", working: "problem", marks: 1, markCode: "AO2" },
              { reasoning: "Provide relevant details — dates, products, what happened.", working: "details", marks: 1, markCode: "AO2" },
              { reasoning: "Request a specific remedy politely but firmly.", working: "remedy", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem→details→remedy request, polite but firm.",
            commonErrors: ["Aggressive tone or missing remedy request."],
          },
        },
        {
          id: "cie-ol-el-lt2-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of an application letter and explain why each stage matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Application letter", statement: "Introduce, state position, highlight qualifications, request opportunity." },
            ],
            steps: [
              { reasoning: "Introduce yourself and state the position applied for.", working: "introduce", marks: 1, markCode: "AO2" },
              { reasoning: "Highlight qualifications and relevant experience.", working: "qualifications", marks: 1, markCode: "AO2" },
              { reasoning: "Request the opportunity formally.", working: "request", marks: 1, markCode: "AO2" },
              { reasoning: "Each stage builds a persuasive case for selection.", working: "persuade", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduce→position→qualifications→request; each stage persuades the reader.",
            commonErrors: ["Omitting qualifications — the key persuasive element."],
          },
        },
        {
          id: "cie-ol-el-lt2-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts about letter types.",
          parts: [
            { label: "a", prompt: "Name three formal letter types.", marks: 3 },
            { label: "b", prompt: "State the first element a complaint letter should contain.", marks: 2 },
            { label: "c", prompt: "What must an application letter highlight?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Letter types", statement: "Complaint, application, request, invitation, thank-you." },
            ],
            steps: [
              { part: "a", reasoning: "Complaint, application, request, invitation, thank-you are valid.", working: "types", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Second valid type.", working: "types2", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Third valid type.", working: "types3", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Clear statement of the problem.", working: "problem", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate and complete.", working: "accurate", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Qualifications and relevant experience.", working: "qualifications", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Linked to the position applied for.", working: "linked", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear and persuasive.", working: "clear", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) any three letter types (b) problem statement (c) qualifications/experience",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Three types.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Clear highlight.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "c" },
            ],
            commonErrors: ["Listing informal types for a formal task."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-email-writing",
      title: "Email writing",
      skill: "Write effective emails for different purposes.",
      lesson: {
        sections: [
          {
            heading: "Email format",
            body: "Subject line → greeting → body → closing → signature. More flexible than letters.",
          },
          {
            heading: "Subject lines",
            body: "Brief, clear, informative — 'Meeting request: Project update Friday 3pm'. Not vague.",
          },
          {
            heading: "Email types",
            body: "Formal (business), semi-formal (colleagues), informal (friends). Register varies accordingly.",
          },
        ],
        keyFormulas: [
          { name: "Email writing", statement: "Subject→greeting→body→closing→signature; subject must be clear." },
        ],
        workedExample: {
          problem: "Write email requesting meeting.",
          solution: "Subject: 'Meeting request: Project update', greeting 'Dear [name]', state purpose, propose time, closing, signature.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-email-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an email subject line do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise content clearly" },
              { id: "b", text: "Be long" },
              { id: "c", text: "Be confusing" },
              { id: "d", text: "Be vague" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "Brief, clear, informative summary." },
            ],
            steps: [
              { reasoning: "Subject = clear summary.", working: "summary", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Summarise content clearly",
            commonErrors: ["Vague subject — must be clear."],
          },
        },
        {
          id: "cie-ol-el-email-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two email types.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email types", statement: "Formal, semi-formal, informal." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "types", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Formal, semi-formal, informal (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-email-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does email differ from formal letter?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email vs letter", statement: "Email: subject line, more flexible, faster; letter: formal format, physical." },
            ],
            steps: [
              { reasoning: "Email has subject line; letter has addresses.", working: "format", marks: 1, markCode: "AO2" },
              { reasoning: "Email more flexible/instant; letter formal/physical.", working: "flexibility", marks: 1, markCode: "AO2" },
              { reasoning: "Register can vary more in email.", working: "register", marks: 1, markCode: "AO2" },
              { reasoning: "Differences clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Email: subject, flexible, instant; letter: formal format, physical.",
            commonErrors: ["Treating them the same — formats differ."],
          },
        },
        {
          id: "cie-ol-el-email-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate emails.",
          parts: [
            { label: "a", prompt: "Describe email format.", marks: 2 },
            { label: "b", prompt: "How to write subject line?", marks: 2 },
            { label: "c", prompt: "Name email types.", marks: 2 },
            { label: "d", prompt: "Email vs letter differences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email writing", statement: "Format, subject line, types, vs letters." },
            ],
            steps: [
              { part: "a", reasoning: "Subject→greeting→body→closing→signature.", working: "format", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Brief, clear, informative summary.", working: "subject", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Formal, semi-formal, informal.", working: "types", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Email: subject, flexible, instant; letter: formal, physical.", working: "differences", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple differences.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) format (b) clear subject (c) types (d) email vs letter",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple types.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Differences clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Vague subject line — must be clear."],
          },
        },
        {
          id: "cie-ol-el-email-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the BEST email subject line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read this when you can" },
              { id: "b", text: "!!!! important !!!!" },
              { id: "c", text: "Question about homework" },
              { id: "d", text: "Hi" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "Brief, clear, informative summary." },
            ],
            steps: [
              { reasoning: "Option (a) states content clearly and briefly.", working: "clear", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Question about homework",
            commonErrors: ["Choosing vague options like 'Hi' or 'Read this'."],
          },
        },
        {
          id: "cie-ol-el-email-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which greeting is appropriate for a formal business email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yo," },
              { id: "b", text: "Dear Mr Smith," },
              { id: "c", text: "To whom it may concern!!!" },
              { id: "d", text: "Hey there!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Formal emails use polite, professional greetings." },
            ],
            steps: [
              { reasoning: "'Dear Mr Smith' is formal and appropriate.", working: "dear", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Dear Mr Smith,",
            commonErrors: ["Using informal greetings in formal emails."],
          },
        },
        {
          id: "cie-ol-el-email-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "An email to a close friend about weekend plans should use which register?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Legal" },
              { id: "b", text: "Formal" },
              { id: "c", text: "Ceremonial" },
              { id: "d", text: "Informal" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Register", statement: "Register matches the relationship and purpose." },
            ],
            steps: [
              { reasoning: "Close friends = informal register.", working: "informal", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(d)** Informal",
            commonErrors: ["Using formal register with friends — it sounds stiff."],
          },
        },
        {
          id: "cie-ol-el-email-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct order of elements in an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Greeting → subject → signature → body" },
              { id: "b", text: "Signature → body → subject → greeting" },
              { id: "c", text: "Subject → greeting → body → closing → signature" },
              { id: "d", text: "Body → subject → greeting → closing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email format", statement: "Subject, greeting, body, closing, signature." },
            ],
            steps: [
              { reasoning: "Standard email order starts with subject.", working: "order", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Subject → greeting → body → closing → signature",
            commonErrors: ["Putting signature before body — wrong order."],
          },
        },
        {
          id: "cie-ol-el-email-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Compared with a formal letter, an email is generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always more formal" },
              { id: "b", text: "Required to have sender's full address" },
              { id: "c", text: "More flexible and faster to send" },
              { id: "d", text: "Slower and more expensive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email vs letter", statement: "Email is more flexible and instant." },
            ],
            steps: [
              { reasoning: "Emails are flexible and instant.", working: "flexible", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** More flexible and faster to send",
            commonErrors: ["Thinking emails must be more formal than letters."],
          },
        },
        {
          id: "cie-ol-el-email-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An email task allows 60-90 words. A student writes 105 words. How many words must be cut?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Stay within the maximum." },
            ],
            steps: [
              { reasoning: "105 - 90 = 15 words over.", working: "105 - 90 = 15", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "15",
            commonErrors: ["Using the minimum 60 instead of the maximum 90."],
          },
        },
        {
          id: "cie-ol-el-email-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An email reply must be at least 50 words. A draft is 35 words. How many more words are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Meet the minimum requirement." },
            ],
            steps: [
              { reasoning: "50 - 35 = 15 words short.", working: "50 - 35 = 15", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "15",
            commonErrors: ["Adding 50 and 35 instead of finding the difference."],
          },
        },
        {
          id: "cie-ol-el-email-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "An email has 5 required elements: subject, greeting, body, closing, signature. A student includes all except the subject and signature. How many elements are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email format", statement: "All five elements are required." },
            ],
            steps: [
              { reasoning: "Subject and signature are both missing.", working: "5 - 3 = 2", marks: 1, markCode: "AO2" },
              { reasoning: "Two elements are missing.", working: "2", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting only one missing element."],
          },
        },
        {
          id: "cie-ol-el-email-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A semi-formal email may be 70-100 words. A draft is 80 words, but the student adds a 5-word signature block and a 10-word PS. How many words can the body still grow by without exceeding the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "All additions count toward the total." },
            ],
            steps: [
              { reasoning: "80 + 5 + 10 = 95 words after additions.", working: "80 + 5 + 10 = 95", marks: 1, markCode: "AO3" },
              { reasoning: "100 - 95 = 5 words of headroom remain.", working: "100 - 95 = 5", marks: 2, markCode: "AO3" },
              { reasoning: "Body may grow by 5 words.", working: "5", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting additions count toward the total."],
          },
        },
        {
          id: "cie-ol-el-email-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the purpose of an email subject line and give one example of a good one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subject line", statement: "Brief, clear summary of content." },
            ],
            steps: [
              { reasoning: "States the purpose — summarise content briefly.", working: "purpose", marks: 1, markCode: "AO2" },
              { reasoning: "Helps recipient prioritise and search.", working: "prioritise", marks: 1, markCode: "AO2" },
              { reasoning: "Example is brief and informative, e.g. 'Meeting request: Friday 3pm'.", working: "example", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Brief clear summary; e.g. 'Meeting request: Friday 3pm'.",
            commonErrors: ["Vague subjects like 'Hi' or 'Question'."],
          },
        },
        {
          id: "cie-ol-el-email-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe how to adapt an email's register for three different recipients: a close friend, a teacher, and a company director.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "Register matches relationship and formality." },
            ],
            steps: [
              { reasoning: "Close friend: informal — slang, contractions, casual tone.", working: "friend", marks: 1, markCode: "AO2" },
              { reasoning: "Teacher: semi-formal — polite, respectful, some formality.", working: "teacher", marks: 1, markCode: "AO2" },
              { reasoning: "Director: formal — professional, objective, no slang.", working: "director", marks: 1, markCode: "AO2" },
              { reasoning: "Adaptation shown for all three recipients.", working: "adapt", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Friend=informal; teacher=semi-formal; director=formal.",
            commonErrors: ["Using the same register for all recipients."],
          },
        },
        {
          id: "cie-ol-el-email-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts about email writing.",
          parts: [
            { label: "a", prompt: "List the five standard email elements in order.", marks: 3 },
            { label: "b", prompt: "What makes a good subject line?", marks: 2 },
            { label: "c", prompt: "Name two email types and their registers.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email writing", statement: "Format, subject line, types and register." },
            ],
            steps: [
              { part: "a", reasoning: "Subject, greeting, body, closing, signature.", working: "elements", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct order stated.", working: "order", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All five included.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Brief and clear.", working: "brief", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Informative — summarises content.", working: "informative", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Formal (business) and informal (friends) are valid.", working: "types", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Registers correctly matched.", working: "register", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Two types with registers given.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) subject→greeting→body→closing→signature (b) brief+informative (c) formal/semi-formal/informal",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "All elements in order.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "2-3", descriptor: "Two types+registers.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "Incomplete.", part: "c" },
            ],
            commonErrors: ["Vague subject lines like 'Hi'."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-reports-proposals",
      title: "Reports and proposals",
      skill: "Write structured reports and proposals.",
      lesson: {
        sections: [
          {
            heading: "Report structure",
            body: "Title → introduction (purpose) → findings/method → conclusion → recommendations. Factual, objective.",
          },
          {
            heading: "Proposal structure",
            body: "Title → introduction (problem) → proposed solution → benefits → implementation → conclusion.",
          },
          {
            heading: "Language features",
            body: "Formal register, passive voice, technical terms, statistics, organised paragraphs, headings.",
          },
        ],
        keyFormulas: [
          { name: "Reports/proposals", statement: "Report: title→intro→findings→conclusion→recommendations; proposal: problem→solution→benefits→implementation." },
        ],
        workedExample: {
          problem: "Write a proposal for school recycling programme.",
          solution: "Problem (waste) → solution (recycling bins) → benefits (environment, cost) → implementation (timeline) → conclusion.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal opinion" },
              { id: "b", text: "Factual account" },
              { id: "c", text: "Story" },
              { id: "d", text: "Poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "Factual account of events/findings." },
            ],
            steps: [
              { reasoning: "Report = factual.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Factual account",
            commonErrors: ["Choosing (b) — reports are objective."],
          },
        },
        {
          id: "cie-ol-el-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two report sections.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sections", statement: "Introduction, findings, conclusion, recommendations." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "sections", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Introduction, findings, conclusion, recommendations (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the structure of a proposal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proposal", statement: "Problem→solution→benefits→implementation→conclusion." },
            ],
            steps: [
              { reasoning: "Introduce problem clearly.", working: "problem", marks: 1, markCode: "AO2" },
              { reasoning: "Propose solution with details.", working: "solution", marks: 1, markCode: "AO2" },
              { reasoning: "Explain benefits and implementation plan.", working: "benefits", marks: 1, markCode: "AO2" },
              { reasoning: "Structure clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Problem→solution→benefits→implementation→conclusion.",
            commonErrors: ["Missing problem — context needed."],
          },
        },
        {
          id: "cie-ol-el-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write and evaluate reports/proposals.",
          parts: [
            { label: "a", prompt: "Define report.", marks: 1 },
            { label: "b", prompt: "Describe report structure.", marks: 3 },
            { label: "c", prompt: "Describe proposal structure.", marks: 3 },
            { label: "d", prompt: "Name language features.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reports/proposals", statement: "Factual reports, structured proposals, formal language." },
            ],
            steps: [
              { part: "a", reasoning: "Factual account of events/findings.", working: "definition", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Title→intro→findings→conclusion→recommendations.", working: "report", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Problem→solution→benefits→implementation→conclusion.", working: "proposal", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Formal register, passive voice, technical terms, statistics.", working: "features", marks: 1, markCode: "AO1" },
              { part: "d", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) factual (b) report structure (c) proposal structure (d) formal features",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Complete.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple features.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "d" },
            ],
            commonErrors: ["Proposal without problem context — needs justification."],
          },
        },
        {
          id: "cie-ol-el-rp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main language feature of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Factual and objective" },
              { id: "b", text: "Rhyming and rhythmic" },
              { id: "c", text: "Emotional and personal" },
              { id: "d", text: "Conversational slang" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report", statement: "Factual, objective register." },
            ],
            steps: [
              { reasoning: "Reports are factual and objective.", working: "factual", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Factual and objective",
            commonErrors: ["Choosing emotional — reports avoid opinion."],
          },
        },
        {
          id: "cie-ol-el-rp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which section of a report comes LAST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction" },
              { id: "b", text: "Title" },
              { id: "c", text: "Recommendations" },
              { id: "d", text: "Findings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Title→intro→findings→conclusion→recommendations." },
            ],
            steps: [
              { reasoning: "Recommendations close the report.", working: "recommendations", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Recommendations",
            commonErrors: ["Choosing introduction — that opens the report."],
          },
        },
        {
          id: "cie-ol-el-rp-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A proposal suggests installing solar panels. Which section should state the problem being solved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion only" },
              { id: "b", text: "Implementation timeline" },
              { id: "c", text: "Introduction" },
              { id: "d", text: "Benefits only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proposal", statement: "Problem is introduced first, then solution." },
            ],
            steps: [
              { reasoning: "Problem goes in the introduction.", working: "problem", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** Introduction",
            commonErrors: ["Skipping problem context — proposals need justification."],
          },
        },
        {
          id: "cie-ol-el-rp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a typical language feature of reports and proposals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First-person storytelling" },
              { id: "b", text: "Slang and contractions" },
              { id: "c", text: "Passive voice and technical terms" },
              { id: "d", text: "Rhyme and alliteration" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Language features", statement: "Formal register, passive voice, technical terms." },
            ],
            steps: [
              { reasoning: "Passive voice and technical terms are typical.", working: "passive", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Passive voice and technical terms",
            commonErrors: ["Choosing slang — reports use formal register."],
          },
        },
        {
          id: "cie-ol-el-rp-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the PURPOSE of the recommendations section in a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To repeat the title" },
              { id: "b", text: "To list the author's hobbies" },
              { id: "c", text: "To suggest actions based on findings" },
              { id: "d", text: "To give a personal opinion only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recommendations", statement: "Suggested actions based on the findings." },
            ],
            steps: [
              { reasoning: "Recommendations = actions from findings.", working: "actions", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** To suggest actions based on findings",
            commonErrors: ["Thinking recommendations repeat findings verbatim."],
          },
        },
        {
          id: "cie-ol-el-rp-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A report task allows 200-250 words. A student writes 280 words. How many words must be cut?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Stay within the maximum." },
            ],
            steps: [
              { reasoning: "280 - 250 = 30 words over.", working: "280 - 250 = 30", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "30",
            commonErrors: ["Using 200 instead of 250 as the maximum."],
          },
        },
        {
          id: "cie-ol-el-rp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proposal must be at least 180 words. A draft is 145 words. How many more words are needed?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 35 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Meet the minimum requirement." },
            ],
            steps: [
              { reasoning: "180 - 145 = 35 words short.", working: "180 - 145 = 35", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "35",
            commonErrors: ["Adding instead of finding the difference."],
          },
        },
        {
          id: "cie-ol-el-rp-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "A report has 5 sections: title, introduction, findings, conclusion, recommendations. A draft omits the conclusion. How many sections are missing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "All five sections are required." },
            ],
            steps: [
              { reasoning: "Five sections required; conclusion is omitted.", working: "5 - 4 = 1", marks: 1, markCode: "AO2" },
              { reasoning: "One section is missing.", working: "1", marks: 2, markCode: "AO3" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting the title as a body section."],
          },
        },
        {
          id: "cie-ol-el-rp-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A proposal may be 150-200 words. A draft is 175 words, but the student adds a 10-word title and a 5-word heading. How many words can the body still grow by without exceeding the limit?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Word limit", statement: "Titles and headings count toward the total." },
            ],
            steps: [
              { reasoning: "175 + 10 + 5 = 190 words after additions.", working: "175 + 10 + 5 = 190", marks: 1, markCode: "AO3" },
              { reasoning: "200 - 190 = 10 words of headroom remain.", working: "200 - 190 = 10", marks: 2, markCode: "AO3" },
              { reasoning: "Body may grow by 10 words.", working: "10", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "10",
            commonErrors: ["Forgetting titles count toward the limit."],
          },
        },
        {
          id: "cie-ol-el-rp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the structure of a report and the purpose of each main section.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report structure", statement: "Title, intro, findings, conclusion, recommendations." },
            ],
            steps: [
              { reasoning: "Title names the report; introduction states purpose.", working: "intro", marks: 1, markCode: "AO2" },
              { reasoning: "Findings present facts/method; conclusion summarises.", working: "findings", marks: 1, markCode: "AO2" },
              { reasoning: "Recommendations suggest actions from the findings.", working: "recommendations", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Title→intro→findings→conclusion→recommendations.",
            commonErrors: ["Confusing findings with recommendations."],
          },
        },
        {
          id: "cie-ol-el-rp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between a report and a proposal, including their structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Report vs proposal", statement: "Report presents findings; proposal argues for a solution." },
            ],
            steps: [
              { reasoning: "Report: factual account — title, intro, findings, conclusion, recommendations.", working: "report", marks: 1, markCode: "AO2" },
              { reasoning: "Proposal: persuasive — problem, solution, benefits, implementation.", working: "proposal", marks: 1, markCode: "AO2" },
              { reasoning: "Report is descriptive; proposal is argumentative.", working: "difference", marks: 1, markCode: "AO2" },
              { reasoning: "Both use formal register and organised structure.", working: "formal", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Report=factual findings; proposal=problem→solution→benefits.",
            commonErrors: ["Treating them as the same genre."],
          },
        },
        {
          id: "cie-ol-el-rp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Answer all parts about reports and proposals.",
          parts: [
            { label: "a", prompt: "State the five sections of a report in order.", marks: 3 },
            { label: "b", prompt: "What comes first in a proposal?", marks: 2 },
            { label: "c", prompt: "Name two language features of reports/proposals.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reports/proposals", statement: "Structure and formal language features." },
            ],
            steps: [
              { part: "a", reasoning: "Title, introduction, findings, conclusion, recommendations.", working: "sections", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Correct order.", working: "order", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "All five included.", working: "all", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Problem statement in the introduction.", working: "problem", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Accurate.", working: "accurate", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Passive voice, technical terms, statistics, formal register.", working: "features", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Second valid feature.", working: "features2", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Two valid features.", working: "two", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) title→intro→findings→conclusion→recommendations (b) problem (c) passive voice/technical terms",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "All sections in order.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "2-3", descriptor: "Two features.", part: "c" },
              { level: "Level 1", marks: "0-1", descriptor: "One/few.", part: "c" },
            ],
            commonErrors: ["Putting benefits before problem in a proposal."],
          },
        },
      ],
    },
    {
      id: "cie-ol-el-transactional-exam",
      title: "Transactional writing exam skills",
      skill: "Apply transactional writing techniques in exams.",
      lesson: {
        sections: [
          {
            heading: "Reading the task",
            body: "Identify purpose, audience, format requirements. Check word count. Note specific content requirements.",
          },
          {
            heading: "Planning",
            body: "Brainstorm ideas, structure response, draft mentally before writing. Check format conventions.",
          },
          {
            heading: "Common mistakes",
            body: "Wrong register, missing format elements, ignoring word limits, not addressing purpose, poor structure.",
          },
        ],
        keyFormulas: [
          { name: "Exam skills", statement: "Identify purpose/audience/format→plan→write→check conventions." },
        ],
        workedExample: {
          problem: "How to approach directed writing task?",
          solution: "Read task → identify purpose/audience/format → plan structure → write → check word count and format.",
        },
      },
      questions: [
        {
          id: "cie-ol-el-te-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you identify first in directed writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Font" },
              { id: "b", text: "Purpose and audience" },
              { id: "c", text: "Word count only" },
              { id: "d", text: "Paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Task analysis", statement: "Purpose and audience first." },
            ],
            steps: [
              { reasoning: "Purpose/audience first.", working: "purpose", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** Purpose and audience",
            commonErrors: ["Starting to write — need to analyse task."],
          },
        },
        {
          id: "cie-ol-el-te-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two common transactional writing mistakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Mistakes", statement: "Wrong register, missing format, ignoring word limits." },
            ],
            steps: [
              { reasoning: "Any two valid.", working: "mistakes", marks: 1, markCode: "AO2" },
              { reasoning: "Correct.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Wrong register, missing format, ignoring word limits, not addressing purpose (any two).",
            commonErrors: ["Only one — need multiple."],
          },
        },
        {
          id: "cie-ol-el-te-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How to plan a transactional writing response?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "Identify requirements→brainstorm→structure→check format." },
            ],
            steps: [
              { reasoning: "Identify purpose, audience, format, word count.", working: "identify", marks: 1, markCode: "AO2" },
              { reasoning: "Brainstorm ideas and structure response.", working: "brainstorm", marks: 1, markCode: "AO2" },
              { reasoning: "Check format conventions before writing.", working: "check", marks: 1, markCode: "AO2" },
              { reasoning: "Process clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Identify→brainstorm→structure→check format.",
            commonErrors: ["Writing without planning — loses marks."],
          },
        },
        {
          id: "cie-ol-el-te-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Apply transactional writing exam skills.",
          parts: [
            { label: "a", prompt: "What to identify first?", marks: 1 },
            { label: "b", prompt: "Name common mistakes.", marks: 2 },
            { label: "c", prompt: "How to plan response?", marks: 3 },
            { label: "d", prompt: "How to check work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Exam skills", statement: "Task analysis, mistakes, planning, checking." },
            ],
            steps: [
              { part: "a", reasoning: "Purpose and audience first.", working: "identify", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Wrong register, missing format, word limits, purpose.", working: "mistakes", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Multiple valid.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Identify→brainstorm→structure→check format.", working: "plan", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Multiple steps.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Accurate.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Check format, word count, register, complete all requirements.", working: "check", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Multiple checks.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) purpose/audience (b) mistakes (c) identify→plan→check (d) format/word count/register",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Multiple mistakes.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Process clear.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Checks clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["No planning — loses marks on structure."],
          },
        },
    {
      id: "cie-ol-el-te-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is the FIRST thing to do when given a directed writing task?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Check the clock only" },
          { id: "b", text: "Read the task carefully and identify requirements" },
          { id: "c", text: "Start writing immediately" },
          { id: "d", text: "Write the conclusion first" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Task analysis", statement: "Identify purpose, audience, format, word count first." },
        ],
        steps: [
          { reasoning: "Analyse the task before writing.", working: "analyse", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Read the task carefully and identify requirements",
        commonErrors: ["Writing without reading — loses marks on requirements."],
      },
    },
    {
      id: "cie-ol-el-te-q6",
      difficulty: "core",
      totalMarks: 1,
      stem: "A task says 'Write a formal letter to the school principal.' Which format element is REQUIRED?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A subject line only" },
          { id: "b", text: "Sender's address and recipient's address" },
          { id: "c", text: "A postscript only" },
          { id: "d", text: "No format needed" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Format", statement: "Formal letters need address blocks." },
        ],
        steps: [
          { reasoning: "Formal letter requires both addresses.", working: "addresses", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Sender's address and recipient's address",
        commonErrors: ["Omitting addresses — key format marks lost."],
      },
    },
    {
      id: "cie-ol-el-te-q7",
      difficulty: "challenge",
      totalMarks: 1,
      stem: "A task requires a 'semi-formal email'. What does 'semi-formal' mean?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Completely informal with slang" },
          { id: "b", text: "Legal contract language" },
          { id: "c", text: "Poetic and decorative" },
          { id: "d", text: "Polite but less stiff than fully formal" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Semi-formal", statement: "Middle register — polite but approachable." },
        ],
        steps: [
          { reasoning: "Semi-formal = polite but less stiff.", working: "semi", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(d)** Polite but less stiff than fully formal",
        commonErrors: ["Confusing semi-formal with informal."],
      },
    },
    {
      id: "cie-ol-el-te-q8",
      difficulty: "core",
      totalMarks: 1,
      stem: "After writing a transactional piece, what should you ALWAYS check?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Only spelling" },
          { id: "b", text: "Word count and format conventions" },
          { id: "c", text: "Nothing — submit immediately" },
          { id: "d", text: "Only handwriting" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Checking", statement: "Verify word count, format, register and completeness." },
        ],
        steps: [
          { reasoning: "Check word count and format after writing.", working: "check", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Word count and format conventions",
        commonErrors: ["Skipping the check — loses easy marks."],
      },
    },
    {
      id: "cie-ol-el-te-q9",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which is a common transactional writing mistake?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Including a greeting" },
          { id: "b", text: "Wrong register for the audience" },
          { id: "c", text: "Stating the purpose" },
          { id: "d", text: "Using paragraphs" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Mistakes", statement: "Wrong register is a common error." },
        ],
        steps: [
          { reasoning: "Wrong register fails task requirements.", working: "register", marks: 1, markCode: "AO1" },
        ],
        finalAnswer: "**(b)** Wrong register for the audience",
        commonErrors: ["Thinking paragraphs or greetings are mistakes."],
      },
    },
    {
      id: "cie-ol-el-te-q10",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "A writing task allows 80-120 words. A student writes 135 words. How many words must be cut?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 15 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Stay within maximum." },
        ],
        steps: [
          { reasoning: "135 - 120 = 15 words over.", working: "135 - 120 = 15", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "15",
        commonErrors: ["Using 80 instead of 120 as maximum."],
      },
    },
    {
      id: "cie-ol-el-te-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "A task requires at least 100 words. A student writes 75. How many more words are needed?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 25 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Meet the minimum." },
        ],
        steps: [
          { reasoning: "100 - 75 = 25 words short.", working: "100 - 75 = 25", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "25",
        commonErrors: ["Adding instead of subtracting."],
      },
    },
    {
      id: "cie-ol-el-te-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "A directed writing task lists 4 requirements: purpose, audience, format, word count. A student addresses purpose, audience and word count but ignores format. How many requirements are unmet?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 1 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Requirements", statement: "All listed requirements must be addressed." },
        ],
        steps: [
          { reasoning: "Format is the only unmet requirement.", working: "4 - 3 = 1", marks: 1, markCode: "AO2" },
          { reasoning: "One requirement is unmet.", working: "1", marks: 2, markCode: "AO3" },
        ],
        finalAnswer: "1",
        commonErrors: ["Counting addressed requirements as unmet."],
      },
    },
    {
      id: "cie-ol-el-te-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "A task allows 90-130 words. A draft is 110 words, and the student adds a 6-word subject line. How many words can the body still grow by without exceeding the limit?",
      response: {
        type: "numeric",
        parts: [
          { label: "a", answer: 14 },
        ],
      },
      markscheme: {
        principles: [
          { kind: "convention", name: "Word limit", statement: "Additions count toward total." },
        ],
        steps: [
          { reasoning: "110 + 6 = 116 words after addition.", working: "110 + 6 = 116", marks: 1, markCode: "AO3" },
          { reasoning: "130 - 116 = 14 words of headroom remain.", working: "130 - 116 = 14", marks: 2, markCode: "AO3" },
          { reasoning: "Body may grow by 14 words.", working: "14", marks: 1, markCode: "AO2" },
        ],
        finalAnswer: "14",
        commonErrors: ["Forgetting the subject line counts."],
      },
    },
    {
      id: "cie-ol-el-te-q14",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the recommended process for approaching a directed writing task.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "skill", name: "Process", statement: "Analyse→plan→write→check." },
        ],
        steps: [
          { reasoning: "Analyse: identify purpose, audience, format, word count.", working: "analyse", marks: 1, markCode: "AO2" },
          { reasoning: "Plan: brainstorm and structure response.", working: "plan", marks: 1, markCode: "AO2" },
          { reasoning: "Write then check format, word count, register.", working: "check", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Analyse→plan→write→check.",
        commonErrors: ["Skipping analysis — leads to wrong register/format."],
      },
    },
    {
      id: "cie-ol-el-te-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Explain why checking word count and format before submitting is important in directed writing.",
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "skill", name: "Checking", statement: "Word limits and format conventions are marked." },
        ],
        steps: [
          { reasoning: "Exceeding word limit loses marks.", working: "limit", marks: 1, markCode: "AO2" },
          { reasoning: "Missing format elements (addresses, salutation) loses marks.", working: "format", marks: 1, markCode: "AO2" },
          { reasoning: "Wrong register fails the task requirements.", working: "register", marks: 1, markCode: "AO2" },
          { reasoning: "Checking ensures all requirements are met.", working: "met", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "Word count, format and register are all assessed — check before submitting.",
        commonErrors: ["Thinking only content matters."],
      },
    },
    {
      id: "cie-ol-el-te-q16",
      difficulty: "challenge",
      totalMarks: 8,
      stem: "Answer all parts about transactional writing exam skills.",
      parts: [
        { label: "a", prompt: "Name four things to identify before writing.", marks: 2 },
        { label: "b", prompt: "Name two common mistakes to avoid.", marks: 2 },
        { label: "c", prompt: "List the steps of the writing process in order.", marks: 2 },
        { label: "d", prompt: "What should you check after writing?", marks: 2 },
      ],
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "skill", name: "Exam skills", statement: "Analysis, mistakes, process, checking." },
        ],
        steps: [
          { part: "a", reasoning: "Purpose, audience, format, word count.", working: "identify", marks: 1, markCode: "AO1" },
          { part: "a", reasoning: "Four elements listed.", working: "four", marks: 1, markCode: "AO3" },
          { part: "b", reasoning: "Wrong register, missing format, word limits, purpose.", working: "mistakes", marks: 1, markCode: "AO1" },
          { part: "b", reasoning: "Two valid mistakes.", working: "two", marks: 1, markCode: "AO3" },
          { part: "c", reasoning: "Analyse, plan, write, check — correct order.", working: "process", marks: 1, markCode: "AO1" },
          { part: "c", reasoning: "All four steps.", working: "all", marks: 1, markCode: "AO3" },
          { part: "d", reasoning: "Word count, format, register, completeness.", working: "check", marks: 1, markCode: "AO1" },
          { part: "d", reasoning: "Multiple checks listed.", working: "multiple", marks: 1, markCode: "AO3" },
        ],
        finalAnswer: "(a) purpose/audience/format/word count (b) wrong register/missing format (c) analyse→plan→write→check (d) word count/format/register",
        levels: [
          { level: "Level 2", marks: "1-2", descriptor: "Four elements.", part: "a" },
          { level: "Level 1", marks: "0", descriptor: "Few.", part: "a" },
          { level: "Level 2", marks: "1-2", descriptor: "Two mistakes.", part: "b" },
          { level: "Level 1", marks: "0", descriptor: "One.", part: "b" },
          { level: "Level 2", marks: "1-2", descriptor: "Correct order.", part: "c" },
          { level: "Level 1", marks: "0", descriptor: "Wrong order.", part: "c" },
          { level: "Level 2", marks: "1-2", descriptor: "Multiple checks.", part: "d" },
          { level: "Level 1", marks: "0", descriptor: "None/vague.", part: "d" },
        ],
        commonErrors: ["No planning — loses structure marks."],
      },
      },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-el-unit5-notes",
      title: "Unit 5 — revision notes",
      summary: "Formal letters, emails, reports, proposals, exam skills.",
      sections: [
        {
          heading: "Transactional writing",
          body: "Letters: format+valedictions. Emails: subject+flexibility. Reports: factual structure. Proposals: problem→solution→benefits. Exam: identify→plan→check.",
        },
      ],
    },
  ],
};
