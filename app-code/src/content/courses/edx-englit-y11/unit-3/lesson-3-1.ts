import type { Lesson, TextExtract } from "../../../types.ts";
import { bands } from "../unit-1/levels.ts";

const OZYMANDIAS: TextExtract = {
  title: "Ozymandias",
  author: "Percy Bysshe Shelley",
  source: "1818",
  lineNumbers: true,
  text: "I met a traveller from an antique land,\nWho said—\"Two vast and trunkless legs of stone\nStand in the desert. . . . Near them, on the sand,\nHalf sunk a shattered visage lies, whose frown,\nAnd wrinkled lip, and sneer of cold command,\nTell that its sculptor well those passions read\nWhich yet survive, stamped on these lifeless things,\nThe hand that mocked them, and the heart that fed;\nAnd on the pedestal, these words appear:\nMy name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\nNothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.\"",
};

const LONDON: TextExtract = {
  title: "London",
  author: "William Blake",
  source: "Songs of Experience (1794)",
  lineNumbers: true,
  text: "I wander thro' each charter'd street,\nNear where the charter'd Thames does flow,\nAnd mark in every face I meet\nMarks of weakness, marks of woe.\n\nIn every cry of every Man,\nIn every Infants cry of fear,\nIn every voice: in every ban,\nThe mind-forg'd manacles I hear.",
};

