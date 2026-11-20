import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "myps3-u2-lesson-2-3",
  code: "2-3",
  title: "Human Body Systems",
  goal: "I CAN describe the main organ systems, explain how they interact, and discuss homeostasis and the impacts of lifestyle and disease.",
  standards: [
    "Key concept: Relationships",
    "MYP Sciences: Living things",
    "Criterion A: Knowing and understanding",
    "Criterion D: Reflecting on the impacts of science",
  ],
  vocabulary: [
    { term: "Organ system", definition: "A group of organs working together to perform a function, e.g. digestive system." },
    { term: "Homeostasis", definition: "The maintenance of a stable internal environment despite external changes." },
    { term: "Negative feedback", definition: "A mechanism that reverses a change to keep conditions stable, e.g. temperature regulation." },
    { term: "Nervous system", definition: "The system of brain, spinal cord and nerves that coordinates responses." },
    { term: "Endocrine system", definition: "The system of glands that produce hormones to regulate body functions." },
    { term: "Excretory system", definition: "The system (mainly kidneys) that removes waste products from the body." },
  ],
  concepts: [
    {
      id: "myps3-u2-organ-systems",
      title: "Organ systems and their interactions",
      skill: "Describe the main organ systems and explain how they interact to maintain the body.",
      lesson: {
        sections: [
          {
            heading: "Main systems",
            body: "The body has several **organ systems** working together:\n\n- **Digestive**: breaks down food, absorbs nutrients\n- **Circulatory**: transports nutrients, oxygen and wastes\n- **Respiratory**: exchanges gases (O₂ in, CO₂ out)\n- **Nervous**: coordinates responses via nerves\n- **Endocrine**: regulates via hormones\n- **Excretory**: removes waste via kidneys",
          },
          {
            heading: "How they interact",
            body: "The **digestive system** absorbs nutrients into the blood. The **circulatory system** transports them to cells. The **respiratory system** provides O₂ for respiration and removes CO₂. The **nervous and endocrine systems** coordinate all these processes.",
          },
          {
            heading: "Homeostasis",
            body: "**Homeostasis** keeps internal conditions stable (temperature, blood glucose, pH). **Negative feedback** is the mechanism: a change triggers a response that reverses it. For example, if body temperature rises, sweating increases to cool it down; if it falls, shivering generates heat.",
          },
        ],
        keyFormulas: [
          { name: "Homeostasis", statement: "Maintenance of stable internal conditions" },
          { name: "Negative feedback", statement: "A change triggers a response that reverses it" },
        ],
        workedExample: {
          problem: "Explain how negative feedback regulates blood glucose.",
          solution: "When blood glucose rises after a meal, the pancreas releases insulin. Insulin causes cells to take up glucose and the liver to store it as glycogen, lowering blood glucose back to normal.",
        },
      },
      questions: [
        {
          id: "myps3-u2-organ-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ system is responsible for removing waste products from the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Digestive system" },
              { id: "b", text: "Circulatory system" },
              { id: "c", text: "Excretory system" },
              { id: "d", text: "Respiratory system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretory system", statement: "Removes waste products via kidneys." },
            ],
            steps: [
              { reasoning: "The excretory system (kidneys) removes wastes.", working: "\\text{excretory}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Excretory system",
            commonErrors: ["Choosing digestive — that breaks down food, not removes metabolic waste."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two organ systems that work together to supply oxygen to body cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "System interaction", statement: "Respiratory system absorbs O₂; circulatory system transports it." },
            ],
            steps: [
              { reasoning: "Respiratory system takes in O₂; circulatory transports it.", working: "\\text{respiratory + circulatory}", marks: 1, markCode: "M" },
              { reasoning: "State both.", working: "\\text{both systems}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Respiratory and circulatory systems",
            commonErrors: ["Naming only one system."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how negative feedback maintains body temperature when you exercise on a hot day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A change triggers a response that reverses it." },
            ],
            steps: [
              { reasoning: "Exercise and heat raise body temperature.", working: "\\text{temperature rises}", marks: 1, markCode: "M" },
              { reasoning: "Sweat glands are activated; sweat evaporates and cools the skin.", working: "\\text{sweating cools}", marks: 1, markCode: "M" },
              { reasoning: "Temperature returns to normal — negative feedback.", working: "\\text{returns to normal}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Temperature rises → sweating increases → evaporation cools body → temperature returns to normal",
            commonErrors: ["Saying the body just stops exercising."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Consider the following lifestyle factors: smoking, poor diet, lack of exercise.",
          parts: [
            { label: "a", prompt: "Explain how smoking affects the respiratory and circulatory systems.", marks: 3 },
            { label: "b", prompt: "Explain how a poor diet affects the digestive and circulatory systems.", marks: 3 },
            { label: "c", prompt: "Discuss why lack of exercise affects multiple body systems.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "System interactions", statement: "Lifestyle factors affect multiple systems." },
              { kind: "principle", name: "Health impacts", statement: "Poor lifestyle increases disease risk." },
            ],
            steps: [
              { part: "a", reasoning: "Smoking damages alveoli, reducing gas exchange efficiency.", working: "\\text{damages alveoli}", marks: 1, markCode: "R" },
              { part: "a", reasoning: "It also damages blood vessels and increases heart rate/blood pressure.", working: "\\text{damages vessels}", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Conclude both systems affected.", working: "\\text{both affected}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Poor diet (high fat/salt/sugar) leads to obesity and high blood pressure.", working: "\\text{obesity, high BP}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Digestive system may develop problems like ulcers or diabetes.", working: "\\text{digestive problems}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Circulatory system is strained by extra weight and cholesterol.", working: "\\text{circulatory strain}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Lack of exercise weakens muscles, bones and cardiovascular fitness.", working: "\\text{weakens multiple systems}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "It affects respiratory, circulatory, muscular and skeletal systems.", working: "\\text{multiple systems}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) smoking damages alveoli and blood vessels (b) poor diet causes obesity, high BP, digestive and circulatory problems (c) lack of exercise weakens multiple systems",
            commonErrors: ["Discussing only one system."],
            examinerNote: "R1 R1 A1 per part.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ system breaks down food and absorbs nutrients?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Circulatory system" },
              { id: "b", text: "Digestive system" },
              { id: "c", text: "Respiratory system" },
              { id: "d", text: "Excretory system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Digestive system", statement: "Breaks down food and absorbs nutrients into the blood." },
            ],
            steps: [
              { reasoning: "The digestive system handles food breakdown and nutrient absorption.", working: "\\text{digestive}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Digestive system",
            commonErrors: ["Choosing circulatory — it transports, but does not break down food."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which organ system transports oxygen, nutrients and waste products around the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nervous system" },
              { id: "b", text: "Endocrine system" },
              { id: "c", text: "Circulatory system" },
              { id: "d", text: "Respiratory system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Circulatory system", statement: "Heart and blood vessels transport substances around the body." },
            ],
            steps: [
              { reasoning: "The circulatory system uses blood to transport materials.", working: "\\text{circulatory}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Circulatory system",
            commonErrors: ["Choosing respiratory — it exchanges gases but does not transport nutrients."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does the nervous system differ from the endocrine system in coordinating the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nervous is slow and long-lasting; endocrine is fast" },
              { id: "b", text: "Nervous is fast and short-lived; endocrine is slower and longer-lasting" },
              { id: "c", text: "Both use hormones" },
              { id: "d", text: "Both use nerve impulses" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nervous vs endocrine", statement: "Nerves give fast, short responses; hormones give slower, longer-lasting responses." },
            ],
            steps: [
              { reasoning: "Nerve impulses are fast and brief; hormones travel in blood and act more slowly but longer.", working: "\\text{fast/brief vs slow/long}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Nervous is fast and short-lived; endocrine is slower and longer-lasting",
            commonErrors: ["Reversing the two systems."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the approximate normal human body temperature in °C?",
          response: { type: "numeric", parts: [{ label: "Temperature", answer: 37, unit: "°C" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Body temperature is maintained at about 37 °C." },
            ],
            steps: [
              { reasoning: "Normal body temperature is maintained near 37 °C.", working: "37\\text{ °C}", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "37\\text{ °C}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$37$ °C",
            commonErrors: ["Saying 100 °C (boiling point) or 0 °C (freezing point)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "After a meal, the nutrients absorbed by the digestive system are transported to body cells by the:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Respiratory system" },
              { id: "b", text: "Circulatory system" },
              { id: "c", text: "Excretory system" },
              { id: "d", text: "Endocrine system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "System interaction", statement: "Digested nutrients are absorbed into the blood and transported by the circulatory system." },
            ],
            steps: [
              { reasoning: "Blood carries absorbed nutrients from the digestive system to all cells.", working: "\\text{blood transport}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Circulatory system",
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organ system regulates body functions by producing hormones?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nervous system" },
              { id: "b", text: "Endocrine system" },
              { id: "c", text: "Digestive system" },
              { id: "d", text: "Excretory system" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Endocrine system", statement: "Glands produce hormones that regulate body functions." },
            ],
            steps: [
              { reasoning: "Hormones are produced by the endocrine glands.", working: "\\text{endocrine}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Endocrine system",
            commonErrors: ["Choosing nervous — that uses impulses, not hormones."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Homeostasis is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keeping the outside environment constant" },
              { id: "b", text: "Maintaining stable internal conditions despite external changes" },
              { id: "c", text: "Growing to full size" },
              { id: "d", text: "Responding only to injury" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Homeostasis", statement: "Maintenance of a stable internal environment." },
            ],
            steps: [
              { reasoning: "Homeostasis keeps internal conditions (temperature, glucose, pH) stable.", working: "\\text{stable internal conditions}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Maintaining stable internal conditions despite external changes",
            commonErrors: ["Thinking it means keeping the environment outside the body stable."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how negative feedback regulates blood glucose after a meal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A change triggers a response that reverses it." },
            ],
            steps: [
              { reasoning: "After a meal, blood glucose rises.", working: "\\text{glucose rises}", marks: 1, markCode: "M" },
              { reasoning: "The pancreas releases insulin; cells take up glucose and the liver stores it as glycogen.", working: "\\text{insulin}\\to\\text{uptake+glycogen}", marks: 1, markCode: "R" },
              { reasoning: "Blood glucose falls back to normal — the change is reversed.", working: "\\text{glucose returns to normal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Glucose rises → insulin released → glucose taken up/stored → glucose returns to normal",
            commonErrors: ["Naming glucagon — that raises glucose, used when levels are low."],
            examinerNote: "M1 R1 A1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats 75 times per minute. How many times does it beat in 2 hours?",
          response: { type: "numeric", parts: [{ label: "Beats", answer: 9000, unit: "beats" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × time", statement: "Total = rate per minute × minutes" },
            ],
            steps: [
              { reasoning: "2 hours = 120 minutes; total beats = rate × time.", working: "75\\times120", marks: 1, markCode: "M" },
              { reasoning: "Total = 9000 beats.", working: "75\\times120=9000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9000$ beats",
            commonErrors: ["Multiplying by 2 instead of 120 minutes."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "A person's heart beats 70 times per minute. How many times does it beat in one hour?",
          response: { type: "numeric", parts: [{ label: "Beats", answer: 4200, unit: "beats" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate × time", statement: "Total = rate per minute × minutes" },
            ],
            steps: [
              { reasoning: "One hour = 60 minutes.", working: "60\\text{ min}", marks: 1, markCode: "M" },
              { reasoning: "Total beats = $70\\times60=4200$.", working: "70\\times60=4200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4200$ beats",
            commonErrors: ["Multiplying by 24 instead of 60."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-organ-systems-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which organ is a main part of the excretory system?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stomach" },
              { id: "b", text: "Kidney" },
              { id: "c", text: "Lung" },
              { id: "d", text: "Heart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Excretory system", statement: "Mainly the kidneys, which remove waste products from the blood." },
            ],
            steps: [
              { reasoning: "The kidneys filter blood and produce urine.", working: "\\text{kidneys}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Kidney",
            commonErrors: ["Choosing the stomach — that is digestive."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-organ-systems-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Nervous responses are faster but shorter-lived than hormonal responses because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nerve impulses travel quickly along nerves while hormones travel more slowly in the blood" },
              { id: "b", text: "Hormones are always stronger than nerve impulses" },
              { id: "c", text: "The nervous system controls only muscles" },
              { id: "d", text: "Hormones act only during sleep" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Nervous vs endocrine", statement: "Nerves: fast, short-lived; hormones: slower, longer-lasting." },
            ],
            steps: [
              { reasoning: "Speed of nerve impulses vs slower transport of hormones in blood explains the difference.", working: "\\text{impulses fast};\\ \\text{hormones slow}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Nerve impulses travel quickly along nerves while hormones travel more slowly in the blood",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
    {
      id: "myps3-u2-health",
      title: "Homeostasis and health",
      skill: "Explain homeostasis mechanisms and evaluate the impacts of lifestyle and disease on body systems.",
      lesson: {
        sections: [
          {
            heading: "Homeostasis mechanisms",
            body: "The body maintains stable conditions through **negative feedback**. Examples:\n\n- **Temperature**: sweating cools; shivering warms\n- **Blood glucose**: insulin lowers; glucagon raises\n- **Blood pH**: buffers maintain ~7.4",
          },
          {
            heading: "Disease and lifestyle",
            body: "**Lifestyle diseases** (heart disease, type 2 diabetes, obesity) are linked to diet, exercise, smoking and stress. **Infectious diseases** are caused by pathogens (bacteria, viruses) and can be prevented by vaccination and good hygiene.",
          },
          {
            heading: "Evaluating impacts",
            body: "When evaluating health impacts, consider: which systems are affected, the mechanism of harm, the severity and reversibility, and individual vs population-level effects. For example, smoking affects respiratory (alveoli damage) and circulatory (artery narrowing) systems, increasing cancer and heart disease risk.",
          },
        ],
        keyFormulas: [
          { name: "Homeostasis", statement: "Stable internal environment maintained by negative feedback" },
          { name: "Lifestyle vs infectious disease", statement: "Lifestyle: linked to behaviour; Infectious: caused by pathogens" },
        ],
        workedExample: {
          problem: "Evaluate the impact of regular exercise on cardiovascular health.",
          solution: "Exercise strengthens the heart muscle, improves circulation, lowers blood pressure and reduces cholesterol. It benefits the circulatory system directly and supports respiratory efficiency. Effects are reversible — stopping exercise reduces benefits.",
        },
      },
      questions: [
        {
          id: "myps3-u2-health-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone lowers blood glucose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Glucagon" },
              { id: "b", text: "Insulin" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Insulin", statement: "Hormone that lowers blood glucose." },
            ],
            steps: [
              { reasoning: "Insulin causes cells to take up glucose.", working: "\\text{insulin}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Insulin",
            commonErrors: ["Choosing glucagon — that raises blood glucose."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-health-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a lifestyle disease and an infectious disease, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lifestyle disease", statement: "Linked to behaviour choices." },
              { kind: "definition", name: "Infectious disease", statement: "Caused by pathogens." },
            ],
            steps: [
              { reasoning: "Lifestyle: heart disease, diabetes. Infectious: flu, malaria.", working: "\\text{lifestyle: heart disease; infectious: flu}", marks: 1, markCode: "M" },
              { reasoning: "State the distinction.", working: "\\text{behaviour vs pathogen}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lifestyle diseases are linked to behaviour (e.g. heart disease); infectious diseases are caused by pathogens (e.g. flu)",
            commonErrors: ["Giving two examples of the same type."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-health-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how vaccination helps prevent infectious disease.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Vaccination", statement: "Introduces weakened pathogen to build immunity." },
            ],
            steps: [
              { reasoning: "Vaccine contains weakened/attenuated pathogen.", working: "\\text{weakened pathogen}", marks: 1, markCode: "M" },
              { reasoning: "Body produces antibodies against it without causing disease.", working: "\\text{antibodies produced}", marks: 1, markCode: "M" },
              { reasoning: "If exposed later, immune system recognises and destroys pathogen quickly.", working: "\\text{faster response}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Vaccination introduces a weakened pathogen so the body builds immunity without getting sick",
            commonErrors: ["Saying the vaccine kills the virus directly."],
            examinerNote: "M1 M1 R1.",
          },
        },
        {
          id: "myps3-u2-health-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A community has high rates of type 2 diabetes.",
          parts: [
            { label: "a", prompt: "Explain how type 2 diabetes affects the endocrine and circulatory systems.", marks: 3 },
            { label: "b", prompt: "Identify two lifestyle factors that increase the risk of type 2 diabetes.", marks: 2 },
            { label: "c", prompt: "Discuss how public health measures could reduce diabetes rates in the community.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diabetes mechanism", statement: "Insulin resistance or deficiency → high blood glucose." },
              { kind: "principle", name: "Public health", statement: "Measures to improve diet, exercise and awareness." },
            ],
            steps: [
              { part: "a", reasoning: "Endocrine: pancreas produces less insulin or cells resist it.", working: "\\text{insulin problem}", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Circulatory: high glucose damages blood vessels over time.", working: "\\text{vessel damage}", marks: 1, markCode: "R" },
              { part: "a", reasoning: "Conclude both systems affected.", working: "\\text{both affected}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Risk factors: poor diet (high sugar), lack of exercise, obesity.", working: "\\text{diet, exercise, obesity}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State two.", working: "\\text{any two}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Education about healthy eating and exercise.", working: "\\text{education}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Access to healthy food and safe exercise spaces.", working: "\\text{access}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Screening programmes for early detection.", working: "\\text{screening}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) endocrine: insulin resistance; circulatory: vessel damage (b) poor diet, lack of exercise (c) education, access to healthy food/exercise, screening",
            commonErrors: ["Not linking to specific systems."],
            examinerNote: "R1 R1 A1 for (a), M1 A1 for (b), R1 R1 A1 for (c).",
          },
        },
        {
          id: "myps3-u2-health-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which hormone raises blood glucose when levels fall too low?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Insulin" },
              { id: "b", text: "Glucagon" },
              { id: "c", text: "Adrenaline" },
              { id: "d", text: "Thyroxine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glucagon", statement: "Hormone that raises blood glucose by releasing stored glycogen." },
            ],
            steps: [
              { reasoning: "Glucagon raises glucose; insulin lowers it.", working: "\\text{glucagon}\\uparrow glucose", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Glucagon",
            commonErrors: ["Choosing insulin — that lowers glucose."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-health-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these diseases is caused by a pathogen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Type 2 diabetes" },
              { id: "b", text: "Heart disease" },
              { id: "c", text: "Influenza" },
              { id: "d", text: "Obesity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Infectious disease", statement: "Caused by pathogens such as bacteria or viruses." },
            ],
            steps: [
              { reasoning: "Influenza is caused by a virus; the others are lifestyle-related.", working: "\\text{virus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Influenza",
            commonErrors: ["Choosing type 2 diabetes — that is linked to lifestyle."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "myps3-u2-health-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is a lifestyle disease?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Type 2 diabetes" },
              { id: "b", text: "Malaria" },
              { id: "c", text: "Tuberculosis" },
              { id: "d", text: "Cholera" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Lifestyle disease", statement: "Linked to behaviour choices such as diet, exercise and smoking." },
            ],
            steps: [
              { reasoning: "Type 2 diabetes is linked to diet and exercise; the others are infectious.", working: "\\text{lifestyle-linked}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Type 2 diabetes",
            commonErrors: ["Choosing an infectious disease."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-health-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the normal pH of human blood?",
          response: { type: "numeric", parts: [{ label: "pH", answer: 7.4 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Blood pH", statement: "Buffers maintain blood pH at about 7.4." },
            ],
            steps: [
              { reasoning: "Blood pH is maintained slightly alkaline by buffers.", working: "pH\\approx7.4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "7.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.4$",
            commonErrors: ["Saying 7 — blood is slightly alkaline."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-health-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Blood glucose falls from 8 mmol/L to 6 mmol/L after insulin acts. Calculate the percentage decrease.",
          response: { type: "numeric", parts: [{ label: "Decrease", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage decrease = (initial − final) ÷ initial × 100" },
            ],
            steps: [
              { reasoning: "Decrease = 8 − 6 = 2 mmol/L.", working: "8-6=2", marks: 1, markCode: "M" },
              { reasoning: "Percentage decrease = $\\frac{2}{8}\\times100=25\\%$.", working: "\\frac{2}{8}\\times100=25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing by the final value instead of the initial value."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-health-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which practice most directly helps prevent the spread of infectious diseases?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eating more sugar" },
              { id: "b", text: "Hand washing and vaccination" },
              { id: "c", text: "Watching more television" },
              { id: "d", text: "Sleeping less" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disease prevention", statement: "Vaccination and good hygiene reduce transmission of pathogens." },
            ],
            steps: [
              { reasoning: "Hand washing removes pathogens; vaccines build immunity.", working: "\\text{hygiene+vaccination}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Hand washing and vaccination",
            commonErrors: ["Choosing an unrelated lifestyle factor."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-health-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The cardiovascular benefits of regular exercise (such as a stronger heart and lower blood pressure) are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Permanent and irreversible" },
              { id: "b", text: "Reversible — they decline if exercise stops" },
              { id: "c", text: "Caused by pathogens" },
              { id: "d", text: "Only possible in athletes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Health impacts", statement: "Exercise benefits are reversible — stopping exercise reduces them." },
            ],
            steps: [
              { reasoning: "Fitness adaptations are lost gradually when exercise stops.", working: "\\text{reversible}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Reversible — they decline if exercise stops",
            commonErrors: ["Saying the benefits are permanent."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-health-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Evaluate two methods of preventing infectious disease: vaccination and improved hygiene.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disease prevention", statement: "Vaccination builds individual immunity; hygiene reduces transmission." },
            ],
            steps: [
              { reasoning: "Vaccination gives long-term individual protection but requires a vaccine to exist and be administered.", working: "\\text{individual immunity}", marks: 1, markCode: "R" },
              { reasoning: "Hygiene (hand washing, clean water) reduces spread for everyone but must be maintained continuously.", working: "\\text{reduces transmission}", marks: 1, markCode: "R" },
              { reasoning: "Both are most effective when combined at individual and population level.", working: "\\text{combined effect}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vaccination gives individual immunity; hygiene reduces transmission — both work best together",
            commonErrors: ["Discussing only one method or giving no evaluation."],
            examinerNote: "R1 R1 A1.",
          },
        },
        {
          id: "myps3-u2-health-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "When body temperature rises above normal, the body responds by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Producing more sweat to cool the skin" },
              { id: "b", text: "Producing more heat" },
              { id: "c", text: "Storing more glucose" },
              { id: "d", text: "Slowing the heart rate" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Negative feedback", statement: "A change triggers a response that reverses it." },
            ],
            steps: [
              { reasoning: "Sweat evaporates from the skin, cooling the body back to normal temperature.", working: "\\text{sweat}\\to\\text{cooling}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Producing more sweat to cool the skin",
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "myps3-u2-health-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Blood glucose rises to 10 mmol/L after a meal and insulin lowers it to 5 mmol/L. Calculate the percentage decrease in blood glucose.",
          response: { type: "numeric", parts: [{ label: "Decrease", answer: 50, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "Percentage decrease = (initial − final) ÷ initial × 100" },
            ],
            steps: [
              { reasoning: "Decrease = 10 − 5 = 5 mmol/L.", working: "10-5=5", marks: 1, markCode: "M" },
              { reasoning: "Percentage decrease = $\\frac{5}{10}\\times100=50\\%$.", working: "\\frac{5}{10}\\times100=50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Dividing by the final value instead of the initial value."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "myps3-u2-health-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What maintains blood pH at approximately 7.4?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red blood cells" },
              { id: "b", text: "Buffers in the blood" },
              { id: "c", text: "White blood cells" },
              { id: "d", text: "Platelets" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Buffers", statement: "Chemicals that resist changes in pH, keeping blood near 7.4." },
            ],
            steps: [
              { reasoning: "Buffers neutralise excess acid or alkali in the blood.", working: "\\text{buffers}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Buffers in the blood",
            commonErrors: ["Choosing blood cells — they do not regulate pH."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "myps3-u2-health-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A disease that directly affects one body system often affects other systems too because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The systems are interdependent and rely on shared transport and coordination" },
              { id: "b", text: "Each system works completely independently" },
              { id: "c", text: "Diseases always spread to all organs at once" },
              { id: "d", text: "The immune system ignores damaged organs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "System interactions", statement: "Organ systems depend on each other for transport, coordination and waste removal." },
            ],
            steps: [
              { reasoning: "Interdependence means damage in one system reduces oxygen/nutrient supply to cells everywhere.", working: "\\text{knock-on effects}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The systems are interdependent and rely on shared transport and coordination",
            examinerNote: "B1 for (a).",
          },
        },
      ],
    },
  ],
};
