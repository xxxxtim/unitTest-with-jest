// const { count } = require('./apple.js');
import { count } from './apple.js'
test('測試是否有錢(200)', () => {
    expect(count(200)).toBe('很有錢')

})