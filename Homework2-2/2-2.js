function MakeMultiFilter(originalArray) {
    let currentArray = [...originalArray];

    function arrayFilterer(filterCriteria, callback) {
        // Check if filterCriteria is a function
        if (typeof filterCriteria === "function") {
            // Filter currentArray based on filterCriteria
            currentArray = currentArray.filter(filterCriteria);
        }

        // Check if callback is a function
        if (typeof callback === "function") {
            callback.call(originalArray, currentArray);
        }

        // If no filterCriteria is provided, return currentArray
        if (!filterCriteria) {
            return currentArray;
        }

        // Return arrayFilterer to allow chaining
        return arrayFilterer;
    }

    return arrayFilterer;
}

// The given example usage
var arrayFilterer1 = MakeMultiFilter([1, 2, 3]);

arrayFilterer1(function (elem) {
    return elem !== 2;
}, function (currentArray) {
    console.log(this); // prints [1, 2, 3]
    console.log(currentArray); // prints [1, 3]
});

arrayFilterer1(function (elem) {
    return elem !== 3;
});

var currentArray = arrayFilterer1();
console.log('currentArray', currentArray); // prints [1]

function filterTwos(elem) { return elem !== 2; }
function filterThrees(elem) { return elem !== 3; }
var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);
var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
console.log('currentArray2', currentArray2); // prints [1]

var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)()); // prints [1, 3]
console.log(arrayFilterer4(filterThrees)()); // prints [4, 5, 6]
