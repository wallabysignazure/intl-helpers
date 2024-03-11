# easy-intl

Simplify internationalization in your application, with support for multiple languages using i18next.

## Installation

To install easy-intl, run the following command in your project directory:

```bash
npm install easy-intl
```

## Usage

First, import the library in your React project:

```javascript
import { changeLanguage, t } from 'easy-intl';
```

To change the language dynamically:

```javascript
changeLanguage('en'); // Switches the current language to English
```

To translate a text:

```javascript
const greeting = t('hello'); // Retrieves the translation for the key 'hello'
```

## API

### changeLanguage(lng)

Changes the current language of the application.

- **lng**: _string_ - The language code to switch to.

### t(key, [options])

Translates a key into the current language.

- **key**: _string_ - The key to translate.
- **options**: _Object_ (optional) - Options for interpolation.

### loadNamespaces(ns, [callback])

Load additional namespaces or languages on demand.

- **ns**: _Array|string_ - Namespaces to load.
- **callback**: _Function_ (optional) - Optional callback to run after loading.

### addResources(lng, ns, resources)

Extend or override existing translations.

- **lng**: _string_ - The language code.
- **ns**: _string_ - The namespace.
- **resources**: _Object_ - The new or updated translations.

## Contributing

We welcome contributions to easy-intl! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with meaningful messages.
4. Push your branch and open a pull request.

Please make sure your code adheres to the project's coding standards and include tests if applicable.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
