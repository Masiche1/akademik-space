import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const PROMPTNOTE: TextExtract = {
  title: "Writing Prompt: Should Students Have a Say in School Rules?",
  author: "Written for Akademik Space",
  text: "Write an argument essay responding to this prompt: Should students have a say in school rules?\n\nSupport your position with reasons and evidence from your reading, research, or experience. Acknowledge counterarguments and explain why your position is stronger.",
};

const WEAKARG: TextExtract = {
  title: "Student Draft: Homework Should Be Banned",
  author: "Written for Akademik Space",
  text: "Homework should be banned because it is boring and takes up too much time. Kids have other things to do after school, like sports and friends. Also, teachers assign too much homework and it doesn't help anyway. Some people say homework helps you learn, but I disagree. In conclusion, homework should be banned because it is bad.",
};

export const lesson61: Lesson = {
  id: "ela7-u6-lesson-6-1",
  code: "6-1",
  title: "Writing Arguments: Claims, Reasons, and Evidence",
  goal: "I CAN write an argument that states a clear claim, supports it with reasons and evidence, and addresses counterarguments.",
  standards: ["W.7.1", "W.7.1a", "W.7.1b", "W.7.1c"],
  vocabulary: [
    {
      term: "Argument",
      definition: "A reasoned position on an issue, supported by evidence.",
    },
    {
      term: "Claim",
      definition:
        "The position you are arguing for — stated clearly in the introduction.",
    },
    {
      term: "Reason",
      definition: "A logical explanation of why the claim is true.",
    },
    {
      term: "Evidence",
      definition: "Facts, examples, or research that support a reason.",
    },
    {
      term: "Counterargument",
      definition: "The opposing view you acknowledge and respond to.",
    },
    {
      term: "Rebuttal",
      definition:
        "Your response to a counterargument, explaining why your position still holds.",
    },
  ],
  concepts: [
    {
      id: "ela7-u6-arg",
      title: "Building a strong argument",
      skill:
        "Structure an argument with claim, reasons, evidence, and counterargument response.",
      lesson: {
        sections: [
          {
            heading: "Claim, reason, evidence",
            body: "A strong argument is not just an opinion — it is a **claim** supported by **reasons** (why the claim is true) and **evidence** (proof for each reason). 'Homework should be reduced' is a claim. 'It improves sleep and mental health' is a reason. 'The CDC recommends 8-10 hours for teens' is evidence. Each paragraph should develop one reason with supporting evidence.",
          },
          {
            heading: "Addressing counterarguments",
            body: "Grade 7 arguments must **acknowledge counterarguments** — the strongest opposing view — and respond to them. 'Some say homework builds responsibility, but the evidence shows it also causes burnout' is a rebuttal. Ignoring the other side makes your argument look weak; engaging with it makes your position stronger.",
          },
        ],
        keyFormulas: [
          {
            name: "Argument structure",
            statement:
              "Introduction (claim) → body paragraphs (reasons + evidence) → counterargument + rebuttal → conclusion.",
          },
          {
            name: "Reason-evidence link",
            statement:
              "Every reason needs evidence — a claim without proof is just an opinion.",
          },
          {
            name: "Rebuttal formula",
            statement:
              "Acknowledge the opposing view, then explain why your position is stronger.",
          },
        ],
        workedExample: {
          problem:
            "Why is the draft 'Homework should be banned' weak as an argument?",
          solution:
            "It states a claim ('banned') but gives only feelings ('boring', 'bad') instead of reasons and evidence. It mentions 'some people say' but doesn't explain or respond to that view. It has no research, examples, or logical explanation of why homework is harmful — just personal opinion repeated.",
        },
      },
      questions: [
        {
          id: "ela7-u6-arg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PROMPTNOTE,
          stem: "What does the prompt require besides stating your position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of school rules" },
              { id: "b", text: "Only a personal opinion" },
              { id: "c", text: "A story about your experience" },
              {
                id: "d",
                text: "Reasons, evidence, and acknowledgment of counterarguments",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument requirements",
                statement: "Position + reasons + evidence + counterargument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The prompt asks for position, reasons and evidence, AND acknowledgment of counterarguments — a complete argument.",
                evidence:
                  "Support your position with reasons and evidence... Acknowledge counterarguments",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. An argument needs reasons, evidence, and counterargument response.",
            commonErrors: [
              "Thinking an argument is just 'my opinion' — it requires support and engagement.",
            ],
          },
        },
        {
          id: "ela7-u6-arg-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WEAKARG,
          stem: "Identify two specific weaknesses in the draft argument about homework.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument critique",
                statement: "Weak arguments rely on feelings, not evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness 1: no evidence — 'boring' and 'bad' are feelings, not facts or research.",
                evidence: "it is boring and takes up too much time",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Weakness 2: counterargument ignored — 'some people say homework helps' is mentioned but not explained or answered.",
                evidence:
                  "Some people say homework helps you learn, but I disagree",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The draft repeats the claim without developing reasons — 'bad' is stated three times without proof.",
                evidence: "because it is bad",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "No evidence (only feelings), counterargument ignored, and the claim repeated without reasons — a weak argument.",
            commonErrors: [
              "Saying the draft is 'too short' — length isn't the issue; lack of evidence and reasoning is.",
            ],
          },
        },
        {
          id: "ela7-u6-arg-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROMPTNOTE,
          stem: "Write a thesis statement for the prompt 'Should students have a say in school rules?' Then explain how your thesis sets up an argument rather than just stating an opinion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis writing",
                statement:
                  "A thesis states a position that can be argued with evidence.",
              },
              {
                kind: "skill",
                name: "Argument vs opinion",
                statement:
                  "An argument invites support; an opinion just asserts.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The thesis should take a clear position — e.g., 'Students should have a say in school rules because participation teaches responsibility and produces rules people actually follow.'",
                evidence: "Should students have a say in school rules?",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It includes reasons ('teaches responsibility', 'rules people follow') that can be supported with evidence.",
                evidence: "Support your position with reasons and evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It is arguable — someone could disagree and present counterevidence, which is what makes it an argument topic.",
                evidence: "Acknowledge counterarguments",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It is not just 'rules are good/bad' — it makes a specific claim about student voice that requires proof.",
                evidence: "or experience",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example thesis: 'Students should have a say in school rules because participation teaches responsibility and produces rules students actually follow.' This sets up an argument because it makes a specific, arguable claim with reasons that need evidence — not just a personal preference.",
            commonErrors: [
              "Writing 'I think students should have a say' — too vague and opinion-based.",
              "Including multiple positions in one thesis.",
            ],
          },
        },
        {
          id: "ela7-u6-arg-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WEAKARG,
          parts: [
            {
              label: "a",
              prompt:
                "Rewrite the weak draft's first sentence as a stronger claim with a reason.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Add one piece of evidence that would support your rewritten claim.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Strengthening arguments",
                statement: "Replace feelings with reasons and evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Homework should be reduced because excessive assignments contribute to student stress and sleep deprivation.' — claim + reason.",
                evidence: "Homework should be banned because it is boring",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example evidence: 'The CDC recommends 8-10 hours of sleep for teenagers, but surveys show students average 7 hours on school nights.'",
                evidence: "takes up too much time",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Homework should be reduced because excessive assignments contribute to student stress and sleep deprivation.' (b) 'CDC recommends 8-10 hours sleep; students average 7 hours on school nights.'",
            commonErrors: [
              "Keeping 'boring' as the reason — feelings are not reasons.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u6-arg2",
      title: "Evidence types and integration",
      skill:
        "Select appropriate evidence and integrate it smoothly into argument paragraphs.",
      lesson: {
        sections: [
          {
            heading: "Types of evidence",
            body: "Arguments need different evidence types: **statistics** (numbers that show scale), **examples** (specific cases), **expert testimony** (what authorities say), **anecdotes** (personal stories — weakest), and **reasoning** (logical explanation). A strong paragraph uses one or two types, introduces them clearly, and connects them back to the claim.",
          },
          {
            heading: "Integration, not dumping",
            body: "Evidence should be **integrated**, not just inserted. 'According to a 2023 CDC study, teenagers need 8-10 hours of sleep' introduces the source before the fact. 'This shows that homework policies ignoring sleep needs are harmful' connects the evidence to your claim. Never end a paragraph with a quote and no explanation — always analyze what the evidence proves.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence introduction",
            statement:
              "Name the source, then state the fact, then explain what it proves.",
          },
          {
            name: "Analysis after evidence",
            statement:
              "Every piece of evidence needs a sentence explaining how it supports your reason.",
          },
          {
            name: "Evidence hierarchy",
            statement:
              "Statistics and expert testimony strongest; anecdotes weakest.",
          },
        ],
        workedExample: {
          problem:
            "How would you integrate evidence for the claim 'students should have a say in rules'?",
          solution:
            "First, introduce the source: 'A 2022 study in the Journal of Educational Psychology found that schools with student councils had 15% fewer disciplinary incidents.' Then state the finding, then analyze: 'This suggests that giving students voice in rules creates ownership — when students help make rules, they are more likely to follow them.'",
        },
      },
      questions: [
        {
          id: "ela7-u6-arg2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PROMPTNOTE,
          stem: "Which is the strongest type of evidence for an argument?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What your teacher said in class" },
              { id: "b", text: "A statistic from a credible study" },
              { id: "c", text: "A common saying or proverb" },
              { id: "d", text: "A personal story about your friend" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evidence strength",
                statement: "Credible data beats anecdote.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Statistics from credible studies are verifiable and representative; anecdotes and sayings are weaker.",
                evidence: "reasons and evidence from your reading, research",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Credible statistics are the strongest evidence type.",
            commonErrors: [
              "Choosing (a) — personal stories are engaging but weak evidence.",
            ],
          },
        },
        {
          id: "ela7-u6-arg2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PROMPTNOTE,
          stem: "Write a sentence that introduces evidence for the claim 'students should have a say in rules' and explains what it proves.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence integration",
                statement: "Source + fact + analysis = integrated evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The sentence should name the source and state the fact.",
                evidence: "from your reading, research, or experience",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It should connect the fact to the claim — show how it supports student voice.",
                evidence:
                  "Acknowledge counterarguments and explain why your position is stronger",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Example: 'A 2022 study found that schools with student councils had fewer disciplinary problems, suggesting that student participation in rule-making creates ownership and compliance.'",
                evidence: "or experience",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'A 2022 study found that schools with student councils had 15% fewer disciplinary incidents, suggesting that student participation in rule-making creates ownership.'",
            commonErrors: [
              "Quoting a fact without explaining what it proves for your claim.",
            ],
          },
        },
        {
          id: "ela7-u6-arg2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WEAKARG,
          stem: "The draft says 'Some people say homework helps you learn, but I disagree.' Rewrite this as a proper counterargument and rebuttal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counterargument + rebuttal",
                statement:
                  "Acknowledge the opposing view fairly, then respond with evidence.",
              },
              {
                kind: "skill",
                name: "Fair representation",
                statement: "State the counterargument in its strongest form.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "State the counterargument fairly: 'Supporters argue that homework reinforces learning and builds responsibility.'",
                evidence: "Some people say homework helps you learn",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Acknowledge its merit: 'There is evidence that practice improves retention for some subjects.'",
                evidence: "but I disagree",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Provide rebuttal evidence: 'However, research shows that excessive homework correlates with sleep deprivation and reduced engagement — the costs outweigh the benefits for most students.'",
                evidence: "it doesn't help anyway",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclude why your position holds: 'A balanced approach — quality over quantity — serves students better than elimination or overload.'",
                evidence: "In conclusion, homework should be banned",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Supporters argue homework reinforces learning and builds responsibility, and some evidence supports practice for retention. However, studies link excessive homework to sleep deprivation and burnout. A balanced approach — quality over quantity — serves students better than either extreme.'",
            commonErrors: [
              "Straw-manning the counterargument ('some people say' is too vague).",
              "Dismissing without evidence ('I just disagree').",
            ],
          },
        },
        {
          id: "ela7-u6-arg2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PROMPTNOTE,
          parts: [
            {
              label: "a",
              prompt:
                "Name two types of evidence appropriate for this argument.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain why 'my friend hates homework' is weak evidence.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence selection",
                statement: "Choose evidence that generalizes beyond one case.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Statistics (studies on student voice and discipline) and examples (schools with student councils).",
                evidence: "reading, research, or experience",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "One person's experience doesn't represent all students — anecdotes are the weakest evidence type.",
                evidence: "or experience",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Statistics and examples. (b) One friend's experience doesn't generalize — anecdotes are weak evidence.",
            commonErrors: [
              "Choosing 'anecdotes' as strong evidence — they are the weakest type.",
            ],
          },
        },
      ],
    },
  ],
};
