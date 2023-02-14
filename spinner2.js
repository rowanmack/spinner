const spinLine = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 100;
for (const line of spinLine) {
  setTimeout(() => {
    process.stdout.write(line);
  }, delay);
  delay += 200;
};