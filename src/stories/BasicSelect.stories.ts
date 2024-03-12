import { fn } from "@storybook/test";
import { BasicSelect } from "../components/BasicSelect/BasicSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "PetsFinderUI/BasicSelect",
  component: BasicSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     value: { control: "number" },
  //   },
  // // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onChange: fn(),
    label: "Defaultowa",
  },
} satisfies Meta<typeof BasicSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Przykladowo: Story = {
  args: {
    options: ["1", "2"],
    value: "1",
  },
};

export const Selekt: Story = {
  args: {
    options: ["One", "Two", "Three"],
    value: "One",
    label: "Number",
  },
};
