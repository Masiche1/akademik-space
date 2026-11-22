import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const OVID_SUMMARY: TextExtract = {
  title: "Pyramus and Thisbe (prose retelling of the ancient myth)",
  author: "Written for Akademik Space",
  source: "Retelling of the story told by the Roman poet Ovid",
  text: "In Babylon, Pyramus and Thisbe lived in adjoining houses, and their parents forbade them to marry. The lovers could only whisper through a narrow crack in the wall between the houses. At last they planned to meet at night beside a tomb outside the city. Thisbe arrived first, but a lioness, her jaws red with blood, frightened her away, and in her flight she dropped her cloak. The lioness tore it to pieces. When Pyramus arrived and found the bloodied cloak, he thought Thisbe was dead and stabbed himself. Thisbe returned, found him dying, and killed herself with the same sword. Their blood stained the fruit of the mulberry tree dark red forever.",
};

const ROMEO_PLOT: TextExtract = {
  title: "Romeo and Juliet: notes on the ending",
  author: "Written for Akademik Space",
  source: "Summary of the play's final act",
  text: "Juliet takes a potion that makes her appear dead so that she can escape a forced marriage. The message explaining the plan never reaches Romeo. Hearing that she has died, Romeo buys poison and goes to her tomb at night. He meets Paris, whom he kills, and then he drinks the poison beside Juliet. Juliet wakes, finds Romeo dead, and stabs herself with his dagger. The play closes with the heads of the Montague and Capulet families ending their feud over the bodies of their children.",
};

const FABLE_PAIR: TextExtract = {
  title: "Two versions of one fable",
  author: "Written for Akademik Space",
  source: "Version A: the traditional fable. Version B: a modern retelling.",
  text: "Version A\nA thirsty crow found a pitcher with a little water at the bottom, too low for his beak. He dropped pebbles into it one by one until the water rose, and then he drank. The moral: necessity is the mother of invention.\n\nVersion B\nThe bird had been circling the dry lot for hours when it spotted a plastic bottle beside the bins, a thin skin of water glittering at the bottom. A boy at the bus stop watched it drop bottle caps and pebbles in, one at a time, with a patience that looked like thought. When the bird finally drank, the boy realized that he had been holding his own empty water bottle for the whole afternoon, waiting for someone to tell him where to find a tap.",
};

const SCENE_STAGE: TextExtract = {
  title: "Production notes: two versions of the balcony scene",
  author: "Written for Akademik Space",
  source:
    "Descriptions of a stage production and a film adaptation of the same scene",
  text: "Stage production\nThe stage is nearly bare. A single wooden balcony stands above the actor playing Romeo, who stays in a pool of warm light while the rest of the theater is dark. The actors speak the full text loudly enough to reach the back row, and they use large gestures. The audience hears every word of the poetry and can watch both lovers in one frame at all times. There is no music; the silence between their lines makes the audience lean forward.\n\nFilm adaptation\nThe camera begins with a wide shot of a moonlit garden, then moves to a close-up of Juliet's face as she whispers her lines almost to herself. The soundtrack adds a soft string melody. Many lines are cut, and some are spoken as voice-over while the camera shows leaves moving in the wind. When Romeo appears, the camera cuts rapidly between their faces, so the audience never sees them in the same frame until the final moment.",
};

