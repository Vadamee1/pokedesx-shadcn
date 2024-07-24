"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BaseStat } from "@/types/pokemon/stats";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface Props {
  baseStats: BaseStat[];
}

export default function StatsChart({ baseStats }: Props) {
  const chartData = baseStats.map((stat) => ({
    skill: stat.stat.name.toUpperCase(),
    value: stat.base_stat,
  }));

  return (
    <Card>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto max-h-[350px]">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
