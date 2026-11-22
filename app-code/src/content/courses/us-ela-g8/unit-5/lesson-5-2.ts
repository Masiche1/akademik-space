import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const ARGUMENTTEXT: TextExtract = {
  title: "The Case for Later School Start Times",
  author: "Written for Akademik Space",
  text: "Schools should delay start times because adolescent sleep patterns naturally shift later during puberty. The American Academy of Pediatrics recommends that middle and high schools start no earlier than 8:30 a.m. to support student health and academic performance.\n\nResearch consistently shows that sleep-deprived students perform worse on tests, have higher absenteeism, and report more mood problems. A 2022 study of 30 school districts found that schools starting at 8:30 or later saw test scores improve by an average of 4 percentile points.\n\nCritics argue that later start times disrupt after-school activities and bus schedules. However, districts that have implemented later starts report that these challenges are manageable through creative scheduling. The benefits to student health and learning outweigh the logistical adjustments required.",
};

export const lesson52: Lesson = {
  id: "ela8-u5-lesson-5-2",
  code: "5-2",
  title: "Tracing Arguments and Author's Craft",
  goal: "I CAN trace how authors build arguments and analyze their craft choices in informational texts.",
  standards: ["RI.8.6", "RI.8.8"],
  vocabulary: [
    { term: "Claim", definition: "Arguable statement the author makes." },
    {
      term: "Evidence",
      definition: "Facts, statistics, examples supporting the claim.",
    },
    {
      term: "Counterclaim",
      definition: "Opposing argument the author acknowledges.",
    },
    {
      term: "Rebuttal",
      definition: "Response to counterclaim explaining why claim still holds.",
    },
    {
      term: "Qualifying phrase",
      definition: "Words limiting claim scope — 'some experts say', 'often'.",
    },
    {
      term: "Author's craft",
      definition: "Deliberate language choices shaping meaning.",
    },
  ],
  concepts: [
    {
      id: "ela8-u5-argument",
      title: "Tracing argument structure",
      skill:
        "Identify claims, evidence, counterclaims, and rebuttals in informational texts.",
      lesson: {
        sections: [
          {
            heading: "Argument components",
            body: "Authors build arguments with: **claim** ('schools should delay start times'), **evidence** ('AAP recommends 8:30', 'test scores improve 4 percentile points'), **counterclaim** ('critics argue disruption'), **rebuttal** ('challenges are manageable'). The argument is strongest when counterclaims are acknowledged and addressed — ignoring opposition weakens credibility.",
          },
          {
            heading: "Qualifying language",
            body: "Authors use **qualifying phrases** to limit claims: 'research consistently shows' (not 'always'), 'often' (not 'always'), 'some experts say' (not 'all experts'). These show intellectual honesty — acknowledging complexity rather than overstating. 'Critics argue' signals the author is presenting opposition fairly before rebutting.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument structure",
            statement: "Claim → evidence → counterclaim → rebuttal.",
          },
          {
            name: "Counterclaim value",
            statement: "Acknowledging opposition strengthens credibility.",
          },
          {
            name: "Qualifying phrases",
            statement: "Limit claim scope — 'often', 'some', 'typically'.",
          },
        ],
        workedExample: {
          problem:
            "Identify the counterclaim and rebuttal in the start times passage.",
          solution:
            "Counterclaim: 'Critics argue that later start times disrupt after-school activities and bus schedules.' Rebuttal: 'However, districts that have implemented later starts report that these challenges are manageable through creative scheduling.'",
        },
      },
      questions: [
        {
          id: "ela8-u5-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENTTEXT,
          stem: "What is the author's main claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Schools should delay start times" },
              { id: "b", text: "Sleep is important" },
              { id: "c", text: "Buses are expensive" },
              { id: "d", text: "Students are lazy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Claim",
                statement: "Arguable position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The author argues 'schools should delay start times' — clear, arguable position.",
                evidence: "Schools should delay start times",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Schools should delay start times.",
            commonErrors: [
              "Choosing (c) — sleep is supporting evidence, not the claim.",
            ],
          },
        },
        {
          id: "ela8-u5-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENTTEXT,
          stem: "Identify the counterclaim and rebuttal in the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterclaim/rebuttal",
                statement: "Authors address opposition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counterclaim: 'Critics argue that later start times disrupt after-school activities and bus schedules.'",
                evidence: "Critics argue that later start times disrupt",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rebuttal: 'districts report these challenges are manageable through creative scheduling.'",
                evidence: "However, districts that have implemented",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rebuttal acknowledges the concern then provides evidence it's manageable.",
                evidence: "manageable through creative scheduling",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Counterclaim: critics argue disruption. Rebuttal: districts report challenges are manageable through creative scheduling.",
            commonErrors: [
              "Missing one component — need both counterclaim and rebuttal.",
            ],
          },
        },
        {
          id: "ela8-u5-argument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENTTEXT,
          stem: "Analyze how the author uses evidence to support the claim. Identify at least two pieces of evidence and explain their function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence analysis",
                statement: "How proof supports claims.",
              },
              {
                kind: "skill",
                name: "Argument tracing",
                statement: "Follow claim-evidence-rebuttal.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Evidence 1: 'AAP recommends 8:30' — authoritative source lends credibility.",
                evidence: "American Academy of Pediatrics recommends",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'test scores improve by 4 percentile points' — specific statistic quantifies benefit.",
                evidence: "improve by an average of 4 percentile points",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 3: 'sleep-deprived students perform worse' — mechanism explaining why start times matter.",
                evidence: "sleep-deprived students perform worse on tests",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each evidence type serves different function: authority, data, mechanism.",
                evidence: "benefits to student health and learning",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence: AAP recommendation (authority), 4 percentile point improvement (data), sleep deprivation effects (mechanism) — each supports the claim differently: credibility, quantification, explanation.",
            commonErrors: ["Listing evidence without explaining function."],
          },
        },
        {
          id: "ela8-u5-argument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENTTEXT,
          parts: [
            {
              label: "a",
              prompt: "Name one qualifying phrase in the passage.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how it limits the claim's scope.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Qualifying language",
                statement: "Limit claims appropriately.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Research consistently shows' or 'often' — qualifying phrases.",
                evidence: "Research consistently shows",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Consistently' acknowledges exceptions — doesn't claim universal truth, shows intellectual honesty.",
                evidence: "consistently shows that sleep-deprived",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Research consistently shows.' (b) Acknowledges exceptions — doesn't overstate, shows intellectual honesty.",
            commonErrors: [
              "Choosing 'always' — that's absolute, not qualifying.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u5-argument2",
      title: "Author's craft in informational writing",
      skill: "Analyze how authors use language choices to persuade and inform.",
      lesson: {
        sections: [
          {
            heading: "Persuasive language",
            body: "Authors use **loaded words** ('crucial', 'vital'), **emotional appeals** ('our children's future'), **rhetorical questions** ('Isn't it time we acted?'), **repetition** ('health, learning, wellbeing'), **contrast** ('while critics argue... however'). These techniques persuade by appealing to logic (logos), emotion (pathos), and credibility (ethos).",
          },
          {
            heading: "Informative vs persuasive",
            body: "Informational texts inform; persuasive texts argue. Many texts do both — the start times passage informs about research AND argues for policy change. Analyze which techniques serve which purpose: statistics inform; 'our children's future' persuades. Recognizing the blend helps evaluate credibility and bias.",
          },
        ],
        keyFormulas: [
          {
            name: "Persuasive techniques",
            statement:
              "Loaded words, emotional appeals, rhetorical questions, repetition.",
          },
          {
            name: "Logos/pathos/ethos",
            statement: "Logic, emotion, credibility — three persuasion modes.",
          },
          {
            name: "Informative vs persuasive",
            statement:
              "Texts can do both — analyze which serves which purpose.",
          },
        ],
        workedExample: {
          problem:
            "Identify a persuasive technique in the start times passage.",
          solution:
            "'The benefits to student health and learning outweigh the logistical adjustments required' — uses contrast and value judgment ('benefits outweigh') to persuade, not just inform.",
        },
      },
      questions: [
        {
          id: "ela8-u5-argument2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENTTEXT,
          stem: "What persuasive technique does 'benefits outweigh the logistical adjustments' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Neutral language" },
              { id: "b", text: "Factual reporting" },
              { id: "c", text: "Statistical evidence" },
              {
                id: "d",
                text: "Value judgment — framing benefits as more important",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive language",
                statement: "Value judgments persuade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Benefits outweigh' is a value judgment — frames one side as more important, persuading rather than just informing.",
                evidence: "benefits to student health and learning outweigh",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Value judgment — frames benefits as more important.",
            commonErrors: ["Choosing (a) — it's persuasive, not just factual."],
          },
        },
        {
          id: "ela8-u5-argument2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENTTEXT,
          stem: "Identify two persuasive techniques in the passage and explain their effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technique identification",
                statement: "Recognize persuasive strategies.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Technique 1: 'American Academy of Pediatrics' — appeal to authority (ethos).",
                evidence: "American Academy of Pediatrics recommends",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Technique 2: 'our children's future' or 'student health' — emotional appeal (pathos).",
                evidence: "benefits to student health and learning",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both persuade: authority lends credibility; emotion appeals to values.",
                evidence: "outweigh the logistical adjustments",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Appeal to authority (AAP) lends credibility; emotional appeal (student health) appeals to values — both persuade.",
            commonErrors: ["Identifying only one technique — multiple exist."],
          },
        },
        {
          id: "ela8-u5-argument2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENTTEXT,
          stem: "Analyze how the author balances informative and persuasive purposes. Identify one informative element and one persuasive element.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose analysis",
                statement: "Texts can inform and persuade.",
              },
              {
                kind: "skill",
                name: "Technique evaluation",
                statement: "Different elements serve different goals.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Informative: 'test scores improve by 4 percentile points' — presents data without judgment.",
                evidence: "improve by an average of 4 percentile points",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Persuasive: 'benefits outweigh the logistical adjustments' — value judgment favoring one side.",
                evidence: "benefits to student health and learning outweigh",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The text informs about research findings then persuades readers to support policy change.",
                evidence: "Schools should delay start times",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: strong arguments use evidence (informative) to support positions (persuasive).",
                evidence: "Critics argue that later start times disrupt",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Informative: '4 percentile points improvement' (data). Persuasive: 'benefits outweigh adjustments' (value judgment). The text informs about research then persuades for policy change.",
            commonErrors: [
              "Treating all elements as equally persuasive or informative.",
            ],
          },
        },
        {
          id: "ela8-u5-argument2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENTTEXT,
          parts: [
            {
              label: "a",
              prompt: "Name one rhetorical device in the passage.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain how it persuades readers.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "Devices serve persuasive functions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Appeal to authority ('American Academy of Pediatrics') or contrast ('however').",
                evidence: "American Academy of Pediatrics recommends",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Authority lends credibility — readers trust expert recommendations; contrast highlights rebuttal strength.",
                evidence: "However, districts that have implemented",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Appeal to authority or contrast. (b) Authority lends credibility; contrast emphasizes rebuttal — both persuade.",
            commonErrors: [
              "Naming device without explaining persuasive function.",
            ],
          },
        },
      ],
    },
  ],
};
