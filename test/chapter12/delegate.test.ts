import {
  Booking,
  Extra,
  PremiumBooking,
  PremiumBookingDelegate,
  Show,
  createBooking,
  createPremiumBooking,
} from "../../chapter12/12-10/replaceSubclassesWithDelegate";

describe("서브클래스를 위임으로 바꾸기 테스트", () => {
  it("예약 기본 가격 테스트", () => {
    //given
    const show = new Show(100000, false);
    const aBooking = new Booking(show, new Date());

    const result = aBooking.basePrice;
    expect(result).toBe(100000);
  });
  it("프리미엄 예약 기본 가격 테스트", () => {
    //given
    const show = new Show(100000, true);
    const extras = new Extra(50000, false);
    const premiumBooking = new PremiumBooking(show, new Date(), extras);

    const result = premiumBooking.basePrice;
    expect(result).toBe(150000);
  });
  it("기본 예약 성수기 여부 테스트", () => {
    //given
    const show = new Show(100000, false);
    const aBooking = new Booking(show, new Date());

    const result = aBooking.isPeakDay;
    expect(result).toBe(false);
  });
  it("기본 예약 객체 팩터리 함수는 기본 예약 객체를 반환한다.", () => {
    // given
    const show = new Show(100000, false);

    const result = createBooking(show, new Date());
    expect(result).toStrictEqual(new Booking(show, new Date()));
  });
  it("프리미엄 예약 객체 팩터리 함수는 프리미엄 예약 객체를 반환한다.", () => {
    // given
    const show = new Show(100000, true);
    const extras = new Extra(50000, false);

    const result = createPremiumBooking(show, new Date(), extras);
    expect(result._premiumDelegate._host).toBe(result);
  });
});
