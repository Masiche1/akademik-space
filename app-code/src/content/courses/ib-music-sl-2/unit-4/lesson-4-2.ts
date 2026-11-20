import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "music-u4-lesson-4-2",
  code: "4-2",
  title: "Asian and Indigenous Traditions",
  goal: "I CAN identify the musical characteristics and cultural contexts of Asian and Indigenous music traditions.",
  standards: [
    "Contextual Studies",
    "Global Music",
  ],
  vocabulary: [
    { term: "Gamelan", definition: "Indonesian ensemble of gongs, metallophones and drums playing interlocking patterns." },
    { term: "Sitar", definition: "Indian plucked string instrument with sympathetic strings, central to Hindustani classical music." },
    { term: "Raga", definition: "Indian melodic framework — a set of notes and rules for improvisation, associated with mood and time of day." },
    { term: "Tala", definition: "Indian rhythmic cycle — a repeating pattern of beats organising improvisation." },
    { term: "Aboriginal songlines", definition: "Australian Indigenous musical narratives mapping landscape and ancestral knowledge." },
    { term: "Powwow", definition: "North American Indigenous gathering featuring competitive dancing and drum music." },
  ],
  concepts: [
    {
      id: "music-u4-asian-traditions",
      title: "Asian musical traditions",
      skill: "Identify the characteristics and cultural contexts of Indian classical and Indonesian gamelan music.",
      lesson: {
        sections: [
          {
            heading: "Indian classical music",
            body: "Indian classical music is based on **raga** — melodic frameworks that prescribe scale, ornamentation and mood, often associated with specific times of day. **Tala** provides the rhythmic cycle — repeating beat patterns that structure improvisation. Music is deeply spiritual: ragas are believed to affect consciousness; performance is meditation as much as entertainment.",
          },
          {
            heading: "Gamelan",
            body: "Indonesian **gamelan** ensembles feature gongs, metallophones and drums playing interlocking patterns — each instrument has a specific role in the ensemble texture. The music is communal and cyclical: patterns repeat and evolve rather than develop linearly. Gamelan reflects Javanese and Balinese court traditions and communal values.",
          },
          {
            heading: "Common threads",
            body: "Asian traditions share characteristics: emphasis on improvisation within strict frameworks (raga/tala, gamelan patterns); music as spiritual or communal practice rather than individual expression; oral transmission; and deep integration with ritual, dance and daily life. These differ fundamentally from Western art music's emphasis on composition and individual authorship.",
          },
        ],
        keyFormulas: [
          { name: "Indian elements", statement: "Raga (melody framework) + tala (rhythm cycle) + improvisation" },
          { name: "Gamelan", statement: "Interlocking patterns + communal ensemble + cyclical structure" },
        ],
        workedExample: {
          problem: "A sitar player improvises within a melodic framework while a tabla player maintains a repeating beat cycle. What Indian classical elements are present?",
          solution: "Raga (the melodic framework guiding improvisation) and tala (the rhythmic cycle provided by tabla). The improvisation occurs within these structures — freedom within framework is the essence of Indian classical performance.",
        },
      },
      questions: [
        {
          id: "music-u4-asian-traditions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A raga in Indian classical music is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rhythmic cycle" },
              { id: "b", text: "A melodic framework prescribing notes, ornamentation and mood" },
              { id: "c", text: "A type of instrument" },
              { id: "d", text: "A dance form" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Raga", statement: "A melodic framework with specific notes, rules and associated mood/time." },
            ],
            steps: [
              { reasoning: "A raga is a melodic framework — scale, ornamentation rules and mood — for improvisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A melodic framework prescribing notes, ornamentation and mood",
            commonErrors: [
              "Confusing raga (melodic framework) with tala (rhythmic cycle).",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two characteristics of gamelan music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Gamelan features", statement: "Interlocking patterns, communal ensemble, cyclical structure." },
            ],
            steps: [
              { reasoning: "Ensemble of gongs, metallophones and drums playing interlocking parts.", marks: 1, markCode: "M" },
              { reasoning: "Cyclical structure — patterns repeat and evolve rather than develop linearly.", marks: 1, markCode: "M" },
              { reasoning: "Communal function — music serves ritual, ceremony and community cohesion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gamelan features interlocking patterns, cyclical form and communal function.",
            commonErrors: [
              "Describing gamelan as solo performance or Western-style development.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how improvisation works within Indian classical frameworks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Improvisation within framework", statement: "Raga and tala provide structure; musician improvises within them." },
            ],
            steps: [
              { reasoning: "The raga provides melodic rules — which notes, which ornaments, which mood.", marks: 1, markCode: "M" },
              { reasoning: "The tala provides rhythmic cycle — the beat pattern the improviser must follow.", marks: 1, markCode: "M" },
              { reasoning: "Within these frameworks, the musician creates spontaneous variations — freedom within structure.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: improvisation is guided creativity, not randomness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Improvisation occurs within raga/tala frameworks — guided creativity.",
            commonErrors: [
              "Treating improvisation as completely free rather than framework-bound.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare Indian classical and gamelan musical traditions.",
          parts: [
            { label: "a", prompt: "Identify one similarity between the traditions.", marks: 2 },
            { label: "b", prompt: "Identify one key difference and explain its cause.", marks: 2 },
            { label: "c", prompt: "Evaluate which tradition is more 'communal'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Asian traditions comparison", statement: "Both use frameworks for improvisation but differ in ensemble vs solo emphasis." },
            ],
            steps: [
              { part: "a", reasoning: "Both use strict frameworks for improvisation — raga/tala vs gamelan patterns.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Indian: soloist improvises within framework, ensemble accompanies; Gamelan: all players interlock equally — caused by different performance structures.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gamelan is more communal — no soloist hierarchy, all parts essential; Indian classical has soloist-centred structure despite group accompaniment.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on communal emphasis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Framework-bound improvisation. (b) Soloist vs interlocking ensemble. (c) Gamelan more communal.",
            commonErrors: [
              "Comparing surface features without understanding structural differences.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Indian classical music, a tala is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A melodic framework of notes and moods" },
              { id: "b", text: "A repeating rhythmic cycle organising the performance" },
              { id: "c", text: "A type of sitar tuning" },
              { id: "d", text: "A devotional hymn" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tala", statement: "A repeating rhythmic cycle that structures improvisation." },
            ],
            steps: [
              { reasoning: "Tala is the rhythmic framework — a cycle of beats within which improvisation occurs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A repeating rhythmic cycle organising the performance",
            commonErrors: [
              "Confusing tala (rhythm) with raga (melody framework).",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the instrument typically associated with Hindustani classical melody and the instrument typically providing the tala cycle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Indian instruments", statement: "Sitar carries melodic improvisation; tabla articulates the tala cycle." },
            ],
            steps: [
              { reasoning: "Sitar (or sarod/santoor) provides melody; tabla provides the rhythmic cycle.", marks: 1, markCode: "M" },
              { reasoning: "Both instruments correctly identified with roles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sitar for melody; tabla for the tala rhythmic cycle.",
            commonErrors: [
              "Reversing the roles of melody and rhythm instruments.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Gamelan ensembles are characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single soloist with orchestral accompaniment" },
              { id: "b", text: "Interlocking parts played by gongs, metallophones and drums" },
              { id: "c", text: "Western functional harmony" },
              { id: "d", text: "Through-composed linear development" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Gamelan texture", statement: "Each gamelan instrument plays an interlocking part in a layered texture." },
            ],
            steps: [
              { reasoning: "Gamelan distributes the music across interlocking parts for many instruments rather than a soloist.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Interlocking parts played by gongs, metallophones and drums",
            commonErrors: [
              "Assuming gamelan resembles a Western orchestra with a soloist.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why Indian classical performance is described as 'meditation as much as entertainment'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Spiritual function", statement: "Ragas are believed to affect consciousness; performance requires deep concentration." },
            ],
            steps: [
              { reasoning: "Ragas carry associated moods and times of day and are believed to influence consciousness.", marks: 1, markCode: "M" },
              { reasoning: "Improvisation within raga/tala demands sustained mental focus and discipline.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: performance is a spiritual discipline, not merely display.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Raga's spiritual associations and disciplined improvisation make performance a meditative practice.",
            commonErrors: [
              "Treating Indian classical music as purely secular entertainment.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "The association of certain ragas with specific times of day shows that raga functions as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A random collection of notes" },
              { id: "b", text: "A framework linking melody, mood and cosmic/temporal order" },
              { id: "c", text: "A fixed composition" },
              { id: "d", text: "A dance notation system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Raga associations", statement: "Ragas are linked to moods, times and even seasons in tradition." },
            ],
            steps: [
              { reasoning: "Time-of-day associations reveal raga as an ordered framework connecting sound to mood and cosmic rhythm.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A framework linking melody, mood and cosmic/temporal order",
            commonErrors: [
              "Reducing raga to a scale without its cultural associations.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "Gamelan analysis",
            text: "A Javanese gamelan ensemble performs: a large gong marks the cycle's beginning and end, metallophones play interlocking melodic patterns, drums punctuate the texture, and the piece repeats a core pattern with gradual variations before returning to the opening gong stroke.",
          },
          stem: "Analyse the described gamelan performance.",
          parts: [
            { label: "a", prompt: "Identify two structural features of gamelan music.", marks: 2 },
            { label: "b", prompt: "Explain how the form differs from Western through-composition.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Gamelan form", statement: "Gamelan uses cyclical, layered structures rather than linear development." },
            ],
            steps: [
              { part: "a", reasoning: "Cyclical structure (gong marking cycle) and interlocking parts — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Western music develops linearly through sections; gamelan repeats and varies within cycles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference convincingly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cyclical form, interlocking texture, gong punctuation. (b) Repetition/variation vs linear development.",
            commonErrors: [
              "Forcing Western formal categories onto gamelan.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The key structural difference between Indian classical and gamelan performance is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Indian music has no rhythm" },
              { id: "b", text: "Indian classical centres on a soloist improvising over accompaniment while gamelan interlocks equally among all players" },
              { id: "c", text: "Gamelan uses solo improvisation exclusively" },
              { id: "d", text: "Both are identical in structure" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Soloist vs ensemble", statement: "Indian classical features a soloist; gamelan distributes parts equally." },
            ],
            steps: [
              { reasoning: "Indian classical centres the soloist's improvisation; gamelan has no hierarchy — all parts essential.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Indian classical centres on a soloist improvising over accompaniment while gamelan interlocks equally among all players",
            commonErrors: [
              "Missing the soloist-versus-ensemble structural contrast.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse the phrase 'freedom within framework' as it applies to Asian musical traditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Framework-bound creativity", statement: "Raga/tala and gamelan patterns constrain and enable improvisation." },
            ],
            steps: [
              { reasoning: "Frameworks define what is possible — permitted notes, rhythms, patterns.", marks: 1, markCode: "M" },
              { reasoning: "Within them, musicians create spontaneous variations — the constraints generate creativity.", marks: 1, markCode: "M" },
              { reasoning: "This differs from free improvisation — mastery means deep knowledge of the rules.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: structure and freedom are complementary, not opposed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asian traditions bind improvisation to strict frameworks — freedom exists within defined rules.",
            commonErrors: [
              "Treating improvisation as either totally free or totally fixed.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described performances",
            author: "Written for Akademik Space",
            source: "Comparative analysis",
            text: "Performance A: a sitar player improvises a melody within a raga while a tabla player cycles a tala beat and a tanpura sustains a drone. Performance B: fourteen musicians play metallophones, gongs and drums in interlocking patterns that cycle and return to a gong stroke.",
          },
          stem: "Compare the two described performances.",
          parts: [
            { label: "a", prompt: "Identify the tradition each performance represents.", marks: 2 },
            { label: "b", prompt: "Describe one structural difference.", marks: 2 },
            { label: "c", prompt: "Evaluate which is more 'communal'.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Comparative structure", statement: "Indian classical centres a soloist; gamelan interlocks equal parts cyclically." },
            ],
            steps: [
              { part: "a", reasoning: "A = Indian classical (raga/tala, sitar/tabla); B = gamelan (interlocking metallophones/gongs).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both traditions correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A is soloist-centred with accompaniment; B distributes melody/rhythm across all players in cycles.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference clearly described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Gamelan more communal — no soloist hierarchy, every part essential; Indian classical retains soloist focus.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement offered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A: Indian classical; B: gamelan. (b) Soloist vs interlocking ensemble. (c) Gamelan more communal.",
            commonErrors: [
              "Comparing features without linking to tradition or structure.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which characteristic is shared by Indian classical and gamelan traditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oral transmission and improvisation within strict frameworks" },
              { id: "b", text: "Written notation as primary transmission" },
              { id: "c", text: "Individual authorship of compositions" },
              { id: "d", text: "Linear through-composed forms" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Shared traits", statement: "Both traditions transmit orally and improvise within defined frameworks." },
            ],
            steps: [
              { reasoning: "Both rely on oral transmission and framework-bound improvisation rather than scores.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Oral transmission and improvisation within strict frameworks",
            commonErrors: [
              "Overlooking shared oral/ improvisatory foundations.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate gamelan music as a model of communal music-making compared with Western concert practice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Commune vs concert", statement: "Gamelan integrates all players equally; Western concerts separate performer and audience." },
            ],
            steps: [
              { reasoning: "In gamelan every player owns an essential interlocking part — no soloist hierarchy.", marks: 1, markCode: "M" },
              { reasoning: "Western concerts typically foreground a soloist or conductor with listeners as passive audience.", marks: 1, markCode: "M" },
              { reasoning: "Gamelan's structure embodies communal values; concert practice reflects individualist aesthetics.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ensemble structure can express different social philosophies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gamelan models communal equality, contrasting Western concert's performer-audience divide.",
            commonErrors: [
              "Describing differences without linking them to social values.",
            ],
          },
        },
        {
          id: "music-u4-asian-traditions-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "If a tabla player maintains a repeating beat cycle while a sitar player improvises a melody, the tabla is providing the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Raga" },
              { id: "b", text: "Tala" },
              { id: "c", text: "Tanpura drone" },
              { id: "d", text: "Sargam notation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tala function", statement: "The tabla articulates the tala — the repeating rhythmic cycle." },
            ],
            steps: [
              { reasoning: "Tabla performs the tala cycle while sitar improvises within the raga.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tala",
            commonErrors: [
              "Confusing raga (melody) with tala (rhythm).",
            ],
          },
        },
      ],
    },
    {
      id: "music-u4-indigenous-traditions",
      title: "Indigenous musical traditions",
      skill: "Identify the characteristics and cultural functions of Aboriginal Australian and North American Indigenous music.",
      lesson: {
        sections: [
          {
            heading: "Aboriginal songlines",
            body: "Australian Aboriginal music is inseparable from **songlines** — musical narratives that map the landscape, encode ancestral knowledge and guide travel. Songs are not just entertainment; they are maps, laws and spiritual teachings. Instruments include didgeridoo (drone), clapsticks and voice. Music connects people to country — the land itself is the score.",
          },
          {
            heading: "North American powwow",
            body: "North American Indigenous powwows feature competitive dancing to drum music: a central drum group provides the heartbeat, singers provide vocals, dancers compete in categories. The drum is sacred — considered the heartbeat of the community. Powwow music blends traditional and contemporary elements, serving both ceremony and celebration.",
          },
          {
            heading: "Common threads",
            body: "Indigenous traditions share characteristics: music as spiritual and communal practice; deep connection to land and ancestors; oral transmission; instruments made from natural materials; and function beyond entertainment — music encodes knowledge, law, identity and survival. These traditions predate Western contact and continue despite colonisation.",
          },
        ],
        keyFormulas: [
          { name: "Songlines", statement: "Musical narratives mapping landscape and ancestral knowledge" },
          { name: "Powwow structure", statement: "Central drum + singers + competitive dancers = community celebration" },
        ],
        workedExample: {
          problem: "A traveller uses a song to navigate across unfamiliar territory, with the melody encoding landmarks and water sources. What Indigenous musical concept is this?",
          solution: "Songlines — Aboriginal musical narratives that map the landscape. The song functions as a navigational tool, encoding geographical and spiritual knowledge in melody. This demonstrates music as functional knowledge, not just art.",
        },
      },
      questions: [
        {
          id: "music-u4-indigenous-traditions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Aboriginal songlines are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Casual folk songs" },
              { id: "b", text: "Musical narratives mapping landscape and ancestral knowledge" },
              { id: "c", text: "Dance competitions" },
              { id: "d", text: "Religious hymns" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Songlines", statement: "Musical narratives encoding geographical and spiritual knowledge." },
            ],
            steps: [
              { reasoning: "Songlines are musical narratives that map landscape and encode ancestral knowledge.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Musical narratives mapping landscape and ancestral knowledge",
            commonErrors: [
              "Treating songlines as entertainment rather than functional knowledge.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two characteristics of powwow music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Powwow features", statement: "Central drum, competitive dancing, communal celebration and tradition-modern blend." },
            ],
            steps: [
              { reasoning: "Central drum group provides rhythmic foundation — the 'heartbeat' of the community.", marks: 1, markCode: "M" },
              { reasoning: "Singers and dancers perform competitively in categories while audience participates.", marks: 1, markCode: "M" },
              { reasoning: "Blends traditional elements with contemporary songs and styles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Powwow features central drum, competitive dancing and tradition-modern blend.",
            commonErrors: [
              "Describing powwow as passive concert rather than participatory celebration.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how Indigenous music connects people to land and ancestors.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Land and ancestry", statement: "Music encodes geographical knowledge and ancestral presence." },
            ],
            steps: [
              { reasoning: "Songlines map landscapes — melody encodes routes, landmarks and water sources.", marks: 1, markCode: "M" },
              { reasoning: "Songs invoke ancestors — performance maintains spiritual connection across generations.", marks: 1, markCode: "M" },
              { reasoning: "Music is inseparable from country — the land is both subject and instrument.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: Indigenous music embodies relationship to place and time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indigenous music encodes land knowledge and ancestral connection in sound.",
            commonErrors: [
              "Treating Indigenous music as generic 'world music' without land connection.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare Aboriginal and North American Indigenous musical traditions.",
          parts: [
            { label: "a", prompt: "Identify one similarity between the traditions.", marks: 2 },
            { label: "b", prompt: "Identify one key difference and explain its cause.", marks: 2 },
            { label: "c", prompt: "Evaluate which tradition more directly encodes practical knowledge.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Indigenous comparison", statement: "Both connect music to land and community but differ in structure and function." },
            ],
            steps: [
              { part: "a", reasoning: "Both connect music to land, ancestors and community; both use natural instruments and oral transmission.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Similarity correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Songlines: navigational/spiritual narratives; Powwow: competitive dance celebration — caused by different cultural needs and environments.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Difference explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Songlines more directly encode practical knowledge — they are literal maps; powwow music serves social/spiritual celebration more than practical function.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on practical encoding.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Land/ancestor/community connection. (b) Navigational vs celebratory. (c) Songlines more practical.",
            commonErrors: [
              "Comparing surface features without understanding cultural function.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The didgeridoo in Aboriginal Australian music primarily provides:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complex melodic line" },
              { id: "b", text: "A continuous low drone" },
              { id: "c", text: "A percussive rhythm pattern" },
              { id: "d", text: "Harmonic accompaniment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Didgeridoo", statement: "The didgeridoo produces a sustained fundamental drone supporting vocal songlines." },
            ],
            steps: [
              { reasoning: "The didgeridoo is a drone instrument — a continuous low fundamental tone.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A continuous low drone",
            commonErrors: [
              "Assuming the didgeridoo plays melody rather than drone.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name the three main participant groups in a North American powwow and their roles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Powwow roles", statement: "Drum group provides rhythm; singers provide vocals; dancers perform competitively." },
            ],
            steps: [
              { reasoning: "Drum group (heartbeat rhythm), singers (vocals), dancers (competitive categories) — all three named.", marks: 1, markCode: "M" },
              { reasoning: "Roles accurately described for each group.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Drum group (rhythm), singers (vocals), dancers (competition).",
            commonErrors: [
              "Omitting one of the three core groups or their roles.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Aboriginal songlines function primarily as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Entertainment for travellers" },
              { id: "b", text: "Musical maps encoding routes, landmarks and ancestral knowledge" },
              { id: "c", text: "Dance accompaniment only" },
              { id: "d", text: "Lullabies for children" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Songline function", statement: "Songlines encode geographical and spiritual knowledge in melody." },
            ],
            steps: [
              { reasoning: "Songlines are navigational and spiritual maps sung across the landscape.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Musical maps encoding routes, landmarks and ancestral knowledge",
            commonErrors: [
              "Treating songlines as entertainment rather than functional knowledge.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the drum is considered sacred in North American powwow tradition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Sacred drum", statement: "The powwow drum is regarded as the community's heartbeat and spiritual centre." },
            ],
            steps: [
              { reasoning: "The drum is understood as the heartbeat of the community — its rhythm sustains the gathering.", marks: 1, markCode: "M" },
              { reasoning: "It carries songs that connect people to ancestors and cultural identity.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: the drum is a sacred object central to spiritual and social life.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The drum is the community's sacred heartbeat, carrying songs and ancestral connection.",
            commonErrors: [
              "Treating the drum as merely a rhythmic accompaniment.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Competitive dancing at powwows primarily serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminate weaker dancers" },
              { id: "b", text: "Celebrate culture and maintain tradition through skilled performance" },
              { id: "c", text: "Earn money for the drum group only" },
              { id: "d", text: "Impress judges from outside the community" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Powwow competition", statement: "Dance categories honour skill and sustain cultural practice." },
            ],
            steps: [
              { reasoning: "Competition celebrates cultural achievement and keeps traditional dance alive.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Celebrate culture and maintain tradition through skilled performance",
            commonErrors: [
              "Reading competition as purely Western-style rivalry rather than cultural celebration.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "Aboriginal music analysis",
            text: "An elder sings a songline while a didgeridoo sustains a low drone and clapsticks mark the rhythm. The melody traces a route across ancestral country, naming waterholes and sacred sites as it rises and falls.",
          },
          stem: "Analyse the described performance.",
          parts: [
            { label: "a", prompt: "Identify two musical features.", marks: 2 },
            { label: "b", prompt: "Explain the song's cultural function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Songline analysis", statement: "Drone, clapsticks and melody-as-map encode landscape and ancestral knowledge." },
            ],
            steps: [
              { part: "a", reasoning: "Didgeridoo drone; clapstick rhythm; melodic contour mapping route — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Song functions as navigational map and spiritual teaching — knowledge transmission, not entertainment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural function convincingly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Drone, clapsticks, melody-as-map. (b) Navigational/spiritual knowledge transmission.",
            commonErrors: [
              "Describing sound without addressing the songline's mapping function.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The use of natural materials (wood, stone, hide, seed pods) in Indigenous instruments primarily signifies:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lack of access to manufactured instruments" },
              { id: "b", text: "A deep connection between music, land and tradition" },
              { id: "c", text: "Deliberate primitivism" },
              { id: "d", text: "European missionary influence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Natural materials", statement: "Instruments made from local natural materials embody relationship to country." },
            ],
            steps: [
              { reasoning: "Natural materials connect instruments to the land and to ancestral craft traditions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A deep connection between music, land and tradition",
            commonErrors: [
              "Reading natural materials as limitation rather than intentional connection.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how Indigenous music encodes knowledge, law and identity beyond entertainment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Knowledge encoding", statement: "Songlines carry law, geography and identity; powwow songs carry community memory." },
            ],
            steps: [
              { reasoning: "Songs encode practical knowledge — routes, resources, sacred sites — in melody.", marks: 1, markCode: "M" },
              { reasoning: "They transmit law and cultural protocols across generations orally.", marks: 1, markCode: "M" },
              { reasoning: "Performance affirms identity — who you are is tied to what you sing and where.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: music is a technology of memory and belonging.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indigenous music encodes practical knowledge, law and identity — a technology of memory.",
            commonErrors: [
              "Treating Indigenous music as generic 'world music' without knowledge function.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described traditions",
            author: "Written for Akademik Space",
            source: "Indigenous music comparison",
            text: "Tradition A: an elder sings a melody that maps a journey across ancestral land, naming places and water sources, accompanied by a didgeridoo drone. Tradition B: a drum group leads a gathering where dancers compete in categories judged by elders, with songs blending traditional and new lyrics.",
          },
          stem: "Compare the two described Indigenous traditions.",
          parts: [
            { label: "a", prompt: "Identify each tradition.", marks: 2 },
            { label: "b", prompt: "Describe one key difference in function.", marks: 2 },
            { label: "c", prompt: "Evaluate which more directly preserves practical knowledge.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Songline vs powwow", statement: "Songlines encode navigation/knowledge; powwow celebrates community through competition." },
            ],
            steps: [
              { part: "a", reasoning: "A = Aboriginal songlines; B = North American powwow.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both traditions correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Songlines serve navigational/spiritual knowledge transmission; powwow serves communal celebration and cultural continuity.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Functional difference clearly stated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Songlines more directly encode practical knowledge — literal maps of routes and resources; powwow's knowledge function is more social/spiritual.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement offered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Songlines vs powwow. (b) Knowledge transmission vs celebration. (c) Songlines more practical.",
            commonErrors: [
              "Comparing surface features without addressing function.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which characteristic is shared by Aboriginal and North American Indigenous music?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Written notation and composed scores" },
              { id: "b", text: "Oral transmission, land connection and communal function" },
              { id: "c", text: "Western harmonic structures" },
              { id: "d", text: "Passive audience listening" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Indigenous commonalities", statement: "Both connect music to land, ancestors and community through oral means." },
            ],
            steps: [
              { reasoning: "Both traditions transmit orally, connect to land and serve communal rather than passive functions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Oral transmission, land connection and communal function",
            commonErrors: [
              "Focusing on differences and missing shared foundations.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate how Indigenous music traditions have survived colonisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Resilience", statement: "Traditions adapted to new conditions while maintaining core functions." },
            ],
            steps: [
              { reasoning: "Suppression and forced assimilation threatened languages, instruments and ceremonial practices.", marks: 1, markCode: "M" },
              { reasoning: "Communities preserved knowledge through songlines, oral transmission and continued performance.", marks: 1, markCode: "M" },
              { reasoning: "Adaptation occurred — powwow blends traditional and contemporary elements — without losing core identity.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: survival reflects deliberate cultural resistance and adaptability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indigenous music survived through oral persistence, community practice and adaptive blending.",
            commonErrors: [
              "Claiming traditions vanished or survived unchanged.",
            ],
          },
        },
        {
          id: "music-u4-indigenous-traditions-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The phrase 'the land is the score' best describes which Indigenous concept?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Powwow drum circles" },
              { id: "b", text: "Songlines that encode the landscape in melody" },
              { id: "c", text: "Competitive dance categories" },
              { id: "d", text: "Clapstick rhythms" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Land as score", statement: "Songlines map the land itself into musical form." },
            ],
            steps: [
              { reasoning: "Songlines literally encode landscape routes and sites in melodic form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Songlines that encode the landscape in melody",
            commonErrors: [
              "Missing the songline-land connection.",
            ],
          },
        },
      ],
    },
  ],
};
