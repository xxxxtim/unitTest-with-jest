export default class NewHook {
    food(number) {
        this.usr = number == 1 ? '泡麵' : '牛排'
    };

    spoon() {
        this.tool = this.usr + '使用湯匙'
    };
    fork() {
        this.tool = this.usr + '使用刀子'
    };
    gold() {
        this.tool = this.usr + '加金薄'
    };
    tomato() {
        this.tool = this.usr + '加番茄醬'
    };
}