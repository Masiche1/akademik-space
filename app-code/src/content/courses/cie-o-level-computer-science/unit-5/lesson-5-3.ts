import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olcs-u5-lesson-5-3",
  code: "5-3",
  title: "Cyber Security",
  goal: "I CAN identify common cyber threats and describe how to protect data online.",
  standards: ["2210 5.3.1", "2210 5.3.2"],
  vocabulary: [
    { term: "Malware", definition: "Malicious software — viruses, worms, trojans, spyware, ransomware." },
    { term: "Phishing", definition: "Fake messages tricking users into revealing passwords or personal data." },
    { term: "Ransomware", definition: "Malware that encrypts files and demands payment for the decryption key." },
    { term: "Firewall", definition: "Hardware/software barrier filtering network traffic to block unauthorised access." },
    { term: "Two-factor authentication (2FA)", definition: "Login requiring two verification steps — e.g. password + code." },
    { term: "Encryption", definition: "Scrambling data with a key so only authorised parties can read it." },
    { term: "Backup", definition: "Copy of data stored separately so it can be restored after loss or attack." },
  ],
  concepts: [
    {
      id: "olcs-u5-threats",
      title: "Cyber security threats",
      skill: "Identify malware, phishing and other common attacks.",
      lesson: {
        sections: [
          { heading: "Malware", body: "- **Virus**: attaches to files/programs, spreads when run.\n- **Worm**: self-replicates across networks without a host file.\n- **Trojan**: disguised as legitimate software; opens a backdoor.\n- **Spyware**: secretly records activity/data.\n- **Ransomware**: encrypts files and demands payment." },
          { heading: "Phishing and social engineering", body: "**Phishing**: fake emails/messages impersonating banks, bosses or services to steal credentials. **Spear phishing** targets individuals. Warning signs: urgent language, suspicious links/attachments, mismatched sender addresses, requests for passwords/payment." },
          { heading: "Other threats", body: "- **Brute force**: guessing passwords.\n- **Man-in-the-middle**: intercepting/altering traffic.\n- **DDoS**: flooding a service with traffic to knock it offline.\n- **SQL injection**: malicious input exploiting database queries." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An email claims your account is locked and asks you to click a link and enter your password. What is this?",
          solution: "Phishing — a fake message designed to steal credentials. Do not click; verify via the official site.",
        },
      },
      questions: [
        {
          id: "olcs-u5-th-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Phishing is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fake messages tricking users into revealing data" }, { id: "b", text: "A type of firewall" }, { id: "c", text: "A backup method" }, { id: "d", text: "A network cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Phishing", statement: "Deceptive credential theft." }], steps: [{ reasoning: "Phishing = deceptive messages.", working: "\\text{fake}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fake credential theft" },
        },
        {
          id: "olcs-u5-th-q2", difficulty: "core", totalMarks: 2,
          stem: "State the difference between a virus and a worm.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Virus vs worm", statement: "Host file vs self-replicating." }], steps: [
            { reasoning: "Virus needs a host file/program.", working: "\\text{host}", marks: 1, markCode: "M" },
            { reasoning: "Worm spreads on its own.", working: "\\text{self-replicate}", marks: 1, markCode: "A" },
          ], finalAnswer: "Virus attaches to files and needs a host; worm replicates independently across networks." },
        },
        {
          id: "olcs-u5-th-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Describe what ransomware does and one way to protect against it.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Ransomware", statement: "Encrypts files, demands payment." }], steps: [
            { reasoning: "Encrypts victim's files.", working: "\\text{encrypt}", marks: 1, markCode: "M" },
            { reasoning: "Demands payment for key.", working: "\\text{ransom}", marks: 1, markCode: "M" },
            { reasoning: "Protection: regular backups.", working: "\\text{backups}", marks: 1, markCode: "M" },
            { reasoning: "Also antivirus/patching.", marks: 1, markCode: "A" },
          ], finalAnswer: "Ransomware encrypts files for payment; protect with backups and antivirus." },
        },
        {
          id: "olcs-u5-th-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Cyber threats review.",
          parts: [
            { label: "a", prompt: "Define malware and name two types.", marks: 2 },
            { label: "b", prompt: "Define phishing.", marks: 1 },
            { label: "c", prompt: "State two warning signs of a phishing message.", marks: 2 },
            { label: "d", prompt: "Explain how a firewall protects a network.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Firewall", statement: "Filters traffic by rules." },
          ], steps: [
            { part: "a", reasoning: "Malicious software.", working: "\\text{malware}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Two types: virus/worm/ransomware.", working: "\\text{types}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fake messages stealing credentials.", working: "\\text{phish}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Urgent language / suspicious link.", working: "\\text{urgency}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Mismatched sender / asks for password.", working: "\\text{sender}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Inspects incoming/outgoing traffic.", working: "\\text{inspect}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Blocks unauthorised/dangerous traffic.", working: "\\text{block}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Allows legitimate traffic through.", working: "\\text{allow}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Barrier protecting internal network.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) malicious software + types (b) credential theft (c) urgency/suspicious link (d) filters traffic" },
        },
      ],
    },
    {
      id: "olcs-u5-protection",
      title: "Protecting data online",
      skill: "Describe practical defences: firewalls, authentication, encryption, backups and updates.",
      lesson: {
        sections: [
          { heading: "Defence layers", body: "- **Firewall**: filters network traffic, blocks unauthorised access.\n- **Antivirus/anti-malware**: scans and removes malicious software.\n- **Updates/patches**: fix known vulnerabilities — keep software current.\n- **Strong passwords**: long, unique, mixed characters; use a password manager.\n- **Two-factor authentication (2FA)**: password + second factor (code, fingerprint) — blocks most stolen-password attacks.\n- **Encryption**: protects data in transit (HTTPS) and at rest.\n- **Backups**: offline/cloud copies so data survives ransomware or failure.\n- **User awareness**: recognise phishing; don't click suspicious links." },
          { heading: "Defence in depth", body: "No single defence is perfect — layer them: firewall + antivirus + updates + strong passwords + 2FA + backups. Each covers the others' weaknesses." },
          { heading: "Data protection principles", body: "Collect only what's needed, encrypt sensitive data, limit access (least privilege), and back up regularly." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A company wants to protect customer data. List a layered defence.",
          solution: "Firewall + antivirus + encryption at rest + 2FA for staff + regular offline backups + staff phishing training.",
        },
      },
      questions: [
        {
          id: "olcs-u5-pr-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Two-factor authentication adds…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A second verification step beyond the password" }, { id: "b", text: "Two passwords" }, { id: "c", text: "A faster login" }, { id: "d", text: "A bigger screen" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "2FA", statement: "Password + second factor." }], steps: [{ reasoning: "2FA = two verification steps.", working: "\\text{2FA}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Second verification" },
        },
        {
          id: "olcs-u5-pr-q2", difficulty: "core", totalMarks: 2,
          stem: "Why are software updates important for security?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Patching", statement: "Updates fix known vulnerabilities." }], steps: [
            { reasoning: "Fix security vulnerabilities.", working: "\\text{patch}", marks: 1, markCode: "M" },
            { reasoning: "Unpatched software is easily exploited.", marks: 1, markCode: "A" },
          ], finalAnswer: "Updates patch known vulnerabilities that attackers exploit." },
        },
        {
          id: "olcs-u5-pr-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why defence in depth is better than relying on a single security measure.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Defence in depth", statement: "Layered defences cover each other's gaps." }], steps: [
            { reasoning: "No single defence is perfect.", working: "\\text{no perfect}", marks: 1, markCode: "M" },
            { reasoning: "Each layer covers different attack types.", working: "\\text{different attacks}", marks: 1, markCode: "M" },
            { reasoning: "If one fails, others still protect.", marks: 1, markCode: "M" },
            { reasoning: "Harder for attacker to breach all layers.", marks: 1, markCode: "A" },
          ], finalAnswer: "Layered defences cover different threats, so one failure doesn't compromise everything." },
        },
        {
          id: "olcs-u5-pr-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Data protection review.",
          parts: [
            { label: "a", prompt: "State three security measures.", marks: 3 },
            { label: "b", prompt: "Explain why backups protect against ransomware.", marks: 2 },
            { label: "c", prompt: "Why should passwords be unique per account?", marks: 2 },
            { label: "d", prompt: "Explain defence in depth with an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Backups", statement: "Restore data after attack." },
          ], steps: [
            { part: "a", reasoning: "Firewall/antivirus/2FA/updates/encryption.", working: "\\text{measures}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second measure.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Third measure.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Encrypted files can be restored from backup.", working: "\\text{restore}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Avoids paying ransom.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "One breach doesn't expose all accounts.", working: "\\text{limit damage}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct reasoning.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Multiple layers: firewall+AV+2FA.", working: "\\text{layers}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "If one fails others protect.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) firewall/AV/2FA (b) restore without ransom (c) limits breach damage (d) layered defences" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u5-5-3-notes", title: "Cyber security — notes", summary: "Threats (malware, phishing, ransomware) and layered defences.",
      sections: [
        { heading: "Threats", body: "Malware (virus/worm/trojan/ransomware), phishing, brute force, MITM, DDoS." },
        { heading: "Defences", body: "Firewall, antivirus, updates, strong unique passwords, 2FA, encryption, backups, user awareness — layered." },
      ] },
  ],
};
