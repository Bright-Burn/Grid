import { v4 as uuidv4 } from 'uuid';

import { DataGrid, ColDef, Row  } from '@grid/grid';
import './style.css';

type TableData = {
  projectName: string;
  stars: number;
  downloads: number;
  packages: number;
  totalRelease: number;
  latestRelease: Date;
  license: string;
  language: string;
};

type TableRowData = Row & TableData;

function createRandomDate(start: Date, end: Date) {
  return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function createData(count: number): Row[] {
  const data: Row[] = [];
  const projectNames = [
    'Project A',
    'Project B',
    'Project C',
    'Project D',
    'Project E',
  ];
  const licenses = ['MIT', 'Apache 2.0', 'GPL', 'BSD', 'ISC'];
  const languages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'];

  for (let i = 0; i < count; i++) {
    const newEntry: TableRowData = {
      id: uuidv4(),
      projectName:
          projectNames[Math.floor(Math.random() * projectNames.length)],
      stars: Math.floor(Math.random() * 1000),
      downloads: Math.floor(Math.random() * 10000),
      packages: Math.floor(Math.random() * 5),
      totalRelease: Math.floor(Math.random() * 20),
      latestRelease: createRandomDate(new Date(2020, 0, 1), new Date()),
      license: licenses[Math.floor(Math.random() * licenses.length)],
      language: languages[Math.floor(Math.random() * languages.length)],
    };

    if ((i + 1) % 2 === 0 && Math.random() < 0.5) {
      newEntry.rows = createData(3);
    }

    data.push(newEntry);
  }

  return data;
}

const initColumns: ColDef[] = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Имя проекта',
    key: 'projectName',
    renderOptions: {
      type: 'column',
      isSticky: true,
    },
  },
  {
    title: 'Количество звезд',
    key: 'stars',
  },
  {
    title: 'Количество скачиваний',
    key: 'downloads',
  },
  {
    title: 'Количество пакетов',
    key: 'packages',
  },
  {
    title: 'Количество релизов',
    key: 'totalRelease',
  },
  {
    title: 'Последний релиз',
    key: 'latestRelease',
    customRender: (row) => {
      const date = new Date(row['latestRelease'] as string);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const formatMonth = month <= 9 ? `0${month}` : month.toString();
      const customRenderElement = document.createElement('i');
      customRenderElement.textContent = `${formatMonth}.${year}`;
      customRenderElement.setAttribute('title', date.toISOString());
      return customRenderElement;
    },
  },
  {
    title: 'Лицензия',
    key: 'license',
    customFilter: (_, rows) => {
      console.log('custom filter ');
      return rows.filter((row) => row.license === 'MIT');
    },
  },
  {
    title: 'ЯП',
    key: 'language',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const dataGrid = new DataGrid(createData(10), initColumns);
  const root = document.querySelector<HTMLElement>('#app');
  if (!root) return;
  dataGrid.init(root);
});
