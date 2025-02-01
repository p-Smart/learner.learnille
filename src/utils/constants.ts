export const APP_URLS = {
  PUBLIC: "https://learnille.com",
  AUTH: "https://auth.learnille.com",
  DASHBOARD: {
    LEARNER: "https://dashboard.learnille.com",
    CONSULTANT: "https://consultant.learnille.com",
    INSTRUCTOR: "https://instructor.learnille.com",
  },
};

export const roleRedirectMap = {
  consultant: APP_URLS.DASHBOARD.CONSULTANT,
  instructor: APP_URLS.DASHBOARD.INSTRUCTOR,
  student: APP_URLS.DASHBOARD.LEARNER,
};

export const rolePrecedence = ["consultant", "instructor", "student"];

export function getDashboardUrl(userRoles: string[] = []): string {
  for (const role of rolePrecedence) {
    if (userRoles.includes(role)) {
      return roleRedirectMap[role];
    }
  }
  return APP_URLS.PUBLIC;
}
