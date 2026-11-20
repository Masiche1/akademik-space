import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "music-u1-lesson-1-2",
  code: "1-2",
  title: "Performing with Technique and Expression",
  goal: "I CAN perform with technical control and expressive intention, using dynamics, articulation and phrasing.",
  standards: [
    "Performance",
    "Musicianship",
  ],
  vocabulary: [
    { term: "Dynamics", definition: "The volume of music — loudness or softness — indicated by Italian terms or symbols." },
    { term: "Articulation", definition: "How notes are attacked and released — legato, staccato, accent, tenuto." },
    { term: "Phrasing", definition: "The shaping of musical lines into coherent units, like sentences in speech." },
    { term: "Rubato", definition: "Expressive flexibility of tempo — slight speeding and slowing for emotional effect." },
    { term: "Timbre", definition: "The tonal quality or 'colour' of a sound, distinguishing instruments or voices." },
    { term: "Tone production", definition: "The physical technique used to produce sound on an instrument or voice." },
  ],
  concepts: [
    {
      id: "music-u1-expression",
      title: "Dynamics, articulation and phrasing",
      skill: "Use dynamics, articulation and phrasing to shape musical expression and communicate emotion.",
      lesson: {
        sections: [
          {
            heading: "Dynamics",
            body: "**Dynamics** control volume: p (piano) to pp (pianissimo) for softness; f (forte) to ff (fortissimo) for loudness; crescendo and diminuendo for gradual changes. Dynamics create contrast and shape — a piece that is always loud is exhausting; one that is always soft is boring. Dynamic contrast is the simplest expressive tool.",
          },
          {
            heading: "Articulation and phrasing",
            body: "**Articulation** describes how notes connect: legato (smooth, connected), staccato (short, detached), accent (emphasised), tenuto (full value). **Phrasing** groups notes into musical 'sentences' — breath points, climaxes and resolutions. Good phrasing makes music breathe; poor phrasing sounds mechanical.",
          },
          {
            heading: "Rubato and expression",
            body: "**Rubato** is expressive tempo flexibility — lingering on important notes, pushing forward through transitions. It requires control: too much sounds sloppy, too little sounds mechanical. Expression also comes from tone colour, vibrato (where appropriate) and the performer's personal communication of the music's emotion.",
          },
        ],
        keyFormulas: [
          { name: "Dynamic terms", statement: "pp, p, mp, mf, f, ff — crescendo and diminuendo for change" },
          { name: "Articulation", statement: "Legato = connected; staccato = detached; accent = emphasised" },
        ],
        workedExample: {
          problem: "A student plays a melody mechanically — every note the same volume and length. Suggest three expressive improvements.",
          solution: "Add dynamic shaping — crescendo toward the climax, diminuendo at the end; use legato on connected phrases and slight separation between phrases; apply gentle rubato — lingering on the highest note, pushing through transitions.",
        },
      },
      questions: [
        {
          id: "music-u1-expression-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The dynamic marking 'crescendo' indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Getting softer" },
              { id: "b", text: "Gradually getting louder" },
              { id: "c", text: "Playing faster" },
              { id: "d", text: "Stopping suddenly" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crescendo", statement: "A gradual increase in volume." },
            ],
            steps: [
              { reasoning: "Crescendo means a gradual increase in loudness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Gradually getting louder",
            commonErrors: [
              "Confusing crescendo (getting louder) with diminuendo (getting softer).",
            ],
          },
        },
        {
          id: "music-u1-expression-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between legato and staccato articulation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Articulation types", statement: "Legato connects notes smoothly; staccato detaches them." },
            ],
            steps: [
              { reasoning: "Legato plays notes smoothly connected, as if in one breath.", marks: 1, markCode: "M" },
              { reasoning: "Staccato plays notes short and detached, with space between.", marks: 1, markCode: "M" },
              { reasoning: "The choice affects character: legato = flowing, staccato = bouncy or playful.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Legato = connected; staccato = detached — each creates different character.",
            commonErrors: [
              "Using the terms interchangeably.",
            ],
          },
        },
        {
          id: "music-u1-expression-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how phrasing affects a listener's experience of music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Phrasing", statement: "Musical phrases shape expectations, tension and resolution like sentences." },
            ],
            steps: [
              { reasoning: "Phrasing groups notes into coherent units — beginnings, developments, resolutions.", marks: 1, markCode: "M" },
              { reasoning: "Breath points and phrase endings give the listener moments of rest and anticipation.", marks: 1, markCode: "M" },
              { reasoning: "Well-shaped phrases create emotional arc; mechanical playing ignores this structure.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: phrasing is how music communicates its grammar.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Phrasing creates structure, anticipation and emotional arc for the listener.",
            commonErrors: [
              "Playing notes without shaping them into phrases.",
            ],
          },
        },
        {
          id: "music-u1-expression-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "Performance analysis exercise",
            text: "A pianist performs a lyrical melody: the opening is very soft (pp), growing to a warm forte at the climax, then fading to a whisper. The melody is played legato throughout, with a gentle ritardando at the final cadence.",
          },
          stem: "Analyse a described performance for expressive qualities.",
          parts: [
            { label: "a", prompt: "Identify two expressive elements present.", marks: 2 },
            { label: "b", prompt: "Explain their effect on the listener.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expressive analysis", statement: "Dynamics, articulation and tempo shaping create emotional communication." },
            ],
            steps: [
              { part: "a", reasoning: "Dynamic arc (pp to f to pp), legato articulation, ritardando — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two expressive elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Dynamic growth creates emotional build; legato creates warmth; ritardando creates resolution and finality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could add slight rubato in the climax or clearer articulation contrast in the middle section.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Dynamics, legato, ritardando. (b) Emotional build and resolution. (c) Add rubato or articulation contrast.",
            commonErrors: [
              "Describing notes played rather than expressive choices made.",
            ],
          },
        },
        {
          id: "music-u1-expression-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The dynamic marking 'pianissimo' (pp) indicates playing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very loud" },
              { id: "b", text: "Very soft" },
              { id: "c", text: "At medium volume" },
              { id: "d", text: "With a sudden accent" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dynamic terms", statement: "pp = pianissimo (very soft); ff = fortissimo (very loud)." },
            ],
            steps: [
              { reasoning: "Pianissimo is the extreme of the soft dynamic range.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Very soft",
            commonErrors: [
              "Confusing p (piano, soft) with f (forte, loud).",
            ],
          },
        },
        {
          id: "music-u1-expression-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'diminuendo' marking tells the performer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gradually get louder" },
              { id: "b", text: "Gradually get softer" },
              { id: "c", text: "Play faster" },
              { id: "d", text: "Hold the note longer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Diminuendo", statement: "A gradual decrease in volume." },
            ],
            steps: [
              { reasoning: "Diminuendo is the Italian term for a gradual decrease in loudness.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Gradually get softer",
            commonErrors: [
              "Confusing diminuendo with crescendo.",
            ],
          },
        },
        {
          id: "music-u1-expression-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 'tenuto' articulation marking instructs the performer to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Play the note very short and detached" },
              { id: "b", text: "Hold the note for its full value with slight emphasis" },
              { id: "c", text: "Play the note as quietly as possible" },
              { id: "d", text: "Slide into the next note" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tenuto", statement: "Hold the note for its full notated value, often with slight weight." },
            ],
            steps: [
              { reasoning: "Tenuto means sustaining the full value of the note rather than shortening it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hold the note for its full value with slight emphasis",
            commonErrors: [
              "Confusing tenuto with staccato.",
            ],
          },
        },
        {
          id: "music-u1-expression-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Rubato' in performance refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strict adherence to the written tempo" },
              { id: "b", text: "Expressive flexibility of tempo within the music's pulse" },
              { id: "c", text: "A sudden loud accent on one note" },
              { id: "d", text: "Playing without any dynamics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rubato", statement: "Expressive tempo flexibility — lingering and pushing for emotional effect." },
            ],
            steps: [
              { reasoning: "Rubato is controlled tempo flexibility, not a change of the underlying pulse.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Expressive flexibility of tempo within the music's pulse",
            commonErrors: [
              "Confusing rubato with ritardando or a metronome change.",
            ],
          },
        },
        {
          id: "music-u1-expression-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Dynamic contrast is important in performance primarily because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Makes the piece easier to memorise" },
              { id: "b", text: "Creates shape, interest and emotional communication" },
              { id: "c", text: "Is required by the time signature" },
              { id: "d", text: "Only applies to loud instruments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dynamic contrast", statement: "Shaping volume creates emotional arc and prevents monotony." },
            ],
            steps: [
              { reasoning: "Dynamic contrast gives music shape and communicates emotion to the listener.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creates shape, interest and emotional communication",
            commonErrors: [
              "Thinking dynamics are only about volume, not expression.",
            ],
          },
        },
        {
          id: "music-u1-expression-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An accent marking above or below a note indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The note should be played very quietly" },
              { id: "b", text: "The note should be emphasised with a stronger attack" },
              { id: "c", text: "The note should be held longer than written" },
              { id: "d", text: "The note should be played faster" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Accent", statement: "A marking requesting emphasis on the attack of a note." },
            ],
            steps: [
              { reasoning: "An accent asks for a stronger, more prominent attack on the note.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The note should be emphasised with a stronger attack",
            commonErrors: [
              "Confusing accent with tenuto or dynamic marking.",
            ],
          },
        },
        {
          id: "music-u1-expression-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain the difference between mezzo-piano (mp) and mezzo-forte (mf), and suggest where each might be used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mezzo dynamics", statement: "Mezzo means 'halfway' — mp is moderately soft, mf moderately loud." },
            ],
            steps: [
              { reasoning: "Mezzo-piano is moderately soft — softer than mf but louder than p.", marks: 1, markCode: "M" },
              { reasoning: "Mezzo-forte is moderately loud — louder than mp but softer than f.", marks: 1, markCode: "M" },
              { reasoning: "mp suits intimate passages; mf suits confident melody lines without forcing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "mp = moderately soft; mf = moderately loud — each sits between the extremes of the dynamic range.",
            commonErrors: [
              "Treating mezzo markings as synonyms for p and f.",
            ],
          },
        },
        {
          id: "music-u1-expression-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a performer might use dynamics to shape the climax of a piece.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dynamic shaping", statement: "Gradual crescendo toward climax and controlled release after it." },
            ],
            steps: [
              { reasoning: "Begin the build quietly and increase volume gradually toward the climax.", marks: 1, markCode: "M" },
              { reasoning: "Peak at the climax with the strongest dynamic, often with added articulation emphasis.", marks: 1, markCode: "M" },
              { reasoning: "Release tension with diminuendo or ritardando after the peak.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the arc of dynamics mirrors the emotional arc of the music.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crescendo toward the climax, peak dynamically, then release with diminuendo.",
            commonErrors: [
              "Playing the climax at maximum volume with no build-up.",
            ],
          },
        },
        {
          id: "music-u1-expression-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what makes rubato expressive rather than sloppy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rubato control", statement: "Rubato requires an internal pulse so flexibility serves expression." },
            ],
            steps: [
              { reasoning: "Expressive rubato lingers on expressive notes and pushes through transitions while the pulse remains.", marks: 1, markCode: "M" },
              { reasoning: "The performer maintains an internal sense of beat so timing never collapses.", marks: 1, markCode: "M" },
              { reasoning: "Sloppy rubato loses the pulse entirely and sounds uncontrolled.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rubato is expressive when tempo flexibility is controlled by an underlying pulse.",
            commonErrors: [
              "Thinking any tempo fluctuation is rubato.",
            ],
          },
        },
        {
          id: "music-u1-expression-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A described performance: a singer begins a ballad at piano, swells to forte on the highest note, then fades to pianissimo. Analyse the dynamics.",
          parts: [
            { label: "a", prompt: "Identify the dynamic pattern used.", marks: 2 },
            { label: "b", prompt: "Explain the emotional effect of this pattern.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dynamic analysis", statement: "Volume changes create emotional build, climax and resolution." },
            ],
            steps: [
              { part: "a", reasoning: "The pattern is a dynamic arc: piano → forte → pianissimo, a clear crescendo-decrescendo shape.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The peak coincides with the highest note, emphasising the melodic climax.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The gradual build creates anticipation and rising tension.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The forte climax delivers emotional release at the melodic peak.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The fade to pianissimo creates intimacy and a sense of resolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Piano-forte-pianissimo arc peaking at the highest note. (b) Builds tension, releases at climax, resolves quietly.",
            commonErrors: [
              "Describing the notes rather than the dynamic shaping.",
            ],
          },
        },
        {
          id: "music-u1-expression-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a performer's interpretation of a lyrical melody.",
          parts: [
            { label: "a", prompt: "Identify two expressive strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement to the interpretation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating interpretation", statement: "Assess dynamic shaping, phrasing, articulation and emotional communication." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. clear dynamic arc, thoughtful phrasing with breath points.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no articulation contrast, rigid tempo with no rubato — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on expression.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest adding articulation variety or gentle rubato at the phrase peaks.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate interpretation by dynamics, phrasing, articulation and emotional arc.",
            commonErrors: [
              "Judging interpretation only by technical accuracy.",
            ],
          },
        },
        {
          id: "music-u1-expression-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how articulation choices change the character of a melody, using legato and staccato examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Articulation character", statement: "Legato creates flow and warmth; staccato creates bounce and lightness." },
            ],
            steps: [
              { reasoning: "Legato connects notes smoothly, producing a flowing, lyrical, singing quality.", marks: 1, markCode: "M" },
              { reasoning: "Staccato detaches notes, producing a bouncy, playful or martial character.", marks: 1, markCode: "M" },
              { reasoning: "The same pitches can express different emotions depending on articulation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: articulation is a primary expressive tool alongside dynamics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Legato = flowing warmth; staccato = bouncy lightness — articulation shapes melodic character.",
            commonErrors: [
              "Using one articulation throughout without expressive contrast.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u1-tone-technique",
      title: "Tone production and technique",
      skill: "Develop instrument-specific technique for tone quality, control and endurance in performance.",
      lesson: {
        sections: [
          {
            heading: "Tone production",
            body: "Good tone is the foundation of musical communication. On winds, tone depends on breath support, embouchure and air speed; on strings, on bow angle, pressure and sounding point; on keyboards, on touch and pedal use; on voice, on breath, resonance and vowel formation. Each instrument has its own technical pathway to beautiful sound.",
          },
          {
            heading: "Technique for control",
            body: "Technical exercises build the physical skills for performance: scales and arpeggios for finger/hand coordination; long tones for breath and sustain; articulation exercises for clarity. Practise slowly with attention to evenness — speed comes after control, not before.",
          },
          {
            heading: "Endurance and preparation",
            body: "Performance requires physical preparation: adequate rest, warm-up routines, hydration, and mental rehearsal. Know your instrument's demands — wind players need breath management; string players need callus care; vocalists need vocal rest. Physical preparation is part of musicianship.",
          },
        ],
        keyFormulas: [
          { name: "Tone factors", statement: "Breath/bow/touch + control = tone quality" },
          { name: "Practice principle", statement: "Slow control before speed; evenness before complexity" },
        ],
        workedExample: {
          problem: "A wind player produces a thin, airy tone. What technical factors should they check?",
          solution: "Check breath support — are they using diaphragm or shallow chest breathing? Check embouchure — is the mouthpiece position correct and relaxed? Check air speed — fast, focused air produces fuller tone than slow, diffuse air. Practise long tones to develop consistent breath support.",
        },
      },
      questions: [
        {
          id: "music-u1-tone-technique-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On wind instruments, tone quality is most directly affected by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the instrument" },
              { id: "b", text: "Breath support, embouchure and air speed" },
              { id: "c", text: "The sheet music used" },
              { id: "d", text: "The room's temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Wind tone production", statement: "Breath, embouchure and air control determine tone quality." },
            ],
            steps: [
              { reasoning: "Wind tone depends on breath support, embouchure and controlled air speed.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Breath support, embouchure and air speed",
            commonErrors: [
              "Attributing tone quality to external factors rather than technique.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two technical exercises that improve tone control on any instrument.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone exercises", statement: "Long tones and slow scales build control and evenness." },
            ],
            steps: [
              { reasoning: "Long tones — sustain single notes to develop breath/bow/touch consistency.", marks: 1, markCode: "M" },
              { reasoning: "Slow scales — practise evenness of tone across the instrument's range.", marks: 1, markCode: "M" },
              { reasoning: "Record and listen back to identify inconsistencies in tone quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Long tones and slow scales develop consistent, controlled tone.",
            commonErrors: [
              "Practising fast passages without first establishing tone control.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why slow, controlled practice is more effective than fast, rushed practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Practice quality", statement: "Slow practice builds correct technique; fast practice reinforces errors." },
            ],
            steps: [
              { reasoning: "Slow practice allows attention to technique — fingering, breath, articulation.", marks: 1, markCode: "M" },
              { reasoning: "Errors practised slowly are easier to correct than errors practised fast.", marks: 1, markCode: "M" },
              { reasoning: "The brain learns motor patterns more reliably at controlled speeds.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: speed is a byproduct of control, not a substitute for it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slow practice builds correct technique; fast practice risks embedding errors.",
            commonErrors: [
              "Practising fast to 'get through' material rather than learning it.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's practice routine for performance preparation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating practice", statement: "Assess structure, technique focus and performance preparation." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. regular practice, includes scales/technique, runs through pieces.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no slow practice, ignores weak sections, no performance simulation — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with practice effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding slow technical work, section-by-section practice, mock performances.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate practice by structure, technique focus and performance simulation.",
            commonErrors: [
              "Judging practice only by hours logged, not quality or structure.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On string instruments, tone quality is most directly affected by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the instrument's varnish" },
              { id: "b", text: "Bow angle, bow pressure and sounding point" },
              { id: "c", text: "The sheet music edition used" },
              { id: "d", text: "The audience's distance from the stage" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "String tone production", statement: "Bow technique — angle, pressure, speed, sounding point — controls tone." },
            ],
            steps: [
              { reasoning: "String tone depends on how the bow contacts the string.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Bow angle, bow pressure and sounding point",
            commonErrors: [
              "Attributing string tone to factors outside the player's control.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On keyboard instruments, the performer's touch most directly controls:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The pitch of the notes" },
              { id: "b", text: "Dynamics and tonal colour through attack and pedal use" },
              { id: "c", text: "The tuning of the instrument" },
              { id: "d", text: "The number of notes available" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Keyboard touch", statement: "Touch and pedalling control dynamics and colour on keyboards." },
            ],
            steps: [
              { reasoning: "Keyboard touch affects how loudly and brightly notes sound; the pedal affects sustain and blend.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Dynamics and tonal colour through attack and pedal use",
            commonErrors: [
              "Thinking keyboards have no expressive control like wind or strings.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A warm-up routine before performance primarily helps with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorising the piece faster" },
              { id: "b", text: "Physical readiness, injury prevention and mental focus" },
              { id: "c", text: "Changing the key of the piece" },
              { id: "d", text: "Making the instrument louder" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance preparation", statement: "Warm-ups prepare the body and mind for the demands of performance." },
            ],
            steps: [
              { reasoning: "Warming up prepares muscles, breath and focus for the physical demands of playing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Physical readiness, injury prevention and mental focus",
            commonErrors: [
              "Skipping warm-ups and risking strain or poor tone at the start.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Practising slowly with attention to evenness is important because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the only way to learn any piece" },
              { id: "b", text: "Builds control and correct technique before speed is added" },
              { id: "c", text: "Guarantees a perfect performance" },
              { id: "d", text: "Eliminates the need for scales" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Practice quality", statement: "Slow, even practice builds correct motor patterns; speed follows control." },
            ],
            steps: [
              { reasoning: "Slow practice lets the player monitor and correct technique, which speed then preserves.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Builds control and correct technique before speed is added",
            commonErrors: [
              "Rushing to tempo before establishing evenness and control.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For vocalists, good tone production depends most directly on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cost of the microphone used" },
              { id: "b", text: "Breath support, resonance and vowel formation" },
              { id: "c", text: "The composer's nationality" },
              { id: "d", text: "Wearing formal concert dress" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Vocal tone production", statement: "Breath, resonance and vowel shaping create vocal tone quality." },
            ],
            steps: [
              { reasoning: "Vocal tone is produced by breath support, resonance placement and vowel formation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Breath support, resonance and vowel formation",
            commonErrors: [
              "Thinking vocal tone is unrelated to physical technique.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Physical endurance for performance is best supported by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Practising for many hours without rest" },
              { id: "b", text: "Adequate rest, hydration, warm-ups and vocal/instrument care" },
              { id: "c", text: "Avoiding all physical activity before performing" },
              { id: "d", text: "Eating a heavy meal right before the concert" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Physical preparation", statement: "Rest, hydration and warm-up sustain performance stamina and prevent injury." },
            ],
            steps: [
              { reasoning: "Endurance comes from rest and recovery plus proper physical preparation, not over-practice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adequate rest, hydration, warm-ups and vocal/instrument care",
            commonErrors: [
              "Believing more practice hours always means better endurance.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two elements of tone production on your chosen instrument and explain what each controls.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tone production elements", statement: "Each instrument family has specific physical controls for tone quality." },
            ],
            steps: [
              { reasoning: "Element 1 correctly identified, e.g. breath support on winds, bow pressure on strings, touch on keyboards, breath on voice.", marks: 1, markCode: "M" },
              { reasoning: "Element 2 correctly identified for the same instrument.", marks: 1, markCode: "M" },
              { reasoning: "Each element's role in controlling tone quality explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two valid elements (e.g. breath + embouchure on winds) with their tonal effects.",
            commonErrors: [
              "Naming elements that do not apply to the chosen instrument.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe a warm-up routine suitable for your instrument before a performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Warm-up design", statement: "Warm-ups should gradually activate the body and instrument at low intensity." },
            ],
            steps: [
              { reasoning: "Begin with gentle physical stretches or breathing exercises to activate the body.", marks: 1, markCode: "M" },
              { reasoning: "Play slow, simple material — long tones, gentle scales — to wake up tone production.", marks: 1, markCode: "M" },
              { reasoning: "Gradually increase range and complexity without straining.", marks: 1, markCode: "R" },
              { reasoning: "Finish with a few minutes of mental focus or silent rehearsal of the opening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gentle physical activation → slow tonal work → gradual range → mental preparation.",
            commonErrors: [
              "Warming up with difficult repertoire or at performance intensity.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why hydration and rest are especially important for wind players.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Wind player physiology", statement: "Wind playing depends on breath support and mucous membrane health." },
            ],
            steps: [
              { reasoning: "Wind players rely on controlled breath; dehydration thickens mucus and reduces airflow.", marks: 1, markCode: "M" },
              { reasoning: "Fatigue reduces breath support, causing tone to weaken or become airy.", marks: 1, markCode: "M" },
              { reasoning: "Rest allows recovery of breath capacity and prevents strain-related injury.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hydration and rest sustain breath support and protect the respiratory system wind playing depends on.",
            commonErrors: [
              "Thinking only vocalists need to manage breath and hydration.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A string player produces a scratchy, uneven tone in the upper register. Analyse the likely technical causes.",
          parts: [
            { label: "a", prompt: "Identify two likely technical causes.", marks: 2 },
            { label: "b", prompt: "Suggest two practice strategies to improve the tone.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tone diagnosis", statement: "Scratchy tone usually comes from bow technique — pressure, speed, angle or sounding point." },
            ],
            steps: [
              { part: "a", reasoning: "Likely causes: too much bow pressure, bow held too close to the bridge, or insufficient bow speed.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Another cause: tense shoulder/arm preventing smooth bow control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Practise long tones at moderate dynamic to develop even bow control.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Record and compare tone across registers to identify inconsistency.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Check shoulder relaxation and experiment with sounding point closer to the fingerboard.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Excess pressure, poor sounding point, tension, insufficient speed. (b) Long tones, recording comparison, relaxation checks.",
            commonErrors: [
              "Assuming the problem is the instrument rather than technique.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's weekly practice routine for an upcoming performance.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest one structural improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating practice", statement: "Assess balance of technique, repertoire work and performance simulation." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. regular daily practice, includes scales and technical work.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. always at full tempo, only practises beginnings of pieces, no run-throughs — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with its effect on performance readiness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest scheduling slow technical work, section-by-section practice and weekly full run-throughs.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete structural improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate practice by technique balance, tempo variety and performance simulation.",
            commonErrors: [
              "Judging routine only by total hours, not how time is used.",
            ],
          },
        },
        {
          id: "music-u1-tone-technique-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how pedal use affects tone on keyboard instruments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Keyboard pedalling", statement: "The sustain pedal extends note length and blends harmonies; half-pedalling colours tone." },
            ],
            steps: [
              { reasoning: "The sustain pedal lets notes ring beyond their written length, creating connection.", marks: 1, markCode: "M" },
              { reasoning: "Blending through the pedal enriches harmonic colour and legato effect.", marks: 1, markCode: "M" },
              { reasoning: "Over-pedalling can blur harmonies and create muddy sound.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: pedal use is an expressive tone-colouring tool requiring control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pedal sustains and blends notes for richer colour, but overuse muddies the harmony.",
            commonErrors: [
              "Leaving the pedal down continuously without changing harmonies.",
            ],
          },
        },
      ],
    },
  ],
};
