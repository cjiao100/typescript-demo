type SumValue = {
  money: number;
  count1: (value: number) => void;
};

let sumValue1: SumValue = {
  money: 200,
  count1(value: number): void {
    this.money += value;
  }
};

let handleCount: {
  name: string;
  sumValue: SumValue;
  friends: string[];
} = {
  name: 'Henry',
  sumValue: sumValue1,
  friends: ['bucko', 'elysee']
};

handleCount.sumValue.count1(500);
console.log(handleCount);
