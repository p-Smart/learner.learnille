export const APP_URLS = {
  PUBLIC: "https://public-learnille.vercel.app",
  AUTH: "https://auth-learnille.vercel.app",
  DASHBOARD: {
    LEARNER: "https://learner-learnille.vercel.app",
    CONSULTANT: "https://consultant-learnille.vercel.app",
    INSTRUCTOR: "https://instructor-learnille.vercel.app",
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
