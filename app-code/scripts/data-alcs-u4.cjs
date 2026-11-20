module.exports = [
  {
    file: "lesson-4-1.ts", exportName: "lesson151",
    lesson: {
      id: "ciealc-u4-lesson-4-1", code: "4-1",
      title: "The Internet and Its Uses",
      goal: "I CAN describe internet technologies, services and applications.",
      standards: ["Cambridge A Level Computer Science 9618: internet", "9618: network applications"],
      vocabulary: [
        { term: "Internet", definition: "Global network of interconnected computers." },
        { term: "WWW", definition: "System of interlinked web pages accessed via browsers." },
        { term: "URL", definition: "Uniform resource locator — web address." },
        { term: "HTTP/HTTPS", definition: "Protocols for web page transfer." },
        { term: "DNS", definition: "Domain name system — translates names to IP addresses." },
        { term: "ISP", definition: "Internet service provider — connects users to internet." },
      ],
      concept: {
        id: "ciealc-u4-s1-inet", title: "Internet technologies",
        skill: "Describe internet services at A Level.",
        sections: [
          { heading: "Internet architecture", body: "ISP connects users to internet backbone. DNS translates domain names to IPs. HTTP/HTTPS transfers web pages. URL specifies resource location. WWW is just one internet service." },
          { heading: "Internet services", body: "Email (SMTP/IMAP/POP3), file transfer (FTP/SFTP), VoIP (voice calls), streaming (video/music), cloud services (storage/compute), social media, e-commerce." },
        ],
        keyFormulas: [
          { name: "DNS", statement: "name→IP translation" },
          { name: "HTTP/HTTPS", statement: "web page transfer" },
          { name: "URL", statement: "resource address" },
        ],
        workedExample: {
          problem: "Trace what happens when you type 'www.example.com' in a browser.",
          solution: "Browser queries DNS → gets IP address → sends HTTP request → server responds with HTML → browser renders page.",
        },
        questions: [
          {
            id: "ciealc-u4-in-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is DNS?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Domain name system — translates names to IPs" }, { id: "b", text: "A type of cable" }, { id: "c", text: "A programming language" }, { id: "d", text: "A web browser" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "DNS", statement: "Name→IP translation." }],
              steps: [{ reasoning: "DNS resolves domain names to IP addresses.", marks: 1, markCode: "M" }],
              finalAnswer: "Name→IP translation",
            },
          },
          {
            id: "ciealc-u4-in-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is HTTP vs HTTPS?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "HTTP/HTTPS", statement: "Web transfer protocols." }],
              steps: [
                { reasoning: "HTTP=unencrypted; HTTPS=encrypted (TLS).", marks: 1, markCode: "M" },
                { reasoning: "HTTPS protects data in transit.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Unencrypted vs encrypted",
            },
          },
          {
            id: "ciealc-u4-in-q3", difficulty: "core", totalMarks: 3,
            stem: "What is the difference between the internet and the World Wide Web?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Internet vs WWW", statement: "Network vs service." }],
              steps: [
                { reasoning: "Internet=global network infrastructure.", marks: 1, markCode: "M" },
                { reasoning: "WWW=one service on internet (web pages).", marks: 1, markCode: "M" },
                { reasoning: "Internet has many services beyond web.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Network vs web service",
            },
          },
          {
            id: "ciealc-u4-in-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define internet, WWW, URL, HTTP/HTTPS, DNS, ISP. (b) What is a URL? (c) What is HTTP? (d) What is HTTPS? (e) What does DNS do? (f) What is an ISP? (g) Trace web page loading. (h) Design an online learning platform architecture.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Internet", statement: "Technologies, services." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Web resource address.", marks: 1, markCode: "M" },
                { reasoning: "(c) Web page transfer protocol.", marks: 1, markCode: "M" },
                { reasoning: "(d) Encrypted version of HTTP.", marks: 1, markCode: "M" },
                { reasoning: "(e) Name→IP translation.", marks: 1, markCode: "M" },
                { reasoning: "(f) Connects users to internet.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid trace: DNS→HTTP→server→render.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid platform architecture.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Internet technologies and services.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u4-in-notes", title: "Internet — notes",
      summary: "DNS=name→IP; HTTP/HTTPS=web transfer; WWW=one internet service. ISP connects users.",
      sections: [
        { heading: "Key idea", body: "Internet=infrastructure; WWW=service. Many services beyond web." },
        { heading: "Security", body: "HTTPS encrypts web traffic — essential for sensitive data." },
      ],
    },
  },
  {
    file: "lesson-4-2.ts", exportName: "lesson152",
    lesson: {
      id: "ciealc-u4-lesson-4-2", code: "4-2",
      title: "Internet Security and Cybercrime",
      goal: "I CAN identify cyber threats, explain security measures and legal frameworks.",
      standards: ["Cambridge A Level Computer Science 9618: security", "9618: cybercrime"],
      vocabulary: [
        { term: "Malware", definition: "Malicious software — viruses, worms, trojans, ransomware." },
        { term: "Phishing", definition: "Fraudulent attempt to steal credentials." },
        { term: "Firewall", definition: "Network security system filtering traffic." },
        { term: "Encryption", definition: "Protecting data via cipher." },
        { term: "Authentication", definition: "Verifying identity." },
        { term: "Cybercrime", definition: "Crimes committed using computers/networks." },
      ],
      concept: {
        id: "ciealc-u4-s2-sec", title: "Security and cybercrime",
        skill: "Identify threats and security measures.",
        sections: [
          { heading: "Threats", body: "Malware: viruses (attach to files), worms (self-replicate), trojans (disguised), ransomware (encrypts files). Phishing: fake emails/sites stealing credentials. Social engineering: manipulating people." },
          { heading: "Defences", body: "Firewall filters traffic. Antivirus detects malware. Encryption protects data. Authentication verifies identity (passwords, 2FA). Patches fix vulnerabilities. Education prevents social engineering." },
        ],
        keyFormulas: [
          { name: "Malware types", statement: "virus, worm, trojan, ransomware" },
          { name: "Defences", statement: "firewall, antivirus, encryption, auth, patches" },
        ],
        workedExample: {
          problem: "Explain how ransomware works and how to defend against it.",
          solution: "Ransomware encrypts files, demands payment. Defences: backups, antivirus, patches, email filtering, user education.",
        },
        questions: [
          {
            id: "ciealc-u4-sec-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is malware?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Malicious software designed to harm systems" }, { id: "b", text: "A type of hardware" }, { id: "c", text: "A programming language" }, { id: "d", text: "A network cable" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Malware", statement: "Malicious software." }],
              steps: [{ reasoning: "Malware includes viruses, worms, trojans, ransomware.", marks: 1, markCode: "M" }],
              finalAnswer: "Malicious software",
            },
          },
          {
            id: "ciealc-u4-sec-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is phishing?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Phishing", statement: "Credential theft attempt." }],
              steps: [
                { reasoning: "Phishing = fraudulent attempt to steal credentials.", marks: 1, markCode: "M" },
                { reasoning: "Usually via fake emails or websites.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Credential theft attempt",
            },
          },
          {
            id: "ciealc-u4-sec-q3", difficulty: "core", totalMarks: 3,
            stem: "What is a firewall and what does it do?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Firewall", statement: "Network traffic filter." }],
              steps: [
                { reasoning: "Firewall filters network traffic.", marks: 1, markCode: "M" },
                { reasoning: "Blocks unauthorised access.", marks: 1, markCode: "M" },
                { reasoning: "Can be hardware or software.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Network traffic filter",
            },
          },
          {
            id: "ciealc-u4-sec-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define malware, virus, worm, trojan, ransomware, phishing, firewall, encryption, authentication. (b) Compare virus vs worm. (c) What is phishing? (d) What is a firewall? (e) What is 2FA? (f) Why update software? (g) What is social engineering? (h) Design a security plan for a small business.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Security", statement: "Threats, defences, cybercrime." }],
              steps: [
                { reasoning: "(a) All nine definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Virus needs host; worm self-replicates.", marks: 1, markCode: "M" },
                { reasoning: "(c) Credential theft via deception.", marks: 1, markCode: "M" },
                { reasoning: "(d) Traffic filter.", marks: 1, markCode: "M" },
                { reasoning: "(e) Two-factor authentication.", marks: 1, markCode: "M" },
                { reasoning: "(f) Fixes security vulnerabilities.", marks: 1, markCode: "M" },
                { reasoning: "(g) Manipulating people for access.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid security plan.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Security threats and defences.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u4-sec-notes", title: "Security — notes",
      summary: "Malware types: virus/worm/trojan/ransomware. Defences: firewall, antivirus, encryption, 2FA, patches.",
      sections: [
        { heading: "Key idea", body: "Layered security: technical defences + user education." },
        { heading: "Phishing", body: "Most common attack — social engineering via fake emails/sites." },
      ],
    },
  },
  {
    file: "lesson-4-3.ts", exportName: "lesson153",
    lesson: {
      id: "ciealc-u4-lesson-4-3", code: "4-3",
      title: "Databases and SQL",
      goal: "I CAN design relational databases and write SQL queries.",
      standards: ["Cambridge A Level Computer Science 9618: databases", "9618: SQL"],
      vocabulary: [
        { term: "Database", definition: "Organised collection of related data." },
        { term: "Table", definition: "Data organised in rows and columns." },
        { term: "Record", definition: "Single row of data." },
        { term: "Field", definition: "Single column of data." },
        { term: "Primary key", definition: "Unique identifier for each record." },
        { term: "Foreign key", definition: "Links to primary key in another table." },
        { term: "SQL", definition: "Structured query language for databases." },
      ],
      concept: {
        id: "ciealc-u4-s3-db", title: "Databases and SQL",
        skill: "Design databases and write SQL at A Level.",
        sections: [
          { heading: "Relational databases", body: "Tables with rows (records) and columns (fields). Primary key uniquely identifies records. Foreign key links tables. Normalisation reduces redundancy. Relationships: one-to-one, one-to-many, many-to-many." },
          { heading: "SQL", body: "SELECT — retrieve data. FROM — specify table. WHERE — filter. INSERT — add records. UPDATE — modify. DELETE — remove. JOIN — combine tables. ORDER BY — sort results." },
        ],
        keyFormulas: [
          { name: "Primary key", statement: "unique record identifier" },
          { name: "Foreign key", statement: "links between tables" },
          { name: "SQL", statement: "SELECT/FROM/WHERE/INSERT/UPDATE/DELETE" },
        ],
        workedExample: {
          problem: "Write SQL to find all students with grade 'A' in table 'students'.",
          solution: "SELECT * FROM students WHERE grade = 'A';",
        },
        questions: [
          {
            id: "ciealc-u4-db-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a primary key?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Unique identifier for each record" }, { id: "b", text: "A type of table" }, { id: "c", text: "A SQL command" }, { id: "d", text: "A network protocol" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Primary key", statement: "Unique record ID." }],
              steps: [{ reasoning: "Primary key uniquely identifies each record.", marks: 1, markCode: "M" }],
              finalAnswer: "Unique record identifier",
            },
          },
          {
            id: "ciealc-u4-db-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is a foreign key?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Foreign key", statement: "Links tables." }],
              steps: [
                { reasoning: "Foreign key links to primary key in another table.", marks: 1, markCode: "M" },
                { reasoning: "Enables table relationships.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Links between tables",
            },
          },
          {
            id: "ciealc-u4-db-q3", difficulty: "core", totalMarks: 3,
            stem: "Write SQL to select all fields from table 'students' where age > 18.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "SQL SELECT", statement: "Query syntax." }],
              steps: [
                { reasoning: "SELECT * FROM students WHERE age > 18.", marks: 1, markCode: "M" },
                { reasoning: "Correct syntax.", marks: 1, markCode: "M" },
                { reasoning: "Valid SQL statement.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "SELECT * FROM students WHERE age > 18",
            },
          },
          {
            id: "ciealc-u4-db-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define database, table, record, field, primary key, foreign key, SQL, normalisation. (b) What is a record? (c) What is a field? (d) What is a primary key? (e) Write SQL to insert a record. (f) Write SQL to update a record. (g) Write SQL to join two tables. (h) Design a database for a library with books and members.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Databases", statement: "Design, keys, SQL." }],
              steps: [
                { reasoning: "(a) All eight definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Single row of data.", marks: 1, markCode: "M" },
                { reasoning: "(c) Single column of data.", marks: 1, markCode: "M" },
                { reasoning: "(d) Unique record identifier.", marks: 1, markCode: "M" },
                { reasoning: "(e) Valid INSERT statement.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid UPDATE statement.", marks: 1, markCode: "M" },
                { reasoning: "(g) Valid JOIN query.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid library database design.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Database design and SQL.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u4-db-notes", title: "Databases — notes",
      summary: "Tables=records+fields; primary key=unique ID; foreign key=links tables. SQL=SELECT/INSERT/UPDATE/DELETE/JOIN.",
      sections: [
        { heading: "Key idea", body: "Normalisation reduces redundancy — design tables carefully." },
        { heading: "SQL", body: "SELECT retrieves, INSERT adds, UPDATE modifies, DELETE removes, JOIN combines." },
      ],
    },
  },
  {
    file: "lesson-4-4.ts", exportName: "lesson154",
    lesson: {
      id: "ciealc-u4-lesson-4-4", code: "4-4",
      title: "Ethical and Legal Issues in Computing",
      goal: "I CAN discuss ethical dilemmas, legal frameworks and social impacts of computing.",
      standards: ["Cambridge A Level Computer Science 9618: ethics", "9618: social impact"],
      vocabulary: [
        { term: "Ethics", definition: "Principles of right and wrong behaviour." },
        { term: "Copyright", definition: "Legal protection for creative works." },
        { term: "Data protection", definition: "Laws governing personal data handling." },
        { term: "GDPR", definition: "EU regulation on data protection." },
        { term: "Plagiarism", definition: "Using others' work without attribution." },
        { term: "Digital divide", definition: "Gap between those with/without technology access." },
      ],
      concept: {
        id: "ciealc-u4-s4-eth", title: "Ethics and legal issues",
        skill: "Analyse ethical dilemmas and legal frameworks.",
        sections: [
          { heading: "Ethical issues", body: "Privacy vs security. Intellectual property rights. Algorithmic bias. Automation and jobs. AI ethics. Surveillance vs safety." },
          { heading: "Legal frameworks", body: "Copyright protects creative works. Data protection laws (GDPR) govern personal data. Computer misuse laws criminalise hacking. Licensing agreements define software use rights." },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "right/wrong principles" },
          { name: "Copyright", statement: "protects creative works" },
          { name: "GDPR", statement: "data protection regulation" },
        ],
        workedExample: {
          problem: "Discuss the ethical implications of facial recognition technology.",
          solution: "Pros: security, convenience. Cons: privacy invasion, bias, surveillance concerns. Need balance: regulations, consent, transparency.",
        },
        questions: [
          {
            id: "ciealc-u4-et-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is copyright?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Legal protection for creative works" }, { id: "b", text: "A type of software" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Copyright", statement: "Creative work protection." }],
              steps: [{ reasoning: "Copyright protects original creative works.", marks: 1, markCode: "M" }],
              finalAnswer: "Creative work protection",
            },
          },
          {
            id: "ciealc-u4-et-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is the digital divide?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Digital divide", statement: "Technology access gap." }],
              steps: [
                { reasoning: "Gap between those with/without technology access.", marks: 1, markCode: "M" },
                { reasoning: "Creates inequality in opportunities.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Technology access gap",
            },
          },
          {
            id: "ciealc-u4-et-q3", difficulty: "core", totalMarks: 3,
            stem: "What is GDPR and what does it require?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "GDPR", statement: "Data protection regulation." }],
              steps: [
                { reasoning: "GDPR = EU data protection regulation.", marks: 1, markCode: "M" },
                { reasoning: "Requires consent, transparency, data minimisation.", marks: 1, markCode: "M" },
                { reasoning: "Gives individuals rights over their data.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "EU data protection regulation",
            },
          },
          {
            id: "ciealc-u4-et-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define ethics, copyright, data protection, GDPR, plagiarism, digital divide, algorithmic bias. (b) What is copyright? (c) What is GDPR? (d) What is plagiarism? (e) What is algorithmic bias? (f) Give an ethical dilemma in computing. (g) What is the digital divide? (h) Discuss whether AI should be regulated.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Ethics", statement: "Ethical dilemmas, legal frameworks." }],
              steps: [
                { reasoning: "(a) All seven definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Creative work protection.", marks: 1, markCode: "M" },
                { reasoning: "(c) EU data protection regulation.", marks: 1, markCode: "M" },
                { reasoning: "(d) Using others' work without attribution.", marks: 1, markCode: "M" },
                { reasoning: "(e) Unfair algorithm outcomes.", marks: 1, markCode: "M" },
                { reasoning: "(f) Valid ethical dilemma.", marks: 1, markCode: "M" },
                { reasoning: "(g) Technology access gap.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced AI regulation argument.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Ethical and legal issues in computing.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u4-et-notes", title: "Ethics — notes",
      summary: "Ethics=right/wrong principles; copyright=creative protection; GDPR=data protection; digital divide=access gap.",
      sections: [
        { heading: "Key idea", body: "Computing raises ethical dilemmas — privacy, bias, jobs, AI." },
        { heading: "Legal", body: "Copyright, data protection, computer misuse laws govern computing." },
      ],
    },
  },
  {
    file: "lesson-4-5.ts", exportName: "lesson155",
    lesson: {
      id: "ciealc-u4-lesson-4-5", code: "4-5",
      title: "Programming Project: Design and Evaluation",
      goal: "I CAN design, implement and evaluate a programming project.",
      standards: ["Cambridge A Level Computer Science 9618: project", "9618 Paper 2"],
      vocabulary: [
        { term: "Project", definition: "Extended programming task for assessment." },
        { term: "Specification", definition: "Requirements defining what program must do." },
        { term: "Testing", definition: "Verifying program works correctly." },
        { term: "Evaluation", definition: "Assessing how well program meets requirements." },
        { term: "Documentation", definition: "Comments, user guides explaining code." },
        { term: "Maintenance", definition: "Updating/fixing program after release." },
      ],
      concept: {
        id: "ciealc-u4-s5-proj", title: "Programming project",
        skill: "Design and evaluate programming projects.",
        sections: [
          { heading: "Project lifecycle", body: "Design: requirements, specifications. Implement: code development. Test: verify functionality. Evaluate: assess against requirements. Maintain: update and fix." },
          { heading: "Evaluation criteria", body: "Does it meet all requirements? Is code readable? Are edge cases handled? Is it efficient? Is it user-friendly? Documentation adequate?" },
        ],
        keyFormulas: [
          { name: "Lifecycle", statement: "design→implement→test→evaluate→maintain" },
          { name: "Evaluation", statement: "requirements, readability, efficiency, usability" },
        ],
        workedExample: {
          problem: "Design a student grade calculator project.",
          solution: "Requirements: input scores, calculate average, output grade. Implement: functions for input, calculation, output. Test: various score combinations. Evaluate: meets all requirements?",
        },
        questions: [
          {
            id: "ciealc-u4-pj-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What is a programming project?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Extended programming task for assessment" }, { id: "b", text: "A type of hardware" }, { id: "c", text: "A network protocol" }, { id: "d", text: "A programming language" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Project", statement: "Extended programming task." }],
              steps: [{ reasoning: "Project = substantial programming assignment.", marks: 1, markCode: "M" }],
              finalAnswer: "Extended programming task",
            },
          },
          {
            id: "ciealc-u4-pj-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What are the stages of the project lifecycle?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Project lifecycle", statement: "Design→implement→test→evaluate→maintain." }],
              steps: [
                { reasoning: "Design, implement, test, evaluate, maintain.", marks: 1, markCode: "M" },
                { reasoning: "All five stages correct.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Design→implement→test→evaluate→maintain",
            },
          },
          {
            id: "ciealc-u4-pj-q3", difficulty: "core", totalMarks: 3,
            stem: "What should you test in a programming project?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Testing", statement: "Verify functionality." }],
              steps: [
                { reasoning: "Test normal cases and edge cases.", marks: 1, markCode: "M" },
                { reasoning: "Verify all requirements met.", marks: 1, markCode: "M" },
                { reasoning: "Check error handling.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Normal cases, edge cases, requirements",
            },
          },
          {
            id: "ciealc-u4-pj-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define project, specification, testing, evaluation, documentation, maintenance. (b) What is the project lifecycle? (c) What is a specification? (d) What is testing? (e) What is evaluation? (f) What is documentation? (g) Why maintain software? (h) Design a project for a school library system.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Project", statement: "Design, implementation, evaluation." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Design→implement→test→evaluate→maintain.", marks: 1, markCode: "M" },
                { reasoning: "(c) Requirements defining program.", marks: 1, markCode: "M" },
                { reasoning: "(d) Verifying correctness.", marks: 1, markCode: "M" },
                { reasoning: "(e) Assessing against requirements.", marks: 1, markCode: "M" },
                { reasoning: "(f) Comments, guides explaining code.", marks: 1, markCode: "M" },
                { reasoning: "(g) Fix bugs, add features, adapt.", marks: 1, markCode: "M" },
                { reasoning: "(h) Valid library system project.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Programming project lifecycle.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealc-u4-pj-notes", title: "Project — notes",
      summary: "Project lifecycle: design→implement→test→evaluate→maintain. Test thoroughly, document well.",
      sections: [
        { heading: "Key idea", body: "Good projects meet requirements, are tested thoroughly, well documented." },
        { heading: "Evaluation", body: "Does it work? Is it efficient? Is it maintainable?" },
      ],
    },
  },
];
