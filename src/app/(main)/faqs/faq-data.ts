/**
 * FAQ content for /faqs. Drafted by a grounded multi-agent pass and reconciled
 * against the real scaniomoving.com pages (pianos, glossary, FAQ) so the facts
 * and terminology are authentic. Edit here; the page renders from this data and
 * also emits FAQPage structured data from it.
 */

export type FaqItem = {
  q: string;
  /** Lead paragraph (always shown; also the basis of the FAQPage schema text). */
  a: string;
  /** Optional unordered list rendered under the lead. */
  bullets?: string[];
  /** Optional numbered steps rendered under the lead (for timelines/checklists). */
  steps?: string[];
};
export type FaqSection = {
  title: string;
  /** URL anchor — old .php URLs deep-link here, so don't rename casually. */
  anchor: string;
  blurb: string;
  items: FaqItem[];
};
export type GlossaryTerm = { term: string; definition: string };

export const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "Pianos, Fine Art & High-Value Items",
    anchor: "specialty",
    blurb:
      "How our trained crews protect pianos, fine art, antiques, and other irreplaceable pieces with the right equipment and documentation.",
    items: [
      {
        q: "Can you move my piano? It's an upright in a 4th-floor walk-up.",
        a: "Yes — pianos are one of our specialties, and we've moved countless uprights, grands, and concert pianos for schools, churches, and homes across the city. A walk-up is exactly the kind of job our trained crews handle with the right equipment: padded coverings, protective “shoes” for the legs, skids, and proper rigging to protect both the instrument and your stairwell. Before the day, we'll talk through the staircase, turns, and doorways so the crew shows up ready. Call us at 212.722.6850 for a free estimate.",
      },
      {
        q: "Do you handle grand pianos and other large musical instruments?",
        a: "We do — concert, grand, and upright pianos from makers like Steinway, Yamaha, Mason & Hamlin, Bechstein, Baldwin, and Kawai. A grand is typically partly disassembled, padded, fitted with protective coverings, and secured to a skid board, which takes a crew trained specifically for the job and a real understanding of the instrument. We also move harps, cellos, organs, and other large or delicate instruments with the same care. Email info@scaniomoving.com and we'll plan the safest approach for your piece and your building.",
      },
      {
        q: "I have valuable fine art and antiques. Who actually handles them?",
        a: "High-value pieces are handled by crews trained for specialty work, not whoever happens to be available. For fine art, antiques, sculpture, and other irreplaceable items, we use proper padding, custom crating where warranted, and condition documentation so there's a clear record of how a piece looked before it moved. On larger or designer projects, a dedicated project manager oversees the handling start to finish. We'll walk through your inventory and recommend the right level of protection at your free estimate.",
      },
      {
        q: "Can you build custom crates for awkward or fragile pieces like a chandelier or a sculpture?",
        a: "Yes. Chandeliers, sculpture, oversized art, and other awkwardly shaped or high-value items often need custom crating built to fit the piece, and that's part of our specialty handling. Custom crates, skids, and heavy padding let us secure things that won't fit a standard box safely. Tell us what you're moving and we'll spec the right crating as part of your estimate.",
      },
      {
        q: "How do you protect irreplaceable items, and what if something is damaged?",
        a: "Protection starts before anything moves: trained crews, proper equipment, custom crating where needed, and condition documentation so the state of each piece is recorded up front. We also offer full-value protection options, which we'll explain so you can choose the right coverage for genuinely irreplaceable pieces. The goal is that nothing gets damaged in the first place, but you'll have the right safeguards in writing either way. Just ask your coordinator for the details.",
      },
      {
        q: "This is for a design project — receiving artwork and furniture, holding it, then installing later. Can you do that?",
        a: "Yes, that's our FF&E and designer service. We handle receiving and inspection with condition documentation, climate-controlled staging while pieces wait, and consolidated delivery and installation when the space is ready. Fine art, antiques, and custom crating are all part of it, with a dedicated project manager coordinating building access and COIs so installation day goes smoothly. Contact us at 212.722.6850 and we'll set up the project the right way from the start.",
      },
    ],
  },
  {
    title: "Estimates & Pricing",
    anchor: "estimates",
    blurb:
      "How free estimates work, what drives the cost of a NYC move, and how to make your quote as accurate as possible.",
    items: [
      {
        q: "Do I have to pay for a quote?",
        a: "No. Scanio is glad to offer a free, no-obligation estimate for your move. You can call us at 212.722.6850, email info@scaniomoving.com, or send over the details and a coordinator will get back to you. We've been doing this in New York since 1941, so we'll ask the right questions to give you an accurate picture from the start.",
      },
      {
        q: "Do you do the survey in person, or can it be done online?",
        a: "We offer both, and the right choice usually depends on the size and complexity of your move. For larger homes, lofts, or anything with valuable or specialty items, an in-home survey lets us see everything firsthand and plan accurately. For smaller apartments or busy schedules, a virtual survey over video works well and saves you time. Tell your coordinator which you'd prefer and we'll arrange it.",
      },
      {
        q: "What actually drives the cost of a move in NYC?",
        a: "A lot of it comes down to the realities of moving in New York: how many flights in a walk-up, whether there's an elevator you need to reserve, how far the truck can park from the door, and the volume and weight of what's being moved. Distance, packing services, specialty items like pianos or fine art, and any storage needs also factor in. We walk you through all of this during your estimate so there are no surprises, and we can flag things like COI requirements or tight street access early.",
      },
      {
        q: "Is packing and materials included in the estimate, or is that extra?",
        a: "It depends on the service level you choose, and we'll lay it out clearly in your estimate. We offer full packing, fragile or partial packing, and a self-pack option if you'd rather handle the boxes yourself, plus unpacking and debris removal on the back end. Whatever you pick, your coordinator will spell out exactly what's included so the quote reflects your actual move.",
      },
      {
        q: "How can I make sure my quote is as accurate as possible?",
        a: "The more we can see, the better. Show us everything during your survey — closets, storage units, and anything in the basement or attic — and let us know about specialty items like a piano, chandeliers, or artwork. It also helps to share the practical details of both buildings, such as elevator access, walk-up flights, parking near the entrance, and whether your co-op requires a Certificate of Insurance. Sharing these things up front lets us plan properly and give you a realistic, dependable estimate.",
      },
    ],
  },
  {
    title: "Our Moving Process & Moving Day",
    anchor: "moving-process",
    blurb:
      "What to expect from your first call through moving day — your coordinator, COIs, elevator reservations, and parking.",
    items: [
      {
        q: "What happens from my first phone call to moving day?",
        a: "It starts with a free estimate, often a quick in-home or virtual survey so we can see your space, access, and any tricky items. From there a dedicated coordinator builds your plan, locks in dates, and handles building paperwork like COIs and elevator reservations. On moving day, a foreman and crew arrive, protect floors and doorways, pack or wrap as planned, load, transport, and place everything where you want it. You'll have one point of contact the whole way through — not a different person every time you call.",
      },
      {
        q: "Who's my main point of contact during the move?",
        a: "You'll work with a dedicated coordinator from the start. They put together your estimate and plan, handle scheduling, sort out COIs and elevator or loading-dock reservations with your building, and answer your questions along the way. On the day itself, the foreman runs the crew on-site, but your coordinator stays in the loop so nothing falls through the cracks. You can always reach us at 212.722.6850 or info@scaniomoving.com.",
      },
      {
        q: "My co-op needs a Certificate of Insurance before anyone can move in. Can you handle that?",
        a: "Yes — COIs are routine for us, and your coordinator handles them as part of the process. Just send us your building's specific insurance requirements, the managing agent or property manager's details, and any deadlines, and we'll prepare and submit the certificate directly. NYC co-ops and condos each have their own wording and limits, so the earlier you get those requirements to us, the smoother it goes.",
      },
      {
        q: "Do I need to reserve the building elevator or loading dock myself?",
        a: "Your coordinator will help arrange the service elevator or loading-dock reservation with your building, but the building usually requires the resident or tenant to book the time window, so it's a team effort. Many NYC buildings only allow moves during set hours on weekdays and limit how long you can hold the elevator, so we plan the day around that window. Let us know your building's move-in and move-out rules early and we'll schedule the crew to match.",
      },
      {
        q: "Parking in my neighborhood is a nightmare. How do you get the truck close to the building?",
        a: "Tight streets and no parking are part of moving in NYC, so we plan the truck's position and timing around your block ahead of time and the crew works efficiently once we're set up. If a full-size trailer simply can't reach your door, we can arrange a shuttle transfer to a smaller vehicle that can get in close. Tell your coordinator about specifics like a narrow one-way street, a bus lane, hydrants, or a tough corner, and we'll factor it into the plan.",
      },
      {
        q: "How long does a typical NYC move take?",
        a: "It depends on the size of your home, how much you're moving, packing needs, and the access at both ends — a fifth-floor walk-up versus a building with a service elevator. A studio or one-bedroom often wraps in a single day, while larger homes or moves with lots of packing can run longer, and building elevator windows can shape the timeline too. Rather than guess, we give you a realistic plan during your free estimate based on your specific situation.",
      },
    ],
  },
  {
    title: "Packing & Materials",
    anchor: "packing",
    blurb:
      "Your packing options, the materials we use, and how we protect fragile and valuable items on the way out.",
    items: [
      {
        q: "What's the difference between a full pack, a partial pack, and packing myself?",
        a: "We offer all three so you can match the service to your budget and timeline:",
        bullets: [
          "Full pack — our crew wraps and boxes everything, from the kitchen to the closets, so you don't have to lift a thing.",
          "Fragile / partial pack — we handle the breakables and tricky items (dishes, glassware, art, electronics) while you box the easy things like books and linens.",
          "Self-pack — you box everything yourself and we handle the move, often the most budget-friendly option for a smaller NYC apartment.",
        ],
      },
      {
        q: "Do you provide all the boxes and packing materials, or do I need to buy my own?",
        a: "If you choose a full or partial pack, our crew brings everything needed — boxes, packing paper, bubble wrap, tape, and specialty cartons for things like dishes, wardrobes, and mirrors. We also use reusable moving bins and blankets along with recyclable packing materials, which keeps the move greener and the waste down. If you'd rather self-pack, just let your coordinator know and we can arrange to drop off supplies ahead of your move date.",
      },
      {
        q: "How do you protect fragile or valuable things like dishes, mirrors, and artwork?",
        a: "Fragile items are individually wrapped in paper and bubble wrap, then packed into the right specialty cartons — dish-pack boxes, mirror and picture cartons — with padding so nothing shifts. For higher-value pieces like fine art, antiques, sculpture, and chandeliers, our trained crews use proper equipment and can build custom crates when an item needs it. Furniture is pad-wrapped in moving blankets to guard against dings on the way down a tight walk-up or through a co-op service entrance.",
      },
      {
        q: "Will my boxes be labeled so I know what's in them and which room they go to?",
        a: "Yes. When our crew packs for you, boxes are labeled by room and contents so unloading on the other end is organized and your movers know exactly where each box belongs. If you're self-packing, we recommend labeling each box with the room and a quick note of what's inside, and marking anything fragile clearly. Good labeling saves real time on move day, especially when crews are working around an elevator reservation or a tight parking window.",
      },
      {
        q: "Can you unpack for me too, or just pack?",
        a: "We can do both. Our surface unpack gets your belongings out of the boxes and onto counters, shelves, and surfaces, and includes hauling away the empty boxes and packing debris so you're not left with a mountain of cardboard. If you'd like more hands-on help settling in, we can arrange a professional organizer on your behalf to take it a step further. Just mention unpacking when you set up your move so we can plan the crew and timing.",
      },
      {
        q: "How far in advance should I start packing before my NYC move?",
        a: "If you're self-packing, a good rule is to start two to three weeks out with things you rarely use — off-season clothes, books, decor — and save daily essentials for the last few days. NYC moves often hinge on a building's elevator reservation or a narrow parking window, so being fully boxed and ready before the crew arrives keeps everything on schedule. If our crew is packing for you, we'll coordinate the packing day around your move date, often the day before or the morning of.",
      },
    ],
  },
  {
    title: "Storage",
    anchor: "storage",
    blurb:
      "Our temperature-controlled, 24/7-monitored Secaucus warehouse — flexible billing, access, and storage between closing dates.",
    items: [
      {
        q: "Is your storage facility climate-controlled? I have wood furniture and some artwork I'm worried about.",
        a: "Yes. Our warehouse in Secaucus, NJ is temperature-controlled, so your wood furniture, artwork, electronics, and other sensitive pieces are kept in a stable environment year-round rather than baking in summer or freezing in winter. That makes it a good fit for the kinds of belongings NYC apartments rarely have room for but you don't want to risk in an unconditioned space. If you have especially delicate items, just let your coordinator know so we can plan the handling and packing accordingly.",
      },
      {
        q: "Where exactly is the storage warehouse, and how far is it from the city?",
        a: "Our temperature-controlled warehouse is at 355 County Avenue, Secaucus, NJ 07094, just about 3 miles from the Lincoln Tunnel. That keeps it close enough for a straightforward trip in and out of Manhattan while giving your belongings far more space and better conditions than city storage typically allows. Because we handle both your move and your storage, your items go straight from your home into our own facility.",
      },
      {
        q: "How secure is the place? I want to know my stuff is actually being watched.",
        a: "The Secaucus warehouse is monitored 24/7, so your belongings are looked after around the clock. It's our own temperature-controlled facility rather than a self-storage unit you let yourself into, which means your items are handled and stored by the same Scanio team that moves them. Many of our warehouse staff have been with us for decades, so there's real accountability behind everything that comes through the door.",
      },
      {
        q: "Do I have to commit to a long contract, or can I just store for a little while?",
        a: "There's no long lock-in. Storage is month-to-month with two-week rental increments, so you can keep your belongings with us only as long as you actually need to — whether that's a couple of weeks between apartments or a longer stretch. It's a flexible setup designed around real moving timelines, not a year-long commitment.",
      },
      {
        q: "How does billing work? I don't want to pay for a huge unit if I only have a few boxes.",
        a: "You pay only for the space you actually use, so a few boxes and a couple of pieces of furniture are billed very differently than a full apartment's worth of belongings. Pricing depends on the volume you store and how long you keep it, which is why we give a free estimate rather than quoting a flat rate up front. Reach out and a coordinator can walk you through the factors and give you a clear picture for your situation.",
      },
      {
        q: "We close on the new place a few weeks after we have to be out of the old one. Can you hold everything in between?",
        a: "Yes — that's exactly what storage-in-transit is for. We move your belongings out of your old home, keep them safely in our temperature-controlled, 24/7-monitored Secaucus warehouse during the gap, and then deliver everything to your new place once you're ready. Because the whole process stays under Scanio's management start to finish, you're working with one team the entire time instead of handing your things off between companies.",
      },
    ],
  },
  {
    title: "Insurance, Licensing & Protecting Your Belongings",
    anchor: "licensing",
    blurb:
      "Our licensing credentials, what coverage options mean for you, and how COIs and claims are handled.",
    items: [
      {
        q: "Is Scanio actually licensed to move in New York?",
        a: "Yes. We've been a licensed New York mover since 1941, and we hold every credential the work requires: NY DOT T11495 for moves within the state, US DOT 537054, and ICC MC93512 for interstate and long-distance moves. Those numbers aren't just paperwork — they mean your move is handled by a regulated, accountable company rather than a fly-by-night crew, and you're welcome to verify any of them before you book.",
      },
      {
        q: "What does “licensed and insured” really mean for me as the customer?",
        a: "It means you're protected on two fronts. “Licensed” means we're authorized and regulated to perform your move under our NY DOT, US DOT, and ICC credentials, so there's a real, accountable company standing behind the work. “Insured” means we carry the coverage NYC buildings and customers expect, including the ability to issue Certificates of Insurance for your building and to offer valuation coverage on your belongings. If you ever want to see proof of either, just ask your coordinator.",
      },
      {
        q: "What's the difference between full-value protection and basic coverage?",
        a: "Basic coverage is the minimum included on most moves and is calculated by weight, not by what an item is actually worth, so it typically won't make you whole on a higher-value piece. Full-value protection is the stronger option: if something covered is lost or damaged, it's handled based on the item's value rather than just its weight. For art, antiques, pianos, and other high-value belongings, full-value protection is usually the smarter choice. Your coordinator can walk you through both options so you can pick what fits your move.",
      },
      {
        q: "What happens if something gets damaged during my move?",
        a: "First, the odds are in your favor: on long-distance and FF&E moves we document a digital photo and condition inventory at pickup, so the condition of your belongings is recorded before anything moves. If something covered is damaged, contact your coordinator or call us at 212.722.6850 and we'll walk you through the claims process, with the outcome based on the protection option you selected. Because we're a regulated, licensed company that's been around since 1941, you're dealing with a real team that stands behind its work.",
      },
      {
        q: "My building requires a COI before move day. Does it need anything specific for a co-op or freight elevator?",
        a: "Absolutely, and it's one of the most common requests we get in NYC. Co-ops, condos, and commercial buildings often require a COI naming the building, the managing agent, and sometimes the landlord as additional insured, with specific coverage amounts and exact wording, before they'll let movers in or confirm a freight-elevator slot. Just send us your building's requirements as soon as you have them (the managing agent usually provides a sample) and we'll issue the certificate to their exact specifications. Getting this squared away early is the single best way to avoid a delayed or denied elevator reservation on move day.",
      },
    ],
  },
  {
    title: "Choosing a Mover & Smart Moving Tips",
    anchor: "choosing",
    blurb:
      "How to vet a NYC mover, spot red flags, and plan ahead so move day goes smoothly in a co-op or walk-up.",
    items: [
      {
        q: "How do I know if a NYC moving company is actually legit and licensed?",
        a: "Always ask for the mover's license numbers and verify them before you book. A trustworthy interstate mover will have a US DOT and ICC (MC) number you can look up, and a real local outfit will be transparent about its credentials. Scanio, for example, has been a family-owned NYC mover since 1941 and carries NY DOT T11495, US DOT 537054, and ICC MC93512. Beyond the paperwork, look for a real office and phone number, a willingness to do an in-home or virtual survey, and a clear written estimate.",
      },
      {
        q: "What are the biggest red flags I should watch out for when getting moving quotes?",
        a: "A few warning signs are worth taking seriously when you compare quotes:",
        bullets: [
          "A price dramatically lower than everyone else's, given sight unseen — it often balloons into a much higher bill on moving day.",
          "No verifiable license, no physical address, or a company name that keeps changing.",
          "A demand for a large cash deposit upfront; reputable movers don't require big advance payments to hold your date.",
          "A refusal to do an in-home or virtual survey, or to put the estimate in writing.",
        ],
      },
      {
        q: "What questions should I ask a mover before I hire them?",
        a: "A handful of questions quickly separate a real mover from a risky one:",
        bullets: [
          "Are you licensed and insured? Ask for the NY DOT, US DOT, and ICC (MC) numbers and verify them.",
          "Who actually performs the move — your own crews, or subcontractors?",
          "What valuation and protection options do you offer?",
          "On a long-distance move, does my shipment stay under your management the whole way, or get handed to another carrier? (With Scanio it stays with us, and you get a digital photo and condition inventory at pickup.)",
          "Do you handle COIs and elevator coordination for my type of building?",
        ],
      },
      {
        q: "What are the main dos and don'ts for a smooth NYC move?",
        a: "A few habits make all the difference in the city:",
        bullets: [
          "Do book early — especially end-of-month and summer dates.",
          "Do notify your building right away so you can reserve the elevator and get the COI squared away.",
          "Do declutter before you pack, label boxes by room, and keep valuables, documents, and a first-night bag with you.",
          "Don't leave parking to chance — narrow one-way streets and no loading zones can derail a move.",
          "Don't pay a large cash deposit or sign an estimate you don't fully understand.",
        ],
      },
      {
        q: "Can you give me a timeline or checklist for planning my move?",
        a: "Here's a simple timeline you can adapt to your own move:",
        steps: [
          "6–8 weeks out: get free estimates, book your mover, and start decluttering.",
          "4 weeks out: request your building's COI and elevator or loading-dock reservation, file your change of address, and begin packing non-essentials.",
          "Final week: confirm details with your coordinator, pack a first-night essentials box, and label everything by room.",
          "Moving day: keep your phone, keys, documents, and valuables with you, and do a final walkthrough before the crew leaves.",
        ],
      },
      {
        q: "Any tips for making move day go smoothly in a co-op or walk-up?",
        a: "The two things that trip up most NYC moves are building paperwork and the street, so handle both early. Get your COI to building management ahead of time, confirm your elevator or freight-entrance window, and check whether your co-op has restricted moving hours or padding requirements. For walk-ups and narrow blocks, think about where the truck can legally park and how long the carry is, and let your mover know in advance so the crew comes prepared. Scanio coordinates COIs, building access, and the logistics of tight streets and walk-ups every day, so loop us in early.",
      },
    ],
  },
  {
    title: "People We Work With",
    anchor: "partners",
    blurb:
      "The boards, building managers, designers, and repeat clients who rely on Scanio across the city.",
    items: [
      {
        q: "Do you work with co-op and condo boards or building managers?",
        a: "Yes — a large share of our work in NYC comes through co-op and condo boards, managing agents, and building staff who know we'll show up with the right COI, respect the building's rules and elevator windows, and leave the common areas as we found them. If you manage a building and want a mover you can recommend to residents with confidence, reach out and we'll make the process easy. Call 212.722.6850 or email info@scaniomoving.com.",
      },
      {
        q: "I'm an interior designer or architect. Can Scanio handle receiving and installation for my projects?",
        a: "Absolutely. We partner with designers and architects across the city through our FF&E and designer services — receiving and inspecting pieces at our warehouse, holding them in climate-controlled staging, and delivering and installing on your schedule with a dedicated project manager. It keeps your job site clear and your timeline tight, and it's one of the relationships we value most.",
      },
      {
        q: "Can we set up an ongoing relationship rather than a one-off move?",
        a: "Yes. We work with boards, building managers, designers, and repeat clients on an ongoing basis, and we're glad to set up an arrangement that fits how you work. The best next step is a quick conversation — contact us at 212.722.6850 or info@scaniomoving.com and we'll tailor something that makes sense.",
      },
      {
        q: "I'd like to recommend Scanio to friends and neighbors. Can I send them your way?",
        a: "Please do — it means a great deal to us. After more than 80 years moving New Yorkers, much of our work still comes from word of mouth and repeat clients, which is the part we're proudest of. Have them mention you when they call, and feel free to reach out to your coordinator if you'd like to talk it through.",
      },
    ],
  },
];

