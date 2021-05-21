<template>
    <div :class="wrapperClass">
        <img :src="imgSrc" :class="imgClass">
    </div>
</template>

<script>
    import get from 'lodash.get';

    const PreloaderComponent = {
        props: {
            wrapperClass: {
                type: String,
                default: 'preloader',
            },
            imgClass: {
                type: String,
                default: 'preloader__img',
            },
            imgSrc: {
                type: String,
                default: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNjQgOS43NUE1NC4yNSA1NC4yNSAwIDAgMCA5Ljc1IDY0SDBhNjQgNjQgMCAwIDEgMTI4IDBoLTkuNzVBNTQuMjUgNTQuMjUgMCAwIDAgNjQgOS43NXoiIGZpbGw9IiMwMDAwODAiLz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA2NCA2NCIgdG89IjM2MCA2NCA2NCIgZHVyPSIxMDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg==',
            },
        },
        data() {
            return {
            };
        },
    };

    const PreloaderMixin = {
        data() {
            return {
                PreloaderProperties: {
                    oLockers: {},
                },
            };
        },
        methods: {
            setLockPreloader(sPreloaderName) {
                if (get(this.PreloaderProperties, ['oLockers', sPreloaderName], null) === null) {
                    this.$set(this.PreloaderProperties.oLockers, sPreloaderName, 0);
                }

                this.PreloaderProperties.oLockers[sPreloaderName]++;
            },
            unsetLockPreloader(sPreloaderName) {
                if (get(this.PreloaderProperties, ['oLockers', sPreloaderName], null) === null) {
                    this.$set(this.PreloaderProperties.oLockers, sPreloaderName, 0);
                }

                this.PreloaderProperties.oLockers[sPreloaderName]--;
            },
            isActivePreloader(sPreloaderName) {
                return get(this.PreloaderProperties, ['oLockers', sPreloaderName], 0) > 0;
            },
        },
    };

    export default PreloaderComponent;

    export {PreloaderComponent, PreloaderMixin};
</script>
