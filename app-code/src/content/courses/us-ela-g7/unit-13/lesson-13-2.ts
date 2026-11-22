import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const ELEMENTSEXTRACT: TextExtract = {
  title: "Story Elements Analysis",
  author: "Written for Akademik Space",
  text: "The old theater had been abandoned for decades. Dust covered the velvet seats, and cobwebs hung from the chandelier. Mara pushed open the heavy door, and the smell of decay hit her — but underneath it, she could still smell popcorn and anticipation.\n\nShe found a faded poster for a play from 1952. The actors' names were illegible, but the title was clear: 'The Long Night.' She wondered what stories the theater had witnessed — laughter, tears, standing ovations.\n\nAs she explored, she imagined the audience filing in, the lights dimming, the curtain rising. The theater wasn't dead, she realized. It was sleeping — waiting for someone to wake it up.",
};

export const lesson132: Lesson = {
  id: "ela7-u13-lesson-13-2",
  code: "13-2",
  title: "Story Elements: Character, Setting, and Plot",
  goal: "I CAN analyze how character, setting, and plot work together to create meaning in stories.",
  standards: ["RL.7.1", "RL.7.3"],
  vocabulary: [
    {
      term: "Setting",
      definition: "Time and place of a story — affects mood and meaning.",
    },
    { term: "Character", definition: "A person, animal, or being in a story." },
    {
      term: "Protagonist",
      definition: "The main character — usually drives the plot.",
    },
    {
      term: "Antagonist",
      definition: "The character or force opposing the protagonist.",
    },
    {
      term: "Plot",
      definition:
        "Sequence of events — exposition, rising action, climax, falling action, resolution.",
    },
    {
      term: "Exposition",
      definition:
        "The beginning — introduces characters, setting, and situation.",
    },
  ],
  concepts: [
    {
      id: "ela7-u13-elements",
      title: "Analyzing story elements",
      skill:
        "Identify and analyze how setting, character, and plot interact to create meaning.",
      lesson: {
        sections: [
          {
            heading: "Setting's role",
            body: "**Setting** (time + place) isn't just backdrop — it shapes mood and meaning. The abandoned theater creates atmosphere: dust, cobwebs, decay suggest neglect and lost history. But Mara's perception ('sleeping, waiting') transforms the setting from dead to dormant — showing how character perspective shapes setting's meaning.",
          },
          {
            heading: "Plot structure",
            body: "**Plot** follows structure: **exposition** (introduces Mara and theater), **rising action** (exploring, finding poster), **climax** (realization that theater is 'sleeping'), **falling action** (understanding its potential), **resolution** (seeing it as waiting to be revived). The climax is Mara's shift in perception — not an external event.",
          },
        ],
        keyFormulas: [
          {
            name: "Setting function",
            statement: "Time + place creates mood and meaning.",
          },
          {
            name: "Plot structure",
            statement:
              "Exposition → rising action → climax → falling action → resolution.",
          },
          {
            name: "Elements interact",
            statement: "Setting + character + plot = unified meaning.",
          },
        ],
        workedExample: {
          problem:
            "How does the theater setting contribute to the story's meaning?",
          solution:
            "The abandoned theater represents neglected history and lost stories. Mara's realization that it's 'sleeping, not dead' transforms the setting from decay to potential — showing that what seems abandoned might just be waiting for renewal.",
        },
      },
      questions: [
        {
          id: "ela7-u13-elements-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ELEMENTSEXTRACT,
          stem: "What is the setting of the story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An abandoned theater" },
              { id: "b", text: "A modern school" },
              { id: "c", text: "A busy city street" },
              { id: "d", text: "A forest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Setting",
                statement: "Time and place of story.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The story takes place in 'The old theater' that 'had been abandoned for decades.'",
                evidence: "The old theater had been abandoned",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. An abandoned theater.",
            commonErrors: ["Choosing (a) — no school mentioned."],
          },
        },
        {
          id: "ela7-u13-elements-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ELEMENTSEXTRACT,
          stem: "How does the setting contribute to the story's mood?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting analysis",
                statement: "Place shapes atmosphere and meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Details: dust, cobwebs, decay, 'smell of decay' — create mood of neglect and lost history.",
                evidence: "Dust covered the velvet seats, and cobwebs hung",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "But Mara's perception ('sleeping, waiting') transforms the mood — from dead to dormant.",
                evidence:
                  "The theater wasn't dead, she realized. It was sleeping",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Setting + character perspective = mood shifts from melancholy to hopeful.",
                evidence: "waiting for someone to wake it up",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The theater's decay creates melancholy mood, but Mara's realization it is 'sleeping, waiting' transforms it to hopeful — showing potential renewal.",
            commonErrors: [
              "Describing setting without analyzing its effect on mood.",
            ],
          },
        },
        {
          id: "ela7-u13-elements-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ELEMENTSEXTRACT,
          stem: "Identify the climax of the story and explain why it's the turning point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plot analysis",
                statement: "Identify turning points.",
              },
              {
                kind: "skill",
                name: "Climax significance",
                statement: "Climax changes understanding.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Climax: Mara's realization that the theater is 'sleeping — waiting for someone to wake it up.'",
                evidence:
                  "The theater wasn't dead, she realized. It was sleeping",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It's the turning point because her perception shifts — from seeing decay to seeing potential.",
                evidence: "waiting for someone to wake it up",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This internal shift drives the story's meaning — abandoned things can be revived.",
                evidence: "what stories the theater had witnessed",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Without this realization, the story would just be exploration of a decaying building.",
                evidence: "she imagined the audience filing in",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Climax: Mara's realization that the theater is 'sleeping, waiting' — her perception shifts from decay to potential, driving the story's theme of renewal.",
            commonErrors: [
              "Choosing an external event — the climax is internal (realization).",
            ],
          },
        },
        {
          id: "ela7-u13-elements-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ELEMENTSEXTRACT,
          parts: [
            {
              label: "a",
              prompt: "Name the protagonist and describe one trait.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how setting reflects this character's perspective.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character-setting connection",
                statement: "Perspective shapes perception.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mara — imaginative/hopeful; sees potential in abandoned places.",
                evidence: "Mara pushed open the heavy door",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "She sees the theater as 'sleeping' not 'dead' — her hopeful perspective transforms the setting's meaning.",
                evidence: "It was sleeping — waiting for someone to wake it up",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Mara — imaginative/hopeful. (b) She sees the theater as 'sleeping' not 'dead' — her hopeful perspective transforms the setting.",
            commonErrors: [
              "Describing character without connecting to setting interpretation.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u13-elements2",
      title: "Plot and conflict analysis",
      skill:
        "Analyze how conflict drives plot and reveals character and theme.",
      lesson: {
        sections: [
          {
            heading: "Conflict types",
            body: "**Person vs person**: Mara vs the decaying theater (or vs those who abandoned it). **Person vs nature**: Mara vs time/neglect. **Person vs self**: Mara's internal struggle between seeing decay vs potential. **Person vs society**: abandoned history vs modern indifference. In this story, the conflict is internal — Mara must choose how to see the theater.",
          },
          {
            heading: "Conflict drives plot",
            body: "Conflict creates tension that propels the plot forward. Without Mara's internal struggle (decay vs potential), the story would be flat exploration. Her conflict leads to the climax (realization) and resolution (seeing it as waiting). Every plot event serves the conflict — finding the poster triggers her imagination; exploring triggers her realization.",
          },
        ],
        keyFormulas: [
          {
            name: "Conflict types",
            statement: "Person vs person/nature/self/society.",
          },
          {
            name: "Conflict → plot",
            statement: "Tension propels events forward.",
          },
          {
            name: "Conflict reveals",
            statement: "Character traits and thematic meaning.",
          },
        ],
        workedExample: {
          problem: "What is the main conflict in the theater story?",
          solution:
            "Mara's internal conflict — choosing between seeing the theater as dead/abandoned vs sleeping/potential. This person-vs-self conflict drives her exploration and leads to the climax realization.",
        },
      },
      questions: [
        {
          id: "ela7-u13-elements2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ELEMENTSEXTRACT,
          stem: "What type of conflict drives the story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Person vs society" },
              { id: "b", text: "Person vs person" },
              { id: "c", text: "Person vs self — Mara's internal struggle" },
              { id: "d", text: "Person vs nature" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conflict types",
                statement: "Internal vs external struggles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mara struggles internally — choosing between seeing decay vs potential.",
                evidence:
                  "The theater wasn't dead, she realized. It was sleeping",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Person vs self — Mara's internal struggle.",
            commonErrors: ["Choosing (a) — no other character opposes her."],
          },
        },
        {
          id: "ela7-u13-elements2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ELEMENTSEXTRACT,
          stem: "How does Mara's conflict drive the plot forward?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict-plot connection",
                statement: "Conflict creates tension and events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Her curiosity about the theater (conflict: decay vs potential) drives her to explore.",
                evidence: "she wondered what stories the theater had witnessed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Finding the poster triggers her imagination — conflict intensifies.",
                evidence: "she imagined the audience filing in",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The climax (realization it's 'sleeping') resolves her internal conflict — she sees potential.",
                evidence: "waiting for someone to wake it up",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Her internal conflict (decay vs potential) drives exploration → imagination → climax realization → resolution (seeing potential).",
            commonErrors: [
              "Describing events without linking to conflict — must show cause-effect.",
            ],
          },
        },
        {
          id: "ela7-u13-elements2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: ELEMENTSEXTRACT,
          stem: "Analyze how the story's conflict reveals Mara's character traits and the story's theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conflict-character-theme",
                statement: "Struggle reveals traits and meaning.",
              },
              {
                kind: "skill",
                name: "Theme analysis",
                statement: "Conflict resolution shows thematic insight.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Mara's conflict (decay vs potential) reveals her hopeful, imaginative nature — she sees possibility in abandonment.",
                evidence: "she imagined the audience filing in",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Her resolution (theater is 'sleeping, not dead') shows she chooses hope over despair.",
                evidence: "It was sleeping — waiting for someone to wake it up",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: abandoned things can be revived — what seems dead might just be waiting.",
                evidence: "The theater wasn't dead",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The conflict IS the theme — her struggle to see potential mirrors the story's message.",
                evidence: "waiting for someone to wake it up",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Mara's conflict reveals her hopeful, imaginative nature — she chooses to see potential in abandonment. The resolution shows theme: what seems dead might be sleeping, waiting for revival. The conflict IS the theme.",
            commonErrors: [
              "Separating conflict from theme — they should connect.",
            ],
          },
        },
        {
          id: "ela7-u13-elements2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: ELEMENTSEXTRACT,
          parts: [
            { label: "a", prompt: "Name the story's resolution.", marks: 1 },
            {
              label: "b",
              prompt: "Explain how it resolves the conflict and reveals theme.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Resolution analysis",
                statement: "How conflicts end reveals meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Mara realizes the theater is 'sleeping, waiting' — not dead.",
                evidence:
                  "The theater wasn't dead, she realized. It was sleeping",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Resolution: she sees potential instead of decay — resolves internal conflict and reveals theme that abandoned things can be revived.",
                evidence: "waiting for someone to wake it up",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Mara sees the theater as 'sleeping, waiting'. (b) Resolves her conflict — she chooses hope over despair, revealing theme that abandoned things can be revived.",
            commonErrors: [
              "Calling it 'the end' — resolution is about conflict, not just story ending.",
            ],
          },
        },
      ],
    },
  ],
};
