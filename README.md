# Vue/VueX + JSX boilerplate

To run:

    npm install
    npm start
    
## Good to know

### Alias
There's an alias added for importing files from **src** mapped to ~
This allows you to always start from src-folder and not hanving to ../../../../ your way up.

Example:

    import myComponent from '~/components/myComponent'

**equals**

    import myComponent from 'src/components/myComponent'


### JSX
The project uses <a href="https://vuejs.org/v2/guide/render-function.html" target="_blank">jsx</a> instead of the original vue-templates. Along with this, we use external stylesheets with SASS instead of using scoped styles for each component.

### Internationalization

Language is governed by the url-paramater "lang". So for english and swedish are supported. Fallback is to use english.
To use another language: 

    http://localhost:3000?lang=sv
