import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "olcs-u3-lesson-3-3",
  code: "3-3",
  title: "Data Storage and Network Hardware",
  goal: "I CAN compare storage types and explain the role of NICs, MAC/IP addresses and routers.",
  standards: ["2210 3.3.1", "2210 3.3.2", "2210 3.4.4"],
  vocabulary: [
    { term: "Primary storage", definition: "Fast memory directly accessed by the CPU — RAM and cache." },
    { term: "Secondary storage", definition: "Long-term storage — hard disk drives (HDD), solid-state drives (SSD), optical discs, USB." },
    { term: "Volatile memory", definition: "Loses contents when power is off — RAM." },
    { term: "Non-volatile memory", definition: "Keeps contents without power — ROM, SSD, optical." },
    { term: "Virtual memory", definition: "Using part of the hard disk as extra RAM when physical RAM is full." },
    { term: "NIC", definition: "Network Interface Card — hardware connecting a device to a network." },
    { term: "MAC address", definition: "Unique hardware address of a network interface, assigned at manufacture." },
    { term: "IP address", definition: "Logical address identifying a device on a network; can change." },
    { term: "Router", definition: "Device forwarding packets between different networks using IP addresses." },
  ],
  concepts: [
    {
      id: "olcs-u3-storage",
      title: "Primary, secondary and cloud storage",
      skill: "Compare storage types by speed, capacity, volatility and cost.",
      lesson: {
        sections: [
          { heading: "Primary storage", body: "- **RAM**: volatile, fast, holds running programs/data; cleared on power-off.\n- **Cache**: tiny, fastest, inside CPU for frequently used data.\n- **ROM**: non-volatile, read-only (firmware/BIOS)." },
          { heading: "Secondary storage", body: "- **HDD**: magnetic platters; cheap, large capacity, slower, mechanical.\n- **SSD**: flash memory; faster, no moving parts, more expensive per GB.\n- **Optical** (CD/DVD/Blu-ray): read by laser; portable, slow writes, being phased out.\n- **USB/removable**: portable secondary storage." },
          { heading: "Virtual and cloud", body: "**Virtual memory**: when RAM fills, the OS swaps inactive data to disk — prevents crashes but slows the system.\n\n**Cloud storage**: files on remote servers accessed over the internet — scalable, accessible anywhere, but needs connectivity and raises privacy/security issues vs local storage." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why does a computer slow down when it uses virtual memory heavily?",
          solution: "Disk access is far slower than RAM; swapping data between RAM and disk adds delay.",
        },
      },
      questions: [
        {
          id: "olcs-u3-st-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which storage is volatile?",
          response: { type: "mcq", choices: [
            { id: "a", text: "RAM" },
            { id: "b", text: "SSD" },
            { id: "c", text: "ROM" },
            { id: "d", text: "Optical disc" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Volatile", statement: "Loses data on power-off." }], steps: [{ reasoning: "RAM is volatile.", working: "\\text{RAM}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** RAM" },
        },
        {
          id: "olcs-u3-st-q2", difficulty: "core", totalMarks: 2,
          stem: "State two advantages of an SSD over an HDD.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "SSD", statement: "Flash, no moving parts → fast, durable." }], steps: [
            { reasoning: "Much faster read/write.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { reasoning: "No moving parts → shock resistant.", working: "\\text{durable}", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster and more durable (no moving parts)." },
        },
        {
          id: "olcs-u3-st-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain what virtual memory is and when it is used.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Virtual memory", statement: "Disk used as overflow RAM." }], steps: [
            { reasoning: "Used when RAM is full.", working: "\\text{RAM full}", marks: 1, markCode: "M" },
            { reasoning: "Inactive data swapped to disk.", working: "\\text{swap}", marks: 1, markCode: "M" },
            { reasoning: "Prevents program crashes.", marks: 1, markCode: "M" },
            { reasoning: "Slows system due to disk speed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Virtual memory uses disk space as extra RAM when physical RAM fills; it prevents crashes but slows the system." },
        },
        {
          id: "olcs-u3-st-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Storage review.",
          parts: [
            { label: "a", prompt: "Distinguish primary from secondary storage.", marks: 2 },
            { label: "b", prompt: "Give one advantage and one disadvantage of cloud storage.", marks: 2 },
            { label: "c", prompt: "Why is ROM called non-volatile?", marks: 2 },
            { label: "d", prompt: "Compare HDD and SSD for a laptop used for video editing.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Cloud trade-off", statement: "Accessible anywhere vs connectivity/privacy." },
          ], steps: [
            { part: "a", reasoning: "Primary: CPU-direct fast memory (RAM).", working: "\\text{RAM}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Secondary: long-term storage (disk).", working: "\\text{disk}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Advantage: access anywhere/scalable.", working: "\\text{access}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Disadvantage: needs internet/privacy.", working: "\\text{privacy}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Keeps contents without power.", working: "\\text{non-volatile}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Stores firmware permanently.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "SSD faster — better for editing large files.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "SSD costs more per GB.", working: "\\text{cost}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Recommend SSD for performance.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) RAM vs disk (b) access vs privacy (c) keeps data without power (d) SSD faster, pricier" },
        },
        {
          id: "olcs-u3-st-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which storage type is non-volatile?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cache" },
            { id: "b", text: "Registers" },
            { id: "c", text: "RAM" },
            { id: "d", text: "SSD" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Non-volatile", statement: "Keeps data without power." }], steps: [{ reasoning: "SSD retains data when off.", working: "\\text{SSD}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** SSD" },
        },
        {
          id: "olcs-u3-st-q6", difficulty: "core", totalMarks: 2,
          stem: "How many GB are in 1 TB?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 1024 }] },
          markscheme: { principles: [{ kind: "definition", name: "TB", statement: "1 TB = 1024 GB." }], steps: [
            { reasoning: "$1\\times1024=1024$ GB.", working: "1024", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "1024", marks: 1, markCode: "A" },
          ], finalAnswer: "1024 GB" },
        },
        {
          id: "olcs-u3-st-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Virtual memory is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A wireless network" },
            { id: "b", text: "A screen saver" },
            { id: "c", text: "A faster type of CPU" },
            { id: "d", text: "Using part of the hard disk as extra RAM" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Virtual memory", statement: "Disk used as overflow RAM." }], steps: [{ reasoning: "Disk space acts as extra memory.", working: "\\text{disk}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Disk as extra RAM" },
        },
        {
          id: "olcs-u3-st-q8", difficulty: "core", totalMarks: 2,
          stem: "A 1 TB drive is filled with 16 GB files. How many files fit?",
          response: { type: "numeric", parts: [{ label: "Files", answer: 64 }] },
          markscheme: { principles: [{ kind: "formula", name: "Capacity", statement: "$1024/16=64$." }], steps: [
            { reasoning: "1 TB = 1024 GB; $1024/16=64$.", working: "64", marks: 1, markCode: "M" },
            { reasoning: "Correct count.", working: "64", marks: 1, markCode: "A" },
          ], finalAnswer: "64" },
        },
        {
          id: "olcs-u3-st-q9", difficulty: "core", totalMarks: 2,
          stem: "State one disadvantage of cloud storage compared to local storage.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Cloud limits", statement: "Needs connectivity; privacy concerns." }], steps: [
            { reasoning: "Requires internet access to retrieve files.", working: "\\text{connectivity}", marks: 1, markCode: "M" },
            { reasoning: "Data held by a third party — privacy/security issues.", marks: 1, markCode: "A" },
          ], finalAnswer: "Needs internet connectivity and raises privacy/security concerns versus local storage." },
        },
        {
          id: "olcs-u3-st-q10", difficulty: "core", totalMarks: 1,
          stem: "ROM typically stores…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Downloaded videos" },
            { id: "b", text: "Temporary cache" },
            { id: "c", text: "Firmware such as the BIOS" },
            { id: "d", text: "User documents" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "ROM", statement: "Non-volatile, read-only firmware." }], steps: [{ reasoning: "ROM holds BIOS/firmware.", working: "\\text{BIOS}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Firmware/BIOS" },
        },
        {
          id: "olcs-u3-st-q11", difficulty: "core", totalMarks: 2,
          stem: "A computer has 8 GB of RAM and a 4 GB swap file on disk. What is the total memory the OS can address?",
          response: { type: "numeric", parts: [{ label: "GB", answer: 12 }] },
          markscheme: { principles: [{ kind: "principle", name: "Virtual memory", statement: "RAM + swap file = addressable memory." }], steps: [
            { reasoning: "$8+4=12$ GB.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "Correct total.", working: "12", marks: 1, markCode: "A" },
          ], finalAnswer: "12 GB" },
        },
        {
          id: "olcs-u3-st-q12", difficulty: "core", totalMarks: 2,
          stem: "Optical storage (CD/DVD/Blu-ray) is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A type of RAM" },
            { id: "b", text: "The fastest storage available" },
            { id: "c", text: "Portable media read by a laser" },
            { id: "d", text: "Wireless storage" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Optical", statement: "Laser-read portable discs." }], steps: [{ reasoning: "Optical = laser-read discs.", working: "\\text{laser}", marks: 1, markCode: "M" }, { reasoning: "Portable but slow.", marks: 1, markCode: "A" }], finalAnswer: "**(c)** Laser-read portable media" },
        },
        {
          id: "olcs-u3-st-q13", difficulty: "challenge", totalMarks: 4,
          stem: "A school needs to back up 500 GB of data nightly. Recommend a storage solution and justify your choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Storage choice", statement: "Capacity, cost, reliability, access needs." }], steps: [
            { reasoning: "Needs >500 GB capacity — HDD array or large NAS.", working: "\\text{capacity}", marks: 1, markCode: "M" },
            { reasoning: "Cost-effective vs SSD for bulk backup.", working: "\\text{cost}", marks: 1, markCode: "M" },
            { reasoning: "Cloud option for off-site redundancy.", working: "\\text{cloud}", marks: 1, markCode: "M" },
            { reasoning: "Justified recommendation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Large HDD/NAS for capacity and cost, optionally plus cloud for off-site backup." },
        },
        {
          id: "olcs-u3-st-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Cache memory is characterised by being…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The smallest and fastest memory" },
            { id: "b", text: "Non-volatile" },
            { id: "c", text: "The largest storage" },
            { id: "d", text: "Optical" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Cache", statement: "Tiny, fastest, CPU-near." }], steps: [{ reasoning: "Cache is smallest and fastest.", working: "\\text{fastest}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Smallest and fastest" },
        },
        {
          id: "olcs-u3-st-q15", difficulty: "challenge", totalMarks: 3,
          stem: "A 600 MB file is copied to a USB drive at a sustained rate of 50 MB/s. How long does the copy take?",
          response: { type: "numeric", parts: [{ label: "Seconds", answer: 12 }] },
          markscheme: { principles: [{ kind: "formula", name: "Time", statement: "$t=\\text{size}/\\text{rate}$." }], steps: [
            { reasoning: "$600/50=12$ s.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "Correct calculation.", working: "12", marks: 1, markCode: "M" },
            { reasoning: "Units in seconds.", working: "s", marks: 1, markCode: "A" },
          ], finalAnswer: "12 s" },
        },
        {
          id: "olcs-u3-st-q16", difficulty: "foundation", totalMarks: 1,
          stem: "RAM is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Permanent storage" },
            { id: "b", text: "A network device" },
            { id: "c", text: "Volatile primary storage directly accessed by the CPU" },
            { id: "d", text: "An output device" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "RAM", statement: "Volatile primary memory." }], steps: [{ reasoning: "RAM = volatile primary storage.", working: "\\text{RAM}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Volatile primary storage" },
        },
      ],
    },
    {
      id: "olcs-u3-network-hw",
      title: "Network hardware and addressing",
      skill: "Explain NICs, MAC and IP addresses, and the role of routers in networks.",
      lesson: {
        sections: [
          { heading: "NIC and MAC", body: "A **Network Interface Card (NIC)** connects a device to a network (wired or wireless). Each NIC has a factory-assigned **MAC address** — a unique 48-bit hardware identifier (e.g. `00:1A:2B:3C:4D:5E`) used for local network delivery." },
          { heading: "IP addresses", body: "An **IP address** is a logical address identifying a device on a network (e.g. `192.168.1.5`). It can change (DHCP) and is used to route between networks. IPv4 uses 32 bits; IPv6 uses 128 bits to allow more devices." },
          { heading: "Routers", body: "A **router** forwards packets between different networks (e.g. home network ↔ internet). It reads destination IP addresses and chooses the best path. Switches forward within a LAN using MAC addresses; routers connect between networks using IP addresses." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A packet arrives at a router destined for `8.8.8.8`. What does the router do?",
          solution: "Reads the destination IP, looks up the best route toward that address, and forwards the packet to the next hop.",
        },
      },
      questions: [
        {
          id: "olcs-u3-nh-q1", difficulty: "foundation", totalMarks: 1,
          stem: "A MAC address is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A file size" },
            { id: "b", text: "An encryption key" },
            { id: "c", text: "A website URL" },
            { id: "d", text: "A unique hardware address" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "MAC", statement: "Hardware NIC address." }], steps: [{ reasoning: "MAC = hardware address.", working: "\\text{hardware}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Unique hardware address" },
        },
        {
          id: "olcs-u3-nh-q2", difficulty: "core", totalMarks: 2,
          stem: "State the role of a router in a network.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Router", statement: "Forwards packets between networks." }], steps: [
            { reasoning: "Connects/forwards between networks.", working: "\\text{between networks}", marks: 1, markCode: "M" },
            { reasoning: "Uses IP addresses to route.", working: "\\text{IP routing}", marks: 1, markCode: "A" },
          ], finalAnswer: "Forwards packets between different networks using IP addresses." },
        },
        {
          id: "olcs-u3-nh-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Distinguish between a MAC address and an IP address.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "MAC vs IP", statement: "Hardware vs logical; fixed vs changeable." }], steps: [
            { reasoning: "MAC: hardware, factory-assigned, fixed.", working: "\\text{hardware, fixed}", marks: 1, markCode: "M" },
            { reasoning: "IP: logical, can change, used for routing.", working: "\\text{logical, changeable}", marks: 1, markCode: "M" },
            { reasoning: "MAC for local delivery; IP for inter-network.", marks: 1, markCode: "M" },
            { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "MAC = fixed hardware address for local networks; IP = changeable logical address for routing between networks." },
        },
        {
          id: "olcs-u3-nh-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Network hardware review.",
          parts: [
            { label: "a", prompt: "State the function of a NIC.", marks: 2 },
            { label: "b", prompt: "Compare MAC and IP addresses.", marks: 3 },
            { label: "c", prompt: "Explain the role of a router.", marks: 2 },
            { label: "d", prompt: "Why does IPv6 exist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "IPv6", statement: "128-bit addresses — more devices." },
          ], steps: [
            { part: "a", reasoning: "Connects device to network.", working: "\\text{connect}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Has unique MAC address.", working: "\\text{MAC}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "MAC: hardware, fixed, local.", working: "\\text{MAC}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "IP: logical, changeable, routed.", working: "\\text{IP}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct comparison.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Forwards packets between networks.", working: "\\text{forward}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Uses IP addresses.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "IPv4 32-bit running out of addresses.", working: "\\text{address shortage}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "IPv6 128-bit → vastly more addresses.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) connect+MAC (b) hardware vs logical (c) forward between networks (d) IPv4 exhaustion" },
        },
        {
          id: "olcs-u3-nh-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A router's main job is to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Store files" },
            { id: "b", text: "Print documents" },
            { id: "c", text: "Forward packets between different networks" },
            { id: "d", text: "Charge batteries" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Router", statement: "Connects/forwards between networks." }], steps: [{ reasoning: "Routers join networks.", working: "\\text{between networks}", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Forward between networks" },
        },
        {
          id: "olcs-u3-nh-q6", difficulty: "core", totalMarks: 2,
          stem: "How many bits long is a MAC address?",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 48 }] },
          markscheme: { principles: [{ kind: "definition", name: "MAC", statement: "48-bit hardware address." }], steps: [
            { reasoning: "MAC = 48 bits.", working: "48", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "48", marks: 1, markCode: "A" },
          ], finalAnswer: "48 bits" },
        },
        {
          id: "olcs-u3-nh-q7", difficulty: "foundation", totalMarks: 1,
          stem: "An IP address is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A fixed hardware serial number" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "A password" },
            { id: "d", text: "A logical address that can change" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "IP", statement: "Logical, changeable address." }], steps: [{ reasoning: "IP addresses can change (DHCP).", working: "\\text{logical}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Logical, changeable" },
        },
        {
          id: "olcs-u3-nh-q8", difficulty: "core", totalMarks: 2,
          stem: "How many bits are in an IPv4 address?",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 32 }] },
          markscheme: { principles: [{ kind: "definition", name: "IPv4", statement: "32-bit address." }], steps: [
            { reasoning: "IPv4 = 32 bits.", working: "32", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "32", marks: 1, markCode: "A" },
          ], finalAnswer: "32 bits" },
        },
        {
          id: "olcs-u3-nh-q9", difficulty: "core", totalMarks: 2,
          stem: "State the difference between a switch and a router.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Switch vs router", statement: "Switch: within LAN (MAC); router: between networks (IP)." }], steps: [
            { reasoning: "Switch forwards within a LAN using MAC addresses.", working: "\\text{switch LAN}", marks: 1, markCode: "M" },
            { reasoning: "Router forwards between networks using IP addresses.", marks: 1, markCode: "A" },
          ], finalAnswer: "A switch connects devices within one LAN using MAC addresses; a router connects different networks using IP addresses." },
        },
        {
          id: "olcs-u3-nh-q10", difficulty: "core", totalMarks: 1,
          stem: "A NIC (Network Interface Card) is used to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Connect a device to a network" },
            { id: "b", text: "Store data permanently" },
            { id: "c", text: "Print documents" },
            { id: "d", text: "Display images" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "NIC", statement: "Connects device to network." }], steps: [{ reasoning: "NIC provides network connection.", working: "\\text{NIC}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Connect to network" },
        },
        {
          id: "olcs-u3-nh-q11", difficulty: "core", totalMarks: 2,
          stem: "How many bits are in an IPv6 address?",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 128 }] },
          markscheme: { principles: [{ kind: "definition", name: "IPv6", statement: "128-bit address." }], steps: [
            { reasoning: "IPv6 = 128 bits.", working: "128", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "128", marks: 1, markCode: "A" },
          ], finalAnswer: "128 bits" },
        },
        {
          id: "olcs-u3-nh-q12", difficulty: "core", totalMarks: 2,
          stem: "MAC addresses are primarily used for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Naming websites" },
            { id: "b", text: "Encrypting emails" },
            { id: "c", text: "Routing between continents" },
            { id: "d", text: "Delivering data within a local network" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "MAC use", statement: "Local delivery on a LAN." }], steps: [{ reasoning: "MAC works at local level.", working: "\\text{LAN}", marks: 1, markCode: "M" }, { reasoning: "IP handles inter-network routing.", marks: 1, markCode: "A" }], finalAnswer: "**(d)** Local network delivery" },
        },
        {
          id: "olcs-u3-nh-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the journey of a web request from your computer to a website, mentioning IP addresses and routers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Routing", statement: "Packets forwarded hop-by-hop by IP." }], steps: [
            { reasoning: "Request packaged into packets with destination IP.", working: "\\text{packets}", marks: 1, markCode: "M" },
            { reasoning: "Router reads destination IP and forwards to next hop.", working: "\\text{router}", marks: 1, markCode: "M" },
            { reasoning: "Repeats across networks until reaching the website.", working: "\\text{hop-by-hop}", marks: 1, markCode: "M" },
            { reasoning: "Response returns the same way.", marks: 1, markCode: "A" },
          ], finalAnswer: "Packets carry the destination IP; each router forwards them toward the target until they reach the website, and the response returns similarly." },
        },
        {
          id: "olcs-u3-nh-q14", difficulty: "challenge", totalMarks: 1,
          stem: "DHCP is a service that…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Blocks viruses" },
            { id: "b", text: "Encrypts network traffic" },
            { id: "c", text: "Speeds up the CPU" },
            { id: "d", text: "Automatically assigns IP addresses to devices" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "DHCP", statement: "Auto-assigns IP addresses." }], steps: [{ reasoning: "DHCP gives out IP addresses.", working: "\\text{DHCP}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Assigns IP addresses" },
        },
        {
          id: "olcs-u3-nh-q15", difficulty: "challenge", totalMarks: 3,
          stem: "How many more bits does an IPv6 address have than an IPv4 address?",
          response: { type: "numeric", parts: [{ label: "Bits", answer: 96 }] },
          markscheme: { principles: [{ kind: "formula", name: "Difference", statement: "$128-32=96$ bits." }], steps: [
            { reasoning: "$128-32=96$.", working: "96", marks: 1, markCode: "M" },
            { reasoning: "Correct subtraction.", working: "96", marks: 1, markCode: "M" },
            { reasoning: "Correct value.", working: "96", marks: 1, markCode: "A" },
          ], finalAnswer: "96 bits" },
        },
        {
          id: "olcs-u3-nh-q16", difficulty: "foundation", totalMarks: 1,
          stem: "A MAC address is assigned by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The router" },
            { id: "b", text: "The internet provider daily" },
            { id: "c", text: "The user" },
            { id: "d", text: "The manufacturer of the network card" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "MAC", statement: "Factory-assigned hardware ID." }], steps: [{ reasoning: "MAC is set at manufacture.", working: "\\text{manufacturer}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Manufacturer" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u3-3-3-notes", title: "Storage and networks — notes", summary: "RAM vs disk, cloud, NIC/MAC/IP, routers, IPv6.",
      sections: [
        { heading: "Storage", body: "Primary = RAM/cache (volatile, fast). Secondary = HDD/SSD/optical (non-volatile). Virtual memory = disk overflow. Cloud = remote, needs connectivity." },
        { heading: "Addresses", body: "MAC = hardware ID (local). IP = logical address (routed). Router forwards between networks by IP." },
      ] },
  ],
};
