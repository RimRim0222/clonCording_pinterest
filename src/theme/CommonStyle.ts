import { css } from "@emotion/react";

export const cssx = {
  flexBtw: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  flexBtwR: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenterR: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexStartR: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  flexEndR: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `
};
