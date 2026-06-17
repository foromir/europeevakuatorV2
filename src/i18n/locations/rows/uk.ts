import { ROUTE_PATH } from "../../routeConfig";
import type { LocationRowInput } from "../locationRowTypes";

export const ukLocationRows = [
  {
    code: "at",
    flagAlt: "Прапор Австрії",
    country: "Австрія",
    countryHref: ROUTE_PATH.AUSTRIA,
    featuredCityLabel: "Грац",
    featuredCityHref: ROUTE_PATH.AUSTRIA_GRAZ,
    citiesRest:
      "Відень, Лінц, Зальцбург, Клагенфурт, Субен, Браунау-на-Інні, Арнольдштайн, Філлах, Шпільберг, Гайлігенкрайц, Вайц, Глайсдорф, Капфенберг, Дойчландсберг, Фельдкірхен-бай-Грац, Вольфсберг, Шпітталь-ан-дер-Драу, Гермагор, Бад-Радкерсбург, Фюрстенфельд, Єннерсдорф, Айзенштадт, Руст, Оберварт, Гісінг, Шардинг, Рід-ім-Іннкрайс, Гмунден, Штайр, Вельс, Санкт-Пёльтен, Дорнбірн, Вінер-Нойштадт, Фельдкірх, Брегенц, Леондинг, Клостернойбург, Баден-бай-Він, Траун, Леобен",
  },
  {
    code: "hr",
    flagAlt: "Прапор Хорватії",
    country: "Хорватія",
    countryHref: ROUTE_PATH.CROATIA,
    citiesLine: "Загреб, Рієка, Крапина, Забок, Карловац, Огулин, Опатія, Копер, Пула, Умаг, Пореч",
  },
  {
    code: "hu",
    flagAlt: "Прапор Угорщини",
    country: "Угорщина",
    countryHref: ROUTE_PATH.HUNGARY,
    citiesLine: "Сомбатхей, Дьор, Кёрменд, Шопорн, Чорна, Капувар, Кестхей, Летенье",
  },
  {
    code: "de",
    flagAlt: "Прапор Німеччини",
    country: "Німеччина",
    countryHref: ROUTE_PATH.GERMANY,
    featuredCityLabel: "Мюнхен",
    featuredCityHref: ROUTE_PATH.GERMANY_MUENCHEN,
    citiesRest: "Rosenheim, Passau, Regensburg, Mühldorf am Inn, Traunstein, Deggendorf",
  },
  {
    code: "it",
    flagAlt: "Прапор Італії",
    country: "Італія",
    countryHref: ROUTE_PATH.ITALY,
    citiesLine: "Удине, Трієст, Монфальконе, Пальманова, Tarvisio",
  },
  {
    code: "sk",
    flagAlt: "Прапор Словаччини",
    country: "Словаччина",
    countryHref: ROUTE_PATH.SLOVAKIA,
    citiesLine: "Братислава",
  },
  {
    code: "si",
    flagAlt: "Прапор Словенії",
    country: "Словенія",
    countryHref: ROUTE_PATH.SLOVENIA,
    citiesLine:
      "Любляна, Марібор, Целє, Крань, Копер, Нове-Місто, Веленє, Птуй, Трбовле, Камник, Єсенице, Домжале, Шкофья-Лока, Мурська-Собота, Нова-Гориця, Врхника, Кршко, Айдовщина, Брежице, Словень-Градець, Равне-на-Корошкем, Постойна, Сежана, Ілірська-Бистриця, Пиран, Ізола, Порторож, Лендава, Метлика, Кочевє, Словенська-Бистриця, Дравоград, Ленарт, Ормож, Жалец, Гросуплє, Літія, Требнє, Логатец, Ідрія, Толмин, Блед, Медводе, Чрномель",
  },
] as const satisfies readonly LocationRowInput[];
