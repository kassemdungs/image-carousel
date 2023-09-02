const MyArrLines =(
    "Normal Line",
    "sold Line",
    "Dotted Line",
    "Wavy Line",
    "Dashed Line",
    "Double Line",
    "Groove Line",
    "Ridge Line",
    "Outset Line",
    "Inset Line",
)

for (const line of MyArrLines) {
    if (line. startsWith("D")) continue
    console.log('string starting with "D" removed')
    continue
}
console.log(line)