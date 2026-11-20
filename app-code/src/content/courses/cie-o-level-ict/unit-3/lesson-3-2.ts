import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "olict-u3-lesson-3-2",
  code: "3-2",
  title: "Network Hardware",
  goal: "I CAN describe the hardware components of a network.",
  standards: ["7014 4.2"],
  vocabulary: [
    { term: "NIC", definition: "Network Interface Card — connects a computer to a network." },
    { term: "Switch", definition: "Device connecting multiple computers on a LAN, directing traffic." },
    { term: "Router", definition: "Device connecting networks (e.g. LAN to internet), directing packets." },
    { term: "Hub", definition: "Older device broadcasting data to all connected computers." },
    { term: "Access point", definition: "Wireless device connecting Wi-Fi devices to a wired network." },
    { term: "Modem", definition: "Device converting digital signals for transmission over phone/cable lines." },
    { term: "Transmission medium", definition: "Physical path for data — copper cable, fibre optic, radio waves." },
  ],
  concepts: [
    {
      id: "olict-u3-hardware",
      title: "Network hardware components",
      skill: "Identify NICs, switches, routers, hubs, access points and modems.",
      lesson: {
        sections: [
          { heading: "Connecting computers", body: "- **NIC (Network Interface Card)**: adapter inside each computer enabling network connection.\n- **Switch**: connects computers on a LAN, sending data only to the intended device — efficient.\n- **Hub**: older alternative broadcasting to all devices — wasteful." },
          { heading: "Connecting networks", body: "- **Router**: connects different networks (LAN ↔ internet), chooses best paths for data.\n- **Access point**: adds Wi-Fi to a wired network.\n- **Modem**: converts digital signals to analogue for phone/cable lines (and back)." },
          { heading: "Cabling", body: "- **Copper (Ethernet)**: cheap, short distances.\n- **Fibre optic**: light signals, very fast, long distances.\n- **Wireless (Wi-Fi)**: radio waves, flexible but slower/less secure." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What device connects a home LAN to the internet?",
          solution: "Router — directs traffic between the local network and the ISP's network; modem handles signal conversion.",
        },
      },
      questions: [
        {
          id: "olict-u3-hw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A router's main job is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Connect different networks" }, { id: "b", text: "Store files" }, { id: "c", text: "Print documents" }, { id: "d", text: "Scan images" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Router", statement: "Connects networks." }], steps: [{ reasoning: "Router connects networks.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Connect networks" },
        },
        {
          id: "olict-u3-hw-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish a switch from a hub.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Switch vs hub", statement: "Directed vs broadcast." }], steps: [
            { reasoning: "Switch sends data only to recipient.", marks: 1, markCode: "M" },
            { reasoning: "Hub broadcasts to all devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "Switch directs data to the intended device; hub broadcasts to all — switch is more efficient." },
        },
        {
          id: "olict-u3-hw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the role of a modem in home internet access.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Modem", statement: "Signal conversion." }], steps: [
            { reasoning: "Converts digital to analogue for transmission.", marks: 1, markCode: "M" },
            { reasoning: "Converts incoming analogue back to digital.", marks: 1, markCode: "M" },
            { reasoning: "Needed for phone/cable/fibre lines.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Modem converts digital computer signals to analogue for phone/cable lines and back." },
        },
        {
          id: "olict-u3-hw-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Network hardware review.",
          parts: [
            { label: "a", prompt: "What does a NIC do?", marks: 2 },
            { label: "b", prompt: "Distinguish switch and router.", marks: 2 },
            { label: "c", prompt: "What does an access point do?", marks: 2 },
            { label: "d", prompt: "Compare copper cable and fibre optic in two ways.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Network hardware", statement: "NIC, switch, router, AP, media." },
          ], steps: [
            { part: "a", reasoning: "Connects computer to network.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Switch: within LAN; router: between networks.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Adds Wi-Fi connectivity.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Copper: cheap, short range.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Fibre: fast, long range.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) connects to net (b) LAN vs between nets (c) Wi-Fi (d) cheap/short vs fast/long" },
        },
      ],
    },
    {
      id: "olict-u3-topologies",
      title: "Network topologies",
      skill: "Describe star, bus and ring network layouts and their features.",
      lesson: {
        sections: [
          { heading: "Star", body: "All devices connect to a central switch/hub. Most common — if one cable fails, only that device is affected; easy to add devices." },
          { heading: "Bus", body: "All devices share one backbone cable. Cheap but if the cable breaks, whole network fails." },
          { heading: "Ring", body: "Each device connects to the next forming a loop; data travels around the ring. If one device fails, network can break (unless dual ring)." },
          { heading: "Choosing", body: "Star is standard for schools/offices — reliability and easy expansion." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A school lab uses a central switch with each PC cabled to it. Which topology?",
          solution: "Star topology — all devices connect to a central device.",
        },
      },
      questions: [
        {
          id: "olict-u3-tp-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a star topology, devices connect to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A central device" }, { id: "b", text: "Each other in a loop" }, { id: "c", text: "One shared cable" }, { id: "d", text: "Nothing — standalone" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Star", statement: "Central connection." }], steps: [{ reasoning: "Star = central.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Central device" },
        },
        {
          id: "olict-u3-tp-q2", difficulty: "core", totalMarks: 2,
          stem: "What is the main weakness of a bus topology?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Bus", statement: "Single cable failure." }], steps: [
            { reasoning: "One backbone cable.", marks: 1, markCode: "M" },
            { reasoning: "If it breaks, whole network fails.", marks: 1, markCode: "A" },
          ], finalAnswer: "A single cable failure takes down the entire network." },
        },
        {
          id: "olict-u3-tp-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why star topology is the most common choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Star", statement: "Reliable + expandable." }], steps: [
            { reasoning: "One cable failure affects only one device.", marks: 1, markCode: "M" },
            { reasoning: "Easy to add new devices.", marks: 1, markCode: "M" },
            { reasoning: "Central device simplifies management.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Fault isolation, easy expansion and central management make star most popular." },
        },
        {
          id: "olict-u3-tp-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Topologies review.",
          parts: [
            { label: "a", prompt: "Describe star topology.", marks: 2 },
            { label: "b", prompt: "Describe bus topology.", marks: 2 },
            { label: "c", prompt: "Describe ring topology.", marks: 2 },
            { label: "d", prompt: "Why is star preferred for schools?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Topologies", statement: "Star, bus, ring layouts." },
          ], steps: [
            { part: "a", reasoning: "Central device connects all.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Shared backbone cable.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Devices in a loop.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct description.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Fault isolation.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Easy expansion.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Reliable choice.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) central hub (b) shared cable (c) loop (d) reliable+expandable" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u3-3-2-notes", title: "Network hardware — notes", summary: "NIC, switch, router, modem, access point and topologies.",
      sections: [
        { heading: "Hardware", body: "NIC connects PCs; switch directs LAN traffic; router joins networks; modem converts signals; AP adds Wi-Fi." },
        { heading: "Topologies", body: "Star (central, reliable), bus (one cable, fragile), ring (loop)." },
      ] },
  ],
};
