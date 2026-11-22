import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const COMP1: TextExtract = {
  title: "Comparative Texts: Technology and Humanity",
  author: "Written for Akademik Space",
  text: "TEXT A — 'The Algorithm's Dream': I dream in clicks and swipes... I am the stage, the script, the audience and the play... You are the product.\n\nTEXT B — 'The Waiting Room': Marcus sat in the plastic chair... the floor becomes water. He'd known since the first lump... 'Tell me.'",
};

const COMP2: TextExtract = {
  title: "Comparative Texts: Inheritance and Control",
  author: "Written for Akademik Space",
  text: "TEXT A — 'Inheritance': My father left me his watch — still ticking, though he isn't... What else did he leave? The silence between us... always asking what I inherited and what I chose.\n\nTEXT B — 'The Algorithm's Dream': I know your secrets better than you know yourself — and I will never tell. Because telling would end the game. Because you are the product.",
};

export const lesson91: Lesson = {
  id: "ela9-u9-lesson-9-1",
  code: "9-1",
  title: "Comparative Analysis: Themes Across Texts",
  goal: "I CAN compare themes, characters, and structures across multiple texts to develop synthesis.",
  standards: ["RL.9-10.9", "RL.9-10.2", "RL.9-10.6"],
  vocabulary: [
    {
      term: "Comparative analysis",
      definition: "Examining similarities and differences across texts.",
    },
    {
      term: "Synthesis",
      definition: "Combining ideas from multiple texts into new understanding.",
    },
    {
      term: "Theme comparison",
      definition: "How different texts explore similar ideas.",
    },
    {
      term: "Character comparison",
      definition:
        "How characters in different texts function similarly/differently.",
    },
    {
      term: "Structural comparison",
      definition: "How text organization differs across works.",
    },
    {
      term: "Cross-text evidence",
      definition: "Evidence from multiple texts supporting analysis.",
    },
  ],
  concepts: [
    {
      id: "ela9-u9-themes",
      title: "Theme comparison across texts",
      skill:
        "Compare how different texts explore similar themes — technology, control, inheritance.",
      lesson: {
        sections: [
          {
            heading: "Technology and control",
            body: "'The Algorithm's Dream' and 'The Waiting Room' both explore **systems that control human experience** but differently: algorithm = invisible digital control; medical system = visible institutional control. Both show individuals subject to forces beyond their understanding — Marcus doesn't know biopsy results; user doesn't know algorithm's logic. Theme: modern life means surrendering agency to opaque systems. But algorithm poem is first-person (system's voice); waiting room is third-person (individual's experience) — different perspectives on same theme.",
          },
          {
            heading: "Inheritance and identity",
            body: "'Inheritance' and 'The Algorithm's Dream' both explore **what shapes identity**: father leaves watch/hands/silence (biological/cultural inheritance); algorithm leaves data profile/behavioral predictions (digital inheritance). Both ask: how much of 'me' is inherited vs chosen? Poem explicitly poses question ('what I inherited and what I chose'); algorithm poem implies answer ('you are the product' — inherited by system, not self).",
          },
        ],
        keyFormulas: [
          {
            name: "Compare themes",
            statement: "Similar ideas, different exploration.",
          },
          { name: "Compare perspectives", statement: "POV shapes theme." },
          {
            name: "Synthesis = new understanding",
            statement: "More than sum of parts.",
          },
        ],
        workedExample: {
          problem:
            "How do 'The Algorithm's Dream' and 'The Waiting Room' explore control differently?",
          solution:
            "Algorithm = invisible digital control (first-person system voice); medical = visible institutional control (third-person individual). Both show agency surrender to opaque systems but different perspectives.",
        },
      },
      questions: [
        {
          id: "ela9-u9-themes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMP1,
          stem: "What theme do 'The Algorithm's Dream' and 'The Waiting Room' share?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Individuals are subject to opaque systems beyond their control",
              },
              { id: "b", text: "Technology is bad" },
              { id: "c", text: "Waiting is hard" },
              { id: "d", text: "Algorithms are smart" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme comparison",
                statement: "Shared ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both show individuals subject to systems they don't understand — algorithm's logic, medical uncertainty.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Individuals are subject to opaque systems beyond their control.",
            commonErrors: ["Choosing surface topic instead of theme."],
          },
        },
        {
          id: "ela9-u9-themes-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMP1,
          stem: "How do the two texts explore control from different perspectives?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perspective comparison",
                statement: "POV shapes theme.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Algorithm poem: first-person system voice — control seen from controller's perspective.",
                evidence: "first person",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Waiting room: third-person individual — control experienced by subject.",
                evidence: "third person",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: algorithm poem shows mechanism; waiting room shows experience — complementary perspectives.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Algorithm poem uses first-person system voice (control from controller's view); waiting room uses third-person individual (control experienced). Complementary: one shows mechanism, other shows experience.",
            commonErrors: ["Comparing content without POV analysis."],
          },
        },
        {
          id: "ela9-u9-themes-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMP2,
          stem: "Compare how 'Inheritance' and 'The Algorithm's Dream' explore identity formation — what's inherited vs chosen.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Theme synthesis",
                statement: "Identity across texts.",
              },
              {
                kind: "skill",
                name: "Comparative analysis",
                statement: "Similarities/differences.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Inheritance: biological/cultural — watch, hands, silence from father.",
                evidence: "biological",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm: digital — data profile, behavioral predictions, 'you are the product.'",
                evidence: "digital",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: both question agency — 'what I chose' vs 'you are the product' (chosen by system).",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Inheritance explores biological/cultural identity (father's watch, hands, silence); algorithm explores digital identity (data profile, predictions). Both question agency: 'what I inherited and what I chose' vs 'you are the product' — identity shaped by forces beyond self.",
            commonErrors: ["Listing similarities without synthesis."],
          },
        },
        {
          id: "ela9-u9-themes-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMP1,
          parts: [
            {
              label: "a",
              prompt: "What is 'synthesis' in comparative analysis?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example from the texts.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "New understanding.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Combining insights from multiple texts into new understanding — more than sum of parts.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: algorithm poem shows control mechanism; waiting room shows control experience — together reveal full picture of modern agency loss.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Combining insights into new understanding. (b) Algorithm shows mechanism; waiting room shows experience — together reveal full picture of agency loss.",
            commonErrors: ["Confusing synthesis with summary."],
          },
        },
      ],
    },
    {
      id: "ela9-u9-characters",
      title: "Character Comparison Across Texts",
      skill:
        "Compare how characters function similarly or differently across texts.",
      lesson: {
        sections: [
          {
            heading: "Character functions",
            body: "Marcus (waiting room) and algorithm (dream poem) are both **systems subjects** but inverse: Marcus is human subject to system; algorithm IS the system. Marcus is passive (waits, receives news); algorithm is active (optimizes, controls). Marcus's complexity is internal (conflicting emotions); algorithm's 'complexity' is presented as single-minded optimization. Both are 'characters' but one is human, one is machine — comparison reveals what makes human character distinct.",
          },
          {
            heading: "Inheritance characters",
            body: "Father (inheritance poem) and algorithm (dream poem) both **shape identity** but differently: father gives tangible inheritance (watch, hands) and intangible (silence, values); algorithm gives invisible inheritance (data profile, behavioral predictions). Father's inheritance is chosen by speaker ('what I chose'); algorithm's is imposed ('you are the product'). One is generational, one is digital — both raise question of self-determination.",
          },
        ],
        keyFormulas: [
          {
            name: "Compare functions",
            statement: "What role does character play?",
          },
          { name: "Human vs system", statement: "Complexity differs." },
          { name: "Inheritance types", statement: "Tangible vs invisible." },
        ],
        workedExample: {
          problem: "How do Marcus and the algorithm function as characters?",
          solution:
            "Marcus = human subject (passive, complex emotions); algorithm = system (active, single-minded). Comparison reveals human complexity vs machine simplicity — what makes us human.",
        },
      },
      questions: [
        {
          id: "ela9-u9-characters-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMP1,
          stem: "How do Marcus and the algorithm differ as characters?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Marcus is human subject; algorithm is the system itself",
              },
              { id: "b", text: "They're the same" },
              { id: "c", text: "Marcus is smart; algorithm is dumb" },
              { id: "d", text: "Marcus is passive; algorithm is active" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Character function",
                statement: "Role in narrative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Marcus is human subject to system; algorithm IS the system — inverse relationship.",
                evidence: "character",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Marcus is human subject; algorithm is the system itself.",
            commonErrors: ["Missing inverse relationship."],
          },
        },
        {
          id: "ela9-u9-characters-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMP2,
          stem: "Compare father's inheritance vs algorithm's 'inheritance' — what's the key difference?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inheritance comparison",
                statement: "Tangible vs invisible.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Father: tangible (watch, hands) + intangible (silence, values) — chosen by speaker.",
                evidence: "father",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm: invisible (data profile, predictions) — imposed by system.",
                evidence: "algorithm",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Key difference: father's is generational/chosen; algorithm's is digital/imposed.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Father's inheritance: tangible + intangible, chosen ('what I chose'). Algorithm's: invisible (data profile), imposed ('you are the product'). Generational vs digital.",
            commonErrors: ["Comparing without identifying key difference."],
          },
        },
        {
          id: "ela9-u9-characters-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMP1,
          stem: "Analyze how comparing Marcus and the algorithm reveals what makes human character distinct from system/machine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character comparison",
                statement: "Human vs machine.",
              },
              {
                kind: "skill",
                name: "Thematic insight",
                statement: "What comparison reveals.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Marcus: passive, complex emotions, anticipates, hopes, fears — human interiority.",
                evidence: "Marcus",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm: active, single-minded optimization, no interiority — 'didn't hate... didn't love.'",
                evidence: "algorithm",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Insight: human character defined by complexity, contradiction, interiority — what machines lack.",
                evidence: "insight",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Marcus embodies human complexity — passive, emotional, contradictory ('knowing and hearing are different'). Algorithm embodies machine simplicity — active, single-minded, no interiority ('didn't hate... didn't love'). Comparison reveals human character is defined by complexity and interiority that machines lack.",
            commonErrors: ["Describing characters without comparing."],
          },
        },
        {
          id: "ela9-u9-characters-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMP2,
          parts: [
            {
              label: "a",
              prompt: "What does 'character function' mean?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How does father function differently from algorithm?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Character function",
                statement: "Role in narrative.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Role character plays in story — what they represent or accomplish.",
                evidence: "function",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Father: represents generational inheritance (chosen); algorithm: represents digital imposition (imposed).",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Role character plays in story. (b) Father = generational inheritance (chosen); algorithm = digital imposition (imposed).",
            commonErrors: ["Confusing character with plot device."],
          },
        },
      ],
    },
    {
      id: "ela9-u9-synthesis",
      title: "Synthesis and Integrated Analysis",
      skill:
        "Synthesize insights across multiple texts to develop new interpretations.",
      lesson: {
        sections: [
          {
            heading: "Synthesis vs comparison",
            body: "Comparison = identifying similarities/differences. Synthesis = combining insights into NEW understanding. Comparing 'Inheritance' and 'Algorithm's Dream': both explore identity inheritance. Synthesizing: identity is always inherited — from family (biological/cultural) or system (digital/behavioral). The question isn't whether we're shaped by inheritance but which kind, and whether we can choose what to keep.",
          },
          {
            heading: "Integrated analysis",
            body: "Strong synthesis connects across texts: algorithm poem's 'you are the product' + inheritance poem's 'what I inherited and what I chose' = identity is negotiated between external shaping and internal choice. Marcus's waiting room + algorithm's dream = modern anxiety comes from opacity — we can't see what shapes us. Synthesis reveals patterns invisible in single texts.",
          },
        ],
        keyFormulas: [
          {
            name: "Synthesis > comparison",
            statement: "New understanding, not just similarities.",
          },
          { name: "Connect across texts", statement: "Patterns emerge." },
          { name: "Integrated interpretation", statement: "Whole > parts." },
        ],
        workedExample: {
          problem:
            "Synthesize 'Inheritance' and 'Algorithm's Dream' into new insight about identity.",
          solution:
            "Identity is always inherited — from family (watch, hands) or system (data profile). Question isn't whether shaped but which kind and whether we can choose what to keep.",
        },
      },
      questions: [
        {
          id: "ela9-u9-synthesis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMP1,
          stem: "What's the difference between comparison and synthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Synthesis is easier" },
              { id: "b", text: "Comparison is better" },
              {
                id: "c",
                text: "Comparison = similarities/differences; synthesis = new understanding",
              },
              { id: "d", text: "They're the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "New understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Comparison identifies similarities/differences; synthesis combines into new insight.",
                evidence: "synthesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Comparison = similarities/differences; synthesis = new understanding.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela9-u9-synthesis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMP2,
          stem: "Synthesize 'Inheritance' and 'Algorithm's Dream' — what's the new insight about identity?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement: "New understanding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both explore identity inheritance — family vs system.",
                evidence: "inheritance",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "New insight: identity is always inherited — question is which kind and whether we choose what to keep.",
                evidence: "insight",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis reveals pattern: all identity is shaped — agency is in selection, not origin.",
                evidence: "pattern",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Identity is always inherited — from family (watch, hands) or system (data profile). Agency isn't in origin but in selection — what we choose to keep or reject.",
            commonErrors: ["Just comparing without synthesizing."],
          },
        },
        {
          id: "ela9-u9-synthesis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMP1,
          stem: "Write a synthesis paragraph connecting 'Inheritance', 'Algorithm's Dream', and 'The Waiting Room' on the theme of identity and agency.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-text synthesis",
                statement: "Three texts.",
              },
              {
                kind: "skill",
                name: "Thematic integration",
                statement: "Identity + agency.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Inheritance: identity shaped by family — 'what I inherited and what I chose.'",
                evidence: "inheritance",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Algorithm: identity shaped by system — 'you are the product,' data profile imposed.",
                evidence: "algorithm",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Waiting room: identity tested by crisis — Marcus's self under medical uncertainty.",
                evidence: "waiting room",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: identity is negotiated between external shaping (family, system, crisis) and internal choice — agency is ongoing process.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Across these texts, identity emerges as negotiated terrain: Inheritance shows family shaping ('what I inherited and what I chose'), Algorithm's Dream shows system shaping ('you are the product'), Waiting Room shows crisis testing selfhood. Together they suggest identity isn't fixed but continuously negotiated between external forces and internal choice — agency is ongoing process, not state.'",
            commonErrors: [
              "Summarizing each text separately instead of synthesizing.",
            ],
          },
        },
        {
          id: "ela9-u9-synthesis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMP1,
          parts: [
            {
              label: "a",
              prompt: "Why is synthesis harder than comparison?",
              marks: 2,
            },
            { label: "b", prompt: "What does synthesis require?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis difficulty",
                statement: "Why harder.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Comparison = identifying similarities/differences; synthesis = creating new understanding — requires deeper analysis.",
                evidence: "harder",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Requires connecting insights across texts, finding patterns, developing new interpretation.",
                evidence: "requires",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Synthesis requires new understanding vs comparison's identification. (b) Connecting insights, finding patterns, developing new interpretation.",
            commonErrors: ["Thinking synthesis is just longer comparison."],
          },
        },
      ],
    },
    {
      id: "ela9-u9-integrated",
      title: "Integrated Literary Analysis",
      skill:
        "Integrate multiple analytical lenses — theme, character, structure, craft — in comprehensive literary analysis.",
      lesson: {
        sections: [
          {
            heading: "Integrated analysis",
            body: "Strong literary analysis integrates multiple lenses: 'Inheritance' theme (identity/inheritance) + character (father as both gift/burden) + structure (three stanzas progressing physical→emotional) + craft (repetition 'left me,' imagery watch/hands) = comprehensive understanding. Each lens alone is partial; together they reveal how form, content, and meaning intertwine.",
          },
          {
            heading: "Multi-lens approach",
            body: "Ask: What does text say (theme)? How does it say it (craft/structure)? Who says it (POV/narrator)? Why does it matter (significance)? 'The Waiting Room': theme (anxiety of uncertainty) + structure (slow pacing mirrors waiting) + POV (third limited, dramatic irony) + craft (sensory detail, foreshadowing) = complete analysis. Integration shows how choices serve meaning.",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple lenses",
            statement: "Theme + character + structure + craft.",
          },
          {
            name: "Integration = comprehensive",
            statement: "How choices serve meaning.",
          },
          { name: "Form + content + meaning", statement: "All intertwined." },
        ],
        workedExample: {
          problem:
            "Integrate analysis of 'Inheritance' across multiple lenses.",
          solution:
            "Theme (identity/inheritance) + character (father gift/burden) + structure (physical→emotional progression) + craft (repetition, imagery) = comprehensive understanding of how form serves meaning.",
        },
      },
      questions: [
        {
          id: "ela9-u9-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMP1,
          stem: "What does 'integrated literary analysis' mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Using multiple lenses — theme, character, structure, craft",
              },
              { id: "b", text: "Writing longer essays" },
              { id: "c", text: "Comparing multiple texts" },
              { id: "d", text: "Analyzing one aspect deeply" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrated = theme + character + structure + craft together, not just one lens.",
                evidence: "integrated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Using multiple lenses — theme, character, structure, craft.",
            commonErrors: ["Thinking integrated = comprehensive summary."],
          },
        },
        {
          id: "ela9-u9-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMP2,
          stem: "Identify two analytical lenses used in analyzing 'Inheritance'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical lenses",
                statement: "Different perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Theme lens: identity/inheritance — what text says.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure lens: three stanzas physical→emotional — how form mirrors meaning.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Craft lens: repetition 'left me,' imagery watch/hands — deliberate choices.",
                evidence: "craft",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Theme (identity/inheritance), structure (physical→emotional progression), craft (repetition, imagery).",
            commonErrors: ["Listing aspects without identifying as lenses."],
          },
        },
        {
          id: "ela9-u9-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMP1,
          stem: "Write an integrated analysis paragraph on 'The Waiting Room' using theme, structure, POV, and craft.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Theme: anxiety of uncertain waiting — mirrors life's unpredictability.",
                evidence: "theme",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: slow pacing mirrors anxious waiting; in medias res creates immediacy.",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "POV: third limited creates dramatic irony — reader sees more than Marcus.",
                evidence: "POV",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Craft: sensory detail ('fluorescent lights'), foreshadowing (father's death) serve theme.",
                evidence: "craft",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The Waiting Room integrates multiple lenses to explore anxiety of uncertainty: theme emerges through Marcus's anticipatory dread ('knowing and hearing are different things'); structure mirrors waiting through slow pacing and in medias res; POV creates dramatic irony (reader sees algorithm of fear Marcus doesn't); craft uses sensory detail and foreshadowing to make anxiety tangible. Together, form, perspective, and technique serve unified theme.'",
            commonErrors: [
              "Analyzing aspects separately instead of integrating.",
            ],
          },
        },
        {
          id: "ela9-u9-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMP1,
          parts: [
            {
              label: "a",
              prompt: "Name three analytical lenses for literary analysis.",
              marks: 2,
            },
            { label: "b", prompt: "Why integrate them?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical lenses",
                statement: "Different perspectives.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Theme, character, structure, POV, craft — any three.",
                evidence: "lenses",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Each alone is partial; together reveal how form, content, meaning intertwine.",
                evidence: "integrate",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Theme, character, structure, POV, craft — any three. (b) Each alone partial; together reveal how form/content/meaning intertwine.",
            commonErrors: ["Using lenses superficially without integration."],
          },
        },
      ],
    },
  ],
};
