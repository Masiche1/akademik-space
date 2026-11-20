import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6 } from "./levels.ts";

const ARGUMENT: TextExtract = {
  title: "Let Students Sleep",
  author: "Written for Akademik Space",
  text: "Middle schools should start no earlier than 8:30 a.m. Right now, many students in our district must be in their seats by 7:20, which means waking before 6:00. Doctors recommend that teenagers sleep between eight and ten hours each night. However, a survey of 120 seventh graders at our school found that the average student sleeps only seven hours on school nights.\n\nThis lack of sleep affects learning. Tired students struggle to pay attention, and teachers report that first-period classes are often the quietest and slowest of the day. When one district moved its first bell forty minutes later, the nurse's office reported fewer visits for headaches and drowsiness.\n\nSome people argue that a later start would push sports practices past sunset. This concern is reasonable, but it can be solved. Schools can share lighted fields, and teams can begin practice twenty minutes earlier by shortening the break between the last class and practice.\n\nSo that is why I think school should start later. Thanks for reading.",
};

const BEES: TextExtract = {
  title: "Honeybees (draft)",
  author: "Written for Akademik Space",
  text: "Honeybees are really cool. They do a lot of stuff in the hive. Worker bees do things like cleaning and getting food. The queen lays eggs, sometimes up to 2,000 in one day. Honeybees also dance to tell other bees where flowers are. Bees are important because they help plants and things.",
};

