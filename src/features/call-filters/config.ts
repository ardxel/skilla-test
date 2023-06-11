import {Filter} from "entities/calls/model";

export const config = {

  _types: [
    "все типы",
    "клиенты",
    "новые клиенты",
    "рабочие",
    "приложение"
  ],

  get types(): Filter[] {
    return this.getConfig(this._types);
  },

  _workers: [
    "Все сотрудники",
    'ИП Сидорова Александра Михайловна',
    'ИП Митрофанов М.М',
    'ИП Иванов М.М.',
  ],

  get workers(): Filter[] {
    return this.getConfig(this._workers);
  },

  _calls: [
    "Все звонки",
    "Все клиенты",
    "Новые клиенты",
    "Все исполнители",
    "Через приложение",
    "Прочие звонки"
  ],

  get calls(): Filter[] {
    return this.getConfig(this._calls);
  },

  _sources: [
    'Все источники',
    'Yandex',
    'Google',
    'Rabota.ru'
  ],

  get sources(): Filter[] {
    return this.getConfig(this._sources);
  },

  _errors: [
    "Все ошибки",
    "Приветсвие",
    "Имя", "Цена",
    "Скидка",
    "Предзаказ",
    "Благодарность",
    "Стоп слова"
  ],

  get errors(): Filter[] {
    return this.getConfig(this._errors);
  },

  _grades: [
    'Все оценки',
    'Распознать',
    'Скрипт не использован',
    'Плохо',
    'Хорошо',
    'Отлично',
    'Плохо',
    'Хорошо',
    'Отлично'
  ],

  get grades(): Filter[] {
    return this.getConfig(this._grades);
  },

  getConfig: (list: string[]) => {
    return list.map((item, index) => ({
      title: item,
      id: index
    }))
  }
}