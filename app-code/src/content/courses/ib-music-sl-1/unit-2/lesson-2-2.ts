import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "music-u2-lesson-2-2",
  code: "2-2",
  title: "Jazz and Popular Music Origins",
  goal: "I CAN trace the development of jazz and popular music genres and identify their defining musical features.",
  standards: ["Contextual Studies", "Music History"],
  vocabulary: [
    {
      term: "Blues",
      definition:
        "African-American musical tradition using call-and-response, blue notes and 12-bar structure.",
    },
    {
      term: "Improvisation",
      definition:
        "Creating music spontaneously in the moment, a core feature of jazz.",
    },
    {
      term: "Swing",
      definition:
        "Rhythmic feel with long-short patterns creating a lilting, bouncing quality.",
    },
    {
      term: "Call and response",
      definition:
        "A musical pattern where one phrase is answered by another, common in blues and jazz.",
    },
    {
      term: "Rock and roll",
      definition:
        "Genre emerging in 1950s blending rhythm and blues, country and gospel.",
    },
    {
      term: "Hip-hop",
      definition:
        "Genre emerging in 1970s Bronx combining rapping, DJing, breakdancing and graffiti culture.",
    },
  ],
  concepts: [
    {
      id: "music-u2-jazz-features",
      title: "Jazz musical features",
      skill:
        "Identify the defining musical characteristics of jazz — improvisation, swing, blues forms and call-and-response.",
      lesson: {
        sections: [
          {
            heading: "Improvisation and swing",
            body: "Jazz is built on **improvisation** — musicians create spontaneously within harmonic frameworks. **Swing** rhythm gives jazz its lilting feel: long-short patterns that bounce rather than march. These two elements — spontaneous creation and swinging rhythm — distinguish jazz from notated classical traditions.",
          },
          {
            heading: "Blues forms and call-and-response",
            body: "The **12-bar blues** is jazz's foundation: a repeating chord progression (I-IV-V) with space for improvisation. **Blue notes** — flattened third, fifth and seventh — give blues its characteristic sound. **Call-and-response** patterns, inherited from African traditions, create dialogue between instruments or voices.",
          },
          {
            heading: "Jazz styles",
            body: "Jazz evolved through styles: New Orleans jazz (collective improvisation), swing (big bands, dance music), bebop (fast, complex, small groups), cool jazz (restrained, classical influence), fusion (jazz-rock hybrid). Each style reflects its era's social and musical conditions.",
          },
        ],
        keyFormulas: [
          {
            name: "Jazz features",
            statement:
              "Improvisation + swing + blues forms + call-and-response",
          },
          {
            name: "12-bar blues",
            statement: "I-IV-V chord progression with improvisation space",
          },
        ],
        workedExample: {
          problem:
            "A performance features a saxophone improvising over a repeating chord progression while a rhythm section swings. What jazz features are present?",
          solution:
            "Improvisation (saxophone solo), swing rhythm (rhythm section feel), blues/standard form (repeating progression providing harmonic framework). Call-and-response may be present if the saxophone answers other instruments.",
        },
      },
      questions: [
        {
          id: "music-u2-jazz-features-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 12-bar blues is built on which chord progression?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I-vi-IV-V" },
              { id: "b", text: "ii-V-I" },
              { id: "c", text: "I-IV-V" },
              { id: "d", text: "I-IV-vi-V" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "12-bar blues",
                statement:
                  "The foundational blues progression using I, IV and V chords.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 12-bar blues uses the I-IV-V chord progression as its harmonic foundation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** I-IV-V",
            commonErrors: [
              "Confusing blues progression with jazz standard or pop progressions.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two musical features that distinguish jazz from classical music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz vs classical",
                statement:
                  "Improvisation and swing rhythm distinguish jazz from notated classical traditions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improvisation — jazz musicians create spontaneously; classical music is typically fully notated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Swing rhythm — the lilting long-short feel is characteristic of jazz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Blues forms and blue notes give jazz its harmonic and melodic colour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Improvisation, swing and blues features distinguish jazz from classical.",
            commonErrors: [
              "Listing surface differences without explaining the improvisatory tradition.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how call-and-response patterns connect jazz to African musical traditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Call-and-response",
                statement:
                  "A dialogue pattern inherited from African traditions that shapes jazz interaction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Call-and-response creates musical dialogue — one phrase answered by another.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This pattern reflects communal African performance practices where music is participatory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In jazz, it appears in blues verses, instrumental exchanges and ensemble interplay.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: jazz's social character is embedded in its musical structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Call-and-response links jazz to African communal traditions and shapes its interactive character.",
            commonErrors: [
              "Treating call-and-response as merely a technical device without cultural context.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse the development of jazz styles.",
          parts: [
            {
              label: "a",
              prompt: "Identify two early jazz styles and their features.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how bebop differed from earlier jazz.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether jazz 'evolved' or simply 'changed'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz evolution",
                statement:
                  "Styles reflect changing social conditions and musical experimentation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "New Orleans jazz (collective improvisation, polyphony) and swing (big bands, dance music) — any two with features.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Two styles correctly identified with features.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Bebop: fast tempos, complex harmonies, small groups, virtuosic soloing — moved jazz from dance music to art music.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Bebop differences explained convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "'Evolved' implies progress; 'changed' is more neutral — each style suited its era and purpose.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned judgement on evolution vs change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) New Orleans and swing. (b) Bebop = faster, complex, small-group art music. (c) 'Changed' is more accurate than 'evolved'.",
            commonErrors: [
              "Treating jazz history as linear progress toward a single goal.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Blue notes in jazz and blues are:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unpitched percussive sounds" },
              { id: "b", text: "notes sharpened above the scale" },
              { id: "c", text: "notes played only in the lowest register" },
              {
                id: "d",
                text: "flattened third, fifth and seventh scale degrees",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blue notes",
                statement:
                  "Flattened third, fifth and seventh degrees giving blues its characteristic colour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Blue notes are the flattened scale degrees that colour blues and jazz melody.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Flattened third, fifth and seventh scale degrees",
            commonErrors: [
              "Confusing blue notes with chromatic passing notes in general.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Swing rhythm is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "a straight military march beat" },
              { id: "b", text: "strictly even eighth notes" },
              { id: "c", text: "free time without pulse" },
              {
                id: "d",
                text: "a lilting long-short pattern that bounces rather than marches",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Swing",
                statement:
                  "A long-short rhythmic feel giving jazz its lilting, bouncing quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Swing divides beats unevenly, creating a lilting feel rather than a straight pulse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** A lilting long-short pattern that bounces rather than marches",
            commonErrors: [
              "Describing swing as merely fast tempo rather than a rhythmic feel.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Bebop differed from earlier jazz mainly through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "slower tempos and simpler harmony" },
              { id: "b", text: "complete reliance on written scores" },
              {
                id: "c",
                text: "small groups, faster tempos and complex harmonic language",
              },
              { id: "d", text: "larger dance bands and novelty effects" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Bebop",
                statement:
                  "Fast, harmonically complex small-group jazz that moved away from dance music.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bebop featured small combos, rapid tempos, extended chords and virtuosic soloing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Small groups, faster tempos and complex harmonic language",
            commonErrors: [
              "Confusing bebop with big-band swing of the same era.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The blues scale is built primarily on a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "major scale with added sharps" },
              { id: "b", text: "whole-tone scale" },
              { id: "c", text: "chromatic scale" },
              {
                id: "d",
                text: "minor pentatonic with flattened third, fifth and seventh",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blues scale",
                statement:
                  "A minor-based scale incorporating the flattened blue notes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The blues scale combines minor pentatonic structure with flattened third, fifth and seventh degrees.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Minor pentatonic with flattened third, fifth and seventh",
            commonErrors: [
              "Confusing the blues scale with the plain major or minor pentatonic.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which early jazz style featured collective improvisation by the whole ensemble?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cool jazz" },
              { id: "b", text: "Jazz-rock fusion" },
              { id: "c", text: "New Orleans (Dixieland) jazz" },
              { id: "d", text: "Bebop" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "New Orleans jazz",
                statement:
                  "Early jazz featured simultaneous collective improvisation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New Orleans jazz had several instruments improvising together over a shared melody — collective improvisation.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** New Orleans (Dixieland) jazz",
            commonErrors: [
              "Attributing collective improvisation to bebop, which centred on individual soloists.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Cool jazz is characterised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "completely notated scores with no improvisation",
              },
              {
                id: "b",
                text: "restrained, lighter playing influenced by classical music",
              },
              { id: "c", text: "loud brass and fast tempos" },
              { id: "d", text: "heavy electric distortion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cool jazz",
                statement:
                  "A 1950s style with subdued dynamics and classical influences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cool jazz reacted against bebop's intensity with lighter tone, arrangement and classical influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Restrained, lighter playing influenced by classical music",
            commonErrors: ["Confusing cool jazz with hard bop or fusion."],
          },
        },
        {
          id: "music-u2-jazz-features-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two defining musical features of jazz.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz features",
                statement:
                  "Improvisation, swing, blues forms and call-and-response define jazz.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid features identified, e.g. improvisation or swing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second feature identified, e.g. blues scale or call-and-response.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Features accurately described as musical characteristics, not just names.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Any two of improvisation, swing, blues forms, blue notes, call-and-response.",
            commonErrors: ["Listing instruments instead of musical features."],
          },
        },
        {
          id: "music-u2-jazz-features-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the role of improvisation in jazz performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improvisation",
                statement:
                  "Jazz musicians create spontaneously within harmonic frameworks provided by the rhythm section.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improvisation means creating music spontaneously in the moment rather than playing fixed notation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It occurs within harmonic frameworks — chord progressions like the 12-bar blues or standard forms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The rhythm section supplies the pulse and harmony that support soloists.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each performance is unique, making improvisation jazz's defining creative act.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Improvisation is spontaneous creation within harmonic frameworks, making each performance unique.",
            commonErrors: [
              "Describing improvisation as random playing without harmonic structure.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how blues scales and blue notes create the characteristic blues sound.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Blue notes and blues scale",
                statement:
                  "Flattened scale degrees create tension and a vocal-like inflection.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The blues scale derives from a minor pentatonic with flattened third, fifth and seventh.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The flattened notes clash with the major-key harmony, producing characteristic tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The inflections mimic vocal slides and bends of African-American singing traditions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Within the I-IV-V blues progression, blue notes intensify the harmonic tension and release.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: pitch alteration is the melodic signature of blues-derived music.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Flattened blue notes create tension against major harmony, mimicking vocal inflection.",
            commonErrors: [
              "Describing the sound without explaining the pitch mechanism.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare New Orleans jazz and bebop.",
          parts: [
            {
              label: "a",
              prompt: "Compare their ensemble textures and instrumentation.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Compare their harmonic and rhythmic language.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Compare the social contexts in which they flourished.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Jazz styles",
                statement:
                  "New Orleans collective improvisation versus bebop's soloist-centred complexity.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "New Orleans: larger front line with collective improvisation; Bebop: small combos spotlighting individual soloists.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Texture comparison accurately stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "New Orleans: simpler blues-based harmony and swing; Bebop: fast tempos, extended chords and rapid harmonic rhythm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Harmonic and rhythmic comparison accurately stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "New Orleans served dance halls and communal celebration; Bebop catered to listening audiences in clubs, reflecting post-war urban Black culture.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Social context comparison convincingly drawn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Collective vs soloist textures. (b) Simple swing vs complex fast harmony. (c) Dance halls vs listening clubs.",
            commonErrors: [
              "Comparing dates only without musical or social detail.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse how jazz styles evolved in response to changing social conditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz and society",
                statement:
                  "Styles reflect the social functions and aspirations of their eras.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New Orleans jazz served community celebration and dance in a racially mixed port city.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Swing dominated the Depression and war years as popular dance music for mass audiences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Bebop emerged in the 1940s as musicians asserted artistic autonomy and intellectual seriousness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cool jazz reacted against bebop's intensity, reflecting 1950s suburban restraint and classical aspiration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fusion responded to rock's dominance by merging jazz harmony with rock instrumentation and volume.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each style's musical features — tempo, instrumentation, ensemble size — track its social function.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Jazz evolution is therefore inseparable from African-American social history.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: styles encode the changing aspirations of their communities.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each jazz style answers its era's social conditions: celebration, dance, artistic assertion, restraint and fusion with rock.",
            commonErrors: [
              "Describing style chronology without linking to social conditions.",
            ],
          },
        },
        {
          id: "music-u2-jazz-features-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether jazz improvisation should be considered a form of composition.",
          parts: [
            {
              label: "a",
              prompt: "Define what improvisation involves in jazz.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Present arguments for and against calling it composition.",
              marks: 2,
            },
            { label: "c", prompt: "Give your reasoned judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Improvisation as composition",
                statement:
                  "Improvised solos create original musical material within harmonic frameworks.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Improvisation is spontaneous creation of melody and rhythm over chord progressions, drawing on learned vocabulary and theory.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Definition accurate.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "For: generates original material, requires harmonic knowledge and formal planning. Against: lacks premeditation and notation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both sides presented fairly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: improvisation is real-time composition — spontaneous but structured by harmony, form and tradition.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned, nuanced conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Spontaneous creation within harmonic frameworks. (b) Original material vs lack of premeditation. (c) Improvisation is real-time composition.",
            commonErrors: [
              "Treating improvisation as unstructured or as equivalent to written composition without nuance.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u2-popular-genres",
      title: "Popular music genres",
      skill:
        "Trace the development of popular music genres and identify their social and musical characteristics.",
      lesson: {
        sections: [
          {
            heading: "Rock and roll to rock",
            body: "Rock and roll emerged in the 1950s from rhythm and blues, country and gospel — characterised by backbeat, electric guitar and youth rebellion. It became rock in the 1960s–70s with more experimentation: psychedelic rock, hard rock, punk. Each subgenre reflected its era's social tensions.",
          },
          {
            heading: "Soul, funk and hip-hop",
            body: "**Soul** grew from gospel and rhythm and blues, emphasising emotional vocal delivery. **Funk** emphasised rhythm and groove — the 'one' beat. **Hip-hop** emerged in 1970s Bronx from DJ culture, rapping, breakdancing and graffiti — a complete artistic movement expressing urban experience and social commentary.",
          },
          {
            heading: "Genre and identity",
            body: "Popular music genres are never just sound — they carry identity. Rock signalled youth rebellion; soul signalled Black pride and civil rights; hip-hop signalled urban resilience and social critique. Understanding genre means understanding the social world that produced it.",
          },
        ],
        keyFormulas: [
          {
            name: "Rock origins",
            statement: "Rhythm and blues + country + gospel = rock and roll",
          },
          {
            name: "Hip-hop elements",
            statement:
              "Rapping + DJing + breakdancing + graffiti = hip-hop culture",
          },
        ],
        workedExample: {
          problem:
            "A song features a heavy backbeat, distorted electric guitar and lyrics about teenage rebellion. What genre and era?",
          solution:
            "Rock and roll or early rock — the backbeat, electric guitar and rebellious themes are hallmarks of 1950s–60s rock. The specific sound would distinguish early rock and roll (simpler, dance-oriented) from later rock (more experimental, album-oriented).",
        },
      },
      questions: [
        {
          id: "music-u2-popular-genres-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Hip-hop culture originally combined which elements?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Jazz and blues only" },
              { id: "b", text: "Rapping, DJing, breakdancing and graffiti" },
              { id: "c", text: "Orchestral music and ballet" },
              { id: "d", text: "Classical piano and opera" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Hip-hop elements",
                statement:
                  "Rapping, DJing, breakdancing and graffiti formed hip-hop culture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hip-hop emerged as a complete culture combining rapping, DJing, breakdancing and graffiti.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Rapping, DJing, breakdancing and graffiti",
            commonErrors: [
              "Reducing hip-hop to just music without its cultural elements.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two musical characteristics of funk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Funk features",
                statement:
                  "Rhythmic groove, syncopation and emphasis on the 'one' beat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Strong rhythmic groove — emphasis on the downbeat or 'one'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Syncopated bass lines and tight rhythm section interplay.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Brass stabs and call-and-response patterns add energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Funk emphasises groove, syncopation and rhythmic precision.",
            commonErrors: [
              "Confusing funk with rock or soul without noting rhythmic focus.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how popular music genres reflect their social contexts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre and society",
                statement:
                  "Genres emerge from and express the social conditions of their time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rock and roll expressed post-war youth culture and rebellion against conformity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Soul expressed Black pride and civil rights struggles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hip-hop expressed urban experience, inequality and social critique.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: genre is a social document, not just a musical category.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genres encode social identity, struggle and values of their eras.",
            commonErrors: [
              "Treating genres as purely musical categories without social meaning.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Trace the development of rock music from rock and roll to later subgenres.",
          parts: [
            {
              label: "a",
              prompt: "Identify the origins of rock and roll.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how rock evolved in the 1960s–70s.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether rock 'progressed' or just 'changed'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Rock evolution",
                statement:
                  "Rock and roll → rock reflects changing youth culture and musical experimentation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "1950s blend of rhythm and blues, country and gospel; backbeat, electric guitar, youth rebellion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Origins correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "1960s–70s: psychedelic rock, hard rock, punk — more experimentation, album-oriented, reflected social tensions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evolution explained with social context.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "'Progressed' implies improvement; 'changed' is more accurate — each subgenre suited its era.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned judgement on evolution vs change.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) R&B + country + gospel. (b) Psychedelic, hard rock, punk reflected era. (c) 'Changed' is more accurate.",
            commonErrors: ["Treating rock history as simple linear progress."],
          },
        },
        {
          id: "music-u2-popular-genres-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Rock and roll emerged as a distinct genre in which decade?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 1930s" },
              { id: "b", text: "The 1950s" },
              { id: "c", text: "The 1920s" },
              { id: "d", text: "The 1980s" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Rock and roll origins",
                statement:
                  "Rock and roll emerged in the 1950s from rhythm and blues, country and gospel.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 1950s saw rhythm and blues, country and gospel fuse into rock and roll.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The 1950s",
            commonErrors: [
              "Placing rock and roll's emergence before rhythm and blues had developed.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'backbeat' in rock music refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the accent on beats two and four" },
              { id: "b", text: "the guitar solo section" },
              { id: "c", text: "the bass guitar's lowest note" },
              { id: "d", text: "a drum fill at the end of phrases" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Backbeat",
                statement:
                  "Accentuation of the second and fourth beats, driving rock's rhythmic energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The backbeat emphasises beats two and four, giving rock its driving feel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** The accent on beats two and four",
            commonErrors: [
              "Describing the backbeat as a drum pattern rather than a metrical accent.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Soul music grew primarily from which traditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Gospel and rhythm and blues" },
              { id: "b", text: "Classical opera and ballet" },
              { id: "c", text: "European folk songs" },
              { id: "d", text: "Country music only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Soul origins",
                statement:
                  "Soul fused gospel vocal intensity with rhythm and blues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Soul combined gospel's emotional delivery with rhythm and blues structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Gospel and rhythm and blues",
            commonErrors: [
              "Confusing soul's gospel roots with purely secular rhythm and blues.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Funk music is primarily characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "slow ballads and string sections" },
              { id: "b", text: "orchestral grandeur" },
              {
                id: "c",
                text: "rhythmic groove, syncopation and emphasis on the 'one'",
              },
              { id: "d", text: "spoken-word poetry only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Funk",
                statement:
                  "A rhythm-driven genre emphasising groove and syncopated bass.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Funk foregrounds rhythm — the groove, syncopation and the accented 'one' beat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Rhythmic groove, syncopation and emphasis on the 'one'",
            commonErrors: [
              "Confusing funk's rhythmic focus with soul's vocal focus.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Hip-hop originated in which setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Paris café scene of the 1920s" },
              {
                id: "b",
                text: "The 1970s Bronx through DJing, rapping, breakdancing and graffiti",
              },
              { id: "c", text: "Nashville recording studios" },
              { id: "d", text: "European conservatories" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Hip-hop origins",
                statement:
                  "Hip-hop emerged in the 1970s Bronx as a complete cultural movement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Bronx scene combined DJing, MCing, breakdancing and graffiti into hip-hop culture.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** The 1970s Bronx through DJing, rapping, breakdancing and graffiti",
            commonErrors: [
              "Reducing hip-hop to a music genre without its cultural context.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Punk rock primarily expressed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "orchestral grandeur and formal complexity" },
              { id: "b", text: "nostalgia for earlier decades" },
              { id: "c", text: "polished commercial pop ambition" },
              {
                id: "d",
                text: "DIY rebellion against mainstream music and society",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Punk ethos",
                statement:
                  "Punk rejected virtuosity and commercialism in favour of raw self-expression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Punk embraced simplicity, amateurism and direct confrontation with mainstream values.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** DIY rebellion against mainstream music and society",
            commonErrors: [
              "Treating punk as merely a musical style without its anti-establishment ethos.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two popular music genres that grew directly from rhythm and blues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Genre lineage",
                statement:
                  "Rock and roll, soul and funk all developed from rhythm and blues.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two valid genres identified, e.g. rock and roll or soul.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second genre identified, e.g. funk.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genres correctly linked to rhythm and blues ancestry.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Any two of rock and roll, soul, funk.",
            commonErrors: [
              "Naming genres like hip-hop or punk that did not descend directly from rhythm and blues.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two musical characteristics of rock and roll.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rock and roll features",
                statement:
                  "Backbeat, electric guitar, energetic rhythms and accessible song forms.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A prominent backbeat — accented beats two and four — drives the rhythm.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Electric guitar riffs and energetic, danceable tempos define the sound.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Short song forms and repeated hooks made it accessible to youth audiences.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The sound fused rhythm and blues energy with country and gospel vocal styles.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Backbeat, electric guitar, energetic tempo and accessible song forms characterise rock and roll.",
            commonErrors: [
              "Listing later rock features that were not present in 1950s rock and roll.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how hip-hop functions as a complete cultural movement rather than just a music genre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Hip-hop culture",
                statement:
                  "Rapping, DJing, breakdancing and graffiti formed an integrated cultural movement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hip-hop combined four elements — rapping, DJing, breakdancing and graffiti — into one movement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "DJing provided the musical foundation through breakbeats and sampling.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Breakdancing and graffiti expressed the culture physically and visually.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rapping delivered social commentary and storytelling, giving voice to urban experience.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: hip-hop is a lifestyle and identity, not merely a musical style.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Hip-hop integrates music, dance, visual art and social commentary into a complete cultural movement.",
            commonErrors: ["Reducing hip-hop to rap music alone."],
          },
        },
        {
          id: "music-u2-popular-genres-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare soul and funk as genres.",
          parts: [
            {
              label: "a",
              prompt: "Compare their origins and ancestry.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Compare their musical priorities.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Compare the identity each genre expressed.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Soul vs funk",
                statement:
                  "Both Black genres — soul foregrounds vocal emotion, funk foregrounds rhythm.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Both grew from gospel and rhythm and blues; funk later drew on soul and jazz.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Origins accurately compared.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Soul prioritised expressive vocals and song structure; funk prioritised rhythmic groove, syncopated bass and the 'one' beat.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Musical priorities compared accurately.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Soul expressed emotional depth and civil rights pride; funk expressed celebration, physicality and dance-floor identity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Identity comparison convincingly drawn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shared gospel/R&B roots. (b) Vocal emotion vs rhythmic groove. (c) Soul = emotional pride, funk = physical celebration.",
            commonErrors: ["Treating soul and funk as interchangeable."],
          },
        },
        {
          id: "music-u2-popular-genres-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace the development of rock from rock and roll to punk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Rock evolution",
                statement:
                  "Rock and roll → rock → punk reflects changing youth culture and experimentation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1950s rock and roll fused rhythm and blues, country and gospel into youth dance music.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "1960s rock became album-oriented and experimental — the Beatles, Dylan, psychedelic rock.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Late 1960s–70s saw hard rock and arena rock expand volume and virtuosic display.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Punk (mid-1970s) rejected rock's virtuosity and commercialism with raw, fast, minimal music.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each stage's sound reflected its social moment — post-war optimism, counterculture, disillusionment.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Instrumentation evolved from guitars and drums to include synthesizers and effects.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The trajectory shows rock repeatedly reinventing itself against its own mainstream.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: rock's 'progress' is better understood as cyclical change responding to youth identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rock and roll → experimental rock → hard rock → punk: each stage answers its era's youth culture.",
            commonErrors: [
              "Tracing dates without linking musical change to social change.",
            ],
          },
        },
        {
          id: "music-u2-popular-genres-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that music genres are defined by sound alone.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two musical features that define a genre's sound.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Present evidence that genres carry more than sound.",
              marks: 2,
            },
            { label: "c", prompt: "Give your reasoned judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre definition",
                statement:
                  "Genres combine musical features with social context, identity and function.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Two valid features identified, e.g. backbeat for rock, groove for funk, rapping for hip-hop.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Features correctly identified as sonic markers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Evidence: rock signalled rebellion, soul signalled civil rights, hip-hop signalled urban critique — meaning beyond sound.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Social evidence presented convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: sound is necessary but not sufficient; genre also encodes identity and social function.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Sound markers like backbeat or groove. (b) Genres carry identity and social meaning. (c) Sound alone does not define a genre.",
            commonErrors: ["Agreeing that genres are purely sonic categories."],
          },
        },
      ],
    },
  ],
};
