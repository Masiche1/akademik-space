import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "pypsc-u2-lesson-2-3",
  code: "2-3",
  title: "Energy and States of Matter",
  goal: "I CAN identify sources of energy and describe solids, liquids and gases.",
  standards: [
    "PYP Science: Energy and materials",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "Energy", definition: "The ability to do work or cause change — light, heat, sound, movement." },
    { term: "Light energy", definition: "Energy we can see — from the Sun, lamps and fires." },
    { term: "Heat energy", definition: "Energy that makes things warm — from the Sun, fires and our bodies." },
    { term: "Sound energy", definition: "Energy we hear — from voices, music and vibrations." },
    { term: "Solid", definition: "A state of matter with fixed shape and volume — like a rock or table." },
    { term: "Liquid / Gas", definition: "Liquid: fixed volume, takes container shape. Gas: no fixed shape or volume — fills any space." },
  ],
  concepts: [
    {
      id: "pypsc-u2l3-c1-sources-energy",
      title: "Sources of energy",
      skill: "Identify sources of light, heat, sound and movement energy.",
      lesson: {
        sections: [
          {
            heading: "Forms of energy",
            body: "Energy comes in different forms we can see and feel. **Light energy** lets us see — from the Sun, lamps, torches and fire. **Heat energy** warms things — from the Sun, fires, warm clothes and our bodies. **Sound energy** is what we hear — voices, music, drums. **Movement energy** makes things move — a rolling ball, a flying bird, a spinning top. All energy makes changes happen.",
          },
          {
            heading: "Where energy comes from",
            body: "The **Sun** is Earth's main energy source — it gives light and heat. Other sources: **electricity** powers lights and machines, **food** gives our bodies energy, **fuel** like petrol and gas powers vehicles. Energy can **change form**: a torch turns electrical energy into light; rubbing hands turns movement into heat.",
          },
        ],
        keyFormulas: [
          { name: "Energy forms", statement: "Light, heat, sound, movement (kinetic)" },
          { name: "Main sources", statement: "Sun, electricity, food, fuel" },
        ],
        workedExample: {
          problem: "A campfire gives out heat, light and sometimes sound. What forms of energy are these?",
          solution: "Heat energy (warms you), light energy (lets you see), and sound energy if it crackles or pops.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a source of LIGHT energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A table" },
              { id: "b", text: "A torch" },
              { id: "c", text: "A chair" },
              { id: "d", text: "A rock" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Light energy", statement: "Light energy comes from sources like the Sun, lamps and torches." },
            ],
            steps: [
              { reasoning: "A torch produces light; rocks, tables and chairs do not.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A torch",
            commonErrors: ["Choosing 'rock' — rocks do not give out light."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two different forms of energy a bouncing ball has.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy forms", statement: "A moving ball has movement (kinetic) energy and can make sound on impact." },
            ],
            steps: [
              { reasoning: "Movement energy — the ball is moving.", marks: 1, markCode: "M" },
              { reasoning: "Sound energy — it makes a noise when it hits the ground.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Movement energy and sound energy (also could mention it has potential energy when held up).",
            commonErrors: ["Only naming one form — a bouncing ball has several."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A wind-up toy car moves when you let it go. Trace the energy changes: where does the energy come from and what does it become?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transformation", statement: "Energy changes form: your movement (winding) → stored energy → movement of the car." },
            ],
            steps: [
              { reasoning: "Winding the car takes your movement energy and stores it.", marks: 1, markCode: "M" },
              { reasoning: "The stored energy becomes movement energy as the car rolls.", marks: 1, markCode: "M" },
              { reasoning: "Eventually it stops — energy changed to heat and sound through friction.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Your winding energy → stored energy → car's movement → heat/sound when it stops.",
            commonErrors: ["Saying energy 'disappears' — it changes form."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Energy is all around us.",
          parts: [
            { label: "a", prompt: "Name two sources of heat energy.", marks: 1 },
            { label: "b", prompt: "Name two sources of light energy.", marks: 1 },
            { label: "c", prompt: "Explain why the Sun is called Earth's main energy source.", marks: 2 },
            { label: "d", prompt: "Give one example of energy changing from one form to another.", marks: 2 },
            { label: "e", prompt: "Why is it important to save energy?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy sources and uses", statement: "Sun, electricity, food, fuel provide energy; energy changes form." },
            ],
            steps: [
              { part: "a", reasoning: "Fire, Sun, warm clothes, oven (any two).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Sun, torch, lamp, fire (any two).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The Sun gives light and heat that plants need and that drives weather.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Almost all energy on Earth traces back to the Sun.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "An example, e.g. torch: electricity → light; or rubbing hands: movement → heat.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Energy form change correctly identified.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Saving energy reduces waste, saves money and helps the environment.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) fire/sun (b) sun/torch (c) Sun powers plants+weather (d) e.g. torch electricity→light (e) saves resources/environment",
            commonErrors: ["In (d), saying 'energy is used up' — it changes form."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a source of heat energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A rock" },
              { id: "b", text: "A fire" },
              { id: "c", text: "A pencil" },
              { id: "d", text: "A table" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Heat energy", statement: "Heat energy comes from sources like fires, the Sun and warm bodies." },
            ],
            steps: [
              { reasoning: "A fire gives out heat energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** A fire",
            commonErrors: ["Choosing a rock — rocks do not give out heat energy."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many forms of energy are named: light, heat, sound and movement?",
          response: {
            type: "numeric",
            parts: [{ label: "Forms", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy forms", statement: "Light, heat, sound and movement are forms of energy." },
            ],
            steps: [
              { reasoning: "The forms are light, heat, sound and movement.", marks: 1, markCode: "M" },
              { reasoning: "There are four forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only three by forgetting sound."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how a torch changes energy from electricity into light.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transformation", statement: "Energy can change from one form to another." },
            ],
            steps: [
              { reasoning: "Electricity from the battery enters the torch.", marks: 1, markCode: "M" },
              { reasoning: "The torch changes electrical energy into light energy we can see.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The torch changes electrical energy into light energy.",
            commonErrors: ["Saying light is created from nothing — energy changes form."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is Earth's main source of energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Moon" },
              { id: "b", text: "A torch" },
              { id: "c", text: "The Sun" },
              { id: "d", text: "A rock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Sun as energy source", statement: "The Sun provides most of Earth's light and heat energy." },
            ],
            steps: [
              { reasoning: "The Sun is the main natural energy source.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** The Sun",
            commonErrors: ["Choosing the Moon — the Moon reflects light but is not the main source."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many energy forms are described here: torch light, drum sound, rolling ball movement and warm hands heat?",
          response: {
            type: "numeric",
            parts: [{ label: "Energy forms", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy forms", statement: "Light, sound, movement and heat are different energy forms." },
            ],
            steps: [
              { reasoning: "Torch light, drum sound, ball movement and hand heat are energy forms.", marks: 1, markCode: "M" },
              { reasoning: "There are four forms described.", marks: 1, markCode: "M" },
              { reasoning: "Each example shows a different kind of energy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting objects instead of energy forms — four forms are described."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What happens when you rub your hands together quickly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Heat changes into light only" },
              { id: "b", text: "Nothing happens" },
              { id: "c", text: "Sound disappears" },
              { id: "d", text: "Movement energy changes into heat energy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy transformation", statement: "Rubbing hands turns movement energy into heat." },
            ],
            steps: [
              { reasoning: "Movement energy becomes heat when hands rub.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Movement energy changes into heat energy",
            commonErrors: ["Saying heat appears from nothing — movement energy changes form."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many energy sources are named: the Sun, electricity, food and fuel?",
          response: {
            type: "numeric",
            parts: [{ label: "Sources", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Energy sources", statement: "The Sun, electricity, food and fuel are energy sources." },
            ],
            steps: [
              { reasoning: "The sources are the Sun, electricity, food and fuel.", marks: 1, markCode: "M" },
              { reasoning: "There are four sources.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting only two by forgetting food and fuel."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A campfire gives heat, light and sometimes crackling sound. Name the energy forms and explain where they come from.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy forms", statement: "Fire releases heat, light and sound energy as it burns fuel." },
            ],
            steps: [
              { reasoning: "Heat energy warms people near the fire.", marks: 1, markCode: "M" },
              { reasoning: "Light energy lets people see in the dark.", marks: 1, markCode: "M" },
              { reasoning: "Sound energy is the crackling noise from burning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heat, light and sound energy come from the burning fire.",
            commonErrors: ["Naming only light — fire gives several energy forms."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do scientists say energy changes form rather than disappears?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Energy only exists in the Sun" },
              { id: "b", text: "Energy can become a new form we cannot see" },
              { id: "c", text: "Energy cannot be measured" },
              { id: "d", text: "Energy is always used up completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy conservation", statement: "Energy changes form; it is not destroyed." },
            ],
            steps: [
              { reasoning: "Energy may become heat or sound that we notice less.", marks: 1, markCode: "M" },
              { reasoning: "It is not used up completely; it changes form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Energy can become a new form we cannot see",
            commonErrors: ["Choosing used up — energy changes form rather than disappearing."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many forms of energy does a bouncing ball show in the lesson: movement and sound?",
          response: {
            type: "numeric",
            parts: [{ label: "Forms", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ball energy", statement: "A bouncing ball shows movement energy and can make sound." },
            ],
            steps: [
              { reasoning: "Movement and sound are the two forms named.", marks: 1, markCode: "M" },
              { reasoning: "There are two forms.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting the ball itself — the question asks energy forms."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many different energy forms are shown by a lamp, a drum, a running child and a stove?",
          response: {
            type: "numeric",
            parts: [{ label: "Energy forms", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Energy forms", statement: "Lamp gives light, drum gives sound, running gives movement and stove gives heat." },
            ],
            steps: [
              { reasoning: "Lamp, drum, running child and stove show light, sound, movement and heat.", marks: 1, markCode: "M" },
              { reasoning: "There are four different forms.", marks: 1, markCode: "M" },
              { reasoning: "Each example matches a different energy form.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Counting examples as one form — each shows a different energy."],
          },
        },
        {
          id: "pypsc-q-u2l3c1-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is it important to save energy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect" },
              { id: "b", text: "It stops all light" },
              { id: "c", text: "It makes energy disappear forever" },
              { id: "d", text: "It reduces waste, saves money and helps the environment" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Saving energy", statement: "Saving energy reduces waste, saves resources and helps the environment." },
            ],
            steps: [
              { reasoning: "Saving energy reduces waste and helps resources last.", marks: 1, markCode: "M" },
              { reasoning: "It can also save money and reduce pollution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** It reduces waste, saves money and helps the environment",
            commonErrors: ["Saying energy disappears — saving means using less, not destroying energy."],
          },
        },
      ],
    },
    {
      id: "pypsc-u2l3-c2-states-matter",
      title: "Solids, liquids and gases",
      skill: "Describe the three states of matter and how heating and cooling change them.",
      lesson: {
        sections: [
          {
            heading: "Three states",
            body: "Matter exists in three **states**. **Solids** have a fixed shape and volume — a rock, a table, ice. **Liquids** have a fixed volume but take the shape of their container — water in a cup is cup-shaped, in a bottle is bottle-shaped. **Gases** have no fixed shape or volume — they spread out to fill any space, like air or steam.",
          },
          {
            heading: "Changing states with heat",
            body: "Heating adds energy and can change state: solid → liquid (**melting**), liquid → gas (**evaporating/boiling**). Cooling removes energy: gas → liquid (**condensing**), liquid → solid (**freezing**). Water shows all three: ice (solid) → water (liquid) → steam (gas). The substance is the same — only its state changes.",
          },
        ],
        keyFormulas: [
          { name: "Three states", statement: "Solid (fixed shape+volume), Liquid (fixed volume, container shape), Gas (fills space)" },
          { name: "State changes", statement: "Heat: melt, evaporate. Cool: condense, freeze" },
        ],
        workedExample: {
          problem: "Steam from a kettle is invisible at first then appears as mist. What state change is happening?",
          solution: "Steam (gas) is cooling and **condensing** into tiny water droplets (liquid) — that's the mist you see.",
        },
      },
      questions: [
        {
          id: "pypsc-q-u2l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a GAS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water" },
              { id: "b", text: "Air" },
              { id: "c", text: "Ice" },
              { id: "d", text: "Rock" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gas state", statement: "Gases have no fixed shape or volume and fill their container — air is a gas." },
            ],
            steps: [
              { reasoning: "Air is a gas; ice is solid, water is liquid, rock is solid.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Air",
            commonErrors: ["Choosing 'water' — water is liquid; steam is the gas form."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe two differences between a liquid and a gas.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Liquid vs gas", statement: "Liquid: fixed volume, container shape. Gas: no fixed volume, fills space." },
            ],
            steps: [
              { reasoning: "Difference 1: liquid has fixed volume; gas expands to fill any space.", marks: 1, markCode: "M" },
              { reasoning: "Difference 2: liquid takes container shape; gas spreads everywhere in container.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Liquid: fixed volume, takes container shape. Gas: no fixed volume, fills all space.",
            commonErrors: ["Saying 'liquids are heavier' — both can be; the difference is shape/volume behaviour."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sealed bottle of water is left in the freezer overnight. Describe what happens to the water inside and name the state change.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freezing", statement: "Cooling a liquid turns it into a solid — water freezes to ice." },
            ],
            steps: [
              { reasoning: "The cold removes energy from the water.", marks: 1, markCode: "M" },
              { reasoning: "The water turns into ice — it becomes solid.", marks: 1, markCode: "M" },
              { reasoning: "This is freezing — liquid to solid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Water freezes into ice — liquid to solid state change.",
            commonErrors: ["Saying the water 'disappears' — it changes state to solid ice."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Water can exist as ice, water and steam.",
          parts: [
            { label: "a", prompt: "Name the state of ice.", marks: 1 },
            { label: "b", prompt: "What happens when ice is heated? Name the change.", marks: 1 },
            { label: "c", prompt: "What happens when water is heated strongly? Name the change.", marks: 1 },
            { label: "d", prompt: "What happens when steam touches a cold surface? Name the change.", marks: 1 },
            { label: "e", prompt: "Is the substance still 'water' after these changes? Explain.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water states", statement: "Ice=solid, water=liquid, steam=gas; same substance, different states." },
            ],
            steps: [
              { part: "a", reasoning: "Ice is a solid.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "It melts — solid to liquid.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It evaporates/boils — liquid to gas (steam).", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It condenses — gas to liquid droplets.", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Yes — it is still water molecules.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Only the state (arrangement of particles) changed, not the substance.", marks: 1, markCode: "M" },
              { part: "e", reasoning: "This is why ice, water and steam are all 'water'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) solid (b) melts (c) evaporates/boils (d) condenses (e) yes — same substance, different state",
            commonErrors: ["In (e), saying steam is 'not water' — it is water in gas form."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What defines a solid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It takes the container's shape" },
              { id: "b", text: "It fills any space" },
              { id: "c", text: "It has a fixed shape and volume" },
              { id: "d", text: "It cannot be seen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Solid", statement: "A solid has a fixed shape and volume." },
            ],
            steps: [
              { reasoning: "Solids keep their own shape and size.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It has a fixed shape and volume",
            commonErrors: ["Choosing fills any space — that describes a gas."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many states of matter are named: solid, liquid and gas?",
          response: {
            type: "numeric",
            parts: [{ label: "States", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "States of matter", statement: "Matter exists as solid, liquid or gas." },
            ],
            steps: [
              { reasoning: "The states are solid, liquid and gas.", marks: 1, markCode: "M" },
              { reasoning: "There are three states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting four by adding plasma — the lesson covers three states."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how heating can change the state of a material.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heat and state", statement: "Heating adds energy and can turn solids into liquids or liquids into gases." },
            ],
            steps: [
              { reasoning: "Heat adds energy to the material.", marks: 1, markCode: "M" },
              { reasoning: "Extra energy can make particles move apart, changing solid to liquid or liquid to gas.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Heating adds energy, which can change a solid to liquid or liquid to gas.",
            commonErrors: ["Saying heat destroys the material — it only changes state."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is freezing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Solid turning into liquid" },
              { id: "b", text: "Liquid turning into solid" },
              { id: "c", text: "Gas turning into liquid" },
              { id: "d", text: "Liquid turning into gas" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Freezing", statement: "Freezing changes a liquid into a solid." },
            ],
            steps: [
              { reasoning: "Freezing is liquid to solid, such as water to ice.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Liquid turning into solid",
            commonErrors: ["Choosing melting — that is solid to liquid."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-9",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these state changes need heating: melting, freezing, evaporating and condensing?",
          response: {
            type: "numeric",
            parts: [{ label: "Heated changes", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Heat and cooling", statement: "Melting and evaporating need heat; freezing and condensing need cooling." },
            ],
            steps: [
              { reasoning: "Melting and evaporating are caused by heating.", marks: 1, markCode: "M" },
              { reasoning: "Freezing and condensing are caused by cooling.", marks: 1, markCode: "M" },
              { reasoning: "Two changes need heating.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting freezing — freezing needs cooling, not heating."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does a gas do inside a container?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It stays only at the bottom" },
              { id: "b", text: "It keeps one fixed shape" },
              { id: "c", text: "It spreads to fill all the space" },
              { id: "d", text: "It becomes a solid" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gas", statement: "A gas has no fixed shape or volume and fills its container." },
            ],
            steps: [
              { reasoning: "Gases spread out to fill available space.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It spreads to fill all the space",
            commonErrors: ["Choosing fixed shape — that describes a solid."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-11",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many states of matter are named in this list: solid, liquid and gas?",
          response: {
            type: "numeric",
            parts: [{ label: "States", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "States of matter", statement: "Solid, liquid and gas are the three states." },
            ],
            steps: [
              { reasoning: "Solid, liquid and gas are listed.", marks: 1, markCode: "M" },
              { reasoning: "There are three states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting properties instead of states."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Ice, water and steam look different but are the same substance. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "States of water", statement: "Ice, water and steam are water in solid, liquid and gas states." },
            ],
            steps: [
              { reasoning: "All three are made of water particles.", marks: 1, markCode: "M" },
              { reasoning: "Only the arrangement and movement of particles change with state.", marks: 1, markCode: "M" },
              { reasoning: "So they are the same substance in different states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "They are all water; only the state changed, not the substance.",
            commonErrors: ["Saying steam is a different substance — it is water vapour."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which observation best shows a gas changing state to a liquid?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ice melts in a warm room" },
              { id: "b", text: "Water droplets form on a cold mirror from steam" },
              { id: "c", text: "A solid becomes powder" },
              { id: "d", text: "Water freezes in a freezer" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Condensation", statement: "Condensation turns gas into liquid when it cools." },
            ],
            steps: [
              { reasoning: "Droplets on a cold surface show steam condensing.", marks: 1, markCode: "M" },
              { reasoning: "The other options show melting or freezing, not gas to liquid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Water droplets form on a cold mirror from steam",
            commonErrors: ["Choosing melting — that is solid to liquid."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-14",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many states of water are shown by ice, water and steam?",
          response: {
            type: "numeric",
            parts: [{ label: "States", answer: 3, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water states", statement: "Ice is solid, water is liquid and steam is gas." },
            ],
            steps: [
              { reasoning: "Ice, water and steam represent solid, liquid and gas.", marks: 1, markCode: "M" },
              { reasoning: "There are three states.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting two by forgetting steam is a gas."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How many of these are gases: ice, water, air and steam?",
          response: {
            type: "numeric",
            parts: [{ label: "Gases", answer: 2, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gas examples", statement: "Air and steam are gases; ice and water are not." },
            ],
            steps: [
              { reasoning: "Air and steam are gases.", marks: 1, markCode: "M" },
              { reasoning: "Ice is solid and water is liquid.", marks: 1, markCode: "M" },
              { reasoning: "Two items are gases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting water as a gas — water is liquid; steam is the gas."],
          },
        },
        {
          id: "pypsc-q-u2l3c2-16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What happens when steam touches a cold surface?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It melts" },
              { id: "b", text: "It condenses into liquid droplets" },
              { id: "c", text: "It freezes into ice" },
              { id: "d", text: "It disappears forever" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Condensation", statement: "Cooling steam condenses it into liquid water droplets." },
            ],
            steps: [
              { reasoning: "Cold surfaces cool steam into droplets.", marks: 1, markCode: "M" },
              { reasoning: "This is condensation, gas to liquid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It condenses into liquid droplets",
            commonErrors: ["Choosing freezing — freezing is liquid to solid, not gas to liquid."],
          },
        },
      ],
    },
  ],
};
