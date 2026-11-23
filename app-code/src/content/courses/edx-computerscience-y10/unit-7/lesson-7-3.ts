import type { Lesson } from "../../../types.ts";

export const lesson273: Lesson = {
  id: "ecs10-u7-lesson-7-3",
  code: "7-3",
  title: "Privacy, Legislation and Responsible Use",
  goal: "I CAN explain personal data protection, relevant legislation and ethical/legal responsibilities of computer users.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Cybersecurity"],
  
  vocabulary: [
    { term: "Personal data", definition: "Any information relating to an identified or identifiable individual." },
    { term: "Data subject", definition: "The individual a piece of personal data relates to." },
    { term: "Data controller", definition: "The organisation or person deciding how and why personal data is processed." },
    { term: "GDPR", definition: "General Data Protection Regulation — EU/UK law governing personal data." },
    { term: "Data breach", definition: "Accidental or unlawful loss, alteration or disclosure of personal data." },
    { term: "Copyright", definition: "Legal right protecting original creative works from unauthorised copying." },
    { term: "Digital footprint", definition: "The permanent record of a person's online activity and data." },
  ],
  concepts: [
    {
      id: "ecs10-u7-privacy-data",
      title: "Personal data and privacy",
      skill: "Identify personal data, explain GDPR principles and describe data breaches and individual rights.",
      lesson: {
        sections: [
          {
            heading: "Personal data and GDPR",
            body: "**Personal data** is any information about an identifiable person — names, emails, health records, location, IP addresses, even cookies that identify a device. **GDPR** (General Data Protection Regulation) governs how organisations collect, store and use it. Key principles: **lawfulness, fairness and transparency** (a valid legal basis such as consent), **purpose limitation** (use only for stated purposes), **data minimisation** (collect only what is needed), **accuracy**, **storage limitation**, **integrity and confidentiality**, and **accountability**.",
          },
          {
            heading: "Breach, rights and tracking",
            body: "A **data breach** is accidental or unlawful loss, alteration or disclosure of personal data — e.g. a stolen laptop or hacked database. Organisations must report serious breaches to authorities and affected individuals. **Data subjects** have rights: access their data, correct it, delete it ('right to be forgotten'), object to processing and data portability. **Cookies** and trackers collect browsing data; websites must inform users and, in many cases, obtain consent.",
          },
        ],
        keyFormulas: [
          { name: "Personal data", statement: "any info relating to an identifiable individual" },
          { name: "GDPR principles", statement: "lawful, fair, transparent; purpose-limited; minimal; accurate; secure; accountable" },
          { name: "Data breach", statement: "unauthorised loss, alteration or disclosure of personal data" },
        ],
        workedExample: {
          problem: "A shop's database of customer emails is hacked and the list is published online. Identify the legal issues and the organisation's obligations.",
          solution: "This is a personal data breach under GDPR — emails are personal data. The organisation must contain the breach, assess the risk to individuals, notify the data protection authority (and affected customers where risk is high) within required timescales, investigate the cause and take steps to prevent recurrence.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-privacy-data-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is personal data?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only names and addresses"
                    },
                    {
                              "id": "b",
                              "text": "Any information relating to an identifiable individual"
                    },
                    {
                              "id": "c",
                              "text": "Only data stored online"
                    },
                    {
                              "id": "d",
                              "text": "Any computer file"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personal data",
                              "statement": "Info relating to an identifiable person."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Emails, health records, location and even device-identifying cookies can be personal data.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Info relating to an identifiable individual",
          "commonErrors": [
                    "Thinking only names/addresses count."
          ]
},
        },
        {
          id: "ecs10-u7-privacy-data-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define personal data and give three examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Personal data",
                              "statement": "Identifiable individual information."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personal data is any information relating to an identified or identifiable person.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Examples: name, email address, phone number.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Further examples: health records, location data, IP address, biometric data.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Info about identifiable person; e.g. name, email, health/location/IP data.",
          "commonErrors": [
                    "Listing only offline examples like paper files — online identifiers count too."
          ]
},
        },
        {
          id: "ecs10-u7-privacy-data-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "A company collects customer data for a loyalty scheme. Explain four GDPR principles it must follow.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "GDPR principles",
                              "statement": "Lawful, fair, transparent; limited; minimal; secure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Lawfulness/fairness/transparency — must have a valid basis (e.g. consent) and tell customers why data is collected.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Purpose limitation — use data only for the stated loyalty scheme, not unrelated marketing.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Data minimisation — collect only what the scheme actually needs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Security/confidentiality — protect the data from breaches; accountability — be able to demonstrate compliance.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Lawful basis + transparency; purpose limitation; data minimisation; security/accountability.",
          "commonErrors": [
                    "Reciting principles without applying them to the scenario."
          ]
},
        },
        {
          id: "ecs10-u7-privacy-data-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A school wants to photograph all students for ID cards and store the photos on a server.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain what legal basis and information the school must provide to comply with GDPR.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two rights parents or students have regarding these photos.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "GDPR compliance",
                              "statement": "Valid basis + transparency + data subject rights."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "A valid legal basis is needed — e.g. consent from parents or legitimate interest for school administration.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "The school must inform data subjects what is collected, why, how long it is kept and who can access it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Photos are personal data; they must be stored securely and used only for the stated purpose.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Right of access — parents/students can request a copy of the stored photo and data.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Right to erasure/correction — request deletion or correction if inaccurate.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Right to object/restrict processing, e.g. if consent is withdrawn.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) valid basis + transparency + purpose limitation/security (b) access, erasure/correction, objection rights.",
          "commonErrors": [
                    "Assuming schools can use any data freely — GDPR still applies."
          ]
},
        },
        {
          id: "ecs10-u7-privacy-data-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A hospital laptop containing unencrypted patient records is stolen from a car.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why this counts as a personal data breach.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe three actions the hospital should take in response.",
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
                              "name": "Data breach",
                              "statement": "Unauthorised loss, alteration or disclosure of personal data."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Patient records are personal data relating to identifiable individuals.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "The theft gives unauthorised parties potential access — a loss of confidentiality.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Lack of encryption made the data readable, so harm to patients is likely.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "Report the breach to the data protection authority within the required timeframe.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Notify affected patients where the risk to them is high.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Investigate the cause and review device-handling procedures (e.g. never leave devices in cars).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Introduce encryption and remote-wipe capability so future losses are harmless.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) personal data lost to unauthorised access (b) report to authority, notify patients, investigate, encrypt devices.",
          "commonErrors": [
                    "Treating theft of encrypted data as harmless — here it was unencrypted."
          ]
},
        },
        {
          id: "ecs10-u7-privacy-data-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A social media platform tracks users' browsing across other websites to target adverts.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define personal data and sensitive personal data, with an example of each.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain how cookies and trackers enable cross-site tracking.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the privacy implications of targeted advertising.",
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
                              "name": "Personal vs sensitive data",
                              "statement": "Identifiable info; sensitive needs higher protection."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Personal data: any info about an identifiable person — e.g. name, email.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Further example: browsing history linked to an account.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Sensitive data: special categories needing stronger protection — e.g. health, ethnicity, religion, biometrics.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "Any valid sensitive example such as medical records or fingerprint.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "b",
                              "reasoning": "Cookies store identifiers on the user's device; trackers send them to ad networks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "As the user visits other sites, the trackers link activity to the same identifier, building a profile.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "The platform uses the profile to choose which adverts to show.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Users gain relevant ads but lose privacy — detailed profiles reveal sensitive habits and beliefs.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Profiles can be sold or leaked, and users often are unaware of the scale of tracking.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "Legislation (GDPR) requires consent and transparency, but enforcement and user awareness remain challenges.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) personal vs sensitive data + examples (b) cookies link browsing to an identifier (c) privacy loss vs ad relevance; consent + awareness needed.",
          "commonErrors": [
                    "Calling all cookies 'hacking' — legitimate tracking still raises privacy issues."
          ]
},
        },
      ],
    },
    {
      id: "ecs10-u7-legal-ethical",
      title: "Legal and ethical use of computers",
      skill: "Explain copyright, cybercrime offences, acceptable use policies and the permanence of digital footprints.",
      lesson: {
        sections: [
          {
            heading: "Copyright and intellectual property",
            body: "**Copyright** automatically protects original creative works — text, music, images, software, films — giving the creator exclusive rights to copy and distribute them. Using copyrighted material without permission or a **licence** is infringement and can lead to legal action. Software is licensed, not sold; 'pirated' copies are illegal. Fair-use style exceptions exist for some educational purposes but are limited. **Trademarks** protect brand names/logos; **patents** protect inventions.",
          },
          {
            heading: "Cybercrime, acceptable use and digital footprint",
            body: "Computer misuse offences include unauthorised access to systems, creating/distributing malware, fraud and harassment. Penalties range from fines to imprisonment. Organisations use **acceptable use policies (AUPs)** to set rules for employees — e.g. no illegal downloads, no personal use of work systems, data handling rules. A **digital footprint** is the permanent record of online activity — posts, comments, photos — which can affect future education, employment and reputation.",
          },
        ],
        keyFormulas: [
          { name: "Copyright", statement: "automatic protection of original creative works" },
          { name: "Licence", statement: "permission granting limited rights to use copyrighted work" },
          { name: "AUP", statement: "organisational rules for acceptable computer use" },
          { name: "Digital footprint", statement: "permanent record of online activity" },
        ],
        workedExample: {
          problem: "A student downloads a paid game from a torrent site and shares it with friends. Identify the legal and ethical issues.",
          solution: "Downloading via torrent is copyright infringement — the game is protected by copyright and only licensed for purchase. Sharing it distributes the infringing copy, increasing liability. Ethically it deprives the developer of income. The student risks malware from untrusted sources and possible legal consequences.",
        },
      },
      questions: [
        {
          id: "ecs10-u7-legal-ethical-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does copyright protect?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Any computer hardware"
                    },
                    {
                              "id": "b",
                              "text": "Original creative works such as text, music, images and software"
                    },
                    {
                              "id": "c",
                              "text": "Personal data only"
                    },
                    {
                              "id": "d",
                              "text": "Computer networks"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Copyright",
                              "statement": "Protects original creative works."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Copyright applies automatically to original creative works — copying or distributing them without permission is infringement.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "(b) Original creative works",
          "commonErrors": [
                    "Thinking copyright must be registered — it is automatic."
          ]
},
        },
        {
          id: "ecs10-u7-legal-ethical-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A student finds an image on the internet and uses it in a school project without permission. Explain the legal issue and what they should have done.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Copyright infringement",
                              "statement": "Using protected work without permission or licence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The image is likely copyrighted; using it without permission or a licence is infringement.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "They should use royalty-free/licensed images, create their own, or seek permission.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "They should cite the source even when use is permitted.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Unauthorised use of copyrighted image; use licensed/own images and cite sources.",
          "commonErrors": [
                    "Assuming anything online is free to use."
          ]
},
        },
        {
          id: "ecs10-u7-legal-ethical-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give four examples of computer misuse that are criminal offences.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cybercrime",
                              "statement": "Unauthorised or harmful computer use is an offence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unauthorised access to computer systems (hacking).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Creating or distributing malware (viruses, ransomware).",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Fraud — e.g. phishing to steal money or identity.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Online harassment or threats; also copyright infringement on a commercial scale.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Hacking, malware distribution, fraud/phishing, harassment — all criminal offences.",
          "commonErrors": [
                    "Listing only 'hacking' or mixing up civil vs criminal issues."
          ]
},
        },
        {
          id: "ecs10-u7-legal-ethical-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "An employee uses their work laptop to run a personal online business and stores customer files on it.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two legal/data-protection issues this creates.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two ways an acceptable use policy could address this.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Acceptable use",
                              "statement": "Organisational rules limit personal use of work systems."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Storing customer files on a personal-use device risks a personal data breach (GDPR).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "If the device is lost or hacked, company and customer data are exposed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Company may own/lack control of data on a device used for personal business — accountability issues.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "AUP can prohibit storing work data on devices used for personal business.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "AUP can restrict personal use of work equipment to reasonable limits.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "AUP can set rules for data handling, encryption and remote access.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) breach risk + accountability (b) AUP rules on personal use, data storage and device security.",
          "commonErrors": [
                    "Only citing 'it's against policy' without explaining the data risks."
          ]
},
        },
        {
          id: "ecs10-u7-legal-ethical-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A company introduces an acceptable use policy (AUP) for all employees.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two reasons organisations introduce AUPs.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Give three typical AUP rules and explain why each matters.",
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
                              "name": "AUP",
                              "statement": "Rules governing acceptable use of company systems."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "To protect the organisation's systems, data and reputation from misuse.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "To ensure legal compliance (copyright, data protection) and clarify consequences of misuse.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "To set expectations so employees know what is permitted.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "No illegal downloads/pirated software — avoids malware and copyright liability.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "No storing work data on personal devices — reduces breach risk.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Limited personal use — keeps systems productive and reduces security exposure.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "Any further valid rule (password rules, reporting incidents) with justification.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) protect systems/data + legal compliance + clarity (b) rules on downloads, data storage, personal use etc.",
          "commonErrors": [
                    "Listing rules without explaining why they matter."
          ]
},
        },
        {
          id: "ecs10-u7-legal-ethical-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A teenager posts a rude comment about a classmate on social media, then regrets it a year later when applying for a job.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish between copyright and a software licence.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two legal consequences the teenager could face for the post.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the concept of a digital footprint using this example.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Copyright vs licence",
                              "statement": "Automatic right vs granted permission."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Copyright automatically protects original creative works from copying.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "part": "a",
                              "reasoning": "It belongs to the creator; using the work needs permission or a licence.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "A licence is the permission granted — it defines what use is allowed (e.g. install on X devices).",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "a",
                              "reasoning": "Software is sold under a licence, not owned outright; pirated copies breach it.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "b",
                              "reasoning": "The post may constitute harassment — a civil or criminal offence depending on severity.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "If it targets a protected characteristic it could be hate speech.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "b",
                              "reasoning": "School or employer sanctions may also apply through AUPs or conduct rules.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "part": "c",
                              "reasoning": "The comment persists online even after deletion — screenshots and archives preserve it.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Employers and universities routinely search social media, so old posts can affect future opportunities.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "part": "c",
                              "reasoning": "Lesson: think before posting; digital footprints are effectively permanent.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "(a) copyright=automatic protection, licence=permission to use (b) harassment/hate speech consequences (c) permanent online record affects reputation.",
          "commonErrors": [
                    "Claiming deleting the post removes it — copies persist."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ecs10-u7-legal-notes",
      title: "Privacy and responsible use — notes",
      summary: "Personal data and GDPR principles, data breaches, copyright, cybercrime and acceptable use.",
      sections: [
        { heading: "GDPR", body: "Personal data needs a lawful basis, purpose limitation, minimisation, security and accountability." },
        { heading: "Breach response", body: "Report serious breaches to the authority; notify affected individuals at risk." },
        { heading: "Responsible use", body: "Copyright protects creative works; AUPs govern workplace systems; digital footprints are permanent." },
      ],
    },
  ],
};
