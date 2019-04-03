
export class Storeavailability {
  ourDays = {
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  };

  ourDaysReverse = {
    0: 'MONDAY',
    1: 'TUESDAY',
    2: 'WEDNESDAY',
    3: 'THURSDAY',
    4: 'FRIDAY',
    5: 'SATURDAY',
    6: 'SUNDAY',
  };

  es6Days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  TODAY = this.ourDays[this.es6Days[new Date().getDay()]];
  NEXTDAYOPEN = 0;

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDay();
  currentHour = new Date().getHours();
  currentMinutes = new Date().getMinutes();
  currentTimeToCompare = new Date(this.currentYear, this.currentMonth, this.currentDay, this.currentHour, this.currentMinutes, 0, 0);
  storeOpenHour: number;
  storeOpenMinutes: number;
  storeOpenTime: any;
  storeCloseHour: number;
  storeCloseMinutes: number;
  storeCloseTime: any;

  isOpen = (store) => {
    if (!!!store.schedule[this.TODAY]) {
      return false;
    }
    this.storeOpenHour = store.schedule[this.TODAY].open.split(':')[0];
    this.storeOpenMinutes = store.schedule[this.TODAY].open.split(':')[1];
    this.storeOpenTime = new Date(this.currentYear, this.currentMonth, this.currentDay, this.storeOpenHour, this.storeOpenMinutes, 0, 0);

    this.storeCloseHour = store.schedule[this.TODAY].close.split(':')[0];
    this.storeCloseMinutes = store.schedule[this.TODAY].close.split(':')[1];
    this.storeCloseTime = new Date(this.currentYear, this.currentMonth, this.currentDay, this.storeCloseHour, this.storeCloseMinutes, 0, 0);

    return (this.storeCloseTime > this.currentTimeToCompare) && (this.storeOpenTime < this.currentTimeToCompare);
  }

  nextDayOpen = (store) => {
    this.NEXTDAYOPEN = store.schedule.find((element) => {
        return ((element.day > this.TODAY) || (element.day >= 0));
    });
    return `Next opening time: ${this.ourDaysReverse[this.NEXTDAYOPEN.day]} at ${this.NEXTDAYOPEN.open}`;
  }

}
