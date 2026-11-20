import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const BEES: TextExtract = {
  title: "The Quiet Work of Bees",
  author: "Written for Akademik Space",
  text: "Bees are far more important than their size suggests. Roughly one out of every three bites of food people eat depends on pollination, the transfer of pollen from one flower to another so that plants can make seeds and fruit. Wild and managed bees do most of that work. Almonds, apples, blueberries, and squash all rely on them. Without bees, grocery stores would look very different, and many of the foods that remain would cost more.\n\nFor several decades, beekeepers have reported alarming losses. Each winter, many colonies fail to survive.",
};

const LIBRARY: TextExtract = {
  title: "Why the Library Must Stay Open on Sundays",
  author: "Written for Akademik Space",
  text: "When our town council voted last month to close the public library on Sundays, members argued that few people use it that day. I disagree. Having volunteered at the front desk for three years, I can say that Sunday is the one day when working families have time to visit.\n\nCritics point out that the closure would save the town about nine thousand dollars a year, and I do not dismiss that figure. A town must live within its budget. But a library is not an ordinary expense. It is the only place in our community where a student without a home computer can finish a school project, and where a job seeker can print a resume for free. Sacrificing those services to save a small sum is a poor bargain.\n\nThe council should look for savings elsewhere, and I urge every resident to attend Thursday's meeting and say so.",
};

const SPEEDING: TextExtract = {
  title: "A Measured Look at School Zone Cameras",
  author: "Written for Akademik Space",
  text: "Speed cameras in school zones have become common across the country. Supporters believe they protect children; opponents see a way to raise money. The evidence suggests both camps have a point.\n\nIn one study of twelve cities, average speeds near schools dropped by about a fifth after cameras were installed. That change matters, because a child struck by a car traveling twenty miles per hour is far more likely to survive than one struck at thirty-five. Yet critics are not wrong to ask questions. In some cities, tickets issued by the cameras bring in millions of dollars, and a few of those cities have shortened yellow lights or placed cameras away from schools, which suggests profit rather than safety.\n\nThe fairest conclusion is that cameras can work, but only when their locations and purpose are public and their income is directed to safety.",
};

