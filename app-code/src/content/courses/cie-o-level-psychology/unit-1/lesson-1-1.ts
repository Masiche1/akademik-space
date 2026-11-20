import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olep-u1-lesson-1-1",
  code: "1-1",
  title: "Approaches to Psychology",
  goal: "I CAN compare the main approaches to psychology.",
  standards: ["2219: Approaches to psychology"],
  vocabulary: [
    {
      term: "Behaviourism",
      definition: "Approach focusing on observable behaviour and conditioning.",
    },
    {
      term: "Cognitive approach",
      definition:
        "Approach studying mental processes like memory and perception.",
    },
    {
      term: "Psychodynamic approach",
      definition:
        "Approach focusing on unconscious mind and childhood experiences.",
    },
    {
      term: "Humanistic approach",
      definition: "Approach emphasising free will and self-actualisation.",
    },
    {
      term: "Social learning theory",
      definition: "Learning through observation and imitation of others.",
    },
    {
      term: "Classical conditioning",
      definition: "Learning through association — Pavlov's dogs.",
    },
  ],
  concepts: [
    {
      id: "olep-u1-behaviourist",
      title: "Behaviourist approach",
      skill: "Describe classical and operant conditioning.",
      lesson: {
        sections: [
          {
            heading: "Behaviourism",
            body: "Focuses on observable behaviour — ignores thoughts/feelings. All behaviour learned through conditioning. Key figures: Pavlov, Skinner, Watson. Environment shapes behaviour.",
          },
          {
            heading: "Classical conditioning",
            body: "Pavlov: dogs salivated at bell (neutral stimulus) after pairing with food (unconditioned stimulus). Learned association: bell → salivation. Steps: UCS→UCR; NS+UCS→CR; NS alone→CR.",
          },
          {
            heading: "Operant conditioning",
            body: "Skinner: behaviour shaped by consequences. Reinforcement (reward) increases behaviour; punishment decreases. Positive=add stimulus; negative=remove stimulus. Schedules affect learning speed.",
          },
        ],
        keyFormulas: [
          {
            name: "Behaviourism",
            statement: "Classical=association; Operant=consequences.",
          },
        ],
        workedExample: {
          problem:
            "How does operant conditioning explain smartphone addiction?",
          solution:
            "Variable-ratio reinforcement (notifications) creates persistent checking behaviour.",
        },
      },
      questions: [
        {
          id: "olep-u1-be-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is classical conditioning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Learning through association" },
              { id: "b", text: "Learning through punishment" },
              { id: "c", text: "Observing others" },
              { id: "d", text: "Unconscious desire" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Classical conditioning",
                statement: "Learning through association.",
              },
            ],
            steps: [
              {
                reasoning: "Classical = association.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Learning through association",
            commonErrors: ["Confusing with operant."],
          },
        },
        {
          id: "olep-u1-be-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is operant conditioning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Operant conditioning",
                statement: "Behaviour shaped by consequences.",
              },
            ],
            steps: [
              {
                reasoning: "Consequences shape behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reinforcement/punishment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Behaviour shaped by consequences.",
            commonErrors: ["Saying it's about thoughts."],
          },
        },
        {
          id: "olep-u1-be-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare classical and operant conditioning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical vs operant",
                statement: "Association vs consequences.",
              },
            ],
            steps: [
              {
                reasoning: "Classical: stimulus association.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Operant: behaviour consequences.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different mechanisms.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Classical=association; operant=consequences.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "olep-u1-be-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Behaviourist approach.",
          parts: [
            { label: "a", prompt: "Define classical conditioning.", marks: 1 },
            { label: "b", prompt: "Define operant conditioning.", marks: 2 },
            { label: "c", prompt: "Pavlov's experiment?", marks: 2 },
            { label: "d", prompt: "Skinner's contribution?", marks: 2 },
            {
              label: "e",
              prompt: "Strengths/weaknesses of behaviourism?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Behaviourism",
                statement: "Definitions+experiments+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Association learning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Consequences.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reinforcement/punishment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Dogs/bell/food.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Learned association.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Operant chamber.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Schedules/reinforcement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Scientific/objective vs ignores thoughts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) classical (b) operant (c) Pavlov (d) Skinner (e) evaluation",
          },
        },
        {
          id: "olep-u1-be-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In Pavlov's experiment with dogs, the food was the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unconditioned stimulus" },
              { id: "b", text: "conditioned stimulus" },
              { id: "c", text: "neutral stimulus" },
              { id: "d", text: "conditioned response" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unconditioned stimulus",
                statement: "A stimulus that naturally and automatically triggers a response.",
              },
            ],
            steps: [
              {
                reasoning: "Food naturally causes salivation, so it is the UCS.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** unconditioned stimulus",
            commonErrors: ["Confusing UCS with the bell (CS)."],
          },
        },
        {
          id: "olep-u1-be-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Negative reinforcement is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "adding an unpleasant stimulus to reduce behaviour" },
              { id: "b", text: "removing an unpleasant stimulus to increase behaviour" },
              { id: "c", text: "removing a pleasant stimulus to reduce behaviour" },
              { id: "d", text: "a form of punishment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Negative reinforcement",
                statement: "Removing an unpleasant stimulus to increase the likelihood of a behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Negative = removing a stimulus; reinforcement = increases behaviour.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** removing an unpleasant stimulus to increase behaviour",
            commonErrors: ["Confusing negative reinforcement with punishment."],
          },
        },
        {
          id: "olep-u1-be-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define positive reinforcement and give one everyday example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Positive reinforcement",
                statement: "Adding a rewarding stimulus to increase the likelihood of a behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Adding a pleasant stimulus increases behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "A suitable example, e.g. praise after completing homework.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Adding a rewarding stimulus to increase behaviour, e.g. praise after homework.",
            commonErrors: ["Giving a punishment example instead."],
          },
        },
        {
          id: "olep-u1-be-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Using classical conditioning, explain how a phobia of dogs might develop.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical conditioning of fear",
                statement: "A neutral stimulus paired with a fear-producing stimulus becomes a conditioned stimulus.",
              },
            ],
            steps: [
              {
                reasoning: "A neutral stimulus (a dog) is paired with an aversive UCS (a bite/fear).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The dog becomes a conditioned stimulus that alone elicits fear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stimulus generalisation may extend fear to similar animals.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Dog (NS) paired with attack (UCS) → dog alone triggers fear (CR), possibly generalised.",
            commonErrors: ["Describing operant rather than classical conditioning."],
          },
        },
        {
          id: "olep-u1-be-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe Skinner's operant conditioning chamber and explain how schedules of reinforcement affect behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Operant conditioning",
                statement: "Behaviour is shaped by its consequences; reinforcement increases it, punishment decreases it.",
              },
            ],
            steps: [
              {
                reasoning: "Skinner box: animal presses lever for food reward; consequences measured.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reinforcement increases the target behaviour; punishment decreases it.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Fixed schedules give reward after set number/time of responses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Variable schedules produce more persistent behaviour than fixed ones.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Operant chamber measures consequences of behaviour; variable reinforcement schedules produce the most persistent responding.",
            commonErrors: ["Confusing reinforcement schedules with types of punishment."],
          },
        },
        {
          id: "olep-u1-be-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process decreases the likelihood of a behaviour being repeated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "punishment" },
              { id: "b", text: "positive reinforcement" },
              { id: "c", text: "negative reinforcement" },
              { id: "d", text: "modelling" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Punishment",
                statement: "A consequence that decreases the likelihood of a behaviour being repeated.",
              },
            ],
            steps: [
              {
                reasoning: "Punishment reduces behaviour; reinforcement increases it.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** punishment",
            commonErrors: ["Confusing punishment with negative reinforcement."],
          },
        },
        {
          id: "olep-u1-be-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the behaviourist approach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation of behaviourism",
                statement: "Weigh strengths (scientific, objective) against weaknesses (ignores mental processes, deterministic).",
              },
            ],
            steps: [
              {
                reasoning: "Strength: scientific, objective study of observable behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weakness: ignores thoughts and feelings; cannot explain all behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Application: principles used in therapy such as systematic desensitisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balanced judgement weighing evidence both ways.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Behaviourism is scientific and useful for therapy, but ignores mental processes and is overly deterministic.",
            commonErrors: ["Listing points without any judgement."],
          },
        },
        {
          id: "olep-u1-be-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "After conditioning in Pavlov's study, the sound of the bell became the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "unconditioned stimulus" },
              { id: "b", text: "conditioned stimulus" },
              { id: "c", text: "neutral stimulus" },
              { id: "d", text: "unconditioned response" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditioned stimulus",
                statement: "A previously neutral stimulus that, after pairing, triggers a conditioned response.",
              },
            ],
            steps: [
              {
                reasoning: "The bell was originally neutral but came to trigger salivation, so it is the CS.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** conditioned stimulus",
            commonErrors: ["Confusing CS with CR."],
          },
        },
        {
          id: "olep-u1-be-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Distinguish between positive and negative reinforcement, giving an example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Types of reinforcement",
                statement: "Positive = adding a pleasant stimulus; negative = removing an unpleasant stimulus. Both increase behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Positive reinforcement: adding a pleasant stimulus increases behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Negative reinforcement: removing an unpleasant stimulus increases behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct example for each type, e.g. praise (positive) and taking away chores (negative).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Positive adds a reward (e.g. praise); negative removes an unpleasant stimulus (e.g. cancelling chores). Both increase behaviour.",
            commonErrors: ["Calling negative reinforcement a punishment."],
          },
        },
        {
          id: "olep-u1-be-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Classical conditioning processes.",
          parts: [
            {
              label: "a",
              prompt: "Identify the UCS, CS and CR in Pavlov's dog study.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what is meant by extinction in classical conditioning.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Classical conditioning terms",
                statement: "UCS→UCR before conditioning; NS+UCS pairing produces CS→CR; extinction weakens the CR when UCS is removed.",
              },
            ],
            steps: [
              { part: "a", reasoning: "UCS = food.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "CS = bell.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "CR = salivation to bell.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Extinction: CS presented repeatedly without the UCS.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "The conditioned response gradually weakens and disappears.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Spontaneous recovery can occur after a rest period.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) UCS=food, CS=bell, CR=salivation (b) extinction = CS without UCS weakens the CR",
            commonErrors: ["Mixing up CS and CR."],
          },
        },
        {
          id: "olep-u1-be-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The behaviourist approach claims that all behaviour is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "learned through interaction with the environment" },
              { id: "b", text: "caused by unconscious conflicts" },
              { id: "c", text: "the product of free will" },
              { id: "d", text: "determined only by genes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Behaviourist assumption",
                statement: "All behaviour is learned through conditioning; the environment shapes behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Behaviourists reject free will and unconscious causes; learning is environmental.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** learned through interaction with the environment",
            commonErrors: ["Choosing the psychodynamic or humanistic option."],
          },
        },
        {
          id: "olep-u1-be-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Behaviourist principles in detail.",
          parts: [
            {
              label: "a",
              prompt: "Outline two differences between classical and operant conditioning.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Discuss one strength and one weakness of using behaviourist principles in therapy.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Classical vs operant",
                statement: "Classical = stimulus-stimulus association (Pavlov); operant = behaviour-consequence (Skinner).",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Classical conditioning links two stimuli; the response is reflexive.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Operant conditioning links behaviour to its consequences; voluntary acts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Classical uses UCS/UCR/CS/CR terms; operant uses reinforcement/punishment.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "a",
                reasoning: "Clear contrast drawn between the two processes.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Strength: effective, measurable techniques such as systematic desensitisation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Weakness: only treats symptoms, ignores underlying causes/mental processes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Evidence/evaluation of therapeutic outcomes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Balanced judgement on usefulness of behaviourist therapy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) classical=association/operant=consequences (b) effective but symptom-focused",
            commonErrors: ["Evaluating without reference to therapy."],
          },
        },
      ],
    },
    {
      id: "olep-u1-cognitive",
      title: "Cognitive and psychodynamic approaches",
      skill: "Describe cognitive and psychodynamic approaches to psychology.",
      lesson: {
        sections: [
          {
            heading: "Cognitive approach",
            body: "Studies mental processes — memory, perception, attention, language. Information processing model: input → processing → output. Like computer. Key: Piaget (development), Bandura (social learning).",
          },
          {
            heading: "Psychodynamic approach",
            body: "Freud: unconscious mind drives behaviour. Id (instincts), ego (reality), superego (morality). Defence mechanisms: repression, projection, denial. Childhood experiences shape adult personality.",
          },
          {
            heading: "Social learning theory",
            body: "Bandura: learn through observation and imitation — Bobo doll experiment. Attention → retention → reproduction → motivation. Vicarious reinforcement: learning from others' consequences.",
          },
        ],
        keyFormulas: [
          {
            name: "Approaches",
            statement:
              "Cognitive=mind processes; Psychodynamic=unconscious; SLT=observation.",
          },
        ],
        workedExample: {
          problem: "How does social learning theory explain aggression?",
          solution:
            "Children observe aggressive models → retain behaviour → reproduce if rewarded (vicarious reinforcement).",
        },
      },
      questions: [
        {
          id: "olep-u1-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the cognitive approach study?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mental processes like memory and perception" },
              { id: "b", text: "Only observable behaviour" },
              { id: "c", text: "Unconscious desires" },
              { id: "d", text: "Genetics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cognitive",
                statement: "Mental processes.",
              },
            ],
            steps: [
              {
                reasoning: "Cognitive = mental processes.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Mental processes",
            commonErrors: ["Confusing with behaviourism."],
          },
        },
        {
          id: "olep-u1-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are Freud's three parts of personality?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Freud",
                statement: "Id, ego, superego.",
              },
            ],
            steps: [
              { reasoning: "Id/ego/superego.", marks: 1, markCode: "AO1" },
              { reasoning: "Functions explained.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Id (instincts), ego (reality), superego (morality).",
            commonErrors: ["Only naming two."],
          },
        },
        {
          id: "olep-u1-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain social learning theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SLT",
                statement: "Observation+imitation+vicarious reinforcement.",
              },
            ],
            steps: [
              {
                reasoning: "Learn through observation.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Imitate models.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Vicarious reinforcement.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Observation→imitation→vicarious reinforcement.",
            commonErrors: ["Confusing with operant."],
          },
        },
        {
          id: "olep-u1-cp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cognitive and psychodynamic.",
          parts: [
            { label: "a", prompt: "Define cognitive approach.", marks: 1 },
            { label: "b", prompt: "Define psychodynamic.", marks: 2 },
            { label: "c", prompt: "Freud's three parts?", marks: 2 },
            { label: "d", prompt: "Social learning theory?", marks: 2 },
            {
              label: "e",
              prompt: "Compare cognitive vs behaviourist.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Approaches",
                statement: "Definitions+theories+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mental processes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Unconscious mind.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Childhood experiences.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Id/ego/superego.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Functions.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Observation/imitation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Vicarious reinforcement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Mind vs behaviour only.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Clear comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) cognitive (b) psychodynamic (c) Freud (d) SLT (e) comparison",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u1-1-1-notes",
      title: "Approaches — notes",
      summary:
        "Behaviourism, cognitive, psychodynamic, humanistic, social learning.",
      sections: [
        {
          heading: "Behaviourism",
          body: "Classical=association; operant=consequences. Observable behaviour only.",
        },
        {
          heading: "Other approaches",
          body: "Cognitive=mind processes; psychodynamic=unconscious; SLT=observation/imitation.",
        },
      ],
    },
  ],
};
