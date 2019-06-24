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

app.get('/api/checkscorecard', async (req, res) => {
  try {
    const data = [];
  
    for (let i = 0; i < 15; i++) {
      await data.push({
        name: await faker.finance.currencyCode(),
        status: await faker.random.arrayElement(['red', 'yellow', 'green']),
        rot: await faker.random.number({ min: 1, max: 40 }),
        gelb: await faker.random.number({ min: 1, max: 40 }),
        gRun: await faker.random.number({ min: 1, max: 60 }),
        date: await faker.date.recent(90),
        nDef: await faker.random.number({ min: 1, max: 80 }),
        nSusp: await faker.random.number({ min: 1, max: 25 }),
        persentRot: await faker.random.number({ min: 1, max: 100 }),
        persentGelb: await faker.random.number({ min: 1, max: 100 }),
      })
    }
  
    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data));
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/govicurwes', async (req, res) => {
  try {
    const data = {
      list: [],
      change: [
        faker.random.number({ min: 3, max: 30 }),
        faker.random.number({ min: 3, max: 30 }),
        faker.random.number({ min: 3, max: 30 }),
        faker.random.number({ min: 3, max: 30 }),
      ],
    };
    const value = [2.6, 0.3, 0.1, 2.2, -3.5, -4.4, 3.0, -5.8, -3.4, 3.1, -2.9, -2.9, -0.1, -1.7, -2.7, -3.7];
  
    for (let i = 0; i < 4; i++) {
      await data.list.push({
        name: await faker.finance.currencyCode(),
        data: [
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
        ],
      });
    }
  
    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data));
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/gruppe', async (req, res) => {
  try {
    const data = []

    const fakeValue = async () => await faker.random.arrayElement(
      [0.3, 5.3, 1.4, 1.1, 2.7, 0.9]
    );

    for (let i = 0; i < 2; i++) {
      await data.push({
        title: `Grouppe ${i + 1}`,
        data: [
          {
            name: 'SLI',
            value: await fakeValue(),
            prevValue: await fakeValue(),
          },
          {
            name: 'Cash-YP',
            value: await fakeValue(),
            prevValue: await fakeValue(),
          },
          {
            name: 'QPR',
            value: await fakeValue(),
            prevValue: await fakeValue(),
          },
        ]
      })
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/kurs', async (req, res) => {
  try {
    const value = [-0.68, -0.21, 0.9, -0.45, 1.45, -1.32, 1.71, 1.54, 1.61, 1.70, 2.75, -1.21];

    const allocations = {
      title: 'ALLOKATIONSFAKTOR',
      data: [],
    };
    const kurs = {
      title: 'KURS-WÄHRUNG',
      data: [],
    }

    for (let i = 0; i < 6; i++) {
      await kurs.data.push({
        name: await faker.random.arrayElement(['Dax', 'SDax', 'MDax', 'TecDax', 'Euro', 'NASDAQ', 'AMEX', 'RUSSELL', 'CBOE', 'CSI 300', 'Hang']),
        value: faker.random.arrayElement(value),
      });

      await allocations.data.push({
        name: await faker.random.arrayElement(['Dax', 'SDax', 'MDax', 'TecDax', 'Euro', 'NASDAQ', 'AMEX', 'RUSSELL', 'CBOE', 'CSI 300', 'Hang']),
        value: faker.random.arrayElement(value),
      })
    }

    console.log('TCL: kurs', kurs);
    console.log('TCL: allocations', allocations);
    const data = { kurs, allocations };
    return await res.send(JSON.stringify(data));
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/rsxbottomup', async (req, res) => {
  try {
    const data = {
      values: []
    };

    for (let i = 0; i < 3; i++) {
      await data.values.push({
        title: await faker.finance.accountName(),
        value: await faker.random.number({ min: 15, max: 90 })
      })
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/scheduling', async (req, res) => {
  try {
    const data = [];
    for (let i = 0; i < 7; i++) {
      await data.push({
        date: await faker.date.recent(40),
        type: await faker.random.arrayElement(['Daily', 'Monthly', 'Quarterly']),
        status: await faker.random.arrayElement(['red', 'yellow', 'green']),
        description: await faker.lorem.sentence(4),
      })
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/sqdatenbaum', async (req, res) => {
  try {
    const data = {
      values: [],
      treeData: [],
    };

    for (let i = 0; i < 3; i++) {
      await data.values.push({
        title: await faker.company.companyName(),
        value: await faker.random.number({ min: 15, max: 90 }),
      })
    }

    console.log('TCL: data', data);
    if (data && data.values.length === 3) {
      return await res.send(JSON.stringify(data))
    }
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/swapcurwes', async (req, res) => {
  try {
    const data = {
      list: [],
      change: [],
    };
    const value = [1.2, 0.7, 0.4, -0.6, -1.0, 4.7, 2.0, -1, -2.4, 1.9, -5.2, -2.9, -3.7, -2.7, -1.7, -0.1];

    for (let i = 0; i < 4; i++) {
      await data.list.push({
        name: await faker.finance.currencyCode(),
        data: [
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
          faker.random.arrayElement(value),
        ],
      });
      await data.change.push(faker.random.number({ min: 3, max: 30 }));
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/systemstatus', async (req, res) => {
  try {
    const data = [];

    for (let i = 0; i < 3; i++) {
      await data.push({
        date: await faker.date.recent(15),
        description: await faker.lorem.sentence(5),
      })
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify(data))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.get('/api/txdatenbaum', async (req, res) => {
  try {
    const data = [];

    for (let i = 0; i < 3; i++) {
      await data.push({
        title: await faker.company.companyName(),
        value: await faker.random.number({ min: 15, max: 90 }),
      })
    }

    console.log('TCL: data', data);
    return await res.send(JSON.stringify({ values: data, treeData: [] }))
  } catch (e) {
    await res.send(JSON.stringify(e));
  }
});

app.listen(API_SERVICE_PORT, () => {
  console.log(
    `Started API SERVICE on port ${API_SERVICE_PORT}`
  );
});