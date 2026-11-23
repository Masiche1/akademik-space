import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const FROST: TextExtract = {
  title: "The Road Not Taken",
  author: "Robert Frost",
  source: "Mountain Interval (1916)",
  text: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.",
};

const WILLIAMS: TextExtract = {
  title: "The Glass Menagerie",
  author: "Tennessee Williams",
  source: "The Glass Menagerie (1944)",
  text: "I didn't go to the moon, I went much further — for time is the longest distance between two places.",
};

const MORRISON: TextExtract = {
  title: "Beloved",
  author: "Toni Morrison",
  source: "Beloved (1987), opening",
  text: "124 was spiteful. Full of a baby's venom. The women in the house knew it and so did the children. For years each put up with the spite in his own way, but by 1873 Sethe and her daughter Denver were its only victims. The grandmother, Baby Suggs, was dead, and the sons, Howard and Buglar, had run away by the time they were thirteen out of the alley they shot the bottoms out of their shoes.",
};

export const lesson123: Lesson = {
  id: "ela12-u1-lesson-1-3",
  code: "1-3",
  title: "American Poetry and Drama",
  goal: "I CAN analyze figurative language in modern American poetry and the use of memory, symbol, and music in drama.",
  standards: ["RL.11-12.2", "RL.11-12.4", "RL.11-12.5", "RL.11-12.7"],
  vocabulary: [
    { term: "Extended metaphor", definition: "A metaphor sustained across multiple lines or an entire work." },
    { term: "Symbol", definition: "A concrete image that carries abstract meaning (road, glass animals, house)." },
    { term: "Ambiguity", definition: "Deliberate openness allowing multiple valid interpretations." },
    { term: "Memory play", definition: "Drama structured by memory rather than chronological plot." },
    { term: "Symbolic object", definition: "A physical item (glass menagerie, fire) representing inner states." },
    { term: "Personification", definition: "Giving human qualities to nonhuman things ('124 was spiteful')." },
    { term: "Subtext", definition: "What characters mean beneath what they say." },
  ],
  concepts: [
    {
      id: "ela12-u1-poetry",
      title: "Frost and the ambiguous symbol",
      skill: "Analyze how Frost's symbols resist single interpretation.",
      lesson: {
        sections: [
          {
            heading: "The road as symbol",
            body: "Frost's 'The Road Not Taken' is famous because its symbol is slippery. The two roads 'really about the same' — the poem admits the choice barely mattered, yet the speaker later sighs 'Somewhere ages and ages hence' about it. The symbol (road) stands for choice, but Frost refuses to say whether the sigh is regret, pride, or self-deception.",
          },
          {
            heading: "Ambiguity as method",
            body: "Modernist and contemporary poetry often cultivates ambiguity: meaning is not delivered but discovered differently by each reader. This is not vagueness but a deliberate structure that mirrors life's own uncertain choices.",
          },
          {
            heading: "Reading a Frost poem",
            body: "Track the literal scene first (a walk, a fork), then ask what the scene cannot say directly. Frost trusts New England speech — 'sorry I could not travel both' — to carry philosophical weight through understatement.",
          },
        ],
        keyFormulas: [
          { name: "Ambiguous symbol", statement: "A symbol that supports more than one valid reading." },
          { name: "Understatement", statement: "Plain speech carrying weight the words don't state." },
        ],
        workedExample: {
          problem: "Is the speaker of 'The Road Not Taken' sincere or self-deceiving at the end?",
          solution: "The poem supports both readings: 'I shall be telling this with a sigh' could be proud nostalgia or ironic self-mythologizing. Frost leaves the question open — that openness is the poem's meaning.",
        },
      },
      questions: [
        {
          id: "ela12-u1-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FROST,
          stem: "What do the two roads most directly represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A literal hiking trail in the woods." },
              { id: "b", text: "Two equivalent life choices where the speaker cannot have both." },
              { id: "c", text: "A right path and a wrong path." },
              { id: "d", text: "Youth and old age." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Frost's ambiguity", statement: "The poem stresses the roads are 'really about the same,' so the symbol is choice itself, not a moral test." }],
            steps: [{ reasoning: "The speaker cannot travel both roads, so they figure mutually exclusive options in life; Frost stresses their near-equivalence.", evidence: "had worn them really about the same", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Two equivalent life choices.",
            commonErrors: ["Reading the poem as a simple 'choose wisely' moral."],
          },
        },
        {
          id: "ela12-u1-poetry-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: FROST,
          stem: "Analyze how Frost creates ambiguity in the poem's ending. What evidence supports a reading of pride, and what supports regret?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Ambiguity", statement: "Conflicting signals in the ending sustain two readings." }],
            steps: [
              { reasoning: "Pride reading: 'I took the one less traveled by' — if sincere, it frames the choice as courageous individualism.", evidence: "I took the one less traveled by", marks: 1, markCode: "AO2" },
              { reasoning: "Regret/self-deception reading: the earlier admission that both roads 'really about the same' undercuts the later claim — the difference may be invented.", evidence: "worn them really about the same", marks: 1, markCode: "AO2" },
              { reasoning: "'With a sigh' is tonally unstable — a sigh can express relief, sorrow, or theatricality — and Frost refuses to specify.", evidence: "telling this with a sigh", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes that the ambiguity is the point: the speaker may be telling a story to himself, and Frost lets the reader judge which story is true.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Both pride and regret are supported; Frost's conflicting signals make the poem about the stories we tell ourselves, not the choice itself.",
            commonErrors: ["Forcing a single 'correct' interpretation."],
          },
        },
        {
          id: "ela12-u1-poetry-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FROST,
          stem: "Explain how Frost uses New England speech rhythms and concrete rural detail to carry an abstract meditation on choice. Consider at least two specific lines.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "technique", name: "Diction and rhythm", statement: "Plain, spoken language with regular meter makes philosophical claims feel earned rather than asserted." },
              { kind: "skill", name: "Concrete-to-abstract", statement: "Show how a physical detail (leaves, bend in the road) stands for an abstract problem." },
            ],
            steps: [
              { reasoning: "Conversational diction — 'sorry I could not travel both' — makes the speaker sound like a real person reasoning aloud, not a poet lecturing.", evidence: "sorry I could not travel both", marks: 1, markCode: "AO2" },
              { reasoning: "Concrete details ('bent in the undergrowth,' 'leaves no step had trodden black') ground the abstract choice in a visible scene.", marks: 1, markCode: "AO2" },
              { reasoning: "The regular four-beat lines give the musing a folk-song steadiness, so the poem feels like remembered speech.", marks: 1, markCode: "AO3" },
              { reasoning: "Understatement carries the weight: 'way leads on to way' states an enormous truth in seven plain words.", evidence: "way leads on to way", marks: 1, markCode: "AO2" },
              { reasoning: "The concrete scene functions as an extended metaphor for irreversible decisions — the abstraction stays tethered to the image.", marks: 1, markCode: "AO3" },
              { reasoning: "Concludes that Frost's method is to make the universal feel local and spoken, which is why the poem is quoted for both inspiration and irony.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Frost's plain speech, regular rhythm, and rural detail make an abstract meditation feel like honest testimony — which is what makes its ambiguity so powerful.",
            commonErrors: ["Analyzing imagery without addressing how speech rhythm carries the theme."],
          },
        },
      ],
    },
    {
      id: "ela12-u1-drama-poetry",
      title: "Drama: memory, symbol, and music",
      skill: "Analyze how Williams's memory play and Morrison's personified house use symbol and structure to explore the past.",
      lesson: {
        sections: [
          {
            heading: "Williams's memory play",
            body: "*The Glass Menagerie* is narrated by Tom Wingfield looking back, so every scene is memory — unreliable, tender, haunted. The 'glass menagerie' (Laura's collection) symbolizes fragile beauty and her fear of the outside world. Williams fuses realism and expressionism: the fire escape is both literal and symbolic.",
          },
          {
            heading: "Morrison's haunted house",
            body: "Morrison opens *Beloved* with '124 was spiteful' — personifying the house itself. The house holds the memory of slavery's violence; Beloved, the returned dead child, makes the past literally present. Personification turns setting into character and history into haunting.",
          },
          {
            heading: "Symbol and structure",
            body: "In both works, symbols are not decorations but arguments: the glass menagerie argues for fragility as protection; 124 argues that the past cannot be evicted. Structure mirrors theme — memory play for a character trapped in memory; a house-as-character for a community trapped in history.",
          },
        ],
        keyFormulas: [
          { name: "Symbol", statement: "A concrete object carrying abstract, often traumatic, meaning." },
          { name: "Personification", statement: "Giving a place human qualities to make it a character in history." },
        ],
        workedExample: {
          problem: "Why does Morrison begin Beloved with '124 was spiteful' instead of introducing a person?",
          solution: "The house becomes the first character — a victim and container of violence. Personifying it makes the setting itself a witness to what happened inside, so the past is present before any human appears.",
        },
      },
      questions: [
        {
          id: "ela12-u1-drama-poetry-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MORRISON,
          stem: "What effect does personifying the house ('124 was spiteful') have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the house seem friendly." },
              { id: "b", text: "It turns the setting into a character that embodies the household's pain." },
              { id: "c", text: "It suggests the house is literally alive." },
              { id: "d", text: "It is a random stylistic choice." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Personification", statement: "The house becomes a witness and container of the family's trauma." }],
            steps: [{ reasoning: "'Spiteful' and 'baby's venom' give the house a hostile consciousness; it is the first 'character' and carries the story's violence.", evidence: "124 was spiteful", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** It turns the setting into a character embodying pain.",
            commonErrors: ["Reading personification as fantasy rather than characterization of place."],
          },
        },
        {
          id: "ela12-u1-drama-poetry-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: WILLIAMS,
          stem: "Analyze the significance of the line 'I didn't go to the moon, I went much further — for time is the longest distance between two places.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "The line extends the play's imagery of distance and escape into a meditation on time and memory." },
              { kind: "skill", name: "Subtext", statement: "Tom's narrator-voice reveals what the character cannot say aloud." },
            ],
            steps: [
              { reasoning: "'Time is the longest distance between two places' redefines distance as temporal, not spatial — the play is about a man trapped by memory.", evidence: "time is the longest distance between two places", marks: 1, markCode: "AO2" },
              { reasoning: "The moon image connects to Tom's escape fantasies; 'much further' admits the escape was into memory, not adventure.", marks: 1, markCode: "AO3" },
              { reasoning: "As narrator looking back, Tom's voice carries guilt — 'I went much further' confesses the cost of leaving.", marks: 1, markCode: "AO3" },
              { reasoning: "The aphoristic compression gives the line the weight of a thesis: the play's whole structure is the distance between then and now.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The line converts physical escape into temporal exile — Tom fled into memory, and the play measures the distance that created.",
            commonErrors: ["Treating it as a pretty line rather than the play's thematic key."],
          },
        },
        {
          id: "ela12-u1-drama-poetry-q3",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare how Williams and Morrison use a central symbol to carry trauma (glass menagerie vs. the house at 124). How does each symbol's treatment differ?",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Comparative analysis", statement: "Identify a shared function, then contrast how each work develops it." },
              { kind: "technique", name: "Symbol", statement: "Both symbols embody fragility and the persistence of the past." },
            ],
            steps: [
              { reasoning: "Both symbols embody fragility under threat: glass animals shatter easily; 124 is 'spiteful' and haunted.", marks: 1, markCode: "AO2" },
              { reasoning: "Both embody the persistence of the past: Laura's collection preserves a vanished gentility; 124 preserves slavery's violence.", marks: 1, markCode: "AO3" },
              { reasoning: "Difference: Williams's symbol is a private, aesthetic object protecting one fragile person; Morrison's is a public, historical place embodying communal trauma.", marks: 1, markCode: "AO2" },
              { reasoning: "Williams's symbol is fragile and breakable; Morrison's is malevolent and inescapable — different relations to the past.", marks: 1, markCode: "AO3" },
              { reasoning: "The glass menagerie is escapist (Laura retreats into it); 124 is inescapable (Sethe cannot leave her history).", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes the symbols differ in scale and agency: personal sanctuary vs. historical prison.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Both symbols carry trauma, but Williams's is a fragile private sanctuary while Morrison's is an inescapable historical prison.",
            commonErrors: ["Listing similarities without developing a contrast."],
          },
        },
      ],
    },
  ],
};
