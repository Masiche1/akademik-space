import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const MEMOIR: TextExtract = {
  title: "The Borrowed Bicycle",
  author: "Written for Akademik Space",
  source: "A fictional personal essay",
  text: "The summer I turned twelve, I learned to ride on a bicycle that did not belong to me. It was Mr. Okafor's, a heavy green thing with a bell that rang whenever it hit a bump, and he lent it to me every morning without being asked, as though lending were simply what bicycles did.\n\nI fell eleven times. I know because I counted, and because my knees kept the record for weeks afterward. On the twelfth try, nothing happened. The road did not tilt, the handlebars did not shake, and I was suddenly moving, the bell chiming over every crack in the pavement as if the whole street were applauding.\n\nI have thought about that summer often. At the time I believed I had learned to balance. Now I think I learned something else: that you can only fall so many times before someone's patience becomes part of how you stay upright. Mr. Okafor never once said 'be careful.' He only stood at the end of his driveway with his arms folded and waited, and I rode toward him, and then past him, and then home.\n\nWe talk, today, about independence as if it were something we build alone. I no longer believe it. Whatever I have managed to do on my own, a green bicycle and a man with folded arms were somewhere underneath it.",
};

const SATIRE: TextExtract = {
  title: "A Modest Proposal for the Abolition of Stairs",
  author: "Written for Akademik Space",
  source: "A fictional satirical column",
  text: "It has long been obvious to any thinking person that the staircase is the most dangerous invention in human history. Each year, thousands of citizens are injured on stairs, and yet our leaders, apparently content to watch their constituents tumble, have done nothing.\n\nI therefore propose that all stairs be eliminated at once. Buildings of more than one floor will be replaced by a single, very wide floor. The city of Marlow, which has only forty acres of available land, will simply expand into the sea, a project that engineers assure me is 'technically possible, in theory, someday.'\n\nCritics will say that this is expensive. I reply that safety has no price, although I have prepared a budget for it, and it is slightly larger than the national economy. Others will say that people enjoy a view from an upper floor. This is a sentimental objection. A person who is truly committed to safety does not need to see anything from higher than ground level.\n\nIn the unlikely event that I am wrong, I can be reached at the foot of any staircase, where I will be lying down for the time being, having just fallen over a slightly uneven step.",
};

