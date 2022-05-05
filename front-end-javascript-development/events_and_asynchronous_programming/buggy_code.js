// The browser's default behavior, when a user clicks any child node of an `<a>` element, is to redirect the user to a webpage at the address specified by the value of the `href` attribute. 

// While the `click` event would be prevented from being propagated up to any other event listeners on ancestor elements due to `stopPropagation`, the developer is probably looking for the functionality provided by `preventDefault`, which stops the browser from executing its default behavior when a particular event is fired.