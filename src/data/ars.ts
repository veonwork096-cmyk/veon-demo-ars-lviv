// Facts for the АРС Lviv homepage. Source: veon/client.json (fact ids in comments). Nothing here is invented.

export const SOON = "Розділ у розробці";

// C-007: online shop line and hours
export const phone = { label: "097 333 43 00", href: "tel:+380973334300" };
export const hours = "пн–⁠пт 8:30–⁠19:00, сб–⁠нд 9:00–⁠16:30";

// company.contacts.messengers, C-007
export const viberBot = { label: "Viber", href: "viber://chat?number=%2B380673511516" };
export const viberNumber = { label: "+38 067 351 15 16", href: "viber://chat?number=%2B380673511516" };
export const telegram = { label: "Telegram", handle: "@ars_ua", href: "tg://resolve?domain=ars_ua" };
export const email = { label: "shop@ars.ua", href: "mailto:shop@ars.ua" };
// C-008: central office (Ternopil). Not labelled as free of charge (W-I011, client decision pending).
export const office = { label: "0-800-508-400", href: "tel:0800508400" };

// C-001
export const legalName = "ТОВ «Торгова група „АРС-Кераміка“»";

// C-005: 14 groups of the Lviv catalogue, sorted by item count. C-024: groups overlap, never shown as shares of 3410.
export const total = 3410;
export const groups: { name: string; count: number }[] = [
  { name: "Сухі будівельні суміші", count: 1510 },
  { name: "Будівельна хімія", count: 1115 },
  { name: "Гіпсокартонні системи", count: 613 },
  { name: "Профілі штукатурні", count: 561 },
  { name: "Плівки", count: 547 },
  { name: "Тепло- і звукоізоляція", count: 495 },
  { name: "Сітки", count: 488 },
  { name: "Покрівельні матеріали", count: 390 },
  { name: "Цегла та блоки", count: 213 },
  { name: "Цемент та добавки", count: 164 },
  { name: "Металопрокат", count: 135 },
  { name: "Тротуарна плитка", count: 97 },
  { name: "Сипучі матеріали", count: 79 },
  { name: "Пиломатеріали та плити", count: 41 },
];
export const maxCount = Math.max(...groups.map((g) => g.count));

// C-004
export const cities = [
  "Тернопіль", "Львів", "Золочів", "Кам'янець-Подільський", "Стрий",
  "Кременець", "Івано-Франківськ", "Борщів", "Трускавець",
];
