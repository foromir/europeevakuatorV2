import type { Locale } from "../types";

/** Топ-20 gemeinden Штирии (без Граца) — уникальные SEO-абзацы. */
export const STYRIA_TOP_CITY_SLUGS = [
  "kapfenberg",
  "leoben",
  "bruck-an-der-mur",
  "feldbach",
  "leibnitz",
  "knittelfeld",
  "gratwein-strassengel",
  "seckau",
  "weiz",
  "gleisdorf",
  "trofaiach",
  "deutschlandsberg",
  "judenburg",
  "koeflach",
  "voitsberg",
  "fuerstenfeld",
  "kalsdorf-bei-graz",
  "liezen",
  "muerzzuschlag",
  "fehring",
] as const;

type TopParagraphs = Partial<Record<Locale, string>>;

const TOP_PARAGRAPHS: Record<string, TopParagraphs> = {
  kapfenberg: {
    ru: "Эвакуатор в Капфенберге и на трассе A9: выезжаем в промзоны, жилые кварталы и на парковки у торговых центров. Частые вызовы — поломка на автобане, ДТП на съезде к Леобену, перевозка авто в Вену или на СТО в Штирии.",
    uk: "Евакуатор у Капфенберзі та на трасі A9: виїжджаємо в промзони, житлові квартали й на парковки біля торгових центрів. Часті виклики — поломка на автобані, ДТП на з'їзді до Леобена, перевезення авто до Відня чи на СТО в Штирії.",
    en: "Tow truck in Kapfenberg and on the A9: industrial zones, residential areas and retail car parks. Common calls — motorway breakdowns, accidents near the Leoben exit, transport to Vienna or local workshops.",
    de: "Abschleppdienst in Kapfenberg und an der A9: Gewerbegebiete, Wohnviertel und Parkplätze. Häufige Einsätze — Pannen auf der Autobahn, Unfälle Richtung Leoben, Transport nach Wien oder zur Werkstatt.",
  },
  leoben: {
    ru: "В Леобене и долине Мур выезжаем на A9, в центр города и к университетскому кампусу. Эвакуация после ДТП на мостах через Мур, поломка в горной местности к Erzberg, доставка авто в Грац или Капфенберг.",
    uk: "У Леобені та долині Мур виїжджаємо на A9, в центр міста й до університетського кампусу. Евакуація після ДТП на мостах через Мур, поломка в гірській місцевості до Erzberg, доставка авто до Граца чи Капфенберга.",
    en: "In Leoben and the Mur valley we cover the A9, the city centre and the university campus. Recovery after bridge accidents, breakdowns towards Erzberg, transport to Graz or Kapfenberg.",
    de: "In Leoben und im Murtal: A9, Innenstadt und Campus. Bergung nach Unfällen an Murbrücken, Pannen Richtung Erzberg, Transport nach Graz oder Kapfenberg.",
  },
  "bruck-an-der-mur": {
    ru: "Эвакуатор в Брук-ан-дер-Мур — ключевой узел A9 в Верхней Штирии. Выезжаем на съезды, в промзоны Voest и на парковки в центре. Перевозка в Грац, Капфенберг, Леобен или через границу в Словению.",
    uk: "Евакуатор у Брук-ан-дер-Мур — ключовий вузол A9 у Верхній Штирії. Виїжджаємо на з'їзди, у промзони Voest і на парковки в центрі. Перевезення до Граца, Капфенберга, Леобена чи через кордон до Словенії.",
    en: "Tow truck in Bruck an der Mur — a major A9 junction in Upper Styria. Exits, industrial areas and the town centre. Transport to Graz, Kapfenberg, Leoben or across the border to Slovenia.",
    de: "Abschleppdienst in Bruck an der Mur — A9-Knoten in der Obersteiermark. Ausfahrten, Industriegebiet und Zentrum. Transport nach Graz, Kapfenberg, Leoben oder Richtung Slowenien.",
  },
  feldbach: {
    ru: "В Фельдбахе и юго-восточной Штирии выезжаем на винные дороги, B319 и связку с A2. Типичные ситуации — прокол на сельской дороге, поломка у винодельни, эвакуация после ДТП на пути в Грац или Венгрию.",
    uk: "У Фельдбаху та південно-східній Штирії виїжджаємо на винні дороги, B319 і зв'язок з A2. Типові ситуації — прокол на сільській дорозі, поломка біля виноробні, евакуація після ДТП на шляху до Граца чи Угорщини.",
    en: "In Feldbach and south-east Styria we cover wine routes, the B319 and links to the A2. Flat tyres on rural roads, breakdowns at vineyards, accidents en route to Graz or Hungary.",
    de: "In Feldbach und der Südoststeiermark: Weinstraßen, B319 und Anbindung an die A2. Reifenpanne, Pannen an Weingütern, Unfälle Richtung Graz oder Ungarn.",
  },
  leibnitz: {
    ru: "Эвакуатор в Лайбнице — у границы со Словенией и винного маршрута Südsteiermark. Выезжаем на B74, в центр и на парковки у терм. Часто перевозим авто в Грац, Марибор или на растаможку в Украину.",
    uk: "Евакуатор у Лайбніці — біля кордону зі Словенією та винного маршруту Südsteiermark. Виїжджаємо на B74, у центр і на парковки біля терм. Часто перевозимо авто до Граца, Марібору чи на розмитнення в Україну.",
    en: "Tow truck in Leibnitz near the Slovenian border and the Südsteiermark wine route. B74, town centre and spa car parks — often transport to Graz, Maribor or Ukraine.",
    de: "Abschleppdienst in Leibnitz nahe der slowenischen Grenze und der Weinstraße. B74, Zentrum und Thermenparkplätze — Transport nach Graz, Maribor oder in die Ukraine.",
  },
  knittelfeld: {
    ru: "В Книттельфельде и районе Red Bull Ring выезжаем на A9, S36 и дороги к Шпильбергу. Помогаем при поломке после мероприятий на трассе, ДТП на парковках и перевозке авто в Грац или Вену.",
    uk: "У Кніттельфельді та районі Red Bull Ring виїжджаємо на A9, S36 і дороги до Шпільберга. Допомагаємо при поломці після заходів на трасі, ДТП на парковках і перевезенні авто до Граца чи Відня.",
    en: "In Knittelfeld and the Red Bull Ring area: A9, S36 and roads to Spielberg. Breakdowns after events, parking-lot accidents, transport to Graz or Vienna.",
    de: "In Knittelfeld und am Red Bull Ring: A9, S36 und Wege nach Spielberg. Pannen nach Events, Parkplatzunfälle, Transport nach Graz oder Wien.",
  },
  "gratwein-strassengel": {
    ru: "Эвакуатор в Гратвайн-Штрассенгель — пригород Граца вдоль A9. Быстрый выезд в Gratkorn, Премштеттен и на съезд к аэропорту Граца. Эвакуация с парковок ТЦ, поломка на объездной, доставка в центр Граца.",
    uk: "Евакуатор у Гратвайн-Штрассенгель — передмістя Граца вздовж A9. Швидкий виїзд у Gratkorn, Премштеттен і на з'їзд до аеропорту Граца. Евакуація з парковок ТЦ, поломка на об'їзній, доставка в центр Граца.",
    en: "Tow truck in Gratwein-Straßengel — Graz suburbs along the A9. Fast response to Gratkorn, Premstätten and the airport exit. Shopping-centre car parks and the Graz ring road.",
    de: "Abschleppdienst in Gratwein-Straßengel — Grazer Speckgürtel an der A9. Schnelle Anfahrt nach Gratkorn, Premstätten und zum Flughafen Graz.",
  },
  seckau: {
    ru: "В Зеккау и на трассе A10 (Pyhrn) выезжаем к тоннелям и горным участкам. Частые вызовы — перегрев на подъёме, авария в кювете, эвакуация грузовиков и легковых в Книттельфельд или Линц.",
    uk: "У Зеккау та на трасі A10 (Pyhrn) виїжджаємо до тунелів і гірських ділянок. Часті виклики — перегрів на підйомі, аварія в кюветі, евакуація вантажівок і легкових у Кніттельфельд чи Лінц.",
    en: "In Seckau on the A10 Pyhrn autobahn: tunnels and mountain sections. Overheating on climbs, ditch accidents, trucks and cars to Knittelfeld or Linz.",
    de: "In Seckau an der A10 Pyhrn: Tunnel und Bergstrecken. Überhitzung am Anstieg, Unfälle im Graben, Lkw und Pkw Richtung Knittelfeld oder Linz.",
  },
  weiz: {
    ru: "Эвакуатор в Вайце и восточной Штирии: B72, долина Вайц и дороги к A2. Выезжаем в центр, промзоны и сельские Gemeinde. Перевозка в Грац, Глайсдорф, Вену или на СТО после поломки на serpentine.",
    uk: "Евакуатор у Вайці та східній Штирії: B72, долина Вайц і дороги до A2. Виїжджаємо в центр, промзони й сільські Gemeinde. Перевезення до Граца, Глайсдорфа, Відня чи на СТО після поломки на серпантині.",
    en: "Tow truck in Weiz and east Styria: B72, the Weiz valley and routes to the A2. Town centre, industrial sites and rural roads — transport to Graz, Gleisdorf or Vienna.",
    de: "Abschleppdienst in Weiz und der Oststeiermark: B72, Weiztal und Anbindung an die A2. Zentrum, Gewerbe und Landstraßen — Transport nach Graz, Gleisdorf oder Wien.",
  },
  gleisdorf: {
    ru: "В Глайсдорфе у развязки A2 Ostautobahn выезжаем на автобан, в центр и логистические зоны. Типично — поломка на въезде на A2, ДТП в очереди на заправку, эвакуация в Грац, Вайц или Вену.",
    uk: "У Глайсдорфі біля розв'язки A2 Ostautobahn виїжджаємо на автобан, у центр і логістичні зони. Типово — поломка на в'їзді на A2, ДТП у черзі на заправку, евакуація до Граца, Вайца чи Відня.",
    en: "In Gleisdorf at the A2 Ostautobahn junction: motorway, town centre and logistics areas. Breakdowns on the A2 slip road, queue accidents at petrol stations.",
    de: "In Gleisdorf an der A2-Ostautobahn: Autobahn, Zentrum und Logistikzonen. Pannen auf der Auffahrt, Unfälle an Tankstellen — Transport nach Graz oder Wien.",
  },
  trofaiach: {
    ru: "Эвакуатор в Трофайахе — Верхняя Штирия, дороги к A9 и в сторону Леобена. Выезжаем в жилые районы, на заводские территории и на горные подъезы. Перевозка в Капфенберг, Брук-ан-дер-Мур или Книттельфельд.",
    uk: "Евакуатор у Трофайаху — Верхня Штирія, дороги до A9 і в бік Леобена. Виїжджаємо в житлові райони, на заводські території й на гірські під'їзди. Перевезення до Капфенберга, Брук-ан-дер-Мур чи Кніттельфельда.",
    en: "Tow truck in Trofaiach, Upper Styria — roads to the A9 and Leoben. Residential areas, factory sites and mountain approaches.",
    de: "Abschleppdienst in Trofaiach, Obersteiermark — Anbindung an die A9 und nach Leoben. Wohngebiete, Werksgelände und Bergzufahrten.",
  },
  deutschlandsberg: {
    ru: "В Дойчландсберге и западной Штирии выезжаем на S6, B64 и винные деревни Vulkanland. Поломка на серпантине, ДТП у въезда в город, доставка в Грац, Фюрстенфельд или на границу с Словенией.",
    uk: "У Дойчландсберзі та західній Штирії виїжджаємо на S6, B64 і винні села Vulkanland. Поломка на серпантині, ДТП біля в'їзду в місто, доставка до Граца, Фюрстенфельда чи на кордон зі Словенією.",
    en: "In Deutschlandsberg and west Styria: S6, B64 and Vulkanland wine villages. Hairpin breakdowns, town-entry accidents, transport to Graz or Slovenia.",
    de: "In Deutschlandsberg und der Weststeiermark: S6, B64 und Vulkanland. Serpentinenpanne, Unfälle am Stadteingang, Transport nach Graz oder Slowenien.",
  },
  judenburg: {
    ru: "Эвакуатор в Юденбурге на трассе A10 — ворота в Нижнюю Штирию и к Тауэрну. Выезжаем в центр, на парковки у крепости и на подъезды к ski-зонам. Перевозка в Грац, Зеккау, Клагенфурт или Вену.",
    uk: "Евакуатор у Юденбурзі на трасі A10 — ворота в Нижню Штирію та до Тауерну. Виїжджаємо в центр, на парковки біля фортеці й на під'їзди до лижних зон. Перевезення до Граца, Зеккау, Клагенфурта чи Відня.",
    en: "Tow truck in Judenburg on the A10 — gateway to Lower Styria and the Tauern region. Town centre, castle car parks and ski-area access roads.",
    de: "Abschleppdienst in Judenburg an der A10 — Tor zur Untersteiermark und ins Tauerngebiet. Zentrum, Burgparkplätze und Zufahrten zu Skigebieten.",
  },
  koeflach: {
    ru: "В Кёфлахе и районе Коральпе выезжаем на B70, в центр и на горные дороги к Kohlschwarz. Частые вызовы — поломка на подъёме в горы, ДТП на узкой дороге, эвакуация в Фойтсберг или Грац.",
    uk: "У Кёфлаху та районі Коральпе виїжджаємо на B70, у центр і на гірські дороги до Kohlschwarz. Часті виклики — поломка на підйомі в гори, ДТП на вузькій дорозі, евакуація до Фойтсберга чи Граца.",
    en: "In Köflach and the Koralpe area: B70, town centre and mountain roads to Kohlschwarz. Climb breakdowns and narrow-road accidents.",
    de: "In Köflach und am Koralpengebiet: B70, Zentrum und Bergstraßen Richtung Kohlschwarz. Pannen am Berganstieg und auf engen Straßen.",
  },
  voitsberg: {
    ru: "Эвакуатор в Фойтсберге на A2 и S6 — западная Штирия. Выезжаем на автобан, в промзоны и центр. Перевозка в Грац, Кёфлах, Дойчландсберг или на СТО после аварии на объездной.",
    uk: "Евакуатор у Фойтсберзі на A2 і S6 — західна Штирія. Виїжджаємо на автобан, у промзони й центр. Перевезення до Граца, Кёфлаха, Дойчландсберга чи на СТО після аварії на об'їзній.",
    en: "Tow truck in Voitsberg on the A2 and S6 — west Styria. Motorway, industrial zones and town centre.",
    de: "Abschleppdienst in Voitsberg an A2 und S6 — Weststeiermark. Autobahn, Gewerbegebiet und Zentrum.",
  },
  fuerstenfeld: {
    ru: "В Фюрстенфельде у A2 и границы с Венгрией выезжаем на автобан, в центр и на B318. Типично — поломка на пути в Грац или Будапешт, эвакуация после ДТП на отдыхной зоне A2.",
    uk: "У Фюрстенфельді біля A2 і кордону з Угорщиною виїжджаємо на автобан, у центр і на B318. Типово — поломка на шляху до Граца чи Будапешта, евакуація після ДТП на зоні відпочинку A2.",
    en: "In Fürstenfeld near the A2 and the Hungarian border: motorway, town centre and B318. Breakdowns en route to Graz or Budapest.",
    de: "In Fürstenfeld an der A2 nahe Ungarn: Autobahn, Zentrum und B318. Pannen Richtung Graz oder Budapest.",
  },
  "kalsdorf-bei-graz": {
    ru: "Эвакуатор в Кальсдорф-бай-Грац — у аэропорта Граца и A9. Выезжаем на Flughafenstraße, в жилые кварталы и логистику. Поломка после рейса, ДТП на подъезде к аэропорту, доставка в Грац или на СТО.",
    uk: "Евакуатор у Кальсдорф-бай-Грац — біля аеропорту Граца та A9. Виїжджаємо на Flughafenstraße, у житлові квартали й логістику. Поломка після рейсу, ДТП на під'їзді до аеропорту, доставка до Граца чи на СТО.",
    en: "Tow truck in Kalsdorf bei Graz near Graz Airport and the A9. Airport road, residential areas and logistics — post-flight breakdowns.",
    de: "Abschleppdienst in Kalsdorf bei Graz am Flughafen Graz und der A9. Flughafenstraße, Wohngebiete und Logistik.",
  },
  liezen: {
    ru: "В Лицене и Эннском доле выезжаем на A9 Pyhrn, B146 и дороги к горнолыжным курортам. Эвакуация после ДТП в тоннеле, поломка на перевале, перевозка в Грац, Зеккау или Зальцбург.",
    uk: "У Ліцені та Еннській долині виїжджаємо на A9 Pyhrn, B146 і дороги до гірськолижних курортів. Евакуація після ДТП у тунелі, поломка на перевалі, перевезення до Граца, Зеккау чи Зальцбурга.",
    en: "In Liezen and the Enns valley: A9 Pyhrn, B146 and ski-resort roads. Tunnel accidents and mountain-pass breakdowns.",
    de: "In Liezen im Ennstal: A9 Pyhrn, B146 und Zufahrten zu Skigebieten. Tunnelunfälle und Pannen am Pass.",
  },
  muerzzuschlag: {
    ru: "Эвакуатор в Мюрцушлаге на Semmering и A2/S6 — горный участок с крутыми серпантинами. Частые вызовы — перегрев тормозов, авария на Semmeringstraße, эвакуация в Грац или Вену зимой и летом.",
    uk: "Евакуатор у Мюрцушлазі на Semmering і A2/S6 — гірська ділянка з крутими серпантинами. Часті виклики — перегрів гальм, аварія на Semmeringstraße, евакуація до Граца чи Відня взимку й влітку.",
    en: "Tow truck in Mürzzuschlag on the Semmering and A2/S6 — steep mountain roads. Brake overheating and Semmeringstraße accidents.",
    de: "Abschleppdienst in Mürzzuschlag am Semmering und A2/S6 — Bergstraßen. Bremsenüberhitzung und Unfälle auf der Semmeringstraße.",
  },
  fehring: {
    ru: "В Феринге на юго-востоке Штирии выезжаем к границе с Венгрией и Словенией, на B57 и в центр. Поломка на пути в Грац или Загреб, эвакуация с парковок у погранперехода, доставка на СТО в Штирии.",
    uk: "У Ферінгу на південному сході Штирії виїжджаємо до кордону з Угорщиною та Словенією, на B57 і в центр. Поломка на шляху до Граца чи Загреба, евакуація з парковок біля прикордонного переходу.",
    en: "In Fehring in south-east Styria near Hungary and Slovenia: B57 and the town centre. Breakdowns en route to Graz or Zagreb.",
    de: "In Fehring in der Südoststeiermark nahe Ungarn und Slowenien: B57 und Zentrum. Pannen Richtung Graz oder Zagreb.",
  },
};

export function getStyriaTopCityParagraph(slug: string, locale: Locale): string | undefined {
  return TOP_PARAGRAPHS[slug]?.[locale] ?? TOP_PARAGRAPHS[slug]?.ru;
}