export const lesson31: Lesson = {
  id: "ela7-u3-lesson-3-1",
  code: "3-1",
  title: "Argument and Informative Writing",
  goal: "I CAN write an argument with a clear claim, reasons, evidence and a counterclaim, and an informative text that is organized and uses precise language.",
  standards: ["W.7.1", "W.7.2", "W.7.4", "L.7.3"],
  vocabulary: [
    { term: "Claim", definition: "The position a writer argues for; the main point of an argument." },
    { term: "Reason", definition: "A statement that explains why the claim is true." },
    { term: "Evidence", definition: "Facts, statistics, examples or quotations that support a reason." },
    { term: "Counterclaim", definition: "An opposing point of view that a writer acknowledges and answers." },
    { term: "Rebuttal", definition: "The part of an argument that shows why a counterclaim is weak or can be solved." },
    { term: "Controlling idea", definition: "The main point of an informative paragraph or essay that every detail supports." },
    { term: "Precise language", definition: "Specific, accurate words and domain vocabulary instead of vague words like stuff or things." },
  ],
  concepts: [
    {
      id: "ela7-u3-argument-claims",
      title: "Argument: claim, reasons, evidence, counterclaim",
      skill: "Write and revise an argument that supports a claim with logical reasons and relevant evidence, and answers an opposing view.",
      lesson: {
        sections: [
          {
            heading: "The shape of an argument",
            body: "A strong argument begins with a clear **claim** in the introduction. Each body paragraph then gives a **reason** and supports it with **evidence**: a statistic, an example, a fact or an expert opinion. Evidence must be relevant (it proves the reason) and credible (it comes from a trustworthy source or a specific observation). 'Everyone knows it' is not evidence.",
          },
          {
            heading: "Answering the other side",
            body: "Seventh-grade arguments must also acknowledge a **counterclaim**: what someone who disagrees might say. Present it fairly, then give a **rebuttal** that explains why your claim still stands or how the problem can be solved. This makes you sound reasonable and makes your argument harder to dismiss. Finish with a conclusion that follows from the argument by restating the claim in new words and explaining why it matters.",
          },
        ],
        keyFormulas: [
          { name: "Claim", statement: "A debatable position, stated clearly, usually in the introduction." },
          { name: "Reasons and evidence", statement: "Each reason answers 'why?'; each piece of evidence proves the reason with a specific fact or example." },
          { name: "Counterclaim and rebuttal", statement: "Acknowledge an opposing view fairly, then answer it with logic or evidence." },
        ],
        workedExample: {
          problem: "A student claims that schools should have a longer lunch period. Write a counterclaim and rebuttal sentence pair.",
          solution: "Some people argue that a longer lunch would cut into classroom time. However, the school day could stay the same length if the three-minute passing periods were shortened by one minute each, which would give students an extra fifteen minutes to eat. The first sentence names the opposing view fairly. The second answers it with a practical solution, which strengthens the claim instead of ignoring the objection.",
        },
      },
      questions: [
        {
          id: "ela7-u3-argument-claims-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ARGUMENT,
          stem: "Which sentence states the writer's claim?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many students in our district must be in their seats by 7:20." },
              { id: "b", text: "Middle schools should start no earlier than 8:30 a.m." },
              { id: "c", text: "Tired students struggle to pay attention." },
              { id: "d", text: "Some people argue that a later start would push sports practices past sunset." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Claim", statement: "The claim is the position the writer argues for, not a supporting fact or an opposing view." }],
            steps: [{ reasoning: "The opening sentence takes a position that others could disagree with, and the rest of the essay supports it.", evidence: "Middle schools should start no earlier than 8:30 a.m.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)**. It is the debatable position. Choice (a) is a supporting fact, (c) is a reason, and (d) is the counterclaim.",
            commonErrors: ["Choosing a reason such as (c) because it sounds like an opinion."],
          },
        },
        {
          id: "ela7-u3-argument-claims-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student argues that students do not get enough sleep. Which piece of evidence best supports this reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleep is very important for everyone." },
              { id: "b", text: "Everyone I know is tired in the morning." },
              { id: "c", text: "A survey of 120 seventh graders found that the average student sleeps only seven hours on school nights." },
              { id: "d", text: "Mornings are hard for most people." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluating evidence", statement: "Strong evidence is specific, relevant to the reason and credible." }],
            steps: [
              { reasoning: "The survey is directly relevant: it measures how much sleep students actually get.", marks: 1, markCode: "AO4" },
              { reasoning: "It is specific and credible because it gives a sample size and a measurable result, unlike general opinions.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(c)**. It is specific, measurable and relevant. Choices (a) and (d) are general statements, and (b) is a vague personal impression.",
            commonErrors: ["Choosing a true but general statement that does not prove the reason."],
          },
        },
        {
          id: "ela7-u3-argument-claims-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student argues that students should be allowed to bring water bottles into every classroom. Write one paragraph (4-6 sentences) that states a counterclaim and rebuts it with a reason and evidence or an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counterclaim and rebuttal", statement: "Acknowledge an opposing view fairly, then answer it with logic or specific support." },
              { kind: "convention", name: "Formal argument style", statement: "Use transitions and an objective tone that suits an argument essay." },
            ],
            steps: [
              { reasoning: "States the counterclaim fairly and accurately, for example that spills could damage books and computers.", marks: 2, markCode: "AO4" },
              { reasoning: "Rebuts with a clear reason and a specific example or evidence, such as sealed, spill-proof bottles or a rule limiting bottles to water only.", marks: 2, markCode: "AO4" },
              { reasoning: "Uses transitions such as 'however' and a formal tone, with correct punctuation and grammar.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "Some teachers worry that open bottles could spill on books and computers. However, this risk is small and easy to manage. If the school requires screw-top, spill-proof bottles filled only with water, accidents become rare, and many schools that allow bottles report no more spills than before. The benefit of staying hydrated, which helps students concentrate, far outweighs the minor risk.",
            commonErrors: ["Ignoring the counterclaim or dismissing it as silly.", "Rebutting with an opinion and no example.", "Switching to an informal voice ('That is dumb')."],
          },
        },
        {
          id: "ela7-u3-argument-claims-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: ARGUMENT,
          stem: "Answer all parts of this question about the draft argument 'Let Students Sleep'.",
          parts: [
            { label: "a", prompt: "Identify two pieces of evidence the writer uses to support the reasons in paragraphs 1 and 2.", marks: 2 },
            { label: "b", prompt: "Explain how the writer's third paragraph strengthens the argument.", marks: 4 },
            { label: "c", prompt: "The final paragraph is weak. Rewrite it as a strong conclusion of three or four sentences that restates the claim in new words and explains why it matters.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating support", statement: "Identify specific evidence rather than general statements." },
              { kind: "technique", name: "Counterclaim", statement: "Acknowledging and answering an opposing view makes the writer sound fair and the argument harder to dismiss." },
              { kind: "convention", name: "Argument conclusion", statement: "A conclusion follows from the argument, restates the claim in new words and leaves the reader with a final thought." },
            ],
            steps: [
              { part: "a", reasoning: "A survey with a measurable result supports the reason that students lack sleep.", evidence: "a survey of 120 seventh graders", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "A real-world example supports the reason that tiredness affects health and learning.", evidence: "the nurse's office reported fewer visits for headaches and drowsiness", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "It acknowledges an opposing view fairly, which makes the writer seem reasonable and balanced.", evidence: "This concern is reasonable", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "It rebuts the objection with practical solutions, showing the claim still stands.", evidence: "Schools can share lighted fields", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Restates the claim in new words rather than copying the opening sentence.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Summarizes the strongest reason and explains why the issue matters to students and the community.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Uses a formal tone and correct conventions, avoiding chatty phrases such as 'Thanks for reading'.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing", "c"),
            finalAnswer: "(a) The survey of 120 seventh graders; the nurse's office reporting fewer headache and drowsiness visits. (b) The third paragraph treats the sports objection fairly ('This concern is reasonable') and then solves it, so the argument seems balanced and stronger. (c) 'Schools exist to help students learn, and rested students learn best. A start time of 8:30 a.m. would give students the sleep that doctors recommend and make classrooms more alert. Our district should adopt the change this year so that every student has a better chance to succeed.'",
            commonErrors: ["In (a), giving a reason instead of evidence.", "In (b), saying only that the writer 'talks about sports' with no comment on effect.", "In (c), repeating the first sentence word for word or adding new arguments."],
          },
        },
      ],
    },
    {
      id: "ela7-u3-informative-writing",
      title: "Informative writing: organization and precise language",
      skill: "Organize an informative text around a controlling idea and develop it with precise, domain-specific language and relevant facts.",
      lesson: {
        sections: [
          {
            heading: "A controlling idea and clear organization",
            body: "Informative writing explains a topic to a reader. Start with a **controlling idea**: a sentence that tells the reader what the paragraph or essay is mostly about. Then group related facts together and order them logically: by importance, by time, or by category. Use headings or topic sentences so the reader can see the plan. Every detail should develop the controlling idea; delete details that do not.",
          },
          {
            heading: "Precise, formal language",
            body: "Replace vague words ('stuff', 'things', 'really cool') with **precise language**: exact nouns and verbs and the vocabulary of the topic, such as 'larvae', 'nectar' or 'colony'. Support each point with concrete facts, definitions, quotations or examples. Keep an objective, formal tone: avoid slang and personal comments such as 'I think it is neat'.",
          },
        ],
        keyFormulas: [
          { name: "Controlling idea", statement: "A sentence that names the topic and the main point the details will develop." },
          { name: "Concrete details", statement: "Facts, definitions, examples and quotations that make a general statement specific." },
          { name: "Precise language", statement: "Exact words and topic vocabulary that replace vague terms." },
        ],
        workedExample: {
          problem: "Revise this sentence to be more precise: 'Plants need stuff to grow.'",
          solution: "Plants need sunlight, water, carbon dioxide and nutrients from the soil to grow. The vague word 'stuff' is replaced with four specific nouns, and the sentence now teaches the reader something. A further revision could add the process: 'Using sunlight, plants turn water and carbon dioxide into the sugars they need for energy.'",
        },
      },
      questions: [
        {
          id: "ela7-u3-informative-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which revision replaces the vague phrase 'do a lot of stuff in the hive' with the most precise language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worker bees do many things in the hive." },
              { id: "b", text: "Worker bees are busy in the hive." },
              { id: "c", text: "Worker bees build wax cells, feed larvae and guard the entrance." },
              { id: "d", text: "Worker bees do lots of different jobs all day." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Precise language", statement: "Replace vague words with specific nouns and verbs." }],
            steps: [{ reasoning: "Choice (c) names three exact jobs, so the reader learns real information. The other choices stay vague.", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(c)**. It uses specific verbs and topic vocabulary (wax cells, larvae). Choices (a), (b) and (d) are as vague as the original.",
            commonErrors: ["Choosing a version that sounds longer but is not more specific."],
          },
        },
        {
          id: "ela7-u3-informative-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is the best controlling idea for a paragraph about the jobs bees do in a hive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like honeybees a lot." },
              { id: "b", text: "Honeybees are insects." },
              { id: "c", text: "A honeybee colony runs smoothly because each bee has a specific job." },
              { id: "d", text: "Have you ever seen a bee up close?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Controlling idea", statement: "A sentence naming the topic and the main point that all details in the paragraph develop." }],
            steps: [
              { reasoning: "It names the topic (the colony) and makes a main point that can be developed with examples of jobs.", marks: 1, markCode: "AO4" },
              { reasoning: "It uses an objective, formal voice, unlike the opinion in (a) and the question in (d). The bare fact in (b) gives nothing to develop.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "**(c)**. It sets up the paragraph's focus on roles in the hive.",
            commonErrors: ["Choosing a true fact like (b), which is too broad to organize a paragraph."],
          },
        },
        {
          id: "ela7-u3-informative-writing-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: BEES,
          stem: "Rewrite sentences 2 and 3 of the draft ('They do a lot of stuff in the hive. Worker bees do things like cleaning and getting food.') as three or four sentences of precise, formal informative writing. Include at least one specific fact or example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precise language", statement: "Use exact nouns, verbs and topic vocabulary." },
              { kind: "skill", name: "Concrete detail", statement: "Support general statements with facts, definitions or examples." },
            ],
            steps: [
              { reasoning: "Replaces vague words such as 'stuff' and 'things' with precise vocabulary like 'nectar', 'larvae', 'wax cells' or 'colony'.", marks: 2, markCode: "AO4" },
              { reasoning: "Adds a specific fact or example, for instance the age at which a worker bee changes jobs or what she feeds the larvae.", marks: 2, markCode: "AO4" },
              { reasoning: "Keeps a formal, objective tone with correct sentence structure and punctuation.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "Inside the hive, each worker bee performs a series of specialized jobs. Young workers clean the wax cells and feed the larvae, while older workers collect nectar and pollen from flowers. This division of labor allows a colony of tens of thousands of bees to function as a single organized community.",
            commonErrors: ["Replacing 'stuff' with another vague word such as 'work'.", "Adding opinions ('bees are amazing').", "Writing a longer paragraph that adds no new facts."],
          },
        },
        {
          id: "ela7-u3-informative-writing-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: BEES,
          stem: "Answer all parts of this question about the draft 'Honeybees'.",
          parts: [
            { label: "a", prompt: "Identify two words or phrases in the draft that are too vague or informal for informative writing.", marks: 2 },
            { label: "b", prompt: "The draft jumps between the hive, the queen, communication and plants. Explain how reorganizing the paragraph around a controlling idea would help the reader.", marks: 4 },
            { label: "c", prompt: "Rewrite the last two sentences of the draft ('Honeybees also dance... help plants and things.') as a precise, formal paragraph ending that explains why bees matter to people.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precise, formal language", statement: "Informative writing avoids vague words, slang and personal comments." },
              { kind: "skill", name: "Organization", statement: "A controlling idea and logical grouping of details help the reader follow the explanation." },
            ],
            steps: [
              { part: "a", reasoning: "'Really cool' is informal and vague; it gives an opinion instead of information.", evidence: "really cool", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "'Stuff' and 'things' are vague words that tell the reader nothing specific.", evidence: "a lot of stuff", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "A controlling idea tells the reader what the whole paragraph is about, so each fact has a clear purpose.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Grouping related facts (jobs, communication, importance) in a logical order makes the explanation easier to follow and removes irrelevant jumps.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Replaces 'dance' and 'things' with accurate detail, such as the waggle dance showing direction and distance to flowers.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Explains the importance with concrete facts, for example that bees pollinate crops such as apples and almonds.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Maintains a formal, objective tone and correct conventions, ending with a concluding statement that follows from the information.", marks: 2, markCode: "AO5" },
            ],
            levels: levels6("writing", "c"),
            finalAnswer: "(a) 'really cool'; 'stuff' (also 'things'). (b) A controlling idea would focus the paragraph, and grouping facts by topic would show the reader how they connect. (c) 'Honeybees communicate through a waggle dance that shows other workers the direction and distance of flowers. This teamwork matters to people as well, because bees pollinate crops such as apples and almonds. Without honeybees, many foods would become harder to grow.'",
            commonErrors: ["In (a), picking correct but technical words.", "In (b), saying 'it would be neater' with no explanation of how it helps the reader.", "In (c), keeping 'things' or adding opinions."],
          },
        },
      ],
    },
  ],
};
