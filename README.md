1.Answer: *Use getElementById  when selecting one element by id 
*Use getElementsByClassName  when selecting multiple elements by class
*Use querySelector  when selecting the first element with CSS selector
Use querySelectorAll  when selecting all elements with CSS selector

2.Answer: We create a new element using document.createElement().
Then we add content using textContent or innerHTML.
Finally, we insert it into the DOM using appendChild() or append().
 
3.Answer: Event Bubbling is a process in the DOM where an event starts from the target element and then bubbles up (propagates) to its parent elements.
When you click on a child element:

The event first runs on the clicked (target) element.

Then it moves up to its parent.

Then to the grandparent.

It continues until it reaches the document.

4.Answer: Event Delegation is a technique where we add a single event listener to a parent element instead of adding event listeners to multiple child elements.

It works because of event bubbling — the event bubbles up from the child to the parent.

5.Answer: preventDefault() stops the default browser action of an element, such as form submission or link navigation.
stopPropagation() stops the event from bubbling up to parent elements.
One controls browser behavior, and the other controls event propagation.