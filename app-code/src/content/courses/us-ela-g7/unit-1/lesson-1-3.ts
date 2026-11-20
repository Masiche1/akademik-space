import type { Lesson, TextExtract } from "../../../types.ts";
import { levels8 } from "./levels.ts";

const CONTEST: TextExtract = {
  title: "The Science Fair",
  author: "Written for Akademik Space",
  text: "Jada's Point of View\n\nI worked on my robot for three months, and tonight is the night it finally matters. When the judges walk by, I will stand perfectly straight and explain every wire. My cousin Theo says he will not bother entering this year, which is a relief; he always wins. I cannot wait to see his face when the ribbon has my name on it.\n\nTheo's Point of View\n\nI told Jada I was not entering. That was a lie. Behind the curtain in the gym I have a model of a wind turbine I built in secret, and I am sick with nerves. She has worked so hard, and I am afraid I will ruin the one thing she wants. But I did not build a turbine for three months just to hide it under a curtain.",
};

const TURNING: TextExtract = {
  title: "The Lantern Keeper",
  author: "Written for Akademik Space",
  text: "KEEPER: (polishing the great lamp) A fine, clear night. The ships will see us for miles.\n\nBOY: (rushing in, out of breath) Sir! A storm is coming from the east!\n\nKEEPER: (without turning) Nonsense. The glass has not dropped. Go home, boy.\n\nBOY: But the gulls are all flying inland!\n\nKEEPER: (waving a hand) Gulls are fools. Leave me to my work.\n\n(The BOY hesitates, then slips out. The KEEPER hums and goes on polishing as, far out on the dark water, a single cloud appears on the horizon.)",
  lineNumbers: true,
};

const SONNET: TextExtract = {
  title: "The Letter Not Sent",
  author: "Written for Akademik Space",
  text: "I wrote it once, then wrote it twice again,\nAnd every word was wrong, and so I tore\nThe pages into pieces, like the rain\nThat tears the leaves and leaves them on the floor.\n\nThe lamp burned low. The clock began to chime.\nI watched the hours slip away like sand;\nAnd then I saw there was no need of time:\nI only had to take her by the hand.\n\nSo here I stand beside her door tonight,\nNo paper in my pocket, nothing planned,\nAnd all my fear dissolves in the morning light\nAs, trembling, I lift up my empty hand.",
  lineNumbers: true,
};

