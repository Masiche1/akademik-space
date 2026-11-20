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
            { id: "a", text: "RAM" }, { id: "b", text: "SSD" }, { id: "c", text: "Optical disc" }, { id: "d", text: "ROM" },
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
            { id: "a", text: "A unique hardware address" }, { id: "b", text: "A website URL" }, { id: "c", text: "A file size" }, { id: "d", text: "An encryption key" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "MAC", statement: "Hardware NIC address." }], steps: [{ reasoning: "MAC = hardware address.", working: "\\text{hardware}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Unique hardware address" },
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
