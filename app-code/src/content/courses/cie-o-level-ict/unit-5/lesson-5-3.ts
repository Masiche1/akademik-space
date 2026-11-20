import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olict-u5-lesson-5-3",
  code: "5-3",
  title: "Software Licensing and Versions",
  goal: "I CAN explain software licences, versions and the risks of unlicensed software.",
  standards: ["7014 8.2"],
  vocabulary: [
    { term: "Licence", definition: "Legal agreement defining how software may be used." },
    { term: "Single-user licence", definition: "Licence for one computer/user." },
    { term: "Site licence", definition: "Licence allowing installation on many machines in one organisation." },
    { term: "Open-source licence", definition: "Licence permitting free use, viewing and modification." },
    { term: "Piracy", definition: "Illegal copying/distribution of software." },
    { term: "Version", definition: "Release number indicating software updates (e.g. Office 2021)." },
    { term: "Update/patch", definition: "Small fix released to repair bugs or security flaws." },
  ],
  concepts: [
    {
      id: "olict-u5-licensing",
      title: "Software licences",
      skill: "Explain licence types and why licensing matters.",
      lesson: {
        sections: [
          { heading: "Licence types", body: "- **Single-user**: one computer.\n- **Multi-user/site**: organisation-wide use.\n- **Open source**: free use and modification.\n- **Shareware/freeware**: limited or free trials." },
          { heading: "Why licences matter", body: "Software is intellectual property — copying without permission is **piracy**, illegal and unethical. Licences also define support, updates and liability." },
          { heading: "Piracy risks", body: "Legal penalties, malware in cracked software, no updates/support, ethical harm to developers." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A school wants Word on 30 computers. What licence type?",
          solution: "Site/multi-user licence — covers installation on all school machines legally.",
        },
      },
      questions: [
        {
          id: "olict-u5-lic-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Software piracy is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Illegal copying of software" }, { id: "b", text: "Free software" }, { id: "c", text: "A licence type" }, { id: "d", text: "A backup method" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Piracy", statement: "Illegal copying." }], steps: [{ reasoning: "Piracy = illegal copying.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Illegal copying" },
        },
        {
          id: "olict-u5-lic-q2", difficulty: "core", totalMarks: 2,
          stem: "What is a site licence?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Site licence", statement: "Organisation-wide." }], steps: [
            { reasoning: "Allows installation on many machines in one org.", marks: 1, markCode: "M" },
            { reasoning: "Usually cheaper than individual licences.", marks: 1, markCode: "A" },
          ], finalAnswer: "Licence permitting use on multiple computers within one organisation." },
        },
        {
          id: "olict-u5-lic-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two risks of using pirated software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Piracy risks", statement: "Legal + malware + no support." }], steps: [
            { reasoning: "Legal penalties for copyright infringement.", marks: 1, markCode: "M" },
            { reasoning: "Cracked software often contains malware.", marks: 1, markCode: "M" },
            { reasoning: "No updates, fixes or support.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Legal penalties, malware risk, and no updates/support." },
        },
        {
          id: "olict-u5-lic-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Licensing review.",
          parts: [
            { label: "a", prompt: "What is a software licence?", marks: 2 },
            { label: "b", prompt: "Distinguish single-user from site licence.", marks: 2 },
            { label: "c", prompt: "What is software piracy?", marks: 1 },
            { label: "d", prompt: "Give two risks of pirated software.", marks: 2 },
            { label: "e", prompt: "Why are software updates important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Licensing", statement: "Licence types, piracy, updates." },
          ], steps: [
            { part: "a", reasoning: "Legal agreement for software use.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Single: one machine.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Site: many machines.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Illegal copying.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Malware risk.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Legal penalty.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Fix bugs/security flaws.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Keep software secure/current.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) legal agreement (b) 1 vs many PCs (c) illegal copy (d) malware+legal (e) security fixes" },
        },
      ],
    },
    {
      id: "olict-u5-versions",
      title: "Software Versions and Updates",
      skill: "Explain version numbers, updates and patches.",
      lesson: {
        sections: [
          { heading: "Version numbers", body: "Versions mark releases — e.g. Windows 10 → 11, Office 2019 → 2021. Major versions add features; minor updates fix bugs." },
          { heading: "Updates and patches", body: "- **Update**: new features/improvements.\n- **Patch/Service pack**: fixes specific bugs.\n- **Security update**: patches vulnerabilities — critical for safety.\n\nRegular updates protect against newly discovered exploits." },
          { heading: "Compatibility", body: "Newer versions may require newer hardware or drop support for old file formats — check compatibility before upgrading." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why should you install security updates promptly?",
          solution: "They patch known vulnerabilities that attackers exploit — delaying updates leaves systems exposed.",
        },
      },
      questions: [
        {
          id: "olict-u5-vr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A software patch is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fix for bugs or security flaws" }, { id: "b", text: "A new computer" }, { id: "c", text: "A type of licence" }, { id: "d", text: "A virus" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Patch", statement: "Fixes flaws." }], steps: [{ reasoning: "Patch fixes bugs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fixes flaws" },
        },
        {
          id: "olict-u5-vr-q2", difficulty: "core", totalMarks: 2,
          stem: "What does a version number indicate?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Version", statement: "Release marker." }], steps: [
            { reasoning: "Which release of the software.", marks: 1, markCode: "M" },
            { reasoning: "Newer versions add features/fixes.", marks: 1, markCode: "A" },
          ], finalAnswer: "Identifies the release — newer versions add features and fixes." },
        },
        {
          id: "olict-u5-vr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why delaying software updates is risky.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Updates", statement: "Security patches." }], steps: [
            { reasoning: "Known vulnerabilities remain unpatched.", marks: 1, markCode: "M" },
            { reasoning: "Attackers exploit publicised flaws.", marks: 1, markCode: "M" },
            { reasoning: "System exposed to malware/breaches.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Unpatched known vulnerabilities leave the system open to attack." },
        },
        {
          id: "olict-u5-vr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Versions and updates review.",
          parts: [
            { label: "a", prompt: "What is a software version?", marks: 2 },
            { label: "b", prompt: "What is a patch?", marks: 2 },
            { label: "c", prompt: "Why install security updates?", marks: 2 },
            { label: "d", prompt: "Give one compatibility concern when upgrading.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Versions", statement: "Releases, patches, security." },
          ], steps: [
            { part: "a", reasoning: "Release identifier.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fix for bugs/security.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Patches known vulnerabilities.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Prevents exploitation.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Hardware requirements.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "File format compatibility.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid concern.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) release ID (b) bug fix (c) patch vulns (d) hw/format compat" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u5-5-3-notes", title: "Licensing and versions — notes", summary: "Licence types, piracy risks, updates and patches.",
      sections: [
        { heading: "Licences", body: "Single-user, site, open-source. Piracy = illegal copying → legal risk + malware." },
        { heading: "Updates", body: "Versions mark releases; patches fix bugs; security updates close vulnerabilities." },
      ] },
  ],
};
