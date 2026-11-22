import type { Lesson } from "../../../types.ts";

export const lesson532: Lesson = {
  id: "ciealgeo-u3-lesson-3-2",
  code: "3-2",
  title: "Industrialisation and Economic Change",
  goal: "I CAN explain industrial location, deindustrialisation and economic restructuring.",
  standards: ["Cambridge A Level Geography 9696", "Paper 2: economic"],

  vocabulary: [
    {
      term: "Industrialisation",
      definition: "Shift from agriculture to manufacturing.",
    },
    {
      term: "Deindustrialisation",
      definition: "Decline of manufacturing sector.",
    },
    {
      term: "Footloose industry",
      definition: "Industry not tied to location.",
    },
    { term: "Agglomeration", definition: "Clustering of industries." },
    {
      term: "Globalisation",
      definition: "Increasing economic interconnectedness.",
    },
    {
      term: "Post-industrial economy",
      definition: "Service-dominated economy.",
    },
  ],
  concepts: [
    {
      id: "ciealgeo-u3-s2-ind",
      title: "Industrialisation",
      skill: "Analyse industrial change.",
      lesson: {
        sections: [
          {
            heading: "Industrial location",
            body: "Factors: raw materials, labour, transport, markets, agglomeration economies, government incentives. Footloose industries seek low costs.",
          },
          {
            heading: "Deindustrialisation",
            body: "Manufacturing decline in developed countries — automation, competition from low-cost countries, service sector growth.",
          },
          {
            heading: "Globalisation",
            body: "Production fragmented globally. Supply chains span countries. MNCs locate where costs lowest.",
          },
        ],
        keyFormulas: [
          { name: "Industrialisation", statement: "agriculture→manufacturing" },
          { name: "Deindustrialisation", statement: "manufacturing decline" },
          { name: "Footloose", statement: "location flexible" },
        ],
        workedExample: {
          problem: "Why did manufacturing decline in UK/US?",
          solution:
            "Automation reduced labour needs, competition from Asia, service sector growth, globalisation shifted production.",
        },
      },
      questions: [
        {
          id: "ciealgeo-u3-ind-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is deindustrialisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Population growth",
              },
              {
                id: "b",
                text: "Decline of manufacturing sector",
              },
              {
                id: "c",
                text: "A type of trade",
              },
              {
                id: "d",
                text: "Increase in manufacturing",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Manufacturing decline.",
              },
            ],
            steps: [
              {
                reasoning: "Deindustrialisation = manufacturing decline.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Manufacturing decline",
          },
        },
        {
          id: "ciealgeo-u3-ind-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a footloose industry?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Footloose",
                statement: "Location flexible.",
              },
            ],
            steps: [
              {
                reasoning: "Industry not tied to specific location.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Seeks low costs, incentives.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Location flexible",
          },
        },
        {
          id: "ciealgeo-u3-ind-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What factors influence industrial location?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Location",
                statement: "Factors.",
              },
            ],
            steps: [
              {
                reasoning: "Raw materials, labour, transport.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Markets, agglomeration, incentives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Globalisation changes calculus.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Location factors",
          },
        },
        {
          id: "ciealgeo-u3-ind-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define industrialisation, deindustrialisation, footloose industry, agglomeration, globalisation, post-industrial. (b) What is industrialisation? (c) What is deindustrialisation? (d) What is footloose? (e) What factors influence location? (f) What causes deindustrialisation? (g) What is post-industrial economy? (h) Evaluate whether deindustrialisation is positive or negative.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Industrialisation",
                statement: "Change.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Agriculture→manufacturing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Manufacturing decline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Location flexible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Materials, labour, transport, markets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Automation, competition, globalisation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Service-dominated.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Jobs lost but efficiency gained.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Industrial change analysis.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Industrialisation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A decline in all economic activity" },
              { id: "b", text: "A type of population policy" },
              { id: "c", text: "A return to subsistence farming" },
              { id: "d", text: "A shift from agriculture toward manufacturing and industry" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Industrialisation", statement: "Structural shift toward manufacturing and industry." },
            ],
            steps: [{ reasoning: "Industrialisation increases the share of industry in the economy.", marks: 1, markCode: "M" }],
            finalAnswer: "Shift toward manufacturing and industry.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A country has 500,000 workers. Agriculture employs 40%, manufacturing 20% and services 40%. (a) How many workers are in manufacturing? (b) How many more workers are in services than manufacturing?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 100000, unit: "workers" },
              { label: "b", answer: 100000, unit: "workers" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Employment calculation", statement: "Sector employment = percentage x total workers." },
            ],
            steps: [
              { part: "a", reasoning: "0.20 x 500000 = 100000 workers.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "0.40 x 500000 - 100000 = 100000 workers.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 100000; b) 100000",
            commonErrors: ["Using percentages rather than worker numbers."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A footloose industry is likely to locate where:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is fixed beside a coal mine only" },
              { id: "b", text: "It must be near raw materials always" },
              { id: "c", text: "Labour costs are highest" },
              { id: "d", text: "Costs and incentives are favourable" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Footloose industry", statement: "Location is flexible and cost-sensitive." },
            ],
            steps: [{ reasoning: "Footloose industries seek low costs, skilled labour and incentives.", marks: 1, markCode: "M" }],
            finalAnswer: "Where costs and incentives are favourable.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q8",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the social and economic impacts of deindustrialisation in a former manufacturing region.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Deindustrialisation", statement: "Manufacturing decline creates both losses and restructuring opportunities." },
            ],
            steps: [
              { reasoning: "Job losses and unemployment can rise, especially among older workers.", marks: 1, markCode: "M" },
              { reasoning: "Tax revenue and local services may decline.", marks: 1, markCode: "M" },
              { reasoning: "New service and technology jobs may emerge over time.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion recognises short-term hardship and long-term restructuring.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deindustrialisation causes job and income losses but may be followed by service-sector growth.",
            commonErrors: ["Ignoring adjustment and recovery."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Agglomeration economies occur when firms benefit from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Clustering near suppliers, workers and markets" },
              { id: "b", text: "Locating only in rural areas" },
              { id: "c", text: "Avoiding all transport links" },
              { id: "d", text: "Operating in complete isolation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Agglomeration", statement: "Clustering creates shared labour, suppliers and knowledge benefits." },
            ],
            steps: [{ reasoning: "Proximity reduces costs and improves access to inputs and markets.", marks: 1, markCode: "M" }],
            finalAnswer: "Clustering near suppliers, workers and markets.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country's GDP is $800 billion. Industry contributes 25% of GDP and services contribute 60%. (a) What is industry's GDP contribution? (b) How much larger is services' contribution than industry's?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200000000000, unit: "USD" },
              { label: "b", answer: 280000000000, unit: "USD" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sector GDP", statement: "Sector contribution = percentage x total GDP." },
            ],
            steps: [
              { part: "a", reasoning: "0.25 x 800000000000 = 200000000000 USD.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "0.60 x 800000000000 - 200000000000 = 280000000000 USD.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 200000000000 USD; b) 280000000000 USD",
            commonErrors: ["Reporting percentages rather than GDP values."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q11",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the costs and benefits of offshoring manufacturing to lower-cost countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Offshoring", statement: "Production relocation creates efficiency gains but also job and ethical trade-offs." },
            ],
            steps: [
              { reasoning: "Lower labour and production costs can improve competitiveness.", marks: 1, markCode: "M" },
              { reasoning: "Home-country manufacturing jobs may be lost.", marks: 1, markCode: "M" },
              { reasoning: "Host countries may gain jobs but face weak labour or environmental standards.", marks: 1, markCode: "A" },
              { reasoning: "Supply-chain distance can increase transport and disruption risks.", marks: 1, markCode: "A" },
              { reasoning: "A justified conclusion weighs efficiency against equity and resilience.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Offshoring improves cost efficiency but can cause job losses, inequality and supply-chain risks.",
            commonErrors: ["One-sided cost-benefit assessment."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Deindustrialisation in developed countries is commonly caused by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automation, low-cost competition and growth of services" },
              { id: "b", text: "Rising demand for coal only" },
              { id: "c", text: "Universal increases in tariffs" },
              { id: "d", text: "A complete ban on services" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Deindustrialisation causes", statement: "Automation, competition and sectoral change reduce manufacturing share." },
            ],
            steps: [{ reasoning: "Manufacturing declines as technology and services expand.", marks: 1, markCode: "M" }],
            finalAnswer: "Automation, competition and service growth.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A factory produces 100,000 units using 500 workers. (a) What is output per worker? (b) If output rises to 120,000 units with the same workers, what is the new output per worker?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 200, unit: "units/worker" },
              { label: "b", answer: 240, unit: "units/worker" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Labour productivity", statement: "Output per worker = total output / number of workers." },
            ],
            steps: [
              { part: "a", reasoning: "100000 / 500 = 200 units per worker.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "120000 / 500 = 240 units per worker.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "a) 200; b) 240 units/worker",
            commonErrors: ["Dividing workers by output."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A post-industrial economy is characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Services dominating employment and output" },
              { id: "b", text: "No use of technology" },
              { id: "c", text: "Manufacturing as the largest sector" },
              { id: "d", text: "Only subsistence agriculture" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Post-industrial economy", statement: "Service sector becomes dominant after industrial decline." },
            ],
            steps: [{ reasoning: "Services replace manufacturing as the leading sector.", marks: 1, markCode: "M" }],
            finalAnswer: "Service-dominated economy.",
          },
        },
        {
          id: "ciealgeo-u3-ind-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how globalisation has changed industrial production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalised production", statement: "Firms locate stages of production across countries to reduce costs." },
            ],
            steps: [
              { reasoning: "Production is fragmented into supply chains across borders.", marks: 1, markCode: "M" },
              { reasoning: "Firms seek low-cost labour, inputs and favourable regulations.", marks: 1, markCode: "M" },
              { reasoning: "This increases efficiency but also creates dependency and vulnerability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Globalisation spreads production stages internationally, lowering costs but increasing interdependence.",
            commonErrors: ["Treating production as confined to one country."],
          },
        },
        {
          id: "ciealgeo-u3-ind-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which factor most directly attracts a footloose electronics firm to a location?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very remote location" },
              { id: "b", text: "Proximity to a coal seam only" },
              { id: "c", text: "High tariffs on imports" },
              { id: "d", text: "Skilled labour and transport links" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Location factors", statement: "Footloose firms prioritise labour, transport, markets and incentives." },
            ],
            steps: [{ reasoning: "Electronics production needs skilled workers and efficient distribution.", marks: 1, markCode: "M" }],
            finalAnswer: "Skilled labour and transport links.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealgeo-u3-ind-notes",
      title: "Industrialisation — notes",
      summary:
        "Deindustrialisation=manufacturing decline. Footloose industries seek low costs.",
      sections: [
        {
          heading: "Key idea",
          body: "Economic restructuring shifts from manufacturing to services.",
        },
        {
          heading: "Globalisation",
          body: "Production fragmented — supply chains span countries.",
        },
      ],
    },
  ],
};
