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
            { id: "a", text: "The flowers were bright." }, { id: "b", text: "The air smelled of rain." }, { id: "c", text: "The music was loud." }, { id: "d", text: "The soup was hot." },
          ], correctChoiceId: "b" },
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
            { id: "a", text: "He was sad." }, { id: "b", text: "He was happy." }, { id: "c", text: "He wiped his eyes and sighed." }, { id: "d", text: "She was angry." },
          ], correctChoiceId: "c" },
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
