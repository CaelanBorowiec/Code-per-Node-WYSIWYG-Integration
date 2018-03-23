# Drupal Code per Node integration with CKEditor

This is a code snippet that will apply CSS rules saved in the [Code per Node](https://www.drupal.org/project/cpn) module with the WYSIWYG editor, [CKEditor](https://www.drupal.org/project/ckeditor).
With minor modification, this can be adapted to work with the [Wysiwyg](https://www.drupal.org/project/wysiwyg) module as well.

## Important Note
This is a "quick hack" to solve the majority of a problem.  It should not be considered "production ready", and as such, use at your own risk.

## Setup

Follow these steps to get this working quickly.

### Prerequisite

Install the [JS injector](https://www.drupal.org/project/js_injector) module.

### Adding the script

* Open up the JS injector page (/admin/config/development/js-injector).
* Click Add.
* Enter a name and a description.
* Paste the contents of [cssInject.js](./blob/master/cssInject.js).
* Select "The listed pages only", and enter:
```
node/*/edit
```
* Hit save, and test by editing a page that has CPN CSS.

## Authors
* **Caelan Borowiec** - *Initial work* - [CaelanBorowiec](https://github.com/CaelanBorowiec/)
