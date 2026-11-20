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
              { id: "a", text: "Learning from seeing others rewarded" },
              { id: "b", text: "Direct reward to self" },
              { id: "c", text: "Punishment avoidance" },
              { id: "d", text: "Classical conditioning" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Learning from seeing others rewarded",
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
              { id: "a", text: "Less likely to help when others present" },
              { id: "b", text: "Helping only strangers" },
              { id: "c", text: "Always helping immediately" },
              { id: "d", text: "Obeying authority figures" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Less likely to help when others present",
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
