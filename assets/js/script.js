class Sort {
  constructor() {
    this.textToSortContainer = document.querySelector("textarea");
    this.textToSort;
    this.sortTextBTN = document.querySelector("button");
    this.output = document.querySelector(".output");
    this.events();
  }

  events() {
    this.sortTextBTN.addEventListener("click", () => {
      this.textToSort = this.textToSortContainer.value;
      this.sortText(this.textToSort);
    });
  }

  sortText(string) {
    string = this.removeChars(string);
    let stringAsArray = string.split("");
    let sortedStringAsArray = [];
    sortedStringAsArray = this.splitToSort(stringAsArray);
    let sorted = sortedStringAsArray.join("");
    this.output.innerHTML = sorted;
  }

  removeChars(string) {
    return string.replace(/[<>+'". ,\/0-9#?@|!$%\^&\*\]\[;:{}=\-_`~()\r?\n|\r\\]/g, "").toLowerCase();
  }

  splitToSort(array) {
    //Finds halfway point of array
    let halfOfArray = array.length / 2;

    if (array.length < 2) {
      return array;
    }
    //create subarray be removing first half of the original array
    let subarray1 = array.splice(0, halfOfArray);

    return this.sortSplits(this.splitToSort(subarray1), this.splitToSort(array));
  }

  sortSplits(subarray1, subarray2) {
    let sortedSubArray = [];
    // As long as both subarrays have at least 1 item compare the first items of each and remove the smallest one from its current array and add it to the sorted array.
    while (subarray1.length && subarray2.length) {
      subarray1[0] < subarray2[0] ? sortedSubArray.push(subarray1.shift()) : sortedSubArray.push(subarray2.shift());
    }
    //Concat all the arrays to include any left over elements, this will be the largest.
    return [...sortedSubArray, ...subarray1, ...subarray2];
  }
}

new Sort();
