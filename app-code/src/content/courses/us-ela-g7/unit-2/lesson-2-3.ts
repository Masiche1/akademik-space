import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const REEF: TextExtract = {
  title: "The Fragile Reef",
  author: "Written for Akademik Space",
  text: "A coral reef looks like stone, but it is alive. Each reef is built by tiny animals called polyps, which form a hard skeleton around themselves. Reefs are home to about a quarter of all ocean species, so scientists call them the 'rainforests of the sea'. Yet reefs are extremely fragile. A rise of only two degrees in water temperature can cause bleaching, in which polyps expel the colorful algae that feed them and turn ghostly white. Unless the water cools quickly, the coral starves. Marine biologists, who study ocean life, now use satellites to monitor temperatures and warn reef managers before a bleaching event begins.",
};

const RIVER_A: TextExtract = {
  title: "Passage A: A River Reborn",
  author: "Written for Akademik Space",
  text: "For fifty years the Marlow River ran brown and foul. Factories poured waste into it, and by 1975 not a single fish could be found below the old mill. Then the town passed strict rules and spent millions on cleaning the water. Today children swim near the old mill, and herons stand in the shallows. The Marlow's recovery proves that a community determined to act can undo even terrible damage.",
};

const RIVER_B: TextExtract = {
  title: "Passage B: The Marlow Revisited",
  author: "Written for Akademik Space",
  text: "Visitors admire the clear water of the Marlow River, and they have good reason to. Fish returned within a decade of the cleanup. Yet a scientist who has measured the river for twenty years offers a warning. Some chemicals from the old factories still lie buried in the mud, and the river's insects have not fully recovered. The Marlow, she says, is healing, not healed, and the town must keep testing the water if it wants the recovery to last.",
};

