# JavaScript Data Structures - Linked Lists

This repository contains various implementations of linked list data structures in JavaScript. Linked lists are fundamental data structures that consist of nodes, where each node contains a value and a reference (link) to the next node in the sequence.

## Types of Linked Lists Implemented

1. **Singly Linked List** - Each node contains data and a pointer to the next node
2. **Doubly Linked List** - Each node contains data and pointers to both the next and previous nodes
3. **Circular Linked List** - Last node points back to the first node, creating a circular structure
4. **Linked List Operations** - Comprehensive implementation with various operations

## Features

Each implementation includes common operations such as:

- **append/prepend** - Add elements to the end/beginning of the list
- **insertAt** - Insert an element at a specific position
- **remove/removeAt** - Remove elements by value or position
- **find** - Search for an element in the list
- **toArray** - Convert the linked list to an array
- **print** - Display the contents of the linked list

## Practical Applications

The repository also includes practical applications of linked lists:

- **Cycle Detection** - An algorithm that detects if a linked list has a cycle
- **LRU Cache** - Least Recently Used cache implementation using a doubly linked list
- **Round Robin Scheduler** - A CPU scheduling algorithm implementation using a circular linked list

## Running the Code

Open `index.html` in your browser to see the linked list implementations in action. The page includes buttons to run and visualize each implementation.

## Time and Space Complexity Analysis

| Operation    | Singly Linked List | Doubly Linked List | Circular Linked List |
|--------------|-------------------|-------------------|---------------------|
| Access       | O(n)              | O(n)              | O(n)                |
| Insert Head  | O(1)              | O(1)              | O(1)                |
| Insert Tail  | O(1)*             | O(1)              | O(1)                |
| Remove Head  | O(1)              | O(1)              | O(1)                |
| Remove Tail  | O(n)              | O(1)              | O(n)                |
| Search       | O(n)              | O(n)              | O(n)                |
| Space        | O(n)              | O(n)              | O(n)                |

\* _O(1) with tail pointer, O(n) without_

## Why Linked Lists?

Linked lists offer several advantages over array-based data structures:
- Dynamic size (no need to declare size ahead of time)
- Efficient insertions and deletions (when position is known)
- Memory efficiency (allocated as needed)

However, they also have disadvantages:
- No random access (need to traverse from the beginning)
- Extra memory for storing pointers
- Not cache-friendly due to non-contiguous memory locations
