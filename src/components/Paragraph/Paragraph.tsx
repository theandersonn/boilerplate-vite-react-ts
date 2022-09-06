import * as S from './Paragraph.styles';

export type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
