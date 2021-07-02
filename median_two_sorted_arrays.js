/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let nums1Index = 0;

    let nums2Index = 0;

    let merged = [];

    while (nums1Index < nums1.length || nums2Index < nums2.length) {

        if (nums1Index >= nums1.length || nums1[nums1Index] > nums2[nums2Index]) {

            merged.push(nums2[nums2Index]);
            nums2Index++;

        } else {
            merged.push(nums1[nums1Index]);
            nums1Index++;
        }
    }

    let mergedSize = merged.length;

    let median;

    if (mergedSize % 2 !== 0) {
        median = merged[Math.floor(mergedSize / 2)];
    } else {
        let i = mergedSize / 2;
        median = (merged[i] + merged[i - 1]) / 2;

    }

    return median

};