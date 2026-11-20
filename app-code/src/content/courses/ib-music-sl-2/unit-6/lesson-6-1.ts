import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "music-u6-lesson-6-1",
  code: "6-1",
  title: "Developing a Musical Portfolio",
  goal: "I CAN create a portfolio documenting musical growth through recordings, scores, reflections and performance evidence.",
  standards: [
    "Portfolio",
    "Reflection",
  ],
  vocabulary: [
    { term: "Musical portfolio", definition: "A curated collection of recordings, scores, compositions and reflections documenting musical development." },
    { term: "Recording archive", definition: "A collection of audio or video recordings showing performance progress over time." },
    { term: "Composition portfolio", definition: "A selection of original compositions showing development of compositional skills." },
    { term: "Performance log", definition: "A record of performances given, repertoire played and experiences gained." },
    { term: "Reflective entry", definition: "Written analysis of a performance or practice session identifying strengths and improvements." },
    { term: "Repertoire list", definition: "A documented collection of pieces performed or studied." },
  ],
  concepts: [
    {
      id: "music-u6-portfolio-content",
      title: "Portfolio content",
      skill: "Curate portfolio content that demonstrates musical growth across performance, composition and analysis.",
      lesson: {
        sections: [
          {
            heading: "What to include",
            body: "A musical portfolio should show range and growth: recordings of performances at different stages; compositions showing development; scores and arrangements; written analyses of heard music; and reflective entries documenting practice and performance. Include both successes and analysed failures — they show learning.",
          },
          {
            heading: "Recording documentation",
            body: "Record performances regularly: audio for detail, video for stage presence and visual elements. Label recordings with date, piece, context. Compare early and recent recordings — audible growth is powerful evidence. Keep recordings organised and accessible.",
          },
          {
            heading: "Composition evidence",
            body: "For compositions: include scores, recordings and brief programme notes explaining intent. Show development — early attempts alongside later, more sophisticated work. Document the process: sketches, drafts, revisions. The portfolio should demonstrate not just product but creative journey.",
          },
        ],
        keyFormulas: [
          { name: "Portfolio contents", statement: "Recordings + compositions + scores + analyses + reflections" },
          { name: "Growth evidence", statement: "Early vs recent comparisons demonstrate development" },
        ],
        workedExample: {
          problem: "A student has recordings from September and June of the same piece. How should they use them in a portfolio?",
          solution: "Include both with labels showing dates. Add a reflective note comparing them: what improved technically, musically, expressively? The comparison demonstrates growth — the portfolio's most convincing evidence. Don't just show the best recording; show the journey.",
        },
      },
      questions: [
        {
          id: "music-u6-portfolio-content-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A musical portfolio should primarily document:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the best performances" },
              { id: "b", text: "Musical growth across performance, composition and analysis" },
              { id: "c", text: "Music theory knowledge" },
              { id: "d", text: "Instrument prices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Musical portfolio", statement: "Curated evidence of musical development across multiple domains." },
            ],
            steps: [
              { reasoning: "A musical portfolio documents growth across performance, composition and analysis.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Musical growth across performance, composition and analysis",
            commonErrors: [
              "Showing only polished final products without growth evidence.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of evidence a musical portfolio should include.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evidence", statement: "Recordings, compositions, scores, analyses and reflections." },
            ],
            steps: [
              { reasoning: "Recordings of performances showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "Compositions with scores and brief explanations of intent.", marks: 1, markCode: "M" },
              { reasoning: "Written analyses and reflective entries documenting learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, compositions and written reflections evidence musical growth.",
            commonErrors: [
              "Including only one type of evidence without range.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why comparing early and recent recordings is powerful portfolio evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evidence", statement: "Direct comparison makes development audible and undeniable." },
            ],
            steps: [
              { reasoning: "Comparisons make growth concrete — listeners can hear improvement directly.", marks: 1, markCode: "M" },
              { reasoning: "They demonstrate sustained practice and learning over time.", marks: 1, markCode: "M" },
              { reasoning: "Paired with reflection, they show not just improvement but understanding of it.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: growth evidence is more convincing than claims of improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Early-recent comparisons provide direct, audible evidence of musical growth.",
            commonErrors: [
              "Showing only final performances without development context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's musical portfolio.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating portfolio", statement: "Assess range, growth evidence, documentation quality and reflection." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes recordings, shows some growth, has compositions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. only recent work, no reflections, poor documentation — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests adding early recordings, reflective entries, better organisation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate portfolio by range, growth evidence, documentation and reflection.",
            commonErrors: [
              "Judging portfolio only by performance quality, not documentation.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Recordings in a musical portfolio should be labelled with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the student's name" },
              { id: "b", text: "Date, piece and performance context" },
              { id: "c", text: "The recording equipment model" },
              { id: "d", text: "The audience size" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recording documentation", statement: "Labels with date, piece and context make recordings verifiable and organised." },
            ],
            steps: [
              { reasoning: "Clear labels include date, piece and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Date, piece and performance context",
            commonErrors: [
              "Leaving recordings unlabelled so growth cannot be verified.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Including both early and recent recordings of the same piece in a portfolio primarily demonstrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Technical accuracy of the instrument" },
              { id: "b", text: "Audible musical growth over time" },
              { id: "c", text: "Knowledge of music history" },
              { id: "d", text: "The student's favourite piece" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth evidence", statement: "Comparisons make development audible and undeniable." },
            ],
            steps: [
              { reasoning: "Paired recordings make improvement directly audible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Audible musical growth over time",
            commonErrors: [
              "Presenting only the best recording without development context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A composition portfolio should ideally include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only finished scores" },
              { id: "b", text: "Scores, recordings and programme notes explaining intent" },
              { id: "c", text: "Only audio files" },
              { id: "d", text: "Copying famous compositions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Composition portfolio", statement: "Scores, recordings and notes document both product and creative journey." },
            ],
            steps: [
              { reasoning: "Composition evidence combines scores, recordings and explanatory notes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Scores, recordings and programme notes explaining intent",
            commonErrors: [
              "Submitting scores without recordings or context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Analysed failures are valuable in a musical portfolio because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Show the student lacks talent" },
              { id: "b", text: "Demonstrate learning from mistakes" },
              { id: "c", text: "Fill space in the portfolio" },
              { id: "d", text: "Replace the need for successful performances" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Learning evidence", statement: "Analysed failures show critical engagement and genuine learning." },
            ],
            steps: [
              { reasoning: "Failures analysed honestly demonstrate learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Demonstrate learning from mistakes",
            commonErrors: [
              "Hiding failures or presenting only successes.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "To document stage presence and visual elements of a performance, a student should use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Audio recordings only" },
              { id: "b", text: "Video recordings" },
              { id: "c", text: "Written diary entries only" },
              { id: "d", text: "Photographs of the instrument" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recording media", statement: "Video captures stage presence; audio captures musical detail." },
            ],
            steps: [
              { reasoning: "Video records visual elements such as stage presence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Video recordings",
            commonErrors: [
              "Using only audio when visual performance matters.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Programme notes accompanying a portfolio recording primarily serve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List the recording equipment" },
              { id: "b", text: "Explain the musical intent and context of the performance" },
              { id: "c", text: "Replace the need for the recording" },
              { id: "d", text: "Show the student's grades" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Programme notes", statement: "Written context explains intent that sound alone cannot convey." },
            ],
            steps: [
              { reasoning: "Programme notes explain intent and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Explain the musical intent and context of the performance",
            commonErrors: [
              "Treating programme notes as decoration rather than context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A portfolio best demonstrates 'range' by including:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many copies of the same piece" },
              { id: "b", text: "Works across different genres, styles or periods" },
              { id: "c", text: "Only technically difficult pieces" },
              { id: "d", text: "Only pieces the student enjoys" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Range", statement: "Diverse repertoire shows breadth of musicianship." },
            ],
            steps: [
              { reasoning: "Range means variety across genres, styles or periods.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Works across different genres, styles or periods",
            commonErrors: [
              "Confusing range with quantity of similar material.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which portfolio entry most convincingly evidences sustained musical development?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single flawless final performance" },
              { id: "b", text: "A sequence of recordings with dated reflections showing progress" },
              { id: "c", text: "A list of awards received" },
              { id: "d", text: "A written claim that the student improved" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Convincing evidence", statement: "Dated, documented sequences with reflection are verifiable growth evidence." },
            ],
            steps: [
              { reasoning: "Dated sequences with reflection provide verifiable growth evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A sequence of recordings with dated reflections showing progress",
            commonErrors: [
              "Relying on claims or single performances instead of documented sequences.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three types of evidence a musical portfolio should contain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio evidence", statement: "Recordings, compositions, scores, analyses and reflections." },
            ],
            steps: [
              { reasoning: "Performance recordings showing progress over time.", marks: 1, markCode: "M" },
              { reasoning: "Compositions with scores and explanatory notes.", marks: 1, markCode: "M" },
              { reasoning: "Written analyses or reflective entries documenting learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recordings, compositions and written reflections evidence musical growth.",
            commonErrors: [
              "Including only one type of evidence without range.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how a student should document a performance recording for a portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording documentation", statement: "Label with date, piece and context; choose appropriate medium." },
            ],
            steps: [
              { reasoning: "Record regularly — audio for detail, video for stage presence.", marks: 1, markCode: "M" },
              { reasoning: "Label each recording with date, piece and context.", marks: 1, markCode: "M" },
              { reasoning: "Organise recordings so comparisons over time are easy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Labelled, organised recordings with appropriate media document performance.",
            commonErrors: [
              "Unlabelled recordings that cannot be placed in time.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a portfolio should document the creative process, not just finished compositions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Process documentation", statement: "Sketches, drafts and revisions show creative journey and development." },
            ],
            steps: [
              { reasoning: "Finished work shows product; process shows journey.", marks: 1, markCode: "M" },
              { reasoning: "Drafts and revisions evidence development of compositional skill.", marks: 1, markCode: "M" },
              { reasoning: "Assessors value evidence of creative engagement over polished results alone.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: document process alongside product.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Process documentation evidences creative development, not just product.",
            commonErrors: [
              "Showing only final compositions without drafts or notes.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student could use a poor performance as portfolio evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Learning from performance", statement: "Analysed failures with reflection demonstrate learning." },
            ],
            steps: [
              { reasoning: "Include the recording or documentation of the performance.", marks: 1, markCode: "M" },
              { reasoning: "Add a reflective entry identifying what went wrong.", marks: 1, markCode: "M" },
              { reasoning: "Explain what was learned and how practice changed afterwards.", marks: 1, markCode: "R" },
              { reasoning: "Show later improvement as evidence of learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Pair the failure with analysis and subsequent improvement evidence.",
            commonErrors: [
              "Hiding the failure or presenting it without analysis.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student submits a composition portfolio containing three scores and one recording.",
          parts: [
            { label: "a", prompt: "Identify two weaknesses in this portfolio.", marks: 2 },
            { label: "b", prompt: "Explain the effect of each weakness on the portfolio's evidence.", marks: 2 },
            { label: "c", prompt: "Suggest two improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating composition portfolio", statement: "Assess scores, recordings, notes, range and process evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Weaknesses, e.g. only one recording, no programme notes or process evidence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two weaknesses correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect, e.g. intent cannot be verified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness linked to its effect on evidence quality.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests recordings for each piece and brief programme notes.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add recordings and explanatory notes to strengthen composition evidence.",
            commonErrors: [
              "Judging the portfolio by number of scores alone.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how early-versus-recent comparisons strengthen portfolio evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative evidence", statement: "Paired examples make development concrete and audible." },
            ],
            steps: [
              { reasoning: "Comparisons make growth concrete rather than claimed.", marks: 1, markCode: "M" },
              { reasoning: "They show sustained practice and learning over time.", marks: 1, markCode: "M" },
              { reasoning: "Paired with reflection they reveal understanding of improvement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparisons are more convincing than assertions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Early-recent comparisons provide direct, verifiable evidence of growth.",
            commonErrors: [
              "Asserting improvement without comparative evidence.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three things programme notes for a portfolio recording should contain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Programme notes", statement: "Notes provide context: piece, intent, performance circumstances." },
            ],
            steps: [
              { reasoning: "Title and composer of the piece performed.", marks: 1, markCode: "M" },
              { reasoning: "Musical intent — interpretation or expressive aims.", marks: 1, markCode: "M" },
              { reasoning: "Context such as date, occasion or stage of preparation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Title, intent and context belong in programme notes.",
            commonErrors: [
              "Writing notes that describe equipment rather than music.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-content-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare two portfolio entries: Entry A is a single recent video of a polished performance; Entry B is three dated recordings of the same piece across the year with short reflections.",
          parts: [
            { label: "a", prompt: "Identify what each entry evidences well.", marks: 2 },
            { label: "b", prompt: "Explain which entry better demonstrates musical growth and why.", marks: 3 },
            { label: "c", prompt: "Suggest one improvement to Entry A.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Growth documentation", statement: "Dated sequences with reflection evidence development; single performances evidence only current level." },
            ],
            steps: [
              { part: "a", reasoning: "A evidences current performance quality; B evidences development over time.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both correctly characterised.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "B shows growth through dated comparison.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reflections add analytical depth to B's evidence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Conclusion: B is stronger growth evidence.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest adding earlier recordings of the same piece.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest adding a reflective note comparing performances.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "B better evidences growth; A could be improved by adding earlier recordings and reflection.",
            commonErrors: [
              "Judging entries only by performance polish, not documentation.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u6-portfolio-curation",
      title: "Curating and organising the portfolio",
      skill: "Curate and organise portfolio materials to present musical development clearly and professionally.",
      lesson: {
        sections: [
          {
            heading: "Selection and organisation",
            body: "Select work that shows range and growth: not just best performances but representative development. Organise logically — chronologically to show growth, or by category (performance, composition, analysis). Label everything clearly: dates, pieces, contexts. A portfolio is a professional document — presentation matters.",
          },
          {
            heading: "Written components",
            body: "Include written elements: artist/composer statement explaining musical aims; reflective entries analysing performances and compositions; programme notes for recordings. These provide context that recordings alone cannot — they show thinking, not just doing.",
          },
          {
            heading: "Digital and physical formats",
            body: "Digital portfolios allow video, audio and interactive elements — use them. Physical portfolios need professional presentation: clear labels, good printing, logical order. Consider both: digital for accessibility, physical for assessment. Backup everything — portfolios represent months of work.",
          },
        ],
        keyFormulas: [
          { name: "Portfolio organisation", statement: "Chronological or categorical + clear labels + written context" },
          { name: "Presentation", statement: "Professional formatting signals serious artistic practice" },
        ],
        workedExample: {
          problem: "A student has 50 recordings and must select for a portfolio. How should they choose?",
          solution: "Select ~10-15 recordings showing: technical growth (early vs late), range (different pieces/genres), and best current work. Include one or two 'failures' with reflection if they show learning. Organise chronologically or by piece. Label each with date, title, context.",
        },
      },
      questions: [
        {
          id: "music-u6-portfolio-curation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When curating a musical portfolio, the most important criterion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Including every recording" },
              { id: "b", text: "Showing range and growth in musical development" },
              { id: "c", text: "Using the most expensive equipment" },
              { id: "d", text: "Including only famous pieces" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Selection should demonstrate range and growth, not completeness." },
            ],
            steps: [
              { reasoning: "Portfolio selection should show range and growth, not include everything.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Showing range and growth in musical development",
            commonErrors: [
              "Including everything rather than curating selectively.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three ways to organise a musical portfolio effectively.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio organisation", statement: "Chronological, categorical and annotated organisation." },
            ],
            steps: [
              { reasoning: "Chronological — show growth over time.", marks: 1, markCode: "M" },
              { reasoning: "Categorical — group by performance, composition, analysis.", marks: 1, markCode: "M" },
              { reasoning: "Annotated — label each item with date, context and brief reflection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chronological, categorical and annotated organisation are effective.",
            commonErrors: [
              "Disorganised portfolio with no clear structure.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why written reflections strengthen a musical portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Written reflection", statement: "Written analysis shows thinking and learning that recordings alone cannot." },
            ],
            steps: [
              { reasoning: "Recordings show what happened; reflections show what was learned.", marks: 1, markCode: "M" },
              { reasoning: "Written analysis demonstrates critical thinking about performance and composition.", marks: 1, markCode: "M" },
              { reasoning: "Reflections connect evidence to growth — they make development explicit.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: written components transform a collection into a narrative of learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Written reflections show learning and critical thinking beyond recordings.",
            commonErrors: [
              "Relying only on recordings without analytical context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a student's portfolio organisation.",
          parts: [
            { label: "a", prompt: "Identify two strengths.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect.", marks: 2 },
            { label: "c", prompt: "Suggest improvements.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating organisation", statement: "Assess selection, structure, labelling and written components." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. includes range, some organisation, has written elements.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. disorganised, poor labels, missing growth evidence — each with effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggests reorganising chronologically, improving labels, adding reflections.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvements suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Evaluate organisation by selection, structure, labelling and written components.",
            commonErrors: [
              "Judging organisation only by quantity of materials.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When selecting recordings for a portfolio, a student should prioritise:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The most technically perfect takes" },
              { id: "b", text: "Recordings that show growth and range" },
              { id: "c", text: "The longest performances" },
              { id: "d", text: "Recordings made with expensive equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Selection should demonstrate range and growth, not completeness." },
            ],
            steps: [
              { reasoning: "Selection prioritises growth and range evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Recordings that show growth and range",
            commonErrors: [
              "Choosing only polished takes without development context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Organising portfolio materials chronologically is useful because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hides early weaknesses" },
              { id: "b", text: "Makes musical development visible over time" },
              { id: "c", text: "Is required by all assessment boards" },
              { id: "d", text: "Reduces the number of items needed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Chronological organisation", statement: "Time-ordered materials show growth directly." },
            ],
            steps: [
              { reasoning: "Chronological order makes development visible.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Makes musical development visible over time",
            commonErrors: [
              "Thinking chronological order hides weaknesses rather than showing journey.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'performance log' in a musical portfolio should record:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only concert dates" },
              { id: "b", text: "Performances given, repertoire played and experiences gained" },
              { id: "c", text: "Instrument purchase receipts" },
              { id: "d", text: "Practice room schedules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Performance log", statement: "A record of performances, repertoire and experiences gained." },
            ],
            steps: [
              { reasoning: "A performance log records performances, repertoire and experiences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Performances given, repertoire played and experiences gained",
            commonErrors: [
              "Recording only dates without repertoire or reflection.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Written components such as artist statements and reflective entries strengthen a portfolio by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increasing the page count" },
              { id: "b", text: "Providing context and showing critical thinking" },
              { id: "c", text: "Replacing the need for recordings" },
              { id: "d", text: "Proving the student can write essays" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Written context", statement: "Written elements show thinking that recordings alone cannot." },
            ],
            steps: [
              { reasoning: "Written components provide context and show thinking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Providing context and showing critical thinking",
            commonErrors: [
              "Treating written components as filler rather than evidence.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Every item in a portfolio should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Kept in a single unmarked folder" },
              { id: "b", text: "Clearly labelled with date, title and context" },
              { id: "c", text: "Printed on expensive paper" },
              { id: "d", text: "Stored only digitally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Labelling", statement: "Clear labels make materials identifiable and verifiable." },
            ],
            steps: [
              { reasoning: "Clear labels include date, title and context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Clearly labelled with date, title and context",
            commonErrors: [
              "Leaving items unlabelled so context is lost.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Grouping portfolio materials by category (performance, composition, analysis) is most useful when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The portfolio must show range within each domain" },
              { id: "b", text: "The student wants to hide weak areas" },
              { id: "c", text: "Only digital portfolios are used" },
              { id: "d", text: "The student has very few materials" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Categorical organisation", statement: "Grouping by domain shows range within each area of musicianship." },
            ],
            steps: [
              { reasoning: "Categorical grouping shows range within each domain.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The portfolio must show range within each domain",
            commonErrors: [
              "Mixing categories so range cannot be assessed.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'repertoire list' in a portfolio documents:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The student's favourite songs" },
              { id: "b", text: "Pieces performed or studied" },
              { id: "c", text: "The student's practice schedule" },
              { id: "d", text: "Music theory definitions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Repertoire list", statement: "A documented collection of pieces performed or studied." },
            ],
            steps: [
              { reasoning: "A repertoire list documents pieces performed or studied.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pieces performed or studied",
            commonErrors: [
              "Listing pieces without dates or context.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A digital portfolio offers an advantage over a physical one primarily because it can:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Replace the need for written reflection" },
              { id: "b", text: "Include video, audio and interactive elements accessibly" },
              { id: "c", text: "Automatically assess the music" },
              { id: "d", text: "Guarantee higher marks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Digital portfolios", statement: "Digital formats allow multimedia and accessibility." },
            ],
            steps: [
              { reasoning: "Digital portfolios support video, audio and interactive elements.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Include video, audio and interactive elements accessibly",
            commonErrors: [
              "Assuming format alone determines assessment quality.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe three principles for selecting materials when curating a musical portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio selection", statement: "Choose for range, growth and representativeness, not quantity." },
            ],
            steps: [
              { reasoning: "Select work showing range across genres and skills.", marks: 1, markCode: "M" },
              { reasoning: "Include early and recent examples showing growth.", marks: 1, markCode: "M" },
              { reasoning: "Include analysed failures that demonstrate learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Select for range, growth and learning evidence rather than quantity.",
            commonErrors: [
              "Including everything rather than curating selectively.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why professional presentation matters in a musical portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Professional presentation", statement: "Clear formatting signals serious artistic practice." },
            ],
            steps: [
              { reasoning: "A portfolio is a professional document representing artistic practice.", marks: 1, markCode: "M" },
              { reasoning: "Poor presentation obscures the quality of the work.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: neat organisation supports the evidence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Professional presentation supports and signals serious musical practice.",
            commonErrors: [
              "Assuming content quality alone matters regardless of presentation.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the role of an artist or composer statement in a musical portfolio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Artist statement", statement: "A written statement frames musical aims and artistic identity." },
            ],
            steps: [
              { reasoning: "It explains the musician's aims and artistic direction.", marks: 1, markCode: "M" },
              { reasoning: "It provides context that recordings alone cannot convey.", marks: 1, markCode: "M" },
              { reasoning: "It frames the portfolio as an artistic identity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: the statement adds interpretive depth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The statement frames aims and provides context beyond the recordings.",
            commonErrors: [
              "Writing a generic statement unrelated to the portfolio content.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how a student should organise a portfolio containing both performance and composition materials.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Portfolio structure", statement: "Logical grouping with clear labels and written context." },
            ],
            steps: [
              { reasoning: "Group materials by category or chronology.", marks: 1, markCode: "M" },
              { reasoning: "Label each item with date, title and context.", marks: 1, markCode: "M" },
              { reasoning: "Add written components such as reflections or notes.", marks: 1, markCode: "M" },
              { reasoning: "Ensure the whole is easy to navigate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Group logically, label clearly and add written context.",
            commonErrors: [
              "Mixing categories without labels or structure.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q17",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student must reduce 40 portfolio recordings to about 12 for final submission.",
          parts: [
            { label: "a", prompt: "State two criteria for choosing which recordings to keep.", marks: 2 },
            { label: "b", prompt: "Explain why keeping one weaker recording may still be wise.", marks: 2 },
            { label: "c", prompt: "Describe how the kept recordings should be organised.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Portfolio curation", statement: "Curate for range, growth and learning evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Criteria, e.g. technical growth and range of pieces.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid criteria stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A weaker recording with reflection shows learning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Analysed failure evidences development better than polish alone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Organise chronologically or by piece with clear labels.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Clear organisation described.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Keep for growth and range, retain analysed failures, organise clearly.",
            commonErrors: [
              "Keeping only the best takes and losing growth evidence.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q18",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a portfolio should be backed up in multiple formats or locations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Portfolio security", statement: "Backups protect months of documented work from loss." },
            ],
            steps: [
              { reasoning: "Portfolios represent months of work.", marks: 1, markCode: "M" },
              { reasoning: "Files can be lost, corrupted or damaged.", marks: 1, markCode: "M" },
              { reasoning: "Backups ensure the evidence survives.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: secure backups are essential.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Backups protect valuable documented work from loss or damage.",
            commonErrors: [
              "Keeping a single unbacked-up copy of portfolio files.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "List three elements that make a portfolio 'professional'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Professional portfolio", statement: "Clear labels, logical order and consistent presentation." },
            ],
            steps: [
              { reasoning: "Clear, consistent labels on every item.", marks: 1, markCode: "M" },
              { reasoning: "Logical ordering or grouping of materials.", marks: 1, markCode: "M" },
              { reasoning: "Clean, readable presentation of written components.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Labels, logical order and clean presentation make it professional.",
            commonErrors: [
              "Confusing professional presentation with expensive materials.",
            ],
          },
        },
        {
          id: "music-u6-portfolio-curation-q20",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate this curation decision: a student selects only their ten most technically accurate performances, all from the final month.",
          parts: [
            { label: "a", prompt: "Identify two strengths of this selection.", marks: 2 },
            { label: "b", prompt: "Identify two weaknesses and explain their effect on the portfolio.", marks: 3 },
            { label: "c", prompt: "Suggest two changes to improve the selection.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating curation", statement: "Assess selection for range, growth and representativeness." },
            ],
            steps: [
              { part: "a", reasoning: "Strengths, e.g. consistent technical quality, recent material.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two strengths correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weaknesses, e.g. no growth evidence, narrow time span.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Each weakness explained with portfolio effect.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both weaknesses linked to reduced evidence of development.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Suggest adding earlier recordings to show growth.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Suggest including varied repertoire or analysed failure.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete changes stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add earlier and varied material; current selection shows quality but not growth.",
            commonErrors: [
              "Judging selection only by performance quality.",
            ],
          },
        },
      ],
    },
  ],
};
