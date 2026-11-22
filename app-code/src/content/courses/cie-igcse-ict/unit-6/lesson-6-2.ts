import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cieigcseict-u6-lesson-6-2",
  code: "6-2",
  title: "Cybersecurity: Threats and Defences",
  goal: "I CAN identify cyber threats and evaluate defensive measures.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 6: ICT in society"],
  vocabulary: [
    {
      term: "Malware",
      definition: "Malicious software (viruses, worms, trojans).",
    },
    {
      term: "Phishing",
      definition: "Fraudulent messages tricking users into revealing data.",
    },
    {
      term: "Ransomware",
      definition: "Malware encrypting files demanding payment.",
    },
    { term: "Firewall", definition: "Network barrier filtering traffic." },
    {
      term: "Encryption",
      definition: "Scrambling data to prevent unauthorised reading.",
    },
    {
      term: "Social engineering",
      definition: "Manipulating people into security breaches.",
    },
  ],
  concepts: [
    {
      id: "cieigcseict-u6l2-c1-threats",
      title: "Common cyber threats",
      skill: "Identify types of cyber threats and how they operate.",
      lesson: {
        sections: [
          {
            heading: "Malware types",
            body: "**Virus**: attaches to files, needs host to spread. **Worm**: self-replicating, spreads via networks without host. **Trojan**: disguised as legitimate software, opens backdoor. **Spyware**: secretly monitors activity. **Adware**: unwanted ads, often bundled. **Ransomware**: encrypts files, demands payment — major threat to businesses.",
          },
          {
            heading: "Other threats",
            body: "**Phishing**: fake emails/sites tricking credentials — spear phishing targets individuals. **Social engineering**: manipulating people (pretexting, baiting) — humans weakest link. **DDoS**: floods servers with traffic, denying service. **Man-in-the-middle**: intercepts communication. **SQL injection**: malicious database queries via input fields.",
          },
        ],
        keyFormulas: [
          { name: "Virus", statement: "Needs host" },
          { name: "Worm", statement: "Self-spreads" },
          { name: "Trojan", statement: "Disguised" },
        ],
        workedExample: {
          problem:
            "An email says 'Your account is locked, click here to verify'. What threat?",
          solution:
            "Phishing — fraudulent message designed to steal credentials; check sender address, don't click links, verify independently.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'worm' differs from a 'virus' because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Needs a host file" },
              { id: "b", text: "Self-replicates without needing a host" },
              { id: "c", text: "Only affects Macs" },
              { id: "d", text: "Is harmless" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Worm vs virus",
                statement: "Self-spreading.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Self-replicates",
            commonErrors: ["Needs host."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'phishing'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Phishing",
                statement: "Fraudulent messages.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Goal.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Fraudulent emails/messages impersonating legitimate organisations to trick users into revealing passwords, card details, or installing malware.",
            commonErrors: ["Legitimate email."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'ransomware' works and its impact.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ransomware",
                statement: "Encrypt + demand.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Impact.", marks: 1, markCode: "M" },
              { reasoning: "Response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Encrypts victim's files, demands payment (usually crypto) for decryption key; can paralyse businesses — hospitals, schools; prevention: backups, patching, user awareness; paying doesn't guarantee recovery.",
            commonErrors: ["Just annoying ads."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two types of 'social engineering' attacks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Social engineering",
                statement: "Human manipulation.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. phishing (fake messages) and pretexting (impersonating authority — 'IT support needs your password'); exploits human trust, harder to defend than technical attacks.",
            commonErrors: ["Technical only."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse why 'humans are the weakest link' in cybersecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human factor",
                statement: "Exploitable.",
              },
            ],
            steps: [
              { reasoning: "Vulnerabilities.", marks: 1, markCode: "M" },
              { reasoning: "Attack methods.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Phishing, weak passwords, oversharing bypass technical defences — most breaches involve human error; training helps but can't eliminate; need defence-in-depth (technical + human + process).",
            commonErrors: ["Technology suffices."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'Trojan horse' in cybersecurity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Trojan", statement: "Disguised." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Malware disguised as legitimate software — user installs willingly; opens backdoor for attackers, steals data, or downloads other malware; doesn't self-replicate.",
            commonErrors: ["Self-spreading."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Ransomware' primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spams email" },
              { id: "b", text: "Encrypts files and demands payment" },
              { id: "c", text: "Shows ads" },
              { id: "d", text: "Steals passwords silently" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Ransomware", statement: "Encrypt+pay." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Encrypts+demands",
            commonErrors: ["Spyware."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two signs that an email might be a phishing attempt.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Phishing signs",
                statement: "Indicators.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. urgent language creating panic ('account suspended'), suspicious sender address or spelling errors — also unexpected requests for credentials, links to unfamiliar domains.",
            commonErrors: ["Professional appearance only."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'SQL injection' and how it exploits websites.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SQL injection",
                statement: "Malicious queries.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Prevention.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Attacker enters malicious SQL code in input field — bypasses authentication, accesses/modifies database; prevent via input validation, parameterised queries, least privilege.",
            commonErrors: ["Virus only."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of antivirus software against modern threats.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AV eval",
                statement: "Necessary but insufficient.",
              },
            ],
            steps: [
              { reasoning: "Effectiveness.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Detects known malware signatures, blocks known threats — but misses zero-day exploits, sophisticated attacks, social engineering; essential layer but needs complementary defences (firewall, updates, training).",
            commonErrors: ["Complete protection."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of malware disguises itself as legitimate software to trick users into running it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worm" },
              { id: "b", text: "Trojan horse" },
              { id: "c", text: "Adware" },
              { id: "d", text: "Spyware" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trojan",
                statement: "Disguised software.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Trojan horse",
            commonErrors: ["Worm confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'adware' and how does it typically affect users?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Adware",
                statement: "Unwanted advertising.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect described.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Software that displays unwanted advertisements, often bundled with free downloads; it may track browsing to target ads and can slow down or clutter the device.",
            commonErrors: ["Ransomware confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A DDoS attack aims to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Encrypt files and demand payment" },
              { id: "b", text: "Overwhelm a server with traffic so it cannot provide service" },
              { id: "c", text: "Steal passwords directly" },
              { id: "d", text: "Spread itself via email attachments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "DDoS",
                statement: "Traffic flood.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Overwhelm server",
            commonErrors: ["Ransomware confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how 'spear phishing' differs from general phishing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Spear vs general",
                statement: "Targeted vs mass.",
              },
            ],
            steps: [
              { reasoning: "General phishing.", marks: 1, markCode: "M" },
              { reasoning: "Spear phishing.", marks: 1, markCode: "M" },
              { reasoning: "Impact/detection.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "General phishing sends mass emails hoping someone responds; spear phishing targets specific individuals/organisations using personalised details (name, role, real events) — harder to detect and more likely to succeed.",
            commonErrors: ["No difference."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of the following is an example of a 'social engineering' attack?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Encrypting files for ransom" },
              { id: "b", text: "A self-replicating computer worm" },
              { id: "c", text: "A firewall blocking traffic" },
              { id: "d", text: "Pretending to be IT support to obtain a password" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social engineering",
                statement: "Manipulating people.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Deceiving a person",
            commonErrors: ["Technical attack."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that 'technology alone can eliminate cyber threats'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tech vs humans",
                statement: "Layered defence.",
              },
            ],
            steps: [
              { reasoning: "What tech achieves.", marks: 1, markCode: "M" },
              { reasoning: "What it cannot.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Firewalls, antivirus and encryption stop many technical attacks but cannot stop social engineering, human error, zero-day exploits or insider threats; effective security needs technology PLUS training, policies, patching and incident response — 'eliminate' is too strong.",
            commonErrors: ["Technology sufficient."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u6l2-c2-defences",
      title: "Cybersecurity defences",
      skill: "Evaluate technical and procedural security measures.",
      lesson: {
        sections: [
          {
            heading: "Technical defences",
            body: "**Firewall**: filters network traffic by rules — hardware/software barrier. **Encryption**: scrambles data (AES) — protects in transit (HTTPS/TLS) and at rest. **Antivirus/anti-malware**: scans/detects threats. **Access control**: authentication + authorisation — least privilege principle. **Patching**: updates fix vulnerabilities — critical for security.",
          },
          {
            heading: "Procedural and human defences",
            body: "**Security awareness training**: teach phishing recognition, password hygiene — reduces human error. **Incident response plan**: procedures for breaches — minimise damage. **Backup strategy**: regular offline backups protect against ransomware. **Penetration testing**: ethical hackers find vulnerabilities before criminals. **Multi-factor authentication**: adds layer beyond passwords.",
          },
        ],
        keyFormulas: [
          { name: "Firewall", statement: "Traffic filter" },
          { name: "Encryption", statement: "Scrambles data" },
          { name: "MFA", statement: "Extra auth layer" },
        ],
        workedExample: {
          problem: "How should a business protect against ransomware?",
          solution:
            "Regular offline backups (can restore without paying), patching, employee training (don't click phishing), firewall + antivirus, incident response plan.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A firewall primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Scans for viruses" },
              { id: "b", text: "Filters network traffic" },
              { id: "c", text: "Backs up data" },
              { id: "d", text: "Encrypts files" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Firewall", statement: "Traffic filter." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Filters traffic",
            commonErrors: ["Encryption."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'encryption'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Encryption",
                statement: "Scrambling.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Converting readable data into coded form using algorithm + key — only authorised parties with key can decrypt; protects confidentiality in transit and at rest.",
            commonErrors: ["Compression."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'least privilege' principle in access control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Least privilege",
                statement: "Minimum access.",
              },
            ],
            steps: [
              { reasoning: "Principle.", marks: 1, markCode: "M" },
              { reasoning: "Application.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Users get only minimum access needed for their role — limits damage if account compromised; e.g. receptionist can't access financial records; reduces insider threat.",
            commonErrors: ["Everyone full access."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three reasons why regular software patching is critical for security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Patching",
                statement: "Vulnerability fixes.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. fixes known vulnerabilities exploited by attackers, closes security holes before criminals use them, maintains compatibility and stability — unpatched systems are easy targets.",
            commonErrors: ["Optional update."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'defence in depth' as a cybersecurity strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence in depth",
                statement: "Layered.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Layers.", marks: 1, markCode: "M" },
              { reasoning: "Effectiveness.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Multiple overlapping defences — if one fails others catch; firewall + AV + training + backups + MFA; more resilient than single defence but complex, costly; necessary for critical systems.",
            commonErrors: ["Single defence enough."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'multi-factor authentication' (MFA)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MFA",
                statement: "Multiple proofs.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Requires two or more verification factors — something you know (password), have (phone/token), are (biometric); adds security beyond password alone.",
            commonErrors: ["Password only."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Encryption protects data by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deleting it" },
              { id: "b", text: "Making it unreadable without the key" },
              { id: "c", text: "Compressing it" },
              { id: "d", text: "Backing it up" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Encryption", statement: "Key needed." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Unreadable without key",
            commonErrors: ["Compression."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons organisations need an 'incident response plan'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "IR plan",
                statement: "Breach procedures.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. minimise damage by responding quickly and systematically, and meet legal obligations (GDPR breach notification within 72 hours) — also preserves evidence, coordinates response.",
            commonErrors: ["No need."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'security awareness training' reduces cyber risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training",
                statement: "Human defence.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Topics.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Teaches staff to recognise phishing, use strong passwords, report suspicious activity — reduces human error (major breach vector); studies show trained users significantly less likely to fall for attacks.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of 'encryption' in protecting data in transit versus at rest.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Encryption roles",
                statement: "Transit vs rest.",
              },
            ],
            steps: [
              { reasoning: "Transit.", marks: 1, markCode: "M" },
              { reasoning: "At rest.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Transit (HTTPS/TLS): protects against interception — essential for online transactions. At rest: protects stolen devices/databases — but doesn't prevent authorised access or key compromise; both needed for comprehensive protection.",
            commonErrors: ["One context only."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A firewall primarily protects a network by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Encrypting all files on the computer" },
              { id: "b", text: "Filtering network traffic according to security rules" },
              { id: "c", text: "Automatically deleting viruses" },
              { id: "d", text: "Backing up data regularly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Firewall",
                statement: "Traffic filter.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Filters traffic",
            commonErrors: ["Encryption confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'patching' mean in cybersecurity, and why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Patching",
                statement: "Security updates.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Importance explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Applying software updates that fix known vulnerabilities; important because unpatched systems leave security holes that attackers actively exploit.",
            commonErrors: ["Optional update."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "HTTPS protects users mainly by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hiding the website's address" },
              { id: "b", text: "Speeding up downloads" },
              { id: "c", text: "Blocking all cookies" },
              { id: "d", text: "Encrypting the connection between browser and server" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "HTTPS",
                statement: "TLS encryption.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Encrypts connection",
            commonErrors: ["Speed confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the concept of 'defence in depth' in cybersecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Defence in depth",
                statement: "Layered security.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Examples of layers.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Using multiple overlapping security layers — firewall, antivirus, encryption, access control, staff training — so that if one defence fails, others still protect the system; reduces the chance a single breach succeeds.",
            commonErrors: ["Single defence."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "An organisation's 'incident response plan' should include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paying the ransom immediately" },
              { id: "b", text: "Ignoring minor security incidents" },
              { id: "c", text: "Deleting all system logs" },
              { id: "d", text: "Predefined steps to detect, contain and recover from a breach" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "IR plan",
                statement: "Breach procedures.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Detect/contain/recover steps",
            commonErrors: ["Paying ransom."],
          },
        },
        {
          id: "cieigcseict-q-u6l2c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of security awareness training as a defence against cybercrime.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Training eval",
                statement: "Human layer.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Trains staff to recognise phishing, use strong passwords and follow procedures — addresses the 'weakest link' (humans); but effectiveness depends on quality, frequency and reinforcement, and people can still err under pressure; essential complement to technical defences, not a replacement.",
            commonErrors: ["Training alone sufficient."],
          },
        },
      ],
    },
  ],
};
