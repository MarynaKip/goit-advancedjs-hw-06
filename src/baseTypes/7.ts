/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

type WeekdaysKey = keyof typeof Weekdays

function isWeekend (day: WeekdaysKey): boolean {
  return Weekdays[day] > 4;
}