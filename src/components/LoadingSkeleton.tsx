import React from 'react';
import { Box, Skeleton } from '@mui/material';

interface Style {
  width?: string;
  height?: string;
  number: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<Style> = ({ width, height, number, className }) => {
  return (
    <Box marginX={"auto"} width={"100%"} className={`${className === `grid` && `grid mx-auto gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}`} >
      {Array.from({ length: number }).map((_, index) => (
        <Skeleton className={className} style={{ marginBottom: "2rem" }} key={index} variant="rounded" width={width} height={height} />
      ))}
    </Box>
  );
};
