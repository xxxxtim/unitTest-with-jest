import { fetchData, fetchTwoData, fetchThreeData, fetchFourData } from './fetchData.js'

test('fetchData測試', function (done) {
    fetchData(function (data) {
        expect(data).toEqual({
            success: true,
        })
        done();
    })
});

test('fetchTwoData', () => {
    // 思考一個問題，如果 沒有return 錯誤的連結會測試成功
    // 反之 則相反
    return fetchTwoData().then(function (response) {
        expect(response.data).toEqual({
            success: true
        })

    })

})


test('fetchThreeData', () => {
    // 如果是正確的連結 catch那邊就不會執行，程式一定會測試成功
    // 如果是錯誤的連結 catch那邊執行

    // 因此必須使用 斷言，執行一次 expect
    expect.assertions(1);

    return fetchThreeData().catch(function (err) {
        // console.log(err.toString());
        expect(err.toString().indexOf('404') > -1).toBe(true)

    })

})

test('fetchFourData', async () => {
    await expect(fetchFourData()).resolves.toMatchObject({
        data: {
            success: true,
        }

    })

})

// test('fetchFourData', async () => {
//     const response = await fetchFourData();
//     expect(response.data).toEqual({
//         success: true,
//     })

// })