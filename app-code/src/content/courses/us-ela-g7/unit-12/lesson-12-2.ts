import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const POVEXTRACT: TextExtract = {
  title: "Two Perspectives on the Same Event",
  author: "Written for Akademik Space",
  text: "Version 1 (First Person): 'I was terrified when the teacher called my name. My hands wouldn't stop shaking as I walked to the front of the class.'\n\nVersion 2 (Third Person): 'Jamal was nervous when the teacher called his name. His hands trembled as he walked to the front of the class.'",
};

export const lesson122: Lesson = {
  id: "ela7-u12-lesson-12-2",
  code: "12-2",
  title: "Point of View and Author's Craft in Literature",
  goal: "I CAN analyze how point of view and author's craft choices shape meaning in stories.",
  standards: ["RL.7.4", "RL.7.6", "RL.7.7"],
  vocabulary: [
    {
      term: "Point of view",
      definition:
        "The perspective from which a story is told — first, second, or third person.",
    },
    {
      term: "First person",
      definition: "Narrator is a character — 'I', 'me', 'my'.",
    },
    {
      term: "Third person",
      definition: "Narrator is outside the story — 'he', 'she', 'they', names.",
    },
    {
      term: "Limited vs omniscient",
      definition:
        "Limited = one character's perspective; omniscient = all-knowing narrator.",
    },
    {
      term: "Unreliable narrator",
      definition: "A narrator whose perspective is biased or mistaken.",
    },
    {
      term: "Author's craft",
      definition: "Deliberate choices in language, structure, and perspective.",
    },
  ],
  concepts: [
    {
      id: "ela7-u12-pov",
      title: "Point of view analysis",
      skill:
        "Identify point of view and analyze how it shapes reader understanding.",
      lesson: {
        sections: [
          {
            heading: "First vs third person",
            body: "**First person** ('I', 'me') puts readers inside the narrator's head — intimate, subjective, limited to what they know. **Third person** ('he', 'she', names) can be limited (one character's view) or omniscient (all-knowing). First person creates immediacy; third person creates distance or objectivity.",
          },
          {
            heading: "How POV affects meaning",
            body: "The same event tells differently: 'I was terrified' (first person) vs 'Jamal was nervous' (third person). First person shares the character's fear directly; third person describes it from outside. POV determines what readers know, feel, and trust — a first-person narrator might be unreliable; an omniscient narrator knows everyone's thoughts.",
          },
        ],
        keyFormulas: [
          {
            name: "First person",
            statement: "Narrator is a character — 'I', 'me'.",
          },
          {
            name: "Third person",
            statement: "Narrator outside story — 'he', 'she', names.",
          },
          {
            name: "Limited vs omniscient",
            statement: "One perspective vs all-knowing.",
          },
          {
            name: "POV effect",
            statement: "Determines what readers know, feel, and trust.",
          },
        ],
        workedExample: {
          problem:
            "How does point of view change the meaning of 'My hands wouldn't stop shaking' vs 'His hands trembled'?",
          solution:
            "First person 'my hands wouldn't stop shaking' shares the narrator's fear directly — readers feel it with them. Third person 'his hands trembled' describes the same fear from outside — readers observe rather than experience. POV determines emotional distance.",
        },
      },
      questions: [
        {
          id: "ela7-u12-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POVEXTRACT,
          stem: "What point of view does Version 1 use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First person" },
              { id: "b", text: "Second person" },
              { id: "c", text: "Third person" },
              { id: "d", text: "Omniscient" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First person",
                statement: "Narrator is a character — 'I'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'I was terrified', 'my hands' — the narrator is a character using 'I'.",
                evidence: "I was terrified when the teacher called",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. First person — narrator uses 'I'.",
            commonErrors: [
              "Choosing (d) — first person is limited, not omniscient.",
            ],
          },
        },
        {
          id: "ela7-u12-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POVEXTRACT,
          stem: "How does the point of view change the reader's experience of the same event?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV effect",
                statement: "Perspective shapes reader experience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First person 'I was terrified' — readers experience fear directly, inside the narrator's head.",
                evidence: "I was terrified when the teacher called my name",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Third person 'Jamal was nervous' — readers observe fear from outside, more detached.",
                evidence: "Jamal was nervous when the teacher called his name",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "First person creates immediacy and intimacy; third person creates distance and objectivity.",
                evidence: "My hands wouldn't stop shaking",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "First person puts readers inside the fear ('I was terrified'); third person observes it ('Jamal was nervous'). POV determines emotional distance.",
            commonErrors: [
              "Saying they 'mean the same thing' — POV changes reader experience.",
            ],
          },
        },
        {
          id: "ela7-u12-pov-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POVEXTRACT,
          stem: "Rewrite Version 2 (third person) as an omniscient narrator. Explain what information the omniscient POV adds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Omniscient POV",
                statement: "All-knowing narrator accesses everyone's thoughts.",
              },
              {
                kind: "skill",
                name: "POV comparison",
                statement: "Different POVs reveal different information.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Omniscient version can include other characters' thoughts: 'The teacher noticed Jamal's trembling hands and felt a pang of sympathy.'",
                evidence: "Jamal was nervous",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It can reveal what Jamal doesn't know: 'He didn't realize the class was rooting for him.'",
                evidence: "walked to the front of the class",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It provides broader context — the teacher's perspective, classmates' reactions, setting details.",
                evidence: "the teacher called his name",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omniscient POV gives readers more information than limited first/third person.",
                evidence: "His hands trembled",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Jamal was nervous when the teacher called his name. His hands trembled as he walked to the front. The teacher noticed and felt a pang of sympathy — she knew how hard this was for him. He didn't realize the class was rooting for him.' — omniscient adds teacher's thoughts and class context.",
            commonErrors: [
              "Keeping it limited — omniscient must access multiple perspectives.",
            ],
          },
        },
        {
          id: "ela7-u12-pov-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POVEXTRACT,
          parts: [
            {
              label: "a",
              prompt: "Identify the point of view in Version 2.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Explain one advantage of this POV over first person.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV comparison",
                statement: "Different POVs serve different purposes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Third person limited — 'Jamal', 'his' — narrator outside the story but focused on one character.",
                evidence: "Jamal was nervous",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Advantage: creates distance/objectivity — readers observe rather than experience, allowing more analysis.",
                evidence: "His hands trembled",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Third person limited. (b) Creates distance and objectivity — readers observe rather than experience, allowing more analysis.",
            commonErrors: [
              "Calling it omniscient — only Jamal's perspective is shown.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u12-pov2",
      title: "Author's craft and literary devices",
      skill:
        "Analyze how authors use language choices to create effects and meaning.",
      lesson: {
        sections: [
          {
            heading: "Craft choices",
            body: "Authors make deliberate choices: **word choice** (precise vs vague), **sentence structure** (short for tension, long for flow), **figurative language** (similes, metaphors), **pacing** (slow for important moments), **dialogue** (reveals character). Each choice serves a purpose — 'My hands wouldn't stop shaking' shows fear through physical detail, not just stating 'I was scared'.",
          },
          {
            heading: "Effect on reader",
            body: "Craft choices create **effects**: suspense (short sentences before climax), empathy (sensory details), mood (dark imagery), tone (word connotations). Analyzing craft means asking: WHY did the author choose these words? What effect does it create? 'The wind whispered' (personification) makes the scene feel alive and eerie vs 'the wind blew' (neutral).",
          },
        ],
        keyFormulas: [
          {
            name: "Craft choices",
            statement:
              "Word choice, structure, figurative language, pacing, dialogue.",
          },
          {
            name: "Effect analysis",
            statement: "Ask: why this choice? what does it create?",
          },
          {
            name: "Show don't tell",
            statement:
              "Physical details reveal emotion better than stating it.",
          },
        ],
        workedExample: {
          problem:
            "Why does 'My hands wouldn't stop shaking' work better than 'I was scared'?",
          solution:
            "It shows fear through physical sensation rather than stating it. Readers experience the trembling hands — they feel the fear with the narrator rather than being told about it. This is 'show don't tell' in action.",
        },
      },
      questions: [
        {
          id: "ela7-u12-pov2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POVEXTRACT,
          stem: "Why does 'My hands wouldn't stop shaking' work better than 'I was scared'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It shows fear through physical detail rather than stating it",
              },
              { id: "b", text: "It's shorter" },
              { id: "c", text: "It uses bigger words" },
              { id: "d", text: "It's more formal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Show don't tell",
                statement: "Physical detail reveals emotion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Hands wouldn't stop shaking' shows fear physically; 'I was scared' just states it.",
                evidence: "My hands wouldn't stop shaking",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Shows fear through physical detail — readers experience it.",
            commonErrors: [
              "Choosing (a) — length isn't the point; showing vs telling is.",
            ],
          },
        },
        {
          id: "ela7-u12-pov2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POVEXTRACT,
          stem: "Identify two craft choices in Version 1 and explain their effects.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Craft analysis",
                statement: "Language choices create effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Terrified' — precise emotional word showing intensity of fear.",
                evidence: "I was terrified",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Wouldn't stop shaking' — physical detail showing fear through body response.",
                evidence: "My hands wouldn't stop shaking",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "First person POV — puts readers inside the narrator's fear, creating immediacy.",
                evidence: "walked to the front of the class",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Terrified' (precise emotion), 'wouldn't stop shaking' (physical detail), first person POV (immediacy) — all create immersive fear.",
            commonErrors: [
              "Identifying choices without explaining effects — must connect to reader experience.",
            ],
          },
        },
        {
          id: "ela7-u12-pov2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POVEXTRACT,
          stem: "Compare the craft choices in both versions. Which is more effective for creating tension, and why?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Craft comparison",
                statement: "Different choices create different effects.",
              },
              {
                kind: "skill",
                name: "Effectiveness evaluation",
                statement: "Judge which serves the purpose better.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Version 1 (first person): 'terrified', 'wouldn't stop shaking' — intense physical and emotional detail.",
                evidence: "I was terrified",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Version 2 (third person): 'nervous', 'trembled' — more restrained, observational.",
                evidence: "Jamal was nervous",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Version 1 creates more tension — first person immediacy + intense physical detail immerses readers in fear.",
                evidence: "My hands wouldn't stop shaking",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Version 2 is more detached — appropriate for objective narration but less immersive for this moment.",
                evidence: "His hands trembled",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Version 1 is more effective for tension — first person POV + intense physical detail ('wouldn't stop shaking') immerses readers in fear. Version 2 is more detached and observational.",
            commonErrors: [
              "Saying both are 'equal' — they create different effects for different purposes.",
            ],
          },
        },
        {
          id: "ela7-u12-pov2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POVEXTRACT,
          parts: [
            {
              label: "a",
              prompt:
                "Identify one craft choice in Version 2 that differs from Version 1.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how this choice affects the reader's emotional response.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Craft comparison",
                statement: "Different choices create different effects.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "'Nervous' vs 'terrified' — Version 2 uses less intense emotion word.",
                evidence: "Jamal was nervous",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Nervous' is milder than 'terrified' — readers feel concern rather than intense fear. Third person adds distance.",
                evidence: "His hands trembled",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Nervous' vs 'terrified' + third person. (b) Less intense emotion + distance → readers feel concern rather than immersive fear.",
            commonErrors: [
              "Saying 'nervous' is wrong — it's a deliberate choice for different effect.",
            ],
          },
        },
      ],
    },
  ],
};
