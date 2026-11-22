import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "ciege-u3-lesson-3-2",
  code: "3-2",
  title: "Descriptive Writing",
  goal: "I CAN write vivid descriptions using the five senses.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 1: description"],
  vocabulary: [
    { term: "Description", definition: "Writing that paints a picture with words." },
    { term: "Sensory detail", definition: "Description appealing to the five senses." },
    { term: "Imagery", definition: "Language creating mental pictures." },
    { term: "Adjective", definition: "A word describing a noun." },
    { term: "Show not tell", definition: "Revealing through detail rather than stating." },
  ],
  concepts: [
    {
      id: "ciege-u3-s2-senses",
      title: "Using the five senses",
      skill: "Write descriptions engaging multiple senses.",
      lesson: {
        sections: [
          {
            heading: "All five senses",
            body: "Great description uses more than sight. Add sound ('the hum of traffic'), smell ('the tang of sea air'), touch ('the rough bark') and taste ('the bitter coffee').",
          },
          {
            heading: "Specificity",
            body: "Be specific: 'the red bus' not 'the vehicle'; 'crunching gravel' not 'walking on stones'. Specific words create vivid pictures.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Describe a café using three senses.",
          solution: "'The café buzzed with conversation; the smell of fresh bread drifted from the oven; steam rose from my coffee.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s2-se-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the sense of smell?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The music was loud." },
            { id: "b", text: "The soup was hot." },
            { id: "c", text: "The air smelled of rain." },
            { id: "d", text: "The flowers were bright." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory writing", statement: "Identify sense used." }],
            steps: [
              { reasoning: "'Smelled of rain' appeals to smell.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The air smelled of rain.",
          },
        },
        {
          id: "ciege-u3-s2-se-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a sentence describing a beach using sound.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Sensory description", statement: "Sound imagery." }],
            steps: [
              { reasoning: "The sentence describes a sound.", marks: 1, markCode: "AO2" },
              { reasoning: "It is specific (waves, gulls, wind).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One sound sentence",
          },
        },
        {
          id: "ciege-u3-s2-se-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence describing a forest using two different senses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multi-sensory", statement: "Two senses in one sentence." }],
            steps: [
              { reasoning: "Two different senses used.", marks: 1, markCode: "AO2" },
              { reasoning: "Descriptive words are specific.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One multi-sensory sentence",
          },
        },
        {
          id: "ciege-u3-s2-se-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a busy market square in three sentences using at least three senses.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Extended description", statement: "Multiple senses + detail." }],
            steps: [
              { reasoning: "Three sentences, each contributing to the picture.", marks: 1, markCode: "AO2" },
              { reasoning: "At least three senses used.", marks: 1, markCode: "AO2" },
              { reasoning: "Specific, vivid word choices.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Three-sentence description",
          },
        },
        {
          id: "ciege-u3-s2-se-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses taste imagery?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The soup was hot." },
            { id: "b", text: "The soup was warm." },
            { id: "c", text: "The soup tasted of ginger and lime." },
            { id: "d", text: "The soup was red." },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory writing", statement: "Identify the sense used." }],
            steps: [
              { reasoning: "'Tasted of ginger and lime' appeals to taste.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The soup tasted of ginger and lime.",
          },
        },
        {
          id: "ciege-u3-s2-se-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In \"The loud bell rang\", how many words and how many adjectives are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
            { label: "Adjectives", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "The / loud / bell / rang = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Loud' describes the bell — 1 adjective.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 words, 1 adjective",
          },
        },
        {
          id: "ciege-u3-s2-se-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sense does the phrase \"the air smelled of rain\" appeal to?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Taste" },
            { id: "b", text: "Sight" },
            { id: "c", text: "Smell" },
            { id: "d", text: "Touch" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory writing", statement: "Smell imagery appeals to the nose." }],
            steps: [
              { reasoning: "'Smelled of rain' appeals to smell — olfactory imagery.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Smell",
          },
        },
        {
          id: "ciege-u3-s2-se-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"The soup was hot, spicy and sweet\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Hot', 'spicy' and 'sweet' describe the soup — 3 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u3-s2-se-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is specificity important in descriptive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It impresses the examiner" },
            { id: "b", text: "It uses more words" },
            { id: "c", text: "It creates vivid mental pictures" },
            { id: "d", text: "It makes writing faster" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Specificity", statement: "Specific words create vivid images." }],
            steps: [
              { reasoning: "Specific detail ('crunching gravel') paints clearer pictures than vague words ('stones').", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Creates vivid mental pictures",
          },
        },
        {
          id: "ciege-u3-s2-se-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"Soft rain fell on the tin roof\", how many words and how many adjectives are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 7 },
            { label: "Adjectives", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "Soft / rain / fell / on / the / tin / roof = 7 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Soft' describes the rain — 1 clear adjective ('tin' is a noun adjunct).", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "7 words, 1 adjective",
          },
        },
        {
          id: "ciege-u3-s2-se-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the most specific description?",
          response: { type: "mcq", choices: [
            { id: "a", text: "a big dog" },
            { id: "b", text: "an animal" },
            { id: "c", text: "a pet" },
            { id: "d", text: "a huge, shaggy brown dog" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Specificity", statement: "More detail = more vivid." }],
            steps: [
              { reasoning: "'Huge, shaggy brown' gives size, coat and colour — the most specific.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "a huge, shaggy brown dog",
          },
        },
        {
          id: "ciege-u3-s2-se-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why might a skilled writer use all five senses in a description rather than only sight?",
          response: { type: "mcq", choices: [
            { id: "a", text: "To immerse the reader and make the scene feel real" },
            { id: "b", text: "To fill more pages" },
            { id: "c", text: "To make it rhyme" },
            { id: "d", text: "Because it is required" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory description", statement: "All senses create immersion." }],
            steps: [
              { reasoning: "Sound, smell, taste and touch add layers sight alone cannot.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they make the reader feel present in the scene.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "To immerse the reader",
          },
        },
        {
          id: "ciege-u3-s2-se-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"The market buzzed, the spices smelled sharp, the fabric felt rough\", how many different senses are appealed to?",
          response: { type: "numeric", parts: [
            { label: "Senses", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "technique", name: "Multi-sensory description", statement: "Each clause targets a sense." }],
            steps: [
              { reasoning: "'Buzzed' = sound, 'smelled sharp' = smell, 'felt rough' = touch — 3 senses.", marks: 1, markCode: "AO2" },
              { reasoning: "No sight, taste or other sense is described.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u3-s2-se-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase best completes a touch description: \"The ice was ___\"?",
          response: { type: "mcq", choices: [
            { id: "a", text: "sweet" },
            { id: "b", text: "red" },
            { id: "c", text: "sharp and cold" },
            { id: "d", text: "loud" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Sensory writing", statement: "Touch describes texture and temperature." }],
            steps: [
              { reasoning: "'Sharp and cold' describes how the ice feels — touch imagery.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "sharp and cold",
          },
        },
        {
          id: "ciege-u3-s2-se-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many verbs are in the sentence \"The waves crashed and foam hissed\"?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Crashed' and 'hissed' are the two verbs — 2.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s2-se-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe a bakery using three different senses in two sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Multi-sensory description", statement: "Three senses in two sentences." }],
            steps: [
              { reasoning: "At least three different senses are used.", marks: 1, markCode: "AO2" },
              { reasoning: "Both sentences contribute to the description.", marks: 1, markCode: "AO2" },
              { reasoning: "Word choices are specific and vivid.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two-sentence, three-sense description",
          },
        },
      ],
    },
    {
      id: "ciege-u3-s2-show",
      title: "Show, don't tell",
      skill: "Reveal character and mood through action and detail.",
      lesson: {
        sections: [
          {
            heading: "Telling vs showing",
            body: "'She was angry' tells. 'She slammed the door and didn't look back' shows. Actions, dialogue and physical reactions reveal feelings more powerfully than labels.",
          },
          {
            heading: "Character through detail",
            body: "Instead of 'he was rich', show 'his watch gleamed gold and his shoes were handmade'. Details imply character without stating it.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Rewrite 'She was nervous' as showing.",
          solution: "'Her hands trembled as she reached for the door handle.'",
        },
      },
      questions: [
        {
          id: "ciege-u3-s2-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence 'shows' rather than 'tells'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He was happy." },
            { id: "b", text: "He wiped his eyes and sighed." },
            { id: "c", text: "She was angry." },
            { id: "d", text: "He was sad." },
          ], borrectChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions reveal feelings." }],
            steps: [
              { reasoning: "Wiping eyes and sighing shows sadness through action.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "He wiped his eyes and sighed.",
          },
        },
        {
          id: "ciege-u3-s2-sh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rewrite 'The room was messy' as a showing sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Showing", statement: "Detail implies state." }],
            steps: [
              { reasoning: "The sentence describes cluttered details.", marks: 1, markCode: "AO2" },
              { reasoning: "It implies messiness without saying it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "e.g. 'Clothes lay on the floor and papers covered the desk.'",
          },
        },
        {
          id: "ciege-u3-s2-sh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a sentence showing that a character is excited without using the word 'excited'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Showing emotion", statement: "Action/physical detail." }],
            steps: [
              { reasoning: "The sentence shows excitement through action or detail.", marks: 1, markCode: "AO2" },
              { reasoning: "It does not use 'excited' or similar labels.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "One showing sentence",
          },
        },
        {
          id: "ciege-u3-s2-sh-q4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a character's appearance in two sentences using details that suggest their personality — without stating it.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Character through detail", statement: "Appearance implies personality." }],
            steps: [
              { reasoning: "Details about clothing, posture or belongings.", marks: 1, markCode: "AO2" },
              { reasoning: "Details suggest a personality trait.", marks: 1, markCode: "AO2" },
              { reasoning: "Two complete sentences.", marks: 1, markCode: "AO2" },
              { reasoning: "Spelling accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two detail sentences",
          },
        },
        {
          id: "ciege-u3-s2-sh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence 'shows' rather than 'tells'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It was a sad day." },
            { id: "b", text: "She slammed the door and didn't look back." },
            { id: "c", text: "She was happy." },
            { id: "d", text: "He was angry." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions reveal feelings." }],
            steps: [
              { reasoning: "Slamming the door shows anger through action — the others just state feelings.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "She slammed the door and didn't look back.",
          },
        },
        {
          id: "ciege-u3-s2-sh-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In \"He wiped his eyes\", how many words and how many verbs are there?",
          response: { type: "numeric", parts: [
            { label: "Words", answer: 4 },
            { label: "Verbs", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "He / wiped / his / eyes = 4 words.", marks: 1, markCode: "AO2" },
              { reasoning: "'Wiped' is the only verb — 1.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4 words, 1 verb",
          },
        },
        {
          id: "ciege-u3-s2-sh-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'telling' mean in descriptive writing?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Using dialogue" },
            { id: "b", text: "Stating a feeling or fact directly" },
            { id: "c", text: "Describing the setting" },
            { id: "d", text: "Showing through action" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Telling", statement: "Direct statement vs implied detail." }],
            steps: [
              { reasoning: "'She was sad' states the feeling directly — that is telling.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Stating directly",
          },
        },
        {
          id: "ciege-u3-s2-sh-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"The old tired man slept\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Old' and 'tired' describe the man — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s2-sh-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is 'showing' usually more effective than 'telling' in narrative?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is easier to write" },
            { id: "b", text: "It uses simpler words" },
            { id: "c", text: "It is always longer" },
            { id: "d", text: "It lets the reader experience the emotion directly" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Action engages the reader." }],
            steps: [
              { reasoning: "Showing through detail lets the reader draw conclusions — more engaging than labels.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Lets the reader experience emotion",
          },
        },
        {
          id: "ciege-u3-s2-sh-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "In \"Her hands shook as she reached for the phone\", how many verbs and how many words are there?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 2 },
            { label: "Words", answer: 9 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Shook' and 'reached' are the two verbs.", marks: 1, markCode: "AO2" },
              { reasoning: "Her / hands / shook / as / she / reached / for / the / phone = 9 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 verbs, 9 words",
          },
        },
        {
          id: "ciege-u3-s2-sh-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail best shows a character is wealthy without using the word 'rich'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He had a lot of money." },
            { id: "b", text: "His watch gleamed gold and his shoes were handmade." },
            { id: "c", text: "He bought expensive things." },
            { id: "d", text: "He was rich." },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character through detail", statement: "Details imply traits." }],
            steps: [
              { reasoning: "Gold watch and handmade shoes imply wealth through concrete detail — showing, not telling.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Gold watch and handmade shoes",
          },
        },
        {
          id: "ciege-u3-s2-sh-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does adding 'politely' achieve in the sentence \"She smiled politely\" compared to simply \"She smiled\"?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is just an extra word" },
            { id: "b", text: "It changes nothing" },
            { id: "c", text: "It shows the smile was reserved or insincere — revealing subtext" },
            { id: "d", text: "It improves punctuation" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Adverbial nuance", statement: "One word can change meaning." }],
            steps: [
              { reasoning: "'Politely' suggests the smile is social rather than warm — it adds subtext.", marks: 1, markCode: "AO2" },
              { reasoning: "The adverb makes the reader question whether she is truly happy.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Adds subtext — smile may be insincere",
          },
        },
        {
          id: "ciege-u3-s2-sh-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "In \"He counted his change twice before paying\", how many verbs and how many words are there?",
          response: { type: "numeric", parts: [
            { label: "Verbs", answer: 2 },
            { label: "Words", answer: 7 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Verb", statement: "Action or state word." }],
            steps: [
              { reasoning: "'Counted' and 'paying' are the two verbs.", marks: 1, markCode: "AO2" },
              { reasoning: "He / counted / his / change / twice / before / paying = 7 words.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2 verbs, 7 words",
          },
        },
        {
          id: "ciege-u3-s2-sh-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence best 'shows' a messy room?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A messy room." },
            { id: "b", text: "It was a mess." },
            { id: "c", text: "The room was messy." },
            { id: "d", text: "Clothes lay on the floor and papers covered the desk." },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Detail implies state." }],
            steps: [
              { reasoning: "Clothes on the floor and papers on the desk show messiness through detail.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Clothes lay on the floor and papers covered the desk.",
          },
        },
        {
          id: "ciege-u3-s2-sh-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many adjectives are in the sentence \"Her trembling hands gripped the cold rail\"?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Trembling' describes hands and 'cold' describes the rail — 2 adjectives.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u3-s2-sh-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write two sentences showing that a character is nervous without using the word 'nervous' or any synonym.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Showing emotion", statement: "Physical detail reveals feeling." }],
            steps: [
              { reasoning: "The sentences show nervousness through action or physical detail.", marks: 1, markCode: "AO2" },
              { reasoning: "They avoid 'nervous' and similar labels.", marks: 1, markCode: "AO2" },
              { reasoning: "Two complete sentences are written.", marks: 1, markCode: "AO2" },
              { reasoning: "Punctuation and spelling are accurate.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Two showing sentences",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u3-s2-desc-notes",
      title: "Descriptive writing — revision notes",
      summary: "Five senses, show don't tell, specific detail.",
      sections: [
        { heading: "Senses", body: "Use sight, sound, smell, taste, touch. Be specific — 'crunching gravel' beats 'walking on stones'." },
        { heading: "Show don't tell", body: "Reveal through action and detail: 'She wiped her eyes' not 'She was sad'." },
      ],
    },
  ],
};
