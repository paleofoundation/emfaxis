/** Interpretive reading material drawn from the site's existing selected sources. */
export const guideDepth: Record<string, { title: string; text: string; refs?: string[] }[]> = {
  basics: [
    {
      title: 'Follow the exposure all the way through the claim',
      text: 'A useful research claim keeps its exposure attached. Residential magnetic fields, a phone used for calls, and a controlled radiofrequency experiment are different starting points, even when a headline calls all of them EMF. Follow the source through the rest of the sentence: who encountered it, how exposure was estimated, and what outcome was recorded. The power-line studies concern childhood leukemia and residential exposure estimates. The phone cohorts concern reported phone use and later brain tumors. Neither becomes a finding about every electrical device simply because the same umbrella term appears in its description.',
      refs: ['ahlbom', 'cosmos', 'million-women']
    },
    {
      title: 'Build an evidence chain without skipping a step',
      text: 'The sperm experiment, sleep experiment, and cancer cohorts illustrate why the endpoint matters as much as the signal. A change in isolated sperm cells concerns that laboratory system. A change in a sleep EEG feature concerns a physiological measurement in the volunteers studied. A later cancer diagnosis is a disease outcome recorded during follow-up. Connecting these observations requires evidence about how one step leads to another under relevant exposure conditions. Reading them side by side can identify useful research questions, but it cannot supply the missing steps or turn every measurable response into an injury.',
      refs: ['de-iuliis', 'de-iuliis-correction', '5g-sleep', 'cosmos']
    },
    {
      title: 'Read a finding and its limits as one statement',
      text: 'A result becomes more useful when its qualification stays beside it. The phone cohorts did not show increased brain-tumor risk under the conditions studied; their exposure measures and follow-up still limit broader conclusions. The pooled residential-field analyses reported an association with childhood leukemia; observational design and possible bias still limit a causal explanation. These qualifications do not cancel the findings. They define what each finding can answer. Before choosing a reassuring or alarming headline, try stating the outcome, exposure, study design, and main limitation together. That sentence is usually a better guide to the evidence.',
      refs: ['cosmos', 'million-women', 'ahlbom', 'greenland']
    }
  ],
  wireless: [
    {
      title: 'Why the cohort and case-control results need each other',
      text: 'The prospective cohorts and INTERPHONE approached the question from different directions. COSMOS and the Million Women Study followed reported phone use forward to later diagnoses. INTERPHONE compared people with and without brain tumors using recalled use. The highest-use finding in INTERPHONE deserves attention alongside its recall and participation problems, while the cohort findings deserve attention alongside their imperfect exposure measures. A useful comparison asks whether the populations, use categories, and outcomes match before deciding that the studies agree or disagree. Selecting only the most reassuring cohort sentence or the most concerning subgroup would discard information needed to interpret both.',
      refs: ['cosmos', 'million-women', 'interphone']
    },
    {
      title: 'A phone-use measure is not a universal wireless dose',
      text: 'Call time and reported phone use help organize an epidemiological comparison, but they are not interchangeable with a measured absorbed dose. The distinction matters when a reader moves from a study of phone users to a question about a router, a wearable, or another wireless technology. Distance, transmitted power, frequency, and use conditions affect the exposure being discussed. The existing phone studies therefore provide evidence about their particular comparisons, rather than a common numerical verdict for every wireless source. Keep the original exposure description visible when following a result into a different page or everyday question.',
      refs: ['cosmos', 'million-women', 'interphone', 'icnirp']
    },
    {
      title: 'Keep animal hazard findings beside their translation limits',
      text: 'The NTP and Ramazzini experiments add a different kind of evidence to the phone discussion. Their rat tumor findings can motivate investigation of a possible hazard, but their exposure schedules, whole-body conditions, species, and endpoints differ from the human phone-use studies. They should therefore be read in a separate evidence stream, with the relevant conditions attached. The human and animal records do not need to be forced into a single positive-or-negative tally. The more useful question is what each design contributes, where their findings overlap, and which comparisons would be needed before estimating risk from an everyday exposure.',
      refs: ['ntp-rats', 'ramazzini', 'cosmos']
    }
  ],
  'power-lines': [
    {
      title: 'Three exposure descriptions, three different comparisons',
      text: 'The power-line literature here uses residential magnetic-field estimates, wiring-based proxies, and distance from a birth address to a line. These descriptions can sound like versions of the same measurement, but they do not identify the same exposure with the same precision. Ahlbom and Greenland organized evidence around magnetic-field categories, while Draper examined proximity. Read the result using the measure the researchers actually used. An association with an address category does not establish the field inside a particular home, and a meter reading taken today does not recreate the exposure history represented by these studies.',
      refs: ['ahlbom', 'greenland', 'draper']
    },
    {
      title: 'Why two pooled analyses are not two new populations',
      text: 'Pooling brings records from earlier studies into a combined analysis. It can help examine an uncommon exposure category, but the resulting publication does not create new participants. The Ahlbom and Greenland analyses draw on partly overlapping source evidence, so their findings should not be counted as entirely independent replications. Their differences in exposure categories and included records also matter when comparing estimates. The appropriate reading is that more than one analysis examined an existing observational signal. Establishing how robust that signal is requires attention to the underlying studies and possible explanations, rather than counting the number of publications that report it.',
      refs: ['ahlbom', 'greenland']
    },
    {
      title: 'What the evidence cannot tell you about a particular home',
      text: 'A family considering a property often wants a single distance or meter value that settles the question. The studies summarized here do not provide that rule. Field strength depends on the installation, electrical load, geometry, and other sources, while the epidemiological categories represent different exposure histories. Even a carefully documented measurement describes physical conditions rather than predicting an individual diagnosis. Keep the practical and scientific questions distinct: establish what was measured and when, then ask how closely it resembles the exposure measure in the research. The remaining uncertainty should stay visible instead of being converted into a universal boundary.',
      refs: ['draper', 'ahlbom', 'greenland']
    }
  ],
  symptoms: [
    {
      title: 'Separate experiencing a symptom from identifying its trigger',
      text: 'A symptom report establishes something important about a person’s experience, but assigning its cause requires another comparison. The provocation studies tested whether symptoms differed during the specified real and sham signals under controlled conditions. Their blinded findings did not support those exposures as the immediate trigger in those tests. That conclusion does not erase the symptoms or supply a diagnosis. It also does not identify expectation as the cause in every participant. Keeping symptom occurrence, exposure attribution, and possible explanations separate allows the research to be discussed accurately while taking the person’s experience seriously.',
      refs: ['eltiti', 'headache']
    },
    {
      title: 'Blinded provocation and memory follow-up answer different questions',
      text: 'The symptom trials compared short-term responses during real and sham exposure. HERMES instead followed adolescents and related estimated brain dose to changes in memory performance. A laboratory symptom result cannot settle a question about memory change over follow-up, and an observational memory association cannot show that a particular signal immediately caused someone’s headache. The outcomes, timescales, and exposure measures differ. Reading these studies together is useful when those distinctions remain explicit: one tests a proposed acute trigger, while the other examines an association that remains subject to modeled exposure, confounding, and the interpretation of selected analyses.',
      refs: ['eltiti', 'headache', 'hermes']
    },
    {
      title: 'Interpret the whole memory result before the selected analyses',
      text: 'HERMES reported a figural-memory association whose full-sample confidence interval included no difference, while selected analyses suggested an association. Those statements belong together. Focusing only on a selected analysis can make the result sound more settled than the overall record supports; focusing only on the full sample can hide the question the other analyses raised. The study remains an observational comparison using estimated exposure, with residual confounding and subgroup interpretation among its limits. Its useful contribution is a specific question for independent replication, rather than proof of a general cognitive injury from any wireless device.',
      refs: ['hermes']
    }
  ],
  sleep: [
    {
      title: 'Begin with the sleep outcome, not the headline',
      text: 'Sleep research can describe what a person reports, how long they sleep, how their sleep is organized, or a feature of the recorded EEG. The experiment summarized here concerns sleep-spindle frequency after specified exposure before sleep. Its genotype-specific finding should retain that description when it is discussed. Replacing it with the broader phrase sleep damage would introduce a different claim, while treating every physiological change as meaningless would also go beyond the result. The useful question is whether the observed feature is replicated and how it relates to clinical sleep outcomes, which this finding alone does not establish.',
      refs: ['5g-sleep']
    },
    {
      title: 'Check whether the experiment matches your overnight question',
      text: 'An experiment using particular signals before bedtime does not automatically answer a question about an active router throughout the night. The signal, duration, timing, volunteers, and outcome all need to match closely enough for the comparison to be useful. The existing sleep study involved specified mobile-radiofrequency signals and volunteers selected by genotype. It should not be relabeled as a Wi-Fi study or generalized to everyone with insomnia. Keeping those details attached helps distinguish a direct answer from background information, and shows why a study can be relevant to sleep research without settling every everyday sleep concern.',
      refs: ['5g-sleep']
    },
    {
      title: 'Why changing a device can change more than its signal',
      text: 'Switching off or moving a device may also alter alerts, light, late-night activity, or worry. If sleep improves after several of these change together, the experience does not isolate which change mattered. That is why the comparison in a sham-controlled exposure experiment serves a different purpose from an everyday before-and-after observation. The experiment aims to test the specified signal while separating more of the accompanying circumstances. Even then, the conclusion remains tied to the exposure and outcome measured. Neither type of observation should be used to turn an EEG result into a diagnosis or a device habit into a proven RF mechanism.',
      refs: ['5g-sleep']
    }
  ],
  fertility: [
    {
      title: 'Read semen measures and pregnancy outcomes on separate tracks',
      text: 'Rahban examined semen measures alongside reported phone habits, while Hatch examined phone carrying and prospective pregnancy outcomes. These are related reproductive questions, but they are not interchangeable endpoints. A difference in a semen measure does not by itself tell us whether a couple will conceive, and a pregnancy comparison does not explain every possible cellular process. The selected human findings are mixed and use imperfect exposure proxies. Keeping the outcomes separate makes the evidence more informative: it shows what was actually observed, where the designs differ, and why neither paper alone establishes infertility from ordinary phone use.',
      refs: ['rahban', 'hatch']
    },
    {
      title: 'Phone habits do not isolate radiofrequency exposure',
      text: 'Frequency of phone use and the place a phone is carried describe behavior. They do not directly measure the RF dose relevant to an individual reproductive outcome. Rahban’s cross-sectional comparison cannot establish which factor caused the observed semen differences, while Hatch’s carrying measure remains an imprecise exposure proxy. Lifestyle, changing technology, and residual confounding remain part of the interpretation already attached to these records. A reader should therefore keep the behavioral description in the conclusion. Replacing reported phone use with measured radiation dose would make the evidence appear more specific than the studies actually support.',
      refs: ['rahban', 'hatch']
    },
    {
      title: 'Use the corrected cell study for its actual question',
      text: 'The De Iuliis experiment studied purified sperm outside the body under laboratory exposure conditions. Its oxidative-stress and DNA findings can inform a mechanistic research question, but the preparation does not reproduce an intact body or measure conception. The publisher’s correction also belongs with the original report because it changes a figure and clarifies the biological replicates. Reading the corrected record preserves both the finding and its limits. It cannot supply a numerical risk from carrying a phone, establish a treatment for infertility, or demonstrate that an accessory improves reproductive health. Those would require different exposure and clinical outcome evidence.',
      refs: ['de-iuliis', 'de-iuliis-correction']
    }
  ],
  children: [
    {
      title: 'Keep age, exposure, and outcome together',
      text: 'The evidence discussed for children and adolescents covers several distinct questions. MOBI-Kids examined wireless-phone use and brain tumors in young people. HERMES examined memory change and estimated RF brain dose in adolescents. The leukemia analyses concern residential power-frequency magnetic fields. Combining these under a single children-and-EMF verdict would blur both the exposure and the health outcome. A useful reading begins with the specific question and then checks age, use pattern, and follow-up. Evidence from one of these tracks may help frame another question, but it cannot serve as a direct answer simply because young people were studied.',
      refs: ['mobi-kids', 'hermes', 'ahlbom']
    },
    {
      title: 'Understand what the young-person brain-tumor study leaves open',
      text: 'MOBI-Kids did not find evidence of a causal association between the wireless-phone use studied and neuroepithelial brain tumors. Its authors also acknowledged bias and exposure error that limit the ability to exclude a small risk. These are compatible statements: the study’s finding is informative, while its design constrains how far the finding can be extended. It is not a lifetime follow-up beginning in infancy, and it should not be presented as a result for every childhood exposure. Preserving the actual age range, outcome, and limitations gives the reader a more useful answer than an absolute promise or an unsupported warning.',
      refs: ['mobi-kids']
    },
    {
      title: 'Use adult evidence as context with its population attached',
      text: 'The large phone cohorts contribute important evidence about the adults they followed, but their populations are part of the result. The Million Women Study, for example, does not directly answer every question about early-life use or a lifetime of changing technology. HERMES and MOBI-Kids bring younger populations into view, while asking different questions and retaining their own limitations. A sensible comparison does not discard the adult evidence or treat it as universal reassurance. It identifies which aspects of the exposure and outcome are shared, and which differences in age, use, and remaining follow-up prevent a direct transfer of the conclusion.',
      refs: ['million-women', 'cosmos', 'hermes', 'mobi-kids']
    }
  ],
  measurement: [
    {
      title: 'Choose the research comparison before interpreting the reading',
      text: 'A number becomes useful when it is connected to a question. A power-frequency magnetic-field measurement might be compared with a residential-field study only after considering the location, electrical load, and averaging period. It cannot be substituted directly for a phone-use category or an absorbed-dose measure. Likewise, an RF measurement needs a frequency range and signal response appropriate to the source. Begin by identifying the quantity and conditions represented by the research or guidance, then ask whether the instrument reading describes the same thing. Without that match, an apparently precise comparison can answer a different question from the one intended.',
      refs: ['ahlbom', 'cosmos', 'icnirp', 'lf']
    },
    {
      title: 'Do not let a snapshot become an exposure history',
      text: 'A spot reading records conditions at a particular place and time. The residential leukemia studies instead organized participants using exposure estimates intended to represent a different period or context. Device activity, electrical load, and other changing conditions make those descriptions difficult to equate. The same caution applies when a distance from a power line is treated as though it were a measurement inside a home. Documenting the instrument, position, operating conditions, and duration makes a reading more interpretable, but it does not transform that reading into a historical dose or an individual prediction of disease.',
      refs: ['ahlbom', 'greenland', 'draper']
    },
    {
      title: 'Keep guideline comparison separate from a health prediction',
      text: 'A comparison with exposure guidance needs the relevant frequency, quantity, population category, averaging conditions, and measurement method. It is a different exercise from asking whether a particular chronic outcome is associated with an exposure in an observational study. The magnetic-field categories used in the childhood-leukemia analyses were research categories, not demonstrated clinical thresholds. Conversely, a meter reading cannot diagnose harm merely because it is noticeable or differs from another location. Read the physical measurement, the guidance comparison, and the health-evidence question as connected but distinct judgments, each with its own conditions and limits.',
      refs: ['icnirp', 'lf', 'ahlbom', 'greenland']
    }
  ],
  'animal-studies': [
    {
      title: 'Compare the experiments before comparing their conclusions',
      text: 'NTP and Ramazzini both investigated rat tumor outcomes, but their exposures and designs differ. NTP used whole-body radiofrequency exposure with specified mobile-phone modulations; Ramazzini used a far-field exposure across the lifespan. Their male-rat heart schwannoma findings can therefore be considered together without pretending the protocols were identical. A useful comparison keeps species, sex, dose, schedule, survival, and endpoint beside the result. The overlap raises a research question, while the differences shape its interpretation. Treating the reports simply as two positive papers would hide the conditions that make the comparison scientifically useful.',
      refs: ['ntp-rats', 'ramazzini']
    },
    {
      title: 'A tumor finding needs its tissue and sex attached',
      text: 'The clearest NTP conclusion summarized here concerns malignant heart schwannomas in male rats, with different judgments for other sexes and tumors. Ramazzini’s statistically significant heart schwannoma finding also concerned male rats at the highest tested exposure. Those specifics matter. A broader phrase such as all exposed animals developed cancer would misstate the evidence, while ignoring the named finding would lose the result the experiments contributed. Read each tissue and sex comparison within its own record, including the limitations of small tumor counts and survival differences, before extending the discussion to a wider cancer claim.',
      refs: ['ntp-rats', 'ramazzini']
    },
    {
      title: 'Integrate human and animal evidence without a paper-count vote',
      text: 'Human phone studies and controlled animal experiments have complementary strengths and limitations. The human records concern actual reported use and diagnosed outcomes, but exposure measurement and observational bias matter. The animal records control exposure more directly, but species and protocol differences complicate translation to people. Their findings should remain visible together, with those differences explained. Counting positive and negative publications cannot resolve the mismatch, and dividing a laboratory dose by an everyday exposure does not establish a personal cancer risk. The useful synthesis asks what each stream supports and what additional reasoning would be needed to connect them.',
      refs: ['cosmos', 'interphone', 'ntp-rats', 'ramazzini']
    }
  ]
};
