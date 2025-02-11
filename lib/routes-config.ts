// remove disabled

export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "Installation",
        href: "/installation",
      },
      // {
      //   title: "Project Structure",
      //   href: "/project-structure",
      //   disabled: true,
      // },
      // {
      //   title: "Theming",
      //   href: "/theming",
      //   disabled: true,
      // },
      // {
      //   title: "Typography",
      //   href: "/typography",
      //   disabled: true,
      // },
      // {
      //   title: "Changelog",
      //   href: "/changelog",
      //   disabled: true,
      // },
    ],
  },
  {
    title: "Components",
    href: "components",
    items: [
      {
        title: "Accordian",
        href: "/accordian",
        disabled: false,
      },
      {
        title: "Alert",
        href: "/alerts",
        disabled: false,
      },
      {
        title: "Avatar",
        href: "/avatar",
        disabled: false,
      },
      // {
      //   title: "Breadcrumb",
      //   href: "/breadcrumb",
      //   disabled: true,
      // },
      {
        title: "Button",
        href: "/button",
      },
      {
        title: "Cards",
        href: "/cards",
      },
      // {
      //   title: "Context Menu",
      //   href: "/context-menu",
      //   disabled: true,
      // },
      // {
      //   title: "Data Table",
      //   href: "/data-table",
      //   disabled: true,
      // },
      // {
      //   title: "Date Picker",
      //   href: "/date-picker",
      //   disabled: true,
      // },
      // {
      //   title: "Dialog",
      //   href: "/dialog",
      //   disabled: true,
      // },
      {
        title: "Dropdown",
        href: "/dropdown",
        disabled: false,
      },
      // {
      //   title: "Form",
      //   href: "/form",
      //   disabled: true,
      // },
      // {
      //   title: "Hover Card",
      //   href: "/hover-card",
      //   disabled: true,
      // },
      {
        title: "Input",
        href: "/input",
        // disabled: true,
      },
      {
        title: "Grid",
        href: "/grid",
      },
      // {
      //   title: "Input OTP",
      //   href: "/input-otp",
      //   disabled: true,
      // },
      // {
      //   title: "Label",
      //   href: "/label",
      //   disabled: true,
      // },
      // {
      //   title: "Menubar",
      //   href: "/menubar",
      //   disabled: true,
      // },
      // {
      //   title: "Navigation Menu",
      //   href: "/navigation-menu",
      //   disabled: true,
      // },
      // {
      //   title: "Pagination",
      //   href: "/pagination",
      //   disabled: true,
      // },
      // {
      //   title: "Radio Group",
      //   href: "/radio-group",
      //   disabled: true,
      // },
      // {
      //   title: "Resizable",
      //   href: "/resizable",
      //   disabled: true,
      // },
      {
        title: "Menu Accordion",
        href: "/menu-accordion",
      },
      {
        title: "Modal",
        href: "/modal",
      },
      {
        title: "Marquee Image Scroller",
        href: "/marquee-image-scroller",
      },
      {
        title: "Section",
        href: "/section",
      },
      // {
      //   title: "Scroll Area",
      //   href: "/scroll-area",
      //   disabled: true,
      // },
      {
        title: "Ticker Banner",
        href: "/ticker-banner",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
      {
        title: "Tooltip",
        href: "/tooltip",
      },
      {
        title: "Title",
        href: "/title",
      },

    ],
  },
];

export const FLATTEND_ROUTES = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
      disabled: link.disabled,
    };
  });
}).flat();
