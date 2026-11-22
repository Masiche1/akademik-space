import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const FERRY: TextExtract = {
  title: "The Last Crossing",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "On the morning the ferry stopped running, Ines Calder walked down to the landing anyway. She had made the crossing twice a day for nineteen years, first as a student and then as a teacher, and her body did not know how to begin a morning any other way. The dock was empty. The ropes were coiled. A boy was fishing off the end with a line that had no hook on it, and when she asked him why, he said that he liked the waiting.\n\nShe sat beside him. Across the water, the far shore, the town where she worked, looked smaller than she remembered, a few roofs and a steeple, no more than a drawing of a place. She tried to recall what she had hoped to find there on the first day. She could not.\n\nThe next day there was a bridge, and she crossed it in six minutes.",
};

const EXPLAIN_TWO: TextExtract = {
  title: "The Neighbor's Window",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "Every evening Mr. Okafor watered the geraniums on his sill, though the geraniums had died in October. He did it slowly, with a small green can, and he talked to them in a low, even voice. The children on the block, who had been told to leave him alone, watched from the stoop. One of them swore that she had seen a face in the apartment behind him, a woman's face, gone before she could point.\n\nOn Thursday his daughter came, took the can from his hands, and carried the pots down the stairs without a word. Mr. Okafor stood at the empty window for a long time. Then, very carefully, he lowered the blind.",
};

