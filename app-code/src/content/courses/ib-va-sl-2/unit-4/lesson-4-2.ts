import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "va-u4-lesson-4-2",
  code: "4-2",
  title: "Thematic Analysis Across Artists",
  goal: "I CAN analyse how different artists treat the same theme and compare their approaches and intentions.",
  standards: [
    "Comparative",
    "Thematic Analysis",
  ],
  vocabulary: [
    { term: "Theme", definition: "A subject or idea that an artwork explores, e.g. mortality, identity, nature, power." },
    { term: "Motif", definition: "A recurring element or image within an artwork or across an artist's work." },
    { term: "Iconography", definition: "The conventional meanings of symbols and imagery within a culture." },
    { term: "Artistic approach", definition: "The particular way an artist treats a subject — stylistically, technically, conceptually." },
    { term: "Personal symbolism", definition: "Symbols private to an artist that carry meaning for them specifically." },
    { term: "Universal theme", definition: "A subject that transcends cultures and periods, e.g. birth, death, love, war." },
  ],
  concepts: [
    {
      id: "va-u4-thematic-approaches",
      title: "Theme and artistic approach",
      skill: "Analyse how different artists treat the same theme through distinctive formal and conceptual approaches.",
      lesson: {
        sections: [
          {
            heading: "Themes as common ground",
            body: "Certain themes recur across all art: mortality, identity, nature, power, love, war. These universal themes provide common ground for comparison — how does each artist's approach reveal their personality, context and era?",
          },
          {
            heading: "Approach as signature",
            body: "Each artist develops a distinctive approach: the same theme of 'the figure' might be idealised (Renaissance), fragmented (Cubism), distorted (Expressionism) or absent (Minimalism). The approach itself communicates — technique is never neutral.",
          },
          {
            heading: "Theme + context = meaning",
            body: "The same theme means different things in different contexts: 'nature' might be Eden (religious), resource (economic) or sublime (Romantic). Analysing theme requires asking what the theme meant to each artist in their time and place.",
          },
        ],
        keyFormulas: [
          { name: "Thematic analysis", statement: "Theme + approach + context = comparative meaning" },
          { name: "Approach as communication", statement: "How an artist treats a subject is itself a statement" },
        ],
        workedExample: {
          problem: "Compare how two artists treat 'the human figure': one idealises it, one distorts it. What does each approach communicate?",
          solution: "Idealisation (Renaissance) presents the body as perfect, ordered, divine — reflecting confidence in human potential. Distortion (Expressionism) presents the body as psychological, anxious, wounded — reflecting modern alienation. The theme is identical; the approach reveals the era's relationship to humanity.",
        },
      },
      questions: [
        {
          id: "va-u4-thematic-approaches-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'theme' in art is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subject or idea that an artwork explores" },
              { id: "b", text: "The colour palette used" },
              { id: "c", text: "The frame's decoration" },
              { id: "d", text: "The artist's signature" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Theme", statement: "The subject or idea an artwork explores, e.g. mortality or identity." },
            ],
            steps: [
              { reasoning: "A theme is the subject or idea explored, not a formal property.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** A subject or idea that an artwork explores",
            commonErrors: [
              "Confusing theme with motif or style.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two ways an artist's 'approach' to a theme can differ from another artist's.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Approach differences", statement: "Style, technique, composition and conceptual framing can all vary." },
            ],
            steps: [
              { reasoning: "Formal approach: realistic vs abstract, detailed vs minimal, colour vs monochrome.", marks: 1, markCode: "M" },
              { reasoning: "Conceptual approach: celebratory vs critical, personal vs political, literal vs symbolic.", marks: 1, markCode: "M" },
              { reasoning: "Compositional approach: centred vs dispersed, intimate vs monumental scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal, conceptual and compositional choices all shape an artist's approach to a theme.",
            commonErrors: [
              "Describing only subject matter, not the approach taken to it.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the same theme can produce very different artworks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme variability", statement: "Artist personality, era, culture and intention shape treatment of universal themes." },
            ],
            steps: [
              { reasoning: "Artists bring different personal concerns and psychological states to shared themes.", marks: 1, markCode: "M" },
              { reasoning: "Historical context — war, religion, technology — reframes what a theme means.", marks: 1, markCode: "M" },
              { reasoning: "Different intentions — to honour, criticise, mourn or celebrate — produce different treatments.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme is the question; approach is the artist's answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Personality, context and intention produce different treatments of shared themes.",
            commonErrors: [
              "Assuming a theme dictates a single correct treatment.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Thematic comparison exercise",
            text: "Work A: A luminous landscape at sunset, warm golds and pinks, smooth blended brushwork, a lone tree silhouetted against the sky. Work B: A stormy seascape, dark greys and greens, violent brushstrokes, waves towering over a tiny boat.",
          },
          stem: "Compare how two described artworks treat the same theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Describe each artist's approach to the theme.", marks: 2 },
            { label: "c", prompt: "Evaluate which approach is more effective for its apparent purpose.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic comparison", statement: "Shared theme (nature's power) treated through contrasting moods and techniques." },
            ],
            steps: [
              { part: "a", reasoning: "Both depict nature's power or drama — shared theme of nature's force.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A: serene, luminous, contemplative — smooth technique, warm palette. Work B: violent, overwhelming — aggressive brushwork, cold palette.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both approaches described accurately.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each serves different emotional purposes — serenity vs terror; effectiveness depends on intended effect.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement linked to purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nature's power. (b) Serenity vs violence. (c) Each effective for its emotional aim.",
            commonErrors: [
              "Comparing subject only, not approach.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'motif' differs from a 'theme' in that a motif is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A universal idea explored by many artists" },
              { id: "b", text: "A recurring element or image within an artwork or across an artist's work" },
              { id: "c", text: "An evaluation criterion for art" },
              { id: "d", text: "A historical period's style" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Motif", statement: "A recurring element or image within an artwork or across an artist's work." },
            ],
            steps: [
              { reasoning: "A motif is a recurring visual element, not the broader idea itself.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A recurring element or image within an artwork or across an artist's work",
            commonErrors: [
              "Confusing motif (recurring element) with theme (idea explored).",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An artist's 'approach' to a theme is best understood as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Their distinctive way of treating that subject formally and conceptually" },
              { id: "b", text: "The type of frame they use" },
              { id: "c", text: "The subject they choose to depict" },
              { id: "d", text: "The price their work commands" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Artistic approach", statement: "The particular way an artist treats a subject stylistically, technically and conceptually." },
            ],
            steps: [
              { reasoning: "Approach describes how a subject is treated, not merely which subject is chosen.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Their distinctive way of treating that subject formally and conceptually",
            commonErrors: [
              "Confusing the subject of a work with the approach taken to it.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "If two artists both treat 'the human figure' but one idealises it and one distorts it, the difference reveals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The relative quality of their paints" },
              { id: "b", text: "That one artist has made a technical error" },
              { id: "c", text: "Different conceptual aims and era-specific attitudes to the body" },
              { id: "d", text: "Random variation with no meaning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach as communication", statement: "How a subject is treated communicates the artist's conceptual position." },
            ],
            steps: [
              { reasoning: "Idealisation and distortion express different attitudes to humanity shaped by era and intent.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Different conceptual aims and era-specific attitudes to the body",
            commonErrors: [
              "Treating stylistic difference as mere error or accident.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Personal symbolism' in art refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Symbols that are meaningful to everyone equally" },
              { id: "b", text: "Official national emblems" },
              { id: "c", text: "Symbols private to an artist that carry meaning for them specifically" },
              { id: "d", text: "Religious icons only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personal symbolism", statement: "Symbols private to an artist that carry meaning for them specifically." },
            ],
            steps: [
              { reasoning: "Personal symbolism is private to the artist and requires biographical context to decode.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Symbols private to an artist that carry meaning for them specifically",
            commonErrors: [
              "Confusing personal symbolism with conventional iconography.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how an artist's technique can itself be a statement about their theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach as communication", statement: "Technique is never neutral; it carries meaning about the subject." },
            ],
            steps: [
              { reasoning: "No technique is neutral — every mark-making choice communicates something.", marks: 1, markCode: "M" },
              { reasoning: "For example, violent gestural strokes can express anxiety; smooth blending can express serenity.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: technique becomes part of the artwork's statement about its theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Technique communicates: how a subject is made reinforces or complicates what it means.",
            commonErrors: [
              "Treating technique as purely mechanical rather than expressive.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how the theme of 'nature' might be treated as Eden, as resource and as sublime, and what each framing implies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Theme + context", statement: "The same theme acquires different meanings in different cultural and historical frames." },
            ],
            steps: [
              { reasoning: "Eden: nature as divinely ordered paradise, associated with religious belief.", marks: 1, markCode: "M" },
              { reasoning: "Resource: nature as land to cultivate or exploit, associated with economic life.", marks: 1, markCode: "M" },
              { reasoning: "Sublime: nature as overwhelming force inspiring awe or terror, associated with Romantic thought.", marks: 1, markCode: "M" },
              { reasoning: "A coherent comparison shows the same subject reframed by different contexts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nature as Eden, resource and sublime shows how context reframes a universal theme.",
            commonErrors: [
              "Listing framings without explaining what each implies about the theme.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the idea that 'theme is the question; approach is the artist's answer.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme and approach", statement: "Shared themes pose common questions that artists answer in distinctive ways." },
            ],
            steps: [
              { reasoning: "Themes like mortality or identity are questions shared across all art.", marks: 1, markCode: "M" },
              { reasoning: "Each artist's approach — their formal and conceptual choices — constitutes their answer.", marks: 1, markCode: "M" },
              { reasoning: "For example, 'the body' is answered through idealisation, distortion or absence.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: comparing approaches compares different answers to shared questions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Themes are shared questions; approaches are individual, context-bound answers.",
            commonErrors: [
              "Treating theme and approach as the same thing.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare how two works on 'the city' might differ: a Romantic dusk skyline painting and a gritty documentary photograph of a night market.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic comparison", statement: "Shared theme treated through contrasting moods, media and intentions." },
            ],
            steps: [
              { reasoning: "Shared theme: both depict the city as a subject.", marks: 1, markCode: "M" },
              { reasoning: "Approach differs: luminous, idealised, detached versus gritty, immediate, immersive.", marks: 1, markCode: "M" },
              { reasoning: "Intentions differ: Romantic contemplation versus documentary witness or social critique.", marks: 1, markCode: "R" },
              { reasoning: "A coherent comparison explains how approach reveals different relationships to the city.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both treat 'the city' but with opposite moods — idealised skyline versus gritty street-level reality.",
            commonErrors: [
              "Comparing only that both show buildings, not how they treat the theme.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'universal theme' is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A subject invented by art critics" },
              { id: "b", text: "A theme that is always religious" },
              { id: "c", text: "A subject that transcends cultures and periods, such as mortality or love" },
              { id: "d", text: "A subject that appears in only one culture" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Universal theme", statement: "A subject that transcends cultures and periods, e.g. birth, death, love, war." },
            ],
            steps: [
              { reasoning: "Universal themes recur across cultures and periods.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** A subject that transcends cultures and periods, such as mortality or love",
            commonErrors: [
              "Confusing universal themes with culturally specific subjects.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the clearest example of 'artistic approach' shaping meaning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing oil rather than acrylic paint" },
              { id: "b", text: "Signing the painting in the corner" },
              { id: "c", text: "Hanging the work in a frame" },
              { id: "d", text: "Fragmenting the human figure to express psychological unease" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Approach as communication", statement: "Formal treatment of a subject carries conceptual meaning." },
            ],
            steps: [
              { reasoning: "Fragmenting the figure is a deliberate approach that expresses psychological state.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Fragmenting the human figure to express psychological unease",
            commonErrors: [
              "Confusing neutral practical choices with meaning-bearing approach.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two universal themes and explain one way different cultures might treat them differently.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal themes", statement: "Themes like mortality, identity and war recur across cultures with distinct treatments." },
            ],
            steps: [
              { reasoning: "Two valid universal themes named, e.g. mortality and identity.", marks: 1, markCode: "M" },
              { reasoning: "A plausible cultural difference in treatment described for one theme.", marks: 1, markCode: "M" },
              { reasoning: "The difference is explained in terms of culture, context or purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Universal themes recur; cultures treat them through their own values and conventions.",
            commonErrors: [
              "Naming themes without explaining cultural differences.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Thematic comparison exercise",
            text: "Work A: A classical marble sculpture of a standing nude, idealised proportions, calm contrapposto pose. Work B: A large-scale photograph of a contorted figure covered in paint, confrontational and raw.",
          },
          stem: "Compare how two artworks treat the same theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Describe each artist's approach to that theme.", marks: 2 },
            { label: "c", prompt: "State whether one approach is 'better' without qualification.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic comparison", statement: "The human figure is a shared theme treated through idealisation versus confrontation." },
            ],
            steps: [
              { part: "a", reasoning: "Both depict the human figure/body as subject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A idealises and dignifies; Work B confronts and exposes vulnerability.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both approaches described accurately.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No unqualified judgement is possible — each approach serves different aims.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) The human figure. (b) Idealisation vs confrontation. (c) Neither simply better.",
            commonErrors: [
              "Ranking approaches without specifying criteria.",
            ],
          },
        },
        {
          id: "va-u4-thematic-approaches-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Thematic comparison exercise",
            text: "Work A: A 19th-century battle painting showing cavalry charging, heroic scale, warm light, celebrating martial glory. Work B: A contemporary installation of hundreds of empty helmets arranged on the floor, accompanied by a recording of silence.",
          },
          stem: "Analyse how two artists treat the theme of 'war' differently.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Describe each artist's approach and likely intention.", marks: 2 },
            { label: "c", prompt: "Evaluate which approach communicates its message more powerfully.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic analysis", statement: "Same theme; heroism versus absence reveals era-specific attitudes to war." },
            ],
            steps: [
              { part: "a", reasoning: "Both address war and its human cost.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A celebrates heroism through dynamic composition; Work B mourns through absence and silence.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Approaches and intentions described accurately.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Power depends on intended effect — celebration versus mourning; the empty helmets arguably communicate loss more viscerally.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement linked to communicative purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) War. (b) Heroic celebration vs elegiac absence. (c) Each powerful for its intention.",
            commonErrors: [
              "Comparing spectacle rather than communicative approach.",
            ],
          },
        },
      ],
    },
    {
      id: "va-u4-thematic-context",
      title: "Theme in context",
      skill: "Analyse how cultural and historical context shapes the meaning of a theme across different artists.",
      lesson: {
        sections: [
          {
            heading: "Theme meaning is contextual",
            body: "'Nature' meant different things to a Romantic painter (sublime, spiritual), an agricultural society (resource, survival) and a contemporary environmentalist (fragile, threatened). 'The human body' meant divine creation to a Renaissance artist, psychological terrain to an Expressionist, data to a contemporary photographer.",
          },
          {
            heading: "Tracing theme evolution",
            body: "Themes evolve with culture: 'war' shifted from heroic epic to traumatic witness; 'the female figure' from idealised muse to agent of her own representation. Tracing this evolution reveals changing values and power structures.",
          },
          {
            heading: "Comparing across time and culture",
            body: "The richest thematic comparisons cross both time and culture: how does a Japanese print of Mount Fuji, a Romantic painting of the Alps and a satellite image of Everest each construct 'the mountain'? Each encodes a different relationship between humanity and nature.",
          },
        ],
        keyFormulas: [
          { name: "Contextual theme", statement: "Theme meaning = universal concern + specific cultural/historical framing" },
          { name: "Theme evolution", statement: "Themes shift meaning as values, technology and power change" },
        ],
        workedExample: {
          problem: "How might 'the portrait' mean different things in a Renaissance court, a contemporary photography series and a social media profile picture?",
          solution: "Renaissance: status, lineage, divine order. Contemporary photography: identity, performance, authenticity. Social media: curated self-presentation for an audience. The theme persists but its meaning is reframed by each era's concerns about identity and representation.",
        },
      },
      questions: [
        {
          id: "va-u4-thematic-context-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The meaning of an artistic theme is most strongly shaped by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The cultural and historical context of its creation" },
              { id: "b", text: "The artist's favourite colour" },
              { id: "c", text: "The price of the materials" },
              { id: "d", text: "The size of the canvas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Thematic meaning", statement: "Cultural and historical context determines what a theme signifies." },
            ],
            steps: [
              { reasoning: "Theme meaning is activated by the cultural and historical context of creation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The cultural and historical context of its creation",
            commonErrors: [
              "Treating theme meaning as fixed across all contexts.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how the theme of 'war' might be treated differently across three historical periods.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "War across periods", statement: "Heroic epic, patriotic propaganda and traumatic witness represent evolving attitudes." },
            ],
            steps: [
              { reasoning: "Earlier periods: war as heroic, glorious, divinely sanctioned.", marks: 1, markCode: "M" },
              { reasoning: "19th–20th centuries: war as patriotic duty or national sacrifice.", marks: 1, markCode: "M" },
              { reasoning: "Contemporary: war as trauma, loss, moral ambiguity — witnessed rather than celebrated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "War shifts from heroic epic to patriotic duty to traumatic witness across periods.",
            commonErrors: [
              "Describing war imagery without addressing changing attitudes.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why tracing a theme's evolution across time reveals cultural change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme evolution", statement: "Changing treatment of persistent themes mirrors changing values and power structures." },
            ],
            steps: [
              { reasoning: "Persistent themes (war, nature, body, identity) appear in every period.", marks: 1, markCode: "M" },
              { reasoning: "Their changing treatment reflects shifts in values, technology and power.", marks: 1, markCode: "M" },
              { reasoning: "The evolution is a historical record — art as evidence of cultural change.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: theme evolution is a window into history.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Theme evolution records changing values and power structures across history.",
            commonErrors: [
              "Describing theme changes without linking them to cultural causes.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Contextual theme analysis",
            text: "Work A (medieval manuscript illumination): A king receiving tribute from kneeling subjects, gold leaf background, hierarchical scale — rulers larger than subjects. Work B (contemporary protest poster): A crowd of diverse faces, bold text demanding equality, flat graphic style.",
          },
          stem: "Analyse how context shapes the meaning of a shared theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme across two described works.", marks: 2 },
            { label: "b", prompt: "Explain how each work's context shapes its treatment.", marks: 2 },
            { label: "c", prompt: "Evaluate whether the theme retains any universal meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "Power and hierarchy are universal themes reframed by era and purpose." },
            ],
            steps: [
              { part: "a", reasoning: "Both address power and social hierarchy — shared theme.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A: divine right, hierarchy naturalised through scale and gold. Work B: power questioned, equality demanded through collective imagery.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual shaping explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Universal concern (power relations) persists but its meaning — acceptance vs challenge — is era-specific.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on universality vs specificity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Power and hierarchy. (b) Divine order vs egalitarian challenge. (c) Universal concern, culturally specific meaning.",
            commonErrors: [
              "Ignoring context or treating theme meaning as universal.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The meaning of an artistic theme depends most on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The brand of paint used" },
              { id: "b", text: "The size of the canvas" },
              { id: "c", text: "The cultural and historical framework of the work" },
              { id: "d", text: "The colour of the frame" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual theme", statement: "Cultural and historical context determines what a theme signifies." },
            ],
            steps: [
              { reasoning: "Theme meaning is activated by the cultural and historical framework.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The cultural and historical framework of the work",
            commonErrors: [
              "Treating theme meaning as fixed across all contexts.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The theme of 'the female figure' has evolved historically mainly because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing gender roles and power structures have reframed its representation" },
              { id: "b", text: "Painters eventually ran out of other subjects" },
              { id: "c", text: "Women have physically changed over time" },
              { id: "d", text: "Canvases have become larger" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Theme evolution", statement: "Changing values and power relations reshape how themes are represented." },
            ],
            steps: [
              { reasoning: "Gender roles and power structures drive changes in female representation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Changing gender roles and power structures have reframed its representation",
            commonErrors: [
              "Ignoring the social causes behind representational change.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A Japanese print of Mount Fuji, a Romantic painting of the Alps and a satellite image of Everest each construct 'the mountain' differently because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The mountains themselves are physically different" },
              { id: "b", text: "Artists disagree about which colours to use" },
              { id: "c", text: "Only one of them is accurate" },
              { id: "d", text: "Each encodes a different relationship between humanity and nature" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "Each representation encodes a culturally specific relationship to the subject." },
            ],
            steps: [
              { reasoning: "Different media and contexts produce different constructions of 'the mountain'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Each encodes a different relationship between humanity and nature",
            commonErrors: [
              "Assuming one representation is simply more accurate than others.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tracing a theme's evolution across time is valuable because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proves that older art is always worse" },
              { id: "b", text: "Measures historical art market prices" },
              { id: "c", text: "Records changing values, technology and power structures" },
              { id: "d", text: "Simply lists artists alphabetically" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme evolution", statement: "Changing treatments of persistent themes mirror cultural change." },
            ],
            steps: [
              { reasoning: "Theme evolution functions as a historical record of values and power.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Records changing values, technology and power structures",
            commonErrors: [
              "Treating theme evolution as mere cataloguing rather than evidence of change.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how a universal concern can carry culturally specific meaning, using one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Universal vs specific meaning", statement: "Shared concerns are reframed by each culture's values and beliefs." },
            ],
            steps: [
              { reasoning: "A universal concern such as death or identity appears in all cultures.", marks: 1, markCode: "M" },
              { reasoning: "The culture's beliefs determine what that concern signifies — e.g. ancestor veneration versus secular remembrance.", marks: 1, markCode: "M" },
              { reasoning: "A convincing example demonstrates the cultural reframing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Universal concerns persist, but culture determines their specific meaning.",
            commonErrors: [
              "Describing the concern without explaining the cultural reframing.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how the theme of 'the portrait' might differ between a Renaissance court, a contemporary photography series and a social media profile picture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Thematic evolution", statement: "The portrait shifts from status display to identity performance across eras." },
            ],
            steps: [
              { reasoning: "Renaissance: portrait as status, lineage and divinely ordered identity for an elite audience.", marks: 1, markCode: "M" },
              { reasoning: "Contemporary photography: portrait as exploration of identity, performance and authenticity.", marks: 1, markCode: "M" },
              { reasoning: "Social media: portrait as curated self-presentation for a mass audience.", marks: 1, markCode: "M" },
              { reasoning: "A coherent comparison traces how changing concerns about identity reframe the theme.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The portrait evolves from status display to identity performance to curated self-presentation.",
            commonErrors: [
              "Describing the three forms without analysing the shift in meaning.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a theme appearing in every period is not necessarily a 'universal' theme in meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Persistence vs universality", statement: "Persistence of subject does not guarantee persistence of meaning." },
            ],
            steps: [
              { reasoning: "Themes like war, the body or identity recur in every period and culture.", marks: 1, markCode: "M" },
              { reasoning: "Yet their meaning is reframed by each era's values, technology and power structures.", marks: 1, markCode: "M" },
              { reasoning: "For example, war meant heroic glory in some periods and traumatic witness in others.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: universality of subject does not imply universality of significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A persistent subject is universal, but its meaning remains culturally and historically specific.",
            commonErrors: [
              "Assuming a recurring theme has a fixed meaning.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare how 'death' might be treated in a medieval vanitas painting and a contemporary memorial installation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "The same concern of mortality is framed by religious doctrine versus contemporary public mourning." },
            ],
            steps: [
              { reasoning: "Shared theme: mortality and the inevitability of death.", marks: 1, markCode: "M" },
              { reasoning: "Vanitas: death as moral warning — skulls, extinguished candles, religious meditation on the afterlife.", marks: 1, markCode: "M" },
              { reasoning: "Memorial installation: death as collective grief or political loss, often participatory and public.", marks: 1, markCode: "M" },
              { reasoning: "A coherent comparison explains how each context shapes the treatment of mortality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vanitas moralises death; the installation mourns it — same concern, different cultural frames.",
            commonErrors: [
              "Describing imagery without addressing cultural framing.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "'Cultural context' in thematic analysis includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the dominant religion of the period" },
              { id: "b", text: "Beliefs, values, rituals and social structures that shape artistic production" },
              { id: "c", text: "Only the artist's nationality" },
              { id: "d", text: "Only the political system in power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural context", statement: "The beliefs, values, rituals and social structures that shape artistic production." },
            ],
            steps: [
              { reasoning: "Cultural context encompasses beliefs, values, rituals and social structures.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Beliefs, values, rituals and social structures that shape artistic production",
            commonErrors: [
              "Reducing cultural context to a single factor like religion or politics.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which best explains why themes evolve over time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shifting values, power relations and technologies change what a theme signifies" },
              { id: "b", text: "Museums dictate which themes artists must use" },
              { id: "c", text: "Themes are invented fresh each century" },
              { id: "d", text: "Artists simply copy one another" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Theme evolution", statement: "Values, power and technology reframe persistent themes." },
            ],
            steps: [
              { reasoning: "Evolution of themes is driven by changing values, power and technology.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shifting values, power relations and technologies change what a theme signifies",
            commonErrors: [
              "Explaining evolution without reference to cultural causes.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "State two ways that cultural or historical context can change the meaning of an artistic theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Contextual theme", statement: "Beliefs, power structures and technology reframe theme meaning." },
            ],
            steps: [
              { reasoning: "First valid way named, e.g. changing religious or philosophical beliefs.", marks: 1, markCode: "M" },
              { reasoning: "Second valid way named, e.g. shifting power structures or new technologies.", marks: 1, markCode: "M" },
              { reasoning: "Each stated as a mechanism that alters theme meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Beliefs, power relations and technology each reframe how a theme signifies.",
            commonErrors: [
              "Listing contexts without explaining how they change meaning.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q16",
          difficulty: "core",
          totalMarks: 5,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Contextual theme analysis",
            text: "Work A (14th century): A religious icon of the Madonna and Child, gold background, rigid frontality, conventionalised features. Work B (2020): A contemporary photographic portrait of a mother and child in a sparse modern flat, natural light, candid pose.",
          },
          stem: "Analyse how context shapes the meaning of a shared theme.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Explain how each work's context shapes its treatment.", marks: 2 },
            { label: "c", prompt: "State whether the theme's meaning has fundamentally changed.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "Motherhood persists as a theme but is framed by devotion versus everyday intimacy." },
            ],
            steps: [
              { part: "a", reasoning: "Both depict the mother-and-child relationship.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A frames motherhood through religious devotion and heavenly symbolism; Work B through secular domestic intimacy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual shaping explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The theme persists but its meaning shifts from sacred to secular.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Motherhood. (b) Sacred devotion vs domestic intimacy. (c) Meaning shifts but theme persists.",
            commonErrors: [
              "Treating the two treatments as unrelated rather than contextually reframed.",
            ],
          },
        },
        {
          id: "va-u4-thematic-context-q17",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Two described artworks",
            author: "Written for Akademik Space",
            source: "Contextual theme analysis",
            text: "Work A: A 19th-century Romantic painting of a mist-shrouded alpine peak, dwarfed by a tiny human figure, expressing the sublime. Work B: A contemporary satellite photograph of a Himalayan glacier, annotated with data labels and climate statistics.",
          },
          stem: "Analyse how different contexts construct the theme of 'the mountain'.",
          parts: [
            { label: "a", prompt: "Identify the shared theme.", marks: 2 },
            { label: "b", prompt: "Explain how each work's context shapes its construction of the theme.", marks: 2 },
            { label: "c", prompt: "Evaluate what each construction reveals about humanity's relationship to nature.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Contextual theme", statement: "The same natural subject encodes different human-nature relationships across eras." },
            ],
            steps: [
              { part: "a", reasoning: "Both address the mountain as a subject.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Theme correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Work A constructs the mountain as sublime, overwhelming nature; Work B constructs it as measurable, threatened data.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contextual construction explained convincingly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Work A implies humanity's smallness before nature; Work B implies humanity's responsibility for it — a shift from awe to stewardship.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned evaluation linking construction to relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The mountain. (b) Sublime nature vs data object. (c) Awe before nature vs responsibility for it.",
            commonErrors: [
              "Comparing accuracy rather than constructed meaning.",
            ],
          },
        },
      ],
    },
  ],
};
