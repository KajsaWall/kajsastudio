# Kajsa Studio 1.0

Tvåspråkig statisk webbplats med fem vyer, interaktiv kunskapsbank och quiz.

## Så testar du

Starta en lokal server i denna mapp (öppna inte bara index.html som file://, eftersom JSON hämtas med fetch):

```bash
python3 -m http.server 8000
```

Besök http://localhost:8000.

## Publicering

Ladda upp **innehållet** i denna mapp till webbhotellets public_html eller motsvarande katalog. Ingen byggprocess eller databas krävs. Vanliga webbhotell fungerar om de kan servera statiska filer.

## Gör innan du lanserar

1. Lägg in egen professionell e-post och sociala profiladresser i `CONFIG` överst efter översättningarna i `assets/app.js`.
2. Kontaktformuläret skickar **inte** meddelanden förrän `CONFIG.formEndpoint` är satt till en fungerande och säker tjänst, till exempel en extern formulärleverantör som tar emot POST/FormData. Kontrollera integritetspolicy, spamfilter och GDPR innan aktivering. Om du inte väljer en tjänst, använd e-postlänk i stället.
3. Byt ut grafiska porträttplatshållare mot egna bilder och kontrollera rättigheter till allt bildmaterial.
4. Verifiera utbildningsdatum, erfarenheter och alla offentliga biografiska uppgifter; just nu är vissa texter exempel.
5. Kontrollera och faktagranska artiklar, komplettera med källor och granska båda språkversionerna.
6. Lägg till integritetspolicy om kontaktformulär, analysverktyg eller andra tjänster behandlar personuppgifter.

## Nya artiklar

Redigera `content/articles.json`. Kopiera ett artikelobjekt och ge det ett unikt `id`, kategori, titel och sammanfattning på både `sv` och `en`, sektioner på båda språken och ett quiz med rätt svar som nollbaserat index (`correct:0` betyder första svaret). Artiklarna visas automatiskt i sökning och kategorifilter. Den interaktiva skissen visas i demoartikeln om muskler. Du kan bygga fler illustrationer genom att utöka `diagram()` i `assets/app.js`.

## Arkitektur

En statisk enkelsidesapp med hash-routing (#/about etc.). Det fungerar även på webbhotell utan omskrivningsregler. Förhandsvisning på mobiler, tangentbordsnavigation och reducerad rörelse stöds. Språkval sparas lokalt i webbläsaren.

## Egna bilder
Tre originalfotografier ligger i `assets/images/` och används på Startsida, Om mig och Min resa. Bilderna är kopierade utan färgjustering eller filter. Ändra bildfilernas sökvägar i `assets/app.js` för att byta bild.
