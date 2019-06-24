const express = require('express');
const faker = require('faker');
const cors = require('cors');

const API_SERVICE_PORT = 3001
const app = express();

const originUrlList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin: originUrlList,
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/api/test', (req, res) => {
  res.send(JSON.stringify({ data: `Hello World, ${faker.name.findName()}!` }))
});

app.get('/api/checkscorecard', (req, res) => {
  const data = [];

  for (let i = 0; i < 15; i++) {
    data.push({
      name: faker.finance.currencyCode(),
      status: faker.random.arrayElement(['red', 'yellow', 'green']),
      rot: faker.random.number({ min: 1, max: 40 }),
      gelb: faker.random.number({ min: 1, max: 40 }),
      gRun: faker.random.number({ min: 1, max: 60 }),
      date: faker.date.recent(90),
      nDef: faker.random.number({ min: 1, max: 80 }),
      nSusp: faker.random.number({ min: 1, max: 25 }),
      persentRot: faker.random.number({ min: 1, max: 100 }),
      persentGelb: faker.random.number({ min: 1, max: 100 }),
    })
  }
  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/govicurwes', (req, res) => {
  const data = {
    list: [],
    change: [],
  }

  const fakeData = () => {
    const dataValues = [];

    for (let i = 0; i < 4; i++) {
      dataValues.push(faker.random.arrayElement(
        [2.6, 0.3, 0.1, 2.2, -3.5, -4.4, 3.0, -5.8, -3.4, 3.1, -2.9, -2.9, -0.1, -1.7, -2.7, -3.7]
      ));
    }
    return dataValues;
  };

  for (let i = 0; i < 4; i++) {
    data.list.push({
      name: faker.finance.currencyCode(),
      data: fakeData(),
      // change: faker.random.number({ min: 3, max: 30 }),
    });
    data.change.push(faker.random.number({ min: 3, max: 30 }));
  }

  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/gruppe', (req, res) => {
  const data = []

  const fakeValue = () => faker.random.arrayElement(
    [0.3, 5.3, 1.4, 1.1, 2.7, 0.9]
  );

  for (let i = 0; i < 2; i++) {
    data.push({
      title: `Grouppe ${i + 1}`,
      data: [
        {
          name: 'SLI',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
        {
          name: 'Cash-YP',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
        {
          name: 'QPR',
          value: fakeValue(),
          prevValue: fakeValue(),
        },
      ]
    })
  }

  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/kurs', (req, res) => {
  const fakeValue = () => faker.random.arrayElement(
    [-0.68, -0.21, 0.9, -0.45, 1.45, -1.32, 1.71, 1.54, 1.61, 1.70, 2.75, -1.21]
  );

  const allocations = {
    title: 'ALLOKATIONSFAKTOR',
    data: [],
  };
  const kurs = {
    title: 'KURS-WÄHRUNG',
    data: [],
  }

  for (let i = 0; i < 6; i++) {
    kurs.data.push({
      name: faker.finance.currencyCode(),
      value: fakeValue(),
    });

    allocations.data.push({
      name: faker.random.arrayElement(['Dax', 'SDax', 'MDax', 'TecDax', 'Euro Stoxx', 'NASDAQ', 'AMEX', 'RUSSELL', 'CBOE', 'CSI 300', 'Hang Seng']),
      value: fakeValue(),
    })
  }
  res.send(JSON.stringify({ kurs, allocations }))
  console.log('TCL: kurs', kurs);
  console.log('TCL: allocations', allocations);
});

app.get('/api/rsxbottomup', (req, res) => {
  const data = [];

  for (let i = 0; i < 3; i++) {
    data.push({
      title: faker.finance.accountName(),
      value: faker.random.number({ min: 15, max: 90 })
    })
  }
  res.send(JSON.stringify({ values: data }))
  console.log('TCL: data', data);
});

app.get('/api/scheduling', (req, res) => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push({
      date: faker.date.recent(40),
      type: faker.random.arrayElement(['Daily', 'Monthly', 'Quarterly']),
      status: faker.random.arrayElement(['red', 'yellow', 'green']),
      description: faker.lorem.sentence(4),
    })
  }
  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/sqdatenbaum', (req, res) => {
  const data = [];

  for (let i = 0; i < 3; i++) {
    data.push({
      title: faker.company.companyName(),
      value: faker.random.number({ min: 15, max: 90 }),
    })
  }
  res.send(JSON.stringify({ values: data, treeData: [] }))
  console.log('TCL: data', data);
});

app.get('/api/swapcurwes', (req, res) => {
  const data = {
    list: [],
    change: [],
  }

  const fakeData = () => {
    const dataValues = [];

    for (let i = 0; i < 4; i++) {
      dataValues.push(faker.random.arrayElement(
        [1.2, 0.7, 0.4, -0.6, -1.0, 4.7, 2.0, -1, -2.4, 1.9, -5.2, -2.9, -3.7, -2.7, -1.7, -0.1]
      ));
    }
    return dataValues;
  };

  for (let i = 0; i < 4; i++) {
    data.list.push({
      name: faker.finance.currencyCode(),
      data: fakeData(),
      // change: faker.random.number({ min: 3, max: 30 }),
    });
    data.change.push(faker.random.number({ min: 3, max: 30 }));
  }

  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/systemstatus', (req, res) => {
  const data = [];

  for (let i = 0; i < 3; i++) {
    data.push({
      date: faker.date.recent(15),
      description: faker.lorem.sentence(5),
    })
  }
  res.send(JSON.stringify(data))
  console.log('TCL: data', data);
});

app.get('/api/txdatenbaum', (req, res) => {
  const data = [];

  for (let i = 0; i < 3; i++) {
    data.push({
      title: faker.company.companyName(),
      value: faker.random.number({ min: 15, max: 90 }),
    })
  }
  res.send(JSON.stringify({ values: data, treeData: [] }))
  console.log('TCL: data', data);
});

app.listen(API_SERVICE_PORT, () => {
  console.log(
    `Started API SERVICE on port ${API_SERVICE_PORT}`
  );
});