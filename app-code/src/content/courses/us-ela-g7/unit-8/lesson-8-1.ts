import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "../unit-1/levels.ts";

const VOCABPASSAGE: TextExtract = {
  title: "Vocabulary in Context",
  author: "Written for Akademik Space",
  text: "The hikers were exhausted after the steep climb, but the view from the summit was magnificent. Mara felt a surge of pride as she looked out over the valley. She had almost turned back twice, but her determination kept her going. At the top, she was breathless and her legs ached, yet she smiled — the effort had been worthwhile.",
};

const SYNONYMDRILL: TextExtract = {
  title: "Word Choice Practice",
  author: "Written for Akademik Space",
  text: "The old house was abandoned for years. Windows were broken, paint peeled, and weeds grew through the cracked driveway. The neighborhood children dared each other to run inside — none ever did.",
};

export const lesson81: Lesson = {
  id: "ela7-u8-lesson-8-1",
  code: "8-1",
  title: "Vocabulary in Context",
  goal: "I CAN determine word meanings from context, distinguish shades of meaning, and choose precise words.",
  standards: [
    "L.7.4a",
    "L.7.4b",
    "L.7.4c",
    "L.7.4d",
    "L.7.5a",
    "L.7.5b",
    "L.7.5c",
  ],
  vocabulary: [
    {
      term: "Context clue",
      definition:
        "Information in surrounding text that helps determine word meaning.",
    },
    { term: "Synonym", definition: "A word with the same or similar meaning." },
    { term: "Antonym", definition: "A word with the opposite meaning." },
    {
      term: "Connotation",
      definition:
        "The emotional association a word carries beyond its dictionary meaning.",
    },
    {
      term: "Denotation",
      definition: "The literal dictionary meaning of a word.",
    },
    {
      term: "Precise word",
      definition: "The exact word that best fits meaning and tone.",
    },
  ],
  concepts: [
    {
      id: "ela7-u8-context",
      title: "Using context clues",
      skill:
        "Determine word meaning from surrounding text using definition, contrast, and inference clues.",
      lesson: {
        sections: [
          {
            heading: "Types of context clues",
            body: "**Definition clues**: the sentence defines the word — 'Exhausted means very tired.' **Contrast clues**: 'Although exhausted, she felt proud' — 'although' signals opposite. **Example clues**: 'She was meticulous — she alphabetized her books, labeled every folder, and checked each detail twice.' **Inference clues**: you deduce meaning from the situation — 'He was famished, so he ate three sandwiches.'",
          },
          {
            heading: "Shades of meaning",
            body: "Words with similar meanings differ in intensity and tone: 'walked' < 'strolled' < 'marched' < 'trudged'. 'Happy' < 'glad' < 'delighted' < 'elated'. Choosing the precise word matters — 'trudged up the mountain' implies effort and weariness that 'walked' doesn't capture.",
          },
        ],
        keyFormulas: [
          {
            name: "Context clue types",
            statement:
              "Definition, contrast, example, inference — four ways to decode unknown words.",
          },
          {
            name: "Signal words",
            statement:
              "'although' = contrast; 'such as' = example; commas + appositive = definition.",
          },
          {
            name: "Shades of meaning",
            statement:
              "Synonyms differ in intensity and connotation — pick the precise one.",
          },
        ],
        workedExample: {
          problem:
            "What does 'worthwhile' mean in the hiking passage, and which clue type helps?",
          solution:
            "'Worthwhile' means valuable or worth the effort. The inference clue: 'the effort had been worthwhile' follows the description of struggle and achievement — the reader deduces that the hard climb paid off.",
        },
      },
      questions: [
        {
          id: "ela7-u8-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: VOCABPASSAGE,
          stem: "What does 'exhausted' mean in the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very happy" },
              { id: "b", text: "Very lost" },
              { id: "c", text: "Very cold" },
              { id: "d", text: "Very tired" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context clues",
                statement: "Surrounding text reveals meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Exhausted after the steep climb' — the context of climbing and 'legs ached' signals extreme tiredness.",
                evidence: "exhausted after the steep climb",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Exhausted = extremely tired.",
            commonErrors: [
              "Choosing (a) — 'pride' comes later, not 'exhausted'.",
            ],
          },
        },
        {
          id: "ela7-u8-context-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: VOCABPASSAGE,
          stem: "Use context clues to define 'determination' and 'worthwhile.' Explain which clue type helped for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clue analysis",
                statement: "Identify how the text reveals meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Determination' = persistence/refusing to quit. Inference clue: 'almost turned back twice, but her determination kept her going' — the contrast with 'turned back' shows she persisted.",
                evidence: "her determination kept her going",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Worthwhile' = worth the effort. Inference clue: 'the effort had been worthwhile' after describing the struggle and the view.",
                evidence: "the effort had been worthwhile",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both rely on inference — meaning is deduced from the situation rather than stated.",
                evidence: "kept her going",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Determination = persistence (inference from 'turned back twice but kept going'); worthwhile = worth the effort (inference from struggle → reward).",
            commonErrors: [
              "Saying 'determination' is defined directly — it's inferred from context.",
            ],
          },
        },
        {
          id: "ela7-u8-context-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNONYMDRILL,
          stem: "The word 'abandoned' appears in the passage. List three synonyms, rank them by intensity, and explain which fits the context best.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synonym shades",
                statement: "Synonyms differ in intensity and connotation.",
              },
              {
                kind: "skill",
                name: "Context fit",
                statement: "The right word matches meaning and tone.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning: "Synonyms: deserted, empty, neglected, forsaken.",
                evidence: "The old house was abandoned",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Intensity ranking: neglected (least) < deserted < abandoned < forsaken (most).",
                evidence: "abandoned for years",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context fit: 'abandoned' or 'deserted' fits best — the house was left for years with broken windows and weeds, suggesting it was left behind, not just temporarily empty.",
                evidence: "Windows were broken, paint peeled",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Forsaken' implies emotional abandonment — too strong for a house; 'neglected' implies carelessness rather than leaving.",
                evidence: "dared each other to run inside",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synonyms: deserted, empty, neglected, forsaken. Ranking: neglected < deserted < abandoned < forsaken. 'Abandoned' or 'deserted' fits best — the house was left for years, not just neglected or temporarily empty.",
            commonErrors: [
              "Choosing 'forsaken' — too emotionally charged for an object.",
            ],
          },
        },
        {
          id: "ela7-u8-context-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: VOCABPASSAGE,
          parts: [
            {
              label: "a",
              prompt:
                "Replace 'looked out over' with a more precise verb phrase.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how your choice changes the tone.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise word choice",
                statement: "Exact verbs create vivid imagery.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'gazed out over' or 'surveyed the valley' — more precise than 'looked out over'.",
                evidence: "looked out over the valley",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Gazed' implies long, absorbed looking — matches the moment of pride; 'surveyed' implies taking in the whole view.",
                evidence: "a surge of pride",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Gazed out over' or 'surveyed' — more precise. (b) 'Gazed' implies absorbed, prolonged looking — matches the proud moment better than neutral 'looked'.",
            commonErrors: [
              "Choosing a synonym that changes meaning — 'glanced' implies brief, not absorbed.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u8-context2",
      title: "Connotation and tone",
      skill:
        "Distinguish denotation from connotation and use tone-appropriate word choice.",
      lesson: {
        sections: [
          {
            heading: "Denotation vs connotation",
            body: "**Denotation** is the literal meaning: 'thin' = not thick. **Connotation** is the emotional association: 'thin' can mean unattractive (for people) or elegant (for models). 'Slim' has positive connotation; 'skinny' has negative. 'Frugal' is positive (wise saving); 'stingy' is negative (unwilling to share). Same meaning, different feelings.",
          },
          {
            heading: "Tone and word choice",
            body: "Word choice creates **tone** — the author's attitude toward the subject. 'The politician lied' (negative) vs 'The politician misspoke' (neutral) vs 'The politician clarified' (positive). 'Cheap' vs 'inexpensive' vs 'budget-friendly'. Matching words to intended tone is essential for persuasive and descriptive writing.",
          },
        ],
        keyFormulas: [
          { name: "Denotation", statement: "Literal dictionary meaning." },
          {
            name: "Connotation",
            statement:
              "Emotional association — positive, negative, or neutral.",
          },
          {
            name: "Tone matching",
            statement:
              "Choose words whose connotation matches your intended attitude.",
          },
        ],
        workedExample: {
          problem:
            "How does 'The old house was abandoned' differ in connotation from 'The old house was neglected'?",
          solution:
            "'Abandoned' suggests it was left behind — no one cared for it. 'Neglected' suggests someone was responsible but failed to care for it. 'Abandoned' has a stronger sense of finality and sadness; 'neglected' implies ongoing responsibility ignored.",
        },
      },
      questions: [
        {
          id: "ela7-u8-context2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNONYMDRILL,
          stem: "Which word has the most negative connotation for describing a person's body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Skinny" },
              { id: "b", text: "Slim" },
              { id: "c", text: "Slender" },
              { id: "d", text: "Thin" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement: "Emotional association beyond literal meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Skinny' has negative connotation for people; 'slim' and 'slender' are positive; 'thin' is neutral.",
                evidence: "The old house was abandoned",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. 'Skinny' has the most negative connotation.",
            commonErrors: ["Choosing 'thin' — it's neutral, not negative."],
          },
        },
        {
          id: "ela7-u8-context2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNONYMDRILL,
          stem: "Rewrite 'The old house was abandoned' three ways with different connotations: positive, neutral, and negative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation control",
                statement: "Choose words matching intended tone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Positive: 'The old house had been lovingly restored' — implies care and value.",
                evidence: "The old house was abandoned",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Neutral: 'The old house was empty' — factual, no judgment.",
                evidence: "abandoned for years",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Negative: 'The old house was a decrepit ruin' — emphasizes decay and hopelessness.",
                evidence: "Windows were broken, paint peeled",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Positive: 'lovingly restored'; Neutral: 'empty'; Negative: 'decrepit ruin' — same house, different attitudes.",
            commonErrors: [
              "Using synonyms that don't change connotation — 'old' and 'aged' are both neutral.",
            ],
          },
        },
        {
          id: "ela7-u8-context2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNONYMDRILL,
          stem: "The passage describes a 'dilapidated' house. Explain how the word's connotation differs from 'old' or 'historic,' and how it shapes the reader's response.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation analysis",
                statement: "Words carry emotional associations.",
              },
              {
                kind: "skill",
                name: "Reader response",
                statement: "Connotation shapes how readers feel.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "'Dilapidated' implies severe decay — negative connotation suggesting neglect and hopelessness.",
                evidence: "Windows were broken, paint peeled",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Old' is neutral — just states age without judgment.",
                evidence: "The old house",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Historic' is positive — implies value and significance despite age.",
                evidence: "abandoned for years",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Dilapidated' makes readers feel pity or discomfort; 'historic' makes them feel reverence; 'old' is just factual.",
                evidence: "dared each other to run inside",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Dilapidated' has negative connotation (decay, neglect); 'old' is neutral; 'historic' is positive (value). 'Dilapidated' shapes readers to feel pity or discomfort rather than reverence or indifference.",
            commonErrors: [
              "Treating all synonyms as interchangeable — connotation matters.",
            ],
          },
        },
        {
          id: "ela7-u8-context2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: SYNONYMDRILL,
          parts: [
            {
              label: "a",
              prompt:
                "Choose a word with positive connotation to replace 'abandoned.'",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Explain how your choice changes the reader's impression.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Connotation shift",
                statement: "Word choice controls reader response.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'vacant' or 'unoccupied' — neutral/less negative than 'abandoned'.",
                evidence: "The old house was abandoned",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Vacant' suggests temporary emptiness — less final than 'abandoned'; reader feels less sadness or abandonment.",
                evidence: "for years",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'Vacant' — less negative. (b) 'Vacant' implies temporary emptiness, not final abandonment — reader feels less sadness.",
            commonErrors: [
              "Choosing a word that doesn't change connotation — 'empty' is similar to 'vacant'.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u8-context3",
      title: "Precise word choice",
      skill:
        "Select exact words that convey intended meaning, imagery, and tone.",
      lesson: {
        sections: [
          {
            heading: "Vague vs precise",
            body: "Vague words: 'good', 'bad', 'thing', 'stuff', 'nice', 'went'. Precise words: 'magnificent', 'dilapidated', 'possessions', 'belongings', 'delightful', 'trudged'. 'She went to the store' → 'She trudged to the store, her shoulders heavy with groceries.' Precise verbs and nouns create vivid images.",
          },
          {
            heading: "Figurative language for precision",
            body: "**Simile**: 'as brave as a lion'. **Metaphor**: 'a heart of stone'. **Personification**: 'the wind whispered'. **Hyperbole**: 'I've told you a million times'. Figurative language isn't just decoration — it creates precise images that convey meaning more powerfully than literal description.",
          },
        ],
        keyFormulas: [
          {
            name: "Vague → precise",
            statement:
              "'went' → 'trudged'; 'good' → 'magnificent'; 'thing' → 'possessions'.",
          },
          {
            name: "Strong verbs",
            statement:
              "Precise verbs carry more meaning than adverbs — 'sprinted' > 'ran quickly'.",
          },
          {
            name: "Figurative precision",
            statement:
              "Similes, metaphors, personification create exact images.",
          },
        ],
        workedExample: {
          problem: "Improve: 'The house was old and bad.'",
          solution:
            "'The house was dilapidated — paint peeling, windows broken, weeds strangling the path.' Precise adjective + specific details replace vague 'old and bad.'",
        },
      },
      questions: [
        {
          id: "ela7-u8-context3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: VOCABPASSAGE,
          stem: "Which is the most precise verb for describing the hike up the mountain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Went" },
              { id: "b", text: "Trudged" },
              { id: "c", text: "Climbed" },
              { id: "d", text: "Walked" },
            ],
            correctChoiceIb: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise verbs",
                statement: "Exact verbs convey effort and manner.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Trudged' implies slow, weary effort — matches 'exhausted' and 'steep climb' better than neutral 'walked'.",
                evidence: "exhausted after the steep climb",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. 'Trudged' best captures the weary effort of a steep climb.",
            commonErrors: [
              "Choosing 'walked' — too neutral for an exhausting climb.",
            ],
          },
        },
        {
          id: "ela7-u8-context3-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SYNONYMDRILL,
          stem: "Replace three vague words in this sentence: 'The old house had some bad things in it.' Use precise vocabulary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precise replacement",
                statement: "Exact words create vivid images.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Old' → 'dilapidated' or 'weathered' — more specific than just 'old'.",
                evidence: "The old house had some bad things",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Bad things' → 'broken windows, peeling paint, and overgrown weeds' — concrete details.",
                evidence: "some bad things in it",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Had' → 'contained' or 'was littered with' — stronger verb.",
                evidence: "had some bad things",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The dilapidated house was littered with broken windows, peeling paint, and overgrown weeds.'",
            commonErrors: [
              "Replacing 'bad' with another vague word like 'poor' — needs concrete detail.",
            ],
          },
        },
        {
          id: "ela7-u8-context3-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SYNONYMDRILL,
          stem: "Write a vivid description of the abandoned house using at least three precise words and one figure of speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vivid description",
                statement:
                  "Precise words and figurative language create images.",
              },
              {
                kind: "skill",
                name: "Figurative language",
                statement:
                  "Simile/metaphor/personification enhance description.",
              },
            ],
            levels: levels8(),
            steps: [
              {
                reasoning:
                  "Use precise adjectives: 'dilapidated', 'crumbling', 'overgrown'.",
                evidence: "Windows were broken, paint peeled",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Use precise nouns/verbs: 'weeds strangled the driveway', 'windows gaped like empty eyes'.",
                evidence: "weeds grew through the cracked driveway",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Include figurative language: 'the house seemed to shudder', 'shadows clung to the walls'.",
                evidence: "dared each other to run inside",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Avoid vague words — no 'bad', 'old', 'things'; every word should be specific.",
                evidence: "The old house was abandoned",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The dilapidated house crouched at the end of the street, its windows gaping like empty eyes. Weeds strangled the cracked driveway, and shadows clung to the peeling walls as if the house itself were watching.'",
            commonErrors: [
              "Using figurative language that doesn't fit — 'the house danced' is whimsical, not eerie.",
            ],
          },
        },
        {
          id: "ela7-u8-context3-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: VOCABPASSAGE,
          parts: [
            {
              label: "a",
              prompt: "Replace 'a surge of pride' with a more precise phrase.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how your choice affects the emotional impact.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Emotional precision",
                statement: "Exact words convey specific feelings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Example: 'a wave of triumph' or 'a flush of accomplishment' — more specific than 'surge of pride'.",
                evidence: "a surge of pride",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "'Triumph' implies victory over difficulty; 'accomplishment' implies achieving a goal — both more precise than generic 'pride'.",
                evidence: "she smiled",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) 'A wave of triumph' or 'a flush of accomplishment.' (b) These are more specific — 'triumph' implies victory, 'accomplishment' implies achievement — stronger emotional impact than generic 'pride'.",
            commonErrors: [
              "Choosing a synonym that's still vague — 'a feeling of pride' doesn't improve precision.",
            ],
          },
        },
      ],
    },
  ],
};
