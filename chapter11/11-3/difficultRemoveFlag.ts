// 래핑함수 추가 후에는 deliveryDate를 deliveryDateHelperOnly 등으로 명명해서 직접 호출하지 말라는 의미를 명시할 수 있다.
function deliveryDateHelperOnly(anOrder, isRush: boolean) {
  let result;
  let deliveryTime;
  if (anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") {
    deliveryTime = isRush ? 1 : 2;
  } else if (anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
    deliveryTime = 2;
    if (anOrder.deliveryState === "NH" && !isRush) {
      deliveryTime = 3;
    }
  } else if (isRush) {
    deliveryTime = 3;
  } else if (anOrder.deliveryState === "ME") {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }

  result = anOrder.placedOn.plusDays(2 + deliveryTime);
  if (isRush) {
    result = result.minusDays(1);
  }
  return result;
}

function rushDeliveryDate(anOrder) {
  return deliveryDateHelperOnly(anOrder, true);
}

function regularDeliveryDate(anOrder) {
  return deliveryDateHelperOnly(anOrder, false);
}

export default {};
