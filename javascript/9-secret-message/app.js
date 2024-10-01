let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Removing the last element: The pop() method removes the last element of the array (in this case, 'JavaScript')
secretMessage.pop()

// Adding elements to the end of an array: The push() method adds new elements to the end of the array. Here we add the words 'to' and 'Program'.
secretMessage.push('to', 'Program')

// Here we replace the element at index 7 (originally 'easily') with 'right'.
secretMessage[7] = 'right'

// Removing the first element: The shift() method removes the first element of the array (in this case, 'Learning') and returns it.
secretMessage.shift()

// We add 'Programming' to the beginning, this will now be the first element of the array.
secretMessage.unshift('Programming')

// Changing part of the array: The splice() method modifies the array starting at index 6. 
// 6 is the index from which we start changes. 5 is the number of elements to remove starting at this index. In this case, this removes 5 elements (ie from index 6 to 10). "know," is the element that will be added to replace the removed elements. The array will now contain a new element.
secretMessage.splice(6, 5, "know,")

// The join(' ') method joins array elements into a string, separated by spaces. This output will contain the final version of your message.
console.log(secretMessage.join(' '))

