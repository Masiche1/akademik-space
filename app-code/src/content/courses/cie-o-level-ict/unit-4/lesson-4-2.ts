import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olict-u4-lesson-4-2",
  code: "4-2",
  title: "Network Security Defences",
  goal: "I CAN describe defences against network threats: firewalls, antivirus, encryption and access control.",
  standards: ["7014 5.2"],
  vocabulary: [
    { term: "Firewall", definition: "Hardware/software barrier filtering incoming/outgoing network traffic." },
    { term: "Antivirus software", definition: "Program detecting and removing malware." },
    { term: "Encryption", definition: "Scrambling data so only authorised parties can read it." },
    { term: "Password protection", definition: "Requiring credentials to access systems/data." },
    { term: "Access rights/permissions", definition: "Rules controlling who can view/edit/delete data." },
    { term: "Backup", definition: "Copy of data kept safe for recovery." },
    { term: "Two-factor authentication (2FA)", definition: "Login requiring two verification methods." },
  ],
  concepts: [
    {
      id: "olict-u4-defences",
      title: "Defending networks",
      skill: "Describe firewalls, antivirus, encryption and access control.",
      lesson: {
        sections: [
          { heading: "Technical defences", body: "- **Firewall**: filters traffic, blocks suspicious connections.\n- **Antivirus**: scans for and removes malware; needs regular updates.\n- **Encryption**: scrambles data in transit (HTTPS) and at rest.\n- **2FA**: password + second factor (code, fingerprint) — stops stolen-password logins." },
          { heading: "Access control", body: "- **Passwords**: strong, unique, changed regularly.\n- **Permissions**: users only access what they need (least privilege).\n- **User accounts**: individual logins for accountability." },
          { heading: "Backups", body: "Regular backups to separate storage protect against ransomware, hardware failure and accidents — test restores periodically." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A company wants to protect customer data. Suggest three defences.",
          solution: "Firewall + antivirus on all machines; encryption of stored data; access permissions limiting staff to needed files; regular backups.",
        },
      },
      questions: [
        {
          id: "olict-u4-df-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A firewall's job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Filter network traffic" },
            { id: "b", text: "Store backups" },
            { id: "c", text: "Encrypt files" },
            { id: "d", text: "Print documents" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Firewall", statement: "Filters traffic." }], steps: [{ reasoning: "Firewall filters.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Filter traffic" },
        },
        {
          id: "olict-u4-df-q2", difficulty: "core", totalMarks: 2,
          stem: "What does encryption do?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Encryption", statement: "Scrambles data." }], steps: [
            { reasoning: "Converts data to unreadable form.", marks: 1, markCode: "M" },
            { reasoning: "Only key holders can decrypt.", marks: 1, markCode: "A" },
          ], finalAnswer: "Scrambles data so only authorised parties with the key can read it." },
        },
        {
          id: "olict-u4-df-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of two-factor authentication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "2FA", statement: "Two verification steps." }], steps: [
            { reasoning: "Stops attackers with just a stolen password.", marks: 1, markCode: "M" },
            { reasoning: "Second factor (code/device) adds layer.", marks: 1, markCode: "M" },
            { reasoning: "Reduces account takeover risk.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Requires a second verification — stolen passwords alone can't grant access." },
        },
        {
          id: "olict-u4-df-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Security defences review.",
          parts: [
            { label: "a", prompt: "What does a firewall do?", marks: 2 },
            { label: "b", prompt: "What does antivirus software do?", marks: 2 },
            { label: "c", prompt: "What is two-factor authentication?", marks: 2 },
            { label: "d", prompt: "Why are backups important for security?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Defences", statement: "Firewall, AV, 2FA, backups." },
          ], steps: [
            { part: "a", reasoning: "Filters network traffic.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Blocks suspicious connections.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Detects/removes malware.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Needs regular updates.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Two verification methods.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Password + code/fingerprint.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Protects against ransomware/loss.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Allows data recovery.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) filters traffic (b) removes malware (c) two factors (d) recovery from attacks" },
        },
        {
          id: "olict-u4-df-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Antivirus software needs regular updates because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Updates are free" },
            { id: "b", text: "New malware threats appear constantly" },
            { id: "c", text: "The licence expires daily" },
            { id: "d", text: "It slows the computer" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Antivirus updates", statement: "New threats." }], steps: [{ reasoning: "Updates add signatures for new malware.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** New malware threats appear constantly" },
        },
        {
          id: "olict-u4-df-q6", difficulty: "core", totalMarks: 1,
          stem: "Which is an example of a second factor in 2FA?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Your username" },
            { id: "b", text: "A code sent to your phone" },
            { id: "c", text: "Your date of birth" },
            { id: "d", text: "Your email address" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "2FA", statement: "Second verification." }], steps: [{ reasoning: "Phone code is a second factor.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A code sent to your phone" },
        },
        {
          id: "olict-u4-df-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Antivirus software scans 200 files per minute. How many files does it scan in 15 minutes?",
          response: { type: "numeric", parts: [{ label: "files", answer: 3000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Scan rate", statement: "Rate × time." }], steps: [
            { reasoning: "200 × 15 = 3 000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 3 000 files.", marks: 1, markCode: "A" },
          ], finalAnswer: "3 000 files" },
        },
        {
          id: "olict-u4-df-q8", difficulty: "core", totalMarks: 2,
          stem: "What is 'least privilege' in access control?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Least privilege", statement: "Minimum needed access." }], steps: [
            { reasoning: "Users get only the access they need.", marks: 1, markCode: "M" },
            { reasoning: "Limits damage if accounts are compromised.", marks: 1, markCode: "A" },
          ], finalAnswer: "Giving users only the minimum access required for their job." },
        },
        {
          id: "olict-u4-df-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Encryption mainly protects…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Screen size" },
            { id: "b", text: "Print quality" },
            { id: "c", text: "Data confidentiality" },
            { id: "d", text: "Computer speed" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Encryption", statement: "Unreadable data." }], steps: [{ reasoning: "Encryption keeps data secret.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Data confidentiality" },
        },
        {
          id: "olict-u4-df-q10", difficulty: "core", totalMarks: 2,
          stem: "A 4 GB file is backed up every day for one week. How much storage do the backups use in total?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 28, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "Backup storage", statement: "File × days." }], steps: [
            { reasoning: "4 GB × 7 days = 28 GB.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 28 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "28 GB" },
        },
        {
          id: "olict-u4-df-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why encryption is important when paying online.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Encryption use", statement: "Protects data in transit." }], steps: [
            { reasoning: "Card details travel over the internet.", marks: 1, markCode: "M" },
            { reasoning: "Encryption scrambles the data.", marks: 1, markCode: "M" },
            { reasoning: "Interceptors cannot read card numbers.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Encryption scrambles card details so hackers cannot steal them during transmission." },
        },
        {
          id: "olict-u4-df-q12", difficulty: "core", totalMarks: 1,
          stem: "If ransomware encrypts all files on a company server, the best defence is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A bigger screen" },
            { id: "b", text: "Recent backups" },
            { id: "c", text: "A faster mouse" },
            { id: "d", text: "More staff" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Backups", statement: "Recovery from ransomware." }], steps: [{ reasoning: "Backups allow restoration.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Recent backups" },
        },
        {
          id: "olict-u4-df-q13", difficulty: "core", totalMarks: 2,
          stem: "A firewall blocks 90% of 10 000 attack attempts. How many attempts get through?",
          response: { type: "numeric", parts: [{ label: "attempts", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Firewall block rate", statement: "10% get through." }], steps: [
            { reasoning: "10% of 10 000 = 1 000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1 000 attempts.", marks: 1, markCode: "A" },
          ], finalAnswer: "1 000 attempts" },
        },
        {
          id: "olict-u4-df-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Access permissions mainly control…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Screen resolution" },
            { id: "b", text: "Internet speed" },
            { id: "c", text: "Battery life" },
            { id: "d", text: "Who can view or edit data" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Permissions", statement: "Access rules." }], steps: [{ reasoning: "Permissions govern access.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Who can view or edit data" },
        },
        {
          id: "olict-u4-df-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two benefits of controlling access with individual user accounts.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Access control", statement: "Accounts = control." }], steps: [
            { reasoning: "Limits each user to needed files (least privilege).", marks: 1, markCode: "M" },
            { reasoning: "Provides accountability — actions traceable.", marks: 1, markCode: "M" },
            { reasoning: "Easy to revoke access when staff leave.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Individual accounts limit access to what is needed and make user actions traceable." },
        },
        {
          id: "olict-u4-df-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is NOT a security defence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Installing antivirus" },
            { id: "b", text: "Writing your password on a sticky note" },
            { id: "c", text: "Using a firewall" },
            { id: "d", text: "Encrypting stored data" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Defences", statement: "vs bad practice." }], steps: [{ reasoning: "Sticky note is a risk, not a defence.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Writing your password on a sticky note" },
        },
      ],
    },
    {
      id: "olict-u4-legislation",
      title: "Data protection and legislation",
      skill: "Explain data protection laws and responsible data handling.",
      lesson: {
        sections: [
          { heading: "Data protection", body: "Organisations collecting personal data must: only collect what's needed, keep it secure, not share without permission, allow access/correction, delete when no longer needed." },
          { heading: "Key principles", body: "- **Lawfulness**: collect data fairly.\n- **Purpose limitation**: use only for stated purpose.\n- **Accuracy**: keep data correct.\n- **Storage limitation**: delete when no longer needed.\n- **Integrity/confidentiality**: protect from loss or theft." },
          { heading: "Individual rights", body: "People can request access to their data, correction of errors, and deletion ('right to be forgotten'). Breaches must be reported." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A shop's database was hacked and customer emails leaked. What should the shop do?",
          solution: "Inform affected customers, secure the system, report the breach to authorities, review security.",
        },
      },
      questions: [
        {
          id: "olict-u4-dp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Data protection laws require organisations to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sell all data" },
            { id: "b", text: "Collect unlimited data" },
            { id: "c", text: "Share data freely" },
            { id: "d", text: "Keep personal data secure" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Data protection", statement: "Secure personal data." }], steps: [{ reasoning: "Keep data secure.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Keep data secure" },
        },
        {
          id: "olict-u4-dp-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the 'right to be forgotten'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Right to be forgotten", statement: "Request data deletion." }], steps: [
            { reasoning: "Individuals can request data deletion.", marks: 1, markCode: "M" },
            { reasoning: "When no longer needed/consented.", marks: 1, markCode: "A" },
          ], finalAnswer: "The right to request deletion of personal data when it's no longer needed." },
        },
        {
          id: "olict-u4-dp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two responsibilities organisations have when collecting personal data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Data duties", statement: "Collect fairly, protect data." }], steps: [
            { reasoning: "Collect only what's needed, fairly.", marks: 1, markCode: "M" },
            { reasoning: "Keep data secure from breaches.", marks: 1, markCode: "M" },
            { reasoning: "Use only for stated purpose.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Collect data fairly/minimally, keep it secure, use only for the stated purpose." },
        },
        {
          id: "olict-u4-dp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Data protection review.",
          parts: [
            { label: "a", prompt: "What is data protection?", marks: 2 },
            { label: "b", prompt: "Name two data protection principles.", marks: 2 },
            { label: "c", prompt: "What is the 'right to be forgotten'?", marks: 2 },
            { label: "d", prompt: "What should an organisation do after a data breach?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Data protection", statement: "Principles, rights, breach response." },
          ], steps: [
            { part: "a", reasoning: "Laws protecting personal data.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Collect minimally.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Keep secure/use fairly.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Right to request deletion.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Notify affected people.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Report to authorities.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Fix security.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) protects personal data (b) minimal+secure (c) delete data (d) notify+report+fix" },
        },
        {
          id: "olict-u4-dp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Data minimisation means collecting…",
          response: { type: "mcq", choices: [
            { id: "a", text: "As much data as possible" },
            { id: "b", text: "Data from other companies" },
            { id: "c", text: "Only the data that is needed" },
            { id: "d", text: "No data at all" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Data minimisation", statement: "Only what's needed." }], steps: [{ reasoning: "Collect only necessary data.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Only the data that is needed" },
        },
        {
          id: "olict-u4-dp-q6", difficulty: "core", totalMarks: 1,
          stem: "Purpose limitation means data should only be used…",
          response: { type: "mcq", choices: [
            { id: "a", text: "For advertising only" },
            { id: "b", text: "For the stated purpose it was collected" },
            { id: "c", text: "Never" },
            { id: "d", text: "For any purpose" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Purpose limitation", statement: "Stated use only." }], steps: [{ reasoning: "Use only for stated purpose.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** For the stated purpose it was collected" },
        },
        {
          id: "olict-u4-dp-q7", difficulty: "foundation", totalMarks: 2,
          stem: "An organisation is allowed to keep customer records for 7 years. How many months is this retention period?",
          response: { type: "numeric", parts: [{ label: "months", answer: 84 }] },
          markscheme: { principles: [{ kind: "principle", name: "Retention", statement: "Years → months." }], steps: [
            { reasoning: "7 × 12 = 84.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 84 months.", marks: 1, markCode: "A" },
          ], finalAnswer: "84 months" },
        },
        {
          id: "olict-u4-dp-q8", difficulty: "core", totalMarks: 2,
          stem: "What does the data accuracy principle require?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Accuracy", statement: "Keep data correct." }], steps: [
            { reasoning: "Personal data must be kept accurate.", marks: 1, markCode: "M" },
            { reasoning: "Errors must be corrected when found.", marks: 1, markCode: "A" },
          ], finalAnswer: "Organisations must keep personal data accurate and correct errors." },
        },
        {
          id: "olict-u4-dp-q9", difficulty: "foundation", totalMarks: 1,
          stem: "After a serious data breach, an organisation must…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Delete all records" },
            { id: "b", text: "Report it and inform affected people" },
            { id: "c", text: "Hide it" },
            { id: "d", text: "Ignore it" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Breach reporting", statement: "Notify + report." }], steps: [{ reasoning: "Breach must be reported.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Report it and inform affected people" },
        },
        {
          id: "olict-u4-dp-q10", difficulty: "core", totalMarks: 2,
          stem: "A breach affects 12 000 customers out of a total of 50 000. What percentage of customers were affected?",
          response: { type: "numeric", parts: [{ label: "percent", answer: 24, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Percentage", statement: "Part/whole × 100." }], steps: [
            { reasoning: "12 000 ÷ 50 000 = 0.24.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 24%.", marks: 1, markCode: "A" },
          ], finalAnswer: "24%" },
        },
        {
          id: "olict-u4-dp-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why organisations must report data breaches.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Breach reporting", statement: "Transparency + protection." }], steps: [
            { reasoning: "Affected people can take protective steps.", marks: 1, markCode: "M" },
            { reasoning: "Law requires reporting to authorities.", marks: 1, markCode: "M" },
            { reasoning: "Promotes accountability and trust.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Reporting lets affected people protect themselves and holds organisations accountable." },
        },
        {
          id: "olict-u4-dp-q12", difficulty: "core", totalMarks: 1,
          stem: "Storage limitation means organisations should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sell old data" },
            { id: "b", text: "Delete data when no longer needed" },
            { id: "c", text: "Keep data forever" },
            { id: "d", text: "Share data freely" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Storage limitation", statement: "Delete when done." }], steps: [{ reasoning: "Delete when no longer needed.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Delete data when no longer needed" },
        },
        {
          id: "olict-u4-dp-q13", difficulty: "foundation", totalMarks: 2,
          stem: "A sign-up form collects 6 fields, but the organisation only needs 4 of them. How many fields should be removed to follow data minimisation?",
          response: { type: "numeric", parts: [{ label: "fields", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Data minimisation", statement: "Collect only needed." }], steps: [
            { reasoning: "6 − 4 = 2 unneeded fields.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2 fields.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 fields" },
        },
        {
          id: "olict-u4-dp-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which action violates data protection principles?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Selling customer emails to a marketing firm" },
            { id: "b", text: "Allowing customers to view their data" },
            { id: "c", text: "Encrypting customer records" },
            { id: "d", text: "Deleting old records" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Data protection", statement: "No unauthorised sharing." }], steps: [{ reasoning: "Selling emails = misuse of data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Selling customer emails to a marketing firm" },
        },
        {
          id: "olict-u4-dp-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain 'lawfulness' and 'purpose limitation' as data protection principles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Lawfulness + purpose", statement: "Fair collection + stated use." }], steps: [
            { reasoning: "Lawfulness: collect data fairly and legally.", marks: 1, markCode: "M" },
            { reasoning: "Purpose limitation: use only for stated purpose.", marks: 1, markCode: "M" },
            { reasoning: "Together they prevent misuse of personal data.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Data must be collected fairly and used only for the purpose stated at collection." },
        },
        {
          id: "olict-u4-dp-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The 'right to access' means individuals can…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Request a copy of their personal data" },
            { id: "b", text: "Bypass passwords" },
            { id: "c", text: "Delete any file" },
            { id: "d", text: "Access any website" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Right to access", statement: "Request own data." }], steps: [{ reasoning: "Access right = get your data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Request a copy of their personal data" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u4-4-2-notes", title: "Security defences — notes", summary: "Firewalls, antivirus, encryption, 2FA and data protection.",
      sections: [
        { heading: "Defences", body: "Firewall filters traffic; antivirus removes malware; encryption scrambles data; 2FA adds a second login factor." },
        { heading: "Data protection", body: "Collect minimally, keep secure, allow access/deletion, report breaches." },
      ] },
  ],
};
