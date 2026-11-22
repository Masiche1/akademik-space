import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "eias-soc-u2-lesson-2-1",
  code: "2-1",
  title: "Culture and Subcultures",
  goal: "I CAN define culture and explain subcultures and countercultures.",
  standards: ["Edexcel IAS Sociology 9SO01 Unit 2 — Culture and Identity"],
  vocabulary: [
    {
      term: "Culture",
      definition: "Shared beliefs, values, norms and practices of a group.",
    },
    {
      term: "Subculture",
      definition: "Group within society sharing distinctive values/norms.",
    },
    {
      term: "Counterculture",
      definition: "Group rejecting dominant culture's values.",
    },
    {
      term: "High culture",
      definition: "Art/forms valued by elite — classical music, fine art.",
    },
    {
      term: "Popular culture",
      definition: "Culture of mass population — pop music, TV.",
    },
    {
      term: "Cultural capital",
      definition: "Knowledge, skills, education giving social advantage.",
    },
  ],
  concepts: [
    {
      id: "eias-soc-u2-culture",
      title: "Culture and Its Types",
      skill: "Define culture and distinguish high/popular culture.",
      lesson: {
        sections: [
          {
            heading: "Culture defined",
            body: "**Culture**: shared way of life — beliefs, values, norms, symbols, practices. Includes language, religion, art, food, dress. **Material culture**: physical objects — tools, buildings, technology. **Non-material culture**: beliefs, values, norms.\n\n**Culture and society**: culture provides shared meaning — enables cooperation. **Cultural diversity**: different cultures coexist — multiculturalism.",
          },
          {
            heading: "High vs popular culture",
            body: "**High culture**: elite forms — classical music, opera, fine art, literature. Associated with educated, wealthy classes. **Popular culture**: mass forms — pop music, TV, social media. Accessible to all.\n\n**Debate**: is high culture 'better'? Elitists say yes — popular is inferior. Critics say this devalues mass culture — all forms have merit.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Opera vs pop music. Which is high culture?",
          solution: "Opera — elite form.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-cult-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Individual preferences" },
              { id: "b", text: "Shared beliefs, values, norms and practices" },
              { id: "c", text: "Physical objects only" },
              { id: "d", text: "Genetic traits" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Culture",
                statement: "Shared way of life.",
              },
            ],
            steps: [
              {
                reasoning: "Culture = shared beliefs/values/practices.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Shared way of life",
            commonErrors: ["Objects only."],
          },
        },
        {
          id: "eias-soc-u2-cult-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two types of culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Culture types",
                statement: "High + popular.",
              },
            ],
            steps: [
              {
                reasoning: "High culture — elite forms (opera, fine art).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Popular culture — mass forms (pop, TV).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Subculture — group within society.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "High, popular, subculture.",
            commonErrors: ["Only one.", "Wrong type."],
          },
        },
        {
          id: "eias-soc-u2-cult-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish between subculture and counterculture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Sub vs counter",
                statement: "Within vs against.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subculture: group within society — shares some dominant values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Counterculture: rejects dominant values entirely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Example: goth subculture vs hippie counterculture.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Subculture may coexist; counterculture opposes.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Sub=within, counter=against dominant.",
            commonErrors: ["Same.", "No example."],
          },
        },
        {
          id: "eias-soc-u2-cult-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Classical music vs pop music debate.",
          parts: [
            {
              label: "a",
              prompt: "Identify which is high/popular culture.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Evaluate elitist view of culture.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Culture evaluation",
                statement: "Quality vs access.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Classical = high; pop = popular.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) High culture associated with elite classes.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Elitist view: high culture superior — but ignores context.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Popular culture valid — reflects mass society.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Boundaries blur — 'high' art can be popular (Beatles).",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) classical high (b) elitism limited",
            commonErrors: ["Pop superior.", "No evaluation."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u2-subcultures",
      title: "Subcultures and Youth Culture",
      skill: "Explain subcultures and their social functions.",
      lesson: {
        sections: [
          {
            heading: "Youth subcultures",
            body: "**Subculture**: group with shared style, values, rituals — mods, punks, goths, hip-hop. **Function**: identity, belonging, resistance to mainstream. **Style**: clothing, music, language — symbols of identity.\n\n**Cohen's study**: working-class youth subcultures — response to limited opportunities, identity through style.",
          },
          {
            heading: "Subculture theories",
            body: "**Functionalist**: subcultures fill gaps — provide belonging mainstream lacks. **Marxist**: subcultures resist dominant ideology — but may be co-opted (commodified). **Interactionist**: subculture as negotiated identity — members create meaning.\n\n**Evaluation**: subcultures show agency but often temporary — mainstream absorbs them.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Punk style — spiky hair, leather, anti-establishment. Type?",
          solution: "Counterculture/subculture.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-sub-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a subculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mainstream culture" },
              { id: "b", text: "Group within society with distinctive values" },
              { id: "c", text: "Global culture" },
              { id: "d", text: "National culture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subculture",
                statement: "Distinctive group.",
              },
            ],
            steps: [
              {
                reasoning: "Subculture = distinct group values.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Distinctive group",
            commonErrors: ["Mainstream confused."],
          },
        },
        {
          id: "eias-soc-u2-sub-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two functions of subcultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Subculture functions",
                statement: "Identity + belonging.",
              },
            ],
            steps: [
              {
                reasoning: "Identity — provides sense of self, belonging.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Resistance — alternative to mainstream values.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Support — peer group for those outside mainstream.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Identity, belonging, resistance.",
            commonErrors: ["No function.", "Only one."],
          },
        },
        {
          id: "eias-soc-u2-sub-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Cohen's study of working-class youth subcultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cohen",
                statement: "Status frustration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Working-class youth face limited opportunities — school/work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Status frustration — can't achieve mainstream success.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Subculture response — create alternative status via style.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Style as resistance — reject mainstream values.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Limited opportunities → subculture resistance.",
            commonErrors: ["No theory.", "No mechanism."],
          },
        },
        {
          id: "eias-soc-u2-sub-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Punk subculture becomes commercial fashion trend.",
          parts: [
            { label: "a", prompt: "Explain subculture co-optation.", marks: 4 },
            { label: "b", prompt: "Evaluate resistance durability.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Co-optation",
                statement: "Mainstream absorbs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Mainstream adopts style — commodifies subculture.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Original meaning lost — becomes fashion, not rebellion.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Resistance temporary — mainstream absorbs quickly.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) New subcultures emerge — cycle continues.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) commodified (b) temporary resistance",
            commonErrors: ["Permanent.", "No theory."],
          },
        },
      ],
    },
    {
      id: "eias-soc-u2-identity",
      title: "Identity, Gender and Ethnicity",
      skill: "Explain how gender and ethnicity shape identity.",
      lesson: {
        sections: [
          {
            heading: "Gender identity",
            body: "**Sex vs gender**: sex = biological; gender = social construction. **Gender socialisation**: family, school, media transmit gender roles — pink/blue, toys, careers. **Gender inequality**: women earn less, underrepresented in leadership.\n\n**Butler**: gender is performance — we 'do' gender through behaviour. **Connell**: hegemonic masculinity — dominant form of masculinity.",
          },
          {
            heading: "Ethnic identity",
            body: "**Ethnicity**: shared culture, ancestry, identity. **Ethnic socialisation**: family transmits language, religion, traditions. **Racism**: prejudice + discrimination based on ethnicity. **Multiculturalism**: society with multiple cultures — integration vs assimilation.\n\n**Evaluation**: identity complex — intersection of gender, class, ethnicity; not fixed.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Girl given dolls, boy given cars. Process?",
          solution: "Gender socialisation.",
        },
      },
      questions: [
        {
          id: "eias-soc-u2-gender-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is gender socialisation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Biological sex" },
              { id: "b", text: "Genetic traits" },
              { id: "c", text: "Learning gender roles from society" },
              { id: "d", text: "Physical development" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gender socialisation",
                statement: "Learned roles.",
              },
            ],
            steps: [
              {
                reasoning: "Gender socialisation = learned roles.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Learned roles",
            commonErrors: ["Sex confused."],
          },
        },
        {
          id: "eias-soc-u2-gender-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two agents of gender socialisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender agents",
                statement: "Family, media, school.",
              },
            ],
            steps: [
              {
                reasoning: "Family — toys, expectations, role models.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Media — stereotypical portrayals.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "School — subjects, career advice, peer pressure.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Family, media, school.",
            commonErrors: ["Only one.", "Wrong agent."],
          },
        },
        {
          id: "eias-soc-u2-gender-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain Butler's view that gender is performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender performance",
                statement: "Constructed through behaviour.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Gender not innate — constructed through repeated actions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Doing' gender — behaviours create appearance of natural.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Performance — we act out gender roles expected.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can be subverted — challenge gender norms.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Gender = repeated performance.",
            commonErrors: ["Innate.", "No construction."],
          },
        },
        {
          id: "eias-soc-u2-gender-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Woman engineers face discrimination in workplace.",
          parts: [
            {
              label: "a",
              prompt: "Explain using gender socialisation.",
              marks: 4,
            },
            { label: "b", prompt: "Suggest two solutions.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gender inequality",
                statement: "Socialisation + policy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Gender roles — engineering seen as 'male' field.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Stereotypes — women assumed less capable.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Challenge stereotypes — media, education.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Policy — equal opportunities, flexible work, mentoring.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) roles+stereotypes (b) challenge+policy",
            commonErrors: ["Ability only.", "No solution."],
          },
        },
      ],
    },
  ],
};
