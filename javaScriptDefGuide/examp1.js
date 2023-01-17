// this class extends Map so the get() method returns the specified value instesd of null when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super(); // invoke the superclass constructor
    this.defaultValue = defaultValue; // remember the default value
  }

  get(key) {
    if (this.has(key)) {
      // if the key is already in the map
      return super.get(key); // return its value from superclass
    } else {
      return this.defaultValue; // Otherwise return the default value
    }
  }
}
// this class computes and displays letter frequency histograms
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0); // map from letters to counts
    this.totalLetters = 0; // how many letter in all
  }
  // this function updates the histogram with the letters of text.
  add(text) {
    // remove whitespace from text, and conerts to upper case
    text = text.replace(/\s/g, "").toUpperCase();

    for (let character of text) {
      let count = this.letterCounts.get(character); // get old count
      this.letterCounts.set(character, count + 1); // increment it
      this.totalLetters++;
    }
  }
  //convert the histogram to a string that displays an ASCII graphic
  toString() {
    // convert the map to an array of [key, value] arrays
    let entries = [...this.letterCounts];

    // sort the array by count, then alphabetically
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    //converts the counts to precentages
    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }
    // drop any entrieds less than 1 %
    entries = entries.filter((entry) => entry[1] >= 1);

    //now convert each entry to a line
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );
    // and return the concatenated lines, seperated by new line characters
    return lines.join("\n");
  }
}
// the async (promise- returning) function creatse a histogram object,
// asynchronusly reads chunks of text from standard input and adds those chunks to
// the histogram when it raeches the end of the stream it return this histogram

async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8"); // read uni code string, not bytes
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// this one final line of code is the main body of the program.
// it make tha Histogram object from standard input, the prints the histogram.
histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
