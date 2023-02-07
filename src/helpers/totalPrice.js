export function totalPrice(cart) {
  let subtotal = 0;
  let total = 0;
  let count = 0;

  if (cart?.length > 0) {
    subtotal = cart?.map((item) => item.price * item.quantity);
    total = subtotal.reduce((a, b) => a + b);
    count = cart?.map((item) => item.quantity).reduce((a, b) => a + b);
  }

  return { total, count };
}
