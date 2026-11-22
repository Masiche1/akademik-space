import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "music-u2-lesson-2-1",
  code: "2-1",
  title: "Baroque, Classical and Romantic Periods",
  goal: "I CAN identify the stylistic features and key composers of the Baroque, Classical and Romantic periods.",
  standards: ["Contextual Studies", "Music History"],
  vocabulary: [
    {
      term: "Baroque",
      definition:
        "Musical period c. 1600–1750 characterised by ornamentation, basso continuo and dramatic contrast.",
    },
    {
      term: "Classical",
      definition:
        "Musical period c. 1750–1820 characterised by clarity, balance and formal structures like sonata form.",
    },
    {
      term: "Romantic",
      definition:
        "Musical period c. 1820–1900 characterised by emotional expression, larger orchestras and programme music.",
    },
    {
      term: "Basso continuo",
      definition:
        "Baroque practice of continuous bass line with improvised harmony above it.",
    },
    {
      term: "Sonata form",
      definition:
        "Classical structure: exposition, development, recapitulation — used for first movements.",
    },
    {
      term: "Programme music",
      definition:
        "Instrumental music that tells a story or depicts scenes, common in the Romantic period.",
    },
  ],
  concepts: [
    {
      id: "music-u2-baroque-classical",
      title: "Baroque and Classical styles",
      skill:
        "Identify characteristic features and key composers of Baroque and Classical music.",
      lesson: {
        sections: [
          {
            heading: "Baroque (c. 1600–1750)",
            body: "Baroque music is dramatic and ornate: **basso continuo** provides harmonic foundation; composers like Bach, Handel, Vivaldi and Monteverdi wrote contrapuntal works full of ornamentation and emotional contrast. Opera was born in this period. The sound is rich, complex and ceremonial.",
          },
          {
            heading: "Classical (c. 1750–1820)",
            body: "Classical music values clarity, balance and proportion: **sonata form** structures first movements; homophonic texture (melody over accompaniment) replaces complex counterpoint; composers like Haydn, Mozart and early Beethoven wrote elegant, balanced works. The piano sonata and string quartet flourished.",
          },
          {
            heading: "From Baroque to Classical",
            body: "The shift reflects changing aesthetics: Baroque complexity gave way to Classical clarity. This wasn't progress or decline — it was a change in values. Baroque audiences wanted ornament and drama; Classical audiences wanted elegance and intellectual order.",
          },
        ],
        keyFormulas: [
          {
            name: "Baroque features",
            statement:
              "Basso continuo, ornamentation, counterpoint, opera birth",
          },
          {
            name: "Classical features",
            statement: "Sonata form, homophony, clarity, balance, Haydn/Mozart",
          },
        ],
        workedExample: {
          problem:
            "A piece has a clear melody over simple accompaniment, balanced phrases and predictable structure. Which period does it suggest?",
          solution:
            "Classical — the homophonic texture (melody over accompaniment), balanced phrases and formal clarity are hallmarks of the Classical period. Baroque would have more counterpoint and ornamentation; Romantic would have more emotional volatility and programme elements.",
        },
      },
      questions: [
        {
          id: "music-u2-baroque-classical-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Basso continuo was a defining feature of which musical period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impressionist" },
              { id: "b", text: "Baroque" },
              { id: "c", text: "Classical" },
              { id: "d", text: "Romantic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Basso continuo",
                statement:
                  "A Baroque practice of continuous bass with improvised harmony.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Basso continuo was the harmonic foundation of Baroque music.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Baroque",
            commonErrors: [
              "Confusing Baroque continuo with Classical homophony.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two characteristic features of Classical period music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Classical features",
                statement:
                  "Sonata form, homophony, clarity and balanced structure.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sonata form structures first movements — exposition, development, recapitulation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Homophonic texture — clear melody over accompaniment — replaces complex counterpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Values clarity, balance and proportion in phrasing and harmony.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Sonata form, homophony and balanced clarity define Classical music.",
            commonErrors: [
              "Describing Baroque ornamentation or Romantic emotionalism as Classical.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why opera emerged during the Baroque period.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Opera origins",
                statement:
                  "Baroque dramatic music, court culture and monody created conditions for opera.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Baroque composers developed monody — solo voice with accompaniment — enabling dramatic vocal expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Court and church patronage supported lavish spectacle combining music, drama and staging.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Florentine Camerata's experiments revived Greek drama ideals, leading to opera.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: opera emerged from converging musical and cultural developments.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monody, patronage and humanist drama ideals converged to create opera in the Baroque period.",
            commonErrors: [
              "Treating opera's emergence as accidental rather than culturally motivated.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare Baroque and Classical musical styles.",
          parts: [
            {
              label: "a",
              prompt: "Identify one similarity between the periods.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify one key difference and explain its cause.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether the shift represents 'progress'.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Period comparison",
                statement:
                  "Baroque complexity vs Classical clarity reflects changing aesthetic values.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Both use tonal harmony, functional tonality and instrumental/vocal forces — shared foundations.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Similarity correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Baroque: counterpoint, ornamentation, continuo; Classical: homophony, sonata form, clarity — caused by changing aesthetic values.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Difference explained with historical cause.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "'Progress' is questionable — different values, not improvement; each suited its audience.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned judgement avoiding progress narrative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shared tonal foundations. (b) Counterpoint to clarity reflects changing values. (c) 'Progress' is doubtful.",
            commonErrors: [
              "Assuming Classical is simply 'better' than Baroque.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which composer is most closely associated with the Baroque period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Franz Schubert" },
              { id: "b", text: "Johann Sebastian Bach" },
              { id: "c", text: "Ludwig van Beethoven" },
              { id: "d", text: "Claude Debussy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Baroque composers",
                statement:
                  "Bach, Handel, Vivaldi and Monteverdi defined Baroque music.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bach was a central Baroque composer known for contrapuntal mastery.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Johann Sebastian Bach",
            commonErrors: [
              "Confusing Baroque composers with later Classical or Romantic figures.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which structural form typically organised a Classical period first movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Theme and variations" },
              { id: "b", text: "Rondo" },
              { id: "c", text: "Da capo aria" },
              { id: "d", text: "Sonata form" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Sonata form",
                statement:
                  "Exposition, development and recapitulation structure Classical first movements.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sonata form — exposition, development, recapitulation — was the standard Classical first-movement structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Sonata form",
            commonErrors: [
              "Confusing sonata form with rondo or variation structures used in later movements.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which musical texture was most characteristic of Baroque music?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homophony" },
              { id: "b", text: "Monophony" },
              { id: "c", text: "Heterophony" },
              { id: "d", text: "Contrapuntal counterpoint" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Baroque texture",
                statement:
                  "Baroque music favoured interweaving contrapuntal lines supported by continuo.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Baroque composers built textures from independent melodic lines in counterpoint.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Contrapuntal counterpoint",
            commonErrors: [
              "Assuming melody-plus-accompaniment homophony describes Baroque music.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "In homophonic texture, the listener primarily hears:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unpitched percussion only" },
              { id: "b", text: "a clear melody supported by accompaniment" },
              { id: "c", text: "two equally important melodies competing" },
              { id: "d", text: "spoken word over drone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homophony",
                statement:
                  "One prominent melody with subordinate accompanying parts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Homophony places a single melody above supporting chords or bass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A clear melody supported by accompaniment",
            commonErrors: [
              "Confusing homophony with polyphony, where several melodies are equally important.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why did musical aesthetics shift from Baroque ornament and drama toward Classical clarity and balance?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because aesthetic values changed toward proportion, order and intellectual clarity",
              },
              {
                id: "b",
                text: "Because audiences demanded simpler music for dancing only",
              },
              {
                id: "c",
                text: "Because orchestras became too small to perform complex music",
              },
              {
                id: "d",
                text: "Because musical notation was first invented in the Classical period",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Aesthetic change",
                statement:
                  "Period styles reflect changing values, not simple progress or decline.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The shift reflects changed aesthetic values — Enlightenment ideals of clarity, proportion and rational order — not a technical limitation.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Aesthetic values changed toward proportion, order and intellectual clarity",
            commonErrors: [
              "Explaining the shift as technological progress rather than a change in values.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The basso continuo in Baroque music was typically realised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "a keyboard or continuo instrument playing chords above a bass line",
              },
              { id: "b", text: "a percussion ensemble" },
              { id: "c", text: "a choir singing without accompaniment" },
              { id: "d", text: "a single unaccompanied violin" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Basso continuo",
                statement:
                  "A continuous bass with improvised or realised harmony above it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Continuo instruments such as harpsichord or organ filled in chords above the written bass.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** A keyboard or continuo instrument playing chords above a bass line",
            commonErrors: [
              "Thinking basso continuo was a single melodic line rather than a harmonic foundation.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Identify two Baroque composers and name one characteristic feature of Baroque music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Baroque identity",
                statement:
                  "Bach, Handel, Vivaldi and Monteverdi; features include basso continuo and ornamentation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of Bach, Handel, Vivaldi, Monteverdi correctly named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second composer correctly named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One valid feature identified, such as basso continuo, ornamentation, counterpoint or opera.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Two Baroque composers plus one feature such as basso continuo or ornamentation.",
            commonErrors: [
              "Naming Classical or Romantic composers as Baroque examples.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the three main sections of sonata form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Sonata form",
                statement:
                  "Exposition presents themes, development explores them, recapitulation restates them.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exposition presents the main themes, typically in the tonic and dominant keys.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Development fragments and explores the thematic material through modulation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Recapitulation restates the themes, usually resolving in the tonic key.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The three sections together create a narrative of statement, conflict and resolution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exposition, development and recapitulation form the sonata-form arc.",
            commonErrors: [
              "Confusing sonata form with theme-and-variation or rondo structure.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how the role of the keyboard changed from the Baroque to the Classical period.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Keyboard evolution",
                statement:
                  "Continuo instrument in Baroque gave way to the piano sonata in Classical.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In Baroque music the keyboard (harpsichord or organ) realised the basso continuo — a supporting harmonic role.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The harpsichord's plucked strings limited dynamic expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The fortepiano's hammer action allowed dynamic variation and expressive nuance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the Classical period the piano became a solo instrument in sonatas and concertos.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: the keyboard shifted from accompaniment to a vehicle for individual expression.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The keyboard moved from continuo accompaniment to expressive solo instrument.",
            commonErrors: [
              "Ignoring the technological change from harpsichord to piano.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare Baroque and Classical instrumental music.",
          parts: [
            {
              label: "a",
              prompt: "Compare the typical textures used in each period.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Compare the harmonic and structural approaches.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Compare the intended function and audience experience.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Texture, harmony and function",
                statement:
                  "Baroque counterpoint and continuo versus Classical homophony and sonata form.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Baroque favoured contrapuntal textures over basso continuo; Classical favoured homophony — melody over accompaniment.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Texture comparison stated accurately for both periods.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Baroque harmony was driven by the continuo and imitative counterpoint; Classical harmony supported clear tonal functions within sonata form.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Harmonic and structural comparison accurately stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Baroque music served court and church ceremony with drama; Classical music suited salon and concert audiences valuing intellectual order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Functional comparison convincingly drawn.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Counterpoint vs homophony. (b) Continuo-driven harmony vs tonal sonata structure. (c) Ceremonial drama vs balanced concert music.",
            commonErrors: [
              "Describing only one period in each part without comparison.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Discuss how changing social and intellectual conditions shaped Classical musical style.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enlightenment and Classicism",
                statement:
                  "Reason, proportion and public concert culture shaped Classical aesthetics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Enlightenment ideals valued reason, proportion and clarity — mirrored in balanced phrasing and predictable harmony.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning:
                  "The rise of a wealthy middle class created demand for music in public concerts and salons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Patronage shifted from aristocratic courts to publishers and concert organisers, affecting genre choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The piano sonata and string quartet flourished as domestic and chamber genres for educated amateurs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Classical formality replaced Baroque improvisation and ornament with notated, repeatable structures.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Social and intellectual causes are linked convincingly to specific musical features.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Sonata form's balance reflects an ordered, rational worldview.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Overall judgement: Classical style is inseparable from its social and intellectual context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Enlightenment values and a new concert culture produced balanced, clear, formally organised Classical music.",
            commonErrors: [
              "Listing features without connecting them to social or intellectual causes.",
            ],
          },
        },
        {
          id: "music-u2-baroque-classical-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim that Classical music is simply Baroque music made simpler.",
          parts: [
            {
              label: "a",
              prompt: "Identify two musical differences between the periods.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Assess whether 'simpler' accurately describes the change.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give your overall judgement on the claim.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Change vs simplification",
                statement:
                  "Different values, not reduced complexity, define period change.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Two valid differences identified, e.g. counterpoint to homophony, continuo to piano sonata, ornament to clarity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Differences stated accurately for both periods.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "'Simpler' is misleading — Classical harmony and form are complex in different ways; the change is one of values, not reduction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Assessment of 'simpler' shows critical understanding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: the claim fails because Classical music reallocated complexity rather than removing it.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Reasoned, balanced conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Texture and instrumental role differ. (b) 'Simpler' misrepresents a change in values. (c) The claim is inaccurate.",
            commonErrors: [
              "Agreeing that Classical music is merely simplified Baroque without evaluation.",
            ],
          },
        },
      ],
    },
    {
      id: "music-u2-romantic-popular",
      title: "Romantic and popular traditions",
      skill:
        "Identify the features and cultural contexts of Romantic music, jazz origins and popular music development.",
      lesson: {
        sections: [
          {
            heading: "Romantic period (c. 1820–1900)",
            body: "Romantic music prioritises emotion, individual expression and the sublime: composers like Beethoven (late), Schubert, Chopin, Wagner and Tchaikovsky wrote works with wider emotional range, larger orchestras and programme music that depicts stories or scenes. Nationalism — music expressing cultural identity — flourished.",
          },
          {
            heading: "Jazz origins",
            body: "Jazz emerged in early 20th-century New Orleans from African-American musical traditions: blues, ragtime, work songs and church music blended into improvisation, swing rhythms and call-and-response. Jazz became a global language of freedom and innovation, spawning bebop, fusion and countless hybrids.",
          },
          {
            heading: "Popular music development",
            body: "Popular music grew from folk and vernacular traditions through Tin Pan Alley, rock and roll, soul, hip-hop and digital genres. Each era's popular music reflects its social conditions — rebellion, romance, identity politics, technology. The boundary between 'art' and 'popular' music remains contested.",
          },
        ],
        keyFormulas: [
          {
            name: "Romantic features",
            statement:
              "Emotion, individualism, larger orchestra, programme music, nationalism",
          },
          {
            name: "Jazz origins",
            statement:
              "African-American traditions + blues + ragtime + improvisation",
          },
        ],
        workedExample: {
          problem:
            "A piece features virtuosic piano writing, dramatic dynamic contrasts and a programme depicting a storm. Which period and why?",
          solution:
            "Romantic — the virtuosic display, emotional drama and programme (storm depiction) are hallmarks of Romantic music. Composers like Chopin and Liszt wrote such works to showcase individual virtuosity and express the sublime.",
        },
      },
      questions: [
        {
          id: "music-u2-romantic-popular-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Programme music is most associated with which period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Classical" },
              { id: "b", text: "Baroque" },
              { id: "c", text: "Romantic" },
              { id: "d", text: "Medieval" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Programme music",
                statement:
                  "Instrumental music depicting stories or scenes, common in Romantic era.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Programme music — instrumental works telling stories or depicting scenes — flourished in the Romantic period.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Romantic",
            commonErrors: ["Confusing programme music with opera or art song."],
          },
        },
        {
          id: "music-u2-romantic-popular-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two musical elements that distinguish Romantic music from Classical music.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Romantic vs Classical",
                statement:
                  "Greater emotional range, larger orchestras and programme elements distinguish Romantic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Wider emotional range — extremes of dynamics, tempo and expression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Larger orchestras and richer instrumentation — more colours available.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Programme music and nationalism — music depicting stories or expressing cultural identity.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Greater emotional range, larger orchestras and programme elements distinguish Romantic.",
            commonErrors: [
              "Describing Classical clarity as Romantic emotionalism.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how jazz emerged from African-American musical traditions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz origins",
                statement:
                  "Blues, ragtime, work songs and church music blended into improvisation and swing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "African-American work songs, blues and spirituals provided melodic and rhythmic foundations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ragtime and early jazz in New Orleans added syncopation and improvisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Call-and-response and communal performance practices shaped jazz's social character.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: jazz is a synthesis of diverse traditions in a specific historical moment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Jazz synthesised blues, ragtime, work songs and church traditions in New Orleans.",
            commonErrors: [
              "Treating jazz as purely European or purely African without acknowledging the synthesis.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Compare Romantic art music and early jazz as musical traditions.",
          parts: [
            {
              label: "a",
              prompt: "Identify one similarity between the traditions.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify one key difference and explain its cause.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether jazz should be considered 'serious' music.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Art vs popular",
                statement:
                  "Different traditions have different values; 'serious' is a contested category.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Both value individual expression and emotional depth — shared artistic ambition.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Similarity correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Romantic: composed, notated, orchestral; Jazz: improvised, oral tradition, small ensembles — caused by different cultural contexts and functions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Difference explained with cultural cause.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "'Serious' is a value judgement — jazz demands improvisation skill and harmonic sophistication equal to art music.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement challenging the art/popular hierarchy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Shared expressive ambition. (b) Composed vs improvised reflects different contexts. (c) 'Serious' is a contested category.",
            commonErrors: ["Dismissing jazz as inferior to classical music."],
          },
        },
        {
          id: "music-u2-romantic-popular-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which feature is most characteristic of Romantic period music?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Emotional intensity, virtuosic display and programme elements",
              },
              { id: "b", text: "Strict formal balance and restraint" },
              { id: "c", text: "Exclusive use of sacred chant" },
              { id: "d", text: "Continuous basso continuo throughout" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Romantic features",
                statement:
                  "Emotion, individualism, larger orchestras and programme music define the period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Romantic music prized emotional range, virtuosity and story-telling through music.",
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
              "**(b)** Emotional intensity, virtuosic display and programme elements",
            commonErrors: [
              "Confusing Romantic emotionalism with Classical restraint.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Musical nationalism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "performing exclusively in cathedrals" },
              { id: "b", text: "composing only for royal courts" },
              {
                id: "c",
                text: "using folk elements and cultural symbols to express national identity",
              },
              { id: "d", text: "avoiding melody in favour of noise" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nationalism in music",
                statement:
                  "The use of folk elements or cultural symbols to express national identity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Nationalism in music draws on folk tunes, rhythms and cultural symbols to assert identity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Using folk elements and cultural symbols to express national identity",
            commonErrors: [
              "Equating nationalism with political propaganda rather than cultural expression.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Jazz emerged in which American city in the early 20th century?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "New Orleans" },
              { id: "b", text: "Memphis" },
              { id: "c", text: "Chicago" },
              { id: "d", text: "New York" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Jazz origins",
                statement:
                  "Jazz synthesised African-American traditions in early 20th-century New Orleans.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New Orleans blended blues, ragtime, work songs and church music into early jazz.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** New Orleans",
            commonErrors: [
              "Confusing later jazz centres like Chicago or New York with the genre's origins.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "The development of popular music genres most directly reflects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only technological advances in recording" },
              { id: "b", text: "universal rules unrelated to society" },
              { id: "c", text: "the social conditions of each era" },
              { id: "d", text: "purely commercial motives of record labels" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre and society",
                statement:
                  "Popular genres express the social conditions, identities and tensions of their time.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Each era's popular music mirrors its social conditions — rebellion, identity, technology.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The social conditions of each era",
            commonErrors: [
              "Treating popular music as commercially driven only, without social meaning.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which description best fits 'programme music'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Music printed with instructions for the performers",
              },
              {
                id: "b",
                text: "Instrumental music that depicts scenes, stories or ideas",
              },
              { id: "c", text: "Music written for radio advertising" },
              { id: "d", text: "Music played only outdoors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Programme music",
                statement:
                  "Instrumental music narrating stories or depicting scenes, common in the Romantic period.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Programme music tells a story or paints a scene without words, a hallmark of Romantic instrumental writing.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Instrumental music that depicts scenes, stories or ideas",
            commonErrors: [
              "Confusing programme music with opera librettos or film scores in general.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The boundary between 'art' music and 'popular' music today is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "clearly defined and settled by law" },
              { id: "b", text: "contested and constantly negotiated" },
              { id: "c", text: "fixed by each genre's origins" },
              { id: "d", text: "irrelevant to all listeners" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Art/popular divide",
                statement:
                  "The boundary between art and popular music remains contested.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Categories like 'serious' and 'popular' reflect values, not objective facts, and shift over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Contested and constantly negotiated",
            commonErrors: [
              "Assuming the art/popular distinction is natural and permanent.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two Romantic period composers and one characteristic Romantic musical feature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Romantic identity",
                statement:
                  "Chopin, Wagner, Tchaikovsky and Schubert; features include emotional range and programme music.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Any two of Chopin, Wagner, Tchaikovsky, Schubert, Liszt correctly named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second composer correctly named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "One valid feature identified, such as emotional extremes, larger orchestra, programme music or nationalism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Two Romantic composers plus one feature such as programme music or emotional range.",
            commonErrors: [
              "Naming Classical composers like Mozart as Romantic examples.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe two ways Romantic orchestras differed from Classical orchestras.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Orchestral growth",
                statement:
                  "Romantic orchestras expanded in size and instrumental colour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Larger forces — expanded string sections and more brass and woodwind players.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "New instruments and colours, such as tuba, contrabassoon and expanded percussion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Greater dynamic and textural range exploited for emotional effect.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The larger orchestra served Romantic aims of expressive power and the sublime.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Romantic orchestras were larger and more varied in colour and dynamics than Classical ones.",
            commonErrors: [
              "Describing size without linking it to expressive aims.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain how popular music genres reflect the social conditions of their era.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre as social document",
                statement:
                  "Genres encode the identities, tensions and values of their social moment.",
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
                  "Soul expressed Black pride and the civil rights struggle.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hip-hop expressed urban experience, inequality and social critique.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each genre's sound — backbeat, groove, sampled beats — supports its social message.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Conclusion: genre is a social document; understanding it requires understanding its context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genres mirror social conditions — youth rebellion, civil rights and urban struggle are audible in their sounds.",
            commonErrors: [
              "Listing genres without explaining the social conditions behind them.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Analyse musical nationalism in the Romantic period.",
          parts: [
            { label: "a", prompt: "Define musical nationalism.", marks: 2 },
            {
              label: "b",
              prompt:
                "Describe two musical devices used to express national identity.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate why nationalism flourished in this period.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Romantic nationalism",
                statement:
                  "Folk elements and cultural symbols assert national identity through music.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Nationalism is the use of folk tunes, rhythms, instruments or stories to express a nation's cultural identity.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Definition accurate and concise.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Two valid devices identified, e.g. folk melody quotation, national dance rhythms, use of local instruments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two devices described with musical detail.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Nationalism flourished amid Romantic individualism and rising nation-states seeking cultural distinctiveness.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned evaluation linking the phenomenon to its era.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Folk-based expression of national identity. (b) Folk quotation and dance rhythms. (c) Rose with nation-state identity and Romantic individualism.",
            commonErrors: [
              "Describing nationalism as political propaganda rather than cultural expression.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Trace the development of popular music from Tin Pan Alley to hip-hop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Popular music arc",
                statement:
                  "Popular music evolved through commercial song, rock, soul, funk and hip-hop.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tin Pan Alley professionalised popular song-writing for sheet music and early recordings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rock and roll (1950s) fused rhythm and blues, country and gospel for youth audiences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rock in the 1960s–70s became more experimental and album-oriented, reflecting social tensions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Soul and funk foregrounded Black musical identity and rhythmic groove.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hip-hop (1970s Bronx) combined rapping, DJing, breakdancing and graffiti into a complete culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each stage was enabled by new technology — recordings, radio, turntables, samplers.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Each stage also responded to its social moment — war, civil rights, urban inequality.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: popular music is a continuous dialogue between technology and society.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tin Pan Alley song craft → rock rebellion → soul/funk identity → hip-hop culture: technology and society driving each stage.",
            commonErrors: [
              "Listing genres chronologically without explaining social or technological drivers.",
            ],
          },
        },
        {
          id: "music-u2-romantic-popular-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate whether jazz should be classified as 'popular' or 'art' music.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify two features of jazz that support each classification.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain why the classification is contested.",
              marks: 2,
            },
            { label: "c", prompt: "Give your reasoned judgement.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Jazz classification",
                statement:
                  "Jazz shares features of both popular and art traditions; categories are value-laden.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Popular: improvisation for dancing, oral tradition, mass audiences. Art: complex harmony, bebop virtuosity, concert performance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Features for both classifications identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The art/popular boundary is a value judgement; jazz's status shifted as bebop distanced it from dance music.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Contested status explained convincingly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Reasoned judgement: jazz is best seen as crossing the boundary, demanding both improvisatory skill and harmonic sophistication.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Balanced conclusion acknowledging both traditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Improvisation/dance (popular) vs harmonic complexity (art). (b) Boundary is value-laden. (c) Jazz crosses the divide.",
            commonErrors: [
              "Forcing jazz into one category without acknowledging its hybrid character.",
            ],
          },
        },
      ],
    },
  ],
};
