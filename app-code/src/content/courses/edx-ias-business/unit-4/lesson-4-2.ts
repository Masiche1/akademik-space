import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "eiasbiz-u4-lesson-4-2",
  code: "4-2",
  title: "Location and Facilities Management",
  goal: "I CAN evaluate factors influencing business location and facility layout.",
  standards: ["Edexcel IAS Business WBP01 Unit 4 — Operations Management"],
  vocabulary: [
    {
      term: "Location factors",
      definition: "Considerations in choosing where to operate.",
    },
    {
      term: "Raw material location",
      definition: "Near suppliers to reduce transport costs.",
    },
    {
      term: "Market location",
      definition: "Near customers to reduce delivery time/cost.",
    },
    { term: "Labour market", definition: "Availability and cost of workers." },
    {
      term: "Facilities layout",
      definition: "Arrangement of equipment and work areas.",
    },
    {
      term: "Cell production",
      definition: "Grouping machines by product family.",
    },
  ],
  concepts: [
    {
      id: "eiasbiz-u4-location",
      title: "Location Decisions",
      skill: "Evaluate factors affecting where a business locates.",
      lesson: {
        sections: [
          {
            heading: "Location factors",
            body: "**Market proximity**: near customers — retail, services. **Raw materials**: near sources — mining, food processing (perishables). **Labour**: cheap or skilled workforce. **Transport**: road/rail links, ports. **Cost**: land, rent, rates, utilities. **Government incentives**: grants, tax breaks for relocating.\n\n**Example**: call centre → low-cost country with English speakers; factory → near suppliers or customers.",
          },
          {
            heading: "Location methods",
            body: "**Quantitative**: score factors, weight by importance — objective comparison. **Qualitative**: judgement calls — reputation, quality of life. Most decisions combine both.\n\n**Trade-offs**: cheap labour may mean poor infrastructure; market proximity raises land costs.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Brewery needs water supply and distribution. Factor?",
          solution: "Raw material proximity (water) + transport links.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-loc-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a market location factor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Port access" },
              { id: "b", text: "Near suppliers" },
              { id: "c", text: "Near customers to reduce delivery" },
              { id: "d", text: "Low rent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Market location",
                statement: "Near customers.",
              },
            ],
            steps: [
              {
                reasoning: "Market = customer proximity.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Near customers",
            commonErrors: ["Supplier confused."],
          },
        },
        {
          id: "eiasbiz-u4-loc-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons a business locates near raw materials.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Raw material location",
                statement: "Reduce transport cost.",
              },
            ],
            steps: [
              {
                reasoning: "Reduce transport costs — heavy/bulky materials.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Perishables — reduce spoilage (food processing).",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Bulk reduction — process near source (sugar, minerals).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Transport cost, perishability, bulk reduction.",
            commonErrors: ["Market factor.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-loc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the trade-off between labour cost and infrastructure quality in location decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Location trade-offs",
                statement: "Cost vs quality.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Low-cost labour often in areas with poor infrastructure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Poor roads/power → higher transport/utility costs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skilled labour scarce in low-cost areas.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Decision weighs labour savings vs hidden costs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cheap labour vs poor infrastructure trade-off.",
            commonErrors: ["One factor only.", "No trade-off."],
          },
        },
        {
          id: "eiasbiz-u4-loc-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An online retailer must choose a warehouse location.",
          parts: [
            { label: "a", prompt: "Suggest two location factors.", marks: 4 },
            {
              label: "b",
              prompt: "Explain which matters most and why.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Location decision",
                statement: "Weighted factors.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Proximity to customer base — fast delivery.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Transport links — motorway/rail access.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Transport links most critical — delivery speed determines competitiveness.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Central location balances delivery times to all regions.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) customers+transport (b) transport critical",
            commonErrors: ["No factors.", "No priority."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-layout",
      title: "Facilities Layout and CAD/CAM",
      skill: "Compare layout types and explain automation technologies.",
      lesson: {
        sections: [
          {
            heading: "Layout types",
            body: "**Product layout**: assembly line — efficient for standardised products. **Process layout**: group similar machines — flexible for varied products (workshop/job shop). **Cell layout**: team-based groups — combines product+process benefits.\n\n**Layout criteria**: minimise transport/movement, reduce bottlenecks, flexibility vs efficiency.",
          },
          {
            heading: "CAD and CAM",
            body: "**CAD (Computer-Aided Design)**: design products digitally — faster, precise, easy modification. **CAM (Computer-Aided Manufacturing)**: machines controlled by computers — CNC machines, robots.\n\n**Automation benefits**: consistency, speed, less labour, 24/7 operation. **Costs**: high capital, less flexible, job displacement.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "CNC machine cuts parts from digital design. Tech?",
          solution: "CAD/CAM.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-lay-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a process layout?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Machines grouped by function/type" },
              { id: "b", text: "Assembly line" },
              { id: "c", text: "Office layout" },
              { id: "d", text: "Team cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Process layout",
                statement: "Group by function.",
              },
            ],
            steps: [
              {
                reasoning: "Process layout = function grouping.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Grouped by function",
            commonErrors: ["Product confused."],
          },
        },
        {
          id: "eiasbiz-u4-lay-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of CAD/CAM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CAD/CAM",
                statement: "Precision + automation.",
              },
            ],
            steps: [
              {
                reasoning: "Precision — computer-controlled accuracy.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Speed — faster production than manual.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Consistency — identical outputs every time.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Precision, speed, consistency.",
            commonErrors: ["Manual.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-lay-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why a company might choose process layout over product layout.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Layout choice",
                statement: "Flexibility vs efficiency.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Produces varied products — different routes through shop.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower setup cost — no dedicated line per product.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Skilled workers can handle multiple product types.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Trade-off: more movement, lower volume efficiency.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Variety + lower setup vs movement costs.",
            commonErrors: ["Product layout.", "No trade-off."],
          },
        },
        {
          id: "eiasbiz-u4-lay-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A furniture maker produces both standard and custom pieces.",
          parts: [
            { label: "a", prompt: "Recommend a layout approach.", marks: 4 },
            { label: "b", prompt: "Explain how CAD/CAM could help.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hybrid approach",
                statement: "Match layout to product.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Cell layout — teams handle product families.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Combines flow efficiency for standard + job flexibility for custom.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) CAD for custom designs — precise, easy modification.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) CAM/CNC for standard parts — consistent quality.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) cell layout (b) CAD custom+CAM standard",
            commonErrors: ["One layout.", "No tech."],
          },
        },
      ],
    },
    {
      id: "eiasbiz-u4-tech",
      title: "Technology in Operations",
      skill:
        "Evaluate automation, robotics and digital technology in production.",
      lesson: {
        sections: [
          {
            heading: "Automation types",
            body: "**Fixed automation**: dedicated machines — high volume, inflexible. **Programmable automation**: robots reprogrammed for different tasks — medium flexibility. **Flexible automation**: CNC, FMS — quick product changeover.\n\n**Robotics**: welding, assembly, painting — consistent, tireless, precise. **3D printing**: rapid prototyping, custom parts — low volume flexibility.",
          },
          {
            heading: "Digital technology",
            body: "**ERP systems**: integrate operations, inventory, finance — real-time data. **IoT sensors**: monitor machines — predictive maintenance before breakdowns. **Big data**: analyse production data — optimise processes.\n\n**Evaluation**: benefits (efficiency, quality, data) vs costs (capital, skills, job displacement, cybersecurity risk).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Robot welds car frames 24/7. Automation type?",
          solution: "Fixed automation.",
        },
      },
      questions: [
        {
          id: "eiasbiz-u4-tech-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is programmable automation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dedicated machine, no change" },
              { id: "b", text: "3D printing" },
              { id: "c", text: "Manual labour" },
              { id: "d", text: "Robot reprogrammed for different tasks" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Programmable automation",
                statement: "Reprogrammable robots.",
              },
            ],
            steps: [
              {
                reasoning: "Programmable = reprogrammable.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Reprogrammable",
            commonErrors: ["Fixed confused."],
          },
        },
        {
          id: "eiasbiz-u4-tech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of automation in production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation benefits",
                statement: "Consistency, speed, data.",
              },
            ],
            steps: [
              {
                reasoning: "Consistency — eliminates human error.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Speed — 24/7 operation, faster cycle times.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Data — sensors collect production data for optimisation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consistency, speed, data collection.",
            commonErrors: ["Manual.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-tech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two drawbacks of automation for businesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation drawbacks",
                statement: "Cost, skills, jobs.",
              },
            ],
            steps: [
              {
                reasoning: "High capital cost — expensive machines/robots.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Job displacement — workers replaced.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Less flexible — hard to change production.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cybersecurity risk — connected systems vulnerable.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Capital cost, jobs, inflexibility, security.",
            commonErrors: ["No drawbacks.", "Only one."],
          },
        },
        {
          id: "eiasbiz-u4-tech-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A manufacturer must decide whether to automate.",
          parts: [
            {
              label: "a",
              prompt: "Give two factors favouring automation.",
              marks: 4,
            },
            { label: "b", prompt: "Give two factors against.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation decision",
                statement: "Cost-benefit analysis.",
              },
            ],
            steps: [
              {
                reasoning: "(a) High volume — automation pays off at scale.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Consistent quality needed — machines eliminate errors.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Low volume/custom products — flexibility needed.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) High capital cost may not be affordable.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) volume+quality (b) flexibility+cost",
            commonErrors: ["One-sided.", "No factors."],
          },
        },
      ],
    },
  ],
};
