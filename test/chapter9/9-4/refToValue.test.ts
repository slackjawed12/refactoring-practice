import { TelephoneNumber } from "../../../chapter9/9-4/refToValue";

describe("TelephoneNumber 클래스 테스트", () => {
  const telephoneNumber = new TelephoneNumber("312", "555-0142");
  it("telephone equals", function () {
    const result = telephoneNumber.equals(
      new TelephoneNumber("312", "555-0142")
    );
    expect(result).toBe(true);
  });
});
