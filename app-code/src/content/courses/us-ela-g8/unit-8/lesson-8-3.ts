import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const MEDIA: TextExtract = {
  title: "Excerpt: Analyzing Media Message",
  author: "Written for Akademik Space",
  text: "A public service announcement shows a student staring at a phone screen in a dark room. The caption reads: 'Your future is scrolling by.' Below: 'Put the phone down. Pick up a book. Your education matters more than your feed.' The ad uses a single image, minimal text, and a direct command to create urgency.",
};

const PURPOSE: TextExtract = {
  title: "Author's Purpose Analysis",
  author: "Written for Akademik Space",
  text: "The editorial argues that schools should extend lunch periods. The author cites research showing students who eat lunch without rushing score higher on afternoon tests. The tone is persuasive but measured — not angry, just factual. The intended audience is school administrators who control scheduling.",
};

export const lesson83: Lesson = {
  id: "ela8-u8-lesson-8-3",
  code: "8-3",
  title: "Media Literacy and Author's Purpose",
  goal: "I CAN analyze media messages, identify author's purpose and audience, and evaluate how techniques persuade.",
  standards: ["RI.8.7", "RI.8.8", "RL.8.6", "RL.8.9"],
  vocabulary: [
    {
      term: "Author's purpose",
      definition:
        "What the author wants to achieve — inform, persuade, entertain.",
    },
    { term: "Audience", definition: "Who the author is writing for." },
    {
      term: "Persuasive technique",
      definition: "Methods used to convince — evidence, emotion, logic.",
    },
    {
      term: "Media literacy",
      definition: "Ability to analyze and evaluate media messages.",
    },
    {
      term: "Bias",
      definition: "Prejudice or unfair emphasis in presentation.",
    },
    {
      term: "Target audience",
      definition: "Specific group the message is designed for.",
    },
  ],
  concepts: [
    {
      id: "ela8-u8-purpose",
      title: "Author's purpose and audience",
      skill:
        "Identify what the author wants to accomplish and who they're writing for.",
      lesson: {
        sections: [
          {
            heading: "Purpose identification",
            body: "Authors write to **inform** (explain facts), **persuade** (change minds), **entertain** (amuse), or **express** (share feelings). The editorial 'schools should extend lunch' aims to **persuade** — uses evidence (research showing higher scores) and targets administrators. The PSA 'your future is scrolling by' aims to **persuade** too — uses urgency and direct command. Purpose shapes every choice: word selection, evidence type, tone.",
          },
          {
            heading: "Audience analysis",
            body: "Audience determines approach: administrators need data and policy implications; students need relatable examples and emotional appeal; general public needs clear explanation. The editorial targets **school administrators** — uses research citations, policy language, measured tone. The PSA targets **students** — uses phone imagery, slang ('scrolling'), direct address. Ask: who is this for? How does the author address them? What do they already know?",
          },
        ],
        keyFormulas: [
          {
            name: "Purpose shapes choices",
            statement:
              "Inform/persuade/entertain determines word choice and evidence.",
          },
          {
            name: "Audience = approach",
            statement: "Who they write for determines how they write.",
          },
          {
            name: "Evidence type",
            statement:
              "Data for officials; emotion for students; clarity for public.",
          },
        ],
        workedExample: {
          problem: "What is the purpose and audience of the editorial?",
          solution:
            "Purpose: persuade schools to extend lunch periods. Audience: school administrators — uses research data, policy implications, measured professional tone.",
        },
      },
      questions: [
        {
          id: "ela8-u8-purpose-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PURPOSE,
          stem: "What is the author's primary purpose in the editorial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To inform about lunch research" },
              { id: "b", text: "To entertain readers" },
              { id: "c", text: "To criticize students" },
              { id: "d", text: "To persuade schools to extend lunch" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Persuasive purpose",
                statement: "Change minds or actions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Editorial argues for extending lunch — aims to persuade administrators.",
                evidence: "schools should extend lunch periods",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. To persuade schools to extend lunch.",
            commonErrors: [
              "Choosing (a) — it informs but purpose is persuasion.",
            ],
          },
        },
        {
          id: "ela8-u8-purpose-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PURPOSE,
          stem: "Identify the target audience and explain how the author's tone suits them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience analysis",
                statement: "Who they're writing for.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Audience: school administrators who control scheduling.",
                evidence: "school administrators who control scheduling",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone: persuasive but measured — uses research data, not emotional appeals.",
                evidence: "persuasive but measured",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Suitability: administrators need evidence-based arguments, not emotional appeals.",
                evidence: "cites research showing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Audience: school administrators. Tone: measured, evidence-based — suits officials who need data for decisions.",
            commonErrors: [
              "Identifying audience without explaining tone match.",
            ],
          },
        },
        {
          id: "ela8-u8-purpose-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PURPOSE,
          stem: "Analyze how the author uses evidence and tone to persuade the target audience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasive analysis",
                statement: "How techniques convince.",
              },
              {
                kind: "skill",
                name: "Audience-aware",
                statement: "Evidence matches audience needs.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Evidence: cites research showing students score higher when not rushing lunch — data appeals to administrators.",
                evidence: "cites research showing students",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone: measured, not angry — 'persuasive but measured' — professional tone suits policy audience.",
                evidence: "not angry, just factual",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Framing: 'extend lunch periods' — practical policy solution, not just complaint.",
                evidence: "extend lunch periods",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Author uses research evidence (score data) appealing to administrators' need for data-driven decisions, measured professional tone suits policy audience, and practical framing ('extend lunch') offers actionable solution.",
            commonErrors: [
              "Identifying techniques without explaining audience fit.",
            ],
          },
        },
        {
          id: "ela8-u8-purpose-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            { label: "a", prompt: "What is the PSA's purpose?", marks: 2 },
            { label: "b", prompt: "Who is the target audience?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media purpose",
                statement: "What message wants to achieve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Persuade students to put down phones and focus on education.",
                evidence: "Put the phone down",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Students — uses phone imagery, slang ('scrolling'), direct address.",
                evidence: "Your future is scrolling by",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Persuade students to focus on education over phones. (b) Students — uses relatable imagery and direct address.",
            commonErrors: ["Saying 'inform' — it aims to change behavior."],
          },
        },
      ],
    },
    {
      id: "ela8-u8-media",
      title: "Media message analysis",
      skill:
        "Analyze how media messages use images, text, and techniques to persuade or inform.",
      lesson: {
        sections: [
          {
            heading: "Media elements",
            body: "Media messages combine **visual** (images, colors, layout), **text** (headlines, captions), and **technique** (urgency, emotion, repetition). The PSA uses single dark image (student + phone in dark room) — visual isolation creates loneliness. Caption 'your future is scrolling by' — metaphor equates phone use with wasting time. 'Put the phone down' — direct command creates urgency. Every element serves purpose.",
          },
          {
            heading: "Critical media literacy",
            body: "Ask: Who created this? What's their purpose? What techniques do they use? What's omitted? Who benefits? The PSA benefits schools/parents (less phone distraction); omits that phones can be educational tools. Media literacy means questioning messages, not just receiving them — recognizing persuasion techniques and evaluating claims.",
          },
        ],
        keyFormulas: [
          {
            name: "Media = visual + text + technique",
            statement: "All elements work together to persuade.",
          },
          {
            name: "Question the message",
            statement: "Who benefits? What's omitted? What's the technique?",
          },
          {
            name: "Every choice matters",
            statement: "Image, words, layout all serve purpose.",
          },
        ],
        workedExample: {
          problem: "How does the PSA use visual and text elements together?",
          solution:
            "Dark image of student alone with phone creates visual isolation/loneliness; caption 'future is scrolling by' adds metaphorical warning; 'put the phone down' gives direct command — visual + text + command = persuasive message.",
        },
      },
      questions: [
        {
          id: "ela8-u8-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What visual element creates the PSA's mood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple people" },
              { id: "b", text: "Bright colors" },
              { id: "c", text: "Student alone in dark room" },
              { id: "d", text: "Outdoor setting" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Visual mood",
                statement: "Image creates feeling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dark room + alone = isolation, loneliness — supports anti-phone message.",
                evidence: "dark room",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Student alone in dark room — creates isolation.",
            commonErrors: [
              "Missing that darkness + solitude = emotional manipulation.",
            ],
          },
        },
        {
          id: "ela8-u8-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Analyze how 'Your future is scrolling by' uses metaphor to persuade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Metaphor analysis",
                statement: "Comparisons persuade.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Scrolling by' equates phone use with time slipping away — future wasted.",
                evidence: "Your future is scrolling by",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Metaphor makes abstract (wasted time) concrete (scrolling).",
                evidence: "scrolling by",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Creates urgency — if future is scrolling away, act now.",
                evidence: "scrolling",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Scrolling by' equates phone use with wasted time — makes abstract concrete, creates urgency to act.",
            commonErrors: [
              "Identifying metaphor without explaining persuasive effect.",
            ],
          },
        },
        {
          id: "ela8-u8-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Evaluate the PSA's effectiveness. What techniques does it use? What's omitted? Who benefits?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media evaluation",
                statement: "Assess message effectiveness.",
              },
              {
                kind: "skill",
                name: "Critical thinking",
                statement: "Question omissions and beneficiaries.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Techniques: visual isolation (dark room), metaphor ('scrolling by'), direct command ('put down'), minimal text for impact.",
                evidence: "Put the phone down",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omitted: phones can be educational tools; not all phone use is wasteful.",
                evidence: "Your education matters more",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Beneficiaries: schools/parents who want less distraction; message serves their interests.",
                evidence: "Pick up a book",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Effective techniques: visual isolation, metaphor, direct command, minimal text. Omitted: phones can be educational. Beneficiaries: schools/parents wanting less distraction.",
            commonErrors: [
              "Evaluating without questioning omissions/beneficiaries.",
            ],
          },
        },
        {
          id: "ela8-u8-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "Name two persuasive techniques used.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What question should a media-literate viewer ask?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Technique identification",
                statement: "Recognize persuasion methods.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Metaphor ('scrolling by') and direct command ('put the phone down').",
                evidence: "persuasive techniques",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Who benefits from this message?' or 'What's omitted?'",
                evidence: "media-literate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Metaphor and direct command. (b) 'Who benefits?' or 'What's omitted?'",
            commonErrors: ["Naming techniques without critical question."],
          },
        },
      ],
    },
    {
      id: "ela8-u8-bias",
      title: "Bias and point of view in texts",
      skill:
        "Identify bias, point of view, and how they shape reader understanding.",
      lesson: {
        sections: [
          {
            heading: "Detecting bias",
            body: "Bias = unfair emphasis or prejudice. Look for: loaded language ('radical' vs 'progressive'), selective evidence (only one side), omission (what's missing), framing (how issue is presented). 'The school should extend lunch' — if article only cites supporting research and ignores costs, that's bias. Bias isn't always intentional — authors have perspectives that shape what they include.",
          },
          {
            heading: "Point of view analysis",
            body: "Every text has a perspective — author's position shapes content. First-person = personal stake; editorial = opinion; news = claims objectivity but still selects stories. Ask: what's the author's stance? What would someone with opposite view say? Comparing sources reveals bias — read multiple perspectives to understand full picture.",
          },
        ],
        keyFormulas: [
          {
            name: "Bias indicators",
            statement:
              "Loaded language, selective evidence, omission, framing.",
          },
          {
            name: "POV shapes content",
            statement: "What author includes/excludes reflects perspective.",
          },
          {
            name: "Compare sources",
            statement: "Multiple perspectives reveal bias.",
          },
        ],
        workedExample: {
          problem: "How might the lunch editorial be biased?",
          solution:
            "If it only cites research supporting longer lunch and ignores costs/scheduling challenges, it presents one side. Bias = selective evidence favoring author's position.",
        },
      },
      questions: [
        {
          id: "ela8-u8-bias-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PURPOSE,
          stem: "What indicates potential bias in the editorial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's about lunch" },
              { id: "b", text: "It cites research" },
              { id: "c", text: "It's well-written" },
              { id: "d", text: "It only presents supporting evidence" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Unfair emphasis or selective evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Citing only supporting research without counterarguments = selective evidence.",
                evidence: "cites research showing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Only presents supporting evidence — selective.",
            commonErrors: [
              "Thinking citing research = unbiased — could still be selective.",
            ],
          },
        },
        {
          id: "ela8-u8-bias-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PURPOSE,
          stem: "Identify two indicators of bias and explain how they work.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bias identification",
                statement: "Recognize unfair presentation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selective evidence: only cites research supporting longer lunch, ignores costs.",
                evidence: "cites research showing students",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Framing: 'extend lunch periods' presents as obviously good without acknowledging trade-offs.",
                evidence: "extend lunch periods",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omission: doesn't mention scheduling challenges or budget constraints.",
                evidence: "persuasive but measured",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Selective evidence (only supporting research), framing (presents as obviously good), omission (ignores costs/challenges).",
            commonErrors: ["Identifying without explaining mechanism."],
          },
        },
        {
          id: "ela8-u8-bias-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PURPOSE,
          stem: "Write a counter-argument paragraph that identifies the editorial's bias and presents the opposing view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Counter-argument",
                statement: "Present opposing view fairly.",
              },
              {
                kind: "skill",
                name: "Bias recognition",
                statement: "Identify what's missing.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Identify bias: editorial only cites supporting research, ignores scheduling costs and budget constraints.",
                evidence: "cites research showing students",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Present opposing view: longer lunch requires schedule changes, budget for supervision, may reduce instructional time.",
                evidence: "extend lunch periods",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Fair presentation: acknowledge both sides before reaching conclusion.",
                evidence: "persuasive but measured",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'While research shows benefits of longer lunch, the editorial ignores practical challenges: schedule changes, supervision costs, reduced instructional time. Schools must balance nutrition benefits against logistical constraints.'",
            commonErrors: [
              "Attacking author instead of presenting opposing view.",
            ],
          },
        },
        {
          id: "ela8-u8-bias-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: PURPOSE,
          parts: [
            { label: "a", prompt: "What is 'selective evidence'?", marks: 2 },
            {
              label: "b",
              prompt: "How could you check for bias in any text?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bias detection",
                statement: "Question what you read.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Presenting only evidence supporting one side while ignoring counterarguments.",
                evidence: "selective evidence",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Check for loaded language, omitted counterarguments, and compare with other sources.",
                evidence: "check for bias",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Only evidence supporting one side. (b) Check loaded language, omissions, compare sources.",
            commonErrors: [
              "Thinking bias is always intentional — can be unintentional.",
            ],
          },
        },
      ],
    },
  ],
};
