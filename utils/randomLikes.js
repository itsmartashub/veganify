export default (min = 3.5, max = 5) => {
    let randomNum = Math.random() * (max - min) + min;
    return randomNum.toFixed(1);
};
