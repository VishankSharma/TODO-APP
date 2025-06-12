// helper.js
export function getTicket(n) {
  const ticket = [];
  for (let i = 0; i < n; i++) {
    ticket.push(Math.floor(Math.random() * 10));
  }
  return ticket;
}

export function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
