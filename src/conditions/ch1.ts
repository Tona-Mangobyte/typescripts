
class SimpleCondition {
    test1(obj: any) {
        if (obj && obj.id) {
            console.log('has id property')
        }
    }
}
const obj = {};
new SimpleCondition().test1(obj)
