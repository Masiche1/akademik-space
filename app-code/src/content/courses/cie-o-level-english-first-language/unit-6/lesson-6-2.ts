import type { Lesson } from "../../../types.ts";

export const lesson162: Lesson = {
  id: "cie-ol-fl-lesson-6-2",
  code: "6-2",
  title: "Analysing unseen non-fiction",
  goal: "I CAN analyse unseen arguments, persuasive texts and information texts for purpose, audience and technique.",
  standards: ["1119 Reading: unseen non-fiction"],
  vocabulary: [
    {
      term: "Argument",
      definition: "A reasoned case for or against a position.",
    },
    {
      term: "Persuasive technique",
      definition: "A device used to influence the reader's view.",
    },
    {
      term: "Bias",
      definition: "A slanted or one-sided presentation of information.",
    },
    {
      term: "Purpose",
      definition:
        "What the writer wants to achieve: inform, persuade, entertain, instruct.",
    },
    {
      term: "Audience awareness",
      definition:
        "How the writer adapts content and style to intended readers.",
    },
    {
      term: "Fact vs opinion",
      definition: "Verifiable information vs personal judgement.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-unseen-argument",
      title: "Unseen arguments and persuasion",
      skill: "Analyse how unseen non-fiction texts persuade or argue.",
      lesson: {
        sections: [
          {
            heading: "Identifying purpose and audience",
            body: "Before analysing technique, establish what the text wants to do (inform, persuade, instruct, entertain) and who it addresses. A leaflet for teenagers uses different language from a report for officials. Purpose and audience explain the writer's choices.",
          },
          {
            heading: "Persuasive techniques",
            body: "Common devices: rhetorical questions, emotive language ('heartbreaking', 'heroic'), rule of three, repetition, direct address, inclusive pronouns ('we'), statistics, expert opinion, and anecdote. Name the device, quote it, and explain its effect.",
          },
          {
            heading: "Fact, opinion and bias",
            body: "Distinguish verifiable claims from value judgements. A persuasive text may mix both — statistics lend authority, emotive words carry feeling. Note where the text becomes one-sided: that's bias.",
          },
        ],
        keyFormulas: [
          {
            name: "Non-fiction analysis",
            statement: "Purpose+audience+technique+evidence=analysis.",
          },
        ],
        workedExample: {
          problem:
            "An article says 'every child deserves a safe journey to school'.",
          solution:
            "Emotive language + inclusive 'every child' + moral claim — appeals to the reader's sense of fairness.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ua-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'emotive language'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Words chosen to provoke an emotional response",
              },
              { id: "b", text: "Words that state facts" },
              { id: "c", text: "Words with technical meaning" },
              { id: "d", text: "Words repeated for effect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Emotive language",
                statement:
                  "Word choice designed to arouse feeling rather than convey neutral information.",
              },
            ],
            steps: [
              {
                reasoning: "Emotive words target emotion, not just meaning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Words chosen to provoke emotion",
            commonErrors: [
              "Confusing emotive language with repetition or alliteration.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ua-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and answer.",
          extract: {
            title: "Save Our Library",
            author: "Written for Akademik Space",
            text: "Our town library is not just a building of books — it is the last shared space where every citizen, rich or poor, young or old, can walk in and belong. Closing it would not save money; it would bankrupt our community's soul.\n\nAsk yourself: when did we last see strangers reading together in public? Now imagine that space gone forever.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive analysis",
                statement:
                  "Name the technique, quote it, explain the effect on the audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Emotive language: 'bankrupt our community's soul' exaggerates the loss.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Rhetorical question: 'when did we last see...' prompts self-reflection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inclusive 'every citizen' broadens the audience's stake.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Emotive metaphor, rhetorical question and inclusive language persuade by appealing to community values.",
            commonErrors: [
              "Identifying techniques without explaining their effect.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ua-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does a writer's audience awareness shape an unseen non-fiction text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Audience awareness",
                statement:
                  "Vocabulary, tone, assumed knowledge and appeals are chosen to suit the intended reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vocabulary level matches assumed education — technical terms for experts, plain language for general readers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tone shifts: formal for officials, conversational for peers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Appeals target audience values — statistics for sceptics, emotion for the public.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation linking audience to choices.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Audience determines vocabulary, tone and type of appeal.",
            commonErrors: [
              "Saying 'it depends on the audience' without specifics.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ua-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing an unseen argument.",
          extract: {
            title: "The Case for Four-Day Week",
            author: "Written for Akademik Space",
            text: "The evidence is in, and it is hard to ignore: companies that trialled a four-day week report the same output with happier staff and lower absenteeism. Productivity, it turns out, is not a function of hours clocked but of energy invested.\n\nCritics warn of chaos — deadlines missed, customers abandoned. Yet these are the same voices that called remote working impossible, a claim history has already refuted. The question is not whether we can afford a shorter week, but whether we can afford to ignore what the trials are telling us.",
          },
          parts: [
            {
              label: "a",
              prompt: "What is the writer's main argument?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify two persuasive techniques and their effects.",
              marks: 4,
            },
            {
              label: "c",
              prompt: "How does the writer handle the opposing view?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "What is the writer's attitude toward critics?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Argument analysis",
                statement: "Thesis+techniques+counter-argument+attitude.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A four-day week maintains output while improving wellbeing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear thesis stated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Evidence/statistics: trial results lend authority.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Reframing: 'productivity is not hours but energy'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Analogy: comparing critics to remote-work sceptics.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effects explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Acknowledges critics then dismisses via the remote-work precedent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Counter-argument handled fairly then rebutted.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Dismissive/sceptical — 'same voices', 'already refuted'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Attitude inferred from wording.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) four-day week works (b) evidence+reframe+analogy (c) acknowledged then rebutted (d) dismissive",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Thesis clear.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No thesis.",
                part: "a",
              },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Two techniques with effects.",
                part: "b",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Techniques named only.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One technique.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Counter handled.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Ignored.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Attitude identified.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No attitude.",
                part: "d",
              },
            ],
            commonErrors: [
              "Identifying techniques without linking to persuasive effect.",
            ],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-unseen-info",
      title: "Unseen information texts",
      skill: "Analyse how information texts organise and present knowledge.",
      lesson: {
        sections: [
          {
            heading: "Text organisation",
            body: "Information texts use clear structure: headings, subheadings, chronological order, compare/contrast, problem/solution, or cause/effect. Recognising the structure helps you find and evaluate information quickly.",
          },
          {
            heading: "Language of explanation",
            body: "Expository writing is typically formal and objective: technical vocabulary, passive constructions ('the water is heated'), impersonal tone, and precise connectors ('therefore', 'as a result', 'however'). Note how these choices prioritise clarity over personality.",
          },
          {
            heading: "Evaluating information",
            body: "Assess reliability: Who wrote it? What's the source? Is evidence current and verifiable? Are alternative viewpoints acknowledged? A good analysis judges how well the text informs, not just what it says.",
          },
        ],
        keyFormulas: [
          {
            name: "Info text analysis",
            statement: "Structure+language+reliability=informational quality.",
          },
        ],
        workedExample: {
          problem:
            "A text explains photosynthesis using headings and numbered steps.",
          solution:
            "Structure aids clarity; numbered steps signal sequence; formal tone keeps focus on process.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-ui-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main feature of expository (information) writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clear, objective explanation of a topic" },
              { id: "b", text: "Emotional persuasion" },
              { id: "c", text: "Fictional storytelling" },
              { id: "d", text: "Personal opinion only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Expository writing",
                statement:
                  "Objective, structured explanation of factual topics.",
              },
            ],
            steps: [
              {
                reasoning: "Expository = explain clearly and objectively.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Clear, objective explanation",
            commonErrors: ["Confusing with persuasive or narrative writing."],
          },
        },
        {
          id: "cie-ol-fl-ui-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and answer.",
          extract: {
            title: "How Rain Forms",
            author: "Written for Akademik Space",
            text: "Rain begins long before the first drop falls. The sun heats the surface of oceans and lakes, and water evaporates into the air as invisible vapour. As this vapour rises, it cools; cooled air can hold less moisture, so the vapour condenses into tiny droplets around dust particles. When millions of droplets collide and merge, they become heavy enough to fall — as rain.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Info text analysis",
                statement: "Structure+process explanation+formal connectors.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The text follows a sequential process: evaporation, condensation, precipitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Connectors like 'as', 'so' guide the causal chain.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Impersonal, objective tone ('water evaporates') keeps focus on process.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Sequential process explained objectively; connectors guide the causal chain.",
            commonErrors: [
              "Retelling the content instead of analysing how it's organised.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ui-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do headings and paragraph structure help a reader of an information text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Text structure",
                statement:
                  "Headings and paragraphs organise information so readers can navigate and locate key points.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Headings signal topics, letting readers predict content.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Each paragraph develops one idea, aiding comprehension.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Structure supports skimming and scanning for specific facts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of navigational benefit.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Headings predict content and paragraphs organise ideas for easy navigation.",
            commonErrors: [
              "Saying 'it looks neat' instead of explaining function.",
            ],
          },
        },
        {
          id: "cie-ol-fl-ui-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing an unseen information text.",
          extract: {
            title: "The Deep Sea",
            author: "Written for Akademik Space",
            text: "Below two hundred metres, sunlight disappears entirely. Yet life persists — adapted to conditions that would kill surface creatures. Anglerfish generate their own light through a chemical reaction in a fleshy lure; giant tube worms derive nutrition from bacteria living inside them, needing no mouth at all.\n\nThese discoveries matter beyond curiosity. Deep-sea organisms produce compounds used in medicines and industry. The lesson for scientists is clear: ecosystems we barely understand may hold solutions we desperately need.",
          },
          parts: [
            {
              label: "a",
              prompt: "State the main idea of the first paragraph.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does the writer organise the information?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Explain the function of the examples given.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "What is the writer's purpose in the second paragraph?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Info analysis",
                statement: "Main idea+organisation+examples+purpose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Life persists in the deep sea through remarkable adaptations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate summary.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Problem/solution or general-to-specific: harsh conditions then adaptations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples (anglerfish, tube worms) support the general claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Organisation explained clearly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Examples make abstract adaptations concrete.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "They demonstrate the range of survival strategies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Function of exemplification explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "To argue the practical importance of studying deep-sea life.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Purpose identified beyond mere information.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) life adapts to deep sea (b) general-to-specific+examples (c) make concrete (d) argue importance",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Main idea.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Wrong/none.",
                part: "a",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Organisation analysed.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Example function explained.",
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
                level: "Level 2",
                marks: "1-2",
                descriptor: "Purpose identified.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: [
              "Summarising without analysing structure or purpose.",
            ],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-unseen-nonfiction-notes",
      title: "Analysing unseen non-fiction — revision notes",
      summary:
        "Purpose, audience, persuasive techniques, and structure of information texts.",
      sections: [
        {
          heading: "Analysis order",
          body: "1) Purpose and audience first. 2) Then technique: name device, quote it, explain effect. 3) Finally evaluate: bias, reliability, organisation.",
        },
        {
          heading: "Persuasive devices",
          body: "Rhetorical questions, emotive language, rule of three, repetition, direct address, inclusive 'we', statistics, expert opinion, anecdote.",
        },
        {
          heading: "Information texts",
          body: "Expository writing: formal, objective, precise. Structures: headings, sequence, compare/contrast, problem/solution. Examples make abstract points concrete.",
        },
        {
          heading: "Exam checklist",
          body: "Did I identify purpose/audience before technique? Did I quote evidence for every claim? Did I distinguish fact from opinion?",
        },
      ],
    },
  ],
};
