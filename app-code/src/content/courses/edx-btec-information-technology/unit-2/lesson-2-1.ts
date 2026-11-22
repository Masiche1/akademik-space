import type { Lesson } from "../../../types.ts";

export const lesson201: Lesson = {
  id: "edxbtecit-u2-lesson-2-1",
  code: "2-1",
  title: "Cyber Threats and Attacks",
  goal: "I CAN identify common cyber threats, attack methods and their impacts.",
  standards: [
    "BTEC L3 National Information Technology — Unit 2: Cyber Security and Incident Management",
  ],
  vocabulary: [
    {
      term: "Malware",
      definition:
        "Malicious software designed to harm or exploit systems — viruses, worms, trojans, ransomware, spyware.",
    },
    {
      term: "Phishing",
      definition:
        "Fraudulent messages tricking users into revealing credentials or installing malware.",
    },
    {
      term: "Ransomware",
      definition:
        "Malware encrypting files and demanding payment for decryption.",
    },
    {
      term: "Social engineering",
      definition:
        "Manipulating people into revealing information or performing actions — pretexting, baiting, tailgating.",
    },
  ],
  concepts: [
    {
      id: "edxbtecit-u2-l1-malware",
      title: "Malware and Network Attacks",
      skill: "Identify types of malware and common network attacks.",
      lesson: {
        sections: [
          {
            heading: "Malware types",
            body: "**Virus**: attaches to files/programs, spreads when executed. **Worm**: self-replicates across networks without user action. **Trojan**: disguised as legitimate software, opens backdoors. **Ransomware**: encrypts data, demands payment. **Spyware**: secretly monitors activity, steals data. **Adware**: unwanted advertising software.\n\n**Rootkit**: deep system access hiding malicious activity. **Keylogger**: records keystrokes capturing passwords. Malware spreads via email attachments, downloads, infected websites and removable media.",
          },
          {
            heading: "Network attacks",
            body: "**Denial of Service (DoS/DDoS)**: floods systems with traffic to make them unavailable. **Man-in-the-middle (MitM)**: intercepts communication between parties. **SQL injection**: malicious code entered into database queries. **Cross-site scripting (XSS)**: injecting scripts into web pages viewed by others.\n\n**Brute force**: systematically guessing passwords. **Password spraying**: trying common passwords across many accounts. **Phishing** remains the most common initial attack vector — exploiting human rather than technical weaknesses.",
          },
        ],
        keyFormulas: [
          {
            name: "Malware types",
            statement: "Virus, worm, trojan, ransomware, spyware, rootkit.",
          },
          {
            name: "Attack vectors",
            statement:
              "Email, web, network, physical access, social engineering.",
          },
        ],
        workedExample: {
          problem:
            "Employees receive emails 'Your password expires — click here'. What attack is this?",
          solution:
            "Phishing — social engineering tricking users into revealing credentials or installing malware.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l1-malware-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which malware encrypts files and demands payment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ransomware" },
              { id: "b", text: "Virus" },
              { id: "c", text: "Adware" },
              { id: "d", text: "Spyware" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ransomware",
                statement: "Encrypts data, demands ransom for decryption.",
              },
            ],
            steps: [
              {
                reasoning: "Ransomware encrypts + demands payment.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Ransomware",
            commonErrors: ["Confusing with other malware."],
          },
        },
        {
          id: "edxbtecit-u2-l1-malware-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between a virus and a worm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virus vs worm",
                statement:
                  "Virus needs host file + execution; worm self-replicates across networks.",
              },
            ],
            steps: [
              {
                reasoning: "Virus: attaches to files, needs execution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Worm: self-replicates autonomously.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Virus attaches to files and needs user execution; worm spreads autonomously across networks.",
            commonErrors: ["Conflated.", "No spread mechanism."],
          },
        },
        {
          id: "edxbtecit-u2-l1-malware-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why phishing is often more effective than technical attacks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Phishing effectiveness",
                statement:
                  "Exploits human psychology — trust, urgency, fear — bypassing technical controls.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Targets human vulnerability not technical weakness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uses urgency/fear/trust manipulation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bypasses technical security via user action.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Phishing exploits human psychology — urgency, fear, trust — making it more effective than purely technical attacks.",
            commonErrors: ["Only technical view.", "No psychological factors."],
          },
        },
        {
          id: "edxbtecit-u2-l1-malware-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company suffers a ransomware attack encrypting all files.",
          parts: [
            {
              label: "a",
              prompt: "Identify two ways the attack likely entered the system.",
              marks: 2,
            },
            { label: "b", prompt: "Explain two immediate impacts.", marks: 3 },
            {
              label: "c",
              prompt:
                "Suggest two prevention measures that could have stopped it.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ransomware response",
                statement:
                  "Entry via phishing/malware; impacts = data loss + downtime; prevention = backups + security.",
              },
            ],
            steps: [
              {
                reasoning: "Entry 1 e.g. phishing email.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Entry 2 e.g. unpatched vulnerability/download.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Impact 1: data encrypted/inaccessible.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Impact 2: business operations halted.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Impact 3: ransom demand/cost.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "Prevention 1 e.g. offline backups.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Prevention 2 e.g. email filtering/user training.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Prevention 3 e.g. patching/antivirus.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) phishing/download (b) data loss/downtime/ransom (c) backups+training+patching",
            commonErrors: ["No entry vectors.", "No prevention."],
          },
        },
      ],
    },
    {
      id: "edxbtecit-u2-l1-social",
      title: "Social Engineering and Human Factors",
      skill:
        "Explain social engineering techniques and why humans are the weakest security link.",
      lesson: {
        sections: [
          {
            heading: "Social engineering techniques",
            body: "**Phishing**: fraudulent emails/messages. **Spear phishing**: targeted at specific individuals using researched details. **Pretexting**: creating a false scenario to extract information. **Baiting**: offering something attractive (free software, USB) containing malware. **Tailgating**: following authorised person into secure area.\n\n**Quid pro quo**: offering service in exchange for information. **Vishing**: voice phishing via phone. Attackers exploit trust, authority, urgency, fear and helpfulness — impersonating IT support, executives or authorities.",
          },
          {
            heading: "Why humans fail",
            body: "People are the weakest link because: they can be deceived (unlike machines), they have access to systems, they make errors under pressure, and they're often the target of manipulation.\n\n**Security awareness training** reduces risk — teaching staff to recognise phishing, verify requests, question urgency, and report suspicious activity. **Principle of least privilege** limits damage when accounts are compromised. Verification procedures (callback policies) prevent impersonation fraud.",
          },
        ],
        keyFormulas: [
          {
            name: "Social engineering",
            statement:
              "Manipulating people — trust, urgency, authority exploited.",
          },
          {
            name: "Least privilege",
            statement: "Users get minimum access needed for their role.",
          },
        ],
        workedExample: {
          problem:
            "An 'IT support' caller asks for your password to 'fix an issue'. What should you do?",
          solution:
            "Refuse — legitimate IT never asks for passwords; verify via official channel and report the attempt.",
        },
      },
      questions: [
        {
          id: "edxbtecit-u2-l1-social-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which technique involves leaving a malware-infected USB in a car park?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Phishing" },
              { id: "b", text: "Tailgating" },
              { id: "c", text: "Baiting" },
              { id: "d", text: "Pretexting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Baiting",
                statement: "Offering attractive item containing malware.",
              },
            ],
            steps: [
              {
                reasoning: "Baiting = tempting offer with malware.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Baiting",
            commonErrors: ["Confusing with phishing."],
          },
        },
        {
          id: "edxbtecit-u2-l1-social-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'verify before you trust' is a key defence against social engineering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Verification",
                statement:
                  "Confirming identity/request legitimacy through independent channels prevents impersonation.",
              },
            ],
            steps: [
              {
                reasoning: "Attackers impersonate trusted parties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Independent verification defeats impersonation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Procedures like callback policies help.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Verification through independent channels prevents acting on fraudulent requests — attackers can't fake callbacks.",
            commonErrors: ["No mechanism.", "Generic advice."],
          },
        },
        {
          id: "edxbtecit-u2-l1-social-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse why security awareness training is as important as technical controls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human factor",
                statement:
                  "Most breaches start with human error — training addresses the weakest link.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technical controls can't stop user-initiated breaches.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Training reduces phishing success/error rates.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates reporting culture for early detection.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Coherent analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Most breaches exploit humans — training reduces susceptibility and creates a reporting culture.",
            commonErrors: [
              "Only technical controls.",
              "No evidence/mechanism.",
            ],
          },
        },
        {
          id: "edxbtecit-u2-l1-social-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An employee receives an urgent email from 'the CEO' requesting gift card purchases.",
          parts: [
            {
              label: "a",
              prompt: "Identify the attack type and technique used.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain two red flags in this scenario.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest the correct response and why.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CEO fraud",
                statement:
                  "Business email compromise exploiting authority and urgency.",
              },
            ],
            steps: [
              {
                reasoning: "Attack: phishing/business email compromise.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Technique: impersonation + urgency.",
                marks: 1,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Red flag 1: unusual request/gift cards.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Red flag 2: urgency/authority pressure.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Red flag 3: unusual sender/urgency.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Response: verify via separate channel.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Response: report suspicious email.",
                marks: 1,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Justification: prevents fraud.",
                marks: 1,
                markCode: "R",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) phishing/CEO fraud (b) unusual request+urgency+sender (c) verify+report",
            commonErrors: ["Complying with request.", "No verification."],
          },
        },
      ],
    },
  ],
};
