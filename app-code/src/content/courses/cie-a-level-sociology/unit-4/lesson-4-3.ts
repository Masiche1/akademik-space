import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "asoc-u4-lesson-4-3",
  code: "4-3",
  title: "Inequality in Education",
  goal: "I CAN explain how intelligence, class, ethnicity and gender affect educational attainment.",
  standards: [
    "9699 P3: Intelligence and attainment by class, ethnicity, gender",
  ],
  vocabulary: [
    {
      term: "IQ",
      definition: "Intelligence quotient — measure of cognitive ability.",
    },
    {
      term: "Nature vs nurture",
      definition: "Debate: genetics vs environment in intelligence.",
    },
    {
      term: "Cultural capital",
      definition: "Knowledge and skills valued by society.",
    },
    {
      term: "Material deprivation",
      definition: "Lack of resources like money, housing, nutrition.",
    },
    {
      term: "Gender gap",
      definition: "Difference in attainment between boys and girls.",
    },
    {
      term: "Ethnic minority",
      definition:
        "Group with distinct cultural heritage in a majority society.",
    },
  ],
  concepts: [
    {
      id: "asoc-u4-intelligence-class",
      title: "Intelligence and social class",
      skill: "Explain intelligence debates and class effects on attainment.",
      lesson: {
        sections: [
          {
            heading: "Intelligence debate",
            body: "IQ tests measure cognitive ability. Nature view: intelligence largely genetic — Jensen argued this explains class gaps. Nurture view: environment shapes IQ — better nutrition, stimulation, schooling raise scores. Most accept interaction.",
          },
          {
            heading: "Social class and attainment",
            body: "Working-class children underachieve vs middle-class. Material deprivation: poorer housing, nutrition, resources. Cultural factors: working-class speech/culture may not match school expectations ('deficit' view contested). Cultural capital: middle-class children arrive with valued knowledge/skills.",
          },
          {
            heading: "Teacher expectations",
            body: "Labelling: teachers may expect less from working-class students — self-fulfilling prophecy lowers attainment. Streaming can reinforce class divisions.",
          },
        ],
        keyFormulas: [
          {
            name: "Intelligence/class",
            statement:
              "Nature+nurture; material deprivation; cultural capital; labelling.",
          },
        ],
        workedExample: {
          problem: "Why do working-class children underachieve?",
          solution:
            "Material deprivation + cultural capital gap + teacher labelling compound each other.",
        },
      },
      questions: [
        {
          id: "asoc-u4-ic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does IQ measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cognitive ability" },
              { id: "b", text: "Physical strength" },
              { id: "c", text: "Social skills" },
              { id: "d", text: "Emotional intelligence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IQ",
                statement: "Measure of cognitive ability.",
              },
            ],
            steps: [
              {
                reasoning: "IQ = cognitive ability.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Cognitive ability",
            commonErrors: ["Saying it measures everything."],
          },
        },
        {
          id: "asoc-u4-ic-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is cultural capital?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cultural capital",
                statement: "Knowledge/skills valued by society.",
              },
            ],
            steps: [
              {
                reasoning: "Valued knowledge and skills.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Middle-class children advantaged.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Knowledge, skills and attitudes valued by society — middle-class advantage.",
            commonErrors: ["Confusing with money."],
          },
        },
        {
          id: "asoc-u4-ic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the nature vs nurture explanation of class attainment gaps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Nature/nurture",
                statement: "Genetics vs environment.",
              },
            ],
            steps: [
              {
                reasoning: "Nature: genetic differences claimed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Nurture: environment affects IQ/attainment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence favours interaction.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Both matter — most accept interaction rather than either alone.",
            commonErrors: ["One-sided nature or nurture."],
          },
        },
        {
          id: "asoc-u4-ic-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Intelligence and class.",
          parts: [
            { label: "a", prompt: "What is IQ?", marks: 1 },
            { label: "b", prompt: "Nature vs nurture?", marks: 3 },
            { label: "c", prompt: "Class and attainment?", marks: 3 },
            { label: "d", prompt: "Teacher labelling?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Intelligence/class",
                statement: "IQ+debate+class effects+labelling.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Cognitive ability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Genetics vs environment.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Evidence both ways.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Interaction accepted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Working-class underachieves.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Material deprivation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cultural capital.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Labels shape expectations.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Self-fulfilling prophecy.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) IQ (b) debate (c) class (d) labelling",
          },
        },
      ],
    },
    {
      id: "asoc-u4-ethnicity-gender",
      title: "Ethnicity and Gender in Education",
      skill: "Explain ethnicity and gender patterns in educational attainment.",
      lesson: {
        sections: [
          {
            heading: "Ethnicity and attainment",
            body: "Patterns vary — some groups outperform majority, others underachieve. Factors: material deprivation, language barriers, cultural differences, teacher labelling/stereotyping, 'ethnocentric' curriculum ignoring minority cultures.",
          },
          {
            heading: "Gender and attainment",
            body: "Historically girls underachieved; now girls often outperform boys at GCSE/A-level in many subjects. Explanations: changes in employment (women's roles), feminist influence on curriculum, subject choices still gendered (girls→humanities, boys→sciences), 'lad culture' affecting boys.",
          },
          {
            heading: "Intersection",
            body: "Class, ethnicity and gender combine — e.g., working-class girls face triple disadvantage; middle-class minority girls may do well. Intersectionality shows identities interact.",
          },
        ],
        keyFormulas: [
          {
            name: "Ethnicity/gender",
            statement:
              "Ethnicity: deprivation+labelling; Gender: girls now often outperform; intersection matters.",
          },
        ],
        workedExample: {
          problem: "Why do girls now outperform boys in many subjects?",
          solution:
            "Changed employment expectations, feminist curriculum influence, boys' 'lad culture' disengagement.",
        },
      },
      questions: [
        {
          id: "asoc-u4-eg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which group currently tends to outperform others in many subjects?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Girls" },
              { id: "b", text: "Boys" },
              { id: "c", text: "No difference" },
              { id: "d", text: "Only in science" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gender gap",
                statement: "Girls often outperform boys.",
              },
            ],
            steps: [
              {
                reasoning: "Girls outperform in many subjects.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Girls",
            commonErrors: ["Outdated assumption boys lead."],
          },
        },
        {
          id: "asoc-u4-eg-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two factors affecting ethnic minority attainment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethnic factors",
                statement: "Deprivation, language, labelling, curriculum.",
              },
            ],
            steps: [
              { reasoning: "Any two factors.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Material deprivation, language barriers, teacher labelling, ethnocentric curriculum.",
            commonErrors: ["Only one factor."],
          },
        },
        {
          id: "asoc-u4-eg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why subject choices remain gendered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subject gendering",
                statement: "Socialisation + stereotypes.",
              },
            ],
            steps: [
              {
                reasoning: "Early socialisation shapes interests.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subject stereotypes (sciences=boys).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Teacher/peer expectations.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Socialisation and stereotypes steer girls to humanities, boys to sciences.",
            commonErrors: ["Blaming students only."],
          },
        },
        {
          id: "asoc-u4-eg-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Ethnicity and gender in education.",
          parts: [
            {
              label: "a",
              prompt: "Ethnic minority attainment factors?",
              marks: 3,
            },
            { label: "b", prompt: "Gender gap today?", marks: 2 },
            { label: "c", prompt: "Why girls outperform?", marks: 2 },
            { label: "d", prompt: "Intersectionality?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethnicity/gender",
                statement: "Factors+gap+reasons+intersection.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Deprivation/language.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Labelling/curriculum.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Variation between groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Girls outperform many subjects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Subject choices still differ.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Employment changes/feminism.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Lad culture for boys.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Identities interact.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Triple disadvantage example.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) factors (b) gap (c) reasons (d) intersection",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "asoc-u4-4-3-notes",
      title: "Inequality in education — notes",
      summary: "Intelligence debate, class/ethnicity/gender attainment gaps.",
      sections: [
        {
          heading: "Intelligence/class",
          body: "Nature+nurture; material deprivation; cultural capital; labelling effects.",
        },
        {
          heading: "Ethnicity/gender",
          body: "Minority groups vary; girls often outperform boys; subject choices gendered; intersectionality matters.",
        },
      ],
    },
  ],
};
