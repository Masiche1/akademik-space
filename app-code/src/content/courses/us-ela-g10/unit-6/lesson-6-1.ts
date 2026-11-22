import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const ARG: TextExtract = {
  title: "Writing Sample: Argument Essay on Later School Start Times",
  author: "Written for Akademik Space",
  text: "School districts across the country are reconsidering start times because adolescent biology makes early mornings incompatible with healthy sleep. The American Academy of Pediatrics recommends that middle and high schools start no earlier than 8:30 a.m., yet most US high schools still begin before 8:00. This essay argues that districts should adopt later start times because the health and academic benefits outweigh logistical challenges.\n\nThe primary argument is biological: during puberty, melatonin release shifts later, making it physiologically difficult for teens to fall asleep before midnight. When schools start at 7:30 a.m., students must wake at 6 a.m. or earlier — three hours before their bodies are ready to sleep. This creates chronic sleep deprivation linked to depression, anxiety, and impaired academic performance.\n\nOpponents argue that later start times disrupt bus schedules, sports practice, and working parents' childcare needs. These concerns are legitimate but solvable: districts can stagger elementary and secondary schedules (younger children naturally wake earlier), adjust bus routes, and provide before-school childcare options. The cost of inaction — teen depression, car accidents, dropout rates — far exceeds implementation challenges.\n\nSeattle's experience proves feasibility: after shifting to 8:45 a.m., attendance rose 4%, grades improved, and teen car crashes declined 8%. The research is clear; the question is whether districts have the political will to act.",
};

