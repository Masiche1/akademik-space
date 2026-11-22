import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const ORCHARD: TextExtract = {
  title: "Last Harvest",
  author: "Written for Akademik Space",
  text: "The orchard in October holds its breath,\nEach apple heavy on the bending bough;\nThe grass is gold with leaves that whisper death,\nAnd I have come to say goodbye somehow.\nMy father pruned these trees with patient hands\nAnd knew by heart which branches bend or break;\nHe mapped the rows like lines on foreign lands\nAnd walked each row before the light would wake.\nBut now the house is sold; the rows are mine\nFor one last day, and yet I am not sad:\nI pick one apple, bite it, sweet and fine,\nIt tastes of all he gave, and I am glad.\nLet others see an ending in the fall;\nI carry every seed, and that is all.",
  lineNumbers: true,
};

const LAUNDROMAT: TextExtract = {
  title: "Laundromat, Midnight",
  author: "Written for Akademik Space",
  text: "The dryers turn\ntheir windows of warm light\nand the clothes of strangers\ntumble together,\na red sock chasing a white shirt\naround and around,\nas if\nthe whole city\nwere learning\nhow to\nstay close.",
  lineNumbers: true,
};

const HOPE: TextExtract = {
  title: "'Hope' is the thing with feathers",
  author: "Emily Dickinson",
  text: "'Hope' is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI've heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.",
  lineNumbers: true,
};

const TWO_POEMS: TextExtract = {
  title: "Two poems about enduring",
  author: "Emily Dickinson; Written for Akademik Space",
  source:
    "Poem 1: Emily Dickinson, first stanza of 'Hope' is the thing with feathers. Poem 2: 'The Lamp' (original)",
  text: "Poem 1\n'Hope' is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nPoem 2: The Lamp\nOut on the point the lamp burns on,\na small, stubborn coin of gold,\nand all night long the black waves throw\ntheir weight against the stone.\nIt does not argue with the dark.\nIt does not ask the sea for peace.\nIt turns, and turns, and keeps its light\nfor ships it will never meet.",
};

