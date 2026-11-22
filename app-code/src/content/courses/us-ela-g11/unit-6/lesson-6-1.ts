import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const ARGUMENT: TextExtract = {
  title: "Sample Argument Excerpt",
  author: "Written for Akademik Space",
  text: "School districts across the country are debating whether to require students to complete community service hours for graduation. Proponents argue that mandatory service teaches civic responsibility and provides students with real-world experience. Critics counter that forced volunteering contradicts the spirit of service itself — genuine community engagement cannot be compelled.\n\nThe strongest argument for mandatory service is not that it produces better citizens, but that it ensures every student — regardless of family connections or personal initiative — gains exposure to community needs. Many students would never volunteer on their own; mandatory hours guarantee they encounter perspectives outside their own experience.\n\nHowever, the implementation matters enormously. If schools require only token hours — a few hours at a food bank to check a box — the program becomes performative rather than transformative. Effective mandatory service requires meaningful placement, reflection, and student choice within guidelines. Without these elements, the policy risks creating resentment rather than civic engagement.",
};

export const lesson61: Lesson = {
  id: "ela11-u6-lesson-6-1",
  code: "6-1",
  title: "Argument Writing: Claims, Evidence, and Counterarguments",
  goal: "I CAN write sophisticated arguments — clear claims, strategic evidence, effective counterargument handling.",
  standards: [
    "W.11-12.1",
    "W.11-12.1a",
    "W.11-12.1b",
    "W.11-12.1c",
    "W.11-12.1d",
    "W.11-12.1e",
  ],
  vocabulary: [
    { term: "Claim", definition: "Position being argued." },
    { term: "Evidence", definition: "Support for claims." },
    { term: "Counterargument", definition: "Opposing view addressed." },
    { term: "Rebuttal", definition: "Response to counterargument." },
    { term: "Qualify", definition: "Limit scope of claim." },
    { term: "Nuanced position", definition: "Complex, qualified argument." },
  ],
  concepts: [
    {
      id: "ela11-u6-claim",
      title: "Crafting arguable claims",
      skill: "Develop specific, arguable claims that invite debate.",
      lesson: {
        sections: [
          {
            heading: "Claim characteristics",
            body: "Strong claims: **specific** ('mandatory service should be optional, not required'), **arguable** (reasonable people disagree), **qualified** ('effective mandatory service requires...'), **positioned** (clear stance). Weak claims: **vague** ('service is good'), **universal** ('everyone should volunteer'), **unarguable** ('service helps communities'). The sample argument's claim: 'mandatory service requires meaningful implementation' — specific, arguable, nuanced.",
          },
          {
            heading: "Nuanced positions",
            body: "Grade 11-12 arguments should avoid simplistic binaries. Instead of 'mandatory service is good/bad,' argue: 'mandatory service is beneficial IF implemented with choice, meaningful placement, and reflection; harmful if tokenized.' This acknowledges complexity while maintaining position. Nuance demonstrates sophisticated thinking — not fence-sitting but recognizing conditions that affect outcomes.",
          },
        ],
        keyFormulas: [
          {
            name: "Strong claim",
            statement: "Specific + arguable + qualified + positioned.",
          },
          {
            name: "Nuanced = complexity + position",
            statement: "Not fence-sitting.",
          },
          { name: "Weak claim", statement: "Vague, universal, or unarguable." },
        ],
        workedExample: {
          problem:
            "Improve the weak claim 'volunteering is good' into a strong claim.",
          solution:
            "'Structured volunteering programs with meaningful placement and reflection develop civic engagement more effectively than unstructured or token service.'",
        },
      },
      questions: [
        {
          id: "ela11-u6-claim-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "What makes a claim 'arguable'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's obviously true" },
              { id: "b", text: "It's emotional" },
              { id: "c", text: "It's short" },
              { id: "d", text: "Reasonable people could disagree" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Arguable claim",
                statement: "Debatable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arguable = reasonable people could disagree — invites debate.",
                evidence: "arguable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Reasonable people could disagree.",
            commonErrors: ["Making unarguable claims."],
          },
        },
        {
          id: "ela11-u6-claim-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENT,
          stem: "Analyze the sample argument's claim for specificity and qualification.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim analysis",
                statement: "Specificity + qualification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Specific: 'mandatory service requires meaningful implementation' — clear conditions.",
                evidence: "specific",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Qualified: 'if implemented with choice, meaningful placement, and reflection' — acknowledges conditions.",
                evidence: "qualified",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Arguable: reasonable people disagree on implementation requirements.",
                evidence: "arguable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Specific (clear conditions), qualified (acknowledges implementation factors), arguable (reasonable disagreement).",
            commonErrors: ["Not identifying qualification."],
          },
        },
        {
          id: "ela11-u6-claim-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENT,
          stem: "Analyze how the sample argument avoids simplistic binary thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Nuanced argumentation",
                statement: "Complexity with position.",
              },
              {
                kind: "skill",
                name: "Critical thinking",
                statement: "Beyond either/or.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Acknowledges both sides: proponents and critics presented fairly.",
                evidence: "both sides",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Identifies conditions: 'implementation matters enormously' — not universal judgment.",
                evidence: "conditions",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Maintains position: 'effective mandatory service requires...' — nuanced but clear stance.",
                evidence: "position",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Argument avoids binary thinking: presents both sides fairly, identifies conditions ('implementation matters'), maintains clear position ('effective service requires...'). Nuance demonstrates sophisticated analysis — not fence-sitting but recognizing complexity.",
            commonErrors: ["Thinking nuance = no position."],
          },
        },
        {
          id: "ela11-u6-claim-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENT,
          parts: [
            { label: "a", prompt: "What is a 'qualified claim'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Qualified claim",
                statement: "Limited scope.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Claim limited by conditions or scope — 'effective X requires Y.'",
                evidence: "qualified",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'Mandatory service is beneficial IF implemented with choice and reflection.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Claim limited by conditions. (b) 'Beneficial IF implemented with choice.'",
            commonErrors: ["Thinking qualification weakens argument."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-evidence",
      title: "Strategic Evidence Use",
      skill:
        "Select and deploy evidence strategically — not just quantity but relevance and integration.",
      lesson: {
        sections: [
          {
            heading: "Evidence selection",
            body: "Effective arguments use: **relevant evidence** (directly supports claim), **sufficient evidence** (enough to convince), **diverse evidence** (different types — data, examples, expert testimony), **integrated evidence** (woven into argument, not dumped). Weak arguments: **irrelevant evidence** (interesting but off-topic), **insufficient evidence** (one example for broad claim), **data dumps** (statistics without interpretation).",
          },
          {
            heading: "Evidence integration",
            body: "Evidence should be introduced, explained, and connected: 'Research shows X [evidence]. This matters because Y [explanation]. Therefore Z [connection to claim].' Not just 'Studies show X' — explain WHY it supports your argument. The sample argument integrates evidence: 'many students would never volunteer on their own' — connects to exposure argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence criteria",
            statement: "Relevant, sufficient, diverse, integrated.",
          },
          {
            name: "Integration = explain",
            statement: "Connect evidence to claim.",
          },
          {
            name: "Avoid data dumps",
            statement: "Interpret, don't just present.",
          },
        ],
        workedExample: {
          problem: "How should you integrate evidence about service programs?",
          solution:
            "Introduce ('Research shows...') → explain ('This matters because...') → connect ('Therefore...').",
        },
      },
      questions: [
        {
          id: "ela11-u6-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "What makes evidence 'relevant'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's long" },
              { id: "b", text: "It's interesting" },
              { id: "c", text: "It's recent" },
              { id: "d", text: "It directly supports the claim" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Relevant evidence",
                statement: "Directly supports.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Relevant = directly supports claim — not just interesting.",
                evidence: "relevant",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. It directly supports the claim.",
            commonErrors: ["Using irrelevant evidence."],
          },
        },
        {
          id: "ela11-u6-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENT,
          stem: "How does the sample argument integrate evidence?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Explain + connect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduces: 'The strongest argument is... exposure to community needs.'",
                evidence: "introduces",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explains: 'many students would never volunteer on their own' — why it matters.",
                evidence: "explains",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connects: 'guarantee they encounter perspectives outside their own experience' — links to claim.",
                evidence: "connects",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Introduces → explains → connects — evidence woven into argument, not dumped.",
            commonErrors: ["Presenting evidence without explanation."],
          },
        },
        {
          id: "ela11-u6-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENT,
          stem: "Analyze the difference between effective and ineffective evidence use in argumentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence effectiveness",
                statement: "What works.",
              },
              {
                kind: "skill",
                name: "Critical analysis",
                statement: "Effective vs ineffective.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Effective: relevant, sufficient, diverse, integrated — supports claim clearly.",
                evidence: "effective",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ineffective: irrelevant, insufficient, homogeneous, dumped — doesn't support claim.",
                evidence: "ineffective",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Sample argument: integrates evidence ('many students would never volunteer') — effective.",
                evidence: "sample",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Effective evidence: relevant (supports claim), sufficient (enough), diverse (different types), integrated (explained + connected). Ineffective: irrelevant, insufficient, dumped without explanation. Sample argument demonstrates effective integration.",
            commonErrors: ["Thinking more evidence = better."],
          },
        },
        {
          id: "ela11-u6-evidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENT,
          parts: [
            {
              label: "a",
              prompt: "What are the four criteria for effective evidence?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does the sample argument demonstrate?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence criteria",
                statement: "Four standards.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Relevant, sufficient, diverse, integrated.",
                evidence: "criteria",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Sample demonstrates: relevant ('exposure to community needs'), integrated ('never volunteer on their own').",
                evidence: "demonstrates",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Relevant, sufficient, diverse, integrated. (b) Relevant + integrated demonstrated.",
            commonErrors: ["Missing criteria."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-counterargument",
      title: "Counterargument and Rebuttal",
      skill:
        "Acknowledge and address counterarguments effectively — not ignore or dismiss.",
      lesson: {
        sections: [
          {
            heading: "Counterargument techniques",
            body: "Effective counterargument: **acknowledge** ('Critics argue...'), **explain** (why they believe this), **rebut** ('However, the evidence shows...'), **concede** (where appropriate). Weak techniques: **ignore** (pretend opposition doesn't exist), **dismiss** ('They're wrong'), **strawman** (misrepresent opposition). The sample argument: 'Critics counter that forced volunteering contradicts the spirit of service' — acknowledges, then addresses with implementation conditions.",
          },
          {
            heading: "Strategic concession",
            body: "Concession = acknowledging valid points in opposition. 'While critics have a point about token service, effective programs address this through...' — strengthens credibility by showing fairness. Concession isn't weakness — it's intellectual honesty that makes your argument more persuasive.",
          },
        ],
        keyFormulas: [
          {
            name: "Counterargument",
            statement: "Acknowledge + explain + rebut + concede.",
          },
          {
            name: "Concession = strength",
            statement: "Fairness enhances credibility.",
          },
          { name: "Avoid strawman", statement: "Represent opposition fairly." },
        ],
        workedExample: {
          problem: "How does the sample argument handle critics?",
          solution:
            "Acknowledges ('Critics counter...') → explains → addresses with 'implementation matters' → concedes token service concern.",
        },
      },
      questions: [
        {
          id: "ela11-u6-counterargument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "What's a 'counterargument'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal opinion" },
              { id: "b", text: "Opposing view you address" },
              { id: "c", text: "Your main argument" },
              { id: "d", text: "Evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Counterargument",
                statement: "Opposing view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Counterargument = opposing view addressed in argument.",
                evidence: "counterargument",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Opposing view you address.",
            commonErrors: ["Confusing with main argument."],
          },
        },
        {
          id: "ela11-u6-counterargument-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENT,
          stem: "How does the sample argument acknowledge critics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument technique",
                statement: "Acknowledge + address.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledges: 'Critics counter that forced volunteering contradicts the spirit of service.'",
                evidence: "acknowledges",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Addresses: 'However, the implementation matters enormously' — responds to criticism.",
                evidence: "addresses",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Concedes: 'token hours... performative rather than transformative' — acknowledges valid concern.",
                evidence: "concedes",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Acknowledges → addresses → concedes — fair representation strengthens argument.",
            commonErrors: ["Dismissing opposition."],
          },
        },
        {
          id: "ela11-u6-counterargument-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENT,
          stem: "Analyze why addressing counterarguments strengthens an argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument value",
                statement: "Why it strengthens.",
              },
              {
                kind: "skill",
                name: "Persuasive strategy",
                statement: "How it works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Shows fairness: acknowledging opposition demonstrates intellectual honesty.",
                evidence: "fairness",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Preempts objections: addressing criticism before opponents raise it.",
                evidence: "preempts",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strengthens credibility: fair-minded argument more persuasive than one-sided.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Addressing counterarguments strengthens: shows fairness (intellectual honesty), preempts objections (addresses before raised), enhances credibility (fair-minded more persuasive).",
            commonErrors: ["Thinking counterarguments weaken position."],
          },
        },
        {
          id: "ela11-u6-counterargument-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENT,
          parts: [
            { label: "a", prompt: "What's a 'strawman argument'?", marks: 2 },
            { label: "b", prompt: "Why is it ineffective?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Strawman",
                statement: "Misrepresentation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Misrepresenting opponent's position to make it easier to attack.",
                evidence: "strawman",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Ineffective: doesn't address actual objection, damages credibility.",
                evidence: "ineffective",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Misrepresenting opponent's position. (b) Doesn't address actual objection.",
            commonErrors: ["Using strawman unknowingly."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-structure",
      title: "Argument Structure and Organization",
      skill:
        "Organize arguments effectively — introduction, body paragraphs, conclusion with clear logic.",
      lesson: {
        sections: [
          {
            heading: "Argument structure",
            body: "Effective argument: **introduction** (hook + thesis), **body paragraphs** (claim → evidence → explanation → connection), **conclusion** (restatement + broader significance). Each paragraph: topic sentence (claim), evidence (support), explanation (why it matters), connection (back to thesis). The sample argument: intro (debate context) → body (strongest argument + implementation) → implicit conclusion (effective service requires conditions).",
          },
          {
            heading: "Logical flow",
            body: "Arguments need logical progression: **claim → evidence → explanation → connection**. Not just evidence — explain why it supports claim, connect back to thesis. Transitions guide reader: 'However,' 'Furthermore,' 'In contrast,' 'Therefore.' Clear organization helps reader follow reasoning.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Intro → body → conclusion." },
          {
            name: "Paragraph flow",
            statement: "Claim → evidence → explanation → connection.",
          },
          {
            name: "Transitions",
            statement: "However, furthermore, therefore.",
          },
        ],
        workedExample: {
          problem: "How should an argument paragraph be organized?",
          solution:
            "Topic sentence (claim) → evidence → explanation → connection to thesis.",
        },
      },
      questions: [
        {
          id: "ela11-u6-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "What's the standard argument structure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only conclusion" },
              { id: "b", text: "Only evidence" },
              { id: "c", text: "Introduction → body → conclusion" },
              { id: "d", text: "Random" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument structure",
                statement: "Three parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduction (thesis) → body (evidence) → conclusion (restatement).",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Introduction → body → conclusion.",
            commonErrors: ["Missing structural elements."],
          },
        },
        {
          id: "ela11-u6-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENT,
          stem: "Describe the paragraph flow in effective argumentation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement: "Claim → evidence → explanation → connection.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence: claim/position.",
                evidence: "claim",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence: support for claim.",
                evidence: "evidence",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation + connection: why it matters, back to thesis.",
                evidence: "explain",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Claim → evidence → explanation → connection.",
            commonErrors: ["Missing explanation/connection."],
          },
        },
        {
          id: "ela11-u6-structure-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENT,
          stem: "Analyze how the sample argument's structure supports its effectiveness.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Structure analysis",
                statement: "How organization serves argument.",
              },
              {
                kind: "skill",
                name: "Argument effectiveness",
                statement: "How structure enhances.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Intro: debate context + both sides — establishes stakes.",
                evidence: "intro",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body: strongest argument + implementation conditions — logical progression.",
                evidence: "body",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Implicit conclusion: 'effective service requires...' — clear position maintained.",
                evidence: "conclusion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Structure supports effectiveness: intro establishes context/both sides, body develops argument with conditions, conclusion maintains position. Clear organization helps reader follow reasoning.",
            commonErrors: ["Describing structure without analyzing effect."],
          },
        },
        {
          id: "ela11-u6-structure-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENT,
          parts: [
            { label: "a", prompt: "What's a 'topic sentence'?", marks: 2 },
            { label: "b", prompt: "What should it contain?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "Paragraph claim.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First sentence of paragraph stating main idea/claim.",
                evidence: "topic",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Should contain the claim being argued in that paragraph.",
                evidence: "contains",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) First sentence stating main idea. (b) Contains paragraph's claim.",
            commonErrors: ["Thinking it's just a topic."],
          },
        },
      ],
    },
    {
      id: "ela11-u6-integrated",
      title: "Integrated Argument Practice",
      skill:
        "Integrate claim, evidence, counterargument, and structure in comprehensive argument analysis.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Effective argumentation requires: **claims** (specific, arguable, qualified), **evidence** (relevant, sufficient, integrated), **counterarguments** (acknowledge, rebut, concede), **structure** (clear organization). The sample argument demonstrates all: qualified claim, integrated evidence, fair counterargument handling, logical structure. Exam questions often require analyzing how these elements work together.",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify claim → evaluate evidence → assess counterargument handling → analyze structure → conclude effectiveness. Each skill alone is partial; together reveal argument quality.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Claim + evidence + counterargument + structure.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "How would you comprehensively evaluate an argument?",
          solution:
            "Claim (specific/arguable) → evidence (relevant/integrated) → counterargument (fair/rebutted) → structure (logical) → conclusion (effective).",
        },
      },
      questions: [
        {
          id: "ela11-u6-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "What four skills are needed for comprehensive argument analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Claim + evidence + counterargument + structure",
              },
              { id: "b", text: "Only claims" },
              { id: "c", text: "Only evidence" },
              { id: "d", text: "Only structure" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim + evidence + counterargument + structure = comprehensive.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Claim + evidence + counterargument + structure.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u6-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ARGUMENT,
          stem: "Apply two argument skills to the sample text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Claim: 'effective mandatory service requires meaningful implementation' — qualified, arguable.",
                evidence: "claim",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: 'Critics counter...' — acknowledges opposition fairly.",
                evidence: "counterargument",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: intro → body → implicit conclusion — logical flow.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Claim (qualified/arguable), counterargument (acknowledged), structure (logical).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u6-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARGUMENT,
          stem: "Write an analysis paragraph on how the sample argument's elements work together.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Claim: 'effective service requires...' — qualified, maintains position.",
                evidence: "claim",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence: 'many students would never volunteer' — relevant, integrated.",
                evidence: "evidence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument + structure: acknowledges critics, logical organization — comprehensive.",
                evidence: "counter+structure",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The argument works through integration: qualified claim (effective service requires conditions) supported by relevant evidence (many wouldn't volunteer), fair counterargument handling (acknowledges critics), and logical structure (intro→body→conclusion). Elements work together for effectiveness.'",
            commonErrors: ["Analyzing elements separately."],
          },
        },
        {
          id: "ela11-u6-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ARGUMENT,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: claim+evidence+counterargument+structure shows argument quality — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Four skills show argument quality.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