export const lesson13: Lesson = {
  id: "ela10-u1-lesson-1-3",
  code: "1-3",
  title: "Transformation of Sources",
  goal: "I CAN analyze how an author draws on and transforms source material, and compare how a subject or scene is treated in two different artistic mediums or versions.",
  standards: ["RL.9-10.9", "RL.9-10.7"],
  vocabulary: [
    {
      term: "Source material",
      definition:
        "An earlier story, myth, or text that a later author draws on.",
    },
    {
      term: "Transform",
      definition:
        "To change something significantly while keeping recognizable elements of the original.",
    },
    {
      term: "Adaptation",
      definition:
        "A version of a work reworked for a different medium, such as a play made into a film.",
    },
    {
      term: "Medium",
      definition:
        "The form in which a work is presented, such as print, stage, or film.",
    },
    {
      term: "Emphasis",
      definition:
        "The importance or attention a version gives to a particular detail or idea.",
    },
    {
      term: "Retelling",
      definition:
        "A new version of an existing story with changes in setting, point of view, or meaning.",
    },
  ],
  concepts: [
    {
      id: "ela10-u1-source-transformation",
      title: "How authors draw on and transform sources",
      skill:
        "Compare a source with a later work to identify what is kept, what is changed, and how the changes alter meaning.",
      lesson: {
        sections: [
          {
            heading: "Kept, changed, and why",
            body: "Authors often start from an existing story. Shakespeare built Romeo and Juliet on earlier tales, and the Roman poet Ovid's myth of Pyramus and Thisbe has the same shape: forbidden love, a secret meeting at night, a tragic misunderstanding, and a double death. To analyze a transformation, make three lists: what the author **keeps**, what the author **changes**, and what the changes **do** to theme, character, and tone. A change is only worth discussing if you can explain its effect.",
          },
          {
            heading: "Retellings and shifts in meaning",
            body: "Retellings change setting, point of view, or ending. Ask: Who is now at the center? What is the moral or message, and has it shifted? A traditional fable states its lesson outright; a modern retelling may leave the lesson implied, move it from animals to people, or question it. Use the language of comparison: 'both', 'in contrast', 'whereas', 'by changing... the author emphasizes...'.",
          },
        ],
        keyFormulas: [
          {
            name: "Keep, change, effect",
            statement:
              "Identify what is kept from the source, what is changed, and how each change alters meaning.",
          },
          {
            name: "Transformation",
            statement:
              "A significant change that reworks a source to say something new while keeping it recognizable.",
          },
          {
            name: "Moral versus theme",
            statement:
              "A fable states its moral directly; a modern retelling often implies a theme the reader must infer.",
          },
        ],
        workedExample: {
          problem:
            "How does the ending of Romeo and Juliet transform the ending of the myth of Pyramus and Thisbe?",
          solution:
            "Both stories end with two lovers dying in a tomb because of a misunderstanding: Pyramus thinks Thisbe is dead because of a bloodied cloak, and Romeo thinks Juliet is dead because the message never reaches him. Shakespeare keeps the secret night meeting, the tomb, and the double suicide. He changes the cause of the tragedy from a wild animal to a failure of a human plan, and he adds the reconciliation of the families. The myth ends with a natural wonder, the stained mulberry fruit, whereas the play ends with a social change: the feud is over. By making the lovers' deaths end a feud, Shakespeare shifts the meaning from fate and nature toward the responsibility of a divided society.",
        },
      },
      questions: [
        {
          id: "ela10-u1-source-transformation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: OVID_SUMMARY,
          stem: "Which element of the myth of Pyramus and Thisbe is also found in the plot of Romeo and Juliet?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A mistaken belief that one lover is dead leads to a double death.",
              },
              { id: "b", text: "A lioness frightens one of the lovers." },
              {
                id: "c",
                text: "The lovers whisper through a crack in a wall.",
              },
              { id: "d", text: "A mulberry tree changes color." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Identifying shared elements",
                statement:
                  "Compare the plot of each text and select what appears in both.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pyramus believes Thisbe is dead and kills himself; Romeo does the same on false news of Juliet's death.",
                evidence: "he thought Thisbe was dead and stabbed himself",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(b)**. In both stories the lovers die because of a misunderstanding about the other's death. The lioness, the crack in the wall, and the mulberry tree appear only in the myth.",
            commonErrors: [
              "Choosing an element that appears only in the source.",
            ],
          },
        },
        {
          id: "ela10-u1-source-transformation-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: ROMEO_PLOT,
          stem: "Using the retelling of the myth and the notes on the play, identify two things Shakespeare changed from the myth and explain one effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Change and effect",
                statement:
                  "A change deserves comment only if its effect on meaning is explained.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Change 1: the cause of the mistaken death is a failed message, not a lioness.",
                evidence:
                  "The message explaining the plan never reaches Romeo.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Change 2: the play ends with the families ending their feud, which the myth does not include.",
                evidence: "ending their feud over the bodies of their children",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Effect: the deaths now carry social meaning and blame human failure, not a chance animal attack.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Shakespeare replaces the lioness with a failed message, and he adds the end of the families' feud. The effect is that the tragedy comes from human error and a divided society rather than from chance, so the deaths carry a social lesson.",
            commonErrors: [
              "Listing changes with no effect.",
              "Naming a similarity instead of a change.",
            ],
          },
        },
        {
          id: "ela10-u1-source-transformation-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: FABLE_PAIR,
          stem: "Compare how Version A and Version B treat the same story. Explain what Version B keeps, what it changes, and how its message differs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Keep, change, effect",
                statement:
                  "Describe what is retained, what is altered, and the effect on message.",
              },
              {
                kind: "technique",
                name: "Implied theme",
                statement:
                  "A modern retelling may show a lesson through a human character rather than state it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Keeps: the thirsty bird, the water at the bottom of a container, the pebbles dropped one at a time, and the drink at the end.",
                evidence: "drop bottle caps and pebbles in, one at a time",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Changes: the setting becomes an urban lot, the pitcher a plastic bottle, and a human character, the boy, is added to watch.",
                evidence: "A boy at the bus stop watched",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Message: Version A states a moral about invention; Version B implies that the boy has been passive, so the theme becomes about resourcefulness and taking action.",
                evidence: "waiting for someone to tell him where to find a tap",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels(6),
            finalAnswer:
              "Version B keeps the thirsty bird, the water at the bottom of the container, and the pebbles dropped 'one at a time'. It changes the setting to a modern lot, and adds a boy who 'had been holding his own empty water bottle' while waiting for instruction. Version A states its moral that necessity is the mother of invention, whereas Version B implies that resourcefulness is a lesson people must learn from the bird, shifting the focus from the animal's cleverness to human passivity.",
            commonErrors: [
              "Only retelling both versions.",
              "Missing the role of the boy in changing the meaning.",
            ],
          },
        },
        {
          id: "ela10-u1-source-transformation-q4",
          difficulty: "challenge",
          totalMarks: 18,
          extract: OVID_SUMMARY,
          stem: "Answer all parts of this question about the myth of Pyramus and Thisbe and Shakespeare's Romeo and Juliet. In the play, Juliet takes a potion that makes her appear dead; the message explaining the plan never reaches Romeo; Romeo kills himself at her tomb; Juliet wakes and kills herself; and the Montague and Capulet families end their feud over the bodies.",
          parts: [
            {
              label: "a",
              prompt: "Give three elements that the myth and the play share.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the cause of the lovers' deaths differs in the myth and in the play, and what this change suggests.",
              marks: 5,
            },
            {
              label: "c",
              prompt:
                "Analyze how Shakespeare transforms the myth of Pyramus and Thisbe to create a play with a new meaning. Refer to specific details from both.",
              marks: 10,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Source analysis",
                statement:
                  "Name kept elements, changed elements, and the effect on theme.",
              },
              {
                kind: "context",
                name: "Shakespeare's sources",
                statement:
                  "Shakespeare often adapted existing stories, reworking plots to explore new ideas about people and society.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Both stories involve parents who oppose the love.",
                evidence: "their parents forbade them to marry",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning: "Both include a secret night meeting at a tomb.",
                evidence: "meet at night beside a tomb",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "Both end with a mistaken belief in a lover's death and a double death.",
                evidence: "thought Thisbe was dead",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "In the myth, a lioness and a dropped cloak cause the mistake, so the tragedy comes from chance.",
                evidence: "a lioness, her jaws red with blood",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "In the play, a message fails to arrive, so the cause is a flaw in a human plan.",
                evidence:
                  "The message explaining the plan never reaches Romeo.",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Suggests the play stresses human responsibility and timing over accident.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Keeps the central structure: forbidden love, secret meeting, mistaken death, double death.",
                evidence: "forbidden",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Adds the feuding families, so the obstacle becomes social rather than only parental.",
                evidence: "heads of the Montague and Capulet families",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Adds the potion plan and Paris, creating human choices and complications.",
                evidence: "Juliet takes a potion",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Changes the ending: the myth ends with a natural symbol, the mulberry fruit; the play ends with reconciliation.",
                evidence: "stained the fruit of the mulberry tree dark red",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Judgment: the changes move the story from fate to social responsibility and give the deaths a purpose.",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels(10, "c"),
            finalAnswer:
              "(a) Opposing parents, a secret night meeting at a tomb, and a mistaken belief in a lover's death that leads to a double death. (b) In the myth a lioness and a bloodied cloak cause the mistake, which makes it chance; in the play a message fails to reach Romeo, which makes it a failed human plan. (c) Shakespeare keeps the structure but adds the feuding families, the potion plan, and the reconciliation. The myth ends with a natural wonder, the stained mulberries; the play ends with the families ending their feud. So the transformation shifts the meaning from fate toward social responsibility, and gives the deaths a purpose.",
            commonErrors: [
              "In (a), listing only plot details unique to one text.",
              "In (b), describing causes without comparing.",
              "In (c), retelling both stories without analyzing the effect of changes.",
            ],
            examinerNote:
              "A top answer uses the play details given in the stem and the myth together.",
          },
        },
      ],
    },
    {
      id: "ela10-u1-mediums-versions",
      title: "A scene in two mediums or versions",
      skill:
        "Analyze how a stage production and a film adaptation of the same scene treat it differently, and why.",
      lesson: {
        sections: [
          {
            heading: "What each medium can do",
            body: "A **stage production** has a live audience, a fixed viewpoint, and the actors' voices and bodies; it depends on language, lighting, and gesture. A **film** can use close-ups, camera movement, editing, music, and voice-over, and it can cut lines and add images. Because of this, the same scene can emphasize different details: the stage may stress spoken poetry and the relationship between two actors in one space, while the film may stress private emotion and visual atmosphere.",
          },
          {
            heading: "Comparing versions with evidence",
            body: "Compare **choices** and their **effects**. Ask: What does each version emphasize? What does it leave out? How does that change the mood or the meaning? Support every claim with a specific detail from the description. Then judge: neither is automatically better, but each makes the audience notice different things. Use phrases such as 'the stage version emphasizes... whereas the film...' and always say what the audience experiences.",
          },
        ],
        keyFormulas: [
          {
            name: "Stage techniques",
            statement:
              "Live acting, spoken text, lighting, gesture, a single viewpoint, and set design.",
          },
          {
            name: "Film techniques",
            statement:
              "Camera angles, close-ups, editing, music, voice-over, and cut dialogue.",
          },
          {
            name: "Choice and effect",
            statement:
              "Describe the choice a version makes, then explain what the audience notices or feels because of it.",
          },
        ],
        workedExample: {
          problem:
            "How do the stage and film versions of the balcony scene differ in what they emphasize?",
          solution:
            "The stage production emphasizes spoken poetry and the relationship between the two lovers. The actors speak 'the full text', the lovers are visible together in one frame, and the 'silence between their lines' makes the audience lean forward. The film emphasizes private emotion and atmosphere. A close-up of Juliet 'whispering her lines almost to herself' makes the speech feel like a secret, the soft strings set a romantic mood, and the rapid cuts mean the lovers are never seen together until the final moment. So the stage stresses their connection and the language, while the film stresses their separation and inner feelings.",
        },
      },
      questions: [
        {
          id: "ela10-u1-mediums-versions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SCENE_STAGE,
          stem: "Which technique is available to the film version but not used in the stage production?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A close-up of an actor's face" },
              { id: "b", text: "A balcony set" },
              { id: "c", text: "Actors using gestures" },
              { id: "d", text: "Spoken dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Medium-specific techniques",
                statement:
                  "Close-ups, editing, and camera movement belong to film.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The film begins with a wide shot and moves to a close-up of Juliet's face; a theater audience watches from a fixed seat.",
                evidence: "a close-up of Juliet's face",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(b)**. Close-ups are possible only on film. Both versions use dialogue and gesture, and the stage has a balcony set.",
            commonErrors: ["Choosing something both versions use."],
          },
        },
        {
          id: "ela10-u1-mediums-versions-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: SCENE_STAGE,
          stem: "Explain how the use of sound differs between the stage production and the film adaptation, and what effect each choice has.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sound as meaning",
                statement: "Music and silence shape the mood of a scene.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The stage version uses no music, only silence between lines.",
                evidence: "There is no music",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "The film adds a string melody and voice-over.",
                evidence: "The soundtrack adds a soft string melody",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Effect: silence draws attention to the words and the actors; music guides the audience's feelings toward romance.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The stage version uses no music, so silence between the lines makes the audience focus on the words. The film adds 'a soft string melody' and voice-over, which creates a romantic mood and tells the audience how to feel.",
            commonErrors: ["Describing the sound without saying what it does."],
          },
        },
        {
          id: "ela10-u1-mediums-versions-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: SCENE_STAGE,
          stem: "Compare how the stage production and the film adaptation present the relationship between Romeo and Juliet. Use details from both.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparison of mediums",
                statement:
                  "Compare choices in both versions and say what each emphasizes.",
              },
              {
                kind: "technique",
                name: "Framing",
                statement:
                  "Whether two characters share a frame shapes how connected they seem.",
              },
            ],
            steps: [
              {
                reasoning:
                  "On stage the lovers are visible together, so the relationship is shown as a shared space.",
                evidence: "can watch both lovers in one frame at all times",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "On film, rapid cuts separate them, emphasizing the distance between them and their private feelings.",
                evidence: "the audience never sees them in the same frame",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "The stage's full-voiced text and large gestures stress openness and the poetry.",
                evidence:
                  "speak the full text loudly enough to reach the back row",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning:
                  "The film's whispers and voice-over stress secrecy and inner thought.",
                evidence: "whispers her lines almost to herself",
                marks: 2,
                markCode: "AO3",
              },
            ],
            levels: levels(8),
            finalAnswer:
              "On stage the lovers are in 'one frame at all times' and speak 'the full text' aloud, so the relationship feels open, shared, and poetic. In the film, Juliet 'whispers her lines almost to herself' and rapid cuts mean the audience 'never sees them in the same frame' until the end, so the relationship feels secret and separated by longing. The stage stresses connection; the film stresses private feeling and distance.",
            commonErrors: [
              "Describing one version only.",
              "Listing techniques without saying what they suggest about the relationship.",
            ],
          },
        },
        {
          id: "ela10-u1-mediums-versions-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SCENE_STAGE,
          stem: "Answer all parts of this question about the two versions of the balcony scene.",
          parts: [
            {
              label: "a",
              prompt:
                "Give three differences between the stage production and the film adaptation.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how the staging of Romeo and the camera work in the film each affect the audience's attention.",
              marks: 6,
            },
            {
              label: "c",
              prompt:
                "Evaluate which version is likely to be more effective at conveying the emotion of the scene to its audience. Support your judgment with details from both.",
              marks: 11,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluating versions",
                statement:
                  "Judge effectiveness against the purpose of the scene, supported by details.",
              },
              {
                kind: "technique",
                name: "Staging and camerawork",
                statement:
                  "Lighting, framing, and editing direct the audience's attention.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Stage has no music; film has a soundtrack.",
                evidence: "no music",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning:
                  "Stage keeps the lovers in one frame; film uses cuts between them.",
                evidence: "cuts rapidly between their faces",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "a",
                reasoning: "Stage speaks the full text; film cuts many lines.",
                evidence: "Many lines are cut",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "Stage lighting isolates Romeo in warm light, directing attention to him within a dark theater.",
                evidence: "a pool of warm light",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "The bare set keeps attention on the actors and language.",
                evidence: "The stage is nearly bare",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning:
                  "The film's camera moves from a wide shot to a close-up, guiding attention from setting to emotion.",
                evidence:
                  "a wide shot of a moonlit garden, then moves to a close-up",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Stage strength: shared presence and full poetry give a direct, live emotional force.",
                evidence: "hears every word of the poetry",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Stage strength: silence builds tension and attention.",
                evidence: "audience lean forward",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Film strength: close-ups and whispers create intimacy impossible from a theater seat.",
                evidence: "whispers her lines almost to herself",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Film strength: music and visuals build atmosphere, though cut lines lose some of the poetry.",
                evidence: "Many lines are cut",
                marks: 2,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Reaches a reasoned judgment about which is more effective, acknowledging that each succeeds in a different way.",
                marks: 3,
                markCode: "AO3",
              },
            ],
            levels: [...levels(6, "b"), ...levels(11, "c")],
            finalAnswer:
              "(a) The stage has no music, keeps both lovers in one frame, and speaks the full text; the film adds a soundtrack, cuts between faces, and cuts lines. (b) The warm light on a bare stage isolates Romeo and keeps attention on the actors; the film's move from wide shot to close-up guides attention from the setting to Juliet's emotion. (c) The stage is effective because the full poetry and the silence between lines create shared, live tension. The film is effective in intimacy: close-ups and whispers make the feeling private, and music adds atmosphere, though cutting lines loses some poetry. For emotion, I judge the film slightly more intimate, but the stage better conveys the language, so each succeeds in a different way.",
            commonErrors: [
              "In (a), giving similarities.",
              "In (b), describing techniques without effects.",
              "In (c), giving a preference without evidence.",
            ],
          },
        },
      ],
    },
  ],
};
