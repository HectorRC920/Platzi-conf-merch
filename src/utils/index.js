export const handleSumTotal = (cart) => {
    let totalSum = cart.reduce((acc, crr) => acc + crr.price, 0);
    return totalSum;
  };