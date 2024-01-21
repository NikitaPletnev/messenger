import {Autocomplete, AutocompleteProps, styled} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {palette} from "../../configs/palette";
import {StoreInterface} from "../../interfaces/StoreInterface";

const StyledAutocompleteEl = styled(Autocomplete)({
    "& .Mui-focused":{
        borderColor: palette.dark.borderColor
    },
    borderRadius: "4px",
});
// eslint-disable-next-line
const StyledAutocomplete = ({...props}: AutocompleteProps<any, any, any, any>):JSX.Element => {
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <StyledAutocompleteEl {...props}
        sx={{
            border: "1px solid" + palette[theme].borderColor,
            background: palette[theme].mainBg,
            color: palette[theme].textColor,
            "& svg":{
                color: palette[theme].textColor,
            },
            "& .MuiChip-root":{
                color: palette[theme].textColor,
                border: "1px solid" + palette[theme].borderColor,
                "& svg":{
                    color: palette[theme].blue,
                },
            }
        }}
        componentsProps={{
            paper:{
                sx:{
                    border: "1px solid" + palette[theme].borderColor,
                    background: palette[theme].dropdownBg,
                    "& .MuiAutocomplete-option":{
                        color: palette[theme].textColor,
                        "&:hover":{
                            background: palette[theme].mainBgRgba,
                        }
                    },
                    "& *":{
                        "&::-webkit-scrollbar-thumb": {
                            background: palette.light.backgroundColorScroll,
                            borderRadius: "8px",
                        },
                        "& h5":{
                            textAlign: "center",
                            paddingBottom: "10px",
                        }
                    }
                }
            }
        }}
    />;
    
};

export default StyledAutocomplete;
