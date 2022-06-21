# Singly Linked List
the linked list it's solved to us some of the problems it faced in the array 
like we can insert in first or last or anywhere without the need to looping throw list
because the linked list dynamic size .in linked list it contains nodes we have a head, tail.
the nodes in the linked list contains the value or data and the next or pointer
the point indicates to next value or data, last next indicates to null


## Challenge

created linked list and insert some of the elements to a list and we check if the numbers it's there or not
if there true else false and convert the list to string `"{ a } -> { b } -> { c } -> NULL"` 
then I test the list if it's empty or not and test the insert element if it works,
ya we do coubles of test 

## Approach & Efficiency

in this challenge, we used to implement classes the Big O Notation for time complexity 
for classes big o(1) like insert method, and for methods like toStirg and print and include it takes big o(n)

## API


***includes:*** in this method we check if the number it's there or not and I used them while loop to looping throw list that takes big o(n) it's depended on the length of the list and the arguments value and return the boolean 

***insert*** this method adds the elements to the list and I check if the head is null I make the trail and
head pointer to the value if not I make the trail pointer to the next value and trial equal value, the argument equal none
and return none

***to String***  representing the values in  linked list ,formatted as`"{ a } -> { b } -> { c } -> NULL"` 
the arguments equal none and return string.

