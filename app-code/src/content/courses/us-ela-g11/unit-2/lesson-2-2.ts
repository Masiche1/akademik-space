import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const SPEECHES: TextExtract = {
  title: "Two American Speeches (excerpts)",
  author: "Patrick Henry (1775) and Abraham Lincoln (1865)",
  source: "Speech to the Virginia Convention; Second Inaugural Address",
  text: "PATRICK HENRY, SPEECH TO THE VIRGINIA CONVENTION (1775)\n\nIs life so dear, or peace so sweet, as to be purchased at the price of chains and slavery? Forbid it, Almighty God! I know not what course others may take; but as for me, give me liberty or give me death!\n\nABRAHAM LINCOLN, SECOND INAUGURAL ADDRESS (1865)\n\nWith malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in.",
};

const LIBERTY: TextExtract = {
  title: "The Measure of a Free Town (fictional)",
  author: "Written for Akademik Space",
  source: "An invented editorial from a 1900s town newspaper",
  text: "When the council voted to close the reading room on Sundays, its members spoke of liberty. A man should be at liberty, they said, to spend his own day of rest as he pleases, and no public building should compel him to anything. It was a pleasing argument, and it had the sound of principle.\n\nBut I have watched the men and women who climb the reading room steps on a Sunday, and they are the ones with no parlor of their own, no shelf of books, no quiet hour at home. For them, a locked door is not liberty. It is an arrangement by which the comfortable remain free and the poor remain merely unrestrained.\n\nLet us then be exact about the word. Liberty is not the absence of a rule; it is the presence of a choice that one can actually make. The council has taken away nothing from the man with a library of his own. It has taken away the only choice the others had.\n\nA town may call itself free when its doors are open to everyone who wishes to walk through them. Until then, it is free only in the way an empty room is free.",
};

