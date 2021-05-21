import {PreloaderComponent, PreloaderMixin} from './Preloader';

export default {
    install: (Vue, options) => {
        if (options !== undefined) {
            // eslint-disable-next-line array-callback-return
            Object.keys(PreloaderComponent.props).map((key) => {
                if (Object.prototype.hasOwnProperty.call(options, key)) {
                    PreloaderComponent.props[key].default = options[key];
                }
            });
        }

        Vue.component('preloader', PreloaderComponent);

        Vue.mixin(PreloaderMixin);
    },
};
