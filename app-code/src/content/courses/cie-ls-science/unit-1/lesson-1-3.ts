import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "cils-u1-lesson-1-3",
  code: "1-3",
  title: "Safety and scientific communication",
  goal: "I CAN follow safety rules in the lab and communicate findings clearly.",
  standards: ["0893 Working scientifically: safety and communication"],
  vocabulary: [
    { term: "Hazard", definition: "Something that could cause harm — e.g. hot surfaces, chemicals." },
    { term: "Risk", definition: "Likelihood of harm from a hazard — managed by safety measures." },
    { term: "Safety rule", definition: "Procedure reducing risk, e.g. goggles, no running, point away from people." },
    { term: "Conclusion", definition: "Answer to the original question based on evidence." },
    { term: "Evaluation", definition: "Judgement of method quality — limitations, improvements." },
    { term: "Scientific report", definition: "Structured write-up: aim, method, results, conclusion, evaluation." },
  ],
  concepts: [
    {
      id: "cils-u1-safety",
      title: "Laboratory safety",
      skill: "Identify hazards, apply safety rules, and respond to accidents.",
      lesson: {
        sections: [
          {
            heading: "Common hazards",
            body: "- **Heat**: burns from flames, hot apparatus\n- **Chemicals**: irritants, corrosives, flammables\n- **Glass**: cuts, breakage\n- **Electrical**: shocks from damaged leads\n- **Biological**: microbes in cultures",
          },
          {
            heading: "Safety rules",
            body: "Goggles on when chemicals involved; tie hair back; no eating/drinking; point test tubes away; know fire extinguisher and first aid locations; report spills immediately.",
          },
          {
            heading: "Responding to accidents",
            body: "Minor cut: tell teacher, apply plaster. Chemical splash: flood with water 10 min. Fire: use extinguisher only if trained; otherwise evacuate.",
          },
        ],
        keyFormulas: [
          { name: "Safety", statement: "Hazard × exposure = risk; reduce exposure to reduce risk." },
        ],
        workedExample: {
          problem: "Why must you never point a heated test tube at yourself or others?",
          solution: "Heating can cause liquid to boil and spit — pointed away, spitting goes to the bench, not faces.",
        },
      },
      questions: [
        {
          id: "cils-u1-safety-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a hazard in a chemistry lab?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Wearing goggles" },
              { id: "b", text: "Lab coats" },
              { id: "c", text: "Using a clipboard" },
              { id: "d", text: "Corrosive chemicals" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hazard", statement: "Anything that could cause harm." },
            ],
            steps: [
              { reasoning: "Corrosive chemicals can burn skin — a hazard. Others are safety measures.", working: "hazard", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Corrosive chemicals",
            commonErrors: ["Choosing safety equipment — those reduce risk, aren't hazards."],
          },
        },
        {
          id: "cils-u1-safety-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a hazard and a risk.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Hazard vs risk", statement: "Hazard = source of harm; risk = chance of harm occurring." },
            ],
            steps: [
              { reasoning: "Hazard: the dangerous thing itself (e.g. acid).", working: "source", marks: 1, markCode: "M" },
              { reasoning: "Risk: likelihood/severity of harm from exposure to it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Hazard is the source of potential harm; risk is the chance that harm will actually occur.",
            commonErrors: ["Using them interchangeably."],
          },
        },
        {
          id: "cils-u1-safety-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student wants to heat a liquid in a test tube. List three safety precautions and explain why each matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Safety application", statement: "Point away, don't seal, wear goggles, use clamp." },
            ],
            steps: [
              { reasoning: "Point away from people — boiling liquid can spit.", working: "point away", marks: 1, markCode: "M" },
              { reasoning: "Don't seal tube — pressure builds, could explode.", working: "don't seal", marks: 1, markCode: "M" },
              { reasoning: "Wear goggles + hold with clamp — protection from splashes/heat.", working: "goggles+clamp", marks: 1, markCode: "M" },
              { reasoning: "Three valid precautions with reasons.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Point away, keep open, wear goggles, use clamp — prevents spitting, explosion, burns.",
            commonErrors: ["Listing rules without reasons — explanation required."],
          },
        },
        {
          id: "cils-u1-safety-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Write a safety section for a practical on testing which materials conduct electricity.",
          parts: [
            { label: "a", prompt: "Identify two hazards in this practical.", marks: 2 },
            { label: "b", prompt: "Give a safety precaution for each hazard.", marks: 2 },
            { label: "c", prompt: "Explain what to do if a wire becomes hot during testing.", marks: 2 },
            { label: "d", prompt: "Why is it important to unplug equipment after the test?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Safety planning", statement: "Identify hazards → precautions → emergency response → good practice." },
            ],
            steps: [
              { part: "a", reasoning: "Hazards: electric shock, overheating wires, broken glass/metal edges.", working: "hazards", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Shock: don't touch bare wires; heat: switch off immediately; sharp edges: handle carefully.", working: "precautions", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Matched pairs.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Switch off immediately, tell teacher, let cool before touching.", working: "switch off", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct response.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Prevents overheating, saves battery, avoids electric shock risk, good practice.", working: "reasons", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiple reasons.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shock + overheating (b) precautions matched (c) switch off, report (d) prevents accidents, saves power",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Hazards identified.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Precautions matched.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Mismatched.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Response correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Reasons clear.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["Generic safety statements not specific to the practical."],
          },
        },
        {
          id: "cils-u1-safety-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the main hazard when using a Bunsen burner?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Burns from heat or flame" },
              { id: "b", text: "Broken ruler" },
              { id: "c", text: "Spillage of water" },
              { id: "d", text: "Dust on paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hazard", statement: "A hazard is something that could cause harm." }],
            steps: [{ reasoning: "Open flames and hot apparatus can cause burns.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Burns from heat or flame",
          },
        },
        {
          id: "cils-u1-safety-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "A solution contains 25 cm³ of reagent made up to 200 cm³ with water. Enter the percentage of reagent in the final solution.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 12.5, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage", statement: "Percentage = part divided by whole × 100." }],
            steps: [{ reasoning: "$(25\\div 200)\\times 100 = 12.5\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$12.5\\%$",
          },
        },
        {
          id: "cils-u1-safety-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two examples of personal protective equipment used in a chemistry laboratory.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "PPE", statement: "Protective equipment reduces exposure to hazards." }],
            steps: [
              { reasoning: "Safety goggles protect eyes from splashes.", marks: 1, markCode: "M" },
              { reasoning: "Lab coat or gloves protect skin and clothes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Safety goggles and a lab coat or gloves.",
          },
        },
        {
          id: "cils-u1-safety-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if a chemical splashes onto your skin?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cover it with clothing" },
              { id: "b", text: "Wipe it off quickly" },
              { id: "c", text: "Flood with plenty of water and tell the teacher" },
              { id: "d", text: "Continue the experiment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Accident response", statement: "Chemical splashes should be flooded with water and reported." }],
            steps: [{ reasoning: "Water dilutes and removes the chemical; adults must be informed.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Flood with plenty of water and tell the teacher",
          },
        },
        {
          id: "cils-u1-safety-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A spill covers 15 cm² of a 60 cm² bench surface. Enter the percentage of the bench covered.",
          response: { type: "numeric", parts: [{ label: "Percentage", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage", statement: "Percentage = part divided by whole × 100." }],
            steps: [{ reasoning: "$(15\\div 60)\\times 100 = 25\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$25\\%$",
          },
        },
        {
          id: "cils-u1-safety-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Suggest three ways to reduce the risk of an electric shock during a circuit experiment.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Risk reduction", statement: "Reduce exposure to electrical hazards and inspect equipment." }],
            steps: [
              { reasoning: "Check wires and leads for damage before use.", marks: 1, markCode: "M" },
              { reasoning: "Do not touch bare conductors and switch off when changing components.", marks: 1, markCode: "M" },
              { reasoning: "Keep liquids away from sockets and equipment.", marks: 1, markCode: "A" }],
            finalAnswer: "Inspect leads, avoid touching bare wires, keep liquids away, and switch off when changing components.",
          },
        },
        {
          id: "cils-u1-safety-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should flammable liquids be kept away from flames?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They always freeze quickly" },
              { id: "b", text: "They cannot be measured" },
              { id: "c", text: "They can ignite easily and cause fire" },
              { id: "d", text: "They change colour near heat" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Flammable", statement: "Flammable substances ignite easily near flames." }],
            steps: [{ reasoning: "Heat can ignite flammable vapours or liquids.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** They can ignite easily and cause fire",
          },
        },
        {
          id: "cils-u1-safety-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A beaker contains 250 cm³ of solution and 50 cm³ is poured out. Enter the remaining volume in cm³.",
          response: { type: "numeric", parts: [{ label: "Remaining volume", answer: 200, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Volume", statement: "Remaining volume = initial volume minus volume removed." }],
            steps: [{ reasoning: "$250-50 = 200$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "$200$ cm³",
          },
        },
        {
          id: "cils-u1-safety-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do if you notice a damaged electrical lead?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Move it away from the bench" },
              { id: "b", text: "Cover it with tape and continue" },
              { id: "c", text: "Use it only for a short time" },
              { id: "d", text: "Stop using it and report it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Safety reporting", statement: "Faulty equipment should be removed and reported." }],
            steps: [{ reasoning: "Damaged leads can cause shocks or fires.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Stop using it and report it",
          },
        },
        {
          id: "cils-u1-safety-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A chemical must be diluted 1 in 5. A student has 30 cm³ of concentrate. Enter the final volume in cm³.",
          response: { type: "numeric", parts: [{ label: "Final volume", answer: 150, unit: "cm³" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Dilution", statement: "A 1 in 5 dilution gives a final volume five times the concentrate volume." }],
            steps: [{ reasoning: "$30\\times 5 = 150$ cm³.", marks: 1, markCode: "A" }],
            finalAnswer: "$150$ cm³",
          },
        },
        {
          id: "cils-u1-safety-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why it is unsafe to heat a sealed container.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "principle", name: "Pressure", statement: "Heating a sealed container can raise pressure and cause explosion." }],
            steps: [
              { reasoning: "Heating increases the energy and pressure of gases or vapours inside.", marks: 1, markCode: "M" },
              { reasoning: "A sealed container cannot release the pressure safely.", marks: 1, markCode: "M" },
              { reasoning: "The container may burst and cause injury or damage.", marks: 1, markCode: "A" }],
            finalAnswer: "A sealed container can explode because heating builds up pressure that cannot escape.",
          },
        },
        {
          id: "cils-u1-safety-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the correct first response to a minor cut in the laboratory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tell the teacher and use a plaster" },
              { id: "b", text: "Wash chemicals onto the cut" },
              { id: "c", text: "Ignore it and continue" },
              { id: "d", text: "Cover it with paper" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "First aid", statement: "Minor injuries should be reported and treated appropriately." }],
            steps: [{ reasoning: "Reporting ensures proper treatment and records the accident.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Tell the teacher and use a plaster",
          },
        },
      ],
    },
    {
      id: "cils-u1-communicate",
      title: "Scientific communication",
      skill: "Write clear conclusions and evaluations from experimental data.",
      lesson: {
        sections: [
          {
            heading: "Conclusion vs evaluation",
            body: "- **Conclusion**: answers the question using evidence ('salt does speed up dissolving')\n- **Evaluation**: judges the method ('results reliable but only tested at one temperature')",
          },
          {
            heading: "Good conclusions",
            body: "Reference specific data: 'dissolving time decreased from 60 s at 20°C to 25 s at 60°C, showing temperature increases dissolving rate.'",
          },
          {
            heading: "Good evaluations",
            body: "Identify limitations (one temperature range, human reaction time) and improvements (more repeats, better equipment).",
          },
        ],
        keyFormulas: [
          { name: "Conclusion", statement: "Must answer the aim using evidence — not just describe results." },
        ],
        workedExample: {
          problem: "Aim: test if fertiliser affects growth. Results: fertilised plants 15 cm, unfertilised 9 cm. Write a conclusion.",
          solution: "'Fertilised plants grew 6 cm taller (67% more), suggesting fertiliser increases growth — supports the hypothesis.'",
        },
      },
      questions: [
        {
          id: "cils-u1-comm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Describe the apparatus" },
              { id: "b", text: "Suggest new experiments" },
              { id: "c", text: "Answer the original question using evidence" },
              { id: "d", text: "List all raw data again" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Conclusion", statement: "Answers aim using evidence." },
            ],
            steps: [
              { reasoning: "Conclusion links results back to the original question.", working: "answer aim", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Answer the original question using evidence",
            commonErrors: ["Just restating results — must interpret them."],
          },
        },
        {
          id: "cils-u1-comm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between a conclusion and an evaluation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conclusion vs evaluation", statement: "Conclusion = what results show; evaluation = quality of method." },
            ],
            steps: [
              { reasoning: "Conclusion interprets results relative to the aim.", working: "interpret", marks: 1, markCode: "M" },
              { reasoning: "Evaluation judges reliability, limitations, improvements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusion answers the question from evidence; evaluation judges how good the method was.",
            commonErrors: ["Mixing them — evaluation isn't part of conclusion."],
          },
        },
        {
          id: "cils-u1-comm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Results: with fertiliser heights 15, 14, 16 cm; without: 9, 10, 9 cm. Write a conclusion and one evaluation point.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reporting", statement: "Conclusion cites means/data; evaluation notes limitations." },
            ],
            steps: [
              { reasoning: "Conclusion: fertilised mean ~15 cm vs unfertilised ~9.3 cm — fertiliser increases growth.", working: "15 vs 9.3", marks: 1, markCode: "M" },
              { reasoning: "Uses data evidence.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation: only 3 plants, one fertiliser type, short duration.", working: "limitations", marks: 1, markCode: "M" },
              { reasoning: "Valid evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Conclusion: fertiliser increased growth by ~6 cm. Evaluation: small sample, single conditions.",
            commonErrors: ["Conclusion without data reference — vague statements score less."],
          },
        },
        {
          id: "cils-u1-comm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Aim: Does surface area affect evaporation rate?",
          parts: [
            { label: "a", prompt: "State what a good conclusion must include.", marks: 2 },
            { label: "b", prompt: "Write a model conclusion using hypothetical data.", marks: 3 },
            { label: "c", prompt: "Give two limitations of a typical evaporation experiment.", marks: 2 },
            { label: "d", prompt: "Suggest one improvement for each limitation.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Scientific writing", statement: "Conclusion = evidence-based answer; evaluation = limitations + improvements." },
            ],
            steps: [
              { part: "a", reasoning: "Must reference data and answer the aim directly.", working: "evidence+answer", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "E.g. 'Water lost increased from 5 ml (small dish) to 18 ml (large dish), showing larger surface area increases evaporation.'", working: "model conclusion", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Data cited.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answers aim.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Limitations: temperature variation, air currents, measurement precision.", working: "limitations", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two valid.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Improvements: control temperature, use wind shield, repeat trials.", working: "improvements", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Matched improvements.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) evidence + direct answer (b) data-cited conclusion (c) temp/air currents (d) control temp, shield, repeats",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Requirements stated.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "Conclusion strong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Limitations valid.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Invalid.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Improvements matched.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Mismatched.", part: "d" },
            ],
            commonErrors: ["Evaluation repeating conclusion instead of judging method."],
          },
        },
        {
          id: "cils-u1-comm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should an evaluation of an experiment include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title again" },
              { id: "b", text: "A list of equipment" },
              { id: "c", text: "Only the final result" },
              { id: "d", text: "Limitations and possible improvements" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Evaluation judges method quality, limitations and improvements." }],
            steps: [{ reasoning: "Evaluation assesses how reliable and valid the method was.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Limitations and possible improvements",
          },
        },
        {
          id: "cils-u1-comm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Three trial times are 20, 24 and 22 s. Enter the mean time in s.",
          response: { type: "numeric", parts: [{ label: "Mean", answer: 22, unit: "s" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Mean", statement: "Mean = sum divided by count." }],
            steps: [{ reasoning: "$(20+24+22)\\div 3 = 22$ s.", marks: 1, markCode: "A" }],
            finalAnswer: "$22$ s",
          },
        },
        {
          id: "cils-u1-comm-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a conclusion for this result: plants with fertiliser reached a mean height of 16 cm; plants without fertiliser reached 10 cm.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion", statement: "A conclusion answers the aim using evidence." }],
            steps: [
              { reasoning: "State that fertilised plants grew taller.", marks: 1, markCode: "M" },
              { reasoning: "Include the data values 16 cm and 10 cm.", marks: 1, markCode: "A" }],
            finalAnswer: "Fertiliser increased mean plant height from 10 cm to 16 cm.",
          },
        },
        {
          id: "cils-u1-comm-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement is an evaluation rather than a conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water was added each day" },
              { id: "b", text: "Only three plants were tested, so results may not be reliable" },
              { id: "c", text: "Fertilised plants grew taller" },
              { id: "d", text: "The mean height was 16 cm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Evaluation", statement: "Evaluation judges limitations and reliability of the method." }],
            steps: [{ reasoning: "Commenting on sample size assesses reliability.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Only three plants were tested, so results may not be reliable",
          },
        },
        {
          id: "cils-u1-comm-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A result improved from 40 bubbles/min to 50 bubbles/min. Enter the percentage increase.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 25, unit: "%" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Percentage change", statement: "Percentage increase = change divided by original × 100." }],
            steps: [{ reasoning: "$(50-40)\\div 40 \\times 100 = 25\\%$.", marks: 1, markCode: "A" }],
            finalAnswer: "$25\\%$",
          },
        },
        {
          id: "cils-u1-comm-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Give one limitation of an evaporation experiment and one improvement.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Evaluation", statement: "Identify a limitation and link it to a practical improvement." }],
            steps: [
              { reasoning: "Air movement or temperature may vary during the experiment.", marks: 1, markCode: "M" },
              { reasoning: "This could affect evaporation rate and reliability.", marks: 1, markCode: "M" },
              { reasoning: "Use a wind shield and control temperature.", marks: 1, markCode: "A" }],
            finalAnswer: "Air movement may affect evaporation; use a wind shield and control temperature.",
          },
        },
        {
          id: "cils-u1-comm-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which section of a scientific report should state what question the investigation answers?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Results" },
              { id: "b", text: "Conclusion" },
              { id: "c", text: "Aim" },
              { id: "d", text: "Evaluation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Scientific report", statement: "The aim states the question being investigated." }],
            steps: [{ reasoning: "The aim identifies the purpose and question.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Aim",
          },
        },
        {
          id: "cils-u1-comm-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Trial readings are 12, 18, 15 and 21 cm. Enter the range in cm.",
          response: { type: "numeric", parts: [{ label: "Range", answer: 9, unit: "cm" }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Range", statement: "Range = largest minus smallest value." }],
            steps: [{ reasoning: "$21-12 = 9$ cm.", marks: 1, markCode: "A" }],
            finalAnswer: "$9$ cm",
          },
        },
        {
          id: "cils-u1-comm-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which conclusion is strongest because it uses evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plants like fertiliser" },
              { id: "b", text: "Fertiliser is probably good for plants" },
              { id: "c", text: "The experiment worked well" },
              { id: "d", text: "Mean growth rose from 10 cm to 16 cm, so fertiliser increased growth" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Evidence-based conclusion", statement: "Strong conclusions cite data and answer the aim." }],
            steps: [{ reasoning: "The strongest conclusion includes measurements and links them to the aim.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Mean growth rose from 10 cm to 16 cm, so fertiliser increased growth",
          },
        },
        {
          id: "cils-u1-comm-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Four measurements are 5, 7, 6 and 8 cm. Enter the number of measurements greater than 6 cm.",
          response: { type: "numeric", parts: [{ label: "Count", answer: 2 }] },
          markscheme: {
            principles: [{ kind: "skill", name: "Data counting", statement: "Count values satisfying the stated condition." }],
            steps: [{ reasoning: "Values greater than 6 are 7 and 8: two values.", marks: 1, markCode: "A" }],
            finalAnswer: "2",
          },
        },
        {
          id: "cils-u1-comm-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write one conclusion and one evaluation point for an experiment where temperatures were not controlled.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Conclusion and evaluation", statement: "Conclusion uses results; evaluation identifies uncontrolled variables." }],
            steps: [
              { reasoning: "Conclusion should state what the results showed using data.", marks: 1, markCode: "M" },
              { reasoning: "Evaluation should identify temperature as an uncontrolled variable.", marks: 1, markCode: "M" },
              { reasoning: "Suggest controlling temperature or repeating under stable conditions.", marks: 1, markCode: "A" }],
            finalAnswer: "Conclusion: state the observed effect using data. Evaluation: temperature was uncontrolled; control it in future tests.",
          },
        },
        {
          id: "cils-u1-comm-q16",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should units be included when quoting results in a conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They show the quantity and scale of the measurement" },
              { id: "b", text: "They remove the need for evidence" },
              { id: "c", text: "They prove the experiment was fair" },
              { id: "d", text: "They make conclusions longer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Units", statement: "Measurements require units to be meaningful." }],
            steps: [{ reasoning: "Units identify whether a value is length, mass, volume or time.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** They show the quantity and scale of the measurement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-u1-safety-comm-notes",
      title: "Safety and communication — revision notes",
      summary: "Lab hazards and rules, conclusions vs evaluations.",
      sections: [
        {
          heading: "Safety",
          body: "Hazard = source of harm; risk = chance of harm. Know rules: goggles, point away, don't seal heated tubes, report spills. Respond calmly, tell teacher.",
        },
        {
          heading: "Communication",
          body: "Conclusion answers aim with data. Evaluation judges method — limitations and improvements. Never just describe results.",
        },
      ],
    },
  ],
};