export const lesson23: Lesson = {
  id: "ela7-u2-lesson-2-3",
  code: "2-3",
  title: "Words and Comparison",
  goal: "I CAN figure out word meanings using context and Greek and Latin roots, and compare how two authors present the same topic.",
  standards: ["L.7.4", "RI.7.9"],
  vocabulary: [
    {
      term: "Context clue",
      definition:
        "A hint in the surrounding words or sentences that helps reveal the meaning of an unfamiliar word.",
    },
    {
      term: "Root",
      definition:
        "The central part of a word that carries its core meaning, often from Greek or Latin.",
    },
    {
      term: "Prefix",
      definition:
        "A word part added to the beginning of a word that changes its meaning.",
    },
    {
      term: "Suffix",
      definition:
        "A word part added to the end of a word that changes its meaning or part of speech.",
    },
    {
      term: "Emphasis",
      definition: "The details or ideas an author stresses most.",
    },
    {
      term: "Interpretation",
      definition:
        "A particular way of understanding facts, which may differ between authors.",
    },
  ],
  concepts: [
    {
      id: "ela7-u2-word-meaning",
      title: "Word meaning from context and roots",
      skill:
        "Use context clues and Greek and Latin roots, prefixes, and suffixes to work out the meaning of unfamiliar words.",
      lesson: {
        sections: [
          {
            heading: "Context clues",
            body: "When you meet an unknown word, read the sentences around it. Authors often give a **definition** ('marine biologists, who study ocean life'), a **synonym** or **restatement**, an **example**, or a **contrast** ('Yet reefs are extremely fragile'). Replace the word with your guess and check that the sentence still makes sense.",
          },
          {
            heading: "Roots, prefixes, and suffixes",
            body: "Many English words are built from Greek and Latin parts. The root **bio** means life, **therm** means heat, **aqua** means water, and **spect** means to look. The prefix **un-** means not, and **re-** means again. The suffix **-ology** means the study of. So 'biology' is the study of life, and 'thermometer' measures heat. Use word parts together with context, and check a dictionary when a word matters to your answer.",
          },
        ],
        keyFormulas: [
          {
            name: "Context clue",
            statement:
              "A definition, restatement, example, or contrast near an unknown word that reveals its meaning.",
          },
          {
            name: "Greek and Latin roots",
            statement:
              "bio = life; therm = heat; aqua = water; spect = look; -ology = the study of.",
          },
          {
            name: "Check the meaning",
            statement:
              "Substitute your meaning into the sentence to see whether it fits.",
          },
        ],
        workedExample: {
          problem:
            "In 'The Fragile Reef', what does the word 'bleaching' mean? Use a context clue. (2 marks)",
          solution:
            "Bleaching means losing color. The sentence explains that polyps expel the colorful algae and 'turn ghostly white', so the coral loses its color. This is a restatement clue that follows the word directly. Substituting 'losing color' into the sentence makes sense.",
        },
      },
      questions: [
        {
          id: "ela7-u2-word-meaning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: REEF,
          stem: "The text says 'Marine biologists, who study ocean life'. What does the word 'biologists' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "People who study living things" },
              { id: "b", text: "People who measure heat" },
              { id: "c", text: "People who build boats" },
              { id: "d", text: "People who repair reefs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Root bio",
                statement:
                  "The Greek root bio means life; -ologist names a person who studies something.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The root bio means life, and the definition in the sentence says they 'study ocean life'.",
                evidence: "who study ocean life",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** The definition clue and the root bio both point to the study of living things. Therm, not bio, relates to heat.",
            commonErrors: [
              "Choosing 'measure heat', confusing bio with therm.",
            ],
          },
        },
        {
          id: "ela7-u2-word-meaning-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: REEF,
          stem: "What does the word 'fragile' most likely mean in this sentence: 'Yet reefs are extremely fragile'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Easily damaged" },
              { id: "b", text: "Hard to find" },
              { id: "c", text: "Very large" },
              { id: "d", text: "Brightly colored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Contrast clue",
                statement:
                  "Words such as 'Yet' signal that the next idea contrasts with the one before.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Yet' contrasts the stone-like look of a reef with its real weakness.",
                evidence: "looks like stone, but it is alive",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The example that a two-degree rise can cause bleaching shows how easily reefs are harmed.",
                evidence: "A rise of only two degrees",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(a)** The contrast with stone and the example of a small temperature rise causing damage show that reefs are easily damaged.",
            commonErrors: [
              "Choosing 'brightly colored' because color is mentioned later in the passage.",
            ],
          },
        },
        {
          id: "ela7-u2-word-meaning-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: REEF,
          stem: "Explain what the word 'monitor' means in 'satellites to monitor temperatures'. Use one context clue and one word part or related word to support your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clues",
                statement: "Use the surrounding sentence to test a meaning.",
              },
              {
                kind: "technique",
                name: "Word parts",
                statement: "Related words and roots can confirm a meaning.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Monitor means to watch or check something over time.",
                evidence: "use satellites to monitor temperatures",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The context clue is that managers are warned before bleaching begins, so the temperatures must be watched continuously.",
                evidence: "warn reef managers before a bleaching event begins",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "A related word such as 'monitor' on a screen, which watches a view, supports the meaning.",
                evidence: "monitor temperatures",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Checks the meaning by substituting 'keep watch on' into the sentence.",
                evidence: "satellites to monitor temperatures",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "'Monitor' means to watch or keep track of something. The clue is that reef managers are warned before bleaching begins, which only works if the temperatures are watched all the time. Replacing it with 'keep watch on' makes sense in the sentence.",
            commonErrors: [
              "Giving a meaning but no clue.",
              "Choosing a meaning that does not fit the sentence.",
            ],
          },
        },
        {
          id: "ela7-u2-word-meaning-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: REEF,
          stem: "Answer all parts of this question about 'The Fragile Reef'.",
          parts: [
            {
              label: "a",
              prompt:
                "What does the word 'expel' mean in 'polyps expel the colorful algae'? Give the clue that helps you.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "The suffix -ology means 'the study of'. Explain what the word 'biology' means using its parts, and link it to the passage.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Explain how the author's word choices in the passage, such as 'fragile', 'ghostly', and 'starves', build a sense of danger for the reef.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context and word parts",
                statement: "Combine clues with roots to confirm meaning.",
              },
              {
                kind: "technique",
                name: "Connotation",
                statement:
                  "Words carry feelings beyond their dictionary meaning.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expel means to push out or force out.",
                evidence: "polyps expel the colorful algae",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning:
                  "The clue is that without the algae the coral turns white, which shows the algae have left.",
                evidence: "turn ghostly white",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "Bio means life and -ology means the study of, so biology is the study of life.",
                evidence: "Marine biologists, who study ocean life",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "In the passage, marine biologists study ocean life such as reefs and polyps.",
                evidence: "Marine biologists",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "'Fragile' suggests easily broken, making the reef seem delicate.",
                evidence: "extremely fragile",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "'Ghostly' has connotations of death, suggesting that the bleached coral is dying.",
                evidence: "turn ghostly white",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "'Starves' is a harsh word that makes the threat painful and urgent.",
                evidence: "the coral starves",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(6, [6, 4, 2], "c"),
            finalAnswer:
              "(a) Expel means to push out; the coral turns white because the algae are gone. (b) Bio means life and -ology means the study of, so biology is the study of life, which is what marine biologists do for ocean life. (c) 'Fragile' makes the reef seem delicate, 'ghostly' suggests death, and 'starves' is harsh and urgent, so together they build a sense of danger.",
            commonErrors: [
              "Giving a meaning with no clue.",
              "In (c), naming words without explaining their feelings or effect.",
            ],
          },
        },
      ],
    },
    {
      id: "ela7-u2-comparing-authors",
      title: "Comparing two authors on one topic",
      skill:
        "Analyze how two authors present the same topic by emphasizing different facts or interpreting the same facts differently.",
      lesson: {
        sections: [
          {
            heading: "Same topic, different presentation",
            body: "Two authors can write about the same topic and still leave readers with different impressions. They may **emphasize different facts**, such as one author stressing success and another stressing a remaining problem. They may also **interpret the same facts differently**. Begin by stating what both texts agree on, then ask what each author stresses and what each leaves out.",
          },
          {
            heading: "Writing a comparison",
            body: "Use comparing language: 'both', 'whereas', 'in contrast', 'while'. Give a short quotation from each text and say what it shows about the author's emphasis or interpretation. Avoid writing about one text and then the other without linking them. Finish with a sentence that explains why the difference matters to the reader.",
          },
        ],
        keyFormulas: [
          {
            name: "Emphasis",
            statement: "The facts or ideas an author gives the most attention.",
          },
          {
            name: "Interpretation",
            statement:
              "What an author concludes from the facts, which may differ between authors.",
          },
          {
            name: "Comparison language",
            statement: "both, similarly, whereas, while, in contrast, however.",
          },
        ],
        workedExample: {
          problem:
            "How do Passage A and Passage B present the recovery of the Marlow River differently? (3 marks)",
          solution:
            "Both passages agree that the river has improved and that fish returned. Passage A emphasizes success, claiming that the recovery 'proves' a determined community can 'undo even terrible damage'. Passage B, in contrast, emphasizes what remains, saying the river is 'healing, not healed' because chemicals are still buried in the mud. Passage A treats the river as a victory, whereas Passage B treats it as unfinished work.",
        },
      },
      questions: [
        {
          id: "ela7-u2-comparing-authors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: RIVER_A,
          stem: "What does Passage A mainly emphasize about the Marlow River?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The river's insects have not recovered." },
              { id: "b", text: "Chemicals remain buried in the mud." },
              {
                id: "c",
                text: "The recovery shows what a determined community can achieve.",
              },
              {
                id: "d",
                text: "A scientist has measured the river for twenty years.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying emphasis",
                statement:
                  "The emphasis is shown by the conclusion the author draws.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The final sentence states a hopeful conclusion about what a community can do.",
                evidence:
                  "a community determined to act can undo even terrible damage",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Passage A stresses success. Choices (b), (c), and (d) come from Passage B.",
            commonErrors: ["Choosing details from the other passage."],
          },
        },
        {
          id: "ela7-u2-comparing-authors-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: RIVER_B,
          stem: "Which statement best describes the difference between the two passages?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Both passages agree the river improved, but Passage B stresses problems that remain.",
              },
              {
                id: "b",
                text: "Passage A says the river is polluted, and Passage B says it is clean.",
              },
              { id: "c", text: "Passage B denies that any fish returned." },
              { id: "d", text: "Passage A is about a different river." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing emphasis",
                statement:
                  "Find what the texts agree on, then what each stresses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both passages say fish came back and the water improved.",
                evidence: "Fish returned within a decade",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Passage B adds that buried chemicals mean the work is unfinished.",
                evidence: "healing, not healed",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(a)** Both agree on the improvement; Passage B emphasizes what remains to be done. Choice (c) is wrong because Passage B states that fish returned.",
            commonErrors: [
              "Thinking the passages contradict each other on the facts.",
            ],
          },
        },
        {
          id: "ela7-u2-comparing-authors-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: RIVER_B,
          stem: "Compare how Passage A and Passage B present the recovery of the Marlow River. Use a short quotation from each passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparison",
                statement:
                  "Link both texts with comparing language and evidence from each.",
              },
              {
                kind: "technique",
                name: "Emphasis",
                statement:
                  "Different authors can stress different facts about one topic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identifies what both share: the river has improved and wildlife has returned.",
                evidence: "Fish returned within a decade",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Passage A emphasizes success and community achievement.",
                evidence: "proves that a community determined to act",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Passage B emphasizes remaining danger and the need for continued testing.",
                evidence: "healing, not healed",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: rubric(6, [6, 4, 2]),
            finalAnswer:
              "Both passages agree that the Marlow River has recovered and that fish have returned. However, Passage A emphasizes success, claiming the recovery 'proves' what a determined community can do, whereas Passage B stresses what remains, calling the river 'healing, not healed' and urging more testing. Passage A celebrates, while Passage B warns.",
            commonErrors: [
              "Describing each passage separately without comparing.",
              "Using no quotations.",
            ],
          },
        },
        {
          id: "ela7-u2-comparing-authors-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: RIVER_B,
          stem: "Answer all parts of this question about the two passages on the Marlow River.",
          parts: [
            {
              label: "a",
              prompt: "Give two facts on which both passages agree.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the details in Passage B change the impression given by Passage A.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Compare how the two authors use language and choice of evidence to present the recovery of the river. Which presentation is more balanced? Explain your view.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis",
                statement:
                  "Combine information from two texts to reach a fuller understanding.",
              },
              {
                kind: "technique",
                name: "Language and bias",
                statement:
                  "Strong words and selective facts shape the impression a text gives.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Fish returned to the river.",
                evidence: "Fish returned within a decade",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning: "The water is now clear and clean enough to enjoy.",
                evidence: "clear water",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Passage A suggests the damage has been undone.",
                evidence: "undo even terrible damage",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Passage B shows pollution remains in the mud, so the recovery is incomplete.",
                evidence:
                  "Some chemicals from the old factories still lie buried in the mud",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Passage A uses strong, hopeful words that celebrate success.",
                evidence: "proves",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Passage A gives vivid before-and-after images, such as herons and children, to create a happy ending.",
                evidence: "herons stand in the shallows",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Passage B relies on an expert who has measured the river for twenty years, which gives credible evidence.",
                evidence:
                  "a scientist who has measured the river for twenty years",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Passage B uses a balanced phrase, acknowledging success and remaining problems, so it is the more balanced presentation.",
                evidence: "healing, not healed",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Judgment: the more balanced text is Passage B, supported by evidence from both passages, though Passage A is more inspiring.",
                evidence: "the town must keep testing the water",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: rubric(10, [9, 7, 4], "c"),
            finalAnswer:
              "(a) Fish returned and the water is clear. (b) Passage A suggests the damage is undone, but Passage B shows chemicals remain in the mud, so the recovery is unfinished. (c) Passage A uses hopeful, celebratory language ('proves') and vivid images of herons and swimmers, while Passage B relies on a scientist's twenty years of measurements and the balanced phrase 'healing, not healed'. Passage B is more balanced because it recognizes both progress and remaining risk, although Passage A is more inspiring.",
            commonErrors: [
              "In (a), giving a fact that appears in only one passage.",
              "In (c), choosing a presentation without explaining why.",
            ],
          },
        },
      ],
    },
  ],
};
