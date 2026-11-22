import type { Lesson, TextExtract } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

const PROPOSAL: TextExtract = {
  title: "Darcy's first proposal (Darcy) and Elizabeth's reply (Elizabeth)",
  author: "Jane Austen",
  source: "Pride and Prejudice (1813), Volume 2, Chapter 11",
  text: "In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.\n\n[...]\n\nFrom the very beginning, from the first moment, I may almost say, of my acquaintance with you, your manners, impressing me with the fullest belief of your arrogance, your conceit, and your selfish disdain of the feelings of others, were such as to form the groundwork of disapprobation, on which succeeding events have built so immovable a dislike; and I had not known you a month before I felt that you were the last man in the world whom I could ever be prevailed on to marry.",
};

const BALL: TextExtract = {
  title: "Mr Darcy at the Meryton assembly",
  author: "Jane Austen",
  source: "Pride and Prejudice (1813), Volume 1, Chapter 3",
  text: "Mr. Darcy soon drew the attention of the room by his fine, tall person, handsome features, noble mien, and the report which was in general circulation within five minutes after his entrance, of his having ten thousand a year.\n\n[...]\n\nMr. Darcy was the proudest, most disagreeable man in the world, and everybody hoped that he would never come there again.",
};

export const lesson21: Lesson = {
  id: "et11-u2-lesson-2-1",
  code: "2-1",
  title: "Elizabeth Bennet and Mr Darcy",
  goal: "I CAN analyse how Austen presents Elizabeth Bennet and Mr Darcy and how both characters change.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Protagonist", definition: "The central character of a text." },
    { term: "Pride", definition: "In the novel, a sense of one's own superiority, which Darcy displays openly and Elizabeth displays in her confidence of her own judgement." },
    { term: "Prejudice", definition: "A judgement formed before the facts are known; Elizabeth's early view of Darcy." },
    { term: "Anagnorisis", definition: "A moment of realisation or recognition, as when Elizabeth reads Darcy's letter." },
    { term: "Wit", definition: "Quick, intelligent humour, characteristic of Elizabeth's speech." },
    { term: "Character arc", definition: "The way a character changes over the course of a text." },
  ],
  concepts: [
    {
      id: "et11-u2-elizabeth-bennet",
      title: "Elizabeth Bennet",
      skill: "Analyse Austen's presentation of Elizabeth as lively, independent and flawed, and trace her self-knowledge.",
      lesson: {
        sections: [
          {
            heading: "A heroine of wit and independence",
            body: "Elizabeth is intelligent, quick-witted and unwilling to marry for money or status alone. She refuses Mr Collins and later Darcy's first proposal, taking risks that would seem foolish to a society in which marriage was a woman's main route to security. Her playful, ironic speech, often directed at Darcy, shows her confidence.",
          },
          {
            heading: "A flawed heroine",
            body: "Her chief flaw is prejudice: she trusts first impressions and flatters herself on her ability to read character. She believes Wickham's account of Darcy because it confirms her opinion. Austen allows the reader to see her errors through the narrator's gentle irony.",
          },
          {
            heading: "Self-knowledge",
            body: "After reading Darcy's letter, Elizabeth exclaims 'Till this moment I never knew myself.' This is the turning point of the novel: she must correct her judgement of Darcy and Wickham. Her growth shows that real maturity requires humility.",
          },
        ],
        keyFormulas: [
          { name: "Free indirect discourse", statement: "Narration that slips into a character's thoughts without a quotation, letting us hear Elizabeth's view and judge it." },
          { name: "Character arc", statement: "Elizabeth moves from confident prejudice to self-knowledge." },
          { name: "Irony", statement: "A gap between what is said or believed and what is true." },
        ],
        workedExample: {
          problem: "How does Austen present Elizabeth in the extract and in the novel as a whole?",
          solution: "In rejecting Darcy, Elizabeth is presented as spirited and morally independent: the long, balanced sentence catalogues his faults ('arrogance', 'conceit', 'selfish disdain') in a rhythmic list that shows how deeply she has judged him. The superlative 'the last man in the world' is blunt and shows her willingness to turn down wealth for principle. Yet Austen also signals that her judgement is partial: Elizabeth has built her dislike on 'succeeding events' that include Wickham's lies, so the extract hints at her prejudice. Later, her cry that she never knew herself until the letter shows that Austen presents her as a heroine who can learn, which makes her more convincing and more admirable.",
        },
      },
      questions: [
        {
          id: "et11-u2-elizabeth-bennet-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: PROPOSAL,
          stem: "In the extract, which phrase from Elizabeth's reply most clearly shows her strength of feeling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'succeeding events'" },
              { id: "b", text: "'the last man in the world'" },
              { id: "c", text: "'a month'" },
              { id: "d", text: "'the very beginning'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Superlative", statement: "A superlative expresses the extreme degree of a feeling." }],
            steps: [{ reasoning: "'The last man in the world' is a superlative that expresses absolute refusal.", evidence: "the last man in the world", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** 'the last man in the world'",
            commonErrors: ["Choosing a time phrase such as 'the very beginning', which shows duration, not intensity."],
          },
        },
        {
          id: "et11-u2-elizabeth-bennet-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: PROPOSAL,
          stem: "Explain what Elizabeth's long sentence in the extract reveals about her feelings towards Darcy. Refer to the extract in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Listing", statement: "A list of nouns builds an accumulating case." },
              { kind: "skill", name: "Embedded evidence", statement: "Quote a few words and comment on the effect." },
            ],
            steps: [
              { reasoning: "The triple list 'arrogance', 'conceit' and 'selfish disdain' shows she has a detailed catalogue of his faults.", evidence: "arrogance, your conceit", marks: 1, markCode: "AO2" },
              { reasoning: "'From the very beginning' shows the dislike is long-standing and absolute.", evidence: "From the very beginning", marks: 1, markCode: "AO1" },
              { reasoning: "The formal, balanced sentence reveals controlled anger rather than a loss of temper.", marks: 1, markCode: "AO2" },
              { reasoning: "The adjective 'immovable' suggests a dislike she believes can never change.", evidence: "immovable a dislike", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The accumulating list and 'immovable dislike' show deep, settled hostility; the formal, balanced sentence suggests controlled anger, and 'from the very beginning' shows her feeling is long-standing.",
            commonErrors: ["Paraphrasing the sentence without commenting on words.", "Stating she is angry with no evidence."],
          },
        },
        {
          id: "et11-u2-elizabeth-bennet-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: PROPOSAL,
          stem: "How does Austen present Elizabeth as both justified and mistaken in this extract? Refer to the extract and to the novel as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Balanced reading", statement: "Show more than one interpretation of a character's behaviour." },
              { kind: "technique", name: "Irony", statement: "The reader sees more than the character does." },
            ],
            steps: [
              { reasoning: "She is justified in resenting Darcy's insulting manner, as 'In vain have I struggled' presents his love as a reluctant concession.", evidence: "In vain have I struggled", marks: 2, markCode: "AO1" },
              { reasoning: "She is mistaken in her total judgement because 'succeeding events' rely on Wickham's lies and on her own first impressions.", evidence: "succeeding events", marks: 2, markCode: "AO1" },
              { reasoning: "The formal, elaborate sentence shows her pride in her own powers of judgement; Austen thus gives her the 'pride' of the title.", marks: 2, markCode: "AO2" },
              { reasoning: "Her later self-knowledge shows that Austen sets up this scene so that Elizabeth can grow.", marks: 2, markCode: "AO2" },
            ],
            levels: bands(8, "analysis of Elizabeth's justified and mistaken judgement"),
            finalAnswer: "Elizabeth is justified in resenting Darcy's insulting proposal but mistaken in her wholesale judgement, which rests on prejudice and Wickham's lies. Austen uses the formal, confident sentence to expose Elizabeth's pride and prepares for her later self-knowledge.",
            commonErrors: ["Treating Elizabeth as simply right.", "No reference to later events."],
          },
        },
        {
          id: "et11-u2-elizabeth-bennet-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: PROPOSAL,
          stem: "This question is about the extract and the character of Elizabeth Bennet in Pride and Prejudice.",
          parts: [
            { label: "a", prompt: "Give two words or phrases from Elizabeth's reply that describe Darcy's faults.", marks: 2 },
            { label: "b", prompt: "Explain what Darcy's words ('In vain have I struggled') suggest about his attitude to Elizabeth.", marks: 4 },
            { label: "c", prompt: "How does Austen present Elizabeth's strength of character in this extract?", marks: 6 },
            { label: "d", prompt: "'Elizabeth Bennet changes more than any other character in the novel.' How far do you agree? Refer to the whole novel.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Developing demand", statement: "Move from retrieval to explanation, analysis and evaluation." },
              { kind: "technique", name: "Characterisation", statement: "Speech reveals strength, pride and change." },
            ],
            steps: [
              { part: "a", reasoning: "'arrogance' or 'conceit'.", evidence: "arrogance, your conceit", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "'selfish disdain of the feelings of others'.", evidence: "selfish disdain", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'In vain' suggests that he has fought against his love as something unsuitable.", evidence: "In vain have I struggled", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'It will not do' reveals his sense of social superiority.", evidence: "It will not do", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The short, clipped sentences show emotional pressure but not tenderness.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "He seems to think she should be grateful, showing his pride.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "She rejects a wealthy suitor, showing principle over security.", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Her long, controlled sentence shows eloquence and self-command.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The superlative and the tone show moral courage in speaking frankly to a social superior.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Elizabeth changes from prejudice to self-knowledge ('Till this moment I never knew myself').", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Darcy also changes, and so do Lydia and Bingley in smaller ways; a balanced view compares them.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Austen's narrative methods, including irony and free indirect discourse, shape our view of change; a reasoned judgement is reached.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of Elizabeth's strength of character", "c"),
              ...bands(8, "evaluation of character change across the novel", "d"),
            ],
            finalAnswer: "(a) 'arrogance'; 'selfish disdain'. (b) Darcy's words suggest reluctant, superior love. (c) She is principled, articulate and brave. (d) Elizabeth changes greatly, but Darcy changes as much; the best answers weigh both and explain Austen's methods.",
            commonErrors: ["Retelling the proposal scene in (c).", "In (d), writing only about Elizabeth."],
          },
        },
      ],
    },
    {
      id: "et11-u2-mr-darcy",
      title: "Mr Darcy",
      skill: "Analyse how Austen shapes first impressions of Darcy and then reveals his true character.",
      lesson: {
        sections: [
          {
            heading: "First impressions",
            body: "Austen builds Darcy's first impression through the voice of the community. The room is first attracted by his appearance and wealth ('ten thousand a year'), then repelled by his manner. The narrator reports the opinion of the room, not her own, so the reader should be cautious of judging quickly.",
          },
          {
            heading: "The revealing of character",
            body: "The truth about Darcy is revealed through his actions: his letter to Elizabeth, his generosity to Georgiana, the discovery that he paid for Lydia's marriage, and his treatment of staff at Pemberley. The housekeeper's praise establishes that he is a good master, a good brother and a good man.",
          },
          {
            heading: "A man who changes",
            body: "Darcy's pride is real, but he learns from Elizabeth's rebuke. In his second proposal, he is humble and sensitive. Austen thus shows that pride can be corrected by love and honest criticism.",
          },
        ],
        keyFormulas: [
          { name: "First impression", statement: "A character judged on appearance or reputation before the truth is known." },
          { name: "Reported opinion", statement: "The narrator gives the community's view, inviting the reader to question it." },
          { name: "Revealing action", statement: "A character's true nature is shown through what they do." },
        ],
        workedExample: {
          problem: "How does Austen present Darcy when he first appears at the Meryton assembly?",
          solution: "Austen first presents Darcy as an object of admiration, with a list of physical attractions ('fine, tall person, handsome features, noble mien') that emphasises his appearance. The mention of 'ten thousand a year' shows that his wealth is as important to the room as his looks, which is a gentle satire of the mercenary community. The tone shifts abruptly with the second paragraph: the hyperbole 'the proudest, most disagreeable man in the world' captures the exaggerated judgement of a room that has taken offence, and the repeated superlatives sound as unreliable as gossip. Austen therefore sets up Darcy's pride while encouraging the reader to doubt first impressions.",
        },
      },
      questions: [
        {
          id: "et11-u2-mr-darcy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BALL,
          stem: "What does the phrase 'ten thousand a year' show about the attitudes of the people at the assembly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They believe Darcy is too poor to marry" },
              { id: "b", text: "They are unconcerned about money" },
              { id: "c", text: "They are very interested in Darcy's wealth" },
              { id: "d", text: "They think Darcy is generous" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Marriage and money", statement: "In Regency society a man's income determined his desirability." }],
            steps: [{ reasoning: "The community values Darcy by his income, which spreads quickly by report.", evidence: "ten thousand a year", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** They are very interested in his wealth.",
            commonErrors: ["Taking the phrase as praise of Darcy's character."],
          },
        },
        {
          id: "et11-u2-mr-darcy-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: BALL,
          stem: "Explain how Austen uses language in the second paragraph of the extract to show the room's changing opinion of Darcy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hyperbole", statement: "Deliberate exaggeration for effect." },
              { kind: "technique", name: "Tonal shift", statement: "A change in attitude between sentences." },
            ],
            steps: [
              { reasoning: "The superlatives exaggerate his faults, showing the room's emotional reaction.", evidence: "proudest, most disagreeable man in the world", marks: 1, markCode: "AO2" },
              { reasoning: "The shift from admiration to hostility is abrupt, showing how fickle first impressions are.", marks: 1, markCode: "AO2" },
              { reasoning: "'Everybody' suggests a collective judgement, the force of community opinion.", evidence: "everybody hoped", marks: 1, markCode: "AO1" },
              { reasoning: "The gossiping tone invites the reader to doubt such a hasty verdict.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Austen's superlatives and the shift from praise to hostility show the room's fickle opinion, and 'everybody' shows how gossip spreads; the exaggeration invites the reader to question it.",
            commonErrors: ["Reading the verdict as the narrator's own truth."],
          },
        },
        {
          id: "et11-u2-mr-darcy-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: BALL,
          stem: "How does Austen use this extract to present first impressions of Darcy, and how are they challenged later in the novel?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Whole-text link", statement: "Connect the extract to later developments." },
              { kind: "technique", name: "Satire", statement: "Gentle mockery of society through exaggeration." },
            ],
            steps: [
              { reasoning: "The list of physical qualities and wealth shows how the room judges by surface.", evidence: "fine, tall person", marks: 2, markCode: "AO2" },
              { reasoning: "The sudden condemnation 'proudest, most disagreeable' sets up Darcy's pride and Elizabeth's prejudice.", marks: 2, markCode: "AO1" },
              { reasoning: "The community's mercenary interest satirises a society that treats men as incomes.", marks: 2, markCode: "AO4" },
              { reasoning: "Later, Darcy's letter, his Pemberley servants' praise and his assistance with Lydia contradict the first impression.", marks: 2, markCode: "AO1" },
            ],
            levels: bands(8, "analysis of first impressions and their later challenge"),
            finalAnswer: "The extract presents Darcy through gossip, praising his looks and fortune, then condemning his pride. Austen satirises the community's judgement, and later events show his generosity and humility.",
            commonErrors: ["Describing Darcy as simply proud.", "No link to later in the novel."],
          },
        },
        {
          id: "et11-u2-mr-darcy-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: BALL,
          stem: "This question is about Mr Darcy in Pride and Prejudice.",
          parts: [
            { label: "a", prompt: "Give two things the people at the assembly admire about Darcy.", marks: 2 },
            { label: "b", prompt: "Explain what the second paragraph suggests about the community's attitude to people who seem proud.", marks: 4 },
            { label: "c", prompt: "How does Austen use language in the extract to present Darcy?", marks: 6 },
            { label: "d", prompt: "'Darcy is a more complex character than Elizabeth.' How far do you agree? Refer to the whole novel.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Characterisation", statement: "Description, reported opinion and action build character." },
              { kind: "skill", name: "Evaluative response", statement: "Weigh both characters before reaching a judgement." },
            ],
            steps: [
              { part: "a", reasoning: "His appearance (tall, handsome).", evidence: "fine, tall person", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "His wealth.", evidence: "ten thousand a year", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The community quickly condemns pride in others.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Superlatives show unfair, exaggerated judgement.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Everybody hoped' shows the influence of public opinion.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The tone suggests Austen's irony at their pettiness.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The listing of physical qualities builds an attractive but superficial portrait.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The adjectives 'proudest' and 'disagreeable' create a harsh summary.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The shift in tone presents Darcy through the room's eyes, not the narrator's.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Darcy's complexity: reserved, proud, generous, protective, capable of humility.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Elizabeth is complex too: witty, prejudiced, brave; compare the two.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Austen's methods (letter, narrator) and a reasoned judgement.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of Austen's language in presenting Darcy", "c"),
              ...bands(8, "evaluation of Darcy and Elizabeth as complex characters", "d"),
            ],
            finalAnswer: "(a) His looks and wealth. (b) The community is quick to judge pride and exaggerates. (c) Austen uses listing, superlatives and tonal shift. (d) Both are complex; a strong answer weighs them against each other with reference to methods.",
            commonErrors: ["Writing about Darcy in (d) without comparison.", "Using no quotations."],
          },
        },
      ],
    },
  ],
};
