import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olict-u4-lesson-4-1",
  code: "4-1",
  title: "Network Security Threats",
  goal: "I CAN describe common network security threats.",
  standards: ["7014 5.1"],
  vocabulary: [
    { term: "Malware", definition: "Malicious software designed to harm or exploit systems." },
    { term: "Virus", definition: "Malware attaching to files/programs, spreading when executed." },
    { term: "Worm", definition: "Self-replicating malware spreading without user action." },
    { term: "Trojan", definition: "Malware disguised as legitimate software." },
    { term: "Spyware", definition: "Malware secretly monitoring user activity." },
    { term: "Phishing", definition: "Fake messages tricking users into revealing credentials." },
    { term: "Hacker", definition: "Person who gains unauthorised access to systems." },
    { term: "Denial of service (DoS)", definition: "Attack flooding a system to make it unavailable." },
  ],
  concepts: [
    {
      id: "olict-u4-threats",
      title: "Common security threats",
      skill: "Identify malware types, phishing and network attacks.",
      lesson: {
        sections: [
          { heading: "Malware types", body: "- **Virus**: attaches to files, needs user action to spread.\n- **Worm**: self-replicates across networks automatically.\n- **Trojan**: hides inside legitimate software, opens backdoors.\n- **Spyware**: secretly records keystrokes, passwords, browsing.\n- **Ransomware**: encrypts files and demands payment." },
          { heading: "Social attacks", body: "- **Phishing**: fake emails/sites trick users into entering passwords or card details.\n- **Social engineering**: manipulating people into revealing information." },
          { heading: "Network attacks", body: "- **Hacking**: unauthorised access to systems.\n- **Denial of service**: floods servers with traffic so they crash.\n- **Man-in-the-middle**: intercepting communications." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An email claims to be from your bank asking you to 'verify' your password via a link. What threat is this?",
          solution: "Phishing — fake message tricking you into revealing credentials on a fraudulent site.",
        },
      },
      questions: [
        {
          id: "olict-u4-th-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Malware is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Malicious software" }, { id: "b", text: "A type of hardware" }, { id: "c", text: "A network cable" }, { id: "d", text: "A backup tool" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Malware", statement: "Malicious software." }], steps: [{ reasoning: "Malware = malicious software.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Malicious software" },
        },
        {
          id: "olict-u4-th-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a virus from a worm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Virus vs worm", statement: "Needs host vs self-replicating." }], steps: [
            { reasoning: "Virus: attaches to files, needs user action.", marks: 1, markCode: "M" },
            { reasoning: "Worm: self-replicates automatically.", marks: 1, markCode: "A" },
          ], finalAnswer: "Virus needs a host file and user action; worm spreads itself across networks." },
        },
        {
          id: "olict-u4-th-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what phishing is and how it works.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Phishing", statement: "Fake messages steal credentials." }], steps: [
            { reasoning: "Fake emails/sites impersonate trusted orgs.", marks: 1, markCode: "M" },
            { reasoning: "Tricks users into entering passwords/card details.", marks: 1, markCode: "M" },
            { reasoning: "Criminals then use stolen credentials.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Phishing uses fake messages to trick users into revealing login details or card numbers." },
        },
        {
          id: "olict-u4-th-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Security threats review.",
          parts: [
            { label: "a", prompt: "Name three types of malware.", marks: 3 },
            { label: "b", prompt: "What is phishing?", marks: 2 },
            { label: "c", prompt: "What is a denial of service attack?", marks: 2 },
            { label: "d", prompt: "Distinguish virus from worm.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Threats", statement: "Malware, phishing, DoS." },
          ], steps: [
            { part: "a", reasoning: "Virus.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Worm/trojan/spyware.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Third type.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fake messages stealing credentials.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Floods system to crash it.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Makes service unavailable.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Virus: needs host.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Worm: self-replicating.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) virus/worm/trojan (b) credential theft (c) flood attack (d) host vs self" },
        },
      ],
    },
    {
      id: "olict-u4-social",
      title: "Human and data threats",
      skill: "Explain social engineering, weak passwords and data privacy issues.",
      lesson: {
        sections: [
          { heading: "Weak security practices", body: "- **Weak passwords**: '123456' or 'password' easily guessed.\n- **Password reuse**: one breach exposes all accounts.\n- **Unpatched software**: known vulnerabilities exploited.\n- **Careless sharing**: posting personal info publicly." },
          { heading: "Data privacy", body: "Personal data collected by websites/apps can be sold or leaked. Users should know what they share; organisations must protect data under privacy laws." },
          { heading: "Physical threats", body: "Unlocked computers, stolen devices, shoulder surfing — physical access bypasses many digital defences." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A worker writes their password on a sticky note. What risk is this?",
          solution: "Physical security breach — anyone seeing the note can access the account.",
        },
      },
      questions: [
        {
          id: "olict-u4-ht-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A strong password should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Be long, mixed and unique" }, { id: "b", text: "Be your name" }, { id: "c", text: "Be the same everywhere" }, { id: "d", text: "Be written down" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Passwords", statement: "Long+unique+mixed." }], steps: [{ reasoning: "Strong password traits.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Long, mixed, unique" },
        },
        {
          id: "olict-u4-ht-q2", difficulty: "core", totalMarks: 2,
          stem: "What is social engineering?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Social engineering", statement: "Manipulating people." }], steps: [
            { reasoning: "Tricking people into revealing info/access.", marks: 1, markCode: "M" },
            { reasoning: "Targets humans not systems.", marks: 1, markCode: "A" },
          ], finalAnswer: "Manipulating people into revealing information or granting access." },
        },
        {
          id: "olict-u4-ht-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why reusing passwords is dangerous.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Password reuse", statement: "One breach = all accounts." }], steps: [
            { reasoning: "One site breach exposes the password.", marks: 1, markCode: "M" },
            { reasoning: "Criminals try it on other accounts.", marks: 1, markCode: "M" },
            { reasoning: "All accounts compromised at once.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "If one site is breached, criminals try the same password on your other accounts." },
        },
        {
          id: "olict-u4-ht-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Human threats review.",
          parts: [
            { label: "a", prompt: "What makes a strong password?", marks: 2 },
            { label: "b", prompt: "Define social engineering.", marks: 2 },
            { label: "c", prompt: "Give two physical security risks.", marks: 2 },
            { label: "d", prompt: "Why is data privacy important?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Human threats", statement: "Passwords, social eng, physical, privacy." },
          ], steps: [
            { part: "a", reasoning: "Long, mixed characters, unique.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct traits.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Manipulating people.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Unlocked devices/stolen laptops.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Shoulder surfing.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Personal data can be misused.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Legal/ethical duty to protect.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) long+mixed+unique (b) manipulates people (c) unlocked/stolen (d) data misuse+law" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u4-4-1-notes", title: "Security threats — notes", summary: "Malware types, phishing, social engineering and physical risks.",
      sections: [
        { heading: "Threats", body: "Virus/worm/trojan/spyware/ransomware; phishing steals credentials; DoS floods systems." },
        { heading: "Human", body: "Weak/reused passwords, social engineering, unlocked devices all create risk." },
      ] },
  ],
};
