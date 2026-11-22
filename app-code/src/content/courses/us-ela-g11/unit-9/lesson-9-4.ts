import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const POETRY: TextExtract = {
  title: "Poetry Analysis: 'The Road Not Taken' (Frost)",
  author: "Robert Frost, 1916",
  text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
  note: "Public domain — Robert Frost.",
};

const DRAMA: TextExtract = {
  title: "Drama Analysis: Soliloquy Structure",
  author: "Written for Akademik Space",
  text: "A soliloquy is a dramatic device where a character speaks their thoughts aloud, alone on stage. Unlike dialogue, soliloquies reveal interiority — what the character truly thinks, not what they say to others.\n\nConsider a hypothetical soliloquy: 'To be or not to be — that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles and by opposing end them.'\n\nThe soliloquy functions on multiple levels: it reveals character (internal conflict), advances plot (decision-making), creates tension (audience knows what others don't), and develops theme (existential questioning). The speaker's isolation is literal — alone on stage — and metaphorical — isolated in their thoughts.",
};

const MEDIA: TextExtract = {
  title: "Media Literacy: Analyzing Advertisements",
  author: "Written for Akademik Space",
  text: "Advertisements use sophisticated techniques to persuade. Consider a hypothetical ad for a sports drink: a muscular athlete crossing the finish line first, veins bulging, wearing the product's logo prominently.\n\nTechniques: **celebrity/athlete endorsement** (borrowed credibility), **idealized body image** (aspiration), **color psychology** (red = energy, blue = trust), **urgency** ('limited time'), **social proof** ('millions choose us'). The ad doesn't just sell a drink — it sells an identity: 'Drink this, become this.'\n\nMedia literacy requires asking: Who created this? What's their goal? What techniques are used? What values are promoted? What's omitted? The athletic image omits: sugar content, health effects, who actually benefits. Critical analysis reveals persuasion strategies, not just message content.",
};