export const lesson13: Lesson = {
  id: "ela11-u1-lesson-1-3",
  code: "1-3",
  title: "Structure and Interpretation",
  goal: "I CAN explain how an author's structural choices contribute to meaning and aesthetic impact, and evaluate competing interpretations of a text, supporting one with evidence and acknowledging what the text leaves uncertain.",
  standards: ["RL.11-12.5", "RL.11-12.1", "RL.11-12.7"],
  vocabulary: [
    { term: "In medias res", definition: "Beginning a story in the middle of the action, so that earlier events are revealed later." },
    { term: "Frame narrative", definition: "A story set within another story, where an outer narrator introduces or surrounds the main tale." },
    { term: "Unreliable narrator", definition: "A narrator whose account is limited, biased, or mistaken, so the reader must question it." },
    { term: "Tragic resolution", definition: "An ending that brings loss or downfall, often following from the character's choices or flaws." },
    { term: "Comic resolution", definition: "An ending that restores order or harmony, often through reconciliation or a return to community." },
    { term: "Interpretation", definition: "A reasoned reading of what a text means, supported by evidence from the text." },
    { term: "Textual evidence", definition: "Specific words, details, or structural features of a text that support a claim." },
  ],
  concepts: [
    {
      id: "ela11-u1-structure-meaning",
      title: "Structural choices and meaning",
      skill: "Explain how choices about where to begin, where to end, how to frame the story, and how to resolve it contribute to meaning and aesthetic impact.",
      lesson: {
        sections: [
          {
            heading: "Structure is a choice",
            body: "Every story could have been arranged differently. An author decides **where to begin** (at the start, or **in medias res**), **where to end** (a tidy conclusion, a question, a return to the beginning), whether to use a **frame** around the main events, and whether the resolution is **tragic** or **comic**. When you analyze structure, imagine the alternative: what would change if the story began earlier, ended sooner, or came from a different narrator? The difference reveals what the choice contributes.",
          },
          {
            heading: "Aesthetic impact",
            body: "Structure creates meaning and feeling at the same time. A story that ends with a short, flat sentence can leave a hard silence; a circular story that returns to its opening image can suggest that nothing has changed; a frame that introduces a doubtful narrator can make the reader suspicious of everything that follows. State the choice, quote the key moment, and explain both the meaning (what the choice makes us understand) and the impact (what it makes us feel).",
          },
        ],
        keyFormulas: [
          { name: "Beginning and ending", statement: "Where a text starts and stops shapes what readers value and what they are left to feel." },
          { name: "Frame narrative", statement: "An outer story that surrounds the main story and frames how we judge it." },
          { name: "Structure analysis", statement: "Name the choice, quote the moment, explain the meaning, then explain the effect on the reader." },
        ],
        workedExample: {
          problem: "How does the final sentence of 'The Last Crossing' contribute to the meaning of the passage?",
          solution: "The passage ends with 'The next day there was a bridge, and she crossed it in six minutes.' The sentence is short and flat, in sharp contrast to the lingering description of the dock and the boy who 'liked the waiting'. The speed of 'six minutes' replaces nineteen years of slow crossings, so what Ines has lost is the time that gave the journey meaning. Ending abruptly on this fact, without comment, leaves the reader to feel the loss that she cannot name. The structure makes the theme of change and the cost of efficiency felt rather than stated.",
        },
      },
      questions: [
        {
          id: "ela11-u1-structure-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FERRY,
          stem: "What does the final sentence ('The next day there was a bridge, and she crossed it in six minutes') do to the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ends abruptly on a plain fact that contrasts with the slow crossings she lost." },
              { id: "b", text: "It explains why the boy was fishing without a hook." },
              { id: "c", text: "It shows that Ines is delighted with the new bridge." },
              { id: "d", text: "It begins a new story about the bridge builders." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Closing contrast", statement: "A short, plain ending can contrast with a longer, reflective section to emphasize loss." }],
            steps: [{ reasoning: "The sentence is short and factual and contrasts with the earlier mood of waiting and memory, so it ends the passage with the sense of loss.", evidence: "she crossed it in six minutes", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)**. The sentence closes on a flat fact. Nothing in the text says she is delighted (c), and it does not explain the boy's line (d).",
            commonErrors: ["Reading the ending as a happy resolution because the crossing is faster."],
          },
        },
        {
          id: "ela11-u1-structure-meaning-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FERRY,
          stem: "The passage begins on 'the morning the ferry stopped running'. Explain what is gained by beginning at this moment rather than at the start of Ines's career.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Considering the alternative", statement: "Imagine a different starting point and say what would be lost." }],
            steps: [
              { reasoning: "Beginning at the end of the ferry's service makes the story about loss and endings from the first line.", evidence: "On the morning the ferry stopped running", marks: 1, markCode: "AO2" },
              { reasoning: "The history is given afterward as memory ('nineteen years'), so the reader first sees the empty dock and then learns what it means.", evidence: "She had made the crossing twice a day for nineteen years", marks: 1, markCode: "AO1" },
              { reasoning: "Starting at the ending creates a reflective, elegiac mood, focused on feeling rather than events.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Beginning 'on the morning the ferry stopped running' puts the loss first, and the nineteen years of her routine arrive as memory, so we understand the empty dock through what it replaces. The structure gives the passage a reflective mood instead of a plot.",
            commonErrors: ["Saying the beginning is 'interesting' without explaining the effect."],
          },
        },
        {
          id: "ela11-u1-structure-meaning-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FERRY,
          stem: "Analyze how the writer uses structure, including the order of the three paragraphs and the placement of the boy, to develop a theme about time and change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural contrast", statement: "Sequencing slow and fast sections shows the difference between two ways of experiencing time." },
              { kind: "technique", name: "Foil", statement: "A secondary character can embody an alternative attitude to the main character's." },
            ],
            steps: [
              { reasoning: "The first paragraph moves slowly through habit and detail (the coiled ropes, the long history), establishing a patient pace.", evidence: "twice a day for nineteen years", marks: 2, markCode: "AO2" },
              { reasoning: "The boy acts as a foil: he enjoys the waiting itself, an attitude to time that Ines has lost or never had.", evidence: "he liked the waiting", marks: 2, markCode: "AO1" },
              { reasoning: "The middle paragraph shrinks the town and shows memory failing, so purpose has faded.", evidence: "no more than a drawing of a place", marks: 2, markCode: "AO2" },
              { reasoning: "The final paragraph is one line, mirroring the speed of the bridge and ending abruptly on a loss of meaning.", evidence: "she crossed it in six minutes", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8),
            finalAnswer: "The passage moves from a slow, detailed first paragraph to a one-sentence final paragraph, so its structure enacts the change it describes. The boy, who 'liked the waiting', is a foil to Ines, who has lost track of why she crossed ('She could not' recall). The far shore becomes 'no more than a drawing of a place', and the closing line, 'six minutes', shows the speed of the bridge replacing time that once had meaning. Structure and theme are therefore the same shift from slow to fast.",
            commonErrors: ["Retelling the order of events without discussing its effect.", "Ignoring the boy's role."],
          },
        },
        {
          id: "ela11-u1-structure-meaning-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: FERRY,
          stem: "Answer all parts of this question about the structure of the original passage.",
          parts: [
            { label: "a", prompt: "Identify the point at which the passage shifts from describing the scene to describing Ines's thoughts, and quote a phrase that marks the shift.", marks: 3 },
            { label: "b", prompt: "Explain how the contrast between the second and third paragraphs contributes to the passage's ending.", marks: 5 },
            { label: "c", prompt: "Evaluate how effectively the writer's choice of an ending, rather than a resolution, shapes the reader's final impression of Ines. Refer to the whole passage.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Open ending", statement: "An ending that does not resolve leaves readers to reflect on meaning." },
              { kind: "skill", name: "Evaluating structure", statement: "Judge the effect of a structural choice against what an alternative would have done." },
            ],
            steps: [
              { part: "a", reasoning: "The shift happens at the start of the second paragraph, when the narrative moves from external action to memory and thought.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Quotes a marker of thought such as 'She tried to recall'.", evidence: "She tried to recall what she had hoped to find there", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Explains that this movement inward shows that the loss is emotional rather than physical.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The second paragraph is slow and uncertain, focused on loss of memory ('She could not').", evidence: "She could not.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The third is brisk and factual, with a precise time, so the bridge represents efficiency.", evidence: "in six minutes", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The contrast makes the ending an ironic reply to her question: the bridge is the answer to 'what was it for?', and it offers no meaning.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The ending gives no comment or reconciliation, so the reader must judge the loss for themselves.", evidence: "she crossed it in six minutes", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Compared with a resolution in which Ines grieves or protests, the flat ending presents her as quietly accepting, which makes her seem more resigned and perhaps more sad.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The earlier image of the boy fishing without a hook sets up a counter-attitude, so her ending without reflection feels like a loss of that capacity to wait.", evidence: "a line that had no hook on it", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The ambiguity of whether she regrets it or has simply adapted leaves the final impression open and complex.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a judgment that the open ending is effective, because understatement produces a stronger feeling than a stated lament would.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(10, "c"),
            finalAnswer: "(a) The shift comes at the start of the second paragraph: 'She tried to recall what she had hoped to find there.' (b) The slow, uncertain second paragraph ends 'She could not.', and the brisk third paragraph gives 'six minutes', so the bridge answers her unspoken question with efficiency and no meaning. (c) The open ending is effective: with no comment, Ines appears resigned, and the boy who 'liked the waiting' shows what she has lost. Whether she regrets it or has merely adapted is left open, and the understatement produces more feeling than a stated lament would.",
            commonErrors: ["In (a), naming a shift without evidence.", "In (b), treating the two paragraphs separately.", "In (c), saying the ending is 'sad' without explaining how structure makes it so."],
          },
        },
      ],
    },
    {
      id: "ela11-u1-interpretation-evidence",
      title: "Evaluating and supporting interpretations",
      skill: "Weigh multiple interpretations of a text, support one with textual evidence, and acknowledge where the text leaves matters uncertain.",
      lesson: {
        sections: [
          {
            heading: "A good interpretation",
            body: "An **interpretation** is a reasoned claim about what a text means. It is not a fact the text announces, and it is not a free opinion either. A strong interpretation (1) fits the details, (2) accounts for the details that seem to resist it, and (3) is supported by precise **textual evidence**. When a text allows more than one reading, test each: which details support it, which details trouble it, and which explains more of the text?",
          },
          {
            heading: "Where the text is uncertain, and other versions",
            body: "Some questions cannot be settled from the text, such as whether the face in the window was real. Say so. Write 'the text suggests' or 'it is left unclear whether', and then argue for the reading you find strongest while acknowledging the other. You can also compare how a story is interpreted in a different medium, such as a stage or film version described in words: a director must decide what the page leaves open (is the face visible?), and those decisions show one interpretation among several (RL.11-12.7). Judge what each version gains and loses.",
          },
        ],
        keyFormulas: [
          { name: "Interpretation", statement: "A claim about meaning that fits the evidence and accounts for the details that seem to resist it." },
          { name: "Acknowledging uncertainty", statement: "Where the text does not decide, name the open question and argue for the stronger reading." },
          { name: "Medium comparison", statement: "Describe what a version shows or decides, and what the original leaves open." },
        ],
        workedExample: {
          problem: "In 'The Neighbor's Window', is Mr. Okafor mourning, or is he in denial? Argue for one reading.",
          solution: "The text allows both. He talks 'in a low, even voice' to dead geraniums, which suggests mourning that has become ritual, and the child's glimpse of a woman's face suggests he is not alone, which supports a reading of memory or grief. I find mourning the stronger reading. He lowers the blind 'very carefully' only after his daughter takes the pots, a gesture of closing rather than of confusion. The text leaves unclear whether the face was real, but this uncertainty supports mourning: it is a memory that others cannot see.",
        },
      },
      questions: [
        {
          id: "ela11-u1-interpretation-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXPLAIN_TWO,
          stem: "Which statement is an interpretation, rather than a plain statement of what the text says?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "His daughter carries the pots downstairs on Thursday." },
              { id: "b", text: "The geraniums died in October." },
              { id: "c", text: "Mr. Okafor's watering of dead plants is a ritual that keeps his grief alive." },
              { id: "d", text: "Mr. Okafor waters the geraniums every evening." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Interpretation", statement: "A claim about meaning that goes beyond what the text states directly." }],
            steps: [{ reasoning: "Options (b), (c), and (d) restate events in the text, while (a) makes a claim about why the action matters.", evidence: "Every evening Mr. Okafor watered the geraniums on his sill, though the geraniums had died in October.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. It explains the meaning of the action. The others are direct statements of events.",
            commonErrors: ["Choosing a plain fact because it is easiest to find in the text."],
          },
        },
        {
          id: "ela11-u1-interpretation-evidence-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXPLAIN_TWO,
          stem: "A student says that the face the girl sees proves a ghost lives in the apartment. Explain why this claim goes beyond the evidence, and state what the text actually allows.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Testing a claim against evidence", statement: "A claim should rest on what the text shows, and overstate nothing." }],
            steps: [
              { reasoning: "The girl 'swore' she saw it, but it was 'gone before she could point', so the report is unconfirmed.", evidence: "gone before she could point", marks: 1, markCode: "AO1" },
              { reasoning: "No other character sees the face, so the text gives no proof.", marks: 1, markCode: "AO1" },
              { reasoning: "The text allows a ghost, a visitor, a child's imagination, or a memory, and does not decide among them.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The girl only 'swore' she saw a face that was 'gone before she could point', and no one confirms it. The text allows several explanations, a ghost, a visitor, or imagination, without deciding, so 'proves a ghost' overstates the evidence.",
            commonErrors: ["Accepting the claim because a ghost is the most dramatic reading.", "Saying the claim is wrong without using evidence."],
          },
        },
        {
          id: "ela11-u1-interpretation-evidence-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXPLAIN_TWO,
          stem: "Two readers disagree. Reader A says that Mr. Okafor is confused and does not know the geraniums are dead. Reader B says that he knows and is performing a ritual of mourning. Evaluate both interpretations and argue for the one you find stronger.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weighing interpretations", statement: "Test each reading against the evidence, including details that trouble it." },
              { kind: "skill", name: "Acknowledging uncertainty", statement: "Say what the text leaves open before committing to a reading." },
            ],
            steps: [
              { reasoning: "Reader A's support: he waters dead plants and talks to them, which might suggest confusion.", evidence: "though the geraniums had died in October", marks: 2, markCode: "AO1" },
              { reasoning: "A trouble for A: his actions are slow and deliberate, 'a small green can', 'a low, even voice', which suggest ritual, not confusion.", evidence: "a low, even voice", marks: 2, markCode: "AO2" },
              { reasoning: "Reader B's support: the final blind is lowered 'very carefully' and 'for a long time' he stands at the empty window, which suggests understanding of the loss.", evidence: "Then, very carefully, he lowered the blind.", marks: 2, markCode: "AO1" },
              { reasoning: "Reaches a judgment and acknowledges uncertainty: the text never states his awareness, but B explains more details.", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8),
            finalAnswer: "Reader A can point to the dead geraniums, but the evening routine is too composed to suggest confusion: the 'small green can' and 'low, even voice' read as ritual. Reader B is better supported by the ending, where he stands at the empty window 'for a long time' and lowers the blind 'very carefully', as if closing something deliberately. The text never states what he knows, so neither is certain, but B accounts for more of the detail.",
            commonErrors: ["Choosing a reading without testing the other.", "Ignoring the ending as evidence."],
          },
        },
        {
          id: "ela11-u1-interpretation-evidence-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: EXPLAIN_TWO,
          stem: "Answer all parts of this question about the original passage and its possible staging.",
          parts: [
            { label: "a", prompt: "State one detail the text leaves uncertain, and explain why it is uncertain.", marks: 3 },
            { label: "b", prompt: "A film adaptation shows the woman's face clearly in the window. Explain how this decision changes the interpretation of the passage.", marks: 5 },
            { label: "c", prompt: "Evaluate which version, the printed text as written or the film's clear image, better suits the passage's central meaning. Support your answer with evidence from the text and acknowledge the other view.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Textual uncertainty", statement: "A text may deliberately leave a detail undecided; naming it is part of a strong reading." },
              { kind: "skill", name: "Comparing media", statement: "A visual version must decide what a written one can leave open." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies the uncertain detail: whether the face in the window is real.", evidence: "One of them swore that she had seen a face", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is a single child's report, unconfirmed, and 'gone before she could point'.", evidence: "gone before she could point", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Explains that the text never returns to it, so it stays open.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Showing the face clearly decides the question: the woman is visible, so a ghost or visitor is likely.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "This removes the reading in which the face is a child's imagination or a memory.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It shifts the focus from Mr. Okafor's inner life to a mystery plot.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The printed text's strength: uncertainty mirrors grief, which cannot be confirmed by others.", evidence: "gone before she could point", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The central moment is the daughter's removal of the pots and the blind, not the face, so the focus should stay on his ritual.", evidence: "carried the pots down the stairs without a word", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "The film's strength: a clear image can give an emotional jolt and make grief tangible, supporting a reading that he is not alone in the apartment.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Acknowledges that a visual medium must decide something and that a suggestive, brief shot might keep some uncertainty.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a supported judgment that the written ambiguity better suits the passage's meaning.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(12, "c"),
            finalAnswer: "(a) Whether the face is real: only a child 'swore' she saw it, and it was 'gone before she could point'. (b) A clear image decides the question and removes the reading of memory or imagination, shifting the passage toward a mystery rather than a portrait of grief. (c) The printed text suits the passage better. Its uncertainty mirrors grief, which others cannot see, and its weight falls on the daughter taking the pots 'without a word' and Mr. Okafor lowering the blind. A film could achieve similar effects with a brief, ambiguous shot, and a clear image does give the grief a tangible form, but the page's openness is closer to the passage's meaning.",
            commonErrors: ["In (a), choosing a detail the text states clearly.", "In (b), describing the film without the effect on interpretation.", "In (c), preferring one version without evidence or acknowledging the other."],
          },
        },
      ],
    },
  ],
};
