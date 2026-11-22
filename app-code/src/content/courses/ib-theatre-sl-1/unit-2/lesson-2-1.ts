import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "theatre-u2-lesson-2-1",
  code: "2-1",
  title: "Dramatic Structure and Genres",
  goal: "I CAN identify dramatic structure, genre conventions and how they shape meaning in plays.",
  standards: ["Play Analysis", "Dramatic Structure"],
  vocabulary: [
    {
      term: "Dramatic structure",
      definition:
        "The organisation of a play's plot — beginning, middle, end; rising and falling action.",
    },
    {
      term: "Exposition",
      definition:
        "The opening that establishes characters, setting and situation.",
    },
    {
      term: "Climax",
      definition: "The point of highest tension or turning point in the play.",
    },
    {
      term: "Denouement",
      definition: "The resolution or conclusion after the climax.",
    },
    {
      term: "Genre",
      definition:
        "A category of play defined by conventions — tragedy, comedy, drama.",
    },
    {
      term: "Tragic flaw",
      definition:
        "The character trait that leads to the protagonist's downfall.",
    },
  ],
  concepts: [
    {
      id: "theatre-u2-structure",
      title: "Dramatic structure",
      skill:
        "Identify the structural elements of a play — exposition, rising action, climax, denouement — and explain their function.",
      lesson: {
        sections: [
          {
            heading: "The arc of a play",
            body: "Most plays follow an arc: **exposition** establishes the world and characters; **rising action** builds tension through complications; **climax** is the turning point of highest tension; **falling action** shows consequences; **denouement** resolves. This structure creates anticipation and satisfaction — the audience needs to feel the journey.",
          },
          {
            heading: "Plot vs story",
            body: "**Story** is what happens; **plot** is how it's arranged. The same events can be told in different orders — flashbacks, non-linear structures. Plot choices shape meaning: chronological order creates suspense; reverse chronology creates irony; fragmented structure mirrors psychological chaos.",
          },
          {
            heading: "Structural variations",
            body: "Not all plays follow the classic arc: some are episodic (scenes without clear progression), circular (end returns to beginning), or open-ended (no resolution). These variations are meaningful choices — a play without resolution may reflect modern uncertainty; a circular structure may suggest inescapable fate.",
          },
        ],
        keyFormulas: [
          {
            name: "Dramatic arc",
            statement:
              "Exposition → rising action → climax → falling action → denouement",
          },
          {
            name: "Plot vs story",
            statement:
              "Story = events; plot = arrangement — structure shapes meaning",
          },
        ],
        workedExample: {
          problem:
            "A play starts at the end and works backward to the beginning. What effect does this structure create?",
          solution:
            "Reverse chronology creates dramatic irony — the audience knows the outcome from the start and watches helplessly as characters approach it. It also emphasises fate and inevitability. The structure itself is a statement about free will vs destiny.",
        },
      },
      questions: [
        {
          id: "theatre-u2-structure-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The climax of a play is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The middle act break" },
              { id: "b", text: "The final resolution" },
              {
                id: "c",
                text: "The point of highest tension or turning point",
              },
              { id: "d", text: "The opening scene" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement:
                  "The point of highest tension or turning point in the drama.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The climax is the point of highest tension or decisive turning point.",
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
              "**(b)** The point of highest tension or turning point",
            commonErrors: [
              "Confusing climax (peak tension) with resolution or opening.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the five stages of classic dramatic structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic structure",
                statement:
                  "Exposition, rising action, climax, falling action, denouement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exposition — establishes characters, setting and situation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rising action — complications build tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Climax — turning point of highest tension; then falling action and denouement resolve.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Exposition → rising action → climax → falling action → denouement.",
            commonErrors: [
              "Omitting stages or confusing them with plot events.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between story and plot in drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story vs plot",
                statement:
                  "Story = events; plot = arrangement — structure shapes meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Story is the sequence of events that occur.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plot is how those events are arranged for the audience.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different plot structures — chronological, reverse, fragmented — create different meanings.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: plot is a creative choice that shapes interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Story = events; plot = arrangement — plot choices shape meaning.",
            commonErrors: ["Treating story and plot as identical."],
          },
        },
        {
          id: "theatre-u2-structure-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play structure",
            author: "Written for Akademik Space",
            source: "Structural analysis exercise",
            text: "Act 1 establishes two estranged brothers meeting after their father's death. Act 2 reveals old grievances through arguments. Act 3 climaxes when one brother confesses a secret. Act 4 resolves with reconciliation.",
          },
          stem: "Analyse the dramatic structure of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the structural stage of the described moment.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain its function in the drama.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest how a different structure might change the play's meaning.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural analysis",
                statement:
                  "Identifying stages reveals how the play builds tension and resolves.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Act 1 = exposition; Act 2 = rising action; Act 3 = climax; Act 4 = denouement — any stage correctly identified.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Stage correctly identified with justification.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Function explained — exposition establishes, rising builds tension, climax turns, denouement resolves.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Function convincingly explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Different structure, e.g. reverse chronology, would create irony or emphasise fate; non-linear could show fractured relationship.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Alternative structure's effect suggested.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Stages identified. (b) Functions explained. (c) Alternative structures change meaning.",
            commonErrors: [
              "Identifying stages without explaining their dramatic function.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Exposition in a play primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Builds tension through complications" },
              { id: "b", text: "Shows the consequences of the climax" },
              {
                id: "c",
                text: "Establishes characters, setting and situation",
              },
              { id: "d", text: "Resolves the central conflict" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exposition",
                statement:
                  "The opening that establishes characters, setting and situation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Exposition is the opening stage that establishes the world and characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Establishes characters, setting and situation",
            commonErrors: ["Confusing exposition with climax or resolution."],
          },
        },
        {
          id: "theatre-u2-structure-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how rising action builds tension toward the climax.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rising action",
                statement:
                  "Complications that build tension toward the turning point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising action introduces complications and obstacles that complicate the protagonist's situation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Each complication raises the stakes and intensifies audience anticipation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The accumulation of tension makes the climax's turning point feel earned and significant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Rising action builds tension through escalating complications toward the climax.",
            commonErrors: [
              "Describing events without explaining how tension increases.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A play opens at the moment of the protagonist's arrest, then flashes back to show how events led there. What dramatic effect does this structure create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comic relief through unexpected ordering" },
              {
                id: "b",
                text: "Dramatic irony and suspense, as the audience knows the outcome while watching events unfold",
              },
              { id: "c", text: "No effect, since the events are the same" },
              { id: "d", text: "Chronological suspense only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plot arrangement",
                statement:
                  "Revealing outcomes early creates dramatic irony and suspense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Revealing the outcome first creates dramatic irony — the audience knows what is coming.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Watching characters approach a known fate generates suspense and emphasis on inevitability.",
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
              "**(b)** Dramatic irony and suspense from knowing the outcome",
            commonErrors: ["Assuming plot order has no effect on meaning."],
          },
        },
        {
          id: "theatre-u2-structure-q8",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Distinguish story from plot and explain how plot arrangement creates meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story vs plot",
                statement:
                  "Story = events; plot = arrangement — structure shapes meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Story is the chain of events that occur in the drama.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plot is the order and manner in which those events are presented.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different arrangements — chronological, reverse, fragmented — create different effects such as suspense or irony.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Structure can emphasise fate, free will or psychological states.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: plot is a deliberate artistic choice that shapes interpretation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Story = events; plot = arrangement, which shapes meaning through effects like suspense and irony.",
            commonErrors: ["Treating story and plot as interchangeable terms."],
          },
        },
        {
          id: "theatre-u2-structure-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Denouement in a play refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A sudden reversal of fortune" },
              {
                id: "b",
                text: "The resolution or conclusion after the climax",
              },
              { id: "c", text: "The introduction of the protagonist" },
              { id: "d", text: "The highest point of tension" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denouement",
                statement: "The resolution or conclusion after the climax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Denouement is the resolution following the climax and falling action.",
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
              "**(b)** The resolution or conclusion after the climax",
            commonErrors: ["Confusing denouement with climax or exposition."],
          },
        },
        {
          id: "theatre-u2-structure-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the function of falling action and denouement in dramatic structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Falling action and denouement",
                statement:
                  "Falling action shows consequences; denouement resolves.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling action shows the consequences of the climax — how the turning point affects characters and events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It allows tension to release and gives the audience time to absorb the outcome.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Denouement resolves remaining questions and establishes the final state of affairs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Together they provide closure and reveal what the climax meant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Falling action shows consequences; denouement resolves and provides closure.",
            commonErrors: [
              "Describing the stages without explaining their function.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how an open-ended structure might reflect modernist uncertainty.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Open-ended structure",
                statement:
                  "Lack of resolution mirrors uncertainty about meaning and fate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "An open-ended play withholds resolution, denying the audience closure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This mirrors modernist doubts about certainty, progress and moral order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The structure itself becomes a statement — life offers no neat answers.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It forces the audience to confront unresolved tension, mirroring contemporary anxiety.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: form enacts theme — uncertainty is performed, not just described.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Open-ended structure enacts modernist uncertainty by denying resolution.",
            commonErrors: [
              "Describing open endings as merely incomplete rather than meaningful choices.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Falling action in a play occurs:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "After the climax, showing consequences" },
              { id: "b", text: "During the denouement only" },
              { id: "c", text: "Between rising action and climax" },
              { id: "d", text: "Before the exposition" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Falling action",
                statement: "The consequences that follow the climax.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Falling action follows the climax and shows its consequences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** After the climax, showing consequences",
            commonErrors: [
              "Placing falling action before or during the climax.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the effects of chronological and fragmented plot structures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Plot structure effects",
                statement:
                  "Chronology creates suspense; fragmentation mirrors disorder or psychology.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chronological order builds suspense as the audience discovers events alongside characters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fragmented or non-linear order disrupts expectations and can mirror psychological chaos or memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fragmentation may emphasise theme over causality — connections matter more than sequence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: structure choice is meaningful and shapes how the audience experiences the story.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Chronology creates suspense; fragmentation mirrors disorder and emphasises theme.",
            commonErrors: [
              "Assuming chronological order is always the 'normal' or superior structure.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play structure",
            author: "Written for Akademik Space",
            source: "Structural analysis exercise",
            text: "A play opens with a funeral. Scene two jumps to a wedding twenty years earlier. The middle alternates between the couple's courtship and a present-day investigation. The final scene returns to the funeral, now understood differently.",
          },
          stem: "Analyse the structural organisation of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the plot structure used.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the effect of opening and closing with the same event.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Suggest how a chronological version might change the audience's experience.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Non-linear structure",
                statement:
                  "Reordering events creates irony, suspense and reframes meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Non-linear / flashback structure — events are presented out of chronological order.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Structure correctly identified with evidence.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Returning to the funeral reframes it — the audience now understands what the death means; creates dramatic irony and emotional payoff.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Framing effect convincingly explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Chronological order would build suspense differently — the audience would discover the wedding-to-funeral connection gradually rather than having it reframed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Alternative structure's effect convincingly suggested.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Non-linear flashback structure. (b) Framing reframes the funeral's meaning. (c) Chronology would change suspense into gradual discovery.",
            commonErrors: [
              "Identifying events without analysing how their order creates meaning.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which structural choice would most likely create dramatic irony for the audience?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Keeping all events in strict chronological order",
              },
              { id: "b", text: "Using only one continuous scene" },
              {
                id: "c",
                text: "Revealing the outcome early, then showing how characters reach it",
              },
              { id: "d", text: "Ending the play abruptly without resolution" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dramatic irony",
                statement:
                  "Audience knowledge exceeding characters' creates irony.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dramatic irony requires the audience to know something the characters do not.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Revealing the outcome early gives the audience knowledge characters lack — choice (b).",
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
              "**(b)** Revealing the outcome early creates dramatic irony",
            commonErrors: [
              "Confusing dramatic irony with surprise or coincidence.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Define the climax of a play and explain its dramatic function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climax",
                statement:
                  "The point of highest tension or decisive turning point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The climax is the point of highest tension — the decisive turning point of the drama.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It determines the outcome of the central conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Function: it resolves the rising tension and sets up falling action and denouement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Climax = highest-tension turning point that determines the conflict's outcome.",
            commonErrors: [
              "Equating climax with the final scene or loudest moment.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain how a circular structure — where the ending returns to the beginning — might suggest fate or inescapable patterns.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Circular structure",
                statement:
                  "End returning to start suggests inevitability and repetition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Circular structure returns the audience to the opening image or situation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This suggests characters cannot escape their circumstances — change is an illusion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It evokes fatalism: the same patterns repeat regardless of effort.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The audience's realisation mirrors the characters' trapped state.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: form itself argues that history or fate repeats.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Circular structure enacts fate — the return to the beginning shows patterns are inescapable.",
            commonErrors: [
              "Describing circularity without linking it to theme.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "An episodic play structure is characterised by:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Self-contained scenes without a clear progressive plot",
              },
              {
                id: "b",
                text: "Scenes linked by a clear cause-and-effect plot progression",
              },
              { id: "c", text: "A single continuous scene" },
              { id: "d", text: "Strict adherence to the five-act form" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Episodic structure",
                statement:
                  "Self-contained scenes without clear plot progression.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Episodic structure consists of self-contained episodes rather than a tightly causal plot.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Self-contained scenes without clear progressive plot",
            commonErrors: [
              "Confusing episodic structure with a single-act play.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the same events arranged in different orders produce different dramatic experiences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Order and meaning",
                statement:
                  "Sequence controls what the audience knows and when.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Order controls the audience's information — what they know, suspect or anticipate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Chronological order creates discovery; flashbacks create irony; fragments create confusion or pattern.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Emotional impact depends on preparation — a death is tragic if built to, shocking if sudden, ironic if foreseen.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: arrangement is meaning-making, not neutral packaging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different orders control audience knowledge and emotion, producing different meanings from identical events.",
            commonErrors: [
              "Assuming events alone determine meaning regardless of order.",
            ],
          },
        },
        {
          id: "theatre-u2-structure-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate how structural experimentation — such as non-linear timelines or multiple endings — serves meaning in contemporary drama.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Structural experimentation",
                statement:
                  "Breaking convention can mirror fragmented modern experience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Non-linear timelines fragment causality, mirroring how memory and media experience work today.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Multiple endings deny a single 'true' resolution, reflecting relativism and choice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Such experiments engage audiences actively — they must construct meaning rather than receive it.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "They can also risk confusion if the structure serves no thematic purpose.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: effective experimentation links form to theme; arbitrary fragmentation is merely gimmick.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Structural experimentation serves meaning when it mirrors modern experience; it fails when arbitrary.",
            commonErrors: [
              "Praising experimentation without evaluating its thematic purpose.",
            ],
          },
        },
      ],
    },
    {
      id: "theatre-u2-genres",
      title: "Genre and convention",
      skill:
        "Identify genre conventions — tragedy, comedy, drama — and analyse how they shape audience expectations and meaning.",
      lesson: {
        sections: [
          {
            heading: "Genre conventions",
            body: "**Tragedy** follows a protagonist's downfall — often through a **tragic flaw**; the audience experiences catharsis. **Comedy** resolves in marriage or reconciliation — obstacles overcome, order restored. **Drama** occupies the middle — serious themes without necessarily tragic or comic resolution. Genres set audience expectations.",
          },
          {
            heading: "Subverting genre",
            body: "Plays often subvert genre: a 'comedy' with dark themes; a 'tragedy' with hopeful ending. These subversions are meaningful — they challenge expectations or comment on genre itself. Knowing the conventions makes subversion visible; without them, the play just seems odd.",
          },
          {
            heading: "Genre and meaning",
            body: "Genre shapes interpretation: the same death is tragic in tragedy, absurd in comedy, mundane in drama. Genre is not just classification — it's a framework that tells the audience how to respond. Analysing genre means asking: what does this play expect of me, and does it fulfil or frustrate those expectations?",
          },
        ],
        keyFormulas: [
          {
            name: "Genre types",
            statement:
              "Tragedy = downfall; Comedy = reconciliation; Drama = serious without resolution",
          },
          {
            name: "Tragic flaw",
            statement: "The character trait causing the protagonist's downfall",
          },
        ],
        workedExample: {
          problem:
            "A play ends with the protagonist's death but the tone is celebratory, not mournful. What genre subversion is this?",
          solution:
            "This subverts tragedy — the expected cathartic mourning is replaced by celebration. It could be dark comedy, absurdism, or a statement about the character's liberation through death. The subversion itself is meaningful — it challenges what 'tragic' should feel like.",
        },
      },
      questions: [
        {
          id: "theatre-u2-genres-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 'tragic flaw' in drama refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A technical error" },
              { id: "b", text: "The villain's plan" },
              { id: "c", text: "A mistake in the script" },
              {
                id: "d",
                text: "The character trait that leads to the protagonist's downfall",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragic flaw",
                statement:
                  "The character trait causing the protagonist's downfall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tragic flaw is the character trait leading to the protagonist's downfall.",
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
              "**(b)** The character trait that leads to the protagonist's downfall",
            commonErrors: ["Confusing tragic flaw with plot device or error."],
          },
        },
        {
          id: "theatre-u2-genres-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical conventions of tragedy and comedy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genre conventions",
                statement:
                  "Tragedy = downfall; Comedy = reconciliation and restored order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tragedy: protagonist's downfall, often through tragic flaw; audience experiences catharsis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Comedy: obstacles overcome, marriage or reconciliation; order restored.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both follow dramatic structure but with different resolutions and emotional effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tragedy = downfall and catharsis; Comedy = reconciliation and restored order.",
            commonErrors: ["Confusing genre conventions with plot events."],
          },
        },
        {
          id: "theatre-u2-genres-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how subverting genre conventions creates meaning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre subversion",
                statement:
                  "Breaking expectations creates irony, comment or challenge.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre sets expectations — tragedy should be mournful, comedy should be funny.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subverting these expectations creates irony, surprise or commentary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The subversion itself is a statement — about genre, society or human nature.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: meaningful subversion requires knowing the conventions being broken.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genre subversion creates meaning by challenging audience expectations.",
            commonErrors: [
              "Not recognising when a play is subverting genre conventions.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q4",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Genre analysis exercise",
            text: "A play follows a couple through wedding planning — arguments, mishaps, last-minute disasters — but ends not with marriage but with the couple separating amicably and planning separate futures. The tone is comic throughout despite the serious subject.",
          },
          stem: "Analyse the genre of a described play.",
          parts: [
            { label: "a", prompt: "Identify the apparent genre.", marks: 2 },
            {
              label: "b",
              prompt: "Identify any subversions of genre convention.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether the subversion is effective.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre analysis",
                statement:
                  "Identifying conventions and subversions reveals meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Apparent genre: comedy — wedding planning, mishaps, comic tone.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Genre correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Subversion: comedy ends in separation, not marriage — subverts the reconciliation convention.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subversion correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Effective — the subversion suggests modern relationships don't need traditional resolution; the comic tone makes the serious ending palatable.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Effectiveness convincingly evaluated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Comedy. (b) Ends in separation, not marriage. (c) Effective subversion of convention.",
            commonErrors: ["Identifying genre without noticing subversions."],
          },
        },
        {
          id: "theatre-u2-genres-q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Comedy in drama typically resolves with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The villain's victory" },
              { id: "b", text: "Marriage, reconciliation or restored order" },
              { id: "c", text: "The protagonist's death" },
              { id: "d", text: "An ambiguous, unresolved ending" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comedy conventions",
                statement:
                  "Obstacles overcome; marriage or reconciliation; order restored.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comedy resolves through marriage, reconciliation or restored social order.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Marriage, reconciliation or restored order",
            commonErrors: ["Confusing comic resolution with tragic downfall."],
          },
        },
        {
          id: "theatre-u2-genres-q6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe the typical conventions of tragedy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragedy",
                statement:
                  "Protagonist's downfall, often through tragic flaw; catharsis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tragedy centres on a protagonist whose fortunes decline toward downfall.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The downfall is often caused or worsened by a tragic flaw — a character trait.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The audience experiences catharsis — emotional release through pity and fear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tragedy = downfall through tragic flaw, producing catharsis.",
            commonErrors: [
              "Describing tragic plots without the emotional function of catharsis.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "A 'comedy' that ends with the hero's death subverts which genre convention?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The use of dialogue" },
              { id: "b", text: "The five-act structure" },
              { id: "c", text: "The requirement for a large cast" },
              {
                id: "d",
                text: "The convention that comedy resolves in marriage or reconciliation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre subversion",
                statement:
                  "Breaking a genre's expected resolution creates meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comedy's core convention is resolution through marriage or reconciliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ending in death breaks that convention — choice (b).",
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
              "**(b)** The convention of comic resolution through reconciliation",
            commonErrors: [
              "Identifying subversion without naming the convention being broken.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how knowing genre conventions enables audiences to recognise and interpret subversion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre literacy",
                statement:
                  "Subversion is only visible against known conventions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre conventions create expectations about plot, tone and resolution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "When a play breaks these expectations, the deviation itself becomes meaningful — irony or commentary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without knowing the convention, the play simply seems odd rather than deliberately subversive.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: genre literacy is required to read subversion as a statement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conventions set expectations; breaking them creates meaning only if audiences recognise the convention.",
            commonErrors: [
              "Treating subversion as accidental rather than deliberate.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Catharsis in tragedy refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The villain's defeat" },
              { id: "b", text: "A technical term for stage lighting" },
              {
                id: "c",
                text: "The audience's emotional release through pity and fear",
              },
              { id: "d", text: "A sudden plot twist" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Catharsis",
                statement:
                  "Emotional release or purification experienced by the audience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Catharsis is the emotional release the audience experiences through tragedy.",
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
              "**(b)** The audience's emotional release through pity and fear",
            commonErrors: ["Confusing catharsis with plot resolution."],
          },
        },
        {
          id: "theatre-u2-genres-q10",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how genre shapes audience expectations and interpretation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre as framework",
                statement: "Genre tells the audience how to respond to events.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre signals conventions — the audience anticipates certain outcomes and emotional registers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The same event — e.g. a death — is read as tragic, absurd or mundane depending on genre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genre therefore frames interpretation: it instructs the audience how to feel and what to expect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: analysing genre means asking whether the play fulfils or frustrates expectations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genre frames interpretation by setting expectations for outcome and emotional response.",
            commonErrors: [
              "Treating genre as mere labelling rather than an interpretive framework.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse how a play might combine comedy and tragedy — a 'tragicomedy' — and what effect this mixing creates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre mixing",
                statement:
                  "Combining genres creates tension between expected responses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tragicomedy places comic and tragic elements in the same play.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The audience is pulled between laughter and sorrow — neither response fully satisfies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This tension mirrors modern experience, where life is neither purely comic nor tragic.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It prevents easy catharsis or escapism, forcing ambivalent engagement.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: mixing genres is a statement about the complexity of human experience.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tragicomedy creates productive tension between comic and tragic responses, mirroring life's ambivalence.",
            commonErrors: [
              "Describing mixed genres without analysing their combined effect.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The 'tragic flaw' that causes a protagonist's downfall is also known by which classical term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exposition" },
              { id: "b", text: "Denouement" },
              { id: "c", text: "Catharsis" },
              { id: "d", text: "Hamartia" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tragic flaw / hamartia",
                statement: "The character trait or error leading to downfall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hamartia is the classical term for the tragic flaw or error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Hamartia",
            commonErrors: [
              "Confusing hamartia with catharsis, which is the audience's emotional release.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how the genre of 'drama' differs from tragedy and comedy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drama as genre",
                statement:
                  "Serious themes without necessarily tragic or comic resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Drama occupies the middle ground — serious subject matter like tragedy but without required downfall or catharsis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unlike comedy, it need not resolve in reconciliation; unlike tragedy, it need not end in destruction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Its conventions are looser — endings may be ambiguous or quietly resolved.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: 'drama' is defined by serious intent rather than a fixed resolution pattern.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Drama = serious themes with flexible resolution, between tragedy and comedy.",
            commonErrors: ["Treating 'drama' as synonymous with 'tragedy'."],
          },
        },
        {
          id: "theatre-u2-genres-q14",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Described play",
            author: "Written for Akademik Space",
            source: "Genre analysis exercise",
            text: "A play begins as a farce — mistaken identities, slapstick, rapid dialogue. By the final act, the disguises fall away and the play confronts genuine loss and betrayal. The audience laughs until it suddenly cannot.",
          },
          stem: "Analyse the genre of a described play.",
          parts: [
            {
              label: "a",
              prompt: "Identify the genres present and where they shift.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the effect of the tonal shift on the audience.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate whether the genre mixing succeeds.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre mixing",
                statement:
                  "Shifting genre creates changing audience expectations and responses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Farce/comedy in early acts; drama or tragedy in the final act — the genre shifts mid-play.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Genres and shift point correctly identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The shift from laughter to grief disorients and deepens impact — the audience's comic expectations are betrayed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Effect on audience convincingly explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Succeeds if the shift reveals that comedy masked real pain — the farce was a defence mechanism; fails if it feels like two plays stitched together.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Evaluation convincingly argued.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Farce shifting to drama/tragedy. (b) Betrayed comic expectations deepen impact. (c) Effective if the shift is motivated.",
            commonErrors: ["Identifying only one genre and missing the shift."],
          },
        },
        {
          id: "theatre-u2-genres-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "Genre conventions matter to audiences mainly because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Determine the running time" },
              { id: "b", text: "Choose the actors" },
              { id: "c", text: "Fix the number of scenes" },
              {
                id: "d",
                text: "Set expectations that guide how events are interpreted",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre expectations",
                statement:
                  "Conventions guide interpretation and emotional response.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre conventions tell audiences what to expect and how to respond.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Set expectations that guide interpretation",
            commonErrors: [
              "Reducing genre to production logistics rather than meaning.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List the three main dramatic genres and state the typical outcome of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Main genres",
                statement:
                  "Tragedy = downfall; Comedy = reconciliation; Drama = serious without fixed resolution.",
              },
            ],
            steps: [
              {
                reasoning: "Tragedy — protagonist's downfall with catharsis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Comedy — obstacles overcome, marriage or reconciliation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Drama — serious themes without necessarily tragic or comic resolution.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Tragedy = downfall; Comedy = reconciliation; Drama = serious, flexible resolution.",
            commonErrors: ["Mixing up the outcomes of comedy and tragedy."],
          },
        },
        {
          id: "theatre-u2-genres-q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why subverting genre conventions can function as social or political commentary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subversion as commentary",
                statement:
                  "Breaking conventions questions the values they represent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Genre conventions encode cultural values — e.g. comedy assumes marriage is the happy ending.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Subverting them challenges those values — a comedy ending in separation questions the institution itself.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The audience's surprise is directed at the convention, exposing it as arbitrary or oppressive.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Repeated across plays, subversion can shift what audiences accept as 'normal'.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: subversion makes the audience examine the rules they take for granted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Subverting genre exposes and challenges the cultural values embedded in conventions.",
            commonErrors: [
              "Describing subversion as random rather than critical of convention.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "A play dealing with serious themes that ends without a clear resolution is closest to which genre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Farce" },
              { id: "b", text: "Comedy" },
              { id: "c", text: "Drama" },
              { id: "d", text: "Tragedy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drama",
                statement:
                  "Serious themes without necessarily tragic or comic resolution.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Serious themes with ambiguous or open resolution fit the genre of drama.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Drama",
            commonErrors: [
              "Assuming serious subject matter automatically means tragedy.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how the same event can carry different meanings depending on genre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre and meaning",
                statement:
                  "Genre is an interpretive framework, not just classification.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Events are neutral until framed — genre tells the audience how to read them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A death is tragic in tragedy (loss, catharsis), absurd in comedy (ridiculous timing), or mundane in drama (one fact among others).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Genre therefore assigns moral and emotional weight to identical events.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: changing genre changes the play's statement about the event.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genre frames events, assigning them different emotional and moral meanings.",
            commonErrors: [
              "Assuming an event has fixed meaning regardless of genre.",
            ],
          },
        },
        {
          id: "theatre-u2-genres-q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether genre labels help or limit the interpretation of a play.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genre as lens",
                statement:
                  "Labels guide but can also constrain interpretation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Labels help — they establish conventions that make subversion visible and give audiences a framework.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "They can limit — forcing a play into 'tragedy' may blind analysts to comic or absurd elements.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Many plays resist labels, suggesting genre is a spectrum rather than a box.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "The best analysis uses genre as a starting lens, not a verdict.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: labels illuminate when used flexibly and distort when treated as fixed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Genre labels help as interpretive lenses but limit when treated as fixed categories.",
            commonErrors: [
              "Arguing one-sidedly for or against genre without nuance.",
            ],
          },
        },
      ],
    },
  ],
};
