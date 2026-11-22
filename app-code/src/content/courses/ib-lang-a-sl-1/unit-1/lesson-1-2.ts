import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "langa-u1-lesson-1-2",
  code: "1-2",
  title: "Close Reading: Literary Devices and Language Analysis",
  goal: "I CAN analyse imagery, figurative language and sound devices closely and link them to meaning.",
  standards: ["Reading", "Analysis", "Close reading"],
  vocabulary: [
    { term: "Imagery", definition: "Language that appeals to the senses — visual, auditory, tactile, olfactory or gustatory." },
    { term: "Metaphor", definition: "A direct comparison that identifies one thing with another: 'her voice was gravel'." },
    { term: "Simile", definition: "An explicit comparison using 'like' or 'as': 'cold as stone'." },
    { term: "Personification", definition: "Giving human qualities to non-human things: 'the wind whispered'." },
    { term: "Alliteration", definition: "Repetition of initial consonant sounds: 'dark, deep and dangerous'." },
    { term: "Enjambment", definition: "Running a sentence over a line break without punctuation, creating flow or tension." },
  ],
  concepts: [
    {
      id: "langa-u1-imagery-figurative",
      title: "Imagery and figurative language",
      skill: "Analyse metaphor, simile, personification and imagery clusters and explain their contribution to meaning.",
      lesson: {
        sections: [
          {
            heading: "What imagery does",
            body: "Imagery makes the abstract concrete by appealing to the senses. A single image does little; **clusters** of related images build a coherent world. When analysing, identify the **vehicle** (the thing borrowed) and the **tenor** (the thing described): in 'her mind was a locked room', the mind is the tenor and the locked room the vehicle.",
          },
          {
            heading: "Figurative devices",
            body: "**Metaphor** asserts identity ('time is money'); **simile** compares explicitly ('like', 'as'); **personification** lends human qualities; **hyperbole** exaggerates for effect; **oxymoron** yokes opposites ('deafening silence'). Each device compresses meaning — a metaphor carries an entire argument about similarity.",
          },
          {
            heading: "From device to meaning",
            body: "Never stop at naming the device. Ask: what does the comparison **emphasise**, **conceal** or **distort**? A personified storm can suggest nature as enemy or as indifferent force. The same image can support different readings — your job is to justify yours from the words.",
          },
        ],
        keyFormulas: [
          { name: "Analytical move", statement: "Device + quotation + tenor/vehicle + effect on meaning" },
          { name: "Image cluster", statement: "Group related images; the pattern reveals the text's underlying attitude." },
        ],
        workedExample: {
          problem: "Analyse: 'The city wore its lights like medals.'",
          solution: "Personification ('wore') plus simile ('like medals') makes the city a decorated soldier — suggesting pride, display and perhaps militarism or performance. The verb 'wore' implies the lights are costume, not substance.",
        },
      },
      questions: [
        {
          id: "langa-u1-iq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'The classroom was a zoo.' This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personification" },
              { id: "b", text: "Metaphor" },
              { id: "c", text: "Hyperbole" },
              { id: "d", text: "Simile" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Direct identification of one thing with another without 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "The classroom is directly called a zoo — identification, not comparison.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Metaphor",
            commonErrors: ["Calling it a simile — similes require 'like' or 'as'."],
          },
        },
        {
          id: "langa-u1-iq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Field at Dusk",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The hedgerows leaned together\nlike old men sharing secrets.\nBeyond them the sky\nwas the colour of a held breath.",
          },
          stem: "Analyse the imagery in this extract and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Imagery analysis", statement: "Identify device, quotation, vehicle and effect." },
            ],
            steps: [
              { reasoning: "Simile: hedgerows 'like old men sharing secrets' — personifies the landscape and suggests intimacy, age and hidden knowledge.", marks: 1, markCode: "M" },
              { reasoning: "The sky 'the colour of a held breath' — synaesthetic, suspended moment; conveys anticipation or tension.", marks: 1, markCode: "M" },
              { reasoning: "Together the images create a hushed, expectant atmosphere — the natural world anthropomorphised as watchful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personifying similes create a hushed, expectant natural world; the held-breath sky sustains tension.",
            commonErrors: ["Listing devices without explaining the combined atmosphere."],
          },
        },
        {
          id: "langa-u1-iq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Her answers came wrapped in cotton wool — soft, well-meaning and impossible to grip. He pressed again, and she produced another cushion.",
          },
          stem: "Analyse how the extended metaphor of cotton wool develops in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "A comparison sustained across phrases or sentences, deepening its implications." },
            ],
            steps: [
              { reasoning: "The metaphor casts her answers as soft and evasive — she is not lying, she is deflecting.", marks: 1, markCode: "M" },
              { reasoning: "'Impossible to grip' adds a second layer: the evasion frustrates the interviewer's attempt to get hold of facts.", marks: 1, markCode: "M" },
              { reasoning: "'Well-meaning' complicates the judgement — the deflection is kind, not malicious.", marks: 1, markCode: "R" },
              { reasoning: "The closing image of 'another cushion' makes evasion habitual and inexhaustible — the metaphor's repetition enacts its meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The sustained cotton-wool metaphor presents evasive kindness: her answers are soft, well-meaning and endlessly produced.",
            commonErrors: ["Treating each image separately instead of tracing the extended metaphor."],
          },
        },
        {
          id: "langa-u1-iq4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Analyse how figurative language creates meaning in the following extract.",
          extract: {
            title: "Grief",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Grief is a house with no doors.\nYou move through it\nwith your hands out,\nlearning the furniture\nof a place that was never yours.\n\nSome nights the windows\nare only paper.\nYou press your face\nto a wall\nand call it looking out.",
          },
          parts: [
            { label: "a", prompt: "Identify two figurative devices and explain what each compares.", marks: 2 },
            { label: "b", prompt: "Analyse how the extended house metaphor develops across the poem.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of the final image of pressing against 'a wall'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Grief is figured as a house — enclosed, unfamiliar, deceptive." },
            ],
            steps: [
              { part: "a", reasoning: "'House with no doors' — metaphor: grief as enclosure with no exit; also oxymoronic since a house implies shelter.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Windows are only paper' — metaphor/synecdoche suggesting fragile, fake access to the outside world.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The house metaphor sustains grief as an inhabited space the mourner must learn — grief as domestic and alien at once.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Learning the furniture of a place that was never yours' deepens alienation: grief inhabits the familiar until it becomes foreign.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The paper windows extend the enclosure image — vision itself is illusory; looking out is actually pressing against a wall.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Pressing the face to 'a wall' while 'call[ing] it looking out' enacts self-deception: the mourner performs hope that the image denies.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The blunt monosyllables and short lines make the deception feel involuntary and deeply sad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) House metaphor, paper-window metaphor. (b) Grief as alien domestic space; perception itself becomes unreliable. (c) The wall image exposes performed hope — the poem's most devastating moment.",
            commonErrors: ["Describing images without tracing how the metaphor develops."],
          },
        },
        {
          id: "langa-u1-iq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Her temper was a pressure cooker.' This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Onomatopoeia" },
              { id: "b", text: "Simile" },
              { id: "c", text: "Personification" },
              { id: "d", text: "Metaphor" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metaphor", statement: "Direct identification of one thing with another, without 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "Her temper is directly identified as a pressure cooker — no comparison marker.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Metaphor",
            commonErrors: ["Calling it personification — the temper is not given human qualities, it is equated with an object."],
          },
        },
        {
          id: "langa-u1-iq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'He stood as brave as a lion.' The comparison is marked by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'stood' — making it a metaphor" },
              { id: "b", text: "'as' — making it a simile" },
              { id: "c", text: "'brave' — making it personification" },
              { id: "d", text: "'lion' — making it hyperbole" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simile", statement: "A simile compares explicitly using 'like' or 'as'." },
            ],
            steps: [
              { reasoning: "The 'as...as' construction is the explicit marker of a simile.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 'as' — making it a simile",
            commonErrors: ["Identifying the compared term rather than the grammatical marker of comparison."],
          },
        },
        {
          id: "langa-u1-iq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "In the line 'the wind whispered through the keys', the wind is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A simile" },
              { id: "b", text: "Personification" },
              { id: "c", text: "A metaphor" },
              { id: "d", text: "An oxymoron" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personification", statement: "Giving human qualities or actions to non-human things." },
            ],
            steps: [
              { reasoning: "Whispering is a human action attributed to the wind.", marks: 1, markCode: "M" },
              { reasoning: "No 'like' or 'as' is used, so it is not a simile; nothing is equated, so not a metaphor.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Personification",
            commonErrors: ["Calling all figurative verbs personification without checking whether a human quality is transferred."],
          },
        },
        {
          id: "langa-u1-iq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "'A deafening silence filled the hall.' This is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hyperbole" },
              { id: "b", text: "Synecdoche" },
              { id: "c", text: "Oxymoron" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Oxymoron", statement: "A phrase combining contradictory terms for compressed effect." },
            ],
            steps: [
              { reasoning: "'Deafening' (loud) and 'silence' (soundless) are direct opposites joined in one phrase.", marks: 1, markCode: "M" },
              { reasoning: "The contradiction is the device: the silence is so absolute it becomes a kind of noise.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Oxymoron",
            commonErrors: ["Confusing oxymoron with paradox — an oxymoron is a compressed phrase, a paradox a contradictory statement."],
          },
        },
        {
          id: "langa-u1-iq9",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Interview, Continued",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "His confidence was a borrowed coat — it fit until it rained.",
          },
          stem: "Which statement best analyses the metaphor in this sentence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tenor is 'confidence' and the vehicle is 'a borrowed coat'; the image suggests confidence is external, conditional and easily exposed." },
              { id: "b", text: "It is an oxymoron because confidence and rain are opposites." },
              { id: "c", text: "It is a simile because 'fit' compares two things." },
              { id: "d", text: "The tenor is 'a borrowed coat' and the vehicle is 'confidence'; the image proves he owns expensive clothes." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tenor and vehicle", statement: "In a metaphor, the tenor is the subject described; the vehicle is the borrowed image." },
            ],
            steps: [
              { reasoning: "Confidence is being described, so it is the tenor; the borrowed coat is the vehicle.", marks: 1, markCode: "M" },
              { reasoning: "'Borrowed' implies it is not truly his; 'until it rained' makes the confidence conditional on conditions staying fair.", marks: 1, markCode: "M" },
              { reasoning: "The image conceals the fear beneath the performance — a borrowed thing can be taken back or exposed.", marks: 1, markCode: "R" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tenor 'confidence', vehicle 'borrowed coat' — confidence as external, conditional, exposable",
            commonErrors: ["Reversing tenor and vehicle, or treating 'fit' as a comparison marker."],
          },
        },
        {
          id: "langa-u1-iq10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Room",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The room was all embers: the lamp a low red coal, her voice smoke, his apology ash.",
          },
          stem: "Which statement best describes how the image cluster works?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The shared fire imagery builds a coherent atmosphere of dying warmth and exhausted conflict." },
              { id: "b", text: "The images contradict each other, producing confusion." },
              { id: "c", text: "The cluster is purely decorative and carries no meaning." },
              { id: "d", text: "Each image is unrelated, describing separate objects." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Image cluster", statement: "Related images accumulate into a shared atmosphere greater than any single picture." },
            ],
            steps: [
              { reasoning: "Coal, smoke and ash all belong to the fire's lifecycle — the cluster is coherent, not random.", marks: 1, markCode: "M" },
              { reasoning: "Mapping the images onto people (her voice = smoke, his apology = ash) makes the relationship itself combustible and spent.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The fire cluster builds an atmosphere of dying warmth and exhausted conflict",
            commonErrors: ["Analysing each image in isolation instead of reading the cluster as a system."],
          },
        },
        {
          id: "langa-u1-iq11",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "The Apology",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "His apology arrived folded small, like a note passed in class — earnest, creased and never quite unfolded.",
          },
          stem: "Analyse how the extended metaphor in this extract shapes the reader's judgement of the apology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "A sustained comparison develops its implications across each phrase of the sentence." },
            ],
            steps: [
              { reasoning: "The apology is figured as a note passed in class — the vehicle is childish, secretive and deniable.", marks: 1, markCode: "M" },
              { reasoning: "'Folded small' literalises the apology's diminished scale — contrition reduced to pocket size.", marks: 1, markCode: "M" },
              { reasoning: "'Creased' suggests it has been handled, read and reread — or hidden.", marks: 1, markCode: "R" },
              { reasoning: "'Never quite unfolded' is the metaphor's payoff: the apology is never fully opened, so it never fully lands.", marks: 1, markCode: "M" },
              { reasoning: "The extended simile thus judges the apology without stating judgement — sincerity ('earnest') is acknowledged but outweighed by evasiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The classroom-note metaphor makes the apology secretive and incomplete: earnest but folded small, creased and never fully unfolded.",
            commonErrors: ["Identifying the simile without tracing how 'never quite unfolded' completes the judgement."],
          },
        },
        {
          id: "langa-u1-iq12",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Drawer",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "She kept her grief in a locked drawer and fed it nothing — yet it grew, the way rooms grow colder when no one enters them.",
          },
          stem: "Analyse the paradox and personification in this sentence and their combined effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paradox and personification", statement: "Contradictory premises and humanised abstractions can express what literal statement cannot." },
            ],
            steps: [
              { reasoning: "Grief is figured as a possession stored in a drawer — the metaphor domesticates and contains it.", marks: 1, markCode: "M" },
              { reasoning: "'Fed it nothing' sets up the paradox: deprivation should shrink grief, yet 'it grew'.", marks: 1, markCode: "M" },
              { reasoning: "The simile 'the way rooms grow colder' personifies absence — neglect itself produces feeling.", marks: 1, markCode: "M" },
              { reasoning: "The paradox resolves the central truth of suppressed grief: ignoring it does not diminish it; it festers.", marks: 1, markCode: "R" },
              { reasoning: "The drawer 'locked' adds self-protection turned self-imprisonment — she has hidden grief from others and herself.", marks: 1, markCode: "M" },
              { reasoning: "The sentence compresses a whole psychology of avoidance into one image-cluster: drawer, feeding, cold rooms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The locked-drawer metaphor and the paradox of unfed growth express suppressed grief: neglect makes feeling colder and larger, not smaller.",
            commonErrors: ["Explaining 'paradox' without showing how the cold-room simile resolves it."],
          },
        },
        {
          id: "langa-u1-iq13",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Kitchen",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The tap drips its small arithmetic.\nI count the drops as other people\ncount blessings — except the sums\nnever come out even here.\n\nOn the sill, the basil leans\nlike someone listening for footsteps.\nI water it anyway.\nSome things you keep alive\nby not asking what they're for.",
          },
          stem: "Analyse how figurative language creates meaning in this poem.",
          parts: [
            { label: "a", prompt: "Identify two figurative devices and explain what each compares.", marks: 2 },
            { label: "b", prompt: "Analyse how the kitchen imagery develops the speaker's state of mind.", marks: 3 },
            { label: "c", prompt: "Evaluate the significance of 'by not asking what they're for'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Figurative language", statement: "Devices turn domestic routine into a meditation on attention and unanswered questions." },
            ],
            steps: [
              { part: "a", reasoning: "'Small arithmetic' — metaphor: the drip is figured as calculation; counting drops replaces counting blessings.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Basil leaning 'like someone listening for footsteps' — simile personifying the plant as anxious, expectant.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The counting motif ('count the drops', 'the sums never come out even') shows a mind seeking order in repetition.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The kitchen becomes a site of suspended meaning — taps, plants and unanswered questions all wait for a purpose.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Watering the basil 'anyway' enacts devotion without guarantee — care as habit rather than hope.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "'Not asking what they're for' names the poem's ethic: sustain things without demanding justification — a defence against futility.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The line's plainness after the figurative build-up gives it the weight of earned wisdom.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Metaphor of arithmetic, simile of listening basil. (b) Kitchen routine becomes a mind seeking order and purpose. (c) The final line dignifies questionless care — keeping alive without asking why.",
            commonErrors: ["Identifying devices without linking them to the speaker's suspended, questioning state."],
          },
        },
        {
          id: "langa-u1-iq14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Auction",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "Everything in the house had been chosen once, by someone, for a reason that had since evaporated. The sofa still wore its price tag's ghost — not the sticker, but the idea of worth, which clung to objects the way stories cling to people.",
          },
          stem: "Analyse how figurative language conveys the extract's elegiac tone.",
          parts: [
            { label: "a", prompt: "Identify two figurative devices and explain what each compares.", marks: 2 },
            { label: "b", prompt: "Analyse how the extended metaphor of 'worth' develops through the extract.", marks: 3 },
            { label: "c", prompt: "Evaluate the effect of comparing objects to stories ('the way stories cling to people').", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor and personification", statement: "The 'ghost of worth' links objects, memory and narrative into one elegiac system." },
            ],
            steps: [
              { part: "a", reasoning: "'Reason that had since evaporated' — metaphor: purposes are figured as liquid that vanishes; choices become inexplicable.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The price tag's 'ghost' — personification/metonymy: value survives as an absent presence on the object.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Worth is figured as a residue — not the sticker but 'the idea of worth', suggesting value is remembered rather than real.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Clung to objects' makes value adhesive and pathetic — it attaches where it is no longer needed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The progression from chosen objects to ghost-price to clinging worth traces how meaning drains from things.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The simile 'the way stories cling to people' transfers the object's condition to human memory — we too carry narratives that outlive their use.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "This universalises the auction: the house is not just being sold, it is being remembered — the elegy is for a way of life.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The comparison gives the extract its ache: worth persists as story, not substance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Evaporated reasons, ghost of worth. (b) Worth traced from choice to residue to clinging memory. (c) The stories-people simile makes the sale an elegy for memory itself.",
            commonErrors: ["Describing images without showing how 'worth' is systematically transformed across the extract."],
          },
        },
        {
          id: "langa-u1-iq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The Meeting",
            author: "Written for Akademik Space",
            source: "Original prose extract",
            text: "The meeting was a slow-motion car crash — everyone saw it coming, no one could look away, and afterwards the wreckage was blamed on the weather.",
          },
          stem: "Analyse how the extract's figurative language creates satire.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Satiric metaphor", statement: "An extended metaphor can mock institutional behaviour by translating it into another domain." },
            ],
            steps: [
              { reasoning: "'Slow-motion car crash' — metaphor: the meeting is figured as an accident everyone witnessed but no one prevented.", marks: 1, markCode: "M" },
              { reasoning: "'Everyone saw it coming' adds the element of culpable spectatorship — the crash is communal, not accidental.", marks: 1, markCode: "M" },
              { reasoning: "'No one could look away' extends the metaphor: disaster as spectacle, attention as complicity.", marks: 1, markCode: "M" },
              { reasoning: "'The wreckage was blamed on the weather' completes the satire: institutions deflect responsibility onto nature, as if failure were meteorological.", marks: 1, markCode: "M" },
              { reasoning: "The metaphor's coherence — crash, spectators, blame — lets the whole sentence work as one sustained joke about accountability.", marks: 1, markCode: "R" },
              { reasoning: "The effect is dry and cutting: the extract mocks how organisations convert their own failures into unavoidable events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The sustained car-crash metaphor satirises institutional failure: everyone witnesses, no one prevents, and blame is outsourced to 'the weather'.",
            commonErrors: ["Identifying the metaphor without tracing how 'weather' completes the satire."],
          },
        },
        {
          id: "langa-u1-iq16",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Hands",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "Grandmother's hands were topography —\nvalleys of veins, mountains\nof knotted years, a river\nof rings that had forgotten\nhow to reach the sea.",
          },
          stem: "Analyse the central metaphor and how the poem develops it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Extended metaphor", statement: "Mapping hands onto landscape makes age, labour and time visible as terrain." },
            ],
            steps: [
              { reasoning: "'Topography' — metaphor: the hands are figured as a landscape to be surveyed, making age a terrain rather than a condition.", marks: 1, markCode: "M" },
              { reasoning: "'Valleys of veins' and 'mountains of knotted years' extend the landscape metaphor: veins are geography, age is geology.", marks: 1, markCode: "M" },
              { reasoning: "The 'river of rings' shifts the metaphor — rings are both tree-cuts and wedding bands, fusing age and marriage.", marks: 1, markCode: "M" },
              { reasoning: "'Forgotten how to reach the sea' personifies the river as frustrated — the poem's most poignant turn: time's flow arrested.", marks: 1, markCode: "R" },
              { reasoning: "The landscape metaphor dignifies the hands: they are not worn but mapped, a record worth surveying.", marks: 1, markCode: "M" },
              { reasoning: "The poem thus uses figurative language to make the invisible visible — a lifetime read as geography.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The topography metaphor turns grandmother's hands into landscape; the arrested river at the end makes lifelong labour and love visible as terrain.",
            commonErrors: ["Stopping at 'hands = landscape' without tracing how the river image develops the metaphor."],
          },
        },
      ],
    },
    {
      id: "langa-u1-sound-patterns",
      title: "Sound, rhythm and pattern",
      skill: "Analyse alliteration, assonance, onomatopoeia, meter and lineation and connect sound to meaning.",
      lesson: {
        sections: [
          {
            heading: "Sound devices",
            body: "**Alliteration** repeats initial consonants ('wild winds'); **assonance** repeats vowel sounds; **consonance** repeats final consonants; **onomatopoeia** imitates sounds ('buzz', 'crash'); **sibilance** repeats s-sounds for whispering or menace. Sound is meaning: harsh consonants feel aggressive, liquid sounds feel smooth.",
          },
          {
            heading: "Rhythm and meter",
            body: "**Meter** is the pattern of stressed and unstressed syllables — iambic pentameter (da-DUM ×5) is the English epic line; **free verse** abandons regular meter deliberately. **Rhythm** is the audible beat of the line, created by phrasing, punctuation and lineation even without regular meter.",
          },
          {
            heading: "Reading aloud",
            body: "Sound analysis requires hearing the poem. Read the extract aloud silently, marking stressed words, pauses at punctuation and caesuras (mid-line pauses). Notice where a line **runs on** (enjambment) versus where it **stops** — each choice directs breath and emphasis.",
          },
        ],
        keyFormulas: [
          { name: "Sound checklist", statement: "Alliteration + assonance/consonance + onomatopoeia + sibilance → emotional colour" },
          { name: "Rhythm checklist", statement: "Meter (regular/irregular) + enjambment/end-stop + caesura + stressed words" },
        ],
        workedExample: {
          problem: "Analyse the sound of: 'The silver sea slid slowly under the low sun.'",
          solution: "Sibilance ('silver sea slid slowly') creates a hissing, fluid sound matching the sea's motion; the repeated 's' softens the line, evoking calm and monotony. The long vowels in 'slowly' and 'low' lengthen the rhythm.",
        },
      },
      questions: [
        {
          id: "langa-u1-sq1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'The furious fire fell fast.' This line is built mainly on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assonance" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Alliteration" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alliteration", statement: "Repetition of initial consonant sounds in neighbouring words." },
            ],
            steps: [
              { reasoning: "The repeated 'f' sound at the start of furious, fire, fell, fast is alliteration.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Alliteration",
            commonErrors: ["Confusing alliteration (initial consonants) with assonance (vowel sounds)."],
          },
        },
        {
          id: "langa-u1-sq2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Engine",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The engine coughed, coughed again —\na smoker's laugh in the cold morning.\nI turned the key. It caught.\nThen the whole street shook\nwith its single, stubborn heartbeat.",
          },
          stem: "Analyse the sound devices and their effect in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and meaning", statement: "Onomatopoeia and repetition mimic and dramatise the subject." },
            ],
            steps: [
              { reasoning: "'Coughed, coughed' — onomatopoeia and repetition imitate the engine's faltering rhythm and personify it as a smoker.", marks: 1, markCode: "M" },
              { reasoning: "The em-dash pause enacts the hesitation before the engine catches.", marks: 1, markCode: "M" },
              { reasoning: "'Single, stubborn heartbeat' extends the personification; the sibilance and plosives make the engine feel alive and resistant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Onomatopoeia, repetition and personification make the engine sound like a living, reluctant creature.",
            commonErrors: ["Naming 'onomatopoeia' without linking the sound to the engine's character."],
          },
        },
        {
          id: "langa-u1-sq3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Roads",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  The road goes on and on\n2  past fields I have ploughed\n3  and cannot plough again —\n4  the horse knows it.\n\n5  He stops. His ears turn back.\n6  Somewhere behind us a gate swings\n7  in the wind, / unlatched.\n\n8  I count to ten.\n9  I count to twenty.",
          },
          stem: "Analyse how rhythm, lineation and caesura shape meaning in this poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythm and lineation", statement: "Line breaks, caesuras and pacing enact the poem's events." },
            ],
            steps: [
              { reasoning: "Lines 1-3 flow with regular end-stopping and the refrain-like 'and on' creates forward motion; the em-dash at line 3 forces a pause on loss.", marks: 1, markCode: "M" },
              { reasoning: "Line 4's short 'the horse knows it.' breaks the flow abruptly — the animal's knowledge lands as a separate, ominous beat.", marks: 1, markCode: "M" },
              { reasoning: "The caesura in line 7 ('in the wind, / unlatched') isolates 'unlatched' — the gate's openness becomes the poem's pivot.", marks: 1, markCode: "M" },
              { reasoning: "Lines 8-9 accelerate: 'I count to ten. / I count to twenty.' The counting mimics stalling and dread; the irregular final lines contrast with the earlier even rhythm.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form enacts hesitation: steady lines give way to broken, counting lines that stage the speaker's reluctance.",
            commonErrors: ["Describing metre without linking pauses and breaks to emotional effect."],
          },
        },
        {
          id: "langa-u1-sq4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse how sound and rhythm contribute to meaning in the following poem.",
          extract: {
            title: "The Storm",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  Thunder stitched the sky\n2  in black thread. Rain wrote\n3  its long grey sentences\n4  across the fields,\n\n5  and the house held its breath\n6  while the dark rehearsed\n7  its slow artillery\n8  on the roof.",
          },
          parts: [
            { label: "a", prompt: "Identify two sound devices and give the line each appears in.", marks: 2 },
            { label: "b", prompt: "Analyse how the poem's rhythm and lineation enact the storm's approach.", marks: 3 },
            { label: "c", prompt: "Evaluate how sound patterns reinforce the poem's imagery.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound-meaning cohesion", statement: "Sound patterns echo and intensify the imagery rather than decorating it." },
            ],
            steps: [
              { part: "a", reasoning: "Alliteration: 'black thread' / 'slow artillery' (b/t sounds); consonance in 'stitched the sky' (st).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assonance: the long 'o'/'ou' sounds in 'house held its breath' / 'slow artillery' create a low, ominous tone.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The first quatrain moves in longer, flowing lines ('its long grey sentences / across the fields') mimicking rain's persistence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Line 5 shortens attention to 'the house held its breath' — a caesura-like suspension before the storm's violence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lines 6-8 shorten and harden ('dark rehearsed / its slow artillery') — the rhythm accelerates toward impact.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The 'stitched'/'thread' image pairs with the crisp consonants of 'black thread' — sewing metaphor made audible.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Artillery' and 'rehearsed' give the storm military precision; the clipped consonants sound like percussion.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The held-breath image is enacted by the pause in rhythm — form performs the fear it describes.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Alliteration ('black thread', 'slow artillery'), assonance. (b) Rhythm lengthens then shortens, enacting approach and impact. (c) Sound patterns make the imagery audible — sewing and artillery both heard.",
            commonErrors: ["Listing sound devices without connecting them to the storm's movement."],
          },
        },
        {
          id: "langa-u1-sq5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'The rain in Spain falls mainly on the plain.' The dominant sound pattern is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assonance" },
              { id: "b", text: "Onomatopoeia" },
              { id: "c", text: "Consonance" },
              { id: "d", text: "Alliteration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Assonance", statement: "Assonance repeats vowel sounds within words." },
            ],
            steps: [
              { reasoning: "The repeated 'ai' vowel in rain, Spain, mainly and plain is assonance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Assonance",
            commonErrors: ["Confusing assonance (vowels) with alliteration (initial consonants)."],
          },
        },
        {
          id: "langa-u1-sq6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Words like 'buzz', 'hiss' and 'crack' are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consonance" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Onomatopoeia" },
              { id: "d", text: "Assonance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Onomatopoeia", statement: "Words that imitate the sounds they name." },
            ],
            steps: [
              { reasoning: "Each word's sound imitates the noise it denotes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Onomatopoeia",
            commonErrors: ["Confusing sound-imitating words with words that merely repeat sounds."],
          },
        },
        {
          id: "langa-u1-sq7",
          difficulty: "core",
          totalMarks: 3,
          stem: "In 'he finds what he seeks in the deep', the repeated final consonant sounds (nds, ks, ps) demonstrate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consonance" },
              { id: "b", text: "Assonance" },
              { id: "c", text: "Alliteration" },
              { id: "d", text: "Onomatopoeia" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consonance", statement: "Consonance repeats consonant sounds within or at the end of words." },
            ],
            steps: [
              { reasoning: "The repeated sounds are final consonants within words, not initial sounds — that is consonance.", marks: 1, markCode: "M" },
              { reasoning: "The effect is a muted, closed sound — fitting 'the deep'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Consonance",
            commonErrors: ["Calling it alliteration — alliteration requires repeated initial sounds."],
          },
        },
        {
          id: "langa-u1-sq8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sibilance — the repetition of 's' sounds — typically creates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a comic, bouncy tone" },
              { id: "b", text: "a loud, percussive effect" },
              { id: "c", text: "a hissing quality suggesting whispering, secrecy or menace" },
              { id: "d", text: "a smooth, liquid rhythm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sibilance", statement: "The hissing 's' sound carries connotations of whisper, snake or concealed threat." },
            ],
            steps: [
              { reasoning: "Sibilant sounds are acoustically hissing — they imitate whispering or serpent-like sound.", marks: 1, markCode: "M" },
              { reasoning: "In context, the hissing suggests concealed threat or intimate secrecy rather than openness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A hissing quality suggesting whispering, secrecy or menace",
            commonErrors: ["Confusing sibilance with plosive sounds like 'b', 'd', 'g' which feel harder."],
          },
        },
        {
          id: "langa-u1-sq9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Enjambment is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "rhyming the last words of each stanza" },
              { id: "b", text: "a mid-line pause marked by a comma" },
              { id: "c", text: "repeating the same line at intervals" },
              { id: "d", text: "running a sentence over a line break without punctuation, creating flow or tension" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Enjambment", statement: "Enjambment carries a sentence across a line break, delaying closure and controlling pace." },
            ],
            steps: [
              { reasoning: "The sentence continues past the line's end — the break interrupts syntax, not sense.", marks: 1, markCode: "M" },
              { reasoning: "This delays closure and pulls the reader forward, creating flow or tension depending on context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Running a sentence over a line break without punctuation",
            commonErrors: ["Confusing enjambment with end-stopping — an end-stopped line closes a sense unit at the break."],
          },
        },
        {
          id: "langa-u1-sq10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Greenhouse",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  Glass sweated in the heat\n2  and the seedlings bowed\n3  like old men in a queue\n4  waiting for the door\n5  that never opens.",
          },
          stem: "Which analysis of sound and lineation is most accurate for this extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The end-stopped lines slow the poem into elegiac stillness." },
              { id: "b", text: "Heavy plosives of 'b', 'd' and 'g' produce a muffled, sleepy sound." },
              { id: "c", text: "The repeated 'ee' vowel sounds and sibilant 's' create a humid, hissing atmosphere that makes the waiting feel oppressive." },
              { id: "d", text: "Regular iambic pentameter gives the poem a ceremonial calm." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and lineation", statement: "Sibilance and long vowels can render heat and humidity audible." },
            ],
            steps: [
              { reasoning: "'Glass', 'sweated', 'seedlings', 'queue' repeat sibilant and 'ee' sounds — a humid hiss.", marks: 1, markCode: "M" },
              { reasoning: "Lines 3-5 run on into 'never opens', so the waiting is suspended by the enjambed syntax.", marks: 1, markCode: "M" },
              { reasoning: "The sound is soft and sustained — oppressive rather than percussive, matching the bowed seedlings' stasis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Sibilant 'ee' sounds create a humid, oppressive atmosphere of waiting",
            commonErrors: ["Naming a device without matching the described sound to the actual sounds in the lines."],
          },
        },
        {
          id: "langa-u1-sq11",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Still Water",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The lake was still. The moon was low.\nA heron stepped across the water,\nslow as a thought that cannot hurry\nand yet arrives before you know it.",
          },
          stem: "Analyse how the poem's rhythm and pacing shape its mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythm and pacing", statement: "End-stopped lines, slow phrasing and suspended syntax enact stillness and delayed realisation." },
            ],
            steps: [
              { reasoning: "The first two lines are short and end-stopped — 'still', 'low' — each landing like a held breath.", marks: 1, markCode: "M" },
              { reasoning: "The heron 'stepped across the water' is rendered in one unhurried clause; the lack of punctuation mimics gliding motion.", marks: 1, markCode: "M" },
              { reasoning: "The simile 'slow as a thought that cannot hurry' is paradoxical — slowness figured as inevitability.", marks: 1, markCode: "M" },
              { reasoning: "The final line 'arrives before you know it' enacts delayed perception: the poem's pace is the thought's pace.", marks: 1, markCode: "M" },
              { reasoning: "The overall rhythm is suspended and circular — form performs the stillness it describes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "End-stopped short lines and suspended syntax give the poem the pace of still water — slowness and delayed awareness enacted in rhythm.",
            commonErrors: ["Describing images without connecting the line breaks and pauses to the poem's tempo."],
          },
        },
        {
          id: "langa-u1-sq12",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Wind",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The wind worried the wires\nall night — a fretful metal\nsawing back and forth.\nBy morning the fence had given up,\nleaning into the field\nlike a drunk who has decided\nnot to try anymore.",
          },
          stem: "Analyse the sound devices and rhythm in this extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound and rhythm", statement: "Sibilance, plosives and irregular line lengths can enact the agitation they describe." },
            ],
            steps: [
              { reasoning: "'Worried the wires' — alliteration of 'w' plus the verb 'worried' personifies the wind as anxious labour.", marks: 1, markCode: "M" },
              { reasoning: "'Fretful metal sawing' — the 's' sounds create sibilance; the verb 'sawing' is itself onomatopoeic of the wire's noise.", marks: 1, markCode: "M" },
              { reasoning: "The irregular line lengths and mid-line dash mimic the wind's uneven gusts — form enacts the restlessness.", marks: 1, markCode: "M" },
              { reasoning: "The closing lines slow and sag ('leaning', 'not to try anymore'), the rhythm collapsing with the fence's resistance.", marks: 1, markCode: "M" },
              { reasoning: "Sound and rhythm together make the reader hear the night: agitation that exhausts into resignation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Alliteration, sibilance and onomatopoeic 'sawing' make the wind audible; irregular lines enact gusts that finally sag into resignation.",
            commonErrors: ["Naming sibilance without connecting the hissing sound to the wires' noise."],
          },
        },
        {
          id: "langa-u1-sq13",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Ledger",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  Ink dried on the page\n2  like the first snow\n3  of a terrible winter.\n4  The clerk counts the dead\n5  in columns too narrow\n6  for their names,\n7  and files them under 'weather'.\n8  Outside, the bells practise\n9  their small, bright arithmetic.",
          },
          stem: "Analyse how sound and rhythm contribute to meaning in this poem.",
          parts: [
            { label: "a", prompt: "Identify two sound devices and give the line each appears in.", marks: 2 },
            { label: "b", prompt: "Analyse how the poem's rhythm and lineation enact the counting and filing of the dead.", marks: 3 },
            { label: "c", prompt: "Evaluate how the sound patterns reinforce the poem's central metaphor of 'arithmetic'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound-meaning cohesion", statement: "Sound patterns can make bureaucratic violence audible." },
            ],
            steps: [
              { part: "a", reasoning: "Alliteration: 'columns' / 'counts' / 'clerk' (c sounds) in lines 4-5; sibilance in 'files them under' / 'practise' (s/f sounds).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Assonance: the short 'i' in 'Ink', 'winter', 'names' creates a clipped, clinical tone.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The short end-stopped lines 4-7 ('counts', 'columns', 'names', 'weather') mimic ledger entries — each line a filed item.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lines 8-9 lengthen and brighten ('bells practise / their small, bright arithmetic'), the rhythm loosening after the catalogue of death.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The contrast enacts the poem's argument: human lives reduced to columns, while bells keep 'practising' — ritual persisting beyond record.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "The repeated 'c' sounds in 'counts/columns/clerk' make the counting itself audible — sound imitates the bureaucracy it condemns.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Bright arithmetic' pairs the cold maths of the ledger with the bells' sound — the poem hears its own metaphor.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Alliteration of 'c', sibilance of 's/f'. (b) Short ledger-like lines catalogue the dead; longer bell lines break the pattern. (c) Sound makes the arithmetic audible — counting rendered as consonant music.",
            commonErrors: ["Listing sound devices without linking them to the poem's bureaucratic violence."],
          },
        },
        {
          id: "langa-u1-sq14",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Night Bus",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "1  The bus sighs at the stop\n2  and lets its passengers out\n3  into the grammar of streetlights.\n4  Someone's umbrella argues\n5  with the rain — tick, tick, tick —\n6  a small gun going off\n7  in every direction at once.\n8  We ride above it all,\n9  counting the city's lit windows\n10 as other people count saints.",
          },
          stem: "Analyse how sound and rhythm contribute to meaning in this poem.",
          parts: [
            { label: "a", prompt: "Identify two sound devices and give the line each appears in.", marks: 2 },
            { label: "b", prompt: "Analyse how the poem's rhythm and lineation enact the bus's motion and the city's noise.", marks: 3 },
            { label: "c", prompt: "Evaluate how the sound patterns reinforce the poem's imagery of counting and 'saints'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound-meaning cohesion", statement: "Onomatopoeia and irregular rhythm can make a poem's city audible." },
            ],
            steps: [
              { part: "a", reasoning: "Onomatopoeia: 'tick, tick, tick' (line 5) imitates rain on the umbrella; 'sighs' (line 1) personifies the bus audibly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Sibilance/assonance: 'streetlights', 'someone's', 'saints' repeat s-sounds; 'bus sighs' gives the vehicle a breath.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lines 1-3 move in loose iambic flow — the bus's smooth departure; line 4-7 fragment and accelerate around the rain's 'tick tick tick'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The parenthetical dashes around 'tick, tick, tick' create a caesura-like interruption — rain intruding into the verse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Lines 8-10 settle into longer, slower lines — the elevated, contemplative rhythm of the ride home.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "'Counting' in lines 9-10 is enacted by the repeated 's' sounds and the ticking of line 5 — counting becomes percussive.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Saints' pairs with the sibilant music: the lit windows are 'counted' like prayers — the sound makes reverence audible.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The poem thus hears the city the way its speaker sees it — every light a small, repeated sound.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Onomatopoeia 'tick tick tick', sibilance of 's' sounds. (b) Flowing departure lines give way to fragmented rain noise, then slow contemplation. (c) Sound makes counting and 'saints' audible — the city heard as prayer.",
            commonErrors: ["Listing devices without connecting the ticking rhythm to the rain and the counting motif."],
          },
        },
        {
          id: "langa-u1-sq15",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Shovel",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "The shovel bit the frost —\ncrack, a sound like green wood\nbreaking. Snow came up in clods,\nheavy as unpaid debts.",
          },
          stem: "Analyse the sound devices and their relationship to the poem's imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sound-meaning cohesion", statement: "Onomatopoeia and consonance can make an image audible as well as visible." },
            ],
            steps: [
              { reasoning: "'Crack' — onomatopoeia: the shovel's impact is rendered as a sound before it is a sight.", marks: 1, markCode: "M" },
              { reasoning: "'Bit the frost' — the plosive 'b' and 't' sounds make the contact feel blunt and forceful.", marks: 1, markCode: "M" },
              { reasoning: "'Green wood breaking' — the simile translates frost into timber; the 'crack' now echoes a living thing splitting.", marks: 1, markCode: "M" },
              { reasoning: "The consonance of 'clods', 'heavy', 'debts' gives the snow a weighted, falling sound.", marks: 1, markCode: "M" },
              { reasoning: "The 'unpaid debts' metaphor is given a percussive weight — the sound of the shovel becomes the sound of obligation.", marks: 1, markCode: "R" },
              { reasoning: "The extract thus makes labour audible: every image has a corresponding sound, so the reader shovels with their ears.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Onomatopoeic 'crack' and plosive consonants make the shovelling audible; the sound of breaking wood and 'unpaid debts' fuses labour with obligation.",
            commonErrors: ["Identifying 'crack' as onomatopoeia without tracing how the sound extends into the debt metaphor."],
          },
        },
        {
          id: "langa-u1-sq16",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The House at Night",
            author: "Written for Akademik Space",
            source: "Original poem",
            text: "I had\nalmost forgotten\nhow the house\nsounded at night.",
          },
          stem: "Analyse the effect of the poem's lineation and enjambment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Lineation and enjambment", statement: "Line breaks control breath and emphasis; enjambment suspends meaning across the break." },
            ],
            steps: [
              { reasoning: "Every line is short and end-stopped — the poem itself 'forgets' its own pace, mimicking the forgotten memory.", marks: 1, markCode: "M" },
              { reasoning: "The break after 'had' suspends 'almost forgotten' — the reader is made to wait, enacting the delay of recall.", marks: 1, markCode: "M" },
              { reasoning: "The final line 'sounded at night' lands alone — sound is restored as the poem's last word, as if hearing returns with the memory.", marks: 1, markCode: "M" },
              { reasoning: "The cumulative effect is a poem about remembering enacted through hesitation — form performs the content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Short end-stopped lines and a suspended first break enact the hesitation of remembering; the final 'sounded' restores hearing as the poem closes.",
            commonErrors: ["Describing line breaks without linking them to the poem's theme of forgotten sound."],
          },
        },
      ],
    },
  ],
};
