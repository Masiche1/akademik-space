import type { Lesson, MarkLevel } from "../../../types.ts";

function lv(top: 6 | 8, part?: string): MarkLevel[] {
  const six = top === 6;
  const ranges = six ? ["5-6", "3-4", "1-2"] : ["7-8", "5-6", "3-4", "1-2"];
  const text = six
    ? ["Thorough, well-chosen references; developed comment.", "Some understanding; some relevant references.", "Simple, limited comment; few references."]
    : ["Perceptive, assured; well-chosen, integrated references.", "Clear, relevant explanation; relevant references.", "Some understanding; some relevant references.", "Simple, limited comment; few references."];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", part }));
}

const TYBALT = {
  title: "Romeo and Juliet, Act 1 Scene 1 (Tybalt)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "What, drawn, and talk of peace! I hate the word,\nAs I hate hell, all Montagues, and thee:\nHave at thee, coward!",
};

const FRIAR = {
  title: "Romeo and Juliet, Act 2 Scene 6 (Friar Lawrence)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "These violent delights have violent ends\nAnd in their triumph die, like fire and powder,\nWhich, as they kiss, consume.",
};

const STARS = {
  title: "Romeo and Juliet, Act 5 Scene 1 (Romeo)",
  author: "William Shakespeare",
  source: "Romeo and Juliet (c.1595)",
  lineNumbers: true,
  text: "Is it even so? then I defy you, stars!",
};

