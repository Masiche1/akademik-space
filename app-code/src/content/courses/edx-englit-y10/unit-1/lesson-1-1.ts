import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const LUCY: TextExtract = {
  title: "She dwelt among the untrodden ways",
  author: "William Wordsworth",
  source: "Lyrical Ballads (1800)",
  lineNumbers: true,
  text:
    "She dwelt among the untrodden ways\nBeside the springs of Dove,\nA Maid whom there were none to praise\nAnd very few to love:\n\nA violet by a mossy stone\nHalf hidden from the eye!\n—Fair as a star, when only one\nIs shining in the sky.\n\nShe lived unknown, and few could know\nWhen Lucy ceased to be;\nBut she is in her grave, and oh,\nThe difference to me!",
};

const SICK_ROSE: TextExtract = {
  title: "The Sick Rose",
  author: "William Blake",
  source: "Songs of Experience (1794)",
  lineNumbers: true,
  text:
    "O Rose, thou art sick!\nThe invisible worm,\nThat flies in the night\nIn the howling storm:\n\nHas found out thy bed\nOf crimson joy,\nAnd his dark secret love\nDoes thy life destroy.",
};

export const lesson11: Lesson = {
  id: "et10-u1-lesson-1-1",
  code: "1-1",
  title: "Approaching an Unseen Poem",
  goal: "I CAN read an unseen poem for meaning and then analyse how language, form and structure shape its effects.",
  standards: ["4ET1 Paper 1 Section A", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Speaker", definition: "The voice that 'talks' in the poem. It is not always the poet." },
    { term: "Tone", definition: "The attitude or mood of the voice, such as tender, bitter or fearful." },
    { term: "Volta", definition: "A turn in thought, mood or argument within a poem." },
    { term: "Imagery", definition: "Language that creates pictures or sensory impressions, including simile and metaphor." },
    { term: "Oxymoron", definition: "Two contradictory words placed together, such as 'bitter-sweet'." },
    { term: "Stanza", definition: "A group of lines in a poem, like a paragraph in prose." },
    { term: "Enjambment", definition: "When a sentence or phrase runs over the end of a line without a pause." },
  ],
  concepts: [
    {
      id: "et10-u1-approaching-unseen-poem",
      title: "Approaching an unseen poem",
      skill: "Establish the speaker, subject, tone and shape of a poem you have not seen before, using the title and the text.",
      lesson: {
        sections: [
          {
            heading: "Read for meaning first",
            body: "Before you analyse methods, decide what the poem is **about**. Read the title, then read the poem twice. Ask: Who is speaking, and to whom? What is the situation or subject? What is the tone, and does it change? Write a one-sentence summary in your own words. If you cannot say what a poem is about, you cannot explain how the poet makes it effective.",
          },
          {
            heading: "Track the shape of the poem",
            body: "Notice how each stanza develops the one before. Is there a **turn** (volta) where the mood changes, a contrast, or a final line that reframes everything? Examiners reward answers that show you have seen the whole poem, not just the first few lines.",
          },
          {
            heading: "Support every point",
            body: "Use short, embedded quotations and always explain the effect: Point, Evidence, Explain (and then link to the poet's purpose). A technique named without an effect earns very little.",
          },
        ],
        keyFormulas: [
          { name: "Speaker, subject, tone", statement: "Ask who speaks, about what, and in what attitude, then check whether the tone changes." },
          { name: "Contrast", statement: "Poems often place two ideas side by side (public and private, beauty and loss) to reveal the poet's message." },
          { name: "Embedded evidence", statement: "Weave short quotations into your own sentence and comment on key words." },
        ],
        workedExample: {
          problem: "Read lines 9-12 of 'She dwelt among the untrodden ways'. What does the final couplet suggest about the speaker's feelings?",
          solution: "The speaker presents Lucy's death as barely noticed by the world: she “lived unknown” and “few could know” when she died. The final exclamation, “The difference to me!”, then turns sharply from public to private grief. The short, abrupt final line and the personal pronoun “me” suggest that, although the world has not changed, the speaker's life has been emptied. The understated language makes the emotion feel sincere and deeply held rather than melodramatic.",
        },
      },
      questions: [
        {
          id: "et10-u1-approaching-unseen-poem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LUCY,
          stem: "What is the poem mainly about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speaker's sorrow at the death of a woman few people noticed" },
              { id: "b", text: "A celebration of a woman who became famous in her village" },
              { id: "c", text: "A description of the countryside near the River Dove" },
              { id: "d", text: "A speaker's anger that Lucy left the village" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Establish the subject", statement: "Summarise what the poem is about in one sentence before analysing methods." }],
            steps: [{ reasoning: "The poem moves from Lucy's obscurity to her death and the speaker's private loss.", evidence: "she is in her grave", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** The poem is an elegy for Lucy, who lived unnoticed but whose death matters deeply to the speaker.",
            commonErrors: ["Choosing (c) because of the place name and mistaking setting for subject.", "Choosing (b) because she is described as 'fair as a star', ignoring that she 'lived unknown'."],
          },
        },
        {
          id: "et10-u1-approaching-unseen-poem-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LUCY,
          stem: "Which of these is the most convincing interpretation of lines 11-12: “But she is in her grave, and oh, / The difference to me!”?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Her death has made little real difference, which is why the speaker sounds calm" },
              { id: "b", text: "The speaker is relieved that Lucy's quiet life is over" },
              { id: "c", text: "Although the world barely noticed her death, it has changed everything for the speaker, and the exclamation shows sudden emotion" },
              { id: "d", text: "The speaker blames the village for ignoring Lucy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Exclamation", statement: "An exclamation can break a restrained tone to reveal sudden, intense feeling." }],
            steps: [
              { reasoning: "Identifies the contrast between the world's indifference and the speaker's private loss.", evidence: "few could know", marks: 1, markCode: "AO1" },
              { reasoning: "Recognises that the exclamatory “oh” and final line release suppressed emotion.", evidence: "and oh", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The public/private contrast is the poem's key idea, and the exclamation signals the speaker's grief breaking through.",
            commonErrors: ["Reading the plain, quiet language as a sign of indifference (a).", "Inventing a blame or anger that the text does not support (d)."],
          },
        },
        {
          id: "et10-u1-approaching-unseen-poem-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LUCY,
          stem: "How does Wordsworth present Lucy in the first two stanzas (lines 1-8)? You must refer closely to the language used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor and simile", statement: "Comparisons make an abstract quality (modesty, rarity) concrete and memorable." },
              { kind: "skill", name: "Embedded evidence", statement: "Short quotations woven into the answer, with the effect of key words explained." },
            ],
            steps: [
              { reasoning: "Lucy is presented as isolated and overlooked; the negative phrasing stresses her lack of public recognition and the remote setting.", evidence: "untrodden ways", marks: 2, markCode: "AO2" },
              { reasoning: "The violet metaphor suggests modesty, delicacy and quiet natural beauty; “half hidden” implies she is easily overlooked and vulnerable.", evidence: "A violet by a mossy stone", marks: 2, markCode: "AO2" },
              { reasoning: "The star simile elevates her: “only one” makes her rare and precious despite her obscurity, so she is both humble and exceptional.", evidence: "Fair as a star, when only one", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Lucy is shown as an isolated, modest girl (“untrodden ways”, “none to praise”) whose beauty is real but unnoticed. The violet metaphor stresses delicacy and concealment (“half hidden”), while the star simile reveals her uniqueness to the speaker: she is rare (“only one”) and quietly luminous.",
            commonErrors: ["Naming the simile and metaphor without explaining what they suggest.", "Retelling the stanzas line by line instead of analysing language.", "Ignoring the contrast between humble and radiant imagery."],
            levels: levels(6),
          },
        },
        {
          id: "et10-u1-approaching-unseen-poem-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: LUCY,
          stem: "Read the poem 'She dwelt among the untrodden ways' and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two details that show Lucy lived a quiet, unnoticed life (lines 1-4).", marks: 2 },
            { label: "b", prompt: "Explain what the final stanza (lines 9-12) suggests about the speaker's feelings.", marks: 4 },
            { label: "c", prompt: "How does the poet use language and structure to convey the speaker's sense of loss in the whole poem?", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Whole-poem response", statement: "Track the movement of the poem from description to personal feeling, and link methods to effects." },
              { kind: "technique", name: "Structural turn", statement: "A change in focus or tone (here public to private) shapes the reader's response." },
            ],
            steps: [
              { part: "a", reasoning: "She lived in a remote place, far from others.", evidence: "untrodden ways", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Few people praised or loved her.", evidence: "none to praise", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The world did not notice her death, so the loss is mainly private.", evidence: "few could know", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The exclamation and short final line show sudden, intense grief breaking through restraint.", evidence: "The difference to me!", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Imagery of concealment and rarity (violet, star) builds a delicate portrait that makes her loss poignant.", evidence: "Half hidden from the eye", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Simple, plain diction and a regular ballad-like quatrain structure create understated restraint, which makes the emotional release more powerful.", evidence: "She dwelt among the untrodden ways", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The structural movement from description (stanzas 1-2) through death (stanza 3) to personal response, with “but” and “oh” marking the turn, shows how little the world noticed and how much the speaker did.", evidence: "But she is in her grave, and oh", marks: 3, markCode: "AO1" },
            ],
            finalAnswer: "(a) She lived in remote, untrodden places; few praised or loved her. (b) The world did not notice her death, but the speaker's private grief erupts in the exclamation. (c) A top answer analyses the delicate imagery, the plain diction and regular form that create restraint, and the turn on “but” and “oh” that exposes the speaker's loss.",
            commonErrors: ["Paraphrasing the stanzas without commenting on language.", "Treating the poem as a love poem about marriage.", "Neglecting the final stanza's emotional turn."],
            examinerNote: "In (c) reward a sense of the whole poem: candidates who only discuss the first stanza cannot reach the higher levels.",
            levels: levels(9, "c"),
          },
        },
      ],
    },
    {
      id: "et10-u1-unseen-language-form-structure",
      title: "Language, form and structure in an unseen poem",
      skill: "Analyse how a poet's choice of words, form and structure create meaning and effect.",
      lesson: {
        sections: [
          {
            heading: "Language: choose the key word",
            body: "Select a few precise words and phrases and explain their connotations. Look for imagery, contrast, sound patterns (alliteration, assonance), verbs and adjectives. Ask what a word suggests beyond its literal meaning and why the poet chose it instead of a plainer alternative.",
          },
          {
            heading: "Form: the poem's shape on the page",
            body: "Form includes stanza length, line length, rhyme, rhythm and whether the poem is a sonnet, ballad or free verse. Do not just identify form; explain its effect. A song-like rhyme scheme can create innocence or irony; irregular lines can suggest chaos.",
          },
          {
            heading: "Structure: how the poem develops",
            body: "Structure is the order of ideas: beginning, turn, ending, shifts of focus and repetition. Comment on how the poet moves the reader from one idea to the next and why the final lines matter most.",
          },
        ],
        keyFormulas: [
          { name: "Connotation", statement: "The ideas and feelings a word suggests beyond its literal meaning." },
          { name: "Form versus structure", statement: "Form is the poem's pattern (stanzas, rhyme, metre). Structure is how ideas develop and shift through the poem." },
          { name: "Effect formula", statement: "Method + quotation + effect on the reader + link to the poet's message." },
        ],
        workedExample: {
          problem: "How does Blake use language to present danger in 'The Sick Rose'?",
          solution: "Blake personifies the rose as sick and then reveals its attacker as an “invisible worm”. The adjective “invisible” suggests a threat that cannot be seen or fought, making the destruction inevitable. The word “crimson” evokes both passion and blood, and the oxymoronic “dark secret love” turns love into something predatory. Together these choices imply that love can be corrupted into harm, an idea that is more disturbing because it is delivered in such short, simple lines.",
        },
      },
      questions: [
        {
          id: "et10-u1-unseen-language-form-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SICK_ROSE,
          stem: "What does the word “invisible” in line 2 most suggest about the worm?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the worm is too small to be seen" },
              { id: "b", text: "That the threat is hidden and cannot be guarded against" },
              { id: "c", text: "That it is night and too dark to see" },
              { id: "d", text: "That the worm is imaginary" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Connotation", statement: "Words suggest ideas beyond their literal meaning." }],
            steps: [{ reasoning: "“Invisible” implies a secret, unstoppable danger that is already at work.", evidence: "The invisible worm", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** The word connotes a hidden threat that the rose cannot defend against.",
            commonErrors: ["Taking the word literally as 'very small' (a).", "Confusing the darkness of the night with the meaning of the adjective (c)."],
          },
        },
        {
          id: "et10-u1-unseen-language-form-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SICK_ROSE,
          stem: "Which statement best describes the form of the poem and its effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sonnet whose fourteen lines build a logical argument" },
              { id: "b", text: "Free verse, with no pattern, which reflects the rose's confusion" },
              { id: "c", text: "Two short, song-like quatrains with rhyme in alternate lines, which contrasts with the disturbing subject" },
              { id: "d", text: "A long narrative ballad that tells the rose's whole life story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Form and effect", statement: "Identify the form then explain how it shapes the reader's response." }],
            steps: [
              { reasoning: "Identifies two short quatrains with rhyme (worm/storm; joy/destroy).", evidence: "storm", marks: 1, markCode: "AO2" },
              { reasoning: "Explains the effect: a simple, nursery-rhyme tone makes the dark message more unsettling.", evidence: "Does thy life destroy", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The simple, song-like form contrasts with the dark subject and makes it feel more disturbing.",
            commonErrors: ["Misidentifying the form because of the poem's short length.", "Identifying the form but giving no effect."],
          },
        },
        {
          id: "et10-u1-unseen-language-form-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SICK_ROSE,
          stem: "How does Blake use language to present destruction in lines 5-8?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Oxymoron", statement: "Contradictory terms placed together create tension and ambiguity." },
              { kind: "skill", name: "Zoom in on words", statement: "Analyse individual words rather than describing whole lines." },
            ],
            steps: [
              { reasoning: "“Crimson” suggests both passion and blood; “joy” is then undercut, suggesting that pleasure and violence are intertwined.", evidence: "crimson joy", marks: 2, markCode: "AO2" },
              { reasoning: "The oxymoronic “dark secret love” corrupts the idea of love, implying a hidden, possessive desire that harms.", evidence: "dark secret love", marks: 2, markCode: "AO2" },
              { reasoning: "The verb “destroy” ends the poem with finality, and “found out” makes the worm sound like a stalker, so destruction seems deliberate.", evidence: "Does thy life destroy", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Blake presents destruction as intimate and deliberate. “Crimson joy” fuses passion with blood, “dark secret love” corrupts love into predation, and the blunt final verb “destroy” closes the poem with a sense of inevitability.",
            commonErrors: ["Listing techniques with no effect.", "Explaining the whole poem rather than focusing on lines 5-8.", "Missing the contradictions inside the phrases."],
            levels: levels(6),
          },
        },
        {
          id: "et10-u1-unseen-language-form-structure-q4",
          difficulty: "challenge",
          totalMarks: 15,
          extract: SICK_ROSE,
          stem: "Read 'The Sick Rose' and answer all parts.",
          parts: [
            { label: "a", prompt: "Identify two words or phrases that show the rose is under attack.", marks: 2 },
            { label: "b", prompt: "Explain how the poem's opening line affects the reader.", marks: 4 },
            { label: "c", prompt: "How does Blake use language, form and structure to create a sense of threat in the poem as a whole?", marks: 9 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Apostrophe and personification", statement: "Addressing the rose directly and giving it human qualities creates sympathy." },
              { kind: "convention", name: "Compression", statement: "Short lines and brief stanzas intensify meaning and make the ending feel inevitable." },
            ],
            steps: [
              { part: "a", reasoning: "The worm “has found out” the rose.", evidence: "Has found out thy bed", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The final verb states the damage plainly.", evidence: "Does thy life destroy", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Direct address to the rose draws the reader in as if to a victim and personifies the flower.", evidence: "O Rose, thou art sick!", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The exclamation and the blunt statement of illness create an immediate sense of alarm and sympathy.", evidence: "thou art sick", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Language: “invisible worm” and “dark secret love” make the threat unseen, predatory and perverse.", evidence: "dark secret love", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Form: short, song-like lines and tidy rhyme contrast with the dark message, making the threat feel more insidious.", evidence: "In the howling storm", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Structure: the first stanza sets the scene and the diagnosis; the second moves to the cause and ends on the finality of “destroy”, leaving no hope of rescue.", evidence: "Does thy life destroy", marks: 3, markCode: "AO1" },
            ],
            finalAnswer: "(a) “Has found out thy bed”; “Does thy life destroy”. (b) The direct address and exclamation create alarm and sympathy. (c) A top answer shows how hidden, corrupting imagery, a deceptively simple song-like form and a two-stage structure ending on “destroy” create inescapable threat.",
            commonErrors: ["Writing about Blake's life instead of the poem.", "Treating the worm as a literal creature only.", "Commenting on form without explaining its effect."],
            examinerNote: "Accept any valid reading of what the rose and worm symbolise if supported by the text.",
            levels: levels(9, "c"),
          },
        },
      ],
    },
  ],
};
