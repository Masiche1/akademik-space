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
            { id: "a", text: "Scan images" },
            { id: "b", text: "Store files" },
            { id: "c", text: "Connect different networks" },
            { id: "d", text: "Print documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Router", statement: "Connects networks." }], steps: [{ reasoning: "Router connects networks.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Connect networks" },
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
        {
          id: "olict-u3-hw-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A NIC (Network Interface Card) connects a computer to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A network" },
            { id: "b", text: "A printer" },
            { id: "c", text: "A power supply" },
            { id: "d", text: "A monitor" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "NIC", statement: "Connects computer to network." }], steps: [{ reasoning: "NIC enables network connection.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** A network" },
        },
        {
          id: "olict-u3-hw-q6", difficulty: "core", totalMarks: 1,
          stem: "A switch on a LAN sends data…",
          response: { type: "mcq", choices: [
            { id: "a", text: "To the internet only" },
            { id: "b", text: "Nowhere" },
            { id: "c", text: "Only to the intended device" },
            { id: "d", text: "To all devices" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Switch", statement: "Directs traffic." }], steps: [{ reasoning: "Switch sends data only to the recipient.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Only to the intended device" },
        },
        {
          id: "olict-u3-hw-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A network has 1 router, 2 switches, 1 modem and 12 NICs. How many network devices are there in total?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 16 }] },
          markscheme: { principles: [{ kind: "principle", name: "Device count", statement: "Sum of components." }], steps: [
            { reasoning: "$1 + 2 + 1 + 12 = 16$ devices.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "16 devices" },
        },
        {
          id: "olict-u3-hw-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is a wireless transmission medium?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fibre optic cable" },
            { id: "b", text: "Radio waves (Wi-Fi)" },
            { id: "c", text: "Copper cable" },
            { id: "d", text: "USB cable" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Wireless", statement: "Radio waves." }], steps: [{ reasoning: "Wi-Fi uses radio waves.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Radio waves (Wi-Fi)" },
        },
        {
          id: "olict-u3-hw-q9", difficulty: "core", totalMarks: 2,
          stem: "A copper Ethernet link runs at 100 Mbps. A fibre link is 10 times faster. What speed does the fibre link run at?",
          response: { type: "numeric", parts: [{ label: "Mbps", answer: 1000, unit: "Mbps" }] },
          markscheme: { principles: [{ kind: "principle", name: "Transmission speed", statement: "Fibre is faster." }], steps: [
            { reasoning: "$100 \\times 10 = 1000$ Mbps.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "1000 Mbps" },
        },
        {
          id: "olict-u3-hw-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Compare copper cable and fibre optic cable for network connections in two ways.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Copper vs fibre", statement: "Cost/distance vs speed/distance." }], steps: [
            { reasoning: "Copper: cheap but short range, slower.", marks: 1, markCode: "M" },
            { reasoning: "Fibre: fast, long range, but costly.", marks: 1, markCode: "M" },
            { reasoning: "Fibre uses light signals.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Copper is cheap for short distances; fibre is much faster over long distances but costs more." },
        },
        {
          id: "olict-u3-hw-q11", difficulty: "foundation", totalMarks: 1,
          stem: "An older hub device broadcasts data to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only the printer" },
            { id: "b", text: "All connected devices" },
            { id: "c", text: "Only the server" },
            { id: "d", text: "The internet" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Hub", statement: "Broadcasts to all." }], steps: [{ reasoning: "Hub sends data to every device.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** All connected devices" },
        },
        {
          id: "olict-u3-hw-q12", difficulty: "core", totalMarks: 2,
          stem: "Explain the role of an access point in a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Access point", statement: "Adds Wi-Fi." }], steps: [
            { reasoning: "Connects wireless devices to wired network.", marks: 1, markCode: "M" },
            { reasoning: "Allows Wi-Fi devices to access LAN/internet.", marks: 1, markCode: "A" },
          ], finalAnswer: "Access point links Wi-Fi devices to the wired network so they can share its resources." },
        },
        {
          id: "olict-u3-hw-q13", difficulty: "challenge", totalMarks: 2,
          stem: "An office has 3 floors with 8 computers on each floor. Each computer needs a NIC. How many NICs are required?",
          response: { type: "numeric", parts: [{ label: "NICs", answer: 24 }] },
          markscheme: { principles: [{ kind: "principle", name: "NIC count", statement: "One per computer." }], steps: [
            { reasoning: "$3 \\times 8 = 24$ NICs.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "24 NICs" },
        },
        {
          id: "olict-u3-hw-q14", difficulty: "challenge", totalMarks: 1,
          stem: "For a fast backbone connecting two cities, the best transmission medium is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Fibre optic cable" },
            { id: "b", text: "Punched cards" },
            { id: "c", text: "Paper tape" },
            { id: "d", text: "Copper cable" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Transmission media", statement: "Fibre for speed/distance." }], steps: [{ reasoning: "Fibre is fast over long distances.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Fibre optic cable" },
        },
        {
          id: "olict-u3-hw-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Trace the path of data from a home PC to a website, naming the hardware involved.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Data path", statement: "NIC → switch → router → modem." }], steps: [
            { reasoning: "NIC sends data onto LAN.", marks: 1, markCode: "M" },
            { reasoning: "Switch directs it within the LAN.", marks: 1, markCode: "M" },
            { reasoning: "Router directs it between networks.", marks: 1, markCode: "M" },
            { reasoning: "Modem converts signal for the line.", marks: 1, markCode: "A" },
          ], finalAnswer: "PC → NIC → switch → router → modem → internet." },
        },
        {
          id: "olict-u3-hw-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Network hardware — extended review.",
          parts: [
            { label: "a", prompt: "What does a NIC do?", marks: 1 },
            { label: "b", prompt: "Distinguish a switch from a router.", marks: 2 },
            { label: "c", prompt: "What does a modem do?", marks: 2 },
            { label: "d", prompt: "What does an access point do?", marks: 2 },
            { label: "e", prompt: "Compare copper and fibre optic cable in one way.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Network hardware", statement: "NIC, switch, router, AP, modem." },
          ], steps: [
            { part: "a", reasoning: "Connects computer to network.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Switch: within LAN; router: between networks.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct distinction.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Converts digital↔analogue signals.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Correct role.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Adds Wi-Fi to wired network.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Correct role.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Copper cheap/short; fibre fast/long.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) connects PC (b) LAN vs between nets (c) signal conversion (d) Wi-Fi access (e) copper cheap vs fibre fast" },
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
            { id: "a", text: "One shared cable" },
            { id: "b", text: "Each other in a loop" },
            { id: "c", text: "Nothing — standalone" },
            { id: "d", text: "A central device" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Star", statement: "Central connection." }], steps: [{ reasoning: "Star = central.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Central device" },
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
        {
          id: "olict-u3-tp-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a bus topology, all devices share…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A central switch" },
            { id: "b", text: "Wireless only" },
            { id: "c", text: "Separate cables to each device" },
            { id: "d", text: "One backbone cable" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Bus", statement: "Shared cable." }], steps: [{ reasoning: "Bus = one shared backbone cable.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** One backbone cable" },
        },
        {
          id: "olict-u3-tp-q6", difficulty: "core", totalMarks: 1,
          stem: "If the backbone cable breaks in a bus topology, what happens?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only one device is affected" },
            { id: "b", text: "The whole network fails" },
            { id: "c", text: "Nothing changes" },
            { id: "d", text: "The network becomes faster" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Bus weakness", statement: "Single point of failure." }], steps: [{ reasoning: "All devices depend on the one cable.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** The whole network fails" },
        },
        {
          id: "olict-u3-tp-q7", difficulty: "foundation", totalMarks: 2,
          stem: "A star topology has 1 central switch and 12 PCs connected to it. How many devices are on the network?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 13 }] },
          markscheme: { principles: [{ kind: "principle", name: "Device count", statement: "Central + endpoints." }], steps: [
            { reasoning: "$1 + 12 = 13$ devices.", marks: 1, markCode: "M" },
            { reasoning: "Correct answer.", marks: 1, markCode: "A" },
          ], finalAnswer: "13 devices" },
        },
        {
          id: "olict-u3-tp-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is a network topology?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Router" },
            { id: "b", text: "Cable" },
            { id: "c", text: "Star" },
            { id: "d", text: "Modem" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Topology", statement: "Layout of connections." }], steps: [{ reasoning: "Star is a topology; others are hardware/media.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Star" },
        },
        {
          id: "olict-u3-tp-q9", difficulty: "core", totalMarks: 2,
          stem: "A star network has 1 central switch and 10 PCs. How many cables are needed to connect every PC to the switch?",
          response: { type: "numeric", parts: [{ label: "cables", answer: 10 }] },
          markscheme: { principles: [{ kind: "principle", name: "Star cabling", statement: "One cable per device." }], steps: [
            { reasoning: "Each of 10 PCs needs one cable to the switch.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 10 cables.", marks: 1, markCode: "A" },
          ], finalAnswer: "10 cables" },
        },
        {
          id: "olict-u3-tp-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Compare the reliability of star and bus topologies.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "comparison", name: "Star vs bus", statement: "Fault isolation vs shared cable." }], steps: [
            { reasoning: "Star: one cable failure affects one device.", marks: 1, markCode: "M" },
            { reasoning: "Bus: backbone failure stops everything.", marks: 1, markCode: "M" },
            { reasoning: "Star more reliable overall.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Star isolates faults to single devices; bus loses the whole network if its cable breaks." },
        },
        {
          id: "olict-u3-tp-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The most common topology in schools and offices today is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Mesh" },
            { id: "b", text: "Star" },
            { id: "c", text: "Bus" },
            { id: "d", text: "Ring" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Star", statement: "Most common layout." }], steps: [{ reasoning: "Star is standard for reliability.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Star" },
        },
        {
          id: "olict-u3-tp-q12", difficulty: "core", totalMarks: 1,
          stem: "In a ring topology, data travels…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Through a central switch only" },
            { id: "b", text: "Along one shared cable" },
            { id: "c", text: "Around a loop from device to device" },
            { id: "d", text: "Directly to the internet" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Ring", statement: "Loop of connections." }], steps: [{ reasoning: "Ring = data circulates around the loop.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Around a loop from device to device" },
        },
        {
          id: "olict-u3-tp-q13", difficulty: "challenge", totalMarks: 2,
          stem: "A bus network and a star network each have 6 devices. One cable fault occurs in each. How many devices are affected in the bus network compared with the star network?",
          response: { type: "numeric", parts: [{ label: "devices", answer: 6 }] },
          markscheme: { principles: [{ kind: "principle", name: "Fault impact", statement: "Bus all vs star one." }], steps: [
            { reasoning: "Bus: all 6 affected; star: only 1.", marks: 1, markCode: "M" },
            { reasoning: "Bus is affected more — 6 devices.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 devices (all) in bus vs 1 in star" },
        },
        {
          id: "olict-u3-tp-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Which is an advantage of a star topology?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It is always cheaper" },
            { id: "b", text: "A cable fault affects only one device" },
            { id: "c", text: "It cannot fail" },
            { id: "d", text: "It needs no cables" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Star advantage", statement: "Fault isolation." }], steps: [{ reasoning: "Star isolates cable faults.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** A cable fault affects only one device" },
        },
        {
          id: "olict-u3-tp-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A new office must choose a network topology for 30 computers. Recommend one and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Topology choice", statement: "Star recommended." }], steps: [
            { reasoning: "Star recommended.", marks: 1, markCode: "M" },
            { reasoning: "Fault isolation keeps network running.", marks: 1, markCode: "M" },
            { reasoning: "Easy to add/expand devices.", marks: 1, markCode: "M" },
            { reasoning: "Clear justification.", marks: 1, markCode: "A" },
          ], finalAnswer: "Star — reliable fault isolation and easy expansion suit a growing office." },
        },
        {
          id: "olict-u3-tp-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Network topologies — extended review.",
          parts: [
            { label: "a", prompt: "Describe star topology.", marks: 1 },
            { label: "b", prompt: "Describe bus topology.", marks: 1 },
            { label: "c", prompt: "Describe ring topology.", marks: 1 },
            { label: "d", prompt: "Explain the main weakness of bus topology.", marks: 3 },
            { label: "e", prompt: "A factory wants minimal downtime if one cable fails. Recommend a topology and justify.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Topologies", statement: "Star, bus, ring layouts." },
          ], steps: [
            { part: "a", reasoning: "Central device connects all.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Shared backbone cable.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Devices in a loop.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "One backbone cable.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Break stops whole network.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Single point of failure.", marks: 1, markCode: "A" },
            { part: "e", reasoning: "Star recommended.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Fault affects only one device.", marks: 1, markCode: "M" },
            { part: "e", reasoning: "Meets downtime requirement.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) central (b) shared cable (c) loop (d) single cable failure stops all (e) star — fault isolation" },
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
