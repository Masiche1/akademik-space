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
            { id: "a", text: "Free software" },
            { id: "b", text: "Illegal copying of software" },
            { id: "c", text: "A licence type" },
            { id: "d", text: "A backup method" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Piracy", statement: "Illegal copying." }], steps: [{ reasoning: "Piracy = illegal copying.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Illegal copying" },
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
        {
          id: "olict-u5-lic-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A software licence is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A backup file" },
            { id: "b", text: "A legal agreement defining how software may be used" },
            { id: "c", text: "A computer part" },
            { id: "d", text: "A type of virus" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Licence", statement: "Legal agreement." }], steps: [{ reasoning: "Licence = legal agreement for use.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Legal agreement" },
        },
        {
          id: "olict-u5-lic-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A company needs licensed software on 25 computers using single-user licences. How many licences must it buy?",
          response: { type: "numeric", parts: [{ label: "licences", answer: 25 }] },
          markscheme: { principles: [{ kind: "principle", name: "Licences", statement: "One per machine." }], steps: [
            { reasoning: "One single-user licence per computer.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 25 licences.", marks: 1, markCode: "A" },
          ], finalAnswer: "25 licences" },
        },
        {
          id: "olict-u5-lic-q7", difficulty: "core", totalMarks: 1,
          stem: "Shareware is typically…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Always paid forever" },
            { id: "b", text: "Open source" },
            { id: "c", text: "Malware" },
            { id: "d", text: "Free to try for a limited period or with limited features" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Shareware", statement: "Limited trial." }], steps: [{ reasoning: "Shareware = limited free trial.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Limited free trial" },
        },
        {
          id: "olict-u5-lic-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Which licence type suits installing software on just one personal computer?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Open-source licence" },
            { id: "b", text: "Single-user licence" },
            { id: "c", text: "No licence needed" },
            { id: "d", text: "Site licence" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Single-user licence", statement: "One machine." }], steps: [{ reasoning: "Single-user covers one computer.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Single-user licence" },
        },
        {
          id: "olict-u5-lic-q9", difficulty: "core", totalMarks: 2,
          stem: "A site licence covers 50 machines for $2000. Single-user licences cost $60 each for the same 50 machines. How much does the site licence save?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 1000, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Licence comparison", statement: "Single total − site." }], steps: [
            { reasoning: "50 × $60 = $3000 for singles; $3000 − $2000 = $1000 saved.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $1000 saved.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1000 saved" },
        },
        {
          id: "olict-u5-lic-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why software piracy harms the developers who create the software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Piracy harm", statement: "Lost income." }], steps: [
            { reasoning: "Developers invest time and money creating software.", marks: 1, markCode: "M" },
            { reasoning: "Piracy means they receive no payment for their work.", marks: 1, markCode: "M" },
            { reasoning: "Lost income reduces funds for updates and new products.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the harm.", marks: 1, markCode: "A" },
          ], finalAnswer: "Piracy denies developers payment for their work, reducing income for future development." },
        },
        {
          id: "olict-u5-lic-q11", difficulty: "core", totalMarks: 1,
          stem: "Installing one purchased licence on 20 different computers is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "An update" },
            { id: "b", text: "Software piracy" },
            { id: "c", text: "Legal use" },
            { id: "d", text: "A site licence" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Piracy", statement: "Illegal copying." }], steps: [{ reasoning: "Exceeding licence terms is piracy.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Software piracy" },
        },
        {
          id: "olict-u5-lic-q12", difficulty: "core", totalMarks: 2,
          stem: "A school has 30 computers. Site licences cost $1500 total; single-user licences cost $70 each. What would 30 single-user licences cost?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 2100, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Licence cost", statement: "Price × machines." }], steps: [
            { reasoning: "30 × $70 = $2100.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $2100.", marks: 1, markCode: "A" },
          ], finalAnswer: "$2100" },
        },
        {
          id: "olict-u5-lic-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss the ethical and legal issues of using cracked (pirated) software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Piracy issues", statement: "Legal + ethical." }], steps: [
            { reasoning: "It is copyright infringement — illegal with possible penalties.", marks: 1, markCode: "M" },
            { reasoning: "Cracked software often contains malware.", marks: 1, markCode: "M" },
            { reasoning: "It is unethical — it steals the developers' work.", marks: 1, markCode: "M" },
            { reasoning: "Users also get no updates or support.", marks: 1, markCode: "A" },
          ], finalAnswer: "Piracy is illegal, risky (malware), unethical and leaves users without support." },
        },
        {
          id: "olict-u5-lic-q14", difficulty: "foundation", totalMarks: 1,
          stem: "An open-source licence generally permits…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only paid use" },
            { id: "b", text: "Secret distribution" },
            { id: "c", text: "No copying ever" },
            { id: "d", text: "Free use, viewing and modification" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Open-source licence", statement: "Free use." }], steps: [{ reasoning: "Open source = free use/modification.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Free use and modification" },
        },
        {
          id: "olict-u5-lic-q15", difficulty: "core", totalMarks: 2,
          stem: "A firm buys 10 software licences at $85 each. What is the total cost?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 850, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Licence cost", statement: "Price × count." }], steps: [
            { reasoning: "10 × $85 = $850.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $850.", marks: 1, markCode: "A" },
          ], finalAnswer: "$850" },
        },
        {
          id: "olict-u5-lic-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A student downloads paid software 'for free' from a file-sharing site. Identify the issue and describe two possible consequences.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Piracy consequences", statement: "Illegal + risky." }], steps: [
            { reasoning: "This is software piracy — copyright infringement.", marks: 1, markCode: "M" },
            { reasoning: "The file may contain malware infecting the computer.", marks: 1, markCode: "M" },
            { reasoning: "The user gets no updates, fixes or support.", marks: 1, markCode: "M" },
            { reasoning: "Clear identification and consequences.", marks: 1, markCode: "A" },
          ], finalAnswer: "Piracy; risks malware infection and no updates/support." },
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
            { id: "a", text: "A new computer" },
            { id: "b", text: "A fix for bugs or security flaws" },
            { id: "c", text: "A virus" },
            { id: "d", text: "A type of licence" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Patch", statement: "Fixes flaws." }], steps: [{ reasoning: "Patch fixes bugs.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Fixes flaws" },
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
        {
          id: "olict-u5-vr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A major version update usually…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is free of charge always" },
            { id: "b", text: "Adds new features" },
            { id: "c", text: "Removes all features" },
            { id: "d", text: "Only fixes one bug" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Major version", statement: "New features." }], steps: [{ reasoning: "Major versions add features.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Adds features" },
        },
        {
          id: "olict-u5-vr-q6", difficulty: "core", totalMarks: 2,
          stem: "A company releases 4 software updates per year. How many updates does it release in 3 years?",
          response: { type: "numeric", parts: [{ label: "updates", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Update rate", statement: "Per year × years." }], steps: [
            { reasoning: "4 × 3 = 12 updates.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 12 updates.", marks: 1, markCode: "A" },
          ], finalAnswer: "12 updates" },
        },
        {
          id: "olict-u5-vr-q7", difficulty: "core", totalMarks: 1,
          stem: "A security patch is released to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Add new features" },
            { id: "b", text: "Change the licence" },
            { id: "c", text: "Slow down the computer" },
            { id: "d", text: "Fix a known security vulnerability" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Security patch", statement: "Fixes vulnerability." }], steps: [{ reasoning: "Security patches close flaws.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Fixes vulnerability" },
        },
        {
          id: "olict-u5-vr-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Regular software updates mainly help to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Delete user files" },
            { id: "b", text: "Increase the price" },
            { id: "c", text: "Remove the licence" },
            { id: "d", text: "Fix security flaws and bugs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Updates", statement: "Security + fixes." }], steps: [{ reasoning: "Updates fix flaws and bugs.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Fix flaws and bugs" },
        },
        {
          id: "olict-u5-vr-q9", difficulty: "core", totalMarks: 2,
          stem: "An operating system released in 2019 receives a security patch every 6 months. How many patches are released in 4 years?",
          response: { type: "numeric", parts: [{ label: "patches", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Patch rate", statement: "2 per year × 4." }], steps: [
            { reasoning: "2 patches per year × 4 = 8.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 8 patches.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 patches" },
        },
        {
          id: "olict-u5-vr-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two compatibility problems that can occur when upgrading software.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Compatibility", statement: "Hardware + formats." }], steps: [
            { reasoning: "New version may need more powerful hardware.", marks: 1, markCode: "M" },
            { reasoning: "Older computers may not run it.", marks: 1, markCode: "M" },
            { reasoning: "New version may not open old file formats or may drop features.", marks: 1, markCode: "M" },
            { reasoning: "Two valid problems explained.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hardware requirements may exceed the machine; old file formats may be unsupported." },
        },
        {
          id: "olict-u5-vr-q11", difficulty: "core", totalMarks: 1,
          stem: "A minor update typically…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Deletes the program" },
            { id: "b", text: "Fixes bugs without major new features" },
            { id: "c", text: "Costs a fortune" },
            { id: "d", text: "Changes the whole interface" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Minor update", statement: "Bug fixes." }], steps: [{ reasoning: "Minor updates fix bugs.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Fixes bugs" },
        },
        {
          id: "olict-u5-vr-q12", difficulty: "foundation", totalMarks: 2,
          stem: "A program's version history is 1.0, 1.1, 2.0, 2.1, 2.2. How many releases are listed?",
          response: { type: "numeric", parts: [{ label: "releases", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Versions", statement: "Count releases." }], steps: [
            { reasoning: "Count the five version numbers.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 5 releases.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 releases" },
        },
        {
          id: "olict-u5-vr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A business delays installing security updates for 6 months. Explain the risks.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Update risk", statement: "Unpatched flaws." }], steps: [
            { reasoning: "Known vulnerabilities remain open for months.", marks: 1, markCode: "M" },
            { reasoning: "Attackers publicly know the flaws and exploit them.", marks: 1, markCode: "M" },
            { reasoning: "Systems face malware, data theft or ransomware.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the risk.", marks: 1, markCode: "A" },
          ], finalAnswer: "Delaying updates leaves known vulnerabilities exposed to attack for months." },
        },
        {
          id: "olict-u5-vr-q14", difficulty: "core", totalMarks: 1,
          stem: "Before upgrading software, users should check…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The number of pages in the manual" },
            { id: "b", text: "Hardware and file compatibility" },
            { id: "c", text: "The colour of the box" },
            { id: "d", text: "Whether it is on sale" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Upgrading", statement: "Check compatibility." }], steps: [{ reasoning: "Compatibility must be checked first.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Hardware and file compatibility" },
        },
        {
          id: "olict-u5-vr-q15", difficulty: "core", totalMarks: 2,
          stem: "New software requires 4 GB of RAM. A PC has 6 GB. How much RAM is left over after meeting the requirement?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 2, unit: "GB" }] },
          markscheme: { principles: [{ kind: "principle", name: "RAM headroom", statement: "Available − required." }], steps: [
            { reasoning: "6 − 4 = 2 GB.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2 GB.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 GB" },
        },
        {
          id: "olict-u5-vr-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a software update and a patch.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Update vs patch", statement: "Features vs fixes." }], steps: [
            { reasoning: "An update brings new features or improvements.", marks: 1, markCode: "M" },
            { reasoning: "A patch is a smaller fix for specific bugs or flaws.", marks: 1, markCode: "M" },
            { reasoning: "Security patches close known vulnerabilities.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction between the two.", marks: 1, markCode: "A" },
          ], finalAnswer: "Updates add features/improvements; patches fix specific bugs or security flaws." },
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
