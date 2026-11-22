import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "music-u4-lesson-4-1",
  code: "4-1",
  title: "African and Afro-Caribbean Traditions",
  goal: "I CAN identify the musical characteristics and cultural contexts of African and Afro-Caribbean traditions.",
  standards: [
    "Contextual Studies",
    "Global Music",
  ],
  vocabulary: [
    { term: "Polyrhythm", definition: "Simultaneous rhythms that interlock — different patterns played together creating complex texture." },
    { term: "Call and response", definition: "A leader's phrase answered by a group — fundamental to African and Afro-Caribbean music." },
    { term: "Griot", definition: "West African oral historian/musician who preserves genealogy and history through song." },
    { term: "Reggae", definition: "Jamaican genre characterised by offbeat guitar chops, deep bass and social commentary lyrics." },
    { term: "Salsa", definition: "Latin genre blending Cuban son, jazz and Puerto Rican bomba with dance rhythms." },
    { term: "Diaspora", definition: "The spread of people and cultures from their homeland, carrying musical traditions with them." },
  ],
  concepts: [
    {
      id: "music-u4-african-traditions",
      title: "African musical traditions",
      skill: "Identify the musical characteristics and cultural functions of West and East African music traditions.",
      lesson: {
        sections: [
          {
            heading: "Rhythm and community",
            body: "African music is fundamentally communal and rhythmic: **polyrhythm** interlocks multiple patterns; **call-and-response** creates dialogue between leader and community. Music is not separate from life — it accompanies work, ritual, celebration and storytelling. The **griot** tradition preserves history through song, making music a form of living archive.",
          },
          {
            heading: "Instruments and sound",
            body: "African instruments are often constructed from local materials: drums (talking drums that mimic speech), xylophones, thumb pianos (mbira), horns and rattles. Each instrument has specific roles — some carry melody, others provide rhythmic foundation. Timbre and rhythm are prioritised over harmony.",
          },
          {
            heading: "Cultural functions",
            body: "Music serves ritual (initiation, healing, ancestor communication), social (weddings, work songs, praise), and political (praise songs for leaders, criticism through song) functions. In many traditions, music is inseparable from dance — the body is an instrument. Understanding African music means understanding community, not just sound.",
          },
        ],
        keyFormulas: [
          { name: "African features", statement: "Polyrhythm + call-and-response + community function + oral tradition" },
          { name: "Griot role", statement: "Oral historian/musician preserving genealogy through song" },
        ],
        workedExample: {
          problem: "A performance features interlocking drum patterns, a lead singer calling phrases answered by a group, and dancing throughout. What African musical features are present?",
          solution: "Polyrhythm (interlocking drums), call-and-response (lead/group exchange), communal function (participation and dance). The music serves social cohesion rather than passive listening — the audience is part of the performance.",
        },
      },
      questions: [
        {
          id: "music-u4-african-traditions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Polyrhythm refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single drum beat" },
              { id: "b", text: "One simple rhythm repeated" },
              { id: "c", text: "A slow tempo" },
              { id: "d", text: "Multiple interlocking rhythmic patterns played simultaneously" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Polyrhythm", statement: "Simultaneous interlocking rhythmic patterns creating complex texture." },
            ],
            steps: [
              { reasoning: "Polyrhythm combines multiple rhythmic patterns that interlock simultaneously.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Multiple interlocking rhythmic patterns played simultaneously",
            commonErrors: [
              "Confusing polyrhythm with simple repetition or monorhythm.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two cultural functions of music in African traditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "African music functions", statement: "Ritual, social, political and storytelling functions are integrated." },
            ],
            steps: [
              { reasoning: "Ritual function — music accompanies initiation, healing and ancestor communication.", marks: 1, markCode: "M" },
              { reasoning: "Social function — work songs, celebration, praise and community bonding.", marks: 1, markCode: "M" },
              { reasoning: "Preservation function — griots and oral traditions maintain history through song.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ritual, social and preservation functions integrate music into community life.",
            commonErrors: [
              "Treating music as entertainment separate from social function.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how call-and-response structures African musical performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Call-and-response", statement: "Leader-chorus dialogue creates participation and communal structure." },
            ],
            steps: [
              { reasoning: "A soloist or leader sings a phrase; the group responds with a repeated or varied phrase.", marks: 1, markCode: "M" },
              { reasoning: "This creates musical dialogue — question and answer, statement and affirmation.", marks: 1, markCode: "M" },
              { reasoning: "It structures performance as participatory — everyone has a role, not just performers.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: call-and-response embodies communal values in musical form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Call-and-response creates participatory dialogue embodying communal values.",
            commonErrors: [
              "Treating call-and-response as merely a technical pattern without social meaning.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "African music analysis",
            text: "A West African ensemble performs: three drummers play interlocking patterns, a griot sings historical narratives, a chorus responds to each phrase, and community members dance throughout. The performance lasts several hours.",
          },
          stem: "Analyse the characteristics of a described African musical performance.",
          parts: [
            { label: "a", prompt: "Identify two musical features present.", marks: 2 },
            { label: "b", prompt: "Explain their cultural function.", marks: 2 },
            { label: "c", prompt: "Evaluate how the performance embodies community.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Communal music", statement: "Polyrhythm, call-and-response and griot tradition serve community functions." },
            ],
            steps: [
              { part: "a", reasoning: "Polyrhythm (interlocking drums), call-and-response (griot/chorus), griot tradition — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Drums provide rhythmic foundation; griot preserves history; chorus/dance involve community — each serves social function.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural functions explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Performance embodies community through participation — no passive audience; music is social glue.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of communal embodiment.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Polyrhythm, call-response, griot. (b) Rhythm foundation, history, participation. (c) Music embodies community through participation.",
            commonErrors: [
              "Describing sounds without analysing cultural function.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The mbira (thumb piano) is an instrument associated with which region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Andalusia" },
              { id: "b", text: "Scandinavia" },
              { id: "c", text: "West and Central Africa" },
              { id: "d", text: "Polynesia" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "African instruments", statement: "Mbira is a lamellophone common in West and Central African traditions." },
            ],
            steps: [
              { reasoning: "The mbira, or thumb piano, is indigenous to West and Central African musical traditions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** West and Central Africa",
            commonErrors: [
              "Confusing African instruments with European or Pacific instruments.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two instruments commonly found in African musical ensembles and state the typical role of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "African instruments", statement: "Drums carry rhythm; mbira, xylophone and horns carry melody; rattles add texture." },
            ],
            steps: [
              { reasoning: "Any two valid instruments with roles: drums (rhythmic foundation), mbira/xylophone (melody), horns (calls/signals), rattles (texture).", marks: 1, markCode: "M" },
              { reasoning: "Roles accurately stated for both instruments.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Drums provide rhythm; mbira/xylophone provide melody; horns signal; rattles texture.",
            commonErrors: [
              "Listing instruments without explaining their ensemble roles.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In many African musical traditions, harmony is generally:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Notated in figured bass" },
              { id: "b", text: "Subordinate to rhythm, timbre and communal function" },
              { id: "c", text: "Built from complex chromatic progressions" },
              { id: "d", text: "The primary organising element" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Rhythm over harmony", statement: "African traditions prioritise rhythm and timbre over harmonic development." },
            ],
            steps: [
              { reasoning: "African traditions emphasise polyrhythm, timbre and communal function rather than Western-style harmony.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Subordinate to rhythm, timbre and communal function",
            commonErrors: [
              "Assuming all music traditions organise around harmony like Western art music.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the griot tradition makes music a 'living archive'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Griot as archive", statement: "Griots memorise and perform genealogies, histories and laws through song." },
            ],
            steps: [
              { reasoning: "Griots are trained oral historians who memorise genealogies and historical events.", marks: 1, markCode: "M" },
              { reasoning: "They transmit this knowledge through song and performance to each generation.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: music functions as a living archive preserving communal memory without writing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Griots preserve history orally through song, making music a living archive.",
            commonErrors: [
              "Describing griots as entertainers rather than knowledge keepers.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A talking drum is valued in West African music primarily because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Can mimic the pitch patterns of speech" },
              { id: "b", text: "Requires no player" },
              { id: "c", text: "Is made of metal" },
              { id: "d", text: "Produces the loudest sound in the ensemble" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Talking drums", statement: "Drum tones mimic speech, allowing messages to be transmitted musically." },
            ],
            steps: [
              { reasoning: "Talking drums vary pitch to imitate speech tones, functioning as a form of musical communication.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Can mimic the pitch patterns of speech",
            commonErrors: [
              "Treating the talking drum as purely rhythmic rather than speech-like.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "African music analysis",
            text: "A performer plays a mbira, its metal tines producing a shimmering, repetitive melody. A lead singer delivers a phrase and a group answers with a harmonised response. Listeners tap rhythms on their bodies and join the final refrain.",
          },
          stem: "Analyse the described performance.",
          parts: [
            { label: "a", prompt: "Identify two musical features present.", marks: 2 },
            { label: "b", prompt: "Explain the function of one feature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Feature identification", statement: "Mbira melody, call-and-response and audience participation are African musical hallmarks." },
            ],
            steps: [
              { part: "a", reasoning: "Call-and-response between lead singer and group; mbira providing melodic/rhythmic ostinato — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Call-and-response creates participatory dialogue; audience joining makes music communal rather than passive.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Function convincingly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Call-and-response, mbira ostinato, audience participation. (b) Features create communal participation.",
            commonErrors: [
              "Listing features without explaining their social function.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is the griot's role significant beyond musical entertainment?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are the loudest performers" },
              { id: "b", text: "They preserve genealogy, law and history through oral performance" },
              { id: "c", text: "They write down the music" },
              { id: "d", text: "They play the most instruments" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Griot function", statement: "Griots are oral historians preserving communal knowledge through song." },
            ],
            steps: [
              { reasoning: "Griots function as living archives, transmitting genealogy and history orally.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** They preserve genealogy, law and history through oral performance",
            commonErrors: [
              "Reducing the griot to a performer rather than a knowledge keeper.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how polyrhythm creates tension and release in African ensemble music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Polyrhythm mechanics", statement: "Independent rhythmic cycles interlock, creating points of alignment and divergence." },
            ],
            steps: [
              { reasoning: "Each drummer or percussionist maintains an independent cycle that interlocks with others.", marks: 1, markCode: "M" },
              { reasoning: "Cycles align at certain points (release/convergence) and diverge elsewhere (tension).", marks: 1, markCode: "M" },
              { reasoning: "Listeners perceive the shifting relationships as forward motion and excitement.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: polyrhythm generates structured complexity without a single melodic line.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Polyrhythm's interlocking cycles create tension at divergence and release at alignment.",
            commonErrors: [
              "Describing polyrhythm as chaotic rather than structured interlocking.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described ritual performance",
            author: "Written for Akademik Space",
            source: "African music analysis",
            text: "At a community ceremony, three drummers play distinct interlocking patterns. A singer leads verses honouring ancestors while the community responds with a repeated refrain. Dancers move in formation, and specific drum tones are believed to call the ancestors' presence.",
          },
          stem: "Analyse this described ceremonial performance.",
          parts: [
            { label: "a", prompt: "Identify three musical and cultural features.", marks: 3 },
            { label: "b", prompt: "Explain the ritual function of the performance.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Ceremonial analysis", statement: "Polyrhythm, call-and-response, ancestor invocation and communal dance integrate music and ritual." },
            ],
            steps: [
              { part: "a", reasoning: "Polyrhythm (three drummers); call-and-response (singer/community); ancestor invocation via drum tones — any three.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Communal dance and formation as additional valid feature.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Performance serves ritual function — honouring ancestors, invoking presence, marking ceremony.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Music is not entertainment but active participation in spiritual life.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ritual function convincingly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Polyrhythm, call-response, ancestor invocation, dance. (b) Ritual function — ancestor honour and communal spiritual participation.",
            commonErrors: [
              "Analysing sound without addressing ritual function.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What best describes the audience's role in many African musical performances?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Critics judging technique" },
              { id: "b", text: "Non-participants who only listen" },
              { id: "c", text: "Active participants who respond, dance and join refrains" },
              { id: "d", text: "Silent spectators evaluating the music" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Participatory performance", statement: "African music is communal — audience members perform roles within the music." },
            ],
            steps: [
              { reasoning: "Call-and-response, dancing and joining refrains make the audience co-performers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Active participants who respond, dance and join refrains",
            commonErrors: [
              "Applying Western concert-hall audience conventions to communal traditions.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that African music is 'functional rather than aesthetic'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Function vs aesthetics", statement: "African music integrates social, ritual and political functions; aesthetic value is embedded within them." },
            ],
            steps: [
              { reasoning: "Supporting evidence: music accompanies work, ritual, storytelling — inseparable from life function.", marks: 1, markCode: "M" },
              { reasoning: "Counter-evidence: performances are also highly crafted — drummers, griots and dancers demonstrate virtuosity.", marks: 1, markCode: "M" },
              { reasoning: "The dichotomy is false — function and beauty coexist; the dance/music is appreciated as art while serving purpose.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: 'functional' describes context, not absence of aesthetic value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The claim is partially true — function dominates — but aesthetics remain embedded in performance craft.",
            commonErrors: [
              "Accepting the claim uncritically without noting embedded artistry.",
            ],
          },
        },
        {
          id: "music-u4-african-traditions-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compared with Western art music, African traditions generally prioritise:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complex harmonic modulation" },
              { id: "b", text: "Symphonic instrumentation" },
              { id: "c", text: "Written scores and individual authorship" },
              { id: "d", text: "Rhythm, timbre and oral/communal transmission" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "African priorities", statement: "Rhythm, timbre, oral transmission and community over written score." },
            ],
            steps: [
              { reasoning: "African traditions foreground rhythm and timbre transmitted orally within the community.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Rhythm, timbre and oral/communal transmission",
            commonErrors: [
              "Judging African music by Western art-music criteria.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u4-afro-caribbean",
      title: "Afro-Caribbean traditions",
      skill: "Identify the musical characteristics of Caribbean genres and their African diaspora origins.",
      lesson: {
        sections: [
          {
            heading: "Diaspora and transformation",
            body: "Afro-Caribbean music emerged from the forced migration of enslaved Africans to the Caribbean. African rhythmic traditions transformed in new contexts: call-and-response became mento and calypso; polyrhythm became clave patterns; drumming traditions adapted to available instruments. The diaspora preserved and reinvented musical identity.",
          },
          {
            heading: "Key genres",
            body: "**Reggae** (Jamaica): offbeat guitar chops, deep bass, social commentary — Bob Marley made it global. **Salsa** (Cuba/Puerto Rico): son montuno rhythms, brass, dance-oriented. **Calypso** (Trinidad): witty social commentary, steel pan accompaniment. **Mento** (Jamaica): acoustic folk style preceding ska and reggae.",
          },
          {
            heading: "Social commentary",
            body: "Caribbean music often carries political and social messages: reggae's 'Redemption Song' addresses oppression; calypso satirises politics; salsa celebrates community. Music became a voice for marginalised communities — a form of resistance and identity assertion through sound.",
          },
        ],
        keyFormulas: [
          { name: "Diaspora transformation", statement: "African traditions + Caribbean context = new genres" },
          { name: "Reggae features", statement: "Offbeat chops + deep bass + social commentary" },
        ],
        workedExample: {
          problem: "A song features syncopated guitar chops on the offbeat, deep bass lines and lyrics about social justice. What genre?",
          solution: "Reggae — the offbeat guitar 'chops', prominent bass and socially conscious lyrics are hallmarks of Jamaican reggae. The style emerged from ska and rocksteady, itself descended from mento and African rhythmic traditions.",
        },
      },
      questions: [
        {
          id: "music-u4-afro-caribbean-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Reggae is most associated with which country?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jamaica" },
              { id: "b", text: "Cuba" },
              { id: "c", text: "Nigeria" },
              { id: "d", text: "Brazil" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Reggae origin", statement: "Reggae emerged in Jamaica from ska and rocksteady traditions." },
            ],
            steps: [
              { reasoning: "Reggae is a Jamaican genre that became globally influential.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Jamaica",
            commonErrors: [
              "Confusing reggae with other Caribbean or African genres.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two musical characteristics of reggae.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reggae features", statement: "Offbeat chops, deep bass, slow tempo and social commentary." },
            ],
            steps: [
              { reasoning: "Offbeat guitar or keyboard 'chops' — accents on the offbeats.", marks: 1, markCode: "M" },
              { reasoning: "Deep, prominent bass lines carrying the groove.", marks: 1, markCode: "M" },
              { reasoning: "Slow to medium tempo with social and political lyrical themes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Offbeat chops, deep bass and conscious lyrics define reggae.",
            commonErrors: [
              "Describing reggae without its distinctive rhythmic features.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the African diaspora shaped Afro-Caribbean music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Diaspora influence", statement: "Enslaved Africans carried rhythmic and performance traditions that transformed in the Caribbean." },
            ],
            steps: [
              { reasoning: "Enslaved Africans brought call-and-response, polyrhythm and communal performance practices.", marks: 1, markCode: "M" },
              { reasoning: "These traditions adapted to new instruments and contexts — drums, strings, brass.", marks: 1, markCode: "M" },
              { reasoning: "The result: new genres (reggae, salsa, calypso) that preserve African elements in transformed form.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: diaspora music is both preservation and innovation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Diaspora carried African traditions that transformed into new Caribbean genres.",
            commonErrors: [
              "Treating Caribbean music as purely European or ignoring African roots.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical genre",
            author: "Written for Akademik Space",
            source: "Caribbean music analysis",
            text: "A genre from Trinidad features steel pan orchestras playing melodic arrangements, lyrics in English and Creole commenting on politics and daily life, and audiences dancing throughout. The music emerged from African drumming traditions adapted to available instruments.",
          },
          stem: "Analyse the cultural significance of a described Caribbean musical genre.",
          parts: [
            { label: "a", prompt: "Identify the genre and its origins.", marks: 2 },
            { label: "b", prompt: "Describe its musical characteristics.", marks: 2 },
            { label: "c", prompt: "Evaluate its social function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Genre analysis", statement: "Calypso combines African rhythmic heritage, steel pan innovation and social commentary." },
            ],
            steps: [
              { part: "a", reasoning: "Calypso — Trinidad, emerged from African traditions and colonial context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Genre and origins correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Steel pan (adapted from oil drums), call-and-response vocals, syncopated rhythms — African elements transformed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Musical characteristics described accurately.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Social commentary function — music as voice for marginalised community; dance and participation reinforce community.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Social function evaluated convincingly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Calypso/Trinidad. (b) Steel pan, call-response, African rhythms. (c) Social voice and community function.",
            commonErrors: [
              "Describing the music without analysing its social and cultural context.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Salsa music most directly blends which traditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Country and western swing" },
              { id: "b", text: "Gamelan and classical" },
              { id: "c", text: "Cuban son, jazz and Puerto Rican bomba" },
              { id: "d", text: "Reggae and blues" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Salsa origins", statement: "Salsa fuses Cuban son rhythms, jazz harmony and Puerto Rican elements." },
            ],
            steps: [
              { reasoning: "Salsa combines Cuban son montuno, jazz and Puerto Rican bomba into a dance genre.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Cuban son, jazz and Puerto Rican bomba",
            commonErrors: [
              "Confusing salsa with other Latin or Caribbean genres.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two Afro-Caribbean genres and the country or region each is associated with.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Caribbean genres", statement: "Reggae-Jamaica, salsa-Cuba/Puerto Rico, calypso-Trinidad, mento-Jamaica." },
            ],
            steps: [
              { reasoning: "Any two correct pairings: reggae/Jamaica, salsa/Cuba or Puerto Rico, calypso/Trinidad, mento/Jamaica.", marks: 1, markCode: "M" },
              { reasoning: "Both pairings accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reggae-Jamaica, salsa-Cuba/Puerto Rico, calypso-Trinidad, mento-Jamaica.",
            commonErrors: [
              "Pairing genres with wrong regions or inventing genres.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "The 'offbeat chop' characteristic of reggae refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A drum fill between verses" },
              { id: "b", text: "A fast bass solo" },
              { id: "c", text: "Accented guitar or keyboard chords played on the offbeats" },
              { id: "d", text: "A vocal harmony technique" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Reggae chops", statement: "Offbeat accents on guitar/keys create reggae's signature rhythmic feel." },
            ],
            steps: [
              { reasoning: "Reggae's chop is a chord accent placed on the offbeat of the groove.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Accented guitar or keyboard chords played on the offbeats",
            commonErrors: [
              "Confusing the offbeat chop with drum patterns or bass lines.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of social commentary in Caribbean music, using one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Social commentary", statement: "Reggae and calypso address injustice, politics and identity." },
            ],
            steps: [
              { reasoning: "Caribbean genres frequently carry political and social messages in lyrics.", marks: 1, markCode: "M" },
              { reasoning: "Example: Bob Marley's 'Redemption Song' addresses oppression; calypso satirises politics.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: music serves as a voice for marginalised communities.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Caribbean music voices social and political concerns — e.g., 'Redemption Song' and calypso satire.",
            commonErrors: [
              "Describing music without its lyrical or social content.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Mento is historically significant in Jamaican music because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Originated in Trinidad" },
              { id: "b", text: "Used steel pans exclusively" },
              { id: "c", text: "Preceded and influenced ska and reggae as an acoustic folk style" },
              { id: "d", text: "Was the first genre to use electric guitars" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Mento", statement: "Mento was Jamaica's acoustic folk precursor to ska and reggae." },
            ],
            steps: [
              { reasoning: "Mento is the acoustic Jamaican folk style that preceded ska and reggae.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Preceded and influenced ska and reggae as an acoustic folk style",
            commonErrors: [
              "Confusing mento's chronological position in Jamaican music.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described performance",
            author: "Written for Akademik Space",
            source: "Caribbean music analysis",
            text: "A Trinidadian band plays syncopated rhythms on steel pans while singers deliver witty lyrics in English and Creole commenting on local politics. The audience dances and shouts encouragement throughout the performance.",
          },
          stem: "Analyse the described performance.",
          parts: [
            { label: "a", prompt: "Identify the genre and two musical features.", marks: 2 },
            { label: "b", prompt: "Explain its social function.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Calypso features", statement: "Calypso uses steel pan, syncopated rhythm, Creole/English wordplay and social commentary." },
            ],
            steps: [
              { part: "a", reasoning: "Calypso identified; steel pan and syncopated rhythm (or witty bilingual lyrics) — any two.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Genre and features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Music functions as social commentary and community voice; dancing makes it participatory.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Social function convincingly explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Calypso; steel pan, syncopated rhythm, bilingual wordplay. (b) Social commentary and community participation.",
            commonErrors: [
              "Identifying the genre without analysing its features and function.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The steel pan's development demonstrates which aspect of Afro-Caribbean music?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct copying of European orchestras" },
              { id: "b", text: "Adaptation of available materials to carry African-derived rhythms" },
              { id: "c", text: "Complete rejection of African traditions" },
              { id: "d", text: "Elimination of communal participation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Steel pan innovation", statement: "Steel pans were adapted from oil drums to carry rhythmic and melodic traditions." },
            ],
            steps: [
              { reasoning: "Steel pans transformed industrial materials into instruments carrying Afro-Caribbean rhythmic heritage.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Adaptation of available materials to carry African-derived rhythms",
            commonErrors: [
              "Viewing instrument innovation as separate from cultural transmission.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how clave patterns link African rhythmic traditions to Latin and Caribbean music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Clave heritage", statement: "Clave is a two-bar rhythmic cell descended from African bell and drum patterns." },
            ],
            steps: [
              { reasoning: "Clave is a repeating two-measure rhythmic pattern acting as the structural timeline.", marks: 1, markCode: "M" },
              { reasoning: "It descends from African time-line and bell patterns carried through the diaspora.", marks: 1, markCode: "M" },
              { reasoning: "In salsa and related genres, clave organises all other parts — a direct descendant of African rhythmic organisation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: clave is living evidence of African rhythmic continuity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clave carries African time-line patterns into Latin music as the organising rhythmic cell.",
            commonErrors: [
              "Describing clave as a modern invention rather than diasporic heritage.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described song",
            author: "Written for Akademik Space",
            source: "Reggae analysis",
            text: "A Jamaican song features a slow groove with syncopated guitar chords on the offbeats, a deep round bass line, a male vocalist singing about poverty and hope, and a horn section entering in the chorus. The lyrics reference Marcus Garvey and African heritage.",
          },
          stem: "Analyse this described reggae song.",
          parts: [
            { label: "a", prompt: "Identify three musical features of the genre.", marks: 3 },
            { label: "b", prompt: "Evaluate the song's cultural function.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Reggae analysis", statement: "Offbeat chops, deep bass, horns and conscious lyrics define reggae's sound and message." },
            ],
            steps: [
              { part: "a", reasoning: "Offbeat chops; deep bass line; horn section — any three features.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Slow groove and male lead vocal as additional valid features.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three features correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Lyrics address poverty and African heritage — social commentary function.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "References to Garvey connect to Pan-African identity and resistance.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural function convincingly evaluated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Offbeat chops, deep bass, horns, slow groove. (b) Social commentary and Pan-African identity.",
            commonErrors: [
              "Describing features without linking lyrics to cultural function.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calypso lyrics traditionally function as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Court ceremonial music only" },
              { id: "b", text: "Religious liturgy" },
              { id: "c", text: "Instrumental dance music without words" },
              { id: "d", text: "Oral journalism commenting on politics and daily life" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Calypso commentary", statement: "Calypso singers report and satirise social and political events." },
            ],
            steps: [
              { reasoning: "Calypso historically served as a vehicle for news, satire and social commentary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Oral journalism commenting on politics and daily life",
            commonErrors: [
              "Treating calypso as purely entertainment.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the diaspora as both preservation and innovation in Afro-Caribbean music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diaspora duality", statement: "Forced migration preserved African elements while forcing creative adaptation." },
            ],
            steps: [
              { reasoning: "Preservation: call-and-response, clave, communal dance and social commentary survived the crossing.", marks: 1, markCode: "M" },
              { reasoning: "Innovation: new instruments (steel pan, guitar) and genres (reggae, salsa) emerged from necessity and creativity.", marks: 1, markCode: "M" },
              { reasoning: "The traditions were not copied but re-created — identity asserted through new forms.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: diaspora music is transformation as survival strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The diaspora preserved African elements while forcing innovation — transformation as survival.",
            commonErrors: [
              "Framing diaspora music as either pure preservation or pure loss.",
            ],
          },
        },
        {
          id: "music-u4-afro-caribbean-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which element most directly evidences African origins in Afro-Caribbean music?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Classical song forms" },
              { id: "b", text: "European string instrumentation" },
              { id: "c", text: "Call-and-response and polyrhythmic clave patterns" },
              { id: "d", text: "Four-part choral harmony" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "African elements", statement: "Call-and-response and clave derive directly from African performance practice." },
            ],
            steps: [
              { reasoning: "Call-and-response and clave are direct descendants of African performance structures.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Call-and-response and polyrhythmic clave patterns",
            commonErrors: [
              "Citing European features as evidence of African origins.",
            ],
          },
        },
      ],
    },
  ],
};
