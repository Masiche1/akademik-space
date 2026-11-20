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
              { id: "c", text: "Skimming is for poetry; scanning for prose" },
              { id: "d", text: "Skimming is slow; scanning is fast" },
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
              { id: "a", text: "Deducing meaning implied but not stated" },
              { id: "b", text: "Copying the text exactly" },
              { id: "c", text: "Guessing without evidence" },
              { id: "d", text: "Summarising the whole text" },
            ],
            correctChoiceId: "a",
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
