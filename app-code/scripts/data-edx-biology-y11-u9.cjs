module.exports = [
  {
    file: "lesson-9-1.ts", exportName: "lesson91",
    lesson: {
      id: "ebi11-u9-lesson-9-1", code: "9-1",
      title: "The Heart and Blood Vessels",
      goal: "I CAN describe the structure of the heart, double circulation and the types of blood vessels.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Transport", "4BI1 heart and blood vessels"],
      vocabulary: [
        { term: "Heart", definition: "Muscular pump that circulates blood around the body." },
        { term: "Atrium", definition: "Upper chamber of the heart that receives blood." },
        { term: "Ventricle", definition: "Lower chamber of the heart that pumps blood out." },
        { term: "Valve", definition: "Structure preventing backflow of blood in the heart and vessels." },
        { term: "Artery", definition: "Vessel carrying blood away from the heart under high pressure." },
        { term: "Vein", definition: "Vessel carrying blood towards the heart; has valves." },
        { term: "Capillary", definition: "Tiny vessel where exchange of substances occurs." },
        { term: "Double circulation", definition: "Blood passes through the heart twice per complete circuit — pulmonary and systemic." },
      ],
      concepts: [
        {
          id: "ebi11-u9-heart", title: "Heart structure and double circulation",
          skill: "Describe the chambers, valves and vessels of the heart and the pulmonary and systemic circuits.",
          sections: [
            { heading: "Heart structure", body: "Four chambers: right atrium, right ventricle, left atrium, left ventricle. The left ventricle has a thicker wall because it pumps blood to the whole body. Valves (atrioventricular and semilunar) prevent backflow. Coronary arteries supply the heart muscle itself with oxygenated blood." },
            { heading: "Pulmonary circulation", body: "Deoxygenated blood: body → vena cava → right atrium → right ventricle → pulmonary artery → lungs (CO2 out, O2 in) → pulmonary vein → left atrium." },
            { heading: "Systemic circulation", body: "Oxygenated blood: left atrium → left ventricle → aorta → body tissues → vena cava → right atrium. This is double circulation — blood passes through the heart twice per lap, keeping oxygenated and deoxygenated blood separate." },
          ],
          keyFormulas: [
            { name: "Double circulation", statement: "Pulmonary circuit (lungs) + systemic circuit (body); blood through heart twice" },
            { name: "Left ventricle", statement: "Thickest wall — pumps blood to whole body" },
          ],
          workedExample: {
            problem: "Trace the path of a red blood cell from the vena cava to the aorta.",
            solution: "Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.",
          },
          questions: [
            {
              id: "ebi11-u9-heart-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which chamber has the thickest wall and why?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Right atrium — receives blood" }, { id: "b", text: "Left ventricle — pumps to whole body" },
                { id: "c", text: "Right ventricle — pumps to lungs" }, { id: "d", text: "Left atrium — receives blood" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "principle", name: "Left ventricle", statement: "Thick wall for high-pressure systemic pumping." }],
                steps: [{ reasoning: "Left ventricle pumps blood to entire body.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Left ventricle — pumps to whole body",
              },
            },
            {
              id: "ebi11-u9-heart-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the two circuits of double circulation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Double circulation", statement: "Pulmonary + systemic circuits." }],
                steps: [
                  { reasoning: "Pulmonary circulation — to and from lungs.", marks: 1, markCode: "M" },
                  { reasoning: "Systemic circulation — to and from body tissues.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Pulmonary and systemic",
              },
            },
            {
              id: "ebi11-u9-heart-q3", difficulty: "core", totalMarks: 4,
              stem: "Trace the path of blood from the vena cava to the aorta.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Circulation route", statement: "Vena cava → aorta via heart and lungs." }],
                steps: [
                  { reasoning: "Vena cava → right atrium.", marks: 1, markCode: "M" },
                  { reasoning: "Right atrium → right ventricle → pulmonary artery → lungs.", marks: 1, markCode: "M" },
                  { reasoning: "Lungs → pulmonary vein → left atrium.", marks: 1, markCode: "A" },
                  { reasoning: "Left atrium → left ventricle → aorta.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Vena cava→RA→RV→pulmonary artery→lungs→PV→LA→LV→aorta",
              },
            },
            {
              id: "ebi11-u9-heart-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain why double circulation is more efficient than single circulation.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Double circulation advantage", statement: "Separates oxygenated and deoxygenated blood; pressure maintained." }],
                steps: [
                  { reasoning: "Oxygenated and deoxygenated blood are kept separate.", marks: 1, markCode: "M" },
                  { reasoning: "Tissues always receive fully oxygenated blood.", marks: 1, markCode: "A" },
                  { reasoning: "Lungs receive blood at lower pressure (right ventricle thinner).", marks: 1, markCode: "A" },
                  { reasoning: "Body receives high-pressure blood from thick-walled left ventricle.", marks: 1, markCode: "A" },
                  { reasoning: "This meets the different pressure needs of lungs and body.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Separated blood + pressure matched to each circuit",
              },
            },
            {
              id: "ebi11-u9-heart-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the four chambers of the heart.", marks: 2 },
                { label: "b", prompt: "State the function of heart valves.", marks: 2 },
                { label: "c", prompt: "Why is the left ventricle wall thicker?", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Heart structure", statement: "Four chambers, valves, walls." }],
                steps: [
                  { part: "a", reasoning: "Right atrium, right ventricle, left atrium, left ventricle.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Prevent backflow of blood.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Pumps blood to whole body — needs more force/thicker muscle.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "4 chambers; valves stop backflow; LV thick for body pressure",
              },
            },
            {
              id: "ebi11-u9-heart-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the four heart chambers. (b) Name the vessel carrying deoxygenated blood from the heart to the lungs. (c) Name the vessel carrying oxygenated blood from lungs to heart. (d) Define double circulation. (e) Trace blood from vena cava to aorta. (f) State the function of valves.",
              parts: [
                { label: "a", prompt: "Chambers.", marks: 2 },
                { label: "b", prompt: "Heart→lungs vessel.", marks: 1 },
                { label: "c", prompt: "Lungs→heart vessel.", marks: 1 },
                { label: "d", prompt: "Double circulation.", marks: 2 },
                { label: "e", prompt: "Route.", marks: 3 },
                { label: "f", prompt: "Valves.", marks: 1 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Heart and circulation", statement: "Chambers, vessels, circuits." }],
                steps: [
                  { part: "a", reasoning: "RA, RV, LA, LV.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Pulmonary artery.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Pulmonary vein.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Blood passes through heart twice — pulmonary then systemic.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "VC→RA→RV→pulmonary artery→lungs→PV→LA→LV→aorta.", marks: 3, markCode: "A" },
                  { part: "f", reasoning: "Prevent backflow.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Chambers; pulmonary artery/vein; double circulation; route; valves",
              },
            },
          ],
        },
        {
          id: "ebi11-u9-vessels", title: "Blood vessels",
          skill: "Compare arteries, veins and capillaries and relate structure to function.",
          sections: [
            { heading: "Arteries", body: "Carry blood away from the heart under high pressure. Thick muscular and elastic walls withstand pressure. Small lumen relative to wall. No valves (except at heart exit). Carry oxygenated blood except the pulmonary artery." },
            { heading: "Veins", body: "Carry blood towards the heart under low pressure. Thin walls, large lumen, valves prevent backflow. Blood is often deoxygenated except pulmonary veins. Skeletal muscle action helps return blood." },
            { heading: "Capillaries", body: "Microscopic vessels connecting arteries and veins. Wall is one cell thick — very short diffusion distance. Exchange of oxygen, carbon dioxide, nutrients and wastes occurs here. Blood flow is slow to allow exchange." },
          ],
          keyFormulas: [
            { name: "Artery", statement: "Thick elastic wall; high pressure; away from heart" },
            { name: "Vein", statement: "Thin wall; valves; low pressure; towards heart" },
            { name: "Capillary", statement: "One-cell wall; exchange site" },
          ],
          workedExample: {
            problem: "Why are capillary walls only one cell thick?",
            solution: "To minimise diffusion distance so oxygen, carbon dioxide, nutrients and wastes can move quickly between blood and tissue fluid.",
          },
          questions: [
            {
              id: "ebi11-u9-vessels-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which vessel carries blood away from the heart?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Vein" }, { id: "b", text: "Capillary" },
                { id: "c", text: "Artery" }, { id: "d", text: "Lymph vessel" },
              ], correctChoiceId: "c" },
              markscheme: {
                principles: [{ kind: "definition", name: "Artery", statement: "Carries blood away from heart." }],
                steps: [{ reasoning: "Arteries carry blood away from heart.", marks: 1, markCode: "M" }],
                finalAnswer: "**(c)** Artery",
              },
            },
            {
              id: "ebi11-u9-vessels-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State two features of veins that help blood flow towards the heart.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Vein structure", statement: "Valves and thin walls aid return flow." }],
                steps: [
                  { reasoning: "Valves prevent backflow.", marks: 1, markCode: "M" },
                  { reasoning: "Thin walls / low pressure / large lumen.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Valves; thin walls",
              },
            },
            {
              id: "ebi11-u9-vessels-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain why artery walls are thick and elastic.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Artery wall", statement: "Withstands high pressure." }],
                steps: [
                  { reasoning: "Arteries carry blood at high pressure from ventricle.", marks: 1, markCode: "M" },
                  { reasoning: "Thick muscular/elastic walls resist bursting.", marks: 1, markCode: "A" },
                  { reasoning: "Elasticity smooths pressure pulses between beats.", marks: 1, markCode: "A" },
                  { reasoning: "Small lumen keeps pressure high for distribution.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Thick elastic wall withstands high pressure",
              },
            },
            {
              id: "ebi11-u9-vessels-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how substances are exchanged between blood and tissue fluid at capillaries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Capillary exchange", statement: "Thin wall + slow flow + pressure gradient." }],
                steps: [
                  { reasoning: "Capillary wall is one cell thick.", marks: 1, markCode: "M" },
                  { reasoning: "Short diffusion distance allows rapid exchange.", marks: 1, markCode: "A" },
                  { reasoning: "Blood pressure forces water and small molecules out (tissue fluid forms).", marks: 1, markCode: "A" },
                  { reasoning: "O2 and nutrients diffuse out; CO2 and wastes diffuse in.", marks: 1, markCode: "M" },
                  { reasoning: "Slow flow maximises exchange time.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Thin wall + slow flow → diffusion exchange",
              },
            },
            {
              id: "ebi11-u9-vessels-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State two differences between arteries and veins.", marks: 3 },
                { label: "b", prompt: "Explain why capillaries are the site of exchange.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Vessel comparison", statement: "Structure matches function." }],
                steps: [
                  { part: "a", reasoning: "Arteries: thick wall, high pressure, no valves.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Veins: thin wall, low pressure, valves.", marks: 1, markCode: "M" },
                  { part: "a", reasoning: "Direction: arteries away, veins towards heart.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "One-cell wall → short diffusion distance.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Slow flow → time for exchange.", marks: 1, markCode: "A" },
                  { part: "b", reasoning: "Connect arteries and veins, reaching every tissue.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Arteries thick/no valves; veins thin/valves; capillaries exchange",
              },
            },
            {
              id: "ebi11-u9-vessels-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the three types of blood vessel. (b) State the direction of blood flow in each. (c) Which has valves? (d) Which has the thickest wall? (e) Which is the exchange site? (f) Explain why vein walls are thin.",
              parts: [
                { label: "a", prompt: "Three vessels.", marks: 1 },
                { label: "b", prompt: "Directions.", marks: 3 },
                { label: "c", prompt: "Valved vessel.", marks: 1 },
                { label: "d", prompt: "Thickest wall.", marks: 1 },
                { label: "e", prompt: "Exchange site.", marks: 1 },
                { label: "f", prompt: "Thin vein walls.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Blood vessels", statement: "Arteries, veins, capillaries." }],
                steps: [
                  { part: "a", reasoning: "Arteries, veins, capillaries.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Arteries away; veins towards; capillaries connect.", marks: 3, markCode: "M" },
                  { part: "c", reasoning: "Veins.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "Arteries.", marks: 1, markCode: "M" },
                  { part: "e", reasoning: "Capillaries.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Low pressure — thin wall sufficient.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Valves prevent backflow instead.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Large lumen allows slow flow for exchange.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "3 vessels; directions; veins valved; arteries thick; capillaries exchange",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u9-heart-notes", title: "Heart — notes",
      summary: "4 chambers; double circulation (pulmonary + systemic); arteries thick-walled, veins valved, capillaries exchange.",
      sections: [
        { heading: "Key idea", body: "Blood through heart twice — oxygenated and deoxygenated kept separate." },
        { heading: "Vessels", body: "Structure matches function: pressure and exchange needs." },
      ],
    },
  },
  {
    file: "lesson-9-2.ts", exportName: "lesson92",
    lesson: {
      id: "ebi11-u9-lesson-9-2", code: "9-2",
      title: "Blood Components and Circulation",
      goal: "I CAN describe the components of blood and their functions in transport and defence.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Transport", "4BI1 blood"],
      vocabulary: [
        { term: "Plasma", definition: "Pale yellow liquid component of blood carrying dissolved substances." },
        { term: "Red blood cell", definition: "Biconcave cell containing haemoglobin that transports oxygen." },
        { term: "Haemoglobin", definition: "Iron-containing protein that binds oxygen reversibly." },
        { term: "White blood cell", definition: "Cell that defends against pathogens by phagocytosis or antibody production." },
        { term: "Platelet", definition: "Cell fragment that helps blood clot at wounds." },
        { term: "Tissue fluid", definition: "Fluid bathing cells formed from blood plasma at capillaries." },
        { term: "Lymph", definition: "Fluid drained from tissues into lymph vessels, returning to blood." },
      ],
      concepts: [
        {
          id: "ebi11-u9-components", title: "Components of blood",
          skill: "Describe plasma, red and white blood cells and platelets and their functions.",
          sections: [
            { heading: "Plasma", body: "Pale yellow liquid (~55% of blood). Transports dissolved substances: nutrients (glucose, amino acids), carbon dioxide, urea, hormones, antibodies and plasma proteins (e.g. fibrinogen for clotting)." },
            { heading: "Red blood cells", body: "Biconcave discs with no nucleus — more room for haemoglobin. Haemoglobin contains iron and binds oxygen in the lungs to form oxyhaemoglobin, releasing it in tissues. They also carry some carbon dioxide. Short lifespan (~120 days) replaced in bone marrow." },
            { heading: "White blood cells and platelets", body: "White blood cells defend against disease: some engulf pathogens (phagocytes), others produce antibodies. Platelets are cell fragments that trigger clotting — fibrin forms a mesh sealing wounds to prevent blood loss and infection." },
          ],
          keyFormulas: [
            { name: "Haemoglobin", statement: "Fe-containing protein; binds O2 reversibly" },
            { name: "RBC adaptations", statement: "No nucleus + biconcave → max haemoglobin/SA" },
          ],
          workedExample: {
            problem: "Why do red blood cells have no nucleus?",
            solution: "Removing the nucleus leaves more space for haemoglobin, increasing oxygen-carrying capacity; the biconcave shape also increases surface area.",
          },
          questions: [
            {
              id: "ebi11-u9-comp-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which blood component transports oxygen?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Plasma" }, { id: "b", text: "White blood cell" },
                { id: "c", text: "Platelet" }, { id: "d", text: "Red blood cell" },
              ], correctChoiceId: "d" },
              markscheme: {
                principles: [{ kind: "definition", name: "RBC", statement: "Contains haemoglobin for O2 transport." }],
                steps: [{ reasoning: "RBCs carry oxygen via haemoglobin.", marks: 1, markCode: "M" }],
                finalAnswer: "**(d)** Red blood cell",
              },
            },
            {
              id: "ebi11-u9-comp-q2", difficulty: "foundation", totalMarks: 2,
              stem: "State the function of platelets.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Platelets", statement: "Clotting at wounds." }],
                steps: [{ reasoning: "Platelets help blood clot to seal wounds.", marks: 2, markCode: "M" }],
                finalAnswer: "Blood clotting",
              },
            },
            {
              id: "ebi11-u9-comp-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain two adaptations of red blood cells for oxygen transport.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "RBC adaptations", statement: "No nucleus, biconcave shape." }],
                steps: [
                  { reasoning: "No nucleus — more space for haemoglobin.", marks: 1, markCode: "M" },
                  { reasoning: "Biconcave shape increases surface area for gas exchange.", marks: 1, markCode: "A" },
                  { reasoning: "Haemoglobin binds oxygen reversibly.", marks: 1, markCode: "M" },
                  { reasoning: "Flexible shape allows passage through capillaries.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "No nucleus + biconcave → max O2 carriage",
              },
            },
            {
              id: "ebi11-u9-comp-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Describe the roles of plasma, red cells, white cells and platelets in the blood.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Blood components", statement: "Plasma, RBC, WBC, platelets." }],
                steps: [
                  { reasoning: "Plasma transports dissolved substances.", marks: 1, markCode: "M" },
                  { reasoning: "RBCs transport oxygen via haemoglobin.", marks: 1, markCode: "M" },
                  { reasoning: "WBCs defend against pathogens.", marks: 1, markCode: "M" },
                  { reasoning: "Platelets clot wounds.", marks: 1, markCode: "M" },
                  { reasoning: "All four correctly described.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Plasma transport; RBC O2; WBC defence; platelets clot",
              },
            },
            {
              id: "ebi11-u9-comp-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the four components of blood.", marks: 2 },
                { label: "b", prompt: "State the function of haemoglobin.", marks: 2 },
                { label: "c", prompt: "Explain why iron deficiency causes tiredness.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Blood", statement: "Components and functions." }],
                steps: [
                  { part: "a", reasoning: "Plasma, red cells, white cells, platelets.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Binds oxygen reversibly for transport.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Less haemoglobin → less oxygen delivered → fatigue.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "4 components; haemoglobin binds O2; Fe deficiency → anaemia",
              },
            },
            {
              id: "ebi11-u9-comp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the four blood components. (b) State the function of each. (c) What is haemoglobin made of? (d) Why do RBCs lack a nucleus? (e) What is the role of platelets?",
              parts: [
                { label: "a", prompt: "Components.", marks: 2 },
                { label: "b", prompt: "Functions.", marks: 4 },
                { label: "c", prompt: "Haemoglobin composition.", marks: 1 },
                { label: "d", prompt: "No nucleus reason.", marks: 1 },
                { label: "e", prompt: "Platelets.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Blood", statement: "Plasma, RBC, WBC, platelets." }],
                steps: [
                  { part: "a", reasoning: "Plasma, RBCs, WBCs, platelets.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Transport; O2 carriage; defence; clotting.", marks: 4, markCode: "M" },
                  { part: "c", reasoning: "Protein containing iron.", marks: 1, markCode: "M" },
                  { part: "d", reasoning: "More room for haemoglobin.", marks: 1, markCode: "A" },
                  { part: "e", reasoning: "Clotting — fibrin mesh seals wounds.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Components+functions; Fe protein; no nucleus; clotting",
              },
            },
          ],
        },
        {
          id: "ebi11-u9-exchange", title: "Capillary exchange and tissue fluid",
          skill: "Explain exchange at capillaries and the formation of tissue fluid and lymph.",
          sections: [
            { heading: "Capillary exchange", body: "At capillaries, blood pressure forces water and small dissolved substances out into tissue fluid. Oxygen and nutrients diffuse out; carbon dioxide and wastes diffuse in. Red cells cannot pass through capillary walls. Exchange follows concentration gradients." },
            { heading: "Tissue fluid and lymph", body: "Tissue fluid bathes cells, supplying nutrients and removing wastes. Most fluid returns to blood at the venule end as pressure drops; some enters lymph vessels (lymph). Lymph drains back into blood via the thoracic duct. Lymph also carries white blood cells." },
            { heading: "Circulation summary", body: "Arteries → arterioles → capillaries → venules → veins. Double circulation: pulmonary (heart→lungs→heart) and systemic (heart→body→heart). The heart pumps via atria/ventricles; valves prevent backflow." },
          ],
          keyFormulas: [
            { name: "Exchange", statement: "Hydrostatic pressure out; diffusion gradients exchange gases/nutrients" },
            { name: "Lymph", statement: "Tissue fluid drained via lymph vessels back to blood" },
          ],
          workedExample: {
            problem: "Describe what happens to blood at a capillary bed.",
            solution: "Blood pressure pushes plasma out forming tissue fluid; O2/nutrients diffuse to cells, CO2/wastes diffuse back in; fluid mostly returns to venules, excess drains as lymph.",
          },
          questions: [
            {
              id: "ebi11-u9-exch-q1", difficulty: "foundation", totalMarks: 1,
              stem: "What is tissue fluid?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Blood plasma in vessels" }, { id: "b", text: "Fluid bathing body cells formed from plasma" },
                { id: "c", text: "Lymph in vessels" }, { id: "d", text: "Digestive juice" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Tissue fluid", statement: "Plasma-derived fluid bathing cells." }],
                steps: [{ reasoning: "Tissue fluid bathes cells, from plasma.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Fluid bathing cells",
              },
            },
            {
              id: "ebi11-u9-exch-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the vessels that drain excess tissue fluid back to blood.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Lymph vessels", statement: "Drain tissue fluid as lymph." }],
                steps: [{ reasoning: "Lymph vessels collect tissue fluid and return it to blood.", marks: 2, markCode: "M" }],
                finalAnswer: "Lymph vessels",
              },
            },
            {
              id: "ebi11-u9-exch-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how oxygen moves from blood to cells at capillaries.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Diffusion exchange", statement: "Gases diffuse down concentration gradients." }],
                steps: [
                  { reasoning: "O2 concentration higher in blood than in respiring cells.", marks: 1, markCode: "M" },
                  { reasoning: "O2 diffuses through one-cell-thick capillary wall.", marks: 1, markCode: "A" },
                  { reasoning: "Then diffuses into tissue fluid and cells.", marks: 1, markCode: "A" },
                  { reasoning: "Short diffusion distance makes this rapid.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "O2 diffuses down gradient through thin capillary wall",
              },
            },
            {
              id: "ebi11-u9-exch-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain the formation of tissue fluid at capillaries and its return to the blood.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Tissue fluid formation", statement: "Pressure forces plasma out; osmotic return." }],
                steps: [
                  { reasoning: "High blood pressure at arteriole end forces water/small molecules out.", marks: 1, markCode: "M" },
                  { reasoning: "Forms tissue fluid bathing cells.", marks: 1, markCode: "M" },
                  { reasoning: "As pressure falls along capillary, fluid re-enters blood at venule end.", marks: 1, markCode: "A" },
                  { reasoning: "Some fluid drains into lymph vessels.", marks: 1, markCode: "A" },
                  { reasoning: "Lymph returns to blood via thoracic duct.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Pressure out → tissue fluid; pressure drop returns; lymph drains excess",
              },
            },
            {
              id: "ebi11-u9-exch-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Define tissue fluid.", marks: 1 },
                { label: "b", prompt: "Explain how O2 and CO2 are exchanged at capillaries.", marks: 3 },
                { label: "c", prompt: "What happens to fluid not returned to blood?", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Capillary exchange", statement: "Diffusion + pressure dynamics." }],
                steps: [
                  { part: "a", reasoning: "Fluid from plasma bathing body cells.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "O2 diffuses out (high→low gradient) to cells.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "CO2 diffuses in from cells to blood.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Thin capillary wall allows rapid diffusion.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Drains into lymph vessels as lymph.", marks: 1, markCode: "A" },
                  { part: "c", reasoning: "Lymph returns to blood via thoracic duct.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Tissue fluid; O2 out/CO2 in by diffusion; lymph drains excess",
              },
            },
            {
              id: "ebi11-u9-exch-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define tissue fluid. (b) How does O2 move from blood to cells? (c) How does CO2 move from cells to blood? (d) What happens to excess tissue fluid? (e) Why are capillary walls one cell thick?",
              parts: [
                { label: "a", prompt: "Tissue fluid.", marks: 2 },
                { label: "b", prompt: "O2 movement.", marks: 2 },
                { label: "c", prompt: "CO2 movement.", marks: 2 },
                { label: "d", prompt: "Excess fluid.", marks: 2 },
                { label: "e", prompt: "Thin wall reason.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Exchange", statement: "Capillary exchange mechanics." }],
                steps: [
                  { part: "a", reasoning: "Plasma-derived fluid bathing cells.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Diffuses down gradient through thin wall to cells.", marks: 2, markCode: "A" },
                  { part: "c", reasoning: "Diffuses from cells into blood down gradient.", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Enters lymph vessels → lymph → blood.", marks: 2, markCode: "M" },
                  { part: "e", reasoning: "Short diffusion distance for rapid exchange.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Tissue fluid; diffusion exchange; lymph; thin wall = short distance",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u9-blood-notes", title: "Blood — notes",
      summary: "Plasma transports; RBCs carry O2 (haemoglobin); WBCs defend; platelets clot. Capillaries exchange via thin walls.",
      sections: [
        { heading: "Key idea", body: "Blood components each have a distinct transport/defence role." },
        { heading: "Exchange", body: "Tissue fluid forms at capillaries; lymph drains excess." },
      ],
    },
  },
  {
    file: "lesson-9-3.ts", exportName: "lesson93",
    lesson: {
      id: "ebi11-u9-lesson-9-3", code: "9-3",
      title: "Transport in Plants",
      goal: "I CAN explain water uptake, transpiration, xylem and phloem transport and mineral requirements.",
      standards: ["Edexcel IGCSE Biology 4BI1 — Transport in plants", "4BI1 plant transport"],
      vocabulary: [
        { term: "Xylem", definition: "Vascular tissue transporting water and dissolved minerals from roots to leaves." },
        { term: "Phloem", definition: "Vascular tissue transporting sugars (sucrose) from sources to sinks." },
        { term: "Transpiration", definition: "Loss of water vapour from leaves through stomata." },
        { term: "Root hair", definition: "Extension of a root epidermal cell increasing surface area for water absorption." },
        { term: "Stoma", definition: "Pore in leaf epidermis (guard cells control it) allowing gas exchange and transpiration." },
        { term: "Translocation", definition: "Transport of sucrose in phloem from source to sink." },
        { term: "Mineral ions", definition: "Nitrates, phosphates etc. absorbed by roots for plant growth." },
      ],
      concepts: [
        {
          id: "ebi11-u9-xylem", title: "Water uptake and transpiration",
          skill: "Explain water absorption by roots, transpiration pull and xylem transport.",
          sections: [
            { heading: "Water uptake", body: "Root hair cells have a large surface area and thin walls. Water enters by osmosis because soil water has higher water potential than root cell sap. Water then moves through root cells to xylem vessels." },
            { heading: "Transpiration", body: "Water evaporates from mesophyll cells and diffuses out through stomata as water vapour — transpiration. It creates a transpiration pull (cohesion-tension) that draws water up the xylem. Factors increasing transpiration: high temperature, wind, low humidity, bright light (stomata open)." },
            { heading: "Xylem", body: "Xylem vessels are dead, hollow tubes with lignin-reinforced walls — no end walls, continuous columns. Water and dissolved minerals move upward by transpiration pull and root pressure. Lignin also supports the plant." },
          ],
          keyFormulas: [
            { name: "Transpiration pull", statement: "Water loss → tension → pulls water column up xylem" },
            { name: "Osmosis uptake", statement: "Water moves from high water potential (soil) to low (root cells)" },
          ],
          workedExample: {
            problem: "Why does a plant wilt in hot, windy conditions?",
            solution: "Transpiration rate exceeds water uptake; water loss from leaves is not replaced fast enough, so cells lose turgor and the plant wilts.",
          },
          questions: [
            {
              id: "ebi11-u9-xylem-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which tissue transports water and minerals upward in plants?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Phloem" }, { id: "b", text: "Xylem" },
                { id: "c", text: "Palisade" }, { id: "d", text: "Epidermis" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Xylem", statement: "Water/mineral transport tissue." }],
                steps: [{ reasoning: "Xylem transports water upward.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Xylem",
              },
            },
            {
              id: "ebi11-u9-xylem-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Define transpiration.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Transpiration", statement: "Water vapour loss from leaves." }],
                steps: [{ reasoning: "Loss of water vapour from leaves through stomata.", marks: 2, markCode: "M" }],
                finalAnswer: "Water vapour loss from leaves",
              },
            },
            {
              id: "ebi11-u9-xylem-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain how root hair cells absorb water from the soil.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Osmotic uptake", statement: "Water moves down water-potential gradient." }],
                steps: [
                  { reasoning: "Root hair cells have large surface area and thin walls.", marks: 1, markCode: "M" },
                  { reasoning: "Soil water has higher water potential than root cell sap.", marks: 1, markCode: "A" },
                  { reasoning: "Water enters by osmosis across partially permeable membrane.", marks: 1, markCode: "M" },
                  { reasoning: "Water then passes through root cells to xylem.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Osmosis into root hairs → across root to xylem",
              },
            },
            {
              id: "ebi11-u9-xylem-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Explain how transpiration pulls water up the xylem.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Transpiration pull", statement: "Cohesion-tension raises water column." }],
                steps: [
                  { reasoning: "Water evaporates from mesophyll cells and exits via stomata.", marks: 1, markCode: "M" },
                  { reasoning: "Loss creates tension in the water column in xylem.", marks: 1, markCode: "A" },
                  { reasoning: "Water molecules cohere (stick together) forming continuous column.", marks: 1, markCode: "A" },
                  { reasoning: "Tension pulls the whole column upward from roots.", marks: 1, markCode: "A" },
                  { reasoning: "Adhesion to xylem walls prevents column breaking.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Transpiration → tension → cohesion pulls water up xylem",
              },
            },
            {
              id: "ebi11-u9-xylem-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "State two adaptations of root hair cells for absorption.", marks: 2 },
                { label: "b", prompt: "Explain the role of stomata in transpiration.", marks: 2 },
                { label: "c", prompt: "Name two factors that increase transpiration rate.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Plant water transport", statement: "Root uptake and transpiration pull." }],
                steps: [
                  { part: "a", reasoning: "Large surface area; thin wall / close to xylem.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Stomata are pores for water vapour loss; guard cells control opening.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "High temp, wind, low humidity, bright light (any two).", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Root hairs; stomata pores; wind/temp/humidity/light",
              },
            },
            {
              id: "ebi11-u9-xylem-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Define transpiration. (b) Name the tissue transporting water upward. (c) Explain root hair water uptake. (d) Explain transpiration pull. (e) State two factors increasing transpiration. (f) Why does wilting occur?",
              parts: [
                { label: "a", prompt: "Transpiration.", marks: 1 },
                { label: "b", prompt: "Tissue.", marks: 1 },
                { label: "c", prompt: "Water uptake.", marks: 2 },
                { label: "d", prompt: "Pull mechanism.", marks: 2 },
                { label: "e", prompt: "Two factors.", marks: 1 },
                { label: "f", prompt: "Wilting.", marks: 3 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Transpiration", statement: "Water movement in plants." }],
                steps: [
                  { part: "a", reasoning: "Water vapour loss from leaves via stomata.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Xylem.", marks: 1, markCode: "M" },
                  { part: "c", reasoning: "Osmosis into root hairs (high→low water potential).", marks: 2, markCode: "A" },
                  { part: "d", reasoning: "Water loss → tension → cohesion pulls column up.", marks: 2, markCode: "A" },
                  { part: "e", reasoning: "Wind, high temp, low humidity, bright light (any two).", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Transpiration exceeds uptake.", marks: 1, markCode: "M" },
                  { part: "f", reasoning: "Cells lose turgor.", marks: 1, markCode: "A" },
                  { part: "f", reasoning: "Plant wilts until water balance restored.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Transpiration; xylem; osmosis; cohesion-tension; factors; wilting",
              },
            },
          ],
        },
        {
          id: "ebi11-u9-phloem", title: "Phloem transport and mineral ions",
          skill: "Explain translocation of sugars in phloem and the role of mineral ions in plants.",
          sections: [
            { heading: "Phloem and translocation", body: "Phloem transports sucrose from sources (e.g. photosynthesising leaves) to sinks (growing roots, fruits, storage organs). Sucrose is loaded into phloem at sources and moves by mass flow/translocation to sinks. Companion cells support sieve tube elements." },
            { heading: "Mineral ions", body: "Roots absorb dissolved mineral ions (nitrates, phosphates, potassium, magnesium) from soil. Nitrates needed for amino acids/proteins — deficiency causes stunted growth and yellow leaves. Magnesium needed for chlorophyll — deficiency causes yellowing between leaf veins. Phosphates for respiration/DNA; potassium for enzymes." },
            { heading: "Xylem vs phloem", body: "Xylem: dead hollow vessels, water + minerals upward, driven by transpiration. Phloem: living sieve tubes + companion cells, sucrose both directions (source→sink), requires energy for loading." },
          ],
          keyFormulas: [
            { name: "Translocation", statement: "Sucrose source → phloem → sink" },
            { name: "Nitrate deficiency", statement: "Stunted growth, yellow leaves" },
          ],
          workedExample: {
            problem: "Why do mineral deficiencies cause yellow leaves?",
            solution: "Magnesium is needed to make chlorophyll; without it leaves lose green colour. Nitrates are needed for protein/amino acid production; deficiency causes yellowing and stunted growth.",
          },
          questions: [
            {
              id: "ebi11-u9-phloem-q1", difficulty: "foundation", totalMarks: 1,
              stem: "Which tissue transports sucrose in plants?",
              response: { type: "mcq", choices: [
                { id: "a", text: "Xylem" }, { id: "b", text: "Phloem" },
                { id: "c", text: "Cambium" }, { id: "d", text: "Pith" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Phloem", statement: "Sucrose transport tissue." }],
                steps: [{ reasoning: "Phloem carries sugars.", marks: 1, markCode: "M" }],
                finalAnswer: "**(b)** Phloem",
              },
            },
            {
              id: "ebi11-u9-phloem-q2", difficulty: "foundation", totalMarks: 2,
              stem: "What is a source and a sink in translocation?",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Source/sink", statement: "Source produces sucrose; sink uses/stores it." }],
                steps: [
                  { reasoning: "Source: where sucrose is made (leaf).",
                    marks: 1, markCode: "M" },
                  { reasoning: "Sink: where it is used/stored (root, fruit).",
                    marks: 1, markCode: "M" },
                ],
                finalAnswer: "Source=producer; sink=user/storer",
              },
            },
            {
              id: "ebi11-u9-phloem-q3", difficulty: "core", totalMarks: 4,
              stem: "Explain the role of nitrate ions in plant growth.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Nitrate", statement: "Needed for amino acids/proteins." }],
                steps: [
                  { reasoning: "Nitrates absorbed by roots from soil.", marks: 1, markCode: "M" },
                  { reasoning: "Used to make amino acids and proteins for growth.", marks: 1, markCode: "M" },
                  { reasoning: "Deficiency → stunted growth.", marks: 1, markCode: "A" },
                  { reasoning: "Deficiency → yellow (chlorotic) leaves.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Nitrates → amino acids/proteins; deficiency stunts + yellows",
              },
            },
            {
              id: "ebi11-u9-phloem-q4", difficulty: "challenge", totalMarks: 5,
              stem: "Compare xylem and phloem transport.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Xylem vs phloem", statement: "Different tissues, substances, directions." }],
                steps: [
                  { reasoning: "Xylem transports water + minerals upward.", marks: 1, markCode: "M" },
                  { reasoning: "Phloem transports sucrose source→sink.", marks: 1, markCode: "M" },
                  { reasoning: "Xylem vessels dead/hollow; phloem living sieve tubes.", marks: 1, markCode: "A" },
                  { reasoning: "Xylem driven by transpiration; phloem by loading/energy.", marks: 1, markCode: "A" },
                  { reasoning: "Both part of vascular tissue in roots/stems/leaves.", marks: 1, markCode: "M" },
                ],
                finalAnswer: "Xylem=water up; phloem=sucrose source→sink",
              },
            },
            {
              id: "ebi11-u9-phloem-q5", difficulty: "challenge", totalMarks: 6,
              parts: [
                { label: "a", prompt: "Name the tissue transporting sugars and its direction.", marks: 2 },
                { label: "b", prompt: "State the role of magnesium in plants.", marks: 2 },
                { label: "c", prompt: "Explain the effect of nitrate deficiency.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Plant transport", statement: "Phloem and minerals." }],
                steps: [
                  { part: "a", reasoning: "Phloem; source → sink.", marks: 2, markCode: "M" },
                  { part: "b", reasoning: "Needed for chlorophyll production.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Stunted growth; yellow leaves.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Phloem source→sink; Mg→chlorophyll; nitrate deficiency symptoms",
              },
            },
            {
              id: "ebi11-u9-phloem-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Answer all parts. (a) Name the tissue transporting sucrose. (b) Define source and sink. (c) Name two minerals plants need and their roles. (d) State the effect of nitrate deficiency. (e) Compare xylem and phloem.",
              parts: [
                { label: "a", prompt: "Tissue.", marks: 1 },
                { label: "b", prompt: "Source/sink.", marks: 2 },
                { label: "c", prompt: "Two minerals + roles.", marks: 3 },
                { label: "d", prompt: "Nitrate deficiency.", marks: 2 },
                { label: "e", prompt: "Xylem vs phloem.", marks: 2 },
              ],
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Phloem and minerals", statement: "Translocation and nutrition." }],
                steps: [
                  { part: "a", reasoning: "Phloem.", marks: 1, markCode: "M" },
                  { part: "b", reasoning: "Source produces sucrose; sink uses/stores.", marks: 2, markCode: "M" },
                  { part: "c", reasoning: "Nitrate→proteins; magnesium→chlorophyll; phosphate→DNA/respiration.", marks: 3, markCode: "M" },
                  { part: "d", reasoning: "Stunted growth, yellow leaves.", marks: 2, markCode: "A" },
                  { part: "e", reasoning: "Xylem water/minerals up; phloem sucrose source→sink.", marks: 2, markCode: "M" },
                ],
                finalAnswer: "Phloem; source/sink; minerals; deficiency; xylem vs phloem",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "ebi11-u9-plant-notes", title: "Plant transport — notes",
      summary: "Xylem carries water/minerals up by transpiration pull; phloem carries sucrose source→sink; minerals like nitrate and magnesium are essential.",
      sections: [
        { heading: "Key idea", body: "Transpiration drives water uptake; translocation moves sugars." },
        { heading: "Minerals", body: "Nitrate→protein; Mg→chlorophyll; phosphate→growth." },
      ],
    },
  },
];
