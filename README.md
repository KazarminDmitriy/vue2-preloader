# vue2-preloader

Preloader plugin for Vue.js 2 allows you to use the preloader anywhere on site

##### Features:
- [Using multiple independent preloaders per page](#using-multiple-independent-preloaders-per-page)
- [Customization of each preloader](#customization-of-each-preloader): a unique image and/or css classes for each preloader
- [Dependence of preloader activity on several parameters](#component-functions)
## Installation

```sh
$ npm install @phoenix91/vue2-preloader --save
```

```js
import Vue from 'vue'
import preloader from '@phoenix91/preloader';

Vue.use(preloader);
```

After installation `<preloader />` component will become available for use

## Usage

### Component properties

The component vue2-prealoder has several options for customization

| Name           | Type    | Default                              |
|----------------|---------|--------------------------------------|
| wrapperClass   | String  | 'preloader'                          |
| imgClass       | String  | 'preloader__img'                     |
| imgSrc         | String  | base64-code of example preloader     |

The HTML template of preloader has the next structure

```text
div > img
```

### Specifying property values during installation

When installing the preloader, you can specify the default property values

#### Example:
```js
import Vue from 'vue'
import preloader from '@phoenix91/preloader';

Vue.use(preloader, {
    wrapperClass: 'my-wrapper-preloader-class',
    imgClass: 'my-img-preloader-class',
    imgSrc: '/path-to-img.jpg',
});
```

Instead of the address to the image, you can use the base64-code of the image

#### Example:
```js
import Vue from 'vue'
import preloader from '@phoenix91/preloader';

Vue.use(preloader, {
    imgSrc: 'data:image/svg+xml;base64,<base64-code>',
});
```

### Component functions

The component vue2-prealoder has several functions

- __setLockPreloader(sPreloaderName)__ - set/add block of content and show preloader
- __unsetLockPreloader(sPreloaderName)__ - unset/reduce block of content and hide preloader
- __isActivePreloader(sPreloaderName)__ - check preloader activity

The preloader can depend on several parameters. For example, you want the preloader to be shown until a response from the server for 2 requests is received. To do this, when sending these requests, set the lock twice using the __setLockPreloader__ function. When receiving a response from the server, unset the lock using the __unsetLockPreloader__ function

#### Example:
```js
// first request
this.setLockPreloader('main-preloader');
axios.request({})
    .then(() => {
    })
    .finally(() => {
        this.unsetLockPreloader('main-preloader');
    });

// second request
this.setLockPreloader('main-preloader');
axios.request({})
    .then(() => {
    })
    .finally(() => {
        this.unsetLockPreloader('main-preloader');
    });
```

To use the finally, use package https://www.npmjs.com/package/promise.prototype.finally

### Using preloader in html

Use the `<preloader />` tag and the __isActivePreloader__ function to show/hide the preloader and hide/show the content

#### Example:
```vue
<preloader v-if="isActivePreloader('main-preloader')" />
<div v-else></div>
```

### Using multiple independent preloaders per page

#### Example:
```vue
<preloader v-if="isActivePreloader('main-preloader')" />
<div v-else></div>

<preloader v-if="isActivePreloader('menu-preloader')" />
<div v-else></div>

<preloader v-if="isActivePreloader('sidebar-preloader')" />
<div v-else></div>
```

### Customization of each preloader

#### Example:
```vue
<preloader v-if="isActivePreloader('main-preloader')" wrapperClass="my-custom-wrapper-class" />

<preloader v-if="isActivePreloader('menu-preloader')" imgClass="my-custom-img-class" />

<preloader v-if="isActivePreloader('sidebar-preloader')" imgSrc="/path-to-custom-img" />
```

Attributes of the `<preloader />` tag has a higher priority than the [default properties](#specifying-property-values-during-installation)

## License

[MIT](http://opensource.org/licenses/MIT)