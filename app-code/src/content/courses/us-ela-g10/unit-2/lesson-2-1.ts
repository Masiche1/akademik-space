import type { Lesson, TextExtract } from "../../../types.ts";
import { rubric } from "./levels.ts";

const FLOOD: TextExtract = {
  title: "Two Accounts of the Calder Valley Flood (fictional)",
  author: "Written for Akademik Space",
  source: "An invented event, told as a print article and as a documentary",
  text: "ACCOUNT 1: Print article, 'Flood Takes Calder Valley by Night'\n\nAt 2:10 a.m. on March 14, 1936, the Harlan Dam on the Calder River gave way. Within forty minutes, a wall of water had swept through the village of Dunmore, destroying 61 homes and killing 19 residents. Engineers later found that the dam's earthen core had been weakened by weeks of heavy rain and had not been inspected since its construction in 1902. A state investigation concluded that the disaster was preventable.\n\nACCOUNT 2: Documentary, narration and scene notes\n\n[Scene: a slow pan across a muddy field of splintered boards. A church bell is heard, faintly.]\nNarrator: 'Nobody in Dunmore heard the dam break. Marta Ilves, then eleven, woke to the sound of her dog barking at the door.'\n[Scene: an archival photograph of a girl in a wet coat. Music: a single cello.]\nMarta (interview, age 85): 'The water came up the stairs one step at a time. I counted them.'\n[Scene: a ruined kitchen table with one cup still on it.]\nNarrator: 'Nineteen people did not wake up at all.'",
};

const THEORY: TextExtract = {
  title: "What Scientists Mean by 'Theory'",
  author: "Written for Akademik Space",
  text: "In everyday conversation, to call an idea 'just a theory' is to dismiss it as a guess. Scientists use the word very differently. In science, a theory is a well-tested explanation that ties together many observations and has survived repeated attempts to prove it wrong.\n\nThe theory of plate tectonics, for example, explains why earthquakes cluster along certain lines, why mountain ranges rise, and why the coastlines of South America and Africa seem to fit together like torn paper. No single experiment 'proves' such a theory. Instead, evidence accumulates until doubting it becomes unreasonable.\n\nA hypothesis, by contrast, is a narrower, testable prediction. A geologist might hypothesize that rocks on both sides of the Atlantic share an ancient origin, then search for matching minerals to test the idea. If the minerals match, the hypothesis gains support; if they do not, it is revised or abandoned.\n\nThe confusion matters because it shapes public debate. When a listener hears 'only a theory,' some of the strongest explanations in science are made to sound like the weakest. Careful writers therefore choose their terms with care, saying 'well-supported explanation' when they mean what scientists mean, and reserving 'guess' for guesses.",
};

