import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";

export const FadeTooltip = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={title}
    >
      {children}
    </Tooltip>
  );
};

export const ZoomTooltip = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <Tooltip
      arrow
      TransitionComponent={Zoom}
      placement="right-end"
      title={title}
    >
      {children}
    </Tooltip>
  );
};

export const GrowTooltip = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};
