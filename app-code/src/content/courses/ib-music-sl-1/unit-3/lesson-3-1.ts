import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "music-u3-lesson-3-1",
  code: "3-1",
  title: "Compositional Elements and Structure",
  goal: "I CAN identify and apply the core elements of composition — melody, harmony, rhythm, form — to create coherent musical works.",
  standards: [
    "Composition",
    "Musicianship",
  ],
  vocabulary: [
    { term: "Melody", definition: "A sequence of pitches perceived as a single line — the tune." },
    { term: "Harmony", definition: "The combination of pitches sounding simultaneously — chords and their progression." },
    { term: "Rhythm", definition: "The organisation of sounds in time — duration, accent and pattern." },
    { term: "Form", definition: "The structure of a piece — how sections are organised and repeated." },
    { term: "Texture", definition: "The relationship between melodic lines — monophonic, homophonic, polyphonic." },
    { term: "Motif", definition: "A short musical idea that recurs and unifies a composition." },
  ],
  concepts: [
    {
      id: "music-u3-composition-elements",
      title: "Core compositional elements",
      skill: "Identify and apply melody, harmony, rhythm and form to create coherent musical works.",
      lesson: {
        sections: [
          {
            heading: "Melody, harmony, rhythm",
            body: "**Melody** is the primary line — memorable, singable, shaped by contour (up/down) and rhythm. **Harmony** supports it — chords that colour and propel the melody. **Rhythm** organises time — patterns that create momentum or stillness. These three elements interact: melody rides on harmony, rhythm drives both.",
          },
          {
            heading: "Texture and form",
            body: "**Texture** describes how lines relate: monophonic (one line), homophonic (melody with accompaniment), polyphonic (independent lines). **Form** structures the whole: binary (A-B), ternary (A-B-A), rondo (A-B-A-C-A), through-composed (no repetition). Form gives the listener a map — expectation and resolution.",
          },
          {
            heading: "Motif and unity",
            body: "A **motif** is a short idea — three or four notes — that recurs throughout a piece, creating unity. Composers develop motifs through variation: transposition, inversion, augmentation, fragmentation. The best compositions feel both unified (motif returns) and varied (each return is different).",
          },
        ],
        keyFormulas: [
          { name: "Elements", statement: "Melody + harmony + rhythm = musical substance" },
          { name: "Texture types", statement: "Monophonic = one line; homophonic = melody+accompaniment; polyphonic = independent lines" },
          { name: "Common forms", statement: "Binary A-B, ternary A-B-A, rondo A-B-A-C-A" },
        ],
        workedExample: {
          problem: "A piece has a trumpet melody with piano chords underneath and no other lines. What texture?",
          solution: "Homophonic — a single melody (trumpet) with harmonic accompaniment (piano chords). Monophonic would be melody alone; polyphonic would have multiple independent melodies.",
        },
      },
      questions: [
        {
          id: "music-u3-composition-elements-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Homophonic texture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Multiple independent melodies" },
              { id: "b", text: "A single melody with chordal accompaniment" },
              { id: "c", text: "A single unaccompanied melody" },
              { id: "d", text: "Only rhythm without pitch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homophonic texture", statement: "Melody with chordal accompaniment — the most common texture." },
            ],
            steps: [
              { reasoning: "Homophonic texture features a melody line supported by chordal accompaniment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A single melody with chordal accompaniment",
            commonErrors: [
              "Confusing homophonic (melody+accompaniment) with polyphonic (independent lines).",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the roles of melody, harmony and rhythm in a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Element roles", statement: "Melody carries the tune; harmony supports and colours; rhythm organises time." },
            ],
            steps: [
              { reasoning: "Melody provides the primary line — the memorable tune.", marks: 1, markCode: "M" },
              { reasoning: "Harmony supports with chords — colours and propels the melody.", marks: 1, markCode: "M" },
              { reasoning: "Rhythm organises time — creates momentum, stillness or drive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Melody = tune; harmony = support; rhythm = time organisation.",
            commonErrors: [
              "Treating elements as separate rather than interacting.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how form gives structure and meaning to a musical composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Musical form", statement: "Form creates expectation, development and resolution for the listener." },
            ],
            steps: [
              { reasoning: "Form organises sections — A-B-A tells the listener what to expect.", marks: 1, markCode: "M" },
              { reasoning: "Repetition creates familiarity; contrast creates interest; return creates resolution.", marks: 1, markCode: "M" },
              { reasoning: "Without form, music is a stream without shape — listeners need structure to follow.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: form is the architecture that makes music comprehensible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form provides structure through repetition, contrast and resolution.",
            commonErrors: [
              "Composing without considering how sections relate to each other.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described composition",
            author: "Written for Akademik Space",
            source: "Composition analysis exercise",
            text: "A piece for solo flute and piano: the flute plays a lyrical melody while the piano provides chordal accompaniment. The piece has three sections — statement, contrasting middle section, return of the opening — with the melody recurring but slightly varied each time.",
          },
          stem: "Analyse the composition of a described piece.",
          parts: [
            { label: "a", prompt: "Identify the texture used.", marks: 2 },
            { label: "b", prompt: "Identify the likely form.", marks: 2 },
            { label: "c", prompt: "Evaluate how the elements work together.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Element analysis", statement: "Texture, form and motif interaction create coherent composition." },
            ],
            steps: [
              { part: "a", reasoning: "Homophonic texture — flute melody with piano chordal accompaniment.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Texture correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Ternary form A-B-A — statement, contrast, return.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Form correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Melody carries emotional line; harmony supports; form provides structure; motif variation creates unity with interest.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Element interaction evaluated convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Homophonic. (b) Ternary A-B-A. (c) Elements interact to create coherent, unified composition.",
            commonErrors: [
              "Identifying elements without analysing their interaction.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Ternary form is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A-B structure with two contrasting sections" },
              { id: "b", text: "A-B-A structure with a return of the opening" },
              { id: "c", text: "Continuous music with no repeated sections" },
              { id: "d", text: "A series of unrelated episodes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ternary form", statement: "Three-part structure A-B-A with a return of the opening material." },
            ],
            steps: [
              { reasoning: "Ternary form has three sections: statement (A), contrast (B), return (A).", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A-B-A structure with a return of the opening",
            commonErrors: [
              "Confusing ternary (A-B-A) with binary (A-B) form.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A motif is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A short musical idea that recurs and unifies a composition" },
              { id: "b", text: "The loudest section of a piece" },
              { id: "c", text: "A complete three-minute song" },
              { id: "d", text: "A chord progression that never changes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motif", statement: "A short musical idea — often three or four notes — that recurs throughout a piece." },
            ],
            steps: [
              { reasoning: "A motif is a short, recurring idea that provides unity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A short musical idea that recurs and unifies a composition",
            commonErrors: [
              "Confusing a motif (short idea) with a theme (longer, more developed idea).",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A choir sings a single melody in unison with no accompaniment. This texture is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homophonic" },
              { id: "b", text: "Polyphonic" },
              { id: "c", text: "Monophonic" },
              { id: "d", text: "Heterophonic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Monophonic texture", statement: "A single melodic line with no harmony or accompaniment." },
            ],
            steps: [
              { reasoning: "Unison singing of one melody is a single line — monophonic texture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Monophonic",
            commonErrors: [
              "Assuming multiple singers automatically creates polyphony — texture depends on independent lines, not headcount.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how melodic contour affects the character of a melody.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic contour", statement: "The shape of a melody — rising, falling or arching — shapes its emotional character." },
            ],
            steps: [
              { reasoning: "Rising contours tend to build energy, aspiration or tension.", marks: 1, markCode: "M" },
              { reasoning: "Falling contours tend to release tension or suggest resolution and calm.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: contour gives melody its expressive shape and direction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contour shapes character — rising builds tension, falling resolves.",
            commonErrors: [
              "Describing pitch range instead of the direction/shape of the line.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a composer might use binary form in a short piece.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Binary form", statement: "A two-part structure (A-B) contrasting two ideas — often with each section repeated." },
            ],
            steps: [
              { reasoning: "Section A presents the main idea; section B provides contrast — new key, rhythm or mood.", marks: 1, markCode: "M" },
              { reasoning: "The contrast gives the listener two distinct ideas to compare.", marks: 1, markCode: "M" },
              { reasoning: "Binary form suits short pieces where simplicity and clarity are needed.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: binary form provides structure through contrast rather than return.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Binary form contrasts two sections (A-B) — simple structure for short pieces.",
            commonErrors: [
              "Confusing binary form (A-B) with ternary form (A-B-A).",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rondo form is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A-B-A structure" },
              { id: "b", text: "A-B-A-C-A structure with a recurring main section" },
              { id: "c", text: "A single unbroken section" },
              { id: "d", text: "Random ordering of sections" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rondo form", statement: "A recurring main theme (A) alternates with contrasting episodes (B, C, D...)." },
            ],
            steps: [
              { reasoning: "Rondo alternates a main theme with contrasting episodes — e.g. A-B-A-C-A.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A-B-A-C-A structure with a recurring main section",
            commonErrors: [
              "Confusing rondo with ternary — rondo has more than one contrasting episode.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways rhythm can create momentum in a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythmic momentum", statement: "Regular pulse, forward-moving patterns and increasing density drive music forward." },
            ],
            steps: [
              { reasoning: "A steady, driving pulse gives the listener a sense of forward motion.", marks: 1, markCode: "M" },
              { reasoning: "Repeated or accelerating rhythmic patterns build anticipation and energy.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: rhythm organises time and propels the music toward goals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Steady pulse and driving patterns create rhythmic momentum.",
            commonErrors: [
              "Describing melody or harmony rather than specifically rhythmic devices.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Polyphonic texture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A melody with chordal accompaniment" },
              { id: "b", text: "Multiple independent melodic lines sounding simultaneously" },
              { id: "c", text: "A single unaccompanied melody" },
              { id: "d", text: "Rhythm without pitched melody" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polyphonic texture", statement: "Two or more independent melodic lines sounding at the same time." },
            ],
            steps: [
              { reasoning: "Polyphony requires independent melodic lines — counterpoint, not just chords under a tune.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Multiple independent melodic lines sounding simultaneously",
            commonErrors: [
              "Confusing polyphony (independent lines) with homophony (melody plus accompaniment).",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how musical form creates expectation and resolution for the listener.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form and expectation", statement: "Recognisable structures let listeners predict and anticipate musical events." },
            ],
            steps: [
              { reasoning: "Familiar patterns (e.g. A-B-A) set up expectations about what comes next.", marks: 1, markCode: "M" },
              { reasoning: "Contrast and development create tension; the return of familiar material resolves it.", marks: 1, markCode: "M" },
              { reasoning: "Through-composed or unpredictable music denies expectation — can intrigue but may disorient.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: form gives listeners a map that makes music comprehensible and satisfying.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form creates expectation through recognisable patterns and resolution through return.",
            commonErrors: [
              "Describing form as decoration rather than a structural function for the listener.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Through-composed form means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Music built from repeated sections" },
              { id: "b", text: "Music that flows continuously without repeated sections" },
              { id: "c", text: "A piece with three distinct parts" },
              { id: "d", text: "Music written quickly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Through-composed form", statement: "Continuous music in which material is not repeated as whole sections." },
            ],
            steps: [
              { reasoning: "Through-composed music develops continuously without returning to earlier sections.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Music that flows continuously without repeated sections",
            commonErrors: [
              "Confusing through-composed (no section repetition) with ternary or rondo.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a composer could create contrast within a piece that otherwise maintains unity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unity and contrast", statement: "Shared motifs maintain unity while changes in key, texture, dynamics or register create contrast." },
            ],
            steps: [
              { reasoning: "Keep a recurring motif or rhythmic figure as a unifying thread.", marks: 1, markCode: "M" },
              { reasoning: "Contrast can come from dynamics, register, texture, tempo or harmony.", marks: 1, markCode: "M" },
              { reasoning: "The listener recognises the motif while noticing meaningful differences.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: contrast within unity keeps music interesting without losing coherence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recurring motif plus changes in texture/dynamics/key create contrast within unity.",
            commonErrors: [
              "Changing so much that the piece loses its unifying thread.",
            ],
          },
        },
        {
          id: "music-u3-composition-elements-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A piece for solo cello has three sections: a calm opening (A), an agitated middle section (B), and a return of the calm opening with fuller writing (A').",
          parts: [
            { label: "a", prompt: "Identify the likely form.", marks: 2 },
            { label: "b", prompt: "Explain the role of the returning section.", marks: 2 },
            { label: "c", prompt: "Evaluate how unity and variety are balanced.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form analysis", statement: "Recognise section patterns and evaluate their structural function." },
            ],
            steps: [
              { part: "a", reasoning: "Ternary form A-B-A — calm, contrast, return.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Form correctly identified with section labels.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The return provides resolution and familiarity after contrast.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Role explained in terms of listener expectation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Calm/agitated contrast supplies variety; the return supplies unity — balanced effectively.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluation links form to unity-variety balance convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ternary A-B-A. (b) Return resolves contrast and restores familiarity. (c) Contrast + return balance unity and variety.",
            commonErrors: [
              "Identifying the form without explaining its effect on the listener.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u3-motif-development",
      title: "Melodic, harmonic and rhythmic development",
      skill: "Develop musical ideas through variation, transposition, inversion and rhythmic transformation.",
      lesson: {
        sections: [
          {
            heading: "Developing a motif",
            body: "A motif is a seed — the composer's job is to grow it. Techniques: **transposition** (move to different pitch), **inversion** (flip intervals upside down), **augmentation** (longer note values), **diminution** (shorter values), **fragmentation** (use part of the motif), **sequence** (repeat at different pitch levels). Each transformation reveals new aspects of the idea.",
          },
          {
            heading: "Melodic development",
            body: "Melodies develop through contour changes: rising sequences build tension; falling sequences resolve; sequences at different pitch levels create momentum. Add ornamentation for decoration, or simplify for clarity. A melody that never changes is boring; one that never repeats is incoherent — balance is key.",
          },
          {
            heading: "Harmonic and rhythmic development",
            body: "Harmonic development: change chord progressions to shift mood — major to minor, consonant to dissonant, stable to unstable. Rhythmic development: augment or diminish note values, add syncopation, change metre feel. These transformations keep music interesting while maintaining unity through the motif.",
          },
        ],
        keyFormulas: [
          { name: "Development techniques", statement: "Transposition + inversion + augmentation + diminution + fragmentation + sequence" },
          { name: "Development principle", statement: "Transform the motif enough to be interesting, enough to stay recognisable" },
        ],
        workedExample: {
          problem: "A composer has a four-note motif and wants to develop it for a second section. Suggest three transformations.",
          solution: "Transpose it up a third for a brighter feel; invert the intervals for a darker character; augment the note values to slow it down and create weight. Each preserves the motif's identity while changing its emotional colour.",
        },
      },
      questions: [
        {
          id: "music-u3-motif-development-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Augmentation in music means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making notes louder" },
              { id: "b", text: "Lengthening note values" },
              { id: "c", text: "Adding more instruments" },
              { id: "d", text: "Changing the key" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Augmentation", statement: "Lengthening the note values of a motif or theme." },
            ],
            steps: [
              { reasoning: "Augmentation lengthens note values — the same pitches in slower rhythm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Lengthening note values",
            commonErrors: [
              "Confusing augmentation (longer values) with diminution (shorter values).",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three techniques for developing a musical motif.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Motif development", statement: "Transposition, inversion, augmentation and sequence transform motifs." },
            ],
            steps: [
              { reasoning: "Transposition — move the motif to a different pitch level.", marks: 1, markCode: "M" },
              { reasoning: "Inversion — flip the intervals upside down.", marks: 1, markCode: "M" },
              { reasoning: "Augmentation/diminution — lengthen or shorten note values; or sequence — repeat at different pitches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transposition, inversion, augmentation/diminution and sequence develop motifs.",
            commonErrors: [
              "Repeating the motif identically without transformation.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a composition needs both unity and variety.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Unity and variety", statement: "Motif provides unity; transformation provides variety — balance is essential." },
            ],
            steps: [
              { reasoning: "Unity (recurring motif) gives the listener a thread to follow.", marks: 1, markCode: "M" },
              { reasoning: "Variety (transformations, contrasts) prevents boredom and maintains interest.", marks: 1, markCode: "M" },
              { reasoning: "Too much unity = predictable; too much variety = incoherent.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the art is balancing recognition with surprise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Unity provides coherence; variety provides interest — both are needed.",
            commonErrors: [
              "Composing with either constant repetition or constant novelty.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a composer's approach to developing a motif.",
          parts: [
            { label: "a", prompt: "Identify two development techniques used.", marks: 2 },
            { label: "b", prompt: "Explain their effect on the music.", marks: 2 },
            { label: "c", prompt: "Suggest one additional development.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating development", statement: "Assess whether transformations maintain unity while adding variety." },
            ],
            steps: [
              { part: "a", reasoning: "Two techniques identified, e.g. transposition, inversion, augmentation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Techniques correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effects explained — e.g. transposition brightens, augmentation adds weight.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One additional technique suggested with rationale.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete suggestion with reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate development by technique variety and unity-variety balance.",
            commonErrors: [
              "Identifying techniques without explaining their musical effect.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Inversion of a melodic motif means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Moving it to a higher pitch" },
              { id: "b", text: "Reversing the direction of its intervals" },
              { id: "c", text: "Making the notes longer" },
              { id: "d", text: "Repeating only part of it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inversion", statement: "Reversing a motif's interval direction — rising becomes falling and vice versa." },
            ],
            steps: [
              { reasoning: "Inversion flips the intervals upside down while preserving their size.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reversing the direction of its intervals",
            commonErrors: [
              "Confusing inversion (interval reversal) with retrograde (rhythmic/melodic reversal).",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Diminution of a musical idea means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lengthening its note values" },
              { id: "b", text: "Shortening its note values" },
              { id: "c", text: "Making it louder" },
              { id: "d", text: "Removing its harmony" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diminution", statement: "Shortening the note values of a motif while keeping its pitches." },
            ],
            steps: [
              { reasoning: "Diminution halves (or shortens) note values — the opposite of augmentation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shortening its note values",
            commonErrors: [
              "Confusing diminution (shorter values) with augmentation (longer values).",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fragmentation as a development technique involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using only part of a motif or theme" },
              { id: "b", text: "Adding a new harmony" },
              { id: "c", text: "Playing the motif faster" },
              { id: "d", text: "Combining two different motifs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fragmentation", statement: "Developing material by using only a portion of the motif." },
            ],
            steps: [
              { reasoning: "Fragmentation isolates part of a motif — e.g. just its first three notes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Using only part of a motif or theme",
            commonErrors: [
              "Confusing fragmentation with sequence or transposition.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how augmentation changes the character of a motif.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Augmentation", statement: "Lengthening note values slows the motif and adds weight or gravity." },
            ],
            steps: [
              { reasoning: "Augmentation lengthens each note value while keeping pitches the same.", marks: 1, markCode: "M" },
              { reasoning: "The slower pace adds weight, solemnity or emphasis.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: augmentation transforms energy while preserving identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Augmentation slows the motif, adding weight and solemnity.",
            commonErrors: [
              "Describing augmentation as a pitch change rather than a rhythmic one.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A sequence repeats a motif:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the same pitch level" },
              { id: "b", text: "At different pitch levels" },
              { id: "c", text: "With completely new notes" },
              { id: "d", text: "Only in the bass" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sequence", statement: "Repeating a motif or phrase at a different pitch level." },
            ],
            steps: [
              { reasoning: "A sequence repeats the same intervals starting on a new pitch.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** At different pitch levels",
            commonErrors: [
              "Confusing sequence with plain repetition at the same pitch.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Transposing a motif means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reversing its intervals" },
              { id: "b", text: "Moving it to a different pitch level unchanged" },
              { id: "c", text: "Lengthening its notes" },
              { id: "d", text: "Deleting some of its notes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transposition", statement: "Shifting a motif up or down by a fixed interval without changing its shape." },
            ],
            steps: [
              { reasoning: "Transposition moves the whole motif to a new pitch level, preserving intervals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Moving it to a different pitch level unchanged",
            commonErrors: [
              "Confusing transposition with inversion — transposition keeps intervals in the same direction.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two ways a composer can develop a motif while keeping it recognisable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recognisable development", statement: "Transformations should change the motif enough to interest but not so much it is unrecognisable." },
            ],
            steps: [
              { reasoning: "Transposition or inversion preserves the motif's identity while changing its colour.", marks: 1, markCode: "M" },
              { reasoning: "Augmentation or diminution changes its pace and weight.", marks: 1, markCode: "M" },
              { reasoning: "Each keeps the core intervals or rhythm that make the motif identifiable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: good development balances change with recognisability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transposition, inversion, augmentation or diminution develop while preserving identity.",
            commonErrors: [
              "Changing the motif so drastically it becomes a new idea.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between developing a motif and merely repeating it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Development vs repetition", statement: "Repetition restates material identically; development transforms it." },
            ],
            steps: [
              { reasoning: "Repetition presents the motif unchanged — it reinforces but does not progress.", marks: 1, markCode: "M" },
              { reasoning: "Development applies transformations — transposition, inversion, augmentation, fragmentation.", marks: 1, markCode: "M" },
              { reasoning: "Development reveals new aspects of the idea; repetition only confirms it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: a piece needs both — repetition for unity, development for interest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Repetition restates; development transforms the motif through variation techniques.",
            commonErrors: [
              "Assuming any second appearance of a motif counts as development.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which technique changes a motif's pitch level without altering its intervals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inversion" },
              { id: "b", text: "Augmentation" },
              { id: "c", text: "Transposition" },
              { id: "d", text: "Fragmentation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transposition", statement: "Moving a motif to a new pitch level while keeping its intervals intact." },
            ],
            steps: [
              { reasoning: "Transposition shifts pitch level; intervals and rhythm stay the same.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Transposition",
            commonErrors: [
              "Confusing transposition (pitch shift) with inversion (interval reversal).",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A composer takes a four-note rising motif and wants to develop it across a piece.",
          parts: [
            { label: "a", prompt: "Suggest two different development techniques.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each on the music.", marks: 2 },
            { label: "c", prompt: "Justify why the motif should remain recognisable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Motif development planning", statement: "Choose transformations that vary the motif while preserving its identity." },
            ],
            steps: [
              { part: "a", reasoning: "Two valid techniques, e.g. transposition up a third, inversion, augmentation, fragmentation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Techniques named correctly.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effects explained, e.g. transposition brightens; augmentation adds weight; inversion darkens.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each effect convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Recognisability gives the listener a unifying thread through the piece.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Justification links identity to unity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two techniques suggested. (b) Effects explained. (c) Recognisability provides unity.",
            commonErrors: [
              "Suggesting transformations that destroy the motif's identity.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how combining several development techniques can create a more complex result than using one alone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined development", statement: "Layering transformations (e.g. augment then invert) multiplies variety while keeping unity." },
            ],
            steps: [
              { reasoning: "Each technique changes one dimension — pitch, rhythm, interval direction.", marks: 1, markCode: "M" },
              { reasoning: "Combining them changes several dimensions at once, increasing variety.", marks: 1, markCode: "M" },
              { reasoning: "As long as the core identity survives, complexity grows without losing unity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: layered development is a powerful tool for climax sections.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combining transformations increases variety while the motif's core preserves unity.",
            commonErrors: [
              "Assuming more techniques always means better — over-transformation can obscure the motif.",
            ],
          },
        },
        {
          id: "music-u3-motif-development-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "A student repeats a motif identically four times. Suggest and justify three ways to improve the passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Improving repetition", statement: "Replace some identical repetitions with developed versions to add interest." },
            ],
            steps: [
              { reasoning: "Transpose the motif on one repetition to shift register and colour.", marks: 1, markCode: "M" },
              { reasoning: "Augment or diminish the motif on another to change its pace and weight.", marks: 1, markCode: "M" },
              { reasoning: "Fragment or invert it to reveal new aspects of the idea.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: varied repetitions keep unity while preventing monotony.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transpose, augment/diminish and fragment/invert repetitions for variety.",
            commonErrors: [
              "Recommending removal of the motif entirely, losing unity.",
            ],
          },
        },
      ],
    },
  ],
};