export const lesson22: Lesson = {
  id: "ela11-u2-lesson-2-2",
  code: "2-2",
  title: "Rhetoric and Style",
  goal: "I CAN analyze how style and content make a speech powerful or beautiful, and trace how an author uses and refines the meaning of a key term over a text.",
  standards: ["RI.11-12.6", "RI.11-12.4"],
  vocabulary: [
    { term: "Anaphora", definition: "The repetition of a word or phrase at the start of successive clauses or sentences, building emphasis and rhythm." },
    { term: "Antithesis", definition: "The placing of opposite ideas in balanced grammatical structures, as in 'liberty or death'." },
    { term: "Parallelism", definition: "The use of matching grammatical structures for related ideas, creating balance and momentum." },
    { term: "Rhetorical question", definition: "A question asked for effect, not for an answer, which implies the answer the speaker wants the audience to give." },
    { term: "Syntax", definition: "The arrangement of words and clauses in sentences, including length, order and complexity." },
    { term: "Diction", definition: "The writer's choice of words, including their level of formality and connotation." },
    { term: "Key term", definition: "A central word whose meaning a text builds, defends or changes as it develops." },
  ],
  concepts: [
    {
      id: "ela11-u2-speech-style",
      title: "Style and power in speeches",
      skill: "Analyze how diction, syntax and structural devices contribute to the power, persuasiveness or beauty of a speech.",
      lesson: {
        sections: [
          {
            heading: "From devices to effects",
            body: "A speech is written to be heard, so its style relies on sound and rhythm. **Anaphora** gives a drumbeat; **antithesis** compresses a choice into two balanced halves; a **rhetorical question** makes the audience supply the answer for itself. Naming a device earns little. The skill at this level is to explain what the device does in that particular moment, for that audience, and why the speaker needed that effect.",
          },
          {
            heading: "Sentence shape as meaning",
            body: "Syntax carries meaning. A run of short, forceful clauses suggests urgency or certainty. A long sentence that builds through parallel phrases and delays its main verb creates a sense of gathering resolve. Even word order matters: placing a key word last gives it the final emphasis. Pair syntax with **diction**. Plain, monosyllabic words can feel honest and direct; elevated, scriptural words can give weight and solemnity.",
          },
        ],
        keyFormulas: [
          { name: "Device, effect, purpose", statement: "Name the device, explain its effect on the audience, and link the effect to the speaker's purpose." },
          { name: "Antithesis", statement: "Balanced opposites ('liberty or death') reduce a decision to two stark options." },
          { name: "Parallel series", statement: "Matching phrases ('with malice toward none, with charity for all') build rhythm and give each idea equal weight." },
          { name: "Sound and sense", statement: "A speech's rhythm is part of its argument: it makes ideas memorable and hard to refuse." },
        ],
        workedExample: {
          problem: "How does Patrick Henry's style make his final sentence powerful? (4 marks)",
          solution: "The speech reaches its climax through a series of choices. The rhetorical question, 'Is life so dear, or peace so sweet', implies its answer, so the audience agrees before it has been told what to think. Henry then compresses everything into an antithesis: 'liberty or death'. The balanced, monosyllabic pairing leaves no middle ground, so inaction is presented as slavery and the audience feels forced to choose. The short, imperative 'give me' is personal and defiant and is placed at the very end, so the sentence closes on its boldest demand.",
        },
      },
      questions: [
        {
          id: "ela11-u2-speech-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SPEECHES,
          stem: "In 'with malice toward none, with charity for all', the repeated structure is an example of",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "hyperbole" },
              { id: "b", text: "anaphora" },
              { id: "c", text: "a rhetorical question" },
              { id: "d", text: "irony" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Anaphora", statement: "Anaphora repeats an opening word or phrase across successive clauses." }],
            steps: [{ reasoning: "Both clauses begin with 'with', creating a repeated opening in matched structures.", evidence: "with malice toward none, with charity for all", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The repeated 'with' opening is anaphora. There is no question, exaggeration or contradiction between statement and meaning.",
            commonErrors: ["Choosing (c) because the sentiment sounds large; hyperbole needs exaggeration beyond belief."],
          },
        },
        {
          id: "ela11-u2-speech-style-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SPEECHES,
          stem: "What is the main effect of the phrase 'liberty or death' in Henry's last line?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It suggests that the speaker is unsure which outcome he prefers." },
              { id: "b", text: "It lists a range of political options for the convention to consider." },
              { id: "c", text: "It reduces the choice to two stark alternatives, so that submission seems unthinkable." },
              { id: "d", text: "It softens the speaker's demand with a polite alternative." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Antithesis", statement: "Antithesis sets opposites in balance so that a decision appears to have only two possible outcomes." }],
            steps: [
              { reasoning: "The two nouns are balanced and opposed, 'liberty' against 'death', so the phrase leaves no middle ground.", evidence: "give me liberty or give me death", marks: 1, markCode: "AO2" },
              { reasoning: "Because the earlier question equated peace with 'chains and slavery', submission is already presented as worse than death, which makes the stark choice persuasive.", evidence: "chains and slavery", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** The antithesis presents only two outcomes and rules out compromise. The speaker is not unsure, and he does not soften his demand.",
            commonErrors: ["Choosing (a): the repeated 'give me' shows the speaker has already chosen."],
          },
        },
        {
          id: "ela11-u2-speech-style-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SPEECHES,
          stem: "Analyze how Lincoln's syntax and diction in the sentence from the Second Inaugural Address create a tone of reconciliation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism", statement: "Matching phrases give a sentence balance and gentle momentum." },
              { kind: "skill", name: "Tone analysis", statement: "Link syntax and diction to an attitude and explain the effect on the audience." },
            ],
            steps: [
              { reasoning: "The parallel opening phrases are measured and gentle, and the negative 'none' paired with the positive 'all' present reconciliation as an absence of hatred and a presence of generosity.", evidence: "with malice toward none, with charity for all", marks: 2, markCode: "AO2" },
              { reasoning: "The humble qualification 'as God gives us to see the right' admits that no one has perfect certainty, which softens the demand for firmness and invites a divided nation to share the burden of judgment.", evidence: "as God gives us to see the right", marks: 2, markCode: "AO2" },
              { reasoning: "The inclusive 'us' and the hortatory 'let us strive on' turn the sentence into an invitation, not a command, so the tone is of shared labor, not victory.", evidence: "let us strive on to finish the work we are in", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "Lincoln's single, flowing sentence builds reconciliation through parallel phrases that pair absence ('none') with presence ('all'). The qualification 'as God gives us to see the right' tempers firmness with humility, admitting the limits of human certainty after a war. The inclusive 'let us strive on' makes the closing an invitation to shared work, not a triumph over an enemy, so the tone is generous and unifying.",
            commonErrors: ["Naming parallelism without explaining what it contributes to the tone.", "Ignoring the humility in the qualification."],
          },
        },
        {
          id: "ela11-u2-speech-style-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SPEECHES,
          stem: "Answer all parts of this question about the two speeches.",
          parts: [
            { label: "a", prompt: "Identify two devices used in Henry's sentences.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the rhetorical question that opens Henry's passage.", marks: 4 },
            { label: "c", prompt: "Analyze how Henry's diction and the structure of his passage move from questioning to commitment.", marks: 6 },
            { label: "d", prompt: "Compare how Henry and Lincoln use style to appeal to their audiences, considering the very different moments in which they spoke.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhetorical devices", statement: "Rhetorical questions, antithesis, parallelism and imperatives each guide an audience's response in a particular way." },
              { kind: "skill", name: "Device and effect", statement: "Always explain what a device achieves for a specific audience." },
              { kind: "context", name: "Audience and moment", statement: "Henry urged armed resistance on the eve of war; Lincoln urged healing at the war's close." },
            ],
            steps: [
              { part: "a", reasoning: "A rhetorical question opens the passage.", evidence: "Is life so dear, or peace so sweet", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Antithesis, parallelism or an exclamatory appeal to God is also used.", evidence: "liberty or give me death", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The question implies its own answer, so the audience agrees internally before the speaker states the conclusion.", evidence: "Is life so dear, or peace so sweet", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The loaded phrase 'chains and slavery' makes peace through submission sound shameful, and the parallel 'dear' and 'sweet' compress the objection into two familiar comforts.", evidence: "purchased at the price of chains and slavery", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Diction moves from the abstract and general ('life', 'peace') to the personal ('I', 'me'), so the audience watches the speaker commit himself.", evidence: "but as for me, give me liberty", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The exclamation 'Forbid it, Almighty God!' interrupts the flow with sudden emotion and raises the stakes with religious authority.", evidence: "Forbid it, Almighty God!", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The concessive 'I know not what course others may take' leaves others free to choose and so makes his own commitment more dramatic by contrast; the final imperative ends the sequence in action.", evidence: "I know not what course others may take", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Henry's style is urgent: questions, exclamation, antithesis and short imperatives drive the audience to a decision now. Context: war is near and the delegates are divided.", evidence: "give me liberty or give me death", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Lincoln's style is measured: a long, balanced sentence with gentle parallelism and an inclusive 'us' urges healing. Context: the war is ending and the nation must be rejoined.", evidence: "with malice toward none, with charity for all", marks: 2, markCode: "AO3" },
              { part: "d", reasoning: "Both use balance and religious language for authority, but Henry's devices narrow choice to provoke action while Lincoln's widen sympathy to invite reconciliation; purpose and moment decide style.", marks: 2, markCode: "AO3" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) A rhetorical question and antithesis (or an exclamatory appeal). (b) The question implies its answer, and 'chains and slavery' makes peace through submission seem shameful. (c) Diction moves from general nouns to the personal 'me'; the exclamation adds emotion and authority; the concession about others sharpens his own commitment, ending in a defiant imperative. (d) Henry uses urgent, narrowing devices to drive a divided convention to action; Lincoln uses a balanced, inclusive sentence to invite a wounded nation to reconcile. Both draw on religious language, but their styles serve opposite purposes.",
            commonErrors: ["In (a), naming devices not present in the text.", "In (c), describing the order of ideas without analyzing diction.", "In (d), comparing only the topics instead of the style."],
          },
        },
      ],
    },
    {
      id: "ela11-u2-key-term-development",
      title: "A key term refined across a text",
      skill: "Determine how an author uses and refines the meaning of a key term over the course of a text.",
      lesson: {
        sections: [
          {
            heading: "Terms that change as you read",
            body: "Powerful writers rarely use an important word just once. They introduce a **key term** in its common sense, then test it, qualify it or contrast it, until it carries a more exact meaning than it had at the start. To track this, collect each use of the word, note what surrounds it, and ask how the sense has shifted by the end.",
          },
          {
            heading: "How meaning gets refined",
            body: "Look for four moves. A writer may **define** the word directly, **contrast** it with a false or lesser version, supply an **example** that shows it in action, or **redefine** it in a sentence that sounds like a rule. Then ask what the new meaning allows the writer to argue. A key term is usually the hinge of the argument: whoever controls its meaning controls the debate.",
          },
        ],
        keyFormulas: [
          { name: "Track the term", statement: "List every use of the key term in order and note how each sentence changes its sense." },
          { name: "Contrast", statement: "Setting a word against its false version ('not the absence of a rule, but...') clarifies by elimination." },
          { name: "Redefinition", statement: "A short, general sentence that states the new meaning, often placed at the turning point of an argument." },
          { name: "Why it matters", statement: "Link the refined meaning to the author's larger claim." },
        ],
        workedExample: {
          problem: "How does the editorial's meaning of 'liberty' change between the first and third paragraphs? (4 marks)",
          solution: "In the first paragraph, 'liberty' is the council's meaning: the freedom of a man to spend his own day as he pleases, without being compelled. It is treated as the absence of public pressure. By the third paragraph the writer has replaced this with an exact definition: 'the presence of a choice that one can actually make'. The contrast 'not the absence of a rule' and the example of the man with a library of his own show why the first meaning fails. The word has moved from a formal freedom to a real, usable choice, and this redefinition makes the council's decision look like a loss of liberty, not a defense of it.",
        },
      },
      questions: [
        {
          id: "ela11-u2-key-term-development-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIBERTY,
          stem: "In the third paragraph, the writer defines liberty as",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the quiet of an empty room" },
              { id: "b", text: "the right of the council to decide for the town" },
              { id: "c", text: "the absence of any rule" },
              { id: "d", text: "the presence of a choice one can actually make" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Direct definition", statement: "A writer may state the exact meaning of a key term in a short general sentence." }],
            steps: [{ reasoning: "The writer says directly what liberty is, after saying what it is not.", evidence: "Liberty is not the absence of a rule; it is the presence of a choice that one can actually make", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The writer rejects (a) in the same sentence. The 'empty room' in (d) is used later, as an image of false freedom.",
            commonErrors: ["Choosing (a), the idea the writer explicitly rejects."],
          },
        },
        {
          id: "ela11-u2-key-term-development-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LIBERTY,
          stem: "What does the final sentence ('free only in the way an empty room is free') suggest about the town's liberty?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is peaceful and welcoming to all residents." },
              { id: "b", text: "It is real but not yet widely appreciated." },
              { id: "c", text: "It is a temporary freedom that will soon be replaced." },
              { id: "d", text: "It is empty: free in name but with nothing in it that people can actually use." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Extended image as redefinition", statement: "A closing image can compress a redefined term into a memorable picture." }],
            steps: [
              { reasoning: "An empty room has no restrictions only because it has nothing in it, which echoes the 'unrestrained' poor of paragraph two.", evidence: "remain merely unrestrained", marks: 1, markCode: "AO1" },
              { reasoning: "So the town's liberty is hollow: a freedom that is formal, with no real choices behind it.", evidence: "free only in the way an empty room is free", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The image criticizes liberty that exists only on paper. Choice (a) takes 'free' at face value, which the writer's redefinition rules out.",
            commonErrors: ["Choosing (a) because an empty room sounds calm, ignoring the sarcastic 'only'."],
          },
        },
        {
          id: "ela11-u2-key-term-development-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LIBERTY,
          stem: "Explain how the writer uses the contrast between the comfortable and the poor to refine the meaning of 'liberty'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contrast", statement: "Setting two groups in opposition shows which meaning of a term works and which fails." },
              { kind: "skill", name: "Tracking a key term", statement: "Show how the sense of the term changes and why the change serves the argument." },
            ],
            steps: [
              { reasoning: "The council's version treats liberty as not being compelled, which suits those who already have choices, such as the comfortable with their own libraries.", evidence: "the comfortable remain free", marks: 2, markCode: "AO1" },
              { reasoning: "For the poor the same rule removes their only option, so the contrast exposes the weakness of the formal definition. The word 'merely' marks their freedom as thin.", evidence: "the poor remain merely unrestrained", marks: 2, markCode: "AO2" },
              { reasoning: "The contrast leads directly to the redefinition: liberty must be a choice one can actually make, so the council's policy removes liberty for those who most need it.", evidence: "It has taken away the only choice the others had", marks: 2, markCode: "AO1" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The writer sets the comfortable, who keep their libraries and so lose nothing, against the poor, for whom the closed door removes the only available choice. This shows that the council's idea of liberty, simply not being compelled, protects only those who already have options; for the poor it is being 'merely unrestrained'. The contrast prepares the redefinition of liberty as a choice one can actually make, which turns the council's principle against its own decision.",
            commonErrors: ["Retelling the editorial without addressing how the meaning of the word changes.", "Quoting 'liberty' without showing a shift between the council's sense and the writer's."],
          },
        },
        {
          id: "ela11-u2-key-term-development-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: LIBERTY,
          stem: "Answer all parts of this question about the editorial.",
          parts: [
            { label: "a", prompt: "State the council's meaning of 'liberty' in the first paragraph.", marks: 2 },
            { label: "b", prompt: "Explain how the phrase 'a pleasing argument' prepares the reader to doubt the council.", marks: 4 },
            { label: "c", prompt: "Analyze how the writer's sentence structures in the third paragraph present the new definition of liberty with authority.", marks: 6 },
            { label: "d", prompt: "Evaluate how effectively the writer refines the key term across the whole editorial. Refer to at least three techniques.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracking a key term", statement: "Follow the term from its first use to its last and show how its sense changes." },
              { kind: "technique", name: "Antithesis and definition", statement: "A 'not X, but Y' structure rejects a false meaning while stating a true one." },
              { kind: "skill", name: "Evaluating", statement: "Judge how well techniques work together and note any limits." },
            ],
            steps: [
              { part: "a", reasoning: "Liberty means being free to do as one pleases with one's own time.", evidence: "A man should be at liberty, they said, to spend his own day of rest as he pleases", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "It is understood as an absence of compulsion from public institutions.", evidence: "no public building should compel him to anything", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Pleasing' suggests the argument is attractive but possibly shallow, appealing to the ear more than to reason.", evidence: "It was a pleasing argument", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The following phrase, 'had the sound of principle', implies that the argument only sounds principled while lacking substance, so the reader is primed to look for the flaw.", evidence: "it had the sound of principle", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The antithesis 'not the absence of a rule; it is the presence of a choice' rejects the council's meaning and states the new one in balanced halves.", evidence: "Liberty is not the absence of a rule; it is the presence of a choice", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The present tense and the short declarative form read as a maxim, giving the definition the weight of a general truth.", evidence: "Liberty is not the absence of a rule", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The opening 'Let us then be exact' invites the reader into the writer's reasoning, so the definition seems a joint discovery and not a claim imposed.", evidence: "Let us then be exact about the word", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Technique 1, irony in the first paragraph: the council's words are quoted with a faint skepticism that makes the common meaning seem thin.", evidence: "the sound of principle", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Technique 2, example and contrast: the comfortable and the poor show the concept working differently for each group, making an abstract word concrete.", evidence: "for them, a locked door is not liberty", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Technique 3, redefinition and closing image: the exact definition and the 'empty room' tie the meaning to a picture. Judgment: effective and cumulative, though a skeptic might say it treats the council as acting in bad faith and does not answer whether the reading room should be open at all hours.", evidence: "free only in the way an empty room is free", marks: 2, markCode: "AO1" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) Liberty is the freedom to spend one's own time as one pleases, without public compulsion. (b) 'Pleasing' and 'the sound of principle' suggest an argument that sounds good but may lack substance. (c) The 'not X; it is Y' antithesis, the maxim-like present tense and the inclusive 'Let us then be exact' present the definition with authority. (d) Skeptical framing, the contrast of comfortable and poor, and the redefinition with a closing image together refine 'liberty' from formal freedom to usable choice; the method is effective, though it assumes the council's motives.",
            commonErrors: ["In (a), giving the writer's definition instead of the council's.", "In (c), quoting the definition without commenting on its structure.", "In (d), listing techniques without judging their combined effect."],
          },
        },
      ],
    },
  ],
};
