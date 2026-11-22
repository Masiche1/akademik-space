import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "olep-u4-lesson-4-3",
  code: "4-3",
  title: "Social Learning and Altruism",
  goal: "I CAN describe social learning theory, bystander effect and factors affecting helping behaviour.",
  standards: ["2219: Social psychology"],
  vocabulary: [
    {
      term: "Social learning theory",
      definition: "Learning through observation and imitation.",
    },
    {
      term: "Model",
      definition: "Person whose behaviour is observed and imitated.",
    },
    {
      term: "Vicarious reinforcement",
      definition: "Learning from seeing others rewarded/punished.",
    },
    {
      term: "Bystander effect",
      definition: "Less likely to help when others present.",
    },
    {
      term: "Diffusion of responsibility",
      definition: "Responsibility shared among group members.",
    },
    {
      term: "Altruism",
      definition: "Helping others without expecting reward.",
    },
  ],
  concepts: [
    {
      id: "olep-u4-social-learning",
      title: "Social Learning Theory",
      skill: "Describe Bandura's theory and Bobo doll study.",
      lesson: {
        sections: [
          {
            heading: "Bandura's theory",
            body: "Albert Bandura — behaviour learned through observation, not just conditioning. Attention → retention → reproduction → motivation. Vicarious reinforcement: see model rewarded → imitate; see punished → don't. Children learn aggression from models.",
          },
          {
            heading: "Bobo doll study",
            body: "Bandura 1961 — children watched adult model act aggressively toward Bobo doll (hit, kicked, shouted). Later allowed to play — children who saw aggressive model imitated more aggression; those who saw non-aggressive model less. Media violence similarly linked to aggression.",
          },
          {
            heading: "Applications",
            body: "Explains how children learn language, social norms, aggression. Role models matter — positive models (parents, teachers, media) shape behaviour. Supports behaviourist view that environment shapes behaviour, extended to include cognition.",
          },
        ],
        keyFormulas: [
          {
            name: "Social learning",
            statement:
              "Observe→retain→reproduce→motivate; vicarious reinforcement; Bobo doll evidence.",
          },
        ],
        workedExample: {
          problem: "What did the Bobo doll study show?",
          solution:
            "Children who watched aggressive model imitated more aggression than those who saw non-aggressive model — observation alone teaches behaviour.",
        },
      },
      questions: [
        {
          id: "olep-u4-sl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is vicarious reinforcement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct reward to self" },
              { id: "b", text: "Classical conditioning" },
              { id: "c", text: "Punishment avoidance" },
              { id: "d", text: "Learning from seeing others rewarded" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vicarious reinforcement",
                statement: "Learning from model's consequences.",
              },
            ],
            steps: [
              { reasoning: "See others rewarded.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Learning from seeing others rewarded",
            commonErrors: ["Confusing with direct reinforcement."],
          },
        },
        {
          id: "olep-u4-sl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the four stages of social learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SLT stages",
                statement: "Attention, retention, reproduction, motivation.",
              },
            ],
            steps: [
              { reasoning: "Any two stages.", marks: 1, markCode: "AO1" },
              { reasoning: "All four named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Attention, retention, reproduction, motivation.",
            commonErrors: ["Missing stages."],
          },
        },
        {
          id: "olep-u4-sl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What did Bandura's Bobo doll study show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bobo doll",
                statement: "Children imitate observed aggression.",
              },
            ],
            steps: [
              {
                reasoning: "Children watched model act aggressively.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Then imitated aggression more.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Non-aggressive model → less imitation.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Children who watched aggressive model imitated more aggression — observation alone teaches behaviour.",
            commonErrors: ["Only describing setup."],
          },
        },
        {
          id: "olep-u4-sl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social learning.",
          parts: [
            { label: "a", prompt: "SLT definition?", marks: 2 },
            { label: "b", prompt: "Stages?", marks: 3 },
            { label: "c", prompt: "Bobo doll?", marks: 2 },
            { label: "d", prompt: "Applications?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLT",
                statement: "Definition+stages+study+applications.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Learn through observation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Imitation of models.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Attention/retention.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Reproduction/motivation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Clear order.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Aggressive model study.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Imitation result.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Language/behaviour learning.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Role models/media.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) definition (b) stages (c) Bobo (d) applications",
          },
        },
        {
          id: "olep-u4-sl-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Social learning theory states that behaviour is learned through...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "innate instincts only" },
              { id: "b", text: "genetic inheritance" },
              { id: "c", text: "observation of others, not just direct conditioning" },
              { id: "d", text: "random trial and error" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SLT",
                statement: "Learning by observing models.",
              },
            ],
            steps: [
              {
                reasoning: "SLT = observational learning.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Observation of others",
            commonErrors: ["Confusing with pure behaviourism."],
          },
        },
        {
          id: "olep-u4-sl-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sequence correctly lists the stages of observational learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retention, attention, reproduction, motivation" },
              { id: "b", text: "Motivation, attention, retention, reproduction" },
              { id: "c", text: "Reproduction, retention, attention, motivation" },
              { id: "d", text: "Attention, retention, reproduction, motivation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SLT stages",
                statement: "Attention→retention→reproduction→motivation.",
              },
            ],
            steps: [
              {
                reasoning: "Correct Bandura sequence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Attention, retention, reproduction, motivation",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "olep-u4-sl-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Vicarious reinforcement occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the learner is directly rewarded" },
              { id: "b", text: "a learner sees a model rewarded and becomes more likely to imitate" },
              { id: "c", text: "the model is punished" },
              { id: "d", text: "no reinforcement occurs at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vicarious reinforcement",
                statement: "Seeing model rewarded → imitate.",
              },
            ],
            steps: [
              {
                reasoning: "Vicarious = indirect reinforcement via model.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Seeing model rewarded increases imitation",
            commonErrors: ["Confusing with direct reinforcement."],
          },
        },
        {
          id: "olep-u4-sl-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Bandura's Bobo doll study (1961) found that children who watched an aggressive model...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "refused to play with the doll" },
              { id: "b", text: "imitated significantly more aggression than children who watched a non-aggressive model" },
              { id: "c", text: "showed no difference in aggression" },
              { id: "d", text: "became less aggressive than controls" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bobo doll",
                statement: "Children imitate observed aggression.",
              },
            ],
            steps: [
              {
                reasoning: "Model's behaviour was imitated.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Imitated more aggression",
            commonErrors: ["Saying no effect was found."],
          },
        },
        {
          id: "olep-u4-sl-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Social learning theory is used to explain the link between media violence and aggression because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "aggression is purely instinctive" },
              { id: "b", text: "media directly rewires the brain" },
              { id: "c", text: "children may imitate aggressive behaviours they observe being rewarded in the media" },
              { id: "d", text: "observation has no effect on behaviour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Media violence",
                statement: "Observation → imitation of aggression.",
              },
            ],
            steps: [
              {
                reasoning: "Media provides aggressive models.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Vicarious reinforcement may increase imitation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** Children imitate rewarded aggressive models",
            commonErrors: ["Claiming media causes aggression directly."],
          },
        },
        {
          id: "olep-u4-sl-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In an observational-learning study, $45$ out of $50$ children attended to the model's behaviour. Calculate the attention rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(attending / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "45 / 50 = 0.9.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Rate = 90%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "olep-u4-sl-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "After watching a model, children correctly recalled $18$ out of $20$ demonstrated acts on a later test. Calculate the retention rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(recalled / demonstrated) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "18 / 20 = 0.9.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows retention stage of SLT.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "olep-u4-sl-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a Bobo-style study, children who saw a rewarded aggressive model performed $12$ aggressive acts, while children who saw a punished model performed $4$. Calculate the difference in acts.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "rewarded model acts - punished model acts.",
              },
            ],
            steps: [
              {
                reasoning: "12 - 4 = 8 acts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows vicarious reinforcement effect.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "olep-u4-sl-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A model was rewarded on $9$ of $10$ observed trials and punished on $2$ of $10$. Calculate the difference in vicarious reinforcement rate between the two conditions, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate difference",
                statement: "(9/10 - 2/10) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "90% - 20% = 70 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rewarded models increase imitation; punished decrease.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 70 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "70 percentage points",
          },
        },
        {
          id: "olep-u4-sl-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define social learning theory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SLT",
                statement: "Learning through observation of models.",
              },
            ],
            steps: [
              {
                reasoning: "Behaviour learned by watching others.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bandura's theory.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Learning behaviour through observing and imitating others (Bandura).",
            commonErrors: ["Confusing with classical conditioning."],
          },
        },
        {
          id: "olep-u4-sl-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the four stages of observational learning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLT stages",
                statement: "Attention→retention→reproduction→motivation.",
              },
            ],
            steps: [
              {
                reasoning: "Attention: notice the model's behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Retention: remember what was seen.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reproduction: perform the behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Motivation: reason to imitate (vicarious reinforcement).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Attention, retention, reproduction, motivation — all four needed for imitation.",
            commonErrors: ["Missing stages or wrong order."],
          },
        },
        {
          id: "olep-u4-sl-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Social learning theory.",
          parts: [
            { label: "a", prompt: "Define SLT.", marks: 1 },
            { label: "b", prompt: "Name the four stages.", marks: 2 },
            { label: "c", prompt: "What is vicarious reinforcement?", marks: 2 },
            { label: "d", prompt: "What did the Bobo doll study show?", marks: 2 },
            { label: "e", prompt: "One application of SLT?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SLT",
                statement: "Definition+stages+study+applications.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Learning by observing models.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Attention+retention+reproduction+motivation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "All four in order.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Seeing model rewarded → imitate.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Indirect reinforcement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Children imitated aggressive model.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Evidence for observational learning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Any application e.g. media violence, role models, language.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "How SLT explains it.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) definition (b) stages (c) vicarious (d) Bobo (e) application",
          },
        },
      ],
    },
    {
      id: "olep-u4-altruism",
      title: "Altruism and the Bystander Effect",
      skill:
        "Explain helping behaviour, bystander effect and diffusion of responsibility.",
      lesson: {
        sections: [
          {
            heading: "Helping behaviour",
            body: "Altruism: helping without expecting reward — rare; often explained by empathy-altruism hypothesis (empathy → helping) or reciprocal altruism (help now, helped later). Bystander intervention: Kitty Genovese case (1964) — 38 witnesses allegedly didn't help; inspired research.",
          },
          {
            heading: "Bystander effect",
            body: "Latane & Darley 1968 — smoke-filled room study: alone → 75% reported smoke; in groups → only 10%. Diffusion of responsibility: each assumes someone else will act. Pluralistic ignorance: look to others for cues — nobody acts because nobody else does. Unambiguity: unclear emergency → less help.",
          },
          {
            heading: "Increasing helping",
            body: "Factors that increase helping: feeling personally responsible ('someone must help'), direct assignment ('you call 911'), training (first aid), similarity to victim, mood. Reducing bystander effect: education about diffusion of responsibility, clear emergency signals, designated helpers.",
          },
        ],
        keyFormulas: [
          {
            name: "Altruism",
            statement:
              "Bystander effect: alone 75% vs group 10%; diffusion of responsibility.",
          },
        ],
        workedExample: {
          problem: "Why didn't bystanders help in emergencies?",
          solution:
            "Diffusion of responsibility — each assumed someone else would act; pluralistic ignorance — looked for cues nobody gave.",
        },
      },
      questions: [
        {
          id: "olep-u4-au-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the bystander effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always helping immediately" },
              { id: "b", text: "Obeying authority figures" },
              { id: "c", text: "Helping only strangers" },
              { id: "d", text: "Less likely to help when others present" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bystander effect",
                statement: "Less help in groups.",
              },
            ],
            steps: [
              {
                reasoning: "Groups → less helping.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)** Less likely to help when others present",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "olep-u4-au-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is diffusion of responsibility?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion",
                statement: "Responsibility shared in groups.",
              },
            ],
            steps: [
              {
                reasoning: "Group members share blame.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each assumes others will act.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "In a group, responsibility is diffused — each person assumes someone else will act, so nobody does.",
            commonErrors: ["Confusing with conformity."],
          },
        },
        {
          id: "olep-u4-au-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What did the smoke-filled room study show?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bystander study",
                statement: "Alone 75% report vs group 10%.",
              },
            ],
            steps: [
              {
                reasoning: "Participants in room with smoke.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Alone: 75% reported.", marks: 1, markCode: "AO1" },
              {
                reasoning: "In group: only 10% reported.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Alone, 75% reported smoke; in groups, only 10% did — diffusion of responsibility/pluralistic ignorance.",
            commonErrors: ["Vague 'people ignored it'."],
          },
        },
        {
          id: "olep-u4-au-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Altruism and bystander effect.",
          parts: [
            { label: "a", prompt: "Altruism?", marks: 2 },
            { label: "b", prompt: "Bystander effect?", marks: 2 },
            { label: "c", prompt: "Diffusion of responsibility?", marks: 2 },
            { label: "d", prompt: "Increasing helping?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Altruism",
                statement: "Helping+bystander+diffusion+factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Help without reward.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Empathy/reciprocal explanations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Less help in groups.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Smoke study evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Shared responsibility.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Each assumes others act.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Personal responsibility.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Direct assignment/training.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Similar victim/mood.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) altruism (b) bystander (c) diffusion (d) helping",
          },
        },
        {
          id: "olep-u4-au-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Altruism is best defined as...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "copying others' behaviour" },
              { id: "b", text: "obeying authority" },
              { id: "c", text: "helping only for personal gain" },
              { id: "d", text: "helping others without expecting a reward" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Altruism",
                statement: "Helping without expecting reward.",
              },
            ],
            steps: [
              {
                reasoning: "Altruism = selfless helping.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Helping without expecting reward",
            commonErrors: ["Confusing with obedience."],
          },
        },
        {
          id: "olep-u4-au-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "The bystander effect refers to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bystanders calling police immediately" },
              { id: "b", text: "people being less likely to help when others are present" },
              { id: "c", text: "helping only close friends" },
              { id: "d", text: "people always helping more in groups" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bystander effect",
                statement: "Less help when others present.",
              },
            ],
            steps: [
              {
                reasoning: "Bystander effect = diffusion reduces helping.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)** Less likely to help in groups",
            commonErrors: ["Reversing the effect."],
          },
        },
        {
          id: "olep-u4-au-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Diffusion of responsibility explains the bystander effect because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "bystanders feel more responsible in groups" },
              { id: "b", text: "emergencies become clearer in groups" },
              { id: "c", text: "each bystander assumes someone else will take responsibility to act" },
              { id: "d", text: "groups always act immediately" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diffusion of responsibility",
                statement: "Responsibility shared → less action.",
              },
            ],
            steps: [
              {
                reasoning: "Each assumes others will act.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)** Each assumes someone else will act",
            commonErrors: ["Saying responsibility increases."],
          },
        },
        {
          id: "olep-u4-au-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Pluralistic ignorance in emergencies occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "one person always acts first" },
              { id: "b", text: "the emergency is announced publicly" },
              { id: "c", text: "everyone clearly sees the emergency" },
              { id: "d", text: "bystanders look to others for cues and wrongly conclude nothing is wrong" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluralistic ignorance",
                statement: "Misread others' calm as 'no emergency'.",
              },
            ],
            steps: [
              {
                reasoning: "Nobody acts because nobody else does.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)** Misinterpret others' inaction as normality",
            commonErrors: ["Confusing with diffusion of responsibility."],
          },
        },
        {
          id: "olep-u4-au-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The Kitty Genovese case (1964) is famous in psychology because...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "it proved altruism is common" },
              { id: "b", text: "it showed obedience to police" },
              { id: "c", text: "38 witnesses allegedly failed to help, inspiring bystander research" },
              { id: "d", text: "it demonstrated social learning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Kitty Genovese",
                statement: "38 witnesses → bystander research.",
              },
            ],
            steps: [
              {
                reasoning: "Case highlighted failure to help.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Inspired Latane & Darley research.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(c)** 38 witnesses allegedly didn't help",
            commonErrors: ["Saying it proved helping is common."],
          },
        },
        {
          id: "olep-u4-au-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In Latane and Darley's smoke-room study, $75\\%$ of participants alone reported the smoke but only $10\\%$ in groups did. Calculate the difference in reporting rate, in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 65, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Difference",
                statement: "alone rate - group rate.",
              },
            ],
            steps: [
              {
                reasoning: "75 - 10 = 65 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Demonstrates bystander effect.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "65 percentage points",
          },
        },
        {
          id: "olep-u4-au-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a replication, $30$ out of $40$ participants tested alone reported smoke, while only $4$ out of $40$ tested in groups did. Calculate the percentage of group participants who reported.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(group reporters / group total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "4 / 40 = 0.1.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 10%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "10%",
          },
        },
        {
          id: "olep-u4-au-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "According to the empathy-altruism hypothesis, $27$ out of $30$ high-empathy participants helped a stranger. Calculate the helping rate as a percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(helpers / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "27 / 30 = 0.9.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Supports empathy → helping link.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "90%",
          },
        },
        {
          id: "olep-u4-au-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a bystander study, helping occurred in $75\\%$ of alone trials and $10\\%$ of group trials. Calculate the ratio of helping alone to helping in groups.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio",
                statement: "alone rate / group rate.",
              },
            ],
            steps: [
              {
                reasoning: "75 / 10 = 7.5.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows strong bystander effect.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 7.5.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "7.5",
          },
        },
        {
          id: "olep-u4-au-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define altruism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Altruism",
                statement: "Helping without expected reward.",
              },
            ],
            steps: [
              {
                reasoning: "Helping behaviour.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Without expecting personal reward.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Helping others without expecting a reward.",
            commonErrors: ["Confusing with helping for gain."],
          },
        },
        {
          id: "olep-u4-au-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain diffusion of responsibility as an explanation of the bystander effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Diffusion of responsibility",
                statement: "Shared responsibility → less action.",
              },
            ],
            steps: [
              {
                reasoning: "In a group, responsibility is shared.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each assumes someone else will act.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Alone, responsibility is clear → more likely to act.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explains 75% alone vs 10% group finding.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Responsibility is diffused in groups so each assumes others will act; alone, personal responsibility is clear.",
            commonErrors: ["Confusing with pluralistic ignorance."],
          },
        },
        {
          id: "olep-u4-au-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Altruism and the bystander effect.",
          parts: [
            { label: "a", prompt: "Define altruism.", marks: 1 },
            { label: "b", prompt: "What is the bystander effect?", marks: 2 },
            { label: "c", prompt: "What did Latane & Darley find?", marks: 2 },
            { label: "d", prompt: "Two explanations?", marks: 2 },
            { label: "e", prompt: "One way to increase helping?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Altruism",
                statement: "Definition+effect+study+explanations+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Helping without expected reward.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Less likely to help when others present.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Diffusion of responsibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "75% alone vs 10% in groups reported smoke.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Evidence for bystander effect.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Diffusion of responsibility + pluralistic ignorance.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Any two named correctly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Direct assignment/education/reducing ambiguity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "How it increases helping.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) altruism (b) bystander (c) Latane & Darley (d) explanations (e) helping",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u4-4-3-notes",
      title: "Social learning and altruism — notes",
      summary:
        "Bandura SLT/Bobo doll; bystander effect, diffusion of responsibility, helping.",
      sections: [
        {
          heading: "SLT",
          body: "Observe→retain→reproduce→motivate; vicarious reinforcement; Bobo doll evidence.",
        },
        {
          heading: "Altruism",
          body: "Bystander effect (75% alone vs 10% group); diffusion of responsibility; empathy; increasing helping.",
        },
      ],
    },
  ],
};
