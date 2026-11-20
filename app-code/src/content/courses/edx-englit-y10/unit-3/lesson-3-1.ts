import type { Lesson } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";
import { DAGGER, MURDER_SOLILOQUY, SLEEPWALKING, UNSEX_ME } from "./extracts.ts";

export const lesson31: Lesson = {
  id: "et10-u3-lesson-3-1",
  code: "3-1",
  title: "Macbeth and Lady Macbeth",
  goal: "I CAN analyse how Shakespeare presents Macbeth's ambition and downfall and the character of Lady Macbeth.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Tragic hero", definition: "A noble character whose flaw leads to his own downfall and who earns some sympathy." },
    { term: "Hamartia", definition: "The tragic flaw that brings about a hero's downfall; in Macbeth, vaulting ambition." },
    { term: "Soliloquy", definition: "A speech in which a character speaks their thoughts aloud, alone on stage." },
    { term: "Iambic pentameter", definition: "A line of ten syllables in five unstressed-stressed pairs, the usual rhythm of Shakespeare's verse." },
    { term: "Hallucination", definition: "Seeing something that is not there, often a sign of a disturbed mind." },
    { term: "Imperative", definition: "A command form of a verb, used by Lady Macbeth to control and persuade." },
    { term: "Foil", definition: "A character who contrasts with another to highlight qualities." },
  ],
  concepts: [
    {
      id: "et10-u3-macbeth-ambition",
      title: "Macbeth's ambition and downfall",
      skill: "Analyse how Shakespeare presents Macbeth's struggle between ambition and conscience and his decline into tyranny.",
      lesson: {
        sections: [
          {
            heading: "A noble man with a fatal flaw",
            body: "At the start of the play Macbeth is a brave and loyal soldier, praised as “valiant” by the King. The Witches' prophecy awakens ambition he cannot control. Shakespeare makes him a tragic hero: we see his goodness, his doubts and his conscience before we watch him destroy them.",
          },
          {
            heading: "Reading the soliloquies",
            body: "In Act 1 Scene 7 Macbeth weighs the murder rationally. He fears the consequences, saying he has no motive except “vaulting ambition”. In Act 2 he hallucinates a dagger, which shows his imagination turning against him. Look for how rhythm, imagery and questions reveal a mind in conflict.",
          },
          {
            heading: "From hero to tyrant",
            body: "After Duncan's death Macbeth becomes more ruthless, ordering the murders of Banquo and Macduff's family without consulting his wife. By Act 5 he is exhausted and numb, and sees life as meaningless. His downfall is both a punishment and a tragedy.",
          },
        ],
        keyFormulas: [
          { name: "Tragic hero", statement: "A good man brought down by a flaw, whose fall provokes pity and fear." },
          { name: "Soliloquy", statement: "A speech giving direct access to a character's private thoughts." },
          { name: "Hallucination", statement: "A vision that shows the mind's guilt and instability." },
        ],
        workedExample: {
          problem: "How does Shakespeare present Macbeth's conflict about the murder in his Act 1 Scene 7 soliloquy?",
          solution: "Macbeth begins with a halting, repeated phrase, “done”, which suggests he wants the deed finished but fears its consequences. He imagines that the assassination might “catch” success and be the “be-all and the end-all”, but he knows that actions have results and that “bloody instructions” will “return / To plague the inventor”. The personification of violence as something that returns to punish suggests a moral order he cannot escape. The hesitant rhythm and conditional language show a man talking himself towards a crime that his conscience resists.",
        },
      },
      questions: [
        {
          id: "et10-u3-macbeth-ambition-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MURDER_SOLILOQUY,
          stem: "What is Macbeth's main concern in this speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That killing the King may bring punishment and consequences" },
              { id: "b", text: "That Duncan will arrive too early" },
              { id: "c", text: "That the Witches have lied" },
              { id: "d", text: "That Lady Macbeth will refuse to help" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Establish the situation", statement: "Say what the speaker is thinking before analysing how it is expressed." }],
            steps: [{ reasoning: "He fears that murder will bring consequences that “return / To plague the inventor”.", evidence: "bloody instructions", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** He is anxious about the consequences of the murder.",
            commonErrors: ["Confusing this soliloquy with later scenes (c, d).", "Missing the focus on consequences."],
          },
        },
        {
          id: "et10-u3-macbeth-ambition-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: DAGGER,
          stem: "Explain how Shakespeare shows Macbeth's disturbed state of mind in lines 1-7.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rhetorical question", statement: "Questions can reveal confusion and doubt." }],
            steps: [
              { reasoning: "The opening question shows Macbeth cannot trust his senses.", evidence: "Is this a dagger which I see before me", marks: 1, markCode: "AO2" },
              { reasoning: "The contradiction of seeing what he cannot touch shows his mind dividing against itself.", evidence: "I have thee not, and yet I see thee still", marks: 1, markCode: "AO2" },
              { reasoning: "He admits that the vision may be a product of his feverish brain, which suggests guilt and pressure.", evidence: "heat-oppressed brain", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Questions and paradox show a mind that cannot trust itself, and he suspects the dagger comes from his “heat-oppressed brain”, hinting at guilt.",
            commonErrors: ["Treating the dagger as real.", "No quotation."],
          },
        },
        {
          id: "et10-u3-macbeth-ambition-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MURDER_SOLILOQUY,
          stem: "How does Shakespeare use language to present Macbeth's doubts about the murder in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Repetition and conditional language", statement: "Hesitant repetition and 'if' clauses show a mind weighing risks." },
              { kind: "convention", name: "Soliloquy", statement: "Gives the audience direct access to the character's private conflict." },
            ],
            steps: [
              { reasoning: "The repetition of “done” and the conditional opening suggest uncertainty and a wish to avoid consequences.", evidence: "If it were done when 'tis done", marks: 2, markCode: "AO2" },
              { reasoning: "The images of the “be-all and the end-all” and a “bank and shoal of time” suggest he would risk the afterlife if only the deed ended there.", evidence: "bank and shoal of time", marks: 2, markCode: "AO2" },
              { reasoning: "The personification of “bloody instructions” that “return” shows he recognises that violence breeds violence.", evidence: "Bloody instructions", marks: 2, markCode: "AO2" },
              { reasoning: "The soliloquy form lets the audience see his conscience, which makes him a sympathetic tragic hero.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Hesitant repetition, conditionals and the image of violence that “return[s] / To plague the inventor” present Macbeth as a man whose conscience warns him even as his ambition draws him on.",
            commonErrors: ["Paraphrasing instead of analysing.", "Ignoring the soliloquy form."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u3-macbeth-ambition-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: MURDER_SOLILOQUY,
          stem: "Read the extract from Act 1 Scene 7 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two words or phrases showing Macbeth fears the consequences of murder.", marks: 2 },
            { label: "b", prompt: "Explain what the extract reveals about Macbeth's character.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language and structure in the extract to present Macbeth's conflict?", marks: 6 },
            { label: "d", prompt: "'Macbeth is responsible for his own downfall.' How far do you agree? Write about the extract and the whole play, and refer to the Jacobean context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragedy", statement: "A tragic hero's flaw and choices bring his downfall." },
              { kind: "context", name: "Jacobean belief", statement: "Regicide was seen as a sin against God and the natural order." },
              { kind: "skill", name: "Extract to whole play", statement: "Start with the extract, then trace the idea through the play." },
            ],
            steps: [
              { part: "a", reasoning: "“Bloody instructions” that “return”.", evidence: "Bloody instructions", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "“Plague the inventor” suggests punishment.", evidence: "plague the inventor", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Macbeth has a conscience and weighs the moral consequences.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "He is rational but vulnerable to ambition, which makes him complex.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Hesitant repetition and conditionals show an unsettled mind.", evidence: "If it were done when 'tis done", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The move from desire to fear in the speech's structure shows his conflict.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: Macbeth chooses to kill despite his doubts and then commits further murders without his wife's prompting.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of language: the contrast between his early conscience and his later numbness (“Tomorrow, and tomorrow”).", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: the Witches' prophecy and Lady Macbeth's pressure also push him, suggesting external forces.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: a Jacobean audience would see regicide as a sin against divine order, and would judge Macbeth responsible.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) “Bloody instructions”; “plague the inventor”. (b) He has a conscience but is vulnerable to ambition. (c) Hesitant repetition and a move from desire to fear. (d) A top answer judges Macbeth chiefly responsible, qualified by the Witches' and Lady Macbeth's influence, and uses Jacobean attitudes to regicide.",
            commonErrors: ["Retelling the plot.", "Ignoring the extract.", "One-sided argument."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
    {
      id: "et10-u3-lady-macbeth",
      title: "Lady Macbeth",
      skill: "Analyse how Shakespeare presents Lady Macbeth's ambition, influence and collapse.",
      lesson: {
        sections: [
          {
            heading: "Ambition and manipulation",
            body: "Lady Macbeth first appears reading her husband's letter. She fears his nature is “too full o' the milk of human kindness” and resolves to push him. In her speech she calls on spirits to “unsex” her, rejecting the qualities Jacobean audiences expected in women, such as gentleness and nurture. Her imperatives show her determination.",
          },
          {
            heading: "Persuasion and control",
            body: "She challenges Macbeth's manhood to make him act, using taunts and emotional pressure. Notice how she shapes the plan and how her control weakens once Macbeth takes independent action after Duncan's murder.",
          },
          {
            heading: "Guilt and collapse",
            body: "In Act 5 Lady Macbeth sleepwalks, trying to wash away imaginary blood. The broken, repetitive language shows a mind destroyed by guilt. Her earlier claim that “a little water clears us of this deed” is cruelly reversed.",
          },
        ],
        keyFormulas: [
          { name: "Imperatives", statement: "Commands such as 'Come' and 'make thick my blood' show Lady Macbeth's will and desire for control." },
          { name: "Gender and power", statement: "Lady Macbeth challenges Jacobean expectations of women, but her rejection of her nature leads to her breakdown." },
          { name: "Reversal", statement: "Her later guilt contrasts sharply with her earlier confidence." },
        ],
        workedExample: {
          problem: "How does Shakespeare present Lady Macbeth in her Act 1 Scene 5 speech?",
          solution: "Shakespeare presents Lady Macbeth as ruthless and determined. The imperative “unsex me here” shows that she is prepared to abandon her femininity in order to carry out the murder, and “top-full / Of direst cruelty” suggests she wants to be completely filled with cruelty. By asking to “make thick” her blood and to “stop up” remorse, she tries to physically block the human feelings that might hinder her. A Jacobean audience, who believed that women should be gentle and obedient, would find this unnatural and disturbing, so Shakespeare presents her ambition as dangerous.",
        },
      },
      questions: [
        {
          id: "et10-u3-lady-macbeth-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: UNSEX_ME,
          stem: "What does Lady Macbeth mean by “unsex me here”?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She wants to be rid of her feminine qualities such as pity so she can commit murder" },
              { id: "b", text: "She wants to become a man in public life" },
              { id: "c", text: "She wants her husband to be killed" },
              { id: "d", text: "She is ill and wants to rest" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Jacobean gender roles", statement: "Women were expected to be gentle and nurturing, so rejecting this was shocking." }],
            steps: [{ reasoning: "She wants to remove compassion and weakness so nothing stops her.", evidence: "unsex me here", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** She asks to lose her gentle, feminine qualities in order to be cruel.",
            commonErrors: ["Taking it literally as changing gender (b)."],
          },
        },
        {
          id: "et10-u3-lady-macbeth-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: UNSEX_ME,
          stem: "Explain the effect of the imperative verbs in lines 3-8, such as “Come” and “make”.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imperatives", statement: "Commands show control and determination." }],
            steps: [
              { reasoning: "The imperatives show her taking command, even of supernatural forces.", evidence: "Come, you spirits", marks: 1, markCode: "AO2" },
              { reasoning: "She commands her body to become cruel, which shows her determination to suppress conscience.", evidence: "make thick my blood", marks: 1, markCode: "AO2" },
              { reasoning: "The authority of the commands contrasts with the later passivity of her sleepwalking.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The imperatives present her as forceful and in control, summoning spirits and commanding her own body to suppress remorse.",
            commonErrors: ["Naming imperatives with no effect."],
          },
        },
        {
          id: "et10-u3-lady-macbeth-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SLEEPWALKING,
          stem: "How does Shakespeare present Lady Macbeth's guilt in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery of blood", statement: "Blood recurs as a symbol of guilt that cannot be removed." },
              { kind: "convention", name: "Prose in the sleepwalking scene", statement: "Prose suggests loss of control compared with her earlier verse." },
            ],
            steps: [
              { reasoning: "The commands “Out, damned spot! out, I say!” show a woman who once commanded others now trying and failing to command her own conscience.", evidence: "Out, damned spot! out, I say!", marks: 2, markCode: "AO2" },
              { reasoning: "The recollection of the “old man” and his blood shows the memory of the murder haunting her.", evidence: "so much blood in him", marks: 2, markCode: "AO1" },
              { reasoning: "The hyperbole of “all the perfumes of Arabia” and the “little hand” shows that no luxury can cleanse her, and the smallness suggests her powerlessness.", evidence: "all the perfumes of Arabia", marks: 2, markCode: "AO2" },
              { reasoning: "Reversal: her earlier belief that water would clear the deed is now cruelly ironic.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Her broken commands, the haunting memory of blood and the hyperbole of the perfumes of Arabia show guilt that cannot be cleansed, reversing her early confidence.",
            commonErrors: ["Saying she feels guilty without quotation.", "Ignoring the reversal from Act 2."],
            levels: levels(8),
          },
        },
        {
          id: "et10-u3-lady-macbeth-q4",
          difficulty: "challenge",
          totalMarks: 27,
          extract: UNSEX_ME,
          stem: "Read the extract from Act 1 Scene 5 and answer all parts.",
          parts: [
            { label: "a", prompt: "Give two things Lady Macbeth asks the spirits to do to her.", marks: 2 },
            { label: "b", prompt: "Explain what this speech reveals about Lady Macbeth's attitude to murder.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare use language in the extract to present Lady Macbeth as determined?", marks: 6 },
            { label: "d", prompt: "'Lady Macbeth is more to blame than Macbeth for the murder of Duncan.' How far do you agree? Write about the extract and the whole play, and refer to the Jacobean context.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Jacobean gender roles", statement: "Women were expected to be gentle; Lady Macbeth's ambition would seem unnatural." },
              { kind: "technique", name: "Imperatives and imagery", statement: "Commands and physical images show determination." },
              { kind: "skill", name: "Extract to whole play", statement: "Link the extract to later moments." },
            ],
            steps: [
              { part: "a", reasoning: "To “unsex” her.", evidence: "unsex me here", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "To make her blood thick and fill her with cruelty.", evidence: "make thick my blood", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She welcomes murder and wants to remove her conscience.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "She sees remorse as weakness that must be blocked.", evidence: "Stop up the access and passage to remorse", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Imperatives show command over spirits and herself.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Superlative “direst cruelty” and physical imagery show total commitment.", evidence: "direst cruelty", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Agreement: she plans the murder, persuades Macbeth and challenges his manhood.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of language: persuasive imperatives and taunts contrasted with her later guilt in the sleepwalking scene.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Counter-view: Macbeth carries out the murder and later kills without her, so he is responsible for his own choices.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Context: Jacobean audiences might judge a woman who manipulates her husband and rejects her nature as more culpable.", marks: 4, markCode: "AO4" },
            ],
            finalAnswer: "(a) To unsex her; to make her blood thick. (b) She welcomes murder and rejects remorse. (c) Imperatives and extreme imagery show determination. (d) A top answer weighs her influence against Macbeth's free choices, using Jacobean views of gender and kingship.",
            commonErrors: ["Describing her without analysing language.", "No counter-view.", "Bolt-on context."],
            levels: [...levels(6, "c"), ...levels(15, "d")],
          },
        },
      ],
    },
  ],
};
