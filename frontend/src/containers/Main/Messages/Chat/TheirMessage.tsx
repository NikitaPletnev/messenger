import React from "react";
import {useSelector} from "react-redux";
import {AuthorName} from "../../../../components/AuthorName";
import {DateText} from "../../../../components/DateText";
import {MessageContainer} from "../../../../components/MessageContainer";
import {palette} from "../../../../configs/palette";
import {dataFormatter} from "../../../../helpers/utils/dataFormatter";
import {getRandomColor} from "../../../../helpers/utils/getRandomColor";
import {MessageInterface} from "../../../../interfaces/MessageInterface";
import {StoreInterface} from "../../../../interfaces/StoreInterface";

const TheirMessage = ({data, colorPuck}:{data: MessageInterface, colorPuck: string[][]}):JSX.Element => {
    
    const theme = useSelector((state: StoreInterface) => state.theme);
    
    return <MessageContainer
        sx={{
            color: palette[theme].textColor,
            background: palette[theme].messageBg,
            boxShadow: "0 0 25px 10px " + palette[theme].mainBg,
        }}
    >
        <AuthorName sx={{
            color: colorPuck.find((opt) => opt[0] === data.authorName)?.[1] || getRandomColor(),
            textShadow: `1px 1px 2px ${palette[theme].mainBg}, -1px -1px 2px ${palette[theme].mainBg}, 1px -1px 2px ${palette[theme].mainBg}, -1px 1px 2px ${palette[theme].mainBg}`,
        }}>{data.authorName}</AuthorName>
        <p>{data.content}</p>
        <DateText
            sx={{
                color: palette[theme].titleColor
            }}
        >{dataFormatter(data.dateTime)}</DateText>
    </MessageContainer>;
};

export default TheirMessage;
