import type { Lesson } from "../../../types.ts";
import {
  themeQuestions,
  themeVsPlotQuestions,
} from "./expanded-questions.ts";

export const lesson12: Lesson = {
  id: "mll2-u1-lesson-1-2",
  code: "1-2",
  title: "Theme: What the Story Is Really About",
  goal: "I CAN identify the theme of a story and explain how events and characters develop it.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Theme", definition: "The big idea or message a story explores, like 'friendship' or 'courage'." },
    { term: "Message", definition: "What the writer wants the reader to take away — often the theme stated simply." },
    { term: "Moral", definition: "A lesson about right and wrong that a story teaches." },
    { term: "Universal theme", definition: "A theme that applies to many people and times, like 'greed leads to trouble'." },
    { term: "Symbol", definition: "A person, object or event that stands for a bigger idea." },
  ],
  concepts: [
    {
      id: "mll2-u1-theme",
      title: "Finding the theme",
      skill: "Identify a story's theme and explain how the plot and characters support it.",
      lesson: {
        sections: [
          {
            heading: "What is a theme?",
            body: "A **theme** is the big idea a story is really about. It is not the same as the **plot** (what happens) — it is what the events **mean**. 'A boy loses his dog' is plot; 'loss teaches us to cherish what we have' is theme.",
          },
          {
            heading: "How themes work",
            body: "Themes grow from **characters' experiences**. If a character learns that lying destroys trust, the theme might be 'honesty matters'. The theme is shown through what happens, not just stated — though some stories end with a clear moral.",
          },
          {
            heading: "Universal themes",
            body: "Good themes are **universal** — they apply to many people. Common ones: courage, friendship, growing up, loss, honesty, belonging. Ask: what does this story teach about being human?",
          },
        ],
        keyFormulas: [
          { name: "Theme question", statement: "What big idea does this story explore? What did the character learn?" },
        ],
        workedExample: {
          problem: "A story about a girl who shares her lunch with a hungry stranger ends with them becoming friends. What is the theme?",
          solution: "Kindness and friendship — sharing creates connection. The plot is 'she shared lunch'; the theme is 'kindness brings people together'.",
        },
      },
      questions: [
        {
          id: "mll2-u1-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'theme' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The list of characters" },
              { id: "b", text: "The big idea or message the story explores" },
              { id: "c", text: "The setting of the story" },
              { id: "d", text: "The title of the story" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "Theme is the underlying idea or message a story explores." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): theme is the big idea/message — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The big idea or message the story explores",
          },
        },
        {
          id: "mll2-u1-theme-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Empty Seat",
            author: "Written for Akademik Space",
            text: "Every Friday, Grandpa saved a seat at the table for the son who had moved abroad. Nobody sat in it, but nobody moved it either.",
          },
          stem: "What is the theme of this passage? Explain how the 'empty seat' supports it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbol and theme", statement: "Objects can symbolize feelings; the theme grows from what characters do with them." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): theme — love and longing for someone absent; family bonds endure even across distance.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the empty seat symbolizes the missing son — keeping it shows he is still loved and remembered.", evidence: "nobody moved it either", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme: enduring love and missing someone far away. The empty seat symbolizes the absent son who is still cherished.",
          },
        },
        {
          id: "mll2-u1-theme-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Race",
            author: "Written for Akademik Space",
            text: "Jae had trained all term for the relay. On the day, he stumbled at the first baton change and his team finished last.\n\nHe wanted to quit. But the coach said: 'We don't measure ourselves by medals. We measure by who shows up.' Jae ran the next race — not to win, but to finish.",
          },
          stem: "What is the theme of this story? Explain how two moments develop it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Theme through events", statement: "Themes emerge from what characters learn through events." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): theme — resilience and redefining success; it is not about winning but about showing up and trying.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the stumble and last place show failure; the coach's words give the new perspective; Jae's decision to run again shows he has learned it.", evidence: "not to win, but to finish", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the three moments form a complete arc — failure → advice → changed action — proving the theme through behaviour, not just statement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme: true success is perseverance, not victory. Jae learns to value finishing over winning.",
          },
        },
        {
          id: "mll2-u1-theme-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Two Brothers",
            author: "Written for Akademik Space",
            text: "Omar and his brother Yusef shared one bicycle between them. Omar rode it to school; Yusef walked.\n\nWhen Yusef won a place at a school across town, Omar offered to give him the bike. 'You'll need it more than me,' he said. Yusef refused — but that night he wrote Omar a letter he'd never written before.",
          },
          parts: [
            { label: "a", prompt: "What is the theme? Give it in one sentence.", marks: 1 },
            { label: "b", prompt: "How does the bicycle function in the story?", marks: 2 },
            { label: "c", prompt: "Explain why Yusef's letter at the end matters for the theme.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Theme and symbol", statement: "The bicycle symbolizes unequal sacrifice; the letter shows the emotional resolution." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): theme — sacrifice and love between brothers; giving up something for someone you love.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the bicycle is a symbol of privilege and sacrifice — Omar had it, Yusef didn't.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Omar offering it shows love; Yusef refusing shows pride or shame — the object carries the relationship.", evidence: "You'll need it more than me", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the letter — 'never written before' — suggests Yusef finally expresses feelings he'd kept hidden, resolving the tension.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it shows that love, once spoken, heals the imbalance the bicycle represented.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sacrifice and brotherly love. (b) The bicycle symbolizes privilege/sacrifice — offering it shows love, refusing shows shame. (c) The letter finally voices hidden feelings, healing the rift.",
          },
        },
        ...themeQuestions,
      ],
    },
    {
      id: "mll2-u1-theme-vs-plot",
      title: "Theme vs plot: telling them apart",
      skill: "Distinguish what happens (plot) from what it means (theme).",
      lesson: {
        sections: [
          {
            heading: "Plot is what happens",
            body: "**Plot** is the sequence of events — the story's 'what'. 'A girl finds a map, follows it to a cave, and discovers treasure' is plot. It answers **what happens?**",
          },
          {
            heading: "Theme is what it means",
            body: "**Theme** is the idea underneath — the story's 'so what'. The same plot could carry different themes: greed ('treasure corrupts'), adventure ('curiosity leads to discovery') or friendship ('sharing the treasure matters').",
          },
          {
            heading: "How to find both",
            body: "Ask two questions: **what happens?** (plot — characters, events, ending) and **what does it teach?** (theme — the lesson or big idea). A good analysis answers both.",
          },
        ],
        keyFormulas: [
          { name: "Plot vs theme", statement: "Plot = what happens. Theme = what it means / what it teaches." },
        ],
        workedExample: {
          problem: "A boy gives his only sandwich to a stranger and goes hungry. Plot? Theme?",
          solution: "Plot: the boy shares his sandwich. Theme: kindness matters more than comfort — selflessness.",
        },
      },
      questions: [
        {
          id: "mll2-u1-theme-vs-plot-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the plot of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Courage is more important than victory" },
              { id: "b", text: "A girl climbs a mountain and finds a cave" },
              { id: "c", text: "The story teaches us about friendship" },
              { id: "d", text: "Nature is powerful" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plot", statement: "Plot is the sequence of events in a story." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'a girl climbs a mountain and finds a cave' is events — plot. The others are themes/messages.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A girl climbs a mountain and finds a cave",
          },
        },
        {
          id: "mll2-u1-theme-vs-plot-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Competition",
            author: "Written for Akademik Space",
            text: "Mei trained for months for the spelling bee. On the day, she spelled every word right — but lost to a boy who had guessed. She shook his hand anyway.",
          },
          stem: "Write down the plot (one sentence) and the theme (one sentence) of this story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Plot vs theme", statement: "Plot = events; theme = the lesson or idea." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): plot — Mei trains, competes, spells perfectly but loses, and shakes her opponent's hand.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): theme — good sportsmanship and grace in defeat matter more than winning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plot: Mei loses the spelling bee despite perfection and shakes her opponent's hand. Theme: sportsmanship/grace matters more than winning.",
          },
        },
        {
          id: "mll2-u1-theme-vs-plot-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two students read the same story about a man who plants a tree in a concrete city. Ana says the theme is 'nature always wins'. Ben says it is 'small acts can change a place'. Explain how both readings are possible and what decides between them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interpretation", statement: "Themes can be interpreted differently; evidence in the text supports some readings more than others." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Ana's reading focuses on the tree surviving — nature overcoming the concrete.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Ben's reading focuses on the man's single act — one person's effort changing a place.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the text's details decide — if the story dwells on the tree's struggle, Ana's reading fits; if on the man's motive, Ben's does.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both are valid interpretations; the text's emphasis on the tree's survival vs the man's action decides which theme the evidence best supports.",
          },
        },
        {
          id: "mll2-u1-theme-vs-plot-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Last Ticket",
            author: "Written for Akademik Space",
            text: "Only one ticket remained for the concert. Sara held it — it was the last one. Her best friend Lena stood beside her, eyes wide.\n\nSara tore the ticket in half. 'We go together or not at all,' she said, and gave Lena half.",
          },
          parts: [
            { label: "a", prompt: "State the plot in one sentence.", marks: 1 },
            { label: "b", prompt: "State the theme in one sentence.", marks: 1 },
            { label: "c", prompt: "Explain how the 'ticket' works as a symbol.", marks: 1 },
            { label: "d", prompt: "Explain how Sara's action shows the theme better than simply telling us the theme would.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Symbol and showing theme", statement: "Tearing the ticket is an action that proves the theme of friendship." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): plot — Sara has the last ticket, tears it, and shares it with Lena.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): theme — true friendship means sharing even at personal cost; 'together or not at all'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the ticket symbolizes access/opportunity — tearing it shows friendship matters more than the prize.", evidence: "tore the ticket in half", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): Sara's action proves her values through behaviour — readers see friendship rather than being told about it.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): 'we go together or not at all' voices the theme but the torn ticket makes it unforgettable — showing beats telling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sara tears the last ticket to share with Lena. (b) Friendship over personal gain. (c) Ticket = opportunity; tearing it = choosing friendship. (d) Her action proves the theme.",
          },
        },
        ...themeVsPlotQuestions,
      ],
    },
  ],
};
