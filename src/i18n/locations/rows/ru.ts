import { ROUTE_PATH } from "../../routeConfig";
import type { LocationRowInput } from "../locationRowTypes";

export const ruLocationRows = [
  {
    code: "at",
    flagAlt: "Флаг Австрии",
    country: "Австрия",
    countryHref: ROUTE_PATH.AUSTRIA,
    featuredCityLabel: "Грац",
    featuredCityHref: ROUTE_PATH.AUSTRIA_GRAZ,
    citiesRest:
      "Вена, Линц, Зальцбург, Клагенфурт, Субен, Браунау-ам-Инн, Арнольдштайн, Филлах, Шпильберг, Хайлигенкройц, Вайц, Глайсдорф, Капфенберг, Дойчландсберг, Фельдкирхен-бай-Грац, Вольфсберг, Шпиттал-ан-дер-Драу, Хермагор, Бад-Радкерсбург, Фюрстенфельд, Йеннерсдорф, Айзенштадт, Руст, Оберварт, Гисинг, Шардинг, Рид-им-Иннкрайс, Гмунден, Штайр, Вельс, Санкт-Пёльтен, Дорнбирн, Винер-Нойштадт, Фельдкирх, Брегенц, Леондинг, Клостернойбург, Баден-бай-Вен, Траун, Леобен",
  },
  {
    code: "hr",
    flagAlt: "Флаг Хорватии",
    country: "Хорватия",
    countryHref: ROUTE_PATH.CROATIA,
    citiesLine: "Загреб, Риека, Крапина, Забок, Карловац, Огулин, Опатия, Копер, Пула, Умаг, Пореч",
  },
  {
    code: "hu",
    flagAlt: "Флаг Венгрии",
    country: "Венгрия",
    countryHref: ROUTE_PATH.HUNGARY,
    citiesLine: "Сомбатхей, Дьор, Кёрменд, Шопорн, Чорна, Капувар, Кестхей, Летенье",
  },
  {
    code: "de",
    flagAlt: "Флаг Германии",
    country: "Германия",
    countryHref: ROUTE_PATH.GERMANY,
    featuredCityLabel: "Мюнхен",
    featuredCityHref: ROUTE_PATH.GERMANY_MUENCHEN,
    citiesRest: "Rosenheim, Passau, Regensburg, Mühldorf am Inn, Traunstein, Deggendorf",
  },
  {
    code: "it",
    flagAlt: "Флаг Италии",
    country: "Италия",
    countryHref: ROUTE_PATH.ITALY,
    citiesLine: "Удине, Триест, Монфальконе, Пальманова, Tarvisio",
  },
  {
    code: "sk",
    flagAlt: "Флаг Словакии",
    country: "Словакия",
    countryHref: ROUTE_PATH.SLOVAKIA,
    citiesLine: "Братислава",
  },
  {
    code: "si",
    flagAlt: "Флаг Словении",
    country: "Словения",
    countryHref: ROUTE_PATH.SLOVENIA,
    citiesLine:
      "Любляна, Марибор, Целе, Крань, Копер, Ново-Место, Веленье, Птуй, Трбовле, Камник, Есенице, Домжале, Шкофья-Лока, Мурска-Собота, Нова-Горица, Врхника, Кршко, Айдовщина, Брежице, Словень-Градец, Равне-на-Корошкем, Постойна, Сежана, Илирска-Бистрица, Пиран, Изола, Порторож, Лендава, Метлика, Кочевье, Словенска-Бистрица, Дравоград, Ленарт, Ормож, Жалец, Гросупле, Лития, Требнье, Логатец, Идрия, Толмин, Блед, Медводе, Чрномель",
  },
] as const satisfies readonly LocationRowInput[];
