import type { Lesson } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

export const lesson32: Lesson = {
  id: "et11-u3-lesson-3-2",
  code: "3-2",
  title: "Argument: Thesis, Conclusions and Interpretations",
  goal: "I CAN write a clear thesis and a conclusion that makes a judgement, and offer alternative interpretations with confidence.",
  standards: ["4ET1 Paper 1 Section B", "4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2"],
  vocabulary: [
    { term: "Thesis statement", definition: "A sentence that sets out your central argument in answer to the question." },
    { term: "Judgement", definition: "A reasoned conclusion about how far a statement is true or how successfully a writer achieves an aim." },
    { term: "Interpretation", definition: "A reading of a text's meaning; a text can support more than one." },
    { term: "Tentative language", definition: "Words such as 'perhaps', 'suggests' and 'could' that allow for more than one reading." },
    { term: "Counter-argument", definition: "A point that challenges your main argument, which you acknowledge before explaining why your view is stronger." },
    { term: "Synthesis", definition: "Bringing together separate points to form an overall conclusion." },
  ],
  concepts: [
    {
      id: "et11-u3-thesis-conclusions",
      title: "Thesis statements and conclusions",
      skill: "Write a precise opening thesis and a conclusion that answers the question with a judgement.",
      lesson: {
        sections: [
          {
            heading: "A thesis answers the question",
            body: "A weak opening restates the question and promises to 'discuss' it. A strong thesis takes a position that can be argued and proved. Compare 'I will write about loneliness in Of Mice and Men' with 'Steinbeck presents loneliness as the product of prejudice and poverty, and companionship as the only fragile defence against it.' The second tells the examiner exactly what your essay will show.",
          },
          {
            heading: "Formula for a thesis",
            body: "Use: writer + verb of presentation + central idea + purpose or effect. For example: 'Austen uses irony to expose the marriage market, while ultimately affirming marriage founded on respect.' Keep it to one or two sentences and use the question's key words.",
          },
          {
            heading: "A conclusion makes a judgement",
            body: "A conclusion does not repeat the introduction or summarise each paragraph. It answers the question, says why the writer made these choices, and may end on the most significant insight. Use phrases such as 'Ultimately', 'This suggests that' and 'It is through ... that'.",
          },
        ],
        keyFormulas: [
          { name: "Thesis formula", statement: "Writer + method verb + central idea + purpose." },
          { name: "Judgement conclusion", statement: "Answer the question, explain the writer's purpose, finish on an insight." },
          { name: "Avoid", statement: "Do not restate the question, summarise every point, or introduce new evidence in a conclusion." },
        ],
        workedExample: {
          problem: "Write a thesis and conclusion for: 'How does Austen present Elizabeth Bennet as an unconventional heroine?'",
          solution: "Thesis: Austen presents Elizabeth as unconventional through her wit, her refusal of advantageous proposals and her willingness to challenge social superiors, yet she makes her convincing by exposing her capacity for error. Conclusion: Ultimately, Elizabeth is unconventional not because she rejects her society but because she insists on marrying with respect on both sides. Austen's ironic narration allows us to admire her independence while recognising the prejudice that she must overcome, so that her union with Darcy rewards growth as well as spirit.",
        },
      },
      questions: [
        {
          id: "et11-u3-thesis-conclusions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is the strongest thesis statement for the question 'How does Steinbeck present dreams in Of Mice and Men?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In this essay I am going to write about dreams in Of Mice and Men." },
              { id: "b", text: "Dreams are mentioned many times in the book." },
              { id: "c", text: "George and Lennie have a dream about a farm and rabbits." },
              { id: "d", text: "Steinbeck presents dreams as essential for survival but doomed by an unequal society, using the farm as a fragile symbol of hope." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Thesis", statement: "A thesis takes an arguable position and previews the line of argument." }],
            steps: [{ reasoning: "Option (a) gives a position, a method and a purpose.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** It makes an arguable claim with method and purpose.",
            commonErrors: ["Choosing (d), which only describes the plot."],
          },
        },
        {
          id: "et11-u3-thesis-conclusions-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a clear thesis statement (one or two sentences) in response to: 'How does Austen use irony in Pride and Prejudice?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Thesis formula", statement: "Writer + method + idea + purpose." },
              { kind: "technique", name: "Irony", statement: "A gap between statement and meaning." },
            ],
            steps: [
              { reasoning: "Names Austen and irony as a method, using the key words of the question.", marks: 1, markCode: "AO1" },
              { reasoning: "Identifies what the irony targets (marriage market, snobbery, pride and prejudice).", marks: 1, markCode: "AO1" },
              { reasoning: "States purpose or effect (satire, shaping reader judgement).", marks: 1, markCode: "AO2" },
              { reasoning: "Takes an arguable position and is concise.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Austen uses irony, from the mock-authoritative opening to the gap between Elizabeth's confidence and the truth, to satirise a society obsessed with money and rank while teaching the reader to question first impressions.",
            commonErrors: ["Restating the question.", "Giving no purpose."],
          },
        },
        {
          id: "et11-u3-thesis-conclusions-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a concluding paragraph for an essay on the question: 'How does Steinbeck present the end of the dream in Of Mice and Men?' Make a judgement and refer to Steinbeck's methods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Judgement conclusion", statement: "Answer the question and explain the writer's purpose." },
              { kind: "technique", name: "Cyclical structure", statement: "Returning to the opening setting." },
            ],
            steps: [
              { reasoning: "Answers the question directly: the dream ends in tragedy that seems inevitable.", marks: 2, markCode: "AO1" },
              { reasoning: "Refers to methods such as foreshadowing, the cyclical return to the river, or symbolism.", marks: 2, markCode: "AO2" },
              { reasoning: "Offers an insight into Steinbeck's purpose (criticism of an unjust system) in a final sentence.", marks: 2, markCode: "AO1" },
            ],
            levels: bands(6, "conclusion making a judgement about Steinbeck's methods"),
            finalAnswer: "Ultimately, Steinbeck presents the end of the dream as inevitable rather than accidental: the foreshadowing of the mouse, the puppy and Candy's dog, and the return to the riverbank, show that the men were never free to succeed. The tragedy is therefore social as much as personal, a protest against a world that allows hope but not fulfilment.",
            commonErrors: ["Summarising the plot.", "Introducing new quotations."],
          },
        },
        {
          id: "et11-u3-thesis-conclusions-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "This question is about shaping an argument in a literature essay.",
          parts: [
            { label: "a", prompt: "State two features of an effective thesis statement.", marks: 2 },
            { label: "b", prompt: "Explain why a conclusion should not simply repeat the introduction.", marks: 4 },
            { label: "c", prompt: "Write a thesis statement and a concluding paragraph for the question: 'How does Blake in London present the effects of power on ordinary people?'", marks: 6 },
            { label: "d", prompt: "Write an introduction and a conclusion for the question: 'How does Austen present Mr Darcy as a changing character?' Make your argument consistent from start to finish.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Argument", statement: "Introduction and conclusion frame a consistent argument." },
              { kind: "skill", name: "Judgement", statement: "A conclusion answers the question and adds insight." },
            ],
            steps: [
              { part: "a", reasoning: "It takes a clear, arguable position.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It uses the question's key words and previews methods or purpose.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Repetition adds nothing new and wastes time.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "A conclusion should show the argument has been proved by the analysis.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It should give a final judgement or insight.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It leaves a strong final impression on the examiner.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Thesis: Blake presents power as crushing minds as well as bodies, using repetition and metaphor.", evidence: "mind-forg'd manacles", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "Conclusion: ends with a judgement about Blake's protest and the universal nature of suffering.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Introduction: arguable claim about Darcy's change from pride to humility with reference to methods.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Conclusion: consistent with the thesis, with a judgement and insight into Austen's purpose.", marks: 4, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "thesis and conclusion on Blake's presentation of power", "c"),
              ...bands(8, "consistent introduction and conclusion on Darcy", "d"),
            ],
            finalAnswer: "(a) Arguable position; uses key words and previews method. (b) A conclusion must add judgement and insight. (c) A thesis on psychological oppression with a judgement conclusion. (d) A consistent introduction and conclusion on Darcy's change from pride to humility.",
            commonErrors: ["Introduction and conclusion that contradict each other.", "No judgement."],
          },
        },
      ],
    },
    {
      id: "et11-u3-alternative-interpretations",
      title: "Alternative interpretations",
      skill: "Use tentative language and explore more than one reading of a quotation or character.",
      lesson: {
        sections: [
          {
            heading: "Texts can mean more than one thing",
            body: "Top-band answers show that a word or character can be read in more than one way. For instance, Curley's wife can be seen as a threat or a victim, and Lennie as a child, a beast or an innocent. Present both readings and explain which you find more convincing.",
          },
          {
            heading: "Tentative language",
            body: "Use words that open possibilities: 'suggests', 'perhaps', 'could imply', 'may reflect'. Then use an evaluative phrase to choose: 'However, the more persuasive reading is...'. Avoid 'clearly' and 'obviously' for interpretation.",
          },
          {
            heading: "Support each reading",
            body: "Every interpretation needs evidence. Use a different word or detail to support each, and refer to the writer's methods and context to decide between them. The reading must stay grounded in the text.",
          },
        ],
        keyFormulas: [
          { name: "Alternative reading", statement: "'This could suggest X; alternatively, it may imply Y.'" },
          { name: "Choosing", statement: "'However, in the context of the whole text, the more convincing reading is...'" },
          { name: "Grounded", statement: "Every reading is supported by words from the text." },
        ],
        workedExample: {
          problem: "Give two interpretations of Blake's phrase 'charter'd Thames'.",
          solution: "'Charter'd' could suggest that the river is owned and licensed, so that even nature has been commercialised: nothing in London is free. Alternatively, it may suggest a grant of rights, so that the 'freedom' offered by charters is ironically empty, since the same people are still in chains. The second reading seems more convincing because Blake links charters to the 'mind-forg'd manacles', where supposed liberties are shown to be a form of control.",
        },
      },
      questions: [
        {
          id: "et11-u3-alternative-interpretations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is best for introducing an alternative interpretation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Everybody agrees that...'" },
              { id: "b", text: "'The only possible meaning is...'" },
              { id: "c", text: "'Obviously, the writer means...'" },
              { id: "d", text: "'Alternatively, this could suggest...'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Tentative language", statement: "Open, exploratory phrasing allows for more than one reading." }],
            steps: [{ reasoning: "'Alternatively' and 'could suggest' signal another possibility.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** 'Alternatively, this could suggest...'",
            commonErrors: ["Choosing absolute phrases that close down discussion."],
          },
        },
        {
          id: "et11-u3-alternative-interpretations-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two different interpretations of Lennie's character in Of Mice and Men (for example as a child and as a danger), using tentative language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Alternative interpretation", statement: "Two readings, each supported." },
              { kind: "technique", name: "Characterisation", statement: "Animal imagery and dialogue show complexity." },
            ],
            steps: [
              { reasoning: "A first reading, supported by reference: Lennie as childlike and innocent, given his dependence and love of soft things.", marks: 1, markCode: "AO1" },
              { reasoning: "A second reading: Lennie as dangerous, as his strength causes deaths.", marks: 1, markCode: "AO1" },
              { reasoning: "Uses tentative language (suggests, perhaps, could).", marks: 1, markCode: "AO2" },
              { reasoning: "Reaches a view that the two coexist or one is stronger because of Steinbeck's sympathy.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Lennie could be read as a child, since his dependence and love of soft things suggest innocence; alternatively, his strength makes him dangerous. Steinbeck seems to ask the reader to hold both, which makes the ending tragic.",
            commonErrors: ["Giving only one reading.", "No tentative language."],
          },
        },
        {
          id: "et11-u3-alternative-interpretations-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "'Mr Darcy is a hero, not a villain.' Write a paragraph that considers an alternative view before reaching a judgement. Refer to Pride and Prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counter-argument", statement: "Acknowledge the opposing view, then argue why yours is stronger." },
              { kind: "technique", name: "Reported opinion", statement: "The community's view of Darcy is not the narrator's." },
            ],
            steps: [
              { reasoning: "Acknowledges the opposing view: his early pride and rudeness at the assembly can make him seem villainous.", evidence: "proudest, most disagreeable", marks: 2, markCode: "AO1" },
              { reasoning: "Counters with evidence of heroism: the letter, his help to Lydia and Georgiana, the housekeeper's praise.", marks: 2, markCode: "AO1" },
              { reasoning: "Analyses Austen's methods: reported opinion and delayed revelation are designed to correct first impressions.", marks: 2, markCode: "AO2" },
              { reasoning: "Reaches a clear judgement with tentative language, e.g. he is a flawed hero whose pride is corrected.", marks: 2, markCode: "AO1" },
            ],
            levels: bands(8, "consideration of alternative views and judgement"),
            finalAnswer: "Although Darcy's early pride might suggest villainy, Austen's reported opinion and later revelations show that he is a flawed but admirable hero whose pride is overcome by love and self-knowledge.",
            commonErrors: ["Ignoring the counter-view.", "Saying 'Darcy is good' with no evidence."],
          },
        },
        {
          id: "et11-u3-alternative-interpretations-q4",
          difficulty: "challenge",
          totalMarks: 20,
          stem: "This question is about interpretation in poetry and prose.",
          parts: [
            { label: "a", prompt: "Give two different meanings that the word 'charter'd' could have in Blake's London.", marks: 2 },
            { label: "b", prompt: "Explain why it is useful to use tentative language when interpreting a quotation.", marks: 4 },
            { label: "c", prompt: "Write about two ways of reading Curley's wife in Of Mice and Men, and say which is more convincing.", marks: 6 },
            { label: "d", prompt: "'Pride and Prejudice is a romantic comedy, not a serious social novel.' How far do you agree? Consider more than one interpretation.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Alternative interpretation", statement: "Offer, support and choose between readings." },
              { kind: "skill", name: "Evaluation", statement: "Reach a reasoned judgement." },
            ],
            steps: [
              { part: "a", reasoning: "Owned or licensed by commercial interests.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Freedoms granted by charter that are ironically empty.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It acknowledges that language is open to more than one meaning.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It allows you to present several readings without being wrong.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It shows the examiner a mature, exploratory approach.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "You can then choose the most convincing reading, which demonstrates judgement.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Reading 1: a threat and temptress as the men see her.", evidence: "tart", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Reading 2: a lonely victim trapped in marriage and denied her dream.", evidence: "awful lonely", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Chooses the victim reading using Steinbeck's methods and context of the 1930s.", marks: 2, markCode: "AO4" },
              { part: "d", reasoning: "Romantic comedy: witty narration, courtship plot, happy ending.", marks: 3, markCode: "AO2" },
              { part: "d", reasoning: "Social novel: entail, class and women's limited options show a serious critique.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "A reasoned judgement that the comedy is the vehicle for the social critique.", marks: 2, markCode: "AO1" },
            ],
            levels: [
              ...bands(6, "interpretation of Curley's wife", "c"),
              ...bands(8, "evaluation of Pride and Prejudice as comedy and social novel", "d"),
            ],
            finalAnswer: "(a) Owned or licensed; empty freedoms. (b) Tentative language acknowledges multiple readings and shows judgement. (c) Threat versus victim, favouring victim. (d) Both: Austen uses comedy to deliver social criticism.",
            commonErrors: ["Offering only one reading.", "No judgement between readings."],
          },
        },
      ],
    },
  ],
};
