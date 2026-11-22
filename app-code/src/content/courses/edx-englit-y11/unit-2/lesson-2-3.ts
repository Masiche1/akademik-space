import type { Lesson, TextExtract } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

const OPENING: TextExtract = {
  title: "The opening of the novel",
  author: "Jane Austen",
  source: "Pride and Prejudice (1813), Volume 1, Chapter 1",
  text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\n\nHowever little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.",
};

export const lesson23: Lesson = {
  id: "et11-u2-lesson-2-3",
  code: "2-3",
  title: "Narrative Voice, Irony and the Whole Novel",
  goal: "I CAN analyse Austen's narrative voice and irony, and move from an extract to the whole novel in an exam answer.",
  standards: ["4ET1 Paper 2 Section B", "4ET1 AO1", "4ET1 AO2", "4ET1 AO4"],
  vocabulary: [
    { term: "Omniscient narrator", definition: "A narrator who stands outside the story and knows the thoughts of the characters." },
    { term: "Irony", definition: "A gap between what is said and what is meant, or between appearance and reality." },
    { term: "Free indirect discourse", definition: "Narration that blends the narrator's voice with a character's thoughts." },
    { term: "Epistolary", definition: "Told through letters; Darcy's letter is a pivotal episode." },
    { term: "Tone", definition: "The writer's attitude, such as playful, detached, or mocking." },
    { term: "Generalisation", definition: "A broad statement presented as universal truth, which Austen often uses ironically." },
  ],
  concepts: [
    {
      id: "et11-u2-narrative-voice-irony",
      title: "Narrative voice and irony",
      skill: "Analyse how Austen's ironic narrator shapes the reader's judgements.",
      lesson: {
        sections: [
          {
            heading: "The ironic narrator",
            body: "Austen's narrator is witty, detached and sharply observant. The famous opening sentence presents a social assumption as an incontestable fact, 'a truth universally acknowledged', but the claim is absurd: in fact it is single women who need husbands. The inflated tone invites us to smile at the community's attitudes.",
          },
          {
            heading: "Irony of language and situation",
            body: "Verbal irony is shown in the gap between what is said and what is meant, as when the narrator calls the neighbours' view 'so well fixed' that a man becomes 'the rightful property' of their daughters, language of ownership that mocks the marriage market. Situational irony is shown when Elizabeth, so proud of her judgement, is the one who is wrong.",
          },
          {
            heading: "Perspective",
            body: "Most of the novel is filtered through Elizabeth's viewpoint using free indirect discourse, so we share her mistakes. The reader's growing awareness of the gap between her view and the facts produces dramatic irony and invites us to learn with her.",
          },
        ],
        keyFormulas: [
          { name: "Verbal irony", statement: "Saying something in a way that means the opposite or something other than the literal." },
          { name: "Mock-authoritative tone", statement: "A confident, formal voice used for comic or critical effect." },
          { name: "Free indirect discourse", statement: "Narration that merges with a character's thoughts." },
        ],
        workedExample: {
          problem: "How does Austen's narrative voice in the opening paragraphs create irony?",
          solution: "Austen opens with a grand generalisation, 'a truth universally acknowledged', adopting the manner of a philosopher. The formal, balanced sentence is mock-authoritative: it dresses a piece of gossip as a law. The irony deepens in the second paragraph: 'considered the rightful property of some one or other of their daughters' reverses the expected order, since it is the man who is treated as property by the families. The legalistic noun 'property' reduces marriage to a transaction, and 'some one or other' suggests the daughters are interchangeable. The tone is cool and amused, making the reader complicit in the joke and setting up the novel's critique of the marriage market.",
        },
      },
      questions: [
        {
          id: "et11-u2-narrative-voice-irony-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OPENING,
          stem: "What is the effect of the phrase 'a truth universally acknowledged' at the start of the novel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows that the narrator agrees entirely with the claim" },
              { id: "b", text: "It creates a mock-serious tone that invites the reader to question the claim" },
              { id: "c", text: "It shows that the narrator is angry with society" },
              { id: "d", text: "It suggests that the story is based on true events" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Mock-authoritative tone", statement: "An exaggeratedly formal voice used to create irony." }],
            steps: [{ reasoning: "The grand phrase makes a social assumption sound like a law, creating irony.", evidence: "a truth universally acknowledged", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** A mock-serious tone inviting the reader to question the claim.",
            commonErrors: ["Taking the narrator's statement literally."],
          },
        },
        {
          id: "et11-u2-narrative-voice-irony-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: OPENING,
          stem: "Explain how Austen's choice of words in the second paragraph presents the attitudes of the neighbourhood families.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word choice", statement: "Specific words carry connotations that reveal attitude." },
              { kind: "skill", name: "Zooming in", statement: "Select a key word and explore its connotations." },
            ],
            steps: [
              { reasoning: "'Property' suggests the man is a possession, reducing marriage to ownership.", evidence: "rightful property", marks: 1, markCode: "AO2" },
              { reasoning: "'Rightful' implies that the families feel entitled to him.", evidence: "rightful", marks: 1, markCode: "AO2" },
              { reasoning: "'Some one or other' shows that any daughter will do, a casual and mercenary attitude.", evidence: "some one or other", marks: 1, markCode: "AO2" },
              { reasoning: "The families are presented as presumptuous and self-interested, with the narrator amused.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "'Rightful property' makes the man a possession the families feel entitled to, while 'some one or other' shows the daughters are interchangeable. The families are presented as presumptuous and mercenary.",
            commonErrors: ["Paraphrasing without discussing words."],
          },
        },
        {
          id: "et11-u2-narrative-voice-irony-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: OPENING,
          stem: "How does Austen use irony in the extract to introduce the novel's concerns? Refer to the extract and to the novel as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "A gap between statement and meaning exposes social attitudes." },
              { kind: "skill", name: "Extract to whole text", statement: "Link the opening to later developments." },
            ],
            steps: [
              { reasoning: "The pompous generalisation is mock-authoritative, treating gossip as a universal truth.", evidence: "a truth universally acknowledged", marks: 2, markCode: "AO2" },
              { reasoning: "The reversal of the expected roles (a man as property) satirises the marriage market.", evidence: "rightful property", marks: 2, markCode: "AO2" },
              { reasoning: "It introduces the theme of marriage and money which drives the plot, including Bingley's arrival.", marks: 2, markCode: "AO1" },
              { reasoning: "Context: for women without fortune, marriage was essential, so the irony has a serious edge.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "analysis of Austen's ironic introduction of theme"),
            finalAnswer: "The opening is ironic: a mock-authoritative generalisation hides the truth that families, not men, are the ones in want. It introduces marriage and money and, in context, hints at the real pressures on women.",
            commonErrors: ["Only identifying 'irony' without explaining.", "No link to the rest of the novel."],
          },
        },
        {
          id: "et11-u2-narrative-voice-irony-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: OPENING,
          stem: "This question is about the extract and Austen's narrative voice.",
          parts: [
            { label: "a", prompt: "Give two words or phrases that suggest the neighbourhood families see the new man as a possession.", marks: 2 },
            { label: "b", prompt: "Explain what the opening sentence suggests about the narrator's attitude to society.", marks: 4 },
            { label: "c", prompt: "How does Austen use language and structure in the extract to create a humorous tone?", marks: 6 },
            { label: "d", prompt: "'Austen's irony makes her novel a serious criticism of her society.' How far do you agree? Refer to the whole novel.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Meaning that is the opposite or other than the literal." },
              { kind: "skill", name: "Evaluating", statement: "Weigh humour against seriousness to reach a judgement." },
            ],
            steps: [
              { part: "a", reasoning: "'rightful property'.", evidence: "rightful property", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "'considered' or 'some one or other of their daughters'.", evidence: "some one or other", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The narrator is amused and sceptical, using mock-seriousness.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The claim is a social assumption presented as law, which mocks gossip.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The word 'acknowledged' suggests unthinking agreement.", evidence: "universally acknowledged", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The narrator is detached but not hostile, the tone of a satirist.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The formal, balanced opening sentence is comically grand for a trivial subject.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The long second sentence builds with qualifying clauses, delaying the punchline of 'rightful property'.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The reversal creates surprise and amusement at the families' presumption.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Serious criticism: irony exposes mercenary marriage, snobbery and the limits on women.", marks: 3, markCode: "AO1" },
              { part: "d", reasoning: "Counter: Austen's irony is gentle and the ending affirms social order, so it is reforming not revolutionary.", marks: 3, markCode: "AO4" },
              { part: "d", reasoning: "A reasoned judgement supported by methods such as the narrator and free indirect discourse.", marks: 2, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of language and structure creating humour", "c"),
              ...bands(8, "evaluation of Austen's irony as social criticism", "d"),
            ],
            finalAnswer: "(a) 'rightful property'; 'some one or other'. (b) Amused scepticism. (c) Grand opening, delayed punchline and reversal. (d) Largely agree, with the qualification that her criticism is reforming rather than radical.",
            commonErrors: ["Treating the tone as straightforward.", "No judgement in (d)."],
          },
        },
      ],
    },
    {
      id: "et11-u2-extract-to-whole-novel",
      title: "From extract to whole novel",
      skill: "Use an extract as a starting point and range confidently across the whole novel in an essay.",
      lesson: {
        sections: [
          {
            heading: "Starting in the extract",
            body: "Begin with close analysis of the printed passage. Focus on three or four precise points: a key word, a structural feature and the narrator's tone. Quote briefly and explain effect.",
          },
          {
            heading: "Moving outwards",
            body: "Then ask: where else in the novel does Austen do this? Link to the proposals, Darcy's letter, Pemberley, Lydia's elopement and the closing marriages. Choose moments that show change or contrast and avoid retelling the plot.",
          },
          {
            heading: "Judgement and context",
            body: "Keep the question focus in every paragraph. Use context where it deepens meaning, for example inheritance law, and end with a concise judgement that returns to the question.",
          },
        ],
        keyFormulas: [
          { name: "Start close, move out", statement: "Analyse the extract first, then connect to the whole text." },
          { name: "Link phrase", statement: "'This idea is developed later when...' connects extract and whole text." },
          { name: "Judgement", statement: "End with a verdict that answers the question." },
        ],
        workedExample: {
          problem: "Write a paragraph linking the opening of the novel to the presentation of marriage later in the novel.",
          solution: "The mock-authoritative opening ('a truth universally acknowledged') frames marriage as an economic transaction, a view that Austen tests throughout the novel. It is embodied by Charlotte Lucas, who accepts Collins for security, and challenged by Elizabeth, who rejects two proposals before accepting Darcy on equal terms. The opening's irony therefore anticipates the novel's argument: that marriage should be based on respect and affection, not on property. By the end the narrator's tone has warmed, and the reader sees that the 'truth' of the opening has been replaced by a more humane one.",
        },
      },
      questions: [
        {
          id: "et11-u2-extract-to-whole-novel-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an extract-to-whole-text question, what should you do after analysing the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the same points in different words" },
              { id: "b", text: "Retell the whole plot from beginning to end" },
              { id: "c", text: "Link to other moments in the novel that develop the same idea" },
              { id: "d", text: "Write only about the characters' feelings" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Whole-text reference", statement: "Connect the passage to the wider novel in service of the question." }],
            steps: [{ reasoning: "Whole-text reference shows knowledge and understanding of the novel.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(c)** Link to other moments in the novel.",
            commonErrors: ["Retelling the plot instead of selecting relevant moments."],
          },
        },
        {
          id: "et11-u2-extract-to-whole-novel-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences linking Darcy's letter to Elizabeth's change in attitude, using a short quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Embedded quotation", statement: "A short quotation within a sentence." },
              { kind: "technique", name: "Turning point", statement: "A scene that changes a character's understanding." },
            ],
            steps: [
              { reasoning: "Identifies the letter as a turning point where Elizabeth learns the truth about Wickham and Darcy.", marks: 1, markCode: "AO1" },
              { reasoning: "Embeds a short quotation such as 'Till this moment I never knew myself'.", evidence: "Till this moment I never knew myself", marks: 1, markCode: "AO1" },
              { reasoning: "Explains the effect: her pride in her own judgement is shattered.", marks: 1, markCode: "AO2" },
              { reasoning: "Links to the structure: it prepares for the second half of the novel and a more equal relationship.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Darcy's letter is the turning point at which Elizabeth confesses 'Till this moment I never knew myself', showing that her pride in her own judgement is broken. It prepares for a more equal relationship in the second half of the novel.",
            commonErrors: ["Summarising the contents of the letter."],
          },
        },
        {
          id: "et11-u2-extract-to-whole-novel-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: OPENING,
          stem: "Starting with this extract, explain how Austen presents ideas about money and marriage in the novel as a whole.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Extract to whole text", statement: "Begin with the passage and range across the novel." },
              { kind: "context", name: "Women and property", statement: "Marriage was a route to security for women." },
            ],
            steps: [
              { reasoning: "The extract treats the man as property, an ironic framing of marriage as business.", evidence: "rightful property", marks: 2, markCode: "AO2" },
              { reasoning: "Later, Charlotte and Collins and Lydia and Wickham show different motives involving money.", marks: 2, markCode: "AO1" },
              { reasoning: "Elizabeth's rejections and acceptance of Darcy show a different ideal based on respect.", marks: 2, markCode: "AO1" },
              { reasoning: "Context of entail and limited careers gives the opening a serious edge.", marks: 2, markCode: "AO4" },
            ],
            levels: bands(8, "range across the extract and whole novel"),
            finalAnswer: "The opening frames marriage ironically as property, and the novel tests this through Charlotte, Lydia and Elizabeth, finally affirming marriage based on respect, while the entail shows the real stakes.",
            commonErrors: ["Not using the extract.", "Plot summary of marriages."],
          },
        },
        {
          id: "et11-u2-extract-to-whole-novel-q4",
          difficulty: "challenge",
          totalMarks: 30,
          extract: OPENING,
          stem: "This question tests your ability to write a full response that moves from an extract to the whole novel.",
          parts: [
            { label: "a", prompt: "Pick out two words from the extract that show the narrator's irony.", marks: 2 },
            { label: "b", prompt: "Plan an essay that begins with this extract and answers: 'How does Austen present marriage in Pride and Prejudice?'", marks: 8 },
            { label: "c", prompt: "Write the essay: 'Starting with this extract, explain how far you think Austen presents marriage as a matter of money.' Refer to the whole novel and to its context.", marks: 20 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A thesis and a range of moments." },
              { kind: "skill", name: "Essay writing", statement: "Sustained argument with embedded evidence." },
              { kind: "context", name: "Regency marriage", statement: "The entail and limited careers shape motives." },
            ],
            steps: [
              { part: "a", reasoning: "'acknowledged' or 'universally' shows mock-authority.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "'rightful property' shows the ironic reversal.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "A clear thesis.", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Four points across the novel.", marks: 4, markCode: "AO1" },
              { part: "b", reasoning: "Methods and context noted.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Detailed knowledge of marriages and money across the novel.", marks: 8, markCode: "AO1" },
              { part: "c", reasoning: "Analysis of irony, narrative voice and structure.", marks: 8, markCode: "AO2" },
              { part: "c", reasoning: "Integrated context and a reasoned judgement.", marks: 4, markCode: "AO4" },
            ],
            levels: [
              { level: "Level 5", marks: "17-20", descriptor: "Perceptive, sustained argument; assured analysis of Austen's methods; context integrated; precisely chosen references from extract and whole novel.", part: "c" },
              { level: "Level 4", marks: "13-16", descriptor: "Thorough, well-developed response; well-chosen references; confident analysis of methods; relevant context.", part: "c" },
              { level: "Level 3", marks: "9-12", descriptor: "Clear, relevant response; appropriate references; some analysis; some context.", part: "c" },
              { level: "Level 2", marks: "5-8", descriptor: "Some understanding; some references; limited methods or context.", part: "c" },
              { level: "Level 1", marks: "1-4", descriptor: "Simple, limited response; few references; retelling.", part: "c" },
              { level: "Level 5", marks: "7-8", descriptor: "Perceptive plan with a focused thesis and balanced range.", part: "b" },
              { level: "Level 4", marks: "5-6", descriptor: "Clear plan with relevant points.", part: "b" },
              { level: "Level 3", marks: "3-4", descriptor: "Some planning.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Limited plan.", part: "b" },
            ],
            finalAnswer: "(a) 'universally acknowledged'; 'rightful property'. (b) Thesis: Austen shows money as a powerful pressure but ultimately values respect and affection; points on the opening, Charlotte, Lydia, Elizabeth and Darcy. (c) A sustained essay evaluating how far marriage is about money, with context of entail and women's limited options.",
            commonErrors: ["Not starting with the extract.", "Treating money as the only issue.", "Context as a separate block."],
            examinerNote: "Part (b) is a planning exercise; in the exam only the essay is assessed.",
          },
        },
      ],
    },
  ],
};
