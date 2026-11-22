import type { Lesson } from "../../../types.ts";
import {
  sensoryDetailQuestions,
  strongWordsQuestions,
} from "./expanded-questions.ts";

export const lesson32: Lesson = {
  id: "mll2-u3-lesson-3-2",
  code: "3-2",
  title: "Descriptive Writing",
  goal: "I CAN write a vivid description using sensory detail, strong verbs and well-chosen adjectives.",
  standards: [
    "MYP Language and Literature",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Description", definition: "Writing that paints a picture of a person, place or thing using the senses." },
    { term: "Sensory detail", definition: "Details that appeal to sight, sound, smell, touch or taste." },
    { term: "Strong verb", definition: "A precise action word — 'darted' instead of 'went', 'devoured' instead of 'ate'." },
    { term: "Show don't tell", definition: "Describing through actions and senses instead of stating facts." },
    { term: "Simile", definition: "A comparison using 'like' or 'as' — 'as brave as a lion'." },
  ],
  concepts: [
    {
      id: "mll2-u3-sensory-detail",
      title: "Sensory detail",
      skill: "Use the five senses to make a description vivid and immersive.",
      lesson: {
        sections: [
          {
            heading: "All five senses",
            body: "Good description uses more than sight. Include **sound** ('the kettle whistled'), **smell** ('fresh bread'), **touch** ('rough bark', 'icy wind') and **taste** ('salt spray'). The more senses you use, the more real the scene feels.",
          },
          {
            heading: "Specific over general",
            body: "Specific words beat general ones. 'The food was nice' is flat. 'The soup was hot and salty, with herbs floating on top' is vivid. Ask: what exactly did I see, hear, smell, feel, taste?",
          },
          {
            heading: "Order of description",
            body: "Guide the reader's eye. Start with the **big picture** (the whole scene), then **zoom in** to details (one object, one sound). This order feels natural — like how we actually look at things.",
          },
        ],
        keyFormulas: [
          { name: "Sensory checklist", statement: "Sight + sound + smell + touch + taste = complete description." },
        ],
        workedExample: {
          problem: "Improve: 'The beach was nice.'",
          solution: "'The beach stretched golden under the sun. Waves crashed and hissed over my feet, salt spray stung my lips, and the warm sand burned between my toes.'",
        },
      },
      questions: [
        {
          id: "mll2-u3-sensory-detail-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which detail uses the sense of smell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The roses smelled sweet" },
              { id: "b", text: "The bell rang loudly" },
              { id: "c", text: "The ice was cold" },
              { id: "d", text: "The sky was grey" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory imagery", statement: "Smell imagery describes scents." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'smelled sweet' is smell — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The roses smelled sweet",
          },
        },
        {
          id: "mll2-u3-sensory-detail-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write two sentences describing a rainy day using two different senses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory writing", statement: "Use specific sensory details, not just 'it rained'." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): a sentence with sound, e.g. 'Rain drummed on the roof all afternoon.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): a sentence with sight/touch/smell, e.g. 'Puddles reflected the grey sky and the air smelled of wet earth.'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Rain drummed on the roof. Puddles mirrored the grey sky; the air smelled of wet earth.'",
          },
        },
        {
          id: "mll2-u3-sensory-detail-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "Version A: 'The market was busy.'\n\nVersion B: 'Stalls overflowed with spices — saffron, cumin, dried chillies — and the air hummed with voices, clattering pots and the sizzle of flatbread on the griddle.'",
          },
          stem: "Compare the two descriptions. Why is Version B more effective?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Specificity", statement: "Specific sensory details create a vivid picture; general statements do not." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Version A only says 'busy' — no sensory detail; Version B names specific smells, sounds and sights.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Version B creates a picture — 'saffron, cumin', 'hummed with voices', 'sizzle of flatbread' — we can almost smell and hear it.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Version A tells us it's busy; Version B shows us the busyness — showing beats telling.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Version B is more effective — it uses specific sensory details (smells, sounds, sights) to create a vivid picture instead of just stating 'busy'.",
          },
        },
        {
          id: "mll2-u3-sensory-detail-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write three sentences describing a kitchen using three different senses.", marks: 3 },
            { label: "b", prompt: "Explain how your description helps the reader 'be there'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Immersive description", statement: "Multiple senses create presence — the reader feels they are in the scene." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): three original sentences using different senses, e.g. smell ('coffee and toast'), sound ('the fridge hummed'), sight ('sunlight through the window').", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C (Producing text): sentences are vivid and specific, not generic.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct grammar and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): sensory details let the reader imagine being in the kitchen — smell, sound and sight trigger memory.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): specific details ('coffee and toast') are more immersive than general ones ('it smelled nice').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Three sensory sentences. (b) Multiple senses make the reader feel present in the scene.",
          },
        },
        ...sensoryDetailQuestions,
      ],
    },
    {
      id: "mll2-u3-strong-words",
      title: "Strong words: verbs and adjectives",
      skill: "Replace weak, general words with precise, powerful alternatives.",
      lesson: {
        sections: [
          {
            heading: "Weak vs strong verbs",
            body: "Weak verbs are general: 'went', 'got', 'made', 'said'. Strong verbs are precise: 'darted', 'grabbed', 'built', 'whispered', 'shouted', 'stumbled'. 'She went to the door' → 'She crept to the door' changes everything.",
          },
          {
            heading: "Adjectives that earn their place",
            body: "Don't stack adjectives ('the big, old, ugly house'). Choose **one precise adjective** or use a stronger noun: 'mansion' instead of 'big house', 'hovel' instead of 'old ugly house'. Precision beats quantity.",
          },
          {
            heading: "Adverbs — use sparingly",
            body: "Adverbs ending in -ly often weaken writing: 'ran quickly' → 'sprinted' or 'dashed'. If a strong verb does the job, drop the adverb. 'She said loudly' → 'she shouted'.",
          },
        ],
        keyFormulas: [
          { name: "Word upgrade", statement: "went→darted/crept; said→whispered/shouted; big→enormous/vast; quickly→sprinted." },
        ],
        workedExample: {
          problem: "Improve: 'He walked slowly to the old house.'",
          solution: "'He shuffled towards the crumbling house.' — stronger verb ('shuffled'), more precise adjective ('crumbling').",
        },
      },
      questions: [
        {
          id: "mll2-u3-strong-words-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a stronger verb than 'went'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moved" },
              { id: "b", text: "Darted" },
              { id: "c", text: "Progressed" },
              { id: "d", text: "Travelled" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Strong verbs", statement: "Precise verbs create clearer, more vivid pictures." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'darted' is the most precise — it shows speed and suddenness — (c).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Darted",
          },
        },
        {
          id: "mll2-u3-strong-words-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Replace 'said' with a stronger verb in each: 'Stop!' ___ she. 'I'm sorry,' ___ he quietly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reporting verbs", statement: "Choose verbs that match the tone — shouted, whispered, admitted." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'Stop!' → 'shouted'/'cried'/'barked' (command tone).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'I'm sorry' quietly → 'whispered'/'murmured'/'admitted'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'shouted' for the command; 'whispered'/'murmured' for the quiet apology.",
          },
        },
        {
          id: "mll2-u3-strong-words-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Improve this sentence with strong words: 'The man went into the big old building and looked around.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word precision", statement: "Replace general verbs and adjectives with specific alternatives." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'went' → 'slipped', 'strode', 'crept' depending on mood.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'big old' → 'sprawling', 'crumbling', 'vast' — one precise adjective or a stronger noun like 'mansion'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C (Producing text): 'looked around' → 'scanned', 'surveyed', 'peeked' — a stronger verb.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'The man strode into the sprawling old mansion and surveyed the room.'",
          },
        },
        {
          id: "mll2-u3-strong-words-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a sentence describing someone running using a strong verb (not 'ran').", marks: 1 },
            { label: "b", prompt: "Write a sentence describing a scary place using one precise adjective.", marks: 1 },
            { label: "c", prompt: "Rewrite this weak sentence with strong words: 'She walked slowly to the door and opened it.'", marks: 2 },
            { label: "d", prompt: "Explain why 'said loudly' is weaker than 'shouted'.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precision", statement: "One strong word beats several weak ones." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a strong verb — sprinted, dashed, stumbled, crept.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C (Producing text): a precise adjective — e.g. 'the desolate alley', 'the eerie cellar'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): e.g. 'She shuffled to the door and pushed it open.' — stronger verbs.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): correct grammar and punctuation.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion A (Analysing): 'shouted' is one precise word; 'said loudly' uses two words where one does the job — strong verbs are more economical and vivid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. 'She sprinted.' (b) e.g. 'the desolate alley'. (c) e.g. 'She shuffled to the door and pushed it open.' (d) One precise verb beats verb+adverb.",
          },
        },
        ...strongWordsQuestions,
      ],
    },
  ],
};
