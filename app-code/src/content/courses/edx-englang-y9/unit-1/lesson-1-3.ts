import type { Lesson, TextExtract } from "../../../types.ts";

const THE_LETTER: TextExtract = {
  title: "The Last Train to Aldermoor",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "It was a bright, brisk morning in March, and the whole of Aldermoor station seemed to be in a bustle of cheerful departure. Porters trundled their barrows along the platform; a boy sold newspapers at the top of his voice; and Miss Eleanor Whitcombe, in her new blue travelling dress, stood beside her trunk and thought that she had never been so happy in her life.\n\nShe was going to her brother. For six years he had been in India, and for six years she had kept house for an aunt whose temper was as chill as her parlour; and now, at last, he had sent for her, and there was a ticket in her glove and a purse of sovereigns in her bag.\n\nThe train came in with a roar. Eleanor drew a breath, and was about to step forward when a telegraph boy pushed through the crowd and thrust a yellow envelope into her hand.\n\nShe read it once. The paper did not tremble, for her hand had gone quite still. Behind her the whistle shrilled; the porters shouted; the great engine shuddered, sighed and began to move. And Eleanor Whitcombe stood on the empty platform, looking at a ticket to a place she would never see.\n\nThe station clock struck nine. It struck, she thought, a great deal too loudly.",
};

const EDITORIAL: TextExtract = {
  title: "The Village Clock",
  author: "Written for Akademik Space",
  source: "Original passage in the style of a nineteenth-century novel",
  text: "Nobody in Great Hollin could say when the church clock had last told the right time, but nobody in Great Hollin much minded. It had stood at ten minutes past four since the winter of the great flood, and the villagers had grown accustomed to it as one grows accustomed to an eccentric uncle.\n\nThen, in the spring, the new curate arrived, a thin, eager young man with a notebook, and within a week the clock was the talk of every parlour. Mr Penrose had a passion for exactness. He measured the tower. He consulted a clockmaker in the town. He preached, to a bewildered congregation, upon the sin of wasted hours.\n\nThe clock was mended on a Thursday. All Great Hollin turned out to hear it strike, and for a full minute after the last note had died the villagers stood in the churchyard, blinking up at the tower with an odd, uneasy air. Old Mrs Tilling spoke at last. 'It's very loud,' she said, 'for a thing that's been quiet so long.'\n\nNobody disagreed. And as they went home to their suppers, a good many of them found themselves glancing at their own mantelpieces, as though reluctant to learn what time it really was.",
};

