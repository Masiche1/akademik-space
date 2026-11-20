import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "music-u5-lesson-5-3",
  code: "5-3",
  title: "Written Analysis and Commentary",
  goal: "I CAN write informed musical analysis and commentary that describes, analyses and evaluates heard music.",
  standards: [
    "Analysis",
    "Written Response",
  ],
  vocabulary: [
    { term: "Musical analysis", definition: "Systematic examination of a piece's elements, structure and effect." },
    { term: "Description", definition: "Stating what is objectively present in the music." },
    { term: "Analysis", definition: "Examining how elements produce effects and meaning." },
    { term: "Evaluation", definition: "Judging the music's success or significance against criteria." },
    { term: "Context", definition: "The historical, cultural and stylistic circumstances surrounding a piece." },
    { term: "Programme note", definition: "Written commentary providing context and guidance for listeners." },
  ],
  concepts: [
    {
      id: "music-u5-analysis-writing",
      title: "Writing musical analysis",
      skill: "Structure written musical analysis moving from description through analysis to evaluation.",
      lesson: {
        sections: [
          {
            heading: "Analysis structure",
            body: "A strong analysis moves through stages: **description** (what instruments, tempo, texture, form), **analysis** (how elements work — harmony's emotional effect, rhythm's drive, melody's shape), **context** (genre, period, cultural background), and **evaluation** (is it successful? why?). Each stage builds on the last.",
          },
          {
            heading: "Using evidence",
            body: "Cite specific musical details: 'the syncopated bass line', 'the chromatic descending bass', 'the sudden drop to pianissimo'. Vague praise ('beautiful', 'moving') fails because it cites no evidence. Precise description — 'the trumpet's muted timbre against the rhythm section's driving eighth notes' — makes analysis credible.",
          },
          {
            heading: "Evaluation criteria",
            body: "Evaluate against appropriate criteria: technical skill, structural coherence, emotional impact, originality, appropriateness to genre. A jazz solo is evaluated differently from a symphony — know the conventions before judging. The best evaluations acknowledge what the music does well within its own terms.",
          },
        ],
        keyFormulas: [
          { name: "Analysis structure", statement: "Description → analysis → context → evaluation" },
          { name: "Evidence rule", statement: "Every claim cites a specific musical detail" },
        ],
        workedExample: {
          problem: "A student writes: 'This jazz piece is really good.' Improve it using analysis structure.",
          solution: "'The piece features a trumpet lead improvising over a walking bass and ride cymbal swing feel. The soloist uses blue notes and call-and-response with the pianist, building from sparse phrases to virtuosic runs. The harmonic progression cycles through standard jazz changes, allowing extended improvisation. The performance balances technical mastery with emotional expressiveness.'",
        },
      },
      questions: [
        {
          id: "music-u5-analysis-writing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In musical analysis, 'description' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Judging the music's quality" },
              { id: "b", text: "Stating what is objectively present in the music" },
              { id: "c", text: "Comparing to other pieces" },
              { id: "d", text: "Writing about the composer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Description", statement: "Stating objective facts about what is present in the music." },
            ],
            steps: [
              { reasoning: "Description states objective facts — instruments, tempo, texture, form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stating what is objectively present in the music",
            commonErrors: [
              "Confusing description with analysis or evaluation.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical structure of a written musical analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analysis structure", statement: "Description, analysis, context and evaluation form the standard structure." },
            ],
            steps: [
              { reasoning: "Description: state instruments, tempo, texture, form objectively.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: examine how elements produce effects and meaning.", marks: 1, markCode: "M" },
              { reasoning: "Context and evaluation: situate the piece and judge its success.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description → analysis → context → evaluation.",
            commonErrors: [
              "Writing only description or only opinion.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why musical evaluation requires genre-appropriate criteria.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluation criteria", statement: "Different genres have different conventions; judging by wrong criteria is unfair." },
            ],
            steps: [
              { reasoning: "Jazz is evaluated on improvisation and interaction; classical on form and orchestration.", marks: 1, markCode: "M" },
              { reasoning: "Applying classical criteria to jazz (or vice versa) produces unfair judgement.", marks: 1, markCode: "M" },
              { reasoning: "Good evaluation asks: does this work succeed on its own terms?", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: criteria must match genre conventions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluation requires genre-appropriate criteria for fair judgement.",
            commonErrors: [
              "Applying one set of criteria to all musical genres.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's written musical analysis.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating analysis", statement: "Assess description, analysis, evidence and evaluation quality." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. specific details, identifies elements, attempts analysis.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. vague language, no evidence, description only — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with analytical effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding specific evidence, element analysis, genre-appropriate evaluation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate analysis by description accuracy, analytical depth and evidence use.",
            commonErrors: [
              "Judging analysis by length rather than quality.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In written musical analysis, evaluation differs from analysis because evaluation:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only lists instruments" },
              { id: "b", text: "Judges the music's success or significance using criteria" },
              { id: "c", text: "Never cites evidence" },
              { id: "d", text: "Describes only tempo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Evaluation", statement: "Assessment of a piece's success or significance against appropriate criteria." },
            ],
            steps: [
              { reasoning: "Evaluation moves beyond explanation to judgement and justification.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Judges the music's success or significance using criteria",
            commonErrors: [
              "Using evaluation as a synonym for description.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State the evidence rule for written musical analysis and explain why it matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence rule", statement: "Every analytical claim should be supported by a specific musical detail." },
            ],
            steps: [
              { reasoning: "The evidence rule requires each claim to cite an observable musical feature.", marks: 1, markCode: "M" },
              { reasoning: "Specific evidence makes the analysis testable and credible.", marks: 1, markCode: "M" },
              { reasoning: "Without evidence, statements remain unsupported opinion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Every claim needs specific musical evidence to be credible.",
            commonErrors: [
              "Making broad judgements without identifying musical details.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain the difference between description and context in musical analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Description and context", statement: "Description states what is heard; context situates the piece historically, culturally or stylistically." },
            ],
            steps: [
              { reasoning: "Description concerns objective features such as instruments, tempo, texture and form.", marks: 1, markCode: "M" },
              { reasoning: "Context concerns circumstances such as period, genre, purpose or performance tradition.", marks: 1, markCode: "M" },
              { reasoning: "Context helps explain why features may have particular meanings or conventions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: description answers what is present; context answers where and why it matters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Description states heard features; context situates the piece and its conventions.",
            commonErrors: [
              "Using historical background as a substitute for musical description.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is the best example of objective musical description?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"The piece is wonderful and moving.\"" },
              { id: "b", text: "\"The trumpet plays a muted melody over driving eighth-note accompaniment.\"" },
              { id: "c", text: "\"Everyone should love this song.\"" },
              { id: "d", text: "\"It sounds expensive.\"" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Objective description", statement: "Objective description names observable instruments, timbre, rhythm and texture." },
            ],
            steps: [
              { reasoning: "Option (b) identifies specific audible features rather than only judgement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"The trumpet plays a muted melody over driving eighth-note accompaniment.\"",
            commonErrors: [
              "Confusing emotional reaction with musical evidence.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A jazz solo should be evaluated primarily according to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether it imitates a symphony exactly" },
              { id: "b", text: "Jazz conventions such as improvisation, interaction and harmonic awareness" },
              { id: "c", text: "The number of pages in the score" },
              { id: "d", text: "Whether it is loud throughout" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Genre-appropriate criteria", statement: "Evaluation should use criteria suited to the conventions of the genre." },
            ],
            steps: [
              { reasoning: "Jazz conventions value improvisation, interaction and harmonic development.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Jazz conventions such as improvisation, interaction and harmonic awareness",
            commonErrors: [
              "Applying classical criteria mechanically to improvisatory music.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite \"The rhythm is cool\" as a more analytical sentence and explain the improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Analytical revision", statement: "Replace vague praise with observable rhythmic features and effects." },
            ],
            steps: [
              { reasoning: "Identify a concrete feature such as syncopation, steady pulse or repeated pattern.", marks: 1, markCode: "M" },
              { reasoning: "Describe its effect, such as creating drive, swing or tension.", marks: 1, markCode: "M" },
              { reasoning: "A revised sentence might read: \"The syncopated bass creates forward momentum beneath the melody.\"", marks: 1, markCode: "R" },
              { reasoning: "The revision is stronger because it gives evidence and explains function.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replace 'cool' with a specific rhythmic feature and its effect.",
            commonErrors: [
              "Adding more adjectives without adding musical evidence.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A student must organise a paragraph about a piece's texture. The notes are: \"two lines, violin and cello, loud ending, sad mood.\"",
          parts: [
            { label: "a", prompt: "Identify two description points that should appear first.", marks: 2 },
            { label: "b", prompt: "Explain how the texture points should be analysed.", marks: 2 },
            { label: "c", prompt: "Suggest where the mood and ending should be placed.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Paragraph organisation", statement: "Description comes first, analysis second, interpretation or evaluation last." },
            ],
            steps: [
              { part: "a", reasoning: "State that the texture involves violin and cello lines.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State whether the lines are independent, homophonic or supportive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Explain how the relationship between the lines creates effect, such as dialogue or accompaniment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Relate texture to dynamics where relevant, such as the loud ending thickening the sound.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Place 'sad mood' after evidence of texture and harmony rather than before it.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use the loud ending as evidence for a conclusion or climax, not as the opening point.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Organise texture description and analysis before mood and climax interpretation.",
            commonErrors: [
              "Beginning with mood before establishing musical evidence.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Contextual information about a piece should usually appear:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Before any musical evidence is given" },
              { id: "b", text: "After description and analysis have established the musical facts" },
              { id: "c", text: "Only in the title" },
              { id: "d", text: "Instead of analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analysis structure", statement: "Description and analysis should establish evidence before context and evaluation." },
            ],
            steps: [
              { reasoning: "Context is most useful after the listener understands what the music actually does.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** After description and analysis have established the musical facts",
            commonErrors: [
              "Letting biography replace musical analysis.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which evaluation criterion is most appropriate for a piece that succeeds through subtle rhythmic interaction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether it has the loudest ending" },
              { id: "b", text: "Whether the rhythmic interplay achieves its intended effect" },
              { id: "c", text: "Whether it uses the most instruments" },
              { id: "d", text: "Whether it is famous" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Appropriate evaluation", statement: "Criteria should match the musical aims and conventions of the work." },
            ],
            steps: [
              { reasoning: "If rhythmic interaction is central, its effectiveness is a relevant criterion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Whether the rhythmic interplay achieves its intended effect",
            commonErrors: [
              "Choosing criteria unrelated to the piece's musical purpose.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest evidence for a claim about expressive effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A specific feature such as a descending chromatic line or sudden pianissimo" },
              { id: "b", text: "The writer's general enthusiasm" },
              { id: "c", text: "The length of the piece" },
              { id: "d", text: "The number of times a song was streamed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evidence for effect", statement: "Expressive claims are strongest when tied to identifiable musical features." },
            ],
            steps: [
              { reasoning: "Specific musical details allow listeners to understand why an effect occurs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A specific feature such as a descending chromatic line or sudden pianissimo",
            commonErrors: [
              "Using popularity or personal feeling as musical evidence.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student writes: \"This piece is emotional because the strings are sad and the ending is powerful. It is a good piece.\" Evaluate the analysis.",
          parts: [
            { label: "a", prompt: "Identify three strengths.", marks: 3 },
            { label: "b", prompt: "Identify three weaknesses and explain their effect.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating analysis", statement: "Assess whether claims are supported by description, analysis and criteria." },
            ],
            steps: [
              { part: "a", reasoning: "The student notices the strings and the ending.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The student attempts to connect sound to emotion.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The student reaches an evaluative conclusion.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "'Sad strings' assumes an effect without identifying melodic, harmonic or textural causes.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "'Powerful ending' lacks dynamic, timbral or structural evidence.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "'Good piece' gives no criteria or genre-appropriate justification.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replace emotion labels with descriptions of contour, harmony, dynamics and texture.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate against clear criteria such as coherence, expressive effect or technical control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The analysis notices features but lacks evidence and evaluative criteria.",
            commonErrors: [
              "Accepting emotional labels as analysis without musical support.",
            ],
          },
        },
        {
          id: "music-u5-analysis-writing-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan a written analysis for a described piece with a solo trumpet melody, walking bass, swing rhythm, blue notes and a climactic final chorus.",
          parts: [
            { label: "a", prompt: "Identify four elements that should be described first.", marks: 4 },
            { label: "b", prompt: "Explain how three elements should be analysed for effect.", marks: 3 },
            { label: "c", prompt: "Describe how the analysis should move to evaluation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analysis plan", statement: "Description establishes facts, analysis explains effects and evaluation applies genre criteria." },
            ],
            steps: [
              { part: "a", reasoning: "Describe the trumpet as lead instrument and its melodic role.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe the walking bass and ride or swing rhythmic foundation.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe blue notes or other pitch inflections aurally.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe the climactic final chorus through dynamics, texture and form.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Analyse how the trumpet melody interacts with the rhythm section through call-and-response.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain how blue notes create tension, expressiveness or blues character.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain how the final chorus develops earlier material toward climax.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate improvisational development and interaction using jazz criteria.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Judge whether the climax is prepared by earlier contrast and build-up.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude with a balanced judgement about expressive success, not merely personal taste.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Describe jazz elements, analyse their interactive effects, then evaluate on jazz criteria.",
            commonErrors: [
              "Evaluating jazz solely by classical formal standards.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u5-commentary-writing",
      title: "Programme notes and commentary",
      skill: "Write accessible programme notes and analytical commentary that inform and engage listeners.",
      lesson: {
        sections: [
          {
            heading: "Purpose of programme notes",
            body: "Programme notes prepare listeners: they provide context (when, where, why the piece was written), guide attention (what to listen for), and enhance enjoyment (background that deepens understanding). They should be concise — enough to orient, not so much they replace listening.",
          },
          {
            heading: "Writing accessibly",
            body: "Programme notes should be readable by non-specialists: avoid jargon, explain technical terms, use vivid language. 'A lone trumpet plays a mournful melody over pulsing strings' is better than 'a monophonic trumpet line in aeolian mode over ostinato strings'. The goal is to open ears, not display knowledge.",
          },
          {
            heading: "Analytical commentary",
            body: "Deeper commentary can analyse structure and meaning: how the piece develops, what it expresses, why it matters. This serves different audiences — concertgoers want guidance; students and scholars want analysis. Match depth to audience and purpose.",
          },
        ],
        keyFormulas: [
          { name: "Programme note function", statement: "Context + guidance + enhancement = prepared listening" },
          { name: "Accessible writing", statement: "Vivid language over jargon; enough to orient, not replace listening" },
        ],
        workedExample: {
          problem: "A student must write programme notes for a Beethoven symphony. What should they include?",
          solution: "Context: when written, what was happening in Beethoven's life, why he wrote it. Structure: brief overview of movements. What to listen for: the famous opening motif, the emotional journey, the finale's triumph. Keep it accessible — enough to prepare, not enough to replace listening.",
        },
      },
      questions: [
        {
          id: "music-u5-commentary-writing-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Programme notes primarily serve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the music" },
              { id: "b", text: "Prepare listeners with context and guidance" },
              { id: "c", text: "List the musicians' names" },
              { id: "d", text: "Advertise the venue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Programme notes", statement: "Written commentary providing context and listening guidance." },
            ],
            steps: [
              { reasoning: "Programme notes prepare listeners with context and guidance for what to hear.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prepare listeners with context and guidance",
            commonErrors: [
              "Thinking programme notes substitute for listening rather than prepare for it.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three elements good programme notes should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Programme note elements", statement: "Context, structure overview and listening guidance." },
            ],
            steps: [
              { reasoning: "Context — when, where, why the piece was written.", marks: 1, markCode: "M" },
              { reasoning: "Structure — brief overview of movements or sections.", marks: 1, markCode: "M" },
              { reasoning: "Listening guidance — what to listen for, key moments, emotional journey.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Context, structure and listening guidance form good programme notes.",
            commonErrors: [
              "Writing programme notes that are too technical or too vague.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why programme notes should be accessible rather than highly technical.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Accessibility", statement: "Programme notes serve general audiences; jargon excludes rather than informs." },
            ],
            steps: [
              { reasoning: "Programme notes serve concertgoers who may not be music specialists.", marks: 1, markCode: "M" },
              { reasoning: "Technical jargon excludes listeners rather than preparing them.", marks: 1, markCode: "M" },
              { reasoning: "Accessible language opens ears; jargon closes them.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the goal is informed listening, not displayed knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Accessible programme notes inform general audiences; jargon excludes.",
            commonErrors: [
              "Writing programme notes to impress specialists rather than serve listeners.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's programme notes for a described piece.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating programme notes", statement: "Assess context, accessibility and listening guidance." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. provides context, mentions what to listen for.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. too technical, too long, no listening guidance — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with audience effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests simplifying language, adding listening cues, trimming length.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate programme notes by context, accessibility and listening guidance.",
            commonErrors: [
              "Judging programme notes by length rather than usefulness.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The primary purpose of programme notes is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the performance" },
              { id: "b", text: "Prepare listeners with context and guidance" },
              { id: "c", text: "List every instrument" },
              { id: "d", text: "Promote the venue only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Programme notes", statement: "Written commentary that prepares listeners through context and guidance." },
            ],
            steps: [
              { reasoning: "Programme notes orient listeners before or during listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Prepare listeners with context and guidance",
            commonErrors: [
              "Treating programme notes as a substitute for the music.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Describe how accessible language helps programme notes serve listeners.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Accessible language", statement: "Clear, vivid language allows non-specialists to understand and listen more actively." },
            ],
            steps: [
              { reasoning: "Accessible language avoids unexplained technical terms.", marks: 1, markCode: "M" },
              { reasoning: "It uses familiar comparisons and vivid descriptions to orient attention.", marks: 1, markCode: "M" },
              { reasoning: "Listeners can then focus on the music rather than decoding the writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Accessible language prepares listeners without requiring specialist knowledge.",
            commonErrors: [
              "Using jargon to appear authoritative rather than helpful.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain why programme notes should be concise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Concise commentary", statement: "Programme notes should orient listeners without replacing listening." },
            ],
            steps: [
              { reasoning: "Listeners have limited time before or during a performance.", marks: 1, markCode: "M" },
              { reasoning: "Excessive detail can overwhelm attention and distract from the music.", marks: 1, markCode: "M" },
              { reasoning: "Concise notes provide essential context and a few listening cues.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the goal is preparation, not exhaustive analysis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Concise notes orient listeners without distracting them from the performance.",
            commonErrors: [
              "Assuming longer programme notes are automatically more valuable.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is more suitable for general programme notes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"A monophonic aeolian melody over ostinato strings.\"" },
              { id: "b", text: "\"A lone flute sings a mournful tune while strings repeat a quiet pattern beneath it.\"" },
              { id: "c", text: "\"See the harmonic reduction in appendix nine.\"" },
              { id: "d", text: "\"The Lydian inflection at bar forty-two resolves enharmonically.\"" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Accessible writing", statement: "General programme notes should use vivid, understandable language." },
            ],
            steps: [
              { reasoning: "Option (b) describes the sound clearly without unexplained jargon.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"A lone flute sings a mournful tune while strings repeat a quiet pattern beneath it.\"",
            commonErrors: [
              "Choosing technical precision over audience accessibility.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analytical commentary for music students should differ from concert programme notes because it may:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Avoid all musical detail" },
              { id: "b", text: "Use deeper structural and analytical language appropriate to students" },
              { id: "c", text: "Never mention the composer" },
              { id: "d", text: "Be written only for specialists" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Audience and depth", statement: "Match the depth and terminology of commentary to the intended audience." },
            ],
            steps: [
              { reasoning: "Students can benefit from more detailed analysis than general concertgoers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Use deeper structural and analytical language appropriate to students",
            commonErrors: [
              "Using identical depth for every audience and purpose.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three useful listening cues that programme notes can provide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Listening cues", statement: "Cues direct attention to moments, elements or changes worth noticing." },
            ],
            steps: [
              { reasoning: "Cues can identify a recurring theme or motif to listen for.", marks: 1, markCode: "M" },
              { reasoning: "Cues can point to section changes, climaxes or sudden contrasts.", marks: 1, markCode: "M" },
              { reasoning: "Cues can suggest an element such as rhythm, timbre or interaction between players.", marks: 1, markCode: "M" },
              { reasoning: "Good cues prepare attention without explaining away the listening experience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Useful cues identify motifs, structural moments and elements to notice.",
            commonErrors: [
              "Giving so much explanation that listeners no longer need to listen.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q11",
          difficulty: "core",
          totalMarks: 6,
          stem: "A programme note opens: \"This symphony was written in Vienna. The composer was deaf. It has four movements. The first movement is in sonata form.\" Evaluate the opening.",
          parts: [
            { label: "a", prompt: "Identify two useful pieces of context.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses for concert listeners.", marks: 2 },
            { label: "c", prompt: "Suggest one improved listening cue.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating programme notes", statement: "Good notes provide relevant context and listening guidance in accessible language." },
            ],
            steps: [
              { part: "a", reasoning: "Vienna provides geographical and cultural context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The composer's deafness may help explain expressive or structural choices.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Movement count and sonata form may be too technical for general listeners.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The opening gives facts but no guidance about what to listen for.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Add a cue such as: \"Listen for the short opening motif as it returns in different instruments.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The cue directs attention without requiring technical knowledge.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The opening has useful context but lacks accessible listening guidance.",
            commonErrors: [
              "Assuming factual context automatically prepares listeners.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An effective programme note should usually be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As long as possible" },
              { id: "b", text: "Long enough to orient listeners but concise enough to preserve attention" },
              { id: "c", text: "Written only in technical language" },
              { id: "d", text: "Unrelated to the music" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Programme note length", statement: "Notes should provide enough context and guidance without replacing listening." },
            ],
            steps: [
              { reasoning: "Effective length balances preparation with leaving room for active listening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Long enough to orient listeners but concise enough to preserve attention",
            commonErrors: [
              "Measuring quality by length rather than usefulness.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Analytical commentary differs from concert programme notes mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Must always be longer" },
              { id: "b", text: "May examine structure, meaning and significance in greater depth" },
              { id: "c", text: "Cannot mention context" },
              { id: "d", text: "Is only for composers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commentary depth", statement: "Deeper commentary can analyse form, meaning and significance for informed audiences." },
            ],
            steps: [
              { reasoning: "Commentary for students or scholars may go beyond orientation into analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** May examine structure, meaning and significance in greater depth",
            commonErrors: [
              "Confusing analytical depth with audience-appropriate accessibility.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which sentence is most accessible for general concertgoers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"The rondo form exploits hemiola and modal interchange.\"" },
              { id: "b", text: "\"A cheerful tune keeps returning between quieter, more serious episodes.\"" },
              { id: "c", text: "\"Consult the figured bass for harmonic realisation.\"" },
              { id: "d", text: "\"The atonal pitch set derives from set class 4-27.\"" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Accessible language", statement: "General listeners understand familiar descriptions of musical behaviour." },
            ],
            steps: [
              { reasoning: "Option (b) describes the form and mood in plain language.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"A cheerful tune keeps returning between quieter, more serious episodes.\"",
            commonErrors: [
              "Using specialist terminology where plain description would orient listeners.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "For a concert piece, a student writes programme notes that list the composer's birth and death dates, every movement title and several technical terms, but give no guidance. Evaluate the notes.",
          parts: [
            { label: "a", prompt: "Identify three strengths.", marks: 3 },
            { label: "b", prompt: "Identify three weaknesses and explain their effect.", marks: 3 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating programme notes", statement: "Assess context, accessibility, concision and listening guidance." },
            ],
            steps: [
              { part: "a", reasoning: "The notes provide some biographical context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They identify movement titles, giving structural landmarks.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "They show awareness of the work's organisation.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Technical terms may exclude non-specialist listeners.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Dates and titles without explanation do not prepare listeners to hear the music.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The absence of listening cues leaves listeners without direction.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Replace technical terms with vivid descriptions of sound and mood.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add one or two cues such as what to listen for in the opening and finale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The notes contain context and structure but fail to guide or remain accessible.",
            commonErrors: [
              "Judging programme notes by the amount of information rather than usefulness.",
            ],
          },
        },
        {
          id: "music-u5-commentary-writing-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Plan programme notes for a described chamber piece: a violin and cello begin in dialogue, the piano enters midway, the texture thickens, and the piece ends quietly.",
          parts: [
            { label: "a", prompt: "Identify four elements that should be included in the notes.", marks: 4 },
            { label: "b", prompt: "Explain how three elements should be made accessible.", marks: 3 },
            { label: "c", prompt: "Describe how the notes should guide listening without replacing it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Programme note plan", statement: "Combine context, accessible description and selective listening cues." },
            ],
            steps: [
              { part: "a", reasoning: "Include brief context about the piece or composer if relevant.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Describe the opening dialogue between violin and cello.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mention the piano entry and thickening texture.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Note the quiet ending as a feature to listen for.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use 'conversation' or 'answering phrases' instead of technical contrapuntal terms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Say the music 'becomes fuller' rather than using unexplained texture jargon.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Explain the quiet ending as a withdrawal of sound rather than naming a dynamic symbol only.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest listeners notice when the piano first joins.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ask them to listen for the return of the opening dialogue before the ending.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Keep cues brief so the notes prepare rather than replace listening.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Provide context, accessible description and a few cues about entrances and texture changes.",
            commonErrors: [
              "Explaining every musical event so thoroughly that listeners stop listening actively.",
            ],
          },
        },
      ],
    },
  ],
};
