import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "music-u3-lesson-3-2",
  code: "3-2",
  title: "Melodic, Harmonic and Rhythmic Development",
  goal: "I CAN develop melodies, harmonies and rhythms through systematic variation and combination.",
  standards: [
    "Composition",
    "Analysis",
  ],
  vocabulary: [
    { term: "Sequence", definition: "Repeating a motif or phrase at a different pitch level." },
    { term: "Inversion", definition: "Reversing the interval direction — up becomes down and vice versa." },
    { term: "Fragmentation", definition: "Using only part of a motif or theme." },
    { term: "Augmentation", definition: "Lengthening note values of a musical idea." },
    { term: "Diminution", definition: "Shortening note values of a musical idea." },
    { term: "Rhythmic displacement", definition: "Shifting a rhythmic pattern to start on a different beat." },
  ],
  concepts: [
    {
      id: "music-u3-melodic-harmonic",
      title: "Melodic and harmonic development",
      skill: "Develop melodic and harmonic material through sequences, inversions and harmonic variation.",
      lesson: {
        sections: [
          {
            heading: "Melodic sequences",
            body: "A **sequence** repeats a melodic idea at different pitch levels — up a step, up a third, down a fifth. Sequences create momentum and development: each repetition is recognisable but fresh. Classical composers used sequences constantly; they remain the most powerful melodic development tool.",
          },
          {
            heading: "Harmonic development",
            body: "Harmony develops through **progression** — moving through chord sequences that create tension and release. Changing key (modulation) shifts the emotional colour. Cadences — chord progressions that signal endings — provide structure: authentic cadences (V-I) sound final; plagal cadences (IV-I) sound gentle or 'amen'-like.",
          },
          {
            heading: "Combining melody and harmony",
            body: "The strongest compositions integrate melodic and harmonic development: melody sequences over shifting harmonies create complexity; harmonic rhythm (rate of chord change) affects pace — fast harmonic rhythm = urgency; slow = stability. Melodic peaks often coincide with harmonic climaxes for maximum effect.",
          },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "Repeat motif at different pitch = melodic development" },
          { name: "Cadence types", statement: "Authentic V-I = final; Plagal IV-I = gentle/amen" },
        ],
        workedExample: {
          problem: "A melody repeats its opening phrase up a step, then up another step. What technique is this and what effect?",
          solution: "This is a sequence — repeating at different pitch levels. The upward sequence creates rising tension and momentum, driving the melody toward a climax. Each repetition is recognisable but builds anticipation.",
        },
      },
      questions: [
        {
          id: "music-u3-melodic-harmonic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A sequence in music is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating a motif at a different pitch level" },
              { id: "b", text: "Adding more instruments" },
              { id: "c", text: "Playing notes faster" },
              { id: "d", text: "Changing the time signature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sequence", statement: "Repeating a melodic idea at different pitch levels." },
            ],
            steps: [
              { reasoning: "A sequence repeats a motif at different pitch levels, creating development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Repeating a motif at a different pitch level",
            commonErrors: [
              "Confusing sequence (pitch repetition) with augmentation (rhythmic lengthening).",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways harmony can develop within a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Harmonic development", statement: "Chord progressions and modulation shift emotional colour and structure." },
            ],
            steps: [
              { reasoning: "Chord progression — moving through sequences that create tension and release.", marks: 1, markCode: "M" },
              { reasoning: "Modulation — changing key to shift mood or mark a new section.", marks: 1, markCode: "M" },
              { reasoning: "Cadences — chord patterns that signal endings or transitions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Progressions, modulations and cadences develop harmony.",
            commonErrors: [
              "Keeping the same chords throughout without development.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how harmonic rhythm affects the pace and energy of music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Harmonic rhythm", statement: "Fast chord changes create urgency; slow changes create stability." },
            ],
            steps: [
              { reasoning: "Fast harmonic rhythm (chords changing every beat or less) creates urgency and motion.", marks: 1, markCode: "M" },
              { reasoning: "Slow harmonic rhythm (chords lasting bars) creates stability and contemplation.", marks: 1, markCode: "M" },
              { reasoning: "Changing harmonic rhythm within a piece creates dynamic contrast and shape.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: harmonic rhythm is a subtle but powerful pacing tool.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Harmonic rhythm controls pace — fast = urgency, slow = stability.",
            commonErrors: [
              "Ignoring harmonic rhythm as a compositional tool.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical passage",
            author: "Written for Akademik Space",
            source: "Development analysis exercise",
            text: "A four-bar melody is repeated up a step (sequence), then the harmony shifts from major to minor for the second statement. The chord changes accelerate from one per bar to two per bar in the final bars.",
          },
          stem: "Analyse the melodic and harmonic development in a described passage.",
          parts: [
            { label: "a", prompt: "Identify the melodic development technique used.", marks: 2 },
            { label: "b", prompt: "Identify the harmonic development.", marks: 2 },
            { label: "c", prompt: "Evaluate how they work together.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic-harmonic interaction", statement: "Melodic sequences and harmonic shifts combine for development." },
            ],
            steps: [
              { part: "a", reasoning: "Melodic sequence — motif repeated up a step.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Technique correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Harmonic development — major to minor shift (mode change) plus accelerating harmonic rhythm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Harmonic changes correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sequence provides melodic momentum; minor shift darkens mood; faster chords add urgency — combined effect is building tension.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Interaction evaluated convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sequence. (b) Mode shift + harmonic acceleration. (c) Combined effect builds tension and momentum.",
            commonErrors: [
              "Analysing melody and harmony separately without noting interaction.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An authentic cadence typically moves from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "V to I" },
              { id: "b", text: "I to IV" },
              { id: "c", text: "IV to I" },
              { id: "d", text: "I to V" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Authentic cadence", statement: "A V-I progression with the tonic note in the top voice — sounds final and conclusive." },
            ],
            steps: [
              { reasoning: "The authentic cadence is V-I, the strongest sense of resolution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** V to I",
            commonErrors: [
              "Confusing authentic (V-I) with plagal (IV-I) cadences.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A plagal cadence (IV-I) often sounds:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surprising and unresolved" },
              { id: "b", text: "Gentle and conclusive, like an 'amen'" },
              { id: "c", text: "Identical to an authentic cadence" },
              { id: "d", text: "Dramatically tense" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Plagal cadence", statement: "A IV-I progression — softer and more conclusive in a gentle way than V-I." },
            ],
            steps: [
              { reasoning: "Plagal cadences (IV-I) have a calm, 'amen'-like quality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Gentle and conclusive, like an 'amen'",
            commonErrors: [
              "Assuming all cadences sound equally final — plagal is gentler than authentic.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Modulation in music refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding a new instrument" },
              { id: "b", text: "Changing the key or tonal centre" },
              { id: "c", text: "Repeating a motif" },
              { id: "d", text: "Changing the tempo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modulation", statement: "Shifting the music's tonal centre to a different key." },
            ],
            steps: [
              { reasoning: "Modulation changes key — e.g. from C major to G major.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Changing the key or tonal centre",
            commonErrors: [
              "Confusing modulation (key change) with transposition of a short motif.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a melodic sequence develops a theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Melodic sequence", statement: "Repeating a melodic idea at different pitch levels creates momentum and development." },
            ],
            steps: [
              { reasoning: "The motif repeats with the same intervals but starting on a new pitch.", marks: 1, markCode: "M" },
              { reasoning: "Each repetition is recognisable yet fresh, building momentum.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: sequences are a primary tool for melodic development.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sequence repeats the motif at new pitch levels, creating recognisable development.",
            commonErrors: [
              "Describing plain repetition rather than repetition at a different pitch.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how shifting from major to minor harmony affects a passage's mood.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Mode and mood", statement: "Major modes tend to sound bright or resolved; minor modes sound darker or more tense." },
            ],
            steps: [
              { reasoning: "Major harmony gives a bright, stable or joyful character.", marks: 1, markCode: "M" },
              { reasoning: "Minor harmony darkens the mood — sadness, tension or mystery.", marks: 1, markCode: "M" },
              { reasoning: "A shift between modes mid-piece creates a clear emotional contrast.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: mode change is a powerful harmonic development tool.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Major-to-minor shifts darken mood, creating emotional contrast.",
            commonErrors: [
              "Treating major/minor as purely theoretical rather than expressive.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Harmonic rhythm refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The rate at which chords change" },
              { id: "b", text: "The number of instruments playing" },
              { id: "c", text: "The loudness of the chords" },
              { id: "d", text: "The speed of the melody" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Harmonic rhythm", statement: "The rate of chord change within a passage." },
            ],
            steps: [
              { reasoning: "Harmonic rhythm measures how often the underlying chords change.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The rate at which chords change",
            commonErrors: [
              "Confusing harmonic rhythm (chord change rate) with melodic rhythm.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fast harmonic rhythm — chords changing every beat or faster — typically creates a feeling of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Urgency and forward drive" },
              { id: "b", text: "Stillness and calm" },
              { id: "c", text: "Finality and closure" },
              { id: "d", text: "No change in energy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Harmonic rhythm and pace", statement: "Rapid chord changes create urgency; slow changes create stability." },
            ],
            steps: [
              { reasoning: "Frequent chord changes propel the music forward — urgency and momentum.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Urgency and forward drive",
            commonErrors: [
              "Thinking harmonic rhythm affects only theory, not perceived pace.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how melodic peaks and harmonic climaxes can reinforce each other.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic-harmonic climax", statement: "Aligning a melody's highest point with a harmonic peak maximises emotional impact." },
            ],
            steps: [
              { reasoning: "A melodic peak — highest note or widest leap — draws attention.", marks: 1, markCode: "M" },
              { reasoning: "A harmonic climax — tension, dissonance or cadence — intensifies at that moment.", marks: 1, markCode: "M" },
              { reasoning: "When they coincide, the combined effect is greater than either alone.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: composers time peaks deliberately for maximum impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Aligning melodic and harmonic peaks creates a maximum-impact climax.",
            commonErrors: [
              "Analysing melody and harmony as independent layers rather than interacting.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A cadence is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A chord progression that signals the end of a section" },
              { id: "b", text: "Any chord in the piece" },
              { id: "c", text: "A fast melodic passage" },
              { id: "d", text: "A change of instrument" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cadence", statement: "A chord progression that marks the close of a phrase or section." },
            ],
            steps: [
              { reasoning: "Cadences are harmonic punctuation — they signal endings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A chord progression that signals the end of a section",
            commonErrors: [
              "Confusing a cadence with any random chord change.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two ways a composer can create harmonic tension.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Harmonic tension", statement: "Dissonance, unstable chords and withheld resolution create tension." },
            ],
            steps: [
              { reasoning: "Use dissonant chords or non-chord tones that want to resolve.", marks: 1, markCode: "M" },
              { reasoning: "Withhold the tonic or delay the cadence to prolong instability.", marks: 1, markCode: "M" },
              { reasoning: "Move away from the home key or use secondary dominants for pull.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: tension comes from instability that seeks resolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dissonance, unstable chords and delayed resolution create harmonic tension.",
            commonErrors: [
              "Describing loudness rather than harmonic instability as the source of tension.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A passage repeats a four-bar melody up a step, then the harmony shifts from major to minor and chords change twice as fast in the final bars.",
          parts: [
            { label: "a", prompt: "Identify the melodic development technique.", marks: 2 },
            { label: "b", prompt: "Identify two harmonic changes.", marks: 2 },
            { label: "c", prompt: "Evaluate the combined effect on the passage.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Melodic-harmonic analysis", statement: "Identify techniques in both layers and evaluate their combined effect." },
            ],
            steps: [
              { part: "a", reasoning: "Sequence — motif repeated up a step.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Technique correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mode shift major-to-minor and accelerating harmonic rhythm.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both harmonic changes identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sequence builds momentum; minor shift darkens; faster chords add urgency — combined tension rises.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Interaction evaluated convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Sequence. (b) Mode shift + faster harmonic rhythm. (c) Combined effect builds tension.",
            commonErrors: [
              "Analysing melody and harmony in isolation without noting interaction.",
            ],
          },
        },
        {
          id: "music-u3-melodic-harmonic-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why combining melodic sequences with shifting harmony is an effective development strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic-harmonic synergy", statement: "Melodic and harmonic development together create richer, more convincing development." },
            ],
            steps: [
              { reasoning: "Sequences give melodic momentum while new chords refresh the harmonic colour.", marks: 1, markCode: "M" },
              { reasoning: "Changing harmony under a repeated melody makes the repetition feel new.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the combination develops both layers simultaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sequences plus shifting harmony develop melody and harmony together for richer variety.",
            commonErrors: [
              "Developing only one element while leaving the other static.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u3-rhythmic-development",
      title: "Rhythmic development and variation",
      skill: "Develop rhythmic material through augmentation, diminution, syncopation and displacement.",
      lesson: {
        sections: [
          {
            heading: "Rhythmic transformation",
            body: "Rhythm develops through **augmentation** (longer note values), **diminution** (shorter values), **syncopation** (accents off the beat) and **displacement** (shifting the pattern). Each transformation changes the energy: augmentation adds weight; diminution adds drive; syncopation adds tension; displacement creates surprise.",
          },
          {
            heading: "Rhythmic patterns",
            body: "Build rhythmic interest through patterns: ostinato (repeating figure), polymeter (different metres simultaneously), hemiola (shift between duple and triple feel). These create complexity without changing the melody — rhythm alone can transform a piece's character.",
          },
          {
            heading: "Combining transformations",
            body: "The strongest rhythmic development combines techniques: augment a motif then syncopate it; displace a pattern then fragment it. Layer transformations to create density and interest. But maintain a pulse — complexity without groove loses the listener.",
          },
        ],
        keyFormulas: [
          { name: "Rhythmic techniques", statement: "Augmentation + diminution + syncopation + displacement" },
          { name: "Rhythmic patterns", statement: "Ostinato + polymeter + hemiola = rhythmic complexity" },
        ],
        workedExample: {
          problem: "A composer wants to make a rhythmic pattern more exciting without changing the melody. Suggest three transformations.",
          solution: "Add syncopation by accenting off-beats; displace the pattern to start on a different beat; or fragment it — use only the first half repeatedly. Each preserves recognisability while adding rhythmic interest.",
        },
      },
      questions: [
        {
          id: "music-u3-rhythmic-development-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rhythmic displacement involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Removing notes" },
              { id: "b", text: "Changing the tempo" },
              { id: "c", text: "Adding more instruments" },
              { id: "d", text: "Shifting a pattern to start on a different beat" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhythmic displacement", statement: "Shifting a rhythmic pattern to a different beat position." },
            ],
            steps: [
              { reasoning: "Displacement shifts a rhythmic pattern to begin on a different beat or subdivision.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shifting a pattern to start on a different beat",
            commonErrors: [
              "Confusing displacement with augmentation or tempo change.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three techniques for developing rhythmic material.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythmic development", statement: "Augmentation, diminution, syncopation and displacement transform rhythm." },
            ],
            steps: [
              { reasoning: "Augmentation/diminution — lengthen or shorten note values.", marks: 1, markCode: "M" },
              { reasoning: "Syncopation — accent weak beats for tension.", marks: 1, markCode: "M" },
              { reasoning: "Displacement — shift the pattern's starting point.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Augmentation, syncopation and displacement develop rhythm.",
            commonErrors: [
              "Repeating the same rhythm without transformation.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how ostinato creates unity in a composition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ostinato", statement: "A repeating rhythmic or melodic figure anchors the piece while other elements change." },
            ],
            steps: [
              { reasoning: "Ostinato is a repeating pattern that persists through the piece.", marks: 1, markCode: "M" },
              { reasoning: "It provides a stable foundation while melody, harmony or texture change above it.", marks: 1, markCode: "M" },
              { reasoning: "The repetition creates hypnotic focus and structural unity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ostinato is the rhythmic equivalent of a motif — unity through repetition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ostinato anchors the piece with repetition while other elements vary.",
            commonErrors: [
              "Using ostinato without considering its anchoring function.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the rhythmic development in a described passage.",
          parts: [
            { label: "a", prompt: "Identify two rhythmic techniques used.", marks: 2 },
            { label: "b", prompt: "Explain their effect on the music's energy.", marks: 2 },
            { label: "c", prompt: "Suggest one additional rhythmic development.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysing rhythm", statement: "Identify transformations and evaluate their effect on energy and interest." },
            ],
            steps: [
              { part: "a", reasoning: "Two techniques identified, e.g. syncopation, augmentation, displacement.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Techniques correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Effects explained — syncopation adds tension, augmentation adds weight, etc.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effects convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "One additional technique suggested with rationale.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete suggestion with reasoning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate rhythmic development by technique variety and effect on energy.",
            commonErrors: [
              "Identifying techniques without explaining their rhythmic effect.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Syncopation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Playing everything louder" },
              { id: "b", text: "Accenting the strong beats" },
              { id: "c", text: "Accenting off-beats or weak parts of the beat" },
              { id: "d", text: "Slowing the tempo" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Syncopation", statement: "Placing accents on weak beats or off-beats, creating rhythmic tension." },
            ],
            steps: [
              { reasoning: "Syncopation displaces the accent away from the expected strong beat.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accenting off-beats or weak parts of the beat",
            commonErrors: [
              "Confusing syncopation (off-beat accent) with simple accent on the beat.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An ostinato is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single long note" },
              { id: "b", text: "A chord progression" },
              { id: "c", text: "A repeating rhythmic or melodic figure" },
              { id: "d", text: "A sudden change of tempo" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ostinato", statement: "A short pattern that repeats continuously, anchoring the music." },
            ],
            steps: [
              { reasoning: "An ostinato is a persistent repeating figure — rhythmic or melodic.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A repeating rhythmic or melodic figure",
            commonErrors: [
              "Confusing ostinato (repeating figure) with a motif that develops.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Hemiola creates the effect of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifting between duple and triple metrical feel" },
              { id: "b", text: "Two instruments playing in unison" },
              { id: "c", text: "Gradually slowing down" },
              { id: "d", text: "A melody without rhythm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hemiola", statement: "A rhythmic device that shifts the perceived metre between duple and triple groupings." },
            ],
            steps: [
              { reasoning: "Hemiola re-groups beats — e.g. three groups of two becoming two groups of three.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shifting between duple and triple metrical feel",
            commonErrors: [
              "Confusing hemiola (metre re-grouping) with polymeter (simultaneous metres).",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how diminution changes the energy of a rhythmic pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Diminution", statement: "Shortening note values makes a pattern quicker and more driven." },
            ],
            steps: [
              { reasoning: "Diminution shortens note values — the same pattern in less time.", marks: 1, markCode: "M" },
              { reasoning: "The faster pace increases drive, excitement or urgency.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: diminution is the opposite energy shift to augmentation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diminution quickens the pattern, increasing drive and energy.",
            commonErrors: [
              "Describing diminution as a pitch or dynamic change rather than rhythmic.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why syncopation creates tension in a rhythm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Syncopation and tension", statement: "Accenting weak beats defies the listener's metrical expectations." },
            ],
            steps: [
              { reasoning: "Listeners expect accents on strong beats; syncopation violates that expectation.", marks: 1, markCode: "M" },
              { reasoning: "The surprise creates a feeling of push and pull — rhythmic tension.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: syncopation energises music by playing against the pulse.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Syncopation tensions rhythm by accenting against metrical expectation.",
            commonErrors: [
              "Describing syncopation as merely 'fast' rather than off-beat accenting.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Polymeter involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two or more different metres sounding simultaneously" },
              { id: "b", text: "Removing the pulse entirely" },
              { id: "c", text: "Doubling the tempo" },
              { id: "d", text: "Changing metre every bar" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polymeter", statement: "Simultaneous use of two or more different metres, e.g. 3/4 against 4/4." },
            ],
            steps: [
              { reasoning: "Polymeter layers conflicting metres at the same time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Two or more different metres sounding simultaneously",
            commonErrors: [
              "Confusing polymeter (simultaneous metres) with hemiola (sequential re-grouping).",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q11",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two rhythmic patterns that create complexity without changing the melody.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rhythmic complexity", statement: "Ostinato, polymeter and hemiola add rhythmic interest independently of melody." },
            ],
            steps: [
              { reasoning: "An ostinato repeats a figure, anchoring while other parts vary.", marks: 1, markCode: "M" },
              { reasoning: "Polymeter or hemiola creates metrical tension against the melody.", marks: 1, markCode: "M" },
              { reasoning: "Syncopation or displacement can also re-articulate the same melody.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rhythm alone can transform a piece's character.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ostinato, polymeter/hemiola and syncopation add complexity without changing melody.",
            commonErrors: [
              "Suggesting changes to the melody rather than the rhythm.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why maintaining a pulse matters even in rhythmically complex music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Pulse and complexity", statement: "Complex rhythms need a stable underlying pulse for listeners to follow." },
            ],
            steps: [
              { reasoning: "Listeners track music through its beat; removing the pulse loses them.", marks: 1, markCode: "M" },
              { reasoning: "Complexity works when layered against a clear, steady foundation.", marks: 1, markCode: "M" },
              { reasoning: "Polyrhythm and polymeter succeed because a pulse still anchors them.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: complexity without pulse becomes noise, not music.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A steady pulse anchors complex rhythms — without it, listeners lose the thread.",
            commonErrors: [
              "Equating rhythmic complexity with total unpredictability.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Augmenting a rhythmic pattern typically makes it feel:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher in pitch" },
              { id: "b", text: "Faster and lighter" },
              { id: "c", text: "Completely silent" },
              { id: "d", text: "Slower and heavier" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Augmentation", statement: "Lengthening note values — the same pattern in slower time." },
            ],
            steps: [
              { reasoning: "Augmentation lengthens values, slowing the pattern and adding weight.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Slower and heavier",
            commonErrors: [
              "Confusing augmentation (longer values) with diminution (shorter values).",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "A composer repeats the same four-bar rhythm throughout a piece. Suggest and justify two rhythmic developments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Rhythmic development planning", statement: "Apply transformations to repeated rhythms to maintain interest." },
            ],
            steps: [
              { reasoning: "Syncopate the pattern to add tension and surprise.", marks: 1, markCode: "M" },
              { reasoning: "Displace it to start on a different beat, shifting the listener's anchor.", marks: 1, markCode: "M" },
              { reasoning: "Augment or diminish it to change pace and weight.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: varied repetition keeps unity while adding interest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Syncopation, displacement or augmentation/diminution develop the rhythm.",
            commonErrors: [
              "Leaving the rhythm identical throughout, causing monotony.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A piece features a repeated rhythmic figure that is first augmented, then syncopated, then displaced to begin on beat three.",
          parts: [
            { label: "a", prompt: "Identify the three rhythmic techniques used.", marks: 2 },
            { label: "b", prompt: "Explain the cumulative effect on energy and interest.", marks: 2 },
            { label: "c", prompt: "Suggest one additional rhythmic development for a climax.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analysing rhythmic development", statement: "Identify transformations and evaluate their combined effect on energy." },
            ],
            steps: [
              { part: "a", reasoning: "Augmentation, syncopation and displacement identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three correctly named.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Augmentation adds weight; syncopation adds tension; displacement creates surprise — escalating interest.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cumulative effect convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Valid suggestion, e.g. diminution for drive or polymeter for climax density.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggestion justified in context.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Augmentation, syncopation, displacement. (b) Escalating tension and interest. (c) E.g. diminution or polymeter for climax.",
            commonErrors: [
              "Naming techniques without explaining their rhythmic effect.",
            ],
          },
        },
        {
          id: "music-u3-rhythmic-development-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why combining rhythmic transformations is more effective than using only one repeatedly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Combined rhythmic development", statement: "Layering techniques changes several rhythmic dimensions at once." },
            ],
            steps: [
              { reasoning: "One technique changes one aspect — syncopation accents, augmentation pace, displacement position.", marks: 1, markCode: "M" },
              { reasoning: "Combining them changes multiple aspects simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: variety grows while the underlying figure preserves unity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Combining transformations varies more rhythmic dimensions for richer development.",
            commonErrors: [
              "Over-transforming until the original rhythm is unrecognisable.",
            ],
          },
        },
      ],
    },
  ],
};
