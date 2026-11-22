import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen detail`,
    `Thorough, convincing ${focus}; well-chosen, effective detail`,
    `Clear, relevant ${focus}; appropriate detail`,
    `Some control; ${focus} is partly developed with some relevant detail`,
    `Simple, limited ${focus}; little control or development`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const OPENINGS: TextExtract = {
  title: "Three openings to an article on phones in schools",
  author: "Written for Akademik Space",
  source: "Original model openings",
  text:
    "OPENING 1: I think phones should be banned in schools because they are bad. Lots of people use them in lessons and it is annoying. In this article I will tell you why.\n\nOPENING 2: At 8.52 on a Tuesday morning, thirty-one teenagers in a Year 11 corridor are staring downwards, and not one of them is looking at the person walking past. Welcome to the generation that is never alone and rarely present.\n\nOPENING 3: Ask any teacher what has changed in twenty years and you will hear the same answer, sighed rather than spoken: the silence in the corridors is no longer the silence of concentration.",
};

const CONCLUSIONS: TextExtract = {
  title: "Two conclusions to a speech on volunteering",
  author: "Written for Akademik Space",
  source: "Original model conclusions",
  text:
    "CONCLUSION 1: So, in conclusion, I have said that volunteering is good and that everyone should do it. Thank you for listening to my speech.\n\nCONCLUSION 2: Somewhere in this town tonight a kettle is being filled for a stranger, a hand is steadying a ladder, a child is being told that her reading is improving. None of it will be reported. All of it will matter. The question is not whether you have the time. It is whether, one day, you will wish you had given it.",
};

export const lesson21: Lesson = {
  id: "el11-u2-lesson-2-1",
  code: "2-1",
  title: "Openings, Conclusions, Counter-argument and Rebuttal",
  goal: "I CAN open and close a piece of transactional writing with impact, and use counter-argument and rebuttal to strengthen a case.",
  standards: ["4EA1 Paper 1 Section B", "4EA1 AO4", "4EA1 AO5"],
  vocabulary: [
    { term: "Hook", definition: "An opening sentence or image designed to capture the reader's attention immediately." },
    { term: "Anecdote", definition: "A short, personal story used to illustrate a point or draw a reader in." },
    { term: "Counter-argument", definition: "An opposing view that a writer acknowledges before responding to it." },
    { term: "Rebuttal", definition: "A reasoned response that weakens or defeats a counter-argument." },
    { term: "Concession", definition: "Granting that an opposing point has some merit, which builds credibility." },
    { term: "Call to action", definition: "A closing instruction or challenge that tells the reader what to do or think next." },
    { term: "Circular structure", definition: "Ending with an echo of the opening, giving unity and a sense of completion." },
  ],
  concepts: [
    {
      id: "el11-u2-openings-conclusions",
      title: "Openings and conclusions",
      skill: "Begin with a controlled hook and end with a memorable, purposeful conclusion.",
      lesson: {
        sections: [
          {
            heading: "Openings that earn attention",
            body: "Top-band writers do not announce what they will do ('In this article I will...'). They begin with a concrete image, a startling fact, a rhetorical question or a precise anecdote, then move quickly to their viewpoint. The first paragraph should establish voice, purpose and audience within a few sentences.",
          },
          {
            heading: "Conclusions that leave a mark",
            body: "A weak conclusion repeats ('in conclusion, I have said...'). A strong one **returns** to the opening image, offers a final insight, or issues a call to action that matches the form. Keep it short and avoid introducing a new argument. End on a rhythm: a short sentence, a tricolon or a pointed question.",
          },
          {
            heading: "Matching form and audience",
            body: "A speech can address the audience directly ('you', 'we'), an article can use a wry columnist's voice, a letter should keep to the register of the recipient. Whatever the form, the opening and ending should feel like a frame: the reader should sense the piece has a beginning with intent and an ending with purpose.",
          },
        ],
        keyFormulas: [
          { name: "Hook", statement: "Concrete image, surprising statement or pointed question in the first sentence." },
          { name: "Circular ending", statement: "Return to a word or image from the opening, now charged with new meaning." },
          { name: "Call to action", statement: "A final direct challenge: what the reader should think, feel or do." },
        ],
        workedExample: {
          problem: "Rewrite this opening to make it more engaging: 'I am going to write about litter in our town. It is a big problem.'",
          solution: "Model: 'The first thing the tourists see when they step off the 9.14 is not our Norman church or the market square; it is a crisp packet, drifting across the platform like a small, defeated flag.' This replaces an announcement with a precise image, sets a wry tone, and implies the argument (the town's pride is being undermined) before any statement is made. The simile gives voice, and the specific train time makes the scene real. The next paragraph can then state the viewpoint directly.",
        },
      },
      questions: [
        {
          id: "el11-u2-openings-conclusions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OPENINGS,
          stem: "Which of the three openings begins with a rhetorical, observational hook that places the reader in a specific scene?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening 2" },
              { id: "b", text: "Opening 1" },
              { id: "c", text: "Opening 3" },
              { id: "d", text: "None of them" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Scene-setting hook", statement: "A precise time, place and image drop the reader into the topic." }],
            steps: [{ reasoning: "Opening 2 gives a precise time and scene, with a striking image of heads bowed.", evidence: "At 8.52 on a Tuesday morning", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(b)** Opening 2 places the reader in a specific scene.",
            commonErrors: ["Choosing Opening 3, which opens with a general question and teacher's observation rather than a scene.", "Choosing Opening 1, which announces its argument."],
          },
        },
        {
          id: "el11-u2-openings-conclusions-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CONCLUSIONS,
          stem: "Explain why Conclusion 2 is more effective than Conclusion 1. Refer to the writer's methods.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Effective conclusion", statement: "A strong ending offers a final insight or call to action, not a repeat of the argument." }],
            steps: [
              { reasoning: "Conclusion 1 only repeats and announces; Conclusion 2 gives concrete images of volunteering in action.", evidence: "a kettle is being filled for a stranger", marks: 1, markCode: "AO4" },
              { reasoning: "The tricolon and short sentences ('None of it will be reported. All of it will matter.') create rhythm and a memorable contrast.", evidence: "All of it will matter", marks: 1, markCode: "AO4" },
              { reasoning: "The closing question is a direct challenge that makes the reader reflect on their own choice.", evidence: "whether, one day, you will wish you had given it", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Conclusion 2 uses concrete images, a balanced pair of short sentences and a final challenge to the reader, whereas Conclusion 1 only repeats itself and thanks the audience.",
            commonErrors: ["Saying it is 'longer' or 'better written' without reference to methods.", "Failing to mention the effect on the audience."],
          },
        },
        {
          id: "el11-u2-openings-conclusions-q3",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the opening paragraph (about 100 words) of a newspaper article arguing that every young person should learn to cook. Begin with a hook that is not a question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Article opening", statement: "A hook, a clear viewpoint and an engaging, controlled voice." },
              { kind: "skill", name: "Technical control", statement: "Accurate punctuation and varied sentence structures support meaning." },
            ],
            steps: [
              { reasoning: "A striking, concrete hook that is not a question, such as a scene or startling image.", marks: 2, markCode: "AO4" },
              { reasoning: "Establishes a clear viewpoint quickly and avoids announcing 'I will argue'.", marks: 2, markCode: "AO4" },
              { reasoning: "Controls voice and tone for a newspaper reader, with deliberate word choice.", marks: 2, markCode: "AO4" },
              { reasoning: "Accurate and varied sentence structures and punctuation, with ambitious but secure vocabulary.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "Model: 'At seventeen, Callum can code a game, edit a film and recite the lyrics of three hundred songs, but he cannot boil an egg. It is a small thing, until you realise how many small things make up a life. A generation that outsources its dinner is a generation that has outsourced its independence, and it is time we put a spoon back in their hands.'",
            levels: levels(8, "control of opening and tone"),
            commonErrors: ["Beginning with 'In this article I will...'.", "Opening with a question that the reader could answer with 'no'.", "A hook that has nothing to do with the argument."],
          },
        },
        {
          id: "el11-u2-openings-conclusions-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: OPENINGS,
          stem: "Study the three openings to an article on phones in schools.",
          parts: [
            { label: "a", prompt: "Explain what is weak about Opening 1.", marks: 3 },
            { label: "b", prompt: "Analyse how the writer of Opening 3 creates a thoughtful tone.", marks: 4 },
            { label: "c", prompt: "Write the opening paragraph and a closing paragraph (about 200 words in total) for a speech to your school council arguing that mobile phones should be allowed at break time.", marks: 18 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hook and frame", statement: "An engaging opening and an echoing conclusion shape a persuasive text." },
              { kind: "technique", name: "Tone", statement: "Word choice and rhythm produce a thoughtful voice." },
              { kind: "skill", name: "Technical accuracy", statement: "Punctuation, grammar and vocabulary used accurately and ambitiously." },
            ],
            steps: [
              { part: "a", reasoning: "The opening is announced rather than shown: 'In this article I will tell you why' is mechanical.", evidence: "In this article I will tell you why", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Vague, repetitive vocabulary ('bad', 'annoying') gives no detail.", evidence: "they are bad", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "Simple sentence structures and informal register do not suit a newspaper article.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "The invitation to 'Ask any teacher' creates shared experience and authority.", evidence: "Ask any teacher what has changed", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "'sighed rather than spoken' shows weary reflection through understatement.", evidence: "sighed rather than spoken", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "The balanced final clause turns on the antithesis of two kinds of silence, giving a reflective, analytical voice.", evidence: "the silence of concentration", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Long, controlled sentence with a colon builds a considered, unhurried rhythm.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Opening has a hook and a clear viewpoint in the first few sentences, with an appropriately direct address to the council.", marks: 5, markCode: "AO4" },
              { part: "c", reasoning: "Conclusion returns to the opening image or idea and ends on a call to action or pointed final sentence.", marks: 5, markCode: "AO4" },
              { part: "c", reasoning: "Sustained tone and register suitable for a speech to school council, with rhetorical features used purposefully.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accurate and varied punctuation, grammar and spelling, with ambitious vocabulary.", marks: 4, markCode: "AO5" },
            ],
            finalAnswer: "(a) Opening 1 announces rather than engages, uses vague words like 'bad' and has a flat tone. (b) Opening 3 uses the invitation to 'Ask any teacher', the understatement 'sighed rather than spoken' and a balanced contrast of silences to sound reflective. (c) A strong response opens with a vivid scene of break time, argues for trust, and closes by echoing it with a challenge to the council.",
            levels: levels(18, "writing for audience and purpose", "c"),
            commonErrors: ["Writing two unrelated paragraphs, with no echo.", "A casual register for a formal audience.", "A conclusion that merely repeats."],
          },
        },
      ],
    },
    {
      id: "el11-u2-counter-argument",
      title: "Counter-argument and rebuttal",
      skill: "Acknowledge an opposing view fairly and answer it persuasively to strengthen your own case.",
      lesson: {
        sections: [
          {
            heading: "Why concede?",
            body: "Writers who ignore the other side seem biased. Writers who acknowledge it, fairly, seem confident. A concession such as 'It is true that...' or 'Some will say...' builds credibility. The key is what follows: a pivot word (**however**, **yet**, **but**) and a rebuttal that explains why the opposing view is incomplete, outdated or outweighed.",
          },
          {
            heading: "Structure of a counter-argument paragraph",
            body: "Use the pattern **Concession, Pivot, Rebuttal, Evidence**. Present the opposing point in its strongest form so that your rebuttal is persuasive. Support the rebuttal with a fact, example or analogy, then link back to your thesis. Place counter-arguments in the middle or just before the conclusion so that your own view has the last word.",
          },
          {
            heading: "Tone and register",
            body: "Avoid mocking opponents. Respectful phrases such as 'It is tempting to think', 'Critics point out' and 'There is some truth in this' maintain a measured voice. Vary the way you introduce opposing views so your writing does not become formulaic.",
          },
        ],
        keyFormulas: [
          { name: "Concession-pivot-rebuttal", statement: "'It is true that X; however, Y, because Z.'" },
          { name: "Strongest form", statement: "State the opposing view fairly before you answer it, so the rebuttal carries weight." },
          { name: "Link back", statement: "End the paragraph by tying the rebuttal to your main argument." },
        ],
        workedExample: {
          problem: "Write a counter-argument paragraph for an article arguing that homework should be abolished.",
          solution: "Model: 'Critics argue that homework teaches discipline, and there is truth in this: a student who finishes a difficult task alone has learned something no lesson can supply. Yet discipline cannot grow where exhaustion rules. A recent school survey found that a third of teenagers sleep fewer than six hours on weeknights, and no one learns responsibility from a tired mind. Self-discipline, like any muscle, needs rest as well as exercise, and our current system offers only the exercise.' The concession is genuine, the pivot 'Yet' is crisp, the rebuttal uses evidence and a metaphor, and the final sentence links back to the thesis.",
        },
      },
      questions: [
        {
          id: "el11-u2-counter-argument-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is the best example of a concession followed by a pivot?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many people disagree with me, but they are wrong." },
              { id: "b", text: "Exams are stressful, which is why they are stressful." },
              { id: "c", text: "It is true that exams reduce stress for some pupils; however, they test memory far more than understanding." },
              { id: "d", text: "Exams are awful and nobody should have to take them." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Concession and pivot", statement: "Acknowledge fairly, then pivot with 'however' to a reasoned point." }],
            steps: [{ reasoning: "Sentence (a) grants a fair point and pivots to a reasoned objection, whereas (c) dismisses opponents without reason.", evidence: "It is true that ... however", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)** It concedes a fair point and pivots with a reason.",
            commonErrors: ["Choosing (c), which mentions the other side but gives no reason.", "Choosing (d), which is circular."],
          },
        },
        {
          id: "el11-u2-counter-argument-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Rewrite this paragraph so that it acknowledges an opposing view before rebutting it: 'School uniform is unfair. It costs a lot. Pupils should wear their own clothes.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Concession-pivot-rebuttal", statement: "Concede, pivot, rebut with a reason." }],
            steps: [
              { reasoning: "A genuine concession of the opposing view, such as that uniform creates equality.", marks: 1, markCode: "AO4" },
              { reasoning: "A clear pivot (however, yet) and rebuttal with a reason, such as cost for families.", marks: 1, markCode: "AO4" },
              { reasoning: "Accurate punctuation and a measured tone, linked to the thesis.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "Model: 'Supporters say that uniform erases the differences between rich and poor pupils, and that is a fair point. However, a blazer, two pairs of shoes and a games kit can cost a family hundreds of pounds, so the policy meant to create equality can itself create hardship.'",
            commonErrors: ["Only adding 'some people disagree' with no response.", "Insulting the opposing side."],
          },
        },
        {
          id: "el11-u2-counter-argument-q3",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Write two paragraphs (about 200 words) for an article arguing that sport should be compulsory in school until the age of sixteen. Include a counter-argument and a rebuttal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Argument structure", statement: "Clear thesis, supported point, fair counter-argument and effective rebuttal." },
              { kind: "technique", name: "Rhetorical devices", statement: "Evidence, emotive language and rhythm used purposefully." },
            ],
            steps: [
              { reasoning: "A clear point with evidence or example supporting compulsory sport.", marks: 3, markCode: "AO4" },
              { reasoning: "A fair, strongest-form counter-argument introduced with a concession.", marks: 2, markCode: "AO4" },
              { reasoning: "A reasoned rebuttal with a pivot and link back to the thesis.", marks: 3, markCode: "AO4" },
              { reasoning: "Technical accuracy and varied sentences.", marks: 2, markCode: "AO5" },
            ],
            finalAnswer: "A top-band response states the benefits of compulsory sport, concedes that some pupils dislike or feel excluded, and rebuts by offering the argument that variety and non-competitive options solve this while the health and teamwork benefits remain.",
            levels: levels(10, "argument structure and rebuttal"),
            commonErrors: ["Setting up a weak 'straw man' counter-argument.", "Pivoting without a reason.", "Forgetting to link back."],
          },
        },
        {
          id: "el11-u2-counter-argument-q4",
          difficulty: "challenge",
          totalMarks: 26,
          stem: "Task: Your local council plans to ban cars from the town centre. You are going to write an article for a local newspaper.",
          parts: [
            { label: "a", prompt: "List three arguments for and two arguments against the ban.", marks: 5 },
            { label: "b", prompt: "Write a counter-argument and rebuttal paragraph (about 100 words) answering the strongest argument against the ban.", marks: 6 },
            { label: "c", prompt: "Write the full article (about 450 words) arguing for the ban. Remember to include a hook, a counter-argument and a memorable conclusion.", marks: 15 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Planning", statement: "A bank of arguments and the strongest opposing view guides a structured article." },
              { kind: "convention", name: "Counter-argument paragraph", statement: "Concession, pivot, rebuttal, evidence, link." },
              { kind: "convention", name: "Newspaper article", statement: "Headline, engaging opening, structured argument, strong ending, clear audience awareness." },
            ],
            steps: [
              { part: "a", reasoning: "Three valid arguments for (such as cleaner air, safety, thriving cafes).", marks: 3, markCode: "AO4" },
              { part: "a", reasoning: "Two valid arguments against (such as access for disabled people, trader worries).", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Fair concession of the strongest opposing point, such as access for the elderly or disabled.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Reasoned rebuttal with a solution (for example shuttle buses, blue badge exemptions).", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Accurate, controlled sentences with a link to the thesis.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Engaging hook, clear structure and sustained viewpoint with a memorable conclusion.", marks: 7, markCode: "AO4" },
              { part: "c", reasoning: "Appropriate tone and register for a local newspaper, using rhetorical devices with control.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Accurate and varied sentence structures, secure punctuation and spelling, ambitious vocabulary.", marks: 4, markCode: "AO5" },
            ],
            finalAnswer: "(a) For: cleaner air, safer streets, more business for cafes. Against: access for disabled and elderly residents, trader fears. (b) Acknowledge access concerns, then rebut with shuttle services and exemptions. (c) A top-band article opens with a vivid scene of the congested street, builds the case in structured paragraphs, concedes and rebuts, and ends with a call to action.",
            levels: [...levels(6, "counter-argument", "b"), ...levels(15, "writing for audience and purpose", "c")],
            commonErrors: ["No plan.", "A list of reasons with no development.", "Ending with 'In conclusion'."],
          },
        },
      ],
    },
  ],
};
