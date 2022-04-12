###  vue 3 refresh  

Whe declaring **template** code  in separate const outside the `Vue.create` app and in a js file, have it on top of the Vue declaration for loading before initialization.   
**props** only flow from parent to child direction.  
Props are attributes that need to be given a value in the parent component and explicitly declared in the child component.  
`v-bind` or `:` is used to bind dynamic values as props in the parent component.
Child components can and should never reference data directly from parents components, only props to take control.  
They should not be able to mutate parents states directly.  
child components communicate with parents through `$emit(nameOfEvent)` and parents listen through `$on(nameOfEvent)`. Data can be passed along these events as well.  
All actions that mutate/change store data should always be within the store itself to ensure proper centralization of application state.  
component names should generally be multi-word (e.g. `CalendarEntry`  
The filenames for single-file components should either be kebab-case (`calendar-entry.vue`) or PascalCase (`CalendarEntry.vue`)  
