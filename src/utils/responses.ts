import type { Response } from "express";

export const sendSuccessStatus = (
  res: Response,
  message: string,
  status = 200
): void => {
  res.status(status).json({
    success: true,
    message,
  });
};

export const sendSuccessDataResponse = <T>(
  res: Response,
  message: string,
  data: T,
  status = 200
): void => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const sendErrorStatus = (
  res: Response,
  message: string,
  status = 500
): void => {
  res.status(status).json({
    success: false,
    message,
  });
};
