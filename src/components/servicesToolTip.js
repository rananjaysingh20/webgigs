import { Tooltip, tooltipClasses, Typography, Zoom } from "@mui/material";
import { Fragment } from "react";
import styled from "styled-components";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip
    slots={{
      transition: Zoom,
    }}
    leaveDelay={200}
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#F3F2EC",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "12px",
  },
}));

const ServiceName = styled.span`
  font-size: 36px;
  width: 35%;
  cursor: crosshair;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default function ServiceToolTip({ item }) {
  return (
    <HtmlTooltip
      title={
        <Fragment>
          <img src={item.src} alt="GIF" style={{ width: "220px", height: "auto" }} />
          <Typography color="inherit">{item.serviceName}</Typography>
          {item.desc}
        </Fragment>
      }
    >
      <ServiceName>{item.serviceName}</ServiceName>
    </HtmlTooltip>
  );
}
