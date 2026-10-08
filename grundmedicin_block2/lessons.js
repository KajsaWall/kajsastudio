// Pedagogiska genomgångar · Block 2.
const LESSONS={
  "circulation": [
    {
      "title": "Kroppens transportsystem",
      "goal": "Förstå varför kroppen behöver cirkulation.",
      "body": [
        "Alla celler behöver få syre och näringsämnen och bli av med avfallsprodukter. Blodet är transportmedlet, kärlen är vägarna och hjärtat är pumpen. Cirkulationen transporterar också hormoner, som är kemiska meddelanden mellan organ.",
        "Tänk på en stad med leveranser: en muskelcell kan inte hämta syret i lungorna själv. Därför måste syret levereras ända fram till cellens närhet. Lymfsystemet kompletterar blodcirkulationen genom att återföra överskottsvätska och delta i kroppens försvar."
      ],
      "remember": "Hjärta = pump. Kärl = vägar. Blod = transport.",
      "check": "Vilka två saker behöver blodet både leverera och hämta?",
      "answer": "Det levererar bland annat syre och näring och hämtar koldioxid och andra avfallsprodukter.",
      "page": "D1_P01"
    },
    {
      "title": "Fyra rum och enkelriktade dörrar",
      "goal": "Placera förmak, kammare och klaffar.",
      "body": [
        "Hjärtat är en ihålig muskel med fyra rum. Höger och vänster förmak tar emot blod. Från varje förmak går blodet vidare till kammaren på samma sida. Kamrarna pumpar blodet ut ur hjärtat: den högra mot lungorna och den vänstra mot kroppen.",
        "Klaffar fungerar som enkelriktade dörrar. Segelklaffar sitter mellan förmak och kammare; fickklaffar sitter där blodet lämnar kamrarna. De öppnas och stängs av tryckskillnader och motverkar återflöde. Vänster kammare har kraftigare muskelvägg eftersom den måste driva blod genom stora kretsloppet."
      ],
      "remember": "Förmak tar emot; kammare skickar vidare; klaffar hindrar backflöde.",
      "check": "Varför har vänster kammare en kraftigare vägg?",
      "answer": "Den pumpar genom hela kroppen och behöver utveckla ett högre tryck.",
      "page": "D1_P03"
    },
    {
      "title": "Lilla och stora kretsloppet",
      "goal": "Följa blodet genom två sammanhängande kretslopp.",
      "body": [
        "Lilla kretsloppet går från höger kammare genom lungartärerna till lungorna och tillbaka genom lungvenerna till vänster förmak. I lungorna tar blodet upp syre och lämnar koldioxid.",
        "Stora kretsloppet går från vänster kammare genom aorta och kroppens artärer till vävnaderna. Via venerna återvänder blodet till höger förmak. Kretsloppen är seriekopplade: samma blod passerar båda. Börja med riktningen, inte med färgen på en teckning. Lungartären för syrefattigt blod trots att den är en artär."
      ],
      "remember": "Höger → lungor → vänster → kropp → höger.",
      "check": "Till vilket förmak återkommer blodet från lungorna?",
      "answer": "Till vänster förmak via lungvenerna.",
      "page": "D1_P07"
    },
    {
      "title": "Artärer, kapillärer och vener",
      "goal": "Skilja kärlen efter riktning och funktion.",
      "body": [
        "Artärer leder blod bort från hjärtat, vener leder det tillbaka. Artärerna förgrenar sig i allt mindre kärl. Kapillärerna är de mycket tunna kärl där ämnen utbyts mellan blod och vävnad. Där lämnas syre och näring och tas avfall upp.",
        "Venernas tryck är lägre än artärernas. Venöst återflöde får hjälp av bland annat skelettmusklernas rörelser och venklaffar. När en muskel drar ihop sig kan den trycka på en ven och hjälpa blodet vidare; klaffarna motverkar att det rinner bakåt."
      ],
      "remember": "Artär bort, ven tillbaka, kapillär utbyte.",
      "check": "Är ett kärl en artär för att blodet är syrerikt?",
      "answer": "Nej. Artär betyder att kärlet leder blod bort från hjärtat.",
      "page": "D1_P09"
    },
    {
      "title": "Hjärtats elektriska dirigent",
      "goal": "Förstå sinusknutan och retledningssystemet.",
      "body": [
        "Hjärtats samordnade slag startar normalt i sinusknutan i höger förmak. Den bildar elektriska impulser som sprids genom förmaken så att de drar ihop sig. Impulsen förs vidare genom AV-knutan och retledningssystemet till kamrarna.",
        "Ordningen spelar roll: förmaken hjälper först till att fylla kamrarna, sedan pumpar kamrarna ut blodet. Sinusknutan är som en dirigent som ger starten. EKG registrerar hjärtats elektriska aktivitet från hudytan; det är inte en direkt bild av hur mycket blod som pumpas."
      ],
      "remember": "Elektrisk impuls först, muskelkontraktion sedan.",
      "check": "Vad har sinusknutan för huvuduppgift?",
      "answer": "Att starta hjärtats normala elektriska rytm.",
      "page": "D1_P04"
    },
    {
      "title": "Systole, diastole och puls",
      "goal": "Koppla hjärtats faser till puls och blodtryck.",
      "body": [
        "Systole är hjärtats kontraktionsfas och diastole dess avslappningsfas. När kamrarna drar ihop sig pumpas blod ut i artärerna. Under avslappningen fylls de inför nästa slag. Pulsen är den tryckvåg som kan kännas i en artär.",
        "I instuderingsfrågorna anges 60–80 slag per minut som ungefärlig vuxen vilopuls. Det är kursens riktvärde, inte en gräns som ensam avgör om någon är frisk. Ett blodtryck anges med två tal: det systoliska under kamrarnas arbete och det diastoliska under deras avslappning."
      ],
      "remember": "Systole = pumpning. Diastole = avslappning och fyllnad.",
      "check": "Vilken fas motsvarar det övre blodtrycksvärdet?",
      "answer": "Det systoliska trycket, när kamrarna drar ihop sig.",
      "page": "D1_P05"
    },
    {
      "title": "Blodets arbetslag",
      "goal": "Skilja plasma, röda och vita blodkroppar samt blodplättar.",
      "body": [
        "Blod består av en vätska, plasma, och blodceller. I plasman transporteras bland annat lösta ämnen och proteiner. Röda blodkroppar innehåller hemoglobin som binder syre; de kan därför leverera syre från lungorna till vävnaderna.",
        "Vita blodkroppar deltar i immunförsvaret. Blodplättar, trombocyter, hjälper till att stoppa blödningar genom att bilda en första plugg vid en kärlskada. Koagulationen förstärker sedan pluggen. Tänk leveransbud, försvarspersonal och reparatörer: olika uppgifter i samma blod."
      ],
      "remember": "Röda transporterar syre; vita försvarar; plättar stoppar blödning.",
      "check": "Vilken blodkomponent hjälper till att täppa till en kärlskada?",
      "answer": "Blodplättarna, tillsammans med koagulationssystemet.",
      "page": "D1_P10"
    },
    {
      "title": "Lymfan: tillbaka med överskottet",
      "goal": "Förstå lymfflöde, lymfnoder och mjälte.",
      "body": [
        "En del vätska lämnar blodets kapillärer och omger cellerna. Lymfkärlen samlar upp överskottsvätska; när den finns i lymfkärlen kallas den lymfa. Lymfan förs mot stora vener nära nyckelbenen och återgår till blodet. Lymfkärl i tarmen transporterar också upptaget fett.",
        "Lymfnoder filtrerar lymfan och är mötesplatser för immunförsvarets celler. Mjälten filtrerar i stället blod och bryter bland annat ned gamla röda blodkroppar. Lymfödem innebär att transportkapaciteten inte räcker och vätska samlas i vävnaden. Det är inte samma sak som alla andra orsaker till svullnad."
      ],
      "remember": "Lymfnoder filtrerar lymfa; mjälten filtrerar blod.",
      "check": "Var återförs lymfan till blodbanan?",
      "answer": "Till stora vener i området vid nyckelbenen.",
      "page": "D1_P12"
    },
    {
      "title": "Slagvolym och minutvolym",
      "goal": "Förstå hur mycket blod hjärtat pumpar.",
      "body": [
        "Slagvolym är den mängd blod en kammare pumpar ut vid ett slag. Minutvolym är mängden per minut. Den beror därför både på mängden i varje slag och på hur många slag som sker: minutvolym = slagvolym × hjärtfrekvens.",
        "Om slagvolymen är 70 ml och frekvensen 70 slag per minut blir minutvolymen 4900 ml, ungefär 4,9 liter per minut. Det är ett räkneexempel, inte ett krav på en viss puls. Under arbete kan hjärtat öka transporten genom större slagvolym och högre frekvens."
      ],
      "remember": "Mängd per slag × slag per minut = mängd per minut.",
      "check": "Vad är skillnaden mellan slagvolym och minutvolym?",
      "answer": "Slagvolym gäller ett slag; minutvolym gäller en minut.",
      "page": "D1_P06"
    },
    {
      "title": "Blodgrupper och transfusion",
      "goal": "Förstå varför blod behöver vara kompatibelt.",
      "body": [
        "Blodgrupper bygger på markörer på de röda blodkropparnas yta. ABO-systemet omfattar A, B, AB och O. Rh-systemet omfattar bland annat RhD; förekomst av den markören anges med plus och avsaknad med minus.",
        "Vid en transfusion behöver blodet passa mottagaren. Immunförsvaret kan reagera mot främmande markörer, och därför kontrolleras kompatibiliteten i vården. Skilj blodgrupp från blodvärde: blodgrupp beskriver markörer, medan blodvärde ofta syftar på hemoglobinkoncentrationen."
      ],
      "remember": "Blodgrupp handlar om markörer och immunologisk kompatibilitet.",
      "check": "Varför måste blodets kompatibilitet kontrolleras vid transfusion?",
      "answer": "Immunförsvaret kan reagera mot markörer på oförenliga röda blodkroppar.",
      "page": "D1_P11"
    }
  ],
  "heartdisease": [
    {
      "title": "När kärlväggen förändras",
      "goal": "Förstå ateroskleros och varför blodflödet kan hindras.",
      "body": [
        "Ateroskleros, ofta kallat åderförfettning, innebär att förändringar med bland annat fett och inflammatoriska processer bildar plack i artärväggen. Kärlet kan bli trängre och blodförsörjningen sämre. Om ett plack brister kan en blodpropp bildas.",
        "Tänk på ett rör som får en ojämn insida: problemet är både att passagen blir smalare och att en propp kan stoppa flödet. Om ett kranskärl drabbas kan hjärtmuskeln få syrebrist. Kranskärlen är hjärtats egen blodförsörjning; blodet inne i hjärtrummen räcker inte för muskelns försörjning."
      ],
      "remember": "Förträngning eller propp kan ge vävnaden syrebrist.",
      "check": "Varför kan sjukdom i kranskärlen skada hjärtat?",
      "answer": "Kranskärlen försörjer hjärtmuskeln med syre och näring.",
      "page": "D1_P15"
    },
    {
      "title": "För högt blodtryck",
      "goal": "Förstå vad blodtryck betyder och hur kursens gräns används.",
      "body": [
        "Blodtrycket är blodets tryck mot kärlväggen. Ett långvarigt förhöjt tryck belastar kärl och hjärta och kan skada organ. Högt blodtryck kan finnas utan tydliga symtom, därför behövs mätningar.",
        "Frågebladet anger blodtryck över 140/90 vid tre tillfällen. Lär dig det som kursuppgift, men skilj den från en individuell diagnos: bedömning beror även på mätmetod och situation. Ett enstaka mätvärde efter stress säger inte samma sak som upprepade vilomätningar. Systoliskt och diastoliskt tryck beskriver två faser, inte två olika blodsystem."
      ],
      "remember": "Förhöjt tryck belastar; upprepade mätningar ger bättre underlag.",
      "check": "Varför räcker inte symtom för att upptäcka högt blodtryck?",
      "answer": "Det kan förekomma utan tydliga symtom.",
      "page": "D1_P16"
    },
    {
      "title": "Kärlkramp och hjärtinfarkt",
      "goal": "Skilja tillfällig syrebrist från hjärtmuskelskada.",
      "body": [
        "Kärlkramp uppstår när hjärtmuskelns syrebehov inte möts av blodförsörjningen, ofta vid ansträngning. Det kan ge tryck eller smärta i bröstet. Vid hjärtinfarkt är blodflödet så påverkat att hjärtmuskel skadas. Ett stopp i ett kranskärl är en vanlig orsak.",
        "Instuderingsfrågorna lyfter ihållande bröstsmärta, utstrålning, andnöd, kallsvettning, illamående och oro. Alla får inte samma symtom. Kompletterande förklaring – ej direkt från kursmaterialet: vid misstänkta symtom på hjärtinfarkt ska man ringa 112. Det är inte en situation där man försöker behandla bröstsmärtan med massage."
      ],
      "remember": "Kärlkramp = syrebrist; infarkt = hjärtmuskelskada.",
      "check": "Vad skiljer en infarkt från enbart tillfällig syrebrist?",
      "answer": "Vid infarkt skadas hjärtmuskelvävnad.",
      "page": "D1_P19"
    },
    {
      "title": "Hjärtsvikt: när pumpen inte räcker",
      "goal": "Förklara olika symtom vid höger- och vänstersvikt.",
      "body": [
        "Hjärtsvikt betyder att hjärtats pumpfunktion inte räcker till på normalt sätt. Det innebär inte att hjärtat har slutat slå. När flödet bromsas kan trycket öka bakom den sviktande hjärthalvan och vätska ansamlas.",
        "Vid vänsterkammarsvikt kan blod stockas bakåt mot lungorna, vilket ger andfåddhet och ibland lungödem. Vid högerkammarsvikt kan det stockas bakåt mot kroppens vener och ge svullna ben och anklar. Sidorna påverkar varandra, så besvären kan överlappa. Förstå platsen för stockningen i stället för att bara memorera två symtomlistor."
      ],
      "remember": "Vänster: bakåt mot lungor. Höger: bakåt mot kropp.",
      "check": "Varför kan vänsterkammarsvikt ge andningsbesvär?",
      "answer": "Ökat tryck bakåt mot lungorna kan ge vätskeansamling där.",
      "page": "D1_P20"
    },
    {
      "title": "Blodpropp: trombos och emboli",
      "goal": "Följa hur en propp kan hamna i lungan.",
      "body": [
        "En trombos är en blodpropp som bildas på plats i ett kärl. Vid djup ventrombos sitter den i en djup ven, ofta i benet. Kursen beskriver svullnad, värme, rodnad och smärta i vaden som möjliga tecken. Tecknen är inte ett säkert facit för diagnos.",
        "Om en del lossnar och följer med blodet kallas den embolus. Från benets vener går vägen via höger hjärthalva till lungornas kärl. Där kan den fastna och orsaka lungemboli. Kompletterande förklaring – ej direkt från kursmaterialet: misstänkt blodpropp behöver snabb vårdbedömning. Massera inte ett område med misstänkt djup ventrombos."
      ],
      "remember": "Trombos bildas på plats; embolus färdas vidare.",
      "check": "Varför kan en propp i benets vener fastna i lungan?",
      "answer": "Venblodet går via höger hjärthalva till lungornas kärl.",
      "page": "D1_P23"
    },
    {
      "title": "Lymfödem och åderbråck",
      "goal": "Skilja nedsatt lymftransport från venproblem.",
      "body": [
        "Lymfödem är svullnad på grund av otillräcklig transport i lymfsystemet. Det kan följa efter skada, sjukdom, kirurgi eller strålbehandling. Vätska blir kvar när systemets transportförmåga inte räcker.",
        "Åderbråck handlar i stället om vidgade vener och ofta försämrad klafffunktion. Blodets återflöde påverkas och tyngdkänsla eller svullnad kan uppstå. Samma symtom, svullnad, kan alltså ha olika orsaker. Som massageterapeut behöver du förstå skillnaden och inte anta att alla svullnader ska behandlas på samma sätt."
      ],
      "remember": "Svullnad är ett tecken; orsaken kan vara lymfa, vener eller annat.",
      "check": "Är åderbråck och lymfödem samma sjukdom?",
      "answer": "Nej. Åderbråck gäller vener; lymfödem gäller otillräcklig lymftransport.",
      "page": "D1_P22"
    },
    {
      "title": "Lungödem: vätska där gaser ska bytas",
      "goal": "Förstå sambandet mellan hjärtsvikt och lungödem.",
      "body": [
        "Lungödem innebär vätskeansamling i lungorna. Vid vänsterkammarsvikt kan trycket öka bakåt i lungkretsloppet och vätska pressas ut. Vätskan försämrar gasutbytet; det är inte samma sak som vätska som finns normalt mellan lungsäcksbladen.",
        "Kursen beskriver akut kraftig andnöd, kallsvettning, blekhet, oro och ibland skummig upphostning. Akut lungödem kräver skyndsam sjukvård. Här behöver du förstå orsakskedjan från sviktande pump till tryckstegring, vätskeutträde och andningsbesvär."
      ],
      "remember": "Svag vänsterkammare → högre lungkärlstryck → vätska → sämre gasutbyte.",
      "check": "Är lungödem samma sak som lunginflammation?",
      "answer": "Nej. Lungödem är vätskeansamling; lunginflammation är inflammation i lungvävnaden, ofta vid infektion.",
      "page": "D1_P22"
    }
  ],
  "breathing": [
    {
      "title": "Luftens väg genom kroppen",
      "goal": "Följa luften från näsa till lungblåsa.",
      "body": [
        "Andningsorganen tar in syre och för bort koldioxid. Luften passerar näsa eller mun, svalg och struphuvud, sedan luftstrupe, bronker och mindre luftrör till lungblåsorna, alveolerna. De stora luftvägarna leder luften; alveolerna är platsen för gasutbytet.",
        "Näsan värmer, fuktar och renar inandningsluften och innehåller luktsinnesceller. Slem och flimmerhår hjälper till att fånga och föra bort partiklar. Struplocket hjälper till att skydda luftvägen när vi sväljer. Luft och mat passerar alltså delvis samma område men ska vidare åt olika håll."
      ],
      "remember": "Luftvägar leder; alveoler byter gaser.",
      "check": "Var sker gasutbytet med blodet?",
      "answer": "I alveolerna, lungblåsorna.",
      "page": "D1_P24"
    },
    {
      "title": "Lungor och lungsäck",
      "goal": "Förstå lungloberna och lungsäckens funktion.",
      "body": [
        "Vi har två lungor. Höger lunga har tre lober och vänster två. Inuti förgrenas luftrören som ett träd som slutar i mängder av små alveoler. Förgreningarna ger stor sammanlagd yta för gasutbyte.",
        "Varje lunga omges av lungsäckens två blad. Vätska mellan bladen minskar friktionen. Tryckförhållandena och kontakten mellan bladen gör att lungan följer bröstkorgens rörelser. Lungorna har ingen egen muskel som drar in luft: de vidgas när andningsmusklerna förändrar bröstkorgens volym."
      ],
      "remember": "Lungan följer bröstkorgen via lungsäcken.",
      "check": "Vilken lunga har tre lober?",
      "answer": "Höger lunga.",
      "page": "D2_P03"
    },
    {
      "title": "Gasutbyte: två riktningar",
      "goal": "Förstå diffusion mellan alveol och kapillär.",
      "body": [
        "Alveolens vägg och kapillärens vägg är mycket tunna. Syre diffunderar från alveolluften till blodet och koldioxid från blodet till alveolen. Diffusionen drivs av skillnader i gasernas partialtryck, det vill säga den del av trycket varje gas bidrar med.",
        "Syre binds till hemoglobin i röda blodkroppar. Koldioxid transporteras i flera former, huvudsakligen som bikarbonat, inte bara bunden direkt till blodkroppar. Lär dig därför riktningen först: syre in i blodet, koldioxid ut till luften. En stor yta och kort diffusionssträcka gör utbytet effektivt."
      ],
      "remember": "Syre: alveol → blod. Koldioxid: blod → alveol.",
      "check": "Varför är tunna väggar viktiga?",
      "answer": "Gaserna har en kort sträcka att diffundera över.",
      "page": "D2_P03"
    },
    {
      "title": "Inandning: skapa mer plats",
      "goal": "Förklara varför luft sugs in.",
      "body": [
        "Vid inandning kontraherar diafragma, mellangärdet, och sänks. Bröstkorgen vidgas också genom andningsmusklernas arbete. Lungorna följer med och deras volym ökar. Då sjunker trycket i lungorna i förhållande till omgivningen och luft strömmar in.",
        "Tänk på att dra ut en sprutas kolv: större utrymme sänker trycket och drar in innehåll. Vid ansträngning kan accessoriska andningsmuskler hjälpa till. De är extra hjälpmuskler, inte en separat lunga eller ett eget andningssystem."
      ],
      "remember": "Större volym → lägre tryck → luft in.",
      "check": "Vad händer med diafragma vid inandning?",
      "answer": "Den drar ihop sig och sänks, så brösthålans volym ökar.",
      "page": "D2_P04"
    },
    {
      "title": "Utandning och andningsrytm",
      "goal": "Skilja lugn utandning från aktiv utandning.",
      "body": [
        "Vid lugn utandning slappnar inandningsmusklerna av. Diafragma återgår uppåt och lungornas elastiska återfjädring minskar volymen. Trycket stiger och luften strömmar ut. Vid kraftig utandning kan bland annat bukmuskler hjälpa till.",
        "Kursfrågorna anger ungefär 12–15 andetag per minut hos en vuxen i vila. Det är ett riktvärde i underlaget; andningen varierar med exempelvis aktivitet. Inandningsluften innehåller ungefär 78 procent kväve, 21 procent syre och 1 procent andra gaser. Vi använder bara en del av det inandade syret."
      ],
      "remember": "Lugn utandning sker främst genom avslappning och återfjädring.",
      "check": "Behöver diafragma dra ihop sig för lugn utandning?",
      "answer": "Nej, den slappnar av och återgår uppåt.",
      "page": "D2_P04"
    },
    {
      "title": "Vem bestämmer andningen?",
      "goal": "Förstå hur andningscentrum anpassar ventilationen.",
      "body": [
        "Andningscentrum i hjärnstammen styr den automatiska andningsrytmen. Kemiska signaler om framför allt koldioxid och surhetsgrad hjälper kroppen att anpassa andningen. Receptorer i stora artärer kan också reagera på bland annat syrenivå.",
        "När cellerna arbetar mer bildas mer koldioxid och behovet av ventilation ökar. Sträckreceptorer ger information om lungornas utvidgning. Vi kan tillfälligt påverka andningen när vi talar, sjunger eller håller andan, men den automatiska regleringen fortsätter att anpassa den efter kroppens behov."
      ],
      "remember": "Andningen anpassas efter kemiska signaler och kroppens arbete.",
      "check": "Varför brukar andningen öka under arbete?",
      "answer": "Kroppen behöver mer syre och måste föra bort mer koldioxid.",
      "page": "D2_P05"
    }
  ],
  "lungdisease": [
    {
      "title": "Lunginflammation",
      "goal": "Koppla infektion i lungorna till symtom.",
      "body": [
        "Lunginflammation, pneumoni, är en inflammation i lungvävnaden som ofta orsakas av infektion. Bakterier och virus kan orsaka den; svamp förekommer också. När alveoler påverkas fungerar gasutbytet sämre och kroppen kan reagera med feber och sjukdomskänsla.",
        "Kursen beskriver hosta, trötthet, feber, andningssvårigheter och smärta vid djupandning. Behandlingen beror på orsaken och hur sjuk personen är. Antibiotika kan användas vid bakteriell infektion men hjälper inte mot virus i sig. En symtomlista räcker inte för att avgöra vilket smittämne det är."
      ],
      "remember": "Infektion kan påverka både gasutbyte och allmäntillstånd.",
      "check": "Varför är antibiotika inte ett automatiskt svar vid all lunginflammation?",
      "answer": "Eftersom orsaken kan vara virus eller annat; behandlingen måste anpassas.",
      "page": "D2_P07"
    },
    {
      "title": "KOL och emfysem",
      "goal": "Förstå långvarigt begränsat luftflöde.",
      "body": [
        "KOL betyder kroniskt obstruktiv lungsjukdom. Obstruktiv innebär att luftflödet är begränsat. Förändringar i små luftvägar och alveoler gör andningen mindre effektiv. Vid emfysem förstörs alveolväggar och lungornas elastiska återfjädring försämras.",
        "Kursen beskriver ökande andfåddhet, hosta och luftvägsinfektioner. Rökstopp är centralt. Kompletterande förklaring – ej direkt från kursmaterialet: behandling omfattar också luftrörsvidgande läkemedel och anpassad fysisk aktivitet; syrgas används efter individuell bedömning vid vissa svåra fall. Alla med KOL behöver alltså inte syrgas."
      ],
      "remember": "Trånga luftvägar och förändrade alveoler gör andningen svårare.",
      "check": "Hur kan förstörda alveolväggar försämra gasutbytet?",
      "answer": "Den fungerande ytan minskar och lungans struktur förändras.",
      "page": "D2_P08"
    },
    {
      "title": "Astma: trängre luftrör",
      "goal": "Förstå inflammation, kramp och varierande symtom.",
      "body": [
        "Astma är en inflammatorisk sjukdom i luftvägarna där luftrören kan bli trängre. Muskelkramp, svullen slemhinna och ökat slem bidrar till hindret. Därför kan andningen bli pipande, väsande eller tung. Besvären varierar över tid och kan utlösas av olika faktorer.",
        "Astma är inte alltid allergisk. Sjukdomshistoria, spirometri och PEF-mätning används för bedömning. Spirometri mäter lungfunktion medan PEF mäter högsta utandningsflöde. Allergitester kan hjälpa när allergi misstänks men är inte ensamma ett astmatest."
      ],
      "remember": "Inflammation + kramp + slem kan minska luftflödet.",
      "check": "Vad mäter PEF i stora drag?",
      "answer": "Det högsta flödet vid en kraftig utandning.",
      "page": "D2_P10"
    },
    {
      "title": "Astmaanfall och behandling",
      "goal": "Skilja luftrörsvidgning från inflammationsdämpning.",
      "body": [
        "Vid ett astmaanfall blir det svårare att föra luft genom luftrören. Luftrörsvidgande läkemedel hjälper genom att minska muskelkrampen. Kortison används för att dämpa inflammationen; det har en annan uppgift än att direkt vidga luftröret.",
        "I kursen används termen status astmaticus för ett svårt anfall som kvarstår trots behandling och kräver sjukhusvård. Lär dig sambandet: långvarigt kraftigt luftvägshinder kan hota gasutbytet. Som massageterapeut ska du inte försöka ersätta medicinsk behandling med en andningsövning eller massage vid ett svårt akut anfall."
      ],
      "remember": "Vidga luftrör och dämpa inflammation är olika behandlingsprinciper.",
      "check": "Varför har luftrörsvidgande läkemedel och kortison olika roller?",
      "answer": "Det ena minskar muskelkramp; det andra dämpar inflammation.",
      "page": "D2_P11"
    },
    {
      "title": "Jämför de tre sjukdomarna",
      "goal": "Skilja pneumoni, KOL och astma åt.",
      "body": [
        "Lunginflammation handlar främst om infektion och inflammation i lungvävnaden. KOL innebär långvarigt begränsat luftflöde med strukturella förändringar. Astma ger varierande luftvägshinder genom inflammation och sammandragning i luftrören.",
        "Hosta eller andfåddhet kan förekomma vid alla tre. Ett symtom är därför inte samma sak som en diagnos. Förstå vilken del av systemet som påverkas: alveolernas gasutbyte, luftvägarnas passage eller båda. Repetera gärna genom att själv förklara varje sjukdom med en mening innan du visar facit."
      ],
      "remember": "Samma symtom kan ha olika mekanismer.",
      "check": "Kan man avgöra sjukdomen enbart genom att någon hostar?",
      "answer": "Nej. Symtom behöver sättas i sammanhang och bedömas medicinskt.",
      "page": "D2_P12"
    }
  ],
  "urinary": [
    {
      "title": "Från njure till urinrör",
      "goal": "Placera urinorganen och följa urinens väg.",
      "body": [
        "Urinorganen är njurarna, urinledarna, urinblåsan och urinröret. Njurarna bildar urin. Urinledarna för den till blåsan, där den lagras tills den lämnar kroppen genom urinröret. Skilj urinledare från urinrör: de sitter på olika delar av vägen.",
        "Njurarna renar blodet men har fler uppgifter än att skapa avfallsvätska. De reglerar vätska, salter och syra–basbalans och påverkar blodtryck och blodbildning. Tänk på dem som en sorteringscentral som både kastar sådant kroppen inte behöver och sparar sådant den behöver behålla."
      ],
      "remember": "Njure → urinledare → blåsa → urinrör.",
      "check": "Vilken struktur leder urin från njuren till blåsan?",
      "answer": "Urinledaren.",
      "page": "D2_P14"
    },
    {
      "title": "Nefronet: filter och finjustering",
      "goal": "Förstå njurens minsta funktionella enhet.",
      "body": [
        "Njurens funktionella enhet kallas nefron. Det börjar med ett kärlnystan, glomerulus, i en kapsel. En del av blodets vätska och små lösta ämnen filtreras till kapseln. Blodceller och de flesta stora proteiner stannar normalt i blodbanan.",
        "Filtratet går vidare genom tubuli, små rör där innehållet justeras. Vatten och användbara ämnen tas tillbaka till blodet; vissa ämnen tillförs från blodet till tubuli. Det som återstår blir slutlig urin. Njurarna filtrerar alltså mycket mer vätska än den urinmängd vi faktiskt kissar ut."
      ],
      "remember": "Filtration först; återresorption och sekretion finjusterar.",
      "check": "Varför kissar vi inte ut allt som filtreras?",
      "answer": "Mycket vatten och nyttiga ämnen tas tillbaka till blodet.",
      "page": "D2_P16"
    },
    {
      "title": "Urinbildning i tre steg",
      "goal": "Skilja filtration, återresorption och sekretion.",
      "body": [
        "Filtration är passagen från blodet till nefronets början. Återresorption betyder att ämnen tas tillbaka från tubuli till blodet. Sekretion innebär att ämnen förs från blodet till tubuli. Riktningen är nyckeln till att inte blanda ihop orden.",
        "Tänk en sorteringsstation: först kommer ett stort blandat material in, sedan räddas användbara saker och ytterligare avfall läggs till. Slutlig urin innehåller vatten, salter och avfallsämnen i proportioner som beror på kroppens situation. Urinbildningen är därför reglerad, inte bara en passiv sil."
      ],
      "remember": "Till rör = filtration/sekretion; tillbaka till blod = återresorption.",
      "check": "Vad betyder återresorption?",
      "answer": "Att ämnen och vatten tas tillbaka från tubuli till blodet.",
      "page": "D2_P16"
    },
    {
      "title": "ADH och aldosteron",
      "goal": "Förstå hur hormoner hjälper kroppen att spara vatten och salt.",
      "body": [
        "ADH, antidiuretiskt hormon, ökar återupptaget av vatten i njurarna. När mer vatten återförs till blodet minskar urinmängden och urinen blir mer koncentrerad. Anti-diuretiskt kan du minnas som motverkar stor urinproduktion.",
        "Aldosteron ökar njurarnas återupptag av natrium och påverkar utsöndringen av kalium. Vatten kan följa natrium, vilket påverkar vätskevolymen. Hormonerna hjälper alltså kroppen att anpassa innehållet, men arbetar inte på exakt samma sätt. Kursfrågans formulering om salt- och vätskebalans blir lättare att minnas när du kopplar den till natrium."
      ],
      "remember": "ADH sparar vatten; aldosteron sparar natrium.",
      "check": "Vad händer med urinmängden när ADH ökar?",
      "answer": "Mer vatten tas tillbaka och urinmängden minskar.",
      "page": "D2_P17"
    },
    {
      "title": "Njurarna gör mer än urin",
      "goal": "Koppla njurfunktion till blodtryck och blodbildning.",
      "body": [
        "Njurarna påverkar blodtrycket bland annat genom reglering av vätska och genom reninsystemet. De bildar också erytropoetin, EPO, som stimulerar bildningen av röda blodkroppar i benmärgen.",
        "Njurarna medverkar dessutom i regleringen av kalcium och fosfat och aktiveringen av D-vitamin. När njurfunktionen försämras kan därför flera system påverkas samtidigt, inte bara urinmängden. Koppla tillbaka till cirkulationskapitlet: färre röda blodkroppar kan innebära sämre syretransport."
      ],
      "remember": "Njurarna påverkar vätska, tryck, blodbildning och mineralbalans.",
      "check": "Vilket njurhormon stimulerar bildning av röda blodkroppar?",
      "answer": "Erytropoetin, EPO.",
      "page": "D2_P15"
    },
    {
      "title": "Dehydrering och ödem",
      "goal": "Skilja vätskebrist från vätskeansamling i vävnad.",
      "body": [
        "Dehydrering betyder vätskebrist. Kursen beskriver minskad urinmängd, torra slemhinnor, trötthet, blodtryckssänkning och ibland förvirring. Kroppen försöker spara vatten, men symtomen beror på situation och svårighetsgrad.",
        "Ödem betyder vätskeansamling i vävnad. Svullna ben är ett exempel. Vid vissa ödem lämnar ett fingertryck en grop. Frågebladets ord diagnostisera är förenklat: en grop är ett tecken, inte en säker diagnos av orsaken, och alla ödem ger inte en grop. Svullnad kan bero på bland annat hjärta, njurar, vener eller lymfsystem."
      ],
      "remember": "Vätskebrist och vävnadssvullnad beskriver olika problem.",
      "check": "Visar en grop efter tryck säkert varför benet är svullet?",
      "answer": "Nej. Det är ett tecken på vissa ödem men säger inte orsaken.",
      "page": "D2_P20"
    },
    {
      "title": "Syra–basbalans: vad betyder pH?",
      "goal": "Förstå acidos, alkalos och kroppens reglering.",
      "body": [
        "pH beskriver hur sur eller basisk en lösning är. Blodets pH hålls inom ett snävt intervall. Buffertsystem kan binda eller avge vätejoner, lungorna reglerar koldioxid och njurarna reglerar bland annat syrautsöndring och bikarbonat.",
        "Acidos är en process som gör miljön surare; alkalos gör den mer basisk. Respiratorisk anger att förändringen börjar i ventilationen och koldioxiden. Metabolisk anger andra grundorsaker, exempelvis förändrad mängd syra eller bikarbonat. Orden hjälper dig att sortera både riktning och orsak."
      ],
      "remember": "Acidos = surare; alkalos = mer basisk.",
      "check": "Vilka två organ hjälper till att reglera syra–basbalansen?",
      "answer": "Lungorna och njurarna.",
      "page": "D2_P19"
    },
    {
      "title": "Respiratorisk och metabolisk förändring",
      "goal": "Skilja de fyra grundtyperna av syra–basrubbning.",
      "body": [
        "Vid otillräcklig ventilation kan koldioxid ansamlas och ge respiratorisk acidos. När ventilationen är större än kroppens behov vädras för mycket koldioxid ut och respiratorisk alkalos kan uppstå. Det avgörande är ventilationen i förhållande till behovet, inte om andetagen ser djupa ut.",
        "Metabolisk acidos kan exempelvis uppstå vid ketoacidos, när ketonsyror ansamlas. Det betyder inte att all diabetes ger acidos. Metabolisk alkalos kan uppstå när mycket magsyra förloras vid långvariga kräkningar. Minnesfrågan är: börjar förändringen i koldioxid/andning eller i andra syror och baser?"
      ],
      "remember": "CO₂ kvar = surare. CO₂ bort = mer basisk.",
      "check": "Vilken rubbning kan överdriven ventilation ge?",
      "answer": "Respiratorisk alkalos, eftersom för mycket koldioxid vädras ut.",
      "page": "D2_P21"
    },
    {
      "title": "Blåsan lagrar – njuren bildar",
      "goal": "Förstå blåstömningens grundprincip.",
      "body": [
        "Urinblåsan är en behållare med glatt muskulatur. Den samlar urinen som hela tiden kommer från njurarna via urinledarna. När blåsan fylls ger nervsignaler information om att den behöver tömmas.",
        "Vid tömning samordnas blåsmuskeln och slutningsmekanismerna runt urinröret så att urin kan passera ut. En del av kontrollen är automatisk och en del viljemässig. Skilj alltså urinproduktion i njuren från lagring och tömning i blåsan; problem med det ena behöver inte betyda problem med det andra."
      ],
      "remember": "Njurarna producerar; blåsan lagrar och tömmer.",
      "check": "Vilket organ bildar urinen och vilket lagrar den?",
      "answer": "Njurarna bildar urinen; urinblåsan lagrar den.",
      "page": "D2_P18"
    }
  ],
  "kidneydisease": [
    {
      "title": "Urinvägsinfektion och njurbäckeninflammation",
      "goal": "Skilja infektion i blåsan från infektion högre upp.",
      "body": [
        "En urinvägsinfektion orsakas ofta av bakterier som tar sig in via urinröret. När blåsan drabbas kallas det cystit. Sveda och täta trängningar är typiska symtom i kursens beskrivning. Urinprov kan hjälpa vården vid bedömningen.",
        "Om infektionen når njurbäckenet kallas det pyelonefrit, njurbäckeninflammation. Feber, sjukdomskänsla och smärta i sidan eller ryggen kan förekomma. Platsen för infektionen påverkar hur allvarlig situationen kan bli. Skilj också njurbäckeninflammation från glomerulonefrit, som gäller njurens filter."
      ],
      "remember": "Cystit = blåsa; pyelonefrit = njurbäcken.",
      "check": "Var sitter inflammationen vid cystit?",
      "answer": "I urinblåsan.",
      "page": "D2_P23"
    },
    {
      "title": "Njurinflammation: när filtret skadas",
      "goal": "Förstå glomerulonefrit.",
      "body": [
        "Glomerulonefrit är inflammation i glomeruli, njurarnas kärlnystan. När filtren skadas kan reningen försämras och ämnen som normalt stannar i blodet, exempelvis större proteiner och blodceller, komma ut i urinen.",
        "Kursboken beskriver blod och protein i urinen, minskad urinmängd, svullnad och ibland högt blodtryck. Det är följder av påverkat filter och vätskereglering. Urinprov och blodprov används i utredningen. Behandling beror på orsaken; njurinflammation är inte alltid samma sak som en bakteriell urinvägsinfektion."
      ],
      "remember": "Skadat filter kan läcka protein och blod till urinen.",
      "check": "Varför kan protein i urinen vara relevant vid njursjukdom?",
      "answer": "Det kan tyda på att njurens filtreringsbarriär är påverkad.",
      "page": "D3_P01"
    },
    {
      "title": "Urininkontinens",
      "goal": "Skilja ofrivilligt läckage från normal blåstömning.",
      "body": [
        "Urininkontinens betyder ofrivilligt urinläckage. Vid ansträngningsinkontinens kan läckage uppstå när trycket ökar, exempelvis vid hosta eller fysisk ansträngning. Vid trängningsinkontinens kommer en plötslig stark kissnödighet som är svår att hålla emot.",
        "Problemet kan ha olika orsaker och behöver bedömas utifrån sin typ. Kursboken tar upp bland annat bäckenbottenträning och blåsträning som behandlingsprinciper. De är inte samma övning: den ena tränar stöd och kontroll, den andra vanor och blåsfunktion."
      ],
      "remember": "Inkontinens = ofrivilligt läckage; olika typer kräver olika bedömning.",
      "check": "Vad menas med ansträngningsinkontinens?",
      "answer": "Läckage när buktrycket ökar, exempelvis vid hosta eller ansträngning.",
      "page": "D3_P02"
    },
    {
      "title": "Njursten: hinder på vägen",
      "goal": "Förstå hur en sten kan orsaka smärta och avflödesproblem.",
      "body": [
        "Njursten bildas när ämnen i urinen kristalliserar och samlas till stenar. En sten kan ligga i njuren eller föras ut i urinledaren. Om den hindrar urinens passage kan tryck byggas upp ovanför hindret och kraftig smärta uppstå.",
        "Kursen beskriver smärta i sidan som kan stråla mot ljumsken samt ibland blod i urinen och illamående. Behandling beror på stenens storlek, läge och konsekvenser; vissa passerar och andra behöver åtgärdas. Bilden visar mekaniken: ett hinder i ett tunt rör påverkar flödet uppströms."
      ],
      "remember": "Kristaller → sten → möjligt hinder och smärta.",
      "check": "Varför kan en liten sten i urinledaren ge kraftig smärta?",
      "answer": "Den kan hindra flödet och orsaka tryck och sammandragningar.",
      "page": "D3_P05"
    },
    {
      "title": "Njursvikt och dialys",
      "goal": "Förstå vad som händer när reningen inte räcker.",
      "body": [
        "Njursvikt innebär att njurarnas funktion är nedsatt. Avfallsämnen kan ansamlas och regleringen av vätska, salter och syra–basbalans påverkas. Akut njursvikt utvecklas snabbt, medan kronisk njursvikt utvecklas under längre tid.",
        "Vid svår njursvikt kan dialys användas för att avlägsna avfallsämnen och överskottsvätska. Hemodialys renar blodet via en apparat; peritonealdialys använder bukhinnan som utbytesyta. Dialys ersätter delar av njurfunktionen, men är inte samma sak som att njuren blir frisk igen."
      ],
      "remember": "Njursvikt påverkar både rening och reglering.",
      "check": "Vilka två saker avlägsnas bland annat vid dialys?",
      "answer": "Avfallsämnen och överskottsvätska.",
      "page": "D3_P07"
    },
    {
      "title": "Förstorad prostata och urinflöde",
      "goal": "Koppla prostatans läge till svårigheter att kissa.",
      "body": [
        "Prostatan ligger under urinblåsan runt den första delen av urinröret. När den förstoras kan passagen påverkas. Det kan ge svag stråle, startsvårigheter och känsla av att blåsan inte töms ordentligt.",
        "Godartad prostataförstoring är inte samma sak som prostatacancer. Platsen förklarar symtomen: ett organ som omger ett rör kan påverka rörets öppning. Koppla tillbaka till urinens väg och skilj detta hinder nära blåsan från en sten högre upp i urinledaren."
      ],
      "remember": "Prostatan omger urinröret och kan påverka passagen.",
      "check": "Varför kan prostataförstoring ge svag urinstråle?",
      "answer": "Förstoringen kan trycka på urinröret och öka motståndet.",
      "page": "D3_P08"
    }
  ]
};
