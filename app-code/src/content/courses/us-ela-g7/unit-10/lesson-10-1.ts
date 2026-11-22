import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const THEMEEXTRACT: TextExtract = {
  title: "The Lantern Keeper",
  author: "Written for Akademik Space",
  text: "Every evening for thirty years, Elias climbed the hill to light the old lighthouse. The village below had changed — electric lights replaced oil lamps, ships used GPS, and no one remembered why the lighthouse still mattered.\n\nOne stormy night, a fishing boat lost power and radio. Elias saw its lights flicker in the darkness. He grabbed the spare lantern and ran down the hill, holding it high as he guided the boat toward the harbor.\n\nThe captain later asked why he still kept the lighthouse lit. Elias smiled. 'Someone might need it,' he said. 'That's all the reason anyone needs.'",
};

export const lesson101: Lesson = {
  id: "ela7-u10-lesson-10-1",
  code: "10-1",
  title: "Theme: Finding the Deeper Meaning",
  goal: "I CAN identify and analyze theme — the central message or insight a story conveys.",
  standards: ["RL.7.2", "RL.7.6"],
  vocabulary: [
    {
      term: "Theme",
      definition:
        "The central message or insight a story conveys about life or human nature.",
    },
    {
      term: "Moral",
      definition:
        "A lesson or principle taught by a story — narrower than theme.",
    },
    { term: "Plot", definition: "The sequence of events in a story." },
    {
      term: "Conflict",
      definition:
        "The struggle between characters, or between a character and circumstances.",
    },
    {
      term: "Resolution",
      definition: "How the conflict is settled at the story's end.",
    },
    {
      term: "Symbol",
      definition: "An object or image that represents something larger.",
    },
  ],
  concepts: [
    {
      id: "ela7-u10-theme",
      title: "Identifying theme",
      skill:
        "Determine theme by examining how plot, character, and conflict develop the story's message.",
      lesson: {
        sections: [
          {
            heading: "Theme vs plot vs moral",
            body: "**Plot** is what happens; **theme** is what it means. 'The boy lost his dog and searched for it' is plot; 'perseverance leads to reunion' is theme. **Moral** is a specific lesson ('don't lie'); **theme** is broader insight ('honesty builds trust even when it's hard'). Theme is never stated directly — you infer it from the whole story.",
          },
          {
            heading: "How theme develops",
            body: "Theme emerges from: **conflict** (what the character struggles with), **choices** (what the character decides), **consequences** (what happens as a result), and **resolution** (how it ends). In 'The Lantern Keeper,' Elias's choice to keep lighting the lighthouse despite its seeming uselessness reveals the theme: small acts of care matter even when unseen.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme formula",
            statement: "Conflict + choices + consequences = theme.",
          },
          {
            name: "Theme is inferred",
            statement: "Never stated directly — deduced from the whole story.",
          },
          {
            name: "Theme vs moral",
            statement: "Moral = specific lesson; theme = broad insight.",
          },
        ],
        workedExample: {
          problem: "What is the theme of 'The Lantern Keeper'?",
          solution:
            "Small acts of care matter even when unseen or unappreciated. Elias keeps lighting the lighthouse because 'someone might need it' — his quiet dedication saves a boat in a storm. The theme emerges from his conflict (seemingly useless tradition) and his choice (to continue anyway).",
        },
      },
      questions: [
        {
          id: "ela7-u10-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: THEMEEXTRACT,
          stem: "What is the difference between plot and theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theme is stated directly; plot is hidden" },
              { id: "b", text: "They're the same thing" },
              { id: "c", text: "Plot is what happens; theme is what it means" },
              { id: "d", text: "Plot is the lesson; theme is the events" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plot vs theme",
                statement: "Events vs meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Plot = sequence of events; theme = central insight or message.",
                evidence: "What is the difference between plot and theme?",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Plot is what happens; theme is what it means.",
            commonErrors: [
              "Thinking theme is stated — it's inferred from the story.",
            ],
          },
        },
        {
          id: "ela7-u10-theme-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: THEMEEXTRACT,
          stem: "Identify the conflict in 'The Lantern Keeper' and explain how it develops the theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict analysis",
                statement: "Conflict drives theme development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Conflict: Elias's tradition seems useless — village changed, technology replaced the lighthouse's purpose.",
                evidence: "no one remembered why the lighthouse still mattered",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Resolution: his choice to keep lighting it saves a boat — proving the tradition still matters.",
                evidence: "he grabbed the spare lantern and ran down the hill",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme emerges: small acts of care matter even when unseen — 'someone might need it.'",
                evidence: "That's all the reason anyone needs",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Conflict: lighthouse seems useless vs Elias's devotion. Resolution: it saves a boat. Theme: small acts of care matter even when unseen.",
            commonErrors: [
              "Identifying plot events as theme — 'he saved the boat' is plot, not theme.",
            ],
          },
        },
        {
          id: "ela7-u10-theme-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: THEMEEXTRACT,
          stem: "Analyze how the lighthouse functions as a symbol and how it contributes to the theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Symbol analysis",
                statement: "Objects represent larger ideas.",
              },
              {
                kind: "skill",
                name: "Theme development",
                statement: "Symbols reinforce thematic meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "The lighthouse symbolizes guidance, hope, and unseen service — it 'lights the way' literally and figuratively.",
                evidence: "light the old lighthouse",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Its seeming uselessness represents traditions that appear outdated but still serve a purpose.",
                evidence: "electric lights replaced oil lamps, ships used GPS",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Elias lighting it every night symbolizes quiet dedication — doing the right thing without recognition.",
                evidence:
                  "Every evening for thirty years, Elias climbed the hill",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The storm rescue proves the symbol's power — what seemed unnecessary becomes essential.",
                evidence: "a fishing boat lost power and radio",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The lighthouse symbolizes guidance, hope, and unseen service. Its seeming uselessness represents traditions that appear outdated but still serve a purpose; Elias's dedication symbolizes quiet service; the storm rescue proves its essential value.",
            commonErrors: [
              "Treating the lighthouse as just a setting detail — it carries thematic weight.",
            ],
          },
        },
        {
          id: "ela7-u10-theme-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: THEMEEXTRACT,
          parts: [
            {
              label: "a",
              prompt: "State the theme of the story in one sentence.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify two story elements that support your theme statement.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme statement",
                statement: "State theme and support it.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'Small acts of care and dedication matter even when they seem unseen or unnecessary.'",
                evidence: "Someone might need it",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Elements: Elias's thirty years of lighting the lighthouse; the storm rescue proving its value.",
                evidence: "Every evening for thirty years",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Small acts of care matter even when unseen.' (b) Elias's thirty years of dedication + the storm rescue.",
            commonErrors: [
              "Theme as a single word — needs a full sentence insight.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u10-theme2",
      title: "Character analysis and development",
      skill:
        "Analyze how characters' traits, choices, and growth reveal theme.",
      lesson: {
        sections: [
          {
            heading: "Character traits and motivation",
            body: "Characters reveal theme through **traits** (what they're like), **motivations** (why they act), and **choices** (what they decide). Elias is patient, dedicated, selfless — his motivation is not recognition but service. His choice to continue lighting the lighthouse despite its seeming uselessness reveals his character and the story's theme.",
          },
          {
            heading: "Character arcs",
            body: "A **character arc** is how a character changes (or doesn't) over the story. Elias doesn't change — he was always dedicated. But the reader's understanding changes: we learn that quiet dedication has value. Sometimes the arc is in the reader's perception, not the character's actions. Other times characters genuinely transform — from selfish to selfless, fearful to brave.",
          },
        ],
        keyFormulas: [
          {
            name: "Character reveals theme",
            statement: "Traits + motivations + choices = thematic insight.",
          },
          {
            name: "Character arc",
            statement:
              "How a character changes (or stays the same) across the story.",
          },
          {
            name: "Reader perception",
            statement:
              "Sometimes the arc is in what the reader learns, not what the character does.",
          },
        ],
        workedExample: {
          problem: "How does Elias's character reveal the theme?",
          solution:
            "Elias's traits (patient, dedicated, selfless) and motivation (service, not recognition) drive his choice to keep lighting the lighthouse. His character embodies the theme: small acts of care matter even when unseen. We don't need him to change — his consistent dedication IS the message.",
        },
      },
      questions: [
        {
          id: "ela7-u10-theme2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: THEMEEXTRACT,
          stem: "What motivates Elias to keep lighting the lighthouse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's his job and he gets paid" },
              { id: "b", text: "He has nothing else to do" },
              { id: "c", text: "He wants attention from the village" },
              {
                id: "d",
                text: "He believes someone might need it — service over recognition",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character motivation",
                statement: "Why characters act reveals theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elias says 'Someone might need it' — his motivation is potential service, not recognition or duty.",
                evidence: "Someone might need it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Service over recognition — he lights it because someone might need it.",
            commonErrors: [
              "Choosing (a) — he's not seeking attention; the village doesn't even remember.",
            ],
          },
        },
        {
          id: "ela7-u10-theme2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: THEMEEXTRACT,
          stem: "Does Elias undergo a character arc? Explain your answer with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character arc analysis",
                statement: "Characters change or stay the same.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elias doesn't change — he was always dedicated to lighting the lighthouse.",
                evidence:
                  "Every evening for thirty years, Elias climbed the hill",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "But the reader's understanding changes — we learn his quiet dedication has value when it saves the boat.",
                evidence: "That's all the reason anyone needs",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "So the arc is in reader perception, not character change — his consistency IS the point.",
                evidence: "he grabbed the spare lantern",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "No — Elias doesn't change; he was always dedicated. The arc is in reader perception: we learn his quiet service matters when it saves the boat.",
            commonErrors: [
              "Saying he 'learned a lesson' — he already knew; we learned about him.",
            ],
          },
        },
        {
          id: "ela7-u10-theme2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: THEMEEXTRACT,
          stem: "Analyze how Elias's traits (patient, dedicated, selfless) connect to the story's theme. Use evidence from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character-trait analysis",
                statement: "Traits reveal thematic meaning.",
              },
              {
                kind: "skill",
                name: "Evidence-based analysis",
                statement: "Support claims with text evidence.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Patient: thirty years of nightly climbs without recognition shows patience and persistence.",
                evidence:
                  "Every evening for thirty years, Elias climbed the hill",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Dedicated: he continues despite the lighthouse's seeming uselessness — commitment to a purpose.",
                evidence: "no one remembered why the lighthouse still mattered",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Selfless: 'Someone might need it' — his motivation is potential service, not personal gain.",
                evidence: "That's all the reason anyone needs",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "These traits collectively embody the theme: small acts of care matter even when unseen.",
                evidence: "he grabbed the spare lantern and ran down the hill",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Elias's patience (30 years of climbs), dedication (continues despite seeming uselessness), and selflessness ('someone might need it') embody the theme: small acts of care matter even when unseen. His traits ARE the message.",
            commonErrors: [
              "Listing traits without connecting to theme — traits must reveal meaning.",
            ],
          },
        },
        {
          id: "ela7-u10-theme2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: THEMEEXTRACT,
          parts: [
            {
              label: "a",
              prompt: "Name two character traits Elias demonstrates.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how each trait supports the theme.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Trait-theme connection",
                statement: "Traits reveal thematic meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Example: dedicated and selfless.",
                evidence: "Every evening for thirty years",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Dedicated → continues despite seeming uselessness; selfless → 'someone might need it' — both support theme of unseen care.",
                evidence: "Someone might need it",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Dedicated and selfless. (b) Dedicated shows persistence; selfless shows service without recognition — both support 'small acts of care matter'.",
            commonErrors: [
              "Naming traits without explaining thematic connection.",
            ],
          },
        },
      ],
    },
  ],
};
