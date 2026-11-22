import type { Lesson } from "../../../types.ts";
import {
  tenseConsistencyQuestions,
  tensesQuestions,
} from "./expanded-questions.ts";

export const lesson22: Lesson = {
  id: "mll2-u2-lesson-2-2",
  code: "2-2",
  title: "Tenses: Past, Present and Future",
  goal: "I CAN use past, present and future tenses correctly and keep tense consistent within a text.",
  standards: [
    "MYP Language and Literature",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Tense", definition: "The form of a verb that shows when an action happens — past, present or future." },
    { term: "Past tense", definition: "Verbs for completed actions — 'walked', 'ate', 'was'." },
    { term: "Present tense", definition: "Verbs for actions happening now or generally — 'walk', 'eats', 'is'." },
    { term: "Future tense", definition: "Verbs for actions that will happen — 'will walk', 'is going to eat'." },
    { term: "Consistent tense", definition: "Using the same tense throughout a piece of writing unless there is a reason to change." },
  ],
  concepts: [
    {
      id: "mll2-u2-tenses",
      title: "Using tenses",
      skill: "Choose the right tense for when an action happens and keep it consistent.",
      lesson: {
        sections: [
          {
            heading: "The three tenses",
            body: "**Past tense** tells what already happened: 'She **walked** home.' **Present tense** tells what happens now or regularly: 'She **walks** home every day.' **Future tense** tells what will happen: 'She **will walk** home tomorrow' or 'She **is going to walk** home.'",
          },
          {
            heading: "Time signals",
            body: "Words like **yesterday**, **last week**, **ago** signal past tense. **Now**, **today**, **every day** signal present. **Tomorrow**, **next week**, **soon** signal future. Match your verb to the time word.",
          },
          {
            heading: "Keeping tense consistent",
            body: "In a story, keep the same tense unless you have a reason to change. Shifting randomly confuses readers: 'She walked to school. She opens her bag. She sat down.' → keep it all past: 'She walked... she opened... she sat...'",
          },
        ],
        keyFormulas: [
          { name: "Tense signals", statement: "Past: yesterday, ago, last. Present: now, today, every day. Future: tomorrow, next, will." },
        ],
        workedExample: {
          problem: "Choose the right tense: 'Tomorrow, we ___ (visit) the museum.'",
          solution: "Future: 'Tomorrow, we will visit the museum' or 'are going to visit'.",
        },
      },
      questions: [
        {
          id: "mll2-u2-tenses-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is in the past tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She will walk to school tomorrow." },
              { id: "b", text: "She walks to school every day." },
              { id: "c", text: "She is walking to school now." },
              { id: "d", text: "She walked to school yesterday." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Past tense", statement: "Past tense verbs describe completed actions." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'walked' + 'yesterday' = past tense — (b).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** She walked to school yesterday.",
          },
        },
        {
          id: "mll2-u2-tenses-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite in the future tense: 'We eat dinner at six.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Future tense", statement: "Use 'will' + base verb or 'is/are going to' + base verb." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'We will eat dinner at six' or 'We are going to eat dinner at six' — both correct future forms.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): 'eat' stays in base form after 'will'; 'are going to' also takes the base verb.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "We will eat dinner at six. (or 'We are going to eat...')",
          },
        },
        {
          id: "mll2-u2-tenses-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Fix the tense consistency: 'Yesterday, Sam rides his bike to school. He sees a cat. He stops to pet it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tense consistency", statement: "Keep one tense unless there is a clear reason to change." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'yesterday' signals past — all verbs must be past.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): corrected — 'Yesterday, Sam rode his bike to school. He saw a cat. He stopped to pet it.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): consistent past tense keeps the timeline clear for the reader.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Yesterday, Sam rode his bike to school. He saw a cat. He stopped to pet it.",
          },
        },
        {
          id: "mll2-u2-tenses-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write one sentence in the past tense about a holiday.", marks: 1 },
            { label: "b", prompt: "Write the same event in the present tense.", marks: 1 },
            { label: "c", prompt: "Write the same event in the future tense.", marks: 1 },
            { label: "d", prompt: "Explain which tense is most common in stories and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tense usage", statement: "Stories usually use past tense to narrate events as if retelling them." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): a correct past tense sentence, e.g. 'We visited the beach last summer.'", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): the same event in present, e.g. 'We visit the beach every summer.'", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D (Using language): the same event in future, e.g. 'We will visit the beach next summer.'", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion A (Analysing): past tense dominates stories because they retell completed events.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Criterion A (Analysing): present tense can create immediacy ('historical present') but past is the convention.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. 'We visited the beach last summer.' (b) 'We visit the beach every summer.' (c) 'We will visit the beach next summer.' (d) Past tense — stories retell events.",
          },
        },
        ...tensesQuestions,
      ],
    },
    {
      id: "mll2-u2-tense-consistency",
      title: "Tense in narrative",
      skill: "Understand why stories use past tense and how tense shifts signal time changes.",
      lesson: {
        sections: [
          {
            heading: "Stories in past tense",
            body: "Most stories are told in the **past tense** — 'She walked', 'he said', 'they ran'. This creates the feeling that the events already happened and we are hearing them retold.",
          },
          {
            heading: "Flashbacks and shifts",
            body: "Writers sometimes **shift tense** on purpose. A **flashback** to earlier events might use past perfect ('she had never seen snow') or shift to present for immediacy. Signals like 'meanwhile', 'years earlier' warn the reader of a time change.",
          },
          {
            heading: "Dialogue tenses",
            body: "When reporting speech, the tense may shift: direct 'I am happy' becomes indirect 'she said she was happy'. This **backshift** is normal in reported speech.",
          },
        ],
        keyFormulas: [
          { name: "Tense in narrative", statement: "Past tense for main story; shifts signal flashbacks or reported speech." },
        ],
        workedExample: {
          problem: "Why might a writer use 'She had never seen snow' instead of 'She never saw snow'?",
          solution: "Past perfect ('had seen') shows the seeing happened before the main past-time event — an earlier experience.",
        },
      },
      questions: [
        {
          id: "mll2-u2-tense-consistency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why do most stories use the past tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it is easier to spell" },
              { id: "b", text: "Because stories retell events that already happened" },
              { id: "c", text: "Because past tense is shorter" },
              { id: "d", text: "Because present tense is wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative tense", statement: "Past tense frames events as already completed and retold." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): past tense suggests the story is being retold after the fact — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because stories retell events that already happened",
          },
        },
        {
          id: "mll2-u2-tense-consistency-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She opened the letter. It was from her brother, who had left for Australia ten years ago. He wrote that he was coming home for the first time.",
          },
          stem: "Why does the writer use 'had left' instead of 'left'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Past perfect", statement: "Past perfect ('had left') shows an action completed before the main past-time event." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): 'had left' (past perfect) places the leaving before she opened the letter — it was already in the past.", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): simple past 'left' would wrongly suggest the leaving happened at the same time as opening the letter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Had left' shows the brother's departure happened before she opened the letter — earlier on the timeline.",
          },
        },
        {
          id: "mll2-u2-tense-consistency-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Timelines",
            author: "Written for Akademik Space",
            text: "Tom was twenty now. Ten years earlier, he had been a boy who collected shells. That summer, he had found a strange one — grey, heavy, with a hole straight through it.",
          },
          stem: "Explain how the tense choices ('was', 'had been', 'had found') help the reader understand the timeline.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tense and time", statement: "Different tenses position events on a timeline relative to the main narrative." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'was' (simple past) is the main narrative time — Tom is twenty now.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'had been' and 'had found' (past perfect) place the childhood events before 'now' — earlier in his life.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the shift signals a flashback — the reader understands these are memories, not current events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Simple past sets 'now'; past perfect ('had been', 'had found') marks the earlier childhood events — a flashback structure.",
          },
        },
        {
          id: "mll2-u2-tense-consistency-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this passage.",
          extract: {
            title: "The Return",
            author: "Written for Akademik Space",
            text: "Amara stood at the station. The train that had brought her father home ten years ago pulled in — but it was empty. No one got off.\n\nShe realized then: he had never really left. He had only been waiting for her to come back.",
          },
          parts: [
            { label: "a", prompt: "Identify the main narrative tense.", marks: 1 },
            { label: "b", prompt: "Explain the function of 'had brought' and 'had never really left' in the timeline.", marks: 2 },
            { label: "c", prompt: "Explain how the tense choices create the story's emotional effect.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tense and meaning", statement: "Tense positions events in time; past perfect deepens backstory and emotional layering." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): main narrative is simple past — 'stood', 'pulled in', 'realized'.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion A (Analysing): 'had brought' places the father's arrival before her current moment — past perfect for earlier events.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'had never really left' reframes the whole backstory — his absence was an illusion, deepening the reveal.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the layering of tenses mirrors the emotional layering — present shock over past events.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): past perfect makes the reveal feel like a discovery of what was always true.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Simple past. (b) 'had brought'/'had never left' are past perfect placing earlier events before the present moment. (c) The tense layering mirrors the emotional reveal.",
          },
        },
        ...tenseConsistencyQuestions,
      ],
    },
  ],
};
