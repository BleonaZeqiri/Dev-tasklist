export function convertToAMPMFormat(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  const hours12 = (date.getHours() % 12 || 12).toString().padStart(2, "0");
  const minutesStr = date.getMinutes().toString().padStart(2, "0");

  const meridiem = date.getHours() >= 12 ? "PM" : "AM";

  return `${hours12}:${minutesStr} ${meridiem}`;
}
