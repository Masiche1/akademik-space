import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const CRANE: TextExtract = {
  title: "The open boat",
  author: "Stephen Crane",
  source: "The Open Boat (1897), opening (excerpt)",
  text: "None of them knew the color of the sky. Their eyes glanced level, and were fastened upon the waves that swept toward them.",
};

const MILL: TextExtract = {
  title: "The Ninth Shift",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "The whistle at the Harlan Mill blew at five, as it had blown every working morning of Dessa Marsh's life, and the town rose to it the way a field of wheat bends to wind. She did not decide to get up. Her feet found the cold boards and her hands found the lamp, and by the time she had thought about it at all she was already on the road with the others, a gray line of coats moving toward the gate.\n\nHer mother had walked this road, and her mother's mother before her. Nobody in the row of company houses spoke of leaving, because nobody had ever left; the road ran in only one direction, and the river ran beside it, brown and indifferent, carrying away the mill's dye in long red threads that no one looked at anymore.\n\nOn the ninth shift of the week the foreman announced that wages would be cut by a tenth. He said it plainly, as he might have announced rain. A few of the men muttered. Dessa tied her apron, took her place at the loom, and listened to the machines begin, each beat of the shuttle exactly like the last.",
};

const CHOPIN: TextExtract = {
  title: "The news of Mr. Mallard's death",
  author: "Kate Chopin",
  source: "The Story of an Hour (1894), opening and closing lines (excerpts)",
  text: "Knowing that Mrs. Mallard was afflicted with a heart trouble, great care was taken to break to her as gently as possible the news of her husband's death.\n\n[...]\n\nWhen the doctors came they said she had died of heart disease--of joy that kills.",
};

const MEMO: TextExtract = {
  title: "A Notice from the Office of Progress",
  author: "Written for Akademik Space",
  source: "Original passage",
  text: "The town council is delighted to announce that the Elm Street bridge, closed since March for what engineers have called 'a slight structural concern', will reopen in the spring of next year, or the one after. Residents are reminded that the three-mile detour is not an inconvenience but an opportunity to enjoy the municipal landscape at a thoughtful pace.\n\nCouncilman Pruitt, who has not crossed the bridge in eleven years, praised the delay as 'proof that we measure twice and cut never'. Asked about the cost, which has tripled, he said that the council does not believe in putting a price on safety, though it has been willing to put several.",
};

