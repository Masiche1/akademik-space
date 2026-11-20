import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "cile-u4-lesson-4-1",
  code: "4-1",
  title: "Narrative writing: character and setting",
  goal: "I CAN create believable characters and vivid settings that serve the story's mood and themes.",
  standards: ["0861 Writing: narrative skills"],
  vocabulary: [
    { term: "Characterisation", definition: "The techniques used to reveal a character's personality — action, dialogue, thought, appearance." },
    { term: "Show not tell", definition: "Revealing character through actions and details rather than direct statement." },
    { term: "Setting", definition: "The time and place of a story — can establish mood and symbolise themes." },
    { term: "Sensory detail", definition: "Description engaging the five senses to make setting vivid." },
    { term: "Voice", definition: "The distinctive way a narrator or character speaks or thinks." },
    { term: "Motivation", definition: "The reason a character acts as they do — drives believable behaviour." },
  ],
  concepts: [
    {
      id: "cile-u4-characterisation",
      title: "Characterisation",
      skill: "Create and analyse characters using action, dialogue, thought and appearance — 'show, don't tell'.",
      lesson: {
        sections: [
          {
            heading: "Ways to reveal character",
            body: "- **Action**: what a character does reveals what they value.\n- **Dialogue**: how they speak — word choice, tone, what they avoid saying.\n- **Thought**: internal monologue shows private fears and desires.\n- **Appearance**: can hint at personality, but risks stereotyping if overused.\n- **Others' reactions**: how other characters treat them reveals their status.",
          },
          {
            heading: "Show, don't tell",
            body: "- **Tell**: 'Amara was nervous.'\n- **Show**: 'Amara's hands would not stop shaking as she reached for the envelope.'\n\nShowing lets the reader infer emotion — more engaging and convincing. Reserve direct statement for moments when speed matters more than depth.",
          },
          {
            heading: "Believable motivation",
            body: "Every character action needs a reason the reader can understand. Even unlikeable characters need logic: the villain believes they are right, the coward fears a real loss. Motivation makes behaviour believable even when it is surprising.",
          },
        ],
        keyFormulas: [
          { name: "Characterisation toolkit", statement: "Action + dialogue + thought + appearance + others' reactions = multi-dimensional character. Prefer showing over telling." },
        ],
        workedExample: {
          problem: "Show that a character is impatient without saying 'she was impatient'.",
          solution: "'She checked her watch for the fourth time, then gave up and started pacing the platform.' Actions reveal impatience — no label needed.",
        },
      },
      questions: [
        {
          id: "cile-u4-char-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these 'shows' rather than 'tells' that a character is angry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He was angry." },
              { id: "b", text: "He slammed the door so hard the picture frame fell." },
              { id: "c", text: "Everyone could see he was angry." },
              { id: "d", text: "His anger was obvious." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Actions and consequences reveal emotion; labels do not." },
            ],
            steps: [
              { reasoning: "Only (b) shows anger through action and consequence.", working: "\\text{action}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** He slammed the door so hard the picture frame fell.",
            commonErrors: ["Choosing (c) — it still tells rather than shows."],
          },
        },
        {
          id: "cile-u4-char-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways a writer can reveal a character's personality through dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue", statement: "Word choice, tone and what is left unsaid reveal personality." },
            ],
            steps: [
              { reasoning: "Way 1: vocabulary and register — formal vs slang.", working: "\\text{vocabulary}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: rhythm and length — clipped commands vs flowing stories.", working: "\\text{rhythm}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Vocabulary/register (formal vs informal) and sentence rhythm/length (clipped vs flowing) — plus what the character avoids saying.",
            commonErrors: ["Listing 'dialogue' as one way — the question asks for specific techniques within it."],
          },
        },
        {
          id: "cile-u4-char-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The villain was evil.' Rewrite this to 'show' the villain's nature through action and dialogue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Replace labels with concrete actions and revealing speech." },
            ],
            steps: [
              { reasoning: "Action: something revealing cruelty or selfishness.", working: "\\text{action}", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue: a line revealing their values or threats.", working: "\\text{dialogue}", marks: 1, markCode: "AO2" },
              { reasoning: "Specificity: concrete details, not generic 'evil' behaviour.", marks: 1, markCode: "AO2" },
              { reasoning: "Result: reader infers villainy without being told.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'He smiled at the beggar, then walked past without breaking stride. \"People choose their own misery,\" he said, as if discussing the weather.' — action and dialogue reveal contempt without the label 'evil'.",
            commonErrors: ["Writing 'He did evil things' — still telling, not showing."],
          },
        },
        {
          id: "cile-u4-char-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are creating a character for a narrative.",
          parts: [
            { label: "a", prompt: "Describe two actions that reveal your character's personality.", marks: 2 },
            { label: "b", prompt: "Write one line of dialogue that reveals their voice.", marks: 2 },
            { label: "c", prompt: "Explain how each choice 'shows' rather than 'tells'.", marks: 2 },
            { label: "d", prompt: "Suggest one motivation that makes this character believable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Characterisation", statement: "Actions, dialogue and motivation must work together to create a believable person." },
            ],
            steps: [
              { part: "a", reasoning: "Two concrete, revealing actions described.", working: "\\text{actions}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Actions are specific and character-revealing.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Dialogue line captures voice — word choice, rhythm, attitude.", working: "\\text{voice}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Line is authentic to the character.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Explanation links each choice to inferred trait.", working: "\\text{trait inference}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Clear 'show not tell' reasoning.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Motivation identified — reason for their behaviour.", working: "\\text{motivation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Motivation makes behaviour understandable, not random.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Motivation is consistent with actions/dialogue.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) two revealing actions (b) one voice-authentic line (c) explanation of showing (d) believable motivation consistent with choices",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Two concrete revealing actions.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic or missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Authentic dialogue line.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Showing explained clearly.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Motivation consistent and convincing.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Motivation partial.", part: "d" },
            ],
            commonErrors: ["In (d) giving a motivation that contradicts the character's actions."],
          },
        },
        {
          id: "cile-u4-char-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these 'shows' that a character is patient?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She was a very patient person." },
              { id: "b", text: "Everyone knew she never lost her temper." },
              { id: "c", text: "She waited calmly, explaining each delay to the anxious child beside her." },
              { id: "d", text: "Patience was her best quality." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Actions and reactions reveal traits; labels do not." },
            ],
            steps: [
              { reasoning: "Only (c) shows patience through calm action and helpful behaviour.", working: "\\text{calm action}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** She waited calmly, explaining each delay to the anxious child beside her.",
            commonErrors: ["Choosing (a) or (d) — these state the trait directly rather than showing it."],
          },
        },
        {
          id: "cile-u4-char-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways a writer can reveal a character's private thoughts to the reader.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Thought", statement: "Internal monologue and free indirect style expose private fears and desires." },
            ],
            steps: [
              { reasoning: "Way 1: direct internal monologue — the character thinks in first person inside the narration.", working: "\\text{monologue}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: free indirect style — narration coloured by the character's voice and opinions without quotation marks.", working: "\\text{free indirect}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Direct internal monologue (first-person thoughts inside narration) and free indirect style (narration filtered through the character's voice and biases).",
            commonErrors: ["Describing what other characters think about the character instead of the character's own thoughts."],
          },
        },
        {
          id: "cile-u4-char-q7",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'Ravi was dishonest.' Rewrite this to 'show' Ravi's dishonesty through action, dialogue and others' reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Replace the label 'dishonest' with concrete evidence a reader can interpret." },
            ],
            steps: [
              { reasoning: "Action: something concrete such as hiding evidence, lying about where he was, or altering a record.", working: "\\text{action}", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue: a line that contradicts the action or sounds evasive.", working: "\\text{dialogue}", marks: 1, markCode: "AO2" },
              { reasoning: "Others' reaction: a character who distrusts him, confirming the reader's inference.", working: "\\text{reaction}", marks: 1, markCode: "AO2" },
              { reasoning: "Result: reader concludes dishonesty without the label being used.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'Ravi slipped the test paper into his bag when the teacher turned away. \"I studied all weekend,\" he said smoothly, not meeting her eyes. Priya watched him and said nothing — she knew better than to trust him.' — action, dialogue and reaction reveal dishonesty.",
            commonErrors: ["Writing 'He lied a lot' — still telling, not showing."],
          },
        },
        {
          id: "cile-u4-char-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is an example of 'telling' rather than 'showing'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her hands trembled as she opened the letter." },
              { id: "b", text: "He was so angry he could barely speak." },
              { id: "c", text: "He paced the room, kicking at the skirting board." },
              { id: "d", text: "Rain hammered the windows and she flinched at each clap of thunder." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Telling names the emotion directly; showing gives evidence for it." },
            ],
            steps: [
              { reasoning: "(b) names the emotion 'angry' directly — the others show through physical detail.", working: "\\text{named emotion}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** He was so angry he could barely speak.",
            commonErrors: ["Choosing (a) or (d) — trembling hands and flinching are shown reactions, not labels."],
          },
        },
        {
          id: "cile-u4-char-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why a writer might use other characters' reactions to reveal the main character's personality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Others' reactions", statement: "How people treat a character reveals their reputation, status and likability." },
            ],
            steps: [
              { reasoning: "Point 1: others' reactions show reputation — people who defer to a character imply status or fear.", working: "\\text{reputation}", marks: 1, markCode: "AO2" },
              { reasoning: "Point 2: reactions add perspective the character cannot give themselves — e.g. someone avoiding them reveals unlikability.", working: "\\text{perspective}", marks: 1, markCode: "AO2" },
              { reasoning: "Point 3: effect on reader — indirect revelation feels earned and realistic, not authorial statement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Others' reactions reveal reputation and status the character cannot state themselves, add an outside perspective, and make characterisation feel earned rather than told.",
            commonErrors: ["Repeating 'it shows what others think' without explaining the effect on the reader."],
          },
        },
        {
          id: "cile-u4-char-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Discuss how a character's appearance can help and hinder characterisation, using an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Appearance", statement: "Physical detail can hint at personality but risks reducing characters to stereotypes." },
            ],
            steps: [
              { reasoning: "How it helps: appearance can hint at personality — scarred hands suggesting a labourer, or carefully manicured nails suggesting pride.", working: "\\text{hint}", marks: 1, markCode: "AO2" },
              { reasoning: "How it hinders: relying on stock images ('shifty eyes = villain') creates stereotypes, not individuals.", working: "\\text{stereotype}", marks: 1, markCode: "AO2" },
              { reasoning: "Example given of appearance revealing character effectively.", marks: 1, markCode: "AO2" },
              { reasoning: "Balanced judgement: appearance works best when combined with action and dialogue.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Appearance can hint at personality (scarred hands → labourer) but stereotypes when used as a shortcut ('shifty eyes = villain'); it works best alongside action and dialogue.",
            commonErrors: ["Arguing only one side — the question asks for both help and hinder."],
          },
        },
        {
          id: "cile-u4-char-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a character's 'motivation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather on the day of the story" },
              { id: "b", text: "The reason they act as they do" },
              { id: "c", text: "The author's favourite colour" },
              { id: "d", text: "The number of pages in the book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motivation", statement: "The reason a character acts as they do — drives believable behaviour." },
            ],
            steps: [
              { reasoning: "Motivation is the reason behind behaviour, not an external detail.", working: "\\text{reason}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The reason they act as they do",
            commonErrors: ["Choosing details about the story world instead of the character's inner reason."],
          },
        },
        {
          id: "cile-u4-char-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your villain enjoys frightening people. Give one motivation that makes this believable rather than random.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Believable motivation", statement: "Even unlikeable characters need logic — the villain believes they are right." },
            ],
            steps: [
              { reasoning: "Motivation stated — e.g. a childhood of being frightened made them crave control, or they believe fear keeps people safe.", working: "\\text{control/safety}", marks: 1, markCode: "AO2" },
              { reasoning: "Link: the motivation explains the behaviour, so it does not feel random.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'They were bullied mercilessly as a child and learned that fear keeps people in line; now they frighten others first so no one can hurt them.' — past experience motivates present cruelty.",
            commonErrors: ["Saying 'they are just evil' — that is a label, not a motivation."],
          },
        },
        {
          id: "cile-u4-char-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Rewrite the 'telling' sentence 'Amara was a kind person' as a short 'showing' passage using action, dialogue and others' reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "A showing passage gives concrete evidence — action, speech, reaction — instead of the label 'kind'." },
            ],
            steps: [
              { reasoning: "Action: Amara does something selfless or gentle.", working: "\\text{action}", marks: 1, markCode: "AO2" },
              { reasoning: "Dialogue: she says something generous or reassuring.", working: "\\text{dialogue}", marks: 1, markCode: "AO2" },
              { reasoning: "Others' reaction: someone responds warmly or gratefully.", working: "\\text{reaction}", marks: 1, markCode: "AO2" },
              { reasoning: "No direct label 'kind' used.", marks: 1, markCode: "AO2" },
              { reasoning: "The passage reads naturally as a short scene, not a list.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'When the new girl dropped her books, Amara knelt and gathered them without comment. \"You look like you could use this,\" she said, handing over her own spare notebook. The girl smiled for the first time all morning.' — kindness shown through action, dialogue and reaction.",
            commonErrors: ["Forgetting to remove the word 'kind' or 'nice' from the passage."],
          },
        },
        {
          id: "cile-u4-char-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why 'showing' a character's emotion is usually more effective for the reader than 'telling' it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show not tell", statement: "Showing engages the reader's inference and imagination; telling does the work for them." },
            ],
            steps: [
              { reasoning: "Reason 1: the reader infers emotion — active engagement makes the feeling more convincing.", working: "\\text{inference}", marks: 1, markCode: "AO3" },
              { reasoning: "Reason 2: specific actions feel real and individual — a labelled emotion feels generic.", working: "\\text{specificity}", marks: 1, markCode: "AO2" },
              { reasoning: "Reason 2 developed or a further point such as pacing/momentum.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Showing lets the reader infer emotion (more engaging), gives specific believable detail (more real), and can control pace — telling is faster but flatter.",
            commonErrors: ["Claiming showing is 'better' without giving a reason."],
          },
        },
        {
          id: "cile-u4-char-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are creating a character for a narrative.",
          parts: [
            { label: "a", prompt: "Describe one appearance detail that hints at your character's personality or history.", marks: 2 },
            { label: "b", prompt: "Write two actions that reveal their character.", marks: 2 },
            { label: "c", prompt: "Write one line of dialogue that captures their voice.", marks: 2 },
            { label: "d", prompt: "State their motivation and explain how it makes their behaviour believable.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Characterisation", statement: "Appearance, action, dialogue and motivation must work together to create a believable person." },
            ],
            steps: [
              { part: "a", reasoning: "Appearance detail is specific and hints at personality/history.", working: "\\text{appearance}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The hint is clear, not random decoration.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Two concrete, revealing actions.", working: "\\text{actions}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Actions are specific and character-revealing.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Dialogue line captures voice — word choice, rhythm, attitude.", working: "\\text{voice}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Line is authentic to the character.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Motivation identified — reason for their behaviour.", working: "\\text{motivation}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Motivation makes behaviour understandable, not random.", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Motivation is consistent with actions/dialogue/appearance.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) revealing appearance detail (b) two revealing actions (c) authentic voice line (d) motivation consistent with all choices",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Specific appearance detail with clear hint.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Generic or missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Two concrete revealing actions.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Authentic dialogue line.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Generic.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Motivation consistent and convincing.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Motivation partial.", part: "d" },
            ],
            commonErrors: ["In (a) describing appearance with no link to personality or history."],
          },
        },
        {
          id: "cile-u4-char-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these best reveals a character's reputation or status to the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What other characters say and do around them" },
              { id: "b", text: "The font size of their name on the page" },
              { id: "c", text: "The number of the chapter they appear in" },
              { id: "d", text: "The weather outside the story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Others' reactions", statement: "How others treat a character reveals their reputation and status." },
            ],
            steps: [
              { reasoning: "Others' words and behaviour around the character signal reputation and status.", working: "\\text{reputation}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** What other characters say and do around them",
            commonErrors: ["Choosing formatting or setting details that carry no character information."],
          },
        },
      ],
    },
    {
      id: "cile-u4-setting",
      title: "Setting and atmosphere",
      skill: "Use setting — place, time, sensory detail — to establish mood, symbolise themes and immerse the reader.",
      lesson: {
        sections: [
          {
            heading: "What setting does",
            body: "Setting is not just backdrop — it works:\n\n- **Mood**: a 'grey, dripping alley' feels threatening; a 'warm, golden evening' feels safe.\n- **Symbol**: a locked room can symbolise imprisonment; an open field, freedom.\n- **Character reflection**: what a character notices reveals who they are.\n- **Conflict**: harsh weather can externalise internal struggle.",
          },
          {
            heading: "Sensory description",
            body: "Vivid setting engages the senses:\n\n- **Sight**: colour, light, movement — most common.\n- **Sound**: 'the market hummed', 'rain drummed'.\n- **Smell/taste**: 'charcoal and mangoes', 'salt spray'.\n- **Touch**: 'rough bark', 'cold metal', 'humid air'.",
          },
        ],
        keyFormulas: [
          { name: "Setting → mood/symbol", statement: "Every setting choice should create atmosphere and/or carry symbolic weight — never just describe." },
        ],
        workedExample: {
          problem: "Setting: 'The lighthouse stood on a fist of black rock.' What does this convey?",
          solution: "The 'fist' metaphor makes the rock seem clenched and defiant — matching the keeper's endurance. The blackness and isolation create a mood of austere endurance.",
        },
      },
      questions: [
        {
          id: "cile-u4-setting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these creates a threatening mood through setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sunny park with children playing" },
              { id: "b", text: "A narrow alley where the shadows seemed to follow" },
              { id: "c", text: "A warm kitchen with bread baking" },
              { id: "d", text: "A quiet library with tall windows" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Setting as mood", statement: "Enclosed spaces, shadows and darkness create threat." },
            ],
            steps: [
              { reasoning: "The alley's shadows 'following' personifies threat.", working: "\\text{shadows follow}", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** A narrow alley where the shadows seemed to follow",
            commonErrors: ["Choosing (d) — quiet libraries feel safe, not threatening."],
          },
        },
        {
          id: "cile-u4-setting-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two ways setting can reveal character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Setting and character", statement: "What a character notices and how they respond to setting reveals personality." },
            ],
            steps: [
              { reasoning: "Way 1: selective attention — what they notice first.", working: "\\text{selective attention}", marks: 1, markCode: "AO2" },
              { reasoning: "Way 2: reaction to environment — fear, comfort, indifference.", working: "\\text{reaction}", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Selective attention (what they notice first) and their reaction to the environment (fear, comfort, indifference) — both reveal personality.",
            commonErrors: ["Saying 'the setting tells us about the character' without specifics."],
          },
        },
        {
          id: "cile-u4-setting-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The room was old.' Improve this with sensory detail that creates a specific mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sensory detail", statement: "Specific sensory images create mood; 'old' is too vague." },
            ],
            steps: [
              { reasoning: "Add sight/touch detail: 'peeling wallpaper', 'dust in the light'.", working: "\\text{peeling/dust}", marks: 1, markCode: "AO2" },
              { reasoning: "Add smell/sound: 'mildew and old paper', 'the floorboard creaked'.", working: "\\text{mildew/creak}", marks: 1, markCode: "AO2" },
              { reasoning: "Choose details that create a coherent mood — neglect, memory, gloom.", marks: 1, markCode: "AO2" },
              { reasoning: "Result: specific, atmospheric, mood-creating.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "e.g. 'The wallpaper peeled in strips, and dust turned the afternoon light into something sepia. The room smelled of mildew and old paper; the floorboards creaked underfoot like they were remembering.' — specific sensory details create a mood of faded neglect.",
            commonErrors: ["Adding adjectives ('very old and dusty') without sensory specifics."],
          },
        },
        {
          id: "cile-u4-setting-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You are setting the scene for a narrative.",
          parts: [
            { label: "a", prompt: "Describe the setting in 2-3 sentences using sensory detail.", marks: 3 },
            { label: "b", prompt: "State the mood this setting creates.", marks: 2 },
            { label: "c", prompt: "Explain how the setting could symbolise a theme.", marks: 2 },
            { label: "d", prompt: "Suggest how a character's reaction to this setting reveals their personality.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Setting", statement: "Setting should create mood, carry symbolism, and reveal character through response." },
            ],
            steps: [
              { part: "a", reasoning: "2-3 sentences with multiple senses engaged.", working: "\\text{sensory}", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Vivid, specific details — not generic.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Atmospheric and purposeful.", marks: 1, markCode: "AO3" },
              { part: "b", reasoning: "Mood accurately identified.", working: "\\text{mood}", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Mood linked to specific details.", marks: 1, markCode: "AO3" },
              { part: "c", reasoning: "Symbolic reading offered.", working: "\\text{symbol}", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Symbol justified by the description.", marks: 1, markCode: "AO3" },
              { part: "d", reasoning: "Character reaction described.", working: "\\text{reaction}", marks: 1, markCode: "AO2" },
              { part: "d", reasoning: "Reaction linked to personality trait.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) sensory-rich description (b) mood identified (c) symbolic meaning justified (d) character reaction reveals trait",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Vivid sensory description with purpose.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Some sensory detail.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Mood accurately identified and linked.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Symbolism justified.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Reaction linked to trait.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) writing a list of adjectives instead of a scene."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u4-char-setting-notes",
      title: "Character and setting — revision notes",
      summary: "Characterisation techniques, show-don't-tell, and using setting for mood and symbol.",
      sections: [
        {
          heading: "Characterisation",
          body: "Reveal through action, dialogue, thought, appearance, others' reactions. Show emotion through action, not labels. Motivation must be believable.",
        },
        {
          heading: "Setting",
          body: "Setting creates mood, symbolises themes, reflects character. Use sensory detail — sight, sound, smell, touch — to make it vivid.",
        },
        {
          heading: "Writing checklist",
          body: "Does every character choice reveal personality? Does the setting create atmosphere? Have I shown rather than told? Is motivation clear?",
        },
      ],
    },
  ],
};
