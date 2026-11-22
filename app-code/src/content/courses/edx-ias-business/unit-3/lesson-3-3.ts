import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "eiasbiz-u3-lesson-3-3",
  code: "3-3",
  title: "Distribution and Marketing Ethics",
  goal: "I CAN evaluate distribution channels and marketing ethics.",
  standards: ["Edexcel IAS Business WBP01 Unit 3 — Marketing"],
  vocabulary: [
    {
      term: "Distribution channel",
      definition: "Path product takes from producer to consumer.",
    },
    {
      term: "Direct distribution",
      definition: "Producer sells directly to consumer.",
    },
    {
      term: "Indirect distribution",
      definition: "Through intermediaries — wholesalers, retailers.",
    },
    { term: "Wholesaler", definition: "Buys in bulk, sells to retailers." },
    {
      term: "Deceptive advertising",
      definition: "Misleading or false marketing claims.",
    },
    {
      term: "Consumer protection",
      definition: "Laws ensuring fair treatment of customers.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u3-distribution",
      title: "Distribution Channels",
      skill: "Compare direct and indirect distribution strategies.",
      lesson: {
        sections: [
          {
            heading: "Channel types",
            body: "**Direct**: producer → consumer — own shops, website, door-to-door. **Indirect**: producer → wholesaler → retailer → consumer — wider reach but intermediaries take margin. **Hybrid**: combination — e.g., sell online and through retailers.\n\n**Channel length**: zero-level (direct), one-level (retailer), two-level (wholesaler+retailer). More levels = wider reach but higher costs and less control.",
          },
          {
            heading: "Channel evaluation",
            body: "**Direct advantages**: control, higher margin, customer relationship. **Disadvantages**: limited reach, higher distribution costs. **Indirect advantages**: wide reach, specialist retailers. **Disadvantages**: lower margin, less control, dependency on intermediaries.\n\n**Factors**: product type (perishable = short channel), market size, customer preferences, cost.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Farmer sells eggs directly at farm gate. Channel?",
          solution: "Direct distribution.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-dist-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a distribution channel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Path product takes from producer to consumer" },
              { id: "b", text: "Sales team" },
              { id: "c", text: "Marketing method" },
              { id: "d", text: "Warehouse" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Distribution channel",
                statement: "Producer→consumer path.",
              },
            ],
            steps: [
              {
                reasoning: "Channel = product path.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Product path",
            commonErrors: ["Marketing confused."],
          },
        },
        {
          id: "eiasbiz-u3-dist-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of direct distribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Direct distribution",
                statement: "Control + margin.",
              },
            ],
            steps: [
              {
                reasoning: "Higher profit margin — no intermediary cut.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Control over presentation and customer relationship.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Direct customer feedback.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Margin, control, customer relationship.",
            commonErrors: ["Indirect.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u3-dist-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a small producer might use indirect distribution despite lower margins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Indirect distribution",
                statement: "Reach vs margin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wider market reach — retailers have established customer base.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Lower distribution costs — retailers handle logistics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Specialist retail expertise — product displayed properly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Small producer can't reach customers alone.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Reach, lower costs, expertise — despite margin loss.",
            commonErrors: ["Direct better.", "No reason."],
          },
        },
        {
          id: "eiasbiz-u3-dist-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A craft brewery must choose distribution channels.",
          parts: [
            { label: "a", prompt: "Suggest two channel options.", marks: 4 },
            { label: "b", prompt: "Evaluate each option.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Channel choice",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Direct — own taproom/website sales.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Indirect — pubs/bars via wholesalers.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Direct: higher margin, brand experience, but limited reach.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Indirect: wider reach, but lower margin and less control.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) direct+indirect (b) margin/control vs reach",
            commonErrors: ["One option.", "No evaluation."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u3-ethics",
      title: "Marketing Ethics and Law",
      skill: "Evaluate ethical marketing and consumer protection laws.",
      lesson: {
        sections: [
          {
            heading: "Ethical marketing issues",
            body: "**Deceptive advertising**: false claims, misleading images, hidden costs. **Targeting vulnerable**: children, elderly — exploit weaknesses. **Intrusive marketing**: spam, excessive data collection. **Planned obsolescence**: designing products to fail quickly.\n\n**Consumer protection laws**: accurate product descriptions, clear pricing, right to refunds, product safety standards, data protection.",
          },
          {
            heading: "Ethical vs legal",
            body: "**Legal minimum**: must follow laws — misleading ads illegal in most countries. **Ethical standard**: go beyond legal minimum — honest marketing builds trust.\n\n**Consequences of unethical marketing**: fines, lawsuits, reputation damage, boycotts, loss of customers. **Benefits of ethical marketing**: trust, loyalty, positive reputation, long-term profitability.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Ad shows burger bigger than actual product. Issue?",
          solution: "Deceptive advertising — misleading.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u3-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is deceptive advertising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Misleading or false marketing claims" },
              { id: "b", text: "Price promotion" },
              { id: "c", text: "Truthful marketing" },
              { id: "d", text: "Digital advertising" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deceptive advertising",
                statement: "False/misleading claims.",
              },
            ],
            steps: [
              {
                reasoning: "Deceptive = misleading.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Misleading claims",
            commonErrors: ["Truthful confused."],
          },
        },
        {
          id: "eiasbiz-u3-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of unethical marketing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unethical marketing",
                statement: "Deception, exploitation.",
              },
            ],
            steps: [
              {
                reasoning: "False advertising — exaggerated claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Targeting children with junk food ads.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Hidden costs — fees revealed at checkout.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "False ads, child targeting, hidden costs.",
            commonErrors: ["Only one.", "Legal issue."],
          },
        },
        {
          id: "eiasbiz-u3-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ethical marketing benefits businesses long-term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical marketing",
                statement: "Trust builds loyalty.",
              },
            ],
            steps: [
              {
                reasoning: "Builds customer trust — honest claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Creates brand loyalty — customers return.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Positive reputation — word-of-mouth, PR.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids legal costs — fines, lawsuits.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Trust, loyalty, reputation, avoids penalties.",
            commonErrors: ["Only costs.", "No benefit."],
          },
        },
        {
          id: "eiasbiz-u3-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company is accused of misleading health claims about its supplement.",
          parts: [
            {
              label: "a",
              prompt: "Identify the ethical/legal issue.",
              marks: 3,
            },
            { label: "b", prompt: "Suggest two corrective actions.", marks: 3 },
            { label: "c", prompt: "Evaluate impact on reputation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marketing ethics",
                statement: "Truthful claims required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Deceptive advertising — false health claims illegal.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Consumer protection violation — misleading customers.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Withdraw misleading claims immediately.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Provide evidence for claims or reformulate.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(c) Serious reputation damage — trust lost.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer:
              "(a) deceptive ads (b) withdraw+evidence (c) reputation harm",
            commonErrors: ["Ignore issue.", "No correction."],
          },
        },
      ],
    },
  ],
};
