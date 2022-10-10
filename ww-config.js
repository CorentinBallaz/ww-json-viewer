export default {
  editor: {
    label: {
      en: "Json Viewer",
    },
  },
  properties: {
    data: {
      label: {
        en: "Data",
      },
      type: "Info",
      defaultValue: [],
      bindable: true,
      responsive: true,
    },
    expanded: {
      label: {
        en: "Expanded",
      },
      type: "OnOff",
      defaultValue: true,
      bindable: true,
      responsive: true,
    },
    expand_depth:{
      label: {
        en: "Expand Depth",
      },
      type: "Number",
      defaultValue: 5,
      bindable: true,
      responsive: true,
    },
  },
};
