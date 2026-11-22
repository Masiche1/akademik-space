import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "s7-u3-lesson-3-1",
  code: "3-1",
  title: "Rocks and Plates",
  goal: "I CAN explain how the rock cycle recycles Earth materials, and use evidence from fossils, rocks and the seafloor to support the theory of plate tectonics.",
  standards: ["MS-ESS2-1", "MS-ESS2-3", "SEP: Developing and Using Models", "SEP: Analyzing and Interpreting Data"],
  vocabulary: [
    { term: "Rock cycle", definition: "The continuous set of processes that change rock from one type to another over time." },
    { term: "Sediment", definition: "Small pieces of rock, minerals or organic material that are moved by water, wind or ice and then deposited." },
    { term: "Igneous rock", definition: "Rock that forms when magma or lava cools and solidifies." },
    { term: "Metamorphic rock", definition: "Rock that changes its structure or minerals because of heat and pressure, without melting." },
    { term: "Plate tectonics", definition: "The theory that Earth's outer layer is broken into plates that move slowly over the mantle." },
    { term: "Seafloor spreading", definition: "The process in which new oceanic crust forms at a mid-ocean ridge and moves away from it." },
    { term: "Fossil", definition: "The preserved remains or traces of an organism that lived long ago." },
  ],
  concepts: [
    {
      id: "s7-u3-rock-cycle",
      title: "The rock cycle",
      skill: "Describe how rocks change between igneous, sedimentary and metamorphic types, and what energy drives the changes.",
      lesson: {
        sections: [
          {
            heading: "Three rock types",
            body: "Rocks are made of minerals and are classified by how they form.\n\n- **Igneous rock** forms when molten rock cools. Magma that cools slowly underground makes large crystals (granite). Lava that cools quickly at the surface makes tiny crystals (basalt).\n- **Sedimentary rock** forms when sediment is compacted and cemented together, often in layers (sandstone, limestone).\n- **Metamorphic rock** forms when heat and pressure change an existing rock while it stays solid (marble, slate).",
          },
          {
            heading: "A cycle with no start or end",
            body: "Any rock can become any other rock. Weathering and erosion break rock into sediment. Deposition, burial, compaction and cementation make sedimentary rock. Deeper burial with heat and pressure makes metamorphic rock. Melting makes magma, and cooling makes igneous rock. Uplift brings rock back to the surface.\n\nThe cycle has two energy sources. **Energy from the Sun and gravity** drive surface processes such as weathering, erosion and deposition through moving water, wind and ice. **Earth's internal heat** drives melting, metamorphism and the movement of plates.",
          },
        ],
        keyFormulas: [
          { name: "Igneous", statement: "Cooling and solidification of magma or lava" },
          { name: "Sedimentary", statement: "Weathering, erosion, deposition, compaction and cementation" },
          { name: "Metamorphic", statement: "Heat and pressure change rock without melting it" },
        ],
        workedExample: {
          problem: "Describe one pathway by which a sedimentary rock can become an igneous rock.",
          solution: "The sedimentary rock is buried deep in Earth, where Earth's internal heat melts it to form magma. When the magma cools and solidifies, it forms igneous rock.",
        },
      },
      questions: [
        {
          id: "s7-u3-rock-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of rock forms when magma cools and solidifies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metamorphic rock" },
              { id: "b", text: "Sedimentary rock" },
              { id: "c", text: "Igneous rock" },
              { id: "d", text: "Fossil rock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Igneous rock", statement: "Igneous rock forms when molten rock (magma or lava) cools and solidifies." },
            ],
            steps: [
              { reasoning: "Cooling and solidifying of magma forms igneous rock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Igneous rock",
            commonErrors: ["Choosing metamorphic rock; metamorphic rock forms from heat and pressure without melting."],
            examinerNote: "B1 for igneous.",
          },
        },
        {
          id: "s7-u3-rock-cycle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how sedimentary rock forms from exposed rock on a mountain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Sedimentary rock formation", statement: "Rock is weathered and eroded into sediment, which is deposited, buried, compacted and cemented." },
            ],
            steps: [
              { reasoning: "Weathering breaks the rock into pieces, and water, wind or ice carries (erodes) the sediment away.", marks: 1, markCode: "B" },
              { reasoning: "The sediment is deposited in layers, for example in a lake or sea, and buried by newer layers.", marks: 1, markCode: "B" },
              { reasoning: "The weight of the layers compacts the sediment and dissolved minerals cement the grains together into rock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Weathering and erosion produce sediment; it is deposited in layers and buried; compaction and cementation turn it into sedimentary rock.",
            commonErrors: ["Saying that sedimentary rock forms by melting and cooling.", "Leaving out compaction and cementation."],
            examinerNote: "B1 weathering and erosion / transport. B1 deposition and burial in layers. B1 compaction and cementation. Allow 'pressed together and glued' for compaction and cementation.",
          },
        },
        {
          id: "s7-u3-rock-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A geologist finds granite (an igneous rock) at Earth's surface.\n\nConstruct an explanation of how this granite could eventually become a metamorphic rock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "The rock cycle", statement: "Rocks change type through weathering, burial, heat and pressure, and melting; any rock can become any other." },
              { kind: "definition", name: "Metamorphic rock", statement: "Metamorphic rock forms when heat and pressure change a rock without melting it." },
            ],
            steps: [
              { reasoning: "Weathering and erosion break the granite into sediment.", marks: 1, markCode: "B" },
              { reasoning: "The sediment is deposited, buried, compacted and cemented to form sedimentary rock.", marks: 1, markCode: "B" },
              { reasoning: "Plate motion buries the sedimentary rock deeper in the crust, where temperature and pressure are high.", marks: 1, markCode: "B" },
              { reasoning: "The heat and pressure change the minerals and structure while the rock stays solid, forming metamorphic rock.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Granite is weathered into sediment, which forms sedimentary rock; burial with heat and pressure (without melting) then changes it into metamorphic rock.",
            commonErrors: ["Saying that granite melts to become metamorphic rock; melting would make magma and then igneous rock.", "Skipping the sediment stage without justification."],
            examinerNote: "Allow a direct route: granite buried and changed by heat and pressure (B1 B1) for the last two marks, with the first two marks awarded for correct detail of burial and no melting. Reject 'melts' for the metamorphic stage.",
          },
        },
        {
          id: "s7-u3-rock-cycle-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student studies two igneous rocks. Rock A has crystals about 5 mm across. Rock B has crystals less than 1 mm across. Both rocks have the same mineral composition.",
          parts: [
            { label: "a", prompt: "Name the process that changes lava into igneous rock.", marks: 1 },
            { label: "b", prompt: "Which rock most likely formed underground? Use the crystal sizes as evidence to explain your answer.", marks: 2 },
            { label: "c", prompt: "Identify the energy source that drives the surface processes of the rock cycle, such as weathering and erosion, and the energy source that drives melting and metamorphism.", marks: 2 },
            { label: "d", prompt: "The student claims that metamorphic rock is rock that has melted and cooled. Evaluate this claim.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cooling rate and crystal size", statement: "Slow cooling gives large crystals; fast cooling gives small crystals." },
              { kind: "principle", name: "Energy for the rock cycle", statement: "The Sun and gravity drive surface processes; Earth's internal heat drives melting and metamorphism." },
              { kind: "definition", name: "Metamorphic rock", statement: "Metamorphic rock forms by heat and pressure without melting." },
            ],
            steps: [
              { part: "a", reasoning: "Cooling and solidifying (crystallization).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Rock A formed underground (claim).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Its large crystals show slow cooling, because underground magma is insulated and loses heat slowly, giving time for crystals to grow.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Surface processes are driven by energy from the Sun (and gravity) moving water, wind and ice.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Melting and metamorphism are driven by Earth's internal heat.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The claim is incorrect: metamorphic rock forms while the rock stays solid.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Heat and pressure change the minerals and structure of the existing rock.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "If the rock did melt it would form magma and cool into igneous rock instead.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Cooling / solidification (b) Rock A; large crystals mean slow cooling underground (c) Sun and gravity for surface processes; Earth's internal heat for melting and metamorphism (d) Incorrect: metamorphic rock forms from heat and pressure without melting; a melted rock would become igneous.",
            commonErrors: ["In (b) choosing Rock B because it is 'smoother'.", "In (c) saying that the Sun melts rock.", "In (d) agreeing because both processes involve heat."],
            examinerNote: "(a) Allow solidifying, crystallizing, hardening. (b) The reasoning mark depends on a correct choice. (c) Allow 'gravity' alone for the surface energy source only if water or weathering is mentioned. Allow 'heat inside Earth' for internal heat.",
          },
        },
      ],
    },
    {
      id: "s7-u3-plate-tectonics-evidence",
      title: "Plate tectonics and its evidence",
      skill: "Use evidence from fossils, rocks and the seafloor to explain how plates move, and calculate the rate of seafloor spreading.",
      lesson: {
        sections: [
          {
            heading: "Moving plates",
            body: "Earth's rigid outer layer is broken into **plates** that float on the hot, slowly flowing mantle. Plates move a few centimeters each year, about as fast as fingernails grow. Where plates move apart, collide or slide past each other, we find earthquakes, volcanoes, mountains and ocean trenches.",
          },
          {
            heading: "Evidence for moving continents",
            body: "Scientists use several lines of evidence.\n\n- **Fossils:** the same land animals and plants, such as the reptile *Mesosaurus*, are found on continents now separated by oceans.\n- **Rocks and mountains:** matching rock layers and mountain ranges line up when the continents are fitted together.\n- **Climate clues:** glacier scratches are found in warm places, and coal-forming plants in cold places, so those lands must have moved.\n- **The seafloor:** at a mid-ocean ridge, magma rises and forms new crust. The rock is youngest at the ridge and gets older farther away, with matching patterns on both sides.",
          },
          {
            heading: "Rate of seafloor spreading",
            body: "$$\\text{rate}=\\frac{\\text{distance}}{\\text{time}}$$\n\nTo compare with everyday lengths, convert kilometers to centimeters: $1\\text{ km}=100{,}000\\text{ cm}$.",
          },
        ],
        keyFormulas: [
          { name: "Rate of movement", statement: "$\\text{rate}=\\dfrac{\\text{distance}}{\\text{time}}$" },
          { name: "Unit conversion", statement: "$1\\text{ km}=100{,}000\\text{ cm}$" },
          { name: "Seafloor age pattern", statement: "Youngest rock at the ridge, older rock farther away on both sides" },
        ],
        workedExample: {
          problem: "A rock on the seafloor is 500 km from a mid-ocean ridge and is 25 million years old. Calculate the average rate of seafloor spreading in cm/year.",
          solution: "Distance: $500\\times100{,}000=50{,}000{,}000\\text{ cm}$. Time: $25{,}000{,}000$ years. Rate $=\\dfrac{50{,}000{,}000}{25{,}000{,}000}=2\\text{ cm/year}$.",
        },
      },
      questions: [
        {
          id: "s7-u3-plate-tectonics-evidence-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Fossils of the same freshwater reptile, *Mesosaurus*, are found in South America and in Africa. Which idea does this evidence best support?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The reptile could swim across the Atlantic Ocean." },
              { id: "b", text: "Fossils form only near mid-ocean ridges." },
              { id: "c", text: "Earth's climate has never changed." },
              { id: "d", text: "The two continents were once joined together." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fossil evidence", statement: "Matching fossils on separated continents suggest the continents were once connected." },
            ],
            steps: [
              { reasoning: "A freshwater reptile could not cross a salt-water ocean, so the continents must have been joined.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The two continents were once joined together.",
            commonErrors: ["Choosing (a); a freshwater animal could not survive in the salty ocean."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u3-plate-tectonics-evidence-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe what happens at a mid-ocean ridge during seafloor spreading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seafloor spreading", statement: "New crust forms at a mid-ocean ridge as magma rises and cools, and the plates move apart." },
            ],
            steps: [
              { reasoning: "Plates move apart and magma rises from the mantle through the gap.", marks: 1, markCode: "B" },
              { reasoning: "The magma cools and solidifies to form new oceanic crust, which moves away from the ridge on both sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Magma rises where plates move apart and cools to form new crust, which spreads away from the ridge.",
            commonErrors: ["Saying that old crust is destroyed at the ridge; crust is destroyed at trenches (subduction zones)."],
            examinerNote: "B1 magma rises / plates move apart. B1 cools to form new crust that moves outward. Allow 'new seafloor is made'.",
          },
        },
        {
          id: "s7-u3-plate-tectonics-evidence-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rock sample from the seafloor is 1,200 km from a mid-ocean ridge. Radioactive dating shows that the rock is 60 million years old.\n\nCalculate the average rate of seafloor spreading in centimeters per year. ($1\\text{ km}=100{,}000\\text{ cm}$)",
          response: { type: "numeric", parts: [{ label: "Rate", answer: 2, unit: "cm/year" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate}=\\dfrac{\\text{distance}}{\\text{time}}$" },
              { kind: "property", name: "Unit conversion", statement: "$1\\text{ km}=100{,}000\\text{ cm}$" },
            ],
            steps: [
              { reasoning: "Convert the distance to centimeters.", working: "1200\\times100{,}000=120{,}000{,}000\\text{ cm}", marks: 1, markCode: "M" },
              { reasoning: "Divide the distance by the time in years (60 million = 60,000,000).", working: "\\text{rate}=\\frac{120{,}000{,}000}{60{,}000{,}000}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "=2\\text{ cm/year}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2\\text{ cm/year}$",
            commonErrors: ["Dividing 1,200 by 60 and leaving the answer as 20 km per million years without converting.", "Converting kilometers using 1,000 instead of 100,000."],
            examinerNote: "M1 conversion to cm (120 000 000). M1 distance / time. A1 for 2 cm/year. Award full marks for 2 cm/year, or for 20 km per million years with a correct conversion shown. Allow ecf.",
          },
        },
        {
          id: "s7-u3-plate-tectonics-evidence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Scientists study the Atlantic Ocean floor, which lies between South America and Africa. The Mid-Atlantic Ridge runs down the center of the ocean.",
          parts: [
            { label: "a", prompt: "Besides fossils, state **two** other pieces of evidence that the continents have moved.", marks: 2 },
            { label: "b", prompt: "Describe the pattern in the age of seafloor rock on either side of the Mid-Atlantic Ridge.", marks: 2 },
            { label: "c", prompt: "The seafloor spreads at an average rate of 2.5 cm/year. Calculate how far the seafloor moves in 4 million years. Give your answer in kilometers. ($1\\text{ km}=100{,}000\\text{ cm}$)", marks: 2 },
            { label: "d", prompt: "Construct an explanation (claim, evidence and reasoning) for why South America and Africa were once joined.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evidence for plate motion", statement: "Fossils, matching rocks and mountains, climate clues and seafloor ages all support moving plates." },
              { kind: "formula", name: "Distance", statement: "$\\text{distance}=\\text{rate}\\times\\text{time}$" },
              { kind: "principle", name: "Seafloor spreading", statement: "Rock is youngest at the ridge and older farther away on both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Any one valid piece of evidence, such as coastlines that fit together or matching mountain ranges.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "A second different piece, such as matching rock layers, glacial deposits in warm places or the seafloor age pattern.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The rock is youngest at the ridge.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It gets steadily older with distance from the ridge, with a matching (symmetrical) pattern on both sides.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Multiply rate by time to find the distance in centimeters.", working: "2.5\\times4{,}000{,}000=10{,}000{,}000\\text{ cm}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Convert to kilometers.", working: "\\frac{10{,}000{,}000}{100{,}000}=100\\text{ km}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Claim: the two continents were once joined as one landmass.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Evidence: identical Mesosaurus fossils (or matching rocks) are found on both continents, and the seafloor is youngest at the ridge between them.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reasoning: a freshwater reptile could not cross the ocean, and the seafloor ages show the continents moved apart as new crust formed.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Any two of: coastline fit; matching rocks or mountains; climate clues; seafloor age (b) Youngest at the ridge and older with distance on both sides (c) $100\\text{ km}$ (d) The continents were joined; matching fossils and the seafloor age pattern show they moved apart as new crust formed.",
            commonErrors: ["In (c) forgetting to convert centimeters to kilometers.", "In (b) saying that the rock is oldest at the ridge."],
            examinerNote: "(a) Reject fossils, since the question says besides fossils. (c) A1 for 100 km. Allow ecf for the conversion. (d) Each point must be linked to the claim; do not award evidence alone.",
          },
        },
      ],
    },
  ],
};