export const lesson12: Lesson = {
  id: "ela11-u1-lesson-1-2",
  code: "1-2",
  title: "Realism and Naturalism",
  goal: "I CAN explain how setting and narration shape character and theme in realism, regionalism, and naturalism, and distinguish what a narrator states from what the text really means through irony, satire, and understatement.",
  standards: ["RL.11-12.3", "RL.11-12.6"],
  vocabulary: [
    { term: "Realism", definition: "A movement that depicts ordinary people and everyday life in plain, accurate detail, with motives shown as believable rather than ideal." },
    { term: "Regionalism", definition: "Writing that draws its characters, dialect, and customs closely from one specific place." },
    { term: "Naturalism", definition: "A movement, often called harsh realism, that shows characters as shaped and limited by environment, heredity, and chance rather than free will." },
    { term: "Indifferent universe", definition: "A naturalist idea that nature neither helps nor opposes humans, but simply does not care." },
    { term: "Verbal irony", definition: "A statement in which the intended meaning differs from, or is the opposite of, the literal meaning." },
    { term: "Dramatic irony", definition: "A gap between what a character or narrator understands and what the reader understands." },
    { term: "Satire", definition: "Writing that exposes and criticizes foolishness or vice, often through exaggeration, irony, or a straight-faced tone." },
    { term: "Understatement", definition: "Deliberately describing something serious or extreme in restrained terms, so that the gap creates emphasis or humor." },
  ],
  concepts: [
    {
      id: "ela11-u1-realism-naturalism-setting",
      title: "Setting, narration, and determinism",
      skill: "Explain how setting and the narrator's stance shape character and theme in realist, regionalist, and naturalist writing.",
      lesson: {
        sections: [
          {
            heading: "Realism, regionalism, naturalism",
            body: "**Realism** replaces idealized heroes with ordinary people whose choices have believable causes. **Regionalism** pins the story to one place so that speech and custom become part of character. **Naturalism** pushes further: environment, heredity, and chance **determine** what happens, and nature is an **indifferent universe** that does not care about human effort. Writers such as Crane and London therefore tend to use detached narration, unheroic characters, and settings that act like forces.",
          },
          {
            heading: "Reading setting and narration together",
            body: "Ask what the setting does to the characters: does it limit, threaten, or ignore them? Then ask who is telling the story and from how far away. A distant, unemotional narrator (a flat, factual tone) can make suffering feel more severe, because the narration does not cry out for sympathy. Look at verbs of motion (do the characters act or are they moved?), repeated images, and what the narrator withholds. Link each observation to the theme: for example, individuals are small, or work and place decide a life.",
          },
        ],
        keyFormulas: [
          { name: "Naturalist setting", statement: "Environment acts as a force that limits or threatens characters and does not respond to them." },
          { name: "Detached narration", statement: "A flat, factual narrative tone that withholds comment, making events seem inevitable." },
          { name: "Theme from setting", statement: "Show what the setting does to the characters, then state the idea about life that follows." },
        ],
        workedExample: {
          problem: "How does Crane's opening sentence, 'None of them knew the color of the sky', shape character and theme?",
          solution: "The sentence begins with a negative: 'None of them knew'. Instead of introducing heroes, Crane introduces men defined by what they cannot see. The sky, a symbol of hope or help, is something they have no attention to spare for. The next sentence confirms it: their 'eyes glanced level, and were fastened upon the waves that swept toward them.' The waves are the setting and the threat, and the verb 'swept' gives them power while the men only watch. The narration is calm and plain, which makes the men seem small and the sea an indifferent force, so the theme of human smallness in an indifferent nature is established before any action.",
        },
      },
      questions: [
        {
          id: "ela11-u1-realism-naturalism-setting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CRANE,
          stem: "Which idea about the men does the opening sentence most strongly suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their attention is so fixed on immediate danger that they cannot look at anything beyond it." },
              { id: "b", text: "They are colorblind and cannot see the sky." },
              { id: "c", text: "They are relaxed and not worried about the sea." },
              { id: "d", text: "They are heroes who control the sea by skill." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference from setting", statement: "A negative detail can reveal where a character's whole attention is fixed." }],
            steps: [{ reasoning: "The men do not know the color of the sky because their eyes are 'fastened' on the waves, showing total focus on the threat.", evidence: "were fastened upon the waves that swept toward them", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. The sentence is about attention, not eyesight or confidence. Option (d) contradicts the naturalist picture of the men as small.",
            commonErrors: ["Reading 'did not know the color' literally as colorblindness."],
          },
        },
        {
          id: "ela11-u1-realism-naturalism-setting-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CRANE,
          stem: "Explain how the verbs and sentence structure in these two sentences make the men seem powerless against the sea. Use quotations.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Agency and verbs", statement: "Who or what performs the strong verbs shows who holds power in a scene." }],
            steps: [
              { reasoning: "The waves are the subject of an active, forceful verb, so the sea is the powerful agent.", evidence: "waves that swept toward them", marks: 1, markCode: "AO2" },
              { reasoning: "The men's verb is passive and limited: their eyes 'glanced' and 'were fastened', so they are held by the danger, not acting on it.", evidence: "were fastened upon the waves", marks: 1, markCode: "AO2" },
              { reasoning: "The plain, short sentences, with no comment, show a calm narration that makes their vulnerability seem inevitable.", evidence: "None of them knew the color of the sky.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The waves 'swept toward them', so the sea is the active force, while the men's eyes 'were fastened' on it, a passive verb that shows them held by danger. The short, plain sentences give no sign of heroism or rescue, so the men appear powerless.",
            commonErrors: ["Saying the verbs are 'powerful' without saying whose power it is."],
          },
        },
        {
          id: "ela11-u1-realism-naturalism-setting-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MILL,
          stem: "Analyze how the setting and the narrator's tone in the first two paragraphs of the original passage present Dessa as shaped by her environment. Refer closely to the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Naturalism", statement: "Characters are shaped and limited by environment, inheritance, and economic forces they cannot control." },
              { kind: "technique", name: "Detached narration", statement: "A flat tone and a lack of comment can make constraint seem normal and inevitable." },
            ],
            steps: [
              { reasoning: "The simile of wheat bending to wind makes the townspeople move like a natural reaction to the whistle, with no individual will.", evidence: "the town rose to it the way a field of wheat bends to wind", marks: 2, markCode: "AO2" },
              { reasoning: "Dessa's body acts before her mind does, which shows habit and environment replacing choice.", evidence: "She did not decide to get up.", marks: 2, markCode: "AO1" },
              { reasoning: "Inheritance: three generations walk the same road, so heredity and place determine her life.", evidence: "Her mother had walked this road, and her mother's mother before her.", marks: 2, markCode: "AO1" },
              { reasoning: "The river is 'indifferent' and the dye is ignored, so even the visible harm of the mill has become unremarkable in a detached, flat narration.", evidence: "brown and indifferent", marks: 2, markCode: "AO2" },
            ],
            levels: levels(8),
            finalAnswer: "The narration presents Dessa as moved by forces rather than by choices. The town 'rose to it the way a field of wheat bends to wind', and she 'did not decide to get up', so habit and the mill's schedule control her body. Her mother and grandmother 'walked this road' too, so her life is inherited. The river is 'indifferent', and the narrator reports the mill's red dye without comment, so constraint and harm seem natural and unchangeable, which is a naturalist view of character.",
            commonErrors: ["Summarizing Dessa's morning without analyzing the narration.", "Calling the setting 'gloomy' without evidence of how it shapes her."],
          },
        },
        {
          id: "ela11-u1-realism-naturalism-setting-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: MILL,
          stem: "Answer all parts of this question about the original passage.",
          parts: [
            { label: "a", prompt: "Quote one phrase from the third paragraph that shows the foreman's attitude to the wage cut, and explain what it shows.", marks: 3 },
            { label: "b", prompt: "Explain how the final sentence of the passage contributes to the theme of repetition and constraint.", marks: 5 },
            { label: "c", prompt: "Evaluate how effectively the writer uses a detached narrator to convey the passage's central theme. Consider the whole passage.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Detached narration", statement: "A narrator who reports without emotion can intensify the injustice of events." },
              { kind: "skill", name: "Evaluating effectiveness", statement: "Make a judgment about how well a technique achieves its purpose and support it with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies the simile: he announces the cut 'as he might have announced rain'.", evidence: "as he might have announced rain", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Explains that the comparison treats a human decision as a weather event: casual and unchallengeable.", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Links it to his indifference to the workers' suffering.", evidence: "He said it plainly", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Each beat of the shuttle exactly like the last' stresses sameness, so the work is endless repetition.", evidence: "each beat of the shuttle exactly like the last", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "Dessa 'tied her apron, took her place', a sequence of calm actions that shows acceptance, not protest.", evidence: "tied her apron, took her place at the loom", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "The passage ends on the machines, not on Dessa's feelings, which implies the machine, not the person, sets the pace of life.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The narrator withholds comment and sympathy, which makes the wage cut feel routine and shows how normal exploitation has become.", evidence: "He said it plainly, as he might have announced rain.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Natural imagery (wheat, river) makes social structure seem like nature, which suggests that the characters cannot change it.", evidence: "a field of wheat bends to wind", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The repeated phrases about the road and generations create a sense of fate and cycle.", evidence: "the road ran in only one direction", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Counterpoint: the detachment means Dessa's inner life is hidden, so the reader supplies the emotion; this limits intimacy but increases the impact.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a judgment that the detached narrator is highly effective in conveying determinism, linked to the theme of constraint.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(10, "c"),
            finalAnswer: "(a) He announces the cut 'as he might have announced rain', treating a human decision as weather: casual and beyond challenge. (b) The shuttle's beats are 'exactly like the last', and Dessa 'took her place at the loom' without protest, so the ending stresses repetition and acceptance. (c) The detached narrator is effective because it refuses to comment. The wage cut is reported 'plainly', the town moves like wheat, and the road 'ran in only one direction', so exploitation looks like nature. The reader supplies the anger that the narrator withholds, which makes the theme of determinism more powerful, though Dessa's inner life remains hidden.",
            commonErrors: ["In (a), quoting without explaining the comparison.", "In (b), describing what Dessa does without linking it to repetition.", "In (c), retelling the passage instead of evaluating the narrator."],
          },
        },
      ],
    },
    {
      id: "ela11-u1-irony-satire-meaning",
      title: "Stated versus intended meaning: irony, satire, and understatement",
      skill: "Distinguish what a narrator or character states from what the text really means, and explain how irony, satire, sarcasm, and understatement work.",
      lesson: {
        sections: [
          {
            heading: "The gap between saying and meaning",
            body: "Many American writers say one thing and mean another. **Verbal irony** states the opposite of what is meant. **Sarcasm** is irony with a cutting edge, meant to wound. **Understatement** describes something severe in restrained words so the gap creates emphasis. **Dramatic irony** gives the reader knowledge the character lacks. Each depends on a gap between the stated and the intended meaning, so ask: what is directly stated, and what does the context show the author really thinks?",
          },
          {
            heading: "Satire and how to prove it",
            body: "**Satire** uses irony, exaggeration, and a deadpan voice to criticize a target such as a policy, a habit, or a class. To prove a reading of irony, identify the clash between the words and a fact in the text (a stated delight beside an eleven-year delay), name the target of the criticism, and explain how the narrator's tone, which may seem sincere, exposes it. In Chopin's story the 'heart trouble' of the first line and the doctors' diagnosis in the last line show how the final words can stand in ironic contrast to what the reader knows.",
          },
        ],
        keyFormulas: [
          { name: "Verbal irony", statement: "The stated meaning is the opposite of, or very different from, the intended meaning." },
          { name: "Dramatic irony", statement: "The reader knows something that a character does not." },
          { name: "Satire", statement: "Irony and exaggeration used to criticize a target; identify the target and the method." },
        ],
        workedExample: {
          problem: "In Chopin's last line, 'When the doctors came they said she had died of heart disease--of joy that kills', what is the irony?",
          solution: "The doctors state a cause of death: a heart weakened by the joy of seeing her husband alive. The reader knows, from the story's middle, that the real shock was the loss of the freedom she had just discovered, so the doctors' diagnosis is the opposite of the truth. It is dramatic irony, because the characters misread what the reader understands, and the phrase 'joy that kills' is bitterly ironic since the dead woman's real joy was in her husband's death. The gap between stated and intended meaning exposes how little others understand a woman's inner life.",
        },
      },
      questions: [
        {
          id: "ela11-u1-irony-satire-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CHOPIN,
          stem: "What does the opening sentence directly state about the way Mrs. Mallard is treated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Those around her are careful to break the news of her husband's death gently because of her weak heart." },
              { id: "b", text: "Those around her ignore her health and tell her bluntly." },
              { id: "c", text: "She is told that her husband has returned safely." },
              { id: "d", text: "She is the one who breaks the news to others." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Stated meaning", statement: "First identify what the text literally says before looking for what it means." }],
            steps: [{ reasoning: "The sentence says that 'great care was taken' because of her 'heart trouble', so the news is broken gently.", evidence: "great care was taken to break to her as gently as possible the news", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)**. This is the directly stated meaning. The irony of the story depends on the reader noticing how the later events contrast with it.",
            commonErrors: ["Confusing the stated news (death) with the story's later twist."],
          },
        },
        {
          id: "ela11-u1-irony-satire-meaning-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CHOPIN,
          stem: "Explain how the final sentence is ironic. Distinguish what the doctors state from what the reader understands.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dramatic irony", statement: "The reader's knowledge contradicts a character's understanding." }],
            steps: [
              { reasoning: "The doctors state that she died of heart disease caused by joy at her husband's return.", evidence: "they said she had died of heart disease", marks: 1, markCode: "AO1" },
              { reasoning: "The reader understands that her real reaction was the loss of the freedom she had briefly felt, so the doctors' reading is incorrect.", marks: 1, markCode: "AO2" },
              { reasoning: "'Joy that kills' is bitterly ironic: the joy was real but was at being free of her husband, and the shock was its end.", evidence: "of joy that kills", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The doctors state that she died of 'heart disease--of joy that kills', meaning happiness at seeing her husband alive. The reader understands that the joy was her new freedom, and that its sudden loss killed her, so the doctors' explanation is the opposite of the truth. The irony shows that others misread her inner life.",
            commonErrors: ["Defining irony without explaining the gap in this story.", "Taking the doctors' diagnosis as the text's own view."],
          },
        },
        {
          id: "ela11-u1-irony-satire-meaning-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: MEMO,
          stem: "The original notice is a satire. Analyze how the writer uses irony, exaggeration, and tone to criticize the town council.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Satire", statement: "A deadpan voice and exaggeration expose a target by letting the gap between claim and fact speak." },
              { kind: "technique", name: "Understatement", statement: "Mild wording for a serious problem emphasizes how serious it really is." },
            ],
            steps: [
              { reasoning: "Understatement: 'a slight structural concern' describes a bridge closed for months, so the council minimizes a serious problem.", evidence: "a slight structural concern", marks: 2, markCode: "AO2" },
              { reasoning: "Verbal irony: the council calls a three-mile detour 'an opportunity', claiming a benefit that a reader can see is false.", evidence: "not an inconvenience but an opportunity", marks: 2, markCode: "AO2" },
              { reasoning: "Exaggerated, vague timing ('the spring of next year, or the one after') exposes the council's lack of accountability.", evidence: "next year, or the one after", marks: 2, markCode: "AO2" },
              { reasoning: "The deadpan voice and a quotation from a councilman who has not used the bridge in eleven years expose hypocrisy and mock the council's self-congratulation.", evidence: "who has not crossed the bridge in eleven years", marks: 2, markCode: "AO1" },
            ],
            levels: levels(8),
            finalAnswer: "The writer mocks the council by letting its own announcement condemn it. 'A slight structural concern' is understatement for a bridge closed for months, calling a three-mile detour 'an opportunity' is ironic, and 'next year, or the one after' exposes vagueness. The deadpan tone never criticizes openly, but details such as a councilman who 'has not crossed the bridge in eleven years' show a council that is delighted with itself and indifferent to residents.",
            commonErrors: ["Saying the writer is 'funny' without identifying the technique.", "Not naming the target of the criticism."],
          },
        },
        {
          id: "ela11-u1-irony-satire-meaning-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: MEMO,
          stem: "Answer all parts of this question about the original notice.",
          parts: [
            { label: "a", prompt: "Quote a phrase in the second paragraph that is an example of sarcasm or irony, and say what is stated and what is really meant.", marks: 3 },
            { label: "b", prompt: "Explain how the final sentence uses a play on words to criticize the council's priorities.", marks: 5 },
            { label: "c", prompt: "Evaluate how effective a straight-faced, official voice is as a vehicle for satire in this notice. Refer closely to the text.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Deadpan satire", statement: "An earnest official voice lets the writer criticize without stating criticism." },
              { kind: "skill", name: "Stated versus intended", statement: "Separate what the voice says from what the context shows the author intends." },
            ],
            steps: [
              { part: "a", reasoning: "Identifies the phrase 'proof that we measure twice and cut never' as ironic.", evidence: "proof that we measure twice and cut never", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "States that the council praises its caution and care.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Explains that the real meaning is that the council has done nothing, since 'cut never' means no work has been done.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'Put a price on safety' is first denied and then undercut, since the price has tripled.", evidence: "does not believe in putting a price on safety, though it has been willing to put several", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The pun on 'price' shifts from the principle (safety is priceless) to money spent: the council is claiming a principle while overspending.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The ending is a punch line that turns the council's own words against its credibility.", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "The earnest, formal vocabulary ('delighted to announce', 'thoughtful pace') sounds sincere, so the criticism comes from the reader's recognition of the gap.", evidence: "delighted to announce", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Concrete facts, such as 'closed since March', 'eleven years', and 'tripled', serve as unspoken evidence against the council's claims.", evidence: "which has tripled", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Exaggeration and euphemism turn bureaucratic language into the target itself, so the style is the argument.", evidence: "an opportunity to enjoy the municipal landscape", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Limitation: a reader who misses the irony might take the notice as sincere, so deadpan satire depends on shared knowledge.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Reaches a judgment that the voice is highly effective because the council appears to condemn itself.", marks: 2, markCode: "AO1" },
            ],
            levels: levels(10, "c"),
            finalAnswer: "(a) 'Proof that we measure twice and cut never': the council states that it is careful, but the intended meaning is that it has done nothing. (b) The council says it does not 'put a price on safety', yet it has 'put several'; the shift in meaning from principle to money shows hypocrisy. (c) The straight-faced voice is effective because the council's own pleasant words ('delighted', 'opportunity') are exposed by hard facts ('closed since March', 'tripled', 'eleven years'). The writer never states criticism, so the target seems to condemn itself, although the satire does depend on readers recognizing the gap.",
            commonErrors: ["In (a), explaining only what is stated.", "In (b), not explaining the shift in the meaning of 'price'.", "In (c), saying the tone is funny without evaluating why it works."],
          },
        },
      ],
    },
  ],
};
