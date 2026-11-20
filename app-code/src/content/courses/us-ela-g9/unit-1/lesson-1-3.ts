import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const CLOCK: TextExtract = {
  title: "The Clockmaker's Door",
  author: "Written for Akademik Space",
  text: "On the morning the bell above the shop door stopped ringing, Wendell Ash closed the shutters early and did not explain.\n\nThree weeks before, a stranger had left a pocket watch to be repaired. It was an ordinary watch, the kind sold by the thousand, and Wendell had thought nothing of it. Now he laid it on the bench under the lamp and opened the case. Inside, where the mechanism should have been, lay a tiny folded paper. He unfolded it with the tips of his tweezers. Four words, in handwriting he knew as well as his own: Do not wind it.\n\nThe handwriting was his daughter's. Nine years ago she had left for the coast and had never written.\n\nWendell sat very still. Then, slowly, he reached for the winder.\n\nTwenty minutes later the shop was empty, the watch ticking on the bench, the lamp still burning. Outside, the bell above the door began to ring again, although no one had come in.",
};

const TWO_VIEWS: TextExtract = {
  title: "Market Day",
  author: "Written for Akademik Space",
  text: "In the village of Tamarin, where Amara's grandmother still sold dyed cloth every Saturday, a visitor was a kind of weather: something to be noticed, discussed, and prepared for. Amara had grown up knowing that when a stranger stopped at a stall, you offered tea before you offered a price. Bargaining came afterward, and only if the tea had been drunk. To skip the tea was to say, I see your money but not you.\n\nSo when the woman from the city picked up a blue length of cloth and asked, 'How much? I'm in a hurry,' Amara's grandmother smiled and said nothing, and poured two cups.\n\nThe woman checked her watch. 'I really can't stay.'\n\n'Of course,' said Amara's grandmother, and held out a cup. 'Cloth like this takes three months to dye. It can wait three minutes to be bought.'\n\nThe woman hesitated, then took the cup. She was still a little impatient, but Amara noticed her shoulders drop as she sipped. When she left, she carried the cloth, and she did not mention the price she had paid.",
};

