const authStorage = window.localStorage;
const expiredPeriod = 30 * 24 * 60 * 60 * 1000;

class Storage {
    constructor(name) {
        this.name = name;
    }

    setValue(key, value) {
        let obj = JSON.parse(authStorage.getItem(this.name));
        if (!obj) {
            obj = {};
        }
        obj.expiredAt = new Date().getTime() + expiredPeriod;
        obj[key] = value;
        authStorage.setItem(this.name, JSON.stringify(obj));
    };

    getValue(key) {
        const obj = JSON.parse(authStorage.getItem(this.name));
        if (obj) {
            if (obj.expiredAt && obj.expiredAt < new Date().getTime()) {
                this.destroy();
            } else {
                return obj[key];
            }
        }
        return undefined;
    };

    setAccessToken(value) {
        return this.setValue('accessToken', value);
    }

    setName(value) {
        return this.setValue('name', value);
    }

    getAccessToken() {
        return this.getValue('accessToken');
    }

    getName() {
        return this.getValue('name');
    }

    destroy = () => {
        authStorage.removeItem(this.name);
    };
}

export default new Storage('__TOKEN__');