export const lesson13: Lesson = {
  id: "el9-u1-lesson-1-3",
  code: "1-3",
  title: "Structure and Evaluation",
  goal: "I CAN analyse how a whole extract is structured and evaluate how successfully a writer achieves an intended effect.",
  standards: ["KS3 Reading", "AO2", "AO1"],
  vocabulary: [
    { term: "Structure", definition: "The way a writer organises and sequences ideas, events and focus across a text." },
    { term: "Shift in focus", definition: "A change in what the narrative concentrates on, such as from setting to character or from past to present." },
    { term: "Foreshadowing", definition: "Hints early in a text about what will happen later." },
    { term: "Climax", definition: "The point of greatest tension or importance in a narrative." },
    { term: "Contrast", definition: "A deliberate difference between two things placed together for effect." },
    { term: "Evaluate", definition: "Make a reasoned judgement about how well a writer achieves their purpose, supported by evidence." },
    { term: "Cyclical structure", definition: "A narrative that ends by returning to ideas, images or events from the opening." },
  ],
  concepts: [
    {
      id: "el9-u1-structural-analysis",
      title: "Structural analysis of a whole extract",
      skill: "Trace the shape of an extract from opening to ending and explain the effect of its structural choices.",
      lesson: {
        sections: [
          {
            heading: "Reading the shape of a text",
            body: "Structure is about **where** the writer chooses to put things and **when** they reveal them. Divide an extract into beginning, middle and end and ask what the focus is at each point: wide setting, a character, a moment of action, a reaction. Then ask why the writer moves from one to the next. A shift from a crowded, noisy platform to a still, silent one, for instance, mirrors a shift from joy to shock.",
          },
          {
            heading: "Structural features and their effects",
            body: "Look for: **contrast** between sections; **shifts** in time, place or focus; **sentence length** (short sentences slow the pace or deliver impact); **foreshadowing** (early hints); and an ending that echoes or reverses the opening. Always explain the effect on the reader: 'The sudden short sentence after the long description of bustle mimics the stopping of time for Eleanor, making the reader share her shock.'",
          },
        ],
        keyFormulas: [
          { name: "Shift in focus", statement: "A change of what the writer concentrates on, used to guide the reader's attention or emotions." },
          { name: "Contrast", statement: "Opposing moods or images placed together to heighten the effect of each." },
          { name: "Structural effect", statement: "What happens where in the text, and why that order affects the reader." },
        ],
        workedExample: {
          problem: "How does the writer structure the extract 'The Last Train to Aldermoor' to create tension?",
          solution: "The extract opens with the bright bustle of the station and Eleanor's happiness, establishing a mood of expectation. The writer then narrows the focus from the general scene to Eleanor's personal hopes, building a sense of anticipation. The telegram boy's interruption is a sudden turning point, and the following short sentence, 'She read it once', slows the pace and focuses on her stillness. The contrast between her calm hand and the roaring, shuddering train heightens her private devastation. The final line, with the clock striking 'too loudly', brings the focus back to the station, but its mood is now ironic, completing the structural reversal from joy to grief.",
        },
      },
      questions: [
        {
          id: "el9-u1-structural-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: THE_LETTER,
          stem: "What is the main change in focus between the first two paragraphs of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "From Eleanor's past to the train's arrival" },
              { id: "b", text: "From a description of India to a description of Aldermoor" },
              { id: "c", text: "From the aunt to the telegraph boy" },
              { id: "d", text: "From the busy station scene to Eleanor's personal circumstances" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Shift in focus", statement: "A move from a wide view to a narrower one draws the reader into a character." }],
            steps: [{ reasoning: "Paragraph one describes the station and Eleanor's happiness; paragraph two explains her history and why she is travelling.", evidence: "She was going to her brother.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(d)** The writer moves from the general bustle to Eleanor's personal story.",
            commonErrors: ["Choosing (b) because the train arrives in paragraph three, not two.", "Choosing (d) because India is mentioned but not described."],
          },
        },
        {
          id: "el9-u1-structural-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: THE_LETTER,
          stem: "Explain the effect of the writer placing the telegraph boy's arrival after the train 'came in with a roar'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Delayed interruption", statement: "An event placed at a key moment creates suspense and surprise." },
              { kind: "skill", name: "Structural effect", statement: "Explain what happens where and the effect on the reader." },
            ],
            steps: [
              { reasoning: "The train's arrival suggests the start of Eleanor's new life, building anticipation of her departure.", evidence: "The train came in with a roar", marks: 1, markCode: "AO2" },
              { reasoning: "The telegram interrupts at the last moment ('was about to step forward'), creating sudden disruption and shock for the reader.", evidence: "was about to step forward when a telegraph boy", marks: 1, markCode: "AO2" },
              { reasoning: "The timing makes her loss feel crueller because she was so close to her goal.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The train's arrival raises expectation, so the telegram's interruption at the very moment she is 'about to step forward' creates a sudden shock and makes her loss feel crueller.",
            commonErrors: ["Retelling the sequence without commenting on effect.", "Not explaining why the timing matters."],
          },
        },
        {
          id: "el9-u1-structural-analysis-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: THE_LETTER,
          stem: "How does the writer use structure in the last two paragraphs of the extract to show the effect of the telegram on Eleanor?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast of noise and stillness", statement: "Busy sound set against stillness highlights a character's inner shock." },
              { kind: "technique", name: "Short sentences", statement: "Brief sentences slow pace and deliver impact." },
            ],
            steps: [
              { reasoning: "The short sentence 'She read it once' slows the pace and signals the importance of the moment.", evidence: "She read it once.", marks: 1, markCode: "AO2" },
              { reasoning: "Contrast between Eleanor's stillness ('quite still') and the surrounding noise (whistle, shouting, engine) isolates her emotionally.", evidence: "her hand had gone quite still", marks: 2, markCode: "AO2" },
              { reasoning: "The train's departure and the empty platform mirror her loss of the future she had expected; the focus narrows to her alone.", evidence: "stood on the empty platform", marks: 1, markCode: "AO2" },
              { reasoning: "The final line returns to the station clock and the time, a cyclical echo of the opening's bustle but now ironic, showing the world carrying on indifferent.", evidence: "It struck, she thought, a great deal too loudly.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 3", marks: "5-6", descriptor: "Clear, well-chosen analysis of structural features and their effect on the reader's understanding of Eleanor." },
              { level: "Level 2", marks: "3-4", descriptor: "Some understanding of structure, with some relevant comment." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments, mostly describing events." },
            ],
            finalAnswer: "Short sentences and the contrast of noise with Eleanor's stillness isolate her emotionally; the narrowing focus to her alone on the empty platform conveys loss, and the closing reference to the clock echoes the busy opening but ironically, showing the world's indifference to her grief.",
            commonErrors: ["Writing only about language and not structure.", "Retelling the ending.", "Ignoring the final sentence."],
          },
        },
        {
          id: "el9-u1-structural-analysis-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: THE_LETTER,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two details from the opening paragraph which show that the mood at the start is cheerful.", marks: 2 },
            { label: "b", prompt: "What does the phrase 'a great deal too loudly' suggest about Eleanor's state of mind at the end?", marks: 4 },
            { label: "c", prompt: "How does the writer structure the extract to move the reader from happiness to sadness? You should write about: the opening, the turning point and the ending.", marks: 14 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural contrast", statement: "Placing opposing moods at the beginning and end creates a powerful reversal." },
              { kind: "technique", name: "Turning point", statement: "A pivotal event where the narrative direction changes." },
              { kind: "skill", name: "Whole-text structure", statement: "Comment on the opening, development and ending, linking each to effect." },
            ],
            steps: [
              { part: "a", reasoning: "Setting: a bright morning with cheerful bustle.", evidence: "a bright, brisk morning in March", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Eleanor's happiness: she has 'never been so happy'.", evidence: "she had never been so happy in her life", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The adverbial phrase suggests the sound seems unbearable because she is raw with shock and grief.", evidence: "a great deal too loudly", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It shows her heightened sensitivity and the sense that the world is indifferent: ordinary things now feel intrusive.", evidence: "she thought", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Opening: cheerful bustle, bright adjectives and Eleanor's new dress establish joy and anticipation.", evidence: "cheerful departure", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Development: the focus narrows to Eleanor's history, with her ticket and purse, raising expectation, which makes the later loss more painful.", evidence: "a ticket in her glove and a purse of sovereigns", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Turning point: the telegram interrupts at the moment of departure, abruptly shifting mood.", evidence: "thrust a yellow envelope into her hand", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Aftermath: short sentences, stillness against noise and the departing train show devastation.", evidence: "Eleanor Whitcombe stood on the empty platform", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Ending: the clock's loud strike returns to the setting with ironic echo, completing the shift from happiness to sorrow.", evidence: "the station clock struck nine", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { part: "c", level: "Level 5", marks: "13-14", descriptor: "Perceptive, discriminating analysis of structure across the whole extract; assured, well-chosen references." },
              { part: "c", level: "Level 4", marks: "10-12", descriptor: "Thorough analysis of structure; well-chosen evidence with developed comment on effect." },
              { part: "c", level: "Level 3", marks: "7-9", descriptor: "Clear, relevant analysis of several structural features." },
              { part: "c", level: "Level 2", marks: "4-6", descriptor: "Some understanding of structure; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-3", descriptor: "Simple, limited comments with little reference to structure." },
            ],
            finalAnswer: "(a) 'a bright, brisk morning'; 'never been so happy in her life'. (b) The loudness suggests she is raw with shock and that the world intrudes on her grief. (c) The extract opens with bustling joy, narrows to Eleanor's hopeful circumstances, turns abruptly with the telegram at the moment of departure, slows to stillness and an empty platform, and ends ironically on the clock's loud strike, a reversal of the cheerful opening.",
            commonErrors: ["Treating structure as a list of events.", "Only writing about the ending.", "Naming 'contrast' with no evidence or effect."],
          },
        },
      ],
    },
    {
      id: "el9-u1-evaluating-success",
      title: "Evaluating a writer's success",
      skill: "Make a reasoned judgement about how successfully a writer achieves an effect, supported by evidence.",
      lesson: {
        sections: [
          {
            heading: "What evaluation means",
            body: "To **evaluate** is to judge how well the writer achieves their aim, and to prove it. Begin with a clear judgement ('The writer is highly successful in creating a sense of unease'), then support it with two or three well-chosen references, and explain precisely why each works. Evaluation is not just agreement: you can say 'mostly successful' and show where it is less effective.",
          },
          {
            heading: "A structure for a judgement",
            body: "Use a pattern: **judgement, evidence, explanation, alternative view**. For example: 'The writer successfully creates humour through gentle irony. The villagers' unease at the clock striking, \"for a thing that's been quiet so long\", pokes fun at their resistance to change. However, the ending is slightly less comic, as it has a thoughtful tone.' Use evaluative vocabulary: convincingly, effectively, vividly, powerfully, less successful.",
          },
        ],
        keyFormulas: [
          { name: "Evaluation", statement: "A reasoned judgement about how well something works, supported by evidence." },
          { name: "Judgement opener", statement: "Begin with a clear verdict: 'The writer successfully/partly/less successfully...'" },
          { name: "Alternative view", statement: "Acknowledge a counter-point to show balanced thinking." },
        ],
        workedExample: {
          problem: "'The writer makes the reader feel gently amused by the villagers.' How far do you agree? (Use 'The Village Clock'.)",
          solution: "I agree to a large extent. The opening is wryly comic: the clock has told the wrong time 'since the winter of the great flood' yet 'nobody much minded', and the simile 'as one grows accustomed to an eccentric uncle' treats the village's neglect with affection. The curate's earnestness is gently mocked by the list of his actions, which builds to the ironic 'sin of wasted hours'. However, Mrs Tilling's remark, 'It's very loud for a thing that's been quiet so long', adds a more reflective note, and the final image of villagers reluctant to check their own clocks suggests a wry truth about avoiding reality rather than pure amusement. Overall, the humour is affectionate and gently serious.",
        },
      },
      questions: [
        {
          id: "el9-u1-evaluating-success-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EDITORIAL,
          stem: "Which word best describes the writer's tone towards the villagers in the first paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Coldly indifferent" },
              { id: "b", text: "Affectionately amused" },
              { id: "c", text: "Anxiously fearful" },
              { id: "d", text: "Bitterly hostile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "The writer's attitude, shown by word choice and comparisons." }],
            steps: [{ reasoning: "The comparison to an 'eccentric uncle' is gentle and fond, so the tone is affectionately amused.", evidence: "an eccentric uncle", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Affectionately amused: the 'eccentric uncle' simile is warm and humorous.",
            commonErrors: ["Choosing (c) because 'nobody much minded' sounds indifferent; that is the villagers' attitude, not the writer's."],
          },
        },
        {
          id: "el9-u1-evaluating-success-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EDITORIAL,
          stem: "Explain what the simile 'as one grows accustomed to an eccentric uncle' suggests about the villagers' attitude to the clock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile", statement: "A comparison that adds suggestion to a description." },
              { kind: "skill", name: "Explaining effect", statement: "Say what the comparison implies and why it works." },
            ],
            steps: [
              { reasoning: "An eccentric uncle is odd but loved, so the villagers see the broken clock with affection, not annoyance.", evidence: "an eccentric uncle", marks: 1, markCode: "AO2" },
              { reasoning: "'Grows accustomed' suggests gradual acceptance over time; they no longer notice its flaws.", evidence: "grows accustomed", marks: 1, markCode: "AO2" },
              { reasoning: "It gives the clock a human personality, gently humorous in tone.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The simile suggests the villagers regard the faulty clock with fond tolerance, as a quirky family member whose oddness they have accepted over time. It humanises the clock and gives the passage a gently humorous tone.",
            commonErrors: ["Saying 'it compares the clock to an uncle' with no inference.", "Taking 'eccentric' to mean dangerous."],
          },
        },
        {
          id: "el9-u1-evaluating-success-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EDITORIAL,
          stem: "'The ending of this extract is very effective in leaving the reader thinking.' How far do you agree? Support your views with evidence from the final paragraph and the rest of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "State a judgement and prove it with evidence and explanation." },
              { kind: "technique", name: "Irony", statement: "A gap between what is said and what is meant, or between expectation and outcome." },
            ],
            steps: [
              { reasoning: "Judgement: the ending is highly effective because it moves from gentle comedy to a subtle point about avoiding reality.", marks: 1, markCode: "AO1" },
              { reasoning: "The villagers glance at their own mantelpieces 'reluctant to learn what time it really was', implying a wider reluctance to face truth or change.", evidence: "reluctant to learn what time it really was", marks: 2, markCode: "AO1" },
              { reasoning: "It links back to the opening, where nobody 'much minded' inaccuracy, creating a cyclical echo that rewards the reader.", evidence: "nobody much minded", marks: 2, markCode: "AO2" },
              { reasoning: "Mrs Tilling's remark foreshadows the ending: the contrast between loudness and quietness suggests unwelcome truth.", evidence: "It's very loud for a thing that's been quiet so long", marks: 1, markCode: "AO2" },
              { reasoning: "Counter-view: the ending is quiet and understated so some readers may find it less striking than a clear conclusion; balanced judgement.", marks: 2, markCode: "AO1" },
            ],
            levels: [
              { level: "Level 4", marks: "7-8", descriptor: "Perceptive, balanced evaluation with thoroughly selected evidence and discriminating comment." },
              { level: "Level 3", marks: "5-6", descriptor: "Clear evaluation with relevant evidence." },
              { level: "Level 2", marks: "3-4", descriptor: "Some evaluation; some relevant references but partial explanation." },
              { level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with little evidence." },
            ],
            finalAnswer: "I agree largely. The ending moves from comedy to subtle implication: villagers 'reluctant to learn what time it really was' suggests a wider avoidance of unwelcome truth, and it echoes the opening's 'nobody much minded'. Mrs Tilling's remark prepares for it. It is understated, which some may find less striking, but it leaves the reader thinking.",
            commonErrors: ["Agreeing without evidence.", "Describing the ending without evaluating it.", "Ignoring the rest of the extract."],
          },
        },
        {
          id: "el9-u1-evaluating-success-q4",
          difficulty: "challenge",
          totalMarks: 26,
          extract: EDITORIAL,
          stem: "Read the extract again and answer the questions below.",
          parts: [
            { label: "a", prompt: "Give two things the curate, Mr Penrose, does to try to put the clock right.", marks: 2 },
            { label: "b", prompt: "What does Mrs Tilling's comment 'It's very loud' suggest about how the villagers feel?", marks: 4 },
            { label: "c", prompt: "How does the writer use language to present the village and its attitude to time in the first two paragraphs?", marks: 8 },
            { label: "d", prompt: "A student said: 'The writer is very successful in making a small event seem important.' To what extent do you agree? Write about the extract as a whole.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Make a judgement and justify it with a range of evidence." },
              { kind: "technique", name: "Mock-heroic tone", statement: "Treating a small matter with exaggerated seriousness for gentle humour." },
              { kind: "technique", name: "Structure and irony", statement: "A gradual build from comic to reflective, with closing irony." },
            ],
            steps: [
              { part: "a", reasoning: "He measures the tower.", evidence: "He measured the tower.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He consults a clockmaker (or preaches about wasted hours).", evidence: "He consulted a clockmaker in the town.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The villagers are unsettled by the clock's sound, which is unfamiliar after years of silence.", evidence: "It's very loud", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "'For a thing that's been quiet so long' suggests they resent or fear change and the intrusion of exactness.", evidence: "for a thing that's been quiet so long", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The simile 'eccentric uncle' shows affectionate acceptance of a broken clock.", evidence: "an eccentric uncle", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Understatement 'nobody much minded' shows the village's relaxed, unhurried attitude to time.", evidence: "nobody in Great Hollin much minded", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The listing of the curate's actions and 'a passion for exactness' presents him as comically earnest, in contrast to the villagers.", evidence: "He measured the tower. He consulted a clockmaker", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The mock-serious 'sin of wasted hours' and 'bewildered congregation' create gentle humour.", evidence: "the sin of wasted hours", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Judgement: largely agree; the writer inflates the village clock to a communal event.", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "The whole village turns out and the 'full minute' of silence makes the striking seem ceremonial.", evidence: "All Great Hollin turned out to hear it strike", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The structure moves from slow background to a sudden event, then a reflective ending, which raises the stakes.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "The closing image of villagers avoiding their own clocks shows the event touches a wider truth about time and change.", evidence: "reluctant to learn what time it really was", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Counter-view: the tone stays light and humorous throughout, so importance is partly mock, which tempers the judgement.", marks: 2, markCode: "AO1" },
            ],
            levels: [
              { part: "c", level: "Level 4", marks: "7-8", descriptor: "Perceptive, thorough analysis of language with well-chosen quotations and developed comment on effect." },
              { part: "c", level: "Level 3", marks: "5-6", descriptor: "Clear, relevant analysis with appropriate terminology." },
              { part: "c", level: "Level 2", marks: "3-4", descriptor: "Some understanding of language; some relevant references." },
              { part: "c", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comments." },
              { part: "d", level: "Level 5", marks: "11-12", descriptor: "Perceptive, discriminating, balanced evaluation across the whole extract; assured selection of evidence." },
              { part: "d", level: "Level 4", marks: "9-10", descriptor: "Thorough evaluation with well-chosen evidence and developed analysis." },
              { part: "d", level: "Level 3", marks: "6-8", descriptor: "Clear, relevant evaluation supported by evidence." },
              { part: "d", level: "Level 2", marks: "3-5", descriptor: "Some evaluation; some relevant references." },
              { part: "d", level: "Level 1", marks: "1-2", descriptor: "Simple, limited comment with little evidence." },
            ],
            finalAnswer: "(a) He measures the tower; he consults a clockmaker. (b) They are unsettled by sudden noise after years of quiet, and are uneasy about change. (c) The 'eccentric uncle' simile and the understatement 'nobody much minded' show affectionate indifference; the curate's list and 'sin of wasted hours' gently mock his seriousness. (d) I largely agree: the whole village gathers, a full minute passes in silence, and the ending turns a small event into a quiet comment on avoiding truth, though the light tone means the importance is partly mock.",
            commonErrors: ["Judging without a counter-view in (d).", "Repeating the same point in (c).", "Ignoring 'the extract as a whole' in (d)."],
          },
        },
      ],
    },
  ],
};
