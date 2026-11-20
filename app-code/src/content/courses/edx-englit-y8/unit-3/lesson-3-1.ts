import type { Lesson, MarkLevel } from "../../../types.ts";

function lv(top: 6 | 8, part?: string): MarkLevel[] {
  const six = top === 6;
  const ranges = six ? ["5-6", "3-4", "1-2"] : ["7-8", "5-6", "3-4", "1-2"];
  const text = six
    ? ["Thorough, well-chosen references; developed comment.", "Some understanding; some relevant references.", "Simple, limited comment; few references."]
    : ["Perceptive, assured; well-chosen, integrated references.", "Clear, relevant explanation; relevant references.", "Some understanding; some relevant references.", "Simple, limited comment; few references."];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", part }));
}

const PROLOGUE = {
  title: "Romeo and Juliet, Prologue",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "Two households, both alike in dignity,\nIn fair Verona, where we lay our scene,\nFrom ancient grudge break to new mutiny,\nWhere civil blood makes civil hands unclean.\nFrom forth the fatal loins of these two foes\nA pair of star-cross'd lovers take their life;",
};

const BALCONY = {
  title: "Romeo and Juliet, Act 2 Scene 2 (Romeo)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "But, soft! what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\nArise, fair sun, and kill the envious moon,\nWho is already sick and pale with grief,\nThat thou her maid art far more fair than she.",
};

const NAME = {
  title: "Romeo and Juliet, Act 2 Scene 2 (Juliet)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "O Romeo, Romeo! wherefore art thou Romeo?\nDeny thy father and refuse thy name;\nOr, if thou wilt not, be but sworn my love,\nAnd I'll no longer be a Capulet.",
};

