import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const WARPROMPT: TextExtract = {
  title: "Writing Prompt: Should Students Have a Voice in School Policy?",
  author: "Written for Akademik Space",
  text: "Write an argument essay responding to this prompt: Should students have a voice in school policy decisions?\n\nSupport your position with reasons and evidence from research, articles, or experience. Acknowledge counterarguments and explain why your position is stronger.",
};

const WEAKARG: TextExtract = {
  title: "Student Draft: Students Should Have a Voice",
  author: "Written for Akademik Space",
  text: "Students should have a voice in school policy because it's fair. Kids know what they need better than adults. Also, when students help make rules, they follow them better. Some people say students are too young to make decisions, but I disagree. Students should have a voice because it's the right thing to do.",
};

export const lesson61: Lesson = {
  id: "ela8-u6-lesson-6-1",
  code: "6-1",
  title: "Argument Writing: Claims, Evidence, and Counterarguments",
  goal: "I CAN write an argument that states a clear claim, supports it with evidence, and addresses counterarguments.",
  standards: ["W.8.1", "W.8.1a", "W.8.1b", "W.8.1c", "W.8.1d", "W.8.1e"],
  vocabulary: [
    {
      term: "Argument",
      definition: "A reasoned position on an issue, supported by evidence.",
    },
    { term: "Claim", definition: "The position you are arguing for." },
    {
      term: "Reason",
      definition: "Logical explanation of why the claim is true.",
    },
    {
      term: "Evidence",
      definition: "Facts, examples, or research supporting a reason.",
    },
    {
      term: "Counterargument",
      definition: "The opposing view you acknowledge and respond to.",
    },
    { term: "Rebuttal", definition: "Your response to a counterargument." },
  ],
  concepts: [
    {
      id: "ela8-u6-arg",
      title: "Building strong arguments",
      skill:
        "Structure arguments with claim, reasons, evidence, and counterargument response.",
      lesson: {
        sections: [
          {
            heading: "Claim-reason-evidence structure",
            body: "Grade 8 arguments need more sophistication than simple opinions. **Claim**: 'Students should have a voice in school policy.' **Reason**: 'Student input improves policy quality and compliance.' **Evidence**: 'A 2023 study found schools with student councils had 20% fewer disciplinary incidents.' Each paragraph develops one reason with supporting evidence.",
          },
          {
            heading: "Sophisticated counterarguments",
            body: "Grade 8 requires **acknowledging counterarguments** in their strongest form. 'Some argue students lack the maturity for policy decisions' is weak; 'Critics contend that student involvement slows decision-making and may compromise educational standards' is stronger. Then rebut: 'However, structured student advisory roles provide input without veto power, balancing efficiency with voice.'",
          },
        ],
        keyFormulas: [
          {
            name: "Argument structure",
            statement:
              "Claim → reasons + evidence → counterargument + rebuttal → conclusion.",
          },
          {
            name: "Counterargument strength",
            statement: "Present opposition fairly, then rebut with evidence.",
          },
          {
            name: "Reason-evidence link",
            statement: "Every reason needs credible evidence.",
          },
        ],
        workedExample: {
          problem: "Why is the draft 'Students should have a voice' weak?",
          solution:
            "Vague claim ('a voice'), weak reasons ('it's fair', 'they know better'), no evidence, counterargument dismissed ('I disagree'). Needs specific claim, evidence-based reasons, and engaged counterargument.",
        },
      },
      questions: [
        {
          id: "ela8-u6-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WARPROMPT,
          stem: "What makes an argument different from an opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opinions are longer" },
              { id: "b", text: "They're the same" },
              {
                id: "c",
                text: "Arguments use evidence and reasoning; opinions just assert",
              },
              { id: "d", text: "Opinions are always wrong" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument vs opinion",
                statement: "Evidence + reasoning vs assertion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Arguments support claims with evidence and reasoning; opinions just state preferences.",
                evidence: "Support your position with reasons and evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Arguments use evidence; opinions just assert.",
            commonErrors: [
              "Thinking opinions are 'wrong' — they're just unsupported.",
            ],
          },
        },
        {
          id: "ela8-u6-arg-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKARG,
          stem: "Identify two weaknesses in the draft argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument critique",
                statement: "Find weaknesses in reasoning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: vague claim — 'a voice' isn't specific; what decisions? what role?",
                evidence: "Students should have a voice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness 2: no evidence — 'it's fair' and 'they know better' are assertions, not proof.",
                evidence: "because it's fair",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Counterargument dismissed — 'I disagree' doesn't engage with the opposing view.",
                evidence: "but I disagree",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Weaknesses: vague claim, no evidence, dismissed counterargument.",
            commonErrors: [
              "Identifying only surface issues — need substantive critique.",
            ],
          },
        },
        {
          id: "ela8-u6-arg-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WARPROMPT,
          stem: "Write a thesis statement for 'Should students have a voice in school policy?' that sets up a sophisticated argument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement: "Specific, arguable, evidence-ready.",
              },
              {
                kind: "skill",
                name: "Sophisticated argument",
                statement: "Nuanced position, not simplistic.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Thesis should be specific: 'Students should have structured advisory roles in school policy because input improves decision quality and compliance.'",
                evidence: "Should students have a voice",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Includes reasons ('improves quality', 'compliance') that need evidence.",
                evidence: "Support your position with reasons",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Structured advisory' acknowledges complexity — not full control, but meaningful input.",
                evidence: "school policy decisions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Is arguable — critics could argue students lack maturity or efficiency suffers.",
                evidence: "Acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Students should have structured advisory roles in school policy because student input improves decision quality and increases compliance with rules.'",
            commonErrors: [
              "Vague thesis — 'students should have a voice' lacks specificity.",
            ],
          },
        },
        {
          id: "ela8-u6-arg-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKARG,
          parts: [
            {
              label: "a",
              prompt: "Rewrite 'it's fair' as a specific reason.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Add evidence to support your rewritten reason.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reason specificity",
                statement: "Vague → specific claims.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Student input improves policy quality because students experience school policies daily.'",
                evidence: "because it's fair",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: 'A 2023 study found schools with student councils had 20% fewer disciplinary incidents.'",
                evidence: "they follow them better",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Student input improves policy quality because students experience policies daily.' (b) '2023 study: schools with student councils had 20% fewer incidents.'",
            commonErrors: ["Keeping 'it's fair' — too vague."],
          },
        },
      ],
    },
    {
      id: "ela8-u6-arg2",
      title: "Evidence integration and rebuttal",
      skill: "Integrate evidence smoothly and write effective rebuttals.",
      lesson: {
        sections: [
          {
            heading: "Evidence integration",
            body: "Evidence should be **introduced** ('According to a 2023 study...'), **stated** ('schools with student councils had 20% fewer incidents'), **analyzed** ('This suggests student input improves compliance'). Never drop evidence without context — always connect to your claim. Use varied evidence types: statistics, examples, expert testimony.",
          },
          {
            heading: "Effective rebuttals",
            body: "A rebuttal acknowledges the counterargument fairly, then responds with evidence or reasoning. 'Critics argue student involvement slows decisions. However, structured advisory roles provide input without veto power — efficiency is preserved while voice is included.' The rebuttal doesn't dismiss; it engages and counters.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence integration",
            statement: "Introduce → state → analyze → connect to claim.",
          },
          {
            name: "Rebuttal formula",
            statement:
              "Acknowledge counterargument → respond with evidence/reasoning.",
          },
          {
            name: "Evidence variety",
            statement: "Statistics, examples, expert testimony — mix types.",
          },
        ],
        workedExample: {
          problem:
            "How would you rebut 'students are too young for policy decisions'?",
          solution:
            "'Critics argue students lack maturity for policy decisions. However, structured advisory roles — not voting rights — allow students to provide input while adults retain decision authority. This balances student voice with adult judgment.'",
        },
      },
      questions: [
        {
          id: "ela8-u6-arg2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WARPROMPT,
          stem: "What should you do with evidence in an argument?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Introduce, state, analyze, and connect to claim",
              },
              { id: "b", text: "List it without explanation" },
              { id: "c", text: "Use only personal opinions" },
              { id: "d", text: "Copy sources exactly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Context + analysis + connection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence needs introduction, statement, analysis, and connection to claim.",
                evidence: "Support your position with reasons and evidence",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Introduce, state, analyze, connect to claim.",
            commonErrors: ["Choosing (a) — evidence without analysis is weak."],
          },
        },
        {
          id: "ela8-u6-arg2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKARG,
          stem: "Rewrite 'but I disagree' as an effective rebuttal to 'students are too young to make decisions.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rebuttal writing",
                statement: "Acknowledge + respond.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledge: 'Critics argue students lack maturity for policy decisions.'",
                evidence: "Some people say students are too young",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Respond: 'However, structured advisory roles provide input without decision authority — adults retain control.'",
                evidence: "but I disagree",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The rebuttal engages fairly and counters with reasoning.",
                evidence: "students should have a voice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Critics argue students lack maturity for policy decisions. However, structured advisory roles provide input without decision authority — adults retain control while students contribute valuable perspectives.'",
            commonErrors: [
              "Dismissing without engagement — 'I disagree' doesn't rebut.",
            ],
          },
        },
        {
          id: "ela8-u6-arg2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WARPROMPT,
          stem: "Write a paragraph integrating two pieces of evidence for the claim 'student input improves school policy.' Include analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Multiple sources + analysis.",
              },
              {
                kind: "skill",
                name: "Synthesis",
                statement: "Combine evidence into argument.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Evidence 1: 'A 2023 study found schools with student councils had 20% fewer disciplinary incidents.'",
                evidence: "reasons and evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: 'Surveys show students whose opinions are heard report higher school satisfaction.'",
                evidence: "school policy decisions",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Analysis: 'Together, these findings suggest student input improves both behavior and engagement.'",
                evidence: "Support your position",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Connect to claim: 'This supports giving students structured advisory roles in policy.'",
                evidence: "explain why your position is stronger",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'A 2023 study found schools with student councils had 20% fewer disciplinary incidents, while surveys show students whose opinions are heard report higher satisfaction. Together, these findings suggest student input improves both behavior and engagement — supporting structured advisory roles in school policy.'",
            commonErrors: [
              "Listing evidence without synthesis — must combine into argument.",
            ],
          },
        },
        {
          id: "ela8-u6-arg2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKARG,
          parts: [
            {
              label: "a",
              prompt: "Identify what makes 'but I disagree' a weak rebuttal.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write a stronger rebuttal sentence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rebuttal evaluation",
                statement: "Effective rebuttals engage fairly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'I disagree' dismisses without engaging — doesn't acknowledge or counter the argument.",
                evidence: "but I disagree",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'However, structured advisory roles provide student input without giving them decision authority.'",
                evidence: "too young to make decisions",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Dismisses without engaging — no acknowledgment or counter. (b) 'However, structured advisory roles provide input without decision authority.'",
            commonErrors: [
              "Keeping 'I disagree' — must engage with the argument.",
            ],
          },
        },
      ],
    },
  ],
};
