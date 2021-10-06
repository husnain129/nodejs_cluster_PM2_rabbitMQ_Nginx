class Fibonacci {
  public calculateFibonacci(value: number): number {
    let sum = 0;

    if (value === 0) {
      return sum;
    }
    if (value === 1) {
      sum += 1;
      return sum;
    } else {
      return (
        this.calculateFibonacci(value - 1) + this.calculateFibonacci(value - 2)
      );
    }
  }
}

module.exports = new Fibonacci();
