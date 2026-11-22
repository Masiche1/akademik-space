import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cilgp-u3-lesson-3-3",
  code: "3-3",
  title: "Stage 9 Checkpoint — Communication, Reflection and Projects",
  goal: "I CAN communicate findings and reflect on learning at Stage 9 checkpoint standard.",
  standards: [
    "Cambridge Lower Secondary Global Perspectives 1129 Checkpoint Stage 9: communication, reflection",
  ],
  stage: 9,
  vocabulary: [
    {
      term: "Communication",
      definition: "Sharing ideas clearly with an audience.",
    },
    {
      term: "Reflection",
      definition: "Reviewing what was learned and how to improve.",
    },
    { term: "Audience", definition: "The people the communication is for." },
    {
      term: "Structure",
      definition: "How information is organised for the reader.",
    },
    {
      term: "Action",
      definition: "A concrete step taken in response to findings.",
    },
  ],
  concepts: [
    {
      id: "cilgp-u3-s9-communication",
      title: "Stage 9 communication checkpoint",
      skill: "Adapt communication to purpose and audience.",
      lesson: {
        sections: [
          {
            heading: "Communication",
            body: "Effective communication adapts language, detail and format to the audience — a school assembly differs from a written report. Clear structure (introduction, developed points, conclusion) carries the argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Communication",
            statement: "audience + purpose + structure",
          },
        ],
        workedExample: {
          problem:
            "How would you change a report on plastic pollution for a primary school audience?",
          solution:
            "Simpler vocabulary, concrete examples, shorter paragraphs, and a clear 'what you can do' ending.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s9-comm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST thing to consider when planning a presentation on a global issue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The font size of slides" },
              { id: "b", text: "The number of slides" },
              { id: "c", text: "The audience and purpose" },
              { id: "d", text: "The speaker's outfit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience",
                statement: "Communication is shaped by who it is for and why.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Audience and purpose determine language, detail and structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "The audience and purpose",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain two features of a well-structured written report on a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Introduction, developed body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Clear introduction stating the issue and the report's aim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Body paragraphs each developing one point with evidence; conclusion summarising findings.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear introduction; evidence-backed paragraphs; summarising conclusion",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A group wants to persuade their school to start a recycling programme. Suggest two ways they could adapt their communication for this audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience adaptation",
                statement: "Match language and detail to the reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Address the headteacher/council formally with evidence of cost savings and environmental benefit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For students, use a petition or assembly talk with simple, action-focused language.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both audiences need different registers but the same core evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Formal evidence-based pitch to the council; simple action-focused message to students",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "After completing a global perspectives project, a student writes: 'I learnt a lot.' Write a stronger reflection that names specific learning and an improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reflection",
                statement:
                  "Specific learning + honest evaluation + next steps.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Name what was learnt specifically, e.g. how to evaluate source bias.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate what went well or poorly in the project process.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State a concrete improvement for next time, e.g. earlier deadlines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Specific, evaluative reflection rather than a generic statement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Specific skill learnt + honest evaluation of process + concrete improvement",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of adapting your communication to your audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the presentation longer" },
              { id: "b", text: "To hide weak evidence" },
              { id: "c", text: "To use bigger words" },
              {
                id: "d",
                text: "So the message is understood and appropriate for that audience",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience adaptation",
                statement: "Match message to receiver.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adaptation ensures the audience can understand and engage with the message.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "So the message is understood and appropriate for that audience",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student speech lasts 10 minutes. How many seconds is that?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 600, unit: "seconds" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Unit conversion",
                statement: "Minutes x 60 = seconds.",
              },
            ],
            steps: [
              {
                reasoning: "10 x 60 = 600 seconds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "600 seconds",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two features of a well-structured written report on a global issue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Introduction, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "e.g. clear introduction stating the issue and aim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. body paragraphs each developing one point with evidence; conclusion summarising.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "Clear intro + evidence-backed paragraphs + conclusion",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most appropriate register for a letter to the school council about a global issue?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Formal, polite language with clear evidence",
              },
              { id: "b", text: "Casual slang and abbreviations" },
              { id: "c", text: "Emoji and memes" },
              { id: "d", text: "Very technical jargon with no explanation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Register",
                statement: "Match formality to audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Formal register suits official audiences like a school council.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Formal, polite language with clear evidence",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A report has 1,200 words divided equally across 3 sections. How many words does each section contain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 400, unit: "words" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal split",
                statement: "Total / sections.",
              },
            ],
            steps: [
              {
                reasoning: "1200 / 3 = 400 words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 400 words.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "400 words",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain three ways you would adapt a report on climate change for a Year 3 (primary) audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Audience adaptation",
                statement: "Simpler language, concrete examples.",
              },
            ],
            steps: [
              {
                reasoning: "Simpler vocabulary and shorter sentences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Concrete familiar examples, e.g. recycling at home, weather changes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Clear 'what you can do' ending appropriate for children.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Simpler words, concrete examples, child-friendly action ending",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the purpose of a conclusion in a report or presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To repeat the title" },
              { id: "b", text: "To introduce a new argument" },
              { id: "c", text: "To list all sources" },
              {
                id: "d",
                text: "To summarise findings and state the main message",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Conclusion ties it together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The conclusion draws together the argument and delivers the main message.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "To summarise findings and state the main message",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A 15-minute presentation uses 5 visual aids with equal time for each. How many minutes does each visual aid get?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3, unit: "minutes" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Equal time",
                statement: "Total / items.",
              },
            ],
            steps: [
              {
                reasoning: "15 / 5 = 3 minutes each.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 3 minutes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "3 minutes",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why does clear structure matter when communicating a complex global issue to an audience?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Structure",
                statement: "Introduction, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Complex issues overwhelm audiences without clear organisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structure guides the audience logically from issue to evidence to conclusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It makes the main message and evidence easier to follow and remember.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Guides audience logically; makes complex content followable",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How does persuasive communication differ from purely informative communication?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are identical" },
              { id: "b", text: "Persuasive uses no evidence" },
              { id: "c", text: "Informative always uses emotion" },
              {
                id: "d",
                text: "Persuasive aims to convince the audience to accept a position or act; informative mainly presents facts",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasion",
                statement: "Convincing others of a position.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Persuasion seeks agreement/action; information seeks understanding.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Persuasive aims to convince/act; informative presents facts",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A survey of 60 students finds that 40 prefer a poster presentation and 20 prefer a video presentation. What percentage of students prefer the poster?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 66.7, unit: "%", tolerance: 0.1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Check total: 40 + 20 = 60 matches the sample.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "40 / 60 = 0.667.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.667 x 100 = 66.7%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "66.7%",
          },
        },
        {
          id: "cilgp-u3-s9-comm-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Your group wants to present project findings on 'school food waste' to the school council. Plan the communication: (a) the audience and purpose, (b) one register choice, (c) the structure, (d) one way to make it persuasive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Communication",
                statement: "Audience + purpose + structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Valid audience/purpose, e.g. council members; persuade them to fund a waste-reduction scheme.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid register, e.g. formal with evidence of costs and savings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid structure: introduction -> evidence-backed points -> conclusion with recommendation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Valid persuasive device, e.g. strong hook statistic or clear call to action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Audience, register, structure and persuasive device",
          },
        },
      ],
    },
    {
      id: "cilgp-u3-s9-project",
      title: "Stage 9 project and action checkpoint",
      skill: "Describe project stages and turning findings into action.",
      lesson: {
        sections: [
          {
            heading: "Projects and action",
            body: "Global Perspectives projects move from research question through investigation, analysis and evaluation to communication and action. Strong projects end with a realistic action or recommendation linked to the evidence.",
          },
        ],
        keyFormulas: [
          {
            name: "Project flow",
            statement:
              "question → research → analysis → evaluation → communication → action",
          },
        ],
        workedExample: {
          problem:
            "A project finds that school bins are often overflowing. Suggest one realistic action.",
          solution:
            "Propose extra bins at busy points plus a student rota — evidence-linked and achievable.",
        },
      },
      questions: [
        {
          id: "cilgp-u3-s9-p-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should come FIRST in a Global Perspectives project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Designing the poster" },
              { id: "b", text: "Choosing and refining a research question" },
              { id: "c", text: "Collecting every possible source" },
              { id: "d", text: "Writing the conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement: "Question guides everything.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The research question defines the project's direction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Choosing and refining a research question",
          },
        },
        {
          id: "cilgp-u3-s9-p-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain why a good action at the end of a project should link back to the evidence gathered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence-linked action",
                statement: "Actions address what the research showed.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The evidence shows what the real problem and its causes are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "An action linked to it targets the actual cause, not a guess.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence reveals the real problem — linked actions target the actual cause",
          },
        },
        {
          id: "cilgp-u3-s9-p-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A project on food waste concludes that 'people should waste less food'. Explain why this is a weak recommendation and improve it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recommendation quality",
                statement: "Specific, achievable, evidence-linked.",
              },
            ],
            steps: [
              {
                reasoning: "Too vague — no actor, method or measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improved: e.g. 'Canteens should offer a pay-what-you-can surplus shelf for unsold food.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Specific actor (canteens), method (surplus shelf), links to waste evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vague advice; improved version names who acts, how, and links to evidence",
          },
        },
        {
          id: "cilgp-u3-s9-p-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline the stages of a Global Perspectives project from question to action, and state what makes the final stage more than just 'telling people what you found'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement:
                  "Research → analysis → evaluation → communication → action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Stages: question, research, analyse evidence, evaluate perspectives/solutions, communicate, act.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Communication stage presents findings to an audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action stage turns findings into a concrete recommendation or real-world step.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Action makes the project matter beyond the classroom — it changes something.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question→research→analysis→evaluation→communication→action; action applies findings to real change",
          },
        },
        {
          id: "cilgp-u3-s9-p-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'action' stage of a Global Perspectives project involve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the research question" },
              { id: "b", text: "Designing the cover page" },
              {
                id: "c",
                text: "Turning findings into a concrete recommendation or real-world step",
              },
              { id: "d", text: "Collecting more sources" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement: "Action applies findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The action stage turns findings into recommendations or real steps.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Turning findings into a concrete recommendation or real-world step",
          },
        },
        {
          id: "cilgp-u3-s9-p-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A GP project has 6 stages. After completing the first stage, how many stages remain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining stages",
                statement: "Total minus completed.",
              },
            ],
            steps: [
              {
                reasoning: "6 - 1 = 5 stages remain.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cilgp-u3-s9-p-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Give two features that make an action at the end of a GP project realistic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Realistic action",
                statement: "Achievable and evidence-linked.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. achievable with available time, money and people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. linked to the evidence — it addresses the actual problem found.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Achievable + evidence-linked",
          },
        },
        {
          id: "cilgp-u3-s9-p-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should a project's final action link back to the evidence it gathered?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is not necessary" },
              { id: "b", text: "To impress the teacher" },
              { id: "c", text: "So it is shorter" },
              {
                id: "d",
                text: "So it targets the actual problem found, not a guess",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence-linked action",
                statement: "Actions address real causes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence reveals the real problem; linked actions target its actual cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "So it targets the actual problem found, not a guess",
          },
        },
        {
          id: "cilgp-u3-s9-p-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 12-week GP project spends 3 weeks on research. What percentage of the project is research?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Percentage",
                statement: "Part / whole x 100.",
              },
            ],
            steps: [
              {
                reasoning: "3 / 12 = 0.25.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "0.25 x 100 = 25%.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "cilgp-u3-s9-p-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "This project recommendation is weak: 'Students should waste less food.' Rewrite it as a strong recommendation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Recommendation quality",
                statement: "Specific, achievable, evidence-linked.",
              },
            ],
            steps: [
              {
                reasoning: "Identifies vagueness: no actor, method or measure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Adds specific actor and method, e.g. 'The canteen should offer a surplus-food shelf for unsold meals.'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Links to evidence, e.g. 'because our survey found 40% of food is wasted.'",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Specific actor + method + evidence link",
          },
        },
        {
          id: "cilgp-u3-s9-p-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the action stage of a project differ from the communication stage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Action happens before research" },
              {
                id: "b",
                text: "Communication presents findings; action applies them to create real change",
              },
              { id: "c", text: "Communication has no audience" },
              { id: "d", text: "They are the same stage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project flow",
                statement: "Present vs apply.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Communication shares findings; action turns them into change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Communication presents findings; action applies them to create real change",
          },
        },
        {
          id: "cilgp-u3-s9-p-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A project plan has 8 tasks. The team has completed 6. How many tasks remain?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2, unit: "tasks" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Remaining tasks",
                statement: "Total minus completed.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 6 = 2 tasks remain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 2.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "cilgp-u3-s9-p-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What makes a GP project 'challenge-level' rather than basic? Give three features.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project quality",
                statement: "Depth across all six skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "e.g. a genuinely arguable research question, not a simple factual one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. balanced analysis of multiple perspectives with reliable sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "e.g. evidence-based evaluation reaching a judgement plus realistic action.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Arguable question, balanced analysis, judged evaluation, real action",
          },
        },
        {
          id: "cilgp-u3-s9-p-q14",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the strongest way to end a GP project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the introduction" },
              { id: "b", text: "'The end.'" },
              { id: "c", text: "A list of unanswered questions only" },
              {
                id: "d",
                text: "A realistic, evidence-linked recommendation for action",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project ending",
                statement: "Evidence-linked action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong endings convert findings into realistic recommendations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A realistic, evidence-linked recommendation for action",
          },
        },
        {
          id: "cilgp-u3-s9-p-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An environmental action plan involves planting 20 trees per week for 4 weeks. How many trees are planted in total?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 80, unit: "trees" }],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Total count",
                statement: "Rate x duration.",
              },
            ],
            steps: [
              {
                reasoning: "20 trees/week x 4 weeks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "20 x 4 = 80 trees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: 80 trees.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "80 trees",
          },
        },
        {
          id: "cilgp-u3-s9-p-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline a full GP project plan for 'should phones be banned in schools?': (a) your research question, (b) one GP skill used in the research stage, (c) how analysis and evaluation will differ, (d) your realistic final action.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Project synthesis",
                statement: "Question -> skills -> judgement -> action.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Specific arguable question, e.g. 'How does a phone ban affect student wellbeing and learning?'",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(b) Valid skill, e.g. research (surveys of students/teachers) or collaboration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(c) Valid distinction, e.g. analysis weighs student/teacher/parent perspectives; evaluation judges ban vs restrict against criteria.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(d) Realistic action, e.g. propose a trial phone-free period with a survey to measure impact.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Question, skill, analysis-evaluation distinction, realistic action",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilgp-u3-stage9-project-notes",
      title: "Stage 9 GP checkpoint — revision notes",
      summary:
        "Audience adaptation, structure, reflection, project stages, evidence-linked action.",
      sections: [
        {
          heading: "Key skills",
          body: "Adapt register to audience; structure reports clearly; reflect specifically; end projects with realistic, evidence-linked actions.",
        },
        {
          heading: "Exam tips",
          body: "Vague recommendations ('people should...') lose marks — always name who acts, how, and why the evidence supports it.",
        },
      ],
    },
  ],
};