export const lesson23: Lesson = {
  id: "ela10-u2-lesson-2-3",
  code: "2-3",
  title: "Literary Nonfiction",
  goal: "I CAN analyze how memoir and personal essay use narrative choices to serve an argument or reflection, and how satire and irony reveal an author's purpose.",
  standards: ["RI.9-10.3", "RI.9-10.6"],
  vocabulary: [
    { term: "Memoir", definition: "A true account of events in the author's own life, told from the author's point of view and often shaped by later reflection." },
    { term: "Personal essay", definition: "A short nonfiction piece in which an author reflects on a personal experience in order to explore a broader idea." },
    { term: "Reflection", definition: "The author's thoughtful commentary on the meaning of an experience, usually from a later point in time." },
    { term: "Satire", definition: "The use of humor, exaggeration, or irony to expose and criticize foolishness or vice in people, ideas, or institutions." },
    { term: "Verbal irony", definition: "Saying one thing while meaning another, often the opposite, so the reader sees the gap between the statement and the truth." },
    { term: "Deadpan", definition: "A serious, matter-of-fact tone used to deliver absurd or humorous content." },
  ],
  concepts: [
    {
      id: "ela10-u2-memoir-essay",
      title: "Memoir and personal essay",
      skill: "Analyze how narrative choices, such as anecdote, shifts in time, and reflection, serve an author's larger idea in memoir and personal essays.",
      lesson: {
        sections: [
          {
            heading: "Story in the service of an idea",
            body: "A memoir or personal essay is not just a story of 'what happened'. The author chooses a few moments and details because they lead to an insight. Ask two questions: what is the **anecdote** (the story), and what is the **reflection** (what the author now makes of it)? The distance between the young self who lived the event and the older self who tells it is often where the meaning lies.",
          },
          {
            heading: "Narrative choices to notice",
            body: "Look at how the author **sequences** events (chronological or looping back), which details are specific enough to feel real (a green bicycle, a ringing bell), how the **voice** shifts from storytelling to commentary, and how the ending widens from a single memory to a general truth. Ask how each choice supports the author's point of view and persuades or moves the reader.",
          },
        ],
        keyFormulas: [
          { name: "Anecdote and reflection", statement: "Anecdote tells what happened; reflection explains what it means." },
          { name: "Shift in time", statement: "A move from past events to present commentary signals the author's mature perspective." },
          { name: "Widening", statement: "Memoirists often end by connecting one memory to a universal idea." },
        ],
        workedExample: {
          problem: "How does the writer of 'The Borrowed Bicycle' use the final two paragraphs to develop an idea? (4 marks)",
          solution: "In the third paragraph the writer shifts from storytelling to reflection, correcting a youthful belief ('I believed I had learned to balance') with a mature insight: that 'someone's patience becomes part of how you stay upright'. The silent image of Mr. Okafor with 'his arms folded' makes that idea concrete. The final paragraph widens from the personal to the general: 'We talk, today, about independence as if it were something we build alone. I no longer believe it.' The writer therefore uses a small memory to argue that independence depends on other people's support.",
        },
      },
      questions: [
        {
          id: "ela10-u2-memoir-essay-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MEMOIR,
          stem: "Which sentence best states the idea the writer reaches by reflecting on the bicycle story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Learning to ride requires expensive equipment." },
              { id: "b", text: "Independence depends on the quiet support of other people." },
              { id: "c", text: "Children should avoid falling when they learn." },
              { id: "d", text: "Neighbors should lend things more carefully." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Reflection", statement: "The reflection states the broader meaning the author finds in a past event." }],
            steps: [{ reasoning: "The final paragraph states that independence is not built alone.", evidence: "a green bicycle and a man with folded arms were somewhere underneath it", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The other choices focus on literal details of the story rather than the writer's insight.",
            commonErrors: ["Choosing a literal lesson (such as (c)) instead of the writer's reflective idea."],
          },
        },
        {
          id: "ela10-u2-memoir-essay-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: MEMOIR,
          stem: "Why does the writer include the detail that Mr. Okafor 'never once said \"be careful\"'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To show that Mr. Okafor did not care what happened to the narrator" },
              { id: "b", text: "To suggest that his silent patience and trust mattered more than warnings" },
              { id: "c", text: "To prove that the narrator never fell near his house" },
              { id: "d", text: "To criticize adults who give advice to children" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Telling detail", statement: "A small, specific detail can carry the author's larger idea." }],
            steps: [
              { reasoning: "The absence of warnings shows that Mr. Okafor trusts the child rather than controlling the lesson.", evidence: "never once said 'be careful.'", marks: 1, markCode: "AO2" },
              { reasoning: "The details that follow, folded arms and waiting, show a calm presence that supports the narrator's growth, matching the essay's idea of hidden support.", evidence: "stood at the end of his driveway with his arms folded and waited", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** He is shown as patient and supportive, not careless. (a) misreads his quiet presence as indifference, and (d) goes beyond the text.",
            commonErrors: ["Choosing (a): the earlier detail that he lent the bicycle every morning shows care."],
          },
        },
        {
          id: "ela10-u2-memoir-essay-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MEMOIR,
          stem: "Analyze how the writer uses the shift from anecdote to reflection to develop the idea about independence. Refer to specific words or sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Shift from anecdote to reflection", statement: "A turn from events to commentary reveals what the author now understands." },
              { kind: "technique", name: "Contrast of past and present selves", statement: "Comparing what the author believed then with what they believe now shows growth." },
            ],
            steps: [
              { reasoning: "The first two paragraphs tell a concrete story with sensory details and a count of falls, which makes the event vivid and builds toward the moment of success.", evidence: "I fell eleven times. I know because I counted", marks: 2, markCode: "AO2" },
              { reasoning: "The third paragraph turns with 'I have thought about that summer often' and contrasts the child's belief with the adult's insight, showing growth in understanding.", evidence: "At the time I believed I had learned to balance. Now I think I learned something else", marks: 2, markCode: "AO2" },
              { reasoning: "The final paragraph widens the story to a general claim about independence, using 'we' to draw the reader in.", evidence: "We talk, today, about independence as if it were something we build alone", marks: 2, markCode: "AO1" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The writer begins with a vivid anecdote, counting falls and describing the bell 'chiming' as though the street were applauding. The third paragraph then turns to reflection, contrasting a childhood belief ('I had learned to balance') with a mature insight ('Now I think I learned something else'). The final paragraph widens the personal memory into a general claim, using the inclusive 'We' to argue that independence is never built alone. The shift from story to commentary is how the essay turns a small memory into an idea.",
            commonErrors: ["Retelling the story without commenting on the reflection.", "Identifying the shift without explaining what it reveals."],
          },
        },
        {
          id: "ela10-u2-memoir-essay-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: MEMOIR,
          stem: "Answer all parts of this question about 'The Borrowed Bicycle'.",
          parts: [
            { label: "a", prompt: "Give two details that show the narrator's persistence in learning to ride.", marks: 2 },
            { label: "b", prompt: "Explain what the sound of the bell contributes to the second paragraph.", marks: 4 },
            { label: "c", prompt: "Analyze how the writer presents Mr. Okafor, and how that presentation supports the essay's central idea.", marks: 6 },
            { label: "d", prompt: "Evaluate how effective the closing paragraph is as a conclusion to a personal essay. Consider how it connects to the rest of the text.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anecdote and reflection", statement: "Concrete story supports an abstract idea." },
              { kind: "technique", name: "Sensory detail and personification", statement: "Sound and image make a memory feel real and carry emotion." },
              { kind: "skill", name: "Evaluating a conclusion", statement: "Judge how a final paragraph completes the author's idea and affects the reader." },
            ],
            steps: [
              { part: "a", reasoning: "She fell repeatedly and kept trying.", evidence: "I fell eleven times", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "She kept a count and eventually succeeded on a later attempt.", evidence: "On the twelfth try", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The bell, which rings at every bump, gives a cheerful sound that contrasts with the earlier falls and turns the moment of success into a celebration.", evidence: "the bell chiming over every crack in the pavement", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The simile that the street was applauding personifies the neighborhood and conveys the narrator's joy and sense of being supported.", evidence: "as if the whole street were applauding", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "He is presented as generous and unassuming: he lends the bicycle without being asked, as though it were simply what bicycles did.", evidence: "lent it to me every morning without being asked", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "His silence and posture show quiet confidence in the child, in contrast to the warnings adults usually give.", evidence: "arms folded and waited", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "He becomes a symbol of the hidden support behind independence, so the individual character supports the central idea.", evidence: "someone's patience becomes part of how you stay upright", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "The conclusion widens the memory into a general claim, which turns a private story into an idea relevant to every reader.", evidence: "We talk, today, about independence", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "It echoes earlier images, the green bicycle and folded arms, so the ending feels earned and unified.", evidence: "a green bicycle and a man with folded arms", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "The direct admission 'I no longer believe it' is honest and personal, though a reader might find the claim gentle rather than forceful; it persuades through feeling more than argument.", evidence: "I no longer believe it", marks: 2, markCode: "AO1" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) She fell eleven times and kept counting; she succeeded on the twelfth try. (b) The bell turns the success into celebration, and the simile of applause shows joy and community support. (c) Mr. Okafor is generous and quietly confident, and his folded arms and silence embody the hidden support the essay praises. (d) The closing widens the story into a claim about independence and echoes the bicycle and folded arms, so it is unified and moving, persuading by feeling more than argument.",
            commonErrors: ["In (b), naming the bell without saying what it adds.", "In (c), describing Mr. Okafor without linking him to the central idea.", "In (d), saying the ending is 'good' without discussing how it connects to the whole."],
          },
        },
      ],
    },
    {
      id: "ela10-u2-satire-irony",
      title: "Satire and irony in nonfiction",
      skill: "Analyze how an author uses satire, irony, exaggeration, and tone to criticize an idea, and evaluate how effective that purpose is.",
      lesson: {
        sections: [
          {
            heading: "What satire does",
            body: "**Satire** uses humor and exaggeration to criticize something the author thinks is foolish or unjust. The target might be a policy, a habit, or a whole attitude. A satirist often pretends to be serious. The narrator may defend an absurd idea in a calm, reasonable voice (a **deadpan** tone), so the reader laughs and then sees what the author is really attacking. To read satire, ask: what is the narrator claiming, why is it absurd, and what real problem does that absurdity expose?",
          },
          {
            heading: "Irony, exaggeration, and effectiveness",
            body: "**Verbal irony** means that the words say one thing while the author means another. **Exaggeration** (hyperbole) stretches an idea past belief to reveal its flaw. When judging effectiveness, consider whether the target is clear, whether the humor serves the point rather than distracting from it, and whether a reader is likely to be persuaded or merely amused. Note that a satirical narrator is not the author: do not mistake the persona's views for the writer's.",
          },
        ],
        keyFormulas: [
          { name: "Satire", statement: "Humor plus criticism: exaggeration and irony expose a real flaw." },
          { name: "Persona", statement: "The voice the author adopts, which may hold views the author rejects." },
          { name: "Effectiveness", statement: "Is the target clear, does the humor serve the point, and does it move the audience?" },
        ],
        workedExample: {
          problem: "What is the target of the satire in 'A Modest Proposal for the Abolition of Stairs', and how does the writer reveal it? (4 marks)",
          solution: "The target is an extreme, overcautious attitude to safety, in which any risk must be removed regardless of cost or common sense. The writer reveals it through a serious-sounding narrator who proposes an absurd remedy: replacing every multistory building with 'a single, very wide floor'. Exaggerated details, such as a budget 'slightly larger than the national economy' and the claim that safety 'has no price', show that the narrator's logic ignores cost altogether. The ending, where the narrator is lying at the foot of a staircase, adds irony: he has fallen over a step, which suggests that even he cannot avoid accidents.",
        },
      },
      questions: [
        {
          id: "ela10-u2-satire-irony-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SATIRE,
          stem: "What is the main target of the satire?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Architects who design tall buildings" },
              { id: "b", text: "The belief that safety should be pursued at any cost" },
              { id: "c", text: "People who enjoy views from upper floors" },
              { id: "d", text: "Engineers who work on coastal projects" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Satirical target", statement: "Satire exaggerates the flawed attitude or behavior it wants to criticize." }],
            steps: [{ reasoning: "The narrator's refusal to count cost shows the absurdity of valuing safety above everything.", evidence: "safety has no price", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(b)** Views, architects, and engineers appear in the piece but are only parts of the absurd argument, not its target.",
            commonErrors: ["Choosing (c), which is only one of the objections the narrator brushes aside."],
          },
        },
        {
          id: "ela10-u2-satire-irony-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SATIRE,
          stem: "The narrator says that expanding Marlow into the sea is 'technically possible, in theory, someday.' What is the effect of this phrase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It shows that the narrator has carefully researched the plan." },
              { id: "b", text: "It humorously hedges a ridiculous claim, revealing that the plan is not realistic." },
              { id: "c", text: "It proves that engineers support the proposal." },
              { id: "d", text: "It makes the narrator sound angry at the engineers." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Verbal irony", statement: "A confident claim hedged into meaninglessness reveals the speaker's lack of real support." }],
            steps: [
              { reasoning: "The stacked hedges 'in theory' and 'someday' drain the claim of any practical meaning.", evidence: "technically possible, in theory, someday", marks: 1, markCode: "AO2" },
              { reasoning: "The narrator treats this as reassurance, which exposes his unreasonable standard of proof and adds to the comedy.", evidence: "engineers assure me", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)** The hedging shows there is no real plan. (a) and (c) take the narrator at face value, which is the trap of satire.",
            commonErrors: ["Taking the narrator's claims literally."],
          },
        },
        {
          id: "ela10-u2-satire-irony-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SATIRE,
          stem: "Explain how the writer uses exaggeration and a serious tone to criticize the narrator's attitude. Refer to at least two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hyperbole", statement: "Deliberate exaggeration exposes the flaw in an idea by pushing it to its extreme." },
              { kind: "technique", name: "Deadpan tone", statement: "Delivering absurd content in a calm voice increases the humor and the criticism." },
            ],
            steps: [
              { reasoning: "The proposal to remove all stairs and build a single wide floor is hyperbole, showing how extreme the narrator's logic is.", evidence: "all stairs be eliminated at once", marks: 2, markCode: "AO2" },
              { reasoning: "The budget 'slightly larger than the national economy' is a deadpan understatement that makes cost look absurd while the narrator remains unmoved.", evidence: "slightly larger than the national economy", marks: 2, markCode: "AO2" },
              { reasoning: "The formal, reasonable voice, such as 'It has long been obvious to any thinking person', contrasts with the absurd content, so the reader sees that the author rejects the narrator's thinking.", evidence: "It has long been obvious to any thinking person", marks: 2, markCode: "AO1" },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer: "The writer exaggerates the narrator's logic until it collapses. Removing every staircase and building 'a single, very wide floor' pushes the idea of total safety to its extreme, and the budget 'slightly larger than the national economy' is an understatement delivered with a straight face. The formal, confident voice ('obvious to any thinking person') contrasts with the absurd content, which invites the reader to laugh at the narrator and recognize that the author is criticizing the view that safety should be pursued whatever the cost.",
            commonErrors: ["Describing the proposal without explaining what flaw it exposes.", "Treating the narrator's views as the author's own."],
          },
        },
        {
          id: "ela10-u2-satire-irony-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: SATIRE,
          stem: "Answer all parts of this question about 'A Modest Proposal for the Abolition of Stairs'.",
          parts: [
            { label: "a", prompt: "Give two exaggerated claims made by the narrator.", marks: 2 },
            { label: "b", prompt: "Explain what the narrator's response to the objection about views reveals about his attitude.", marks: 4 },
            { label: "c", prompt: "Analyze how the final paragraph uses irony to undermine the narrator.", marks: 6 },
            { label: "d", prompt: "Evaluate how effective the piece is as satire. Consider the clarity of its target, its humor, and whether it makes readers think about a real issue.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Hyperbole and irony", statement: "Exaggeration and a gap between words and reality drive satire." },
              { kind: "technique", name: "Persona", statement: "The narrator's views are not the author's; the author uses the persona to expose flawed thinking." },
              { kind: "skill", name: "Evaluating effectiveness", statement: "Judge a text's purpose using clarity of target, quality of humor, and impact on the reader." },
            ],
            steps: [
              { part: "a", reasoning: "Stairs are described as the most dangerous invention in history.", evidence: "the most dangerous invention in human history", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "The budget is said to exceed the national economy.", evidence: "slightly larger than the national economy", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "He dismisses a reasonable preference as 'sentimental', showing that he will sacrifice any pleasure for his one goal.", evidence: "This is a sentimental objection", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The claim that no one needs a view 'from higher than ground level' is absurdly extreme, revealing a narrow, joyless attitude that ignores quality of life.", evidence: "does not need to see anything from higher than ground level", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Situational irony: the man who campaigns against stairs has himself fallen over a step, so his own experience shows that the threat is ordinary and risk cannot be eliminated.", evidence: "having just fallen over a slightly uneven step", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The calm, polite sign-off 'I can be reached at the foot of any staircase' maintains the deadpan tone, increasing the humor of the collapse.", evidence: "I can be reached at the foot of any staircase", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The ending reverses the narrator's authority, which reminds readers that the author mocks the persona rather than sharing his views.", evidence: "In the unlikely event that I am wrong", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Strength: the target is clear, since every example points at the idea of removing risk at any cost, so readers know what is being criticized.", evidence: "safety has no price", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Strength: the humor is funny and also serves the point, as each exaggeration shows another cost of the narrator's logic.", evidence: "technically possible, in theory, someday", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Limitation: the target is so extreme that few readers would hold it, so the piece may amuse more than it persuades; a real policy debate might need a more realistic example.", marks: 2, markCode: "AO1" },
            ],
            levels: [...rubric(6, [5, 3, 2], "c"), ...rubric(6, [5, 3, 2], "d")],
            finalAnswer: "(a) Stairs are 'the most dangerous invention in human history'; the budget is 'slightly larger than the national economy'. (b) Calling the objection 'sentimental' and claiming no one needs a view shows a narrow attitude that sacrifices everything else. (c) The narrator falls over a step, situational irony that undercuts his campaign, while his polite sign-off keeps the deadpan tone. (d) The target is clear and the humor serves the point, but the extreme target may make the piece more amusing than persuasive.",
            commonErrors: ["In (c), describing the fall without explaining why it is ironic.", "In (d), saying 'it is funny' without judging effectiveness.", "Attributing the narrator's opinions to the author."],
          },
        },
      ],
    },
  ],
};
