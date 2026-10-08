// Block 3: pedagogiska genomgångar med PDF-sidreferenser.
const LESSONS={
  "nerves": [
    {
      "title": "Kroppens kommunikationssystem",
      "goal": "Skilja centrala och perifera nervsystemet.",
      "body": [
        "Nervsystemet samlar in information, bearbetar den och styr reaktioner. Hjärnan och ryggmärgen är centrala nervsystemet, CNS. Nerver utanför dem tillhör perifera nervsystemet, PNS. Delarna arbetar tillsammans, inte som två oberoende system.",
        "Tänk på CNS som en ledningscentral och PNS som ledningarna ut till kroppen. En signal från huden går in för bearbetning, och en signal till en muskel går ut. Samma nerv kan innehålla flera slags nervfibrer."
      ],
      "remember": "CNS = hjärna och ryggmärg. PNS = nerver utanför CNS.",
      "check": "Vilka två organ bildar CNS?",
      "answer": "Hjärnan och ryggmärgen.",
      "page": "D1_P01"
    },
    {
      "title": "Nervcellen och dess delar",
      "goal": "Koppla dendrit, cellkropp och axon till signalflödet.",
      "body": [
        "En nervcell, neuron, har en cellkropp med cellkärna, dendriter som tar emot många signaler och ett axon som leder signaler vidare. Nervcellens långa utskott gör att information kan föras över stora avstånd.",
        "Axonet slutar i kontaktpunkter med andra celler, synapser. En nerv består av många nervfibrer som samlas i buntar; den är alltså inte samma sak som en enskild nervcell. Gliaceller stödjer nervcellerna och hjälper till att skapa deras miljö."
      ],
      "remember": "Dendriter tar emot; axon för vidare; synaps kopplar till nästa cell.",
      "check": "Är en nerv och en nervcell samma sak?",
      "answer": "Nej. En nerv innehåller många nervfibrer.",
      "page": "D1_P01"
    },
    {
      "title": "Elektrisk signal och kemisk överlämning",
      "goal": "Förstå hur en signal passerar till nästa cell.",
      "body": [
        "Längs axonet leds nervimpulsen som en elektrisk förändring i cellmembranet. När signalen når axonets slut kan signalsubstanser frisättas till synapsklyftan. De binder till mottagarcellen och påverkar dess aktivitet.",
        "Överlämningen kan underlätta eller bromsa en ny signal. Signalsubstanser är exempelvis acetylkolin och dopamin. Tänk på ett bud som springer längs sin egen korridor men lämnar ett meddelande över ett mellanrum: elektriskt längs axonet, kemiskt i många synapser."
      ],
      "remember": "Elektriskt längs nervcellen; kemiskt över många synapser.",
      "check": "Vad frisätts vid en kemisk synaps?",
      "answer": "Signalsubstanser, transmittorsubstanser.",
      "page": "D1_P02"
    },
    {
      "title": "Myelin: isolering som hjälper signalen",
      "goal": "Förstå varför myelin underlättar fortledning.",
      "body": [
        "Myelin är en isolerande omgivning runt många axon. Mellan myelinsegmenten finns små avbrott, noder, där impulsens elektriska förändring kan förnyas. Detta gör fortledningen snabb och effektiv.",
        "Isoleringen är inte bara ett skydd mot yttre beröring. Den påverkar hur signalen färdas. När myelin skadas kan nervsignaleringen försämras. Koppla därför myelinets uppgift till MS senare i blocket: en skadad signalledning kan ge olika symtom beroende på var den sitter."
      ],
      "remember": "Myelin isolerar och möjliggör snabbare fortledning.",
      "check": "Hur kan skadat myelin påverka nervsignalen?",
      "answer": "Fortledningen kan bli långsammare eller störas.",
      "page": "D1_P23"
    },
    {
      "title": "Sensoriskt in och motoriskt ut",
      "goal": "Skilja information till CNS från instruktioner från CNS.",
      "body": [
        "Sensoriska, afferenta, signaler går från receptorer mot CNS. Motoriska, efferenta, signaler går från CNS till exempelvis muskler. Ett känselintryck och en muskelrörelse är alltså olika riktningar i kommunikationen.",
        "Om du rör vid något varmt förmedlar sensoriska signaler informationen inåt. Motoriska signaler kan få muskler att flytta handen. Kom ihåg att alla sensoriska signaler inte behöver nå medvetandet innan en reaktion sker; reflexer kan kopplas om tidigare."
      ],
      "remember": "Sensoriskt in, motoriskt ut.",
      "check": "Vilken riktning har en sensorisk signal?",
      "answer": "Från receptor mot centrala nervsystemet.",
      "page": "D1_P08"
    },
    {
      "title": "Hjärnans delar samarbetar",
      "goal": "Skilja storhjärna, lillhjärna och hjärnstam.",
      "body": [
        "Storhjärnan har två hemisfärer. Hjärnbarken medverkar bland annat i medvetna sinnesintryck, viljemässiga rörelser, språk och tänkande. Olika områden har olika huvuduppgifter, men funktionerna bygger på samarbete.",
        "Lillhjärnan hjälper till med koordination, balans och reglering av muskelarbete. Hjärnstammen förbinder hjärnan med ryggmärgen och deltar i viktiga automatiska funktioner, som andning. Lillhjärnan startar alltså inte ensam varje rörelse utan hjälper till att samordna den."
      ],
      "remember": "Storhjärna bearbetar; lillhjärna samordnar; hjärnstam håller viktiga funktioner igång.",
      "check": "Vilken del är särskilt viktig för koordination och balans?",
      "answer": "Lillhjärnan.",
      "page": "D1_P05"
    },
    {
      "title": "Skydd och blodförsörjning",
      "goal": "Förstå hinnor, cerebrospinalvätska och hjärnans artärer.",
      "body": [
        "Hjärnan skyddas av skallen, hjärnhinnor och cerebrospinalvätska, även kallad likvor. Ryggmärgen omges också av hinnor och vätska. Vätskan bidrar bland annat till stötdämpning och en stabil miljö.",
        "Medicinskt förtydligande av kursunderlaget: hjärnans blodförsörjning kommer främst från de inre halsartärerna, arteriae carotides internae, och kotartärerna, arteriae vertebrales. De yttre halsartärerna försörjer främst strukturer utanför hjärnan och ska inte läras som en av dess huvudförsörjningar."
      ],
      "remember": "Hjärnan behöver både mekaniskt skydd och kontinuerligt blodflöde.",
      "check": "Vilka två artärsystem står för hjärnans huvudsakliga blodförsörjning?",
      "answer": "Inre halsartärerna och kotartärerna.",
      "page": "D1_P06",
      "supplement": [
        "NCBI: hjärnans blodförsörjning",
        "https://www.ncbi.nlm.nih.gov/books/NBK11042/"
      ]
    },
    {
      "title": "Ryggmärgen och perifera nerver",
      "goal": "Förstå vad ryggmärgen gör och var den slutar.",
      "body": [
        "Ryggmärgen innehåller nervcellskroppar och nervbanor. Den leder information mellan hjärna och kropp och kopplar om många reflexer. Den är inte bara en knippe perifer nerv.",
        "Medicinskt förtydligande av kursunderlaget: hos vuxna slutar ryggmärgen vanligtvis ungefär vid L1–L2, inte längst ned i ryggraden. Nervrötter fortsätter nedanför som cauda equina. Spinalnerver utgår från ryggmärgens nivåer, medan kranialnerver anknyter till hjärnan och huvudsakligen försörjer huvudets strukturer, med viktiga undantag."
      ],
      "remember": "Ryggmärgen leder och kopplar om; nervrötter fortsätter nedanför.",
      "check": "Slutar ryggmärgen längst ned i korsbenet?",
      "answer": "Nej. Hos vuxna slutar den vanligen ungefär vid L1–L2.",
      "page": "D1_P07",
      "supplement": [
        "NCBI: ryggmärgens anatomi",
        "https://www.ncbi.nlm.nih.gov/books/NBK541083/"
      ]
    },
    {
      "title": "Reflexbågen: en snabb omkoppling",
      "goal": "Följa en spinal reflex.",
      "body": [
        "En reflex är en automatiserad reaktion på en retning. Vid en spinal reflex går sensorisk information till ryggmärgen, kopplas om och ger motorisk signal tillbaka. Reaktionen behöver inte invänta ett medvetet beslut.",
        "Vid en sträckreflex reagerar muskelspolar när muskeln sträcks. Signalen leder till kontraktion i samma muskel och hjälper till att reglera muskellängd och hållning. Information kan samtidigt föras till hjärnan. Alla reflexer kopplas inte om i ryggmärgen; det finns även reflexer som kopplas om i hjärnstammen."
      ],
      "remember": "Receptor → sensorisk signal → CNS → motorisk signal → svar.",
      "check": "Vad utlöser sträckreflexen?",
      "answer": "Sträckning av muskeln som registreras av muskelspolar.",
      "page": "D1_P10"
    },
    {
      "title": "Somatiskt och autonomt",
      "goal": "Skilja skelettmuskelstyrning från inre reglering.",
      "body": [
        "Somatiska nervsystemet förmedlar bland annat känsel och motorisk styrning av skelettmuskler. Mycket av denna motorik är viljemässig, men somatiska reflexer är automatiska. Därför är viljestyrt en användbar förenkling, inte hela definitionen.",
        "Autonoma nervsystemet reglerar bland annat hjärta, glatt muskulatur och körtlar och arbetar till stor del utan medveten kontroll. Det delas i kursen in i sympatiskt, parasympatiskt och enteriskt nervsystem. Det enteriska finns i mag-tarmkanalen och kan organisera många lokala funktioner."
      ],
      "remember": "Somatiskt: skelettmuskel och känsel. Autonomt: inre reglering.",
      "check": "Är alla somatiska reaktioner medvetna?",
      "answer": "Nej. Somatiska reflexer är automatiska.",
      "page": "D1_P10"
    },
    {
      "title": "Sympatikus och parasympatikus",
      "goal": "Förstå beredskap och återhämtning.",
      "body": [
        "Sympatikus hjälper kroppen att möta belastning: hjärtats arbete kan öka, luftrören vidgas och resurser omfördelas. Parasympatikus främjar bland annat vila och matsmältning och kan sänka hjärtfrekvensen. Effekterna varierar mellan organ.",
        "Tänk beredskap och återhämtning, men inte två på-och-av-knappar. Båda systemen har löpande aktivitet. Kursens lista om sympatikus är förenklad: exempelvis immunförsvarets påverkan beror på sammanhang och tid, och kan inte reduceras till att det alltid stängs av."
      ],
      "remember": "Sympatikus mobiliserar; parasympatikus stödjer återhämtning och matsmältning.",
      "check": "Vad händer ofta med hjärtfrekvensen vid sympatikusaktivering?",
      "answer": "Den ökar.",
      "page": "D1_P11"
    }
  ],
  "senses": [
    {
      "title": "Från retning till upplevelse",
      "goal": "Förstå receptorernas uppgift.",
      "body": [
        "En receptor registrerar en viss sorts påverkan, till exempel ljus, tryck eller kemiska ämnen. Informationen omvandlas till signaler som nervsystemet bearbetar. Sinnesorganet tar alltså emot information, men upplevelsen formas i nervsystemet.",
        "Ögat reagerar på ljus, innerörats hårceller på mekaniska rörelser och lukt- och smakceller på kemiska ämnen. Det är samma grundprincip med olika ingångar. Börja med att fråga vad som registreras och hur informationen förs vidare."
      ],
      "remember": "Retning → receptor → nervsignal → bearbetning.",
      "check": "Varför räcker inte en receptor ensam för en medveten sinnesupplevelse?",
      "answer": "Informationen måste också föras vidare och bearbetas av nervsystemet.",
      "page": "D1_P14"
    },
    {
      "title": "Ögats väg för ljuset",
      "goal": "Placera hornhinna, pupill, lins och näthinna.",
      "body": [
        "Ljuset passerar hornhinnan, genom pupillen och linsen och vidare genom glaskroppen till näthinnan. Hornhinnan och linsen bryter ljuset så att det kan fokuseras. Pupillen är öppningen i iris, regnbågshinnan; iris reglerar öppningens storlek.",
        "Näthinnan innehåller ljuskänsliga celler som omvandlar ljus till signaler. Informationen förs via synnerven till hjärnan. Bilden på näthinnan är upp-och-nedvänd, men det medvetna seendet bygger på hjärnans bearbetning. Ögat är alltså mer än en kamera som bara tar en bild."
      ],
      "remember": "Ljus fokuseras på näthinnan och blir nervinformation.",
      "check": "Är pupillen en lins?",
      "answer": "Nej. Den är en öppning som släpper in ljus.",
      "page": "D1_P14"
    },
    {
      "title": "Tappar, stavar och tårvätska",
      "goal": "Skilja färgseende, ljuskänslighet och ögats skydd.",
      "body": [
        "Näthinnans tappar är viktiga för färgseende och detaljseende i gott ljus. Stavarna är mer ljuskänsliga och hjälper oss att se när ljuset är svagt. De har alltså olika arbetsuppgifter på samma näthinna.",
        "Tårvätskan håller ögats yta fuktig och hjälper till att rengöra och skydda den. Tårvätska leds också vidare mot näshålan via tårvägarna. Koppla funktion till plats: färger registreras i näthinnan, medan tårvätskan främst verkar på ögats yta."
      ],
      "remember": "Tappar = färg och detaljer. Stavar = svagt ljus.",
      "check": "Vilka sinnesceller registrerar färger?",
      "answer": "Tapparna i näthinnan.",
      "page": "D1_P15"
    },
    {
      "title": "Hörseln: vibration blir nervsignal",
      "goal": "Följa ljudet från trumhinna till hörselnerv.",
      "body": [
        "Ljudvågor går genom hörselgången och sätter trumhinnan i svängning. Hörselbenen hammaren, städet och stigbygeln förmedlar rörelsen mot innerörat genom det ovala fönstret. Örat delas i ytteröra, mellanöra och inneröra.",
        "I hörselsnäckan leder vätskerörelser till att hårceller påverkas och nervsignaler bildas. Signalerna går via hörselnerven till hjärnan. Mekaniska vibrationer omvandlas alltså till nervinformation. En vaxpropp i hörselgången kan hindra ljudets passage men är inte samma sak som skada på innerörats hårceller."
      ],
      "remember": "Trumhinna → hörselben → hörselsnäcka → nerv → hjärna.",
      "check": "Vilken uppgift har trumhinnan?",
      "answer": "Att sättas i svängning av ljud och förmedla rörelsen till hörselbenen.",
      "page": "D1_P16"
    },
    {
      "title": "Balansorganet och kroppens helhetsbild",
      "goal": "Skilja båggångar från hinnsäckar.",
      "body": [
        "Balansorganet finns i innerörat och omfattar tre båggångar och två hinnsäckar. Båggångarna registrerar rotationsrörelser. Hinnsäckarna registrerar linjär acceleration och huvudets läge i förhållande till tyngdkraften.",
        "Medicinskt förtydligande av kursunderlaget: de små kalkkristallerna hör normalt till hinnsäckarnas sinnesstrukturer, inte till båggångarnas normala registreringsmekanism. Balans bygger också på syn och information från muskler och leder. Nervsystemet kombinerar signalerna för att anpassa hållning och rörelser."
      ],
      "remember": "Båggångar: rotation. Hinnsäckar: linjär rörelse och tyngdkraft.",
      "check": "Var finns kalkkristallerna normalt i balansorganet?",
      "answer": "I hinnsäckarnas sinnesstrukturer.",
      "page": "D1_P16",
      "supplement": [
        "NCBI: hinnsäckar och otoliter",
        "https://www.ncbi.nlm.nih.gov/books/NBK10792/"
      ]
    },
    {
      "title": "Lukt, smak och känsel",
      "goal": "Koppla kemiska och mekaniska retningar till sinnen.",
      "body": [
        "Luktsinnesceller finns högt i näshålan och reagerar på luktämnen. Smaklökar innehåller smaksinnesceller, framför allt på tungan men också på andra platser. Upplevelsen av matens smak påverkas av både smak och lukt.",
        "Hudens receptorer och nervändar registrerar bland annat beröring, tryck, temperatur och potentiellt skadlig påverkan. Känselinformation kommer också från djupare vävnader. För en massageterapeut är det viktigt att skilja mellan det som registreras lokalt och hur personen sedan upplever det."
      ],
      "remember": "Lukt och smak är kemiska sinnen; känsel omfattar flera slags påverkan.",
      "check": "Varför kan mat smaka mindre när näsan är täppt?",
      "answer": "Lukten bidrar starkt till den samlade smakupplevelsen.",
      "page": "D1_P18"
    }
  ],
  "pain": [
    {
      "title": "Smärta är en upplevelse",
      "goal": "Skilja nociception från upplevd smärta.",
      "body": [
        "Smärta är en obehaglig upplevelse med både sensoriska och känslomässiga delar. Nociception är nervsystemets registrering av potentiellt skadlig påverkan. Orden beskriver alltså inte exakt samma sak.",
        "Sömn, oro, tidigare erfarenheter och sammanhang kan påverka smärtupplevelsen. Det betyder inte att smärtan är påhittad. Kursbokens avsnitt kopplar smärta till både kroppsliga och psykiska konsekvenser: långvariga besvär kan påverka energi, vardag och välbefinnande."
      ],
      "remember": "Smärta är personens upplevelse; nociception är registrering av skadlig påverkan.",
      "check": "Kan smärta påverkas av sömn och oro utan att vara inbillad?",
      "answer": "Ja. Smärtupplevelsen formas av flera faktorer.",
      "page": "D1_P20"
    },
    {
      "title": "Olika smärtbegrepp",
      "goal": "Skilja mekanism från beskrivning och okänd orsak.",
      "body": [
        "Nociceptiv smärta utgår från aktivering av nociceptorer vid vävnadsskada eller hot om skada. Neuropatisk smärta beror på sjukdom eller skada i det somatosensoriska nervsystemet. Fantomsmärta upplevs i en kroppsdel som inte längre finns.",
        "Medicinskt förtydligande: kursen använder även psykogen och idiopatisk smärta. Idiopatisk betyder att orsaken är okänd; psykiska faktorer kan påverka all smärta. Kompletterande förklaring – ej direkt från kursmaterialet: modern klassifikation omfattar även nociplastisk smärta, med förändrad smärtbearbetning utan att en vävnadsskada eller nervskada fullt förklarar besvären."
      ],
      "remember": "Nociceptiv: vävnadssignal. Neuropatisk: nervsjukdom eller nervskada.",
      "check": "Betyder okänd smärtorsak att smärtan inte är verklig?",
      "answer": "Nej. Okänd orsak betyder inte att upplevelsen är påhittad.",
      "page": "D1_P21",
      "supplement": [
        "1177 för vårdpersonal: långvarig smärta",
        "https://vardpersonal.1177.se/kunskapsstod/kliniska-kunskapsstod/smarta-langvarig/"
      ]
    },
    {
      "title": "Fråga innan du tolkar",
      "goal": "Använda kursens frågor för en tydlig beskrivning.",
      "body": [
        "Börja med var, när och hur det gör ont. Fråga hur länge besvären funnits, om de har förekommit tidigare och vad som hände vid debuten. Fråga också vad som förvärrar eller lindrar och hur vardagen påverkas.",
        "Låt personen beskriva med egna ord: brännande, molande och stickande är exempel på upplevelser, inte säkra diagnoser. Kursens exempel om kompensation vid syn- eller hörselnedsättning kan ge en fråga att undersöka, men får inte bli en automatisk förklaring till nacksmärta."
      ],
      "remember": "Beskriv först; dra inte en diagnos ur ett enstaka ord.",
      "check": "Vilka tre grundfrågor kan du börja med?",
      "answer": "Var gör det ont, när gör det ont och hur känns det?",
      "page": "D1_P22"
    },
    {
      "title": "VAS och smärtteckning",
      "goal": "Använda verktyg som stöd för uppföljning.",
      "body": [
        "På en VAS, visuell analog skala, markerar personen smärtans intensitet på en linje mellan två ytterpunkter. En numerisk skala med tal är närbesläktad men inte exakt samma verktyg. Bedömningen är personens egen.",
        "En smärtteckning visar var besvären upplevs på en kroppsbild. Verktygen kan hjälpa vid uppföljning: har intensitet eller utbredning förändrats? De berättar inte ensamma vilken vävnad som är skadad eller hur stor skadan är. Två personer med samma intensitet behöver inte ha samma tillstånd."
      ],
      "remember": "VAS visar intensitet; smärtteckning visar utbredning.",
      "check": "Kan ett VAS-värde ensamt tala om vad som orsakar smärtan?",
      "answer": "Nej. Det beskriver intensiteten, inte orsaken.",
      "page": "D1_P22"
    }
  ],
  "neurodisease": [
    {
      "title": "MS: störningar i centrala nervsystemet",
      "goal": "Koppla myelinskada till varierande symtom.",
      "body": [
        "MS, multipel skleros, är en inflammatorisk sjukdom i CNS som kan skada myelin och nervfibrer. Fortledningen störs och symtomen beror på var i hjärnan eller ryggmärgen förändringarna finns.",
        "Kursen tar upp bland annat synproblem, domningar, muskelsvaghet, balanssvårigheter, trötthet och påverkan på blåsa eller tarm. Ett skov är en period med nya eller förvärrade symtom, men alla förlopp ser inte likadana ut. Förstå platsen för skadan och signalens väg i stället för att bara memorera symtomlistan."
      ],
      "remember": "Myelinskada i CNS kan störa flera olika funktioner.",
      "check": "Varför har inte alla med MS samma symtom?",
      "answer": "Olika nervbanor och områden kan vara påverkade.",
      "page": "D1_P23"
    },
    {
      "title": "Parkinson: rörelsernas reglering",
      "goal": "Förstå dopaminets roll vid sjukdomen.",
      "body": [
        "Vid Parkinsons sjukdom förloras dopaminproducerande nervceller i ett område som ingår i hjärnans reglering av rörelser. Minskad dopaminfunktion bidrar till långsamma rörelser, stelhet och ibland vilotremor.",
        "Kursen beskriver även balansproblem, förändrat tal och sväljsvårigheter. Alla symtom behöver inte finnas hos alla. Levodopa, L-DOPA, kan omvandlas till dopamin och används i behandling; rehabilitering och fysisk aktivitet kompletterar. Dopamin är alltså inte bara ett enkelt lyckohormon utan har flera funktioner."
      ],
      "remember": "Dopaminbrist påverkar hjärnans rörelsereglering.",
      "check": "Vilken signalsubstans är särskilt viktig vid Parkinson?",
      "answer": "Dopamin.",
      "page": "D2_P01"
    },
    {
      "title": "Epilepsi och anfallstyper",
      "goal": "Skilja anfallsutlösare från bakomliggande sjukdom.",
      "body": [
        "Epilepsi innebär en benägenhet för återkommande epileptiska anfall, orsakade av onormal elektrisk aktivitet i hjärnan. Anfallen kan vara fokala, med start i ett avgränsat område, eller generaliserade med tidig påverkan på nätverk i båda hemisfärerna.",
        "Medicinskt förtydligande: kursens partiella och generella anfall motsvaras vanligen av fokala och generaliserade. Sömnbrist kan utlösa anfall hos en känslig person men är inte samma sak som grundorsaken till epilepsi. Ett provocerat krampanfall behöver inte heller innebära att personen har epilepsi."
      ],
      "remember": "Anfallsutlösare och epilepsins grundorsak är olika saker.",
      "check": "Måste ett epileptiskt anfall ge stora kramper?",
      "answer": "Nej. Anfall kan exempelvis påverka medvetande, känsel eller beteende.",
      "page": "D2_P03",
      "supplement": [
        "1177: epilepsi",
        "https://www.1177.se/sjukdomar--besvar/hjarna-och-nerver/yrsel-svimning-och-kramper/epilepsi/"
      ]
    },
    {
      "title": "EEG och medicinsk utredning",
      "goal": "Förstå hur anfallsbeskrivning och undersökning används.",
      "body": [
        "Vid utredning av epilepsi är sjukdomshistorien och en beskrivning av vad som hände mycket viktiga. EEG registrerar hjärnans elektriska aktivitet med elektroder på huvudet och kan stödja utredningen.",
        "EEG är inte samma sak som EKG, som registrerar hjärtats elektriska aktivitet. Ett undersökningsresultat bedöms tillsammans med övrig information. Behandlingen kan omfatta anfallsförebyggande läkemedel och anpassas av vården till anfallstyp och situation."
      ],
      "remember": "EEG = hjärna; EKG = hjärta.",
      "check": "Vilken elektrisk aktivitet registrerar EEG?",
      "answer": "Hjärnans elektriska aktivitet.",
      "page": "D2_P04"
    },
    {
      "title": "Hjälp vid ett krampanfall",
      "goal": "Känna till säker första hjälp.",
      "body": [
        "Kompletterande aktuell förklaring: flytta farliga föremål, skydda huvudet och ta tid på anfallet. Håll inte fast personen och stoppa inget i munnen. Efter kramperna kontrolleras andningen; vid normal andning och kvarvarande medvetslöshet används stabilt sidoläge.",
        "Ring 112 vid ett första anfall, om kramperna varar fem minuter eller längre, om anfall följer utan återhämtning eller om personen inte återhämtar sig eller andas normalt. Vid onormal andning följ larmoperatörens instruktioner om HLR. Eventuell akutmedicin ges endast enligt personens ordination och kända instruktioner, inte som ett generellt råd om stolpiller."
      ],
      "remember": "Skydda, ta tid, inget i munnen och larma när det behövs.",
      "check": "Ska du stoppa in något i munnen för att skydda tungan?",
      "answer": "Nej. Stoppa inget i munnen och håll inte fast personen.",
      "page": "D2_P04",
      "supplement": [
        "1177: första hjälp vid epilepsi",
        "https://www.1177.se/sjukdomar--besvar/hjarna-och-nerver/yrsel-svimning-och-kramper/epilepsi/"
      ]
    },
    {
      "title": "Stroke och TIA",
      "goal": "Skilja blodpropp från blödning och förstå brådskan.",
      "body": [
        "Stroke kan orsakas av en propp som stoppar blodförsörjningen eller av en blödning i hjärnan. Nervvävnad påverkas snabbt när blodflödet störs. Vilka funktioner som drabbas beror på platsen. TIA ger övergående symtom men är också en akut varningssignal.",
        "Kompletterande aktuell förklaring: AKUT-testet hjälper dig att känna igen hängande ansiktshalva, en arm som faller och påverkat uttal. T står för tid att ringa 112. Även synbortfall eller andra plötsliga neurologiska symtom kan vara stroke; alla fall fångas inte av testet. Vänta inte på att symtomen ska gå över."
      ],
      "remember": "Plötsliga strokesymtom → ring 112, även om de går över.",
      "check": "Är övergående strokesymtom ofarliga?",
      "answer": "Nej. De kan vara TIA och behöver akut bedömning.",
      "page": "D2_P05",
      "supplement": [
        "1177: stroke och AKUT-testet",
        "https://www.1177.se/sjukdomar--besvar/hjarna-och-nerver/stroke-och-blodkarl-i-hjarnan/stroke/"
      ]
    },
    {
      "title": "Behandling och rehabilitering efter stroke",
      "goal": "Förstå varför orsaken avgör behandling.",
      "body": [
        "Vid en ischemisk stroke kan proppupplösande behandling eller mekanisk borttagning av proppen bli aktuell hos utvalda patienter. Vid blödning behövs andra åtgärder och ibland operation. Snabb undersökning avgör vad som är lämpligt.",
        "Efter akutskedet behöver riskfaktorer och funktionsförluster bedömas. Rehabilitering kan omfatta rörelser, kommunikation och vardagsaktiviteter. Samma ord, stroke, beskriver alltså flera orsaker och förlopp; behandling kan inte avgöras genom att enbart se en svag arm."
      ],
      "remember": "Propp och blödning kräver olika medicinsk handläggning.",
      "check": "Varför måste vården avgöra om stroken beror på propp eller blödning?",
      "answer": "För att välja rätt behandling; proppupplösande behandling passar inte vid hjärnblödning.",
      "page": "D2_P06"
    },
    {
      "title": "ALS: motoriska nervceller påverkas",
      "goal": "Förstå varför muskler blir svaga.",
      "body": [
        "ALS påverkar motoriska nervceller i hjärna och ryggmärg. När signaleringen till musklerna försämras uppstår muskelsvaghet och muskler kan förtvina. Sjukdomen kan också påverka tal, sväljning och andning.",
        "Kursbokens huvudpoäng är att koppla muskelfunktionen till nervstyrningen. Det är inte samma grundmekanism som en vanlig muskelskada. Stöd och insatser behöver anpassas efter personens funktion och behov; diagnos och behandling hör till sjukvården."
      ],
      "remember": "Motoriska nervceller påverkas → muskler får sämre styrning.",
      "check": "Är ALS framför allt en sjukdom i musklernas egna fibrer?",
      "answer": "Nej. Motoriska nervceller påverkas och muskelfunktionen försämras som följd.",
      "page": "D2_P07"
    },
    {
      "title": "Demens och kognitiva funktioner",
      "goal": "Förstå demens som ett samlingsbegrepp.",
      "body": [
        "Demenssjukdomar kan påverka minne, språk, orientering, planering och andra kognitiva funktioner så att vardagen försvåras. Alzheimers sjukdom är en av flera orsaker. Vaskulär demens hör samman med kärlskador i hjärnan.",
        "Demens är inte detsamma som vanlig glömska och är inte en självklar följd av åldrande. Kursen tar upp utredning, stöd och individuellt anpassad omsorg. Vid kontakt med personen är tydlighet, lugn och respekt viktigare än att testa minnet i varje samtal."
      ],
      "remember": "Demens är ett samlingsbegrepp för sjukdomar med kognitiv påverkan.",
      "check": "Är Alzheimers sjukdom och demens exakt samma begrepp?",
      "answer": "Nej. Alzheimer är en av flera demenssjukdomar.",
      "page": "D2_P09"
    }
  ],
  "hormones": [
    {
      "title": "Endokrin eller exokrin?",
      "goal": "Skilja hormoner i blodet från utsöndring genom gångar.",
      "body": [
        "En endokrin körtel frisätter hormoner till blodet. En exokrin körtel avger sitt innehåll genom en utförsgång till en yta eller ett hålrum, exempelvis svett till huden eller bukspott till tarmen. Exokrin betyder alltså inte att alla ämnen hamnar utanför kroppen.",
        "Bukspottkörteln har båda funktionerna. Den bildar matsmältningsämnen till tarmen och hormonerna insulin och glukagon till blodet. Samma organ kan därför tillhöra mer än ett funktionellt system."
      ],
      "remember": "Endokrin = till blod. Exokrin = via utförsgång.",
      "check": "Varför är bukspottkörteln både endokrin och exokrin?",
      "answer": "Den frisätter hormoner till blodet och bukspott genom en gång till tarmen.",
      "page": "D2_P14"
    },
    {
      "title": "Hormoner är budskap till målceller",
      "goal": "Förstå varför bara vissa celler svarar.",
      "body": [
        "Hormoner transporteras med blodet men påverkar framför allt celler som har passande receptorer. Hormonet är budskapet och receptorn är mottagaren. Resultatet kan vara att en funktion ökar, minskar eller förändras.",
        "Nervsystemet och hormonsystemet samverkar. Nervsignaler kan styra hormonfrisättning, och hormoner påverkar nervsystemet. Tänk på blodet som en postrunda: brevet når många adresser men kan bara läsas av celler med rätt mottagare."
      ],
      "remember": "Ett hormon behöver en passande receptor för att påverka cellen.",
      "check": "Varför reagerar inte alla celler likadant på ett hormon?",
      "answer": "De har olika receptorer och olika funktioner.",
      "page": "D2_P15"
    },
    {
      "title": "Hypotalamus och hypofys",
      "goal": "Förstå förbindelsen mellan nervsystem och hormonstyrning.",
      "body": [
        "Hypotalamus samordnar information om kroppens inre miljö och påverkar både autonoma nervsystemet och hormonsystemet. Hypofysen ligger under hjärnan och bildar flera styrhormoner som påverkar andra endokrina organ.",
        "Medicinskt förtydligande: hypofysens framlob producerar bland annat GH, TSH, ACTH, FSH, LH och prolaktin. ADH och oxytocin bildas i hypotalamus och lagras och frisätts från hypofysens baklob. Produktion och frisättning är alltså inte samma sak."
      ],
      "remember": "ADH och oxytocin bildas i hypotalamus men frisätts från bakloben.",
      "check": "Bildas ADH i hypofysens baklob?",
      "answer": "Nej. Det bildas i hypotalamus och frisätts från bakloben.",
      "page": "D2_P17",
      "supplement": [
        "1177: hormonsystemet",
        "https://www.1177.se/liv--halsa/sa-fungerar-kroppen/hormonsystemet/"
      ]
    },
    {
      "title": "Hypofysens styrhormoner",
      "goal": "Koppla förkortning till målorgan.",
      "body": [
        "GH, även kallat STH, stimulerar tillväxt och påverkar ämnesomsättning. TSH stimulerar sköldkörteln att bilda sköldkörtelhormoner. ACTH stimulerar binjurebarkens kortisolproduktion. FSH och LH reglerar funktioner i äggstockar och testiklar.",
        "Prolaktin, i kursen även kallat LTH, stimulerar mjölkbildning. Oxytocin hjälper till med livmodersammandragningar och utdrivning av mjölk. ADH sparar vatten via njurarna. Medicinskt förtydligande: TSH:s huvuduppgift är sköldkörtelstyrning, inte direkt uppbyggnad av muskler som frågebladet anger."
      ],
      "remember": "TSH → sköldkörtel. ACTH → binjurebark. FSH/LH → könskörtlar.",
      "check": "Vilket organ stimuleras av TSH?",
      "answer": "Sköldkörteln.",
      "page": "D2_P18",
      "supplement": [
        "1177: hormonsystemet",
        "https://www.1177.se/liv--halsa/sa-fungerar-kroppen/hormonsystemet/"
      ]
    },
    {
      "title": "Negativ återkoppling",
      "goal": "Förstå varför hormonproduktionen kan minska när nivån stiger.",
      "body": [
        "Negativ återkoppling, feedback, innebär att resultatet av en process bromsar den process som gav resultatet. Om sköldkörtelhormonerna ökar kan de minska signalerna från hypotalamus och hypofys. Då minskar stimuleringen av sköldkörteln.",
        "Tänk på en termostat: när rätt temperatur nås minskar värmningen. Systemet reagerar på information, inte på ett medvetet beslut. Feedback förklarar varför ett högt hormonvärde ibland kombineras med ett lågt styrhormonvärde."
      ],
      "remember": "Mer slutprodukt kan bromsa fortsatt stimulering.",
      "check": "Varför kan TSH minska när sköldkörtelhormonerna ökar?",
      "answer": "Ökningen ger negativ återkoppling som minskar hypofysens TSH-frisättning.",
      "page": "D2_P16"
    },
    {
      "title": "Sköldkörtel, bisköldkörtlar och dygnsrytm",
      "goal": "Skilja ämnesomsättning från kalciumreglering.",
      "body": [
        "Sköldkörteln bildar T4, tyroxin, och T3, trijodtyronin. De påverkar ämnesomsättning och behövs för normal tillväxt och utveckling. Bisköldkörtlarna är andra små körtlar som bildar parathormon, PTH, och reglerar bland annat kalcium.",
        "Kalcium är viktigt för nerv- och muskelfunktion, så mineralreglering hänger ihop med rörelseapparaten. Tallkottkörteln bildar melatonin och hjälper till med dygnsrytmen. Lär dig att liknande namn inte betyder samma uppgift: sköldkörtel och bisköldkörtlar reglerar olika saker."
      ],
      "remember": "T3/T4: ämnesomsättning. PTH: kalcium. Melatonin: dygnsrytm.",
      "check": "Vilket hormon bildas i bisköldkörtlarna?",
      "answer": "Parathormon, PTH.",
      "page": "D2_P19"
    },
    {
      "title": "Binjurebark och binjuremärg",
      "goal": "Skilja två delar av samma organ.",
      "body": [
        "Binjurarna sitter ovanpå njurarna. Barken och märgen bildar olika hormoner. Barken bildar bland annat kortisol och aldosteron. Kortisol påverkar ämnesomsättning och kroppens stressreaktioner; aldosteron påverkar njurarnas saltreglering.",
        "Märgen frisätter adrenalin och noradrenalin vid beredskapsreaktioner. Hjärtats arbete och blodflödets fördelning kan förändras. Skillnaden mellan bark och märg är viktigare än att bara minnas att alla är stresshormoner. Hormonerna har flera funktioner och är inte automatiskt skadliga."
      ],
      "remember": "Bark: kortisol och aldosteron. Märg: adrenalin och noradrenalin.",
      "check": "Vilken del av binjuren frisätter adrenalin?",
      "answer": "Binjuremärgen.",
      "page": "D2_P20"
    },
    {
      "title": "Insulin och glukagon: två riktningar",
      "goal": "Förstå regleringen av blodets glukos.",
      "body": [
        "Insulin från bukspottkörtelns betaceller hjälper till att sänka blodsockret, bland annat genom att öka glukosupptag i muskel- och fettvävnad och främja lagring. Glukagon från alfaceller bidrar till att höja blodsockret genom effekter på levern.",
        "Medicinskt förtydligande: glukagon stimulerar nedbrytning av leverns glykogen och nybildning av glukos. Det ska inte läras som att allt lagrat fett direkt blir glukos. Alla cellers glukosupptag kräver inte heller insulin på samma sätt. Börja med motriktningen: insulin ned, glukagon upp."
      ],
      "remember": "Insulin sänker; glukagon höjer blodglukos.",
      "check": "Vilket hormon stimulerar levern att öka tillgången på glukos?",
      "answer": "Glukagon.",
      "page": "D2_P23",
      "supplement": [
        "1177: hormonsystemet",
        "https://www.1177.se/liv--halsa/sa-fungerar-kroppen/hormonsystemet/"
      ]
    },
    {
      "title": "Dopamin, endorfiner och könshormoner",
      "goal": "Se att signalämnen kan ha flera roller.",
      "body": [
        "Dopamin är framför allt en signalsubstans i nervsystemet och påverkar bland annat rörelsereglering och belöningsprocesser. I hormonsystemet bidrar dopamin till att hämma prolaktinfrisättning. Endorfiner deltar bland annat i kroppens smärtmodulering.",
        "Äggstockar och testiklar bildar könshormoner som påverkar fortplantning och andra kroppsfunktioner. FSH och LH från hypofysen styr delar av dessa processer. Försök koppla ämne, plats och uppgift i stället för att ge varje ämne ett enda känsloord som glad eller lugn."
      ],
      "remember": "Ett signalämne kan ha flera roller beroende på plats och receptor.",
      "check": "Varför är lyckohormon en ofullständig beskrivning av dopamin?",
      "answer": "Dopamin har även viktiga roller i rörelsereglering och hormonstyrning.",
      "page": "D2_P24"
    }
  ],
  "endodisease": [
    {
      "title": "Diabetes: glukosregleringen fungerar sämre",
      "goal": "Förstå grundskillnaden mellan typ 1 och typ 2.",
      "body": [
        "Vid diabetes mellitus är blodsockret förhöjt på grund av störd insulinproduktion eller insulineffekt. Typ 1 innebär att insulinproducerande betaceller förstörs, vanligen genom en autoimmun process, och insulinbrist uppstår.",
        "Typ 2 innebär insulinresistens tillsammans med otillräcklig insulinproduktion i förhållande till behovet. Produktionen kan vara hög tidigt och senare minska. Ärftlighet, ålder och flera andra faktorer spelar roll. Det är alltså inte korrekt att säga att typ 2 alltid betyder för mycket insulin eller enbart beror på livsstil."
      ],
      "remember": "Typ 1: insulinbrist. Typ 2: insulinresistens och relativ insulinbrist.",
      "check": "Vad betyder insulinresistens?",
      "answer": "Att vävnaderna reagerar sämre på insulin.",
      "page": "D3_P02",
      "supplement": [
        "1177: diabetes typ 2",
        "https://www.1177.se/sjukdomar--besvar/diabetes/diabetes-typ-2/"
      ]
    },
    {
      "title": "Varför törst och stora urinmängder?",
      "goal": "Koppla diabetesmekanismen till symtom.",
      "body": [
        "När blodglukos blir tillräckligt högt kan njurarnas förmåga att återta glukos överskridas. Glukos blir kvar i urinen och bidrar till att dra med sig vatten. Urinmängden ökar och personen blir törstig.",
        "Trötthet och viktnedgång kan förekomma, särskilt vid snabb utveckling av insulinbrist. Typ 2 kan utvecklas långsamt och märkas först vid provtagning. Symtom som törst räcker därför inte ensamma för diagnos; blodprover och medicinsk bedömning behövs."
      ],
      "remember": "Glukos i urin kan öka vattenförlusten → större urinmängd och törst.",
      "check": "Varför kan högt blodsocker ge ökad törst?",
      "answer": "Ökad glukosutsöndring kan dra med sig vatten i urinen och ge vätskeförlust.",
      "page": "D3_P03"
    },
    {
      "title": "Behandling vid diabetes",
      "goal": "Förstå behandlingens mål utan att göra ett kostråd av kursen.",
      "body": [
        "Vid typ 1 behövs insulinbehandling. Vid typ 2 anpassas behandling till personens behov och kan omfatta matvanor, fysisk aktivitet och läkemedel, ibland insulin. Målet är god glukoskontroll och minskad risk för komplikationer.",
        "Medicinskt förtydligande av frågebladet: att ta bort alla kolhydrater är inte ett generellt krav för behandling. Hälsosamma, individuellt anpassade vanor och lämpliga läkemedel är centrala. Som massageterapeut ändrar du inte personens insulin eller annan medicinering."
      ],
      "remember": "Typ 1 behöver insulin; typ 2 behandlas individuellt.",
      "check": "Kan en person med typ 2-diabetes behöva insulin?",
      "answer": "Ja. Behandlingen beror på behov och sjukdomens utveckling.",
      "page": "D3_P04",
      "supplement": [
        "1177: diabetes typ 2",
        "https://www.1177.se/sjukdomar--besvar/diabetes/diabetes-typ-2/"
      ]
    },
    {
      "title": "Komplikationer och yrkesroll",
      "goal": "Koppla långvarigt förhöjt glukos till vävnadspåverkan.",
      "body": [
        "Diabetes kan på sikt påverka blodkärl och nerver och öka risken för problem i ögon, njurar och fötter samt hjärt-kärlsjukdom. Nedsatt känsel och svårläkta sår är viktiga konsekvenser att förstå.",
        "För massage behöver du fråga om känsel, hud och kända komplikationer och anpassa behandlingen. En person med nedsatt känsel kan ha svårare att bedöma tryck och obehag. Diabetes är inte samma sak som att massage alltid är förbjuden, men situationen och vävnadens status behöver bedömas."
      ],
      "remember": "Kärl- och nervpåverkan kan ändra känsel och läkning.",
      "check": "Varför är nedsatt känsel relevant när du anpassar massage?",
      "answer": "Personen kan ha svårare att registrera och rapportera för starkt tryck eller obehag.",
      "page": "D3_P05"
    },
    {
      "title": "Insulinkänning: för lågt blodsocker",
      "goal": "Skilja hypoglykemi från långvarigt högt blodsocker.",
      "body": [
        "Insulinkänning är hypoglykemi, lågt blodsocker. Darrighet, svettning, hunger, oro eller irritabilitet kan förekomma. Vid större påverkan kan tal, gång och medvetande förändras. Detta är en annan situation än diabetes grundproblem med högt blodsocker.",
        "Kompletterande aktuell förklaring: en vaken person som säkert kan svälja kan få snabbt socker, exempelvis druvsocker eller vanlig söt dryck. Ge inget att äta eller dricka vid medvetslöshet. Ring 112 vid medvetslöshet eller svår påverkan och följ larmoperatörens instruktioner. Det är viktigt att bedöma vakenhet och sväljförmåga innan något ges genom munnen."
      ],
      "remember": "Lågt blodsocker behöver snabb hjälp; inget genom munnen vid medvetslöshet.",
      "check": "Ska en medvetslös person få saft genom munnen?",
      "answer": "Nej. Ring 112 och ge inget att äta eller dricka.",
      "page": "D3_P04",
      "supplement": [
        "1177: insulinkänning",
        "https://www.1177.se/sjukdomar--besvar/diabetes/insulinkanning/"
      ]
    },
    {
      "title": "Metabolt syndrom",
      "goal": "Förstå ett kluster av riskfaktorer.",
      "body": [
        "Metabolt syndrom beskriver en kombination av riskfaktorer, exempelvis bukfetma, högt blodtryck, blodfettsrubbning och förhöjt glukos. Tillståndet förknippas med insulinresistens och ökad risk för hjärt-kärlsjukdom och typ 2-diabetes.",
        "Det är inte en enskild symtomlista som räcker för diagnos. Medicinskt förtydligande: orsakerna kan inte reduceras till bara kolhydratintag. Behandling innebär individuellt stöd för levnadsvanor och vid behov behandling av de olika riskfaktorerna. Koppla tillbaka till Block 2: blodtryck och kärlsjukdom är en del av samma helhet."
      ],
      "remember": "Flera riskfaktorer tillsammans kan öka framtida sjukdomsrisk.",
      "check": "Är metabolt syndrom samma sak som enbart övervikt?",
      "answer": "Nej. Det handlar om en kombination av riskfaktorer.",
      "page": "D3_P06"
    },
    {
      "title": "Struma är storlek, inte hormonnivå",
      "goal": "Skilja förstoring från över- och underfunktion.",
      "body": [
        "Struma betyder att sköldkörteln är förstorad. Det kan finnas olika orsaker, exempelvis jodbrist, knölar eller andra sköldkörtelförändringar. Sköldkörtelns storlek säger inte i sig hur mycket hormon den producerar.",
        "Hypertyreos betyder för hög hormonproduktion och hypotyreos för låg funktion. En förstorad körtel kan därför inte automatiskt klassas som hyperaktiv. Lär dig tre frågor: är körteln förstorad, hur ser funktionen ut och vad är orsaken?"
      ],
      "remember": "Struma beskriver förstoring; hyper och hypo beskriver funktion.",
      "check": "Betyder struma alltid hypertyreos?",
      "answer": "Nej. Körteln kan vara förstorad med olika nivåer av hormonfunktion.",
      "page": "D3_P07"
    },
    {
      "title": "Hypertyreos och hypotyreos",
      "goal": "Jämföra typiska symtom och behandlingsprinciper.",
      "body": [
        "Vid hypertyreos kan bland annat hjärtklappning, darrighet, svettning, värmekänsla och viktnedgång förekomma. Behandling kan minska hormonproduktionen med tyreostatika, radiojod eller operation beroende på orsaken.",
        "Vid hypotyreos kan trötthet, frusenhet, torr hud, långsam puls, förstoppning och viktuppgång förekomma. Behandling innebär vanligtvis ersättning med sköldkörtelhormon. Symtomen är ospecifika och måste bedömas med provtagning och medicinsk utredning; de innebär inte att man själv kan ställa diagnos utifrån exempelvis trötthet."
      ],
      "remember": "Hyper: för hög funktion. Hypo: för låg funktion.",
      "check": "Hur skiljer sig behandlingsprincipen vid hyper- och hypotyreos?",
      "answer": "Vid hyper minskas produktionen; vid hypo ersätts bristen med hormon.",
      "page": "D3_P09"
    }
  ]
};
