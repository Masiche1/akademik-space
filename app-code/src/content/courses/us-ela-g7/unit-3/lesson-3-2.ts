import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6, levels8 } from "./levels.ts";

const STORM: TextExtract = {
  title: "The Storm Cellar",
  author: "Written for Akademik Space",
  text: "Lena counted the seconds between the lightning and the thunder. One. Two. The boom came before she reached three.\n\n\"Get down here, now!\" Papa shouted from the cellar door, his flashlight shaking in his fist.\n\n\"I'm coming,\" she said, but her feet would not move. The wheat field, which had been gold an hour ago, lay flat and gray under a sky the color of a bruise. Somewhere behind the barn, a sound like a freight train was growing.\n\n\"Lena!\"\n\nShe ran. The wind snatched her braid and slapped it against her cheek. Then Papa's hand closed around her wrist, and the door slammed above them, and the whole world went dark.",
};

const SUMMARY_DRAFT: TextExtract = {
  title: "Why Recycling Matters (draft)",
  author: "Written for Akademik Space",
  text: "Recycling is good. We recycle paper. We recycle cans. Paper can be made into new paper. Cans can be melted down. Recycling saves energy. Landfills fill up. I think everybody should recycle. The end.",
};

export const lesson32: Lesson = {
  id: "ela7-u3-lesson-3-2",
  code: "3-2",
  title: "Narrative Writing",
  goal: "I CAN write a narrative with dialogue, pacing and description, and connect my ideas with transitions, a formal style and a strong conclusion.",
  standards: ["W.7.3", "W.7.1c", "W.7.2c", "W.7.1e", "W.7.2e"],
  vocabulary: [
    { term: "Dialogue", definition: "The words characters speak aloud, punctuated with quotation marks." },
    { term: "Pacing", definition: "The speed at which events unfold; short sentences speed a scene up and detailed description slows it down." },
    { term: "Sensory detail", definition: "Description that appeals to sight, sound, smell, taste or touch." },
    { term: "Transition", definition: "A word or phrase that links ideas, sentences or paragraphs and shows the relationship between them." },
    { term: "Formal style", definition: "An objective, polite tone that avoids slang, contractions and personal chatter." },
    { term: "Conclusion", definition: "The final section of a text that follows from the ideas and leaves the reader with a sense of completion." },
  ],
  concepts: [
    {
      id: "ela7-u3-narrative-techniques",
      title: "Narrative techniques: dialogue, pacing and description",
      skill: "Use dialogue, pacing and sensory description to develop experiences, events and characters in a narrative.",
      lesson: {
        sections: [
          {
            heading: "Dialogue that does a job",
            body: "Good dialogue reveals character and moves the plot forward. Each speaker's words should sound like that person, and the dialogue should show feelings through what is said and how it is said ('shouted', 'whispered'). Start a new paragraph each time the speaker changes. Place the end punctuation inside the quotation marks and use a comma between a quotation and a speaker tag: \"Stay close,\" she whispered.",
          },
          {
            heading: "Pacing and description",
            body: "**Pacing** controls how fast the story feels. In a tense moment, use short sentences and strong verbs so events rush by. To slow down an important moment, add **sensory details** and thoughts. Description should be specific: instead of 'a scary sky', write 'a sky the color of a bruise'. Use description to build the mood, and use a clear sequence of events so the reader can follow what happens.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue", statement: "Characters' spoken words in quotation marks; a new paragraph for each new speaker." },
          { name: "Pacing", statement: "Short sentences and quick action speed a scene up; detail and reflection slow it down." },
          { name: "Sensory detail", statement: "Specific sights, sounds, smells, tastes and textures that put the reader inside the scene." },
        ],
        workedExample: {
          problem: "Rewrite this flat sentence as a short, vivid moment: 'Sam was nervous before the audition.'",
          solution: "Sam's palms were slick against the cold metal of the music stand. \"Next,\" called a voice from behind the door. His heart thumped so loudly that he was sure the judges could hear it. The nervousness is shown through touch, dialogue and a physical reaction rather than simply named, which lets the reader feel it.",
        },
      },
      questions: [
        {
          id: "ela7-u3-narrative-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STORM,
          stem: "Which technique does the writer use in the first paragraph to build tension?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long, detailed description that slows the action" },
              { id: "b", text: "Short sentences that make the moment feel quick and urgent" },
              { id: "c", text: "A flashback to an earlier time" },
              { id: "d", text: "A conversation between two characters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Pacing", statement: "Short sentences create speed and urgency." }],
            steps: [{ reasoning: "The fragments 'One. Two.' count down the seconds, creating suspense and a quick pace.", evidence: "One. Two.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)**. The short sentences and counting build urgency. There is no flashback or conversation in the first paragraph.",
            commonErrors: ["Choosing (d) because dialogue appears later in the passage, not in the first paragraph."],
          },
        },
        {
          id: "ela7-u3-narrative-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence of dialogue is punctuated correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"Stay close\", she whispered." },
              { id: "b", text: "\"Stay close,\" she whispered." },
              { id: "c", text: "\"Stay close.\" she whispered." },
              { id: "d", text: "Stay close, she whispered." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Punctuating dialogue", statement: "Place a comma inside the closing quotation mark before a speaker tag, and keep the tag lowercase." }],
            steps: [
              { reasoning: "The comma belongs inside the quotation marks when a speaker tag follows.", marks: 1, markCode: "AO5" },
              { reasoning: "The speaker tag 'she whispered' continues the sentence, so it is lowercase and ends with a period; the quotation marks are required to show speech.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(b)**. \"Stay close,\" she whispered. Choice (a) puts the comma outside, (c) ends the quotation with a period and leaves the tag stranded, and (d) lacks quotation marks.",
            commonErrors: ["Placing the comma outside the closing quotation mark."],
          },
        },
        {
          id: "ela7-u3-narrative-techniques-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short narrative paragraph (5-7 sentences) about a character who hears an unexpected noise at night. Include at least one line of dialogue and two sensory details, and vary your pacing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative techniques", statement: "Combine dialogue, sensory detail and varied pacing to develop the experience." },
              { kind: "convention", name: "Dialogue punctuation", statement: "Use quotation marks and commas correctly, with a new paragraph for each new speaker." },
            ],
            steps: [
              { reasoning: "Develops the event with at least two specific sensory details that create mood.", marks: 2, markCode: "AO4" },
              { reasoning: "Includes believable dialogue that reveals feeling or advances the event, and varies sentence length to control pacing.", marks: 2, markCode: "AO4" },
              { reasoning: "Punctuates dialogue correctly and uses accurate grammar and spelling.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "A thin scrape echoed from the kitchen. Maya froze, the cold floorboards pressing against her bare feet, and the smell of burnt toast still hung in the air. \"Hello?\" she whispered. Nothing. Then, slowly, the door swung open, and a small gray cat blinked up at her. She let out a shaky laugh.",
            commonErrors: ["Telling the emotion ('She was scared') instead of showing it.", "Dialogue with no quotation marks.", "Every sentence the same length, so the pace never changes."],
          },
        },
        {
          id: "ela7-u3-narrative-techniques-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: STORM,
          stem: "Answer all parts of this question about 'The Storm Cellar'.",
          parts: [
            { label: "a", prompt: "Write down one sensory detail from the third paragraph and say which sense it appeals to.", marks: 2 },
            { label: "b", prompt: "Explain how the writer uses dialogue and short paragraphs to create a sense of urgency.", marks: 6 },
            { label: "c", prompt: "Continue the story for one paragraph (5-7 sentences) after the door slams. Use description to slow the pace and dialogue to show how Lena and Papa feel.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing and dialogue", statement: "Short lines of speech and single-line paragraphs speed up a scene and show tension." },
              { kind: "technique", name: "Sensory description", statement: "Specific images of sight, sound, smell, taste and touch build mood." },
              { kind: "skill", name: "Analysis with evidence", statement: "Name the technique, quote briefly and explain the effect on the reader." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies an accurate sensory detail, for example a sight image.", evidence: "a sky the color of a bruise", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Names the correct sense (sight, or sound for 'a sound like a freight train').", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The command in the dialogue shows Papa's fear and the danger, and the exclamation marks add volume.", evidence: "Get down here, now!", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The one-word paragraph with her name repeats the shout, which makes the moment feel immediate and shows Lena is delaying.", evidence: "\"Lena!\"", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Short exchanges and the absence of long narration quicken the pace, so the reader feels time running out.", evidence: "\"I'm coming,\" she said, but her feet would not move.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Continues the events logically from the slammed door, keeping the setting and characters consistent.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Uses specific sensory description to slow the pace, such as the sound of the wind, the smell of damp earth or the cold of the cellar.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Includes dialogue that shows each character's feelings and a new paragraph for each speaker.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Punctuates dialogue and sentences accurately, with correct spelling.", marks: 2, markCode: "AO5" },
            ],
            levels: [...levels6("analysis", "b"), ...levels8("writing", "c")],
            finalAnswer: "(a) 'a sky the color of a bruise' (sight); 'a sound like a freight train' (sound). (b) Papa's command, 'Get down here, now!', and the one-word paragraph 'Lena!' show his panic and create urgency; the short exchanges leave no room for description, so the reader feels time running out. (c) 'Above them, the wind roared and the cellar walls shook. Lena pressed her back against the cold stone, tasting dust. \"Is it going to hit us?\" she whispered. Papa pulled her close. \"Not if we stay down here,\" he said, though his voice trembled.'",
            commonErrors: ["In (a), naming a sense that does not match the detail.", "In (b), saying 'it uses dialogue' without explaining the effect.", "In (c), retelling the storm in one long sentence with no dialogue."],
          },
        },
      ],
    },
    {
      id: "ela7-u3-transitions-style",
      title: "Transitions, formal style and conclusions",
      skill: "Use transitions to connect ideas, maintain a formal style and write a conclusion that follows from the argument or explanation.",
      lesson: {
        sections: [
          {
            heading: "Transitions show relationships",
            body: "A **transition** links ideas and shows how they relate. Use *for example* and *specifically* to add detail, *in addition* and *furthermore* to add an idea, *however* and *on the other hand* to contrast, *as a result* and *therefore* to show cause and effect, and *first*, *next* and *finally* to show sequence. Choose a transition for its meaning, not just because it sounds formal. Each paragraph should also link back to the claim or controlling idea.",
          },
          {
            heading: "Formal style and strong conclusions",
            body: "A **formal style** avoids slang, contractions and direct chatter with the reader ('Thanks for reading', 'The end'). Keep the tone objective and use precise vocabulary. A strong **conclusion** follows from and supports the argument or information presented: it restates the main idea in new words, pulls together the key points and leaves the reader with something to think about. It does not introduce a brand-new argument.",
          },
        ],
        keyFormulas: [
          { name: "Transitions", statement: "Words and phrases that show addition, contrast, cause and effect, example or sequence." },
          { name: "Formal style", statement: "An objective tone with precise words, no slang, and no direct address such as 'Thanks for reading'." },
          { name: "Conclusion", statement: "A final statement that follows from the ideas presented and restates the main point in new words." },
        ],
        workedExample: {
          problem: "Add a transition to show contrast: 'Recycling takes effort. It saves energy and reduces waste.'",
          solution: "Recycling takes effort; however, it saves energy and reduces waste. 'However' shows that the second idea contrasts with the first. 'Therefore' or 'for example' would be wrong here because the second sentence is neither a result nor an example. The semicolon and comma also keep the punctuation correct.",
        },
      },
      questions: [
        {
          id: "ela7-u3-transitions-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which transition best completes the sentence? \"The river flooded the road. ______, the bus route was closed for two days.\"",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "However" },
              { id: "b", text: "As a result" },
              { id: "c", text: "For instance" },
              { id: "d", text: "Meanwhile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Cause and effect transitions", statement: "As a result, therefore and consequently show that one event caused another." }],
            steps: [{ reasoning: "The closed road is the effect of the flood, so a cause-and-effect transition is needed.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** As a result. 'However' would signal contrast, 'for instance' an example and 'meanwhile' simultaneous events.",
            commonErrors: ["Choosing 'meanwhile' because it sounds like a time transition, though the two events are linked by cause."],
          },
        },
        {
          id: "ela7-u3-transitions-style-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SUMMARY_DRAFT,
          stem: "Which revision of the draft's final sentences, 'I think everybody should recycle. The end.', is best for a formal essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That is all I have to say about recycling, so thanks for reading." },
              { id: "b", text: "By recycling paper and cans, communities conserve energy and keep landfills from overflowing, so recycling deserves everyone's support." },
              { id: "c", text: "Recycling is super important and awesome, you guys." },
              { id: "d", text: "Also, composting is another thing people can do." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal conclusion", statement: "A conclusion follows from the points made, restates the main idea and uses a formal tone." }],
            steps: [
              { reasoning: "It sums up the key points (energy and landfills) from the draft and follows from them.", marks: 1, markCode: "AO4" },
              { reasoning: "It keeps a formal, objective tone with no slang or direct address, unlike (a) and (c); (d) introduces a new, unsupported idea.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(b)**. It restates the claim in new words and connects it to the evidence.",
            commonErrors: ["Choosing (a) because it sounds polite, though it is informal and adds nothing."],
          },
        },
        {
          id: "ela7-u3-transitions-style-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SUMMARY_DRAFT,
          stem: "Rewrite the draft's sentences 'Recycling is good. We recycle paper. We recycle cans. Paper can be made into new paper. Cans can be melted down.' as a connected paragraph of three or four sentences. Use at least two different transitions and a formal style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transitions", statement: "Choose transitions that match the relationship between ideas." },
              { kind: "convention", name: "Formal style", statement: "Objective tone, precise vocabulary and no slang." },
            ],
            steps: [
              { reasoning: "Combines the short sentences into connected sentences with a clear central idea.", marks: 2, markCode: "AO4" },
              { reasoning: "Uses at least two accurate transitions, such as 'for example' and 'in addition', that show the right relationship.", marks: 2, markCode: "AO4" },
              { reasoning: "Maintains a formal tone with precise words and correct punctuation.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "Recycling benefits communities because common materials can be reused. For example, used paper is pulped and made into new paper, while aluminum cans are melted down and formed into new ones. In addition, both processes use less energy than making products from raw materials.",
            commonErrors: ["Using 'however' or 'but' where no contrast exists.", "Joining sentences with 'and' repeatedly instead of transitions.", "Keeping 'we' and a casual tone."],
          },
        },
        {
          id: "ela7-u3-transitions-style-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SUMMARY_DRAFT,
          stem: "Answer all parts of this question about the draft 'Why Recycling Matters'.",
          parts: [
            { label: "a", prompt: "Identify two features of the draft that make its style informal or choppy.", marks: 2 },
            { label: "b", prompt: "Explain why the draft's final sentences, 'I think everybody should recycle. The end.', make a weak conclusion.", marks: 4 },
            { label: "c", prompt: "Rewrite the whole draft as one paragraph of five or six sentences, with a clear central idea, varied transitions, a formal style and a strong concluding sentence.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Transitions", statement: "Transitions connect ideas and make clear how they relate." },
              { kind: "convention", name: "Formal style and conclusion", statement: "A formal tone and a conclusion that follows from the evidence strengthen a text." },
              { kind: "skill", name: "Revision", statement: "Revise for purpose and audience by combining, replacing and reordering." },
            ],
            steps: [
              { part: "a", reasoning: "The sentences are very short and repetitive, so the text sounds choppy.", evidence: "We recycle paper. We recycle cans.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "The first-person opinion and phrases like 'The end' are informal.", evidence: "The end.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "'I think' presents an opinion with no support, so the conclusion does not follow from the facts about energy and landfills.", evidence: "I think everybody should recycle", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "'The end' is informal and does not leave the reader with a final thought or restate the idea in a meaningful way.", evidence: "The end", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Opens with a clear central idea about why recycling matters.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Combines the choppy sentences and uses varied, accurate transitions.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Ends with a conclusion that follows from the energy and landfill points and restates the main idea in new words.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Maintains a formal tone with accurate conventions.", marks: 2, markCode: "AO5" },
            ],
            levels: levels8("writing", "c"),
            finalAnswer: "(a) Very short repetitive sentences; the informal ending 'The end.' (b) 'I think' is an unsupported opinion and 'The end' is informal, so the conclusion neither follows from the facts nor restates the idea. (c) 'Recycling matters because it protects both energy and land. Paper can be pulped and made into new paper, and metal cans can be melted down and reshaped. As a result, factories use less energy than they would to make the same products from raw materials. In addition, each recycled item is one less piece of waste in an overcrowded landfill. For these reasons, communities should make recycling a daily habit.'",
            commonErrors: ["In (a), only noting that the draft is 'short'.", "In (b), saying the conclusion is 'too short' without explaining why it fails.", "In (c), adding new facts that contradict the draft or keeping the choppy sentences."],
          },
        },
      ],
    },
  ],
};
