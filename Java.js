
function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + 'count');
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  // const productTotal = productNewCount * 59;
  let productTotal = 0;
  if (product == 'phone') {
    productTotal = productNewCount * 1219;
  }
  if (product == 'case') {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + 'total').innerText = '$' + productTotal;
}