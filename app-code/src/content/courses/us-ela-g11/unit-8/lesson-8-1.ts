import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const GETTYSBURG: TextExtract = {
  title: "The Gettysburg Address (Excerpt)",
  author: "Abraham Lincoln, 1863",
  text: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\n\nBut, in a larger sense, we can not dedicate — we can not consecrate — we can not hallow — this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here.\n\nIt is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us — that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion — that we here highly resolve that these dead shall not have died in vain — that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.",
  note: "Public domain — Lincoln's Gettysburg Address.",
};

const NATURALISM: TextExtract = {
  title: "Naturalism Excerpt: 'The Open Boat' (adapted)",
  author: "Stephen Crane, 1897",
  text: "None of them knew the color of the sky. Their eyes glanced level, and were fastened upon the waves that swept toward them. These waves were of the hue of slate, save for the tops, which were of foaming white, and all of the men knew the colors of the sea.\n\nThe wind came again, stronger. Wave after wave surged upon the shore, and the boat lifted high, then fell with a crash that shook the men to their bones. The captain watched the oarsman struggle against the water. 'Pull,' he said. 'Pull for your lives.'\n\nThe men rowed without speaking. They had been in the boat for hours — since the ship went down — and the cold had numbed their hands, but they continued. Nature did not care whether they lived or died. The sea was indifferent to their struggle. Yet they rowed because they were men, and men do not surrender easily to the indifferent forces that surround them.",
  note: "Adapted from Stephen Crane's public domain work.",
};

