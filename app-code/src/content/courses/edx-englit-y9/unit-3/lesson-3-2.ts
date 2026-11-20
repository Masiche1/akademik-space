import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const SOOTHSAYER: TextExtract = {
  title: "Beware the ides of March",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 1 Scene 2",
  lineNumbers: true,
  text: "SOOTHSAYER: Beware the ides of March.\nCAESAR: What man is that?\nBRUTUS: A soothsayer bids you beware the ides of March.\nCAESAR: Set him before me; let me see his face.\nCASSIUS: Fellow, come from the throng; look upon Caesar.\nCAESAR: What say'st thou to me now? Speak once again.\nSOOTHSAYER: Beware the ides of March.\nCAESAR: He is a dreamer; let us leave him: pass.",
};

const CALPURNIA: TextExtract = {
  title: "Caesar and the omens",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 2 Scene 2",
  lineNumbers: true,
  text: "CALPURNIA: When beggars die, there are no comets seen;\nThe heavens themselves blaze forth the death of princes.\nCAESAR: Cowards die many times before their deaths;\nThe valiant never taste of death but once.",
};

export const lesson32: Lesson = {
  id: "et9-u3-lesson-3-2",
  code: "3-2",
  title: "Themes and Context",
  goal: "I CAN explain the themes of power, loyalty and fate in Julius Caesar and link them to Roman and Elizabethan context.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Theme", definition: "A central idea explored in a text, such as power or fate." },
    { term: "Omen", definition: "A sign that something, usually bad, is going to happen." },
    { term: "Soothsayer", definition: "A person who claims to foretell the future." },
    { term: "Republic", definition: "A state without a king, governed by elected officials; Rome was a republic when Caesar gained power." },
    { term: "Tyranny", definition: "Cruel or unjust rule by a single, all-powerful leader." },
    { term: "Divine right", definition: "The Elizabethan belief that monarchs were appointed by God and should not be overthrown." },
    { term: "Conspiracy", definition: "A secret plan by a group to do something illegal or harmful." },
  ],
  concepts: [
    {
      id: "et9-u3-power-loyalty-fate",
      title: "Power, loyalty and fate",
      skill: "Analyse how Shakespeare explores power, loyalty and fate through character, dialogue and omens.",
      lesson: {
        sections: [
          {
            heading: "Power and ambition",
            body: "The play asks when power becomes tyranny. Caesar is offered a crown three times, and the conspirators fear he will become a king. But the play also shows how the conspirators' own ambition and envy corrupt their cause. Shakespeare invites us to ask who really deserves power, and what the cost of seizing it is.",
          },
          {
            heading: "Loyalty and fate",
            body: "Loyalty is tested: Brutus must choose between a friend and the state, and Antony stays loyal to Caesar after death. **Fate** runs through the play in omens, the soothsayer's warning and storms. Calpurnia reads omens as signs: 'The heavens themselves blaze forth the death of princes.' Caesar insists on free will: 'Cowards die many times before their deaths.' The play leaves open whether men are 'masters of their fates' or fated to fall.",
          },
        ],
        keyFormulas: [
          { name: "Omen", statement: "A supernatural sign that foreshadows events, creating dramatic tension." },
          { name: "Foreshadowing", statement: "Hints about what will happen later in the play." },
          { name: "Free will and fate", statement: "A key debate: do people choose their actions or is the outcome fixed?" },
        ],
        workedExample: {
          problem: "How does Shakespeare present Caesar's attitude to danger in lines 3-4 of the Calpurnia extract?",
          solution: "Caesar presents himself as fearless and heroic. The antithesis 'Cowards die many times... The valiant never taste of death but once' contrasts the two kinds of men: cowards suffer death repeatedly in their imagination, while the brave die only once. The verb 'taste' makes death something to be faced without flinching. Yet the dramatic irony is clear: the audience knows Caesar will die on this very day, so his bravado seems both admirable and fatally proud, suggesting his hubris is part of what brings about his fate.",
        },
      },
      questions: [
        {
          id: "et9-u3-power-loyalty-fate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SOOTHSAYER,
          stem: "What is the main dramatic purpose of the soothsayer's warning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To foreshadow Caesar's death and show that he ignores warnings" },
              { id: "b", text: "To make the audience laugh" },
              { id: "c", text: "To explain how Rome became a republic" },
              { id: "d", text: "To show Cassius's loyalty to Caesar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Foreshadowing", statement: "Early hints about later events create tension." }],
            steps: [{ reasoning: "The warning hints at Caesar's death, and his dismissal ('He is a dreamer') shows his pride.", evidence: "He is a dreamer; let us leave him", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** To foreshadow Caesar's death and show he ignores warnings.",
            commonErrors: ["Choosing (b) because the soothsayer is dismissed."],
          },
        },
        {
          id: "et9-u3-power-loyalty-fate-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SOOTHSAYER,
          stem: "Explain what Shakespeare shows about Caesar through his response to the soothsayer in lines 4-8.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Imperatives", statement: "Commands show authority." }],
            steps: [
              { reasoning: "Caesar uses commands, showing his authority.", evidence: "Set him before me", marks: 1, markCode: "AO2" },
              { reasoning: "He gives the soothsayer a chance to repeat the warning, showing some curiosity.", evidence: "Speak once again", marks: 1, markCode: "AO1" },
              { reasoning: "He dismisses the warning abruptly, showing arrogance and ignoring fate.", evidence: "He is a dreamer; let us leave him", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Caesar commands, listens briefly, then arrogantly dismisses the warning as a dream, showing pride and blindness to danger.",
            commonErrors: ["Retelling the dialogue only."],
          },
        },
        {
          id: "et9-u3-power-loyalty-fate-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CALPURNIA,
          stem: "How does Shakespeare use language to explore the theme of fate in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Antithesis", statement: "Opposites set against each other, here cowardice and valour." },
              { kind: "context", name: "Omens", statement: "Elizabethans believed that unnatural events signalled the death of great men." },
            ],
            steps: [
              { reasoning: "Calpurnia's comet image links heaven to the death of great men.", evidence: "The heavens themselves blaze forth the death of princes", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast of beggars and princes shows status in life affects the signs of death.", evidence: "When beggars die, there are no comets seen", marks: 1, markCode: "AO2" },
              { reasoning: "Caesar rejects fear with antithesis of cowards and the valiant.", evidence: "Cowards die many times before their deaths", marks: 1, markCode: "AO2" },
              { reasoning: "'Taste' makes death something to face directly.", evidence: "never taste of death but once", marks: 1, markCode: "AO2" },
              { reasoning: "Dramatic irony: the audience knows he will die, so his confidence is tragic.", marks: 1, markCode: "AO2" },
              { reasoning: "Context: an Elizabethan audience believed in omens, so the warning carries weight.", marks: 1, markCode: "AO4" },
            ],
            levels: bands("analysis of fate", 6),
            finalAnswer: "Calpurnia sees the death of princes written in the heavens, while Caesar answers with antithesis, claiming the brave die only once. Dramatic irony makes his boldness tragic, and an Elizabethan audience, believing in omens, would feel the threat of fate.",
            commonErrors: ["No mention of context.", "Saying Caesar is simply brave."],
          },
        },
        {
          id: "et9-u3-power-loyalty-fate-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: CALPURNIA,
          stem: "Read the extract from Act 2 Scene 2 and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things Calpurnia says about omens.", marks: 2 },
            { label: "b", prompt: "Explain how Caesar presents himself in lines 3-4.", marks: 6 },
            { label: "c", prompt: "How does Shakespeare explore power and fate in Julius Caesar? Refer to the extract and to the play as a whole.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dramatic irony", statement: "The audience knows more than the character." },
              { kind: "context", name: "Elizabethan belief in omens", statement: "Comets and storms were seen as signs of great events." },
            ],
            steps: [
              { part: "a", reasoning: "No comets announce beggars' deaths.", evidence: "no comets seen", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The heavens announce the deaths of princes.", evidence: "blaze forth the death of princes", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Caesar uses sweeping, confident generalisation.", evidence: "Cowards die many times", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He sees himself as 'valiant', a brave man.", evidence: "The valiant", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The antithesis presents a simple moral choice.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Taste' makes death familiar, controlling it.", evidence: "never taste of death", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The proverb-like rhythm gives his words weight.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Dramatic irony reveals his arrogance and hubris.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Power: Caesar's pride and the conspirators' fear of tyranny.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Fate: omens, the soothsayer, Calpurnia's dream and storms foreshadow events.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The tension between fate and free will, e.g. Cassius's 'masters of their fates'.", evidence: "masters of their fates", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context: Elizabethan fear of rebellion and belief in omens.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("exploration of power and fate", 12, "c"), ...bands("analysis of Caesar", 6, "b")],
            finalAnswer: "(a) Beggars' deaths have no comets; heavens blaze for princes' deaths. (b) Caesar presents himself as fearless and superior, using antithesis and the verb 'taste' to make death something he controls; dramatic irony shows his pride. (c) The play links power and fate: Caesar's hubris and the conspirators' ambition play out amid omens and the debate over free will, in a context where audiences believed in signs and feared rebellion.",
            commonErrors: ["Plot summary.", "No reference to the extract."],
          },
        },
      ],
    },
    {
      id: "et9-u3-roman-elizabethan-context",
      title: "Roman and Elizabethan context",
      skill: "Link the play to the political world of ancient Rome and Shakespeare's England.",
      lesson: {
        sections: [
          {
            heading: "Rome: a republic in crisis",
            body: "The play is set in 44 BC. Rome was a **republic** ruled by the Senate, but Julius Caesar, a victorious general, was gathering power and had been made dictator. The conspirators feared he would become king, ending Roman liberty. Shakespeare took the story from Plutarch's *Lives* (translated into English by Thomas North).",
          },
          {
            heading: "Elizabethan England: fear of rebellion",
            body: "Shakespeare wrote around 1599. Queen Elizabeth I was elderly and had no heir, so the audience feared political chaos and civil war. Many believed in the **divine right of kings**: overthrowing a ruler was a sin against God. The play shows what happens after an assassination: disorder, civil war and the deaths of Cassius and Brutus. It would also have fascinated audiences because of the **Great Chain of Being**, the belief that disrupting order in the state upsets the natural order, as in the storms on the night before Caesar's death.",
          },
        ],
        keyFormulas: [
          { name: "Republic", statement: "Rome was ruled by the Senate and elected officials, not a king." },
          { name: "Divine right", statement: "The belief that monarchs ruled by God's choice." },
          { name: "Great Chain of Being", statement: "The belief in a God-given order from God to angels, kings, people and animals." },
        ],
        workedExample: {
          problem: "How might an Elizabethan audience respond to the assassination of Caesar?",
          solution: "An Elizabethan audience believed in the divine right of kings and feared civil unrest, as Queen Elizabeth was ageing and without a clear heir. They might therefore see the assassination as a terrible crime that disrupts natural order, shown in the play by storms and omens. However, they would also see that Caesar's growing power is dangerous, so Shakespeare creates a complex response: the conspirators' fear of tyranny is understandable, but the violence leads to chaos, and the audience is left questioning whether any cause can justify murder.",
        },
      },
      questions: [
        {
          id: "et9-u3-roman-elizabethan-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which belief did many Elizabethans hold that affects how they would view the assassination of Caesar?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The divine right of kings" },
              { id: "b", text: "That all rulers should be elected every year" },
              { id: "c", text: "That Rome never had a senate" },
              { id: "d", text: "That omens were always false" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Divine right", statement: "Rulers were seen as appointed by God." }],
            steps: [{ reasoning: "If rulers are chosen by God, killing one is a sin and threatens order.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** The divine right of kings.",
            commonErrors: ["Choosing (d); Elizabethans generally believed in omens."],
          },
        },
        {
          id: "et9-u3-roman-elizabethan-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the political situation in Elizabethan England might have made Julius Caesar interesting to its first audiences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "context", name: "Succession anxiety", statement: "Elizabeth I had no heir; the audience feared civil war." }],
            steps: [
              { reasoning: "Elizabeth I was ageing and had no heir, so succession was uncertain.", marks: 1, markCode: "AO4" },
              { reasoning: "The play shows the chaos that follows the death of a ruler.", marks: 1, markCode: "AO1" },
              { reasoning: "The audience feared rebellion, so the play's warnings about civil war were relevant.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "With an ageing queen and no heir, the audience feared civil war, so a play about assassination and chaos spoke to their fears.",
            commonErrors: ["Describing Roman history only."],
          },
        },
        {
          id: "et9-u3-roman-elizabethan-context-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Explain how context helps us understand why Shakespeare includes storms and omens before Caesar's death. Refer to the play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Great Chain of Being", statement: "Disorder in the state was believed to cause disorder in nature." },
              { kind: "technique", name: "Pathetic fallacy", statement: "Nature mirrors political and moral turmoil." },
            ],
            steps: [
              { reasoning: "Elizabethans believed unnatural events signalled political disorder.", marks: 1, markCode: "AO4" },
              { reasoning: "Storms and omens foreshadow Caesar's death and create tension.", marks: 1, markCode: "AO2" },
              { reasoning: "Calpurnia's dream and comet speech show the omens' power.", evidence: "The heavens themselves blaze forth the death of princes", marks: 1, markCode: "AO1" },
              { reasoning: "The Great Chain of Being suggested that killing a ruler would disturb the natural order.", marks: 1, markCode: "AO4" },
              { reasoning: "Pathetic fallacy mirrors the turmoil in Rome.", marks: 1, markCode: "AO2" },
              { reasoning: "This warns the audience that rebellion has consequences.", marks: 1, markCode: "AO1" },
            ],
            levels: bands("explanation of context", 6),
            finalAnswer: "Elizabethans saw nature as linked to political order, so storms and comets before Caesar's death would signal that murder disrupts the natural world. The omens foreshadow disaster, mirror Rome's turmoil and warn the audience about rebellion.",
            commonErrors: ["Context stated but not linked to the play."],
          },
        },
        {
          id: "et9-u3-roman-elizabethan-context-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "Answer these questions about the play and its context.",
          parts: [
            { label: "a", prompt: "State two facts about Rome at the time of the play.", marks: 2 },
            { label: "b", prompt: "Explain why Shakespeare's audience might fear the outcome of the conspiracy.", marks: 6 },
            { label: "c", prompt: "'Julius Caesar is a warning against rebellion.' How far do you agree? Refer to the play and its context.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Roman republic", statement: "Rome in 44 BC was a republic led by the Senate." },
              { kind: "context", name: "Elizabethan politics", statement: "Succession fears and divine right shaped views of rebellion." },
            ],
            steps: [
              { part: "a", reasoning: "Rome was a republic ruled by the Senate.", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Caesar was a powerful general who feared becoming king.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Audiences believed in divine right and saw regicide as a sin.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "They feared civil war after Elizabeth's death.", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The play shows the conspiracy leading to war and death.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Omens and storms suggest the cosmos is disturbed.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Antony's speech shows how quickly a crowd can turn violent.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The deaths of Brutus and Cassius show punishment for rebels.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Agreement: the conspiracy ends in chaos, civil war and death.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Disagreement: Brutus is honourable and Caesar was becoming a tyrant, so Shakespeare is ambiguous.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Specific evidence from the play to support each view.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Context supports the judgement: Elizabethan fears and the Roman republic.", marks: 3, markCode: "AO4" },
            ],
            levels: [...bands("evaluation of the play as a warning", 12, "c"), ...bands("explanation of audience fears", 6, "b")],
            finalAnswer: "(a) Rome was a republic; Caesar was a powerful general. (b) Audiences believed in divine right and feared civil war; the play shows chaos after the murder. (c) Largely a warning, as the conspiracy ends in civil war, but Shakespeare also sympathises with Brutus and shows Caesar's dangerous ambition, so the message is complex.",
            commonErrors: ["No balanced view.", "Context without textual evidence."],
          },
        },
      ],
    },
  ],
};
