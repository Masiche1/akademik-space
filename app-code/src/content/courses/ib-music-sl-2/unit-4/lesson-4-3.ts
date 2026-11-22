import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "music-u4-lesson-4-3",
  code: "4-3",
  title: "Fusion and Cross-Cultural Music",
  goal: "I CAN analyse how musical traditions blend and influence each other through fusion and cross-cultural exchange.",
  standards: [
    "Contextual Studies",
    "Global Music",
  ],
  vocabulary: [
    { term: "Fusion", definition: "The blending of two or more musical traditions to create new forms." },
    { term: "Cross-cultural exchange", definition: "The mutual influence between musical traditions through contact, migration and media." },
    { term: "World music", definition: "A marketing/category term for music from non-Western or traditional sources." },
    { term: "Sampling", definition: "Using portions of existing recordings in new compositions." },
    { term: "Cultural appropriation", definition: "Adopting elements of another culture without understanding, credit or benefit to the source." },
    { term: "Hybrid genre", definition: "A genre combining features of multiple traditions, e.g. jazz-funk, Afrobeat." },
  ],
  concepts: [
    {
      id: "music-u4-fusion",
      title: "Musical fusion",
      skill: "Analyse how different musical traditions blend to create new hybrid genres.",
      lesson: {
        sections: [
          {
            heading: "How fusion happens",
            body: "Musical fusion occurs through contact: migration brings traditions together; colonialism forced encounters; media spreads sounds globally; artists deliberately experiment. Jazz fused African-American traditions with European harmony; salsa fused Cuban rhythms with jazz; Afrobeat fused Ghanaian highlife with funk. Fusion is not dilution — it's creative synthesis.",
          },
          {
            heading: "Successful vs problematic fusion",
            body: "Successful fusion respects both traditions: musicians understand the elements they borrow; collaboration is genuine; credit is given. Problematic fusion appropriates: taking surface elements without understanding; profit without benefit to source communities; distortion of meaning. The difference is respect and reciprocity.",
          },
          {
            heading: "World music and hybridity",
            body: "The 'world music' label often flattens diversity into a marketing category. True hybridity acknowledges complexity: a track might blend Ghanaian rhythm, jazz harmony and electronic production — each element retains its identity while creating something new. The best fusions expand musical vocabulary rather than replace it.",
          },
        ],
        keyFormulas: [
          { name: "Fusion success", statement: "Respect + understanding + credit + reciprocity = ethical fusion" },
          { name: "Fusion sources", statement: "Migration + colonialism + media + experimentation = musical contact" },
        ],
        workedExample: {
          problem: "A producer samples a traditional African drum pattern and builds an electronic track around it. Is this fusion or appropriation?",
          solution: "Depends on approach: if the producer understands the pattern's cultural context, credits the source, and benefits the community — fusion. If the pattern is taken superficially without attribution or benefit — appropriation. The musical result may sound identical; the ethics differ.",
        },
      },
      questions: [
        {
          id: "music-u4-fusion-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Musical fusion is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying famous songs" },
              { id: "b", text: "Blending two or more musical traditions to create new forms" },
              { id: "c", text: "Simplifying complex music" },
              { id: "d", text: "Replacing traditional music with pop" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fusion", statement: "The blending of musical traditions to create new hybrid forms." },
            ],
            steps: [
              { reasoning: "Fusion blends multiple musical traditions to create new forms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Blending two or more musical traditions to create new forms",
            commonErrors: [
              "Confusing fusion with copying or replacing traditions.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two factors that enable musical fusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Fusion factors", statement: "Migration, media, colonialism and experimentation bring traditions together." },
            ],
            steps: [
              { reasoning: "Migration — people carry musical traditions to new locations.", marks: 1, markCode: "M" },
              { reasoning: "Media — recordings and broadcasts spread sounds globally.", marks: 1, markCode: "M" },
              { reasoning: "Deliberate experimentation — artists intentionally blend traditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Migration, media and experimentation enable musical fusion.",
            commonErrors: [
              "Treating fusion as accidental rather than culturally situated.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between respectful fusion and cultural appropriation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Ethical fusion", statement: "Respectful fusion credits and benefits; appropriation extracts without acknowledgment." },
            ],
            steps: [
              { reasoning: "Respectful fusion involves understanding, credit and benefit to source communities.", marks: 1, markCode: "M" },
              { reasoning: "Appropriation takes surface elements without understanding or compensation.", marks: 1, markCode: "M" },
              { reasoning: "Power relations matter — who profits, who is represented, who controls meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ethics depend on relationship, not just musical result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Respectful fusion credits and benefits; appropriation extracts without acknowledgment.",
            commonErrors: [
              "Judging fusion only by musical quality, not ethical relationship.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described collaboration",
            author: "Written for Akademik Space",
            source: "Fusion analysis exercise",
            text: "A Western electronic producer collaborates with West African musicians: the Africans contribute drumming patterns and vocals, the producer contributes electronic production and synthesizers. The resulting track credits all musicians and the proceeds are shared.",
          },
          stem: "Analyse a described cross-cultural musical collaboration.",
          parts: [
            { label: "a", prompt: "Identify the traditions being combined.", marks: 2 },
            { label: "b", prompt: "Evaluate whether the fusion is respectful or appropriative.", marks: 2 },
            { label: "c", prompt: "Suggest how to improve the collaboration.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Ethical fusion", statement: "Genuine collaboration with credit and benefit distinguishes fusion from appropriation." },
            ],
            steps: [
              { part: "a", reasoning: "West African drumming/vocals + Western electronic production — clearly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Traditions correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Respectful — genuine collaboration, credit given, proceeds shared, both traditions contribute essentially.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethical evaluation convincingly argued.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could deepen by having African musicians co-produce or lead creative decisions; document process for cultural context.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement suggested.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) African drumming + electronic. (b) Respectful — credit, benefit, genuine collaboration. (c) Deepen via co-production and documentation.",
            commonErrors: [
              "Judging fusion only by musical result without ethical analysis.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Afrobeat, as practised by Fela Kuti, primarily fuses which traditions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salsa with techno only" },
              { id: "b", text: "Ghanaian highlife with funk and jazz" },
              { id: "c", text: "Gamelan with opera" },
              { id: "d", text: "Bach chorales with blues" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Afrobeat", statement: "Afrobeat blends West African highlife with funk and jazz elements." },
            ],
            steps: [
              { reasoning: "Afrobeat combines Ghanaian/Nigerian highlife, funk rhythms and jazz-influenced harmony.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ghanaian highlife with funk and jazz",
            commonErrors: [
              "Confusing Afrobeat with other fusion genres.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two hybrid genres and the traditions each combines.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Hybrid genres", statement: "Jazz-funk, salsa, Afrobeat and worldbeat each combine identifiable traditions." },
            ],
            steps: [
              { reasoning: "Any two valid pairings: jazz+African-American/European, salsa+Cuban/jazz, Afrobeat+highlife/funk.", marks: 1, markCode: "M" },
              { reasoning: "Both genres correctly described with their source traditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Jazz (African-American + European harmony), salsa (Cuban + jazz), Afrobeat (highlife + funk).",
            commonErrors: [
              "Naming genres without identifying combined traditions.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Sampling becomes cultural appropriation when it is done:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "With credit and benefit to the source community" },
              { id: "b", text: "At a fast tempo" },
              { id: "c", text: "Without understanding, credit or benefit to the source" },
              { id: "d", text: "In a minor key" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Appropriation criteria", statement: "Extraction without understanding, attribution or reciprocity defines appropriation." },
            ],
            steps: [
              { reasoning: "Appropriation involves taking elements without understanding context, giving credit or sharing benefit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Without understanding, credit or benefit to the source",
            commonErrors: [
              "Judging sampling only by musical outcome, not ethical process.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how mass media enables musical fusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Media as conduit", statement: "Recordings and broadcasts circulate sounds across borders and cultures." },
            ],
            steps: [
              { reasoning: "Radio, records and streaming expose musicians to distant traditions.", marks: 1, markCode: "M" },
              { reasoning: "Artists can study, imitate and recombine elements from multiple cultures.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: media collapses geographic distance, accelerating hybridisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Media circulates recordings globally, letting musicians access and blend distant traditions.",
            commonErrors: [
              "Describing media as passive background rather than active agent.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Critics of the 'world music' label argue that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires musicians to write scores" },
              { id: "b", text: "Excludes all non-Western artists" },
              { id: "c", text: "Flattens distinct traditions into a single marketing category" },
              { id: "d", text: "Promotes too much diversity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "World music critique", statement: "The label homogenises diverse traditions for Western consumption." },
            ],
            steps: [
              { reasoning: "'World music' lumps heterogeneous traditions into one category, obscuring their distinct identities.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Flattens distinct traditions into a single marketing category",
            commonErrors: [
              "Accepting the label as neutral rather than critically examining it.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described track",
            author: "Written for Akademik Space",
            source: "Fusion analysis",
            text: "A track layers a Ghanaian kpanlogo drum pattern under a deep house bassline, adds jazz-influenced Rhodes chords, and features vocals in Twi and English. The Ghanaian drummer is credited as co-writer and receives a share of royalties.",
          },
          stem: "Analyse the described track.",
          parts: [
            { label: "a", prompt: "Identify the traditions being combined.", marks: 2 },
            { label: "b", prompt: "Assess whether the fusion is respectful or appropriative.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Fusion assessment", statement: "Ghanaian rhythm + electronic house + jazz harmony; credit and royalties indicate ethical practice." },
            ],
            steps: [
              { part: "a", reasoning: "Ghanaian drumming (kpanlogo), electronic dance music (house), jazz harmony (Rhodes) — any two plus third.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Traditions correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Respectful — genuine collaboration, co-writing credit, royalty share, bilingual vocals honour source.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Assessment convincingly argued.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ghanaian rhythm, house, jazz. (b) Respectful — credit, royalties, genuine collaboration.",
            commonErrors: [
              "Judging fusion without examining credit and benefit.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The strongest indicator of ethical musical fusion is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The complexity of the production" },
              { id: "b", text: "How many genres are blended" },
              { id: "c", text: "Reciprocity — credit, benefit and respect for source traditions" },
              { id: "d", text: "Whether it becomes a hit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocity", statement: "Ethical fusion requires mutual respect, credit and benefit to source communities." },
            ],
            steps: [
              { reasoning: "Ethics are judged by reciprocity — understanding, credit and benefit — not musical complexity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Reciprocity — credit, benefit and respect for source traditions",
            commonErrors: [
              "Equating musical sophistication with ethical practice.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why musical fusion is 'creative synthesis rather than dilution'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Synthesis", statement: "Fusion creates new musical entities while elements retain identities." },
            ],
            steps: [
              { reasoning: "Fusion generates new genres — jazz, salsa, Afrobeat — that did not exist before.", marks: 1, markCode: "M" },
              { reasoning: "Source elements often retain recognisable identity within the hybrid.", marks: 1, markCode: "M" },
              { reasoning: "The new form expands musical vocabulary for all traditions involved.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: synthesis adds; it only dilutes when engagement is superficial.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fusion creates new forms while preserving source identities — synthesis, not dilution.",
            commonErrors: [
              "Claiming fusion destroys traditions rather than extending them.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described case",
            author: "Written for Akademik Space",
            source: "Ethical analysis",
            text: "A pop artist samples a sacred ceremonial chant from a small community, uses it as a catchy hook, releases the single without contacting anyone from that community, and earns significant royalties. The chant's original ceremonial meaning is never mentioned.",
          },
          stem: "Analyse this described use of sampled material.",
          parts: [
            { label: "a", prompt: "Identify what makes this appropriation rather than fusion.", marks: 3 },
            { label: "b", prompt: "Suggest two ways the artist could have acted ethically.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Appropriation analysis", statement: "Sacred material extracted without contact, context or benefit is appropriation." },
            ],
            steps: [
              { part: "a", reasoning: "No contact with community; sacred meaning stripped; profit without reciprocity; power imbalance exploited.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Multiple violations identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Analysis complete and convincing.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consult community before sampling; credit and compensate; contextualise or avoid sacred material.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two concrete ethical alternatives offered.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Suggestions practical and relevant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) No consent, sacred meaning stripped, no benefit shared. (b) Consult, credit, compensate, contextualise.",
            commonErrors: [
              "Focusing on musical quality rather than ethical process.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Colonialism enabled musical fusion primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forcing cultural contact and often unequal exchange between traditions" },
              { id: "b", text: "Inventing recording technology" },
              { id: "c", text: "Banning all cross-cultural music" },
              { id: "d", text: "Protecting all traditions equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Colonial contact", statement: "Colonialism forced encounters that produced both fusion and appropriation." },
            ],
            steps: [
              { reasoning: "Colonialism brought traditions into forced contact, often under unequal power — generating fusion and appropriation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Forcing cultural contact and often unequal exchange between traditions",
            commonErrors: [
              "Ignoring the power dynamics of colonial-era musical contact.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse how power relations shape the ethics of musical fusion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Power in fusion", statement: "Who profits, who controls meaning and who is credited determines fairness." },
            ],
            steps: [
              { reasoning: "Musical borrowing is not neutral — historical inequalities affect who profits from whose elements.", marks: 1, markCode: "M" },
              { reasoning: "Questions of who controls representation, credit and revenue reveal the exchange's fairness.", marks: 1, markCode: "M" },
              { reasoning: "Dominant-culture artists borrowing marginalised elements raise different concerns than the reverse.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: ethical fusion must reckon with power, not just musical quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Power relations determine who profits and controls meaning — fusion ethics depend on them.",
            commonErrors: [
              "Treating all borrowing as ethically equivalent regardless of power.",
            ],
          },
        },
        {
          id: "music-u4-fusion-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Jazz's synthesis of African-American and European elements is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An accidental result of poor musicianship" },
              { id: "b", text: "Pure copying of European classical music" },
              { id: "c", text: "An exchange where blues feeling met harmonic sophistication to create something new" },
              { id: "d", text: "A loss of both traditions" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Jazz synthesis", statement: "Jazz fused blues/ragtime feeling with European harmonic language." },
            ],
            steps: [
              { reasoning: "Jazz gained emotional depth from African-American traditions and harmonic sophistication from European practice.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** An exchange where blues feeling met harmonic sophistication to create something new",
            commonErrors: [
              "Attributing jazz to only one tradition.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u4-cross-cultural-analysis",
      title: "Analysing cross-cultural exchange",
      skill: "Analyse how musical elements travel between cultures and transform in new contexts.",
      lesson: {
        sections: [
          {
            heading: "Elements in transit",
            body: "Musical elements travel: rhythm patterns, instruments, vocal techniques, scales. When they arrive in new contexts, they transform — adapt to new instruments, blend with local traditions, acquire new meanings. The blues traveled from Mississippi to London and became rock; reggae traveled from Jamaica to London and became global protest music.",
          },
          {
            heading: "Transformation vs loss",
            body: "Does borrowing enrich or dilute? Both happen: traditions gain new life through hybridisation; specific meanings may be lost in translation. A blues rhythm in a pop song retains its feel but loses its original context. The question is whether transformation honours or exploits the source.",
          },
          {
            heading: "Analysing exchange",
            body: "To analyse cross-cultural music, ask: what elements are borrowed? How are they transformed? What is gained and lost? Who benefits? Is the exchange reciprocal or extractive? These questions reveal the politics and poetics of musical contact.",
          },
        ],
        keyFormulas: [
          { name: "Element transformation", statement: "Rhythm + instruments + scales travel and adapt to new contexts" },
          { name: "Exchange questions", statement: "What borrowed? How transformed? What gained/lost? Who benefits?" },
        ],
        workedExample: {
          problem: "Jazz adopted African-American blues elements and European harmonic structures. What was gained and lost?",
          solution: "Gained: European harmony gave jazz sophisticated chord progressions; blues gave it emotional depth and rhythmic feel. Lost: some African communal performance practices became individualised; call-and-response became more formalised. The synthesis created something new while transforming both sources.",
        },
      },
      questions: [
        {
          id: "music-u4-cross-cultural-analysis-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When musical elements travel between cultures, they typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Disappear completely" },
              { id: "b", text: "Transform and adapt to new contexts" },
              { id: "c", text: "Remain unchanged" },
              { id: "d", text: "Become illegal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Element transformation", statement: "Musical elements adapt and transform when crossing cultural boundaries." },
            ],
            steps: [
              { reasoning: "Musical elements transform and adapt when they cross cultural boundaries.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transform and adapt to new contexts",
            commonErrors: [
              "Assuming borrowed elements remain unchanged.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two questions for analysing cross-cultural musical exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exchange analysis", statement: "What is borrowed, how transformed, who benefits, what is gained/lost." },
            ],
            steps: [
              { reasoning: "What specific elements are borrowed — rhythm, melody, instruments, technique?", marks: 1, markCode: "M" },
              { reasoning: "How are they transformed in the new context?", marks: 1, markCode: "M" },
              { reasoning: "Who benefits from the exchange and what is gained or lost?", marks: 1, markCode: "A" },
            ],
            finalAnswer: "What is borrowed, how transformed, who benefits — key analysis questions.",
            commonErrors: [
              "Describing the music without analysing the exchange dynamics.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how borrowing can both enrich and dilute musical traditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Borrowing effects", statement: "Hybridisation creates new forms while potentially losing original meanings." },
            ],
            steps: [
              { reasoning: "Enrichment: borrowing creates new genres and expands musical vocabulary.", marks: 1, markCode: "M" },
              { reasoning: "Dilution: surface borrowing may lose deeper cultural meanings and context.", marks: 1, markCode: "M" },
              { reasoning: "The outcome depends on depth of engagement — superficial vs respectful borrowing.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: exchange is neither purely good nor bad — it depends on how it's done.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Borrowing enriches through hybridisation but can dilute through superficial appropriation.",
            commonErrors: [
              "Claiming all borrowing is either good or bad without nuance.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described musical work",
            author: "Written for Akademik Space",
            source: "Cross-cultural analysis exercise",
            text: "A song combines West African call-and-response vocals with American blues guitar and jazz piano harmony. The African musicians are credited as co-writers; the song addresses themes of migration and identity.",
          },
          stem: "Analyse the cross-cultural exchange in a described musical work.",
          parts: [
            { label: "a", prompt: "Identify the traditions being combined.", marks: 2 },
            { label: "b", prompt: "Explain what is gained and lost in the exchange.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the exchange is equitable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Exchange analysis", statement: "Elements from multiple traditions combine; credit and themes reveal the exchange's character." },
            ],
            steps: [
              { part: "a", reasoning: "West African vocals + American blues/jazz harmony — clearly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Traditions correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gained: vocal tradition gets harmonic sophistication; blues/jazz gains rhythmic and vocal vitality. Lost: some African communal context may be individualised.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gains and losses convincingly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equitable — co-writing credit, themes of migration acknowledge the exchange's context; both traditions contribute essentially.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation of equity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) African vocals + blues/jazz harmony. (b) Mutual enrichment with some contextual loss. (c) Equitable — credit and thematic acknowledgment.",
            commonErrors: [
              "Describing the blend without analysing exchange dynamics.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When blues travelled from Mississippi to London and became rock music, this illustrates that travelling musical elements typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Lose all connection to their origin" },
              { id: "b", text: "Transform while retaining some original characteristics" },
              { id: "c", text: "Remain unchanged in every detail" },
              { id: "d", text: "Become unrecognisable immediately" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Blues to rock", statement: "Rock retained blues' rhythmic and emotional feel while transforming into a new genre." },
            ],
            steps: [
              { reasoning: "Rock adapted blues elements — 12-bar feel, vocal style — into a new context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Transform while retaining some original characteristics",
            commonErrors: [
              "Assuming borrowed elements either stay identical or vanish.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two types of musical elements that commonly travel between cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Travelling elements", statement: "Rhythm, instruments, scales, vocal techniques and song forms cross cultural boundaries." },
            ],
            steps: [
              { reasoning: "Any two valid: rhythm patterns, instruments, scales/modes, vocal techniques, song forms, timbres.", marks: 1, markCode: "M" },
              { reasoning: "Elements correctly named.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhythm patterns, instruments, scales, vocal techniques, song forms.",
            commonErrors: [
              "Listing genres rather than transferable elements.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In cross-cultural analysis, the question 'what is borrowed?' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Which cultural group is richest" },
              { id: "b", text: "Which songs sold best" },
              { id: "c", text: "Which instruments cost the most" },
              { id: "d", text: "Which specific elements — rhythm, melody, instruments, technique — were taken" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Exchange questions", statement: "Analysis identifies specific borrowed elements before assessing transformation." },
            ],
            steps: [
              { reasoning: "The first analytical question identifies precisely which elements crossed the boundary.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Which specific elements — rhythm, melody, instruments, technique — were taken",
            commonErrors: [
              "Vague description without identifying specific elements.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the distinction between transformation and loss in cross-cultural exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Transformation vs loss", statement: "Elements adapt and gain new meanings; original contexts may be shed." },
            ],
            steps: [
              { reasoning: "Transformation: elements adapt to new instruments, styles and meanings — creating new life.", marks: 1, markCode: "M" },
              { reasoning: "Loss: original cultural context, sacred meaning or communal function may not transfer.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: both occur simultaneously; evaluation depends on whether source is honoured.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transformation adapts elements to new contexts while loss sheds original meanings.",
            commonErrors: [
              "Treating transformation and loss as mutually exclusive.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A blues-derived rhythm in a pop song retains its feel but loses its original Delta context. This best illustrates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No exchange at all" },
              { id: "b", text: "Cultural appropriation by definition" },
              { id: "c", text: "Partial transformation — surface retained, context altered" },
              { id: "d", text: "Complete preservation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Partial transformation", statement: "Elements can keep surface features while losing original context." },
            ],
            steps: [
              { reasoning: "The rhythm survives recognisably but its cultural context does not — partial transformation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Partial transformation — surface retained, context altered",
            commonErrors: [
              "Assuming retention of sound equals retention of meaning.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q10",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "Described track",
            author: "Written for Akademik Space",
            source: "Cross-cultural analysis",
            text: "A producer takes a Japanese shakuhachi flute phrase, re-pitches it through electronic effects, and places it over a trap beat with auto-tuned vocals. The original recording is not credited.",
          },
          stem: "Analyse the described track.",
          parts: [
            { label: "a", prompt: "Identify the elements that travelled and how they transformed.", marks: 2 },
            { label: "b", prompt: "Assess what was gained and lost.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Element transit", statement: "Shakuhachi timbre travels into electronic production; context and credit are lost." },
            ],
            steps: [
              { part: "a", reasoning: "Shakuhachi phrase/timbre borrowed; transformed via pitch-shifting and electronic effects into trap context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Element and transformation identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Gained: exotic timbral colour for producer; lost: shakuhachi's spiritual/cultural context and attribution.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Gains and losses convincingly assessed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Shakuhachi timbre electronically transformed into trap. (b) Gained timbral colour; lost context and credit.",
            commonErrors: [
              "Describing the blend without tracing element transformation.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The central ethical question in analysing cross-cultural exchange is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who benefits and whether the exchange is reciprocal" },
              { id: "b", text: "Which recording sounds best" },
              { id: "c", text: "Which tradition has more instruments" },
              { id: "d", text: "Which genre sells more records" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exchange ethics", statement: "Reciprocity and benefit determine whether exchange honours or exploits." },
            ],
            steps: [
              { reasoning: "Analytical frameworks centre on who benefits and whether exchange is mutual.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Who benefits and whether the exchange is reciprocal",
            commonErrors: [
              "Reducing analysis to musical description alone.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using jazz as an example, analyse what was gained and lost in cross-cultural exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Jazz exchange", statement: "Jazz fused African-American blues/ragtime with European harmony." },
            ],
            steps: [
              { reasoning: "Gained: sophisticated chord progressions and formal development from European practice.", marks: 1, markCode: "M" },
              { reasoning: "Gained: blues' emotional depth, rhythmic vitality and improvisatory spirit.", marks: 1, markCode: "M" },
              { reasoning: "Lost: some African communal performance context became individualised solo expression.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: jazz is a synthesis — mutual enrichment with partial contextual loss.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Jazz gained harmonic sophistication and blues depth; lost some communal performance context.",
            commonErrors: [
              "Listing gains without acknowledging losses.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q13",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described case",
            author: "Written for Akademik Space",
            source: "Exchange analysis",
            text: "A K-pop group samples a West African percussion break, has a Ghanaian producer co-produce the track, credits the source musicians, and donates part of proceeds to a Ghanaian music education charity. The song becomes a global hit.",
          },
          stem: "Analyse the cross-cultural exchange described.",
          parts: [
            { label: "a", prompt: "Identify what was borrowed and how it was transformed.", marks: 2 },
            { label: "b", prompt: "Evaluate whether the exchange is equitable.", marks: 2 },
            { label: "c", prompt: "Suggest one further improvement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Equitable exchange", statement: "Credit, co-production, donation and hit status indicate a largely reciprocal exchange." },
            ],
            steps: [
              { part: "a", reasoning: "West African percussion pattern borrowed; embedded in K-pop production — transformed by genre context.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Borrowed element and transformation identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Equitable — co-producer credit, source musician credit, charitable benefit to source region.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equity convincingly evaluated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Could involve source musicians in creative decisions or document the tradition's context for audiences.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Concrete improvement offered.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) African percussion in K-pop context. (b) Equitable — credit, co-production, benefit. (c) Deeper creative involvement or contextual documentation.",
            commonErrors: [
              "Judging by musical result without analysing exchange dynamics.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A reciprocal exchange differs from an extractive one in that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both parties benefit and retain agency over their elements" },
              { id: "b", text: "It produces better music" },
              { id: "c", text: "It happens more quickly" },
              { id: "d", text: "It involves more genres" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Reciprocity vs extraction", statement: "Reciprocal exchange benefits all parties; extraction takes without giving back." },
            ],
            steps: [
              { reasoning: "Reciprocity means mutual benefit and shared control; extraction is one-sided taking.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Both parties benefit and retain agency over their elements",
            commonErrors: [
              "Equating musical quality with ethical reciprocity.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate whether transformation of borrowed elements honours or exploits the source tradition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Honouring vs exploiting", statement: "Honouring preserves meaning and benefits source; exploiting strips context for profit." },
            ],
            steps: [
              { reasoning: "Honouring involves understanding context, preserving meaning and benefiting the source community.", marks: 1, markCode: "M" },
              { reasoning: "Exploiting strips elements of meaning, avoids credit and concentrates profit with the borrower.", marks: 1, markCode: "M" },
              { reasoning: "Transformation itself is neutral — the relationship around it determines honour or exploitation.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: evaluation requires analysing process, not just musical result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Transformation honours when it respects context and benefits source; it exploits when it extracts superficially.",
            commonErrors: [
              "Judging transformation by sound alone.",
            ],
          },
        },
        {
          id: "music-u4-cross-cultural-analysis-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The most analytically revealing question for cross-cultural exchange is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who profits from the borrowing and is it reciprocal" },
              { id: "b", text: "How many instruments are used" },
              { id: "c", text: "What key the song is in" },
              { id: "d", text: "How long the track lasts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Analytical priority", statement: "Benefit and reciprocity questions expose the politics of exchange." },
            ],
            steps: [
              { reasoning: "Questions of profit and reciprocity reveal whether exchange honours or exploits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Who profits from the borrowing and is it reciprocal",
            commonErrors: [
              "Choosing descriptive rather than analytical questions.",
            ],
          },
        },
      ],
    },
  ],
};
