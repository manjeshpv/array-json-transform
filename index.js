/**
 * Created by ManjeshV on 3/19/2015.
 */
module.exports = {
    array2json: function (array) {
        var json = [];
        array.map(function (item, index) {
            var tempJSON = {}
            if (index != 0) {
                item.forEach(function (item, index) {
                    tempJSON[array[0][index]] = item
                })
                json.push(tempJSON)
            }
        })
        return json;
    },
    json2array: function (json) {
        var keys = [], array = []
        for (i in json[0]) {
            keys.push(i)
        }
        array.push(keys)
        json.map(function (item) {
            var tempValues = []
            for (i in item) {
                tempValues.push(item[i])
            }
            array.push(tempValues)
        })
        return array
    }
}