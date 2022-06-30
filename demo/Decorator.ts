class DatabaseDecorator {
    primary(target: any, propertyName: any): any {
        // console.log('controller: ', propertyName, target);
        class Ref {
            _value: string = "";
            get value() {
                return this._value;
            }
            set value(value: string) {
                this._value = value
                console.log("runDangerousScript", this._value)
            }
        }
        return new Ref();
    }
    controller(controllerName: string) {
        return function (target: any, propertyName: any) {
            return target;
        };
    }
}

function createDatabaseModel() {
    return new DatabaseDecorator();
}
const model = createDatabaseModel();

// @ts-ignore
@model.controller("user")
class C {
    constructor(name: string) {
        // console.log(name)
    }
    @model.primary
    _id: string = "user-xxx--{{name}}";
}

console.log(new C("user-xxx--name")._id = "user");