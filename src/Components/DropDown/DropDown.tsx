import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import './DropDown.css';

interface Props {
  title: string;
  descr: string;
}

export default function DropDown({ title, descr }: Props) {
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
            borderBottom: "1px solid #1F3A59",
          }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-[20px]">
            <p className="text-paragraph leading-[20px] font-[400] text-text_blue">
              {descr}
            </p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
