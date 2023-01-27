const add = (num1, num2) => {
    return num1 + num2;
}

const sub = (num1, num2) => {
    return num1 - num2;
}

describe('math functions', () => {
    let num1 = 5;
    let num2 = 2;
    describe('add function', () => {
        test('add', () => {
            let results = add(num1, num2);
            expect(results).toBe(7);
        })
    })
    describe('sub function', () => {
        test('subtract', () => {
            let results = sub(num1, num2);
            expect(results).toBe(3);
        })
    })
})

/*

*/

describe('testing the database', () => {
  beforeAll(async () => {
    await client.connect();
    await buildDb();
  })
  afterAll(async () => {
    await client.end();
  })

  describe('Users', () => {
    const userToCreate = {username: 'jest', password: '1234'}

    let createdUser;
    test('Create User: returns an object', async () => {
        createdUser = await createdUser(userToCreate)
        expect(typeof createdUser).toBe('object')
    })
    test('Create User: returns the same user just ')
  })
})