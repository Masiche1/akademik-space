import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "oles-u4-lesson-4-2",
  code: "4-2",
  title: "Descriptive and argumentative writing",
  goal: "I CAN write vivid descriptions and balanced arguments.",
  standards: ["1120 Writing: descriptive and argumentative"],
  vocabulary: [
    { term: "Description", definition: "Writing that creates a picture using the five senses." },
    { term: "Sensory detail", definition: "Words about sight, sound, smell, taste and touch." },
    { term: "Argument", definition: "Writing that gives reasons for and against an opinion." },
    { term: "Balanced", definition: "Showing both sides of an argument fairly." },
    { term: "Emotive language", definition: "Words chosen to create feelings in the reader." },
  ],
  concepts: [
    {
      id: "oles-u4-describe",
      title: "Descriptive writing",
      skill: "Use sensory detail and precise vocabulary to create pictures.",
      lesson: {
        sections: [
          { heading: "The five senses", body: "Strong description uses more than sight: sounds ('the crunch of gravel'), smells ('the sharp smell of pine'), textures ('rough bark'), tastes ('bitter coffee'). One or two precise sensory details beat a paragraph of vague adjectives." },
          { heading: "Precise vocabulary", body: "Replace general words with specific ones: not 'nice food' but 'hot, spicy noodles'; not 'nice day' but 'golden afternoon light'. Good adjectives and strong verbs do the work — avoid piling up adjectives." },
        ],
        keyFormulas: [
          { name: "Description", statement: "Senses + precise words + one clear focus = vivid picture." },
        ],
        workedExample: {
          problem: "Describe a beach using two senses.",
          solution: "Sight: 'turquoise waves folded onto white sand.' Sound: 'the hiss of the tide and cries of gulls.' Two senses, precise words.",
        },
      },
      questions: [
        {
          id: "oles-u4-de-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The five senses used in description are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Sight, sound, smell, taste, touch" },
            { id: "b", text: "Only taste and touch" },
            { id: "c", text: "Only sight and sound" },
            { id: "d", text: "Only smell and sight" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Five senses", statement: "Sight, sound, smell, taste, touch." }], steps: [{ reasoning: "All five senses can be used.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** All five senses" },
        },
        {
          id: "oles-u4-de-q2", difficulty: "core", totalMarks: 2,
          stem: "Why is 'the hiss of the tide' better than 'the sea was loud'?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Precise vocabulary", statement: "Specific words create clearer pictures." }], steps: [
            { reasoning: "'Hiss' is a precise sound word; 'loud' is vague.", marks: 1, markCode: "AO2" },
            { reasoning: "The reader can actually hear the specific sound.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Precise words let the reader picture/hear the exact thing." },
        },
        {
          id: "oles-u4-de-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to write a strong descriptive paragraph.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Description method", statement: "One focus + sensory details + precise words." }], steps: [
            { reasoning: "Choose one clear focus — a place, object or moment.", marks: 1, markCode: "AO2" },
            { reasoning: "Add sensory details for at least two or three senses.", marks: 1, markCode: "AO2" },
            { reasoning: "Use precise verbs and adjectives instead of general ones.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "One focus; sensory details; precise vocabulary." },
        },
        {
          id: "oles-u4-de-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Descriptive writing review.",
          parts: [
            { label: "a", prompt: "Name the five senses.", marks: 2 },
            { label: "b", prompt: "What makes vocabulary 'precise'?", marks: 2 },
            { label: "c", prompt: "Why use more than one sense?", marks: 2 },
            { label: "d", prompt: "What is the risk of too many adjectives?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Description", statement: "Senses + precision + restraint." }], steps: [
            { part: "a", reasoning: "Sight, sound, smell, taste, touch.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All five.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Specific words that create an exact picture.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct meaning.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Multiple senses make the description vivid and realistic.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Adjective piles weaken writing — choose the strongest few.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Explains the problem.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Advises restraint.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) five senses (b) exact picture (c) vivid realism (d) weaken — choose few",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u4-de-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Sensory detail means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only describing sight" },
            { id: "b", text: "Words about the five senses" },
            { id: "c", text: "Long sentences" },
            { id: "d", text: "A list of adjectives" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Sensory detail", statement: "Words for the five senses." }], steps: [{ reasoning: "Sensory detail covers sight, sound, smell, taste, touch.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Words about the five senses" },
        },
        {
          id: "oles-u4-de-q6", difficulty: "core", totalMarks: 2,
          stem: "Why is one precise detail better than many vague adjectives?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Precision", statement: "One exact detail beats vague piles." }], steps: [
            { reasoning: "A precise detail creates a clear exact picture.", marks: 1, markCode: "AO2" },
            { reasoning: "Many vague adjectives blur together and add nothing.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Precision creates a clearer picture than vague adjective piles." },
        },
        {
          id: "oles-u4-de-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Which phrase uses the most senses?",
          response: { type: "mcq", choices: [
            { id: "a", text: "We went to the sea" },
            { id: "b", text: "The hiss of the tide, the salty spray, the gritty sand" },
            { id: "c", text: "It was a good day" },
            { id: "d", text: "The beach was nice" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Multi-sense", statement: "Several senses = vivid picture." }], steps: [{ reasoning: "(a) has sound, taste and touch.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** The hiss of the tide, the salty spray, the gritty sand" },
        },
        {
          id: "oles-u4-de-q8", difficulty: "core", totalMarks: 2,
          stem: "Which is more precise: 'nice food' or 'hot, spicy noodles'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "hot, spicy noodles" },
            { id: "b", text: "both are equal" },
            { id: "c", text: "nice food" },
            { id: "d", text: "neither" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Precise vocabulary", statement: "Specific words create exact pictures." }], steps: [
            { reasoning: "'Hot, spicy noodles' gives exact taste and texture.", marks: 1, markCode: "AO2" },
            { reasoning: "'Nice food' is vague.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** hot, spicy noodles" },
        },
        {
          id: "oles-u4-de-q9", difficulty: "core", totalMarks: 2,
          stem: "What is 'emotive language' in description?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Emotive language", statement: "Words chosen to create feelings." }], steps: [
            { reasoning: "Words chosen to make the reader feel something.", marks: 1, markCode: "AO2" },
            { reasoning: "E.g. 'a delicious aroma' vs 'a smell'.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Words chosen to create feelings in the reader." },
        },
        {
          id: "oles-u4-de-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how to describe a person through action rather than appearance.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Character through action", statement: "What they do shows who they are." }], steps: [
            { reasoning: "Choose actions that reveal personality — e.g. heaves the bag without asking.", marks: 1, markCode: "AO2" },
            { reasoning: "Show mannerisms and habits, not just looks.", marks: 1, markCode: "AO2" },
            { reasoning: "The reader infers character from behaviour.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Actions and mannerisms reveal personality better than appearance lists." },
        },
        {
          id: "oles-u4-de-q11", difficulty: "foundation", totalMarks: 1,
          stem: "A strong descriptive paragraph needs…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One clear focus" },
            { id: "b", text: "Only questions" },
            { id: "c", text: "Five unrelated topics" },
            { id: "d", text: "A long list of adjectives" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Description focus", statement: "One clear subject." }], steps: [{ reasoning: "Focus keeps the picture clear.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** One clear focus" },
        },
        {
          id: "oles-u4-de-q12", difficulty: "challenge", totalMarks: 9,
          stem: "Description practice.",
          parts: [
            { label: "a", prompt: "Which senses can description use?", marks: 2 },
            { label: "b", prompt: "What makes a word 'precise'?", marks: 2 },
            { label: "c", prompt: "Why avoid piling up adjectives?", marks: 2 },
            { label: "d", prompt: "How would you describe a quiet street at night?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Description", statement: "Senses + precision + restraint." }], steps: [
            { part: "a", reasoning: "Sight, sound, smell, taste and touch.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All five named.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "It creates an exact picture, not a vague one.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct meaning.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Piles weaken the writing — choose the strongest few.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Uses sensory details like darkness, silence, distant sounds.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Multiple senses used.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Vivid and focused.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) five senses (b) exact picture (c) restraint (d) sensory night scene",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u4-de-q13", difficulty: "core", totalMarks: 2,
          stem: "Upgrade this sentence: 'The day was nice.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Vocabulary upgrade", statement: "Replace vague words with precise ones." }], steps: [
            { reasoning: "e.g. 'The day was warm and golden.'", marks: 1, markCode: "AO2" },
            { reasoning: "Precise adjectives replace 'nice'.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'The day was warm and golden.'" },
        },
        {
          id: "oles-u4-de-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a simile helps create a picture in description.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simile", statement: "Comparison using 'like' or 'as'." }], steps: [
            { reasoning: "A simile compares the subject to something familiar.", marks: 1, markCode: "AO2" },
            { reasoning: "E.g. 'as white as snow' gives an instant clear picture.", marks: 1, markCode: "AO2" },
            { reasoning: "It helps readers visualise unfamiliar things.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Similes compare to familiar things, creating instant pictures." },
        },
        {
          id: "oles-u4-de-q15", difficulty: "core", totalMarks: 2,
          stem: "Which is the strongest description?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Steam curled from the hot noodles, sharp with chilli." },
            { id: "b", text: "Food is good." },
            { id: "c", text: "I ate noodles." },
            { id: "d", text: "The noodles were nice." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Strong description", statement: "Sensory detail + precise words." }], steps: [
            { reasoning: "(a) uses sight, smell and precise vocabulary.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** Steam curled from the hot noodles, sharp with chilli." },
        },
        {
          id: "oles-u4-de-q16", difficulty: "foundation", totalMarks: 1,
          stem: "The purpose of descriptive writing is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Convince the reader to act" },
            { id: "b", text: "Tell what happens next" },
            { id: "c", text: "Create a picture in the reader's mind" },
            { id: "d", text: "List facts in order" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Description", statement: "Creates mental pictures." }], steps: [{ reasoning: "Description appeals to the senses to build images.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** Create a picture in the reader's mind" },
        },
      ],
    },
    {
      id: "oles-u4-argument",
      title: "Argumentative writing",
      skill: "Present a clear opinion supported by balanced reasons.",
      lesson: {
        sections: [
          { heading: "Structure of an argument", body: "State your opinion clearly in the introduction. Then give your strongest reasons, each in its own paragraph with an example or explanation. Acknowledge the opposite view briefly — it makes your argument stronger, not weaker." },
          { heading: "Persuasive techniques", body: "Use strong topic sentences ('The main reason is...'), evidence ('For example...'), and persuasive connectives ('therefore', 'as a result', 'this shows that'). End with a firm conclusion restating your position." },
        ],
        keyFormulas: [
          { name: "Argument", statement: "Opinion → reasons with evidence → acknowledge other side → firm conclusion." },
        ],
        workedExample: {
          problem: "Topic: 'School uniforms should be compulsory.' Write the introduction sentence.",
          solution: "'School uniforms should be compulsory because they reduce distraction, promote equality, and create a sense of community.' Opinion + preview of reasons.",
        },
      },
      questions: [
        {
          id: "oles-u4-ar-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An argumentative essay should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "State an opinion and support it with reasons" },
            { id: "b", text: "Describe a place" },
            { id: "c", text: "List facts only" },
            { id: "d", text: "Tell a story" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Argument", statement: "Opinion + reasons." }], steps: [{ reasoning: "Arguments need a stance and supporting reasons.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Opinion supported by reasons" },
        },
        {
          id: "oles-u4-ar-q2", difficulty: "core", totalMarks: 2,
          stem: "Why acknowledge the opposite view in an argument?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Balance", statement: "Addressing the other side strengthens credibility." }], steps: [
            { reasoning: "It shows you have considered all sides.", marks: 1, markCode: "AO2" },
            { reasoning: "It makes your own argument more convincing.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Acknowledging the other side adds credibility and strengthens your case." },
        },
        {
          id: "oles-u4-ar-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between a reason and an example in an argument.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reason vs example", statement: "Reason = why; example = proof." }], steps: [
            { reasoning: "A reason explains why the opinion is true.", marks: 1, markCode: "AO2" },
            { reasoning: "An example gives a specific case proving the reason.", marks: 1, markCode: "AO2" },
            { reasoning: "Together they form: claim → reason → evidence.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Reason = the why; example = specific proof of that why." },
        },
        {
          id: "oles-u4-ar-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Argumentative writing review.",
          parts: [
            { label: "a", prompt: "What does an argument need?", marks: 2 },
            { label: "b", prompt: "Why acknowledge the other side?", marks: 2 },
            { label: "c", prompt: "Name two persuasive connectives.", marks: 2 },
            { label: "d", prompt: "How should the conclusion work?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Argument", statement: "Opinion + reasons + balance + firm conclusion." }], steps: [
            { part: "a", reasoning: "A clear opinion and supporting reasons with evidence.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct essentials.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Shows fairness and strengthens credibility.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Any two: therefore, as a result, this shows, however, consequently.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Both correct.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Restate the position firmly and briefly summarise reasons.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "No new arguments.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Correct technique.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) opinion+reasons (b) credibility (c) two connectives (d) restate firmly",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u4-ar-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The introduction of an argumentative essay should…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Give the ending first" },
            { id: "b", text: "Tell a story" },
            { id: "c", text: "State your opinion clearly" },
            { id: "d", text: "List every fact you know" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "convention", name: "Introduction", statement: "Opinion stated clearly." }], steps: [{ reasoning: "The stance comes first, then reasons.", marks: 1, markCode: "AO1" }], finalAnswer: "**(c)** State your opinion clearly" },
        },
        {
          id: "oles-u4-ar-q6", difficulty: "core", totalMarks: 2,
          stem: "What is the job of a topic sentence in an argument paragraph?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Topic sentence", statement: "States the paragraph's point." }], steps: [
            { reasoning: "It states the main reason or point of that paragraph.", marks: 1, markCode: "AO2" },
            { reasoning: "The rest of the paragraph supports it.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "It states the paragraph's main reason for the opinion." },
        },
        {
          id: "oles-u4-ar-q7", difficulty: "foundation", totalMarks: 1,
          stem: "'Therefore' and 'as a result' are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Persuasive connectives" },
            { id: "b", text: "Story settings" },
            { id: "c", text: "Nouns" },
            { id: "d", text: "Character names" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Connectives", statement: "Link ideas and signal logic." }], steps: [{ reasoning: "They link reasons to conclusions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Persuasive connectives" },
        },
        {
          id: "oles-u4-ar-q8", difficulty: "core", totalMarks: 2,
          stem: "Why should each reason in an argument get its own paragraph?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Paragraphing", statement: "One idea per paragraph." }], steps: [
            { reasoning: "It keeps each reason clear and fully developed.", marks: 1, markCode: "AO2" },
            { reasoning: "The examiner can see the structure of your argument.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Separate paragraphs keep each reason clear and organised." },
        },
        {
          id: "oles-u4-ar-q9", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how evidence strengthens an argument.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Evidence", statement: "Examples and facts prove reasons." }], steps: [
            { reasoning: "An opinion alone is just a claim.", marks: 1, markCode: "AO2" },
            { reasoning: "Evidence — examples, facts, statistics — proves the reason.", marks: 1, markCode: "AO2" },
            { reasoning: "It makes the argument convincing rather than assertive.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Evidence proves reasons and makes the argument convincing." },
        },
        {
          id: "oles-u4-ar-q10", difficulty: "foundation", totalMarks: 1,
          stem: "In a balanced argument, the opposite view should be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Saved for the conclusion" },
            { id: "b", text: "Argued as strongly as your own" },
            { id: "c", text: "Ignored completely" },
            { id: "d", text: "Acknowledged briefly" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Balance", statement: "Acknowledge the other side briefly." }], steps: [{ reasoning: "Brief acknowledgement adds credibility.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Acknowledged briefly" },
        },
        {
          id: "oles-u4-ar-q11", difficulty: "challenge", totalMarks: 9,
          stem: "Argumentative writing practice.",
          parts: [
            { label: "a", prompt: "What must the introduction contain?", marks: 2 },
            { label: "b", prompt: "What is the difference between a reason and evidence?", marks: 2 },
            { label: "c", prompt: "Why acknowledge the other side?", marks: 2 },
            { label: "d", prompt: "What should the conclusion do?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Argument", statement: "Opinion + reasons + evidence + balance + conclusion." }], steps: [
            { part: "a", reasoning: "A clear statement of opinion, possibly with a preview of reasons.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Correct content.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Reason = why the opinion is true; evidence = proof.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "AO3" },
            { part: "c", reasoning: "Shows fairness and strengthens credibility.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Correct reason.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Restate the opinion firmly and summarise reasons.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "No new arguments introduced.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Complete answer.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) clear opinion (b) why vs proof (c) credibility (d) restate firmly",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "c" },
              { level: "Level 2", marks: "1-3", descriptor: "Correct.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague or wrong.", part: "d" },
            ]
          },
        },
        {
          id: "oles-u4-ar-q12", difficulty: "core", totalMarks: 2,
          stem: "Which is the strongest topic sentence?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The main reason uniforms should be compulsory is that they reduce distraction." },
            { id: "b", text: "Uniforms." },
            { id: "c", text: "Many people have views." },
            { id: "d", text: "This is about school." },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Topic sentence", statement: "Clear point + reason preview." }], steps: [
            { reasoning: "(a) states the point and previews the reason.", marks: 1, markCode: "AO2" },
            { reasoning: "Correct choice.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** The main reason uniforms should be compulsory is that they reduce distraction." },
        },
        {
          id: "oles-u4-ar-q13", difficulty: "core", totalMarks: 2,
          stem: "Give two persuasive connectives and what each signals.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "Connectives", statement: "Link ideas logically." }], steps: [
            { reasoning: "Any two: 'therefore'/'as a result' (consequence), 'however' (contrast), 'for example' (illustration).", marks: 1, markCode: "AO2" },
            { reasoning: "Functions correct.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'therefore' = consequence; 'however' = contrast." },
        },
        {
          id: "oles-u4-ar-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Why should a conclusion not introduce new arguments?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Conclusion", statement: "Summarise, don't add." }], steps: [
            { reasoning: "A conclusion's job is to restate and summarise.", marks: 1, markCode: "AO2" },
            { reasoning: "New points have no supporting paragraphs and confuse the structure.", marks: 1, markCode: "AO2" },
            { reasoning: "The reader needs a firm final position, not surprises.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "New arguments lack support and break the essay's structure." },
        },
        {
          id: "oles-u4-ar-q15", difficulty: "foundation", totalMarks: 1,
          stem: "A 'balanced' argument means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Both sides are argued equally strongly" },
            { id: "b", text: "Both sides are considered fairly" },
            { id: "c", text: "No opinion is given" },
            { id: "d", text: "The essay is half finished" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Balanced", statement: "Fair consideration of sides." }], steps: [{ reasoning: "Balanced = acknowledging the other side fairly.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Both sides are considered fairly" },
        },
        {
          id: "oles-u4-ar-q16", difficulty: "core", totalMarks: 2,
          stem: "Strengthen this opinion: 'Uniforms are good.'",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Opinion + reasons", statement: "Add reasons to the stance." }], steps: [
            { reasoning: "e.g. 'School uniforms should be compulsory because they reduce distraction and promote equality.'", marks: 1, markCode: "AO2" },
            { reasoning: "Opinion plus previewed reasons.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "e.g. 'Uniforms should be compulsory because they reduce distraction.'" },
        },
      ],
    },
  ],
  notes: [
    { id: "oles-u4-4-2-notes", title: "Description and argument — notes", summary: "Sensory detail and balanced reasoning.",
      sections: [
        { heading: "Description", body: "Use multiple senses, precise words, and restraint — few strong adjectives beat many weak ones." },
        { heading: "Argument", body: "Opinion → reasons → evidence → acknowledge other side → firm conclusion." },
      ] },
  ],
};
