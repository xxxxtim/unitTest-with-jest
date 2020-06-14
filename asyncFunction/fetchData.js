import axios from 'axios';
export const fetchData = function (fn) {
    axios.get('http://a.jspang.com/jestTest.json')
        .then(
            function (response) {
                fn(response.data);
            },
            function (err) {
                console.log(err);
            }
        )
};

export function fetchTwoData() {
    // 給定錯誤的連結
    // return axios.get('http://a.jspang.com/jestTest1.json');
    // 給定正確的連結
    return axios.get('http://a.jspang.com/jestTest.json');

};

export function fetchThreeData() {
    // 給定錯誤的連結
    return axios.get('http://a.jspang.com/jestTest1.json');

}
// async await測試
export function fetchFourData() {
    // 給定錯誤的連結
    return axios.get('http://a.jspang.com/jestTest.json');

}