# Kajsa Studio – redigera hemsidan

Öppna hela mappen i Visual Studio Code (**File → Open Folder**).

## Var ändrar jag vad?

| Fil | Innehåll |
| --- | --- |
| `index.html` | Sidans ram: meny, sidfot, meta-taggar och typsnitt |
| `assets/js/translations.js` | **Alla svenska och engelska texter** |
| `assets/js/config.js` | E-post, sociala länkar och formulärtjänst |
| `assets/js/pages/home.js` | Startsidan och dess bildval |
| `assets/js/pages/about.js` | Om mig och utbildningstidslinjen |
| `assets/js/pages/knowledge.js` | Kunskapsbank, artikelvisning, quiz och anatomisk skiss |
| `assets/js/pages/journey.js` | Min resa |
| `assets/js/pages/contact.js` | Kontaktformulär och kontaktuppgifter |
| `assets/js/router.js` | Sidväxling, navigering och händelser |
| `assets/js/main.js` | Start, språkbyte, mobilmeny och inläsning av artiklar |
| `assets/js/helpers.js` | Små återanvändbara HTML-hjälpfunktioner |
| `assets/js/state.js` | Aktuellt språk och artikellista |
| `content/articles.json` | Artiklarna och kunskapsfrågorna |
| `assets/hermelin-inspired.css` | **Nuvarande design**, färger och komponenter |
| `assets/style.css` | Äldre grundstilar som fortfarande används |
| `assets/images/` | Dina bilder |

## Redigera innehåll

- Ändra **både `sv` och `en`** i `translations.js` för att hålla språken synkroniserade.
- Byt bilder genom att ersätta filerna i `assets/images/` eller ändra deras `src` i respektive sidfil.
- Lägg till artiklar i `content/articles.json` enligt samma struktur som befintliga artiklar.
- Fyll i riktiga URL:er i `config.js`. Formuläret skickar inte meddelanden förrän `formEndpoint` är konfigurerat.
- För att ändra footerns färg, sök på `.footer` i `assets/hermelin-inspired.css` (eller `style.css` om den inte överskrivs).

## Förhandsgranska lokalt

**Viktigt:** Sajten använder JavaScript-moduler och hämtar artiklar via `fetch`. Öppna därför **inte** `index.html` direkt med `file://`.

Använd till exempel tillägget **Live Server** i VS Code: högerklicka `index.html` → **Open with Live Server**.

Alternativt i terminalen i projektmappen:

```bash
python3 -m http.server 8000
```

Öppna sedan `http://localhost:8000`.

## Formatering

Installera Prettier i VS Code och välj **Format Document**. Filerna är separerade efter ansvar, och går bra att fortsätta formatera med Prettier.

## Publicering

Ladda upp **hela mappens innehåll**, inklusive `assets/js/`, `assets/images/` och `content/`, till webbhotellet. Moderna webbläsare stöder JavaScript-moduler.