export const lesson31: Lesson = {
  id: "et8-u3-lesson-3-1",
  code: "3-1",
  title: "Shakespeare's Language and Dramatic Devices",
  goal: "I CAN read Shakespeare's language with confidence and explain how soliloquy, aside and dramatic irony shape an audience's response.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Iambic pentameter", definition: "A line of ten syllables in five pairs, each with an unstressed then a stressed syllable, like a heartbeat." },
    { term: "Soliloquy", definition: "A speech in which a character, alone on stage, speaks their thoughts aloud to the audience." },
    { term: "Aside", definition: "A short remark spoken to the audience that other characters on stage do not hear." },
    { term: "Dramatic irony", definition: "When the audience knows something that one or more characters do not." },
    { term: "Oxymoron", definition: "Two contradictory words placed together, such as 'sweet sorrow'." },
    { term: "Chorus", definition: "A character or group who comments on the action; here the Prologue speaker." },
    { term: "Inversion", definition: "An unusual word order, such as 'wherefore art thou Romeo'." },
  ],
  concepts: [
    {
      id: "et8-u3-shakespeare-language",
      title: "Reading Shakespeare's language",
      skill: "Decode Shakespearean vocabulary and word order and explain the effect of imagery and verse.",
      lesson: {
        sections: [
          {
            heading: "Decoding the words",
            body: "Many words look unfamiliar: 'thou' means you, 'thy' means your, 'wherefore' means why (not where), 'art' means are, 'hath' means has. Shakespeare also changes word order: 'what light through yonder window breaks?' means 'what light is breaking through that window?'. Translate first, then analyse.",
          },
          {
            heading: "Verse and imagery",
            body: "Most of the play is in **iambic pentameter**, a ten-syllable line with a heartbeat rhythm that sounds natural and elevated. Romeo's balcony speech uses **metaphor** ('Juliet is the sun') and **light imagery** to show love as warmth, brightness and life. Look for the contrast with darkness and with the 'envious moon', which suggests a rival jealous of her beauty.",
          },
        ],
        keyFormulas: [
          { name: "Thou / thee / thy", statement: "You / you (object) / your." },
          { name: "Wherefore", statement: "Why." },
          { name: "Iambic pentameter", statement: "Five pairs of syllables: da-DUM da-DUM da-DUM da-DUM da-DUM." },
          { name: "Light imagery", statement: "Love associated with sun, stars and brightness." },
        ],
        workedExample: {
          problem: "How does Shakespeare present Juliet through Romeo's language in the balcony extract?",
          solution: "Romeo presents Juliet as the source of light and life. The metaphor 'Juliet is the sun' makes her radiant and central, while the command 'Arise, fair sun, and kill the envious moon' personifies the moon as a jealous rival and suggests that Juliet's beauty makes other beauty look weak and 'sick'. The imagery shows Romeo is passionate and sees Juliet almost as a goddess.",
        },
      },
      questions: [
        {
          id: "et8-u3-shakespeare-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NAME,
          stem: "In 'wherefore art thou Romeo?' (line 1), what does 'wherefore' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where" },
              { id: "b", text: "Why" },
              { id: "c", text: "Who" },
              { id: "d", text: "When" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Decoding", statement: "'Wherefore' means 'why'; Juliet is asking why he is a Montague, not where he is." }],
            steps: [{ reasoning: "Juliet asks why he must be Romeo (a Montague, her family's enemy).", evidence: "wherefore art thou Romeo", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Why.",
            commonErrors: ["Choosing 'where' as it looks similar; Juliet knows he is below her window."],
          },
        },
        {
          id: "et8-u3-shakespeare-language-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: BALCONY,
          stem: "What does the metaphor 'Juliet is the sun' suggest about how Romeo sees her?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Juliet is directly identified as the sun." }],
            steps: [
              { reasoning: "The sun is the source of light and life, so Juliet is central and essential to Romeo.", evidence: "Juliet is the sun", marks: 1, markCode: "AO2" },
              { reasoning: "It suggests radiant beauty that outshines everything else, such as the moon.", evidence: "kill the envious moon", marks: 1, markCode: "AO2" },
              { reasoning: "The metaphor shows he idealises her, almost worshipping her.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The sun is the source of life and light, so Juliet is essential and radiant, outshining the 'envious moon'. Romeo idealises her.",
            commonErrors: ["Saying 'she is hot' or only that it is a metaphor."],
          },
        },
        {
          id: "et8-u3-shakespeare-language-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BALCONY,
          stem: "How does Shakespeare use language to present Romeo's feelings for Juliet in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Light imagery", statement: "Sun, east, moon." },
              { kind: "technique", name: "Personification", statement: "The moon is envious, sick and pale with grief." },
            ],
            steps: [
              { reasoning: "The exclamation 'But, soft!' shows sudden excitement and wonder as Romeo notices her.", evidence: "But, soft!", marks: 2, markCode: "AO2" },
              { reasoning: "The metaphor of the sun shows she is his light and life, and that he thinks she is perfect.", evidence: "Juliet is the sun", marks: 2, markCode: "AO2" },
              { reasoning: "Personifying the moon as 'envious' and 'sick' emphasises her superior beauty and Romeo's passionate exaggeration.", evidence: "sick and pale with grief", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "Romeo is excited ('But, soft!') and worships Juliet, comparing her to the sun that makes the moon 'sick and pale with grief', which shows an intense, idealising love.",
            levels: lv(6),
            commonErrors: ["Translating only.", "No quotation analysis."],
          },
        },
        {
          id: "et8-u3-shakespeare-language-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: NAME,
          stem: "Read Juliet's speech and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things Juliet asks Romeo to do in lines 2-4.", marks: 2 },
            { label: "b", prompt: "Explain what 'Deny thy father and refuse thy name' suggests about Juliet's feelings.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language in this speech to present the conflict between love and family loyalty?", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Use exact words." },
              { kind: "technique", name: "Imperatives", statement: "'Deny' and 'refuse' show urgency." },
              { kind: "technique", name: "Antithesis", statement: "Love set against family name." },
            ],
            steps: [
              { part: "a", reasoning: "Deny his father and refuse his name.", evidence: "Deny thy father and refuse thy name", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Or be sworn her love (so she will give up being a Capulet).", evidence: "be but sworn my love", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The imperatives are urgent and bold: she asks him to reject his family for love.", evidence: "Deny thy father", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "She is willing to give up her own name, showing she values love above family and is impulsive.", evidence: "I'll no longer be a Capulet", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The repetition 'Romeo, Romeo!' shows longing, yet the question 'wherefore art thou Romeo?' shows the problem is his name.", evidence: "O Romeo, Romeo!", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The conditional 'if thou wilt not, be but sworn my love' shows she offers a choice in which love outranks family.", evidence: "if thou wilt not", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The idea of giving up names suggests that the feud is an artificial barrier that separates them.", evidence: "refuse thy name", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Link to the Prologue: 'ancient grudge' shows why love is dangerous.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) Deny his father and refuse his name; swear to be her love. (b) The imperatives are urgent, showing she wants him to reject his family and she will give up her own name. (c) Her language places love against the family name, and the feud is shown as an artificial barrier.",
            levels: lv(8, "c"),
            commonErrors: ["Only translating the lines."],
          },
        },
      ],
    },
    {
      id: "et8-u3-dramatic-devices",
      title: "Soliloquy, aside and dramatic irony",
      skill: "Explain how Shakespeare uses soliloquy, aside and dramatic irony to shape the audience's response.",
      lesson: {
        sections: [
          {
            heading: "Three devices",
            body: "A **soliloquy** lets a character speak private thoughts to the audience, so we see honest feelings. An **aside** is a quick remark to the audience that others do not hear. **Dramatic irony** occurs when the audience knows more than the characters, creating tension, sympathy or dread. In the **Prologue** the Chorus tells us 'A pair of star-cross'd lovers take their life', so the audience knows the ending from the start.",
          },
          {
            heading: "Effect on the audience",
            body: "Dramatic irony creates **suspense** (what will happen?) and **pathos** (pity for characters who cannot escape). Because the audience knows the ending, every moment of joy becomes poignant. When you write about devices, explain what the audience knows, what the character does not know, and how the audience feels.",
          },
        ],
        keyFormulas: [
          { name: "Soliloquy", statement: "A character alone, sharing private thoughts." },
          { name: "Aside", statement: "A remark heard by the audience only." },
          { name: "Dramatic irony", statement: "The audience knows more than the characters." },
          { name: "Prologue", statement: "The Chorus announces the lovers' deaths in advance." },
        ],
        workedExample: {
          problem: "How does Shakespeare create dramatic irony in the Prologue?",
          solution: "The Prologue reveals the ending before the play starts: the 'star-cross'd lovers take their life'. 'Star-cross'd' suggests that the stars, meaning fate, are against them. Because the audience knows the fatal outcome, every hopeful moment becomes poignant, and the audience watches with suspense and pity as characters make choices without knowing their doom.",
        },
      },
      questions: [
        {
          id: "et8-u3-dramatic-devices-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PROLOGUE,
          stem: "What does the Prologue tell the audience in lines 5-6?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the lovers will marry happily" },
              { id: "b", text: "That the lovers will die" },
              { id: "c", text: "That the feud will never be explained" },
              { id: "d", text: "That Romeo will leave Verona" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Dramatic irony", statement: "The audience knows the ending." }],
            steps: [{ reasoning: "'Take their life' means the lovers will end their own lives.", evidence: "A pair of star-cross'd lovers take their life", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** That the lovers will die.",
            commonErrors: ["Reading 'take their life' as 'begin their life'."],
          },
        },
        {
          id: "et8-u3-dramatic-devices-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: PROLOGUE,
          stem: "Explain what 'star-cross'd' suggests about the lovers' fate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Fate and astrology", statement: "Elizabethans believed the stars influenced human lives." }],
            steps: [
              { reasoning: "'Star' refers to fate or destiny, as people believed the stars shaped life.", evidence: "star-cross'd", marks: 1, markCode: "AO2" },
              { reasoning: "'Cross'd' suggests thwarted, opposed or blocked, so the lovers are doomed.", marks: 1, markCode: "AO2" },
              { reasoning: "It means their deaths are unavoidable, creating sympathy.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Star-cross'd' means opposed by the stars, so the lovers are destined to fail, which makes the audience feel pity.",
            commonErrors: ["Saying they are 'lucky' or 'famous'."],
          },
        },
        {
          id: "et8-u3-dramatic-devices-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: PROLOGUE,
          stem: "How does Shakespeare use the Prologue to shape the audience's response to the play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony", statement: "Knowledge of the ending changes how we watch." },
              { kind: "technique", name: "Antithesis and oxymoron", statement: "'Civil blood makes civil hands unclean' links peace and violence." },
            ],
            steps: [
              { reasoning: "The Prologue gives away the ending, so the audience watches with suspense and sympathy rather than surprise.", evidence: "take their life", marks: 2, markCode: "AO2" },
              { reasoning: "'Ancient grudge' and 'new mutiny' set up the feud as the cause, so the audience sees the social conflict as the problem.", evidence: "ancient grudge break to new mutiny", marks: 2, markCode: "AO2" },
              { reasoning: "The paradox 'civil blood' and 'civil hands unclean' shows that supposedly civilised people commit violence.", evidence: "civil blood makes civil hands unclean", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The Prologue establishes dramatic irony by revealing the lovers' deaths, so the audience watches with pity and tension, and presents the feud as an 'ancient grudge' that turns civil people violent.",
            levels: lv(6),
            commonErrors: ["Summarising the Prologue.", "Not discussing audience response."],
          },
        },
        {
          id: "et8-u3-dramatic-devices-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: PROLOGUE,
          stem: "Read the Prologue and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two details about the setting from lines 1-4.", marks: 2 },
            { label: "b", prompt: "Explain what the phrase 'ancient grudge' tells us about the feud.", marks: 4 },
            { label: "c", prompt: "How effective is the Prologue as an opening to the play? Consider dramatic irony and the audience's response.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Use exact words." },
              { kind: "technique", name: "Chorus", statement: "A speaker outside the action who frames the story." },
              { kind: "technique", name: "Dramatic irony", statement: "The audience knows the ending." },
            ],
            steps: [
              { part: "a", reasoning: "Set in Verona.", evidence: "In fair Verona", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Two households of equal rank.", evidence: "Two households, both alike in dignity", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Ancient' means very old, so the feud has lasted for generations.", evidence: "ancient grudge", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "'Grudge' means resentment, so the conflict is based on feeling rather than reason, and no one remembers its cause.", evidence: "grudge", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "It is effective because it focuses the audience on how, not whether, tragedy happens.", evidence: "A pair of star-cross'd lovers take their life", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The sonnet-like form and regular rhythm give the Prologue a formal, fated tone.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The feud is introduced, so the audience understands the obstacles before the lovers do.", evidence: "civil blood makes civil hands unclean", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Dramatic irony makes every joy tragic, increasing pathos.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Verona; two households alike in dignity. (b) 'Ancient' shows a feud over generations and 'grudge' shows resentment without clear cause. (c) The Prologue is highly effective: it creates dramatic irony, introduces the feud and a fated tone, so the audience sees every joy as tragic.",
            levels: lv(8, "c"),
            commonErrors: ["Not discussing audience response."],
          },
        },
      ],
    },
  ],
};
