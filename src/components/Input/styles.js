import styled from "styled-components";
import { colors } from "../../theme/colors";

export const InputStyle = styled.input`

    padding: 8px 12px;

    border-radius: 6px;
    border: 1px solid #ccc;

    width: 100%;

    outline: 0;

    &:focus {
        border: 1px solid ${colors.orange.primary};
    }

`;