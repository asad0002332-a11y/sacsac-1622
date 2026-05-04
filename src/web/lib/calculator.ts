// School Age Calculator Logic
// Covers: USA (by state), UK, Australia (by state), Canada (by province)

export type Country = "USA" | "UK" | "Australia" | "Canada";

export interface CalculatorResult {
  country: Country;
  region: string;
  currentGrade: string;
  gradeLabel: string;
  schoolType: string;
  ageAtResult: number;
  ageExact: { years: number; months: number; days: number };
  enrollmentYear: number;
  enrollmentSeason: string;
  cutoffDate: string;
  nextMilestone: string;
  graduationYear: number | null;
  yearsInSchool: number;
  yearsToGraduation: number;
  schoolJourneyPercent: number; // 0-100
  isPreSchool: boolean;
  isTooYoung: boolean;
  isTooOld: boolean;
  journeySteps: { label: string; year: number; done: boolean; current: boolean }[];
}

export const USA_STATES: Record<string, { cutoffMonth: number; cutoffDay: number; name: string }> = {
  AL: { cutoffMonth: 9, cutoffDay: 1, name: "Alabama" },
  AK: { cutoffMonth: 9, cutoffDay: 1, name: "Alaska" },
  AZ: { cutoffMonth: 9, cutoffDay: 1, name: "Arizona" },
  AR: { cutoffMonth: 8, cutoffDay: 1, name: "Arkansas" },
  CA: { cutoffMonth: 9, cutoffDay: 1, name: "California" },
  CO: { cutoffMonth: 10, cutoffDay: 1, name: "Colorado" },
  CT: { cutoffMonth: 1, cutoffDay: 1, name: "Connecticut" },
  DE: { cutoffMonth: 8, cutoffDay: 31, name: "Delaware" },
  FL: { cutoffMonth: 9, cutoffDay: 1, name: "Florida" },
  GA: { cutoffMonth: 9, cutoffDay: 1, name: "Georgia" },
  HI: { cutoffMonth: 7, cutoffDay: 31, name: "Hawaii" },
  ID: { cutoffMonth: 9, cutoffDay: 1, name: "Idaho" },
  IL: { cutoffMonth: 9, cutoffDay: 1, name: "Illinois" },
  IN: { cutoffMonth: 8, cutoffDay: 1, name: "Indiana" },
  IA: { cutoffMonth: 9, cutoffDay: 15, name: "Iowa" },
  KS: { cutoffMonth: 8, cutoffDay: 31, name: "Kansas" },
  KY: { cutoffMonth: 10, cutoffDay: 1, name: "Kentucky" },
  LA: { cutoffMonth: 9, cutoffDay: 30, name: "Louisiana" },
  ME: { cutoffMonth: 10, cutoffDay: 15, name: "Maine" },
  MD: { cutoffMonth: 9, cutoffDay: 1, name: "Maryland" },
  MA: { cutoffMonth: 9, cutoffDay: 1, name: "Massachusetts" },
  MI: { cutoffMonth: 12, cutoffDay: 1, name: "Michigan" },
  MN: { cutoffMonth: 9, cutoffDay: 1, name: "Minnesota" },
  MS: { cutoffMonth: 9, cutoffDay: 1, name: "Mississippi" },
  MO: { cutoffMonth: 7, cutoffDay: 31, name: "Missouri" },
  MT: { cutoffMonth: 9, cutoffDay: 10, name: "Montana" },
  NE: { cutoffMonth: 7, cutoffDay: 31, name: "Nebraska" },
  NV: { cutoffMonth: 9, cutoffDay: 30, name: "Nevada" },
  NH: { cutoffMonth: 9, cutoffDay: 30, name: "New Hampshire" },
  NJ: { cutoffMonth: 10, cutoffDay: 1, name: "New Jersey" },
  NM: { cutoffMonth: 9, cutoffDay: 1, name: "New Mexico" },
  NY: { cutoffMonth: 12, cutoffDay: 1, name: "New York" },
  NC: { cutoffMonth: 8, cutoffDay: 31, name: "North Carolina" },
  ND: { cutoffMonth: 8, cutoffDay: 1, name: "North Dakota" },
  OH: { cutoffMonth: 8, cutoffDay: 1, name: "Ohio" },
  OK: { cutoffMonth: 11, cutoffDay: 1, name: "Oklahoma" },
  OR: { cutoffMonth: 9, cutoffDay: 1, name: "Oregon" },
  PA: { cutoffMonth: 9, cutoffDay: 1, name: "Pennsylvania" },
  RI: { cutoffMonth: 9, cutoffDay: 1, name: "Rhode Island" },
  SC: { cutoffMonth: 9, cutoffDay: 1, name: "South Carolina" },
  SD: { cutoffMonth: 9, cutoffDay: 1, name: "South Dakota" },
  TN: { cutoffMonth: 9, cutoffDay: 30, name: "Tennessee" },
  TX: { cutoffMonth: 9, cutoffDay: 1, name: "Texas" },
  UT: { cutoffMonth: 9, cutoffDay: 1, name: "Utah" },
  VT: { cutoffMonth: 1, cutoffDay: 1, name: "Vermont" },
  VA: { cutoffMonth: 9, cutoffDay: 30, name: "Virginia" },
  WA: { cutoffMonth: 8, cutoffDay: 31, name: "Washington" },
  WV: { cutoffMonth: 11, cutoffDay: 1, name: "West Virginia" },
  WI: { cutoffMonth: 9, cutoffDay: 1, name: "Wisconsin" },
  WY: { cutoffMonth: 9, cutoffDay: 15, name: "Wyoming" },
  DC: { cutoffMonth: 12, cutoffDay: 31, name: "Washington D.C." },
};

