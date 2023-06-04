import React from 'react';
import { Box, Skeleton } from '@mui/material';

interface Style {
  width: number;
  height: number;
  number: number;
}

export const LoadingSkeleton: React.FC<Style> = ({ width, height, number }) => {
  return (
    <Box marginX={"auto"} width={"100%"} className="grid mx-auto gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5 " >
      {Array.from({ length: number }).map((_, index) => (
        <Skeleton style={{ marginBottom: "2rem" }} key={index} variant="rounded" width={width} height={height} />
      ))}
    </Box>
  );
};
