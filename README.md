# bike-geometry

Visueller Vergleich von Fahrradrahmen-Geometrien (Seitenansicht, maßstabsgetreu, alle Räder auf Höhe 0).

## Nutzung

`index.html` im Browser öffnen – kein Build, keine Abhängigkeiten.

- Rahmen ein-/ausblenden, Referenz wählen (Δ-Tabelle zeigt Abweichungen zur Referenz)
- Laufradgröße (26" / 27,5" / 29") je Rahmen getrennt für vorn und hinten
- Rahmen neigt sich physikalisch korrekt, wenn die Radgrößen unterschiedlich sind
- Zoom: `Strg/Cmd` + Mausrad, Verschieben: Ziehen
- Sprache: Deutsch / Englisch

## Rahmen hinzufügen

- In [`frames-data.js`](frames-data.js) einen weiteren Eintrag in `frames` ergänzen (Felder siehe Kommentar am Dateianfang), oder
- im Browser über „Rahmen hinzufügen“ (wird lokal im Browser gespeichert, Export als JSON möglich).

## Geometriemodell

Tretlager = Ursprung. Hinterachse aus Kettenstrebe und Tretlager-Absenkung, Gabelachse aus Reach/Stack,
Steuerrohrlänge, Lenkwinkel, Gabel-Einbaulänge und Offset. Anschließend wird der Rahmen so gedreht,
dass beide Reifen den Boden berühren. Der berechnete Radstand stimmt mit den Herstellerangaben auf 1–3 mm überein.

## Datenstand

| Rahmen | Quelle / Hinweis |
|---|---|
| Commencal Clash XS (2027) | Commencal-Produktseite; Mullet 27,5" / 26"; „Tretlagerhöhe 0“ als Tretlager auf Höhe der Hinterachse interpretiert |
| Lapierre Spicy CF XS | Lapierre-Shop, BikeRadar; Gabel-Einbaulänge aus Front Center rückgerechnet, Offset 44 mm angenommen |
| Kona Hei Hei Trail CR XS | Modelljahr 2019 (27,5", 140/140 mm), Kona-Archiv |
