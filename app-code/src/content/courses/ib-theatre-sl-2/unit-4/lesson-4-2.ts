import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "theatre-u4-lesson-4-2",
  code: "4-2",
  title: "Thematic Comparison Across Plays",
  goal: "I CAN analyse how different plays treat the same theme and compare their approaches and intentions.",
  standards: [
    "Comparative",
    "Thematic Analysis",
  ],
  vocabulary: [
    { term: "Theme", definition: "The central idea or subject a play explores." },
    { term: "Motif", definition: "A recurring element or image within a play or across plays." },
    { term: "Symbol", definition: "An object or element that represents something beyond itself." },
    { term: "Dramatic approach", definition: "The particular way a playwright treats a theme." },
    { term: "Universal theme", definition: "A subject that transcends cultures and periods." },
    { term: "Contextual theme", definition: "A theme whose meaning is shaped by its cultural and historical context." },
  ],
  concepts: [
    {
      id: "theatre-u4-thematic-approaches",
      title: "Theme and dramatic approach",
      skill: "Analyse how different plays treat the same theme through distinctive dramatic approaches.",
      lesson: {
        sections: [
          {
            heading: "Themes as common ground",
            body: "Certain themes recur across all drama: love, death, power, betrayal, identity, freedom. These universal themes provide common ground for comparison — how does each playwright's approach reveal their personality, era and purpose?",
          },
          {
            heading: "Approach as signature",
            body: "Each playwright develops a distinctive approach: the same theme of 'love' might be idealised (Romantic), analysed (psychological), satirised (comedy) or deconstructed (absurdist). The approach itself communicates — form is never neutral. Tragedy treats love as fate; comedy as obstacle; drama as choice.",
          },
          {
            heading: "Theme + context = meaning",
            body: "The same theme means different things in different contexts: 'family' might mean duty in one era, oppression in another, choice in a third. Analysing theme requires asking what the theme meant to each playwright in their time and place.",
          },
        ],
        keyFormulas: [
          { name: "Thematic analysis", statement: "Theme + approach + context = comparative meaning" },
          { name: "Approach as communication", statement: "How a playwright treats a subject is itself a statement" },
        ],
        workedExample: {
          problem: "Compare how tragedy and comedy treat the theme of 'marriage': what does each approach reveal?",
          solution: "Tragedy treats marriage as fate or trap — the union leads to downfall. Comedy treats marriage as obstacle or goal — the union resolves conflict. Drama treats marriage as choice — the union requires decision. Each genre's approach reveals its worldview about human relationships.",
        },
      },
      questions: [
        {
          id: "theatre-u4-thematic-approaches-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'theme' in drama is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The setting description" },
              { id: "b", text: "The plot's events" },
              { id: "c", text: "The central idea or subject a play explores" },
              { id: "d", text: "The character's name" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "The central idea or subject a play explores." },
            ],
            steps: [
              { reasoning: "Theme is the central idea explored, not plot events or setting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The central idea or subject a play explores",
            commonErrors: [
              "Confusing theme with plot or setting.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways playwrights' approaches to the same theme can differ.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Approach differences", statement: "Genre, tone, structure and emphasis can all vary." },
            ],
            steps: [
              { reasoning: "Genre approach — tragedy, comedy, drama treat themes differently.", marks: 1, markCode: "M" },
              { reasoning: "Tone approach — serious, satirical, absurdist, romantic.", marks: 1, markCode: "M" },
              { reasoning: "Emphasis approach — which aspects of theme are foregrounded vs backgrounded.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genre, tone and emphasis all shape dramatic approaches to themes.",
            commonErrors: [
              "Describing only plot differences without thematic approach.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the same theme can produce very different plays.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme variability", statement: "Playwright personality, era, culture and intention shape treatment." },
            ],
            steps: [
              { reasoning: "Playwrights bring different personal concerns and artistic visions.", marks: 1, markCode: "M" },
              { reasoning: "Historical context — war, politics, social change — reframes what a theme means.", marks: 1, markCode: "M" },
              { reasoning: "Different intentions — to celebrate, criticise, mourn or question — produce different treatments.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme is the question; approach is the playwright's answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personality, context and intention produce different treatments of shared themes.",
            commonErrors: [
              "Assuming a theme dictates a single correct treatment.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described plays",
            author: "Written for Akademik Space",
            source: "Thematic comparison exercise",
            text: "Play A: A play about betrayal where the betrayer is clearly villainous and the betrayed suffers terribly — moral clarity. Play B: A play about betrayal where the betrayer has understandable motives and the betrayed also wronged others — moral ambiguity.",
          },
          stem: "Compare how two described plays treat the same theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Describe each playwright's approach.", marks: 2 },
            { label: "c", prompt: "Evaluate which approach is more effective.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic comparison", statement: "Shared theme (betrayal) treated through contrasting moral approaches." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: betrayal — correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Play A: clear moral judgement, villain/victim binary. Play B: complex motives, shared culpability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both approaches accurately described.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Play A provides cathartic clarity; Play B provides psychological depth. Effectiveness depends on purpose — clarity vs complexity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement linked to purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Betrayal. (b) Moral clarity vs ambiguity. (c) Each effective for different purposes.",
            commonErrors: [
              "Comparing only plot events, not thematic treatment.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'dramatic approach' to a theme is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The particular way a playwright treats a theme" },
              { id: "b", text: "The play's setting" },
              { id: "c", text: "The list of characters" },
              { id: "d", text: "The theatre's programme notes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dramatic approach", statement: "The distinctive way a playwright treats a subject." },
            ],
            steps: [
              { reasoning: "Approach describes treatment, not setting or character lists.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The particular way a playwright treats a theme",
            commonErrors: [
              "Confusing approach with plot or setting.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how tragedy and comedy might treat the theme of 'love' differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Genre treatment", statement: "Tragedy and comedy encode opposite attitudes toward love." },
            ],
            steps: [
              { reasoning: "Tragedy treats love as fate or trap — leading to loss or downfall.", marks: 1, markCode: "M" },
              { reasoning: "Comedy treats love as obstacle or goal — resolved through union or recognition.", marks: 1, markCode: "M" },
              { reasoning: "The difference reveals each genre's worldview about human relationships.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tragedy: love as fate/trap; Comedy: love as obstacle/goal.",
            commonErrors: [
              "Describing plot outcomes without linking to genre treatment.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "In drama, 'form is never neutral' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All plays look the same on stage" },
              { id: "b", text: "Only dialogue matters" },
              { id: "c", text: "The way a theme is treated itself communicates meaning" },
              { id: "d", text: "Form has no effect on audience" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Form as communication", statement: "Treatment of theme is itself a statement." },
            ],
            steps: [
              { reasoning: "How a subject is dramatised communicates the playwright's stance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The way a theme is treated itself communicates meaning",
            commonErrors: [
              "Treating genre as a neutral container for content.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the claim that 'theme is the question; approach is the playwright's answer.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme vs approach", statement: "Themes are shared questions; approaches are individual answers shaped by context and intention." },
            ],
            steps: [
              { reasoning: "Universal themes (love, power, death) pose questions every era asks.", marks: 1, markCode: "M" },
              { reasoning: "Each playwright answers through genre, tone, structure and emphasis.", marks: 1, markCode: "M" },
              { reasoning: "The answer reflects personality, era and purpose — approach as signature.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparing approaches compares answers to shared questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Themes pose universal questions; each playwright's approach is a distinctive answer.",
            commonErrors: [
              "Treating theme and approach as the same thing.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two plays share the theme of 'power': one tragedy treats it as corrupting, one comedy treats it as ridiculous. This difference primarily reveals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plays' running times" },
              { id: "b", text: "Which playwright wrote faster" },
              { id: "c", text: "Which theatre had better lighting" },
              { id: "d", text: "Different genre worldviews about power" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach as worldview", statement: "Genre treatment encodes attitudes toward the subject." },
            ],
            steps: [
              { reasoning: "Tragic vs comic treatment encodes different worldviews.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Different genre worldviews about power",
            commonErrors: [
              "Missing that treatment reflects worldview, not just style.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Play A dramatises 'family' as a source of duty and sacrifice. Play B dramatises 'family' as a chosen bond between unrelated people.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 1 },
            { label: "b", prompt: "Describe each play's dramatic approach.", marks: 1 },
            { label: "c", prompt: "Evaluate what each approach suggests about its era's values.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic approach", statement: "Family as obligation vs choice reflects shifting cultural values." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: family — correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Play A: duty-bound institution; Play B: elective bond — approaches described.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Duty reflects traditional values; chosen family reflects contemporary individualism.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Link to era's values explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Family. (b) Duty vs choice. (c) Approaches mirror era-specific values.",
            commonErrors: [
              "Describing approaches without connecting to values.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'universal theme' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A theme with a happy ending" },
              { id: "b", text: "A theme found only in one culture" },
              { id: "c", text: "A subject that transcends cultures and periods" },
              { id: "d", text: "A theme written by famous playwrights" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal theme", statement: "Subjects like love, death and power recur across all drama." },
            ],
            steps: [
              { reasoning: "Universal themes transcend time and culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A subject that transcends cultures and periods",
            commonErrors: [
              "Confusing universality with popularity.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Consider three plays on 'freedom': a tragedy where freedom leads to isolation, a comedy where freedom is won through cleverness, and an absurdist play where freedom is meaningless.",
          parts: [
            { label: "a", prompt: "Describe each genre's approach to freedom.", marks: 2 },
            { label: "b", prompt: "Explain what the shared theme contributes to the comparison.", marks: 2 },
            { label: "c", prompt: "Evaluate which approach is most revealing and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparative thematic analysis", statement: "Same theme, three genre approaches reveal three worldviews." },
            ],
            steps: [
              { part: "a", reasoning: "Tragedy: freedom as tragic burden; Comedy: freedom as achievable goal; Absurdist: freedom as illusory.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three approaches accurately described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shared theme provides common ground enabling direct comparison of treatment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contribution of shared theme explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Any approach can be argued most revealing — justification must link to what it exposes about freedom's meaning.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluative judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Burden vs goal vs illusion. (b) Shared theme enables comparison. (c) Judgement justified by revealed meaning.",
            commonErrors: [
              "Ranking approaches without linking to meaning revealed.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Satire treats its theme primarily by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Celebrating it uncritically" },
              { id: "b", text: "Ignoring it entirely" },
              { id: "c", text: "Presenting it as sacred" },
              { id: "d", text: "Ridiculing it to expose folly or vice" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Satirical approach", statement: "Satire criticises through ridicule and irony." },
            ],
            steps: [
              { reasoning: "Satire exposes folly through comic ridicule.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ridiculing it to expose folly or vice",
            commonErrors: [
              "Confusing satire with straightforward comedy.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Play A treats 'identity' through a character's search for self. Play B treats 'identity' through a character performing different selves for different audiences.",
          parts: [
            { label: "a", prompt: "Describe each play's approach to identity.", marks: 2 },
            { label: "b", prompt: "Explain what each approach implies about the nature of self.", marks: 2 },
            { label: "c", prompt: "Evaluate which approach better serves a play about social media.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach and implication", statement: "Treatment choices imply a theory of the subject." },
            ],
            steps: [
              { part: "a", reasoning: "Play A: identity as discovery/authenticity; Play B: identity as performance/social construction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both approaches accurately described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Play A implies a stable inner self; Play B implies identity is externally performed.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Implications clearly explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Play B's performative approach arguably suits social media's curated selves; Play A suits authenticity narratives. Justified judgement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluation linked to stated purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Discovery vs performance. (b) Stable self vs constructed self. (c) Performative approach suits social media context.",
            commonErrors: [
              "Evaluating without reference to the stated purpose.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An absurdist treatment of the theme 'meaning' typically:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Denies that stable meaning can be found" },
              { id: "b", text: "Affirms life's clear purpose" },
              { id: "c", text: "Avoids the subject" },
              { id: "d", text: "Resolves meaning through a happy ending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Absurdist approach", statement: "Absurdism dramatises the search for meaning in a meaningless universe." },
            ],
            steps: [
              { reasoning: "Absurdism denies stable meaning while dramatising the search for it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Denies that stable meaning can be found",
            commonErrors: [
              "Confusing absurdism with simple confusion.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-approaches-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Compare how two plays treat 'justice': Play A presents justice as divinely ordained; Play B presents justice as socially constructed and contested.",
          parts: [
            { label: "a", prompt: "State the shared theme and each play's approach.", marks: 2 },
            { label: "b", prompt: "Explain what each approach reveals about its context.", marks: 3 },
            { label: "c", prompt: "Reach a weighed judgement on which treatment is more effective.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach as context", statement: "Treatment of justice reflects era's beliefs about order and authority." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: justice; Play A: transcendent/fate-based; Play B: human/socially contested.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme and both approaches correctly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divine justice reflects worldviews trusting cosmic order; contested justice reflects modern scepticism and social analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual link explained for Play A.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Contextual link explained for Play B.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Weighed judgement — e.g. Play B offers complexity, Play A offers moral certainty; effectiveness depends on purpose.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement supported by evidence from both plays.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Coherent evaluative conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Justice: divine vs contested. (b) Approaches reflect era worldviews. (c) Weighed judgement on effectiveness.",
            commonErrors: [
              "Comparing treatments without linking to context.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u4-thematic-context",
      title: "Theme in context",
      skill: "Analyse how cultural and historical context shapes the meaning of themes across different plays.",
      lesson: {
        sections: [
          {
            heading: "Theme meaning is contextual",
            body: "'Love' meant courtly devotion in medieval drama, romantic passion in Romantic theatre, psychological obsession in modern drama. 'Power' meant divine right in Shakespeare's era, political corruption in Ibsen's, institutional control in contemporary drama. The theme persists; its meaning is reframed by each era's concerns.",
          },
          {
            heading: "Tracing theme evolution",
            body: "Themes evolve with culture: 'women's roles' shifted from passive to active; 'authority' from sacred to questioned; 'family' from institution to choice. Tracing this evolution reveals changing values and power structures — theatre as historical document.",
          },
          {
            heading: "Comparing across time and culture",
            body: "The richest thematic comparisons cross both time and culture: how does a Greek tragedy of fate, a Shakespearean revenge tragedy, and a contemporary play about revenge each construct 'justice'? Each encodes a different relationship between individual, society and morality.",
          },
        ],
        keyFormulas: [
          { name: "Contextual theme", statement: "Theme meaning = universal concern + specific cultural/historical framing" },
          { name: "Theme evolution", statement: "Themes shift meaning as values, technology and power change" },
        ],
        workedExample: {
          problem: "How might 'the family' mean different things in a medieval morality play, a 19th-century realistic drama, and a contemporary play?",
          solution: "Medieval: family as moral institution representing social order. 19th century: family as site of repression and hidden secrets. Contemporary: family as chosen bonds or site of dysfunction. The theme persists but its meaning is reframed by each era's anxieties.",
        },
      },
      questions: [
        {
          id: "theatre-u4-thematic-context-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The meaning of a dramatic theme is most strongly shaped by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The theatre's size" },
              { id: "b", text: "The actors' fame" },
              { id: "c", text: "The length of the play" },
              { id: "d", text: "The cultural and historical context of its creation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Thematic meaning", statement: "Cultural and historical context determines theme significance." },
            ],
            steps: [
              { reasoning: "Theme meaning is activated by the cultural and historical context.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The cultural and historical context of its creation",
            commonErrors: [
              "Treating theme meaning as fixed across all contexts.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the theme of 'authority' might be treated differently across three periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Authority across periods", statement: "Divine right, political power and institutional control represent evolving attitudes." },
            ],
            steps: [
              { reasoning: "Earlier periods: authority as divine right or natural order.", marks: 1, markCode: "M" },
              { reasoning: "19th century: authority as political power to be questioned.", marks: 1, markCode: "M" },
              { reasoning: "Contemporary: authority as institutional control or personal autonomy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Authority shifts from divine right to political power to institutional control.",
            commonErrors: [
              "Describing authority themes without addressing changing attitudes.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why tracing a theme's evolution reveals cultural change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme evolution", statement: "Changing treatment of persistent themes mirrors changing values." },
            ],
            steps: [
              { reasoning: "Persistent themes appear in every period — love, power, family, death.", marks: 1, markCode: "M" },
              { reasoning: "Their changing treatment reflects shifts in values, technology and power.", marks: 1, markCode: "M" },
              { reasoning: "The evolution is a historical record — theatre as evidence of cultural change.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme evolution is a window into history.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme evolution records changing values and power structures across history.",
            commonErrors: [
              "Describing theme changes without linking them to cultural causes.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described plays",
            author: "Written for Akademik Space",
            source: "Contextual theme analysis",
            text: "Play A (ancient Greek tragedy): A king defies the gods and suffers inevitable punishment — fate is absolute. Play B (contemporary political drama): A leader's corruption is exposed and they're held accountable — justice is achievable.",
          },
          stem: "Analyse how context shapes the meaning of a shared theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme across two described plays.", marks: 2 },
            { label: "b", prompt: "Explain how each play's context shapes its treatment.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the theme retains universal meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "Justice and fate are universal themes reframed by era and worldview." },
            ],
            steps: [
              { part: "a", reasoning: "Both address justice/fate — shared theme correctly identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Play A: fate is absolute, punishment inevitable — reflects Greek worldview. Play B: accountability achievable — reflects modern belief in justice.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual shaping explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Universal concern (justice) persists but its nature — fatalistic vs achievable — is era-specific.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on universality vs specificity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Justice/fate. (b) Fatalistic vs achievable. (c) Universal concern, culturally specific meaning.",
            commonErrors: [
              "Ignoring context or treating theme meaning as universal.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'contextual theme' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A theme set in a specific building" },
              { id: "b", text: "A theme that never changes meaning" },
              { id: "c", text: "A theme whose meaning is shaped by its cultural and historical context" },
              { id: "d", text: "A theme invented for one play only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contextual theme", statement: "Theme meaning is framed by era, culture and society." },
            ],
            steps: [
              { reasoning: "Contextual themes derive meaning from their circumstances.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A theme whose meaning is shaped by its cultural and historical context",
            commonErrors: [
              "Treating theme meaning as timeless and fixed.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the theme of 'love' might be treated differently in medieval, Romantic and contemporary drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Love across periods", statement: "Courtly devotion, romantic passion and psychological obsession mark eras." },
            ],
            steps: [
              { reasoning: "Medieval: love as courtly devotion governed by social codes.", marks: 1, markCode: "M" },
              { reasoning: "Romantic: love as overwhelming passion and individual feeling.", marks: 1, markCode: "M" },
              { reasoning: "Contemporary: love as psychological complexity or social construct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Courtly devotion → romantic passion → psychological/social complexity.",
            commonErrors: [
              "Describing love themes without linking to period attitudes.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tracing a theme's evolution across history is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proves older plays were better" },
              { id: "b", text: "Eliminates the need for analysis" },
              { id: "c", text: "Shows themes never actually change" },
              { id: "d", text: "Reveals changing values, technology and power structures" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme evolution", statement: "Changing treatment mirrors cultural change." },
            ],
            steps: [
              { reasoning: "Theme evolution records shifts in values and power.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reveals changing values, technology and power structures",
            commonErrors: [
              "Missing that theme shifts are historical evidence.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the same theme can produce radically different plays in different cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural reframing", statement: "Each culture activates different meanings for shared themes." },
            ],
            steps: [
              { reasoning: "Cultures hold different beliefs about the theme's subject — e.g. honour, family, authority.", marks: 1, markCode: "M" },
              { reasoning: "Different dramatic traditions shape how themes are staged and resolved.", marks: 1, markCode: "M" },
              { reasoning: "Colonial history and power relations further refract meaning.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme is the constant; cultural lens is the variable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared themes are reframed by each culture's values, traditions and history.",
            commonErrors: [
              "Assuming universal themes guarantee universal treatment.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The richest thematic comparisons across plays typically cross:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Both time and culture" },
              { id: "b", text: "Only plays by the same author" },
              { id: "c", text: "Only plays in the same genre" },
              { id: "d", text: "Only plays written in the same year" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cross-cultural comparison", statement: "Time plus culture maximises revealed meaning." },
            ],
            steps: [
              { reasoning: "Crossing time and culture reveals the widest range of thematic reframing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Both time and culture",
            commonErrors: [
              "Limiting comparisons to convenient pairs.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Play A (medieval morality play): 'justice' is God's judgment at the end of life. Play B (modern courtroom drama): 'justice' is contested, delayed and imperfect.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 1 },
            { label: "b", prompt: "Explain how each era's context shapes justice.", marks: 1 },
            { label: "c", prompt: "Assess whether justice remains a universal theme.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal vs contextual", statement: "The concern persists; its meaning is era-specific." },
            ],
            steps: [
              { part: "a", reasoning: "Shared theme: justice — correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divine judgment vs human/legal contestation — context shapes meaning.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The concern is universal but its nature — certain vs contested — is culturally specific.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on universality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Justice. (b) Divine vs human justice. (c) Universal concern, culturally specific meaning.",
            commonErrors: [
              "Claiming the theme is either fully universal or fully relative without nuance.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'motif' in drama is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main plot event" },
              { id: "b", text: "A recurring element or image within a play or across plays" },
              { id: "c", text: "The stage lighting plan" },
              { id: "d", text: "The playwright's biography" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motif", statement: "A recurring element or image that accumulates meaning." },
            ],
            steps: [
              { reasoning: "Motifs recur and accumulate significance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A recurring element or image within a play or across plays",
            commonErrors: [
              "Confusing motif with theme or plot.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q12",
          difficulty: "core",
          totalMarks: 6,
          stem: "Consider 'the family' in a medieval morality play, a 19th-century realistic drama, and a contemporary play.",
          parts: [
            { label: "a", prompt: "Describe each era's likely treatment of family.", marks: 2 },
            { label: "b", prompt: "Explain what changed in each era to reframe the theme.", marks: 2 },
            { label: "c", prompt: "Evaluate what this evolution reveals about history.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Family evolution", statement: "Family shifts from moral institution to site of repression to chosen bonds." },
            ],
            steps: [
              { part: "a", reasoning: "Medieval: family as moral/social order; 19th c.: repression and hidden secrets; Contemporary: chosen bonds or dysfunction.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All three treatments accurately described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shifts in religion, industrialisation and individualism reframe family meaning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Causal links to era explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evolution records changing anxieties about duty, privacy and autonomy.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluative conclusion on historical significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Institution → repression → chosen bonds. (b) Religious, industrial and individualist shifts. (c) Records changing social values.",
            commonErrors: [
              "Listing treatments without explaining causes.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "When the meaning of a persistent theme shifts across periods, this primarily signals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Larger audiences" },
              { id: "b", text: "Better writing techniques" },
              { id: "c", text: "Cultural and social change" },
              { id: "d", text: "Decline in theatrical quality" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme shift as evidence", statement: "Changing theme treatment mirrors changing values." },
            ],
            steps: [
              { reasoning: "Theme shifts reflect deeper cultural change.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cultural and social change",
            commonErrors: [
              "Attributing theme shifts to craft rather than culture.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A critic claims 'death means the same thing in every culture, so comparing its treatment adds nothing.'",
          parts: [
            { label: "a", prompt: "Identify what the critic gets right.", marks: 2 },
            { label: "b", prompt: "Explain what the critic misses about contextual meaning.", marks: 2 },
            { label: "c", prompt: "Evaluate the critic's claim.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universality vs context", statement: "Universal concern does not guarantee universal treatment or meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Death is a universal concern — the critic is right that the subject persists.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Valid partial point acknowledged.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rites, afterlife beliefs, grief customs and dramatic conventions reframe death's meaning.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual variation explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Claim is half-right: theme is universal but treatment is the richest ground for comparison.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Balanced evaluative judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Death is universal. (b) Meaning is culturally reframed. (c) Claim is half-right — treatment is the comparison.",
            commonErrors: [
              "Accepting or rejecting the claim without nuance.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Context reframes a theme because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each era's anxieties give the subject new meaning" },
              { id: "b", text: "Themes are invented by critics" },
              { id: "c", text: "Context changes the plot events" },
              { id: "d", text: "Older plays are always more complex" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual reframing", statement: "Era's concerns activate new meanings for old themes." },
            ],
            steps: [
              { reasoning: "Anxieties and values of each period reframe theme meaning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Each era's anxieties give the subject new meaning",
            commonErrors: [
              "Thinking context changes events rather than meanings.",
            ],
          },
        },
        {
          id: "theatre-u4-thematic-context-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace the evolution of the theme 'authority' across three periods of drama.",
          parts: [
            { label: "a", prompt: "Describe the treatment in each of three periods.", marks: 3 },
            { label: "b", prompt: "Explain the social or political cause of each shift.", marks: 3 },
            { label: "c", prompt: "Evaluate what the evolution reveals about power.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Authority evolution", statement: "Divine right → political power → institutional control." },
            ],
            steps: [
              { part: "a", reasoning: "E.g. sacred/divine authority, then political authority to be questioned, then institutional or personal autonomy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Three distinct period treatments given.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Treatments are specific and accurate.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Each shift linked to social cause — secularisation, democracy, bureaucracy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Causes plausible and explained.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "All three shifts causally explained.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evolution reveals decentralisation of legitimate power.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluative conclusion on significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Divine → political → institutional. (b) Secularisation, democracy, bureaucracy. (c) Decentralisation of legitimate power.",
            commonErrors: [
              "Describing treatments without causal explanation.",
            ],
          },
        },
      ],
    },
  ],
};
