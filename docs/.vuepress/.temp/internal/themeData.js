export const themeData = {
  "lastUpdated": false,
  "contributors": false,
  "footer": "haligali",
  "locales": {
    "/": {
      "selectLanguageName": "Deutsch",
      "navbar": [
        {
          "text": "Über OCR4all",
          "link": "/about.md/"
        },
        {
          "text": "Software und Download",
          "link": "/software_download/software_download.md/"
        },
        {
          "text": "Aktivitäten",
          "link": "/activities.md/"
        },
        {
          "text": "Team",
          "link": "/team.md/"
        },
        {
          "text": "Projekte",
          "link": "/projects.md/"
        }
      ]
    },
    "/en/": {
      "selectLanguageName": "English",
      "navbar": [
        {
          "text": "About",
          "link": "/en/about.md/"
        },
        {
          "text": "Software and Download",
          "link": "/en/software_download/software_download.md/"
        },
        {
          "text": "Activities",
          "link": "/en/activities.md/"
        },
        {
          "text": "Team",
          "link": "/en/team.md/"
        },
        {
          "text": "Projects",
          "link": "/en/projects.md/"
        }
      ]
    }
  },
  "logo": "http://ocr4all.org/images/logo.jpg",
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
