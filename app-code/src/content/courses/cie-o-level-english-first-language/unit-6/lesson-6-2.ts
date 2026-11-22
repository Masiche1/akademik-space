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
              { id: "a", text: "Words repeated for effect" },
              { id: "b", text: "Words that state facts" },
              { id: "c", text: "Words with technical meaning" },
              {
                id: "d",
                text: "Words chosen to provoke an emotional response",
              },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-fl-ua-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are 'inclusive pronouns' in persuasive writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words like 'we' and 'us' that include the reader" },
              { id: "b", text: "Words that describe objects" },
              { id: "c", text: "Names of famous people" },
              { id: "d", text: "Numbers and statistics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inclusive pronouns",
                statement:
                  "'We'/'us' make the reader feel part of the writer's side.",
              },
            ],
            steps: [
              {
                reasoning: "'We' includes the audience.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Words like 'we' and 'us' that include the reader",
            commonErrors: ["Thinking pronouns are just grammar, not persuasion."],
          },
        },
        {
          id: "cie-ol-fl-ua-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which persuasive technique does the leaflet mainly use?",
          extract: {
            title: "Save the Playground",
            author: "Written for Akademik Space",
            text: "Every child deserves a safe place to play. Last year, the council cut playground funding by half — and now our only green space is threatened with development. We cannot stand by while they build over our children's futures. Sign the petition today, before it's too late.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Statistics only" },
              { id: "b", text: "Emotive language and direct address" },
              { id: "c", text: "Neutral reporting" },
              { id: "d", text: "Expert quotations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Emotive language",
                statement:
                  "Words like 'deserves' and 'threatened' provoke feeling; 'sign' is direct address.",
              },
            ],
            steps: [
              {
                reasoning: "Emotive words plus 'Sign the petition' direct the reader.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Emotive language and direct address",
            commonErrors: ["Missing the direct command to sign."],
          },
        },
        {
          id: "cie-ol-fl-ua-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the effect of the emotive language in the leaflet.",
          extract: {
            title: "Save the Playground",
            author: "Written for Akademik Space",
            text: "Every child deserves a safe place to play. Last year, the council cut playground funding by half — and now our only green space is threatened with development. We cannot stand by while they build over our children's futures. Sign the petition today, before it's too late.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Emotive language",
                statement:
                  "Feeling-laden words bypass reason and appeal to sympathy or fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Deserves', 'threatened', 'children's futures' appeal to sympathy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This pressures the reader to act emotionally.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Emotive words provoke sympathy and urgency, pushing the reader to sign.",
            commonErrors: ["Identifying words without explaining their emotional pull."],
          },
        },
        {
          id: "cie-ol-fl-ua-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What effect does the rhetorical question create in the article?",
          extract: {
            title: "Cycling to School",
            author: "Written for Akademik Space",
            text: "Nine out of ten parents say they would let their children cycle to school if the roads were safer. Yet many still drive them, caught between fear and habit. Safer cycle lanes aren't a luxury — they're a necessity for healthier, happier children.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rhetorical devices",
                statement:
                  "The contrast 'aren't a luxury — they're a necessity' functions like a rhetorical challenge.",
              },
            ],
            steps: [
              {
                reasoning: "The contrast challenges the reader's assumption.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It forces the reader to reconsider 'luxury' vs 'necessity'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This strengthens the persuasive case for cycle lanes.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The contrast challenges assumptions and strengthens the argument for safer lanes.",
            commonErrors: ["Calling it a question when it is a contrast — still persuasive."],
          },
        },
        {
          id: "cie-ol-fl-ua-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the poster mix fact and opinion? Is it biased? Justify.",
          extract: {
            title: "Library Campaign",
            author: "Written for Akademik Space",
            text: "Did you know our library lends more books per reader than any in the region? It's free, it's quiet, and it's yours. This Saturday, join the summer reading challenge — bring a friend, pick a book, and discover what you've been missing.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fact vs opinion",
                statement:
                  "Statistics are verifiable; 'discover what you've been missing' is opinionated appeal.",
              },
            ],
            steps: [
              {
                reasoning: "'Lends more books per reader' is a checkable fact.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'It's yours', 'what you've been missing' are value judgements.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The poster is one-sided by design — it promotes an event.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Justified assessment of bias.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It mixes a statistic with promotional opinion; one-sided because it aims to persuade, not inform neutrally.",
            commonErrors: ["Calling everything 'fact' or everything 'opinion'."],
          },
        },
        {
          id: "cie-ol-fl-ua-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'bias' in a persuasive text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A neutral report" },
              { id: "b", text: "A one-sided presentation favouring one viewpoint" },
              { id: "c", text: "A list of statistics" },
              { id: "d", text: "A balanced argument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement:
                  "One-sided presentation that favours a particular viewpoint.",
              },
            ],
            steps: [
              {
                reasoning: "Bias = one-sided favouring.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A one-sided presentation favouring one viewpoint",
            commonErrors: ["Confusing bias with balance."],
          },
        },
        {
          id: "cie-ol-fl-ua-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which phrase best illustrates the 'rule of three'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The meeting is on Tuesday'" },
              { id: "b", text: "'We want changes'" },
              { id: "c", text: "'We want fair pay, safe conditions and dignity at work'" },
              { id: "d", text: "'Please read the document carefully'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Rule of three",
                statement:
                  "Three parallel items create rhythm and memorability.",
              },
            ],
            steps: [
              {
                reasoning: "Three parallel demands = rule of three.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** 'We want fair pay, safe conditions and dignity at work'",
            commonErrors: ["Choosing a single item or unrelated sentence."],
          },
        },
        {
          id: "cie-ol-fl-ua-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two persuasive techniques used in the cycling article.",
          extract: {
            title: "Cycling to School",
            author: "Written for Akademik Space",
            text: "Nine out of ten parents say they would let their children cycle to school if the roads were safer. Yet many still drive them, caught between fear and habit. Safer cycle lanes aren't a luxury — they're a necessity for healthier, happier children.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Persuasive devices",
                statement:
                  "Statistics, emotive language ('healthier, happier') and contrast are used.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of statistics, emotive language, contrast, inclusive 'our'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both identified from the text.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Statistics ('nine out of ten') and emotive language ('healthier, happier').",
            commonErrors: ["Naming techniques not present in the extract."],
          },
        },
        {
          id: "cie-ol-fl-ua-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How does direct address persuade a reader?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Direct address",
                statement:
                  "Commands and 'you'/'we' make the reader feel personally involved and responsible.",
              },
            ],
            steps: [
              {
                reasoning: "'Sign', 'join', 'you' make the reader the actor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Personal involvement increases pressure to comply.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of effect.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Direct address makes the reader feel personally responsible, increasing persuasive pressure.",
            commonErrors: ["Defining direct address without explaining its effect."],
          },
        },
        {
          id: "cie-ol-fl-ua-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Campaign Leaflet",
          extract: {
            title: "Campaign Leaflet",
            author: "Written for Akademik Space",
            text: "Don't let them take our library. Every week, thousands of residents borrow books, use the computers, and attend free events. The council wants to close it and sell the building. We can't let that happen — not while our children still need a safe place to learn and our elderly still need warmth and company. Join us at the public meeting on Thursday. Together, we can save it.",
          },
          parts: [
            { label: "a", prompt: "State the leaflet's purpose and audience.", marks: 2 },
            { label: "b", prompt: "Identify two persuasive techniques used.", marks: 2 },
            { label: "c", prompt: "Explain the effect of 'Together, we can save it'.", marks: 2 },
            { label: "d", prompt: "Is the leaflet biased? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasive analysis",
                statement: "Purpose+audience+technique+effect+bias.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Purpose: persuade residents to oppose closure/join meeting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Audience: local residents who use the library.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "First technique, e.g. emotive language ('warmth and company').",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Second technique, e.g. inclusive 'we' or direct address.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Inclusive 'we' unites writer and reader against 'them'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Creates shared purpose and momentum.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Yes — it presents only the campaign's side.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified by one-sided emotional appeal.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) persuade residents (b) two techniques (c) unity+shared purpose (d) yes, one-sided",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Purpose+audience.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Bias judged.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Identifying techniques without linking to persuasive effect."],
          },
        },
        {
          id: "cie-ol-fl-ua-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analysing a persuasive text.",
          extract: {
            title: "An Open Letter",
            author: "Written for Akademik Space",
            text: "Dear Councillor, I am writing because our town's youth club faces closure. Three hundred young people use it every week. It is not just a building — it is where they learn to swim, play music and feel they belong. Cutting it would save money, yes, but at what cost to a generation? I urge you to reconsider. Yours sincerely, A Concerned Resident.",
          },
          parts: [
            { label: "a", prompt: "State the writer's purpose.", marks: 1 },
            { label: "b", prompt: "Identify two persuasive techniques.", marks: 2 },
            { label: "c", prompt: "Explain the effect of the rhetorical question.", marks: 3 },
            { label: "d", prompt: "Evaluate how well the argument is supported.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasive analysis",
                statement: "Purpose+technique+effect+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "To persuade the councillor to save the youth club.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "First technique, e.g. emotive language ('belong').",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Second technique, e.g. statistics ('three hundred') or rhetorical question.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "'At what cost to a generation?' challenges the decision.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "It reframes saving money as a moral cost.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Effect clearly explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Evidence given: numbers, benefits listed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "But mostly emotional appeal, limited counter-argument.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced evaluation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) save youth club (b) two techniques (c) moral reframing (d) emotive+some evidence",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Purpose stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two techniques.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Effect explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Evaluation balanced.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Listing techniques without linking to persuasive effect."],
          },
        },
        {
          id: "cie-ol-fl-ua-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how statistics and anecdote differ as persuasive evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence types",
                statement:
                  "Statistics give apparent authority; anecdotes give emotional, human proof.",
              },
            ],
            steps: [
              {
                reasoning: "Statistics feel objective and authoritative.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Anecdotes feel personal and relatable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each can be manipulated or misused.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Statistics persuade through authority; anecdotes through emotion and relatability.",
            commonErrors: ["Treating all evidence as equally convincing."],
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
              { id: "a", text: "Fictional storytelling" },
              { id: "b", text: "Clear, objective explanation of a topic" },
              { id: "c", text: "Personal opinion only" },
              { id: "d", text: "Emotional persuasion" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-ui-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'expository writing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personal diary entries" },
              { id: "b", text: "Emotional persuasion" },
              { id: "c", text: "Fictional storytelling" },
              { id: "d", text: "Objective explanation of a factual topic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Expository writing",
                statement:
                  "Clear, objective explanation of factual topics.",
              },
            ],
            steps: [
              {
                reasoning: "Expository = objective explanation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Objective explanation of a factual topic",
            commonErrors: ["Confusing exposition with argument or narrative."],
          },
        },
        {
          id: "cie-ol-fl-ui-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How is the recycling text mainly organised?",
          extract: {
            title: "How Recycling Works",
            author: "Written for Akademik Space",
            text: "Recycling begins at the kerbside bin. Collected materials are sorted at a facility, then processed into raw materials. Paper becomes pulp; plastic is melted and reformed; glass is crushed and remelted. Therefore, what you put in the right bin directly determines what can be reused.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As a story with characters" },
              { id: "b", text: "As a comparison of two products" },
              { id: "c", text: "As a sequence of steps" },
              { id: "d", text: "As a list of opinions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Text structure",
                statement:
                  "The text follows a process: collect, sort, process, reuse.",
              },
            ],
            steps: [
              {
                reasoning: "Sequence of steps from bin to reuse.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** As a sequence of steps",
            commonErrors: ["Missing the chronological process structure."],
          },
        },
        {
          id: "cie-ol-fl-ui-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "How do the stages in the water cycle text help the reader?",
          extract: {
            title: "The Water Cycle",
            author: "Written for Akademik Space",
            text: "The water cycle describes how water moves around the Earth. The sun heats water in oceans and lakes, turning it into vapour that rises. As the air cools, the vapour condenses into clouds. Finally, precipitation returns the water to the ground, where it may flow back to the sea.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Text organisation",
                statement:
                  "Stage-by-stage organisation makes a process easy to follow.",
              },
            ],
            steps: [
              {
                reasoning: "Each stage is signalled ('finally', 'as the air cools').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The reader can track the process in order.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Clear stages and connectors let the reader follow the process step by step.",
            commonErrors: ["Summarising content without analysing structure."],
          },
        },
        {
          id: "cie-ol-fl-ui-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How does the impersonal tone of the solar panel text serve its purpose?",
          extract: {
            title: "Solar Panels Explained",
            author: "Written for Akademik Space",
            text: "Solar panels convert sunlight into electricity. When light hits the panel's cells, it knocks electrons loose, creating a flow of current. This current is collected by wires and can power homes, schools and businesses. Unlike fossil fuels, sunlight is free and produces no pollution.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Expository tone",
                statement:
                  "Impersonal, precise language keeps focus on the process, not the writer.",
              },
            ],
            steps: [
              {
                reasoning: "No 'I' or personal opinion — the process is the subject.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Precise verbs ('convert', 'knocks loose') explain clearly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Objectivity suits an explanatory purpose.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Impersonal precision keeps the focus on how the technology works, serving the explanatory purpose.",
            commonErrors: ["Describing the topic without analysing the tone."],
          },
        },
        {
          id: "cie-ol-fl-ui-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the reliability of the solar panel text as a source of information.",
          extract: {
            title: "Solar Panels Explained",
            author: "Written for Akademik Space",
            text: "Solar panels convert sunlight into electricity. When light hits the panel's cells, it knocks electrons loose, creating a flow of current. This current is collected by wires and can power homes, schools and businesses. Unlike fossil fuels, sunlight is free and produces no pollution.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating information",
                statement:
                  "Assess clarity, accuracy and balance of an information text.",
              },
            ],
            steps: [
              {
                reasoning: "The explanation is clear and technically accurate.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It is somewhat one-sided — no mention of costs or limits.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No source or evidence is cited for claims.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Overall judgement justified.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Clear and accurate but one-sided; lacks balance and cited evidence, so reliable for basics but incomplete.",
            commonErrors: ["Accepting the text without evaluating balance."],
          },
        },
        {
          id: "cie-ol-fl-ui-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a compare/contrast structure do in an information text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It tells events in time order" },
              { id: "b", text: "It lists a problem then a solution" },
              { id: "c", text: "It persuades the reader" },
              { id: "d", text: "It shows similarities and differences between things" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Compare/contrast",
                statement:
                  "Organises information by similarities and differences.",
              },
            ],
            steps: [
              {
                reasoning: "Compare/contrast = similarities + differences.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** It shows similarities and differences between things",
            commonErrors: ["Confusing with sequence or problem/solution."],
          },
        },
        {
          id: "cie-ol-fl-ui-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the connector 'Therefore' signal in the recycling text?",
          extract: {
            title: "How Recycling Works",
            author: "Written for Akademik Space",
            text: "Recycling begins at the kerbside bin. Collected materials are sorted at a facility, then processed into raw materials. Paper becomes pulp; plastic is melted and reformed; glass is crushed and remelted. Therefore, what you put in the right bin directly determines what can be reused.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new topic" },
              { id: "b", text: "An example" },
              { id: "c", text: "A conclusion drawn from the previous steps" },
              { id: "d", text: "A contradiction" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Connectors",
                statement:
                  "'Therefore' signals a logical conclusion from what precedes.",
              },
            ],
            steps: [
              {
                reasoning: "'Therefore' = conclusion follows.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** A conclusion drawn from the previous steps",
            commonErrors: ["Treating it as a topic shift."],
          },
        },
        {
          id: "cie-ol-fl-ui-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two organisational features of the water cycle text.",
          extract: {
            title: "The Water Cycle",
            author: "Written for Akademik Space",
            text: "The water cycle describes how water moves around the Earth. The sun heats water in oceans and lakes, turning it into vapour that rises. As the air cools, the vapour condenses into clouds. Finally, precipitation returns the water to the ground, where it may flow back to the sea.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Text organisation",
                statement:
                  "Sequential stages and signal words organise the explanation.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of chronological stages, connectors, single topic focus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both correctly identified from the text.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Chronological stages with connectors like 'finally' and 'as'.",
            commonErrors: ["Describing content without identifying structure."],
          },
        },
        {
          id: "cie-ol-fl-ui-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How do examples make abstract points concrete in an information text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Examples",
                statement:
                  "Concrete instances give the reader something familiar to grasp.",
              },
            ],
            steps: [
              {
                reasoning: "Abstract ideas are hard to picture without an instance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examples translate them into familiar, checkable cases.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This improves clarity and credibility.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Examples turn abstract ideas into familiar, concrete cases, improving clarity.",
            commonErrors: ["Saying 'examples help' without explaining how."],
          },
        },
        {
          id: "cie-ol-fl-ui-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Museum Guide",
          extract: {
            title: "The Museum Guide",
            author: "Written for Akademik Space",
            text: "The City Museum occupies a former railway station built in 1898. Its main gallery displays local history, from the first settlers to the industrial boom. A second wing houses a working print shop where visitors can try handset type. Admission is free on the first Sunday of each month.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about the museum.", marks: 2 },
            { label: "b", prompt: "How is the information organised?", marks: 2 },
            { label: "c", prompt: "What tone does the text use and why?", marks: 2 },
            { label: "d", prompt: "Suggest one improvement to make the text more informative.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Info text analysis",
                statement: "Literal+structure+tone+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Former railway station from 1898; free first Sunday monthly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Organised by location/features: building, galleries, admission.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear organisational description.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Formal and factual, suiting an information guide.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Tone linked to purpose.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A plausible improvement, e.g. opening hours or directions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Improvement is relevant and practical.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) organised by feature (c) formal/factual (d) practical improvement",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Structure described.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Tone identified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Improvement given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Summarising without analysing structure or purpose."],
          },
        },
        {
          id: "cie-ol-fl-ui-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Analysing an information text.",
          extract: {
            title: "Composting at Home",
            author: "Written for Akademik Space",
            text: "Home composting turns kitchen scraps into garden food. To begin, choose a bin with a lid to keep pests out. Add green materials — vegetable peelings, grass clippings — and brown materials — dry leaves, cardboard. Turn the heap every few weeks to add air, and keep it moist but not soggy. In three to six months, you will have dark, crumbly compost.",
          },
          parts: [
            { label: "a", prompt: "State the text's purpose.", marks: 1 },
            { label: "b", prompt: "Identify two structural features.", marks: 2 },
            { label: "c", prompt: "Explain how the language keeps the text objective.", marks: 3 },
            { label: "d", prompt: "Evaluate whether the instructions are complete.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Info text analysis",
                statement: "Purpose+structure+language+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "To instruct readers how to compost at home.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "First feature, e.g. sequential instructions or bullet-like listing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Second feature, e.g. clear categories of materials.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Imperative, factual verbs ('choose', 'add', 'turn').",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "No personal opinion or persuasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Precise, practical vocabulary.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Steps are clear and mostly complete.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "But lacks detail on location/size or troubleshooting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) instruct composting (b) two features (c) imperative+factual (d) mostly complete",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Purpose stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two features.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Objectivity explained.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Evaluation balanced.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Summarising without analysing structure or purpose."],
          },
        },
        {
          id: "cie-ol-fl-ui-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how to evaluate the reliability of an information text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating information",
                statement:
                  "Check source, accuracy, balance, currency and evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Consider who wrote it and their authority.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Check whether evidence is verifiable and current.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Note whether alternative viewpoints are acknowledged.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear evaluation framework.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Source+accuracy+balance+currency+evidence determine reliability.",
            commonErrors: ["Judging reliability by appearance alone."],
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
