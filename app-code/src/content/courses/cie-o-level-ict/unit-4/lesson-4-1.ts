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
            { id: "a", text: "A network cable" },
            { id: "b", text: "Malicious software" },
            { id: "c", text: "A type of hardware" },
            { id: "d", text: "A backup tool" },
          ], correctChoiceId: "b" },
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
        {
          id: "olict-u4-th-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A worm is malware that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only runs offline" },
            { id: "b", text: "Self-replicates across networks" },
            { id: "c", text: "Needs a host file" },
            { id: "d", text: "Is always harmless" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Worm", statement: "Self-replicating malware." }], steps: [{ reasoning: "Worm spreads itself.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Self-replicates across networks" },
        },
        {
          id: "olict-u4-th-q6", difficulty: "core", totalMarks: 1,
          stem: "Ransomware typically…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Encrypts files and demands payment" },
            { id: "b", text: "Creates backups" },
            { id: "c", text: "Deletes the OS permanently" },
            { id: "d", text: "Speeds up the internet" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Ransomware", statement: "Encrypts + ransom." }], steps: [{ reasoning: "Encrypts files for ransom.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Encrypts files and demands payment" },
        },
        {
          id: "olict-u4-th-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A worm copies itself to 5 new machines every hour. Starting from 1 infected machine, how many machines are infected after 3 hours?",
          response: { type: "numeric", parts: [{ label: "machines", answer: 125 }] },
          markscheme: { principles: [{ kind: "principle", name: "Worm spread", statement: "Multiplies each hour." }], steps: [
            { reasoning: "Hour 1: 5; hour 2: 25; hour 3: 125.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 125 machines.", marks: 1, markCode: "A" },
          ], finalAnswer: "125 machines" },
        },
        {
          id: "olict-u4-th-q8", difficulty: "core", totalMarks: 2,
          stem: "What is a Trojan horse?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Trojan", statement: "Disguised malware." }], steps: [
            { reasoning: "Malware disguised as legitimate software.", marks: 1, markCode: "M" },
            { reasoning: "User installs it willingly; opens backdoors.", marks: 1, markCode: "A" },
          ], finalAnswer: "Malware hidden inside legitimate-looking software that users install themselves." },
        },
        {
          id: "olict-u4-th-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is a network attack rather than malware?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Spyware" },
            { id: "b", text: "Virus" },
            { id: "c", text: "Denial of service" },
            { id: "d", text: "Worm" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "DoS", statement: "Network attack." }], steps: [{ reasoning: "DoS floods systems; others are malware.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Denial of service" },
        },
        {
          id: "olict-u4-th-q10", difficulty: "core", totalMarks: 2,
          stem: "A denial of service attack sends 50 000 packets per second. How many packets does it send in 2 minutes?",
          response: { type: "numeric", parts: [{ label: "packets", answer: 6000000 }] },
          markscheme: { principles: [{ kind: "principle", name: "DoS volume", statement: "Rate × time." }], steps: [
            { reasoning: "2 minutes = 120 seconds; 50 000 × 120.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 6 000 000 packets.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 000 000 packets" },
        },
        {
          id: "olict-u4-th-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what a man-in-the-middle attack is.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MITM", statement: "Intercepts communications." }], steps: [
            { reasoning: "Attacker secretly sits between two parties.", marks: 1, markCode: "M" },
            { reasoning: "Intercepts/relays messages between them.", marks: 1, markCode: "M" },
            { reasoning: "Can read or alter the data in transit.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "An attacker secretly intercepts communication between two parties, able to read or alter it." },
        },
        {
          id: "olict-u4-th-q12", difficulty: "foundation", totalMarks: 1,
          stem: "Spyware is dangerous because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Prints documents" },
            { id: "b", text: "Blocks websites" },
            { id: "c", text: "Secretly monitors user activity" },
            { id: "d", text: "Speeds up the computer" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Spyware", statement: "Secret monitoring." }], steps: [{ reasoning: "Spyware monitors secretly.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Secretly monitors user activity" },
        },
        {
          id: "olict-u4-th-q13", difficulty: "foundation", totalMarks: 2,
          stem: "How many malware types are named in the lesson: virus, worm, trojan, firewall, spyware, ransomware?",
          response: { type: "numeric", parts: [{ label: "types", answer: 5 }] },
          markscheme: { principles: [{ kind: "principle", name: "Malware types", statement: "Count valid malware." }], steps: [
            { reasoning: "Virus, worm, trojan, spyware, ransomware are malware.", marks: 1, markCode: "M" },
            { reasoning: "Firewall is a defence — excluded. Answer = 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5 malware types" },
        },
        {
          id: "olict-u4-th-q14", difficulty: "core", totalMarks: 1,
          stem: "Which malware type needs user action to spread?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Rootkit" },
            { id: "b", text: "Virus" },
            { id: "c", text: "Worm" },
            { id: "d", text: "Botnet" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Virus", statement: "Needs host + user." }], steps: [{ reasoning: "Virus needs user action.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Virus" },
        },
        {
          id: "olict-u4-th-q15", difficulty: "challenge", totalMarks: 4,
          stem: "An employee receives an email 'from the bank' asking them to confirm their password via a link. Explain the threat and two ways the employee can protect themselves.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Phishing defence", statement: "Identify + avoid." }], steps: [
            { reasoning: "This is phishing — fake email stealing credentials.", marks: 1, markCode: "M" },
            { reasoning: "Do not click the link or enter details.", marks: 1, markCode: "M" },
            { reasoning: "Verify by contacting the bank directly.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Phishing; don't click/enter details, verify with the bank through official channels." },
        },
        {
          id: "olict-u4-th-q16", difficulty: "challenge", totalMarks: 1,
          stem: "A man-in-the-middle attack mainly threatens…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Screen brightness" },
            { id: "b", text: "File folder names" },
            { id: "c", text: "Printer ink levels" },
            { id: "d", text: "Confidentiality of communications" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "MITM", statement: "Intercepts data." }], steps: [{ reasoning: "MITM exposes private communications.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Confidentiality of communications" },
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
            { id: "a", text: "Be the same everywhere" },
            { id: "b", text: "Be your name" },
            { id: "c", text: "Be long, mixed and unique" },
            { id: "d", text: "Be written down" },
          ], correctChoiceId: "c" },
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
        {
          id: "olict-u4-ht-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Shoulder surfing is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A backup method" },
            { id: "b", text: "A type of antivirus" },
            { id: "c", text: "A network protocol" },
            { id: "d", text: "Watching someone's screen to steal information" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Shoulder surfing", statement: "Visual theft." }], steps: [{ reasoning: "Watching screen = shoulder surfing.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Watching someone's screen to steal information" },
        },
        {
          id: "olict-u4-ht-q6", difficulty: "core", totalMarks: 1,
          stem: "Which is the weakest password?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tr0ub4dor&3" },
            { id: "b", text: "P@ssw0rd!2024" },
            { id: "c", text: "123456" },
            { id: "d", text: "Xk9#mQ2$vL" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Passwords", statement: "Guessable = weak." }], steps: [{ reasoning: "123456 is trivially guessed.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** 123456" },
        },
        {
          id: "olict-u4-ht-q7", difficulty: "foundation", totalMarks: 2,
          stem: "How many characters are in the password 's3cur3P@ss'?",
          response: { type: "numeric", parts: [{ label: "characters", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Password length", statement: "Count characters." }], steps: [
            { reasoning: "Count each character: s,3,c,u,r,3,P,@,s,s.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 10 characters.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 characters" },
        },
        {
          id: "olict-u4-ht-q8", difficulty: "core", totalMarks: 2,
          stem: "What risk does unpatched software create?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Unpatched software", statement: "Known vulnerabilities." }], steps: [
            { reasoning: "Known security flaws remain unfixed.", marks: 1, markCode: "M" },
            { reasoning: "Attackers can exploit them.", marks: 1, markCode: "A" },
          ], finalAnswer: "Unpatched software leaves known vulnerabilities open to attackers." },
        },
        {
          id: "olict-u4-ht-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Reusing the same password on many accounts is risky because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It improves speed" },
            { id: "b", text: "It saves time" },
            { id: "c", text: "One breach exposes all accounts" },
            { id: "d", text: "It is required by law" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Password reuse", statement: "One breach = all." }], steps: [{ reasoning: "One leak compromises everything.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** One breach exposes all accounts" },
        },
        {
          id: "olict-u4-ht-q10", difficulty: "core", totalMarks: 2,
          stem: "A worker uses the same password on 8 different accounts. One website is breached. How many accounts are now at risk?",
          response: { type: "numeric", parts: [{ label: "accounts", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Password reuse", statement: "Breach spreads." }], steps: [
            { reasoning: "Criminals try the leaked password on all accounts.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 8 accounts at risk.", marks: 1, markCode: "A" },
          ], finalAnswer: "8 accounts" },
        },
        {
          id: "olict-u4-ht-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Describe three physical security risks in an office.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Physical threats", statement: "Unlocked, stolen, observed." }], steps: [
            { reasoning: "Unlocked computers accessible to anyone.", marks: 1, markCode: "M" },
            { reasoning: "Stolen devices contain sensitive data.", marks: 1, markCode: "M" },
            { reasoning: "Shoulder surfing reveals passwords/info.", marks: 1, markCode: "M" },
            { reasoning: "Three valid risks.", marks: 1, markCode: "A" },
          ], finalAnswer: "Unlocked computers, stolen devices and shoulder surfing." },
        },
        {
          id: "olict-u4-ht-q12", difficulty: "core", totalMarks: 1,
          stem: "Which is good security practice?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Writing passwords on sticky notes" },
            { id: "b", text: "Using 'password' everywhere" },
            { id: "c", text: "Locking your computer when you leave" },
            { id: "d", text: "Sharing passwords with colleagues" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Security practice", statement: "Lock devices." }], steps: [{ reasoning: "Locking prevents unauthorised access.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Locking your computer when you leave" },
        },
        {
          id: "olict-u4-ht-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Of these four passwords — 'password123', 'Xk9#mQ2$vL', 'qwerty', 'P@ssw0rd!2024' — how many are strong?",
          response: { type: "numeric", parts: [{ label: "strong", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Password strength", statement: "Length + mixed chars." }], steps: [
            { reasoning: "'Xk9#mQ2$vL' and 'P@ssw0rd!2024' are long and mixed.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 2 strong passwords.", marks: 1, markCode: "A" },
          ], finalAnswer: "2 strong passwords" },
        },
        {
          id: "olict-u4-ht-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Posting personal information publicly online mainly risks…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Faster internet" },
            { id: "b", text: "Free storage" },
            { id: "c", text: "Better privacy" },
            { id: "d", text: "Identity theft and fraud" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Data privacy", statement: "Public info = risk." }], steps: [{ reasoning: "Public data enables fraud.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Identity theft and fraud" },
        },
        {
          id: "olict-u4-ht-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'careless sharing' of personal information is a security risk.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Careless sharing", statement: "Public personal data." }], steps: [
            { reasoning: "Personal details posted publicly are visible to anyone.", marks: 1, markCode: "M" },
            { reasoning: "Attackers can use it for phishing/social engineering.", marks: 1, markCode: "M" },
            { reasoning: "Can enable identity theft or account guessing.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Publicly shared personal data helps attackers craft targeted attacks and commit identity fraud." },
        },
        {
          id: "olict-u4-ht-q16", difficulty: "challenge", totalMarks: 1,
          stem: "Which of these is an example of social engineering?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using a firewall" },
            { id: "b", text: "Encrypting files" },
            { id: "c", text: "Installing antivirus software" },
            { id: "d", text: "Pretending to be IT support to get a password" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Social engineering", statement: "Manipulates people." }], steps: [{ reasoning: "Deceiving people = social engineering.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Pretending to be IT support to get a password" },
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
