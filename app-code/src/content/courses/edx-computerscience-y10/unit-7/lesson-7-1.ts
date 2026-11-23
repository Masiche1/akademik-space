import type { Lesson } from "../../../types.ts";

export const lesson271: Lesson = {
  id: "ecs10-u7-lesson-7-1",
  code: "7-1",
  title: "Cyber Threats and Malware",
  goal: "I CAN identify types of malware and common attack methods and explain how they harm computer systems and users.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Cybersecurity"],
  
  vocabulary: [
    { term: "Malware", definition: "Malicious software designed to damage, disrupt or gain unauthorised access to a system." },
    { term: "Virus", definition: "Malware that attaches to legitimate files or programs and replicates when the host runs." },
    { term: "Worm", definition: "Self-replicating malware that spreads across networks without needing a host file or user action." },
    { term: "Trojan", definition: "Malware disguised as legitimate software that performs harmful actions once installed." },
    { term: "Ransomware", definition: "Malware that encrypts a victim's files and demands payment for the decryption key." },
    { term: "DDoS attack", definition: "Distributed denial of service — many devices flood a target to make it unavailable." },
  ],
  concepts: [
    {
      id: "ecs10-u7-malware-attacks",
      title: "Malware and attack methods",
      skill: "Classify malware types and network attacks and describe their effects on systems and data.",
      lesson: {
        sections: [
          {
            heading: "Types of malware",
            body: "**Malware** is any software written to harm or exploit a system. A **virus** attaches itself to a host file or program and spreads when the infected file is opened or run. A **worm** is self-replicating and spreads across a network automatically, often exploiting security weaknesses — no user action is needed. A **Trojan** disguises itself as useful software (a game, utility or 'crack') and performs harmful actions once installed. **Spyware** secretly records activity such as keystrokes. **Ransomware** encrypts files and demands payment. **Adware** displays unwanted advertisements, sometimes tracking user behaviour.",
          },
          {
            heading: "Network attacks",
            body: "A **DDoS attack** uses a botnet — thousands of infected devices ('zombies') — to flood a server with traffic until it cannot respond to genuine users. Other attacks include **man-in-the-middle** interception of communications and **brute-force** password guessing. Malware usually enters through email attachments, infected downloads, removable media or unpatched software vulnerabilities.",
          },
        ],
        keyFormulas: [
          { name: "Malware", statement: "malicious software — virus, worm, Trojan, spyware, ransomware, adware" },
          { name: "DDoS", statement: "botnet floods target with traffic → service unavailable" },
          { name: "Infection spread", statement: "virus = host file + user action; worm = automatic network spread" },
        ],
        workedExample: {
          problem: "A school notices all files on one PC have been renamed with a '.locked' extension and a ransom note demands Bitcoin. Identify the malware and explain what happened.",
          solution: "This is ransomware. The malware encrypted the victim's files so they cannot be opened without the attacker's decryption key, then demanded payment. Paying is risky and does not guarantee recovery; restoring from backups is the safer response.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-malware-attacks-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which type of malware copies itself by attaching to legitimate files and programs?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Worm"
                    },
                    {
                              "id": "b",
                              "text": "Virus"
                    },
                    {
                              "id": "c",
                              "text": "Adware"
                    },
                    {
                              "id": "d",
                              "text": "Rootkit"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Virus",
                              "statement": "Attaches to host files and replicates when the host runs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A virus needs a host file/program and user action to spread; a worm spreads automatically.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Virus",
          "commonErrors": [
                    "Confusing a virus with a worm — worms do not need a host file."
          ]
},
        },
        {
          id: "ecs10-u7-malware-attacks-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Distinguish between a virus and a worm.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Virus vs worm",
                              "statement": "Host file + user action vs automatic network spread."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A virus attaches to a host file or program and needs that file to be opened or run to spread.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A worm is self-replicating and spreads across a network automatically, often exploiting vulnerabilities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A worm does not need a host file or user action to propagate.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Virus = host file + user action; worm = self-replicating network spread.",
          "commonErrors": [
                    "Saying both need a user to click — only the virus does."
          ]
},
        },
        {
          id: "ecs10-u7-malware-attacks-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how ransomware works and describe its impact on a victim.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Ransomware",
                              "statement": "Encrypts files, demands payment for the key."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Ransomware encrypts the victim's files so they cannot be opened without the decryption key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "The attacker then demands payment (often cryptocurrency) in exchange for the key.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Impact: data and systems become inaccessible, causing lost work and business disruption.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Payment does not guarantee recovery and may fund further crime; victims often rely on backups.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Encrypts files and demands ransom; data inaccessible, business disrupted, recovery uncertain.",
          "commonErrors": [
                    "Describing ransomware as data deletion — files are encrypted, not deleted."
          ]
},
        },
        {
          id: "ecs10-u7-malware-attacks-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school notices strange behaviour on one classroom PC: pop-ups appear constantly, the browser homepage changed and new toolbars appeared.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify two signs that the PC is infected with malware.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two immediate containment actions the technician should take.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Incident response",
                              "statement": "Detect signs, isolate, remove, restore."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Persistent pop-up adverts indicate adware.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Changed homepage and unexpected toolbars indicate a browser hijacker/spyware.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Any further sign such as slow performance or unknown programs running.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Isolate the PC from the network to stop the malware spreading to other machines.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Run a full antivirus scan and remove/quarantine detected threats.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Restore affected files from a clean backup if data was damaged.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) pop-ups, changed homepage/toolbars (b) isolate, scan/remove, restore backup.",
          "commonErrors": [
                    "Reformatting the PC before isolating it, letting the infection spread."
          ]
},
        },
        {
          id: "ecs10-u7-malware-attacks-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company's website becomes very slow and then completely unresponsive for several hours. Investigation shows traffic from tens of thousands of devices worldwide.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain how this attack works and name it.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two ways the company could reduce the impact of such an attack.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "DDoS",
                              "statement": "Botnet floods target until service fails."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "This is a distributed denial of service (DDoS) attack.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "A botnet of infected devices sends massive simultaneous requests to the server.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The server cannot cope with the traffic, so genuine users cannot access the site.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Use a content delivery network or DDoS mitigation service to absorb/filter attack traffic.",
                              "marks": 2,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Rate limiting and traffic filtering block suspicious request patterns at the firewall.",
                              "marks": 2,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) DDoS via botnet flooding (b) mitigation service/CDN, rate limiting and filtering.",
          "commonErrors": [
                    "Calling it a virus attack — the devices sending traffic are bots, not the website itself."
          ]
},
        },
        {
          id: "ecs10-u7-malware-attacks-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "An organisation is reviewing its cybersecurity after a ransomware incident.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define malware and name four types, giving one effect of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how a botnet is created and used in a DDoS attack.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate why keeping software patched is important in preventing attacks.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Malware taxonomy",
                              "statement": "Malware = harmful software; each type acts differently."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Malware is software designed to damage, disrupt or gain unauthorised access.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Virus — replicates via host files; worm — self-spreads across networks; Trojan — disguised as legitimate software; ransomware — encrypts files for payment (spyware/adware also acceptable).",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Any one effect correctly linked, e.g. ransomware makes files inaccessible.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Infected devices are silently controlled remotely, forming a botnet.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The attacker commands all bots to send requests to the target simultaneously.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The flood of traffic overwhelms the target so it cannot serve genuine users.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Updates fix security vulnerabilities that malware and attackers exploit.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Unpatched systems are easy targets for known exploits, so patching closes those doors.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Patching is cheap and routine compared with the cost of an attack, so it is highly worthwhile.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) malware + four types/effects (b) infected bots flood target (c) patches close known vulnerabilities cheaply.",
          "commonErrors": [
                    "Listing malware names without effects; listing effects without naming the type."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u7-social-engineering",
      title: "Social engineering and the human factor",
      skill: "Explain phishing and other social engineering techniques and evaluate why users are a key attack surface.",
      lesson: {
        sections: [
          {
            heading: "Social engineering",
            body: "**Social engineering** manipulates people into revealing information or performing actions that compromise security. **Phishing** uses fake emails, texts or websites impersonating trusted organisations to steal credentials or install malware. **Spear phishing** targets specific individuals with personalised details. **Pretexting** invents a scenario (e.g. 'IT support needs your password') to gain trust. **Baiting** offers something desirable (free software, USB drive) that contains malware. **Shoulder surfing** is watching someone enter a password. **Tailgating** is following an authorised person through a secure door.",
          },
          {
            heading: "Why people are the weak link",
            body: "Technical defences cannot stop a user who willingly gives away a password or clicks a malicious link. Attackers exploit trust, urgency, curiosity and politeness. Strong passwords, verification of requests through official channels, and security awareness training reduce the risk. Users should check sender addresses, look for spelling errors, avoid urgent demands and never share credentials.",
          },
        ],
        keyFormulas: [
          { name: "Social engineering", statement: "manipulating people to reveal information or act unsafely" },
          { name: "Phishing", statement: "fake message impersonating a trusted source to steal data" },
          { name: "Least-privilege thinking", statement: "verify requests; never share credentials" },
        ],
        workedExample: {
          problem: "An employee receives an email 'from the bank' saying the account is locked and asking them to click a link and enter their password. Explain the attack and the safe response.",
          solution: "This is phishing — the email impersonates a trusted organisation and uses urgency to trick the user into revealing credentials on a fake site. The safe response is not to click or enter details, verify via the bank's official app/website or phone number, and report the email.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-social-engineering-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is phishing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of computer virus"
                    },
                    {
                              "id": "b",
                              "text": "Fake messages impersonating trusted sources to steal information"
                    },
                    {
                              "id": "c",
                              "text": "A network cable fault"
                    },
                    {
                              "id": "d",
                              "text": "A method of encryption"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Phishing",
                              "statement": "Deceptive messages impersonating trusted organisations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Phishing uses fake emails/messages/websites to trick victims into revealing credentials or installing malware.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Fake messages impersonating trusted sources",
          "commonErrors": [
                    "Confusing phishing with pharming or general malware."
          ]
},
        },
        {
          id: "ecs10-u7-social-engineering-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe two social engineering techniques other than phishing.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social engineering",
                              "statement": "Manipulating people to compromise security."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Pretexting — inventing a believable scenario (e.g. IT support) to gain trust and extract information.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Baiting — offering something attractive (free software, USB stick) that contains malware.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Shoulder surfing or tailgating — physically observing passwords or entering secure areas.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Any two of pretexting, baiting, shoulder surfing, tailgating, spear phishing.",
          "commonErrors": [
                    "Repeating phishing or naming a technical attack like a DDoS."
          ]
},
        },
        {
          id: "ecs10-u7-social-engineering-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why users are often described as the weakest link in computer security.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Human factor",
                              "statement": "Users can bypass technical defences through mistakes or manipulation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Technical controls (firewalls, encryption) cannot stop a user who willingly reveals a password or clicks a link.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Attackers exploit human traits — trust, urgency, curiosity, politeness — through social engineering.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "One careless action (weak password, unverified request) can compromise an entire system.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Therefore security depends as much on user behaviour and training as on technology.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Users can bypass technical defences via mistakes/manipulation; behaviour and training are critical.",
          "commonErrors": [
                    "Listing threats without explaining the human vulnerability."
          ]
},
        },
        {
          id: "ecs10-u7-social-engineering-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An employee receives an email claiming to be from the company's IT department: 'Your mailbox is full. Verify your password within 24 hours or your account will be deleted.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Identify four features of this message that suggest it is a phishing attempt.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two safe actions the employee should take.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Phishing indicators",
                              "statement": "Urgency, credential requests, spoofed sender, threats."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Creates urgency ('within 24 hours') and threatens consequences (account deleted).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Asks for a password — legitimate IT never requests credentials by email.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Generic greeting/suspicious sender address; a link may lead to a fake login page.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Do not click the link or enter any credentials.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Verify by contacting IT through an official known channel, and report the email.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Delete or report the message so colleagues are not also targeted.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) urgency, credential request, spoofed sender/link (b) don't click/enter details, verify via official channel, report.",
          "commonErrors": [
                    "Identifying features but not safe actions; clicking 'just to check'."
          ]
},
        },
        {
          id: "ecs10-u7-social-engineering-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A visitor follows an employee through a secure door without showing a badge ('tailgating'), then stands behind another employee typing their password ('shoulder surfing').",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain the risk each technique poses to the organisation.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Recommend three physical or procedural controls to prevent these attacks.",
                    "marks": 4
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Physical security",
                              "statement": "Tailgating and observation bypass access controls."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Tailgating lets an unauthorised person enter secure areas and access systems or data.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Shoulder surfing reveals a password, giving the attacker valid credentials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Combined, the attacker gains both physical access and an account login.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Challenge unknown people at doors — 'badge please' policy so everyone badges in.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Keep doors closed/locked; use turnstiles or manned reception for secure areas.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Screen privacy filters and encourage users to shield keyboards when entering passwords.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Security awareness training so staff challenge strangers and protect credentials.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) unauthorised access + stolen credentials (b) badge challenges, door control, privacy screens, training.",
          "commonErrors": [
                    "Only technical controls — these are physical/procedural attacks."
          ]
},
        },
        {
          id: "ecs10-u7-social-engineering-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bank notices a rise in customers reporting suspicious calls and emails.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define social engineering and give two examples relevant to banking.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how credential harvesting works in a phishing attack.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the effectiveness of security awareness training as a defence.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Social engineering",
                              "statement": "Manipulating people to compromise security."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Social engineering manipulates people into revealing information or performing unsafe actions.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Examples: phishing emails, vishing (voice calls), pretexting as bank staff, baiting.",
                              "marks": 2,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Any two correct banking-relevant examples identified.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Victim receives a fake but convincing message directing them to a cloned website.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Entered credentials are sent to the attacker, who can access the real account.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The fake site may also deliver malware to the victim's device.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Training teaches users to spot urgency, verify requests and never share credentials.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "It addresses the human vulnerability that technical defences cannot cover.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Limitations: knowledge fades without refreshers and determined attackers still succeed, so it must be combined with other controls.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) manipulation of people + examples (b) fake site captures credentials (c) effective but needs reinforcement + other controls.",
          "commonErrors": [
                    "Describing phishing technically without the human-manipulation element."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u7-malware-notes",
      title: "Cyber threats — notes",
      summary: "Malware types, attack methods and social engineering techniques, plus why users are the weakest link.",
      sections: [
        { heading: "Malware types", body: "Virus (host file + user action), worm (self-spreading), Trojan (disguised), ransomware (encrypts for payment), spyware, adware." },
        { heading: "Social engineering", body: "Phishing, pretexting, baiting, shoulder surfing, tailgating — attacks target people, not just systems." },
        { heading: "Key defence idea", body: "Verify requests through official channels and never share credentials." },
      ],
    },
  ],
};
