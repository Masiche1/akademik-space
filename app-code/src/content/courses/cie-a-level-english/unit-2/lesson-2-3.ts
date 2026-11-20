import type { Lesson } from "../../../types.ts";

export const lesson223: Lesson = {
  id: "cial-e-u2-lesson-2-3",
  code: "2-3",
  title: "Style transformation and audience adaptation",
  goal: "I CAN adapt a text's style, tone and register for different audiences and purposes.",
  standards: ["9093 Paper 1: style transformation"],
  vocabulary: [
    {
      term: "Style transformation",
      definition: "Rewriting a text in a different register, tone or form.",
    },
    {
      term: "Audience adaptation",
      definition: "Changing content and language to suit intended readers.",
    },
    {
      term: "Register shift",
      definition: "Moving between formal and informal language deliberately.",
    },
    {
      term: "Paraphrase",
      definition:
        "Restating meaning in different words while preserving sense.",
    },
    {
      term: "Tone matching",
      definition:
        "Aligning attitude (critical, humorous, formal) with purpose.",
    },
    {
      term: "Idiomatic language",
      definition: "Expressions natural to a variety or register.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u2-transformation",
      title: "Style transformation",
      skill: "Rewrite texts in different registers, tones and forms.",
      lesson: {
        sections: [
          {
            heading: "What changes, what stays",
            body: "Transformation changes surface features — vocabulary, sentence length, tone, formality — while preserving core meaning. The message stays; the packaging adapts. A news report becomes a letter; formal becomes conversational.",
          },
          {
            heading: "Register shifts",
            body: "Formal to informal: 'I am writing to enquire' → 'just checking in'. Formal to colloquial: 'approximately' → 'about', 'purchase' → 'buy'. Each shift requires changing multiple features consistently — not just swapping words.",
          },
          {
            heading: "Tone transformation",
            body: "The same content can be serious, humorous, critical or neutral. Changing tone means adjusting word connotation, sentence rhythm, punctuation and imagery — not just adding jokes or exclamation marks.",
          },
        ],
        keyFormulas: [
          {
            name: "Transformation",
            statement:
              "Meaning preserved+surface features changed=transformation.",
          },
        ],
        workedExample: {
          problem:
            "Transform: 'The meeting has been cancelled.' to informal tone.",
          solution: "'The meeting's off — sorry!' — casual, brief, apologetic.",
        },
      },
      questions: [
        {
          id: "cial-e-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What stays constant in a style transformation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The core meaning" },
              { id: "b", text: "The exact words" },
              { id: "c", text: "The formality" },
              { id: "d", text: "The tone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transformation",
                statement: "Surface features change; core meaning preserved.",
              },
            ],
            steps: [
              {
                reasoning: "Meaning is constant; style changes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Core meaning",
            commonErrors: ["Thinking transformation changes meaning."],
          },
        },
        {
          id: "cial-e-u2-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Transform to informal: 'I am writing to inform you that your application has been successful.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Register shift",
                statement:
                  "Replace formal phrases with casual equivalents consistently.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Casual equivalents used: 'just letting you know', 'you got in'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistent informal register.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "e.g. 'Just letting you know — your application went through!'",
            commonErrors: [
              "Changing only one word while keeping formal structure.",
            ],
          },
        },
        {
          id: "cial-e-u2-st-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why must register shifts be consistent across a whole text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Consistency",
                statement:
                  "Accidental mixing of registers confuses readers and undermines credibility.",
              },
            ],
            steps: [
              {
                reasoning: "Inconsistent register signals carelessness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reader loses the intended tone.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Credibility depends on sustained style.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Consistency maintains tone and credibility.",
            commonErrors: ["Partial shifts that feel accidental."],
          },
        },
        {
          id: "cial-e-u2-st-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Style transformation.",
          parts: [
            {
              label: "a",
              prompt: "What stays constant in transformation?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Transform 'I am writing to inform you...' to informal.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Why must register be consistent?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Transform 'The weather was bad' to formal and humorous.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transformation",
                statement: "Meaning+register+consistency+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Core meaning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Casual rewrite attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Consistent informal register.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Meaning preserved.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Inconsistency=carelessness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Tone/credibility lost.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Two distinct rewrites attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Tones clearly different.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both appropriate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) meaning (b) informal rewrite (c) consistency=credibility (d) two tonal versions",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Clean informal.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Consistency explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two tonal rewrites.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "One.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Inconsistent register shifts."],
          },
        },
      ],
    },
    {
      id: "cial-e-u2-audience",
      title: "Audience adaptation",
      skill:
        "Adapt content, language and structure for different intended readers.",
      lesson: {
        sections: [
          {
            heading: "Knowing your audience",
            body: "Before writing, ask: who reads this? What do they already know? What do they care about? A letter to a child differs from one to a CEO; a school newsletter differs from a scientific paper. Audience determines vocabulary, assumed knowledge, tone and length.",
          },
          {
            heading: "Adapting content",
            body: "Same topic, different emphasis: a report to management stresses costs and outcomes; a letter to parents stresses safety and reassurance. Select and frame information for the reader's priorities.",
          },
          {
            heading: "Adapting language",
            body: "Technical terms need explanation for lay audiences; formal phrasing distances; direct address engages. Match sentence length, vocabulary level and idioms to the reader's expectations and background.",
          },
        ],
        keyFormulas: [
          {
            name: "Audience",
            statement:
              "Who+what they know+what they care=adapted content and language.",
          },
        ],
        workedExample: {
          problem: "Explain 'inflation' to a 10-year-old vs an economist.",
          solution:
            "Child: 'prices go up so money buys less'. Economist: 'sustained increase in general price level reducing purchasing power'.",
        },
      },
      questions: [
        {
          id: "cial-e-u2-au-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What determines how you adapt a text for an audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who they are and what they know" },
              { id: "b", text: "The topic only" },
              { id: "c", text: "The word count" },
              { id: "d", text: "The deadline" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement:
                  "Reader's identity, knowledge and priorities shape adaptation.",
              },
            ],
            steps: [
              {
                reasoning: "Audience = who + what they know + care about.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Who they are and what they know",
            commonErrors: ["Ignoring audience entirely."],
          },
        },
        {
          id: "cial-e-u2-au-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does assumed knowledge affect writing for different audiences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Assumed knowledge",
                statement:
                  "Explain technical terms for lay readers; use them freely for experts.",
              },
            ],
            steps: [
              {
                reasoning: "Lay audiences need terms explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Experts expect technical vocabulary.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Technical terms explained for lay readers; used freely for experts.",
            commonErrors: ["Using jargon for non-expert audiences."],
          },
        },
        {
          id: "cial-e-u2-au-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can the same information be framed differently for different audiences?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Framing",
                statement:
                  "Emphasis and ordering shift with audience priorities.",
              },
            ],
            steps: [
              {
                reasoning: "Management: costs and outcomes first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Parents: safety and reassurance first.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Same facts, different emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Emphasis and ordering shift with audience priorities.",
            commonErrors: ["Identical text for all audiences."],
          },
        },
        {
          id: "cial-e-u2-au-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Audience adaptation.",
          parts: [
            {
              label: "a",
              prompt: "What determines audience adaptation?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does assumed knowledge affect writing?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How can information be framed differently?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Rewrite 'The policy will be implemented Q3' for parents.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience",
                statement: "Identity+knowledge+priorities+framing+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Who they are + what they know + care about.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Three factors.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Explain terms for lay; use for experts.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "c",
                reasoning: "Emphasis/ordering shifts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Example given.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Rewrite attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Plain language, no jargon.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Parent-appropriate.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) three factors (b) knowledge=language (c) emphasis shifts (d) parent-friendly rewrite",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Factors named.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Knowledge addressed.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Framing explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effective rewrite.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Same text regardless of audience."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u2-style-notes",
      title: "Style transformation and audience — revision notes",
      summary: "Register shifts, tone transformation and audience adaptation.",
      sections: [
        {
          heading: "Transformation",
          body: "Meaning preserved; surface features changed. Register shifts require consistent changes across vocabulary, sentence length and tone.",
        },
        {
          heading: "Audience",
          body: "Who + what they know + what they care = adaptation. Technical terms explained for lay readers; emphasis shifts with priorities.",
        },
        {
          heading: "Exam checklist",
          body: "Is meaning preserved? Is register consistent? Is the audience's knowledge level addressed? Is tone appropriate to purpose?",
        },
      ],
    },
  ],
};