export const lesson32: Lesson = {
  id: "et8-u3-lesson-3-2",
  code: "3-2",
  title: "Characters and Themes in Romeo and Juliet",
  goal: "I CAN explain how Shakespeare presents key characters and develops the themes of love, conflict and fate.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Tragic hero", definition: "A main character whose flaw or fate leads to their downfall, arousing pity and fear." },
    { term: "Foil", definition: "A character who contrasts with another to highlight their qualities, such as Mercutio or Benvolio for Romeo." },
    { term: "Hubris", definition: "Excessive pride or self-confidence that leads to downfall." },
    { term: "Fate", definition: "The idea that events are controlled by a power beyond human choice." },
    { term: "Impulsiveness", definition: "Acting on sudden feeling without thinking of consequences." },
    { term: "Feud", definition: "A long-running quarrel between families or groups." },
    { term: "Foreshadowing", definition: "Hints of what will happen later in the story." },
  ],
  concepts: [
    {
      id: "et8-u3-characters",
      title: "Characters",
      skill: "Analyse the presentation of Romeo, Juliet, Tybalt and Friar Lawrence using precise evidence.",
      lesson: {
        sections: [
          {
            heading: "The lovers",
            body: "**Romeo** begins lovesick for Rosaline, then falls instantly for Juliet; he is passionate and impulsive. **Juliet** grows from an obedient 13-year-old into a determined woman who defies her father and risks her life. Both act quickly, which makes their love intense and their deaths tragic.",
          },
          {
            heading: "Others who shape events",
            body: "**Tybalt** embodies hatred and the feud ('I hate the word' peace). **Friar Lawrence** means well but his secret plans worsen events. **Mercutio** is witty and loyal. **Benvolio** tries to keep the peace. Shakespeare uses foils: Benvolio's calm contrasts with Tybalt's aggression, which highlights how the feud destroys reason.",
          },
        ],
        keyFormulas: [
          { name: "Romeo", statement: "Passionate, impulsive, romantic idealist." },
          { name: "Juliet", statement: "Grows from obedient to defiant and brave." },
          { name: "Tybalt", statement: "Aggressive, proud, embodies the feud." },
          { name: "Friar Lawrence", statement: "Well-meaning but his plans lead to disaster." },
        ],
        workedExample: {
          problem: "How is Tybalt presented in the extract?",
          solution: "Shakespeare presents Tybalt as hostile and violent. His exclamation 'What, drawn, and talk of peace!' shows outrage that anyone wants peace, and the simile 'As I hate hell' compares his hatred of peace and Montagues to hatred of damnation, implying extreme feeling. The imperative 'Have at thee, coward!' escalates to insult and challenge, showing his readiness to fight.",
        },
      },
      questions: [
        {
          id: "et8-u3-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TYBALT,
          stem: "What does Tybalt say he hates 'as I hate hell'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verona" },
              { id: "b", text: "The Prince" },
              { id: "c", text: "The word 'peace' and all Montagues" },
              { id: "d", text: "His own family" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Retrieval", statement: "Use the exact words of the text." }],
            steps: [{ reasoning: "He says he hates the word 'peace', 'all Montagues' and Benvolio.", evidence: "I hate the word, As I hate hell, all Montagues", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** The word 'peace' and all Montagues.",
            commonErrors: ["Confusing Tybalt with his own family."],
          },
        },
        {
          id: "et8-u3-characters-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TYBALT,
          stem: "Explain what Tybalt's insult 'coward' suggests about his attitude to peace.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Insult and exclamation", statement: "Short, aggressive language shows anger." }],
            steps: [
              { reasoning: "He sees a refusal to fight as shameful.", evidence: "coward", marks: 1, markCode: "AO1" },
              { reasoning: "The exclamation mark and aggressive tone show he is quick to anger.", evidence: "Have at thee, coward!", marks: 1, markCode: "AO2" },
              { reasoning: "He values honour and violence over peace, which drives the feud.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Tybalt sees avoiding a fight as cowardice, so he values violent honour over peace, and the exclamation shows his quick anger.",
            commonErrors: ["Saying he is 'bad' without quotation."],
          },
        },
        {
          id: "et8-u3-characters-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TYBALT,
          stem: "How does Shakespeare present Tybalt and his attitude to the feud in this extract? Refer closely to the language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simile", statement: "Hatred compared to hatred of hell." },
              { kind: "technique", name: "Exclamation and imperative", statement: "Aggressive tone." },
            ],
            steps: [
              { reasoning: "'What, drawn, and talk of peace!' shows outrage and disbelief that anyone would draw a sword and talk of peace.", evidence: "What, drawn, and talk of peace!", marks: 2, markCode: "AO2" },
              { reasoning: "'I hate the word' is blunt and absolute: peace is abhorrent to him.", evidence: "I hate the word", marks: 2, markCode: "AO2" },
              { reasoning: "The simile 'as I hate hell' links his hatred to religious damnation, suggesting an extreme, almost evil level of feeling.", evidence: "As I hate hell", marks: 2, markCode: "AO2" },
              { reasoning: "He lists 'all Montagues, and thee', so his hatred is general, personal, and ancestral, showing the feud's power.", evidence: "all Montagues, and thee", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "Tybalt is presented as a man consumed by hate. His outrage, the blunt 'I hate the word', the hell simile and his general hatred of Montagues show that the feud has made him violent and unreasonable.",
            levels: lv(8),
            commonErrors: ["Retelling the fight."],
          },
        },
        {
          id: "et8-u3-characters-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: FRIAR,
          stem: "Read Friar Lawrence's words and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things the Friar compares the lovers' passion to.", marks: 2 },
            { label: "b", prompt: "Explain what 'violent delights have violent ends' suggests.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare present the Friar as a character whose advice cannot stop the tragedy? Refer to the extract and to the play as a whole.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Use exact words." },
              { kind: "technique", name: "Simile and foreshadowing", statement: "Fire and powder are explosive; the line foretells disaster." },
              { kind: "technique", name: "Antithesis", statement: "Delights set against ends." },
            ],
            steps: [
              { part: "a", reasoning: "Fire.", evidence: "like fire and powder", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Powder (gunpowder), or a kiss that consumes.", evidence: "as they kiss, consume", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Intense passion leads to destructive endings; the repeated 'violent' links joy and harm.", evidence: "violent delights have violent ends", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It foreshadows the tragedy, warning that such rapid love cannot last.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The Friar understands the danger, warning the lovers, shown by the explosive simile.", evidence: "like fire and powder", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Yet he agrees to marry them in secret, hoping to end the feud, so he is both wise and flawed.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "His plan with the sleeping potion and the undelivered letter goes wrong because of timing, which shows the role of fate.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "He is a voice of moderation but can't control passion or chance, which strengthens the tragedy.", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Fire and powder (gunpowder). (b) The repeated 'violent' links intense joy with destruction, foreshadowing the tragedy. (c) The Friar warns of danger and hopes to end the feud, but his secret plans and bad timing deepen the tragedy.",
            levels: lv(8, "c"),
            commonErrors: ["Only describing the Friar's actions."],
          },
        },
      ],
    },
    {
      id: "et8-u3-themes",
      title: "Themes: love, conflict and fate",
      skill: "Trace the themes of love, conflict and fate through the play with specific evidence.",
      lesson: {
        sections: [
          {
            heading: "Love and conflict",
            body: "**Love** in the play is passionate, sudden and defiant, but the **conflict** of the feud destroys it. Shakespeare sets them in opposition throughout, in language such as 'my only love sprung from my only hate'. The deaths finally end the feud, suggesting that the feud's cost was too high.",
          },
          {
            heading: "Fate",
            body: "References to the stars ('star-cross'd', 'I defy you, stars!') suggest that the lovers are doomed. Yet characters also make choices: Romeo kills Tybalt, Friar Lawrence plans in secret. Consider whether the tragedy is caused by **fate**, **free will**, or both. A strong answer weighs these ideas with evidence.",
          },
        ],
        keyFormulas: [
          { name: "Love", statement: "Passionate, sudden, defiant." },
          { name: "Conflict", statement: "The feud corrupts and destroys." },
          { name: "Fate", statement: "Star imagery suggests destiny." },
          { name: "Free will", statement: "Characters' impulsive choices drive events." },
        ],
        workedExample: {
          problem: "How does Shakespeare present fate in Romeo's line 'Then I defy you, stars!'?",
          solution: "Shakespeare presents Romeo as defiant towards fate. The imperative 'defy' shows he refuses to accept destiny, yet the apostrophe to the 'stars' reveals he believes they control his life. The dramatic irony is that his defiance leads directly to his suicide, so the moment suggests that his attempt to escape fate helps fulfil it.",
        },
      },
      questions: [
        {
          id: "et8-u3-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STARS,
          stem: "What does Romeo mean by 'I defy you, stars!'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He wants to become an astronomer" },
              { id: "b", text: "He refuses to accept what fate has done" },
              { id: "c", text: "He is praying for luck" },
              { id: "d", text: "He is looking at the night sky" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Apostrophe", statement: "Addressing the stars directly shows belief in fate." }],
            steps: [{ reasoning: "'Defy' means challenge or refuse to accept, so he rejects his fate.", evidence: "I defy you, stars", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** He refuses to accept what fate has done.",
            commonErrors: ["Taking 'stars' literally."],
          },
        },
        {
          id: "et8-u3-themes-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FRIAR,
          stem: "What does the simile 'like fire and powder' suggest about love in the play?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "Fire and gunpowder explode when they meet." }],
            steps: [
              { reasoning: "Fire and powder are explosive, so love is intense and dangerous.", evidence: "like fire and powder", marks: 1, markCode: "AO2" },
              { reasoning: "'Consume' suggests it destroys itself and those involved.", evidence: "consume", marks: 1, markCode: "AO2" },
              { reasoning: "The image foreshadows the tragic end of the lovers.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The simile suggests that love is explosive and destructive, with 'consume' foreshadowing the lovers' deaths.",
            commonErrors: ["Treating it as a positive image only."],
          },
        },
        {
          id: "et8-u3-themes-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "'The tragedy in Romeo and Juliet is caused by the feud, not by fate.' How far do you agree? Give reasons and refer to the play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluation", statement: "Weigh both sides and reach a judgement." },
              { kind: "context", name: "Fate", statement: "Elizabethans believed in destiny." },
            ],
            steps: [
              { reasoning: "The feud causes secrecy, the death of Mercutio and Tybalt, and Romeo's banishment.", marks: 2, markCode: "AO1" },
              { reasoning: "Fate: the Prologue's 'star-cross'd lovers', the delayed letter and the timing at the tomb.", evidence: "star-cross'd lovers", marks: 2, markCode: "AO2" },
              { reasoning: "A balanced judgement, for example that the feud creates the conditions while fate adds chance.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "The feud forces the lovers into secrecy and violence, but the delayed letter and the Prologue's 'star-cross'd lovers' suggest fate also plays a part. I largely agree: the feud is the root cause, with fate making it fatal.",
            levels: lv(6),
            commonErrors: ["No clear opinion.", "No reference to the play."],
          },
        },
        {
          id: "et8-u3-themes-q4",
          difficulty: "challenge",
          totalMarks: 14,
          extract: STARS,
          stem: "Read Romeo's line and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two events in the play which suggest the lovers are unlucky.", marks: 2 },
            { label: "b", prompt: "Explain why Romeo says 'I defy you, stars!' at this moment in the play.", marks: 4 },
            { label: "c", prompt: "How does Shakespeare present the idea of fate in the play? Refer to the extract and to other moments.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Accurate recall of events." },
              { kind: "technique", name: "Apostrophe", statement: "Speaking to something that cannot answer." },
              { kind: "technique", name: "Dramatic irony", statement: "The audience knows Juliet is not dead." },
            ],
            steps: [
              { part: "a", reasoning: "The letter to Romeo is not delivered because of the plague quarantine.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Romeo meets the Capulet servant and so attends the party, or Romeo arrives before Juliet wakes.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He has just heard that Juliet is dead, so he angrily rejects the fate that has taken her.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "He decides to die beside her, taking control, although the audience knows she is alive, which is ironic.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The Prologue calls them 'star-cross'd', setting fate up from the start.", evidence: "star-cross'd", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Romeo's earlier premonition, before the party, that 'some consequence yet hanging in the stars' foreshadows doom.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Here he defies the stars, which shows human will against fate, but the effect is tragedy.", evidence: "I defy you, stars", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Shakespeare keeps both fate and choice in play, which makes the deaths both inevitable and avoidable.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "(a) The undelivered letter; the timing of Romeo's arrival at the tomb. (b) He has heard that Juliet is dead and rejects fate, though she is alive. (c) Shakespeare presents fate through the Prologue, premonitions and chance, while Romeo's defiance shows how choice and destiny combine in tragedy.",
            levels: lv(8, "c"),
            commonErrors: ["Only saying it was fate with no examples."],
          },
        },
      ],
    },
  ],
};
