const localStorage = window.localStorage;
const historyName = "lz.play.history";
export default {
    add(obj) {
        let list = this.get();
        list = list.reverse();
        if (list) {
            for (let len = list.length, i = len - 1; i >= 0; --i) {
                if (list[i].href === obj.href) {
                    list.splice(i, 1);
                    break;
                }
            }
            list.push(obj);
        } else {
            list = [obj];
        }
        localStorage.setItem(historyName, JSON.stringify(list));
    },
    remove(obj){
        const list = this.get();
        for (let len = list.length, i = len - 1; i >= 0; --i) {
            if (list[i].href === obj.href) {
                list.splice(i, 1);
                break;
            }
        }
    },
    get(){
        let result = localStorage.getItem(historyName) || '[]';
        result = JSON.parse(result);
        result.reverse();
        return result;
    }
}