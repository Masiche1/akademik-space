import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "music-u1-lesson-1-1",
  code: "1-1",
  title: "Notation, Rhythm and Pitch",
  goal: "I CAN read and write standard music notation, identify rhythmic values and understand pitch relationships.",
  standards: [
    "Musicianship",
    "Notation",
  ],
  vocabulary: [
    { term: "Notation", definition: "The written or printed representation of music using symbols for pitch, rhythm and expression." },
    { term: "Staff", definition: "The five horizontal lines and four spaces on which notes are placed." },
    { term: "Clef", definition: "A symbol at the start of the staff indicating which lines represent which pitches." },
    { term: "Time signature", definition: "Two numbers showing how many beats per bar and which note value gets one beat." },
    { term: "Interval", definition: "The distance in pitch between two notes, named by number and quality." },
    { term: "Tempo", definition: "The speed of the music, often indicated by BPM or Italian terms." },
  ],
  concepts: [
    {
      id: "music-u1-rhythm-pitch",
      title: "Rhythm and pitch fundamentals",
      skill: "Identify rhythmic values, time signatures and pitch relationships in standard notation.",
      lesson: {
        sections: [
          {
            heading: "The staff and clefs",
            body: "Notes are written on a five-line staff. The **treble clef** (G clef) places G above middle C on the second line; the **bass clef** (F clef) places F below middle C on the fourth line. Ledger lines extend the staff for notes above or below. Learning note names on both clefs is essential musicianship.",
          },
          {
            heading: "Rhythm and metre",
            body: "Note values indicate duration: whole = 4 beats, half = 2, quarter = 1, eighth = half a beat. The **time signature** shows beats per bar (top number) and beat unit (bottom). Simple metres (4/4, 3/4) divide beats in two; compound (6/8, 9/8) divide in three.",
          },
          {
            heading: "Pitch and intervals",
            body: "Pitch is the highness or lowness of a note. **Intervals** measure distance between notes: seconds, thirds, fourths, fifths and octaves have distinct sounds — the perfect fifth was historically the most consonant. Recognising intervals by ear and sight is core aural skill.",
          },
        ],
        keyFormulas: [
          { name: "Note values", statement: "Whole=4, half=2, quarter=1, eighth=0.5 beats" },
          { name: "Time signature", statement: "Top number = beats per bar; bottom = beat unit" },
          { name: "Interval names", statement: "2nd, 3rd, 4th, 5th, 6th, 7th, octave" },
        ],
        workedExample: {
          problem: "In 4/4 time, how many beats do two half notes and one quarter note total?",
          solution: "Two half notes = 2 + 2 = 4 beats; one quarter note = 1 beat; total = 5 beats. In 4/4, each bar holds 4 beats, so this pattern would need a barline after the half notes or would span into the next bar.",
        },
      },
      questions: [
        {
          id: "music-u1-rhythm-pitch-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the time signature 3/4, the top number indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The note value that gets one beat" },
              { id: "b", text: "The tempo in BPM" },
              { id: "c", text: "The number of bars per line" },
              { id: "d", text: "The number of beats per bar" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Time signature", statement: "Top number = beats per bar; bottom = beat unit." },
            ],
            steps: [
              { reasoning: "The top number of a time signature indicates beats per bar.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The number of beats per bar",
            commonErrors: [
              "Reversing the meaning of the two numbers.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the difference between simple and compound metre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Metre types", statement: "Simple divides beats in two; compound divides beats in three." },
            ],
            steps: [
              { reasoning: "Simple metre (4/4, 3/4) divides each beat into two equal parts.", marks: 1, markCode: "M" },
              { reasoning: "Compound metre (6/8, 9/8) divides each beat into three equal parts.", marks: 1, markCode: "M" },
              { reasoning: "The feel differs: simple is duple-based, compound has a lilting triplet feel.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Simple = beats divided in two; compound = beats divided in three.",
            commonErrors: [
              "Confusing compound metre with fast tempo.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how interval size affects the sound and feel of a melody.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interval character", statement: "Small intervals sound smooth and stepwise; large intervals sound dramatic and leaping." },
            ],
            steps: [
              { reasoning: "Small intervals (seconds, thirds) create stepwise, singable, calm melodies.", marks: 1, markCode: "M" },
              { reasoning: "Large intervals (sixths, sevenths, octaves) create dramatic leaps and tension.", marks: 1, markCode: "M" },
              { reasoning: "Consecutive small intervals build flow; dissonant intervals (seconds, sevenths) create tension.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: interval choice shapes melodic character and emotional effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Small intervals = smooth flow; large/dissonant intervals = drama and tension.",
            commonErrors: [
              "Treating all intervals as equally smooth or dramatic.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described rhythmic pattern",
            author: "Written for Akademik Space",
            source: "Rhythm analysis exercise",
            text: "In 4/4 time: quarter note, two eighth notes, quarter note, four sixteenth notes. The pattern repeats each bar.",
          },
          stem: "Analyse a described rhythmic pattern in notation.",
          parts: [
            { label: "a", prompt: "Identify the total beats in the pattern.", marks: 2 },
            { label: "b", prompt: "Explain how the pattern creates rhythmic interest.", marks: 2 },
            { label: "c", prompt: "Suggest how it could be varied.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythmic analysis", statement: "Note values combine to fill bars; varied durations create interest." },
            ],
            steps: [
              { part: "a", reasoning: "1 + 0.5 + 0.5 + 1 + 4×0.25 = 4 beats — fills the bar correctly.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Total correctly calculated as 4 beats.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Mix of long and short values creates syncopation and forward momentum; sixteenth-note run adds energy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rhythmic interest explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could vary by displacing the pattern, adding rests, or changing the sixteenth-note groupings.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete variation suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 beats. (b) Mixed durations create syncopation. (c) Vary by displacement, rests or regrouping.",
            commonErrors: [
              "Miscalculating beat values or ignoring the bar total.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which clef is also called the G clef because it circles the line for G above middle C?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alto clef" },
              { id: "b", text: "Bass clef" },
              { id: "c", text: "Treble clef" },
              { id: "d", text: "Percussion clef" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clefs", statement: "The treble clef is the G clef; the bass clef is the F clef." },
            ],
            steps: [
              { reasoning: "The treble clef circles the G line above middle C, hence its name G clef.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Treble clef",
            commonErrors: [
              "Confusing the treble (G) clef with the bass (F) clef.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In the time signature 6/8, which note value receives one beat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quarter note" },
              { id: "b", text: "Eighth note" },
              { id: "c", text: "Sixteenth note" },
              { id: "d", text: "Half note" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Time signature", statement: "The bottom number indicates which note value gets one beat." },
            ],
            steps: [
              { reasoning: "The bottom number 8 means the eighth note is the beat unit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Eighth note",
            commonErrors: [
              "Reading the top number as the beat unit instead of the bottom number.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The time signature 6/8 is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compound duple metre with two beats divided into three" },
              { id: "b", text: "Simple triple metre with three beats per bar" },
              { id: "c", text: "Simple duple metre with six beats per bar" },
              { id: "d", text: "Compound quadruple metre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound metre", statement: "Compound metres group beats in threes; 6/8 has two compound beats." },
            ],
            steps: [
              { reasoning: "6/8 groups six eighth notes into two beats of three eighths each — compound duple.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Compound duple metre with two beats divided into three",
            commonErrors: [
              "Counting six eighth-note beats instead of two compound beats.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The perfect fifth was historically considered the most consonant interval because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is the smallest possible interval" },
              { id: "b", text: "Creates a stable, blended sound with low tension" },
              { id: "c", text: "Only appears in fast music" },
              { id: "d", text: "Is always dissonant and demands resolution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consonance", statement: "Consonant intervals sound stable and blended; dissonant intervals sound tense." },
            ],
            steps: [
              { reasoning: "The perfect fifth has a strong, stable, blended sound — the basis of much tuning systems.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Creates a stable, blended sound with low tension",
            commonErrors: [
              "Confusing consonance (stable) with dissonance (tense).",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Ledger lines are used in notation to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Represent notes above or below the staff" },
              { id: "b", text: "Indicate the tempo of the piece" },
              { id: "c", text: "Show where rests occur" },
              { id: "d", text: "Connect bars together" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ledger lines", statement: "Short lines extending the staff for pitches outside its range." },
            ],
            steps: [
              { reasoning: "Ledger lines extend the staff so notes above or below it can be written.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Represent notes above or below the staff",
            commonErrors: [
              "Thinking ledger lines are part of bar lines or repeat signs.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A melody that moves mainly by seconds and thirds, without large jumps, is described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Staccato and detached" },
              { id: "b", text: "Chromatic and atonal" },
              { id: "c", text: "Leaping and dramatic" },
              { id: "d", text: "Stepwise and lyrical" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic contour", statement: "Small intervals produce smooth, singable lines; large intervals produce drama." },
            ],
            steps: [
              { reasoning: "Seconds and thirds are small intervals, creating a smooth, singable, lyrical line.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stepwise and lyrical",
            commonErrors: [
              "Confusing interval size with melodic character.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Calculate the total beats of the following pattern in 4/4 time: half note, quarter note, two eighth notes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Note values", statement: "Whole=4, half=2, quarter=1, eighth=0.5 beats." },
            ],
            steps: [
              { reasoning: "Half note = 2 beats; quarter note = 1 beat; each eighth note = 0.5 beats.", marks: 1, markCode: "M" },
              { reasoning: "Total = 2 + 1 + 0.5 + 0.5 = 4 beats.", marks: 1, markCode: "M" },
              { reasoning: "The pattern fills one complete 4/4 bar exactly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4 beats — the pattern fills one complete 4/4 bar.",
            commonErrors: [
              "Forgetting that eighth notes each get half a beat.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "A piece is written in 9/8 time. Explain its metre type and how it should be counted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compound triple", statement: "9/8 groups nine eighth notes into three beats of three — compound triple metre." },
            ],
            steps: [
              { reasoning: "9/8 is compound metre because each beat divides into three eighth notes.", marks: 1, markCode: "M" },
              { reasoning: "It is counted in three — three dotted-quarter beats per bar.", marks: 1, markCode: "M" },
              { reasoning: "The feel is lilting and flowing, with a triplet subdivision inside each beat.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: count '1-2-3, 2-2-3, 3-2-3' rather than nine separate eighths.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "9/8 is compound triple — three beats, each divided into three eighth notes; count in threes.",
            commonErrors: [
              "Counting nine eighth-note beats instead of three compound beats.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what an interval's number and quality mean, using the interval from C to E as your example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Interval naming", statement: "Number = distance in staff steps; quality = major/minor/perfect/diminished/augmented." },
            ],
            steps: [
              { reasoning: "The number is the letter-name distance: C to E spans three letter names, so it is a third.", marks: 1, markCode: "M" },
              { reasoning: "The quality describes the exact pitch distance — C to E is a major third.", marks: 1, markCode: "M" },
              { reasoning: "Both number and quality are needed to identify an interval precisely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Number = letter-name distance (C-E = third); quality = exact pitch (major third).",
            commonErrors: [
              "Confusing the interval number with the number of semitones.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student writes this rhythm in 3/4 time: dotted quarter note, eighth note, quarter note, quarter note. Analyse it.",
          parts: [
            { label: "a", prompt: "Calculate the total beats and state whether the bar is complete.", marks: 2 },
            { label: "b", prompt: "Explain how the rhythm creates interest.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythmic analysis", statement: "Dotted values and mixed durations create syncopation and forward motion." },
            ],
            steps: [
              { part: "a", reasoning: "Dotted quarter = 1.5 beats, eighth = 0.5, quarter = 1, quarter = 1; total = 4 beats.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "4 beats exceeds the 3 beats of a 3/4 bar — the bar is overfull by one beat.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The dotted quarter pushes the beat forward, creating a lilting, dance-like feel.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mixing dotted and undotted values prevents a mechanical, square rhythm.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The pattern would be more effective if adjusted to exactly fill the 3/4 bar.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 beats — one beat too many for 3/4. (b) Dotted values create lilting forward motion, but the bar is overfull.",
            commonErrors: [
              "Forgetting that a dotted note adds half its value.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student hears a rhythm and notates it as four equal quarter notes in 4/4, but the teacher hears syncopation. Analyse and suggest corrections.",
          parts: [
            { label: "a", prompt: "Explain what syncopation would sound like in this context.", marks: 2 },
            { label: "b", prompt: "Describe two ways the notation could be changed to show syncopation.", marks: 2 },
            { label: "c", prompt: "Explain why checking bar totals matters when correcting the rhythm.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Syncopation notation", statement: "Syncopation is written by placing accents on weak beats or off-beats." },
            ],
            steps: [
              { part: "a", reasoning: "Syncopation would accent the 'and' of beats or weak beats, displacing the expected strong-beat pattern.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Four equal quarters always accent beats 1 and 3, so the written version cannot sound syncopated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use tied notes across beats or rests before accented notes to shift accents off the beat.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Or use eighth-note pickups and off-beat accents with appropriate note values.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Every bar must still total 4 beats; changing values without checking totals breaks the metre.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Checking totals ensures the syncopated version remains performable and correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Syncopation accents weak beats; four quarters cannot produce it. (b) Ties across beats or off-beat note values. (c) Bar totals must still equal 4 beats.",
            commonErrors: [
              "Adding syncopation without preserving the bar's total beat value.",
            ],
          },
        },
        {
          id: "music-u1-rhythm-pitch-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how rests contribute to rhythm as much as sounded notes do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythmic silence", statement: "Rests shape rhythm by creating space, anticipation and contrast." },
            ],
            steps: [
              { reasoning: "Rests are part of the rhythmic structure — they fill time just as notes do.", marks: 1, markCode: "M" },
              { reasoning: "Silence creates anticipation before entries and space between phrases.", marks: 1, markCode: "M" },
              { reasoning: "Contrast between sound and silence is a fundamental expressive device.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rhythm is the pattern of both sound and silence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rests shape rhythm through space, anticipation and contrast — silence is part of the pattern.",
            commonErrors: [
              "Thinking of rests as 'nothing' rather than rhythmic events.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u1-notation-skills",
      title: "Practical notation skills",
      skill: "Apply notation knowledge to sight-read, transcribe and create simple rhythmic and melodic patterns.",
      lesson: {
        sections: [
          {
            heading: "Sight-reading",
            body: "Sight-reading is decoding notation in real time. Strategies: scan ahead, identify the key and time signature, tap the beat internally, read rhythms before pitches, and accept that mistakes are part of the process. Regular practice builds fluency.",
          },
          {
            heading: "Rhythmic dictation",
            body: "Clap back rhythms you hear — start with simple values (quarters, eighths) and add complexity. Write down what you hear: identify the beat, subdivide, and place note values. Rhythmic dictation develops the link between ear and notation.",
          },
          {
            heading: "Creating patterns",
            body: "Compose simple patterns using known note values: a 4-bar phrase in 4/4 using quarters, eighths and rests. Experiment with syncopation (accents off the beat) and ostinato (repeating patterns). Constraints — limited notes, fixed rhythm — spark creativity.",
          },
        ],
        keyFormulas: [
          { name: "Sight-reading strategy", statement: "Scan → key/time → internal beat → rhythm first → accept mistakes" },
          { name: "Syncopation", statement: "Accent off the beat creates rhythmic tension and interest" },
        ],
        workedExample: {
          problem: "A student hears: quarter, eighth-eighth, quarter, half in 4/4. How would they notate it?",
          solution: "Bar 1: quarter note, two eighth notes, quarter note = 1 + 0.5 + 0.5 + 1 = 3 beats — incomplete. Add a rest or adjust. Correct version might be: quarter, two eighths, quarter, quarter = 4 beats. Dictation requires checking bar totals.",
        },
      },
      questions: [
        {
          id: "music-u1-notation-skills-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Syncopation occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accents fall on weak beats or off-beats" },
              { id: "b", text: "The time signature changes" },
              { id: "c", text: "The tempo suddenly changes" },
              { id: "d", text: "Notes are played very quietly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Syncopation", statement: "Rhythmic accent displaced from strong to weak beats." },
            ],
            steps: [
              { reasoning: "Syncopation displaces accents to weak beats or subdivisions, creating tension.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accents fall on weak beats or off-beats",
            commonErrors: [
              "Confusing syncopation with tempo or dynamic change.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three strategies for improving sight-reading fluency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sight-reading strategies", statement: "Scan ahead, internal pulse, rhythm-first reading and regular practice." },
            ],
            steps: [
              { reasoning: "Scan the notation ahead before playing to anticipate patterns.", marks: 1, markCode: "M" },
              { reasoning: "Maintain an internal pulse by tapping or counting beats.", marks: 1, markCode: "M" },
              { reasoning: "Read rhythms before pitches and accept that errors are part of learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Scan ahead, internal pulse, rhythm-first — fluency comes from practice.",
            commonErrors: [
              "Stopping at every mistake rather than maintaining pulse.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how rhythmic dictation develops musicianship.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dictation", statement: "Connecting ear to notation builds aural-visual skills essential for performance and composition." },
            ],
            steps: [
              { reasoning: "Dictation trains the ear to identify rhythmic values and groupings.", marks: 1, markCode: "M" },
              { reasoning: "It builds the link between heard rhythm and written notation.", marks: 1, markCode: "M" },
              { reasoning: "This skill transfers to transcription, improvisation and composition.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: dictation is foundational musicianship, not just an exercise.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dictation links ear to notation, developing skills for performance and composition.",
            commonErrors: [
              "Treating dictation as a mechanical exercise rather than ear training.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse a student's approach to creating a rhythmic pattern.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the approach.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating composition", statement: "Assess use of note values, bar structure and rhythmic variety." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. uses varied note values, fills bars correctly, has a clear beat.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. all patterns identical, no syncopation, bar totals wrong — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with rhythmic effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding syncopation, varying note values, checking bar totals.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate composition by note value variety, bar structure and rhythmic interest.",
            commonErrors: [
              "Judging rhythmic patterns only by complexity, not correctness or interest.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rests in music notation indicate:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific duration of silence" },
              { id: "b", text: "A change of tempo" },
              { id: "c", text: "A note played very quietly" },
              { id: "d", text: "A repeated section" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rests", statement: "Rests indicate silence for a specific note value duration." },
            ],
            steps: [
              { reasoning: "Each rest symbol corresponds to a note value and marks that duration of silence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A specific duration of silence",
            commonErrors: [
              "Confusing rests with quiet dynamics.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An ostinato is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A section played by only one instrument" },
              { id: "b", text: "A sudden change of dynamics" },
              { id: "c", text: "A melody that changes every bar" },
              { id: "d", text: "A repeating rhythmic or melodic pattern" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ostinato", statement: "A persistently repeated rhythmic or melodic figure." },
            ],
            steps: [
              { reasoning: "An ostinato is a pattern that repeats, providing a stable foundation in a piece.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A repeating rhythmic or melodic pattern",
            commonErrors: [
              "Confusing ostinato with a one-time melodic idea.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "When sight-reading unfamiliar notation, the most effective first step is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Play as fast as possible to keep moving" },
              { id: "b", text: "Scan ahead, identify the key and time signature, and feel the pulse" },
              { id: "c", text: "Ignore the time signature and follow the melody" },
              { id: "d", text: "Memorise every note before playing anything" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sight-reading strategy", statement: "Scan ahead, identify key/time, internalise the pulse before playing." },
            ],
            steps: [
              { reasoning: "Scanning ahead and establishing pulse prevents losing the beat and enables fluent reading.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scan ahead, identify the key and time signature, and feel the pulse",
            commonErrors: [
              "Starting to play note-by-note without scanning the passage.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rhythmic dictation primarily develops which skill?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The link between heard rhythm and written notation" },
              { id: "b", text: "The ability to play faster" },
              { id: "c", text: "Instrument finger technique" },
              { id: "d", text: "Knowledge of music history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Dictation", statement: "Dictation connects the ear to notation, building aural-visual musicianship." },
            ],
            steps: [
              { reasoning: "Dictation trains translating heard rhythms into written note values.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The link between heard rhythm and written notation",
            commonErrors: [
              "Thinking dictation is only about writing, not listening.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student stops and restarts every time they make a mistake while sight-reading. The main drawback of this habit is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They lose the pulse and disrupt the musical flow" },
              { id: "b", text: "Their dynamics will become too loud" },
              { id: "c", text: "They will memorise the notation too well" },
              { id: "d", text: "They will learn the piece too quickly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sight-reading continuity", statement: "Maintaining pulse through mistakes is essential to fluent sight-reading." },
            ],
            steps: [
              { reasoning: "Restarting breaks the internal beat and prevents the performer from developing continuity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They lose the pulse and disrupt the musical flow",
            commonErrors: [
              "Believing perfect accuracy matters more than maintaining flow.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Syncopation is most effectively created by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Accenting weak beats or subdivisions between the main beats" },
              { id: "b", text: "Playing every note at the same volume" },
              { id: "c", text: "Using only whole notes" },
              { id: "d", text: "Changing the key signature mid-piece" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Syncopation", statement: "Rhythmic displacement that places emphasis on weak beats or off-beats." },
            ],
            steps: [
              { reasoning: "Syncopation shifts accent energy to weak beats, creating tension and forward drive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Accenting weak beats or subdivisions between the main beats",
            commonErrors: [
              "Thinking syncopation is a tempo change rather than an accent displacement.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Explain how to check that a bar of written rhythm is complete and correct.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Bar checking", statement: "Add the beat values in the bar and compare with the time signature." },
            ],
            steps: [
              { reasoning: "Identify the beat unit from the time signature bottom number.", marks: 1, markCode: "M" },
              { reasoning: "Add the values of all notes and rests in the bar.", marks: 1, markCode: "M" },
              { reasoning: "The total must equal the top number of the time signature; adjust values or rests if not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add all note and rest values and check the total equals the beats per bar.",
            commonErrors: [
              "Forgetting to count rests when checking bar totals.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the step-by-step process of rhythmic dictation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dictation process", statement: "Identify beat, subdivide, place note values, then verify bar totals." },
            ],
            steps: [
              { reasoning: "Listen to establish the beat and time signature.", marks: 1, markCode: "M" },
              { reasoning: "Subdivide the beat to identify shorter note values.", marks: 1, markCode: "M" },
              { reasoning: "Write the rhythm using appropriate note and rest values.", marks: 1, markCode: "R" },
              { reasoning: "Check that each bar's total matches the time signature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Establish beat → subdivide → notate values → verify bar totals.",
            commonErrors: [
              "Writing rhythms without first establishing the underlying beat.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Suggest two constraints that can spark creativity when composing a rhythmic pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Creative constraints", statement: "Limits on notes, values or length force inventive solutions." },
            ],
            steps: [
              { reasoning: "Use only a small set of note values, e.g. quarters and eighths only.", marks: 1, markCode: "M" },
              { reasoning: "Fix the bar length or require the pattern to repeat exactly.", marks: 1, markCode: "M" },
              { reasoning: "Constraints force creative use of syncopation, rests and accents within limits.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Limited note values and fixed bar/repetition rules spark creative rhythmic solutions.",
            commonErrors: [
              "Assuming unlimited freedom always produces better composition.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A student composing a 4-bar pattern in 4/4 uses only quarter notes throughout. Analyse this approach.",
          parts: [
            { label: "a", prompt: "Identify one strength of the approach.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their rhythmic effect.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating composition", statement: "Variety of note values creates rhythmic interest; uniformity can sound mechanical." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: quarter notes are easy to perform and clearly establish a steady pulse.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The pattern is technically accessible and rhythmically secure.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weakness: no rhythmic variety — every beat identical.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness: no syncopation or off-beat interest, so the music may sound plodding.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect: monotony reduces expressive range and listener engagement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Steady, accessible pulse. (b) No variety or syncopation — sounds mechanical and monotonous.",
            commonErrors: [
              "Judging a pattern only by whether it is playable, not by its musical interest.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's composed 4-bar rhythmic pattern: bar 1 has a syncopated figure, bars 2-4 repeat the same four quarter notes.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating composition", statement: "Assess syncopation, bar structure, variety and repetition balance." },
            ],
            steps: [
              { part: "a", reasoning: "Strength: contains syncopation in bar 1, showing rhythmic awareness.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Strength: bars are likely complete and structurally clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weakness: three identical bars create monotony.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weakness: the interesting material is not developed or varied.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Vary the repeated bars — change note values, add rests or alter the syncopation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Develop the bar 1 figure across the phrase for cohesion and interest.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Syncopation present, clear structure. (b) Repetitive bars, undeveloped idea. (c) Vary values and develop the syncopated figure.",
            commonErrors: [
              "Assuming any syncopation automatically makes a pattern good.",
            ],
          },
        },
        {
          id: "music-u1-notation-skills-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why reading the rhythm before the pitches improves sight-reading performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythm-first reading", statement: "Rhythmic structure is the framework; pitches fill it in." },
            ],
            steps: [
              { reasoning: "Rhythm determines timing — getting it right keeps the pulse secure.", marks: 1, markCode: "M" },
              { reasoning: "Once rhythm is internalised, pitches can be read without losing the beat.", marks: 1, markCode: "M" },
              { reasoning: "This prevents the common error of correct notes in wrong rhythm.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: rhythm-first reading builds fluent, accurate sight-reading.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reading rhythm first secures the pulse so pitches can be placed accurately.",
            commonErrors: [
              "Trying to read pitch and rhythm simultaneously at slow speed.",
            ],
          },
        },
      ],
    },
  ],
};
