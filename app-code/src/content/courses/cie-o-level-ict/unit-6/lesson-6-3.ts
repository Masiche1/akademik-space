import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "olict-u6-lesson-6-3",
  code: "6-3",
  title: "ICT Revision",
  goal: "I CAN review ICT systems, devices, networks, security, software and data handling for exams.",
  standards: ["7014 All topics"],
  vocabulary: [
    { term: "ICT system", definition: "Hardware + software + data + people + procedures." },
    { term: "LAN/WAN", definition: "Local vs wide area networks." },
    { term: "Firewall", definition: "Traffic-filtering security device." },
    { term: "Malware", definition: "Malicious software." },
    { term: "URL", definition: "Web address." },
    { term: "OS", definition: "Operating system." },
    { term: "Backup", definition: "Recovery copy of data." },
  ],
  concepts: [
    {
      id: "olict-u6-revision",
      title: "ICT revision",
      skill: "Apply knowledge across all ICT topics to exam questions.",
      lesson: {
        sections: [
          { heading: "Key terms", body: "ICT system (5 components); input/output devices; storage types; LAN/WAN; protocols (TCP/IP, HTTP, HTTPS); threats (malware, phishing); defences (firewall, antivirus, encryption); internet vs WWW; software types; data lifecycle." },
          { heading: "Common exam questions", body: "- 'Define X' → memorise definitions.\n- 'Explain advantage/disadvantage' → balance benefits and drawbacks.\n- 'Suggest a device/software' → justify the choice.\n- 'Describe a process' → step-by-step (e.g. how data flows)." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A hospital wants secure online patient records. Suggest three ICT measures.",
          solution: "Encrypted storage + HTTPS access; firewall + antivirus + 2FA; access permissions + regular backups.",
        },
      },
      questions: [
        {
          id: "olict-u6-rv-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The five components of an ICT system are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "CPU, RAM, disk, screen, keyboard" },
            { id: "b", text: "Input, process, output, storage, network" },
            { id: "c", text: "Server, client, router, switch, cable" },
            { id: "d", text: "Hardware, software, data, people, procedures" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ICT system", statement: "Five components." }], steps: [{ reasoning: "Correct five.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Hardware, software, data, people, procedures" },
        },
        {
          id: "olict-u6-rv-q2", difficulty: "core", totalMarks: 2,
          stem: "What does HTTPS provide that HTTP doesn't?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "HTTPS", statement: "Encryption." }], steps: [
            { reasoning: "Encrypted data transfer.", marks: 1, markCode: "M" },
            { reasoning: "Protects against interception.", marks: 1, markCode: "A" },
          ], finalAnswer: "Encryption — data is scrambled so it can't be read in transit." },
        },
        {
          id: "olict-u6-rv-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways a school network protects student data.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Network security", statement: "Defences." }], steps: [
            { reasoning: "Firewall + antivirus block threats.", marks: 1, markCode: "M" },
            { reasoning: "Passwords/permissions control access.", marks: 1, markCode: "M" },
            { reasoning: "Backups protect against loss.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Firewalls/antivirus block attacks; passwords/permissions restrict access; backups enable recovery." },
        },
        {
          id: "olict-u6-rv-q4", difficulty: "challenge", totalMarks: 9,
          stem: "ICT final review.",
          parts: [
            { label: "a", prompt: "List the five ICT system components.", marks: 3 },
            { label: "b", prompt: "Distinguish LAN and WAN.", marks: 2 },
            { label: "c", prompt: "What does a firewall do?", marks: 1 },
            { label: "d", prompt: "Distinguish internet from WWW.", marks: 1 },
            { label: "e", prompt: "Give one ICT benefit and one drawback.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "ICT review", statement: "All topics." },
          ], steps: [
            { part: "a", reasoning: "Hardware, software, data.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "People, procedures.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "All five.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "LAN: local; WAN: wide.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Filters traffic.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Network vs web service.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Benefit: efficiency/access.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Drawback: jobs/health.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 5 components (b) local vs wide (c) filter (d) net vs web (e) benefit+drawback" },
        },
        {
          id: "olict-u6-rv-q5", difficulty: "foundation", totalMarks: 1,
          stem: "LAN stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Linked application network" },
            { id: "b", text: "Large access node" },
            { id: "c", text: "Local area network" },
            { id: "d", text: "Local address number" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "LAN", statement: "Local network." }], steps: [{ reasoning: "LAN = local area network.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Local area network" },
        },
        {
          id: "olict-u6-rv-q6", difficulty: "foundation", totalMarks: 2,
          stem: "An ICT system diagram labels 3 of its 5 components. How many components are missing?",
          response: { type: "numeric", parts: [{ label: "components", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "System components", statement: "Total − labelled." }], steps: [
            { reasoning: "5 − 3 = 2 missing.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2 components.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 components" },
        },
        {
          id: "olict-u6-rv-q7", difficulty: "core", totalMarks: 1,
          stem: "Encryption converts data into…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Plain text" },
            { id: "b", text: "An unreadable cipher" },
            { id: "c", text: "Pictures" },
            { id: "d", text: "Sound files" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Encryption", statement: "Scrambles data." }], steps: [{ reasoning: "Encryption makes data unreadable.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Unreadable cipher" },
        },
        {
          id: "olict-u6-rv-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is an input device?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Keyboard" },
            { id: "b", text: "Monitor" },
            { id: "c", text: "Speaker" },
            { id: "d", text: "Printer" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Input device", statement: "Sends data in." }], steps: [{ reasoning: "Keyboard inputs data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Keyboard" },
        },
        {
          id: "olict-u6-rv-q9", difficulty: "core", totalMarks: 2,
          stem: "A network has 8 devices and each device needs a unique IP address. How many IP addresses are needed?",
          response: { type: "numeric", parts: [{ label: "addresses", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "IP addresses", statement: "One per device." }], steps: [
            { reasoning: "One unique address per device.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 8 addresses.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 addresses" },
        },
        {
          id: "olict-u6-rv-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how malware can enter a computer system and name one defence against it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Malware defence", statement: "Entry + protection." }], steps: [
            { reasoning: "Malware enters via infected email attachments or downloads.", marks: 1, markCode: "M" },
            { reasoning: "It can also spread through unpatched software or phishing links.", marks: 1, markCode: "M" },
            { reasoning: "Antivirus software or a firewall blocks it.", marks: 1, markCode: "M" },
            { reasoning: "Entry method and defence both given.", marks: 1, markCode: "A" },
          ], finalAnswer: "Malware enters via attachments/phishing; antivirus and firewalls defend against it." },
        },
        {
          id: "olict-u6-rv-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A backup is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A network cable" },
            { id: "b", text: "A recovery copy of data" },
            { id: "c", text: "A type of virus" },
            { id: "d", text: "A web browser" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Backup", statement: "Recovery copy." }], steps: [{ reasoning: "Backup = recovery copy.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Recovery copy" },
        },
        {
          id: "olict-u6-rv-q12", difficulty: "core", totalMarks: 2,
          stem: "A student revises 45 minutes per day, 5 days a week. How many minutes do they revise in total?",
          response: { type: "numeric", parts: [{ label: "minutes", answer: 225, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "principle", name: "Study time", statement: "Daily × days." }], steps: [
            { reasoning: "45 × 5 = 225 minutes.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 225 minutes.", marks: 1, markCode: "A" },
          ], finalAnswer: "225 minutes" },
        },
        {
          id: "olict-u6-rv-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Describe three steps a user should take to stay safe online.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Online safety", statement: "Password + updates + verify." }], steps: [
            { reasoning: "Use strong, unique passwords for each account.", marks: 1, markCode: "M" },
            { reasoning: "Install security updates and antivirus software.", marks: 1, markCode: "M" },
            { reasoning: "Verify information before sharing and avoid suspicious links.", marks: 1, markCode: "M" },
            { reasoning: "Three valid safety steps.", marks: 1, markCode: "A" },
          ], finalAnswer: "Strong passwords, updates/antivirus, and verifying information." },
        },
        {
          id: "olict-u6-rv-q14", difficulty: "foundation", totalMarks: 1,
          stem: "A WAN covers…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A wide geographical area" },
            { id: "b", text: "No computers" },
            { id: "c", text: "Only mobile phones" },
            { id: "d", text: "One small room" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "WAN", statement: "Wide area." }], steps: [{ reasoning: "WAN spans large areas.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Wide geographical area" },
        },
        {
          id: "olict-u6-rv-q15", difficulty: "core", totalMarks: 2,
          stem: "A quiz has 16 questions and a student answers 12 correctly. What is their score as a percentage?",
          response: { type: "numeric", parts: [{ label: "percent", answer: 75, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Score", statement: "Correct / total × 100." }], steps: [
            { reasoning: "12 / 16 × 100 = 75%.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 75%.", marks: 1, markCode: "A" },
          ], finalAnswer: "75%" },
        },
        {
          id: "olict-u6-rv-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A company wants to connect offices in three different cities. Suggest a network type and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Network choice", statement: "WAN for distance." }], steps: [
            { reasoning: "A WAN covers a wide geographical area.", marks: 1, markCode: "M" },
            { reasoning: "It can link offices across cities via the internet.", marks: 1, markCode: "M" },
            { reasoning: "A LAN only covers a local area and would not reach.", marks: 1, markCode: "M" },
            { reasoning: "WAN justified.", marks: 1, markCode: "A" },
          ], finalAnswer: "WAN — it connects sites over a wide geographical area." },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u6-6-3-notes", title: "ICT revision — notes", summary: "Key terms and exam strategy across all topics.",
      sections: [
        { heading: "Terms", body: "ICT system components; LAN/WAN; firewall; malware; URL; OS; backup." },
        { heading: "Strategy", body: "Define, explain pros/cons, justify choices, describe processes step-by-step." },
      ] },
  ],
};
