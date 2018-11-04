# react.i18next & React Hooks Sample Project

https://www.cornelia-schulz.net/localisation-With-I18next
## i18next
### yarn
$ yarn add react-i18next i18next i18next-browser-languagedetector i18next-xhr-backend
$ yarn add -D @alienfast/i18next-loader

### webpack.config.js
add the following to the webpack.config.js file


    {
      test: /locales/,
      loader: '@alienfast/i18next-loader',
      // options here
      //query: { overrides: [ '../node_modules/lib/locales' ] }
    }

### i18n.js
Create i18n.js file to configure storage of language files and initialise i18next

### strings.json
Language files should be stored as json inside the public folder in a folder called locales

### index.json
Include i18n in index.js

### components
Update components with text to use {t("stringname")}

### interpolation


    {
      "click": "You clicked {{count}} times."
    }


Sample:


const count = 0

i18next.t('click', {count});

// -> "You clicked 0 times."

To replace more than just one placeholder with a variable, use:

<p>{t('Counter.previous', {count: count, prevCount: prevCount})}</p>


## React Hooks
https://www.cornelia-schulz.net/react-hooks
