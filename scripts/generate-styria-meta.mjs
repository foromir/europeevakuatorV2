#!/usr/bin/env node
/** Generates src/i18n/austria/styriaMunicipalityMeta.ts from embedded 2022 data. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const RAW = `
Graz	Statutory city	297083
Admont	Market town	4988
Aflenz	Market town	2423
Aich	Other municipality	1315
Aigen im Ennstal	Other municipality	2711
Albersdorf-Prebuch	Other municipality	2303
Allerheiligen bei Wildon	Other municipality	1598
Altaussee	Other municipality	1862
Altenmarkt bei Sankt Gallen	Market town	785
Anger	Market town	4020
Ardning	Other municipality	1286
Arnfels	Market town	970
Bad Aussee	Other city	5013
Bad Blumau	Other municipality	1631
Bad Gleichenberg	Other municipality	5306
Bad Loipersdorf	Other municipality	1821
Bad Mitterndorf	Market town	4925
Bad Radkersburg	Other city	3232
Bad Schwanberg	Market town	4464
Bad Waltersdorf	Market town	3898
Bärnbach	Other city	5775
Birkfeld	Market town	4995
Breitenau am Hochlantsch	Market town	1612
Bruck an der Mur	Other city	15962
Buch-Sankt Magdalena	Other municipality	2196
Burgau	Market town	1084
Dechantskirchen	Other municipality	2005
Deutsch Goritz	Other municipality	1782
Deutschfeistritz	Market town	4503
Deutschlandsberg	Other city	11708
Dobl-Zwaring	Market town	3775
Ebersdorf	Other municipality	1277
Edelsbach bei Feldbach	Other municipality	1347
Edelschrott	Market town	1646
Eggersdorf bei Graz	Market town	7145
Ehrenhausen an der Weinstraße	Market town	2455
Eibiswald	Market town	6416
Eichkögl	Other municipality	1375
Eisenerz	Other city	3533
Empersdorf	Other municipality	1413
Fehring	Other city	7235
Feistritztal	Other municipality	2382
Feldbach	Other city	14430
Feldkirchen bei Graz	Market town	7253
Fernitz-Mellach	Other municipality	4931
Fischbach	Other municipality	1516
Fladnitz an der Teichalm	Other municipality	1811
Floing	Other municipality	1218
Fohnsdorf	Other municipality	7569
Frauental an der Laßnitz	Market town	3134
Friedberg	Other city	2652
Frohnleiten	Other city	6632
Fürstenfeld	Other city	8853
Gaal	Other municipality	1337
Gabersdorf	Other municipality	1294
Gaishorn am See	Market town	1351
Gamlitz	Market town	3219
Gasen	Other municipality	856
Geistthal-Södingberg	Other municipality	1464
Gersdorf an der Feistritz	Other municipality	1770
Gleinstätten	Market town	2801
Gleisdorf	Other city	11322
Gnas	Market town	5985
Gössendorf	Market town	4197
Grafendorf bei Hartberg	Market town	3229
Gralla	Market town	2852
Gratkorn	Market town	8391
Gratwein-Straßengel	Market town	12748
Greinbach	Other municipality	1884
Gröbming	Market town	3153
Groß Sankt Florian	Market town	4090
Großklein	Market town	2285
Großsteinbach	Other municipality	1290
Großwilfersdorf	Other municipality	2148
Grundlsee	Other municipality	1154
Gutenberg-Stenzengreith	Other municipality	1637
Halbenrain	Market town	1674
Hart bei Graz	Other municipality	5440
Hartberg	Other city	6745
Hartberg Umgebung	Other municipality	2223
Hartl	Other municipality	2128
Haselsdorf-Tobelbad	Other municipality	1599
Haus im Ennstal	Market town	2425
Hausmannstätten	Market town	3780
Heiligenkreuz am Waasen	Market town	2891
Heimschuh	Other municipality	1984
Hengsberg	Other municipality	1495
Hirschegg-Pack	Other municipality	1000
Hitzendorf	Market town	7338
Hofstätten an der Raab	Other municipality	2373
Hohentauern	Other municipality	382
Ilz	Market town	3766
Ilztal	Other municipality	2191
Irdning-Donnersbachtal	Market town	4149
Jagerberg	Market town	1638
Judenburg	Other city	9637
Kainach bei Voitsberg	Other municipality	1588
Kainbach bei Graz	Other municipality	2839
Kaindorf	Market town	3023
Kalsdorf bei Graz	Market town	8269
Kalwang	Market town	989
Kammern im Liesingtal	Market town	1669
Kapfenberg	Other city	22251
Kapfenstein	Other municipality	1534
Kindberg	Other city	8205
Kirchbach-Zerlach	Market town	3202
Kirchberg an der Raab	Other municipality	4616
Kitzeck im Sausal	Other municipality	1179
Klöch	Market town	1165
Knittelfeld	Other city	12797
Kobenz	Market town	1964
Köflach	Other city	9676
Krakau	Other municipality	1364
Kraubath an der Mur	Market town	1347
Krieglach	Market town	5390
Krottendorf-Gaisfeld	Other municipality	2468
Kumberg	Market town	3964
Lafnitz	Other municipality	1465
Landl	Other municipality	2560
Lang	Other municipality	1369
Langenwang	Market town	3874
Lannach	Market town	3649
Lassing	Other municipality	1698
Laßnitzhöhe	Market town	2823
Lebring-Sankt Margarethen	Market town	2240
Leibnitz	Other city	13025
Leoben	Other city	25057
Leutschach an der Weinstraße	Market town	3551
Lieboch	Market town	5514
Liezen	Other city	8265
Ligist	Market town	3258
Lobmingtal	Other municipality	1843
Ludersdorf-Wilfersdorf	Other municipality	2548
Maria Lankowitz	Market town	2756
Mariazell	Other city	3710
Markt Hartmannsdorf	Market town	2962
Mautern in Steiermark	Market town	1700
Mettersdorf am Saßbach	Market town	1344
Michaelerberg-Pruggern	Other municipality	1221
Miesenbach bei Birkfeld	Other municipality	664
Mitterberg-Sankt Martin	Other municipality	1934
Mitterdorf an der Raab	Other municipality	2160
Mooskirchen	Market town	2197
Mortantsch	Other municipality	2249
Mühlen	Market town	874
Murau	Other city	3450
Mureck	Other city	3484
Mürzzuschlag	Other city	8102
Naas	Other municipality	1362
Nestelbach bei Graz	Other municipality	2753
Neuberg an der Mürz	Market town	2326
Neudau	Market town	1527
Neumarkt in der Steiermark	Market town	4920
Niederwölz	Other municipality	598
Niklasdorf	Market town	2342
Obdach	Market town	3790
Oberhaag	Other municipality	2083
Oberwölz	Other city	2958
Öblarn	Market town	1972
Ottendorf an der Rittschein	Other municipality	1587
Paldau	Market town	3143
Passail	Market town	4413
Peggau	Market town	2408
Pernegg an der Mur	Other municipality	2544
Pinggau	Market town	3136
Pirching am Traubenberg	Other municipality	2557
Pischelsdorf am Kulm	Market town	3737
Pölfing-Brunn	Market town	1602
Pöllau	Market town	5975
Pöllauberg	Other municipality	2013
Pöls-Oberkurzheim	Market town	2878
Pölstal	Market town	2572
Preding	Market town	1897
Premstätten	Market town	6823
Proleb	Other municipality	1576
Puch bei Weiz	Other municipality	2051
Pusterwald	Other municipality	429
Raaba-Grambach	Market town	4929
Radmer	Other municipality	501
Ragnitz	Other municipality	1542
Ramsau am Dachstein	Other municipality	2900
Ranten	Other municipality	1126
Ratten	Other municipality	1080
Rettenegg	Other municipality	691
Riegersburg	Market town	5018
Rohr bei Hartberg	Other municipality	1418
Rohrbach an der Lafnitz	Other municipality	2649
Rosental an der Kainach	Other municipality	1682
Rottenmann	Other city	5126
Sankt Andrä-Höch	Other municipality	1704
Sankt Anna am Aigen	Market town	2375
Sankt Barbara im Mürztal	Market town	6524
Sankt Bartholomä	Other municipality	1496
Sankt Gallen	Market town	1795
Sankt Georgen am Kreischberg	Other municipality	1707
Sankt Georgen an der Stiefing	Market town	1585
Sankt Georgen ob Judenburg	Other municipality	849
Sankt Jakob im Walde	Other municipality	1013
Sankt Johann im Saggautal	Other municipality	1991
Sankt Johann in der Haide	Other municipality	2260
Sankt Josef	Other municipality	1715
Sankt Kathrein am Hauenstein	Other municipality	4216
Sankt Kathrein am Offenegg	Other municipality	1056
Sankt Lambrecht	Market town	1824
Sankt Lorenzen am Wechsel	Other municipality	1420
Sankt Lorenzen im Mürztal	Market town	3781
Sankt Marein bei Graz	Market town	3751
Sankt Marein im Mürztal	Market town	2822
Sankt Marein-Feistritz	Other municipality	2025
Sankt Margarethen an der Raab	Market town	1996
Sankt Margarethen bei Knittelfeld	Other municipality	2643
Sankt Martin am Wöllmißberg	Other municipality	798
Sankt Martin im Sulmtal	Other municipality	3027
Sankt Michael in Obersteiermark	Market town	3129
Sankt Nikolai im Sausal	Market town	2306
Sankt Oswald bei Plankenwarth	Other municipality	1282
Sankt Peter am Kammersberg	Market town	4488
Sankt Peter am Ottersbach	Market town	2907
Sankt Peter im Sulmtal	Other municipality	1271
Sankt Peter ob Judenburg	Other municipality	1116
Sankt Peter-Freienstein	Market town	2323
Sankt Radegund bei Graz	Other municipality	2176
Sankt Ruprecht an der Raab	Market town	5670
Sankt Stefan im Rosental	Market town	3824
Sankt Stefan ob Leoben	Other municipality	1832
Sankt Stefan ob Stainz	Other municipality	3630
Sankt Veit in der Südsteiermark	Market town	1350
Schäffern	Other municipality	2145
Scheifling	Market town	6571
Schladming	Other city	893
Schöder	Other municipality	2338
Schwarzautal	Market town	1338
Seckau	Market town	12072
Seiersberg-Pirka	Other municipality	1501
Selzthal	Other municipality	3232
Semriach	Market town	4506
Sinabelkirchen	Market town	1459
Söchau	Other municipality	4255
Söding-Sankt Johann	Other municipality	1477
Sölk	Other municipality	5320
Spielberg	Other city	1804
Spital am Semmering	Other municipality	628
Stadl-Predlitz	Other municipality	1644
Stainach-Pürgg	Market town	2773
Stainz	Market town	8679
Stallhofen	Market town	3190
Stanz im Mürztal	Other municipality	1808
Stattegg	Other municipality	3029
Stiwoll	Other municipality	711
Straden	Market town	3495
Strallegg	Other municipality	1901
Straß in Steiermark	Market town	6409
Stubenberg	Other municipality	2239
Teufenbach-Katsch	Other municipality	1831
Thal	Market town	2457
Thannhausen	Other municipality	2501
Thörl	Market town	2190
Tieschen	Market town	1226
Tillmitsch	Other municipality	3721
Traboch	Other municipality	1414
Tragöß-Sankt Katharein	Other municipality	1789
Trieben	Other city	3337
Trofaiach	Other city	11053
Turnau	Market town	1566
Übelbach	Market town	2088
Unterlamm	Other municipality	1252
Unzmarkt-Frauenburg	Market town	1276
Vasoldsberg	Market town	4772
Voitsberg	Other city	9507
Vorau	Market town	4651
Vordernberg	Market town	929
Wagna	Market town	6479
Wald am Schoberpaß	Other municipality	543
Waldbach-Mönichwald	Other municipality	1406
Weinitzen	Other municipality	2716
Weißkirchen in Steiermark	Market town	4844
Weiz	Other city	11940
Wenigzell	Other municipality	1409
Werndorf	Other municipality	2751
Wettmannstätten	Market town	1659
Wies	Market town	4271
Wildalpen	Other municipality	436
Wildon	Market town	5745
Wörschach	Other municipality	1165
Wundschuh	Other municipality	1665
Zeltweg	Other city	7081
`;

function slugFromName(name) {
  let n = name.trim();
  const umlauts = { ä: "ae", ö: "oe", ü: "ue", Ä: "ae", Ö: "oe", Ü: "ue", ß: "ss" };
  for (const [c, r] of Object.entries(umlauts)) n = n.replaceAll(c, r);
  return n
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

const typeMap = {
  "Statutory city": "statutoryCity",
  "Other city": "city",
  "Market town": "marketTown",
  "Other municipality": "municipality",
};

const entries = RAW.trim()
  .split("\n")
  .map((line) => {
    const [name, designation, pop] = line.split("\t");
    const slug = slugFromName(name);
    return `  "${slug}": { population: ${pop}, designation: "${typeMap[designation]}" },`;
  });

const out = `/** Steiermark Gemeinde-Daten (Stand 2022), keyed by slug. Auto-generated — do not edit by hand. */
export type StyriaDesignation = "statutoryCity" | "city" | "marketTown" | "municipality";

export type StyriaMunicipalityMeta = {
  population: number;
  designation: StyriaDesignation;
};

export const STYRIA_MUNICIPALITY_META: Record<string, StyriaMunicipalityMeta> = {
${entries.join("\n")}
};
`;

const target = path.join(__dirname, "../src/i18n/austria/styriaMunicipalityMeta.ts");
fs.writeFileSync(target, out);
console.log("Wrote", target, "with", entries.length, "entries");
