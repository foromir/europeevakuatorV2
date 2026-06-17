import { ROUTE_PATH } from "../../routeConfig";
import type { LocationRowInput } from "../locationRowTypes";

export const deLocationRows = [
  {
    code: "at",
    flagAlt: "Flagge Österreich",
    country: "Österreich",
    countryHref: ROUTE_PATH.AUSTRIA,
    featuredCityLabel: "Graz",
    featuredCityHref: ROUTE_PATH.AUSTRIA_GRAZ,
    citiesRest:
      "Wien, Linz, Salzburg, Klagenfurt, Suben, Braunau am Inn, Arnoldstein, Villach, Spielberg, Heiligenkreuz, Weiz, Gleisdorf, Kapfenberg, Deutschlandsberg, Feldkirchen bei Graz, Wolfsberg, Spittal an der Drau, Hermagor, Bad Radkersburg, Fürstenfeld, Jennersdorf, Eisenstadt, Rust, Oberwart, Güssing, Schärding, Ried im Innkreis, Gmunden, Steyr, Wels, Sankt Pölten, Dornbirn, Wiener Neustadt, Feldkirch, Bregenz, Leonding, Klosterneuburg, Baden bei Wien, Traun, Leoben",
  },
  {
    code: "hr",
    flagAlt: "Flagge Kroatien",
    country: "Kroatien",
    countryHref: ROUTE_PATH.CROATIA,
    citiesLine: "Zagreb, Rijeka, Krapina, Zabok, Karlovac, Ogulin, Opatija, Koper, Pula, Umag, Poreč",
  },
  {
    code: "hu",
    flagAlt: "Flagge Ungarn",
    country: "Ungarn",
    countryHref: ROUTE_PATH.HUNGARY,
    citiesLine: "Szombathely, Győr, Körmend, Sopron, Csorna, Kapuvár, Keszthely, Letenye",
  },
  {
    code: "de",
    flagAlt: "Flagge Deutschland",
    country: "Deutschland",
    countryHref: ROUTE_PATH.GERMANY,
    featuredCityLabel: "München",
    featuredCityHref: ROUTE_PATH.GERMANY_MUENCHEN,
    citiesRest: "Rosenheim, Passau, Regensburg, Mühldorf am Inn, Traunstein, Deggendorf",
  },
  {
    code: "it",
    flagAlt: "Flagge Italien",
    country: "Italien",
    countryHref: ROUTE_PATH.ITALY,
    citiesLine: "Udine, Triest, Monfalcone, Palmanova, Tarvisio",
  },
  {
    code: "sk",
    flagAlt: "Flagge Slowakei",
    country: "Slowakei",
    countryHref: ROUTE_PATH.SLOVAKIA,
    citiesLine: "Bratislava",
  },
  {
    code: "si",
    flagAlt: "Flagge Slowenien",
    country: "Slowenien",
    countryHref: ROUTE_PATH.SLOVENIA,
    citiesLine:
      "Ljubljana, Maribor, Celje, Kranj, Koper, Novo Mesto, Velenje, Ptuj, Trbovlje, Kamnik, Jesenice, Domžale, Škofja Loka, Murska Sobota, Nova Gorica, Vrhnika, Krško, Ajdovščina, Brežice, Slovenj Gradec, Ravne na Koroškem, Postojna, Sežana, Ilirska Bistrica, Piran, Izola, Portorož, Lendava, Metlika, Kočevje, Slovenska Bistrica, Dravograd, Lenart, Ormož, Žalec, Grosuplje, Litija, Trebnje, Logatec, Idrija, Tolmin, Bled, Medvode, Črnomelj",
  },
] as const satisfies readonly LocationRowInput[];
