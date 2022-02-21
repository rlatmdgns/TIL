const payAmount = (employee) => {
  let result;
  if (employee.isSeperated) return { amount: 0, reasonCode: "SEP" };
  // 퇴사
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
  return { amount: 100, reasonCode: "WRK" }; // 재직
};
