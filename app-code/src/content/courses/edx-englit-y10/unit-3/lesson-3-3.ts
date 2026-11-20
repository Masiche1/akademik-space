import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";
import { DAGGER, TOMORROW, UNSEX_ME } from "./extracts.ts";

export const lesson33: Lesson = {
  id: "et10-u3-lesson-3-3",
  code: "3-3",
  title: "Extract Analysis and the Whole Play",
  goal: "I CAN analyse a Macbeth extract in detail and then connect it to the rest of the play in a developed response.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Extract", definition: "A short passage taken from a longer text." },
    { term: "Zoom in", definition: "To analyse the effect of a single word or phrase closely." },
    { term: "Zoom out", definition: "To link a moment to the wider text, themes and structure." },
    { term: "Metaphor", definition: "Describing something as if it were something else, without 'like' or 'as'." },
    { term: "Nihilism", definition: "The belief that life has no meaning, shown in Macbeth's final soliloquy." },
    { term: "Tragic structure", definition: "The pattern of rise, crisis and fall in a tragedy." },
  ],
  concepts: [
    {
      id: "et10-u3-extract-analysis",
      title: "Extract analysis",
      skill: "Zoom in on language, imagery and form in an extract and explain how they create meaning and effect.",
      lesson: {
        sections: [
          {
            heading: "Read the extract in context",
            body: "Place the extract in the play: what has just happened, who is speaking, and what comes next? Summarise the moment in one sentence before you analyse. Then choose three or four precise details to explore closely.",
          },
          {
            heading: "Zoom in on words and images",
            body: "Look at verbs, adjectives, imagery, rhythm and sound. In Macbeth's final speech the repeated “tomorrow” stretches across the line, imitating the slow pace of empty time, while the metaphor of a “poor player / That struts and frets his hour upon the stage” compares life to a brief, meaningless performance. Always say what each choice suggests.",
          },
          {
            heading: "Link to the writer's purpose",
            body: "Finish each paragraph by connecting to character, theme or context. For this speech, the despair contrasts with the ambition of Act 1 and delivers the tragic message that power gained by evil is hollow.",
          },
        ],
        keyFormulas: [
          { name: "Zoom in", statement: "Select a key word, name the method and explain its connotations." },
          { name: "Metaphor of the stage", statement: "Life is compared to a play, suggesting it is brief, scripted and without lasting meaning." },
          { name: "Repetition", statement: "Repeated words slow the rhythm and emphasise monotony or obsession." },
        ],
        workedExample: {
          problem: "How does Shakespeare present Macbeth's feelings about life in the extract from Act 5 Scene 5?",
          solution: "Shakespeare presents Macbeth as empty and despairing. The triple repetition of “tomorrow” stretches the opening line and imitates the slow, monotonous passing of days, while the verb “creeps” and the adjective “petty” make time feel small and tedious. The metaphor of life as a “walking shadow” and a “poor player” suggests that existence is insubstantial and temporary, and the final phrase “full of sound and fury, / Signifying nothing” suggests noise without meaning. This contrasts with the energy of his earlier ambition, showing how it has led him to nihilism.",
        },
      },
      questions: [
        {
          id: "et10-u3-extract-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TOMORROW,
          stem: "What does the metaphor “a walking shadow” suggest about life?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That life is insubstantial and has no real substance" },
              { id: "b", text: "That life is bright and full of energy" },
              { id: "c", text: "That people follow each other everywhere" },
              { id: "d", text: "That it is always daytime" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "A direct comparison transfers qualities from one thing to another." }],
            steps: [{ reasoning: "A shadow has no substance, so life seems empty and fleeting.", evidence: "Life's but a walking shadow", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The metaphor suggests that life is insubstantial and meaningless.",
            commonErrors: ["Reading the shadow literally (c, d)."],
          },
        },
        {
          id: "et10-u3-extract-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TOMORROW,
          stem: "Explain the effect of the repetition of “tomorrow” in line 1.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Repetition", statement: "Repetition shapes rhythm and emphasises a feeling." }],
            steps: [
              { reasoning: "The repetition slows the line, imitating the dull passage of time.", evidence: "Tomorrow, and tomorrow, and tomorrow", marks: 1, markCode: "AO2" },
              { reasoning: "It suggests endless, monotonous days with no purpose.", marks: 1, markCode: "AO2" },
              { reasoning: "It shows Macbeth's despair and numbness after Lady Macbeth's death.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The repeated word slows the rhythm and presents time as dull and endless, showing Macbeth's numb despair.",
            commonErrors: ["Naming repetition without effect."],
          },
        },
        {
          id: "et10-u3-extract-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TOMORROW,
          stem: "How does Shakespeare use language to present Macbeth's view of life in lines 5-10?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Life is compared to a theatrical performance." },
              { kind: "skill", name: "Zoom in", statement: "Analyse individual words and their connotations." },
            ],
            steps: [
              { reasoning: "The shadow metaphor suggests that life is insubstantial and fleeting.", evidence: "walking shadow", marks: 2, markCode: "AO2" },
              { reasoning: "“Poor player” and “struts and frets” suggest a vain, noisy performer who is soon forgotten.", evidence: "struts and frets his hour", marks: 2, markCode: "AO2" },
              { reasoning: "“Heard no more” stresses the finality of death and the lack of legacy.", evidence: "is heard no more", marks: 2, markCode: "AO1" },
              { reasoning: "The final image of a tale told by “an idiot” suggests life is chaotic and meaningless, a bitter contrast with his earlier ambition.", evidence: "full of sound and fury", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Macbeth compares life to a shadow and a vain actor, suggesting it is fleeting, noisy and forgotten; the tale told by an idiot signifying nothing shows the emptiness of his power.",
            commonErrors: ["Paraphrasing the speech.", "Ignoring the theatrical metaphor."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u3-extract-analysis-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: TOMORROW,
          stem: "Read the extract from Act 5 Scene 5 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two images Macbeth uses to describe life.", marks: 2 },
            { label: "b", prompt: "Explain what the first four lines suggest about Macbeth's attitude to time.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language and structure in the extract to present Macbeth's despair?", marks: 6 },
            { label: "d", prompt: "'Macbeth loses all sympathy from the audience by the end of the play.' How far do you agree? Write about the extract and the whole play, and refer to context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragic hero", statement: "A tragic hero keeps some sympathy even as he falls." },
              { kind: "technique", name: "Metaphor and repetition", statement: "Extended images and repeated words convey despair." },
              { kind: "skill", name: "Extract to whole play", statement: "Link the extract to Macbeth's earlier speeches." },
            ],
            steps: [
              { part: "a", reasoning: "Life is a walking shadow.", evidence: "a walking shadow", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Life is a poor player on a stage, or a tale told by an idiot.", evidence: "a poor player", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Time is slow, dull and repetitive.", evidence: "Creeps in this petty pace", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "He sees days as leading only to death, showing hopelessness.", evidence: "dusty death", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Repetition and the slow verb create a sense of monotony.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The theatrical metaphor and bleak final lines present life as meaningless noise.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: Macbeth has murdered friends and innocents and rules as a tyrant, so sympathy is lost.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Counter-view and analysis: this soliloquy reveals his isolation and grief, restoring some sympathy as a tragic hero who sees the emptiness of his choices.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Wider play: his early conscience and the guilt of the dagger and banquet scenes keep him human.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: a Jacobean audience would expect him to be punished, yet the tragic form invites pity as well as judgement.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) A walking shadow; a poor player. (b) Time is dull, creeping and ends in death. (c) Repetition, metaphor and bleak final lines convey despair. (d) A top answer balances his cruelty against the pity this speech and his earlier conscience inspire.",
            commonErrors: ["Judging him without evidence.", "Ignoring the extract.", "No context."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u3-extract-to-whole-play",
      title: "From extract to whole play",
      skill: "Move from close analysis of an extract to the wider play, selecting apt references to support an argument.",
      lesson: {
        sections: [
          {
            heading: "Zoom out with purpose",
            body: "After analysing the extract, choose two or three moments elsewhere that develop or contrast with it. If the extract shows Lady Macbeth's determination, you might link to her later collapse; if it shows Macbeth's hesitation, link to his later ruthlessness.",
          },
          {
            heading: "Keep the question focus",
            body: "Every reference must answer the question. Avoid summarising the plot. Instead, explain how a later moment changes or confirms the idea in the extract and what Shakespeare wants the audience to feel.",
          },
          {
            heading: "Shape the essay",
            body: "Write an introduction with a clear thesis. Use paragraphs that move from the extract to the whole play, include context where it illuminates meaning, and end with a conclusion that makes a final judgement.",
          },
        ],
        keyFormulas: [
          { name: "Extract to play", statement: "Analyse the extract closely, then link to an earlier or later moment that develops the idea." },
          { name: "Contrast arc", statement: "Compare how a character is presented at different points to show change." },
          { name: "Judgement", statement: "End with a justified conclusion that answers the question directly." },
        ],
        workedExample: {
          problem: "Plan how to link the dagger soliloquy to the rest of the play when writing about Macbeth's conscience.",
          solution: "Extract: the questions and the hallucination show Macbeth's mind divided before the murder. Earlier: in Act 1 Scene 7 he reasons about consequences, showing his conscience in a rational form. Later: after the murder he hears a voice crying “Sleep no more” and fears that the sea could not wash his hands, showing guilt overtaking him. Much later: in Act 5 his conscience seems numb, as in his final soliloquy. Thesis: Shakespeare presents Macbeth's conscience as strong at first but gradually silenced by his crimes, which makes his tragedy more poignant.",
        },
      },
      questions: [
        {
          id: "et10-u3-extract-to-whole-play-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DAGGER,
          stem: "Which later moment in the play best links to Macbeth's hallucination of the dagger?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The appearance of Banquo's ghost at the banquet" },
              { id: "b", text: "The arrival of the English army" },
              { id: "c", text: "Malcolm's coronation" },
              { id: "d", text: "The Porter's speech" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Linking", statement: "Choose a moment that develops the same idea." }],
            steps: [{ reasoning: "Both scenes show Macbeth's guilt and fear producing visions only he can see.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Banquo's ghost is another hallucination caused by guilt.",
            commonErrors: ["Choosing a moment unrelated to guilt or perception."],
          },
        },
        {
          id: "et10-u3-extract-to-whole-play-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: UNSEX_ME,
          stem: "Explain how a later moment in the play contrasts with Lady Macbeth's confidence in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Contrast across the play", statement: "Show how a character changes by linking two moments." }],
            steps: [
              { reasoning: "In the extract Lady Macbeth commands spirits and rejects remorse.", marks: 1, markCode: "AO1" },
              { reasoning: "In the sleepwalking scene she is broken, repeating “Out, damned spot!”.", evidence: "Out, damned spot!", marks: 1, markCode: "AO1" },
              { reasoning: "The shift from imperatives of power to desperate imperatives of guilt shows loss of control.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast shows that rejecting conscience does not remove it, a moral lesson for a Jacobean audience.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Her confident commands in Act 1 contrast with the broken sleepwalking scene, where she cannot clear the guilt that she once denied.",
            commonErrors: ["Describing both moments without comparing."],
          },
        },
        {
          id: "et10-u3-extract-to-whole-play-q3",
          difficulty: "challenge",
          totalMarks: 10,
          extract: DAGGER,
          stem: "Starting with this extract, explain how Shakespeare presents Macbeth's conscience in the play as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract to whole play", statement: "Analyse the extract, then trace the idea." },
              { kind: "convention", name: "Tragedy", statement: "A tragic hero's conscience heightens the tragedy." },
            ],
            steps: [
              { reasoning: "The extract's questions and hallucination show a mind in conflict before the murder.", evidence: "A dagger of the mind", marks: 2, markCode: "AO2" },
              { reasoning: "In Act 1 Scene 7 his reasoning about consequences shows an earlier, rational conscience.", marks: 2, markCode: "AO1" },
              { reasoning: "After the murder his fear of never sleeping and of blood on his hands shows conscience as torment.", marks: 2, markCode: "AO1" },
              { reasoning: "By Act 5 he is numb, which shows how crime has hardened him and heightens the tragedy.", marks: 2, markCode: "AO2" },
              { reasoning: "Context: a Jacobean audience saw conscience as God's warning, so his dulled conscience marks moral decline.", marks: 2, markCode: "AO4" },
            ],
            finalAnswer: "Macbeth's conscience begins as a strong, rational warning, becomes torment after the murder and is finally dulled, showing how crime erodes his humanity.",
            commonErrors: ["Staying only with the extract.", "Plot summary of the whole play."],
            levels: levels(10),
          },
        },
        {
          id: "et10-u3-extract-to-whole-play-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: DAGGER,
          stem: "Read the extract from Act 2 Scene 1 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two things Macbeth notices about the dagger.", marks: 2 },
            { label: "b", prompt: "Explain what the extract suggests about how Macbeth feels before the murder.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language in the extract to create tension?", marks: 6 },
            { label: "d", prompt: "'Macbeth is a play about the dangers of ambition.' How far do you agree? Write about the extract and the whole play, and refer to context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragic hero", statement: "Ambition is a flaw that leads to downfall." },
              { kind: "context", name: "Jacobean order", statement: "Seizing power through murder was seen as against God's order." },
              { kind: "skill", name: "Extract to whole play", statement: "Link the extract to the arc of ambition and consequences." },
            ],
            steps: [
              { part: "a", reasoning: "The handle points toward his hand.", evidence: "The handle toward my hand", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "He can see it but cannot touch it.", evidence: "I have thee not, and yet I see thee still", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He is anxious and uncertain, doubting his senses.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "He is drawn to the murder yet frightened by it.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Questions create uncertainty and suspense.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Paradox and the word “fatal” build a sense of doom.", evidence: "fatal vision", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: ambition leads Macbeth to murder, tyranny and death.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of language and structure: the soliloquies chart the progress from ambition to despair.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: the play also explores fate, guilt, manhood and the supernatural.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: ambition unchecked by morality threatened order in a Jacobean view.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) The handle points to his hand; he can see but not touch it. (b) He is anxious and tempted. (c) Questions and paradox create suspense and doom. (d) A top answer agrees that ambition is central but recognises other themes, supported by methods and context.",
            commonErrors: ["Generalising about ambition.", "No reference to the extract.", "Context as an add-on."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
