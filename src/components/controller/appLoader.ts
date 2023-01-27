import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a14eff2b7eab4d74808023bc6f9736b9', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

