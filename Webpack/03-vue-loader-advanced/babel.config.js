const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "12",
        firefox: "40",
        chrome: "47",
        safari: "8",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };