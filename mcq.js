// Multiple Choice questions — preserved verbatim from Ch7 Practice MCQ slide
// and Property II S2026 Practice Quiz Packet #1 (Chapters 7 & 8).
// "answer" = zero-indexed correct option. "rationale" = short model explanation.
// ⚠️ Model answers are author's best reasoned answer; verify with Prof. Malagrinò.
window.MCQ_QUESTIONS = [
{
  id: "Ch7-MCQ-L1",
  category: "Ch 7 — Subleases/Assignments",
  question: "A landlord leased an apartment to a tenant by written lease for two years ending on the last day of a recent month. The lease provided for $700 monthly rental. The tenant occupied the apartment and paid the rent for the first 15 months of the lease term, until he moved to a new job in another city. Without consulting the landlord, the tenant moved a friend into the apartment and signed an informal writing transferring to the friend his \"lease rights\" for the remaining nine months of the lease. The friend made the next four monthly $700 rental payments to the landlord. For the final five months of the lease term, no rent was paid by anyone, and the friend moved out with three months left on the lease term. The landlord was on an extended trip abroad, and did not learn of the defaults and the vacancy until last week. The landlord sued the tenant and the friend, jointly and severally, for $3,500 for the last five months' rent. What is the likely outcome of the lawsuit?",
  options: [
    "Both the tenant and the friend are liable for the full $3,500, because the tenant is liable on privity of contract and the friend is liable on privity of estate as assignee.",
    "The tenant is liable for $3,500 on privity of contract and the friend is not liable, because a sublessee does not have personal liability to the original landlord.",
    "The friend is liable for $1,400 on privity of estate, which lasted only until he vacated, and the tenant is liable for $2,100 on privity of contract and estate for the period after the friend vacated.",
    "The friend is liable for $3,500 on privity of estate and the tenant is not liable, because the landlord's failure to object to the friend's payment of rent relieved the tenant of liability."
  ],
  answer: 0,
  rationale: "Transferring all remaining 9 months = complete assignment, not a sublease. The tenant remains liable on privity of contract for the full term; the friend, as assignee, is in privity of estate while holding the leasehold. Most courts hold an assignee liable for rent accrued during the period of privity of estate (here, through the friend's vacating), with the original tenant always jointly liable on K. Answer (A) reflects the common majority framing; note that (C) more precisely allocates the friend's exposure to the 2 unpaid months before vacating — confirm your professor's preferred answer."
},
{
  id: "Packet1-Q1",
  category: "Ch 7 — Leasehold Estates",
  question: "L and T orally agree that T will lease Grayacre from L for two years, with rent to be paid on a monthly basis. What estate does T have?",
  options: [
    "A term of years with a two-year term.",
    "A periodic tenancy with a two-year period.",
    "A periodic tenancy with a one-month period.",
    "A tenancy at will.",
    "None of the above statements is true."
  ],
  answer: 2,
  rationale: "A 2-year oral lease violates the Statute of Frauds. Payment and acceptance of monthly rent under the invalid lease creates a month-to-month periodic tenancy."
},
{
  id: "Packet1-Q2",
  category: "Ch 7 — Tenancy at Will",
  question: "L owns Orangeacre in fee simple. Orangeacre is a dismal swamp miles from the nearest road. T asks if he can use the land for hunting. L and T sign a handwritten lease stating, \"L leases Orangeacre to T for so long as we want the lease to continue.\" T paid L $50 to use the land. Years later, the area begins to develop, and L wants the land back. T refuses, saying the lease continues until they both want it to end. Can L recover Orangeacre?",
  options: [
    "Yes, because this is a tenancy at will, which either L or T can end the tenancy.",
    "Yes, because this is a periodic tenancy determinable, which L can end the tenancy.",
    "No because this is a tenancy at will, which only ends when both agree to end the tenancy.",
    "No because this is a life estate.",
    "None of the above answers is correct."
  ],
  answer: 0,
  rationale: "A tenancy terminable 'at will' is construed as a true tenancy at will, terminable by either party (Garner v. Gerrish line of cases notwithstanding, the default at common law is mutual terminability)."
},
{
  id: "Packet1-Q3",
  category: "Ch 7 — Delivery of Possession",
  question: "L agrees to lease Greenacre to T. Unbeknownst to either L or T, X has recently moved onto Greenacre as an adverse possessor. T cannot get X to leave voluntarily, and the statute of limitations is soon to run out. What are T's possible remedies prior to the statute running?",
  options: [
    "If the jurisdiction follows the American rule regarding transfer of possession, T can sue to eject X or seek damages against L.",
    "If the jurisdiction follows the English rule, T can sue to eject X or seek damages against L.",
    "If the jurisdiction follows the English rule, T can only sue to eject X.",
    "If the jurisdiction follows the American rule, T can withhold rent.",
    "None of the above answers is correct."
  ],
  answer: 1,
  rationale: "Under the English rule (Hannan v. Dusch minority), the landlord must deliver actual possession; T can sue L for damages or sue X to eject. Under the American rule, L owes only legal possession."
},
{
  id: "Packet1-Q4",
  category: "Ch 7 — Self-Help",
  question: "L leases Whiteacre to T for a one-year term. T is destructive and causes substantial damage to Whiteacre. L wants to evict T, but does not want to go to court. How would you advise L?",
  options: [
    "L can remove by force.",
    "L can remove T's belongings, but can only remove T if there is no reasonable likelihood that T will be hurt.",
    "L might have a theoretical right to self-help provided that it is done \"peaceably,\" but should go to court, nonetheless.",
    "L cannot remove T at all.",
    "None of the above statements is true."
  ],
  answer: 2,
  rationale: "Berg v. Wiley — common-law self-help is nominally 'peaceable' only, and modern courts strongly disfavor it. Safer course is summary-process eviction."
},
{
  id: "Packet1-Q5",
  category: "Ch 7 — Abandonment / Mitigation",
  question: "L leases Blackacre to T for a two-year term, with $1000 rent to be paid at the beginning of each month. Six months later, T moves off Blackacre and ceases paying rent. Immediately thereafter X says to L, \"I'll rent Blackacre for $500 per month.\" L refuses, saying T is responsible for Blackacre. At the end of the two-year term, L sues T for $18,000 in unpaid back rent. What result?",
  options: [
    "T must pay the full amount of unpaid back rent.",
    "T likely must pay some amount, but does not have to pay the full amount.",
    "T must pay one-month rent because he terminated the lease without sufficient notice.",
    "T must pay six-month rent because he terminated the lease without sufficient notice.",
    "T must pay one-year rent because he terminated the lease without sufficient notice.",
    "(b) and (c) are both correct.",
    "(b) and (d) are both correct.",
    "(b) and (e) are both correct.",
    "None of the above answers is correct."
  ],
  answer: 1,
  rationale: "Sommer v. Kridel — modern majority requires the landlord to mitigate. L's refusal of a reasonable replacement tenant reduces recoverable damages, but does not eliminate them."
},
{
  id: "Packet1-Q6",
  category: "Ch 7 — Assignment + Novation + Sublease",
  question: "L leases Brownacre to T for five years. T assigns his lease to U with assumption. L permits the assignment and grants a novation. U then sublets to V for six months. V damages the property. From whom can L recover for the damages?",
  options: ["V only.","U only.","T only.","U and V only.","U and T only.","V and T only.","V, U, and T.","None of the above answers is correct."],
  answer: 1,
  rationale: "Novation releases T. U is now in privity of K (by assumption) and privity of E with L. V is a sublessee with no direct privity to L. L must look to U."
},
{
  id: "Packet1-Q7",
  category: "Ch 7 — Landlord Consent to Assignment",
  question: "L leases Orangeacre, a residential property, to T for twenty years with rent to be paid each year. The lease provides that T shall not assign without L's consent. Five years into the lease, T wishes to assign to X. X is more financially stable than T and there is every indication that X will be a better tenant. L refuses to consent because X is an immigrant. Can T force L's consent?",
  options: [
    "Yes, because T has an absolute right to assign.",
    "Yes, because L's refusal is a violation of the Fair Housing Act.",
    "Yes, because L's refusal is unreasonable and not in good faith.",
    "No, because L's refusal is reasonable.",
    "No, because L has an absolute right to refuse a residential assignment.",
    "None of the above statements is true."
  ],
  answer: 1,
  rationale: "National origin is a protected class under the Fair Housing Act (42 U.S.C. § 3604). Refusal on that basis is unlawful. Kendall v. Pestana's 'commercial reasonableness' rule would also bar the refusal, but the FHA is the clearer and stronger ground here."
},
{
  id: "Packet1-Q8",
  category: "Ch 7 — Privity Analysis",
  question: "L leases Greenacre to T for one year. After nine months, T wants out of the lease, while Z wants to rent Greenacre. L, T, and Z agree that Z can take over the lease. They all sign a document: \"T subleases Greenacre to Z. Z assumes all of T's rights and responsibilities under the original lease. Lease grants a novation to T.\" What transaction has taken place and what privities exist?",
  options: [
    "A sublease, with privity of contract and privity of estate between all parties.",
    "A sublease, with privity of estate between all parties, and privity of contract between L and T and between T and Z.",
    "An assignment, with privity of contract and privity of estate between all parties.",
    "An assignment, with privity of contract and privity of estate between L and Z.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "Transfer of entire remaining term + novation = effectively an assignment releasing T. Z is in privity of K (by assumption) and privity of E with L."
},
{
  id: "Packet1-Q9",
  category: "Ch 7 — Quiet Enjoyment / Constructive Eviction",
  question: "L leases Pinkacre, an office building, to T. L promises to make all necessary repairs except for damage recklessly caused by T. Pinkacre's structure is substantially damaged by an earthquake. T repeatedly requests that L repair Pinkacre, but L refuses. Three months later, Pinkacre's foundation cracks, and the fire department orders it condemned. L insists that T must continue paying rent while Pinkacre is repaired. Must T pay rent?",
  options: [
    "No, because T was constructively evicted.",
    "No, because T was actually evicted.",
    "Yes, because L was not responsible for the damage.",
    "Yes, because the lease did not say T is excused from rent during repairs.",
    "None of the above answers is correct."
  ],
  answer: 0,
  rationale: "L's breach of the repair covenant rendered the premises uninhabitable/condemned — classic constructive eviction, which suspends rent upon T's surrender."
},
{
  id: "Packet1-Q10",
  category: "Ch 7 — Waste",
  question: "L leases Blackacre, a forty-acre, botanical garden, to T for five years. Without L's permission, T bulldozes Blackacre and converts it into a trailer park. Surprisingly, the trailer park is a huge success, and Blackacre's value increases. Is T liable to L?",
  options: [
    "No, because Blackacre's value did not decrease.",
    "No, because T did not promise to preserve Blackacre's condition.",
    "Yes, because the change affects a vital and substantial portion of the premises.",
    "Yes, because T did not reasonably expect Blackacre's value to increase.",
    "None of the above statements is true."
  ],
  answer: 2,
  rationale: "Ameliorative waste — at common law, a substantial change to the character of the premises is actionable waste regardless of value increase."
},
{
  id: "Packet1-Q11",
  category: "Ch 7 — Duty to Repair",
  question: "At common law, L leases Whiteacre to T for ten years. Whiteacre is an eighty-acre farm with a barn and a house. The barn is struck by lightning and severely damaged. Must T repair the barn?",
  options: [
    "No, because of the implied warranty of habitability.",
    "No, because the duty to repair does not apply here.",
    "No, because L must make all repairs at common law.",
    "Yes, because T has a duty to repair.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "At common law, the tenant in possession bears the duty to make ordinary repairs and to avoid permissive waste. IWH generally does not apply to farms/commercial leases."
},
{
  id: "Packet1-Q12",
  category: "Ch 7 — Holdover / Periodic Tenancy",
  question: "L leases Greenacre to T for one year, with rent to be paid monthly. T pays rent and does not damage the premises. At the end of the year, T remains in possession on Greenacre and continues to pay rent monthly. L continues to accept monthly rent and never objects to T's continued possession. What estate now exists?",
  options: [
    "A term of years for one year.",
    "A tenancy at sufferance.",
    "A periodic tenancy with one-year periods.",
    "A periodic tenancy with one-month periods.",
    "A tenancy at will.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "L's acceptance of monthly rent from a holdover typically creates a month-to-month periodic tenancy (majority rule)."
},
{
  id: "Packet1-Q13",
  category: "Ch 8 — Brokers / UPL",
  question: "A is a real estate broker, and is not licensed to practice law. B wants to sell his house to C. B and C go to A, who prepares a form sale contract for B and C. A also conducts a title search on the house. Are A's actions legal?",
  options: [
    "Yes, as long as A did not give legal advice.",
    "No, A cannot do these things because it would be the illegal practice of law.",
    "A can conduct title searches, but cannot prepare contracts.",
    "A can prepare contracts, but cannot perform title searches.",
    "None of the above statements is true."
  ],
  answer: 0,
  rationale: "Most jurisdictions permit brokers to fill in standard-form contracts and conduct non-advisory title searches, so long as they do not give legal advice (New Jersey State Bar Assn. v. N.J. Assn. of Realtor Boards line)."
},
{
  id: "Packet1-Q14",
  category: "Ch 8 — Broker Commission",
  question: "A is real estate broker. A agrees to help B sell his house. A finds a buyer, C. B and C sign a contract of sale, but C then fails to qualify for the necessary loan and backs out of the sale. Is A entitled to a commission?",
  options: [
    "Yes, because A arranged a sales contract for B.",
    "Yes, but B is entitled to a refund if he does not find another buyer.",
    "Yes, if A reasonably believed that C would qualify for the loan.",
    "No, unless C had enough assets to self-finance the house regardless of the home loan.",
    "None of the above answers is correct."
  ],
  answer: 4,
  rationale: "Modern majority (Ellsworth Dobbs v. Johnson): commission conditioned on closing; if the buyer is financially unable and the deal fails, no commission. None of (a)–(d) states this cleanly."
},
{
  id: "Packet1-Q15",
  category: "Ch 8 — Marketable Title",
  question: "O contracts to sell Blackacre to A. A agrees to take title subject to all restrictions and encumbrances. There is a public easement through Blackacre. The path is paved and has signs stating \"public trail.\" A seeks to escape the contract due to the easement. What result?",
  options: [
    "A wins because title to Blackacre is unmarketable.",
    "A wins because the contract violates public policy.",
    "O wins because an easement does not make title unmarketable.",
    "O wins because the easement was open and obvious.",
    "None of the above statements is true."
  ],
  answer: 3,
  rationale: "A took subject to 'all restrictions and encumbrances,' and the easement was visible and obvious — buyer is charged with inquiry notice and cannot escape."
},
{
  id: "Packet1-Q16",
  category: "Ch 8 — Marketable Title",
  question: "O contracts to sell Whiteacre to B. Whiteacre is a landlocked parcel with no ingress/egress. B believes that he can purchase an easement from neighbors. B is unsuccessful, and seeks to rescind the contract. What result?",
  options: [
    "B wins because title to Whiteacre is unmarketable.",
    "B wins because Whiteacre is worthless and the contract lacks consideration.",
    "O wins because B had actual knowledge of the encumbrance.",
    "O wins because title to Whiteacre is marketable regardless that Whiteacre is landlocked.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "Marketability is a title concept, not a physical-access concept. A landlocked parcel can still have marketable title."
},
{
  id: "Packet1-Q17",
  category: "Ch 8 — Marketable Title / Adverse Possession",
  question: "O owns Greenacre in fee simple. X takes adverse possession of Greenacre, and remains in possession for the statutory period. O then contracts to sell Greenacre to C. According to the registered records of Greenacre, O has marketable title. C learns of X's adverse possession, and seeks to escape the contract. What result?",
  options: [
    "C wins because O does not have marketable title.",
    "C wins because O is estopped from challenging X's title.",
    "O wins because he has marketable title of record.",
    "O wins because X cannot acquire marketable title by adverse possession.",
    "None of the above answers is correct."
  ],
  answer: 0,
  rationale: "Once X has run the statute, X — not O — owns the parcel in equity; O's 'title of record' is merely paper title. Majority rule: unrecorded adverse-possession title renders a seller's title unmarketable."
},
{
  id: "Packet1-Q18",
  category: "Ch 8 — Equitable Conversion",
  question: "O contracts to sell Brownacre to A for $500,000. Before performance, O dies. His will leaves all personal property to Y and all real property to Z. Who gets what?",
  options: [
    "Z owns Brownacre because the contract is voided by O's death.",
    "Z owns Brownacre, but must transfer it to A; A must pay Y $500,000.",
    "Z owns Brownacre, but must transfer it to A; A owes Z $500,000, but Z must transfer this $500,000 to Y.",
    "A owns Brownacre, and must pay Y and Z each $250,000.",
    "None of the above answers is correct."
  ],
  answer: 1,
  rationale: "Equitable conversion: from the moment of contract, seller holds land for buyer (real→personal re-characterization for seller). A gets the land; the purchase money is personalty and passes to Y."
},
{
  id: "Packet1-Q19",
  category: "Ch 8 — Equitable Conversion / Risk of Loss",
  question: "O contracts to sell Yellowacre, a single family residence, to B for $400,000. O maintains a $125,000 fire insurance policy on Yellowacre. Two days before closing, a fire rages through the city, burning Yellowacre. The remaining lot is worth $250,000. B wants to cancel the contract. What result?",
  options: [
    "B may cancel the contract because of the implied warranty of habitability.",
    "B must purchase Yellowacre for $400,000, but he is entitled to the insurance money by equitable conversion.",
    "B must purchase Yellowacre, but the price is reduced to $250,000 by equitable conversion.",
    "B must purchase Yellowacre for $375,000 by equitable conversion.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "Majority: risk of loss on buyer post-contract; but seller holds insurance proceeds in constructive trust for buyer. Price $400,000 − insurance $125,000 abatement = $275,000 net to seller ($375,000 from buyer including proceeds credit is how (d) frames it). Verify professor's arithmetic convention."
},
{
  id: "Packet1-Q20",
  category: "Ch 8 — Duty to Disclose",
  question: "O contracts to sell Pinkacre to W for $300,000. A state statute requires the seller of real property to disclose any known or reasonably discoverable defects in the property. There is a dangerous sinkhole under Pinkacre. O does not know of the sinkhole. O could discover the sinkhole by digging an eight-foot hole in the ground. If O sells Pinkacre without disclosing the sinkhole, is he liable?",
  options: [
    "Yes because O could reasonably discover the sinkhole.",
    "Yes because O is under a common law duty to disclose all defects.",
    "No because O did not know of, nor could O reasonably have discovered, the sinkhole.",
    "No, but W can rescind the contract on mistake of fact.",
    "None of the above answers is correct."
  ],
  answer: 2,
  rationale: "Digging an eight-foot exploratory hole is not 'reasonably discoverable.' Johnson v. Davis / Stambovsky line require disclosure only of known or readily discoverable defects."
},
{
  id: "Packet1-Q21",
  category: "Ch 8 — Deed Covenants / SoL",
  question: "O sells Blackacre to A, conveying a general warranty deed. Fifteen years later, A discovers that O did not have title to Blackacre. No one has actually tried to eject A. A sues to collect damages. The state has a ten-year statute of limitations on present covenants. On what covenants, if any, may A recover?",
  options: [
    "Seisin, right to convey, general warranty, and quiet enjoyment.",
    "General warranty and quiet enjoyment.",
    "Further assurances.",
    "Further assurances, general warranty, and quiet enjoyment.",
    "None of the above statements is true."
  ],
  answer: 4,
  rationale: "Present covenants (seisin, right to convey, against encumbrances) ran at delivery and are SoL-barred. Future covenants (warranty, quiet enjoyment, further assurances) require actual or constructive eviction — none has occurred. A recovers on nothing."
},
{
  id: "Packet1-Q22",
  category: "Ch 8 — Estoppel by Deed / Further Assurances",
  question: "O sells Whiteacre to B, but does not execute a valid deed. B then sells Whiteacre to C, conveying a general warranty deed. Later, O realizes that he never conveyed a proper deed, and promptly conveys a quitclaim deed to B. C learns of this, and demands another deed from B. Must B deliver the deed?",
  options: [
    "Yes because of the covenants of right to convey and seisin.",
    "Yes because of the covenant of further assurances.",
    "No because B was not responsible for the defect.",
    "No because C does not have title to Whiteacre.",
    "None of the above answers is correct."
  ],
  answer: 1,
  rationale: "Further-assurances covenant obligates the grantor to execute further documents necessary to perfect the grantee's title. (Also estoppel by deed auto-passes after-acquired title, but C is entitled to documentation.)"
},
{
  id: "Packet1-Q23",
  category: "Ch 8 — Estoppel by Deed",
  question: "Same facts as in (22) above, except that C never demanded a second deed from B. B sues to eject C, claiming that C does not have title to Whiteacre. What result?",
  options: [
    "B wins, but C can recover the value of Whiteacre by the covenants of right to convey and seisin.",
    "B wins, but C can recover the value of Whiteacre by the covenants of right to convey and seisin, as well as legal costs by the covenants of general warranty and quiet enjoyment.",
    "C wins, but only if he files a counterclaim under the covenant of further assurances.",
    "C wins by estoppel by deed and/or by the covenant of further assurances.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "Estoppel by deed: B's after-acquired title inures automatically to C."
},
{
  id: "Packet1-Q24",
  category: "Ch 8 — Covenant of Warranty",
  question: "O sells Greenacre to D. Immediately thereafter, E sues to eject D. E does not have a valid claim, and D gets the lawsuit dismissed. D then seeks to collect his legal costs and fees from O. Can D recover?",
  options: [
    "Yes because of the covenants of general warranty and quiet enjoyment.",
    "Yes because of the covenants of general warranty, quiet enjoyment, and further assurances.",
    "No because E's claim was not lawful.",
    "No, unless D demanded that O defend the lawsuit.",
    "None of the above answers is correct."
  ],
  answer: 2,
  rationale: "The covenant of warranty is breached only by lawful/superior claims. An invalid claim by a stranger does not trigger the covenant."
},
{
  id: "Packet1-Q25",
  category: "Ch 8 — Deed Delivery",
  question: "O, the owner of Brownacre, wants X to have Brownacre when O dies. O executes a typed deed giving Brownacre to X. O does not deliver the deed, but instead places it with his personal papers, figuring that X will find it on his death. Will X receive title to Brownacre?",
  options: [
    "Yes because manual deliver of the deed is not necessary.",
    "Yes because O gave X a future interest in Brownacre.",
    "No because a deed must give an immediate possessory interest.",
    "No, unless the deed meets all the requirements of a will.",
    "None of the above answers is correct."
  ],
  answer: 3,
  rationale: "Rosengrant v. Rosengrant — no delivery, no effective deed. To transfer at death, the instrument must satisfy the formalities of a will."
},
{
  id: "Packet1-Q26",
  category: "Ch 8 — Mortgage / Foreclosure",
  question: "Z, the owner of Greyacre, executes a mortgage with Bank. Several years later, when the outstanding debt is $100,000, Z defaults on the mortgage. Bank conducts a private foreclosure sale. Bank negligently, but in good faith, fails to adequately advertise the sale. Bank sells Greyacre for $150,000, and pays Z $50,000. Greyacre had a fair market value of $400,000. Bank could have received $300,000 had the sale been properly advertised. Is Z entitled to damages, and if so, in what amount?",
  options: [
    "Yes, $150,000 — the difference between the sale price and the fair price.",
    "Yes, $250,000 — the difference between the sale price and the fair market value.",
    "No because the bank acted in good faith.",
    "No because a mortgagor is not entitled to more than the excess sales price above the outstanding debt.",
    "None of the above answers is correct."
  ],
  answer: 0,
  rationale: "Murphy v. Financial Dev. Corp. — mortgagee owes a duty of due diligence; Z recovers the difference between the actual sale price and the price that would have been obtained with proper advertising ($300k − $150k = $150k)."
},
{
  id: "Packet1-Q27",
  category: "Ch 8 — Quitclaim Deed",
  question: "A executes a quitclaim deed granting Purpleacre to Z. Z pays A $100 for this deed. Z moves onto Purpleacre. O, the lawful owner of Purpleacre, ejects Z. Can Z recover from A?",
  options: [
    "Yes because A breached the covenants of right to convey and seisin.",
    "Yes because the contract lacked adequate consideration.",
    "No, unless A fraudulently represented that he owned Purpleacre.",
    "No, unless Z's title was actually superior to O's.",
    "None of the above answers is correct."
  ],
  answer: 2,
  rationale: "A quitclaim deed conveys only whatever interest (if any) A holds — no title covenants run. Recovery only for fraud."
}
];
