import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

const bands = (focus: string, top: 6 | 12, part?: string): MarkLevel[] => {
  const ranges = top === 6 ? ["5-6", "3-4", "1-2"] : ["10-12", "8-9", "5-7", "3-4", "1-2"];
  const text = top === 6
    ? [`Thorough, well-chosen ${focus}, with precise references and developed analysis of effects.`, `Clear, relevant ${focus}, with appropriate references and some analysis.`, `Simple, limited ${focus}, with few references and mostly description.`]
    : [`Perceptive, discriminating ${focus}; precise, well-chosen references and assured use of terminology.`, `Thorough ${focus}; well-chosen references with developed analysis of effects.`, `Clear, relevant ${focus}; appropriate references with some analysis.`, `Some understanding; ${focus} is partly relevant with some references.`, `Simple, limited ${focus}; few references, mostly description.`];
  return ranges.map((marks, i) => ({ level: `Level ${ranges.length - i}`, marks, descriptor: text[i] ?? "", ...(part ? { part } : {}) }));
};

const ANTONY: TextExtract = {
  title: "Antony's funeral speech",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 3 Scene 2",
  lineNumbers: true,
  text: "Friends, Romans, countrymen, lend me your ears;\nI come to bury Caesar, not to praise him.\nThe evil that men do lives after them;\nThe good is oft interred with their bones;\nSo let it be with Caesar. The noble Brutus\nHath told you Caesar was ambitious:\nIf it were so, it was a grievous fault,\nAnd grievously hath Caesar answer'd it.",
};

const BRUTUS_SPEECH: TextExtract = {
  title: "Brutus's funeral speech (extract)",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 3 Scene 2",
  text: "Not that I loved Caesar less, but that I loved Rome more. Had you rather Caesar were living and die all slaves, than that Caesar were dead, to live all free men? As Caesar loved me, I weep for him; as he was fortunate, I rejoice at it; as he was valiant, I honour him: but, as he was ambitious, I slew him.",
};

const CASSIUS: TextExtract = {
  title: "Cassius persuades Brutus",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 1 Scene 2",
  lineNumbers: true,
  text: "Men at some time are masters of their fates:\nThe fault, dear Brutus, is not in our stars,\nBut in ourselves, that we are underlings.",
};

const CAESAR_CASSIUS: TextExtract = {
  title: "Caesar on Cassius",
  author: "William Shakespeare",
  source: "Julius Caesar, Act 1 Scene 2",
  lineNumbers: true,
  text: "Let me have men about me that are fat;\nSleek-headed men and such as sleep o' nights:\nYond Cassius has a lean and hungry look;\nHe thinks too much: such men are dangerous.",
};

