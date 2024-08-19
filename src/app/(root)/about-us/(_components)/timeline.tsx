import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { aboutContents } from "@/lib/constants";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {aboutContents.history.timelines.map((timeline, index) => (
        <TimelineItem key={index} className={`!font-medium ${font.className} `}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {timeline.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>{timeline.icon()}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              className={`${font.className} max-lg:!text-base`}
              variant="h6"
              component="span"
            >
              {timeline.description}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
