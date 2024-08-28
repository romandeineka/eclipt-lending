import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  items: {
    heading: string;
    description: string;
  }[];
}

export default function DropDownList({ title, items }: Props) {
  return (
    <div className="px-4 lg:px-0">
      <Accordion
        sx={{
          bgcolor: "transparent",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color: "white",
            padding: "0px",
            borderBottom: "1px solid #1F3A59"
          }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-[20px]">
            {items.map((item, index) => (
              <div key={index}>
                <h5 className="text-paragraph font-[600] text-[#fff] leading-7 before:content-['•'] before:mr-2">
                  {item.heading}
                </h5>
                <p className="text-paragraph leading-[20px] font-[400] text-text_blue ml-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
