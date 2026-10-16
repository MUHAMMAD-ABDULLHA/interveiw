// closure 
const printCounter = () => {
    let count = 0; 

    return {
        increment:( val = 2 ) => {
            count += val;
        }, 
        get Value() {
            return count;
        },
    };
};

// curring
const multiply = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}