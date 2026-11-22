import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "music-u5-lesson-5-1",
  code: "5-1",
  title: "Analytical Listening Techniques",
  goal: "I CAN listen actively to identify structure, form, texture and expressive elements in music.",
  standards: [
    "Aural Skills",
    "Analysis",
  ],
  vocabulary: [
    { term: "Active listening", definition: "Deliberate, focused attention to musical elements rather than passive hearing." },
    { term: "Form", definition: "The structure of a piece — how sections are organised and repeated." },
    { term: "Texture", definition: "The relationship between melodic lines — monophonic, homophonic, polyphonic." },
    { term: "Timbre", definition: "The tonal quality or 'colour' of a sound." },
    { term: "Dynamics", definition: "The volume of music — loudness or softness." },
    { term: "Mood", definition: "The emotional quality a piece communicates." },
  ],
  concepts: [
    {
      id: "music-u5-active-listening",
      title: "Active listening strategies",
      skill: "Apply systematic listening strategies to identify form, texture, dynamics and expressive elements.",
      lesson: {
        sections: [
          {
            heading: "First impressions vs analysis",
            body: "First listen for overall impression: mood, genre, instrumentation. Second listen for structure: can you identify sections? Repetitions? Changes? Third listen for detail: specific instruments, harmonic shifts, rhythmic patterns. Each pass reveals more — analysis is layered listening.",
          },
          {
            heading: "Identifying structure",
            body: "Listen for formal markers: repeated sections (A-B-A), contrasting sections, climaxes, cadences. Hum or tap along to feel the pulse and phrase boundaries. Note when the music changes character — that's often a section boundary. Write down timestamps or bar numbers where changes occur.",
          },
          {
            heading: "Texture and timbre",
            body: "Identify how many lines you hear: one melody (monophonic), melody plus accompaniment (homophonic), or multiple independent lines (polyphonic). Identify instruments by timbre — the 'colour' of each sound. Is the texture thick or thin? Dense or sparse? These choices shape the listening experience.",
          },
        ],
        keyFormulas: [
          { name: "Listening passes", statement: "First = impression; second = structure; third = detail" },
          { name: "Structure markers", statement: "Repetition + contrast + climax + cadence = formal boundaries" },
        ],
        workedExample: {
          problem: "A student listens to a piece once and writes 'it was nice'. How should they improve their listening?",
          solution: "Listen again focusing on structure: can you identify repeated sections? Listen a third time for instruments and texture: how many parts? What instruments? What dynamics? Each pass should yield specific observations, not just impressions.",
        },
      },
      questions: [
        {
          id: "music-u5-active-listening-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Active listening differs from passive hearing because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires musical training" },
              { id: "b", text: "Lasts longer" },
              { id: "c", text: "Involves deliberate attention to musical elements" },
              { id: "d", text: "Uses better equipment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Active listening", statement: "Deliberate, focused attention to musical structure and elements." },
            ],
            steps: [
              { reasoning: "Active listening involves deliberate, systematic attention to musical elements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Involves deliberate attention to musical elements",
            commonErrors: [
              "Confusing active listening with simply hearing music longer.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the three-pass approach to analytical listening.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Listening passes", statement: "Impression, structure and detail each reveal different aspects." },
            ],
            steps: [
              { reasoning: "First pass: overall impression — mood, genre, instrumentation.", marks: 1, markCode: "M" },
              { reasoning: "Second pass: structure — sections, repetitions, changes.", marks: 1, markCode: "M" },
              { reasoning: "Third pass: detail — specific instruments, harmony, rhythm patterns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Impression → structure → detail: each pass reveals more.",
            commonErrors: [
              "Listening once and expecting complete analysis.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how identifying form helps a listener understand a piece.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form and understanding", statement: "Structure provides a map — expectation, development and resolution become audible." },
            ],
            steps: [
              { reasoning: "Form reveals the piece's architecture — how sections relate to each other.", marks: 1, markCode: "M" },
              { reasoning: "Recognising repetitions creates expectation; recognising changes creates surprise.", marks: 1, markCode: "M" },
              { reasoning: "Understanding form transforms listening from passive reception to active comprehension.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: form is the skeleton that makes music intelligible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Form provides structure that makes music comprehensible and engaging.",
            commonErrors: [
              "Listening without attending to structural organisation.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse a student's listening approach to a described piece.",
          parts: [
            { label: "a", prompt: "Identify two strengths in the approach.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating listening", statement: "Assess systematic attention, multiple passes and specific observation." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. multiple listens, notes observations, identifies instruments.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. only one listen, vague descriptions, no structural analysis — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with listening effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests multiple passes, structural markers, specific element identification.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate listening by systematic passes, specific observation and structural attention.",
            commonErrors: [
              "Judging listening by enjoyment rather than analytical depth.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "During the second listening pass, the listener's main focus should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeated sections, contrasts and structural changes" },
              { id: "b", text: "The composer's biography" },
              { id: "c", text: "The loudest instrument only" },
              { id: "d", text: "The emotional reaction alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Listening passes", statement: "The first pass gives an impression, the second identifies structure and the third develops detail." },
            ],
            steps: [
              { reasoning: "The second pass is designed to reveal the organisation of the piece.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Repeated sections, contrasts and structural changes",
            commonErrors: [
              "Using every pass for the same general impression.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe how a listener should record structural observations during the second pass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Structural notes", statement: "Useful listening notes identify time positions, repeated material and changes of character." },
            ],
            steps: [
              { reasoning: "Mark where sections begin, end or change using timestamps or bar numbers.", marks: 1, markCode: "M" },
              { reasoning: "Note repetitions, contrasts, climaxes and cadences as possible formal markers.", marks: 1, markCode: "M" },
              { reasoning: "Use concise labels that can be checked on a later listening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Record timed structural markers and describe repetitions and contrasts precisely.",
            commonErrors: [
              "Writing only vague impressions instead of located observations.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain the difference between timbre and texture in musical analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Timbre and texture", statement: "Timbre is the quality of individual sounds; texture is the relationship between musical lines." },
            ],
            steps: [
              { reasoning: "Timbre describes the colour or quality of a particular sound, such as a bright violin or muted trumpet.", marks: 1, markCode: "M" },
              { reasoning: "Texture describes how many independent or supporting lines are heard together.", marks: 1, markCode: "M" },
              { reasoning: "A piece may have rich timbres but simple texture, or plain timbres but complex texture.", marks: 1, markCode: "R" },
              { reasoning: "Analysts must therefore identify instruments and line relationships separately.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Timbre concerns sound quality; texture concerns the relationship between lines.",
            commonErrors: [
              "Using timbre and texture as interchangeable terms.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first listening pass is most useful for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forming an overall impression of mood, genre and instrumentation" },
              { id: "b", text: "Naming every chord" },
              { id: "c", text: "Writing a final evaluation" },
              { id: "d", text: "Proving every formal section" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "First listening pass", statement: "The first pass establishes broad context before detailed analysis begins." },
            ],
            steps: [
              { reasoning: "A first pass gives the listener a general sense of the piece.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Forming an overall impression of mood, genre and instrumentation",
            commonErrors: [
              "Expecting detailed structure from only one first hearing.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cadence most often signals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle of a phrase" },
              { id: "b", text: "A sudden increase in tempo" },
              { id: "c", text: "A change of instrument colour" },
              { id: "d", text: "The end of a phrase or section" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cadence", statement: "A harmonic progression that creates closure at the end of a phrase or section." },
            ],
            steps: [
              { reasoning: "Cadences provide a sense of arrival or closure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The end of a phrase or section",
            commonErrors: [
              "Confusing a cadence with every change in dynamics or timbre.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how an active listener distinguishes a section boundary from a temporary contrast.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Section boundaries", statement: "A boundary is confirmed by sustained change, closure and a new organising pattern." },
            ],
            steps: [
              { reasoning: "A temporary contrast may involve one brief change in dynamics, timbre or texture.", marks: 1, markCode: "M" },
              { reasoning: "A section boundary is supported by a cadence, sustained new material or a clear change of character.", marks: 1, markCode: "M" },
              { reasoning: "The listener compares what follows the change with earlier sections to test whether a new section has begun.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: boundaries are confirmed by what happens after the change, not by the change alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A boundary is a sustained organisational change; a contrast may be only temporary.",
            commonErrors: [
              "Labeling every sudden change as a new section.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student's second-pass notes say: \"The music changes at 0:48, again at 1:35 and returns to the opening material at 2:10.\"",
          parts: [
            { label: "a", prompt: "Identify two structural features implied by the notes.", marks: 2 },
            { label: "b", prompt: "Explain what each feature suggests about the form.", marks: 2 },
            { label: "c", prompt: "Suggest one further listening focus.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interpreting listening notes", statement: "Timestamps become useful when linked to repetition, contrast and possible section boundaries." },
            ],
            steps: [
              { part: "a", reasoning: "The notes identify possible changes at two points and a return to earlier material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Returning material suggests repetition, possibly an A-B-A or similar form.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The changes may mark contrasting sections, while the return creates closure or recapitulation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The form is not yet certain because the notes do not describe whether the middle section repeats.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Listen for whether the middle material returns before the final reprise.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Also check for cadence or dynamic climax at the section boundaries.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The notes suggest contrasting sections and a return, possibly A-B-A form.",
            commonErrors: [
              "Treating timestamps alone as proof of formal labels.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "If one clear melody is supported by chords or accompaniment, the texture is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heterophonic" },
              { id: "b", text: "Polyphonic" },
              { id: "c", text: "Homophonic" },
              { id: "d", text: "Monophonic" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homophonic texture", statement: "A texture in which a principal melody is supported by accompaniment or chordal lines." },
            ],
            steps: [
              { reasoning: "Homophony combines a clear melody with supporting harmony or accompaniment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Homophonic",
            commonErrors: [
              "Calling any music with more than one sound polyphonic.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which response shows the least analytical listening?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"The cello enters at 1:10 and creates a three-part texture.\"" },
              { id: "b", text: "\"The opening theme returns with the same contour but fuller orchestration.\"" },
              { id: "c", text: "\"Dynamics rise to fortissimo before the cadence.\"" },
              { id: "d", text: "\"I liked the song because it was exciting.\"" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical evidence", statement: "Analytical listening identifies specific elements rather than only expressing preference." },
            ],
            steps: [
              { reasoning: "Option (d) gives an emotional reaction but no musical evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** \"I liked the song because it was exciting.\"",
            commonErrors: [
              "Assuming enthusiasm demonstrates analytical understanding.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A listener wants to test whether two passages use the same theme. Which strategy is most reliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume similarity whenever the tempo is the same" },
              { id: "b", text: "Compare only the loudness of each passage" },
              { id: "c", text: "Count the instruments without listening to their lines" },
              { id: "d", text: "Compare melodic contour, rhythm and harmonic support" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Comparing themes", statement: "Themes are identified through melody, rhythm and harmony rather than surface features." },
            ],
            steps: [
              { reasoning: "Contour, rhythm and harmony provide reliable evidence of thematic identity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Compare melodic contour, rhythm and harmonic support",
            commonErrors: [
              "Judging thematic similarity from tempo or instrumentation alone.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A listener writes: \"Pass one: dark, dramatic orchestral music. Pass two: it seems to have three parts. Pass three: strings, brass, timpani, loud ending.\" Evaluate the notes.",
          parts: [
            { label: "a", prompt: "Identify three strengths in the listening notes.", marks: 3 },
            { label: "b", prompt: "Identify three limitations and explain their effect.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements to the listening record.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating listening notes", statement: "Strong notes combine accurate observation, structural evidence and precise descriptive language." },
            ],
            steps: [
              { part: "a", reasoning: "The notes record mood, an impression of form and identified instruments.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They show multiple listening passes rather than a single reaction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They include some dynamic information through 'loud ending'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Three parts' is vague because no sections, timings or boundaries are identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The instrument list does not distinguish melody from accompaniment or identify texture.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "'Dark' and 'dramatic' are impressions that need specific musical evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Add timestamps, cadence points and descriptions of repeated or contrasting material.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Replace general adjectives with precise observations of melody, harmony, rhythm, dynamics and texture.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The notes show useful first and third-pass observations but need precise structural evidence.",
            commonErrors: [
              "Rewarding note length instead of analytical specificity.",
            ],
          },
        },
        {
          id: "music-u5-active-listening-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an analytical listening plan for a piece described as having a quiet opening theme, a louder contrasting middle and a return to the opening theme.",
          parts: [
            { label: "a", prompt: "Identify four structural and expressive markers to listen for.", marks: 4 },
            { label: "b", prompt: "Explain how each marker would be verified during listening.", marks: 3 },
            { label: "c", prompt: "Describe how the findings should be organised in written analysis.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Listening plan", statement: "A plan links expected markers to evidence, verification and written organisation." },
            ],
            steps: [
              { part: "a", reasoning: "Listen for the opening theme's melody, contour and timbre.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Identify the middle section's contrasting dynamics, texture, harmony or rhythm.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mark cadences or climaxes that signal section changes.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check whether the return preserves or develops the opening material.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Compare the return with the opening by singing or humming both versions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Verify contrasts by noting changes in dynamics, instrumentation and rhythmic drive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Confirm boundaries through cadences, sustained changes and later section behaviour.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Organise notes by first impression, structural map and detailed element observations.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Separate description from interpretation so evidence supports each claim.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "End with an evaluation that refers to the identified structural design.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Plan passes for impression, structure and detail, then organise evidence before evaluation.",
            commonErrors: [
              "Listening only for the expected return and missing middle-section development.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u5-aural-identification",
      title: "Identifying musical elements",
      skill: "Identify pitch, rhythm, dynamics, texture and timbre through focused aural skills practice.",
      lesson: {
        sections: [
          {
            heading: "Pitch and melody",
            body: "Identify melodic contour — does the tune go up, down, or stay level? Recognise intervals by their sound: seconds sound stepwise, fifths sound open and stable, octaves sound same-but-higher. Sing or hum along to internalise the melody — your voice is your best analytical tool.",
          },
          {
            heading: "Rhythm and metre",
            body: "Tap or clap the pulse — feel the beat. Identify the metre: does it feel in 2, 3 or 4? Are there syncopations? Listen for rhythmic patterns that repeat — ostinatos, riffs. Rhythmic analysis requires feeling time, not just hearing notes.",
          },
          {
            heading: "Dynamics, texture, timbre",
            body: "Dynamics: is the music loud or soft? Does it change? Texture: how many lines? Timbre: can you identify instruments by sound alone? These elements are often overlooked but crucial for full analysis. A piece can be technically simple but timbrally rich.",
          },
        ],
        keyFormulas: [
          { name: "Aural identification", statement: "Contour + intervals + pulse + metre + texture + timbre" },
          { name: "Internal tools", statement: "Sing/hum melody; tap/clap rhythm; listen for changes" },
        ],
        workedExample: {
          problem: "A student hears a piece but can't identify the instruments. What listening strategies help?",
          solution: "Focus on timbre — the 'colour' of each sound. Strings are smooth and sustained; brass are bright and powerful; woodwinds are reedy; percussion is percussive. Listen for which timbres play melody vs accompaniment. Identify one instrument at a time, then layer your identifications.",
        },
      },
      questions: [
        {
          id: "music-u5-aural-identification-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Melodic contour refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The instruments playing the melody" },
              { id: "b", text: "The volume of the melody" },
              { id: "c", text: "The shape of the melody — whether it goes up, down or stays level" },
              { id: "d", text: "The speed of the melody" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Melodic contour", statement: "The overall shape — rising, falling or level — of a melody." },
            ],
            steps: [
              { reasoning: "Contour describes the melodic shape — direction of pitch movement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The shape of the melody — whether it goes up, down or stays level",
            commonErrors: [
              "Confusing contour (pitch shape) with rhythm or dynamics.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three aural skills for identifying musical elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Aural skills", statement: "Singing melody, tapping rhythm and focused timbre listening." },
            ],
            steps: [
              { reasoning: "Sing or hum the melody to internalise contour and intervals.", marks: 1, markCode: "M" },
              { reasoning: "Tap or clap the pulse to feel metre and rhythm patterns.", marks: 1, markCode: "M" },
              { reasoning: "Listen for timbre — identify instruments by their tonal colour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Singing, tapping and timbre focus develop aural identification skills.",
            commonErrors: [
              "Relying only on visual score reading without developing ear skills.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why identifying texture is important in musical analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Texture analysis", statement: "Texture reveals how musical lines relate — monophonic, homophonic, polyphonic." },
            ],
            steps: [
              { reasoning: "Texture reveals the structural relationship between parts.", marks: 1, markCode: "M" },
              { reasoning: "Monophonic, homophonic and polyphonic textures create very different effects.", marks: 1, markCode: "M" },
              { reasoning: "Texture changes often signal structural or emotional shifts in the music.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: texture is a key analytical dimension often overlooked.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Texture reveals structural relationships and emotional shifts in music.",
            commonErrors: [
              "Focusing only on melody and ignoring accompanying textures.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical piece",
            author: "Written for Akademik Space",
            source: "Aural analysis exercise",
            text: "A piece features a solo violin melody over piano chords, with cello joining in the second half to create three-part texture. The tempo is moderate; dynamics shift from soft to loud at the climax.",
          },
          stem: "Evaluate a student's aural analysis of a described piece.",
          parts: [
            { label: "a", prompt: "Identify two elements correctly identified.", marks: 2 },
            { label: "b", prompt: "Identify two elements missed or misidentified.", marks: 2 },
            { label: "c", prompt: "Suggest listening strategies to improve.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Aural evaluation", statement: "Assess identification of texture, dynamics, instrumentation and structure." },
            ],
            steps: [
              { part: "a", reasoning: "Correctly identified elements, e.g. violin melody, piano accompaniment, dynamics shift.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two elements correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Missed/misidentified, e.g. texture change (homophonic to polyphonic), cello entry, tempo description.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two missed elements correctly identified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests multiple listens, focus on texture changes, identify instruments by timbre.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete listening strategies suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate aural analysis by element identification accuracy and listening strategy.",
            commonErrors: [
              "Judging aural skills by confidence rather than accuracy.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An open and stable-sounding melodic leap is most likely:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A chromatic passing note" },
              { id: "b", text: "A perfect fifth" },
              { id: "c", text: "A semitone" },
              { id: "d", text: "A repeated pitch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perfect fifth", statement: "A perfect fifth has an open, stable sound often used for melodic emphasis." },
            ],
            steps: [
              { reasoning: "A fifth is wider than a step and tends to sound open and stable.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A perfect fifth",
            commonErrors: [
              "Confusing interval size with melodic stability.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe how singing or humming can improve aural identification of melody.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Internal melody check", statement: "Producing the melody helps the listener test contour, intervals and repetition." },
            ],
            steps: [
              { reasoning: "Hum or sing along to check whether the contour rises, falls or remains level.", marks: 1, markCode: "M" },
              { reasoning: "Compare repeated phrases to see whether the melody is exact or varied.", marks: 1, markCode: "M" },
              { reasoning: "The voice provides an internal reference for pitch movement and phrase shape.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Singing or humming tests contour, intervals and melodic repetition.",
            commonErrors: [
              "Trying to analyse melody only by visualising a score.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain how tapping or clapping helps a listener identify metre and rhythm.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Physical rhythm check", statement: "Movement externalises the pulse and makes beat groupings audible." },
            ],
            steps: [
              { reasoning: "Tapping the steady pulse reveals tempo and the underlying beat.", marks: 1, markCode: "M" },
              { reasoning: "Grouping taps into twos, threes or fours helps identify the metre.", marks: 1, markCode: "M" },
              { reasoning: "Clapping patterns can expose syncopation, repeated figures and rhythmic drive.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: physical movement turns abstract time into a testable pattern.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tapping and clapping externalise pulse, metre, syncopation and rhythmic patterns.",
            commonErrors: [
              "Tapping every note rather than the underlying pulse.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A solo voice singing over guitar chords and a drum pattern is an example of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polyphonic texture" },
              { id: "b", text: "Homophonic texture" },
              { id: "c", text: "Unaccompanied texture" },
              { id: "d", text: "Monophonic texture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homophonic texture", statement: "A principal melody supported by chords or accompaniment." },
            ],
            steps: [
              { reasoning: "The voice supplies the main melody while guitar and drums provide support.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Homophonic texture",
            commonErrors: [
              "Counting every accompanying sound as an independent melodic line.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Syncopation occurs when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The texture becomes monophonic" },
              { id: "b", text: "The music changes key" },
              { id: "c", text: "Accents fall on normally weak beats or off-beats" },
              { id: "d", text: "The tempo becomes slower" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Syncopation", statement: "Rhythmic emphasis displaced from expected strong beats." },
            ],
            steps: [
              { reasoning: "Syncopation creates surprise by accenting weak positions in the metre.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Accents fall on normally weak beats or off-beats",
            commonErrors: [
              "Confusing syncopation with a simple change of tempo.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how tempo and dynamics interact to shape the character of a piece.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tempo and dynamics", statement: "Speed and loudness jointly control energy, tension and release." },
            ],
            steps: [
              { reasoning: "Fast tempo with loud dynamics usually creates high energy or excitement.", marks: 1, markCode: "M" },
              { reasoning: "Slow tempo with soft dynamics can create intimacy, sadness or tension.", marks: 1, markCode: "M" },
              { reasoning: "Contrasts between loud and soft, or fast and slow, create drama and structure.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: character emerges from the combination, not tempo or dynamics alone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tempo and dynamics interact to create energy, intimacy, tension and contrast.",
            commonErrors: [
              "Describing tempo and dynamics as separate facts without relating them.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student hears a song with a solo voice, a repeated guitar figure and a drum pattern entering halfway through.",
          parts: [
            { label: "a", prompt: "Identify two musical elements the student could isolate.", marks: 2 },
            { label: "b", prompt: "Explain what each element contributes to the texture.", marks: 2 },
            { label: "c", prompt: "Suggest one listening strategy to verify the texture change.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Texture tracking", statement: "Track which lines are melody, accompaniment and independent parts as they enter or drop out." },
            ],
            steps: [
              { part: "a", reasoning: "The solo voice can be identified as the main melody.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The guitar and drums can be identified as accompaniment or rhythmic support.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The voice carries the melodic line while the guitar and drums supply harmony and pulse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The drum entry thickens the texture by adding a new rhythmic layer.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Listen at the halfway point and mark exactly when the drum enters.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Replay the section to check whether the voice remains the primary melody.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Isolate the melody from accompaniment and verify the drum entry as a texture change.",
            commonErrors: [
              "Assuming every added instrument creates polyphony.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A short, dry, percussive sound is most likely produced by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A slow organ pedal" },
              { id: "b", text: "A sustained string bow" },
              { id: "c", text: "A percussion instrument" },
              { id: "d", text: "A legato flute line" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Percussive timbre", statement: "Percussion instruments produce sounds with rapid attack and little sustain." },
            ],
            steps: [
              { reasoning: "A dry, short attack is characteristic of many percussion sounds.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A percussion instrument",
            commonErrors: [
              "Ignoring the attack and sustain characteristics of timbre.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which observation provides the strongest evidence of polyphonic texture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The music is loud" },
              { id: "b", text: "The tempo is fast" },
              { id: "c", text: "Several independent melodic lines can be followed at the same time" },
              { id: "d", text: "One instrument plays chords" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polyphonic texture", statement: "Multiple independent melodic lines sounding together." },
            ],
            steps: [
              { reasoning: "Polyphony requires independently traceable lines rather than melody plus simple accompaniment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Several independent melodic lines can be followed at the same time",
            commonErrors: [
              "Confusing harmonic thickness with independent melodic lines.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A melody confined to a small pitch area is most likely to sound:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrow, focused and possibly repetitive" },
              { id: "b", text: "Always dissonant" },
              { id: "c", text: "Wider and more adventurous" },
              { id: "d", text: "Without rhythm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Melodic range", statement: "Range affects melodic character; a narrow range often creates focus or repetition." },
            ],
            steps: [
              { reasoning: "A small pitch area limits melodic movement and can produce a concentrated or repetitive effect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Narrow, focused and possibly repetitive",
            commonErrors: [
              "Treating pitch range as unrelated to expressive effect.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A described piece has a narrow-range melody repeated by strings and woodwind, a steady triple pulse, soft-to-loud dynamic growth and two independent lines in the middle. A student writes: \"It has strings and a beat, then it gets louder.\" Evaluate the aural analysis.",
          parts: [
            { label: "a", prompt: "Identify three strengths in the student's response.", marks: 3 },
            { label: "b", prompt: "Identify three missed elements and explain why each matters.", marks: 3 },
            { label: "c", prompt: "Suggest two listening strategies to improve the analysis.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating aural analysis", statement: "Assess whether the response identifies melody, pulse, dynamics, texture and expressive change." },
            ],
            steps: [
              { part: "a", reasoning: "The response identifies some instrumentation through 'strings'.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It notices a beat, showing attention to rhythm.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "It recognises a dynamic change, which is an important expressive feature.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It misses the triple metre, which defines the rhythmic organisation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "It misses the narrow-range melody and its repetition by different instruments.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "It misses the independent lines in the middle, which change the texture.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tap the pulse in groups of three to verify the metre.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Follow each line separately during the middle section to test for polyphony.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The response notices instruments, rhythm and dynamics but misses metre, melodic range and texture.",
            commonErrors: [
              "Accepting general impressions as complete aural identification.",
            ],
          },
        },
        {
          id: "music-u5-aural-identification-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Design an aural identification checklist for analysing an unfamiliar heard piece within a short practice session.",
          parts: [
            { label: "a", prompt: "Identify four elements that should be isolated first.", marks: 4 },
            { label: "b", prompt: "Explain how three of those elements would be verified.", marks: 3 },
            { label: "c", prompt: "Describe how to prioritise the checklist when time is limited.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Aural checklist", statement: "A checklist sequences observable elements from broad to detailed." },
            ],
            steps: [
              { part: "a", reasoning: "Isolate the main melody and test its contour by humming.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tap the pulse to identify tempo, metre and rhythmic patterns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Note dynamic changes and the instruments responsible for them.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Identify texture by counting and tracing independent or supporting lines.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Melody is verified by comparing repeated phrases and checking whether the tune can be sung back.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rhythm is verified by tapping beats in groups and clapping syncopated figures.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Texture is verified by listening for whether additional lines are independent or merely accompany the melody.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Begin with pulse and texture because they organise all other observations.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Then check melody and dynamics, since they are often easiest to verify quickly.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reserve time for timbre and instrument identification after structural elements are secure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Prioritise pulse and texture first, then melody, dynamics and timbre.",
            commonErrors: [
              "Starting with rare instruments instead of the elements that organise the piece.",
            ],
          },
        },
      ],
    },
  ],
};
