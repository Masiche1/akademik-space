import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const ARG: TextExtract = {
  title: "Writing Prompt: Should Social Media Companies Be Regulated?",
  author: "Written for Akademik Space",
  text: "Write an argument about whether social media companies should be regulated. Consider: the attention economy business model, documented harms (misinformation, mental health, democratic erosion), First Amendment concerns, and the difficulty of regulating global platforms.\n\nYour argument should include a clear claim, reasons supported by evidence, consideration of counterarguments, and a conclusion that addresses complexity.",
};

const DRAFT: TextExtract = {
  title: "Student Argument Draft",
  author: "Written for Akademik Space",
  text: "Social media companies should be regulated because they cause problems. Studies show social media is bad for mental health. Also, misinformation spreads on these platforms. The government should step in and fix this. Some people say regulation violates free speech, but I think safety is more important. In conclusion, social media should be regulated.",
};

export const lesson61: Lesson = {
  id: "ela9-u6-lesson-6-1",
  code: "6-1",
  title: "Argument Writing: Claims, Evidence, and Counterarguments",
  goal: "I CAN write arguments that make precise claims, support them with credible evidence, and address counterarguments fairly.",
  standards: [
    "W.9-10.1",
    "W.9-10.1a",
    "W.9-10.1b",
    "W.9-10.1c",
    "W.9-10.1d",
    "W.9-10.1e",
  ],
  vocabulary: [
    {
      term: "Claim",
      definition: "The position you are arguing for — specific and arguable.",
    },
    {
      term: "Reason",
      definition: "Why your claim is true — logical explanation.",
    },
    {
      term: "Evidence",
      definition: "Facts, statistics, examples supporting your reasons.",
    },
    {
      term: "Counterargument",
      definition: "Opposing view you acknowledge and address.",
    },
    { term: "Rebuttal", definition: "Your response to the counterargument." },
    {
      term: "Qualifier",
      definition: "Word limiting your claim's scope (some, many, often).",
    },
  ],
  concepts: [
    {
      id: "ela9-u6-arg",
      title: "Strong argument structure",
      skill:
        "Build arguments with precise claims, logical reasons, credible evidence, and fair counterarguments.",
      lesson: {
        sections: [
          {
            heading: "Precision in claims",
            body: "Grade 9 requires **precise claims**: not 'social media is bad' but 'social media platforms should face regulatory oversight because their engagement-optimization business model creates documented harms that market forces alone cannot address.' The stronger claim is specific (regulation, not just 'fix it'), arguable (reasonable people could disagree), and addresses complexity (acknowledges benefits exist). Weak claims are vague, absolute, or unarguable.",
          },
          {
            heading: "Counterargument handling",
            body: "Strong arguments **acknowledge and address** counterarguments: 'Critics argue regulation violates First Amendment protections. However, existing regulations on broadcast media and campaign finance demonstrate that government can balance free expression with public interest.' This is stronger than ignoring opposition or dismissing it — you show you've considered the strongest version of the opposing view.",
          },
        ],
        keyFormulas: [
          {
            name: "Precise claim",
            statement: "Specific, arguable, addresses complexity.",
          },
          {
            name: "Claim-reason-evidence",
            statement: "Each reason needs supporting evidence.",
          },
          {
            name: "Counterargument + rebuttal",
            statement: "Acknowledge opposing view, then respond.",
          },
          {
            name: "Qualifiers",
            statement: "'Some,' 'often,' 'may' limit overreach.",
          },
        ],
        workedExample: {
          problem: "Why is 'social media should be regulated' a weak claim?",
          solution:
            "Too vague — doesn't specify what kind of regulation, ignores complexity (benefits exist), unarguable (who would disagree?). Stronger: 'targeted regulation of engagement-optimizing algorithms' — specific and arguable.",
        },
      },
      questions: [
        {
          id: "ela9-u6-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What makes a claim 'precise' in argument writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Absolute and unqualified" },
              { id: "b", text: "Specific, arguable, addresses complexity" },
              { id: "c", text: "Emotional and dramatic" },
              { id: "d", text: "Short and simple" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Precise claim",
                statement: "Specific and arguable.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Precise claims are specific (what kind of regulation), arguable (reasonable disagreement possible), and complex (acknowledges nuances).",
                evidence: "precise claims",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Specific, arguable, addresses complexity.",
            commonErrors: ["Thinking vague = clear."],
          },
        },
        {
          id: "ela9-u6-arg-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Identify two weaknesses in the draft's argument and explain how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument diagnosis",
                statement: "Identify weaknesses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: vague claim — 'should be regulated' doesn't specify what kind.",
                evidence: "should be regulated",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness 2: unsupported claims — 'studies show' without naming studies or findings.",
                evidence: "Studies show",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: 'targeted regulation of engagement-optimizing algorithms' + cite specific research (e.g., Meta's own internal studies on teen mental health).",
                evidence: "fix",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. Vague claim — specify 'targeted regulation of algorithms.' 2. Unsupported 'studies show' — cite specific research with findings.",
            commonErrors: [
              "Identifying surface issues — need argument-level problems.",
            ],
          },
        },
        {
          id: "ela9-u6-arg-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Write a thesis statement and outline for an argument about social media regulation that includes counterargument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis + outline",
                statement: "Plan argument structure.",
              },
              {
                kind: "skill",
                name: "Counterargument integration",
                statement: "Address opposing views.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Thesis: 'Targeted regulation of social media engagement algorithms is necessary to address documented harms while preserving free expression.'",
                evidence: "thesis",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Outline: claim → reasons (mental health harms, misinformation, democratic erosion) → evidence → counterargument (First Amendment) → rebuttal → conclusion.",
                evidence: "outline",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument: 'Regulation violates free speech' + rebuttal: 'broadcast/campaign finance precedents show balance possible.'",
                evidence: "counterargument",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example thesis: 'Targeted regulation of engagement-optimizing algorithms is necessary to address documented harms while preserving free expression.' Outline: claim → 3 reasons with evidence → First Amendment counterargument → precedent rebuttal → nuanced conclusion.",
            commonErrors: ["Outline without specific counterargument."],
          },
        },
        {
          id: "ela9-u6-arg-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Rewrite the draft's claim to be more precise.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why your version is stronger.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Claim precision",
                statement: "Specific beats vague.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Social media companies should be regulated' → 'Social media platforms should face targeted regulation of engagement-optimizing algorithms.'",
                evidence: "precise claim",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "More specific (what kind of regulation), more arguable (reasonable disagreement possible), addresses complexity.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Targeted regulation of engagement-optimizing algorithms.' (b) More specific, arguable, addresses complexity.",
            commonErrors: ["Just adding words — need precision not length."],
          },
        },
      ],
    },
    {
      id: "ela9-u6-evidence",
      title: "Evidence integration and credibility",
      skill:
        "Integrate credible evidence smoothly and evaluate source reliability.",
      lesson: {
        sections: [
          {
            heading: "Evidence types and credibility",
            body: "Grade 9 requires **credible evidence**: peer-reviewed studies > government data > reputable journalism > expert testimony > anecdote. 'Studies show' is weak — which studies? 'A 2021 Stanford study found that teens spending 3+ hours daily on social media showed 2x depression rates' is strong — specific source, quantified finding, relevant to claim. Always ask: Who conducted this? How was it done? Is it current? Does it directly support my claim?",
          },
          {
            heading: "Smooth evidence integration",
            body: "Weave evidence into argument: 'According to a 2021 Stanford study, teens spending 3+ hours daily on social media showed twice the depression rates of lighter users — evidence that engagement-optimization may exploit psychological vulnerabilities.' Attribution + finding + connection to claim. Don't just insert quotes — explain what evidence means for your argument. 'This matters because...' connects evidence to reasoning.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence hierarchy",
            statement:
              "Peer-reviewed > government > journalism > expert > anecdote.",
          },
          {
            name: "Specific beats vague",
            statement: "Name source, quantify finding.",
          },
          {
            name: "Explain connection",
            statement: "Evidence → 'this matters because' → claim.",
          },
        ],
        workedExample: {
          problem:
            "How would you integrate evidence about social media and mental health?",
          solution:
            "'A 2021 Stanford study found teens spending 3+ hours daily showed 2x depression rates — evidence that engagement-optimization may exploit psychological vulnerabilities, supporting the need for regulatory oversight.'",
        },
      },
      questions: [
        {
          id: "ela9-u6-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAFT,
          stem: "Why is 'Studies show social media is bad for mental health' weak evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's not emotional enough" },
              { id: "b", text: "It's about mental health" },
              { id: "c", text: "No source named, no specific findings" },
              { id: "d", text: "It's too short" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence specificity",
                statement: "Name source and findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Studies show' doesn't name which studies or what they found — unverifiable.",
                evidence: "Studies show",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. No source named, no specific findings.",
            commonErrors: ["Thinking any mention of studies = evidence."],
          },
        },
        {
          id: "ela9-u6-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Rewrite 'Studies show social media is bad for mental health' with specific, credible evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence specificity",
                statement: "Name source, quantify.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Name source: 'A 2021 Stanford study' or 'CDC data.'",
                evidence: "Studies show",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Quantify finding: 'teens spending 3+ hours daily showed 2x depression rates.'",
                evidence: "bad for mental health",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to claim: 'suggesting engagement-optimization may exploit psychological vulnerabilities.'",
                evidence: "connect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'A 2021 Stanford study found teens spending 3+ hours daily on social media showed twice the depression rates of lighter users — evidence that engagement-optimization may exploit psychological vulnerabilities.'",
            commonErrors: ["Adding 'research shows' — still vague."],
          },
        },
        {
          id: "ela9-u6-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Write a paragraph integrating three pieces of evidence for the social media regulation argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-evidence integration",
                statement: "Weave multiple sources.",
              },
              {
                kind: "skill",
                name: "Evidence explanation",
                statement: "Connect to claim.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Evidence 1: Stanford mental health study — 'teens 3+ hrs showed 2x depression rates.'",
                evidence: "evidence 1",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: Misinformation research — 'false stories spread 6x faster than true ones' (MIT study).",
                evidence: "evidence 2",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 3: Internal Meta documents — 'company knew engagement harmed teens but prioritized growth.'",
                evidence: "evidence 3",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example paragraph: 'Multiple sources document harms: Stanford research shows teens spending 3+ hours daily have 2x depression rates; MIT studies show false stories spread 6x faster than true ones; leaked Meta documents reveal the company knew engagement harmed teens but prioritized growth. Together, this evidence suggests engagement-optimization creates harms that market forces alone cannot address — supporting targeted regulatory oversight.'",
            commonErrors: ["Listing evidence without connecting to claim."],
          },
        },
        {
          id: "ela9-u6-evidence-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            {
              label: "a",
              prompt: "Rank evidence types from most to least credible.",
              marks: 2,
            },
            { label: "b", prompt: "Why does credibility matter?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence hierarchy",
                statement: "Credibility ranking.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Peer-reviewed > government data > journalism > expert > anecdote.",
                evidence: "evidence hierarchy",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Credible evidence withstands scrutiny — weak evidence undermines argument.",
                evidence: "credibility",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Peer-reviewed > government > journalism > expert > anecdote. (b) Credible evidence withstands scrutiny; weak evidence undermines argument.",
            commonErrors: ["Thinking all sources are equal."],
          },
        },
      ],
    },
    {
      id: "ela9-u6-organization",
      title: "Organization and coherence",
      skill:
        "Organize arguments logically with clear transitions and coherent paragraph development.",
      lesson: {
        sections: [
          {
            heading: "Argument organization",
            body: "Strong arguments organize by **reason** (each paragraph = one reason) or **evidence** (each paragraph = one type of proof). For social media regulation: P1 mental health harms, P2 misinformation, P3 democratic erosion, P4 counterargument + rebuttal, P5 conclusion. Each paragraph has: topic sentence (reason), evidence (support), explanation (why it matters), transition (connect to next). Organization makes argument followable — reader never loses thread.",
          },
          {
            heading: "Transitions and coherence",
            body: "Transitions guide reader: 'Furthermore' (adding point), 'However' (counterargument), 'Consequently' (result), 'For example' (evidence). Coherence means each paragraph connects to thesis: 'This matters because engagement-optimization exploits psychological vulnerabilities — supporting regulatory oversight.' Don't just list points — show how they build your case. The whole should be greater than sum of parts.",
          },
        ],
        keyFormulas: [
          {
            name: "One reason per paragraph",
            statement: "Clear organization.",
          },
          {
            name: "Topic-evidence-explanation",
            statement: "Paragraph structure.",
          },
          {
            name: "Transitions connect",
            statement: "Guide reader through argument.",
          },
        ],
        workedExample: {
          problem: "How would you organize a social media regulation argument?",
          solution:
            "P1 mental health harms → P2 misinformation → P3 democratic erosion → P4 counterargument + rebuttal → P5 conclusion. Each paragraph: topic sentence, evidence, explanation, transition.",
        },
      },
      questions: [
        {
          id: "ela9-u6-organization-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARG,
          stem: "What is the best way to organize an argument essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Conclusion first" },
              {
                id: "b",
                text: "One reason per paragraph with clear transitions",
              },
              { id: "c", text: "All evidence first" },
              { id: "d", text: "Random order" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument organization",
                statement: "Logical structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "One reason per paragraph with transitions creates followable argument.",
                evidence: "organization",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. One reason per paragraph with clear transitions.",
            commonErrors: ["Listing points without organization."],
          },
        },
        {
          id: "ela9-u6-organization-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAFT,
          stem: "Identify the organizational problem in the draft and suggest a fix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Organization diagnosis",
                statement: "Identify structural issues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Problem: draft lists reasons without development — 'bad for mental health,' 'misinformation' — no evidence or explanation.",
                evidence: "lists reasons",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fix: dedicate paragraph to each reason with topic sentence, evidence, explanation.",
                evidence: "fix",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Add transitions: 'Furthermore' for additional reasons, 'However' for counterargument.",
                evidence: "transitions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Problem: reasons listed without development. Fix: one paragraph per reason with topic sentence, evidence, explanation, transitions.",
            commonErrors: ["Adding more content without fixing structure."],
          },
        },
        {
          id: "ela9-u6-organization-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ARG,
          stem: "Write an outline for a social media regulation argument with paragraph-by-paragraph organization.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument outlining",
                statement: "Plan structure.",
              },
              {
                kind: "skill",
                name: "Paragraph development",
                statement: "Each paragraph has purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Intro: hook (attention economy scale) + thesis (targeted regulation needed).",
                evidence: "outline",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "P1: mental health harms — Stanford study evidence.",
                evidence: "P1",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning: "P2: misinformation — MIT study evidence.",
                evidence: "P2",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "P3: counterargument (First Amendment) + rebuttal (precedents).",
                evidence: "P3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: restate thesis + significance (democratic health).",
                evidence: "conclusion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro (hook + thesis) → P1 mental health (Stanford study) → P2 misinformation (MIT study) → P3 counterargument (First Amendment) + rebuttal (precedents) → Conclusion (restate + significance).",
            commonErrors: [
              "Outline without specific evidence for each paragraph.",
            ],
          },
        },
        {
          id: "ela9-u6-organization-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAFT,
          parts: [
            { label: "a", prompt: "What is a 'topic sentence'?", marks: 2 },
            {
              label: "b",
              prompt: "Write one for the mental health paragraph.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Topic sentence",
                statement: "Paragraph's main point.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First sentence stating paragraph's main point/argument.",
                evidence: "topic sentence",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'Social media's engagement-optimization business model creates documented mental health harms for adolescents.'",
                evidence: "mental health",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) First sentence stating paragraph's main point. (b) 'Social media's engagement-optimization business model creates documented mental health harms for adolescents.'",
            commonErrors: ["Topic sentence that's just a fact, not argument."],
          },
        },
      ],
    },
  ],
};
