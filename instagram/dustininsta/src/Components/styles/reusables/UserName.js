
import React from 'react';
import styled, { css } from 'styled-components';


const UserName = styled.li`


margin: ${props => props.banner ? '10px':null};
font-weight: ${props => props.banner ? 'bold':null};
font-size: ${props => props.banner ? '16px':null};;
margin: ${props => props.comment ? '3px':null};
font-weight: ${props => props.comment ? 'bold':null};
font-size: ${props => props.comment ? '14px':null};
`

export default UserName;

