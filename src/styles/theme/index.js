import { createTheme} from "@mui/material";

import palette from "./palette";
import breakpoints from "./breakpoints";
import shadows, {customShadows, customAlpha} from "./shadows";
import shape from "./shape";
import typography from "./typography";

import Input from "./components/Input";
import Card from "./components/Card";
import Autocomplete from "./components/Autocomplete";
import Backdrop from "./components/Backdrop";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import Lists from "./components/Lists";
import Paper from "./components/Paper";
import Tooltip from "./components/Tooltip";
import Typography from "./components/Typography";

const components = (theme) => Object.assign(
  Input(theme),
  Card(theme),
  Autocomplete(theme),
  Backdrop(theme),
  Button(theme),
  IconButton(theme),
  Lists(theme),
  Paper(theme),
  Tooltip(theme),
  Typography(theme)
);

const theme = createTheme({
  palette,
  breakpoints,
  shadows,
  shape,
  typography,
  customShadows,
  customAlpha
});

theme.components = components(theme);

export default theme;