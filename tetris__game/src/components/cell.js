import React from 'react';
import { StyledCell } from './styles/styled__cell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) => (
  <StyledCell type={'J'} color={TETROMINOS['J'].color}>cell</StyledCell>

)

export default Cell;