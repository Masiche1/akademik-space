import type { Lesson } from "../../../types.ts";

export const lesson161: Lesson = {
  id: "cie-ol-fl-lesson-6-1",
  code: "6-1",
  title: "Reading strategies",
  goal: "I CAN use skimming, scanning, literal comprehension and inference to answer unseen text questions.",
  standards: ["1119 Reading: unseen texts"],
  vocabulary: [
    {
      term: "Skimming",
      definition: "Reading quickly for the gist or overall meaning.",
    },
    {
      term: "Scanning",
      definition: "Searching a text for specific information.",
    },
    {
      term: "Literal comprehension",
      definition: "Understanding what is stated directly.",
    },
    {
      term: "Inference",
      definition: "Deducing meaning that is implied but not stated.",
    },
    {
      term: "Deduction",
      definition: "Reaching a conclusion by reasoning from evidence.",
    },
    {
      term: "Context clues",
      definition: "Surrounding words that help define an unknown word.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-read-strategies",
      title: "Skimming, scanning and literal comprehension",
      skill:
        "Read unseen texts efficiently to locate and understand stated information.",
      lesson: {
        sections: [
          {
            heading: "Skim first, scan second",
            body: "Before answering questions, skim the whole text to grasp its purpose and structure — is it an argument, a story, an explanation? Then scan for the specific details each question asks about. This prevents misreading the text's tone or purpose.",
          },
          {
            heading: "Answer literal questions precisely",
            body: "Literal questions ask what the text says directly. Quote or paraphrase the exact information; do not add interpretation. Watch for distractors that are true of the topic but not stated in the passage.",
          },
          {
            heading: "Using context clues",
            body: "For unfamiliar vocabulary, read the sentence before and after. Look for definitions ('...which means'), contrasts ('unlike'), examples ('for instance') or restatements ('in other words').",
          },
        ],
        keyFormulas: [
          {
            name: "Reading strategy",
            statement:
              "Skim purpose+scan details+literal answers+context clues.",
          },
        ],
        workedExample: {
          problem:
            "A question asks for the date a bridge opened; the text mentions 'in the spring of 1902'.",
          solution:
            "Scan for 'bridge' and 'opened'; answer 'spring of 1902' — a precise literal extraction, not a guess.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-rs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between skimming and scanning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Skimming reads for gist; scanning searches for specific detail",
              },
              { id: "b", text: "Both are identical" },
              { id: "c", text: "Skimming is slow; scanning is fast" },
              { id: "d", text: "Skimming is for poetry; scanning for prose" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Skim vs scan",
                statement:
                  "Skimming = overall gist; scanning = targeted search for detail.",
              },
            ],
            steps: [
              {
                reasoning: "The distinction is purpose, not speed alone.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Skim for gist, scan for detail",
            commonErrors: ["Thinking both mean 'read quickly'."],
          },
        },
        {
          id: "cie-ol-fl-rs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract, then answer.",
          extract: {
            title: "The Village Well",
            author: "Written for Akademik Space",
            text: "For three generations the village of Marlowe drew its water from the old stone well at the edge of the green. Every morning, before the shops opened, women carried wooden buckets to the pump, and their chatter mingled with the creak of the handle.\n\nWhen the piped water finally reached the village in 1968, many people wept — not with relief, but with grief. Something of Marlowe had ended that day, though no one could have said exactly what.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literal comprehension",
                statement:
                  "Extract stated information accurately from the passage.",
              },
            ],
            steps: [
              {
                reasoning: "Piped water reached the village in 1968.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Women used the well each morning before shops opened.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "People felt grief rather than relief at the change.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Piped water arrived in 1968; the well was used each morning; the change brought grief.",
            commonErrors: [
              "Inferring 'the well was demolished' — the text only says piped water arrived.",
            ],
          },
        },
        {
          id: "cie-ol-fl-rs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using context clues, explain what 'mingled' probably means in the extract.",
          extract: {
            title: "The Village Well",
            author: "Written for Akademik Space",
            text: "For three generations the village of Marlowe drew its water from the old stone well at the edge of the green. Every morning, before the shops opened, women carried wooden buckets to the pump, and their chatter mingled with the creak of the handle.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context clues",
                statement:
                  "Surrounding detail reveals meaning: chatter 'mingled with' a sound suggests mixing together.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The chatter is being combined with the sound of the handle.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Mingled' suggests the two sounds mixed into one another.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "This creates an image of a busy, communal morning routine.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reasoned definition supported by the context.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "'Mingled' means mixed together — the chatter and the handle's creak blended.",
            commonErrors: [
              "Giving a dictionary definition that ignores the sound imagery.",
            ],
          },
        },
        {
          id: "cie-ol-fl-rs-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Reading an unseen text.",
          extract: {
            title: "The Night Ferry",
            author: "Written for Akademik Space",
            text: "The last ferry of the evening left the harbour at dusk, its lights smearing gold across the black water. Tomas leaned on the rail and watched the town shrink behind him — the lit windows of his street shrinking one by one, like candles being pinched out.\n\nHe had one bag and no plan. His sister lived in the capital now, and that was reason enough. But as the mainland faded, a small voice wondered whether he had made the right choice, or simply the easiest one.",
          },
          parts: [
            {
              label: "a",
              prompt: "State two literal details about Tomas's journey.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain what the simile 'like candles being pinched out' suggests.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "What does the last sentence reveal about Tomas's feelings?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Predict what might happen next and justify your prediction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unseen reading",
                statement:
                  "Literal detail+imagery analysis+inference+prediction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "He is on the last evening ferry leaving the harbour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "He has only one bag and is travelling to his sister in the capital.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate, text-based details.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "The simile compares the darkening windows to extinguished candles.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "It suggests endings, loss and finality as he departs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect linked to mood.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "He feels uncertain — doubting whether his choice was right.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Inference supported by 'wondered whether'.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "A plausible prediction, e.g. arrival and meeting his sister.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified from the text's clues.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) last ferry/one bag/to capital (b) simile=sadness+finality (c) doubt (d) plausible prediction",
            levels: [
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Two accurate details.",
                part: "a",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "One detail.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Simile explained with effect.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Uncertainty inferred.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No inference.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Prediction justified.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Unsupported guess.",
                part: "d",
              },
            ],
            commonErrors: [
              "Answering from general knowledge instead of the text.",
            ],
          },
        },
        {
          id: "cie-ol-fl-rs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the first step before answering unseen comprehension questions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read only the title" },
              { id: "b", text: "Guess the answers" },
              { id: "c", text: "Skim the text to grasp its purpose and structure" },
              { id: "d", text: "Write the essay immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading strategy",
                statement:
                  "Skim first for gist and purpose, then scan for details.",
              },
            ],
            steps: [
              {
                reasoning: "Skimming establishes purpose before detail work.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Skim the text to grasp its purpose and structure",
            commonErrors: ["Jumping to questions without reading the text."],
          },
        },
        {
          id: "cie-ol-fl-rs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to the extract, when does the library close on Sundays?",
          extract: {
            title: "The Library Hours",
            author: "Written for Akademik Space",
            text: "The town library opens at nine on weekdays and stays open until seven in the evening. On Saturdays it closes at five, and on Sundays it shuts at four, giving the staff a shorter day before the new week begins.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At five" },
              { id: "b", text: "At nine" },
              { id: "c", text: "At four" },
              { id: "d", text: "At seven" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literal comprehension",
                statement: "Extract stated information precisely.",
              },
            ],
            steps: [
              {
                reasoning: "The text says Sundays it shuts at four.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** At four",
            commonErrors: ["Confusing Saturday's closing time with Sunday's."],
          },
        },
        {
          id: "cie-ol-fl-rs-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract and state two literal details about the bake sale.",
          extract: {
            title: "The Bake Sale",
            author: "Written for Akademik Space",
            text: "Every Saturday, the school hall filled with the smell of warm bread and cinnamon. Parents arrived early to claim the best trays, and children ran between the stalls with pockets full of coins. By noon, the last loaf was gone, and the helpers collapsed onto chairs, flour-dusted and smiling.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literal comprehension",
                statement: "Extract stated information accurately.",
              },
            ],
            steps: [
              {
                reasoning: "It happens every Saturday in the school hall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "By noon the last loaf was gone and helpers were smiling.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Weekly Saturday event in the school hall; everything sold out by noon.",
            commonErrors: ["Inferring details not stated, e.g. the sale's purpose."],
          },
        },
        {
          id: "cie-ol-fl-rs-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Using context clues, explain what 'untethered' probably means in the extract.",
          extract: {
            title: "The Clock Tower",
            author: "Written for Akademik Space",
            text: "The clock tower had kept time for the town for a hundred and twenty years. Its bell rang every hour, rain or shine, and shopkeepers set their watches by it. When the mechanism failed one winter, the town felt strangely untethered — as if time itself had stopped keeping count.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context clues",
                statement:
                  "The following clause 'as if time itself had stopped keeping count' explains the word.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The clock's failure removed the town's reliable timekeeper.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Untethered' suggests losing connection or anchor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reasoned definition supported by context.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "'Untethered' means cut loose or unanchored — the town lost its reliable sense of time.",
            commonErrors: ["Giving a dictionary definition without using the context."],
          },
        },
        {
          id: "cie-ol-fl-rs-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What does the extract suggest about the town's relationship with the bridge? Justify your answer.",
          extract: {
            title: "The Bridge Repair",
            author: "Written for Akademik Space",
            text: "For six weeks, the old stone bridge had been closed while workers replaced its cracked arches. Commuters took a longer route through the hills, adding twenty minutes to their journeys. The council promised the work would finish before the autumn festivals.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference-lite",
                statement:
                  "A supported suggestion drawn from stated details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The bridge is important — commuters rely on it daily.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Its closure inconveniences people (twenty extra minutes).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The council's promise shows the bridge matters to community events.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Suggestion anchored in the text.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The bridge is vital to daily life and community; its closure disrupts routines.",
            commonErrors: ["Asserting opinions not grounded in the text."],
          },
        },
        {
          id: "cie-ol-fl-rs-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question type asks what the text states directly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal comprehension" },
              { id: "b", text: "Prediction" },
              { id: "c", text: "Evaluation" },
              { id: "d", text: "Inference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Literal question",
                statement: "Asks for information stated directly in the text.",
              },
            ],
            steps: [
              {
                reasoning: "Literal = stated directly.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Literal comprehension",
            commonErrors: ["Confusing literal with inference."],
          },
        },
        {
          id: "cie-ol-fl-rs-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "According to the extract, what did the dog wait for each evening?",
          extract: {
            title: "The Old Dog",
            author: "Written for Akademik Space",
            text: "Bramble waited by the gate each evening at five, though the boy who used to throw his ball had moved away years before. Neighbours said the dog was confused; Bramley's owner said she was loyal. Either way, the waiting had become its own kind of ritual.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her dinner" },
              { id: "b", text: "The boy who used to play with her" },
              { id: "c", text: "The postman" },
              { id: "d", text: "Other dogs" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literal comprehension",
                statement: "Extract stated information precisely.",
              },
            ],
            steps: [
              {
                reasoning: "The text says the boy who threw his ball moved away.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The boy who used to play with her",
            commonErrors: ["Answering from inference rather than the stated text."],
          },
        },
        {
          id: "cie-ol-fl-rs-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract and explain what 'flour-dusted' tells you about the helpers.",
          extract: {
            title: "The Bake Sale",
            author: "Written for Akademik Space",
            text: "Every Saturday, the school hall filled with the smell of warm bread and cinnamon. Parents arrived early to claim the best trays, and children ran between the stalls with pockets full of coins. By noon, the last loaf was gone, and the helpers collapsed onto chairs, flour-dusted and smiling.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Literal detail",
                statement: "Details show the helpers worked hard and were happy.",
              },
            ],
            steps: [
              {
                reasoning: "Flour on them shows they worked with the baking.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Combined with 'smiling', it shows tired but happy helpers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "'Flour-dusted' shows they worked hard; with 'smiling' it shows tired but happy.",
            commonErrors: ["Ignoring the detail's literal meaning."],
          },
        },
        {
          id: "cie-ol-fl-rs-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How does skimming a text first prevent misreading its purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skimming",
                statement:
                  "Grasping the gist first frames all later detail correctly.",
              },
            ],
            steps: [
              {
                reasoning: "Skimming reveals whether a text argues, informs or narrates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "This frames how details should be interpreted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Prevents treating an argument as neutral information.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Knowing the purpose first frames detail correctly and prevents misreading tone.",
            commonErrors: ["Saying skimming is just 'reading fast'."],
          },
        },
        {
          id: "cie-ol-fl-rs-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Lost Keys",
          extract: {
            title: "The Lost Keys",
            author: "Written for Akademik Space",
            text: "Nadia checked her bag three times before leaving the house. The keys were not there. She retraced her steps to the bakery, where the owner remembered a girl with a red scarf asking for directions that morning.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about Nadia.", marks: 2 },
            { label: "b", prompt: "Explain what 'retraced her steps' means.", marks: 2 },
            { label: "c", prompt: "What might the red scarf detail suggest?", marks: 2 },
            { label: "d", prompt: "Predict what might happen next and justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unseen reading",
                statement: "Literal+context+inference-lite+prediction.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "She checked her bag three times; keys were missing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Went back along the route she had taken.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "To look for where she lost them.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "A possible clue identifying the girl who took them.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasonable inference from 'remembered'.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A plausible prediction, e.g. finding the keys or the girl.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified from the text's clues.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) retraced=went back (c) possible clue (d) justified prediction",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Meaning given.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Suggestion given.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Prediction justified.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Unsupported.", part: "d" },
            ],
            commonErrors: ["Answering from general knowledge instead of the text."],
          },
        },
        {
          id: "cie-ol-fl-rs-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Reading strategy.",
          extract: {
            title: "The Storm Warning",
            author: "Written for Akademik Space",
            text: "The weather forecast warned of severe storms from midnight. Residents boarded windows and moved cars into garages. By one o'clock the first lightning split the sky, and the wind began to peel tiles from rooftops across the valley.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about the storm preparations.", marks: 2 },
            { label: "b", prompt: "Explain what 'peel tiles' suggests about the wind.", marks: 2 },
            { label: "c", prompt: "How would scanning help answer a question about timing?", marks: 2 },
            { label: "d", prompt: "What is the main purpose of this text? Justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reading strategy",
                statement: "Literal+language+strategy+purpose.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Windows boarded and cars moved to garages.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "The wind is extremely strong, tearing tiles off.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Clear explanation of effect.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Scan for time words like 'midnight' and 'one o'clock'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Scanning targets specific detail quickly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "To inform/narrate a storm event.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Justified by factual, chronological detail.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Purpose correctly identified.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two preparations (b) wind is violent (c) scan time words (d) to inform/narrate",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Effect explained.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Strategy explained.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Purpose justified.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Answering from general knowledge instead of the text."],
          },
        },
        {
          id: "cie-ol-fl-rs-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why literal comprehension questions require precision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Precision",
                statement:
                  "Literal answers must quote or closely paraphrase stated information.",
              },
            ],
            steps: [
              {
                reasoning: "The answer must match what the text says, not interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vague or approximate answers lose marks.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Distractors often state true-but-unstated information.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Literal answers must match stated information exactly; interpretation loses marks.",
            commonErrors: ["Adding interpretation to a literal answer."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-inference",
      title: "Inference and deduction",
      skill: "Deduce implied meaning and evaluate evidence from unseen texts.",
      lesson: {
        sections: [
          {
            heading: "Reading between the lines",
            body: "Inference means working out what the writer implies without stating it. Look for: word connotations, contrasts, what is NOT said, and shifts in tone. Always anchor inferences in evidence from the text — 'the text suggests...' not 'I think...'.",
          },
          {
            heading: "Deduction chains",
            body: "A strong inference links evidence to conclusion: 'Her hands shook' + 'she avoided his eyes' + 'she practised the apology all night' = she is nervous and ashamed. One piece of evidence rarely proves an inference.",
          },
          {
            heading: "Writer's attitude",
            body: "Questions often ask how the writer feels or what their attitude is. Track shifts: a passage may begin neutrally and turn critical. Note evaluative adjectives and verbs that reveal stance.",
          },
        ],
        keyFormulas: [
          {
            name: "Inference",
            statement: "Evidence+reasoning=implied meaning (never guess).",
          },
        ],
        workedExample: {
          problem: "'He smiled, but his eyes were flat.' What can be inferred?",
          solution:
            "The smile may be insincere — the flat eyes contrast with it, suggesting hidden feelings or discomfort.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'inference'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising the whole text" },
              { id: "b", text: "Guessing without evidence" },
              { id: "c", text: "Copying the text exactly" },
              { id: "d", text: "Deducing meaning implied but not stated" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement:
                  "Deducing implied meaning from evidence in the text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Inference is evidence-based deduction, not guessing.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Deducing implied meaning from evidence",
            commonErrors: [
              "Choosing 'guessing' — inference requires textual evidence.",
            ],
          },
        },
        {
          id: "cie-ol-fl-in-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the extract and answer.",
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            text: "Amara rehearsed her answers in the bathroom mirror until the tiles fogged. When the interviewer smiled and asked about her 'journey', she noticed his pen tap, tap, tapping on the desk — the same rhythm as her own nervous heartbeat.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Link textual details to implied meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rehearsing until the mirror fogged shows anxiety and preparation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Her heartbeat matching the pen-tapping links her nerves to his manner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Inference: she is nervous and self-conscious in the interview.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Amara is anxious and self-conscious; the pen-tapping mirrors her heartbeat.",
            commonErrors: [
              "Stating what happens without inferring the underlying feeling.",
            ],
          },
        },
        {
          id: "cie-ol-fl-in-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How can a writer's attitude be detected in an unseen text?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Writer's attitude",
                statement:
                  "Evaluative word choice, tone shifts and selection of detail reveal the writer's stance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Adjectives and verbs carry approval or disapproval ('the dreary lecture' vs 'the inspiring lecture').",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Tone shifts signal changing attitude within a passage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "What the writer chooses to emphasise or omit also reveals stance.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear method-to-attitude explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Evaluative words+tone shifts+selection of detail reveal attitude.",
            commonErrors: ["Assuming the writer is neutral unless stated."],
          },
        },
        {
          id: "cie-ol-fl-in-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Inference and deduction.",
          extract: {
            title: "Grandmother's Kitchen",
            author: "Written for Akademik Space",
            text: "The kitchen still smelled of cardamom and woodsmoke, though grandmother had been gone two winters. Every tin on the shelf kept its label turned outward — names written in her careful, looping hand.\n\nDev kept his own mug on the highest shelf, the one nobody else used. It was chipped, and he had never once washed it properly. Some things, he thought, should stay exactly as they were.",
          },
          parts: [
            {
              label: "a",
              prompt: "State two literal details about the kitchen.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "What do the outward-turned labels suggest about grandmother?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Infer Dev's feelings about his grandmother.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "What might 'some things should stay exactly as they were' mean?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement:
                  "Literal+detail interpretation+character inference+symbolic meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Smells of cardamom/woodsmoke; labels turned outward in her hand.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Two accurate details.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Labels turned outward suggest orderliness and care for others.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Her careful hand suggests precision and affection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Inference linked to evidence.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Dev preserves her memory — keeping her mug untouched.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Chipped mug never washed shows devotion/attachment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Feeling inferred, not stated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "Dev wants to preserve her memory as it is — not move on.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Reasoned interpretation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) smells+labels (b) orderliness+affection (c) devotion/grief (d) preserving memory",
            levels: [
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Two details.",
                part: "a",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "Fewer than two.",
                part: "a",
              },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Trait inferred from evidence.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Feelings inferred.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No inference.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Interpretation given.",
                part: "d",
              },
              {
                level: "Level 1",
                marks: "0",
                descriptor: "No meaning.",
                part: "d",
              },
            ],
            commonErrors: ["Retelling the passage instead of inferring."],
          },
        },
        {
          id: "cie-ol-fl-in-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'deduction' in reading comprehension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing a conclusion from evidence in the text" },
              { id: "b", text: "Guessing randomly" },
              { id: "c", text: "Ignoring the text" },
              { id: "d", text: "Copying sentences exactly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deduction",
                statement:
                  "Drawing a conclusion by reasoning from textual evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Deduction = evidence-based conclusion.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Drawing a conclusion from evidence in the text",
            commonErrors: ["Confusing deduction with guessing."],
          },
        },
        {
          id: "cie-ol-fl-in-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What can be inferred about Marta's feelings toward the recipient?",
          extract: {
            title: "The Unsent Letter",
            author: "Written for Akademik Space",
            text: "Marta wrote the letter three times before she was satisfied. The first draft was angry; the second was too kind; the third struck the right note — firm, but not cruel. She sealed it, then left it on the table unsigned. Some apologies, she had learned, were better left unsaid.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She wants to punish the recipient" },
              { id: "b", text: "She feels completely indifferent" },
              { id: "c", text: "She has forgotten the offence" },
              { id: "d", text: "She wants to mend things without causing more hurt" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement:
                  "The careful drafting and unsigned letter suggest a desire to repair without harm.",
              },
            ],
            steps: [
              {
                reasoning: "'Firm, but not cruel' and 'better left unsaid' show restraint.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** She wants to mend things without causing more hurt",
            commonErrors: ["Inferring she doesn't care — the effort shows she does."],
          },
        },
        {
          id: "cie-ol-fl-in-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read the extract and give two details that suggest the new student feels nervous.",
          extract: {
            title: "The Empty Desk",
            author: "Written for Akademik Space",
            text: "The new student kept her eyes on her shoes during registration. When the teacher asked her name, she answered so quietly that only the front row heard. By Friday she had found a seat by the window and a friend who shared her sandwiches.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Link details to implied nervousness.",
              },
            ],
            steps: [
              {
                reasoning: "Eyes on shoes = avoiding contact, a sign of nerves.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Answering so quietly only the front row heard shows shyness.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Avoiding eye contact and answering too quietly both suggest nervousness.",
            commonErrors: ["Stating events without linking them to feeling."],
          },
        },
        {
          id: "cie-ol-fl-in-q8",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What might 'the waiting had become its own kind of ritual' suggest about Bramley?",
          extract: {
            title: "The Old Dog",
            author: "Written for Akademik Space",
            text: "Bramble waited by the gate each evening at five, though the boy who used to throw his ball had moved away years before. Neighbours said the dog was confused; Bramley's owner said she was loyal. Either way, the waiting had become its own kind of ritual.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Interpretation",
                statement:
                  "The phrase suggests the waiting is habitual, meaningful loyalty rather than confusion.",
              },
            ],
            steps: [
              {
                reasoning: "'Its own kind of ritual' implies the waiting has meaning for her.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It leans toward loyalty over confusion, supporting the owner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reasoned interpretation anchored in the text.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The waiting is a meaningful habit — loyalty rather than mere confusion.",
            commonErrors: ["Repeating the phrase without interpreting it."],
          },
        },
        {
          id: "cie-ol-fl-in-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the gap between what Marta does and what she might feel.",
          extract: {
            title: "The Unsent Letter",
            author: "Written for Akademik Space",
            text: "Marta wrote the letter three times before she was satisfied. The first draft was angry; the second was too kind; the third struck the right note — firm, but not cruel. She sealed it, then left it on the table unsigned. Some apologies, she had learned, were better left unsaid.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Subtext",
                statement:
                  "Actions can contradict or complicate stated or implied feelings.",
              },
            ],
            steps: [
              {
                reasoning: "She seals the letter — an act of sending or finality.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "She leaves it unsigned — withholding commitment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The gap suggests conflict between wanting to apologise and fearing consequences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear interpretation of subtext.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She prepares to apologise but hesitates — desire to repair conflicts with fear of hurting further.",
            commonErrors: ["Taking actions at face value without subtext."],
          },
        },
        {
          id: "cie-ol-fl-in-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Every inference in a comprehension answer must be based on...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guesswork" },
              { id: "b", text: "General knowledge" },
              { id: "c", text: "Evidence from the text" },
              { id: "d", text: "Personal opinion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference basis",
                statement: "Inferences must be anchored in textual evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence from the text is required.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Evidence from the text",
            commonErrors: ["Choosing 'personal opinion' — inference is text-based."],
          },
        },
        {
          id: "cie-ol-fl-in-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the new student sharing her friend's sandwiches suggest?",
          extract: {
            title: "The Empty Desk",
            author: "Written for Akademik Space",
            text: "The new student kept her eyes on her shoes during registration. When the teacher asked her name, she answered so quietly that only the front row heard. By Friday she had found a seat by the window and a friend who shared her sandwiches.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is beginning to settle in and make friends" },
              { id: "b", text: "She dislikes the school food" },
              { id: "c", text: "She still refuses to speak" },
              { id: "d", text: "She is being bullied" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Friendship detail signals settling in.",
              },
            ],
            steps: [
              {
                reasoning: "Sharing food = forming a friendship = settling in.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** She is beginning to settle in and make friends",
            commonErrors: ["Ignoring the positive change by Friday."],
          },
        },
        {
          id: "cie-ol-fl-in-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does Bramley's owner calling the dog 'loyal' reveal about her attitude?",
          extract: {
            title: "The Old Dog",
            author: "Written for Akademik Space",
            text: "Bramble waited by the gate each evening at five, though the boy who used to throw his ball had moved away years before. Neighbours said the dog was confused; Bramley's owner said she was loyal. Either way, the waiting had become its own kind of ritual.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Writer's attitude",
                statement: "Word choice reveals the speaker's stance.",
              },
            ],
            steps: [
              {
                reasoning: "'Loyal' is a positive judgement of the dog's behaviour.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It contrasts with neighbours' 'confused' — she admires rather than dismisses.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She admires the dog's devotion; 'loyal' is approving where neighbours are dismissive.",
            commonErrors: ["Missing the contrast between the two views."],
          },
        },
        {
          id: "cie-ol-fl-in-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How can a writer's attitude shift within a single passage?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Attitude shift",
                statement:
                  "Tone and word choice can move from neutral to critical or warm to cold.",
              },
            ],
            steps: [
              {
                reasoning: "Connotation of adjectives and verbs changes over the passage.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Punctuation and sentence structure can mark the turn.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Track the shift to describe the writer's changing stance.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Word connotation, punctuation and structure can shift the writer's attitude mid-passage.",
            commonErrors: ["Assuming the attitude stays constant."],
          },
        },
        {
          id: "cie-ol-fl-in-q14",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The Quiet Room",
          extract: {
            title: "The Quiet Room",
            author: "Written for Akademik Space",
            text: "The library's reading room was the only place where Tom felt the noise of the world could not reach him. He came every Thursday, same chair, same corner. The librarian never asked what he was reading — only stamped his card and nodded. Some rituals, he thought, needed no explanation.",
          },
          parts: [
            { label: "a", prompt: "State two literal details about Tom's routine.", marks: 2 },
            { label: "b", prompt: "What does 'the noise of the world could not reach him' suggest?", marks: 2 },
            { label: "c", prompt: "Infer Tom's relationship with the librarian.", marks: 2 },
            { label: "d", prompt: "What might 'rituals needed no explanation' mean?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Literal+imagery+relationship+symbolic meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "He comes every Thursday to the same chair.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate stated detail.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "The library is a refuge from outside pressures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Explains the 'noise' as metaphorical.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "A respectful, unintrusive routine between them.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Inferred from her nodding and not asking.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Some habits are meaningful without words.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Reasoned interpretation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) Thursday/same chair (b) refuge from pressure (c) respectful routine (d) habits need no words",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Suggestion given.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Relationship inferred.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Interpretation given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Retelling the passage instead of inferring."],
          },
        },
        {
          id: "cie-ol-fl-in-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Inference and deduction.",
          extract: {
            title: "The Photograph",
            author: "Written for Akademik Space",
            text: "The photograph had faded to the colour of weak tea. In it, her father stood at the edge of the pier, one hand shielding his eyes from the sun, the other holding a fish too small to keep. She had asked him once why he let it go. He had smiled and said, 'Some things are better returned.'",
          },
          parts: [
            { label: "a", prompt: "State two literal details about the photograph.", marks: 2 },
            { label: "b", prompt: "What does the faded colour suggest?", marks: 2 },
            { label: "c", prompt: "Infer what 'some things are better returned' might mean.", marks: 3 },
            { label: "d", prompt: "What might the photograph represent for the narrator?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Literal+symbolism+meaning+representation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Faded to weak-tea colour; father on a pier holding a small fish.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Accurate details.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Age and the passage of time have dimmed it.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Memory fades like the photograph.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Not everything should be kept or held onto.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Releasing can be a kindness or wisdom.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Reasoned interpretation.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "A link to her father and a lesson about letting go.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Meaning connected to memory and inheritance.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) two details (b) fading=time (c) letting go can be wise (d) link to father+lesson",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two details.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Fewer.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Suggestion given.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Interpretation given.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Representation given.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Describing the photograph without interpreting its meaning."],
          },
        },
        {
          id: "cie-ol-fl-in-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss why 'the text suggests' is stronger than 'I think' in inference answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence-based answers",
                statement:
                  "Anchoring claims to the text shows reasoning, not opinion.",
              },
            ],
            steps: [
              {
                reasoning: "'The text suggests' signals evidence-based reasoning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "'I think' presents opinion without textual support.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Exam marking rewards justified, text-linked inference.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear discussion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "'The text suggests' shows evidence-based reasoning; 'I think' is unsupported opinion.",
            commonErrors: ["Writing opinions instead of text-linked inferences."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-reading-notes",
      title: "Reading strategies — revision notes",
      summary: "Skim, scan, infer and deduce from unseen texts.",
      sections: [
        {
          heading: "Strategy order",
          body: "1) Skim the whole text for purpose and structure. 2) Scan for question keywords. 3) Answer literal questions precisely — no interpretation. 4) Use context clues for vocabulary.",
        },
        {
          heading: "Inference rules",
          body: "Infer only from evidence in the text. Link details to conclusions (deduction chains). Watch for connotations, contrasts, tone shifts and what is omitted.",
        },
        {
          heading: "Common traps",
          body: "Distractors that are true of the topic but not the passage. Confusing literal with inferred answers. Answering from prior knowledge rather than the text.",
        },
        {
          heading: "Exam checklist",
          body: "Did I skim first? Did I quote/paraphrase precisely? Is every inference anchored in textual evidence? Did I check each answer against the passage?",
        },
      ],
    },
  ],
};
