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
            { id: "a", text: "Filter network traffic" }, { id: "b", text: "Store backups" }, { id: "c", text: "Print documents" }, { id: "d", text: "Encrypt files" },
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
            { id: "a", text: "Keep personal data secure" }, { id: "b", text: "Sell all data" }, { id: "c", text: "Share data freely" }, { id: "d", text: "Collect unlimited data" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Data protection", statement: "Secure personal data." }], steps: [{ reasoning: "Keep data secure.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Keep data secure" },
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
