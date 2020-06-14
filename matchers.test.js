test('tobe的測試', () => {
    // toBe 表示為 ===
    expect('123').toBe('123');
});
test('toEqual的測試', () => {
    const a = { number: '007' }
    expect(a).toEqual({ number: '007' });
});
test('toBeNull的測試', () => {
    const a = null;
    expect(a).toBeNull();
})
test('toBeUndefined的測試', () => {
    const a = undefined;
    expect(a).toBeUndefined();
});
test('toBeDdefined的測試', () => {
    const a = 123;
    expect(a).toBeDefined();
});
test('toBeTruthy的測試', () => {
    const a = 1;
    expect(a).toBeTruthy();
});
test('toBeFalsy的測試', () => {
    const a = 0;
    expect(a).toBeFalsy();
})

test('toBeGreaterThan的測試', () => {
    // >
    const a = 10;
    expect(a).toBeGreaterThan(9);
})

test('toBeGreaterThanOrEqual的測試', () => {
    // >=
    const a = 10;
    expect(a).toBeGreaterThanOrEqual(9);
})

test('toBeLessThan的測試', () => {
    // <
    const a = 10;
    expect(a).toBeLessThan(19);
})

test('toBeLessThanOrEqual的測試', () => {
    // <=
    const a = 10;
    expect(a).toBeLessThanOrEqual(20);
})

test('toBeCloseTo的測試', () => {
    // 用於處理浮點數的誤差
    const a = 0.3;
    const b = 0.4;
    expect(a + b).toBeCloseTo(0.7);
})

test('toMatch的測試', () => {
    // 用於string的比對
    const str = 'apple,banana,orange';
    expect(str).toMatch('banana');
})

test('toContain的測試', () => {
    // 用於array的比對
    const array = ['apple', 'banana', 'orange'];
    expect(array).toContain('apple');
})



const throwError = () => {
    throw new Error('this is Error');
}
test('toThrow的測試', () => {
    // 用於處理異常的比對
    expect(throwError).toThrow();//用於判斷有無丟出錯誤
    expect(throwError).toThrow('this is Error');//判斷丟出錯誤訊息是否正確

})