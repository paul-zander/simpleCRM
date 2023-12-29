import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectMenu({ value, onChange, selectItems, label, inputlabel }) {
  return (
    <Box sx={{ minWidth: 120, margin: "24px" }}>
      <FormControl required className="xs:w-[250px] sm:w-[400px]">
        <InputLabel id="demo-simple-select-label">{inputlabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {selectItems.map((item) => (
            <MenuItem value={item.name} key={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectMenu;