export const lesson22: Lesson = {
  id: "ela8-u2-lesson-2-2",
  code: "2-2",
  title: "Structure and Point of View",
  goal: "I CAN analyze how a paragraph and its key sentences shape meaning, and explain how an author's point of view responds to conflicting viewpoints.",
  standards: ["RI.8.5", "RI.8.6"],
  vocabulary: [
    { term: "Topic sentence", definition: "A sentence, often first, that states the main point of a paragraph." },
    { term: "Transition", definition: "A word or phrase that links ideas and shows how they relate." },
    { term: "Concession", definition: "An admission that an opposing point has some truth." },
    { term: "Rebuttal", definition: "The author's reply to an opposing viewpoint." },
    { term: "Point of view", definition: "The author's attitude or position on a topic." },
    { term: "Conflicting viewpoint", definition: "A position that disagrees with the author's own." },
  ],
  concepts: [
    {
      id: "ela8-u2-paragraph-structure",
      title: "Paragraph structure and key sentences",
      skill: "Analyze the structure of a specific paragraph and explain how a key sentence contributes to the whole text and to its ideas.",
      lesson: {
        sections: [
          {
            heading: "How a paragraph is built",
            body: "A well-built paragraph moves with a plan. It usually opens with a **topic sentence** that states the point, then adds supporting sentences with facts, examples, or explanation, and may close with a sentence that sums up or points to what comes next. Ask what job each sentence does: to introduce, to prove, to illustrate, to qualify, or to conclude.",
          },
          {
            heading: "Key sentences and the larger text",
            body: "A **key sentence** is one that carries unusual weight, such as a claim, a turning point, or a statement of the central idea. To analyze it, explain two things: its role inside the paragraph and its role in the whole text. A sentence that begins with 'but' or 'yet' often marks a turn. A short sentence at the end of a paragraph can shift the tone and prepare the reader for what follows.",
          },
        ],
        keyFormulas: [
          { name: "Topic sentence", statement: "The sentence that states a paragraph's main point; the rest of the paragraph supports it." },
          { name: "Key sentence", statement: "A sentence that carries a claim, a turn, or the central idea, and shapes how the reader understands what follows." },
          { name: "Transition", statement: "A word or phrase such as 'yet' or 'for example' that shows how ideas connect." },
        ],
        workedExample: {
          problem: "What is the role of the final sentence of 'The Quiet Work of Bees': 'Each winter, many colonies fail to survive.'? (3 marks)",
          solution: "The first paragraph praises bees and explains why they matter. This short final sentence changes direction by introducing a problem: bees are dying. Placed after a long paragraph of importance and benefit, it creates a contrast that makes the loss feel serious, and it prepares the reader for the rest of the text, which would explore the causes and effects of the losses. Its role is therefore to turn the text from explanation to concern.",
        },
      },
      questions: [
        {
          id: "ela8-u2-paragraph-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: BEES,
          stem: "What is the function of the first sentence of 'The Quiet Work of Bees'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It states the main point of the paragraph, which the rest of the paragraph supports." },
              { id: "b", text: "It gives a statistic about almond farms." },
              { id: "c", text: "It concludes the paragraph by summarizing the evidence." },
              { id: "d", text: "It introduces an opposing viewpoint." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Topic sentence", statement: "A topic sentence states the main point that the rest of the paragraph supports." }],
            steps: [{ reasoning: "The opening sentence makes the claim that bees are important; everything after supports it.", evidence: "Bees are far more important than their size suggests", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** It is the topic sentence. The statistic and examples that follow are supporting details.",
            commonErrors: ["Choosing (c), mistaking the first sentence for a conclusion."],
          },
        },
        {
          id: "ela8-u2-paragraph-structure-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: BEES,
          stem: "How does the sentence 'Without bees, grocery stores would look very different, and many of the foods that remain would cost more.' contribute to the paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It introduces a new topic unrelated to bees." },
              { id: "b", text: "It states a fact about almond production." },
              { id: "c", text: "It shows the effect on shoppers, making the importance of bees personal and concrete." },
              { id: "d", text: "It defines the word pollination." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Sentence function", statement: "Explain what a sentence adds to the paragraph's point." }],
            steps: [
              { reasoning: "The sentence applies the claim to something readers know, the grocery store.", evidence: "grocery stores would look very different", marks: 1, markCode: "AO2" },
              { reasoning: "It ends the paragraph with a consequence, reinforcing the point that bees matter.", evidence: "many of the foods that remain would cost more", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(c)** The sentence closes the paragraph by showing what losing bees would mean for ordinary shoppers. The definition of pollination appears earlier in the paragraph.",
            commonErrors: ["Choosing (d), which describes an earlier sentence."],
          },
        },
        {
          id: "ela8-u2-paragraph-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BEES,
          stem: "Analyze how the structure of the first paragraph develops the author's point. Refer to at least two sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Paragraph analysis", statement: "Explain what each sentence does and how the sentences build the point." },
              { kind: "technique", name: "General to specific", statement: "A claim followed by evidence and examples makes the point convincing." },
            ],
            steps: [
              { reasoning: "The opening sentence makes a claim that surprises the reader by contrasting size with importance.", evidence: "far more important than their size suggests", marks: 2, markCode: "AO2" },
              { reasoning: "A statistic and a definition provide evidence, moving from claim to proof.", evidence: "one out of every three bites of food", marks: 2, markCode: "AO2" },
              { reasoning: "Specific examples and a closing consequence make the importance concrete and personal.", evidence: "Almonds, apples, blueberries, and squash", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The paragraph moves from a general claim to specific proof. The first sentence says bees are 'far more important than their size suggests', which hooks the reader. Next, the statistic about 'one out of every three bites of food' and the definition of pollination give evidence, and the list of foods makes it concrete. The last sentence describes the grocery store changing, which turns the information into a consequence that matters to the reader.",
            commonErrors: ["Retelling the content of the paragraph without commenting on how it is organized.", "Writing about the second paragraph, which the question does not ask about."],
          },
        },
        {
          id: "ela8-u2-paragraph-structure-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: BEES,
          stem: "Answer all parts of this question about 'The Quiet Work of Bees'.",
          parts: [
            { label: "a", prompt: "Write down two foods that the author says depend on bees.", marks: 2 },
            { label: "b", prompt: "Explain the effect of the author defining the word 'pollination' in the first paragraph.", marks: 4 },
            { label: "c", prompt: "Analyze the role of the second paragraph, 'For several decades, beekeepers have reported alarming losses. Each winter, many colonies fail to survive.', in the structure of the whole text.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Structure of the whole", statement: "A short paragraph can mark a turning point for the entire text." },
              { kind: "technique", name: "Transition and contrast", statement: "A change in tone between paragraphs signals a shift in focus." },
            ],
            steps: [
              { part: "a", reasoning: "Almonds are named as a food that relies on bees.", evidence: "Almonds", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Any second correct food: apples, blueberries, or squash.", evidence: "apples", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The definition makes a technical term accessible to a general audience.", evidence: "the transfer of pollen from one flower to another", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It helps the reader understand why bees matter, building the link between bees and food.", evidence: "so that plants can make seeds and fruit", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The paragraph is short and blunt, which contrasts with the long, confident first paragraph.", evidence: "Each winter, many colonies fail to survive", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "It turns the text from explaining importance to introducing a problem, using the word 'alarming' to signal concern.", evidence: "alarming losses", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Because the first paragraph established how much depends on bees, the losses feel urgent; the structure moves from importance to threat.", evidence: "Without bees, grocery stores would look very different", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer: "(a) Almonds and apples (accept blueberries or squash). (b) The definition makes a technical word clear, and the phrase 'so that plants can make seeds and fruit' links bees directly to food, helping the reader see why they matter. (c) The short second paragraph is a turning point. After a long paragraph on importance, its blunt sentences and the word 'alarming' shift the text to a problem, and the first paragraph's argument about importance is what makes the threat feel serious.",
            commonErrors: ["In (c), saying only that the paragraph is short, without explaining its effect.", "In (b), repeating the definition without commenting on why the author included it."],
          },
        },
      ],
    },
    {
      id: "ela8-u2-point-of-view",
      title: "Point of view and conflicting viewpoints",
      skill: "Determine an author's point of view and analyze how the author acknowledges and responds to conflicting evidence or viewpoints.",
      lesson: {
        sections: [
          {
            heading: "Finding the author's point of view",
            body: "An author's **point of view** is a position on the topic, shown through word choice, the details selected, and the claims that are emphasized. Pay attention to **connotation**, the feeling attached to a word: 'a drain on the treasury' sounds more negative than 'a cost'. Also notice what is left out. A neutral writer presents several sides evenly; a writer with a strong view usually gives more space to one side.",
          },
          {
            heading: "Acknowledging and responding",
            body: "Strong authors do not ignore people who disagree. They **concede** (admit) a point that is fair, then give a **rebuttal** (a reply) that explains why their position still holds. Look for phrases such as 'critics point out', 'it is true that', and 'yet'. Ask how the author answers: with evidence, with a comparison of costs and benefits, or with a question about priorities?",
          },
        ],
        keyFormulas: [
          { name: "Point of view", statement: "The author's position on a topic, revealed by word choice, selected details, and emphasis." },
          { name: "Concession", statement: "An admission that an opposing viewpoint has some merit." },
          { name: "Rebuttal", statement: "A reasoned reply that explains why the author's position still stands." },
        ],
        workedExample: {
          problem: "How does the author of 'Why the Library Must Stay Open on Sundays' respond to the council's budget argument? (3 marks)",
          solution: "The author first concedes the point: 'I do not dismiss that figure. A town must live within its budget.' This shows fairness. The author then offers a rebuttal that a library is 'not an ordinary expense' because it provides services that students and job seekers cannot get elsewhere. Calling the savings 'a small sum' and the trade 'a poor bargain' shows the author's firm point of view while appearing reasonable.",
        },
      },
      questions: [
        {
          id: "ela8-u2-point-of-view-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LIBRARY,
          stem: "What is the author's point of view about the council's decision?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author supports closing the library on Sundays." },
              { id: "b", text: "The author opposes the closure and wants it reversed." },
              { id: "c", text: "The author has no opinion and reports only the facts." },
              { id: "d", text: "The author thinks the library should close on weekdays instead." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Point of view", statement: "The author's position is shown by direct statements and word choice." }],
            steps: [{ reasoning: "The author states disagreement and urges readers to oppose the council.", evidence: "I disagree", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The author says 'I disagree' and urges residents to attend the meeting to oppose the closure.",
            commonErrors: ["Choosing (c) because the author mentions the council's argument fairly."],
          },
        },
        {
          id: "ela8-u2-point-of-view-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LIBRARY,
          stem: "In paragraph 2, the author writes: 'I do not dismiss that figure. A town must live within its budget.' What is the purpose of these sentences?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To admit that the opposing view has merit, which makes the author seem fair" },
              { id: "b", text: "To show that the author has changed position" },
              { id: "c", text: "To argue that the budget is not important" },
              { id: "d", text: "To criticize the council for poor planning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Concession", statement: "Admitting a fair point builds credibility before the rebuttal." }],
            steps: [
              { reasoning: "The author accepts that the savings are real and the budget matters.", evidence: "A town must live within its budget", marks: 1, markCode: "AO2" },
              { reasoning: "This makes the author appear reasonable, which prepares for the 'But' that follows.", evidence: "But a library is not an ordinary expense", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(a)** The author concedes the budget point to seem fair, then rebuts it with the word 'But'. The author does not change position or dismiss the budget.",
            commonErrors: ["Choosing (b), reading the concession as a change of mind."],
          },
        },
        {
          id: "ela8-u2-point-of-view-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SPEEDING,
          stem: "The author of 'A Measured Look at School Zone Cameras' presents two conflicting viewpoints. Analyze how the author acknowledges both viewpoints and reveals a point of view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Balanced presentation", statement: "An author who gives each side credit and evidence signals fairness." },
              { kind: "skill", name: "Point of view", statement: "Conclusions and word choice reveal where the author stands." },
            ],
            steps: [
              { reasoning: "The author names both camps at the start and says both have a point, signaling a balanced stance.", evidence: "both camps have a point", marks: 2, markCode: "AO2" },
              { reasoning: "Evidence supports each side: a drop in speeds for supporters and shortened yellow lights for critics.", evidence: "critics are not wrong to ask questions", marks: 2, markCode: "AO2" },
              { reasoning: "The conclusion sets conditions, showing a moderate position that cameras can work if they are used openly for safety.", evidence: "cameras can work, but only when", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The author acknowledges both sides at the start by saying 'both camps have a point'. Supporters get a study showing speeds fell, and critics get evidence that some cities profit from the cameras. The author's point of view is moderate: the conclusion that cameras 'can work, but only when' they are public and their income goes to safety supports neither side completely.",
            commonErrors: ["Claiming the author supports only one side.", "Summarizing the arguments without explaining how the author responds to them."],
          },
        },
        {
          id: "ela8-u2-point-of-view-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: LIBRARY,
          stem: "Answer all parts of this question about 'Why the Library Must Stay Open on Sundays'.",
          parts: [
            { label: "a", prompt: "Write down two reasons the author gives for keeping the library open on Sundays.", marks: 2 },
            { label: "b", prompt: "Explain how the first paragraph establishes the author's credibility.", marks: 4 },
            { label: "c", prompt: "Analyze how the author acknowledges and responds to the council's viewpoint. Refer to the author's word choice in your answer.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Concession and rebuttal", statement: "Admit a fair point, then answer it with a stronger reason." },
              { kind: "technique", name: "Connotation", statement: "Word choice carries attitude, such as 'poor bargain' and 'sacrificing'." },
              { kind: "skill", name: "Credibility", statement: "Personal experience can make a viewpoint more trustworthy." },
            ],
            steps: [
              { part: "a", reasoning: "Sunday is the day when working families have time to visit.", evidence: "the one day when working families have time", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The library gives students without computers and job seekers essential services.", evidence: "a student without a home computer", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The author states direct experience of three years as a volunteer, which suggests firsthand knowledge.", evidence: "volunteered at the front desk for three years", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "This experience makes the claim about Sunday visitors more believable than the council's general argument.", evidence: "I can say that Sunday is the one day", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The author concedes the cost savings and the need to budget, which shows fairness.", evidence: "I do not dismiss that figure", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The pivot 'But' introduces the rebuttal that a library is not an ordinary expense.", evidence: "But a library is not an ordinary expense", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Word choice such as 'Sacrificing' and 'poor bargain' makes the council's choice sound careless and reveals a strong point of view.", evidence: "Sacrificing those services to save a small sum is a poor bargain", marks: 2, markCode: "AO2" },
            ],
            levels: rubric(6, [5, 3, 2], "c"),
            finalAnswer: "(a) Sunday is the only day working families can visit; students without computers and job seekers depend on the library. (b) The author's three years as a volunteer at the front desk show firsthand knowledge of who visits on Sundays, so the claim carries more weight. (c) The author concedes that the savings are real ('I do not dismiss that figure'), which appears fair, then rebuts with 'But a library is not an ordinary expense'. Words such as 'sacrificing' and 'poor bargain' reveal a firm point of view and make the closure sound like a loss.",
            commonErrors: ["In (c), saying the author ignores the other side.", "In (b), saying only that the author has experience without explaining the effect on the reader."],
          },
        },
      ],
    },
  ],
};