export const lesson12: Lesson = {
  id: "ela10-u1-lesson-1-2",
  code: "1-2",
  title: "Poetry",
  goal: "I CAN analyze how poetic form and structure shape meaning, and trace imagery, symbolism, and extended metaphor to compare two poems on a shared theme.",
  standards: ["RL.9-10.5", "RL.9-10.2", "RL.9-10.4"],
  vocabulary: [
    {
      term: "Sonnet",
      definition:
        "A 14-line poem in iambic pentameter with a set rhyme scheme; the Shakespearean sonnet ends with a rhyming couplet.",
    },
    {
      term: "Volta",
      definition:
        "The turn in a poem, often at line 9 of a sonnet, where the thought, mood, or argument shifts.",
    },
    {
      term: "Enjambment",
      definition:
        "A sentence or phrase that runs over a line break without punctuation, pushing the reader on.",
    },
    {
      term: "Stanza",
      definition: "A group of lines in a poem, like a paragraph in prose.",
    },
    {
      term: "Free verse",
      definition:
        "Poetry with no regular rhyme scheme or meter, where line breaks and rhythm are chosen for effect.",
    },
    {
      term: "Extended metaphor",
      definition:
        "A comparison developed across several lines or a whole poem.",
    },
    {
      term: "Symbol",
      definition: "An object, image, or action that stands for a larger idea.",
    },
  ],
  concepts: [
    {
      id: "ela10-u1-poetic-form-structure",
      title: "Poetic form: sonnet, free verse, enjambment, stanza, volta",
      skill:
        "Explain how a poem's form and structural choices create and shift meaning.",
      lesson: {
        sections: [
          {
            heading: "Form as meaning",
            body: "A poet's form is a choice. A **sonnet** has 14 lines. In the Shakespearean pattern the rhyme scheme is ABAB CDCD EFEF GG: three quatrains develop an idea and a closing **couplet** sums it up or surprises. The **volta**, or turn, often arrives at line 9 and is signaled by a word such as 'But' or 'Yet'. **Free verse** has no fixed rhyme or meter, so every line break, space, and rhythm is a decision.",
          },
          {
            heading: "Line breaks and stanzas",
            body: "A line can be **end-stopped** (ending in punctuation, giving a pause) or **enjambed** (running on into the next line, giving momentum or suspense). Short lines slow the reader and spotlight single words. Stanzas group thoughts, and a stanza break works like a silence. When you analyze structure, always link the choice to its effect: do not just say 'there is enjambment'. Say what it makes the reader feel or notice at that point.",
          },
        ],
        keyFormulas: [
          {
            name: "Shakespearean sonnet",
            statement:
              "14 lines, ABAB CDCD EFEF GG, usually iambic pentameter, with a volta near line 9.",
          },
          {
            name: "Enjambment",
            statement:
              "A run-on line that creates momentum, suspense, or emphasis on the next line's opening word.",
          },
          {
            name: "Free verse",
            statement:
              "No set rhyme or meter; line breaks and white space shape meaning.",
          },
        ],
        workedExample: {
          problem:
            "How does the structure of 'Last Harvest' develop the speaker's attitude?",
          solution:
            "The poem is a Shakespearean sonnet, rhyming ABAB CDCD EFEF GG. The first two quatrains set an autumn mood of endings: the grass 'whisper[s] death' and the speaker has 'come to say goodbye', and then the father's careful work is described. The volta comes at line 9: 'But now the house is sold; the rows are mine'. The conjunction 'But' turns the poem from mourning toward acceptance, and the enjambment of 'mine / For one last day' carries the reader forward into that new attitude. The couplet closes with a confident statement, 'I carry every seed', which reframes the ending as continuity. The structure moves from grief to gratitude in the same order as the sonnet's argument.",
        },
      },
      questions: [
        {
          id: "ela10-u1-poetic-form-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: ORCHARD,
          stem: "At which line does the volta, or turn, occur in 'Last Harvest'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Line 5" },
              { id: "b", text: "Line 1" },
              { id: "c", text: "Line 9" },
              { id: "d", text: "Line 13" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Volta",
                statement:
                  "The turn in a sonnet usually comes at line 9, marked by a word such as 'But'.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Line 9 begins with 'But', turning the mood from mourning to acceptance.",
                evidence: "But now the house is sold",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Line 9. 'But' signals the shift from grief to acceptance. Line 13 begins the closing couplet, which concludes rather than turns.",
            commonErrors: [
              "Choosing line 13 because the couplet feels like a change, when it is a conclusion of the new mood.",
            ],
          },
        },
        {
          id: "ela10-u1-poetic-form-structure-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: LAUNDROMAT,
          stem: "Look at lines 7 to 11 of 'Laundromat, Midnight'. Explain the effect of the short lines and line breaks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Line breaks in free verse",
                statement:
                  "Short, enjambed lines slow the reader and emphasize each phrase.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The single line 'as if' creates a pause and prepares the reader for a comparison or surprise.",
                evidence: "as if",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Very short enjambed lines slow the reading, so each phrase is isolated and emphasized: the poem seems to be learning slowly, as the city is.",
                evidence: "were learning / how to",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The last short line puts the main idea alone at the end, giving the poem its emotional point.",
                evidence: "stay close",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "The short lines slow the reader down. 'as if' sits alone and creates a pause before the comparison. The enjambment of 'were learning / how to' makes each phrase hesitate, like someone learning, and the last short line, 'stay close', stands alone and gives the poem its emotional point.",
            commonErrors: [
              "Saying that the lines are short without explaining the effect.",
              "Treating free verse as having no structure.",
            ],
          },
        },
        {
          id: "ela10-u1-poetic-form-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: ORCHARD,
          stem: "How does the poet use the sonnet form, including its rhyme, volta, and closing couplet, to shape the meaning of 'Last Harvest'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Sonnet structure",
                statement:
                  "Quatrains develop ideas, the volta turns them, and the couplet concludes.",
              },
              {
                kind: "skill",
                name: "Form linked to effect",
                statement:
                  "Name each structural choice and explain what it adds to meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The opening quatrains build an autumn mood of endings and the father's careful work, establishing what is being lost.",
                evidence: "leaves that whisper death",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The volta at line 9 turns grief toward acceptance; the contrast word 'But' marks the new direction.",
                evidence: "But now the house is sold",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The rhyming couplet gives a neat, confident close, so the poem ends on continuity rather than loss.",
                evidence: "I carry every seed, and that is all.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(6),
            finalAnswer:
              "The poet uses the structure of the sonnet to move from grief to acceptance. The first eight lines build a mood of endings ('whisper death') and the father's care. The volta at line 9, 'But now the house is sold', turns the poem toward gratitude. The rhymed couplet, 'I carry every seed, and that is all', closes the poem with a firm, confident statement that loss is also continuity.",
            commonErrors: [
              "Identifying a sonnet without linking form to meaning.",
              "Missing the turn at line 9.",
            ],
          },
        },
        {
          id: "ela10-u1-poetic-form-structure-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: ORCHARD,
          stem: "Answer all parts of this question about 'Last Harvest'.",
          parts: [
            {
              label: "a",
              prompt:
                "State the number of lines in the poem and give the rhyme scheme of the first four lines.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how enjambment in lines 9 to 12 affects the way the reader experiences the speaker's change of mood.",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "Analyze how the poet uses structure, including the stanza pattern, the volta, and the final couplet, to develop the poem's central idea. Use evidence from across the poem.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Rhyme scheme",
                statement:
                  "Label end rhymes with letters: ABAB means lines 1 and 3 rhyme and lines 2 and 4 rhyme.",
              },
              {
                kind: "technique",
                name: "Enjambment",
                statement:
                  "A run-on line pushes the reader forward and links ideas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The poem has 14 lines.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning:
                  "The first four lines rhyme ABAB: breath and death; bough and somehow.",
                evidence: "breath ... death",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning:
                  "Recognizes that this is the pattern of a Shakespearean sonnet.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The sentence runs from line 9 into line 10, so the reader is carried across the break as the speaker moves from loss to a last day of ownership.",
                evidence: "the rows are mine / For one last day",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Lines 11 and 12 are joined by only a comma, so the act of biting the apple flows straight into the memory of the father, and action and feeling merge.",
                evidence: "sweet and fine, / It tastes of all he gave",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The momentum suggests the speaker's mood lifting toward gladness.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The first two quatrains develop an elegy: nature and the father's work as things being lost.",
                evidence: "I have come to say goodbye somehow",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The father's precise skills emphasize what the speaker inherited, preparing for the turn.",
                evidence: "knew by heart which branches bend or break",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "The volta turns the poem toward acceptance and the pleasure of the present.",
                evidence: "But now the house is sold",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The simple verbs of the third quatrain, pick and bite, ground the grief in a sensory moment.",
                evidence: "I pick one apple, bite it",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The couplet reframes ending as continuity, with the seed as a symbol of inheritance.",
                evidence: "I carry every seed",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: levels(10, "c"),
            finalAnswer:
              "(a) 14 lines; ABAB (breath/death, bough/somehow). (b) The sentence flows from 'mine' into 'For one last day' and from 'sweet and fine' into 'It tastes of all he gave', so the reader is carried from loss to gladness without a halt. (c) The first two quatrains build an elegy of endings and the father's skill; the volta at line 9 ('But now the house is sold') turns to acceptance; the third quatrain grounds this in a physical action; and the couplet makes the seed a symbol that loss is also inheritance. The structure therefore enacts the poem's central idea that endings carry things forward.",
            commonErrors: [
              "In (a), miscounting the lines or mislabelling the rhymes.",
              "In (b), defining enjambment without effect.",
              "In (c), describing the content stanza by stanza instead of analyzing structure.",
            ],
          },
        },
      ],
    },
    {
      id: "ela10-u1-imagery-extended-metaphor",
      title: "Imagery, symbolism, extended metaphor, and comparing poems",
      skill:
        "Trace imagery and extended metaphor through a poem and compare how two poems treat a shared theme.",
      lesson: {
        sections: [
          {
            heading: "Imagery, symbol, and extended metaphor",
            body: "**Imagery** is language that appeals to the senses. When images repeat or build, they create a pattern. A **symbol** stands for a larger idea (a lamp for guidance or hope). An **extended metaphor** develops one comparison through a poem: Dickinson compares hope to a bird and then keeps adding bird details, such as perching, singing, and keeping others warm. To analyze it, list the details, say what each adds to the comparison, and name the idea the whole image expresses.",
          },
          {
            heading: "Comparing two poems on one theme",
            body: "To compare, choose a shared theme, then compare **methods** as well as ideas: imagery, form, voice, and tone. Use comparison language such as 'whereas', 'similarly', and 'in contrast'. Give each poem equal weight, quote short phrases from both, and end with a judgment about what each poem adds to the theme. Do not just describe poem one and then poem two; weave them together point by point.",
          },
        ],
        keyFormulas: [
          {
            name: "Extended metaphor",
            statement:
              "One comparison developed through many details across several lines or the whole poem.",
          },
          {
            name: "Symbol",
            statement: "A concrete thing that represents an abstract idea.",
          },
          {
            name: "Point-by-point comparison",
            statement:
              "Take one aspect at a time and show how both poems handle it, using comparison words.",
          },
        ],
        workedExample: {
          problem:
            "How does Dickinson present hope in the first stanza of her poem?",
          solution:
            "Dickinson presents hope as a bird in an extended metaphor. Hope is 'the thing with feathers', a phrase that avoids naming the bird and so makes hope delicate and mysterious. It 'perches in the soul', which suggests that hope settles quietly inside a person and stays. It 'sings the tune without the words', implying that hope comforts without having to explain itself, and it 'never stops - at all', so hope is constant. The dashes slow the lines and create a gentle, insistent rhythm like the bird's song.",
        },
      },
      questions: [
        {
          id: "ela10-u1-imagery-extended-metaphor-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: HOPE,
          stem: "Which statement best describes the central comparison in Dickinson's poem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The soul is compared to a cold land." },
              {
                id: "b",
                text: "The speaker is compared to a bird that begs for crumbs.",
              },
              { id: "c", text: "Hope is compared to a storm at sea." },
              {
                id: "d",
                text: "Hope is compared to a bird that keeps singing through storms.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Extended metaphor",
                statement:
                  "Identify what is compared to what, then confirm with details across the poem.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Hope is the 'thing with feathers' that sings and is heard in the gale, so hope is the bird.",
                evidence: "'Hope' is the thing with feathers",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)**. Hope is the bird that sings in the gale. The storm and cold land are the hardships, and the bird never begs for a crumb, so (d) reverses the poem.",
            commonErrors: [
              "Confusing the storm, which is the test of hope, with hope itself.",
            ],
          },
        },
        {
          id: "ela10-u1-imagery-extended-metaphor-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: HOPE,
          stem: "Look at lines 9 to 12. What does the speaker suggest about hope when she says it 'never... asked a crumb - of me'? Use a quotation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Extending a metaphor",
                statement:
                  "Each bird detail adds a quality to hope; a crumb extends the image to what a bird might ask for.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A bird would normally ask for crumbs, so the detail extends the bird image to a final claim about hope.",
                evidence: "asked a crumb",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Hope gives without taking anything, showing it is generous and requires no payment.",
                evidence: "never - in Extremity",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Even at the extremes (the chillest land, the strangest sea), hope stays reliable, so the poem ends on trust in hope.",
                evidence: "in the chillest land",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "The speaker suggests that hope is generous and reliable. A bird might beg for a crumb, but hope 'never' did, even 'in Extremity', so it gives comfort without asking anything in return, in even the 'chillest land'.",
            commonErrors: [
              "Taking the crumb literally.",
              "Giving a quotation with no explanation.",
            ],
          },
        },
        {
          id: "ela10-u1-imagery-extended-metaphor-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: TWO_POEMS,
          stem: "Compare how the two poems present endurance. Refer to the imagery in both.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparison",
                statement:
                  "Compare ideas and methods point by point, using both poems.",
              },
              {
                kind: "technique",
                name: "Imagery and symbol",
                statement:
                  "Each poem uses a small, steady object to symbolize endurance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Poem 1 presents hope as a bird that is constant; 'never stops' shows that endurance is unending.",
                evidence: "never stops - at all",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Poem 2 presents endurance as a small lamp against enormous waves; 'stubborn coin of gold' shows persistence in the face of force.",
                evidence: "a small, stubborn coin of gold",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Comparison: both use small, fragile things to defy larger forces, but the bird is internal, in the soul, whereas the lamp is outward, serving ships.",
                evidence: "keeps its light / for ships it will never meet",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels(6),
            finalAnswer:
              "Both poems present endurance through a small object that refuses to give up. Dickinson's bird 'never stops - at all' and lives 'in the soul', so endurance is inner and constant. In 'The Lamp', a 'small, stubborn coin of gold' faces 'the black waves', so endurance is outward and defiant, and the lamp 'keeps its light / for ships it will never meet', serving others. Whereas the bird comforts the self, the lamp protects strangers.",
            commonErrors: [
              "Describing each poem separately without comparing.",
              "Comparing only ideas and ignoring imagery.",
            ],
          },
        },
        {
          id: "ela10-u1-imagery-extended-metaphor-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: TWO_POEMS,
          stem: "Answer all parts of this question about the two poems.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the main image used in each poem and say what each symbolizes.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the speaker's attitude to hardship differs in the two poems. Use a quotation from each.",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "Compare how the two poets use imagery and form to develop a shared theme. Refer closely to both poems.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative analysis",
                statement:
                  "Treat both poems together, point by point, and compare methods as well as meaning.",
              },
              {
                kind: "technique",
                name: "Symbol",
                statement:
                  "A concrete image represents an abstract idea such as hope or endurance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Poem 1: a bird, symbolizing hope.",
                evidence: "the thing with feathers",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "Poem 2: a lamp, symbolizing guidance and steadfastness.",
                evidence: "the lamp burns on",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "Shows that both symbolize persistence under pressure.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "In Poem 1, hardship is treated gently: hope simply 'sings the tune', which suggests quiet confidence.",
                evidence: "sings the tune without the words",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "In Poem 2, hardship is a direct struggle: waves 'throw their weight against the stone', so endurance is shown as resistance.",
                evidence: "their weight against the stone",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Draws the contrast between a soothing and a defiant attitude.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Both use extended metaphors from nature and everyday objects.",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Dickinson's dashes slow the lines and create a gentle, insistent rhythm like song.",
                evidence: "And never stops - at all -",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The Lamp's free verse and repeated 'It does not' create a calm, steady tone like the beam.",
                evidence: "It does not argue with the dark.",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Repetition in 'turns, and turns' enacts the lamp's endless turning.",
                evidence: "It turns, and turns",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Judgment: Dickinson locates endurance in the self, while the second poem locates it in service to others, so together they widen the theme.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels(10, "c"),
            finalAnswer:
              "(a) A bird (hope) and a lamp (steadfast guidance). (b) In Poem 1 hope 'sings the tune', calm and gentle; in Poem 2 the lamp stands against waves that 'throw their weight against the stone', so endurance is resistance. (c) Both use small objects as extended metaphors for persistence. Dickinson's dashes create a gentle, song-like rhythm in 'never stops - at all', while the second poem uses free verse and calm repeated negatives, 'It does not argue', and the doubled 'turns, and turns' to imitate the lamp's steady beam. Dickinson places endurance inside the soul; the lamp's light serves strangers, so together the poems show endurance as both personal and generous.",
            commonErrors: [
              "In (a), naming images without symbolism.",
              "In (b), writing about one poem only.",
              "In (c), describing the poems separately without comparative language.",
            ],
          },
        },
      ],
    },
  ],
};
