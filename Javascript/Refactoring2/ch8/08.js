const csvData = `office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Banalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;

const acquireData = (input) =>
  input
    .split("\n")
    .slice(1)
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(","))
    .filter((record) => record[1].trim() === "India")
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));

console.log(acquireData(csvData));
