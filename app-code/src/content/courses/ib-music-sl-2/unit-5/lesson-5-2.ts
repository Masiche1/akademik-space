import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "music-u5-lesson-5-2",
  code: "5-2",
  title: "Identifying Musical Elements",
  goal: "I CAN identify and describe specific musical elements — melody, harmony, rhythm, form, texture — in heard music.",
  standards: [
    "Aural Skills",
    "Analysis",
  ],
  vocabulary: [
    { term: "Melody", definition: "The primary musical line — the tune." },
    { term: "Harmony", definition: "The combination of pitches sounding simultaneously." },
    { term: "Rhythm", definition: "The organisation of sounds in time." },
    { term: "Form", definition: "The structural organisation of a piece." },
    { term: "Texture", definition: "The relationship between melodic lines." },
    { term: "Cadence", definition: "A chord progression that signals a phrase or section ending." },
  ],
  concepts: [
    {
      id: "music-u5-element-identification",
      title: "Systematic element identification",
      skill: "Identify specific musical elements systematically — melody, harmony, rhythm, form, texture — in heard music.",
      lesson: {
        sections: [
          {
            heading: "Melody identification",
            body: "Identify the main tune: is there a clear melody or is the music more textural? What's the melodic range — narrow or wide? Does the melody repeat or develop? Is it stepwise or leapy? Can you sing it back? The melody is usually the most memorable element.",
          },
          {
            heading: "Harmony and rhythm",
            body: "Harmony: is it consonant (pleasant, stable) or dissonant (tense, unstable)? Major or minor feel? Rhythm: is it regular or syncopated? Fast or slow? Does the rhythm drive or accompany? These elements create the music's character.",
          },
          {
            heading: "Form and texture",
            body: "Form: can you identify sections? Do they repeat? Is there a climax? Texture: how many independent lines? These structural elements reveal how the composer organised the music. A piece might have simple melody but complex polyphonic texture — or vice versa.",
          },
        ],
        keyFormulas: [
          { name: "Element checklist", statement: "Melody + harmony + rhythm + form + texture = complete analysis" },
          { name: "Listening order", statement: "Melody first, then harmony/rhythm, then form/texture" },
        ],
        workedExample: {
          problem: "A student hears a piece and identifies 'nice melody' but nothing else. What should they listen for next?",
          solution: "Harmony: is it major or minor? Consonant or dissonant? Rhythm: what's the pulse? Syncopated or straight? Texture: how many parts? Form: can you identify sections? Each element adds to the analysis.",
        },
      },
      questions: [
        {
          id: "music-u5-element-identification-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When identifying harmony in music, 'consonant' harmony sounds:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very fast" },
              { id: "b", text: "Tense and unstable" },
              { id: "c", text: "Pleasant and stable" },
              { id: "d", text: "Very loud" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Consonance", statement: "Harmony that sounds stable and pleasant to the ear." },
            ],
            steps: [
              { reasoning: "Consonant harmony sounds stable and pleasant; dissonant sounds tense.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Pleasant and stable",
            commonErrors: [
              "Confusing consonant (stable) with dissonant (tense).",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how to identify melody, harmony and rhythm in a piece of music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Element identification", statement: "Melody = main tune; harmony = simultaneous pitches; rhythm = time organisation." },
            ],
            steps: [
              { reasoning: "Melody: identify the main tune — sing or hum it back.", marks: 1, markCode: "M" },
              { reasoning: "Harmony: listen for chordal support — major/minor, consonant/dissonant.", marks: 1, markCode: "M" },
              { reasoning: "Rhythm: tap the pulse — identify metre, tempo, syncopation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Melody by singing, harmony by chord quality, rhythm by tapping pulse.",
            commonErrors: [
              "Identifying only one element and ignoring others.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why identifying form requires multiple listens.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form identification", statement: "Structure reveals itself through repetition and contrast across the whole piece." },
            ],
            steps: [
              { reasoning: "Form requires hearing the whole piece to identify repetitions and contrasts.", marks: 1, markCode: "M" },
              { reasoning: "First listen gives impression; later listens reveal structural patterns.", marks: 1, markCode: "M" },
              { reasoning: "Section boundaries become clear only when comparing beginning, middle and end.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: form analysis requires temporal perspective — the whole, not just parts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form identification requires hearing the whole piece across multiple listens.",
            commonErrors: [
              "Expecting to identify form from a single short excerpt.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse a student's element identification for a described piece.",
          parts: [
            { label: "a", prompt: "Identify two elements correctly identified.", marks: 2 },
            { label: "b", prompt: "Identify two elements missed or misidentified.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve identification.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Element identification", statement: "Assess accuracy across melody, harmony, rhythm, texture and form." },
            ],
            steps: [
              { part: "a", reasoning: "Correctly identified elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Missed/misidentified elements.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two missed elements correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests systematic listening, focusing on each element separately, multiple passes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement strategies suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate identification by accuracy across all elements and systematic approach.",
            commonErrors: [
              "Identifying some elements while ignoring others.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In musical analysis, the melody is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The percussion pattern" },
              { id: "b", text: "The primary melodic line or tune" },
              { id: "c", text: "The loudest sound in the piece" },
              { id: "d", text: "The chord progression" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melody", statement: "The principal pitched line that carries the tune." },
            ],
            steps: [
              { reasoning: "Melody is the main line the listener is most likely to remember and sing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The primary melodic line or tune",
            commonErrors: [
              "Confusing melody with harmony or rhythm.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe three features to listen for when identifying a melody.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Melodic features", statement: "Contour, range and repetition reveal how a melody is organised." },
            ],
            steps: [
              { reasoning: "Listen for contour to decide whether the tune rises, falls or moves by steps.", marks: 1, markCode: "M" },
              { reasoning: "Judge the range to see whether the melody is narrow or wide.", marks: 1, markCode: "M" },
              { reasoning: "Check whether phrases repeat exactly or are varied and developed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contour, range and repetition are key melodic features.",
            commonErrors: [
              "Identifying only the first note of the tune.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain how a listener can describe the quality of harmony in a piece.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Harmony", statement: "Harmony is the combination of simultaneous pitches and may be consonant, dissonant, major or minor." },
            ],
            steps: [
              { reasoning: "Consonant harmony sounds stable and resolved; dissonant harmony creates tension.", marks: 1, markCode: "M" },
              { reasoning: "Major harmony often feels brighter or more settled, while minor harmony can feel darker.", marks: 1, markCode: "M" },
              { reasoning: "The listener should note whether tension resolves or is sustained.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: harmonic description combines stability, brightness and tension.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe harmony by consonance, dissonance, major or minor quality and tension resolution.",
            commonErrors: [
              "Naming a key without describing the heard effect.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Form in music is most directly identified by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repetitions, contrasts and the organisation of sections" },
              { id: "b", text: "The number of instruments only" },
              { id: "c", text: "The volume of the climax" },
              { id: "d", text: "The singer's age" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Form", statement: "The structural organisation created by repeated and contrasting sections." },
            ],
            steps: [
              { reasoning: "Form concerns how sections relate through repetition and contrast.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Repetitions, contrasts and the organisation of sections",
            commonErrors: [
              "Treating instrumentation or dynamics as the definition of form.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cadence is most useful for identifying:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The highest note" },
              { id: "b", text: "The first instrument to enter" },
              { id: "c", text: "A phrase or section ending" },
              { id: "d", text: "The fastest tempo" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cadence", statement: "A harmonic progression that creates closure at a phrase or section boundary." },
            ],
            steps: [
              { reasoning: "Cadences signal arrival and are reliable markers of structural boundaries.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A phrase or section ending",
            commonErrors: [
              "Assuming every loud moment is a cadence.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a listener can describe whether a texture is thick or thin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Texture density", statement: "Density depends on the number and independence of simultaneous lines." },
            ],
            steps: [
              { reasoning: "A thin texture has few lines or a clear melody with simple accompaniment.", marks: 1, markCode: "M" },
              { reasoning: "A thick texture contains many voices, instruments or dense harmony.", marks: 1, markCode: "M" },
              { reasoning: "The listener should distinguish many sounds from many independent melodic lines.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: texture density describes the density of musical lines, not merely loudness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe texture as thick or thin by counting and assessing independent lines.",
            commonErrors: [
              "Equating loudness with thick texture.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A described piece begins with solo piano, adds strings halfway through and ends with a loud full ensemble cadence.",
          parts: [
            { label: "a", prompt: "Identify two elements that change during the piece.", marks: 2 },
            { label: "b", prompt: "Explain the likely effect of each change.", marks: 2 },
            { label: "c", prompt: "Suggest how to verify whether the ending is a new section or a climax.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tracking element changes", statement: "Element identification improves when changes in texture, dynamics and form are tracked together." },
            ],
            steps: [
              { part: "a", reasoning: "Texture changes from solo piano to piano plus strings and later a full ensemble.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dynamics change from intimate to loud at the ending.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Adding instruments thickens the texture and increases sonic weight.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The loud cadence creates closure or climax depending on whether new material follows.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Listen after the cadence to see whether the music stops or begins another section.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare the ending material with the opening to test whether it is a climax or a new section.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Texture and dynamics build toward a cadential climax or structural transition.",
            commonErrors: [
              "Assuming a loud ending must always be the final section.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rhythm is said to \"drive\" the music when it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Creates forward momentum and shapes the energy" },
              { id: "b", text: "Disappears behind the melody" },
              { id: "c", text: "Uses only long notes" },
              { id: "d", text: "Is very quiet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythmic drive", statement: "Rhythm can create momentum through pulse, repetition and accent." },
            ],
            steps: [
              { reasoning: "A driving rhythm propels the music forward and supports its energy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Creates forward momentum and shapes the energy",
            commonErrors: [
              "Confusing rhythmic drive with tempo alone.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the most reliable evidence that a new section has begun?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One instrument playing a high note" },
              { id: "b", text: "The audience applauding" },
              { id: "c", text: "A new combination of sustained material, cadence and changed character" },
              { id: "d", text: "A single sudden dynamic accent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Section evidence", statement: "Section boundaries are supported by closure, sustained change and new organisation." },
            ],
            steps: [
              { reasoning: "A boundary is confirmed by several converging structural signals.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A new combination of sustained material, cadence and changed character",
            commonErrors: [
              "Using one isolated event as proof of a section boundary.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When comparing a classical and a jazz piece, the analyst should expect jazz listening to emphasise:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fixed orchestral sections" },
              { id: "b", text: "Identical harmonic routines" },
              { id: "c", text: "Only written notation" },
              { id: "d", text: "Improvisation and interactive development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Jazz conventions", statement: "Jazz often privileges spontaneous development and interaction between players." },
            ],
            steps: [
              { reasoning: "Jazz analysis should attend to improvisation, call-and-response and player interaction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Improvisation and interactive development",
            commonErrors: [
              "Applying classical formal expectations without considering genre conventions.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "For a described piece with a repeated main tune, pulsing accompaniment, a slower middle section and a loud return, a student lists only \"nice tune, slow middle, loud ending.\" Evaluate the element identification.",
          parts: [
            { label: "a", prompt: "Identify three valid observations in the student's list.", marks: 3 },
            { label: "b", prompt: "Identify three missed elements and explain why each matters.", marks: 3 },
            { label: "c", prompt: "Suggest two systematic listening improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Systematic element identification", statement: "A complete response identifies melody, harmony, rhythm, texture and form with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "'Nice tune' gestures toward melody, though it lacks detail.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Slow middle' identifies a tempo or section contrast.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "'Loud ending' identifies a dynamic feature.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The repeated tune is not identified, so form is incomplete.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The pulsing accompaniment is ignored, leaving rhythm and texture unclear.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The return is not linked to the opening, missing evidence of repetition.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use a fixed checklist covering melody, harmony, rhythm, texture and form on each pass.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare the ending with the opening material to test for repetition or variation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The list notices melody, tempo and dynamics but lacks systematic form and texture evidence.",
            commonErrors: [
              "Rewarding evaluative adjectives without musical detail.",
            ],
          },
        },
        {
          id: "music-u5-element-identification-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Create a systematic identification plan for a described piece with a narrow melody, steady pulse, consonant harmony, two-part texture and an A-B-A return.",
          parts: [
            { label: "a", prompt: "Identify four elements to confirm first.", marks: 4 },
            { label: "b", prompt: "Explain how three elements would be verified aurally.", marks: 3 },
            { label: "c", prompt: "Describe how the findings should be ordered in written analysis.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Element checklist", statement: "Confirm melody, harmony, rhythm, texture and form systematically before evaluating." },
            ],
            steps: [
              { part: "a", reasoning: "Confirm the narrow melody by humming it and checking its contour.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Confirm the steady pulse by tapping beats and identifying metre.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Confirm consonant harmony by listening for stable versus tense simultaneities.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Confirm two-part texture by tracing whether the second line is independent or supportive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Melody is verified by singing back repeated phrases and checking contour.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rhythm is verified by tapping pulse and clapping repeated patterns.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Texture is verified by listening for independent movement in both lines.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Begin with objective description of melody, harmony, rhythm and texture.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Then explain how form is organised through the A-B-A return.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "End with evaluation only after the element evidence has been established.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Verify elements first, then relate them to form and evaluation.",
            commonErrors: [
              "Listing elements without explaining how each was identified.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u5-listening-practice",
      title: "Guided listening practice",
      skill: "Apply systematic listening to analyse full pieces across different genres and styles.",
      lesson: {
        sections: [
          {
            heading: "Genre-specific listening",
            body: "Different genres reward different listening: classical music — focus on form and orchestration; jazz — listen for improvisation and interaction; pop — focus on production and hooks; world music — attend to rhythm and timbre. Adapt your listening strategy to the genre's conventions.",
          },
          {
            heading: "Comparative listening",
            body: "Compare two pieces: same composer different works, same genre different artists, or different genres entirely. What stays constant? What changes? Comparative listening reveals what's essential to a style and what's individual to a work.",
          },
          {
            heading: "Building listening vocabulary",
            body: "Develop precise language: not 'nice' but 'lyrical melody over pulsing rhythm'; not 'loud' but 'fortissimo climax with brass fanfare'. Precise description demonstrates real listening — vague impressions suggest passive hearing.",
          },
        ],
        keyFormulas: [
          { name: "Genre listening", statement: "Classical = form; jazz = improvisation; pop = production; world = rhythm/timbre" },
          { name: "Precise language", statement: "Specific description demonstrates analytical listening" },
        ],
        workedExample: {
          problem: "A student must analyse a jazz piece. What should they listen for specifically?",
          solution: "Improvisation — which instruments solo and how do they develop ideas? Interaction — how do players respond to each other? Swing feel — is the rhythm lilting? Blues elements — blue notes, call-and-response? Harmonic complexity — extended chords, substitutions? Jazz rewards attention to spontaneous creation.",
        },
      },
      questions: [
        {
          id: "music-u5-listening-practice-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When listening to jazz, the most important element to identify is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improvisation and interaction between players" },
              { id: "b", text: "The conductor's gestures" },
              { id: "c", text: "The audience's reaction" },
              { id: "d", text: "The written score" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Jazz listening", statement: "Improvisation and player interaction are jazz's defining features." },
            ],
            steps: [
              { reasoning: "Jazz is defined by improvisation and interactive playing between musicians.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Improvisation and interaction between players",
            commonErrors: [
              "Applying classical listening strategies to jazz's improvisatory nature.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how listening strategy differs between classical and popular music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre listening", statement: "Classical rewards form/orchestration focus; pop rewards production/hook focus." },
            ],
            steps: [
              { reasoning: "Classical: focus on form, orchestration, harmonic development.", marks: 1, markCode: "M" },
              { reasoning: "Popular: focus on production, hooks, vocal delivery, beat.", marks: 1, markCode: "M" },
              { reasoning: "Both require attention to structure but different elements carry the meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Classical rewards structural focus; pop rewards production and hook awareness.",
            commonErrors: [
              "Using identical listening strategy regardless of genre conventions.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why precise descriptive language matters in musical analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical language", statement: "Specific description demonstrates real listening; vague language suggests passive hearing." },
            ],
            steps: [
              { reasoning: "'Nice melody' tells nothing; 'lyrical stepwise melody over pulsing eighth-note rhythm' demonstrates listening.", marks: 1, markCode: "M" },
              { reasoning: "Precise language forces the listener to identify specific elements.", marks: 1, markCode: "M" },
              { reasoning: "It allows others to verify and build on the analysis.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: vocabulary is evidence of analytical skill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Precise language demonstrates analytical listening and enables verification.",
            commonErrors: [
              "Using vague evaluative language instead of descriptive analysis.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's comparative listening of two described pieces.",
          parts: [
            { label: "a", prompt: "Identify two valid comparative observations.", marks: 2 },
            { label: "b", prompt: "Identify two missed comparisons or errors.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve comparative listening.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative listening", statement: "Assess identification of similarities, differences and significance." },
            ],
            steps: [
              { part: "a", reasoning: "Valid comparisons, e.g. tempo difference, instrumentation difference.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid comparisons correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Missed comparisons or errors, e.g. ignored harmonic difference, texture similarity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two missed/error points correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests systematic element-by-element comparison, noting both similarities and differences.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate comparative listening by observation accuracy and systematic approach.",
            commonErrors: [
              "Comparing pieces superficially without element-by-element analysis.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When analysing a classical orchestral work, the listener should especially attend to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Album artwork" },
              { id: "b", text: "Dance choreography" },
              { id: "c", text: "Only the lead singer" },
              { id: "d", text: "Form, orchestration and thematic development" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Classical listening", statement: "Classical repertoire often rewards attention to structure, orchestration and development." },
            ],
            steps: [
              { reasoning: "Classical analysis benefits from tracking form and instrumental organisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Form, orchestration and thematic development",
            commonErrors: [
              "Using a pop-song checklist for orchestral repertoire.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe two elements that are especially important when listening to world music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "World music listening", statement: "Many world music traditions foreground rhythm and instrumental colour." },
            ],
            steps: [
              { reasoning: "Attend to rhythmic patterns, pulse and percussion because they often organise the music.", marks: 1, markCode: "M" },
              { reasoning: "Attend to timbre and instrumentation because unusual instruments and vocal colours carry meaning.", marks: 1, markCode: "M" },
              { reasoning: "Contextual performance practice may matter as much as Western-style harmony or form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhythm and timbre are especially important in world music listening.",
            commonErrors: [
              "Forcing every tradition into the same Western analytical template.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain why a description such as \"pulsing strings under a reedy woodwind melody\" is stronger than \"nice music\".",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Precise description", statement: "Specific musical details demonstrate listening and can be checked by others." },
            ],
            steps: [
              { reasoning: "The precise version identifies instruments, timbre, texture and rhythmic character.", marks: 1, markCode: "M" },
              { reasoning: "'Nice music' gives an opinion but no observable musical evidence.", marks: 1, markCode: "M" },
              { reasoning: "Specific language allows another listener to test whether the description is accurate.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: precision turns impression into verifiable analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Specific detail proves listening; vague praise does not.",
            commonErrors: [
              "Using evaluative adjectives instead of descriptive evidence.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Comparative listening is used primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise song lyrics" },
              { id: "b", text: "Avoid analysing either piece" },
              { id: "c", text: "Identify similarities, differences and what they reveal about style" },
              { id: "d", text: "Choose the louder recording" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparative listening", statement: "Comparison clarifies conventions by contrasting shared and differing features." },
            ],
            steps: [
              { reasoning: "Comparison highlights what is typical of a style and what is distinctive to a work.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Identify similarities, differences and what they reveal about style",
            commonErrors: [
              "Comparing only preference rather than musical features.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "When analysing popular music, the listener should pay particular attention to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Production, hooks and vocal delivery" },
              { id: "b", text: "Baroque ornamentation" },
              { id: "c", text: "Only fugue entries" },
              { id: "d", text: "Unaccompanied chant" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Popular music listening", statement: "Pop analysis often centres on production, memorable hooks and vocal performance." },
            ],
            steps: [
              { reasoning: "Popular music is shaped by production choices, hooks and vocal character.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Production, hooks and vocal delivery",
            commonErrors: [
              "Ignoring genre-specific features of popular production.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how a listener should compare two pieces from different genres.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cross-genre comparison", statement: "Compare shared musical elements while respecting different genre conventions." },
            ],
            steps: [
              { reasoning: "Identify shared elements such as tempo, texture, dynamics and melodic shape.", marks: 1, markCode: "M" },
              { reasoning: "Note genre-specific differences such as improvisation, production or formal conventions.", marks: 1, markCode: "M" },
              { reasoning: "Avoid judging one piece by criteria designed for another genre.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: useful comparison respects conventions while still comparing evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare element by element while respecting genre conventions.",
            commonErrors: [
              "Treating genre differences as automatic superiority or inferiority.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student compares a slow classical excerpt and a fast pop song and writes: \"The pop song is better because it is faster and louder.\" Evaluate the comparison.",
          parts: [
            { label: "a", prompt: "Identify two valid comparative observations.", marks: 2 },
            { label: "b", prompt: "Identify two analytical weaknesses.", marks: 2 },
            { label: "c", prompt: "Suggest one improved comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating comparison", statement: "Strong comparison identifies evidence and interprets differences without genre bias." },
            ],
            steps: [
              { part: "a", reasoning: "The student notices a tempo difference between the pieces.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The student notices a dynamic or energy difference.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Using speed and loudness as proof of quality ignores genre purpose and effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "No other elements such as melody, texture, harmony, form or production are compared.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Compare the pieces element by element, then evaluate each on genre-appropriate criteria.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State whether differences create different expressive effects rather than simply ranking the songs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The comparison notices surface differences but fails to analyse musical elements or genre purpose.",
            commonErrors: [
              "Assuming faster and louder automatically means better.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In jazz, call-and-response is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written solo played without interaction" },
              { id: "b", text: "A fixed orchestral tutti" },
              { id: "c", text: "One musical idea answered or developed by another player" },
              { id: "d", text: "A silent pause in the music" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Call-and-response", statement: "A musical phrase presented by one voice and answered or developed by another." },
            ],
            steps: [
              { reasoning: "Call-and-response depends on interaction between players or phrases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** One musical idea answered or developed by another player",
            commonErrors: [
              "Missing interactive exchanges because only the soloist is noticed.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which listening strategy is most appropriate when the genre is unknown?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use a broad element checklist before applying genre-specific questions" },
              { id: "b", text: "Ignore harmony entirely" },
              { id: "c", text: "Judge only the first ten seconds" },
              { id: "d", text: "Assume it is classical music" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Adaptive listening", statement: "Begin with broad elements, identify likely conventions, then refine genre-specific questions." },
            ],
            steps: [
              { reasoning: "A broad checklist prevents premature assumptions when the genre is uncertain.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Use a broad element checklist before applying genre-specific questions",
            commonErrors: [
              "Letting an early guess about genre limit later observations.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which comparison is most superficial?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing texture and rhythmic drive" },
              { id: "b", text: "Comparing melodic contour and phrase length" },
              { id: "c", text: "Saying one song is better simply because it is louder" },
              { id: "d", text: "Comparing harmony and dynamic shape" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Depth of comparison", statement: "Meaningful comparison identifies musical elements rather than surface loudness." },
            ],
            steps: [
              { reasoning: "Loudness alone does not explain musical organisation or effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Saying one song is better simply because it is louder",
            commonErrors: [
              "Mistaking a single surface feature for comparative analysis.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "For two described pieces, one slow with strings and piano and one fast with drums and bass, a student writes: \"They are totally different. The first is calm, the second is energetic.\" Evaluate the comparative listening.",
          parts: [
            { label: "a", prompt: "Identify three valid observations.", marks: 3 },
            { label: "b", prompt: "Identify three missed comparisons and explain why each matters.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements to the comparison.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative listening evaluation", statement: "Strong comparison identifies precise element differences and interprets their effects." },
            ],
            steps: [
              { part: "a", reasoning: "The student recognises that the pieces have different tempos or energy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The student recognises different instrumentation: strings and piano versus drums and bass.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The student uses expressive labels such as calm and energetic.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Texture is not compared, so the role of melody and accompaniment remains unclear.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rhythm is only implied by tempo; metre, pulse and drive are not analysed.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Melody, harmony and form are ignored, making 'totally different' unsupported.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Create an element-by-element table covering tempo, rhythm, melody, harmony, texture and form.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explain how each difference changes the expressive effect of each piece.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The response notices broad contrasts but lacks systematic element comparison.",
            commonErrors: [
              "Stopping at mood labels without musical evidence.",
            ],
          },
        },
        {
          id: "music-u5-listening-practice-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan a guided listening session comparing a slow classical excerpt with a fast pop recording.",
          parts: [
            { label: "a", prompt: "Identify four musical elements to compare first.", marks: 4 },
            { label: "b", prompt: "Explain how three elements should be compared without genre bias.", marks: 3 },
            { label: "c", prompt: "Describe how the comparison should lead to evaluation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Guided comparison", statement: "A guided session isolates shared elements before interpreting genre-specific effects." },
            ],
            steps: [
              { part: "a", reasoning: "Compare tempo and rhythmic organisation first.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compare texture and instrumentation second.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compare melodic shape and harmonic colour third.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compare form or section organisation last.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use neutral descriptions such as slow-fast or thin-thick before assigning quality.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Consider genre conventions separately, such as orchestral development versus production and hooks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ask whether each difference serves the piece's expressive purpose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluation should judge each piece on its own terms after evidence is gathered.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude by explaining which musical effects each approach creates.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Avoid declaring one piece superior merely because it is louder, faster or more familiar.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Compare neutral evidence first, then evaluate each piece within its genre conventions.",
            commonErrors: [
              "Letting genre preference determine which elements are noticed.",
            ],
          },
        },
      ],
    },
  ],
};
