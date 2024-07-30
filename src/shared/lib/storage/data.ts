import type { StorageData } from 'shared/lib/storage'

export const mockData: StorageData = {
  companies: [
    {
      id: 1,
      title: 'Сбер',
      employees: [
        {
          name: 'Иван',
          id: 1,
        },
        {
          name: 'Петр',
          id: 2,
        },
      ],
    },

    {
      id: 2,
      title: 'ВТБ Банк',
      employees: [
        {
          name: 'Аркадий',
          id: 3,
        },
        {
          name: 'Степан',
          id: 4,
        },
      ],
    },

    {
      id: 3,
      title: 'Альфа банк',
      employees: [
        {
          name: 'Андрей',
          id: 5,
        },
        {
          name: 'Генадий',
          id: 6,
        },
      ],
    },

    {
      id: 4,
      title: 'Россельхозбанк',
      employees: [
        {
          name: 'Иван',
          id: 7,
        },
        {
          name: 'Петр',
          id: 8,
        },
      ],
    },

    {
      id: 5,
      title: 'Т-Банк',
      employees: [
        {
          name: 'Алексей',
          id: 9,
        },
        {
          name: 'Эдуард',
          id: 10,
        },
      ],
    },
  ],
}
