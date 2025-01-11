import { FontsTypes } from '@shared/types';

const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}px;
  letter-spacing: 0%;
`;

export const fonts: FontsTypes = {
  heading_bold_24px: createFontStyle('Pretendard', 700, 24, 34),
};
