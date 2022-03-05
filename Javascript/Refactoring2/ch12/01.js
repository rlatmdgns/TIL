class SubclassResponsibilityError extends Error {}
class Party {
  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  monthlyCost;
}
class Department extends Party {
  monthlyCost;
}