export const lesson13: Lesson = {
  id: "ela7-u1-lesson-1-3",
  code: "1-3",
  title: "Point of View and Structure",
  goal: "I CAN contrast characters' points of view, explain dramatic irony, and analyze how the form or structure of a poem or drama contributes to its meaning.",
  standards: ["RL.7.6", "RL.7.5"],
  vocabulary: [
    { term: "Point of view", definition: "The perspective from which a story is told or the way a character sees events." },
    { term: "Dramatic irony", definition: "When the audience knows something that a character does not." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in prose." },
    { term: "Stage directions", definition: "Instructions in a drama that describe actions, setting, and how lines are spoken." },
    { term: "Quatrain", definition: "A stanza of four lines, often with a rhyme pattern such as ABAB." },
    { term: "Structure", definition: "The way a text is organized, such as stanzas, scenes, or the order of events." },
  ],
  concepts: [
    {
      id: "ela7-u1-point-of-view",
      title: "Contrasting points of view and dramatic irony",
      skill: "Explain how characters' points of view differ and how the audience's knowledge creates dramatic irony.",
      lesson: {
        sections: [
          {
            heading: "Different characters, different views",
            body: "Two characters can live through the same event and see it very differently. A character's point of view is shaped by what they know, want, and fear. To contrast viewpoints, name each character's view, quote evidence for each, and explain why they differ. Pay attention to what one character hides from another.",
          },
          {
            heading: "Dramatic irony",
            body: "In **dramatic irony**, the audience or reader knows something that a character does not. This creates tension, humor, or sadness because we watch characters act without the full picture. To analyze it, state what the audience knows, what the character believes, and how the gap affects the reader's feelings.",
          },
        ],
        keyFormulas: [
          { name: "Point of view", statement: "A character's perspective, shaped by what they know, want, and feel." },
          { name: "Dramatic irony", statement: "The reader knows something a character does not, creating tension or humor." },
          { name: "Contrast", statement: "Name each view, give evidence for each, and explain why they differ." },
        ],
        workedExample: {
          problem: "From 'The Science Fair': How does the author develop the different points of view of Jada and Theo?",
          solution: "Jada believes she has no competition. She says Theo 'will not bother entering this year, which is a relief,' and imagines the ribbon 'has my name on it.' Theo's view is very different: he admits 'That was a lie' and says he is 'sick with nerves.' Because we read both accounts, we know Theo has entered, but Jada does not. This dramatic irony makes us anxious for them both, and shows that each cares about the competition for a different reason.",
        },
      },
      questions: [
        {
          id: "ela7-u1-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CONTEST,
          stem: "Which statement best describes an example of dramatic irony in the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jada built a robot for three months." },
              { id: "b", text: "The reader knows Theo has secretly entered the contest, but Jada believes he has not." },
              { id: "c", text: "Theo is nervous about the competition." },
              { id: "d", text: "Both cousins are in the gym on the same night." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Dramatic irony", statement: "The reader knows a fact that a character does not." }],
            steps: [{ reasoning: "Only the reader has seen Theo's account, so we know what Jada does not.", evidence: "That was a lie.", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)**. The other choices are facts known to everyone in the story.",
            commonErrors: ["Choosing an answer that is simply a plot fact."],
          },
        },
        {
          id: "ela7-u1-point-of-view-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: CONTEST,
          stem: "How do Jada and Theo feel differently about the contest? Use one piece of evidence for each character.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Contrasting viewpoints", statement: "State each character's view and support it with a quotation." }],
            steps: [
              { reasoning: "Jada is confident and eager to win, and she is relieved her rival is out.", evidence: "which is a relief", marks: 1, markCode: "AO1" },
              { reasoning: "Theo is anxious and cares about hurting Jada, so he feels guilty and afraid.", evidence: "I am sick with nerves", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Jada feels confident and thinks Theo's absence is 'a relief.' Theo feels anxious and guilty, saying he is 'sick with nerves' and afraid of ruining what Jada wants.",
            commonErrors: ["Describing only one character.", "Giving a feeling with no quotation."],
          },
        },
        {
          id: "ela7-u1-point-of-view-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CONTEST,
          stem: "How does the author use the two points of view to create dramatic irony, and what effect does it have on the reader? Use at least two pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony", statement: "A gap between what the reader knows and what a character knows creates tension." },
              { kind: "technique", name: "Point of view", statement: "Showing two perspectives lets the reader know more than any single character." },
            ],
            steps: [
              { reasoning: "Jada's confidence is based on a false belief, which the reader knows is wrong.", evidence: "I cannot wait to see his face when the ribbon has my name on it", marks: 2, markCode: "AO2" },
              { reasoning: "Theo's confession reveals the truth, and the reader sees the gap between the two accounts.", evidence: "That was a lie.", marks: 2, markCode: "AO2" },
              { reasoning: "The effect is suspense and sympathy: we worry for both, since each may be hurt.", evidence: "I am afraid I will ruin the one thing she wants", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 4", marks: "5-6", descriptor: "Thorough, precise analysis of dramatic irony and its effect, with well-chosen evidence from both characters." },
              { level: "Level 3", marks: "3-4", descriptor: "Clear explanation with relevant evidence." },
              { level: "Level 2", marks: "2", descriptor: "Partial, general comment with limited evidence." },
              { level: "Level 1", marks: "1", descriptor: "Minimal comment with little evidence." },
            ],
            finalAnswer: "By giving both viewpoints, the author lets the reader know more than either cousin. Jada is certain she will win and imagines 'the ribbon' with her name, but Theo admits 'That was a lie' about not entering. This dramatic irony creates suspense and sympathy, because we know the cousins are heading toward a conflict and that Theo is afraid of hurting Jada.",
            commonErrors: ["Saying 'dramatic irony' with no explanation of the gap.", "Using evidence from only one character."],
          },
        },
        {
          id: "ela7-u1-point-of-view-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: CONTEST,
          stem: "Answer all parts of this question about 'The Science Fair'.",
          parts: [
            { label: "a", prompt: "What does Jada believe about Theo's entry in the contest? Quote one phrase.", marks: 2 },
            { label: "b", prompt: "Explain how Theo's view of the contest is different from Jada's.", marks: 4 },
            { label: "c", prompt: "How does the author use point of view and dramatic irony to build tension? Use at least three pieces of evidence.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony", statement: "The audience knows more than a character, which creates tension." },
              { kind: "skill", name: "Contrast", statement: "Compare two viewpoints with evidence for each." },
            ],
            steps: [
              { part: "a", reasoning: "She believes Theo is not entering.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The quotation shows her relief at this.", evidence: "he will not bother entering this year", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Jada sees the contest as a chance to beat her cousin and win.", evidence: "his face when the ribbon has my name on it", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Theo cares more about her feelings and his own nerves than about winning.", evidence: "I am afraid I will ruin the one thing she wants", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The two accounts mean the reader knows the truth that Jada misses.", evidence: "I told Jada I was not entering.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Jada's relief and confidence sound ironic once we know about the hidden turbine.", evidence: "which is a relief", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Theo's secrecy adds emotional complexity and sympathy.", evidence: "a model of a wind turbine I built in secret", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final line suggests Theo will not back down, so a clash is coming.", evidence: "I did not build a turbine for three months just to hide it", marks: 2, markCode: "AO2" },
            ],
            levels: levels8("c"),
            finalAnswer: "(a) She believes Theo is not entering: he 'will not bother entering this year.' (b) Jada wants to win and see her cousin lose, while Theo is anxious and worried about hurting her. (c) By giving both accounts, the author lets us see the truth Jada does not. Her relief that Theo is out becomes ironic when he admits 'That was a lie' and reveals his secret turbine. Theo's guilt and determination make us sympathize with both cousins and wait anxiously for them to find out.",
            commonErrors: ["Retelling each account without comparing them.", "Naming dramatic irony but not explaining the gap.", "In (a), quoting Theo instead of Jada."],
          },
        },
      ],
    },
    {
      id: "ela7-u1-form-structure",
      title: "How form and structure contribute to meaning",
      skill: "Analyze how stanzas, lines, scenes, and stage directions shape a poem's or drama's meaning.",
      lesson: {
        sections: [
          {
            heading: "Structure in poetry",
            body: "A poem's form affects its meaning. **Stanzas** group ideas, **line breaks** control pace and emphasis, and **rhyme** links words. Many poems, such as sonnets, have a **turn**, or volta, where the thought shifts. When you analyze a poem, ask where the poem changes and why the poet organized it this way.",
          },
          {
            heading: "Structure in drama",
            body: "A drama is organized in **scenes** and **acts**, and told through **dialogue** and **stage directions**. Stage directions tell actors how to move and speak, and they give the audience information the characters may not notice. Short lines can create quick, tense exchanges, while long speeches slow the action.",
          },
          {
            heading: "Linking structure to meaning",
            body: "Never only name a form feature. Say what it does: 'The poem turns in line 9, moving from fear to calm, which shows the speaker changing his mind.' Follow the pattern: feature, evidence, effect on meaning.",
          },
        ],
        keyFormulas: [
          { name: "Stanza and line break", statement: "Stanzas group ideas; line breaks control pace and emphasis." },
          { name: "Turn (volta)", statement: "A shift in a poem's thought or mood, often near the middle or end of a sonnet." },
          { name: "Stage directions", statement: "Notes in a drama that describe action and delivery, often revealing what characters miss." },
        ],
        workedExample: {
          problem: "From 'The Lantern Keeper': How do the stage directions contribute to the meaning of the final moment?",
          solution: "The final stage direction says that 'a single cloud appears on the horizon' while the Keeper 'hums and goes on polishing.' The audience sees the danger the Keeper ignores, which creates dramatic irony. The calm action of humming contrasts with the threat, so the drama suggests that pride and refusal to listen can be dangerous.",
        },
      },
      questions: [
        {
          id: "ela7-u1-form-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TURNING,
          stem: "What is the main purpose of the final stage direction, in parentheses at the end of the scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show the audience a danger the Keeper does not see." },
              { id: "b", text: "To explain how the Keeper repairs the lamp." },
              { id: "c", text: "To introduce a new character." },
              { id: "d", text: "To end the play with a joke." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Stage directions", statement: "Stage directions can show the audience information that characters miss." }],
            steps: [{ reasoning: "The cloud appears while the Keeper keeps polishing, so only the audience sees the danger.", evidence: "a single cloud appears on the horizon", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)**. The Keeper is already known, no new character appears, and the tone is ominous rather than funny.",
            commonErrors: ["Choosing (b) because polishing is mentioned."],
          },
        },
        {
          id: "ela7-u1-form-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SONNET,
          stem: "The poem changes direction in the third stanza (line 9). How does the speaker's mood change from the first eight lines to the last four? Use evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "The turn (volta)", statement: "A poem can shift mood or idea at a stanza break, often late in the poem." }],
            steps: [
              { reasoning: "In the first eight lines the speaker is frustrated and frozen by failed attempts to write.", evidence: "every word was wrong", marks: 1, markCode: "AO2" },
              { reasoning: "In line 9 he is standing at her door, so the mood has turned to action.", evidence: "So here I stand beside her door tonight", marks: 1, markCode: "AO2" },
              { reasoning: "He becomes calmer and braver once he drops the plan.", evidence: "all my fear dissolves", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The first eight lines show frustration, as the speaker tears up letters because 'every word was wrong.' From line 9 he stands at her door, and 'all my fear dissolves,' so the mood changes from anxious to calm and brave.",
            commonErrors: ["Describing the poem without noticing the shift.", "Naming a mood with no quotation."],
          },
        },
        {
          id: "ela7-u1-form-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: TURNING,
          stem: "How does the author use dialogue and stage directions to show the Keeper's attitude, and how does this structure build suspense? Use at least two pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Drama structure", statement: "Dialogue and stage directions work together to reveal character and build suspense." },
              { kind: "technique", name: "Dramatic irony", statement: "The audience sees the danger the character ignores." },
            ],
            steps: [
              { reasoning: "The Keeper dismisses the Boy's warnings quickly, showing arrogance and a closed mind.", evidence: "Gulls are fools. Leave me to my work.", marks: 2, markCode: "AO2" },
              { reasoning: "Stage directions show him refusing to look, which stresses that he ignores the truth.", evidence: "without turning", marks: 2, markCode: "AO2" },
              { reasoning: "The last direction shows the cloud, which builds suspense because the audience sees what he cannot.", evidence: "a single cloud appears on the horizon", marks: 2, markCode: "AO2" },
            ],
            levels: [
              { level: "Level 4", marks: "5-6", descriptor: "Thorough, precise analysis of how dialogue and stage directions build character and suspense, with well-chosen evidence." },
              { level: "Level 3", marks: "3-4", descriptor: "Clear explanation with relevant evidence." },
              { level: "Level 2", marks: "2", descriptor: "Partial, general comment with limited evidence." },
              { level: "Level 1", marks: "1", descriptor: "Minimal comment with little evidence." },
            ],
            finalAnswer: "The Keeper is shown as proud and dismissive. He answers the Boy 'without turning' and calls the gulls 'fools,' which shows he refuses to listen. The structure of short, quick exchanges makes the Boy's warnings urgent, and the final stage direction, 'a single cloud appears on the horizon,' lets the audience see the danger he ignores, which builds suspense.",
            commonErrors: ["Retelling the scene without analyzing form.", "Ignoring the stage directions."],
          },
        },
        {
          id: "ela7-u1-form-structure-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: SONNET,
          stem: "Answer all parts of this question about 'The Letter Not Sent'.",
          parts: [
            { label: "a", prompt: "How many lines does the poem have, and how many stanzas? What is a four-line stanza called?", marks: 2 },
            { label: "b", prompt: "Explain what the simile in lines 3-4 suggests about the speaker's feelings.", marks: 4 },
            { label: "c", prompt: "How does the structure of the poem, including the turn in line 9 and the last stanza, contribute to its meaning? Use at least three pieces of evidence.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sonnet", statement: "A sonnet has fourteen lines and often turns in thought partway through." },
              { kind: "technique", name: "Simile", statement: "A comparison using 'like' that adds an image and feeling." },
            ],
            steps: [
              { part: "a", reasoning: "The poem has twelve lines.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "It is made of three stanzas of four lines each, and a four-line stanza is called a quatrain.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Tearing the pages is compared to rain tearing leaves, which suggests a natural, harsh, destructive force.", evidence: "like the rain / That tears the leaves", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It suggests the speaker feels his failed attempts are wasteful and out of his control, and it adds a sad, gloomy mood.", evidence: "leaves them on the floor", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The first two stanzas build a pattern of failed attempts and slipping time, creating pressure.", evidence: "I watched the hours slip away like sand", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Line 8 offers a turn: he realizes he does not need the letter, only to act.", evidence: "I only had to take her by the hand", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The last stanza shows him at the door in the present tense, so the structure moves from past frustration to present action.", evidence: "So here I stand beside her door tonight", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The ending repeats the image of the hand, now empty, which closes the poem on courage and sincerity.", evidence: "I lift up my empty hand", marks: 2, markCode: "AO2" },
            ],
            levels: levels8("c"),
            finalAnswer: "(a) Twelve lines in three stanzas; each four-line stanza is a quatrain. (b) The rain tearing leaves suggests his tearing of the pages is destructive and out of control, adding a gloomy mood. (c) The poem moves from failed attempts and time 'slip[ping] away like sand' to a realization in line 8, 'I only had to take her by the hand,' and then to the present, 'So here I stand beside her door tonight.' The structure shows his growth from frustration to courage, and the return of the 'hand' in the last line shows that action means more than words.",
            commonErrors: ["Counting stanzas wrongly.", "Naming the form without saying how it affects meaning."],
          },
        },
      ],
    },
  ],
};
