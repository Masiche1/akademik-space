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
              { id: "a", text: "The exact words" },
              { id: "b", text: "The tone" },
              { id: "c", text: "The formality" },
              { id: "d", text: "The core meaning" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Core meaning",
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
        {
          id: "cial-e-u2-st-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which feature should remain constant in a style transformation?",
          response: { type: "mcq", choices: [ { id: "a", text: "The punctuation" }, { id: "b", text: "Every original word" }, { id: "c", text: "The core meaning" }, { id: "d", text: "The sentence length" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Style transformation", statement: "Surface features change; core meaning stays." }], steps: [{ reasoning: "Meaning is preserved while packaging changes.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Core meaning", commonErrors: ["Changing meaning while changing style."] },
        },
        {
          id: "cial-e-u2-st-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which change is a register shift rather than a change of meaning?",
          response: { type: "mcq", choices: [ { id: "a", text: "'He left' becomes 'She arrived'" }, { id: "b", text: "'Purchase' becomes 'buy'" }, { id: "c", text: "'The train was late' becomes 'The train was early'" }, { id: "d", text: "'Rain' becomes 'Snow'" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Register shift", statement: "Formality changes while sense remains." }], steps: [{ reasoning: "Purchase/buy changes formality, not meaning.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** 'Purchase' becomes 'buy'", commonErrors: ["Changing factual content during transformation."] },
        },
        {
          id: "cial-e-u2-st-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why must register shifts change multiple features consistently?",
          response: { type: "mcq", choices: [ { id: "a", text: "Mixed features create an accidental, inconsistent voice" }, { id: "b", text: "One word change is always enough" }, { id: "c", text: "Consistency makes the text longer" }, { id: "d", text: "It removes the need for meaning" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Consistent register", statement: "Vocabulary, syntax and tone should move together." }], steps: [{ reasoning: "Partial shifts feel careless and break credibility.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Mixed features create inconsistency", commonErrors: ["Swapping single words without adjusting tone."] },
        },
        {
          id: "cial-e-u2-st-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does changing tone require beyond adding jokes?",
          response: { type: "mcq", choices: [ { id: "a", text: "Removing all description" }, { id: "b", text: "Only exclamation marks" }, { id: "c", text: "Changing the topic" }, { id: "d", text: "Adjusting connotation, rhythm, punctuation and imagery" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Tone transformation", statement: "Tone is built through multiple language choices." }], steps: [{ reasoning: "Tone shifts require coordinated changes in diction and rhythm.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Connotation, rhythm, punctuation and imagery", commonErrors: ["Using surface jokes instead of tonal control."] },
        },
        {
          id: "cial-e-u2-st-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is paraphrase?",
          response: { type: "mcq", choices: [ { id: "a", text: "Changing the meaning completely" }, { id: "b", text: "Copying a text exactly" }, { id: "c", text: "Restating meaning in different words" }, { id: "d", text: "Summarising only the ending" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Paraphrase", statement: "Different wording with preserved sense." }], steps: [{ reasoning: "Paraphrase changes expression, not meaning.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Restating meaning in different words", commonErrors: ["Drifting into a different meaning."] },
        },
        {
          id: "cial-e-u2-st-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many surface features are named as changing in transformation: vocabulary, sentence length, tone and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Surface features", statement: "Vocabulary, sentence length, tone and formality." }], steps: [{ reasoning: "Four surface features are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Changing meaning instead of surface features."] },
        },
        {
          id: "cial-e-u2-st-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many major dimensions can a style transformation change: register, tone and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Transformation dimensions", statement: "Register, tone and form." }], steps: [{ reasoning: "Three dimensions are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Treating tone and register as identical."] },
        },
        {
          id: "cial-e-u2-st-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'The meeting has been cancelled' transformed informally, how many key facts must remain: meeting and cancellation?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "skill", name: "Preserved meaning", statement: "Core facts stay while style changes." }], steps: [{ reasoning: "Meeting plus cancellation are the preserved facts.", marks: 1, markCode: "AO2" }], finalAnswer: "2", commonErrors: ["Adding new facts during transformation."] },
        },
        {
          id: "cial-e-u2-st-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many example pairs show formal-to-colloquial shifts: approximately/about and purchase/buy?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Colloquial shifts", statement: "Formal terms become everyday equivalents." }], steps: [{ reasoning: "Two example shifts are provided.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Confusing colloquial with slang only."] },
        },
        {
          id: "cial-e-u2-st-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what must stay constant and what may change in a transformation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Transformation boundaries", statement: "Core meaning remains; style, register and form adapt." }], steps: [{ reasoning: "A strong answer distinguishes preserved sense from changed surface features.", marks: 2, markCode: "AO2" }], finalAnswer: "Core meaning stays constant while vocabulary, tone, formality and form may change.", commonErrors: ["Changing facts while changing style."] },
        },
        {
          id: "cial-e-u2-st-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Rewrite 'I am writing to enquire about the status of my application' in informal tone.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Formal to informal", statement: "Informal register shortens sentences and uses everyday wording." }], steps: [{ reasoning: "A strong rewrite preserves the enquiry but uses casual phrasing, e.g. 'Just checking on my application.'", marks: 2, markCode: "AO2" }], finalAnswer: "Example: 'Just checking on the status of my application.'", commonErrors: ["Changing the purpose or omitting the enquiry."] },
        },
        {
          id: "cial-e-u2-st-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is tone transformation more than adding jokes?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Tone control", statement: "Tone emerges from connotation, rhythm and imagery." }], steps: [{ reasoning: "A strong answer explains that humour, seriousness or criticism require coordinated language choices.", marks: 2, markCode: "AO3" }], finalAnswer: "Tone is created by consistent connotation, rhythm and imagery; jokes alone do not change the attitude of the whole text.", commonErrors: ["Treating tone as decoration."] },
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
              { id: "a", text: "The topic only" },
              { id: "b", text: "The word count" },
              { id: "c", text: "Who they are and what they know" },
              { id: "d", text: "The deadline" },
            ],
            correctChoiceId: "c",
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
            finalAnswer: "**(c)** Who they are and what they know",
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
        {
          id: "cial-e-u2-au-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question is most important before adapting a text?",
          response: { type: "mcq", choices: [ { id: "a", text: "How many pages are available?" }, { id: "b", text: "Who will read this and what do they know?" }, { id: "c", text: "How many commas can I use?" }, { id: "d", text: "What font should be used?" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Audience analysis", statement: "Reader identity and knowledge shape adaptation." }], steps: [{ reasoning: "Audience questions determine vocabulary, tone and emphasis.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Who reads and what they know", commonErrors: ["Starting to write before defining audience."] },
        },
        {
          id: "cial-e-u2-au-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How should technical terms be handled for a lay audience?",
          response: { type: "mcq", choices: [ { id: "a", text: "Put in footnotes only" }, { id: "b", text: "Used without explanation" }, { id: "c", text: "Explained or replaced with everyday equivalents" }, { id: "d", text: "Removed with the information" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Technical language", statement: "Lay readers need accessible explanations." }], steps: [{ reasoning: "Unexplained jargon excludes non-expert readers.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Explained or replaced", commonErrors: ["Assuming the reader shares specialist knowledge."] },
        },
        {
          id: "cial-e-u2-au-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why would a report to management stress costs while a letter to parents stresses safety?",
          response: { type: "mcq", choices: [ { id: "a", text: "Because parents dislike costs" }, { id: "b", text: "Because the facts change" }, { id: "c", text: "Because each audience has different priorities" }, { id: "d", text: "Because reports cannot mention safety" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Audience priorities", statement: "Emphasis follows what the reader cares about." }], steps: [{ reasoning: "Same content is framed by audience priorities.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Different audience priorities", commonErrors: ["Giving every audience identical emphasis."] },
        },
        {
          id: "cial-e-u2-au-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the risk of using specialist jargon for a general audience?",
          response: { type: "mcq", choices: [ { id: "a", text: "The text becomes more precise" }, { id: "b", text: "The reader is excluded or confused" }, { id: "c", text: "The sentences become shorter" }, { id: "d", text: "The purpose disappears" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Jargon risk", statement: "Unshared terminology blocks understanding." }], steps: [{ reasoning: "Jargon assumes knowledge the audience may lack.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Reader is excluded or confused", commonErrors: ["Using jargon to sound intelligent."] },
        },
        {
          id: "cial-e-u2-au-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which adaptation best suits a school newsletter?",
          response: { type: "mcq", choices: [ { id: "a", text: "Clear, friendly language with relevant emphasis" }, { id: "b", text: "Only statistics with no context" }, { id: "c", text: "A formal legal report" }, { id: "d", text: "Dense technical terminology" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Audience fit", statement: "Language and emphasis should match readers' expectations." }], steps: [{ reasoning: "A newsletter needs accessible and engaging language.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Clear, friendly, relevant language", commonErrors: ["Choosing a format unrelated to the audience."] },
        },
        {
          id: "cial-e-u2-au-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many core audience questions are recommended: who reads, what they know and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Audience questions", statement: "Who, what they know and what they care about." }], steps: [{ reasoning: "Three audience questions are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Ignoring what the audience cares about."] },
        },
        {
          id: "cial-e-u2-au-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many broad areas should be adapted for an audience: content, language and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Audience adaptation", statement: "Content, language and structure." }], steps: [{ reasoning: "Three adaptation areas are identified.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Changing only vocabulary."] },
        },
        {
          id: "cial-e-u2-au-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many contrasting audience pairs are exemplified: child/economist, management/parents and newsletter/scientific?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Audience range", statement: "Child/economist, management/parents and newsletter/scientific pairs." }], steps: [{ reasoning: "Three contrasting audience pairs are used.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Assuming one style fits all readers."] },
        },
        {
          id: "cial-e-u2-au-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In 'who + what they know + what they care', how many components concern the reader rather than the topic?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Audience formula", statement: "All three components describe the reader." }], steps: [{ reasoning: "Who, knowledge and care are all reader-centred.", marks: 1, markCode: "AO2" }], finalAnswer: "3", commonErrors: ["Treating the formula as topic-centred."] },
        },
        {
          id: "cial-e-u2-au-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how audience affects both content and language.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Audience adaptation", statement: "Reader priorities determine emphasis; knowledge determines accessibility." }], steps: [{ reasoning: "A strong answer links selected facts to audience priorities and vocabulary choices to assumed knowledge.", marks: 2, markCode: "AO2" }], finalAnswer: "Audience determines which facts are emphasised and how technical or accessible the language must be.", commonErrors: ["Changing only word choice while ignoring content selection."] },
        },
        {
          id: "cial-e-u2-au-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain 'inflation' to a 10-year-old and to an economist.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Register by audience", statement: "Same concept needs different vocabulary and abstraction." }], steps: [{ reasoning: "A strong answer gives a simple everyday explanation for the child and a precise technical explanation for the economist.", marks: 2, markCode: "AO2" }], finalAnswer: "Child: prices rise so money buys less. Economist: a sustained rise in the general price level reducing purchasing power.", commonErrors: ["Using the same explanation for both audiences."] },
        },
        {
          id: "cial-e-u2-au-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why one text cannot suit every audience.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Audience specificity", statement: "Different readers need different knowledge, priorities and tone." }], steps: [{ reasoning: "A strong answer shows that fixed assumptions exclude some readers or bore others.", marks: 2, markCode: "AO3" }], finalAnswer: "A single text cannot match all readers because knowledge, interests and expectations differ; adaptation is necessary for communication.", commonErrors: ["Assuming clarity alone guarantees universal suitability."] },
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
