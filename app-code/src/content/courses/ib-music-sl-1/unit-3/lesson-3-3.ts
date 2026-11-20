import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "music-u3-lesson-3-3",
  code: "3-3",
  title: "Arranging and Producing Music",
  goal: "I CAN arrange existing music for different instruments and apply production techniques to enhance recordings.",
  standards: [
    "Composition",
    "Production",
  ],
  vocabulary: [
    { term: "Arrangement", definition: "The adaptation of a piece for different instruments or forces while preserving its essence." },
    { term: "Orchestration", definition: "The assignment of musical parts to specific instruments in an ensemble." },
    { term: "Production", definition: "The process of recording, mixing and mastering music for release." },
    { term: "Mixing", definition: "Balancing and processing individual tracks to create a cohesive recording." },
    { term: "Mastering", definition: "Final processing of a mixed recording for distribution — loudness, EQ, compression." },
    { term: "Transcription", definition: "Writing out music by ear — converting audio to notation." },
  ],
  concepts: [
    {
      id: "music-u3-arranging",
      title: "Arranging for different forces",
      skill: "Adapt musical material for different instrument combinations while preserving its character and intent.",
      lesson: {
        sections: [
          {
            heading: "What arranging involves",
            body: "Arranging takes existing music and re-voices it for different forces: piano piece to orchestra, song to string quartet, solo to ensemble. The arranger must preserve the melody and harmony's essence while exploiting the new instruments' characteristics — their range, timbre and technical capabilities.",
          },
          {
            heading: "Orchestration choices",
            body: "Each instrument has a 'voice': strings are smooth and sustained; woodwinds are reedy and agile; brass are powerful and brilliant; percussion is rhythmic and textural. Effective orchestration assigns parts that suit each instrument's character — don't give a rapid passage to a heavy brass instrument that can't articulate it.",
          },
          {
            heading: "Preserving intent",
            body: "The best arrangements feel inevitable — as if the music was always meant for those instruments. Changes should serve the music, not show off the arranger. When in doubt, simplify: a clear melody with appropriate accompaniment beats a complex arrangement that obscures the original.",
          },
        ],
        keyFormulas: [
          { name: "Arrangement principle", statement: "Preserve melody + harmony essence; exploit new instruments' characters" },
          { name: "Orchestration", statement: "Assign parts that suit each instrument's range, timbre and technique" },
        ],
        workedExample: {
          problem: "A student must arrange a piano melody for flute and guitar. What should they consider?",
          solution: "Flute plays the melody — its agility suits flowing lines but not huge leaps or very low notes. Guitar provides harmony and rhythm — use arpeggiated chords or strummed patterns that complement without competing. Simplify piano's thick texture into two clear parts: melody + accompaniment.",
        },
      },
      questions: [
        {
          id: "music-u3-arranging-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Orchestration refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the melody" },
              { id: "b", text: "Assigning musical parts to specific instruments" },
              { id: "c", text: "Recording the final mix" },
              { id: "d", text: "Composing a new piece" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Orchestration", statement: "The assignment of musical parts to specific instruments in an ensemble." },
            ],
            steps: [
              { reasoning: "Orchestration assigns parts to instruments based on their characteristics.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Assigning musical parts to specific instruments",
            commonErrors: [
              "Confusing orchestration with composition or production.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two considerations when arranging a piece for different instruments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Arranging considerations", statement: "Preserve melody/harmony essence; suit parts to instrument characteristics." },
            ],
            steps: [
              { reasoning: "Preserve the melody and harmonic essence of the original.", marks: 1, markCode: "M" },
              { reasoning: "Assign parts that suit each instrument's range, timbre and technique.", marks: 1, markCode: "M" },
              { reasoning: "Simplify textures that the new forces cannot reproduce.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Preserve essence, suit parts to instruments, simplify textures.",
            commonErrors: [
              "Changing the melody or harmony so much the original is unrecognisable.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why effective arrangement should feel 'inevitable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inevitable arrangement", statement: "The best arrangements make music sound as if always meant for those instruments." },
            ],
            steps: [
              { reasoning: "Inevitable arrangements exploit each instrument's natural strengths.", marks: 1, markCode: "M" },
              { reasoning: "They preserve the original's character while enhancing it through new timbres.", marks: 1, markCode: "M" },
              { reasoning: "Arrangements that feel forced draw attention to themselves rather than the music.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the test is whether the arrangement serves the music, not the arranger's ego.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inevitable arrangements serve the music through natural instrument choices.",
            commonErrors: [
              "Creating arrangements that showcase technique rather than serve the music.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate an arrangement approach for a described piece.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating arrangement", statement: "Assess melody preservation, instrument suitability and texture clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. melody preserved, parts suit instruments, texture clear.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. melody obscured, parts don't suit instruments, texture muddy — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with arrangement effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests redistributing parts, simplifying texture, highlighting melody.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate arrangement by melody preservation, instrument suitability and texture clarity.",
            commonErrors: [
              "Judging arrangement only by complexity, not effectiveness.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Re-voicing a piano piece for a string quartet is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Composing a new piece" },
              { id: "b", text: "Arranging" },
              { id: "c", text: "Mastering" },
              { id: "d", text: "Transcribing by ear" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arranging", statement: "Adapting existing music for different instruments or forces." },
            ],
            steps: [
              { reasoning: "Changing the performing forces of existing music is arranging.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Arranging",
            commonErrors: [
              "Confusing arranging (adapt existing music) with composing (new music).",
            ],
          },
        },
        {
          id: "music-u3-arranging-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When arranging an existing piece, which element should generally be preserved?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The exact piano texture" },
              { id: "b", text: "The melody and harmonic essence" },
              { id: "c", text: "The original tempo only" },
              { id: "d", text: "The original instruments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arrangement fidelity", statement: "Good arrangements preserve the melody and harmony's essence while changing forces." },
            ],
            steps: [
              { reasoning: "The melody and harmonic essence define the piece's identity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The melody and harmonic essence",
            commonErrors: [
              "Changing the melody so much the original is unrecognisable.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Brass instruments are generally best suited to parts requiring:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Delicate, rapid ornamentation" },
              { id: "b", text: "Power, brilliance and sustained force" },
              { id: "c", text: "Whisper-quiet passages" },
              { id: "d", text: "Extremely high register only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Brass character", statement: "Brass instruments produce powerful, brilliant, sustained tones — suited to bold lines." },
            ],
            steps: [
              { reasoning: "Brass strengths are power, brilliance and sustained force.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Power, brilliance and sustained force",
            commonErrors: [
              "Giving rapid, intricate passages to instruments that cannot articulate them.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two instrument characteristics an arranger must consider when assigning parts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Orchestration considerations", statement: "Range, timbre and technical capability determine suitable parts." },
            ],
            steps: [
              { reasoning: "Range — the part must fit within the instrument's playable register.", marks: 1, markCode: "M" },
              { reasoning: "Timbre — the instrument's tone colour should suit the musical character.", marks: 1, markCode: "M" },
              { reasoning: "Technique — the part must be physically playable on that instrument.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Range, timbre and technical capability guide part assignment.",
            commonErrors: [
              "Assigning parts without checking the instrument's limits.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how an arranger should simplify texture when reducing a piece for fewer instruments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Texture simplification", statement: "Fewer forces cannot reproduce dense textures — reduce to essential lines." },
            ],
            steps: [
              { reasoning: "Identify the essential elements — melody and harmonic foundation.", marks: 1, markCode: "M" },
              { reasoning: "Merge or omit inner voices that the reduced forces cannot cover.", marks: 1, markCode: "M" },
              { reasoning: "Ensure each remaining part is clear and playable.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clarity beats completeness in a smaller arrangement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reduce texture to melody plus essential accompaniment for clarity.",
            commonErrors: [
              "Trying to reproduce every original part and ending with a muddy result.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Transcription in music refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording a performance" },
              { id: "b", text: "Writing out music by ear into notation" },
              { id: "c", text: "Arranging for orchestra" },
              { id: "d", text: "Mastering a recording" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Transcription", statement: "Converting heard music into written notation." },
            ],
            steps: [
              { reasoning: "Transcription is writing music out by ear.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Writing out music by ear into notation",
            commonErrors: [
              "Confusing transcription with arranging or recording.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why woodwinds often suit agile, rapid passages better than heavy brass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Instrument agility", statement: "Woodwinds articulate quickly and lightly; heavy brass is slower and more forceful." },
            ],
            steps: [
              { reasoning: "Woodwinds have fast articulation and light response — suited to rapid figures.", marks: 1, markCode: "M" },
              { reasoning: "Heavy brass produces powerful sustained sound but articulates less nimbly.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: match passage character to instrument capability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Woodwind agility suits rapid passages; brass suits power and sustain.",
            commonErrors: [
              "Assigning parts for effect rather than playability.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what makes an arrangement feel 'inevitable' rather than forced.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inevitable arrangement", statement: "Parts should seem naturally suited to their instruments and the music's character." },
            ],
            steps: [
              { reasoning: "Each part exploits its instrument's natural strengths — range, timbre, technique.", marks: 1, markCode: "M" },
              { reasoning: "The arrangement preserves the original's character while enhancing it.", marks: 1, markCode: "M" },
              { reasoning: "Forced arrangements draw attention to themselves and feel arbitrary.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the test is whether the music, not the arranger, is served.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Inevitable arrangements make every part feel naturally suited to its instrument.",
            commonErrors: [
              "Judging arrangements by novelty rather than appropriateness.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When arranging for a smaller ensemble, the arranger should generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Add as many parts as possible" },
              { id: "b", text: "Simplify texture to keep parts clear" },
              { id: "c", text: "Change the melody completely" },
              { id: "d", text: "Ignore instrument ranges" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Arrangement for small forces", statement: "Reduced forces require simplified, clear textures." },
            ],
            steps: [
              { reasoning: "Fewer instruments cannot cover dense textures — simplify to essentials.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Simplify texture to keep parts clear",
            commonErrors: [
              "Trying to reproduce every original part and ending muddy.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A good arrangement should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Showcase the arranger's technical skill" },
              { id: "b", text: "Serve the music and preserve its essence" },
              { id: "c", text: "Be as complex as possible" },
              { id: "d", text: "Change the original beyond recognition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Arrangement purpose", statement: "Arrangements serve the music, not the arranger's ego." },
            ],
            steps: [
              { reasoning: "The best arrangements enhance the music through appropriate choices.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Serve the music and preserve its essence",
            commonErrors: [
              "Equating complexity or novelty with quality.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student arranges a song for flute, guitar and cello. The flute plays the melody, the guitar strums chords, and the cello doubles the melody an octave lower.",
          parts: [
            { label: "a", prompt: "Identify two strengths of this arrangement.", marks: 2 },
            { label: "b", prompt: "Identify one weakness and explain its effect.", marks: 2 },
            { label: "c", prompt: "Suggest one improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating arrangement", statement: "Assess melody clarity, part suitability and texture balance." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths: clear melody assignment, suitable instruments, balanced texture.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weakness: cello doubling melody may thicken or compete with flute.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Effect explained — reduced clarity or muddy texture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Improvement: give cello a harmonic or bass role instead of doubling.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Clear roles and suitable instruments. (b) Doubling may muddy melody. (c) Give cello harmonic role.",
            commonErrors: [
              "Judging only by instrumentation, not by clarity of roles.",
            ],
          },
        },
        {
          id: "music-u3-arranging-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suggest and justify three orchestration choices for arranging a song for flute, guitar and cello.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Orchestration planning", statement: "Assign roles that exploit each instrument's strengths." },
            ],
            steps: [
              { reasoning: "Flute takes the melody — agile and bright, suits vocal-like lines.", marks: 1, markCode: "M" },
              { reasoning: "Guitar provides harmony and rhythm — chords or arpeggios complement without competing.", marks: 1, markCode: "M" },
              { reasoning: "Cello covers the bass or adds sustained counter-lines — its low register and warmth suit foundation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clear role distribution produces a balanced arrangement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Flute melody, guitar harmony/rhythm, cello bass — roles matched to instrument strengths.",
            commonErrors: [
              "Assigning all instruments the same role, creating imbalance.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u3-production",
      title: "Recording and production",
      skill: "Apply production techniques — recording, mixing and mastering — to create polished musical recordings.",
      lesson: {
        sections: [
          {
            heading: "Recording process",
            body: "Recording captures performances: **multitracking** records parts separately for later mixing; **overdubbing** adds layers; **live recording** captures ensemble together. Microphone choice and placement affect sound — close miking gives detail, distant miking gives ambience. The recording stage captures; the mixing stage shapes.",
          },
          {
            heading: "Mixing",
            body: "**Mixing** balances and processes individual tracks: set levels so all parts are heard; pan instruments for stereo width; add EQ to clarify frequencies; use reverb and delay for space; compress to control dynamics. A good mix is transparent — you hear the performance, not the processing. The goal is clarity and impact, not effects for their own sake.",
          },
          {
            heading: "Mastering",
            body: "**Mastering** is final processing for distribution: overall EQ, compression, loudness normalisation. It's the last quality check — a good master makes the recording sound polished and competitive. Mastering should enhance, not disguise: excessive processing creates 'warped' recordings that fatigue listeners.",
          },
        ],
        keyFormulas: [
          { name: "Production stages", statement: "Recording → mixing → mastering = production chain" },
          { name: "Mixing tools", statement: "Levels + panning + EQ + reverb + compression" },
        ],
        workedExample: {
          problem: "A student records a song but the vocals are buried under instruments. What mixing adjustments help?",
          solution: "Raise vocal level; use EQ to cut frequencies in instruments that mask the vocal range; add slight compression to vocals for consistency; reduce reverb on vocals or increase on instruments to create separation. The goal is vocal clarity without making instruments disappear.",
        },
      },
      questions: [
        {
          id: "music-u3-production-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Mixing in music production primarily involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing the song" },
              { id: "b", text: "Balancing and processing individual tracks" },
              { id: "c", text: "Composing melodies" },
              { id: "d", text: "Booking studio time" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mixing", statement: "Balancing and processing tracks to create a cohesive recording." },
            ],
            steps: [
              { reasoning: "Mixing balances levels, panning, EQ and effects across recorded tracks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Balancing and processing individual tracks",
            commonErrors: [
              "Confusing mixing (balancing tracks) with mastering (final processing).",
            ],
          },
        },
        {
          id: "music-u3-production-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three tools a mixer uses to shape a recording.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mixing tools", statement: "Levels, panning, EQ, reverb and compression shape the mix." },
            ],
            steps: [
              { reasoning: "Levels — balance track volumes so all parts are heard.", marks: 1, markCode: "M" },
              { reasoning: "Panning — position instruments left/right for stereo width.", marks: 1, markCode: "M" },
              { reasoning: "EQ and reverb — shape frequencies and add space; compression controls dynamics.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Levels, panning, EQ/reverb and compression are core mixing tools.",
            commonErrors: [
              "Overusing effects rather than serving the music.",
            ],
          },
        },
        {
          id: "music-u3-production-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between mixing and mastering.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mix vs master", statement: "Mixing balances individual tracks; mastering processes the final stereo mix." },
            ],
            steps: [
              { reasoning: "Mixing works on individual tracks — levels, panning, EQ per instrument.", marks: 1, markCode: "M" },
              { reasoning: "Mastering works on the final stereo mix — overall EQ, loudness, final polish.", marks: 1, markCode: "M" },
              { reasoning: "Mixing shapes the performance; mastering prepares it for distribution.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: mixing is creative; mastering is technical finalisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mixing balances tracks; mastering processes the final mix for release.",
            commonErrors: [
              "Treating mixing and mastering as the same process.",
            ],
          },
        },
        {
          id: "music-u3-production-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a described recording's production quality.",
          parts: [
            { label: "a", prompt: "Identify two production strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating production", statement: "Assess balance, clarity, dynamics and overall polish." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. good balance, clear vocals, appropriate effects.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. muddy mix, over-compressed, vocals buried — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with listening effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests rebalancing, reducing effects, improving EQ separation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete production improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate production by balance, clarity, dynamics and polish.",
            commonErrors: [
              "Judging production by loudness alone rather than balance and clarity.",
            ],
          },
        },
        {
          id: "music-u3-production-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Multitracking in recording refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording all parts live in one take" },
              { id: "b", text: "Recording parts separately for later mixing" },
              { id: "c", text: "Writing the song's melody" },
              { id: "d", text: "Mastering the final mix" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multitracking", statement: "Recording each part separately so they can be balanced and processed later." },
            ],
            steps: [
              { reasoning: "Multitracking captures parts on separate tracks for mixing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Recording parts separately for later mixing",
            commonErrors: [
              "Confusing multitracking with live ensemble recording.",
            ],
          },
        },
        {
          id: "music-u3-production-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Mastering in music production is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording the first take" },
              { id: "b", text: "Balancing individual tracks" },
              { id: "c", text: "Final processing of the stereo mix for distribution" },
              { id: "d", text: "Writing chord progressions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mastering", statement: "Final EQ, compression and loudness processing of the completed mix." },
            ],
            steps: [
              { reasoning: "Mastering is the last stage — processing the finished stereo mix.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Final processing of the stereo mix for distribution",
            commonErrors: [
              "Confusing mastering (final stereo processing) with mixing (track balancing).",
            ],
          },
        },
        {
          id: "music-u3-production-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Panning in a mix controls:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The volume of each track" },
              { id: "b", text: "The left-right placement of instruments for stereo width" },
              { id: "c", text: "The speed of the song" },
              { id: "d", text: "The pitch of instruments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Panning", statement: "Positioning a track in the stereo field — left, centre or right." },
            ],
            steps: [
              { reasoning: "Panning places instruments across the stereo image for width and separation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The left-right placement of instruments for stereo width",
            commonErrors: [
              "Confusing panning (stereo placement) with level balancing (volume).",
            ],
          },
        },
        {
          id: "music-u3-production-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two effects microphone placement can have on a recording.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Microphone placement", statement: "Close miking gives detail; distant miking gives ambience and room sound." },
            ],
            steps: [
              { reasoning: "Close miking captures detail and reduces room ambience — intimate, dry sound.", marks: 1, markCode: "M" },
              { reasoning: "Distant miking captures more room — spacious, ambient sound.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: placement is a creative choice shaping the recording's character.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Close miking = detail; distant miking = ambience.",
            commonErrors: [
              "Treating microphone placement as purely technical rather than expressive.",
            ],
          },
        },
        {
          id: "music-u3-production-q9",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how EQ can fix a 'muddy' mix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "EQ for clarity", statement: "Cutting or reducing frequencies that clash creates separation and clarity." },
            ],
            steps: [
              { reasoning: "Muddiness comes from instruments competing in the same low-mid frequencies.", marks: 1, markCode: "M" },
              { reasoning: "EQ can cut those frequencies on some tracks, creating space.", marks: 1, markCode: "M" },
              { reasoning: "Boosting complementary frequencies on other tracks adds separation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: EQ sculpts frequency space so each part is heard clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "EQ cuts clashing frequencies to create space and clarity in a muddy mix.",
            commonErrors: [
              "Boosting everything instead of carving out space.",
            ],
          },
        },
        {
          id: "music-u3-production-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Compression in mixing is primarily used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make the track louder overall" },
              { id: "b", text: "Control dynamic range — reducing the gap between loud and quiet" },
              { id: "c", text: "Add stereo width" },
              { id: "d", text: "Change the key" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Compression", statement: "Reducing dynamic range so quiet parts are raised relative to loud parts." },
            ],
            steps: [
              { reasoning: "Compression narrows the loud-quiet gap for consistency.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Control dynamic range — reducing the gap between loud and quiet",
            commonErrors: [
              "Confusing compression (dynamic control) with simply turning up volume.",
            ],
          },
        },
        {
          id: "music-u3-production-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the purpose of reverb in a mix.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reverb", statement: "Simulated room ambience that places instruments in a shared acoustic space." },
            ],
            steps: [
              { reasoning: "Reverb adds simulated reflections, creating a sense of space.", marks: 1, markCode: "M" },
              { reasoning: "It helps instruments sit together cohesively in a virtual room.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: reverb glues the mix together spatially.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reverb creates shared space and cohesion across tracks.",
            commonErrors: [
              "Overusing reverb so parts lose definition.",
            ],
          },
        },
        {
          id: "music-u3-production-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a 'transparent' mix is usually the goal in music production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transparent mixing", statement: "A good mix lets the performance be heard without noticing the processing." },
            ],
            steps: [
              { reasoning: "Listeners should hear the music, not the effects or processing.", marks: 1, markCode: "M" },
              { reasoning: "Heavy-handed processing distracts and dates the recording quickly.", marks: 1, markCode: "M" },
              { reasoning: "Transparency preserves the performance's natural dynamics and tone.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: subtle, purposeful processing serves the music best.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transparent mixes serve the performance; obvious processing distracts.",
            commonErrors: [
              "Believing more effects automatically mean a better production.",
            ],
          },
        },
        {
          id: "music-u3-production-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A live recording captures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole ensemble performing together in one take" },
              { id: "b", text: "Each instrument separately" },
              { id: "c", text: "Only the vocals" },
              { id: "d", text: "The final mastered mix" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Live recording", statement: "Capturing all performers simultaneously in a single performance." },
            ],
            steps: [
              { reasoning: "Live recording captures the ensemble together — the opposite of multitracking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The whole ensemble performing together in one take",
            commonErrors: [
              "Confusing live recording with overdubbing or multitracking.",
            ],
          },
        },
        {
          id: "music-u3-production-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Overdubbing in recording involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recording the final mix" },
              { id: "b", text: "Adding new layers or parts to an existing recording" },
              { id: "c", text: "Changing the tempo" },
              { id: "d", text: "Writing the lyrics" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Overdubbing", statement: "Recording additional parts over an existing track to build layers." },
            ],
            steps: [
              { reasoning: "Overdubbing adds layers — harmonies, doubles, instruments — onto existing takes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adding new layers or parts to an existing recording",
            commonErrors: [
              "Confusing overdubbing with simple multitracking.",
            ],
          },
        },
        {
          id: "music-u3-production-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A recorded song has clear vocals but the drums are too loud and harsh, and the whole mix sounds flat with everything in the centre.",
          parts: [
            { label: "a", prompt: "Identify two production problems.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each problem on the listener.", marks: 2 },
            { label: "c", prompt: "Suggest two mixing adjustments.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Diagnosing mix problems", statement: "Identify balance and spatial issues and prescribe corrections." },
            ],
            steps: [
              { part: "a", reasoning: "Problems: drums overpowering; no stereo width (everything centred).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both problems identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Loud drums mask vocals; centred mix sounds narrow and lifeless.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Listener effects convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Adjustments: reduce drum level/EQ harshness; pan instruments for width.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete adjustments suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Drum balance + no stereo width. (b) Masks vocals, sounds flat. (c) Reduce drums, pan instruments.",
            commonErrors: [
              "Suggesting fixes without identifying the underlying problems.",
            ],
          },
        },
        {
          id: "music-u3-production-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suggest and justify three mixing adjustments for a song where drums overpower the vocals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mixing problem-solving", statement: "Balance, EQ and compression can restore vocal clarity." },
            ],
            steps: [
              { reasoning: "Reduce drum level or use EQ to cut frequencies that mask the vocal range.", marks: 1, markCode: "M" },
              { reasoning: "Raise vocal level slightly and add gentle compression for consistency.", marks: 1, markCode: "M" },
              { reasoning: "Reduce reverb on drums or increase separation between vocal and drum frequencies.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clarity comes from balance and frequency separation, not just volume.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower drums/EQ, raise vocals/compress, separate frequencies for clarity.",
            commonErrors: [
              "Only turning vocals up without addressing frequency masking.",
            ],
          },
        },
      ],
    },
  ],
};
