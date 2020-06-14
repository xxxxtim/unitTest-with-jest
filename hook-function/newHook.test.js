import NewHook from './newHook.js';
const Hook = new NewHook();

// beforeAll(() => {
//     console.log('beforeAll:吃東西前要付錢');
// });

// beforeEach(() => {
//     console.log('beforeEach:吃東西前要洗手')
// });

// afterEach(() => {
//     console.log('afterEach:吃完東西要擦嘴巴')
// });

// afterAll(() => {
//     console.log('afterAll:吃完東西要洗碗');
// })
describe('泡麵的測試', () => {
    test('測試 泡麵使用湯匙 ', () => {
        Hook.food(1);
        Hook.spoon();
        console.log(Hook.tool);
        expect(Hook.tool).toEqual('泡麵使用湯匙');
    });
    test('測試 泡麵加番茄醬 ', () => {
        Hook.food(1);
        Hook.tomato();
        console.log(Hook.tool);
        expect(Hook.tool).toEqual('泡麵加番茄醬');
    });
})

describe.only('牛排的測試', () => {
    test('測試 牛排使用刀子 ', () => {
        Hook.food(2);
        Hook.fork();
        console.log(Hook.tool);
        expect(Hook.tool).toEqual('牛排使用刀子');
    });
    test('測試 牛排加金薄 ', () => {
        Hook.food(2);
        Hook.gold();
        console.log(Hook.tool);
        expect(Hook.tool).toEqual('牛排加金薄');
    });
})


