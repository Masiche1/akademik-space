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
            { id: "a", text: "Hardware, software, data, people, procedures" }, { id: "b", text: "CPU, RAM, disk, screen, keyboard" }, { id: "c", text: "Input, process, output, storage, network" }, { id: "d", text: "Server, client, router, switch, cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ICT system", statement: "Five components." }], steps: [{ reasoning: "Correct five.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Hardware, software, data, people, procedures" },
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
