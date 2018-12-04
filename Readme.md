You are given a string S with only 0's and 1's in it. You are allowed to delete a string 100 any number of times from the from the input string recursively. Find out if the string can be made empty.

As for example, if S=101000 then 101000->100->empty

If S=1010001 then 1010001->1001->1->not empty

input
Input starts with an integer T (<= 100), denoting the number of test cases.

Each case contains a string S. The size of string is at most 120000.

Output
f
For each test case, print "yes" if it is possible to make the string S empty, print "no" otherwise.

Each output is separated by a line break.

Code evaluation is based on output, please do NOT print anything else.

NO STEP DEBUGGING! Or at least see if you can do it without step debugging (I wasn't able to use a step debugger when I took the actual test).

---

Sample Input:

```
2
101000
1010001
```

Sample Output:

```
yes
no
```
