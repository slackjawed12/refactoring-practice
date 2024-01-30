import {
  Booking,
  Extra,
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
    const premiumBooking = createPremiumBooking(show, new Date(), extras);

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
  it("관객과의 대화 조회", () => {
    // given
    const booking = createBooking(new Show(100000, true), new Date());
    const noTalkBooking = createBooking(new Show(100000, false), new Date());
    const premiumBooking = createPremiumBooking(
      new Show(100000, true),
      new Date(),
      new Extra(10000, false)
    );
    const noTalkPremiumBooking = createPremiumBooking(
      new Show(100000, false),
      new Date(),
      new Extra(10000, false)
    );
    const result = booking.hasTalkback;
    const result2 = noTalkBooking.hasTalkback;
    const result3 = premiumBooking.hasTalkback;
    const result4 = noTalkPremiumBooking.hasTalkback;
    expect(result).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(true);
    expect(result4).toBe(false);
  });
  it("기본가격 조회", () => {
    const booking = createBooking(new Show(100000, true), new Date());
    const premiumBooking = createPremiumBooking(
      new Show(100000, false),
      new Date(),
      new Extra(10000, false)
    );

    const result = booking.basePrice;
    const result2 = premiumBooking.basePrice;

    expect(result).toBe(100000);
    expect(result2).toBe(110000);
  });
});
