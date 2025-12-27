import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  // These real-time simulation systems intentionally mutate refs for performance.
  // The immutability rule is not a good fit here.
  {
    files: [
      "src/components/game/*System.ts",
      "src/components/game/*Systems.ts",
      "src/components/game/*System.tsx",
      "src/components/game/*Systems.tsx",
    ],
    rules: {
      "react-hooks/immutability": "off",
    },
  },
  // GameContext intentionally syncs state to refs and loads preferences in effects.
  // The "set-state-in-effect" rule is too strict for this pattern.
  {
    files: ["src/context/GameContext.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
