import { Meta, StoryObj } from "@storybook/react";
import { BasicDatePicker } from "../components/Form/DatePicker/BasicDatePicker";
import dayjs from "dayjs";

const meta = {
  title: "PetsFinderUI/BasicDatePicker",
  component: BasicDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    value: dayjs().valueOf(),
    onChange: () => {},
  },
} satisfies Meta<typeof BasicDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleDate: Story = {};
