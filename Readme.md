# Reusable dropdown widget

JS package to create multiple dropdowns on the page customized according to the parameters passed to the makeDropdown function. 

Parameters are:
- btnId - button id
- itemsId - items id
- height - suitable height according to the no. of items required in the dropdown

Features:
- DOM manipulation
- CSS transition
- CSS variables

## How to Install

```sh
npm install reusable-dropdown
```

## How to Use

Step 1- Copy HTML template given in the package and modify it as per your needs.

Step 2- Import

```js
import { makeDropdown } from 'reusable-dropdown';
```

step 3- call function

```js
// according to html template
makeDropdown(button_id, items_id, height); 

// creates a clickable hamburger button- here, hambuger(button) is button_id, hamItems(menu items) is items_id, 150(150px) is customizable height according to no. of menu items
makeDropdown('hamburger', 'hamItems', 150);  

```