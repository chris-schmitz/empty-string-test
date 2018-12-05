# The process

_The only file that you should modify_ is the `solution.js` file.

As you modify the file, you can run the command `npm test` to run the test data through your solution.

The terminal output should match the text in the `solution-output.txt` file.

# The test

This is the text from the coding challenge verbatim. I didn't add any additional formatting to make it easier to read, didn't rewrite anything to make the question more clear.

Part of the challenge (at least as I see it) is deciphering this slightly cryptic explanation to figure out what needs to be done.

## Task description

You are given a string S with only 0's and 1's in it. You are allowed to delete a string 100 any number of times from the from the input string recursively. Find out if the string can be made empty.

As for example, if S=101000 then 101000->100->empty

If S=1010001 then 1010001->1001->1->not empty

Input
Input starts with an integer T (<= 100), denoting the number of test cases.

Each case contains a string S. The size of string is at most 120000.

Output

For each test case, print "yes" if it is possible to make the string S empty, print "no" otherwise.

Each output is separated by a line break.

Code evaluation is based on output, please do NOT print anything else.

# Challenge yourself!

NO STEP DEBUGGING! When I took this test it was with an in-browser tool that didn't allow for step debugging or the browser debugging tools.

Obviously you can use both here, there's not a practical way to stop you, but I would challenge you to figure it out without those tools to give you insight. The tooling helps, but you're not testing yourself as deeply if you use them for this test.

# Example input and expected output

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

## Test values and results

The file `testdata.csv` contains 5 sets of test data that will be sent to your solution.js file. The expected terminal output for those 5 sets can be found in the `solution-output.txt`

# Don't get stuck

You should definitely try to work through this problem on your own and try to figure it out, but if you can't, reach out to another dev in the office to get a second brain to help you work through it. Don't just ask for the answer because ultimately the end answer doesn't matter, ask for help thinking it through.

Copy/pasting code without understand it doesn't test anything but your thumb and index finger, thinking through this challenge will help you grow as a dev.

:the-more-you-know-emoji:
