// Data spec for edx-englang-y11 unit 10: Poetry Analysis.
// Generates lesson-10-1.ts, lesson-10-2.ts, lesson-10-3.ts via scripts/gen-lesson.cjs.

// Level bands for open responses, highest band first; top band equals the marks available.
const bands = (top, focus, part) => {
  const n = top >= 12 ? 5 : top >= 8 ? 4 : 3;
  const upper = (k) => Math.round((top * k) / n);
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

const LIGHTHOUSE = {
  title: "The Lighthouse Keeper",
  author: "Written for Akademik Space",
  source: "Original poem",
  lineNumbers: true,
  text:
    "Before the light he climbed the hundred stairs\nwith salt on his cuffs and tea gone cold,\nand lit the great lamp like a wedding vow,\nthough no one saw. The sea rehearsed its noise\nagainst the glass; the gulls wrote letters\nhe never answered. Years stacked like cordwood\nagainst the door, and each dawn he relit\nthe same small sun against the same grey sky -\na keeper of one flame in a kingdom of dark.",
};

const MARKET = {
  title: "Market Morning",
  author: "Written for Akademik Space",
  source: "Original poem",
  lineNumbers: true,
  text:
    "The market wakes before the street -\nstalls unfold like paper fans,\nthe fishmonger slaps the ice awake,\nthe flower seller counts her colours\nin buckets. Bread arrives still warm\nin wicker, prices chalked in gold.\nBy nine the square is loud with bargains,\nand every shadow wears a smile.",
};

const LEAVING = {
  title: "Instructions for Leaving",
  author: "Written for Akademik Space",
  source: "Original poem",
  lineNumbers: true,
  text:
    "You will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.",
};

const FERRY = {
  title: "The Night Ferry",
  author: "Written for Akademik Space",
  source: "Original poem",
  lineNumbers: true,
  text:
    "The ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers.",
};

const DEPARTURES = {
  title: "Two Poems of Departure",
  author: "Written for Akademik Space",
  source: "Original poems for comparison",
  lineNumbers: true,
  text:
    "Poem 1 - 'Instructions for Leaving'\nYou will need a coat. You will need\nto leave the key beneath the mat\nthe way you promised. Do not look back\nat the garden, though the roses wave -\nthey have had enough of you. Walk slowly\npast the gate, count the lamplight twice,\nand when the bus sighs at the kerb\nremember: you are allowed to go.\n\nPoem 2 - 'The Night Ferry'\nThe ferry crosses black water,\ncarrying three cars, a dog, a violin.\nThe captain does not speak. The moon\nleans on the rail like a tired passenger.\nSomewhere behind us a town switches off\nits lights one by one, as if apologising.\nAhead, the far shore rehearses morning\nin the smallest of whispers.",
};

module.exports = [
  {
    file: "lesson-10-1.ts",
    exportName: "lesson101",
    lesson: {
      id: "el11-u10-lesson-10-1",
      code: "10-1",
      title: "Imagery, Metaphor and Symbolism",
      goal: "I CAN analyse sensory imagery, metaphor, personification and symbolism in poems and explain their effects on mood and meaning.",
      standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2"],
      vocabulary: [
        { term: "Imagery", definition: "Language that appeals to the senses — sight, sound, smell, taste or touch." },
        { term: "Visual imagery", definition: "Imagery that creates a picture in the reader's mind." },
        { term: "Auditory imagery", definition: "Imagery that appeals to hearing, such as 'the sea rehearsed its noise'." },
        { term: "Metaphor", definition: "A direct comparison that identifies one thing with another, e.g. 'stalls unfold like paper fans'." },
        { term: "Personification", definition: "Giving human qualities or actions to non-human things, e.g. 'the market wakes'." },
        { term: "Symbolism", definition: "When an object or image stands for a larger idea, e.g. the lighthouse flame for devotion." },
        { term: "Mood", definition: "The atmosphere or emotional quality a poem creates for the reader." },
      ],
      concepts: [
        {
          id: "el11-u10-imagery",
          title: "Sensory imagery and mood",
          skill: "Identify sensory images in a poem, name the sense each appeals to, and explain how they build mood.",
          sections: [
            {
              heading: "Reading images",
              body: "Poets build pictures through **imagery** — words that appeal to the senses. Do not just spot an image; name the sense (sight, sound, smell, taste, touch) and explain what it makes the reader feel. 'The sea rehearsed its noise against the glass' is auditory; 'salt on his cuffs' is tactile and gustatory. A top answer tracks how images accumulate into a **mood**.",
            },
            {
              heading: "Imagery and mood",
              body: "Mood is the atmosphere the poem creates. Warm images — 'bread arrives still warm', 'every shadow wears a smile' — make a market feel welcoming. Cold or isolated images — 'salt', 'tea gone cold', 'kingdom of dark' — make the lighthouse feel lonely. Ask: **what feeling do these images leave me with?**",
            },
            {
              heading: "Building the answer",
              body: "Use the chain: **image** (quotation), **sense** (which sense it appeals to), **effect** (the mood or feeling it creates). Two or three linked images will always beat a list of unrelated ones.",
            },
          ],
          keyFormulas: [
            { name: "Imagery", statement: "Language appealing to the senses; it makes the poem vivid and controls the reader's response." },
            { name: "Sensory appeal", statement: "Naming which sense an image targets — sight, sound, smell, taste or touch — is the first step to analysing it." },
            { name: "Mood", statement: "The atmosphere a poem creates through accumulated images, tone and rhythm." },
          ],
          workedExample: {
            problem: "How do the images in 'Market Morning' create a mood of welcome?",
            solution: "The poem builds welcome through warm, busy sensory detail. 'Stalls unfold like paper fans' is visual and energetic; 'the fishmonger slaps the ice awake' is auditory and lively; 'Bread arrives still warm / in wicker, prices chalked in gold' appeals to smell, touch and sight, making the market feel abundant and precious. The personified 'market wakes' and the final image 'every shadow wears a smile' complete the mood: the square is not just busy but friendly, so the reader feels invited in.",
          },
          questions: [
            {
              id: "el11-u10-imagery-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LIGHTHOUSE,
              stem: "Which image in 'The Lighthouse Keeper' most clearly appeals to hearing?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'salt on his cuffs'" },
                  { id: "b", text: "'the gulls wrote letters'" },
                  { id: "c", text: "'The sea rehearsed its noise / against the glass'" },
                  { id: "d", text: "'years stacked like cordwood'" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Auditory imagery", statement: "Imagery that appeals to hearing." }],
                steps: [
                  { reasoning: "'The sea rehearsed its noise against the glass' is explicitly about sound; the others are visual or tactile.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "**(c)** 'The sea rehearsed its noise / against the glass' — auditory imagery.",
                commonErrors: ["Choosing a vivid image without checking which sense it targets."],
              },
            },
            {
              id: "el11-u10-imagery-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: MARKET,
              stem: "Identify two sensory images in 'Market Morning' and name the sense each appeals to.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Sense naming", statement: "Identify the image, then name the sense it targets." }],
                steps: [
                  { reasoning: "Credit one image — e.g. 'Bread arrives still warm' (smell/touch) or 'stalls unfold like paper fans' (sight) — with the correct sense.", evidence: "Bread arrives still warm", marks: 1, markCode: "AO1" },
                  { reasoning: "Credit a second distinct image with its sense, e.g. 'the fishmonger slaps the ice awake' (sound) or 'prices chalked in gold' (sight).", evidence: "the fishmonger slaps the ice awake", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "e.g. 'Bread arrives still warm' — smell/touch; 'the fishmonger slaps the ice awake' — sound; 'stalls unfold like paper fans' — sight.",
                commonErrors: ["Naming an image without the sense.", "Repeating the same sense for both answers when variety exists."],
              },
            },
            {
              id: "el11-u10-imagery-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: LIGHTHOUSE,
              stem: "How does the writer use contrasting images of light and dark?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Contrast", statement: "Placing light against dark or warmth against cold sharpens both and controls mood." }],
                steps: [
                  { reasoning: "The lamp is 'the same small sun' — a source of light and warmth in a grey world.", evidence: "the same small sun", marks: 1, markCode: "AO1" },
                  { reasoning: "Against it stands 'the same grey sky' and 'a kingdom of dark' — vast, cold, indifferent.", evidence: "a kingdom of dark", marks: 1, markCode: "AO2" },
                  { reasoning: "The contrast makes the keeper's flame seem both fragile and heroic — a tiny light against overwhelming darkness.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The 'small sun' of the lamp is set against 'grey sky' and 'kingdom of dark', so the light/dark contrast makes the keeper's devotion feel fragile yet noble.",
                commonErrors: ["Listing light and dark images without explaining the contrast's effect."],
              },
            },
            {
              id: "el11-u10-imagery-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: MARKET,
              stem: "Analyse the effect of the market's images of activity and colour.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Accumulated imagery", statement: "Many small vivid images build a single overwhelming impression." }],
                steps: [
                  { reasoning: "Movement images — 'wakes', 'unfold', 'slaps', 'arrives' — make the market feel alive and busy.", evidence: "stalls unfold like paper fans", marks: 2, markCode: "AO2" },
                  { reasoning: "Colour and warmth — 'colours', 'warm', 'gold' — make it feel abundant and precious.", evidence: "prices chalked in gold", marks: 1, markCode: "AO1" },
                  { reasoning: "Sound — 'loud with bargains' — completes the sensory picture of bustle.", marks: 1, markCode: "AO1" },
                  { reasoning: "The accumulation creates a mood of welcome and abundance; the final 'every shadow wears a smile' personifies the scene as friendly.", evidence: "every shadow wears a smile", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem layers movement ('wakes', 'unfold', 'slaps'), colour ('colours', 'gold') and sound ('loud with bargains') so the market feels vividly alive; the closing 'every shadow wears a smile' seals a mood of warmth and welcome.",
                commonErrors: ["Describing images one by one without showing how they accumulate into mood."],
              },
            },
            {
              id: "el11-u10-imagery-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LIGHTHOUSE,
              stem: "How does the imagery create a mood of lonely devotion? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Mood through imagery", statement: "Repeated cold, isolated images build loneliness; the lamp image carries devotion." },
                  { kind: "skill", name: "Evidence-led mood analysis", statement: "Tie each mood claim to a specific image." },
                ],
                steps: [
                  { reasoning: "Loneliness: 'hundred stairs', 'salt on his cuffs', 'tea gone cold' — solitary, cold, unattended detail.", evidence: "tea gone cold", marks: 2, markCode: "AO1" },
                  { reasoning: "Isolation is confirmed by 'though no one saw' and the gulls' 'letters he never answered' — a man unseen and unanswered.", evidence: "he never answered", marks: 2, markCode: "AO2" },
                  { reasoning: "Devotion survives the loneliness: 'each dawn he relit / the same small sun' — the repeated relighting shows faithfulness.", evidence: "each dawn he relit", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Cold, solitary images — 'salt', 'tea gone cold', 'hundred stairs' — and the unanswered letters create loneliness, while the daily relighting of 'the same small sun' shows devotion persisting within it.",
                levels: bands(6, "analysis of mood through imagery"),
                commonErrors: ["Saying the poem is 'sad' without linking it to images.", "Missing the devotion half of the mood."],
              },
            },
            {
              id: "el11-u10-imagery-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: MARKET,
              stem: "Read 'Market Morning'.",
              parts: [
                { label: "a", prompt: "Identify two sensory images in the poem and name the sense each appeals to.", marks: 4 },
                { label: "b", prompt: "Analyse how the poem's imagery conveys its mood.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Image identification", statement: "Quote the image and name the sense." },
                  { kind: "technique", name: "Imagery and mood", statement: "Explain how accumulated images create atmosphere." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit one image with correct sense — e.g. 'stalls unfold like paper fans' (sight), 'still warm' (touch/smell).", marks: 2, markCode: "AO1" },
                  { part: "a", reasoning: "Credit a second distinct image with sense — e.g. 'loud with bargains' (sound), 'prices chalked in gold' (sight).", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "Movement images ('wakes', 'unfold', 'slaps') create energy and bustle.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Warmth and colour ('warm', 'gold', 'colours') create abundance and preciousness.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The personified close — 'every shadow wears a smile' — extends the friendliness into the whole scene, sealing the welcoming mood.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) Any two images with correct senses. (b) The poem's movement, warmth and colour imagery accumulates into a mood of lively welcome, capped by the smiling shadows.",
                levels: bands(6, "analysis of imagery and its mood", "b"),
                commonErrors: ["In (a) naming senses wrongly or repeating one image.", "In (b) listing images without explaining mood."],
              },
            },
          ],
        },
        {
          id: "el11-u10-metaphor-symbol",
          title: "Metaphor, personification and symbolism",
          skill: "Analyse metaphor, personification and symbolic images, explaining what they reveal beyond the literal.",
          sections: [
            {
              heading: "Beyond the literal",
              body: "**Metaphor** identifies one thing with another ('stalls unfold like paper fans' — or 'lit the great lamp like a wedding vow'). **Personification** gives human action to the non-human ('the market wakes', 'the moon leans'). Both do more than decorate: they tell us how to feel about the thing described. A wedding vow is sacred, so lighting the lamp becomes an act of devotion.",
            },
            {
              heading: "Symbolism",
              body: "A **symbol** is an image that stands for a larger idea. The lighthouse flame can symbolise faith, duty or hope; the 'small sun' suggests the keeper's light is a private sun in a dark world. To analyse symbolism, ask: **what does this object or image represent beyond itself?**",
            },
            {
              heading: "Naming the technique",
              body: "Be precise: 'like a wedding vow' is a simile (explicit comparison with 'like'); 'the market wakes' is personification; 'a kingdom of dark' is metaphor. The more accurately you name the technique, the more convincing your comment on its effect.",
            },
          ],
          keyFormulas: [
            { name: "Metaphor", statement: "An implied comparison identifying one thing with another; it transfers qualities between them." },
            { name: "Personification", statement: "Giving human qualities or actions to non-human things." },
            { name: "Symbolism", statement: "An image that stands for a larger idea beyond its literal meaning." },
          ],
          workedExample: {
            problem: "How does 'lit the great lamp like a wedding vow' work in 'The Lighthouse Keeper'?",
            solution: "The simile compares lighting the lamp to making a wedding vow — an act of sacred commitment. It tells us the keeper's work is not a job but a devotion: he lights the lamp 'though no one saw', the way a vow is made for its own sake rather than for an audience. The religious overtones of 'vow' deepen the later image of him as 'a keeper of one flame in a kingdom of dark' — his whole life is a kind of faith.",
          },
          questions: [
            {
              id: "el11-u10-metaphor-symbol-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LIGHTHOUSE,
              stem: "What technique is used in 'the gulls wrote letters / he never answered'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "Metaphor" },
                  { id: "b", text: "Personification" },
                  { id: "c", text: "Rhyme" },
                  { id: "d", text: "Onomatopoeia" },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Personification", statement: "Giving human qualities or actions to non-human things." }],
                steps: [
                  { reasoning: "Gulls do not literally write letters; giving them that human action is personification.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(b)** Personification — the gulls are given the human act of writing letters.",
                commonErrors: ["Calling it metaphor because no 'like' is used; personification is the precise term."],
              },
            },
            {
              id: "el11-u10-metaphor-symbol-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LIGHTHOUSE,
              stem: "Give two examples of personification in 'The Lighthouse Keeper'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Personification", statement: "Non-human things are given human actions or qualities." }],
                steps: [
                  { reasoning: "Credit 'the gulls wrote letters' — gulls given the human act of writing.", evidence: "the gulls wrote letters", marks: 1, markCode: "AO2" },
                  { reasoning: "Credit 'the sea rehearsed its noise' — the sea given the human act of rehearsing; or 'years stacked like cordwood' treated as a deliberate figure.", evidence: "The sea rehearsed its noise", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "e.g. 'the gulls wrote letters' and 'the sea rehearsed its noise' — both give non-human things human actions.",
                commonErrors: ["Quoting human actions by the keeper himself as personification."],
              },
            },
            {
              id: "el11-u10-metaphor-symbol-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: MARKET,
              stem: "Explain the effect of the metaphor 'stalls unfold like paper fans'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Metaphor and simile", statement: "A comparison transfers qualities between the two things compared." }],
                steps: [
                  { reasoning: "The comparison is a simile ('like'), likening stalls to paper fans that 'unfold' — suggesting they open gracefully and colourfully.", evidence: "stalls unfold like paper fans", marks: 1, markCode: "AO1" },
                  { reasoning: "The paper-fan image is delicate, decorative and colourful, giving the market an air of festivity rather than mere commerce.", marks: 1, markCode: "AO2" },
                  { reasoning: "'Unfold' also suggests morning ritual — the market literally opening its petals — contributing to the poem's waking theme.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The simile makes the stalls seem delicate, colourful and ceremonial — like paper fans opening — which gives the market a festive, waking energy.",
                commonErrors: ["Saying 'it makes a picture' without explaining what the comparison transfers."],
              },
            },
            {
              id: "el11-u10-metaphor-symbol-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LIGHTHOUSE,
              stem: "Analyse the final image: 'a keeper of one flame in a kingdom of dark'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Cumulative metaphor", statement: "The closing image gathers the poem's earlier images into a single symbolic judgement." }],
                steps: [
                  { reasoning: "'one flame' compresses the whole poem's lamp into a symbol of solitary, faithful duty.", evidence: "a keeper of one flame", marks: 2, markCode: "AO1" },
                  { reasoning: "'a kingdom of dark' turns the sea and sky into a vast hostile realm — the keeper's whole world is darkness except his flame.", evidence: "a kingdom of dark", marks: 2, markCode: "AO2" },
                  { reasoning: "The image resolves the poem's tension: loneliness ('no one saw', 'never answered') is answered by purpose — he keeps the flame anyway.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The closing metaphor gathers the poem's images into one judgement: the keeper's 'one flame' is a symbol of solitary devotion set against 'a kingdom of dark', resolving his loneliness into noble purpose.",
                commonErrors: ["Paraphrasing the image without explaining its symbolic weight."],
              },
            },
            {
              id: "el11-u10-metaphor-symbol-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LIGHTHOUSE,
              stem: "What does the lighthouse flame symbolise in the poem? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Symbolism", statement: "A symbol is an image that stands for a larger idea." },
                  { kind: "skill", name: "Symbol interpretation", statement: "Support a symbolic reading with the poem's details." },
                ],
                steps: [
                  { reasoning: "The flame/lamp is first literal — the lighthouse lamp — but becomes symbolic through repetition: 'the great lamp', 'the same small sun', 'one flame'.", evidence: "the same small sun", marks: 2, markCode: "AO1" },
                  { reasoning: "Its symbolism is devotion and duty: he relights it 'each dawn' 'though no one saw' — the flame represents faithfulness without reward.", evidence: "though no one saw", marks: 2, markCode: "AO2" },
                  { reasoning: "Against 'a kingdom of dark', the flame also symbolises hope — a small human light against indifferent nature.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "The flame symbolises devotion, duty and hope: relit 'each dawn' 'though no one saw', it represents faithfulness without recognition — a small human light held against 'a kingdom of dark'.",
                levels: bands(6, "interpretation of symbolism"),
                commonErrors: ["Treating the lamp as only a literal object.", "Offering a symbolic meaning with no supporting detail."],
              },
            },
            {
              id: "el11-u10-metaphor-symbol-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: LIGHTHOUSE,
              stem: "Read 'The Lighthouse Keeper'.",
              parts: [
                { label: "a", prompt: "Identify two examples of figurative language (metaphor, simile or personification) with quotations.", marks: 4 },
                { label: "b", prompt: "Analyse how the poem's symbolism conveys its central idea.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Figurative language", statement: "Name the technique and quote it accurately." },
                  { kind: "technique", name: "Symbolism", statement: "Explain what the central image stands for beyond the literal." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit one accurate example — 'lit the great lamp like a wedding vow' (simile), 'the gulls wrote letters' (personification), 'a kingdom of dark' (metaphor).", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Credit a second distinct example with correct technique name.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The lamp/flame is the central symbol: literal light becomes a symbol of duty and faith.", marks: 2, markCode: "AO1" },
                  { part: "b", reasoning: "The repetition — 'each dawn he relit', 'the same small sun' — turns the symbol into a measure of the keeper's devotion.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The closing 'kingdom of dark' defines what the flame stands against: indifference, isolation, vastness — so the symbol carries the poem's whole meaning.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) Any two of: 'like a wedding vow' (simile), 'the gulls wrote letters' (personification), 'a kingdom of dark' (metaphor). (b) The lamp/flame symbolises devotion and hope; its repetition measures the keeper's faithfulness, and 'kingdom of dark' defines the indifference it stands against.",
                levels: bands(6, "analysis of symbolism and central idea", "b"),
                commonErrors: ["In (a) misnaming the technique or quoting inaccurately.", "In (b) treating symbolism as decoration rather than meaning."],
              },
            },
          ],
        },
      ],
    },
  },
  {
    file: "lesson-10-2.ts",
    exportName: "lesson102",
    lesson: {
      id: "el11-u10-lesson-10-2",
      code: "10-2",
      title: "Sound, Rhythm and Form",
      goal: "I CAN analyse how rhyme, alliteration, rhythm, line breaks and stanza shape shape a poem's meaning and mood.",
      standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2"],
      vocabulary: [
        { term: "Rhyme", definition: "Corresponding sounds at the ends of lines or within them; end rhyme, internal rhyme." },
        { term: "Alliteration", definition: "Repetition of the same initial consonant sound in nearby words." },
        { term: "Assonance", definition: "Repetition of vowel sounds within words." },
        { term: "Onomatopoeia", definition: "Words that imitate sounds, e.g. 'slaps', 'sighs'." },
        { term: "Enjambment", definition: "Running a sentence over a line break without punctuation, creating flow or suspense." },
        { term: "Caesura", definition: "A pause within a line, often marked by punctuation." },
        { term: "Stanza", definition: "A grouped set of lines in a poem, like a paragraph in prose." },
      ],
      concepts: [
        {
          id: "el11-u10-sound-rhythm",
          title: "Sound and rhythm",
          skill: "Identify rhyme, alliteration, assonance and rhythm, and explain how sound patterning shapes mood and pace.",
          sections: [
            {
              heading: "Hearing the poem",
              body: "Read a poem aloud — or imagine it read aloud. **Sound devices** include rhyme, alliteration (repeated initial consonants), assonance (repeated vowel sounds) and onomatopoeia (words like 'slaps', 'sighs' that imitate sound). They are not decoration: a hushed 's' sound can make a poem feel quiet; hard consonants can make it feel harsh.",
            },
            {
              heading: "Rhythm and pace",
              body: "**Rhythm** is the pattern of stressed and unstressed syllables. Short lines and abrupt punctuation create a halting, careful pace — 'You will need a coat. You will need' mimics the stop-start of someone gathering nerve. Longer flowing lines speed the reader up. Match the rhythm to the mood: a departure poem often slows at the moment of leaving.",
            },
            {
              heading: "Sound creates meaning",
              body: "Sound patterning reinforces meaning: 'the bus sighs at the kerb' personifies the bus and uses the 's' sound to make the scene feel hushed. In analysis, always connect the sound device to its effect: 'the sibilant 's' sounds soften the line, matching the hushed night'.",
            },
          ],
          keyFormulas: [
            { name: "Alliteration", statement: "Repetition of initial consonant sounds; it binds words and can create softness or harshness." },
            { name: "Assonance", statement: "Repetition of vowel sounds within words; it creates internal music." },
            { name: "Rhythm", statement: "The pattern of stressed and unstressed syllables; it controls pace and mood." },
          ],
          workedExample: {
            problem: "How does sound patterning create mood in 'The Night Ferry'?",
            solution: "The poem is built on soft, repeated sounds: 'moon', 'soon' associations, 'switches', 'its lights one by one', 'whispers' — the sibilant 's' and 'sh' sounds dominate, making the whole poem feel hushed. 'The captain does not speak' reinforces the silence literally. The rhythm is slow and even, like the ferry itself, so sound and pace together create a mood of quiet, suspended night travel.",
          },
          questions: [
            {
              id: "el11-u10-sound-rhythm-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LEAVING,
              stem: "Which line of 'Instructions for Leaving' uses onomatopoeia or a sound-imitating word?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "'You will need a coat.'" },
                  { id: "b", text: "'the way you promised'" },
                  { id: "c", text: "'when the bus sighs at the kerb'" },
                  { id: "d", text: "'count the lamplight twice'" },
                ],
                correctChoiceId: "c",
              },
              markscheme: {
                principles: [{ kind: "definition", name: "Onomatopoeia", statement: "A word that imitates a real sound." }],
                steps: [
                  { reasoning: "'sighs' imitates a soft exhaled sound; the 's' consonants reinforce the hush.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(c)** 'when the bus sighs at the kerb' — 'sighs' imitates a sound and the sibilance softens the line.",
                commonErrors: ["Choosing a line with personification but no sound imitation."],
              },
            },
            {
              id: "el11-u10-sound-rhythm-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: FERRY,
              stem: "Identify two sound devices in 'The Night Ferry' and their effect.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sound devices", statement: "Name the device and explain its effect on mood or pace." }],
                steps: [
                  { reasoning: "Credit sibilance/alliteration — 'switches', 'its lights', 'smallest of whispers' — the repeated 's' sounds create a hushed mood.", evidence: "in the smallest of whispers", marks: 1, markCode: "AO2" },
                  { reasoning: "Credit assonance — 'moon', 'soon' echoes in 'one by one' — or the soft consonants of 'whispers', 'passenger' — creating a gentle, quiet music.", evidence: "one by one", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Sibilance ('switches', 'whispers') and assonance ('moon', 'one by one') create a hushed, gentle sound-world matching the night ferry.",
                commonErrors: ["Naming devices without their effect."],
              },
            },
            {
              id: "el11-u10-sound-rhythm-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: LEAVING,
              stem: "How does the rhythm of 'Instructions for Leaving' mimic the act of leaving?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Rhythm and meaning", statement: "Rhythm can enact what the poem describes." }],
                steps: [
                  { reasoning: "The opening repeats 'You will need' — a halting, checklist rhythm like someone pausing to gather nerve.", evidence: "You will need a coat. You will need", marks: 1, markCode: "AO2" },
                  { reasoning: "Short imperative sentences — 'Walk slowly', 'count the lamplight twice' — slow the pace to match careful, reluctant steps.", marks: 1, markCode: "AO1" },
                  { reasoning: "The final line 'remember: you are allowed to go' releases the tension — the rhythm opens out as the leaving is permitted.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem's stop-start rhythm — repeated 'You will need', short imperatives, a pause at the colon — mimics the hesitant, careful act of leaving, then releases into freedom at the final line.",
                commonErrors: ["Describing rhythm without linking it to the act of leaving."],
              },
            },
            {
              id: "el11-u10-sound-rhythm-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: FERRY,
              stem: "Analyse how sound patterning creates a hushed mood in 'The Night Ferry'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Sibilance", statement: "Repeated 's' and 'sh' sounds soften the line and create hush." }],
                steps: [
                  { reasoning: "Sibilant sounds dominate: 'switches', 'its lights', 'smallest of whispers', 'passenger' — the 's'/'sh' sounds literally hush the poem.", evidence: "in the smallest of whispers", marks: 2, markCode: "AO2" },
                  { reasoning: "'The captain does not speak' states the silence outright; the poem's own quiet sound enacts it.", marks: 1, markCode: "AO1" },
                  { reasoning: "Soft vowels — 'moon', 'one by one' — add a gentle, floating quality rather than harsh consonants.", marks: 1, markCode: "AO2" },
                  { reasoning: "The result is a sound-world of suspended quiet: the reader hears the ferry's hush before understanding it.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem's sibilant 's' and 'sh' sounds — 'switches', 'whispers', 'passenger' — plus soft vowels create literal hush; 'the captain does not speak' confirms the silence, so sound patterning enacts the poem's quiet mood.",
                commonErrors: ["Listing sounds without connecting them to mood."],
              },
            },
            {
              id: "el11-u10-sound-rhythm-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LEAVING,
              stem: "How does the poet use sound to create a tone of gentle urging? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sound and tone", statement: "Soft sounds can make an instruction feel gentle rather than harsh." },
                  { kind: "skill", name: "Tone analysis", statement: "Link sound devices to the attitude they create." },
                ],
                steps: [
                  { reasoning: "The repeated 's' sounds — 'necessary'? no; 'slowly', 'sighs', 'promised', 'roses' — soften the imperatives so commands feel like gentle guidance.", evidence: "Walk slowly", marks: 2, markCode: "AO2" },
                  { reasoning: "'the bus sighs' gives the vehicle a human, sympathetic sound — even the world seems to understand the leaving.", evidence: "the bus sighs at the kerb", marks: 2, markCode: "AO1" },
                  { reasoning: "The rhythm slows at the end — 'remember: you are allowed to go' — the longest, most open line, releasing urgency into permission.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Soft sibilance ('slowly', 'sighs', 'roses') and a slowing final rhythm make the imperatives feel like gentle urging rather than commands; even the bus 'sighs' sympathetically, so the whole poem's sound supports the tender tone.",
                levels: bands(6, "analysis of sound and tone"),
                commonErrors: ["Missing the sibilance or treating imperatives as harsh without noting the soft sounds."],
              },
            },
            {
              id: "el11-u10-sound-rhythm-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: FERRY,
              stem: "Read 'The Night Ferry'.",
              parts: [
                { label: "a", prompt: "Identify two sound devices in the poem and quote them.", marks: 4 },
                { label: "b", prompt: "Analyse how rhythm and sound shape the poem's mood.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sound devices", statement: "Name and quote accurately." },
                  { kind: "technique", name: "Sound and mood", statement: "Connect sound patterning to the atmosphere created." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit sibilance — 'switches', 'smallest of whispers' — with quotation.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Credit a second device — assonance ('moon', 'one by one') or personification with sound ('sighs' equivalent here: 'apologising') — with quotation.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The slow, even rhythm mirrors the ferry's steady crossing — unhurried, suspended.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "The sibilant 's' sounds ('switches', 'whispers', 'passenger') create literal hush, enacting the silence.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Together they produce a mood of hushed, watchful night travel — quiet but expectant of 'morning'.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "(a) Sibilance ('smallest of whispers') and assonance ('one by one') or similar. (b) The slow rhythm and hushed sibilance create a mood of quiet, suspended night crossing, ending on a note of expectant calm.",
                levels: bands(6, "analysis of rhythm and sound shaping mood", "b"),
                commonErrors: ["In (a) naming a device without quotation.", "In (b) separating sound from mood rather than linking them."],
              },
            },
          ],
        },
        {
          id: "el11-u10-structure-form",
          title: "Structure, line breaks and form",
          skill: "Analyse how line breaks, stanza shape, caesura and structural shifts shape a poem's meaning and pace.",
          sections: [
            {
              heading: "The shape of the poem",
              body: "A poem's **form** — its line lengths, stanza divisions, punctuation and line breaks — is meaning, not packaging. A line break can create a pause, a turn or suspense; a stanza break can signal a shift in time or mood; a colon can gather a list before release. Ask: **what does the poem's shape make the reader do?**",
            },
            {
              heading: "Enjambment and caesura",
              body: "**Enjambment** runs a sentence over a line break without punctuation, creating flow or delaying meaning — 'You will need / to leave the key' makes the reader wait for the verb's object. A **caesura** (a pause inside a line, often a comma or dash) slows the reader at a key moment: 'the way you promised. Do not look back' stops us before the warning.",
            },
            {
              heading: "Structural shifts",
              body: "Track where a poem turns: 'Instructions for Leaving' moves from practical instructions ('leave the key beneath the mat') to emotional permission ('you are allowed to go'). The shift from command to permission is the poem's emotional climax — mark where it happens and explain why the form prepares it.",
            },
          ],
          keyFormulas: [
            { name: "Enjambment", statement: "A sentence continuing over a line break; it creates flow or suspense." },
            { name: "Caesura", statement: "A pause within a line, usually marked by punctuation; it slows and emphasises." },
            { name: "Structural shift", statement: "A turn in subject, tone or time within a poem, often marked by a stanza break or change of tense." },
          ],
          workedExample: {
            problem: "How does the structure of 'Instructions for Leaving' create its effect?",
            solution: "The poem is a single unbroken stanza of short lines, so the reader cannot pause between sections — the leaving feels continuous and inevitable. Line breaks create hesitations: 'You will need / to leave the key' delays the instruction. The colon in 'remember: you are allowed to go' gathers the whole poem into one release — the final line is the longest and most open, so the form itself enacts the permission the words describe.",
          },
          questions: [
            {
              id: "el11-u10-structure-form-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LEAVING,
              stem: "What is the effect of the second-person 'you' in 'Instructions for Leaving'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "It creates distance between reader and speaker." },
                  { id: "b", text: "It makes the reader feel directly involved in the leaving." },
                  { id: "c", text: "It shows the poem is about a famous person." },
                  { id: "d", text: "It makes the instructions optional." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "technique", name: "Second person", statement: "Addressing the reader as 'you' creates immediacy and involvement." }],
                steps: [
                  { reasoning: "The 'you' puts the reader in the leaver's position, so the instructions feel personal and immediate.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "**(b)** It makes the reader feel directly involved — the leaving happens to 'you'.",
                commonErrors: ["Thinking 'you' creates distance; it does the opposite."],
              },
            },
            {
              id: "el11-u10-structure-form-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LEAVING,
              stem: "How does the line break after 'You will need' affect the reading?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Line break", statement: "A break can pause, delay or emphasise." }],
                steps: [
                  { reasoning: "The break after 'You will need' creates a hesitation — the reader waits for what is needed.", evidence: "You will need a coat. You will need", marks: 1, markCode: "AO2" },
                  { reasoning: "The repetition across the break mimics someone pausing to check a mental list — nervous, careful.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The line break creates a pause after 'You will need', making the reader wait for the object and mimicking a hesitant, checklist-like state of mind.",
                commonErrors: ["Saying the break is 'just formatting' rather than meaningful."],
              },
            },
            {
              id: "el11-u10-structure-form-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: FERRY,
              stem: "How does 'The Night Ferry' structure the movement from behind to ahead?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Spatial structure", statement: "The poem's movement through space mirrors the ferry's journey." }],
                steps: [
                  { reasoning: "'Somewhere behind us a town switches off' — the past is literally behind, being left in darkness.", evidence: "Somewhere behind us a town switches off", marks: 1, markCode: "AO1" },
                  { reasoning: "'Ahead, the far shore rehearses morning' — the future is ahead, still in potential ('rehearses').", evidence: "the far shore rehearses morning", marks: 1, markCode: "AO2" },
                  { reasoning: "The ferry itself is the still point between them — 'crosses black water' — so structure enacts the journey's suspension between past and future.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem moves spatially: 'behind us' the town switches off (the past left behind), 'ahead' the shore rehearses morning (the future approaching), and the ferry crosses between them — structure enacting the journey.",
                commonErrors: ["Describing the images without noting the behind/ahead structure."],
              },
            },
            {
              id: "el11-u10-structure-form-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LEAVING,
              stem: "Analyse the effect of the colon and the final line 'remember: you are allowed to go'.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Punctuation and release", statement: "A colon gathers expectation; a long final line releases it." }],
                steps: [
                  { reasoning: "The colon after 'remember' creates a held breath — the reader waits for the permission.", evidence: "remember: you are allowed to go", marks: 2, markCode: "AO2" },
                  { reasoning: "The final line is the longest and most open — syntactically it releases the tension built by the short imperative lines.", marks: 1, markCode: "AO1" },
                  { reasoning: "'you are allowed to go' shifts from command ('Do not look back', 'Walk slowly') to permission — the poem's emotional turn.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "The colon gathers expectation and the long final line releases it; 'you are allowed to go' shifts the poem from command to permission, making the leaving feel earned rather than forced.",
                commonErrors: ["Treating the colon as decorative rather than structural."],
              },
            },
            {
              id: "el11-u10-structure-form-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: FERRY,
              stem: "How does the poem's single unbroken stanza shape its effect? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Stanza form", statement: "The absence of stanza breaks creates continuity or enclosure." }],
                steps: [
                  { reasoning: "One unbroken stanza means the ferry's crossing feels continuous — no pause, no refuge, just motion.", marks: 2, markCode: "AO2" },
                  { reasoning: "The short lines within it create a gentle rocking rhythm — like waves or a boat's motion.", evidence: "The ferry crosses black water,", marks: 2, markCode: "AO1" },
                  { reasoning: "Without stanza breaks the poem feels suspended — matching the ferry's state between 'behind' and 'ahead'.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "The single stanza enacts the ferry's unbroken crossing: no pauses, just continuous motion; the short lines create a rocking rhythm and the absence of breaks keeps the poem suspended between departure and arrival.",
                levels: bands(6, "analysis of form and its effect"),
                commonErrors: ["Saying 'the form is free verse' without analysing its effect."],
              },
            },
            {
              id: "el11-u10-structure-form-q6",
              difficulty: "challenge",
              totalMarks: 10,
              extract: DEPARTURES,
              stem: "Read both poems of departure.",
              parts: [
                { label: "a", prompt: "Identify one structural feature of each poem (line breaks, punctuation, stanza shape) with evidence.", marks: 4 },
                { label: "b", prompt: "Analyse how each poem's structure serves its meaning.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Form analysis", statement: "Identify structural features with evidence." },
                  { kind: "skill", name: "Form and meaning", statement: "Explain how structure enacts or reinforces the poem's subject." },
                ],
                steps: [
                  { part: "a", reasoning: "Poem 1: colon + final long line ('remember: you are allowed to go') or repeated 'You will need' line breaks.", marks: 2, markCode: "AO2" },
                  { part: "a", reasoning: "Poem 2: single unbroken stanza, short lines, behind/ahead spatial movement.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Poem 1's structure enacts hesitation then release — short imperative lines slow the leaving, the final line opens into permission.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "Poem 2's unbroken stanza enacts the ferry's continuous crossing — no pause between 'behind' and 'ahead'.", marks: 2, markCode: "AO2" },
                  { part: "b", reasoning: "A top answer contrasts them: one structure dramatises a decision; the other enacts a journey already in motion.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) Poem 1 uses a colon and a long final line after short imperatives; Poem 2 uses a single stanza of short lines moving behind-to-ahead. (b) Poem 1's form enacts hesitant decision then release; Poem 2's form enacts continuous suspended motion.",
                levels: bands(6, "analysis of how structure serves meaning", "b"),
                commonErrors: ["In (a) describing form without evidence.", "In (b) treating structure as separate from meaning."],
              },
            },
          ],
        },
      ],
    },
  },
  {
    file: "lesson-10-3.ts",
    exportName: "lesson103",
    lesson: {
      id: "el11-u10-lesson-10-3",
      code: "10-3",
      title: "Whole-Poem Analysis and Comparison",
      goal: "I CAN write an integrated analysis of a whole poem and construct a justified comparison of two poems.",
      standards: ["4EA1 Paper 1 Section A", "4EA1 AO1", "4EA1 AO2", "4EA1 AO3"],
      vocabulary: [
        { term: "Integrated analysis", definition: "Weaving together language, structure and form into one coherent reading of a poem." },
        { term: "Central concern", definition: "The main idea or preoccupation a poem explores." },
        { term: "Shift", definition: "A turn in the poem's direction, tone or subject." },
        { term: "Comparative judgement", definition: "A justified view on how two poems are similar and different." },
        { term: "Enjambment", definition: "Running a sentence over a line break without punctuation." },
        { term: "Volta", definition: "A turn or shift in a poem's argument or mood, often marked by a stanza break or punctuation." },
      ],
      concepts: [
        {
          id: "el11-u10-whole-poem",
          title: "Analysing a whole poem",
          skill: "Write an integrated analysis that connects a poem's imagery, structure, sound and shifts into a coherent reading.",
          sections: [
            {
              heading: "Beyond the quotation",
              body: "A whole-poem answer is not a list of techniques. It is an argument: **what is the poem about, and how do its methods create that meaning?** Start with the central concern (lonely devotion, a market's energy, a departure), then show how imagery, structure and sound each contribute. Connect them: 'the images of cold and dark make the lamp's flame seem fragile, and the daily relighting shows devotion persisting'.",
            },
            {
              heading: "Tracking the poem's movement",
              body: "Poems move: they begin somewhere, turn, and end somewhere changed. In 'The Lighthouse Keeper' the poem moves from the climb ('Before the light he climbed'), through the years ('Years stacked like cordwood'), to the closing judgement ('a keeper of one flame'). Mark the movement and explain what the ending adds.",
            },
            {
              heading: "The evaluative close",
              body: "A strong analysis ends with a judgement: how effective is the poem, and why? 'The poem earns its closing image because every earlier detail — the cold tea, the unanswered letters — has prepared the reader to see the flame as noble.' Evaluation is AO3: it rewards weighing, not just describing.",
            },
          ],
          keyFormulas: [
            { name: "Integrated analysis", statement: "Connecting imagery, structure, sound and meaning into one argument about the poem." },
            { name: "Central concern", statement: "The main idea or preoccupation the poem explores." },
            { name: "Poetic movement", statement: "The poem's progression from opening to turn to resolution." },
          ],
          workedExample: {
            problem: "Write a one-paragraph analysis of 'The Lighthouse Keeper'.",
            solution: "The poem presents lonely devotion through accumulated detail: cold, solitary images — 'salt on his cuffs', 'tea gone cold', 'hundred stairs' — establish isolation, while 'though no one saw' and 'letters he never answered' confirm it. Yet the structure moves from the climb to the daily relighting ('each dawn he relit'), so the poem's form enacts persistence. The central image — 'a keeper of one flame in a kingdom of dark' — resolves the tension: the flame symbolises duty and hope against indifference. The poem earns its ending because every earlier detail has prepared the reader to see the keeper's faithfulness as noble.",
          },
          questions: [
            {
              id: "el11-u10-whole-poem-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: LIGHTHOUSE,
              stem: "What is the central concern of 'The Lighthouse Keeper'?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The dangers of working at sea." },
                  { id: "b", text: "Lonely devotion and the persistence of duty." },
                  { id: "c", text: "The history of lighthouses." },
                  { id: "d", text: "A sailor's fear of the storm." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Central concern", statement: "Identify the poem's main preoccupation." }],
                steps: [
                  { reasoning: "The poem is about a keeper who lights the lamp alone, unseen — lonely devotion and duty.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** Lonely devotion and the persistence of duty.",
                commonErrors: ["Choosing a literal subject (the sea, the job) rather than the poem's concern."],
              },
            },
            {
              id: "el11-u10-whole-poem-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: LIGHTHOUSE,
              stem: "Identify the poem's central image and state its literal subject.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Central image", statement: "The image that carries the poem's meaning." }],
                steps: [
                  { reasoning: "Central image: the lighthouse lamp/flame — 'the great lamp', 'the same small sun', 'one flame'.", evidence: "one flame in a kingdom of dark", marks: 1, markCode: "AO1" },
                  { reasoning: "Literal subject: the lamp the keeper lights each night to warn ships.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "The central image is the lighthouse flame; literally it is the lamp the keeper lights to warn ships.",
                commonErrors: ["Naming the keeper rather than the image."],
              },
            },
            {
              id: "el11-u10-whole-poem-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: LIGHTHOUSE,
              stem: "How does the poem move through time?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Temporal structure", statement: "Track how the poem moves through time or stages." }],
                steps: [
                  { reasoning: "It begins before dawn — 'Before the light he climbed the hundred stairs' — the nightly ritual.", evidence: "Before the light he climbed", marks: 1, markCode: "AO1" },
                  { reasoning: "It expands into years — 'Years stacked like cordwood / against the door' — compressing a lifetime into one image.", evidence: "Years stacked like cordwood", marks: 1, markCode: "AO2" },
                  { reasoning: "It ends at the daily repetition — 'each dawn he relit' — so time becomes cyclical, devotion endless.", evidence: "each dawn he relit", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem moves from a single night ('Before the light') through compressed years ('Years stacked like cordwood') to the endless daily cycle ('each dawn he relit') — time becomes the measure of devotion.",
                commonErrors: ["Saying the poem 'tells a story' without noting the time structure."],
              },
            },
            {
              id: "el11-u10-whole-poem-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: LIGHTHOUSE,
              stem: "Analyse how the poem balances isolation and purpose.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Tension", statement: "A poem often holds two opposing forces in balance." }],
                steps: [
                  { reasoning: "Isolation is built through detail: 'hundred stairs', 'salt on his cuffs', 'tea gone cold' — solitary, cold, unattended.", evidence: "tea gone cold", marks: 2, markCode: "AO1" },
                  { reasoning: "It is confirmed by 'though no one saw' and 'letters he never answered' — unseen and unanswered.", marks: 1, markCode: "AO2" },
                  { reasoning: "Purpose answers it: 'each dawn he relit' — the relighting is devotion without reward.", evidence: "each dawn he relit", marks: 1, markCode: "AO2" },
                  { reasoning: "The closing image resolves the balance: 'one flame in a kingdom of dark' — isolation becomes the setting for noble purpose.", evidence: "a kingdom of dark", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "The poem balances isolation ('no one saw', 'never answered', 'tea gone cold') against purpose ('each dawn he relit'); the closing image resolves it — solitary devotion becomes noble duty.",
                commonErrors: ["Treating isolation and purpose as separate rather than balanced."],
              },
            },
            {
              id: "el11-u10-whole-poem-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: LIGHTHOUSE,
              stem: "How does the poet create sympathy for the keeper? Support your answer.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Sympathy through detail", statement: "Small humanising details make a distant figure relatable." },
                  { kind: "skill", name: "Evidence-led analysis", statement: "Tie each claim about sympathy to a specific image." },
                ],
                steps: [
                  { reasoning: "Humanising details — 'tea gone cold', 'salt on his cuffs' — show a person, not a symbol: he drinks tea, he gets salt on his clothes.", evidence: "tea gone cold", marks: 2, markCode: "AO1" },
                  { reasoning: "The unanswered letters — 'the gulls wrote letters / he never answered' — make his isolation poignant rather than heroic.", evidence: "he never answered", marks: 2, markCode: "AO2" },
                  { reasoning: "'though no one saw' makes his devotion sacrificial — he keeps the flame for no audience, which earns the reader's admiration and pity.", evidence: "though no one saw", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Sympathy is built through small human details ('tea gone cold', 'salt on his cuffs'), the poignancy of 'letters he never answered', and the sacrifice of 'though no one saw' — the keeper is devoted and unseen, which earns both pity and admiration.",
                levels: bands(6, "analysis of how sympathy is created"),
                commonErrors: ["Saying the poem is 'sad' without explaining how detail creates sympathy."],
              },
            },
            {
              id: "el11-u10-whole-poem-q6",
              difficulty: "challenge",
              totalMarks: 12,
              extract: LIGHTHOUSE,
              stem: "Read 'The Lighthouse Keeper'.",
              parts: [
                { label: "a", prompt: "Identify two techniques used in the poem with quotations.", marks: 3 },
                { label: "b", prompt: "Analyse how the poem's imagery creates its mood.", marks: 3 },
                { label: "c", prompt: "Write an evaluative paragraph on how effectively the poem conveys its central concern.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Technique identification", statement: "Name and quote accurately." },
                  { kind: "technique", name: "Imagery and mood", statement: "Explain how images accumulate into atmosphere." },
                  { kind: "skill", name: "Evaluative writing", statement: "Point, evidence, analysis, verdict." },
                ],
                steps: [
                  { part: "a", reasoning: "Credit two accurate techniques — personification ('the gulls wrote letters'), simile ('like a wedding vow'), metaphor ('a kingdom of dark'), symbolism ('one flame').", marks: 3, markCode: "AO2" },
                  { part: "b", reasoning: "Cold, solitary images — 'salt', 'tea gone cold', 'grey sky' — create isolation; the lamp images — 'small sun', 'one flame' — create fragile hope; together they make a mood of lonely devotion.", marks: 3, markCode: "AO2" },
                  { part: "c", reasoning: "Point: the poem effectively conveys lonely devotion.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Evidence and analysis: every image serves the theme — cold detail for isolation, the daily relighting for devotion, the closing metaphor for resolution.", marks: 3, markCode: "AO2" },
                  { part: "c", reasoning: "Verdict: the poem earns its ending because the accumulated detail makes the final image feel inevitable and noble.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) Two techniques with quotations. (b) Cold imagery creates isolation; lamp imagery creates fragile hope — together a mood of lonely devotion. (c) A justified evaluative paragraph concluding the poem effectively conveys its concern through unified imagery and structure.",
                levels: bands(6, "evaluative judgement of the poem's effectiveness", "c"),
                commonErrors: ["In (a) misnaming techniques.", "In (b) listing images without mood.", "In (c) retelling instead of judging."],
              },
            },
          ],
        },
        {
          id: "el11-u10-compare-poems",
          title: "Comparing two poems",
          skill: "Construct a justified comparison of two poems, analysing similarities and differences in subject, method and effect.",
          sections: [
            {
              heading: "The comparison frame",
              body: "A comparative answer is not two separate analyses. It is an argument about **how the poems relate**: what they share, where they differ, and what those differences achieve. Keep it parallel — same point about each poem before moving on. 'Both poems deal with departure, but Poem 1 dramatises the decision while Poem 2 enacts the journey' is a comparative point; 'Poem 1 is about leaving and Poem 2 is about a ferry' is not.",
            },
            {
              heading: "Subject, voice, method",
              body: "Compare along three axes: **subject** (what each is about), **voice/perspective** (who speaks, to whom) and **method** (techniques, form, structure). 'Instructions for Leaving' uses second-person imperatives; 'The Night Ferry' uses third-person observation. That difference in voice is a comparative point about immediacy versus detachment.",
            },
            {
              heading: "The evaluative close",
              body: "End with a justified judgement: which poem is more effective, and why? 'The Night Ferry's unbroken stanza enacts its journey more powerfully than the fragmented instructions of Poem 1, though Poem 1's final release is emotionally more satisfying.' Nuance — acknowledging both strengths — earns more than a simple verdict.",
            },
          ],
          keyFormulas: [
            { name: "Comparative analysis", statement: "Weighing how two poems are similar and different in subject, voice and method." },
            { name: "Parallel comparison", statement: "Keeping the two poems strictly parallel: same point about each before moving on." },
            { name: "Comparative judgement", statement: "A justified view on which poem achieves its effect more powerfully." },
          ],
          workedExample: {
            problem: "Compare 'Instructions for Leaving' and 'The Night Ferry'.",
            solution: "Both poems deal with departure, but differently. 'Instructions for Leaving' dramatises the moment of decision: second-person imperatives ('You will need', 'Do not look back') make the reader the leaver, and the colon in 'remember: you are allowed to go' releases the tension into permission. 'The Night Ferry' enacts the journey itself: a single unbroken stanza, third-person observation, and the behind/ahead movement from 'a town switches off' to 'the far shore rehearses morning' keep the poem suspended between past and future. Poem 1 is about the decision to leave; Poem 2 is about the experience of leaving. Poem 1's final line is emotionally more satisfying; Poem 2's form is structurally more powerful.",
          },
          questions: [
            {
              id: "el11-u10-compare-poems-q1",
              difficulty: "foundation",
              totalMarks: 1,
              extract: DEPARTURES,
              stem: "What do both poems in 'Two Poems of Departure' share?",
              response: {
                type: "mcq",
                choices: [
                  { id: "a", text: "The same speaker and situation." },
                  { id: "b", text: "A theme of departure or leaving." },
                  { id: "c", text: "The same rhyme scheme." },
                  { id: "d", text: "The same tone of anger." },
                ],
                correctChoiceId: "b",
              },
              markscheme: {
                principles: [{ kind: "skill", name: "Comparative subject", statement: "Identify what the poems share before analysing differences." }],
                steps: [
                  { reasoning: "Both poems deal with leaving/departure — one by land instruction, one by sea journey — but their speakers, forms and tones differ.", marks: 1, markCode: "AO1" },
                ],
                finalAnswer: "**(b)** A theme of departure or leaving.",
                commonErrors: ["Assuming shared subject means shared everything."],
              },
            },
            {
              id: "el11-u10-compare-poems-q2",
              difficulty: "foundation",
              totalMarks: 2,
              extract: DEPARTURES,
              stem: "State one similarity and one difference in the poems' subjects or methods.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "skill", name: "Similarity and difference", statement: "Name one of each precisely." }],
                steps: [
                  { reasoning: "Similarity: both poems deal with leaving/departure and use quiet, hushed tones.", marks: 1, markCode: "AO1" },
                  { reasoning: "Difference: Poem 1 dramatises the decision to leave (imperatives, 'you'); Poem 2 enacts the journey (observation, ferry crossing).", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Similarity: both explore departure with a hushed tone. Difference: Poem 1 dramatises the decision; Poem 2 enacts the journey.",
                commonErrors: ["Giving two similarities or two differences instead of one of each."],
              },
            },
            {
              id: "el11-u10-compare-poems-q3",
              difficulty: "core",
              totalMarks: 3,
              extract: DEPARTURES,
              stem: "How do the poems differ in voice and perspective?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Voice and perspective", statement: "Who speaks and how shapes the reader's relationship to the poem." }],
                steps: [
                  { reasoning: "Poem 1 uses second-person imperatives — 'You will need', 'Do not look back' — making the reader the leaver.", evidence: "You will need a coat", marks: 1, markCode: "AO1" },
                  { reasoning: "Poem 2 uses third-person observation — 'The ferry crosses', 'The captain does not speak' — making the reader a watcher.", evidence: "The captain does not speak", marks: 1, markCode: "AO2" },
                  { reasoning: "The difference: immediacy versus detachment — Poem 1 involves, Poem 2 observes; both create intimacy but of different kinds.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Poem 1 addresses 'you' directly, involving the reader in the leaving; Poem 2 observes in third person, making the reader a quiet witness — immediacy versus detachment.",
                commonErrors: ["Noting 'you' versus 'the ferry' without explaining the effect."],
              },
            },
            {
              id: "el11-u10-compare-poems-q4",
              difficulty: "challenge",
              totalMarks: 5,
              extract: DEPARTURES,
              stem: "Compare how each poem ends and the effect of its final line.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "technique", name: "Enjambment and volta", statement: "The ending often carries the poem's emotional resolution." }],
                steps: [
                  { reasoning: "Poem 1 ends 'remember: you are allowed to go' — a colon gathers the poem into permission; the final line is the longest and most open.", evidence: "you are allowed to go", marks: 2, markCode: "AO2" },
                  { reasoning: "Poem 2 ends 'in the smallest of whispers' — a soft, unresolved close; morning is only 'rehearsed', not arrived.", evidence: "the smallest of whispers", marks: 2, markCode: "AO1" },
                  { reasoning: "Poem 1 resolves into permission (leaving is allowed); Poem 2 suspends into expectation (morning is coming) — resolution versus anticipation.", marks: 1, markCode: "AO2" },
                ],
                finalAnswer: "Poem 1 ends in permission — 'you are allowed to go' resolves the hesitation into freedom. Poem 2 ends in anticipation — 'the smallest of whispers' keeps morning just out of reach. One closes, the other opens.",
                commonErrors: ["Describing endings separately without comparing their effects."],
              },
            },
            {
              id: "el11-u10-compare-poems-q5",
              difficulty: "challenge",
              totalMarks: 6,
              extract: DEPARTURES,
              stem: "Compare the mood of the two poems and how each creates it.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "technique", name: "Mood comparison", statement: "Compare how each poem's methods create atmosphere." },
                  { kind: "skill", name: "Parallel comparison", statement: "Keep the two poems strictly parallel." },
                ],
                steps: [
                  { reasoning: "Poem 1's mood is tender hesitation: soft sibilance ('slowly', 'sighs'), short imperatives, the rose that 'have had enough of you' — reluctant but gentle.", evidence: "the bus sighs at the kerb", marks: 2, markCode: "AO2" },
                  { reasoning: "Poem 2's mood is hushed suspension: sibilance ('switches', 'whispers'), a single unbroken stanza, 'the captain does not speak' — quiet watchfulness.", evidence: "in the smallest of whispers", marks: 2, markCode: "AO2" },
                  { reasoning: "Both share hushedness, but Poem 1's is personal and emotional; Poem 2's is observational and suspended — tenderness versus stillness.", marks: 2, markCode: "AO2" },
                ],
                finalAnswer: "Both poems are hushed, but differently: Poem 1 creates tender, reluctant hesitation through imperatives and soft sounds; Poem 2 creates suspended, observational stillness through its unbroken stanza and whispered sibilance.",
                levels: bands(6, "comparison of mood and its creation"),
                commonErrors: ["Saying both are 'sad' without analysing how mood is created differently."],
              },
            },
            {
              id: "el11-u10-compare-poems-q6",
              difficulty: "challenge",
              totalMarks: 12,
              extract: DEPARTURES,
              stem: "Read both poems of departure.",
              parts: [
                { label: "a", prompt: "State one similarity and one difference in the poems' subjects.", marks: 3 },
                { label: "b", prompt: "Analyse one difference in their methods (voice, structure or sound) and its effect.", marks: 3 },
                { label: "c", prompt: "Write an evaluative paragraph judging which poem is more effective.", marks: 6 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "skill", name: "Comparative subject", statement: "Name similarity and difference precisely." },
                  { kind: "technique", name: "Method comparison", statement: "Analyse one method difference and its effect." },
                  { kind: "skill", name: "Evaluative comparison", statement: "Point, evidence, analysis, verdict." },
                ],
                steps: [
                  { part: "a", reasoning: "Similarity: both explore departure/leaving with hushed tones. Difference: Poem 1 dramatises the decision; Poem 2 enacts the journey.", marks: 3, markCode: "AO1" },
                  { part: "b", reasoning: "Method difference — voice: second-person imperatives versus third-person observation; or structure: fragmented lines versus unbroken stanza. Effect: immediacy versus suspension.", marks: 3, markCode: "AO2" },
                  { part: "c", reasoning: "Point: judge which poem is more effective and why.", marks: 1, markCode: "AO3" },
                  { part: "c", reasoning: "Evidence and analysis: Poem 1's final release ('you are allowed to go') is emotionally satisfying; Poem 2's unbroken form enacts the journey more powerfully — a nuanced comparison earns credit.", marks: 3, markCode: "AO2" },
                  { part: "c", reasoning: "Verdict: justified conclusion — e.g. Poem 1 more emotionally affecting, Poem 2 more structurally unified — either defensible with evidence.", marks: 2, markCode: "AO3" },
                ],
                finalAnswer: "(a) Similarity: both explore departure; difference: decision versus journey. (b) Voice difference — 'you' versus observation — creates immediacy versus detachment. (c) A justified evaluative paragraph weighing both poems' strengths.",
                levels: bands(6, "evaluative comparison of the two poems", "c"),
                commonErrors: ["In (a) giving two similarities or two differences.", "In (b) listing methods without effect.", "In (c) summarising instead of judging."],
              },
            },
          ],
        },
      ],
    },
  },
];
