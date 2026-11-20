import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olcs-u2-lesson-2-1",
  code: "2-1",
  title: "Packets and Transmission Methods",
  goal: "I CAN explain packet switching, serial and parallel transmission, and the USB interface.",
  standards: ["2210 2.1.1", "2210 2.1.2", "2210 2.1.3"],
  vocabulary: [
    { term: "Packet", definition: "Small block of data with an address and error-checking information, sent over a network." },
    { term: "Packet switching", definition: "Breaking data into packets that travel independently and are reassembled at the destination." },
    { term: "Serial transmission", definition: "Bits sent one at a time along a single wire; used over long distances." },
    { term: "Parallel transmission", definition: "Several bits sent simultaneously along multiple wires; fast but only over short distances." },
    { term: "USB", definition: "Universal Serial Bus — a serial interface for connecting peripherals; carries power and data." },
  ],
  concepts: [
    {
      id: "olcs-u2-packets",
      title: "Packets and packet switching",
      skill: "Explain how data is broken into packets and routed across networks.",
      lesson: {
        sections: [
          { heading: "Why packets?", body: "Networks can't send huge files as one stream — a break would lose everything. Instead data is split into **packets**, each with:\n\n- the data itself\n- source and destination addresses\n- sequence number\n- error-checking bits\n\nPackets travel independently and may take different routes; the receiver reassembles them in order." },
          { heading: "Packet switching advantages", body: "- Efficient use of network links — many users share the same lines.\n- Resilient: if one route fails, packets can reroute.\n- Fair: no single transfer blocks others.\n\nDisadvantage: overhead from headers, and possible out-of-order arrival needing reassembly." },
          { heading: "Circuit vs packet switching", body: "Old telephone-style **circuit switching** reserves a dedicated path for the whole call — wasteful for bursty data. The internet uses packet switching." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A 1 MB file is split into packets of 1000 bytes. How many packets are needed (ignoring headers)?",
          solution: "$1\\text{ MB} = 1\\,048\\,576$ bytes → $1\\,048\\,576 / 1000 \\approx 1049$ packets.",
        },
      },
      questions: [
        {
          id: "olcs-u2-pk-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Which item is NOT part of a typical packet?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Destination address" }, { id: "b", text: "Data payload" }, { id: "c", text: "Sequence number" }, { id: "d", text: "User password" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Packet contents", statement: "Address, payload, sequence, error check." }], steps: [{ reasoning: "Password isn't a packet field.", working: "\\text{password}", marks: 1, markCode: "B" }], finalAnswer: "**(d)** User password" },
        },
        {
          id: "olcs-u2-pk-q2", difficulty: "core", totalMarks: 2,
          stem: "State two advantages of packet switching over circuit switching.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Packet switching", statement: "Shared links, resilient routing." }], steps: [
            { reasoning: "Efficient shared use of links.", working: "\\text{shared links}", marks: 1, markCode: "M" },
            { reasoning: "Reroutes around failures.", working: "\\text{resilience}", marks: 1, markCode: "A" },
          ], finalAnswer: "Efficient link sharing; resilient rerouting around failures." },
        },
        {
          id: "olcs-u2-pk-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why packets may arrive out of order and how the receiver copes.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Reassembly", statement: "Sequence numbers order packets." }], steps: [
            { reasoning: "Different routes → different delays.", working: "\\text{different paths}", marks: 1, markCode: "M" },
            { reasoning: "Sequence numbers identify order.", working: "\\text{sequence no.}", marks: 1, markCode: "M" },
            { reasoning: "Receiver buffers and reassembles in order.", working: "\\text{reassemble}", marks: 1, markCode: "M" },
            { reasoning: "Missing packets are requested again.", marks: 1, markCode: "A" },
          ], finalAnswer: "Packets take different routes; sequence numbers let the receiver reorder them and request any missing." },
        },
        {
          id: "olcs-u2-pk-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Packets and networks review.",
          parts: [
            { label: "a", prompt: "List three items stored in a packet header.", marks: 3 },
            { label: "b", prompt: "State one advantage and one disadvantage of packet switching.", marks: 2 },
            { label: "c", prompt: "A 500 kB message uses 500-byte packets. How many packets?", marks: 2 },
            { label: "d", prompt: "Explain why packet switching suits bursty internet traffic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Packet header", statement: "Address, sequence, error-check fields." },
          ], steps: [
            { part: "a", reasoning: "Any three: source/destination address, sequence number, error check.", working: "\\text{address, seq, check}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct fields listed.", marks: 1, markCode: "A" },
            { part: "a", reasoning: "Third field correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Advantage: shared/resilient links.", working: "\\text{efficiency}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Disadvantage: header overhead/reordering.", working: "\\text{overhead}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "$500\\times1024/500 \\approx 1025$ packets.", working: "1025", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Answer ≈1024-1025.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Links shared only when packets flow.", working: "\\text{on-demand}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "No idle reserved capacity wasted.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) address/sequence/check (b) efficient vs overhead (c) ≈1025 (d) capacity used only during transfer" },
        },
      ],
    },
    {
      id: "olcs-u2-transmission",
      title: "Serial, parallel and USB",
      skill: "Compare serial and parallel transmission and describe the USB interface.",
      lesson: {
        sections: [
          { heading: "Serial vs parallel", body: "**Serial**: one bit at a time on one wire — slower per wire but cheap, long-distance, less interference. Used by USB, network cables.\n\n**Parallel**: multiple bits simultaneously on multiple wires — fast over short distances, but wires interfere at high speed/length. Used inside computers (e.g. old printer cables)." },
          { heading: "USB", body: "Universal Serial Bus is a serial interface that carries both data and power. Advantages: hot-swappable, self-configuring, one connector for many devices, supports many devices on one port via hubs. USB 3.x is much faster than USB 2.0." },
          { heading: "Other interfaces", body: "SATA (storage), HDMI/DisplayPort (video), Bluetooth/Wi-Fi (wireless). The syllabus focuses on USB as the key serial example." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why is USB preferred over an old parallel printer cable for an external hard drive?",
          solution: "USB is serial, hot-swappable, supplies power, and supports higher speeds over longer cables than parallel links.",
        },
      },
      questions: [
        {
          id: "olcs-u2-tm-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In serial transmission, bits are sent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "One at a time" }, { id: "b", text: "All at once" }, { id: "c", text: "In pairs" }, { id: "d", text: "Randomly" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Serial", statement: "One bit at a time." }], steps: [{ reasoning: "Serial = sequential bits.", working: "\\text{one at a time}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** One at a time" },
        },
        {
          id: "olcs-u2-tm-q2", difficulty: "core", totalMarks: 2,
          stem: "Give one advantage of parallel over serial transmission.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Parallel", statement: "Multiple bits at once → faster short-range." }], steps: [
            { reasoning: "Higher data rate over short distance.", working: "\\text{faster}", marks: 1, markCode: "M" },
            { reasoning: "Correct comparison.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster data transfer over short distances." },
        },
        {
          id: "olcs-u2-tm-q3", difficulty: "challenge", totalMarks: 4,
          stem: "A school wants to connect 20 devices to one computer. Explain why USB is a suitable choice.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "USB benefits", statement: "Hot-swap, power, hubs, serial reliability." }], steps: [
            { reasoning: "Hubs allow many devices on one port.", working: "\\text{hubs}", marks: 1, markCode: "M" },
            { reasoning: "Supplies power to peripherals.", working: "\\text{power}", marks: 1, markCode: "M" },
            { reasoning: "Hot-swappable — no shutdown needed.", working: "\\text{hot-swap}", marks: 1, markCode: "M" },
            { reasoning: "Reliable serial over long cables.", marks: 1, markCode: "A" },
          ], finalAnswer: "USB hubs support many devices, supply power, and allow hot-swapping." },
        },
        {
          id: "olcs-u2-tm-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Transmission methods review.",
          parts: [
            { label: "a", prompt: "State one advantage of serial over parallel.", marks: 2 },
            { label: "b", prompt: "State one advantage of parallel over serial.", marks: 2 },
            { label: "c", prompt: "List two features of USB that make it convenient.", marks: 2 },
            { label: "d", prompt: "Explain why parallel transmission is rarely used for long cables.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Serial", statement: "Reliable over distance, cheap, one wire." },
            { kind: "principle", name: "Parallel limits", statement: "Interference/crosstalk at length." },
          ], steps: [
            { part: "a", reasoning: "Works over long distances / less interference.", working: "\\text{long range}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Faster over short distance.", working: "\\text{speed}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Correct advantage.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Any two: hot-swap, power delivery, hubs, self-configuring.", working: "\\text{features}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Second feature correct.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Adjacent wires interfere (crosstalk).", working: "\\text{crosstalk}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Signal timing skew between wires corrupts data.", working: "\\text{skew}", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Conclusion: only short-range use.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) long range (b) fast short-range (c) hot-swap/power (d) crosstalk and skew limit distance" },
        },
      ],
    },
  ],
  notes: [
    { id: "olcs-u2-2-1-notes", title: "Packets and transmission — notes", summary: "Packet contents, packet switching, serial vs parallel, USB.",
      sections: [
        { heading: "Packets", body: "Data split into packets with address, sequence and error-check fields; reassembled at destination." },
        { heading: "Serial vs parallel", body: "Serial = one bit at a time, long-range (USB). Parallel = many bits at once, short-range only." },
      ] },
  ],
};
