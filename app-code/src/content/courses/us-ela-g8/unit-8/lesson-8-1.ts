import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const NOVEL: TextExtract = {
  title: "Excerpt from a Coming-of-Age Novel",
  author: "Written for Akademik Space",
  text: "Maya had always been the quiet one — the girl who sat in the back row, who answered questions only when called on, who disappeared at lunch to the library. But when Ms. Okafor announced the debate competition, something shifted. 'I want you on my team,' Ms. Okafor said. Maya's hands went cold. 'But I—' 'You argued with me yesterday about whether the school should extend lunch periods. That was the best argument I've heard all year. You just didn't know it.'\n\nFor the first time, Maya saw herself differently. Not as the girl who stayed silent, but as someone whose words mattered.",
};

const NOVEL2: TextExtract = {
  title: "Character Analysis Passage",
  author: "Written for Akademik Space",
  text: "Her brother Marcus never spoke about the divorce. At dinner, he ate in silence, pushing food around his plate. Maya's mother tried to fill the gaps with questions about school, about friends, about anything. Marcus just shrugged. But Maya noticed — he kept a photo of their family on the beach tucked inside his textbook, where only he could see it.",
};

export const lesson81: Lesson = {
  id: "ela8-u8-lesson-8-1",
  code: "8-1",
  title: "Theme and Character Analysis",
  goal: "I CAN identify themes and analyze how characters' traits, motivations, and relationships develop.",
  standards: ["RL.8.1", "RL.8.2", "RL.8.3", "RL.8.5", "RL.8.6"],
  vocabulary: [
    {
      term: "Theme",
      definition:
        "The central message or insight about life that the story conveys.",
    },
    {
      term: "Character development",
      definition: "How a character changes or stays the same over time.",
    },
    {
      term: "Motivation",
      definition: "The reason a character acts as they do.",
    },
    {
      term: "Indirect characterization",
      definition: "Revealing character through actions, dialogue, thoughts.",
    },
    {
      term: "Archetype",
      definition: "Universal character type (hero, mentor, foil).",
    },
    {
      term: "Round vs flat character",
      definition: "Complex/multifaceted vs one-dimensional.",
    },
  ],
  concepts: [
    {
      id: "ela8-u8-theme",
      title: "Theme identification",
      skill:
        "Identify themes by analyzing what the story reveals about life, not just what happens.",
      lesson: {
        sections: [
          {
            heading: "Theme vs plot",
            body: "**Plot** is what happens (Maya joins debate team); **theme** is what it means (finding your voice, self-discovery, courage). Themes are universal — they apply beyond the story: 'Finding your voice' applies to anyone who learns to speak up. Look for patterns: what does the protagonist learn? What does the story suggest about life? Themes are never stated directly — they emerge from the story's events and character growth.",
          },
          {
            heading: "Supporting evidence",
            body: "Support theme claims with specific evidence: Maya's hands going cold shows fear; Ms. Okafor's 'you just didn't know it' reveals the theme of unrecognized potential; Maya seeing herself 'differently' marks transformation. Theme analysis requires connecting character growth to universal insight — not just summarizing events.",
          },
        ],
        keyFormulas: [
          {
            name: "Theme = insight",
            statement:
              "What the story reveals about life, not just what happens.",
          },
          {
            name: "Universal",
            statement: "Themes apply beyond the story to human experience.",
          },
          {
            name: "Evidence-based",
            statement:
              "Support with specific moments showing character growth.",
          },
        ],
        workedExample: {
          problem: "What is the theme of Maya's story?",
          solution:
            "Finding your voice / self-discovery. Evidence: Maya's silence → Ms. Okafor recognizing her argument → Maya seeing herself differently. Theme: 'We often don't recognize our own potential until someone else sees it.'",
        },
      },
      questions: [
        {
          id: "ela8-u8-theme-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NOVEL,
          stem: "What is the main theme of Maya's story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teachers are helpful" },
              { id: "b", text: "Finding your voice / self-discovery" },
              { id: "c", text: "Debate is important" },
              { id: "d", text: "School is hard" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement: "Universal insight about life.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maya transforms from silent to confident — theme is about self-discovery, not just debate.",
                evidence: "Maya saw herself differently",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Finding your voice / self-discovery.",
            commonErrors: ["Choosing (a) — debate is the plot, not the theme."],
          },
        },
        {
          id: "ela8-u8-theme-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NOVEL,
          stem: "Identify two pieces of evidence supporting the theme of unrecognized potential.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme evidence",
                statement: "Support claims with text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence 1: Ms. Okafor says 'you just didn't know it' — Maya didn't recognize her own ability.",
                evidence: "you just didn't know it",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Evidence 2: Maya's hands went cold — shows fear/uncertainty about her ability.",
                evidence: "Maya's hands went cold",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both show she had potential she didn't recognize until someone pointed it out.",
                evidence: "someone whose words mattered",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "1. 'You just didn't know it' — she didn't recognize her argument skill. 2. 'Maya's hands went cold' — fear shows uncertainty about her potential.",
            commonErrors: ["Quoting plot events without connecting to theme."],
          },
        },
        {
          id: "ela8-u8-theme-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NOVEL,
          stem: "Write a paragraph analyzing how Maya's character develops, citing specific evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character analysis",
                statement: "Trace development with evidence.",
              },
              {
                kind: "skill",
                name: "Theme connection",
                statement: "Link character growth to theme.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Beginning: Maya is 'the quiet one' — sits in back, answers only when called on, disappears at lunch.",
                evidence: "the girl who sat in the back row",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Turning point: Ms. Okafor recognizes her argument — 'that was the best argument I've heard all year.'",
                evidence: "I want you on my team",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "End: Maya 'saw herself differently' — transformation from silent to someone whose words matter.",
                evidence: "Not as the girl who stayed silent",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme connection: story shows we often don't see our own potential until someone else reflects it back.",
                evidence: "someone whose words mattered",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Maya begins as 'the quiet one' who stays silent. Ms. Okafor's recognition of her debate argument becomes a turning point — she sees herself differently. This shows theme of unrecognized potential: we often don't see our abilities until someone else reflects them.",
            commonErrors: ["Summarizing plot without analyzing development."],
          },
        },
        {
          id: "ela8-u8-theme-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NOVEL2,
          parts: [
            {
              label: "a",
              prompt:
                "What does Marcus's hidden photo reveal about his character?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does the author use indirect characterization?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Indirect characterization",
                statement: "Actions reveal inner life.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Photo shows he still loves family despite silence — grief without words.",
                evidence: "tucked inside his textbook",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Author shows through actions (silence, photo) not stating 'Marcus was sad' — reader infers.",
                evidence: "pushing food around his plate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) He still loves family — grief without words. (b) Author shows through actions/details, not direct statements.",
            commonErrors: [
              "Stating emotion directly — should infer from details.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u8-character",
      title: "Character development and relationships",
      skill:
        "Analyze how characters change, relate to each other, and serve different story functions.",
      lesson: {
        sections: [
          {
            heading: "Character arcs",
            body: "A **character arc** is the transformation: Maya goes from invisible to visible. Track: what does the character want? What obstacles do they face? How do they change? **Static characters** stay the same (Ms. Okafor as consistent mentor); **dynamic characters** change (Maya's transformation). Relationships reveal character: Maya and Ms. Okafor's teacher-student bond enables growth; Maya and Marcus's sibling silence shows different coping.",
          },
          {
            heading: "Character functions",
            body: "Characters serve purposes: **protagonist** (Maya — drives story), **mentor** (Ms. Okafor — guides growth), **foil** (Marcus — contrasts Maya's transformation with his silence), **antagonist** (internal fear — Maya's self-doubt). Understanding function helps analyze why characters exist and how they contribute to theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Character arc",
            statement: "Want → obstacle → change → new understanding.",
          },
          {
            name: "Dynamic vs static",
            statement: "Changes vs stays the same.",
          },
          {
            name: "Character function",
            statement:
              "Protagonist drives; mentor guides; foil contrasts; antagonist opposes.",
          },
        ],
        workedExample: {
          problem: "What is Maya's character arc?",
          solution:
            "Want: to be seen/valued. Obstacle: self-doubt and silence. Change: Ms. Okafor recognizes her potential. New understanding: her words matter. Arc: invisible → visible, silent → confident.",
        },
      },
      questions: [
        {
          id: "ela8-u8-character-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NOVEL,
          stem: "What type of character is Maya?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Antagonist" },
              { id: "b", text: "Static" },
              { id: "c", text: "Flat" },
              { id: "d", text: "Dynamic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dynamic character",
                statement: "Changes over time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maya transforms from silent to confident — dynamic.",
                evidence: "saw herself differently",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Dynamic — she changes.",
            commonErrors: ["Choosing (a) — she clearly changes."],
          },
        },
        {
          id: "ela8-u8-character-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NOVEL2,
          stem: "How does Marcus function as a foil to Maya?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Foil character",
                statement: "Contrast reveals traits.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Maya transforms and finds voice; Marcus stays silent and withdrawn.",
                evidence: "Marcus never spoke about the divorce",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Their contrast shows different responses to hardship — Maya grows, Marcus retreats.",
                evidence: "Maya noticed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Foil function: Marcus's silence highlights Maya's emerging voice.",
                evidence: "tucked inside his textbook",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Marcus is a foil — his silence contrasts with Maya's emerging voice, showing different responses to hardship.",
            commonErrors: [
              "Saying he's antagonist — he's not opposing, just contrasting.",
            ],
          },
        },
        {
          id: "ela8-u8-character-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NOVEL,
          stem: "Analyze the relationship between Maya and Ms. Okafor. How does it enable Maya's growth?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Relationship analysis",
                statement: "How characters affect each other.",
              },
              {
                kind: "skill",
                name: "Mentor function",
                statement: "Guide enables transformation.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Ms. Okafor sees potential Maya doesn't — 'that was the best argument I've heard all year.'",
                evidence: "I want you on my team",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "She names Maya's hidden ability — 'you just didn't know it' — reflecting her potential back.",
                evidence: "you just didn't know it",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This recognition becomes catalyst — Maya 'saw herself differently.'",
                evidence: "Not as the girl who stayed silent",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Mentor function: guide who sees what protagonist can't, enabling transformation.",
                evidence: "someone whose words mattered",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Ms. Okafor acts as mentor — she recognizes Maya's debate skill that Maya herself didn't see. Her affirmation becomes catalyst for Maya's transformation from silent to confident.",
            commonErrors: [
              "Describing relationship without analyzing its function.",
            ],
          },
        },
        {
          id: "ela8-u8-character-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NOVEL,
          parts: [
            {
              label: "a",
              prompt: "Name Maya's character arc stages.",
              marks: 2,
            },
            { label: "b", prompt: "What obstacle does Maya face?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Arc analysis",
                statement: "Track transformation stages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Want (be seen) → obstacle (silence/self-doubt) → change (Ms. Okafor's recognition) → new understanding (words matter).",
                evidence: "character arc",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Self-doubt and habit of silence — 'the girl who sat in the back row.'",
                evidence: "quiet one",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Want → obstacle → change → new understanding. (b) Self-doubt and habit of silence.",
            commonErrors: [
              "Listing events instead of tracking transformation.",
            ],
          },
        },
      ],
    },
    {
      id: "ela8-u8-pov",
      title: "Point of view and narration",
      skill:
        "Analyze how point of view shapes reader understanding and narrative reliability.",
      lesson: {
        sections: [
          {
            heading: "Point of view types",
            body: "**First person** ('I') — intimate but limited to narrator's knowledge; narrator may be unreliable. **Third person limited** ('she/he') — follows one character closely; other characters' thoughts unknown. **Third person omniscient** ('they/all') — knows all characters' thoughts; most flexible. **Second person** ('you') — rare, immersive. Point of view determines what readers know and when they know it.",
          },
          {
            heading: "Reliability and bias",
            body: "Narrators can be **reliable** (honest, accurate) or **unreliable** (biased, mistaken, lying). First-person narrators often have blind spots. Ask: does the narrator's perspective limit our understanding? Does their bias shape what we see? Maya's first-person 'I' would show her fear and growth directly; third-person limited would show same but with slight distance.",
          },
        ],
        keyFormulas: [
          {
            name: "POV determines knowledge",
            statement: "What readers know depends on narrator's perspective.",
          },
          {
            name: "Reliability",
            statement: "Ask: is narrator honest? Do they have blind spots?",
          },
          {
            name: "First vs third",
            statement:
              "First = intimate; third limited = close but slightly distant.",
          },
        ],
        workedExample: {
          problem:
            "How would Maya's story change if told in third person omniscient?",
          solution:
            "We'd see Ms. Okafor's thoughts too — maybe she'd reveal she noticed Maya's argument ability earlier. Different information, different emphasis — omniscient gives more complete picture.",
        },
      },
      questions: [
        {
          id: "ela8-u8-pov-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NOVEL,
          stem: "The excerpt uses which point of view?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Third person limited" },
              { id: "b", text: "Third person omniscient" },
              { id: "c", text: "Second person" },
              { id: "d", text: "First person" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Third limited",
                statement: "Follows one character closely.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Maya had always been' — third person, follows Maya closely but doesn't reveal other thoughts.",
                evidence: "Maya had always been the quiet one",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Third person limited.",
            commonErrors: [
              "Choosing (c) — omniscient would show Ms. Okafor's thoughts too.",
            ],
          },
        },
        {
          id: "ela8-u8-pov-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NOVEL,
          stem: "How does third-person limited POV affect our understanding of Ms. Okafor?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV limitations",
                statement: "What we don't know matters.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We only see Ms. Okafor through Maya's eyes — her thoughts and motivations unknown.",
                evidence: "Ms. Okafor announced",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "This creates mystery — we wonder why she chose Maya, what she really thinks.",
                evidence: "I want you on my team",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Limited POV focuses attention on Maya's experience — mentor's inner life stays hidden.",
                evidence: "you just didn't know it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "We see Ms. Okafor only through Maya's eyes — her thoughts/motivations unknown, creating mystery and focusing on Maya's transformation.",
            commonErrors: [
              "Assuming we know her thoughts — limited POV restricts knowledge.",
            ],
          },
        },
        {
          id: "ela8-u8-pov-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NOVEL,
          stem: "Rewrite the opening in first person from Maya's perspective, then explain how POV changes the reader experience.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV rewriting",
                statement: "Change perspective intentionally.",
              },
              {
                kind: "skill",
                name: "Effect analysis",
                statement: "Explain how POV shapes meaning.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "First person: 'I had always been the quiet one...' — more intimate, direct access to Maya's feelings.",
                evidence: "I had always been the quiet one",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "POV change makes fear more immediate: 'My hands went cold' vs 'Maya's hands went cold.'",
                evidence: "Maya's hands went cold",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explain: first person creates intimacy; third limited creates slight distance while staying close.",
                evidence: "point of view",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "First person: 'I had always been the quiet one — the girl who sat in the back row...' Changes: more intimate, direct emotional access, less narrative distance.",
            commonErrors: [
              "Changing pronouns without adjusting voice — first person needs 'I' throughout.",
            ],
          },
        },
        {
          id: "ela8-u8-pov-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NOVEL2,
          parts: [
            { label: "a", prompt: "What POV does this excerpt use?", marks: 1 },
            {
              label: "b",
              prompt: "How does POV limit what we know about Marcus?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "POV identification",
                statement: "Recognize narrative perspective.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Third person limited — 'Her brother Marcus' and 'Maya noticed.'",
                evidence: "Maya noticed",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "We see Marcus through Maya's observations — his silence, photo — but not his thoughts or feelings directly.",
                evidence: "Marcus never spoke about the divorce",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Third person limited. (b) We see Marcus only through Maya's observations — his internal grief stays hidden.",
            commonErrors: [
              "Thinking we know his feelings — limited POV restricts.",
            ],
          },
        },
      ],
    },
  ],
};