export const lesson81: Lesson = {
  id: "ela11-u8-lesson-8-1",
  code: "8-1",
  title: "Great American Speeches and Rhetorical Analysis",
  goal: "I CAN analyze rhetorical strategies in great American speeches and understand their historical significance.",
  standards: [
    "RL.11-12.1",
    "RL.11-12.2",
    "RL.11-12.4",
    "RL.11-12.5",
    "RL.11-12.6",
    "RH.11-12.1",
    "RH.11-12.2",
    "RH.11-12.4",
  ],
  vocabulary: [
    { term: "Rhetoric", definition: "Art of persuasive speaking/writing." },
    { term: "Anaphora", definition: "Repeated opening words/phrases." },
    {
      term: "Antithesis",
      definition: "Contrasting ideas in parallel structure.",
    },
    { term: "Allusion", definition: "Reference to another text/event." },
    { term: "Ethos/pathos/logos", definition: "Credibility/emotion/logic." },
    { term: "Occasion", definition: "Context for speech." },
  ],
  concepts: [
    {
      id: "ela11-u8-gettysburg",
      title: "Lincoln's Gettysburg Address",
      skill: "Analyze Lincoln's rhetorical strategies and historical context.",
      lesson: {
        sections: [
          {
            heading: "Occasion and purpose",
            body: "Lincoln delivered the Gettysburg Address at the dedication of a cemetery for Union soldiers killed at Gettysburg (November 19, 1863). Purpose: not to dedicate the ground (already consecrated by blood) but to redefine the war's meaning — from preserving union to establishing 'a new birth of freedom.' The speech transforms a cemetery dedication into a call for national renewal.",
          },
          {
            heading: "Rhetorical strategies",
            body: "Lincoln uses: **parallelism** ('of the people, by the people, for the people'), **antithesis** ('we can not dedicate... we can not consecrate... we can not hallow'), **anaphora** ('that we here highly resolve'), **biblical allusion** ('under God'), **tricolon** (three-part structure). These devices create rhythm, emphasize key ideas, and make the speech memorable despite its brevity (272 words).",
          },
        ],
        keyFormulas: [
          { name: "Occasion", statement: "Cemetery dedication, 1863." },
          { name: "Purpose", statement: "Redefine war's meaning." },
          {
            name: "Devices",
            statement: "Parallelism, antithesis, anaphora, allusion.",
          },
        ],
        workedExample: {
          problem:
            "How does 'government of the people, by the people, for the people' function rhetorically?",
          solution:
            "Parallelism + tricolon creates memorable climax — defines democracy in three phrases.",
        },
      },
      questions: [
        {
          id: "ela11-u8-gettysburg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTYSBURG,
          stem: "What was the occasion for Lincoln's Gettysburg Address?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cemetery dedication for Union soldiers" },
              { id: "b", text: "Campaign rally" },
              { id: "c", text: "Presidential inauguration" },
              { id: "d", text: "State of the Union" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Occasion",
                statement: "Context for speech.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delivered at cemetery dedication for Union soldiers killed at Gettysburg.",
                evidence: "occasion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Cemetery dedication.",
            commonErrors: ["Not knowing historical context."],
          },
        },
        {
          id: "ela11-u8-gettysburg-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GETTYSBURG,
          stem: "Identify two rhetorical devices Lincoln uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical devices",
                statement: "Persuasive techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parallelism: 'of the people, by the people, for the people' — rhythmic structure.",
                evidence: "parallelism",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Antithesis: 'we can not dedicate... we can not consecrate... we can not hallow' — contrast.",
                evidence: "antithesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Anaphora: 'that we here highly resolve' — repeated opening.",
                evidence: "anaphora",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Parallelism, antithesis, anaphora.",
            commonErrors: ["Identifying without explaining function."],
          },
        },
        {
          id: "ela11-u8-gettysburg-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GETTYSBURG,
          stem: "Analyze how Lincoln redefines the war's meaning in the Gettysburg Address.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "How speech persuades.",
              },
              {
                kind: "skill",
                name: "Historical context",
                statement: "Why it matters.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Opening: 'Four score and seven years ago' — connects to founding, not just war.",
                evidence: "opening",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Reframe: 'testing whether that nation... can long endure' — war as test of democracy.",
                evidence: "reframe",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Resolution: 'new birth of freedom' — transforms sacrifice into purpose.",
                evidence: "resolution",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Lincoln redefines war: opening connects to founding principles, reframe ('testing whether nation can endure') elevates stakes, resolution ('new birth of freedom') transforms sacrifice into democratic renewal.",
            commonErrors: ["Not recognizing redefinition."],
          },
        },
        {
          id: "ela11-u8-gettysburg-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GETTYSBURG,
          parts: [
            { label: "a", prompt: "What's 'anaphora'?", marks: 2 },
            {
              label: "b",
              prompt: "Give an example from the speech.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaphora",
                statement: "Repeated opening.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Repetition of words/phrases at beginning of clauses.",
                evidence: "anaphora",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'that we here highly resolve' — repeated 'that we here.'",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Repeated opening words/phrases. (b) 'That we here highly resolve.'",
            commonErrors: ["Confusing with other repetition."],
          },
        },
      ],
    },
    {
      id: "ela11-u8-king",
      title: "MLK's 'I Have a Dream'",
      skill: "Analyze King's rhetorical strategies and civil rights context.",
      lesson: {
        sections: [
          {
            heading: "Occasion and purpose",
            body: "King delivered 'I Have a Dream' at the March on Washington (August 28, 1963). Purpose: mobilize support for civil rights legislation, inspire hope, define vision of racial equality. The speech combines moral urgency with aspirational vision — not just protest but promise.",
          },
          {
            heading: "Rhetorical strategies",
            body: "King uses: **anaphora** ('I have a dream' repeated), **biblical allusion** ('Let freedom ring'), **imagery** ('sweltering with the heat of oppression'), **metaphor** ('manacles of segregation'), **tricolon** ('with this faith...'). These devices create emotional resonance while maintaining logical argument — ethos (moral authority), pathos (emotion), logos (justice logic).",
          },
        ],
        keyFormulas: [
          { name: "Occasion", statement: "March on Washington, 1963." },
          { name: "Purpose", statement: "Mobilize + inspire." },
          {
            name: "Devices",
            statement: "Anaphora, allusion, imagery, metaphor.",
          },
        ],
        workedExample: {
          problem: "How does 'I have a dream' function rhetorically?",
          solution:
            "Anaphora creates rhythm + repetition emphasizes vision — makes speech memorable and inspiring.",
        },
      },
      questions: [
        {
          id: "ela11-u8-king-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTYSBURG,
          stem: "What was the occasion for King's 'I Have a Dream'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "March on Washington" },
              { id: "b", text: "Presidential speech" },
              { id: "c", text: "Church sermon" },
              { id: "d", text: "Senate floor" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Occasion",
                statement: "Context for speech.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Delivered at March on Washington for Jobs and Freedom.",
                evidence: "occasion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. March on Washington.",
            commonErrors: ["Not knowing context."],
          },
        },
        {
          id: "ela11-u8-king-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GETTYSBURG,
          stem: "Identify two rhetorical devices King uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical devices",
                statement: "Persuasive techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Anaphora: 'I have a dream' repeated — rhythm + emphasis.",
                evidence: "anaphora",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Biblical allusion: 'Let freedom ring' — moral authority.",
                evidence: "allusion",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Imagery: 'sweltering with the heat of oppression' — sensory appeal.",
                evidence: "imagery",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "Anaphora, biblical allusion, imagery.",
            commonErrors: ["Identifying without function."],
          },
        },
        {
          id: "ela11-u8-king-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GETTYSBURG,
          stem: "Analyze how King balances moral urgency with aspirational vision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical balance",
                statement: "Urgency + hope.",
              },
              {
                kind: "skill",
                name: "Speech analysis",
                statement: "How strategies combine.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Urgency: 'sweltering with the heat of oppression' — immediate suffering.",
                evidence: "urgency",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning: "Vision: 'I have a dream' — aspirational future.",
                evidence: "vision",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: suffering + hope — motivates action through both emotion and purpose.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "King balances urgency ('sweltering with oppression' — immediate suffering) with vision ('I have a dream' — aspirational future). Both motivate action — emotion (pathos) + purpose (ethos/logos).",
            commonErrors: ["Seeing only one element."],
          },
        },
        {
          id: "ela11-u8-king-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GETTYSBURG,
          parts: [
            {
              label: "a",
              prompt: "What are the three appeals (ethos, pathos, logos)?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which does 'I have a dream' primarily use?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Three appeals",
                statement: "Credibility/emotion/logic.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ethos = credibility; pathos = emotion; logos = logic.",
                evidence: "appeals",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Primarily pathos — emotional appeal through dream imagery.",
                evidence: "pathos",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Ethos/pathos/logos. (b) Primarily pathos.",
            commonErrors: ["Not recognizing appeals."],
          },
        },
      ],
    },
    {
      id: "ela11-u8-compare",
      title: "Comparing Great American Speeches",
      skill:
        "Compare rhetorical strategies across speeches to understand different approaches to persuasion.",
      lesson: {
        sections: [
          {
            heading: "Lincoln vs King",
            body: "Both redefine national purpose through rhetoric, but differently: Lincoln uses **restraint** (272 words, formal, logical) — 'government of the people' as definition. King uses **expansion** (repetition, imagery, emotion) — 'I have a dream' as vision. Lincoln argues from logic (war tests democracy); King argues from emotion (dream of equality). Both use anaphora but to different ends.",
          },
          {
            heading: "Context shapes rhetoric",
            body: "Lincoln speaks at cemetery dedication — somber, brief, logical. King speaks at mass rally — passionate, extended, emotional. Occasion determines style: formal occasions favor restraint; mass rallies favor inspiration. Understanding context is essential to analyzing rhetoric — same devices, different effects.",
          },
        ],
        keyFormulas: [
          { name: "Lincoln vs King", statement: "Restraint vs expansion." },
          { name: "Context = style", statement: "Occasion shapes rhetoric." },
          {
            name: "Same devices, different effects",
            statement: "Anaphora works differently.",
          },
        ],
        workedExample: {
          problem: "How do Lincoln and King differ in approach?",
          solution:
            "Lincoln: restraint, logic, definition. King: expansion, emotion, vision.",
        },
      },
      questions: [
        {
          id: "ela11-u8-compare-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTYSBURG,
          stem: "What's the main difference between Lincoln's and King's rhetorical approaches?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              {
                id: "b",
                text: "Lincoln = restraint/logic; King = expansion/emotion",
              },
              { id: "c", text: "Lincoln is more emotional" },
              { id: "d", text: "King is more logical" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rhetorical approaches",
                statement: "Different styles.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lincoln = restraint/logic; King = expansion/emotion.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Lincoln = restraint/logic; King = expansion/emotion.",
            commonErrors: ["Not recognizing style differences."],
          },
        },
        {
          id: "ela11-u8-compare-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GETTYSBURG,
          stem: "How does occasion shape rhetorical style?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context analysis",
                statement: "Occasion → style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lincoln: cemetery dedication — somber, brief, logical.",
                evidence: "Lincoln",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "King: mass rally — passionate, extended, emotional.",
                evidence: "King",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Occasion determines style — formal vs mass, logic vs emotion.",
                evidence: "occasion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Cemetery = somber/brief/logical; rally = passionate/extended/emotional. Occasion shapes style.",
            commonErrors: ["Not connecting context to style."],
          },
        },
        {
          id: "ela11-u8-compare-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GETTYSBURG,
          stem: "Analyze how both speeches redefine national purpose despite different approaches.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative analysis",
                statement: "How approaches differ.",
              },
              {
                kind: "skill",
                name: "Purpose analysis",
                statement: "Same goal, different means.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Lincoln: 'new birth of freedom' — redefines war as democracy test.",
                evidence: "Lincoln",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "King: 'I have a dream' — redefines America as land of equality.",
                evidence: "King",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both redefine purpose — different means (logic vs emotion) to same end.",
                evidence: "same end",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Both redefine national purpose: Lincoln transforms war into democracy test ('new birth of freedom'), King transforms America into equality vision ('I have a dream'). Different means (logic vs emotion) achieve same end — national renewal.",
            commonErrors: ["Seeing only differences."],
          },
        },
        {
          id: "ela11-u8-compare-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GETTYSBURG,
          parts: [
            {
              label: "a",
              prompt: "What devices do both speeches share?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How do they use them differently?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative devices",
                statement: "Shared vs different use.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Both use anaphora, parallelism, tricolon.",
                evidence: "shared",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Lincoln: logical definition; King: emotional vision — same devices, different effects.",
                evidence: "different",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Anaphora, parallelism, tricolon. (b) Lincoln = logic; King = emotion.",
            commonErrors: ["Not recognizing shared devices."],
          },
        },
      ],
    },
    {
      id: "ela11-u8-naturalism",
      title: "American Literary Movements: Naturalism",
      skill:
        "Analyze how Naturalism reflects determinism and the individual's struggle against forces.",
      lesson: {
        sections: [
          {
            heading: "Naturalism defined",
            body: "Naturalism (late 19th century) extends realism by emphasizing **determinism** — humans shaped by heredity, environment, chance. Characters struggle against indifferent forces (nature, society, fate). Stephen Crane's 'The Open Boat' exemplifies: men in a boat, nature indifferent to their survival — 'Nature does not care whether they lived or died.' The individual is insignificant against vast forces.",
          },
          {
            heading: "Craft techniques",
            body: "Naturalist writing uses: **objective narration** (detached, almost journalistic), **environmental detail** (nature as character), **symbolism** (boat = human condition), **irony** (man's struggle vs nature's indifference), **limited perspective** (characters' confusion mirrors reader's). The excerpt: 'None of them knew the color of the sky' — sensory limitation reflects existential uncertainty.",
          },
        ],
        keyFormulas: [
          {
            name: "Naturalism",
            statement: "Determinism + indifferent forces.",
          },
          {
            name: "Craft",
            statement: "Objective, environmental, symbolic, ironic.",
          },
          { name: "Theme", statement: "Individual vs vast forces." },
        ],
        workedExample: {
          problem: "How does 'The Open Boat' exemplify Naturalism?",
          solution:
            "Men struggle against indifferent sea — determinism, nature as character, individual insignificance.",
        },
      },
      questions: [
        {
          id: "ela11-u8-naturalism-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: NATURALISM,
          stem: "What defines Naturalism as a literary movement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supernatural elements" },
              { id: "b", text: "Romantic individualism" },
              { id: "c", text: "Satirical exaggeration" },
              { id: "d", text: "Determinism — humans shaped by forces" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Naturalism",
                statement: "Deterministic view.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Naturalism emphasizes determinism — humans shaped by heredity/environment/chance.",
                evidence: "determinism",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. Determinism — humans shaped by forces.",
            commonErrors: ["Confusing with other movements."],
          },
        },
        {
          id: "ela11-u8-naturalism-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: NATURALISM,
          stem: "How does 'The Open Boat' exemplify Naturalism?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Naturalism analysis",
                statement: "Movement characteristics.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Determinism: men struggle against indifferent sea — fate beyond control.",
                evidence: "determinism",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Nature as character: 'The sea was indifferent' — environment shapes outcome.",
                evidence: "nature",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Individual insignificance: 'men do not surrender easily' — struggle vs vast forces.",
                evidence: "insignificance",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Determinism (fate), nature as character (indifferent sea), individual insignificance (struggle vs forces).",
            commonErrors: ["Missing movement characteristics."],
          },
        },
        {
          id: "ela11-u8-naturalism-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NATURALISM,
          stem: "Analyze how Crane's craft techniques serve Naturalist themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Craft analysis",
                statement: "How techniques serve theme.",
              },
              {
                kind: "skill",
                name: "Naturalist themes",
                statement: "Determinism, indifference.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Objective narration: 'None of them knew the color of the sky' — detached, journalistic.",
                evidence: "objective",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Environmental detail: waves 'hue of slate,' 'foaming white' — nature as character.",
                evidence: "environmental",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Irony: 'Nature does not care' vs 'men do not surrender' — struggle vs indifference.",
                evidence: "irony",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Craft serves theme: objective narration (detached perspective), environmental detail (nature as character), irony (struggle vs indifference) — techniques reinforce Naturalist determinism.",
            commonErrors: ["Analyzing craft without theme connection."],
          },
        },
        {
          id: "ela11-u8-naturalism-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: NATURALISM,
          parts: [
            {
              label: "a",
              prompt: "What's 'determinism' in Naturalism?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does it differ from free will?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Determinism",
                statement: "Forces shape outcomes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Belief that humans are shaped by heredity, environment, chance — not free choice.",
                evidence: "determinism",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Free will = choice; determinism = forces determine outcomes.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Forces shape outcomes. (b) Determinism = forces; free will = choice.",
            commonErrors: ["Confusing with free will."],
          },
        },
      ],
    },
    {
      id: "ela11-u8-integrated",
      title: "Integrated Speech and Literature Analysis",
      skill:
        "Integrate rhetorical analysis and literary movement study in comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated skills",
            body: "Grade 11 ELA integrates: **rhetorical analysis** (speeches — devices, appeals, context), **literary analysis** (movements — Naturalism, themes, craft), **comparative analysis** (how approaches differ). Exam questions often require analyzing both speeches and literature — 'Compare how Lincoln and Crane use language to convey meaning.'",
          },
          {
            heading: "Exam application",
            body: "Comprehensive analysis: identify text type → analyze devices/techniques → evaluate purpose/effect → connect to broader context. Each skill alone is partial; together reveal how language shapes meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Three skills",
            statement: "Rhetoric + literature + comparison.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem:
            "How would you comprehensively analyze a speech or literary text?",
          solution:
            "Identify type → analyze devices → evaluate purpose → connect to context.",
        },
      },
      questions: [
        {
          id: "ela11-u8-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GETTYSBURG,
          stem: "What three skills are needed for comprehensive text analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhetoric + literature + comparison" },
              { id: "b", text: "Only grammar" },
              { id: "c", text: "Only rhetoric" },
              { id: "d", text: "Only history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Three skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rhetoric + literature + comparison = comprehensive.",
                evidence: "three skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Rhetoric + literature + comparison.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u8-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GETTYSBURG,
          stem: "Apply two analysis skills to Lincoln's speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rhetoric: parallelism ('of the people, by the people') — memorable structure.",
                evidence: "rhetoric",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Purpose: redefine war's meaning — 'new birth of freedom.'",
                evidence: "purpose",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context: cemetery dedication, 1863 — occasion shapes style.",
                evidence: "context",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Rhetoric (parallelism), purpose (redefine meaning), context (occasion).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u8-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: NATURALISM,
          stem: "Write an analysis paragraph on how Crane's language serves Naturalist themes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Language: 'None of them knew the color of the sky' — sensory limitation.",
                evidence: "language",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Craft: objective narration, environmental detail — Naturalist techniques.",
                evidence: "craft",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: 'Nature does not care' vs 'men do not surrender' — determinism vs struggle.",
                evidence: "theme",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Crane's language serves Naturalism: sensory limitation ('knew not the color of sky') reflects uncertainty, objective narration maintains detachment, 'Nature does not care' vs 'men do not surrender' dramatizes determinism vs struggle.'",
            commonErrors: ["Analyzing language or theme separately."],
          },
        },
        {
          id: "ela11-u8-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GETTYSBURG,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: rhetoric+purpose+context shows speech effectiveness — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Three skills show effectiveness.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
