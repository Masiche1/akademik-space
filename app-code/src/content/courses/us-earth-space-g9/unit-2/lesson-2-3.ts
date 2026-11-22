import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ess9-u2-lesson-2-3",
  code: "2-3",
  title: "Weather and Climate",
  goal: "I CAN explain how solar energy drives atmospheric circulation and ocean currents, and track carbon through Earth's spheres with a quantitative carbon budget.",
  standards: ["HS-ESS2-4", "HS-ESS2-6", "HS-ESS2-7", "SEP: Developing and Using Models", "CCC: Energy and Matter", "CCC: Systems and System Models"],
  vocabulary: [
    { term: "Solar constant", definition: "The solar energy arriving at the top of the atmosphere on a surface facing the Sun, about 1361 W/m^2." },
    { term: "Hadley cell", definition: "A large circulation cell in which air rises at the equator, flows poleward aloft, sinks near 30 degrees latitude and returns near the surface." },
    { term: "Coriolis effect", definition: "The apparent deflection of moving air and water caused by Earth's rotation: to the right in the Northern Hemisphere and left in the Southern." },
    { term: "Thermohaline circulation", definition: "Deep ocean circulation driven by differences in water density, which depends on temperature and salinity." },
    { term: "Carbon sink", definition: "A reservoir that absorbs more carbon than it releases, such as oceans and growing forests." },
    { term: "Gigaton of carbon (GtC)", definition: "One billion metric tons of carbon, a unit used for carbon cycle budgets." },
  ],
  concepts: [
    {
      id: "ess9-u2-energy-circulation-currents",
      title: "Energy flow, atmospheric circulation and ocean currents",
      skill: "Calculate absorbed solar energy and explain how uneven heating and Earth's rotation drive winds and ocean currents.",
      lesson: {
        sections: [
          {
            heading: "Energy in, energy out",
            body: "Sunlight is Earth's main energy source. The solar constant is about $S_0 = 1361\\text{ W/m}^2$ on a surface facing the Sun. Earth intercepts sunlight over a disk of area $\\pi r^2$ but has a surface area of $4\\pi r^2$, so the average over the whole planet is $\\frac{S_0}{4} \\approx 340\\text{ W/m}^2$. About 30% is reflected (planetary albedo $\\alpha \\approx 0.30$) by clouds, ice and the surface, so the absorbed energy is:\n\n$$\\frac{S_0}{4}(1 - \\alpha)$$\n\nIn balance, Earth emits the same amount back to space as infrared radiation. If less escapes than arrives, the planet warms.",
          },
          {
            heading: "Circulation of air and water",
            body: "The tropics receive more energy per square meter than the poles because sunlight strikes them more directly. This uneven heating drives circulation:\n\n- **Atmosphere:** warm air rises at the equator, flows poleward, cools and sinks near $30^\\circ$ latitude (**Hadley cell**), producing rainy tropics and dry subtropical deserts. Similar cells exist at middle and high latitudes.\n- **Coriolis effect:** Earth's rotation deflects winds and currents to the right in the Northern Hemisphere and left in the Southern, producing trade winds, westerlies and circular ocean **gyres**.\n- **Ocean currents:** surface currents are driven by wind. Warm currents such as the Gulf Stream carry heat toward the poles. Cold, salty water sinks near the poles and drives deep **thermohaline circulation**.\n\nTogether, winds and currents redistribute energy and strongly influence regional climate.",
          },
        ],
        keyFormulas: [
          { name: "Average sunlight", statement: "$\\dfrac{S_0}{4} \\approx 340\\text{ W/m}^2$" },
          { name: "Absorbed energy", statement: "$\\dfrac{S_0}{4}(1 - \\alpha)$" },
          { name: "Speed", statement: "$v = \\dfrac{d}{t}$" },
        ],
        workedExample: {
          problem: "A current moves water at 0.50 m/s. How many days does it take to travel 2000 km?",
          solution: "Convert: $2000\\text{ km} = 2.0\\times10^{6}\\text{ m}$. Time $= \\frac{d}{v} = \\frac{2.0\\times10^{6}}{0.50} = 4.0\\times10^{6}\\text{ s}$. There are $86{,}400\\text{ s}$ per day, so $\\frac{4.0\\times10^{6}}{86400} \\approx 46.3$ days.",
        },
      },
      questions: [
        {
          id: "ess9-u2-energy-circulation-currents-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does the equator receive more solar energy per square meter than the poles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Earth's rotation gives the equator more daylight hours every day." },
              { id: "b", text: "Sunlight strikes the equator more directly, so it is spread over a smaller area." },
              { id: "c", text: "The equator is closer to the Sun by a large distance." },
              { id: "d", text: "The poles are covered by ocean, which reflects all light." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Angle of incidence", statement: "Direct sunlight concentrates energy over a smaller area; oblique sunlight spreads it over a larger area." },
            ],
            steps: [
              { reasoning: "At the equator the Sun's rays hit at a steep angle, so each square meter receives more energy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Sunlight strikes the equator more directly, so it is spread over a smaller area.",
            commonErrors: ["Choosing (a): the difference in distance from the Sun is negligible (about 6,400 km out of 150 million km).", "Choosing (d): day length does not explain the difference; the angle of the Sun's rays does."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u2-energy-circulation-currents-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The solar constant is $1361\\text{ W/m}^2$ and Earth's planetary albedo is 0.30.\n\nCalculate the average solar energy absorbed per square meter of Earth's surface. Give your answer to 1 decimal place.",
          response: { type: "numeric", parts: [{ label: "Absorbed energy", answer: 238.2, unit: "W/m^2", tolerance: 0.2 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Global average sunlight", statement: "Average incoming energy $= \\dfrac{S_0}{4}$ because sphere area is four times the disk area." },
              { kind: "formula", name: "Absorbed energy", statement: "$\\dfrac{S_0}{4}(1 - \\alpha)$" },
            ],
            steps: [
              { reasoning: "Average incoming energy over the sphere.", working: "\\frac{1361}{4} = 340.25\\text{ W/m}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the fraction absorbed.", working: "340.25 \\times (1 - 0.30) = 340.25 \\times 0.70", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "238.2\\text{ W/m}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$238.2\\text{ W/m}^2$",
            commonErrors: ["Forgetting to divide by 4 (952.7).", "Multiplying by the albedo (102.1) instead of $1 - \\alpha$."],
            examinerNote: "M1 for 1361/4. M1 for x 0.70. A1 for 238.2 (allow 238). ecf allowed.",
          },
        },
        {
          id: "ess9-u2-energy-circulation-currents-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Earth absorbs an average of $238.2\\text{ W/m}^2$ but emits $236.0\\text{ W/m}^2$ to space. Earth's surface area is $5.1\\times10^{14}\\text{ m}^2$.\n\nCalculate the total rate of energy gain by Earth in watts. Give your answer in units of $10^{15}\\text{ W}$ to 2 decimal places.",
          response: { type: "numeric", parts: [{ label: "Energy gain rate", answer: 1.12, unit: "x 10^15 W", tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Energy balance", statement: "Net energy gain = energy absorbed minus energy emitted; a positive imbalance warms the planet." },
              { kind: "formula", name: "Power from flux", statement: "$P = \\text{flux}\\times\\text{area}$" },
            ],
            steps: [
              { reasoning: "Find the net flux.", working: "238.2 - 236.0 = 2.2\\text{ W/m}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the surface area.", working: "2.2 \\times 5.1\\times10^{14}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate in watts.", working: "1.122\\times10^{15}\\text{ W}", marks: 1, markCode: "A" },
              { reasoning: "Express in units of $10^{15}\\text{ W}$ to 2 decimal places.", working: "\\approx 1.12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.12\\times10^{15}\\text{ W}$",
            commonErrors: ["Using the absorbed flux instead of the net flux.", "Powers of ten errors when multiplying."],
            examinerNote: "M1 net flux 2.2. M1 x area. A1 1.122 x 10^15. A1 1.12. Allow ecf.",
          },
        },
        {
          id: "ess9-u2-energy-circulation-currents-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The Gulf Stream carries warm water from the tropics toward northwestern Europe. Use the solar constant of $1361\\text{ W/m}^2$ and a planetary albedo of 0.30 where needed.",
          parts: [
            { label: "a", prompt: "Explain why the tropics receive more energy per square meter than the poles.", marks: 1 },
            { label: "b", prompt: "Calculate the average solar energy reaching each square meter of Earth's surface, and explain why the solar constant is divided by 4.", marks: 2 },
            { label: "c", prompt: "A section of the current moves at 1.5 m/s. Calculate the time in days to travel 3000 km at this speed. Give your answer to 1 decimal place.", marks: 2 },
            { label: "d", prompt: "Explain how Earth's rotation affects the direction of surface currents and winds.", marks: 2 },
            { label: "e", prompt: "Explain how ocean currents help reduce the temperature difference between the equator and the poles.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Average sunlight", statement: "$\\dfrac{S_0}{4}$, because Earth intercepts sunlight over area $\\pi r^2$ but has surface area $4\\pi r^2$." },
              { kind: "formula", name: "Speed", statement: "$t = \\dfrac{d}{v}$" },
              { kind: "principle", name: "Coriolis effect", statement: "Moving fluids are deflected right in the Northern Hemisphere and left in the Southern Hemisphere." },
            ],
            steps: [
              { part: "a", reasoning: "Sunlight strikes the equator more directly, concentrating energy over a smaller area than at the poles where it is spread out.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the solar constant by 4 and give the reason: Earth is a sphere, with a surface area four times its sunlit disk area.", working: "\\frac{1361}{4} = 340.25\\text{ W/m}^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the explanation for the factor of 4: sunlight intercepted over $\\pi r^2$ is spread over $4\\pi r^2$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Convert to meters and divide by speed, then convert seconds to days.", working: "t = \\frac{3.0\\times10^{6}}{1.5} = 2.0\\times10^{6}\\text{ s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 86,400 s per day.", working: "\\frac{2.0\\times10^{6}}{86400} \\approx 23.1\\text{ days}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Earth's rotation causes the Coriolis effect, which deflects moving air and water.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Deflection is to the right in the Northern Hemisphere and left in the Southern, producing circular gyres and trade winds / westerlies.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Warm currents carry thermal energy from low latitudes toward the poles.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Cold currents return cool water toward the equator, so heat is redistributed and temperature differences are reduced.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) More direct sunlight over a smaller area (b) 340.25 W/m$^2$; area of sphere is 4 times the disk area (c) 23.1 days (d) Coriolis deflection forms gyres and wind belts (e) Currents move heat poleward and return cold water",
            commonErrors: ["In (c) forgetting to convert km to m (giving 0.023 days) or seconds to days.", "In (d) saying the Sun's pull causes deflection."],
            examinerNote: "(b) Allow 340. (c) Allow 23 days. (d) Reject 'wind blows around Earth because of gravity'. (e) Allow 'Gulf Stream warms Europe' as an example.",
          },
        },
      ],
    },
    {
      id: "ess9-u2-carbon-cycle-spheres",
      title: "The carbon cycle across Earth's spheres",
      skill: "Describe carbon fluxes among the geosphere, hydrosphere, atmosphere and biosphere and calculate carbon budgets.",
      lesson: {
        sections: [
          {
            heading: "Carbon reservoirs and fluxes",
            body: "Carbon moves among four spheres. Each store is a **reservoir** and each movement is a **flux**.\n\n- **Atmosphere:** carbon dioxide ($\\text{CO}_2$) and methane ($\\text{CH}_4$). About 880 GtC.\n- **Biosphere:** carbon in plants, soils and animals. Photosynthesis moves carbon from air to living things; respiration and decay return it.\n- **Hydrosphere:** $\\text{CO}_2$ dissolves in oceans and forms carbonic acid, bicarbonate and carbonate. Marine organisms build shells of $\\text{CaCO}_3$. The ocean holds about 38,000 GtC.\n- **Geosphere:** limestone, coal, oil and natural gas hold tens of millions of GtC. Volcanoes release $\\text{CO}_2$ slowly; burial of dead organisms and shells locks carbon away for millions of years.\n\nBurning fossil fuels moves carbon from the geosphere to the atmosphere far faster than geologic processes can remove it.",
          },
          {
            heading: "Carbon budgets",
            body: "Each year humans emit roughly 10 GtC from fossil fuels and land use. Oceans and land ecosystems absorb part of it, and the remainder stays in the air:\n\n$$\\Delta(\\text{atmosphere}) = \\text{emissions} - \\text{ocean uptake} - \\text{land uptake}$$\n\nThe **airborne fraction** is the share of emissions that remains in the atmosphere. Roughly $2.13\\text{ GtC}$ added to the atmosphere raises concentration by $1\\text{ ppm}$ of $\\text{CO}_2$. As the ocean absorbs $\\text{CO}_2$, it becomes more acidic, harming organisms that build shells.",
          },
        ],
        keyFormulas: [
          { name: "Carbon budget", statement: "$\\Delta\\text{atm} = \\text{emissions} - \\text{ocean uptake} - \\text{land uptake}$" },
          { name: "Airborne fraction", statement: "$\\dfrac{\\Delta\\text{atm}}{\\text{emissions}}$" },
          { name: "Conversion", statement: "$2.13\\text{ GtC} \\approx 1\\text{ ppm CO}_2$" },
        ],
        workedExample: {
          problem: "In a year, emissions are 9.0 GtC, the ocean absorbs 2.4 GtC and land absorbs 3.0 GtC. Find the increase in atmospheric CO2 in ppm.",
          solution: "Atmospheric increase $= 9.0 - 2.4 - 3.0 = 3.6\\text{ GtC}$. Convert: $\\frac{3.6}{2.13} \\approx 1.69\\text{ ppm}$, about 1.7 ppm.",
        },
      },
      questions: [
        {
          id: "ess9-u2-carbon-cycle-spheres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process moves carbon from the atmosphere into the biosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Photosynthesis" },
              { id: "b", text: "Respiration" },
              { id: "c", text: "Combustion of fossil fuels" },
              { id: "d", text: "Volcanic eruption" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Photosynthesis", statement: "Plants and algae take in $\\text{CO}_2$ and convert it into organic carbon compounds." },
            ],
            steps: [
              { reasoning: "Photosynthesis removes CO2 from the air and builds it into living tissue.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Photosynthesis",
            commonErrors: ["Choosing (a): respiration returns carbon to the atmosphere.", "Choosing (b) or (d): both add carbon to the atmosphere."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "ess9-u2-carbon-cycle-spheres-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In one year, human emissions are 10.0 GtC. The oceans absorb 2.6 GtC and land ecosystems absorb 3.1 GtC.\n\nCalculate the amount of carbon that stays in the atmosphere.",
          response: { type: "numeric", parts: [{ label: "Carbon remaining in the atmosphere", answer: 4.3, unit: "GtC" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Conservation of matter", statement: "Carbon is conserved, so emissions equal uptake plus the increase in the atmosphere." },
            ],
            steps: [
              { reasoning: "Subtract both sinks from emissions.", working: "10.0 - 2.6 - 3.1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "4.3\\text{ GtC}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.3\\text{ GtC}$",
            commonErrors: ["Adding the sinks to the emissions (15.7).", "Subtracting only one sink."],
            examinerNote: "M1 for subtracting both sinks. A1 for 4.3.",
          },
        },
        {
          id: "ess9-u2-carbon-cycle-spheres-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Use the budget above: 4.3 GtC stays in the atmosphere each year, and 2.13 GtC raises atmospheric $\\text{CO}_2$ by 1 ppm.\n\nCalculate the rise in $\\text{CO}_2$ concentration in ppm after 25 years, assuming the same budget each year. Give your answer to the nearest ppm.",
          response: { type: "numeric", parts: [{ label: "Rise after 25 years", answer: 50, unit: "ppm", tolerance: 1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conversion", statement: "$2.13\\text{ GtC} \\approx 1\\text{ ppm}$" },
            ],
            steps: [
              { reasoning: "Total carbon added over 25 years.", working: "4.3 \\times 25 = 107.5\\text{ GtC}", marks: 1, markCode: "M" },
              { reasoning: "Convert to ppm by dividing by 2.13.", working: "\\frac{107.5}{2.13}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx 50.5\\text{ ppm}", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest ppm. (Accept 50 or 51.)", working: "\\approx 50\\text{ ppm}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $50\\text{ ppm}$",
            commonErrors: ["Multiplying by 2.13 instead of dividing.", "Forgetting to multiply by 25 years."],
            examinerNote: "M1 107.5. M1 / 2.13. A1 50.5. A1 50 or 51 (accept both). Tolerance covers 49 to 51.",
          },
        },
        {
          id: "ess9-u2-carbon-cycle-spheres-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A carbon budget for one year is: fossil fuel and land-use emissions 10.0 GtC, ocean uptake 2.6 GtC, land uptake 3.1 GtC. Atmospheric carbon is 880 GtC at the start of the year.",
          parts: [
            { label: "a", prompt: "Name the sphere that stores most of Earth's carbon in rocks such as limestone.", marks: 1 },
            { label: "b", prompt: "Calculate the airborne fraction as a percent. Give your answer to the nearest percent.", marks: 2 },
            { label: "c", prompt: "Calculate the percent increase in atmospheric carbon over the year. Give your answer to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Explain how burning fossil fuels changes the carbon cycle compared with natural volcanic emissions.", marks: 2 },
            { label: "e", prompt: "Explain how increased ocean uptake of carbon dioxide can harm organisms such as corals and shellfish.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Airborne fraction", statement: "$\\dfrac{\\text{atmospheric increase}}{\\text{emissions}}$" },
              { kind: "principle", name: "Ocean acidification", statement: "Dissolved CO2 forms carbonic acid, lowering pH and reducing the carbonate ions needed for shells." },
            ],
            steps: [
              { part: "a", reasoning: "Carbon in sedimentary rocks such as limestone is stored in the geosphere.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Increase in the atmosphere is $10.0 - 2.6 - 3.1 = 4.3$ GtC; divide by emissions.", working: "\\frac{4.3}{10.0}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "43\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide the increase by the starting amount.", working: "\\frac{4.3}{880}\\times100", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx 0.49\\%", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Burning fossil fuels moves carbon stored in the geosphere over millions of years into the atmosphere within decades.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "This is much faster than volcanic release or natural removal by sinks, so atmospheric CO2 rises.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Dissolved CO2 forms carbonic acid, lowering ocean pH (acidification) and reducing carbonate ions.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Shell and coral skeletons are made of calcium carbonate, which becomes harder to build and can dissolve.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Geosphere (b) 43% (c) 0.49% (d) Fossil fuels release carbon far faster than natural processes remove it (e) Ocean acidification makes it harder to build calcium carbonate shells",
            commonErrors: ["In (b) dividing by 880 instead of 10.0.", "In (c) using total uptake (5.7) instead of the net increase."],
            examinerNote: "(a) Allow lithosphere. (c) 0.489% rounds to 0.49. Allow ecf from (b).",
          },
        },
      ],
    },
  ],
};
