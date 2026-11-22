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
            { id: "a", text: "Fake messages tricking users into revealing data" },
            { id: "b", text: "A type of firewall" },
            { id: "c", text: "A network cable" },
            { id: "d", text: "A backup method" },
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
        {
          id: "olcs-u5-th-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Ransomware…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Creates backups" },
            { id: "b", text: "Blocks adverts" },
            { id: "c", text: "Encrypts files and demands payment" },
            { id: "d", text: "Speeds up computers" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Ransomware", statement: "Encrypts files, demands ransom." }], steps: [{ reasoning: "Ransomware encrypts and demands payment.", working: "\\text{encrypt}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Encrypts files and demands payment" },
        },
        {
          id: "olcs-u5-th-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many malware types are named: virus, worm, trojan, spyware, ransomware?",
          response: { type: "numeric", parts: [{ label: "Malware types", answer: 5 }] },
          markscheme: { principles: [{ kind: "definition", name: "Malware", statement: "Virus, worm, trojan, spyware, ransomware." }], steps: [
            { reasoning: "Five types named.", working: "5", marks: 1, markCode: "B" },
          ], finalAnswer: "5" },
        },
        {
          id: "olcs-u5-th-q7", difficulty: "core", totalMarks: 1,
          stem: "A worm differs from a virus because it…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Is always harmless" },
            { id: "b", text: "Self-replicates without needing a host file" },
            { id: "c", text: "Only affects printers" },
            { id: "d", text: "Needs a host program to spread" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Worm", statement: "Self-replicating, no host needed." }], steps: [{ reasoning: "Worms spread on their own.", working: "\\text{self-replicate}", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Self-replicates without a host" },
        },
        {
          id: "olcs-u5-th-q8", difficulty: "core", totalMarks: 1,
          stem: "How many warning signs of a phishing message are listed: urgent language, suspicious links, mismatched sender, requests for passwords?",
          response: { type: "numeric", parts: [{ label: "Warning signs", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Phishing signs", statement: "Urgency, links, sender, password asks." }], steps: [
            { reasoning: "Four warning signs listed.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-th-q9", difficulty: "core", totalMarks: 1,
          stem: "Which of these is NOT malware?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Firewall" },
            { id: "b", text: "Virus" },
            { id: "c", text: "Worm" },
            { id: "d", text: "Trojan" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Firewall", statement: "A defence, not malware." }], steps: [{ reasoning: "Firewall protects; it is not malware.", working: "\\text{defence}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Firewall" },
        },
        {
          id: "olcs-u5-th-q10", difficulty: "core", totalMarks: 2,
          stem: "State two warning signs that an email might be phishing.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Phishing signs", statement: "Urgency, suspicious links/senders." }], steps: [
            { reasoning: "Any two: urgent language, suspicious link/attachment, mismatched sender, asks for password.", working: "\\text{signs}", marks: 1, markCode: "M" },
            { reasoning: "Second valid sign.", marks: 1, markCode: "A" },
          ], finalAnswer: "Urgent language, suspicious links/attachments, mismatched sender, password requests (any two)." },
        },
        {
          id: "olcs-u5-th-q11", difficulty: "challenge", totalMarks: 1,
          stem: "A DDoS attack aims to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Steal passwords" },
            { id: "b", text: "Encrypt files for ransom" },
            { id: "c", text: "Intercept network cables" },
            { id: "d", text: "Flood a service with traffic to knock it offline" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "DDoS", statement: "Distributed denial of service." }], steps: [{ reasoning: "DDoS floods a service to take it offline.", working: "\\text{flood}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Flood a service offline" },
        },
        {
          id: "olcs-u5-th-q12", difficulty: "core", totalMarks: 1,
          stem: "How many other threat types are listed besides malware and phishing: brute force, man-in-the-middle, DDoS, SQL injection?",
          response: { type: "numeric", parts: [{ label: "Other threats", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Threats", statement: "Brute force, MITM, DDoS, SQLi." }], steps: [
            { reasoning: "Four other threats listed.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-th-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how social engineering differs from technical hacking.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Social engineering", statement: "Exploits people, not systems." }], steps: [
            { reasoning: "Targets human trust/behaviour, not software flaws.", working: "\\text{people}", marks: 1, markCode: "M" },
            { reasoning: "Uses deception — phishing, pretexting, baiting.", working: "\\text{deception}", marks: 1, markCode: "M" },
            { reasoning: "Harder to block with technical defences alone.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Social engineering manipulates people into revealing data, unlike technical attacks that exploit systems." },
        },
        {
          id: "olcs-u5-th-q14", difficulty: "challenge", totalMarks: 1,
          stem: "SQL injection attacks work by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guessing passwords repeatedly" },
            { id: "b", text: "Sending fake emails" },
            { id: "c", text: "Entering malicious input that exploits database queries" },
            { id: "d", text: "Flooding a server with traffic" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "SQL injection", statement: "Malicious input in database queries." }], steps: [{ reasoning: "SQLi exploits queries via input.", working: "\\text{query}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Malicious input exploiting queries" },
        },
        {
          id: "olcs-u5-th-q15", difficulty: "core", totalMarks: 2,
          stem: "Count the malware types and the other threat types covered in this lesson.",
          response: { type: "numeric", parts: [
            { label: "Malware types", answer: 5 },
            { label: "Other threat types", answer: 4 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Threat coverage", statement: "5 malware types; 4 other threats." }], steps: [
            { reasoning: "Virus, worm, trojan, spyware, ransomware.", working: "5", marks: 1, markCode: "M" },
            { reasoning: "Brute force, MITM, DDoS, SQLi.", working: "4", marks: 1, markCode: "A" },
          ], finalAnswer: "5 malware types; 4 other threats" },
        },
        {
          id: "olcs-u5-th-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Cyber threats review.",
          parts: [
            { label: "a", prompt: "Define malware and name two types.", marks: 3 },
            { label: "b", prompt: "Define phishing.", marks: 2 },
            { label: "c", prompt: "State two warning signs of phishing.", marks: 2 },
            { label: "d", prompt: "Distinguish brute force from a DDoS attack.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Malware", statement: "Malicious software." },
          ], steps: [
            { part: "a", reasoning: "Malicious software.", working: "\\text{malware}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "First type: virus/worm/ransomware.", working: "\\text{virus}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Second type.", working: "\\text{worm}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Fake messages tricking users into revealing data.", working: "\\text{fake}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Urgent language / suspicious link.", working: "\\text{urgency}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Mismatched sender / password ask.", working: "\\text{sender}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Brute force guesses passwords.", working: "\\text{guess}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "DDoS floods a service offline.", working: "\\text{flood}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) malware + 2 types (b) credential theft (c) 2 signs (d) guessing vs flooding" },
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
            { id: "a", text: "Two passwords" },
            { id: "b", text: "A bigger screen" },
            { id: "c", text: "A faster login" },
            { id: "d", text: "A second verification step beyond the password" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "2FA", statement: "Password + second factor." }], steps: [{ reasoning: "2FA = two verification steps.", working: "\\text{2FA}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Second verification" },
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
        {
          id: "olcs-u5-pr-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A firewall's main job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Filter network traffic" },
            { id: "b", text: "Train AI models" },
            { id: "c", text: "Create backups" },
            { id: "d", text: "Encrypt files" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Firewall", statement: "Filters network traffic." }], steps: [{ reasoning: "Firewall filters traffic.", working: "\\text{filter}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Filter network traffic" },
        },
        {
          id: "olcs-u5-pr-q6", difficulty: "foundation", totalMarks: 1,
          stem: "How many defence layers are named: firewall, antivirus, updates, strong passwords, 2FA, encryption, backups, user awareness?",
          response: { type: "numeric", parts: [{ label: "Defence layers", answer: 8 }] },
          markscheme: { principles: [{ kind: "principle", name: "Defences", statement: "Eight layers listed." }], steps: [
            { reasoning: "Eight defences listed.", working: "8", marks: 1, markCode: "B" },
          ], finalAnswer: "8" },
        },
        {
          id: "olcs-u5-pr-q7", difficulty: "core", totalMarks: 1,
          stem: "Software updates improve security mainly by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding new features" },
            { id: "b", text: "Speeding up the computer" },
            { id: "c", text: "Patching known vulnerabilities" },
            { id: "d", text: "Changing passwords automatically" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Patching", statement: "Updates fix vulnerabilities." }], steps: [{ reasoning: "Updates patch known flaws.", working: "\\text{patch}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Patching known vulnerabilities" },
        },
        {
          id: "olcs-u5-pr-q8", difficulty: "core", totalMarks: 1,
          stem: "How many verification steps does two-factor authentication require?",
          response: { type: "numeric", parts: [{ label: "Verification steps", answer: 2 }] },
          markscheme: { principles: [{ kind: "definition", name: "2FA", statement: "Two verification steps." }], steps: [
            { reasoning: "Password plus a second factor = 2 steps.", working: "2", marks: 1, markCode: "B" },
          ], finalAnswer: "2" },
        },
        {
          id: "olcs-u5-pr-q9", difficulty: "core", totalMarks: 1,
          stem: "Which is NOT a defence against cyber threats?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Strong unique passwords" },
            { id: "b", text: "Regular backups" },
            { id: "c", text: "Disabling software updates" },
            { id: "d", text: "Two-factor authentication" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Patching", statement: "Updates are a defence." }], steps: [{ reasoning: "Disabling updates removes protection.", working: "\\text{updates}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Disabling software updates" },
        },
        {
          id: "olcs-u5-pr-q10", difficulty: "core", totalMarks: 2,
          stem: "State two reasons to keep software and devices updated.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Patching", statement: "Fixes known security flaws." }], steps: [
            { reasoning: "Patches known vulnerabilities.", working: "\\text{patch}", marks: 1, markCode: "M" },
            { reasoning: "Prevents attackers exploiting known flaws.", working: "\\text{exploit}", marks: 1, markCode: "A" },
          ], finalAnswer: "Updates patch vulnerabilities and stop known exploits." },
        },
        {
          id: "olcs-u5-pr-q11", difficulty: "challenge", totalMarks: 1,
          stem: "Backups should be stored offline or separately mainly because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "They need no password" },
            { id: "b", text: "They use less space" },
            { id: "c", text: "Ransomware cannot encrypt them" },
            { id: "d", text: "They are faster to access" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Backups", statement: "Separate copies survive attacks." }], steps: [{ reasoning: "Offline backups can't be reached by ransomware.", working: "\\text{offline}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Ransomware cannot encrypt them" },
        },
        {
          id: "olcs-u5-pr-q12", difficulty: "core", totalMarks: 1,
          stem: "A defence-in-depth setup uses a firewall, antivirus, 2FA and backups. How many layers is that?",
          response: { type: "numeric", parts: [{ label: "Number of layers", answer: 4 }] },
          markscheme: { principles: [{ kind: "principle", name: "Defence in depth", statement: "Multiple layered defences." }], steps: [
            { reasoning: "Firewall, antivirus, 2FA, backups = 4 layers.", working: "4", marks: 1, markCode: "B" },
          ], finalAnswer: "4" },
        },
        {
          id: "olcs-u5-pr-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why user awareness is an important security layer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "User awareness", statement: "People are a target." }], steps: [
            { reasoning: "Phishing/social engineering target people, not just systems.", working: "\\text{people}", marks: 1, markCode: "M" },
            { reasoning: "Trained users recognise and avoid scams.", working: "\\text{recognise}", marks: 1, markCode: "M" },
            { reasoning: "Complements technical defences.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Users are targeted by phishing; awareness stops many attacks that technical defences miss." },
        },
        {
          id: "olcs-u5-pr-q14", difficulty: "challenge", totalMarks: 1,
          stem: "The principle of 'least privilege' means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Everyone is an administrator" },
            { id: "b", text: "Access is free for all" },
            { id: "c", text: "No passwords are needed" },
            { id: "d", text: "Users get only the access they need" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Least privilege", statement: "Minimum necessary access." }], steps: [{ reasoning: "Least privilege = minimal access.", working: "\\text{minimal}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Users get only the access they need" },
        },
        {
          id: "olcs-u5-pr-q15", difficulty: "core", totalMarks: 2,
          stem: "State how many defence layers are listed and how many verification steps 2FA requires.",
          response: { type: "numeric", parts: [
            { label: "Defence layers", answer: 8 },
            { label: "2FA steps", answer: 2 },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Defences", statement: "8 layers; 2FA = 2 steps." }], steps: [
            { reasoning: "Eight defence layers listed.", working: "8", marks: 1, markCode: "M" },
            { reasoning: "2FA requires two steps.", working: "2", marks: 1, markCode: "A" },
          ], finalAnswer: "8 layers; 2 steps" },
        },
        {
          id: "olcs-u5-pr-q16", difficulty: "challenge", totalMarks: 9,
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
            { part: "c", reasoning: "One breach doesn't expose all accounts.", working: "\\text{limit}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct reasoning.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Multiple layers: firewall+AV+2FA.", working: "\\text{layers}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "If one fails others protect.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) 3 measures (b) restore without ransom (c) limits breach (d) layered defences" },
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
