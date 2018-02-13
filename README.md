# MS04-13-Filters-Mixins

![App.vue](../assets/a.png?raw=true)
![Exercise11.vue](../assets/b.png?raw=true)

**Note: edit `main.js` to switch between `App.vue` and `Exercise11.vue`**

## `Main.js`
* Globally-registered filter `toLowercase` used in `App.vue`
* Globally-registered filter `lengthOfWord` used in `Exercise11.vue`
* Globally-registered mixin with `created` lifecycle hook
  * Global mixins are added to every instance and component in the application (not recommended)

## `App.vue`
* Displays `Hello World!` in lowercase using global filter
* Uses computed property in `fuitMixin.js` to filter list of fruits
* Includes component `List.vue`
  * Also uses computed property in `fruitMixin.js` to filter list of fruits
  * Has a `created` lifecycle hook at the component level
* Has a button to alter data to show that scope of data in mixins

## `fruitMixin.js`
* Has a computed property to show that it may be better than using a filter
* Has a `created` lifecycle hook to show when it is loaded

## Merging of Mixins
### `created` lifecycle hooks appear in the following order:
1. Global mixin with the new Vue instance in `main.js`
2. Global mixin when `render()` calls `App.vue`
3. Local mixin `fruitMixin` when called by `App.vue`
4. Global mixin when `App.vue` calls `List.vue`
5. Local mixin `fruitMixin` when called by `List.vue`
6. Local `created` hook in `List.vue` (component goes last to override mixins)

## `Exercise11.vue`
* Uses local filter `rev` to reverse text
* Uses global filter `lengthOfWord` to append length of word
* Uses computed property in `computedMixin.js` to reverse text
* Uses computed property in `computedMixin.js` to append length of word

#### End of Section 13, lecture 179.
