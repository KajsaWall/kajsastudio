// Pedagogiska, självständiga genomgångar. Sidreferenserna avser PDF-sidor i de fyra kursdelarna.
const L=(title,goal,body,remember,check,answer,page)=>({title,goal,body,remember,check,answer,page});
const LESSONS={
cell:[
 L('Från cell till organ','Förstå hur kroppen är organiserad.',[
  'Tänk på kroppen som flera nivåer som byggs ovanpå varandra: celler bildar vävnader, olika vävnader bildar organ och organ samarbetar i organsystem. En cell är den minsta levande byggstenen. Den behöver energi och näring, kan reagera på sin omgivning och utför särskilda uppgifter.',
  'En vävnad är en samling celler med liknande uppbyggnad och funktion. Ett organ, som huden eller magsäcken, innehåller flera sorters vävnader som tillsammans löser en större uppgift. Du behöver förstå skillnaden mellan nivåerna innan du lär dig enskilda detaljer.'
 ],'Cell → vävnad → organ → organsystem.','Vad skiljer en vävnad från ett organ?','En vävnad består av liknande celler med gemensam funktion; ett organ består av flera vävnader som samarbetar.','D1_P01'),
 L('Cellens gräns och innehåll','Känna igen cellmembran, cytoplasma och cellkärna.',[
  'Cellmembranet är cellens gräns mot omgivningen. Det är inte en tät plastpåse: vissa ämnen passerar genom membranet, andra behöver särskilda transportproteiner. På så vis kan cellen ta in sådant den behöver och göra sig av med restprodukter.',
  'Innanför membranet finns cytoplasman, där organellerna ligger. I cellkärnan finns arvsmassan, DNA, organiserad i kromosomer. De flesta av kroppens celler har normalt 46 kromosomer, medan könsceller har 23. DNA innehåller instruktioner för bland annat proteinbildning.'
 ],'Membran = gräns och transport. Kärna = arvsmassa.','Varför kan inte alla ämnen passera fritt genom cellmembranet?','Membranet är selektivt och reglerar vilka ämnen som släpps igenom, ibland med hjälp av transportproteiner.','D1_P02'),
 L('Transport genom membranet','Skilja diffusion från osmos.',[
  'Vid diffusion sprider sig partiklar från ett område med högre koncentration till ett med lägre, tills skillnaden minskar. Det kräver ingen aktiv pumpning. Syre och koldioxid kan till exempel röra sig över membran på detta sätt.',
  'Osmos handlar specifikt om vatten. Vatten rör sig genom ett halvgenomsläppligt membran mot den sida där koncentrationen av lösta ämnen är högre. Därför kan celler svälla eller krympa om omgivningens koncentration förändras. Aktiv transport är något annat: cellen använder energi för att flytta ämnen, ibland mot koncentrationsskillnaden.'
 ],'Diffusion: partiklar. Osmos: vatten. Aktiv transport: energi.','Vad är det som förflyttas vid osmos?','Vatten förflyttas genom ett halvgenomsläppligt membran.','D1_P02'),
 L('Organellerna som ett arbetslag','Förstå huvuduppgifterna hos fem organeller.',[
  'Mitokondrier omvandlar energi från näringsämnen till användbar energi för cellen. Celler med stort energibehov, till exempel muskelceller, har ofta många mitokondrier. Ribosomer bygger proteiner av aminosyror enligt instruktioner från arvsmassan.',
  'Det endoplasmatiska nätverket hjälper till med tillverkning och transport av ämnen. Golgiapparaten bearbetar, sorterar och packar molekyler som ska användas eller skickas vidare. Lysosomer innehåller nedbrytande enzymer och hjälper cellen att återvinna material. Organellerna samarbetar, de är inte separata små kroppar.'
 ],'Mitokondrie = energi; ribosom = protein; ER = tillverkning/transport; Golgi = sortering; lysosom = nedbrytning.','Vilken organell bygger proteiner?','Ribosomen.','D1_P03'),
 L('Celldelning: mitos och meios','Se varför kroppen behöver två sorters celldelning.',[
  'Vid mitos kopieras arvsmassan och en kroppscell delar sig till två dotterceller med i princip samma kromosomuppsättning. Mitos behövs för tillväxt och för att ersätta celler som slits ut eller skadas.',
  'Meios sker när könsceller bildas. Kromosomantalet halveras så att ägg och spermier normalt får 23 kromosomer var. När de förenas blir antalet normalt 46 igen. Meios skapar också genetisk variation. Stamceller är ännu inte fullt specialiserade och kan utvecklas till olika celltyper.'
 ],'Mitos: två liknande kroppsceller. Meios: könsceller med halvt kromosomantal.','Varför måste kromosomantalet halveras i könsceller?','För att två könsceller tillsammans ska ge ett normalt kromosomantal vid befruktning.','D1_P05'),
 L('Kroppens vävnader','Koppla vävnadstyp till uppgift.',[
  'Epitelvävnad täcker ytor och klär hålrum. Den kan skydda huden, ta upp ämnen i tarmen eller bilda körtlar. Stödjevävnad omfattar bland annat bindväv, fettväv, brosk och ben: den håller ihop, lagrar, skyddar och ger stadga.',
  'Muskelvävnad kan dra ihop sig och skapa rörelse. Skelettmuskler styrs huvudsakligen viljemässigt; glatt muskulatur arbetar bland annat i organväggar; hjärtmuskeln driver hjärtat. Nervvävnad tar emot och förmedlar signaler. Blod och lymfa räknas som flytande vävnader som transporterar ämnen och celler.'
 ],'Yta – stöd – rörelse – signal – transport är fem bra ledtrådar.','Vilken vävnad förmedlar impulser, och vilken skapar rörelse?','Nervvävnad förmedlar impulser och muskelvävnad skapar rörelse.','D1_P07')
],
skin:[
 L('Huden som skydd och sinnesorgan','Förstå varför huden gör mer än att bara täcka kroppen.',[
  'Huden skyddar mot omgivningen och hjälper kroppen att bevara vätska. Den deltar i temperaturreglering genom svettning och genom att blodflödet i huden förändras. Den registrerar beröring, tryck, värme, kyla och smärta via olika känselstrukturer.',
  'I huden bildas bland annat keratin, melanin och talg. UV-ljus bidrar till att huden kan bilda D-vitamin. Funktionerna hänger ihop: om hudbarriären skadas ökar risken för irritation och mikroorganismer får lättare att komma in.'
 ],'Skydd, temperatur, känsel och ämnesbildning.','Nämn två andra hudfunktioner än att vara ett yttre skydd.','Till exempel temperaturreglering och känsel.','D1_P10'),
 L('Tre lager, tre huvudroller','Kunna placera överhud, läderhud och underhud.',[
  'Överhuden (epidermis) är ytterst och består av epitel. Den yttersta delen bildar en skyddande hornbarriär. Melanocyter längre ned i överhuden bildar melanin, som påverkar pigmenteringen och ger ett visst skydd mot UV-strålning.',
  'Läderhuden (dermis) innehåller bindväv med kollagen och elastiska fibrer samt kärl, nerver, hårsäckar och körtlar. Underhuden (subcutis) innehåller bland annat fettväv och bindväv; den isolerar, dämpar stötar och fungerar som energireserv. Ordningen utifrån och in är viktigare än att först memorera alla detaljer.'
 ],'Överhud = barriär. Läderhud = kärl, nerver och körtlar. Underhud = isolering och dämpning.','I vilket hudlager finns hårsäckar och många blodkärl?','I läderhuden.','D1_P12'),
 L('Svett, talg och känsel','Förstå hur körtlar och receptorer hjälper huden.',[
  'Svett består huvudsakligen av vatten och salter. När svett avdunstar från huden försvinner värme, vilket hjälper kroppen att svalna. Mängden varierar kraftigt med temperatur och aktivitet; ett dagsvärde i kursfrågorna är därför bara en ungefärlig uppgift.',
  'Talg smörjer hud och hår. Känselreceptorer och fria nervändar reagerar på olika sorters påverkan, exempelvis beröring, tryck, temperatur och smärta. En varm hand mot huden och en vass stickning blir alltså olika signaler till nervsystemet.'
 ],'Svett kyler vid avdunstning; sinnesreceptorer informerar om omgivningen.','Varför kan svettning kyla huden?','När svetten avdunstar går värme åt, vilket kyler huden.','D1_P12'),
 L('Hår, naglar och slemhinnor','Se hur kroppens ytor skyddas på olika sätt.',[
  'Hår och naglar är strukturer som bildas från hudens celler och innehåller mycket keratin. Hår kan bidra till skydd och känsel, medan naglar skyddar fingertopparna och underlättar finmotoriken.',
  'Slemhinnor täcker inre ytor som står i kontakt med omvärlden, bland annat luftvägar, mag-tarmkanal och delar av urin- och könsorganen. Slem och andra lokala försvarsmekanismer hjälper till att fånga upp och avlägsna partiklar och mikroorganismer. Huden och slemhinnorna är därför också en del av immunförsvarets första linje.'
 ],'Hud täcker utsidan; slemhinnor klär många inre passager mot omvärlden.','Ge två platser där det finns slemhinnor.','Till exempel i luftvägarna och mag-tarmkanalen.','D1_P14')
],
tumor:[
 L('Vad är en tumör?','Förstå orden benign och malign.',[
  'Celler brukar dela sig under kontrollerade former. En tumör uppstår när celler växer på ett avvikande sätt och bildar en vävnadsmassa. Tumör betyder inte automatiskt cancer. Benign betyder godartad: en sådan tumör växer vanligen lokalt och sprider inte dottersvulster.',
  'Malign betyder elakartad. En malign tumör kan växa in i omgivande vävnad och sprida celler via blod eller lymfa. Det är den förmågan som gör cancersjukdomar särskilt allvarliga. Orden beskriver hur tumören beter sig, inte hur stor den ser ut.'
 ],'Benign = godartad. Malign = elakartad och kan sprida sig.','Kan en liten tumör vara malign?','Ja. Storleken ensam avgör inte om tumören är benign eller malign.','D1_P15'),
 L('Metastaser och spridning','Följa hur en dottersvulst kan uppstå.',[
  'En metastas är en dottersvulst. Celler från en malign tumör kan lossna, ta sig in i blod- eller lymfkärl och föras till en annan plats i kroppen. Om cellerna får fäste och börjar växa där kan en metastas bildas.',
  'Det är viktigt att skilja en metastas från en ny, oberoende tumör. Metastasen består av celler från ursprungstumören. Spridning via lymfa förklarar också varför lymfkörtlar ibland undersöks vid cancerutredning.'
 ],'Ursprungstumör → spridning via blod/lymfa → dottersvulst.','Vad menas med metastas?','En dottersvulst som bildas när cancerceller sprids från en ursprungstumör.','D1_P16'),
 L('Riskfaktorer och hudförändringar','Känna igen vad som behöver bedömas av vården.',[
  'Cancerutveckling kan påverkas av arv och miljö. Tobaksrökning är en viktig påverkbar riskfaktor för flera cancerformer. UV-strålning från sol och solarium ökar risken för hudcancer, särskilt malignt melanom.',
  'Ett födelsemärke som förändras i form, färg eller storlek, eller börjar blöda, behöver bedömas medicinskt. Man kan inte avgöra diagnosen genom massage eller genom att bara titta snabbt. I vården kan förändringen undersökas och vid behov tas bort för vävnadsanalys.'
 ],'Lär dig varningstecken – ställ inte diagnos själv.','Vad är klokt att göra om en pigmentfläck tydligt förändras?','Låta vården bedöma den.','D1_P18'),
 L('Behandling och yrkesroll','Skilja medicinsk utredning från massageterapeutens roll.',[
  'Cancerbehandling kan omfatta kirurgi, strålbehandling och läkemedel, beroende på diagnos och stadium. Kursens poäng här är framför allt att känna till principerna och förstå när en förändring inte hör hemma i en massagebedömning.',
  'En massageterapeut utreder inte misstänkt cancer och masserar inte över en oklar, förändrad hudförändring. Uppmana i stället klienten att söka medicinsk bedömning. Vid en känd cancersjukdom behöver behandling anpassas individuellt i samråd med ansvarig vård.'
 ],'Upptäck en signal, men låt sjukvården utreda.','Vilken är din roll vid en misstänkt hudförändring?','Att inte ställa diagnos eller behandla över förändringen, utan rekommendera vårdkontakt.','D1_P19')
],
skinconditions:[
 L('När huden blir sjuk','Skilja inflammation från infektion.',[
  'Hudbesvär kan bero på inflammation utan smitta, på infektion med mikroorganismer eller på andra orsaker. Rodnad och klåda räcker alltså inte för att avgöra om något smittar. Kursavsnittet tar upp bland annat eksem, psoriasis och hudinfektioner.',
  'För en massageterapeut är den praktiska första frågan hur huden ser ut och känns: är den hel, sårig, vätskande eller tydligt inflammerad? Undvik direkt behandling på skadad eller misstänkt infekterad hud och hänvisa vid osäkerhet till vården.'
 ],'Liknande utslag kan ha olika orsak.','Är all rodnad i huden ett tecken på smitta?','Nej. Rodnad kan till exempel bero på inflammation utan infektion.','D1_P20'),
 L('Eksem och hudbarriären','Förstå varför torr, irriterad hud kan klia.',[
  'Eksem är ett inflammatoriskt hudtillstånd. Huden kan bli torr, röd, kliande och ibland sprucken eller vätskande. När barriären inte fungerar som vanligt kan ämnen i omgivningen lättare irritera huden, och kliande kan förvärra skadan.',
  'Eksem i sig smittar inte. Däremot kan sprucken hud bli mer mottaglig för infektion. En massage på ett öppet eller kraftigt irriterat område kan göra ont och reta huden ytterligare. Anpassa beröringen och undvik det utsatta området.'
 ],'Eksem = inflammation och störd barriär, inte en smitta.','Varför bör ett sprucket eksemområde lämnas i fred vid massage?','Hudbarriären är skadad och området kan bli ytterligare irriterat eller smärta.','D1_P20'),
 L('Psoriasis','Förstå skov och skilja från smittsam hudsjukdom.',[
  'Psoriasis är en långvarig inflammatorisk sjukdom som ofta går i skov: symtomen kan bli tydligare en period och lugnare en annan. Typiska hudförändringar är välavgränsade röda områden med fjällning, ofta på armbågar, knän eller i hårbotten.',
  'Psoriasis smittar inte. Det betyder inte att alla områden alltid är lämpliga att massera: hudens känslighet, sprickor och klientens upplevelse spelar roll. Jämför med eksem: båda är inflammatoriska, men har olika typiska mönster och behandlas medicinskt på olika sätt.'
 ],'Psoriasis kan fjälla, men smittar inte.','Smittar psoriasis genom beröring?','Nej.','D1_P21'),
 L('Infektioner i huden','Känna igen när hygien och hänvisning är viktigast.',[
  'Bakterier, virus och svampar kan ge hudinfektioner. Tecknen varierar, men rodnad, värme, ömhet, var, blåsor eller spridning kan ge anledning till misstanke. Man kan inte avgöra exakt orsak genom utseendet ensam.',
  'Undvik att behandla ett infekterat område och följ god hand- och redskapshygien. Vid allmänpåverkan, feber eller snabbt tilltagande besvär behövs medicinsk bedömning. Tänk ”skydda huden och bryt smittvägar”, inte ”massera bort besväret”.'
 ],'Infektion kräver annan hantering än enbart känslig hud.','Vad gör du med ett område som verkar infekterat?','Undviker att massera där och rekommenderar medicinsk bedömning vid behov.','D1_P22')
],
gut:[
 L('Födans resa genom kroppen','Få en karta över mag-tarmkanalen.',[
  'Maten passerar i ordning genom munhåla, svalg, matstrupe, magsäck, tunntarm, tjocktarm och ändtarm. Organen arbetar tillsammans för att sönderdela maten, ta upp näring och vätska samt göra sig av med det som blir kvar.',
  'Till mag-tarmkanalen hör också organ som hjälper till utan att maten passerar genom dem: spottkörtlar, lever, gallblåsa och bukspottskörtel. Munnen påbörjar både mekanisk bearbetning med tänderna och kemisk nedbrytning med salivens enzymer.'
 ],'Följ maten i rätt ordning innan du lär dig enzymerna.','Passerar maten genom levern?','Nej. Levern hjälper matsmältningen, men maten passerar genom mag-tarmkanalen.','D1_P23'),
 L('Mun, matstrupe och peristaltik','Förstå hur maten når magsäcken.',[
  'I munnen tuggas maten och blandas med saliv. Saliven gör maten lättare att svälja och innehåller amylas, som börjar bryta ned stärkelse. Tungan hjälper till att forma en tugga som kan sväljas.',
  'Matstrupen transporterar sedan födan till magsäcken med peristaltik: samordnade vågor av muskelsammandragningar i väggen. Det är alltså inte bara tyngdkraften som flyttar maten. Samma grundprincip används även längre ned i mag-tarmkanalen.'
 ],'Peristaltik = muskelvågor som för innehållet framåt.','Hur rör sig maten genom matstrupen?','Med peristaltiska muskelsammandragningar.','D2_P01'),
 L('Magsäcken','Koppla sur miljö till bearbetning och proteinnedbrytning.',[
  'Magsäcken knådar och blandar födan med magsaft. Saltsyra gör miljön sur, vilket hjälper till att döda många mikroorganismer och aktiverar pepsin från dess förstadium pepsinogen. Pepsin börjar bryta ned proteiner till mindre delar.',
  'Magsäcken släpper inte allt vidare på en gång. Innehållet portioneras till tolvfingertarmen, den första delen av tunntarmen. Exakt tid i magsäcken varierar med måltidens sammansättning; kursfrågornas siffra är en ungefärlig minnespunkt, inte en fast klocka.'
 ],'Syra + omrörning + pepsin förbereder maten för tunntarmen.','Vilket enzym börjar bryta ned protein i magsäcken?','Pepsin.','D2_P01'),
 L('Tunntarmen: nedbrytning och upptag','Se varför tunntarmen är central.',[
  'I tolvfingertarmen blandas maginnehållet med bukspott och galla. Bukspott innehåller bikarbonat som neutraliserar syra och enzymer som hjälper till att bryta ned kolhydrater, fett och protein. Galla hjälper framför allt till att finfördela fett så att enzymer kan arbeta effektivt.',
  'Längre genom tunntarmen tas nedbrutna näringsämnen upp genom slemhinnan. Veck, tarmludd och mikrovilli ger en stor upptagsyta. Näringen förs sedan vidare via blod och lymfa. Skilj alltså ”bryta ned” från ”ta upp”: båda sker här, men är olika steg.'
 ],'Tolvfingertarm = bukspott och galla; tunntarm = stor yta för näringsupptag.','Var tömmer sig galla och bukspott?','I tolvfingertarmen.','D2_P03'),
 L('Tjocktarmen och normalfloran','Förstå vad som händer efter näringsupptaget.',[
  'När innehållet når tjocktarmen har mycket av näringen redan tagits upp. Tjocktarmen återtar framför allt vatten och elektrolyter. Innehållet blir gradvis fastare och transporteras mot ändtarmen.',
  'Tarmens mikroorganismer utgör en normalflora. De samspelar med kroppen och kan bland annat bidra till bildning av vissa vitaminer, exempelvis K-vitamin. Normalflora är inte samma sak som infektion: många mikroorganismer hör hemma där de finns.'
 ],'Tunntarm tar främst upp näring; tjocktarm tar upp mycket vatten.','Vad är tjocktarmens viktigaste upptagningsuppgift?','Att återta vatten och salter från tarminnehållet.','D2_P04'),
 L('Lever, galla och bukspottkörtel','Känna igen hjälporganens olika roller.',[
  'Levern har många uppgifter: den bearbetar och lagrar näringsämnen, bildar galla, framställer viktiga blodproteiner och bryter ned eller omvandlar olika ämnen. Galla lagras och koncentreras i gallblåsan innan den töms mot tolvfingertarmen vid behov.',
  'Bukspottskörteln har två sorters funktion. Exokrin funktion betyder att den skickar bukspott med enzymer och bikarbonat till tarmen. Endokrin funktion betyder att den utsöndrar hormoner, bland annat insulin och glukagon, till blodet för att reglera blodsocker. Samma organ kan alltså både göra matsmältningsvätska och hormoner.'
 ],'Lever bildar galla; gallblåsa lagrar den; bukspottkörtel ger enzymer och hormoner.','Vad skiljer bukspottskörtelns exokrina från dess endokrina funktion?','Exokrin: bukspott till tarmen. Endokrin: hormoner till blodet.','D2_P05')
],
gutconditions:[
 L('Symtom är inte samma sak som diagnos','Skilja dyspepsi från gastrit.',[
  'Dyspepsi beskriver besvär från övre delen av magen, till exempel obehag, tidig mättnad, illamående eller sveda. Gastrit betyder inflammation i magsäckens slemhinna. Liknande symtom kan ha olika orsaker, så man ska inte likställa ordet ”magkatarr” med en säkerställd inflammation.',
  'En möjlig orsak till gastrit är bakterien Helicobacter pylori; vissa läkemedel och andra faktorer kan också påverka slemhinnan. Diagnos och behandling hör till sjukvården. För studierna: håll isär symtombeskrivningen och den faktiska vävnadsförändringen.'
 ],'Dyspepsi = symtombild. Gastrit = inflammation i slemhinnan.','Betyder dyspepsi automatiskt att magsäckens slemhinna är inflammerad?','Nej.','D2_P09'),
 L('Appendicit och gallsten','Placera två tillstånd på rätt ställe.',[
  'Appendix är ett litet bihang vid övergången mellan tunntarm och tjocktarm. Appendicit är inflammation i detta bihang. Besvären kan förändras över tid och behöver medicinsk bedömning; massage är inte en metod för att utreda akut buksmärta.',
  'Gallsten uppstår i gallblåsan eller gallvägarna och kan ge smärta om gallans flöde hindras. Kom ihåg anatomin: levern bildar galla, gallblåsan lagrar den och gallvägarna leder den mot tolvfingertarmen.'
 ],'Appendix hör till tarmen; gallsten hör till gallsystemet.','Vilket organ bildar galla och vilket lagrar den?','Levern bildar galla och gallblåsan lagrar den.','D2_P11'),
 L('Divertiklar','Skilja förekomst från inflammation.',[
  'Divertiklar är små utbuktningar i tarmväggen, oftast i tjocktarmen. Att ha divertiklar kallas divertikulos och behöver inte ge symtom. När en divertikel blir inflammerad kallas tillståndet divertikulit.',
  'Skillnaden mellan ändelserna är användbar: -os beskriver här förekomst av tarmfickor, medan -it markerar inflammation. Buksmärta tillsammans med exempelvis feber kan behöva bedömas i vården.'
 ],'Divertikulos = tarmfickor. Divertikulit = inflammerad tarmficka.','Vilket av orden betyder inflammation?','Divertikulit.','D2_P12'),
 L('IBD och hemorrojder','Hålla isär kronisk tarminflammation och lokala ändtarmsbesvär.',[
  'IBD står för inflammatorisk tarmsjukdom. De viktigaste formerna i kursen är Crohns sjukdom och ulcerös kolit. De kan ge återkommande perioder av inflammation, men sitter och sprider sig på olika sätt i tarmen. IBD är inte samma sak som IBS, som är en annan typ av tarmbesvär.',
  'Hemorrojder är förstorade kärlkuddar vid ändtarmen och kan ge lokala besvär som blödning eller klåda. Samma symtom kan ha andra orsaker, så blod i avföringen ska inte automatiskt förklaras med hemorrojder utan medicinsk bedömning.'
 ],'IBD = inflammatorisk tarmsjukdom. Hemorrojder = lokalt kärlrelaterat besvär.','Nämn de två viktigaste IBD-formerna i kursen.','Crohns sjukdom och ulcerös kolit.','D2_P13')
],
micro:[
 L('Vad är en mikroorganism?','Skilja grupperna från varandra.',[
  'Mikroorganism är ett samlingsnamn för mycket små organismer. I kursen möter du framför allt bakterier, svampar och protozoer; virus behandlas tillsammans med dem men räknas inte som självständigt levande celler. Alla mikroorganismer är inte skadliga – många ingår i normalfloran.',
  'En bakterie är en encellig organism som kan växa och dela sig under lämpliga förhållanden. Ett virus behöver en levande värdcell för att göra nya viruspartiklar. Svampar kan förekomma som jäst eller trådformiga strukturer, medan protozoer är encelliga eukaryota organismer.'
 ],'Bakterie = egen cell. Virus = beroende av värdcell.','Vilken av grupperna måste använda en värdcell för att föröka sig?','Virus.','D2_P17'),
 L('Bakteriers uppbyggnad och tillväxt','Förstå varför miljön spelar roll.',[
  'Bakterier har arvsmassa och cellmembran, ofta även en cellvägg. De kan föröka sig genom delning. Hur snabbt de växer beror på art och miljö: tillgång till näring och vatten, temperatur, pH och ibland syre spelar roll. Alla bakterier trivs inte vid exakt samma temperatur eller med samma syretillgång.',
  'Mutation är en förändring i arvsmassan. Tillsammans med urval kan mutationer bidra till att egenskaper förändras, exempelvis antibiotikaresistens. Resistens betyder att ett läkemedel inte längre fungerar mot bakterien som avsett; det betyder inte att människan har blivit resistent.'
 ],'Tillväxt kräver rätt förhållanden; resistens är en egenskap hos mikroben.','Vad betyder bakteriemutation?','En förändring i bakteriens arvsanlag.','D2_P19'),
 L('Virus och svamp','Jämföra två helt olika förökningssätt.',[
  'Ett virus består av genetiskt material omslutet av proteiner och ibland ett yttre hölje. Det tar sig in i en värdcell och använder cellens maskineri för att producera nya viruspartiklar. Antibiotika, som riktas mot bakterier, hjälper inte mot virusinfektioner.',
  'Svampar är celler med annan uppbyggnad än bakterier. Jästsvampar kan föröka sig genom knoppning, medan många trådformiga svampar sprids med sporer. Svamp kan vara en del av normalfloran men också ge infektion, till exempel på hud eller slemhinna.'
 ],'Virus lånar en cell; svamp är själv uppbyggd av celler.','Varför kan inte ett virus föröka sig fritt på en ren bänk?','Det behöver en levande värdcell för att bilda nya viruspartiklar.','D2_P22'),
 L('Normalflora och sjukdom','Förstå varför platsen och balansen spelar roll.',[
  'Normalfloran är de mikroorganismer som normalt lever på och i kroppen, särskilt på hud och slemhinnor. Den kan konkurrera med sjukdomsframkallande mikrober om utrymme och näring. Samma bakterie kan vara harmlös på ett ställe men skapa problem om den hamnar i en annan vävnad.',
  'Sjukdom uppstår inte bara för att en mikrob finns. Mängd, mikroorganismens egenskaper, inträdesport och värdens försvar påverkar. Det är därför hygienrutiner handlar om att bryta smittvägar, inte om att göra hela kroppen fri från mikroorganismer.'
 ],'Mikrober kan vara nyttiga, neutrala eller sjukdomsframkallande beroende på sammanhang.','Betyder ”bakterie” alltid ”sjukdom”?','Nej. Många bakterier tillhör normalfloran.','D2_P24')
],
spread:[
 L('Från exponering till infektion','Skilja smitta, infektion och sjukdom.',[
  'Smitta beskriver att ett smittämne förs från en källa till en mottaglig person. Om mikroorganismen får fäste och förökar sig har en infektion uppstått. Personen behöver inte alltid känna sig sjuk: infektion och tydliga symtom är inte samma sak.',
  'Hur lätt sjukdom uppstår beror både på mikroben och på kroppens försvar. Virulens är ett ord för en mikroorganisms förmåga att orsaka sjukdom eller dess sjukdomsframkallande styrka. Normalflora och intakta hud- och slemhinnebarriärer kan göra det svårare för främmande mikrober att få fäste.'
 ],'Överföring → fäste/förökning → eventuellt symtom.','Vad krävs enligt kursen för att tala om en infektion?','Att en mikroorganism fått fäste och börjat föröka sig.','D3_P02'),
 L('Fem smittvägar','Känna igen hur mikrober flyttas.',[
  'Kontaktsmitta kan ske direkt mellan människor eller indirekt via händer och föremål. Luftburen spridning innebär att smittämnen kan föras med partiklar i luften. Vatten och livsmedel kan föra smittämnen till munnen och mag-tarmkanalen.',
  'Djur och insekter kan föra vidare vissa infektioner. Inokulationssmitta innebär att smittämnen förs in genom hudbarriären, exempelvis vid stick. I vård och behandling är rena händer, rena ytor och säker hantering av vassa föremål konkreta sätt att bryta olika länkar i kedjan.'
 ],'Kontakt, luft, mat/vatten, djur/insekter, stick.','En smittad hand tar i ett dörrhandtag som någon annan sedan rör: vilken väg?','Indirekt kontaktsmitta.','D3_P04'),
 L('Endemi, epidemi, pandemi','Förstå att orden beskriver spridningsmönster.',[
  'Endemisk betyder att en sjukdom finns stadigvarande i ett visst område eller en befolkning. En epidemi är när antalet fall ökar mer än väntat under en viss tid och på en viss plats. Pandemi är en epidemi med mycket omfattande spridning över länder eller världsdelar.',
  'Det är alltså inte en enkel storlekstrappa där endemi bara betyder ”liten epidemi”. Instuderingsbladets formulering om endemi är missvisande; lär dig den etablerade definitionen. Ett enstaka fall av en ovanlig sjukdom kan i vissa sammanhang vara ett utbrott, medan en endemisk sjukdom kan förekomma regelbundet.'
 ],'Endemi = stadigvarande; epidemi = fler än väntat; pandemi = mycket vid spridning.','Är endemi samma sak som att många plötsligt blir sjuka i ett litet område?','Nej. Endemi handlar om stadigvarande förekomst.','D3_P03'),
 L('Smittkedjan i praktiken','Tillämpa kunskapen i ett behandlingsrum.',[
  'Tänk i länkar: smittämne, källa, utgång från källan, smittväg, inträdesport och mottaglig person. Bryter man en länk minskar risken för överföring. Handhygien kan bryta indirekt kontaktsmitta; att avstå behandling vid pågående infektion kan också vara nödvändigt.',
  'En massageterapeut behöver fråga och observera utan att ställa medicinsk diagnos. Feber, allmän sjukdomskänsla eller tydliga tecken på aktiv infektion är skäl att skjuta upp behandlingen och vid behov hänvisa till vård enligt utbildningens riktlinjer.'
 ],'Fråga alltid: varifrån, hur vidare och in genom vad?','Varför hjälper handhygien mot indirekt kontaktsmitta?','Den minskar risken att mikrober förs vidare via händer och föremål.','D3_P05')
],
hygiene:[
 L('Basala hygienrutiner','Förstå syftet före detaljerna.',[
  'Basala hygienrutiner är grundåtgärder som används för att minska smittspridning vid vård och behandling. De omfattar bland annat handhygien, lämpliga arbetskläder och skyddsutrustning när situationen kräver det. Rutinerna gäller även när en person inte verkar sjuk, eftersom smitta inte alltid är synlig.',
  'Händer desinfekteras vid relevanta moment före och efter kontakt. Tvål och vatten behövs när händerna är synligt smutsiga och i vissa särskilda smittsituationer. Följ aktuella lokala riktlinjer; kursbladets ”tvätta och sprita före och efter varje arbetsuppgift” är en förenkling.'
 ],'Hygienrutinen ska bryta smittvägar varje gång, inte bara vid känd smitta.','Varför används basala rutiner även när klienten ser frisk ut?','En smitta eller bärarskap kan finnas utan tydliga symtom.','D3_P09'),
 L('Rengöring, desinfektion, sterilisering','Kunna nivåerna i rätt ordning.',[
  'Rengöring avlägsnar smuts och en del mikroorganismer från en yta eller ett föremål. Det är ett viktigt första steg, eftersom smuts kan hindra efterföljande desinfektion. Desinfektion minskar mängden livskraftiga smittämnen till en nivå som inte ska orsaka smitta i den avsedda användningen.',
  'Sterilisering är en kontrollerad process som gör ett föremål fritt från livskraftiga mikroorganismer. Man steriliserar inte en hel behandlingslokal genom att bara torka av ytor. Vilken nivå som behövs beror på hur ett föremål används och vilka hygienkrav som gäller.'
 ],'Först rent, sedan vid behov desinfekterat eller sterilt.','Vilket steg tar i första hand bort synlig smuts?','Rengöring.','D3_P11'),
 L('Skyddsutrustning och arbetsmiljö','Välja skydd utifrån risk.',[
  'Handskar, plastförkläde och ansiktsskydd används när det finns risk för kontakt med kroppsvätskor eller stänk, enligt verksamhetens rutiner. Handskar ersätter inte handdesinfektion och kan själva bli förorenade. Skydd tas av på ett sätt som inte sprider smitta vidare.',
  'Rena arbetskläder, korta ärmar när hand- och underarmshygien krävs samt korta rena naglar underlättar god hygien. För en massageklinik behöver rutinerna anpassas till verksamheten och aktuella krav; huvudprincipen är att skydda både klient och behandlare.'
 ],'Skydd är situationsbundet; handhygien är grundläggande.','Kan engångshandskar ersätta handhygien?','Nej. Händerna behöver fortfarande hanteras enligt hygienrutinerna.','D3_P10'),
 L('Resistenta bakterier och smittskydd','Förstå ord som MRB och varför rutiner följs.',[
  'MRB är en samlingsbeteckning för multiresistenta bakterier. Resistens gör vissa antibiotika mindre användbara, men betyder inte att vanliga hygienprinciper slutar fungera. Rätt handhygien, rengöring och verksamhetens smittskyddsrutiner är centrala.',
  'Smittskydd handlar både om att förebygga spridning och om regler för hantering av vissa sjukdomar. Folkhälsomyndigheten och vårdens smittskyddsfunktioner har olika roller i övervakning och vägledning. Detaljer i lagstiftning och hygienföreskrifter kan ändras, så använd aktuella officiella riktlinjer i praktiken.'
 ],'Resistens gäller antibiotika – inte behovet av att bryta smittvägar.','Vad betyder MRB i kursens sammanhang?','Multiresistenta bakterier.','D3_P12')
],
immune:[
 L('Första försvarslinjen','Se hur barriärerna stoppar intrång.',[
  'Hud och slemhinnor är kroppens yttre försvar. Hel hud är svår för många mikrober att passera. Slem, flimmerhår, tårvätska och olika kemiska miljöer kan fånga upp eller hämma mikroorganismer. Magsäckens sura miljö är ytterligare ett exempel.',
  'Normalfloran konkurrerar med främmande mikrober om plats och näring. Detta är delar av det ospecifika, medfödda försvaret: de fungerar brett och behöver inte först lära känna just en viss mikrob.'
 ],'Barriär + normalflora + kemisk miljö = tidigt försvar.','Varför kan ett öppet sår öka infektionsrisken?','Hudbarriären är bruten och mikroorganismer får lättare att nå vävnaden.','D3_P15'),
 L('Inflammation','Förstå de klassiska tecknen och varför de uppstår.',[
  'Inflammation är kroppens reaktion på skada eller ett hot. Blodkärl vidgas och blir mer genomsläppliga så att immunceller och ämnen kan nå området. Det bidrar till rodnad, värme och svullnad. Smärta och nedsatt funktion kan följa av svullnad och signalämnen.',
  'De fem klassiska tecknen är rodnad, värmeökning, svullnad, smärta och nedsatt funktion. En infektion kan utlösa inflammation, men inflammation kan också uppstå utan mikroorganismer, exempelvis efter en vävnadsskada.'
 ],'Inflammation är en reaktion; infektion innebär mikroorganismer.','Är en inflammation alltid en infektion?','Nej. Inflammation kan uppstå även utan mikroorganismer.','D3_P16'),
 L('Vita blodkroppar och fagocytos','Se vad som händer på platsen för ett angrepp.',[
  'Vita blodkroppar har flera försvarsuppgifter. Vissa kan röra sig till ett skadat eller infekterat område och omsluta samt bryta ned mikroorganismer. Det kallas fagocytos, från ord som betyder ”äta cell”.',
  'Var kan bestå av döda immunceller, mikroorganismer, vävnadsrester och vätska. Lymfkörtlar fungerar som kontrollstationer där immunceller möter ämnen från vävnadsvätska. Större grupper finns bland annat på halsen, i armhålorna och ljumskarna.'
 ],'Fagocytos = celler tar upp och bryter ned främmande material.','Vad gör en fagocyterande vit blodkropp?','Den omsluter och bryter ned exempelvis mikroorganismer.','D3_P17'),
 L('Antigen, antikropp och minne','Förstå det specifika försvaret.',[
  'Ett antigen är en struktur som immunförsvaret kan känna igen. Vissa vita blodkroppar, särskilt B-celler, kan bilda antikroppar som binder specifikt till ett antigen. Andra immunceller samordnar eller angriper infekterade celler.',
  'Efter en infektion eller vaccination kan minnesceller finnas kvar. Vid ett nytt möte med samma smittämne kan immunförsvaret då reagera snabbare. Minnet är specifikt: skydd mot ett antigen ger inte automatiskt skydd mot alla andra mikrober.'
 ],'Antigen känns igen; antikropp binder; minnescell hjälper nästa gång.','Varför kan ett andra möte med samma smittämne ge snabbare svar?','Immunologiska minnesceller kan finnas kvar från det första mötet.','D3_P17'),
 L('Aktiv och passiv immunisering','Skilja eget immunsvar från färdiga antikroppar.',[
  'Aktiv immunisering betyder att kroppen själv bygger upp ett immunsvar, till exempel efter vaccination eller genomgången infektion. Då kan minnesceller bildas och bidra till skydd över tid.',
  'Passiv immunisering betyder att färdiga antikroppar överförs till en person. Exempel är antikroppar från mor till barn och särskild antikroppsbehandling. Det kan ge snabb effekt men ger vanligen inte samma långvariga immunologiska minne som ett eget aktivt svar.'
 ],'Aktiv = kroppen producerar. Passiv = färdiga antikroppar tillförs.','Är vaccination vanligtvis aktiv eller passiv immunisering?','Aktiv immunisering.','D3_P18')
],
infection:[
 L('Hur infektionssjukdomar jämförs','Använd samma frågor för varje sjukdom.',[
  'För varje infektion kan du ställa fyra frågor: Vilken typ av mikrob orsakar den? Hur smittar den? Vilka symtom är typiska? Hur kan smittspridning förebyggas? Då blir kapitlet en jämförelse i stället för en lös lista av sjukdomsnamn.',
  'Kursboken beskriver flera infektioner med upplägget orsak, symtom, diagnos och behandling. Som massageterapeut ska du främst förstå smittvägar och när behandling bör skjutas upp eller anpassas; diagnos och medicinsk behandling är vårdens uppgift.'
 ],'Mikrob → smittväg → symtom → förebyggande.','Vilka två frågor är särskilt viktiga för att hindra spridning?','Hur sjukdomen smittar och hur smittvägen kan brytas.','D3_P24'),
 L('Hepatit','Skilja smittvägar utan att blanda ihop typerna.',[
  'Hepatit betyder inflammation i levern. De virusformer som listas i kursfrågorna är A, B, C, D och E. Hepatit A och E sprids framför allt fekal-oralt, exempelvis via förorenat vatten eller mat. Hepatit B, C och D kan spridas via blod; B och D även sexuellt och från mor till barn. D-viruset kräver samtidig hepatit B-infektion.',
  'Det är en förenkling att säga att alla typer smittar på samma sätt. Lär dig grupperingen A/E respektive B/C/D som en start, men använd aktuell smittskyddsinformation i verkliga situationer.'
 ],'A/E: främst mat/vatten. B/C/D: framför allt blod och kroppsvägar som varierar.','Vilka hepatittyper är främst kopplade till fekal-oral smitta?','Hepatit A och E.','D4_P02'),
 L('Influensa och luftvägar','Koppla symtom till smittförebyggande.',[
  'Influensa orsakas av influensavirus. Vanliga symtom är relativt hastigt insättande feber, frossa, muskelvärk, huvudvärk, hosta och tydlig sjukdomskänsla. Alla får inte exakt samma symtom, och andra infektioner kan se liknande ut.',
  'Virus kan spridas genom utandade partiklar och nära kontakt. Att avstå behandling när man har akuta luftvägssymtom och att följa hand- och hosthygien minskar risken att föra smittan vidare. Antibiotika behandlar inte själva influensaviruset.'
 ],'Influensa är virus, inte ett samlingsnamn för all förkylning.','Varför hjälper inte antibiotika mot själva influensaviruset?','Antibiotika verkar mot bakterier, inte mot viruset.','D4_P04'),
 L('MRSA och andra resistenta bakterier','Förstå vad resistens gör praktiskt viktigt.',[
  'MRSA är meticillinresistenta Staphylococcus aureus. Bakterien kan bäras utan tydliga symtom men också ge infektion. Resistensen begränsar vissa antibiotikaval. Det är inte en ny sorts smittväg: kontaktsmitta och noggrann hygien är fortfarande viktiga.',
  'Kursens fråga om ”respekt” för MRSA syftar på behandlingssvårigheter och smittskydd. Förväxla inte bärarskap med aktiv infektion och försök inte bedöma en persons status utifrån utseendet.'
 ],'MRSA = bakterie med antibiotikaresistens.','Är MRSA ett virus?','Nej, det är en resistent variant av bakterien Staphylococcus aureus.','D4_P06'),
 L('HIV och hudnära infektioner','Skilja faktiska smittvägar från vardagskontakt.',[
  'HIV kan överföras via vissa kroppsvätskor, bland annat blod och vid oskyddat sex, och från mor till barn utan förebyggande insatser. HIV överförs inte via vanlig beröring, handslag eller massage på hel hud. Aktuell effektiv behandling kan förhindra sexuell överföring när virusnivån är omätbar.',
  'Herpes simplex och hudsvamp är andra exempel i kursen där ett aktivt område kräver hygienisk hänsyn. Undvik direkt kontakt med smittsamma lesioner och följ verksamhetens rutiner. Stigmatisera inte personer utifrån diagnos; gör en saklig bedömning av den faktiska situationen.'
 ],'Bedöm smittväg och aktivt område, inte personens värde eller utseende.','Smittar HIV via vanlig massage på hel hud?','Nej.','D4_P10')
],
allergy:[
 L('Allergi och överkänslighet','Förstå vad ett allergen är.',[
  'Ett allergen är ett ämne som kan utlösa en allergisk reaktion hos en känslig person. Allergi innebär att immunförsvaret reagerar mot ett ämne som i sig oftast är ofarligt för andra, exempelvis pollen, vissa livsmedel eller ämnen i produkter.',
  'Överkänslighet är ett bredare ord och kan även handla om besvär utan en specifik immunologisk allergimekanism. Därför är ”jag reagerar på en doft” inte automatiskt samma sak som en bekräftad allergi. För behandlaren är klientens uppgifter om tidigare reaktioner ändå viktiga.'
 ],'Allergi är en immunreaktion; överkänslighet kan ha fler mekanismer.','Vad är ett allergen?','Ett ämne som kan utlösa allergi hos en känslig person.','D4_P19'),
 L('IgE, mastceller och histamin','Följa en vanlig snabb allergisk reaktion.',[
  'Vid en IgE-medierad allergi kan kroppen efter kontakt med ett allergen bilda IgE-antikroppar. IgE binder till mastceller. Vid ett senare möte med allergenet kan mastceller aktiveras och frisätta bland annat histamin.',
  'Histamin bidrar till symtom som klåda, rodnad, svullnad och rinnande näsa. Detta är en viktig mekanism men inte den enda typen av allergisk reaktion. Lär dig kedjan som en modell: allergen → IgE/mastcell → mediatorer → symtom.'
 ],'Allergen känns igen; mastcell frisätter ämnen; vävnaden reagerar.','Vilket ämne från mastceller bidrar till klåda och svullnad?','Histamin.','D4_P19'),
 L('Vanliga allergiska symtom','Koppla symtom till drabbad vävnad.',[
  'Hösnuva ger ofta nysningar, nästäppa, rinnande näsa och kliande eller rinnande ögon. Urtikaria (nässelutslag) ger upphöjda, kliande hudutslag. Angioödem kan ge djupare svullnad, till exempel kring läppar och ögon. Eksem kan ge torr, röd och kliande hud.',
  'Symtomens utseende ger ledtrådar men inte en säker diagnos. Svullnad som påverkar tunga, svalg eller andning behöver tas på allvar. Fråga om tidigare reaktioner och om produkter som oljor, doftämnen, latex eller nötbaserade ingredienser kan vara ett problem för klienten.'
 ],'Näsa/ögon, hud och luftvägar kan reagera på olika sätt.','Vilket tillstånd ger typiskt snabbt uppkomna kliande kvaddlar i huden?','Urtikaria, även kallat nässelutslag.','D4_P20'),
 L('Anafylaxi är akut','Känna igen en allvarlig systemreaktion.',[
  'Anafylaxi är en snabbt insättande, potentiellt livshotande överkänslighetsreaktion som kan påverka flera organsystem. Luftvägar kan svullna eller dra ihop sig, blodkärl vidgas och blodtrycket kan falla. Symtom kan vara andningssvårigheter, heshet, yrsel eller svimning tillsammans med hud-, mag- eller andra besvär.',
  'Det här är inte ett tillstånd att observera under fortsatt massage. Avbryt behandlingen och ring 112 vid misstänkt anafylaxi. Om personen har en ordinerad adrenalinpenna, hjälp enligt utbildning och larmoperatörens instruktioner. Följ alltid aktuella akutrutiner.'
 ],'Misstänkt anafylaxi → avbryt och larma 112.','Vad är första prioritet vid misstänkt anafylaxi i behandlingsrummet?','Avbryt behandlingen och larma 112; följ akutrutinerna.','D4_P21'),
 L('Utredning och trygg behandling','Förstå hur allergi utreds och hur exponering undviks.',[
  'Allergi utreds utifrån berättelsen om symtom och exponering, ibland med exempelvis pricktest eller blodprov för specifikt IgE. Ett positivt test måste tolkas tillsammans med symtomen. Behandling kan innebära att undvika allergenet, använda symtomlindrande läkemedel eller i vissa fall allergen immunterapi under medicinsk övervakning.',
  'På en massageklinik är förebyggande enkel men viktig: fråga om kända allergier, kontrollera innehållet i produkter och välj ett säkert alternativ. En tidigare kraftig reaktion ska tas på allvar; genomför inte behandling under en pågående allergisk reaktion.'
 ],'Fråga, kontrollera produkten, undvik allergenet.','Varför räcker inte enbart ett positivt allergitest för att beskriva hela situationen?','Testet behöver tolkas ihop med personens symtom och exponering.','D4_P22')
]
};