export const lesson13: Lesson = {
  id: "ela9-u1-lesson-1-3",
  code: "1-3",
  title: "Structure and Perspective",
  goal: "I CAN analyze how an author's structural choices create mystery, tension, or surprise, and how cultural experience shapes point of view in world literature.",
  standards: ["RL.9-10.5", "RL.9-10.6"],
  vocabulary: [
    { term: "Structure", definition: "How an author arranges a text, including the order of events, the pacing, and the shape of the whole." },
    { term: "Flashback", definition: "A scene or detail that interrupts the present action to show an earlier time." },
    { term: "Pacing", definition: "The speed at which events unfold, controlled by sentence length, detail, and what is included or skipped." },
    { term: "Parallel plots", definition: "Two or more storylines that develop at the same time and often echo or contrast with one another." },
    { term: "Point of view", definition: "The perspective from which a story is told or from which a character sees events." },
    { term: "Cultural experience", definition: "The customs, values, and history of a community that shape how its members see the world." },
  ],
  concepts: [
    {
      id: "ela9-u1-structure-order",
      title: "Structure, order of events, and time",
      skill: "Explain how an author's choices about order, pacing, and time create mystery, tension, or surprise.",
      lesson: {
        sections: [
          {
            heading: "Order and time",
            body: "Authors do not have to tell events as they happened. A **flashback** reveals earlier events at a moment that gives them power, and withholding information creates **mystery** because the reader must ask questions. Jumping ahead, or ending before the outcome, creates suspense. Parallel plots, told in alternating sections, make readers compare two stories and wonder how they will meet. When you analyze structure, always ask: what is revealed, what is held back, and why now?",
          },
          {
            heading: "Pacing and its effect",
            body: "**Pacing** is controlled by how much space the author gives to a moment. Short sentences, brief paragraphs, and a sudden stop speed events up and increase **tension**. Long, detailed passages slow time and let a moment weigh heavily. A **surprise** works best when earlier details quietly prepare for it, so that it feels both unexpected and fair. Link every structural choice to its effect on the reader: curiosity, dread, or shock.",
          },
        ],
        keyFormulas: [
          { name: "Withholding information", statement: "Delaying key details so the reader asks questions, which builds mystery." },
          { name: "Pacing", statement: "The speed of events, shaped by sentence length, detail, and what is skipped or lingered on." },
          { name: "Structure and effect", statement: "A structural choice is analyzed by naming what it does to the reader's expectations." },
        ],
        workedExample: {
          problem: "From 'The Clockmaker's Door': How does the author's structure create mystery and surprise?",
          solution: "The story opens with an unexplained action: Wendell 'closed the shutters early and did not explain'. The narrator withholds the reason, so the reader immediately asks why. The next paragraph moves back in time, three weeks, a flashback that supplies the watch without yet revealing why it matters, extending the mystery. The note, 'Do not wind it', is held until the third paragraph and its handwriting is only then identified as his daughter's, which turns mystery into emotion. The pacing then tightens: 'Wendell sat very still. Then, slowly, he reached for the winder.' Short sentences stretch the moment before the choice. The ending skips the result entirely, 'Twenty minutes later the shop was empty', so the surprise is unexplained, and the bell ringing 'although no one had come in' leaves the reader with unresolved questions.",
        },
      },
      questions: [
        {
          id: "ela9-u1-structure-order-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CLOCK,
          stem: "The second paragraph begins 'Three weeks before'. What is the effect of this structural choice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It gives background through a flashback that adds to the mystery of the closed shop." },
              { id: "b", text: "It shows the story is told in a straight line from beginning to end." },
              { id: "c", text: "It introduces a second plot with new characters." },
              { id: "d", text: "It reveals the ending of the story." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Flashback", statement: "A flashback interrupts the present to show earlier events, often to explain or deepen a mystery." }],
            steps: [{ reasoning: "The story returns to an earlier time to introduce the watch, which explains part of the opening while keeping the full reason hidden.", evidence: "Three weeks before", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)**. The flashback supplies the watch without revealing why it matters, deepening the mystery. The story is not told in a straight line, no new characters appear, and the ending is not revealed.",
            commonErrors: ["Choosing (b) because the story seems to continue straight on."],
          },
        },
        {
          id: "ela9-u1-structure-order-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CLOCK,
          stem: "Explain how the author creates suspense in the lines 'Wendell sat very still. Then, slowly, he reached for the winder.' Refer to sentence length and pacing.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pacing", statement: "Short sentences slow the moment and focus attention, building tension before a decision." }],
            steps: [
              { reasoning: "Short, simple sentences isolate the moment and make it feel suspended, so the reader waits.", evidence: "Wendell sat very still.", marks: 1, markCode: "AO2" },
              { reasoning: "'Then, slowly' stretches time and shows deliberate choice despite the warning in the note.", evidence: "Then, slowly, he reached for the winder.", marks: 1, markCode: "AO2" },
              { reasoning: "The reader knows the note said not to wind it, so the action creates dread about the consequence.", evidence: "Do not wind it", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The short sentences, 'Wendell sat very still', slow time and focus on one moment. 'Then, slowly' stretches the action, and because the note said 'Do not wind it', the reader dreads what will happen.",
            commonErrors: ["Describing the action without explaining the effect.", "Ignoring the earlier warning."],
          },
        },
        {
          id: "ela9-u1-structure-order-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CLOCK,
          stem: "Analyze how the author's choices about order and information create mystery and surprise in the passage. Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Withholding", statement: "Delaying key information turns a story into a puzzle the reader wants to solve." },
              { kind: "technique", name: "Ending", statement: "Stopping before an outcome leaves questions and a lasting effect." },
            ],
            steps: [
              { reasoning: "The opening gives an action without a reason, so the reader wonders what happened.", evidence: "did not explain", marks: 2, markCode: "AO2" },
              { reasoning: "The note and the handwriting are revealed late, so the discovery lands with emotional force.", evidence: "handwriting he knew as well as his own", marks: 2, markCode: "AO2" },
              { reasoning: "The history of the daughter is given in two short sentences, compressing nine years and suggesting a long hurt.", evidence: "had never written", marks: 2, markCode: "AO2" },
              { reasoning: "The ending skips the outcome and ends on an unexplained event, so the surprise leaves the reader asking questions.", evidence: "although no one had come in", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8),
            finalAnswer: "The author builds mystery by withholding. The story opens with Wendell closing the shutters and he 'did not explain', so the reason is a question. The note is delayed until the third paragraph, and then 'handwriting he knew as well as his own' is revealed to be his daughter's, turning a puzzle into emotion. Nine years of silence are compressed into 'had never written'. The ending skips ahead twenty minutes and finishes on a bell that rings 'although no one had come in', a surprise left unexplained.",
            commonErrors: ["Retelling the plot without discussing structure.", "Not linking choices to reader effect."],
          },
        },
        {
          id: "ela9-u1-structure-order-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: CLOCK,
          stem: "Answer all parts of this question about 'The Clockmaker's Door'.",
          parts: [
            { label: "a", prompt: "Identify two details in the first two paragraphs that the author leaves unexplained.", marks: 2 },
            { label: "b", prompt: "How does the author use pacing in the fourth and fifth paragraphs to increase tension?", marks: 6 },
            { label: "c", prompt: "The final paragraph skips forward and gives no explanation. Evaluate how effective this structural choice is in creating surprise and mystery. Use thorough textual evidence from across the passage.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pacing and tension", statement: "Short sentences and delayed action make a moment feel heavy." },
              { kind: "skill", name: "Evaluating structure", statement: "Judge how well a structural choice achieves its effect and support the judgment." },
            ],
            steps: [
              { part: "a", reasoning: "The reason for closing the shop is not given.", evidence: "did not explain", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "The watch is introduced as ordinary, but its importance is not yet clear.", evidence: "an ordinary watch", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The sentence that identifies the note's writer is short and blunt, giving the discovery impact.", evidence: "The handwriting was his daughter's.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The next sentence compresses nine years of history, adding emotional weight with few words.", evidence: "had never written", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The pause before the decision, with the stillness and 'slowly', raises tension.", evidence: "Wendell sat very still.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The opening unexplained action prepares the reader to expect an answer.", evidence: "did not explain", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The time skip withholds the consequence of winding the watch, so the central question remains open.", evidence: "Twenty minutes later", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The empty shop and ticking watch create an eerie, ambiguous image.", evidence: "the shop was empty, the watch ticking on the bench", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The bell, silent at the start and ringing at the end, forms a circular structure that frames the story.", evidence: "the bell above the door began to ring again", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final unexplained detail creates surprise because no one entered.", evidence: "although no one had come in", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a judgment: effective because early gaps and the warning prepare the reader, though some may find it unsatisfying.", marks: 2, markCode: "AO2" },
            ],
            levels: [...levels(6, "b"), ...levels(12, "c")],
            finalAnswer: "(a) He 'did not explain' closing the shop; the watch is 'an ordinary watch' with no clear importance. (b) 'The handwriting was his daughter's' is blunt, followed by the compressed 'had never written', adding weight. 'Wendell sat very still' then slows the moment, raising tension before he acts. (c) The skip forward is highly effective. The opening raised a question with 'did not explain', and the warning 'Do not wind it' promised consequence. Skipping 'Twenty minutes later' withholds that consequence, leaving the 'empty' shop and 'ticking' watch eerie. The bell, which stopped at the start, rings again 'although no one had come in', framing the story in a circle. Some readers may find the lack of explanation frustrating, but it fits a mystery.",
            commonErrors: ["In (a), choosing details that are explained.", "In (b), discussing language instead of pacing.", "In (c), describing the ending without evaluating its effect."],
          },
        },
      ],
    },
    {
      id: "ela9-u1-cultural-point-of-view",
      title: "Cultural experience and point of view",
      skill: "Explain how a character's or narrator's cultural experience shapes point of view in a work of world literature.",
      lesson: {
        sections: [
          {
            heading: "Culture shapes how people see",
            body: "A person's **cultural experience** includes the customs, values, and history they grow up with. These shape what they notice, what they find polite or rude, and what they value. In world literature, writers often show two cultural perspectives meeting, such as insiders and outsiders, and allow the reader to see a familiar moment in a new way. To analyze point of view, ask: whose perspective is this, what values does it rest on, and how does the text show it?",
          },
          {
            heading: "Reading the cultural lens",
            body: "Look for details of **customs** (rituals of greeting or exchange), **values** (what is treated as important, such as hospitality or patience), and **contrast** (a character who behaves differently). Notice whether the narrator is inside or outside the culture, and whether the text judges one view as better. Support your analysis with evidence of the custom and its meaning, and avoid stereotypes: the text shows one community's practice, not a rule for everyone.",
          },
        ],
        keyFormulas: [
          { name: "Cultural lens", statement: "The set of customs and values through which a character or narrator interprets events." },
          { name: "Insider and outsider", statement: "A contrast between a character who knows a culture's practices and one who does not, which reveals the values." },
          { name: "Point of view in world literature", statement: "How a writer from or about a particular culture presents events through that culture's values." },
        ],
        workedExample: {
          problem: "From 'Market Day': How does Amara's grandmother's cultural experience shape her point of view?",
          solution: "In Tamarin, hospitality comes before commerce. The text explains the custom directly: 'you offered tea before you offered a price' and to skip it was to say 'I see your money but not you'. For the grandmother, the tea is respect for the person, so the visitor's hurry is not a reason to hurry. She stays calm, 'smiled and said nothing, and poured two cups', and reframes time itself: 'Cloth like this takes three months to dye. It can wait three minutes to be bought.' Her view values patience and craft over speed. The city woman's contrasting view, 'I'm in a hurry', shows a different culture of time. The ending suggests the grandmother's way works, since the woman's 'shoulders drop', but the text still presents the woman as only 'a little impatient', not foolish.",
        },
      },
      questions: [
        {
          id: "ela9-u1-cultural-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TWO_VIEWS,
          stem: "According to the custom in Tamarin, what does skipping the tea communicate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The seller is too poor to serve tea." },
              { id: "b", text: "The seller values the buyer's money but not the buyer as a person." },
              { id: "c", text: "The seller wants a lower price." },
              { id: "d", text: "The seller does not want a visitor to stay." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Cultural custom", statement: "A custom carries a value; understanding the value explains the behavior." }],
            steps: [{ reasoning: "The text states what omitting the tea means: the buyer is seen only as money.", evidence: "I see your money but not you", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. The narrator says skipping the tea means 'I see your money but not you'. The other choices are not suggested.",
            commonErrors: ["Choosing (d) because tea seems to invite someone to stay."],
          },
        },
        {
          id: "ela9-u1-cultural-point-of-view-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TWO_VIEWS,
          stem: "Explain how the city woman's point of view differs from that of Amara's grandmother. Support your answer with two details.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Contrasting perspectives", statement: "Two characters with different cultural experiences reveal different values by reacting to the same event." }],
            steps: [
              { reasoning: "The city woman treats time and price as the priority.", evidence: "How much? I'm in a hurry", marks: 1, markCode: "AO1" },
              { reasoning: "The grandmother puts hospitality and patience first, offering tea before business.", evidence: "poured two cups", marks: 1, markCode: "AO1" },
              { reasoning: "Explains the difference: speed and efficiency versus relationships and craft.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "The city woman values speed, asking 'How much? I'm in a hurry'. The grandmother values the relationship and the craft, so she 'poured two cups' before any bargaining. One culture measures time in efficiency, the other in respect.",
            commonErrors: ["Saying one is rude without referring to values.", "Giving only one perspective."],
          },
        },
        {
          id: "ela9-u1-cultural-point-of-view-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TWO_VIEWS,
          stem: "How does the author use Amara's perspective as a narrator to present the cultural values of Tamarin? Use at least three pieces of textual evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Insider narration", statement: "An insider narrator explains customs as natural and meaningful rather than strange." },
              { kind: "context", name: "Values", statement: "Customs express values such as hospitality, patience, and respect for craft." },
            ],
            steps: [
              { reasoning: "The opening metaphor treats visitors as weather, an insider's affectionate image showing the village notices and prepares for guests.", evidence: "a visitor was a kind of weather", marks: 2, markCode: "AO1" },
              { reasoning: "Amara explains the custom as common knowledge, presenting it as a rule of respect.", evidence: "you offered tea before you offered a price", marks: 2, markCode: "AO1" },
              { reasoning: "She notices the woman's body language, a sign that the custom works on feeling.", evidence: "her shoulders drop as she sipped", marks: 2, markCode: "AO1" },
              { reasoning: "The narrator does not mock the visitor, and describes her as only 'a little impatient', presenting a respectful meeting of values.", evidence: "still a little impatient", marks: 2, markCode: "AO1" },
            ],
            levels: levels(8),
            finalAnswer: "Amara, as an insider, presents the village's values as natural. She calls a visitor 'a kind of weather', showing welcome as routine. She explains the rule plainly: 'you offered tea before you offered a price', so hospitality precedes trade. She watches the woman's 'shoulders drop as she sipped', suggesting the custom softens hurry. Yet she calls her 'still a little impatient', not foolish, so the passage shows two ways of living meeting without condemnation.",
            commonErrors: ["Retelling the market scene.", "Generalizing about all rural or city people."],
          },
        },
        {
          id: "ela9-u1-cultural-point-of-view-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: TWO_VIEWS,
          stem: "Answer all parts of this question about 'Market Day'.",
          parts: [
            { label: "a", prompt: "Identify two details that show the grandmother's calm response to the woman's hurry.", marks: 2 },
            { label: "b", prompt: "What does the grandmother mean by 'It can wait three minutes to be bought'? Explain what it shows about her values.", marks: 6 },
            { label: "c", prompt: "Analyze how the passage uses cultural experience and point of view to explore the meeting of two different values. Use thorough textual evidence.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural values", statement: "Customs and sayings express what a community considers important." },
              { kind: "skill", name: "Analysis of perspective", statement: "Connect evidence about customs to the point of view they shape." },
            ],
            steps: [
              { part: "a", reasoning: "She responds with a smile and silence, not argument.", evidence: "smiled and said nothing", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She pours tea instead of naming a price.", evidence: "poured two cups", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "She compares the long labor of making the cloth to a short wait, so craft deserves time and respect.", evidence: "takes three months to dye", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "She gently refuses the demand for speed, using a courteous tone, which values relationships over efficiency.", evidence: "Of course", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The saying reframes the visit as an exchange between people, not only a sale, reflecting her culture's priority on patience.", evidence: "It can wait three minutes", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The custom is explained as shared knowledge, showing cultural values as the narrator's norm.", evidence: "you offered tea before you offered a price", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The visitor's impatience provides a contrasting viewpoint, giving the custom something to meet.", evidence: "I'm in a hurry", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The grandmother's reply links time to craft, expressing her value.", evidence: "three months to dye", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The resolution shows the woman softening, suggesting the culture's way can change her view without force.", evidence: "her shoulders drop", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "The final detail, that she does not mention the price, leaves the exchange as respect between people rather than a transaction, completing the theme.", evidence: "she did not mention the price she had paid", marks: 2, markCode: "AO1" },
            ],
            levels: [...levels(6, "b"), ...levels(10, "c")],
            finalAnswer: "(a) She 'smiled and said nothing' and 'poured two cups'. (b) She means that careful craft deserves time: 'three months to dye' versus three minutes. She declines the hurry politely ('Of course'), showing she values patience and the relationship over speed. (c) Through Amara, the insider, the custom is plain: 'you offered tea before you offered a price'. The woman's 'I'm in a hurry' supplies a contrasting view, and the grandmother links time to craft. When the woman's 'shoulders drop' and she leaves without mentioning the price, the exchange has become respect between people. The passage shows two values meeting gently without declaring one superior.",
            commonErrors: ["In (a), choosing the woman's actions.", "In (b), paraphrasing without values.", "In (c), describing customs without linking them to point of view."],
          },
        },
      ],
    },
  ],
};
