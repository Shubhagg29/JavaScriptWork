function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
     if (num > max_num) {
     
       max_num =num
     }
     }
     return max_num;
     }

     let numbs=[1,5,16,10]
     console.log(find_max(numbs))