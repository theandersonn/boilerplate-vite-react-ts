import { ParagraphProps } from './types';
import * as S from './Paragraph.styles';

export const Paragraph = ({ children }: ParagraphProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