export const AUSTRALIA_STATES: Record<string, { name: string; firstYearName: string; cutoffMonth: number; cutoffDay: number }> = {
  NSW: { name: "New South Wales", firstYearName: "Kindergarten", cutoffMonth: 7, cutoffDay: 31 },
  VIC: { name: "Victoria", firstYearName: "Prep", cutoffMonth: 4, cutoffDay: 30 },
  QLD: { name: "Queensland", firstYearName: "Prep", cutoffMonth: 6, cutoffDay: 30 },
  WA:  { name: "Western Australia", firstYearName: "Pre-primary", cutoffMonth: 6, cutoffDay: 30 },
  SA:  { name: "South Australia", firstYearName: "Reception", cutoffMonth: 4, cutoffDay: 30 },
  TAS: { name: "Tasmania", firstYearName: "Prep", cutoffMonth: 1, cutoffDay: 1 },
  ACT: { name: "Australian Capital Territory", firstYearName: "Kindergarten", cutoffMonth: 4, cutoffDay: 30 },
  NT:  { name: "Northern Territory", firstYearName: "Transition", cutoffMonth: 6, cutoffDay: 30 },
};

export const CANADA_PROVINCES: Record<string, { name: string; jkAge: boolean; cutoffMonth: number; cutoffDay: number }> = {
  ON: { name: "Ontario", jkAge: true, cutoffMonth: 12, cutoffDay: 31 },
  BC: { name: "British Columbia", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  AB: { name: "Alberta", jkAge: false, cutoffMonth: 3, cutoffDay: 1 },
  QC: { name: "Quebec", jkAge: false, cutoffMonth: 9, cutoffDay: 30 },
  MB: { name: "Manitoba", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  SK: { name: "Saskatchewan", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  NS: { name: "Nova Scotia", jkAge: false, cutoffMonth: 10, cutoffDay: 1 },
  NB: { name: "New Brunswick", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  NL: { name: "Newfoundland & Labrador", jkAge: false, cutoffMonth: 9, cutoffDay: 1 },
  PE: { name: "Prince Edward Island", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  YT: { name: "Yukon", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  NWT: { name: "Northwest Territories", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
  NU: { name: "Nunavut", jkAge: false, cutoffMonth: 12, cutoffDay: 31 },
};

export function getAgeOnDate(dob: Date, ref: Date): number {
  let age = ref.getFullYear() - dob.getFullYear();
  const m = ref.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < dob.getDate())) age--;
  return age;
}

export function getExactAge(dob: Date, ref: Date) {
  let years = ref.getFullYear() - dob.getFullYear();
  let months = ref.getMonth() - dob.getMonth();
  let days = ref.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(ref.getFullYear(), ref.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}

function monthName(m: number) {
  return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][m - 1];
}

function buildJourneySteps(
  kStartYear: number,
  graduationYear: number,
  currentSchoolYear: number,
  labels: { year: number; label: string }[]
): { label: string; year: number; done: boolean; current: boolean }[] {
  return labels.map(s => ({
    label: s.label,
    year: s.year,
    done: s.year < currentSchoolYear,
    current: s.year === currentSchoolYear,
  }));
}

export function calculateUSA(dob: Date, stateCode: string): CalculatorResult {
  const state = USA_STATES[stateCode] || USA_STATES["CA"];
  const today = new Date();
  const currentYear = today.getFullYear();
  const schoolYearStart = today.getMonth() >= 8 ? currentYear : currentYear - 1;
  const ageNow = getAgeOnDate(dob, today);
  const ageExact = getExactAge(dob, today);

  let kStartYear = dob.getFullYear();
  for (let y = dob.getFullYear(); y <= dob.getFullYear() + 8; y++) {
    const cutoff = new Date(y, state.cutoffMonth - 1, state.cutoffDay);
    if (getAgeOnDate(dob, cutoff) >= 5) { kStartYear = y; break; }
  }

  const gradYear = kStartYear + 13;
  const cutoffStr = `${monthName(state.cutoffMonth)} ${state.cutoffDay}`;
  const grade = schoolYearStart - kStartYear;
  const totalYears = 13;

  const journeyLabels = [
    { year: kStartYear, label: "Kindergarten" },
    { year: kStartYear + 1, label: "Grade 1" },
    { year: kStartYear + 5, label: "Grade 5" },
    { year: kStartYear + 6, label: "Middle School" },
    { year: kStartYear + 9, label: "High School" },
    { year: gradYear, label: "Graduation" },
  ];

  if (ageNow < 3 || grade < -2) {
    return {
      country: "USA", region: state.name, currentGrade: "Pre-K",
      gradeLabel: "Too young for school yet", schoolType: "Pre-school",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: kStartYear, enrollmentSeason: "September",
      cutoffDate: cutoffStr,
      nextMilestone: `Eligible for Kindergarten in September ${kStartYear}`,
      graduationYear: gradYear, yearsInSchool: 0, yearsToGraduation: gradYear - currentYear,
      schoolJourneyPercent: 0,
      isPreSchool: true, isTooYoung: true, isTooOld: false,
      journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
    };
  }

  if (grade < 0) {
    return {
      country: "USA", region: state.name, currentGrade: "Pre-K",
      gradeLabel: "Not yet enrolled — eligible soon", schoolType: "Pre-school",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: kStartYear, enrollmentSeason: "September",
      cutoffDate: cutoffStr,
      nextMilestone: `Starts Kindergarten in September ${kStartYear}`,
      graduationYear: gradYear, yearsInSchool: 0, yearsToGraduation: gradYear - currentYear,
      schoolJourneyPercent: 0,
      isPreSchool: true, isTooYoung: false, isTooOld: false,
      journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
    };
  }

  if (grade > 12) {
    return {
      country: "USA", region: state.name, currentGrade: "Graduate",
      gradeLabel: "High school graduate", schoolType: "Post-Secondary",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: kStartYear, enrollmentSeason: "September",
      cutoffDate: cutoffStr,
      nextMilestone: "Completed K–12 education",
      graduationYear: gradYear, yearsInSchool: totalYears, yearsToGraduation: 0,
      schoolJourneyPercent: 100,
      isPreSchool: false, isTooYoung: false, isTooOld: true,
      journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
    };
  }

  const gradeNames: Record<number, string> = {
    0: "Kindergarten", 1: "Grade 1 — Elementary", 2: "Grade 2 — Elementary",
    3: "Grade 3 — Elementary", 4: "Grade 4 — Elementary", 5: "Grade 5 — Elementary",
    6: "Grade 6 — Middle School", 7: "Grade 7 — Middle School", 8: "Grade 8 — Middle School",
    9: "Grade 9 — High School (Freshman)", 10: "Grade 10 — High School (Sophomore)",
    11: "Grade 11 — High School (Junior)", 12: "Grade 12 — High School (Senior)",
  };
  const gradeShort = grade === 0 ? "K" : `G${grade}`;
  const schoolTypes: Record<number, string> = { 0: "Kindergarten" };
  for (let i = 1; i <= 5; i++) schoolTypes[i] = "Elementary School";
  for (let i = 6; i <= 8; i++) schoolTypes[i] = "Middle School";
  for (let i = 9; i <= 12; i++) schoolTypes[i] = "High School";

  return {
    country: "USA", region: state.name,
    currentGrade: gradeShort,
    gradeLabel: gradeNames[grade] || `Grade ${grade}`,
    schoolType: schoolTypes[grade] || "School",
    ageAtResult: ageNow, ageExact,
    enrollmentYear: kStartYear, enrollmentSeason: "September",
    cutoffDate: cutoffStr,
    nextMilestone: grade < 12
      ? `Advances to Grade ${grade + 1} in September ${schoolYearStart + 1}`
      : `Graduates in June ${gradYear}`,
    graduationYear: gradYear,
    yearsInSchool: Math.max(0, grade + 1),
    yearsToGraduation: Math.max(0, 12 - grade),
    schoolJourneyPercent: Math.round(((grade + 1) / totalYears) * 100),
    isPreSchool: false, isTooYoung: false, isTooOld: false,
    journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
  };
}

export function calculateUK(dob: Date): CalculatorResult {
  const today = new Date();
  const currentSchoolYear = today.getMonth() >= 8 ? today.getFullYear() : today.getFullYear() - 1;
  const ageAtSep1 = getAgeOnDate(dob, new Date(currentSchoolYear, 8, 1));
  const ageNow = getAgeOnDate(dob, today);
  const ageExact = getExactAge(dob, today);
  const yearGroup = ageAtSep1 - 4;

  const receptionYear = dob.getFullYear() + (dob.getMonth() >= 8 ? 5 : 4);
  const gradYear = receptionYear + 13;

  const ukYearInfo: Record<number, { name: string; type: string; key: string; short: string }> = {
    [-1]: { name: "Nursery", type: "Pre-school", key: "EYFS", short: "Nursery" },
    0:  { name: "Reception", type: "Primary School", key: "EYFS", short: "Reception" },
    1:  { name: "Year 1", type: "Primary School", key: "Key Stage 1", short: "Y1" },
    2:  { name: "Year 2", type: "Primary School", key: "Key Stage 1", short: "Y2" },
    3:  { name: "Year 3", type: "Primary School", key: "Key Stage 2", short: "Y3" },
    4:  { name: "Year 4", type: "Primary School", key: "Key Stage 2", short: "Y4" },
    5:  { name: "Year 5", type: "Primary School", key: "Key Stage 2", short: "Y5" },
    6:  { name: "Year 6", type: "Primary School", key: "Key Stage 2", short: "Y6" },
    7:  { name: "Year 7", type: "Secondary School", key: "Key Stage 3", short: "Y7" },
    8:  { name: "Year 8", type: "Secondary School", key: "Key Stage 3", short: "Y8" },
    9:  { name: "Year 9", type: "Secondary School", key: "Key Stage 3", short: "Y9" },
    10: { name: "Year 10", type: "Secondary School", key: "Key Stage 4 (GCSEs)", short: "Y10" },
    11: { name: "Year 11", type: "Secondary School", key: "Key Stage 4 (GCSEs)", short: "Y11" },
    12: { name: "Year 12 / Lower Sixth", type: "Sixth Form", key: "Key Stage 5 (A-Levels)", short: "Y12" },
    13: { name: "Year 13 / Upper Sixth", type: "Sixth Form", key: "Key Stage 5 (A-Levels)", short: "Y13" },
  };

  const journeyLabels = [
    { year: receptionYear, label: "Reception" },
    { year: receptionYear + 1, label: "Year 1" },
    { year: receptionYear + 6, label: "Year 6" },
    { year: receptionYear + 7, label: "Secondary" },
    { year: receptionYear + 11, label: "GCSEs" },
    { year: gradYear, label: "A-Levels" },
  ];

  if (yearGroup < -1) {
    return {
      country: "UK", region: "England/Wales", currentGrade: "Too Young",
      gradeLabel: "Too young for school", schoolType: "Pre-school",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: receptionYear, enrollmentSeason: "September",
      cutoffDate: "September 1",
      nextMilestone: `Starts Reception in September ${receptionYear}`,
      graduationYear: gradYear, yearsInSchool: 0, yearsToGraduation: gradYear - today.getFullYear(),
      schoolJourneyPercent: 0,
      isPreSchool: true, isTooYoung: true, isTooOld: false,
      journeySteps: buildJourneySteps(receptionYear, gradYear, currentSchoolYear, journeyLabels),
    };
  }

  if (yearGroup > 13) {
    return {
      country: "UK", region: "England/Wales", currentGrade: "Graduate",
      gradeLabel: "Completed school", schoolType: "Post-Secondary",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: receptionYear, enrollmentSeason: "September",
      cutoffDate: "September 1",
      nextMilestone: "Completed A-Levels / school",
      graduationYear: gradYear, yearsInSchool: 14, yearsToGraduation: 0,
      schoolJourneyPercent: 100,
      isPreSchool: false, isTooYoung: false, isTooOld: true,
      journeySteps: buildJourneySteps(receptionYear, gradYear, currentSchoolYear, journeyLabels),
    };
  }

  const info = ukYearInfo[yearGroup] || { name: `Year ${yearGroup}`, type: "School", key: "", short: `Y${yearGroup}` };
  const inSchool = yearGroup >= 0 ? yearGroup + 1 : 0;
  const totalUK = 14;

  return {
    country: "UK", region: "England/Wales",
    currentGrade: info.short,
    gradeLabel: `${info.name} — ${info.key}`,
    schoolType: info.type,
    ageAtResult: ageNow, ageExact,
    enrollmentYear: receptionYear, enrollmentSeason: "September",
    cutoffDate: "September 1",
    nextMilestone: yearGroup < 13
      ? `Moves to ${ukYearInfo[yearGroup + 1]?.name || "next year"} in September ${currentSchoolYear + 1}`
      : "Finished school — well done!",
    graduationYear: gradYear,
    yearsInSchool: inSchool,
    yearsToGraduation: Math.max(0, 13 - yearGroup),
    schoolJourneyPercent: Math.round((inSchool / totalUK) * 100),
    isPreSchool: yearGroup < 0, isTooYoung: false, isTooOld: false,
    journeySteps: buildJourneySteps(receptionYear, gradYear, currentSchoolYear, journeyLabels),
  };
}

export function calculateAustralia(dob: Date, stateCode: string): CalculatorResult {
  const state = AUSTRALIA_STATES[stateCode] || AUSTRALIA_STATES["NSW"];
  const today = new Date();
  const currentYear = today.getFullYear();
  const ageNow = getAgeOnDate(dob, today);
  const ageExact = getExactAge(dob, today);

  let startYear = dob.getFullYear();
  for (let y = dob.getFullYear(); y <= dob.getFullYear() + 8; y++) {
    const cutoff = new Date(y, state.cutoffMonth - 1, state.cutoffDay);
    if (getAgeOnDate(dob, cutoff) >= 5) { startYear = y; break; }
  }

  const yearLevel = currentYear - startYear;
  const gradYear = startYear + 13;
  const cutoffStr = `${monthName(state.cutoffMonth)} ${state.cutoffDay}`;

  const getYearName = (l: number) => l === 0 ? state.firstYearName : `Year ${l}`;
  const getSchoolType = (l: number) => {
    if (l === 0) return "Foundation Year";
    if (l <= 6) return "Primary School";
    if (l <= 10) return "Secondary School";
    return "Senior Secondary";
  };

  const journeyLabels = [
    { year: startYear, label: state.firstYearName },
    { year: startYear + 1, label: "Year 1" },
    { year: startYear + 6, label: "Year 6" },
    { year: startYear + 7, label: "Secondary" },
    { year: startYear + 11, label: "Year 11" },
    { year: gradYear, label: "Year 12" },
  ];

  if (yearLevel < 0) {
    return {
      country: "Australia", region: state.name, currentGrade: "Pre-school",
      gradeLabel: "Not yet school age", schoolType: "Pre-school",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: startYear, enrollmentSeason: "January/February",
      cutoffDate: cutoffStr,
      nextMilestone: `Starts ${state.firstYearName} in ${startYear}`,
      graduationYear: gradYear, yearsInSchool: 0, yearsToGraduation: gradYear - currentYear,
      schoolJourneyPercent: 0,
      isPreSchool: true, isTooYoung: yearLevel < -1, isTooOld: false,
      journeySteps: buildJourneySteps(startYear, gradYear, currentYear, journeyLabels),
    };
  }

  if (yearLevel > 12) {
    return {
      country: "Australia", region: state.name, currentGrade: "Graduate",
      gradeLabel: "Completed Year 12", schoolType: "Post-Secondary",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: startYear, enrollmentSeason: "January/February",
      cutoffDate: cutoffStr,
      nextMilestone: "Completed school",
      graduationYear: gradYear, yearsInSchool: 13, yearsToGraduation: 0,
      schoolJourneyPercent: 100,
      isPreSchool: false, isTooYoung: false, isTooOld: true,
      journeySteps: buildJourneySteps(startYear, gradYear, currentYear, journeyLabels),
    };
  }

  return {
    country: "Australia", region: state.name,
    currentGrade: getYearName(yearLevel),
    gradeLabel: `${getYearName(yearLevel)} — ${getSchoolType(yearLevel)}`,
    schoolType: getSchoolType(yearLevel),
    ageAtResult: ageNow, ageExact,
    enrollmentYear: startYear, enrollmentSeason: "January/February",
    cutoffDate: cutoffStr,
    nextMilestone: yearLevel < 12
      ? `Advances to Year ${yearLevel + 1} in ${currentYear + 1}`
      : `Completes Year 12 in ${gradYear}`,
    graduationYear: gradYear,
    yearsInSchool: Math.max(0, yearLevel + 1),
    yearsToGraduation: Math.max(0, 12 - yearLevel),
    schoolJourneyPercent: Math.round(((yearLevel + 1) / 13) * 100),
    isPreSchool: false, isTooYoung: false, isTooOld: false,
    journeySteps: buildJourneySteps(startYear, gradYear, currentYear, journeyLabels),
  };
}

export function calculateCanada(dob: Date, provinceCode: string): CalculatorResult {
  const province = CANADA_PROVINCES[provinceCode] || CANADA_PROVINCES["ON"];
  const today = new Date();
  const currentYear = today.getFullYear();
  const schoolYearStart = today.getMonth() >= 8 ? currentYear : currentYear - 1;
  const ageNow = getAgeOnDate(dob, today);
  const ageExact = getExactAge(dob, today);

  const kAge = province.jkAge ? 4 : 5;
  let kStartYear = dob.getFullYear();
  for (let y = dob.getFullYear(); y <= dob.getFullYear() + 8; y++) {
    const cutoff = new Date(y, province.cutoffMonth - 1, province.cutoffDay);
    if (getAgeOnDate(dob, cutoff) >= kAge) { kStartYear = y; break; }
  }

  const maxGrade = province.jkAge ? 14 : 13;
  const gradYear = kStartYear + maxGrade;
  const grade = schoolYearStart - kStartYear;
  const cutoffStr = `${monthName(province.cutoffMonth)} ${province.cutoffDay}`;

  const getGradeName = (g: number) => {
    if (g < 0) return "Pre-K";
    if (g === 0) return province.jkAge ? "JK" : "Kindergarten";
    if (g === 1 && province.jkAge) return "SK";
    const actual = province.jkAge ? g - 1 : g;
    return actual <= 0 ? "Kindergarten" : `Grade ${actual}`;
  };
  const getSchoolType = (g: number) => {
    if (g <= (province.jkAge ? 1 : 0)) return "Kindergarten";
    const actual = province.jkAge ? g - 1 : g;
    if (actual <= 6) return "Elementary School";
    if (actual <= 9) return "Middle / Junior High";
    return "High School";
  };

  const journeyLabels = [
    { year: kStartYear, label: province.jkAge ? "JK" : "Kindergarten" },
    { year: kStartYear + 1, label: province.jkAge ? "SK" : "Grade 1" },
    { year: kStartYear + (province.jkAge ? 2 : 1), label: "Grade 1" },
    { year: kStartYear + (province.jkAge ? 7 : 6), label: "Grade 6" },
    { year: kStartYear + (province.jkAge ? 10 : 9), label: "High School" },
    { year: gradYear, label: "Graduation" },
  ];

  if (grade < 0) {
    return {
      country: "Canada", region: province.name, currentGrade: "Pre-K",
      gradeLabel: "Not yet school age", schoolType: "Pre-school",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: kStartYear, enrollmentSeason: "September",
      cutoffDate: cutoffStr,
      nextMilestone: `Starts ${province.jkAge ? "Junior Kindergarten" : "Kindergarten"} in September ${kStartYear}`,
      graduationYear: gradYear, yearsInSchool: 0, yearsToGraduation: gradYear - currentYear,
      schoolJourneyPercent: 0,
      isPreSchool: true, isTooYoung: true, isTooOld: false,
      journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
    };
  }

  if (grade > maxGrade) {
    return {
      country: "Canada", region: province.name, currentGrade: "Graduate",
      gradeLabel: "Completed secondary school", schoolType: "Post-Secondary",
      ageAtResult: ageNow, ageExact,
      enrollmentYear: kStartYear, enrollmentSeason: "September",
      cutoffDate: cutoffStr,
      nextMilestone: "Completed school",
      graduationYear: gradYear, yearsInSchool: maxGrade, yearsToGraduation: 0,
      schoolJourneyPercent: 100,
      isPreSchool: false, isTooYoung: false, isTooOld: true,
      journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
    };
  }

  return {
    country: "Canada", region: province.name,
    currentGrade: getGradeName(grade),
    gradeLabel: `${getGradeName(grade)} — ${getSchoolType(grade)}`,
    schoolType: getSchoolType(grade),
    ageAtResult: ageNow, ageExact,
    enrollmentYear: kStartYear, enrollmentSeason: "September",
    cutoffDate: cutoffStr,
    nextMilestone: `Advances to ${getGradeName(grade + 1)} in September ${schoolYearStart + 1}`,
    graduationYear: gradYear,
    yearsInSchool: Math.max(0, grade + 1),
    yearsToGraduation: Math.max(0, maxGrade - grade),
    schoolJourneyPercent: Math.round(((grade + 1) / maxGrade) * 100),
    isPreSchool: false, isTooYoung: false, isTooOld: false,
    journeySteps: buildJourneySteps(kStartYear, gradYear, schoolYearStart, journeyLabels),
  };
}

export function calculate(dob: Date, country: Country, region: string): CalculatorResult {
  switch (country) {
    case "USA": return calculateUSA(dob, region);
    case "UK": return calculateUK(dob);
    case "Australia": return calculateAustralia(dob, region);
    case "Canada": return calculateCanada(dob, region);
    default: return calculateUSA(dob, region);
  }
}
