import type { Lesson, MarkLevel, TextExtract } from "../../../types.ts";

// Builds a level-based scheme whose top band equals the marks available.
const levels = (top: number, focus: string, part?: string): MarkLevel[] => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k: number) => Math.round((top * k) / n);
  const ladder = [
    `Perceptive, assured and discriminating ${focus}; judicious, well-chosen evidence`,
    `Thorough ${focus}; well-chosen, effective references`,
    `Clear, relevant ${focus}; appropriate references`,
    `Some understanding; ${focus} is partly developed with some relevant references`,
    `Simple, limited ${focus}; few or unselective references`,
  ];
  const pick = n === 3 ? [0, 2, 4] : n === 4 ? [0, 2, 3, 4] : [0, 1, 2, 3, 4];
  return pick.map((li, i) => ({
    level: `Level ${n - i}`,
    marks: `${upper(n - i - 1) + 1}-${upper(n - i)}`,
    descriptor: ladder[li] ?? "",
    ...(part ? { part } : {}),
  }));
};

const SHED: TextExtract = {
  title: "The Shed",
  author: "Written for Akademik Space",
  source: "Original memoir extract",
  text:
    "My grandfather's allotment shed smelled of creosote and old rope. He had labelled everything: nails by length in jam jars, seed packets by year, even the string, wound into tight balls and tagged 'Short - Do Not Throw Away'. My mother, who had never been allowed past the door, stood on the threshold holding her car keys as if she might need to leave in a hurry.\n\n'He never let anyone help,' she said, to nobody. I found his flask on the workbench, still half full, the tea gone to a cold brown skin. I could not bring myself to pour it out. Outside, the neighbouring plots were busy with people who waved and called to each other across the fences. His had been the only gate with a padlock.",
};

const RAILWAY: TextExtract = {
  title: "Next Stop: Gratitude",
  author: "Written for Akademik Space",
  source: "Original newspaper column",
  text:
    "We are, I understand, privileged. This week the railway company announced, in a statement of heartbreaking honesty, that the 7.42 will henceforth depart at 7.38 'to better serve our valued customers'. Those of us who arrive at 7.40 will now be served, presumably, by the platform.\n\nI am told the change reflects extensive consultation. I would love to meet the consultants: they must be remarkable people, able to hear the sound of a commuter sprinting across a footbridge and mistake it for applause.\n\nThe company has also introduced a new 'Journey Promise'. If your train is delayed by more than an hour, you may fill in a form, which will be considered within twenty-eight working days. It is good to see progress. Last year the form was available only to those who could find it.",
};

export const lesson11: Lesson = {
  id: "el11-u1-lesson-1-1",
  code: "1-1",
  title: "Subtle Inference, Irony and Tone",
  goal: "I CAN read between the lines to identify implicit attitudes, and explain how irony and tone shape a writer's meaning.",
  standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2"],
  vocabulary: [
    { term: "Inference", definition: "A conclusion about meaning that is not stated directly but is supported by evidence in the text." },
    { term: "Implicit", definition: "Suggested or implied rather than stated openly." },
    { term: "Connotation", definition: "The ideas, feelings or associations a word carries beyond its literal meaning." },
    { term: "Irony", definition: "A gap between what is said and what is meant, often used to criticise or mock." },
    { term: "Sarcasm", definition: "Bitter, mocking language in which praise is used to express contempt." },
    { term: "Tone", definition: "The writer's attitude towards the subject or reader, created through word choice, rhythm and imagery." },
    { term: "Understatement", definition: "Deliberately describing something as less important or serious than it is." },
  ],
  concepts: [
    {
      id: "el11-u1-subtle-inference",
      title: "Subtle inference and implicit attitudes",
      skill: "Infer unstated feelings and attitudes from small details, and support each inference with a precise quotation.",
      lesson: {
        sections: [
          {
            heading: "From detail to inference",
            body: "Top-band reading answers do not stop at what the text says. They ask what a detail suggests. A writer who tells us a character 'stood on the threshold holding her car keys' never says she is uneasy, but the posture and the prop do the work. Start with a small, exact detail, name what it implies, then explain which word or image creates that implication.",
          },
          {
            heading: "Reading attitudes, not just facts",
            body: "A writer's attitude can sit in the choice of one verb, a contrast between two sentences, or a detail placed last for emphasis. Look for **what is withheld** as well as what is shown: silence, an unfinished action and an object left untouched are often more revealing than a declared emotion. Use tentative, precise verbs such as 'implies', 'hints' and 'suggests' and avoid vague claims like 'it shows he is sad'.",
          },
          {
            heading: "Building the answer",
            body: "Use a three-step chain: **point** (the inference), **evidence** (a short embedded quotation), **explanation** (how a particular word or image produces the idea). Two or three connected inferences with well-chosen evidence will always beat a long list of loosely supported ones.",
          },
        ],
        keyFormulas: [
          { name: "Inference chain", statement: "Detail, then what it implies, then how the word choice or image creates that implication." },
          { name: "Implicit attitude", statement: "A view the writer or character holds but never states, shown through selection of detail, contrast or silence." },
          { name: "Connotation", statement: "The associations of a word: 'padlock' denotes a lock but connotes secrecy, suspicion and exclusion." },
        ],
        workedExample: {
          problem: "Read the final sentence of 'The Shed'. What does the final sentence ('His had been the only gate with a padlock') suggest about the grandfather? Support your answer with evidence.",
          solution: "The sentence suggests that the grandfather was isolated by choice and perhaps distrustful of others. The contrast with 'neighbouring plots ... busy with people who waved and called to each other' sets a lively community against his closed world, and 'only gate' emphasises that he alone shut himself off. The noun 'padlock' connotes secrecy and defence, implying he guarded his private life even in a place of shared activity. Because the sentence ends the extract, it leaves the reader with a lasting image of his solitude, and the past perfect 'had been' hints at loss, as the narrator now looks back on a life that can no longer be changed.",
        },
      },
      questions: [
        {
          id: "el11-u1-subtle-inference-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SHED,
          stem: "Read the first paragraph of 'The Shed'. What does the detail 'holding her car keys as if she might need to leave in a hurry' suggest about the mother?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She has another appointment and is short of time." },
              { id: "b", text: "She feels uneasy and would prefer not to stay." },
              { id: "c", text: "She is angry with the narrator for being there." },
              { id: "d", text: "She wants to take charge of clearing the shed." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference from behaviour", statement: "A character's posture or props can imply feelings the writer never states." }],
            steps: [
              { reasoning: "The simile-like 'as if she might need to leave in a hurry' implies readiness to escape, so she is uncomfortable. Credit for identifying unease.", evidence: "as if she might need to leave in a hurry", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** She feels uneasy and would prefer not to stay. The phrase 'as if' signals a reaction to the place, not a literal schedule.",
            commonErrors: ["Taking the car keys literally and choosing (b).", "Reading the text as conflict between mother and narrator when no hostile word is used."],
          },
        },
        {
          id: "el11-u1-subtle-inference-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SHED,
          stem: "Read the second paragraph. What does the detail of the flask ('the tea gone to a cold brown skin') suggest about the narrator's feelings? Use a quotation in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Embedding evidence", statement: "Weave a short quotation into your sentence and explain the idea it carries." }],
            steps: [
              { reasoning: "Makes a clear inference: the narrator feels grief or tenderness and cannot let go of the grandfather's presence.", marks: 1, markCode: "AO1" },
              { reasoning: "Supports it with an apt quotation showing she preserves the flask.", evidence: "I could not bring myself to pour it out", marks: 1, markCode: "AO1" },
              { reasoning: "Explains how the decayed tea ('cold brown skin') contrasts with her refusal to dispose of it, so the decay shows time has passed while her attachment has not.", evidence: "cold brown skin", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The narrator feels a tender, painful attachment. She 'could not bring myself to pour it out' even though the tea has decayed to a 'cold brown skin', showing that this ordinary object has become a last link to her grandfather.",
            commonErrors: ["Saying only 'she is sad' with no quotation.", "Describing the tea as disgusting and missing the emotional contrast."],
          },
        },
        {
          id: "el11-u1-subtle-inference-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SHED,
          stem: "How does the writer suggest that the grandfather was a private and isolated man? Support your answer with evidence from the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Linked inferences", statement: "Develop two or three inferences, each tied to a precise quotation and an explanation of the word choice." },
              { kind: "technique", name: "Contrast", statement: "Setting one image against another highlights meaning, as the padlocked gate stands against the waving neighbours." },
            ],
            steps: [
              { reasoning: "His obsessive labelling implies control and a need for order rather than company; 'labelled everything' suggests a self-contained world.", evidence: "labelled everything", marks: 1, markCode: "AO1" },
              { reasoning: "The tag 'Do Not Throw Away' on mere string implies he hoarded and protected small things, perhaps from fear of loss.", evidence: "Short - Do Not Throw Away", marks: 1, markCode: "AO2" },
              { reasoning: "The mother 'had never been allowed past the door' shows his exclusion extended even to family.", evidence: "never been allowed past the door", marks: 2, markCode: "AO1" },
              { reasoning: "The final contrast between sociable neighbours and the 'padlock' makes his isolation visible and deliberate, and the position at the close gives it emphasis.", evidence: "the only gate with a padlock", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "A top answer links the labelling, the mother's exclusion and the final padlock image, explaining that each detail implies a man who chose control and privacy over connection, with the closing contrast with sociable neighbours giving the idea lasting force.",
            levels: levels(6, "inference and comment on the writer's methods"),
            commonErrors: ["Listing details without saying what they imply.", "Writing 'the padlock shows he was private' without exploring the word's connotations.", "Retelling the extract line by line."],
            examinerNote: "Reward inference first. Terminology is only credited where it supports a point about effect.",
          },
        },
        {
          id: "el11-u1-subtle-inference-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: SHED,
          stem: "Read the whole extract from 'The Shed'.",
          parts: [
            { label: "a", prompt: "From the first paragraph, give two things that were labelled or tagged in the shed.", marks: 2 },
            { label: "b", prompt: "Explain what the mother's comment 'He never let anyone help' (second paragraph) suggests about her relationship with her father.", marks: 4 },
            { label: "c", prompt: "How does the writer present the narrator's mixed feelings about her grandfather? Support your answer with evidence from the extract.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Copy or closely paraphrase only the details asked for; one mark per point." },
              { kind: "skill", name: "Inference", statement: "Move from a quotation to what it implies about feelings and relationships." },
              { kind: "technique", name: "Juxtaposition", statement: "Placing tenderness beside criticism or distance reveals conflicted feeling." },
            ],
            steps: [
              { part: "a", reasoning: "Credit nails (by length).", evidence: "nails by length in jam jars", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Credit seed packets or the balls of string.", evidence: "seed packets by year", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Suggests resentment or hurt: the mother was shut out by a man who refused support.", evidence: "He never let anyone help", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'to nobody' implies she is speaking to herself, so the grievance is unresolved and she has no one to share it with.", evidence: "to nobody", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The flat, short statement suggests acceptance mixed with sadness rather than anger.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Links to her hesitation at the door, implying distance has existed for years.", evidence: "never been allowed past the door", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Tenderness: she cannot pour away the tea and treats the flask as precious.", evidence: "I could not bring myself to pour it out", marks: 2, markCode: "AO1" },
              { part: "c", reasoning: "Detached observation of his obsessive order ('tagged') gently hints at exasperation or puzzlement.", evidence: "tight balls and tagged", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The final padlock image combines sympathy with disappointment: his isolation was his own choice but is a source of regret.", evidence: "the only gate with a padlock", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) Nails (by length) and seed packets (by year) or string. (b) The comment implies hurt and resentment: her father shut her out, and 'to nobody' suggests she has no audience for a long-held grievance. (c) The narrator is tender (she cannot discard the tea) yet quietly critical of his need for control and locked-away life, so the closing padlock image carries both sympathy and regret.",
            levels: levels(6, "analysis of the narrator's feelings", "c"),
            commonErrors: ["In (a) writing more than the two details asked for.", "In (b) paraphrasing the quotation without inferring the relationship.", "In (c) arguing she simply loved or simply disliked him."],
          },
        },
      ],
    },
    {
      id: "el11-u1-irony-tone",
      title: "Irony and tone",
      skill: "Recognise irony and identify the writer's tone, explaining how word choice and contrast create it.",
      lesson: {
        sections: [
          {
            heading: "What irony does",
            body: "Verbal irony means saying one thing while meaning another. It is a writer's most economical way to criticise: the reader is invited into a shared joke at someone else's expense. Spot it when praise is too extravagant for the facts ('a statement of heartbreaking honesty' about a timetable cut) or when a bland phrase sits beside an obviously bad outcome.",
          },
          {
            heading: "Naming and proving tone",
            body: "Tone is the writer's attitude, so do not settle for 'negative'. Choose a precise word (sardonic, wry, indignant, wistful, earnest) and prove it with two or three pieces of evidence: hyperbole, mock-formal vocabulary, short deflating sentences, rhetorical questions. A tone can shift within a text, so track where it changes and why.",
          },
          {
            heading: "Writing about effect",
            body: "Always finish with the effect on the reader: irony makes us laugh, distrust the target of the criticism or feel the writer's frustration. Explain **how** a particular phrase generates that response, for example by exposing a gap between a company's claims and its actions.",
          },
        ],
        keyFormulas: [
          { name: "Verbal irony", statement: "The intended meaning is the opposite of, or very different from, the literal words." },
          { name: "Sardonic tone", statement: "Grimly mocking; criticism delivered with dry, bitter humour." },
          { name: "Deflation", statement: "A grand build-up followed by a trivial or negative detail, which exposes pretension." },
        ],
        workedExample: {
          problem: "How does the writer of 'Next Stop: Gratitude' use irony in the opening sentence?",
          solution: "The writer opens with 'We are, I understand, privileged', which seems to praise the railway company but, as the column reveals, means the opposite: commuters are being treated poorly. The parenthetical 'I understand' adds a mock-formal, faintly weary voice, as though the writer is repeating the company's line without believing it. The next phrase, 'heartbreaking honesty', is hyperbolic praise for a statement that merely hides a timetable cut behind jargon, so the gap between the label and the reality creates the irony. The reader is invited to share the writer's contempt and to distrust the company's language from the first line.",
        },
      },
      questions: [
        {
          id: "el11-u1-irony-tone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RAILWAY,
          stem: "Read the first paragraph. What does the writer mean by 'Those of us who arrive at 7.40 will now be served, presumably, by the platform'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Passengers who arrive at 7.40 will miss the train and be left with nothing but the platform." },
              { id: "b", text: "The platform staff will give special help to late arrivals." },
              { id: "c", text: "The writer is grateful that the company now runs an earlier service." },
              { id: "d", text: "The station will now provide food and drink on the platform." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Verbal irony", statement: "'Served' is used with the opposite of its normal meaning: the passengers get no service at all." }],
            steps: [
              { reasoning: "Identifies the ironic use of 'served': the train leaves at 7.38, so a 7.40 arrival is left standing on the platform.", evidence: "served, presumably, by the platform", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** The late arrivals miss the train; 'served by the platform' is sarcastic.",
            commonErrors: ["Taking 'served' literally (b, c).", "Missing the sarcasm and reading the column as praise (d)."],
          },
        },
        {
          id: "el11-u1-irony-tone-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: RAILWAY,
          stem: "Explain how the phrase 'a statement of heartbreaking honesty' (first paragraph) is ironic. Use a quotation from the extract in your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hyperbolic praise", statement: "Exaggerated praise for something poor exposes the gap between claim and reality." }],
            steps: [
              { reasoning: "Identifies that the praise is not meant sincerely: the statement is neither honest nor moving.", evidence: "heartbreaking honesty", marks: 1, markCode: "AO2" },
              { reasoning: "Uses the company's own euphemism to show the statement hides an inconvenience.", evidence: "to better serve our valued customers", marks: 1, markCode: "AO1" },
              { reasoning: "Explains the effect: the reader sees the contrast and shares the writer's mockery of corporate language.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The writer praises the announcement in emotive, exaggerated terms ('heartbreaking honesty') when it only uses a euphemism ('to better serve our valued customers') for a worse service. The gap between description and fact makes the reader laugh at the company's spin.",
            commonErrors: ["Saying 'the writer is being sarcastic' without explaining what the real meaning is.", "Choosing no quotation."],
          },
        },
        {
          id: "el11-u1-irony-tone-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: RAILWAY,
          stem: "How does the writer use irony and tone to criticise the railway company? Support your answer with evidence from the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "Meaning is the opposite of the literal words, creating criticism through shared understanding." },
              { kind: "technique", name: "Sardonic tone", statement: "A dry, mocking voice that undermines the target while sounding polite." },
              { kind: "skill", name: "Effect on reader", statement: "Each technique must be linked to what the reader is led to think or feel." },
            ],
            steps: [
              { reasoning: "The opening mock-gratitude ('privileged') sets a sardonic tone and signals the opposite of the literal meaning.", evidence: "We are, I understand, privileged", marks: 2, markCode: "AO2" },
              { reasoning: "The imagined consultants, who mistake a desperate sprint for 'applause', use absurd hyperbole to suggest the company is deaf to real passengers.", evidence: "mistake it for applause", marks: 2, markCode: "AO2" },
              { reasoning: "Deflating anticlimax in the 'Journey Promise': a delay of over an hour earns only a form 'considered within twenty-eight working days', exposing a hollow promise.", evidence: "twenty-eight working days", marks: 2, markCode: "AO1" },
              { reasoning: "The closing joke 'only to those who could find it' is delivered as praise of progress, leaving the reader with a lasting sense of incompetence and contempt.", evidence: "available only to those who could find it", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "The writer adopts a sardonic voice and uses irony throughout, praising the company for changes that harm passengers. Mock gratitude, the hyperbole of 'applause' and the deflating 'Journey Promise' expose the gap between corporate language and reality, inviting the reader to distrust the company.",
            levels: levels(8, "analysis of irony and tone"),
            commonErrors: ["Identifying irony once and not exploring effect.", "Describing the tone as simply 'negative' or 'funny'.", "Quoting long passages without selecting key words."],
          },
        },
        {
          id: "el11-u1-irony-tone-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: RAILWAY,
          stem: "Read the whole of 'Next Stop: Gratitude'.",
          parts: [
            { label: "a", prompt: "From the extract, give two changes the railway company has announced.", marks: 2 },
            { label: "b", prompt: "Explain what the writer implies about the company's 'extensive consultation' (second paragraph).", marks: 4 },
            { label: "c", prompt: "How does the writer's tone change or develop from the first paragraph to the last? Support your answer with evidence from the extract.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retrieval", statement: "Select only the details requested, in your own words or by short quotation." },
              { kind: "technique", name: "Sarcasm and understatement", statement: "Polite or mild words can carry sharp criticism when the facts contradict them." },
              { kind: "skill", name: "Tracking tone", statement: "Compare the start and end of a text and say what changes and why." },
            ],
            steps: [
              { part: "a", reasoning: "Credit the 7.42 now departing at 7.38.", evidence: "the 7.42 will henceforth depart at 7.38", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Credit the new 'Journey Promise' compensation form.", evidence: "a new 'Journey Promise'", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "Implies the consultation was meaningless: the result harms the people supposedly consulted.", evidence: "extensive consultation", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'I am told' distances the writer and signals doubt, suggesting the claim comes from the company and is not believed.", evidence: "I am told", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The picture of consultants misreading a sprinting commuter shows they ignored real passenger experience.", evidence: "the sound of a commuter sprinting across a footbridge", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "'remarkable people' is ironic praise that implies incompetence or wilful blindness.", evidence: "remarkable people", marks: 1, markCode: "AO2" },
              { part: "c", reasoning: "Opening is playfully mock-grateful, establishing light sarcasm.", evidence: "We are, I understand, privileged", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Middle section develops comic exaggeration and absurd imagery (the footbridge sprint) to ridicule the company.", evidence: "mistake it for applause", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "By the end the tone is colder and more bitterly sardonic: the concluding punchline carries real anger beneath the dry humour.", evidence: "Last year the form was available only to those who could find it", marks: 2, markCode: "AO2" },
            ],
            finalAnswer: "(a) The 7.42 will leave at 7.38; a 'Journey Promise' delay form has been introduced. (b) The writer implies the consultation was a sham: 'I am told' signals doubt and the image of a sprinting commuter mistaken for applause shows the consultants ignored passengers. (c) The tone begins as playful mock-gratitude, develops into comic ridicule and ends as bitter, controlled anger delivered as understatement.",
            levels: levels(6, "analysis of tone and its development", "c"),
            commonErrors: ["In (a) over-writing or giving a quotation with no selection.", "In (b) saying only 'the writer thinks it is untrue'.", "In (c) analysing one paragraph only and ignoring development."],
          },
        },
      ],
    },
  ],
};
