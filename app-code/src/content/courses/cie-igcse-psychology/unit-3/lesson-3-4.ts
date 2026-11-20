import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cieipsych-u3-lesson-3-4",
  code: "3-4",
  title: "Social psychology: attribution, prejudice and crowds",
  goal: "I CAN explain attribution theory, causes of prejudice and crowd behaviour.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 5: Social psychology",
  ],
  vocabulary: [
    {
      term: "Attribution",
      definition: "Explaining causes of behaviour — ours or others'.",
    },
    {
      term: "Internal attribution",
      definition: "Explaining behaviour by personality/character.",
    },
    {
      term: "External attribution",
      definition: "Explaining behaviour by situation/circumstances.",
    },
    {
      term: "Fundamental attribution error",
      definition: "Overestimating internal causes for others' behaviour.",
    },
    {
      term: "Self-serving bias",
      definition: "Attributing success internally, failure externally.",
    },
    {
      term: "Prejudice",
      definition: "Negative attitude towards a group.",
    },
    {
      term: "Discrimination",
      definition: "Unfair treatment based on prejudice.",
    },
    {
      term: "Ingroup/outgroup",
      definition: "Groups we belong to vs those we don't.",
    },
    {
      term: "Bystander effect",
      definition: "Less likely to help when others are present.",
    },
    {
      term: "Diffusion of responsibility",
      definition: "Spreading responsibility for helping among a group.",
    },
    {
      term: "Deindividuation",
      definition: "Loss of self-awareness in crowds leading to disinhibition.",
    },
    {
      term: "Social loafing",
      definition: "Working less hard in a group than alone.",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u3-attribution",
      title: "Attribution theory",
      skill:
        "Explain how people attribute causes of behaviour and the biases involved.",
      lesson: {
        sections: [
          {
            heading: "Heider's attribution theory",
            body: "Heider proposed we explain behaviour by attributing causes: **internal (dispositional)** — personality, character, ability; or **external (situational)** — circumstances, luck, others' actions. We use **consensus** (do others do it?), **distinctiveness** (do they do it in other situations?), and **consistency** (do they always do it?) to decide which attribution fits.",
          },
          {
            heading: "Attribution biases",
            body: "The **fundamental attribution error**: we overestimate internal causes for others' behaviour and underestimate situational factors — 'he cut me off because he's rude' not 'he's rushing to hospital'. The **self-serving bias**: we attribute our own successes internally ('I'm clever') but failures externally ('the exam was unfair'). **Actor-observer bias**: we attribute our own behaviour externally but others' internally.",
          },
          {
            heading: "Why attribution errors occur",
            body: "Errors arise because we focus on the person, not the situation (**salience**). When we act, we're aware of our circumstances; when watching others, we see only their behaviour. Culture matters too — individualist cultures emphasise dispositional attributions more than collectivist cultures. Understanding attribution helps explain prejudice, stereotypes and conflict.",
          },
        ],
        keyFormulas: [
          {
            name: "Internal attribution",
            statement: "Personality/character cause",
          },
          {
            name: "External attribution",
            statement: "Situation/circumstances cause",
          },
          {
            name: "Fundamental attribution error",
            statement: "Overestimate internal causes for others",
          },
          {
            name: "Self-serving bias",
            statement: "Internal for success, external for failure",
          },
        ],
        workedExample: {
          problem:
            "A driver cuts you off. Most people say 'he's a bad driver'. What bias is this?",
          solution:
            "Fundamental attribution error — assuming internal cause (bad character) while ignoring situational factors (emergency, distraction).",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-at1-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Attribution is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explaining causes of behaviour" },
              { id: "b", text: "Blaming others" },
              { id: "c", text: "Observing behaviour" },
              { id: "d", text: "Predicting behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Attribution",
                statement: "Explaining causes of behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "Attribution = explaining causes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Explaining causes of behaviour.",
          },
        },
        {
          id: "cieipsych-u3-at1-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An internal attribution explains behaviour by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Personality or character" },
              { id: "b", text: "Circumstances" },
              { id: "c", text: "Luck" },
              { id: "d", text: "Others' actions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Internal attribution",
                statement: "Personality/character cause.",
              },
            ],
            steps: [
              {
                reasoning: "Internal = personality.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Personality or character.",
          },
        },
        {
          id: "cieipsych-u3-at1-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An external attribution explains behaviour by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The situation or circumstances" },
              { id: "b", text: "Personality" },
              { id: "c", text: "Character" },
              { id: "d", text: "Ability" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "External attribution",
                statement: "Situation/circumstances cause.",
              },
            ],
            steps: [
              {
                reasoning: "External = situation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The situation or circumstances.",
          },
        },
        {
          id: "cieipsych-u3-at1-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The fundamental attribution error is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Overestimating internal causes for others' behaviour",
              },
              { id: "b", text: "Attributing own success externally" },
              { id: "c", text: "Always blaming the situation" },
              { id: "d", text: "Never attributing causes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fundamental attribution error",
                statement: "Overestimate internal causes for others.",
              },
            ],
            steps: [
              {
                reasoning: "FAE = overestimate internal causes.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Overestimating internal causes for others.",
          },
        },
        {
          id: "cieipsych-u3-at1-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "The self-serving bias is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Attributing own success internally and failure externally",
              },
              { id: "b", text: "Always blaming others" },
              { id: "c", text: "Attributing all success externally" },
              { id: "d", text: "Never taking responsibility" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Self-serving bias",
                statement: "Internal for success, external for failure.",
              },
            ],
            steps: [
              {
                reasoning: "Self-serving = internal success, external failure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Internal for success, external for failure.",
          },
        },
        {
          id: "cieipsych-u3-at1-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Heider's attribution theory uses which information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consensus, distinctiveness and consistency" },
              { id: "b", text: "Only personality" },
              { id: "c", text: "Only situation" },
              { id: "d", text: "Only behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution cues",
                statement: "Consensus, distinctiveness, consistency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Three cues: consensus, distinctiveness, consistency.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Consensus, distinctiveness, consistency.",
          },
        },
        {
          id: "cieipsych-u3-at1-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Consensus' in attribution refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Whether others do the same thing in the same situation",
              },
              { id: "b", text: "Whether the person agrees" },
              { id: "c", text: "Whether everyone knows" },
              { id: "d", text: "Whether the situation is fair" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consensus",
                statement: "Do others do the same in same situation.",
              },
            ],
            steps: [
              {
                reasoning: "Consensus = others' behaviour in same situation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Whether others do the same.",
          },
        },
        {
          id: "cieipsych-u3-at1-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Distinctiveness' in attribution refers to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Whether the person does it in other situations too",
              },
              { id: "b", text: "Whether the behaviour is unusual" },
              { id: "c", text: "Whether the person is distinctive" },
              { id: "d", text: "Whether the situation is distinct" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Distinctiveness",
                statement: "Does person do it in other situations.",
              },
            ],
            steps: [
              {
                reasoning: "Distinctiveness = behaviour across situations.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Whether they do it in other situations.",
          },
        },
        {
          id: "cieipsych-u3-at1-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "'Consistency' in attribution refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the person always does it" },
              { id: "b", text: "Whether the situation is consistent" },
              { id: "c", text: "Whether everyone agrees" },
              { id: "d", text: "Whether the behaviour is consistent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consistency",
                statement: "Does person always do it.",
              },
            ],
            steps: [
              {
                reasoning: "Consistency = behaviour across time.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Whether the person always does it.",
          },
        },
        {
          id: "cieipsych-u3-at1-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between internal and external attribution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution types",
                statement: "Person vs situation.",
              },
            ],
            steps: [
              {
                reasoning: "Internal: personality, character, ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "External: situation, circumstances, luck.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Internal = person; external = situation.",
          },
        },
        {
          id: "cieipsych-u3-at1-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give an example of the fundamental attribution error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FAE example",
                statement: "Assuming bad character over situation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Someone cuts you off — you think 'rude driver' not 'emergency'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "You attribute to internal cause, ignoring situation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "'He's rude' instead of 'he's rushing to hospital'.",
          },
        },
        {
          id: "cieipsych-u3-at1-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the fundamental attribution error occurs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FAE cause",
                statement: "Focus on person, not situation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We focus on the person — their behaviour is salient.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "We don't see their situation — it's less visible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "So we overestimate personality causes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Person is salient, situation isn't → overestimate internal causes.",
          },
        },
        {
          id: "cieipsych-u3-at1-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student fails an exam and says 'the questions were unfair'. Using attribution theory, explain their view.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attribution application",
                statement: "Identify bias type.",
              },
            ],
            steps: [
              {
                reasoning:
                  "This is self-serving bias — external attribution for failure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Protects self-esteem by blaming the exam, not own ability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If they had passed, they'd likely say 'I'm smart'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Self-serving bias = internal success, external failure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Self-serving bias — blaming exam (external) to protect self-esteem.",
          },
        },
        {
          id: "cieipsych-u3-at1-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Actor-observer bias means we attribute:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Our own behaviour externally but others' internally",
              },
              { id: "b", text: "All behaviour internally" },
              { id: "c", text: "All behaviour externally" },
              { id: "d", text: "No causes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Actor-observer bias",
                statement: "External for self, internal for others.",
              },
            ],
            steps: [
              {
                reasoning: "Actor-observer = external self, internal others.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Own externally, others internally.",
          },
        },
        {
          id: "cieipsych-u3-at1-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'salience' in attribution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Salience",
                statement: "What stands out most in our perception.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The person's behaviour stands out; their situation doesn't.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "We attribute based on what's most visible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "What stands out — person's behaviour is more visible than situation.",
          },
        },
        {
          id: "cieipsych-u3-at1-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Heider's attribution theory was proposed by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fritz Heider" },
              { id: "b", text: "Stanley Milgram" },
              { id: "c", text: "Leon Festinger" },
              { id: "d", text: "Solomon Asch" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Heider",
                statement: "Proposed attribution theory.",
              },
            ],
            steps: [
              {
                reasoning: "Heider proposed attribution theory.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Fritz Heider.",
          },
        },
        {
          id: "cieipsych-u3-at1-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does culture affect attribution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Culture and attribution",
                statement: "Individualist vs collectivist attributions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Individualist cultures emphasise dispositional (internal) attributions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Collectivist cultures emphasise situational (external) attributions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Individualist = internal; collectivist = external attributions.",
          },
        },
        {
          id: "cieipsych-u3-at1-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how attribution theory relates to prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution and prejudice",
                statement: "Fundamental attribution error fuels prejudice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We attribute outgroup members' negative behaviour to their character.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "But attribute ingroup members' negative behaviour to circumstances.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This double standard fuels prejudice and stereotypes.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "FAE applied differently to ingroup/outgroup fuels prejudice.",
          },
        },
        {
          id: "cieipsych-u3-at1-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A driver who cuts you off later crashes. How might attribution change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Attribution change",
                statement: "New info changes attribution.",
              },
            ],
            steps: [
              {
                reasoning: "Initially: 'rude driver' — internal attribution.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After crash: learn they may have had an emergency — external.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Attribution can change with new information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows FAE is not inevitable — situation matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Attribution shifts from internal to external with new info.",
          },
        },
        {
          id: "cieipsych-u3-at1-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an internal attribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'He's lazy'" },
              { id: "b", text: "'It was raining'" },
              { id: "c", text: "'She was unlucky'" },
              { id: "d", text: "'It was busy'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Internal example",
                statement: "Character trait = internal.",
              },
            ],
            steps: [
              {
                reasoning: "'Lazy' = personality = internal.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 'He's lazy'.",
          },
        },
        {
          id: "cieipsych-u3-at1-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'consensus' information used for in attribution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consensus use",
                statement: "Helps decide internal vs external.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If everyone does it in that situation → situational cause.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If only this person does it → personal cause.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Consensus helps distinguish personal vs situational causes.",
          },
        },
        {
          id: "cieipsych-u3-at1-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why we make attribution errors despite trying to be rational.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution errors",
                statement: "Cognitive shortcuts and salience.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We use mental shortcuts (heuristics) to process quickly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Salience — person's behaviour is more visible than situation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "These shortcuts lead to systematic errors.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mental shortcuts and salience lead to systematic attribution errors.",
          },
        },
        {
          id: "cieipsych-u3-at1-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the fundamental attribution error.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FAE evaluation",
                statement: "Robust finding but culturally variable.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: robust finding across many studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Strength: explains prejudice and conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: less pronounced in collectivist cultures.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: may not apply to all situations equally.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Robust and explanatory but culturally variable.",
          },
        },
        {
          id: "cieipsych-u3-at1-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an external attribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'It was raining'" },
              { id: "b", text: "'He's rude'" },
              { id: "c", text: "'She's lazy'" },
              { id: "d", text: "'He's smart'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External example",
                statement: "Situation = external.",
              },
            ],
            steps: [
              {
                reasoning: "'Raining' = situation = external.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 'It was raining'.",
          },
        },
        {
          id: "cieipsych-u3-at1-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'distinctiveness' information used for?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Distinctiveness use",
                statement: "Helps decide if behaviour is person-specific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "If person does it only in this situation → situational.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If person does it everywhere → personal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Helps decide if behaviour is person-specific or situation-specific.",
          },
        },
        {
          id: "cieipsych-u3-at1-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the self-serving bias protects self-esteem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Self-serving bias function",
                statement: "Protects self-image.",
              },
            ],
            steps: [
              {
                reasoning: "Attributing success internally boosts self-esteem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Attributing failure externally protects self-image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This maintains positive self-concept.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Internal success + external failure maintains positive self-image.",
          },
        },
        {
          id: "cieipsych-u3-at1-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The fundamental attribution error applies mostly to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other people's behaviour" },
              { id: "b", text: "Own behaviour" },
              { id: "c", text: "Animal behaviour" },
              { id: "d", text: "Historical events" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "FAE scope",
                statement: "Applies to others' behaviour.",
              },
            ],
            steps: [
              {
                reasoning: "FAE applies to others' behaviour.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Other people's behaviour.",
          },
        },
        {
          id: "cieipsych-u3-at1-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'consistency' information used for in attribution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consistency use",
                statement: "Helps decide if behaviour is stable.",
              },
            ],
            steps: [
              {
                reasoning: "If person always does it → likely personality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If only sometimes → likely situational.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Helps decide if behaviour is stable (personality) or temporary (situation).",
          },
        },
        {
          id: "cieipsych-u3-at1-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate attribution theory as an explanation of social behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution theory evaluation",
                statement: "Explains errors but may oversimplify.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: explains systematic attribution errors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: useful for understanding prejudice and conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: may oversimplify complex causal reasoning.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Weakness: culturally variable — not universal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explains errors well but may oversimplify and varies culturally.",
          },
        },
        {
          id: "cieipsych-u3-at1-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is attribution important in everyday life?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attribution importance",
                statement: "Explains how we judge others.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We constantly explain why people behave as they do.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "These attributions affect relationships, prejudice, blame.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shapes how we judge others, affecting relationships and prejudice.",
          },
        },
      ],
    },
    {
      id: "cieipsych-u3-prejudice-crowds",
      title: "Prejudice and crowd behaviour",
      skill:
        "Explain causes of prejudice, bystander effect and crowd dynamics.",
      lesson: {
        sections: [
          {
            heading: "Prejudice and discrimination",
            body: "**Prejudice** = negative attitude towards a group; **discrimination** = unfair treatment based on that prejudice; **stereotype** = oversimplified belief about a group. Causes include: **realistic conflict theory** (groups compete for scarce resources), **social identity theory** (ingroup favouritism boosts self-esteem), **authoritarian personality** (submissive to authority, hostile to outgroups), and **social learning** (children imitate prejudiced attitudes).",
          },
          {
            heading: "The bystander effect",
            body: "Kitty Genovese's murder (1964) inspired research showing people are **less likely to help when others are present** — the **bystander effect**. Causes: **diffusion of responsibility** (assuming someone else will help), **pluralistic ignorance** (assuming others' inaction means no emergency), and evaluation apprehension. Factors increasing helping: fewer witnesses, clear emergency, personal connection, competence.",
          },
          {
            heading: "Crowd behaviour",
            body: "Le Bon proposed crowds create a **group mind** — individuals lose self-awareness (**deindividuation**) and become suggestible. Zimbardo's Stanford Prison Experiment showed how roles and anonymity can produce cruel behaviour. **Social loafing**: people work less hard in groups — 'many hands make light work' but also 'hiding in the crowd'. Crowds can also be prosocial — collective action for change.",
          },
        ],
        keyFormulas: [
          {
            name: "Prejudice",
            statement: "Negative attitude; discrimination = treatment",
          },
          {
            name: "Bystander effect",
            statement: "Less likely to help when others present",
          },
          {
            name: "Deindividuation",
            statement: "Loss of self-awareness in crowds",
          },
          {
            name: "Social loafing",
            statement: "Working less hard in groups",
          },
        ],
        workedExample: {
          problem:
            "Someone collapses on a busy street but no one helps. Explain.",
          solution:
            "Bystander effect — diffusion of responsibility (others present) + pluralistic ignorance (assuming others will help).",
        },
      },
      questions: [
        {
          id: "cieipsych-u3-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Prejudice is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A negative attitude towards a group" },
              { id: "b", text: "Unfair treatment" },
              { id: "c", text: "A belief about a group" },
              { id: "d", text: "A legal concept" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Prejudice",
                statement: "Negative attitude towards a group.",
              },
            ],
            steps: [
              {
                reasoning: "Prejudice = negative attitude.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Negative attitude.",
          },
        },
        {
          id: "cieipsych-u3-pc-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Discrimination is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unfair treatment based on prejudice" },
              { id: "b", text: "A negative attitude" },
              { id: "c", text: "A belief about a group" },
              { id: "d", text: "A stereotype" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Discrimination",
                statement: "Unfair treatment based on prejudice.",
              },
            ],
            steps: [
              {
                reasoning: "Discrimination = unfair treatment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Unfair treatment.",
          },
        },
        {
          id: "cieipsych-u3-pc-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stereotype is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An oversimplified belief about a group" },
              { id: "b", text: "A negative attitude" },
              { id: "c", text: "Unfair treatment" },
              { id: "d", text: "A legal rule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stereotype",
                statement: "Oversimplified belief about a group.",
              },
            ],
            steps: [
              {
                reasoning: "Stereotype = oversimplified belief.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Oversimplified belief.",
          },
        },
        {
          id: "cieipsych-u3-pc-q4",
          difficulty: "core",
          totalMarks: 1,
          stem: "The bystander effect is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Less likely to help when others are present" },
              { id: "b", text: "Always helping" },
              { id: "c", text: "Helping only alone" },
              { id: "d", text: "Never helping" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bystander effect",
                statement: "Less likely to help with others present.",
              },
            ],
            steps: [
              {
                reasoning: "Bystander effect = less helping in groups.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Less likely to help when others present.",
          },
        },
        {
          id: "cieipsych-u3-pc-q5",
          difficulty: "core",
          totalMarks: 1,
          stem: "Diffusion of responsibility means:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Spreading responsibility for helping among a group",
              },
              { id: "b", text: "Taking full responsibility" },
              { id: "c", text: "Avoiding all responsibility" },
              { id: "d", text: "Sharing blame equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion of responsibility",
                statement: "Spreading responsibility among group.",
              },
            ],
            steps: [
              {
                reasoning: "Diffusion = spreading responsibility.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Spreading responsibility among group.",
          },
        },
        {
          id: "cieipsych-u3-pc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pluralistic ignorance occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "People assume others' inaction means no emergency",
              },
              { id: "b", text: "Everyone knows the truth" },
              { id: "c", text: "No one acts" },
              { id: "d", text: "Everyone helps" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluralistic ignorance",
                statement: "Assuming others' inaction = no emergency.",
              },
            ],
            steps: [
              {
                reasoning: "Pluralistic ignorance = misreading others.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Assuming others' inaction means no emergency.",
          },
        },
        {
          id: "cieipsych-u3-pc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Deindividuation is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Loss of self-awareness in crowds leading to disinhibition",
              },
              { id: "b", text: "Gaining self-awareness" },
              { id: "c", text: "Individual thinking" },
              { id: "d", text: "Group decision making" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindividuation",
                statement: "Loss of self-awareness in crowds.",
              },
            ],
            steps: [
              {
                reasoning: "Deindividuation = loss of self-awareness.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Loss of self-awareness in crowds.",
          },
        },
        {
          id: "cieipsych-u3-pc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Social loafing is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Working less hard in a group than alone" },
              { id: "b", text: "Working harder in groups" },
              { id: "c", text: "Working alone" },
              { id: "d", text: "Sharing work equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social loafing",
                statement: "Less effort in groups.",
              },
            ],
            steps: [
              {
                reasoning: "Social loafing = less effort in groups.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Working less hard in a group.",
          },
        },
        {
          id: "cieipsych-u3-pc-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Realistic conflict theory explains prejudice through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Competition for scarce resources" },
              { id: "b", text: "Personality differences" },
              { id: "c", text: "Genetics" },
              { id: "d", text: "Education" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Realistic conflict",
                statement: "Prejudice from resource competition.",
              },
            ],
            steps: [
              {
                reasoning: "Realistic conflict = resource competition.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Competition for scarce resources.",
          },
        },
        {
          id: "cieipsych-u3-pc-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between prejudice and discrimination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prejudice vs discrimination",
                statement: "Attitude vs behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prejudice: negative attitude towards a group (thoughts/feelings).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Discrimination: unfair treatment based on prejudice (actions).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Prejudice = attitude; discrimination = behaviour.",
          },
        },
        {
          id: "cieipsych-u3-pc-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give one cause of the bystander effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander causes",
                statement:
                  "Diffusion of responsibility, pluralistic ignorance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diffusion of responsibility — assume someone else will help.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pluralistic ignorance — assume others' inaction means no emergency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diffusion of responsibility and/or pluralistic ignorance.",
          },
        },
        {
          id: "cieipsych-u3-pc-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the presence of others reduces helping behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander mechanisms",
                statement: "Diffusion + pluralistic ignorance + evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Diffusion of responsibility — assume someone else will help.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pluralistic ignorance — assume others' inaction means no emergency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluation apprehension — fear of looking foolish.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Diffusion of responsibility, pluralistic ignorance, evaluation apprehension.",
          },
        },
        {
          id: "cieipsych-u3-pc-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A group is competing for a limited scholarship. Using realistic conflict theory, explain possible prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Realistic conflict application",
                statement: "Competition → prejudice.",
              },
            ],
            steps: [
              {
                reasoning: "Scarce resource (scholarship) creates competition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Groups blame each other for competition → prejudice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Outgroup members seen as unfair competitors.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "If resource becomes abundant, prejudice may decrease.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Competition for scholarship → prejudice between groups; may reduce if resource increases.",
          },
        },
        {
          id: "cieipsych-u3-pc-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "The Kitty Genovese case inspired research on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The bystander effect" },
              { id: "b", text: "Prejudice" },
              { id: "c", text: "Deindividuation" },
              { id: "d", text: "Social loafing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Genovese case",
                statement: "Inspired bystander effect research.",
              },
            ],
            steps: [
              {
                reasoning: "Genovese → bystander effect research.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) The bystander effect.",
          },
        },
        {
          id: "cieipsych-u3-pc-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is social identity theory's explanation of prejudice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social identity",
                statement: "Ingroup favouritism boosts self-esteem.",
              },
            ],
            steps: [
              {
                reasoning: "We define ourselves by group memberships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Favouring ingroup boosts self-esteem → outgroup derogation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ingroup favouritism boosts self-esteem; outgroup derogation follows.",
          },
        },
        {
          id: "cieipsych-u3-pc-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Le Bon proposed that crowds create:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A 'group mind' where individuals lose self-awareness",
              },
              { id: "b", text: "Better decision making" },
              { id: "c", text: "Individual thinking" },
              { id: "d", text: "Rational behaviour" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Bon",
                statement: "Crowds create group mind.",
              },
            ],
            steps: [
              {
                reasoning: "Le Bon = group mind in crowds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) A 'group mind'.",
          },
        },
        {
          id: "cieipsych-u3-pc-q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the Stanford Prison Experiment?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stanford Prison",
                statement: "Zimbardo's study of roles and power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Students randomly assigned as guards or prisoners in simulated prison.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Showed how roles and anonymity produce cruel behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Zimbardo's study showing roles produce cruel behaviour.",
          },
        },
        {
          id: "cieipsych-u3-pc-q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how anonymity contributes to crowd behaviour.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anonymity and crowds",
                statement: "Anonymity → deindividuation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In crowds, individuals feel anonymous — less identifiable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This leads to deindividuation — loss of self-awareness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Normal inhibitions decrease — disinhibited behaviour.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Anonymity → deindividuation → disinhibited behaviour.",
          },
        },
        {
          id: "cieipsych-u3-pc-q19",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a study to test the bystander effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Research design",
                statement: "Lab or field experiment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "IV: number of bystanders (1 vs many); DV: helping behaviour.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Use staged emergency — confederate falls or asks for help.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Random allocation; covert observation of helping.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Ethics: debriefing essential — participants must know it was staged.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "IV bystander number, DV helping; staged emergency with covert observation.",
          },
        },
        {
          id: "cieipsych-u3-pc-q20",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a cause of prejudice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Higher intelligence" },
              { id: "b", text: "Realistic conflict" },
              { id: "c", text: "Social identity" },
              { id: "d", text: "Authoritarian personality" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prejudice causes",
                statement:
                  "Conflict, identity, personality — not intelligence.",
              },
            ],
            steps: [
              {
                reasoning: "Higher intelligence is not a prejudice cause.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Higher intelligence.",
          },
        },
        {
          id: "cieipsych-u3-pc-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'authoritarian personality'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Authoritarian personality",
                statement: "Submissive to authority, hostile to outgroups.",
              },
            ],
            steps: [
              {
                reasoning: "Personality type submissive to authority figures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hostile to those perceived as different or threatening.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Submissive to authority, hostile to outgroups.",
          },
        },
        {
          id: "cieipsych-u3-pc-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how social learning contributes to prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social learning prejudice",
                statement: "Children imitate prejudiced attitudes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Children observe and imitate parents'/peers' attitudes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prejudiced attitudes are rewarded or modelled.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "These become internalised as normal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Children imitate and internalise prejudiced attitudes.",
          },
        },
        {
          id: "cieipsych-u3-pc-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate Le Bon's 'crowd mind' theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Le Bon evaluation",
                statement: "Suggestive but unscientific.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Describes crowd behaviour vividly — suggestive of group influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "But 'group mind' is vague and unscientific.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Modern research shows deindividuation and social identity better explain crowds.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Crowds can also be prosocial — Le Bon was too negative.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Vivid but unscientific; modern theories better; crowds not always negative.",
          },
        },
        {
          id: "cieipsych-u3-pc-q24",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The bystander effect is most likely when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Many people are present" },
              { id: "b", text: "Only one person is present" },
              { id: "c", text: "No one is present" },
              { id: "d", text: "Emergency is clear" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander condition",
                statement: "More bystanders = less helping.",
              },
            ],
            steps: [
              {
                reasoning: "More bystanders → less likely to help.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Many people are present.",
          },
        },
        {
          id: "cieipsych-u3-pc-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'pluralistic ignorance' in the bystander effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluralistic ignorance",
                statement: "Assuming others' inaction means no emergency.",
              },
            ],
            steps: [
              {
                reasoning: "Each person waits to see if others react.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "If no one reacts, each assumes no emergency.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Each waits for others; inaction interpreted as no emergency.",
          },
        },
        {
          id: "cieipsych-u3-pc-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how social identity theory explains prejudice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social identity prejudice",
                statement: "Ingroup favouritism → outgroup derogation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "We define ourselves by group memberships (ingroup).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Favouring ingroup boosts self-esteem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This leads to derogating outgroups → prejudice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ingroup favouritism boosts self-esteem; outgroup derogation follows.",
          },
        },
        {
          id: "cieipsych-u3-pc-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social loafing occurs in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group tasks" },
              { id: "b", text: "Individual tasks" },
              { id: "c", text: "Competitive tasks" },
              { id: "d", text: "All tasks equally" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Social loafing context",
                statement: "Group tasks.",
              },
            ],
            steps: [
              {
                reasoning: "Social loafing happens in groups.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Group tasks.",
          },
        },
        {
          id: "cieipsych-u3-pc-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'evaluation apprehension' in the bystander effect?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation apprehension",
                statement: "Fear of looking foolish when helping.",
              },
            ],
            steps: [
              {
                reasoning: "People fear being judged for intervening wrongly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This reduces helping in public situations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Fear of looking foolish reduces helping.",
          },
        },
        {
          id: "cieipsych-u3-pc-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Critically evaluate the bystander effect research.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander evaluation",
                statement: "Robust but lab-based.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: robust finding across many studies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Strength: explains real-world non-helping (Genovese).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: mostly lab studies — ecological validity limited.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Weakness: helping is complex — many factors beyond bystander number.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Robust and explanatory but lab-based and oversimplified.",
          },
        },
        {
          id: "cieipsych-u3-pc-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "How can the bystander effect be reduced?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reducing bystander effect",
                statement: "Assign responsibility, reduce ambiguity.",
              },
            ],
            steps: [
              {
                reasoning: "Assign responsibility — 'you, call an ambulance'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reduce ambiguity — make emergency clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Assign responsibility and reduce ambiguity.",
          },
        },
      ],
    },
  ],
};