export const FAQ_GLOSSARY: GlossaryTerm[] = [
  { term: "Accessorial Services", definition: "Additional services beyond basic transport, such as packing and unpacking or making extra stops between the old and new homes." },
  { term: "Advance Charges", definition: "Charges added when a third party is brought in to complete the job — for example, hiring an electrician to safely disconnect an appliance." },
  { term: "Bill of Lading", definition: "The itemized contract between you and the mover listing the services provided during your move. It also serves as your receipt and record for the job." },
  { term: "Binding vs. Non-Binding Estimate", definition: "A binding estimate is a flat rate for the listed services regardless of how long the job takes; a non-binding estimate is the mover's best projection and can change with the actual work or weight. We'll tell you which yours is." },
  { term: "Bulky Item", definition: "An item that doesn't fit neatly into a box — a TV, bicycle, or similar — which may require special handling or added charges." },
  { term: "Carrier", definition: "A moving company registered and authorized to provide relocation services." },
  { term: "Claim", definition: "The document you file if items are damaged or delayed while in the moving company's care." },
  { term: "COD (Cash on Delivery)", definition: "Funds paid to the moving company upon successful delivery of your belongings." },
  { term: "COI (Certificate of Insurance)", definition: "Proof of the mover's insurance that NYC buildings require before move day, naming the building (and often the managing agent) as additional insured. We prepare and submit it to your building's exact spec." },
  { term: "Consignee", definition: "The party responsible for releasing belongings to the mover at the origin and accepting them at the destination." },
  { term: "Custom Crating", definition: "A made-to-fit wooden crate built around a fragile, oversized, or high-value item such as fine art, a sculpture, or a chandelier — the strongest protection for pieces a standard box can't safeguard." },
  { term: "Door-to-Door Service", definition: "Transportation of your belongings directly from the origin to the destination, not counting any additional stops along the way." },
  { term: "DOT", definition: "The U.S. Department of Transportation, the federal agency that regulates movers. Scanio holds NY DOT T11495 and US DOT 537054." },
  { term: "Elevator Reservation", definition: "A booked time window for a building's service or freight elevator on move day, often required (sometimes with a deposit) by NYC buildings. We help coordinate it." },
  { term: "FF&E (Furniture, Fixtures & Equipment)", definition: "The furnishings and equipment going into a designed or commercial space. Our FF&E service covers receiving, inspection, climate-controlled staging, delivery, and installation." },
  { term: "Flight Charge", definition: "A charge that may apply for carrying items up or down flights of stairs, most common in walk-up buildings without an elevator." },
  { term: "Full-Service Mover", definition: "A company that handles every part of the move — packing, loading, transport, unloading, and unpacking." },
  { term: "Full-Value Protection", definition: "A liability option under which the mover is responsible for the repair, replacement, or value of any covered item that's lost or damaged — broader than the standard weight-based coverage." },
  { term: "Fuel Surcharge", definition: "A charge on long-distance moves to help cover mileage, based on a national fuel average that fluctuates over time." },
  { term: "High-Value Article", definition: "An item generally valued at more than $100 per pound. These should be listed up front and often warrant added protection." },
  { term: "Inventory", definition: "A detailed list of your belongings and their condition before the move. On long-distance moves we provide a digital photo and condition inventory at pickup." },
  { term: "Interstate / Intrastate Move", definition: "Interstate means moving from one state to another; intrastate means moving within a single state." },
  { term: "Long Carry", definition: "An added charge when belongings must be carried an unusually long distance between the truck and the door — common when parking is far from the entrance." },
  { term: "Non-Allowables", definition: "Items movers are prohibited by law from transporting, such as flammables, corrosives, explosives, and certain chemicals." },
  { term: "PBO (Packed By Owner)", definition: "A notation for boxes packed by the customer rather than the mover." },
  { term: "Shuttle (Shuttle Transfer)", definition: "A smaller vehicle used to ferry belongings when a full-size truck can't reach the door — common on narrow NYC streets. We arrange it when needed." },
  { term: "Storage-in-Transit (SIT)", definition: "Temporary storage of your shipment at the warehouse when you're not ready for delivery, such as a gap between closing dates. It stays under Scanio's management until you're ready." },
  { term: "Temperature-Controlled Storage", definition: "Warehouse storage kept within a steady climate range to protect wood furniture, artwork, and electronics. Our Secaucus, NJ warehouse is temperature-controlled and monitored 24/7." },
  { term: "Valuation", definition: "Your declared value of the goods being moved, which sets the mover's maximum liability. It isn't the same as insurance, but it's how your shipment's protection is calculated." },
  { term: "Weight Ticket", definition: "The receipt from weighing the loaded truck at a certified scale. On weight-based moves, your charges are figured from it." },
];