export const lesson31: Lesson = {
  id: "et9-u3-lesson-3-1",
  code: "3-1",
  title: "Rhetoric, Brutus and Cassius",
  goal: "I CAN analyse how Shakespeare uses rhetoric in the funeral speeches and how he presents Brutus and Cassius.",
  standards: ["KS3 Reading", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Rhetoric", definition: "The art of persuasive speaking or writing." },
    { term: "Ethos, pathos, logos", definition: "Appeals to credibility (ethos), emotion (pathos) and logic (logos)." },
    { term: "Irony", definition: "Saying one thing while meaning another, as Antony does when he repeats 'Brutus is an honourable man'." },
    { term: "Tragic hero", definition: "A noble character whose flaw or mistake leads to their downfall." },
    { term: "Foil", definition: "A character who contrasts with another to highlight their qualities." },
    { term: "Prose and verse", definition: "Prose is ordinary writing; verse is writing in metre. Brutus speaks in prose, Antony in verse." },
    { term: "Triplet", definition: "A list of three, used for rhythm and persuasion, as in 'Friends, Romans, countrymen'." },
  ],
  concepts: [
    {
      id: "et9-u3-funeral-rhetoric",
      title: "Rhetoric in the funeral speeches",
      skill: "Analyse the persuasive techniques in Brutus's and Antony's speeches and their effect on the crowd.",
      lesson: {
        sections: [
          {
            heading: "Two ways to persuade",
            body: "After Caesar's assassination, Brutus speaks first, in **plain prose**, appealing to **logic and honour** ('Not that I loved Caesar less, but that I loved Rome more'). His balanced structure sounds reasonable but cold. Antony then speaks in **verse**, appealing to **emotion**, and uses **irony** to turn the crowd against the conspirators without ever directly attacking them.",
          },
          {
            heading: "Antony's techniques",
            body: "Antony opens with a **triplet** ('Friends, Romans, countrymen') to unite the crowd, and a **request** ('lend me your ears') to win attention. He pretends not to praise Caesar ('I come to bury Caesar, not to praise him') while doing exactly that. **Repetition** of 'ambitious' and 'honourable' gradually shifts from respect to sarcasm. He also controls the crowd by **pausing** and by using **physical evidence** such as Caesar's will and wounds.",
          },
        ],
        keyFormulas: [
          { name: "Triplet", statement: "A list of three, used to give rhythm and weight to an argument." },
          { name: "Verbal irony", statement: "Words that mean the opposite of what they appear to say." },
          { name: "Pathos", statement: "An appeal to the audience's emotions, central to Antony's success." },
        ],
        workedExample: {
          problem: "How does Antony win the crowd's attention in the first two lines of his speech?",
          solution: "Antony begins with a triplet, 'Friends, Romans, countrymen', which flatters and unites the crowd in rising order from personal to national. The imperative 'lend me your ears' is a polite, almost humble request, and the metaphor of ears as something loaned suggests he asks permission, not demand. Then 'I come to bury Caesar, not to praise him' seems to agree with the conspirators, so the crowd relaxes, but the denial itself places Caesar's praise at the centre of the speech. The rhythm of the verse, steady and calm, makes him sound trustworthy.",
        },
      },
      questions: [
        {
          id: "et9-u3-funeral-rhetoric-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ANTONY,
          stem: "What technique is used in 'Friends, Romans, countrymen' (line 1)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A simile" },
              { id: "b", text: "A list of three (triplet)" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "A soliloquy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Triplet", statement: "A list of three gives rhythm and emphasis." }],
            steps: [{ reasoning: "Three addresses build from personal to national, uniting the crowd.", evidence: "Friends, Romans, countrymen", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** A list of three (triplet).",
            commonErrors: ["Choosing (d); a soliloquy is a speech made alone, whereas Antony addresses the crowd."],
          },
        },
        {
          id: "et9-u3-funeral-rhetoric-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ANTONY,
          stem: "Explain how Antony suggests, in lines 5-8, that he does not entirely agree with Brutus.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Irony", statement: "Words appear respectful but undermine their subject." }],
            steps: [
              { reasoning: "He calls Brutus 'noble', which seems respectful but is later repeated ironically.", evidence: "The noble Brutus", marks: 1, markCode: "AO2" },
              { reasoning: "'Hath told you' distances Antony from the claim, suggesting it is only Brutus's word.", evidence: "Hath told you Caesar was ambitious", marks: 1, markCode: "AO2" },
              { reasoning: "'If it were so' introduces doubt about whether the accusation is true.", evidence: "If it were so", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "He praises Brutus on the surface, but 'hath told you' and 'if it were so' cast doubt on Brutus's claim that Caesar was ambitious.",
            commonErrors: ["Saying Antony agrees with Brutus."],
          },
        },
        {
          id: "et9-u3-funeral-rhetoric-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ANTONY,
          stem: "How does Shakespeare use language to make Antony's opening persuasive? Refer to lines 1-8.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetoric", statement: "Triplets, imperatives and irony persuade the audience." },
              { kind: "skill", name: "PETAL", statement: "Point, evidence, technique, analysis, link." },
            ],
            steps: [
              { reasoning: "The triplet unites and flatters the crowd.", evidence: "Friends, Romans, countrymen", marks: 1, markCode: "AO2" },
              { reasoning: "The polite imperative wins attention.", evidence: "lend me your ears", marks: 1, markCode: "AO2" },
              { reasoning: "He seems to agree with the conspirators, which lowers resistance.", evidence: "not to praise him", marks: 1, markCode: "AO2" },
              { reasoning: "The balanced antithesis about good and evil encourages sympathy for Caesar.", evidence: "The good is oft interred with their bones", marks: 1, markCode: "AO2" },
              { reasoning: "'The noble Brutus' and 'ambitious' begin the ironic pattern.", evidence: "The noble Brutus", marks: 1, markCode: "AO2" },
              { reasoning: "The conditional 'if' invites the crowd to question the charge.", evidence: "If it were so", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of persuasion", 6),
            finalAnswer: "Antony persuades with a flattering triplet, a polite imperative, and a pretended agreement with the conspirators ('not to praise him') that lowers the crowd's guard. His antithesis about good being 'interred' with the bones invites sympathy, while 'The noble Brutus' and the conditional 'If it were so' plant doubt.",
            commonErrors: ["Listing devices only.", "Missing the irony."],
          },
        },
        {
          id: "et9-u3-funeral-rhetoric-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: BRUTUS_SPEECH,
          stem: "Read this extract from Brutus's speech (Act 3 Scene 2) and answer the questions. You may refer to Antony's speech.",
          parts: [
            { label: "a", prompt: "Write down two reasons Brutus gives for killing Caesar.", marks: 2 },
            { label: "b", prompt: "Explain how the sentence structure of 'as Caesar loved me, I weep for him...' presents Brutus's argument.", marks: 6 },
            { label: "c", prompt: "Compare how Brutus and Antony use language to persuade the crowd.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism and antithesis", statement: "Balanced clauses give an air of fairness and logic." },
              { kind: "convention", name: "Prose and verse", statement: "Brutus speaks in plain prose; Antony in emotional verse." },
            ],
            steps: [
              { part: "a", reasoning: "He loved Rome more than Caesar.", evidence: "I loved Rome more", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Caesar was ambitious.", evidence: "he was ambitious, I slew him", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Repeated 'as Caesar... I' structure is parallel and balanced.", evidence: "As Caesar loved me, I weep for him", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Each clause pairs a quality with a response, building logically.", evidence: "as he was fortunate, I rejoice at it", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The list builds to a climax in the final clause.", evidence: "as he was valiant, I honour him", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'But' creates a sudden turn, a shock after the praise.", evidence: "but, as he was ambitious, I slew him", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The structure presents Brutus as fair and honourable.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The unadorned, blunt 'slew' reveals his stern sense of duty.", evidence: "I slew him", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Brutus: logic, prose, balanced structure and honour; he asks the crowd rational questions.", evidence: "Had you rather Caesar were living", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Antony: emotion, verse, triplets, irony and repetition of 'honourable'.", evidence: "Friends, Romans, countrymen", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Comparison: Brutus expects the crowd to trust his honour, whereas Antony works on their feelings and loyalty.", marks: 3, markCode: "AO3" },
              { part: "c", reasoning: "Judgement: Antony's emotional appeal is more effective because the crowd is moved by pity and anger.", marks: 3, markCode: "AO1" },
            ],
            levels: [...bands("comparison of persuasive methods", 12, "c"), ...bands("analysis of sentence structure", 6, "b")],
            finalAnswer: "(a) He loved Rome more than Caesar; Caesar was ambitious. (b) Parallel clauses pair Caesar's qualities with Brutus's responses and build to the blunt 'I slew him', making Brutus seem fair and dutiful. (c) Brutus relies on logic, honour and plain prose; Antony uses verse, triplets, irony and pathos, so the crowd turns to him.",
            commonErrors: ["Only describing what each says.", "No comparative connectives."],
          },
        },
      ],
    },
    {
      id: "et9-u3-brutus-cassius",
      title: "Brutus and Cassius",
      skill: "Explain how Shakespeare presents Brutus as honourable and Cassius as scheming.",
      lesson: {
        sections: [
          {
            heading: "Brutus the idealist",
            body: "Brutus is a respected Roman who acts from principle, not personal grudge: 'I know no personal cause to spurn at him, But for the general.' He joins the conspiracy for Rome, which makes him a **tragic hero**, but his idealism also makes him naive. He underestimates Antony, allows him to speak, and trusts his own judgement too much.",
          },
          {
            heading: "Cassius the manipulator",
            body: "Cassius is practical, envious and persuasive. He flatters Brutus and plants doubts: 'The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.' Caesar fears him: 'Yond Cassius has a lean and hungry look; He thinks too much: such men are dangerous.' Cassius acts as a **foil** to Brutus: he is motivated by envy and ambition, Brutus by honour.",
          },
        ],
        keyFormulas: [
          { name: "Tragic hero", statement: "A noble figure undone by a flaw; Brutus's flaw is misplaced trust and idealism." },
          { name: "Foil", statement: "A contrasting character who reveals qualities in another." },
          { name: "Manipulation", statement: "Cassius uses flattery and rhetorical argument to sway Brutus." },
        ],
        workedExample: {
          problem: "How does Cassius persuade Brutus in this extract?",
          solution: "Cassius persuades by appealing to Brutus's pride and sense of freedom. He begins with a general truth, 'Men at some time are masters of their fates', which sounds confident and flattering. The endearment 'dear Brutus' creates false intimacy, while the contrast between 'stars' and 'ourselves' rejects the Elizabethan belief in fate and shifts responsibility to Brutus. The word 'underlings' is insulting, suggesting that to accept Caesar's rule is to be a servant, a shaming image designed to provoke action.",
        },
      },
      questions: [
        {
          id: "et9-u3-brutus-cassius-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CAESAR_CASSIUS,
          stem: "What does Caesar mean by 'a lean and hungry look' (line 3)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cassius is poor and starving" },
              { id: "b", text: "Cassius looks ambitious and dissatisfied" },
              { id: "c", text: "Cassius is friendly and generous" },
              { id: "d", text: "Cassius is ill and weak" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphorical hunger", statement: "Hunger suggests an appetite for power." }],
            steps: [{ reasoning: "Caesar uses hunger as a metaphor for dangerous ambition.", evidence: "a lean and hungry look", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Cassius looks ambitious and dissatisfied.",
            commonErrors: ["Taking 'hungry' literally as poor or starving."],
          },
        },
        {
          id: "et9-u3-brutus-cassius-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CAESAR_CASSIUS,
          stem: "Explain what Caesar's words in lines 1-2 suggest about the kind of men he trusts.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contrast", statement: "Caesar contrasts easy-going men with thinkers." }],
            steps: [
              { reasoning: "He prefers 'fat' men, who are content and unlikely to scheme.", evidence: "men about me that are fat", marks: 1, markCode: "AO2" },
              { reasoning: "'Sleep o' nights' suggests clear consciences and no plotting.", evidence: "such as sleep o' nights", marks: 1, markCode: "AO2" },
              { reasoning: "This reveals Caesar's fear of thoughtful, ambitious people like Cassius.", evidence: "He thinks too much", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Caesar trusts comfortable, untroubled men who sleep well and do not scheme, and distrusts thinkers such as Cassius.",
            commonErrors: ["Saying Caesar dislikes fat men."],
          },
        },
        {
          id: "et9-u3-brutus-cassius-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CASSIUS,
          stem: "How does Shakespeare present Cassius as a persuasive and manipulative character in this extract?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Persuasion", statement: "Flattery, contrast and insult." },
              { kind: "context", name: "Fate and free will", statement: "Elizabethans often believed the stars shaped fate; Cassius rejects this." },
            ],
            steps: [
              { reasoning: "A confident general statement sounds like wisdom.", evidence: "Men at some time are masters of their fates", marks: 1, markCode: "AO2" },
              { reasoning: "'Dear Brutus' is flattering and intimate.", evidence: "dear Brutus", marks: 1, markCode: "AO2" },
              { reasoning: "Rejecting 'stars' denies fate and places responsibility on Brutus.", evidence: "not in our stars", marks: 1, markCode: "AO4" },
              { reasoning: "The contrast 'But in ourselves' turns blame inward.", evidence: "But in ourselves", marks: 1, markCode: "AO2" },
              { reasoning: "'Underlings' is a shaming insult that provokes action.", evidence: "that we are underlings", marks: 1, markCode: "AO2" },
              { reasoning: "The rhythm and structure build to the insult as a climax.", marks: 1, markCode: "AO2" },
            ],
            levels: bands("analysis of Cassius's persuasion", 6),
            finalAnswer: "Cassius flatters Brutus as 'dear' while rejecting fate ('not in our stars') and placing responsibility on 'ourselves'. The climax 'underlings' shames Brutus into action, showing Cassius as a skilled manipulator.",
            commonErrors: ["Treating Cassius as a straightforward friend."],
          },
        },
        {
          id: "et9-u3-brutus-cassius-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: CASSIUS,
          stem: "Read the extract from Act 1 Scene 2 and answer the questions.",
          parts: [
            { label: "a", prompt: "Write down two things Cassius says about fate.", marks: 2 },
            { label: "b", prompt: "Explain what the word 'underlings' suggests about Cassius's view of Caesar.", marks: 6 },
            { label: "c", prompt: "'Brutus is a noble hero but Cassius is a villain.' How far do you agree? Refer to the extract and to the play as a whole.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Tragic hero", statement: "A noble man with a fatal flaw." },
              { kind: "skill", name: "Evaluation", statement: "Weigh both sides and reach a judgement." },
            ],
            steps: [
              { part: "a", reasoning: "People are masters of their fates.", evidence: "masters of their fates", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The fault is not in the stars but in ourselves.", evidence: "not in our stars", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It suggests Caesar's power reduces others to servants.", evidence: "underlings", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It is insulting, to provoke Brutus's pride.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Cassius implies Caesar is no better than others, so he does not deserve to rule.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The inclusive 'we' draws Brutus into a shared injury.", evidence: "we are underlings", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The word falls at the end of the line, giving it emphasis.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It shows Cassius's envy and resentment.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Agreement: Cassius manipulates and acts from envy; Brutus acts for Rome.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Disagreement: Brutus is also flawed, naive in letting Antony speak and in killing a friend.", marks: 3, markCode: "AO1" },
              { part: "c", reasoning: "Evidence from the extract and the play, such as 'for the general' and the serpent's egg.", evidence: "I know no personal cause to spurn at him", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "A balanced, reasoned conclusion: neither is simply hero or villain.", marks: 3, markCode: "AO1" },
            ],
            levels: [...bands("evaluation of the characters", 12, "c"), ...bands("analysis of 'underlings'", 6, "b")],
            finalAnswer: "(a) People can be masters of their fates; fault lies in ourselves, not the stars. (b) 'Underlings' insults Brutus's pride and implies Caesar makes servants of all Romans. (c) Largely true that Cassius manipulates, but Brutus is not wholly heroic: his idealism makes him naive, so the characters are more complex than hero and villain.",
            commonErrors: ["One-sided answer.", "Retelling the plot."],
          },
        },
      ],
    },
  ],
};