export const lesson21: Lesson = {
  id: "ela10-u2-lesson-2-1",
  code: "2-1",
  title: "Analyzing Accounts",
  goal: "I CAN analyze how a subject is told in different mediums, and explain how precise and technical word choices refine an author's ideas in science and history texts.",
  standards: ["RI.9-10.7", "RI.9-10.4", "L.9-10.4"],
  vocabulary: [
    {
      term: "Medium",
      definition:
        "The form through which a message is delivered, such as a print article, a documentary film, a podcast, or a photograph.",
    },
    {
      term: "Emphasis",
      definition:
        "The extra attention a text gives to some details, so that they stand out more than others.",
    },
    {
      term: "Technical term",
      definition:
        "A word with a precise meaning in a specific field, such as science or history, which may differ from its everyday meaning.",
    },
    {
      term: "Connotation",
      definition:
        "The feelings or ideas a word suggests beyond its dictionary definition.",
    },
    {
      term: "Refine",
      definition:
        "To make an idea more exact by adding detail, qualification, or a clearer definition.",
    },
    {
      term: "Archival",
      definition:
        "Taken from old records, photographs, or film kept as historical evidence.",
    },
  ],
  concepts: [
    {
      id: "ela10-u2-medium-comparison",
      title: "One subject, different mediums",
      skill:
        "Analyze the representation of a subject in two different mediums and decide which details each emphasizes, includes, or leaves out.",
      lesson: {
        sections: [
          {
            heading: "Every medium makes choices",
            body: "A print article can give dates, numbers, causes, and sources in a compact space. A documentary can add moving images, archival photographs, music, and the voices of witnesses. Neither version shows everything. Each medium **emphasizes** what it does best and leaves out what it cannot easily show. Your job is to notice what each version includes, what it omits, and why.",
          },
          {
            heading: "How to compare two accounts",
            body: "Work in three steps. First, list the key details in each account. Second, mark the details that appear in only one account. Third, explain the effect of the difference on the audience: what do they understand, feel, or believe because of what was included? Describe non-verbal choices, such as music or an image, as carefully as you would describe word choice.",
          },
        ],
        keyFormulas: [
          {
            name: "Emphasis",
            statement:
              "Details given the most space, repetition, or striking presentation are the ones the account wants you to remember.",
          },
          {
            name: "Medium and purpose",
            statement:
              "A print article often aims to inform with evidence; a documentary often aims to make viewers feel as well as understand.",
          },
          {
            name: "Comparison frame",
            statement:
              "Same in both, only in A, only in B, and the effect of each difference.",
          },
        ],
        workedExample: {
          problem:
            "In the two accounts of the Calder Valley flood, which one gives more attention to causes, and which to personal experience? Explain with one detail from each. (4 marks)",
          solution:
            "The print article gives more attention to causes. It reports that the dam's 'earthen core had been weakened' by rain and 'had not been inspected since its construction in 1902', and it ends with the investigation's conclusion that the disaster was preventable. The documentary gives more attention to personal experience: Marta Ilves, interviewed at age 85, says 'The water came up the stairs one step at a time. I counted them.' The print version helps readers understand why the flood happened; the documentary helps viewers feel what it was like to live through it.",
        },
      },
      questions: [
        {
          id: "ela10-u2-medium-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FLOOD,
          stem: "Which detail appears in the print article but NOT in the documentary excerpt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nineteen people died." },
              { id: "b", text: "A church bell can be heard." },
              { id: "c", text: "Marta counted the stairs as the water rose." },
              {
                id: "d",
                text: "The dam's core had not been inspected since it was built.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing details",
                statement:
                  "Check each detail against both accounts before choosing.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only the print article reports the cause of the failure and the lack of inspection.",
                evidence:
                  "had not been inspected since its construction in 1902",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** The inspection history appears only in the print article. The deaths appear in both, while the stairs and the church bell appear only in the documentary.",
            commonErrors: [
              "Choosing (b) without noticing that the narrator also gives the number of deaths.",
            ],
          },
        },
        {
          id: "ela10-u2-medium-comparison-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: FLOOD,
          stem: "What does the documentary emphasize more strongly than the print article?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The engineering errors that caused the dam to fail",
              },
              {
                id: "b",
                text: "The personal, emotional experience of a survivor",
              },
              { id: "c", text: "The exact time and date of the disaster" },
              {
                id: "d",
                text: "The legal conclusions of the state investigation",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Emphasis",
                statement:
                  "The details a text spends the most attention on show what it values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The documentary centers on one survivor, Marta, and gives her a voice through an interview.",
                evidence: "Marta (interview, age 85)",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Its images and sound, such as the cello and the single cup, aim at feeling rather than explanation.",
                evidence: "a ruined kitchen table with one cup still on it",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** The documentary focuses on a survivor's experience. The causes, the investigation, and the exact date are in the print article only.",
            commonErrors: [
              "Choosing (d): the excerpt of the documentary gives no date or time.",
            ],
          },
        },
        {
          id: "ela10-u2-medium-comparison-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FLOOD,
          stem: "Explain how the print article and the documentary differ in what they emphasize about the flood. Support your answer with at least one detail from each account.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing mediums",
                statement:
                  "Identify what each account emphasizes and explain the effect of that choice.",
              },
              {
                kind: "convention",
                name: "Print news writing",
                statement:
                  "Print articles lead with facts, figures, and causes, and report official findings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The print article emphasizes facts, damage, and cause. It gives exact times, numbers, and the finding that the disaster was preventable, so readers understand responsibility.",
                evidence: "destroying 61 homes and killing 19 residents",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The documentary emphasizes one person's experience. A single witness and a vivid, small detail make the disaster personal.",
                evidence: "I counted them",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "The difference reflects each medium's strengths: print compresses evidence, while film uses sound, image, and an interview to create emotion. The documentary does not mention the cause at all.",
                evidence: "Music: a single cello",
                marks: 2,
                markCode: "AO2",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The print article stresses facts and responsibility: it gives the time, the number of homes destroyed and lives lost, and the finding that the disaster was 'preventable'. The documentary instead stresses human experience. It builds its account around Marta, whose memory of counting the stairs makes the flood intimate, and it uses music and images to create feeling. Each medium plays to its strengths, but the documentary leaves out the cause entirely, so the two accounts need to be read together for a complete picture.",
            commonErrors: [
              "Describing both accounts separately without saying how they differ.",
              "Saying one is 'better' without explaining what each emphasizes.",
            ],
          },
        },
        {
          id: "ela10-u2-medium-comparison-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: FLOOD,
          stem: "Answer all parts of this question about the two accounts of the Calder Valley flood.",
          parts: [
            {
              label: "a",
              prompt:
                "Give two facts that appear in the print article but not in the documentary excerpt.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the documentary uses images and sound, not only words, to create emotion.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Compare how the two accounts present the number of people who died.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Which account would better help a student understand why the flood happened, and which would better help them understand how it felt? Evaluate the strengths and limits of each medium.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing mediums",
                statement:
                  "Identify what each account includes and omits and explain the effect.",
              },
              {
                kind: "technique",
                name: "Non-verbal choices",
                statement:
                  "Music, images, and silence can carry meaning just as word choice does.",
              },
              {
                kind: "skill",
                name: "Evaluating",
                statement:
                  "Make a judgment and support it with reasons that mention both strengths and limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "The number of homes destroyed is reported only in print.",
                evidence: "destroying 61 homes",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "The weakened core, the missing inspection, or the state investigation's conclusion appears only in print.",
                evidence:
                  "A state investigation concluded that the disaster was preventable",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The photograph of a girl in a wet coat and the single cello create a quiet, sorrowful mood and invite sympathy for the child Marta once was.",
                evidence:
                  "an archival photograph of a girl in a wet coat. Music: a single cello",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning:
                  "The ruined table with one cup still on it suggests an ordinary life interrupted, letting the viewer imagine the loss without a statement.",
                evidence: "a ruined kitchen table with one cup still on it",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The print article gives the number as a flat statistic next to property damage, treating the deaths as a fact to report.",
                evidence: "killing 19 residents",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The documentary uses a short, slow sentence and a gentle euphemism, 'did not wake up at all', that makes the deaths haunting rather than statistical.",
                evidence: "Nineteen people did not wake up at all",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "Both give the same number, but the difference shows each medium's purpose: print informs briefly; the documentary wants the audience to feel the weight of the loss.",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "The print article better explains why: it identifies the weakened earthen core, the lack of inspection, and the finding of preventability.",
                evidence:
                  "had not been inspected since its construction in 1902",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "The documentary better conveys how it felt, through Marta's memory and the sounds and images, although it gives no cause and relies on one witness's recollection decades later.",
                evidence: "The water came up the stairs one step at a time",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "A balanced judgment: each medium is partial, so a student would learn most by combining them, using print for causes and film for human impact.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) 61 homes were destroyed; the dam's core was weakened and uninspected, and a state investigation called the disaster preventable. (b) The photograph and cello set a mournful mood, and the ruined table with a single cup suggests an ordinary life interrupted. (c) Print states '19 residents' as a statistic; the documentary says 'Nineteen people did not wake up at all', a slow, euphemistic line that makes the number a loss. (d) Print best explains why; the documentary best conveys how it felt, though it omits causes and depends on one memory. Combining them gives the fullest understanding.",
            commonErrors: [
              "In (c), saying the numbers are different when both give 19.",
              "In (d), judging by personal preference instead of by what each medium can show.",
              "In (b), describing the images without explaining the feeling they create.",
            ],
            examinerNote:
              "Reward any reasoned judgment in (d) that refers to strengths and limits of both mediums.",
          },
        },
      ],
    },
    {
      id: "ela10-u2-technical-word-choice",
      title: "Technical meanings and word choice",
      skill:
        "Determine how an author uses and refines the meaning of key terms, and how precise word choice shapes ideas in a science or history text.",
      lesson: {
        sections: [
          {
            heading: "Words with specialist meanings",
            body: "Many words mean one thing in daily life and another in a field of study. In science, 'theory' means a well-tested explanation, not a guess. In history, a 'revolution' means a fundamental change in power, not just any change. When a text uses a **technical term**, look for a definition, a contrast, or an example that tells you the exact meaning. Do not substitute the everyday meaning.",
          },
          {
            heading: "How authors refine meaning",
            body: "Authors refine an idea by defining a term, contrasting it with a similar term, giving an example, or choosing words with a particular **connotation**. A comparison such as 'fit together like torn paper' makes an abstract idea concrete. A word such as 'dismiss' or 'accumulates' can signal an attitude or a process. To analyze word choice, quote the word, state its meaning in context, and explain what it adds to the author's idea.",
          },
        ],
        keyFormulas: [
          {
            name: "Context clues",
            statement:
              "Definitions, contrasts, examples, and restatements near a word often reveal its technical meaning.",
          },
          {
            name: "Technical vs everyday",
            statement:
              "Check whether a familiar word has a specialized meaning in the subject being discussed.",
          },
          {
            name: "Word-choice analysis",
            statement:
              "Quote the word, give its meaning in context, and explain the idea or tone it contributes.",
          },
        ],
        workedExample: {
          problem:
            "How does the author of 'What Scientists Mean by Theory' make the technical meaning of 'theory' clear? (4 marks)",
          solution:
            "The author first contrasts the everyday sense, 'just a theory', which means 'a guess', with the scientific sense: 'a well-tested explanation that ties together many observations'. The author then gives a concrete example, plate tectonics, which explains earthquakes, mountains, and matching coastlines. Finally, the verb 'accumulates' in 'evidence accumulates until doubting it becomes unreasonable' shows that a theory gains strength gradually, not through one proof. Contrast, example, and precise wording together refine a vague word into an exact one.",
        },
      },
      questions: [
        {
          id: "ela10-u2-technical-word-choice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: THEORY,
          stem: "As used in the first paragraph, the word 'dismiss' most nearly means",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "to reject as unimportant or untrue" },
              { id: "b", text: "to send away from a place" },
              { id: "c", text: "to forgive" },
              { id: "d", text: "to examine carefully" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context clues",
                statement:
                  "Test each meaning in the sentence and choose the one that fits the surrounding ideas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Calling an idea 'just a theory' treats it as a guess, which means rejecting it as unimportant.",
                evidence: "dismiss it as a guess",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** The idea is treated as a mere guess. Choice (a) is a common meaning of 'dismiss' but does not fit an idea.",
            commonErrors: [
              "Choosing (a), the most familiar meaning, without testing it in context.",
            ],
          },
        },
        {
          id: "ela10-u2-technical-word-choice-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: THEORY,
          stem: "Which sentence best explains the difference between a scientific theory and a hypothesis, according to the passage?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A theory is formed after a hypothesis is abandoned.",
              },
              {
                id: "b",
                text: "A theory is a guess, while a hypothesis is proven fact.",
              },
              {
                id: "c",
                text: "A theory is a broad, well-tested explanation, while a hypothesis is a narrower prediction that can be tested.",
              },
              {
                id: "d",
                text: "A theory applies only to geology, while a hypothesis applies to every science.",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theory and hypothesis",
                statement:
                  "A theory is a broad, tested explanation; a hypothesis is a narrower, testable prediction.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The passage defines a theory as a well-tested explanation that ties together many observations.",
                evidence:
                  "a well-tested explanation that ties together many observations",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "It defines a hypothesis 'by contrast' as narrower and testable.",
                evidence: "a narrower, testable prediction",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Choice (a) reverses the scientific meanings, which the passage warns against. Plate tectonics is only one example, so (c) is wrong, and (d) invents a relationship the text does not state.",
            commonErrors: [
              "Choosing (a), which matches the everyday misunderstanding the passage corrects.",
            ],
          },
        },
        {
          id: "ela10-u2-technical-word-choice-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: THEORY,
          stem: "Explain how the author uses word choice and comparison to refine the reader's understanding of the word 'theory'. Refer to at least two specific words or phrases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analyzing word choice",
                statement:
                  "Quote the word, state its meaning in context, and explain the idea it contributes.",
              },
              {
                kind: "technique",
                name: "Simile and concrete image",
                statement:
                  "A comparison to a familiar object makes an abstract idea easier to picture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The author contrasts the everyday phrase with the precise definition, using the dismissive word 'guess' to show the common misunderstanding and 'well-tested' to show the scientific meaning.",
                evidence: "dismiss it as a guess",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The simile 'like torn paper' makes the abstract evidence for plate tectonics visual and easy to remember.",
                evidence: "fit together like torn paper",
                marks: 2,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The verb 'accumulates' shows that evidence builds gradually, which refines the idea that a theory is not 'proven' by one experiment but becomes reasonable to trust.",
                evidence:
                  "evidence accumulates until doubting it becomes unreasonable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: rubric(6, [5, 3, 2]),
            finalAnswer:
              "The author refines 'theory' by contrasting the dismissive everyday sense, a 'guess', with the scientific sense, a 'well-tested explanation'. The simile 'like torn paper' gives the abstract idea of plate tectonics a concrete picture, and the verb 'accumulates' shows that confidence in a theory builds gradually as evidence piles up. Together these choices replace a vague, popular meaning with a precise, scientific one.",
            commonErrors: [
              "Identifying the simile without explaining what it adds to the meaning of 'theory'.",
              "Giving only the dictionary meaning of a word, not its effect in context.",
            ],
          },
        },
        {
          id: "ela10-u2-technical-word-choice-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: THEORY,
          stem: "Answer all parts of this question about 'What Scientists Mean by Theory'.",
          parts: [
            {
              label: "a",
              prompt:
                "Give two features that, according to the passage, make a scientific theory different from a guess.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the third paragraph uses an example to clarify the meaning of 'hypothesis'.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Analyze how the words 'strongest' and 'weakest' in the final paragraph shape the author's point about public debate.",
              marks: 6,
            },
            {
              label: "d",
              prompt:
                "Evaluate how effectively the author refines the meaning of technical terms across the whole passage. Refer to at least three different techniques.",
              marks: 6,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Context and definition",
                statement:
                  "Authors often define a term directly or by contrast with a similar term.",
              },
              {
                kind: "technique",
                name: "Antithesis and connotation",
                statement:
                  "Opposite words placed together highlight a problem and carry strong feelings.",
              },
              {
                kind: "skill",
                name: "Evaluating",
                statement:
                  "Judge how well techniques serve the author's purpose and support the judgment with evidence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "A theory is well tested.",
                evidence: "a well-tested explanation",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning:
                  "A theory survived repeated attempts to prove it wrong, or ties together many observations.",
                evidence: "survived repeated attempts to prove it wrong",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The geologist's idea about ancient origins is a specific, narrow prediction that can be checked, showing that a hypothesis is smaller than a theory.",
                evidence:
                  "rocks on both sides of the Atlantic share an ancient origin",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "The sentence about matching minerals shows how a hypothesis is tested and then supported or revised, which clarifies its role in the process.",
                evidence: "it is revised or abandoned",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning:
                  "'Strongest' and 'weakest' are opposites that create a striking paradox: the best explanations are made to sound the worst.",
                evidence:
                  "some of the strongest explanations in science are made to sound like the weakest",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "The passive phrase 'are made to sound' suggests that public language, not the science, causes the distortion, and hints at unfairness.",
                evidence: "are made to sound",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning:
                  "This turns a vocabulary point into a public concern, so the reader sees why precise terms matter for debate.",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning:
                  "Contrast: the opening sets everyday meaning against scientific meaning, which corrects the misunderstanding directly.",
                evidence: "Scientists use the word very differently",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Example and simile: plate tectonics and 'torn paper' ground the definition in familiar evidence.",
                evidence: "fit together like torn paper",
                marks: 2,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning:
                  "Related term and judgment: introducing 'hypothesis' sharpens the boundaries of 'theory', and the final advice gives precise terms a purpose. A limit: the passage does not define 'proof' as carefully.",
                evidence:
                  "A hypothesis, by contrast, is a narrower, testable prediction",
                marks: 2,
                markCode: "AO1",
              },
            ],
            levels: [
              ...rubric(6, [5, 3, 2], "c"),
              ...rubric(6, [5, 3, 2], "d"),
            ],
            finalAnswer:
              "(a) A theory is well tested and has survived repeated attempts to prove it wrong. (b) The geologist's matching-minerals prediction shows a hypothesis is narrow and testable, and that it is revised or abandoned if the test fails. (c) 'Strongest' and 'weakest' form a paradox, and the passive 'are made to sound' blames careless language, which turns vocabulary into a public concern. (d) The passage is effective: contrast corrects the misunderstanding, the example and simile make the idea concrete, and the related term 'hypothesis' marks the boundaries of 'theory'.",
            commonErrors: [
              "In (a), quoting the everyday meaning instead of the scientific one.",
              "In (c), explaining what the words mean without analyzing their effect.",
              "In (d), listing techniques without judging how well they work.",
            ],
          },
        },
      ],
    },
  ],
};
