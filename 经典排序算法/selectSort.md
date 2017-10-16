# 选择排序

选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。

### 1. 算法步骤

* 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
* 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
* 重复第二步，直到所有元素均排序完毕。

### 2. 代码实现

```
function selectionSort(arr) {
    var len = arr.length
    var minIndex, temp
    for (var i = 0; i < len - 1; i++) {
        minIndex = i
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     // 寻找最小的数
                minIndex = j                 // 将最小数的索引保存
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
```