/*
 * Rahmendaten – hier neue Rahmen ergänzen (alle Maße in mm / Grad).
 *
 * Koordinatenmodell (Rahmen-Koordinaten, Tretlager = Ursprung):
 *   reach, stack   Steuerrohr-Oberkante relativ zum Tretlager
 *   hta, sta       Lenk-/Sitzwinkel (Sitzwinkel = effektiv, wie vom Hersteller angegeben)
 *   seatTube       Sitzrohrlänge (entlang des Sitzwinkels gezeichnet)
 *   chainstay      Kettenstrebe (Tretlager -> Hinterachse, Luftlinie)
 *   bbDrop         Tretlager unterhalb Hinterachse (positiv = Tretlager tiefer)
 *   htLength       Steuerrohrlänge
 *   forkA2C        Gabel-Einbaulänge (Achse -> Steuersatz-Unterkante)
 *   forkOffset     Gabel-Offset / Rake
 *   travelRear/Front  Federweg hinten / vorn
 *   wheelbase      publizierter Radstand (nur zur Plausibilisierung / Anzeige)
 *
 * Optional pro Rahmen (Top-Level, nicht in geo): material (Text), weight (Rahmengewicht in kg)
 */
window.FRAME_DATA = {
  // Außendurchmesser inkl. Reifen (ca. 2.3–2.4" Reifen), in mm
  wheelOD: { "26": 680, "27.5": 710, "29": 745 },

  frames: [
    {
      id: "commencal-clash-xs-2027",
      name: "Commencal Clash XS (2027)",
      reference: true,
      material: "Aluminium (AL 6066 T4/T6)",
      weight: 3.2,
      color: "#14262d",
      wheels: { front: "27.5", rear: "26" },
      geo: {
        reach: 395, stack: 593, hta: 64, sta: 77.5,
        seatTube: 360, chainstay: 434, bbDrop: 0,
        htLength: 110, forkA2C: 552, forkOffset: 42,
        travelRear: 160, travelFront: 160, wheelbase: 1159
      },
      source: "https://www.commencal.com/de/enduro-fully-commencal-clash-xs-pure-white-kleiner-rahmen/BT7CLAXSEU1.html",
      notes: {
        de: "Mullet ab Werk (27,5\" vorn / 26\" hinten). Commencal gibt 'Tretlagerhöhe 0' an – hier als Tretlager auf Höhe der Hinterachse interpretiert.",
        en: "Mullet from factory (27.5\" front / 26\" rear). Commencal lists 'BB height 0' – interpreted here as BB level with the rear axle."
      }
    },
    {
      id: "lapierre-spicy-cf-xs",
      name: "Lapierre Spicy CF (XS)",
      material: "Vollcarbon (UD SLI)",
      weight: 3.2,
      reference: false,
      color: "#0072b2",
      wheels: { front: "29", rear: "27.5" },
      geo: {
        reach: 410, stack: 627, hta: 63.5, sta: 78,
        seatTube: 350, chainstay: 440, bbDrop: 16,
        htLength: 100, forkA2C: 596, forkOffset: 44,
        travelRear: 174, travelFront: 180, wheelbase: 1200
      },
      source: "https://lapierrebikes.com/products/spicy-cf-79-lscua",
      notes: {
        de: "Werte für High-Pivot (174 mm). Gabel-Einbaulänge aus Front Center 760 mm (BikeRadar) rückgerechnet, Offset 44 mm angenommen (Fox 38) – bitte prüfen. Sitzrohr XS laut Lapierre-Shop 350 mm (BikeRadar: 370 mm). Federweg vorn = Gabel des 7.9. Gewicht: Rahmen allein, ca. (Nutzerangabe).",
        en: "Values for high-pivot (174 mm). Fork A2C back-calculated from front centre 760 mm (BikeRadar), 44 mm offset assumed (Fox 38) – please verify. XS seat tube per Lapierre shop 350 mm (BikeRadar: 370 mm). Front travel = fork of the 7.9. Weight: frame only, approx. (user-provided)."
      }
    },
    {
      id: "kona-hei-hei-trail-cr-xs-2019",
      name: "Kona Hei Hei Trail CR (XS)",
      material: "Vollcarbon (Kona Carbon / Race Light Carbon)",
      weight: 2.45,
      reference: false,
      color: "#009e73",
      wheels: { front: "27.5", rear: "27.5" },
      geo: {
        reach: 385, stack: 592, hta: 68, sta: 75,
        seatTube: 345, chainstay: 425, bbDrop: 17,
        htLength: 105, forkA2C: 532, forkOffset: 42,
        travelRear: 140, travelFront: 140, wheelbase: 1087
      },
      source: "https://archive.konaworld.com/archive/2019/hei_hei_trail_cr.cfm",
      notes: {
        de: "Modelljahr 2019 (27,5\"). Das aktuelle Kona Hei Hei CR (29\", 120 mm) wird nicht in XS angeboten – bitte Modelljahr bestätigen. Gewicht: Rahmen allein, ca. (Nutzerangabe).",
        en: "Model year 2019 (27.5\"). The current Kona Hei Hei CR (29\", 120 mm) is not offered in XS – please confirm model year. Weight: frame only, approx. (user-provided)."
      }
    }
  ]
};
