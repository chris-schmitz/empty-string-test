const path = require("path")
const { readFile } = require("fs")
const { spawn } = require("child_process")

// const solutionFile = path.join(__dirname, "..", "completed-solution.js")
const solutionFile = path.join(__dirname, "..", "solution.js")

readFile(
  path.join(__dirname, "..", "testdata.csv"),
  { encoding: "utf8" },
  (error, data) => {
    if (error) throw new Error(error)
    const lines = data.split("\n")
    lines.forEach((line, index) => testLine(line, index))
  }
)

function testLine(line, index) {
  const bust = line.replace(/,/gi, "\n")
  const node = spawn("node", [solutionFile])

  node.stdin.setEncoding("utf8")
  node.stdin.write(bust)
  node.stdin.end()

  node.stdout.setEncoding("utf8")
  node.stdout.on("data", data => {
    console.log(`=== Testing chunk: ${index} ===`)
    // console.log(line)
    console.log(data)
    console.log(`========================`)
    console.log()
    console.log()
  })

  node.on("close", code => {
    // console.log("closing node")
  })
}