export const lesson31: Lesson = {
  id: "et11-u3-lesson-3-1",
  code: "3-1",
  title: "Timed Poetry Responses",
  goal: "I CAN write a focused, timed response to an unseen poem and to a comparison of two poems.",
  standards: ["4ET1 Paper 1 Section A", "4ET1 AO1", "4ET1 AO2", "4ET1 AO3"],
  vocabulary: [
    { term: "Irony", definition: "A contrast between what is expected or stated and what is actually true; in Ozymandias, the king's boast set against the ruin." },
    { term: "Volta", definition: "A turn in a poem's thought or mood, common in sonnets." },
    { term: "Sonnet", definition: "A fourteen-line poem, usually with a regular rhyme scheme." },
    { term: "Enjambment", definition: "A sentence running over a line break without punctuation." },
    { term: "Repetition", definition: "Using the same word or phrase more than once for emphasis." },
    { term: "Comparative connective", definition: "A word or phrase such as 'whereas' or 'similarly' that links two texts." },
  ],
  concepts: [
    {
      id: "et11-u3-timed-unseen-poetry",
      title: "Timed unseen poetry",
      skill: "Read, plan and write a clear analytical response to an unseen poem within the time limit.",
      lesson: {
        sections: [
          {
            heading: "Read and plan in five minutes",
            body: "Read the poem twice. First, ask: who is speaking, to whom, about what? Then note the tone and the way it changes. Pick three or four features (a key image, a change of direction, a pattern of sound or structure) and one short quotation for each. A short plan prevents rambling.",
          },
          {
            heading: "Write in a clear pattern",
            body: "Begin with a sentence that states the poem's central idea. Then write paragraphs that move through the poem in order, each one making a point, quoting a few words, analysing a word or technique and explaining the effect on the reader. Finish with a sentence that links the effect to the poem's overall message.",
          },
          {
            heading: "Spend time wisely",
            body: "Around thirty-five minutes in total is realistic for a full unseen response: five to plan, twenty-five to write, five to check. A focused answer with three well-developed points scores higher than a long list of techniques.",
          },
        ],
        keyFormulas: [
          { name: "Plan: speaker, subject, tone, turn", statement: "Four questions to ask of any unseen poem." },
          { name: "Zoom in", statement: "Choose one or two words from a quotation and explore their connotations." },
          { name: "Link to message", statement: "End each paragraph by connecting the effect to the poem's central idea." },
        ],
        workedExample: {
          problem: "How does Shelley present the fall of a great ruler in Ozymandias?",
          solution: "Shelley presents the ruler's fall through irony. The sculptor captured 'sneer of cold command', suggesting a cruel, contemptuous man, yet this arrogance survives only as stone, 'lifeless things'. The inscription 'Look on my Works, ye Mighty, and despair!' is boastful and imperative, but its meaning is reversed by what follows: 'Nothing beside remains.' The short, flat sentence after the long, building lines drives home the emptiness. The final image of 'boundless and bare' sands emphasises that time wipes out power. Through this structure, Shelley suggests that human ambition is transient and that art can outlast the tyrant it mocks.",
        },
      },
      questions: [
        {
          id: "et11-u3-timed-unseen-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OZYMANDIAS,
          stem: "What does the phrase 'Nothing beside remains' (line 12) suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That the ruler's power and glory have completely vanished" },
              { id: "b", text: "That the statue is the only thing the traveller sees" },
              { id: "c", text: "That the sculptor was never paid for his work" },
              { id: "d", text: "That the desert is a welcoming place" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Irony", statement: "The boast of greatness is undone by the reality of ruin." }],
            steps: [{ reasoning: "The flat statement contrasts with the king's boast, showing that all has vanished.", evidence: "Nothing beside remains", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** The ruler's power has completely vanished.",
            commonErrors: ["Choosing (b), which only describes what the traveller sees."],
          },
        },
        {
          id: "et11-u3-timed-unseen-poetry-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: OZYMANDIAS,
          stem: "Explain how the description of the statue in lines 2-8 presents Ozymandias as a ruler.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word choice", statement: "Connotations of key words reveal attitude." },
              { kind: "skill", name: "Embedding evidence", statement: "Quote a few words and comment on them." },
            ],
            steps: [
              { reasoning: "'Sneer of cold command' suggests an arrogant, cruel ruler who looked down on his subjects.", evidence: "sneer of cold command", marks: 1, markCode: "AO2" },
              { reasoning: "'Wrinkled lip' gives a human detail of contempt, showing the sculptor caught his character.", evidence: "wrinkled lip", marks: 1, markCode: "AO2" },
              { reasoning: "'Shattered' and 'half sunk' suggest his power is broken and falling.", evidence: "shattered visage", marks: 1, markCode: "AO2" },
              { reasoning: "'Trunkless legs' makes the statue incomplete, reducing a great man to fragments.", evidence: "trunkless legs", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "Ozymandias is presented as a proud, cold tyrant ('sneer of cold command'), but the shattered, half-sunk statue reduces him to fragments.",
            commonErrors: ["Describing the statue without commenting on word choice."],
          },
        },
        {
          id: "et11-u3-timed-unseen-poetry-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: OZYMANDIAS,
          stem: "How does Shelley use structure and language to present the theme of the fall of power in lines 9-14?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Irony", statement: "The inscription means the opposite of what the reader sees." },
              { kind: "convention", name: "Sonnet", statement: "A fourteen-line form with a turn near the end." },
            ],
            steps: [
              { reasoning: "The inscription is grand and imperative: 'Look on my Works, ye Mighty, and despair!' shows the king's arrogance.", evidence: "Look on my Works", marks: 2, markCode: "AO2" },
              { reasoning: "The irony: there are no works left, so the command to despair applies to the king himself.", evidence: "Nothing beside remains", marks: 2, markCode: "AO2" },
              { reasoning: "The sonnet's turn comes with the short statement, contrasting with the grandeur before.", marks: 2, markCode: "AO2" },
              { reasoning: "The closing image of 'boundless and bare' sands emphasises the permanence of nature over power.", evidence: "boundless and bare", marks: 2, markCode: "AO1" },
            ],
            levels: bands(8, "analysis of language and structure in the closing lines"),
            finalAnswer: "The inscription's boast is undermined by the bare desert. The grand imperative, the sudden flat statement and the vast closing image make irony of the king's pride and present time as the true ruler.",
            commonErrors: ["Spotting 'alliteration' with no effect.", "Ignoring structure."],
          },
        },
        {
          id: "et11-u3-timed-unseen-poetry-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: OZYMANDIAS,
          stem: "This question is about the poem Ozymandias by Percy Bysshe Shelley.",
          parts: [
            { label: "a", prompt: "Give two details of the statue as it is found by the traveller (lines 2-5).", marks: 2 },
            { label: "b", prompt: "Explain what the sculptor's skill suggests about the relationship between art and power.", marks: 4 },
            { label: "c", prompt: "How does Shelley use the speaker's voice and the poem's structure to create distance?", marks: 6 },
            { label: "d", prompt: "Write a full response: 'How does Shelley present the fall of a great ruler in this poem?'", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Layered narration", statement: "A story within a story (poet, traveller, inscription) creates distance." },
              { kind: "skill", name: "Developing demand", statement: "Move from retrieval to explanation, analysis and response." },
            ],
            steps: [
              { part: "a", reasoning: "Two vast legs of stone stand in the desert.", evidence: "Two vast and trunkless legs", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "A shattered face half sunk in the sand with a frown and sneer.", evidence: "shattered visage", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The sculptor read the king's passions and recorded them accurately.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The art survives the ruler, though only in ruins.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "The sculptor 'mocked' the passions, suggesting art can criticise power.", evidence: "The hand that mocked them", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Art therefore outlives and judges the ruler.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "The speaker passes on the traveller's tale, so we hear the story at second hand.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Layers of voice (traveller, sculptor, king) show how time reduces a king to a rumour.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "The sonnet form compresses a long history into fourteen lines, increasing the irony.", marks: 2, markCode: "AO2" },
              { part: "d", reasoning: "Overall response: tyranny, irony, decay and the power of time.", marks: 4, markCode: "AO1" },
              { part: "d", reasoning: "Analysis of selected language and structure with precise quotation.", marks: 4, markCode: "AO2" },
            ],
            levels: [
              ...bands(6, "analysis of voice and structure", "c"),
              ...bands(8, "response to the presentation of the fall of a ruler", "d"),
            ],
            finalAnswer: "(a) Two trunkless legs; a shattered, half-sunk face. (b) Art records the passions and outlasts the ruler. (c) Layered narration and the compressed sonnet create distance. (d) A full response analysing irony, language and structure.",
            commonErrors: ["Retelling the poem in order.", "Techniques without effects."],
          },
        },
      ],
    },
    {
      id: "et11-u3-timed-poetry-comparison",
      title: "Timed poetry comparison",
      skill: "Compare two poems in a timed response with clear connectives and a shared focus.",
      lesson: {
        sections: [
          {
            heading: "Find a shared focus",
            body: "Both poems here deal with power and its limits: Shelley's tyrant is forgotten, while Blake's speaker hears the cries of those oppressed by institutions. A comparison needs a shared idea (power, suffering, time) from which you can discuss similarities and differences in ideas and methods.",
          },
          {
            heading: "Integrated comparison",
            body: "Write each paragraph on one point and cover both poems within it, using connectives such as 'whereas', 'similarly' and 'in contrast'. Compare methods, not just ideas: tone, imagery, form and structure. Keep a balance of detail between the two poems.",
          },
          {
            heading: "Compare the form",
            body: "Ozymandias is a sonnet with a story within a story. London is a regular poem of ABAB quatrains with an insistent, repeated 'every'. Comment on how form supports meaning: the sonnet's turn reveals irony, while Blake's repetition builds a sense of universal oppression.",
          },
        ],
        keyFormulas: [
          { name: "Connectives of comparison", statement: "Similarly, likewise, whereas, in contrast, by comparison." },
          { name: "Shared focus", statement: "A single idea that links both poems." },
          { name: "Method comparison", statement: "Compare how each poet conveys the idea, not only what it is." },
        ],
        workedExample: {
          problem: "Compare how the poets present power in Ozymandias and London.",
          solution: "Both poets criticise power, but in different ways. Shelley mocks the tyrant by showing his boast undermined by ruin: 'Look on my Works, ye Mighty, and despair!' is followed by 'Nothing beside remains', creating irony. Blake, by contrast, focuses on the victims of power, hearing 'the mind-forg'd manacles' in every voice. Whereas Shelley uses a detached, narrated story to distance the reader from the ruler, Blake's first-person speaker walks the streets and 'marks' the suffering, which makes the criticism immediate. Both poems rely on repetition and strong sounds: Blake's 'every' builds a sense of universal oppression, while Shelley's long, grand sentence collapses into silence.",
        },
      },
      questions: [
        {
          id: "et11-u3-timed-poetry-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LONDON,
          stem: "What is the effect of the repeated word 'every' in lines 3-7 of London?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It suggests that suffering is universal and inescapable" },
              { id: "b", text: "It suggests that the speaker is counting the people he meets" },
              { id: "c", text: "It suggests that the people are all the same age" },
              { id: "d", text: "It suggests that the speaker is bored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Anaphora", statement: "Repetition at the start of lines builds emphasis and cumulative effect." }],
            steps: [{ reasoning: "The repeated 'every' shows that no one escapes the suffering.", evidence: "In every cry of every Man", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)** It suggests that suffering is universal.",
            commonErrors: ["Choosing (b) and reading the repetition literally."],
          },
        },
        {
          id: "et11-u3-timed-poetry-comparison-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: LONDON,
          stem: "Explain what the phrase 'mind-forg'd manacles' suggests about the people of London.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Metaphor", statement: "A manacle is a chain; the metaphor suggests imprisonment." },
              { kind: "skill", name: "Zooming in", statement: "Explore a key word's connotations." },
            ],
            steps: [
              { reasoning: "'Manacles' suggests chains and imprisonment.", evidence: "manacles", marks: 1, markCode: "AO2" },
              { reasoning: "'Mind-forg'd' suggests the chains are created by thought, attitudes and beliefs, not physical restraint.", evidence: "mind-forg'd", marks: 1, markCode: "AO2" },
              { reasoning: "People are trapped by social and mental limitations that they accept.", marks: 1, markCode: "AO1" },
              { reasoning: "The blacksmith's verb 'forg'd' suggests the oppression is deliberately made.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "The people are imprisoned by chains of thought and attitude that society has forged, so their oppression is psychological as well as physical.",
            commonErrors: ["Taking 'manacles' literally.", "Paraphrase only."],
          },
        },
        {
          id: "et11-u3-timed-poetry-comparison-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: LONDON,
          stem: "Compare how Shelley in Ozymandias and Blake in London (printed above) present the effects of power. In your answer, compare the poets' methods and ideas. For Ozymandias you may refer to the boast on the pedestal and the bare sands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Integrated comparison", statement: "Cover both poems in each paragraph." },
              { kind: "technique", name: "Methods", statement: "Compare form, imagery, tone, voice and structure." },
            ],
            steps: [
              { reasoning: "Shelley uses irony: the king's boast is contradicted by the ruin.", evidence: "Nothing beside remains", marks: 2, markCode: "AO2" },
              { reasoning: "Blake uses repetition and metaphor to show people trapped by institutions.", evidence: "mind-forg'd manacles", marks: 2, markCode: "AO2" },
              { reasoning: "Whereas Shelley focuses on the ruler and distance, Blake focuses on the victims and immediacy.", marks: 2, markCode: "AO3" },
              { reasoning: "Both criticise power, one by showing its end, the other its present damage.", marks: 2, markCode: "AO3" },
            ],
            levels: bands(8, "comparison of ideas and methods"),
            finalAnswer: "Both poets criticise power. Shelley uses irony and a distanced narrative to show a tyrant's fall, whereas Blake uses a first-person witness and repetition to show present suffering.",
            commonErrors: ["Writing about each poem separately.", "Comparing ideas but not methods."],
          },
        },
        {
          id: "et11-u3-timed-poetry-comparison-q4",
          difficulty: "challenge",
          totalMarks: 25,
          extract: LONDON,
          stem: "This question is about the poem London by William Blake and comparison with Ozymandias.",
          parts: [
            { label: "a", prompt: "Give two things the speaker notices in the faces of the people he meets (lines 3-4).", marks: 2 },
            { label: "b", prompt: "Explain what the repetition of 'charter'd' in lines 1-2 suggests about the city.", marks: 3 },
            { label: "c", prompt: "How does Blake use sound and repetition in the second stanza to build a sense of oppression?", marks: 8 },
            { label: "d", prompt: "Compare how Blake in London and Shelley in Ozymandias present attitudes to power. Refer to ideas and methods.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Anaphora", statement: "Repeated openings build cumulative pressure." },
              { kind: "skill", name: "Comparison", statement: "Integrated discussion of ideas and methods." },
            ],
            steps: [
              { part: "a", reasoning: "Weakness.", evidence: "Marks of weakness", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Woe.", evidence: "marks of woe", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "'Charter'd' suggests that everything is owned and regulated, even the river.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Repetition emphasises how control extends everywhere.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "It presents London as a commercial city where freedom is limited.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Anaphora of 'In every' builds cumulative pressure.", evidence: "In every cry of every Man", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The sounds of the 'cry', 'fear' and 'ban' create harsh, mournful effect and the regular rhythm feels inescapable.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "The final line's metaphor 'manacles' is the culmination of the pattern.", evidence: "mind-forg'd manacles", marks: 2, markCode: "AO1" },
              { part: "d", reasoning: "Ideas: both criticise power; Shelley shows decline, Blake shows its victims.", marks: 4, markCode: "AO3" },
              { part: "d", reasoning: "Methods: Shelley's sonnet and irony versus Blake's repetition and first-person witness.", marks: 4, markCode: "AO2" },
              { part: "d", reasoning: "Detailed quotation from both poems and a reasoned comparison.", marks: 4, markCode: "AO1" },
            ],
            levels: [
              { level: "Level 5", marks: "7-8", descriptor: "Perceptive analysis of sound and repetition with precisely chosen references.", part: "c" },
              { level: "Level 4", marks: "5-6", descriptor: "Thorough analysis with well-chosen references.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Clear, relevant analysis with appropriate references.", part: "c" },
              { level: "Level 2", marks: "2", descriptor: "Some understanding and some relevant references.", part: "c" },
              { level: "Level 1", marks: "1", descriptor: "Simple, limited comment.", part: "c" },
              ...bands(12, "comparison of the poets' ideas and methods", "d"),
            ],
            finalAnswer: "(a) Weakness; woe. (b) Everything is controlled and owned. (c) Anaphora, harsh sounds and the closing metaphor build oppression. (d) Both condemn power: Shelley through irony and distance, Blake through repetition and witness.",
            commonErrors: ["Treating the poems in separate blocks in (d).", "Skipping the methods."],
          },
        },
      ],
    },
  ],
};
