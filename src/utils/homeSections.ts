export const HOME_SECTION_QUERY_KEY = "section";
export const HOME_RETURN_QUERY_KEY = "returnTo";
export const HOME_SECTION_STORAGE_KEY = "home-section";

export const HOME_FLEET_SECTION = "fleet-overview";
export const HOME_PROJECT_SECTION = "project-overview";
export const HOME_LATEST_NEWS_SECTION = "latest-news";

export const getHomeSectionHref = (section: string) =>
  `/?${HOME_SECTION_QUERY_KEY}=${encodeURIComponent(section)}`;