export const lesson61: Lesson = {
  id: "ela10-u6-lesson-6-1",
  code: "6-1",
  title: "Argument Writing: Claims, Reasons, and Counterarguments",
  goal: "I CAN write effective arguments with clear claims, supporting reasons, evidence, and counterargument engagement.",
  standards: ["W.9-10.1", "W.9-10.1a", "W.9-10.1b", "W.9-10.1c"],
  vocabulary: [
    { term: "Claim", definition: "Position you argue for." },
    { term: "Reason", definition: "Why claim is true." },
    { term: "Evidence", definition: "Support for reasons." },
    { term: "Counterargument", definition: "Opposing view addressed." },
    { term: "Rebuttal", definition: "Response to counterargument." },
    {
      term: "Concession",
      definition: "Acknowledging valid point in opposing view.",
    },
  ],
  concepts: [
    {
      id: "ela10-u6-claim",
      title: "Constructing claims and reasons",
      skill: "Develop clear, arguable claims supported by logical reasons.",
      lesson: {
        sections: [
          {
            heading: "Strong claims",
            body: "Effective claims are: **arguable** (not facts — 'later start times improve health' not 'schools start early'), **specific** (not vague — 'districts should adopt 8:30 a.m. starts' not 'change is good'), **defensible** (supportable with evidence). Weak claims: 'School is important' (unarguable), 'Later start is better' (vague). Strong claims invite debate and can be proven.",
          },
          {
            heading: "Reasoning structure",
            body: "Reasons support claims: claim 'later start improves health' → reason 'adolescent biology requires later sleep' → evidence 'melatonin shifts, depression rates.' Each reason needs its own evidence. Argument essay structure: introduction (claim) → body paragraphs (reasons + evidence) → counterargument + rebuttal → conclusion (reinforce claim). The sample essay follows this: biology reason → health consequences → counterargument → Seattle evidence → conclusion.",
          },
        ],
        keyFormulas: [
          {
            name: "Claim = arguable position",
            statement: "Not fact, not vague.",
          },
          {
            name: "Reason + evidence",
            statement: "Why claim is true + support.",
          },
          { name: "Counterargument", statement: "Address opposing view." },
        ],
        workedExample: {
          problem:
            "What makes 'districts should adopt later start times' a strong claim?",
          solution:
            "Arguable (not everyone agrees), specific (clear policy recommendation), defensible (AAP recommendation + Seattle data support it).",
        },
      },
      questions: [
        {
          id: "ela10-u6-claim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What makes a claim 'arguable'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's short" },
              { id: "b", text: "It's a fact" },
              { id: "c", text: "It's emotional" },
              { id: "d", text: "Reasonable people could disagree" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arguable claim",
                statement: "Debatable position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arguable = reasonable people could disagree — not fact, not opinion.",
                evidence: "arguable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Reasonable people could disagree.",
            commonErrors: ["Confusing arguable with opinion."],
          },
        },
        {
          id: "ela10-u6-claim-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARG,
          stem: "Identify the claim and one reason in the sample essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim identification",
                statement: "Main position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: 'districts should adopt later start times' — policy recommendation.",
                evidence: "claim",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reason: 'adolescent biology requires later sleep' — biological basis.",
                evidence: "reason",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'melatonin shifts, depression rates' — supports reason.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Claim: districts should adopt later start times. Reason: adolescent biology requires later sleep. Evidence: melatonin shifts, depression rates.",
            commonErrors: ["Confusing reasons with evidence."],
          },
        },
        {
          id: "ela10-u6-claim-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Analyze how the sample essay structures its argument — how does it build its case?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument structure",
                statement: "How case is built.",
              },
              {
                kind: "skill",
                name: "Logical progression",
                statement: "Reason → evidence → counter.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Introduction: claim stated + preview of argument structure.",
                evidence: "intro",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body: reason 1 (biology) → evidence (melatonin, depression) → reason 2 (academic benefits) → evidence (Seattle data).",
                evidence: "body",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: acknowledges opponents' concerns (logistics) → rebuts (solvable, cost of inaction higher).",
                evidence: "counter",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Essay structures argument: claim → reasons with evidence → counterargument with rebuttal → conclusion. Builds case progressively: biological basis → health/academic benefits → addresses opposition → reinforces claim with Seattle proof.",
            commonErrors: ["Listing content without analyzing structure."],
          },
        },
        {
          id: "ela10-u6-claim-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARG,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between a reason and evidence?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reason vs evidence",
                statement: "Why vs support.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Reason = why claim is true (logic); evidence = support (data/facts).",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: Reason 'biology requires later sleep'; evidence 'melatonin shifts, depression rates.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Reason = why claim true; evidence = support. (b) Reason 'biology requires later sleep'; evidence 'melatonin shifts.'",
            commonErrors: ["Confusing logic with support."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-counter",
      title: "Counterarguments and Rebuttals",
      skill:
        "Effectively acknowledge and rebut counterarguments in argument writing.",
      lesson: {
        sections: [
          {
            heading: "Addressing opposition",
            body: "Strong arguments acknowledge counterarguments: 'Opponents argue that later start times disrupt bus schedules, sports practice, and childcare.' This shows fairness — you're not ignoring opposition. Then rebut: 'These concerns are legitimate but solvable: stagger schedules, adjust bus routes, provide childcare.' Acknowledge validity ('legitimate') before rebutting — strengthens credibility.",
          },
          {
            heading: "Rebuttal strategies",
            body: "Effective rebuttals: **concede + pivot** ('legitimate but solvable'), **weigh costs** ('cost of inaction exceeds implementation'), **provide evidence** ('Seattle proves feasibility'), **reframe** ('opponents focus on logistics; we focus on health'). Weak rebuttals: dismiss opposition ('they're wrong'), ignore counterarguments, strawman (misrepresent opposing view).",
          },
        ],
        keyFormulas: [
          {
            name: "Acknowledge + rebut",
            statement: "Fairness strengthens argument.",
          },
          { name: "Concede + pivot", statement: "'Legitimate but solvable.'" },
          {
            name: "Weigh costs",
            statement: "Compare implementation vs inaction.",
          },
        ],
        workedExample: {
          problem: "How does the essay rebut the logistics counterargument?",
          solution:
            "Concedes legitimacy ('legitimate concerns') → pivots to solvability (stagger schedules, adjust routes) → weighs costs (inaction worse than implementation).",
        },
      },
      questions: [
        {
          id: "ela10-u6-counter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "Why acknowledge counterarguments in argument writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows fairness and strengthens credibility" },
              { id: "b", text: "To weaken argument" },
              { id: "c", text: "Required by format" },
              { id: "d", text: "To confuse readers" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counterargument acknowledgment",
                statement: "Fairness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledging opposition shows fairness — strengthens credibility.",
                evidence: "fairness",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Shows fairness and strengthens credibility.",
            commonErrors: ["Thinking acknowledging opposition = weakness."],
          },
        },
        {
          id: "ela10-u6-counter-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARG,
          stem: "Identify the counterargument and rebuttal in the essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument identification",
                statement: "Opposing view + response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counterargument: 'later start times disrupt bus schedules, sports, childcare.'",
                evidence: "counter",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rebuttal: 'legitimate but solvable — stagger schedules, adjust routes, provide childcare.'",
                evidence: "rebuttal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Additional rebuttal: 'cost of inaction exceeds implementation challenges.'",
                evidence: "cost",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Counterargument: logistics disruption. Rebuttal: legitimate but solvable (stagger schedules, adjust routes) + cost of inaction higher.",
            commonErrors: ["Not distinguishing counterargument from rebuttal."],
          },
        },
        {
          id: "ela10-u6-counter-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Analyze the effectiveness of the essay's counterargument handling — how does it strengthen the overall argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument effectiveness",
                statement: "How it strengthens.",
              },
              {
                kind: "skill",
                name: "Rebuttal strategy",
                statement: "Concede + pivot + evidence.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Acknowledges opposition fairly: 'Opponents argue...' — not dismissive.",
                evidence: "fair",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Concedes legitimacy: 'legitimate concerns' — validates opposing view before rebutting.",
                evidence: "concede",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rebuts effectively: solvability + cost comparison + Seattle evidence — comprehensive response.",
                evidence: "rebut",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Essay handles counterargument effectively: acknowledges opposition fairly, concedes legitimacy ('legitimate concerns'), rebuts comprehensively (solvability, cost comparison, Seattle evidence). Strengthens argument by showing thoroughness and fairness.",
            commonErrors: ["Dismissing counterarguments instead of engaging."],
          },
        },
        {
          id: "ela10-u6-counter-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARG,
          parts: [
            { label: "a", prompt: "What's a 'rebuttal'?", marks: 2 },
            { label: "b", prompt: "What's a 'concession'?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rebuttal vs concession",
                statement: "Response vs acknowledgment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Response to counterargument — why opposing view is wrong/insufficient.",
                evidence: "rebuttal",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Acknowledging valid point in opposing view before rebutting.",
                evidence: "concession",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Response to counterargument. (b) Acknowledging valid point in opposing view.",
            commonErrors: ["Confusing the two."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-evidence",
      title: "Evidence Integration in Arguments",
      skill:
        "Integrate textual, statistical, and expert evidence effectively in argument writing.",
      lesson: {
        sections: [
          {
            heading: "Types of evidence",
            body: "Effective arguments use multiple evidence types: **statistical** (Seattle data: attendance +4%, crashes -8%), **expert authority** (AAP recommendation), **textual** (melatonin research), **case study** (Seattle's experience). Each serves different function: statistics quantify, authority legitimizes, cases illustrate, text provides detail. Strong arguments layer evidence types for comprehensive support.",
          },
          {
            heading: "Evidence integration",
            body: "Don't just cite — integrate: 'Seattle's experience proves feasibility: after shifting to 8:45 a.m., attendance rose 4%, grades improved, and crashes declined 8%.' Evidence is woven into argument, not dropped in. Explain significance: 'The cost of inaction — teen depression, car accidents, dropout rates — far exceeds implementation challenges.' Connect evidence to claim explicitly.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple evidence types",
            statement: "Statistical + authority + case + text.",
          },
          {
            name: "Integrate, don't just cite",
            statement: "Weave into argument.",
          },
          {
            name: "Explain significance",
            statement: "Connect evidence to claim.",
          },
        ],
        workedExample: {
          problem: "How does the essay integrate Seattle evidence?",
          solution:
            "'Seattle's experience proves feasibility: attendance rose 4%, grades improved, crashes declined 8%' — evidence woven into argument showing real-world success.",
        },
      },
      questions: [
        {
          id: "ela10-u6-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What types of evidence does the essay use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only personal opinion" },
              { id: "b", text: "Only expert quotes" },
              { id: "c", text: "Statistical + expert + case study" },
              { id: "d", text: "Only statistics" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence types",
                statement: "Multiple forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Essay uses statistics (Seattle data), authority (AAP), case study (Seattle experience).",
                evidence: "types",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Statistical + expert + case study.",
            commonErrors: ["Missing evidence diversity."],
          },
        },
        {
          id: "ela10-u6-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARG,
          stem: "How does the essay integrate Seattle evidence into its argument?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Weaving into argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence presented: 'Seattle's experience proves feasibility' — frames purpose.",
                evidence: "framing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Data integrated: 'attendance rose 4%, grades improved, crashes declined 8%' — specific outcomes.",
                evidence: "data",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Significance explained: proves feasibility — connects evidence to claim.",
                evidence: "significance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Evidence framed ('proves feasibility'), data specific (attendance +4%, crashes -8%), significance explained (feasibility proven). Weaved into argument, not just cited.",
            commonErrors: ["Dropping evidence without integration."],
          },
        },
        {
          id: "ela10-u6-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Analyze why using multiple evidence types strengthens arguments more than relying on one type.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence diversity",
                statement: "Multiple types.",
              },
              {
                kind: "skill",
                name: "Comprehensive support",
                statement: "How they complement.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Each type serves different function: statistics quantify, authority legitimizes, cases illustrate.",
                evidence: "function",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Redundancy: if one evidence type is challenged, others support claim.",
                evidence: "redundancy",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Comprehensiveness: addresses different reader concerns — numbers convince some, cases others.",
                evidence: "comprehensive",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Multiple evidence types strengthen arguments: each serves different function (statistics quantify, authority legitimizes, cases illustrate), provides redundancy (if one challenged, others support), and addresses different reader concerns comprehensively.",
            commonErrors: ["Relying on single evidence type."],
          },
        },
        {
          id: "ela10-u6-evidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARG,
          parts: [
            { label: "a", prompt: "What's 'evidence integration'?", marks: 2 },
            { label: "b", prompt: "Give an example from the essay.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence integration",
                statement: "Weaving into argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Weaving evidence into argument with explanation of significance.",
                evidence: "integration",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Seattle's experience proves feasibility: attendance rose 4%...' — framed and explained.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Weaving evidence into argument with significance explanation. (b) 'Seattle's experience proves feasibility: attendance rose 4%...'",
            commonErrors: ["Confusing citation with integration."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-style",
      title: "Argument Style and Tone",
      skill:
        "Develop appropriate tone and style for argument writing — confident but not aggressive, persuasive but respectful.",
      lesson: {
        sections: [
          {
            heading: "Appropriate argument tone",
            body: "Effective argument tone: **confident** (not arrogant), **respectful** (acknowledges opposition), **evidence-based** (lets data persuade), **clear** (not convoluted). Weak tones: **aggressive** ('opponents are wrong'), **dismissive** (ignoring counterarguments), **hedging** ('maybe,' 'perhaps' everywhere). The sample essay balances: 'This essay argues' (confident), 'Opponents argue' (fair), 'legitimate but solvable' (respectful), 'research is clear' (assertive).",
          },
          {
            heading: "Persuasive language",
            body: "Persuasive devices: **modal verbs** ('should,' 'must' — assert necessity), **parallel structure** ('health and academic benefits'), **rhetorical questions** ('The research is clear; the question is whether districts have political will?'), **concrete language** ('6 a.m. or earlier' vs 'early morning'). Avoid: **absolutes** ('always,' 'never' — easily challenged), **emotional appeals** without evidence, **jargon** that alienates.",
          },
        ],
        keyFormulas: [
          {
            name: "Confident + respectful",
            statement: "Assert without attacking.",
          },
          { name: "Evidence-based", statement: "Let data persuade." },
          {
            name: "Persuasive devices",
            statement: "Modal verbs, parallel, rhetorical questions.",
          },
        ],
        workedExample: {
          problem: "How does the essay balance confidence and respect?",
          solution:
            "'This essay argues' (confident) + 'Opponents argue' (fair acknowledgment) + 'legitimate but solvable' (respectful concession) = assertive but not aggressive.",
        },
      },
      questions: [
        {
          id: "ela10-u6-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What's the appropriate tone for argument writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dismissive" },
              { id: "b", text: "Hedging" },
              { id: "c", text: "Aggressive" },
              { id: "d", text: "Confident but respectful" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument tone",
                statement: "Confident + respectful.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Effective argument: confident (assertive) + respectful (acknowledges opposition).",
                evidence: "tone",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Confident but respectful.",
            commonErrors: ["Thinking aggressive = persuasive."],
          },
        },
        {
          id: "ela10-u6-style-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARG,
          stem: "Identify two persuasive language devices in the essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasive devices",
                statement: "How language persuades.",
              },
            ],
            steps: [
              {
                reasoning: "Modal verbs: 'should,' 'must' — assert necessity.",
                evidence: "modal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Rhetorical question: 'The research is clear; the question is whether districts have political will?' — challenges reader.",
                evidence: "rhetorical",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Concrete language: '6 a.m. or earlier' vs 'early morning' — specific impact.",
                evidence: "concrete",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Modal verbs ('should'), rhetorical question ('political will?'), concrete language ('6 a.m.').",
            commonErrors: [
              "Identifying without explaining persuasive function.",
            ],
          },
        },
        {
          id: "ela10-u6-style-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Analyze how the essay's tone balances assertiveness with fairness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Assertiveness + fairness.",
              },
              {
                kind: "skill",
                name: "Persuasive balance",
                statement: "How tone persuades.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Assertive: 'This essay argues,' 'research is clear' — confident claims.",
                evidence: "assertive",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fair: 'Opponents argue,' 'legitimate concerns' — acknowledges opposition.",
                evidence: "fair",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: confident without aggressive — persuasive through reason, not attack.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Essay balances tone: assertive claims ('This essay argues,' 'research is clear') + fair acknowledgment ('Opponents argue,' 'legitimate concerns'). Confident without aggressive — persuades through reason and evidence, not attack.",
            commonErrors: ["Thinking confidence = aggression."],
          },
        },
        {
          id: "ela10-u6-style-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARG,
          parts: [
            { label: "a", prompt: "What's 'hedging' in writing?", marks: 2 },
            { label: "b", prompt: "Why avoid it in arguments?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hedging",
                statement: "Over-qualification.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Over-qualifying claims with 'maybe,' 'perhaps,' 'could be' — weakens assertion.",
                evidence: "hedging",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Arguments need confidence — hedging undermines persuasiveness.",
                evidence: "weakens",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Over-qualifying claims ('maybe,' 'perhaps'). (b) Undermines confidence/persuasiveness.",
            commonErrors: ["Thinking hedging = careful."],
          },
        },
      ],
    },
    {
      id: "ela10-u6-integrated",
      title: "Integrated Argument Writing Practice",
      skill:
        "Integrate claims, reasons, evidence, counterarguments, and style in comprehensive argument writing.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive argument",
            body: "Effective argument integrates: **claim** (clear position), **reasons** (why claim true), **evidence** (support for reasons), **counterargument** (acknowledge opposition), **rebuttal** (respond to opposition), **style** (confident + respectful). Sample essay demonstrates all: claim (later start) → reasons (biology, benefits) → evidence (AAP, Seattle) → counterargument (logistics) → rebuttal (solvable) → style (assertive + fair).",
          },
          {
            heading: "Writing process",
            body: "Draft → revise: outline claim + reasons → draft with evidence → add counterargument → refine tone → proofread. Don't expect perfection first draft — argument writing is iterative. Peer review helps identify weak claims, missing evidence, unaddressed counterarguments.",
          },
        ],
        keyFormulas: [
          {
            name: "Six components",
            statement:
              "Claim + reasons + evidence + counter + rebuttal + style.",
          },
          { name: "Iterative process", statement: "Draft → revise." },
          { name: "Peer review", statement: "Identify weaknesses." },
        ],
        workedExample: {
          problem: "How would you structure a complete argument essay?",
          solution:
            "Claim → reasons with evidence → counterargument + rebuttal → conclusion, with confident + respectful tone throughout.",
        },
      },
      questions: [
        {
          id: "ela10-u6-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What six components make a complete argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only conclusion" },
              {
                id: "b",
                text: "Claim + reasons + evidence + counter + rebuttal + style",
              },
              { id: "c", text: "Only evidence" },
              { id: "d", text: "Only claim" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complete argument",
                statement: "Six components.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim + reasons + evidence + counterargument + rebuttal + style.",
                evidence: "components",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Claim + reasons + evidence + counter + rebuttal + style.",
            commonErrors: ["Missing components."],
          },
        },
        {
          id: "ela10-u6-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARG,
          stem: "Outline the writing process for an argument essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writing process",
                statement: "Iterative approach.",
              },
            ],
            steps: [
              {
                reasoning: "Outline: claim + reasons + evidence plan.",
                evidence: "outline",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Draft: write with evidence integration.",
                evidence: "draft",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Revise: add counterargument, refine tone, proofread.",
                evidence: "revise",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Outline (claim + reasons + evidence) → draft (write with evidence) → revise (add counterargument, refine tone, proofread).'",
            commonErrors: ["Expecting perfection first draft."],
          },
        },
        {
          id: "ela10-u6-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Write a thesis statement for an argument essay on school start times.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis construction",
                statement: "Clear position.",
              },
              {
                kind: "skill",
                name: "Argument preview",
                statement: "What will be argued.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Clear claim: 'School districts should adopt later start times.'",
                evidence: "claim",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Preview reasons: 'because adolescent biology requires later sleep and health/academic benefits outweigh logistical challenges.'",
                evidence: "preview",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Specific: '8:30 a.m. or later' — actionable policy recommendation.",
                evidence: "specific",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'School districts should adopt later start times (8:30 a.m. or later) because adolescent biology requires later sleep, and the health and academic benefits outweigh solvable logistical challenges.'",
            commonErrors: ["Vague thesis without reasons."],
          },
        },
        {
          id: "ela10-u6-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARG,
          parts: [
            {
              label: "a",
              prompt: "Why is peer review valuable for argument writing?",
              marks: 2,
            },
            { label: "b", prompt: "What should reviewers look for?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Peer review",
                statement: "Feedback value.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identifies weak claims, missing evidence, unaddressed counterarguments.",
                evidence: "value",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Check: clear claim, sufficient evidence, counterargument addressed, appropriate tone.",
                evidence: "look for",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Identifies weaknesses. (b) Check claim clarity, evidence sufficiency, counterargument, tone.",
            commonErrors: ["Thinking peer review = proofreading only."],
          },
        },
      ],
    },
  ],
};
