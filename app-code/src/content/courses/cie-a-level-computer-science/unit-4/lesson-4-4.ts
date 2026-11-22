import type { Lesson } from "../../../types.ts";

export const lesson154: Lesson = {
  id: "ciealc-u4-lesson-4-4",
  code: "4-4",
  title: "Ethical and Legal Issues in Computing",
  goal: "I CAN discuss ethical dilemmas, legal frameworks and social impacts of computing.",
  standards: [
    "Cambridge A Level Computer Science 9618: ethics",
    "9618: social impact",
  ],

  vocabulary: [
    { term: "Ethics", definition: "Principles of right and wrong behaviour." },
    { term: "Copyright", definition: "Legal protection for creative works." },
    {
      term: "Data protection",
      definition: "Laws governing personal data handling.",
    },
    { term: "GDPR", definition: "EU regulation on data protection." },
    {
      term: "Plagiarism",
      definition: "Using others' work without attribution.",
    },
    {
      term: "Digital divide",
      definition: "Gap between those with/without technology access.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u4-s4-eth",
      title: "Ethics and legal issues",
      skill: "Analyse ethical dilemmas and legal frameworks.",
      lesson: {
        sections: [
          {
            heading: "Ethical issues",
            body: "Privacy vs security. Intellectual property rights. Algorithmic bias. Automation and jobs. AI ethics. Surveillance vs safety.",
          },
          {
            heading: "Legal frameworks",
            body: "Copyright protects creative works. Data protection laws (GDPR) govern personal data. Computer misuse laws criminalise hacking. Licensing agreements define software use rights.",
          },
        ],
        keyFormulas: [
          { name: "Ethics", statement: "right/wrong principles" },
          { name: "Copyright", statement: "protects creative works" },
          { name: "GDPR", statement: "data protection regulation" },
        ],
        workedExample: {
          problem:
            "Discuss the ethical implications of facial recognition technology.",
          solution:
            "Pros: security, convenience. Cons: privacy invasion, bias, surveillance concerns. Need balance: regulations, consent, transparency.",
        },
      },
      questions: [
        {
          id: "ciealc-u4-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is copyright?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Legal protection for creative works",
              },
              {
                id: "b",
                text: "A type of software",
              },
              {
                id: "c",
                text: "A programming language",
              },
              {
                id: "d",
                text: "A network protocol",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Copyright",
                statement: "Creative work protection.",
              },
            ],
            steps: [
              {
                reasoning: "Copyright protects original creative works.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Creative work protection",
          },
        },
        {
          id: "ciealc-u4-et-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the digital divide?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital divide",
                statement: "Technology access gap.",
              },
            ],
            steps: [
              {
                reasoning: "Gap between those with/without technology access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates inequality in opportunities.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Technology access gap",
          },
        },
        {
          id: "ciealc-u4-et-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is GDPR and what does it require?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDPR",
                statement: "Data protection regulation.",
              },
            ],
            steps: [
              {
                reasoning: "GDPR = EU data protection regulation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Requires consent, transparency, data minimisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives individuals rights over their data.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "EU data protection regulation",
          },
        },
        {
          id: "ciealc-u4-et-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define ethics, copyright, data protection, GDPR, plagiarism, digital divide, algorithmic bias. (b) What is copyright? (c) What is GDPR? (d) What is plagiarism? (e) What is algorithmic bias? (f) Give an ethical dilemma in computing. (g) What is the digital divide? (h) Discuss whether AI should be regulated.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethics",
                statement: "Ethical dilemmas, legal frameworks.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All seven definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Creative work protection.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) EU data protection regulation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Using others' work without attribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Unfair algorithm outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Valid ethical dilemma.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Technology access gap.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced AI regulation argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Ethical and legal issues in computing.",
          },
        },
        {
          id: "ciealc-u4-et-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under GDPR, who is responsible for deciding how and why personal data is processed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the internet service provider" },
              { id: "b", text: "any third-party website" },
              { id: "c", text: "the data controller" },
              { id: "d", text: "the data subject" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data controller",
                statement:
                  "Determines purposes and means of processing personal data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The controller decides why and how data is processed; the subject is the person the data is about.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "the data controller",
          },
        },
        {
          id: "ciealc-u4-et-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which law criminalises unauthorised access to computer systems and unauthorised modification of computer material?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the Data Protection Act alone" },
              { id: "b", text: "the Copyright, Designs and Patents Act" },
              { id: "c", text: "the Computer Misuse Act" },
              { id: "d", text: "the Freedom of Information Act" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computer Misuse Act",
                statement:
                  "Criminalises unauthorised access and modification of computer systems.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Computer Misuse Act covers unauthorised access, modification and intent to commit further offences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "the Computer Misuse Act",
          },
        },
        {
          id: "ciealc-u4-et-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A system that screens job applications is found to reject candidates from certain ethnic groups far more often than others. This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "algorithmic bias" },
              { id: "b", text: "a denial-of-service attack" },
              { id: "c", text: "copyright infringement" },
              { id: "d", text: "data encryption" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Algorithmic bias",
                statement:
                  "An algorithm producing systematically unfair outcomes for a group.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Systematically unfair treatment of a group by an automated system is algorithmic bias, often caused by biased training data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "algorithmic bias",
          },
        },
        {
          id: "ciealc-u4-et-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the UK, copyright in a literary work generally lasts for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "exactly 10 years from publication" },
              { id: "b", text: "only while the author is alive" },
              { id: "c", text: "the life of the author plus 7 years" },
              { id: "d", text: "the life of the author plus 70 years" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Copyright term",
                statement: "Literary works: life of author plus 70 years.",
              },
            ],
            steps: [
              {
                reasoning:
                  "UK copyright in literary works lasts for the author's life plus 70 years.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "the life of the author plus 70 years",
          },
        },
        {
          id: "ciealc-u4-et-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which statement gives the most balanced view of facial recognition technology?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is only useful for social media photo tagging",
              },
              {
                id: "b",
                text: "It has no ethical issues because it only affects criminals",
              },
              {
                id: "c",
                text: "It should be banned everywhere because it is always inaccurate",
              },
              {
                id: "d",
                text: "It can improve security and convenience but raises privacy, bias and surveillance concerns that require regulation and consent",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Facial recognition",
                statement:
                  "Benefits must be weighed against privacy and bias risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A balanced answer acknowledges both the benefits (security, convenience) and the ethical risks (privacy, bias, surveillance), calling for safeguards such as consent and regulation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "benefits exist but privacy, bias and surveillance concerns require regulation and consent",
          },
        },
        {
          id: "ciealc-u4-et-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A factory replaces 200 assembly-line workers with robots. Which is the strongest ethical concern raised by this change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the fact that robots cannot speak" },
              {
                id: "b",
                text: "the loss of jobs and the need for workers to be reskilled",
              },
              { id: "c", text: "the reduction in the factory's branding" },
              {
                id: "d",
                text: "the increased cost of electricity for the robots",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Automation and jobs",
                statement:
                  "Automation can displace workers and change the nature of work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The main ethical concern is the social impact of automation: unemployment and the need for reskilling and support for displaced workers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "job losses and the need for reskilling",
          },
        },
        {
          id: "ciealc-u4-et-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Copyright in a literary work lasts for the life of the author plus 70 years. An author died in 1954. In what year does copyright in the work expire? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2024 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Copyright term",
                statement: "Copyright lasts life plus 70 years.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "1954 + 70 = 2024, so copyright expires in 2024.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2024",
          },
        },
        {
          id: "ciealc-u4-et-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Under GDPR, a personal data breach must be reported to the supervisory authority within 72 hours, and fines can reach up to 4% of a company's annual global turnover. A company has an annual global turnover of $250 million. (a) Within how many hours must a breach be reported? (b) What is the maximum possible fine in dollars? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 72 },
              { label: "b", answer: 10000000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "GDPR penalties",
                statement:
                  "Breach notification within 72 hours; fines up to 4% of global turnover.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "GDPR requires breach notification within 72 hours.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "0.04 \\times 250000000 = 10000000 dollars maximum fine.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "72 hours; 10000000 dollars",
          },
        },
        {
          id: "ciealc-u4-et-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A software licence permits installation on 5 machines. A company needs the software on 12 machines and already owns 2 licences. (a) How many licences must the company hold in total? (b) How many additional licences must it purchase? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12 },
              { label: "b", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Software licence",
                statement:
                  "Each licence permits installation on a limited number of machines.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The company needs 12 machines licensed, so it must hold 12 licences in total.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "12 - 2 = 10 additional licences must be purchased.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "12 licences in total; 10 additional licences",
          },
        },
        {
          id: "ciealc-u4-et-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "GDPR fines can be up to 4% of a company's annual global turnover. A firm with an annual turnover of $80 million suffers a serious data breach. (a) What is the maximum fine as a percentage of turnover? (b) What is the maximum fine in dollars? Give both answers as numbers.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 3200000 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "GDPR fine cap",
                statement: "Fines up to 4% of annual global turnover.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The maximum fine is 4% of annual global turnover.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "0.04 \\times 80000000 = 3200000 dollars.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "4 percent; 3200000 dollars",
          },
        },
        {
          id: "ciealc-u4-et-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hospital is considering using an AI system to prioritise patients for appointments. Discuss the ethical issues involved, referring to privacy, fairness and accountability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ethical analysis",
                statement:
                  "Weigh benefits against privacy, bias and accountability concerns.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Privacy: patient data must be protected and used only for the stated purpose, consistent with GDPR principles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fairness: the system could disadvantage certain groups through algorithmic bias, raising questions of justice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Accountability: it must be clear who is responsible for decisions made by the AI, and patients should be able to challenge them; a balanced conclusion weighs these against efficiency benefits.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Discuss privacy, fairness and accountability with a balanced conclusion.",
          },
        },
        {
          id: "ciealc-u4-et-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Explain what is meant by algorithmic bias. (b) Describe how algorithmic bias could arise in a system that predicts students' exam results. (c) Discuss whether governments should regulate the use of AI in making decisions about individuals. (d) Outline one legal framework that could protect individuals' data in such systems.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "AI ethics",
                statement:
                  "Bias arises from data; regulation and data protection law provide safeguards.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Algorithmic bias is when an algorithm produces systematically unfair or discriminatory outcomes for a particular group.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Bias could arise from biased historical data, unrepresentative training samples or proxy variables that correlate with protected characteristics such as gender or ethnicity.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) A balanced discussion: regulation can protect individuals from unfair automated decisions and ensure accountability and transparency, but excessive regulation may stifle innovation; safeguards such as audits and explainability are needed.",
                marks: 2,
                markCode: "A",
              },
              {
                reasoning:
                  "(d) GDPR (or an equivalent data protection law) requires lawful processing, transparency and gives individuals rights over their data.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Algorithmic bias, its causes, a balanced argument on AI regulation, and data protection law.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u4-et-notes",
      title: "Ethics — notes",
      summary:
        "Ethics=right/wrong principles; copyright=creative protection; GDPR=data protection; digital divide=access gap.",
      sections: [
        {
          heading: "Key idea",
          body: "Computing raises ethical dilemmas — privacy, bias, jobs, AI.",
        },
        {
          heading: "Legal",
          body: "Copyright, data protection, computer misuse laws govern computing.",
        },
      ],
    },
  ],
};
