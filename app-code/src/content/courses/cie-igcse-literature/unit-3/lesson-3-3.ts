import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "cieilit-u3-lesson-3-3",
  code: "3-3",
  title: "Comparative analysis and context",
  goal: "I CAN compare texts and use historical/social context in analysis.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Components 3-4: Comparison and context",
  ],
  vocabulary: [
    {
      term: "Comparative analysis",
      definition: "Analysing similarities and differences between texts.",
    },
    {
      term: "Historical context",
      definition: "Time period when text was written — affects meaning.",
    },
    {
      term: "Social context",
      definition: "Social conditions — class, gender, race, religion.",
    },
    {
      term: "Cultural context",
      definition: "Cultural values, beliefs, traditions of the time.",
    },
    {
      term: "Biographical context",
      definition: "Author's life experiences influencing the text.",
    },
    {
      term: "Intertextuality",
      definition: "References to other texts within a text.",
    },
    {
      term: "Reception",
      definition: "How readers/audiences respond to a text.",
    },
    {
      term: "Canon",
      definition: "Established body of respected literary works.",
    },
    {
      term: "Genre",
      definition: "Category of literature — poetry, prose, drama, novel.",
    },
    {
      term: "Period",
      definition: "Historical era — Victorian, Modernist, etc.",
    },
    {
      term: "Movement",
      definition: "Artistic/intellectual movement — Romanticism, Modernism.",
    },
    {
      term: "Reception history",
      definition: "How a text's interpretation has changed over time.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u3-comparative",
      title: "Comparative analysis",
      skill:
        "Compare texts — find similarities, differences and evaluate significance.",
      lesson: {
        sections: [
          {
            heading: "Approaching comparison",
            body: "**Identify similarities**: shared themes, techniques, structures. **Identify differences**: contrasting approaches, tones, outcomes. **Analyse significance**: why do these similarities/differences matter? **Link to question**: ensure comparison addresses the set question. **Balance**: give equal attention to both texts.",
          },
          {
            heading: "Points of comparison",
            body: "**Themes**: how do texts explore similar/different themes? **Characters**: compare characterisation methods and development. **Structure**: compare narrative structures, forms. **Language**: compare techniques — imagery, tone, word choice. **Context**: compare historical/social backgrounds. **Effect**: compare emotional/intellectual effects on reader.",
          },
          {
            heading: "Comparative essay structure",
            body: "**Introduction**: introduce both texts, state comparison focus. **Body**: alternate between texts OR organise by theme/technique — whichever suits question. **Conclusion**: summarise key similarities/differences, final insight. **Linking**: always connect back to question — 'This shows that…'.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparison points",
            statement:
              "Themes · characters · structure · language · context · effect",
          },
          {
            name: "Essay approach",
            statement: "Similarities + differences + significance",
          },
        ],
        workedExample: {
          problem: "How to compare two poems about death?",
          solution:
            "Identify shared theme (mortality) → compare tone (somber vs celebratory) → analyse techniques → evaluate effect on reader.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-co-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Comparative analysis involves:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Analysing similarities and differences between texts",
              },
              { id: "b", text: "Summarising one text" },
              { id: "c", text: "Describing one text" },
              { id: "d", text: "Quoting only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative analysis",
                statement: "Similarities + differences.",
              },
            ],
            steps: [
              {
                reasoning: "Comparative = similarities + differences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Similarities and differences.",
          },
        },
        {
          id: "cieilit-u3-co-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A comparative essay should give:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Equal attention to both texts" },
              { id: "b", text: "More attention to one" },
              { id: "c", text: "No attention" },
              { id: "d", text: "Only quotes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balance",
                statement: "Equal attention.",
              },
            ],
            steps: [
              { reasoning: "Comparative = balanced.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Equal attention.",
          },
        },
        {
          id: "cieilit-u3-co-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Points of comparison between texts include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Themes, characters, structure, language" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Only characters" },
              { id: "d", text: "Only setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison points",
                statement: "Themes/characters/structure/language.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple comparison points.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Themes, characters, structure, language.",
          },
        },
        {
          id: "cieilit-u3-co-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Historical context refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time period when text was written" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Characters" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Historical context",
                statement: "Time period.",
              },
            ],
            steps: [
              {
                reasoning: "Historical = time period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Time period.",
          },
        },
        {
          id: "cieilit-u3-co-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social context includes:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Class, gender, race, religion" },
              { id: "b", text: "Only class" },
              { id: "c", text: "Only gender" },
              { id: "d", text: "Only race" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social context",
                statement: "Class/gender/race/religion.",
              },
            ],
            steps: [
              {
                reasoning: "Social = multiple factors.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Class, gender, race, religion.",
          },
        },
        {
          id: "cieilit-u3-co-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Cultural context refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cultural values, beliefs, traditions" },
              { id: "b", text: "Historical dates" },
              { id: "c", text: "Plot" },
              { id: "d", text: "Characters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural context",
                statement: "Values/beliefs/traditions.",
              },
            ],
            steps: [
              {
                reasoning: "Cultural = values/beliefs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Values, beliefs, traditions.",
          },
        },
        {
          id: "cieilit-u3-co-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Biographical context refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Author's life experiences" },
              { id: "b", text: "Character's life" },
              { id: "c", text: "Reader's life" },
              { id: "d", text: "Plot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Biographical context",
                statement: "Author's life.",
              },
            ],
            steps: [
              {
                reasoning: "Biographical = author's life.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Author's life experiences.",
          },
        },
        {
          id: "cieilit-u3-co-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Intertextuality refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "References to other texts within a text" },
              { id: "b", text: "Comparing texts" },
              { id: "c", text: "Summarising" },
              { id: "d", text: "Describing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intertextuality",
                statement: "References to other texts.",
              },
            ],
            steps: [
              {
                reasoning: "Intertextuality = references.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) References to other texts.",
          },
        },
        {
          id: "cieilit-u3-co-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'period' in literary history refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Historical era — Victorian, Modernist" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Period",
                statement: "Historical era.",
              },
            ],
            steps: [{ reasoning: "Period = era.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Historical era.",
          },
        },
        {
          id: "cieilit-u3-co-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A literary 'movement' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artistic/intellectual movement — Romanticism" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Movement",
                statement: "Artistic/intellectual movement.",
              },
            ],
            steps: [
              {
                reasoning: "Movement = artistic movement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Artistic/intellectual movement.",
          },
        },
        {
          id: "cieilit-u3-co-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Reception history refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How text's interpretation changed over time" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Characters" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reception history",
                statement: "Interpretation over time.",
              },
            ],
            steps: [
              {
                reasoning: "Reception = interpretation history.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Interpretation over time.",
          },
        },
        {
          id: "cieilit-u3-co-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'genre' in literature refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Category — poetry, prose, drama, novel" },
              { id: "b", text: "Theme" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genre",
                statement: "Category of literature.",
              },
            ],
            steps: [
              { reasoning: "Genre = category.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Category of literature.",
          },
        },
        {
          id: "cieilit-u3-co-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'canon' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Established body of respected works" },
              { id: "b", text: "All literature" },
              { id: "c", text: "Only classics" },
              { id: "d", text: "Only modern" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Canon",
                statement: "Respected works.",
              },
            ],
            steps: [
              {
                reasoning: "Canon = respected works.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Respected works.",
          },
        },
        {
          id: "cieilit-u3-co-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Comparative essays should link back to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The question set" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Only text 1" },
              { id: "d", text: "Only text 2" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question focus",
                statement: "Link to question.",
              },
            ],
            steps: [
              { reasoning: "Link to question.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) The question set.",
          },
        },
        {
          id: "cieilit-u3-co-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "When comparing texts, you should analyse:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Significance of similarities/differences" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Only characters" },
              { id: "d", text: "Only setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Significance",
                statement: "Why similarities/differences matter.",
              },
            ],
            steps: [
              { reasoning: "Analyse significance.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Significance of differences.",
          },
        },
        {
          id: "cieilit-u3-co-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Context should be used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Enrich understanding of text" },
              { id: "b", text: "Replace analysis" },
              { id: "c", text: "Fill space" },
              { id: "d", text: "Impress marker" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context use",
                statement: "Enrich understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Context enriches understanding.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Enrich understanding.",
          },
        },
        {
          id: "cieilit-u3-co-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Comparative analysis is NOT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Just listing similarities" },
              { id: "b", text: "Analysing differences" },
              { id: "c", text: "Evaluating significance" },
              { id: "d", text: "Linking to question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison depth",
                statement: "Not just listing.",
              },
            ],
            steps: [
              {
                reasoning: "Not just listing — analyse.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Just listing similarities.",
          },
        },
        {
          id: "cieilit-u3-co-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'movement' in literature refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shared artistic/intellectual characteristics" },
              { id: "b", text: "Plot" },
              { id: "c", text: "Character" },
              { id: "d", text: "Setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Movement",
                statement: "Shared characteristics.",
              },
            ],
            steps: [
              {
                reasoning: "Movement = shared characteristics.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Shared characteristics.",
          },
        },
        {
          id: "cieilit-u3-co-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "When using context, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Link it specifically to the text" },
              { id: "b", text: "Write general history" },
              { id: "c", text: "Ignore text" },
              { id: "d", text: "Fill space" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context linking",
                statement: "Link to text specifically.",
              },
            ],
            steps: [
              { reasoning: "Link context to text.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Link to text.",
          },
        },
        {
          id: "cieilit-u3-co-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between historical and social context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context types",
                statement: "Time vs social conditions.",
              },
            ],
            steps: [
              {
                reasoning: "Historical: time period — dates, events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social: class, gender, race, religion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Historical = time; social = conditions.",
          },
        },
        {
          id: "cieilit-u3-co-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two points of comparison between texts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison points",
                statement: "Themes, characters, structure.",
              },
            ],
            steps: [
              {
                reasoning: "Themes — how texts explore ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Characters — characterisation methods/development.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Themes, characters, structure, language.",
          },
        },
        {
          id: "cieilit-u3-co-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how context enriches literary analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context enrichment",
                statement: "Adds depth to interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "Context explains why text was written.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals assumptions/values of the time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Deepens understanding of themes/characters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains why + reveals values + deepens understanding.",
          },
        },
        {
          id: "cieilit-u3-co-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two poems about war have different tones. How would you compare them?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone comparison",
                statement: "Analyse differences in attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify tone of each poem — e.g. heroic vs anti-war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Compare techniques creating tone — imagery, word choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse effect on reader — different responses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to shared theme — war explored differently.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Compare tones + techniques + effects + theme.",
          },
        },
        {
          id: "cieilit-u3-co-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Biographical context should be used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understand author's influences" },
              { id: "b", text: "Replace analysis" },
              { id: "c", text: "Fill space" },
              { id: "d", text: "Impress marker" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biographical use",
                statement: "Understand influences.",
              },
            ],
            steps: [
              {
                reasoning: "Biographical = influences.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Understand influences.",
          },
        },
        {
          id: "cieilit-u3-co-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'intertextuality' used for in analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intertextuality use",
                statement: "Shows connections.",
              },
            ],
            steps: [
              {
                reasoning: "Shows connections to other texts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enriches meaning — layers of reference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shows connections — enriches meaning.",
          },
        },
        {
          id: "cieilit-u3-co-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how social context affects characterisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social context characterisation",
                statement: "Class/gender shapes characters.",
              },
            ],
            steps: [
              {
                reasoning: "Class affects characters' opportunities/behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gender shapes expectations/roles.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Race/religion influence identity/treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Class/gender/race shape characters.",
          },
        },
        {
          id: "cieilit-u3-co-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Geographical context" },
              { id: "b", text: "Historical context" },
              { id: "c", text: "Social context" },
              { id: "d", text: "Cultural context" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context types",
                statement: "Historical, social, cultural, biographical.",
              },
            ],
            steps: [
              {
                reasoning: "Geographical not standard type.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Geographical context.",
          },
        },
        {
          id: "cieilit-u3-co-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'reception' in literary studies?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reception",
                statement: "How readers respond.",
              },
            ],
            steps: [
              {
                reasoning: "How readers/audiences respond to text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Varies by time/reader — interpretations differ.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "How readers respond.",
          },
        },
        {
          id: "cieilit-u3-co-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A text's meaning has changed over time. How would you explain this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reception history",
                statement: "Interpretation changes.",
              },
            ],
            steps: [
              {
                reasoning: "Different eras have different values/concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Readers interpret through their own context.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New critical approaches reveal new meanings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Text remains relevant — meanings evolve.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Eras/values/criticism change interpretation.",
          },
        },
        {
          id: "cieilit-u3-co-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'cultural context'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural context",
                statement: "Values/beliefs/traditions.",
              },
            ],
            steps: [
              {
                reasoning: "Cultural values, beliefs, traditions of time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shapes what is acceptable/taboo in text.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Values/beliefs/traditions.",
          },
        },
        {
          id: "cieilit-u3-co-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When comparing texts, you should avoid:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Favouring one text over the other" },
              { id: "b", text: "Finding similarities" },
              { id: "c", text: "Finding differences" },
              { id: "d", text: "Analysing significance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison fairness",
                statement: "Balanced approach.",
              },
            ],
            steps: [
              { reasoning: "Avoid favouring one.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Favouring one text.",
          },
        },
        {
          id: "cieilit-u3-co-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'literary period'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Literary period",
                statement: "Historical era of literature.",
              },
            ],
            steps: [
              {
                reasoning: "Historical era — Victorian, Modernist, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Each period has characteristic styles/themes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Historical era of literature.",
          },
        },
        {
          id: "cieilit-u3-co-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how biographical context can inform interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Biographical interpretation",
                statement: "Life experiences → text.",
              },
            ],
            steps: [
              {
                reasoning: "Author's life experiences influence themes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Personal events may appear in text.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Understanding life deepens reading.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Life experiences influence text.",
          },
        },
        {
          id: "cieilit-u3-co-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a literary movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Industrialism" },
              { id: "b", text: "Romanticism" },
              { id: "c", text: "Modernism" },
              { id: "d", text: "Victorianism" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Literary movements",
                statement: "Romanticism, Modernism, Victorianism.",
              },
            ],
            steps: [
              {
                reasoning: "Industrialism not literary movement.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Industrialism.",
          },
        },
        {
          id: "cieilit-u3-co-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'textual context'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Textual context",
                statement: "Within-text references.",
              },
            ],
            steps: [
              {
                reasoning: "References within text — allusions, quotes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Connects to other texts or ideas.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Within-text references.",
          },
        },
        {
          id: "cieilit-u3-co-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A text written in 1850 is read today. How might context affect interpretation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context interpretation",
                statement: "Different eras → different readings.",
              },
            ],
            steps: [
              {
                reasoning: "Victorian values differ from modern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gender/race/class attitudes changed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Modern readers may find text problematic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Context explains but doesn't excuse.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Eras differ — values changed, readings evolve.",
          },
        },
        {
          id: "cieilit-u3-co-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "Comparative essays should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Address the specific question" },
              { id: "b", text: "Compare everything" },
              { id: "c", text: "Ignore question" },
              { id: "d", text: "Only summarise" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question focus",
                statement: "Address question.",
              },
            ],
            steps: [
              { reasoning: "Address question.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Address the question.",
          },
        },
        {
          id: "cieilit-u3-co-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'allusion'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Allusion",
                statement: "Reference to other text/idea.",
              },
            ],
            steps: [
              {
                reasoning: "Reference to other text, myth, or idea.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds depth — reader must recognise reference.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reference to other text/idea.",
          },
        },
        {
          id: "cieilit-u3-co-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to use context without it dominating analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context balance",
                statement: "Support not replace.",
              },
            ],
            steps: [
              {
                reasoning: "Use context to support interpretation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Don't let context overwhelm textual analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Always link context back to specific text.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Support not replace — link to text.",
          },
        },
        {
          id: "cieilit-u3-co-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a type of literary period?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Medieval period" },
              { id: "b", text: "Victorian period" },
              { id: "c", text: "Modernist period" },
              { id: "d", text: "Renaissance period" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Literary periods",
                statement: "Victorian, Modernist, Renaissance.",
              },
            ],
            steps: [
              {
                reasoning: "Medieval not standard literary period.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Medieval period.",
          },
        },
        {
          id: "cieilit-u3-co-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'cultural relativism' in literary analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural relativism",
                statement: "Judge by own culture.",
              },
            ],
            steps: [
              {
                reasoning: "Judging text by its own cultural standards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Avoids imposing modern values anachronistically.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Judge by own cultural standards.",
          },
        },
        {
          id: "cieilit-u3-co-q42",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How might a text's social context explain character behaviour?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Social context behaviour",
                statement: "Context shapes actions.",
              },
            ],
            steps: [
              {
                reasoning: "Class determines opportunities/expectations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gender roles shape behaviour/choices.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Social norms constrain character actions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Context explains but doesn't excuse behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Class/gender/norms shape behaviour.",
          },
        },
        {
          id: "cieilit-u3-co-q43",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 'canonical text' is one that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is widely recognised as important" },
              { id: "b", text: "Is recent" },
              { id: "c", text: "Is obscure" },
              { id: "d", text: "Is popular only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Canonical text",
                statement: "Recognised as important.",
              },
            ],
            steps: [
              {
                reasoning: "Canonical = recognised important.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Widely recognised.",
          },
        },
        {
          id: "cieilit-u3-co-q44",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'genre convention'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genre convention",
                statement: "Expected features of genre.",
              },
            ],
            steps: [
              {
                reasoning: "Expected features — e.g. sonnet has 14 lines.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Breaking conventions creates effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Expected features of genre.",
          },
        },
        {
          id: "cieilit-u3-co-q45",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how context can explain a text's controversial elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Context explanation",
                statement: "Explains not excuses.",
              },
            ],
            steps: [
              {
                reasoning: "Context explains attitudes of the time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reveals what was acceptable then.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains doesn't excuse — modern view differs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Explains attitudes — doesn't excuse.",
          },
        },
      ],
    },
    {
      id: "cieilit-u3-unseen",
      title: "Unseen text strategies",
      skill:
        "Develop strategies for analysing unseen poetry and prose under exam conditions.",
      lesson: {
        sections: [
          {
            heading: "Reading strategy",
            body: "**First read**: get overall meaning — what is it about? **Annotate**: mark key words, techniques, structure. **Second read**: analyse methods — how does poet/writer create meaning? **Plan**: organise points before writing. **Write**: structured analysis linking method to meaning.",
          },
          {
            heading: "What to look for",
            body: "**Poetry**: speaker, tone, imagery, structure, sound devices, form. **Prose**: narrative voice, characterisation, setting, atmosphere, themes. **Both**: context clues (title, date), emotional effect, overall message. **Always**: link techniques to meaning — 'This suggests…'.",
          },
          {
            heading: "Common mistakes",
            body: "**Don't**: just list techniques without analysis; ignore meaning; write narratively; use first person; forget to link to question. **Do**: analyse deeply; use terminology accurately; support with quotations; write formally; manage time.",
          },
        ],
        keyFormulas: [
          {
            name: "Reading strategy",
            statement: "Read → annotate → analyse → plan → write",
          },
          {
            name: "Key elements",
            statement:
              "Poetry: speaker/tone/imagery · Prose: voice/character/setting",
          },
        ],
        workedExample: {
          problem: "How to approach an unseen poem in exam?",
          solution:
            "Read twice → identify speaker/tone → analyse imagery/structure → plan points → write structured analysis.",
        },
      },
      questions: [
        {
          id: "cieilit-u3-us-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The first step when reading an unseen poem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Understand the overall meaning" },
              { id: "b", text: "Identify techniques" },
              { id: "c", text: "Write an essay" },
              { id: "d", text: "Count syllables" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading order",
                statement: "Meaning first.",
              },
            ],
            steps: [{ reasoning: "Meaning first.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Understand meaning.",
          },
        },
        {
          id: "cieilit-u3-us-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Annotating a poem means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marking key words, techniques, structure" },
              { id: "b", text: "Writing an essay" },
              { id: "c", text: "Summarising" },
              { id: "d", text: "Counting lines" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Annotating",
                statement: "Mark key elements.",
              },
            ],
            steps: [
              {
                reasoning: "Annotate = mark elements.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Marking key elements.",
          },
        },
        {
          id: "cieilit-u3-us-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When analysing unseen prose, look for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrative voice, characterisation, setting" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Only dialogue" },
              { id: "d", text: "Only setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prose elements",
                statement: "Voice/character/setting.",
              },
            ],
            steps: [
              { reasoning: "Multiple elements.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Voice, characterisation, setting.",
          },
        },
        {
          id: "cieilit-u3-us-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When analysing unseen poetry, look for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaker, tone, imagery, structure" },
              { id: "b", text: "Only rhyme" },
              { id: "c", text: "Only meter" },
              { id: "d", text: "Only form" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetry elements",
                statement: "Speaker/tone/imagery/structure.",
              },
            ],
            steps: [
              { reasoning: "Multiple elements.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Speaker, tone, imagery, structure.",
          },
        },
        {
          id: "cieilit-u3-us-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A common mistake in unseen analysis is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Listing techniques without analysis" },
              { id: "b", text: "Using quotations" },
              { id: "c", text: "Analysing meaning" },
              { id: "d", text: "Writing formally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Common mistake",
                statement: "Listing without analysis.",
              },
            ],
            steps: [
              { reasoning: "Listing = mistake.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Listing without analysis.",
          },
        },
        {
          id: "cieilit-u3-us-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In unseen analysis, you should always:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Link techniques to meaning" },
              { id: "b", text: "Ignore meaning" },
              { id: "c", text: "Use first person" },
              { id: "d", text: "Write narratively" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key principle",
                statement: "Link to meaning.",
              },
            ],
            steps: [{ reasoning: "Link to meaning.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Link techniques to meaning.",
          },
        },
        {
          id: "cieilit-u3-us-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The title of an unseen poem can provide:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Context clues about meaning" },
              { id: "b", text: "Nothing" },
              { id: "c", text: "Only decoration" },
              { id: "d", text: "Only author" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Title clues",
                statement: "Context clues.",
              },
            ],
            steps: [{ reasoning: "Title = clues.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Context clues.",
          },
        },
        {
          id: "cieilit-u3-us-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When writing about unseen texts, use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal academic language" },
              { id: "b", text: "First person" },
              { id: "c", text: "Informal language" },
              { id: "d", text: "Colloquial" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Register",
                statement: "Formal academic.",
              },
            ],
            steps: [{ reasoning: "Formal register.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Formal academic.",
          },
        },
        {
          id: "cieilit-u3-us-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Time management for unseen analysis requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading, planning, writing within limit" },
              { id: "b", text: "Only reading" },
              { id: "c", text: "Only writing" },
              { id: "d", text: "No planning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time management",
                statement: "Read/plan/write.",
              },
            ],
            steps: [{ reasoning: "Time management.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Read, plan, write.",
          },
        },
        {
          id: "cieilit-u3-us-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In unseen prose, the 'narrator' is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The voice telling the story" },
              { id: "b", text: "A character" },
              { id: "c", text: "The author" },
              { id: "d", text: "The reader" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrator",
                statement: "Voice telling story.",
              },
            ],
            steps: [
              { reasoning: "Narrator = voice.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Voice telling story.",
          },
        },
        {
          id: "cieilit-u3-us-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "When planning an unseen response, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organise points before writing" },
              { id: "b", text: "Start writing immediately" },
              { id: "c", text: "Only read" },
              { id: "d", text: "Skip planning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Planning",
                statement: "Organise first.",
              },
            ],
            steps: [{ reasoning: "Plan first.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Organise points.",
          },
        },
        {
          id: "cieilit-u3-us-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "An unseen poem's structure might include:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stanzas, rhyme scheme, line breaks" },
              { id: "b", text: "Only sentences" },
              { id: "c", text: "Only paragraphs" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetry structure",
                statement: "Stanzas/rhyme/line breaks.",
              },
            ],
            steps: [
              { reasoning: "Poetry structure.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Stanzas, rhyme, line breaks.",
          },
        },
        {
          id: "cieilit-u3-us-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Unseen prose might use:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "First or third person narration" },
              { id: "b", text: "Only first person" },
              { id: "c", text: "Only third person" },
              { id: "d", text: "No narration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voice",
                statement: "First or third.",
              },
            ],
            steps: [{ reasoning: "First or third.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) First or third person.",
          },
        },
        {
          id: "cieilit-u3-us-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "When analysing an unseen poem, check for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volta or turn in meaning" },
              { id: "b", text: "Only rhyme" },
              { id: "c", text: "Only meter" },
              { id: "d", text: "Only form" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Volta",
                statement: "Turn in meaning.",
              },
            ],
            steps: [{ reasoning: "Check for volta.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Volta or turn.",
          },
        },
        {
          id: "cieilit-u3-us-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unseen analysis, quotations should be:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Short and embedded in analysis" },
              { id: "b", text: "Long blocks" },
              { id: "c", text: "Only at end" },
              { id: "d", text: "Not used" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotations",
                statement: "Short and embedded.",
              },
            ],
            steps: [
              { reasoning: "Short + embedded.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Short and embedded.",
          },
        },
        {
          id: "cieilit-u3-us-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "An unseen poem's tone can be identified through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Word choice, imagery, structure" },
              { id: "b", text: "Only rhyme" },
              { id: "c", text: "Only meter" },
              { id: "d", text: "Only form" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tone identification",
                statement: "Word/imagery/structure.",
              },
            ],
            steps: [
              { reasoning: "Multiple indicators.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Word choice, imagery, structure.",
          },
        },
        {
          id: "cieilit-u3-us-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "When analysing unseen prose, examine:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How characters are presented" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Only setting" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Characterisation",
                statement: "How presented.",
              },
            ],
            steps: [
              {
                reasoning: "Examine characterisation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) How characters are presented.",
          },
        },
        {
          id: "cieilit-u3-us-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "The 'atmosphere' of unseen prose is created by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Description, setting, language" },
              { id: "b", text: "Only plot" },
              { id: "c", text: "Only characters" },
              { id: "d", text: "Only dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Atmosphere",
                statement: "Description/setting/language.",
              },
            ],
            steps: [
              { reasoning: "Multiple elements.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Description, setting, language.",
          },
        },
        {
          id: "cieilit-u3-us-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unseen analysis, avoid:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing narratively or using first person" },
              { id: "b", text: "Using quotations" },
              { id: "c", text: "Analysing meaning" },
              { id: "d", text: "Writing formally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avoid",
                statement: "Narrative/first person.",
              },
            ],
            steps: [
              {
                reasoning: "Avoid narrative/first person.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Narrative or first person.",
          },
        },
        {
          id: "cieilit-u3-us-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the importance of the title in unseen analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Title importance",
                statement: "Provides context.",
              },
            ],
            steps: [
              {
                reasoning: "Title provides context clues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May reveal theme or subject.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Title = context clues.",
          },
        },
        {
          id: "cieilit-u3-us-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two things to look for in unseen poetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poetry elements",
                statement: "Speaker, tone, imagery, structure.",
              },
            ],
            steps: [
              { reasoning: "Speaker and tone.", marks: 1, markCode: "M" },
              { reasoning: "Imagery and structure.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Speaker, tone, imagery, structure.",
          },
        },
        {
          id: "cieilit-u3-us-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to analyse an unseen poem's structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structure analysis",
                statement: "Stanzas/rhyme/line breaks.",
              },
            ],
            steps: [
              {
                reasoning: "Identify stanza pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse rhyme scheme if present.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider line breaks/enjambment effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Stanzas + rhyme + line breaks.",
          },
        },
        {
          id: "cieilit-u3-us-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You have 20 minutes for an unseen analysis. How would you structure your time?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Read/plan/write.",
              },
            ],
            steps: [
              {
                reasoning: "5 min reading + annotating.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "5 min planning points.", marks: 1, markCode: "M" },
              {
                reasoning: "10 min writing analysis.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Buffer for review.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 read + 5 plan + 10 write.",
          },
        },
        {
          id: "cieilit-u3-us-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unseen prose, 'free indirect discourse' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrator voice blended with character's" },
              { id: "b", text: "First person only" },
              { id: "c", text: "Third person only" },
              { id: "d", text: "No narration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Free indirect",
                statement: "Blended voices.",
              },
            ],
            steps: [
              {
                reasoning: "Free indirect = blended.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Blended voices.",
          },
        },
        {
          id: "cieilit-u3-us-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'pathetic fallacy' in unseen prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pathetic fallacy",
                statement: "Weather/emotion link.",
              },
            ],
            steps: [
              {
                reasoning: "Weather/environment reflects character's emotions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates atmosphere and symbolism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Weather reflects emotions.",
          },
        },
        {
          id: "cieilit-u3-us-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to identify characterisation in unseen prose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Characterisation identification",
                statement: "Actions/speech/thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Look at actions — what character does.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Look at speech — how character talks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Look at thoughts — internal perspective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Actions + speech + thoughts.",
          },
        },
        {
          id: "cieilit-u3-us-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When analysing unseen texts, avoid:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retelling the plot" },
              { id: "b", text: "Analysing techniques" },
              { id: "c", text: "Using quotations" },
              { id: "d", text: "Linking to meaning" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avoid plot retelling",
                statement: "Analyse not narrate.",
              },
            ],
            steps: [{ reasoning: "Avoid retelling.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Retelling the plot.",
          },
        },
        {
          id: "cieilit-u3-us-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'narrative distance' in unseen prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Narrative distance",
                statement: "Closeness to events.",
              },
            ],
            steps: [
              {
                reasoning: "How close narrator is to events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Close = intimate; distant = detached.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Closeness to events.",
          },
        },
        {
          id: "cieilit-u3-us-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An unseen poem has no rhyme or regular meter. How would you analyse it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Free verse analysis",
                statement: "Focus on other elements.",
              },
            ],
            steps: [
              {
                reasoning: "Identify as free verse — no fixed form.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse line breaks and rhythm instead.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Focus on imagery, tone, word choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider why poet chose free verse — effect.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Free verse — analyse line breaks/imagery/tone.",
          },
        },
        {
          id: "cieilit-u3-us-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'enunciation' in poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enunciation",
                statement: "How words sound.",
              },
            ],
            steps: [
              {
                reasoning: "How words sound when spoken.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects rhythm and meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "How words sound.",
          },
        },
        {
          id: "cieilit-u3-us-q31",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In unseen analysis, the 'speaker' of a poem is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The voice narrating the poem" },
              { id: "b", text: "Always the poet" },
              { id: "c", text: "The reader" },
              { id: "d", text: "The critic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speaker",
                statement: "Voice narrating.",
              },
            ],
            steps: [{ reasoning: "Speaker = voice.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Voice narrating.",
          },
        },
        {
          id: "cieilit-u3-us-q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'connotation' in word choice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Connotation",
                statement: "Associations beyond meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Associations beyond literal meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Affects tone and meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Associations beyond meaning.",
          },
        },
        {
          id: "cieilit-u3-us-q33",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to analyse an unseen poem's tone.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tone analysis",
                statement: "Word/imagery/structure.",
              },
            ],
            steps: [
              {
                reasoning: "Identify tone — sad, angry, hopeful, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse word choice — connotations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Consider imagery and structure effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Identify + word choice + imagery/structure.",
          },
        },
        {
          id: "cieilit-u3-us-q34",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When analysing unseen texts, you should NOT:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use first person" },
              { id: "b", text: "Use quotations" },
              { id: "c", text: "Analyse meaning" },
              { id: "d", text: "Write formally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Register",
                statement: "No first person.",
              },
            ],
            steps: [{ reasoning: "No first person.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Use first person.",
          },
        },
        {
          id: "cieilit-u3-us-q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'imagery' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Imagery",
                statement: "Sensory language.",
              },
            ],
            steps: [
              {
                reasoning: "Language appealing to senses.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates vivid pictures in mind.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sensory language.",
          },
        },
        {
          id: "cieilit-u3-us-q36",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An unseen poem describes nature as violent. How would you analyse this?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Violent imagery",
                statement: "Analyse meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Violent imagery suggests danger/power.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "May reflect speaker's feelings — fear/anger.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Nature as threatening — not beautiful.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to theme — nature vs civilisation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Nature dangerous — reflects speaker/theme.",
          },
        },
        {
          id: "cieilit-u3-us-q37",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unseen prose, 'setting' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time and place of story" },
              { id: "b", text: "Characters" },
              { id: "c", text: "Plot" },
              { id: "d", text: "Dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Setting",
                statement: "Time and place.",
              },
            ],
            steps: [
              { reasoning: "Setting = time/place.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Time and place.",
          },
        },
        {
          id: "cieilit-u3-us-q38",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'atmosphere' in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Atmosphere",
                statement: "Feeling/mood.",
              },
            ],
            steps: [
              {
                reasoning: "Feeling/mood created by description.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Created by setting, language, pacing.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Feeling/mood.",
          },
        },
        {
          id: "cieilit-u3-us-q39",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to analyse an unseen prose extract's narrative voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voice analysis",
                statement: "First/third/limited/omniscient.",
              },
            ],
            steps: [
              {
                reasoning: "Identify voice — first or third person.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Determine if limited or omniscient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse effect — intimacy/distance/reliability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Identify + determine + analyse effect.",
          },
        },
        {
          id: "cieilit-u3-us-q40",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In unseen analysis, the most important thing is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Linking technique to meaning" },
              { id: "b", text: "Listing techniques" },
              { id: "c", text: "Quoting only" },
              { id: "d", text: "Summarising" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Key principle",
                statement: "Link to meaning.",
              },
            ],
            steps: [{ reasoning: "Link to meaning.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Linking technique to meaning.",
          },
        },
        {
          id: "cieilit-u3-us-q41",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'symbolism' in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbolism",
                statement: "Objects represent ideas.",
              },
            ],
            steps: [
              {
                reasoning: "Objects/places represent bigger ideas.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adds depth — literal + figurative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Objects represent ideas.",
          },
        },
        {
          id: "cieilit-u3-us-q42",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An unseen poem ends with an image of dawn. How would you interpret it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Ending analysis",
                statement: "Final image = meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Dawn suggests new beginning/hope.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Could signal resolution or optimism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Contrast with earlier darkness/despair.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link to theme — journey from darkness to light.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Dawn = hope — contrast with earlier despair.",
          },
        },
        {
          id: "cieilit-u3-us-q43",
          difficulty: "core",
          totalMarks: 1,
          stem: "In unseen analysis, 'tone' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speaker's attitude/mood" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Structure" },
              { id: "d", text: "Imagery" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tone",
                statement: "Speaker's attitude.",
              },
            ],
            steps: [{ reasoning: "Tone = attitude.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Speaker's attitude.",
          },
        },
        {
          id: "cieilit-u3-us-q44",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'enjambment' in poetry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement: "Sentence continues past line.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence continues beyond line end.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Creates momentum or disruption.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Sentence continues past line.",
          },
        },
        {
          id: "cieilit-u3-us-q45",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to analyse an unseen poem's imagery.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Imagery analysis",
                statement: "Sensory + meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Identify imagery — visual, auditory, etc.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyse what imagery suggests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Link imagery to theme/meaning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Identify + analyse + link.",
          },
        },
      ],
    },
  ],
};