export const lesson94: Lesson = {
  id: "ela11-u9-lesson-9-4",
  code: "9-4",
  title: "Poetry, Drama, and Media Analysis",
  goal: "I CAN analyze poetry, drama, and media using integrated literary and rhetorical skills.",
  standards: [
    "RL.11-12.1",
    "RL.11-12.2",
    "RL.11-12.4",
    "RL.11-12.5",
    "RL.11-12.6",
    "RI.11-12.7",
    "RI.11-12.8",
  ],
  vocabulary: [
    {
      term: "Soliloquy",
      definition: "Character speaking thoughts aloud alone.",
    },
    { term: "Metaphor", definition: "Implicit comparison." },
    { term: "Symbolism", definition: "Object represents abstract idea." },
    {
      term: "Media literacy",
      definition: "Critical analysis of media messages.",
    },
    { term: "Persuasion techniques", definition: "Methods used to influence." },
    { term: "Omission", definition: "What's left out of message." },
  ],
  concepts: [
    {
      id: "ela11-u9-poetry",
      title: "Poetry analysis: Frost's 'The Road Not Taken'",
      skill: "Analyze poetic devices, ambiguity, and thematic complexity.",
      lesson: {
        sections: [
          {
            heading: "Poetic structure and ambiguity",
            body: "Frost's poem operates on multiple levels: **literal** (choosing between two paths), **symbolic** (life choices, regret), **ironic** (the 'less traveled' road is actually 'really about the same'). The famous ending 'I took the one less traveled by' is often misread as celebration of individualism — but Frost's tone ('with a sigh,' 'doubted if I should ever come back') suggests regret, not triumph.",
          },
          {
            heading: "Ambiguity and interpretation",
            body: "The poem's power lies in ambiguity: is the speaker boasting or confessing? 'I shall be telling this with a sigh' — sigh of satisfaction or regret? Frost deliberately leaves this unresolved. This ambiguity is the poem's genius — it means different things to different readers based on their own experiences with choice and regret.",
          },
        ],
        keyFormulas: [
          { name: "Three levels", statement: "Literal + symbolic + ironic." },
          { name: "Ambiguity", statement: "Deliberately unresolved meaning." },
          { name: "Tone", statement: "Sigh suggests regret, not triumph." },
        ],
        workedExample: {
          problem: "What does 'the one less traveled by' really mean?",
          solution:
            "Ambiguous — could be celebration or confession; 'really about the same' suggests irony.",
        },
      },
      questions: [
        {
          id: "ela11-u9-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POETRY,
          stem: "What makes 'The Road Not Taken' ambiguous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It's random" },
              { id: "b", text: "It's boring" },
              { id: "c", text: "It's unclear" },
              { id: "d", text: "Deliberately unresolved meaning" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ambiguity",
                statement: "Unresolved meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ambiguity = deliberately unresolved — poem means different things to different readers.",
                evidence: "ambiguity",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Deliberately unresolved meaning.",
            commonErrors: ["Thinking it's just unclear."],
          },
        },
        {
          id: "ela11-u9-poetry-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POETRY,
          stem: "Analyze the irony in 'the one less traveled by.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Irony analysis",
                statement: "Opposite meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Surface: 'less traveled' suggests uniqueness/individualism.",
                evidence: "surface",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ironic: 'really about the same' — roads weren't actually different.",
                evidence: "ironic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: challenges celebration of individual choice — may be self-deception.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Less traveled' suggests uniqueness, but 'really about the same' reveals irony — challenges individualism narrative.",
            commonErrors: ["Missing irony."],
          },
        },
        {
          id: "ela11-u9-poetry-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POETRY,
          stem: "Analyze how Frost's tone creates ambiguity in the poem's ending.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "How attitude affects meaning.",
              },
              {
                kind: "skill",
                name: "Ambiguity study",
                statement: "Deliberate uncertainty.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "'With a sigh' — suggests regret or wistfulness, not triumph.",
                evidence: "sigh",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Doubted if I should ever come back' — uncertainty about choice.",
                evidence: "doubted",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ambiguity: ending could be boast or confession — Frost leaves unresolved.",
                evidence: "ambiguity",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Tone creates ambiguity: 'with a sigh' suggests regret, 'doubted if I should ever come back' shows uncertainty — ending could be boast or confession. Frost deliberately leaves unresolved.",
            commonErrors: ["Reading ending as simple triumph."],
          },
        },
        {
          id: "ela11-u9-poetry-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POETRY,
          parts: [
            {
              label: "a",
              prompt: "What are the three levels of meaning in the poem?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example of each.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poem meaning levels",
                statement: "Three layers.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Literal (choosing path), symbolic (life choices), ironic (roads same).",
                evidence: "levels",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Examples: literal (two roads), symbolic (life decisions), ironic ('really about the same').",
                evidence: "examples",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Literal + symbolic + ironic. (b) Path choice, life decisions, roads same.",
            commonErrors: ["Missing levels."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-drama",
      title: "Drama analysis: Soliloquy and dramatic devices",
      skill:
        "Analyze dramatic techniques — soliloquy, aside, stage directions, dramatic irony.",
      lesson: {
        sections: [
          {
            heading: "Soliloquy function",
            body: "Soliloquy = character speaking thoughts aloud, alone on stage. Functions: **reveal interiority** (true thoughts vs spoken words), **advance plot** (decision-making), **create tension** (audience knows what others don't), **develop theme** (existential questioning). The hypothetical Hamlet soliloquy: 'To be or not to be' — reveals internal conflict, advances plot (suicide contemplation), creates tension (audience knows character's despair), develops theme (existence meaning).",
          },
          {
            heading: "Dramatic irony",
            body: "Dramatic irony = audience knows something characters don't. In soliloquy, audience hears true thoughts while other characters remain ignorant. This creates tension: will the character act on their true thoughts, or will they be discovered? Dramatic devices serve dramatic purpose — they engage audience intellectually and emotionally.",
          },
        ],
        keyFormulas: [
          {
            name: "Soliloquy",
            statement: "Interior revelation + plot + tension + theme.",
          },
          {
            name: "Dramatic irony",
            statement: "Audience knows more than characters.",
          },
          { name: "Dramatic devices", statement: "Serve dramatic purpose." },
        ],
        workedExample: {
          problem: "How does soliloquy function dramatically?",
          solution:
            "Reveals interiority, advances plot, creates tension, develops theme.",
        },
      },
      questions: [
        {
          id: "ela11-u9-drama-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DRAMA,
          stem: "What's a 'soliloquy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stage direction" },
              { id: "b", text: "Dialogue between characters" },
              { id: "c", text: "Character speaking thoughts aloud alone" },
              { id: "d", text: "Narrator explaining" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Alone on stage.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Soliloquy = character speaks thoughts aloud, alone on stage.",
                evidence: "soliloquy",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Character speaking thoughts aloud alone.",
            commonErrors: ["Confusing with dialogue."],
          },
        },
        {
          id: "ela11-u9-drama-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DRAMA,
          stem: "Identify two functions of soliloquy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Soliloquy function",
                statement: "Dramatic purposes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reveal interiority: 'true thoughts vs spoken words.'",
                evidence: "interiority",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Create tension: audience knows what others don't — dramatic irony.",
                evidence: "tension",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Develop theme: existential questioning — deeper significance.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Reveal interiority, create tension, develop theme.",
            commonErrors: ["Missing functions."],
          },
        },
        {
          id: "ela11-u9-drama-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: DRAMA,
          stem: "Analyze how dramatic irony functions in soliloquy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Dramatic irony",
                statement: "Audience advantage.",
              },
              {
                kind: "skill",
                name: "Dramatic analysis",
                statement: "How irony works.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Audience knows: soliloquy reveals true thoughts — other characters don't.",
                evidence: "audience",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tension: will character act on true thoughts, or be discovered?",
                evidence: "tension",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: engages audience intellectually/emotionally — dramatic purpose.",
                evidence: "effect",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Dramatic irony: audience knows true thoughts, characters don't — creates tension (will they act?), engages audience intellectually/emotionally.",
            commonErrors: ["Missing irony function."],
          },
        },
        {
          id: "ela11-u9-drama-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: DRAMA,
          parts: [
            { label: "a", prompt: "What's 'dramatic irony'?", marks: 2 },
            {
              label: "b",
              prompt: "How does it function in soliloquy?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience advantage.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Audience knows something characters don't.",
                evidence: "irony",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Soliloquy reveals true thoughts — audience knows, others don't.",
                evidence: "function",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Audience knows more. (b) Soliloquy reveals truths others don't know.",
            commonErrors: ["Confusing with other irony."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-media",
      title: "Media literacy: Analyzing persuasion",
      skill:
        "Analyze advertising techniques and evaluate media messages critically.",
      lesson: {
        sections: [
          {
            heading: "Persuasion techniques",
            body: "Advertisements use: **celebrity endorsement** (borrowed credibility), **idealized imagery** (aspiration), **color psychology** (red=energy, blue=trust), **urgency** ('limited time'), **social proof** ('millions choose us'). The sports drink ad: athlete crossing finish line = borrowed credibility + aspiration; 'limited time' = urgency; 'millions choose' = social proof. Ad sells identity, not just product.",
          },
          {
            heading: "Critical analysis questions",
            body: "Media literacy asks: **Who created this?** (source credibility) **What's their goal?** (persuasion) **What techniques?** (how they persuade) **What values?** (what's promoted) **What's omitted?** (what's hidden). The drink ad omits: sugar content, health effects, who benefits. Critical analysis reveals persuasion strategies, not just message content.",
          },
        ],
        keyFormulas: [
          {
            name: "Techniques",
            statement: "Endorsement, imagery, color, urgency, social proof.",
          },
          {
            name: "Five questions",
            statement: "Who, goal, techniques, values, omitted.",
          },
          { name: "Sells identity", statement: "Not just product." },
        ],
        workedExample: {
          problem: "How does the sports drink ad persuade?",
          solution:
            "Athlete endorsement (credibility) + aspiration (ideal body) + urgency (limited time) + social proof (millions).",
        },
      },
      questions: [
        {
          id: "ela11-u9-media-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEDIA,
          stem: "What does 'borrowed credibility' mean in advertising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying competitors" },
              { id: "b", text: "Making false claims" },
              { id: "c", text: "Using celebrity/athlete to gain trust" },
              { id: "d", text: "Paying for reviews" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Borrowed credibility",
                statement: "Celebrity trust.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Borrowed credibility = using celebrity/athlete to gain trust for product.",
                evidence: "credibility",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. Using celebrity/athlete to gain trust.",
            commonErrors: ["Not recognizing technique."],
          },
        },
        {
          id: "ela11-u9-media-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: MEDIA,
          stem: "Identify two persuasion techniques in the sports drink ad.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Persuasion analysis",
                statement: "Technique identification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Celebrity/athlete endorsement: muscular athlete = borrowed credibility.",
                evidence: "endorsement",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Idealized imagery: 'veins bulging' = aspiration/identity.",
                evidence: "imagery",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Urgency/social proof: 'limited time,' 'millions choose us.'",
                evidence: "urgency",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Athlete endorsement, idealized imagery, urgency, social proof.",
            commonErrors: ["Missing techniques."],
          },
        },
        {
          id: "ela11-u9-media-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEDIA,
          stem: "Analyze how the ad sells identity rather than just product.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media analysis",
                statement: "How ads persuade.",
              },
              {
                kind: "skill",
                name: "Identity marketing",
                statement: "Selling self-image.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Athlete image: muscular, victorious — idealized self.",
                evidence: "image",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Association: drink = athletic success = identity.",
                evidence: "association",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Omission: sugar/health effects hidden — focus on aspiration, not facts.",
                evidence: "omission",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Ad sells identity: athlete image (idealized self) + association (drink=success) + omission (health effects hidden). Persuades through aspiration, not product benefits.",
            commonErrors: ["Thinking ad only sells product."],
          },
        },
        {
          id: "ela11-u9-media-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: MEDIA,
          parts: [
            {
              label: "a",
              prompt: "What are the five critical analysis questions?",
              marks: 2,
            },
            { label: "b", prompt: "Why is 'omission' important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical questions",
                statement: "Analysis framework.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Who, goal, techniques, values, omitted.",
                evidence: "questions",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Omission reveals what's hidden — sugar/health effects not mentioned.",
                evidence: "omission",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Five questions. (b) Omission reveals hidden information.",
            commonErrors: ["Missing questions."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-comparative",
      title: "Comparative literature analysis",
      skill:
        "Compare texts across genres, periods, and styles to understand literary evolution.",
      lesson: {
        sections: [
          {
            heading: "Comparative framework",
            body: "Comparing texts requires: **identify similarities** (shared themes/techniques), **identify differences** (genre, period, style), **analyze significance** (what differences reveal). Compare Frost's poem (symbolic, ambiguous) with Crane's Naturalism (deterministic, objective) — both explore human struggle but through different lenses: Frost through choice/regret, Crane through fate/indifference.",
          },
          {
            heading: "Literary evolution",
            body: "American literature evolved: Puritan (moral certainty) → Romantic (individualism) → Realism (objective observation) → Naturalism (determinism) → Modernism (fragmentation). Each movement responds to previous — Naturalism extends Realism by adding determinism. Understanding evolution reveals how literary concerns change over time.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative framework",
            statement: "Similarities + differences + significance.",
          },
          {
            name: "Literary evolution",
            statement: "Movements respond to each other.",
          },
          {
            name: "Different lenses",
            statement: "Same theme, different approaches.",
          },
        ],
        workedExample: {
          problem: "How do Frost and Crane differ in exploring human struggle?",
          solution:
            "Frost: choice/regret (symbolic). Crane: fate/indifference (deterministic).",
        },
      },
      questions: [
        {
          id: "ela11-u9-comparative-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POETRY,
          stem: "What's the main difference between Frost's and Crane's approaches?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Frost = choice/regret; Crane = fate/indifference",
              },
              { id: "b", text: "Frost is better" },
              { id: "c", text: "Crane is better" },
              { id: "d", text: "No difference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative approaches",
                statement: "Different lenses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Frost explores choice/regret; Crane explores fate/indifference.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Frost = choice/regret; Crane = fate/indifference.",
            commonErrors: ["Not recognizing differences."],
          },
        },
        {
          id: "ela11-u9-comparative-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: POETRY,
          stem: "How does literary evolution show movement progression?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literary evolution",
                statement: "Movement progression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Puritan → Romantic → Realism → Naturalism → Modernism.",
                evidence: "progression",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Each responds to previous — Naturalism extends Realism with determinism.",
                evidence: "responds",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows how literary concerns change over time.",
                evidence: "change",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Movements progress: each responds to previous — concerns change over time.",
            commonErrors: ["Not seeing progression."],
          },
        },
        {
          id: "ela11-u9-comparative-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POETRY,
          stem: "Analyze how comparing texts reveals different approaches to similar themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative analysis",
                statement: "How comparison works.",
              },
              {
                kind: "skill",
                name: "Theme study",
                statement: "Different lenses.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Frost: human struggle through choice/regret — symbolic, ambiguous.",
                evidence: "Frost",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Crane: human struggle through fate/indifference — deterministic, objective.",
                evidence: "Crane",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Comparison reveals: same theme (struggle), different approaches (choice vs fate).",
                evidence: "reveal",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Comparison reveals different approaches: Frost explores struggle through choice/regret (symbolic), Crane through fate/indifference (deterministic). Same theme, different lenses.",
            commonErrors: ["Analyzing separately."],
          },
        },
        {
          id: "ela11-u9-comparative-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: POETRY,
          parts: [
            {
              label: "a",
              prompt: "What are the three comparative framework elements?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative framework",
                statement: "Three elements.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Similarities, differences, significance.",
                evidence: "elements",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: Frost vs Crane — shared struggle theme, different approaches (choice vs fate).",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Similarities, differences, significance. (b) Frost vs Crane example.",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-integrated-r4",
      title: "Integrated Literary and Rhetorical Practice",
      skill:
        "Integrate poetry, drama, media, and comparative analysis in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Grade 11 literary analysis integrates: **poetry** (devices, ambiguity), **drama** (soliloquy, irony), **media** (persuasion techniques), **comparative** (across genres/periods). Exam questions often require analyzing multiple text types — 'Compare how Frost's poem and Crane's story explore human struggle.'",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify text type → analyze devices → evaluate purpose → compare/contrast → conclude significance. Each skill alone is partial; together reveal literary mastery.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Poetry + drama + media + comparative.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine literary analyses." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze literary texts?",
          solution:
            "Identify type → analyze devices → evaluate purpose → compare → conclude.",
        },
      },
      questions: [
        {
          id: "ela11-u9-integrated-q1-r4",
          difficulty: "foundation",
          totalMarks: 1,
          extract: POETRY,
          stem: "What four literary skills are needed for comprehensive analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Poetry + drama + media + comparative" },
              { id: "b", text: "Only poetry" },
              { id: "c", text: "Only grammar" },
              { id: "d", text: "Only history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive literary",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poetry + drama + media + comparative = comprehensive.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Poetry + drama + media + comparative.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u9-integrated-q2-r4",
          difficulty: "core",
          totalMarks: 3,
          extract: POETRY,
          stem: "Apply two literary skills to Frost's poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poetry: ambiguity ('sigh,' 'doubted') — unresolved meaning.",
                evidence: "poetry",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Comparative: Frost vs Crane — choice/regret vs fate/indifference.",
                evidence: "comparative",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Purpose: explore human struggle through different lenses.",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Poetry (ambiguity), comparative (Frost vs Crane), purpose (struggle).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u9-integrated-q3-r4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: POETRY,
          stem: "Write an analysis paragraph on how Frost's poem and Crane's story explore human struggle differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Frost: choice/regret — symbolic, ambiguous ('sigh,' 'doubted').",
                evidence: "Frost",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Crane: fate/indifference — deterministic, objective ('Nature does not care').",
                evidence: "Crane",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Comparison: same theme (struggle), different approaches — choice vs fate.",
                evidence: "comparison",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Frost explores struggle through choice/regret (symbolic, ambiguous), Crane through fate/indifference (deterministic, objective). Same theme, different lenses — comparison reveals literary diversity.'",
            commonErrors: ["Analyzing separately."],
          },
        },
        {
          id: "ela11-u9-integrated-q4-r4",
          difficulty: "core",
          totalMarks: 4,
          extract: POETRY,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated literary analysis stronger?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal literary mastery.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: poetry+drama+media+comparative shows comprehensive analysis — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal mastery. (b) Four skills show comprehensiveness.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
